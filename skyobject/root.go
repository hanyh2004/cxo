package skyobject

import (
	"sort"
	"time"

	"github.com/skycoin/skycoin/src/cipher"
	"github.com/skycoin/skycoin/src/cipher/encoder"
)

// an entity of map[string]cipher.SHA256
type RegistryEntity struct {
	K string
	V cipher.SHA256
}

// rootEncoding is used to encode and decode the Root
type rootEncoding struct {
	Time int64
	Seq  uint64
	Refs []Reference
	Reg  []RegistryEntity // registery
}

// A Root represents wrapper around root object
type Root struct {
	Time int64
	Seq  uint64

	// All of the references points to Dynamic objects
	Refs []Reference // all references of the root

	Sig cipher.Sig    `enc:"-"` // signature
	Pub cipher.PubKey `enc:"-"` // public key

	reg *Registry  `enc:"-"` // back reference to registery
	cnt *Container `enc:"-"` // back reference to container
}

// Sing encodes the root and calculate signature of hash of encoded data
// using given secret key
func (r *Root) Sign(sec cipher.SecKey) {
	r.Sig = cipher.SignHash(cipher.SumSHA256(r.Encode()), sec)
}

// Touch set timestamp to now and increment seq
func (r *Root) Touch() {
	r.Time = time.Now().UnixNano()
	r.Seq++
}

// Add given object to root. The Inject creates Dynamic object from given one
// and appends the Dynamic to the Root
func (r *Root) Inject(i interface{}) (inj Reference) {
	inj = r.cnt.Save(r.cnt.Dynamic(i))
	r.Refs = append(r.Refs, inj)
	return
}

// InjectHash injects hash of Dynamic object
func (r *Root) InjectHash(hash Reference) (err error) {
	if hash == (Reference{}) {
		err = ErrInvalidReference
		return
	}
	r.Refs = append(r.Refs, hash)
	return
}

// Encode convertes a root to []byte
func (r *Root) Encode() (p []byte) {
	var x rootEncoding
	// by unknown reasons Pub and Sig of original was changed after encoding
	x.Time = r.Time
	x.Seq = r.Seq
	x.Refs = r.Refs
	if len(r.reg.reg) > 0 {
		x.Reg = make([]RegistryEntity, 0, len(r.reg.reg))
	}
	for k, v := range r.reg.reg {
		x.Reg = append(x.Reg, RegistryEntity{k, v})
	}
	sort.Slice(x.Reg, func(i, j int) bool {
		return x.Reg[i].K < x.Reg[j].K
	})
	p = encoder.Serialize(&x)
	return
}

//
// reference value
//

// Values returns set of values the root object refers to
func (r *Root) Values() (vs []*Value, err error) {
	if r == nil {
		return
	}
	if len(r.Refs) == 0 {
		return
	}
	vs = make([]*Value, 0, len(r.Refs))
	var (
		s *Schema

		dd     []byte
		sd, od []byte
		ok     bool
	)
	for _, rd := range r.Refs {
		// take a look at the reference
		if rd.IsBlank() {
			err = ErrInvalidReference // nil-references are not allowed for root
			return
		}
		// obtain dynamic reference, the reference points to
		if dd, ok = r.cnt.get(rd); !ok {
			err = &MissingObject{rd, ""}
			return
		}
		// decode the dynamic reference
		var dr Dynamic
		if err = encoder.DeserializeRaw(dd, &dr); err != nil {
			return
		}
		// is the dynamic reference valid
		if !dr.IsValid() {
			err = ErrInvalidReference
			return
		}
		// is it blank
		if dr.IsBlank() {
			vs = append(vs, nilValue(r, nil)) // no value, nor schema
			continue
		}
		// obtain schema of the dynamic reference
		if sd, ok = r.cnt.get(dr.Schema); !ok {
			err = &MissingSchema{dr.Schema}
			return
		}
		// decode the schema
		s = new(Schema)
		if err = s.Decode(r.reg, sd); err != nil {
			return
		}
		// obtain object of the dynamic reference
		if od, ok = r.cnt.get(dr.Object); !ok {
			err = &MissingObject{key: dr.Object, schemaName: s.Name()}
			return
		}
		// create value
		vs = append(vs, &Value{r, s, od})
	}
	return
}
