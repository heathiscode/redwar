(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"./client/scripts/main.js":[function(require,module,exports){
'use strict';

var namespace = 'main';

var angular = require('angular');

var app = angular.module(namespace, [
    'ui.router',
    // inject:modules start
    require('./players')(namespace).name
    // inject:modules end
]);


app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider.state('home', {
        url : '/',
        template: require('./players/views/home.html') 
   });
}]);

module.exports = app;

},{"./players":"/home/ubuntu/workspace/client/scripts/players/index.js","./players/views/home.html":"/home/ubuntu/workspace/client/scripts/players/views/home.html","angular":"/home/ubuntu/workspace/bower_components/angular/angular.min.js"}],"/home/ubuntu/workspace/bower_components/angular-animate/angular-animate.min.js":[function(require,module,exports){
/*
 AngularJS v1.2.26
 (c) 2010-2014 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(F,e,O){'use strict';e.module("ngAnimate",["ng"]).directive("ngAnimateChildren",function(){return function(G,s,g){g=g.ngAnimateChildren;e.isString(g)&&0===g.length?s.data("$$ngAnimateChildren",!0):G.$watch(g,function(e){s.data("$$ngAnimateChildren",!!e)})}}).factory("$$animateReflow",["$$rAF","$document",function(e,s){return function(g){return e(function(){g()})}}]).config(["$provide","$animateProvider",function(G,s){function g(e){for(var g=0;g<e.length;g++){var l=e[g];if(l.nodeType==aa)return l}}
function B(l){return e.element(g(l))}var m=e.noop,u=e.forEach,P=s.$$selectors,aa=1,l="$$ngAnimateState",V="$$ngAnimateChildren",J="ng-animate",n={running:!0};G.decorator("$animate",["$delegate","$injector","$sniffer","$rootElement","$$asyncCallback","$rootScope","$document",function(z,F,$,R,E,H,O){function K(a){var b=a.data(l)||{};b.running=!0;a.data(l,b)}function L(a){if(a){var b=[],c={};a=a.substr(1).split(".");($.transitions||$.animations)&&b.push(F.get(P[""]));for(var d=0;d<a.length;d++){var f=
a[d],e=P[f];e&&!c[f]&&(b.push(F.get(e)),c[f]=!0)}return b}}function G(a,b,c){function d(a,b){var c=a[b],d=a["before"+b.charAt(0).toUpperCase()+b.substr(1)];if(c||d)return"leave"==b&&(d=c,c=null),n.push({event:b,fn:c}),h.push({event:b,fn:d}),!0}function f(b,d,e){var f=[];u(b,function(a){a.fn&&f.push(a)});var g=0;u(f,function(b,l){var C=function(){a:{if(d){(d[l]||m)();if(++g<f.length)break a;d=null}e()}};switch(b.event){case "setClass":d.push(b.fn(a,A,k,C));break;case "addClass":d.push(b.fn(a,A||c,
C));break;case "removeClass":d.push(b.fn(a,k||c,C));break;default:d.push(b.fn(a,C))}});d&&0===d.length&&e()}var g=a[0];if(g){var l="setClass"==b,p=l||"addClass"==b||"removeClass"==b,A,k;e.isArray(c)&&(A=c[0],k=c[1],c=A+" "+k);var x=a.attr("class")+" "+c;if(M(x)){var t=m,w=[],h=[],q=m,y=[],n=[],x=(" "+x).replace(/\s+/g,".");u(L(x),function(a){!d(a,b)&&l&&(d(a,"addClass"),d(a,"removeClass"))});return{node:g,event:b,className:c,isClassBased:p,isSetClassOperation:l,before:function(a){t=a;f(h,w,function(){t=
m;a()})},after:function(a){q=a;f(n,y,function(){q=m;a()})},cancel:function(){w&&(u(w,function(a){(a||m)(!0)}),t(!0));y&&(u(y,function(a){(a||m)(!0)}),q(!0))}}}}}function r(a,b,c,d,f,g,n){function p(d){var e="$animate:"+d;q&&(q[e]&&0<q[e].length)&&E(function(){c.triggerHandler(e,{event:a,className:b})})}function A(){p("before")}function m(){p("after")}function x(){p("close");n&&E(function(){n()})}function t(){t.hasBeenRun||(t.hasBeenRun=!0,g())}function w(){if(!w.hasBeenRun){w.hasBeenRun=!0;var d=
c.data(l);d&&(h&&h.isClassBased?k(c,b):(E(function(){var d=c.data(l)||{};r==d.index&&k(c,b,a)}),c.data(l,d)));x()}}var h=G(c,a,b);if(h){b=h.className;var q=e.element._data(h.node),q=q&&q.events;d||(d=f?f.parent():c.parent());var y=c.data(l)||{};f=y.active||{};var z=y.totalActive||0,C=y.last,D;h.isClassBased&&(D=y.running||y.disabled||C&&!C.isClassBased);if(D||N(c,d))t(),A(),m(),w();else{d=!1;if(0<z){D=[];if(h.isClassBased)"setClass"==C.event?(D.push(C),k(c,b)):f[b]&&(v=f[b],v.event==a?d=!0:(D.push(v),
k(c,b)));else if("leave"==a&&f["ng-leave"])d=!0;else{for(var v in f)D.push(f[v]),k(c,v);f={};z=0}0<D.length&&u(D,function(a){a.cancel()})}!h.isClassBased||(h.isSetClassOperation||d)||(d="addClass"==a==c.hasClass(b));if(d)t(),A(),m(),x();else{if("leave"==a)c.one("$destroy",function(a){a=e.element(this);var b=a.data(l);b&&(b=b.active["ng-leave"])&&(b.cancel(),k(a,"ng-leave"))});c.addClass(J);var r=Y++;z++;f[b]=h;c.data(l,{last:h,active:f,index:r,totalActive:z});A();h.before(function(d){var e=c.data(l);
d=d||!e||!e.active[b]||h.isClassBased&&e.active[b].event!=a;t();!0===d?w():(m(),h.after(w))})}}}else t(),A(),m(),w()}function T(a){if(a=g(a))a=e.isFunction(a.getElementsByClassName)?a.getElementsByClassName(J):a.querySelectorAll("."+J),u(a,function(a){a=e.element(a);(a=a.data(l))&&a.active&&u(a.active,function(a){a.cancel()})})}function k(a,b){if(g(a)==g(R))n.disabled||(n.running=!1,n.structural=!1);else if(b){var c=a.data(l)||{},d=!0===b;!d&&(c.active&&c.active[b])&&(c.totalActive--,delete c.active[b]);
if(d||!c.totalActive)a.removeClass(J),a.removeData(l)}}function N(a,b){if(n.disabled)return!0;if(g(a)==g(R))return n.running;var c,d,f;do{if(0===b.length)break;var m=g(b)==g(R),k=m?n:b.data(l)||{};if(k.disabled)return!0;m&&(f=!0);!1!==c&&(m=b.data(V),e.isDefined(m)&&(c=m));d=d||k.running||k.last&&!k.last.isClassBased}while(b=b.parent());return!f||!c&&d}var Y=0;R.data(l,n);H.$$postDigest(function(){H.$$postDigest(function(){n.running=!1})});var Q=s.classNameFilter(),M=Q?function(a){return Q.test(a)}:
function(){return!0};return{enter:function(a,b,c,d){a=e.element(a);b=b&&e.element(b);c=c&&e.element(c);K(a);z.enter(a,b,c);H.$$postDigest(function(){a=B(a);r("enter","ng-enter",a,b,c,m,d)})},leave:function(a,b){a=e.element(a);T(a);K(a);H.$$postDigest(function(){r("leave","ng-leave",B(a),null,null,function(){z.leave(a)},b)})},move:function(a,b,c,d){a=e.element(a);b=b&&e.element(b);c=c&&e.element(c);T(a);K(a);z.move(a,b,c);H.$$postDigest(function(){a=B(a);r("move","ng-move",a,b,c,m,d)})},addClass:function(a,
b,c){a=e.element(a);a=B(a);r("addClass",b,a,null,null,function(){z.addClass(a,b)},c)},removeClass:function(a,b,c){a=e.element(a);a=B(a);r("removeClass",b,a,null,null,function(){z.removeClass(a,b)},c)},setClass:function(a,b,c,d){a=e.element(a);a=B(a);r("setClass",[b,c],a,null,null,function(){z.setClass(a,b,c)},d)},enabled:function(a,b){switch(arguments.length){case 2:if(a)k(b);else{var c=b.data(l)||{};c.disabled=!0;b.data(l,c)}break;case 1:n.disabled=!a;break;default:a=!n.disabled}return!!a}}}]);s.register("",
["$window","$sniffer","$timeout","$$animateReflow",function(l,n,s,B){function E(a,U){S&&S();W.push(U);S=B(function(){u(W,function(a){a()});W=[];S=null;v={}})}function H(a,U){var b=g(a);a=e.element(b);Z.push(a);b=Date.now()+U;b<=da||(s.cancel(ca),da=b,ca=s(function(){G(Z);Z=[]},U,!1))}function G(a){u(a,function(a){(a=a.data(q))&&(a.closeAnimationFn||m)()})}function K(a,b){var c=b?v[b]:null;if(!c){var d=0,e=0,f=0,g=0,m,k,h,q;u(a,function(a){if(a.nodeType==aa){a=l.getComputedStyle(a)||{};h=a[I+P];d=
Math.max(L(h),d);q=a[I+x];m=a[I+t];e=Math.max(L(m),e);k=a[p+t];g=Math.max(L(k),g);var b=L(a[p+P]);0<b&&(b*=parseInt(a[p+w],10)||1);f=Math.max(b,f)}});c={total:0,transitionPropertyStyle:q,transitionDurationStyle:h,transitionDelayStyle:m,transitionDelay:e,transitionDuration:d,animationDelayStyle:k,animationDelay:g,animationDuration:f};b&&(v[b]=c)}return c}function L(a){var b=0;a=e.isString(a)?a.split(/\s*,\s*/):[];u(a,function(a){b=Math.max(parseFloat(a)||0,b)});return b}function J(a){var b=a.parent(),
c=b.data(h);c||(b.data(h,++ba),c=ba);return c+"-"+g(a).getAttribute("class")}function r(a,b,c,d){var e=J(b),f=e+" "+c,l=v[f]?++v[f].total:0,k={};if(0<l){var h=c+"-stagger",k=e+" "+h;(e=!v[k])&&b.addClass(h);k=K(b,k);e&&b.removeClass(h)}d=d||function(a){return a()};b.addClass(c);var h=b.data(q)||{},n=d(function(){return K(b,f)});d=n.transitionDuration;e=n.animationDuration;if(0===d&&0===e)return b.removeClass(c),!1;b.data(q,{running:h.running||0,itemIndex:l,stagger:k,timings:n,closeAnimationFn:m});
a=0<h.running||"setClass"==a;0<d&&T(b,c,a);0<e&&(0<k.animationDelay&&0===k.animationDuration)&&(g(b).style[p]="none 0s");return!0}function T(a,b,c){"ng-enter"!=b&&("ng-move"!=b&&"ng-leave"!=b)&&c?a.addClass(y):g(a).style[I+x]="none"}function k(a,b){var c=I+x,d=g(a);d.style[c]&&0<d.style[c].length&&(d.style[c]="");a.removeClass(y)}function N(a){var b=p;a=g(a);a.style[b]&&0<a.style[b].length&&(a.style[b]="")}function Y(a,b,d,e){function k(a){b.off(x,l);b.removeClass(m);c(b,d);a=g(b);for(var e in s)a.style.removeProperty(s[e])}
function l(a){a.stopPropagation();var b=a.originalEvent||a;a=b.$manualTimeStamp||b.timeStamp||Date.now();b=parseFloat(b.elapsedTime.toFixed(V));Math.max(a-z,0)>=y&&b>=v&&e()}var h=g(b);a=b.data(q);if(-1!=h.getAttribute("class").indexOf(d)&&a){var m="";u(d.split(" "),function(a,b){m+=(0<b?" ":"")+a+"-active"});var n=a.stagger,p=a.timings,t=a.itemIndex,v=Math.max(p.transitionDuration,p.animationDuration),w=Math.max(p.transitionDelay,p.animationDelay),y=w*D,z=Date.now(),x=A+" "+X,r="",s=[];if(0<p.transitionDuration){var B=
p.transitionPropertyStyle;-1==B.indexOf("all")&&(r+=f+"transition-property: "+B+";",r+=f+"transition-duration: "+p.transitionDurationStyle+";",s.push(f+"transition-property"),s.push(f+"transition-duration"))}0<t&&(0<n.transitionDelay&&0===n.transitionDuration&&(r+=f+"transition-delay: "+Q(p.transitionDelayStyle,n.transitionDelay,t)+"; ",s.push(f+"transition-delay")),0<n.animationDelay&&0===n.animationDuration&&(r+=f+"animation-delay: "+Q(p.animationDelayStyle,n.animationDelay,t)+"; ",s.push(f+"animation-delay")));
0<s.length&&(p=h.getAttribute("style")||"",h.setAttribute("style",p+"; "+r));b.on(x,l);b.addClass(m);a.closeAnimationFn=function(){k();e()};h=(t*(Math.max(n.animationDelay,n.transitionDelay)||0)+(w+v)*C)*D;a.running++;H(b,h);return k}e()}function Q(a,b,c){var d="";u(a.split(","),function(a,e){d+=(0<e?",":"")+(c*b+parseInt(a,10))+"s"});return d}function M(a,b,d,e){if(r(a,b,d,e))return function(a){a&&c(b,d)}}function a(a,b,d,e){if(b.data(q))return Y(a,b,d,e);c(b,d);e()}function b(b,c,d,e){var f=M(b,
c,d);if(f){var g=f;E(c,function(){k(c,d);N(c);g=a(b,c,d,e)});return function(a){(g||m)(a)}}e()}function c(a,b){a.removeClass(b);var c=a.data(q);c&&(c.running&&c.running--,c.running&&0!==c.running||a.removeData(q))}function d(a,b){var c="";a=e.isArray(a)?a:a.split(/\s+/);u(a,function(a,d){a&&0<a.length&&(c+=(0<d?" ":"")+a+b)});return c}var f="",I,X,p,A;F.ontransitionend===O&&F.onwebkittransitionend!==O?(f="-webkit-",I="WebkitTransition",X="webkitTransitionEnd transitionend"):(I="transition",X="transitionend");
F.onanimationend===O&&F.onwebkitanimationend!==O?(f="-webkit-",p="WebkitAnimation",A="webkitAnimationEnd animationend"):(p="animation",A="animationend");var P="Duration",x="Property",t="Delay",w="IterationCount",h="$$ngAnimateKey",q="$$ngAnimateCSS3Data",y="ng-animate-block-transitions",V=3,C=1.5,D=1E3,v={},ba=0,W=[],S,ca=null,da=0,Z=[];return{enter:function(a,c){return b("enter",a,"ng-enter",c)},leave:function(a,c){return b("leave",a,"ng-leave",c)},move:function(a,c){return b("move",a,"ng-move",
c)},beforeSetClass:function(a,b,c,e){var f=d(c,"-remove")+" "+d(b,"-add"),g=M("setClass",a,f,function(d){var e=a.attr("class");a.removeClass(c);a.addClass(b);d=d();a.attr("class",e);return d});if(g)return E(a,function(){k(a,f);N(a);e()}),g;e()},beforeAddClass:function(a,b,c){var e=M("addClass",a,d(b,"-add"),function(c){a.addClass(b);c=c();a.removeClass(b);return c});if(e)return E(a,function(){k(a,b);N(a);c()}),e;c()},setClass:function(b,c,e,f){e=d(e,"-remove");c=d(c,"-add");return a("setClass",b,
e+" "+c,f)},addClass:function(b,c,e){return a("addClass",b,d(c,"-add"),e)},beforeRemoveClass:function(a,b,c){var e=M("removeClass",a,d(b,"-remove"),function(c){var d=a.attr("class");a.removeClass(b);c=c();a.attr("class",d);return c});if(e)return E(a,function(){k(a,b);N(a);c()}),e;c()},removeClass:function(b,c,e){return a("removeClass",b,d(c,"-remove"),e)}}}])}])})(window,window.angular);
//# sourceMappingURL=angular-animate.min.js.map

},{}],"/home/ubuntu/workspace/bower_components/angular-sanitize/angular-sanitize.min.js":[function(require,module,exports){
/*
 AngularJS v1.2.26
 (c) 2010-2014 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(q,g,r){'use strict';function F(a){var d=[];t(d,g.noop).chars(a);return d.join("")}function m(a){var d={};a=a.split(",");var c;for(c=0;c<a.length;c++)d[a[c]]=!0;return d}function G(a,d){function c(a,b,c,h){b=g.lowercase(b);if(u[b])for(;f.last()&&v[f.last()];)e("",f.last());w[b]&&f.last()==b&&e("",b);(h=x[b]||!!h)||f.push(b);var n={};c.replace(H,function(a,b,d,c,e){n[b]=s(d||c||e||"")});d.start&&d.start(b,n,h)}function e(a,b){var c=0,e;if(b=g.lowercase(b))for(c=f.length-1;0<=c&&f[c]!=b;c--);
if(0<=c){for(e=f.length-1;e>=c;e--)d.end&&d.end(f[e]);f.length=c}}"string"!==typeof a&&(a=null===a||"undefined"===typeof a?"":""+a);var b,l,f=[],n=a,h;for(f.last=function(){return f[f.length-1]};a;){h="";l=!0;if(f.last()&&y[f.last()])a=a.replace(RegExp("(.*)<\\s*\\/\\s*"+f.last()+"[^>]*>","i"),function(a,b){b=b.replace(I,"$1").replace(J,"$1");d.chars&&d.chars(s(b));return""}),e("",f.last());else{if(0===a.indexOf("\x3c!--"))b=a.indexOf("--",4),0<=b&&a.lastIndexOf("--\x3e",b)===b&&(d.comment&&d.comment(a.substring(4,
b)),a=a.substring(b+3),l=!1);else if(z.test(a)){if(b=a.match(z))a=a.replace(b[0],""),l=!1}else if(K.test(a)){if(b=a.match(A))a=a.substring(b[0].length),b[0].replace(A,e),l=!1}else L.test(a)&&((b=a.match(B))?(b[4]&&(a=a.substring(b[0].length),b[0].replace(B,c)),l=!1):(h+="<",a=a.substring(1)));l&&(b=a.indexOf("<"),h+=0>b?a:a.substring(0,b),a=0>b?"":a.substring(b),d.chars&&d.chars(s(h)))}if(a==n)throw M("badparse",a);n=a}e()}function s(a){if(!a)return"";var d=N.exec(a);a=d[1];var c=d[3];if(d=d[2])p.innerHTML=
d.replace(/</g,"&lt;"),d="textContent"in p?p.textContent:p.innerText;return a+d+c}function C(a){return a.replace(/&/g,"&amp;").replace(O,function(a){var c=a.charCodeAt(0);a=a.charCodeAt(1);return"&#"+(1024*(c-55296)+(a-56320)+65536)+";"}).replace(P,function(a){return"&#"+a.charCodeAt(0)+";"}).replace(/</g,"&lt;").replace(/>/g,"&gt;")}function t(a,d){var c=!1,e=g.bind(a,a.push);return{start:function(a,l,f){a=g.lowercase(a);!c&&y[a]&&(c=a);c||!0!==D[a]||(e("<"),e(a),g.forEach(l,function(c,f){var k=
g.lowercase(f),l="img"===a&&"src"===k||"background"===k;!0!==Q[k]||!0===E[k]&&!d(c,l)||(e(" "),e(f),e('="'),e(C(c)),e('"'))}),e(f?"/>":">"))},end:function(a){a=g.lowercase(a);c||!0!==D[a]||(e("</"),e(a),e(">"));a==c&&(c=!1)},chars:function(a){c||e(C(a))}}}var M=g.$$minErr("$sanitize"),B=/^<((?:[a-zA-Z])[\w:-]*)((?:\s+[\w:-]+(?:\s*=\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)\s*(>?)/,A=/^<\/\s*([\w:-]+)[^>]*>/,H=/([\w:-]+)(?:\s*=\s*(?:(?:"((?:[^"])*)")|(?:'((?:[^'])*)')|([^>\s]+)))?/g,L=/^</,
K=/^<\//,I=/\x3c!--(.*?)--\x3e/g,z=/<!DOCTYPE([^>]*?)>/i,J=/<!\[CDATA\[(.*?)]]\x3e/g,O=/[\uD800-\uDBFF][\uDC00-\uDFFF]/g,P=/([^\#-~| |!])/g,x=m("area,br,col,hr,img,wbr");q=m("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr");r=m("rp,rt");var w=g.extend({},r,q),u=g.extend({},q,m("address,article,aside,blockquote,caption,center,del,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,map,menu,nav,ol,pre,script,section,table,ul")),v=g.extend({},r,m("a,abbr,acronym,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,q,ruby,rp,rt,s,samp,small,span,strike,strong,sub,sup,time,tt,u,var")),
y=m("script,style"),D=g.extend({},x,u,v,w),E=m("background,cite,href,longdesc,src,usemap"),Q=g.extend({},E,m("abbr,align,alt,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,coords,dir,face,headers,height,hreflang,hspace,ismap,lang,language,nohref,nowrap,rel,rev,rows,rowspan,rules,scope,scrolling,shape,size,span,start,summary,target,title,type,valign,value,vspace,width")),p=document.createElement("pre"),N=/^(\s*)([\s\S]*?)(\s*)$/;g.module("ngSanitize",[]).provider("$sanitize",
function(){this.$get=["$$sanitizeUri",function(a){return function(d){var c=[];G(d,t(c,function(c,b){return!/^unsafe/.test(a(c,b))}));return c.join("")}}]});g.module("ngSanitize").filter("linky",["$sanitize",function(a){var d=/((ftp|https?):\/\/|(mailto:)?[A-Za-z0-9._%+-]+@)\S*[^\s.;,(){}<>"]/,c=/^mailto:/;return function(e,b){function l(a){a&&k.push(F(a))}function f(a,c){k.push("<a ");g.isDefined(b)&&(k.push('target="'),k.push(b),k.push('" '));k.push('href="');k.push(a);k.push('">');l(c);k.push("</a>")}
if(!e)return e;for(var n,h=e,k=[],m,p;n=h.match(d);)m=n[0],n[2]==n[3]&&(m="mailto:"+m),p=n.index,l(h.substr(0,p)),f(m,n[0].replace(c,"")),h=h.substring(p+n[0].length);l(h);return a(k.join(""))}}])})(window,window.angular);
//# sourceMappingURL=angular-sanitize.min.js.map

},{}],"/home/ubuntu/workspace/bower_components/angular-ui-router/release/angular-ui-router.min.js":[function(require,module,exports){
(function (global){

; require("/home/ubuntu/workspace/bower_components/angular/angular.min.js");
;__browserify_shim_require__=require;(function browserifyShim(module, define, require) {
/**
 * State-based routing for AngularJS
 * @version v0.2.10
 * @link http://angular-ui.github.com/
 * @license MIT License, http://www.opensource.org/licenses/MIT
 */
"undefined"!=typeof module&&"undefined"!=typeof exports&&module.exports===exports&&(module.exports="ui.router"),function(a,b,c){"use strict";function d(a,b){return I(new(I(function(){},{prototype:a})),b)}function e(a){return H(arguments,function(b){b!==a&&H(b,function(b,c){a.hasOwnProperty(c)||(a[c]=b)})}),a}function f(a,b){var c=[];for(var d in a.path){if(a.path[d]!==b.path[d])break;c.push(a.path[d])}return c}function g(a,b){if(Array.prototype.indexOf)return a.indexOf(b,Number(arguments[2])||0);var c=a.length>>>0,d=Number(arguments[2])||0;for(d=0>d?Math.ceil(d):Math.floor(d),0>d&&(d+=c);c>d;d++)if(d in a&&a[d]===b)return d;return-1}function h(a,b,c,d){var e,h=f(c,d),i={},j=[];for(var k in h)if(h[k].params&&h[k].params.length){e=h[k].params;for(var l in e)g(j,e[l])>=0||(j.push(e[l]),i[e[l]]=a[e[l]])}return I({},i,b)}function i(a,b){var c={};return H(a,function(a){var d=b[a];c[a]=null!=d?String(d):null}),c}function j(a,b,c){if(!c){c=[];for(var d in a)c.push(d)}for(var e=0;e<c.length;e++){var f=c[e];if(a[f]!=b[f])return!1}return!0}function k(a,b){var c={};return H(a,function(a){c[a]=b[a]}),c}function l(a,b){var d=1,f=2,g={},h=[],i=g,j=I(a.when(g),{$$promises:g,$$values:g});this.study=function(g){function k(a,c){if(o[c]!==f){if(n.push(c),o[c]===d)throw n.splice(0,n.indexOf(c)),new Error("Cyclic dependency: "+n.join(" -> "));if(o[c]=d,E(a))m.push(c,[function(){return b.get(a)}],h);else{var e=b.annotate(a);H(e,function(a){a!==c&&g.hasOwnProperty(a)&&k(g[a],a)}),m.push(c,a,e)}n.pop(),o[c]=f}}function l(a){return F(a)&&a.then&&a.$$promises}if(!F(g))throw new Error("'invocables' must be an object");var m=[],n=[],o={};return H(g,k),g=n=o=null,function(d,f,g){function h(){--s||(t||e(r,f.$$values),p.$$values=r,p.$$promises=!0,o.resolve(r))}function k(a){p.$$failure=a,o.reject(a)}function n(c,e,f){function i(a){l.reject(a),k(a)}function j(){if(!C(p.$$failure))try{l.resolve(b.invoke(e,g,r)),l.promise.then(function(a){r[c]=a,h()},i)}catch(a){i(a)}}var l=a.defer(),m=0;H(f,function(a){q.hasOwnProperty(a)&&!d.hasOwnProperty(a)&&(m++,q[a].then(function(b){r[a]=b,--m||j()},i))}),m||j(),q[c]=l.promise}if(l(d)&&g===c&&(g=f,f=d,d=null),d){if(!F(d))throw new Error("'locals' must be an object")}else d=i;if(f){if(!l(f))throw new Error("'parent' must be a promise returned by $resolve.resolve()")}else f=j;var o=a.defer(),p=o.promise,q=p.$$promises={},r=I({},d),s=1+m.length/3,t=!1;if(C(f.$$failure))return k(f.$$failure),p;f.$$values?(t=e(r,f.$$values),h()):(I(q,f.$$promises),f.then(h,k));for(var u=0,v=m.length;v>u;u+=3)d.hasOwnProperty(m[u])?h():n(m[u],m[u+1],m[u+2]);return p}},this.resolve=function(a,b,c,d){return this.study(a)(b,c,d)}}function m(a,b,c){this.fromConfig=function(a,b,c){return C(a.template)?this.fromString(a.template,b):C(a.templateUrl)?this.fromUrl(a.templateUrl,b):C(a.templateProvider)?this.fromProvider(a.templateProvider,b,c):null},this.fromString=function(a,b){return D(a)?a(b):a},this.fromUrl=function(c,d){return D(c)&&(c=c(d)),null==c?null:a.get(c,{cache:b}).then(function(a){return a.data})},this.fromProvider=function(a,b,d){return c.invoke(a,null,d||{params:b})}}function n(a){function b(b){if(!/^\w+(-+\w+)*$/.test(b))throw new Error("Invalid parameter name '"+b+"' in pattern '"+a+"'");if(f[b])throw new Error("Duplicate parameter name '"+b+"' in pattern '"+a+"'");f[b]=!0,j.push(b)}function c(a){return a.replace(/[\\\[\]\^$*+?.()|{}]/g,"\\$&")}var d,e=/([:*])(\w+)|\{(\w+)(?:\:((?:[^{}\\]+|\\.|\{(?:[^{}\\]+|\\.)*\})+))?\}/g,f={},g="^",h=0,i=this.segments=[],j=this.params=[];this.source=a;for(var k,l,m;(d=e.exec(a))&&(k=d[2]||d[3],l=d[4]||("*"==d[1]?".*":"[^/]*"),m=a.substring(h,d.index),!(m.indexOf("?")>=0));)g+=c(m)+"("+l+")",b(k),i.push(m),h=e.lastIndex;m=a.substring(h);var n=m.indexOf("?");if(n>=0){var o=this.sourceSearch=m.substring(n);m=m.substring(0,n),this.sourcePath=a.substring(0,h+n),H(o.substring(1).split(/[&?]/),b)}else this.sourcePath=a,this.sourceSearch="";g+=c(m)+"$",i.push(m),this.regexp=new RegExp(g),this.prefix=i[0]}function o(){this.compile=function(a){return new n(a)},this.isMatcher=function(a){return F(a)&&D(a.exec)&&D(a.format)&&D(a.concat)},this.$get=function(){return this}}function p(a){function b(a){var b=/^\^((?:\\[^a-zA-Z0-9]|[^\\\[\]\^$*+?.()|{}]+)*)/.exec(a.source);return null!=b?b[1].replace(/\\(.)/g,"$1"):""}function c(a,b){return a.replace(/\$(\$|\d{1,2})/,function(a,c){return b["$"===c?0:Number(c)]})}function d(a,b,c){if(!c)return!1;var d=a.invoke(b,b,{$match:c});return C(d)?d:!0}var e=[],f=null;this.rule=function(a){if(!D(a))throw new Error("'rule' must be a function");return e.push(a),this},this.otherwise=function(a){if(E(a)){var b=a;a=function(){return b}}else if(!D(a))throw new Error("'rule' must be a function");return f=a,this},this.when=function(e,f){var g,h=E(f);if(E(e)&&(e=a.compile(e)),!h&&!D(f)&&!G(f))throw new Error("invalid 'handler' in when()");var i={matcher:function(b,c){return h&&(g=a.compile(c),c=["$match",function(a){return g.format(a)}]),I(function(a,e){return d(a,c,b.exec(e.path(),e.search()))},{prefix:E(b.prefix)?b.prefix:""})},regex:function(a,e){if(a.global||a.sticky)throw new Error("when() RegExp must not be global or sticky");return h&&(g=e,e=["$match",function(a){return c(g,a)}]),I(function(b,c){return d(b,e,a.exec(c.path()))},{prefix:b(a)})}},j={matcher:a.isMatcher(e),regex:e instanceof RegExp};for(var k in j)if(j[k])return this.rule(i[k](e,f));throw new Error("invalid 'what' in when()")},this.$get=["$location","$rootScope","$injector",function(a,b,c){function d(b){function d(b){var d=b(c,a);return d?(E(d)&&a.replace().url(d),!0):!1}if(!b||!b.defaultPrevented){var g,h=e.length;for(g=0;h>g;g++)if(d(e[g]))return;f&&d(f)}}return b.$on("$locationChangeSuccess",d),{sync:function(){d()}}}]}function q(a,e,f){function g(a){return 0===a.indexOf(".")||0===a.indexOf("^")}function l(a,b){var d=E(a),e=d?a:a.name,f=g(e);if(f){if(!b)throw new Error("No reference point given for path '"+e+"'");for(var h=e.split("."),i=0,j=h.length,k=b;j>i;i++)if(""!==h[i]||0!==i){if("^"!==h[i])break;if(!k.parent)throw new Error("Path '"+e+"' not valid for state '"+b.name+"'");k=k.parent}else k=b;h=h.slice(i).join("."),e=k.name+(k.name&&h?".":"")+h}var l=w[e];return!l||!d&&(d||l!==a&&l.self!==a)?c:l}function m(a,b){x[a]||(x[a]=[]),x[a].push(b)}function n(b){b=d(b,{self:b,resolve:b.resolve||{},toString:function(){return this.name}});var c=b.name;if(!E(c)||c.indexOf("@")>=0)throw new Error("State must have a valid name");if(w.hasOwnProperty(c))throw new Error("State '"+c+"'' is already defined");var e=-1!==c.indexOf(".")?c.substring(0,c.lastIndexOf(".")):E(b.parent)?b.parent:"";if(e&&!w[e])return m(e,b.self);for(var f in z)D(z[f])&&(b[f]=z[f](b,z.$delegates[f]));if(w[c]=b,!b[y]&&b.url&&a.when(b.url,["$match","$stateParams",function(a,c){v.$current.navigable==b&&j(a,c)||v.transitionTo(b,a,{location:!1})}]),x[c])for(var g=0;g<x[c].length;g++)n(x[c][g]);return b}function o(a){return a.indexOf("*")>-1}function p(a){var b=a.split("."),c=v.$current.name.split(".");if("**"===b[0]&&(c=c.slice(c.indexOf(b[1])),c.unshift("**")),"**"===b[b.length-1]&&(c.splice(c.indexOf(b[b.length-2])+1,Number.MAX_VALUE),c.push("**")),b.length!=c.length)return!1;for(var d=0,e=b.length;e>d;d++)"*"===b[d]&&(c[d]="*");return c.join("")===b.join("")}function q(a,b){return E(a)&&!C(b)?z[a]:D(b)&&E(a)?(z[a]&&!z.$delegates[a]&&(z.$delegates[a]=z[a]),z[a]=b,this):this}function r(a,b){return F(a)?b=a:b.name=a,n(b),this}function s(a,e,g,m,n,q,r,s,x){function z(){r.url()!==M&&(r.url(M),r.replace())}function A(a,c,d,f,h){var i=d?c:k(a.params,c),j={$stateParams:i};h.resolve=n.resolve(a.resolve,j,h.resolve,a);var l=[h.resolve.then(function(a){h.globals=a})];return f&&l.push(f),H(a.views,function(c,d){var e=c.resolve&&c.resolve!==a.resolve?c.resolve:{};e.$template=[function(){return g.load(d,{view:c,locals:j,params:i,notify:!1})||""}],l.push(n.resolve(e,j,h.resolve,a).then(function(f){if(D(c.controllerProvider)||G(c.controllerProvider)){var g=b.extend({},e,j);f.$$controller=m.invoke(c.controllerProvider,null,g)}else f.$$controller=c.controller;f.$$state=a,f.$$controllerAs=c.controllerAs,h[d]=f}))}),e.all(l).then(function(){return h})}var B=e.reject(new Error("transition superseded")),F=e.reject(new Error("transition prevented")),K=e.reject(new Error("transition aborted")),L=e.reject(new Error("transition failed")),M=r.url(),N=x.baseHref();return u.locals={resolve:null,globals:{$stateParams:{}}},v={params:{},current:u.self,$current:u,transition:null},v.reload=function(){v.transitionTo(v.current,q,{reload:!0,inherit:!1,notify:!1})},v.go=function(a,b,c){return this.transitionTo(a,b,I({inherit:!0,relative:v.$current},c))},v.transitionTo=function(b,c,f){c=c||{},f=I({location:!0,inherit:!1,relative:null,notify:!0,reload:!1,$retry:!1},f||{});var g,k=v.$current,n=v.params,o=k.path,p=l(b,f.relative);if(!C(p)){var s={to:b,toParams:c,options:f};if(g=a.$broadcast("$stateNotFound",s,k.self,n),g.defaultPrevented)return z(),K;if(g.retry){if(f.$retry)return z(),L;var w=v.transition=e.when(g.retry);return w.then(function(){return w!==v.transition?B:(s.options.$retry=!0,v.transitionTo(s.to,s.toParams,s.options))},function(){return K}),z(),w}if(b=s.to,c=s.toParams,f=s.options,p=l(b,f.relative),!C(p)){if(f.relative)throw new Error("Could not resolve '"+b+"' from state '"+f.relative+"'");throw new Error("No such state '"+b+"'")}}if(p[y])throw new Error("Cannot transition to abstract state '"+b+"'");f.inherit&&(c=h(q,c||{},v.$current,p)),b=p;var x,D,E=b.path,G=u.locals,H=[];for(x=0,D=E[x];D&&D===o[x]&&j(c,n,D.ownParams)&&!f.reload;x++,D=E[x])G=H[x]=D.locals;if(t(b,k,G,f))return b.self.reloadOnSearch!==!1&&z(),v.transition=null,e.when(v.current);if(c=i(b.params,c||{}),f.notify&&(g=a.$broadcast("$stateChangeStart",b.self,c,k.self,n),g.defaultPrevented))return z(),F;for(var N=e.when(G),O=x;O<E.length;O++,D=E[O])G=H[O]=d(G),N=A(D,c,D===b,N,G);var P=v.transition=N.then(function(){var d,e,g;if(v.transition!==P)return B;for(d=o.length-1;d>=x;d--)g=o[d],g.self.onExit&&m.invoke(g.self.onExit,g.self,g.locals.globals),g.locals=null;for(d=x;d<E.length;d++)e=E[d],e.locals=H[d],e.self.onEnter&&m.invoke(e.self.onEnter,e.self,e.locals.globals);if(v.transition!==P)return B;v.$current=b,v.current=b.self,v.params=c,J(v.params,q),v.transition=null;var h=b.navigable;return f.location&&h&&(r.url(h.url.format(h.locals.globals.$stateParams)),"replace"===f.location&&r.replace()),f.notify&&a.$broadcast("$stateChangeSuccess",b.self,c,k.self,n),M=r.url(),v.current},function(d){return v.transition!==P?B:(v.transition=null,a.$broadcast("$stateChangeError",b.self,c,k.self,n,d),z(),e.reject(d))});return P},v.is=function(a,d){var e=l(a);return C(e)?v.$current!==e?!1:C(d)&&null!==d?b.equals(q,d):!0:c},v.includes=function(a,d){if(E(a)&&o(a)){if(!p(a))return!1;a=v.$current.name}var e=l(a);if(!C(e))return c;if(!C(v.$current.includes[e.name]))return!1;var f=!0;return b.forEach(d,function(a,b){C(q[b])&&q[b]===a||(f=!1)}),f},v.href=function(a,b,c){c=I({lossy:!0,inherit:!1,absolute:!1,relative:v.$current},c||{});var d=l(a,c.relative);if(!C(d))return null;b=h(q,b||{},v.$current,d);var e=d&&c.lossy?d.navigable:d,g=e&&e.url?e.url.format(i(d.params,b||{})):null;return!f.html5Mode()&&g&&(g="#"+f.hashPrefix()+g),"/"!==N&&(f.html5Mode()?g=N.slice(0,-1)+g:c.absolute&&(g=N.slice(1)+g)),c.absolute&&g&&(g=r.protocol()+"://"+r.host()+(80==r.port()||443==r.port()?"":":"+r.port())+(!f.html5Mode()&&g?"/":"")+g),g},v.get=function(a,b){if(!C(a)){var c=[];return H(w,function(a){c.push(a.self)}),c}var d=l(a,b);return d&&d.self?d.self:null},v}function t(a,b,c,d){return a!==b||(c!==b.locals||d.reload)&&a.self.reloadOnSearch!==!1?void 0:!0}var u,v,w={},x={},y="abstract",z={parent:function(a){if(C(a.parent)&&a.parent)return l(a.parent);var b=/^(.+)\.[^.]+$/.exec(a.name);return b?l(b[1]):u},data:function(a){return a.parent&&a.parent.data&&(a.data=a.self.data=I({},a.parent.data,a.data)),a.data},url:function(a){var b=a.url;if(E(b))return"^"==b.charAt(0)?e.compile(b.substring(1)):(a.parent.navigable||u).url.concat(b);if(e.isMatcher(b)||null==b)return b;throw new Error("Invalid url '"+b+"' in state '"+a+"'")},navigable:function(a){return a.url?a:a.parent?a.parent.navigable:null},params:function(a){if(!a.params)return a.url?a.url.parameters():a.parent.params;if(!G(a.params))throw new Error("Invalid params in state '"+a+"'");if(a.url)throw new Error("Both params and url specicified in state '"+a+"'");return a.params},views:function(a){var b={};return H(C(a.views)?a.views:{"":a},function(c,d){d.indexOf("@")<0&&(d+="@"+a.parent.name),b[d]=c}),b},ownParams:function(a){if(!a.parent)return a.params;var b={};H(a.params,function(a){b[a]=!0}),H(a.parent.params,function(c){if(!b[c])throw new Error("Missing required parameter '"+c+"' in state '"+a.name+"'");b[c]=!1});var c=[];return H(b,function(a,b){a&&c.push(b)}),c},path:function(a){return a.parent?a.parent.path.concat(a):[]},includes:function(a){var b=a.parent?I({},a.parent.includes):{};return b[a.name]=!0,b},$delegates:{}};u=n({name:"",url:"^",views:null,"abstract":!0}),u.navigable=null,this.decorator=q,this.state=r,this.$get=s,s.$inject=["$rootScope","$q","$view","$injector","$resolve","$stateParams","$location","$urlRouter","$browser"]}function r(){function a(a,b){return{load:function(c,d){var e,f={template:null,controller:null,view:null,locals:null,notify:!0,async:!0,params:{}};return d=I(f,d),d.view&&(e=b.fromConfig(d.view,d.params,d.locals)),e&&d.notify&&a.$broadcast("$viewContentLoading",d),e}}}this.$get=a,a.$inject=["$rootScope","$templateFactory"]}function s(){var a=!1;this.useAnchorScroll=function(){a=!0},this.$get=["$anchorScroll","$timeout",function(b,c){return a?b:function(a){c(function(){a[0].scrollIntoView()},0,!1)}}]}function t(a,c,d){function e(){return c.has?function(a){return c.has(a)?c.get(a):null}:function(a){try{return c.get(a)}catch(b){return null}}}function f(a,b){var c=function(){return{enter:function(a,b,c){b.after(a),c()},leave:function(a,b){a.remove(),b()}}};if(i)return{enter:function(a,b,c){i.enter(a,null,b,c)},leave:function(a,b){i.leave(a,b)}};if(h){var d=h&&h(b,a);return{enter:function(a,b,c){d.enter(a,null,b),c()},leave:function(a,b){d.leave(a),b()}}}return c()}var g=e(),h=g("$animator"),i=g("$animate"),j={restrict:"ECA",terminal:!0,priority:400,transclude:"element",compile:function(c,e,g){return function(c,e,h){function i(){k&&(k.remove(),k=null),m&&(m.$destroy(),m=null),l&&(q.leave(l,function(){k=null}),k=l,l=null)}function j(f){var h=c.$new(),j=l&&l.data("$uiViewName"),k=j&&a.$current&&a.$current.locals[j];if(f||k!==n){var r=g(h,function(a){q.enter(a,e,function(){(b.isDefined(p)&&!p||c.$eval(p))&&d(a)}),i()});n=a.$current.locals[r.data("$uiViewName")],l=r,m=h,m.$emit("$viewContentLoaded"),m.$eval(o)}}var k,l,m,n,o=h.onload||"",p=h.autoscroll,q=f(h,c);c.$on("$stateChangeSuccess",function(){j(!1)}),c.$on("$viewContentLoading",function(){j(!1)}),j(!0)}}};return j}function u(a,b,c){return{restrict:"ECA",priority:-400,compile:function(d){var e=d.html();return function(d,f,g){var h=g.uiView||g.name||"",i=f.inheritedData("$uiView");h.indexOf("@")<0&&(h=h+"@"+(i?i.state.name:"")),f.data("$uiViewName",h);var j=c.$current,k=j&&j.locals[h];if(k){f.data("$uiView",{name:h,state:k.$$state}),f.html(k.$template?k.$template:e);var l=a(f.contents());if(k.$$controller){k.$scope=d;var m=b(k.$$controller,k);k.$$controllerAs&&(d[k.$$controllerAs]=m),f.data("$ngControllerController",m),f.children().data("$ngControllerController",m)}l(d)}}}}}function v(a){var b=a.replace(/\n/g," ").match(/^([^(]+?)\s*(\((.*)\))?$/);if(!b||4!==b.length)throw new Error("Invalid state ref '"+a+"'");return{state:b[1],paramExpr:b[3]||null}}function w(a){var b=a.parent().inheritedData("$uiView");return b&&b.state&&b.state.name?b.state:void 0}function x(a,c){var d=["location","inherit","reload"];return{restrict:"A",require:"?^uiSrefActive",link:function(e,f,g,h){var i=v(g.uiSref),j=null,k=w(f)||a.$current,l="FORM"===f[0].nodeName,m=l?"action":"href",n=!0,o={relative:k},p=e.$eval(g.uiSrefOpts)||{};b.forEach(d,function(a){a in p&&(o[a]=p[a])});var q=function(b){if(b&&(j=b),n){var c=a.href(i.state,j,o);return h&&h.$$setStateInfo(i.state,j),c?void(f[0][m]=c):(n=!1,!1)}};i.paramExpr&&(e.$watch(i.paramExpr,function(a){a!==j&&q(a)},!0),j=e.$eval(i.paramExpr)),q(),l||f.bind("click",function(b){var d=b.which||b.button;d>1||b.ctrlKey||b.metaKey||b.shiftKey||f.attr("target")||(c(function(){a.go(i.state,j,o)}),b.preventDefault())})}}}function y(a,b,c){return{restrict:"A",controller:["$scope","$element","$attrs",function(d,e,f){function g(){a.$current.self===i&&h()?e.addClass(l):e.removeClass(l)}function h(){return!k||j(k,b)}var i,k,l;l=c(f.uiSrefActive||"",!1)(d),this.$$setStateInfo=function(b,c){i=a.get(b,w(e)),k=c,g()},d.$on("$stateChangeSuccess",g)}]}}function z(a){return function(b){return a.is(b)}}function A(a){return function(b){return a.includes(b)}}function B(a,b){function e(a){this.locals=a.locals.globals,this.params=this.locals.$stateParams}function f(){this.locals=null,this.params=null}function g(c,g){if(null!=g.redirectTo){var h,j=g.redirectTo;if(E(j))h=j;else{if(!D(j))throw new Error("Invalid 'redirectTo' in when()");h=function(a,b){return j(a,b.path(),b.search())}}b.when(c,h)}else a.state(d(g,{parent:null,name:"route:"+encodeURIComponent(c),url:c,onEnter:e,onExit:f}));return i.push(g),this}function h(a,b,d){function e(a){return""!==a.name?a:c}var f={routes:i,params:d,current:c};return b.$on("$stateChangeStart",function(a,c,d,f){b.$broadcast("$routeChangeStart",e(c),e(f))}),b.$on("$stateChangeSuccess",function(a,c,d,g){f.current=e(c),b.$broadcast("$routeChangeSuccess",e(c),e(g)),J(d,f.params)}),b.$on("$stateChangeError",function(a,c,d,f,g,h){b.$broadcast("$routeChangeError",e(c),e(f),h)}),f}var i=[];e.$inject=["$$state"],this.when=g,this.$get=h,h.$inject=["$state","$rootScope","$routeParams"]}var C=b.isDefined,D=b.isFunction,E=b.isString,F=b.isObject,G=b.isArray,H=b.forEach,I=b.extend,J=b.copy;b.module("ui.router.util",["ng"]),b.module("ui.router.router",["ui.router.util"]),b.module("ui.router.state",["ui.router.router","ui.router.util"]),b.module("ui.router",["ui.router.state"]),b.module("ui.router.compat",["ui.router"]),l.$inject=["$q","$injector"],b.module("ui.router.util").service("$resolve",l),m.$inject=["$http","$templateCache","$injector"],b.module("ui.router.util").service("$templateFactory",m),n.prototype.concat=function(a){return new n(this.sourcePath+a+this.sourceSearch)},n.prototype.toString=function(){return this.source},n.prototype.exec=function(a,b){var c=this.regexp.exec(a);if(!c)return null;var d,e=this.params,f=e.length,g=this.segments.length-1,h={};if(g!==c.length-1)throw new Error("Unbalanced capture group in route '"+this.source+"'");for(d=0;g>d;d++)h[e[d]]=c[d+1];for(;f>d;d++)h[e[d]]=b[e[d]];return h},n.prototype.parameters=function(){return this.params},n.prototype.format=function(a){var b=this.segments,c=this.params;if(!a)return b.join("");var d,e,f,g=b.length-1,h=c.length,i=b[0];for(d=0;g>d;d++)f=a[c[d]],null!=f&&(i+=encodeURIComponent(f)),i+=b[d+1];for(;h>d;d++)f=a[c[d]],null!=f&&(i+=(e?"&":"?")+c[d]+"="+encodeURIComponent(f),e=!0);return i},b.module("ui.router.util").provider("$urlMatcherFactory",o),p.$inject=["$urlMatcherFactoryProvider"],b.module("ui.router.router").provider("$urlRouter",p),q.$inject=["$urlRouterProvider","$urlMatcherFactoryProvider","$locationProvider"],b.module("ui.router.state").value("$stateParams",{}).provider("$state",q),r.$inject=[],b.module("ui.router.state").provider("$view",r),b.module("ui.router.state").provider("$uiViewScroll",s),t.$inject=["$state","$injector","$uiViewScroll"],u.$inject=["$compile","$controller","$state"],b.module("ui.router.state").directive("uiView",t),b.module("ui.router.state").directive("uiView",u),x.$inject=["$state","$timeout"],y.$inject=["$state","$stateParams","$interpolate"],b.module("ui.router.state").directive("uiSref",x).directive("uiSrefActive",y),z.$inject=["$state"],A.$inject=["$state"],b.module("ui.router.state").filter("isState",z).filter("includedByState",A),B.$inject=["$stateProvider","$urlRouterProvider"],b.module("ui.router.compat").provider("$route",B).directive("ngView",t)}(window,window.angular);
}).call(global, module, undefined, undefined);

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"/home/ubuntu/workspace/bower_components/angular/angular.min.js":"/home/ubuntu/workspace/bower_components/angular/angular.min.js"}],"/home/ubuntu/workspace/bower_components/angular/angular.min.js":[function(require,module,exports){
(function (global){
;__browserify_shim_require__=require;(function browserifyShim(module, exports, require, define, browserify_shim__define__module__export__) {
/*
 AngularJS v1.2.26
 (c) 2010-2014 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(W,X,t){'use strict';function C(b){return function(){var a=arguments[0],c,a="["+(b?b+":":"")+a+"] http://errors.angularjs.org/1.2.26/"+(b?b+"/":"")+a;for(c=1;c<arguments.length;c++)a=a+(1==c?"?":"&")+"p"+(c-1)+"="+encodeURIComponent("function"==typeof arguments[c]?arguments[c].toString().replace(/ \{[\s\S]*$/,""):"undefined"==typeof arguments[c]?"undefined":"string"!=typeof arguments[c]?JSON.stringify(arguments[c]):arguments[c]);return Error(a)}}function Pa(b){if(null==b||Ga(b))return!1;
var a=b.length;return 1===b.nodeType&&a?!0:v(b)||J(b)||0===a||"number"===typeof a&&0<a&&a-1 in b}function r(b,a,c){var d;if(b)if(P(b))for(d in b)"prototype"==d||("length"==d||"name"==d||b.hasOwnProperty&&!b.hasOwnProperty(d))||a.call(c,b[d],d);else if(J(b)||Pa(b))for(d=0;d<b.length;d++)a.call(c,b[d],d);else if(b.forEach&&b.forEach!==r)b.forEach(a,c);else for(d in b)b.hasOwnProperty(d)&&a.call(c,b[d],d);return b}function Zb(b){var a=[],c;for(c in b)b.hasOwnProperty(c)&&a.push(c);return a.sort()}function Tc(b,
a,c){for(var d=Zb(b),e=0;e<d.length;e++)a.call(c,b[d[e]],d[e]);return d}function $b(b){return function(a,c){b(c,a)}}function hb(){for(var b=ma.length,a;b;){b--;a=ma[b].charCodeAt(0);if(57==a)return ma[b]="A",ma.join("");if(90==a)ma[b]="0";else return ma[b]=String.fromCharCode(a+1),ma.join("")}ma.unshift("0");return ma.join("")}function ac(b,a){a?b.$$hashKey=a:delete b.$$hashKey}function D(b){var a=b.$$hashKey;r(arguments,function(a){a!==b&&r(a,function(a,c){b[c]=a})});ac(b,a);return b}function U(b){return parseInt(b,
10)}function bc(b,a){return D(new (D(function(){},{prototype:b})),a)}function E(){}function Qa(b){return b}function ba(b){return function(){return b}}function x(b){return"undefined"===typeof b}function y(b){return"undefined"!==typeof b}function T(b){return null!=b&&"object"===typeof b}function v(b){return"string"===typeof b}function ib(b){return"number"===typeof b}function ta(b){return"[object Date]"===za.call(b)}function P(b){return"function"===typeof b}function jb(b){return"[object RegExp]"===za.call(b)}
function Ga(b){return b&&b.document&&b.location&&b.alert&&b.setInterval}function Uc(b){return!(!b||!(b.nodeName||b.prop&&b.attr&&b.find))}function Vc(b,a,c){var d=[];r(b,function(b,f,g){d.push(a.call(c,b,f,g))});return d}function Ra(b,a){if(b.indexOf)return b.indexOf(a);for(var c=0;c<b.length;c++)if(a===b[c])return c;return-1}function Sa(b,a){var c=Ra(b,a);0<=c&&b.splice(c,1);return a}function Ha(b,a,c,d){if(Ga(b)||b&&b.$evalAsync&&b.$watch)throw Ta("cpws");if(a){if(b===a)throw Ta("cpi");c=c||[];
d=d||[];if(T(b)){var e=Ra(c,b);if(-1!==e)return d[e];c.push(b);d.push(a)}if(J(b))for(var f=a.length=0;f<b.length;f++)e=Ha(b[f],null,c,d),T(b[f])&&(c.push(b[f]),d.push(e)),a.push(e);else{var g=a.$$hashKey;J(a)?a.length=0:r(a,function(b,c){delete a[c]});for(f in b)e=Ha(b[f],null,c,d),T(b[f])&&(c.push(b[f]),d.push(e)),a[f]=e;ac(a,g)}}else if(a=b)J(b)?a=Ha(b,[],c,d):ta(b)?a=new Date(b.getTime()):jb(b)?(a=RegExp(b.source,b.toString().match(/[^\/]*$/)[0]),a.lastIndex=b.lastIndex):T(b)&&(a=Ha(b,{},c,d));
return a}function ha(b,a){if(J(b)){a=a||[];for(var c=0;c<b.length;c++)a[c]=b[c]}else if(T(b))for(c in a=a||{},b)!kb.call(b,c)||"$"===c.charAt(0)&&"$"===c.charAt(1)||(a[c]=b[c]);return a||b}function Aa(b,a){if(b===a)return!0;if(null===b||null===a)return!1;if(b!==b&&a!==a)return!0;var c=typeof b,d;if(c==typeof a&&"object"==c)if(J(b)){if(!J(a))return!1;if((c=b.length)==a.length){for(d=0;d<c;d++)if(!Aa(b[d],a[d]))return!1;return!0}}else{if(ta(b))return ta(a)?isNaN(b.getTime())&&isNaN(a.getTime())||b.getTime()===
a.getTime():!1;if(jb(b)&&jb(a))return b.toString()==a.toString();if(b&&b.$evalAsync&&b.$watch||a&&a.$evalAsync&&a.$watch||Ga(b)||Ga(a)||J(a))return!1;c={};for(d in b)if("$"!==d.charAt(0)&&!P(b[d])){if(!Aa(b[d],a[d]))return!1;c[d]=!0}for(d in a)if(!c.hasOwnProperty(d)&&"$"!==d.charAt(0)&&a[d]!==t&&!P(a[d]))return!1;return!0}return!1}function Bb(b,a){var c=2<arguments.length?Ba.call(arguments,2):[];return!P(a)||a instanceof RegExp?a:c.length?function(){return arguments.length?a.apply(b,c.concat(Ba.call(arguments,
0))):a.apply(b,c)}:function(){return arguments.length?a.apply(b,arguments):a.call(b)}}function Wc(b,a){var c=a;"string"===typeof b&&"$"===b.charAt(0)?c=t:Ga(a)?c="$WINDOW":a&&X===a?c="$DOCUMENT":a&&(a.$evalAsync&&a.$watch)&&(c="$SCOPE");return c}function na(b,a){return"undefined"===typeof b?t:JSON.stringify(b,Wc,a?"  ":null)}function cc(b){return v(b)?JSON.parse(b):b}function Ua(b){"function"===typeof b?b=!0:b&&0!==b.length?(b=K(""+b),b=!("f"==b||"0"==b||"false"==b||"no"==b||"n"==b||"[]"==b)):b=!1;
return b}function ia(b){b=w(b).clone();try{b.empty()}catch(a){}var c=w("<div>").append(b).html();try{return 3===b[0].nodeType?K(c):c.match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/,function(a,b){return"<"+K(b)})}catch(d){return K(c)}}function dc(b){try{return decodeURIComponent(b)}catch(a){}}function ec(b){var a={},c,d;r((b||"").split("&"),function(b){b&&(c=b.replace(/\+/g,"%20").split("="),d=dc(c[0]),y(d)&&(b=y(c[1])?dc(c[1]):!0,kb.call(a,d)?J(a[d])?a[d].push(b):a[d]=[a[d],b]:a[d]=b))});return a}function Cb(b){var a=
[];r(b,function(b,d){J(b)?r(b,function(b){a.push(Ca(d,!0)+(!0===b?"":"="+Ca(b,!0)))}):a.push(Ca(d,!0)+(!0===b?"":"="+Ca(b,!0)))});return a.length?a.join("&"):""}function lb(b){return Ca(b,!0).replace(/%26/gi,"&").replace(/%3D/gi,"=").replace(/%2B/gi,"+")}function Ca(b,a){return encodeURIComponent(b).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,a?"%20":"+")}function Xc(b,a){function c(a){a&&d.push(a)}var d=[b],e,f,g=["ng:app","ng-app","x-ng-app",
"data-ng-app"],k=/\sng[:\-]app(:\s*([\w\d_]+);?)?\s/;r(g,function(a){g[a]=!0;c(X.getElementById(a));a=a.replace(":","\\:");b.querySelectorAll&&(r(b.querySelectorAll("."+a),c),r(b.querySelectorAll("."+a+"\\:"),c),r(b.querySelectorAll("["+a+"]"),c))});r(d,function(a){if(!e){var b=k.exec(" "+a.className+" ");b?(e=a,f=(b[2]||"").replace(/\s+/g,",")):r(a.attributes,function(b){!e&&g[b.name]&&(e=a,f=b.value)})}});e&&a(e,f?[f]:[])}function fc(b,a){var c=function(){b=w(b);if(b.injector()){var c=b[0]===X?
"document":ia(b);throw Ta("btstrpd",c.replace(/</,"&lt;").replace(/>/,"&gt;"));}a=a||[];a.unshift(["$provide",function(a){a.value("$rootElement",b)}]);a.unshift("ng");c=gc(a);c.invoke(["$rootScope","$rootElement","$compile","$injector","$animate",function(a,b,c,d,e){a.$apply(function(){b.data("$injector",d);c(b)(a)})}]);return c},d=/^NG_DEFER_BOOTSTRAP!/;if(W&&!d.test(W.name))return c();W.name=W.name.replace(d,"");Va.resumeBootstrap=function(b){r(b,function(b){a.push(b)});c()}}function mb(b,a){a=
a||"_";return b.replace(Yc,function(b,d){return(d?a:"")+b.toLowerCase()})}function Db(b,a,c){if(!b)throw Ta("areq",a||"?",c||"required");return b}function Wa(b,a,c){c&&J(b)&&(b=b[b.length-1]);Db(P(b),a,"not a function, got "+(b&&"object"===typeof b?b.constructor.name||"Object":typeof b));return b}function Da(b,a){if("hasOwnProperty"===b)throw Ta("badname",a);}function hc(b,a,c){if(!a)return b;a=a.split(".");for(var d,e=b,f=a.length,g=0;g<f;g++)d=a[g],b&&(b=(e=b)[d]);return!c&&P(b)?Bb(e,b):b}function Eb(b){var a=
b[0];b=b[b.length-1];if(a===b)return w(a);var c=[a];do{a=a.nextSibling;if(!a)break;c.push(a)}while(a!==b);return w(c)}function Zc(b){var a=C("$injector"),c=C("ng");b=b.angular||(b.angular={});b.$$minErr=b.$$minErr||C;return b.module||(b.module=function(){var b={};return function(e,f,g){if("hasOwnProperty"===e)throw c("badname","module");f&&b.hasOwnProperty(e)&&(b[e]=null);return b[e]||(b[e]=function(){function b(a,d,e){return function(){c[e||"push"]([a,d,arguments]);return n}}if(!f)throw a("nomod",
e);var c=[],d=[],l=b("$injector","invoke"),n={_invokeQueue:c,_runBlocks:d,requires:f,name:e,provider:b("$provide","provider"),factory:b("$provide","factory"),service:b("$provide","service"),value:b("$provide","value"),constant:b("$provide","constant","unshift"),animation:b("$animateProvider","register"),filter:b("$filterProvider","register"),controller:b("$controllerProvider","register"),directive:b("$compileProvider","directive"),config:l,run:function(a){d.push(a);return this}};g&&l(g);return n}())}}())}
function $c(b){D(b,{bootstrap:fc,copy:Ha,extend:D,equals:Aa,element:w,forEach:r,injector:gc,noop:E,bind:Bb,toJson:na,fromJson:cc,identity:Qa,isUndefined:x,isDefined:y,isString:v,isFunction:P,isObject:T,isNumber:ib,isElement:Uc,isArray:J,version:ad,isDate:ta,lowercase:K,uppercase:Ia,callbacks:{counter:0},$$minErr:C,$$csp:Xa});Ya=Zc(W);try{Ya("ngLocale")}catch(a){Ya("ngLocale",[]).provider("$locale",bd)}Ya("ng",["ngLocale"],["$provide",function(a){a.provider({$$sanitizeUri:cd});a.provider("$compile",
ic).directive({a:dd,input:jc,textarea:jc,form:ed,script:fd,select:gd,style:hd,option:id,ngBind:jd,ngBindHtml:kd,ngBindTemplate:ld,ngClass:md,ngClassEven:nd,ngClassOdd:od,ngCloak:pd,ngController:qd,ngForm:rd,ngHide:sd,ngIf:td,ngInclude:ud,ngInit:vd,ngNonBindable:wd,ngPluralize:xd,ngRepeat:yd,ngShow:zd,ngStyle:Ad,ngSwitch:Bd,ngSwitchWhen:Cd,ngSwitchDefault:Dd,ngOptions:Ed,ngTransclude:Fd,ngModel:Gd,ngList:Hd,ngChange:Id,required:kc,ngRequired:kc,ngValue:Jd}).directive({ngInclude:Kd}).directive(Fb).directive(lc);
a.provider({$anchorScroll:Ld,$animate:Md,$browser:Nd,$cacheFactory:Od,$controller:Pd,$document:Qd,$exceptionHandler:Rd,$filter:mc,$interpolate:Sd,$interval:Td,$http:Ud,$httpBackend:Vd,$location:Wd,$log:Xd,$parse:Yd,$rootScope:Zd,$q:$d,$sce:ae,$sceDelegate:be,$sniffer:ce,$templateCache:de,$timeout:ee,$window:fe,$$rAF:ge,$$asyncCallback:he})}])}function Za(b){return b.replace(ie,function(a,b,d,e){return e?d.toUpperCase():d}).replace(je,"Moz$1")}function Gb(b,a,c,d){function e(b){var e=c&&b?[this.filter(b)]:
[this],m=a,h,l,n,p,q,s;if(!d||null!=b)for(;e.length;)for(h=e.shift(),l=0,n=h.length;l<n;l++)for(p=w(h[l]),m?p.triggerHandler("$destroy"):m=!m,q=0,p=(s=p.children()).length;q<p;q++)e.push(Ea(s[q]));return f.apply(this,arguments)}var f=Ea.fn[b],f=f.$original||f;e.$original=f;Ea.fn[b]=e}function S(b){if(b instanceof S)return b;v(b)&&(b=aa(b));if(!(this instanceof S)){if(v(b)&&"<"!=b.charAt(0))throw Hb("nosel");return new S(b)}if(v(b)){var a=b;b=X;var c;if(c=ke.exec(a))b=[b.createElement(c[1])];else{var d=
b,e;b=d.createDocumentFragment();c=[];if(Ib.test(a)){d=b.appendChild(d.createElement("div"));e=(le.exec(a)||["",""])[1].toLowerCase();e=ea[e]||ea._default;d.innerHTML="<div>&#160;</div>"+e[1]+a.replace(me,"<$1></$2>")+e[2];d.removeChild(d.firstChild);for(a=e[0];a--;)d=d.lastChild;a=0;for(e=d.childNodes.length;a<e;++a)c.push(d.childNodes[a]);d=b.firstChild;d.textContent=""}else c.push(d.createTextNode(a));b.textContent="";b.innerHTML="";b=c}Jb(this,b);w(X.createDocumentFragment()).append(this)}else Jb(this,
b)}function Kb(b){return b.cloneNode(!0)}function Ja(b){Lb(b);var a=0;for(b=b.childNodes||[];a<b.length;a++)Ja(b[a])}function nc(b,a,c,d){if(y(d))throw Hb("offargs");var e=oa(b,"events");oa(b,"handle")&&(x(a)?r(e,function(a,c){$a(b,c,a);delete e[c]}):r(a.split(" "),function(a){x(c)?($a(b,a,e[a]),delete e[a]):Sa(e[a]||[],c)}))}function Lb(b,a){var c=b.ng339,d=ab[c];d&&(a?delete ab[c].data[a]:(d.handle&&(d.events.$destroy&&d.handle({},"$destroy"),nc(b)),delete ab[c],b.ng339=t))}function oa(b,a,c){var d=
b.ng339,d=ab[d||-1];if(y(c))d||(b.ng339=d=++ne,d=ab[d]={}),d[a]=c;else return d&&d[a]}function Mb(b,a,c){var d=oa(b,"data"),e=y(c),f=!e&&y(a),g=f&&!T(a);d||g||oa(b,"data",d={});if(e)d[a]=c;else if(f){if(g)return d&&d[a];D(d,a)}else return d}function Nb(b,a){return b.getAttribute?-1<(" "+(b.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ").indexOf(" "+a+" "):!1}function nb(b,a){a&&b.setAttribute&&r(a.split(" "),function(a){b.setAttribute("class",aa((" "+(b.getAttribute("class")||"")+" ").replace(/[\n\t]/g,
" ").replace(" "+aa(a)+" "," ")))})}function ob(b,a){if(a&&b.setAttribute){var c=(" "+(b.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ");r(a.split(" "),function(a){a=aa(a);-1===c.indexOf(" "+a+" ")&&(c+=a+" ")});b.setAttribute("class",aa(c))}}function Jb(b,a){if(a){a=a.nodeName||!y(a.length)||Ga(a)?[a]:a;for(var c=0;c<a.length;c++)b.push(a[c])}}function oc(b,a){return pb(b,"$"+(a||"ngController")+"Controller")}function pb(b,a,c){9==b.nodeType&&(b=b.documentElement);for(a=J(a)?a:[a];b;){for(var d=
0,e=a.length;d<e;d++)if((c=w.data(b,a[d]))!==t)return c;b=b.parentNode||11===b.nodeType&&b.host}}function pc(b){for(var a=0,c=b.childNodes;a<c.length;a++)Ja(c[a]);for(;b.firstChild;)b.removeChild(b.firstChild)}function qc(b,a){var c=qb[a.toLowerCase()];return c&&rc[b.nodeName]&&c}function oe(b,a){var c=function(c,e){c.preventDefault||(c.preventDefault=function(){c.returnValue=!1});c.stopPropagation||(c.stopPropagation=function(){c.cancelBubble=!0});c.target||(c.target=c.srcElement||X);if(x(c.defaultPrevented)){var f=
c.preventDefault;c.preventDefault=function(){c.defaultPrevented=!0;f.call(c)};c.defaultPrevented=!1}c.isDefaultPrevented=function(){return c.defaultPrevented||!1===c.returnValue};var g=ha(a[e||c.type]||[]);r(g,function(a){a.call(b,c)});8>=Q?(c.preventDefault=null,c.stopPropagation=null,c.isDefaultPrevented=null):(delete c.preventDefault,delete c.stopPropagation,delete c.isDefaultPrevented)};c.elem=b;return c}function Ka(b,a){var c=typeof b,d;"function"==c||"object"==c&&null!==b?"function"==typeof(d=
b.$$hashKey)?d=b.$$hashKey():d===t&&(d=b.$$hashKey=(a||hb)()):d=b;return c+":"+d}function bb(b,a){if(a){var c=0;this.nextUid=function(){return++c}}r(b,this.put,this)}function sc(b){var a,c;"function"===typeof b?(a=b.$inject)||(a=[],b.length&&(c=b.toString().replace(pe,""),c=c.match(qe),r(c[1].split(re),function(b){b.replace(se,function(b,c,d){a.push(d)})})),b.$inject=a):J(b)?(c=b.length-1,Wa(b[c],"fn"),a=b.slice(0,c)):Wa(b,"fn",!0);return a}function gc(b){function a(a){return function(b,c){if(T(b))r(b,
$b(a));else return a(b,c)}}function c(a,b){Da(a,"service");if(P(b)||J(b))b=n.instantiate(b);if(!b.$get)throw cb("pget",a);return l[a+k]=b}function d(a,b){return c(a,{$get:b})}function e(a){var b=[],c,d,f,k;r(a,function(a){if(!h.get(a)){h.put(a,!0);try{if(v(a))for(c=Ya(a),b=b.concat(e(c.requires)).concat(c._runBlocks),d=c._invokeQueue,f=0,k=d.length;f<k;f++){var g=d[f],m=n.get(g[0]);m[g[1]].apply(m,g[2])}else P(a)?b.push(n.invoke(a)):J(a)?b.push(n.invoke(a)):Wa(a,"module")}catch(l){throw J(a)&&(a=
a[a.length-1]),l.message&&(l.stack&&-1==l.stack.indexOf(l.message))&&(l=l.message+"\n"+l.stack),cb("modulerr",a,l.stack||l.message||l);}}});return b}function f(a,b){function c(d){if(a.hasOwnProperty(d)){if(a[d]===g)throw cb("cdep",d+" <- "+m.join(" <- "));return a[d]}try{return m.unshift(d),a[d]=g,a[d]=b(d)}catch(e){throw a[d]===g&&delete a[d],e;}finally{m.shift()}}function d(a,b,e){var f=[],k=sc(a),g,m,h;m=0;for(g=k.length;m<g;m++){h=k[m];if("string"!==typeof h)throw cb("itkn",h);f.push(e&&e.hasOwnProperty(h)?
e[h]:c(h))}J(a)&&(a=a[g]);return a.apply(b,f)}return{invoke:d,instantiate:function(a,b){var c=function(){},e;c.prototype=(J(a)?a[a.length-1]:a).prototype;c=new c;e=d(a,c,b);return T(e)||P(e)?e:c},get:c,annotate:sc,has:function(b){return l.hasOwnProperty(b+k)||a.hasOwnProperty(b)}}}var g={},k="Provider",m=[],h=new bb([],!0),l={$provide:{provider:a(c),factory:a(d),service:a(function(a,b){return d(a,["$injector",function(a){return a.instantiate(b)}])}),value:a(function(a,b){return d(a,ba(b))}),constant:a(function(a,
b){Da(a,"constant");l[a]=b;p[a]=b}),decorator:function(a,b){var c=n.get(a+k),d=c.$get;c.$get=function(){var a=q.invoke(d,c);return q.invoke(b,null,{$delegate:a})}}}},n=l.$injector=f(l,function(){throw cb("unpr",m.join(" <- "));}),p={},q=p.$injector=f(p,function(a){a=n.get(a+k);return q.invoke(a.$get,a)});r(e(b),function(a){q.invoke(a||E)});return q}function Ld(){var b=!0;this.disableAutoScrolling=function(){b=!1};this.$get=["$window","$location","$rootScope",function(a,c,d){function e(a){var b=null;
r(a,function(a){b||"a"!==K(a.nodeName)||(b=a)});return b}function f(){var b=c.hash(),d;b?(d=g.getElementById(b))?d.scrollIntoView():(d=e(g.getElementsByName(b)))?d.scrollIntoView():"top"===b&&a.scrollTo(0,0):a.scrollTo(0,0)}var g=a.document;b&&d.$watch(function(){return c.hash()},function(){d.$evalAsync(f)});return f}]}function he(){this.$get=["$$rAF","$timeout",function(b,a){return b.supported?function(a){return b(a)}:function(b){return a(b,0,!1)}}]}function te(b,a,c,d){function e(a){try{a.apply(null,
Ba.call(arguments,1))}finally{if(s--,0===s)for(;F.length;)try{F.pop()()}catch(b){c.error(b)}}}function f(a,b){(function fa(){r(u,function(a){a()});A=b(fa,a)})()}function g(){z=null;N!=k.url()&&(N=k.url(),r(ca,function(a){a(k.url())}))}var k=this,m=a[0],h=b.location,l=b.history,n=b.setTimeout,p=b.clearTimeout,q={};k.isMock=!1;var s=0,F=[];k.$$completeOutstandingRequest=e;k.$$incOutstandingRequestCount=function(){s++};k.notifyWhenNoOutstandingRequests=function(a){r(u,function(a){a()});0===s?a():F.push(a)};
var u=[],A;k.addPollFn=function(a){x(A)&&f(100,n);u.push(a);return a};var N=h.href,R=a.find("base"),z=null;k.url=function(a,c){h!==b.location&&(h=b.location);l!==b.history&&(l=b.history);if(a){if(N!=a)return N=a,d.history?c?l.replaceState(null,"",a):(l.pushState(null,"",a),R.attr("href",R.attr("href"))):(z=a,c?h.replace(a):h.href=a),k}else return z||h.href.replace(/%27/g,"'")};var ca=[],L=!1;k.onUrlChange=function(a){if(!L){if(d.history)w(b).on("popstate",g);if(d.hashchange)w(b).on("hashchange",g);
else k.addPollFn(g);L=!0}ca.push(a);return a};k.$$checkUrlChange=g;k.baseHref=function(){var a=R.attr("href");return a?a.replace(/^(https?\:)?\/\/[^\/]*/,""):""};var O={},da="",B=k.baseHref();k.cookies=function(a,b){var d,e,f,k;if(a)b===t?m.cookie=escape(a)+"=;path="+B+";expires=Thu, 01 Jan 1970 00:00:00 GMT":v(b)&&(d=(m.cookie=escape(a)+"="+escape(b)+";path="+B).length+1,4096<d&&c.warn("Cookie '"+a+"' possibly not set or overflowed because it was too large ("+d+" > 4096 bytes)!"));else{if(m.cookie!==
da)for(da=m.cookie,d=da.split("; "),O={},f=0;f<d.length;f++)e=d[f],k=e.indexOf("="),0<k&&(a=unescape(e.substring(0,k)),O[a]===t&&(O[a]=unescape(e.substring(k+1))));return O}};k.defer=function(a,b){var c;s++;c=n(function(){delete q[c];e(a)},b||0);q[c]=!0;return c};k.defer.cancel=function(a){return q[a]?(delete q[a],p(a),e(E),!0):!1}}function Nd(){this.$get=["$window","$log","$sniffer","$document",function(b,a,c,d){return new te(b,d,a,c)}]}function Od(){this.$get=function(){function b(b,d){function e(a){a!=
n&&(p?p==a&&(p=a.n):p=a,f(a.n,a.p),f(a,n),n=a,n.n=null)}function f(a,b){a!=b&&(a&&(a.p=b),b&&(b.n=a))}if(b in a)throw C("$cacheFactory")("iid",b);var g=0,k=D({},d,{id:b}),m={},h=d&&d.capacity||Number.MAX_VALUE,l={},n=null,p=null;return a[b]={put:function(a,b){if(h<Number.MAX_VALUE){var c=l[a]||(l[a]={key:a});e(c)}if(!x(b))return a in m||g++,m[a]=b,g>h&&this.remove(p.key),b},get:function(a){if(h<Number.MAX_VALUE){var b=l[a];if(!b)return;e(b)}return m[a]},remove:function(a){if(h<Number.MAX_VALUE){var b=
l[a];if(!b)return;b==n&&(n=b.p);b==p&&(p=b.n);f(b.n,b.p);delete l[a]}delete m[a];g--},removeAll:function(){m={};g=0;l={};n=p=null},destroy:function(){l=k=m=null;delete a[b]},info:function(){return D({},k,{size:g})}}}var a={};b.info=function(){var b={};r(a,function(a,e){b[e]=a.info()});return b};b.get=function(b){return a[b]};return b}}function de(){this.$get=["$cacheFactory",function(b){return b("templates")}]}function ic(b,a){var c={},d="Directive",e=/^\s*directive\:\s*([\d\w_\-]+)\s+(.*)$/,f=/(([\d\w_\-]+)(?:\:([^;]+))?;?)/,
g=/^(on[a-z]+|formaction)$/;this.directive=function m(a,e){Da(a,"directive");v(a)?(Db(e,"directiveFactory"),c.hasOwnProperty(a)||(c[a]=[],b.factory(a+d,["$injector","$exceptionHandler",function(b,d){var e=[];r(c[a],function(c,f){try{var g=b.invoke(c);P(g)?g={compile:ba(g)}:!g.compile&&g.link&&(g.compile=ba(g.link));g.priority=g.priority||0;g.index=f;g.name=g.name||a;g.require=g.require||g.controller&&g.name;g.restrict=g.restrict||"A";e.push(g)}catch(m){d(m)}});return e}])),c[a].push(e)):r(a,$b(m));
return this};this.aHrefSanitizationWhitelist=function(b){return y(b)?(a.aHrefSanitizationWhitelist(b),this):a.aHrefSanitizationWhitelist()};this.imgSrcSanitizationWhitelist=function(b){return y(b)?(a.imgSrcSanitizationWhitelist(b),this):a.imgSrcSanitizationWhitelist()};this.$get=["$injector","$interpolate","$exceptionHandler","$http","$templateCache","$parse","$controller","$rootScope","$document","$sce","$animate","$$sanitizeUri",function(a,b,l,n,p,q,s,F,u,A,N,R){function z(a,b,c,d,e){a instanceof
w||(a=w(a));r(a,function(b,c){3==b.nodeType&&b.nodeValue.match(/\S+/)&&(a[c]=w(b).wrap("<span></span>").parent()[0])});var f=L(a,b,a,c,d,e);ca(a,"ng-scope");return function(b,c,d,e){Db(b,"scope");var g=c?La.clone.call(a):a;r(d,function(a,b){g.data("$"+b+"Controller",a)});d=0;for(var m=g.length;d<m;d++){var h=g[d].nodeType;1!==h&&9!==h||g.eq(d).data("$scope",b)}c&&c(g,b);f&&f(b,g,g,e);return g}}function ca(a,b){try{a.addClass(b)}catch(c){}}function L(a,b,c,d,e,f){function g(a,c,d,e){var f,h,l,q,n,
p,s;f=c.length;var M=Array(f);for(q=0;q<f;q++)M[q]=c[q];p=q=0;for(n=m.length;q<n;p++)h=M[p],c=m[q++],f=m[q++],c?(c.scope?(l=a.$new(),w.data(h,"$scope",l)):l=a,s=c.transcludeOnThisElement?O(a,c.transclude,e):!c.templateOnThisElement&&e?e:!e&&b?O(a,b):null,c(f,l,h,d,s)):f&&f(a,h.childNodes,t,e)}for(var m=[],h,l,q,n,p=0;p<a.length;p++)h=new Ob,l=da(a[p],[],h,0===p?d:t,e),(f=l.length?H(l,a[p],h,b,c,null,[],[],f):null)&&f.scope&&ca(h.$$element,"ng-scope"),h=f&&f.terminal||!(q=a[p].childNodes)||!q.length?
null:L(q,f?(f.transcludeOnThisElement||!f.templateOnThisElement)&&f.transclude:b),m.push(f,h),n=n||f||h,f=null;return n?g:null}function O(a,b,c){return function(d,e,f){var g=!1;d||(d=a.$new(),g=d.$$transcluded=!0);e=b(d,e,f,c);if(g)e.on("$destroy",function(){d.$destroy()});return e}}function da(a,b,c,d,g){var m=c.$attr,h;switch(a.nodeType){case 1:fa(b,pa(Ma(a).toLowerCase()),"E",d,g);for(var l,q,n,p=a.attributes,s=0,F=p&&p.length;s<F;s++){var A=!1,N=!1;l=p[s];if(!Q||8<=Q||l.specified){h=l.name;q=
aa(l.value);l=pa(h);if(n=U.test(l))h=mb(l.substr(6),"-");var u=l.replace(/(Start|End)$/,"");l===u+"Start"&&(A=h,N=h.substr(0,h.length-5)+"end",h=h.substr(0,h.length-6));l=pa(h.toLowerCase());m[l]=h;if(n||!c.hasOwnProperty(l))c[l]=q,qc(a,l)&&(c[l]=!0);S(a,b,q,l);fa(b,l,"A",d,g,A,N)}}a=a.className;if(v(a)&&""!==a)for(;h=f.exec(a);)l=pa(h[2]),fa(b,l,"C",d,g)&&(c[l]=aa(h[3])),a=a.substr(h.index+h[0].length);break;case 3:K(b,a.nodeValue);break;case 8:try{if(h=e.exec(a.nodeValue))l=pa(h[1]),fa(b,l,"M",
d,g)&&(c[l]=aa(h[2]))}catch(z){}}b.sort(x);return b}function B(a,b,c){var d=[],e=0;if(b&&a.hasAttribute&&a.hasAttribute(b)){do{if(!a)throw ja("uterdir",b,c);1==a.nodeType&&(a.hasAttribute(b)&&e++,a.hasAttribute(c)&&e--);d.push(a);a=a.nextSibling}while(0<e)}else d.push(a);return w(d)}function I(a,b,c){return function(d,e,f,g,h){e=B(e[0],b,c);return a(d,e,f,g,h)}}function H(a,c,d,e,f,g,m,n,p){function F(a,b,c,d){if(a){c&&(a=I(a,c,d));a.require=G.require;a.directiveName=C;if(L===G||G.$$isolateScope)a=
tc(a,{isolateScope:!0});m.push(a)}if(b){c&&(b=I(b,c,d));b.require=G.require;b.directiveName=C;if(L===G||G.$$isolateScope)b=tc(b,{isolateScope:!0});n.push(b)}}function A(a,b,c,d){var e,f="data",g=!1;if(v(b)){for(;"^"==(e=b.charAt(0))||"?"==e;)b=b.substr(1),"^"==e&&(f="inheritedData"),g=g||"?"==e;e=null;d&&"data"===f&&(e=d[b]);e=e||c[f]("$"+b+"Controller");if(!e&&!g)throw ja("ctreq",b,a);}else J(b)&&(e=[],r(b,function(b){e.push(A(a,b,c,d))}));return e}function N(a,e,f,g,p){function F(a,b){var c;2>arguments.length&&
(b=a,a=t);K&&(c=da);return p(a,b,c)}var u,M,z,O,I,B,da={},rb;u=c===f?d:ha(d,new Ob(w(f),d.$attr));M=u.$$element;if(L){var Na=/^\s*([@=&])(\??)\s*(\w*)\s*$/;B=e.$new(!0);!H||H!==L&&H!==L.$$originalDirective?M.data("$isolateScopeNoTemplate",B):M.data("$isolateScope",B);ca(M,"ng-isolate-scope");r(L.scope,function(a,c){var d=a.match(Na)||[],f=d[3]||c,g="?"==d[2],d=d[1],m,l,n,p;B.$$isolateBindings[c]=d+f;switch(d){case "@":u.$observe(f,function(a){B[c]=a});u.$$observers[f].$$scope=e;u[f]&&(B[c]=b(u[f])(e));
break;case "=":if(g&&!u[f])break;l=q(u[f]);p=l.literal?Aa:function(a,b){return a===b||a!==a&&b!==b};n=l.assign||function(){m=B[c]=l(e);throw ja("nonassign",u[f],L.name);};m=B[c]=l(e);B.$watch(function(){var a=l(e);p(a,B[c])||(p(a,m)?n(e,a=B[c]):B[c]=a);return m=a},null,l.literal);break;case "&":l=q(u[f]);B[c]=function(a){return l(e,a)};break;default:throw ja("iscp",L.name,c,a);}})}rb=p&&F;R&&r(R,function(a){var b={$scope:a===L||a.$$isolateScope?B:e,$element:M,$attrs:u,$transclude:rb},c;I=a.controller;
"@"==I&&(I=u[a.name]);c=s(I,b);da[a.name]=c;K||M.data("$"+a.name+"Controller",c);a.controllerAs&&(b.$scope[a.controllerAs]=c)});g=0;for(z=m.length;g<z;g++)try{O=m[g],O(O.isolateScope?B:e,M,u,O.require&&A(O.directiveName,O.require,M,da),rb)}catch(G){l(G,ia(M))}g=e;L&&(L.template||null===L.templateUrl)&&(g=B);a&&a(g,f.childNodes,t,p);for(g=n.length-1;0<=g;g--)try{O=n[g],O(O.isolateScope?B:e,M,u,O.require&&A(O.directiveName,O.require,M,da),rb)}catch(y){l(y,ia(M))}}p=p||{};for(var u=-Number.MAX_VALUE,
O,R=p.controllerDirectives,L=p.newIsolateScopeDirective,H=p.templateDirective,fa=p.nonTlbTranscludeDirective,x=!1,D=!1,K=p.hasElementTranscludeDirective,Z=d.$$element=w(c),G,C,V,S=e,Q,Fa=0,qa=a.length;Fa<qa;Fa++){G=a[Fa];var U=G.$$start,Y=G.$$end;U&&(Z=B(c,U,Y));V=t;if(u>G.priority)break;if(V=G.scope)O=O||G,G.templateUrl||(db("new/isolated scope",L,G,Z),T(V)&&(L=G));C=G.name;!G.templateUrl&&G.controller&&(V=G.controller,R=R||{},db("'"+C+"' controller",R[C],G,Z),R[C]=G);if(V=G.transclude)x=!0,G.$$tlb||
(db("transclusion",fa,G,Z),fa=G),"element"==V?(K=!0,u=G.priority,V=Z,Z=d.$$element=w(X.createComment(" "+C+": "+d[C]+" ")),c=Z[0],Na(f,Ba.call(V,0),c),S=z(V,e,u,g&&g.name,{nonTlbTranscludeDirective:fa})):(V=w(Kb(c)).contents(),Z.empty(),S=z(V,e));if(G.template)if(D=!0,db("template",H,G,Z),H=G,V=P(G.template)?G.template(Z,d):G.template,V=W(V),G.replace){g=G;V=Ib.test(V)?w(aa(V)):[];c=V[0];if(1!=V.length||1!==c.nodeType)throw ja("tplrt",C,"");Na(f,Z,c);qa={$attr:{}};V=da(c,[],qa);var $=a.splice(Fa+
1,a.length-(Fa+1));L&&y(V);a=a.concat(V).concat($);E(d,qa);qa=a.length}else Z.html(V);if(G.templateUrl)D=!0,db("template",H,G,Z),H=G,G.replace&&(g=G),N=ue(a.splice(Fa,a.length-Fa),Z,d,f,x&&S,m,n,{controllerDirectives:R,newIsolateScopeDirective:L,templateDirective:H,nonTlbTranscludeDirective:fa}),qa=a.length;else if(G.compile)try{Q=G.compile(Z,d,S),P(Q)?F(null,Q,U,Y):Q&&F(Q.pre,Q.post,U,Y)}catch(ve){l(ve,ia(Z))}G.terminal&&(N.terminal=!0,u=Math.max(u,G.priority))}N.scope=O&&!0===O.scope;N.transcludeOnThisElement=
x;N.templateOnThisElement=D;N.transclude=S;p.hasElementTranscludeDirective=K;return N}function y(a){for(var b=0,c=a.length;b<c;b++)a[b]=bc(a[b],{$$isolateScope:!0})}function fa(b,e,f,g,h,q,n){if(e===h)return null;h=null;if(c.hasOwnProperty(e)){var p;e=a.get(e+d);for(var s=0,u=e.length;s<u;s++)try{p=e[s],(g===t||g>p.priority)&&-1!=p.restrict.indexOf(f)&&(q&&(p=bc(p,{$$start:q,$$end:n})),b.push(p),h=p)}catch(F){l(F)}}return h}function E(a,b){var c=b.$attr,d=a.$attr,e=a.$$element;r(a,function(d,e){"$"!=
e.charAt(0)&&(b[e]&&b[e]!==d&&(d+=("style"===e?";":" ")+b[e]),a.$set(e,d,!0,c[e]))});r(b,function(b,f){"class"==f?(ca(e,b),a["class"]=(a["class"]?a["class"]+" ":"")+b):"style"==f?(e.attr("style",e.attr("style")+";"+b),a.style=(a.style?a.style+";":"")+b):"$"==f.charAt(0)||a.hasOwnProperty(f)||(a[f]=b,d[f]=c[f])})}function ue(a,b,c,d,e,f,g,h){var m=[],l,q,s=b[0],u=a.shift(),F=D({},u,{templateUrl:null,transclude:null,replace:null,$$originalDirective:u}),N=P(u.templateUrl)?u.templateUrl(b,c):u.templateUrl;
b.empty();n.get(A.getTrustedResourceUrl(N),{cache:p}).success(function(n){var p,A;n=W(n);if(u.replace){n=Ib.test(n)?w(aa(n)):[];p=n[0];if(1!=n.length||1!==p.nodeType)throw ja("tplrt",u.name,N);n={$attr:{}};Na(d,b,p);var z=da(p,[],n);T(u.scope)&&y(z);a=z.concat(a);E(c,n)}else p=s,b.html(n);a.unshift(F);l=H(a,p,c,e,b,u,f,g,h);r(d,function(a,c){a==p&&(d[c]=b[0])});for(q=L(b[0].childNodes,e);m.length;){n=m.shift();A=m.shift();var R=m.shift(),I=m.shift(),z=b[0];if(A!==s){var B=A.className;h.hasElementTranscludeDirective&&
u.replace||(z=Kb(p));Na(R,w(A),z);ca(w(z),B)}A=l.transcludeOnThisElement?O(n,l.transclude,I):I;l(q,n,z,d,A)}m=null}).error(function(a,b,c,d){throw ja("tpload",d.url);});return function(a,b,c,d,e){a=e;m?(m.push(b),m.push(c),m.push(d),m.push(a)):(l.transcludeOnThisElement&&(a=O(b,l.transclude,e)),l(q,b,c,d,a))}}function x(a,b){var c=b.priority-a.priority;return 0!==c?c:a.name!==b.name?a.name<b.name?-1:1:a.index-b.index}function db(a,b,c,d){if(b)throw ja("multidir",b.name,c.name,a,ia(d));}function K(a,
c){var d=b(c,!0);d&&a.push({priority:0,compile:function(a){var b=a.parent().length;b&&ca(a.parent(),"ng-binding");return function(a,c){var e=c.parent(),f=e.data("$binding")||[];f.push(d);e.data("$binding",f);b||ca(e,"ng-binding");a.$watch(d,function(a){c[0].nodeValue=a})}}})}function C(a,b){if("srcdoc"==b)return A.HTML;var c=Ma(a);if("xlinkHref"==b||"FORM"==c&&"action"==b||"IMG"!=c&&("src"==b||"ngSrc"==b))return A.RESOURCE_URL}function S(a,c,d,e){var f=b(d,!0);if(f){if("multiple"===e&&"SELECT"===
Ma(a))throw ja("selmulti",ia(a));c.push({priority:100,compile:function(){return{pre:function(c,d,m){d=m.$$observers||(m.$$observers={});if(g.test(e))throw ja("nodomevents");if(f=b(m[e],!0,C(a,e)))m[e]=f(c),(d[e]||(d[e]=[])).$$inter=!0,(m.$$observers&&m.$$observers[e].$$scope||c).$watch(f,function(a,b){"class"===e&&a!=b?m.$updateClass(a,b):m.$set(e,a)})}}}})}}function Na(a,b,c){var d=b[0],e=b.length,f=d.parentNode,g,m;if(a)for(g=0,m=a.length;g<m;g++)if(a[g]==d){a[g++]=c;m=g+e-1;for(var h=a.length;g<
h;g++,m++)m<h?a[g]=a[m]:delete a[g];a.length-=e-1;break}f&&f.replaceChild(c,d);a=X.createDocumentFragment();a.appendChild(d);c[w.expando]=d[w.expando];d=1;for(e=b.length;d<e;d++)f=b[d],w(f).remove(),a.appendChild(f),delete b[d];b[0]=c;b.length=1}function tc(a,b){return D(function(){return a.apply(null,arguments)},a,b)}var Ob=function(a,b){this.$$element=a;this.$attr=b||{}};Ob.prototype={$normalize:pa,$addClass:function(a){a&&0<a.length&&N.addClass(this.$$element,a)},$removeClass:function(a){a&&0<
a.length&&N.removeClass(this.$$element,a)},$updateClass:function(a,b){var c=uc(a,b),d=uc(b,a);0===c.length?N.removeClass(this.$$element,d):0===d.length?N.addClass(this.$$element,c):N.setClass(this.$$element,c,d)},$set:function(a,b,c,d){var e=qc(this.$$element[0],a);e&&(this.$$element.prop(a,b),d=e);this[a]=b;d?this.$attr[a]=d:(d=this.$attr[a])||(this.$attr[a]=d=mb(a,"-"));e=Ma(this.$$element);if("A"===e&&"href"===a||"IMG"===e&&"src"===a)this[a]=b=R(b,"src"===a);!1!==c&&(null===b||b===t?this.$$element.removeAttr(d):
this.$$element.attr(d,b));(c=this.$$observers)&&r(c[a],function(a){try{a(b)}catch(c){l(c)}})},$observe:function(a,b){var c=this,d=c.$$observers||(c.$$observers={}),e=d[a]||(d[a]=[]);e.push(b);F.$evalAsync(function(){e.$$inter||b(c[a])});return b}};var qa=b.startSymbol(),Z=b.endSymbol(),W="{{"==qa||"}}"==Z?Qa:function(a){return a.replace(/\{\{/g,qa).replace(/}}/g,Z)},U=/^ngAttr[A-Z]/;return z}]}function pa(b){return Za(b.replace(we,""))}function uc(b,a){var c="",d=b.split(/\s+/),e=a.split(/\s+/),f=
0;a:for(;f<d.length;f++){for(var g=d[f],k=0;k<e.length;k++)if(g==e[k])continue a;c+=(0<c.length?" ":"")+g}return c}function Pd(){var b={},a=/^(\S+)(\s+as\s+(\w+))?$/;this.register=function(a,d){Da(a,"controller");T(a)?D(b,a):b[a]=d};this.$get=["$injector","$window",function(c,d){return function(e,f){var g,k,m;v(e)&&(g=e.match(a),k=g[1],m=g[3],e=b.hasOwnProperty(k)?b[k]:hc(f.$scope,k,!0)||hc(d,k,!0),Wa(e,k,!0));g=c.instantiate(e,f);if(m){if(!f||"object"!==typeof f.$scope)throw C("$controller")("noscp",
k||e.name,m);f.$scope[m]=g}return g}}]}function Qd(){this.$get=["$window",function(b){return w(b.document)}]}function Rd(){this.$get=["$log",function(b){return function(a,c){b.error.apply(b,arguments)}}]}function vc(b){var a={},c,d,e;if(!b)return a;r(b.split("\n"),function(b){e=b.indexOf(":");c=K(aa(b.substr(0,e)));d=aa(b.substr(e+1));c&&(a[c]=a[c]?a[c]+", "+d:d)});return a}function wc(b){var a=T(b)?b:t;return function(c){a||(a=vc(b));return c?a[K(c)]||null:a}}function xc(b,a,c){if(P(c))return c(b,
a);r(c,function(c){b=c(b,a)});return b}function Ud(){var b=/^\s*(\[|\{[^\{])/,a=/[\}\]]\s*$/,c=/^\)\]\}',?\n/,d={"Content-Type":"application/json;charset=utf-8"},e=this.defaults={transformResponse:[function(d){v(d)&&(d=d.replace(c,""),b.test(d)&&a.test(d)&&(d=cc(d)));return d}],transformRequest:[function(a){return T(a)&&"[object File]"!==za.call(a)&&"[object Blob]"!==za.call(a)?na(a):a}],headers:{common:{Accept:"application/json, text/plain, */*"},post:ha(d),put:ha(d),patch:ha(d)},xsrfCookieName:"XSRF-TOKEN",
xsrfHeaderName:"X-XSRF-TOKEN"},f=this.interceptors=[],g=this.responseInterceptors=[];this.$get=["$httpBackend","$browser","$cacheFactory","$rootScope","$q","$injector",function(a,b,c,d,n,p){function q(a){function b(a){var d=D({},a,{data:xc(a.data,a.headers,c.transformResponse)});return 200<=a.status&&300>a.status?d:n.reject(d)}var c={method:"get",transformRequest:e.transformRequest,transformResponse:e.transformResponse},d=function(a){var b=e.headers,c=D({},a.headers),d,f,b=D({},b.common,b[K(a.method)]);
a:for(d in b){a=K(d);for(f in c)if(K(f)===a)continue a;c[d]=b[d]}(function(a){var b;r(a,function(c,d){P(c)&&(b=c(),null!=b?a[d]=b:delete a[d])})})(c);return c}(a);D(c,a);c.headers=d;c.method=Ia(c.method);var f=[function(a){d=a.headers;var c=xc(a.data,wc(d),a.transformRequest);x(c)&&r(d,function(a,b){"content-type"===K(b)&&delete d[b]});x(a.withCredentials)&&!x(e.withCredentials)&&(a.withCredentials=e.withCredentials);return s(a,c,d).then(b,b)},t],g=n.when(c);for(r(A,function(a){(a.request||a.requestError)&&
f.unshift(a.request,a.requestError);(a.response||a.responseError)&&f.push(a.response,a.responseError)});f.length;){a=f.shift();var m=f.shift(),g=g.then(a,m)}g.success=function(a){g.then(function(b){a(b.data,b.status,b.headers,c)});return g};g.error=function(a){g.then(null,function(b){a(b.data,b.status,b.headers,c)});return g};return g}function s(c,f,g){function h(a,b,c,e){I&&(200<=a&&300>a?I.put(w,[a,b,vc(c),e]):I.remove(w));p(b,a,c,e);d.$$phase||d.$apply()}function p(a,b,d,e){b=Math.max(b,0);(200<=
b&&300>b?A.resolve:A.reject)({data:a,status:b,headers:wc(d),config:c,statusText:e})}function s(){var a=Ra(q.pendingRequests,c);-1!==a&&q.pendingRequests.splice(a,1)}var A=n.defer(),r=A.promise,I,H,w=F(c.url,c.params);q.pendingRequests.push(c);r.then(s,s);!c.cache&&!e.cache||(!1===c.cache||"GET"!==c.method&&"JSONP"!==c.method)||(I=T(c.cache)?c.cache:T(e.cache)?e.cache:u);if(I)if(H=I.get(w),y(H)){if(H&&P(H.then))return H.then(s,s),H;J(H)?p(H[1],H[0],ha(H[2]),H[3]):p(H,200,{},"OK")}else I.put(w,r);x(H)&&
((H=Pb(c.url)?b.cookies()[c.xsrfCookieName||e.xsrfCookieName]:t)&&(g[c.xsrfHeaderName||e.xsrfHeaderName]=H),a(c.method,w,f,h,g,c.timeout,c.withCredentials,c.responseType));return r}function F(a,b){if(!b)return a;var c=[];Tc(b,function(a,b){null===a||x(a)||(J(a)||(a=[a]),r(a,function(a){T(a)&&(a=ta(a)?a.toISOString():na(a));c.push(Ca(b)+"="+Ca(a))}))});0<c.length&&(a+=(-1==a.indexOf("?")?"?":"&")+c.join("&"));return a}var u=c("$http"),A=[];r(f,function(a){A.unshift(v(a)?p.get(a):p.invoke(a))});r(g,
function(a,b){var c=v(a)?p.get(a):p.invoke(a);A.splice(b,0,{response:function(a){return c(n.when(a))},responseError:function(a){return c(n.reject(a))}})});q.pendingRequests=[];(function(a){r(arguments,function(a){q[a]=function(b,c){return q(D(c||{},{method:a,url:b}))}})})("get","delete","head","jsonp");(function(a){r(arguments,function(a){q[a]=function(b,c,d){return q(D(d||{},{method:a,url:b,data:c}))}})})("post","put");q.defaults=e;return q}]}function xe(b){if(8>=Q&&(!b.match(/^(get|post|head|put|delete|options)$/i)||
!W.XMLHttpRequest))return new W.ActiveXObject("Microsoft.XMLHTTP");if(W.XMLHttpRequest)return new W.XMLHttpRequest;throw C("$httpBackend")("noxhr");}function Vd(){this.$get=["$browser","$window","$document",function(b,a,c){return ye(b,xe,b.defer,a.angular.callbacks,c[0])}]}function ye(b,a,c,d,e){function f(a,b,c){var f=e.createElement("script"),g=null;f.type="text/javascript";f.src=a;f.async=!0;g=function(a){$a(f,"load",g);$a(f,"error",g);e.body.removeChild(f);f=null;var k=-1,s="unknown";a&&("load"!==
a.type||d[b].called||(a={type:"error"}),s=a.type,k="error"===a.type?404:200);c&&c(k,s)};sb(f,"load",g);sb(f,"error",g);8>=Q&&(f.onreadystatechange=function(){v(f.readyState)&&/loaded|complete/.test(f.readyState)&&(f.onreadystatechange=null,g({type:"load"}))});e.body.appendChild(f);return g}var g=-1;return function(e,m,h,l,n,p,q,s){function F(){A=g;R&&R();z&&z.abort()}function u(a,d,e,f,g){L&&c.cancel(L);R=z=null;0===d&&(d=e?200:"file"==ua(m).protocol?404:0);a(1223===d?204:d,e,f,g||"");b.$$completeOutstandingRequest(E)}
var A;b.$$incOutstandingRequestCount();m=m||b.url();if("jsonp"==K(e)){var N="_"+(d.counter++).toString(36);d[N]=function(a){d[N].data=a;d[N].called=!0};var R=f(m.replace("JSON_CALLBACK","angular.callbacks."+N),N,function(a,b){u(l,a,d[N].data,"",b);d[N]=E})}else{var z=a(e);z.open(e,m,!0);r(n,function(a,b){y(a)&&z.setRequestHeader(b,a)});z.onreadystatechange=function(){if(z&&4==z.readyState){var a=null,b=null,c="";A!==g&&(a=z.getAllResponseHeaders(),b="response"in z?z.response:z.responseText);A===g&&
10>Q||(c=z.statusText);u(l,A||z.status,b,a,c)}};q&&(z.withCredentials=!0);if(s)try{z.responseType=s}catch(ca){if("json"!==s)throw ca;}z.send(h||null)}if(0<p)var L=c(F,p);else p&&P(p.then)&&p.then(F)}}function Sd(){var b="{{",a="}}";this.startSymbol=function(a){return a?(b=a,this):b};this.endSymbol=function(b){return b?(a=b,this):a};this.$get=["$parse","$exceptionHandler","$sce",function(c,d,e){function f(f,h,l){for(var n,p,q=0,s=[],F=f.length,u=!1,A=[];q<F;)-1!=(n=f.indexOf(b,q))&&-1!=(p=f.indexOf(a,
n+g))?(q!=n&&s.push(f.substring(q,n)),s.push(q=c(u=f.substring(n+g,p))),q.exp=u,q=p+k,u=!0):(q!=F&&s.push(f.substring(q)),q=F);(F=s.length)||(s.push(""),F=1);if(l&&1<s.length)throw yc("noconcat",f);if(!h||u)return A.length=F,q=function(a){try{for(var b=0,c=F,g;b<c;b++){if("function"==typeof(g=s[b]))if(g=g(a),g=l?e.getTrusted(l,g):e.valueOf(g),null==g)g="";else switch(typeof g){case "string":break;case "number":g=""+g;break;default:g=na(g)}A[b]=g}return A.join("")}catch(k){a=yc("interr",f,k.toString()),
d(a)}},q.exp=f,q.parts=s,q}var g=b.length,k=a.length;f.startSymbol=function(){return b};f.endSymbol=function(){return a};return f}]}function Td(){this.$get=["$rootScope","$window","$q",function(b,a,c){function d(d,g,k,m){var h=a.setInterval,l=a.clearInterval,n=c.defer(),p=n.promise,q=0,s=y(m)&&!m;k=y(k)?k:0;p.then(null,null,d);p.$$intervalId=h(function(){n.notify(q++);0<k&&q>=k&&(n.resolve(q),l(p.$$intervalId),delete e[p.$$intervalId]);s||b.$apply()},g);e[p.$$intervalId]=n;return p}var e={};d.cancel=
function(b){return b&&b.$$intervalId in e?(e[b.$$intervalId].reject("canceled"),a.clearInterval(b.$$intervalId),delete e[b.$$intervalId],!0):!1};return d}]}function bd(){this.$get=function(){return{id:"en-us",NUMBER_FORMATS:{DECIMAL_SEP:".",GROUP_SEP:",",PATTERNS:[{minInt:1,minFrac:0,maxFrac:3,posPre:"",posSuf:"",negPre:"-",negSuf:"",gSize:3,lgSize:3},{minInt:1,minFrac:2,maxFrac:2,posPre:"\u00a4",posSuf:"",negPre:"(\u00a4",negSuf:")",gSize:3,lgSize:3}],CURRENCY_SYM:"$"},DATETIME_FORMATS:{MONTH:"January February March April May June July August September October November December".split(" "),
SHORTMONTH:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),DAY:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),SHORTDAY:"Sun Mon Tue Wed Thu Fri Sat".split(" "),AMPMS:["AM","PM"],medium:"MMM d, y h:mm:ss a","short":"M/d/yy h:mm a",fullDate:"EEEE, MMMM d, y",longDate:"MMMM d, y",mediumDate:"MMM d, y",shortDate:"M/d/yy",mediumTime:"h:mm:ss a",shortTime:"h:mm a"},pluralCat:function(b){return 1===b?"one":"other"}}}}function Qb(b){b=b.split("/");for(var a=b.length;a--;)b[a]=
lb(b[a]);return b.join("/")}function zc(b,a,c){b=ua(b,c);a.$$protocol=b.protocol;a.$$host=b.hostname;a.$$port=U(b.port)||ze[b.protocol]||null}function Ac(b,a,c){var d="/"!==b.charAt(0);d&&(b="/"+b);b=ua(b,c);a.$$path=decodeURIComponent(d&&"/"===b.pathname.charAt(0)?b.pathname.substring(1):b.pathname);a.$$search=ec(b.search);a.$$hash=decodeURIComponent(b.hash);a.$$path&&"/"!=a.$$path.charAt(0)&&(a.$$path="/"+a.$$path)}function ra(b,a){if(0===a.indexOf(b))return a.substr(b.length)}function eb(b){var a=
b.indexOf("#");return-1==a?b:b.substr(0,a)}function Rb(b){return b.substr(0,eb(b).lastIndexOf("/")+1)}function Bc(b,a){this.$$html5=!0;a=a||"";var c=Rb(b);zc(b,this,b);this.$$parse=function(a){var e=ra(c,a);if(!v(e))throw Sb("ipthprfx",a,c);Ac(e,this,b);this.$$path||(this.$$path="/");this.$$compose()};this.$$compose=function(){var a=Cb(this.$$search),b=this.$$hash?"#"+lb(this.$$hash):"";this.$$url=Qb(this.$$path)+(a?"?"+a:"")+b;this.$$absUrl=c+this.$$url.substr(1)};this.$$rewrite=function(d){var e;
if((e=ra(b,d))!==t)return d=e,(e=ra(a,e))!==t?c+(ra("/",e)||e):b+d;if((e=ra(c,d))!==t)return c+e;if(c==d+"/")return c}}function Tb(b,a){var c=Rb(b);zc(b,this,b);this.$$parse=function(d){var e=ra(b,d)||ra(c,d),e="#"==e.charAt(0)?ra(a,e):this.$$html5?e:"";if(!v(e))throw Sb("ihshprfx",d,a);Ac(e,this,b);d=this.$$path;var f=/^\/[A-Z]:(\/.*)/;0===e.indexOf(b)&&(e=e.replace(b,""));f.exec(e)||(d=(e=f.exec(d))?e[1]:d);this.$$path=d;this.$$compose()};this.$$compose=function(){var c=Cb(this.$$search),e=this.$$hash?
"#"+lb(this.$$hash):"";this.$$url=Qb(this.$$path)+(c?"?"+c:"")+e;this.$$absUrl=b+(this.$$url?a+this.$$url:"")};this.$$rewrite=function(a){if(eb(b)==eb(a))return a}}function Ub(b,a){this.$$html5=!0;Tb.apply(this,arguments);var c=Rb(b);this.$$rewrite=function(d){var e;if(b==eb(d))return d;if(e=ra(c,d))return b+a+e;if(c===d+"/")return c};this.$$compose=function(){var c=Cb(this.$$search),e=this.$$hash?"#"+lb(this.$$hash):"";this.$$url=Qb(this.$$path)+(c?"?"+c:"")+e;this.$$absUrl=b+a+this.$$url}}function tb(b){return function(){return this[b]}}
function Cc(b,a){return function(c){if(x(c))return this[b];this[b]=a(c);this.$$compose();return this}}function Wd(){var b="",a=!1;this.hashPrefix=function(a){return y(a)?(b=a,this):b};this.html5Mode=function(b){return y(b)?(a=b,this):a};this.$get=["$rootScope","$browser","$sniffer","$rootElement",function(c,d,e,f){function g(a){c.$broadcast("$locationChangeSuccess",k.absUrl(),a)}var k,m,h=d.baseHref(),l=d.url(),n;a?(n=l.substring(0,l.indexOf("/",l.indexOf("//")+2))+(h||"/"),m=e.history?Bc:Ub):(n=
eb(l),m=Tb);k=new m(n,"#"+b);k.$$parse(k.$$rewrite(l));var p=/^\s*(javascript|mailto):/i;f.on("click",function(a){if(!a.ctrlKey&&!a.metaKey&&2!=a.which){for(var e=w(a.target);"a"!==K(e[0].nodeName);)if(e[0]===f[0]||!(e=e.parent())[0])return;var g=e.prop("href");T(g)&&"[object SVGAnimatedString]"===g.toString()&&(g=ua(g.animVal).href);if(!p.test(g)){if(m===Ub){var h=e.attr("href")||e.attr("xlink:href");if(h&&0>h.indexOf("://"))if(g="#"+b,"/"==h[0])g=n+g+h;else if("#"==h[0])g=n+g+(k.path()||"/")+h;
else{var l=k.path().split("/"),h=h.split("/");2!==l.length||l[1]||(l.length=1);for(var q=0;q<h.length;q++)"."!=h[q]&&(".."==h[q]?l.pop():h[q].length&&l.push(h[q]));g=n+g+l.join("/")}}l=k.$$rewrite(g);g&&(!e.attr("target")&&l&&!a.isDefaultPrevented())&&(a.preventDefault(),l!=d.url()&&(k.$$parse(l),c.$apply(),W.angular["ff-684208-preventDefault"]=!0))}}});k.absUrl()!=l&&d.url(k.absUrl(),!0);d.onUrlChange(function(a){k.absUrl()!=a&&(c.$evalAsync(function(){var b=k.absUrl();k.$$parse(a);c.$broadcast("$locationChangeStart",
a,b).defaultPrevented?(k.$$parse(b),d.url(b)):g(b)}),c.$$phase||c.$digest())});var q=0;c.$watch(function(){var a=d.url(),b=k.$$replace;q&&a==k.absUrl()||(q++,c.$evalAsync(function(){c.$broadcast("$locationChangeStart",k.absUrl(),a).defaultPrevented?k.$$parse(a):(d.url(k.absUrl(),b),g(a))}));k.$$replace=!1;return q});return k}]}function Xd(){var b=!0,a=this;this.debugEnabled=function(a){return y(a)?(b=a,this):b};this.$get=["$window",function(c){function d(a){a instanceof Error&&(a.stack?a=a.message&&
-1===a.stack.indexOf(a.message)?"Error: "+a.message+"\n"+a.stack:a.stack:a.sourceURL&&(a=a.message+"\n"+a.sourceURL+":"+a.line));return a}function e(a){var b=c.console||{},e=b[a]||b.log||E;a=!1;try{a=!!e.apply}catch(m){}return a?function(){var a=[];r(arguments,function(b){a.push(d(b))});return e.apply(b,a)}:function(a,b){e(a,null==b?"":b)}}return{log:e("log"),info:e("info"),warn:e("warn"),error:e("error"),debug:function(){var c=e("debug");return function(){b&&c.apply(a,arguments)}}()}}]}function ka(b,
a){if("__defineGetter__"===b||"__defineSetter__"===b||"__lookupGetter__"===b||"__lookupSetter__"===b||"__proto__"===b)throw la("isecfld",a);return b}function va(b,a){if(b){if(b.constructor===b)throw la("isecfn",a);if(b.document&&b.location&&b.alert&&b.setInterval)throw la("isecwindow",a);if(b.children&&(b.nodeName||b.prop&&b.attr&&b.find))throw la("isecdom",a);if(b===Object)throw la("isecobj",a);}return b}function ub(b,a,c,d,e){va(b,d);e=e||{};a=a.split(".");for(var f,g=0;1<a.length;g++){f=ka(a.shift(),
d);var k=va(b[f],d);k||(k={},b[f]=k);b=k;b.then&&e.unwrapPromises&&(wa(d),"$$v"in b||function(a){a.then(function(b){a.$$v=b})}(b),b.$$v===t&&(b.$$v={}),b=b.$$v)}f=ka(a.shift(),d);va(b[f],d);return b[f]=c}function Dc(b,a,c,d,e,f,g){ka(b,f);ka(a,f);ka(c,f);ka(d,f);ka(e,f);return g.unwrapPromises?function(g,m){var h=m&&m.hasOwnProperty(b)?m:g,l;if(null==h)return h;(h=h[b])&&h.then&&(wa(f),"$$v"in h||(l=h,l.$$v=t,l.then(function(a){l.$$v=a})),h=h.$$v);if(!a)return h;if(null==h)return t;(h=h[a])&&h.then&&
(wa(f),"$$v"in h||(l=h,l.$$v=t,l.then(function(a){l.$$v=a})),h=h.$$v);if(!c)return h;if(null==h)return t;(h=h[c])&&h.then&&(wa(f),"$$v"in h||(l=h,l.$$v=t,l.then(function(a){l.$$v=a})),h=h.$$v);if(!d)return h;if(null==h)return t;(h=h[d])&&h.then&&(wa(f),"$$v"in h||(l=h,l.$$v=t,l.then(function(a){l.$$v=a})),h=h.$$v);if(!e)return h;if(null==h)return t;(h=h[e])&&h.then&&(wa(f),"$$v"in h||(l=h,l.$$v=t,l.then(function(a){l.$$v=a})),h=h.$$v);return h}:function(f,g){var h=g&&g.hasOwnProperty(b)?g:f;if(null==
h)return h;h=h[b];if(!a)return h;if(null==h)return t;h=h[a];if(!c)return h;if(null==h)return t;h=h[c];if(!d)return h;if(null==h)return t;h=h[d];return e?null==h?t:h=h[e]:h}}function Ec(b,a,c){if(Vb.hasOwnProperty(b))return Vb[b];var d=b.split("."),e=d.length,f;if(a.csp)f=6>e?Dc(d[0],d[1],d[2],d[3],d[4],c,a):function(b,f){var g=0,k;do k=Dc(d[g++],d[g++],d[g++],d[g++],d[g++],c,a)(b,f),f=t,b=k;while(g<e);return k};else{var g="var p;\n";r(d,function(b,d){ka(b,c);g+="if(s == null) return undefined;\ns="+
(d?"s":'((k&&k.hasOwnProperty("'+b+'"))?k:s)')+'["'+b+'"];\n'+(a.unwrapPromises?'if (s && s.then) {\n pw("'+c.replace(/(["\r\n])/g,"\\$1")+'");\n if (!("$$v" in s)) {\n p=s;\n p.$$v = undefined;\n p.then(function(v) {p.$$v=v;});\n}\n s=s.$$v\n}\n':"")});var g=g+"return s;",k=new Function("s","k","pw",g);k.toString=ba(g);f=a.unwrapPromises?function(a,b){return k(a,b,wa)}:k}"hasOwnProperty"!==b&&(Vb[b]=f);return f}function Yd(){var b={},a={csp:!1,unwrapPromises:!1,logPromiseWarnings:!0};this.unwrapPromises=
function(b){return y(b)?(a.unwrapPromises=!!b,this):a.unwrapPromises};this.logPromiseWarnings=function(b){return y(b)?(a.logPromiseWarnings=b,this):a.logPromiseWarnings};this.$get=["$filter","$sniffer","$log",function(c,d,e){a.csp=d.csp;wa=function(b){a.logPromiseWarnings&&!Fc.hasOwnProperty(b)&&(Fc[b]=!0,e.warn("[$parse] Promise found in the expression `"+b+"`. Automatic unwrapping of promises in Angular expressions is deprecated."))};return function(d){var e;switch(typeof d){case "string":if(b.hasOwnProperty(d))return b[d];
e=new Wb(a);e=(new fb(e,c,a)).parse(d);"hasOwnProperty"!==d&&(b[d]=e);return e;case "function":return d;default:return E}}}]}function $d(){this.$get=["$rootScope","$exceptionHandler",function(b,a){return Ae(function(a){b.$evalAsync(a)},a)}]}function Ae(b,a){function c(a){return a}function d(a){return g(a)}var e=function(){var g=[],h,l;return l={resolve:function(a){if(g){var c=g;g=t;h=f(a);c.length&&b(function(){for(var a,b=0,d=c.length;b<d;b++)a=c[b],h.then(a[0],a[1],a[2])})}},reject:function(a){l.resolve(k(a))},
notify:function(a){if(g){var c=g;g.length&&b(function(){for(var b,d=0,e=c.length;d<e;d++)b=c[d],b[2](a)})}},promise:{then:function(b,f,k){var l=e(),F=function(d){try{l.resolve((P(b)?b:c)(d))}catch(e){l.reject(e),a(e)}},u=function(b){try{l.resolve((P(f)?f:d)(b))}catch(c){l.reject(c),a(c)}},A=function(b){try{l.notify((P(k)?k:c)(b))}catch(d){a(d)}};g?g.push([F,u,A]):h.then(F,u,A);return l.promise},"catch":function(a){return this.then(null,a)},"finally":function(a){function b(a,c){var d=e();c?d.resolve(a):
d.reject(a);return d.promise}function d(e,f){var g=null;try{g=(a||c)()}catch(k){return b(k,!1)}return g&&P(g.then)?g.then(function(){return b(e,f)},function(a){return b(a,!1)}):b(e,f)}return this.then(function(a){return d(a,!0)},function(a){return d(a,!1)})}}}},f=function(a){return a&&P(a.then)?a:{then:function(c){var d=e();b(function(){d.resolve(c(a))});return d.promise}}},g=function(a){var b=e();b.reject(a);return b.promise},k=function(c){return{then:function(f,g){var k=e();b(function(){try{k.resolve((P(g)?
g:d)(c))}catch(b){k.reject(b),a(b)}});return k.promise}}};return{defer:e,reject:g,when:function(k,h,l,n){var p=e(),q,s=function(b){try{return(P(h)?h:c)(b)}catch(d){return a(d),g(d)}},F=function(b){try{return(P(l)?l:d)(b)}catch(c){return a(c),g(c)}},u=function(b){try{return(P(n)?n:c)(b)}catch(d){a(d)}};b(function(){f(k).then(function(a){q||(q=!0,p.resolve(f(a).then(s,F,u)))},function(a){q||(q=!0,p.resolve(F(a)))},function(a){q||p.notify(u(a))})});return p.promise},all:function(a){var b=e(),c=0,d=J(a)?
[]:{};r(a,function(a,e){c++;f(a).then(function(a){d.hasOwnProperty(e)||(d[e]=a,--c||b.resolve(d))},function(a){d.hasOwnProperty(e)||b.reject(a)})});0===c&&b.resolve(d);return b.promise}}}function ge(){this.$get=["$window","$timeout",function(b,a){var c=b.requestAnimationFrame||b.webkitRequestAnimationFrame||b.mozRequestAnimationFrame,d=b.cancelAnimationFrame||b.webkitCancelAnimationFrame||b.mozCancelAnimationFrame||b.webkitCancelRequestAnimationFrame,e=!!c,f=e?function(a){var b=c(a);return function(){d(b)}}:
function(b){var c=a(b,16.66,!1);return function(){a.cancel(c)}};f.supported=e;return f}]}function Zd(){var b=10,a=C("$rootScope"),c=null;this.digestTtl=function(a){arguments.length&&(b=a);return b};this.$get=["$injector","$exceptionHandler","$parse","$browser",function(d,e,f,g){function k(){this.$id=hb();this.$$phase=this.$parent=this.$$watchers=this.$$nextSibling=this.$$prevSibling=this.$$childHead=this.$$childTail=null;this["this"]=this.$root=this;this.$$destroyed=!1;this.$$asyncQueue=[];this.$$postDigestQueue=
[];this.$$listeners={};this.$$listenerCount={};this.$$isolateBindings={}}function m(b){if(p.$$phase)throw a("inprog",p.$$phase);p.$$phase=b}function h(a,b){var c=f(a);Wa(c,b);return c}function l(a,b,c){do a.$$listenerCount[c]-=b,0===a.$$listenerCount[c]&&delete a.$$listenerCount[c];while(a=a.$parent)}function n(){}k.prototype={constructor:k,$new:function(a){a?(a=new k,a.$root=this.$root,a.$$asyncQueue=this.$$asyncQueue,a.$$postDigestQueue=this.$$postDigestQueue):(this.$$childScopeClass||(this.$$childScopeClass=
function(){this.$$watchers=this.$$nextSibling=this.$$childHead=this.$$childTail=null;this.$$listeners={};this.$$listenerCount={};this.$id=hb();this.$$childScopeClass=null},this.$$childScopeClass.prototype=this),a=new this.$$childScopeClass);a["this"]=a;a.$parent=this;a.$$prevSibling=this.$$childTail;this.$$childHead?this.$$childTail=this.$$childTail.$$nextSibling=a:this.$$childHead=this.$$childTail=a;return a},$watch:function(a,b,d){var e=h(a,"watch"),f=this.$$watchers,g={fn:b,last:n,get:e,exp:a,
eq:!!d};c=null;if(!P(b)){var k=h(b||E,"listener");g.fn=function(a,b,c){k(c)}}if("string"==typeof a&&e.constant){var l=g.fn;g.fn=function(a,b,c){l.call(this,a,b,c);Sa(f,g)}}f||(f=this.$$watchers=[]);f.unshift(g);return function(){Sa(f,g);c=null}},$watchCollection:function(a,b){var c=this,d,e,g,k=1<b.length,h=0,l=f(a),m=[],p={},n=!0,r=0;return this.$watch(function(){d=l(c);var a,b,f;if(T(d))if(Pa(d))for(e!==m&&(e=m,r=e.length=0,h++),a=d.length,r!==a&&(h++,e.length=r=a),b=0;b<a;b++)f=e[b]!==e[b]&&d[b]!==
d[b],f||e[b]===d[b]||(h++,e[b]=d[b]);else{e!==p&&(e=p={},r=0,h++);a=0;for(b in d)d.hasOwnProperty(b)&&(a++,e.hasOwnProperty(b)?(f=e[b]!==e[b]&&d[b]!==d[b],f||e[b]===d[b]||(h++,e[b]=d[b])):(r++,e[b]=d[b],h++));if(r>a)for(b in h++,e)e.hasOwnProperty(b)&&!d.hasOwnProperty(b)&&(r--,delete e[b])}else e!==d&&(e=d,h++);return h},function(){n?(n=!1,b(d,d,c)):b(d,g,c);if(k)if(T(d))if(Pa(d)){g=Array(d.length);for(var a=0;a<d.length;a++)g[a]=d[a]}else for(a in g={},d)kb.call(d,a)&&(g[a]=d[a]);else g=d})},$digest:function(){var d,
f,k,h,l=this.$$asyncQueue,r=this.$$postDigestQueue,R,z,t=b,L,O=[],w,B,I;m("$digest");g.$$checkUrlChange();c=null;do{z=!1;for(L=this;l.length;){try{I=l.shift(),I.scope.$eval(I.expression)}catch(H){p.$$phase=null,e(H)}c=null}a:do{if(h=L.$$watchers)for(R=h.length;R--;)try{if(d=h[R])if((f=d.get(L))!==(k=d.last)&&!(d.eq?Aa(f,k):"number"===typeof f&&"number"===typeof k&&isNaN(f)&&isNaN(k)))z=!0,c=d,d.last=d.eq?Ha(f,null):f,d.fn(f,k===n?f:k,L),5>t&&(w=4-t,O[w]||(O[w]=[]),B=P(d.exp)?"fn: "+(d.exp.name||d.exp.toString()):
d.exp,B+="; newVal: "+na(f)+"; oldVal: "+na(k),O[w].push(B));else if(d===c){z=!1;break a}}catch(y){p.$$phase=null,e(y)}if(!(h=L.$$childHead||L!==this&&L.$$nextSibling))for(;L!==this&&!(h=L.$$nextSibling);)L=L.$parent}while(L=h);if((z||l.length)&&!t--)throw p.$$phase=null,a("infdig",b,na(O));}while(z||l.length);for(p.$$phase=null;r.length;)try{r.shift()()}catch(v){e(v)}},$destroy:function(){if(!this.$$destroyed){var a=this.$parent;this.$broadcast("$destroy");this.$$destroyed=!0;this!==p&&(r(this.$$listenerCount,
Bb(null,l,this)),a.$$childHead==this&&(a.$$childHead=this.$$nextSibling),a.$$childTail==this&&(a.$$childTail=this.$$prevSibling),this.$$prevSibling&&(this.$$prevSibling.$$nextSibling=this.$$nextSibling),this.$$nextSibling&&(this.$$nextSibling.$$prevSibling=this.$$prevSibling),this.$parent=this.$$nextSibling=this.$$prevSibling=this.$$childHead=this.$$childTail=this.$root=null,this.$$listeners={},this.$$watchers=this.$$asyncQueue=this.$$postDigestQueue=[],this.$destroy=this.$digest=this.$apply=E,this.$on=
this.$watch=function(){return E})}},$eval:function(a,b){return f(a)(this,b)},$evalAsync:function(a){p.$$phase||p.$$asyncQueue.length||g.defer(function(){p.$$asyncQueue.length&&p.$digest()});this.$$asyncQueue.push({scope:this,expression:a})},$$postDigest:function(a){this.$$postDigestQueue.push(a)},$apply:function(a){try{return m("$apply"),this.$eval(a)}catch(b){e(b)}finally{p.$$phase=null;try{p.$digest()}catch(c){throw e(c),c;}}},$on:function(a,b){var c=this.$$listeners[a];c||(this.$$listeners[a]=
c=[]);c.push(b);var d=this;do d.$$listenerCount[a]||(d.$$listenerCount[a]=0),d.$$listenerCount[a]++;while(d=d.$parent);var e=this;return function(){c[Ra(c,b)]=null;l(e,1,a)}},$emit:function(a,b){var c=[],d,f=this,g=!1,k={name:a,targetScope:f,stopPropagation:function(){g=!0},preventDefault:function(){k.defaultPrevented=!0},defaultPrevented:!1},h=[k].concat(Ba.call(arguments,1)),l,m;do{d=f.$$listeners[a]||c;k.currentScope=f;l=0;for(m=d.length;l<m;l++)if(d[l])try{d[l].apply(null,h)}catch(p){e(p)}else d.splice(l,
1),l--,m--;if(g)break;f=f.$parent}while(f);return k},$broadcast:function(a,b){for(var c=this,d=this,f={name:a,targetScope:this,preventDefault:function(){f.defaultPrevented=!0},defaultPrevented:!1},g=[f].concat(Ba.call(arguments,1)),k,h;c=d;){f.currentScope=c;d=c.$$listeners[a]||[];k=0;for(h=d.length;k<h;k++)if(d[k])try{d[k].apply(null,g)}catch(l){e(l)}else d.splice(k,1),k--,h--;if(!(d=c.$$listenerCount[a]&&c.$$childHead||c!==this&&c.$$nextSibling))for(;c!==this&&!(d=c.$$nextSibling);)c=c.$parent}return f}};
var p=new k;return p}]}function cd(){var b=/^\s*(https?|ftp|mailto|tel|file):/,a=/^\s*((https?|ftp|file):|data:image\/)/;this.aHrefSanitizationWhitelist=function(a){return y(a)?(b=a,this):b};this.imgSrcSanitizationWhitelist=function(b){return y(b)?(a=b,this):a};this.$get=function(){return function(c,d){var e=d?a:b,f;if(!Q||8<=Q)if(f=ua(c).href,""!==f&&!f.match(e))return"unsafe:"+f;return c}}}function Be(b){if("self"===b)return b;if(v(b)){if(-1<b.indexOf("***"))throw xa("iwcard",b);b=b.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g,
"\\$1").replace(/\x08/g,"\\x08").replace("\\*\\*",".*").replace("\\*","[^:/.?&;]*");return RegExp("^"+b+"$")}if(jb(b))return RegExp("^"+b.source+"$");throw xa("imatcher");}function Gc(b){var a=[];y(b)&&r(b,function(b){a.push(Be(b))});return a}function be(){this.SCE_CONTEXTS=ga;var b=["self"],a=[];this.resourceUrlWhitelist=function(a){arguments.length&&(b=Gc(a));return b};this.resourceUrlBlacklist=function(b){arguments.length&&(a=Gc(b));return a};this.$get=["$injector",function(c){function d(a){var b=
function(a){this.$$unwrapTrustedValue=function(){return a}};a&&(b.prototype=new a);b.prototype.valueOf=function(){return this.$$unwrapTrustedValue()};b.prototype.toString=function(){return this.$$unwrapTrustedValue().toString()};return b}var e=function(a){throw xa("unsafe");};c.has("$sanitize")&&(e=c.get("$sanitize"));var f=d(),g={};g[ga.HTML]=d(f);g[ga.CSS]=d(f);g[ga.URL]=d(f);g[ga.JS]=d(f);g[ga.RESOURCE_URL]=d(g[ga.URL]);return{trustAs:function(a,b){var c=g.hasOwnProperty(a)?g[a]:null;if(!c)throw xa("icontext",
a,b);if(null===b||b===t||""===b)return b;if("string"!==typeof b)throw xa("itype",a);return new c(b)},getTrusted:function(c,d){if(null===d||d===t||""===d)return d;var f=g.hasOwnProperty(c)?g[c]:null;if(f&&d instanceof f)return d.$$unwrapTrustedValue();if(c===ga.RESOURCE_URL){var f=ua(d.toString()),l,n,p=!1;l=0;for(n=b.length;l<n;l++)if("self"===b[l]?Pb(f):b[l].exec(f.href)){p=!0;break}if(p)for(l=0,n=a.length;l<n;l++)if("self"===a[l]?Pb(f):a[l].exec(f.href)){p=!1;break}if(p)return d;throw xa("insecurl",
d.toString());}if(c===ga.HTML)return e(d);throw xa("unsafe");},valueOf:function(a){return a instanceof f?a.$$unwrapTrustedValue():a}}}]}function ae(){var b=!0;this.enabled=function(a){arguments.length&&(b=!!a);return b};this.$get=["$parse","$sniffer","$sceDelegate",function(a,c,d){if(b&&c.msie&&8>c.msieDocumentMode)throw xa("iequirks");var e=ha(ga);e.isEnabled=function(){return b};e.trustAs=d.trustAs;e.getTrusted=d.getTrusted;e.valueOf=d.valueOf;b||(e.trustAs=e.getTrusted=function(a,b){return b},
e.valueOf=Qa);e.parseAs=function(b,c){var d=a(c);return d.literal&&d.constant?d:function(a,c){return e.getTrusted(b,d(a,c))}};var f=e.parseAs,g=e.getTrusted,k=e.trustAs;r(ga,function(a,b){var c=K(b);e[Za("parse_as_"+c)]=function(b){return f(a,b)};e[Za("get_trusted_"+c)]=function(b){return g(a,b)};e[Za("trust_as_"+c)]=function(b){return k(a,b)}});return e}]}function ce(){this.$get=["$window","$document",function(b,a){var c={},d=U((/android (\d+)/.exec(K((b.navigator||{}).userAgent))||[])[1]),e=/Boxee/i.test((b.navigator||
{}).userAgent),f=a[0]||{},g=f.documentMode,k,m=/^(Moz|webkit|O|ms)(?=[A-Z])/,h=f.body&&f.body.style,l=!1,n=!1;if(h){for(var p in h)if(l=m.exec(p)){k=l[0];k=k.substr(0,1).toUpperCase()+k.substr(1);break}k||(k="WebkitOpacity"in h&&"webkit");l=!!("transition"in h||k+"Transition"in h);n=!!("animation"in h||k+"Animation"in h);!d||l&&n||(l=v(f.body.style.webkitTransition),n=v(f.body.style.webkitAnimation))}return{history:!(!b.history||!b.history.pushState||4>d||e),hashchange:"onhashchange"in b&&(!g||7<
g),hasEvent:function(a){if("input"==a&&9==Q)return!1;if(x(c[a])){var b=f.createElement("div");c[a]="on"+a in b}return c[a]},csp:Xa(),vendorPrefix:k,transitions:l,animations:n,android:d,msie:Q,msieDocumentMode:g}}]}function ee(){this.$get=["$rootScope","$browser","$q","$exceptionHandler",function(b,a,c,d){function e(e,k,m){var h=c.defer(),l=h.promise,n=y(m)&&!m;k=a.defer(function(){try{h.resolve(e())}catch(a){h.reject(a),d(a)}finally{delete f[l.$$timeoutId]}n||b.$apply()},k);l.$$timeoutId=k;f[k]=h;
return l}var f={};e.cancel=function(b){return b&&b.$$timeoutId in f?(f[b.$$timeoutId].reject("canceled"),delete f[b.$$timeoutId],a.defer.cancel(b.$$timeoutId)):!1};return e}]}function ua(b,a){var c=b;Q&&(Y.setAttribute("href",c),c=Y.href);Y.setAttribute("href",c);return{href:Y.href,protocol:Y.protocol?Y.protocol.replace(/:$/,""):"",host:Y.host,search:Y.search?Y.search.replace(/^\?/,""):"",hash:Y.hash?Y.hash.replace(/^#/,""):"",hostname:Y.hostname,port:Y.port,pathname:"/"===Y.pathname.charAt(0)?Y.pathname:
"/"+Y.pathname}}function Pb(b){b=v(b)?ua(b):b;return b.protocol===Hc.protocol&&b.host===Hc.host}function fe(){this.$get=ba(W)}function mc(b){function a(d,e){if(T(d)){var f={};r(d,function(b,c){f[c]=a(c,b)});return f}return b.factory(d+c,e)}var c="Filter";this.register=a;this.$get=["$injector",function(a){return function(b){return a.get(b+c)}}];a("currency",Ic);a("date",Jc);a("filter",Ce);a("json",De);a("limitTo",Ee);a("lowercase",Fe);a("number",Kc);a("orderBy",Lc);a("uppercase",Ge)}function Ce(){return function(b,
a,c){if(!J(b))return b;var d=typeof c,e=[];e.check=function(a){for(var b=0;b<e.length;b++)if(!e[b](a))return!1;return!0};"function"!==d&&(c="boolean"===d&&c?function(a,b){return Va.equals(a,b)}:function(a,b){if(a&&b&&"object"===typeof a&&"object"===typeof b){for(var d in a)if("$"!==d.charAt(0)&&kb.call(a,d)&&c(a[d],b[d]))return!0;return!1}b=(""+b).toLowerCase();return-1<(""+a).toLowerCase().indexOf(b)});var f=function(a,b){if("string"==typeof b&&"!"===b.charAt(0))return!f(a,b.substr(1));switch(typeof a){case "boolean":case "number":case "string":return c(a,
b);case "object":switch(typeof b){case "object":return c(a,b);default:for(var d in a)if("$"!==d.charAt(0)&&f(a[d],b))return!0}return!1;case "array":for(d=0;d<a.length;d++)if(f(a[d],b))return!0;return!1;default:return!1}};switch(typeof a){case "boolean":case "number":case "string":a={$:a};case "object":for(var g in a)(function(b){"undefined"!==typeof a[b]&&e.push(function(c){return f("$"==b?c:c&&c[b],a[b])})})(g);break;case "function":e.push(a);break;default:return b}d=[];for(g=0;g<b.length;g++){var k=
b[g];e.check(k)&&d.push(k)}return d}}function Ic(b){var a=b.NUMBER_FORMATS;return function(b,d){x(d)&&(d=a.CURRENCY_SYM);return Mc(b,a.PATTERNS[1],a.GROUP_SEP,a.DECIMAL_SEP,2).replace(/\u00A4/g,d)}}function Kc(b){var a=b.NUMBER_FORMATS;return function(b,d){return Mc(b,a.PATTERNS[0],a.GROUP_SEP,a.DECIMAL_SEP,d)}}function Mc(b,a,c,d,e){if(null==b||!isFinite(b)||T(b))return"";var f=0>b;b=Math.abs(b);var g=b+"",k="",m=[],h=!1;if(-1!==g.indexOf("e")){var l=g.match(/([\d\.]+)e(-?)(\d+)/);l&&"-"==l[2]&&
l[3]>e+1?(g="0",b=0):(k=g,h=!0)}if(h)0<e&&(-1<b&&1>b)&&(k=b.toFixed(e));else{g=(g.split(Nc)[1]||"").length;x(e)&&(e=Math.min(Math.max(a.minFrac,g),a.maxFrac));b=+(Math.round(+(b.toString()+"e"+e)).toString()+"e"+-e);0===b&&(f=!1);b=(""+b).split(Nc);g=b[0];b=b[1]||"";var l=0,n=a.lgSize,p=a.gSize;if(g.length>=n+p)for(l=g.length-n,h=0;h<l;h++)0===(l-h)%p&&0!==h&&(k+=c),k+=g.charAt(h);for(h=l;h<g.length;h++)0===(g.length-h)%n&&0!==h&&(k+=c),k+=g.charAt(h);for(;b.length<e;)b+="0";e&&"0"!==e&&(k+=d+b.substr(0,
e))}m.push(f?a.negPre:a.posPre);m.push(k);m.push(f?a.negSuf:a.posSuf);return m.join("")}function Xb(b,a,c){var d="";0>b&&(d="-",b=-b);for(b=""+b;b.length<a;)b="0"+b;c&&(b=b.substr(b.length-a));return d+b}function $(b,a,c,d){c=c||0;return function(e){e=e["get"+b]();if(0<c||e>-c)e+=c;0===e&&-12==c&&(e=12);return Xb(e,a,d)}}function vb(b,a){return function(c,d){var e=c["get"+b](),f=Ia(a?"SHORT"+b:b);return d[f][e]}}function Jc(b){function a(a){var b;if(b=a.match(c)){a=new Date(0);var f=0,g=0,k=b[8]?
a.setUTCFullYear:a.setFullYear,m=b[8]?a.setUTCHours:a.setHours;b[9]&&(f=U(b[9]+b[10]),g=U(b[9]+b[11]));k.call(a,U(b[1]),U(b[2])-1,U(b[3]));f=U(b[4]||0)-f;g=U(b[5]||0)-g;k=U(b[6]||0);b=Math.round(1E3*parseFloat("0."+(b[7]||0)));m.call(a,f,g,k,b)}return a}var c=/^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;return function(c,e){var f="",g=[],k,m;e=e||"mediumDate";e=b.DATETIME_FORMATS[e]||e;v(c)&&(c=He.test(c)?U(c):a(c));ib(c)&&(c=new Date(c));
if(!ta(c))return c;for(;e;)(m=Ie.exec(e))?(g=g.concat(Ba.call(m,1)),e=g.pop()):(g.push(e),e=null);r(g,function(a){k=Je[a];f+=k?k(c,b.DATETIME_FORMATS):a.replace(/(^'|'$)/g,"").replace(/''/g,"'")});return f}}function De(){return function(b){return na(b,!0)}}function Ee(){return function(b,a){if(!J(b)&&!v(b))return b;a=Infinity===Math.abs(Number(a))?Number(a):U(a);if(v(b))return a?0<=a?b.slice(0,a):b.slice(a,b.length):"";var c=[],d,e;a>b.length?a=b.length:a<-b.length&&(a=-b.length);0<a?(d=0,e=a):(d=
b.length+a,e=b.length);for(;d<e;d++)c.push(b[d]);return c}}function Lc(b){return function(a,c,d){function e(a,b){return Ua(b)?function(b,c){return a(c,b)}:a}function f(a,b){var c=typeof a,d=typeof b;return c==d?(ta(a)&&ta(b)&&(a=a.valueOf(),b=b.valueOf()),"string"==c&&(a=a.toLowerCase(),b=b.toLowerCase()),a===b?0:a<b?-1:1):c<d?-1:1}if(!Pa(a)||!c)return a;c=J(c)?c:[c];c=Vc(c,function(a){var c=!1,d=a||Qa;if(v(a)){if("+"==a.charAt(0)||"-"==a.charAt(0))c="-"==a.charAt(0),a=a.substring(1);d=b(a);if(d.constant){var g=
d();return e(function(a,b){return f(a[g],b[g])},c)}}return e(function(a,b){return f(d(a),d(b))},c)});for(var g=[],k=0;k<a.length;k++)g.push(a[k]);return g.sort(e(function(a,b){for(var d=0;d<c.length;d++){var e=c[d](a,b);if(0!==e)return e}return 0},d))}}function ya(b){P(b)&&(b={link:b});b.restrict=b.restrict||"AC";return ba(b)}function Oc(b,a,c,d){function e(a,c){c=c?"-"+mb(c,"-"):"";d.setClass(b,(a?wb:xb)+c,(a?xb:wb)+c)}var f=this,g=b.parent().controller("form")||yb,k=0,m=f.$error={},h=[];f.$name=
a.name||a.ngForm;f.$dirty=!1;f.$pristine=!0;f.$valid=!0;f.$invalid=!1;g.$addControl(f);b.addClass(Oa);e(!0);f.$addControl=function(a){Da(a.$name,"input");h.push(a);a.$name&&(f[a.$name]=a)};f.$removeControl=function(a){a.$name&&f[a.$name]===a&&delete f[a.$name];r(m,function(b,c){f.$setValidity(c,!0,a)});Sa(h,a)};f.$setValidity=function(a,b,c){var d=m[a];if(b)d&&(Sa(d,c),d.length||(k--,k||(e(b),f.$valid=!0,f.$invalid=!1),m[a]=!1,e(!0,a),g.$setValidity(a,!0,f)));else{k||e(b);if(d){if(-1!=Ra(d,c))return}else m[a]=
d=[],k++,e(!1,a),g.$setValidity(a,!1,f);d.push(c);f.$valid=!1;f.$invalid=!0}};f.$setDirty=function(){d.removeClass(b,Oa);d.addClass(b,zb);f.$dirty=!0;f.$pristine=!1;g.$setDirty()};f.$setPristine=function(){d.removeClass(b,zb);d.addClass(b,Oa);f.$dirty=!1;f.$pristine=!0;r(h,function(a){a.$setPristine()})}}function sa(b,a,c,d){b.$setValidity(a,c);return c?d:t}function Pc(b,a){var c,d;if(a)for(c=0;c<a.length;++c)if(d=a[c],b[d])return!0;return!1}function Ke(b,a,c,d,e){T(e)&&(b.$$hasNativeValidators=!0,
b.$parsers.push(function(f){if(b.$error[a]||Pc(e,d)||!Pc(e,c))return f;b.$setValidity(a,!1)}))}function Ab(b,a,c,d,e,f){var g=a.prop(Le),k=a[0].placeholder,m={},h=K(a[0].type);d.$$validityState=g;if(!e.android){var l=!1;a.on("compositionstart",function(a){l=!0});a.on("compositionend",function(){l=!1;n()})}var n=function(e){if(!l){var f=a.val();if(Q&&"input"===(e||m).type&&a[0].placeholder!==k)k=a[0].placeholder;else if("password"!==h&&Ua(c.ngTrim||"T")&&(f=aa(f)),e=g&&d.$$hasNativeValidators,d.$viewValue!==
f||""===f&&e)b.$root.$$phase?d.$setViewValue(f):b.$apply(function(){d.$setViewValue(f)})}};if(e.hasEvent("input"))a.on("input",n);else{var p,q=function(){p||(p=f.defer(function(){n();p=null}))};a.on("keydown",function(a){a=a.keyCode;91===a||(15<a&&19>a||37<=a&&40>=a)||q()});if(e.hasEvent("paste"))a.on("paste cut",q)}a.on("change",n);d.$render=function(){a.val(d.$isEmpty(d.$viewValue)?"":d.$viewValue)};var s=c.ngPattern;s&&((e=s.match(/^\/(.*)\/([gim]*)$/))?(s=RegExp(e[1],e[2]),e=function(a){return sa(d,
"pattern",d.$isEmpty(a)||s.test(a),a)}):e=function(c){var e=b.$eval(s);if(!e||!e.test)throw C("ngPattern")("noregexp",s,e,ia(a));return sa(d,"pattern",d.$isEmpty(c)||e.test(c),c)},d.$formatters.push(e),d.$parsers.push(e));if(c.ngMinlength){var r=U(c.ngMinlength);e=function(a){return sa(d,"minlength",d.$isEmpty(a)||a.length>=r,a)};d.$parsers.push(e);d.$formatters.push(e)}if(c.ngMaxlength){var u=U(c.ngMaxlength);e=function(a){return sa(d,"maxlength",d.$isEmpty(a)||a.length<=u,a)};d.$parsers.push(e);
d.$formatters.push(e)}}function Yb(b,a){b="ngClass"+b;return["$animate",function(c){function d(a,b){var c=[],d=0;a:for(;d<a.length;d++){for(var e=a[d],l=0;l<b.length;l++)if(e==b[l])continue a;c.push(e)}return c}function e(a){if(!J(a)){if(v(a))return a.split(" ");if(T(a)){var b=[];r(a,function(a,c){a&&(b=b.concat(c.split(" ")))});return b}}return a}return{restrict:"AC",link:function(f,g,k){function m(a,b){var c=g.data("$classCounts")||{},d=[];r(a,function(a){if(0<b||c[a])c[a]=(c[a]||0)+b,c[a]===+(0<
b)&&d.push(a)});g.data("$classCounts",c);return d.join(" ")}function h(b){if(!0===a||f.$index%2===a){var h=e(b||[]);if(!l){var q=m(h,1);k.$addClass(q)}else if(!Aa(b,l)){var s=e(l),q=d(h,s),h=d(s,h),h=m(h,-1),q=m(q,1);0===q.length?c.removeClass(g,h):0===h.length?c.addClass(g,q):c.setClass(g,q,h)}}l=ha(b)}var l;f.$watch(k[b],h,!0);k.$observe("class",function(a){h(f.$eval(k[b]))});"ngClass"!==b&&f.$watch("$index",function(c,d){var g=c&1;if(g!==(d&1)){var h=e(f.$eval(k[b]));g===a?(g=m(h,1),k.$addClass(g)):
(g=m(h,-1),k.$removeClass(g))}})}}}]}var Le="validity",K=function(b){return v(b)?b.toLowerCase():b},kb=Object.prototype.hasOwnProperty,Ia=function(b){return v(b)?b.toUpperCase():b},Q,w,Ea,Ba=[].slice,Me=[].push,za=Object.prototype.toString,Ta=C("ng"),Va=W.angular||(W.angular={}),Ya,Ma,ma=["0","0","0"];Q=U((/msie (\d+)/.exec(K(navigator.userAgent))||[])[1]);isNaN(Q)&&(Q=U((/trident\/.*; rv:(\d+)/.exec(K(navigator.userAgent))||[])[1]));E.$inject=[];Qa.$inject=[];var J=function(){return P(Array.isArray)?
Array.isArray:function(b){return"[object Array]"===za.call(b)}}(),aa=function(){return String.prototype.trim?function(b){return v(b)?b.trim():b}:function(b){return v(b)?b.replace(/^\s\s*/,"").replace(/\s\s*$/,""):b}}();Ma=9>Q?function(b){b=b.nodeName?b:b[0];return b.scopeName&&"HTML"!=b.scopeName?Ia(b.scopeName+":"+b.nodeName):b.nodeName}:function(b){return b.nodeName?b.nodeName:b[0].nodeName};var Xa=function(){if(y(Xa.isActive_))return Xa.isActive_;var b=!(!X.querySelector("[ng-csp]")&&!X.querySelector("[data-ng-csp]"));
if(!b)try{new Function("")}catch(a){b=!0}return Xa.isActive_=b},Yc=/[A-Z]/g,ad={full:"1.2.26",major:1,minor:2,dot:26,codeName:"captivating-disinterest"};S.expando="ng339";var ab=S.cache={},ne=1,sb=W.document.addEventListener?function(b,a,c){b.addEventListener(a,c,!1)}:function(b,a,c){b.attachEvent("on"+a,c)},$a=W.document.removeEventListener?function(b,a,c){b.removeEventListener(a,c,!1)}:function(b,a,c){b.detachEvent("on"+a,c)};S._data=function(b){return this.cache[b[this.expando]]||{}};var ie=/([\:\-\_]+(.))/g,
je=/^moz([A-Z])/,Hb=C("jqLite"),ke=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,Ib=/<|&#?\w+;/,le=/<([\w:]+)/,me=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,ea={option:[1,'<select multiple="multiple">',"</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ea.optgroup=ea.option;ea.tbody=ea.tfoot=ea.colgroup=ea.caption=ea.thead;ea.th=
ea.td;var La=S.prototype={ready:function(b){function a(){c||(c=!0,b())}var c=!1;"complete"===X.readyState?setTimeout(a):(this.on("DOMContentLoaded",a),S(W).on("load",a))},toString:function(){var b=[];r(this,function(a){b.push(""+a)});return"["+b.join(", ")+"]"},eq:function(b){return 0<=b?w(this[b]):w(this[this.length+b])},length:0,push:Me,sort:[].sort,splice:[].splice},qb={};r("multiple selected checked disabled readOnly required open".split(" "),function(b){qb[K(b)]=b});var rc={};r("input select option textarea button form details".split(" "),
function(b){rc[Ia(b)]=!0});r({data:Mb,removeData:Lb},function(b,a){S[a]=b});r({data:Mb,inheritedData:pb,scope:function(b){return w.data(b,"$scope")||pb(b.parentNode||b,["$isolateScope","$scope"])},isolateScope:function(b){return w.data(b,"$isolateScope")||w.data(b,"$isolateScopeNoTemplate")},controller:oc,injector:function(b){return pb(b,"$injector")},removeAttr:function(b,a){b.removeAttribute(a)},hasClass:Nb,css:function(b,a,c){a=Za(a);if(y(c))b.style[a]=c;else{var d;8>=Q&&(d=b.currentStyle&&b.currentStyle[a],
""===d&&(d="auto"));d=d||b.style[a];8>=Q&&(d=""===d?t:d);return d}},attr:function(b,a,c){var d=K(a);if(qb[d])if(y(c))c?(b[a]=!0,b.setAttribute(a,d)):(b[a]=!1,b.removeAttribute(d));else return b[a]||(b.attributes.getNamedItem(a)||E).specified?d:t;else if(y(c))b.setAttribute(a,c);else if(b.getAttribute)return b=b.getAttribute(a,2),null===b?t:b},prop:function(b,a,c){if(y(c))b[a]=c;else return b[a]},text:function(){function b(b,d){var e=a[b.nodeType];if(x(d))return e?b[e]:"";b[e]=d}var a=[];9>Q?(a[1]=
"innerText",a[3]="nodeValue"):a[1]=a[3]="textContent";b.$dv="";return b}(),val:function(b,a){if(x(a)){if("SELECT"===Ma(b)&&b.multiple){var c=[];r(b.options,function(a){a.selected&&c.push(a.value||a.text)});return 0===c.length?null:c}return b.value}b.value=a},html:function(b,a){if(x(a))return b.innerHTML;for(var c=0,d=b.childNodes;c<d.length;c++)Ja(d[c]);b.innerHTML=a},empty:pc},function(b,a){S.prototype[a]=function(a,d){var e,f,g=this.length;if(b!==pc&&(2==b.length&&b!==Nb&&b!==oc?a:d)===t){if(T(a)){for(e=
0;e<g;e++)if(b===Mb)b(this[e],a);else for(f in a)b(this[e],f,a[f]);return this}e=b.$dv;g=e===t?Math.min(g,1):g;for(f=0;f<g;f++){var k=b(this[f],a,d);e=e?e+k:k}return e}for(e=0;e<g;e++)b(this[e],a,d);return this}});r({removeData:Lb,dealoc:Ja,on:function a(c,d,e,f){if(y(f))throw Hb("onargs");var g=oa(c,"events"),k=oa(c,"handle");g||oa(c,"events",g={});k||oa(c,"handle",k=oe(c,g));r(d.split(" "),function(d){var f=g[d];if(!f){if("mouseenter"==d||"mouseleave"==d){var l=X.body.contains||X.body.compareDocumentPosition?
function(a,c){var d=9===a.nodeType?a.documentElement:a,e=c&&c.parentNode;return a===e||!!(e&&1===e.nodeType&&(d.contains?d.contains(e):a.compareDocumentPosition&&a.compareDocumentPosition(e)&16))}:function(a,c){if(c)for(;c=c.parentNode;)if(c===a)return!0;return!1};g[d]=[];a(c,{mouseleave:"mouseout",mouseenter:"mouseover"}[d],function(a){var c=a.relatedTarget;c&&(c===this||l(this,c))||k(a,d)})}else sb(c,d,k),g[d]=[];f=g[d]}f.push(e)})},off:nc,one:function(a,c,d){a=w(a);a.on(c,function f(){a.off(c,
d);a.off(c,f)});a.on(c,d)},replaceWith:function(a,c){var d,e=a.parentNode;Ja(a);r(new S(c),function(c){d?e.insertBefore(c,d.nextSibling):e.replaceChild(c,a);d=c})},children:function(a){var c=[];r(a.childNodes,function(a){1===a.nodeType&&c.push(a)});return c},contents:function(a){return a.contentDocument||a.childNodes||[]},append:function(a,c){r(new S(c),function(c){1!==a.nodeType&&11!==a.nodeType||a.appendChild(c)})},prepend:function(a,c){if(1===a.nodeType){var d=a.firstChild;r(new S(c),function(c){a.insertBefore(c,
d)})}},wrap:function(a,c){c=w(c)[0];var d=a.parentNode;d&&d.replaceChild(c,a);c.appendChild(a)},remove:function(a){Ja(a);var c=a.parentNode;c&&c.removeChild(a)},after:function(a,c){var d=a,e=a.parentNode;r(new S(c),function(a){e.insertBefore(a,d.nextSibling);d=a})},addClass:ob,removeClass:nb,toggleClass:function(a,c,d){c&&r(c.split(" "),function(c){var f=d;x(f)&&(f=!Nb(a,c));(f?ob:nb)(a,c)})},parent:function(a){return(a=a.parentNode)&&11!==a.nodeType?a:null},next:function(a){if(a.nextElementSibling)return a.nextElementSibling;
for(a=a.nextSibling;null!=a&&1!==a.nodeType;)a=a.nextSibling;return a},find:function(a,c){return a.getElementsByTagName?a.getElementsByTagName(c):[]},clone:Kb,triggerHandler:function(a,c,d){var e,f;e=c.type||c;var g=(oa(a,"events")||{})[e];g&&(e={preventDefault:function(){this.defaultPrevented=!0},isDefaultPrevented:function(){return!0===this.defaultPrevented},stopPropagation:E,type:e,target:a},c.type&&(e=D(e,c)),c=ha(g),f=d?[e].concat(d):[e],r(c,function(c){c.apply(a,f)}))}},function(a,c){S.prototype[c]=
function(c,e,f){for(var g,k=0;k<this.length;k++)x(g)?(g=a(this[k],c,e,f),y(g)&&(g=w(g))):Jb(g,a(this[k],c,e,f));return y(g)?g:this};S.prototype.bind=S.prototype.on;S.prototype.unbind=S.prototype.off});bb.prototype={put:function(a,c){this[Ka(a,this.nextUid)]=c},get:function(a){return this[Ka(a,this.nextUid)]},remove:function(a){var c=this[a=Ka(a,this.nextUid)];delete this[a];return c}};var qe=/^function\s*[^\(]*\(\s*([^\)]*)\)/m,re=/,/,se=/^\s*(_?)(\S+?)\1\s*$/,pe=/((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg,
cb=C("$injector"),Ne=C("$animate"),Md=["$provide",function(a){this.$$selectors={};this.register=function(c,d){var e=c+"-animation";if(c&&"."!=c.charAt(0))throw Ne("notcsel",c);this.$$selectors[c.substr(1)]=e;a.factory(e,d)};this.classNameFilter=function(a){1===arguments.length&&(this.$$classNameFilter=a instanceof RegExp?a:null);return this.$$classNameFilter};this.$get=["$timeout","$$asyncCallback",function(a,d){return{enter:function(a,c,g,k){g?g.after(a):(c&&c[0]||(c=g.parent()),c.append(a));k&&
d(k)},leave:function(a,c){a.remove();c&&d(c)},move:function(a,c,d,k){this.enter(a,c,d,k)},addClass:function(a,c,g){c=v(c)?c:J(c)?c.join(" "):"";r(a,function(a){ob(a,c)});g&&d(g)},removeClass:function(a,c,g){c=v(c)?c:J(c)?c.join(" "):"";r(a,function(a){nb(a,c)});g&&d(g)},setClass:function(a,c,g,k){r(a,function(a){ob(a,c);nb(a,g)});k&&d(k)},enabled:E}}]}],ja=C("$compile");ic.$inject=["$provide","$$sanitizeUriProvider"];var we=/^(x[\:\-_]|data[\:\-_])/i,yc=C("$interpolate"),Oe=/^([^\?#]*)(\?([^#]*))?(#(.*))?$/,
ze={http:80,https:443,ftp:21},Sb=C("$location");Ub.prototype=Tb.prototype=Bc.prototype={$$html5:!1,$$replace:!1,absUrl:tb("$$absUrl"),url:function(a){if(x(a))return this.$$url;a=Oe.exec(a);a[1]&&this.path(decodeURIComponent(a[1]));(a[2]||a[1])&&this.search(a[3]||"");this.hash(a[5]||"");return this},protocol:tb("$$protocol"),host:tb("$$host"),port:tb("$$port"),path:Cc("$$path",function(a){a=a?a.toString():"";return"/"==a.charAt(0)?a:"/"+a}),search:function(a,c){switch(arguments.length){case 0:return this.$$search;
case 1:if(v(a)||ib(a))a=a.toString(),this.$$search=ec(a);else if(T(a))r(a,function(c,e){null==c&&delete a[e]}),this.$$search=a;else throw Sb("isrcharg");break;default:x(c)||null===c?delete this.$$search[a]:this.$$search[a]=c}this.$$compose();return this},hash:Cc("$$hash",function(a){return a?a.toString():""}),replace:function(){this.$$replace=!0;return this}};var la=C("$parse"),Fc={},wa,Pe=Function.prototype.call,Qe=Function.prototype.apply,Qc=Function.prototype.bind,gb={"null":function(){return null},
"true":function(){return!0},"false":function(){return!1},undefined:E,"+":function(a,c,d,e){d=d(a,c);e=e(a,c);return y(d)?y(e)?d+e:d:y(e)?e:t},"-":function(a,c,d,e){d=d(a,c);e=e(a,c);return(y(d)?d:0)-(y(e)?e:0)},"*":function(a,c,d,e){return d(a,c)*e(a,c)},"/":function(a,c,d,e){return d(a,c)/e(a,c)},"%":function(a,c,d,e){return d(a,c)%e(a,c)},"^":function(a,c,d,e){return d(a,c)^e(a,c)},"=":E,"===":function(a,c,d,e){return d(a,c)===e(a,c)},"!==":function(a,c,d,e){return d(a,c)!==e(a,c)},"==":function(a,
c,d,e){return d(a,c)==e(a,c)},"!=":function(a,c,d,e){return d(a,c)!=e(a,c)},"<":function(a,c,d,e){return d(a,c)<e(a,c)},">":function(a,c,d,e){return d(a,c)>e(a,c)},"<=":function(a,c,d,e){return d(a,c)<=e(a,c)},">=":function(a,c,d,e){return d(a,c)>=e(a,c)},"&&":function(a,c,d,e){return d(a,c)&&e(a,c)},"||":function(a,c,d,e){return d(a,c)||e(a,c)},"&":function(a,c,d,e){return d(a,c)&e(a,c)},"|":function(a,c,d,e){return e(a,c)(a,c,d(a,c))},"!":function(a,c,d){return!d(a,c)}},Re={n:"\n",f:"\f",r:"\r",
t:"\t",v:"\v","'":"'",'"':'"'},Wb=function(a){this.options=a};Wb.prototype={constructor:Wb,lex:function(a){this.text=a;this.index=0;this.ch=t;this.lastCh=":";for(this.tokens=[];this.index<this.text.length;){this.ch=this.text.charAt(this.index);if(this.is("\"'"))this.readString(this.ch);else if(this.isNumber(this.ch)||this.is(".")&&this.isNumber(this.peek()))this.readNumber();else if(this.isIdent(this.ch))this.readIdent();else if(this.is("(){}[].,;:?"))this.tokens.push({index:this.index,text:this.ch}),
this.index++;else if(this.isWhitespace(this.ch)){this.index++;continue}else{a=this.ch+this.peek();var c=a+this.peek(2),d=gb[this.ch],e=gb[a],f=gb[c];f?(this.tokens.push({index:this.index,text:c,fn:f}),this.index+=3):e?(this.tokens.push({index:this.index,text:a,fn:e}),this.index+=2):d?(this.tokens.push({index:this.index,text:this.ch,fn:d}),this.index+=1):this.throwError("Unexpected next character ",this.index,this.index+1)}this.lastCh=this.ch}return this.tokens},is:function(a){return-1!==a.indexOf(this.ch)},
was:function(a){return-1!==a.indexOf(this.lastCh)},peek:function(a){a=a||1;return this.index+a<this.text.length?this.text.charAt(this.index+a):!1},isNumber:function(a){return"0"<=a&&"9">=a},isWhitespace:function(a){return" "===a||"\r"===a||"\t"===a||"\n"===a||"\v"===a||"\u00a0"===a},isIdent:function(a){return"a"<=a&&"z">=a||"A"<=a&&"Z">=a||"_"===a||"$"===a},isExpOperator:function(a){return"-"===a||"+"===a||this.isNumber(a)},throwError:function(a,c,d){d=d||this.index;c=y(c)?"s "+c+"-"+this.index+" ["+
this.text.substring(c,d)+"]":" "+d;throw la("lexerr",a,c,this.text);},readNumber:function(){for(var a="",c=this.index;this.index<this.text.length;){var d=K(this.text.charAt(this.index));if("."==d||this.isNumber(d))a+=d;else{var e=this.peek();if("e"==d&&this.isExpOperator(e))a+=d;else if(this.isExpOperator(d)&&e&&this.isNumber(e)&&"e"==a.charAt(a.length-1))a+=d;else if(!this.isExpOperator(d)||e&&this.isNumber(e)||"e"!=a.charAt(a.length-1))break;else this.throwError("Invalid exponent")}this.index++}a*=
1;this.tokens.push({index:c,text:a,literal:!0,constant:!0,fn:function(){return a}})},readIdent:function(){for(var a=this,c="",d=this.index,e,f,g,k;this.index<this.text.length;){k=this.text.charAt(this.index);if("."===k||this.isIdent(k)||this.isNumber(k))"."===k&&(e=this.index),c+=k;else break;this.index++}if(e)for(f=this.index;f<this.text.length;){k=this.text.charAt(f);if("("===k){g=c.substr(e-d+1);c=c.substr(0,e-d);this.index=f;break}if(this.isWhitespace(k))f++;else break}d={index:d,text:c};if(gb.hasOwnProperty(c))d.fn=
gb[c],d.literal=!0,d.constant=!0;else{var m=Ec(c,this.options,this.text);d.fn=D(function(a,c){return m(a,c)},{assign:function(d,e){return ub(d,c,e,a.text,a.options)}})}this.tokens.push(d);g&&(this.tokens.push({index:e,text:"."}),this.tokens.push({index:e+1,text:g}))},readString:function(a){var c=this.index;this.index++;for(var d="",e=a,f=!1;this.index<this.text.length;){var g=this.text.charAt(this.index),e=e+g;if(f)"u"===g?(f=this.text.substring(this.index+1,this.index+5),f.match(/[\da-f]{4}/i)||
this.throwError("Invalid unicode escape [\\u"+f+"]"),this.index+=4,d+=String.fromCharCode(parseInt(f,16))):d+=Re[g]||g,f=!1;else if("\\"===g)f=!0;else{if(g===a){this.index++;this.tokens.push({index:c,text:e,string:d,literal:!0,constant:!0,fn:function(){return d}});return}d+=g}this.index++}this.throwError("Unterminated quote",c)}};var fb=function(a,c,d){this.lexer=a;this.$filter=c;this.options=d};fb.ZERO=D(function(){return 0},{constant:!0});fb.prototype={constructor:fb,parse:function(a){this.text=
a;this.tokens=this.lexer.lex(a);a=this.statements();0!==this.tokens.length&&this.throwError("is an unexpected token",this.tokens[0]);a.literal=!!a.literal;a.constant=!!a.constant;return a},primary:function(){var a;if(this.expect("("))a=this.filterChain(),this.consume(")");else if(this.expect("["))a=this.arrayDeclaration();else if(this.expect("{"))a=this.object();else{var c=this.expect();(a=c.fn)||this.throwError("not a primary expression",c);a.literal=!!c.literal;a.constant=!!c.constant}for(var d;c=
this.expect("(","[",".");)"("===c.text?(a=this.functionCall(a,d),d=null):"["===c.text?(d=a,a=this.objectIndex(a)):"."===c.text?(d=a,a=this.fieldAccess(a)):this.throwError("IMPOSSIBLE");return a},throwError:function(a,c){throw la("syntax",c.text,a,c.index+1,this.text,this.text.substring(c.index));},peekToken:function(){if(0===this.tokens.length)throw la("ueoe",this.text);return this.tokens[0]},peek:function(a,c,d,e){if(0<this.tokens.length){var f=this.tokens[0],g=f.text;if(g===a||g===c||g===d||g===
e||!(a||c||d||e))return f}return!1},expect:function(a,c,d,e){return(a=this.peek(a,c,d,e))?(this.tokens.shift(),a):!1},consume:function(a){this.expect(a)||this.throwError("is unexpected, expecting ["+a+"]",this.peek())},unaryFn:function(a,c){return D(function(d,e){return a(d,e,c)},{constant:c.constant})},ternaryFn:function(a,c,d){return D(function(e,f){return a(e,f)?c(e,f):d(e,f)},{constant:a.constant&&c.constant&&d.constant})},binaryFn:function(a,c,d){return D(function(e,f){return c(e,f,a,d)},{constant:a.constant&&
d.constant})},statements:function(){for(var a=[];;)if(0<this.tokens.length&&!this.peek("}",")",";","]")&&a.push(this.filterChain()),!this.expect(";"))return 1===a.length?a[0]:function(c,d){for(var e,f=0;f<a.length;f++){var g=a[f];g&&(e=g(c,d))}return e}},filterChain:function(){for(var a=this.expression(),c;;)if(c=this.expect("|"))a=this.binaryFn(a,c.fn,this.filter());else return a},filter:function(){for(var a=this.expect(),c=this.$filter(a.text),d=[];;)if(a=this.expect(":"))d.push(this.expression());
else{var e=function(a,e,k){k=[k];for(var m=0;m<d.length;m++)k.push(d[m](a,e));return c.apply(a,k)};return function(){return e}}},expression:function(){return this.assignment()},assignment:function(){var a=this.ternary(),c,d;return(d=this.expect("="))?(a.assign||this.throwError("implies assignment but ["+this.text.substring(0,d.index)+"] can not be assigned to",d),c=this.ternary(),function(d,f){return a.assign(d,c(d,f),f)}):a},ternary:function(){var a=this.logicalOR(),c,d;if(this.expect("?")){c=this.assignment();
if(d=this.expect(":"))return this.ternaryFn(a,c,this.assignment());this.throwError("expected :",d)}else return a},logicalOR:function(){for(var a=this.logicalAND(),c;;)if(c=this.expect("||"))a=this.binaryFn(a,c.fn,this.logicalAND());else return a},logicalAND:function(){var a=this.equality(),c;if(c=this.expect("&&"))a=this.binaryFn(a,c.fn,this.logicalAND());return a},equality:function(){var a=this.relational(),c;if(c=this.expect("==","!=","===","!=="))a=this.binaryFn(a,c.fn,this.equality());return a},
relational:function(){var a=this.additive(),c;if(c=this.expect("<",">","<=",">="))a=this.binaryFn(a,c.fn,this.relational());return a},additive:function(){for(var a=this.multiplicative(),c;c=this.expect("+","-");)a=this.binaryFn(a,c.fn,this.multiplicative());return a},multiplicative:function(){for(var a=this.unary(),c;c=this.expect("*","/","%");)a=this.binaryFn(a,c.fn,this.unary());return a},unary:function(){var a;return this.expect("+")?this.primary():(a=this.expect("-"))?this.binaryFn(fb.ZERO,a.fn,
this.unary()):(a=this.expect("!"))?this.unaryFn(a.fn,this.unary()):this.primary()},fieldAccess:function(a){var c=this,d=this.expect().text,e=Ec(d,this.options,this.text);return D(function(c,d,k){return e(k||a(c,d))},{assign:function(e,g,k){(k=a(e,k))||a.assign(e,k={});return ub(k,d,g,c.text,c.options)}})},objectIndex:function(a){var c=this,d=this.expression();this.consume("]");return D(function(e,f){var g=a(e,f),k=d(e,f),m;ka(k,c.text);if(!g)return t;(g=va(g[k],c.text))&&(g.then&&c.options.unwrapPromises)&&
(m=g,"$$v"in g||(m.$$v=t,m.then(function(a){m.$$v=a})),g=g.$$v);return g},{assign:function(e,f,g){var k=ka(d(e,g),c.text);(g=va(a(e,g),c.text))||a.assign(e,g={});return g[k]=f}})},functionCall:function(a,c){var d=[];if(")"!==this.peekToken().text){do d.push(this.expression());while(this.expect(","))}this.consume(")");var e=this;return function(f,g){for(var k=[],m=c?c(f,g):f,h=0;h<d.length;h++)k.push(va(d[h](f,g),e.text));h=a(f,g,m)||E;va(m,e.text);var l=e.text;if(h){if(h.constructor===h)throw la("isecfn",
l);if(h===Pe||h===Qe||Qc&&h===Qc)throw la("isecff",l);}k=h.apply?h.apply(m,k):h(k[0],k[1],k[2],k[3],k[4]);return va(k,e.text)}},arrayDeclaration:function(){var a=[],c=!0;if("]"!==this.peekToken().text){do{if(this.peek("]"))break;var d=this.expression();a.push(d);d.constant||(c=!1)}while(this.expect(","))}this.consume("]");return D(function(c,d){for(var g=[],k=0;k<a.length;k++)g.push(a[k](c,d));return g},{literal:!0,constant:c})},object:function(){var a=[],c=!0;if("}"!==this.peekToken().text){do{if(this.peek("}"))break;
var d=this.expect(),d=d.string||d.text;this.consume(":");var e=this.expression();a.push({key:d,value:e});e.constant||(c=!1)}while(this.expect(","))}this.consume("}");return D(function(c,d){for(var e={},m=0;m<a.length;m++){var h=a[m];e[h.key]=h.value(c,d)}return e},{literal:!0,constant:c})}};var Vb={},xa=C("$sce"),ga={HTML:"html",CSS:"css",URL:"url",RESOURCE_URL:"resourceUrl",JS:"js"},Y=X.createElement("a"),Hc=ua(W.location.href,!0);mc.$inject=["$provide"];Ic.$inject=["$locale"];Kc.$inject=["$locale"];
var Nc=".",Je={yyyy:$("FullYear",4),yy:$("FullYear",2,0,!0),y:$("FullYear",1),MMMM:vb("Month"),MMM:vb("Month",!0),MM:$("Month",2,1),M:$("Month",1,1),dd:$("Date",2),d:$("Date",1),HH:$("Hours",2),H:$("Hours",1),hh:$("Hours",2,-12),h:$("Hours",1,-12),mm:$("Minutes",2),m:$("Minutes",1),ss:$("Seconds",2),s:$("Seconds",1),sss:$("Milliseconds",3),EEEE:vb("Day"),EEE:vb("Day",!0),a:function(a,c){return 12>a.getHours()?c.AMPMS[0]:c.AMPMS[1]},Z:function(a){a=-1*a.getTimezoneOffset();return a=(0<=a?"+":"")+(Xb(Math[0<
a?"floor":"ceil"](a/60),2)+Xb(Math.abs(a%60),2))}},Ie=/((?:[^yMdHhmsaZE']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|d+|H+|h+|m+|s+|a|Z))(.*)/,He=/^\-?\d+$/;Jc.$inject=["$locale"];var Fe=ba(K),Ge=ba(Ia);Lc.$inject=["$parse"];var dd=ba({restrict:"E",compile:function(a,c){8>=Q&&(c.href||c.name||c.$set("href",""),a.append(X.createComment("IE fix")));if(!c.href&&!c.xlinkHref&&!c.name)return function(a,c){var f="[object SVGAnimatedString]"===za.call(c.prop("href"))?"xlink:href":"href";c.on("click",function(a){c.attr(f)||
a.preventDefault()})}}}),Fb={};r(qb,function(a,c){if("multiple"!=a){var d=pa("ng-"+c);Fb[d]=function(){return{priority:100,link:function(a,f,g){a.$watch(g[d],function(a){g.$set(c,!!a)})}}}}});r(["src","srcset","href"],function(a){var c=pa("ng-"+a);Fb[c]=function(){return{priority:99,link:function(d,e,f){var g=a,k=a;"href"===a&&"[object SVGAnimatedString]"===za.call(e.prop("href"))&&(k="xlinkHref",f.$attr[k]="xlink:href",g=null);f.$observe(c,function(c){c?(f.$set(k,c),Q&&g&&e.prop(g,f[k])):"href"===
a&&f.$set(k,null)})}}}});var yb={$addControl:E,$removeControl:E,$setValidity:E,$setDirty:E,$setPristine:E};Oc.$inject=["$element","$attrs","$scope","$animate"];var Rc=function(a){return["$timeout",function(c){return{name:"form",restrict:a?"EAC":"E",controller:Oc,compile:function(){return{pre:function(a,e,f,g){if(!f.action){var k=function(a){a.preventDefault?a.preventDefault():a.returnValue=!1};sb(e[0],"submit",k);e.on("$destroy",function(){c(function(){$a(e[0],"submit",k)},0,!1)})}var m=e.parent().controller("form"),
h=f.name||f.ngForm;h&&ub(a,h,g,h);if(m)e.on("$destroy",function(){m.$removeControl(g);h&&ub(a,h,t,h);D(g,yb)})}}}}}]},ed=Rc(),rd=Rc(!0),Se=/^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/,Te=/^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i,Ue=/^\s*(\-|\+)?(\d+|(\d*(\.\d*)))\s*$/,Sc={text:Ab,number:function(a,c,d,e,f,g){Ab(a,c,d,e,f,g);e.$parsers.push(function(a){var c=e.$isEmpty(a);if(c||Ue.test(a))return e.$setValidity("number",
!0),""===a?null:c?a:parseFloat(a);e.$setValidity("number",!1);return t});Ke(e,"number",Ve,null,e.$$validityState);e.$formatters.push(function(a){return e.$isEmpty(a)?"":""+a});d.min&&(a=function(a){var c=parseFloat(d.min);return sa(e,"min",e.$isEmpty(a)||a>=c,a)},e.$parsers.push(a),e.$formatters.push(a));d.max&&(a=function(a){var c=parseFloat(d.max);return sa(e,"max",e.$isEmpty(a)||a<=c,a)},e.$parsers.push(a),e.$formatters.push(a));e.$formatters.push(function(a){return sa(e,"number",e.$isEmpty(a)||
ib(a),a)})},url:function(a,c,d,e,f,g){Ab(a,c,d,e,f,g);a=function(a){return sa(e,"url",e.$isEmpty(a)||Se.test(a),a)};e.$formatters.push(a);e.$parsers.push(a)},email:function(a,c,d,e,f,g){Ab(a,c,d,e,f,g);a=function(a){return sa(e,"email",e.$isEmpty(a)||Te.test(a),a)};e.$formatters.push(a);e.$parsers.push(a)},radio:function(a,c,d,e){x(d.name)&&c.attr("name",hb());c.on("click",function(){c[0].checked&&a.$apply(function(){e.$setViewValue(d.value)})});e.$render=function(){c[0].checked=d.value==e.$viewValue};
d.$observe("value",e.$render)},checkbox:function(a,c,d,e){var f=d.ngTrueValue,g=d.ngFalseValue;v(f)||(f=!0);v(g)||(g=!1);c.on("click",function(){a.$apply(function(){e.$setViewValue(c[0].checked)})});e.$render=function(){c[0].checked=e.$viewValue};e.$isEmpty=function(a){return a!==f};e.$formatters.push(function(a){return a===f});e.$parsers.push(function(a){return a?f:g})},hidden:E,button:E,submit:E,reset:E,file:E},Ve=["badInput"],jc=["$browser","$sniffer",function(a,c){return{restrict:"E",require:"?ngModel",
link:function(d,e,f,g){g&&(Sc[K(f.type)]||Sc.text)(d,e,f,g,c,a)}}}],wb="ng-valid",xb="ng-invalid",Oa="ng-pristine",zb="ng-dirty",We=["$scope","$exceptionHandler","$attrs","$element","$parse","$animate",function(a,c,d,e,f,g){function k(a,c){c=c?"-"+mb(c,"-"):"";g.removeClass(e,(a?xb:wb)+c);g.addClass(e,(a?wb:xb)+c)}this.$modelValue=this.$viewValue=Number.NaN;this.$parsers=[];this.$formatters=[];this.$viewChangeListeners=[];this.$pristine=!0;this.$dirty=!1;this.$valid=!0;this.$invalid=!1;this.$name=
d.name;var m=f(d.ngModel),h=m.assign;if(!h)throw C("ngModel")("nonassign",d.ngModel,ia(e));this.$render=E;this.$isEmpty=function(a){return x(a)||""===a||null===a||a!==a};var l=e.inheritedData("$formController")||yb,n=0,p=this.$error={};e.addClass(Oa);k(!0);this.$setValidity=function(a,c){p[a]!==!c&&(c?(p[a]&&n--,n||(k(!0),this.$valid=!0,this.$invalid=!1)):(k(!1),this.$invalid=!0,this.$valid=!1,n++),p[a]=!c,k(c,a),l.$setValidity(a,c,this))};this.$setPristine=function(){this.$dirty=!1;this.$pristine=
!0;g.removeClass(e,zb);g.addClass(e,Oa)};this.$setViewValue=function(d){this.$viewValue=d;this.$pristine&&(this.$dirty=!0,this.$pristine=!1,g.removeClass(e,Oa),g.addClass(e,zb),l.$setDirty());r(this.$parsers,function(a){d=a(d)});this.$modelValue!==d&&(this.$modelValue=d,h(a,d),r(this.$viewChangeListeners,function(a){try{a()}catch(d){c(d)}}))};var q=this;a.$watch(function(){var c=m(a);if(q.$modelValue!==c){var d=q.$formatters,e=d.length;for(q.$modelValue=c;e--;)c=d[e](c);q.$viewValue!==c&&(q.$viewValue=
c,q.$render())}return c})}],Gd=function(){return{require:["ngModel","^?form"],controller:We,link:function(a,c,d,e){var f=e[0],g=e[1]||yb;g.$addControl(f);a.$on("$destroy",function(){g.$removeControl(f)})}}},Id=ba({require:"ngModel",link:function(a,c,d,e){e.$viewChangeListeners.push(function(){a.$eval(d.ngChange)})}}),kc=function(){return{require:"?ngModel",link:function(a,c,d,e){if(e){d.required=!0;var f=function(a){if(d.required&&e.$isEmpty(a))e.$setValidity("required",!1);else return e.$setValidity("required",
!0),a};e.$formatters.push(f);e.$parsers.unshift(f);d.$observe("required",function(){f(e.$viewValue)})}}}},Hd=function(){return{require:"ngModel",link:function(a,c,d,e){var f=(a=/\/(.*)\//.exec(d.ngList))&&RegExp(a[1])||d.ngList||",";e.$parsers.push(function(a){if(!x(a)){var c=[];a&&r(a.split(f),function(a){a&&c.push(aa(a))});return c}});e.$formatters.push(function(a){return J(a)?a.join(", "):t});e.$isEmpty=function(a){return!a||!a.length}}}},Xe=/^(true|false|\d+)$/,Jd=function(){return{priority:100,
compile:function(a,c){return Xe.test(c.ngValue)?function(a,c,f){f.$set("value",a.$eval(f.ngValue))}:function(a,c,f){a.$watch(f.ngValue,function(a){f.$set("value",a)})}}}},jd=ya({compile:function(a){a.addClass("ng-binding");return function(a,d,e){d.data("$binding",e.ngBind);a.$watch(e.ngBind,function(a){d.text(a==t?"":a)})}}}),ld=["$interpolate",function(a){return function(c,d,e){c=a(d.attr(e.$attr.ngBindTemplate));d.addClass("ng-binding").data("$binding",c);e.$observe("ngBindTemplate",function(a){d.text(a)})}}],
kd=["$sce","$parse",function(a,c){return{compile:function(d){d.addClass("ng-binding");return function(d,f,g){f.data("$binding",g.ngBindHtml);var k=c(g.ngBindHtml);d.$watch(function(){return(k(d)||"").toString()},function(c){f.html(a.getTrustedHtml(k(d))||"")})}}}}],md=Yb("",!0),od=Yb("Odd",0),nd=Yb("Even",1),pd=ya({compile:function(a,c){c.$set("ngCloak",t);a.removeClass("ng-cloak")}}),qd=[function(){return{scope:!0,controller:"@",priority:500}}],lc={},Ye={blur:!0,focus:!0};r("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "),
function(a){var c=pa("ng-"+a);lc[c]=["$parse","$rootScope",function(d,e){return{compile:function(f,g){var k=d(g[c]);return function(c,d){d.on(a,function(d){var f=function(){k(c,{$event:d})};Ye[a]&&e.$$phase?c.$evalAsync(f):c.$apply(f)})}}}}]});var td=["$animate",function(a){return{transclude:"element",priority:600,terminal:!0,restrict:"A",$$tlb:!0,link:function(c,d,e,f,g){var k,m,h;c.$watch(e.ngIf,function(f){Ua(f)?m||(m=c.$new(),g(m,function(c){c[c.length++]=X.createComment(" end ngIf: "+e.ngIf+
" ");k={clone:c};a.enter(c,d.parent(),d)})):(h&&(h.remove(),h=null),m&&(m.$destroy(),m=null),k&&(h=Eb(k.clone),a.leave(h,function(){h=null}),k=null))})}}}],ud=["$http","$templateCache","$anchorScroll","$animate","$sce",function(a,c,d,e,f){return{restrict:"ECA",priority:400,terminal:!0,transclude:"element",controller:Va.noop,compile:function(g,k){var m=k.ngInclude||k.src,h=k.onload||"",l=k.autoscroll;return function(g,k,q,r,F){var u=0,t,w,R,z=function(){w&&(w.remove(),w=null);t&&(t.$destroy(),t=null);
R&&(e.leave(R,function(){w=null}),w=R,R=null)};g.$watch(f.parseAsResourceUrl(m),function(f){var m=function(){!y(l)||l&&!g.$eval(l)||d()},q=++u;f?(a.get(f,{cache:c}).success(function(a){if(q===u){var c=g.$new();r.template=a;a=F(c,function(a){z();e.enter(a,null,k,m)});t=c;R=a;t.$emit("$includeContentLoaded");g.$eval(h)}}).error(function(){q===u&&z()}),g.$emit("$includeContentRequested")):(z(),r.template=null)})}}}}],Kd=["$compile",function(a){return{restrict:"ECA",priority:-400,require:"ngInclude",
link:function(c,d,e,f){d.html(f.template);a(d.contents())(c)}}}],vd=ya({priority:450,compile:function(){return{pre:function(a,c,d){a.$eval(d.ngInit)}}}}),wd=ya({terminal:!0,priority:1E3}),xd=["$locale","$interpolate",function(a,c){var d=/{}/g;return{restrict:"EA",link:function(e,f,g){var k=g.count,m=g.$attr.when&&f.attr(g.$attr.when),h=g.offset||0,l=e.$eval(m)||{},n={},p=c.startSymbol(),q=c.endSymbol(),s=/^when(Minus)?(.+)$/;r(g,function(a,c){s.test(c)&&(l[K(c.replace("when","").replace("Minus","-"))]=
f.attr(g.$attr[c]))});r(l,function(a,e){n[e]=c(a.replace(d,p+k+"-"+h+q))});e.$watch(function(){var c=parseFloat(e.$eval(k));if(isNaN(c))return"";c in l||(c=a.pluralCat(c-h));return n[c](e,f,!0)},function(a){f.text(a)})}}}],yd=["$parse","$animate",function(a,c){var d=C("ngRepeat");return{transclude:"element",priority:1E3,terminal:!0,$$tlb:!0,link:function(e,f,g,k,m){var h=g.ngRepeat,l=h.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?\s*$/),n,p,q,s,t,u,A={$id:Ka};if(!l)throw d("iexp",
h);g=l[1];k=l[2];(l=l[3])?(n=a(l),p=function(a,c,d){u&&(A[u]=a);A[t]=c;A.$index=d;return n(e,A)}):(q=function(a,c){return Ka(c)},s=function(a){return a});l=g.match(/^(?:([\$\w]+)|\(([\$\w]+)\s*,\s*([\$\w]+)\))$/);if(!l)throw d("iidexp",g);t=l[3]||l[1];u=l[2];var y={};e.$watchCollection(k,function(a){var g,k,l=f[0],n,A={},B,I,H,v,E,C,x,J=[];if(Pa(a))C=a,E=p||q;else{E=p||s;C=[];for(H in a)a.hasOwnProperty(H)&&"$"!=H.charAt(0)&&C.push(H);C.sort()}B=C.length;k=J.length=C.length;for(g=0;g<k;g++)if(H=a===
C?g:C[g],v=a[H],n=E(H,v,g),Da(n,"`track by` id"),y.hasOwnProperty(n))x=y[n],delete y[n],A[n]=x,J[g]=x;else{if(A.hasOwnProperty(n))throw r(J,function(a){a&&a.scope&&(y[a.id]=a)}),d("dupes",h,n,na(v));J[g]={id:n};A[n]=!1}for(H in y)y.hasOwnProperty(H)&&(x=y[H],g=Eb(x.clone),c.leave(g),r(g,function(a){a.$$NG_REMOVED=!0}),x.scope.$destroy());g=0;for(k=C.length;g<k;g++){H=a===C?g:C[g];v=a[H];x=J[g];J[g-1]&&(l=J[g-1].clone[J[g-1].clone.length-1]);if(x.scope){I=x.scope;n=l;do n=n.nextSibling;while(n&&n.$$NG_REMOVED);
x.clone[0]!=n&&c.move(Eb(x.clone),null,w(l));l=x.clone[x.clone.length-1]}else I=e.$new();I[t]=v;u&&(I[u]=H);I.$index=g;I.$first=0===g;I.$last=g===B-1;I.$middle=!(I.$first||I.$last);I.$odd=!(I.$even=0===(g&1));x.scope||m(I,function(a){a[a.length++]=X.createComment(" end ngRepeat: "+h+" ");c.enter(a,null,w(l));l=a;x.scope=I;x.clone=a;A[x.id]=x})}y=A})}}}],zd=["$animate",function(a){return function(c,d,e){c.$watch(e.ngShow,function(c){a[Ua(c)?"removeClass":"addClass"](d,"ng-hide")})}}],sd=["$animate",
function(a){return function(c,d,e){c.$watch(e.ngHide,function(c){a[Ua(c)?"addClass":"removeClass"](d,"ng-hide")})}}],Ad=ya(function(a,c,d){a.$watch(d.ngStyle,function(a,d){d&&a!==d&&r(d,function(a,d){c.css(d,"")});a&&c.css(a)},!0)}),Bd=["$animate",function(a){return{restrict:"EA",require:"ngSwitch",controller:["$scope",function(){this.cases={}}],link:function(c,d,e,f){var g=[],k=[],m=[],h=[];c.$watch(e.ngSwitch||e.on,function(d){var n,p;n=0;for(p=m.length;n<p;++n)m[n].remove();n=m.length=0;for(p=
h.length;n<p;++n){var q=k[n];h[n].$destroy();m[n]=q;a.leave(q,function(){m.splice(n,1)})}k.length=0;h.length=0;if(g=f.cases["!"+d]||f.cases["?"])c.$eval(e.change),r(g,function(d){var e=c.$new();h.push(e);d.transclude(e,function(c){var e=d.element;k.push(c);a.enter(c,e.parent(),e)})})})}}}],Cd=ya({transclude:"element",priority:800,require:"^ngSwitch",link:function(a,c,d,e,f){e.cases["!"+d.ngSwitchWhen]=e.cases["!"+d.ngSwitchWhen]||[];e.cases["!"+d.ngSwitchWhen].push({transclude:f,element:c})}}),Dd=
ya({transclude:"element",priority:800,require:"^ngSwitch",link:function(a,c,d,e,f){e.cases["?"]=e.cases["?"]||[];e.cases["?"].push({transclude:f,element:c})}}),Fd=ya({link:function(a,c,d,e,f){if(!f)throw C("ngTransclude")("orphan",ia(c));f(function(a){c.empty();c.append(a)})}}),fd=["$templateCache",function(a){return{restrict:"E",terminal:!0,compile:function(c,d){"text/ng-template"==d.type&&a.put(d.id,c[0].text)}}}],Ze=C("ngOptions"),Ed=ba({terminal:!0}),gd=["$compile","$parse",function(a,c){var d=
/^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/,e={$setViewValue:E};return{restrict:"E",require:["select","?ngModel"],controller:["$element","$scope","$attrs",function(a,c,d){var m=this,h={},l=e,n;m.databound=d.ngModel;m.init=function(a,c,d){l=a;n=d};m.addOption=function(c){Da(c,'"option value"');h[c]=!0;l.$viewValue==c&&(a.val(c),n.parent()&&n.remove())};
m.removeOption=function(a){this.hasOption(a)&&(delete h[a],l.$viewValue==a&&this.renderUnknownOption(a))};m.renderUnknownOption=function(c){c="? "+Ka(c)+" ?";n.val(c);a.prepend(n);a.val(c);n.prop("selected",!0)};m.hasOption=function(a){return h.hasOwnProperty(a)};c.$on("$destroy",function(){m.renderUnknownOption=E})}],link:function(e,g,k,m){function h(a,c,d,e){d.$render=function(){var a=d.$viewValue;e.hasOption(a)?(v.parent()&&v.remove(),c.val(a),""===a&&u.prop("selected",!0)):x(a)&&u?c.val(""):e.renderUnknownOption(a)};
c.on("change",function(){a.$apply(function(){v.parent()&&v.remove();d.$setViewValue(c.val())})})}function l(a,c,d){var e;d.$render=function(){var a=new bb(d.$viewValue);r(c.find("option"),function(c){c.selected=y(a.get(c.value))})};a.$watch(function(){Aa(e,d.$viewValue)||(e=ha(d.$viewValue),d.$render())});c.on("change",function(){a.$apply(function(){var a=[];r(c.find("option"),function(c){c.selected&&a.push(c.value)});d.$setViewValue(a)})})}function n(e,f,g){function k(){var a={"":[]},c=[""],d,h,
s,t,v;s=g.$modelValue;t=w(e)||[];var E=n?Zb(t):t,I,M,B;M={};B=!1;if(q)if(h=g.$modelValue,x&&J(h))for(B=new bb([]),d={},v=0;v<h.length;v++)d[m]=h[v],B.put(x(e,d),h[v]);else B=new bb(h);v=B;var D,K;for(B=0;I=E.length,B<I;B++){h=B;if(n){h=E[B];if("$"===h.charAt(0))continue;M[n]=h}M[m]=t[h];d=r(e,M)||"";(h=a[d])||(h=a[d]=[],c.push(d));q?d=y(v.remove(x?x(e,M):u(e,M))):(x?(d={},d[m]=s,d=x(e,d)===x(e,M)):d=s===u(e,M),v=v||d);D=l(e,M);D=y(D)?D:"";h.push({id:x?x(e,M):n?E[B]:B,label:D,selected:d})}q||(F||null===
s?a[""].unshift({id:"",label:"",selected:!v}):v||a[""].unshift({id:"?",label:"",selected:!0}));M=0;for(E=c.length;M<E;M++){d=c[M];h=a[d];z.length<=M?(s={element:C.clone().attr("label",d),label:h.label},t=[s],z.push(t),f.append(s.element)):(t=z[M],s=t[0],s.label!=d&&s.element.attr("label",s.label=d));D=null;B=0;for(I=h.length;B<I;B++)d=h[B],(v=t[B+1])?(D=v.element,v.label!==d.label&&D.text(v.label=d.label),v.id!==d.id&&D.val(v.id=d.id),D[0].selected!==d.selected&&(D.prop("selected",v.selected=d.selected),
Q&&D.prop("selected",v.selected))):(""===d.id&&F?K=F:(K=A.clone()).val(d.id).prop("selected",d.selected).attr("selected",d.selected).text(d.label),t.push({element:K,label:d.label,id:d.id,selected:d.selected}),p.addOption(d.label,K),D?D.after(K):s.element.append(K),D=K);for(B++;t.length>B;)d=t.pop(),p.removeOption(d.label),d.element.remove()}for(;z.length>M;)z.pop()[0].element.remove()}var h;if(!(h=s.match(d)))throw Ze("iexp",s,ia(f));var l=c(h[2]||h[1]),m=h[4]||h[6],n=h[5],r=c(h[3]||""),u=c(h[2]?
h[1]:m),w=c(h[7]),x=h[8]?c(h[8]):null,z=[[{element:f,label:""}]];F&&(a(F)(e),F.removeClass("ng-scope"),F.remove());f.empty();f.on("change",function(){e.$apply(function(){var a,c=w(e)||[],d={},h,l,p,r,s,v,y;if(q)for(l=[],r=0,v=z.length;r<v;r++)for(a=z[r],p=1,s=a.length;p<s;p++){if((h=a[p].element)[0].selected){h=h.val();n&&(d[n]=h);if(x)for(y=0;y<c.length&&(d[m]=c[y],x(e,d)!=h);y++);else d[m]=c[h];l.push(u(e,d))}}else if(h=f.val(),"?"==h)l=t;else if(""===h)l=null;else if(x)for(y=0;y<c.length;y++){if(d[m]=
c[y],x(e,d)==h){l=u(e,d);break}}else d[m]=c[h],n&&(d[n]=h),l=u(e,d);g.$setViewValue(l);k()})});g.$render=k;e.$watchCollection(w,k);e.$watchCollection(function(){var a={},c=w(e);if(c){for(var d=Array(c.length),f=0,g=c.length;f<g;f++)a[m]=c[f],d[f]=l(e,a);return d}},k);q&&e.$watchCollection(function(){return g.$modelValue},k)}if(m[1]){var p=m[0];m=m[1];var q=k.multiple,s=k.ngOptions,F=!1,u,A=w(X.createElement("option")),C=w(X.createElement("optgroup")),v=A.clone();k=0;for(var z=g.children(),E=z.length;k<
E;k++)if(""===z[k].value){u=F=z.eq(k);break}p.init(m,F,v);q&&(m.$isEmpty=function(a){return!a||0===a.length});s?n(e,g,m):q?l(e,g,m):h(e,g,m,p)}}}}],id=["$interpolate",function(a){var c={addOption:E,removeOption:E};return{restrict:"E",priority:100,compile:function(d,e){if(x(e.value)){var f=a(d.text(),!0);f||e.$set("value",d.text())}return function(a,d,e){var h=d.parent(),l=h.data("$selectController")||h.parent().data("$selectController");l&&l.databound?d.prop("selected",!1):l=c;f?a.$watch(f,function(a,
c){e.$set("value",a);a!==c&&l.removeOption(c);l.addOption(a)}):l.addOption(e.value);d.on("$destroy",function(){l.removeOption(e.value)})}}}}],hd=ba({restrict:"E",terminal:!0});W.angular.bootstrap?console.log("WARNING: Tried to load angular more than once."):((Ea=W.jQuery)&&Ea.fn.on?(w=Ea,D(Ea.fn,{scope:La.scope,isolateScope:La.isolateScope,controller:La.controller,injector:La.injector,inheritedData:La.inheritedData}),Gb("remove",!0,!0,!1),Gb("empty",!1,!1,!1),Gb("html",!1,!1,!0)):w=S,Va.element=w,
$c(Va),w(X).ready(function(){Xc(X,fc)}))})(window,document);!window.angular.$$csp()&&window.angular.element(document).find("head").prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide{display:none !important;}ng\\:form{display:block;}.ng-animate-block-transitions{transition:0s all!important;-webkit-transition:0s all!important;}.ng-hide-add-active,.ng-hide-remove{display:block!important;}</style>');
//# sourceMappingURL=angular.min.js.map

; browserify_shim__define__module__export__(typeof angular != "undefined" ? angular : window.angular);

}).call(global, undefined, undefined, undefined, undefined, function defineExport(ex) { module.exports = ex; });

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],"/home/ubuntu/workspace/bower_components/famous-angular/dist/famous-angular.min.js":[function(require,module,exports){
(function (global){

; require("famous-polyfills");
require("/home/ubuntu/workspace/bower_components/famous/dist/famous-global.min.js");
require("/home/ubuntu/workspace/bower_components/angular/angular.min.js");
require("/home/ubuntu/workspace/bower_components/angular-animate/angular-animate.min.js");
require("/home/ubuntu/workspace/bower_components/angular-sanitize/angular-sanitize.min.js");
require("/home/ubuntu/workspace/bower_components/angular-ui-router/release/angular-ui-router.min.js");
;__browserify_shim_require__=require;(function browserifyShim(module, define, require) {
/**
 * famous-angular - Bring structure to your Famo.us apps with the power of AngularJS. Famo.us/Angular integrates seamlessly with existing Angular and Famo.us apps.
 * @version v0.5.0
 * @link https://github.com/Famous/famous-angular
 * @license MPL v2.0
 */
"use strict";var ngFameApp=angular.module("famous.angular",[]);ngFameApp.provider("$famous",function(){var e={"famous/core/Context":famous.core.Context,"famous/core/ElementAllocator":famous.core.ElementAllocator,"famous/core/Engine":famous.core.Engine,"famous/core/Entity":famous.core.Entity,"famous/core/EventEmitter":famous.core.EventEmitter,"famous/core/EventHandler":famous.core.EventHandler,"famous/core/Group":famous.core.Group,"famous/core/Modifier":famous.core.Modifier,"famous/core/OptionsManager":famous.core.OptionsManager,"famous/core/RenderNode":famous.core.RenderNode,"famous/core/Scene":famous.core.Scene,"famous/core/SpecParser":famous.core.SpecParser,"famous/core/Surface":famous.core.Surface,"famous/core/Transform":famous.core.Transform,"famous/core/View":famous.core.View,"famous/core/ViewSequence":famous.core.ViewSequence,"famous/events/EventArbiter":famous.events.EventArbiter,"famous/events/EventFilter":famous.events.EventFilter,"famous/events/EventMapper":famous.events.EventMapper,"famous/inputs/FastClick":famous.inputs.FastClick,"famous/inputs/GenericSync":famous.inputs.GenericSync,"famous/inputs/MouseSync":famous.inputs.MouseSync,"famous/inputs/PinchSync":famous.inputs.PinchSync,"famous/inputs/RotateSync":famous.inputs.RotateSync,"famous/inputs/ScaleSync":famous.inputs.ScaleSync,"famous/inputs/ScrollSync":famous.inputs.ScrollSync,"famous/inputs/TouchSync":famous.inputs.TouchSync,"famous/inputs/TouchTracker":famous.inputs.TouchTracker,"famous/inputs/TwoFingerSync":famous.inputs.TwoFingerSync,"famous/math/Matrix":famous.math.Matrix,"famous/math/Quaternion":famous.math.Quaternion,"famous/math/Random":famous.math.Random,"famous/math/Utilities":famous.math.Utilities,"famous/math/Vector":famous.math.Vector,"famous/modifiers/Draggable":famous.modifiers.Draggable,"famous/modifiers/Fader":famous.modifiers.Fader,"famous/modifiers/ModifierChain":famous.modifiers.ModifierChain,"famous/modifiers/StateModifier":famous.modifiers.StateModifier,"famous/surfaces/CanvasSurface":famous.surfaces.CanvasSurface,"famous/surfaces/ContainerSurface":famous.surfaces.ContainerSurface,"famous/surfaces/FormContainerSurface":famous.surfaces.FormContainerSurface,"famous/surfaces/ImageSurface":famous.surfaces.ImageSurface,"famous/surfaces/InputSurface":famous.surfaces.InputSurface,"famous/surfaces/SubmitInputSurface":famous.surfaces.SubmitInputSurface,"famous/surfaces/TextareaSurface":famous.surfaces.TextareaSurface,"famous/surfaces/VideoSurface":famous.surfaces.VideoSurface,"famous/transitions/CachedMap":famous.transitions.CachedMap,"famous/transitions/Easing":famous.transitions.Easing,"famous/transitions/MultipleTransition":famous.transitions.MultipleTransition,"famous/transitions/SnapTransition":famous.transitions.SnapTransition,"famous/transitions/SpringTransition":famous.transitions.SpringTransition,"famous/transitions/Transitionable":famous.transitions.Transitionable,"famous/transitions/TransitionableTransform":famous.transitions.TransitionableTransform,"famous/transitions/TweenTransition":famous.transitions.TweenTransition,"famous/transitions/WallTransition":famous.transitions.WallTransition,"famous/utilities/KeyCodes":famous.utilities.KeyCodes,"famous/utilities/Timer":famous.utilities.Timer,"famous/utilities/Utility":famous.utilities.Utility,"famous/views/Deck":famous.views.Deck,"famous/views/EdgeSwapper":famous.views.EdgeSwapper,"famous/views/FlexibleLayout":famous.views.FlexibleLayout,"famous/views/Flipper":famous.views.Flipper,"famous/views/GridLayout":famous.views.GridLayout,"famous/views/HeaderFooterLayout":famous.views.HeaderFooterLayout,"famous/views/Lightbox":famous.views.Lightbox,"famous/views/RenderController":famous.views.RenderController,"famous/views/ScrollContainer":famous.views.ScrollContainer,"famous/views/Scroller":famous.views.Scroller,"famous/views/Scrollview":famous.views.Scrollview,"famous/views/SequentialLayout":famous.views.SequentialLayout,"famous/widgets/NavigationBar":famous.widgets.NavigationBar,"famous/widgets/Slider":famous.widgets.Slider,"famous/widgets/TabBar":famous.widgets.TabBar,"famous/widgets/ToggleButton":famous.widgets.ToggleButton,"famous/physics/PhysicsEngine":famous.physics.PhysicsEngine,"famous/physics/bodies/Body":famous.physics.bodies.Body,"famous/physics/bodies/Circle":famous.physics.bodies.Circle,"famous/physics/bodies/Particle":famous.physics.bodies.Particle,"famous/physics/bodies/Rectangle":famous.physics.bodies.Rectangle,"famous/physics/constraints/Collision":famous.physics.constraints.Collision,"famous/physics/constraints/Constraint":famous.physics.constraints.Constraint,"famous/physics/constraints/Curve":famous.physics.constraints.Curve,"famous/physics/constraints/Distance":famous.physics.constraints.Distance,"famous/physics/constraints/Snap":famous.physics.constraints.Snap,"famous/physics/constraints/Surface":famous.physics.constraints.Surface,"famous/physics/constraints/Wall":famous.physics.constraints.Wall,"famous/physics/constraints/Walls":famous.physics.constraints.Walls,"famous/physics/forces/Drag":famous.physics.forces.Drag,"famous/physics/forces/Force":famous.physics.forces.Force,"famous/physics/forces/Repulsion":famous.physics.forces.Repulsion,"famous/physics/forces/RotationalDrag":famous.physics.forces.RotationalDrag,"famous/physics/forces/RotationalSpring":famous.physics.forces.RotationalSpring,"famous/physics/forces/Spring":famous.physics.forces.Spring,"famous/physics/forces/VectorField":famous.physics.forces.VectorField,"famous/physics/integrators/SymplecticEuler":famous.physics.integrators.SymplecticEuler};this.registerModule=function(n,r){e[n]=r},e.getIsolate=function(e){return e&&"isolate"in e?e.isolate[e.$id]:{}},e.find=function(n){var r=angular.element(window.document.querySelectorAll(n)),a=function(e){var n=[];return angular.forEach(e,function(e,r){n[r]=angular.element(e).scope()}),n}(r),o=function(n){var r=[];return angular.forEach(n,function(n,a){r[a]=e.getIsolate(n)}),r}(a);return o};var n=/([\:\-\_]+(.))/g,r=/^moz([A-Z])/,a=/^(x[\:\-_]|data[\:\-_])/i,o=/^FA\-.*SURFACE/,t=/^FA\-.*/;window.$famousUtil=e.util={isASurface:function(e){return o.test(e[0].tagName)},isFaElement:function(e){if(t.test(e[0].tagName))return!0;var n=!1;return angular.forEach(e[0].attributes,function(e){n=n||t.test(e)}),n},camelCase:function(e){return e.replace(n,function(e,n,r,a){return a?r.toUpperCase():r}).replace(r,"Moz$1")},directiveNormalize:function(n){return e.util.camelCase(n.replace(a,""))}},this.$get=function(){return e}}),angular.module("famous.angular").config(["$provide",function(e){e.decorator("$animate",["$delegate","$rootScope","$famous","$parse","$famousDecorator",function(e,n,r,a,o){var t=r["famous/utilities/Timer"],i="$$faAnimationActive",s={},u=function(e){var n=r.getIsolate(e);return!n&&e&&(n=o.$$getIsolateById(s[e.$id])),n},c={enabled:e.enabled};return angular.forEach(["addClass","removeClass"],function(n){var a=angular.element.prototype[n];angular.element.prototype[n]=function(e){return a.apply(this,arguments),r.util.isASurface(this)&&"string"==typeof e&&""!==e.trim()&&u(this.scope()).renderNode[n](e),this},c[n]=function(a,o,t){if(e[n](a,o,t),r.util.isFaElement(a)){var i=u(a.scope());if(r.util.isASurface(a)){var s=i.renderNode;angular.forEach(o.split(" "),function(e){"ng-hide"===e?"addClass"===n?i.hide():"removeClass"===n&&i.show():s[n](e)})}else angular.forEach(o.split(" "),function(e){"ng-hide"===e&&("addClass"===n?i.hide():"removeClass"===n&&i.show())})}}}),c.setClass=function(n,a,o,t){if(e.setClass(n,a,o,t),r.util.isASurface(n)){var i=u(n.scope()).renderNode;angular.forEach(a.split(" "),function(e){i.addClass(e)}),angular.forEach(o.split(" "),function(e){i.removeClass(e)})}},angular.forEach(["enter","leave","move"],function(a){var o=a[0].toUpperCase()+a.slice(1);c[a]=function(c){var f=this,l=arguments,d="enter"===a,m=c.scope();m&&m.$parent&&(s[m.$id]=m.$parent.$id);var p=u(m);d===!0&&e[a].apply(this,arguments),c.data(i)===!0&&p&&p.$$animateHaltHandler&&p.$$animateHaltHandler(c.scope()),c.data(i,!0);var v=function(){m&&m.$id;if("leave"===a&&r.util.isFaElement(c)){var n=u(m);n&&n.id&&n.hide()}c.data(i)!==!1&&(c.data(i,!1),d===!1&&e[a].apply(f,l))};n.$$postDigest(function(){var e,n=c.scope(),r=u(n);if(r&&(e=r["$$animate"+o+"Handler"]),void 0===e)return void v();var a=e(n,{$done:v});"number"==typeof a&&t.setTimeout(v,a)})}}),c}])}]),angular.module("famous.angular").factory("$famousDecorator",["$famous",function(e){var n={child:{},parent:{},renderable:function(n){var r=e["famous/core/RenderNode"];n.renderGate=new r,n.emptyNode=new r,n.show=function(){n.renderGate&&n.renderGate.set(n.renderNode)},n.hide=function(){n.renderGate.set(n.emptyNode)}}},r={};return{addRole:function(e,r){n[e](r)},ensureIsolate:function(e,n){if(n){var a=["fa-edge-swapper","fa-render-controller","fa-deck","fa-light-box"],o=!1;angular.forEach(a,function(e){return e.toUpperCase()===n[0].tagName?void(o=!0):void 0!==n[0].attributes[e]?void(o=!0):void 0}),o&&(e=e.$parent)}e.isolate=e.isolate||{},e.isolate[e.$id]=e.isolate[e.$id]||{};var t=e.isolate[e.$id];t.id=e.$id;var i=e.$eval("$index");return i&&"$index"!==i&&!t.index&&(t.index=i),r[t.id]=t,t},$$getIsolateById:function(e){return r[e]},registerChild:function(e,n,r,a){e.$emit("registerChild",r),n.one("$destroy",function(){"removeMethod"in r&&r.removeMethod(r.id),r&&r.hide&&r.hide(),a&&a()})},sequenceWith:function(n,r,a,o){n.$on("registerChild",function(t,i){if(t.targetScope.$id!==n.$id){var s=e.getIsolate(n);i.$parent=s,s.$children=s.$children||[],s.$children.push(i),r(i),t.stopPropagation(),a&&(i.removeMethod=a),o&&(i.updateMethod=o)}})}}}]),angular.module("famous.angular").service("$famousPipe",function(){function e(e,n,r){e instanceof Array||(e=[e]),n instanceof Array||(n=[n]);for(var a=0;a<e.length;a++)for(var o=0;o<n.length;o++)void 0!==n[o]&&void 0!==e[a]&&n[o][r](e[a])}this.unpipesFromTargets=function(n,r){e(n,r,"unpipe")},this.pipesToTargets=function(n,r){e(n,r,"pipe")}}),angular.module("famous.angular").factory("$timeline",function(){var e=function(e,n){return"number"==typeof e?e+n:e.map(function(e,r){return e+n[r]})},n=function(e,n){return"number"==typeof e?e-n:e.map(function(e,r){return e-n[r]})},r=function(e,n){return"number"==typeof e?e*n:e.map(function(e){return e*n})},a=function(a,o,t,i,s){return function(u){var c=i,f=-o,l=1/(t-o),d=n(s,i);return e(r(d,a(l*(u+f))),c)}};return function(e){var n=function(e){return e};return function(r){if(r<e[0][0])return e[0][1];for(var o=0;o<e.length-1;o++)if(e[o][0]<=r&&r<e[o+1][0]){var t=a(e[o][2]||n,e[o][0],e[o+1][0],e[o][1],e[o+1][1]);return t(r)}return e[e.length-1][1]}}}),angular.module("famous.angular").directive("faAnimateEnter",["$parse","$famousDecorator",function(e,n){return{restrict:"A",scope:!1,priority:16,compile:function(){return{post:function(r,a,o){var t=n.ensureIsolate(r);t.$$animateEnterHandler=e(o.faAnimateEnter),o.$observe("faAnimateEnter",function(){t.$$animateEnterHandler=e(o.faAnimateEnter)})}}}}}]),angular.module("famous.angular").directive("faAnimateHalt",["$parse","$famousDecorator",function(e,n){return{restrict:"A",scope:!1,priority:16,compile:function(){return{post:function(r,a,o){var t=n.ensureIsolate(r);t.$$animateHaltHandler=e(o.faAnimateHalt),o.$observe("faAnimateHalt",function(){t.$$animateHaltHandler=e(o.faAnimateHalt)})}}}}}]),angular.module("famous.angular").directive("faAnimateLeave",["$parse","$famousDecorator",function(e,n){return{restrict:"A",scope:!1,priority:16,compile:function(){return{post:function(r,a,o){var t=n.ensureIsolate(r);t.$$animateLeaveHandler=e(o.faAnimateLeave),o.$observe("faAnimateLeave",function(){t.$$animateLeaveHandler=e(o.faAnimateLeave)})}}}}}]),angular.module("famous.angular").directive("faAnimateMove",["$parse","$famousDecorator",function(e,n){return{restrict:"A",scope:!1,priority:16,compile:function(){return{post:function(r,a,o){var t=n.ensureIsolate(r);t.$$animateMoveHandler=e(o.faAnimateMove),o.$observe("faAnimateMove",function(){t.$$animateMoveHandler=e(o.faAnimateMove)})}}}}}]),angular.module("famous.angular").directive("faAnimation",["$famous","$famousDecorator",function(e,n){return{restrict:"EA",scope:!0,compile:function(){var r=e["famous/core/Transform"],a=e["famous/transitions/Transitionable"],o=e["famous/transitions/Easing"];return{pre:function(e){n.ensureIsolate(e)},post:function(e,t,i){var s=n.ensureIsolate(e);setTimeout(function(){s.timeline=e.$eval(i.timeline),s._trans=new a(0),s.play=function(n){var r={duration:e.$eval(i.duration),curve:e.$eval(i.curve)||"linear"};s._trans.set(1,r,function(){n&&n(),i.loop&&setTimeout(function(){s.replay(n)},0)})},s.reset=function(){s._trans.set(0)},s.replay=function(e){s.reset(),s.play(e)};var n=null;i.event&&(n&&n(),n=e.$on(i.event,function(e,n){var r=n&&n.callback?n.callback:void 0;s.replay(r)}));i.id;if(void 0===s.timeline&&(s.timeline=s._trans.get.bind(s._trans),i.autoplay&&s.play()),!s.timeline instanceof Function)throw new Error("timeline must be a reference to a function or duration must be provided");for(var u=t[0].querySelectorAll("animate"),c={},f=0;f<u.length;f++)!function(){var n=u[f];if(n.attributes.targetmodselector){var a=angular.element(t[0].parentNode)[0].querySelectorAll(n.attributes.targetmodselector.value);angular.forEach(a,function(a){var t=angular.element(a).scope(),i=t.isolate[t.$id].modifier,u=t.isolate[t.$id].getTransform,f=n.attributes.curve&&"linear"!==n.attributes.curve.value?o[n.attributes.curve.value]:function(e){return e};if(n.attributes.field){var l=n.attributes.field.value,d=n.attributes.timelinelowerbound?parseFloat(n.attributes.timelinelowerbound.value):0,m=n.attributes.timelineupperbound?parseFloat(n.attributes.timelineupperbound.value):1;if(!n.attributes.startvalue)throw new Error("you must provide a start value for the animation");var p=e.$eval(n.attributes.startvalue.value);if(!n.attributes.endvalue)throw new Error("you must provide an end value for the animation");var v=e.$eval(n.attributes.endValue.value),g=c[t.$id]=c[t.$id]||{},h=g[l]=g[l]||[];h.push({field:l,lowerBound:d,upperBound:m,startValue:p,endValue:v,curve:f}),h.sort(function(e,n){return e.lowerBound-n.lowerBound});for(var $=1;$<h.length;$++)for(var y=h[$].lowerBound,w=0;$>w;w++)if(y<h[w].upperBound)throw new Error("Animate segments have overlappingdomains for the same field ("+l+").At any point in the timeline, only one <animate>can affect a given field on the same modifier.");var S=function(){for(var e=s.timeline()||0,n=0,r=h[n],a=0;a<h.length;a++){if(e>=h[a].lowerBound&&e<=h[a].upperBound){r=h[a];break}if(a===h.length-1){r=h[a];break}if(e>=h[a].upperBound&&e<h[a+1].lowerBound){r=h[a];break}}if(e<=r.lowerBound)return r.startValue;if(e>=r.upperBound)return r.endValue;var o=r.upperBound-r.lowerBound,t=(e-r.lowerBound)/o;if(Array.isArray(r.startValue)){for(var i=[],u=0;u<r.startValue.length;u++)i.push(r.startValue[u]+r.curve(t)*(r.endValue[u]-r.startValue[u]));return i}return r.startValue+r.curve(t)*(r.endValue-r.startValue)},b=g.transformComponents=g.transformComponents||[];"opacity"===l?i.opacityFrom(function(){return S()}):"origin"===l?i.originFrom(function(){return S()}):"size"===l?i.sizeFrom(function(){return S()}):(b.push({field:l,fn:S}),i.transformFrom(function(){for(var e={},n=u&&u()?[u()]:[],a=0;a<b.length;a++)!function(){var o=b[a].field;if(!e[o]){var t=b[a].fn();n.push(Array.isArray(t)?r[o].apply(this,t):r[o](t)),e[o]=!0}}();return 1===n.length?n[0]:r.multiply.apply(this,n)}))}})}}()},1)}}}}}]),angular.module("famous.angular").directive("faApp",["$famous","$famousDecorator",function(e,n){return{template:'<div style="display: none;"><div></div></div>',transclude:!0,scope:!0,restrict:"EA",compile:function(r,a,o){return{pre:function(r,a,o){function t(){s.apply(this,arguments)}{var i=n.ensureIsolate(r),s=e["famous/core/View"],u=e["famous/core/Engine"];e["famous/core/Transform"]}a.append('<div class="famous-angular-clipping-container"><div class="famous-angular-container"></div></div>'),i.context=u.createContext(a[0].querySelector(".famous-angular-container")),window.context=i.context;var c=function(){var e=parseInt(o.faPerspective);e&&i.context.setPerspective(e)};o.$observe("faPerspective",c),c(),t.prototype=Object.create(s.prototype),t.prototype.constructor=t;i.view=new t,i.context.add(i.view),r.$on("$destroy",function(){i.context.update=angular.noop}),r.$on("registerChild",function(e,n){i.view.add(n.renderNode),e.stopPropagation()})},post:function(e,r){var a=n.ensureIsolate(e);o(e,function(e){angular.element(r[0].querySelectorAll("div div")[0]).append(e)}),a.readyToRender=!0}}}}}]),angular.module("famous.angular").directive("faCanvasSurface",["$famous","$famousDecorator","$interpolate","$controller","$compile",function(e,n){return{scope:!0,transclude:!0,template:'<canvas class="fa-canvas-surface"></canvas>',restrict:"EA",compile:function(r,a,o){return{pre:function(r,a,o){{var t=n.ensureIsolate(r),i=e["famous/surfaces/CanvasSurface"];e["famous/core/Transform"],e["famous/core/EventHandler"]}t.renderNode=new i({size:r.$eval(o.faSize)}),n.addRole("renderable",t),t.show(),o.class&&t.renderNode.setClasses(o["class"].split(" ")),n.sequenceWith(r,function(){throw new Error("Surfaces are leaf nodes of the Famo.us render tree and cannot accept rendernode children.  To include additional Famo.us content inside of a fa-surface, that content must be enclosed in an additional fa-app.")})},post:function(e,r){var a=n.ensureIsolate(e),t=function(){a.renderNode.setContent(r[0].querySelector("canvas.fa-canvas-surface"))};t(),o(e,function(e){angular.element(r[0].querySelectorAll("canvas.fa-canvas-surface")).append(e)}),n.registerChild(e,r,a,function(){})}}}}}]),angular.module("famous.angular").directive("faClick",["$parse","$famousDecorator",function(e,n){return{restrict:"A",compile:function(){return{post:function(r,a,o){var t=n.ensureIsolate(r);if(o.faClick){var i=t.renderNode._eventInput||t.renderNode;i.on("click",function(n){var a=e(o.faClick);a(r,{$event:n}),r.$$phase||r.$apply()})}}}}}}]),angular.module("famous.angular").directive("faContainerSurface",["$famous","$famousDecorator",function(e,n){return{template:"<div></div>",restrict:"E",transclude:!0,scope:!0,compile:function(r,a,o){return{pre:function(r,a,o){var t=n.ensureIsolate(r),i=e["famous/surfaces/ContainerSurface"],s=r.$eval(o.faOptions)||{};t.renderNode=new i(s),n.addRole("renderable",t),t.show(),n.sequenceWith(r,function(e){t.renderNode.add(e.renderGate)})},post:function(e,r){var a=n.ensureIsolate(e);o(e,function(e){r.find("div").append(e)}),n.registerChild(e,r,a)}}}}}]),angular.module("famous.angular").directive("faDraggable",["$famous","$famousDecorator","$parse","$rootScope",function(e,n,r,a){return{template:"<div></div>",transclude:!0,restrict:"EA",priority:2,scope:!0,compile:function(r,o,t){return{post:function(r,o,i){var s=n.ensureIsolate(r),u=e["famous/core/RenderNode"],c=e["famous/modifiers/Draggable"],f=r.$eval(i.faOptions)||{};r.$watch(function(){return r.$eval(i.faOptions)},function(e){e=e||{},s.modifier.setOptions(e)},!0),s.modifier=new c(f),s.renderNode=(new u).add(s.modifier),n.addRole("renderable",s),s.show(),n.sequenceWith(r,function(e){s.renderNode.add(e.renderGate)}),t(r,function(e){o.find("div").append(e)}),n.registerChild(r,o,s,function(){s.modifier.deactivate()}),r.$$phase||a.$$phase||r.$apply()}}}}}]),angular.module("famous.angular").directive("faEdgeSwapper",["$famous","$famousDecorator",function(e,n){return{scope:!0,restrict:"A",priority:512,compile:function(){var r=e["famous/views/EdgeSwapper"];return{pre:function(e,a,o){var t,i=n.ensureIsolate(e);i.$$animateEnterHandler=function(e,n){i.renderNode.show(t,function(){i.$$leaveDoneCallback&&i.$$leaveDoneCallback(),n.$done()})},i.$$animateLeaveHandler=function(e,n){i.$$leaveDoneCallback=n.$done};var s=e.$eval(o.faOptions);i.renderNode=new r(s),n.addRole("renderable",i),i.show(),n.sequenceWith(e,function(e){t=e.renderGate})},post:function(e,r){var a=n.ensureIsolate(e);n.registerChild(e,r,a)}}}}}]),angular.module("famous.angular").directive("faFlexibleLayout",["$famous","$famousDecorator",function(e,n){return{template:"<div></div>",restrict:"E",transclude:!0,scope:!0,compile:function(r,a,o){return{pre:function(r,a,o){var t=n.ensureIsolate(r),i=e["famous/views/FlexibleLayout"],s=(e["famous/core/ViewSequence"],e["famous/core/RenderNode"],[]),u=r.$eval(o.faOptions)||{};t.renderNode=new i(u),n.addRole("renderable",t),t.show();var c=function(){s.sort(function(e,n){return e.index-n.index}),t.renderNode.sequenceFrom(function(e){var n=[];return angular.forEach(e,function(e,r){n[r]=e.renderGate}),n}(s))};n.sequenceWith(r,function(e){s.push(e),c()},function(e){s=function(n){var r=[];return angular.forEach(n,function(n){n.id!==e&&r.push(n)}),r}(s),c()})},post:function(e,r){var a=n.ensureIsolate(e);o(e,function(e){r.find("div").append(e)}),e.$emit("registerChild",a)}}}}}]),angular.module("famous.angular").directive("faFlipper",["$famous","$famousDecorator",function(e,n){return{template:"<div></div>",restrict:"E",transclude:!0,scope:!0,compile:function(r,a,o){return{pre:function(r,a,o){var t=n.ensureIsolate(r),i=e["famous/views/Flipper"],s=r.$eval(o.faOptions)||{};t.renderNode=new i(s),n.addRole("renderable",t),t.show(),t.children=[],t.flip=function(e){t.renderNode.flip(e||r.$eval(o.faOptions))},n.sequenceWith(r,function(e){var n=t.children.length;if(0===n)t.renderNode.setFront(e.renderGate);else{if(1!==n)throw new Error("fa-flipper accepts only two child elements; more than two have been provided");t.renderNode.setBack(e.renderGate)}t.children.push(e.renderGate)},function(){t.children.splice(t.children.length-1,1)})},post:function(e,r){var a=n.ensureIsolate(e);o(e,function(e){r.find("div").append(e)}),n.registerChild(e,r,a)}}}}}]),angular.module("famous.angular").directive("faGridLayout",["$famous","$famousDecorator",function(e,n){return{template:"<div></div>",restrict:"E",transclude:!0,scope:!0,compile:function(r,a,o){return{pre:function(r,a,o){var t=n.ensureIsolate(r),i=e["famous/views/GridLayout"],s=(e["famous/core/ViewSequence"],[]),u=r.$eval(o.faOptions)||{};t.renderNode=new i(u),n.addRole("renderable",t),t.show();var c=function(){r.$$postDigest(function(){s.sort(function(e,n){return e.index-n.index}),t.renderNode.sequenceFrom(function(e){var n=[];return angular.forEach(e,function(e,r){n[r]=e.renderGate}),n}(s))})};n.sequenceWith(r,function(e){s.push(e),c()},function(e){s=function(n){var r=[];return angular.forEach(n,function(n){n.id!==e&&r.push(n)}),r}(s),c()},c)},post:function(e,r){var a=n.ensureIsolate(e);o(e,function(e){r.find("div").append(e)}),n.registerChild(e,r,a)}}}}}]),angular.module("famous.angular").directive("faHeaderFooterLayout",["$famous","$famousDecorator",function(e,n){return{template:"<div></div>",restrict:"E",transclude:!0,scope:!0,compile:function(r,a,o){var t=e["famous/views/HeaderFooterLayout"],i=e["famous/core/RenderNode"];return{pre:function(e,r,a){var o=n.ensureIsolate(e),s=(new i,new i,new i,e.$eval(a.faOptions)||{});o.renderNode=new t(s),n.addRole("renderable",o),o.show();var u=0;n.sequenceWith(e,function(e){if(u++,1===u)o.renderNode.header.add(e.renderGate);else if(2===u)o.renderNode.content.add(e.renderGate);else{if(3!==u)throw new Error("fa-header-footer-layout can accept no more than 3 children");o.renderNode.footer.add(e.renderGate)}},function(){1===u?o.renderNode.header.set({}):2===u?o.renderNode.content.set({}):3===u&&o.renderNode.footer.set({}),u--})},post:function(e,r){var a=n.ensureIsolate(e);o(e,function(e){r.find("div").append(e)}),n.registerChild(e,r,a)}}}}}]),angular.module("famous.angular").directive("faImageSurface",["$famous","$famousDecorator",function(e,n){return{scope:!0,template:'<div class="fa-image-surface"></div>',restrict:"EA",compile:function(){return{pre:function(r,a,o){{var t=n.ensureIsolate(r),i=e["famous/surfaces/ImageSurface"];e["famous/core/Transform"],e["famous/core/EventHandler"]}r.$watch(function(){return t.getProperties()},function(){t.renderNode&&t.renderNode.setProperties(t.getProperties())},!0);var s=function(e){return"fa"+e.charAt(0).toUpperCase()+e.slice(1)};t.getProperties=function(){for(var e=r.$eval(o.faProperties)||{},n=["backgroundColor","color"],a=0;a<n.length;a++){var t=n[a],i=s(t);o[i]&&(e[t]=r.$eval(o[i]))}return e},t.renderNode=new i({size:r.$eval(o.faSize),"class":r.$eval(o.class),properties:t.getProperties()}),n.addRole("renderable",t),t.show(),o.class&&t.renderNode.setClasses(o["class"].split(" "))},post:function(e,r,a){var o=n.ensureIsolate(e),t=function(){o.renderNode.setContent(a.faImageUrl)};t(),a.$observe("faImageUrl",t),n.registerChild(e,r,o)}}}}}]),angular.module("famous.angular").directive("faIndex",["$parse","$famousDecorator",function(e,n){return{restrict:"A",scope:!1,priority:16,compile:function(){return{post:function(e,r,a){var o=n.ensureIsolate(e,r);o.index=e.$eval(a.faIndex),e.$watch(function(){return e.$eval(a.faIndex)},function(){o.index=e.$eval(a.faIndex),o.updateMethod&&o.updateMethod()})}}}}}]),angular.module("famous.angular").config(["$provide",function(e){e.decorator("ngClickDirective",["$delegate","$famousDecorator","$parse","$rootElement","$famous","$timeout",function(e,n,r,a,o,t){function i(e,n,r,a){return Math.abs(e-r)<$&&Math.abs(n-a)<$}function s(e,n,r){for(var a=0;a<e.length;a+=2)if(i(e[a],e[a+1],n,r))return e.splice(a,a+2),!0;return!1}function u(e){if(!(Date.now()-l>h)){var n=e.touches&&e.touches.length?e.touches:[e],r=n[0].clientX,a=n[0].clientY;s(d,r,a)||(e.stopPropagation(),e.preventDefault(),e.target&&e.target.blur())}}function c(e){var n=e.touches&&e.touches.length?e.touches:[e],r=n[0].clientX,a=n[0].clientY;d.push(r,a),t(function(){for(var e=0;e<d.length;e+=2)if(d[e]===r&&d[e+1]===a)return void d.splice(e,e+2)},h,!1)}function f(e,n){d||(a[0].addEventListener("click",u,!0),a[0].addEventListener("touchstart",c,!0),d=[]),l=Date.now(),s(d,e,n)}{var l,d,m=e[0],p=m.compile,v=750,g=12,h=2500,$=25,y="ng-click-active";o["famous/core/Engine"]}return m.compile=function(e,n,a){return o.util.isFaElement(e)?o.util.isASurface(e)?{post:function(e,n,a){function t(){d=!1,p.removeClass(y)}var i,s,u,c,l=r(a.ngClick),d=!1,m=o.getIsolate(e),p=m.renderNode;p.on("touchstart",function(e){d=!0,i=e.target?e.target:e.srcElement,3===i.nodeType&&(i=i.parentNode),p.addClass(y),s=Date.now();var n=e.touches&&e.touches.length?e.touches:[e],r=n[0].originalEvent||n[0];u=r.clientX,c=r.clientY}),p.on("touchmove",function(){t()}),p.on("touchcancel",function(){t()}),p.on("touchend",function(e){var n=Date.now()-s,r=e.changedTouches&&e.changedTouches.length?e.changedTouches:e.touches&&e.touches.length?e.touches:[e],o=r[0].originalEvent||r[0],i=o.clientX,l=o.clientY,m=Math.sqrt(Math.pow(i-u,2)+Math.pow(l-c,2));d&&v>n&&g>m&&(f(i,l),angular.isDefined(a.disabled)&&"false"!==a.disabled||p.emit("click",[e])),t()}),p.on("click",function(n,r){e.$apply(function(){l(e,{$event:r||n})})}),p.on("mousedown",function(){p.addClass(y)}),p.on("mousemove mouseup",function(){p.removeClass(y)})}}:void 0:p(e,n,a)},e}]),angular.forEach("dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "),function(n){var r=window.$famousUtil.directiveNormalize("ng-"+n);e.decorator(r+"Directive",["$delegate","$famousDecorator","$parse","$famous",function(e,a,o,t){var i=e[0],s=i.compile;return i.compile=function(e,i,u){return t.util.isFaElement(e)?{post:function(e,t,i){var s=a.ensureIsolate(e);if(i[r]){var u=s.renderNode._eventInput||s.renderNode;u.on(n,function(n){var a=o(i[r]);a(e,{$event:n}),e.$$phase||e.$apply()})}}}:s(e,i,u)},e}])})}]),angular.module("famous.angular").directive("faModifier",["$famous","$famousDecorator","$parse","$rootScope",function(e,n,r,a){return{template:"<div></div>",transclude:!0,restrict:"EA",priority:2,scope:!0,compile:function(o,t,i){return{post:function(o,t,s){var u=n.ensureIsolate(o),c=e["famous/core/RenderNode"],f=e["famous/core/Modifier"],l=e["famous/core/Transform"],d=e["famous/physics/bodies/Particle"],m=function(e){return e.getPosition()},p=["aboutOrigin","perspective","rotate","rotateAxis","rotateX","rotateY","rotateZ","scale","skew","translate"];s.$observe("faTransformOrder",function(){var e=o.$eval(s.faTransformOrder);void 0!==e&&(p=e)});var v={};angular.forEach(p,function(n){var a=e.util.directiveNormalize("fa-"+n);s.$observe(a,function(){v[n]=r(s[a])})});var g=angular.noop;s.$observe("faTransform",function(){g=r(s.faTransform)}),u.getTransform=function(){var e=g(o);if(void 0!==e)return e instanceof Function?e():e instanceof Object&&void 0!==e.get?e.get():e;var n=[];return angular.forEach(p,function(e){var r=v[e]?v[e](o):void 0;void 0!==r&&(r instanceof Function&&(r=r()),n.push(r instanceof Array?l[e].apply(this,r):r instanceof d?l[e].apply(this,m(r)):l[e].call(this,r)))}),n.length?1===n.length?n[0]:l.multiply.apply(this,n):void 0};var h=angular.noop;s.$observe("faAlign",function(){h=r(s.faAlign)}),u.getAlign=function(){var e=h(o);return e instanceof Function?e():e instanceof Object&&void 0!==e.get?e.get():e instanceof d?m(e):e};var $=angular.noop;s.$observe("faOpacity",function(){$=r(s.faOpacity)}),u.getOpacity=function(){var e=$(o);return void 0===e?1:e instanceof Function?e():e instanceof Object&&void 0!==e.get?e.get():e instanceof d?m(e):e};var y=angular.noop;s.$observe("faSize",function(){y=r(s.faSize)}),u.getSize=function(){var e=y(o);return e instanceof Function?e():e instanceof Object&&void 0!==e.get?e.get():e instanceof d?m(e):e};var w=angular.noop;s.$observe("faOrigin",function(){w=r(s.faOrigin)}),u.getOrigin=function(){var e=w(o);return e instanceof Function?e():e instanceof Object&&void 0!==e.get?e.get():e instanceof d?m(e):e},u.modifier=new f({transform:u.getTransform,size:u.getSize,opacity:u.getOpacity,origin:u.getOrigin,align:u.getAlign}),u.renderNode=(new c).add(u.modifier),n.addRole("renderable",u),u.show(),n.sequenceWith(o,function(e){u.renderNode.add(e.renderGate)}),i(o,function(e){t.find("div").append(e)}),n.registerChild(o,t,u,function(){u.modifier.setOpacity(0)}),o.$$phase||a.$$phase||o.$apply()}}}}}]),angular.module("famous.angular").directive("faMouseover",["$parse","$famousDecorator",function(e,n){return{restrict:"A",scope:!1,compile:function(){return{post:function(r,a,o){var t=n.ensureIsolate(r);if(o.faMouseover){var i=t.renderNode._eventInput||t.renderNode;i.on("mouseover",function(n){var a=e(o.faMouseover);a(r,{$event:n}),r.$$phase||r.$apply()})}}}}}}]),angular.module("famous.angular").directive("faOptions",["$parse","$famousDecorator",function(e,n){return{restrict:"A",scope:!1,priority:-16,compile:function(){return{post:function(e,r,a){var o=n.ensureIsolate(e,r);e.$watch(function(){return e.$eval(a.faOptions)},function(){o.renderNode.setOptions(e.$eval(a.faOptions))},!0)}}}}}]),angular.module("famous.angular").directive("faPipeFrom",["$famous","$famousDecorator","$famousPipe",function(e,n,r){return{restrict:"A",scope:!1,priority:16,compile:function(){var a=e["famous/core/Engine"];return{post:function(e,o,t){var i=n.ensureIsolate(e);e.$watch(function(){return e.$eval(t.faPipeFrom)},function(e,n){var o;o=i.renderNode&&i.renderNode._isModifier?i.renderNode._object:i.renderNode?i.renderNode._eventInput||i.renderNode:a,r.unpipesFromTargets(o,n),r.pipesToTargets(o,e)}),e.$on("$destroy",function(){r.unpipesFromTargets(i.renderNode||a,e.$eval(t.faPipeFrom))})}}}}}]),angular.module("famous.angular").directive("faPipeTo",["$famous","$famousDecorator","$famousPipe",function(e,n,r){return{restrict:"A",scope:!1,priority:16,compile:function(){var a=e["famous/core/Engine"];return{post:function(e,o,t){var i=n.ensureIsolate(e);e.$watch(function(){return e.$eval(t.faPipeTo)},function(e,n){var o;o=i.renderNode&&i.renderNode._isModifier?i.renderNode._object:i.renderNode?i.renderNode._eventOutput||i.renderNode:a,r.unpipesFromTargets(n,o),r.pipesToTargets(e,o)}),e.$on("$destroy",function(){r.unpipesFromTargets(e.$eval(t.faPipeTo),i.renderNode||a)})}}}}}]),angular.module("famous.angular").directive("faRenderNode",["$famous","$famousDecorator",function(e,n){return{template:"<div></div>",transclude:!0,scope:!0,restrict:"EA",compile:function(r,a,o){return{pre:function(r,a,o){{var t=n.ensureIsolate(r),i=e["famous/core/Engine"];
e["famous/core/RenderNode"]}t.children=[],o.$observe("faPipeTo",function(e){var n=r.$eval(e);n&&i.pipe(n)}),t.renderNode=r.$eval(o.faNode),n.addRole("renderable",t),t.show(),n.sequenceWith(r,function(e){t.renderNode.add(e.renderGate),t.children.push(e)})},post:function(e,r){var a=n.ensureIsolate(e);o(e,function(e){r.find("div").append(e)}),n.registerChild(e,r,a)}}}}}]),angular.module("famous.angular").directive("faScrollView",["$famous","$famousDecorator",function(e,n){return{template:"<div></div>",restrict:"E",transclude:!0,scope:!0,compile:function(r,a,o){return{pre:function(r,a,o){var t=n.ensureIsolate(r),i=e["famous/views/Scrollview"],s=e["famous/core/ViewSequence"],u=(e["famous/core/Surface"],[]),c=r.$eval(o.faOptions)||{};t.renderNode=new i(c),n.addRole("renderable",t),t.show();var f=function(e){r.$$postDigest(function(){u.sort(function(e,n){return e.index-n.index});var n={array:function(e){var n=[];return angular.forEach(e,function(e,r){n[r]=e.renderGate}),n}(u)};e&&(n.index=r.$eval(o.faStartIndex));var a=new s(n);t.renderNode.sequenceFrom(a)})};n.sequenceWith(r,function(e){u.push(e),f(!0)},function(e){u=function(n){var r=[];return angular.forEach(n,function(n){n.id!==e&&r.push(n)}),r}(u),f()},f)},post:function(e,r){var a=n.ensureIsolate(e);o(e,function(e){r.find("div").append(e)}),n.registerChild(e,r,a)}}}}}]),angular.module("famous.angular").directive("faSequentialLayout",["$famous","$famousDecorator",function(e,n){return{template:"<div></div>",restrict:"E",transclude:!0,scope:!0,compile:function(r,a,o){return window.$f=e,{pre:function(r,a,o){var t=n.ensureIsolate(r),i=e["famous/views/SequentialLayout"],s=[],u=r.$eval(o.faOptions)||{};t.renderNode=new i(u),n.addRole("renderable",t),t.show();var c=function(){s.sort(function(e,n){return e.index-n.index}),t.renderNode.sequenceFrom(function(e){var n=[];return angular.forEach(e,function(e,r){n[r]=e.renderGate}),n}(s))};n.sequenceWith(r,function(e){s.push(e),c()},function(e){s=function(n){var r=[];return angular.forEach(n,function(n){n.id!==e&&r.push(n)}),r}(s),c()})},post:function(e,r){var a=n.ensureIsolate(e);o(e,function(e){r.find("div").append(e)}),n.registerChild(e,r,a)}}}}}]),angular.module("famous.angular").directive("faSurface",["$famous","$famousDecorator","$interpolate","$controller","$compile",function(e,n){return{scope:!0,transclude:!0,template:'<div class="fa-surface"></div>',restrict:"EA",compile:function(r,a,o){return{pre:function(r,a,o){{var t=n.ensureIsolate(r),i=e["famous/core/Surface"];e["famous/core/Transform"],e["famous/core/EventHandler"]}r.$watch(function(){return t.getProperties()},function(){t.renderNode&&t.renderNode.setProperties(t.getProperties())},!0);var s=function(e){return"fa"+e.charAt(0).toUpperCase()+e.slice(1)};t.getProperties=function(){for(var e=r.$eval(o.faProperties)||{},n=["backgroundColor","margin","padding","color","pointerEvents","zIndex"],a=0;a<n.length;a++){var t=n[a],i=s(t);o[i]&&(e[t]=r.$eval(o[i]))}return e};var u=[];o.$observe("faSize",function(){t.renderNode.setSize(r.$eval(o.faSize)),u.push(new Date),u.length>5&&(u[4]-u[0]<=1e3&&console.warn("Using fa-size on fa-surface to animate is significantly non-performant, prefer to use fa-size on an fa-modifier surrounding a fa-surface"),u.shift())}),t.renderNode=new i({size:r.$eval(o.faSize),properties:t.getProperties()}),n.addRole("renderable",t),t.show(),o.class&&t.renderNode.setClasses(o["class"].split(" ")),n.sequenceWith(r,function(){throw new Error("Surfaces are leaf nodes of the Famo.us render tree and cannot accept rendernode children.  To include additional Famo.us content inside of a fa-surface, that content must be enclosed in an additional fa-app.")})},post:function(e,r){var a=n.ensureIsolate(e),t=function(){a.renderNode.setContent(r[0].querySelector("div.fa-surface"))};t(),o(e,function(e){angular.element(r[0].querySelectorAll("div.fa-surface")).append(e)}),n.registerChild(e,r,a,function(){})}}}}}]),angular.module("famous.angular").directive("faTap",["$parse","$famousDecorator",function(e,n){return{restrict:"A",compile:function(){return{post:function(r,a,o){var t=n.ensureIsolate(r);if(o.faTap){var i=t.renderNode._eventInput||t.renderNode,s=!1;i.on("touchmove",function(e){return s=!0,e}),i.on("tap",function(n){if(!s){var a=e(o.faTap);a(r,{$event:n}),r.$$phase||r.$apply()}s=!1})}}}}}}]),angular.module("famous.angular").directive("faTouchend",["$parse","$famousDecorator",function(e,n){return{restrict:"A",scope:!1,compile:function(){return{post:function(r,a,o){var t=n.ensureIsolate(r);if(o.faTouchend){var i=t.renderNode._eventInput||t.renderNode;i.on("touchend",function(n){var a=e(o.faTouchend);a(r,{$event:n}),r.$$phase||r.$apply()})}}}}}}]),angular.module("famous.angular").directive("faTouchmove",["$parse","$famousDecorator",function(e,n){return{restrict:"A",scope:!1,compile:function(){return{post:function(r,a,o){var t=n.ensureIsolate(r);if(o.faTouchmove){var i=t.renderNode._eventInput||t.renderNode;i.on("touchmove",function(n){var a=e(o.faTouchmove);a(r,{$event:n}),r.$$phase||r.$apply()})}}}}}}]),angular.module("famous.angular").directive("faTouchstart",["$parse","$famousDecorator",function(e,n){return{restrict:"A",scope:!1,compile:function(){return{post:function(r,a,o){var t=n.ensureIsolate(r);if(o.faTouchstart){var i=t.renderNode._eventInput||t.renderNode;i.on("touchstart",function(n){var a=e(o.faTouchstart);a(r,{$event:n}),r.$$phase||r.$apply()})}}}}}}]),angular.module("famous.angular").directive("faVideoSurface",["$famous","$famousDecorator",function(e,n){return{scope:!0,transclude:!0,template:'<div class="fa-video-surface"></div>',restrict:"EA",compile:function(){return{pre:function(r,a,o){var t=n.ensureIsolate(r),i=e["famous/surfaces/VideoSurface"];r.$watch(function(){return r.$eval(o.faOptions)},function(e,n){t.renderNode.setOptions(n)},!0),t.renderNode=new i({"class":r.$eval(o.class)}),n.addRole("renderable",t),t.show(),o.class&&t.renderNode.setClasses(o["class"].split(" ")),n.sequenceWith(r,function(){throw new Error("Surfaces are leaf nodes of the Famo.us render tree and cannot accept rendernode children.  To include additional Famo.us content inside of a fa-surface, that content must be enclosed in an additional fa-app.")})},post:function(e,r,a){var o=n.ensureIsolate(e),t=function(){o.renderNode.setContent(a.faVideoUrl)};t(),a.$observe("faVideoUrl",t),n.registerChild(e,r,o)}}}}}]),angular.module("famous.angular").directive("faView",["$famous","$famousDecorator",function(e,n){return{template:"<div></div>",transclude:!0,scope:!0,restrict:"EA",compile:function(r,a,o){var t=e["famous/core/View"];return{pre:function(e,r,a){var o=n.ensureIsolate(e);o.children=[],o.renderNode=new t({size:e.$eval(a.faSize)||[void 0,void 0]}),n.addRole("renderable",o),o.show(),n.sequenceWith(e,function(e){o.renderNode.add(e.renderGate),o.children.push(e)})},post:function(e,r){var a=n.ensureIsolate(e);o(e,function(e){r.find("div").append(e)}),n.registerChild(e,r,a)}}}}}]);
}).call(global, module, undefined, undefined);

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"/home/ubuntu/workspace/bower_components/angular-animate/angular-animate.min.js":"/home/ubuntu/workspace/bower_components/angular-animate/angular-animate.min.js","/home/ubuntu/workspace/bower_components/angular-sanitize/angular-sanitize.min.js":"/home/ubuntu/workspace/bower_components/angular-sanitize/angular-sanitize.min.js","/home/ubuntu/workspace/bower_components/angular-ui-router/release/angular-ui-router.min.js":"/home/ubuntu/workspace/bower_components/angular-ui-router/release/angular-ui-router.min.js","/home/ubuntu/workspace/bower_components/angular/angular.min.js":"/home/ubuntu/workspace/bower_components/angular/angular.min.js","/home/ubuntu/workspace/bower_components/famous/dist/famous-global.min.js":"/home/ubuntu/workspace/bower_components/famous/dist/famous-global.min.js","famous-polyfills":"/home/ubuntu/workspace/node_modules/famous-polyfills/index.js"}],"/home/ubuntu/workspace/bower_components/famous/dist/famous-global.min.js":[function(require,module,exports){
(function (global){
;__browserify_shim_require__=require;(function browserifyShim(module, exports, require, define, browserify_shim__define__module__export__) {
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 *
 * @copyright Famous Industries, Inc. 2014
 */
!function(t){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var i;"undefined"!=typeof window?i=window:"undefined"!=typeof global?i=global:"undefined"!=typeof self&&(i=self),i.famous=t()}}(function(){return function t(i,e,n){function o(r,a){if(!e[r]){if(!i[r]){var h="function"==typeof require&&require;if(!a&&h)return h(r,!0);if(s)return s(r,!0);var c=new Error("Cannot find module '"+r+"'");throw c.code="MODULE_NOT_FOUND",c}var p=e[r]={exports:{}};i[r][0].call(p.exports,function(t){var e=i[r][1][t];return o(e?e:t)},p,p.exports,t,i,e,n)}return e[r].exports}for(var s="function"==typeof require&&require,r=0;r<n.length;r++)o(n[r]);return o}({1:[function(t,i){function e(t){return[t.clientWidth,t.clientHeight]}function n(t){this.container=t,this._allocator=new r(t),this._node=new o,this._eventOutput=new s,this._size=e(this.container),this._perspectiveState=new h(0),this._perspective=void 0,this._nodeContext={allocator:this._allocator,transform:a.identity,opacity:1,origin:c,align:c,size:this._size},this._eventOutput.on("resize",function(){this.setSize(e(this.container))}.bind(this))}var o=t("./RenderNode"),s=t("./EventHandler"),r=t("./ElementAllocator"),a=t("./Transform"),h=t("../transitions/Transitionable"),c=[0,0],p=!("perspective"in document.documentElement.style),u=p?function(t,i){t.style.webkitPerspective=i?i.toFixed()+"px":""}:function(t,i){t.style.perspective=i?i.toFixed()+"px":""};n.prototype.getAllocator=function(){return this._allocator},n.prototype.add=function(t){return this._node.add(t)},n.prototype.migrate=function(t){t!==this.container&&(this.container=t,this._allocator.migrate(t))},n.prototype.getSize=function(){return this._size},n.prototype.setSize=function(t){t||(t=e(this.container)),this._size[0]=t[0],this._size[1]=t[1]},n.prototype.update=function(t){t&&(t.transform&&(this._nodeContext.transform=t.transform),t.opacity&&(this._nodeContext.opacity=t.opacity),t.origin&&(this._nodeContext.origin=t.origin),t.align&&(this._nodeContext.align=t.align),t.size&&(this._nodeContext.size=t.size));var i=this._perspectiveState.get();i!==this._perspective&&(u(this.container,i),this._perspective=i),this._node.commit(this._nodeContext)},n.prototype.getPerspective=function(){return this._perspectiveState.get()},n.prototype.setPerspective=function(t,i,e){return this._perspectiveState.set(t,i,e)},n.prototype.emit=function(t,i){return this._eventOutput.emit(t,i)},n.prototype.on=function(t,i){return this._eventOutput.on(t,i)},n.prototype.removeListener=function(t,i){return this._eventOutput.removeListener(t,i)},n.prototype.pipe=function(t){return this._eventOutput.pipe(t)},n.prototype.unpipe=function(t){return this._eventOutput.unpipe(t)},i.exports=n},{"../transitions/Transitionable":88,"./ElementAllocator":2,"./EventHandler":7,"./RenderNode":11,"./Transform":15}],2:[function(t,i){function e(t){t||(t=document.createDocumentFragment()),this.container=t,this.detachedNodes={},this.nodeCount=0}e.prototype.migrate=function(t){var i=this.container;if(t!==i){if(i instanceof DocumentFragment)t.appendChild(i);else for(;i.hasChildNodes();)t.appendChild(i.removeChild(i.firstChild));this.container=t}},e.prototype.allocate=function(t){t=t.toLowerCase(),t in this.detachedNodes||(this.detachedNodes[t]=[]);var i,e=this.detachedNodes[t];return e.length>0?i=e.pop():(i=document.createElement(t),this.container.appendChild(i)),this.nodeCount++,i},e.prototype.deallocate=function(t){var i=t.nodeName.toLowerCase(),e=this.detachedNodes[i];e.push(t),this.nodeCount--},e.prototype.getNodeCount=function(){return this.nodeCount},i.exports=e},{}],3:[function(t,i){function e(t){this._matrix=null,this._opacity=1,this._origin=null,this._size=null,this._eventOutput=new c,this._eventOutput.bindThis(this),this.eventForwarder=function(t){this._eventOutput.emit(t.type,t)}.bind(this),this.id=h.register(this),this._element=null,this._sizeDirty=!1,this._originDirty=!1,this._transformDirty=!1,this._invisible=!1,t&&this.attach(t)}function n(t){for(var i in this._eventOutput.listeners)t.addEventListener(i,this.eventForwarder)}function o(t){for(var i in this._eventOutput.listeners)t.removeEventListener(i,this.eventForwarder)}function s(t){t[12]=Math.round(t[12]*l)/l,t[13]=Math.round(t[13]*l)/l;for(var i="matrix3d(",e=0;15>e;e++)i+=t[e]<1e-6&&t[e]>-1e-6?"0,":t[e]+",";return i+=t[15]+")"}function r(t){return 100*t[0]+"% "+100*t[1]+"%"}function a(t,i){return t&&i?t[0]!==i[0]||t[1]!==i[1]:t!==i}var h=t("./Entity"),c=t("./EventHandler"),p=t("./Transform"),u=!("transform"in document.documentElement.style),l=window.devicePixelRatio||1;e.prototype.on=function(t,i){this._element&&this._element.addEventListener(t,this.eventForwarder),this._eventOutput.on(t,i)},e.prototype.removeListener=function(t,i){this._eventOutput.removeListener(t,i)},e.prototype.emit=function(t,i){i&&!i.origin&&(i.origin=this);var e=this._eventOutput.emit(t,i);return e&&i&&i.stopPropagation&&i.stopPropagation(),e},e.prototype.pipe=function(t){return this._eventOutput.pipe(t)},e.prototype.unpipe=function(t){return this._eventOutput.unpipe(t)},e.prototype.render=function(){return this.id};var f;f=navigator.userAgent.toLowerCase().indexOf("firefox")>-1?function(t,i){t.style.zIndex=1e6*i[14]|0,t.style.transform=s(i)}:u?function(t,i){t.style.webkitTransform=s(i)}:function(t,i){t.style.transform=s(i)};var d=u?function(t,i){t.style.webkitTransformOrigin=r(i)}:function(t,i){t.style.transformOrigin=r(i)},_=u?function(t){t.style.webkitTransform="scale3d(0.0001,0.0001,0.0001)",t.style.opacity=0}:function(t){t.style.transform="scale3d(0.0001,0.0001,0.0001)",t.style.opacity=0};e.prototype.commit=function(t){var i=this._element;if(i){{var e=t.transform,n=t.opacity,o=t.origin;t.size}if(!e&&this._matrix)return this._matrix=null,this._opacity=0,void _(i);if(a(this._origin,o)&&(this._originDirty=!0),p.notEquals(this._matrix,e)&&(this._transformDirty=!0),this._invisible&&(this._invisible=!1,this._element.style.display=""),this._opacity!==n&&(this._opacity=n,i.style.opacity=n>=1?"0.999999":n),this._transformDirty||this._originDirty||this._sizeDirty){this._sizeDirty&&(this._sizeDirty=!1),this._originDirty&&(o?(this._origin||(this._origin=[0,0]),this._origin[0]=o[0],this._origin[1]=o[1]):this._origin=null,d(i,this._origin),this._originDirty=!1),e||(e=p.identity),this._matrix=e;var s=this._size?p.thenMove(e,[-this._size[0]*o[0],-this._size[1]*o[1],0]):e;f(i,s),this._transformDirty=!1}}},e.prototype.cleanup=function(){this._element&&(this._invisible=!0,this._element.style.display="none")},e.prototype.attach=function(t){this._element=t,n.call(this,t)},e.prototype.detach=function(){var t=this._element;return t&&(o.call(this,t),this._invisible&&(this._invisible=!1,this._element.style.display="")),this._element=null,t},i.exports=e},{"./Entity":5,"./EventHandler":7,"./Transform":15}],4:[function(t,i){function e(){v.runLoop?(p.step(),window.requestAnimationFrame(e)):_=!1}function n(){for(var t=0;t<u.length;t++)u[t].emit("resize");g.emit("resize")}function o(){window.addEventListener("touchmove",function(t){t.preventDefault()},!0),document.body.classList.add("famous-root"),document.documentElement.classList.add("famous-root")}var s,r,a=t("./Context"),h=t("./EventHandler"),c=t("./OptionsManager"),p={},u=[],l=[],f=[],d=Date.now(),_=!0,y={},g=new h,v={containerType:"div",containerClass:"famous-container",fpsCap:void 0,runLoop:!0,appMode:!0},m=new c(v),O=10;p.step=function(){var t=Date.now();if(!(r&&r>t-d)){var i=0;for(s=t-d,d=t,g.emit("prerender"),i=0;i<l.length;i++)l[i].call(this);for(l.splice(0);f.length&&Date.now()-t<O;)f.shift().call(this);for(i=0;i<u.length;i++)u[i].update();g.emit("postrender")}},window.requestAnimationFrame(e),window.addEventListener("resize",n,!1),n();var S=!1;p.pipe=function(t){return t.subscribe instanceof Function?t.subscribe(p):g.pipe(t)},p.unpipe=function(t){return t.unsubscribe instanceof Function?t.unsubscribe(p):g.unpipe(t)},p.on=function(t,i){return t in y||(y[t]=g.emit.bind(g,t),document.body?document.body.addEventListener(t,y[t]):p.nextTick(function(t,i){document.body.addEventListener(t,i)}.bind(this,t,y[t]))),g.on(t,i)},p.emit=function(t,i){return g.emit(t,i)},p.removeListener=function(t,i){return g.removeListener(t,i)},p.getFPS=function(){return 1e3/s},p.setFPSCap=function(t){r=Math.floor(1e3/t)},p.getOptions=function(t){return m.getOptions(t)},p.setOptions=function(){return m.setOptions.apply(m,arguments)},p.createContext=function(t){!S&&v.appMode&&p.nextTick(o);var i=!1;t||(t=document.createElement(v.containerType),t.classList.add(v.containerClass),i=!0);var e=new a(t);return p.registerContext(e),i&&p.nextTick(function(t,i){document.body.appendChild(i),t.emit("resize")}.bind(this,e,t)),e},p.registerContext=function(t){return u.push(t),t},p.getContexts=function(){return u},p.deregisterContext=function(t){var i=u.indexOf(t);i>=0&&u.splice(i,1)},p.nextTick=function(t){l.push(t)},p.defer=function(t){f.push(t)},m.on("change",function(t){"fpsCap"===t.id?p.setFPSCap(t.value):"runLoop"===t.id&&!_&&t.value&&(_=!0,window.requestAnimationFrame(e))}),i.exports=p},{"./Context":1,"./EventHandler":7,"./OptionsManager":10}],5:[function(t,i){function e(t){return r[t]}function n(t,i){r[t]=i}function o(t){var i=r.length;return n(i,t),i}function s(t){n(t,null)}var r=[];i.exports={register:o,unregister:s,get:e,set:n}},{}],6:[function(t,i){function e(){this.listeners={},this._owner=this}e.prototype.emit=function(t,i){var e=this.listeners[t];if(e)for(var n=0;n<e.length;n++)e[n].call(this._owner,i);return this},e.prototype.on=function(t,i){t in this.listeners||(this.listeners[t]=[]);var e=this.listeners[t].indexOf(i);return 0>e&&this.listeners[t].push(i),this},e.prototype.addListener=e.prototype.on,e.prototype.removeListener=function(t,i){var e=this.listeners[t];if(void 0!==e){var n=e.indexOf(i);n>=0&&e.splice(n,1)}return this},e.prototype.bindThis=function(t){this._owner=t},i.exports=e},{}],7:[function(t,i){function e(){n.apply(this,arguments),this.downstream=[],this.downstreamFn=[],this.upstream=[],this.upstreamListeners={}}var n=t("./EventEmitter");e.prototype=Object.create(n.prototype),e.prototype.constructor=e,e.setInputHandler=function(t,i){t.trigger=i.trigger.bind(i),i.subscribe&&i.unsubscribe&&(t.subscribe=i.subscribe.bind(i),t.unsubscribe=i.unsubscribe.bind(i))},e.setOutputHandler=function(t,i){i instanceof e&&i.bindThis(t),t.pipe=i.pipe.bind(i),t.unpipe=i.unpipe.bind(i),t.on=i.on.bind(i),t.addListener=t.on,t.removeListener=i.removeListener.bind(i)},e.prototype.emit=function(t,i){n.prototype.emit.apply(this,arguments);var e=0;for(e=0;e<this.downstream.length;e++)this.downstream[e].trigger&&this.downstream[e].trigger(t,i);for(e=0;e<this.downstreamFn.length;e++)this.downstreamFn[e](t,i);return this},e.prototype.trigger=e.prototype.emit,e.prototype.pipe=function(t){if(t.subscribe instanceof Function)return t.subscribe(this);var i=t instanceof Function?this.downstreamFn:this.downstream,e=i.indexOf(t);return 0>e&&i.push(t),t instanceof Function?t("pipe",null):t.trigger&&t.trigger("pipe",null),t},e.prototype.unpipe=function(t){if(t.unsubscribe instanceof Function)return t.unsubscribe(this);var i=t instanceof Function?this.downstreamFn:this.downstream,e=i.indexOf(t);return e>=0?(i.splice(e,1),t instanceof Function?t("unpipe",null):t.trigger&&t.trigger("unpipe",null),t):!1},e.prototype.on=function(t){if(n.prototype.on.apply(this,arguments),!(t in this.upstreamListeners)){var i=this.trigger.bind(this,t);this.upstreamListeners[t]=i;for(var e=0;e<this.upstream.length;e++)this.upstream[e].on(t,i)}return this},e.prototype.addListener=e.prototype.on,e.prototype.subscribe=function(t){var i=this.upstream.indexOf(t);if(0>i){this.upstream.push(t);for(var e in this.upstreamListeners)t.on(e,this.upstreamListeners[e])}return this},e.prototype.unsubscribe=function(t){var i=this.upstream.indexOf(t);if(i>=0){this.upstream.splice(i,1);for(var e in this.upstreamListeners)t.removeListener(e,this.upstreamListeners[e])}return this},i.exports=e},{"./EventEmitter":6}],8:[function(t,i){function e(t){s.call(this,t),this._shouldRecalculateSize=!1,this._container=document.createDocumentFragment(),this.context=new n(this._container),this.setContent(this._container),this._groupSize=[void 0,void 0]}var n=t("./Context"),o=t("./Transform"),s=t("./Surface");e.SIZE_ZERO=[0,0],e.prototype=Object.create(s.prototype),e.prototype.elementType="div",e.prototype.elementClass="famous-group",e.prototype.add=function(){return this.context.add.apply(this.context,arguments)},e.prototype.render=function(){return s.prototype.render.call(this)},e.prototype.deploy=function(t){this.context.migrate(t)},e.prototype.recall=function(){this._container=document.createDocumentFragment(),this.context.migrate(this._container)},e.prototype.commit=function(t){var i=t.transform,n=t.origin,r=t.opacity,a=t.size,h=s.prototype.commit.call(this,{allocator:t.allocator,transform:o.thenMove(i,[-n[0]*a[0],-n[1]*a[1],0]),opacity:r,origin:n,size:e.SIZE_ZERO});return(a[0]!==this._groupSize[0]||a[1]!==this._groupSize[1])&&(this._groupSize[0]=a[0],this._groupSize[1]=a[1],this.context.setSize(a)),this.context.update({transform:o.translate(-n[0]*a[0],-n[1]*a[1],0),origin:n,size:a}),h},i.exports=e},{"./Context":1,"./Surface":14,"./Transform":15}],9:[function(t,i){function e(t){this._transformGetter=null,this._opacityGetter=null,this._originGetter=null,this._alignGetter=null,this._sizeGetter=null,this._proportionGetter=null,this._legacyStates={},this._output={transform:o.identity,opacity:1,origin:null,align:null,size:null,proportions:null,target:null},t&&(t.transform&&this.transformFrom(t.transform),void 0!==t.opacity&&this.opacityFrom(t.opacity),t.origin&&this.originFrom(t.origin),t.align&&this.alignFrom(t.align),t.size&&this.sizeFrom(t.size),t.proportions&&this.proportionsFrom(t.proportions))}function n(){this._transformGetter&&(this._output.transform=this._transformGetter()),this._opacityGetter&&(this._output.opacity=this._opacityGetter()),this._originGetter&&(this._output.origin=this._originGetter()),this._alignGetter&&(this._output.align=this._alignGetter()),this._sizeGetter&&(this._output.size=this._sizeGetter()),this._proportionGetter&&(this._output.proportions=this._proportionGetter())}var o=t("./Transform"),s=t("../transitions/Transitionable"),r=t("../transitions/TransitionableTransform");e.prototype.transformFrom=function(t){return t instanceof Function?this._transformGetter=t:t instanceof Object&&t.get?this._transformGetter=t.get.bind(t):(this._transformGetter=null,this._output.transform=t),this},e.prototype.opacityFrom=function(t){return t instanceof Function?this._opacityGetter=t:t instanceof Object&&t.get?this._opacityGetter=t.get.bind(t):(this._opacityGetter=null,this._output.opacity=t),this},e.prototype.originFrom=function(t){return t instanceof Function?this._originGetter=t:t instanceof Object&&t.get?this._originGetter=t.get.bind(t):(this._originGetter=null,this._output.origin=t),this},e.prototype.alignFrom=function(t){return t instanceof Function?this._alignGetter=t:t instanceof Object&&t.get?this._alignGetter=t.get.bind(t):(this._alignGetter=null,this._output.align=t),this},e.prototype.sizeFrom=function(t){return t instanceof Function?this._sizeGetter=t:t instanceof Object&&t.get?this._sizeGetter=t.get.bind(t):(this._sizeGetter=null,this._output.size=t),this},e.prototype.proportionsFrom=function(t){return t instanceof Function?this._proportionGetter=t:t instanceof Object&&t.get?this._proportionGetter=t.get.bind(t):(this._proportionGetter=null,this._output.proportions=t),this},e.prototype.setTransform=function(t,i,e){return i||this._legacyStates.transform?(this._legacyStates.transform||(this._legacyStates.transform=new r(this._output.transform)),this._transformGetter||this.transformFrom(this._legacyStates.transform),this._legacyStates.transform.set(t,i,e),this):this.transformFrom(t)},e.prototype.setOpacity=function(t,i,e){return i||this._legacyStates.opacity?(this._legacyStates.opacity||(this._legacyStates.opacity=new s(this._output.opacity)),this._opacityGetter||this.opacityFrom(this._legacyStates.opacity),this._legacyStates.opacity.set(t,i,e)):this.opacityFrom(t)},e.prototype.setOrigin=function(t,i,e){return i||this._legacyStates.origin?(this._legacyStates.origin||(this._legacyStates.origin=new s(this._output.origin||[0,0])),this._originGetter||this.originFrom(this._legacyStates.origin),this._legacyStates.origin.set(t,i,e),this):this.originFrom(t)},e.prototype.setAlign=function(t,i,e){return i||this._legacyStates.align?(this._legacyStates.align||(this._legacyStates.align=new s(this._output.align||[0,0])),this._alignGetter||this.alignFrom(this._legacyStates.align),this._legacyStates.align.set(t,i,e),this):this.alignFrom(t)},e.prototype.setSize=function(t,i,e){return t&&(i||this._legacyStates.size)?(this._legacyStates.size||(this._legacyStates.size=new s(this._output.size||[0,0])),this._sizeGetter||this.sizeFrom(this._legacyStates.size),this._legacyStates.size.set(t,i,e),this):this.sizeFrom(t)},e.prototype.setProportions=function(t,i,e){return t&&(i||this._legacyStates.proportions)?(this._legacyStates.proportions||(this._legacyStates.proportions=new s(this._output.proportions||[0,0])),this._proportionGetter||this.proportionsFrom(this._legacyStates.proportions),this._legacyStates.proportions.set(t,i,e),this):this.proportionsFrom(t)},e.prototype.halt=function(){this._legacyStates.transform&&this._legacyStates.transform.halt(),this._legacyStates.opacity&&this._legacyStates.opacity.halt(),this._legacyStates.origin&&this._legacyStates.origin.halt(),this._legacyStates.align&&this._legacyStates.align.halt(),this._legacyStates.size&&this._legacyStates.size.halt(),this._legacyStates.proportions&&this._legacyStates.proportions.halt(),this._transformGetter=null,this._opacityGetter=null,this._originGetter=null,this._alignGetter=null,this._sizeGetter=null,this._proportionGetter=null},e.prototype.getTransform=function(){return this._transformGetter()},e.prototype.getFinalTransform=function(){return this._legacyStates.transform?this._legacyStates.transform.getFinal():this._output.transform},e.prototype.getOpacity=function(){return this._opacityGetter()},e.prototype.getOrigin=function(){return this._originGetter()},e.prototype.getAlign=function(){return this._alignGetter()},e.prototype.getSize=function(){return this._sizeGetter?this._sizeGetter():this._output.size},e.prototype.getProportions=function(){return this._proportionGetter?this._proportionGetter():this._output.proportions},e.prototype.modify=function(t){return n.call(this),this._output.target=t,this._output},i.exports=e},{"../transitions/Transitionable":88,"../transitions/TransitionableTransform":89,"./Transform":15}],10:[function(t,i){function e(t){this._value=t,this.eventOutput=null}function n(){this.eventOutput=new o,this.eventOutput.bindThis(this),o.setOutputHandler(this,this.eventOutput)}var o=t("./EventHandler");e.patch=function(t){for(var i=new e(t),n=1;n<arguments.length;n++)i.patch(arguments[n]);return t},e.prototype.patch=function(){for(var t=this._value,i=0;i<arguments.length;i++){var e=arguments[i];for(var n in e)n in t&&e[n]&&e[n].constructor===Object&&t[n]&&t[n].constructor===Object?(t.hasOwnProperty(n)||(t[n]=Object.create(t[n])),this.key(n).patch(e[n]),this.eventOutput&&this.eventOutput.emit("change",{id:n,value:this.key(n).value()})):this.set(n,e[n])}return this},e.prototype.setOptions=e.prototype.patch,e.prototype.key=function(t){var i=new e(this._value[t]);return(!(i._value instanceof Object)||i._value instanceof Array)&&(i._value={}),i},e.prototype.get=function(t){return t?this._value[t]:this._value},e.prototype.getOptions=e.prototype.get,e.prototype.set=function(t,i){var e=this.get(t);return this._value[t]=i,this.eventOutput&&i!==e&&this.eventOutput.emit("change",{id:t,value:i}),this},e.prototype.on=function(){return n.call(this),this.on.apply(this,arguments)},e.prototype.removeListener=function(){return n.call(this),this.removeListener.apply(this,arguments)},e.prototype.pipe=function(){return n.call(this),this.pipe.apply(this,arguments)},e.prototype.unpipe=function(){return n.call(this),this.unpipe.apply(this,arguments)},i.exports=e},{"./EventHandler":7}],11:[function(t,i){function e(t){this._object=null,this._child=null,this._hasMultipleChildren=!1,this._isRenderable=!1,this._isModifier=!1,this._resultCache={},this._prevResults={},this._childResult=null,t&&this.set(t)}function n(t,i,e){for(var r=s.parse(t,i),a=Object.keys(r),h=0;h<a.length;h++){var c=a[h],p=o.get(c),u=r[c];u.allocator=i.allocator;var l=p.commit(u);l?n(l,i,e):e[c]=u}}var o=t("./Entity"),s=t("./SpecParser");e.prototype.add=function(t){var i=t instanceof e?t:new e(t);return this._child instanceof Array?this._child.push(i):this._child?(this._child=[this._child,i],this._hasMultipleChildren=!0,this._childResult=[]):this._child=i,i},e.prototype.get=function(){return this._object||(this._hasMultipleChildren?null:this._child?this._child.get():null)},e.prototype.set=function(t){return this._childResult=null,this._hasMultipleChildren=!1,this._isRenderable=t.render?!0:!1,this._isModifier=t.modify?!0:!1,this._object=t,this._child=null,t instanceof e?t:this},e.prototype.getSize=function(){var t=null,i=this.get();return i&&i.getSize&&(t=i.getSize()),!t&&this._child&&this._child.getSize&&(t=this._child.getSize()),t},e.prototype.commit=function(t){for(var i=Object.keys(this._prevResults),e=0;e<i.length;e++){var s=i[e];if(void 0===this._resultCache[s]){var r=o.get(s);r.cleanup&&r.cleanup(t.allocator)}}this._prevResults=this._resultCache,this._resultCache={},n(this.render(),t,this._resultCache)},e.prototype.render=function(){if(this._isRenderable)return this._object.render();var t=null;if(this._hasMultipleChildren){t=this._childResult;for(var i=this._child,e=0;e<i.length;e++)t[e]=i[e].render()}else this._child&&(t=this._child.render());return this._isModifier?this._object.modify(t):t},i.exports=e},{"./Entity":5,"./SpecParser":13}],12:[function(t,i){function e(t){this.id=null,this._objects=null,this.node=new c,this._definition=null,t&&this.load(t)}function n(t){for(var i in p)if(i in t){var e=t[i];return e instanceof Array||(e=[e]),p[i].apply(this,e)}}function o(t){var i=t.transform,e=t.opacity,o=t.origin,s=t.align,r=t.size,c=a.identity;if(i instanceof Array)if(16===i.length&&"number"==typeof i[0])c=i;else for(var p=0;p<i.length;p++)c=a.multiply(c,n(i[p]));else i instanceof Function?c=i:i instanceof Object&&(c=n(i));var u=new h({transform:c,opacity:e,origin:o,align:s,size:r});return u}function s(t){for(var i=new c,e=0;e<t.length;e++){var n=r.call(this,t[e]);n&&i.add(n)}return i}function r(t){var i,e;if(t instanceof Array)i=s.call(this,t);else if(e=this._objects.length,t.render&&t.render instanceof Function)i=t;else if(t.target){var n=r.call(this,t.target),a=o.call(this,t);i=new c(a),i.add(n),t.id&&(this.id[t.id]=a)}else t.id&&(i=new c,this.id[t.id]=i);return this._objects[e]=i,i}var a=t("./Transform"),h=t("./Modifier"),c=t("./RenderNode"),p={translate:a.translate,rotate:a.rotate,rotateX:a.rotateX,rotateY:a.rotateY,rotateZ:a.rotateZ,rotateAxis:a.rotateAxis,scale:a.scale,skew:a.skew,matrix3d:function(){return arguments}};e.prototype.create=function(){return new e(this._definition)},e.prototype.load=function(t){this._definition=t,this.id={},this._objects=[],this.node.set(r.call(this,t))},e.prototype.add=function(){return this.node.add.apply(this.node,arguments)},e.prototype.render=function(){return this.node.render.apply(this.node,arguments)},i.exports=e},{"./Modifier":9,"./RenderNode":11,"./Transform":15}],13:[function(t,i){function e(){this.result={}}function n(t,i){return[t[0]*i[0]+t[1]*i[4]+t[2]*i[8],t[0]*i[1]+t[1]*i[5]+t[2]*i[9],t[0]*i[2]+t[1]*i[6]+t[2]*i[10]]}var o=t("./Transform");e._instance=new e,e.parse=function(t,i){return e._instance.parse(t,i)},e.prototype.parse=function(t,i){return this.reset(),this._parseSpec(t,i,o.identity),this.result},e.prototype.reset=function(){this.result={}};var s=[0,0];e.prototype._parseSpec=function(t,i,e){var r,a,h,c,p,u,l;if("number"==typeof t){if(r=t,h=i.transform,u=i.align||s,i.size&&u&&(u[0]||u[1])){var f=[u[0]*i.size[0],u[1]*i.size[1],0];h=o.thenMove(h,n(f,e))}this.result[r]={transform:h,opacity:i.opacity,origin:i.origin||s,align:i.align||s,size:i.size}}else{if(!t)return;if(t instanceof Array)for(var d=0;d<t.length;d++)this._parseSpec(t[d],i,e);else{a=t.target,h=i.transform,c=i.opacity,p=i.origin,u=i.align,l=i.size;var _=e;if(void 0!==t.opacity&&(c=i.opacity*t.opacity),t.transform&&(h=o.multiply(i.transform,t.transform)),t.origin&&(p=t.origin,_=i.transform),t.align&&(u=t.align),t.size||t.proportions){var y=l;l=[l[0],l[1]],t.size&&(void 0!==t.size[0]&&(l[0]=t.size[0]),void 0!==t.size[1]&&(l[1]=t.size[1])),t.proportions&&(void 0!==t.proportions[0]&&(l[0]=l[0]*t.proportions[0]),void 0!==t.proportions[1]&&(l[1]=l[1]*t.proportions[1])),y&&(u&&(u[0]||u[1])&&(h=o.thenMove(h,n([u[0]*y[0],u[1]*y[1],0],e))),p&&(p[0]||p[1])&&(h=o.moveThen([-p[0]*l[0],-p[1]*l[1],0],h))),_=i.transform,p=null,u=null}this._parseSpec(a,{transform:h,opacity:c,origin:p,align:u,size:l},_)}}},i.exports=e},{"./Transform":15}],14:[function(t,i){function e(t){c.call(this),this.options={},this.properties={},this.attributes={},this.content="",this.classList=[],this.size=null,this._classesDirty=!0,this._stylesDirty=!0,this._attributesDirty=!0,this._sizeDirty=!0,this._contentDirty=!0,this._trueSizeCheck=!0,this._dirtyClasses=[],t&&this.setOptions(t),this._currentTarget=null}function n(t){for(var i=0;i<this._dirtyClasses.length;i++)t.classList.remove(this._dirtyClasses[i]);this._dirtyClasses=[]}function o(t){for(var i in this.properties)t.style[i]=this.properties[i]}function s(t){for(var i in this.properties)t.style[i]=""}function r(t){for(var i in this.attributes)t.setAttribute(i,this.attributes[i])}function a(t){for(var i in this.attributes)t.removeAttribute(i)}function h(t,i){return t&&i?t[0]!==i[0]||t[1]!==i[1]:t!==i}var c=t("./ElementOutput");e.prototype=Object.create(c.prototype),e.prototype.constructor=e,e.prototype.elementType="div",e.prototype.elementClass="famous-surface",e.prototype.setAttributes=function(t){for(var i in t){if("style"===i)throw new Error('Cannot set styles via "setAttributes" as it will break Famo.us.  Use "setProperties" instead.');this.attributes[i]=t[i]}this._attributesDirty=!0},e.prototype.getAttributes=function(){return this.attributes},e.prototype.setProperties=function(t){for(var i in t)this.properties[i]=t[i];return this._stylesDirty=!0,this},e.prototype.getProperties=function(){return this.properties},e.prototype.addClass=function(t){return this.classList.indexOf(t)<0&&(this.classList.push(t),this._classesDirty=!0),this},e.prototype.removeClass=function(t){var i=this.classList.indexOf(t);return i>=0&&(this._dirtyClasses.push(this.classList.splice(i,1)[0]),this._classesDirty=!0),this},e.prototype.toggleClass=function(t){var i=this.classList.indexOf(t);return i>=0?this.removeClass(t):this.addClass(t),this},e.prototype.setClasses=function(t){var i=0,e=[];for(i=0;i<this.classList.length;i++)t.indexOf(this.classList[i])<0&&e.push(this.classList[i]);for(i=0;i<e.length;i++)this.removeClass(e[i]);for(i=0;i<t.length;i++)this.addClass(t[i]);return this},e.prototype.getClassList=function(){return this.classList},e.prototype.setContent=function(t){return this.content!==t&&(this.content=t,this._contentDirty=!0),this},e.prototype.getContent=function(){return this.content},e.prototype.setOptions=function(t){return t.size&&this.setSize(t.size),t.classes&&this.setClasses(t.classes),t.properties&&this.setProperties(t.properties),t.attributes&&this.setAttributes(t.attributes),t.content&&this.setContent(t.content),this},e.prototype.setup=function(t){var i=t.allocate(this.elementType);if(this.elementClass)if(this.elementClass instanceof Array)for(var e=0;e<this.elementClass.length;e++)i.classList.add(this.elementClass[e]);else i.classList.add(this.elementClass);i.style.display="",this.attach(i),this._opacity=null,this._currentTarget=i,this._stylesDirty=!0,this._classesDirty=!0,this._attributesDirty=!0,this._sizeDirty=!0,this._contentDirty=!0,this._originDirty=!0,this._transformDirty=!0},e.prototype.commit=function(t){this._currentTarget||this.setup(t.allocator);var i=this._currentTarget,e=t.size;if(this._classesDirty){n.call(this,i);for(var s=this.getClassList(),a=0;a<s.length;a++)i.classList.add(s[a]);this._classesDirty=!1,this._trueSizeCheck=!0}if(this._stylesDirty&&(o.call(this,i),this._stylesDirty=!1,this._trueSizeCheck=!0),this._attributesDirty&&(r.call(this,i),this._attributesDirty=!1,this._trueSizeCheck=!0),this.size){var p=t.size;if(e=[this.size[0],this.size[1]],void 0===e[0]&&(e[0]=p[0]),void 0===e[1]&&(e[1]=p[1]),e[0]===!0||e[1]===!0){if(e[0]!==!0||!this._trueSizeCheck&&0!==this._size[0])this._size&&(e[0]=this._size[0]);else{var u=i.offsetWidth;this._size&&this._size[0]!==u&&(this._size[0]=u,this._sizeDirty=!0),e[0]=u}if(e[1]!==!0||!this._trueSizeCheck&&0!==this._size[1])this._size&&(e[1]=this._size[1]);else{var l=i.offsetHeight;this._size&&this._size[1]!==l&&(this._size[1]=l,this._sizeDirty=!0),e[1]=l}this._trueSizeCheck=!1}}h(this._size,e)&&(this._size||(this._size=[0,0]),this._size[0]=e[0],this._size[1]=e[1],this._sizeDirty=!0),this._sizeDirty&&(this._size&&(i.style.width=this.size&&this.size[0]===!0?"":this._size[0]+"px",i.style.height=this.size&&this.size[1]===!0?"":this._size[1]+"px"),this._eventOutput.emit("resize")),this._contentDirty&&(this.deploy(i),this._eventOutput.emit("deploy"),this._contentDirty=!1,this._trueSizeCheck=!0),c.prototype.commit.call(this,t)},e.prototype.cleanup=function(t){var i=0,e=this._currentTarget;this._eventOutput.emit("recall"),this.recall(e),e.style.display="none",e.style.opacity="",e.style.width="",e.style.height="",s.call(this,e),a.call(this,e);var o=this.getClassList();for(n.call(this,e),i=0;i<o.length;i++)e.classList.remove(o[i]);if(this.elementClass)if(this.elementClass instanceof Array)for(i=0;i<this.elementClass.length;i++)e.classList.remove(this.elementClass[i]);else e.classList.remove(this.elementClass);this.detach(e),this._currentTarget=null,t.deallocate(e)},e.prototype.deploy=function(t){var i=this.getContent();if(i instanceof Node){for(;t.hasChildNodes();)t.removeChild(t.firstChild);t.appendChild(i)}else t.innerHTML=i},e.prototype.recall=function(t){for(var i=document.createDocumentFragment();t.hasChildNodes();)i.appendChild(t.firstChild);this.setContent(i)},e.prototype.getSize=function(){return this._size?this._size:this.size},e.prototype.setSize=function(t){return this.size=t?[t[0],t[1]]:null,this._sizeDirty=!0,this},i.exports=e},{"./ElementOutput":3}],15:[function(t,i){function e(t){return 2===t.length?t[0]*t[0]+t[1]*t[1]:t[0]*t[0]+t[1]*t[1]+t[2]*t[2]}function n(t){return Math.sqrt(e(t))}function o(t){return 0>t?-1:1}var s={};s.precision=1e-6,s.identity=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],s.multiply4x4=function(t,i){return[t[0]*i[0]+t[4]*i[1]+t[8]*i[2]+t[12]*i[3],t[1]*i[0]+t[5]*i[1]+t[9]*i[2]+t[13]*i[3],t[2]*i[0]+t[6]*i[1]+t[10]*i[2]+t[14]*i[3],t[3]*i[0]+t[7]*i[1]+t[11]*i[2]+t[15]*i[3],t[0]*i[4]+t[4]*i[5]+t[8]*i[6]+t[12]*i[7],t[1]*i[4]+t[5]*i[5]+t[9]*i[6]+t[13]*i[7],t[2]*i[4]+t[6]*i[5]+t[10]*i[6]+t[14]*i[7],t[3]*i[4]+t[7]*i[5]+t[11]*i[6]+t[15]*i[7],t[0]*i[8]+t[4]*i[9]+t[8]*i[10]+t[12]*i[11],t[1]*i[8]+t[5]*i[9]+t[9]*i[10]+t[13]*i[11],t[2]*i[8]+t[6]*i[9]+t[10]*i[10]+t[14]*i[11],t[3]*i[8]+t[7]*i[9]+t[11]*i[10]+t[15]*i[11],t[0]*i[12]+t[4]*i[13]+t[8]*i[14]+t[12]*i[15],t[1]*i[12]+t[5]*i[13]+t[9]*i[14]+t[13]*i[15],t[2]*i[12]+t[6]*i[13]+t[10]*i[14]+t[14]*i[15],t[3]*i[12]+t[7]*i[13]+t[11]*i[14]+t[15]*i[15]]},s.multiply=function(t,i){return[t[0]*i[0]+t[4]*i[1]+t[8]*i[2],t[1]*i[0]+t[5]*i[1]+t[9]*i[2],t[2]*i[0]+t[6]*i[1]+t[10]*i[2],0,t[0]*i[4]+t[4]*i[5]+t[8]*i[6],t[1]*i[4]+t[5]*i[5]+t[9]*i[6],t[2]*i[4]+t[6]*i[5]+t[10]*i[6],0,t[0]*i[8]+t[4]*i[9]+t[8]*i[10],t[1]*i[8]+t[5]*i[9]+t[9]*i[10],t[2]*i[8]+t[6]*i[9]+t[10]*i[10],0,t[0]*i[12]+t[4]*i[13]+t[8]*i[14]+t[12],t[1]*i[12]+t[5]*i[13]+t[9]*i[14]+t[13],t[2]*i[12]+t[6]*i[13]+t[10]*i[14]+t[14],1]
},s.thenMove=function(t,i){return i[2]||(i[2]=0),[t[0],t[1],t[2],0,t[4],t[5],t[6],0,t[8],t[9],t[10],0,t[12]+i[0],t[13]+i[1],t[14]+i[2],1]},s.moveThen=function(t,i){t[2]||(t[2]=0);var e=t[0]*i[0]+t[1]*i[4]+t[2]*i[8],n=t[0]*i[1]+t[1]*i[5]+t[2]*i[9],o=t[0]*i[2]+t[1]*i[6]+t[2]*i[10];return s.thenMove(i,[e,n,o])},s.translate=function(t,i,e){return void 0===e&&(e=0),[1,0,0,0,0,1,0,0,0,0,1,0,t,i,e,1]},s.thenScale=function(t,i){return[i[0]*t[0],i[1]*t[1],i[2]*t[2],0,i[0]*t[4],i[1]*t[5],i[2]*t[6],0,i[0]*t[8],i[1]*t[9],i[2]*t[10],0,i[0]*t[12],i[1]*t[13],i[2]*t[14],1]},s.scale=function(t,i,e){return void 0===e&&(e=1),void 0===i&&(i=t),[t,0,0,0,0,i,0,0,0,0,e,0,0,0,0,1]},s.rotateX=function(t){var i=Math.cos(t),e=Math.sin(t);return[1,0,0,0,0,i,e,0,0,-e,i,0,0,0,0,1]},s.rotateY=function(t){var i=Math.cos(t),e=Math.sin(t);return[i,0,-e,0,0,1,0,0,e,0,i,0,0,0,0,1]},s.rotateZ=function(t){var i=Math.cos(t),e=Math.sin(t);return[i,e,0,0,-e,i,0,0,0,0,1,0,0,0,0,1]},s.rotate=function(t,i,e){var n=Math.cos(t),o=Math.sin(t),s=Math.cos(i),r=Math.sin(i),a=Math.cos(e),h=Math.sin(e),c=[s*a,n*h+o*r*a,o*h-n*r*a,0,-s*h,n*a-o*r*h,o*a+n*r*h,0,r,-o*s,n*s,0,0,0,0,1];return c},s.rotateAxis=function(t,i){var e=Math.sin(i),n=Math.cos(i),o=1-n,s=t[0]*t[0]*o,r=t[0]*t[1]*o,a=t[0]*t[2]*o,h=t[1]*t[1]*o,c=t[1]*t[2]*o,p=t[2]*t[2]*o,u=t[0]*e,l=t[1]*e,f=t[2]*e,d=[s+n,r+f,a-l,0,r-f,h+n,c+u,0,a+l,c-u,p+n,0,0,0,0,1];return d},s.aboutOrigin=function(t,i){var e=t[0]-(t[0]*i[0]+t[1]*i[4]+t[2]*i[8]),n=t[1]-(t[0]*i[1]+t[1]*i[5]+t[2]*i[9]),o=t[2]-(t[0]*i[2]+t[1]*i[6]+t[2]*i[10]);return s.thenMove(i,[e,n,o])},s.skew=function(t,i,e){return[1,Math.tan(i),0,0,Math.tan(e),1,0,0,0,Math.tan(t),1,0,0,0,0,1]},s.skewX=function(t){return[1,0,0,0,Math.tan(t),1,0,0,0,0,1,0,0,0,0,1]},s.skewY=function(t){return[1,Math.tan(t),0,0,0,1,0,0,0,0,1,0,0,0,0,1]},s.perspective=function(t){return[1,0,0,0,0,1,0,0,0,0,1,-1/t,0,0,0,1]},s.getTranslate=function(t){return[t[12],t[13],t[14]]},s.inverse=function(t){var i=t[5]*t[10]-t[6]*t[9],e=t[4]*t[10]-t[6]*t[8],n=t[4]*t[9]-t[5]*t[8],o=t[1]*t[10]-t[2]*t[9],s=t[0]*t[10]-t[2]*t[8],r=t[0]*t[9]-t[1]*t[8],a=t[1]*t[6]-t[2]*t[5],h=t[0]*t[6]-t[2]*t[4],c=t[0]*t[5]-t[1]*t[4],p=t[0]*i-t[1]*e+t[2]*n,u=1/p,l=[u*i,-u*o,u*a,0,-u*e,u*s,-u*h,0,u*n,-u*r,u*c,0,0,0,0,1];return l[12]=-t[12]*l[0]-t[13]*l[4]-t[14]*l[8],l[13]=-t[12]*l[1]-t[13]*l[5]-t[14]*l[9],l[14]=-t[12]*l[2]-t[13]*l[6]-t[14]*l[10],l},s.transpose=function(t){return[t[0],t[4],t[8],t[12],t[1],t[5],t[9],t[13],t[2],t[6],t[10],t[14],t[3],t[7],t[11],t[15]]},s.interpret=function(t){var i=[t[0],t[1],t[2]],r=o(i[0]),a=n(i),h=[i[0]+r*a,i[1],i[2]],c=2/e(h);if(c>=1/0)return{translate:s.getTranslate(t),rotate:[0,0,0],scale:[0,0,0],skew:[0,0,0]};var p=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1];p[0]=1-c*h[0]*h[0],p[5]=1-c*h[1]*h[1],p[10]=1-c*h[2]*h[2],p[1]=-c*h[0]*h[1],p[2]=-c*h[0]*h[2],p[6]=-c*h[1]*h[2],p[4]=p[1],p[8]=p[2],p[9]=p[6];var u=s.multiply(p,t),l=[u[5],u[6]],f=o(l[0]),d=n(l),_=[l[0]+f*d,l[1]],y=2/e(_),g=[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1];g[5]=1-y*_[0]*_[0],g[10]=1-y*_[1]*_[1],g[6]=-y*_[0]*_[1],g[9]=g[6];var v=s.multiply(g,p),m=s.multiply(v,t),O=s.scale(m[0]<0?-1:1,m[5]<0?-1:1,m[10]<0?-1:1);m=s.multiply(m,O),v=s.multiply(O,v);var S={};return S.translate=s.getTranslate(t),S.rotate=[Math.atan2(-v[6],v[10]),Math.asin(v[2]),Math.atan2(-v[1],v[0])],S.rotate[0]||(S.rotate[0]=0,S.rotate[2]=Math.atan2(v[4],v[5])),S.scale=[m[0],m[5],m[10]],S.skew=[Math.atan2(m[9],S.scale[2]),Math.atan2(m[8],S.scale[2]),Math.atan2(m[4],S.scale[0])],Math.abs(S.rotate[0])+Math.abs(S.rotate[2])>1.5*Math.PI&&(S.rotate[1]=Math.PI-S.rotate[1],S.rotate[1]>Math.PI&&(S.rotate[1]-=2*Math.PI),S.rotate[1]<-Math.PI&&(S.rotate[1]+=2*Math.PI),S.rotate[0]<0?S.rotate[0]+=Math.PI:S.rotate[0]-=Math.PI,S.rotate[2]<0?S.rotate[2]+=Math.PI:S.rotate[2]-=Math.PI),S},s.average=function(t,i,e){e=void 0===e?.5:e;for(var n=s.interpret(t),o=s.interpret(i),r={translate:[0,0,0],rotate:[0,0,0],scale:[0,0,0],skew:[0,0,0]},a=0;3>a;a++)r.translate[a]=(1-e)*n.translate[a]+e*o.translate[a],r.rotate[a]=(1-e)*n.rotate[a]+e*o.rotate[a],r.scale[a]=(1-e)*n.scale[a]+e*o.scale[a],r.skew[a]=(1-e)*n.skew[a]+e*o.skew[a];return s.build(r)},s.build=function(t){var i=s.scale(t.scale[0],t.scale[1],t.scale[2]),e=s.skew(t.skew[0],t.skew[1],t.skew[2]),n=s.rotate(t.rotate[0],t.rotate[1],t.rotate[2]);return s.thenMove(s.multiply(s.multiply(n,e),i),t.translate)},s.equals=function(t,i){return!s.notEquals(t,i)},s.notEquals=function(t,i){return t===i?!1:!(t&&i)||t[12]!==i[12]||t[13]!==i[13]||t[14]!==i[14]||t[0]!==i[0]||t[1]!==i[1]||t[2]!==i[2]||t[4]!==i[4]||t[5]!==i[5]||t[6]!==i[6]||t[8]!==i[8]||t[9]!==i[9]||t[10]!==i[10]},s.normalizeRotation=function(t){var i=t.slice(0);for((i[0]===.5*Math.PI||i[0]===.5*-Math.PI)&&(i[0]=-i[0],i[1]=Math.PI-i[1],i[2]-=Math.PI),i[0]>.5*Math.PI&&(i[0]=i[0]-Math.PI,i[1]=Math.PI-i[1],i[2]-=Math.PI),i[0]<.5*-Math.PI&&(i[0]=i[0]+Math.PI,i[1]=-Math.PI-i[1],i[2]-=Math.PI);i[1]<-Math.PI;)i[1]+=2*Math.PI;for(;i[1]>=Math.PI;)i[1]-=2*Math.PI;for(;i[2]<-Math.PI;)i[2]+=2*Math.PI;for(;i[2]>=Math.PI;)i[2]-=2*Math.PI;return i},s.inFront=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,.001,1],s.behind=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,-.001,1],i.exports=s},{}],16:[function(t,i){function e(t){this._node=new s,this._eventInput=new n,this._eventOutput=new n,n.setInputHandler(this,this._eventInput),n.setOutputHandler(this,this._eventOutput),this.options=r.clone(this.constructor.DEFAULT_OPTIONS||e.DEFAULT_OPTIONS),this._optionsManager=new o(this.options),t&&this.setOptions(t)}var n=t("./EventHandler"),o=t("./OptionsManager"),s=t("./RenderNode"),r=t("../utilities/Utility");e.DEFAULT_OPTIONS={},e.prototype.getOptions=function(t){return this._optionsManager.getOptions(t)},e.prototype.setOptions=function(t){this._optionsManager.patch(t)},e.prototype.add=function(){return this._node.add.apply(this._node,arguments)},e.prototype._add=e.prototype.add,e.prototype.render=function(){return this._node.render()},e.prototype.getSize=function(){return this._node&&this._node.getSize?this._node.getSize.apply(this._node,arguments)||this.options.size:this.options.size},i.exports=e},{"../utilities/Utility":95,"./EventHandler":7,"./OptionsManager":10,"./RenderNode":11}],17:[function(t,i){function e(t){t||(t=[]),t instanceof Array&&(t={array:t}),this._=null,this.index=t.index||0,t.array?this._=new this.constructor.Backing(t.array):t._&&(this._=t._),this.index===this._.firstIndex&&(this._.firstNode=this),this.index===this._.firstIndex+this._.array.length-1&&(this._.lastNode=this),void 0!==t.loop&&(this._.loop=t.loop),void 0!==t.trackSize&&(this._.trackSize=t.trackSize),this._previousNode=null,this._nextNode=null}e.Backing=function(t){this.array=t,this.firstIndex=0,this.loop=!1,this.firstNode=null,this.lastNode=null,this.cumulativeSizes=[[0,0]],this.sizeDirty=!0,this.trackSize=!1},e.Backing.prototype.getValue=function(t){var i=t-this.firstIndex;return 0>i||i>=this.array.length?null:this.array[i]},e.Backing.prototype.setValue=function(t,i){this.array[t-this.firstIndex]=i},e.Backing.prototype.getSize=function(t){return this.cumulativeSizes[t]},e.Backing.prototype.calculateSize=function(t){t=t||this.array.length;for(var i=[0,0],e=0;t>e;e++){var n=this.array[e].getSize();if(!n)return void 0;void 0!==i[0]&&(void 0===n[0]?i[0]=void 0:i[0]+=n[0]),void 0!==i[1]&&(void 0===n[1]?i[1]=void 0:i[1]+=n[1]),this.cumulativeSizes[e+1]=i.slice()}return this.sizeDirty=!1,i},e.Backing.prototype.reindex=function(t,i,e){if(this.array[0]){for(var n=0,o=this.firstIndex,s=e-i,r=this.firstNode;t-1>o;)r=r.getNext(),o++;var a=r;for(n=0;i>n;n++)r=r.getNext(),r&&(r._previousNode=a);var h=r?r.getNext():null;for(a._nextNode=null,r=a,n=0;e>n;n++)r=r.getNext();if(o+=e,r!==h&&(r._nextNode=h,h&&(h._previousNode=r)),h)for(r=h,o++;r&&o<this.array.length+this.firstIndex;)r._nextNode?r.index+=s:r.index=o,r=r.getNext(),o++;this.trackSize&&(this.sizeDirty=!0)}},e.prototype.getPrevious=function(){var t=this._.array.length;return t?this.index===this._.firstIndex?this._.loop?(this._previousNode=this._.lastNode||new this.constructor({_:this._,index:this._.firstIndex+t-1}),this._previousNode._nextNode=this):this._previousNode=null:this._previousNode||(this._previousNode=new this.constructor({_:this._,index:this.index-1}),this._previousNode._nextNode=this):this._previousNode=null,this._previousNode},e.prototype.getNext=function(){var t=this._.array.length;return t?this.index===this._.firstIndex+t-1?this._.loop?(this._nextNode=this._.firstNode||new this.constructor({_:this._,index:this._.firstIndex}),this._nextNode._previousNode=this):this._nextNode=null:this._nextNode||(this._nextNode=new this.constructor({_:this._,index:this.index+1}),this._nextNode._previousNode=this):this._nextNode=null,this._nextNode},e.prototype.indexOf=function(t){return this._.array.indexOf(t)},e.prototype.getIndex=function(){return this.index},e.prototype.toString=function(){return""+this.index},e.prototype.unshift=function(){this._.array.unshift.apply(this._.array,arguments),this._.firstIndex-=arguments.length,this._.trackSize&&(this._.sizeDirty=!0)},e.prototype.push=function(){this._.array.push.apply(this._.array,arguments),this._.trackSize&&(this._.sizeDirty=!0)},e.prototype.splice=function(t,i){var e=Array.prototype.slice.call(arguments,2);this._.array.splice.apply(this._.array,[t-this._.firstIndex,i].concat(e)),this._.reindex(t,i,e.length)},e.prototype.swap=function(t){var i=t.get(),e=this.get();this._.setValue(this.index,i),this._.setValue(t.index,e);var n=this._previousNode,o=this._nextNode,s=this.index,r=t._previousNode,a=t._nextNode,h=t.index;this.index=h,this._previousNode=r===this?t:r,this._previousNode&&(this._previousNode._nextNode=this),this._nextNode=a===this?t:a,this._nextNode&&(this._nextNode._previousNode=this),t.index=s,t._previousNode=n===t?this:n,t._previousNode&&(t._previousNode._nextNode=t),t._nextNode=o===t?this:o,t._nextNode&&(t._nextNode._previousNode=t),this.index===this._.firstIndex?this._.firstNode=this:this.index===this._.firstIndex+this._.array.length-1&&(this._.lastNode=this),t.index===this._.firstIndex?this._.firstNode=t:t.index===this._.firstIndex+this._.array.length-1&&(this._.lastNode=t),this._.trackSize&&(this._.sizeDirty=!0)},e.prototype.get=function(){return this._.getValue(this.index)},e.prototype.getSize=function(){var t=this.get();return t?t.getSize():null},e.prototype.render=function(){this._.trackSize&&this._.sizeDirty&&this._.calculateSize();var t=this.get();return t?t.render.apply(t,arguments):null},i.exports=e},{}],18:[function(t,i){i.exports={Context:t("./Context"),ElementAllocator:t("./ElementAllocator"),ElementOutput:t("./ElementOutput"),Engine:t("./Engine"),Entity:t("./Entity"),EventEmitter:t("./EventEmitter"),EventHandler:t("./EventHandler"),Group:t("./Group"),Modifier:t("./Modifier"),OptionsManager:t("./OptionsManager"),RenderNode:t("./RenderNode"),Scene:t("./Scene"),SpecParser:t("./SpecParser"),Surface:t("./Surface"),Transform:t("./Transform"),View:t("./View"),ViewSequence:t("./ViewSequence")}},{"./Context":1,"./ElementAllocator":2,"./ElementOutput":3,"./Engine":4,"./Entity":5,"./EventEmitter":6,"./EventHandler":7,"./Group":8,"./Modifier":9,"./OptionsManager":10,"./RenderNode":11,"./Scene":12,"./SpecParser":13,"./Surface":14,"./Transform":15,"./View":16,"./ViewSequence":17}],19:[function(t,i){function e(t){this.dispatchers={},this.currMode=void 0,this.setMode(t)}var n=t("../core/EventHandler");e.prototype.setMode=function(t){if(t!==this.currMode){var i=this.currMode;this.dispatchers[this.currMode]&&this.dispatchers[this.currMode].trigger("unpipe"),this.currMode=t,this.dispatchers[t]&&this.dispatchers[t].emit("pipe"),this.emit("change",{from:i,to:t})}},e.prototype.forMode=function(t){return this.dispatchers[t]||(this.dispatchers[t]=new n),this.dispatchers[t]},e.prototype.emit=function(t,i){if(void 0===this.currMode)return!1;i||(i={});var e=this.dispatchers[this.currMode];return e?e.trigger(t,i):void 0},i.exports=e},{"../core/EventHandler":7}],20:[function(t,i){function e(t){n.call(this),this._condition=t}var n=t("../core/EventHandler");e.prototype=Object.create(n.prototype),e.prototype.constructor=e,e.prototype.emit=function(t,i){return this._condition(t,i)?n.prototype.emit.apply(this,arguments):void 0},e.prototype.trigger=e.prototype.emit,i.exports=e},{"../core/EventHandler":7}],21:[function(t,i){function e(t){n.call(this),this._mappingFunction=t}var n=t("../core/EventHandler");e.prototype=Object.create(n.prototype),e.prototype.constructor=e,e.prototype.subscribe=null,e.prototype.unsubscribe=null,e.prototype.emit=function(t,i){var e=this._mappingFunction.apply(this,arguments);e&&e.emit instanceof Function&&e.emit(t,i)},e.prototype.trigger=e.prototype.emit,i.exports=e},{"../core/EventHandler":7}],22:[function(t,i){i.exports={EventArbiter:t("./EventArbiter"),EventFilter:t("./EventFilter"),EventMapper:t("./EventMapper")}},{"./EventArbiter":19,"./EventFilter":20,"./EventMapper":21}],23:[function(t,i){i.exports={events:t("./events"),core:t("./core"),math:t("./math"),inputs:t("./inputs"),physics:t("./physics"),modifiers:t("./modifiers"),surfaces:t("./surfaces"),transitions:t("./transitions"),utilities:t("./utilities"),views:t("./views"),widgets:t("./widgets")}},{"./core":18,"./events":22,"./inputs":36,"./math":42,"./modifiers":47,"./physics":71,"./surfaces":82,"./transitions":92,"./utilities":96,"./views":111,"./widgets":116}],24:[function(t,i){function e(t,i){void 0===i&&(i="update"),this._state=t&&t.get&&t.set?t:new s(t||0),this._eventInput=new o,o.setInputHandler(this,this._eventInput),this._eventInput.on(i,n.bind(this))}function n(t){var i=t.delta,e=this.get();if(i.constructor===e.constructor){var n=i instanceof Array?[e[0]+i[0],e[1]+i[1]]:e+i;this.set(n)}}var o=t("../core/EventHandler"),s=t("../transitions/Transitionable");e.prototype.get=function(){return this._state.get()},e.prototype.set=function(t){this._state.set(t)},i.exports=e},{"../core/EventHandler":7,"../transitions/Transitionable":88}],25:[function(){function t(t){window.addEventListener(t,function(t){return t.stopPropagation(),!1},!0)}var i="ontouchstart"in window;i&&(t("mousedown"),t("mousemove"),t("mouseup"),t("mouseleave"))},{}],26:[function(){!function(){if(window.CustomEvent){var t=300,i=500,e={},n={},o=Date.now;window.addEventListener("touchstart",function(t){for(var i=o(),n=0;n<t.changedTouches.length;n++){var s=t.changedTouches[n];e[s.identifier]=i}}),window.addEventListener("touchmove",function(t){for(var i=0;i<t.changedTouches.length;i++){var n=t.changedTouches[i];delete e[n.identifier]}}),window.addEventListener("touchend",function(i){for(var s=o(),r=0;r<i.changedTouches.length;r++){var a=i.changedTouches[r],h=e[a.identifier];if(h&&t>s-h){var c=new window.CustomEvent("click",{bubbles:!0,detail:a});n[s]=i,i.target.dispatchEvent(c)}delete e[a.identifier]}}),window.addEventListener("click",function(t){var e=o();for(var s in n){var r=n[s];i>e-s?t instanceof window.MouseEvent&&t.target===r.target&&t.stopPropagation():delete n[s]}},!0)}}()},{}],27:[function(t,i){function e(t,i){this._eventInput=new o,this._eventOutput=new o,o.setInputHandler(this,this._eventInput),o.setOutputHandler(this,this._eventOutput),this._syncs={},t&&this.addSync(t),i&&this.setOptions(i)}function n(t,i){s[t]&&(this._syncs[t]=new s[t](i),this.pipeSync(t))}var o=t("../core/EventHandler");e.DIRECTION_X=0,e.DIRECTION_Y=1,e.DIRECTION_Z=2;var s={};e.register=function(t){for(var i in t){if(s[i]){if(s[i]===t[i])return;throw new Error("this key is registered to a different sync class")}s[i]=t[i]}},e.prototype.setOptions=function(t){for(var i in this._syncs)this._syncs[i].setOptions(t)},e.prototype.pipeSync=function(t){var i=this._syncs[t];this._eventInput.pipe(i),i.pipe(this._eventOutput)},e.prototype.unpipeSync=function(t){var i=this._syncs[t];this._eventInput.unpipe(i),i.unpipe(this._eventOutput)},e.prototype.addSync=function(t){if(t instanceof Array)for(var i=0;i<t.length;i++)n.call(this,t[i]);else if(t instanceof Object)for(var e in t)n.call(this,e,t[e])},i.exports=e},{"../core/EventHandler":7}],28:[function(t,i){function e(t){this.options=Object.create(e.DEFAULT_OPTIONS),this._optionsManager=new h(this.options),t&&this.setOptions(t),this._eventInput=new a,this._eventOutput=new a,a.setInputHandler(this,this._eventInput),a.setOutputHandler(this,this._eventOutput),this._eventInput.on("mousedown",n.bind(this)),this._eventInput.on("mousemove",o.bind(this)),this._eventInput.on("mouseup",s.bind(this)),this.options.propogate?this._eventInput.on("mouseleave",r.bind(this)):this._eventInput.on("mouseleave",s.bind(this)),this._payload={delta:null,position:null,velocity:null,clientX:0,clientY:0,offsetX:0,offsetY:0},this._positionHistory=[],this._position=null,this._prevCoord=void 0,this._prevTime=void 0,this._down=!1,this._moved=!1,this._documentActive=!1}function n(t){var i,e;this.options.preventDefault&&t.preventDefault();var n=t.clientX,o=t.clientY;this._prevCoord=[n,o],this._prevTime=Date.now(),this._down=!0,this._move=!1,void 0!==this.options.direction?(this._position=0,i=0,e=0):(this._position=[0,0],i=[0,0],e=[0,0]);var s=this._payload;s.delta=i,s.position=this._position,s.velocity=e,s.clientX=n,s.clientY=o,s.offsetX=t.offsetX,s.offsetY=t.offsetY,this._positionHistory.push({position:s.position.slice?s.position.slice(0):s.position,time:this._prevTime}),this._eventOutput.emit("start",s),this._documentActive=!1}function o(t){if(this._prevCoord){var i=this._prevCoord,n=(this._prevTime,t.clientX),o=t.clientY,s=Date.now(),r=n-i[0],a=o-i[1];this.options.rails&&(Math.abs(r)>Math.abs(a)?a=0:r=0);var h,p,u=Math.max(s-this._positionHistory[0].time,c),l=this.options.scale;this.options.direction===e.DIRECTION_X?(p=l*r,this._position+=p,h=l*(this._position-this._positionHistory[0].position)/u):this.options.direction===e.DIRECTION_Y?(p=l*a,this._position+=p,h=l*(this._position-this._positionHistory[0].position)/u):(p=[l*r,l*a],h=[l*(this._position[0]-this._positionHistory[0].position[0])/u,l*(this._position[1]-this._positionHistory[0].position[1])/u],this._position[0]+=p[0],this._position[1]+=p[1]);var f=this._payload;f.delta=p,f.position=this._position,f.velocity=h,f.clientX=n,f.clientY=o,f.offsetX=t.offsetX,f.offsetY=t.offsetY,this._positionHistory.length===this.options.velocitySampleLength&&this._positionHistory.shift(),this._positionHistory.push({position:f.position.slice?f.position.slice(0):f.position,time:s}),this._eventOutput.emit("update",f),this._prevCoord=[n,o],this._prevTime=s,this._move=!0}}function s(){this._down&&(this._eventOutput.emit("end",this._payload),this._prevCoord=void 0,this._prevTime=void 0,this._down=!1,this._move=!1,this._positionHistory=[])}function r(t){if(this._down&&this._move&&!this._documentActive){var i=o.bind(this),e=function(t){s.call(this,t),document.removeEventListener("mousemove",i),document.removeEventListener("mouseup",e)}.bind(this,t);document.addEventListener("mousemove",i),document.addEventListener("mouseup",e),this._documentActive=!0}}var a=t("../core/EventHandler"),h=t("../core/OptionsManager");e.DEFAULT_OPTIONS={direction:void 0,rails:!1,scale:1,propogate:!0,velocitySampleLength:10,preventDefault:!0},e.DIRECTION_X=0,e.DIRECTION_Y=1;var c=8;e.prototype.getOptions=function(){return this.options},e.prototype.setOptions=function(t){return this._optionsManager.setOptions(t)},i.exports=e},{"../core/EventHandler":7,"../core/OptionsManager":10}],29:[function(t,i){function e(t){n.call(this),this.options=Object.create(e.DEFAULT_OPTIONS),this._optionsManager=new o(this.options),t&&this.setOptions(t),this._displacement=0,this._previousDistance=0}var n=t("./TwoFingerSync"),o=t("../core/OptionsManager");e.prototype=Object.create(n.prototype),e.prototype.constructor=e,e.DEFAULT_OPTIONS={scale:1},e.prototype._startUpdate=function(t){this._previousDistance=n.calculateDistance(this.posA,this.posB),this._displacement=0,this._eventOutput.emit("start",{count:t.touches.length,touches:[this.touchAId,this.touchBId],distance:this._dist,center:n.calculateCenter(this.posA,this.posB)})},e.prototype._moveUpdate=function(t){var i=n.calculateDistance(this.posA,this.posB),e=n.calculateCenter(this.posA,this.posB),o=this.options.scale,s=o*(i-this._previousDistance),r=s/t;this._previousDistance=i,this._displacement+=s,this._eventOutput.emit("update",{delta:s,velocity:r,distance:i,displacement:this._displacement,center:e,touches:[this.touchAId,this.touchBId]})},e.prototype.getOptions=function(){return this.options},e.prototype.setOptions=function(t){return this._optionsManager.setOptions(t)},i.exports=e},{"../core/OptionsManager":10,"./TwoFingerSync":35}],30:[function(t,i){function e(t){n.call(this),this.options=Object.create(e.DEFAULT_OPTIONS),this._optionsManager=new o(this.options),t&&this.setOptions(t),this._angle=0,this._previousAngle=0}var n=t("./TwoFingerSync"),o=t("../core/OptionsManager");e.prototype=Object.create(n.prototype),e.prototype.constructor=e,e.DEFAULT_OPTIONS={scale:1},e.prototype._startUpdate=function(t){this._angle=0,this._previousAngle=n.calculateAngle(this.posA,this.posB);var i=n.calculateCenter(this.posA,this.posB);this._eventOutput.emit("start",{count:t.touches.length,angle:this._angle,center:i,touches:[this.touchAId,this.touchBId]})},e.prototype._moveUpdate=function(t){var i=this.options.scale,e=n.calculateAngle(this.posA,this.posB),o=n.calculateCenter(this.posA,this.posB),s=i*(e-this._previousAngle),r=s/t;this._angle+=s,this._eventOutput.emit("update",{delta:s,velocity:r,angle:this._angle,center:o,touches:[this.touchAId,this.touchBId]}),this._previousAngle=e},e.prototype.getOptions=function(){return this.options},e.prototype.setOptions=function(t){return this._optionsManager.setOptions(t)},i.exports=e},{"../core/OptionsManager":10,"./TwoFingerSync":35}],31:[function(t,i){function e(t){o.call(this),this.options=Object.create(e.DEFAULT_OPTIONS),this._optionsManager=new s(this.options),t&&this.setOptions(t),this._scaleFactor=1,this._startDist=0,this._eventInput.on("pipe",n.bind(this))}function n(){this.touchAId=void 0,this.touchBId=void 0}var o=t("./TwoFingerSync"),s=t("../core/OptionsManager");e.prototype=Object.create(o.prototype),e.prototype.constructor=e,e.DEFAULT_OPTIONS={scale:1},e.prototype._startUpdate=function(t){this._scaleFactor=1,this._startDist=o.calculateDistance(this.posA,this.posB),this._eventOutput.emit("start",{count:t.touches.length,touches:[this.touchAId,this.touchBId],distance:this._startDist,center:o.calculateCenter(this.posA,this.posB)})},e.prototype._moveUpdate=function(t){var i=this.options.scale,e=o.calculateDistance(this.posA,this.posB),n=o.calculateCenter(this.posA,this.posB),s=(e-this._startDist)/this._startDist,r=Math.max(1+i*s,0),a=(r-this._scaleFactor)/t;this._eventOutput.emit("update",{delta:s,scale:r,velocity:a,distance:e,center:n,touches:[this.touchAId,this.touchBId]}),this._scaleFactor=r},e.prototype.getOptions=function(){return this.options},e.prototype.setOptions=function(t){return this._optionsManager.setOptions(t)},i.exports=e},{"../core/OptionsManager":10,"./TwoFingerSync":35}],32:[function(t,i){function e(t){this.options=Object.create(e.DEFAULT_OPTIONS),this._optionsManager=new a(this.options),t&&this.setOptions(t),this._payload={delta:null,position:null,velocity:null,slip:!0},this._eventInput=new s,this._eventOutput=new s,s.setInputHandler(this,this._eventInput),s.setOutputHandler(this,this._eventOutput),this._position=void 0===this.options.direction?[0,0]:0,this._prevTime=void 0,this._prevVel=void 0,this._eventInput.on("mousewheel",o.bind(this)),this._eventInput.on("wheel",o.bind(this)),this._inProgress=!1,this._loopBound=!1}function n(){if(this._inProgress&&c()-this._prevTime>this.options.stallTime){this._inProgress=!1;var t=Math.abs(this._prevVel)>=this.options.minimumEndSpeed?this._prevVel:0,i=this._payload;i.position=this._position,i.velocity=t,i.slip=!0,this._eventOutput.emit("end",i)}}function o(t){this.options.preventDefault&&t.preventDefault(),this._inProgress||(this._inProgress=!0,this._position=void 0===this.options.direction?[0,0]:0,y=this._payload,y.slip=!0,y.position=this._position,y.clientX=t.clientX,y.clientY=t.clientY,y.offsetX=t.offsetX,y.offsetY=t.offsetY,this._eventOutput.emit("start",y),this._loopBound||(r.on("prerender",n.bind(this)),this._loopBound=!0));var i=c(),o=this._prevTime||i,s=void 0!==t.wheelDeltaX?t.wheelDeltaX:-t.deltaX,a=void 0!==t.wheelDeltaY?t.wheelDeltaY:-t.deltaY;1===t.deltaMode&&(s*=this.options.lineHeight,a*=this.options.lineHeight),this.options.rails&&(Math.abs(s)>Math.abs(a)?a=0:s=0);var p,u,l=Math.max(i-o,h),f=s/l,d=a/l,_=this.options.scale;this.options.direction===e.DIRECTION_X?(u=_*s,p=_*f,this._position+=u):this.options.direction===e.DIRECTION_Y?(u=_*a,p=_*d,this._position+=u):(u=[_*s,_*a],p=[_*f,_*d],this._position[0]+=u[0],this._position[1]+=u[1]);var y=this._payload;y.delta=u,y.velocity=p,y.position=this._position,y.slip=!0,this._eventOutput.emit("update",y),this._prevTime=i,this._prevVel=p}var s=t("../core/EventHandler"),r=t("../core/Engine"),a=t("../core/OptionsManager");e.DEFAULT_OPTIONS={direction:void 0,minimumEndSpeed:1/0,rails:!1,scale:1,stallTime:50,lineHeight:40,preventDefault:!0},e.DIRECTION_X=0,e.DIRECTION_Y=1;var h=8,c=Date.now;e.prototype.getOptions=function(){return this.options},e.prototype.setOptions=function(t){return this._optionsManager.setOptions(t)},i.exports=e},{"../core/Engine":4,"../core/EventHandler":7,"../core/OptionsManager":10}],33:[function(t,i){function e(t){this.options=Object.create(e.DEFAULT_OPTIONS),this._optionsManager=new h(this.options),t&&this.setOptions(t),this._eventOutput=new a,this._touchTracker=new r({touchLimit:this.options.touchLimit}),a.setOutputHandler(this,this._eventOutput),a.setInputHandler(this,this._touchTracker),this._touchTracker.on("trackstart",n.bind(this)),this._touchTracker.on("trackmove",o.bind(this)),this._touchTracker.on("trackend",s.bind(this)),this._payload={delta:null,position:null,velocity:null,clientX:void 0,clientY:void 0,count:0,touch:void 0},this._position=null}function n(t){var i,e;void 0!==this.options.direction?(this._position=0,i=0,e=0):(this._position=[0,0],i=[0,0],e=[0,0]);var n=this._payload;n.delta=e,n.position=this._position,n.velocity=i,n.clientX=t.x,n.clientY=t.y,n.count=t.count,n.touch=t.identifier,this._eventOutput.emit("start",n)}function o(t){var i=t.history,n=i[i.length-1],o=i[i.length-2],s=i[i.length-this.options.velocitySampleLength]?i[i.length-this.options.velocitySampleLength]:i[i.length-2],r=s.timestamp,a=n.timestamp,h=n.x-o.x,p=n.y-o.y,u=n.x-s.x,l=n.y-s.y;this.options.rails&&(Math.abs(h)>Math.abs(p)?p=0:h=0,Math.abs(u)>Math.abs(l)?l=0:u=0);var f,d,_=Math.max(a-r,c),y=u/_,g=l/_,v=this.options.scale;this.options.direction===e.DIRECTION_X?(d=v*h,f=v*y,this._position+=d):this.options.direction===e.DIRECTION_Y?(d=v*p,f=v*g,this._position+=d):(d=[v*h,v*p],f=[v*y,v*g],this._position[0]+=d[0],this._position[1]+=d[1]);var m=this._payload;m.delta=d,m.velocity=f,m.position=this._position,m.clientX=t.x,m.clientY=t.y,m.count=t.count,m.touch=t.identifier,this._eventOutput.emit("update",m)}function s(t){this._payload.count=t.count,this._eventOutput.emit("end",this._payload)}var r=t("./TouchTracker"),a=t("../core/EventHandler"),h=t("../core/OptionsManager");e.DEFAULT_OPTIONS={direction:void 0,rails:!1,touchLimit:1,velocitySampleLength:10,scale:1},e.DIRECTION_X=0,e.DIRECTION_Y=1;var c=8;e.prototype.setOptions=function(t){return this._optionsManager.setOptions(t)},e.prototype.getOptions=function(){return this.options},i.exports=e},{"../core/EventHandler":7,"../core/OptionsManager":10,"./TouchTracker":34}],34:[function(t,i){function e(t,i,e){return{x:t.clientX,y:t.clientY,identifier:t.identifier,origin:i.origin,timestamp:c(),count:i.touches.length,history:e}}function n(t){if(!(t.touches.length>this.touchLimit)){this.isTouched=!0;for(var i=0;i<t.changedTouches.length;i++){var n=t.changedTouches[i],o=e(n,t,null);this.eventOutput.emit("trackstart",o),this.selective||this.touchHistory[n.identifier]||this.track(o)}}}function o(t){if(!(t.touches.length>this.touchLimit))for(var i=0;i<t.changedTouches.length;i++){var n=t.changedTouches[i],o=this.touchHistory[n.identifier];if(o){var s=e(n,t,o);this.touchHistory[n.identifier].push(s),this.eventOutput.emit("trackmove",s)}}}function s(t){if(this.isTouched){for(var i=0;i<t.changedTouches.length;i++){var n=t.changedTouches[i],o=this.touchHistory[n.identifier];if(o){var s=e(n,t,o);this.eventOutput.emit("trackend",s),delete this.touchHistory[n.identifier]}}this.isTouched=!1}}function r(){for(var t in this.touchHistory){var i=this.touchHistory[t];this.eventOutput.emit("trackend",{touch:i[i.length-1].touch,timestamp:Date.now(),count:0,history:i}),delete this.touchHistory[t]}}function a(t){this.selective=t.selective,this.touchLimit=t.touchLimit||1,this.touchHistory={},this.eventInput=new h,this.eventOutput=new h,h.setInputHandler(this,this.eventInput),h.setOutputHandler(this,this.eventOutput),this.eventInput.on("touchstart",n.bind(this)),this.eventInput.on("touchmove",o.bind(this)),this.eventInput.on("touchend",s.bind(this)),this.eventInput.on("touchcancel",s.bind(this)),this.eventInput.on("unpipe",r.bind(this)),this.isTouched=!1}var h=t("../core/EventHandler"),c=Date.now;a.prototype.track=function(t){this.touchHistory[t.identifier]=[t]},i.exports=a},{"../core/EventHandler":7}],35:[function(t,i){function e(){this._eventInput=new n,this._eventOutput=new n,n.setInputHandler(this,this._eventInput),n.setOutputHandler(this,this._eventOutput),this.touchAEnabled=!1,this.touchAId=0,this.posA=null,this.timestampA=0,this.touchBEnabled=!1,this.touchBId=0,this.posB=null,this.timestampB=0,this._eventInput.on("touchstart",this.handleStart.bind(this)),this._eventInput.on("touchmove",this.handleMove.bind(this)),this._eventInput.on("touchend",this.handleEnd.bind(this)),this._eventInput.on("touchcancel",this.handleEnd.bind(this))}var n=t("../core/EventHandler");e.calculateAngle=function(t,i){var e=i[0]-t[0],n=i[1]-t[1];return Math.atan2(n,e)},e.calculateDistance=function(t,i){var e=i[0]-t[0],n=i[1]-t[1];return Math.sqrt(e*e+n*n)},e.calculateCenter=function(t,i){return[(t[0]+i[0])/2,(t[1]+i[1])/2]};var o=Date.now;e.prototype.handleStart=function(t){for(var i=0;i<t.changedTouches.length;i++){var e=t.changedTouches[i];this.touchAEnabled?this.touchBEnabled||(this.touchBId=e.identifier,this.touchBEnabled=!0,this.posB=[e.pageX,e.pageY],this.timestampB=o(),this._startUpdate(t)):(this.touchAId=e.identifier,this.touchAEnabled=!0,this.posA=[e.pageX,e.pageY],this.timestampA=o())}},e.prototype.handleMove=function(t){if(this.touchAEnabled&&this.touchBEnabled){for(var i,e=this.timestampA,n=this.timestampB,s=0;s<t.changedTouches.length;s++){var r=t.changedTouches[s];r.identifier===this.touchAId?(this.posA=[r.pageX,r.pageY],this.timestampA=o(),i=this.timestampA-e):r.identifier===this.touchBId&&(this.posB=[r.pageX,r.pageY],this.timestampB=o(),i=this.timestampB-n)}i&&this._moveUpdate(i)}},e.prototype.handleEnd=function(t){for(var i=0;i<t.changedTouches.length;i++){var e=t.changedTouches[i];(e.identifier===this.touchAId||e.identifier===this.touchBId)&&(this.touchAEnabled&&this.touchBEnabled&&this._eventOutput.emit("end",{touches:[this.touchAId,this.touchBId],angle:this._angle}),this.touchAEnabled=!1,this.touchAId=0,this.touchBEnabled=!1,this.touchBId=0)}},i.exports=e},{"../core/EventHandler":7}],36:[function(t,i){i.exports={Accumulator:t("./Accumulator"),DesktopEmulationMode:t("./DesktopEmulationMode"),FastClick:t("./FastClick"),GenericSync:t("./GenericSync"),MouseSync:t("./MouseSync"),PinchSync:t("./PinchSync"),RotateSync:t("./RotateSync"),ScaleSync:t("./ScaleSync"),ScrollSync:t("./ScrollSync"),TouchSync:t("./TouchSync"),TouchTracker:t("./TouchTracker"),TwoFingerSync:t("./TwoFingerSync")}},{"./Accumulator":24,"./DesktopEmulationMode":25,"./FastClick":26,"./GenericSync":27,"./MouseSync":28,"./PinchSync":29,"./RotateSync":30,"./ScaleSync":31,"./ScrollSync":32,"./TouchSync":33,"./TouchTracker":34,"./TwoFingerSync":35}],37:[function(t,i){function e(t){return this.values=t||[[1,0,0],[0,1,0],[0,0,1]],this}var n=t("./Vector"),o=new e,s=new n;
e.prototype.get=function(){return this.values},e.prototype.set=function(t){this.values=t},e.prototype.vectorMultiply=function(t){var i=this.get(),e=t.x,n=t.y,o=t.z,r=i[0],a=i[1],h=i[2],c=r[0],p=r[1],u=r[2],l=a[0],f=a[1],d=a[2],_=h[0],y=h[1],g=h[2];return s.setXYZ(c*e+p*n+u*o,l*e+f*n+d*o,_*e+y*n+g*o)},e.prototype.multiply=function(t){for(var i=this.get(),e=[[]],n=0;3>n;n++){e[n]=[];for(var s=0;3>s;s++){for(var r=0,a=0;3>a;a++)r+=i[n][a]*t[a][s];e[n][s]=r}}return o.set(e)},e.prototype.transpose=function(){for(var t=[],i=this.get(),e=0;3>e;e++)for(var n=0;3>n;n++)t[e][n]=i[n][e];return o.set(t)},e.prototype.clone=function(){for(var t=this.get(),i=[],n=0;3>n;n++)i[n]=t[n].slice();return new e(i)},i.exports=e},{"./Vector":41}],38:[function(t,i){function e(t,i,e,n){return 1===arguments.length?this.set(t):(this.w=void 0!==t?t:1,this.x=void 0!==i?i:0,this.y=void 0!==e?e:0,this.z=void 0!==n?n:0),this}var n=t("./Matrix"),o=new e(1,0,0,0);e.prototype.add=function(t){return o.setWXYZ(this.w+t.w,this.x+t.x,this.y+t.y,this.z+t.z)},e.prototype.sub=function(t){return o.setWXYZ(this.w-t.w,this.x-t.x,this.y-t.y,this.z-t.z)},e.prototype.scalarDivide=function(t){return this.scalarMultiply(1/t)},e.prototype.scalarMultiply=function(t){return o.setWXYZ(this.w*t,this.x*t,this.y*t,this.z*t)},e.prototype.multiply=function(t){var i=this.x,e=this.y,n=this.z,s=this.w,r=t.x,a=t.y,h=t.z,c=t.w||0;return o.setWXYZ(s*c-i*r-e*a-n*h,i*c+r*s+a*n-e*h,e*c+a*s+i*h-r*n,n*c+h*s+r*e-i*a)};var s=new e(1,0,0,0);e.prototype.rotateVector=function(t){return s.set(this.conj()),o.set(this.multiply(t).multiply(s))},e.prototype.inverse=function(){return o.set(this.conj().scalarDivide(this.normSquared()))},e.prototype.negate=function(){return this.scalarMultiply(-1)},e.prototype.conj=function(){return o.setWXYZ(this.w,-this.x,-this.y,-this.z)},e.prototype.normalize=function(t){return t=void 0===t?1:t,this.scalarDivide(t*this.norm())},e.prototype.makeFromAngleAndAxis=function(t,i){var e=i.normalize(),n=.5*t,o=-Math.sin(n);return this.x=o*e.x,this.y=o*e.y,this.z=o*e.z,this.w=Math.cos(n),this},e.prototype.setWXYZ=function(t,i,e,n){return o.clear(),this.w=t,this.x=i,this.y=e,this.z=n,this},e.prototype.set=function(t){return t instanceof Array?(this.w=0,this.x=t[0],this.y=t[1],this.z=t[2]):(this.w=t.w,this.x=t.x,this.y=t.y,this.z=t.z),this!==o&&o.clear(),this},e.prototype.put=function(t){t.set(o)},e.prototype.clone=function(){return new e(this)},e.prototype.clear=function(){return this.w=1,this.x=0,this.y=0,this.z=0,this},e.prototype.isEqual=function(t){return t.w===this.w&&t.x===this.x&&t.y===this.y&&t.z===this.z},e.prototype.dot=function(t){return this.w*t.w+this.x*t.x+this.y*t.y+this.z*t.z},e.prototype.normSquared=function(){return this.dot(this)},e.prototype.norm=function(){return Math.sqrt(this.normSquared())},e.prototype.isZero=function(){return!(this.x||this.y||this.z)},e.prototype.getTransform=function(){var t=this.normalize(1),i=t.x,e=t.y,n=t.z,o=t.w;return[1-2*e*e-2*n*n,2*i*e-2*n*o,2*i*n+2*e*o,0,2*i*e+2*n*o,1-2*i*i-2*n*n,2*e*n-2*i*o,0,2*i*n-2*e*o,2*e*n+2*i*o,1-2*i*i-2*e*e,0,0,0,0,1]};var r=new n;e.prototype.getMatrix=function(){var t=this.normalize(1),i=t.x,e=t.y,n=t.z,o=t.w;return r.set([[1-2*e*e-2*n*n,2*i*e+2*n*o,2*i*n-2*e*o],[2*i*e-2*n*o,1-2*i*i-2*n*n,2*e*n+2*i*o],[2*i*n+2*e*o,2*e*n-2*i*o,1-2*i*i-2*e*e]])};var a=1e-5;e.prototype.slerp=function(t,i){var e,n,s,r,h;return n=this.dot(t),1-n>a?(e=Math.acos(n),s=Math.sin(e),r=Math.sin((1-i)*e)/s,h=Math.sin(i*e)/s):(r=1-i,h=i),o.set(this.scalarMultiply(r/h).add(t).multiply(h))},i.exports=e},{"./Matrix":37}],39:[function(t,i){function e(t,i){return t+o()*(i-t)}function n(t,i){return t+o()*(i-t+1)>>0}var o=Math.random,s={};s.integer=function(t,i,e){if(t=void 0!==t?t:0,i=void 0!==i?i:1,void 0!==e){for(var o=[],s=0;e>s;s++)o.push(n(t,i));return o}return n(t,i)},s.range=function(t,i,n){if(t=void 0!==t?t:0,i=void 0!==i?i:1,void 0!==n){for(var o=[],s=0;n>s;s++)o.push(e(t,i));return o}return e(t,i)},s.sign=function(t){return t=void 0!==t?t:.5,o()<t?1:-1},s.bool=function(t){return t=void 0!==t?t:.5,o()<t},i.exports=s},{}],40:[function(t,i){var e={};e.clamp=function(t,i){return Math.max(Math.min(t,i[1]),i[0])},e.length=function(t){for(var i=0,e=0;e<t.length;e++)i+=t[e]*t[e];return Math.sqrt(i)},i.exports=e},{}],41:[function(t,i){function e(t,i,e){return 1===arguments.length&&void 0!==t?this.set(t):(this.x=t||0,this.y=i||0,this.z=e||0),this}function n(t,i,e){return this.x=t,this.y=i,this.z=e,this}function o(t){return n.call(this,t[0],t[1],t[2]||0)}function s(t){return n.call(this,t.x,t.y,t.z)}function r(t){return n.call(this,t,0,0)}var a=new e(0,0,0);e.prototype.add=function(t){return n.call(a,this.x+t.x,this.y+t.y,this.z+t.z)},e.prototype.sub=function(t){return n.call(a,this.x-t.x,this.y-t.y,this.z-t.z)},e.prototype.mult=function(t){return n.call(a,t*this.x,t*this.y,t*this.z)},e.prototype.div=function(t){return this.mult(1/t)},e.prototype.cross=function(t){var i=this.x,e=this.y,o=this.z,s=t.x,r=t.y,h=t.z;return n.call(a,o*r-e*h,i*h-o*s,e*s-i*r)},e.prototype.equals=function(t){return t.x===this.x&&t.y===this.y&&t.z===this.z},e.prototype.rotateX=function(t){var i=this.x,e=this.y,o=this.z,s=Math.cos(t),r=Math.sin(t);return n.call(a,i,e*s-o*r,e*r+o*s)},e.prototype.rotateY=function(t){var i=this.x,e=this.y,o=this.z,s=Math.cos(t),r=Math.sin(t);return n.call(a,o*r+i*s,e,o*s-i*r)},e.prototype.rotateZ=function(t){var i=this.x,e=this.y,o=this.z,s=Math.cos(t),r=Math.sin(t);return n.call(a,i*s-e*r,i*r+e*s,o)},e.prototype.dot=function(t){return this.x*t.x+this.y*t.y+this.z*t.z},e.prototype.normSquared=function(){return this.dot(this)},e.prototype.norm=function(){return Math.sqrt(this.normSquared())},e.prototype.normalize=function(t){0===arguments.length&&(t=1);var i=this.norm();return i>1e-7?s.call(a,this.mult(t/i)):n.call(a,t,0,0)},e.prototype.clone=function(){return new e(this)},e.prototype.isZero=function(){return!(this.x||this.y||this.z)},e.prototype.set=function(t){return t instanceof Array?o.call(this,t):"number"==typeof t?r.call(this,t):s.call(this,t)},e.prototype.setXYZ=function(){return n.apply(this,arguments)},e.prototype.set1D=function(t){return r.call(this,t)},e.prototype.put=function(t){this===a?s.call(t,a):s.call(t,this)},e.prototype.clear=function(){return n.call(this,0,0,0)},e.prototype.cap=function h(h){if(1/0===h)return s.call(a,this);var t=this.norm();return t>h?s.call(a,this.mult(h/t)):s.call(a,this)},e.prototype.project=function(t){return t.mult(this.dot(t))},e.prototype.reflectAcross=function(t){return t.normalize().put(t),s(a,this.sub(this.project(t).mult(2)))},e.prototype.get=function(){return[this.x,this.y,this.z]},e.prototype.get1D=function(){return this.x},i.exports=e},{}],42:[function(t,i){i.exports={Matrix:t("./Matrix"),Quaternion:t("./Quaternion"),Random:t("./Random"),Utilities:t("./Utilities"),Vector:t("./Vector")}},{"./Matrix":37,"./Quaternion":38,"./Random":39,"./Utilities":40,"./Vector":41}],43:[function(t,i){function e(t){this.options=Object.create(e.DEFAULT_OPTIONS),t&&this.setOptions(t),this._positionState=new c([0,0]),this._differential=[0,0],this._active=!0,this.sync=new l(["mouse","touch"],{scale:this.options.scale}),this.eventOutput=new p,p.setInputHandler(this,this.sync),p.setOutputHandler(this,this.eventOutput),a.call(this)}function n(t){var i=this.options,e=i.projection,n=i.snapX,o=i.snapY,s=e&_.x?t[0]:0,r=e&_.y?t[1]:0;return n>0&&(s-=s%n),o>0&&(r-=r%o),[s,r]}function o(){this._active&&(this._positionState.isActive()&&this._positionState.halt(),this.eventOutput.emit("start",{position:this.getPosition()}))}function s(t){if(this._active){var i=this.options;this._differential=t.position;var e=n.call(this,this._differential);this._differential[0]-=e[0],this._differential[1]-=e[1];var o=this.getPosition();if(o[0]+=e[0],o[1]+=e[1],i.xRange){var s=[i.xRange[0]+.5*i.snapX,i.xRange[1]-.5*i.snapX];o[0]=y(o[0],s)}if(i.yRange){var r=[i.yRange[0]+.5*i.snapY,i.yRange[1]-.5*i.snapY];o[1]=y(o[1],r)}this.eventOutput.emit("update",{position:o})}}function r(){this._active&&this.eventOutput.emit("end",{position:this.getPosition()})}function a(){this.sync.on("start",o.bind(this)),this.sync.on("update",s.bind(this)),this.sync.on("end",r.bind(this))}var h=t("../core/Transform"),c=t("../transitions/Transitionable"),p=t("../core/EventHandler"),u=t("../math/Utilities"),l=t("../inputs/GenericSync"),f=t("../inputs/MouseSync"),d=t("../inputs/TouchSync");l.register({mouse:f,touch:d});var _={x:1,y:2};e.DIRECTION_X=_.x,e.DIRECTION_Y=_.y;var y=u.clamp;e.DEFAULT_OPTIONS={projection:_.x|_.y,scale:1,xRange:null,yRange:null,snapX:0,snapY:0,transition:{duration:0}},e.prototype.setOptions=function(t){var i=this.options;if(void 0!==t.projection){var e=t.projection;this.options.projection=0,["x","y"].forEach(function(t){-1!==e.indexOf(t)&&(i.projection|=_[t])})}void 0!==t.scale&&(i.scale=t.scale,this.sync.setOptions({scale:t.scale})),void 0!==t.xRange&&(i.xRange=t.xRange),void 0!==t.yRange&&(i.yRange=t.yRange),void 0!==t.snapX&&(i.snapX=t.snapX),void 0!==t.snapY&&(i.snapY=t.snapY)},e.prototype.getPosition=function(){return this._positionState.get()},e.prototype.setRelativePosition=function(t,i,e){var n=this.getPosition(),o=[n[0]+t[0],n[1]+t[1]];this.setPosition(o,i,e)},e.prototype.setPosition=function(t,i,e){this._positionState.isActive()&&this._positionState.halt(),this._positionState.set(t,i,e)},e.prototype.activate=function(){this._active=!0},e.prototype.deactivate=function(){this._active=!1},e.prototype.toggle=function(){this._active=!this._active},e.prototype.modify=function(t){var i=this.getPosition();return{transform:h.translate(i[0],i[1]),target:t}},i.exports=e},{"../core/EventHandler":7,"../core/Transform":15,"../inputs/GenericSync":27,"../inputs/MouseSync":28,"../inputs/TouchSync":33,"../math/Utilities":40,"../transitions/Transitionable":88}],44:[function(t,i){function e(t,i){this.options=Object.create(e.DEFAULT_OPTIONS),this._optionsManager=new o(this.options),t&&this.setOptions(t),i||(i=0),this.transitionHelper=new n(i)}var n=t("../transitions/Transitionable"),o=t("../core/OptionsManager");e.DEFAULT_OPTIONS={cull:!1,transition:!0,pulseInTransition:!0,pulseOutTransition:!0},e.prototype.setOptions=function(t){return this._optionsManager.setOptions(t)},e.prototype.show=function(t,i){t=t||this.options.transition,this.set(1,t,i)},e.prototype.hide=function(t,i){t=t||this.options.transition,this.set(0,t,i)},e.prototype.set=function(t,i,e){this.halt(),this.transitionHelper.set(t,i,e)},e.prototype.halt=function(){this.transitionHelper.halt()},e.prototype.isVisible=function(){return this.transitionHelper.get()>0},e.prototype.modify=function(t){var i=this.transitionHelper.get();return this.options.cull&&!i?void 0:{opacity:i,target:t}},i.exports=e},{"../core/OptionsManager":10,"../transitions/Transitionable":88}],45:[function(t,i){function e(){this._chain=[],arguments.length&&this.addModifier.apply(this,arguments)}e.prototype.addModifier=function(){Array.prototype.push.apply(this._chain,arguments)},e.prototype.removeModifier=function(t){var i=this._chain.indexOf(t);0>i||this._chain.splice(i,1)},e.prototype.modify=function(t){for(var i=this._chain,e=t,n=0;n<i.length;n++)e=i[n].modify(e);return e},i.exports=e},{}],46:[function(t,i){function e(t){this._transformState=new r(o.identity),this._opacityState=new s(1),this._originState=new s([0,0]),this._alignState=new s([0,0]),this._sizeState=new s([0,0]),this._proportionsState=new s([0,0]),this._modifier=new n({transform:this._transformState,opacity:this._opacityState,origin:null,align:null,size:null,proportions:null}),this._hasOrigin=!1,this._hasAlign=!1,this._hasSize=!1,this._hasProportions=!1,t&&(t.transform&&this.setTransform(t.transform),void 0!==t.opacity&&this.setOpacity(t.opacity),t.origin&&this.setOrigin(t.origin),t.align&&this.setAlign(t.align),t.size&&this.setSize(t.size),t.proportions&&this.setProportions(t.proportions))}var n=t("../core/Modifier"),o=t("../core/Transform"),s=t("../transitions/Transitionable"),r=t("../transitions/TransitionableTransform");e.prototype.setTransform=function(t,i,e){return this._transformState.set(t,i,e),this},e.prototype.setOpacity=function(t,i,e){return this._opacityState.set(t,i,e),this},e.prototype.setOrigin=function(t,i,e){return null===t?(this._hasOrigin&&(this._modifier.originFrom(null),this._hasOrigin=!1),this):(this._hasOrigin||(this._hasOrigin=!0,this._modifier.originFrom(this._originState)),this._originState.set(t,i,e),this)},e.prototype.setAlign=function(t,i,e){return null===t?(this._hasAlign&&(this._modifier.alignFrom(null),this._hasAlign=!1),this):(this._hasAlign||(this._hasAlign=!0,this._modifier.alignFrom(this._alignState)),this._alignState.set(t,i,e),this)},e.prototype.setSize=function(t,i,e){return null===t?(this._hasSize&&(this._modifier.sizeFrom(null),this._hasSize=!1),this):(this._hasSize||(this._hasSize=!0,this._modifier.sizeFrom(this._sizeState)),this._sizeState.set(t,i,e),this)},e.prototype.setProportions=function(t,i,e){return null===t?(this._hasProportions&&(this._modifier.proportionsFrom(null),this._hasProportions=!1),this):(this._hasProportions||(this._hasProportions=!0,this._modifier.proportionsFrom(this._proportionsState)),this._proportionsState.set(t,i,e),this)},e.prototype.halt=function(){this._transformState.halt(),this._opacityState.halt(),this._originState.halt(),this._alignState.halt(),this._sizeState.halt(),this._proportionsState.halt()},e.prototype.getTransform=function(){return this._transformState.get()},e.prototype.getFinalTransform=function(){return this._transformState.getFinal()},e.prototype.getOpacity=function(){return this._opacityState.get()},e.prototype.getOrigin=function(){return this._hasOrigin?this._originState.get():null},e.prototype.getAlign=function(){return this._hasAlign?this._alignState.get():null},e.prototype.getSize=function(){return this._hasSize?this._sizeState.get():null},e.prototype.getProportions=function(){return this._hasProportions?this._proportionsState.get():null},e.prototype.modify=function(t){return this._modifier.modify(t)},i.exports=e},{"../core/Modifier":9,"../core/Transform":15,"../transitions/Transitionable":88,"../transitions/TransitionableTransform":89}],47:[function(t,i){i.exports={Draggable:t("./Draggable"),Fader:t("./Fader"),ModifierChain:t("./ModifierChain"),StateModifier:t("./StateModifier")}},{"./Draggable":43,"./Fader":44,"./ModifierChain":45,"./StateModifier":46}],48:[function(t,i){function e(t){this.options=Object.create(e.DEFAULT_OPTIONS),t&&this.setOptions(t),this._particles=[],this._bodies=[],this._agentData={},this._forces=[],this._constraints=[],this._buffer=0,this._prevTime=S(),this._isSleeping=!1,this._eventHandler=null,this._currAgentId=0,this._hasBodies=!1,this._eventHandler=null}function n(t){return t.applyForce?this._forces:t.applyConstraint?this._constraints:void 0}function o(t,i,e){return void 0===i&&(i=this.getParticlesAndBodies()),i instanceof Array||(i=[i]),t.on("change",this.wake.bind(this)),this._agentData[this._currAgentId]={agent:t,id:this._currAgentId,targets:i,source:e},n.call(this,t).push(this._currAgentId),this._currAgentId++}function s(t){return this._agentData[t]}function r(t){var i=s.call(this,this._forces[t]);i.agent.applyForce(i.targets,i.source)}function a(){for(var t=this._forces.length-1;t>-1;t--)r.call(this,t)}function h(t,i){var e=this._agentData[this._constraints[t]];return e.agent.applyConstraint(e.targets,e.source,i)}function c(t){for(var i=0;i<this.options.constraintSteps;){for(var e=this._constraints.length-1;e>-1;e--)h.call(this,e,t);i++}}function p(t,i){t.integrateVelocity(i),this.options.velocityCap&&t.velocity.cap(this.options.velocityCap).put(t.velocity)}function u(t,i){t.integrateAngularMomentum(i),t.updateAngularVelocity(),this.options.angularVelocityCap&&t.angularVelocity.cap(this.options.angularVelocityCap).put(t.angularVelocity)}function l(t,i){t.integrateOrientation(i)}function f(t,i){t.integratePosition(i),t.emit(T.update,t)}function d(t){a.call(this,t),this.forEach(p,t),this.forEachBody(u,t),c.call(this,t),this.forEachBody(l,t),this.forEach(f,t)}function _(){var t=0,i=0;return this.forEach(function(e){i=e.getEnergy(),t+=i}),t}function y(){var t=0;for(var i in this._agentData)t+=this.getAgentEnergy(i);return t}var g=t("../core/EventHandler"),v=17,m=1e3/120,O=17,S=Date.now,T={start:"start",update:"update",end:"end"};e.DEFAULT_OPTIONS={constraintSteps:1,sleepTolerance:1e-7,velocityCap:void 0,angularVelocityCap:void 0},e.prototype.setOptions=function(t){for(var i in t)this.options[i]&&(this.options[i]=t[i])},e.prototype.addBody=function(t){return t._engine=this,t.isBody?(this._bodies.push(t),this._hasBodies=!0):this._particles.push(t),t.on("start",this.wake.bind(this)),t},e.prototype.removeBody=function(t){var i=t.isBody?this._bodies:this._particles,e=i.indexOf(t);if(e>-1){for(var n in this._agentData)this.detachFrom(n.id,t);i.splice(e,1)}0===this.getBodies().length&&(this._hasBodies=!1)},e.prototype.attach=function(t,i,e){if(this.wake(),t instanceof Array){for(var n=[],s=0;s<t.length;s++)n[s]=o.call(this,t[s],i,e);return n}return o.call(this,t,i,e)},e.prototype.attachTo=function(t,i){s.call(this,t).targets.push(i)},e.prototype.detach=function(t){var i=this.getAgent(t),e=n.call(this,i),o=e.indexOf(t);e.splice(o,1),delete this._agentData[t]},e.prototype.detachFrom=function(t,i){var e=s.call(this,t);if(e.source===i)this.detach(t);else{var n=e.targets,o=n.indexOf(i);o>-1&&n.splice(o,1)}},e.prototype.detachAll=function(){this._agentData={},this._forces=[],this._constraints=[],this._currAgentId=0},e.prototype.getAgent=function(t){return s.call(this,t).agent},e.prototype.getParticles=function(){return this._particles},e.prototype.getBodies=function(){return this._bodies},e.prototype.getParticlesAndBodies=function(){return this.getParticles().concat(this.getBodies())},e.prototype.forEachParticle=function(t,i){for(var e=this.getParticles(),n=0,o=e.length;o>n;n++)t.call(this,e[n],i)},e.prototype.forEachBody=function(t,i){if(this._hasBodies)for(var e=this.getBodies(),n=0,o=e.length;o>n;n++)t.call(this,e[n],i)},e.prototype.forEach=function(t,i){this.forEachParticle(t,i),this.forEachBody(t,i)},e.prototype.getAgentEnergy=function(t){var i=s.call(this,t);return i.agent.getEnergy(i.targets,i.source)},e.prototype.getEnergy=function(){return _.call(this)+y.call(this)},e.prototype.step=function(){if(!this.isSleeping()){var t=S(),i=t-this._prevTime;this._prevTime=t,m>i||(i>O&&(i=O),d.call(this,v),this.emit(T.update,this),this.getEnergy()<this.options.sleepTolerance&&this.sleep())}},e.prototype.isSleeping=function(){return this._isSleeping},e.prototype.isActive=function(){return!this._isSleeping},e.prototype.sleep=function(){this._isSleeping||(this.forEach(function(t){t.sleep()}),this.emit(T.end,this),this._isSleeping=!0)},e.prototype.wake=function(){this._isSleeping&&(this._prevTime=S(),this.emit(T.start,this),this._isSleeping=!1)},e.prototype.emit=function(t,i){null!==this._eventHandler&&this._eventHandler.emit(t,i)},e.prototype.on=function(t,i){null===this._eventHandler&&(this._eventHandler=new g),this._eventHandler.on(t,i)},i.exports=e},{"../core/EventHandler":7}],49:[function(t,i){function e(t){n.call(this,t),t=t||{},this.orientation=new r,this.angularVelocity=new s,this.angularMomentum=new s,this.torque=new s,t.orientation&&this.orientation.set(t.orientation),t.angularVelocity&&this.angularVelocity.set(t.angularVelocity),t.angularMomentum&&this.angularMomentum.set(t.angularMomentum),t.torque&&this.torque.set(t.torque),this.angularVelocity.w=0,this.setMomentsOfInertia(),this.pWorld=new s}var n=t("./Particle"),o=t("../../core/Transform"),s=t("../../math/Vector"),r=t("../../math/Quaternion"),a=t("../../math/Matrix"),h=t("../integrators/SymplecticEuler");e.DEFAULT_OPTIONS=n.DEFAULT_OPTIONS,e.DEFAULT_OPTIONS.orientation=[0,0,0,1],e.DEFAULT_OPTIONS.angularVelocity=[0,0,0],e.prototype=Object.create(n.prototype),e.prototype.constructor=e,e.prototype.isBody=!0,e.prototype.setMass=function(){n.prototype.setMass.apply(this,arguments),this.setMomentsOfInertia()},e.prototype.setMomentsOfInertia=function(){this.inertia=new a,this.inverseInertia=new a},e.prototype.updateAngularVelocity=function(){this.angularVelocity.set(this.inverseInertia.vectorMultiply(this.angularMomentum))},e.prototype.toWorldCoordinates=function(t){return this.pWorld.set(this.orientation.rotateVector(t))},e.prototype.getEnergy=function(){return n.prototype.getEnergy.call(this)+.5*this.inertia.vectorMultiply(this.angularVelocity).dot(this.angularVelocity)},e.prototype.reset=function(t,i,e,o){n.prototype.reset.call(this,t,i),this.angularVelocity.clear(),this.setOrientation(e||[1,0,0,0]),this.setAngularMomentum(o||[0,0,0])},e.prototype.setOrientation=function(t){this.orientation.set(t)},e.prototype.setAngularVelocity=function(t){this.wake(),this.angularVelocity.set(t)},e.prototype.setAngularMomentum=function(t){this.wake(),this.angularMomentum.set(t)},e.prototype.applyForce=function(t,i){n.prototype.applyForce.call(this,t),void 0!==i&&this.applyTorque(i.cross(t))},e.prototype.applyTorque=function(t){this.wake(),this.torque.set(this.torque.add(t))},e.prototype.getTransform=function(){return o.thenMove(this.orientation.getTransform(),o.getTranslate(n.prototype.getTransform.call(this)))},e.prototype._integrate=function(t){n.prototype._integrate.call(this,t),this.integrateAngularMomentum(t),this.updateAngularVelocity(t),this.integrateOrientation(t)},e.prototype.integrateAngularMomentum=function(t){h.integrateAngularMomentum(this,t)},e.prototype.integrateOrientation=function(t){h.integrateOrientation(this,t)},i.exports=e},{"../../core/Transform":15,"../../math/Matrix":37,"../../math/Quaternion":38,"../../math/Vector":41,"../integrators/SymplecticEuler":72,"./Particle":51}],50:[function(t,i){function e(t){t=t||{},this.setRadius(t.radius||0),n.call(this,t)}var n=t("./Body"),o=t("../../math/Matrix");e.prototype=Object.create(n.prototype),e.prototype.constructor=e,e.prototype.setRadius=function(t){this.radius=t,this.size=[2*this.radius,2*this.radius],this.setMomentsOfInertia()},e.prototype.setMomentsOfInertia=function(){var t=this.mass,i=this.radius;this.inertia=new o([[.25*t*i*i,0,0],[0,.25*t*i*i,0],[0,0,.5*t*i*i]]),this.inverseInertia=new o([[4/(t*i*i),0,0],[0,4/(t*i*i),0],[0,0,2/(t*i*i)]])},i.exports=e},{"../../math/Matrix":37,"./Body":49}],51:[function(t,i){function e(t){t=t||{};var i=e.DEFAULT_OPTIONS;this.position=new o,this.velocity=new o,this.force=new o,this._engine=null,this._isSleeping=!0,this._eventOutput=null,this.mass=void 0!==t.mass?t.mass:i.mass,this.inverseMass=1/this.mass,this.setPosition(t.position||i.position),this.setVelocity(t.velocity||i.velocity),this.force.set(t.force||[0,0,0]),this.transform=s.identity.slice(),this._spec={size:[!0,!0],target:{transform:this.transform,origin:[.5,.5],target:null}}}function n(){this._eventOutput=new r,this._eventOutput.bindThis(this),r.setOutputHandler(this,this._eventOutput)}var o=t("../../math/Vector"),s=t("../../core/Transform"),r=t("../../core/EventHandler"),a=t("../integrators/SymplecticEuler");e.DEFAULT_OPTIONS={position:[0,0,0],velocity:[0,0,0],mass:1};var h={start:"start",update:"update",end:"end"},c=Date.now;e.prototype.isBody=!1,e.prototype.isActive=function(){return!this._isSleeping},e.prototype.sleep=function(){this._isSleeping||(this.emit(h.end,this),this._isSleeping=!0)},e.prototype.wake=function(){this._isSleeping&&(this.emit(h.start,this),this._isSleeping=!1,this._prevTime=c(),this._engine&&this._engine.wake())},e.prototype.setPosition=function(t){this.position.set(t)},e.prototype.setPosition1D=function(t){this.position.x=t},e.prototype.getPosition=function(){return this._engine.step(),this.position.get()},e.prototype.getPosition1D=function(){return this._engine.step(),this.position.x},e.prototype.setVelocity=function(t){this.velocity.set(t),(0!==t[0]||0!==t[1]||0!==t[2])&&this.wake()},e.prototype.setVelocity1D=function(t){this.velocity.x=t,0!==t&&this.wake()},e.prototype.getVelocity=function(){return this.velocity.get()},e.prototype.setForce=function(t){this.force.set(t),this.wake()},e.prototype.getVelocity1D=function(){return this.velocity.x},e.prototype.setMass=function(t){this.mass=t,this.inverseMass=1/t},e.prototype.getMass=function(){return this.mass},e.prototype.reset=function(t,i){this.setPosition(t||[0,0,0]),this.setVelocity(i||[0,0,0])},e.prototype.applyForce=function(t){t.isZero()||(this.force.add(t).put(this.force),this.wake())},e.prototype.applyImpulse=function(t){if(!t.isZero()){var i=this.velocity;i.add(t.mult(this.inverseMass)).put(i)}},e.prototype.integrateVelocity=function(t){a.integrateVelocity(this,t)},e.prototype.integratePosition=function(t){a.integratePosition(this,t)},e.prototype._integrate=function(t){this.integrateVelocity(t),this.integratePosition(t)},e.prototype.getEnergy=function(){return.5*this.mass*this.velocity.normSquared()},e.prototype.getTransform=function(){this._engine.step();var t=this.position,i=this.transform;return i[12]=t.x,i[13]=t.y,i[14]=t.z,i},e.prototype.modify=function(t){var i=this._spec.target;return i.transform=this.getTransform(),i.target=t,this._spec},e.prototype.emit=function(t,i){this._eventOutput&&this._eventOutput.emit(t,i)},e.prototype.on=function(){return n.call(this),this.on.apply(this,arguments)},e.prototype.removeListener=function(){return n.call(this),this.removeListener.apply(this,arguments)},e.prototype.pipe=function(){return n.call(this),this.pipe.apply(this,arguments)},e.prototype.unpipe=function(){return n.call(this),this.unpipe.apply(this,arguments)},i.exports=e},{"../../core/EventHandler":7,"../../core/Transform":15,"../../math/Vector":41,"../integrators/SymplecticEuler":72}],52:[function(t,i){function e(t){t=t||{},this.size=t.size||[0,0],n.call(this,t)}var n=t("./Body"),o=t("../../math/Matrix");e.prototype=Object.create(n.prototype),e.prototype.constructor=e,e.prototype.setSize=function(t){this.size=t,this.setMomentsOfInertia()},e.prototype.setMomentsOfInertia=function(){var t=this.mass,i=this.size[0],e=this.size[1];this.inertia=new o([[t*e*e/12,0,0],[0,t*i*i/12,0],[0,0,t*(i*i+e*e)/12]]),this.inverseInertia=new o([[12/(t*e*e),0,0],[0,12/(t*i*i),0],[0,0,12/(t*(i*i+e*e))]])},i.exports=e},{"../../math/Matrix":37,"./Body":49}],53:[function(t,i){i.exports={Body:t("./Body"),Circle:t("./Circle"),Particle:t("./Particle"),Rectangle:t("./Rectangle")}},{"./Body":49,"./Circle":50,"./Particle":51,"./Rectangle":52}],54:[function(t,i){function e(t){this.options=Object.create(e.DEFAULT_OPTIONS),t&&this.setOptions(t),this.normal=new o,this.pDiff=new o,this.vDiff=new o,this.impulse1=new o,this.impulse2=new o,n.call(this)}var n=t("./Constraint"),o=t("../../math/Vector");e.prototype=Object.create(n.prototype),e.prototype.constructor=e,e.DEFAULT_OPTIONS={restitution:.5,drift:.5,slop:0},e.prototype.setOptions=function(t){for(var i in t)this.options[i]=t[i]},e.prototype.applyConstraint=function(t,i,e){if(void 0!==i)for(var n=i.velocity,o=i.position,s=i.inverseMass,r=i.radius,a=this.options,h=a.drift,c=-a.slop,p=a.restitution,u=this.normal,l=this.pDiff,f=this.vDiff,d=this.impulse1,_=this.impulse2,y=0;y<t.length;y++){var g=t[y];if(g!==i){var v=g.velocity,m=g.position,O=g.inverseMass,S=g.radius;l.set(m.sub(o)),f.set(v.sub(n));var T=l.norm(),w=T-(r+S),b=1/(s+O),E=0;if(0>w){if(u.set(l.normalize()),this._eventOutput){var I={target:g,source:i,overlap:w,normal:u};this._eventOutput.emit("preCollision",I),this._eventOutput.emit("collision",I)}var x=c>=w?((1+p)*u.dot(f)+h/e*(w-c))/(E+e/b):(1+p)*u.dot(f)/(E+e/b);u.mult(e*x).put(d),d.mult(-1).put(_),i.applyImpulse(d),g.applyImpulse(_),this._eventOutput&&this._eventOutput.emit("postCollision",I)}}}},i.exports=e},{"../../math/Vector":41,"./Constraint":55}],55:[function(t,i){function e(){this.options=this.options||{},this._eventOutput=new n,n.setOutputHandler(this,this._eventOutput)}var n=t("../../core/EventHandler");e.prototype.setOptions=function(t){this._eventOutput.emit("change",t)},e.prototype.applyConstraint=function(){},e.prototype.getEnergy=function(){return 0},i.exports=e},{"../../core/EventHandler":7}],56:[function(t,i){function e(t){this.options=Object.create(e.DEFAULT_OPTIONS),t&&this.setOptions(t),this.J=new o,this.impulse=new o,n.call(this)}var n=t("./Constraint"),o=t("../../math/Vector");e.prototype=Object.create(n.prototype),e.prototype.constructor=e;var s=1e-7,r=Math.PI;e.DEFAULT_OPTIONS={equation:function(){return 0},plane:function(t,i,e){return e},period:0,dampingRatio:0},e.prototype.setOptions=function(t){for(var i in t)this.options[i]=t[i]},e.prototype.applyConstraint=function(t,i,e){for(var n=this.options,o=this.impulse,a=this.J,h=n.equation,c=n.plane,p=n.dampingRatio,u=n.period,l=0;l<t.length;l++){var f,d,_=t[l],y=_.velocity,g=_.position,v=_.mass;if(0===u)f=0,d=1;else{var m=4*v*r*p/u,O=4*v*r*r/(u*u);f=1/(m+e*O),d=e*O/(m+e*O)}var S=g.x,T=g.y,w=g.z,b=h(S,T,w),E=(h(S+s,g,g)-b)/s,I=(h(S,T+s,g)-b)/s,x=(h(S,T,g+s)-b)/s,M=c(S,T,w),z=(c(S+s,T,w)-M)/s,C=(c(S,T+s,w)-M)/s,P=(c(S,T,w+s)-M)/s;a.setXYZ(E+z,I+C,x+P);var F=d/e*(b+M),D=-(a.dot(y)+F)/(f+e*a.normSquared()/v);o.set(a.mult(e*D)),_.applyImpulse(o)}},i.exports=e},{"../../math/Vector":41,"./Constraint":55}],57:[function(t,i){function e(t){this.options=Object.create(this.constructor.DEFAULT_OPTIONS),t&&this.setOptions(t),this.impulse=new o,this.normal=new o,this.diffP=new o,this.diffV=new o,n.call(this)}var n=t("./Constraint"),o=t("../../math/Vector");e.prototype=Object.create(n.prototype),e.prototype.constructor=e,e.DEFAULT_OPTIONS={anchor:null,length:0,minLength:0,period:0,dampingRatio:0};var s=Math.PI;e.prototype.setOptions=function(t){t.anchor&&(t.anchor.position instanceof o&&(this.options.anchor=t.anchor.position),t.anchor instanceof o&&(this.options.anchor=t.anchor),t.anchor instanceof Array&&(this.options.anchor=new o(t.anchor))),void 0!==t.length&&(this.options.length=t.length),void 0!==t.dampingRatio&&(this.options.dampingRatio=t.dampingRatio),void 0!==t.period&&(this.options.period=t.period),void 0!==t.minLength&&(this.options.minLength=t.minLength)},e.prototype.setAnchor=function(t){this.options.anchor||(this.options.anchor=new o),this.options.anchor.set(t)},e.prototype.applyConstraint=function(t,i,e){var n,o,r=this.normal,a=this.diffP,h=this.diffV,c=this.impulse,p=this.options,u=p.dampingRatio,l=p.period,f=p.minLength;if(i){var d=i.velocity;n=i.position,o=i.inverseMass}else n=this.options.anchor,o=0;for(var _=this.options.length,y=0;y<t.length;y++){var g=t[y],v=g.velocity,m=g.position,O=g.inverseMass;a.set(m.sub(n)),r.set(a.normalize());var S=a.norm()-_;if(Math.abs(S)<f)return;h.set(i?v.sub(d):v);var T,w,b=1/(O+o);if(0===l)T=0,w=1;else{var E=4*b*s*u/l,I=4*b*s*s/(l*l);T=1/(E+e*I),w=e*I/(E+e*I)}var x=w/e*S,M=-(r.dot(h)+x)/(T+e/b);c.set(r.mult(e*M)),g.applyImpulse(c),i&&i.applyImpulse(c.mult(-1))}},i.exports=e},{"../../math/Vector":41,"./Constraint":55}],58:[function(t,i){function e(t){n.call(this),this.options=Object.create(this.constructor.DEFAULT_OPTIONS),t&&this.setOptions(t),this.pDiff=new o,this.vDiff=new o,this.impulse1=new o,this.impulse2=new o}var n=t("./Constraint"),o=t("../../math/Vector");e.prototype=Object.create(n.prototype),e.prototype.constructor=e,e.DEFAULT_OPTIONS={period:300,dampingRatio:.1,length:0,anchor:void 0};var s=Math.PI;e.prototype.setOptions=function(t){void 0!==t.anchor&&(t.anchor instanceof o&&(this.options.anchor=t.anchor),t.anchor.position instanceof o&&(this.options.anchor=t.anchor.position),t.anchor instanceof Array&&(this.options.anchor=new o(t.anchor))),void 0!==t.length&&(this.options.length=t.length),void 0!==t.dampingRatio&&(this.options.dampingRatio=t.dampingRatio),void 0!==t.period&&(this.options.period=t.period),n.prototype.setOptions.call(this,t)},e.prototype.getEnergy=function(t,i){for(var e=this.options,n=e.length,o=e.anchor||i.position,r=Math.pow(2*s/e.period,2),a=0,h=0;h<t.length;h++){var c=t[h],p=o.sub(c.position).norm()-n;a+=.5*r*p*p}return a},e.prototype.applyConstraint=function(t,i,e){for(var n=this.options,o=this.pDiff,r=this.vDiff,a=this.impulse1,h=this.impulse2,c=n.length,p=n.anchor||i.position,u=n.period,l=n.dampingRatio,f=0;f<t.length;f++){var d=t[f],_=d.position,y=d.velocity,g=d.mass,v=d.inverseMass;
o.set(_.sub(p));var m,O=o.norm()-c;if(i){var S=i.inverseMass,T=i.velocity;r.set(y.sub(T)),m=1/(v+S)}else r.set(y),m=g;var w,b;if(0===this.options.period)w=0,b=1;else{var E=4*m*s*s/(u*u),I=4*m*s*l/u;b=e*E/(I+e*E),w=1/(I+e*E)}var x=b/e*O;o.normalize(-x).sub(r).mult(e/(w+e/m)).put(a),d.applyImpulse(a),i&&(a.mult(-1).put(h),i.applyImpulse(h))}},i.exports=e},{"../../math/Vector":41,"./Constraint":55}],59:[function(t,i){function e(t){this.options=Object.create(e.DEFAULT_OPTIONS),t&&this.setOptions(t),this.J=new o,this.impulse=new o,n.call(this)}var n=t("./Constraint"),o=t("../../math/Vector");e.prototype=Object.create(n.prototype),e.prototype.constructor=e,e.DEFAULT_OPTIONS={equation:void 0,period:0,dampingRatio:0};var s=1e-7,r=Math.PI;e.prototype.setOptions=function(t){for(var i in t)this.options[i]=t[i]},e.prototype.applyConstraint=function(t,i,e){for(var n=this.impulse,o=this.J,a=this.options,h=a.equation,c=a.dampingRatio,p=a.period,u=0;u<t.length;u++){var l,f,d=t[u],_=d.velocity,y=d.position,g=d.mass;if(0===p)l=0,f=1;else{var v=4*g*r*c/p,m=4*g*r*r/(p*p);l=1/(v+e*m),f=e*m/(v+e*m)}var O=y.x,S=y.y,T=y.z,w=h(O,S,T),b=(h(O+s,y,y)-w)/s,E=(h(O,S+s,y)-w)/s,I=(h(O,S,y+s)-w)/s;o.setXYZ(b,E,I);var x=f/e*w,M=-(o.dot(_)+x)/(l+e*o.normSquared()/g);n.set(o.mult(e*M)),d.applyImpulse(n)}},i.exports=e},{"../../math/Vector":41,"./Constraint":55}],60:[function(t,i){function e(t){this.options=Object.create(e.DEFAULT_OPTIONS),t&&this.setOptions(t),this.diff=new h,this.impulse=new h,a.call(this)}function n(t,i){return i.dot(t)}function o(t){var i=this.options.normal,e=this.options.distance;return t.dot(i)+e}function s(t,i,n){var o=t.position,s=t.velocity,r=t.mass,a=this.options.normal,h=this.options.onContact,c=this.options.restitution,p=this.impulse,u=this.options.drift,l=-this.options.slop,f=0;if(this._eventOutput){var d={particle:t,wall:this,overlap:i,normal:a};this._eventOutput.emit("preCollision",d),this._eventOutput.emit("collision",d)}switch(h){case e.ON_CONTACT.REFLECT:var _=l>i?-((1+c)*a.dot(s)+u/n*(i-l))/(r*n+f):-((1+c)*a.dot(s))/(r*n+f);p.set(a.mult(n*_)),t.applyImpulse(p),t.setPosition(o.add(a.mult(-i)))}this._eventOutput&&this._eventOutput.emit("postCollision",d)}function r(t,i){var n=this.options.onContact,o=t.position,s=this.options.normal;n===e.ON_CONTACT.REFLECT&&t.setPosition(o.add(s.mult(-i)))}var a=t("./Constraint"),h=t("../../math/Vector");e.prototype=Object.create(a.prototype),e.prototype.constructor=e,e.ON_CONTACT={REFLECT:0,SILENT:1},e.DEFAULT_OPTIONS={restitution:.5,drift:.5,slop:0,normal:[1,0,0],distance:0,onContact:e.ON_CONTACT.REFLECT},e.prototype.setOptions=function(t){void 0!==t.normal&&(t.normal instanceof h&&(this.options.normal=t.normal.clone()),t.normal instanceof Array&&(this.options.normal=new h(t.normal))),void 0!==t.restitution&&(this.options.restitution=t.restitution),void 0!==t.drift&&(this.options.drift=t.drift),void 0!==t.slop&&(this.options.slop=t.slop),void 0!==t.distance&&(this.options.distance=t.distance),void 0!==t.onContact&&(this.options.onContact=t.onContact)},e.prototype.applyConstraint=function(t,i,e){for(var a=this.options.normal,h=0;h<t.length;h++){var c=t[h],p=c.position,u=c.velocity,l=c.radius||0,f=o.call(this,p.add(a.mult(-l))),d=n.call(this,a,u);0>=f&&(0>d?s.call(this,c,f,e):r.call(this,c,f,e))}},i.exports=e},{"../../math/Vector":41,"./Constraint":55}],61:[function(t,i){function e(t){this.options=Object.create(e.DEFAULT_OPTIONS),t&&this.setOptions(t),o.call(this,t.sides||this.options.sides),r.call(this)}function n(t,i,n){var o,s=e.SIDES;switch(parseInt(t)){case s.LEFT:o=i[0]*n[0];break;case s.TOP:o=i[1]*n[1];break;case s.FRONT:o=i[2]*n[2];break;case s.RIGHT:o=i[0]*(1-n[0]);break;case s.BOTTOM:o=i[1]*(1-n[1]);break;case s.BACK:o=i[2]*(1-n[2])}return o}function o(t){this.components={};for(var i=this.components,e=0;e<t.length;e++){var o=t[e];i[e]=new a({normal:c[o].clone(),distance:n(o,this.options.size,this.options.origin)})}}function s(t){this.forEach(function(i){i.setOptions(t)});for(var i in t)this.options[i]=t[i]}var r=t("./Constraint"),a=t("./Wall"),h=t("../../math/Vector");e.prototype=Object.create(r.prototype),e.prototype.constructor=e,e.ON_CONTACT=a.ON_CONTACT,e.SIDES={LEFT:0,RIGHT:1,TOP:2,BOTTOM:3,FRONT:4,BACK:5,TWO_DIMENSIONAL:[0,1,2,3],THREE_DIMENSIONAL:[0,1,2,3,4,5]},e.DEFAULT_OPTIONS={sides:e.SIDES.TWO_DIMENSIONAL,size:[window.innerWidth,window.innerHeight,0],origin:[.5,.5,.5],drift:.5,slop:0,restitution:.5,onContact:e.ON_CONTACT.REFLECT};var c={0:new h(1,0,0),1:new h(-1,0,0),2:new h(0,1,0),3:new h(0,-1,0),4:new h(0,0,1),5:new h(0,0,-1)};e.prototype.setOptions=function(t){var i=!1;void 0!==t.restitution&&s.call(this,{restitution:t.restitution}),void 0!==t.drift&&s.call(this,{drift:t.drift}),void 0!==t.slop&&s.call(this,{slop:t.slop}),void 0!==t.onContact&&s.call(this,{onContact:t.onContact}),void 0!==t.size&&(i=!0),void 0!==t.sides&&(this.options.sides=t.sides),void 0!==t.origin&&(i=!0),i&&this.setSize(t.size,t.origin)},e.prototype.setSize=function(t,i){i=i||this.options.origin,i.length<3&&(i[2]=.5),this.forEach(function(e,o){var s=n(o,t,i);e.setOptions({distance:s})}),this.options.size=t,this.options.origin=i},e.prototype.applyConstraint=function(t,i,e){this.forEach(function(n){n.applyConstraint(t,i,e)})},e.prototype.forEach=function(t){var i=this.options.sides;for(var e in this.sides)t(i[e],e)},e.prototype.rotateZ=function(t){this.forEach(function(i){var e=i.options.normal;e.rotateZ(t).put(e)})},e.prototype.rotateX=function(t){this.forEach(function(i){var e=i.options.normal;e.rotateX(t).put(e)})},e.prototype.rotateY=function(t){this.forEach(function(i){var e=i.options.normal;e.rotateY(t).put(e)})},i.exports=e},{"../../math/Vector":41,"./Constraint":55,"./Wall":60}],62:[function(t,i){i.exports={Collision:t("./Collision"),Constraint:t("./Constraint"),Curve:t("./Curve"),Distance:t("./Distance"),Snap:t("./Snap"),Surface:t("./Surface"),Wall:t("./Wall"),Walls:t("./Walls")}},{"./Collision":54,"./Constraint":55,"./Curve":56,"./Distance":57,"./Snap":58,"./Surface":59,"./Wall":60,"./Walls":61}],63:[function(t,i){function e(t){this.options=Object.create(this.constructor.DEFAULT_OPTIONS),t&&this.setOptions(t),n.call(this)}var n=t("./Force");e.prototype=Object.create(n.prototype),e.prototype.constructor=e,e.FORCE_FUNCTIONS={LINEAR:function(t){return t},QUADRATIC:function(t){return t.mult(t.norm())}},e.DEFAULT_OPTIONS={strength:.01,forceFunction:e.FORCE_FUNCTIONS.LINEAR},e.prototype.applyForce=function(t){var i,e,n=this.options.strength,o=this.options.forceFunction,s=this.force;for(i=0;i<t.length;i++)e=t[i],o(e.velocity).mult(-n).put(s),e.applyForce(s)},e.prototype.setOptions=function(t){for(var i in t)this.options[i]=t[i]},i.exports=e},{"./Force":64}],64:[function(t,i){function e(t){this.force=new n(t),this._eventOutput=new o,o.setOutputHandler(this,this._eventOutput)}var n=t("../../math/Vector"),o=t("../../core/EventHandler");e.prototype.setOptions=function(t){this._eventOutput.emit("change",t)},e.prototype.applyForce=function(t){for(var i=t.length;i--;)t[i].applyForce(this.force)},e.prototype.getEnergy=function(){return 0},i.exports=e},{"../../core/EventHandler":7,"../../math/Vector":41}],65:[function(t,i){function e(t){this.options=Object.create(e.DEFAULT_OPTIONS),t&&this.setOptions(t),this.disp=new o,n.call(this)}var n=t("./Force"),o=t("../../math/Vector");e.prototype=Object.create(n.prototype),e.prototype.constructor=e,e.DECAY_FUNCTIONS={LINEAR:function(t,i){return Math.max(1-1/i*t,0)},MORSE:function(t,i){var e=0===i?100:i,n=t+e*(1-Math.log(2));return Math.max(1-Math.pow(1-Math.exp(n/e-1),2),0)},INVERSE:function(t,i){return 1/(1-i+t)},GRAVITY:function(t,i){return 1/(1-i+t*t)}},e.DEFAULT_OPTIONS={strength:1,anchor:void 0,range:[0,1/0],cutoff:0,cap:1/0,decayFunction:e.DECAY_FUNCTIONS.GRAVITY},e.prototype.setOptions=function(t){void 0!==t.anchor&&(t.anchor.position instanceof o&&(this.options.anchor=t.anchor.position),t.anchor instanceof Array&&(this.options.anchor=new o(t.anchor)),delete t.anchor);for(var i in t)this.options[i]=t[i]},e.prototype.applyForce=function(t,i){var e=this.options,n=this.force,o=this.disp,s=e.strength,r=e.anchor||i.position,a=e.cap,h=e.cutoff,c=e.range[0],p=e.range[1],u=e.decayFunction;if(0!==s)for(var l,f,d,_,y=t.length;y--;)l=t[y],l!==i&&(f=l.mass,d=l.position,o.set(d.sub(r)),_=o.norm(),p>_&&_>c&&(n.set(o.normalize(s*f*u(_,h)).cap(a)),l.applyForce(n)))},i.exports=e},{"../../math/Vector":41,"./Force":64}],66:[function(t,i){function e(t){n.call(this,t)}var n=t("./Drag");e.prototype=Object.create(n.prototype),e.prototype.constructor=e,e.DEFAULT_OPTIONS=n.DEFAULT_OPTIONS,e.FORCE_FUNCTIONS=n.FORCE_FUNCTIONS,e.FORCE_FUNCTIONS={LINEAR:function(t){return t},QUADRATIC:function(t){return t.mult(t.norm())}},e.prototype.applyForce=function(t){var i,e,n=this.options.strength,o=this.options.forceFunction,s=this.force;for(i=0;i<t.length;i++)e=t[i],o(e.angularVelocity).mult(-100*n).put(s),e.applyTorque(s)},e.prototype.setOptions=function(t){for(var i in t)this.options[i]=t[i]},i.exports=e},{"./Drag":63}],67:[function(t,i){function e(t){a.call(this,t)}function n(){var t=this.options;t.stiffness=Math.pow(2*c/t.period,2)}function o(){var t=this.options;t.damping=4*c*t.dampingRatio/t.period}function s(){n.call(this),o.call(this)}var r=t("./Force"),a=t("./Spring"),h=t("../../math/Quaternion");e.prototype=Object.create(a.prototype),e.prototype.constructor=e,e.DEFAULT_OPTIONS=a.DEFAULT_OPTIONS,e.FORCE_FUNCTIONS=a.FORCE_FUNCTIONS;var c=Math.PI;e.prototype.setOptions=function(t){void 0!==t.anchor&&(t.anchor instanceof h&&(this.options.anchor=t.anchor),t.anchor instanceof Array&&(this.options.anchor=new h(t.anchor))),void 0!==t.period&&(this.options.period=t.period),void 0!==t.dampingRatio&&(this.options.dampingRatio=t.dampingRatio),void 0!==t.length&&(this.options.length=t.length),void 0!==t.forceFunction&&(this.options.forceFunction=t.forceFunction),void 0!==t.maxLength&&(this.options.maxLength=t.maxLength),s.call(this),r.prototype.setOptions.call(this,t)},e.prototype.applyForce=function(t){var i,e,n,o,s=this.force,r=this.options,a=this.disp,h=r.stiffness,c=r.damping,p=r.length,u=r.anchor,l=r.forceFunction,f=r.maxLength;for(i=0;i<t.length;i++){if(e=t[i],a.set(u.sub(e.orientation)),n=a.norm()-p,0===n)return;o=e.mass,h*=o,c*=o,s.set(a.normalize(h*l(n,f))),c&&s.add(e.angularVelocity.mult(-c)).put(s),e.applyTorque(s)}},e.prototype.getEnergy=function(t){for(var i=this.options,e=i.length,n=i.anchor,o=i.stiffness,s=0,r=0;r<t.length;r++){var a=t[r],h=n.sub(a.orientation).norm()-e;s+=.5*o*h*h}return s},i.exports=e},{"../../math/Quaternion":38,"./Force":64,"./Spring":68}],68:[function(t,i){function e(t){r.call(this),this.options=Object.create(this.constructor.DEFAULT_OPTIONS),t&&this.setOptions(t),this.disp=new a(0,0,0),s.call(this)}function n(){var t=this.options;t.stiffness=Math.pow(2*h/t.period,2)}function o(){var t=this.options;t.damping=4*h*t.dampingRatio/t.period}function s(){n.call(this),o.call(this)}var r=t("./Force"),a=t("../../math/Vector");e.prototype=Object.create(r.prototype),e.prototype.constructor=e;var h=Math.PI,c=150;e.FORCE_FUNCTIONS={FENE:function(t,i){var e=.99*i,n=Math.max(Math.min(t,e),-e);return n/(1-n*n/(i*i))},HOOK:function(t){return t}},e.DEFAULT_OPTIONS={period:300,dampingRatio:.1,length:0,maxLength:1/0,anchor:void 0,forceFunction:e.FORCE_FUNCTIONS.HOOK},e.prototype.setOptions=function(t){void 0!==t.anchor&&(t.anchor.position instanceof a&&(this.options.anchor=t.anchor.position),t.anchor instanceof a&&(this.options.anchor=t.anchor),t.anchor instanceof Array&&(this.options.anchor=new a(t.anchor))),void 0!==t.period&&(t.period<c&&(t.period=c,console.warn("The period of a SpringTransition is capped at "+c+" ms. Use a SnapTransition for faster transitions")),this.options.period=t.period),void 0!==t.dampingRatio&&(this.options.dampingRatio=t.dampingRatio),void 0!==t.length&&(this.options.length=t.length),void 0!==t.forceFunction&&(this.options.forceFunction=t.forceFunction),void 0!==t.maxLength&&(this.options.maxLength=t.maxLength),s.call(this),r.prototype.setOptions.call(this,t)},e.prototype.applyForce=function(t,i){var e,n,o,s,r,a,h=this.force,c=this.disp,p=this.options,u=p.stiffness,l=p.damping,f=p.length,d=p.maxLength,_=p.anchor||i.position,y=p.forceFunction;for(e=0;e<t.length;e++){if(n=t[e],o=n.position,s=n.velocity,_.sub(o).put(c),r=c.norm()-f,0===r)return;a=n.mass,u*=a,l*=a,c.normalize(u*y(r,d)).put(h),l&&(i?h.add(s.sub(i.velocity).mult(-l)).put(h):h.add(s.mult(-l)).put(h)),n.applyForce(h),i&&i.applyForce(h.mult(-1))}},e.prototype.getEnergy=function(t,i){for(var e=this.options,n=e.length,o=i?i.position:e.anchor,s=e.stiffness,r=0,a=0;a<t.length;a++){var h=t[a],c=o.sub(h.position).norm()-n;r+=.5*s*c*c}return r},i.exports=e},{"../../math/Vector":41,"./Force":64}],69:[function(t,i){function e(t){o.call(this),this.options=Object.create(e.DEFAULT_OPTIONS),t&&this.setOptions(t),this.evaluation=new s}function n(t){var i=e.FIELDS;switch(t){case i.CONSTANT:this.options.direction?this.options.direction instanceof Array&&(this.options.direction=new s(this.options.direction)):this.options.direction=new s(0,1,0);break;case i.POINT_ATTRACTOR:this.options.position?this.options.position instanceof Array&&(this.options.position=new s(this.options.position)):this.options.position=new s(0,0,0)}}var o=t("./Force"),s=t("../../math/Vector");e.prototype=Object.create(o.prototype),e.prototype.constructor=e,e.FIELDS={CONSTANT:function(t,i){i.direction.put(this.evaluation)},LINEAR:function(t){t.put(this.evaluation)},RADIAL:function(t){t.mult(-1).put(this.evaluation)},POINT_ATTRACTOR:function(t,i){i.position.sub(t).put(this.evaluation)}},e.DEFAULT_OPTIONS={strength:.01,field:e.FIELDS.CONSTANT},e.prototype.setOptions=function(t){void 0!==t.strength&&(this.options.strength=t.strength),void 0!==t.field&&(this.options.field=t.field,n.call(this,this.options.field))},e.prototype.applyForce=function(t){var i,e,n=this.force,o=this.options.strength,s=this.options.field;for(i=0;i<t.length;i++)e=t[i],s.call(this,e.position,this.options),this.evaluation.mult(e.mass*o).put(n),e.applyForce(n)},e.prototype.getEnergy=function(t){var i,n,o=this.options.field,s=e.FIELDS,r=0;switch(o){case s.CONSTANT:r=t.length*this.options.direction.norm();break;case s.RADIAL:for(i=0;i<t.length;i++)n=t[i],r+=n.position.norm();break;case s.POINT_ATTRACTOR:for(i=0;i<t.length;i++)n=t[i],r+=n.position.sub(this.options.position).norm()}return r*=this.options.strength},i.exports=e},{"../../math/Vector":41,"./Force":64}],70:[function(t,i){i.exports={Drag:t("./Drag"),Force:t("./Force"),Repulsion:t("./Repulsion"),RotationalDrag:t("./RotationalDrag"),RotationalSpring:t("./RotationalSpring"),Spring:t("./Spring"),VectorField:t("./VectorField")}},{"./Drag":63,"./Force":64,"./Repulsion":65,"./RotationalDrag":66,"./RotationalSpring":67,"./Spring":68,"./VectorField":69}],71:[function(t,i){i.exports={PhysicsEngine:t("./PhysicsEngine"),bodies:t("./bodies"),constraints:t("./constraints"),forces:t("./forces"),integrators:t("./integrators")}},{"./PhysicsEngine":48,"./bodies":53,"./constraints":62,"./forces":70,"./integrators":73}],72:[function(t,i){var e={};e.integrateVelocity=function(t,i){var e=t.velocity,n=t.inverseMass,o=t.force;o.isZero()||(e.add(o.mult(i*n)).put(e),o.clear())},e.integratePosition=function(t,i){var e=t.position,n=t.velocity;e.add(n.mult(i)).put(e)},e.integrateAngularMomentum=function(t,i){var e=t.angularMomentum,n=t.torque;n.isZero()||(e.add(n.mult(i)).put(e),n.clear())},e.integrateOrientation=function(t,i){var e=t.orientation,n=t.angularVelocity;n.isZero()||e.add(e.multiply(n).scalarMultiply(.5*i)).put(e)},i.exports=e},{}],73:[function(t,i){i.exports={SymplecticEuler:t("./SymplecticEuler")}},{"./SymplecticEuler":72}],74:[function(t,i){function e(t){t&&t.canvasSize&&(this._canvasSize=t.canvasSize),n.apply(this,arguments),this._canvasSize||(this._canvasSize=this.getSize()),this._backBuffer=document.createElement("canvas"),this._canvasSize&&(this._backBuffer.width=this._canvasSize[0],this._backBuffer.height=this._canvasSize[1]),this._contextId=void 0}var n=t("../core/Surface");e.prototype=Object.create(n.prototype),e.prototype.constructor=e,e.prototype.elementType="canvas",e.prototype.elementClass="famous-surface",e.prototype.setContent=function(){},e.prototype.deploy=function(t){this._canvasSize&&(t.width=this._canvasSize[0],t.height=this._canvasSize[1]),"2d"===this._contextId&&(t.getContext(this._contextId).drawImage(this._backBuffer,0,0),this._backBuffer.width=0,this._backBuffer.height=0)},e.prototype.recall=function(t){this.getSize();this._backBuffer.width=t.width,this._backBuffer.height=t.height,"2d"===this._contextId&&(this._backBuffer.getContext(this._contextId).drawImage(t,0,0),t.width=0,t.height=0)},e.prototype.getContext=function(t){return this._contextId=t,this._currentTarget?this._currentTarget.getContext(t):this._backBuffer.getContext(t)},e.prototype.setSize=function(t,i){n.prototype.setSize.apply(this,arguments),i&&(this._canvasSize=[i[0],i[1]]),this._currentTarget&&(this._currentTarget.width=this._canvasSize[0],this._currentTarget.height=this._canvasSize[1])},i.exports=e},{"../core/Surface":14}],75:[function(t,i){function e(t){n.call(this,t),this._container=document.createElement("div"),this._container.classList.add("famous-group"),this._container.classList.add("famous-container-group"),this._shouldRecalculateSize=!1,this.context=new o(this._container),this.setContent(this._container)}var n=t("../core/Surface"),o=t("../core/Context");e.prototype=Object.create(n.prototype),e.prototype.constructor=e,e.prototype.elementType="div",e.prototype.elementClass="famous-surface",e.prototype.add=function(){return this.context.add.apply(this.context,arguments)},e.prototype.render=function(){return this._sizeDirty&&(this._shouldRecalculateSize=!0),n.prototype.render.apply(this,arguments)},e.prototype.deploy=function(){return this._shouldRecalculateSize=!0,n.prototype.deploy.apply(this,arguments)},e.prototype.commit=function(){var t=this._size?[this._size[0],this._size[1]]:null,i=n.prototype.commit.apply(this,arguments);return(this._shouldRecalculateSize||t&&(this._size[0]!==t[0]||this._size[1]!==t[1]))&&(this.context.setSize(),this._shouldRecalculateSize=!1),this.context.update(),i},i.exports=e},{"../core/Context":1,"../core/Surface":14}],76:[function(t,i){function e(t){t&&(this._method=t.method||""),n.apply(this,arguments)}var n=t("./ContainerSurface");e.prototype=Object.create(n.prototype),e.prototype.constructor=e,e.prototype.elementType="form",e.prototype.deploy=function(t){return this._method&&(t.method=this._method),n.prototype.deploy.apply(this,arguments)},i.exports=e},{"./ContainerSurface":75}],77:[function(t,i){function e(){this._imageUrl=void 0,n.apply(this,arguments)}var n=t("../core/Surface"),o=[],s=[],r=[],a=!0;e.enableCache=function(){a=!0},e.disableCache=function(){a=!1},e.clearCache=function(){o=[],s=[],r=[]},e.getCache=function(){return{urlCache:o,countCache:s,nodeCache:s}},e.prototype=Object.create(n.prototype),e.prototype.constructor=e,e.prototype.elementType="img",e.prototype.elementClass="famous-surface",e.prototype.setContent=function(t){var i=o.indexOf(this._imageUrl);-1!==i&&(1===s[i]?(o.splice(i,1),s.splice(i,1),r.splice(i,1)):s[i]--),i=o.indexOf(t),-1===i?(o.push(t),s.push(1)):s[i]++,this._imageUrl=t,this._contentDirty=!0},e.prototype.deploy=function(t){var i=o.indexOf(this._imageUrl);if(void 0===r[i]&&a){var e=new Image;e.src=this._imageUrl||"",r[i]=e}t.src=this._imageUrl||""},e.prototype.recall=function(t){t.src=""},i.exports=e},{"../core/Surface":14}],78:[function(t,i){function e(t){this._placeholder=t.placeholder||"",this._value=t.value||"",this._type=t.type||"text",this._name=t.name||"",n.apply(this,arguments),this.on("click",this.focus.bind(this)),window.addEventListener("click",function(t){t.target!==this._currentTarget&&this.blur()}.bind(this))}var n=t("../core/Surface");e.prototype=Object.create(n.prototype),e.prototype.constructor=e,e.prototype.elementType="input",e.prototype.elementClass="famous-surface",e.prototype.setPlaceholder=function(t){return this._placeholder=t,this._contentDirty=!0,this},e.prototype.focus=function(){return this._currentTarget&&this._currentTarget.focus(),this},e.prototype.blur=function(){return this._currentTarget&&this._currentTarget.blur(),this},e.prototype.setValue=function(t){return this._value=t,this._contentDirty=!0,this},e.prototype.setType=function(t){return this._type=t,this._contentDirty=!0,this},e.prototype.getValue=function(){return this._currentTarget?this._currentTarget.value:this._value},e.prototype.setName=function(t){return this._name=t,this._contentDirty=!0,this},e.prototype.getName=function(){return this._name},e.prototype.deploy=function(t){""!==this._placeholder&&(t.placeholder=this._placeholder),t.value=this._value,t.type=this._type,t.name=this._name},i.exports=e},{"../core/Surface":14}],79:[function(t,i){function e(t){n.apply(this,arguments),this._type="submit",t&&t.onClick&&this.setOnClick(t.onClick)}var n=t("./InputSurface");e.prototype=Object.create(n.prototype),e.prototype.constructor=e,e.prototype.setOnClick=function(t){this.onClick=t},e.prototype.deploy=function(t){this.onclick&&(t.onClick=this.onClick),n.prototype.deploy.apply(this,arguments)},i.exports=e},{"./InputSurface":78}],80:[function(t,i){function e(t){this._placeholder=t.placeholder||"",this._value=t.value||"",this._name=t.name||"",this._wrap=t.wrap||"",this._cols=t.cols||"",this._rows=t.rows||"",n.apply(this,arguments),this.on("click",this.focus.bind(this))}var n=t("../core/Surface");e.prototype=Object.create(n.prototype),e.prototype.constructor=e,e.prototype.elementType="textarea",e.prototype.elementClass="famous-surface",e.prototype.setPlaceholder=function(t){return this._placeholder=t,this._contentDirty=!0,this},e.prototype.focus=function(){return this._currentTarget&&this._currentTarget.focus(),this},e.prototype.blur=function(){return this._currentTarget&&this._currentTarget.blur(),this},e.prototype.setValue=function(t){return this._value=t,this._contentDirty=!0,this},e.prototype.getValue=function(){return this._currentTarget?this._currentTarget.value:this._value},e.prototype.setName=function(t){return this._name=t,this._contentDirty=!0,this},e.prototype.getName=function(){return this._name},e.prototype.setWrap=function(t){return this._wrap=t,this._contentDirty=!0,this},e.prototype.setColumns=function(t){return this._cols=t,this._contentDirty=!0,this},e.prototype.setRows=function(t){return this._rows=t,this._contentDirty=!0,this},e.prototype.deploy=function(t){""!==this._placeholder&&(t.placeholder=this._placeholder),""!==this._value&&(t.value=this._value),""!==this._name&&(t.name=this._name),""!==this._wrap&&(t.wrap=this._wrap),""!==this._cols&&(t.cols=this._cols),""!==this._rows&&(t.rows=this._rows)},i.exports=e},{"../core/Surface":14}],81:[function(t,i){function e(t){n.apply(this,arguments),this._videoUrl=void 0,this.options=Object.create(e.DEFAULT_OPTIONS),t&&this.setOptions(t)}var n=t("../core/Surface");e.prototype=Object.create(n.prototype),e.prototype.constructor=e,e.DEFAULT_OPTIONS={autoplay:!1},e.prototype.elementType="video",e.prototype.elementClass="famous-surface",e.prototype.setOptions=function(t){t.size&&this.setSize(t.size),t.classes&&this.setClasses(t.classes),t.properties&&this.setProperties(t.properties),t.autoplay&&(this.options.autoplay=t.autoplay),t.src&&(this._videoUrl=t.src,this._contentDirty=!0)},e.prototype.setContent=function(t){this._videoUrl=t,this._contentDirty=!0},e.prototype.deploy=function(t){t.src=this._videoUrl,t.autoplay=this.options.autoplay},e.prototype.recall=function(t){t.src=""},i.exports=e},{"../core/Surface":14}],82:[function(t,i){i.exports={CanvasSurface:t("./CanvasSurface"),ContainerSurface:t("./ContainerSurface"),FormContainerSurface:t("./FormContainerSurface"),ImageSurface:t("./ImageSurface"),InputSurface:t("./InputSurface"),SubmitInputSurface:t("./SubmitInputSurface"),TextareaSurface:t("./TextareaSurface"),VideoSurface:t("./VideoSurface")}},{"./CanvasSurface":74,"./ContainerSurface":75,"./FormContainerSurface":76,"./ImageSurface":77,"./InputSurface":78,"./SubmitInputSurface":79,"./TextareaSurface":80,"./VideoSurface":81}],83:[function(t,i){function e(t){this._map=t||null,this._cachedOutput=null,this._cachedInput=Number.NaN}e.create=function(t){var i=new e(t);return i.get.bind(i)},e.prototype.get=function(t){return t!==this._cachedInput&&(this._cachedInput=t,this._cachedOutput=this._map(t)),this._cachedOutput},i.exports=e},{}],84:[function(t,i){var e={inQuad:function(t){return t*t},outQuad:function(t){return-(t-=1)*t+1},inOutQuad:function(t){return(t/=.5)<1?.5*t*t:-.5*(--t*(t-2)-1)},inCubic:function(t){return t*t*t},outCubic:function(t){return--t*t*t+1},inOutCubic:function(t){return(t/=.5)<1?.5*t*t*t:.5*((t-=2)*t*t+2)},inQuart:function(t){return t*t*t*t},outQuart:function(t){return-(--t*t*t*t-1)},inOutQuart:function(t){return(t/=.5)<1?.5*t*t*t*t:-.5*((t-=2)*t*t*t-2)},inQuint:function(t){return t*t*t*t*t},outQuint:function(t){return--t*t*t*t*t+1},inOutQuint:function(t){return(t/=.5)<1?.5*t*t*t*t*t:.5*((t-=2)*t*t*t*t+2)},inSine:function(t){return-1*Math.cos(t*(Math.PI/2))+1},outSine:function(t){return Math.sin(t*(Math.PI/2))},inOutSine:function(t){return-.5*(Math.cos(Math.PI*t)-1)},inExpo:function(t){return 0===t?0:Math.pow(2,10*(t-1))},outExpo:function(t){return 1===t?1:-Math.pow(2,-10*t)+1},inOutExpo:function(t){return 0===t?0:1===t?1:(t/=.5)<1?.5*Math.pow(2,10*(t-1)):.5*(-Math.pow(2,-10*--t)+2)},inCirc:function(t){return-(Math.sqrt(1-t*t)-1)},outCirc:function(t){return Math.sqrt(1- --t*t)},inOutCirc:function(t){return(t/=.5)<1?-.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1)},inElastic:function(t){var i=1.70158,e=0,n=1;return 0===t?0:1===t?1:(e||(e=.3),i=e/(2*Math.PI)*Math.asin(1/n),-(n*Math.pow(2,10*(t-=1))*Math.sin(2*(t-i)*Math.PI/e)))},outElastic:function(t){var i=1.70158,e=0,n=1;return 0===t?0:1===t?1:(e||(e=.3),i=e/(2*Math.PI)*Math.asin(1/n),n*Math.pow(2,-10*t)*Math.sin(2*(t-i)*Math.PI/e)+1)},inOutElastic:function(t){var i=1.70158,e=0,n=1;return 0===t?0:2===(t/=.5)?1:(e||(e=.3*1.5),i=e/(2*Math.PI)*Math.asin(1/n),1>t?-.5*n*Math.pow(2,10*(t-=1))*Math.sin(2*(t-i)*Math.PI/e):n*Math.pow(2,-10*(t-=1))*Math.sin(2*(t-i)*Math.PI/e)*.5+1)},inBack:function(t,i){return void 0===i&&(i=1.70158),t*t*((i+1)*t-i)},outBack:function(t,i){return void 0===i&&(i=1.70158),--t*t*((i+1)*t+i)+1},inOutBack:function(t,i){return void 0===i&&(i=1.70158),(t/=.5)<1?.5*t*t*(((i*=1.525)+1)*t-i):.5*((t-=2)*t*(((i*=1.525)+1)*t+i)+2)},inBounce:function(t){return 1-e.outBounce(1-t)},outBounce:function(t){return 1/2.75>t?7.5625*t*t:2/2.75>t?7.5625*(t-=1.5/2.75)*t+.75:2.5/2.75>t?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375},inOutBounce:function(t){return.5>t?.5*e.inBounce(2*t):.5*e.outBounce(2*t-1)+.5}};i.exports=e},{}],85:[function(t,i){function e(t){this.method=t,this._instances=[],this.state=[]}var n=t("../utilities/Utility");e.SUPPORTS_MULTIPLE=!0,e.prototype.get=function(){for(var t=0;t<this._instances.length;t++)this.state[t]=this._instances[t].get();return this.state},e.prototype.set=function(t,i,e){for(var o=n.after(t.length,e),s=0;s<t.length;s++)this._instances[s]||(this._instances[s]=new this.method),this._instances[s].set(t[s],i,o)},e.prototype.reset=function(t){for(var i=0;i<t.length;i++)this._instances[i]||(this._instances[i]=new this.method),this._instances[i].reset(t[i])},i.exports=e},{"../utilities/Utility":95}],86:[function(t,i){function e(t){t=t||0,this.endState=new v(t),this.initState=new v,this._dimensions=1,this._restTolerance=1e-10,this._absRestTolerance=this._restTolerance,this._callback=void 0,this.PE=new _,this.particle=new y,this.spring=new g({anchor:this.endState}),this.PE.addBody(this.particle),this.PE.attach(this.spring,this.particle)}function n(){return this.particle.getEnergy()+this.spring.getEnergy([this.particle])}function o(){var t=this.endState.sub(this.initState).normSquared();this._absRestTolerance=0===t?this._restTolerance:this._restTolerance*t}function s(t){this.endState.set(t),o.call(this)}function r(){this.PE.wake()}function a(){this.PE.sleep()}function h(t){this.particle.position.set(t)}function c(t){this.particle.velocity.set(t)}function p(){return 0===this._dimensions?this.particle.getPosition1D():this.particle.getPosition()}function u(){return 0===this._dimensions?this.particle.getVelocity1D():this.particle.getVelocity()}function l(t){this._callback=t}function f(t){var i=e.DEFAULT_OPTIONS;void 0===t.period&&(t.period=i.period),void 0===t.dampingRatio&&(t.dampingRatio=i.dampingRatio),void 0===t.velocity&&(t.velocity=i.velocity),this.spring.setOptions({period:t.period,dampingRatio:t.dampingRatio}),c.call(this,t.velocity)}function d(){if(this.PE.isSleeping()){if(this._callback){var t=this._callback;this._callback=void 0,t()}}else n.call(this)<this._absRestTolerance&&(h.call(this,this.endState),c.call(this,[0,0,0]),a.call(this))}var _=t("../physics/PhysicsEngine"),y=t("../physics/bodies/Particle"),g=t("../physics/constraints/Snap"),v=t("../math/Vector");e.SUPPORTS_MULTIPLE=3,e.DEFAULT_OPTIONS={period:100,dampingRatio:.2,velocity:0},e.prototype.reset=function(t,i){this._dimensions=t instanceof Array?t.length:0,this.initState.set(t),h.call(this,t),s.call(this,t),i&&c.call(this,i),l.call(this,void 0)},e.prototype.getVelocity=function(){return u.call(this)},e.prototype.setVelocity=function(t){this.call(this,c(t))},e.prototype.isActive=function(){return!this.PE.isSleeping()},e.prototype.halt=function(){this.set(this.get())},e.prototype.get=function(){return d.call(this),p.call(this)},e.prototype.set=function(t,i,e){return i?(this._dimensions=t instanceof Array?t.length:0,r.call(this),f.call(this,i),s.call(this,t),void l.call(this,e)):(this.reset(t),void(e&&e()))},i.exports=e},{"../math/Vector":41,"../physics/PhysicsEngine":48,"../physics/bodies/Particle":51,"../physics/constraints/Snap":58}],87:[function(t,i){function e(t){t=t||0,this.endState=new v(t),this.initState=new v,this._dimensions=void 0,this._restTolerance=1e-10,this._absRestTolerance=this._restTolerance,this._callback=void 0,this.PE=new _,this.spring=new g({anchor:this.endState}),this.particle=new y,this.PE.addBody(this.particle),this.PE.attach(this.spring,this.particle)}function n(){return this.particle.getEnergy()+this.spring.getEnergy([this.particle])}function o(t){this.particle.setPosition(t)}function s(t){this.particle.setVelocity(t)}function r(){return 0===this._dimensions?this.particle.getPosition1D():this.particle.getPosition()}function a(){return 0===this._dimensions?this.particle.getVelocity1D():this.particle.getVelocity()}function h(t){this._callback=t}function c(){this.PE.wake()}function p(){this.PE.sleep()}function u(){if(this.PE.isSleeping()){if(this._callback){var t=this._callback;this._callback=void 0,t()}}else n.call(this)<this._absRestTolerance&&(o.call(this,this.endState),s.call(this,[0,0,0]),p.call(this))}function l(t){var i=e.DEFAULT_OPTIONS;void 0===t.period&&(t.period=i.period),void 0===t.dampingRatio&&(t.dampingRatio=i.dampingRatio),void 0===t.velocity&&(t.velocity=i.velocity),t.period<150&&(t.period=150,console.warn("The period of a SpringTransition is capped at 150 ms. Use a SnapTransition for faster transitions")),this.spring.setOptions({period:t.period,dampingRatio:t.dampingRatio}),s.call(this,t.velocity)}function f(){var t=this.endState.sub(this.initState).normSquared();this._absRestTolerance=0===t?this._restTolerance:this._restTolerance*t}function d(t){this.endState.set(t),f.call(this)}var _=t("../physics/PhysicsEngine"),y=t("../physics/bodies/Particle"),g=t("../physics/forces/Spring"),v=t("../math/Vector");e.SUPPORTS_MULTIPLE=3,e.DEFAULT_OPTIONS={period:300,dampingRatio:.5,velocity:0},e.prototype.reset=function(t,i){this._dimensions=t instanceof Array?t.length:0,this.initState.set(t),o.call(this,t),d.call(this,t),i&&s.call(this,i),h.call(this,void 0)},e.prototype.getVelocity=function(){return a.call(this)},e.prototype.setVelocity=function(t){this.call(this,s(t))},e.prototype.isActive=function(){return!this.PE.isSleeping()
},e.prototype.halt=function(){this.set(this.get())},e.prototype.get=function(){return u.call(this),r.call(this)},e.prototype.set=function(t,i,e){return i?(this._dimensions=t instanceof Array?t.length:0,c.call(this),l.call(this,i),d.call(this,t),void h.call(this,e)):(this.reset(t),void(e&&e()))},i.exports=e},{"../math/Vector":41,"../physics/PhysicsEngine":48,"../physics/bodies/Particle":51,"../physics/forces/Spring":68}],88:[function(t,i){function e(t){this.currentAction=null,this.actionQueue=[],this.callbackQueue=[],this.state=0,this.velocity=void 0,this._callback=void 0,this._engineInstance=null,this._currentMethod=null,this.set(t)}function n(){if(this._callback){var t=this._callback;this._callback=void 0,t()}if(this.actionQueue.length<=0)return void this.set(this.get());this.currentAction=this.actionQueue.shift(),this._callback=this.callbackQueue.shift();var i=null,e=this.currentAction[0],a=this.currentAction[1];a instanceof Object&&a.method?(i=a.method,"string"==typeof i&&(i=r[i])):i=s,this._currentMethod!==i&&(this._engineInstance=!(e instanceof Object)||i.SUPPORTS_MULTIPLE===!0||e.length<=i.SUPPORTS_MULTIPLE?new i:new o(i),this._currentMethod=i),this._engineInstance.reset(this.state,this.velocity),void 0!==this.velocity&&(a.velocity=this.velocity),this._engineInstance.set(e,a,n.bind(this))}var o=t("./MultipleTransition"),s=t("./TweenTransition"),r={};e.register=function(t){var i=!0;for(var n in t)e.registerMethod(n,t[n])||(i=!1);return i},e.registerMethod=function(t,i){return t in r?!1:(r[t]=i,!0)},e.unregisterMethod=function(t){return t in r?(delete r[t],!0):!1},e.prototype.set=function(t,i,e){if(!i)return this.reset(t),e&&e(),this;var o=[t,i];return this.actionQueue.push(o),this.callbackQueue.push(e),this.currentAction||n.call(this),this},e.prototype.reset=function(t,i){this._currentMethod=null,this._engineInstance=null,this._callback=void 0,this.state=t,this.velocity=i,this.currentAction=null,this.actionQueue=[],this.callbackQueue=[]},e.prototype.delay=function(t,i){this.set(this.get(),{duration:t,curve:function(){return 0}},i)},e.prototype.get=function(t){return this._engineInstance&&(this._engineInstance.getVelocity&&(this.velocity=this._engineInstance.getVelocity()),this.state=this._engineInstance.get(t)),this.state},e.prototype.isActive=function(){return!!this.currentAction},e.prototype.halt=function(){return this.set(this.get())},i.exports=e},{"./MultipleTransition":85,"./TweenTransition":90}],89:[function(t,i){function e(t){this._final=r.identity.slice(),this._finalTranslate=[0,0,0],this._finalRotate=[0,0,0],this._finalSkew=[0,0,0],this._finalScale=[1,1,1],this.translate=new s(this._finalTranslate),this.rotate=new s(this._finalRotate),this.skew=new s(this._finalSkew),this.scale=new s(this._finalScale),t&&this.set(t)}function n(){return r.build({translate:this.translate.get(),rotate:this.rotate.get(),skew:this.skew.get(),scale:this.scale.get()})}function o(){return r.build({translate:this._finalTranslate,rotate:this._finalRotate,skew:this._finalSkew,scale:this._finalScale})}var s=t("./Transitionable"),r=t("../core/Transform"),a=t("../utilities/Utility");e.prototype.setTranslate=function(t,i,e){return this._finalTranslate=t,this._final=o.call(this),this.translate.set(t,i,e),this},e.prototype.setScale=function(t,i,e){return this._finalScale=t,this._final=o.call(this),this.scale.set(t,i,e),this},e.prototype.setRotate=function(t,i,e){return this._finalRotate=t,this._final=o.call(this),this.rotate.set(t,i,e),this},e.prototype.setSkew=function(t,i,e){return this._finalSkew=t,this._final=o.call(this),this.skew.set(t,i,e),this},e.prototype.set=function(t,i,e){var n=r.interpret(t);this._finalTranslate=n.translate,this._finalRotate=n.rotate,this._finalSkew=n.skew,this._finalScale=n.scale,this._final=t;var o=e?a.after(4,e):null;return this.translate.set(n.translate,i,o),this.rotate.set(n.rotate,i,o),this.skew.set(n.skew,i,o),this.scale.set(n.scale,i,o),this},e.prototype.setDefaultTransition=function(t){this.translate.setDefault(t),this.rotate.setDefault(t),this.skew.setDefault(t),this.scale.setDefault(t)},e.prototype.get=function(){return this.isActive()?n.call(this):this._final},e.prototype.getFinal=function(){return this._final},e.prototype.isActive=function(){return this.translate.isActive()||this.rotate.isActive()||this.scale.isActive()||this.skew.isActive()},e.prototype.halt=function(){return this.translate.halt(),this.rotate.halt(),this.skew.halt(),this.scale.halt(),this._final=this.get(),this._finalTranslate=this.translate.get(),this._finalRotate=this.rotate.get(),this._finalSkew=this.skew.get(),this._finalScale=this.scale.get(),this},i.exports=e},{"../core/Transform":15,"../utilities/Utility":95,"./Transitionable":88}],90:[function(t,i){function e(t){this.options=Object.create(e.DEFAULT_OPTIONS),t&&this.setOptions(t),this._startTime=0,this._startValue=0,this._updateTime=0,this._endValue=0,this._curve=void 0,this._duration=0,this._active=!1,this._callback=void 0,this.state=0,this.velocity=void 0}function n(t,i,e){return(1-e)*t+e*i}function o(t){return t instanceof Object?t instanceof Array?t.slice(0):Object.create(t):t}function s(t,i){var n={curve:i.curve};return i.duration&&(n.duration=i.duration),i.speed&&(n.speed=i.speed),t instanceof Object&&(void 0!==t.duration&&(n.duration=t.duration),t.curve&&(n.curve=t.curve),t.speed&&(n.speed=t.speed)),"string"==typeof n.curve&&(n.curve=e.getCurve(n.curve)),n}function r(t,i,e,n,o){var s,r=1e-7,a=(e(o)-e(o-r))/r;if(t instanceof Array){s=[];for(var h=0;h<t.length;h++)s[h]="number"==typeof t[h]?a*(t[h]-i[h])/n:0}else s=a*(t-i)/n;return s}function a(t,i,e){var o;if(t instanceof Array){o=[];for(var s=0;s<t.length;s++)o[s]="number"==typeof t[s]?n(t[s],i[s],e):t[s]}else o=n(t,i,e);return o}e.Curves={linear:function(t){return t},easeIn:function(t){return t*t},easeOut:function(t){return t*(2-t)},easeInOut:function(t){return.5>=t?2*t*t:-2*t*t+4*t-1},easeOutBounce:function(t){return t*(3-2*t)},spring:function(t){return(1-t)*Math.sin(6*Math.PI*t)+t}},e.SUPPORTS_MULTIPLE=!0,e.DEFAULT_OPTIONS={curve:e.Curves.linear,duration:500,speed:0};var h={};e.registerCurve=function(t,i){return h[t]?!1:(h[t]=i,!0)},e.unregisterCurve=function(t){return h[t]?(delete h[t],!0):!1},e.getCurve=function(t){var i=h[t];if(void 0!==i)return i;throw new Error("curve not registered")},e.getCurves=function(){return h},e.prototype.setOptions=function(t){void 0!==t.curve&&(this.options.curve=t.curve),void 0!==t.duration&&(this.options.duration=t.duration),void 0!==t.speed&&(this.options.speed=t.speed)},e.prototype.set=function(t,i,e){if(!i)return this.reset(t),void(e&&e());if(this._startValue=o(this.get()),i=s(i,this.options),i.speed){var n=this._startValue;if(n instanceof Object){var r=0;for(var a in n)r+=(t[a]-n[a])*(t[a]-n[a]);i.duration=Math.sqrt(r)/i.speed}else i.duration=Math.abs(t-n)/i.speed}this._startTime=Date.now(),this._endValue=o(t),this._startVelocity=o(i.velocity),this._duration=i.duration,this._curve=i.curve,this._active=!0,this._callback=e},e.prototype.reset=function(t,i){if(this._callback){var e=this._callback;this._callback=void 0,e()}this.state=o(t),this.velocity=o(i),this._startTime=0,this._duration=0,this._updateTime=0,this._startValue=this.state,this._startVelocity=this.velocity,this._endValue=this.state,this._active=!1},e.prototype.getVelocity=function(){return this.velocity},e.prototype.get=function(t){return this.update(t),this.state},e.prototype.update=function(t){if(this._active){if(t||(t=Date.now()),!(this._updateTime>=t)){this._updateTime=t;var i=t-this._startTime;if(i>=this._duration)this.state=this._endValue,this.velocity=r(this.state,this._startValue,this._curve,this._duration,1),this._active=!1;else if(0>i)this.state=this._startValue,this.velocity=this._startVelocity;else{var e=i/this._duration;this.state=a(this._startValue,this._endValue,this._curve(e)),this.velocity=r(this.state,this._startValue,this._curve,this._duration,e)}}}else if(this._callback){var n=this._callback;this._callback=void 0,n()}},e.prototype.isActive=function(){return this._active},e.prototype.halt=function(){this.reset(this.get())},e.registerCurve("linear",e.Curves.linear),e.registerCurve("easeIn",e.Curves.easeIn),e.registerCurve("easeOut",e.Curves.easeOut),e.registerCurve("easeInOut",e.Curves.easeInOut),e.registerCurve("easeOutBounce",e.Curves.easeOutBounce),e.registerCurve("spring",e.Curves.spring),e.customCurve=function(t,i){return t=t||0,i=i||0,function(e){return t*e+(-2*t-i+3)*e*e+(t+i-2)*e*e*e}},i.exports=e},{}],91:[function(t,i){function e(t){t=t||0,this.endState=new m(t),this.initState=new m,this.spring=new g({anchor:this.endState}),this.wall=new v,this._restTolerance=1e-10,this._dimensions=1,this._absRestTolerance=this._restTolerance,this._callback=void 0,this.PE=new _,this.particle=new y,this.PE.addBody(this.particle),this.PE.attach([this.wall,this.spring],this.particle)}function n(){return this.particle.getEnergy()+this.spring.getEnergy([this.particle])}function o(){var t=this.endState.sub(this.initState).normSquared();this._absRestTolerance=0===t?this._restTolerance:this._restTolerance*t}function s(){this.PE.wake()}function r(){this.PE.sleep()}function a(t){this.endState.set(t);var i=this.endState.sub(this.initState).norm();this.wall.setOptions({distance:this.endState.norm(),normal:0===i?this.particle.velocity.normalize(-1):this.endState.sub(this.initState).normalize(-1)}),o.call(this)}function h(t){this.particle.position.set(t)}function c(t){this.particle.velocity.set(t)}function p(){return 0===this._dimensions?this.particle.getPosition1D():this.particle.getPosition()}function u(){return 0===this._dimensions?this.particle.getVelocity1D():this.particle.getVelocity()}function l(t){this._callback=t}function f(){if(this.PE.isSleeping()){if(this._callback){var t=this._callback;this._callback=void 0,t()}}else{var i=n.call(this);i<this._absRestTolerance&&(r.call(this),h.call(this,this.endState),c.call(this,[0,0,0]))}}function d(t){var i=e.DEFAULT_OPTIONS;void 0===t.period&&(t.period=i.period),void 0===t.dampingRatio&&(t.dampingRatio=i.dampingRatio),void 0===t.velocity&&(t.velocity=i.velocity),void 0===t.restitution&&(t.restitution=i.restitution),this.spring.setOptions({period:t.period,dampingRatio:t.dampingRatio}),this.wall.setOptions({restitution:t.restitution}),c.call(this,t.velocity)}var _=t("../physics/PhysicsEngine"),y=t("../physics/bodies/Particle"),g=t("../physics/forces/Spring"),v=t("../physics/constraints/Wall"),m=t("../math/Vector");e.SUPPORTS_MULTIPLE=3,e.DEFAULT_OPTIONS={period:300,dampingRatio:.5,velocity:0,restitution:.5},e.prototype.reset=function(t,i){this._dimensions=t instanceof Array?t.length:0,this.initState.set(t),h.call(this,t),i&&c.call(this,i),a.call(this,t),l.call(this,void 0)},e.prototype.getVelocity=function(){return u.call(this)},e.prototype.setVelocity=function(t){this.call(this,c(t))},e.prototype.isActive=function(){return!this.PE.isSleeping()},e.prototype.halt=function(){this.set(this.get())},e.prototype.get=function(){return f.call(this),p.call(this)},e.prototype.set=function(t,i,e){return i?(this._dimensions=t instanceof Array?t.length:0,s.call(this),d.call(this,i),a.call(this,t),void l.call(this,e)):(this.reset(t),void(e&&e()))},i.exports=e},{"../math/Vector":41,"../physics/PhysicsEngine":48,"../physics/bodies/Particle":51,"../physics/constraints/Wall":60,"../physics/forces/Spring":68}],92:[function(t,i){i.exports={CachedMap:t("./CachedMap"),Easing:t("./Easing"),MultipleTransition:t("./MultipleTransition"),SnapTransition:t("./SnapTransition"),SpringTransition:t("./SpringTransition"),Transitionable:t("./Transitionable"),TransitionableTransform:t("./TransitionableTransform"),TweenTransition:t("./TweenTransition"),WallTransition:t("./WallTransition")}},{"./CachedMap":83,"./Easing":84,"./MultipleTransition":85,"./SnapTransition":86,"./SpringTransition":87,"./Transitionable":88,"./TransitionableTransform":89,"./TweenTransition":90,"./WallTransition":91}],93:[function(t,i){var e={0:48,1:49,2:50,3:51,4:52,5:53,6:54,7:55,8:56,9:57,a:97,b:98,c:99,d:100,e:101,f:102,g:103,h:104,i:105,j:106,k:107,l:108,m:109,n:110,o:111,p:112,q:113,r:114,s:115,t:116,u:117,v:118,w:119,x:120,y:121,z:122,A:65,B:66,C:67,D:68,E:69,F:70,G:71,H:72,I:73,J:74,K:75,L:76,M:77,N:78,O:79,P:80,Q:81,R:82,S:83,T:84,U:85,V:86,W:87,X:88,Y:89,Z:90,ENTER:13,LEFT_ARROW:37,RIGHT_ARROW:39,UP_ARROW:38,DOWN_ARROW:40,SPACE:32,SHIFT:16,TAB:9};i.exports=e},{}],94:[function(t,i){function e(t){return c.on(p,t),t}function n(t,i){var n=u(),o=function(){var e=u();e-n>=i&&(t.apply(this,arguments),c.removeListener(p,o))};return e(o)}function o(t,i){var n=u(),o=function(){var e=u();e-n>=i&&(t.apply(this,arguments),n=u())};return e(o)}function s(t,i){if(void 0===i)return void 0;var n=function(){i--,0>=i&&(t.apply(this,arguments),a(n))};return e(n)}function r(t,i){i=i||1;var n=i,o=function(){i--,0>=i&&(t.apply(this,arguments),i=n)};return e(o)}function a(t){c.removeListener(p,t)}function h(t,i){var e,o,s,r,h;return function(){o=this,h=arguments,s=u();var c=function(){var a=u-s;i>a?e=n(c,i-a):(e=null,r=t.apply(o,h))};return a(e),e=n(c,i),r}}var c=t("../core/Engine"),p="prerender",u=window.performance&&window.performance.now?function(){return window.performance.now()}:function(){return Date.now()};i.exports={setTimeout:n,setInterval:o,debounce:h,after:s,every:r,clear:a}},{"../core/Engine":4}],95:[function(t,i){var e={};e.Direction={X:0,Y:1,Z:2},e.after=function(t,i){var e=t;return function(){e--,0===e&&i.apply(this,arguments)}},e.loadURL=function(t,i){var e=new XMLHttpRequest;e.onreadystatechange=function(){4===this.readyState&&i&&i(this.responseText)},e.open("GET",t),e.send()},e.createDocumentFragmentFromHTML=function(t){var i=document.createElement("div");i.innerHTML=t;for(var e=document.createDocumentFragment();i.hasChildNodes();)e.appendChild(i.firstChild);return e},e.clone=function(t){var i;if("object"==typeof t){i=t instanceof Array?[]:{};for(var n in t)if("object"==typeof t[n]&&null!==t[n])if(t[n]instanceof Array){i[n]=new Array(t[n].length);for(var o=0;o<t[n].length;o++)i[n][o]=e.clone(t[n][o])}else i[n]=e.clone(t[n]);else i[n]=t[n]}else i=t;return i},i.exports=e},{}],96:[function(t,i){i.exports={KeyCodes:t("./KeyCodes"),Timer:t("./Timer"),Utility:t("./Utility")}},{"./KeyCodes":93,"./Timer":94,"./Utility":95}],97:[function(t,i){function e(t){this.options=Object.create(this.constructor.DEFAULT_OPTIONS||e.DEFAULT_OPTIONS),this._optionsManager=new s(this.options),t&&this.setOptions(t),this._eventInput=new o,this._eventOutput=new o,o.setInputHandler(this,this._eventInput),o.setOutputHandler(this,this._eventOutput),this._id=n.register(this)}var n=t("../core/Entity"),o=(t("../core/Transform"),t("../core/EventHandler")),s=t("../core/OptionsManager");e.DEFAULT_OPTIONS={},e.prototype.setOptions=function(t){return this._optionsManager.setOptions(t)},e.prototype.getOptions=function(t){return this._optionsManager.getOptions(t)},e.prototype.render=function(){return this._id},e.prototype.commit=function(){},i.exports=e},{"../core/Entity":5,"../core/EventHandler":7,"../core/OptionsManager":10,"../core/Transform":15}],98:[function(t,i){function e(){c.apply(this,arguments),this.state=new a(0),this._isOpen=!1,this.setOutputFunction(function(t,i,e){var o=n.call(this),r=this.options.direction===h.Direction.X?s.translate(o*i,0,.001*(o-1)*i):s.translate(0,o*i,.001*(o-1)*i),a=t.render();if(this.options.stackRotation){var c=this.options.stackRotation*e*(1-o);a={transform:s.rotateZ(c),origin:[.5,.5],target:a}}return{transform:r,size:t.getSize(),target:a}})}function n(t){return t?this._isOpen?1:0:this.state.get()}function o(t,i,e){this.state.halt(),this.state.set(t,i,e)}var s=t("../core/Transform"),r=t("../core/OptionsManager"),a=t("../transitions/Transitionable"),h=t("../utilities/Utility"),c=t("./SequentialLayout");e.prototype=Object.create(c.prototype),e.prototype.constructor=e,e.DEFAULT_OPTIONS=r.patch(c.DEFAULT_OPTIONS,{transition:{curve:"easeOutBounce",duration:500},stackRotation:0}),e.prototype.getSize=function(){var t=c.prototype.getSize.apply(this,arguments),i=this._items?this._items.get().getSize():[0,0];i||(i=[0,0]);var e=n.call(this),o=1-e;return[i[0]*o+t[0]*e,i[1]*o+t[1]*e]},e.prototype.isOpen=function(){return this._isOpen},e.prototype.open=function(t){this._isOpen=!0,o.call(this,1,this.options.transition,t)},e.prototype.close=function(t){this._isOpen=!1,o.call(this,0,this.options.transition,t)},e.prototype.toggle=function(t){this._isOpen?this.close(t):this.open(t)},i.exports=e},{"../core/OptionsManager":10,"../core/Transform":15,"../transitions/Transitionable":88,"../utilities/Utility":95,"./SequentialLayout":110}],99:[function(t,i){function e(t){this.options=Object.create(e.DEFAULT_OPTIONS),this._optionsManager=new p(this.options),t&&this.setOptions(t),this._position=new u(0),this._direction=n(this.options.side),this._orientation=o(this.options.side),this._isOpen=!1,this._cachedLength=0,this.drawer=new h,this.content=new h,this._eventInput=new l,this._eventOutput=new l,l.setInputHandler(this,this._eventInput),l.setOutputHandler(this,this._eventOutput),this._eventInput.on("update",r.bind(this)),this._eventInput.on("end",a.bind(this))}function n(t){var i=e.SIDES;return t===i.LEFT||t===i.RIGHT?f:d}function o(t){var i=e.SIDES;return t===i.LEFT||t===i.TOP?1:-1}function s(t){var i,e=this.options;if(e.drawerLength)i=e.drawerLength;else{var n=t.getSize();i=n?n[this._direction]:e.drawerLength}return this._orientation*i}function r(t){var i,e,n=this.getPosition()+t.delta;this._cachedLength=s.call(this,this.drawer),1===this._orientation?(i=0,e=this._cachedLength):(i=this._cachedLength,e=0),n>e?n=e:i>n&&(n=i),this.setPosition(n)}function a(t){var i=t.velocity,e=this._orientation*this.getPosition(),n=this.options,o=this._orientation*this._cachedLength,s=n.positionThreshold||o/2,r=n.velocityThreshold;if(n.transition instanceof Object&&(n.transition.velocity=t.velocity),0===e)return void(this._isOpen=!1);if(e===o)return void(this._isOpen=!0);var a=Math.abs(i)>r||!this._isOpen&&e>s||this._isOpen&&s>e;a?this.toggle():this.reset()}var h=t("../core/RenderNode"),c=t("../core/Transform"),p=t("../core/OptionsManager"),u=t("../transitions/Transitionable"),l=t("../core/EventHandler"),f=0,d=1;e.SIDES={LEFT:0,TOP:1,RIGHT:2,BOTTOM:3},e.DEFAULT_OPTIONS={side:e.SIDES.LEFT,drawerLength:0,velocityThreshold:0,positionThreshold:0,transition:!0},e.prototype.setOptions=function(t){this._optionsManager.setOptions(t),void 0!==t.side&&(this._direction=n(t.side),this._orientation=o(t.side))},e.prototype.open=function(t,i){t instanceof Function&&(i=t),void 0===t&&(t=this.options.transition),this._cachedLength=s.call(this,this.drawer),this.setPosition(this._cachedLength,t,i),this._isOpen||(this._isOpen=!0,this._eventOutput.emit("open"))},e.prototype.close=function(t,i){t instanceof Function&&(i=t),void 0===t&&(t=this.options.transition),this.setPosition(0,t,i),this._isOpen&&(this._isOpen=!1,this._eventOutput.emit("close"))},e.prototype.setPosition=function(t,i,e){this._position.isActive()&&this._position.halt(),this._position.set(t,i,e)},e.prototype.getPosition=function(){return this._position.get()},e.prototype.setProgress=function(t,i,e){return this._position.set(t*this._cachedLength,i,e)},e.prototype.getProgress=function(){return this._position.get()/this._cachedLength},e.prototype.toggle=function(t){this._isOpen?this.close(t):this.open(t)},e.prototype.reset=function(t){this._isOpen?this.open(t):this.close(t)},e.prototype.isOpen=function(){return this._isOpen},e.prototype.render=function(){var t=this.getPosition();(!this._isOpen&&0>t&&1===this._orientation||t>0&&-1===this._orientation)&&(t=0,this.setPosition(t));var i=this._direction===f?c.translate(t,0,0):c.translate(0,t,0);return[{transform:c.behind,target:this.drawer.render()},{transform:i,target:this.content.render()}]},i.exports=e},{"../core/EventHandler":7,"../core/OptionsManager":10,"../core/RenderNode":11,"../core/Transform":15,"../transitions/Transitionable":88}],100:[function(t,i){function e(t){this._currentTarget=null,this._size=[void 0,void 0],this._controller=new h(t),this._controller.inTransformFrom(o.create(n.bind(this,1e-4))),this._controller.outTransformFrom(o.create(n.bind(this,-1e-4))),this._eventInput=new r,r.setInputHandler(this,this._eventInput),this._entityId=s.register(this),t&&this.setOptions(t)}function n(t,i){return a.translate(this._size[0]*(1-i),0,t*(1-i))}var o=t("../transitions/CachedMap"),s=t("../core/Entity"),r=t("../core/EventHandler"),a=t("../core/Transform"),h=t("./RenderController");e.prototype.show=function(t){this._currentTarget&&this._eventInput.unpipe(this._currentTarget),this._currentTarget=t,this._currentTarget&&this._currentTarget.trigger&&this._eventInput.pipe(this._currentTarget),this._controller.show.apply(this._controller,arguments)},e.prototype.setOptions=function(t){this._controller.setOptions(t)},e.prototype.render=function(){return this._entityId},e.prototype.commit=function(t){return this._size[0]=t.size[0],this._size[1]=t.size[1],{transform:t.transform,opacity:t.opacity,origin:t.origin,size:t.size,target:this._controller.render()}},i.exports=e},{"../core/Entity":5,"../core/EventHandler":7,"../core/Transform":15,"../transitions/CachedMap":83,"./RenderController":106}],101:[function(t,i){function e(t){this.options=Object.create(e.DEFAULT_OPTIONS),this.optionsManager=new a(this.options),t&&this.setOptions(t),this.id=s.register(this),this._ratios=new c(this.options.ratios),this._nodes=[],this._size=[0,0],this._cachedDirection=null,this._cachedLengths=[],this._cachedTransforms=null,this._ratiosDirty=!1,this._eventOutput=new h,h.setOutputHandler(this,this._eventOutput)}function n(t,i,n){var o,s,a,h,c=0,p=i,u=0;for(this._cachedLengths=[],this._cachedTransforms=[],h=0;h<t.length;h++)s=t[h],a=this._nodes[h],"number"!=typeof s?p-=a.getSize()[n]||0:u+=s;for(h=0;h<t.length;h++)a=this._nodes[h],s=t[h],i="number"==typeof s?p*s/u:a.getSize()[n],o=n===e.DIRECTION_X?r.translate(c,0,0):r.translate(0,c,0),this._cachedTransforms.push(o),this._cachedLengths.push(i),c+=i}function o(t,i){for(var e=0;e<t.length;e++)if("number"!=typeof t[e]&&this._nodes[e].getSize()[i]!==this._cachedLengths[e])return!0;return!1}var s=t("../core/Entity"),r=t("../core/Transform"),a=t("../core/OptionsManager"),h=t("../core/EventHandler"),c=t("../transitions/Transitionable");e.DIRECTION_X=0,e.DIRECTION_Y=1,e.DEFAULT_OPTIONS={direction:e.DIRECTION_X,transition:!1,ratios:[]},e.prototype.render=function(){return this.id},e.prototype.setOptions=function(t){this.optionsManager.setOptions(t)},e.prototype.sequenceFrom=function(t){if(this._nodes=t,0===this._ratios.get().length){for(var i=[],e=0;e<this._nodes.length;e++)i.push(1);this.setRatios(i)}},e.prototype.setRatios=function(t,i,e){void 0===i&&(i=this.options.transition);var n=this._ratios;0===n.get().length&&(i=void 0),n.isActive()&&n.halt(),n.set(t,i,e),this._ratiosDirty=!0},e.prototype.getSize=function(){return this._size},e.prototype.commit=function(t){var i,e=t.size,s=t.transform,a=t.origin,h=t.opacity,c=this._ratios.get(),p=this.options.direction,u=e[p];(u!==this._size[p]||this._ratiosDirty||this._ratios.isActive()||p!==this._cachedDirection||o.call(this,c,p))&&(n.call(this,c,u,p),u!==this._size[p]&&(this._size[0]=e[0],this._size[1]=e[1]),p!==this._cachedDirection&&(this._cachedDirection=p),this._ratiosDirty&&(this._ratiosDirty=!1));for(var l=[],f=0;f<c.length;f++)i=[void 0,void 0],u=this._cachedLengths[f],i[p]=u,l.push({transform:this._cachedTransforms[f],size:i,target:this._nodes[f].render()});return e&&0!==a[0]&&0!==a[1]&&(s=r.moveThen([-e[0]*a[0],-e[1]*a[1],0],s)),{transform:s,size:e,opacity:h,target:l}},i.exports=e},{"../core/Entity":5,"../core/EventHandler":7,"../core/OptionsManager":10,"../core/Transform":15,"../transitions/Transitionable":88}],102:[function(t,i){function e(t){this.options=Object.create(e.DEFAULT_OPTIONS),this._optionsManager=new s(this.options),t&&this.setOptions(t),this.angle=new o(0),this.frontNode=void 0,this.backNode=void 0,this.flipped=!1}var n=t("../core/Transform"),o=t("../transitions/Transitionable"),s=(t("../core/RenderNode"),t("../core/OptionsManager"));e.DIRECTION_X=0,e.DIRECTION_Y=1;var r=1;e.DEFAULT_OPTIONS={transition:!0,direction:e.DIRECTION_X},e.prototype.flip=function(t,i){var e=this.flipped?0:Math.PI;this.setAngle(e,t,i),this.flipped=!this.flipped},e.prototype.setAngle=function(t,i,e){void 0===i&&(i=this.options.transition),this.angle.isActive()&&this.angle.halt(),this.angle.set(t,i,e)},e.prototype.setOptions=function(t){return this._optionsManager.setOptions(t)},e.prototype.setFront=function(t){this.frontNode=t},e.prototype.setBack=function(t){this.backNode=t},e.prototype.render=function(){var t,i,o=this.angle.get();this.options.direction===e.DIRECTION_X?(t=n.rotateY(o),i=n.rotateY(o+Math.PI)):(t=n.rotateX(o),i=n.rotateX(o+Math.PI));var s=[];return this.frontNode&&s.push({transform:t,target:this.frontNode.render()}),this.backNode&&s.push({transform:n.moveThen([0,0,r],i),target:this.backNode.render()}),s},i.exports=e},{"../core/OptionsManager":10,"../core/RenderNode":11,"../core/Transform":15,"../transitions/Transitionable":88}],103:[function(t,i){function e(t){this.options=Object.create(e.DEFAULT_OPTIONS),this.optionsManager=new u(this.options),t&&this.setOptions(t),this.id=r.register(this),this._modifiers=[],this._states=[],this._contextSizeCache=[0,0],this._dimensionsCache=[0,0],this._activeCount=0,this._eventOutput=new c,c.setOutputHandler(this,this._eventOutput)}function n(t,i,e){var n=[t[0],t[1]];n[0]-=this.options.gutterSize[0]*(i-1),n[1]-=this.options.gutterSize[1]*(e-1);for(var r,a=Math.round(n[1]/e),h=Math.round(n[0]/i),c=0,p=0,u=0;e>u;u++){r=0;for(var l=0;i>l;l++)void 0===this._modifiers[p]?o.call(this,p,[h,a],[r,c,0],1):s.call(this,p,[h,a],[r,c,0],1),p++,r+=h+this.options.gutterSize[0];c+=a+this.options.gutterSize[1]}for(this._dimensionsCache=[this.options.dimensions[0],this.options.dimensions[1]],this._contextSizeCache=[t[0],t[1]],this._activeCount=e*i,u=this._activeCount;u<this._modifiers.length;u++)s.call(this,u,[Math.round(h),Math.round(a)],[0,0],0);this._eventOutput.emit("reflow")}function o(t,i,e,n){var o={transform:new f(a.translate.apply(null,e)),opacity:new l(n),size:new l(i)},s=new p({transform:o.transform,opacity:o.opacity,size:o.size});this._states[t]=o,this._modifiers[t]=s}function s(t,i,e,n){var o=this._states[t],s=o.size,r=o.opacity,a=o.transform,h=this.options.transition;a.halt(),r.halt(),s.halt(),a.setTranslate(e,h),s.set(i,h),r.set(n,h)}var r=t("../core/Entity"),a=(t("../core/RenderNode"),t("../core/Transform")),h=t("../core/ViewSequence"),c=t("../core/EventHandler"),p=t("../core/Modifier"),u=t("../core/OptionsManager"),l=t("../transitions/Transitionable"),f=t("../transitions/TransitionableTransform");e.DEFAULT_OPTIONS={dimensions:[1,1],transition:!1,gutterSize:[0,0]},e.prototype.render=function(){return this.id},e.prototype.setOptions=function(t){return this.optionsManager.setOptions(t)},e.prototype.sequenceFrom=function(t){t instanceof Array&&(t=new h(t)),this.sequence=t},e.prototype.commit=function(t){var i=t.transform,e=t.opacity,o=t.origin,s=t.size,r=this.options.dimensions[0],h=this.options.dimensions[1];(s[0]!==this._contextSizeCache[0]||s[1]!==this._contextSizeCache[1]||r!==this._dimensionsCache[0]||h!==this._dimensionsCache[1])&&n.call(this,s,r,h);for(var c=this.sequence,p=[],u=0;c&&u<this._modifiers.length;){var l=c.get(),f=this._modifiers[u];u>=this._activeCount&&this._states[u].opacity.isActive()&&(this._modifiers.splice(u,1),this._states.splice(u,1)),l&&p.push(f.modify({origin:o,target:l.render()})),c=c.getNext(),u++}return s&&(i=a.moveThen([-s[0]*o[0],-s[1]*o[1],0],i)),{transform:i,opacity:e,size:s,target:p}},i.exports=e},{"../core/Entity":5,"../core/EventHandler":7,"../core/Modifier":9,"../core/OptionsManager":10,"../core/RenderNode":11,"../core/Transform":15,"../core/ViewSequence":17,"../transitions/Transitionable":88,"../transitions/TransitionableTransform":89}],104:[function(t,i){function e(t){this.options=Object.create(e.DEFAULT_OPTIONS),this._optionsManager=new c(this.options),t&&this.setOptions(t),this._entityId=r.register(this),this.header=new a,this.footer=new a,this.content=new a}function n(t,i){var e=t.getSize();return e?e[this.options.direction]:i}function o(t){return this.options.direction===e.DIRECTION_X?h.translate(t,0,0):h.translate(0,t,0)}function s(t,i){return this.options.direction===e.DIRECTION_X?[t,i[1]]:[i[0],t]}var r=t("../core/Entity"),a=t("../core/RenderNode"),h=t("../core/Transform"),c=t("../core/OptionsManager");e.DIRECTION_X=0,e.DIRECTION_Y=1,e.DEFAULT_OPTIONS={direction:e.DIRECTION_Y,headerSize:void 0,footerSize:void 0,defaultHeaderSize:0,defaultFooterSize:0},e.prototype.render=function(){return this._entityId},e.prototype.setOptions=function(t){return this._optionsManager.setOptions(t)},e.prototype.commit=function(t){var i=t.transform,e=t.origin,r=t.size,a=t.opacity,c=void 0!==this.options.headerSize?this.options.headerSize:n.call(this,this.header,this.options.defaultHeaderSize),p=void 0!==this.options.footerSize?this.options.footerSize:n.call(this,this.footer,this.options.defaultFooterSize),u=r[this.options.direction]-c-p;r&&(i=h.moveThen([-r[0]*e[0],-r[1]*e[1],0],i));var l=[{size:s.call(this,c,r),target:this.header.render()},{transform:o.call(this,c),size:s.call(this,u,r),target:this.content.render()},{transform:o.call(this,c+u),size:s.call(this,p,r),target:this.footer.render()}];return{transform:i,opacity:a,size:r,target:l}},i.exports=e},{"../core/Entity":5,"../core/OptionsManager":10,"../core/RenderNode":11,"../core/Transform":15}],105:[function(t,i){function e(t){this.options=Object.create(e.DEFAULT_OPTIONS),this._optionsManager=new a(this.options),t&&this.setOptions(t),this._showing=!1,this.nodes=[],this.transforms=[],this.states=[]}var n=t("../core/Transform"),o=t("../core/Modifier"),s=t("../core/RenderNode"),r=t("../utilities/Utility"),a=t("../core/OptionsManager"),h=t("../transitions/Transitionable"),c=t("../transitions/TransitionableTransform");e.DEFAULT_OPTIONS={inTransform:n.scale(.001,.001,.001),inOpacity:0,inOrigin:[.5,.5],inAlign:[.5,.5],outTransform:n.scale(.001,.001,.001),outOpacity:0,outOrigin:[.5,.5],outAlign:[.5,.5],showTransform:n.identity,showOpacity:1,showOrigin:[.5,.5],showAlign:[.5,.5],inTransition:!0,outTransition:!0,overlap:!1},e.prototype.setOptions=function(t){return this._optionsManager.setOptions(t)},e.prototype.show=function(t,i,e){if(!t)return this.hide(e);if(i instanceof Function&&(e=i,i=void 0),this._showing){if(!this.options.overlap)return this.hide(this.show.bind(this,t,i,e));this.hide()}this._showing=!0;var n={transform:new c(this.options.inTransform),origin:new h(this.options.inOrigin),align:new h(this.options.inAlign),opacity:new h(this.options.inOpacity)},a=new o({transform:n.transform,opacity:n.opacity,origin:n.origin,align:n.align}),p=new s;p.add(a).add(t),this.nodes.push(p),this.states.push(n),this.transforms.push(a);var u=e?r.after(3,e):void 0;i||(i=this.options.inTransition),n.transform.set(this.options.showTransform,i,u),n.opacity.set(this.options.showOpacity,i,u),n.origin.set(this.options.showOrigin,i,u),n.align.set(this.options.showAlign,i,u)},e.prototype.hide=function(t,i){if(this._showing){this._showing=!1,t instanceof Function&&(i=t,t=void 0);var e=this.nodes[this.nodes.length-1],n=this.transforms[this.transforms.length-1],o=this.states[this.states.length-1],s=r.after(3,function(){this.nodes.splice(this.nodes.indexOf(e),1),this.states.splice(this.states.indexOf(o),1),this.transforms.splice(this.transforms.indexOf(n),1),i&&i.call(this)}.bind(this));t||(t=this.options.outTransition),o.transform.set(this.options.outTransform,t,s),o.opacity.set(this.options.outOpacity,t,s),o.origin.set(this.options.outOrigin,t,s),o.align.set(this.options.outAlign,t,s)}},e.prototype.render=function(){for(var t=[],i=0;i<this.nodes.length;i++)t.push(this.nodes[i].render());return t},i.exports=e},{"../core/Modifier":9,"../core/OptionsManager":10,"../core/RenderNode":11,"../core/Transform":15,"../transitions/Transitionable":88,"../transitions/TransitionableTransform":89,"../utilities/Utility":95}],106:[function(t,i){function e(){h.apply(this,arguments),this._showing=-1,this._outgoingRenderables=[],this._nextRenderable=null,this._renderables=[],this._nodes=[],this._modifiers=[],this._states=[],this.inTransformMap=e.DefaultMap.transform,this.inOpacityMap=e.DefaultMap.opacity,this.inOriginMap=e.DefaultMap.origin,this.outTransformMap=e.DefaultMap.transform,this.outOpacityMap=e.DefaultMap.opacity,this.outOriginMap=e.DefaultMap.origin,this._output=[]
}function n(t,i){return t(i.get())}var o=t("../core/Modifier"),s=t("../core/RenderNode"),r=t("../core/Transform"),a=t("../transitions/Transitionable"),h=t("../core/View");e.prototype=Object.create(h.prototype),e.prototype.constructor=e,e.DEFAULT_OPTIONS={inTransition:!0,outTransition:!0,overlap:!0},e.DefaultMap={transform:function(){return r.identity},opacity:function(t){return t},origin:null},e.prototype.inTransformFrom=function(t){if(t instanceof Function)this.inTransformMap=t;else{if(!t||!t.get)throw new Error("inTransformFrom takes only function or getter object");this.inTransformMap=t.get.bind(t)}return this},e.prototype.inOpacityFrom=function(t){if(t instanceof Function)this.inOpacityMap=t;else{if(!t||!t.get)throw new Error("inOpacityFrom takes only function or getter object");this.inOpacityMap=t.get.bind(t)}return this},e.prototype.inOriginFrom=function(t){if(t instanceof Function)this.inOriginMap=t;else{if(!t||!t.get)throw new Error("inOriginFrom takes only function or getter object");this.inOriginMap=t.get.bind(t)}return this},e.prototype.outTransformFrom=function(t){if(t instanceof Function)this.outTransformMap=t;else{if(!t||!t.get)throw new Error("outTransformFrom takes only function or getter object");this.outTransformMap=t.get.bind(t)}return this},e.prototype.outOpacityFrom=function(t){if(t instanceof Function)this.outOpacityMap=t;else{if(!t||!t.get)throw new Error("outOpacityFrom takes only function or getter object");this.outOpacityMap=t.get.bind(t)}return this},e.prototype.outOriginFrom=function(t){if(t instanceof Function)this.outOriginMap=t;else{if(!t||!t.get)throw new Error("outOriginFrom takes only function or getter object");this.outOriginMap=t.get.bind(t)}return this},e.prototype.show=function(t,i,e){if(!t)return this.hide(e);if(i instanceof Function&&(e=i,i=null),this._showing>=0){if(!this.options.overlap)return void(this._nextRenderable?this._nextRenderable=t:(this._nextRenderable=t,this.hide(function(){this._nextRenderable===t&&this.show(this._nextRenderable,e),this._nextRenderable=null})));this.hide()}var r=null,h=this._renderables.indexOf(t);if(h>=0){this._showing=h,r=this._states[h],r.halt();var c=this._outgoingRenderables.indexOf(t);c>=0&&this._outgoingRenderables.splice(c,1)}else{r=new a(0);var p=new o({transform:this.inTransformMap?n.bind(this,this.inTransformMap,r):null,opacity:this.inOpacityMap?n.bind(this,this.inOpacityMap,r):null,origin:this.inOriginMap?n.bind(this,this.inOriginMap,r):null}),u=new s;u.add(p).add(t),this._showing=this._nodes.length,this._nodes.push(u),this._modifiers.push(p),this._states.push(r),this._renderables.push(t)}i||(i=this.options.inTransition),r.set(1,i,e)},e.prototype.hide=function(t,i){if(!(this._showing<0)){var e=this._showing;this._showing=-1,t instanceof Function&&(i=t,t=void 0);var o=this._nodes[e],s=this._modifiers[e],r=this._states[e],a=this._renderables[e];s.transformFrom(this.outTransformMap?n.bind(this,this.outTransformMap,r):null),s.opacityFrom(this.outOpacityMap?n.bind(this,this.outOpacityMap,r):null),s.originFrom(this.outOriginMap?n.bind(this,this.outOriginMap,r):null),this._outgoingRenderables.indexOf(a)<0&&this._outgoingRenderables.push(a),t||(t=this.options.outTransition),r.halt(),r.set(0,t,function(t,e,n,o){if(this._outgoingRenderables.indexOf(o)>=0){var s=this._nodes.indexOf(t);this._nodes.splice(s,1),this._modifiers.splice(s,1),this._states.splice(s,1),this._renderables.splice(s,1),this._outgoingRenderables.splice(this._outgoingRenderables.indexOf(o),1),this._showing>=s&&this._showing--}i&&i.call(this)}.bind(this,o,s,r,a))}},e.prototype.render=function(){var t=this._output;t.length>this._nodes.length&&t.splice(this._nodes.length);for(var i=0;i<this._nodes.length;i++)t[i]=this._nodes[i].render();return t},i.exports=e},{"../core/Modifier":9,"../core/RenderNode":11,"../core/Transform":15,"../core/View":16,"../transitions/Transitionable":88}],107:[function(t,i){function e(t){this.options=Object.create(e.DEFAULT_OPTIONS),this._optionsManager=new r(this.options),t&&this.setOptions(t),this.container=new n(this.options.container),this.scrollview=new s(this.options.scrollview),this.container.add(this.scrollview),this._eventInput=new o,o.setInputHandler(this,this._eventInput),this._eventInput.pipe(this.scrollview),this._eventOutput=new o,o.setOutputHandler(this,this._eventOutput),this.container.pipe(this._eventOutput),this.scrollview.pipe(this._eventOutput)}var n=t("../surfaces/ContainerSurface"),o=t("../core/EventHandler"),s=t("./Scrollview"),r=(t("../utilities/Utility"),t("../core/OptionsManager"));e.DEFAULT_OPTIONS={container:{properties:{overflow:"hidden"}},scrollview:{}},e.prototype.setOptions=function(t){return this._optionsManager.setOptions(t)},e.prototype.sequenceFrom=function(){return this.scrollview.sequenceFrom.apply(this.scrollview,arguments)},e.prototype.getSize=function(){return this.container.getSize.apply(this.container,arguments)},e.prototype.render=function(){return this.container.render()},i.exports=e},{"../core/EventHandler":7,"../core/OptionsManager":10,"../surfaces/ContainerSurface":75,"../utilities/Utility":95,"./Scrollview":109}],108:[function(t,i){function e(t){this.options=Object.create(this.constructor.DEFAULT_OPTIONS),this._optionsManager=new c(this.options),t&&this._optionsManager.setOptions(t),this._node=null,this._position=0,this._positionOffset=0,this._positionGetter=null,this._outputFunction=null,this._masterOutputFunction=null,this.outputFrom(),this._onEdge=0,this.group=new h,this.group.add({render:r.bind(this)}),this._entityId=a.register(this),this._size=[void 0,void 0],this._contextSize=[void 0,void 0],this._eventInput=new f,this._eventOutput=new f,f.setInputHandler(this,this._eventInput),f.setOutputHandler(this,this._eventOutput)}function n(t){t||(t=this._contextSize);var i=this.options.direction;return void 0===t[i]?this._contextSize[i]:t[i]}function o(t,i,e){var o=t.getSize?t.getSize():this._contextSize,s=this._outputFunction(i);return e.push({transform:s,target:t.render()}),n.call(this,o)}function s(){return void 0!==this.options.clipSize?this.options.clipSize:this._contextSize[this.options.direction]>this.getCumulativeSize()[this.options.direction]?n.call(this,this.getCumulativeSize()):n.call(this,this._contextSize)}function r(){for(var t=null,i=this._position,e=[],r=-this._positionOffset,a=s.call(this),h=this._node;h&&r-i<a+this.options.margin;)r+=o.call(this,h,r,e),h=h.getNext?h.getNext():null;var c=this._node,p=n.call(this,c.getSize());if(a>r){for(;c&&a>p;)c=c.getPrevious(),c&&(p+=n.call(this,c.getSize()));for(c=this._node;c&&a>p;)c=c.getNext(),c&&(p+=n.call(this,c.getSize()))}for(!h&&a-d>r-i?1!==this._onEdge&&(this._onEdge=1,this._eventOutput.emit("onEdge",{position:r-a})):!this._node.getPrevious()&&-d>i?-1!==this._onEdge&&(this._onEdge=-1,this._eventOutput.emit("onEdge",{position:0})):0!==this._onEdge&&(this._onEdge=0,this._eventOutput.emit("offEdge")),h=this._node&&this._node.getPrevious?this._node.getPrevious():null,r=-this._positionOffset,h&&(t=h.getSize?h.getSize():this._contextSize,r-=n.call(this,t));h&&r-i>-(a+this.options.margin);)o.call(this,h,r,e),h=h.getPrevious?h.getPrevious():null,h&&(t=h.getSize?h.getSize():this._contextSize,r-=n.call(this,t));return e}var a=t("../core/Entity"),h=t("../core/Group"),c=t("../core/OptionsManager"),p=t("../core/Transform"),u=t("../utilities/Utility"),l=t("../core/ViewSequence"),f=t("../core/EventHandler");e.DEFAULT_OPTIONS={direction:u.Direction.Y,margin:0,clipSize:void 0,groupScroll:!1};var d=0;e.prototype.getCumulativeSize=function(t){return void 0===t&&(t=this._node._.cumulativeSizes.length-1),this._node._.getSize(t)},e.prototype.setOptions=function(t){t.groupScroll!==this.options.groupScroll&&(t.groupScroll?this.group.pipe(this._eventOutput):this.group.unpipe(this._eventOutput)),this._optionsManager.setOptions(t)},e.prototype.onEdge=function(){return this._onEdge},e.prototype.outputFrom=function(t,i){t||(t=function(t){return this.options.direction===u.Direction.X?p.translate(t,0):p.translate(0,t)}.bind(this),i||(i=t)),this._outputFunction=t,this._masterOutputFunction=i?i:function(i){return p.inverse(t(-i))}},e.prototype.positionFrom=function(t){t instanceof Function?this._positionGetter=t:t&&t.get?this._positionGetter=t.get.bind(t):(this._positionGetter=null,this._position=t),this._positionGetter&&(this._position=this._positionGetter.call(this))},e.prototype.sequenceFrom=function(t){t instanceof Array&&(t=new l({array:t})),this._node=t,this._positionOffset=0},e.prototype.getSize=function(t){return t?this._contextSize:this._size},e.prototype.render=function(){return this._node?(this._positionGetter&&(this._position=this._positionGetter.call(this)),this._entityId):null},e.prototype.commit=function(t){var i=t.transform,e=t.opacity,n=t.origin,o=t.size;this.options.clipSize||o[0]===this._contextSize[0]&&o[1]===this._contextSize[1]||(this._onEdge=0,this._contextSize[0]=o[0],this._contextSize[1]=o[1],this.options.direction===u.Direction.X?(this._size[0]=s.call(this),this._size[1]=void 0):(this._size[0]=void 0,this._size[1]=s.call(this)));var r=this._masterOutputFunction(-this._position);return{transform:p.multiply(i,r),size:o,opacity:e,origin:n,target:this.group.render()}},i.exports=e},{"../core/Entity":5,"../core/EventHandler":7,"../core/Group":8,"../core/OptionsManager":10,"../core/Transform":15,"../core/ViewSequence":17,"../utilities/Utility":95}],109:[function(t,i){function e(t){this.options=Object.create(e.DEFAULT_OPTIONS),this._optionsManager=new O(this.options),this._scroller=new T(this.options),this.sync=new b(["scroll","touch"],{direction:this.options.direction,scale:this.options.syncScale,rails:this.options.rails,preventDefault:void 0!==this.options.preventDefault?this.options.preventDefault:this.options.direction!==w.Direction.Y}),this._physicsEngine=new _,this._particle=new y,this._physicsEngine.addBody(this._particle),this.spring=new v({anchor:[0,0,0],period:this.options.edgePeriod,dampingRatio:this.options.edgeDamp}),this.drag=new g({forceFunction:g.FORCE_FUNCTIONS.QUADRATIC,strength:this.options.drag}),this.friction=new g({forceFunction:g.FORCE_FUNCTIONS.LINEAR,strength:this.options.friction}),this._node=null,this._touchCount=0,this._springState=x.NONE,this._onEdge=M.NONE,this._pageSpringPosition=0,this._edgeSpringPosition=0,this._touchVelocity=0,this._earlyEnd=!1,this._needsPaginationCheck=!1,this._displacement=0,this._totalShift=0,this._cachedIndex=0,this._scroller.positionFrom(this.getPosition.bind(this)),this._eventInput=new m,this._eventOutput=new m,this._eventInput.pipe(this.sync),this.sync.pipe(this._eventInput),m.setInputHandler(this,this._eventInput),m.setOutputHandler(this,this._eventOutput),r.call(this),t&&this.setOptions(t)}function n(t){this._touchCount=t.count,void 0===t.count&&(this._touchCount=1),h.call(this),this.setVelocity(0),this._touchVelocity=0,this._earlyEnd=!1}function o(t){var i=-t.velocity,e=-t.delta;if(this._onEdge!==M.NONE&&t.slip&&(0>i&&this._onEdge===M.TOP||i>0&&this._onEdge===M.BOTTOM?this._earlyEnd||(s.call(this,t),this._earlyEnd=!0):this._earlyEnd&&Math.abs(i)>Math.abs(this.getVelocity())&&n.call(this,t)),!this._earlyEnd){if(this._touchVelocity=i,t.slip){var o=this.options.speedLimit;-o>i?i=-o:i>o&&(i=o),this.setVelocity(i);var r=16*o;e>r?e=r:-r>e&&(e=-r)}this.setPosition(this.getPosition()+e),this._displacement+=e,this._springState===x.NONE&&f.call(this)}}function s(t){if(this._touchCount=t.count||0,!this._touchCount){h.call(this),this._onEdge!==M.NONE&&l.call(this,this._edgeSpringPosition,x.EDGE),a.call(this);var i=-t.velocity,e=this.options.speedLimit;t.slip&&(e*=this.options.edgeGrip),-e>i?i=-e:i>e&&(i=e),this.setVelocity(i),this._touchVelocity=0,this._needsPaginationCheck=!0}}function r(){this._eventInput.bindThis(this),this._eventInput.on("start",n),this._eventInput.on("update",o),this._eventInput.on("end",s),this._eventInput.on("resize",function(){this._node._.calculateSize()}.bind(this)),this._scroller.on("onEdge",function(t){this._edgeSpringPosition=t.position,p.call(this,this._scroller.onEdge()),this._eventOutput.emit("onEdge")}.bind(this)),this._scroller.on("offEdge",function(){this.sync.setOptions({scale:this.options.syncScale}),this._onEdge=this._scroller.onEdge(),this._eventOutput.emit("offEdge")}.bind(this)),this._particle.on("update",function(t){this._springState===x.NONE&&f.call(this),this._displacement=t.position.x-this._totalShift}.bind(this)),this._particle.on("end",function(){(!this.options.paginated||this.options.paginated&&this._springState!==x.NONE)&&this._eventOutput.emit("settle")}.bind(this))}function a(){this._springState?this._physicsEngine.attach([this.spring],this._particle):this._physicsEngine.attach([this.drag,this.friction],this._particle)}function h(){this._springState=x.NONE,this._physicsEngine.detachAll()}function c(t){var i=this.options.direction,e=t.getSize();return e?e[i]:this._scroller.getSize()[i]}function p(t){this.sync.setOptions({scale:this.options.edgeGrip}),this._onEdge=t,this._touchCount||this._springState===x.EDGE||l.call(this,this._edgeSpringPosition,x.EDGE),this._springState&&Math.abs(this.getVelocity())<.001&&(h.call(this),a.call(this))}function u(){if(!this._touchCount&&this._springState!==x.EDGE){var t=this.getVelocity();if(!(Math.abs(t)>=this.options.pageStopSpeed)){var i=this.getPosition(),e=Math.abs(t)>this.options.pageSwitchSpeed,n=c.call(this,this._node),o=i>.5*n,s=t>0,r=0>t;this._needsPaginationCheck=!1,o&&!e||e&&s?this.goToNextPage():e&&r?this.goToPreviousPage():l.call(this,0,x.PAGE)}}}function l(t,i){var e;i===x.EDGE?(this._edgeSpringPosition=t,e={anchor:[this._edgeSpringPosition,0,0],period:this.options.edgePeriod,dampingRatio:this.options.edgeDamp}):i===x.PAGE&&(this._pageSpringPosition=t,e={anchor:[this._pageSpringPosition,0,0],period:this.options.pagePeriod,dampingRatio:this.options.pageDamp}),this.spring.setOptions(e),i&&!this._springState&&(h.call(this),this._springState=i,a.call(this)),this._springState=i}function f(){var t=0,i=this.getPosition();i+=(0>i?-.5:.5)>>0;for(var e=c.call(this,this._node),n=this._node.getNext();t+i>=e&&n;)t-=e,this._scroller.sequenceFrom(n),this._node=n,n=this._node.getNext(),e=c.call(this,this._node);for(var o,s=this._node.getPrevious();0>=t+i&&s;)o=c.call(this,s),this._scroller.sequenceFrom(s),this._node=s,t+=o,s=this._node.getPrevious();t&&d.call(this,t),this._node&&(this._node.index!==this._cachedIndex?this.getPosition()<.5*e&&(this._cachedIndex=this._node.index,this._eventOutput.emit("pageChange",{direction:-1,index:this._cachedIndex})):this.getPosition()>.5*e&&(this._cachedIndex=this._node.index+1,this._eventOutput.emit("pageChange",{direction:1,index:this._cachedIndex})))}function d(t){this._edgeSpringPosition+=t,this._pageSpringPosition+=t,this.setPosition(this.getPosition()+t),this._totalShift+=t,this._springState===x.EDGE?this.spring.setOptions({anchor:[this._edgeSpringPosition,0,0]}):this._springState===x.PAGE&&this.spring.setOptions({anchor:[this._pageSpringPosition,0,0]})}var _=t("../physics/PhysicsEngine"),y=t("../physics/bodies/Particle"),g=t("../physics/forces/Drag"),v=t("../physics/forces/Spring"),m=t("../core/EventHandler"),O=t("../core/OptionsManager"),S=t("../core/ViewSequence"),T=t("../views/Scroller"),w=t("../utilities/Utility"),b=t("../inputs/GenericSync"),E=t("../inputs/ScrollSync"),I=t("../inputs/TouchSync");b.register({scroll:E,touch:I});var x={NONE:0,EDGE:1,PAGE:2},M={TOP:-1,NONE:0,BOTTOM:1};e.DEFAULT_OPTIONS={direction:w.Direction.Y,rails:!0,friction:.005,drag:1e-4,edgeGrip:.2,edgePeriod:300,edgeDamp:1,margin:1e3,paginated:!1,pagePeriod:500,pageDamp:.8,pageStopSpeed:10,pageSwitchSpeed:.5,speedLimit:5,groupScroll:!1,syncScale:1},e.prototype.getCurrentIndex=function(){return this._node.index},e.prototype.goToPreviousPage=function(){if(!this._node||this._onEdge===M.TOP)return null;if(this.getPosition()>1&&this._springState===x.NONE)return l.call(this,0,x.PAGE),this._node;var t=this._node.getPrevious();if(t){var i=c.call(this,t);this._scroller.sequenceFrom(t),this._node=t,d.call(this,i),l.call(this,0,x.PAGE)}return t},e.prototype.goToNextPage=function(){if(!this._node||this._onEdge===M.BOTTOM)return null;var t=this._node.getNext();if(t){var i=c.call(this,this._node);this._scroller.sequenceFrom(t),this._node=t,d.call(this,-i),l.call(this,0,x.PAGE)}return t},e.prototype.goToPage=function(t){var i,e=this.getCurrentIndex();if(e>t)for(i=0;e-t>i;i++)this.goToPreviousPage();if(t>e)for(i=0;t-e>i;i++)this.goToNextPage()},e.prototype.outputFrom=function(){return this._scroller.outputFrom.apply(this._scroller,arguments)},e.prototype.getPosition=function(){return this._particle.getPosition1D()},e.prototype.getAbsolutePosition=function(){return this._scroller.getCumulativeSize(this.getCurrentIndex())[this.options.direction]+this.getPosition()},e.prototype.getOffset=e.prototype.getPosition,e.prototype.setPosition=function(t){this._particle.setPosition1D(t)},e.prototype.setOffset=e.prototype.setPosition,e.prototype.getVelocity=function(){return this._touchCount?this._touchVelocity:this._particle.getVelocity1D()},e.prototype.setVelocity=function(t){this._particle.setVelocity1D(t)},e.prototype.setOptions=function(t){void 0!==t.direction&&("x"===t.direction?t.direction=w.Direction.X:"y"===t.direction&&(t.direction=w.Direction.Y)),t.groupScroll!==this.options.groupScroll&&(t.groupScroll?this.subscribe(this._scroller):this.unsubscribe(this._scroller)),this._optionsManager.setOptions(t),this._scroller.setOptions(t),void 0!==t.drag&&this.drag.setOptions({strength:this.options.drag}),void 0!==t.friction&&this.friction.setOptions({strength:this.options.friction}),(void 0!==t.edgePeriod||void 0!==t.edgeDamp)&&this.spring.setOptions({period:this.options.edgePeriod,dampingRatio:this.options.edgeDamp}),(t.rails||void 0!==t.direction||void 0!==t.syncScale||t.preventDefault)&&this.sync.setOptions({rails:this.options.rails,direction:this.options.direction===w.Direction.X?b.DIRECTION_X:b.DIRECTION_Y,scale:this.options.syncScale,preventDefault:this.options.preventDefault})},e.prototype.sequenceFrom=function(t){return t instanceof Array&&(t=new S({array:t,trackSize:!0})),this._node=t,this._scroller.sequenceFrom(t)},e.prototype.getSize=function(){return this._scroller.getSize.apply(this._scroller,arguments)},e.prototype.render=function(){return this.options.paginated&&this._needsPaginationCheck&&u.call(this),this._scroller.render()},i.exports=e},{"../core/EventHandler":7,"../core/OptionsManager":10,"../core/ViewSequence":17,"../inputs/GenericSync":27,"../inputs/ScrollSync":32,"../inputs/TouchSync":33,"../physics/PhysicsEngine":48,"../physics/bodies/Particle":51,"../physics/forces/Drag":63,"../physics/forces/Spring":68,"../utilities/Utility":95,"../views/Scroller":108}],110:[function(t,i){function e(t){this._items=null,this._size=null,this._outputFunction=e.DEFAULT_OUTPUT_FUNCTION,this.options=r.clone(this.constructor.DEFAULT_OPTIONS||e.DEFAULT_OPTIONS),this.optionsManager=new n(this.options),t&&this.setOptions(t)}var n=t("../core/OptionsManager"),o=t("../core/Transform"),s=t("../core/ViewSequence"),r=t("../utilities/Utility");e.DEFAULT_OPTIONS={direction:r.Direction.Y,itemSpacing:0},e.DEFAULT_OUTPUT_FUNCTION=function(t,i){var e=this.options.direction===r.Direction.X?o.translate(i,0):o.translate(0,i);return{transform:e,target:t.render()}},e.prototype.getSize=function(){return this._size||this.render(),this._size},e.prototype.sequenceFrom=function(t){return t instanceof Array&&(t=new s(t)),this._items=t,this},e.prototype.setOptions=function(){return this.optionsManager.setOptions.apply(this.optionsManager,arguments),this},e.prototype.setOutputFunction=function(t){return this._outputFunction=t,this},e.prototype.render=function(){var t=0,i=1^this.options.direction,e=this._items,n=null,o=[],s={},r=[],a=0;for(this._size=[0,0];e&&(n=e.get());)n.getSize&&(o=n.getSize()),s=this._outputFunction.call(this,n,t,a++),r.push(s),o&&(o[this.options.direction]&&(t+=o[this.options.direction]),o[i]>this._size[i]&&(this._size[i]=o[i])),e=e.getNext(),this.options.itemSpacing&&e&&(t+=this.options.itemSpacing);return this._size[this.options.direction]=t,r},i.exports=e},{"../core/OptionsManager":10,"../core/Transform":15,"../core/ViewSequence":17,"../utilities/Utility":95}],111:[function(t,i){i.exports={ContextualView:t("./ContextualView"),Deck:t("./Deck"),EdgeSwapper:t("./EdgeSwapper"),DrawerLayout:t("./DrawerLayout"),FlexibleLayout:t("./FlexibleLayout"),Flipper:t("./Flipper"),GridLayout:t("./GridLayout"),HeaderFooterLayout:t("./HeaderFooterLayout"),Lightbox:t("./Lightbox"),RenderController:t("./RenderController"),ScrollContainer:t("./ScrollContainer"),Scroller:t("./Scroller"),Scrollview:t("./Scrollview"),SequentialLayout:t("./SequentialLayout")}},{"./ContextualView":97,"./Deck":98,"./DrawerLayout":99,"./EdgeSwapper":100,"./FlexibleLayout":101,"./Flipper":102,"./GridLayout":103,"./HeaderFooterLayout":104,"./Lightbox":105,"./RenderController":106,"./ScrollContainer":107,"./Scroller":108,"./Scrollview":109,"./SequentialLayout":110}],112:[function(t,i){function e(){r.apply(this,arguments),this.title=new o({classes:this.options.classes,content:this.options.content}),this.back=new o({size:[this.options.size[1],this.options.size[1]],classes:this.options.classes,content:this.options.backContent}),this.back.on("click",function(){this._eventOutput.emit("back",{})}.bind(this)),this.more=new o({size:[this.options.size[1],this.options.size[1]],classes:this.options.classes,content:this.options.moreContent}),this.more.on("click",function(){this._eventOutput.emit("more",{})}.bind(this)),this.layout=new n({id:"master",size:this.options.size,target:[{transform:s.inFront,origin:[0,.5],target:this.back},{origin:[.5,.5],target:this.title},{transform:s.inFront,origin:[1,.5],target:this.more}]}),this._add(this.layout),this._optionsManager.on("change",function(t){var i=t.id,e=t.value;"size"===i?(this.layout.id.master.setSize(e),this.title.setSize(e),this.back.setSize([e[1],e[1]]),this.more.setSize([e[1],e[1]])):"backClasses"===i?this.back.setOptions({classes:this.options.classes.concat(this.options.backClasses)}):"backContent"===i?this.back.setContent(this.options.backContent):"classes"===i?(this.title.setOptions({classes:this.options.classes}),this.back.setOptions({classes:this.options.classes.concat(this.options.backClasses)}),this.more.setOptions({classes:this.options.classes.concat(this.options.moreClasses)})):"content"===i?this.setContent(this.options.content):"moreClasses"===i?this.more.setOptions({classes:this.options.classes.concat(this.options.moreClasses)}):"moreContent"===i&&this.more.setContent(this.options.content)}.bind(this))}var n=t("../core/Scene"),o=t("../core/Surface"),s=t("../core/Transform"),r=t("../core/View");e.prototype=Object.create(r.prototype),e.prototype.constructor=e,e.DEFAULT_OPTIONS={size:[void 0,50],backClasses:["back"],backContent:"&#x25c0;",classes:["navigation"],content:"",moreClasses:["more"],moreContent:"&#x271a;"},e.prototype.setContent=function(t){return this.title.setContent(t)},i.exports=e},{"../core/Scene":12,"../core/Surface":14,"../core/Transform":15,"../core/View":16}],113:[function(t,i){function e(t){this.options=Object.create(e.DEFAULT_OPTIONS),this.optionsManager=new c(this.options),t&&this.setOptions(t),this.indicator=new s({size:this.options.indicatorSize,classes:["slider-back"]}),this.label=new o({size:this.options.labelSize,content:this.options.label,properties:{pointerEvents:"none"},classes:["slider-label"]}),this.eventOutput=new a,this.eventInput=new a,a.setInputHandler(this,this.eventInput),a.setOutputHandler(this,this.eventOutput);var i=(this.options.range[1]-this.options.range[0])/this.options.indicatorSize[0];this.sync=new l(["mouse","touch"],{scale:i,direction:l.DIRECTION_X}),this.indicator.pipe(this.sync),this.sync.pipe(this),this.eventInput.on("update",function(t){this.set(t.position)}.bind(this)),this._drawPos=0,n.call(this)}function n(){this.label.setContent(this.options.label+'<span style="float: right">'+this.get().toFixed(this.options.precision)+"</span>")}var o=t("../core/Surface"),s=t("../surfaces/CanvasSurface"),r=t("../core/Transform"),a=t("../core/EventHandler"),h=t("../math/Utilities"),c=t("../core/OptionsManager"),p=t("../inputs/MouseSync"),u=t("../inputs/TouchSync"),l=t("../inputs/GenericSync");l.register({mouse:p,touch:u}),e.DEFAULT_OPTIONS={size:[200,60],indicatorSize:[200,30],labelSize:[200,30],range:[0,1],precision:2,value:0,label:"",fillColor:"rgba(170, 170, 170, 1)"},e.prototype.setOptions=function(t){return this.optionsManager.setOptions(t)},e.prototype.get=function(){return this.options.value},e.prototype.set=function(t){t!==this.options.value&&(this.options.value=h.clamp(t,this.options.range),n.call(this),this.eventOutput.emit("change",{value:t}))},e.prototype.getSize=function(){return this.options.size},e.prototype.render=function(){var t=this.options.range,i=Math.floor((this.get()-t[0])/(t[1]-t[0])*this.options.indicatorSize[0]);if(i<this._drawPos)this.indicator.getContext("2d").clearRect(i,0,this._drawPos-i+1,this.options.indicatorSize[1]);else if(i>this._drawPos){var e=this.indicator.getContext("2d");e.fillStyle=this.options.fillColor,e.fillRect(this._drawPos-1,0,i-this._drawPos+1,this.options.indicatorSize[1])}return this._drawPos=i,{size:this.options.size,target:[{origin:[0,0],target:this.indicator.render()},{transform:r.translate(0,0,1),origin:[0,0],target:this.label.render()}]}},i.exports=e},{"../core/EventHandler":7,"../core/OptionsManager":10,"../core/Surface":14,"../core/Transform":15,"../inputs/GenericSync":27,"../inputs/MouseSync":28,"../inputs/TouchSync":33,"../math/Utilities":40,"../surfaces/CanvasSurface":74}],114:[function(t,i){function e(){r.apply(this,arguments),this.layout=new a,this.buttons=[],this._buttonIds={},this._buttonCallbacks={},this.layout.sequenceFrom(this.buttons),this._add(this.layout),this._optionsManager.on("change",n.bind(this))}function n(t){var i=t.id,e=t.value;if("direction"===i)this.layout.setOptions({dimensions:o.call(this.buttons.length,this.options.direction)});else if("buttons"===i)for(var n in this.buttons)this.buttons[n].setOptions(e);else if("sections"===i)for(var s in this.options.sections)this.defineSection(s,this.options.sections[s])}function o(t,i){return i===s.Direction.X?[t,1]:[1,t]}var s=t("../utilities/Utility"),r=t("../core/View"),a=t("../views/GridLayout"),h=t("./ToggleButton");e.prototype=Object.create(r.prototype),e.prototype.constructor=e,e.DEFAULT_OPTIONS={sections:[],widget:h,size:[void 0,50],direction:s.Direction.X,buttons:{toggleMode:h.ON}},e.prototype.defineSection=function(t,i){var e,n=this._buttonIds[t];if(void 0===n){n=this.buttons.length,this._buttonIds[t]=n;var s=this.options.widget;e=new s,this.buttons[n]=e,this.layout.setOptions({dimensions:o(this.buttons.length,this.options.direction)})}else e=this.buttons[n],e.unbind("select",this._buttonCallbacks[t]);this.options.buttons&&e.setOptions(this.options.buttons),e.setOptions(i),this._buttonCallbacks[t]=this.select.bind(this,t),e.on("select",this._buttonCallbacks[t])},e.prototype.select=function(t){var i=this._buttonIds[t];this.buttons[i]&&this.buttons[i].isSelected()?this._eventOutput.emit("select",{id:t}):this.buttons[i]&&this.buttons[i].select();for(var e=0;e<this.buttons.length;e++)e!==i&&this.buttons[e].deselect()},i.exports=e},{"../core/View":16,"../utilities/Utility":95,"../views/GridLayout":103,"./ToggleButton":115}],115:[function(t,i){function e(t){this.options={content:"",offClasses:["off"],onClasses:["on"],size:void 0,outTransition:{curve:"easeInOut",duration:300},inTransition:{curve:"easeInOut",duration:300},toggleMode:e.TOGGLE,crossfade:!0},this._eventOutput=new o,o.setOutputHandler(this,this._eventOutput),this.offSurface=new n,this.offSurface.on("click",function(){this.options.toggleMode!==e.OFF&&this.select()}.bind(this)),this.offSurface.pipe(this._eventOutput),this.onSurface=new n,this.onSurface.on("click",function(){this.options.toggleMode!==e.ON&&this.deselect()}.bind(this)),this.onSurface.pipe(this._eventOutput),this.arbiter=new s({overlap:this.options.crossfade}),this.deselect(),t&&this.setOptions(t)}var n=t("../core/Surface"),o=t("../core/EventHandler"),s=t("../views/RenderController");e.OFF=0,e.ON=1,e.TOGGLE=2,e.prototype.select=function(){this.selected=!0,this.arbiter.show(this.onSurface,this.options.inTransition),this._eventOutput.emit("select")},e.prototype.deselect=function(){this.selected=!1,this.arbiter.show(this.offSurface,this.options.outTransition),this._eventOutput.emit("deselect")},e.prototype.isSelected=function(){return this.selected},e.prototype.setOptions=function(t){void 0!==t.content&&(this.options.content=t.content,this.offSurface.setContent(this.options.content),this.onSurface.setContent(this.options.content)),t.offClasses&&(this.options.offClasses=t.offClasses,this.offSurface.setClasses(this.options.offClasses)),t.onClasses&&(this.options.onClasses=t.onClasses,this.onSurface.setClasses(this.options.onClasses)),void 0!==t.size&&(this.options.size=t.size,this.onSurface.setSize(this.options.size),this.offSurface.setSize(this.options.size)),void 0!==t.toggleMode&&(this.options.toggleMode=t.toggleMode),void 0!==t.outTransition&&(this.options.outTransition=t.outTransition),void 0!==t.inTransition&&(this.options.inTransition=t.inTransition),void 0!==t.crossfade&&(this.options.crossfade=t.crossfade,this.arbiter.setOptions({overlap:this.options.crossfade}))},e.prototype.getSize=function(){return this.options.size},e.prototype.render=function(){return this.arbiter.render()},i.exports=e},{"../core/EventHandler":7,"../core/Surface":14,"../views/RenderController":106}],116:[function(t,i){i.exports={NavigationBar:t("./NavigationBar"),Slider:t("./Slider"),TabBar:t("./TabBar"),ToggleButton:t("./ToggleButton")}},{"./NavigationBar":112,"./Slider":113,"./TabBar":114,"./ToggleButton":115}]},{},[23])(23)});
; browserify_shim__define__module__export__(typeof famous != "undefined" ? famous : window.famous);

}).call(global, undefined, undefined, undefined, undefined, function defineExport(ex) { module.exports = ex; });

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],"/home/ubuntu/workspace/bower_components/ionic/release/js/ionic-angular.min.js":[function(require,module,exports){
(function (global){

; require("/home/ubuntu/workspace/bower_components/ionic/release/js/ionic.min.js");
require("/home/ubuntu/workspace/bower_components/angular/angular.min.js");
require("/home/ubuntu/workspace/bower_components/angular-animate/angular-animate.min.js");
require("/home/ubuntu/workspace/bower_components/angular-sanitize/angular-sanitize.min.js");
require("/home/ubuntu/workspace/bower_components/angular-ui-router/release/angular-ui-router.min.js");
;__browserify_shim_require__=require;(function browserifyShim(module, exports, require, define, browserify_shim__define__module__export__) {
/*!
 * Copyright 2014 Drifty Co.
 * http://drifty.com/
 *
 * Ionic, v1.0.0-beta.13
 * A powerful HTML5 mobile app framework.
 * http://ionicframework.com/
 *
 * By @maxlynch, @benjsperry, @adamdbradley <3
 *
 * Licensed under the MIT license. Please see LICENSE for more information.
 *
 */

!function(){function e(e){if(e.$root!==e){var t=e.$parent;e.$$disconnected=!0,t.$$childHead===e&&(t.$$childHead=e.$$nextSibling),t.$$childTail===e&&(t.$$childTail=e.$$prevSibling),e.$$prevSibling&&(e.$$prevSibling.$$nextSibling=e.$$nextSibling),e.$$nextSibling&&(e.$$nextSibling.$$prevSibling=e.$$prevSibling),e.$$nextSibling=e.$$prevSibling=null}}function t(e){if(e.$root!==e&&e.$$disconnected){var t=e.$parent;e.$$disconnected=!1,e.$$prevSibling=t.$$childTail,t.$$childHead?(t.$$childTail.$$nextSibling=e,t.$$childTail=e):t.$$childHead=t.$$childTail=e}}function n(e){return["$log",function(t){function n(e){this.handle=e}var i=this,o=this._instances=[];this._registerInstance=function(e,t){return e.$$delegateHandle=t,o.push(e),function(){var t=o.indexOf(e);-1!==t&&o.splice(t,1)}},this.$getByHandle=function(e){return e?new n(e):i},e.forEach(function(e){n.prototype[e]=function(){var n,i,r=this.handle,a=arguments,s=0;return o.forEach(function(t){t.$$delegateHandle===r&&(s++,i=t[e].apply(t,a),1===s&&(n=i))}),s?n:t.warn('Delegate for handle "'+this.handle+'" could not find a corresponding element with delegate-handle="'+this.handle+'"! '+e+"() was not called!\nPossible cause: If you are calling "+e+'() immediately, and your element with delegate-handle="'+this.handle+'" is a child of your controller, then your element may not be compiled yet. Put a $timeout around your call to '+e+"() and try again.")},i[e]=function(){var t,n,i=arguments;return o.forEach(function(o,r){n=o[e].apply(o,i),0===r&&(t=n)}),t}})}]}function i(e,t){return[function(){return{priority:"99",link:function(n,i,o){o.$observe(e,function(e){e||i[0].removeAttribute(t)})}}}]}function o(e){return["$ionicGesture","$parse",function(t,n){var i=e.substr(2).toLowerCase();return function(o,r,a){var s=n(a[e]),c=function(e){o.$apply(function(){s(o,{$event:e})})},l=t.on(i,c,r);o.$on("$destroy",function(){t.off(l,i,c)})}}]}function r(){return["$ionicScrollDelegate",function(e){return{restrict:"E",link:function(t,n,i){function o(t){for(var i=3,o=t.target;i--&&o;){if(o.classList.contains("button")||o.tagName.match(/input|textarea|select/i)||o.isContentEditable)return;o=o.parentNode}var r=t.gesture&&t.gesture.touches[0]||t.detail.touches[0],a=n[0].getBoundingClientRect();ionic.DomUtil.rectContains(r.pageX,r.pageY,a.left,a.top-20,a.left+a.width,a.top+a.height)&&e.scrollTop(!0)}"true"!=i.noTapScroll&&(ionic.on("tap",o,n[0]),t.$on("$destroy",function(){ionic.off("tap",o,n[0])}))}}}]}function a(e){return[function(){return{restrict:"E",compile:function(t){function n(t,n,i){var o=(new ionic.views.HeaderBar({el:n[0],alignTitle:i.alignTitle||"center"}),n[0]);e?(t.$watch(function(){return o.className},function(e){var n=-1===e.indexOf("ng-hide"),i=-1!==e.indexOf("bar-subheader");t.$hasHeader=n&&!i,t.$hasSubheader=n&&i}),t.$on("$destroy",function(){delete t.$hasHeader,delete t.$hasSubheader})):(t.$watch(function(){return o.className},function(e){var n=-1===e.indexOf("ng-hide"),i=-1!==e.indexOf("bar-subfooter");t.$hasFooter=n&&!i,t.$hasSubfooter=n&&i}),t.$on("$destroy",function(){delete t.$hasFooter,delete t.$hasSubfooter}),t.$watch("$hasTabs",function(e){n.toggleClass("has-tabs",!!e)}))}t.addClass(e?"bar bar-header":"bar bar-footer");var i=t[0].parentNode;return i.querySelector(".tabs-top")&&t.addClass("has-tabs-top"),{pre:n}}}}]}function s(e){return e.clientHeight}function c(e){e.stopPropagation()}var l={method:function(e,t,n){var i=!1;return function(){return i||(i=!0,t(e)),n.apply(this,arguments)}},field:function(e,t,n,i,o){var r=!1,a=function(){return r||(r=!0,t(e)),o},s=function(n){return r||(r=!0,t(e)),o=n,n};Object.defineProperty(n,i,{get:a,set:s,enumerable:!0})}},u=angular.module("ionic",["ngAnimate","ngSanitize","ui.router"]),d=angular.extend,f=angular.forEach,h=angular.isDefined,p=angular.isString,v=angular.element;u.factory("$ionicActionSheet",["$rootScope","$compile","$animate","$timeout","$ionicTemplateLoader","$ionicPlatform","$ionicBody",function(e,t,n,i,o,r,a){function s(o){var s=e.$new(!0);angular.extend(s,{cancel:angular.noop,destructiveButtonClicked:angular.noop,buttonClicked:angular.noop,$deregisterBackButton:angular.noop,buttons:[],cancelOnStateChange:!0},o||{});var c=s.element=t('<ion-action-sheet buttons="buttons"></ion-action-sheet>')(s),l=v(c[0].querySelector(".action-sheet-wrapper")),u=s.cancelOnStateChange?e.$on("$stateChangeSuccess",function(){s.cancel()}):angular.noop;return s.removeSheet=function(e){s.removed||(s.removed=!0,l.removeClass("action-sheet-up"),i(function(){a.removeClass("action-sheet-open")},400),s.$deregisterBackButton(),u(),n.removeClass(c,"active",function(){s.$destroy(),c.remove(),s.cancel.$scope=null,(e||angular.noop)()}))},s.showSheet=function(e){s.removed||(a.append(c).addClass("action-sheet-open"),n.addClass(c,"active",function(){s.removed||(e||angular.noop)()}),i(function(){s.removed||l.addClass("action-sheet-up")},20,!1))},s.$deregisterBackButton=r.registerBackButtonAction(function(){i(s.cancel)},C),s.cancel=function(){s.removeSheet(o.cancel)},s.buttonClicked=function(e){o.buttonClicked(e,o.buttons[e])===!0&&s.removeSheet()},s.destructiveButtonClicked=function(){o.destructiveButtonClicked()===!0&&s.removeSheet()},s.showSheet(),s.cancel.$scope=s,s.cancel}return{show:s}}]),v.prototype.addClass=function(e){var t,n,i,o,r,a;if(e&&"ng-scope"!=e&&"ng-isolate-scope"!=e)for(t=0;t<this.length;t++)if(o=this[t],o.setAttribute)if(e.indexOf(" ")<0&&o.classList.add)o.classList.add(e);else{for(a=(" "+(o.getAttribute("class")||"")+" ").replace(/[\n\t]/g," "),r=e.split(" "),n=0;n<r.length;n++)i=r[n].trim(),-1===a.indexOf(" "+i+" ")&&(a+=i+" ");o.setAttribute("class",a.trim())}return this},v.prototype.removeClass=function(e){var t,n,i,o,r;if(e)for(t=0;t<this.length;t++)if(r=this[t],r.getAttribute)if(e.indexOf(" ")<0&&r.classList.remove)r.classList.remove(e);else for(i=e.split(" "),n=0;n<i.length;n++)o=i[n],r.setAttribute("class",(" "+(r.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ").replace(" "+o.trim()+" "," ").trim());return this},u.factory("$ionicBackdrop",["$document","$timeout",function(e,t){function n(){1===++a&&(r.addClass("visible"),ionic.requestAnimationFrame(function(){a&&r.addClass("active")}))}function i(){0===--a&&(r.removeClass("active"),t(function(){!a&&r.removeClass("visible")},400,!1))}function o(){return r}var r=v('<div class="backdrop">'),a=0;return e[0].body.appendChild(r[0]),{retain:n,release:i,getElement:o,_element:r}}]),u.factory("$ionicBind",["$parse","$interpolate",function(e,t){var n=/^\s*([@=&])(\??)\s*(\w*)\s*$/;return function(i,o,r){f(r||{},function(r,a){var s,c,l=r.match(n)||[],u=l[3]||a,d=l[1];switch(d){case"@":if(!o[u])return;o.$observe(u,function(e){i[a]=e}),o[u]&&(i[a]=t(o[u])(i));break;case"=":if(!o[u])return;c=i.$watch(o[u],function(e){i[a]=e}),i.$on("$destroy",c);break;case"&":if(o[u]&&o[u].match(RegExp(a+"(.*?)")))throw new Error('& expression binding "'+a+'" looks like it will recursively call "'+o[u]+'" and cause a stack overflow! Please choose a different scopeName.');s=e(o[u]),i[a]=function(e){return s(i,e)}}})}}]),u.factory("$ionicBody",["$document",function(e){return{addClass:function(){for(var t=0;t<arguments.length;t++)e[0].body.classList.add(arguments[t]);return this},removeClass:function(){for(var t=0;t<arguments.length;t++)e[0].body.classList.remove(arguments[t]);return this},enableClass:function(e){var t=Array.prototype.slice.call(arguments).slice(1);return e?this.addClass.apply(this,t):this.removeClass.apply(this,t),this},append:function(t){return e[0].body.appendChild(t.length?t[0]:t),this},get:function(){return e[0].body}}}]),u.factory("$ionicClickBlock",["$document","$ionicBody","$timeout",function(e,t,n){var i=e[0].createElement("div");return i.className="click-block",{show:function(){i.parentElement?i.classList.remove("hide"):t.append(i),n(function(){i.classList.add("hide")},500)},hide:function(){i.classList.add("hide")}}}]),u.factory("$collectionDataSource",["$cacheFactory","$parse","$rootScope",function(n,i,o){function r(e){e.css(ionic.CSS.TRANSFORM,"translate3d(-2000px,-2000px,0)")}function a(e){this.scope=e.scope,this.transcludeFn=e.transcludeFn,this.transcludeParent=e.transcludeParent,this.element=e.element,this.keyExpr=e.keyExpr,this.listExpr=e.listExpr,this.trackByExpr=e.trackByExpr,this.heightGetter=e.heightGetter,this.widthGetter=e.widthGetter,this.dimensions=[],this.data=[],this.attachedItems={},this.BACKUP_ITEMS_LENGTH=20,this.backupItemsArray=[]}return a.prototype={setup:function(){if(!this.isSetup){this.isSetup=!0;for(var e=0;e<this.BACKUP_ITEMS_LENGTH;e++)this.detachItem(this.createItem())}},destroy:function(){this.dimensions.length=0,this.data=null,this.backupItemsArray.length=0,this.attachedItems={}},calculateDataDimensions:function(){var e={};this.dimensions=this.data.map(function(t,n){return e[this.keyExpr]=t,e.$index=n,{width:this.widthGetter(this.scope,e),height:this.heightGetter(this.scope,e)}},this),this.dimensions=this.beforeSiblings.concat(this.dimensions).concat(this.afterSiblings),this.dataStartIndex=this.beforeSiblings.length},createItem:function(){var e={};return e.scope=this.scope.$new(),this.transcludeFn(e.scope,function(t){t.css("position","absolute"),e.element=t}),this.transcludeParent.append(e.element),e},getItem:function(e){return(item=this.attachedItems[e])||((item=this.backupItemsArray.pop())?t(item.scope):item=this.createItem()),item},attachItemAtIndex:function(e){if(e<this.dataStartIndex)return this.beforeSiblings[e];if(e-=this.dataStartIndex,e>this.data.length-1)return this.afterSiblings[e-this.dataStartIndex];var t=this.getItem(e),n=this.data[e];return(t.index!==e||t.scope[this.keyExpr]!==n)&&(t.index=t.scope.$index=e,t.scope[this.keyExpr]=n,t.scope.$first=0===e,t.scope.$last=e===this.getLength()-1,t.scope.$middle=!(t.scope.$first||t.scope.$last),t.scope.$odd=!(t.scope.$even=0===(1&e)),o.$$phase||t.scope.$digest()),this.attachedItems[e]=t,t},destroyItem:function(e){e.element.remove(),e.scope.$destroy(),e.scope=null,e.element=null},detachItem:function(t){delete this.attachedItems[t.index],t.isOutside?r(t.element):this.backupItemsArray.length>=this.BACKUP_ITEMS_LENGTH?this.destroyItem(t):(this.backupItemsArray.push(t),r(t.element),e(t.scope))},getLength:function(){return this.dimensions&&this.dimensions.length||0},setData:function(e,t,n){this.data=e||[],this.beforeSiblings=t||[],this.afterSiblings=n||[],this.calculateDataDimensions(),this.afterSiblings.forEach(function(e){e.element.css({position:"absolute",top:"0",left:"0"}),r(e.element)})}},a}]),u.factory("$collectionRepeatManager",["$rootScope","$timeout",function(){function e(e){function t(){return n.viewportSize}var n=this;this.dataSource=e.dataSource,this.element=e.element,this.scrollView=e.scrollView,this.isVertical=!!this.scrollView.options.scrollingY,this.renderedItems={},this.dimensions=[],this.setCurrentIndex(0),this.scrollView.__$callback=this.scrollView.__callback,this.scrollView.__callback=angular.bind(this,this.renderScroll),this.isVertical?(this.scrollView.options.getContentHeight=t,this.scrollValue=function(){return this.scrollView.__scrollTop},this.scrollMaxValue=function(){return this.scrollView.__maxScrollTop},this.scrollSize=function(){return this.scrollView.__clientHeight},this.secondaryScrollSize=function(){return this.scrollView.__clientWidth},this.transformString=function(e,t){return"translate3d("+t+"px,"+e+"px,0)"},this.primaryDimension=function(e){return e.height},this.secondaryDimension=function(e){return e.width}):(this.scrollView.options.getContentWidth=t,this.scrollValue=function(){return this.scrollView.__scrollLeft},this.scrollMaxValue=function(){return this.scrollView.__maxScrollLeft},this.scrollSize=function(){return this.scrollView.__clientWidth},this.secondaryScrollSize=function(){return this.scrollView.__clientHeight},this.transformString=function(e,t){return"translate3d("+e+"px,"+t+"px,0)"},this.primaryDimension=function(e){return e.width},this.secondaryDimension=function(e){return e.height})}return e.prototype={destroy:function(){this.renderedItems={},this.render=angular.noop,this.calculateDimensions=angular.noop,this.dimensions=[]},calculateDimensions:function(){function e(e){var r={primarySize:this.primaryDimension(e),secondarySize:Math.min(this.secondaryDimension(e),o)};return t&&(i+=t.secondarySize,t.primaryPos===n&&i+r.secondarySize>o&&(i=0,n+=t.primarySize)),r.primaryPos=n,r.secondaryPos=i,t=r,r}var t,n=0,i=0,o=this.secondaryScrollSize();this.dataSource.beforeSiblings&&this.dataSource.beforeSiblings.forEach(e,this);var r=n+(t?t.primarySize:0);n=i=0,t=null;var a=this.dataSource.dimensions.map(e,this),s=n+(t?t.primarySize:0);return{beforeSize:r,totalSize:s,dimensions:a}},resize:function(){var e=this.calculateDimensions();this.dimensions=e.dimensions,this.viewportSize=e.totalSize,this.beforeSize=e.beforeSize,this.setCurrentIndex(0),this.render(!0),this.dataSource.setup()},setCurrentIndex:function(e){var t=(this.dimensions[e]||{}).primaryPos||0;this.currentIndex=e,this.hasPrevIndex=e>0,this.hasPrevIndex&&(this.previousPos=Math.max(t-this.dimensions[e-1].primarySize,this.dimensions[e-1].primaryPos)),this.hasNextIndex=e+1<this.dataSource.getLength(),this.hasNextIndex&&(this.nextPos=Math.min(t+this.dimensions[e+1].primarySize,this.dimensions[e+1].primaryPos))},renderScroll:ionic.animationFrameThrottle(function(e,t,n,i){return this.renderIfNeeded(this.isVertical?t:e),this.scrollView.__$callback(e,t,n,i)}),renderIfNeeded:function(e){(this.hasNextIndex&&e>=this.nextPos||this.hasPrevIndex&&e<this.previousPos)&&this.render()},getIndexForScrollValue:function(e,t){var n;if(t<=this.dimensions[e].primaryPos)for(;(n=this.dimensions[e-1])&&n.primaryPos>t;)e--;else for(;(n=this.dimensions[e+1])&&n.primaryPos<t;)e++;return e},render:function(e){function t(e,t){e<i.dataSource.dataStartIndex||i.renderItem(e,t.primaryPos-i.beforeSize,t.secondaryPos)}var n,i=this,o=this.currentIndex>=this.dataSource.getLength();if(o||e){for(n in this.renderedItems)this.removeItem(n);if(o)return}for(var r,a=this.scrollValue(),s=this.scrollSize(),c=s+a,l=this.getIndexForScrollValue(this.currentIndex,a),u=Math.max(l-1,0);u>0&&(r=this.dimensions[u])&&r.primaryPos===this.dimensions[l-1].primaryPos;)u--;for(n=u;(r=this.dimensions[n])&&r.primaryPos-r.primarySize<c;)t(n,r),n++;i.dimensions[n]&&(t(n,i.dimensions[n]),n++),i.dimensions[n]&&t(n,i.dimensions[n]);var d=n;for(var f in this.renderedItems)(u>f||f>d)&&this.removeItem(f);this.setCurrentIndex(l)},renderItem:function(e,t,n){var i=this.dataSource.attachItemAtIndex(e);i&&i.element?((i.primaryPos!==t||i.secondaryPos!==n)&&(i.element.css(ionic.CSS.TRANSFORM,this.transformString(t,n)),i.primaryPos=t,i.secondaryPos=n),this.renderedItems[e]=i):delete this.renderedItems[e]},removeItem:function(e){var t=this.renderedItems[e];t&&(t.primaryPos=t.secondaryPos=null,this.dataSource.detachItem(t),delete this.renderedItems[e])}},e}]),u.factory("$ionicGesture",[function(){return{on:function(e,t,n,i){return window.ionic.onGesture(e,t,n[0],i)},off:function(e,t,n){return window.ionic.offGesture(e,t,n)}}}]),u.provider("$ionicConfig",function(){var e={prefetchTemplates:!0};this.prefetchTemplates=function(t){return arguments.length&&(e.prefetchTemplates=t),e.prefetchTemplates},this.$get=function(){return e}});var g='<div class="loading-container"><div class="loading"></div></div>',m="$ionicLoading instance.hide() has been deprecated. Use $ionicLoading.hide().",$="$ionicLoading instance.show() has been deprecated. Use $ionicLoading.show().",w="$ionicLoading instance.setContent() has been deprecated. Use $ionicLoading.show({ template: 'my content' }).";u.constant("$ionicLoadingConfig",{template:'<i class="icon ion-loading-d"></i>'}).factory("$ionicLoading",["$ionicLoadingConfig","$ionicBody","$ionicTemplateLoader","$ionicBackdrop","$timeout","$q","$log","$compile","$ionicPlatform",function(e,t,n,i,o,r,a,s,c){function u(){return p||(p=n.compile({template:g,appendTo:t.get()}).then(function(e){var a=e;return e.show=function(e){var c=e.templateUrl?n.load(e.templateUrl):r.when(e.template||e.content||"");this.isShown||(this.hasBackdrop=!e.noBackdrop&&e.showBackdrop!==!1,this.hasBackdrop&&(i.retain(),i.getElement().addClass("backdrop-loading"))),e.duration&&(o.cancel(this.durationTimeout),this.durationTimeout=o(angular.bind(this,this.hide),+e.duration)),c.then(function(e){if(e){var n=a.element.children();n.html(e),s(n.contents())(a.scope)}a.isShown&&(a.element.addClass("visible"),ionic.requestAnimationFrame(function(){a.isShown&&(a.element.addClass("active"),t.addClass("loading-active"))}))}),this.isShown=!0},e.hide=function(){this.isShown&&(this.hasBackdrop&&(i.release(),i.getElement().removeClass("backdrop-loading")),a.element.removeClass("active"),t.removeClass("loading-active"),setTimeout(function(){!a.isShown&&a.element.removeClass("visible")},200)),o.cancel(this.durationTimeout),this.isShown=!1},e})),p}function f(t){t=d(e||{},t||{});var n=t.delay||t.showDelay||0;return b&&o.cancel(b),b=o(angular.noop,n),b.then(u).then(function(e){return v(),v=c.registerBackButtonAction(angular.noop,T),e.show(t)}),{hide:l.method(m,a.error,h),show:l.method($,a.error,function(){f(t)}),setContent:l.method(w,a.error,function(e){u().then(function(t){t.show({template:e})})})}}function h(){v(),o.cancel(b),u().then(function(e){e.hide()})}var p,v=angular.noop,b=r.when();return{show:f,hide:h,_getLoader:u}}]),u.factory("$ionicModal",["$rootScope","$ionicBody","$compile","$timeout","$ionicPlatform","$ionicTemplateLoader","$q","$log",function(e,t,n,i,o,r,a,s){var c=ionic.views.Modal.inherit({initialize:function(e){ionic.views.Modal.prototype.initialize.call(this,e),this.animation=e.animation||"slide-in-up"},show:function(e){var n=this;if(n.scope.$$destroyed)return void s.error("Cannot call "+n.viewType+".show() after remove(). Please create a new "+n.viewType+" instance.");var r=v(n.modalEl);return n.el.classList.remove("hide"),i(function(){t.addClass(n.viewType+"-open")},400),n.el.parentElement||(r.addClass(n.animation),t.append(n.el)),e&&n.positionView&&n.positionView(e,r),r.addClass("ng-enter active").removeClass("ng-leave ng-leave-active"),n._isShown=!0,n._deregisterBackButton=o.registerBackButtonAction(n.hardwareBackButtonClose?angular.bind(n,n.hide):angular.noop,S),n._isOpenPromise=a.defer(),ionic.views.Modal.prototype.show.call(n),i(function(){r.addClass("ng-enter-active"),ionic.trigger("resize"),n.scope.$parent&&n.scope.$parent.$broadcast(n.viewType+".shown",n),n.el.classList.add("active")},20),i(function(){n.$el.on("click",function(e){n.backdropClickToClose&&e.target===n.el&&n.hide()})},400)},hide:function(){var e=this,n=v(e.modalEl);return e.el.classList.remove("active"),n.addClass("ng-leave"),i(function(){n.addClass("ng-leave-active").removeClass("ng-enter ng-enter-active active")},20),e.$el.off("click"),e._isShown=!1,e.scope.$parent&&e.scope.$parent.$broadcast(e.viewType+".hidden",e),e._deregisterBackButton&&e._deregisterBackButton(),ionic.views.Modal.prototype.hide.call(e),i(function(){t.removeClass(e.viewType+"-open"),e.el.classList.add("hide")},e.hideDelay||320)},remove:function(){var e=this;return e.scope.$parent&&e.scope.$parent.$broadcast(e.viewType+".removed",e),e.hide().then(function(){e.scope.$destroy(),e.$el.remove()})},isShown:function(){return!!this._isShown}}),l=function(t,i){var o=i.scope&&i.scope.$new()||e.$new(!0);i.viewType=i.viewType||"modal",d(o,{$hasHeader:!1,$hasSubheader:!1,$hasFooter:!1,$hasSubfooter:!1,$hasTabs:!1,$hasTabsTop:!1});var r=n("<ion-"+i.viewType+">"+t+"</ion-"+i.viewType+">")(o);i.$el=r,i.el=r[0],i.modalEl=i.el.querySelector("."+i.viewType);var a=new c(i);return a.scope=o,i.scope||(o[i.viewType]=a),a};return{fromTemplate:function(e,t){var n=l(e,t||{});return n},fromTemplateUrl:function(e,t,n){var i;return angular.isFunction(t)&&(i=t,t=n),r.load(e).then(function(e){var n=l(e,t||{});return i&&i(n),n})}}}]),u.service("$ionicNavBarDelegate",n(["back","align","showBackButton","showBar","setTitle","changeTitle","getTitle","getPreviousTitle"]));var b=100,y=150,S=200,C=300,k=400,T=500;u.constant("$ionicPlatformDefaults",{ios:{$ionicNavBarConfig:{transition:"nav-title-slide-ios",alignTitle:"center",backButtonIcon:"ion-ios7-arrow-back"},$ionicNavViewConfig:{transition:"slide-ios"},$ionicTabsConfig:{type:"",position:""}},android:{$ionicNavBarConfig:{transition:"nav-title-slide-full",alignTitle:"center",backButtonIcon:"ion-ios7-arrow-back"},$ionicNavViewConfig:{transition:"slide-full"},$ionicTabsConfig:{type:"tabs-striped",position:""}}}),u.config(["$ionicPlatformDefaults","$injector",function(e,t){var n=ionic.Platform.platform(),i=function(e){f(e,function(e,n){d(t.get(n),e)})};switch(n){case"ios":i(e.ios);break;case"android":i(e.android)}}]),u.provider("$ionicPlatform",function(){return{$get:["$q","$rootScope",function(e){var t={onHardwareBackButton:function(e){ionic.Platform.ready(function(){document.addEventListener("backbutton",e,!1)})},offHardwareBackButton:function(e){ionic.Platform.ready(function(){document.removeEventListener("backbutton",e)})},$backButtonActions:{},registerBackButtonAction:function(e,n,i){t._hasBackButtonHandler||(t.$backButtonActions={},t.onHardwareBackButton(t.hardwareBackButtonClick),t._hasBackButtonHandler=!0);var o={id:i?i:ionic.Utils.nextUid(),priority:n?n:0,fn:e};return t.$backButtonActions[o.id]=o,function(){delete t.$backButtonActions[o.id]}},hardwareBackButtonClick:function(e){var n,i;for(i in t.$backButtonActions)(!n||t.$backButtonActions[i].priority>=n.priority)&&(n=t.$backButtonActions[i]);return n?(n.fn(e),n):void 0},is:function(e){return ionic.Platform.is(e)},on:function(e,t){return ionic.Platform.ready(function(){document.addEventListener(e,t,!1)}),function(){ionic.Platform.ready(function(){document.removeEventListener(e,t)})}},ready:function(t){var n=e.defer();return ionic.Platform.ready(function(){n.resolve(),t&&t()}),n.promise}};return t}]}}),u.factory("$ionicPopover",["$ionicModal","$ionicPosition","$document","$window",function(e,t,n,i){function o(e,o){var a=angular.element(e.target||e),s=t.offset(a),c=o.prop("offsetWidth"),l=o.prop("offsetHeight"),u=n[0].body.clientWidth,d=i.innerHeight,f={left:s.left+s.width/2-c/2},h=v(o[0].querySelector(".popover-arrow"));f.left<r?f.left=r:f.left+c+r>u&&(f.left=u-c-r),s.top+s.height+l>d?(f.top=s.top-l,o.addClass("popover-bottom")):(f.top=s.top+s.height,o.removeClass("popover-bottom")),h.css({left:s.left+s.width/2-h.prop("offsetWidth")/2-f.left+"px"}),o.css({top:f.top+"px",left:f.left+"px",marginLeft:"0",opacity:"1"})}var r=6,a={viewType:"popover",hideDelay:1,animation:"none",positionView:o};return{fromTemplate:function(t,n){return e.fromTemplate(t,ionic.Utils.extend(n||{},a))},fromTemplateUrl:function(t,n){return e.fromTemplateUrl(t,n,ionic.Utils.extend(n||{},a))}}}]);var I='<div class="popup-container"><div class="popup"><div class="popup-head"><h3 class="popup-title" ng-bind-html="title"></h3><h5 class="popup-sub-title" ng-bind-html="subTitle" ng-if="subTitle"></h5></div><div class="popup-body"></div><div class="popup-buttons"><button ng-repeat="button in buttons" ng-click="$buttonTapped(button, $event)" class="button" ng-class="button.type || \'button-default\'" ng-bind-html="button.text"></button></div></div></div>';u.factory("$ionicPopup",["$ionicTemplateLoader","$ionicBackdrop","$q","$timeout","$rootScope","$ionicBody","$compile","$ionicPlatform",function(e,t,n,i,o,r,a,s){function c(t){t=d({scope:null,title:"",buttons:[]},t||{});var o=e.compile({template:I,scope:t.scope&&t.scope.$new(),appendTo:r.get()}),s=t.templateUrl?e.load(t.templateUrl):n.when(t.template||t.content||"");return n.all([o,s]).then(function(e){var o=e[0],r=e[1],s=n.defer();o.responseDeferred=s;var c=v(o.element[0].querySelector(".popup-body"));return r?(c.html(r),a(c.contents())(o.scope)):c.remove(),d(o.scope,{title:t.title,buttons:t.buttons,subTitle:t.subTitle,$buttonTapped:function(e,t){var n=(e.onTap||angular.noop)(t);t=t.originalEvent||t,t.defaultPrevented||s.resolve(n)}}),o.show=function(){o.isShown||(o.isShown=!0,ionic.requestAnimationFrame(function(){o.isShown&&(o.element.removeClass("popup-hidden"),o.element.addClass("popup-showing active"),f(o.element))}))},o.hide=function(e){return e=e||angular.noop,o.isShown?(o.isShown=!1,o.element.removeClass("active"),o.element.addClass("popup-hidden"),void i(e,250)):e()},o.remove=function(){o.removed||(o.hide(function(){o.element.remove(),o.scope.$destroy()}),o.removed=!0)},o})}function l(){$[0]&&$[0].responseDeferred.resolve()}function u(e){function n(e){o.then(function(t){t.removed||t.responseDeferred.resolve(e)})}var o=w._createPopup(e),a=$[0];a&&a.hide();var c=i(angular.noop,a?m.stackPushDelay:0).then(function(){return o}).then(function(e){return a||(r.addClass("popup-open"),t.retain(),w._backButtonActionDone=s.registerBackButtonAction(l,k)),$.unshift(e),e.show(),e.responseDeferred.notify({close:c.close}),e.responseDeferred.promise.then(function(n){var o=$.indexOf(e);-1!==o&&$.splice(o,1),e.remove();var a=$[0];return a?a.show():(i(function(){r.removeClass("popup-open")},400),t.release(),(w._backButtonActionDone||angular.noop)()),n})});return c.close=n,c}function f(e){var t=e[0].querySelector("[autofocus]");t&&t.focus()}function h(e){return u(d({buttons:[{text:e.okText||"OK",type:e.okType||"button-positive",onTap:function(){return!0}}]},e||{}))}function p(e){return u(d({buttons:[{text:e.cancelText||"Cancel",type:e.cancelType||"button-default",onTap:function(){return!1}},{text:e.okText||"OK",type:e.okType||"button-positive",onTap:function(){return!0}}]},e||{}))}function g(e){var t=o.$new(!0);t.data={};var n="";return e.template&&/<[a-z][\s\S]*>/i.test(e.template)===!1&&(n="<span>"+e.template+"</span>",delete e.template),u(d({template:n+'<input ng-model="data.response" type="'+(e.inputType||"text")+'" placeholder="'+(e.inputPlaceholder||"")+'">',scope:t,buttons:[{text:e.cancelText||"Cancel",type:e.cancelType||"button-default",onTap:function(){}},{text:e.okText||"OK",type:e.okType||"button-positive",onTap:function(){return t.data.response||""}}]},e||{}))}var m={stackPushDelay:75},$=[],w={show:u,alert:h,confirm:p,prompt:g,_createPopup:c,_popupStack:$};return w}]),u.factory("$ionicPosition",["$document","$window",function(e,t){function n(e,n){return e.currentStyle?e.currentStyle[n]:t.getComputedStyle?t.getComputedStyle(e)[n]:e.style[n]}function i(e){return"static"===(n(e,"position")||"static")}var o=function(t){for(var n=e[0],o=t.offsetParent||n;o&&o!==n&&i(o);)o=o.offsetParent;return o||n};return{position:function(t){var n=this.offset(t),i={top:0,left:0},r=o(t[0]);r!=e[0]&&(i=this.offset(angular.element(r)),i.top+=r.clientTop-r.scrollTop,i.left+=r.clientLeft-r.scrollLeft);var a=t[0].getBoundingClientRect();return{width:a.width||t.prop("offsetWidth"),height:a.height||t.prop("offsetHeight"),top:n.top-i.top,left:n.left-i.left}},offset:function(n){var i=n[0].getBoundingClientRect();return{width:i.width||n.prop("offsetWidth"),height:i.height||n.prop("offsetHeight"),top:i.top+(t.pageYOffset||e[0].documentElement.scrollTop),left:i.left+(t.pageXOffset||e[0].documentElement.scrollLeft)}}}}]),u.service("$ionicScrollDelegate",n(["resize","scrollTop","scrollBottom","scrollTo","scrollBy","zoomTo","zoomBy","getScrollPosition","anchorScroll","getScrollView","rememberScrollPosition","forgetScrollPosition","scrollToRememberedPosition"])),u.service("$ionicSideMenuDelegate",n(["toggleLeft","toggleRight","getOpenRatio","isOpen","isOpenLeft","isOpenRight","canDragContent","edgeDragThreshold"])),u.service("$ionicSlideBoxDelegate",n(["update","slide","enableSlide","previous","next","stop","start","currentIndex","slidesCount"])),u.service("$ionicTabsDelegate",n(["select","selectedIndex"])),function(){var e=[];u.factory("$ionicTemplateCache",["$http","$templateCache","$timeout","$ionicConfig",function(t,n,i,o){function r(e){return a.length>500?!1:"undefined"==typeof e?c():(p(e)&&(e=[e]),f(e,function(e){a.push(e)}),void(s&&c()))}var a=e,s=!1,c=function(){if(o.prefetchTemplates!==!1&&(r._runCount++,s=!0,0!==a.length)){for(var e=0;5>e&&(template=a.pop());)p(template)&&t.get(template,{cache:n}),e++;a.length&&i(function(){c()},1e3)}};return r._runCount=0,r}]).config(["$stateProvider","$ionicConfigProvider",function(t,n){var i=t.state;t.state=function(o,r){if("object"==typeof r&&n.prefetchTemplates()!==!1){var a=r.prefetchTemplate!==!1;if(a&&p(r.templateUrl)&&e.push(r.templateUrl),angular.isObject(r.views))for(var s in r.views)a=r.views[s].prefetchTemplate!==!1,a&&p(r.views[s].templateUrl)&&e.push(r.views[s].templateUrl)}return i.call(t,o,r)}}]).run(["$ionicTemplateCache",function(e){e()}])}(),u.factory("$ionicTemplateLoader",["$compile","$controller","$http","$q","$rootScope","$templateCache",function(e,t,n,i,o,r){function a(e){return n.get(e,{cache:r}).then(function(e){return e.data&&e.data.trim()})}function s(n){n=d({template:"",templateUrl:"",scope:null,controller:null,locals:{},appendTo:null},n||{});var r=n.templateUrl?this.load(n.templateUrl):i.when(n.template);return r.then(function(i){var r,a=n.scope||o.$new(),s=v("<div>").html(i).contents();return n.controller&&(r=t(n.controller,d(n.locals,{$scope:a})),s.children().data("$ngControllerController",r)),n.appendTo&&v(n.appendTo).append(s),e(s)(a),{element:s,scope:a}})}return{load:a,compile:s}}]),u.run(["$rootScope","$state","$location","$document","$animate","$ionicPlatform","$ionicViewService",function(e,t,n,i,o,r,a){function s(t){return e.$viewHistory.backView?e.$viewHistory.backView.go():ionic.Platform.exitApp(),t.preventDefault(),!1}e.$viewHistory={histories:{root:{historyId:"root",parentHistoryId:null,stack:[],cursor:-1}},views:{},backView:null,forwardView:null,currentView:null,disabledRegistrableTagNames:[]},a.disableRegisterByTagName&&(a.disableRegisterByTagName("ion-tabs"),a.disableRegisterByTagName("ion-side-menus")),e.$on("$stateChangeStart",function(){ionic.keyboard.hide()}),e.$on("viewState.changeHistory",function(i,o){if(o){var r=o.historyId?e.$viewHistory.histories[o.historyId]:null;if(r&&r.cursor>-1&&r.cursor<r.stack.length){var a=r.stack[r.cursor];return a.go(o)}!o.url&&o.uiSref&&(o.url=t.href(o.uiSref)),o.url&&(0===o.url.indexOf("#")&&(o.url=o.url.replace("#","")),o.url!==n.url()&&n.url(o.url))}}),e.$on("viewState.viewEnter",function(e,t){t&&t.title&&(i[0].title=t.title)}),r.registerBackButtonAction(s,b)}]).factory("$ionicViewService",["$rootScope","$state","$location","$window","$injector","$animate","$ionicNavViewConfig","$ionicClickBlock",function(e,t,n,i,o,r,a,s){function c(){return ionic.Utils.nextUid()}var l=function(){};return l.prototype.initialize=function(e){if(e){for(var t in e)this[t]=e[t];return this}return null},l.prototype.go=function(){return this.stateName?t.go(this.stateName,this.stateParams):this.url&&this.url!==n.url()?e.$viewHistory.backView===this?i.history.go(-1):e.$viewHistory.forwardView===this?i.history.go(1):void n.url(this.url):null},l.prototype.destroy=function(){this.scope&&(this.scope.$destroy&&this.scope.$destroy(),this.scope=null)},{register:function(t,i){var o=e.$viewHistory,r=this.getCurrentStateId(),a=this._getHistory(t),s=o.currentView,l=o.backView,u=o.forwardView,d=this.nextViewOptions(),f={viewId:null,navAction:null,navDirection:null,historyId:a.historyId};if(i&&!this.isTagNameRegistrable(i))return f.navAction="disabledByTagName",f;if(s&&s.stateId===r&&s.historyId===a.historyId)return f.navAction="noChange",f;if(o.forcedNav)ionic.Utils.extend(f,o.forcedNav),e.$viewHistory.forcedNav=null;else if(l&&l.stateId===r)f.viewId=l.viewId,f.navAction="moveBack",f.viewId=l.viewId,l.historyId===s.historyId&&(f.navDirection="back");else if(u&&u.stateId===r){f.viewId=u.viewId,f.navAction="moveForward",u.historyId===s.historyId&&(f.navDirection="forward");var h=this._getParentHistoryObj(t);u.historyId&&h.scope&&(h.scope.$historyId=u.historyId,f.historyId=u.historyId)}else if(s&&s.historyId!==a.historyId&&a.cursor>-1&&a.stack.length>0&&a.cursor<a.stack.length&&a.stack[a.cursor].stateId===r){var p=a.stack[a.cursor];f.viewId=p.viewId,f.navAction="moveBack";var v=this._getViewById(p.backViewId);
v&&p.historyId!==v.historyId&&(a.stack[a.cursor].backViewId=s.viewId)}else{if(f.viewId=c(r),s){if(s.forwardViewId=f.viewId,a.historyId===s.historyId&&(f.navDirection="forward"),f.navAction="newView",u&&s.stateId!==u.stateId&&s.historyId===u.historyId){var g=this._getHistoryById(u.historyId);if(g)for(var m=g.stack.length-1;m>=u.index;m--)g.stack[m].destroy(),g.stack.splice(m)}}else f.navAction="initialView";o.views[f.viewId]=this.createView({viewId:f.viewId,index:a.stack.length,historyId:a.historyId,backViewId:s&&s.viewId?s.viewId:null,forwardViewId:null,stateId:r,stateName:this.getCurrentStateName(),stateParams:this.getCurrentStateParams(),url:n.url()}),"moveBack"==f.navAction&&e.$emit("$viewHistory.viewBack",s.viewId,f.viewId),a.stack.push(o.views[f.viewId])}return d&&(d.disableAnimate&&(f.navDirection=null),d.disableBack&&(o.views[f.viewId].backViewId=null),this.nextViewOptions(null)),this.setNavViews(f.viewId),a.cursor=o.currentView.index,f},setNavViews:function(t){var n=e.$viewHistory;n.currentView=this._getViewById(t),n.backView=this._getBackView(n.currentView),n.forwardView=this._getForwardView(n.currentView),e.$broadcast("$viewHistory.historyChange",{showBack:n.backView&&n.backView.historyId===n.currentView.historyId})},registerHistory:function(e){e.$historyId=ionic.Utils.nextUid()},createView:function(e){var t=new l;return t.initialize(e)},getCurrentView:function(){return e.$viewHistory.currentView},getBackView:function(){return e.$viewHistory.backView},getForwardView:function(){return e.$viewHistory.forwardView},getNavDirection:function(){return e.$viewHistory.navDirection},getCurrentStateName:function(){return t&&t.current?t.current.name:null},isCurrentStateNavView:function(e){return t&&t.current&&t.current.views&&t.current.views[e]?!0:!1},getCurrentStateParams:function(){var e;if(t&&t.params)for(var n in t.params)t.params.hasOwnProperty(n)&&(e=e||{},e[n]=t.params[n]);return e},getCurrentStateId:function(){var e;if(t&&t.current&&t.current.name){if(e=t.current.name,t.params)for(var n in t.params)t.params.hasOwnProperty(n)&&t.params[n]&&(e+="_"+n+"="+t.params[n]);return e}return ionic.Utils.nextUid()},goToHistoryRoot:function(t){if(t){var n=e.$viewHistory.histories[t];if(n&&n.stack.length){if(e.$viewHistory.currentView&&e.$viewHistory.currentView.viewId===n.stack[0].viewId)return;e.$viewHistory.forcedNav={viewId:n.stack[0].viewId,navAction:"moveBack",navDirection:"back"},n.stack[0].go()}}},_getViewById:function(t){return t?e.$viewHistory.views[t]:null},_getBackView:function(e){return e?this._getViewById(e.backViewId):null},_getForwardView:function(e){return e?this._getViewById(e.forwardViewId):null},_getHistoryById:function(t){return t?e.$viewHistory.histories[t]:null},_getHistory:function(t){var n=this._getParentHistoryObj(t);return e.$viewHistory.histories[n.historyId]||(e.$viewHistory.histories[n.historyId]={historyId:n.historyId,parentHistoryId:this._getParentHistoryObj(n.scope.$parent).historyId,stack:[],cursor:-1}),e.$viewHistory.histories[n.historyId]},_getParentHistoryObj:function(t){for(var n=t;n;){if(n.hasOwnProperty("$historyId"))return{historyId:n.$historyId,scope:n};n=n.$parent}return{historyId:"root",scope:e}},nextViewOptions:function(e){return arguments.length?void(this._nextOpts=e):this._nextOpts},getRenderer:function(e,t,n){function i(e){for(var t="";!t&&e;)t=e.getAttribute("animation"),e=e.parentElement;return t?t:a.transition}function o(){d&&e[0].classList.add(d),"back"===c.navDirection?e[0].classList.add("reverse"):e[0].classList.remove("reverse")}var c,l,u=this,d=i(e[0]);return function(t){return{enter:function(n){return l&&t?(o(),n.addClass("ng-enter"),s.show(),void r.enter(n,e,null,function(){s.hide(),d&&e[0].classList.remove(d)})):(l||s.hide(),void e.append(n))},leave:function(){var n=e.contents();return l&&t?(o(),void r.leave(n,function(){n.remove()})):void n.remove()},register:function(e){return c=u.register(n,e),l=null!==d&&null!==c.navDirection,c}}}},disableRegisterByTagName:function(t){e.$viewHistory.disabledRegistrableTagNames.push(t.toUpperCase())},isTagNameRegistrable:function(t){var n,i,o=e.$viewHistory.disabledRegistrableTagNames;for(n=0;n<t.length;n++)if(1===t[n].nodeType)for(i=0;i<o.length;i++)if(t[n].tagName===o[i])return!1;return!0},clearHistory:function(){var t=e.$viewHistory.histories,n=e.$viewHistory.currentView;if(t)for(var i in t)t[i].stack&&(t[i].stack=[],t[i].cursor=-1),n&&n.historyId===i?(n.backViewId=null,n.forwardViewId=null,t[i].stack.push(n)):t[i].destroy&&t[i].destroy();for(var o in e.$viewHistory.views)o!==n.viewId&&delete e.$viewHistory.views[o];n&&this.setNavViews(n.viewId)}}}]),u.config(["$provide",function(e){function t(e,t){return e.__hash=e.hash,e.hash=function(n){return angular.isDefined(n)&&t(function(){var e=document.querySelector(".scroll-content");e&&(e.scrollTop=0)},0,!1),e.__hash(n)},e}e.decorator("$location",["$delegate","$timeout",t])}]),u.service("$ionicListDelegate",n(["showReorder","showDelete","canSwipeItems","closeOptionButtons"])).controller("$ionicList",["$scope","$attrs","$parse","$ionicListDelegate",function(e,t,n,i){var o=!0,r=!1,a=!1,s=i._registerInstance(this,t.delegateHandle);e.$on("$destroy",s),this.showReorder=function(e){return arguments.length&&(r=!!e),r},this.showDelete=function(e){return arguments.length&&(a=!!e),a},this.canSwipeItems=function(e){return arguments.length&&(o=!!e),o},this.closeOptionButtons=function(){this.listView&&this.listView.clearDragEffects()}}]),u.controller("$ionicNavBar",["$scope","$element","$attrs","$ionicViewService","$animate","$compile","$ionicNavBarDelegate",function(e,t,n,i,o,r,a){t.parent().data("$ionNavBarController",this);var s=a._registerInstance(this,n.delegateHandle);e.$on("$destroy",s),e.$on("$viewHistory.historyChange",function(e,t){backIsShown=!!t.showBack});var c=this;this.leftButtonsElement=v(t[0].querySelector(".buttons.left-buttons")),this.rightButtonsElement=v(t[0].querySelector(".buttons.right-buttons")),this.back=function(){var e=i.getBackView();return e&&e.go(),!1},this.align=function(e){this._headerBarView.align(e)},this.showBackButton=function(t){return arguments.length&&(e.backButtonShown=!!t),!(!e.hasBackButton||!e.backButtonShown)},this.showBar=function(t){return arguments.length&&(e.isInvisible=!t,e.$parent.$hasHeader=!!t),!e.isInvisible},this.setTitle=function(t){e.title!==t&&(e.oldTitle=e.title,e.title=t||"")},this.changeTitle=function(n,i){return e.title===n?("undefined"!=typeof backIsShown&&!backIsShown&&e.backButtonShown&&v(t[0].querySelector(".back-button")).addClass("ng-hide"),!1):(this.setTitle(n),e.isReverse="back"==i,e.shouldAnimate=!!i,e.shouldAnimate?this._animateTitles():this._headerBarView.align(),!0)},this.getTitle=function(){return e.title||""},this.getPreviousTitle=function(){return e.oldTitle||""},this._animateTitles=function(){var n,i,a;a=t[0].querySelectorAll(".title"),a.length&&(n=r('<h1 class="title" ng-bind-html="oldTitle"></h1>')(e),v(a[a.length-1]).replaceWith(n)),i=r('<h1 class="title invisible" ng-bind-html="title"></h1>')(e),ionic.requestAnimationFrame(function(){n&&o.leave(v(n));var r=n&&v(n)||null;o.enter(i,t,r,function(){c._headerBarView.align()}),f(a,function(e){e&&e.parentNode&&v(e).remove()}),e.$digest(),ionic.requestAnimationFrame(function(){i[0].classList.remove("invisible")})})}}]),u.factory("$$scrollValueCache",function(){return{}}).controller("$ionicScroll",["$scope","scrollViewOptions","$timeout","$window","$$scrollValueCache","$location","$rootScope","$document","$ionicScrollDelegate",function(e,t,n,i,o,r,a,s,c){var l=this;this.__timeout=n,this._scrollViewOptions=t;var u=this.element=t.el,d=this.$element=v(u),f=this.scrollView=new ionic.views.Scroll(t);(d.parent().length?d.parent():d).data("$$ionicScrollController",this);var h=c._registerInstance(this,t.delegateHandle);angular.isDefined(t.bouncing)||ionic.Platform.ready(function(){f.options.bouncing=!0,ionic.Platform.isAndroid()&&(f.options.bouncing=!1,f.options.deceleration=.95)});var p=angular.bind(f,f.resize);ionic.on("resize",p,i);var g=angular.noop,m=angular.noop,$=function(t){var n=(t.originalEvent||t).detail||{};e.$onScroll&&e.$onScroll({event:t,scrollTop:n.scrollTop||0,scrollLeft:n.scrollLeft||0})};d.on("scroll",$),e.$on("$destroy",function(){h(),f.__cleanup(),ionic.off("resize",p,i),i.removeEventListener("resize",p),m(),g(),l._rememberScrollId&&(o[l._rememberScrollId]=f.getValues()),t=null,l._scrollViewOptions=null,l.element=null,d.off("scroll",$),d=null,l.$element=null,l.scrollView=null,f=null}),m=e.$on("$viewContentLoaded",function(t,i){if(!t.defaultPrevented){t.preventDefault();var o=i&&i.viewId||e.$historyId;o&&n(function(){l.rememberScrollPosition(o),l.scrollToRememberedPosition(),g=a.$on("$viewHistory.viewBack",function(e,t){o===t&&l.forgetScrollPosition()})},0,!1)}}),n(function(){f&&f.run&&f.run()}),this._rememberScrollId=null,this.getScrollView=function(){return this.scrollView},this.getScrollPosition=function(){return this.scrollView.getValues()},this.resize=function(){return n(p).then(function(){d&&d.triggerHandler("scroll.resize")})},this.scrollTop=function(e){this.resize().then(function(){f.scrollTo(0,0,!!e)})},this.scrollBottom=function(e){this.resize().then(function(){var t=f.getScrollMax();f.scrollTo(t.left,t.top,!!e)})},this.scrollTo=function(e,t,n){this.resize().then(function(){f.scrollTo(e,t,!!n)})},this.zoomTo=function(e,t,n,i){this.resize().then(function(){f.zoomTo(e,!!t,n,i)})},this.zoomBy=function(e,t,n,i){this.resize().then(function(){f.zoomBy(e,!!t,n,i)})},this.scrollBy=function(e,t,n){this.resize().then(function(){f.scrollBy(e,t,!!n)})},this.anchorScroll=function(e){this.resize().then(function(){var t=r.hash(),n=t&&s[0].getElementById(t);if(!t||!n)return void f.scrollTo(0,0,!!e);var i=n,o=0,a=0,c=0;do null!==i&&(o+=i.offsetLeft),null!==i&&(a+=i.offsetTop),i=i.offsetParent,c++;while(i.attributes!=l.element.attributes&&i.offsetParent);f.scrollTo(o,a,!!e)})},this.rememberScrollPosition=function(e){if(!e)throw new Error("Must supply an id to remember the scroll by!");this._rememberScrollId=e},this.forgetScrollPosition=function(){delete o[this._rememberScrollId],this._rememberScrollId=null},this.scrollToRememberedPosition=function(e){var t=o[this._rememberScrollId];t&&this.resize().then(function(){f&&f.scrollTo&&f.scrollTo(+t.left,+t.top,e)})},this._setRefresher=function(e,t){var i=this.refresher=t,o=l.refresher.clientHeight||60;f.activatePullToRefresh(o,function(){i.classList.add("active"),e.$onPulling()},function(){n(function(){i.classList.remove("active"),i.classList.remove("refreshing"),i.classList.remove("refreshing-tail"),i.classList.add("invisible")},300)},function(){i.classList.add("refreshing"),e.$onRefresh()},function(){i.classList.remove("invisible")},function(){i.classList.add("invisible")},function(){i.classList.add("refreshing-tail")})}}]),u.controller("$ionicSideMenus",["$scope","$attrs","$ionicSideMenuDelegate","$ionicPlatform","$ionicBody",function(e,t,n,i,o){var r,a,s,c,l,u,d,f=this;f.$scope=e,f.initialize=function(e){f.left=e.left,f.right=e.right,f.setContent(e.content),f.dragThresholdX=e.dragThresholdX||10},f.setContent=function(e){e&&(f.content=e,f.content.onDrag=function(e){f._handleDrag(e)},f.content.endDrag=function(e){f._endDrag(e)})},f.isOpenLeft=function(){return f.getOpenAmount()>0},f.isOpenRight=function(){return f.getOpenAmount()<0},f.toggleLeft=function(e){if(!d&&f.left.isEnabled){var t=f.getOpenAmount();0===arguments.length&&(e=0>=t),f.content.enableAnimation(),f.openPercentage(e?100:0)}},f.toggleRight=function(e){if(!d&&f.right.isEnabled){var t=f.getOpenAmount();0===arguments.length&&(e=t>=0),f.content.enableAnimation(),f.openPercentage(e?-100:0)}},f.close=function(){f.openPercentage(0)},f.getOpenAmount=function(){return f.content&&f.content.getTranslateX()||0},f.getOpenRatio=function(){var e=f.getOpenAmount();return e>=0?e/f.left.width:e/f.right.width},f.isOpen=function(){return 0!==f.getOpenAmount()},f.getOpenPercentage=function(){return 100*f.getOpenRatio()},f.openPercentage=function(e){var t=e/100;if(f.left&&e>=0)f.openAmount(f.left.width*t);else if(f.right&&0>e){{f.right.width}f.openAmount(f.right.width*t)}o.enableClass(0!==e,"menu-open")},f.openAmount=function(e){var t=f.left&&f.left.width||0,n=f.right&&f.right.width||0;return(f.left&&f.left.isEnabled||!(e>0))&&(f.right&&f.right.isEnabled||!(0>e))?a&&e>t?void f.content.setTranslateX(t):r&&-n>e?void f.content.setTranslateX(-n):(f.content.setTranslateX(e),void(e>=0?(a=!0,r=!1,e>0&&(f.right&&f.right.pushDown&&f.right.pushDown(),f.left&&f.left.bringUp&&f.left.bringUp())):(r=!0,a=!1,f.right&&f.right.bringUp&&f.right.bringUp(),f.left&&f.left.pushDown&&f.left.pushDown()))):void f.content.setTranslateX(0)},f.snapToRest=function(e){f.content.enableAnimation(),s=!1;var t=f.getOpenRatio();if(0===t)return void f.openPercentage(0);var n=.3,i=e.gesture.velocityX,o=e.gesture.direction;f.openPercentage(t>0&&.5>t&&"right"==o&&n>i?0:t>.5&&"left"==o&&n>i?100:0>t&&t>-.5&&"left"==o&&n>i?0:.5>t&&"right"==o&&n>i?-100:"right"==o&&t>=0&&(t>=.5||i>n)?100:"left"==o&&0>=t&&(-.5>=t||i>n)?-100:0)},f.isAsideExposed=function(){return!!d},f.exposeAside=function(e){f.left&&f.left.isEnabled&&(f.close(),d=e,f.content.setMarginLeft(d?f.left.width:0),f.$scope.$emit("$ionicExposeAside",d))},f.activeAsideResizing=function(e){o.enableClass(e,"aside-resizing")},f._endDrag=function(e){d||(s&&f.snapToRest(e),c=null,l=null,u=null)},f._handleDrag=function(e){d||(c?l=e.gesture.touches[0].pageX:(c=e.gesture.touches[0].pageX,l=c),!s&&Math.abs(l-c)>f.dragThresholdX&&(c=l,s=!0,f.content.disableAnimation(),u=f.getOpenAmount()),s&&f.openAmount(u+(l-c)))},f.canDragContent=function(t){return arguments.length&&(e.dragContent=!!t),e.dragContent},f.edgeThreshold=25,f.edgeThresholdEnabled=!1,f.edgeDragThreshold=function(e){return arguments.length&&(angular.isNumber(e)&&e>0?(f.edgeThreshold=e,f.edgeThresholdEnabled=!0):f.edgeThresholdEnabled=!!e),f.edgeThresholdEnabled},f.isDraggableTarget=function(t){var n=f.edgeThresholdEnabled&&!f.isOpen(),i=t.gesture.startEvent&&t.gesture.startEvent.center&&t.gesture.startEvent.center.pageX,o=!n||i<=f.edgeThreshold||i>=f.content.element.offsetWidth-f.edgeThreshold;return(e.dragContent||f.isOpen())&&o&&!t.gesture.srcEvent.defaultPrevented&&!t.target.tagName.match(/input|textarea|select|object|embed/i)&&!t.target.isContentEditable&&!(t.target.dataset?t.target.dataset.preventScroll:"true"==t.target.getAttribute("data-prevent-scroll"))},e.sideMenuContentTranslateX=0;var h=angular.noop,p=angular.bind(f,f.close);e.$watch(function(){return 0!==f.getOpenAmount()},function(e){h(),e&&(h=i.registerBackButtonAction(p,y))});var v=n._registerInstance(f,t.delegateHandle);e.$on("$destroy",function(){v(),h()}),f.initialize({left:{width:275},right:{width:275}})}]),u.controller("$ionicTab",["$scope","$ionicViewService","$attrs","$location","$state",function(e,t,n,i,o){this.$scope=e,this.hrefMatchesState=function(){return n.href&&0===i.path().indexOf(n.href.replace(/^#/,"").replace(/\/$/,""))},this.srefMatchesState=function(){return n.uiSref&&o.includes(n.uiSref.split("(")[0])},this.navNameMatchesState=function(){return this.navViewName&&t.isCurrentStateNavView(this.navViewName)},this.tabMatchesState=function(){return this.hrefMatchesState()||this.srefMatchesState()||this.navNameMatchesState()}}]),u.controller("$ionicTabs",["$scope","$ionicViewService","$element",function(e,t){var n=null,i=this;i.tabs=[],i.selectedIndex=function(){return i.tabs.indexOf(n)},i.selectedTab=function(){return n},i.add=function(e){t.registerHistory(e),i.tabs.push(e),1===i.tabs.length&&i.select(e)},i.remove=function(e){var t=i.tabs.indexOf(e);if(-1!==t){if(e.$tabSelected)if(i.deselect(e),1===i.tabs.length);else{var n=t===i.tabs.length-1?t-1:t+1;i.select(i.tabs[n])}i.tabs.splice(t,1)}},i.deselect=function(e){e.$tabSelected&&(n=null,e.$tabSelected=!1,(e.onDeselect||angular.noop)())},i.select=function(o,r){var a;if(angular.isNumber(o)?(a=o,o=i.tabs[a]):a=i.tabs.indexOf(o),1===arguments.length&&(r=!(!o.navViewName&&!o.uiSref)),n&&n.$historyId==o.$historyId)r&&t.goToHistoryRoot(o.$historyId);else if(f(i.tabs,function(e){i.deselect(e)}),n=o,o.$tabSelected=!0,(o.onSelect||angular.noop)(),r){var s={type:"tab",tabIndex:a,historyId:o.$historyId,navViewName:o.navViewName,hasNavView:!!o.navViewName,title:o.title,url:o.href,uiSref:o.uiSref};e.$emit("viewState.changeHistory",s)}}}]),u.directive("ionActionSheet",["$document",function(e){return{restrict:"E",scope:!0,replace:!0,link:function(t,n){var i=function(e){27==e.which&&(t.cancel(),t.$apply())},o=function(e){e.target==n[0]&&(t.cancel(),t.$apply())};t.$on("$destroy",function(){n.remove(),e.unbind("keyup",i)}),e.bind("keyup",i),n.bind("click",o)},template:'<div class="action-sheet-backdrop"><div class="action-sheet-wrapper"><div class="action-sheet"><div class="action-sheet-group"><div class="action-sheet-title" ng-if="titleText" ng-bind-html="titleText"></div><button class="button" ng-click="buttonClicked($index)" ng-repeat="button in buttons" ng-bind-html="button.text"></button></div><div class="action-sheet-group" ng-if="destructiveText"><button class="button destructive" ng-click="destructiveButtonClicked()" ng-bind-html="destructiveText"></button></div><div class="action-sheet-group" ng-if="cancelText"><button class="button" ng-click="cancel()" ng-bind-html="cancelText"></button></div></div></div></div>'}}]),u.directive("ionCheckbox",function(){return{restrict:"E",replace:!0,require:"?ngModel",transclude:!0,template:'<label class="item item-checkbox"><div class="checkbox checkbox-input-hidden disable-pointer-events"><input type="checkbox"><i class="checkbox-icon"></i></div><div class="item-content disable-pointer-events" ng-transclude></div></label>',compile:function(e,t){var n=e.find("input");f({name:t.name,"ng-value":t.ngValue,"ng-model":t.ngModel,"ng-checked":t.ngChecked,"ng-disabled":t.ngDisabled,"ng-true-value":t.ngTrueValue,"ng-false-value":t.ngFalseValue,"ng-change":t.ngChange},function(e,t){h(e)&&n.attr(t,e)})}}});var x="Cannot create a collection-repeat within a scrollView that is scrollable on both x and y axis.  Choose either x direction or y direction.",B="collection-repeat expected attribute collection-item-height to be a an expression that returns a number (in pixels) or percentage.",V="collection-repeat expected attribute collection-item-width to be a an expression that returns a number (in pixels) or percentage.",E="collection-repeat expected expression in form of '_item_ in _collection_[ track by _id_]' but got '%'";u.directive("collectionRepeat",["$collectionRepeatManager","$collectionDataSource","$parse",function(e,t,n){return{priority:1e3,transclude:"element",terminal:!0,$$tlb:!0,require:"^$ionicScroll",controller:[function(){}],link:function(i,o,r,a,s){function c(e){var t=[],n=[],i=!0;f(I.children,function(e){if(ionic.DomUtil.elementIsDescendant(o[0],e,I))i=!1;else{if(e.hasAttribute("collection-repeat-ignore"))return;var r=e.offsetWidth,a=e.offsetHeight;if(r&&a){var s=v(e);(i?t:n).push({width:e.offsetWidth,height:e.offsetHeight,element:s,scope:s.isolateScope()||s.scope(),isOutside:!0})}}}),d.resize(),k.setData(e,t,n),T.resize()}function l(){c(i.$eval(S))}var u=v('<div style="position:relative;">');o.parent()[0].insertBefore(u[0],o[0]),u.append(o);var d=a.scrollView;if(d.options.scrollingX&&d.options.scrollingY)throw new Error(x);var h=!!d.options.scrollingY;if(h&&!r.collectionItemHeight)throw new Error(B);if(!h&&!r.collectionItemWidth)throw new Error(V);var g=n(r.collectionItemHeight||'"100%"'),m=n(r.collectionItemWidth||'"100%"'),$=function(e,t){var n=g(e,t);return p(n)&&n.indexOf("%")>-1?Math.floor(parseInt(n,10)/100*d.__clientHeight):n},w=function(e,t){var n=m(e,t);return p(n)&&n.indexOf("%")>-1?Math.floor(parseInt(n,10)/100*d.__clientWidth):n},b=r.collectionRepeat.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?\s*$/);if(!b)throw new Error(E.replace("%",r.collectionRepeat));var y=b[1],S=b[2],C=b[3],k=new t({scope:i,transcludeFn:s,transcludeParent:o.parent(),keyExpr:y,listExpr:S,trackByExpr:C,heightGetter:$,widthGetter:w}),T=new e({dataSource:k,element:a.$element,scrollView:a.scrollView});i.$watchCollection(S,function(e){if(e&&!angular.isArray(e))throw new Error("collection-repeat expects an array to repeat over, but instead got '"+typeof e+"'.");c(e)});var I=a.scrollView.__content;a.$element.on("scroll.resize",l),ionic.on("resize",l,window),i.$on("$destroy",function(){T.destroy(),k.destroy(),ionic.off("resize",l,window)})}}}]).directive({ngSrc:i("ngSrc","src"),ngSrcset:i("ngSrcset","srcset"),ngHref:i("ngHref","href")}),u.directive("ionContent",["$timeout","$controller","$ionicBind",function(e,t,n){return{restrict:"E",require:"^?ionNavView",scope:!0,priority:800,compile:function(e,i){function o(e,o,a){var s=e.$parent;if(e.$watch(function(){return(s.$hasHeader?" has-header":"")+(s.$hasSubheader?" has-subheader":"")+(s.$hasFooter?" has-footer":"")+(s.$hasSubfooter?" has-subfooter":"")+(s.$hasTabs?" has-tabs":"")+(s.$hasTabsTop?" has-tabs-top":"")},function(e,t){o.removeClass(t),o.addClass(e)}),e.$hasHeader=e.$hasSubheader=e.$hasFooter=e.$hasSubfooter=e.$hasTabs=e.$hasTabsTop=!1,n(e,a,{$onScroll:"&onScroll",$onScrollComplete:"&onScrollComplete",hasBouncing:"@",padding:"@",direction:"@",scrollbarX:"@",scrollbarY:"@",startX:"@",startY:"@",scrollEventInterval:"@"}),e.direction=e.direction||"y",angular.isDefined(a.padding)&&e.$watch(a.padding,function(e){(r||o).toggleClass("padding",!!e)}),"false"===a.scroll);else if("true"===i.overflowScroll)o.addClass("overflow-scroll");else{var c={el:o[0],delegateHandle:i.delegateHandle,locking:"true"===(i.locking||"true"),bouncing:e.$eval(e.hasBouncing),startX:e.$eval(e.startX)||0,startY:e.$eval(e.startY)||0,scrollbarX:e.$eval(e.scrollbarX)!==!1,scrollbarY:e.$eval(e.scrollbarY)!==!1,scrollingX:e.direction.indexOf("x")>=0,scrollingY:e.direction.indexOf("y")>=0,scrollEventInterval:parseInt(e.scrollEventInterval,10)||10,scrollingComplete:function(){e.$onScrollComplete({scrollTop:this.__scrollTop,scrollLeft:this.__scrollLeft})}};t("$ionicScroll",{$scope:e,scrollViewOptions:c}),e.$on("$destroy",function(){c.scrollingComplete=angular.noop,delete c.el,r=null,o=null,i.$$element=null})}}var r;return e.addClass("scroll-content ionic-scroll"),"false"!=i.scroll?(r=v('<div class="scroll"></div>'),r.append(e.contents()),e.append(r)):e.addClass("scroll-content-false"),{pre:o}}}}]),u.directive("exposeAsideWhen",["$window",function(e){return{restrict:"A",require:"^ionSideMenus",link:function(t,n,i,o){function r(){var t="large"==i.exposeAsideWhen?"(min-width:768px)":i.exposeAsideWhen;o.exposeAside(e.matchMedia(t).matches),o.activeAsideResizing(!1)}function a(){o.activeAsideResizing(!0),s()}var s=ionic.debounce(function(){t.$apply(function(){r()})},300,!1);r(),ionic.on("resize",a,e),t.$on("$destroy",function(){ionic.off("resize",a,e)})}}}]);var _="onHold onTap onTouch onRelease onDrag onDragUp onDragRight onDragDown onDragLeft onSwipe onSwipeUp onSwipeRight onSwipeDown onSwipeLeft".split(" ");_.forEach(function(e){u.directive(e,o(e))}),u.directive("ionNavBar",r()).directive("ionHeaderBar",r()).directive("ionHeaderBar",a(!0)).directive("ionFooterBar",a(!1)),u.directive("ionInfiniteScroll",["$timeout",function(e){function t(e,t,n){return n?t*(1-parseFloat(e,10)/100):t-parseFloat(e,10)}return{restrict:"E",require:["^$ionicScroll","ionInfiniteScroll"],template:'<i class="icon {{icon()}} icon-refreshing"></i>',scope:!0,controller:["$scope","$attrs",function(e,n){this.isLoading=!1,this.scrollView=null,this.getMaxScroll=function(){var e=(n.distance||"2.5%").trim(),i=-1!==e.indexOf("%"),o=this.scrollView.getScrollMax();return{left:this.scrollView.options.scrollingX?t(e,o.left,i):-1,top:this.scrollView.options.scrollingY?t(e,o.top,i):-1}}}],link:function(t,n,i,o){function r(){if(!s.isLoading){var e=c.getValues(),t=s.getMaxScroll();(-1!==t.left&&e.left>=t.left||-1!==t.top&&e.top>=t.top)&&l()}}var a=o[0],s=o[1],c=s.scrollView=a.scrollView;t.icon=function(){return angular.isDefined(i.icon)?i.icon:"ion-loading-d"};var l=function(){n[0].classList.add("active"),s.isLoading=!0,t.$parent&&t.$parent.$apply(i.onInfinite||"")},u=function(){n[0].classList.remove("active"),e(function(){c.resize(),d()},0,!1),s.isLoading=!1};t.$on("scroll.infiniteScrollComplete",function(){u()}),t.$on("$destroy",function(){a&&a.$element&&a.$element.off("scroll",d)});var d=ionic.animationFrameThrottle(r);setTimeout(d),a.$element.on("scroll",d)}}}]);var A='<a class="item-content" ng-href="{{$href()}}" target="{{$target()}}"></a>',P='<div class="item-content"></div>';u.directive("ionItem",["$animate","$compile",function(){return{restrict:"E",controller:["$scope","$element",function(e,t){this.$scope=e,this.$element=t}],scope:!0,compile:function(e,t){var n=angular.isDefined(t.href)||angular.isDefined(t.ngHref)||angular.isDefined(t.uiSref),i=n||/ion-(delete|option|reorder)-button/i.test(e.html());if(i){var o=v(n?A:P);o.append(e.contents()),e.append(o),e.addClass("item item-complex")}else e.addClass("item");return function(e,t,n){e.$href=function(){return n.href||n.ngHref},e.$target=function(){return n.target||"_self"}}}}}]);var D='<div class="item-left-edit item-delete enable-pointer-events"></div>';u.directive("ionDeleteButton",["$animate",function(){return{restrict:"E",require:["^ionItem","^?ionList"],priority:Number.MAX_VALUE,compile:function(e,t){return t.$set("class",(t["class"]||"")+" button icon button-icon",!0),function(e,t,n,i){var o=i[0],r=i[1],a=v(D);a.append(t),o.$element.append(a).addClass("item-left-editable"),r&&r.showDelete()&&a.addClass("visible active")}}}}]),u.directive("itemFloatingLabel",function(){return{restrict:"C",link:function(e,t){var n=t[0],i=n.querySelector("input, textarea"),o=n.querySelector(".input-label");if(i&&o){var r=function(){i.value?o.classList.add("has-input"):o.classList.remove("has-input")};i.addEventListener("input",r);var a=angular.element(i).controller("ngModel");a&&(a.$render=function(){i.value=a.$viewValue||"",r()}),e.$on("$destroy",function(){i.removeEventListener("input",r)})}}}});var H='<div class="item-options invisible"></div>';u.directive("ionOptionButton",["$compile",function(){function e(e){e.stopPropagation()}return{restrict:"E",require:"^ionItem",priority:Number.MAX_VALUE,compile:function(t,n){return n.$set("class",(n["class"]||"")+" button",!0),function(t,n,i,o){o.optionsContainer||(o.optionsContainer=v(H),o.$element.append(o.optionsContainer)),o.optionsContainer.append(n),n.on("click",e)}}}}]);var L='<div data-prevent-scroll="true" class="item-right-edit item-reorder enable-pointer-events"></div>';u.directive("ionReorderButton",["$animate","$parse",function(e,t){return{restrict:"E",require:["^ionItem","^?ionList"],priority:Number.MAX_VALUE,compile:function(e,n){return n.$set("class",(n["class"]||"")+" button icon button-icon",!0),e[0].setAttribute("data-prevent-scroll",!0),function(e,n,i,o){var r=o[0],a=o[1],s=t(i.onReorder);e.$onReorder=function(t,n){s(e,{$fromIndex:t,$toIndex:n})},i.ngClick||i.onClick||i.onclick||(n[0].onclick=function(e){return e.stopPropagation(),!1});var c=v(L);c.append(n),r.$element.append(c).addClass("item-right-editable"),a&&a.showReorder()&&c.addClass("visible active")}}}}]),u.directive("keyboardAttach",function(){return function(e,t){function n(e){if(!ionic.Platform.isAndroid()||ionic.Platform.isFullScreen){var n=e.keyboardHeight||e.detail.keyboardHeight;t.css("bottom",n+"px"),o=t.controller("$ionicScroll"),o&&(o.scrollView.__container.style.bottom=n+s(t[0])+"px")}}function i(){(!ionic.Platform.isAndroid()||ionic.Platform.isFullScreen)&&(t.css("bottom",""),o&&(o.scrollView.__container.style.bottom=""))}ionic.on("native.keyboardshow",n,window),ionic.on("native.keyboardhide",i,window),ionic.on("native.showkeyboard",n,window),ionic.on("native.hidekeyboard",i,window);var o;e.$on("$destroy",function(){ionic.off("native.keyboardshow",n,window),ionic.off("native.keyboardhide",i,window),ionic.off("native.showkeyboard",n,window),ionic.off("native.hidekeyboard",i,window)})}}),u.directive("ionList",["$animate","$timeout",function(e,t){return{restrict:"E",require:["ionList","^?$ionicScroll"],controller:"$ionicList",compile:function(e,n){var i=v('<div class="list">').append(e.contents()).addClass(n.type);return e.append(i),function(e,i,o,r){function a(){function o(e,t){t()&&e.addClass("visible")||e.removeClass("active"),ionic.requestAnimationFrame(function(){t()&&e.addClass("active")||e.removeClass("visible")})}s.listView=new ionic.views.ListView({el:i[0],listEl:i.children()[0],scrollEl:c&&c.element,scrollView:c&&c.scrollView,onReorder:function(e,n,i){var o=v(e).scope();o&&o.$onReorder&&t(function(){o.$onReorder(n,i)})},canSwipe:function(){return s.canSwipeItems()}});h(n.canSwipe)&&e.$watch("!!("+n.canSwipe+")",function(e){s.canSwipeItems(e)}),h(n.showDelete)&&e.$watch("!!("+n.showDelete+")",function(e){s.showDelete(e)}),h(n.showReorder)&&e.$watch("!!("+n.showReorder+")",function(e){s.showReorder(e)}),e.$watch(function(){return s.showDelete()},function(e,t){if(e||t){e&&s.closeOptionButtons(),s.canSwipeItems(!e),i.children().toggleClass("list-left-editing",e),i.toggleClass("disable-pointer-events",e);var n=v(i[0].getElementsByClassName("item-delete"));o(n,s.showDelete)}}),e.$watch(function(){return s.showReorder()},function(e,t){if(e||t){e&&s.closeOptionButtons(),s.canSwipeItems(!e),i.children().toggleClass("list-right-editing",e),i.toggleClass("disable-pointer-events",e);var n=v(i[0].getElementsByClassName("item-reorder"));o(n,s.showReorder)}})}var s=r[0],c=r[1];t(a)}}}}]),u.directive("menuClose",["$ionicViewService",function(){return{restrict:"AC",require:"^ionSideMenus",link:function(e,t,n,i){t.bind("click",function(){i.close()})}}}]),u.directive("menuToggle",["$ionicViewService",function(){return{restrict:"AC",require:"^ionSideMenus",link:function(e,t,n,i){var o=n.menuToggle||"left";t.bind("click",function(){"left"===o?i.toggleLeft():"right"===o&&i.toggleRight()})}}}]),u.directive("ionModal",[function(){return{restrict:"E",transclude:!0,replace:!0,controller:[function(){}],template:'<div class="modal-backdrop"><div class="modal-wrapper" ng-transclude></div></div>'}}]),u.directive("ionModalView",function(){return{restrict:"E",compile:function(e){e.addClass("modal")}}}),u.directive("ionNavBackButton",["$animate","$rootScope","$sanitize","$ionicNavBarConfig","$ionicNgClick",function(e,t,n,i,o){var r=!1;return t.$on("$viewHistory.historyChange",function(e,t){r=!!t.showBack}),{restrict:"E",require:"^ionNavBar",compile:function(t){t.addClass("button back-button ng-hide");var a=!!(t.html()||"").match(/class=.*?ion-/);return function(t,s,c,l){a||-1!==s[0].className.indexOf("ion-")||s.addClass(i.backButtonIcon),h(c.ngClick)||o(t,s,l.back),t.$watch(function(){return h(c.fromTitle)&&(s[0].innerHTML='<span class="back-button-title">'+n(t.oldTitle)+"</span>"),!(!r||!t.backButtonShown)},ionic.animationFrameThrottle(function(t){t?e.removeClass(s,"ng-hide"):e.addClass(s,"ng-hide")}))}}}}]),u.constant("$ionicNavBarConfig",{transition:"nav-title-slide-ios7",alignTitle:"center",backButtonIcon:"ion-ios7-arrow-back"}),u.directive("ionNavBar",["$ionicViewService","$rootScope","$animate","$compile","$ionicNavBarConfig",function(e,t,n,i,o){return{restrict:"E",controller:"$ionicNavBar",scope:!0,compile:function(e,t){function n(e,t,n,i){i._headerBarView=new ionic.views.HeaderBar({el:t[0],alignTitle:n.alignTitle||o.alignTitle||"center"}),e.backButtonShown=!1,e.shouldAnimate=!0,e.isReverse=!1,e.isInvisible=!0,e.$on("$destroy",function(){e.$parent.$hasHeader=!1}),e.$watch(function(){return(e.isReverse?" reverse":"")+(e.isInvisible?" invisible":"")+(e.shouldAnimate?"":" no-animation")},function(e,n){t.removeClass(n),t.addClass(e)})}return e.addClass("bar bar-header nav-bar").append('<div class="buttons left-buttons"> </div><h1 ng-bind-html="title" class="title"></h1><div class="buttons right-buttons"> </div>'),e.addClass(h(t.animation)?t.animation:o.transition),{pre:n}}}}]),u.directive("ionNavButtons",["$compile","$animate",function(e,t){return{require:"^ionNavBar",restrict:"E",compile:function(n){var i=n.contents().remove();
return function(n,o,r,a){var s="right"===r.side?a.rightButtonsElement:a.leftButtonsElement,c=v("<span>").append(i);o.append(c),e(c)(n),ionic.requestAnimationFrame(function(){n.$$destroyed||t.enter(c,s)}),n.$on("$destroy",function(){t.leave(c)}),o.css("display","none")}}}}]),u.directive("navClear",["$ionicViewService","$state","$location","$window","$rootScope",function(e,t,n,i,o){return o.$on("$stateChangeError",function(){e.nextViewOptions(null)}),{priority:100,restrict:"AC",compile:function(){function t(t,n){function o(){r=t.$on("$stateChangeStart",function(){e.nextViewOptions({disableAnimate:!0,disableBack:!0}),r()}),i.setTimeout(r,300)}var r;n.on("click",o)}return{pre:t}}}}]),u.constant("$ionicNavViewConfig",{transition:"slide-left-right-ios7"}),u.directive("ionNavView",["$ionicViewService","$state","$compile","$controller","$animate",function(e,t,n,i,o){var r=!1,a={restrict:"E",terminal:!0,priority:2e3,transclude:!0,controller:function(){},compile:function(s,c,l){return function(s,c,u){function d(r){o.enabled()===!1&&(r=!1);var a=t.$current&&t.$current.locals[p];if(a!==h){var l=e.getRenderer(c,u,s);if(f&&(f.$destroy(),f=null),!a)return h=null,w.state=null,c.append(m);var d=v("<div></div>").html(a.$template).contents(),$=l().register(d);l(r).leave(),h=a,w.state=a.$$state,l(r).enter(d);var b=n(d);if(f=s.$new(),f.$navDirection=$.navDirection,a.$$controller){a.$scope=f;var y=i(a.$$controller,a);c.children().data("$ngControllerController",y)}b(f);var S=e._getViewById($.viewId)||{};f.$broadcast("$viewContentLoaded",S),g&&f.$eval(g),d=null}}var f,h,p=u[a.name]||u.name||"",g=u.onload||"",m=l(s);c.append(m);var $=c.parent().inheritedData("$uiView");p.indexOf("@")<0&&(p=p+"@"+($&&$.state?$.state.name:""));var w={name:p,state:null};c.data("$uiView",w);var b=function(){if(!r){r=!0;try{d(!0)}catch(e){throw r=!1,e}r=!1}};s.$on("$stateChangeSuccess",b),d(!1)}}};return a}]),u.config(["$provide",function(e){e.decorator("ngClickDirective",["$delegate",function(e){return e.shift(),e}])}]).factory("$ionicNgClick",["$parse",function(e){return function(t,n,i){var o=angular.isFunction(i)?i:e(i);n.on("click",function(e){t.$apply(function(){o(t,{$event:e})})}),n.onclick=function(){}}}]).directive("ngClick",["$ionicNgClick",function(e){return function(t,n,i){e(t,n,i.ngClick)}}]).directive("ionStopEvent",function(){return{restrict:"A",link:function(e,t,n){t.bind(n.ionStopEvent,c)}}}),u.directive("ionPane",function(){return{restrict:"E",link:function(e,t){t.addClass("pane")}}}),u.directive("ionPopover",[function(){return{restrict:"E",transclude:!0,replace:!0,controller:[function(){}],template:'<div class="popover-backdrop"><div class="popover-wrapper" ng-transclude></div></div>'}}]),u.directive("ionPopoverView",function(){return{restrict:"E",compile:function(e){e.append(angular.element('<div class="popover-arrow"></div>')),e.addClass("popover")}}}),u.directive("ionRadio",function(){return{restrict:"E",replace:!0,require:"?ngModel",transclude:!0,template:'<label class="item item-radio"><input type="radio" name="radio-group"><div class="item-content disable-pointer-events" ng-transclude></div><i class="radio-icon disable-pointer-events icon ion-checkmark"></i></label>',compile:function(e,t){t.icon&&e.children().eq(2).removeClass("ion-checkmark").addClass(t.icon);var n=e.find("input");return f({name:t.name,value:t.value,disabled:t.disabled,"ng-value":t.ngValue,"ng-model":t.ngModel,"ng-disabled":t.ngDisabled,"ng-change":t.ngChange},function(e,t){h(e)&&n.attr(t,e)}),function(e,t,n){e.getValue=function(){return e.ngValue||n.value}}}}}),u.directive("ionRefresher",["$ionicBind",function(e){return{restrict:"E",replace:!0,require:"^$ionicScroll",template:'<div class="scroll-refresher" collection-repeat-ignore><div class="ionic-refresher-content" ng-class="{\'ionic-refresher-with-text\': pullingText || refreshingText}"><div class="icon-pulling" ng-class="{\'pulling-rotation-disabled\':disablePullingRotation}"><i class="icon {{pullingIcon}}"></i></div><div class="text-pulling" ng-bind-html="pullingText"></div><i class="icon {{refreshingIcon}} icon-refreshing"></i><div class="text-refreshing" ng-bind-html="refreshingText"></div></div></div>',compile:function(t,n){return angular.isUndefined(n.pullingIcon)&&n.$set("pullingIcon","ion-ios7-arrow-down"),angular.isUndefined(n.refreshingIcon)&&n.$set("refreshingIcon","ion-loading-d"),function(t,n,i,o){e(t,i,{pullingIcon:"@",pullingText:"@",refreshingIcon:"@",refreshingText:"@",disablePullingRotation:"@",$onRefresh:"&onRefresh",$onPulling:"&onPulling"}),o._setRefresher(t,n[0]),t.$on("scroll.refreshComplete",function(){t.$evalAsync(function(){o.scrollView.finishPullToRefresh()})})}}}}]),u.directive("ionScroll",["$timeout","$controller","$ionicBind",function(e,t,n){return{restrict:"E",scope:!0,controller:function(){},compile:function(e){function i(e,i,r){var a,s;n(e,r,{direction:"@",paging:"@",$onScroll:"&onScroll",scroll:"@",scrollbarX:"@",scrollbarY:"@",zooming:"@",minZoom:"@",maxZoom:"@"}),e.direction=e.direction||"y",angular.isDefined(r.padding)&&e.$watch(r.padding,function(e){o.toggleClass("padding",!!e)}),e.$eval(e.paging)===!0&&o.addClass("scroll-paging"),e.direction||(e.direction="y");var c=e.$eval(e.paging)===!0,l={el:i[0],delegateHandle:r.delegateHandle,locking:"true"===(r.locking||"true"),bouncing:e.$eval(r.hasBouncing),paging:c,scrollbarX:e.$eval(e.scrollbarX)!==!1,scrollbarY:e.$eval(e.scrollbarY)!==!1,scrollingX:e.direction.indexOf("x")>=0,scrollingY:e.direction.indexOf("y")>=0,zooming:e.$eval(e.zooming)===!0,maxZoom:e.$eval(e.maxZoom)||3,minZoom:e.$eval(e.minZoom)||.5};c&&(l.speedMultiplier=.8,l.bouncing=!1),s=t("$ionicScroll",{$scope:e,scrollViewOptions:l}),a=e.$parent.scrollView=s.scrollView}e.addClass("scroll-view ionic-scroll");var o=v('<div class="scroll"></div>');return o.append(e.contents()),e.append(o),{pre:i}}}}]),u.directive("ionSideMenu",function(){return{restrict:"E",require:"^ionSideMenus",scope:!0,compile:function(e,t){return angular.isUndefined(t.isEnabled)&&t.$set("isEnabled","true"),angular.isUndefined(t.width)&&t.$set("width","275"),e.addClass("menu menu-"+t.side),function(e,n,i,o){e.side=i.side||"left";var r=o[e.side]=new ionic.views.SideMenu({width:t.width,el:n[0],isEnabled:!0});e.$watch(i.width,function(e){var t=+e;t&&t==e&&r.setWidth(+e)}),e.$watch(i.isEnabled,function(e){r.setIsEnabled(!!e)})}}}}),u.directive("ionSideMenuContent",["$timeout","$ionicGesture","$window",function(e,t,n){return{restrict:"EA",require:"^ionSideMenus",scope:!0,compile:function(i,o){function r(r,a,s,c){function l(e){0!==c.getOpenAmount()?(c.close(),e.gesture.srcEvent.preventDefault(),v=null,g=null):v||(v=ionic.tap.pointerCoord(e.gesture.srcEvent))}function u(e){c.isDraggableTarget(e)&&"x"==p(e)&&(c._handleDrag(e),e.gesture.srcEvent.preventDefault())}function d(e){"x"==p(e)&&e.gesture.srcEvent.preventDefault()}function f(e){c._endDrag(e),v=null,g=null}function p(e){if(g)return g;if(e&&e.gesture){if(v){var t=ionic.tap.pointerCoord(e.gesture.srcEvent),n=Math.abs(t.x-v.x),i=Math.abs(t.y-v.y),o=i>n?"y":"x";return Math.max(n,i)>30&&(g=o),o}v=ionic.tap.pointerCoord(e.gesture.srcEvent)}return"x"}var v=null,g=null;a.addClass("menu-content pane"),h(o.dragContent)?r.$watch(o.dragContent,function(e){c.canDragContent(e)}):c.canDragContent(!0),h(o.edgeDragThreshold)&&r.$watch(o.edgeDragThreshold,function(e){c.edgeDragThreshold(e)});var m={element:i[0],onDrag:function(){},endDrag:function(){},getTranslateX:function(){return r.sideMenuContentTranslateX||0},setTranslateX:ionic.animationFrameThrottle(function(t){var n=m.offsetX+t;a[0].style[ionic.CSS.TRANSFORM]="translate3d("+n+"px,0,0)",e(function(){r.sideMenuContentTranslateX=t})}),setMarginLeft:ionic.animationFrameThrottle(function(e){e?(e=parseInt(e,10),a[0].style[ionic.CSS.TRANSFORM]="translate3d("+e+"px,0,0)",a[0].style.width=n.innerWidth-e+"px",m.offsetX=e):(a[0].style[ionic.CSS.TRANSFORM]="translate3d(0,0,0)",a[0].style.width="",m.offsetX=0)}),enableAnimation:function(){r.animationEnabled=!0,a[0].classList.add("menu-animated")},disableAnimation:function(){r.animationEnabled=!1,a[0].classList.remove("menu-animated")},offsetX:0};c.setContent(m);var $={stop_browser_behavior:!1},w=t.on("tap",l,a,$),b=t.on("dragright",u,a,$),y=t.on("dragleft",u,a,$),S=t.on("dragup",d,a,$),C=t.on("dragdown",d,a,$),k=t.on("release",f,a,$);r.$on("$destroy",function(){t.off(y,"dragleft",u),t.off(b,"dragright",u),t.off(S,"dragup",d),t.off(C,"dragdown",d),t.off(k,"release",f),t.off(w,"tap",l)})}return{pre:r}}}}]),u.directive("ionSideMenus",["$ionicBody",function(e){return{restrict:"ECA",controller:"$ionicSideMenus",compile:function(t,n){function i(t){t.$on("$ionicExposeAside",function(n,i){t.$exposeAside||(t.$exposeAside={}),t.$exposeAside.active=i,e.enableClass(i,"aside-open")}),t.$on("$destroy",function(){e.removeClass("menu-open","aside-open")})}return n.$set("class",(n["class"]||"")+" view"),{pre:i}}}}]),u.directive("ionSlideBox",["$timeout","$compile","$ionicSlideBoxDelegate",function(e,t,n){return{restrict:"E",replace:!0,transclude:!0,scope:{autoPlay:"=",doesContinue:"@",slideInterval:"@",showPager:"@",pagerClick:"&",disableScroll:"@",onSlideChanged:"&",activeSlide:"=?"},controller:["$scope","$element","$attrs",function(t,i,o){var r=t.$eval(t.doesContinue)===!0,a=h(o.autoPlay)?!!t.autoPlay:!1,s=a?t.$eval(t.slideInterval)||4e3:0,c=new ionic.views.Slider({el:i[0],auto:s,continuous:r,startSlide:t.activeSlide,slidesChanged:function(){t.currentSlide=c.currentIndex(),e(function(){})},callback:function(n){t.currentSlide=n,t.onSlideChanged({index:t.currentSlide,$index:t.currentSlide}),t.$parent.$broadcast("slideBox.slideChanged",n),t.activeSlide=n,e(function(){})}});c.enableSlide(t.$eval(o.disableScroll)!==!0),t.$watch("activeSlide",function(e){angular.isDefined(e)&&c.slide(e)}),t.$on("slideBox.nextSlide",function(){c.next()}),t.$on("slideBox.prevSlide",function(){c.prev()}),t.$on("slideBox.setSlide",function(e,t){c.slide(t)}),this.__slider=c;var l=n._registerInstance(c,o.delegateHandle);t.$on("$destroy",l),this.slidesCount=function(){return c.slidesCount()},this.onPagerClick=function(e){t.pagerClick({index:e})},e(function(){c.load()})}],template:'<div class="slider"><div class="slider-slides" ng-transclude></div></div>',link:function(e,n){if(e.$eval(e.showPager)!==!1){var i=e.$new(),o=v("<ion-pager></ion-pager>");n.append(o),t(o)(i)}}}}]).directive("ionSlide",function(){return{restrict:"E",require:"^ionSlideBox",compile:function(e){return e.addClass("slider-slide"),function(){}}}}).directive("ionPager",function(){return{restrict:"E",replace:!0,require:"^ionSlideBox",template:'<div class="slider-pager"><span class="slider-pager-page" ng-repeat="slide in numSlides() track by $index" ng-class="{active: $index == currentSlide}" ng-click="pagerClick($index)"><i class="icon ion-record"></i></span></div>',link:function(e,t,n,i){var o=function(e){for(var n=t[0].children,i=n.length,o=0;i>o;o++)o==e?n[o].classList.add("active"):n[o].classList.remove("active")};e.pagerClick=function(e){i.onPagerClick(e)},e.numSlides=function(){return new Array(i.slidesCount())},e.$watch("currentSlide",function(e){o(e)})}}}),u.constant("$ionicTabConfig",{type:""}),u.directive("ionTab",["$rootScope","$animate","$ionicBind","$compile",function(e,t,n,i){function o(e,t){return angular.isDefined(t)?" "+e+'="'+t+'"':""}return{restrict:"E",require:["^ionTabs","ionTab"],replace:!0,controller:"$ionicTab",scope:!0,compile:function(e,r){var a="<ion-tab-nav"+o("ng-click",r.ngClick)+o("title",r.title)+o("icon",r.icon)+o("icon-on",r.iconOn)+o("icon-off",r.iconOff)+o("badge",r.badge)+o("badge-style",r.badgeStyle)+o("hidden",r.hidden)+o("class",r["class"])+"></ion-tab-nav>",s=v('<div class="pane">').append(e.contents().remove());return function(e,o,r,c){function l(){h.tabMatchesState()&&f.select(e,!1)}var u,d,f=c[0],h=c[1],p=s[0].querySelector("ion-nav-view")||s[0].querySelector("data-ion-nav-view"),g=p&&p.getAttribute("name");n(e,r,{animate:"=",onSelect:"&",onDeselect:"&",title:"@",uiSref:"@",href:"@"}),f.add(e),e.$on("$destroy",function(){e.$tabsDestroy||f.remove(e),m.isolateScope().$destroy(),m.remove()}),o[0].removeAttribute("title"),g&&(h.navViewName=e.navViewName=g),e.$on("$stateChangeSuccess",l),l();var m=v(a);m.data("$ionTabsController",f),m.data("$ionTabController",h),f.$tabsElement.append(i(m)(e)),e.$watch("$tabSelected",function(n){u&&u.$destroy(),u=null,d&&t.leave(d),d=null,n&&(u=e.$new(),d=s.clone(),t.enter(d,f.$element),i(d)(u))})}}}}]),u.directive("ionTabNav",[function(){return{restrict:"E",replace:!0,require:["^ionTabs","^ionTab"],template:'<a ng-class="{\'tab-item-active\': isTabActive(), \'has-badge\':badge, \'tab-hidden\':isHidden()}"  class="tab-item"><span class="badge {{badgeStyle}}" ng-if="badge">{{badge}}</span><i class="icon {{getIconOn()}}" ng-if="getIconOn() && isTabActive()"></i><i class="icon {{getIconOff()}}" ng-if="getIconOff() && !isTabActive()"></i><span class="tab-title" ng-bind-html="title"></span></a>',scope:{title:"@",icon:"@",iconOn:"@",iconOff:"@",badge:"=",hidden:"@",badgeStyle:"@","class":"@"},compile:function(){return function(e,t,n,i){var o=i[0],r=i[1];t[0].removeAttribute("title"),e.selectTab=function(e){e.preventDefault(),o.select(r.$scope,!0)},n.ngClick||t.on("click",function(t){e.$apply(function(){e.selectTab(t)})}),e.isHidden=function(){return"true"===n.hidden||n.hidden===!0?!0:!1},e.getIconOn=function(){return e.iconOn||e.icon},e.getIconOff=function(){return e.iconOff||e.icon},e.isTabActive=function(){return o.selectedTab()===r.$scope}}}}}]),u.constant("$ionicTabsConfig",{position:"",type:""}),u.directive("ionTabs",["$ionicViewService","$ionicTabsDelegate","$ionicTabsConfig",function(e,t,n){return{restrict:"E",scope:!0,controller:"$ionicTabs",compile:function(e){function i(e,n,i,o){var r=t._registerInstance(o,i.delegateHandle);e.$on("$destroy",function(){e.$tabsDestroy=!0,r()}),o.$scope=e,o.$element=n,o.$tabsElement=v(n[0].querySelector(".tabs"));var a=n[0];e.$watch(function(){return a.className},function(t){var n=-1!==t.indexOf("tabs-top"),i=-1!==t.indexOf("tabs-item-hide");e.$hasTabs=!n&&!i,e.$hasTabsTop=n&&!i}),e.$on("$destroy",function(){delete e.$hasTabs,delete e.$hasTabsTop})}e.addClass("view");var o=v('<div class="tabs"></div>');return o.append(e.contents()),e.append(o),e.addClass(n.position),e.addClass(n.type),{pre:i}}}}]),u.directive("ionToggle",["$ionicGesture","$timeout",function(){return{restrict:"E",replace:!0,require:"?ngModel",transclude:!0,template:'<div class="item item-toggle"><div ng-transclude></div><label class="toggle"><input type="checkbox"><div class="track"><div class="handle"></div></div></label></div>',compile:function(e,t){var n=e.find("input");return f({name:t.name,"ng-value":t.ngValue,"ng-model":t.ngModel,"ng-checked":t.ngChecked,"ng-disabled":t.ngDisabled,"ng-true-value":t.ngTrueValue,"ng-false-value":t.ngFalseValue,"ng-change":t.ngChange},function(e,t){h(e)&&n.attr(t,e)}),t.toggleClass&&e[0].getElementsByTagName("label")[0].classList.add(t.toggleClass),function(e,t){var n,i,o,r;n=t[0].getElementsByTagName("label")[0],i=n.children[0],o=n.children[1],r=o.children[0];var a=v(i).controller("ngModel");e.toggle=new ionic.views.Toggle({el:n,track:o,checkbox:i,handle:r,onChange:function(){a.$setViewValue(i.checked?!0:!1),e.$apply()}}),e.$on("$destroy",function(){e.toggle.destroy()})}}}}]),u.directive("ionView",["$ionicViewService","$rootScope","$animate",function(){return{restrict:"EA",priority:1e3,require:["^?ionNavBar","^?ionModal"],compile:function(e){return e.addClass("pane"),e[0].removeAttribute("title"),function(e,t,n,i){var o=i[0],r=i[1];if(o&&!r){if(angular.isDefined(n.title)){var a=n.title;o.changeTitle(a,e.$navDirection),n.$observe("title",function(e){o.setTitle(e)})}var s=angular.isDefined(n.hideBackButton)?n.hideBackButton:"false";e.$watch(s,function(e){o.showBackButton(!e)});var c=angular.isDefined(n.hideNavBar)?n.hideNavBar:"false";e.$watch(c,function(e){o.showBar(!e)})}}}}}])}();
; browserify_shim__define__module__export__(typeof ionic != "undefined" ? ionic : window.ionic);

}).call(global, undefined, undefined, undefined, undefined, function defineExport(ex) { module.exports = ex; });

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"/home/ubuntu/workspace/bower_components/angular-animate/angular-animate.min.js":"/home/ubuntu/workspace/bower_components/angular-animate/angular-animate.min.js","/home/ubuntu/workspace/bower_components/angular-sanitize/angular-sanitize.min.js":"/home/ubuntu/workspace/bower_components/angular-sanitize/angular-sanitize.min.js","/home/ubuntu/workspace/bower_components/angular-ui-router/release/angular-ui-router.min.js":"/home/ubuntu/workspace/bower_components/angular-ui-router/release/angular-ui-router.min.js","/home/ubuntu/workspace/bower_components/angular/angular.min.js":"/home/ubuntu/workspace/bower_components/angular/angular.min.js","/home/ubuntu/workspace/bower_components/ionic/release/js/ionic.min.js":"/home/ubuntu/workspace/bower_components/ionic/release/js/ionic.min.js"}],"/home/ubuntu/workspace/bower_components/ionic/release/js/ionic.min.js":[function(require,module,exports){
/*!
 * Copyright 2014 Drifty Co.
 * http://drifty.com/
 *
 * Ionic, v1.0.0-beta.13
 * A powerful HTML5 mobile app framework.
 * http://ionicframework.com/
 *
 * By @maxlynch, @benjsperry, @adamdbradley <3
 *
 * Licensed under the MIT license. Please see LICENSE for more information.
 *
 */

!function(){function e(e,t,n){t!==!1?k.addEventListener(e,j[e],n):k.removeEventListener(e,j[e])}function t(e){var t=T(e.target),i=E(t);if(ionic.tap.requiresNativeClick(i)||z)return!1;var r=ionic.tap.pointerCoord(e);n("click",i,r.x,r.y),_(i)}function n(e,t,n,i){var r=document.createEvent("MouseEvents");r.initMouseEvent(e,!0,!0,window,1,0,0,n,i,!1,!1,!1,!1,0,null),r.isIonicTap=!0,t.dispatchEvent(r)}function i(e){return("submit"!=e.target.type||0!==e.detail)&&(ionic.scroll.isScrolling&&ionic.tap.containsOrIsTextInput(e.target)||!e.isIonicTap&&!ionic.tap.requiresNativeClick(e.target))?(e.stopPropagation(),ionic.tap.isLabelWithTextInput(e.target)||e.preventDefault(),!1):void 0}function r(t){if(!t.isIonicTap&&!d(t)){if(X)return t.stopPropagation(),ionic.tap.isTextInput(t.target)&&q===t.target||/^(select|option)$/i.test(t.target.tagName)||t.preventDefault(),!1;z=!1,F=ionic.tap.pointerCoord(t),e("mousemove"),ionic.activator.start(t)}}function o(n){return X?(n.stopPropagation(),n.preventDefault(),!1):d(n)||/^(select|option)$/i.test(n.target.tagName)?!1:(v(n)||t(n),e("mousemove",!1),ionic.activator.end(),void(z=!1))}function s(t){return v(t)?(e("mousemove",!1),ionic.activator.end(),z=!0,!1):void 0}function a(t){if(!d(t)&&(z=!1,h(),F=ionic.tap.pointerCoord(t),e(U),ionic.activator.start(t),ionic.Platform.isIOS()&&ionic.tap.isLabelWithTextInput(t.target))){var n=E(T(t.target));n!==Y&&t.preventDefault()}}function l(e){d(e)||(h(),v(e)||(t(e),/^(select|option)$/i.test(e.target.tagName)&&e.preventDefault()),q=e.target,u())}function c(t){return v(t)?(z=!0,e(U,!1),ionic.activator.end(),!1):void 0}function u(){e(U,!1),ionic.activator.end(),z=!1}function h(){X=!0,clearTimeout(H),H=setTimeout(function(){X=!1},2e3)}function d(e){return e.isTapHandled?!0:(e.isTapHandled=!0,ionic.scroll.isScrolling&&ionic.tap.containsOrIsTextInput(e.target)?(e.preventDefault(),!0):void 0)}function _(e){W=null;var t=!1;"SELECT"==e.tagName?(n("mousedown",e,0,0),e.focus&&e.focus(),t=!0):g()===e?t=!0:/^(input|textarea)$/i.test(e.tagName)||e.isContentEditable?(t=!0,e.focus&&e.focus(),e.value=e.value,X&&(W=e)):f(),t&&(g(e),ionic.trigger("ionic.focusin",{target:e},!0))}function f(){var e=g();e&&(/^(input|textarea|select)$/i.test(e.tagName)||e.isContentEditable)&&e.blur(),g(null)}function p(e){X&&ionic.tap.isTextInput(g())&&ionic.tap.isTextInput(W)&&W!==e.target&&(W.focus(),W=null),ionic.scroll.isScrolling=!1}function m(){g(null)}function g(e){return arguments.length&&(Y=e),Y||document.activeElement}function v(e){if(!e||1!==e.target.nodeType||!F||0===F.x&&0===F.y)return!1;var t=ionic.tap.pointerCoord(e),n=!(!e.target.classList||!e.target.classList.contains),i=n&e.target.classList.contains("button")?Z:B;return Math.abs(F.x-t.x)>i||Math.abs(F.y-t.y)>i}function T(e,t){for(var n=e,i=0;6>i&&n;i++){if("LABEL"===n.tagName)return n;n=n.parentElement}return t!==!1?e:void 0}function E(e){if(e&&"LABEL"===e.tagName){if(e.control)return e.control;if(e.querySelector){var t=e.querySelector("input,textarea,select");if(t)return t}}return e}function S(){A()?(window.addEventListener("native.keyboardshow",w),window.addEventListener("native.keyboardhide",L),window.addEventListener("native.showkeyboard",w),window.addEventListener("native.hidekeyboard",L)):document.body.addEventListener("focusout",L),document.body.addEventListener("ionic.focusin",b),document.body.addEventListener("focusin",b),document.body.addEventListener("orientationchange",G),window.navigator.msPointerEnabled?document.removeEventListener("MSPointerDown",S):document.removeEventListener("touchstart",S)}function w(e){clearTimeout(K),ionic.keyboard.height=e.keyboardHeight}function b(e){e.target&&ionic.tap.isTextInput(e.target)&&!ionic.tap.isDateInput(e.target)&&P(e.target)&&(document.addEventListener("keydown",M,!1),document.body.scrollTop=0,document.body.querySelector(".scroll-content").scrollTop=0,$=e.target,y(e))}function y(e){clearTimeout(J),clearTimeout(K),J=setTimeout(function(){if(!(tt+350>Date.now())){tt=Date.now();var t,n=$.getBoundingClientRect(),i=0;Q=setInterval(function(){t=I(),i>10&&(clearInterval(Q),t=275),t&&(clearInterval(Q),D(e.target,n.top,n.bottom,et,t)),i++},100)}},32)}function D(e,t,n,i,r){var o={target:e,elementTop:Math.round(t),elementBottom:Math.round(n),keyboardHeight:r,viewportHeight:i};return o.hasPlugin=A(),o.contentHeight=i-r,o.isElementUnderKeyboard=o.elementBottom>o.contentHeight,ionic.keyboard.isOpen=!0,$=e,ionic.trigger("scrollChildIntoView",o,!0),ionic.requestAnimationFrame(function(){document.body.classList.add(nt)}),window.navigator.msPointerEnabled?document.addEventListener("MSPointerMove",N,!1):document.addEventListener("touchmove",N,!1),o}function L(){clearTimeout(K),K=setTimeout(ionic.keyboard.hide,350)}function x(){C()>et&&(et=C())}function M(e){ionic.scroll.isScrolling&&N(e)}function N(e){"TEXTAREA"!==e.target.tagName&&e.preventDefault()}function G(){var e=C();if(e===et)var t=0,n=setInterval(function(){t>10&&clearInterval(n),e=C(),e!==et&&(ionic.keyboard.landscape=et>e?!0:!1,et=e,clearInterval(n)),t++},50);else et=e}function I(){return ionic.keyboard.height?ionic.keyboard.height:ionic.Platform.isAndroid()?ionic.Platform.isFullScreen?275:C()<et?et-C():0:ionic.Platform.isIOS()?ionic.keyboard.landscape?206:ionic.Platform.isWebView()?260:216:275}function C(){return window.innerHeight||screen.height}function P(e){for(;e;){if(e.classList.contains(it))return!0;e=e.parentElement}return!1}function A(){return!!(window.cordova&&cordova.plugins&&cordova.plugins.Keyboard)}function O(){var e;for(e=0;e<document.head.children.length;e++)if("viewport"==document.head.children[e].name){rt=document.head.children[e];break}if(rt){var t,n=rt.content.toLowerCase().replace(/\s+/g,"").split(",");for(e=0;e<n.length;e++)n[e]&&(t=n[e].split("="),ot[t[0]]=t.length>1?t[1]:"_");R()}}function R(){var e=ot.width,t=ot.height,n=ionic.Platform,i=n.version(),r="device-width",o="device-height",s=ionic.viewport.orientation();delete ot.height,ot.width=r,n.isIPad()?i>7?delete ot.width:n.isWebView()?90==s?ot.height="0":7==i&&(ot.height=o):7>i&&(ot.height="0"):n.isIOS()&&(n.isWebView()?i>7?delete ot.width:7>i?t&&(ot.height="0"):7==i&&(ot.height=o):7>i&&t&&(ot.height="0")),(e!==ot.width||t!==ot.height)&&V()}function V(){var e,t=[];for(e in ot)ot[e]&&t.push(e+("_"==ot[e]?"":"="+ot[e]));rt.content=t.join(", ")}window.ionic=window.ionic||{},window.ionic.views={},window.ionic.version="1.0.0-beta.13",function(e,t,n){function i(){o=!0;for(var e=0;e<r.length;e++)n.requestAnimationFrame(r[e]);r=[],t.removeEventListener("DOMContentLoaded",i)}var r=[],o="complete"===t.readyState||"interactive"===t.readyState;o||t.addEventListener("DOMContentLoaded",i),e._rAF=function(){return e.requestAnimationFrame||e.webkitRequestAnimationFrame||e.mozRequestAnimationFrame||function(t){e.setTimeout(t,16)}}();var s=e.cancelAnimationFrame||e.webkitCancelAnimationFrame||e.mozCancelAnimationFrame||e.webkitCancelRequestAnimationFrame;n.DomUtil={requestAnimationFrame:function(t){return e._rAF(t)},cancelAnimationFrame:function(e){s(e)},animationFrameThrottle:function(e){var t,i,r;return function(){t=arguments,r=this,i||(i=!0,n.requestAnimationFrame(function(){e.apply(r,t),i=!1}))}},getPositionInParent:function(e){return{left:e.offsetLeft,top:e.offsetTop}},ready:function(e){o?n.requestAnimationFrame(e):r.push(e)},getTextBounds:function(n){if(t.createRange){var i=t.createRange();if(i.selectNodeContents(n),i.getBoundingClientRect){var r=i.getBoundingClientRect();if(r){var o=e.scrollX,s=e.scrollY;return{top:r.top+s,left:r.left+o,right:r.left+o+r.width,bottom:r.top+s+r.height,width:r.width,height:r.height}}}}return null},getChildIndex:function(e,t){if(t)for(var n,i=e.parentNode.children,r=0,o=0,s=i.length;s>r;r++)if(n=i[r],n.nodeName&&n.nodeName.toLowerCase()==t){if(n==e)return o;o++}return Array.prototype.slice.call(e.parentNode.children).indexOf(e)},swapNodes:function(e,t){t.parentNode.insertBefore(e,t)},elementIsDescendant:function(e,t,n){var i=e;do{if(i===t)return!0;i=i.parentNode}while(i&&i!==n);return!1},getParentWithClass:function(e,t,n){for(n=n||10;e.parentNode&&n--;){if(e.parentNode.classList&&e.parentNode.classList.contains(t))return e.parentNode;e=e.parentNode}return null},getParentOrSelfWithClass:function(e,t,n){for(n=n||10;e&&n--;){if(e.classList&&e.classList.contains(t))return e;e=e.parentNode}return null},rectContains:function(e,t,n,i,r,o){return n>e||e>r?!1:i>t||t>o?!1:!0}},n.requestAnimationFrame=n.DomUtil.requestAnimationFrame,n.cancelAnimationFrame=n.DomUtil.cancelAnimationFrame,n.animationFrameThrottle=n.DomUtil.animationFrameThrottle}(window,document,ionic),function(e){e.CustomEvent=function(){if("function"==typeof window.CustomEvent)return CustomEvent;var e=function(e,t){var n;t=t||{bubbles:!1,cancelable:!1,detail:void 0};try{n=document.createEvent("CustomEvent"),n.initCustomEvent(e,t.bubbles,t.cancelable,t.detail)}catch(i){n=document.createEvent("Event");for(var r in t)n[r]=t[r];n.initEvent(e,t.bubbles,t.cancelable)}return n};return e.prototype=window.Event.prototype,e}(),e.EventController={VIRTUALIZED_EVENTS:["tap","swipe","swiperight","swipeleft","drag","hold","release"],trigger:function(t,n,i,r){var o=new e.CustomEvent(t,{detail:n,bubbles:!!i,cancelable:!!r});n&&n.target&&n.target.dispatchEvent&&n.target.dispatchEvent(o)||window.dispatchEvent(o)},on:function(t,n,i){for(var r=i||window,o=0,s=this.VIRTUALIZED_EVENTS.length;s>o;o++)if(t==this.VIRTUALIZED_EVENTS[o]){var a=new e.Gesture(i);return a.on(t,n),a}r.addEventListener(t,n)},off:function(e,t,n){n.removeEventListener(e,t)},onGesture:function(t,n,i,r){var o=new e.Gesture(i,r);return o.on(t,n),o},offGesture:function(e,t,n){e.off(t,n)},handlePopState:function(){}},e.on=function(){e.EventController.on.apply(e.EventController,arguments)},e.off=function(){e.EventController.off.apply(e.EventController,arguments)},e.trigger=e.EventController.trigger,e.onGesture=function(){return e.EventController.onGesture.apply(e.EventController.onGesture,arguments)},e.offGesture=function(){return e.EventController.offGesture.apply(e.EventController.offGesture,arguments)}}(window.ionic),function(e){function t(){if(!e.Gestures.READY){e.Gestures.event.determineEventTypes();for(var t in e.Gestures.gestures)e.Gestures.gestures.hasOwnProperty(t)&&e.Gestures.detection.register(e.Gestures.gestures[t]);e.Gestures.event.onTouch(e.Gestures.DOCUMENT,e.Gestures.EVENT_MOVE,e.Gestures.detection.detect),e.Gestures.event.onTouch(e.Gestures.DOCUMENT,e.Gestures.EVENT_END,e.Gestures.detection.detect),e.Gestures.READY=!0}}e.Gesture=function(t,n){return new e.Gestures.Instance(t,n||{})},e.Gestures={},e.Gestures.defaults={stop_browser_behavior:"disable-user-behavior"},e.Gestures.HAS_POINTEREVENTS=window.navigator.pointerEnabled||window.navigator.msPointerEnabled,e.Gestures.HAS_TOUCHEVENTS="ontouchstart"in window,e.Gestures.MOBILE_REGEX=/mobile|tablet|ip(ad|hone|od)|android|silk/i,e.Gestures.NO_MOUSEEVENTS=e.Gestures.HAS_TOUCHEVENTS&&window.navigator.userAgent.match(e.Gestures.MOBILE_REGEX),e.Gestures.EVENT_TYPES={},e.Gestures.DIRECTION_DOWN="down",e.Gestures.DIRECTION_LEFT="left",e.Gestures.DIRECTION_UP="up",e.Gestures.DIRECTION_RIGHT="right",e.Gestures.POINTER_MOUSE="mouse",e.Gestures.POINTER_TOUCH="touch",e.Gestures.POINTER_PEN="pen",e.Gestures.EVENT_START="start",e.Gestures.EVENT_MOVE="move",e.Gestures.EVENT_END="end",e.Gestures.DOCUMENT=window.document,e.Gestures.plugins={},e.Gestures.READY=!1,e.Gestures.Instance=function(n,i){var r=this;if(null!==n)return t(),this.element=n,this.enabled=!0,this.options=e.Gestures.utils.extend(e.Gestures.utils.extend({},e.Gestures.defaults),i||{}),this.options.stop_browser_behavior&&e.Gestures.utils.stopDefaultBrowserBehavior(this.element,this.options.stop_browser_behavior),e.Gestures.event.onTouch(n,e.Gestures.EVENT_START,function(t){r.enabled&&e.Gestures.detection.startDetect(r,t)}),this},e.Gestures.Instance.prototype={on:function(e,t){for(var n=e.split(" "),i=0;i<n.length;i++)this.element.addEventListener(n[i],t,!1);return this},off:function(e,t){for(var n=e.split(" "),i=0;i<n.length;i++)this.element.removeEventListener(n[i],t,!1);return this},trigger:function(t,n){var i=e.Gestures.DOCUMENT.createEvent("Event");i.initEvent(t,!0,!0),i.gesture=n;var r=this.element;return e.Gestures.utils.hasParent(n.target,r)&&(r=n.target),r.dispatchEvent(i),this},enable:function(e){return this.enabled=e,this}};var n=null,i=!1,r=!1;e.Gestures.event={bindDom:function(e,t,n){for(var i=t.split(" "),r=0;r<i.length;r++)e.addEventListener(i[r],n,!1)},onTouch:function(t,o,s){var a=this;this.bindDom(t,e.Gestures.EVENT_TYPES[o],function(l){var c=l.type.toLowerCase();if(!c.match(/mouse/)||!r){c.match(/touch/)||c.match(/pointerdown/)||c.match(/mouse/)&&1===l.which?i=!0:c.match(/mouse/)&&1!==l.which&&(i=!1),c.match(/touch|pointer/)&&(r=!0);var u=0;i&&(e.Gestures.HAS_POINTEREVENTS&&o!=e.Gestures.EVENT_END?u=e.Gestures.PointerEvent.updatePointer(o,l):c.match(/touch/)?u=l.touches.length:r||(u=c.match(/up/)?0:1),u>0&&o==e.Gestures.EVENT_END?o=e.Gestures.EVENT_MOVE:u||(o=e.Gestures.EVENT_END),(u||null===n)&&(n=l),s.call(e.Gestures.detection,a.collectEventData(t,o,a.getTouchList(n,o),l)),e.Gestures.HAS_POINTEREVENTS&&o==e.Gestures.EVENT_END&&(u=e.Gestures.PointerEvent.updatePointer(o,l))),u||(n=null,i=!1,r=!1,e.Gestures.PointerEvent.reset())}})},determineEventTypes:function(){var t;t=e.Gestures.HAS_POINTEREVENTS?e.Gestures.PointerEvent.getEvents():e.Gestures.NO_MOUSEEVENTS?["touchstart","touchmove","touchend touchcancel"]:["touchstart mousedown","touchmove mousemove","touchend touchcancel mouseup"],e.Gestures.EVENT_TYPES[e.Gestures.EVENT_START]=t[0],e.Gestures.EVENT_TYPES[e.Gestures.EVENT_MOVE]=t[1],e.Gestures.EVENT_TYPES[e.Gestures.EVENT_END]=t[2]},getTouchList:function(t){return e.Gestures.HAS_POINTEREVENTS?e.Gestures.PointerEvent.getTouchList():t.touches?t.touches:(t.identifier=1,[t])},collectEventData:function(t,n,i,r){var o=e.Gestures.POINTER_TOUCH;return(r.type.match(/mouse/)||e.Gestures.PointerEvent.matchType(e.Gestures.POINTER_MOUSE,r))&&(o=e.Gestures.POINTER_MOUSE),{center:e.Gestures.utils.getCenter(i),timeStamp:(new Date).getTime(),target:r.target,touches:i,eventType:n,pointerType:o,srcEvent:r,preventDefault:function(){this.srcEvent.preventManipulation&&this.srcEvent.preventManipulation(),this.srcEvent.preventDefault},stopPropagation:function(){this.srcEvent.stopPropagation()},stopDetect:function(){return e.Gestures.detection.stopDetect()}}}},e.Gestures.PointerEvent={pointers:{},getTouchList:function(){var e=this,t=[];return Object.keys(e.pointers).sort().forEach(function(n){t.push(e.pointers[n])}),t},updatePointer:function(t,n){return t==e.Gestures.EVENT_END?this.pointers={}:(n.identifier=n.pointerId,this.pointers[n.pointerId]=n),Object.keys(this.pointers).length},matchType:function(t,n){if(!n.pointerType)return!1;var i={};return i[e.Gestures.POINTER_MOUSE]=n.pointerType==n.MSPOINTER_TYPE_MOUSE||n.pointerType==e.Gestures.POINTER_MOUSE,i[e.Gestures.POINTER_TOUCH]=n.pointerType==n.MSPOINTER_TYPE_TOUCH||n.pointerType==e.Gestures.POINTER_TOUCH,i[e.Gestures.POINTER_PEN]=n.pointerType==n.MSPOINTER_TYPE_PEN||n.pointerType==e.Gestures.POINTER_PEN,i[t]},getEvents:function(){return["pointerdown MSPointerDown","pointermove MSPointerMove","pointerup pointercancel MSPointerUp MSPointerCancel"]},reset:function(){this.pointers={}}},e.Gestures.utils={extend:function(e,t,n){for(var i in t)void 0!==e[i]&&n||(e[i]=t[i]);return e},hasParent:function(e,t){for(;e;){if(e==t)return!0;e=e.parentNode}return!1},getCenter:function(e){for(var t=[],n=[],i=0,r=e.length;r>i;i++)t.push(e[i].pageX),n.push(e[i].pageY);return{pageX:(Math.min.apply(Math,t)+Math.max.apply(Math,t))/2,pageY:(Math.min.apply(Math,n)+Math.max.apply(Math,n))/2}},getVelocity:function(e,t,n){return{x:Math.abs(t/e)||0,y:Math.abs(n/e)||0}},getAngle:function(e,t){var n=t.pageY-e.pageY,i=t.pageX-e.pageX;return 180*Math.atan2(n,i)/Math.PI},getDirection:function(t,n){var i=Math.abs(t.pageX-n.pageX),r=Math.abs(t.pageY-n.pageY);return i>=r?t.pageX-n.pageX>0?e.Gestures.DIRECTION_LEFT:e.Gestures.DIRECTION_RIGHT:t.pageY-n.pageY>0?e.Gestures.DIRECTION_UP:e.Gestures.DIRECTION_DOWN},getDistance:function(e,t){var n=t.pageX-e.pageX,i=t.pageY-e.pageY;return Math.sqrt(n*n+i*i)},getScale:function(e,t){return e.length>=2&&t.length>=2?this.getDistance(t[0],t[1])/this.getDistance(e[0],e[1]):1},getRotation:function(e,t){return e.length>=2&&t.length>=2?this.getAngle(t[1],t[0])-this.getAngle(e[1],e[0]):0},isVertical:function(t){return t==e.Gestures.DIRECTION_UP||t==e.Gestures.DIRECTION_DOWN},stopDefaultBrowserBehavior:function(e,t){e&&e.classList&&(e.classList.add(t),e.onselectstart=function(){return!1})}},e.Gestures.detection={gestures:[],current:null,previous:null,stopped:!1,startDetect:function(t,n){this.current||(this.stopped=!1,this.current={inst:t,startEvent:e.Gestures.utils.extend({},n),lastEvent:!1,name:""},this.detect(n))},detect:function(t){if(this.current&&!this.stopped){t=this.extendEventData(t);for(var n=this.current.inst.options,i=0,r=this.gestures.length;r>i;i++){var o=this.gestures[i];if(!this.stopped&&n[o.name]!==!1&&o.handler.call(o,t,this.current.inst)===!1){this.stopDetect();break}}return this.current&&(this.current.lastEvent=t),t.eventType==e.Gestures.EVENT_END&&!t.touches.length-1&&this.stopDetect(),t}},stopDetect:function(){this.previous=e.Gestures.utils.extend({},this.current),this.current=null,this.stopped=!0},extendEventData:function(t){var n=this.current.startEvent;if(n&&(t.touches.length!=n.touches.length||t.touches===n.touches)){n.touches=[];for(var i=0,r=t.touches.length;r>i;i++)n.touches.push(e.Gestures.utils.extend({},t.touches[i]))}var o=t.timeStamp-n.timeStamp,s=t.center.pageX-n.center.pageX,a=t.center.pageY-n.center.pageY,l=e.Gestures.utils.getVelocity(o,s,a);return e.Gestures.utils.extend(t,{deltaTime:o,deltaX:s,deltaY:a,velocityX:l.x,velocityY:l.y,distance:e.Gestures.utils.getDistance(n.center,t.center),angle:e.Gestures.utils.getAngle(n.center,t.center),direction:e.Gestures.utils.getDirection(n.center,t.center),scale:e.Gestures.utils.getScale(n.touches,t.touches),rotation:e.Gestures.utils.getRotation(n.touches,t.touches),startEvent:n}),t},register:function(t){var n=t.defaults||{};return void 0===n[t.name]&&(n[t.name]=!0),e.Gestures.utils.extend(e.Gestures.defaults,n,!0),t.index=t.index||1e3,this.gestures.push(t),this.gestures.sort(function(e,t){return e.index<t.index?-1:e.index>t.index?1:0}),this.gestures}},e.Gestures.gestures=e.Gestures.gestures||{},e.Gestures.gestures.Hold={name:"hold",index:10,defaults:{hold_timeout:500,hold_threshold:1},timer:null,handler:function(t,n){switch(t.eventType){case e.Gestures.EVENT_START:clearTimeout(this.timer),e.Gestures.detection.current.name=this.name,this.timer=setTimeout(function(){"hold"==e.Gestures.detection.current.name&&(e.tap.cancelClick(),n.trigger("hold",t))},n.options.hold_timeout);break;case e.Gestures.EVENT_MOVE:t.distance>n.options.hold_threshold&&clearTimeout(this.timer);break;case e.Gestures.EVENT_END:clearTimeout(this.timer)}}},e.Gestures.gestures.Tap={name:"tap",index:100,defaults:{tap_max_touchtime:250,tap_max_distance:10,tap_always:!0,doubletap_distance:20,doubletap_interval:300},handler:function(t,n){if(t.eventType==e.Gestures.EVENT_END&&"touchcancel"!=t.srcEvent.type){var i=e.Gestures.detection.previous,r=!1;if(t.deltaTime>n.options.tap_max_touchtime||t.distance>n.options.tap_max_distance)return;i&&"tap"==i.name&&t.timeStamp-i.lastEvent.timeStamp<n.options.doubletap_interval&&t.distance<n.options.doubletap_distance&&(n.trigger("doubletap",t),r=!0),(!r||n.options.tap_always)&&(e.Gestures.detection.current.name="tap",n.trigger("tap",t))}}},e.Gestures.gestures.Swipe={name:"swipe",index:40,defaults:{swipe_max_touches:1,swipe_velocity:.7},handler:function(t,n){if(t.eventType==e.Gestures.EVENT_END){if(n.options.swipe_max_touches>0&&t.touches.length>n.options.swipe_max_touches)return;(t.velocityX>n.options.swipe_velocity||t.velocityY>n.options.swipe_velocity)&&(n.trigger(this.name,t),n.trigger(this.name+t.direction,t))}}},e.Gestures.gestures.Drag={name:"drag",index:50,defaults:{drag_min_distance:10,correct_for_drag_min_distance:!0,drag_max_touches:1,drag_block_horizontal:!0,drag_block_vertical:!0,drag_lock_to_axis:!1,drag_lock_min_distance:25},triggered:!1,handler:function(t,n){if(e.Gestures.detection.current.name!=this.name&&this.triggered)return n.trigger(this.name+"end",t),void(this.triggered=!1);if(!(n.options.drag_max_touches>0&&t.touches.length>n.options.drag_max_touches))switch(t.eventType){case e.Gestures.EVENT_START:this.triggered=!1;break;case e.Gestures.EVENT_MOVE:if(t.distance<n.options.drag_min_distance&&e.Gestures.detection.current.name!=this.name)return;if(e.Gestures.detection.current.name!=this.name&&(e.Gestures.detection.current.name=this.name,n.options.correct_for_drag_min_distance)){var i=Math.abs(n.options.drag_min_distance/t.distance);e.Gestures.detection.current.startEvent.center.pageX+=t.deltaX*i,e.Gestures.detection.current.startEvent.center.pageY+=t.deltaY*i,t=e.Gestures.detection.extendEventData(t)}(e.Gestures.detection.current.lastEvent.drag_locked_to_axis||n.options.drag_lock_to_axis&&n.options.drag_lock_min_distance<=t.distance)&&(t.drag_locked_to_axis=!0);var r=e.Gestures.detection.current.lastEvent.direction;t.drag_locked_to_axis&&r!==t.direction&&(t.direction=e.Gestures.utils.isVertical(r)?t.deltaY<0?e.Gestures.DIRECTION_UP:e.Gestures.DIRECTION_DOWN:t.deltaX<0?e.Gestures.DIRECTION_LEFT:e.Gestures.DIRECTION_RIGHT),this.triggered||(n.trigger(this.name+"start",t),this.triggered=!0),n.trigger(this.name,t),n.trigger(this.name+t.direction,t),(n.options.drag_block_vertical&&e.Gestures.utils.isVertical(t.direction)||n.options.drag_block_horizontal&&!e.Gestures.utils.isVertical(t.direction))&&t.preventDefault();break;case e.Gestures.EVENT_END:this.triggered&&n.trigger(this.name+"end",t),this.triggered=!1}}},e.Gestures.gestures.Transform={name:"transform",index:45,defaults:{transform_min_scale:.01,transform_min_rotation:1,transform_always_block:!1},triggered:!1,handler:function(t,n){if(e.Gestures.detection.current.name!=this.name&&this.triggered)return n.trigger(this.name+"end",t),void(this.triggered=!1);if(!(t.touches.length<2))switch(n.options.transform_always_block&&t.preventDefault(),t.eventType){case e.Gestures.EVENT_START:this.triggered=!1;break;case e.Gestures.EVENT_MOVE:var i=Math.abs(1-t.scale),r=Math.abs(t.rotation);if(i<n.options.transform_min_scale&&r<n.options.transform_min_rotation)return;e.Gestures.detection.current.name=this.name,this.triggered||(n.trigger(this.name+"start",t),this.triggered=!0),n.trigger(this.name,t),r>n.options.transform_min_rotation&&n.trigger("rotate",t),i>n.options.transform_min_scale&&(n.trigger("pinch",t),n.trigger("pinch"+(t.scale<1?"in":"out"),t));break;case e.Gestures.EVENT_END:this.triggered&&n.trigger(this.name+"end",t),this.triggered=!1}}},e.Gestures.gestures.Touch={name:"touch",index:-1/0,defaults:{prevent_default:!1,prevent_mouseevents:!1},handler:function(t,n){return n.options.prevent_mouseevents&&t.pointerType==e.Gestures.POINTER_MOUSE?void t.stopDetect():(n.options.prevent_default&&t.preventDefault(),void(t.eventType==e.Gestures.EVENT_START&&n.trigger(this.name,t)))}},e.Gestures.gestures.Release={name:"release",index:1/0,handler:function(t,n){t.eventType==e.Gestures.EVENT_END&&n.trigger(this.name,t)}}}(window.ionic),function(e,t,n){function i(){n.Platform.isWebView()?t.addEventListener("deviceready",r,!1):r(),l&&e.removeEventListener("load",i,!1)}function r(){n.Platform.isReady=!0,n.Platform.detect();for(var e=0;e<h.length;e++)h[e]();h=[],n.trigger("platformready",{target:t}),n.requestAnimationFrame(function(){t.body.classList.add("platform-ready")})}var o="ios",s="android",a="windowsphone";n.Platform={navigator:e.navigator,isReady:!1,isFullScreen:!1,platforms:null,grade:null,ua:navigator.userAgent,ready:function(e){this.isReady?e():h.push(e)},detect:function(){n.Platform._checkPlatforms(),n.requestAnimationFrame(function(){for(var e=0;e<n.Platform.platforms.length;e++)t.body.classList.add("platform-"+n.Platform.platforms[e])})},setGrade:function(e){var i=this.grade;this.grade=e,n.requestAnimationFrame(function(){i&&t.body.classList.remove("grade-"+i),t.body.classList.add("grade-"+e)})},device:function(){return e.device||{}},_checkPlatforms:function(){this.platforms=[];var e="a";this.isWebView()?(this.platforms.push("webview"),this.platforms.push("cordova")):this.platforms.push("browser"),this.isIPad()&&this.platforms.push("ipad");var t=this.platform();if(t){this.platforms.push(t);var n=this.version();if(n){var i=n.toString();i.indexOf(".")>0?i=i.replace(".","_"):i+="_0",this.platforms.push(t+i.split("_")[0]),this.platforms.push(t+i),this.isAndroid()&&4.4>n?e=4>n?"c":"b":this.isWindowsPhone()&&(e="b")}}this.setGrade(e)},isWebView:function(){return!(!e.cordova&&!e.PhoneGap&&!e.phonegap)},isIPad:function(){return/iPad/i.test(n.Platform.navigator.platform)?!0:/iPad/i.test(this.ua)},isIOS:function(){return this.is(o)},isAndroid:function(){return this.is(s)},isWindowsPhone:function(){return this.is(a)},platform:function(){return null===c&&this.setPlatform(this.device().platform),c},setPlatform:function(e){c="undefined"!=typeof e&&null!==e&&e.length?e.toLowerCase():this.ua.indexOf("Android")>0?s:this.ua.indexOf("iPhone")>-1||this.ua.indexOf("iPad")>-1||this.ua.indexOf("iPod")>-1?o:this.ua.indexOf("Windows Phone")>-1?a:n.Platform.navigator.platform&&navigator.platform.toLowerCase().split(" ")[0]||""},version:function(){return null===u&&this.setVersion(this.device().version),u},setVersion:function(e){if("undefined"!=typeof e&&null!==e&&(e=e.split("."),e=parseFloat(e[0]+"."+(e.length>1?e[1]:0)),!isNaN(e)))return void(u=e);u=0;var t=this.platform(),n={android:/Android (\d+).(\d+)?/,ios:/OS (\d+)_(\d+)?/,windowsphone:/Windows Phone (\d+).(\d+)?/};n[t]&&(e=this.ua.match(n[t]),e&&e.length>2&&(u=parseFloat(e[1]+"."+e[2])))},is:function(e){if(e=e.toLowerCase(),this.platforms)for(var t=0;t<this.platforms.length;t++)if(this.platforms[t]===e)return!0;var n=this.platform();return n?n===e.toLowerCase():this.ua.toLowerCase().indexOf(e)>=0},exitApp:function(){this.ready(function(){navigator.app&&navigator.app.exitApp&&navigator.app.exitApp()})},showStatusBar:function(i){this._showStatusBar=i,this.ready(function(){n.requestAnimationFrame(function(){n.Platform._showStatusBar?(e.StatusBar&&e.StatusBar.show(),t.body.classList.remove("status-bar-hide")):(e.StatusBar&&e.StatusBar.hide(),t.body.classList.add("status-bar-hide"))})})},fullScreen:function(e,i){this.isFullScreen=e!==!1,n.DomUtil.ready(function(){n.requestAnimationFrame(function(){panes=t.getElementsByClassName("pane");for(var e=0;e<panes.length;e++)panes[e].style.height=panes[e].offsetHeight+"px";n.Platform.isFullScreen?t.body.classList.add("fullscreen"):t.body.classList.remove("fullscreen")}),n.Platform.showStatusBar(i===!0)})}};var l,c=null,u=null,h=[];"complete"===t.readyState?i():(l=!0,e.addEventListener("load",i,!1)),e.addEventListener("load",i,!1)}(this,document,ionic),function(e,t){"use strict";t.CSS={},function(){var n,i=["webkitTransform","transform","-webkit-transform","webkit-transform","-moz-transform","moz-transform","MozTransform","mozTransform","msTransform"];for(n=0;n<i.length;n++)if(void 0!==e.documentElement.style[i[n]]){t.CSS.TRANSFORM=i[n];break}for(i=["webkitTransition","mozTransition","msTransition","transition"],n=0;n<i.length;n++)if(void 0!==e.documentElement.style[i[n]]){t.CSS.TRANSITION=i[n];break}}(),"classList"in e.documentElement||!Object.defineProperty||"undefined"==typeof HTMLElement||Object.defineProperty(HTMLElement.prototype,"classList",{get:function(){function e(e){return function(){var n,i=t.className.split(/\s+/);for(n=0;n<arguments.length;n++)e(i,i.indexOf(arguments[n]),arguments[n]);t.className=i.join(" ")}}var t=this;return{add:e(function(e,t,n){~t||e.push(n)}),remove:e(function(e,t){~t&&e.splice(t,1)}),toggle:e(function(e,t,n){~t?e.splice(t,1):e.push(n)}),contains:function(e){return!!~t.className.split(/\s+/).indexOf(e)},item:function(e){return t.className.split(/\s+/)[e]||null}}}})}(document,ionic);var k,Y,X,H,z,F,W,q,U="touchmove",B=6,Z=50,j={click:i,mousedown:r,mouseup:o,mousemove:s,touchstart:a,touchend:l,touchcancel:u,touchmove:c,pointerdown:a,pointerup:l,pointercancel:u,pointermove:c,MSPointerDown:a,MSPointerUp:l,MSPointerCancel:u,MSPointerMove:c,focusin:p,focusout:m};ionic.tap={register:function(t){return k=t,e("click",!0,!0),e("mouseup"),e("mousedown"),window.navigator.pointerEnabled?(e("pointerdown"),e("pointerup"),e("pointcancel"),U="pointermove"):window.navigator.msPointerEnabled?(e("MSPointerDown"),e("MSPointerUp"),e("MSPointerCancel"),U="MSPointerMove"):(e("touchstart"),e("touchend"),e("touchcancel")),e("focusin"),e("focusout"),function(){for(var t in j)e(t,!1);k=null,Y=null,X=!1,z=!1,F=null}},ignoreScrollStart:function(e){return e.defaultPrevented||/^(file|range)$/i.test(e.target.type)||"true"==(e.target.dataset?e.target.dataset.preventScroll:e.target.getAttribute("data-prevent-scroll"))||!!/^(object|embed)$/i.test(e.target.tagName)||ionic.tap.isElementTapDisabled(e.target)},isTextInput:function(e){return!!e&&("TEXTAREA"==e.tagName||"true"===e.contentEditable||"INPUT"==e.tagName&&!/^(radio|checkbox|range|file|submit|reset)$/i.test(e.type))},isDateInput:function(e){return!!e&&"INPUT"==e.tagName&&/^(date|time|datetime-local|month|week)$/i.test(e.type)},isLabelWithTextInput:function(e){var t=T(e,!1);return!!t&&ionic.tap.isTextInput(E(t))},containsOrIsTextInput:function(e){return ionic.tap.isTextInput(e)||ionic.tap.isLabelWithTextInput(e)},cloneFocusedInput:function(e){ionic.tap.hasCheckedClone||(ionic.tap.hasCheckedClone=!0,ionic.requestAnimationFrame(function(){var t=e.querySelector(":focus");if(ionic.tap.isTextInput(t)){var n=t.parentElement.querySelector(".cloned-text-input");n||(n=document.createElement(t.tagName),n.placeholder=t.placeholder,n.type=t.type,n.value=t.value,n.style=t.style,n.className=t.className,n.classList.add("cloned-text-input"),n.readOnly=!0,t.isContentEditable&&(n.contentEditable=t.contentEditable,n.innerHTML=t.innerHTML),t.parentElement.insertBefore(n,t),t.style.top=t.offsetTop,t.classList.add("previous-input-focus"))}}))},hasCheckedClone:!1,removeClonedInputs:function(e){ionic.tap.hasCheckedClone=!1,ionic.requestAnimationFrame(function(){var t,n=e.querySelectorAll(".cloned-text-input"),i=e.querySelectorAll(".previous-input-focus");for(t=0;t<n.length;t++)n[t].parentElement.removeChild(n[t]);for(t=0;t<i.length;t++)i[t].classList.remove("previous-input-focus"),i[t].style.top="",i[t].focus()})},requiresNativeClick:function(e){return!e||e.disabled||/^(file|range)$/i.test(e.type)||/^(object|video)$/i.test(e.tagName)||ionic.tap.isLabelContainingFileInput(e)?!0:ionic.tap.isElementTapDisabled(e)},isLabelContainingFileInput:function(e){var t=T(e);if("LABEL"!==t.tagName)return!1;var n=t.querySelector("input[type=file]");return n&&n.disabled===!1?!0:!1},isElementTapDisabled:function(e){if(e&&1===e.nodeType)for(var t=e;t;){if("true"==(t.dataset?t.dataset.tapDisabled:t.getAttribute("data-tap-disabled")))return!0;t=t.parentElement}return!1},setTolerance:function(e,t){B=e,Z=t},cancelClick:function(){z=!0},pointerCoord:function(e){var t={x:0,y:0};if(e){var n=e.touches&&e.touches.length?e.touches:[e],i=e.changedTouches&&e.changedTouches[0]||n[0];i&&(t.x=i.clientX||i.pageX||0,t.y=i.clientY||i.pageY||0)}return t}},ionic.DomUtil.ready(function(){var e="undefined"!=typeof angular?angular:null;(!e||e&&!e.scenario)&&ionic.tap.register(document)}),function(e,t){"use strict";function n(){o={},t.requestAnimationFrame(r)}function i(){for(var e in o)o[e]&&(o[e].classList.add(l),s[e]=o[e]);o={}}function r(){for(var e in s)s[e]&&(s[e].classList.remove(l),delete s[e])}var o={},s={},a=0,l="activated";t.activator={start:function(e){var n=this;t.requestAnimationFrame(function(){if(!t.tap.requiresNativeClick(e.target)){for(var r,s=e.target,l=0;6>l&&(s&&1===s.nodeType);l++){if(r&&s.classList.contains("item")){r=s;break}if("A"==s.tagName||"BUTTON"==s.tagName||s.hasAttribute("ng-click")){r=s;
break}if(s.classList.contains("button")){r=s;break}if(s.classList.contains("pane")||"BODY"==s.tagName||"ION-CONTENT"==s.tagName)break;s=s.parentElement}r&&(o[a]=r,"touchstart"===e.type?n._activateTimeout=setTimeout(i,80):t.requestAnimationFrame(i),a=a>19?0:a+1)}})},end:function(){clearTimeout(this._activateTimeout),setTimeout(n,200)}}}(document,ionic),function(e){var t=["0","0","0"];e.Utils={arrayMove:function(e,t,n){if(n>=e.length)for(var i=n-e.length;i--+1;)e.push(void 0);return e.splice(n,0,e.splice(t,1)[0]),e},proxy:function(e,t){var n=Array.prototype.slice.call(arguments,2);return function(){return e.apply(t,n.concat(Array.prototype.slice.call(arguments)))}},debounce:function(e,t,n){var i,r,o,s,a;return function(){o=this,r=arguments,s=new Date;var l=function(){var c=new Date-s;t>c?i=setTimeout(l,t-c):(i=null,n||(a=e.apply(o,r)))},c=n&&!i;return i||(i=setTimeout(l,t)),c&&(a=e.apply(o,r)),a}},throttle:function(e,t,n){var i,r,o,s=null,a=0;n||(n={});var l=function(){a=n.leading===!1?0:Date.now(),s=null,o=e.apply(i,r)};return function(){var c=Date.now();a||n.leading!==!1||(a=c);var u=t-(c-a);return i=this,r=arguments,0>=u?(clearTimeout(s),s=null,a=c,o=e.apply(i,r)):s||n.trailing===!1||(s=setTimeout(l,u)),o}},inherit:function(t,n){var i,r=this;i=t&&t.hasOwnProperty("constructor")?t.constructor:function(){return r.apply(this,arguments)},e.extend(i,r,n);var o=function(){this.constructor=i};return o.prototype=r.prototype,i.prototype=new o,t&&e.extend(i.prototype,t),i.__super__=r.prototype,i},extend:function(e){for(var t=Array.prototype.slice.call(arguments,1),n=0;n<t.length;n++){var i=t[n];if(i)for(var r in i)e[r]=i[r]}return e},nextUid:function(){for(var e,n=t.length;n;){if(n--,e=t[n].charCodeAt(0),57==e)return t[n]="A",t.join("");if(90!=e)return t[n]=String.fromCharCode(e+1),t.join("");t[n]="0"}return t.unshift("0"),t.join("")}},e.inherit=e.Utils.inherit,e.extend=e.Utils.extend,e.throttle=e.Utils.throttle,e.proxy=e.Utils.proxy,e.debounce=e.Utils.debounce}(window.ionic);var $,K,J,Q,et=C(),tt=0,nt="keyboard-open",it="scroll";ionic.keyboard={isOpen:!1,height:null,landscape:!1,hide:function(){clearTimeout(J),clearTimeout(K),clearTimeout(Q),ionic.keyboard.isOpen=!1,ionic.trigger("resetScrollView",{target:$},!0),ionic.requestAnimationFrame(function(){document.body.classList.remove(nt)}),window.navigator.msPointerEnabled?document.removeEventListener("MSPointerMove",N):document.removeEventListener("touchmove",N),document.removeEventListener("keydown",M),A()&&cordova.plugins.Keyboard.close()},show:function(){A()&&cordova.plugins.Keyboard.show()}},ionic.Platform.ready(function(){x(),setTimeout(x,999),window.navigator.msPointerEnabled?document.addEventListener("MSPointerDown",S,!1):document.addEventListener("touchstart",S,!1)});var rt,ot={};ionic.viewport={orientation:function(){return window.innerWidth>window.innerHeight?90:0}},ionic.Platform.ready(function(){O(),window.addEventListener("orientationchange",function(){setTimeout(R,1e3)},!1)}),function(e){"use strict";e.views.View=function(){this.initialize.apply(this,arguments)},e.views.View.inherit=e.inherit,e.extend(e.views.View.prototype,{initialize:function(){}})}(window.ionic);var st={effect:{}};!function(e){var t=Date.now||function(){return+new Date},n=60,i=1e3,r={},o=1;st.effect.Animate={requestAnimationFrame:function(){var t=e.requestAnimationFrame||e.webkitRequestAnimationFrame||e.mozRequestAnimationFrame||e.oRequestAnimationFrame,n=!!t;if(t&&!/requestAnimationFrame\(\)\s*\{\s*\[native code\]\s*\}/i.test(t.toString())&&(n=!1),n)return function(e,n){t(e,n)};var i=60,r={},o=0,s=1,a=null,l=+new Date;return function(e){var t=s++;return r[t]=e,o++,null===a&&(a=setInterval(function(){var e=+new Date,t=r;r={},o=0;for(var n in t)t.hasOwnProperty(n)&&(t[n](e),l=e);e-l>2500&&(clearInterval(a),a=null)},1e3/i)),t}}(),stop:function(e){var t=null!=r[e];return t&&(r[e]=null),t},isRunning:function(e){return null!=r[e]},start:function(e,s,a,l,c,u){var h=t(),d=h,_=0,f=0,p=o++;if(u||(u=document.body),p%20===0){var m={};for(var g in r)m[g]=!0;r=m}var v=function(o){var m=o!==!0,g=t();if(!r[p]||s&&!s(p))return r[p]=null,void(a&&a(n-f/((g-h)/i),p,!1));if(m)for(var T=Math.round((g-d)/(i/n))-1,E=0;E<Math.min(T,4);E++)v(!0),f++;l&&(_=(g-h)/l,_>1&&(_=1));var S=c?c(_):_;e(S,g,m)!==!1&&1!==_||!m?m&&(d=g,st.effect.Animate.requestAnimationFrame(v,u)):(r[p]=null,a&&a(n-f/((g-h)/i),p,1===_||null==l))};return r[p]=!0,st.effect.Animate.requestAnimationFrame(v,u),p}}}(this);!function(e){var t=function(){},n=function(e){return Math.pow(e-1,3)+1},i=function(e){return(e/=.5)<1?.5*Math.pow(e,3):.5*(Math.pow(e-2,3)+2)};e.views.Scroll=e.views.View.inherit({initialize:function(n){var i=this;this.__container=n.el,this.__content=n.el.firstElementChild,setTimeout(function(){i.__container&&i.__content&&(i.__container.scrollTop=0,i.__content.scrollTop=0)}),this.options={scrollingX:!1,scrollbarX:!0,scrollingY:!0,scrollbarY:!0,startX:0,startY:0,wheelDampen:6,minScrollbarSizeX:5,minScrollbarSizeY:5,scrollbarsFade:!0,scrollbarFadeDelay:300,scrollbarResizeFadeDelay:1e3,animating:!0,animationDuration:250,bouncing:!0,locking:!0,paging:!1,snapping:!1,zooming:!1,minZoom:.5,maxZoom:3,speedMultiplier:1,deceleration:.97,scrollingComplete:t,penetrationDeceleration:.03,penetrationAcceleration:.08,scrollEventInterval:10,getContentWidth:function(){return Math.max(i.__content.scrollWidth,i.__content.offsetWidth)},getContentHeight:function(){return Math.max(i.__content.scrollHeight,i.__content.offsetHeight+2*i.__content.offsetTop)}};for(var r in n)this.options[r]=n[r];this.hintResize=e.debounce(function(){i.resize()},1e3,!0),this.onScroll=function(){e.scroll.isScrolling?(clearTimeout(i.scrollTimer),i.scrollTimer=setTimeout(i.setScrollStop,80)):setTimeout(i.setScrollStart,50)},this.setScrollStart=function(){e.scroll.isScrolling=Math.abs(e.scroll.lastTop-i.__scrollTop)>1,clearTimeout(i.scrollTimer),i.scrollTimer=setTimeout(i.setScrollStop,80)},this.setScrollStop=function(){e.scroll.isScrolling=!1,e.scroll.lastTop=i.__scrollTop},this.triggerScrollEvent=e.throttle(function(){i.onScroll(),e.trigger("scroll",{scrollTop:i.__scrollTop,scrollLeft:i.__scrollLeft,target:i.__container})},this.options.scrollEventInterval),this.triggerScrollEndEvent=function(){e.trigger("scrollend",{scrollTop:i.__scrollTop,scrollLeft:i.__scrollLeft,target:i.__container})},this.__scrollLeft=this.options.startX,this.__scrollTop=this.options.startY,this.__callback=this.getRenderFn(),this.__initEventHandlers(),this.__createScrollbars()},run:function(){this.resize(),this.__fadeScrollbars("out",this.options.scrollbarResizeFadeDelay)},__isSingleTouch:!1,__isTracking:!1,__didDecelerationComplete:!1,__isGesturing:!1,__isDragging:!1,__isDecelerating:!1,__isAnimating:!1,__clientLeft:0,__clientTop:0,__clientWidth:0,__clientHeight:0,__contentWidth:0,__contentHeight:0,__snapWidth:100,__snapHeight:100,__refreshHeight:null,__refreshActive:!1,__refreshActivate:null,__refreshDeactivate:null,__refreshStart:null,__zoomLevel:1,__scrollLeft:0,__scrollTop:0,__maxScrollLeft:0,__maxScrollTop:0,__scheduledLeft:0,__scheduledTop:0,__scheduledZoom:0,__lastTouchLeft:null,__lastTouchTop:null,__lastTouchMove:null,__positions:null,__minDecelerationScrollLeft:null,__minDecelerationScrollTop:null,__maxDecelerationScrollLeft:null,__maxDecelerationScrollTop:null,__decelerationVelocityX:null,__decelerationVelocityY:null,__transformProperty:null,__perspectiveProperty:null,__indicatorX:null,__indicatorY:null,__scrollbarFadeTimeout:null,__didWaitForSize:null,__sizerTimeout:null,__initEventHandlers:function(){function t(e){return e.touches&&e.touches.length?e.touches:[{pageX:e.pageX,pageY:e.pageY}]}var n=this,i=this.__container;if(n.scrollChildIntoView=function(t){var r;if(!n.isScrolledIntoView){if(e.Platform.isIOS()||e.Platform.isFullScreen){r=i.getBoundingClientRect().bottom;var o=t.detail.viewportHeight-r,s=Math.max(0,t.detail.keyboardHeight-o);i.style.height=i.clientHeight-s+"px",i.style.overflow="visible",n.resize()}n.isScrolledIntoView=!0}if(t.detail.isElementUnderKeyboard){var a;a=e.Platform.isAndroid()&&!e.Platform.isFullScreen?e.Platform.version()<4.4?500:350:80,e.scroll.isScrolling=!0,setTimeout(function(){var o=.5*i.clientHeight;r=i.getBoundingClientRect().bottom;var s=t.detail.elementTop-r,a=s+o;a>0&&(e.tap.cloneFocusedInput(i,n),n.scrollBy(0,a,!0),n.onScroll())},a)}t.stopPropagation()},n.resetScrollView=function(){n.isScrolledIntoView&&(n.isScrolledIntoView=!1,i.style.height="",i.style.overflow="",n.resize(),e.scroll.isScrolling=!1)},i.addEventListener("scrollChildIntoView",n.scrollChildIntoView),i.addEventListener("resetScrollView",n.resetScrollView),n.touchStart=function(i){if(n.startCoordinates=e.tap.pointerCoord(i),!e.tap.ignoreScrollStart(i)){if(n.__isDown=!0,e.tap.containsOrIsTextInput(i.target)||"SELECT"===i.target.tagName)return void(n.__hasStarted=!1);n.__isSelectable=!0,n.__enableScrollY=!0,n.__hasStarted=!0,n.doTouchStart(t(i),i.timeStamp),i.preventDefault()}},n.touchMove=function(r){if(!(!n.__isDown||r.defaultPrevented||"TEXTAREA"===r.target.tagName&&r.target.parentElement.querySelector(":focus"))){if(!n.__hasStarted&&(e.tap.containsOrIsTextInput(r.target)||"SELECT"===r.target.tagName))return n.__hasStarted=!0,n.doTouchStart(t(r),r.timeStamp),void r.preventDefault();if(n.startCoordinates){var o=e.tap.pointerCoord(r);n.__isSelectable&&e.tap.isTextInput(r.target)&&Math.abs(n.startCoordinates.x-o.x)>20&&(n.__enableScrollY=!1,n.__isSelectable=!0),n.__enableScrollY&&Math.abs(n.startCoordinates.y-o.y)>10&&(n.__isSelectable=!1,e.tap.cloneFocusedInput(i,n))}n.doTouchMove(t(r),r.timeStamp,r.scale),n.__isDown=!0}},n.touchEnd=function(t){n.__isDown&&(n.doTouchEnd(t.timeStamp),n.__isDown=!1,n.__hasStarted=!1,n.__isSelectable=!0,n.__enableScrollY=!0,n.__isDragging||n.__isDecelerating||n.__isAnimating||e.tap.removeClonedInputs(i,n))},"ontouchstart"in window)i.addEventListener("touchstart",n.touchStart,!1),document.addEventListener("touchmove",n.touchMove,!1),document.addEventListener("touchend",n.touchEnd,!1),document.addEventListener("touchcancel",n.touchEnd,!1);else if(window.navigator.pointerEnabled)i.addEventListener("pointerdown",n.touchStart,!1),document.addEventListener("pointermove",n.touchMove,!1),document.addEventListener("pointerup",n.touchEnd,!1),document.addEventListener("pointercancel",n.touchEnd,!1);else if(window.navigator.msPointerEnabled)i.addEventListener("MSPointerDown",n.touchStart,!1),document.addEventListener("MSPointerMove",n.touchMove,!1),document.addEventListener("MSPointerUp",n.touchEnd,!1),document.addEventListener("MSPointerCancel",n.touchEnd,!1);else{var r=!1;n.mouseDown=function(i){e.tap.ignoreScrollStart(i)||"SELECT"===i.target.tagName||(n.doTouchStart(t(i),i.timeStamp),e.tap.isTextInput(i.target)||i.preventDefault(),r=!0)},n.mouseMove=function(e){r&&!e.defaultPrevented&&(n.doTouchMove(t(e),e.timeStamp),r=!0)},n.mouseUp=function(e){r&&(n.doTouchEnd(e.timeStamp),r=!1)},n.mouseWheel=e.animationFrameThrottle(function(t){var i=e.DomUtil.getParentOrSelfWithClass(t.target,"ionic-scroll");i===n.__container&&(n.hintResize(),n.scrollBy(t.wheelDeltaX/n.options.wheelDampen,-t.wheelDeltaY/n.options.wheelDampen),n.__fadeScrollbars("in"),clearTimeout(n.__wheelHideBarTimeout),n.__wheelHideBarTimeout=setTimeout(function(){n.__fadeScrollbars("out")},100))}),i.addEventListener("mousedown",n.mouseDown,!1),document.addEventListener("mousemove",n.mouseMove,!1),document.addEventListener("mouseup",n.mouseUp,!1),document.addEventListener("mousewheel",n.mouseWheel,!1)}},__cleanup:function(){var t=this.__container,n=this;t.removeEventListener("touchstart",n.touchStart),document.removeEventListener("touchmove",n.touchMove),document.removeEventListener("touchend",n.touchEnd),document.removeEventListener("touchcancel",n.touchCancel),t.removeEventListener("pointerdown",n.touchStart),document.removeEventListener("pointermove",n.touchMove),document.removeEventListener("pointerup",n.touchEnd),document.removeEventListener("pointercancel",n.touchEnd),t.removeEventListener("MSPointerDown",n.touchStart),document.removeEventListener("MSPointerMove",n.touchMove),document.removeEventListener("MSPointerUp",n.touchEnd),document.removeEventListener("MSPointerCancel",n.touchEnd),t.removeEventListener("mousedown",n.mouseDown),document.removeEventListener("mousemove",n.mouseMove),document.removeEventListener("mouseup",n.mouseUp),document.removeEventListener("mousewheel",n.mouseWheel),t.removeEventListener("scrollChildIntoView",n.scrollChildIntoView),t.removeEventListener("resetScrollView",n.resetScrollView),e.tap.removeClonedInputs(t,n),delete this.__container,delete this.__content,delete this.__indicatorX,delete this.__indicatorY,delete this.options.el,this.__callback=this.scrollChildIntoView=this.resetScrollView=angular.noop,this.mouseMove=this.mouseDown=this.mouseUp=this.mouseWheel=this.touchStart=this.touchMove=this.touchEnd=this.touchCancel=angular.noop,this.resize=this.scrollTo=this.zoomTo=this.__scrollingComplete=angular.noop,t=null},__createScrollbar:function(e){var t=document.createElement("div"),n=document.createElement("div");return n.className="scroll-bar-indicator scroll-bar-fade-out",t.className="h"==e?"scroll-bar scroll-bar-h":"scroll-bar scroll-bar-v",t.appendChild(n),t},__createScrollbars:function(){var e,t;this.options.scrollingX&&(e={el:this.__createScrollbar("h"),sizeRatio:1},e.indicator=e.el.children[0],this.options.scrollbarX&&this.__container.appendChild(e.el),this.__indicatorX=e),this.options.scrollingY&&(t={el:this.__createScrollbar("v"),sizeRatio:1},t.indicator=t.el.children[0],this.options.scrollbarY&&this.__container.appendChild(t.el),this.__indicatorY=t)},__resizeScrollbars:function(){var e=this;if(e.__indicatorX){var t=Math.max(Math.round(e.__clientWidth*e.__clientWidth/e.__contentWidth),20);t>e.__contentWidth&&(t=0),e.__indicatorX.size=t,e.__indicatorX.minScale=this.options.minScrollbarSizeX/t,e.__indicatorX.indicator.style.width=t+"px",e.__indicatorX.maxPos=e.__clientWidth-t,e.__indicatorX.sizeRatio=e.__maxScrollLeft?e.__indicatorX.maxPos/e.__maxScrollLeft:1}if(e.__indicatorY){var n=Math.max(Math.round(e.__clientHeight*e.__clientHeight/e.__contentHeight),20);n>e.__contentHeight&&(n=0),e.__indicatorY.size=n,e.__indicatorY.minScale=this.options.minScrollbarSizeY/n,e.__indicatorY.maxPos=e.__clientHeight-n,e.__indicatorY.indicator.style.height=n+"px",e.__indicatorY.sizeRatio=e.__maxScrollTop?e.__indicatorY.maxPos/e.__maxScrollTop:1}},__repositionScrollbars:function(){var e,t,n,i,r,o=this,s=0,a=0;o.__indicatorX&&(o.__indicatorY&&(s=10),i=Math.round(o.__indicatorX.sizeRatio*o.__scrollLeft)||0,t=o.__scrollLeft-(o.__maxScrollLeft-s),o.__scrollLeft<0?(widthScale=Math.max(o.__indicatorX.minScale,(o.__indicatorX.size-Math.abs(o.__scrollLeft))/o.__indicatorX.size),i=0,o.__indicatorX.indicator.style[o.__transformOriginProperty]="left center"):t>0?(widthScale=Math.max(o.__indicatorX.minScale,(o.__indicatorX.size-t)/o.__indicatorX.size),i=o.__indicatorX.maxPos-s,o.__indicatorX.indicator.style[o.__transformOriginProperty]="right center"):(i=Math.min(o.__maxScrollLeft,Math.max(0,i)),widthScale=1),o.__indicatorX.indicator.style[o.__transformProperty]="translate3d("+i+"px, 0, 0) scaleX("+widthScale+")"),o.__indicatorY&&(r=Math.round(o.__indicatorY.sizeRatio*o.__scrollTop)||0,o.__indicatorX&&(a=10),n=o.__scrollTop-(o.__maxScrollTop-a),o.__scrollTop<0?(e=Math.max(o.__indicatorY.minScale,(o.__indicatorY.size-Math.abs(o.__scrollTop))/o.__indicatorY.size),r=0,o.__indicatorY.indicator.style[o.__transformOriginProperty]="center top"):n>0?(e=Math.max(o.__indicatorY.minScale,(o.__indicatorY.size-n)/o.__indicatorY.size),r=o.__indicatorY.maxPos-a,o.__indicatorY.indicator.style[o.__transformOriginProperty]="center bottom"):(r=Math.min(o.__maxScrollTop,Math.max(0,r)),e=1),o.__indicatorY.indicator.style[o.__transformProperty]="translate3d(0,"+r+"px, 0) scaleY("+e+")")},__fadeScrollbars:function(e,t){var n=this;if(this.options.scrollbarsFade){var i="scroll-bar-fade-out";n.options.scrollbarsFade===!0&&(clearTimeout(n.__scrollbarFadeTimeout),"in"==e?(n.__indicatorX&&n.__indicatorX.indicator.classList.remove(i),n.__indicatorY&&n.__indicatorY.indicator.classList.remove(i)):n.__scrollbarFadeTimeout=setTimeout(function(){n.__indicatorX&&n.__indicatorX.indicator.classList.add(i),n.__indicatorY&&n.__indicatorY.indicator.classList.add(i)},t||n.options.scrollbarFadeDelay))}},__scrollingComplete:function(){var t=this;t.options.scrollingComplete(),e.tap.removeClonedInputs(t.__container,t),t.__fadeScrollbars("out")},resize:function(){this.__container&&this.options&&this.setDimensions(this.__container.clientWidth,this.__container.clientHeight,this.options.getContentWidth(),this.options.getContentHeight())},getRenderFn:function(){var e,t=this,n=this.__content,i=document.documentElement.style;"MozAppearance"in i?e="gecko":"WebkitAppearance"in i?e="webkit":"string"==typeof navigator.cpuClass&&(e="trident");var r,o={trident:"ms",gecko:"Moz",webkit:"Webkit",presto:"O"}[e],s=document.createElement("div"),a=o+"Perspective",l=o+"Transform",c=o+"TransformOrigin";return t.__perspectiveProperty=l,t.__transformProperty=l,t.__transformOriginProperty=c,s.style[a]!==r?function(e,i,r,o){n.style[l]="translate3d("+-e+"px,"+-i+"px,0) scale("+r+")",t.__repositionScrollbars(),o||t.triggerScrollEvent()}:s.style[l]!==r?function(e,i,r,o){n.style[l]="translate("+-e+"px,"+-i+"px) scale("+r+")",t.__repositionScrollbars(),o||t.triggerScrollEvent()}:function(e,i,r,o){n.style.marginLeft=e?-e/r+"px":"",n.style.marginTop=i?-i/r+"px":"",n.style.zoom=r||"",t.__repositionScrollbars(),o||t.triggerScrollEvent()}},setDimensions:function(e,t,n,i){var r=this;e===+e&&(r.__clientWidth=e),t===+t&&(r.__clientHeight=t),n===+n&&(r.__contentWidth=n),i===+i&&(r.__contentHeight=i),r.__computeScrollMax(),r.__resizeScrollbars(),r.scrollTo(r.__scrollLeft,r.__scrollTop,!0,null,!0)},setPosition:function(e,t){var n=this;n.__clientLeft=e||0,n.__clientTop=t||0},setSnapSize:function(e,t){var n=this;n.__snapWidth=e,n.__snapHeight=t},activatePullToRefresh:function(t,n,i,r,o,s,a){var l=this;l.__refreshHeight=t,l.__refreshActivate=function(){e.requestAnimationFrame(n)},l.__refreshDeactivate=function(){e.requestAnimationFrame(i)},l.__refreshStart=function(){e.requestAnimationFrame(r)},l.__refreshShow=function(){e.requestAnimationFrame(o)},l.__refreshHide=function(){e.requestAnimationFrame(s)},l.__refreshTail=function(){e.requestAnimationFrame(a)},l.__refreshTailTime=100,l.__minSpinTime=600},triggerPullToRefresh:function(){this.__publish(this.__scrollLeft,-this.__refreshHeight,this.__zoomLevel,!0);var e=new Date;self.refreshStartTime=e.getTime(),this.__refreshStart&&this.__refreshStart()},finishPullToRefresh:function(){var e=this,t=new Date,n=0;e.refreshStartTime+e.__minSpinTime>t.getTime()&&(n=e.refreshStartTime+e.__minSpinTime-t.getTime()),setTimeout(function(){e.__refreshTail&&e.__refreshTail(),setTimeout(function(){e.__refreshActive=!1,e.__refreshDeactivate&&e.__refreshDeactivate(),e.scrollTo(e.__scrollLeft,e.__scrollTop,!0)},e.__refreshTailTime)},n)},getValues:function(){var e=this;return{left:e.__scrollLeft,top:e.__scrollTop,zoom:e.__zoomLevel}},getScrollMax:function(){var e=this;return{left:e.__maxScrollLeft,top:e.__maxScrollTop}},zoomTo:function(e,t,n,i){var r=this;if(!r.options.zooming)throw new Error("Zooming is not enabled!");r.__isDecelerating&&(st.effect.Animate.stop(r.__isDecelerating),r.__isDecelerating=!1);var o=r.__zoomLevel;null==n&&(n=r.__clientWidth/2),null==i&&(i=r.__clientHeight/2),e=Math.max(Math.min(e,r.options.maxZoom),r.options.minZoom),r.__computeScrollMax(e);var s=(n+r.__scrollLeft)*e/o-n,a=(i+r.__scrollTop)*e/o-i;s>r.__maxScrollLeft?s=r.__maxScrollLeft:0>s&&(s=0),a>r.__maxScrollTop?a=r.__maxScrollTop:0>a&&(a=0),r.__publish(s,a,e,t)},zoomBy:function(e,t,n,i){var r=this;r.zoomTo(r.__zoomLevel*e,t,n,i)},scrollTo:function(e,t,n,i,r){var o=this;if(o.__isDecelerating&&(st.effect.Animate.stop(o.__isDecelerating),o.__isDecelerating=!1),null!=i&&i!==o.__zoomLevel){if(!o.options.zooming)throw new Error("Zooming is not enabled!");e*=i,t*=i,o.__computeScrollMax(i)}else i=o.__zoomLevel;o.options.scrollingX?o.options.paging?e=Math.round(e/o.__clientWidth)*o.__clientWidth:o.options.snapping&&(e=Math.round(e/o.__snapWidth)*o.__snapWidth):e=o.__scrollLeft,o.options.scrollingY?o.options.paging?t=Math.round(t/o.__clientHeight)*o.__clientHeight:o.options.snapping&&(t=Math.round(t/o.__snapHeight)*o.__snapHeight):t=o.__scrollTop,e=Math.max(Math.min(o.__maxScrollLeft,e),0),t=Math.max(Math.min(o.__maxScrollTop,t),0),e===o.__scrollLeft&&t===o.__scrollTop&&(n=!1),o.__publish(e,t,i,n,r)},scrollBy:function(e,t,n){var i=this,r=i.__isAnimating?i.__scheduledLeft:i.__scrollLeft,o=i.__isAnimating?i.__scheduledTop:i.__scrollTop;i.scrollTo(r+(e||0),o+(t||0),n)},doMouseZoom:function(e,t,n,i){var r=this,o=e>0?.97:1.03;return r.zoomTo(r.__zoomLevel*o,!1,n-r.__clientLeft,i-r.__clientTop)},doTouchStart:function(e,t){this.hintResize(),t instanceof Date&&(t=t.valueOf()),"number"!=typeof t&&(t=Date.now());var n=this;n.__interruptedAnimation=!0,n.__isDecelerating&&(st.effect.Animate.stop(n.__isDecelerating),n.__isDecelerating=!1,n.__interruptedAnimation=!0),n.__isAnimating&&(st.effect.Animate.stop(n.__isAnimating),n.__isAnimating=!1,n.__interruptedAnimation=!0);var i,r,o=1===e.length;o?(i=e[0].pageX,r=e[0].pageY):(i=Math.abs(e[0].pageX+e[1].pageX)/2,r=Math.abs(e[0].pageY+e[1].pageY)/2),n.__initialTouchLeft=i,n.__initialTouchTop=r,n.__initialTouches=e,n.__zoomLevelStart=n.__zoomLevel,n.__lastTouchLeft=i,n.__lastTouchTop=r,n.__lastTouchMove=t,n.__lastScale=1,n.__enableScrollX=!o&&n.options.scrollingX,n.__enableScrollY=!o&&n.options.scrollingY,n.__isTracking=!0,n.__didDecelerationComplete=!1,n.__isDragging=!o,n.__isSingleTouch=o,n.__positions=[]},doTouchMove:function(e,t,n){t instanceof Date&&(t=t.valueOf()),"number"!=typeof t&&(t=Date.now());var i=this;if(i.__isTracking){var r,o;2===e.length?(r=Math.abs(e[0].pageX+e[1].pageX)/2,o=Math.abs(e[0].pageY+e[1].pageY)/2,!n&&i.options.zooming&&(n=i.__getScale(i.__initialTouches,e))):(r=e[0].pageX,o=e[0].pageY);var s=i.__positions;if(i.__isDragging){var a=r-i.__lastTouchLeft,l=o-i.__lastTouchTop,c=i.__scrollLeft,u=i.__scrollTop,h=i.__zoomLevel;if(null!=n&&i.options.zooming){var d=h;if(h=h/i.__lastScale*n,h=Math.max(Math.min(h,i.options.maxZoom),i.options.minZoom),d!==h){var _=r-i.__clientLeft,f=o-i.__clientTop;c=(_+c)*h/d-_,u=(f+u)*h/d-f,i.__computeScrollMax(h)}}if(i.__enableScrollX){c-=a*this.options.speedMultiplier;var p=i.__maxScrollLeft;(c>p||0>c)&&(i.options.bouncing?c+=a/2*this.options.speedMultiplier:c=c>p?p:0)}if(i.__enableScrollY){u-=l*this.options.speedMultiplier;var m=i.__maxScrollTop;u>m||0>u?i.options.bouncing||i.__refreshHeight&&0>u?(u+=l/2*this.options.speedMultiplier,i.__enableScrollX||null==i.__refreshHeight||(0>u?(i.__refreshHidden=!1,i.__refreshShow()):(i.__refreshHide(),i.__refreshHidden=!0),!i.__refreshActive&&u<=-i.__refreshHeight?(i.__refreshActive=!0,i.__refreshActivate&&i.__refreshActivate()):i.__refreshActive&&u>-i.__refreshHeight&&(i.__refreshActive=!1,i.__refreshDeactivate&&i.__refreshDeactivate()))):u=u>m?m:0:i.__refreshHeight&&!i.__refreshHidden&&(i.__refreshHide(),i.__refreshHidden=!0)}s.length>60&&s.splice(0,30),s.push(c,u,t),i.__publish(c,u,h)}else{var g=i.options.locking?3:0,v=5,T=Math.abs(r-i.__initialTouchLeft),E=Math.abs(o-i.__initialTouchTop);i.__enableScrollX=i.options.scrollingX&&T>=g,i.__enableScrollY=i.options.scrollingY&&E>=g,s.push(i.__scrollLeft,i.__scrollTop,t),i.__isDragging=(i.__enableScrollX||i.__enableScrollY)&&(T>=v||E>=v),i.__isDragging&&(i.__interruptedAnimation=!1,i.__fadeScrollbars("in"))}i.__lastTouchLeft=r,i.__lastTouchTop=o,i.__lastTouchMove=t,i.__lastScale=n}},doTouchEnd:function(t){t instanceof Date&&(t=t.valueOf()),"number"!=typeof t&&(t=Date.now());var n=this;if(n.__isTracking){if(n.__isTracking=!1,n.__isDragging)if(n.__isDragging=!1,n.__isSingleTouch&&n.options.animating&&t-n.__lastTouchMove<=100){for(var i=n.__positions,r=i.length-1,o=r,s=r;s>0&&i[s]>n.__lastTouchMove-100;s-=3)o=s;if(o!==r){var a=i[r]-i[o],l=n.__scrollLeft-i[o-2],c=n.__scrollTop-i[o-1];n.__decelerationVelocityX=l/a*(1e3/60),n.__decelerationVelocityY=c/a*(1e3/60);var u=n.options.paging||n.options.snapping?4:1;(Math.abs(n.__decelerationVelocityX)>u||Math.abs(n.__decelerationVelocityY)>u)&&(n.__refreshActive||n.__startDeceleration(t))}else n.__scrollingComplete()}else t-n.__lastTouchMove>100&&n.__scrollingComplete();if(!n.__isDecelerating)if(n.__refreshActive&&n.__refreshStart){n.__publish(n.__scrollLeft,-n.__refreshHeight,n.__zoomLevel,!0);var h=new Date;n.refreshStartTime=h.getTime(),n.__refreshStart&&n.__refreshStart(),e.Platform.isAndroid()||n.__startDeceleration()}else(n.__interruptedAnimation||n.__isDragging)&&n.__scrollingComplete(),n.scrollTo(n.__scrollLeft,n.__scrollTop,!0,n.__zoomLevel),n.__refreshActive&&(n.__refreshActive=!1,n.__refreshDeactivate&&n.__refreshDeactivate());n.__positions.length=0}},__publish:function(e,t,r,o,s){var a=this,l=a.__isAnimating;if(l&&(st.effect.Animate.stop(l),a.__isAnimating=!1),o&&a.options.animating){a.__scheduledLeft=e,a.__scheduledTop=t,a.__scheduledZoom=r;var c=a.__scrollLeft,u=a.__scrollTop,h=a.__zoomLevel,d=e-c,_=t-u,f=r-h,p=function(e,t,n){n&&(a.__scrollLeft=c+d*e,a.__scrollTop=u+_*e,a.__zoomLevel=h+f*e,a.__callback&&a.__callback(a.__scrollLeft,a.__scrollTop,a.__zoomLevel,s))},m=function(e){return a.__isAnimating===e},g=function(e,t,n){t===a.__isAnimating&&(a.__isAnimating=!1),(a.__didDecelerationComplete||n)&&a.__scrollingComplete(),a.options.zooming&&a.__computeScrollMax()};a.__isAnimating=st.effect.Animate.start(p,m,g,a.options.animationDuration,l?n:i)}else a.__scheduledLeft=a.__scrollLeft=e,a.__scheduledTop=a.__scrollTop=t,a.__scheduledZoom=a.__zoomLevel=r,a.__callback&&a.__callback(e,t,r,s),a.options.zooming&&a.__computeScrollMax()},__computeScrollMax:function(e){var t=this;null==e&&(e=t.__zoomLevel),t.__maxScrollLeft=Math.max(t.__contentWidth*e-t.__clientWidth,0),t.__maxScrollTop=Math.max(t.__contentHeight*e-t.__clientHeight,0),t.__didWaitForSize||t.__maxScrollLeft||t.__maxScrollTop||(t.__didWaitForSize=!0,t.__waitForSize())},__waitForSize:function(){var e=this;clearTimeout(e.__sizerTimeout);var t=function(){e.resize(),e.options.scrollingX&&!e.__maxScrollLeft||e.options.scrollingY&&!e.__maxScrollTop};t(),e.__sizerTimeout=setTimeout(t,1e3)},__startDeceleration:function(){var e=this;if(e.options.paging){var t=Math.max(Math.min(e.__scrollLeft,e.__maxScrollLeft),0),n=Math.max(Math.min(e.__scrollTop,e.__maxScrollTop),0),i=e.__clientWidth,r=e.__clientHeight;e.__minDecelerationScrollLeft=Math.floor(t/i)*i,e.__minDecelerationScrollTop=Math.floor(n/r)*r,e.__maxDecelerationScrollLeft=Math.ceil(t/i)*i,e.__maxDecelerationScrollTop=Math.ceil(n/r)*r}else e.__minDecelerationScrollLeft=0,e.__minDecelerationScrollTop=0,e.__maxDecelerationScrollLeft=e.__maxScrollLeft,e.__maxDecelerationScrollTop=e.__maxScrollTop,e.__refreshActive&&(e.__minDecelerationScrollTop=-1*e.__refreshHeight);var o=function(t,n,i){e.__stepThroughDeceleration(i)};e.__minVelocityToKeepDecelerating=e.options.snapping?4:.1;var s=function(){var t=Math.abs(e.__decelerationVelocityX)>=e.__minVelocityToKeepDecelerating||Math.abs(e.__decelerationVelocityY)>=e.__minVelocityToKeepDecelerating;return t||(e.__didDecelerationComplete=!0,e.options.bouncing&&!e.__refreshActive&&e.scrollTo(Math.min(Math.max(e.__scrollLeft,0),e.__maxScrollLeft),Math.min(Math.max(e.__scrollTop,0),e.__maxScrollTop),e.__refreshActive)),t},a=function(){e.__isDecelerating=!1,e.__didDecelerationComplete&&e.__scrollingComplete(),e.options.paging&&e.scrollTo(e.__scrollLeft,e.__scrollTop,e.options.snapping)};e.__isDecelerating=st.effect.Animate.start(o,s,a)},__stepThroughDeceleration:function(e){var t=this,n=t.__scrollLeft+t.__decelerationVelocityX,i=t.__scrollTop+t.__decelerationVelocityY;if(!t.options.bouncing){var r=Math.max(Math.min(t.__maxDecelerationScrollLeft,n),t.__minDecelerationScrollLeft);r!==n&&(n=r,t.__decelerationVelocityX=0);var o=Math.max(Math.min(t.__maxDecelerationScrollTop,i),t.__minDecelerationScrollTop);o!==i&&(i=o,t.__decelerationVelocityY=0)}if(e?t.__publish(n,i,t.__zoomLevel):(t.__scrollLeft=n,t.__scrollTop=i),!t.options.paging){var s=t.options.deceleration;t.__decelerationVelocityX*=s,t.__decelerationVelocityY*=s}if(t.options.bouncing){var a=0,l=0,c=t.options.penetrationDeceleration,u=t.options.penetrationAcceleration;if(n<t.__minDecelerationScrollLeft?a=t.__minDecelerationScrollLeft-n:n>t.__maxDecelerationScrollLeft&&(a=t.__maxDecelerationScrollLeft-n),i<t.__minDecelerationScrollTop?l=t.__minDecelerationScrollTop-i:i>t.__maxDecelerationScrollTop&&(l=t.__maxDecelerationScrollTop-i),0!==a){var h=a*t.__decelerationVelocityX<=t.__minDecelerationScrollLeft;h&&(t.__decelerationVelocityX+=a*c);var d=Math.abs(t.__decelerationVelocityX)<=t.__minVelocityToKeepDecelerating;(!h||d)&&(t.__decelerationVelocityX=a*u)}if(0!==l){var _=l*t.__decelerationVelocityY<=t.__minDecelerationScrollTop;_&&(t.__decelerationVelocityY+=l*c);var f=Math.abs(t.__decelerationVelocityY)<=t.__minVelocityToKeepDecelerating;(!_||f)&&(t.__decelerationVelocityY=l*u)}}},__getDistance:function(e,t){var n=t.pageX-e.pageX,i=t.pageY-e.pageY;return Math.sqrt(n*n+i*i)},__getScale:function(e,t){var n=this;return e.length>=2&&t.length>=2?n.__getDistance(t[0],t[1])/n.__getDistance(e[0],e[1]):1}}),e.scroll={isScrolling:!1,lastTop:0}}(ionic),function(e){"use strict";e.views.HeaderBar=e.views.View.inherit({initialize:function(t){this.el=t.el,e.extend(this,{alignTitle:"center"},t),this.align()},align:function(t){t||(t=this.alignTitle);var n=this.el.querySelector(".title");if(n){var i=this;e.requestAnimationFrame(function(){var r,o,s,a=i.el.childNodes,l=0,c=0,u=!1;for(r=0;r<a.length;r++)if(o=a[r],o.tagName&&"h1"==o.tagName.toLowerCase())u=!0;else{if(s=null,3==o.nodeType){var h=e.DomUtil.getTextBounds(o);h&&(s=h.width)}else 1==o.nodeType&&(s=o.offsetWidth);s&&(u?c+=s:l+=s)}var d=Math.max(l,c)+10;n.style.left=n.style.right="","center"==t?(d>10&&(n.style.left=d+"px",n.style.right=d+"px"),n.offsetWidth<n.scrollWidth&&c>0&&(n.style.right=c+5+"px")):"left"==t?(n.classList.add("title-left"),l>0&&(n.style.left=l+15+"px")):"right"==t&&(n.classList.add("title-right"),c>0&&(n.style.right=c+15+"px"))})}}})}(ionic),function(e){"use strict";var t="item",n="item-content",i="item-sliding",r="item-options",o="item-placeholder",s="item-reordering",a="item-reorder",l=function(){};l.prototype={start:function(){},drag:function(){},end:function(){},isSameItem:function(){return!1}};var c=function(e){this.dragThresholdX=e.dragThresholdX||10,this.el=e.el,this.canSwipe=e.canSwipe};c.prototype=new l,c.prototype.start=function(o){var s,a,l,c;this.canSwipe()&&(s=o.target.classList.contains(n)?o.target:o.target.classList.contains(t)?o.target.querySelector("."+n):e.DomUtil.getParentWithClass(o.target,n),s&&(s.classList.remove(i),l=parseFloat(s.style[e.CSS.TRANSFORM].replace("translate3d(","").split(",")[0])||0,a=s.parentNode.querySelector("."+r),a&&(a.classList.remove("invisible"),c=a.offsetWidth,this._currentDrag={buttons:a,buttonsWidth:c,content:s,startOffsetX:l})))},c.prototype.isSameItem=function(e){return e._lastDrag&&this._currentDrag?this._currentDrag.content==e._lastDrag.content:!1},c.prototype.clean=function(){var t=this._lastDrag;t&&(t.content.style[e.CSS.TRANSITION]="",t.content.style[e.CSS.TRANSFORM]="",e.requestAnimationFrame(function(){setTimeout(function(){t.buttons&&t.buttons.classList.add("invisible")},250)}))},c.prototype.drag=e.animationFrameThrottle(function(t){var n;if(this._currentDrag&&(!this._isDragging&&(Math.abs(t.gesture.deltaX)>this.dragThresholdX||Math.abs(this._currentDrag.startOffsetX)>0)&&(this._isDragging=!0),this._isDragging)){n=this._currentDrag.buttonsWidth;var i=Math.min(0,this._currentDrag.startOffsetX+t.gesture.deltaX);-n>i&&(i=Math.min(-n,-n+.4*(t.gesture.deltaX+n))),this._currentDrag.content.style[e.CSS.TRANSFORM]="translate3d("+i+"px, 0, 0)",this._currentDrag.content.style[e.CSS.TRANSITION]="none"
}}),c.prototype.end=function(t,n){var i=this;if(!this._currentDrag)return void(n&&n());var r=-this._currentDrag.buttonsWidth;t.gesture.deltaX>-(this._currentDrag.buttonsWidth/2)&&("left"==t.gesture.direction&&Math.abs(t.gesture.velocityX)<.3?r=0:"right"==t.gesture.direction&&(r=0)),e.requestAnimationFrame(function(){if(0===r){i._currentDrag.content.style[e.CSS.TRANSFORM]="";var t=i._currentDrag.buttons;setTimeout(function(){t&&t.classList.add("invisible")},250)}else i._currentDrag.content.style[e.CSS.TRANSFORM]="translate3d("+r+"px, 0, 0)";i._currentDrag.content.style[e.CSS.TRANSITION]="",i._lastDrag=i._currentDrag,i._currentDrag=null,n&&n()})};var u=function(e){if(this.dragThresholdY=e.dragThresholdY||0,this.onReorder=e.onReorder,this.listEl=e.listEl,this.el=e.el,this.scrollEl=e.scrollEl,this.scrollView=e.scrollView,this.listElTrueTop=0,this.listEl.offsetParent){var t=this.listEl;do this.listElTrueTop+=t.offsetTop,t=t.offsetParent;while(t)}};u.prototype=new l,u.prototype._moveElement=function(t){var n=t.gesture.center.pageY+this.scrollView.getValues().top-this._currentDrag.elementHeight/2-this.listElTrueTop;this.el.style[e.CSS.TRANSFORM]="translate3d(0, "+n+"px, 0)"},u.prototype.start=function(t){var n=e.DomUtil.getChildIndex(this.el,this.el.nodeName.toLowerCase()),i=this.el.scrollHeight,r=this.el.cloneNode(!0);r.classList.add(o),this.el.parentNode.insertBefore(r,this.el),this.el.classList.add(s),this._currentDrag={elementHeight:i,startIndex:n,placeholder:r,scrollHeight:scroll,list:r.parentNode},this._moveElement(t)},u.prototype.drag=e.animationFrameThrottle(function(t){var n=this;if(this._currentDrag){var i=0,r=t.gesture.center.pageY,o=this.listElTrueTop;if(this.scrollView){var s=this.scrollView.__container;i=this.scrollView.getValues().top;var a=s.offsetTop,l=a-r+this._currentDrag.elementHeight/2,c=r+this._currentDrag.elementHeight/2-a-s.offsetHeight;t.gesture.deltaY<0&&l>0&&i>0&&(this.scrollView.scrollBy(null,-l),e.requestAnimationFrame(function(){n.drag(t)})),t.gesture.deltaY>0&&c>0&&i<this.scrollView.getScrollMax().top&&(this.scrollView.scrollBy(null,c),e.requestAnimationFrame(function(){n.drag(t)}))}!this._isDragging&&Math.abs(t.gesture.deltaY)>this.dragThresholdY&&(this._isDragging=!0),this._isDragging&&(this._moveElement(t),this._currentDrag.currentY=i+r-o)}}),u.prototype._getReorderIndex=function(){for(var e,t=this,n=(this._currentDrag.placeholder,Array.prototype.slice.call(this._currentDrag.placeholder.parentNode.children).filter(function(e){return e.nodeName===t.el.nodeName&&e!==t.el})),i=this._currentDrag.currentY,r=0,o=n.length;o>r;r++)if(e=n[r],r===o-1){if(i>e.offsetTop)return r}else if(0===r){if(i<e.offsetTop+e.offsetHeight)return r}else if(i>e.offsetTop-e.offsetHeight/2&&i<e.offsetTop+e.offsetHeight)return r;return this._currentDrag.startIndex},u.prototype.end=function(t,n){if(!this._currentDrag)return void(n&&n());var i=this._currentDrag.placeholder,r=this._getReorderIndex();this.el.classList.remove(s),this.el.style[e.CSS.TRANSFORM]="",i.parentNode.insertBefore(this.el,i),i.parentNode.removeChild(i),this.onReorder&&this.onReorder(this.el,this._currentDrag.startIndex,r),this._currentDrag=null,n&&n()},e.views.ListView=e.views.View.inherit({initialize:function(t){var n=this;t=e.extend({onReorder:function(){},virtualRemoveThreshold:-200,virtualAddThreshold:200,canSwipe:function(){return!0}},t),e.extend(this,t),!this.itemHeight&&this.listEl&&(this.itemHeight=this.listEl.children[0]&&parseInt(this.listEl.children[0].style.height,10)),this.onRefresh=t.onRefresh||function(){},this.onRefreshOpening=t.onRefreshOpening||function(){},this.onRefreshHolding=t.onRefreshHolding||function(){},window.ionic.onGesture("release",function(e){n._handleEndDrag(e)},this.el),window.ionic.onGesture("drag",function(e){n._handleDrag(e)},this.el),this._initDrag()},stopRefreshing:function(){var e=this.el.querySelector(".list-refresher");e.style.height="0px"},didScroll:function(e){if(this.isVirtual){var t=this.itemHeight,n=(this.listEl.children.length,e.target.scrollHeight),i=this.el.parentNode.offsetHeight,r=(e.scrollTop,Math.max(0,e.scrollTop+this.virtualRemoveThreshold)),o=Math.min(n,Math.abs(e.scrollTop)+i+this.virtualAddThreshold),s=Math.floor((o-r)/t),a=parseInt(Math.abs(r/t),10),l=parseInt(Math.abs(o/t),10);this._virtualItemsToRemove=Array.prototype.slice.call(this.listEl.children,0,a);{Array.prototype.slice.call(this.listEl.children,a,a+s)}this.renderViewport&&this.renderViewport(r,o,a,l)}},didStopScrolling:function(){if(this.isVirtual)for(var e=0;e<this._virtualItemsToRemove.length;e++){{this._virtualItemsToRemove[e]}this.didHideItem&&this.didHideItem(e)}},clearDragEffects:function(){this._lastDragOp&&(this._lastDragOp.clean&&this._lastDragOp.clean(),this._lastDragOp=null)},_initDrag:function(){this._lastDragOp=this._dragOp,this._dragOp=null},_getItem:function(e){for(;e;){if(e.classList&&e.classList.contains(t))return e;e=e.parentNode}return null},_startDrag:function(t){var n=this;this._isDragging=!1;var i,r=this._lastDragOp;!e.DomUtil.getParentOrSelfWithClass(t.target,a)||"up"!=t.gesture.direction&&"down"!=t.gesture.direction?!this._didDragUpOrDown&&("left"==t.gesture.direction||"right"==t.gesture.direction)&&Math.abs(t.gesture.deltaX)>5&&(i=this._getItem(t.target),i&&i.querySelector(".item-options")&&(this._dragOp=new c({el:this.el,canSwipe:this.canSwipe}),this._dragOp.start(t),t.preventDefault())):(i=this._getItem(t.target),i&&(this._dragOp=new u({listEl:this.el,el:i,scrollEl:this.scrollEl,scrollView:this.scrollView,onReorder:function(e,t,i){n.onReorder&&n.onReorder(e,t,i)}}),this._dragOp.start(t),t.preventDefault())),r&&this._dragOp&&!this._dragOp.isSameItem(r)&&t.defaultPrevented&&r.clean&&r.clean()},_handleEndDrag:function(e){var t=this;this._didDragUpOrDown=!1,this._dragOp&&this._dragOp.end(e,function(){t._initDrag()})},_handleDrag:function(e){Math.abs(e.gesture.deltaY)>5&&(this._didDragUpOrDown=!0),this.isDragging||this._dragOp||this._startDrag(e),this._dragOp&&(e.gesture.srcEvent.preventDefault(),this._dragOp.drag(e))}})}(ionic),function(e){"use strict";e.views.Modal=e.views.View.inherit({initialize:function(t){t=e.extend({focusFirstInput:!1,unfocusOnHide:!0,focusFirstDelay:600,backdropClickToClose:!0,hardwareBackButtonClose:!0},t),e.extend(this,t),this.el=t.el},show:function(){var e=this;e.focusFirstInput&&window.setTimeout(function(){var t=e.el.querySelector("input, textarea");t&&t.focus&&t.focus()},e.focusFirstDelay)},hide:function(){if(this.unfocusOnHide){var e=this.el.querySelectorAll("input, textarea");window.setTimeout(function(){for(var t=0;t<e.length;t++)e[t].blur&&e[t].blur()})}}})}(ionic),function(e){"use strict";e.views.SideMenu=e.views.View.inherit({initialize:function(e){this.el=e.el,this.isEnabled="undefined"==typeof e.isEnabled?!0:e.isEnabled,this.setWidth(e.width)},getFullWidth:function(){return this.width},setWidth:function(e){this.width=e,this.el.style.width=e+"px"},setIsEnabled:function(e){this.isEnabled=e},bringUp:function(){"0"!==this.el.style.zIndex&&(this.el.style.zIndex="0")},pushDown:function(){"-1"!==this.el.style.zIndex&&(this.el.style.zIndex="-1")}}),e.views.SideMenuContent=e.views.View.inherit({initialize:function(t){e.extend(this,{animationClass:"menu-animated",onDrag:function(){},onEndDrag:function(){}},t),e.onGesture("drag",e.proxy(this._onDrag,this),this.el),e.onGesture("release",e.proxy(this._onEndDrag,this),this.el)},_onDrag:function(e){this.onDrag&&this.onDrag(e)},_onEndDrag:function(e){this.onEndDrag&&this.onEndDrag(e)},disableAnimation:function(){this.el.classList.remove(this.animationClass)},enableAnimation:function(){this.el.classList.add(this.animationClass)},getTranslateX:function(){return parseFloat(this.el.style[e.CSS.TRANSFORM].replace("translate3d(","").split(",")[0])},setTranslateX:e.animationFrameThrottle(function(t){this.el.style[e.CSS.TRANSFORM]="translate3d("+t+"px, 0, 0)"})})}(ionic),function(e){"use strict";e.views.Slider=e.views.View.inherit({initialize:function(e){function t(){m=E.children,T=m.length,m.length<2&&(e.continuous=!1),f.transitions&&e.continuous&&m.length<3&&(E.appendChild(m[0].cloneNode(!0)),E.appendChild(E.children[1].cloneNode(!0)),m=E.children),g=new Array(m.length),v=p.offsetWidth||p.getBoundingClientRect().width,E.style.width=m.length*v+"px";for(var t=m.length;t--;){var n=m[t];n.style.width=v+"px",n.setAttribute("data-index",t),f.transitions&&(n.style.left=t*-v+"px",s(t,S>t?-v:t>S?v:0,0))}e.continuous&&f.transitions&&(s(r(S-1),-v,0),s(r(S+1),v,0)),f.transitions||(E.style.left=S*-v+"px"),p.style.visibility="visible",e.slidesChanged&&e.slidesChanged()}function n(){e.continuous?o(S-1):S&&o(S-1)}function i(){e.continuous?o(S+1):S<m.length-1&&o(S+1)}function r(e){return(m.length+e%m.length)%m.length}function o(t,n){if(S!=t){if(f.transitions){var i=Math.abs(S-t)/(S-t);if(e.continuous){var o=i;i=-g[r(t)]/v,i!==o&&(t=-i*m.length+t)}for(var a=Math.abs(S-t)-1;a--;)s(r((t>S?t:S)-a-1),v*i,0);t=r(t),s(S,v*i,n||w),s(t,0,n||w),e.continuous&&s(r(t-i),-(v*i),0)}else t=r(t),l(S*-v,t*-v,n||w);S=t,_(e.callback&&e.callback(S,m[S]))}}function s(e,t,n){a(e,t,n),g[e]=t}function a(e,t,n){var i=m[e],r=i&&i.style;r&&(r.webkitTransitionDuration=r.MozTransitionDuration=r.msTransitionDuration=r.OTransitionDuration=r.transitionDuration=n+"ms",r.webkitTransform="translate("+t+"px,0)translateZ(0)",r.msTransform=r.MozTransform=r.OTransform="translateX("+t+"px)")}function l(t,n,i){if(!i)return void(E.style.left=n+"px");var r=+new Date,o=setInterval(function(){var s=+new Date-r;return s>i?(E.style.left=n+"px",D&&c(),e.transitionEnd&&e.transitionEnd.call(event,S,m[S]),void clearInterval(o)):void(E.style.left=(n-t)*(Math.floor(s/i*100)/100)+t+"px")},4)}function c(){b=setTimeout(i,D)}function u(){D=e.auto||0,clearTimeout(b)}var h=this,d=function(){},_=function(e){setTimeout(e||d,0)},f={addEventListener:!!window.addEventListener,touch:"ontouchstart"in window||window.DocumentTouch&&document instanceof DocumentTouch,transitions:function(e){var t=["transitionProperty","WebkitTransition","MozTransition","OTransition","msTransition"];for(var n in t)if(void 0!==e.style[t[n]])return!0;return!1}(document.createElement("swipe"))},p=e.el;if(p){var m,g,v,T,E=p.children[0];e=e||{};var S=parseInt(e.startSlide,10)||0,w=e.speed||300;e.continuous=void 0!==e.continuous?e.continuous:!0;var b,y,D=e.auto||0,L={},x={},M={handleEvent:function(n){switch(("mousedown"==n.type||"mouseup"==n.type||"mousemove"==n.type)&&(n.touches=[{pageX:n.pageX,pageY:n.pageY}]),n.type){case"mousedown":this.start(n);break;case"touchstart":this.start(n);break;case"touchmove":this.touchmove(n);break;case"mousemove":this.touchmove(n);break;case"touchend":_(this.end(n));break;case"mouseup":_(this.end(n));break;case"webkitTransitionEnd":case"msTransitionEnd":case"oTransitionEnd":case"otransitionend":case"transitionend":_(this.transitionEnd(n));break;case"resize":_(t)}e.stopPropagation&&n.stopPropagation()},start:function(e){var t=e.touches[0];L={x:t.pageX,y:t.pageY,time:+new Date},y=void 0,x={},f.touch?(E.addEventListener("touchmove",this,!1),E.addEventListener("touchend",this,!1)):(E.addEventListener("mousemove",this,!1),E.addEventListener("mouseup",this,!1),document.addEventListener("mouseup",this,!1))},touchmove:function(t){if(!(t.touches.length>1||t.scale&&1!==t.scale||h.slideIsDisabled)){e.disableScroll&&t.preventDefault();var n=t.touches[0];x={x:n.pageX-L.x,y:n.pageY-L.y},"undefined"==typeof y&&(y=!!(y||Math.abs(x.x)<Math.abs(x.y))),y||(t.preventDefault(),u(),e.continuous?(a(r(S-1),x.x+g[r(S-1)],0),a(S,x.x+g[S],0),a(r(S+1),x.x+g[r(S+1)],0)):(x.x=x.x/(!S&&x.x>0||S==m.length-1&&x.x<0?Math.abs(x.x)/v+1:1),a(S-1,x.x+g[S-1],0),a(S,x.x+g[S],0),a(S+1,x.x+g[S+1],0)))}},end:function(){var t=+new Date-L.time,n=Number(t)<250&&Math.abs(x.x)>20||Math.abs(x.x)>v/2,i=!S&&x.x>0||S==m.length-1&&x.x<0;e.continuous&&(i=!1);var o=x.x<0;y||(n&&!i?(o?(e.continuous?(s(r(S-1),-v,0),s(r(S+2),v,0)):s(S-1,-v,0),s(S,g[S]-v,w),s(r(S+1),g[r(S+1)]-v,w),S=r(S+1)):(e.continuous?(s(r(S+1),v,0),s(r(S-2),-v,0)):s(S+1,v,0),s(S,g[S]+v,w),s(r(S-1),g[r(S-1)]+v,w),S=r(S-1)),e.callback&&e.callback(S,m[S])):e.continuous?(s(r(S-1),-v,w),s(S,0,w),s(r(S+1),v,w)):(s(S-1,-v,w),s(S,0,w),s(S+1,v,w))),f.touch?(E.removeEventListener("touchmove",M,!1),E.removeEventListener("touchend",M,!1)):(E.removeEventListener("mousemove",M,!1),E.removeEventListener("mouseup",M,!1),document.removeEventListener("mouseup",M,!1))},transitionEnd:function(t){parseInt(t.target.getAttribute("data-index"),10)==S&&(D&&c(),e.transitionEnd&&e.transitionEnd.call(t,S,m[S]))}};this.update=function(){setTimeout(t)},this.setup=function(){t()},this.enableSlide=function(e){return arguments.length&&(this.slideIsDisabled=!e),!this.slideIsDisabled},this.slide=function(e,t){u(),o(e,t)},this.prev=this.previous=function(){u(),n()},this.next=function(){u(),i()},this.stop=function(){u()},this.start=function(){c()},this.currentIndex=function(){return S},this.slidesCount=function(){return T},this.kill=function(){u(),E.style.width="",E.style.left="";for(var e=m.length;e--;){var t=m[e];t.style.width="",t.style.left="",f.transitions&&a(e,0,0)}f.addEventListener?(E.removeEventListener("touchstart",M,!1),E.removeEventListener("webkitTransitionEnd",M,!1),E.removeEventListener("msTransitionEnd",M,!1),E.removeEventListener("oTransitionEnd",M,!1),E.removeEventListener("otransitionend",M,!1),E.removeEventListener("transitionend",M,!1),window.removeEventListener("resize",M,!1)):window.onresize=null},this.load=function(){t(),D&&c(),f.addEventListener?(f.touch?E.addEventListener("touchstart",M,!1):E.addEventListener("mousedown",M,!1),f.transitions&&(E.addEventListener("webkitTransitionEnd",M,!1),E.addEventListener("msTransitionEnd",M,!1),E.addEventListener("oTransitionEnd",M,!1),E.addEventListener("otransitionend",M,!1),E.addEventListener("transitionend",M,!1)),window.addEventListener("resize",M,!1)):window.onresize=function(){t()}}}}})}(ionic),function(e){"use strict";e.views.Toggle=e.views.View.inherit({initialize:function(t){var n=this;this.el=t.el,this.checkbox=t.checkbox,this.track=t.track,this.handle=t.handle,this.openPercent=-1,this.onChange=t.onChange||function(){},this.triggerThreshold=t.triggerThreshold||20,this.dragStartHandler=function(e){n.dragStart(e)},this.dragHandler=function(e){n.drag(e)},this.holdHandler=function(e){n.hold(e)},this.releaseHandler=function(e){n.release(e)},this.dragStartGesture=e.onGesture("dragstart",this.dragStartHandler,this.el),this.dragGesture=e.onGesture("drag",this.dragHandler,this.el),this.dragHoldGesture=e.onGesture("hold",this.holdHandler,this.el),this.dragReleaseGesture=e.onGesture("release",this.releaseHandler,this.el)},destroy:function(){e.offGesture(this.dragStartGesture,"dragstart",this.dragStartGesture),e.offGesture(this.dragGesture,"drag",this.dragGesture),e.offGesture(this.dragHoldGesture,"hold",this.holdHandler),e.offGesture(this.dragReleaseGesture,"release",this.releaseHandler)},tap:function(){"disabled"!==this.el.getAttribute("disabled")&&this.val(!this.checkbox.checked)},dragStart:function(e){this.checkbox.disabled||(this._dragInfo={width:this.el.offsetWidth,left:this.el.offsetLeft,right:this.el.offsetLeft+this.el.offsetWidth,triggerX:this.el.offsetWidth/2,initialState:this.checkbox.checked},e.gesture.srcEvent.preventDefault(),this.hold(e))},drag:function(t){var n=this;this._dragInfo&&(t.gesture.srcEvent.preventDefault(),e.requestAnimationFrame(function(){if(n._dragInfo){var e=(n.track.offsetLeft+n.handle.offsetWidth/2,n.track.offsetLeft+n.track.offsetWidth-n.handle.offsetWidth/2,t.gesture.deltaX,t.gesture.touches[0].pageX-n._dragInfo.left),i=n._dragInfo.width-n.triggerThreshold;n._dragInfo.initialState?e<n.triggerThreshold?n.setOpenPercent(0):e>n._dragInfo.triggerX&&n.setOpenPercent(100):e<n._dragInfo.triggerX?n.setOpenPercent(0):e>i&&n.setOpenPercent(100)}}))},endDrag:function(){this._dragInfo=null},hold:function(){this.el.classList.add("dragging")},release:function(e){this.el.classList.remove("dragging"),this.endDrag(e)},setOpenPercent:function(t){if(this.openPercent<0||t<this.openPercent-3||t>this.openPercent+3)if(this.openPercent=t,0===t)this.val(!1);else if(100===t)this.val(!0);else{var n=Math.round(t/100*this.track.offsetWidth-this.handle.offsetWidth);n=1>n?0:n,this.handle.style[e.CSS.TRANSFORM]="translate3d("+n+"px,0,0)"}},val:function(t){return(t===!0||t===!1)&&(""!==this.handle.style[e.CSS.TRANSFORM]&&(this.handle.style[e.CSS.TRANSFORM]=""),this.checkbox.checked=t,this.openPercent=t?100:0,this.onChange&&this.onChange()),this.checkbox.checked}})}(ionic)}();
},{}],"/home/ubuntu/workspace/bower_components/ngstorage/ngStorage.min.js":[function(require,module,exports){
/*! ngStorage 0.3.0 | Copyright (c) 2013 Gias Kay Lee | MIT License */"use strict";!function(){function a(a){return["$rootScope","$window",function(b,c){for(var d,e,f,g=c[a]||(console.warn("This browser does not support Web Storage!"),{}),h={$default:function(a){for(var b in a)angular.isDefined(h[b])||(h[b]=a[b]);return h},$reset:function(a){for(var b in h)"$"===b[0]||delete h[b];return h.$default(a)}},i=0;i<g.length;i++)(f=g.key(i))&&"ngStorage-"===f.slice(0,10)&&(h[f.slice(10)]=angular.fromJson(g.getItem(f)));return d=angular.copy(h),b.$watch(function(){e||(e=setTimeout(function(){if(e=null,!angular.equals(h,d)){angular.forEach(h,function(a,b){angular.isDefined(a)&&"$"!==b[0]&&g.setItem("ngStorage-"+b,angular.toJson(a)),delete d[b]});for(var a in d)g.removeItem("ngStorage-"+a);d=angular.copy(h)}},100))}),"localStorage"===a&&c.addEventListener&&c.addEventListener("storage",function(a){"ngStorage-"===a.key.slice(0,10)&&(a.newValue?h[a.key.slice(10)]=angular.fromJson(a.newValue):delete h[a.key.slice(10)],d=angular.copy(h),b.$apply())}),h}]}angular.module("ngStorage",[]).factory("$localStorage",a("localStorage")).factory("$sessionStorage",a("sessionStorage"))}();
},{}],"/home/ubuntu/workspace/client/scripts/players/controllers/dashboard.js":[function(require,module,exports){
'use strict';
var controllername = 'dashboard';

var db = require('app/db.js')('users');

module.exports = function(app) {
  /*jshint validthis: true */

  var deps = ['$scope', '$localStorage', 'main.players.gameServices', '$ionicModal'];

  function controller($scope, $localStorage, gameServices, $ionicModal) {
    var vm = this;
    /* .. */
    vm.errors = { gamename: { } };
    /* logged in user data */
    vm.userData = {};
    /* new game request data */
    vm.newGame = {};
    /* */
    vm.modal = {};

    db.dataFy($localStorage.userData, vm.userData);

    var activate = function() {

      vm.newGame = function() {
        gameServices.newGame(vm.newGame).then(
          function(res) {
            vm.errors.gamename = { };
          }, function(err) {
            vm.errors.gamename.taken = true;
          }
        );
      };

    };

    activate();
  }

  controller.$inject = deps;
  app.controller(app.name + '.' + controllername, controller);
};
},{"app/db.js":"/home/ubuntu/workspace/node_modules/app/db.js"}],"/home/ubuntu/workspace/client/scripts/players/controllers/findAction.js":[function(require,module,exports){
'use strict';
var controllername = 'findAction';

var db={ users: require('app/db')('users') };

/* Handle login redirects - new user screens, updates etc.. */

module.exports = function(app) {
    /*jshint validthis: true */

    var deps = ['$state', 'main.players.userServices', '$localStorage'];

    function controller($state, userServices, $localStorage) {
        var vm = this;
        var user = $localStorage.userData;
        var activate = function() {
            if (!!user.firstScreen) {
                user.firstScreen = true;
                db.put(user.username, user, function(err,res) {
                    $state.go('dashboard');
                });
            }
            
            $state.go('dashboard');
            
        };
        activate();
    }

    controller.$inject = deps;
    app.controller(app.name + '.' + controllername, controller);
};
},{"app/db":"/home/ubuntu/workspace/node_modules/app/db.js"}],"/home/ubuntu/workspace/client/scripts/players/controllers/games.js":[function(require,module,exports){
'use strict';
var controllername = 'games';

module.exports = function(app) {
    /*jshint validthis: true */

    var deps = [];

    function controller() {
        var vm = this;
        vm.message = 'Hello World';
        
        var activate = function() {
            vm.games=[{name:'hello'},{name:'world'}];
        };
        
        activate();
    }

    controller.$inject = deps;
    app.controller(app.name + '.' + controllername, controller);
};
},{}],"/home/ubuntu/workspace/client/scripts/players/controllers/index.js":[function(require,module,exports){
'use strict';

module.exports = function(app) {
    // inject:start
    require('./dashboard')(app);
    require('./findAction')(app);
    require('./games')(app);
    require('./login')(app);
    require('./settings')(app);
    // inject:end
};
},{"./dashboard":"/home/ubuntu/workspace/client/scripts/players/controllers/dashboard.js","./findAction":"/home/ubuntu/workspace/client/scripts/players/controllers/findAction.js","./games":"/home/ubuntu/workspace/client/scripts/players/controllers/games.js","./login":"/home/ubuntu/workspace/client/scripts/players/controllers/login.js","./settings":"/home/ubuntu/workspace/client/scripts/players/controllers/settings.js"}],"/home/ubuntu/workspace/client/scripts/players/controllers/login.js":[function(require,module,exports){
'use strict';
var controllername = 'login';

module.exports = function(app) {
    /*jshint validthis: true */

    var deps = ['$state','$ionicActionSheet', 'main.players.userServices'];

    function controller($state, $ionicActionSheet, userServices) {
        var vm = this;
        
        vm.form = { signUp: { }, signIn: { } };//reflective
        vm.errors = { username: {}, password: {} };//..
        
        vm.errors.clear = function() {
            vm.errors.username = {};
        };

        vm.signUp = function() {
            userServices.signUp(vm.form.signUp).then(function(got) {
                vm.errors.username = { };
                $state.go('findAction');
            }, function() {
                vm.errors.username.duplicate=true;
            });
        };

        vm.signIn = function() {
            userServices.signIn(vm.form.signIn).then(function(got) {
                vm.errors.password = {};
                $state.go('findAction');
            }, function() {
                vm.errors.password.invalid=true;
            });
        };

        var activate = function() {

        };

        activate();
    }

    controller.$inject = deps;
    app.controller(app.name + '.' + controllername, controller);
};

},{}],"/home/ubuntu/workspace/client/scripts/players/controllers/settings.js":[function(require,module,exports){
'use strict';
var controllername = 'settings';

module.exports = function(app) {
    /*jshint validthis: true */

    var deps = [];

    function controller() {
        var vm = this;
        vm.message = 'Hello World';
        var activate = function() {

        };
        activate();
    }

    controller.$inject = deps;
    app.controller(app.name + '.' + controllername, controller);
};
},{}],"/home/ubuntu/workspace/client/scripts/players/index.js":[function(require,module,exports){
'use strict';
require('angular-ui-router');
require('angular-ionic');
require('famous-angular');

var modulename = 'players';

module.exports = function(namespace) {

    var fullname = namespace + '.' + modulename;

    var angular = require('angular');
    /*..*/
    require('ngStorage');

    var app = angular.module(fullname, ['ui.router', 'ionic', 'famous.angular', 'ngStorage']);

    // inject:folders start
    require('./controllers')(app);
    require('./services')(app);

    // inject:folders end

    app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');
        
        $stateProvider
        .state('login', {
            url : '/login',
            template: require('./views/login.html')
       })
       .state('findAction', {
           url: '/findAction',
           controller: 'main.players.findAction'
       })
       .state('dashboard', {
           url: '/dashboard',
           template: require('./views/dashboard.html'),
           controller: 'main.players.dashboard'
       });

    }]);
    
    
    return app;
};
},{"./controllers":"/home/ubuntu/workspace/client/scripts/players/controllers/index.js","./services":"/home/ubuntu/workspace/client/scripts/players/services/index.js","./views/dashboard.html":"/home/ubuntu/workspace/client/scripts/players/views/dashboard.html","./views/login.html":"/home/ubuntu/workspace/client/scripts/players/views/login.html","angular":"/home/ubuntu/workspace/bower_components/angular/angular.min.js","angular-ionic":"/home/ubuntu/workspace/bower_components/ionic/release/js/ionic-angular.min.js","angular-ui-router":"/home/ubuntu/workspace/bower_components/angular-ui-router/release/angular-ui-router.min.js","famous-angular":"/home/ubuntu/workspace/bower_components/famous-angular/dist/famous-angular.min.js","ngStorage":"/home/ubuntu/workspace/bower_components/ngstorage/ngStorage.min.js"}],"/home/ubuntu/workspace/client/scripts/players/services/gameServices.js":[function(require,module,exports){
'use strict';
var servicename = 'gameServices';

var db = {
    games: require('app/db.js')('games'),
    users: require('app/db.js')('users')
};

module.exports = function(app) {

    var dependencies = [];

    function service() {
        var isInitialized = false;
        var init = function() {
            isInitialized = true;
        };
        return {
            // initialization
            init: init,

            $get: ['$q',
                function($q) {
                    var newGame = function(opts) {
                        var d = $q.defer();
                        var data = db.games.dataCrumb(opts);
                        
                        db.games.get(data.gamename,function(err,res) {
                            
                            if (res) {
                                return d.reject({reason:'Sorry, that name is taken for now.'});
                            }

                            db.games.put(data,data.gamename, function(err,res) {
                                d.resolve({ got:res });
                            });

                        });
                     
                        return d.promise;
                    };

                    return {
                        isInitialized: isInitialized,
                        newGame: newGame
                    };
                }
            ]
        };

    }
    service.$inject = dependencies;

    app.provider(app.name + '.' + servicename, service);
};
},{"app/db.js":"/home/ubuntu/workspace/node_modules/app/db.js"}],"/home/ubuntu/workspace/client/scripts/players/services/index.js":[function(require,module,exports){
'use strict';

module.exports = function(app) {
    // inject:start
    require('./gameServices')(app);
    require('./userServices')(app);
    // inject:end
};
},{"./gameServices":"/home/ubuntu/workspace/client/scripts/players/services/gameServices.js","./userServices":"/home/ubuntu/workspace/client/scripts/players/services/userServices.js"}],"/home/ubuntu/workspace/client/scripts/players/services/userServices.js":[function(require,module,exports){
'use strict';
var servicename = 'userServices';

var db = require('app/db.js')('users');


module.exports = function(app) {

    var dependencies = [ ];

    function service() {
        
        var isInitialized = false;
        
        var init = function() {
            isInitialized = true;
        };
        
        return {
            // initialization
            init: init,

            $get: ['$q', '$localStorage', 
                function($q, $localStorage) {
                    
                    var userData = function() {
                        return $localStorage.userData;
                    }

                    var signUp = function(ctrlData) {
                        var data = db.dataCrumble(ctrlData);
                        var d = $q.defer();

                        db.get(data.username,function(err, res) {
                            //user should not exist.
                            if (res) {
                                return d.reject({reason:'Username exists.'});
                            }

                            //save it
                            db.put(data, data.username, function(err, res) {
                                if (err) throw(err);
                                
                                $localStorage.userData = data;
                                d.resolve({
                                    got: res
                                });
                            });   
                            
                        });


                        return d.promise;
                    };

                    var signIn = function(ctrlData) {
                        var data = db.dataCrumble(ctrlData);
                        
                        var d = $q.defer();
                        //no pass, no login
                        if (!data.passphrase) d.reject();
                        
                        db.get(data.username, function(err, res) {
                            if (err) throw(err);
                            
                            if (res.passphrase == data.passphrase || err) {
                                $localStorage.userData = res;
                                return d.resolve({
                                    got: res
                                });
                            } 
                            
                            return d.reject();
                        });


                        return d.promise;
                    };


                    return {
                        isInitialized: isInitialized,
                        signUp: signUp,
                        signIn: signIn,
                        user: userData
                    };
                }
            ]
        };

    }
    service.$inject = dependencies;

    app.provider(app.name + '.' + servicename, service);

};
},{"app/db.js":"/home/ubuntu/workspace/node_modules/app/db.js"}],"/home/ubuntu/workspace/client/scripts/players/views/dashboard.html":[function(require,module,exports){
module.exports = '<div class="RedWar">\n' +
    '\n' +
    '  <ion-tabs class="tabs-positive tabs-icon-left">\n' +
    '\n' +
    '    <ion-tab title="Home" icon-on="ion-ios7-home" icon-off="ion-ios7-home-outline">\n' +
    '    \n' +
    '      <ion-content ng-controller="main.players.dashboard as ctrl">\n' +
    '\n' +
    '        <div class="item">Start a new game from here, {{ctrl.userData.dataUsername}}.</div>\n' +
    '        <ng-form name="form">\n' +
    '          <div class="list">\n' +
    '\n' +
    '              <label class="item item-input">\n' +
    '                <input minlength="5" required type="text" placeholder="Enter a title for your game." ng-model="ctrl.newGame.dataGamename">\n' +
    '              </label>\n' +
    '              \n' +
    '              <label class="item item-input">\n' +
    '                <input minlength="5" required type="password" placeholder="Optionally, enter a password." ng-model="ctrl.newGame.dataGamePassphrase">\n' +
    '              </label>\n' +
    '              \n' +
    '              <ul class="list">\n' +
    '            \n' +
    '                <li class="item item-toggle">\n' +
    '                   Make it visible to everyone?\n' +
    '                   <label for="visibility" class="toggle toggle-balanced">\n' +
    '                     <input id="visibility" name="visibility" ng-model="dataGameVisibility" type="checkbox">\n' +
    '                     <div class="track">\n' +
    '                       <div class="handle"></div>\n' +
    '                     </div>\n' +
    '                   </label>\n' +
    '                </li>\n' +
    '\n' +
    '              </ul>\n' +
    '              \n' +
    '              \n' +
    '              <div class="item item-button">\n' +
    '                    <button ng-click="ctrl.newGame()" class="button button-positive">Start Game</button>\n' +
    '              </div>\n' +
    '          </div>\n' +
    '        </ng-form>\n' +
    '      </ion-content>\n' +
    '\n' +
    '    </ion-tab>\n' +
    '\n' +
    '    <ion-tab title="Games" icon-on="ion-ios7-keypad" icon-off="ion-ios7-keypad-outline">\n' +
    '      <ion-content ng-controller="main.players.games as ctrl">\n' +
    '        <h1>Games</h1>\n' +
    '        <ul ng-repeat="game in ctrl.games">\n' +
    '          <li>{{game.name}}</li>\n' +
    '        </ul>\n' +
    '      </ion-content>\n' +
    '    </ion-tab>\n' +
    '\n' +
    '    <ion-tab title="Settings" icon-on="ion-ios7-gear" icon-off="ion-ios7-gear-outline">\n' +
    '      <ion-content ng-controller="main.players.settings as ctrl">\n' +
    '        <h1>Settings</h1>\n' +
    '        <ul ng-repeat="setting in ctrl.settings">\n' +
    '          <li>{{setting.name}} :: {{setting.value}}</li>\n' +
    '        </ul>\n' +
    '      </ion-content>    </ion-tab>\n' +
    '\n' +
    '  </ion-tabs>\n' +
    '\n' +
    '</div>\n' +
    '';
},{}],"/home/ubuntu/workspace/client/scripts/players/views/home.html":[function(require,module,exports){
module.exports = '<div ng-controller="main.players.login as ctrl">\n' +
    '\n' +
    '    <ion-header-bar align-title="left" class="bar-positive">\n' +
    '        <h1 class="title">RedWar</h1>\n' +
    '    </ion-header-bar>\n' +
    '    <ion-content>\n' +
    '        <h1>RED WAR</h1>\n' +
    '        <a class="button button-balanced" ui-sref="login">LOGIN</a>\n' +
    '    </ion-content>\n' +
    '    <ion-footer-bar align-title="left" class="bar-positive">\n' +
    '\n' +
    '    </ion-footer-bar>\n' +
    '</div>';
},{}],"/home/ubuntu/workspace/client/scripts/players/views/login.html":[function(require,module,exports){
module.exports = '<div ng-controller="main.players.login as ctrl">\n' +
    '\n' +
    '    <ion-header-bar align-title="left" class="bar-positive">\n' +
    '        <h1 class="title">RedWar</h1>\n' +
    '    </ion-header-bar>\n' +
    '    <ion-content>\n' +
    '        <ng-form name="loginForm">\n' +
    '\n' +
    '            <div class="list">\n' +
    '                <div ng-if="!signUp">\n' +
    '                \n' +
    '                    <label class="item item-input">\n' +
    '                        <input minlength="5" required type="text" placeholder="Enter your Username" ng-model="ctrl.form.signIn.data.username">\n' +
    '                    </label>\n' +
    '                    \n' +
    '                    <label class="item item-input">\n' +
    '                        <input minlength="5" required type="password" placeholder="Enter your Password" ng-model="ctrl.form.signIn.data.passphrase">\n' +
    '                    </label>\n' +
    '                    \n' +
    '                    <div class="item item-divider" ng-show="ctrl.errors.password.invalid">Sorry, that\'s not the right password.</div>\n' +
    '                    \n' +
    '                </div>\n' +
    '\n' +
    '                <div ng-if="signUp">\n' +
    '        \n' +
    '                    <label class="item item-input">\n' +
    '                        <input ng-change="ctrl.errors.clear()" name="username" ng-model="ctrl.form.signUp.data.username" ng-minlength="4" ng-pattern="/[a-zA-Z0-9^ ]/" type="text" placeholder="Create your Username">\n' +
    '                    </label>\n' +
    '                \n' +
    '                    <div class="item item-divider" ng-show="ctrl.errors.username.duplicate">Sorry, that username is already in use.</div>\n' +
    '                    <div class="item item-divider" ng-show="loginForm.username.$error.minlength">I need at least 4 characters.</div>\n' +
    '                    <div class="item item-divider" ng-show="loginForm.username.$error.pattern">Sorry, no funny characters.</div>\n' +
    '\n' +
    '                    <label class="item item-input">\n' +
    '                        <input ng-minlength="5" name="password" ng-model="ctrl.form.signUp.data.passphrase" type="password" placeholder="Create your Password" required>\n' +
    '                    </label>\n' +
    '\n' +
    '                </div>\n' +
    '\n' +
    '\n' +
    '                <div class="item item-checkbox">\n' +
    '                    <label class="checkbox">\n' +
    '                        <input type="checkbox" ng-model="signUp">\n' +
    '                    </label>\n' +
    '                    I want to Sign Up!\n' +
    '                </div>\n' +
    '                <div class="item item-button">\n' +
    '                    <button ng-click="ctrl.signIn()" ng-if="!signUp" class="button button-positive">Sign In</button>\n' +
    '                    <button ng-click="ctrl.signUp()" ng-if="signUp" class="button button-energized">Sign Up</button>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '\n' +
    '        </ng-form>\n' +
    '\n' +
    '    </ion-content>\n' +
    '    <ion-footer-bar align-title="left" class="bar-positive">\n' +
    '\n' +
    '    </ion-footer-bar>\n' +
    '</div>';
},{}],"/home/ubuntu/workspace/node_modules/app/db.js":[function(require,module,exports){

module.exports = function(useDB) {
    var PouchDB = require('pouchdb/dist/pouchdb.js');
    
    var db = new PouchDB('red.war.'+useDB, {
        adapter: 'websql'
    });
    
    /**
     * Do some validation funk. 
     **/
    db.dataCrumble = function(obj) {
        var data = {};
        Object.keys(obj).forEach(function(key) {
            //--call the validate function //
            if (db.validate[key]) 
                db.validate[key]().then(
                    function(valid) { },
                    function(invalid) { }
                );
        });
        return data;
    };

    
    return db;
}
},{"pouchdb/dist/pouchdb.js":"/home/ubuntu/workspace/node_modules/pouchdb/dist/pouchdb.js"}],"/home/ubuntu/workspace/node_modules/famous-polyfills/classList.js":[function(require,module,exports){

/*
 * classList.js: Cross-browser full element.classList implementation.
 * 2011-06-15
 *
 * By Eli Grey, http://eligrey.com
 * Public Domain.
 * NO WARRANTY EXPRESSED OR IMPLIED. USE AT YOUR OWN RISK.
 */

/*global self, document, DOMException */

/*! @source http://purl.eligrey.com/github/classList.js/blob/master/classList.js*/

if (typeof document !== "undefined" && !("classList" in document.createElement("a"))) {

(function (view) {

"use strict";

var
      classListProp = "classList"
    , protoProp = "prototype"
    , elemCtrProto = (view.HTMLElement || view.Element)[protoProp]
    , objCtr = Object
    , strTrim = String[protoProp].trim || function () {
        return this.replace(/^\s+|\s+$/g, "");
    }
    , arrIndexOf = Array[protoProp].indexOf || function (item) {
        var
              i = 0
            , len = this.length
        ;
        for (; i < len; i++) {
            if (i in this && this[i] === item) {
                return i;
            }
        }
        return -1;
    }
    // Vendors: please allow content code to instantiate DOMExceptions
    , DOMEx = function (type, message) {
        this.name = type;
        this.code = DOMException[type];
        this.message = message;
    }
    , checkTokenAndGetIndex = function (classList, token) {
        if (token === "") {
            throw new DOMEx(
                  "SYNTAX_ERR"
                , "An invalid or illegal string was specified"
            );
        }
        if (/\s/.test(token)) {
            throw new DOMEx(
                  "INVALID_CHARACTER_ERR"
                , "String contains an invalid character"
            );
        }
        return arrIndexOf.call(classList, token);
    }
    , ClassList = function (elem) {
        var
              trimmedClasses = strTrim.call(elem.className)
            , classes = trimmedClasses ? trimmedClasses.split(/\s+/) : []
            , i = 0
            , len = classes.length
        ;
        for (; i < len; i++) {
            this.push(classes[i]);
        }
        this._updateClassName = function () {
            elem.className = this.toString();
        };
    }
    , classListProto = ClassList[protoProp] = []
    , classListGetter = function () {
        return new ClassList(this);
    }
;
// Most DOMException implementations don't allow calling DOMException's toString()
// on non-DOMExceptions. Error's toString() is sufficient here.
DOMEx[protoProp] = Error[protoProp];
classListProto.item = function (i) {
    return this[i] || null;
};
classListProto.contains = function (token) {
    token += "";
    return checkTokenAndGetIndex(this, token) !== -1;
};
classListProto.add = function (token) {
    token += "";
    if (checkTokenAndGetIndex(this, token) === -1) {
        this.push(token);
        this._updateClassName();
    }
};
classListProto.remove = function (token) {
    token += "";
    var index = checkTokenAndGetIndex(this, token);
    if (index !== -1) {
        this.splice(index, 1);
        this._updateClassName();
    }
};
classListProto.toggle = function (token) {
    token += "";
    if (checkTokenAndGetIndex(this, token) === -1) {
        this.add(token);
    } else {
        this.remove(token);
    }
};
classListProto.toString = function () {
    return this.join(" ");
};

if (objCtr.defineProperty) {
    var classListPropDesc = {
          get: classListGetter
        , enumerable: true
        , configurable: true
    };
    try {
        objCtr.defineProperty(elemCtrProto, classListProp, classListPropDesc);
    } catch (ex) { // IE 8 doesn't support enumerable:true
        if (ex.number === -0x7FF5EC54) {
            classListPropDesc.enumerable = false;
            objCtr.defineProperty(elemCtrProto, classListProp, classListPropDesc);
        }
    }
} else if (objCtr[protoProp].__defineGetter__) {
    elemCtrProto.__defineGetter__(classListProp, classListGetter);
}

}(self));

}

},{}],"/home/ubuntu/workspace/node_modules/famous-polyfills/functionPrototypeBind.js":[function(require,module,exports){
if (!Function.prototype.bind) {
    Function.prototype.bind = function (oThis) {
        if (typeof this !== "function") {
            // closest thing possible to the ECMAScript 5 internal IsCallable function
            throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");
        }

        var aArgs = Array.prototype.slice.call(arguments, 1),
        fToBind = this,
        fNOP = function () {},
        fBound = function () {
            return fToBind.apply(this instanceof fNOP && oThis
                ? this
                : oThis,
                aArgs.concat(Array.prototype.slice.call(arguments)));
        };

        fNOP.prototype = this.prototype;
        fBound.prototype = new fNOP();

        return fBound;
    };
}

},{}],"/home/ubuntu/workspace/node_modules/famous-polyfills/index.js":[function(require,module,exports){
require('./classList.js');
require('./functionPrototypeBind.js');
require('./requestAnimationFrame.js');
},{"./classList.js":"/home/ubuntu/workspace/node_modules/famous-polyfills/classList.js","./functionPrototypeBind.js":"/home/ubuntu/workspace/node_modules/famous-polyfills/functionPrototypeBind.js","./requestAnimationFrame.js":"/home/ubuntu/workspace/node_modules/famous-polyfills/requestAnimationFrame.js"}],"/home/ubuntu/workspace/node_modules/famous-polyfills/requestAnimationFrame.js":[function(require,module,exports){
// adds requestAnimationFrame functionality
// Source: http://strd6.com/2011/05/better-window-requestanimationframe-shim/

window.requestAnimationFrame || (window.requestAnimationFrame =
  window.webkitRequestAnimationFrame ||
  window.mozRequestAnimationFrame    ||
  window.oRequestAnimationFrame      ||
  window.msRequestAnimationFrame     ||
  function(callback, element) {
    return window.setTimeout(function() {
      callback(+new Date());
  }, 1000 / 60);
});

},{}],"/home/ubuntu/workspace/node_modules/pouchdb/dist/pouchdb.js":[function(require,module,exports){
(function (global){
//    PouchDB 3.0.6
//    
//    (c) 2012-2014 Dale Harvey and the PouchDB team
//    PouchDB may be freely distributed under the Apache license, version 2.0.
//    For all details and documentation:
//    http://pouchdb.com
!function(e){if("object"==typeof exports)module.exports=e();else if("function"==typeof define&&define.amd)define(e);else{var f;"undefined"!=typeof window?f=window:"undefined"!=typeof global?f=global:"undefined"!=typeof self&&(f=self),f.PouchDB=e()}}(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(_dereq_,module,exports){
"use strict";

var utils = _dereq_('./utils');
var merge = _dereq_('./merge');
var errors = _dereq_('./deps/errors');
var EventEmitter = _dereq_('events').EventEmitter;
var upsert = _dereq_('./deps/upsert');
var Changes = _dereq_('./changes');
var Promise = utils.Promise;

/*
 * A generic pouch adapter
 */

// returns first element of arr satisfying callback predicate
function arrayFirst(arr, callback) {
  for (var i = 0; i < arr.length; i++) {
    if (callback(arr[i], i) === true) {
      return arr[i];
    }
  }
  return false;
}

// Wrapper for functions that call the bulkdocs api with a single doc,
// if the first result is an error, return an error
function yankError(callback) {
  return function (err, results) {
    if (err || results[0].error) {
      callback(err || results[0]);
    } else {
      callback(null, results[0]);
    }
  };
}

// for every node in a revision tree computes its distance from the closest
// leaf
function computeHeight(revs) {
  var height = {};
  var edges = [];
  merge.traverseRevTree(revs, function (isLeaf, pos, id, prnt) {
    var rev = pos + "-" + id;
    if (isLeaf) {
      height[rev] = 0;
    }
    if (prnt !== undefined) {
      edges.push({from: prnt, to: rev});
    }
    return rev;
  });

  edges.reverse();
  edges.forEach(function (edge) {
    if (height[edge.from] === undefined) {
      height[edge.from] = 1 + height[edge.to];
    } else {
      height[edge.from] = Math.min(height[edge.from], 1 + height[edge.to]);
    }
  });
  return height;
}

function allDocsKeysQuery(api, opts, callback) {
  var keys =  ('limit' in opts) ?
      opts.keys.slice(opts.skip, opts.limit + opts.skip) :
      (opts.skip > 0) ? opts.keys.slice(opts.skip) : opts.keys;
  if (opts.descending) {
    keys.reverse();
  }
  if (!keys.length) {
    return api._allDocs({limit: 0}, callback);
  }
  var finalResults = {
    offset: opts.skip
  };
  return Promise.all(keys.map(function (key, i) {
    var subOpts = utils.extend(true, {key: key, deleted: 'ok'}, opts);
    ['limit', 'skip', 'keys'].forEach(function (optKey) {
      delete subOpts[optKey];
    });
    return new Promise(function (resolve, reject) {
      api._allDocs(subOpts, function (err, res) {
        if (err) {
          return reject(err);
        }
        finalResults.total_rows = res.total_rows;
        resolve(res.rows[0] || {key: key, error: 'not_found'});
      });
    });
  })).then(function (results) {
    finalResults.rows = results;
    return finalResults;
  });
}

utils.inherits(AbstractPouchDB, EventEmitter);
module.exports = AbstractPouchDB;

function AbstractPouchDB() {
  var self = this;
  EventEmitter.call(this);
  self.autoCompact = function (callback) {
    // http doesn't have auto-compaction
    if (!self.auto_compaction || self.type() === 'http') {
      return callback;
    }
    return function (err, res) {
      if (err) {
        callback(err);
      } else {
        var count = res.length;
        var decCount = function () {
          count--;
          if (!count) {
            callback(null, res);
          }
        };
        if (!res.length) {
          return callback(null, res);
        }
        res.forEach(function (doc) {
          if (doc.ok && doc.id) { // if no id, then it was a local doc
            // TODO: we need better error handling
            self.compactDocument(doc.id, 1, decCount);
          } else {
            decCount();
          }
        });
      }
    };
  };

  var listeners = 0, changes;
  var eventNames = ['change', 'delete', 'create', 'update'];
  this.on('newListener', function (eventName) {
    if (~eventNames.indexOf(eventName)) {
      if (listeners) {
        listeners++;
        return;
      } else {
        listeners++;
      }
    } else {
      return;
    }
    var lastChange = 0;
    changes = this.changes({
      conflicts: true,
      include_docs: true,
      continuous: true,
      since: 'now',
      onChange: function (change) {
        if (change.seq <= lastChange) {
          return;
        }
        lastChange = change.seq;
        self.emit('change', change);
        if (change.doc._deleted) {
          self.emit('delete', change);
        } else if (change.doc._rev.split('-')[0] === '1') {
          self.emit('create', change);
        } else {
          self.emit('update', change);
        }
      }
    });
  });
  this.on('removeListener', function (eventName) {
    if (~eventNames.indexOf(eventName)) {
      listeners--;
      if (listeners) {
        return;
      }
    } else {
      return;
    }
    changes.cancel();
  });
}

AbstractPouchDB.prototype.post =
  utils.adapterFun('post', function (doc, opts, callback) {
  if (typeof opts === 'function') {
    callback = opts;
    opts = {};
  }
  if (typeof doc !== 'object' || Array.isArray(doc)) {
    return callback(errors.NOT_AN_OBJECT);
  }
  this.bulkDocs({docs: [doc]}, opts,
      this.autoCompact(yankError(callback)));
});

AbstractPouchDB.prototype.put =
  utils.adapterFun('put', utils.getArguments(function (args) {
  var temp, temptype, opts, callback;
  var doc = args.shift();
  var id = '_id' in doc;
  if (typeof doc !== 'object' || Array.isArray(doc)) {
    callback = args.pop();
    return callback(errors.NOT_AN_OBJECT);
  }
  doc = utils.clone(doc);
  while (true) {
    temp = args.shift();
    temptype = typeof temp;
    if (temptype === "string" && !id) {
      doc._id = temp;
      id = true;
    } else if (temptype === "string" && id && !('_rev' in doc)) {
      doc._rev = temp;
    } else if (temptype === "object") {
      opts = temp;
    } else if (temptype === "function") {
      callback = temp;
    }
    if (!args.length) {
      break;
    }
  }
  opts = opts || {};
  var error = utils.invalidIdError(doc._id);
  if (error) {
    return callback(error);
  }
  if (utils.isLocalId(doc._id) && typeof this._putLocal === 'function') {
    if (doc._deleted) {
      return this._removeLocal(doc, callback);
    } else {
      return this._putLocal(doc, callback);
    }
  }
  this.bulkDocs({docs: [doc]}, opts,
      this.autoCompact(yankError(callback)));
}));

AbstractPouchDB.prototype.putAttachment =
  utils.adapterFun('putAttachment', function (docId, attachmentId, rev,
                                              blob, type, callback) {
  var api = this;
  if (typeof type === 'function') {
    callback = type;
    type = blob;
    blob = rev;
    rev = null;
  }
  if (typeof type === 'undefined') {
    type = blob;
    blob = rev;
    rev = null;
  }

  function createAttachment(doc) {
    doc._attachments = doc._attachments || {};
    doc._attachments[attachmentId] = {
      content_type: type,
      data: blob
    };
    return api.put(doc);
  }

  return api.get(docId).then(function (doc) {
    if (doc._rev !== rev) {
      throw errors.REV_CONFLICT;
    }

    return createAttachment(doc);
  }, function (err) {
     // create new doc
    if (err.error === errors.MISSING_DOC.error) {
      return createAttachment({_id: docId});
    } else {
      throw err;
    }
  });
});

AbstractPouchDB.prototype.removeAttachment =
  utils.adapterFun('removeAttachment', function (docId, attachmentId, rev,
                                                 callback) {
  var self = this;
  self.get(docId, function (err, obj) {
    if (err) {
      callback(err);
      return;
    }
    if (obj._rev !== rev) {
      callback(errors.REV_CONFLICT);
      return;
    }
    if (!obj._attachments) {
      return callback();
    }
    delete obj._attachments[attachmentId];
    if (Object.keys(obj._attachments).length === 0) {
      delete obj._attachments;
    }
    self.put(obj, callback);
  });
});

AbstractPouchDB.prototype.remove =
  utils.adapterFun('remove', function (docOrId, optsOrRev, opts, callback) {
  var doc;
  if (typeof optsOrRev === 'string') {
    // id, rev, opts, callback style
    doc = {
      _id: docOrId,
      _rev: optsOrRev
    };
    if (typeof opts === 'function') {
      callback = opts;
      opts = {};
    }
  } else {
    // doc, opts, callback style
    doc = docOrId;
    if (typeof optsOrRev === 'function') {
      callback = optsOrRev;
      opts = {};
    } else {
      callback = opts;
      opts = optsOrRev;
    }
  }
  opts = utils.clone(opts || {});
  opts.was_delete = true;
  var newDoc = {_id: doc._id, _rev: (doc._rev || opts.rev)};
  newDoc._deleted = true;
  if (utils.isLocalId(newDoc._id) && typeof this._removeLocal === 'function') {
    return this._removeLocal(doc, callback);
  }
  this.bulkDocs({docs: [newDoc]}, opts, yankError(callback));
});

AbstractPouchDB.prototype.revsDiff =
  utils.adapterFun('revsDiff', function (req, opts, callback) {
  if (typeof opts === 'function') {
    callback = opts;
    opts = {};
  }
  opts = utils.clone(opts);
  var ids = Object.keys(req);

  if (!ids.length) {
    return callback(null, {});
  }

  var count = 0;
  var missing = new utils.Map();

  function addToMissing(id, revId) {
    if (!missing.has(id)) {
      missing.set(id, {missing: []});
    }
    missing.get(id).missing.push(revId);
  }

  function processDoc(id, rev_tree) {
    // Is this fast enough? Maybe we should switch to a set simulated by a map
    var missingForId = req[id].slice(0);
    merge.traverseRevTree(rev_tree, function (isLeaf, pos, revHash, ctx,
      opts) {
        var rev = pos + '-' + revHash;
        var idx = missingForId.indexOf(rev);
        if (idx === -1) {
          return;
        }

        missingForId.splice(idx, 1);
        if (opts.status !== 'available') {
          addToMissing(id, rev);
        }
      });

    // Traversing the tree is synchronous, so now `missingForId` contains
    // revisions that were not found in the tree
    missingForId.forEach(function (rev) {
      addToMissing(id, rev);
    });
  }

  ids.map(function (id) {
    this._getRevisionTree(id, function (err, rev_tree) {
      if (err && err.status === 404 && err.message === 'missing') {
        missing.set(id, {missing: req[id]});
      } else if (err) {
        return callback(err);
      } else {
        processDoc(id, rev_tree);
      }

      if (++count === ids.length) {
        // convert LazyMap to object
        var missingObj = {};
        missing.forEach(function (value, key) {
          missingObj[key] = value;
        });
        return callback(null, missingObj);
      }
    });
  }, this);
});

// compact one document and fire callback
// by compacting we mean removing all revisions which
// are further from the leaf in revision tree than max_height
AbstractPouchDB.prototype.compactDocument =
  utils.adapterFun('compactDocument', function (docId, max_height, callback) {
  var self = this;
  this._getRevisionTree(docId, function (err, rev_tree) {
    if (err) {
      return callback(err);
    }
    var height = computeHeight(rev_tree);
    var candidates = [];
    var revs = [];
    Object.keys(height).forEach(function (rev) {
      if (height[rev] > max_height) {
        candidates.push(rev);
      }
    });

    merge.traverseRevTree(rev_tree, function (isLeaf, pos, revHash, ctx, opts) {
      var rev = pos + '-' + revHash;
      if (opts.status === 'available' && candidates.indexOf(rev) !== -1) {
        opts.status = 'missing';
        revs.push(rev);
      }
    });
    self._doCompaction(docId, rev_tree, revs, callback);
  });
});

// compact the whole database using single document
// compaction
AbstractPouchDB.prototype.compact =
  utils.adapterFun('compact', function (opts, callback) {
  if (typeof opts === 'function') {
    callback = opts;
    opts = {};
  }
  var self = this;

  opts = utils.clone(opts || {});

  self.get('_local/compaction')["catch"](function () {
    return false;
  }).then(function (doc) {
    if (typeof self._compact === 'function') {
      if (doc && doc.last_seq) {
        opts.last_seq = doc.last_seq;
      }
      return self._compact(opts, callback);
    }

  });
});
AbstractPouchDB.prototype._compact = function (opts, callback) {
  var done = false;
  var started = 0;
  var copts = {
    returnDocs: false
  };
  var self = this;
  var lastSeq;
  function finish() {
    self.get('_local/compaction')["catch"](function () {
      return false;
    }).then(function (doc) {
      doc = doc || {_id: '_local/compaction'};
      doc.last_seq = lastSeq;
      return self.put(doc);
    }).then(function () {
      callback();
    }, callback);
  }
  if (opts.last_seq) {
    copts.since = opts.last_seq;
  }
  function afterCompact() {
    started--;
    if (!started && done) {
      finish();
    }
  }
  function onChange(row) {
    started++;
    self.compactDocument(row.id, 0).then(afterCompact, callback);
  }
  self.changes(copts).on('change', onChange).on('complete', function (resp) {
    done = true;
    lastSeq = resp.last_seq;
    if (!started) {
      finish();
    }
  }).on('error', callback);
};
/* Begin api wrappers. Specific functionality to storage belongs in the 
   _[method] */
AbstractPouchDB.prototype.get =
  utils.adapterFun('get', function (id, opts, callback) {
  if (typeof opts === 'function') {
    callback = opts;
    opts = {};
  }
  if (typeof id !== 'string') {
    return callback(errors.INVALID_ID);
  }
  if (utils.isLocalId(id) && typeof this._getLocal === 'function') {
    return this._getLocal(id, callback);
  }
  var leaves = [], self = this;
  function finishOpenRevs() {
    var result = [];
    var count = leaves.length;
    if (!count) {
      return callback(null, result);
    }
    // order with open_revs is unspecified
    leaves.forEach(function (leaf) {
      self.get(id,
               {rev: leaf, revs: opts.revs, attachments: opts.attachments},
               function (err, doc) {
        if (!err) {
          result.push({ok: doc});
        } else {
          result.push({missing: leaf});
        }
        count--;
        if (!count) {
          callback(null, result);
        }
      });
    });
  }

  if (opts.open_revs) {
    if (opts.open_revs === "all") {
      this._getRevisionTree(id, function (err, rev_tree) {
        if (err) {
          // if there's no such document we should treat this
          // situation the same way as if revision tree was empty
          rev_tree = [];
        }
        leaves = merge.collectLeaves(rev_tree).map(function (leaf) {
          return leaf.rev;
        });
        finishOpenRevs();
      });
    } else {
      if (Array.isArray(opts.open_revs)) {
        leaves = opts.open_revs;
        for (var i = 0; i < leaves.length; i++) {
          var l = leaves[i];
          // looks like it's the only thing couchdb checks
          if (!(typeof(l) === "string" && /^\d+-/.test(l))) {
            return callback(errors.error(errors.BAD_REQUEST,
              "Invalid rev format"));
          }
        }
        finishOpenRevs();
      } else {
        return callback(errors.error(errors.UNKNOWN_ERROR,
          'function_clause'));
      }
    }
    return; // open_revs does not like other options
  }

  return this._get(id, opts, function (err, result) {
    opts = utils.clone(opts);
    if (err) {
      return callback(err);
    }

    var doc = result.doc;
    if (!doc) {
      // a smoke test for something being very wrong
      return callback(new Error('no doc!'));
    }
    var metadata = result.metadata;
    var ctx = result.ctx;

    if (opts.conflicts) {
      var conflicts = merge.collectConflicts(metadata);
      if (conflicts.length) {
        doc._conflicts = conflicts;
      }
    }

    if (opts.revs || opts.revs_info) {
      var paths = merge.rootToLeaf(metadata.rev_tree);
      var path = arrayFirst(paths, function (arr) {
        return arr.ids.map(function (x) { return x.id; })
          .indexOf(doc._rev.split('-')[1]) !== -1;
      });

      var indexOfRev = path.ids.map(function (x) {return x.id; })
        .indexOf(doc._rev.split('-')[1]) + 1;
      var howMany = path.ids.length - indexOfRev;
      path.ids.splice(indexOfRev, howMany);
      path.ids.reverse();

      if (opts.revs) {
        doc._revisions = {
          start: (path.pos + path.ids.length) - 1,
          ids: path.ids.map(function (rev) {
            return rev.id;
          })
        };
      }
      if (opts.revs_info) {
        var pos =  path.pos + path.ids.length;
        doc._revs_info = path.ids.map(function (rev) {
          pos--;
          return {
            rev: pos + '-' + rev.id,
            status: rev.opts.status
          };
        });
      }
    }

    if (opts.local_seq) {
      doc._local_seq = result.metadata.seq;
    }

    if (opts.attachments && doc._attachments) {
      var attachments = doc._attachments;
      var count = Object.keys(attachments).length;
      if (count === 0) {
        return callback(null, doc);
      }
      Object.keys(attachments).forEach(function (key) {
        this._getAttachment(attachments[key],
                            {encode: true, ctx: ctx}, function (err, data) {
          var att = doc._attachments[key];
          att.data = data;
          delete att.stub;
          if (!--count) {
            callback(null, doc);
          }
        });
      }, self);
    } else {
      if (doc._attachments) {
        for (var key in doc._attachments) {
          if (doc._attachments.hasOwnProperty(key)) {
            doc._attachments[key].stub = true;
          }
        }
      }
      callback(null, doc);
    }
  });
});

AbstractPouchDB.prototype.getAttachment =
  utils.adapterFun('getAttachment', function (docId, attachmentId, opts,
                                              callback) {
  var self = this;
  if (opts instanceof Function) {
    callback = opts;
    opts = {};
  }
  opts = utils.clone(opts);
  this._get(docId, opts, function (err, res) {
    if (err) {
      return callback(err);
    }
    if (res.doc._attachments && res.doc._attachments[attachmentId]) {
      opts.ctx = res.ctx;
      self._getAttachment(res.doc._attachments[attachmentId], opts, callback);
    } else {
      return callback(errors.MISSING_DOC);
    }
  });
});

AbstractPouchDB.prototype.allDocs =
  utils.adapterFun('allDocs', function (opts, callback) {
  if (typeof opts === 'function') {
    callback = opts;
    opts = {};
  }
  opts = utils.clone(opts);
  opts.skip = typeof opts.skip !== 'undefined' ? opts.skip : 0;
  if ('keys' in opts) {
    if (!Array.isArray(opts.keys)) {
      return callback(new TypeError('options.keys must be an array'));
    }
    var incompatibleOpt =
      ['startkey', 'endkey', 'key'].filter(function (incompatibleOpt) {
      return incompatibleOpt in opts;
    })[0];
    if (incompatibleOpt) {
      callback(errors.error(errors.QUERY_PARSE_ERROR,
        'Query parameter `' + incompatibleOpt +
        '` is not compatible with multi-get'
      ));
      return;
    }
    if (this.type() !== 'http') {
      return allDocsKeysQuery(this, opts, callback);
    }
  }

  return this._allDocs(opts, callback);
});

AbstractPouchDB.prototype.changes = function (opts, callback) {
  if (typeof opts === 'function') {
    callback = opts;
    opts = {};
  }
  return new Changes(this, opts, callback);
};

AbstractPouchDB.prototype.close =
  utils.adapterFun('close', function (callback) {
  this._closed = true;
  return this._close(callback);
});

AbstractPouchDB.prototype.info = utils.adapterFun('info', function (callback) {
  var self = this;
  this._info(function (err, info) {
    if (err) {
      return callback(err);
    }
    // assume we know better than the adapter, unless it informs us
    info.db_name = info.db_name || self._db_name;
    info.auto_compaction = !!(self._auto_compaction && self.type() !== 'http');
    callback(null, info);
  });
});

AbstractPouchDB.prototype.id = utils.adapterFun('id', function (callback) {
  return this._id(callback);
});

AbstractPouchDB.prototype.type = function () {
  return (typeof this._type === 'function') ? this._type() : this.adapter;
};

AbstractPouchDB.prototype.bulkDocs =
  utils.adapterFun('bulkDocs', function (req, opts, callback) {
  if (typeof opts === 'function') {
    callback = opts;
    opts = {};
  }

  opts = utils.clone(opts);

  if (Array.isArray(req)) {
    req = {
      docs: req
    };
  }

  if (!req || !req.docs || !Array.isArray(req.docs)) {
    return callback(errors.MISSING_BULK_DOCS);
  }

  for (var i = 0; i < req.docs.length; ++i) {
    if (typeof req.docs[i] !== 'object' || Array.isArray(req.docs[i])) {
      return callback(errors.NOT_AN_OBJECT);
    }
  }

  req = utils.clone(req);
  if (!('new_edits' in opts)) {
    if ('new_edits' in req) {
      opts.new_edits = req.new_edits;
    } else {
      opts.new_edits = true;
    }
  }

  return this._bulkDocs(req, opts, this.autoCompact(callback));
});

AbstractPouchDB.prototype.registerDependentDatabase =
  utils.adapterFun('registerDependentDatabase', function (dependentDb,
                                                          callback) {
  var depDB = new this.constructor(dependentDb, {adapter: this._adapter});
  function diffFun(doc) {
    doc.dependentDbs = doc.dependentDbs || {};
    if (doc.dependentDbs[dependentDb]) {
      return false; // no update required
    }
    doc.dependentDbs[dependentDb] = true;
    return doc;
  }
  upsert(this, '_local/_pouch_dependentDbs', diffFun, function (err) {
    if (err) {
      return callback(err);
    }
    return callback(null, {db: depDB});
  });
});

},{"./changes":6,"./deps/errors":11,"./deps/upsert":13,"./merge":18,"./utils":23,"events":27}],2:[function(_dereq_,module,exports){
(function (process){
"use strict";

var CHANGES_BATCH_SIZE = 25;

var utils = _dereq_('../utils');
var errors = _dereq_('../deps/errors');
// parseUri 1.2.2
// (c) Steven Levithan <stevenlevithan.com>
// MIT License
function parseUri(str) {
  var o = parseUri.options;
  var m = o.parser[o.strictMode ? "strict" : "loose"].exec(str);
  var uri = {};
  var i = 14;

  while (i--) {
    uri[o.key[i]] = m[i] || "";
  }

  uri[o.q.name] = {};
  uri[o.key[12]].replace(o.q.parser, function ($0, $1, $2) {
    if ($1) {
      uri[o.q.name][$1] = $2;
    }
  });

  return uri;
}

function encodeDocId(id) {
  if (/^_(design|local)/.test(id)) {
    return id;
  }
  return encodeURIComponent(id);
}

function preprocessAttachments(doc) {
  if (!doc._attachments || !Object.keys(doc._attachments)) {
    return utils.Promise.resolve();
  }

  return utils.Promise.all(Object.keys(doc._attachments).map(function (key) {
    var attachment = doc._attachments[key];
    if (attachment.data && typeof attachment.data !== 'string') {
      if (typeof process === undefined || process.browser) {
        return new utils.Promise(function (resolve) {
          var reader = new FileReader();
          reader.onloadend = function (e) {
            attachment.data = utils.btoa(
              utils.arrayBufferToBinaryString(e.target.result));
            resolve();
          };
          reader.readAsArrayBuffer(attachment.data);
        });
      } else {
        attachment.data = attachment.data.toString('base64');
      }
    }
  }));
}

parseUri.options = {
  strictMode: false,
  key: ["source", "protocol", "authority", "userInfo", "user", "password",
        "host", "port", "relative", "path", "directory", "file", "query",
        "anchor"],
  q:   {
    name:   "queryKey",
    parser: /(?:^|&)([^&=]*)=?([^&]*)/g
  },
  parser: {
    /* jshint maxlen: false */
    strict: /^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,
    loose:  /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/
  }
};

// Get all the information you possibly can about the URI given by name and
// return it as a suitable object.
function getHost(name, opts) {
  // If the given name contains "http:"
  if (/http(s?):/.test(name)) {
    // Prase the URI into all its little bits
    var uri = parseUri(name);

    // Store the fact that it is a remote URI
    uri.remote = true;

    // Store the user and password as a separate auth object
    if (uri.user || uri.password) {
      uri.auth = {username: uri.user, password: uri.password};
    }

    // Split the path part of the URI into parts using '/' as the delimiter
    // after removing any leading '/' and any trailing '/'
    var parts = uri.path.replace(/(^\/|\/$)/g, '').split('/');

    // Store the first part as the database name and remove it from the parts
    // array
    uri.db = parts.pop();

    // Restore the path by joining all the remaining parts (all the parts
    // except for the database name) with '/'s
    uri.path = parts.join('/');
    opts = opts || {};
    opts = utils.clone(opts);
    uri.headers = opts.headers || {};

    if (opts.auth || uri.auth) {
      var nAuth = opts.auth || uri.auth;
      var token = utils.btoa(nAuth.username + ':' + nAuth.password);
      uri.headers.Authorization = 'Basic ' + token;
    }

    if (opts.headers) {
      uri.headers = opts.headers;
    }

    return uri;
  }

  // If the given name does not contain 'http:' then return a very basic object
  // with no host, the current path, the given name as the database name and no
  // username/password
  return {host: '', path: '/', db: name, auth: false};
}

// Generate a URL with the host data given by opts and the given path
function genDBUrl(opts, path) {
  return genUrl(opts, opts.db + '/' + path);
}

// Generate a URL with the host data given by opts and the given path
function genUrl(opts, path) {
  if (opts.remote) {
    // If the host already has a path, then we need to have a path delimiter
    // Otherwise, the path delimiter is the empty string
    var pathDel = !opts.path ? '' : '/';

    // If the host already has a path, then we need to have a path delimiter
    // Otherwise, the path delimiter is the empty string
    return opts.protocol + '://' + opts.host + ':' + opts.port + '/' +
           opts.path + pathDel + path;
  }

  return '/' + path;
}
// Implements the PouchDB API for dealing with CouchDB instances over HTTP
function HttpPouch(opts, callback) {
  // The functions that will be publicly available for HttpPouch
  var api = this;
  api.getHost = opts.getHost ? opts.getHost : getHost;

  // Parse the URI given by opts.name into an easy-to-use object
  var host = api.getHost(opts.name, opts);

  // Generate the database URL based on the host
  var dbUrl = genDBUrl(host, '');

  api.getUrl = function () {return dbUrl; };
  api.getHeaders = function () {return utils.clone(host.headers); };

  var ajaxOpts = opts.ajax || {};
  opts = utils.clone(opts);
  function ajax(options, callback) {
    return utils.ajax(utils.extend({}, ajaxOpts, options), callback);
  }

  // Create a new CouchDB database based on the given opts
  var createDB = function () {
    ajax({headers: host.headers, method: 'PUT', url: dbUrl},
         function (err, ret) {
      // If we get an "Unauthorized" error
      if (err && err.status === 401) {
        // Test if the database already exists
        ajax({headers: host.headers, method: 'HEAD', url: dbUrl},
             function (err, ret) {
          // If there is still an error
          if (err) {
            // Give the error to the callback to deal with
            callback(err);
          } else {
            // Continue as if there had been no errors
            callback(null, api);
          }
        });
        // If there were no errros or if the only error is "Precondition Failed"
        // (note: "Precondition Failed" occurs when we try to create a database
        // that already exists)
      } else if (!err || err.status === 412) {
        // Continue as if there had been no errors
        callback(null, api);
      } else {
        callback(err);
      }
    });
  };
  if (!opts.skipSetup) {
    ajax({headers: host.headers, method: 'GET', url: dbUrl},
         function (err, ret) {
      //check if the db exists
      if (err) {
        if (err.status === 404) {
          //if it doesn't, create it
          createDB();
        } else {
          callback(err);
        }
      } else {
        //go do stuff with the db
        callback(null, api);
      }
    });
  }

  api.type = function () {
    return 'http';
  };

  api.id = utils.adapterFun('id', function (callback) {
    ajax({
      headers: host.headers,
      method: 'GET',
      url: genUrl(host, '')
    }, function (err, result) {
      var uuid = (result && result.uuid) ?
        result.uuid + host.db : genDBUrl(host, '');
      callback(null, uuid);
    });
  });

  api.request = utils.adapterFun('request', function (options, callback) {
    options.headers = host.headers;
    options.url = genDBUrl(host, options.url);
    ajax(options, callback);
  });

  // Sends a POST request to the host calling the couchdb _compact function
  //    version: The version of CouchDB it is running
  api.compact = utils.adapterFun('compact', function (opts, callback) {
    if (typeof opts === 'function') {
      callback = opts;
      opts = {};
    }
    opts = utils.clone(opts);
    ajax({
      headers: host.headers,
      url: genDBUrl(host, '_compact'),
      method: 'POST'
    }, function () {
      function ping() {
        api.info(function (err, res) {
          if (!res.compact_running) {
            callback();
          } else {
            setTimeout(ping, opts.interval || 200);
          }
        });
      }
      // Ping the http if it's finished compaction
      if (typeof callback === "function") {
        ping();
      }
    });
  });

  // Calls GET on the host, which gets back a JSON string containing
  //    couchdb: A welcome string
  //    version: The version of CouchDB it is running
  api._info = function (callback) {
    ajax({
      headers: host.headers,
      method: 'GET',
      url: genDBUrl(host, '')
    }, function (err, res) {
      if (err) {
        callback(err);
      } else {
        res.host = genDBUrl(host, '');
        callback(null, res);
      }
    });
  };

  // Get the document with the given id from the database given by host.
  // The id could be solely the _id in the database, or it may be a
  // _design/ID or _local/ID path
  api.get = utils.adapterFun('get', function (id, opts, callback) {
    // If no options were given, set the callback to the second parameter
    if (typeof opts === 'function') {
      callback = opts;
      opts = {};
    }
    opts = utils.clone(opts);
    if (opts.auto_encode === undefined) {
      opts.auto_encode = true;
    }

    // List of parameters to add to the GET request
    var params = [];

    // If it exists, add the opts.revs value to the list of parameters.
    // If revs=true then the resulting JSON will include a field
    // _revisions containing an array of the revision IDs.
    if (opts.revs) {
      params.push('revs=true');
    }

    // If it exists, add the opts.revs_info value to the list of parameters.
    // If revs_info=true then the resulting JSON will include the field
    // _revs_info containing an array of objects in which each object
    // representing an available revision.
    if (opts.revs_info) {
      params.push('revs_info=true');
    }

    if (opts.local_seq) {
      params.push('local_seq=true');
    }
    // If it exists, add the opts.open_revs value to the list of parameters.
    // If open_revs=all then the resulting JSON will include all the leaf
    // revisions. If open_revs=["rev1", "rev2",...] then the resulting JSON
    // will contain an array of objects containing data of all revisions
    if (opts.open_revs) {
      if (opts.open_revs !== "all") {
        opts.open_revs = JSON.stringify(opts.open_revs);
      }
      params.push('open_revs=' + opts.open_revs);
    }

    // If it exists, add the opts.attachments value to the list of parameters.
    // If attachments=true the resulting JSON will include the base64-encoded
    // contents in the "data" property of each attachment.
    if (opts.attachments) {
      params.push('attachments=true');
    }

    // If it exists, add the opts.rev value to the list of parameters.
    // If rev is given a revision number then get the specified revision.
    if (opts.rev) {
      params.push('rev=' + opts.rev);
    }

    // If it exists, add the opts.conflicts value to the list of parameters.
    // If conflicts=true then the resulting JSON will include the field
    // _conflicts containing all the conflicting revisions.
    if (opts.conflicts) {
      params.push('conflicts=' + opts.conflicts);
    }

    // Format the list of parameters into a valid URI query string
    params = params.join('&');
    params = params === '' ? '' : '?' + params;

    if (opts.auto_encode) {
      id = encodeDocId(id);
    }

    // Set the options for the ajax call
    var options = {
      headers: host.headers,
      method: 'GET',
      url: genDBUrl(host, id + params)
    };

    // If the given id contains at least one '/' and the part before the '/'
    // is NOT "_design" and is NOT "_local"
    // OR
    // If the given id contains at least two '/' and the part before the first
    // '/' is "_design".
    // TODO This second condition seems strange since if parts[0] === '_design'
    // then we already know that parts[0] !== '_local'.
    var parts = id.split('/');
    if ((parts.length > 1 && parts[0] !== '_design' && parts[0] !== '_local') ||
        (parts.length > 2 && parts[0] === '_design' && parts[0] !== '_local')) {
      // Binary is expected back from the server
      options.binary = true;
    }

    // Get the document
    ajax(options, function (err, doc, xhr) {
      // If the document does not exist, send an error to the callback
      if (err) {
        return callback(err);
      }

      // Send the document to the callback
      callback(null, doc, xhr);
    });
  });

  // Delete the document given by doc from the database given by host.
  api.remove = utils.adapterFun('remove', function (docOrId, optsOrRev, opts, callback) {
    var doc;
    if (typeof optsOrRev === 'string') {
      // id, rev, opts, callback style
      doc = {
        _id: docOrId,
        _rev: optsOrRev
      };
      if (typeof opts === 'function') {
        callback = opts;
        opts = {};
      }
    } else {
      // doc, opts, callback style
      doc = docOrId;
      if (typeof optsOrRev === 'function') {
        callback = optsOrRev;
        opts = {};
      } else {
        callback = opts;
        opts = optsOrRev;
      }
    }

    var rev = (doc._rev || opts.rev);

    // Delete the document
    ajax({
      headers: host.headers,
      method: 'DELETE',
      url: genDBUrl(host, encodeDocId(doc._id)) + '?rev=' + rev
    }, callback);
  });

  // Get the attachment
  api.getAttachment =
    utils.adapterFun('getAttachment', function (docId, attachmentId, opts,
                                                callback) {
    if (typeof opts === 'function') {
      callback = opts;
      opts = {};
    }
    opts = utils.clone(opts);
    if (opts.auto_encode === undefined) {
      opts.auto_encode = true;
    }
    if (opts.auto_encode) {
      docId = encodeDocId(docId);
    }
    opts.auto_encode = false;
    api.get(docId + '/' + attachmentId, opts, callback);
  });

  // Remove the attachment given by the id and rev
  api.removeAttachment =
    utils.adapterFun('removeAttachment', function (docId, attachmentId, rev,
                                                   callback) {
    ajax({
      headers: host.headers,
      method: 'DELETE',
      url: genDBUrl(host, encodeDocId(docId) + '/' + attachmentId) + '?rev=' +
           rev
    }, callback);
  });

  // Add the attachment given by blob and its contentType property
  // to the document with the given id, the revision given by rev, and
  // add it to the database given by host.
  api.putAttachment =
    utils.adapterFun('putAttachment', function (docId, attachmentId, rev, blob,
                                                type, callback) {
    if (typeof type === 'function') {
      callback = type;
      type = blob;
      blob = rev;
      rev = null;
    }
    if (typeof type === 'undefined') {
      type = blob;
      blob = rev;
      rev = null;
    }
    var id = encodeDocId(docId) + '/' + attachmentId;
    var url = genDBUrl(host, id);
    if (rev) {
      url += '?rev=' + rev;
    }

    var opts = {
      headers: utils.clone(host.headers),
      method: 'PUT',
      url: url,
      processData: false,
      body: blob,
      timeout: 60000
    };
    opts.headers['Content-Type'] = type;
    // Add the attachment
    ajax(opts, callback);
  });

  // Add the document given by doc (in JSON string format) to the database
  // given by host. This fails if the doc has no _id field.
  api.put = utils.adapterFun('put', utils.getArguments(function (args) {
    var temp, temptype, opts;
    var doc = args.shift();
    var id = '_id' in doc;
    var callback = args.pop();
    if (typeof doc !== 'object' || Array.isArray(doc)) {
      return callback(errors.NOT_AN_OBJECT);
    }

    doc = utils.clone(doc);

    preprocessAttachments(doc).then(function () {
      while (true) {
        temp = args.shift();
        temptype = typeof temp;
        if (temptype === "string" && !id) {
          doc._id = temp;
          id = true;
        } else if (temptype === "string" && id && !('_rev' in doc)) {
          doc._rev = temp;
        } else if (temptype === "object") {
          opts = utils.clone(temp);
        }
        if (!args.length) {
          break;
        }
      }
      opts = opts || {};
      var error = utils.invalidIdError(doc._id);
      if (error) {
        throw error;
      }

      // List of parameter to add to the PUT request
      var params = [];

      // If it exists, add the opts.new_edits value to the list of parameters.
      // If new_edits = false then the database will NOT assign this document a
      // new revision number
      if (opts && typeof opts.new_edits !== 'undefined') {
        params.push('new_edits=' + opts.new_edits);
      }

      // Format the list of parameters into a valid URI query string
      params = params.join('&');
      if (params !== '') {
        params = '?' + params;
      }

      // Add the document
      ajax({
        headers: host.headers,
        method: 'PUT',
        url: genDBUrl(host, encodeDocId(doc._id)) + params,
        body: doc
      }, function (err, res) {
        if (err) {
          return callback(err);
        }
        res.ok = true;
        callback(null, res);
      });
    })["catch"](callback);

  }));

  // Add the document given by doc (in JSON string format) to the database
  // given by host. This does not assume that doc is a new document 
  // (i.e. does not have a _id or a _rev field.)
  api.post = utils.adapterFun('post', function (doc, opts, callback) {
    // If no options were given, set the callback to be the second parameter
    if (typeof opts === 'function') {
      callback = opts;
      opts = {};
    }
    opts = utils.clone(opts);
    if (typeof doc !== 'object') {
      return callback(errors.NOT_AN_OBJECT);
    }
    if (! ("_id" in doc)) {
      doc._id = utils.uuid();
    }
    api.put(doc, opts, function (err, res) {
      if (err) {
        return callback(err);
      }
      res.ok = true;
      callback(null, res);
    });
  });

  // Update/create multiple documents given by req in the database
  // given by host.
  api._bulkDocs = function (req, opts, callback) {
    // If opts.new_edits exists add it to the document data to be
    // send to the database.
    // If new_edits=false then it prevents the database from creating
    // new revision numbers for the documents. Instead it just uses
    // the old ones. This is used in database replication.
    if (typeof opts.new_edits !== 'undefined') {
      req.new_edits = opts.new_edits;
    }

    utils.Promise.all(req.docs.map(preprocessAttachments)).then(function () {
      // Update/create the documents
      ajax({
        headers: host.headers,
        method: 'POST',
        url: genDBUrl(host, '_bulk_docs'),
        body: req
      }, function (err, results) {
        if (err) {
          return callback(err);
        }
        results.forEach(function (result) {
          result.ok = true; // smooths out cloudant not adding this
        });
        callback(null, results);
      });
    })["catch"](callback);
  };

  // Get a listing of the documents in the database given
  // by host and ordered by increasing id.
  api.allDocs = utils.adapterFun('allDocs', function (opts, callback) {
    if (typeof opts === 'function') {
      callback = opts;
      opts = {};
    }
    opts = utils.clone(opts);
    // List of parameters to add to the GET request
    var params = [];
    var body;
    var method = 'GET';

    // TODO I don't see conflicts as a valid parameter for a
    // _all_docs request 
    // (see http://wiki.apache.org/couchdb/HTTP_Document_API#all_docs)
    if (opts.conflicts) {
      params.push('conflicts=true');
    }

    // If opts.descending is truthy add it to params
    if (opts.descending) {
      params.push('descending=true');
    }

    // If opts.include_docs exists, add the include_docs value to the
    // list of parameters.
    // If include_docs=true then include the associated document with each
    // result.
    if (opts.include_docs) {
      params.push('include_docs=true');
    }

    if (opts.key) {
      params.push('key=' + encodeURIComponent(JSON.stringify(opts.key)));
    }

    // If opts.startkey exists, add the startkey value to the list of
    // parameters.
    // If startkey is given then the returned list of documents will
    // start with the document whose id is startkey.
    if (opts.startkey) {
      params.push('startkey=' +
        encodeURIComponent(JSON.stringify(opts.startkey)));
    }

    // If opts.endkey exists, add the endkey value to the list of parameters.
    // If endkey is given then the returned list of docuemnts will
    // end with the document whose id is endkey.
    if (opts.endkey) {
      params.push('endkey=' + encodeURIComponent(JSON.stringify(opts.endkey)));
    }

    if (typeof opts.inclusive_end !== 'undefined') {
      params.push('inclusive_end=' + !!opts.inclusive_end);
    }

    // If opts.limit exists, add the limit value to the parameter list.
    if (typeof opts.limit !== 'undefined') {
      params.push('limit=' + opts.limit);
    }

    if (typeof opts.skip !== 'undefined') {
      params.push('skip=' + opts.skip);
    }

    // Format the list of parameters into a valid URI query string
    params = params.join('&');
    if (params !== '') {
      params = '?' + params;
    }

    if (typeof opts.keys !== 'undefined') {

      var MAX_URL_LENGTH = 2000;
      // according to http://stackoverflow.com/a/417184/680742,
      // the de factor URL length limit is 2000 characters

      var keysAsString =
        'keys=' + encodeURIComponent(JSON.stringify(opts.keys));
      if (keysAsString.length + params.length + 1 <= MAX_URL_LENGTH) {
        // If the keys are short enough, do a GET. we do this to work around
        // Safari not understanding 304s on POSTs (see issue #1239)
        params += (params.indexOf('?') !== -1 ? '&' : '?') + keysAsString;
      } else {
        // If keys are too long, issue a POST request to circumvent GET
        // query string limits
        // see http://wiki.apache.org/couchdb/HTTP_view_API#Querying_Options
        method = 'POST';
        body = JSON.stringify({keys: opts.keys});
      }
    }

    // Get the document listing
    ajax({
      headers: host.headers,
      method: method,
      url: genDBUrl(host, '_all_docs' + params),
      body: body
    }, callback);
  });

  // Get a list of changes made to documents in the database given by host.
  // TODO According to the README, there should be two other methods here,
  // api.changes.addListener and api.changes.removeListener.
  api._changes = function (opts) {
    // We internally page the results of a changes request, this means
    // if there is a large set of changes to be returned we can start
    // processing them quicker instead of waiting on the entire
    // set of changes to return and attempting to process them at once
    var batchSize = 'batch_size' in opts ? opts.batch_size : CHANGES_BATCH_SIZE;

    opts = utils.clone(opts);
    opts.timeout = opts.timeout || 30 * 1000;

    // We give a 5 second buffer for CouchDB changes to respond with
    // an ok timeout
    var params = { timeout: opts.timeout - (5 * 1000) };
    var limit = (typeof opts.limit !== 'undefined') ? opts.limit : false;
    if (limit === 0) {
      limit = 1;
    }
    var returnDocs;
    if ('returnDocs' in opts) {
      returnDocs = opts.returnDocs;
    } else {
      returnDocs = true;
    }
    //
    var leftToFetch = limit;

    if (opts.style) {
      params.style = opts.style;
    }

    if (opts.include_docs || opts.filter && typeof opts.filter === 'function') {
      params.include_docs = true;
    }

    if (opts.continuous) {
      params.feed = 'longpoll';
    }

    if (opts.conflicts) {
      params.conflicts = true;
    }

    if (opts.descending) {
      params.descending = true;
    }

    if (opts.filter && typeof opts.filter === 'string') {
      params.filter = opts.filter;
      if (opts.filter === '_view' &&
          opts.view &&
          typeof opts.view === 'string') {
        params.view = opts.view;
      }
    }

    // If opts.query_params exists, pass it through to the changes request.
    // These parameters may be used by the filter on the source database.
    if (opts.query_params && typeof opts.query_params === 'object') {
      for (var param_name in opts.query_params) {
        if (opts.query_params.hasOwnProperty(param_name)) {
          params[param_name] = opts.query_params[param_name];
        }
      }
    }

    var xhr;
    var lastFetchedSeq;

    // Get all the changes starting wtih the one immediately after the
    // sequence number given by since.
    var fetch = function (since, callback) {
      if (opts.aborted) {
        return;
      }
      params.since = since;
      if (opts.descending) {
        if (limit) {
          params.limit = leftToFetch;
        }
      } else {
        params.limit = (!limit || leftToFetch > batchSize) ?
          batchSize : leftToFetch;
      }

      var paramStr = '?' + Object.keys(params).map(function (k) {
        return k + '=' + params[k];
      }).join('&');

      // Set the options for the ajax call
      var xhrOpts = {
        headers: host.headers,
        method: 'GET',
        url: genDBUrl(host, '_changes' + paramStr),
        // _changes can take a long time to generate, especially when filtered
        timeout: opts.timeout
      };
      lastFetchedSeq = since;

      if (opts.aborted) {
        return;
      }

      // Get the changes
      xhr = ajax(xhrOpts, callback);
    };

    // If opts.since exists, get all the changes from the sequence
    // number given by opts.since. Otherwise, get all the changes
    // from the sequence number 0.
    var fetchTimeout = 10;
    var fetchRetryCount = 0;

    var results = {results: []};

    var fetched = function (err, res) {
      if (opts.aborted) {
        return;
      }
      var raw_results_length = 0;
      // If the result of the ajax call (res) contains changes (res.results)
      if (res && res.results) {
        raw_results_length = res.results.length;
        results.last_seq = res.last_seq;
        // For each change
        var req = {};
        req.query = opts.query_params;
        res.results = res.results.filter(function (c) {
          leftToFetch--;
          var ret = utils.filterChange(opts)(c);
          if (ret) {
            if (returnDocs) {
              results.results.push(c);
            }
            utils.call(opts.onChange, c);
          }
          return ret;
        });
      } else if (err) {
        // In case of an error, stop listening for changes and call
        // opts.complete
        opts.aborted = true;
        utils.call(opts.complete, err);
        return;
      }

      // The changes feed may have timed out with no results
      // if so reuse last update sequence
      if (res && res.last_seq) {
        lastFetchedSeq = res.last_seq;
      }

      var finished = (limit && leftToFetch <= 0) ||
        (res && raw_results_length < batchSize) ||
        (opts.descending);

      if ((opts.continuous && !(limit && leftToFetch <= 0)) || !finished) {
        // Increase retry delay exponentially as long as errors persist
        if (err) {
          fetchRetryCount += 1;
        } else {
          fetchRetryCount = 0;
        }
        var timeoutMultiplier = 1 << fetchRetryCount;
        var retryWait = fetchTimeout * timeoutMultiplier;
        var maximumWait = opts.maximumWait || 30000;

        if (retryWait > maximumWait) {
          utils.call(opts.complete, err || errors.UNKNOWN_ERROR);
          return;
        }

        // Queue a call to fetch again with the newest sequence number
        setTimeout(function () { fetch(lastFetchedSeq, fetched); }, retryWait);
      } else {
        // We're done, call the callback
        utils.call(opts.complete, null, results);
      }
    };

    fetch(opts.since || 0, fetched);

    // Return a method to cancel this method from processing any more
    return {
      cancel: function () {
        opts.aborted = true;
        if (xhr) {
          xhr.abort();
        }
      }
    };
  };

  // Given a set of document/revision IDs (given by req), tets the subset of
  // those that do NOT correspond to revisions stored in the database.
  // See http://wiki.apache.org/couchdb/HttpPostRevsDiff
  api.revsDiff = utils.adapterFun('revsDiff', function (req, opts, callback) {
    // If no options were given, set the callback to be the second parameter
    if (typeof opts === 'function') {
      callback = opts;
      opts = {};
    }

    // Get the missing document/revision IDs
    ajax({
      headers: host.headers,
      method: 'POST',
      url: genDBUrl(host, '_revs_diff'),
      body: JSON.stringify(req)
    }, callback);
  });

  api._close = function (callback) {
    callback();
  };

  api.destroy = utils.adapterFun('destroy', function (callback) {
    ajax({
      url: genDBUrl(host, ''),
      method: 'DELETE',
      headers: host.headers
    }, function (err, resp) {
      if (err) {
        api.emit('error', err);
        callback(err);
      } else {
        api.emit('destroyed');
        callback(null, resp);
      }
    });
  });
}

// Delete the HttpPouch specified by the given name.
HttpPouch.destroy = utils.toPromise(function (name, opts, callback) {
  var host = getHost(name, opts);
  opts = opts || {};
  if (typeof opts === 'function') {
    callback = opts;
    opts = {};
  }
  opts = utils.clone(opts);
  opts.headers = host.headers;
  opts.method = 'DELETE';
  opts.url = genDBUrl(host, '');
  var ajaxOpts = opts.ajax || {};
  opts = utils.extend({}, opts, ajaxOpts);
  utils.ajax(opts, callback);
});

// HttpPouch is a valid adapter.
HttpPouch.valid = function () {
  return true;
};

module.exports = HttpPouch;

}).call(this,_dereq_("/Users/nolan/workspace/pouchdb/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js"))
},{"../deps/errors":11,"../utils":23,"/Users/nolan/workspace/pouchdb/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js":28}],3:[function(_dereq_,module,exports){
(function (process,global){
'use strict';

var utils = _dereq_('../utils');
var merge = _dereq_('../merge');
var errors = _dereq_('../deps/errors');
var vuvuzela = _dereq_('vuvuzela');

var cachedDBs = {};
var taskQueue = {
  running: false,
  queue: []
};

function tryCode(fun, that, args) {
  try {
    fun.apply(that, args);
  } catch (err) { // shouldn't happen
    if (window.PouchDB) {
      window.PouchDB.emit('error', err);
    }
  }
}

function applyNext() {
  if (taskQueue.running || !taskQueue.queue.length) {
    return;
  }
  taskQueue.running = true;
  var item = taskQueue.queue.shift();
  item.action(function (err, res) {
    tryCode(item.callback, this, [err, res]);
    taskQueue.running = false;
    process.nextTick(applyNext);
  });
}

function idbError(callback) {
  return function (event) {
    var message = (event.target && event.target.error &&
      event.target.error.name) || event.target;
    callback(errors.error(errors.IDB_ERROR, message, event.type));
  };
}

function isModernIdb() {
  // check for outdated implementations of IDB
  // that rely on the setVersion method instead of onupgradeneeded (issue #1207)

  // cache based on appVersion, in case the browser is updated
  var cacheKey = "_pouch__checkModernIdb_" +
    (global.navigator && global.navigator.appVersion);
  var cached = utils.hasLocalStorage() && global.localStorage[cacheKey];
  if (cached) {
    return JSON.parse(cached);
  }

  var dbName = '_pouch__checkModernIdb';
  var result = global.indexedDB.open(dbName, 1).onupgradeneeded === null;

  if (global.indexedDB.deleteDatabase) {
    global.indexedDB.deleteDatabase(dbName); // db no longer needed
  }
  if (utils.hasLocalStorage()) {
    global.localStorage[cacheKey] = JSON.stringify(result); // cache
  }
  return result;
}

// Unfortunately, the metadata has to be stringified
// when it is put into the database, because otherwise
// IndexedDB can throw errors for deeply-nested objects.
// Originally we just used JSON.parse/JSON.stringify; now
// we use this custom vuvuzela library that avoids recursion.
// If we could do it all over again, we'd probably use a
// format for the revision trees other than JSON.
function encodeMetadata(metadata, winningRev, deleted) {
  var storedObject = {data: vuvuzela.stringify(metadata)};
  storedObject.winningRev = winningRev;
  storedObject.deletedOrLocal = deleted ? '1' : '0';
  storedObject.id = metadata.id;
  return storedObject;
}

function decodeMetadata(storedObject) {
  if (!storedObject) {
    return null;
  }
  if (!storedObject.data) {
    // old format, when we didn't store it stringified
    return storedObject;
  }
  var metadata = vuvuzela.parse(storedObject.data);
  metadata.winningRev = storedObject.winningRev;
  metadata.deletedOrLocal = storedObject.deletedOrLocal === '1';
  return metadata;
}

function IdbPouch(opts, callback) {
  var api = this;

  taskQueue.queue.push({
    action: function (thisCallback) {
      init(api, opts, thisCallback);
    },
    callback: callback
  });
  applyNext();
}

function init(api, opts, callback) {

  // IndexedDB requires a versioned database structure, so we use the
  // version here to manage migrations.
  var ADAPTER_VERSION = 3;

  // The object stores created for each database
  // DOC_STORE stores the document meta data, its revision history and state
  // Keyed by document id
  var DOC_STORE = 'document-store';
  // BY_SEQ_STORE stores a particular version of a document, keyed by its
  // sequence id
  var BY_SEQ_STORE = 'by-sequence';
  // Where we store attachments
  var ATTACH_STORE = 'attach-store';
  // Where we store database-wide meta data in a single record
  // keyed by id: META_STORE
  var META_STORE = 'meta-store';
  // Where we store local documents
  var LOCAL_STORE = 'local-store';
  // Where we detect blob support
  var DETECT_BLOB_SUPPORT_STORE = 'detect-blob-support';

  var name = opts.name;

  var blobSupport = null;
  var instanceId = null;
  var idStored = false;
  var idb = null;
  var docCount = -1;

  function createSchema(db) {
    db.createObjectStore(DOC_STORE, {keyPath : 'id'})
      .createIndex('seq', 'seq', {unique: true});
    db.createObjectStore(BY_SEQ_STORE, {autoIncrement: true})
      .createIndex('_doc_id_rev', '_doc_id_rev', {unique: true});
    db.createObjectStore(ATTACH_STORE, {keyPath: 'digest'});
    db.createObjectStore(META_STORE, {keyPath: 'id', autoIncrement: false});
    db.createObjectStore(DETECT_BLOB_SUPPORT_STORE);
  }

  // migration to version 2
  // unfortunately "deletedOrLocal" is a misnomer now that we no longer
  // store local docs in the main doc-store, but whaddyagonnado
  function addDeletedOrLocalIndex(e, callback) {
    var transaction = e.currentTarget.transaction;
    var docStore = transaction.objectStore(DOC_STORE);
    docStore.createIndex('deletedOrLocal', 'deletedOrLocal', {unique : false});

    docStore.openCursor().onsuccess = function (event) {
      var cursor = event.target.result;
      if (cursor) {
        var metadata = cursor.value;
        var deleted = utils.isDeleted(metadata);
        metadata.deletedOrLocal = deleted ? "1" : "0";
        docStore.put(metadata);
        cursor["continue"]();
      } else {
        callback(transaction);
      }
    };
  }

  // migrations to get to version 3

  function createLocalStoreSchema(db) {
    db.createObjectStore(LOCAL_STORE, {keyPath: '_id'})
      .createIndex('_doc_id_rev', '_doc_id_rev', {unique: true});
  }

  function migrateLocalStore(e, tx) {
    tx = tx || e.currentTarget.transaction;
    var localStore = tx.objectStore(LOCAL_STORE);
    var docStore = tx.objectStore(DOC_STORE);
    var seqStore = tx.objectStore(BY_SEQ_STORE);

    var cursor = docStore.openCursor();
    cursor.onsuccess = function (event) {
      var cursor = event.target.result;
      if (cursor) {
        var metadata = cursor.value;
        var docId = metadata.id;
        var local = utils.isLocalId(docId);
        var rev = merge.winningRev(metadata);
        if (local) {
          var docIdRev = docId + "::" + rev;
          // remove all seq entries
          // associated with this docId
          var start = docId + "::";
          var end = docId + "::~";
          var index = seqStore.index('_doc_id_rev');
          var range = global.IDBKeyRange.bound(start, end, false, false);
          var seqCursor = index.openCursor(range);
          seqCursor.onsuccess = function (e) {
            seqCursor = e.target.result;
            if (!seqCursor) {
              // done
              docStore["delete"](cursor.primaryKey);
              cursor["continue"]();
            } else {
              var data = seqCursor.value;
              if (data._doc_id_rev === docIdRev) {
                localStore.put(data);
              }
              seqStore["delete"](seqCursor.primaryKey);
              seqCursor["continue"]();
            }
          };
        } else {
          cursor["continue"]();
        }
      }
    };
  }

  api.type = function () {
    return 'idb';
  };

  api._id = utils.toPromise(function (callback) {
    callback(null, instanceId);
  });

  api._bulkDocs = function idb_bulkDocs(req, opts, callback) {
    var newEdits = opts.new_edits;
    var userDocs = req.docs;
    // Parse the docs, give them a sequence number for the result
    var docInfos = userDocs.map(function (doc, i) {
      if (doc._id && utils.isLocalId(doc._id)) {
        return doc;
      }
      var newDoc = utils.parseDoc(doc, newEdits);
      newDoc._bulk_seq = i;
      return newDoc;
    });

    var docInfoErrors = docInfos.filter(function (docInfo) {
      return docInfo.error;
    });
    if (docInfoErrors.length) {
      return callback(docInfoErrors[0]);
    }

    var results = new Array(docInfos.length);
    var fetchedDocs = new utils.Map();
    var updateSeq = 0;
    var numDocsWritten = 0;

    function writeMetaData(e) {
      var meta = e.target.result;
      meta.updateSeq = (meta.updateSeq || 0) + updateSeq;
      txn.objectStore(META_STORE).put(meta);
    }

    function checkDoneWritingDocs() {
      if (++numDocsWritten === docInfos.length) {
        txn.objectStore(META_STORE).get(META_STORE).onsuccess = writeMetaData;
      }
    }

    function processDocs() {
      if (!docInfos.length) {
        return;
      }

      var idsToDocs = new utils.Map();

      docInfos.forEach(function (currentDoc, resultsIdx) {
        if (currentDoc._id && utils.isLocalId(currentDoc._id)) {
          api[currentDoc._deleted ? '_removeLocal' : '_putLocal'](
              currentDoc, {ctx: txn}, function (err, resp) {
            if (err) {
              results[resultsIdx] = err;
            } else {
              results[resultsIdx] = {};
            }
            checkDoneWritingDocs();
          });
          return;
        }

        var id = currentDoc.metadata.id;
        if (idsToDocs.has(id)) {
          idsToDocs.get(id).push([currentDoc, resultsIdx]);
        } else {
          idsToDocs.set(id, [[currentDoc, resultsIdx]]);
        }
      });

      // in the case of new_edits, the user can provide multiple docs
      // with the same id. these need to be processed sequentially
      idsToDocs.forEach(function (docs, id) {
        var numDone = 0;

        function docWritten() {
          checkDoneWritingDocs();
          if (++numDone < docs.length) {
            nextDoc();
          }
        }
        function nextDoc() {
          var value = docs[numDone];
          var currentDoc = value[0];
          var resultsIdx = value[1];

          if (fetchedDocs.has(id)) {
            updateDoc(fetchedDocs.get(id), currentDoc, resultsIdx, docWritten);
          } else {
            insertDoc(currentDoc, resultsIdx, docWritten);
          }
        }
        nextDoc();
      });
    }

    function fetchExistingDocs(callback) {
      if (!docInfos.length) {
        return callback();
      }

      var numFetched = 0;

      function checkDone() {
        if (++numFetched === docInfos.length) {
          callback();
        }
      }

      docInfos.forEach(function (docInfo) {
        if (docInfo._id && utils.isLocalId(docInfo._id)) {
          return checkDone(); // skip local docs
        }
        var id = docInfo.metadata.id;
        var req = txn.objectStore(DOC_STORE).get(id);
        req.onsuccess = function process_docRead(event) {
          var metadata = decodeMetadata(event.target.result);
          if (metadata) {
            fetchedDocs.set(id, metadata);
          }
          checkDone();
        };
      });
    }

    function complete() {
      var aresults = results.map(function (result) {
        if (result._bulk_seq) {
          delete result._bulk_seq;
        } else if (!Object.keys(result).length) {
          return {
            ok: true
          };
        }
        if (result.error) {
          return result;
        }

        var metadata = result.metadata;
        var rev = merge.winningRev(metadata);

        return {
          ok: true,
          id: metadata.id,
          rev: rev
        };
      });
      IdbPouch.Changes.notify(name);
      docCount = -1; // invalidate
      callback(null, aresults);
    }

    function preprocessAttachment(att, finish) {
      if (att.stub) {
        return finish();
      }
      if (typeof att.data === 'string') {
        var data;
        try {
          data = atob(att.data);
        } catch (e) {
          var err = errors.error(errors.BAD_ARG,
                                "Attachments need to be base64 encoded");
          return callback(err);
        }
        if (blobSupport) {
          var type = att.content_type;
          data = utils.fixBinary(data);
          att.data = utils.createBlob([data], {type: type});
        }
        utils.MD5(data).then(function (result) {
          att.digest = 'md5-' + result;
          finish();
        });
        return;
      }
      var reader = new FileReader();
      reader.onloadend = function (e) {
        var binary = utils.arrayBufferToBinaryString(this.result || '');
        if (!blobSupport) {
          att.data = btoa(binary);
        }
        utils.MD5(binary).then(function (result) {
          att.digest = 'md5-' + result;
          finish();
        });
      };
      reader.readAsArrayBuffer(att.data);
    }

    function preprocessAttachments(callback) {
      if (!docInfos.length) {
        return callback();
      }

      var docv = 0;
      docInfos.forEach(function (docInfo) {
        var attachments = docInfo.data && docInfo.data._attachments ?
          Object.keys(docInfo.data._attachments) : [];

        if (!attachments.length) {
          return done();
        }

        var recv = 0;
        function attachmentProcessed() {
          recv++;
          if (recv === attachments.length) {
            done();
          }
        }

        for (var key in docInfo.data._attachments) {
          if (docInfo.data._attachments.hasOwnProperty(key)) {
            preprocessAttachment(docInfo.data._attachments[key],
                                 attachmentProcessed);
          }
        }
      });

      function done() {
        docv++;
        if (docInfos.length === docv) {
          callback();
        }
      }
    }

    function writeDoc(docInfo, winningRev, deleted, callback, resultsIdx) {
      var err = null;
      var recv = 0;
      docInfo.data._id = docInfo.metadata.id;
      docInfo.data._rev = docInfo.metadata.rev;

      if (deleted) {
        docInfo.data._deleted = true;
      }

      var attachments = docInfo.data._attachments ?
        Object.keys(docInfo.data._attachments) : [];

      function collectResults(attachmentErr) {
        if (!err) {
          if (attachmentErr) {
            err = attachmentErr;
            callback(err);
          } else if (recv === attachments.length) {
            finish();
          }
        }
      }

      function attachmentSaved(err) {
        recv++;
        collectResults(err);
      }

      for (var key in docInfo.data._attachments) {
        if (!docInfo.data._attachments[key].stub) {
          var data = docInfo.data._attachments[key].data;
          delete docInfo.data._attachments[key].data;
          var digest = docInfo.data._attachments[key].digest;
          saveAttachment(docInfo, digest, data, attachmentSaved);
        } else {
          recv++;
          collectResults();
        }
      }

      function finish() {
        updateSeq++;
        docInfo.data._doc_id_rev = docInfo.data._id + "::" + docInfo.data._rev;
        var seqStore = txn.objectStore(BY_SEQ_STORE);
        var index = seqStore.index('_doc_id_rev');

        function afterPut(e) {
          var metadata = docInfo.metadata;
          metadata.seq = e.target.result;
          // Current _rev is calculated from _rev_tree on read
          delete metadata.rev;
          var metadataToStore = encodeMetadata(metadata, winningRev, deleted);
          var metaDataReq = txn.objectStore(DOC_STORE).put(metadataToStore);
          metaDataReq.onsuccess = function () {
            delete metadata.deletedOrLocal;
            delete metadata.winningRev;
            results[resultsIdx] = docInfo;
            fetchedDocs.set(docInfo.metadata.id, docInfo.metadata);
            utils.call(callback);
          };
        }

        var putReq = seqStore.put(docInfo.data);

        putReq.onsuccess = afterPut;
        putReq.onerror = function (e) {
          // ConstraintError, need to update, not put (see #1638 for details)
          e.preventDefault(); // avoid transaction abort
          e.stopPropagation(); // avoid transaction onerror
          var getKeyReq = index.getKey(docInfo.data._doc_id_rev);
          getKeyReq.onsuccess = function (e) {
            var putReq = seqStore.put(docInfo.data, e.target.result);
            updateSeq--; // discount, since it's an update, not a new seq
            putReq.onsuccess = afterPut;
          };
        };
      }

      if (!attachments.length) {
        finish();
      }
    }

    function updateDoc(oldDoc, docInfo, resultsIdx, callback) {
      var merged =
        merge.merge(oldDoc.rev_tree, docInfo.metadata.rev_tree[0], 1000);
      var wasPreviouslyDeleted = utils.isDeleted(oldDoc);
      var deleted = utils.isDeleted(docInfo.metadata);
      var inConflict = (wasPreviouslyDeleted && deleted && newEdits) ||
        (!wasPreviouslyDeleted && newEdits && merged.conflicts !== 'new_leaf');

      if (inConflict) {
        results[resultsIdx] = makeErr(errors.REV_CONFLICT, docInfo._bulk_seq);
        return callback();
      }

      docInfo.metadata.rev_tree = merged.tree;

      // recalculate
      var winningRev = merge.winningRev(docInfo.metadata);
      deleted = utils.isDeleted(docInfo.metadata, winningRev);

      writeDoc(docInfo, winningRev, deleted, callback, resultsIdx);
    }

    function insertDoc(docInfo, resultsIdx, callback) {
      var winningRev = merge.winningRev(docInfo.metadata);
      var deleted = utils.isDeleted(docInfo.metadata, winningRev);
      // Cant insert new deleted documents
      if ('was_delete' in opts && deleted) {
        results[resultsIdx] = errors.MISSING_DOC;
        return callback();
      }

      writeDoc(docInfo, winningRev, deleted, callback, resultsIdx);
    }

    // Insert sequence number into the error so we can sort later
    function makeErr(err, seq) {
      err._bulk_seq = seq;
      return err;
    }

    function saveAttachment(docInfo, digest, data, callback) {
      var objectStore = txn.objectStore(ATTACH_STORE);
      objectStore.get(digest).onsuccess = function (e) {
        var originalRefs = e.target.result && e.target.result.refs || {};
        var ref = [docInfo.metadata.id, docInfo.metadata.rev].join('@');
        var newAtt = {
          digest: digest,
          body: data,
          refs: originalRefs
        };
        newAtt.refs[ref] = true;
        objectStore.put(newAtt).onsuccess = function (e) {
          utils.call(callback);
        };
      };
    }

    var txn;
    preprocessAttachments(function () {
      var stores = [DOC_STORE, BY_SEQ_STORE, ATTACH_STORE, META_STORE,
        LOCAL_STORE];
      txn = idb.transaction(stores, 'readwrite');
      txn.onerror = idbError(callback);
      txn.ontimeout = idbError(callback);
      txn.oncomplete = complete;

      fetchExistingDocs(processDocs);
    });
  };

  // First we look up the metadata in the ids database, then we fetch the
  // current revision(s) from the by sequence store
  api._get = function idb_get(id, opts, callback) {
    var doc;
    var metadata;
    var err;
    var txn;
    opts = utils.clone(opts);
    if (opts.ctx) {
      txn = opts.ctx;
    } else {
      txn =
        idb.transaction([DOC_STORE, BY_SEQ_STORE, ATTACH_STORE], 'readonly');
    }

    function finish() {
      callback(err, {doc: doc, metadata: metadata, ctx: txn});
    }

    txn.objectStore(DOC_STORE).get(id).onsuccess = function (e) {
      metadata = decodeMetadata(e.target.result);
      // we can determine the result here if:
      // 1. there is no such document
      // 2. the document is deleted and we don't ask about specific rev
      // When we ask with opts.rev we expect the answer to be either
      // doc (possibly with _deleted=true) or missing error
      if (!metadata) {
        err = errors.MISSING_DOC;
        return finish();
      }
      if (utils.isDeleted(metadata) && !opts.rev) {
        err = errors.error(errors.MISSING_DOC, "deleted");
        return finish();
      }
      var objectStore = txn.objectStore(BY_SEQ_STORE);

      // metadata.winningRev was added later, so older DBs might not have it
      var rev = opts.rev || metadata.winningRev || merge.winningRev(metadata);
      var key = metadata.id + '::' + rev;

      objectStore.index('_doc_id_rev').get(key).onsuccess = function (e) {
        doc = e.target.result;
        if (doc && doc._doc_id_rev) {
          delete(doc._doc_id_rev);
        }
        if (!doc) {
          err = errors.MISSING_DOC;
          return finish();
        }
        finish();
      };
    };
  };

  api._getAttachment = function (attachment, opts, callback) {
    var txn;
    opts = utils.clone(opts);
    if (opts.ctx) {
      txn = opts.ctx;
    } else {
      txn =
        idb.transaction([DOC_STORE, BY_SEQ_STORE, ATTACH_STORE], 'readonly');
    }
    var digest = attachment.digest;
    var type = attachment.content_type;

    txn.objectStore(ATTACH_STORE).get(digest).onsuccess = function (e) {
      var data = e.target.result.body;
      if (opts.encode) {
        if (!data) {
          callback(null, '');
        } else if (typeof data !== 'string') { // we have blob support
          var reader = new FileReader();
          reader.onloadend = function (e) {
            var binary = utils.arrayBufferToBinaryString(this.result || '');
            callback(null, btoa(binary));
          };
          reader.readAsArrayBuffer(data);
        } else { // no blob support
          callback(null, data);
        }
      } else {
        if (!data) {
          callback(null, utils.createBlob([''], {type: type}));
        } else if (typeof data !== 'string') { // we have blob support
          callback(null, data);
        } else { // no blob support
          data = utils.fixBinary(atob(data));
          callback(null, utils.createBlob([data], {type: type}));
        }
      }
    };
  };

  function allDocsQuery(totalRows, opts, callback) {
    var start = 'startkey' in opts ? opts.startkey : false;
    var end = 'endkey' in opts ? opts.endkey : false;
    var key = 'key' in opts ? opts.key : false;
    var skip = opts.skip || 0;
    var limit = typeof opts.limit === 'number' ? opts.limit : -1;
    var inclusiveEnd = opts.inclusive_end !== false;
    var descending = 'descending' in opts && opts.descending ? 'prev' : null;

    var manualDescEnd = false;
    if (descending && start && end) {
      // unfortunately IDB has a quirk where IDBKeyRange.bound is invalid if the
      // start is less than the end, even in descending mode.  Best bet
      // is just to handle it manually in that case.
      manualDescEnd = end;
      end = false;
    }

    var keyRange = null;
    try {
      if (start && end) {
        keyRange = global.IDBKeyRange.bound(start, end, false, !inclusiveEnd);
      } else if (start) {
        if (descending) {
          keyRange = global.IDBKeyRange.upperBound(start);
        } else {
          keyRange = global.IDBKeyRange.lowerBound(start);
        }
      } else if (end) {
        if (descending) {
          keyRange = global.IDBKeyRange.lowerBound(end, !inclusiveEnd);
        } else {
          keyRange = global.IDBKeyRange.upperBound(end, !inclusiveEnd);
        }
      } else if (key) {
        keyRange = global.IDBKeyRange.only(key);
      }
    } catch (e) {
      if (e.name === "DataError" && e.code === 0) {
        // data error, start is less than end
        return callback(null, {
          total_rows : totalRows,
          offset : opts.skip,
          rows : []
        });
      } else {
        return callback(errors.error(errors.IDB_ERROR, e.name, e.message));
      }
    }

    var transaction = idb.transaction([DOC_STORE, BY_SEQ_STORE], 'readonly');
    transaction.oncomplete = function () {
      callback(null, {
        total_rows: totalRows,
        offset: opts.skip,
        rows: results
      });
    };

    var oStore = transaction.objectStore(DOC_STORE);
    var oCursor = descending ? oStore.openCursor(keyRange, descending)
      : oStore.openCursor(keyRange);
    var results = [];
    oCursor.onsuccess = function (e) {
      if (!e.target.result) {
        return;
      }
      var cursor = e.target.result;
      var metadata = decodeMetadata(cursor.value);
      // metadata.winningRev added later, some dbs might be missing it
      var winningRev = metadata.winningRev || merge.winningRev(metadata);

      function allDocsInner(metadata, data) {
        var doc = {
          id: metadata.id,
          key: metadata.id,
          value: {
            rev: winningRev
          }
        };
        if (opts.include_docs) {
          doc.doc = data;
          doc.doc._rev = winningRev;
          if (doc.doc._doc_id_rev) {
            delete(doc.doc._doc_id_rev);
          }
          if (opts.conflicts) {
            doc.doc._conflicts = merge.collectConflicts(metadata);
          }
          for (var att in doc.doc._attachments) {
            if (doc.doc._attachments.hasOwnProperty(att)) {
              doc.doc._attachments[att].stub = true;
            }
          }
        }
        var deleted = utils.isDeleted(metadata, winningRev);
        if (opts.deleted === 'ok') {
          // deleted docs are okay with keys_requests
          if (deleted) {
            doc.value.deleted = true;
            doc.doc = null;
          }
          results.push(doc);
        } else if (!deleted && skip-- <= 0) {
          if (manualDescEnd) {
            if (inclusiveEnd && doc.key < manualDescEnd) {
              return;
            } else if (!inclusiveEnd && doc.key <= manualDescEnd) {
              return;
            }
          }
          results.push(doc);
          if (--limit === 0) {
            return;
          }
        }
        cursor["continue"]();
      }

      if (!opts.include_docs) {
        allDocsInner(metadata);
      } else {
        var index = transaction.objectStore(BY_SEQ_STORE).index('_doc_id_rev');
        var key = metadata.id + "::" + winningRev;
        index.get(key).onsuccess = function (event) {
          allDocsInner(decodeMetadata(cursor.value), event.target.result);
        };
      }
    };
  }

  function countDocs(callback) {
    if (docCount !== -1) {
      return callback(null, docCount);
    }

    var count;
    var txn = idb.transaction([DOC_STORE], 'readonly');
    var index = txn.objectStore(DOC_STORE).index('deletedOrLocal');
    index.count(global.IDBKeyRange.only("0")).onsuccess = function (e) {
      count = e.target.result;
    };
    txn.onerror = idbError(callback);
    txn.oncomplete = function () {
      docCount = count;
      callback(null, docCount);
    };
  }

  api._allDocs = function idb_allDocs(opts, callback) {

    // first count the total_rows
    countDocs(function (err, totalRows) {
      if (err) {
        return callback(err);
      }
      if (opts.limit === 0) {
        return callback(null, {
          total_rows : totalRows,
          offset : opts.skip,
          rows : []
        });
      }
      allDocsQuery(totalRows, opts, callback);
    });
  };

  api._info = function idb_info(callback) {

    countDocs(function (err, count) {
      if (err) {
        return callback(err);
      }
      if (idb === null) {
        var error = new Error('db isn\'t open');
        error.id = 'idbNull';
        return callback(error);
      }
      var updateSeq = 0;
      var txn = idb.transaction([META_STORE], 'readonly');

      txn.objectStore(META_STORE).get(META_STORE).onsuccess = function (e) {
        updateSeq = e.target.result && e.target.result.updateSeq || 0;
      };

      txn.oncomplete = function () {
        callback(null, {
          doc_count: count,
          update_seq: updateSeq
        });
      };
    });
  };

  api._changes = function (opts) {
    opts = utils.clone(opts);

    if (opts.continuous) {
      var id = name + ':' + utils.uuid();
      IdbPouch.Changes.addListener(name, id, api, opts);
      IdbPouch.Changes.notify(name);
      return {
        cancel: function () {
          IdbPouch.Changes.removeListener(name, id);
        }
      };
    }

    var descending = opts.descending ? 'prev' : null;
    var lastSeq = 0;

    // Ignore the `since` parameter when `descending` is true
    opts.since = opts.since && !descending ? opts.since : 0;

    var limit = 'limit' in opts ? opts.limit : -1;
    if (limit === 0) {
      limit = 1; // per CouchDB _changes spec
    }
    var returnDocs;
    if ('returnDocs' in opts) {
      returnDocs = opts.returnDocs;
    } else {
      returnDocs = true;
    }

    var results = [];
    var numResults = 0;
    var filter = utils.filterChange(opts);

    var txn;

    function fetchChanges() {
      txn = idb.transaction([DOC_STORE, BY_SEQ_STORE], 'readonly');
      txn.oncomplete = onTxnComplete;

      var req;

      if (descending) {
        req = txn.objectStore(BY_SEQ_STORE)
            .openCursor(global.IDBKeyRange.lowerBound(opts.since, true),
                        descending);
      } else {
        req = txn.objectStore(BY_SEQ_STORE)
            .openCursor(global.IDBKeyRange.lowerBound(opts.since, true));
      }

      req.onsuccess = onsuccess;
      req.onerror = onerror;
    }

    fetchChanges();

    function onsuccess(event) {
      var cursor = event.target.result;

      if (!cursor) {
        return;
      }

      var doc = cursor.value;

      if (opts.doc_ids && opts.doc_ids.indexOf(doc._id) === -1) {
        return cursor["continue"]();
      }

      var index = txn.objectStore(DOC_STORE);
      index.get(doc._id).onsuccess = function (event) {
        var metadata = decodeMetadata(event.target.result);

        if (lastSeq < metadata.seq) {
          lastSeq = metadata.seq;
        }
        // metadata.winningRev was only added later
        var winningRev = metadata.winningRev || merge.winningRev(metadata);
        if (doc._rev !== winningRev) {
          return cursor["continue"]();
        }

        delete doc['_doc_id_rev'];

        var change = opts.processChange(doc, metadata, opts);
        change.seq = cursor.key;
        if (filter(change)) {
          numResults++;
          if (returnDocs) {
            results.push(change);
          }
          opts.onChange(change);
        }
        if (numResults !== limit) {
          cursor["continue"]();
        }
      };
    }

    function onTxnComplete() {
      if (!opts.continuous) {
        opts.complete(null, {
          results: results,
          last_seq: lastSeq
        });
      }
    }
  };

  api._close = function (callback) {
    if (idb === null) {
      return callback(errors.NOT_OPEN);
    }

    // https://developer.mozilla.org/en-US/docs/IndexedDB/IDBDatabase#close
    // "Returns immediately and closes the connection in a separate thread..."
    idb.close();
    delete cachedDBs[name];
    idb = null;
    callback();
  };

  api._getRevisionTree = function (docId, callback) {
    var txn = idb.transaction([DOC_STORE], 'readonly');
    var req = txn.objectStore(DOC_STORE).get(docId);
    req.onsuccess = function (event) {
      var doc = decodeMetadata(event.target.result);
      if (!doc) {
        callback(errors.MISSING_DOC);
      } else {
        callback(null, doc.rev_tree);
      }
    };
  };

  // This function removes revisions of document docId
  // which are listed in revs and sets this document
  // revision to to rev_tree
  api._doCompaction = function (docId, rev_tree, revs, callback) {
    var txn = idb.transaction([DOC_STORE, BY_SEQ_STORE], 'readwrite');

    var index = txn.objectStore(DOC_STORE);
    index.get(docId).onsuccess = function (event) {
      var metadata = decodeMetadata(event.target.result);
      metadata.rev_tree = rev_tree;

      var count = revs.length;
      revs.forEach(function (rev) {
        var index = txn.objectStore(BY_SEQ_STORE).index('_doc_id_rev');
        var key = docId + "::" + rev;
        index.getKey(key).onsuccess = function (e) {
          var seq = e.target.result;
          if (!seq) {
            return;
          }
          txn.objectStore(BY_SEQ_STORE)["delete"](seq);

          count--;
          if (!count) {
            // winningRev is not guaranteed to be there, since it's
            // not formally migrated. deletedOrLocal is a
            // now-unfortunate name that really just means "deleted"
            var winningRev = metadata.winningRev ||
              merge.winningRev(metadata);
            var deleted = metadata.deletedOrLocal;
            txn.objectStore(DOC_STORE).put(
              encodeMetadata(metadata, winningRev, deleted));
          }
        };
      });
    };
    txn.oncomplete = function () {
      utils.call(callback);
    };
  };


  api._getLocal = function (id, callback) {
    var tx = idb.transaction([LOCAL_STORE], 'readonly');
    var req = tx.objectStore(LOCAL_STORE).get(id);

    req.onerror = idbError(callback);
    req.onsuccess = function (e) {
      var doc = e.target.result;
      if (!doc) {
        callback(errors.MISSING_DOC);
      } else {
        delete doc['_doc_id_rev'];
        callback(null, doc);
      }
    };
  };

  api._putLocal = function (doc, opts, callback) {
    if (typeof opts === 'function') {
      callback = opts;
      opts = {};
    }
    delete doc._revisions; // ignore this, trust the rev
    var oldRev = doc._rev;
    var id = doc._id;
    if (!oldRev) {
      doc._rev = '0-1';
    } else {
      doc._rev = '0-' + (parseInt(oldRev.split('-')[1], 10) + 1);
    }
    doc._doc_id_rev = id + '::' + doc._rev;

    var tx = opts.ctx;
    var ret;
    if (!tx) {
      tx = idb.transaction([LOCAL_STORE], 'readwrite');
      tx.onerror = idbError(callback);
      tx.oncomplete = function () {
        if (ret) {
          callback(null, ret);
        }
      };
    }

    var oStore = tx.objectStore(LOCAL_STORE);
    var req;
    if (oldRev) {
      var index = oStore.index('_doc_id_rev');
      var docIdRev = id + '::' + oldRev;
      req = index.get(docIdRev);
      req.onsuccess = function (e) {
        if (!e.target.result) {
          callback(errors.REV_CONFLICT);
        } else { // update
          var req = oStore.put(doc);
          req.onsuccess = function () {
            ret = {ok: true, id: doc._id, rev: doc._rev};
            if (opts.ctx) { // retuthis.immediately
              callback(null, ret);
            }
          };
        }
      };
    } else { // new doc
      req = oStore.get(id);
      req.onsuccess = function (e) {
        if (e.target.result) { // already exists
          callback(errors.REV_CONFLICT);
        } else { // insert
          var req = oStore.put(doc);
          req.onsuccess = function () {
            ret = {ok: true, id: doc._id, rev: doc._rev};
            if (opts.ctx) { // return immediately
              callback(null, ret);
            }
          };
        }
      };
    }
  };

  api._removeLocal = function (doc, callback) {
    var tx = idb.transaction([LOCAL_STORE], 'readwrite');
    var ret;
    tx.oncomplete = function () {
      if (ret) {
        callback(null, ret);
      }
    };
    var docIdRev = doc._id + '::' + doc._rev;
    var oStore = tx.objectStore(LOCAL_STORE);
    var index = oStore.index('_doc_id_rev');
    var req = index.get(docIdRev);

    req.onerror = idbError(callback);
    req.onsuccess = function (e) {
      var doc = e.target.result;
      if (!doc) {
        callback(errors.MISSING_DOC);
      } else {
        var req = index.getKey(docIdRev);
        req.onsuccess = function (e) {
          var key = e.target.result;
          oStore["delete"](key);
          ret = {ok: true, id: doc._id, rev: '0-0'};
        };
      }
    };
  };

  var cached = cachedDBs[name];

  if (cached) {
    idb = cached.idb;
    blobSupport = cached.blobSupport;
    instanceId = cached.instanceId;
    idStored = cached.idStored;
    process.nextTick(function () {
      callback(null, api);
    });
    return;
  }

  var req = global.indexedDB.open(name, ADAPTER_VERSION);

  if (!('openReqList' in IdbPouch)) {
    IdbPouch.openReqList = {};
  }
  IdbPouch.openReqList[name] = req;

  req.onupgradeneeded = function (e) {
    var db = e.target.result;
    if (e.oldVersion < 1) {
      // initial schema
      createSchema(db);
    }
    if (e.oldVersion < 3) {
      createLocalStoreSchema(db);
      if (e.oldVersion < 2) {
        // version 2 adds the deletedOrLocal index
        addDeletedOrLocalIndex(e, function (transaction) {
          migrateLocalStore(e, transaction);
        });
      } else {
        migrateLocalStore(e);
      }
    }
  };

  req.onsuccess = function (e) {

    idb = e.target.result;

    idb.onversionchange = function () {
      idb.close();
      delete cachedDBs[name];
    };
    idb.onabort = function () {
      idb.close();
      delete cachedDBs[name];
    };

    var txn = idb.transaction([META_STORE, DETECT_BLOB_SUPPORT_STORE],
      'readwrite');

    var req = txn.objectStore(META_STORE).get(META_STORE);

    req.onsuccess = function (e) {

      var checkSetupComplete = function () {
        if (blobSupport === null || !idStored) {
          return;
        } else {
          cachedDBs[name] = {
            idb: idb,
            blobSupport: blobSupport,
            instanceId: instanceId,
            idStored: idStored,
            loaded: true
          };
          callback(null, api);
        }
      };

      var meta = e.target.result || {id: META_STORE};
      if (name  + '_id' in meta) {
        instanceId = meta[name + '_id'];
        idStored = true;
        checkSetupComplete();
      } else {
        instanceId = utils.uuid();
        meta[name + '_id'] = instanceId;
        txn.objectStore(META_STORE).put(meta).onsuccess = function () {
          idStored = true;
          checkSetupComplete();
        };
      }

      // Detect blob support. Chrome didn't support it until version 38.
      // in version 37 they had a broken version where PNGs (and possibly
      // other binary types) aren't stored correctly.
      try {
        var blob = utils.createBlob([''], {type: 'image/png'});
        txn.objectStore(DETECT_BLOB_SUPPORT_STORE).put(blob, 'key');
        txn.oncomplete = function () {
          // have to do it in a separate transaction, else the correct
          // content type is always returned
          txn = idb.transaction([META_STORE, DETECT_BLOB_SUPPORT_STORE],
            'readwrite');
          var getBlobReq = txn.objectStore(
            DETECT_BLOB_SUPPORT_STORE).get('key');
          getBlobReq.onsuccess = function (e) {
            var storedBlob = e.target.result;
            var url = URL.createObjectURL(storedBlob);
            utils.ajax({
              url: url,
              cache: true,
              binary: true
            }, function (err, res) {
              if (err && err.status === 405) {
                // firefox won't let us do that. but firefox doesn't
                // have the blob type bug that Chrome does, so that's ok
                blobSupport = true;
              } else {
                blobSupport = !!(res && res.type === 'image/png');
              }
              checkSetupComplete();
            });
          };
        };
      } catch (err) {
        blobSupport = false;
        checkSetupComplete();
      }
    };
  };

  req.onerror = idbError(callback);

}

IdbPouch.valid = function () {
  // Issue #2533, we finally gave up on doing bug
  // detection instead of browser sniffing. Safari brought us
  // to our knees.
  var isSafari = typeof openDatabase !== 'undefined' &&
    /Safari/.test(navigator.userAgent) &&
    !/Chrome/.test(navigator.userAgent);
  return !isSafari && global.indexedDB && isModernIdb();
};

function destroy(name, opts, callback) {
  if (!('openReqList' in IdbPouch)) {
    IdbPouch.openReqList = {};
  }
  IdbPouch.Changes.removeAllListeners(name);

  //Close open request for "name" database to fix ie delay.
  if (IdbPouch.openReqList[name] && IdbPouch.openReqList[name].result) {
    IdbPouch.openReqList[name].result.close();
  }
  var req = global.indexedDB.deleteDatabase(name);

  req.onsuccess = function () {
    //Remove open request from the list.
    if (IdbPouch.openReqList[name]) {
      IdbPouch.openReqList[name] = null;
    }
    if (utils.hasLocalStorage() && (name in global.localStorage)) {
      delete global.localStorage[name];
    }
    delete cachedDBs[name];
    callback(null, { 'ok': true });
  };

  req.onerror = idbError(callback);
}

IdbPouch.destroy = utils.toPromise(function (name, opts, callback) {
  taskQueue.queue.push({
    action: function (thisCallback) {
      destroy(name, opts, thisCallback);
    },
    callback: callback
  });
  applyNext();
});

IdbPouch.Changes = new utils.Changes();

module.exports = IdbPouch;

}).call(this,_dereq_("/Users/nolan/workspace/pouchdb/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"../deps/errors":11,"../merge":18,"../utils":23,"/Users/nolan/workspace/pouchdb/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js":28,"vuvuzela":58}],4:[function(_dereq_,module,exports){
module.exports = ['idb', 'websql'];
},{}],5:[function(_dereq_,module,exports){
(function (global){
'use strict';

var utils = _dereq_('../utils');
var merge = _dereq_('../merge');
var errors = _dereq_('../deps/errors');
var vuvuzela = _dereq_('vuvuzela');
function quote(str) {
  return "'" + str + "'";
}

var cachedDatabases = {};

var openDB = utils.getArguments(function (args) {
  if (typeof global !== 'undefined') {
    if (global.navigator && global.navigator.sqlitePlugin &&
        global.navigator.sqlitePlugin.openDatabase) {
      return navigator.sqlitePlugin.openDatabase
        .apply(navigator.sqlitePlugin, args);
    } else if (global.sqlitePlugin && global.sqlitePlugin.openDatabase) {
      return global.sqlitePlugin.openDatabase
        .apply(global.sqlitePlugin, args);
    } else {
      var db = cachedDatabases[args[0]];
      if (!db) {
        db = cachedDatabases[args[0]] =
          global.openDatabase.apply(global, args);
      }
      return db;
    }
  }
});

var POUCH_VERSION = 1;
var ADAPTER_VERSION = 4; // used to manage migrations

// The object stores created for each database
// DOC_STORE stores the document meta data, its revision history and state
var DOC_STORE = quote('document-store');
// BY_SEQ_STORE stores a particular version of a document, keyed by its
// sequence id
var BY_SEQ_STORE = quote('by-sequence');
// Where we store attachments
var ATTACH_STORE = quote('attach-store');
var LOCAL_STORE = quote('local-store');
var META_STORE = quote('metadata-store');

// these indexes cover the ground for most allDocs queries
var BY_SEQ_STORE_DELETED_INDEX_SQL =
  'CREATE INDEX IF NOT EXISTS \'by-seq-deleted-idx\' ON ' +
  BY_SEQ_STORE + ' (seq, deleted)';
var BY_SEQ_STORE_DOC_ID_REV_INDEX_SQL =
  'CREATE UNIQUE INDEX IF NOT EXISTS \'by-seq-doc-id-rev\' ON ' +
    BY_SEQ_STORE + ' (doc_id, rev)';
var DOC_STORE_WINNINGSEQ_INDEX_SQL =
  'CREATE INDEX IF NOT EXISTS \'doc-winningseq-idx\' ON ' +
  DOC_STORE + ' (winningseq)';

var DOC_STORE_AND_BY_SEQ_JOINER = BY_SEQ_STORE +
  '.seq = ' + DOC_STORE + '.winningseq';

var SELECT_DOCS = BY_SEQ_STORE + '.seq AS seq, ' +
  BY_SEQ_STORE + '.deleted AS deleted, ' +
  BY_SEQ_STORE + '.json AS data, ' +
  BY_SEQ_STORE + '.rev AS rev, ' +
  DOC_STORE + '.json AS metadata';

function select(selector, table, joiner, where, orderBy) {
  return 'SELECT ' + selector + ' FROM ' +
    (typeof table === 'string' ? table : table.join(' JOIN ')) +
    (joiner ? (' ON ' + joiner) : '') +
    (where ? (' WHERE ' +
      (typeof where === 'string' ? where : where.join(' AND '))) : '') +
    (orderBy ? (' ORDER BY ' + orderBy) : '');
}

function unknownError(callback) {
  return function (event) {
    // event may actually be a SQLError object, so report is as such
    var errorNameMatch = event && event.constructor.toString()
      .match(/function ([^\(]+)/);
    var errorName = (errorNameMatch && errorNameMatch[1]) || event.type;
    var errorReason = event.target || event.message;
    callback(errors.error(errors.WSQ_ERROR, errorReason, errorName));
  };
}
function decodeUtf8(str) {
  return decodeURIComponent(window.escape(str));
}
function parseHexString(str, encoding) {
  var result = '';
  var charWidth = encoding === 'UTF-8' ? 2 : 4;
  for (var i = 0, len = str.length; i < len; i += charWidth) {
    var substring = str.substring(i, i + charWidth);
    if (charWidth === 4) { // UTF-16, twiddle the bits
      substring = substring.substring(2, 4) + substring.substring(0, 2);
    }
    result += String.fromCharCode(parseInt(substring, 16));
  }
  result = encoding === 'UTF-8' ? decodeUtf8(result) : result;
  return result;
}

function stringifyDoc(doc) {
  // don't bother storing the id/rev. it uses lots of space,
  // in persistent map/reduce especially
  delete doc._id;
  delete doc._rev;
  return JSON.stringify(doc);
}

function unstringifyDoc(doc, id, rev) {
  doc = JSON.parse(doc);
  doc._id = id;
  doc._rev = rev;
  return doc;
}

function getSize(opts) {
  if ('size' in opts) {
    // triggers immediate popup in iOS, fixes #2347
    // e.g. 5000001 asks for 5 MB, 10000001 asks for 10 MB,
    return opts.size * 1000000;
  }
  // In iOS, doesn't matter as long as it's <= 5000000.
  // Except that if you request too much, our tests fail
  // because of the native "do you accept?" popup.
  // In Android <=4.3, this value is actually used as an
  // honest-to-god ceiling for data, so we need to
  // set it to a decently high number.
  var isAndroid = /Android/.test(window.navigator.userAgent);
  return isAndroid ? 5000000 : 1;
}

function WebSqlPouch(opts, callback) {
  var api = this;
  var instanceId = null;
  var name = opts.name;
  var size = getSize(opts);
  var idRequests = [];
  var docCount = -1; // cache sqlite count(*) for performance
  var encoding;

  var db = openDB(name, POUCH_VERSION, name, size);
  if (!db) {
    return callback(errors.UNKNOWN_ERROR);
  } else if (typeof db.readTransaction !== 'function') {
    // doesn't exist in sqlite plugin
    db.readTransaction = db.transaction;
  }

  function dbCreated() {
    // note the db name in case the browser upgrades to idb
    if (utils.hasLocalStorage()) {
      global.localStorage['_pouch__websqldb_' + name] = true;
    }
    callback(null, api);
  }

  // In this migration, we added the 'deleted' and 'local' columns to the
  // by-seq and doc store tables.
  // To preserve existing user data, we re-process all the existing JSON
  // and add these values.
  // Called migration2 because it corresponds to adapter version (db_version) #2
  function runMigration2(tx, callback) {
    // index used for the join in the allDocs query
    tx.executeSql(DOC_STORE_WINNINGSEQ_INDEX_SQL);

    tx.executeSql('ALTER TABLE ' + BY_SEQ_STORE +
      ' ADD COLUMN deleted TINYINT(1) DEFAULT 0', [], function () {
      tx.executeSql(BY_SEQ_STORE_DELETED_INDEX_SQL);
      tx.executeSql('ALTER TABLE ' + DOC_STORE +
        ' ADD COLUMN local TINYINT(1) DEFAULT 0', [], function () {
        tx.executeSql('CREATE INDEX IF NOT EXISTS \'doc-store-local-idx\' ON ' +
          DOC_STORE + ' (local, id)');

        var sql = 'SELECT ' + DOC_STORE + '.winningseq AS seq, ' + DOC_STORE +
          '.json AS metadata FROM ' + BY_SEQ_STORE + ' JOIN ' + DOC_STORE +
          ' ON ' + BY_SEQ_STORE + '.seq = ' + DOC_STORE + '.winningseq';

        tx.executeSql(sql, [], function (tx, result) {

          var deleted = [];
          var local = [];

          for (var i = 0; i < result.rows.length; i++) {
            var item = result.rows.item(i);
            var seq = item.seq;
            var metadata = JSON.parse(item.metadata);
            if (utils.isDeleted(metadata)) {
              deleted.push(seq);
            }
            if (utils.isLocalId(metadata.id)) {
              local.push(metadata.id);
            }
          }
          tx.executeSql('UPDATE ' + DOC_STORE + 'SET local = 1 WHERE id IN (' +
            local.map(function () {
            return '?';
          }).join(',') + ')', local, function () {
            tx.executeSql('UPDATE ' + BY_SEQ_STORE +
              ' SET deleted = 1 WHERE seq IN (' + deleted.map(function () {
              return '?';
            }).join(',') + ')', deleted, callback);
          });
        });
      });
    });
  }

  // in this migration, we make all the local docs unversioned
  function runMigration3(tx, callback) {
    var local = 'CREATE TABLE IF NOT EXISTS ' + LOCAL_STORE +
      ' (id UNIQUE, rev, json)';
    tx.executeSql(local, [], function () {
      var sql = 'SELECT ' + DOC_STORE + '.id AS id, ' +
        BY_SEQ_STORE + '.json AS data ' +
        'FROM ' + BY_SEQ_STORE + ' JOIN ' +
        DOC_STORE + ' ON ' + BY_SEQ_STORE + '.seq = ' +
        DOC_STORE + '.winningseq WHERE local = 1';
      tx.executeSql(sql, [], function (tx, res) {
        var rows = [];
        for (var i = 0; i < res.rows.length; i++) {
          rows.push(res.rows.item(i));
        }
        function doNext() {
          if (!rows.length) {
            return callback();
          }
          var row = rows.shift();
          var rev = JSON.parse(row.data)._rev;
          tx.executeSql('INSERT INTO ' + LOCAL_STORE +
              ' (id, rev, json) VALUES (?,?,?)',
              [row.id, rev, row.data], function (tx) {
            tx.executeSql('DELETE FROM ' + DOC_STORE + ' WHERE id=?',
                [row.id], function (tx) {
              tx.executeSql('DELETE FROM ' + BY_SEQ_STORE + ' WHERE seq=?',
                  [row.seq], function () {
                doNext();
              });
            });
          });
        }
        doNext();
      });
    });
  }

  // in this migration, we remove doc_id_rev and just use rev
  function runMigration4(tx, callback) {

    function updateRows(rows, encoding) {
      function doNext() {
        if (!rows.length) {
          return callback();
        }
        var row = rows.shift();
        var doc_id_rev = parseHexString(row.hex, encoding);
        var idx = doc_id_rev.lastIndexOf('::');
        var doc_id = doc_id_rev.substring(0, idx);
        var rev = doc_id_rev.substring(idx + 2);
        var sql = 'UPDATE ' + BY_SEQ_STORE +
          ' SET doc_id=?, rev=? WHERE doc_id_rev=?';
        tx.executeSql(sql, [doc_id, rev, doc_id_rev], function () {
          doNext();
        });
      }
      doNext();
    }

    var sql = 'ALTER TABLE ' + BY_SEQ_STORE + ' ADD COLUMN doc_id';
    tx.executeSql(sql, [], function (tx) {
      var sql = 'ALTER TABLE ' + BY_SEQ_STORE + ' ADD COLUMN rev';
      tx.executeSql(sql, [], function (tx) {
        tx.executeSql(BY_SEQ_STORE_DOC_ID_REV_INDEX_SQL, [], function (tx) {
          var sql = 'SELECT hex(doc_id_rev) as hex FROM ' + BY_SEQ_STORE;
          tx.executeSql(sql, [], function (tx, res) {
            var rows = [];
            for (var i = 0; i < res.rows.length; i++) {
              rows.push(res.rows.item(i));
            }
            // it sucks, but we fetch the encoding twice
            tx.executeSql(
                'SELECT dbid, hex(dbid) AS hexId FROM ' + META_STORE, [],
              function (tx, result) {
                var id = result.rows.item(0).dbid;
                var hexId = result.rows.item(0).hexId;
                var encoding = (hexId.length === id.length * 2) ?
                  'UTF-8' : 'UTF-16';
                updateRows(rows, encoding);
              }
            );
          });
        });
      });
    });
  }

  function onGetInstanceId(tx) {
    while (idRequests.length > 0) {
      var idCallback = idRequests.pop();
      idCallback(null, instanceId);
    }
    checkDbEncoding(tx);
  }

  function checkDbEncoding(tx) {
    // check db encoding - utf-8 (chrome, opera) or utf-16 (safari)?
    tx.executeSql('SELECT dbid, hex(dbid) AS hexId FROM ' + META_STORE, [],
      function (tx, result) {
        var id = result.rows.item(0).dbid;
        var hexId = result.rows.item(0).hexId;
        encoding = (hexId.length === id.length * 2) ? 'UTF-8' : 'UTF-16';
      }
    );
  }

  function onGetVersion(tx, dbVersion) {
    if (dbVersion === 0) {
      // initial schema

      var meta = 'CREATE TABLE IF NOT EXISTS ' + META_STORE +
        ' (update_seq INTEGER, dbid, db_version INTEGER)';
      var attach = 'CREATE TABLE IF NOT EXISTS ' + ATTACH_STORE +
        ' (digest, json, body BLOB)';
      var doc = 'CREATE TABLE IF NOT EXISTS ' + DOC_STORE +
        ' (id unique, json, winningseq)';
      var seq = 'CREATE TABLE IF NOT EXISTS ' + BY_SEQ_STORE +
        ' (seq INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, ' +
        'json, deleted TINYINT(1), doc_id, rev)';
      var local = 'CREATE TABLE IF NOT EXISTS ' + LOCAL_STORE +
        ' (id UNIQUE, rev, json)';

      // creates
      tx.executeSql(attach);
      tx.executeSql(local);
      tx.executeSql(doc, [], function () {
        tx.executeSql(DOC_STORE_WINNINGSEQ_INDEX_SQL);
        tx.executeSql(seq, [], function () {
          tx.executeSql(BY_SEQ_STORE_DELETED_INDEX_SQL);
          tx.executeSql(BY_SEQ_STORE_DOC_ID_REV_INDEX_SQL);
          tx.executeSql(meta, [], function () {
            // mark the update_seq, db version, and new dbid
            var initSeq = 'INSERT INTO ' + META_STORE +
              ' (update_seq, db_version, dbid) VALUES (?, ?, ?)';
            instanceId = utils.uuid();
            var initSeqArgs = [0, ADAPTER_VERSION, instanceId];
            tx.executeSql(initSeq, initSeqArgs, function (tx) {
              onGetInstanceId(tx);
            });
          });
        });
      });
    } else { // version > 0

      var setupDone = function () {
        var migrated = dbVersion < ADAPTER_VERSION;
        if (migrated) {
          // update the db version within this transaction
          tx.executeSql('UPDATE ' + META_STORE + ' SET db_version = ' +
            ADAPTER_VERSION);
        }
        // notify db.id() callers
        var sql = 'SELECT dbid FROM ' + META_STORE;
        tx.executeSql(sql, [], function (tx, result) {
          instanceId = result.rows.item(0).dbid;
          onGetInstanceId(tx);
        });
      };

      // would love to use promises here, but then websql
      // ends the transaction early
      switch (dbVersion) {
        case 1:
          runMigration2(tx, function () {
            runMigration3(tx, function () {
              runMigration4(tx, setupDone);
            });
          });
          break;
        case 2:
          runMigration3(tx, function () {
            runMigration4(tx, setupDone);
          });
          break;
        case 3:
          runMigration4(tx, setupDone);
          break;
        default:
          setupDone();
          break;
      }
    }
  }

  function setup() {

    db.transaction(function (tx) {
      // first get the version
      tx.executeSql('SELECT sql FROM sqlite_master WHERE tbl_name = ' +
                    META_STORE, [], function (tx, result) {
        if (!result.rows.length) {
          // database hasn't even been created yet (version 0)
          onGetVersion(tx, 0);
        } else if (!/db_version/.test(result.rows.item(0).sql)) {
          // table was created, but without the new db_version column,
          // so add it.
          tx.executeSql('ALTER TABLE ' + META_STORE +
            ' ADD COLUMN db_version INTEGER', [], function () {
            // before version 2, this column didn't even exist
            onGetVersion(tx, 1);
          });
        } else { // column exists, we can safely get it
          tx.executeSql('SELECT db_version FROM ' + META_STORE, [],
            function (tx, result) {
            var dbVersion = result.rows.item(0).db_version;
            onGetVersion(tx, dbVersion);
          });
        }
      });
    }, unknownError(callback), dbCreated);
  }

  if (utils.isCordova() && typeof global !== 'undefined') {
    //to wait until custom api is made in pouch.adapters before doing setup
    global.addEventListener(name + '_pouch', function cordova_init() {
      global.removeEventListener(name + '_pouch', cordova_init, false);
      setup();
    }, false);
  } else {
    setup();
  }

  api.type = function () {
    return 'websql';
  };

  api._id = utils.toPromise(function (callback) {
    callback(null, instanceId);
  });

  api._info = function (callback) {
    db.readTransaction(function (tx) {
      countDocs(tx, function (docCount) {
        var sql = 'SELECT update_seq FROM ' + META_STORE;
        tx.executeSql(sql, [], function (tx, result) {
          var updateSeq = result.rows.item(0).update_seq;
          callback(null, {
            doc_count: docCount,
            update_seq: updateSeq
          });
        });
      });
    }, unknownError(callback));
  };

  api._bulkDocs = function (req, opts, callback) {

    var newEdits = opts.new_edits;
    var userDocs = req.docs;

    // Parse the docs, give them a sequence number for the result
    var docInfos = userDocs.map(function (doc, i) {
      if (doc._id && utils.isLocalId(doc._id)) {
        return doc;
      }
      var newDoc = utils.parseDoc(doc, newEdits);
      newDoc._bulk_seq = i;
      return newDoc;
    });

    var docInfoErrors = docInfos.filter(function (docInfo) {
      return docInfo.error;
    });
    if (docInfoErrors.length) {
      return callback(docInfoErrors[0]);
    }

    var tx;
    var results = new Array(docInfos.length);
    var updateSeq = 0;
    var fetchedDocs = new utils.Map();
    var numDocsWritten = 0;

    function complete() {
      var aresults = results.map(function (result) {
        if (result._bulk_seq) {
          delete result._bulk_seq;
        } else if (!Object.keys(result).length) {
          return {
            ok: true
          };
        }
        if (result.error) {
          return result;
        }

        var metadata = result.metadata;
        var rev = merge.winningRev(metadata);

        return {
          ok: true,
          id: metadata.id,
          rev: rev
        };
      });
      WebSqlPouch.Changes.notify(name);

      var updateseq = 'SELECT update_seq FROM ' + META_STORE;
      tx.executeSql(updateseq, [], function (tx, result) {
        var update_seq = result.rows.item(0).update_seq + updateSeq;
        var sql = 'UPDATE ' + META_STORE + ' SET update_seq=?';
        tx.executeSql(sql, [update_seq], function () {
          callback(null, aresults);
        });
      });
    }

    function preprocessAttachment(att, finish) {
      if (att.stub) {
        return finish();
      }
      if (typeof att.data === 'string') {
        try {
          att.data = atob(att.data);
        } catch (e) {
          var err = errors.error(errors.BAD_ARG,
                                "Attachments need to be base64 encoded");
          return callback(err);
        }
        var data = utils.fixBinary(att.data);
        att.data = utils.createBlob([data], {type: att.content_type});
      }
      var reader = new FileReader();
      reader.onloadend = function (e) {
        var binary = utils.arrayBufferToBinaryString(this.result);
        att.data = binary;
        utils.MD5(binary).then(function (result) {
          att.digest = 'md5-' + result;
          finish();
        });
      };
      reader.readAsArrayBuffer(att.data);
    }

    function preprocessAttachments(callback) {
      if (!docInfos.length) {
        return callback();
      }

      var docv = 0;

      docInfos.forEach(function (docInfo) {
        var attachments = docInfo.data && docInfo.data._attachments ?
          Object.keys(docInfo.data._attachments) : [];
        var recv = 0;

        if (!attachments.length) {
          return done();
        }

        function processedAttachment() {
          recv++;
          if (recv === attachments.length) {
            done();
          }
        }

        for (var key in docInfo.data._attachments) {
          if (docInfo.data._attachments.hasOwnProperty(key)) {
            preprocessAttachment(docInfo.data._attachments[key],
                                 processedAttachment);
          }
        }
      });

      function done() {
        docv++;
        if (docInfos.length === docv) {
          callback();
        }
      }
    }

    function writeDoc(docInfo, winningRev, deleted, callback, isUpdate,
                      resultsIdx) {

      function finish() {
        updateSeq++;
        var data = docInfo.data;
        var deletedInt = deleted ? 1 : 0;

        var id = data._id;
        var rev = data._rev;
        var json = stringifyDoc(data);
        var sql = 'INSERT INTO ' + BY_SEQ_STORE +
          ' (doc_id, rev, json, deleted) VALUES (?, ?, ?, ?);';
        var sqlArgs = [id, rev, json, deletedInt];

        tx.executeSql(sql, sqlArgs, function (tx, result) {
          dataWritten(tx, result.insertId);
        }, function () {
          // constraint error, recover by updating instead (see #1638)
          var fetchSql = select('seq', BY_SEQ_STORE, null,
            'doc_id=? AND rev=?');
          tx.executeSql(fetchSql, [id, rev], function (tx, res) {
            var seq = res.rows.item(0).seq;
            var sql = 'UPDATE ' + BY_SEQ_STORE +
              ' SET json=?, deleted=? WHERE doc_id=? AND rev=?;';
            var sqlArgs = [json, deletedInt, id, rev];
            tx.executeSql(sql, sqlArgs, function (tx) {
              updateSeq--; // discount, since it's an update, not a new seq
              dataWritten(tx, seq);
            });
          });
          return false; // ack that we've handled the error
        });
      }

      function collectResults(attachmentErr) {
        if (!err) {
          if (attachmentErr) {
            err = attachmentErr;
            callback(err);
          } else if (recv === attachments.length) {
            finish();
          }
        }
      }

      var err = null;
      var recv = 0;

      docInfo.data._id = docInfo.metadata.id;
      docInfo.data._rev = docInfo.metadata.rev;

      if (deleted) {
        docInfo.data._deleted = true;
      }

      var attachments = docInfo.data._attachments ?
        Object.keys(docInfo.data._attachments) : [];

      function attachmentSaved(err) {
        recv++;
        collectResults(err);
      }

      for (var key in docInfo.data._attachments) {
        if (!docInfo.data._attachments[key].stub) {
          var data = docInfo.data._attachments[key].data;
          delete docInfo.data._attachments[key].data;
          var digest = docInfo.data._attachments[key].digest;
          saveAttachment(docInfo, digest, data, attachmentSaved);
        } else {
          recv++;
          collectResults();
        }
      }

      if (!attachments.length) {
        finish();
      }

      function dataWritten(tx, seq) {
        docInfo.metadata.seq = seq;
        delete docInfo.metadata.rev;

        var sql = isUpdate ?
          'UPDATE ' + DOC_STORE +
          ' SET json=?, winningseq=(SELECT seq FROM ' + BY_SEQ_STORE +
          ' WHERE doc_id=' + DOC_STORE + '.id AND rev=?) WHERE id=?'
          : 'INSERT INTO ' + DOC_STORE +
          ' (id, winningseq, json) VALUES (?, ?, ?);';
        var metadataStr = vuvuzela.stringify(docInfo.metadata);
        var id = docInfo.metadata.id;
        var params = isUpdate ?
          [metadataStr, winningRev, id] :
          [id, seq, metadataStr];
        tx.executeSql(sql, params, function () {
          results[resultsIdx] = docInfo;
          fetchedDocs.set(id, docInfo.metadata);
          callback();
        });
      }
    }

    function updateDoc(oldDoc, docInfo, resultsIdx, callback) {
      var merged =
        merge.merge(oldDoc.rev_tree, docInfo.metadata.rev_tree[0], 1000);
      var deleted = utils.isDeleted(docInfo.metadata);
      var oldDocDeleted = utils.isDeleted(oldDoc);
      var inConflict = (oldDocDeleted && deleted && newEdits) ||
        (!oldDocDeleted && newEdits && merged.conflicts !== 'new_leaf');
      if (inConflict) {
        results[resultsIdx] = makeErr(errors.REV_CONFLICT, docInfo._bulk_seq);
        return callback();
      }

      docInfo.metadata.rev_tree = merged.tree;

      // recalculate
      var winningRev = merge.winningRev(docInfo.metadata);
      deleted = utils.isDeleted(docInfo.metadata, winningRev);

      writeDoc(docInfo, winningRev, deleted, callback, true, resultsIdx);
    }

    function insertDoc(docInfo, resultsIdx, callback) {
      // Cant insert new deleted documents
      var winningRev = merge.winningRev(docInfo.metadata);
      var deleted = utils.isDeleted(docInfo.metadata, winningRev);
      if ('was_delete' in opts && deleted) {
        results[resultsIdx] = errors.MISSING_DOC;
        return callback();
      }
      writeDoc(docInfo, winningRev, deleted, callback, false, resultsIdx);
    }

    function checkDoneWritingDocs() {
      if (++numDocsWritten === docInfos.length) {
        complete();
      }
    }

    function processDocs() {
      if (!docInfos.length) {
        return complete();
      }

      var idsToDocs = new utils.Map();

      docInfos.forEach(function (currentDoc, resultsIdx) {

        if (currentDoc._id && utils.isLocalId(currentDoc._id)) {
          api[currentDoc._deleted ? '_removeLocal' : '_putLocal'](
              currentDoc, {ctx: tx}, function (err, resp) {
            if (err) {
              results[resultsIdx] = err;
            } else {
              results[resultsIdx] = {};
            }
            checkDoneWritingDocs();
          });
          return;
        }

        var id = currentDoc.metadata.id;
        if (idsToDocs.has(id)) {
          idsToDocs.get(id).push([currentDoc, resultsIdx]);
        } else {
          idsToDocs.set(id, [[currentDoc, resultsIdx]]);
        }
      });

      // in the case of new_edits, the user can provide multiple docs
      // with the same id. these need to be processed sequentially
      idsToDocs.forEach(function (docs, id) {
        var numDone = 0;

        function docWritten() {
          checkDoneWritingDocs();
          if (++numDone < docs.length) {
            nextDoc();
          }
        }
        function nextDoc() {
          var value = docs[numDone];
          var currentDoc = value[0];
          var resultsIdx = value[1];

          if (fetchedDocs.has(id)) {
            updateDoc(fetchedDocs.get(id), currentDoc, resultsIdx, docWritten);
          } else {
            insertDoc(currentDoc, resultsIdx, docWritten);
          }
        }
        nextDoc();
      });
    }

    function fetchExistingDocs(callback) {
      if (!docInfos.length) {
        return callback();
      }

      var numFetched = 0;

      function checkDone() {
        if (++numFetched === docInfos.length) {
          callback();
        }
      }

      docInfos.forEach(function (docInfo) {
        if (docInfo._id && utils.isLocalId(docInfo._id)) {
          return checkDone(); // skip local docs
        }
        var id = docInfo.metadata.id;
        tx.executeSql('SELECT json FROM ' + DOC_STORE +
          ' WHERE id = ?', [id], function (tx, result) {
          if (result.rows.length) {
            var metadata = vuvuzela.parse(result.rows.item(0).json);
            fetchedDocs.set(id, metadata);
          }
          checkDone();
        });
      });
    }

    // Insert sequence number into the error so we can sort later
    function makeErr(err, seq) {
      err._bulk_seq = seq;
      return err;
    }

    function saveAttachment(docInfo, digest, data, callback) {
      var ref = [docInfo.metadata.id, docInfo.metadata.rev].join('@');
      var newAtt = {digest: digest};
      var sql = 'SELECT digest, json FROM ' + ATTACH_STORE + ' WHERE digest=?';
      tx.executeSql(sql, [digest], function (tx, result) {
        if (!result.rows.length) {
          newAtt.refs = {};
          newAtt.refs[ref] = true;
          sql = 'INSERT INTO ' + ATTACH_STORE +
                '(digest, json, body) VALUES (?, ?, ?)';
          tx.executeSql(sql, [digest, JSON.stringify(newAtt), data],
            function () {
            callback();
          });
        } else {
          newAtt.refs = JSON.parse(result.rows.item(0).json).refs;
          sql = 'UPDATE ' + ATTACH_STORE + ' SET json=?, body=? WHERE digest=?';
          tx.executeSql(sql, [JSON.stringify(newAtt), data, digest],
            function () {
            callback();
          });
        }
      });
    }

    preprocessAttachments(function () {
      db.transaction(function (txn) {
        tx = txn;
        fetchExistingDocs(processDocs);
      }, unknownError(callback), function () {
        docCount = -1;
      });
    });
  };

  api._get = function (id, opts, callback) {
    opts = utils.clone(opts);
    var doc;
    var metadata;
    var err;
    if (!opts.ctx) {
      db.readTransaction(function (txn) {
        opts.ctx = txn;
        api._get(id, opts, callback);
      });
      return;
    }
    var tx = opts.ctx;

    function finish() {
      callback(err, {doc: doc, metadata: metadata, ctx: tx});
    }

    var sql;
    var sqlArgs;
    if (opts.rev) {
      sql = select(
        SELECT_DOCS,
        [DOC_STORE, BY_SEQ_STORE],
        DOC_STORE + '.id=' + BY_SEQ_STORE + '.doc_id',
        [BY_SEQ_STORE + '.doc_id=?', BY_SEQ_STORE + '.rev=?']);
      sqlArgs = [id, opts.rev];
    } else {
      sql = select(
        SELECT_DOCS,
        [DOC_STORE, BY_SEQ_STORE],
        DOC_STORE_AND_BY_SEQ_JOINER,
        DOC_STORE + '.id=?');
      sqlArgs = [id];
    }
    tx.executeSql(sql, sqlArgs, function (a, results) {
      if (!results.rows.length) {
        err = errors.MISSING_DOC;
        return finish();
      }
      var item = results.rows.item(0);
      metadata = vuvuzela.parse(item.metadata);
      if (item.deleted && !opts.rev) {
        err = errors.error(errors.MISSING_DOC, 'deleted');
        return finish();
      }
      doc = unstringifyDoc(item.data, metadata.id, item.rev);
      finish();
    });
  };

  function countDocs(tx, callback) {

    if (docCount !== -1) {
      return callback(docCount);
    }

    // count the total rows
    var sql = select(
      'COUNT(' + DOC_STORE + '.id) AS \'num\'',
      [DOC_STORE, BY_SEQ_STORE],
      DOC_STORE_AND_BY_SEQ_JOINER,
      BY_SEQ_STORE + '.deleted=0');

    tx.executeSql(sql, [], function (tx, result) {
      docCount = result.rows.item(0).num;
      callback(docCount);
    });
  }

  api._allDocs = function (opts, callback) {
    var results = [];
    var totalRows;

    var start = 'startkey' in opts ? opts.startkey : false;
    var end = 'endkey' in opts ? opts.endkey : false;
    var key = 'key' in opts ? opts.key : false;
    var descending = 'descending' in opts ? opts.descending : false;
    var limit = 'limit' in opts ? opts.limit : -1;
    var offset = 'skip' in opts ? opts.skip : 0;
    var inclusiveEnd = opts.inclusive_end !== false;

    var sqlArgs = [];
    var criteria = [];

    if (key !== false) {
      criteria.push(DOC_STORE + '.id = ?');
      sqlArgs.push(key);
    } else if (start !== false || end !== false) {
      if (start !== false) {
        criteria.push(DOC_STORE + '.id ' + (descending ? '<=' : '>=') + ' ?');
        sqlArgs.push(start);
      }
      if (end !== false) {
        var comparator = descending ? '>' : '<';
        if (inclusiveEnd) {
          comparator += '=';
        }
        criteria.push(DOC_STORE + '.id ' + comparator + ' ?');
        sqlArgs.push(end);
      }
      if (key !== false) {
        criteria.push(DOC_STORE + '.id = ?');
        sqlArgs.push(key);
      }
    }

    if (opts.deleted !== 'ok') {
      // report deleted if keys are specified
      criteria.push(BY_SEQ_STORE + '.deleted = 0');
    }

    db.readTransaction(function (tx) {

      // first count up the total rows
      countDocs(tx, function (count) {
        totalRows = count;

        if (limit === 0) {
          return;
        }

        // then actually fetch the documents
        var sql = select(
          SELECT_DOCS,
          [DOC_STORE, BY_SEQ_STORE],
          DOC_STORE_AND_BY_SEQ_JOINER,
          criteria,
          DOC_STORE + '.id ' + (descending ? 'DESC' : 'ASC')
          );
        sql += ' LIMIT ' + limit + ' OFFSET ' + offset;

        tx.executeSql(sql, sqlArgs, function (tx, result) {
          for (var i = 0, l = result.rows.length; i < l; i++) {
            var item = result.rows.item(i);
            var metadata = vuvuzela.parse(item.metadata);
            var data = unstringifyDoc(item.data, metadata.id, item.rev);
            var winningRev = data._rev;
            var doc = {
              id: metadata.id,
              key: metadata.id,
              value: {rev: winningRev}
            };
            if (opts.include_docs) {
              doc.doc = data;
              doc.doc._rev = winningRev;
              if (opts.conflicts) {
                doc.doc._conflicts = merge.collectConflicts(metadata);
              }
              for (var att in doc.doc._attachments) {
                if (doc.doc._attachments.hasOwnProperty(att)) {
                  doc.doc._attachments[att].stub = true;
                }
              }
            }
            if (item.deleted) {
              if (opts.deleted === 'ok') {
                doc.value.deleted = true;
                doc.doc = null;
              } else {
                continue;
              }
            }
            results.push(doc);
          }
        });
      });
    }, unknownError(callback), function () {
      callback(null, {
        total_rows: totalRows,
        offset: opts.skip,
        rows: results
      });
    });
  };

  api._changes = function (opts) {
    opts = utils.clone(opts);

    if (opts.continuous) {
      var id = name + ':' + utils.uuid();
      WebSqlPouch.Changes.addListener(name, id, api, opts);
      WebSqlPouch.Changes.notify(name);
      return {
        cancel: function () {
          WebSqlPouch.Changes.removeListener(name, id);
        }
      };
    }

    var descending = opts.descending;

    // Ignore the `since` parameter when `descending` is true
    opts.since = opts.since && !descending ? opts.since : 0;

    var limit = 'limit' in opts ? opts.limit : -1;
    if (limit === 0) {
      limit = 1; // per CouchDB _changes spec
    }

    var returnDocs;
    if ('returnDocs' in opts) {
      returnDocs = opts.returnDocs;
    } else {
      returnDocs = true;
    }
    var results = [];
    var numResults = 0;
    function fetchChanges() {

      var criteria = [
        DOC_STORE + '.winningseq > ' + opts.since
      ];
      var sqlArgs = [];
      if (opts.doc_ids) {
        criteria.push(DOC_STORE + '.id IN (' + opts.doc_ids.map(function () {
          return '?';
        }).join(',') + ')');
        sqlArgs = opts.doc_ids;
      }

      var sql = select(SELECT_DOCS, [DOC_STORE, BY_SEQ_STORE],
        DOC_STORE_AND_BY_SEQ_JOINER, criteria,
        DOC_STORE + '.winningseq ' + (descending ? 'DESC' : 'ASC'));

      var filter = utils.filterChange(opts);
      if (!opts.view && !opts.filter) {
        // we can just limit in the query
        sql += ' LIMIT ' + limit;
      }

      db.readTransaction(function (tx) {
        tx.executeSql(sql, sqlArgs, function (tx, result) {
          var lastSeq = 0;
          for (var i = 0, l = result.rows.length; i < l; i++) {
            var res = result.rows.item(i);
            var metadata = vuvuzela.parse(res.metadata);
            if (lastSeq < res.seq) {
              lastSeq = res.seq;
            }
            var doc = unstringifyDoc(res.data, metadata.id, res.rev);
            var change = opts.processChange(doc, metadata, opts);
            change.seq = res.seq;
            if (filter(change)) {
              numResults++;
              if (returnDocs) {
                results.push(change);
              }
              opts.onChange(change);
            }
            if (numResults === limit) {
              break;
            }
          }
          if (!opts.continuous) {
            opts.complete(null, {
              results: results,
              last_seq: lastSeq
            });
          }
        });
      });
    }

    fetchChanges();
  };

  api._close = function (callback) {
    //WebSQL databases do not need to be closed
    callback();
  };

  api._getAttachment = function (attachment, opts, callback) {
    var res;
    var tx = opts.ctx;
    var digest = attachment.digest;
    var type = attachment.content_type;
    var sql = 'SELECT hex(body) as body FROM ' + ATTACH_STORE +
              ' WHERE digest=?';
    tx.executeSql(sql, [digest], function (tx, result) {
      // sqlite normally stores data as utf8, so even the hex() function
      // "encodes" the binary data in utf8/16 before returning it. yet hex()
      // is the only way to get the full data, so we do this.
      var data = parseHexString(result.rows.item(0).body, encoding);
      if (opts.encode) {
        res = btoa(data);
      } else {
        data = utils.fixBinary(data);
        res = utils.createBlob([data], {type: type});
      }
      callback(null, res);
    });
  };

  api._getRevisionTree = function (docId, callback) {
    db.readTransaction(function (tx) {
      var sql = 'SELECT json AS metadata FROM ' + DOC_STORE + ' WHERE id = ?';
      tx.executeSql(sql, [docId], function (tx, result) {
        if (!result.rows.length) {
          callback(errors.MISSING_DOC);
        } else {
          var data = vuvuzela.parse(result.rows.item(0).metadata);
          callback(null, data.rev_tree);
        }
      });
    });
  };

  api._doCompaction = function (docId, rev_tree, revs, callback) {
    if (!revs.length) {
      return callback();
    }
    db.transaction(function (tx) {
      var sql = 'SELECT json AS metadata FROM ' + DOC_STORE + ' WHERE id = ?';
      tx.executeSql(sql, [docId], function (tx, result) {
        if (!result.rows.length) {
          return utils.call(callback);
        }
        var metadata = vuvuzela.parse(result.rows.item(0).metadata);
        metadata.rev_tree = rev_tree;

        var numDone = 0;
        revs.forEach(function (rev) {
          var sql = 'DELETE FROM ' + BY_SEQ_STORE + ' WHERE doc_id=? AND rev=?';
          tx.executeSql(sql, [docId, rev], function (tx) {
            if (++numDone === revs.length) {
              var sql = 'UPDATE ' + DOC_STORE + ' SET json = ? WHERE id = ?';
              tx.executeSql(sql, [vuvuzela.stringify(metadata), docId],
                function () {
                callback();
              });
            }
          });
        });
      });
    });
  };

  api._getLocal = function (id, callback) {
    db.readTransaction(function (tx) {
      var sql = 'SELECT json, rev FROM ' + LOCAL_STORE + ' WHERE id=?';
      tx.executeSql(sql, [id], function (tx, res) {
        if (res.rows.length) {
          var item = res.rows.item(0);
          var doc = unstringifyDoc(item.json, id, item.rev);
          callback(null, doc);
        } else {
          callback(errors.MISSING_DOC);
        }
      });
    });
  };

  api._putLocal = function (doc, opts, callback) {
    if (typeof opts === 'function') {
      callback = opts;
      opts = {};
    }
    delete doc._revisions; // ignore this, trust the rev
    var oldRev = doc._rev;
    var id = doc._id;
    var newRev;
    if (!oldRev) {
      newRev = doc._rev = '0-1';
    } else {
      newRev = doc._rev = '0-' + (parseInt(oldRev.split('-')[1], 10) + 1);
    }
    var json = stringifyDoc(doc);

    var ret;
    function putLocal(tx) {
      var sql;
      var values;
      if (oldRev) {
        sql = 'UPDATE ' + LOCAL_STORE + ' SET rev=?, json=? ' +
          'WHERE id=? AND rev=?';
        values = [newRev, json, id, oldRev];
      } else {
        sql = 'INSERT INTO ' + LOCAL_STORE + ' (id, rev, json) VALUES (?,?,?)';
        values = [id, newRev, json];
      }
      tx.executeSql(sql, values, function (tx, res) {
        if (res.rowsAffected) {
          ret = {ok: true, id: id, rev: newRev};
          if (opts.ctx) { // return immediately
            callback(null, ret);
          }
        } else {
          callback(errors.REV_CONFLICT);
        }
      }, function () {
        callback(errors.REV_CONFLICT);
        return false; // ack that we handled the error
      });
    }

    if (opts.ctx) {
      putLocal(opts.ctx);
    } else {
      db.transaction(function (tx) {
        putLocal(tx);
      }, unknownError(callback), function () {
        if (ret) {
          callback(null, ret);
        }
      });
    }
  };

  api._removeLocal = function (doc, callback) {
    var ret;
    db.transaction(function (tx) {
      var sql = 'DELETE FROM ' + LOCAL_STORE + ' WHERE id=? AND rev=?';
      var params = [doc._id, doc._rev];
      tx.executeSql(sql, params, function (tx, res) {
        if (!res.rowsAffected) {
          return callback(errors.REV_CONFLICT);
        }
        ret = {ok: true, id: doc._id, rev: '0-0'};
      });
    }, unknownError(callback), function () {
      callback(null, ret);
    });
  };
}

WebSqlPouch.valid = function () {
  if (typeof global !== 'undefined') {
    if (global.navigator &&
        global.navigator.sqlitePlugin &&
        global.navigator.sqlitePlugin.openDatabase) {
      return true;
    } else if (global.sqlitePlugin && global.sqlitePlugin.openDatabase) {
      return true;
    } else if (global.openDatabase) {
      return true;
    }
  }
  return false;
};

WebSqlPouch.destroy = utils.toPromise(function (name, opts, callback) {
  WebSqlPouch.Changes.removeAllListeners(name);
  var size = getSize(opts);
  var db = openDB(name, POUCH_VERSION, name, size);
  db.transaction(function (tx) {
    var stores = [DOC_STORE, BY_SEQ_STORE, ATTACH_STORE, META_STORE,
      LOCAL_STORE];
    stores.forEach(function (store) {
      tx.executeSql('DROP TABLE IF EXISTS ' + store, []);
    });
  }, unknownError(callback), function () {
    if (utils.hasLocalStorage()) {
      delete global.localStorage['_pouch__websqldb_' + name];
      delete global.localStorage[name];
    }
    callback(null, {'ok': true});
  });
});

WebSqlPouch.Changes = new utils.Changes();

module.exports = WebSqlPouch;

}).call(this,typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"../deps/errors":11,"../merge":18,"../utils":23,"vuvuzela":58}],6:[function(_dereq_,module,exports){
'use strict';
var utils = _dereq_('./utils');
var merge = _dereq_('./merge');
var errors = _dereq_('./deps/errors');
var EE = _dereq_('events').EventEmitter;
var evalFilter = _dereq_('./evalFilter');
var evalView = _dereq_('./evalView');
module.exports = Changes;
utils.inherits(Changes, EE);

function Changes(db, opts, callback) {
  EE.call(this);
  var self = this;
  this.db = db;
  opts = opts ? utils.clone(opts) : {};
  var oldComplete = callback || opts.complete || function () {};
  var complete = opts.complete = utils.once(function (err, resp) {
    if (err) {
      self.emit('error', err);
    } else {
      self.emit('complete', resp);
    }
    self.removeAllListeners();
    db.removeListener('destroyed', onDestroy);
  });
  if (oldComplete) {
    self.on('complete', function (resp) {
      oldComplete(null, resp);
    });
    self.on('error', function (err) {
      oldComplete(err);
    });
  }
  var oldOnChange = opts.onChange;
  if (oldOnChange) {
    self.on('change', oldOnChange);
  }
  function onDestroy() {
    self.cancel();
  }
  db.once('destroyed', onDestroy);

  opts.onChange = function (change) {
    if (opts.isCancelled) {
      return;
    }
    self.emit('change', change);
    if (self.startSeq && self.startSeq <= change.seq) {
      self.emit('uptodate');
      self.startSeq = false;
    }
    if (change.deleted) {
      self.emit('delete', change);
    } else if (change.changes.length === 1 &&
      change.changes[0].rev.slice(0, 2) === '1-') {
      self.emit('create', change);
    } else {
      self.emit('update', change);
    }
  };

  var promise = new utils.Promise(function (fulfill, reject) {
    opts.complete = function (err, res) {
      if (err) {
        reject(err);
      } else {
        fulfill(res);
      }
    };
  });
  self.once('cancel', function () {
    if (oldOnChange) {
      self.removeListener('change', oldOnChange);
    }
    opts.complete(null, {status: 'cancelled'});
  });
  this.then = promise.then.bind(promise);
  this['catch'] = promise['catch'].bind(promise);
  this.then(function (result) {
    complete(null, result);
  }, complete);



  if (!db.taskqueue.isReady) {
    db.taskqueue.addTask(function () {
      if (self.isCancelled) {
        self.emit('cancel');
      } else {
        self.doChanges(opts);
      }
    });
  } else {
    self.doChanges(opts);
  }
}
Changes.prototype.cancel = function () {
  this.isCancelled = true;
  if (this.db.taskqueue.isReady) {
    this.emit('cancel');
  }
};
function processChange(doc, metadata, opts) {
  var changeList = [{rev: doc._rev}];
  if (opts.style === 'all_docs') {
    changeList = merge.collectLeaves(metadata.rev_tree)
    .map(function (x) { return {rev: x.rev}; });
  }
  var change = {
    id: metadata.id,
    changes: changeList,
    doc: doc
  };

  if (utils.isDeleted(metadata, doc._rev)) {
    change.deleted = true;
  }
  if (opts.conflicts) {
    change.doc._conflicts = merge.collectConflicts(metadata);
    if (!change.doc._conflicts.length) {
      delete change.doc._conflicts;
    }
  }
  return change;
}

Changes.prototype.doChanges = function (opts) {
  var self = this;
  var callback = opts.complete;

  opts = utils.clone(opts);
  if ('live' in opts && !('continuous' in opts)) {
    opts.continuous = opts.live;
  }
  opts.processChange = processChange;

  if (opts.since === 'latest') {
    opts.since = 'now';
  }
  if (!opts.since) {
    opts.since = 0;
  }
  if (opts.since === 'now') {
    this.db.info().then(function (info) {
      if (self.isCancelled) {
        callback(null, {status: 'cancelled'});
        return;
      }
      opts.since = info.update_seq  - 1;
      self.doChanges(opts);
    }, callback);
    return;
  }

  if (opts.continuous && opts.since !== 'now') {
    this.db.info().then(function (info) {
      self.startSeq = info.update_seq - 1;
    }, function (err) {
      if (err.id === 'idbNull') {
        //db closed before this returned
        //thats ok
        return;
      }
      throw err;
    });
  }

  if (this.db.type() !== 'http' &&
    opts.filter && typeof opts.filter === 'string') {
    return this.filterChanges(opts);
  }

  if (!('descending' in opts)) {
    opts.descending = false;
  }

  // 0 and 1 should return 1 document
  opts.limit = opts.limit === 0 ? 1 : opts.limit;
  opts.complete = callback;
  var newPromise = this.db._changes(opts);
  if (newPromise && typeof newPromise.cancel === 'function') {
    var cancel = self.cancel;
    self.cancel = utils.getArguments(function (args) {
      newPromise.cancel();
      cancel.apply(this, args);
    });
  }
};

Changes.prototype.filterChanges = function (opts) {
  var self = this;
  var callback = opts.complete;
  if (opts.filter === '_view') {
    if (!opts.view || typeof opts.view !== 'string') {
      var err = new  Error('`view` filter parameter is not provided.');
      err.status = errors.BAD_REQUEST.status;
      err.name = errors.BAD_REQUEST.name;
      err.error = true;
      callback(err);
      return;
    }
    // fetch a view from a design doc, make it behave like a filter
    var viewName = opts.view.split('/');
    this.db.get('_design/' + viewName[0], function (err, ddoc) {
      if (self.isCancelled) {
        callback(null, {status: 'cancelled'});
        return;
      }
      if (err) {
        callback(err);
        return;
      }
      if (ddoc && ddoc.views && ddoc.views[viewName[1]]) {
        
        var filter = evalView(ddoc.views[viewName[1]].map);
        opts.filter = filter;
        self.doChanges(opts);
        return;
      }
      var msg = ddoc.views ? 'missing json key: ' + viewName[1] :
        'missing json key: views';
      if (!err) {
        err = new  Error(msg);
        err.status = errors.MISSING_DOC.status;
        err.name = errors.MISSING_DOC.name;
        err.error = true;
      }
      callback(err);
      return;
    });
  } else {
    // fetch a filter from a design doc
    var filterName = opts.filter.split('/');
    this.db.get('_design/' + filterName[0], function (err, ddoc) {
      if (self.isCancelled) {
        callback(null, {status: 'cancelled'});
        return;
      }
      if (err) {
        callback(err);
        return;
      }
      if (ddoc && ddoc.filters && ddoc.filters[filterName[1]]) {
        var filter = evalFilter(ddoc.filters[filterName[1]]);
        opts.filter = filter;
        self.doChanges(opts);
        return;
      } else {
        var msg = (ddoc && ddoc.filters) ? 'missing json key: ' + filterName[1]
          : 'missing json key: filters';
        if (!err) {
          err = new  Error(msg);
          err.status = errors.MISSING_DOC.status;
          err.name = errors.MISSING_DOC.name;
          err.error = true;
        }
        callback(err);
        return;
      }
    });
  }
};
},{"./deps/errors":11,"./evalFilter":15,"./evalView":16,"./merge":18,"./utils":23,"events":27}],7:[function(_dereq_,module,exports){
(function (global){
/*globals cordova */
"use strict";

var Adapter = _dereq_('./adapter');
var utils = _dereq_('./utils');
var TaskQueue = _dereq_('./taskqueue');
var Promise = utils.Promise;

function defaultCallback(err) {
  if (err && global.debug) {
    console.error(err);
  }
}

utils.inherits(PouchDB, Adapter);
function PouchDB(name, opts, callback) {

  if (!(this instanceof PouchDB)) {
    return new PouchDB(name, opts, callback);
  }
  var self = this;
  if (typeof opts === 'function' || typeof opts === 'undefined') {
    callback = opts;
    opts = {};
  }

  if (name && typeof name === 'object') {
    opts = name;
    name = undefined;
  }
  if (typeof callback === 'undefined') {
    callback = defaultCallback;
  }
  opts = opts || {};
  var oldCB = callback;
  self.auto_compaction = opts.auto_compaction;
  self.prefix = PouchDB.prefix;
  Adapter.call(self);
  self.taskqueue = new TaskQueue();
  var promise = new Promise(function (fulfill, reject) {
    callback = function (err, resp) {
      if (err) {
        return reject(err);
      }
      delete resp.then;
      fulfill(resp);
    };
  
    opts = utils.clone(opts);
    var originalName = opts.name || name;
    var backend, error;
    (function () {
      try {

        if (typeof originalName !== 'string') {
          error = new Error('Missing/invalid DB name');
          error.code = 400;
          throw error;
        }

        backend = PouchDB.parseAdapter(originalName, opts);
        
        opts.originalName = originalName;
        opts.name = backend.name;
        if (opts.prefix && backend.adapter !== 'http' &&
            backend.adapter !== 'https') {
          opts.name = opts.prefix + opts.name;
        }
        opts.adapter = opts.adapter || backend.adapter;
        self._adapter = opts.adapter;
        self._db_name = originalName;
        if (!PouchDB.adapters[opts.adapter]) {
          error = new Error('Adapter is missing');
          error.code = 404;
          throw error;
        }

        if (!PouchDB.adapters[opts.adapter].valid()) {
          error = new Error('Invalid Adapter');
          error.code = 404;
          throw error;
        }
      } catch (err) {
        self.taskqueue.fail(err);
        self.changes = utils.toPromise(function (opts) {
          if (opts.complete) {
            opts.complete(err);
          }
        });
      }
    }());
    if (error) {
      return reject(error); // constructor error, see above
    }
    self.adapter = opts.adapter;

    // needs access to PouchDB;
    self.replicate = {};

    self.replicate.from = function (url, opts, callback) {
      return self.constructor.replicate(url, self, opts, callback);
    };

    self.replicate.to = function (url, opts, callback) {
      return self.constructor.replicate(self, url, opts, callback);
    };

    self.sync = function (dbName, opts, callback) {
      return self.constructor.sync(self, dbName, opts, callback);
    };

    self.replicate.sync = self.sync;

    self.destroy = utils.adapterFun('destroy', function (callback) {
      var self = this;
      self.info(function (err, info) {
        if (err) {
          return callback(err);
        }
        self.constructor.destroy(info.db_name, callback);
      });
    });

    PouchDB.adapters[opts.adapter].call(self, opts, function (err, db) {
      if (err) {
        if (callback) {
          self.taskqueue.fail(err);
          callback(err);
        }
        return;
      }
      function destructionListener(event) {
        if (event === 'destroyed') {
          self.emit('destroyed');
          PouchDB.removeListener(originalName, destructionListener);
        }
      }
      PouchDB.on(originalName, destructionListener);
      self.emit('created', self);
      PouchDB.emit('created', opts.originalName);
      self.taskqueue.ready(self);
      callback(null, self);
      
    });
    if (opts.skipSetup) {
      self.taskqueue.ready(self);
    }

    if (utils.isCordova()) {
      //to inform websql adapter that we can use api
      cordova.fireWindowEvent(opts.name + "_pouch", {});
    }
  });
  promise.then(function (resp) {
    oldCB(null, resp);
  }, oldCB);
  self.then = promise.then.bind(promise);
  self["catch"] = promise["catch"].bind(promise);

}

module.exports = PouchDB;

}).call(this,typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./adapter":1,"./taskqueue":22,"./utils":23}],8:[function(_dereq_,module,exports){
"use strict";

var createBlob = _dereq_('./blob.js');
var errors = _dereq_('./errors');
var utils = _dereq_("../utils");
var hasUpload;

function ajax(options, adapterCallback) {

  var requestCompleted = false;
  var callback = utils.getArguments(function (args) {
    if (requestCompleted) {
      return;
    }
    adapterCallback.apply(this, args);
    requestCompleted = true;
  });

  if (typeof options === "function") {
    callback = options;
    options = {};
  }

  options = utils.clone(options);

  var defaultOptions = {
    method : "GET",
    headers: {},
    json: true,
    processData: true,
    timeout: 10000,
    cache: false
  };

  options = utils.extend(true, defaultOptions, options);

  // cache-buster, specifically designed to work around IE's aggressive caching
  // see http://www.dashbay.com/2011/05/internet-explorer-caches-ajax/
  if (options.method === 'GET' && !options.cache) {
    var hasArgs = options.url.indexOf('?') !== -1;
    options.url += (hasArgs ? '&' : '?') + '_nonce=' + utils.uuid(16);
  }

  function onSuccess(obj, resp, cb) {
    if (!options.binary && !options.json && options.processData &&
      typeof obj !== 'string') {
      obj = JSON.stringify(obj);
    } else if (!options.binary && options.json && typeof obj === 'string') {
      try {
        obj = JSON.parse(obj);
      } catch (e) {
        // Probably a malformed JSON from server
        return cb(e);
      }
    }
    if (Array.isArray(obj)) {
      obj = obj.map(function (v) {
        var obj;
        if (v.ok) {
          return v;
        } else if (v.error && v.error === 'conflict') {
          obj = errors.REV_CONFLICT;
          obj.id = v.id;
          return obj;
        } else if (v.error && v.error === 'forbidden') {
          obj = errors.FORBIDDEN;
          obj.id = v.id;
          obj.reason = v.reason;
          return obj;
        } else if (v.missing) {
          obj = errors.MISSING_DOC;
          obj.missing = v.missing;
          return obj;
        } else {
          return v;
        }
      });
    }
    cb(null, obj, resp);
  }

  function onError(err, cb) {
    var errParsed, errObj, errType, key;
    try {
      errParsed = JSON.parse(err.responseText);
      //would prefer not to have a try/catch clause
      for (key in errors) {
        if (errors.hasOwnProperty(key) &&
            errors[key].name === errParsed.error) {
          errType = errors[key];
          break;
        }
      }
      if (!errType) {
        errType = errors.UNKNOWN_ERROR;
        if (err.status) {
          errType.status = err.status;
        }
        if (err.statusText) {
          err.name = err.statusText;
        }
      }
      errObj = errors.error(errType, errParsed.reason);
    } catch (e) {
      for (var key in errors) {
        if (errors.hasOwnProperty(key) && errors[key].status === err.status) {
          errType = errors[key];
          break;
        }
      }
      if (!errType) {
        errType = errors.UNKNOWN_ERROR;
        if (err.status) {
          errType.status = err.status;
        }
        if (err.statusText) {
          err.name = err.statusText;
        }
      }
      errObj = errors.error(errType);
    }
    if (err.withCredentials && err.status === 0) {
      // apparently this is what we get when the method
      // is reported as not allowed by CORS. so fudge it
      errObj.status = 405;
      errObj.statusText = "Method Not Allowed";
    }
    cb(errObj);
  }

  var timer;
  var xhr;
  if (options.xhr) {
    xhr = new options.xhr();
  } else {
    xhr = new XMLHttpRequest();
  }
  xhr.open(options.method, options.url);
  xhr.withCredentials = true;

  if (options.json) {
    options.headers.Accept = 'application/json';
    options.headers['Content-Type'] = options.headers['Content-Type'] ||
      'application/json';
    if (options.body &&
        options.processData &&
        typeof options.body !== "string") {
      options.body = JSON.stringify(options.body);
    }
  }

  if (options.binary) {
    xhr.responseType = 'arraybuffer';
  }

  var createCookie = function (name, value, days) {
    var expires = "";
    if (days) {
      var date = new Date();
      date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
      expires = "; expires=" + date.toGMTString();
    }
    document.cookie = name + "=" + value + expires + "; path=/";
  };

  for (var key in options.headers) {
    if (key === 'Cookie') {
      var cookie = options.headers[key].split('=');
      createCookie(cookie[0], cookie[1], 10);
    } else {
      xhr.setRequestHeader(key, options.headers[key]);
    }
  }

  if (!("body" in options)) {
    options.body = null;
  }

  var abortReq = function () {
    if (requestCompleted) {
      return;
    }
    xhr.abort();
    onError(xhr, callback);
  };

  xhr.onreadystatechange = function () {
    if (xhr.readyState !== 4 || requestCompleted) {
      return;
    }
    clearTimeout(timer);
    if (xhr.status >= 200 && xhr.status < 300) {
      var data;
      if (options.binary) {
        data = createBlob([xhr.response || ''], {
          type: xhr.getResponseHeader('Content-Type')
        });
      } else {
        data = xhr.responseText;
      }
      onSuccess(data, xhr, callback);
    } else {
      onError(xhr, callback);
    }
  };

  if (options.timeout > 0) {
    timer = setTimeout(abortReq, options.timeout);
    xhr.onprogress = function () {
      clearTimeout(timer);
      timer = setTimeout(abortReq, options.timeout);
    };
    if (typeof hasUpload === 'undefined') {
      // IE throws an error if you try to access it directly
      hasUpload = Object.keys(xhr).indexOf('upload') !== -1;
    }
    if (hasUpload) { // does not exist in ie9
      xhr.upload.onprogress = xhr.onprogress;
    }
  }
  if (options.body && (options.body instanceof Blob)) {
    var reader = new FileReader();
    reader.onloadend = function (e) {

      var binary = "";
      var bytes = new Uint8Array(this.result);
      var length = bytes.byteLength;

      for (var i = 0; i < length; i++) {
        binary += String.fromCharCode(bytes[i]);
      }

      binary = utils.fixBinary(binary);
      xhr.send(binary);
    };
    reader.readAsArrayBuffer(options.body);
  } else {
    xhr.send(options.body);
  }
  return {abort: abortReq};
}

module.exports = ajax;

},{"../utils":23,"./blob.js":9,"./errors":11}],9:[function(_dereq_,module,exports){
(function (global){
"use strict";

//Abstracts constructing a Blob object, so it also works in older
//browsers that don't support the native Blob constructor. (i.e.
//old QtWebKit versions, at least).
function createBlob(parts, properties) {
  parts = parts || [];
  properties = properties || {};
  try {
    return new Blob(parts, properties);
  } catch (e) {
    if (e.name !== "TypeError") {
      throw e;
    }
    var BlobBuilder = global.BlobBuilder ||
                      global.MSBlobBuilder ||
                      global.MozBlobBuilder ||
                      global.WebKitBlobBuilder;
    var builder = new BlobBuilder();
    for (var i = 0; i < parts.length; i += 1) {
      builder.append(parts[i]);
    }
    return builder.getBlob(properties.type);
  }
}

module.exports = createBlob;


}).call(this,typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],10:[function(_dereq_,module,exports){
'use strict';
exports.Map = LazyMap; // TODO: use ES6 map
exports.Set = LazySet; // TODO: use ES6 set
// based on https://github.com/montagejs/collections
function LazyMap() {
  this.store = {};
}
LazyMap.prototype.mangle = function (key) {
  if (typeof key !== "string") {
    throw new TypeError("key must be a string but Got " + key);
  }
  return '$' + key;
};
LazyMap.prototype.unmangle = function (key) {
  return key.substring(1);
};
LazyMap.prototype.get = function (key) {
  var mangled = this.mangle(key);
  if (mangled in this.store) {
    return this.store[mangled];
  } else {
    return void 0;
  }
};
LazyMap.prototype.set = function (key, value) {
  var mangled = this.mangle(key);
  this.store[mangled] = value;
  return true;
};
LazyMap.prototype.has = function (key) {
  var mangled = this.mangle(key);
  return mangled in this.store;
};
LazyMap.prototype["delete"] = function (key) {
  var mangled = this.mangle(key);
  if (mangled in this.store) {
    delete this.store[mangled];
    return true;
  }
  return false;
};
LazyMap.prototype.forEach = function (cb) {
  var self = this;
  var keys = Object.keys(self.store);
  keys.forEach(function (key) {
    var value = self.store[key];
    key = self.unmangle(key);
    cb(value, key);
  });
};

function LazySet() {
  this.store = new LazyMap();
}
LazySet.prototype.add = function (key) {
  return this.store.set(key, true);
};
LazySet.prototype.has = function (key) {
  return this.store.has(key);
};
LazySet.prototype["delete"] = function (key) {
  return this.store["delete"](key);
};
},{}],11:[function(_dereq_,module,exports){
"use strict";

function PouchError(opts) {
  this.status = opts.status;
  this.name = opts.error;
  this.message = opts.reason;
  this.error = true;
}

PouchError.prototype__proto__ = Error.prototype;

PouchError.prototype.toString = function () {
  return JSON.stringify({
    status: this.status,
    name: this.name,
    message: this.message
  });
};

exports.UNAUTHORIZED = new PouchError({
  status: 401,
  error: 'unauthorized',
  reason: "Name or password is incorrect."
});
exports.MISSING_BULK_DOCS = new PouchError({
  status: 400,
  error: 'bad_request',
  reason: "Missing JSON list of 'docs'"
});
exports.MISSING_DOC = new PouchError({
  status: 404,
  error: 'not_found',
  reason: 'missing'
});
exports.REV_CONFLICT = new PouchError({
  status: 409,
  error: 'conflict',
  reason: 'Document update conflict'
});
exports.INVALID_ID = new PouchError({
  status: 400,
  error: 'invalid_id',
  reason: '_id field must contain a string'
});
exports.MISSING_ID = new PouchError({
  status: 412,
  error: 'missing_id',
  reason: '_id is required for puts'
});
exports.RESERVED_ID = new PouchError({
  status: 400,
  error: 'bad_request',
  reason: 'Only reserved document ids may start with underscore.'
});
exports.NOT_OPEN = new PouchError({
  status: 412,
  error: 'precondition_failed',
  reason: 'Database not open'
});
exports.UNKNOWN_ERROR = new PouchError({
  status: 500,
  error: 'unknown_error',
  reason: 'Database encountered an unknown error'
});
exports.BAD_ARG = new PouchError({
  status: 500,
  error: 'badarg',
  reason: 'Some query argument is invalid'
});
exports.INVALID_REQUEST = new PouchError({
  status: 400,
  error: 'invalid_request',
  reason: 'Request was invalid'
});
exports.QUERY_PARSE_ERROR = new PouchError({
  status: 400,
  error: 'query_parse_error',
  reason: 'Some query parameter is invalid'
});
exports.DOC_VALIDATION = new PouchError({
  status: 500,
  error: 'doc_validation',
  reason: 'Bad special document member'
});
exports.BAD_REQUEST = new PouchError({
  status: 400,
  error: 'bad_request',
  reason: 'Something wrong with the request'
});
exports.NOT_AN_OBJECT = new PouchError({
  status: 400,
  error: 'bad_request',
  reason: 'Document must be a JSON object'
});
exports.DB_MISSING = new PouchError({
  status: 404,
  error: 'not_found',
  reason: 'Database not found'
});
exports.IDB_ERROR = new PouchError({
  status: 500,
  error: 'indexed_db_went_bad',
  reason: 'unknown'
});
exports.WSQ_ERROR = new PouchError({
  status: 500,
  error: 'web_sql_went_bad',
  reason: 'unknown'
});
exports.LDB_ERROR = new PouchError({
  status: 500,
  error: 'levelDB_went_went_bad',
  reason: 'unknown'
});
exports.FORBIDDEN = new PouchError({
  status: 403,
  error: 'forbidden',
  reason: 'Forbidden by design doc validate_doc_update function'
});
exports.error = function (error, reason, name) {
  function CustomPouchError(msg) {
    this.message = reason;
    if (name) {
      this.name = name;
    }
  }
  CustomPouchError.prototype = error;
  return new CustomPouchError(reason);
};

},{}],12:[function(_dereq_,module,exports){
(function (process,global){
'use strict';

var crypto = _dereq_('crypto');
var Md5 = _dereq_('spark-md5');
var setImmediateShim = global.setImmediate || global.setTimeout;

function sliceShim(arrayBuffer, begin, end) {
  if (typeof arrayBuffer.slice === 'function') {
    if (!begin) {
      return arrayBuffer.slice();
    } else if (!end) {
      return arrayBuffer.slice(begin);
    } else {
      return arrayBuffer.slice(begin, end);
    }
  }
  //
  // shim for IE courtesy of http://stackoverflow.com/a/21440217
  //

  //If `begin`/`end` is unspecified, Chrome assumes 0, so we do the same
  //Chrome also converts the values to integers via flooring
  begin = Math.floor(begin || 0);
  end = Math.floor(end || 0);

  var len = arrayBuffer.byteLength;

  //If either `begin` or `end` is negative, it refers to an
  //index from the end of the array, as opposed to from the beginning.
  //The range specified by the `begin` and `end` values is clamped to the
  //valid index range for the current array.
  begin = begin < 0 ? Math.max(begin + len, 0) : Math.min(len, begin);
  end = end < 0 ? Math.max(end + len, 0) : Math.min(len, end);

  //If the computed length of the new ArrayBuffer would be negative, it
  //is clamped to zero.
  if (end - begin <= 0) {
    return new ArrayBuffer(0);
  }

  var result = new ArrayBuffer(end - begin);
  var resultBytes = new Uint8Array(result);
  var sourceBytes = new Uint8Array(arrayBuffer, begin, end - begin);

  resultBytes.set(sourceBytes);

  return result;
}

// convert a 64-bit int to a binary string
function intToString(int) {
  var bytes = [
    (int & 0xff),
    ((int >>> 8) & 0xff),
    ((int >>> 16) & 0xff),
    ((int >>> 24) & 0xff)
  ];
  return bytes.map(function (byte) {
    return String.fromCharCode(byte);
  }).join('');
}

// convert an array of 64-bit ints into
// a base64-encoded string
function rawToBase64(raw) {
  var res = '';
  for (var i = 0; i < raw.length; i++) {
    res += intToString(raw[i]);
  }
  return global.btoa(res);
}

module.exports = function (data, callback) {
  if (!process.browser) {
    var base64 = crypto.createHash('md5').update(data).digest('base64');
    callback(null, base64);
    return;
  }
  var inputIsString = typeof data === 'string';
  var len = inputIsString ? data.length : data.byteLength;
  var chunkSize = Math.min(524288, len);
  var chunks = Math.ceil(len / chunkSize);
  var currentChunk = 0;
  var buffer = inputIsString ? new Md5() : new Md5.ArrayBuffer();

  function append(buffer, data, start, end) {
    if (inputIsString) {
      buffer.appendBinary(data.substring(start, end));
    } else {
      buffer.append(sliceShim(data, start, end));
    }
  }

  function loadNextChunk() {
    var start = currentChunk * chunkSize;
    var end = start + chunkSize;
    if ((start + chunkSize) >= data.size) {
      end = data.size;
    }
    currentChunk++;
    if (currentChunk < chunks) {
      append(buffer, data, start, end);
      setImmediateShim(loadNextChunk);
    } else {
      append(buffer, data, start, end);
      var raw = buffer.end(true);
      var base64 = rawToBase64(raw);
      callback(null, base64);
      buffer.destroy();
    }
  }
  loadNextChunk();
};

}).call(this,_dereq_("/Users/nolan/workspace/pouchdb/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"/Users/nolan/workspace/pouchdb/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js":28,"crypto":26,"spark-md5":57}],13:[function(_dereq_,module,exports){
'use strict';
var Promise = _dereq_('../utils').Promise;

// this is essentially the "update sugar" function from daleharvey/pouchdb#1388
// the diffFun tells us what delta to apply to the doc.  it either returns
// the doc, or false if it doesn't need to do an update after all
function upsert(db, docId, diffFun) {
  return new Promise(function (fulfill, reject) {
    if (docId && typeof docId === 'object') {
      docId = docId._id;
    }
    if (typeof docId !== 'string') {
      return reject(new Error('doc id is required'));
    }

    db.get(docId, function (err, doc) {
      if (err) {
        if (err.status !== 404) {
          return reject(err);
        }
        return fulfill(tryAndPut(db, diffFun({_id : docId}), diffFun));
      }
      var newDoc = diffFun(doc);
      if (!newDoc) {
        return fulfill(doc);
      }
      fulfill(tryAndPut(db, newDoc, diffFun));
    });
  });
}

function tryAndPut(db, doc, diffFun) {
  return db.put(doc)["catch"](function (err) {
    if (err.status !== 409) {
      throw err;
    }
    return upsert(db, doc, diffFun);
  });
}

module.exports = function (db, docId, diffFun, cb) {
  if (typeof cb === 'function') {
    upsert(db, docId, diffFun).then(function (resp) {
      cb(null, resp);
    }, cb);
  } else {
    return upsert(db, docId, diffFun);
  }
};

},{"../utils":23}],14:[function(_dereq_,module,exports){
"use strict";

// BEGIN Math.uuid.js

/*!
Math.uuid.js (v1.4)
http://www.broofa.com
mailto:robert@broofa.com

Copyright (c) 2010 Robert Kieffer
Dual licensed under the MIT and GPL licenses.
*/

/*
 * Generate a random uuid.
 *
 * USAGE: Math.uuid(length, radix)
 *   length - the desired number of characters
 *   radix  - the number of allowable values for each character.
 *
 * EXAMPLES:
 *   // No arguments  - returns RFC4122, version 4 ID
 *   >>> Math.uuid()
 *   "92329D39-6F5C-4520-ABFC-AAB64544E172"
 *
 *   // One argument - returns ID of the specified length
 *   >>> Math.uuid(15)     // 15 character ID (default base=62)
 *   "VcydxgltxrVZSTV"
 *
 *   // Two arguments - returns ID of the specified length, and radix. 
 *   // (Radix must be <= 62)
 *   >>> Math.uuid(8, 2)  // 8 character ID (base=2)
 *   "01001010"
 *   >>> Math.uuid(8, 10) // 8 character ID (base=10)
 *   "47473046"
 *   >>> Math.uuid(8, 16) // 8 character ID (base=16)
 *   "098F4D35"
 */
var chars = (
  '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ' +
  'abcdefghijklmnopqrstuvwxyz'
).split('');
function getValue(radix) {
  return 0 | Math.random() * radix;
}
function uuid(len, radix) {
  radix = radix || chars.length;
  var out = '';
  var i = -1;

  if (len) {
    // Compact form
    while (++i < len) {
      out += chars[getValue(radix)];
    }
    return out;
  }
    // rfc4122, version 4 form
    // Fill in random data.  At i==19 set the high bits of clock sequence as
    // per rfc4122, sec. 4.1.5
  while (++i < 36) {
    switch (i) {
      case 8:
      case 13:
      case 18:
      case 23:
        out += '-';
        break;
      case 19:
        out += chars[(getValue(16) & 0x3) | 0x8];
        break;
      default:
        out += chars[getValue(16)];
    }
  }

  return out;
}



module.exports = uuid;


},{}],15:[function(_dereq_,module,exports){
'use strict';

module.exports = evalFilter;
function evalFilter(input) {
  /*jshint evil: true */
  return eval([
    '(function () { return ',
    input,
    ' })()'
  ].join(''));
}
},{}],16:[function(_dereq_,module,exports){
'use strict';

module.exports = evalView;
function evalView(input) {
  /*jshint evil: true */
  return eval([
    '(function () {',
    '  return function (doc) {',
    '    var emitted = false;',
    '    var emit = function (a, b) {',
    '      emitted = true;',
    '    };',
    '    var view = ' + input + ';',
    '    view(doc);',
    '    if (emitted) {',
    '      return true;',
    '    }',
    '  }',
    '})()'
  ].join('\n'));
}
},{}],17:[function(_dereq_,module,exports){
(function (process){
"use strict";

var PouchDB = _dereq_('./setup');

module.exports = PouchDB;

PouchDB.ajax = _dereq_('./deps/ajax');
PouchDB.extend = _dereq_('pouchdb-extend');
PouchDB.utils = _dereq_('./utils');
PouchDB.Errors = _dereq_('./deps/errors');
PouchDB.replicate = _dereq_('./replicate').replicate;
PouchDB.sync = _dereq_('./sync');
PouchDB.version = _dereq_('./version');
var httpAdapter = _dereq_('./adapters/http');
PouchDB.adapter('http', httpAdapter);
PouchDB.adapter('https', httpAdapter);

PouchDB.adapter('idb', _dereq_('./adapters/idb'));
PouchDB.adapter('websql', _dereq_('./adapters/websql'));
PouchDB.plugin(_dereq_('pouchdb-mapreduce'));

if (!process.browser) {
  var ldbAdapter = _dereq_('./adapters/leveldb');
  PouchDB.adapter('ldb', ldbAdapter);
  PouchDB.adapter('leveldb', ldbAdapter);
}

}).call(this,_dereq_("/Users/nolan/workspace/pouchdb/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js"))
},{"./adapters/http":2,"./adapters/idb":3,"./adapters/leveldb":26,"./adapters/websql":5,"./deps/ajax":8,"./deps/errors":11,"./replicate":19,"./setup":20,"./sync":21,"./utils":23,"./version":24,"/Users/nolan/workspace/pouchdb/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js":28,"pouchdb-extend":48,"pouchdb-mapreduce":51}],18:[function(_dereq_,module,exports){
'use strict';
var extend = _dereq_('pouchdb-extend');


// for a better overview of what this is doing, read:
// https://github.com/apache/couchdb/blob/master/src/couchdb/couch_key_tree.erl
//
// But for a quick intro, CouchDB uses a revision tree to store a documents
// history, A -> B -> C, when a document has conflicts, that is a branch in the
// tree, A -> (B1 | B2 -> C), We store these as a nested array in the format
//
// KeyTree = [Path ... ]
// Path = {pos: position_from_root, ids: Tree}
// Tree = [Key, Opts, [Tree, ...]], in particular single node: [Key, []]

// Turn a path as a flat array into a tree with a single branch
function pathToTree(path) {
  var doc = path.shift();
  var root = [doc.id, doc.opts, []];
  var leaf = root;
  var nleaf;

  while (path.length) {
    doc = path.shift();
    nleaf = [doc.id, doc.opts, []];
    leaf[2].push(nleaf);
    leaf = nleaf;
  }
  return root;
}

// Merge two trees together
// The roots of tree1 and tree2 must be the same revision
function mergeTree(in_tree1, in_tree2) {
  var queue = [{tree1: in_tree1, tree2: in_tree2}];
  var conflicts = false;
  while (queue.length > 0) {
    var item = queue.pop();
    var tree1 = item.tree1;
    var tree2 = item.tree2;

    if (tree1[1].status || tree2[1].status) {
      tree1[1].status =
        (tree1[1].status ===  'available' ||
         tree2[1].status === 'available') ? 'available' : 'missing';
    }

    for (var i = 0; i < tree2[2].length; i++) {
      if (!tree1[2][0]) {
        conflicts = 'new_leaf';
        tree1[2][0] = tree2[2][i];
        continue;
      }

      var merged = false;
      for (var j = 0; j < tree1[2].length; j++) {
        if (tree1[2][j][0] === tree2[2][i][0]) {
          queue.push({tree1: tree1[2][j], tree2: tree2[2][i]});
          merged = true;
        }
      }
      if (!merged) {
        conflicts = 'new_branch';
        tree1[2].push(tree2[2][i]);
        tree1[2].sort();
      }
    }
  }
  return {conflicts: conflicts, tree: in_tree1};
}

function doMerge(tree, path, dontExpand) {
  var restree = [];
  var conflicts = false;
  var merged = false;
  var res;

  if (!tree.length) {
    return {tree: [path], conflicts: 'new_leaf'};
  }

  tree.forEach(function (branch) {
    if (branch.pos === path.pos && branch.ids[0] === path.ids[0]) {
      // Paths start at the same position and have the same root, so they need
      // merged
      res = mergeTree(branch.ids, path.ids);
      restree.push({pos: branch.pos, ids: res.tree});
      conflicts = conflicts || res.conflicts;
      merged = true;
    } else if (dontExpand !== true) {
      // The paths start at a different position, take the earliest path and
      // traverse up until it as at the same point from root as the path we
      // want to merge.  If the keys match we return the longer path with the
      // other merged After stemming we dont want to expand the trees

      var t1 = branch.pos < path.pos ? branch : path;
      var t2 = branch.pos < path.pos ? path : branch;
      var diff = t2.pos - t1.pos;

      var candidateParents = [];

      var trees = [];
      trees.push({ids: t1.ids, diff: diff, parent: null, parentIdx: null});
      while (trees.length > 0) {
        var item = trees.pop();
        if (item.diff === 0) {
          if (item.ids[0] === t2.ids[0]) {
            candidateParents.push(item);
          }
          continue;
        }
        if (!item.ids) {
          continue;
        }
        /*jshint loopfunc:true */
        item.ids[2].forEach(function (el, idx) {
          trees.push(
            {ids: el, diff: item.diff - 1, parent: item.ids, parentIdx: idx});
        });
      }

      var el = candidateParents[0];

      if (!el) {
        restree.push(branch);
      } else {
        res = mergeTree(el.ids, t2.ids);
        el.parent[2][el.parentIdx] = res.tree;
        restree.push({pos: t1.pos, ids: t1.ids});
        conflicts = conflicts || res.conflicts;
        merged = true;
      }
    } else {
      restree.push(branch);
    }
  });

  // We didnt find
  if (!merged) {
    restree.push(path);
  }

  restree.sort(function (a, b) {
    return a.pos - b.pos;
  });

  return {
    tree: restree,
    conflicts: conflicts || 'internal_node'
  };
}

// To ensure we dont grow the revision tree infinitely, we stem old revisions
function stem(tree, depth) {
  // First we break out the tree into a complete list of root to leaf paths,
  // we cut off the start of the path and generate a new set of flat trees
  var stemmedPaths = PouchMerge.rootToLeaf(tree).map(function (path) {
    var stemmed = path.ids.slice(-depth);
    return {
      pos: path.pos + (path.ids.length - stemmed.length),
      ids: pathToTree(stemmed)
    };
  });
  // Then we remerge all those flat trees together, ensuring that we dont
  // connect trees that would go beyond the depth limit
  return stemmedPaths.reduce(function (prev, current, i, arr) {
    return doMerge(prev, current, true).tree;
  }, [stemmedPaths.shift()]);
}

var PouchMerge = {};

PouchMerge.merge = function (tree, path, depth) {
  // Ugh, nicer way to not modify arguments in place?
  tree = extend(true, [], tree);
  path = extend(true, {}, path);
  var newTree = doMerge(tree, path);
  return {
    tree: stem(newTree.tree, depth),
    conflicts: newTree.conflicts
  };
};

// We fetch all leafs of the revision tree, and sort them based on tree length
// and whether they were deleted, undeleted documents with the longest revision
// tree (most edits) win
// The final sort algorithm is slightly documented in a sidebar here:
// http://guide.couchdb.org/draft/conflicts.html
PouchMerge.winningRev = function (metadata) {
  var leafs = [];
  PouchMerge.traverseRevTree(metadata.rev_tree,
                              function (isLeaf, pos, id, something, opts) {
    if (isLeaf) {
      leafs.push({pos: pos, id: id, deleted: !!opts.deleted});
    }
  });
  leafs.sort(function (a, b) {
    if (a.deleted !== b.deleted) {
      return a.deleted > b.deleted ? 1 : -1;
    }
    if (a.pos !== b.pos) {
      return b.pos - a.pos;
    }
    return a.id < b.id ? 1 : -1;
  });

  return leafs[0].pos + '-' + leafs[0].id;
};

// Pretty much all below can be combined into a higher order function to
// traverse revisions
// The return value from the callback will be passed as context to all
// children of that node
PouchMerge.traverseRevTree = function (revs, callback) {
  var toVisit = revs.slice();

  var node;
  while ((node = toVisit.pop())) {
    var pos = node.pos;
    var tree = node.ids;
    var branches = tree[2];
    var newCtx =
      callback(branches.length === 0, pos, tree[0], node.ctx, tree[1]);
    for (var i = 0, len = branches.length; i < len; i++) {
      toVisit.push({pos: pos + 1, ids: branches[i], ctx: newCtx});
    }
  }
};

PouchMerge.collectLeaves = function (revs) {
  var leaves = [];
  PouchMerge.traverseRevTree(revs, function (isLeaf, pos, id, acc, opts) {
    if (isLeaf) {
      leaves.unshift({rev: pos + "-" + id, pos: pos, opts: opts});
    }
  });
  leaves.sort(function (a, b) {
    return b.pos - a.pos;
  });
  leaves.map(function (leaf) { delete leaf.pos; });
  return leaves;
};

// returns revs of all conflicts that is leaves such that
// 1. are not deleted and
// 2. are different than winning revision
PouchMerge.collectConflicts = function (metadata) {
  var win = PouchMerge.winningRev(metadata);
  var leaves = PouchMerge.collectLeaves(metadata.rev_tree);
  var conflicts = [];
  leaves.forEach(function (leaf) {
    if (leaf.rev !== win && !leaf.opts.deleted) {
      conflicts.push(leaf.rev);
    }
  });
  return conflicts;
};

PouchMerge.rootToLeaf = function (tree) {
  var paths = [];
  PouchMerge.traverseRevTree(tree, function (isLeaf, pos, id, history, opts) {
    history = history ? history.slice(0) : [];
    history.push({id: id, opts: opts});
    if (isLeaf) {
      var rootPos = pos + 1 - history.length;
      paths.unshift({pos: rootPos, ids: history});
    }
    return history;
  });
  return paths;
};


module.exports = PouchMerge;

},{"pouchdb-extend":48}],19:[function(_dereq_,module,exports){
'use strict';

var utils = _dereq_('./utils');
var EE = _dereq_('events').EventEmitter;

var MAX_SIMULTANEOUS_REVS = 50;

// We create a basic promise so the caller can cancel the replication possibly
// before we have actually started listening to changes etc
utils.inherits(Replication, EE);
function Replication(opts) {
  EE.call(this);
  this.cancelled = false;
  var self = this;
  var promise = new utils.Promise(function (fulfill, reject) {
    self.once('complete', fulfill);
    self.once('error', reject);
  });
  self.then = function (resolve, reject) {
    return promise.then(resolve, reject);
  };
  self["catch"] = function (reject) {
    return promise["catch"](reject);
  };
  // As we allow error handling via "error" event as well,
  // put a stub in here so that rejecting never throws UnhandledError.
  self["catch"](function (err) {});
}

Replication.prototype.cancel = function () {
  this.cancelled = true;
  this.emit('cancel');
};

Replication.prototype.ready = function (src, target) {
  var self = this;
  function onDestroy() {
    self.cancel();
  }
  src.once('destroyed', onDestroy);
  target.once('destroyed', onDestroy);
  function cleanup() {
    src.removeListener('destroyed', onDestroy);
    target.removeListener('destroyed', onDestroy);
  }
  this.then(cleanup, cleanup);
};


// TODO: check CouchDB's replication id generation
// Generate a unique id particular to this replication
function genReplicationId(src, target, opts) {
  var filterFun = opts.filter ? opts.filter.toString() : '';
  return src.id().then(function (src_id) {
    return target.id().then(function (target_id) {
      var queryData = src_id + target_id + filterFun +
        JSON.stringify(opts.query_params) + opts.doc_ids;
      return utils.MD5(queryData).then(function (md5) {
        // can't use straight-up md5 alphabet, because
        // the char '/' is interpreted as being for attachments,
        // and + is also not url-safe
        md5 = md5.replace(/\//g, '.').replace(/\+/g, '_');
        return '_local/' + md5;
      });
    });
  });
}


function updateCheckpoint(db, id, checkpoint, returnValue) {
    return db.get(id)["catch"](function (err) {
      if (err.status === 404) {
        return {_id: id};
      }
      throw err;
    }).then(function (doc) {
      if (returnValue.cancelled) {
        return;
      }
      doc.last_seq = checkpoint;
      return db.put(doc);
    });
  }

function Checkpointer(src, target, id, returnValue) {
  this.src = src;
  this.target = target;
  this.id = id;
  this.returnValue = returnValue;
}

Checkpointer.prototype.writeCheckpoint = function (checkpoint) {
  var self = this;
  return this.updateTarget(checkpoint).then(function () {
    return self.updateSource(checkpoint);
  });
};
Checkpointer.prototype.updateTarget = function (checkpoint) {
  return updateCheckpoint(this.target, this.id, checkpoint, this.returnValue);
};
Checkpointer.prototype.updateSource = function (checkpoint) {
  var self = this;
  if (this.readOnlySource) {
    return utils.Promise.resolve(true);
  }
  return updateCheckpoint(this.src, this.id, checkpoint, this.returnValue)[
    "catch"](function (err) {
    var isForbidden = typeof err.status === 'number' &&
      Math.floor(err.status / 100) === 4;
    if (isForbidden) {
      self.readOnlySource = true;
      return true;
    }
    throw err;
  });
};
Checkpointer.prototype.getCheckpoint = function () {
  var self = this;
  return self.target.get(self.id).then(function (targetDoc) {
    return self.src.get(self.id).then(function (sourceDoc) {
      if (targetDoc.last_seq === sourceDoc.last_seq) {
        return sourceDoc.last_seq;
      }
      return 0;
    }, function (err) {
      if (err.status === 404 && targetDoc.last_seq) {
        return self.src.put({
          _id: self.id,
          last_seq: 0
        }).then(function () {
          return 0;
        }, function (err) {
          if (err.status === 401) {
            self.readOnlySource = true;
            return targetDoc.last_seq;
          }
          return 0;
        });
      }
      throw err;
    });
  })["catch"](function (err) {
    if (err.status !== 404) {
      throw err;
    }
    return 0;
  });
};
function replicate(repId, src, target, opts, returnValue) {
  var batches = [];               // list of batches to be processed
  var currentBatch;               // the batch currently being processed
  var pendingBatch = {
    seq: 0,
    changes: [],
    docs: []
  }; // next batch, not yet ready to be processed
  var writingCheckpoint = false;  // true while checkpoint is being written
  var changesCompleted = false;   // true when all changes received
  var replicationCompleted = false; // true when replication has completed
  var last_seq = 0;
  var continuous = opts.continuous || opts.live || false;
  var batch_size = opts.batch_size || 100;
  var batches_limit = opts.batches_limit || 10;
  var changesPending = false;     // true while src.changes is running
  var doc_ids = opts.doc_ids;
  var checkpointer = new Checkpointer(src, target, repId, returnValue);
  var result = {
    ok: true,
    start_time: new Date(),
    docs_read: 0,
    docs_written: 0,
    doc_write_failures: 0,
    errors: []
  };
  var changesOpts = {};
  returnValue.ready(src, target);


  function writeDocs() {
    if (currentBatch.docs.length === 0) {
      return;
    }
    var docs = currentBatch.docs;
    return target.bulkDocs({
      docs: docs
    }, {
      new_edits: false
    }).then(function (res) {
      if (returnValue.cancelled) {
        completeReplication();
        throw new Error('cancelled');
      }
      var errors = [];
      res.forEach(function (res) {
        if (res.error) {
          result.doc_write_failures++;
          var error = new Error(res.reason || res.message || 'Unknown reason');
          error.name = res.name || res.error;
          errors.push(error);
        }
      });
      result.errors = result.errors.concat(errors);
      result.docs_written += currentBatch.docs.length - errors.length;
      var non403s = errors.filter(function (error) {
        return error.name !== 'unauthorized' && error.name !== 'forbidden';
      });
      if (non403s.length > 0) {
        var error = new Error('bulkDocs error');
        error.other_errors = errors;
        abortReplication('target.bulkDocs failed to write docs', error);
        throw new Error('bulkWrite partial failure');
      }
    }, function (err) {
      result.doc_write_failures += docs.length;
      throw err;
    });
  }


  function getNextDoc() {
    var diffs = currentBatch.diffs;
    var id = Object.keys(diffs)[0];
    var allMissing = diffs[id].missing;
    // avoid url too long error by batching
    var missingBatches = [];
    for (var i = 0; i < allMissing.length; i += MAX_SIMULTANEOUS_REVS) {
      missingBatches.push(allMissing.slice(i, Math.min(allMissing.length,
        i + MAX_SIMULTANEOUS_REVS)));
    }

    return utils.Promise.all(missingBatches.map(function (missing) {
      return src.get(id, {revs: true, open_revs: missing, attachments: true})
        .then(function (docs) {
          docs.forEach(function (doc) {
            if (returnValue.cancelled) {
              return completeReplication();
            }
            if (doc.ok) {
              result.docs_read++;
              currentBatch.pendingRevs++;
              currentBatch.docs.push(doc.ok);
              delete diffs[doc.ok._id];
            }
          });
        });
    }));
  }

  function getAllDocs() {
    if (Object.keys(currentBatch.diffs).length > 0) {
      return getNextDoc().then(getAllDocs);
    } else {
      return utils.Promise.resolve();
    }
  }


  function getRevisionOneDocs() {
    // filter out the generation 1 docs and get them
    // leaving the non-generation one docs to be got otherwise
    var ids = Object.keys(currentBatch.diffs).filter(function (id) {
      var missing = currentBatch.diffs[id].missing;
      return missing.length === 1 && missing[0].slice(0, 2) === '1-';
    });
    return src.allDocs({
      keys: ids,
      include_docs: true
    }).then(function (res) {
      if (returnValue.cancelled) {
        completeReplication();
        throw (new Error('cancelled'));
      }
      res.rows.forEach(function (row) {
        if (row.doc && !row.deleted &&
          row.value.rev.slice(0, 2) === '1-' && (
            !row.doc._attachments ||
            Object.keys(row.doc._attachments).length === 0
          )
        ) {
          result.docs_read++;
          currentBatch.pendingRevs++;
          currentBatch.docs.push(row.doc);
          delete currentBatch.diffs[row.id];
        }
      });
    });
  }


  function getDocs() {
    return getRevisionOneDocs().then(getAllDocs);
  }


  function finishBatch() {
    writingCheckpoint = true;
    return checkpointer.writeCheckpoint(
      currentBatch.seq
    ).then(function (res) {
      writingCheckpoint = false;
      if (returnValue.cancelled) {
        completeReplication();
        throw new Error('cancelled');
      }
      result.last_seq = last_seq = currentBatch.seq;
      returnValue.emit('change', utils.clone(result));
      currentBatch = undefined;
      getChanges();
    })["catch"](function (err) {
      writingCheckpoint = false;
      abortReplication('writeCheckpoint completed with error', err);
      throw err;
    });
  }


  function getDiffs() {
    var diff = {};
    currentBatch.changes.forEach(function (change) {
      diff[change.id] = change.changes.map(function (x) {
        return x.rev;
      });
    });
    return target.revsDiff(diff).then(function (diffs) {
      if (returnValue.cancelled) {
        completeReplication();
        throw new Error('cancelled');
      }
      // currentBatch.diffs elements are deleted as the documents are written
      currentBatch.diffs = diffs;
      currentBatch.pendingRevs = 0;
    });
  }


  function startNextBatch() {
    if (returnValue.cancelled || currentBatch) {
      return;
    }
    if (batches.length === 0) {
      processPendingBatch(true);
      return;
    }
    currentBatch = batches.shift();
    getDiffs()
    .then(getDocs)
    .then(writeDocs)
    .then(finishBatch)
    .then(startNextBatch)[
    "catch"](function (err) {
      abortReplication('batch processing terminated with error', err);
    });
  }


  function processPendingBatch(immediate) {
    if (pendingBatch.changes.length === 0) {
      if (batches.length === 0 && !currentBatch) {
        if ((continuous && changesOpts.live) || changesCompleted) {
          returnValue.emit('uptodate', utils.clone(result));
        }
        if (changesCompleted) {
          completeReplication();
        }
      }
      return;
    }
    if (
      immediate ||
      changesCompleted ||
      pendingBatch.changes.length >= batch_size
    ) {
      batches.push(pendingBatch);
      pendingBatch = {
        seq: 0,
        changes: [],
        docs: []
      };
      startNextBatch();
    }
  }


  function abortReplication(reason, err) {
    if (replicationCompleted) {
      return;
    }
    result.ok = false;
    result.status = 'aborted';
    result.errors.push(err);
    batches = [];
    pendingBatch = {
      seq: 0,
      changes: [],
      docs: []
    };
    completeReplication();
  }


  function completeReplication() {
    if (replicationCompleted) {
      return;
    }
    if (returnValue.cancelled) {
      result.status = 'cancelled';
      if (writingCheckpoint) {
        return;
      }
    }
    result.status = result.status || 'complete';
    result.end_time = new Date();
    result.last_seq = last_seq;
    replicationCompleted = returnValue.cancelled = true;
    var non403s = result.errors.filter(function (error) {
      return error.name !== 'unauthorized' && error.name !== 'forbidden';
    });
    if (non403s.length > 0) {
      var error = result.errors.pop();
      if (result.errors.length > 0) {
        error.other_errors = result.errors;
      }
      error.result = result;
      returnValue.emit('error', error);
    } else {
      returnValue.emit('complete', result);
    }
    returnValue.removeAllListeners();
  }


  function onChange(change) {
    if (returnValue.cancelled) {
      return completeReplication();
    }
    if (
      pendingBatch.changes.length === 0 &&
      batches.length === 0 &&
      !currentBatch
    ) {
      returnValue.emit('outofdate', utils.clone(result));
    }
    pendingBatch.seq = change.seq;
    pendingBatch.changes.push(change);
    processPendingBatch(batches.length === 0);
  }


  function onChangesComplete(changes) {
    changesPending = false;
    if (returnValue.cancelled) {
      return completeReplication();
    }
    if (changesOpts.since < changes.last_seq) {
      changesOpts.since = changes.last_seq;
      getChanges();
    } else {
      if (continuous) {
        changesOpts.live = true;
        getChanges();
      } else {
        changesCompleted = true;
      }
    }
    processPendingBatch(true);
  }


  function onChangesError(err) {
    changesPending = false;
    if (returnValue.cancelled) {
      return completeReplication();
    }
    abortReplication('changes rejected', err);
  }


  function getChanges() {
    if (!(
      !changesPending &&
      !changesCompleted &&
      batches.length < batches_limit
    )) {
      return;
    }
    changesPending = true;
    function abortChanges() {
      changes.cancel();
    }
    function removeListener() {
      returnValue.removeListener('cancel', abortChanges);
    }
    returnValue.once('cancel', abortChanges);
    var changes = src.changes(changesOpts)
    .on('change', onChange);
    changes.then(removeListener, removeListener);
    changes.then(onChangesComplete)[
    "catch"](onChangesError);
  }


  function startChanges() {
    checkpointer.getCheckpoint().then(function (checkpoint) {
      last_seq = checkpoint;
      changesOpts = {
        since: last_seq,
        limit: batch_size,
        batch_size: batch_size,
        style: 'all_docs',
        doc_ids: doc_ids,
        returnDocs: false
      };
      if (opts.filter) {
        changesOpts.filter = opts.filter;
      }
      if (opts.query_params) {
        changesOpts.query_params = opts.query_params;
      }
      getChanges();
    })["catch"](function (err) {
      abortReplication('getCheckpoint rejected with ', err);
    });
  }


  returnValue.once('cancel', completeReplication);

  if (typeof opts.onChange === 'function') {
    returnValue.on('change', opts.onChange);
  }

  if (typeof opts.complete === 'function') {
    returnValue.once('error', opts.complete);
    returnValue.once('complete', function (result) {
      opts.complete(null, result);
    });
  }

  if (typeof opts.since === 'undefined') {
    startChanges();
  } else {
    writingCheckpoint = true;
    checkpointer.writeCheckpoint(opts.since).then(function (res) {
      writingCheckpoint = false;
      if (returnValue.cancelled) {
        completeReplication();
        return;
      }
      last_seq = opts.since;
      startChanges();
    })["catch"](function (err) {
      writingCheckpoint = false;
      abortReplication('writeCheckpoint completed with error', err);
      throw err;
    });
  }
}

exports.toPouch = toPouch;
function toPouch(db, opts) {
  var PouchConstructor = opts.PouchConstructor;
  if (typeof db === 'string') {
    return new PouchConstructor(db);
  } else if (db.then) {
    return db;
  } else {
    return utils.Promise.resolve(db);
  }
}


exports.replicate = replicateWrapper;
function replicateWrapper(src, target, opts, callback) {
  if (typeof opts === 'function') {
    callback = opts;
    opts = {};
  }
  if (typeof opts === 'undefined') {
    opts = {};
  }
  if (!opts.complete) {
    opts.complete = callback || function () {};
  }
  opts = utils.clone(opts);
  opts.continuous = opts.continuous || opts.live;
  /*jshint validthis:true */
  opts.PouchConstructor = opts.PouchConstructor || this;
  var replicateRet = new Replication(opts);
  toPouch(src, opts).then(function (src) {
    return toPouch(target, opts).then(function (target) {
      return genReplicationId(src, target, opts).then(function (repId) {
        replicate(repId, src, target, opts, replicateRet);
      });
    });
  })["catch"](function (err) {
    replicateRet.emit('error', err);
    opts.complete(err);
  });
  return replicateRet;
}

},{"./utils":23,"events":27}],20:[function(_dereq_,module,exports){
(function (global){
"use strict";

var PouchDB = _dereq_("./constructor");
var utils = _dereq_('./utils');
var Promise = utils.Promise;
var EventEmitter = _dereq_('events').EventEmitter;
PouchDB.adapters = {};
PouchDB.preferredAdapters = _dereq_('./adapters/preferredAdapters.js');

PouchDB.prefix = '_pouch_';

var eventEmitter = new EventEmitter();

var eventEmitterMethods = [
  'on',
  'addListener',
  'emit',
  'listeners',
  'once',
  'removeAllListeners',
  'removeListener',
  'setMaxListeners'
];

eventEmitterMethods.forEach(function (method) {
  PouchDB[method] = eventEmitter[method].bind(eventEmitter);
});
PouchDB.setMaxListeners(0);
PouchDB.parseAdapter = function (name, opts) {
  var match = name.match(/([a-z\-]*):\/\/(.*)/);
  var adapter, adapterName;
  if (match) {
    // the http adapter expects the fully qualified name
    name = /http(s?)/.test(match[1]) ? match[1] + '://' + match[2] : match[2];
    adapter = match[1];
    if (!PouchDB.adapters[adapter].valid()) {
      throw 'Invalid adapter';
    }
    return {name: name, adapter: match[1]};
  }

  // check for browsers that have been upgraded from websql-only to websql+idb
  var skipIdb = 'idb' in PouchDB.adapters && 'websql' in PouchDB.adapters &&
    utils.hasLocalStorage() &&
    global.localStorage['_pouch__websqldb_' + PouchDB.prefix + name];

  if (typeof opts !== 'undefined' && opts.db) {
    adapterName = 'leveldb';
  } else {
    for (var i = 0; i < PouchDB.preferredAdapters.length; ++i) {
      adapterName = PouchDB.preferredAdapters[i];
      if (adapterName in PouchDB.adapters) {
        if (skipIdb && adapterName === 'idb') {
          continue; // keep using websql to avoid user data loss
        }
        break;
      }
    }
  }

  adapter = PouchDB.adapters[adapterName];
  if (adapterName && adapter) {
    var use_prefix = 'use_prefix' in adapter ? adapter.use_prefix : true;

    return {
      name: use_prefix ? PouchDB.prefix + name : name,
      adapter: adapterName
    };
  }

  throw 'No valid adapter found';
};

PouchDB.destroy = utils.toPromise(function (name, opts, callback) {
  if (typeof opts === 'function' || typeof opts === 'undefined') {
    callback = opts;
    opts = {};
  }

  if (name && typeof name === 'object') {
    opts = name;
    name = undefined;
  }

  var backend = PouchDB.parseAdapter(opts.name || name, opts);
  var dbName = backend.name;
  var adapter = PouchDB.adapters[backend.adapter];
  var usePrefix = 'use_prefix' in adapter ? adapter.use_prefix : true;
  var baseName = usePrefix ?
    dbName.replace(new RegExp('^' + PouchDB.prefix), '') : dbName;
  var fullName = (backend.adapter === 'http' || backend.adapter === 'https' ?
      '' : (opts.prefix || '')) + dbName;
  function destroyDb() {
    // call destroy method of the particular adaptor
    adapter.destroy(fullName, opts, function (err, resp) {
      if (err) {
        callback(err);
      } else {
        PouchDB.emit('destroyed', name);
        //so we don't have to sift through all dbnames
        PouchDB.emit(name, 'destroyed');
        callback(null, resp || { 'ok': true });
      }
    });
  }

  var createOpts = utils.extend(true, {}, opts, {adapter : backend.adapter});
  new PouchDB(baseName, createOpts, function (err, db) {
    if (err) {
      return callback(err);
    }
    db.get('_local/_pouch_dependentDbs', function (err, localDoc) {
      if (err) {
        if (err.status !== 404) {
          return callback(err);
        } else { // no dependencies
          return destroyDb();
        }
      }
      var dependentDbs = localDoc.dependentDbs;
      var deletedMap = Object.keys(dependentDbs).map(function (name) {
        var trueName = usePrefix ?
          name.replace(new RegExp('^' + PouchDB.prefix), '') : name;
        var subOpts = utils.extend(true, opts, {adapter: backend.adapter});
        return PouchDB.destroy(trueName, subOpts);
      });
      Promise.all(deletedMap).then(destroyDb, function (error) {
        callback(error);
      });
    });
  });
});

PouchDB.allDbs = utils.toPromise(function (callback) {
  var err = new Error('allDbs method removed');
  err.stats = '400';
  callback(err);
});
PouchDB.adapter = function (id, obj) {
  if (obj.valid()) {
    PouchDB.adapters[id] = obj;
  }
};

PouchDB.plugin = function (obj) {
  Object.keys(obj).forEach(function (id) {
    PouchDB.prototype[id] = obj[id];
  });
};

PouchDB.defaults = function (defaultOpts) {
  function PouchAlt(name, opts, callback) {
    if (typeof opts === 'function' || typeof opts === 'undefined') {
      callback = opts;
      opts = {};
    }
    if (name && typeof name === 'object') {
      opts = name;
      name = undefined;
    }

    opts = utils.extend(true, {}, defaultOpts, opts);
    PouchDB.call(this, name, opts, callback);
  }

  utils.inherits(PouchAlt, PouchDB);

  PouchAlt.destroy = utils.toPromise(function (name, opts, callback) {
    if (typeof opts === 'function' || typeof opts === 'undefined') {
      callback = opts;
      opts = {};
    }

    if (name && typeof name === 'object') {
      opts = name;
      name = undefined;
    }
    opts = utils.extend(true, {}, defaultOpts, opts);
    return PouchDB.destroy(name, opts, callback);
  });

  eventEmitterMethods.forEach(function (method) {
    PouchAlt[method] = eventEmitter[method].bind(eventEmitter);
  });
  PouchAlt.setMaxListeners(0);

  PouchAlt.preferredAdapters = PouchDB.preferredAdapters.slice();
  Object.keys(PouchDB).forEach(function (key) {
    if (!(key in PouchAlt)) {
      PouchAlt[key] = PouchDB[key];
    }
  });

  return PouchAlt;
};

module.exports = PouchDB;

}).call(this,typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./adapters/preferredAdapters.js":4,"./constructor":7,"./utils":23,"events":27}],21:[function(_dereq_,module,exports){
'use strict';
var utils = _dereq_('./utils');
var replication = _dereq_('./replicate');
var replicate = replication.replicate;
var EE = _dereq_('events').EventEmitter;

utils.inherits(Sync, EE);
module.exports = sync;
function sync(src, target, opts, callback) {
  if (typeof opts === 'function') {
    callback = opts;
    opts = {};
  }
  if (typeof opts === 'undefined') {
    opts = {};
  }
  opts = utils.clone(opts);
  /*jshint validthis:true */
  opts.PouchConstructor = opts.PouchConstructor || this;
  src = replication.toPouch(src, opts);
  target = replication.toPouch(target, opts);
  return new Sync(src, target, opts, callback);
}
function Sync(src, target, opts, callback) {
  var self = this;
  this.canceled = false;
  
  var onChange, complete;
  if ('onChange' in opts) {
    onChange = opts.onChange;
    delete opts.onChange;
  }
  if (typeof callback === 'function' && !opts.complete) {
    complete = callback;
  } else if ('complete' in opts) {
    complete = opts.complete;
    delete opts.complete;
  }

  this.push = replicate(src, target, opts);

  this.pull = replicate(target, src, opts);
  var emittedCancel = false;
  function onCancel(data) {
    if (!emittedCancel) {
      emittedCancel = true;
      self.emit('cancel', data);
    }
  }

  function pullChange(change) {
    self.emit('change', {
      direction: 'pull',
      change: change
    });
  }
  function pushChange(change) {
    self.emit('change', {
      direction: 'push',
      change: change
    });
  }
  var listeners = {};

  var removed = {};
  function removeAll(type) { // type is 'push' or 'pull'
    return function (event, func) {
      var isChange = event === 'change' &&
        (func === pullChange || func === pushChange);
      var isCancel = event === 'cancel' && func === onCancel;
      var isOtherEvent = event in listeners && func === listeners[event];

      if (isChange || isCancel || isOtherEvent) {
        if (!(event in removed)) {
          removed[event] = {};
        }
        removed[event][type] = true;
        if (Object.keys(removed[event]).length === 2) {
          // both push and pull have asked to be removed
          self.removeAllListeners(event);
        }
      }
    };
  }

  this.on('newListener', function (event) {
    if (event === 'change') {
      self.pull.on('change', pullChange);
      self.push.on('change', pushChange);
    } else if (event === 'cancel') {
      self.pull.on('cancel', onCancel);
      self.push.on('cancel', onCancel);
    } else if (event !== 'error' &&
      event !== 'removeListener' &&
      event !== 'complete' && !(event in listeners)) {
      listeners[event] = function (e) {
        self.emit(event, e);
      };
      self.pull.on(event, listeners[event]);
      self.push.on(event, listeners[event]);
    }
  });

  this.on('removeListener', function (event) {
    if (event === 'change') {
      self.pull.removeListener('change', pullChange);
      self.push.removeListener('change', pushChange);
    } else if (event === 'cancel') {
      self.pull.removeListener('cancel', onCancel);
      self.push.removeListener('cancel', onCancel);
    } else if (event in listeners) {
      if (typeof listeners[event] === 'function') {
        self.pull.removeListener(event, listeners[event]);
        self.push.removeListener(event, listeners[event]);
        delete listeners[event];
      }
    }
  });

  this.pull.on('removeListener', removeAll('pull'));
  this.push.on('removeListener', removeAll('push'));

  var promise = utils.Promise.all([
    this.push,
    this.pull
  ]).then(function (resp) {
    var out = {
      push: resp[0],
      pull: resp[1]
    };
    self.emit('complete', out);
    if (complete) {
      complete(null, out);
    }
    self.removeAllListeners();
    return out;
  }, function (err) {
    self.cancel();
    self.emit('error', err);
    if (complete) {
      complete(err);
    }
    self.removeAllListeners();
    throw err;
  });

  this.then = function (success, err) {
    return promise.then(success, err);
  };

  this["catch"] = function (err) {
    return promise["catch"](err);
  };
}

Sync.prototype.cancel = function () {
  if (!this.canceled) {
    this.canceled = true;
    this.push.cancel();
    this.pull.cancel();
  }
};

},{"./replicate":19,"./utils":23,"events":27}],22:[function(_dereq_,module,exports){
'use strict';

module.exports = TaskQueue;

function TaskQueue() {
  this.isReady = false;
  this.failed = false;
  this.queue = [];
}

TaskQueue.prototype.execute = function () {
  var d, func;
  if (this.failed) {
    while ((d = this.queue.shift())) {
      if (typeof d === 'function') {
        d(this.failed);
        continue;
      }
      func = d.parameters[d.parameters.length - 1];
      if (typeof func === 'function') {
        func(this.failed);
      } else if (d.name === 'changes' && typeof func.complete === 'function') {
        func.complete(this.failed);
      }
    }
  } else if (this.isReady) {
    while ((d = this.queue.shift())) {

      if (typeof d === 'function') {
        d();
      } else {
        d.task = this.db[d.name].apply(this.db, d.parameters);
      }
    }
  }
};

TaskQueue.prototype.fail = function (err) {
  this.failed = err;
  this.execute();
};

TaskQueue.prototype.ready = function (db) {
  if (this.failed) {
    return false;
  } else if (arguments.length === 0) {
    return this.isReady;
  }
  this.isReady = db ? true: false;
  this.db = db;
  this.execute();
};

TaskQueue.prototype.addTask = function (name, parameters) {
  if (typeof name === 'function') {
    this.queue.push(name);
    if (this.failed) {
      this.execute();
    }
  } else {
    var task = { name: name, parameters: parameters };
    this.queue.push(task);
    if (this.failed) {
      this.execute();
    }
    return task;
  }
};

},{}],23:[function(_dereq_,module,exports){
(function (process,global){
/*jshint strict: false */
/*global chrome */
var merge = _dereq_('./merge');
exports.extend = _dereq_('pouchdb-extend');
exports.ajax = _dereq_('./deps/ajax');
exports.createBlob = _dereq_('./deps/blob');
exports.uuid = _dereq_('./deps/uuid');
exports.getArguments = _dereq_('argsarray');
var buffer = _dereq_('./deps/buffer');
var errors = _dereq_('./deps/errors');
var EventEmitter = _dereq_('events').EventEmitter;
var collections = _dereq_('./deps/collections');
exports.Map = collections.Map;
exports.Set = collections.Set;

if (typeof global.Promise === 'function') {
  exports.Promise = global.Promise;
} else {
  exports.Promise = _dereq_('bluebird');
}
var Promise = exports.Promise;

function toObject(array) {
  var obj = {};
  array.forEach(function (item) { obj[item] = true; });
  return obj;
}
// List of top level reserved words for doc
var reservedWords = toObject([
  '_id',
  '_rev',
  '_attachments',
  '_deleted',
  '_revisions',
  '_revs_info',
  '_conflicts',
  '_deleted_conflicts',
  '_local_seq',
  '_rev_tree',
  //replication documents
  '_replication_id',
  '_replication_state',
  '_replication_state_time',
  '_replication_state_reason',
  '_replication_stats'
]);

// List of reserved words that should end up the document
var dataWords = toObject([
  '_attachments',
  //replication documents
  '_replication_id',
  '_replication_state',
  '_replication_state_time',
  '_replication_state_reason',
  '_replication_stats'
]);

exports.clone = function (obj) {
  return exports.extend(true, {}, obj);
};
exports.inherits = _dereq_('inherits');
// Determine id an ID is valid
//   - invalid IDs begin with an underescore that does not begin '_design' or
//     '_local'
//   - any other string value is a valid id
// Returns the specific error object for each case
exports.invalidIdError = function (id) {
  var err;
  if (!id) {
    err = new TypeError(errors.MISSING_ID.message);
    err.status = 412;
  } else if (typeof id !== 'string') {
    err = new TypeError(errors.INVALID_ID.message);
    err.status = 400;
  } else if (/^_/.test(id) && !(/^_(design|local)/).test(id)) {
    err = new TypeError(errors.RESERVED_ID.message);
    err.status = 400;
  }
  if (err) {
    throw err;
  }
};

function isChromeApp() {
  return (typeof chrome !== "undefined" &&
          typeof chrome.storage !== "undefined" &&
          typeof chrome.storage.local !== "undefined");
}

// Pretty dumb name for a function, just wraps callback calls so we dont
// to if (callback) callback() everywhere
exports.call = exports.getArguments(function (args) {
  if (!args.length) {
    return;
  }
  var fun = args.shift();
  if (typeof fun === 'function') {
    fun.apply(this, args);
  }
});

exports.isLocalId = function (id) {
  return (/^_local/).test(id);
};

// check if a specific revision of a doc has been deleted
//  - metadata: the metadata object from the doc store
//  - rev: (optional) the revision to check. defaults to winning revision
exports.isDeleted = function (metadata, rev) {
  if (!rev) {
    rev = merge.winningRev(metadata);
  }
  var dashIndex = rev.indexOf('-');
  if (dashIndex !== -1) {
    rev = rev.substring(dashIndex + 1);
  }
  var deleted = false;
  merge.traverseRevTree(metadata.rev_tree,
  function (isLeaf, pos, id, acc, opts) {
    if (id === rev) {
      deleted = !!opts.deleted;
    }
  });

  return deleted;
};

exports.filterChange = function (opts) {
  return function (change) {
    var req = {};
    var hasFilter = opts.filter && typeof opts.filter === 'function';

    req.query = opts.query_params;
    if (opts.filter && hasFilter && !opts.filter.call(this, change.doc, req)) {
      return false;
    }
    if (opts.doc_ids && opts.doc_ids.indexOf(change.id) === -1) {
      return false;
    }
    if (!opts.include_docs) {
      delete change.doc;
    } else {
      for (var att in change.doc._attachments) {
        if (change.doc._attachments.hasOwnProperty(att)) {
          change.doc._attachments[att].stub = true;
        }
      }
    }
    return true;
  };
};

// Preprocess documents, parse their revisions, assign an id and a
// revision for new writes that are missing them, etc
exports.parseDoc = function (doc, newEdits) {
  var nRevNum;
  var newRevId;
  var revInfo;
  var error;
  var opts = {status: 'available'};
  if (doc._deleted) {
    opts.deleted = true;
  }

  if (newEdits) {
    if (!doc._id) {
      doc._id = exports.uuid();
    }
    newRevId = exports.uuid(32, 16).toLowerCase();
    if (doc._rev) {
      revInfo = /^(\d+)-(.+)$/.exec(doc._rev);
      if (!revInfo) {
        var err = new TypeError("invalid value for property '_rev'");
        err.status = 400;
      }
      doc._rev_tree = [{
        pos: parseInt(revInfo[1], 10),
        ids: [revInfo[2], {status: 'missing'}, [[newRevId, opts, []]]]
      }];
      nRevNum = parseInt(revInfo[1], 10) + 1;
    } else {
      doc._rev_tree = [{
        pos: 1,
        ids : [newRevId, opts, []]
      }];
      nRevNum = 1;
    }
  } else {
    if (doc._revisions) {
      doc._rev_tree = [{
        pos: doc._revisions.start - doc._revisions.ids.length + 1,
        ids: doc._revisions.ids.reduce(function (acc, x) {
          if (acc === null) {
            return [x, opts, []];
          } else {
            return [x, {status: 'missing'}, [acc]];
          }
        }, null)
      }];
      nRevNum = doc._revisions.start;
      newRevId = doc._revisions.ids[0];
    }
    if (!doc._rev_tree) {
      revInfo = /^(\d+)-(.+)$/.exec(doc._rev);
      if (!revInfo) {
        error = new TypeError(errors.BAD_ARG.message);
        error.status = errors.BAD_ARG.status;
        throw error;
      }
      nRevNum = parseInt(revInfo[1], 10);
      newRevId = revInfo[2];
      doc._rev_tree = [{
        pos: parseInt(revInfo[1], 10),
        ids: [revInfo[2], opts, []]
      }];
    }
  }

  exports.invalidIdError(doc._id);

  doc._rev = [nRevNum, newRevId].join('-');

  var result = {metadata : {}, data : {}};
  for (var key in doc) {
    if (doc.hasOwnProperty(key)) {
      var specialKey = key[0] === '_';
      if (specialKey && !reservedWords[key]) {
        error = new Error(errors.DOC_VALIDATION.message + ': ' + key);
        error.status = errors.DOC_VALIDATION.status;
        throw error;
      } else if (specialKey && !dataWords[key]) {
        result.metadata[key.slice(1)] = doc[key];
      } else {
        result.data[key] = doc[key];
      }
    }
  }
  return result;
};

exports.isCordova = function () {
  return (typeof cordova !== "undefined" ||
          typeof PhoneGap !== "undefined" ||
          typeof phonegap !== "undefined");
};

exports.hasLocalStorage = function () {
  if (isChromeApp()) {
    return false;
  }
  try {
    return global.localStorage;
  } catch (e) {
    return false;
  }
};
exports.Changes = Changes;
exports.inherits(Changes, EventEmitter);
function Changes() {
  if (!(this instanceof Changes)) {
    return new Changes();
  }
  var self = this;
  EventEmitter.call(this);
  this.isChrome = isChromeApp();
  this.listeners = {};
  this.hasLocal = false;
  if (!this.isChrome) {
    this.hasLocal = exports.hasLocalStorage();
  }
  if (this.isChrome) {
    chrome.storage.onChanged.addListener(function (e) {
      // make sure it's event addressed to us
      if (e.db_name != null) {
        //object only has oldValue, newValue members
        self.emit(e.dbName.newValue);
      }
    });
  } else if (this.hasLocal) {
    if (global.addEventListener) {
      global.addEventListener("storage", function (e) {
        self.emit(e.key);
      });
    } else {
      global.attachEvent("storage", function (e) {
        self.emit(e.key);
      });
    }
  }

}
Changes.prototype.addListener = function (dbName, id, db, opts) {
  if (this.listeners[id]) {
    return;
  }
  function eventFunction() {
    db.changes({
      include_docs: opts.include_docs,
      conflicts: opts.conflicts,
      continuous: false,
      descending: false,
      filter: opts.filter,
      view: opts.view,
      since: opts.since,
      query_params: opts.query_params,
      onChange: function (c) {
        if (c.seq > opts.since && !opts.cancelled) {
          opts.since = c.seq;
          exports.call(opts.onChange, c);
        }
      }
    });
  }
  this.listeners[id] = eventFunction;
  this.on(dbName, eventFunction);
};

Changes.prototype.removeListener = function (dbName, id) {
  if (!(id in this.listeners)) {
    return;
  }
  EventEmitter.prototype.removeListener.call(this, dbName,
    this.listeners[id]);
};


Changes.prototype.notifyLocalWindows = function (dbName) {
  //do a useless change on a storage thing
  //in order to get other windows's listeners to activate
  if (this.isChrome) {
    chrome.storage.local.set({dbName: dbName});
  } else if (this.hasLocal) {
    localStorage[dbName] = (localStorage[dbName] === "a") ? "b" : "a";
  }
};

Changes.prototype.notify = function (dbName) {
  this.emit(dbName);
  this.notifyLocalWindows(dbName);
};

if (!process.browser || !('atob' in global)) {
  exports.atob = function (str) {
    var base64 = new buffer(str, 'base64');
    // Node.js will just skip the characters it can't encode instead of
    // throwing and exception
    if (base64.toString('base64') !== str) {
      throw ("Cannot base64 encode full string");
    }
    return base64.toString('binary');
  };
} else {
  exports.atob = function (str) {
    return atob(str);
  };
}

if (!process.browser || !('btoa' in global)) {
  exports.btoa = function (str) {
    return new buffer(str, 'binary').toString('base64');
  };
} else {
  exports.btoa = function (str) {
    return btoa(str);
  };
}

// From http://stackoverflow.com/questions/14967647/ (continues on next line)
// encode-decode-image-with-base64-breaks-image (2013-04-21)
exports.fixBinary = function (bin) {
  if (!process.browser) {
    // don't need to do this in Node
    return bin;
  }

  var length = bin.length;
  var buf = new ArrayBuffer(length);
  var arr = new Uint8Array(buf);
  for (var i = 0; i < length; i++) {
    arr[i] = bin.charCodeAt(i);
  }
  return buf;
};

exports.once = function (fun) {
  var called = false;
  return exports.getArguments(function (args) {
    if (called) {
      if (typeof console.trace === 'function') {
        console.trace();
      }
      throw new Error('once called  more than once');
    } else {
      called = true;
      fun.apply(this, args);
    }
  });
};

exports.toPromise = function (func) {
  //create the function we will be returning
  return exports.getArguments(function (args) {
    var self = this;
    var tempCB =
      (typeof args[args.length - 1] === 'function') ? args.pop() : false;
    // if the last argument is a function, assume its a callback
    var usedCB;
    if (tempCB) {
      // if it was a callback, create a new callback which calls it,
      // but do so async so we don't trap any errors
      usedCB = function (err, resp) {
        process.nextTick(function () {
          tempCB(err, resp);
        });
      };
    }
    var promise = new Promise(function (fulfill, reject) {
      var resp;
      try {
        var callback = exports.once(function (err, mesg) {
          if (err) {
            reject(err);
          } else {
            fulfill(mesg);
          }
        });
        // create a callback for this invocation
        // apply the function in the orig context
        args.push(callback);
        resp = func.apply(self, args);
        if (resp && typeof resp.then === 'function') {
          fulfill(resp);
        }
      } catch (e) {
        reject(e);
      }
    });
    // if there is a callback, call it back
    if (usedCB) {
      promise.then(function (result) {
        usedCB(null, result);
      }, usedCB);
    }
    promise.cancel = function () {
      return this;
    };
    return promise;
  });
};

exports.adapterFun = function (name, callback) {
  return exports.toPromise(exports.getArguments(function (args) {
    if (this._closed) {
      return Promise.reject(new Error('database is closed'));
    }
    var self = this;
    if (!this.taskqueue.isReady) {
      return new exports.Promise(function (fulfill, reject) {
        self.taskqueue.addTask(function (failed) {
          if (failed) {
            reject(failed);
          } else {
            fulfill(self[name].apply(self, args));
          }
        });
      });
    }
    return callback.apply(this, args);
  }));
};
//Can't find original post, but this is close
//http://stackoverflow.com/questions/6965107/ (continues on next line)
//converting-between-strings-and-arraybuffers
exports.arrayBufferToBinaryString = function (buffer) {
  var binary = "";
  var bytes = new Uint8Array(buffer);
  var length = bytes.byteLength;
  for (var i = 0; i < length; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return binary;
};

exports.cancellableFun = function (fun, self, opts) {

  opts = opts ? exports.clone(true, {}, opts) : {};

  var emitter = new EventEmitter();
  var oldComplete = opts.complete || function () { };
  var complete = opts.complete = exports.once(function (err, resp) {
    if (err) {
      oldComplete(err);
    } else {
      emitter.emit('end', resp);
      oldComplete(null, resp);
    }
    emitter.removeAllListeners();
  });
  var oldOnChange = opts.onChange || function () {};
  var lastChange = 0;
  self.on('destroyed', function () {
    emitter.removeAllListeners();
  });
  opts.onChange = function (change) {
    oldOnChange(change);
    if (change.seq <= lastChange) {
      return;
    }
    lastChange = change.seq;
    emitter.emit('change', change);
    if (change.deleted) {
      emitter.emit('delete', change);
    } else if (change.changes.length === 1 &&
      change.changes[0].rev.slice(0, 1) === '1-') {
      emitter.emit('create', change);
    } else {
      emitter.emit('update', change);
    }
  };
  var promise = new Promise(function (fulfill, reject) {
    opts.complete = function (err, res) {
      if (err) {
        reject(err);
      } else {
        fulfill(res);
      }
    };
  });

  promise.then(function (result) {
    complete(null, result);
  }, complete);

  // this needs to be overwridden by caller, dont fire complete until
  // the task is ready
  promise.cancel = function () {
    promise.isCancelled = true;
    if (self.taskqueue.isReady) {
      opts.complete(null, {status: 'cancelled'});
    }
  };

  if (!self.taskqueue.isReady) {
    self.taskqueue.addTask(function () {
      if (promise.isCancelled) {
        opts.complete(null, {status: 'cancelled'});
      } else {
        fun(self, opts, promise);
      }
    });
  } else {
    fun(self, opts, promise);
  }
  promise.on = emitter.on.bind(emitter);
  promise.once = emitter.once.bind(emitter);
  promise.addListener = emitter.addListener.bind(emitter);
  promise.removeListener = emitter.removeListener.bind(emitter);
  promise.removeAllListeners = emitter.removeAllListeners.bind(emitter);
  promise.setMaxListeners = emitter.setMaxListeners.bind(emitter);
  promise.listeners = emitter.listeners.bind(emitter);
  promise.emit = emitter.emit.bind(emitter);
  return promise;
};

exports.MD5 = exports.toPromise(_dereq_('./deps/md5'));

}).call(this,_dereq_("/Users/nolan/workspace/pouchdb/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./deps/ajax":8,"./deps/blob":9,"./deps/buffer":26,"./deps/collections":10,"./deps/errors":11,"./deps/md5":12,"./deps/uuid":14,"./merge":18,"/Users/nolan/workspace/pouchdb/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js":28,"argsarray":25,"bluebird":33,"events":27,"inherits":29,"pouchdb-extend":48}],24:[function(_dereq_,module,exports){
module.exports = "3.0.6";

},{}],25:[function(_dereq_,module,exports){
'use strict';

module.exports = argsArray;

function argsArray(fun) {
  return function () {
    var len = arguments.length;
    if (len) {
      var args = [];
      var i = -1;
      while (++i < len) {
        args[i] = arguments[i];
      }
      return fun.call(this, args);
    } else {
      return fun.call(this, []);
    }
  };
}
},{}],26:[function(_dereq_,module,exports){

},{}],27:[function(_dereq_,module,exports){
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

function EventEmitter() {
  this._events = this._events || {};
  this._maxListeners = this._maxListeners || undefined;
}
module.exports = EventEmitter;

// Backwards-compat with node 0.10.x
EventEmitter.EventEmitter = EventEmitter;

EventEmitter.prototype._events = undefined;
EventEmitter.prototype._maxListeners = undefined;

// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
EventEmitter.defaultMaxListeners = 10;

// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
EventEmitter.prototype.setMaxListeners = function(n) {
  if (!isNumber(n) || n < 0 || isNaN(n))
    throw TypeError('n must be a positive number');
  this._maxListeners = n;
  return this;
};

EventEmitter.prototype.emit = function(type) {
  var er, handler, len, args, i, listeners;

  if (!this._events)
    this._events = {};

  // If there is no 'error' event listener then throw.
  if (type === 'error') {
    if (!this._events.error ||
        (isObject(this._events.error) && !this._events.error.length)) {
      er = arguments[1];
      if (er instanceof Error) {
        throw er; // Unhandled 'error' event
      }
      throw TypeError('Uncaught, unspecified "error" event.');
    }
  }

  handler = this._events[type];

  if (isUndefined(handler))
    return false;

  if (isFunction(handler)) {
    switch (arguments.length) {
      // fast cases
      case 1:
        handler.call(this);
        break;
      case 2:
        handler.call(this, arguments[1]);
        break;
      case 3:
        handler.call(this, arguments[1], arguments[2]);
        break;
      // slower
      default:
        len = arguments.length;
        args = new Array(len - 1);
        for (i = 1; i < len; i++)
          args[i - 1] = arguments[i];
        handler.apply(this, args);
    }
  } else if (isObject(handler)) {
    len = arguments.length;
    args = new Array(len - 1);
    for (i = 1; i < len; i++)
      args[i - 1] = arguments[i];

    listeners = handler.slice();
    len = listeners.length;
    for (i = 0; i < len; i++)
      listeners[i].apply(this, args);
  }

  return true;
};

EventEmitter.prototype.addListener = function(type, listener) {
  var m;

  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  if (!this._events)
    this._events = {};

  // To avoid recursion in the case that type === "newListener"! Before
  // adding it to the listeners, first emit "newListener".
  if (this._events.newListener)
    this.emit('newListener', type,
              isFunction(listener.listener) ?
              listener.listener : listener);

  if (!this._events[type])
    // Optimize the case of one listener. Don't need the extra array object.
    this._events[type] = listener;
  else if (isObject(this._events[type]))
    // If we've already got an array, just append.
    this._events[type].push(listener);
  else
    // Adding the second element, need to change to array.
    this._events[type] = [this._events[type], listener];

  // Check for listener leak
  if (isObject(this._events[type]) && !this._events[type].warned) {
    var m;
    if (!isUndefined(this._maxListeners)) {
      m = this._maxListeners;
    } else {
      m = EventEmitter.defaultMaxListeners;
    }

    if (m && m > 0 && this._events[type].length > m) {
      this._events[type].warned = true;
      console.error('(node) warning: possible EventEmitter memory ' +
                    'leak detected. %d listeners added. ' +
                    'Use emitter.setMaxListeners() to increase limit.',
                    this._events[type].length);
      if (typeof console.trace === 'function') {
        // not supported in IE 10
        console.trace();
      }
    }
  }

  return this;
};

EventEmitter.prototype.on = EventEmitter.prototype.addListener;

EventEmitter.prototype.once = function(type, listener) {
  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  var fired = false;

  function g() {
    this.removeListener(type, g);

    if (!fired) {
      fired = true;
      listener.apply(this, arguments);
    }
  }

  g.listener = listener;
  this.on(type, g);

  return this;
};

// emits a 'removeListener' event iff the listener was removed
EventEmitter.prototype.removeListener = function(type, listener) {
  var list, position, length, i;

  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  if (!this._events || !this._events[type])
    return this;

  list = this._events[type];
  length = list.length;
  position = -1;

  if (list === listener ||
      (isFunction(list.listener) && list.listener === listener)) {
    delete this._events[type];
    if (this._events.removeListener)
      this.emit('removeListener', type, listener);

  } else if (isObject(list)) {
    for (i = length; i-- > 0;) {
      if (list[i] === listener ||
          (list[i].listener && list[i].listener === listener)) {
        position = i;
        break;
      }
    }

    if (position < 0)
      return this;

    if (list.length === 1) {
      list.length = 0;
      delete this._events[type];
    } else {
      list.splice(position, 1);
    }

    if (this._events.removeListener)
      this.emit('removeListener', type, listener);
  }

  return this;
};

EventEmitter.prototype.removeAllListeners = function(type) {
  var key, listeners;

  if (!this._events)
    return this;

  // not listening for removeListener, no need to emit
  if (!this._events.removeListener) {
    if (arguments.length === 0)
      this._events = {};
    else if (this._events[type])
      delete this._events[type];
    return this;
  }

  // emit removeListener for all listeners on all events
  if (arguments.length === 0) {
    for (key in this._events) {
      if (key === 'removeListener') continue;
      this.removeAllListeners(key);
    }
    this.removeAllListeners('removeListener');
    this._events = {};
    return this;
  }

  listeners = this._events[type];

  if (isFunction(listeners)) {
    this.removeListener(type, listeners);
  } else {
    // LIFO order
    while (listeners.length)
      this.removeListener(type, listeners[listeners.length - 1]);
  }
  delete this._events[type];

  return this;
};

EventEmitter.prototype.listeners = function(type) {
  var ret;
  if (!this._events || !this._events[type])
    ret = [];
  else if (isFunction(this._events[type]))
    ret = [this._events[type]];
  else
    ret = this._events[type].slice();
  return ret;
};

EventEmitter.listenerCount = function(emitter, type) {
  var ret;
  if (!emitter._events || !emitter._events[type])
    ret = 0;
  else if (isFunction(emitter._events[type]))
    ret = 1;
  else
    ret = emitter._events[type].length;
  return ret;
};

function isFunction(arg) {
  return typeof arg === 'function';
}

function isNumber(arg) {
  return typeof arg === 'number';
}

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}

function isUndefined(arg) {
  return arg === void 0;
}

},{}],28:[function(_dereq_,module,exports){
// shim for using process in browser

var process = module.exports = {};

process.nextTick = (function () {
    var canSetImmediate = typeof window !== 'undefined'
    && window.setImmediate;
    var canPost = typeof window !== 'undefined'
    && window.postMessage && window.addEventListener
    ;

    if (canSetImmediate) {
        return function (f) { return window.setImmediate(f) };
    }

    if (canPost) {
        var queue = [];
        window.addEventListener('message', function (ev) {
            var source = ev.source;
            if ((source === window || source === null) && ev.data === 'process-tick') {
                ev.stopPropagation();
                if (queue.length > 0) {
                    var fn = queue.shift();
                    fn();
                }
            }
        }, true);

        return function nextTick(fn) {
            queue.push(fn);
            window.postMessage('process-tick', '*');
        };
    }

    return function nextTick(fn) {
        setTimeout(fn, 0);
    };
})();

process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];

process.binding = function (name) {
    throw new Error('process.binding is not supported');
}

// TODO(shtylman)
process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};

},{}],29:[function(_dereq_,module,exports){
if (typeof Object.create === 'function') {
  // implementation from standard node.js 'util' module
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    ctor.prototype = Object.create(superCtor.prototype, {
      constructor: {
        value: ctor,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
  };
} else {
  // old school shim for old browsers
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    var TempCtor = function () {}
    TempCtor.prototype = superCtor.prototype
    ctor.prototype = new TempCtor()
    ctor.prototype.constructor = ctor
  }
}

},{}],30:[function(_dereq_,module,exports){
'use strict';

module.exports = INTERNAL;

function INTERNAL() {}
},{}],31:[function(_dereq_,module,exports){
'use strict';
var Promise = _dereq_('./promise');
var reject = _dereq_('./reject');
var resolve = _dereq_('./resolve');
var INTERNAL = _dereq_('./INTERNAL');
var handlers = _dereq_('./handlers');
module.exports = all;
function all(iterable) {
  if (Object.prototype.toString.call(iterable) !== '[object Array]') {
    return reject(new TypeError('must be an array'));
  }

  var len = iterable.length;
  var called = false;
  if (!len) {
    return resolve([]);
  }

  var values = new Array(len);
  var resolved = 0;
  var i = -1;
  var promise = new Promise(INTERNAL);
  
  while (++i < len) {
    allResolver(iterable[i], i);
  }
  return promise;
  function allResolver(value, i) {
    resolve(value).then(resolveFromAll, function (error) {
      if (!called) {
        called = true;
        handlers.reject(promise, error);
      }
    });
    function resolveFromAll(outValue) {
      values[i] = outValue;
      if (++resolved === len & !called) {
        called = true;
        handlers.resolve(promise, values);
      }
    }
  }
}
},{"./INTERNAL":30,"./handlers":32,"./promise":34,"./reject":37,"./resolve":38}],32:[function(_dereq_,module,exports){
'use strict';
var tryCatch = _dereq_('./tryCatch');
var resolveThenable = _dereq_('./resolveThenable');
var states = _dereq_('./states');

exports.resolve = function (self, value) {
  var result = tryCatch(getThen, value);
  if (result.status === 'error') {
    return exports.reject(self, result.value);
  }
  var thenable = result.value;

  if (thenable) {
    resolveThenable.safely(self, thenable);
  } else {
    self.state = states.FULFILLED;
    self.outcome = value;
    var i = -1;
    var len = self.queue.length;
    while (++i < len) {
      self.queue[i].callFulfilled(value);
    }
  }
  return self;
};
exports.reject = function (self, error) {
  self.state = states.REJECTED;
  self.outcome = error;
  var i = -1;
  var len = self.queue.length;
  while (++i < len) {
    self.queue[i].callRejected(error);
  }
  return self;
};

function getThen(obj) {
  // Make sure we only access the accessor once as required by the spec
  var then = obj && obj.then;
  if (obj && typeof obj === 'object' && typeof then === 'function') {
    return function appyThen() {
      then.apply(obj, arguments);
    };
  }
}
},{"./resolveThenable":39,"./states":40,"./tryCatch":41}],33:[function(_dereq_,module,exports){
module.exports = exports = _dereq_('./promise');

exports.resolve = _dereq_('./resolve');
exports.reject = _dereq_('./reject');
exports.all = _dereq_('./all');
exports.race = _dereq_('./race');
},{"./all":31,"./promise":34,"./race":36,"./reject":37,"./resolve":38}],34:[function(_dereq_,module,exports){
'use strict';

var unwrap = _dereq_('./unwrap');
var INTERNAL = _dereq_('./INTERNAL');
var resolveThenable = _dereq_('./resolveThenable');
var states = _dereq_('./states');
var QueueItem = _dereq_('./queueItem');

module.exports = Promise;
function Promise(resolver) {
  if (!(this instanceof Promise)) {
    return new Promise(resolver);
  }
  if (typeof resolver !== 'function') {
    throw new TypeError('reslover must be a function');
  }
  this.state = states.PENDING;
  this.queue = [];
  this.outcome = void 0;
  if (resolver !== INTERNAL) {
    resolveThenable.safely(this, resolver);
  }
}

Promise.prototype['catch'] = function (onRejected) {
  return this.then(null, onRejected);
};
Promise.prototype.then = function (onFulfilled, onRejected) {
  if (typeof onFulfilled !== 'function' && this.state === states.FULFILLED ||
    typeof onRejected !== 'function' && this.state === states.REJECTED) {
    return this;
  }
  var promise = new Promise(INTERNAL);

  
  if (this.state !== states.PENDING) {
    var resolver = this.state === states.FULFILLED ? onFulfilled: onRejected;
    unwrap(promise, resolver, this.outcome);
  } else {
    this.queue.push(new QueueItem(promise, onFulfilled, onRejected));
  }

  return promise;
};

},{"./INTERNAL":30,"./queueItem":35,"./resolveThenable":39,"./states":40,"./unwrap":42}],35:[function(_dereq_,module,exports){
'use strict';
var handlers = _dereq_('./handlers');
var unwrap = _dereq_('./unwrap');

module.exports = QueueItem;
function QueueItem(promise, onFulfilled, onRejected) {
  this.promise = promise;
  if (typeof onFulfilled === 'function') {
    this.onFulfilled = onFulfilled;
    this.callFulfilled = this.otherCallFulfilled;
  }
  if (typeof onRejected === 'function') {
    this.onRejected = onRejected;
    this.callRejected = this.otherCallRejected;
  }
}
QueueItem.prototype.callFulfilled = function (value) {
  handlers.resolve(this.promise, value);
};
QueueItem.prototype.otherCallFulfilled = function (value) {
  unwrap(this.promise, this.onFulfilled, value);
};
QueueItem.prototype.callRejected = function (value) {
  handlers.reject(this.promise, value);
};
QueueItem.prototype.otherCallRejected = function (value) {
  unwrap(this.promise, this.onRejected, value);
};
},{"./handlers":32,"./unwrap":42}],36:[function(_dereq_,module,exports){
'use strict';
var Promise = _dereq_('./promise');
var reject = _dereq_('./reject');
var resolve = _dereq_('./resolve');
var INTERNAL = _dereq_('./INTERNAL');
var handlers = _dereq_('./handlers');
module.exports = race;
function race(iterable) {
  if (Object.prototype.toString.call(iterable) !== '[object Array]') {
    return reject(new TypeError('must be an array'));
  }

  var len = iterable.length;
  var called = false;
  if (!len) {
    return resolve([]);
  }

  var resolved = 0;
  var i = -1;
  var promise = new Promise(INTERNAL);
  
  while (++i < len) {
    resolver(iterable[i]);
  }
  return promise;
  function resolver(value) {
    resolve(value).then(function (response) {
      if (!called) {
        called = true;
        handlers.resolve(promise, response);
      }
    }, function (error) {
      if (!called) {
        called = true;
        handlers.reject(promise, error);
      }
    });
  }
}
},{"./INTERNAL":30,"./handlers":32,"./promise":34,"./reject":37,"./resolve":38}],37:[function(_dereq_,module,exports){
'use strict';

var Promise = _dereq_('./promise');
var INTERNAL = _dereq_('./INTERNAL');
var handlers = _dereq_('./handlers');
module.exports = reject;

function reject(reason) {
	var promise = new Promise(INTERNAL);
	return handlers.reject(promise, reason);
}
},{"./INTERNAL":30,"./handlers":32,"./promise":34}],38:[function(_dereq_,module,exports){
'use strict';

var Promise = _dereq_('./promise');
var INTERNAL = _dereq_('./INTERNAL');
var handlers = _dereq_('./handlers');
module.exports = resolve;

var FALSE = handlers.resolve(new Promise(INTERNAL), false);
var NULL = handlers.resolve(new Promise(INTERNAL), null);
var UNDEFINED = handlers.resolve(new Promise(INTERNAL), void 0);
var ZERO = handlers.resolve(new Promise(INTERNAL), 0);
var EMPTYSTRING = handlers.resolve(new Promise(INTERNAL), '');

function resolve(value) {
  if (value) {
    if (value instanceof Promise) {
      return value;
    }
    return handlers.resolve(new Promise(INTERNAL), value);
  }
  var valueType = typeof value;
  switch (valueType) {
    case 'boolean':
      return FALSE;
    case 'undefined':
      return UNDEFINED;
    case 'object':
      return NULL;
    case 'number':
      return ZERO;
    case 'string':
      return EMPTYSTRING;
  }
}
},{"./INTERNAL":30,"./handlers":32,"./promise":34}],39:[function(_dereq_,module,exports){
'use strict';
var handlers = _dereq_('./handlers');
var tryCatch = _dereq_('./tryCatch');
function safelyResolveThenable(self, thenable) {
  // Either fulfill, reject or reject with error
  var called = false;
  function onError(value) {
    if (called) {
      return;
    }
    called = true;
    handlers.reject(self, value);
  }

  function onSuccess(value) {
    if (called) {
      return;
    }
    called = true;
    handlers.resolve(self, value);
  }

  function tryToUnwrap() {
    thenable(onSuccess, onError);
  }
  
  var result = tryCatch(tryToUnwrap);
  if (result.status === 'error') {
    onError(result.value);
  }
}
exports.safely = safelyResolveThenable;
},{"./handlers":32,"./tryCatch":41}],40:[function(_dereq_,module,exports){
// Lazy man's symbols for states

exports.REJECTED = ['REJECTED'];
exports.FULFILLED = ['FULFILLED'];
exports.PENDING = ['PENDING'];
},{}],41:[function(_dereq_,module,exports){
'use strict';

module.exports = tryCatch;

function tryCatch(func, value) {
  var out = {};
  try {
    out.value = func(value);
    out.status = 'success';
  } catch (e) {
    out.status = 'error';
    out.value = e;
  }
  return out;
}
},{}],42:[function(_dereq_,module,exports){
'use strict';

var immediate = _dereq_('immediate');
var handlers = _dereq_('./handlers');
module.exports = unwrap;

function unwrap(promise, func, value) {
  immediate(function () {
    var returnValue;
    try {
      returnValue = func(value);
    } catch (e) {
      return handlers.reject(promise, e);
    }
    if (returnValue === promise) {
      handlers.reject(promise, new TypeError('Cannot resolve promise with itself'));
    } else {
      handlers.resolve(promise, returnValue);
    }
  });
}
},{"./handlers":32,"immediate":43}],43:[function(_dereq_,module,exports){
'use strict';
var types = [
  _dereq_('./nextTick'),
  _dereq_('./mutation.js'),
  _dereq_('./messageChannel'),
  _dereq_('./stateChange'),
  _dereq_('./timeout')
];
var draining;
var queue = [];
function drainQueue() {
  draining = true;
  var i, oldQueue;
  var len = queue.length;
  while (len) {
    oldQueue = queue;
    queue = [];
    i = -1;
    while (++i < len) {
      oldQueue[i]();
    }
    len = queue.length;
  }
  draining = false;
}
var scheduleDrain;
var i = -1;
var len = types.length;
while (++ i < len) {
  if (types[i] && types[i].test && types[i].test()) {
    scheduleDrain = types[i].install(drainQueue);
    break;
  }
}
module.exports = immediate;
function immediate(task) {
  if (queue.push(task) === 1 && !draining) {
    scheduleDrain();
  }
}
},{"./messageChannel":44,"./mutation.js":45,"./nextTick":26,"./stateChange":46,"./timeout":47}],44:[function(_dereq_,module,exports){
(function (global){
'use strict';

exports.test = function () {
  if (global.setImmediate) {
    // we can only get here in IE10
    // which doesn't handel postMessage well
    return false;
  }
  return typeof global.MessageChannel !== 'undefined';
};

exports.install = function (func) {
  var channel = new global.MessageChannel();
  channel.port1.onmessage = func;
  return function () {
    channel.port2.postMessage(0);
  };
};
}).call(this,typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],45:[function(_dereq_,module,exports){
(function (global){
'use strict';
//based off rsvp https://github.com/tildeio/rsvp.js
//license https://github.com/tildeio/rsvp.js/blob/master/LICENSE
//https://github.com/tildeio/rsvp.js/blob/master/lib/rsvp/asap.js

var Mutation = global.MutationObserver || global.WebKitMutationObserver;

exports.test = function () {
  return Mutation;
};

exports.install = function (handle) {
  var called = 0;
  var observer = new Mutation(handle);
  var element = global.document.createTextNode('');
  observer.observe(element, {
    characterData: true
  });
  return function () {
    element.data = (called = ++called % 2);
  };
};
}).call(this,typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],46:[function(_dereq_,module,exports){
(function (global){
'use strict';

exports.test = function () {
  return 'document' in global && 'onreadystatechange' in global.document.createElement('script');
};

exports.install = function (handle) {
  return function () {

    // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
    // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
    var scriptEl = global.document.createElement('script');
    scriptEl.onreadystatechange = function () {
      handle();

      scriptEl.onreadystatechange = null;
      scriptEl.parentNode.removeChild(scriptEl);
      scriptEl = null;
    };
    global.document.documentElement.appendChild(scriptEl);

    return handle;
  };
};
}).call(this,typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],47:[function(_dereq_,module,exports){
'use strict';
exports.test = function () {
  return true;
};

exports.install = function (t) {
  return function () {
    setTimeout(t, 0);
  };
};
},{}],48:[function(_dereq_,module,exports){
"use strict";

// Extends method
// (taken from http://code.jquery.com/jquery-1.9.0.js)
// Populate the class2type map
var class2type = {};

var types = [
  "Boolean", "Number", "String", "Function", "Array",
  "Date", "RegExp", "Object", "Error"
];
for (var i = 0; i < types.length; i++) {
  var typename = types[i];
  class2type["[object " + typename + "]"] = typename.toLowerCase();
}

var core_toString = class2type.toString;
var core_hasOwn = class2type.hasOwnProperty;

function type(obj) {
  if (obj === null) {
    return String(obj);
  }
  return typeof obj === "object" || typeof obj === "function" ?
    class2type[core_toString.call(obj)] || "object" :
    typeof obj;
}

function isWindow(obj) {
  return obj !== null && obj === obj.window;
}

function isPlainObject(obj) {
  // Must be an Object.
  // Because of IE, we also have to check the presence of
  // the constructor property.
  // Make sure that DOM nodes and window objects don't pass through, as well
  if (!obj || type(obj) !== "object" || obj.nodeType || isWindow(obj)) {
    return false;
  }

  try {
    // Not own constructor property must be Object
    if (obj.constructor &&
      !core_hasOwn.call(obj, "constructor") &&
      !core_hasOwn.call(obj.constructor.prototype, "isPrototypeOf")) {
      return false;
    }
  } catch ( e ) {
    // IE8,9 Will throw exceptions on certain host objects #9897
    return false;
  }

  // Own properties are enumerated firstly, so to speed up,
  // if last one is own, then all properties are own.
  var key;
  for (key in obj) {}

  return key === undefined || core_hasOwn.call(obj, key);
}


function isFunction(obj) {
  return type(obj) === "function";
}

var isArray = Array.isArray || function (obj) {
  return type(obj) === "array";
};

function extend() {
  // originally extend() was recursive, but this ended up giving us
  // "call stack exceeded", so it's been unrolled to use a literal stack
  // (see https://github.com/pouchdb/pouchdb/issues/2543)
  var stack = [];
  var i = -1;
  var len = arguments.length;
  var args = new Array(len);
  while (++i < len) {
    args[i] = arguments[i];
  }
  var container = {};
  stack.push({args: args, result: {container: container, key: 'key'}});
  var next;
  while ((next = stack.pop())) {
    extendInner(stack, next.args, next.result);
  }
  return container.key;
}

function extendInner(stack, args, result) {
  var options, name, src, copy, copyIsArray, clone,
    target = args[0] || {},
    i = 1,
    length = args.length,
    deep = false,
    numericStringRegex = /\d+/,
    optionsIsArray;

  // Handle a deep copy situation
  if (typeof target === "boolean") {
    deep = target;
    target = args[1] || {};
    // skip the boolean and the target
    i = 2;
  }

  // Handle case when target is a string or something (possible in deep copy)
  if (typeof target !== "object" && !isFunction(target)) {
    target = {};
  }

  // extend jQuery itself if only one argument is passed
  if (length === i) {
    /* jshint validthis: true */
    target = this;
    --i;
  }

  for (; i < length; i++) {
    // Only deal with non-null/undefined values
    if ((options = args[i]) != null) {
      optionsIsArray = isArray(options);
      // Extend the base object
      for (name in options) {
        //if (options.hasOwnProperty(name)) {
        if (!(name in Object.prototype)) {
          if (optionsIsArray && !numericStringRegex.test(name)) {
            continue;
          }

          src = target[name];
          copy = options[name];

          // Prevent never-ending loop
          if (target === copy) {
            continue;
          }

          // Recurse if we're merging plain objects or arrays
          if (deep && copy && (isPlainObject(copy) ||
              (copyIsArray = isArray(copy)))) {
            if (copyIsArray) {
              copyIsArray = false;
              clone = src && isArray(src) ? src : [];

            } else {
              clone = src && isPlainObject(src) ? src : {};
            }

            // Never move original objects, clone them
            stack.push({
              args: [deep, clone, copy],
              result: {
                container: target,
                key: name
              }
            });

          // Don't bring in undefined values
          } else if (copy !== undefined) {
            if (!(isArray(options) && isFunction(copy))) {
              target[name] = copy;
            }
          }
        }
      }
    }
  }

  // "Return" the modified object by setting the key
  // on the given container
  result.container[result.key] = target;
}


module.exports = extend;



},{}],49:[function(_dereq_,module,exports){
'use strict';

var upsert = _dereq_('./upsert');
var utils = _dereq_('./utils');
var Promise = utils.Promise;

module.exports = function (opts) {
  var sourceDB = opts.db;
  var viewName = opts.viewName;
  var mapFun = opts.map;
  var reduceFun = opts.reduce;
  var temporary = opts.temporary;

  // the "undefined" part is for backwards compatibility
  var viewSignature = mapFun.toString() + (reduceFun && reduceFun.toString()) +
    'undefined';

  if (!temporary && sourceDB._cachedViews) {
    var cachedView = sourceDB._cachedViews[viewSignature];
    if (cachedView) {
      return Promise.resolve(cachedView);
    }
  }

  return sourceDB.info().then(function (info) {

    var depDbName = info.db_name + '-mrview-' +
      (temporary ? 'temp' : utils.MD5(viewSignature));

    // save the view name in the source PouchDB so it can be cleaned up if necessary
    // (e.g. when the _design doc is deleted, remove all associated view data)
    function diffFunction(doc) {
      doc.views = doc.views || {};
      var fullViewName = viewName;
      if (fullViewName.indexOf('/') === -1) {
        fullViewName = viewName + '/' + viewName;
      }
      var depDbs = doc.views[fullViewName] = doc.views[fullViewName] || {};
      /* istanbul ignore if */
      if (depDbs[depDbName]) {
        return; // no update necessary
      }
      depDbs[depDbName] = true;
      return doc;
    }
    return upsert(sourceDB, '_local/mrviews', diffFunction).then(function () {
      return sourceDB.registerDependentDatabase(depDbName).then(function (res) {
        var db = res.db;
        db.auto_compaction = true;
        var view = {
          name: depDbName,
          db: db, 
          sourceDB: sourceDB,
          adapter: sourceDB.adapter,
          mapFun: mapFun,
          reduceFun: reduceFun
        };
        return view.db.get('_local/lastSeq')["catch"](function (err) {
          /* istanbul ignore if */
          if (err.status !== 404) {
            throw err;
          }
        }).then(function (lastSeqDoc) {
          view.seq = lastSeqDoc ? lastSeqDoc.seq : 0;
          if (!temporary) {
            sourceDB._cachedViews = sourceDB._cachedViews || {};
            sourceDB._cachedViews[viewSignature] = view;
            view.db.on('destroyed', function () {
              delete sourceDB._cachedViews[viewSignature];
            });
          }
          return view;
        });
      });
    });
  });
};

},{"./upsert":55,"./utils":56}],50:[function(_dereq_,module,exports){
'use strict';

module.exports = function (func, emit, sum, log, isArray, toJSON) {
  /*jshint evil:true,unused:false */
  return eval("'use strict'; (" + func.replace(/;\s*$/, "") + ");");
};

},{}],51:[function(_dereq_,module,exports){
(function (process){
'use strict';

var pouchCollate = _dereq_('pouchdb-collate');
var TaskQueue = _dereq_('./taskqueue');
var collate = pouchCollate.collate;
var toIndexableString = pouchCollate.toIndexableString;
var normalizeKey = pouchCollate.normalizeKey;
var createView = _dereq_('./create-view');
var evalFunc = _dereq_('./evalfunc');
var log; 
/* istanbul ignore else */
if ((typeof console !== 'undefined') && (typeof console.log === 'function')) {
  log = Function.prototype.bind.call(console.log, console);
} else {
  log = function () {};
}
var utils = _dereq_('./utils');
var Promise = utils.Promise;
var mainQueue = new TaskQueue();
var tempViewQueue = new TaskQueue();
var CHANGES_BATCH_SIZE = 50;

function parseViewName(name) {
  // can be either 'ddocname/viewname' or just 'viewname'
  // (where the ddoc name is the same)
  return name.indexOf('/') === -1 ? [name, name] : name.split('/');
}

function tryCode(db, fun, args) {
  // emit an event if there was an error thrown by a map/reduce function.
  // putting try/catches in a single function also avoids deoptimizations.
  try {
    return {
      output : fun.apply(null, args)
    };
  } catch (e) {
    db.emit('error', e);
    return {error : e};
  }
}

function sortByKeyThenValue(x, y) {
  var keyCompare = collate(x.key, y.key);
  return keyCompare !== 0 ? keyCompare : collate(x.value, y.value);
}

function sliceResults(results, limit, skip) {
  skip = skip || 0;
  if (typeof limit === 'number') {
    return results.slice(skip, limit + skip);
  } else if (skip > 0) {
    return results.slice(skip);
  }
  return results;
}

function createBuiltInError(name) {
  var error = new Error('builtin ' + name +
    ' function requires map values to be numbers' +
    ' or number arrays');
  error.name = 'invalid_value';
  error.status = 500;
  return error;
}

function sum(values) {
  var result = 0;
  for (var i = 0, len = values.length; i < len; i++) {
    var num = values[i];
    if (typeof num !== 'number') {
      if (Array.isArray(num)) {
        // lists of numbers are also allowed, sum them separately
        result = typeof result === 'number' ? [result] : result;
        for (var j = 0, jLen = num.length; j < jLen; j++) {
          var jNum = num[j];
          if (typeof jNum !== 'number') {
            throw createBuiltInError('_sum');
          } else if (typeof result[j] === 'undefined') {
            result.push(jNum);
          } else {
            result[j] += jNum;
          }
        }
      } else { // not array/number
        throw createBuiltInError('_sum');
      }
    } else if (typeof result === 'number') {
      result += num;
    } else { // add number to array
      result[0] += num;
    }
  }
  return result;
}

var builtInReduce = {
  _sum: function (keys, values) {
    return sum(values);
  },

  _count: function (keys, values) {
    return values.length;
  },

  _stats: function (keys, values) {
    // no need to implement rereduce=true, because Pouch
    // will never call it
    function sumsqr(values) {
      var _sumsqr = 0;
      for (var i = 0, len = values.length; i < len; i++) {
        var num = values[i];
        _sumsqr += (num * num);
      }
      return _sumsqr;
    }
    return {
      sum     : sum(values),
      min     : Math.min.apply(null, values),
      max     : Math.max.apply(null, values),
      count   : values.length,
      sumsqr : sumsqr(values)
    };
  }
};

function addHttpParam(paramName, opts, params, asJson) {
  // add an http param from opts to params, optionally json-encoded
  var val = opts[paramName];
  if (typeof val !== 'undefined') {
    if (asJson) {
      val = encodeURIComponent(JSON.stringify(val));
    }
    params.push(paramName + '=' + val);
  }
}

function checkQueryParseError(options, fun) {
  var startkeyName = options.descending ? 'endkey' : 'startkey';
  var endkeyName = options.descending ? 'startkey' : 'endkey';

  if (typeof options[startkeyName] !== 'undefined' &&
    typeof options[endkeyName] !== 'undefined' &&
    collate(options[startkeyName], options[endkeyName]) > 0) {
    throw new QueryParseError('No rows can match your key range, reverse your ' +
        'start_key and end_key or set {descending : true}');
  } else if (fun.reduce && options.reduce !== false) {
    if (options.include_docs) {
      throw new QueryParseError('{include_docs:true} is invalid for reduce');
    } else if (options.keys && options.keys.length > 1 &&
        !options.group && !options.group_level) {
      throw new QueryParseError('Multi-key fetches for reduce views must use {group: true}');
    }
  }
  if (options.group_level) {
    if (typeof options.group_level !== 'number') {
      throw new QueryParseError('Invalid value for integer: "' + options.group_level + '"');
    }
    if (options.group_level < 0) {
      throw new QueryParseError('Invalid value for positive integer: ' +
        '"' + options.group_level + '"');
    }
  }
}

function httpQuery(db, fun, opts) {
  // List of parameters to add to the PUT request
  var params = [];
  var body;
  var method = 'GET';

  // If opts.reduce exists and is defined, then add it to the list
  // of parameters.
  // If reduce=false then the results are that of only the map function
  // not the final result of map and reduce.
  addHttpParam('reduce', opts, params);
  addHttpParam('include_docs', opts, params);
  addHttpParam('limit', opts, params);
  addHttpParam('descending', opts, params);
  addHttpParam('group', opts, params);
  addHttpParam('group_level', opts, params);
  addHttpParam('skip', opts, params);
  addHttpParam('stale', opts, params);
  addHttpParam('startkey', opts, params, true);
  addHttpParam('endkey', opts, params, true);
  addHttpParam('inclusive_end', opts, params);
  addHttpParam('key', opts, params, true);

  // Format the list of parameters into a valid URI query string
  params = params.join('&');
  params = params === '' ? '' : '?' + params;

  // If keys are supplied, issue a POST request to circumvent GET query string limits
  // see http://wiki.apache.org/couchdb/HTTP_view_API#Querying_Options
  if (typeof opts.keys !== 'undefined') {
    var MAX_URL_LENGTH = 2000;
    // according to http://stackoverflow.com/a/417184/680742,
    // the de facto URL length limit is 2000 characters

    var keysAsString =
      'keys=' + encodeURIComponent(JSON.stringify(opts.keys));
    if (keysAsString.length + params.length + 1 <= MAX_URL_LENGTH) {
      // If the keys are short enough, do a GET. we do this to work around
      // Safari not understanding 304s on POSTs (see pouchdb/pouchdb#1239)
      params += (params[0] === '?' ? '&' : '?') + keysAsString;
    } else {
      method = 'POST';
      if (typeof fun === 'string') {
        body = JSON.stringify({keys: opts.keys});
      } else { // fun is {map : mapfun}, so append to this
        fun.keys = opts.keys;
      }
    }
  }

  // We are referencing a query defined in the design doc
  if (typeof fun === 'string') {
    var parts = parseViewName(fun);
    return db.request({
      method: method,
      url: '_design/' + parts[0] + '/_view/' + parts[1] + params,
      body: body
    });
  }

  // We are using a temporary view, terrible for performance but good for testing
  body = body || {};
  Object.keys(fun).forEach(function (key) {
    if (Array.isArray(fun[key])) {
      body[key] = fun[key];
    } else {
      body[key] = fun[key].toString();
    }
  });
  return db.request({
    method: 'POST',
    url: '_temp_view' + params,
    body: body
  });
}

function defaultsTo(value) {
  return function (reason) {
    /* istanbul ignore else */
    if (reason.status === 404) {
      return value;
    } else {
      throw reason;
    }
  };
}

// returns a promise for a list of docs to update, based on the input docId.
// we update the metaDoc first (i.e. the doc that points from the sourceDB
// document Id to the ids of the documents in the mrview database), then
// the key/value docs.  that way, if lightning strikes the user's computer
// in the middle of an update, we don't write any docs that we wouldn't
// be able to find later using the metaDoc.
function getDocsToPersist(docId, view, docIdsToEmits) {
  var metaDocId = '_local/doc_' + docId;
  return view.db.get(metaDocId)[
    "catch"](defaultsTo({_id: metaDocId, keys: []}))
    .then(function (metaDoc) {
      return Promise.resolve().then(function () {
        if (metaDoc.keys.length) {
          return view.db.allDocs({
            keys: metaDoc.keys,
            include_docs: true
          });
        }
        return {rows: []}; // no keys, no need for a lookup
      }).then(function (res) {
        var kvDocs = res.rows.map(function (row) {
          return row.doc;
        }).filter(function (row) {
          return row;
        });

        var indexableKeysToKeyValues = docIdsToEmits[docId];
        var oldKeysMap = {};
        kvDocs.forEach(function (kvDoc) {
          oldKeysMap[kvDoc._id] = true;
          kvDoc._deleted = !indexableKeysToKeyValues[kvDoc._id];
          if (!kvDoc._deleted) {
            var keyValue = indexableKeysToKeyValues[kvDoc._id];
            if ('value' in keyValue) {
              kvDoc.value = keyValue.value;
            }
          }
        });

        var newKeys = Object.keys(indexableKeysToKeyValues);
        newKeys.forEach(function (key) {
          if (!oldKeysMap[key]) {
            // new doc
            var kvDoc = {
              _id: key
            };
            var keyValue = indexableKeysToKeyValues[key];
            if ('value' in keyValue) {
              kvDoc.value = keyValue.value;
            }
            kvDocs.push(kvDoc);
          }
        });
        metaDoc.keys = utils.uniq(newKeys.concat(metaDoc.keys));
        kvDocs.splice(0, 0, metaDoc);

        return kvDocs;
      });
    });
}

// updates all emitted key/value docs and metaDocs in the mrview database
// for the given batch of documents from the source database
function saveKeyValues(view, docIdsToEmits, seq) {
  var seqDocId = '_local/lastSeq';
  return view.db.get(seqDocId)[
  "catch"](defaultsTo({_id: seqDocId, seq: 0}))
  .then(function (lastSeqDoc) {
    var docIds = Object.keys(docIdsToEmits);
    return Promise.all(docIds.map(function (docId) {
        return getDocsToPersist(docId, view, docIdsToEmits);
      })).then(function (listOfDocsToPersist) {
        var docsToPersist = [];
        listOfDocsToPersist.forEach(function (docList) {
          docsToPersist = docsToPersist.concat(docList);
        });

        // update the seq doc last, so that if a meteor strikes the user's
        // computer in the middle of an update, we can apply the idempotent
        // batch update operation again
        lastSeqDoc.seq = seq;
        docsToPersist.push(lastSeqDoc);

        return view.db.bulkDocs({docs : docsToPersist});
      });
  });
}

var updateView = utils.sequentialize(mainQueue, function (view) {
  // bind the emit function once
  var mapResults;
  var doc;

  function emit(key, value) {
    var output = { id: doc._id, key: normalizeKey(key) };
    // Don't explicitly store the value unless it's defined and non-null.
    // This saves on storage space, because often people don't use it.
    if (typeof value !== 'undefined' && value !== null) {
      output.value = normalizeKey(value);
    }
    mapResults.push(output);
  }

  var mapFun;
  // for temp_views one can use emit(doc, emit), see #38
  if (typeof view.mapFun === "function" && view.mapFun.length === 2) {
    var origMap = view.mapFun;
    mapFun = function (doc) {
      return origMap(doc, emit);
    };
  } else {
    mapFun = evalFunc(view.mapFun.toString(), emit, sum, log, Array.isArray, JSON.parse);
  }

  var currentSeq = view.seq || 0;

  function processChange(docIdsToEmits, seq) {
    return function () {
      return saveKeyValues(view, docIdsToEmits, seq);
    };
  }
  var queue = new TaskQueue();
  // TODO(neojski): https://github.com/daleharvey/pouchdb/issues/1521

  return new Promise(function (resolve, reject) {

    function complete() {
      queue.finish().then(function () {
        view.seq = currentSeq;
        resolve();
      });
    }

    function processNextBatch() {
      view.sourceDB.changes({
        conflicts: true,
        include_docs: true,
        since : currentSeq,
        limit : CHANGES_BATCH_SIZE
      }).on('complete', function (response) {
        var results = response.results;
        if (!results.length) {
          return complete();
        }
        var docIdsToEmits = {};
        for (var i = 0, l = results.length; i < l; i++) {
          var change = results[i];
          if (change.doc._id[0] !== '_') {
            mapResults = [];
            doc = change.doc;

            if (!doc._deleted) {
              tryCode(view.sourceDB, mapFun, [doc]);
            }
            mapResults.sort(sortByKeyThenValue);

            var indexableKeysToKeyValues = {};
            var lastKey;
            for (var j = 0, jl = mapResults.length; j < jl; j++) {
              var obj = mapResults[j];
              var complexKey = [obj.key, obj.id];
              if (obj.key === lastKey) {
                complexKey.push(j); // dup key+id, so make it unique
              }
              var indexableKey = toIndexableString(complexKey);
              indexableKeysToKeyValues[indexableKey] = obj;
              lastKey = obj.key;
            }
            docIdsToEmits[change.doc._id] = indexableKeysToKeyValues;
          }
          currentSeq = change.seq;
        }
        queue.add(processChange(docIdsToEmits, currentSeq));
        if (results.length < CHANGES_BATCH_SIZE) {
          return complete();
        }
        return processNextBatch();
      }).on('error', onError);
      /* istanbul ignore next */
      function onError(err) {
        reject(err);
      }
    }
    processNextBatch();
  });
});

function reduceView(view, results, options) {
  if (options.group_level === 0) {
    delete options.group_level;
  }

  var shouldGroup = options.group || options.group_level;

  var reduceFun;
  if (builtInReduce[view.reduceFun]) {
    reduceFun = builtInReduce[view.reduceFun];
  } else {
    reduceFun = evalFunc(
      view.reduceFun.toString(), null, sum, log, Array.isArray, JSON.parse);
  }

  var groups = [];
  var lvl = options.group_level;
  results.forEach(function (e) {
    var last = groups[groups.length - 1];
    var key = shouldGroup ? e.key : null;

    // only set group_level for array keys
    if (shouldGroup && Array.isArray(key) && typeof lvl === 'number') {
      key = key.length > lvl ? key.slice(0, lvl) : key;
    }

    if (last && collate(last.key[0][0], key) === 0) {
      last.key.push([key, e.id]);
      last.value.push(e.value);
      return;
    }
    groups.push({key: [
      [key, e.id]
    ], value: [e.value]});
  });
  for (var i = 0, len = groups.length; i < len; i++) {
    var e = groups[i];
    var reduceTry = tryCode(view.sourceDB, reduceFun, [e.key, e.value, false]);
    // CouchDB typically just sets the value to null if reduce errors out
    e.value = reduceTry.error ? null : reduceTry.output;
    e.key = e.key[0][0];
  }
  // no total_rows/offset when reducing
  return {rows: sliceResults(groups, options.limit, options.skip)};
}

var queryView = utils.sequentialize(mainQueue, function (view, opts) {
  var totalRows;
  var shouldReduce = view.reduceFun && opts.reduce !== false;
  var skip = opts.skip || 0;
  if (typeof opts.keys !== 'undefined' && !opts.keys.length) {
    // equivalent query
    opts.limit = 0;
    delete opts.keys;
  }

  function fetchFromView(viewOpts) {
    viewOpts.include_docs = true;
    return view.db.allDocs(viewOpts).then(function (res) {
      totalRows = res.total_rows;
      return res.rows.map(function (result) {

        // implicit migration - in older versions of PouchDB,
        // we explicitly stored the doc as {id: ..., key: ..., value: ...}
        // this is tested in a migration test
        /* istanbul ignore next */
        if ('value' in result.doc && typeof result.doc.value === 'object' &&
            result.doc.value !== null) {
          var keys = Object.keys(result.doc.value).sort();
          // this detection method is not perfect, but it's unlikely the user
          // emitted a value which was an object with these 3 exact keys
          var expectedKeys = ['id', 'key', 'value'];
          if (!(keys < expectedKeys || keys > expectedKeys)) {
            return result.doc.value;
          }
        }

        var parsedKeyAndDocId = pouchCollate.parseIndexableString(result.doc._id);
        return {
          key: parsedKeyAndDocId[0],
          id: parsedKeyAndDocId[1],
          value: ('value' in result.doc ? result.doc.value : null)
        };
      });
    });
  }

  function onMapResultsReady(results) {
    var res;
    if (shouldReduce) {
      res = reduceView(view, results, opts);
    } else {
      res = {
        total_rows: totalRows,
        offset: skip,
        rows: results
      };
    }
    if (opts.include_docs) {
      var getDocsPromises = results.map(function (row) {
        var val = row.value;
        var docId = (val && typeof val === 'object' && val._id) || row.id;
        return view.sourceDB.get(docId).then(function (joinedDoc) {
          row.doc = joinedDoc;
        }, function () {
          // document error = don't join
        });
      });
      return Promise.all(getDocsPromises).then(function () {
        return res;
      });
    } else {
      return res;
    }
  }

  var flatten = function (array) {
    return array.reduce(function (prev, cur) {
      return prev.concat(cur);
    });
  };

  if (typeof opts.keys !== 'undefined') {
    var keys = opts.keys;
    var fetchPromises = keys.map(function (key) {
      var viewOpts = {
        startkey : toIndexableString([key]),
        endkey   : toIndexableString([key, {}])
      };
      return fetchFromView(viewOpts);
    });
    return Promise.all(fetchPromises).then(flatten).then(onMapResultsReady);
  } else { // normal query, no 'keys'
    var viewOpts = {
      descending : opts.descending
    };
    if (typeof opts.startkey !== 'undefined') {
      viewOpts.startkey = opts.descending ?
        toIndexableString([opts.startkey, {}]) :
        toIndexableString([opts.startkey]);
    }
    if (typeof opts.endkey !== 'undefined') {
      var inclusiveEnd = opts.inclusive_end !== false;
      if (opts.descending) {
        inclusiveEnd = !inclusiveEnd;
      }

      viewOpts.endkey = toIndexableString(inclusiveEnd ? [opts.endkey, {}] : [opts.endkey]);
    }
    if (typeof opts.key !== 'undefined') {
      var keyStart = toIndexableString([opts.key]);
      var keyEnd = toIndexableString([opts.key, {}]);
      if (viewOpts.descending) {
        viewOpts.endkey = keyStart;
        viewOpts.startkey = keyEnd;
      } else {
        viewOpts.startkey = keyStart;
        viewOpts.endkey = keyEnd;
      }
    }
    if (!shouldReduce) {
      if (typeof opts.limit === 'number') {
        viewOpts.limit = opts.limit;
      }
      viewOpts.skip = skip;
    }
    return fetchFromView(viewOpts).then(onMapResultsReady);
  }
});

function httpViewCleanup(db) {
  return db.request({
    method: 'POST',
    url: '_view_cleanup'
  });
}

var localViewCleanup = utils.sequentialize(mainQueue, function (db) {
  return db.get('_local/mrviews').then(function (metaDoc) {
    var docsToViews = {};
    Object.keys(metaDoc.views).forEach(function (fullViewName) {
      var parts = parseViewName(fullViewName);
      var designDocName = '_design/' + parts[0];
      var viewName = parts[1];
      docsToViews[designDocName] = docsToViews[designDocName] || {};
      docsToViews[designDocName][viewName] = true;
    });
    var opts = {
      keys : Object.keys(docsToViews),
      include_docs : true
    };
    return db.allDocs(opts).then(function (res) {
      var viewsToStatus = {};
      res.rows.forEach(function (row) {
        var ddocName = row.key.substring(8);
        Object.keys(docsToViews[row.key]).forEach(function (viewName) {
          var fullViewName = ddocName + '/' + viewName;
          /* istanbul ignore if */
          if (!metaDoc.views[fullViewName]) {
            // new format, without slashes, to support PouchDB 2.2.0
            // migration test in pouchdb's browser.migration.js verifies this
            fullViewName = viewName;
          }
          var viewDBNames = Object.keys(metaDoc.views[fullViewName]);
          // design doc deleted, or view function nonexistent
          var statusIsGood = row.doc && row.doc.views && row.doc.views[viewName];
          viewDBNames.forEach(function (viewDBName) {
            viewsToStatus[viewDBName] = viewsToStatus[viewDBName] || statusIsGood;
          });
        });
      });
      var dbsToDelete = Object.keys(viewsToStatus).filter(function (viewDBName) {
        return !viewsToStatus[viewDBName];
      });
      var destroyPromises = dbsToDelete.map(function (viewDBName) {
        return db.constructor.destroy(viewDBName, {adapter : db.adapter});
      });
      return Promise.all(destroyPromises).then(function () {
        return {ok: true};
      });
    });
  }, defaultsTo({ok: true}));
});

exports.viewCleanup = utils.callbackify(function () {
  var db = this;
  if (db.type() === 'http') {
    return httpViewCleanup(db);
  }
  return localViewCleanup(db);
});

function queryPromised(db, fun, opts) {
  if (db.type() === 'http') {
    return httpQuery(db, fun, opts);
  }

  if (typeof fun !== 'string') {
    // temp_view
    checkQueryParseError(opts, fun);

    var createViewOpts = {
      db : db,
      viewName : 'temp_view/temp_view',
      map : fun.map,
      reduce : fun.reduce,
      temporary : true
    };
    tempViewQueue.add(function () {
      return createView(createViewOpts).then(function (view) {
        function cleanup() {
          return view.db.destroy();
        }
        return utils.fin(updateView(view).then(function () {
          return queryView(view, opts);
        }), cleanup);
      });
    });
    return tempViewQueue.finish();
  } else {
    // persistent view
    var fullViewName = fun;
    var parts = parseViewName(fullViewName);
    var designDocName = parts[0];
    var viewName = parts[1];
    return db.get('_design/' + designDocName).then(function (doc) {
      var fun = doc.views && doc.views[viewName];

      if (!fun || typeof fun.map !== 'string') {
        throw new NotFoundError('ddoc ' + designDocName + ' has no view named ' +
          viewName);
      }
      checkQueryParseError(opts, fun);

      var createViewOpts = {
        db : db,
        viewName : fullViewName,
        map : fun.map,
        reduce : fun.reduce
      };
      return createView(createViewOpts).then(function (view) {
        if (opts.stale === 'ok' || opts.stale === 'update_after') {
          if (opts.stale === 'update_after') {
            process.nextTick(function () {
              updateView(view);
            });
          }
          return queryView(view, opts);
        } else { // stale not ok
          return updateView(view).then(function () {
            return queryView(view, opts);
          });
        }
      });
    });
  }
}

exports.query = function (fun, opts, callback) {
  if (typeof opts === 'function') {
    callback = opts;
    opts = {};
  }
  opts = utils.extend(true, {}, opts);

  if (typeof fun === 'function') {
    fun = {map : fun};
  }

  var db = this;
  var promise = Promise.resolve().then(function () {
    return queryPromised(db, fun, opts);
  });
  utils.promisedCallback(promise, callback);
  return promise;
};

function QueryParseError(message) {
  this.status = 400;
  this.name = 'query_parse_error';
  this.message = message;
  this.error = true;
  try {
    Error.captureStackTrace(this, QueryParseError);
  } catch (e) {}
}

utils.inherits(QueryParseError, Error);

function NotFoundError(message) {
  this.status = 404;
  this.name = 'not_found';
  this.message = message;
  this.error = true;
  try {
    Error.captureStackTrace(this, NotFoundError);
  } catch (e) {}
}

utils.inherits(NotFoundError, Error);

}).call(this,_dereq_("/Users/nolan/workspace/pouchdb/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js"))
},{"./create-view":49,"./evalfunc":50,"./taskqueue":54,"./utils":56,"/Users/nolan/workspace/pouchdb/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js":28,"pouchdb-collate":52}],52:[function(_dereq_,module,exports){
'use strict';

var MIN_MAGNITUDE = -324; // verified by -Number.MIN_VALUE
var MAGNITUDE_DIGITS = 3; // ditto
var SEP = ''; // set to '_' for easier debugging 

var utils = _dereq_('./utils');

exports.collate = function (a, b) {

  if (a === b) {
    return 0;
  }

  a = exports.normalizeKey(a);
  b = exports.normalizeKey(b);

  var ai = collationIndex(a);
  var bi = collationIndex(b);
  if ((ai - bi) !== 0) {
    return ai - bi;
  }
  if (a === null) {
    return 0;
  }
  switch (typeof a) {
    case 'number':
      return a - b;
    case 'boolean':
      return a === b ? 0 : (a < b ? -1 : 1);
    case 'string':
      return stringCollate(a, b);
  }
  return Array.isArray(a) ? arrayCollate(a, b) : objectCollate(a, b);
};

// couch considers null/NaN/Infinity/-Infinity === undefined,
// for the purposes of mapreduce indexes. also, dates get stringified.
exports.normalizeKey = function (key) {
  switch (typeof key) {
    case 'undefined':
      return null;
    case 'number':
      if (key === Infinity || key === -Infinity || isNaN(key)) {
        return null;
      }
      return key;
    case 'object':
      var origKey = key;
      if (Array.isArray(key)) {
        var len = key.length;
        key = new Array(len);
        for (var i = 0; i < len; i++) {
          key[i] = exports.normalizeKey(origKey[i]);
        }
      } else if (key instanceof Date) {
        return key.toJSON();
      } else if (key !== null) { // generic object
        key = {};
        for (var k in origKey) {
          if (origKey.hasOwnProperty(k)) {
            var val = origKey[k];
            if (typeof val !== 'undefined') {
              key[k] = exports.normalizeKey(val);
            }
          }
        }
      }
  }
  return key;
};

function indexify(key) {
  if (key !== null) {
    switch (typeof key) {
      case 'boolean':
        return key ? 1 : 0;
      case 'number':
        return numToIndexableString(key);
      case 'string':
        // We've to be sure that key does not contain \u0000
        // Do order-preserving replacements:
        // 0 -> 1, 1
        // 1 -> 1, 2
        // 2 -> 2, 2
        return key
          .replace(/\u0002/g, '\u0002\u0002')
          .replace(/\u0001/g, '\u0001\u0002')
          .replace(/\u0000/g, '\u0001\u0001');
      case 'object':
        var isArray = Array.isArray(key);
        var arr = isArray ? key : Object.keys(key);
        var i = -1;
        var len = arr.length;
        var result = '';
        if (isArray) {
          while (++i < len) {
            result += exports.toIndexableString(arr[i]);
          }
        } else {
          while (++i < len) {
            var objKey = arr[i];
            result += exports.toIndexableString(objKey) +
                exports.toIndexableString(key[objKey]);
          }
        }
        return result;
    }
  }
  return '';
}

// convert the given key to a string that would be appropriate
// for lexical sorting, e.g. within a database, where the
// sorting is the same given by the collate() function.
exports.toIndexableString = function (key) {
  var zero = '\u0000';
  key = exports.normalizeKey(key);
  return collationIndex(key) + SEP + indexify(key) + zero;
};

function parseNumber(str, i) {
  var originalIdx = i;
  var num;
  var zero = str[i] === '1';
  if (zero) {
    num = 0;
    i++;
  } else {
    var neg = str[i] === '0';
    i++;
    var numAsString = '';
    var magAsString = str.substring(i, i + MAGNITUDE_DIGITS);
    var magnitude = parseInt(magAsString, 10) + MIN_MAGNITUDE;
    if (neg) {
      magnitude = -magnitude;
    }
    i += MAGNITUDE_DIGITS;
    while (true) {
      var ch = str[i];
      if (ch === '\u0000') {
        break;
      } else {
        numAsString += ch;
      }
      i++;
    }
    numAsString = numAsString.split('.');
    if (numAsString.length === 1) {
      num = parseInt(numAsString, 10);
    } else {
      num = parseFloat(numAsString[0] + '.' + numAsString[1]);
    }
    if (neg) {
      num = num - 10;
    }
    if (magnitude !== 0) {
      // parseFloat is more reliable than pow due to rounding errors
      // e.g. Number.MAX_VALUE would return Infinity if we did
      // num * Math.pow(10, magnitude);
      num = parseFloat(num + 'e' + magnitude);
    }
  }
  return {num: num, length : i - originalIdx};
}

// move up the stack while parsing
// this function moved outside of parseIndexableString for performance
function pop(stack, metaStack) {
  var obj = stack.pop();

  if (metaStack.length) {
    var lastMetaElement = metaStack[metaStack.length - 1];
    if (obj === lastMetaElement.element) {
      // popping a meta-element, e.g. an object whose value is another object
      metaStack.pop();
      lastMetaElement = metaStack[metaStack.length - 1];
    }
    var element = lastMetaElement.element;
    var lastElementIndex = lastMetaElement.index;
    if (Array.isArray(element)) {
      element.push(obj);
    } else if (lastElementIndex === stack.length - 2) { // obj with key+value
      var key = stack.pop();
      element[key] = obj;
    } else {
      stack.push(obj); // obj with key only
    }
  }
}

exports.parseIndexableString = function (str) {
  var stack = [];
  var metaStack = []; // stack for arrays and objects
  var i = 0;

  while (true) {
    var collationIndex = str[i++];
    if (collationIndex === '\u0000') {
      if (stack.length === 1) {
        return stack.pop();
      } else {
        pop(stack, metaStack);
        continue;
      }
    }
    switch (collationIndex) {
      case '1':
        stack.push(null);
        break;
      case '2':
        stack.push(str[i] === '1');
        i++;
        break;
      case '3':
        var parsedNum = parseNumber(str, i);
        stack.push(parsedNum.num);
        i += parsedNum.length;
        break;
      case '4':
        var parsedStr = '';
        while (true) {
          var ch = str[i];
          if (ch === '\u0000') {
            break;
          }
          parsedStr += ch;
          i++;
        }
        // perform the reverse of the order-preserving replacement
        // algorithm (see above)
        parsedStr = parsedStr.replace(/\u0001\u0001/g, '\u0000')
          .replace(/\u0001\u0002/g, '\u0001')
          .replace(/\u0002\u0002/g, '\u0002');
        stack.push(parsedStr);
        break;
      case '5':
        var arrayElement = { element: [], index: stack.length };
        stack.push(arrayElement.element);
        metaStack.push(arrayElement);
        break;
      case '6':
        var objElement = { element: {}, index: stack.length };
        stack.push(objElement.element);
        metaStack.push(objElement);
        break;
      default:
        throw new Error(
          'bad collationIndex or unexpectedly reached end of input: ' + collationIndex);
    }
  }
};

function arrayCollate(a, b) {
  var len = Math.min(a.length, b.length);
  for (var i = 0; i < len; i++) {
    var sort = exports.collate(a[i], b[i]);
    if (sort !== 0) {
      return sort;
    }
  }
  return (a.length === b.length) ? 0 :
    (a.length > b.length) ? 1 : -1;
}
function stringCollate(a, b) {
  // See: https://github.com/daleharvey/pouchdb/issues/40
  // This is incompatible with the CouchDB implementation, but its the
  // best we can do for now
  return (a === b) ? 0 : ((a > b) ? 1 : -1);
}
function objectCollate(a, b) {
  var ak = Object.keys(a), bk = Object.keys(b);
  var len = Math.min(ak.length, bk.length);
  for (var i = 0; i < len; i++) {
    // First sort the keys
    var sort = exports.collate(ak[i], bk[i]);
    if (sort !== 0) {
      return sort;
    }
    // if the keys are equal sort the values
    sort = exports.collate(a[ak[i]], b[bk[i]]);
    if (sort !== 0) {
      return sort;
    }

  }
  return (ak.length === bk.length) ? 0 :
    (ak.length > bk.length) ? 1 : -1;
}
// The collation is defined by erlangs ordered terms
// the atoms null, true, false come first, then numbers, strings,
// arrays, then objects
// null/undefined/NaN/Infinity/-Infinity are all considered null
function collationIndex(x) {
  var id = ['boolean', 'number', 'string', 'object'];
  var idx = id.indexOf(typeof x);
  //false if -1 otherwise true, but fast!!!!1
  if (~idx) {
    if (x === null) {
      return 1;
    }
    if (Array.isArray(x)) {
      return 5;
    }
    return idx < 3 ? (idx + 2) : (idx + 3);
  }
  if (Array.isArray(x)) {
    return 5;
  }
}

// conversion:
// x yyy zz...zz
// x = 0 for negative, 1 for 0, 2 for positive
// y = exponent (for negative numbers negated) moved so that it's >= 0
// z = mantisse
function numToIndexableString(num) {

  if (num === 0) {
    return '1';
  }

  // convert number to exponential format for easier and
  // more succinct string sorting
  var expFormat = num.toExponential().split(/e\+?/);
  var magnitude = parseInt(expFormat[1], 10);

  var neg = num < 0;

  var result = neg ? '0' : '2';

  // first sort by magnitude
  // it's easier if all magnitudes are positive
  var magForComparison = ((neg ? -magnitude : magnitude) - MIN_MAGNITUDE);
  var magString = utils.padLeft((magForComparison).toString(), '0', MAGNITUDE_DIGITS);

  result += SEP + magString;

  // then sort by the factor
  var factor = Math.abs(parseFloat(expFormat[0])); // [1..10)
  if (neg) { // for negative reverse ordering
    factor = 10 - factor;
  }

  var factorStr = factor.toFixed(20);

  // strip zeros from the end
  factorStr = factorStr.replace(/\.?0+$/, '');

  result += SEP + factorStr;

  return result;
}

},{"./utils":53}],53:[function(_dereq_,module,exports){
'use strict';

function pad(str, padWith, upToLength) {
  var padding = '';
  var targetLength = upToLength - str.length;
  while (padding.length < targetLength) {
    padding += padWith;
  }
  return padding;
}

exports.padLeft = function (str, padWith, upToLength) {
  var padding = pad(str, padWith, upToLength);
  return padding + str;
};

exports.padRight = function (str, padWith, upToLength) {
  var padding = pad(str, padWith, upToLength);
  return str + padding;
};

exports.stringLexCompare = function (a, b) {

  var aLen = a.length;
  var bLen = b.length;

  var i;
  for (i = 0; i < aLen; i++) {
    if (i === bLen) {
      // b is shorter substring of a
      return 1;
    }
    var aChar = a.charAt(i);
    var bChar = b.charAt(i);
    if (aChar !== bChar) {
      return aChar < bChar ? -1 : 1;
    }
  }

  if (aLen < bLen) {
    // a is shorter substring of b
    return -1;
  }

  return 0;
};

/*
 * returns the decimal form for the given integer, i.e. writes
 * out all the digits (in base-10) instead of using scientific notation
 */
exports.intToDecimalForm = function (int) {

  var isNeg = int < 0;
  var result = '';

  do {
    var remainder = isNeg ? -Math.ceil(int % 10) : Math.floor(int % 10);

    result = remainder + result;
    int = isNeg ? Math.ceil(int / 10) : Math.floor(int / 10);
  } while (int);


  if (isNeg && result !== '0') {
    result = '-' + result;
  }

  return result;
};
},{}],54:[function(_dereq_,module,exports){
'use strict';
/*
 * Simple task queue to sequentialize actions. Assumes callbacks will eventually fire (once).
 */

var Promise = _dereq_('./utils').Promise;

function TaskQueue() {
  this.promise = new Promise(function (fulfill) {fulfill(); });
}
TaskQueue.prototype.add = function (promiseFactory) {
  this.promise = this.promise["catch"](function () {
    // just recover
  }).then(function () {
    return promiseFactory();
  });
  return this.promise;
};
TaskQueue.prototype.finish = function () {
  return this.promise;
};

module.exports = TaskQueue;

},{"./utils":56}],55:[function(_dereq_,module,exports){
'use strict';
var Promise = _dereq_('./utils').Promise;

// this is essentially the "update sugar" function from daleharvey/pouchdb#1388
// the diffFun tells us what delta to apply to the doc.  it either returns
// the doc, or false if it doesn't need to do an update after all
function upsert(db, docId, diffFun) {
  return new Promise(function (fulfill, reject) {
    if (docId && typeof docId === 'object') {
      docId = docId._id;
    }
    if (typeof docId !== 'string') {
      return reject(new Error('doc id is required'));
    }

    db.get(docId, function (err, doc) {
      if (err) {
        if (err.status !== 404) {
          return reject(err);
        }
        return fulfill(tryAndPut(db, diffFun({_id : docId}), diffFun));
      }
      var newDoc = diffFun(doc);
      if (!newDoc) {
        return fulfill(doc);
      }
      fulfill(tryAndPut(db, newDoc, diffFun));
    });
  });
}

function tryAndPut(db, doc, diffFun) {
  return db.put(doc)["catch"](function (err) {
    if (err.status !== 409) {
      throw err;
    }
    return upsert(db, doc, diffFun);
  });
}

module.exports = upsert;

},{"./utils":56}],56:[function(_dereq_,module,exports){
(function (process,global){
'use strict';
/* istanbul ignore if */
if (typeof global.Promise === 'function') {
  exports.Promise = global.Promise;
} else {
  exports.Promise = _dereq_('lie');
}
// uniquify a list, similar to underscore's _.uniq
exports.uniq = function (arr) {
  var map = {};
  arr.forEach(function (element) {
    map[element] = true;
  });
  return Object.keys(map);
};

exports.inherits = _dereq_('inherits');
exports.extend = _dereq_('pouchdb-extend');
var argsarray = _dereq_('argsarray');

exports.promisedCallback = function (promise, callback) {
  if (callback) {
    promise.then(function (res) {
      process.nextTick(function () {
        callback(null, res);
      });
    }, function (reason) {
      process.nextTick(function () {
        callback(reason);
      });
    });
  }
  return promise;
};

exports.callbackify = function (fun) {
  return argsarray(function (args) {
    var cb = args.pop();
    var promise = fun.apply(this, args);
    if (typeof cb === 'function') {
      exports.promisedCallback(promise, cb);
    }
    return promise;
  });
};

// Promise finally util similar to Q.finally
exports.fin = function (promise, cb) {
  return promise.then(function (res) {
    var promise2 = cb();
    if (typeof promise2.then === 'function') {
      return promise2.then(function () {
        return res;
      });
    }
    return res;
  }, function (reason) {
    var promise2 = cb();
    if (typeof promise2.then === 'function') {
      return promise2.then(function () {
        throw reason;
      });
    }
    throw reason;
  });
};

exports.sequentialize = function (queue, promiseFactory) {
  return function () {
    var args = arguments;
    var that = this;
    return queue.add(function () {
      return promiseFactory.apply(that, args);
    });
  };
};

var crypto = _dereq_('crypto');
var Md5 = _dereq_('spark-md5');

exports.MD5 = function (string) {
  /* istanbul ignore else */
  if (!process.browser) {
    return crypto.createHash('md5').update(string).digest('hex');
  } else {
    return Md5.hash(string);
  }
};
}).call(this,_dereq_("/Users/nolan/workspace/pouchdb/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"/Users/nolan/workspace/pouchdb/node_modules/browserify/node_modules/insert-module-globals/node_modules/process/browser.js":28,"argsarray":25,"crypto":26,"inherits":29,"lie":33,"pouchdb-extend":48,"spark-md5":57}],57:[function(_dereq_,module,exports){
/*jshint bitwise:false*/
/*global unescape*/

(function (factory) {
    if (typeof exports === 'object') {
        // Node/CommonJS
        module.exports = factory();
    } else if (typeof define === 'function' && define.amd) {
        // AMD
        define(factory);
    } else {
        // Browser globals (with support for web workers)
        var glob;
        try {
            glob = window;
        } catch (e) {
            glob = self;
        }

        glob.SparkMD5 = factory();
    }
}(function (undefined) {

    'use strict';

    ////////////////////////////////////////////////////////////////////////////

    /*
     * Fastest md5 implementation around (JKM md5)
     * Credits: Joseph Myers
     *
     * @see http://www.myersdaily.org/joseph/javascript/md5-text.html
     * @see http://jsperf.com/md5-shootout/7
     */

    /* this function is much faster,
      so if possible we use it. Some IEs
      are the only ones I know of that
      need the idiotic second function,
      generated by an if clause.  */
    var add32 = function (a, b) {
        return (a + b) & 0xFFFFFFFF;
    },

    cmn = function (q, a, b, x, s, t) {
        a = add32(add32(a, q), add32(x, t));
        return add32((a << s) | (a >>> (32 - s)), b);
    },

    ff = function (a, b, c, d, x, s, t) {
        return cmn((b & c) | ((~b) & d), a, b, x, s, t);
    },

    gg = function (a, b, c, d, x, s, t) {
        return cmn((b & d) | (c & (~d)), a, b, x, s, t);
    },

    hh = function (a, b, c, d, x, s, t) {
        return cmn(b ^ c ^ d, a, b, x, s, t);
    },

    ii = function (a, b, c, d, x, s, t) {
        return cmn(c ^ (b | (~d)), a, b, x, s, t);
    },

    md5cycle = function (x, k) {
        var a = x[0],
            b = x[1],
            c = x[2],
            d = x[3];

        a = ff(a, b, c, d, k[0], 7, -680876936);
        d = ff(d, a, b, c, k[1], 12, -389564586);
        c = ff(c, d, a, b, k[2], 17, 606105819);
        b = ff(b, c, d, a, k[3], 22, -1044525330);
        a = ff(a, b, c, d, k[4], 7, -176418897);
        d = ff(d, a, b, c, k[5], 12, 1200080426);
        c = ff(c, d, a, b, k[6], 17, -1473231341);
        b = ff(b, c, d, a, k[7], 22, -45705983);
        a = ff(a, b, c, d, k[8], 7, 1770035416);
        d = ff(d, a, b, c, k[9], 12, -1958414417);
        c = ff(c, d, a, b, k[10], 17, -42063);
        b = ff(b, c, d, a, k[11], 22, -1990404162);
        a = ff(a, b, c, d, k[12], 7, 1804603682);
        d = ff(d, a, b, c, k[13], 12, -40341101);
        c = ff(c, d, a, b, k[14], 17, -1502002290);
        b = ff(b, c, d, a, k[15], 22, 1236535329);

        a = gg(a, b, c, d, k[1], 5, -165796510);
        d = gg(d, a, b, c, k[6], 9, -1069501632);
        c = gg(c, d, a, b, k[11], 14, 643717713);
        b = gg(b, c, d, a, k[0], 20, -373897302);
        a = gg(a, b, c, d, k[5], 5, -701558691);
        d = gg(d, a, b, c, k[10], 9, 38016083);
        c = gg(c, d, a, b, k[15], 14, -660478335);
        b = gg(b, c, d, a, k[4], 20, -405537848);
        a = gg(a, b, c, d, k[9], 5, 568446438);
        d = gg(d, a, b, c, k[14], 9, -1019803690);
        c = gg(c, d, a, b, k[3], 14, -187363961);
        b = gg(b, c, d, a, k[8], 20, 1163531501);
        a = gg(a, b, c, d, k[13], 5, -1444681467);
        d = gg(d, a, b, c, k[2], 9, -51403784);
        c = gg(c, d, a, b, k[7], 14, 1735328473);
        b = gg(b, c, d, a, k[12], 20, -1926607734);

        a = hh(a, b, c, d, k[5], 4, -378558);
        d = hh(d, a, b, c, k[8], 11, -2022574463);
        c = hh(c, d, a, b, k[11], 16, 1839030562);
        b = hh(b, c, d, a, k[14], 23, -35309556);
        a = hh(a, b, c, d, k[1], 4, -1530992060);
        d = hh(d, a, b, c, k[4], 11, 1272893353);
        c = hh(c, d, a, b, k[7], 16, -155497632);
        b = hh(b, c, d, a, k[10], 23, -1094730640);
        a = hh(a, b, c, d, k[13], 4, 681279174);
        d = hh(d, a, b, c, k[0], 11, -358537222);
        c = hh(c, d, a, b, k[3], 16, -722521979);
        b = hh(b, c, d, a, k[6], 23, 76029189);
        a = hh(a, b, c, d, k[9], 4, -640364487);
        d = hh(d, a, b, c, k[12], 11, -421815835);
        c = hh(c, d, a, b, k[15], 16, 530742520);
        b = hh(b, c, d, a, k[2], 23, -995338651);

        a = ii(a, b, c, d, k[0], 6, -198630844);
        d = ii(d, a, b, c, k[7], 10, 1126891415);
        c = ii(c, d, a, b, k[14], 15, -1416354905);
        b = ii(b, c, d, a, k[5], 21, -57434055);
        a = ii(a, b, c, d, k[12], 6, 1700485571);
        d = ii(d, a, b, c, k[3], 10, -1894986606);
        c = ii(c, d, a, b, k[10], 15, -1051523);
        b = ii(b, c, d, a, k[1], 21, -2054922799);
        a = ii(a, b, c, d, k[8], 6, 1873313359);
        d = ii(d, a, b, c, k[15], 10, -30611744);
        c = ii(c, d, a, b, k[6], 15, -1560198380);
        b = ii(b, c, d, a, k[13], 21, 1309151649);
        a = ii(a, b, c, d, k[4], 6, -145523070);
        d = ii(d, a, b, c, k[11], 10, -1120210379);
        c = ii(c, d, a, b, k[2], 15, 718787259);
        b = ii(b, c, d, a, k[9], 21, -343485551);

        x[0] = add32(a, x[0]);
        x[1] = add32(b, x[1]);
        x[2] = add32(c, x[2]);
        x[3] = add32(d, x[3]);
    },

    /* there needs to be support for Unicode here,
       * unless we pretend that we can redefine the MD-5
       * algorithm for multi-byte characters (perhaps
       * by adding every four 16-bit characters and
       * shortening the sum to 32 bits). Otherwise
       * I suggest performing MD-5 as if every character
       * was two bytes--e.g., 0040 0025 = @%--but then
       * how will an ordinary MD-5 sum be matched?
       * There is no way to standardize text to something
       * like UTF-8 before transformation; speed cost is
       * utterly prohibitive. The JavaScript standard
       * itself needs to look at this: it should start
       * providing access to strings as preformed UTF-8
       * 8-bit unsigned value arrays.
       */
    md5blk = function (s) {
        var md5blks = [],
            i; /* Andy King said do it this way. */

        for (i = 0; i < 64; i += 4) {
            md5blks[i >> 2] = s.charCodeAt(i) + (s.charCodeAt(i + 1) << 8) + (s.charCodeAt(i + 2) << 16) + (s.charCodeAt(i + 3) << 24);
        }
        return md5blks;
    },

    md5blk_array = function (a) {
        var md5blks = [],
            i; /* Andy King said do it this way. */

        for (i = 0; i < 64; i += 4) {
            md5blks[i >> 2] = a[i] + (a[i + 1] << 8) + (a[i + 2] << 16) + (a[i + 3] << 24);
        }
        return md5blks;
    },

    md51 = function (s) {
        var n = s.length,
            state = [1732584193, -271733879, -1732584194, 271733878],
            i,
            length,
            tail,
            tmp,
            lo,
            hi;

        for (i = 64; i <= n; i += 64) {
            md5cycle(state, md5blk(s.substring(i - 64, i)));
        }
        s = s.substring(i - 64);
        length = s.length;
        tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        for (i = 0; i < length; i += 1) {
            tail[i >> 2] |= s.charCodeAt(i) << ((i % 4) << 3);
        }
        tail[i >> 2] |= 0x80 << ((i % 4) << 3);
        if (i > 55) {
            md5cycle(state, tail);
            for (i = 0; i < 16; i += 1) {
                tail[i] = 0;
            }
        }

        // Beware that the final length might not fit in 32 bits so we take care of that
        tmp = n * 8;
        tmp = tmp.toString(16).match(/(.*?)(.{0,8})$/);
        lo = parseInt(tmp[2], 16);
        hi = parseInt(tmp[1], 16) || 0;

        tail[14] = lo;
        tail[15] = hi;

        md5cycle(state, tail);
        return state;
    },

    md51_array = function (a) {
        var n = a.length,
            state = [1732584193, -271733879, -1732584194, 271733878],
            i,
            length,
            tail,
            tmp,
            lo,
            hi;

        for (i = 64; i <= n; i += 64) {
            md5cycle(state, md5blk_array(a.subarray(i - 64, i)));
        }

        // Not sure if it is a bug, however IE10 will always produce a sub array of length 1
        // containing the last element of the parent array if the sub array specified starts
        // beyond the length of the parent array - weird.
        // https://connect.microsoft.com/IE/feedback/details/771452/typed-array-subarray-issue
        a = (i - 64) < n ? a.subarray(i - 64) : new Uint8Array(0);

        length = a.length;
        tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        for (i = 0; i < length; i += 1) {
            tail[i >> 2] |= a[i] << ((i % 4) << 3);
        }

        tail[i >> 2] |= 0x80 << ((i % 4) << 3);
        if (i > 55) {
            md5cycle(state, tail);
            for (i = 0; i < 16; i += 1) {
                tail[i] = 0;
            }
        }

        // Beware that the final length might not fit in 32 bits so we take care of that
        tmp = n * 8;
        tmp = tmp.toString(16).match(/(.*?)(.{0,8})$/);
        lo = parseInt(tmp[2], 16);
        hi = parseInt(tmp[1], 16) || 0;

        tail[14] = lo;
        tail[15] = hi;

        md5cycle(state, tail);

        return state;
    },

    hex_chr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'],

    rhex = function (n) {
        var s = '',
            j;
        for (j = 0; j < 4; j += 1) {
            s += hex_chr[(n >> (j * 8 + 4)) & 0x0F] + hex_chr[(n >> (j * 8)) & 0x0F];
        }
        return s;
    },

    hex = function (x) {
        var i;
        for (i = 0; i < x.length; i += 1) {
            x[i] = rhex(x[i]);
        }
        return x.join('');
    },

    md5 = function (s) {
        return hex(md51(s));
    },



    ////////////////////////////////////////////////////////////////////////////

    /**
     * SparkMD5 OOP implementation.
     *
     * Use this class to perform an incremental md5, otherwise use the
     * static methods instead.
     */
    SparkMD5 = function () {
        // call reset to init the instance
        this.reset();
    };


    // In some cases the fast add32 function cannot be used..
    if (md5('hello') !== '5d41402abc4b2a76b9719d911017c592') {
        add32 = function (x, y) {
            var lsw = (x & 0xFFFF) + (y & 0xFFFF),
                msw = (x >> 16) + (y >> 16) + (lsw >> 16);
            return (msw << 16) | (lsw & 0xFFFF);
        };
    }


    /**
     * Appends a string.
     * A conversion will be applied if an utf8 string is detected.
     *
     * @param {String} str The string to be appended
     *
     * @return {SparkMD5} The instance itself
     */
    SparkMD5.prototype.append = function (str) {
        // converts the string to utf8 bytes if necessary
        if (/[\u0080-\uFFFF]/.test(str)) {
            str = unescape(encodeURIComponent(str));
        }

        // then append as binary
        this.appendBinary(str);

        return this;
    };

    /**
     * Appends a binary string.
     *
     * @param {String} contents The binary string to be appended
     *
     * @return {SparkMD5} The instance itself
     */
    SparkMD5.prototype.appendBinary = function (contents) {
        this._buff += contents;
        this._length += contents.length;

        var length = this._buff.length,
            i;

        for (i = 64; i <= length; i += 64) {
            md5cycle(this._state, md5blk(this._buff.substring(i - 64, i)));
        }

        this._buff = this._buff.substr(i - 64);

        return this;
    };

    /**
     * Finishes the incremental computation, reseting the internal state and
     * returning the result.
     * Use the raw parameter to obtain the raw result instead of the hex one.
     *
     * @param {Boolean} raw True to get the raw result, false to get the hex result
     *
     * @return {String|Array} The result
     */
    SparkMD5.prototype.end = function (raw) {
        var buff = this._buff,
            length = buff.length,
            i,
            tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            ret;

        for (i = 0; i < length; i += 1) {
            tail[i >> 2] |= buff.charCodeAt(i) << ((i % 4) << 3);
        }

        this._finish(tail, length);
        ret = !!raw ? this._state : hex(this._state);

        this.reset();

        return ret;
    };

    /**
     * Finish the final calculation based on the tail.
     *
     * @param {Array}  tail   The tail (will be modified)
     * @param {Number} length The length of the remaining buffer
     */
    SparkMD5.prototype._finish = function (tail, length) {
        var i = length,
            tmp,
            lo,
            hi;

        tail[i >> 2] |= 0x80 << ((i % 4) << 3);
        if (i > 55) {
            md5cycle(this._state, tail);
            for (i = 0; i < 16; i += 1) {
                tail[i] = 0;
            }
        }

        // Do the final computation based on the tail and length
        // Beware that the final length may not fit in 32 bits so we take care of that
        tmp = this._length * 8;
        tmp = tmp.toString(16).match(/(.*?)(.{0,8})$/);
        lo = parseInt(tmp[2], 16);
        hi = parseInt(tmp[1], 16) || 0;

        tail[14] = lo;
        tail[15] = hi;
        md5cycle(this._state, tail);
    };

    /**
     * Resets the internal state of the computation.
     *
     * @return {SparkMD5} The instance itself
     */
    SparkMD5.prototype.reset = function () {
        this._buff = "";
        this._length = 0;
        this._state = [1732584193, -271733879, -1732584194, 271733878];

        return this;
    };

    /**
     * Releases memory used by the incremental buffer and other aditional
     * resources. If you plan to use the instance again, use reset instead.
     */
    SparkMD5.prototype.destroy = function () {
        delete this._state;
        delete this._buff;
        delete this._length;
    };


    /**
     * Performs the md5 hash on a string.
     * A conversion will be applied if utf8 string is detected.
     *
     * @param {String}  str The string
     * @param {Boolean} raw True to get the raw result, false to get the hex result
     *
     * @return {String|Array} The result
     */
    SparkMD5.hash = function (str, raw) {
        // converts the string to utf8 bytes if necessary
        if (/[\u0080-\uFFFF]/.test(str)) {
            str = unescape(encodeURIComponent(str));
        }

        var hash = md51(str);

        return !!raw ? hash : hex(hash);
    };

    /**
     * Performs the md5 hash on a binary string.
     *
     * @param {String}  content The binary string
     * @param {Boolean} raw     True to get the raw result, false to get the hex result
     *
     * @return {String|Array} The result
     */
    SparkMD5.hashBinary = function (content, raw) {
        var hash = md51(content);

        return !!raw ? hash : hex(hash);
    };

    /**
     * SparkMD5 OOP implementation for array buffers.
     *
     * Use this class to perform an incremental md5 ONLY for array buffers.
     */
    SparkMD5.ArrayBuffer = function () {
        // call reset to init the instance
        this.reset();
    };

    ////////////////////////////////////////////////////////////////////////////

    /**
     * Appends an array buffer.
     *
     * @param {ArrayBuffer} arr The array to be appended
     *
     * @return {SparkMD5.ArrayBuffer} The instance itself
     */
    SparkMD5.ArrayBuffer.prototype.append = function (arr) {
        // TODO: we could avoid the concatenation here but the algorithm would be more complex
        //       if you find yourself needing extra performance, please make a PR.
        var buff = this._concatArrayBuffer(this._buff, arr),
            length = buff.length,
            i;

        this._length += arr.byteLength;

        for (i = 64; i <= length; i += 64) {
            md5cycle(this._state, md5blk_array(buff.subarray(i - 64, i)));
        }

        // Avoids IE10 weirdness (documented above)
        this._buff = (i - 64) < length ? buff.subarray(i - 64) : new Uint8Array(0);

        return this;
    };

    /**
     * Finishes the incremental computation, reseting the internal state and
     * returning the result.
     * Use the raw parameter to obtain the raw result instead of the hex one.
     *
     * @param {Boolean} raw True to get the raw result, false to get the hex result
     *
     * @return {String|Array} The result
     */
    SparkMD5.ArrayBuffer.prototype.end = function (raw) {
        var buff = this._buff,
            length = buff.length,
            tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            i,
            ret;

        for (i = 0; i < length; i += 1) {
            tail[i >> 2] |= buff[i] << ((i % 4) << 3);
        }

        this._finish(tail, length);
        ret = !!raw ? this._state : hex(this._state);

        this.reset();

        return ret;
    };

    SparkMD5.ArrayBuffer.prototype._finish = SparkMD5.prototype._finish;

    /**
     * Resets the internal state of the computation.
     *
     * @return {SparkMD5.ArrayBuffer} The instance itself
     */
    SparkMD5.ArrayBuffer.prototype.reset = function () {
        this._buff = new Uint8Array(0);
        this._length = 0;
        this._state = [1732584193, -271733879, -1732584194, 271733878];

        return this;
    };

    /**
     * Releases memory used by the incremental buffer and other aditional
     * resources. If you plan to use the instance again, use reset instead.
     */
    SparkMD5.ArrayBuffer.prototype.destroy = SparkMD5.prototype.destroy;

    /**
     * Concats two array buffers, returning a new one.
     *
     * @param  {ArrayBuffer} first  The first array buffer
     * @param  {ArrayBuffer} second The second array buffer
     *
     * @return {ArrayBuffer} The new array buffer
     */
    SparkMD5.ArrayBuffer.prototype._concatArrayBuffer = function (first, second) {
        var firstLength = first.length,
            result = new Uint8Array(firstLength + second.byteLength);

        result.set(first);
        result.set(new Uint8Array(second), firstLength);

        return result;
    };

    /**
     * Performs the md5 hash on an array buffer.
     *
     * @param {ArrayBuffer} arr The array buffer
     * @param {Boolean}     raw True to get the raw result, false to get the hex result
     *
     * @return {String|Array} The result
     */
    SparkMD5.ArrayBuffer.hash = function (arr, raw) {
        var hash = md51_array(new Uint8Array(arr));

        return !!raw ? hash : hex(hash);
    };

    return SparkMD5;
}));

},{}],58:[function(_dereq_,module,exports){
'use strict';

/**
 * Stringify/parse functions that don't operate
 * recursively, so they avoid call stack exceeded
 * errors.
 */
exports.stringify = function stringify(input) {
  var queue = [];
  queue.push({obj: input});

  var res = '';
  var next, obj, prefix, val, i, arrayPrefix, keys, k, key, value, objPrefix;
  while ((next = queue.pop())) {
    obj = next.obj;
    prefix = next.prefix || '';
    val = next.val || '';
    res += prefix;
    if (val) {
      res += val;
    } else if (typeof obj !== 'object') {
      res += typeof obj === 'undefined' ? null : JSON.stringify(obj);
    } else if (obj === null) {
      res += 'null';
    } else if (Array.isArray(obj)) {
      queue.push({val: ']'});
      for (i = obj.length - 1; i >= 0; i--) {
        arrayPrefix = i === 0 ? '' : ',';
        queue.push({obj: obj[i], prefix: arrayPrefix});
      }
      queue.push({val: '['});
    } else { // object
      keys = [];
      for (k in obj) {
        if (obj.hasOwnProperty(k)) {
          keys.push(k);
        }
      }
      queue.push({val: '}'});
      for (i = keys.length - 1; i >= 0; i--) {
        key = keys[i];
        value = obj[key];
        objPrefix = (i > 0 ? ',' : '');
        objPrefix += JSON.stringify(key) + ':';
        queue.push({obj: value, prefix: objPrefix});
      }
      queue.push({val: '{'});
    }
  }
  return res;
};

// Convenience function for the parse function.
// This pop function is basically copied from
// pouchCollate.parseIndexableString
function pop(obj, stack, metaStack) {
  var lastMetaElement = metaStack[metaStack.length - 1];
  if (obj === lastMetaElement.element) {
    // popping a meta-element, e.g. an object whose value is another object
    metaStack.pop();
    lastMetaElement = metaStack[metaStack.length - 1];
  }
  var element = lastMetaElement.element;
  var lastElementIndex = lastMetaElement.index;
  if (Array.isArray(element)) {
    element.push(obj);
  } else if (lastElementIndex === stack.length - 2) { // obj with key+value
    var key = stack.pop();
    element[key] = obj;
  } else {
    stack.push(obj); // obj with key only
  }
}

exports.parse = function (str) {
  var stack = [];
  var metaStack = []; // stack for arrays and objects
  var i = 0;
  var collationIndex,parsedNum,numChar;
  var parsedString,lastCh,numConsecutiveSlashes,ch;
  var arrayElement, objElement;
  while (true) {
    collationIndex = str[i++];
    if (collationIndex === '}' ||
        collationIndex === ']' ||
        typeof collationIndex === 'undefined') {
      if (stack.length === 1) {
        return stack.pop();
      } else {
        pop(stack.pop(), stack, metaStack);
        continue;
      }
    }
    switch (collationIndex) {
      case ' ':
      case '\t':
      case '\n':
      case ':':
      case ',':
        break;
      case 'n':
        i += 3; // 'ull'
        pop(null, stack, metaStack);
        break;
      case 't':
        i += 3; // 'rue'
        pop(true, stack, metaStack);
        break;
      case 'f':
        i += 4; // 'alse'
        pop(false, stack, metaStack);
        break;
      case '0':
      case '1':
      case '2':
      case '3':
      case '4':
      case '5':
      case '6':
      case '7':
      case '8':
      case '9':
      case '-':
        parsedNum = '';
        i--;
        while (true) {
          numChar = str[i++];
          if (/[\d\.\-e\+]/.test(numChar)) {
            parsedNum += numChar;
          } else {
            i--;
            break;
          }
        }
        pop(parseFloat(parsedNum), stack, metaStack);
        break;
      case '"':
        parsedString = '';
        lastCh = void 0;
        numConsecutiveSlashes = 0;
        while (true) {
          ch = str[i++];
          if (ch !== '"' || (lastCh === '\\' &&
              numConsecutiveSlashes % 2 === 1)) {
            parsedString += ch;
            lastCh = ch;
            if (lastCh === '\\') {
              numConsecutiveSlashes++;
            } else {
              numConsecutiveSlashes = 0;
            }
          } else {
            break;
          }
        }
        pop(JSON.parse('"' + parsedString + '"'), stack, metaStack);
        break;
      case '[':
        arrayElement = { element: [], index: stack.length };
        stack.push(arrayElement.element);
        metaStack.push(arrayElement);
        break;
      case '{':
        objElement = { element: {}, index: stack.length };
        stack.push(objElement.element);
        metaStack.push(objElement);
        break;
      default:
        throw new Error(
          'unexpectedly reached end of input: ' + collationIndex);
    }
  }
};

},{}]},{},[17])
(17)
});
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}]},{},["./client/scripts/main.js"])