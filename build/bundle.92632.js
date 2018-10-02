!function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/",t(t.s="pwNi")}({"57Xc":function(e,t,n){"use strict";function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,t.default=void 0;var i=n("KM04"),u=n("WH8d");t.default=function(e){function t(){return o(this,e.apply(this,arguments))}return r(t,e),t.prototype.render=function(e){return(0,i.h)("filter",{id:e.id,x:"0%",y:"0%",width:"100%",height:"100%",filterUnits:"userSpaceOnUse"},(0,i.h)("feDropShadow",{dx:"0",dy:e.dy,stdDeviation:"2",floodColor:u.color.shadow,floodOpacity:"0.9"}))},t}(i.Component)},"9irV":function(e,t,n){"use strict";function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,t.default=void 0;var i=n("KM04"),u=n("jHzk"),c=n("WH8d");t.default=function(e){function t(){return o(this,e.apply(this,arguments))}return r(t,e),t.prototype.render=function(e){var t=e.second,n=e.cx,o=e.cy,r=e.r,l=e.filter,f=(0,u.sec2deg)(t),s=(0,u.computeXY)(n,o,(0,u.perc)(r,-20),f),a=(0,u.computeXY)(n,o,(0,u.perc)(r,95),f);return(0,i.h)("g",{filter:l},(0,i.h)("line",{x1:s.x,y1:s.y,x2:a.x,y2:a.y,style:{stroke:c.color.second,"stroke-width":r/40}}),(0,i.h)("circle",{cx:n,cy:o,r:r/20,fill:c.color.second}))},t}(i.Component)},BsCE:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,t.default=void 0;var u=n("KM04"),c=n("cE2F"),l=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(c),f=n("r9wz"),s=o(f),a=n("57Xc"),p=o(a),d=n("YYfd"),h=o(d),_=n("woU2"),y=o(_),v=n("9irV"),m=o(v),b=n("jHzk");t.default=function(e){function t(){var t=r(this,e.call(this));return t.state.now=new Date,"undefined"!=typeof document?(t.state.clientWidth=document.body.clientWidth,t.state.clientHeight=document.body.clientHeight):(t.state.clientWidth=100,t.state.clientHeight=100),t.onResize=t.onResize.bind(t),l.ontick(function(){t.setState({now:new Date})}),t}return i(t,e),t.prototype.onResize=function(){this.setState({clientWidth:document.body.clientWidth,clientHeight:document.body.clientHeight})},t.prototype.componentDidMount=function(){this.onResize(),"undefined"!=typeof window&&window.addEventListener("resize",this.onResize),l.start()},t.prototype.componentWillUnmount=function(){"undefined"!=typeof window&&window.removeEventListener("resize",this.onResize),l.stop()},t.prototype.render=function(e,t){var n=e.shadow,o=void 0!==n&&n,r=e.continuous,i=void 0===r||r,c=t.now,l=t.clientWidth,f=t.clientHeight,a=c.getSeconds()+c.getMilliseconds()/1e3,d=c.getMinutes()+a/60,_=c.getHours()+d/60;i||(a=Math.floor(a),d=Math.floor(d),_=Math.floor(_));var v=Math.min(l,f)/20,w=l-2*v,g=f-2*v,x=w/2,M=g/2,j=Math.min(w,g)/2;return(0,u.h)("svg",{width:w,height:g,style:"margin:"+v+"px"},o&&(0,u.h)("defs",null,(0,u.h)(p.default,{id:"hourShadow",dy:(0,b.perc)(j,1)}),(0,u.h)(p.default,{id:"minuteShadow",dy:(0,b.perc)(j,2)}),(0,u.h)(p.default,{id:"secondShadow",dy:(0,b.perc)(j,3)})),(0,u.h)(s.default,{cx:x,cy:M,r:j}),(0,u.h)(h.default,{hour:_,cx:x,cy:M,r:j,filter:o&&"url(#hourShadow)"}),(0,u.h)(y.default,{minute:d,cx:x,cy:M,r:j,filter:o&&"url(#minuteShadow)"}),(0,u.h)(m.default,{second:a,cx:x,cy:M,r:j,filter:o&&"url(#secondShadow)"}))},t}(u.Component)},JkW7:function(e,t,n){"use strict";t.__esModule=!0,n("rq4c");var o=n("qLaj");t.default=function(e){return e&&e.__esModule?e:{default:e}}(o).default},KM04:function(e){"use strict";!function(){function t(e,t){var n,o,r,i,u=N;for(i=arguments.length;i-- >2;)E.push(arguments[i]);for(t&&null!=t.children&&(E.length||E.push(t.children),delete t.children);E.length;)if((o=E.pop())&&void 0!==o.pop)for(i=o.length;i--;)E.push(o[i]);else"boolean"==typeof o&&(o=null),(r="function"!=typeof e)&&(null==o?o="":"number"==typeof o?o+="":"string"!=typeof o&&(r=!1)),r&&n?u[u.length-1]+=o:u===N?u=[o]:u.push(o),n=r;var c=new S;return c.nodeName=e,c.children=u,c.attributes=null==t?void 0:t,c.key=null==t?void 0:t.key,void 0!==P.vnode&&P.vnode(c),c}function n(e,t){for(var n in t)e[n]=t[n];return e}function o(e,o){return t(e.nodeName,n(n({},e.attributes),o),arguments.length>2?[].slice.call(arguments,2):e.children)}function r(e){!e.__d&&(e.__d=!0)&&1==U.push(e)&&(P.debounceRendering||W)(i)}function i(){var e,t=U;for(U=[];e=t.pop();)e.__d&&M(e)}function u(e,t,n){return"string"==typeof t||"number"==typeof t?void 0!==e.splitText:"string"==typeof t.nodeName?!e._componentConstructor&&c(e,t.nodeName):n||e._componentConstructor===t.nodeName}function c(e,t){return e.__n===t||e.nodeName.toLowerCase()===t.toLowerCase()}function l(e){var t=n({},e.attributes);t.children=e.children;var o=e.nodeName.defaultProps;if(void 0!==o)for(var r in o)void 0===t[r]&&(t[r]=o[r]);return t}function f(e,t){var n=t?document.createElementNS("http://www.w3.org/2000/svg",e):document.createElement(e);return n.__n=e,n}function s(e){var t=e.parentNode;t&&t.removeChild(e)}function a(e,t,n,o,r){if("className"===t&&(t="class"),"key"===t);else if("ref"===t)n&&n(null),o&&o(e);else if("class"!==t||r)if("style"===t){if(o&&"string"!=typeof o&&"string"!=typeof n||(e.style.cssText=o||""),o&&"object"==typeof o){if("string"!=typeof n)for(var i in n)i in o||(e.style[i]="");for(var i in o)e.style[i]="number"==typeof o[i]&&!1===H.test(i)?o[i]+"px":o[i]}}else if("dangerouslySetInnerHTML"===t)o&&(e.innerHTML=o.__html||"");else if("o"==t[0]&&"n"==t[1]){var u=t!==(t=t.replace(/Capture$/,""));t=t.toLowerCase().substring(2),o?n||e.addEventListener(t,p,u):e.removeEventListener(t,p,u),(e.__l||(e.__l={}))[t]=o}else if("list"!==t&&"type"!==t&&!r&&t in e){try{e[t]=null==o?"":o}catch(e){}null!=o&&!1!==o||"spellcheck"==t||e.removeAttribute(t)}else{var c=r&&t!==(t=t.replace(/^xlink:?/,""));null==o||!1===o?c?e.removeAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase()):e.removeAttribute(t):"function"!=typeof o&&(c?e.setAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase(),o):e.setAttribute(t,o))}else e.className=o||""}function p(e){return this.__l[e.type](P.event&&P.event(e)||e)}function d(){for(var e;e=z.pop();)P.afterMount&&P.afterMount(e),e.componentDidMount&&e.componentDidMount()}function h(e,t,n,o,r,i){T++||(R=null!=r&&void 0!==r.ownerSVGElement,L=null!=e&&!("__preactattr_"in e));var u=_(e,t,n,o,i);return r&&u.parentNode!==r&&r.appendChild(u),--T||(L=!1,i||d()),u}function _(e,t,n,o,r){var i=e,u=R;if(null!=t&&"boolean"!=typeof t||(t=""),"string"==typeof t||"number"==typeof t)return e&&void 0!==e.splitText&&e.parentNode&&(!e._component||r)?e.nodeValue!=t&&(e.nodeValue=t):(i=document.createTextNode(t),e&&(e.parentNode&&e.parentNode.replaceChild(i,e),v(e,!0))),i.__preactattr_=!0,i;var l=t.nodeName;if("function"==typeof l)return j(e,t,n,o);if(R="svg"===l||"foreignObject"!==l&&R,l+="",(!e||!c(e,l))&&(i=f(l,R),e)){for(;e.firstChild;)i.appendChild(e.firstChild);e.parentNode&&e.parentNode.replaceChild(i,e),v(e,!0)}var s=i.firstChild,a=i.__preactattr_,p=t.children;if(null==a){a=i.__preactattr_={};for(var d=i.attributes,h=d.length;h--;)a[d[h].name]=d[h].value}return!L&&p&&1===p.length&&"string"==typeof p[0]&&null!=s&&void 0!==s.splitText&&null==s.nextSibling?s.nodeValue!=p[0]&&(s.nodeValue=p[0]):(p&&p.length||null!=s)&&y(i,p,n,o,L||null!=a.dangerouslySetInnerHTML),b(i,t.attributes,a),R=u,i}function y(e,t,n,o,r){var i,c,l,f,a,p=e.childNodes,d=[],h={},y=0,m=0,b=p.length,w=0,g=t?t.length:0;if(0!==b)for(var x=0;x<b;x++){var M=p[x],j=M.__preactattr_,O=g&&j?M._component?M._component.__k:j.key:null;null!=O?(y++,h[O]=M):(j||(void 0!==M.splitText?!r||M.nodeValue.trim():r))&&(d[w++]=M)}if(0!==g)for(var x=0;x<g;x++){f=t[x],a=null;var O=f.key;if(null!=O)y&&void 0!==h[O]&&(a=h[O],h[O]=void 0,y--);else if(m<w)for(i=m;i<w;i++)if(void 0!==d[i]&&u(c=d[i],f,r)){a=c,d[i]=void 0,i===w-1&&w--,i===m&&m++;break}a=_(a,f,n,o),l=p[x],a&&a!==e&&a!==l&&(null==l?e.appendChild(a):a===l.nextSibling?s(l):e.insertBefore(a,l))}if(y)for(var x in h)void 0!==h[x]&&v(h[x],!1);for(;m<=w;)void 0!==(a=d[w--])&&v(a,!1)}function v(e,t){var n=e._component;n?O(n):(null!=e.__preactattr_&&e.__preactattr_.ref&&e.__preactattr_.ref(null),!1!==t&&null!=e.__preactattr_||s(e),m(e))}function m(e){for(e=e.lastChild;e;){var t=e.previousSibling;v(e,!0),e=t}}function b(e,t,n){var o;for(o in n)t&&null!=t[o]||null==n[o]||a(e,o,n[o],n[o]=void 0,R);for(o in t)"children"===o||"innerHTML"===o||o in n&&t[o]===("value"===o||"checked"===o?e[o]:n[o])||a(e,o,n[o],n[o]=t[o],R)}function w(e,t,n){var o,r=D.length;for(e.prototype&&e.prototype.render?(o=new e(t,n),C.call(o,t,n)):(o=new C(t,n),o.constructor=e,o.render=g);r--;)if(D[r].constructor===e)return o.__b=D[r].__b,D.splice(r,1),o;return o}function g(e,t,n){return this.constructor(e,n)}function x(e,t,n,o,i){e.__x||(e.__x=!0,e.__r=t.ref,e.__k=t.key,delete t.ref,delete t.key,void 0===e.constructor.getDerivedStateFromProps&&(!e.base||i?e.componentWillMount&&e.componentWillMount():e.componentWillReceiveProps&&e.componentWillReceiveProps(t,o)),o&&o!==e.context&&(e.__c||(e.__c=e.context),e.context=o),e.__p||(e.__p=e.props),e.props=t,e.__x=!1,0!==n&&(1!==n&&!1===P.syncComponentUpdates&&e.base?r(e):M(e,1,i)),e.__r&&e.__r(e))}function M(e,t,o,r){if(!e.__x){var i,u,c,f=e.props,s=e.state,a=e.context,p=e.__p||f,_=e.__s||s,y=e.__c||a,m=e.base,b=e.__b,g=m||b,j=e._component,C=!1,k=y;if(e.constructor.getDerivedStateFromProps&&(s=n(n({},s),e.constructor.getDerivedStateFromProps(f,s)),e.state=s),m&&(e.props=p,e.state=_,e.context=y,2!==t&&e.shouldComponentUpdate&&!1===e.shouldComponentUpdate(f,s,a)?C=!0:e.componentWillUpdate&&e.componentWillUpdate(f,s,a),e.props=f,e.state=s,e.context=a),e.__p=e.__s=e.__c=e.__b=null,e.__d=!1,!C){i=e.render(f,s,a),e.getChildContext&&(a=n(n({},a),e.getChildContext())),m&&e.getSnapshotBeforeUpdate&&(k=e.getSnapshotBeforeUpdate(p,_));var S,E,N=i&&i.nodeName;if("function"==typeof N){var W=l(i);u=j,u&&u.constructor===N&&W.key==u.__k?x(u,W,1,a,!1):(S=u,e._component=u=w(N,W,a),u.__b=u.__b||b,u.__u=e,x(u,W,0,a,!1),M(u,1,o,!0)),E=u.base}else c=g,S=j,S&&(c=e._component=null),(g||1===t)&&(c&&(c._component=null),E=h(c,i,a,o||!m,g&&g.parentNode,!0));if(g&&E!==g&&u!==j){var H=g.parentNode;H&&E!==H&&(H.replaceChild(E,g),S||(g._component=null,v(g,!1)))}if(S&&O(S),e.base=E,E&&!r){for(var U=e,R=e;R=R.__u;)(U=R).base=E;E._component=U,E._componentConstructor=U.constructor}}for(!m||o?z.unshift(e):C||(e.componentDidUpdate&&e.componentDidUpdate(p,_,k),P.afterUpdate&&P.afterUpdate(e));e.__h.length;)e.__h.pop().call(e);T||r||d()}}function j(e,t,n,o){for(var r=e&&e._component,i=r,u=e,c=r&&e._componentConstructor===t.nodeName,f=c,s=l(t);r&&!f&&(r=r.__u);)f=r.constructor===t.nodeName;return r&&f&&(!o||r._component)?(x(r,s,3,n,o),e=r.base):(i&&!c&&(O(i),e=u=null),r=w(t.nodeName,s,n),e&&!r.__b&&(r.__b=e,u=null),x(r,s,1,n,o),e=r.base,u&&e!==u&&(u._component=null,v(u,!1))),e}function O(e){P.beforeUnmount&&P.beforeUnmount(e);var t=e.base;e.__x=!0,e.componentWillUnmount&&e.componentWillUnmount(),e.base=null;var n=e._component;n?O(n):t&&(t.__preactattr_&&t.__preactattr_.ref&&t.__preactattr_.ref(null),e.__b=t,s(t),D.push(e),m(t)),e.__r&&e.__r(null)}function C(e,t){this.__d=!0,this.context=t,this.props=e,this.state=this.state||{},this.__h=[]}function k(e,t,n){return h(n,e,{},!1,t,!1)}var S=function(){},P={},E=[],N=[],W="function"==typeof Promise?Promise.resolve().then.bind(Promise.resolve()):setTimeout,H=/acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i,U=[],z=[],T=0,R=!1,L=!1,D=[];n(C.prototype,{setState:function(e,t){this.__s||(this.__s=this.state),this.state=n(n({},this.state),"function"==typeof e?e(this.state,this.props):e),t&&this.__h.push(t),r(this)},forceUpdate:function(e){e&&this.__h.push(e),M(this,2)},render:function(){}});var Y={h:t,createElement:t,cloneElement:o,Component:C,render:k,rerender:i,options:P};e.exports=Y}()},WH8d:function(e,t,n){"use strict";t.__esModule=!0;var o=n("jHzk"),r=o.rgb,i=o.gray;t.color={bg:i(227),face:i(240),hour:i(60),minute:i(60),second:r(213,74,62),indicator:i(60),shadow:i(50)}},YYfd:function(e,t,n){"use strict";function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,t.default=void 0;var i=n("KM04"),u=n("jHzk"),c=n("WH8d");t.default=function(e){function t(){return o(this,e.apply(this,arguments))}return r(t,e),t.prototype.render=function(e){var t=e.hour,n=e.cx,o=e.cy,r=e.r,l=e.filter,f=(0,u.hour2deg)(t),s=(0,u.computeXY)(n,o,(0,u.perc)(r,-20),f),a=(0,u.computeXY)(n,o,(0,u.perc)(r,67),f);return(0,i.h)("line",{x1:s.x,y1:s.y,x2:a.x,y2:a.y,filter:l,style:{stroke:c.color.hour,"stroke-width":(0,u.perc)(r,10)}})},t}(i.Component)},cE2F:function(e,t){"use strict";function n(){c=requestAnimationFrame(function(){o(),n()})}function o(){"function"==typeof l&&l(new Date)}function r(e){l="function"==typeof e?e:void 0}function i(){o(),n()}function u(){clearInterval(c)}t.__esModule=!0,t.ontick=r,t.start=i,t.stop=u;var c=void 0,l=void 0},jHzk:function(e,t){"use strict";function n(e,t,n,o){return{x:e+Math.sin(i(o))*n,y:t-Math.cos(i(o))*n}}function o(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],o=e*t/100;return n?Math.round(o):o}function r(e,t){for(var n=arguments.length,o=Array(n>2?n-2:0),r=2;r<n;r++)o[r-2]=arguments[r];return o.some(function(n){return e[n]!=t[n]})}t.__esModule=!0,t.computeXY=n,t.perc=o,t.diffProps=r;var i=t.toRadians=function(e){return e*Math.PI/180},u=(t.toDegrees=function(e){return 180*e/Math.PI},t.hour2deg=function(e){return 30*e},t.min2deg=function(e){return 6*e}),c=(t.sec2deg=u,t.rgb=function(e,t,n){return"rgb("+e+", "+t+", "+n+")"});t.gray=function(e){return c(e,e,e)}},pwNi:function(e,t,n){"use strict";var o=n("KM04");"serviceWorker"in navigator&&"https:"===location.protocol&&navigator.serviceWorker.register(n.p+"sw.js");var r=function(e){return e&&e.default?e.default:e};if("function"==typeof r(n("JkW7"))){var i=document.body.firstElementChild,u=function(){var e=r(n("JkW7"));i=(0,o.render)((0,o.h)(e),document.body,i)};u()}},qLaj:function(e,t,n){"use strict";function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,t.default=void 0;var i=n("KM04"),u=n("BsCE"),c=function(e){return e&&e.__esModule?e:{default:e}}(u),l=(0,i.h)(c.default,null);t.default=function(e){function t(){return o(this,e.apply(this,arguments))}return r(t,e),t.prototype.render=function(){return l},t}(i.Component)},r9wz:function(e,t,n){"use strict";function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,t.default=void 0;var i=n("KM04"),u=n("to4/"),c=function(e){return e&&e.__esModule?e:{default:e}}(u),l=n("WH8d"),f=n("jHzk");t.default=function(e){function t(){return o(this,e.apply(this,arguments))}return r(t,e),t.prototype.render=function(e){for(var t=e.cx,n=e.cy,o=e.r,r=[],u=0;u<60;u++)r.push(u%5?(0,i.h)(c.default,{cx:t,cy:n,r:o,length:(0,f.perc)(o,12),width:(0,f.perc)(o,2.7),rotation:(0,f.min2deg)(u)}):(0,i.h)(c.default,{cx:t,cy:n,r:o,length:(0,f.perc)(o,25),width:(0,f.perc)(o,6),rotation:(0,f.min2deg)(u)}));return(0,i.h)("g",null,(0,i.h)("circle",{cx:t,cy:n,r:o,fill:l.color.face}),r)},t}(i.Component)},rq4c:function(){},"to4/":function(e,t,n){"use strict";function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,t.default=void 0;var i=n("KM04"),u=n("jHzk"),c=n("WH8d");t.default=function(e){function t(){return o(this,e.apply(this,arguments))}return r(t,e),t.prototype.render=function(e){var t=e.cx,n=e.cy,o=e.rotation,r=e.r,l=e.width,f=e.length,s=(0,u.computeXY)(t,n,r-f,o),a=(0,u.computeXY)(t,n,(0,u.perc)(r,95),o);return(0,i.h)("line",{x1:s.x,y1:s.y,x2:a.x,y2:a.y,style:{stroke:c.color.indicator,"stroke-width":l}})},t}(i.Component)},woU2:function(e,t,n){"use strict";function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,t.default=void 0;var i=n("KM04"),u=n("jHzk"),c=n("WH8d");t.default=function(e){function t(){return o(this,e.apply(this,arguments))}return r(t,e),t.prototype.render=function(e){var t=e.minute,n=e.cx,o=e.cy,r=e.r,l=e.filter,f=(0,u.min2deg)(t),s=(0,u.computeXY)(n,o,(0,u.perc)(r,-20),f),a=(0,u.computeXY)(n,o,(0,u.perc)(r,95),f);return(0,i.h)("line",{x1:s.x,y1:s.y,x2:a.x,y2:a.y,filter:l,style:{stroke:c.color.minute,"stroke-width":r/16}})},t}(i.Component)}});
//# sourceMappingURL=bundle.92632.js.map