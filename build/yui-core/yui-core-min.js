if(typeof YUI!="undefined"){YUI._YUI=YUI;}var YUI=function(){var c=0,f=this,b=arguments,a=b.length,e=function(h,g){return(h&&h.hasOwnProperty&&(h instanceof g));},d=(typeof YUI_config!=="undefined")&&YUI_config;if(!(e(f,YUI))){f=new YUI();}else{f._init();if(YUI.GlobalConfig){f.applyConfig(YUI.GlobalConfig);}if(d){f.applyConfig(d);}if(!a){f._setup();}}if(a){for(;c<a;c++){f.applyConfig(b[c]);}f._setup();}f.instanceOf=e;return f;};(function(){var r,b,s="@VERSION@",j=".",p="http://yui.yahooapis.com/",v="yui3-js-enabled",d="yui3-css-stamp",n=function(){},h=Array.prototype.slice,t={"io.xdrReady":1,"io.xdrResponse":1,"SWF.eventHandler":1},g=(typeof window!="undefined"),f=(g)?window:null,x=(g)?f.document:null,e=x&&x.documentElement,a=e&&e.className,c={},k=new Date().getTime(),o=function(B,A,z,y){if(B&&B.addEventListener){B.addEventListener(A,z,y);}else{if(B&&B.attachEvent){B.attachEvent("on"+A,z);}}},w=function(C,B,A,y){if(C&&C.removeEventListener){try{C.removeEventListener(B,A,y);}catch(z){}}else{if(C&&C.detachEvent){C.detachEvent("on"+B,A);}}},u=function(){YUI.Env.windowLoaded=true;YUI.Env.DOMReady=true;if(g){w(window,"load",u);}},l=function(A,z){var y=A.Env._loader;if(y){y.ignoreRegistered=false;y.onEnd=null;y.data=null;y.required=[];y.loadType=null;}else{y=new A.Loader(A.config);A.Env._loader=y;}YUI.Env.core=A.Array.dedupe([].concat(YUI.Env.core,["loader-base","loader-rollup","loader-yui3"]));return y;},q=function(A,z){for(var y in z){if(z.hasOwnProperty(y)){A[y]=z[y];}}},m={success:true};if(e&&a.indexOf(v)==-1){if(a){a+=" ";}a+=v;e.className=a;}if(s.indexOf("@")>-1){s="3.5.0";}r={applyConfig:function(F){F=F||n;var A,D,C=this.config,E=C.modules,z=C.groups,B=C.aliases,y=this.Env._loader;for(D in F){if(F.hasOwnProperty(D)){A=F[D];if(E&&D=="modules"){q(E,A);}else{if(B&&D=="aliases"){q(B,A);}else{if(z&&D=="groups"){q(z,A);}else{if(D=="win"){C[D]=(A&&A.contentWindow)||A;C.doc=C[D]?C[D].document:null;}else{if(D=="_yuid"){}else{C[D]=A;}}}}}}}if(y){y._config(F);}},_config:function(y){this.applyConfig(y);},_init:function(){var B,A,C=this,y=YUI.Env,z=C.Env,D;C.version=s;if(!z){C.Env={core:["get","intl-base"],mods:{},versions:{},base:p,cdn:p+s+"/build/",_idx:0,_used:{},_attached:{},_missed:[],_yidx:0,_uidx:0,_guidp:"y",_loaded:{},_BASE_RE:/(?:\?(?:[^&]*&)*([^&]*))?\b(simpleyui|yui(?:-\w+)?)\/\2(?:-(min|debug))?\.js/,parseBasePath:function(I,G){var E=I.match(G),H,F;if(E){H=RegExp.leftContext||I.slice(0,I.indexOf(E[0]));F=E[3];if(E[1]){H+="?"+E[1];}H={filter:F,path:H};}return H;},getBase:y&&y.getBase||function(I){var G=(x&&x.getElementsByTagName("script"))||[],J=z.cdn,F,H,E,K;for(H=0,E=G.length;H<E;++H){K=G[H].src;if(K){F=C.Env.parseBasePath(K,I);if(F){B=F.filter;J=F.path;break;}}}return J;}};z=C.Env;z._loaded[s]={};if(y&&C!==YUI){z._yidx=++y._yidx;z._guidp=("yui_"+s+"_"+z._yidx+"_"+k).replace(/\./g,"_");}else{if(YUI._YUI){y=YUI._YUI.Env;z._yidx+=y._yidx;z._uidx+=y._uidx;for(D in y){if(!(D in z)){z[D]=y[D];}}delete YUI._YUI;}}C.id=C.stamp(C);c[C.id]=C;}C.constructor=YUI;C.config=C.config||{bootstrap:true,cacheUse:true,debug:true,doc:x,fetchCSS:true,throwFail:true,useBrowserConsole:true,useNativeES5:true,win:f};if(x&&!x.getElementById(d)){A=x.createElement("div");A.innerHTML='<div id="'+d+'" style="position: absolute !important; visibility: hidden !important"></div>';YUI.Env.cssStampEl=A.firstChild;if(x.body){x.body.appendChild(YUI.Env.cssStampEl);}else{e.insertBefore(YUI.Env.cssStampEl,e.firstChild);}}C.config.lang=C.config.lang||"en-US";C.config.base=YUI.config.base||C.Env.getBase(C.Env._BASE_RE);if(!B||(!("mindebug").indexOf(B))){B="min";}B=(B)?"-"+B:B;C.config.loaderPath=YUI.config.loaderPath||"loader/loader"+B+".js";},_setup:function(D){var z,C=this,y=[],B=YUI.Env.mods,A=C.config.core||[].concat(YUI.Env.core);for(z=0;z<A.length;z++){if(B[A[z]]){y.push(A[z]);}}C._attach(["yui-base"]);C._attach(y);if(C.Loader){l(C);}},applyTo:function(E,D,A){if(!(D in t)){this.log(D+": applyTo not allowed","warn","yui");return null;}var z=c[E],C,y,B;if(z){C=D.split(".");y=z;for(B=0;B<C.length;B=B+1){y=y[C[B]];if(!y){this.log("applyTo not found: "+D,"warn","yui");}}return y&&y.apply(z,A);}return null;},add:function(z,E,D,y){y=y||{};var C=YUI.Env,F={name:z,fn:E,version:D,details:y},G,B,A=C.versions;C.mods[z]=F;A[D]=A[D]||{};A[D][z]=F;for(B in c){if(c.hasOwnProperty(B)){G=c[B].Env._loader;if(G){if(!G.moduleInfo[z]||G.moduleInfo[z].temp){G.addModule(y,z);}}}}return this;},_attach:function(F,R){var K,S,Q,N,y,I,A,B=YUI.Env.mods,L=YUI.Env.aliases,z=this,J,E=YUI.Env._renderedMods,C=z.Env._loader,G=z.Env._attached,M=F.length,C,D,H,P=[];for(K=0;K<M;K++){S=F[K];Q=B[S];P.push(S);if(C&&C.conditions[S]){for(J in C.conditions[S]){if(C.conditions[S].hasOwnProperty(J)){D=C.conditions[S][J];H=D&&((D.ua&&z.UA[D.ua])||(D.test&&D.test(z)));if(H){P.push(D.name);}}}}}F=P;M=F.length;for(K=0;K<M;K++){if(!G[F[K]]){S=F[K];Q=B[S];if(L&&L[S]&&!Q){z._attach(L[S]);continue;}if(!Q){if(C&&C.moduleInfo[S]){Q=C.moduleInfo[S];R=true;}if(!R&&S){if((S.indexOf("skin-")===-1)&&(S.indexOf("css")===-1)){z.Env._missed.push(S);z.Env._missed=z.Array.dedupe(z.Env._missed);z.message("NOT loaded: "+S,"warn","yui");}}}else{G[S]=true;for(J=0;J<z.Env._missed.length;J++){if(z.Env._missed[J]===S){z.message("Found: "+S+" (was reported as missing earlier)","warn","yui");z.Env._missed.splice(J,1);}}if(C&&E&&E[S]&&E[S].temp){C.getRequires(E[S]);y=[];for(J in C.moduleInfo[S].expanded_map){if(C.moduleInfo[S].expanded_map.hasOwnProperty(J)){y.push(J);}}z._attach(y);}N=Q.details;y=N.requires;I=N.use;A=N.after;if(N.lang){y=y||[];y.unshift("intl");}if(y){for(J=0;J<y.length;J++){if(!G[y[J]]){if(!z._attach(y)){return false;}break;}}}if(A){for(J=0;J<A.length;J++){if(!G[A[J]]){if(!z._attach(A,true)){return false;}break;}}}if(Q.fn){if(z.config.throwFail){Q.fn(z,S);}else{try{Q.fn(z,S);}catch(O){z.error("Attach error: "+S,O,S);return false;}}}if(I){for(J=0;J<I.length;J++){if(!G[I[J]]){if(!z._attach(I)){return false;}break;}}}}}}return true;},_delayCallback:function(y,B){var A=this,z=["event-base"];
B=(A.Lang.isObject(B)?B:{event:B});if(B.event==="load"){z.push("event-synthetic");}return function(){var C=arguments;A._use(z,function(){A.on(B.event,function(){C[1].delayUntil=B.event;y.apply(A,C);},B.args);});};},use:function(){var B=h.call(arguments,0),F=B[B.length-1],E=this,D=0,z=[],A,y=E.Env,C=true;if(E.Lang.isFunction(F)){B.pop();if(E.config.delayUntil){F=E._delayCallback(F,E.config.delayUntil);}}else{F=null;}if(E.Lang.isArray(B[0])){B=B[0];}if(E.config.cacheUse){while((A=B[D++])){if(!y._attached[A]){C=false;break;}}if(C){if(B.length){}E._notify(F,m,B);return E;}}if(E._loading){E._useQueue=E._useQueue||new E.Queue();E._useQueue.add([B,F]);}else{E._use(B,function(H,G){H._notify(F,G,B);});}return E;},_notify:function(B,y,z){if(!y.success&&this.config.loadErrorFn){this.config.loadErrorFn.call(this,this,B,y,z);}else{if(B){if(this.Env._missed&&this.Env._missed.length){y.msg="Missing modules: "+this.Env._missed.join();y.success=false;}if(this.config.throwFail){B(this,y);}else{try{B(this,y);}catch(A){this.error("use callback error",A,z);}}}}},_use:function(A,C){if(!this.Array){this._attach(["yui-base"]);}var P,H,Q,M,z=this,R=YUI.Env,B=R.mods,y=z.Env,E=y._used,O=R.aliases,L=R._loaderQueue,U=A[0],G=z.Array,S=z.config,F=S.bootstrap,N=[],J=[],T=true,D=S.fetchCSS,K=function(aa,ad){var Y=0,ac=[],W,Z,X,ab,V;if(!aa.length){return;}if(O){Z=aa.length;for(Y=0;Y<Z;Y++){if(O[aa[Y]]&&!B[aa[Y]]){ac=[].concat(ac,O[aa[Y]]);}else{ac.push(aa[Y]);}}aa=ac;}Z=aa.length;for(Y=0;Y<Z;Y++){W=aa[Y];if(!ad){J.push(W);}if(E[W]){continue;}X=B[W];ab=null;V=null;if(X){E[W]=true;ab=X.details.requires;V=X.details.use;}else{if(!R._loaded[s][W]){N.push(W);}else{E[W]=true;}}if(ab&&ab.length){K(ab);}if(V&&V.length){K(V,1);}}},I=function(Z){var X=Z||{success:true,msg:"not dynamic"},W,V,Y=true,aa=X.data;z._loading=false;if(aa){V=N;N=[];J=[];K(aa);W=N.length;if(W){if([].concat(N).sort().join()==V.sort().join()){W=false;}}}if(W&&aa){z._loading=true;z._use(N,function(){if(z._attach(aa)){z._notify(C,X,aa);}});}else{if(aa){Y=z._attach(aa);}if(Y){z._notify(C,X,A);}}if(z._useQueue&&z._useQueue.size()&&!z._loading){z._use.apply(z,z._useQueue.next());}};if(U==="*"){A=[];for(i in B){if(B.hasOwnProperty(i)){A.push(i);}}T=z._attach(A);if(T){I();}return z;}if(B["loader"]&&!z.Loader){z._attach(["loader"]);}if(F&&z.Loader&&A.length){H=l(z);H.require(A);H.ignoreRegistered=true;H._boot=true;H.calculate(null,(D)?null:"js");A=H.sorted;N=A;H._boot=false;}if(!z.Loader){K(A);}P=N.length;if(P){N=G.dedupe(N);P=N.length;}if(F&&P&&z.Loader){z._loading=true;H=l(z);H.onEnd=I;H.context=z;H.data=A;H.ignoreRegistered=false;H.require(A);H.insert(null,(D)?null:"js");}else{if(F&&P&&z.Get&&!y.bootstrapped){z._loading=true;Q=function(){z._loading=false;L.running=false;y.bootstrapped=true;R._bootstrapping=false;if(z._attach(["loader"])){z._use(A,C);}};if(R._bootstrapping){L.add(Q);}else{R._bootstrapping=true;z.Get.script(S.base+S.loaderPath,{onEnd:Q});}}else{T=z._attach(A);if(T){I();}}}return z;},namespace:function(){var z=arguments,D,B=0,A,C,y;for(;B<z.length;B++){D=this;y=z[B];if(y.indexOf(j)>-1){C=y.split(j);for(A=(C[0]=="YAHOO")?1:0;A<C.length;A++){D[C[A]]=D[C[A]]||{};D=D[C[A]];}}else{D[y]=D[y]||{};D=D[y];}}return D;},log:n,message:n,dump:function(y){return""+y;},error:function(C,z,B){var A=this,y;if(A.config.errorFn){y=A.config.errorFn.apply(A,arguments);}if(!y){throw (z||new Error(C));}else{A.message(C,"error",""+B);}return A;},guid:function(y){var z=this.Env._guidp+"_"+(++this.Env._uidx);return(y)?(y+z):z;},stamp:function(A,B){var y;if(!A){return A;}if(A.uniqueID&&A.nodeType&&A.nodeType!==9){y=A.uniqueID;}else{y=(typeof A==="string")?A:A._yuid;}if(!y){y=this.guid();if(!B){try{A._yuid=y;}catch(z){y=null;}}}return y;},destroy:function(){var y=this;if(y.Event){y.Event._unload();}delete c[y.id];delete y.Env;delete y.config;}};YUI.prototype=r;for(b in r){if(r.hasOwnProperty(b)){YUI[b]=r[b];}}YUI.applyConfig=function(y){if(!y){return;}if(YUI.GlobalConfig){this.prototype.applyConfig.call(this,YUI.GlobalConfig);}this.prototype.applyConfig.call(this,y);YUI.GlobalConfig=this.config;};YUI._init();if(g){o(window,"load",u);}else{u();}YUI.Env.add=o;YUI.Env.remove=w;if(typeof exports=="object"){exports.YUI=YUI;}}());YUI.add("yui-base",function(b){var j=b.Lang||(b.Lang={}),o=String.prototype,l=Object.prototype.toString,a={"undefined":"undefined","number":"number","boolean":"boolean","string":"string","[object Function]":"function","[object RegExp]":"regexp","[object Array]":"array","[object Date]":"date","[object Error]":"error"},c=/\{\s*([^|}]+?)\s*(?:\|([^}]*))?\s*\}/g,s=/^\s+|\s+$/g,e=/\{\s*\[(?:native code|function)\]\s*\}/i;j._isNative=function(w){return !!(b.config.useNativeES5&&w&&e.test(w));};j.isArray=j._isNative(Array.isArray)?Array.isArray:function(w){return j.type(w)==="array";};j.isBoolean=function(w){return typeof w==="boolean";};j.isDate=function(w){return j.type(w)==="date"&&w.toString()!=="Invalid Date"&&!isNaN(w);};j.isFunction=function(w){return j.type(w)==="function";};j.isNull=function(w){return w===null;};j.isNumber=function(w){return typeof w==="number"&&isFinite(w);};j.isObject=function(y,x){var w=typeof y;return(y&&(w==="object"||(!x&&(w==="function"||j.isFunction(y)))))||false;};j.isString=function(w){return typeof w==="string";};j.isUndefined=function(w){return typeof w==="undefined";};j.isValue=function(x){var w=j.type(x);switch(w){case"number":return isFinite(x);case"null":case"undefined":return false;default:return !!w;}};j.now=Date.now||function(){return new Date().getTime();};j.sub=function(w,x){return w.replace?w.replace(c,function(y,z){return j.isUndefined(x[z])?y:x[z];}):w;};j.trim=o.trim?function(w){return w&&w.trim?w.trim():w;}:function(w){try{return w.replace(s,"");}catch(x){return w;}};j.trimLeft=o.trimLeft?function(w){return w.trimLeft();}:function(w){return w.replace(/^\s+/,"");};j.trimRight=o.trimRight?function(w){return w.trimRight();}:function(w){return w.replace(/\s+$/,"");};j.type=function(w){return a[typeof w]||a[l.call(w)]||(w?"object":"null");
};var f=b.Lang,r=Array.prototype,p=Object.prototype.hasOwnProperty;function k(y,B,A){var x,w;B||(B=0);if(A||k.test(y)){try{return r.slice.call(y,B);}catch(z){w=[];for(x=y.length;B<x;++B){w.push(y[B]);}return w;}}return[y];}b.Array=k;k.dedupe=function(B){var A={},y=[],x,z,w;for(x=0,w=B.length;x<w;++x){z=B[x];if(!p.call(A,z)){A[z]=1;y.push(z);}}return y;};k.each=k.forEach=f._isNative(r.forEach)?function(y,w,x){r.forEach.call(y||[],w,x||b);return b;}:function(A,y,z){for(var x=0,w=(A&&A.length)||0;x<w;++x){if(x in A){y.call(z||b,A[x],x,A);}}return b;};k.hash=function(z,x){var A={},B=(x&&x.length)||0,y,w;for(y=0,w=z.length;y<w;++y){if(y in z){A[z[y]]=B>y&&y in x?x[y]:true;}}return A;};k.indexOf=f._isNative(r.indexOf)?function(y,w,x){return r.indexOf.call(y,w,x);}:function(z,x,y){var w=z.length;y=+y||0;y=(y>0||-1)*Math.floor(Math.abs(y));if(y<0){y+=w;if(y<0){y=0;}}for(;y<w;++y){if(y in z&&z[y]===x){return y;}}return -1;};k.numericSort=function(x,w){return x-w;};k.some=f._isNative(r.some)?function(y,w,x){return r.some.call(y,w,x);}:function(A,y,z){for(var x=0,w=A.length;x<w;++x){if(x in A&&y.call(z,A[x],x,A)){return true;}}return false;};k.test=function(y){var w=0;if(f.isArray(y)){w=1;}else{if(f.isObject(y)){try{if("length" in y&&!y.tagName&&!y.alert&&!y.apply){w=2;}}catch(x){}}}return w;};function u(){this._init();this.add.apply(this,arguments);}u.prototype={_init:function(){this._q=[];},next:function(){return this._q.shift();},last:function(){return this._q.pop();},add:function(){this._q.push.apply(this._q,arguments);return this;},size:function(){return this._q.length;}};b.Queue=u;YUI.Env._loaderQueue=YUI.Env._loaderQueue||new u();var n="__",p=Object.prototype.hasOwnProperty,m=b.Lang.isObject;b.cached=function(y,w,x){w||(w={});return function(z){var A=arguments.length>1?Array.prototype.join.call(arguments,n):String(z);if(!(A in w)||(x&&w[A]==x)){w[A]=y.apply(y,arguments);}return w[A];};};b.getLocation=function(){var w=b.config.win;return w&&w.location;};b.merge=function(){var y=arguments,z=0,x=y.length,w={};for(;z<x;++z){b.mix(w,y[z],true);}return w;};b.mix=function(w,x,D,y,A,E){var B,H,G,z,I,C,F;if(!w||!x){return w||b;}if(A){if(A===2){b.mix(w.prototype,x.prototype,D,y,0,E);}G=A===1||A===3?x.prototype:x;F=A===1||A===4?w.prototype:w;if(!G||!F){return w;}}else{G=x;F=w;}B=D&&!E;if(y){for(z=0,C=y.length;z<C;++z){I=y[z];if(!p.call(G,I)){continue;}H=B?false:I in F;if(E&&H&&m(F[I],true)&&m(G[I],true)){b.mix(F[I],G[I],D,null,0,E);}else{if(D||!H){F[I]=G[I];}}}}else{for(I in G){if(!p.call(G,I)){continue;}H=B?false:I in F;if(E&&H&&m(F[I],true)&&m(G[I],true)){b.mix(F[I],G[I],D,null,0,E);}else{if(D||!H){F[I]=G[I];}}}if(b.Object._hasEnumBug){b.mix(F,G,D,b.Object._forceEnum,A,E);}}return w;};var f=b.Lang,p=Object.prototype.hasOwnProperty,v,g=b.Object=f._isNative(Object.create)?function(w){return Object.create(w);}:(function(){function w(){}return function(x){w.prototype=x;return new w();};}()),d=g._forceEnum=["hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toString","toLocaleString","valueOf"],t=g._hasEnumBug=!{valueOf:0}.propertyIsEnumerable("valueOf"),q=g._hasProtoEnumBug=(function(){}).propertyIsEnumerable("prototype"),h=g.owns=function(x,w){return !!x&&p.call(x,w);};g.hasKey=h;g.keys=f._isNative(Object.keys)?Object.keys:function(A){if(!f.isObject(A)){throw new TypeError("Object.keys called on a non-object");}var z=[],y,x,w;if(q&&typeof A==="function"){for(x in A){if(h(A,x)&&x!=="prototype"){z.push(x);}}}else{for(x in A){if(h(A,x)){z.push(x);}}}if(t){for(y=0,w=d.length;y<w;++y){x=d[y];if(h(A,x)){z.push(x);}}}return z;};g.values=function(A){var z=g.keys(A),y=0,w=z.length,x=[];for(;y<w;++y){x.push(A[z[y]]);}return x;};g.size=function(x){try{return g.keys(x).length;}catch(w){return 0;}};g.hasValue=function(x,w){return b.Array.indexOf(g.values(x),w)>-1;};g.each=function(z,x,A,y){var w;for(w in z){if(y||h(z,w)){x.call(A||b,z[w],w,z);}}return b;};g.some=function(z,x,A,y){var w;for(w in z){if(y||h(z,w)){if(x.call(A||b,z[w],w,z)){return true;}}}return false;};g.getValue=function(A,z){if(!f.isObject(A)){return v;}var x,y=b.Array(z),w=y.length;for(x=0;A!==v&&x<w;x++){A=A[y[x]];}return A;};g.setValue=function(C,A,B){var w,z=b.Array(A),y=z.length-1,x=C;if(y>=0){for(w=0;x!==v&&w<y;w++){x=x[z[w]];}if(x!==v){x[z[w]]=B;}else{return v;}}return C;};g.isEmpty=function(w){return !g.keys(Object(w)).length;};YUI.Env.parseUA=function(C){var B=function(F){var G=0;return parseFloat(F.replace(/\./g,function(){return(G++==1)?"":".";}));},E=b.config.win,w=E&&E.navigator,z={ie:0,opera:0,gecko:0,webkit:0,safari:0,chrome:0,mobile:null,air:0,phantomjs:0,air:0,ipad:0,iphone:0,ipod:0,ios:null,android:0,silk:0,accel:false,webos:0,caja:w&&w.cajaVersion,secure:false,os:null,nodejs:0},x=C||w&&w.userAgent,D=E&&E.location,y=D&&D.href,A;z.userAgent=x;z.secure=y&&(y.toLowerCase().indexOf("https")===0);if(x){if((/windows|win32/i).test(x)){z.os="windows";}else{if((/macintosh|mac_powerpc/i).test(x)){z.os="macintosh";}else{if((/android/i).test(x)){z.os="android";}else{if((/symbos/i).test(x)){z.os="symbos";}else{if((/linux/i).test(x)){z.os="linux";}else{if((/rhino/i).test(x)){z.os="rhino";}}}}}}if((/KHTML/).test(x)){z.webkit=1;}if((/IEMobile|XBLWP7/).test(x)){z.mobile="windows";}if((/Fennec/).test(x)){z.mobile="gecko";}A=x.match(/AppleWebKit\/([^\s]*)/);if(A&&A[1]){z.webkit=B(A[1]);z.safari=z.webkit;if(/PhantomJS/.test(x)){A=x.match(/PhantomJS\/([^\s]*)/);if(A&&A[1]){z.phantomjs=B(A[1]);}}if(/ Mobile\//.test(x)||(/iPad|iPod|iPhone/).test(x)){z.mobile="Apple";A=x.match(/OS ([^\s]*)/);if(A&&A[1]){A=B(A[1].replace("_","."));}z.ios=A;z.os="ios";z.ipad=z.ipod=z.iphone=0;A=x.match(/iPad|iPod|iPhone/);if(A&&A[0]){z[A[0].toLowerCase()]=z.ios;}}else{A=x.match(/NokiaN[^\/]*|webOS\/\d\.\d/);if(A){z.mobile=A[0];}if(/webOS/.test(x)){z.mobile="WebOS";A=x.match(/webOS\/([^\s]*);/);if(A&&A[1]){z.webos=B(A[1]);}}if(/ Android/.test(x)){if(/Mobile/.test(x)){z.mobile="Android";}A=x.match(/Android ([^\s]*);/);if(A&&A[1]){z.android=B(A[1]);}}if(/Silk/.test(x)){A=x.match(/Silk\/([^\s]*)\)/);
if(A&&A[1]){z.silk=B(A[1]);}if(!z.android){z.android=2.34;z.os="Android";}if(/Accelerated=true/.test(x)){z.accel=true;}}}A=x.match(/(Chrome|CrMo)\/([^\s]*)/);if(A&&A[1]&&A[2]){z.chrome=B(A[2]);z.safari=0;if(A[1]==="CrMo"){z.mobile="chrome";}}else{A=x.match(/AdobeAIR\/([^\s]*)/);if(A){z.air=A[0];}}}if(!z.webkit){if(/Opera/.test(x)){A=x.match(/Opera[\s\/]([^\s]*)/);if(A&&A[1]){z.opera=B(A[1]);}A=x.match(/Version\/([^\s]*)/);if(A&&A[1]){z.opera=B(A[1]);}if(/Opera Mobi/.test(x)){z.mobile="opera";A=x.replace("Opera Mobi","").match(/Opera ([^\s]*)/);if(A&&A[1]){z.opera=B(A[1]);}}A=x.match(/Opera Mini[^;]*/);if(A){z.mobile=A[0];}}else{A=x.match(/MSIE\s([^;]*)/);if(A&&A[1]){z.ie=B(A[1]);}else{A=x.match(/Gecko\/([^\s]*)/);if(A){z.gecko=1;A=x.match(/rv:([^\s\)]*)/);if(A&&A[1]){z.gecko=B(A[1]);}}}}}}if(!C){if(typeof process=="object"){if(process.versions&&process.versions.node){z.os=process.platform;z.nodejs=B(process.versions.node);}}YUI.Env.UA=z;}return z;};b.UA=YUI.Env.UA||YUI.Env.parseUA();b.UA.compareVersions=function(y,x){var D,C,A,B,z,w;if(y===x){return 0;}C=(y+"").split(".");B=(x+"").split(".");for(z=0,w=Math.max(C.length,B.length);z<w;++z){D=parseInt(C[z],10);A=parseInt(B[z],10);isNaN(D)&&(D=0);isNaN(A)&&(A=0);if(D<A){return -1;}if(D>A){return 1;}}return 0;};YUI.Env.aliases={"anim":["anim-base","anim-color","anim-curve","anim-easing","anim-node-plugin","anim-scroll","anim-xy"],"app":["app-base","app-transitions","model","model-list","router","view"],"attribute":["attribute-base","attribute-complex"],"autocomplete":["autocomplete-base","autocomplete-sources","autocomplete-list","autocomplete-plugin"],"base":["base-base","base-pluginhost","base-build"],"cache":["cache-base","cache-offline","cache-plugin"],"collection":["array-extras","arraylist","arraylist-add","arraylist-filter","array-invoke"],"controller":["router"],"dataschema":["dataschema-base","dataschema-json","dataschema-xml","dataschema-array","dataschema-text"],"datasource":["datasource-local","datasource-io","datasource-get","datasource-function","datasource-cache","datasource-jsonschema","datasource-xmlschema","datasource-arrayschema","datasource-textschema","datasource-polling"],"datatable":["datatable-core","datatable-head","datatable-body","datatable-base","datatable-column-widths","datatable-message","datatable-mutable","datatable-sort","datatable-datasource"],"datatable-deprecated":["datatable-base-deprecated","datatable-datasource-deprecated","datatable-sort-deprecated","datatable-scroll-deprecated"],"datatype":["datatype-number","datatype-date","datatype-xml"],"datatype-date":["datatype-date-parse","datatype-date-format"],"datatype-number":["datatype-number-parse","datatype-number-format"],"datatype-xml":["datatype-xml-parse","datatype-xml-format"],"dd":["dd-ddm-base","dd-ddm","dd-ddm-drop","dd-drag","dd-proxy","dd-constrain","dd-drop","dd-scroll","dd-delegate"],"dom":["dom-base","dom-screen","dom-style","selector-native","selector"],"editor":["frame","editor-selection","exec-command","editor-base","editor-para","editor-br","editor-bidi","editor-tab","createlink-base"],"event":["event-base","event-delegate","event-synthetic","event-mousewheel","event-mouseenter","event-key","event-focus","event-resize","event-hover","event-outside","event-touch","event-move","event-flick","event-valuechange"],"event-custom":["event-custom-base","event-custom-complex"],"event-gestures":["event-flick","event-move"],"handlebars":["handlebars-compiler"],"highlight":["highlight-base","highlight-accentfold"],"history":["history-base","history-hash","history-hash-ie","history-html5"],"io":["io-base","io-xdr","io-form","io-upload-iframe","io-queue"],"json":["json-parse","json-stringify"],"loader":["loader-base","loader-rollup","loader-yui3"],"node":["node-base","node-event-delegate","node-pluginhost","node-screen","node-style"],"pluginhost":["pluginhost-base","pluginhost-config"],"querystring":["querystring-parse","querystring-stringify"],"recordset":["recordset-base","recordset-sort","recordset-filter","recordset-indexer"],"resize":["resize-base","resize-proxy","resize-constrain"],"slider":["slider-base","slider-value-range","clickable-rail","range-slider"],"text":["text-accentfold","text-wordbreak"],"widget":["widget-base","widget-htmlparser","widget-skin","widget-uievents"]};},"@VERSION@");