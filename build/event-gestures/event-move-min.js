YUI.add("event-move",function(D){var C="ontouchstart" in D.config.win,K=(C)?{start:"touchstart",move:"touchmove",end:"touchend"}:{start:"mousedown",move:"mousemove",end:"mouseup"},L="start",F="move",Q="end",N="_msh",E="_mh",I="_meh",M="_ms",P="_m",J="minTime",G="minDistance",A="ownerDocument",O="nodeType",B={emitFacade:false},H=D.Event.define;H("movestart",{init:function(S,R,T){S.setData(N,S.on(K[L],this._onStart,null,S,R,T));},destroy:function(S,R,U){var T=S.getData(N);if(T){T.detach();S.setData(N,null);}},processArgs:function(R){var S=R[3]?R.splice(3,1):{};if(!(J in S)){S[J]=this.MIN_TIME;}if(!(G in S)){S[G]=this.MIN_DISTANCE;}return S;},publishConfig:B,_onStart:function(U,S,R,T){U.preventDefault();var V=true;if(U.touches){V=(U.touches.length===1);U=U.touches[0];}if(V){U.type="movestart";S.setData(M,U);T.fire(U);}},MIN_TIME:0,MIN_DISTANCE:3});H("move",{init:function(S,R,V){var U=S.get(O)===9?S:S.get(A),T=U.on(K[F],D.bind(this._onMove,this),null,S,R,V);S.setData(E,T);},destroy:function(S,R,U){var T=S.getData(E);if(T){T.detach();S.setData(E,null);}},publishConfig:B,_onMove:function(V,T,S,U){var X=T.getData(M),R=!!(X),W;if(R){if(V.touches){R=(V.touches.length===1);W=V;V=V.touches[0];if(!V.target){V.target=W.target;V.currentTarget=W.currentTarget;}}if(R){V.preventDefault();V.type="move";T.setData(P,V);U.fire(V);}}}});H("moveend",{init:function(T,S,V){var U=T.get(O)===9?T:T.get(A),R=U.on(K[Q],D.bind(this._onEnd,this),null,T,S,V);T.setData(I,R);},destroy:function(T,S,U){var R=T.getData(I);if(R){R.detach();T.setData(I,null);}},publishConfig:B,_onEnd:function(V,S,R,U){var T=!!(S.getData(P)||S.getData(M));if(T){if(V.changedTouches){if(V.changedTouches.length===1){V=V.changedTouches[0];}else{T=false;}}if(T){V.preventDefault();V.type="moveend";S.setData(M,null);S.setData(P,null);U.fire(V);}}}});},"@VERSION@",{requires:["node-base","event-touch","event-synthetic"]});