webpackJsonp([2],{242:function(t,e,n){"use strict";var o=n(71),a=n(0),r=[],i=function(t){return t};a.enableProdMode(),i=function(t){return o.disableDebugTools(),t},r=r.slice(),e.decorateModuleRef=i,e.ENV_PROVIDERS=r.slice()},326:function(t,e,n){"use strict";var o=n(0),a=function(){function t(){this._state={}}return Object.defineProperty(t.prototype,"state",{get:function(){return this._state=this._clone(this._state)},set:function(t){throw new Error("do not mutate the `.state` directly")},enumerable:!0,configurable:!0}),t.prototype.get=function(t){var e=this.state;return e.hasOwnProperty(t)?e[t]:e},t.prototype.set=function(t,e){return this._state[t]=e},t.prototype._clone=function(t){return JSON.parse(JSON.stringify(t))},t=__decorate([o.Injectable(),__metadata("design:paramtypes",[])],t)}();e.AppState=a},327:function(t,e,n){"use strict";function o(t){for(var n in t)e.hasOwnProperty(n)||(e[n]=t[n])}o(n(505))},328:function(t,e,n){"use strict";function o(t){for(var n in t)e.hasOwnProperty(n)||(e[n]=t[n])}o(n(506))},329:function(t,e,n){"use strict";function o(t){for(var n in t)e.hasOwnProperty(n)||(e[n]=t[n])}o(n(507))},330:function(t,e,n){"use strict";function o(t){for(var n in t)e.hasOwnProperty(n)||(e[n]=t[n])}o(n(508))},380:function(t,e,n){"use strict";function o(t){for(var n in t)e.hasOwnProperty(n)||(e[n]=t[n])}o(n(502))},501:function(t,e,n){"use strict";var o=n(0),a=n(326),r=n(96),i=function(){function t(t,e){this.appState=t,this.skyObjects=e}return t.prototype.ngOnInit=function(){console.log("Initial App State",this.appState.state)},t=__decorate([o.Component({selector:"app",encapsulation:o.ViewEncapsulation.None,styles:[n(677)],template:'\n    <div class="container-fluid">\n        <div class="row">\n            <div class="col-sm-12">\n                <a [routerLink]=" [\'./\'] ">\n                <h2>Skyhash - Objects</h2>\n                </a>\n            </div>\n        </div>\n         <nav>\n          <span>\n            <a [routerLink]=" [\'./dashboard\'] ">\n              Dashboard\n            </a>\n          </span>\n          |\n          <span>\n            <a [routerLink]=" [\'./collection\'] ">\n              Collection\n            </a>\n          </span>\n        </nav>\n    </div>\n    <main>\n      <router-outlet></router-outlet>\n    </main>\n    <!--<pre class="app-state">this.appState.state = {{ appState.state | json }}</pre>-->\n    <footer>\n    </footer>\n  '}),__metadata("design:paramtypes",["function"==typeof(e="undefined"!=typeof a.AppState&&a.AppState)&&e||Object,"function"==typeof(i="undefined"!=typeof r.SkyObjectService&&r.SkyObjectService)&&i||Object])],t);var e,i}();e.AppComponent=i},502:function(t,e,n){"use strict";var o=n(0),a=n(71),r=n(188),i=n(149),s=n(93),c=n(105),p=n(242),u=n(504),f=n(501),d=n(503),h=n(326),m=n(328),l=n(329),y=n(510),v=n(327),b=n(330),S=d.APP_RESOLVER_PROVIDERS.concat(y.APP_SERVICE_PROVIDERS,[h.AppState]),O=function(){function t(t,e){this.appRef=t,this.appState=e}return t.prototype.hmrOnInit=function(t){if(t&&t.state){if(console.log("HMR store",JSON.stringify(t,null,2)),this.appState._state=t.state,"restoreInputValues"in t){var e=t.restoreInputValues;setTimeout(e)}this.appRef.tick(),delete t.state,delete t.restoreInputValues}},t.prototype.hmrOnDestroy=function(t){var e=this.appRef.components.map(function(t){return t.location.nativeElement}),n=this.appState._state;t.state=n,t.disposeOldHosts=c.createNewHosts(e),t.restoreInputValues=c.createInputTransfer(),c.removeNgStyles()},t.prototype.hmrAfterDestroy=function(t){t.disposeOldHosts(),delete t.disposeOldHosts},t=__decorate([o.NgModule({bootstrap:[f.AppComponent],declarations:[f.AppComponent,m.DashboardComponent,b.SchemaComponent,v.CollectionComponent,l.NoContentComponent],imports:[a.BrowserModule,r.FormsModule,i.HttpModule,s.RouterModule.forRoot(u.ROUTES,{useHash:!0,preloadingStrategy:s.PreloadAllModules})],providers:[p.ENV_PROVIDERS,S]}),__metadata("design:paramtypes",["function"==typeof(e="undefined"!=typeof o.ApplicationRef&&o.ApplicationRef)&&e||Object,"function"==typeof(n="undefined"!=typeof h.AppState&&h.AppState)&&n||Object])],t);var e,n}();e.AppModule=O},503:function(t,e,n){"use strict";var o=n(0),a=n(10);n(663);var r=function(){function t(){}return t.prototype.resolve=function(t,e){return a.Observable.of({res:"I am data"})},t=__decorate([o.Injectable(),__metadata("design:paramtypes",[])],t)}();e.DataResolver=r,e.APP_RESOLVER_PROVIDERS=[r]},504:function(t,e,n){"use strict";var o=n(328),a=n(329),r=n(327),i=n(330);e.ROUTES=[{path:"",component:o.DashboardComponent},{path:"collection",component:r.CollectionComponent},{path:"dashboard",component:o.DashboardComponent},{path:"schema/:name",component:i.SchemaComponent},{path:"detail",loadChildren:function(){return n.e(0).then(n.bind(null,681)).then(function(t){return t.default})}},{path:"**",component:a.NoContentComponent}]},505:function(t,e,n){"use strict";var o=n(0),a=n(96),r=function(){function t(t){this.skyObject=t}return t.prototype.ngOnInit=function(){var t=this;this.skyObject.getSchemaList().subscribe(function(e){t.schemaList=e})},t=__decorate([o.Component({selector:"collection",template:n(656)}),__metadata("design:paramtypes",["function"==typeof(e="undefined"!=typeof a.SkyObjectService&&a.SkyObjectService)&&e||Object])],t);var e}();e.CollectionComponent=r},506:function(t,e,n){"use strict";var o=n(0),a=n(93),r=n(96),i=function(){function t(t,e){this.route=t,this.skyObject=e,this.stat={total:0,memory:0}}return t.prototype.ngOnInit=function(){var t=this;this.skyObject.getStatistic().subscribe(function(e){t.stat=e})},t.prototype.formatSizeUnits=function(t){return t>=1073741824?t=(t/1073741824).toFixed(2)+" GB":t>=1048576?t=(t/1048576).toFixed(2)+" MB":t>=1024?t=(t/1024).toFixed(2)+" KB":t>1?t+=" bytes":1===t?t+=" byte":t="0 byte",t},t=__decorate([o.Component({selector:"dashboard",styles:["\n  "],template:n(657)}),__metadata("design:paramtypes",["function"==typeof(e="undefined"!=typeof a.ActivatedRoute&&a.ActivatedRoute)&&e||Object,"function"==typeof(i="undefined"!=typeof r.SkyObjectService&&r.SkyObjectService)&&i||Object])],t);var e,i}();e.DashboardComponent=i},507:function(t,e,n){"use strict";var o=n(0),a=function(){function t(){}return t=__decorate([o.Component({selector:"no-content",template:"\n    <div>\n      <h1>404: page missing</h1>\n    </div>\n  "}),__metadata("design:paramtypes",[])],t)}();e.NoContentComponent=a},508:function(t,e,n){"use strict";var o=n(0),a=n(93),r=n(96),i=function(){function t(t,e){this.route=t,this.skyObject=e,this.schema={name:"",fields:[]}}return t.prototype.ngOnInit=function(){var t=this,e=this.route.snapshot.params.name;this.skyObject.getSchema(e).subscribe(function(e){t.schema=e}),this.skyObject.getObjectList(e).subscribe(function(e){t.items=e})},t.prototype.displayItem=function(t,e){for(var n="",o=0;o<t.fields.length;o++)n+=e[t.fields[o].name]+" ";return n},t=__decorate([o.Component({selector:"schema",template:n(658)}),__metadata("design:paramtypes",["function"==typeof(e="undefined"!=typeof a.ActivatedRoute&&a.ActivatedRoute)&&e||Object,"function"==typeof(i="undefined"!=typeof r.SkyObjectService&&r.SkyObjectService)&&i||Object])],t);var e,i}();e.SchemaComponent=i},509:function(t,e,n){"use strict";var o=n(0),a=function(){function t(){}return Object.defineProperty(t,"API_PATH",{get:function(){return"/object1/"},enumerable:!0,configurable:!0}),t=__decorate([o.Injectable(),__metadata("design:paramtypes",[])],t)}();e.Constants=a},510:function(t,e,n){"use strict";var o=n(96);e.APP_SERVICE_PROVIDERS=[o.SkyObjectService]},654:function(t,e,n){e=t.exports=n(655)(),e.push([t.i,"body,html{height:100%;font-family:Arial,Helvetica,sans-serif}span.active{background-color:gray}",""])},655:function(t,e){t.exports=function(){var t=[];return t.toString=function(){for(var t=[],e=0;e<this.length;e++){var n=this[e];n[2]?t.push("@media "+n[2]+"{"+n[1]+"}"):t.push(n[1])}return t.join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var o={},a=0;a<this.length;a++){var r=this[a][0];"number"==typeof r&&(o[r]=!0)}for(a=0;a<e.length;a++){var i=e[a];"number"==typeof i[0]&&o[i[0]]||(n&&!i[2]?i[2]=n:n&&(i[2]="("+i[2]+") and ("+n+")"),t.push(i))}},t}},656:function(t,e){t.exports='<h1>Storage</h1>\n<div>\n    <div *ngFor="let schema of schemaList">\n        <a [routerLink]=" [\'/schema\', schema.name.toLowerCase()] ">\n            <span>{{schema.name}}</span>\n        </a>\n    </div>\n</div>\n'},657:function(t,e){t.exports="<h1>Dashboard</h1>\n<div>\n    <p>Total objects: {{stat.total}}</p>\n    <p>Total memory: {{formatSizeUnits(stat.memory)}}</p>\n</div>\n<div>\n    <h3>\n    </h3>\n</div>\n"},658:function(t,e){t.exports='<h1>Schema: {{schema.StructName}}</h1>\n<div>\n    <div *ngFor="let item of this.items">\n            <span>{{displayItem(schema, item)}}</span>\n    </div>\n</div>\n'},663:function(t,e,n){"use strict";var o=n(10),a=n(70);o.Observable.of=a.of},677:function(t,e,n){var o=n(654);"string"==typeof o?t.exports=o:t.exports=o.toString()},678:function(t,e,n){"use strict";function o(){return a.platformBrowserDynamic().bootstrapModule(i.AppModule).then(r.decorateModuleRef).catch(function(t){return console.error(t)})}var a=n(150),r=n(242),i=(n(105),n(380));e.main=o,"complete"===document.readyState?o():document.addEventListener("DOMContentLoaded",function(){o()})},96:function(t,e,n){"use strict";var o=n(0),a=n(509),r=n(149),i=function(){function t(){}return t}();e.Statistic=i;var s=function(){function t(){}return t}();e.Schema=s;var c=function(){function t(){}return t}();e.SchemaField=c;var p=function(){function t(t){this.http=t,this.api=a.Constants.API_PATH,this.headers=new r.Headers,this.headers.append("Content-Type","application/x-www-form-urlencoded")}return t.prototype.getSchemaList=function(){var t=this;return this.http.get(this.api+"_schema",{headers:t.headers}).map(function(t){return t.json()}).map(function(t){return t})},t.prototype.getSchema=function(t){var e=this;return this.http.get(this.api+t+"/schema",{headers:e.headers}).map(function(t){return t.json()})},t.prototype.getStatistic=function(){var t=this;return this.http.get(this.api+"_stat",{headers:t.headers}).map(function(t){return t.json()})},t.prototype.getObjectList=function(t){var e=this;return this.http.get(this.api+t+"/list",{headers:e.headers}).map(function(t){return t.json()})},t=__decorate([o.Injectable(),__metadata("design:paramtypes",["function"==typeof(e="undefined"!=typeof r.Http&&r.Http)&&e||Object])],t);var e}();e.SkyObjectService=p}},[678]);