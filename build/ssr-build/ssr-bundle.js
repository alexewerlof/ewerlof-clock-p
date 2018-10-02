module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "JkW7");
/******/ })
/************************************************************************/
/******/ ({

/***/ "57Xc":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = undefined;

var _preact = __webpack_require__("KM04");

var _settings = __webpack_require__("WH8d");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ShadowFilter = function (_Component) {
    _inherits(ShadowFilter, _Component);

    function ShadowFilter() {
        _classCallCheck(this, ShadowFilter);

        return _possibleConstructorReturn(this, _Component.apply(this, arguments));
    }

    ShadowFilter.prototype.render = function render(_ref) {
        var id = _ref.id,
            dy = _ref.dy;

        return (0, _preact.h)(
            'filter',
            { id: id, x: '0%', y: '0%', width: '100%', height: '100%', filterUnits: 'userSpaceOnUse' },
            (0, _preact.h)('feDropShadow', { dx: '0', dy: dy, stdDeviation: '2', floodColor: _settings.color.shadow, floodOpacity: '0.9' })
        );
    };

    return ShadowFilter;
}(_preact.Component);

exports.default = ShadowFilter;

/***/ }),

/***/ "9irV":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = undefined;

var _preact = __webpack_require__("KM04");

var _util = __webpack_require__("jHzk");

var _settings = __webpack_require__("WH8d");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SecondHand = function (_Component) {
    _inherits(SecondHand, _Component);

    function SecondHand() {
        _classCallCheck(this, SecondHand);

        return _possibleConstructorReturn(this, _Component.apply(this, arguments));
    }

    SecondHand.prototype.render = function render(_ref) {
        var second = _ref.second,
            cx = _ref.cx,
            cy = _ref.cy,
            r = _ref.r,
            filter = _ref.filter;

        var rotation = (0, _util.sec2deg)(second);
        var start = (0, _util.computeXY)(cx, cy, (0, _util.perc)(r, -20), rotation);
        var end = (0, _util.computeXY)(cx, cy, (0, _util.perc)(r, 95), rotation);
        return (0, _preact.h)(
            'g',
            { filter: filter },
            (0, _preact.h)('line', {
                x1: start.x,
                y1: start.y,
                x2: end.x,
                y2: end.y,
                style: { stroke: _settings.color.second, 'stroke-width': r / 40 }
            }),
            (0, _preact.h)('circle', { cx: cx, cy: cy, r: r / 20, fill: _settings.color.second })
        );
    };

    return SecondHand;
}(_preact.Component);

exports.default = SecondHand;

/***/ }),

/***/ "BsCE":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = undefined;

var _preact = __webpack_require__("KM04");

var _motor = __webpack_require__("cE2F");

var motor = _interopRequireWildcard(_motor);

var _face = __webpack_require__("r9wz");

var _face2 = _interopRequireDefault(_face);

var _shadowFilter = __webpack_require__("57Xc");

var _shadowFilter2 = _interopRequireDefault(_shadowFilter);

var _hourHand = __webpack_require__("YYfd");

var _hourHand2 = _interopRequireDefault(_hourHand);

var _minuteHand = __webpack_require__("woU2");

var _minuteHand2 = _interopRequireDefault(_minuteHand);

var _secondHand = __webpack_require__("9irV");

var _secondHand2 = _interopRequireDefault(_secondHand);

var _util = __webpack_require__("jHzk");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Clock = function (_Component) {
    _inherits(Clock, _Component);

    function Clock() {
        _classCallCheck(this, Clock);

        var _this = _possibleConstructorReturn(this, _Component.call(this));

        _this.state.now = new Date();
        if (typeof document !== "undefined") {
            _this.state.clientWidth = document.body.clientWidth;
            _this.state.clientHeight = document.body.clientHeight;
        } else {
            _this.state.clientWidth = 100;
            _this.state.clientHeight = 100;
        }
        _this.onResize = _this.onResize.bind(_this);
        motor.ontick(function () {
            _this.setState({ now: new Date() });
        });
        return _this;
    }

    Clock.prototype.onResize = function onResize() {
        this.setState({
            clientWidth: document.body.clientWidth,
            clientHeight: document.body.clientHeight
        });
    };

    Clock.prototype.componentDidMount = function componentDidMount() {
        this.onResize();
        if (typeof window !== "undefined") {
            window.addEventListener('resize', this.onResize);
        }
        motor.start();
    };

    Clock.prototype.componentWillUnmount = function componentWillUnmount() {
        if (typeof window !== "undefined") {
            window.removeEventListener('resize', this.onResize);
        }
        motor.stop();
    };

    Clock.prototype.render = function render(_ref, _ref2) {
        var _ref$shadow = _ref.shadow,
            shadow = _ref$shadow === undefined ? false : _ref$shadow,
            _ref$continuous = _ref.continuous,
            continuous = _ref$continuous === undefined ? true : _ref$continuous;
        var now = _ref2.now,
            clientWidth = _ref2.clientWidth,
            clientHeight = _ref2.clientHeight;

        var second = now.getSeconds() + now.getMilliseconds() / 1000;
        var minute = now.getMinutes() + second / 60;
        var hour = now.getHours() + minute / 60;
        if (!continuous) {
            second = Math.floor(second);
            minute = Math.floor(minute);
            hour = Math.floor(hour);
        }
        var margin = Math.min(clientWidth, clientHeight) / 20;
        var width = clientWidth - margin * 2;
        var height = clientHeight - margin * 2;
        var cx = width / 2;
        var cy = height / 2;
        var r = Math.min(width, height) / 2;
        return (0, _preact.h)(
            'svg',
            {
                width: width,
                height: height,
                style: 'margin:' + margin + 'px' },
            shadow && (0, _preact.h)(
                'defs',
                null,
                (0, _preact.h)(_shadowFilter2.default, { id: 'hourShadow', dy: (0, _util.perc)(r, 1) }),
                (0, _preact.h)(_shadowFilter2.default, { id: 'minuteShadow', dy: (0, _util.perc)(r, 2) }),
                (0, _preact.h)(_shadowFilter2.default, { id: 'secondShadow', dy: (0, _util.perc)(r, 3) })
            ),
            (0, _preact.h)(_face2.default, { cx: cx, cy: cy, r: r }),
            (0, _preact.h)(_hourHand2.default, { hour: hour, cx: cx, cy: cy, r: r, filter: shadow && 'url(#hourShadow)' }),
            (0, _preact.h)(_minuteHand2.default, { minute: minute, cx: cx, cy: cy, r: r, filter: shadow && 'url(#minuteShadow)' }),
            (0, _preact.h)(_secondHand2.default, { second: second, cx: cx, cy: cy, r: r, filter: shadow && 'url(#secondShadow)' })
        );
    };

    return Clock;
}(_preact.Component);

exports.default = Clock;

/***/ }),

/***/ "JkW7":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

__webpack_require__("rq4c");

var _app = __webpack_require__("qLaj");

var _app2 = _interopRequireDefault(_app);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _app2.default;

/***/ }),

/***/ "KM04":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


!function () {
  "use strict";
  function e(e, t) {
    var n,
        o,
        r,
        i,
        l = M;for (i = arguments.length; i-- > 2;) {
      T.push(arguments[i]);
    }t && null != t.children && (T.length || T.push(t.children), delete t.children);while (T.length) {
      if ((o = T.pop()) && void 0 !== o.pop) for (i = o.length; i--;) {
        T.push(o[i]);
      } else "boolean" == typeof o && (o = null), (r = "function" != typeof e) && (null == o ? o = "" : "number" == typeof o ? o += "" : "string" != typeof o && (r = !1)), r && n ? l[l.length - 1] += o : l === M ? l = [o] : l.push(o), n = r;
    }var a = new S();return a.nodeName = e, a.children = l, a.attributes = null == t ? void 0 : t, a.key = null == t ? void 0 : t.key, void 0 !== L.vnode && L.vnode(a), a;
  }function t(e, t) {
    for (var n in t) {
      e[n] = t[n];
    }return e;
  }function n(n, o) {
    return e(n.nodeName, t(t({}, n.attributes), o), arguments.length > 2 ? [].slice.call(arguments, 2) : n.children);
  }function o(e) {
    !e.__d && (e.__d = !0) && 1 == D.push(e) && (L.debounceRendering || P)(r);
  }function r() {
    var e,
        t = D;D = [];while (e = t.pop()) {
      e.__d && C(e);
    }
  }function i(e, t, n) {
    return "string" == typeof t || "number" == typeof t ? void 0 !== e.splitText : "string" == typeof t.nodeName ? !e._componentConstructor && l(e, t.nodeName) : n || e._componentConstructor === t.nodeName;
  }function l(e, t) {
    return e.__n === t || e.nodeName.toLowerCase() === t.toLowerCase();
  }function a(e) {
    var n = t({}, e.attributes);n.children = e.children;var o = e.nodeName.defaultProps;if (void 0 !== o) for (var r in o) {
      void 0 === n[r] && (n[r] = o[r]);
    }return n;
  }function p(e, t) {
    var n = t ? document.createElementNS("http://www.w3.org/2000/svg", e) : document.createElement(e);return n.__n = e, n;
  }function s(e) {
    var t = e.parentNode;t && t.removeChild(e);
  }function u(e, t, n, o, r) {
    if ("className" === t && (t = "class"), "key" === t) ;else if ("ref" === t) n && n(null), o && o(e);else if ("class" !== t || r) {
      if ("style" === t) {
        if (o && "string" != typeof o && "string" != typeof n || (e.style.cssText = o || ""), o && "object" == typeof o) {
          if ("string" != typeof n) for (var i in n) {
            i in o || (e.style[i] = "");
          }for (var i in o) {
            e.style[i] = "number" == typeof o[i] && !1 === W.test(i) ? o[i] + "px" : o[i];
          }
        }
      } else if ("dangerouslySetInnerHTML" === t) o && (e.innerHTML = o.__html || "");else if ("o" == t[0] && "n" == t[1]) {
        var l = t !== (t = t.replace(/Capture$/, ""));t = t.toLowerCase().substring(2), o ? n || e.addEventListener(t, c, l) : e.removeEventListener(t, c, l), (e.__l || (e.__l = {}))[t] = o;
      } else if ("list" !== t && "type" !== t && !r && t in e) {
        try {
          e[t] = null == o ? "" : o;
        } catch (e) {}null != o && !1 !== o || "spellcheck" == t || e.removeAttribute(t);
      } else {
        var a = r && t !== (t = t.replace(/^xlink:?/, ""));null == o || !1 === o ? a ? e.removeAttributeNS("http://www.w3.org/1999/xlink", t.toLowerCase()) : e.removeAttribute(t) : "function" != typeof o && (a ? e.setAttributeNS("http://www.w3.org/1999/xlink", t.toLowerCase(), o) : e.setAttribute(t, o));
      }
    } else e.className = o || "";
  }function c(e) {
    return this.__l[e.type](L.event && L.event(e) || e);
  }function _() {
    var e;while (e = E.pop()) {
      L.afterMount && L.afterMount(e), e.componentDidMount && e.componentDidMount();
    }
  }function d(e, t, n, o, r, i) {
    V++ || (A = null != r && void 0 !== r.ownerSVGElement, H = null != e && !("__preactattr_" in e));var l = f(e, t, n, o, i);return r && l.parentNode !== r && r.appendChild(l), --V || (H = !1, i || _()), l;
  }function f(e, t, n, o, r) {
    var i = e,
        a = A;if (null != t && "boolean" != typeof t || (t = ""), "string" == typeof t || "number" == typeof t) return e && void 0 !== e.splitText && e.parentNode && (!e._component || r) ? e.nodeValue != t && (e.nodeValue = t) : (i = document.createTextNode(t), e && (e.parentNode && e.parentNode.replaceChild(i, e), m(e, !0))), i.__preactattr_ = !0, i;var s = t.nodeName;if ("function" == typeof s) return x(e, t, n, o);if (A = "svg" === s || "foreignObject" !== s && A, s += "", (!e || !l(e, s)) && (i = p(s, A), e)) {
      while (e.firstChild) {
        i.appendChild(e.firstChild);
      }e.parentNode && e.parentNode.replaceChild(i, e), m(e, !0);
    }var u = i.firstChild,
        c = i.__preactattr_,
        _ = t.children;if (null == c) {
      c = i.__preactattr_ = {};for (var d = i.attributes, f = d.length; f--;) {
        c[d[f].name] = d[f].value;
      }
    }return !H && _ && 1 === _.length && "string" == typeof _[0] && null != u && void 0 !== u.splitText && null == u.nextSibling ? u.nodeValue != _[0] && (u.nodeValue = _[0]) : (_ && _.length || null != u) && h(i, _, n, o, H || null != c.dangerouslySetInnerHTML), b(i, t.attributes, c), A = a, i;
  }function h(e, t, n, o, r) {
    var l,
        a,
        p,
        u,
        c,
        _ = e.childNodes,
        d = [],
        h = {},
        v = 0,
        b = 0,
        y = _.length,
        g = 0,
        w = t ? t.length : 0;if (0 !== y) for (var C = 0; C < y; C++) {
      var x = _[C],
          N = x.__preactattr_,
          k = w && N ? x._component ? x._component.__k : N.key : null;null != k ? (v++, h[k] = x) : (N || (void 0 !== x.splitText ? !r || x.nodeValue.trim() : r)) && (d[g++] = x);
    }if (0 !== w) for (var C = 0; C < w; C++) {
      u = t[C], c = null;var k = u.key;if (null != k) v && void 0 !== h[k] && (c = h[k], h[k] = void 0, v--);else if (b < g) for (l = b; l < g; l++) {
        if (void 0 !== d[l] && i(a = d[l], u, r)) {
          c = a, d[l] = void 0, l === g - 1 && g--, l === b && b++;break;
        }
      }c = f(c, u, n, o), p = _[C], c && c !== e && c !== p && (null == p ? e.appendChild(c) : c === p.nextSibling ? s(p) : e.insertBefore(c, p));
    }if (v) for (var C in h) {
      void 0 !== h[C] && m(h[C], !1);
    }while (b <= g) {
      void 0 !== (c = d[g--]) && m(c, !1);
    }
  }function m(e, t) {
    var n = e._component;n ? N(n) : (null != e.__preactattr_ && e.__preactattr_.ref && e.__preactattr_.ref(null), !1 !== t && null != e.__preactattr_ || s(e), v(e));
  }function v(e) {
    e = e.lastChild;while (e) {
      var t = e.previousSibling;m(e, !0), e = t;
    }
  }function b(e, t, n) {
    var o;for (o in n) {
      t && null != t[o] || null == n[o] || u(e, o, n[o], n[o] = void 0, A);
    }for (o in t) {
      "children" === o || "innerHTML" === o || o in n && t[o] === ("value" === o || "checked" === o ? e[o] : n[o]) || u(e, o, n[o], n[o] = t[o], A);
    }
  }function y(e, t, n) {
    var o,
        r = B.length;e.prototype && e.prototype.render ? (o = new e(t, n), k.call(o, t, n)) : (o = new k(t, n), o.constructor = e, o.render = g);while (r--) {
      if (B[r].constructor === e) return o.__b = B[r].__b, B.splice(r, 1), o;
    }return o;
  }function g(e, t, n) {
    return this.constructor(e, n);
  }function w(e, t, n, r, i) {
    e.__x || (e.__x = !0, e.__r = t.ref, e.__k = t.key, delete t.ref, delete t.key, void 0 === e.constructor.getDerivedStateFromProps && (!e.base || i ? e.componentWillMount && e.componentWillMount() : e.componentWillReceiveProps && e.componentWillReceiveProps(t, r)), r && r !== e.context && (e.__c || (e.__c = e.context), e.context = r), e.__p || (e.__p = e.props), e.props = t, e.__x = !1, 0 !== n && (1 !== n && !1 === L.syncComponentUpdates && e.base ? o(e) : C(e, 1, i)), e.__r && e.__r(e));
  }function C(e, n, o, r) {
    if (!e.__x) {
      var i,
          l,
          p,
          s = e.props,
          u = e.state,
          c = e.context,
          f = e.__p || s,
          h = e.__s || u,
          v = e.__c || c,
          b = e.base,
          g = e.__b,
          x = b || g,
          k = e._component,
          U = !1,
          S = v;if (e.constructor.getDerivedStateFromProps && (u = t(t({}, u), e.constructor.getDerivedStateFromProps(s, u)), e.state = u), b && (e.props = f, e.state = h, e.context = v, 2 !== n && e.shouldComponentUpdate && !1 === e.shouldComponentUpdate(s, u, c) ? U = !0 : e.componentWillUpdate && e.componentWillUpdate(s, u, c), e.props = s, e.state = u, e.context = c), e.__p = e.__s = e.__c = e.__b = null, e.__d = !1, !U) {
        i = e.render(s, u, c), e.getChildContext && (c = t(t({}, c), e.getChildContext())), b && e.getSnapshotBeforeUpdate && (S = e.getSnapshotBeforeUpdate(f, h));var T,
            M,
            P = i && i.nodeName;if ("function" == typeof P) {
          var W = a(i);l = k, l && l.constructor === P && W.key == l.__k ? w(l, W, 1, c, !1) : (T = l, e._component = l = y(P, W, c), l.__b = l.__b || g, l.__u = e, w(l, W, 0, c, !1), C(l, 1, o, !0)), M = l.base;
        } else p = x, T = k, T && (p = e._component = null), (x || 1 === n) && (p && (p._component = null), M = d(p, i, c, o || !b, x && x.parentNode, !0));if (x && M !== x && l !== k) {
          var D = x.parentNode;D && M !== D && (D.replaceChild(M, x), T || (x._component = null, m(x, !1)));
        }if (T && N(T), e.base = M, M && !r) {
          var A = e,
              H = e;while (H = H.__u) {
            (A = H).base = M;
          }M._component = A, M._componentConstructor = A.constructor;
        }
      }!b || o ? E.unshift(e) : U || (e.componentDidUpdate && e.componentDidUpdate(f, h, S), L.afterUpdate && L.afterUpdate(e));while (e.__h.length) {
        e.__h.pop().call(e);
      }V || r || _();
    }
  }function x(e, t, n, o) {
    var r = e && e._component,
        i = r,
        l = e,
        p = r && e._componentConstructor === t.nodeName,
        s = p,
        u = a(t);while (r && !s && (r = r.__u)) {
      s = r.constructor === t.nodeName;
    }return r && s && (!o || r._component) ? (w(r, u, 3, n, o), e = r.base) : (i && !p && (N(i), e = l = null), r = y(t.nodeName, u, n), e && !r.__b && (r.__b = e, l = null), w(r, u, 1, n, o), e = r.base, l && e !== l && (l._component = null, m(l, !1))), e;
  }function N(e) {
    L.beforeUnmount && L.beforeUnmount(e);var t = e.base;e.__x = !0, e.componentWillUnmount && e.componentWillUnmount(), e.base = null;var n = e._component;n ? N(n) : t && (t.__preactattr_ && t.__preactattr_.ref && t.__preactattr_.ref(null), e.__b = t, s(t), B.push(e), v(t)), e.__r && e.__r(null);
  }function k(e, t) {
    this.__d = !0, this.context = t, this.props = e, this.state = this.state || {}, this.__h = [];
  }function U(e, t, n) {
    return d(n, e, {}, !1, t, !1);
  }var S = function S() {},
      L = {},
      T = [],
      M = [],
      P = "function" == typeof Promise ? Promise.resolve().then.bind(Promise.resolve()) : setTimeout,
      W = /acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i,
      D = [],
      E = [],
      V = 0,
      A = !1,
      H = !1,
      B = [];t(k.prototype, { setState: function setState(e, n) {
      this.__s || (this.__s = this.state), this.state = t(t({}, this.state), "function" == typeof e ? e(this.state, this.props) : e), n && this.__h.push(n), o(this);
    }, forceUpdate: function forceUpdate(e) {
      e && this.__h.push(e), C(this, 2);
    }, render: function render() {} });var F = { h: e, createElement: e, cloneElement: n, Component: k, render: U, rerender: r, options: L }; true ? module.exports = F : self.preact = F;
}();
//# sourceMappingURL=preact.min.js.map

/***/ }),

/***/ "WH8d":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _require = __webpack_require__("jHzk"),
    rgb = _require.rgb,
    gray = _require.gray;

var color = exports.color = {
	bg: gray(227),
	face: gray(240),
	hour: gray(60),
	minute: gray(60),
	second: rgb(213, 74, 62),
	indicator: gray(60),
	shadow: gray(50)
};

/***/ }),

/***/ "YYfd":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = undefined;

var _preact = __webpack_require__("KM04");

var _util = __webpack_require__("jHzk");

var _settings = __webpack_require__("WH8d");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HourHand = function (_Component) {
    _inherits(HourHand, _Component);

    function HourHand() {
        _classCallCheck(this, HourHand);

        return _possibleConstructorReturn(this, _Component.apply(this, arguments));
    }

    HourHand.prototype.render = function render(_ref) {
        var hour = _ref.hour,
            cx = _ref.cx,
            cy = _ref.cy,
            r = _ref.r,
            filter = _ref.filter;

        var rotation = (0, _util.hour2deg)(hour);
        var start = (0, _util.computeXY)(cx, cy, (0, _util.perc)(r, -20), rotation);
        var end = (0, _util.computeXY)(cx, cy, (0, _util.perc)(r, 67), rotation);
        return (0, _preact.h)('line', {
            x1: start.x,
            y1: start.y,
            x2: end.x,
            y2: end.y,
            filter: filter,
            style: { stroke: _settings.color.hour, 'stroke-width': (0, _util.perc)(r, 10) }
        });
    };

    return HourHand;
}(_preact.Component);

exports.default = HourHand;

/***/ }),

/***/ "cE2F":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.ontick = ontick;
exports.start = start;
exports.stop = stop;
var intervalId = void 0,
    updateTimeCallback = void 0;

function tick() {
	intervalId = requestAnimationFrame(function () {
		callEventListener();
		tick();
	});
}

function callEventListener() {
	if (typeof updateTimeCallback === 'function') {
		updateTimeCallback(new Date());
	}
}

function ontick(eventListener) {
	if (typeof eventListener === 'function') {
		updateTimeCallback = eventListener;
	} else {
		updateTimeCallback = undefined;
	}
}

function start() {
	callEventListener();
	tick();
}

function stop() {
	clearInterval(intervalId);
}

/***/ }),

/***/ "jHzk":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.computeXY = computeXY;
exports.perc = perc;
exports.diffProps = diffProps;
var toRadians = exports.toRadians = function toRadians(angle) {
	return angle * Math.PI / 180;
};
var toDegrees = exports.toDegrees = function toDegrees(angle) {
	return angle * 180 / Math.PI;
};

var hour2deg = exports.hour2deg = function hour2deg(hour) {
	return hour * 30;
};

var min2deg = exports.min2deg = function min2deg(min) {
	return min * 6;
};

var sec2deg = exports.sec2deg = min2deg;

var rgb = exports.rgb = function rgb(r, g, b) {
	return "rgb(" + r + ", " + g + ", " + b + ")";
};

var gray = exports.gray = function gray(g) {
	return rgb(g, g, g);
};

function computeXY(cx, cy, r, rotation) {
	return {
		x: cx + Math.sin(toRadians(rotation)) * r,
		y: cy - Math.cos(toRadians(rotation)) * r
	};
}

// Calculate percentage on an absolute value
function perc(x, percentage) {
	var natural = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

	var ret = x * percentage / 100;
	return natural ? Math.round(ret) : ret;
}

function diffProps(currentProps, nextProps) {
	for (var _len = arguments.length, keysArr = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
		keysArr[_key - 2] = arguments[_key];
	}

	return keysArr.some(function (key) {
		return currentProps[key] != nextProps[key];
	});
}

/***/ }),

/***/ "qLaj":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = undefined;

var _preact = __webpack_require__("KM04");

var _clock = __webpack_require__("BsCE");

var _clock2 = _interopRequireDefault(_clock);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _ref = (0, _preact.h)(_clock2.default, null);

var App = function (_Component) {
	_inherits(App, _Component);

	function App() {
		_classCallCheck(this, App);

		return _possibleConstructorReturn(this, _Component.apply(this, arguments));
	}

	App.prototype.render = function render() {
		return _ref;
	};

	return App;
}(_preact.Component);

exports.default = App;

/***/ }),

/***/ "r9wz":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = undefined;

var _preact = __webpack_require__("KM04");

var _indicator = __webpack_require__("to4/");

var _indicator2 = _interopRequireDefault(_indicator);

var _settings = __webpack_require__("WH8d");

var _util = __webpack_require__("jHzk");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Face = function (_Component) {
    _inherits(Face, _Component);

    function Face() {
        _classCallCheck(this, Face);

        return _possibleConstructorReturn(this, _Component.apply(this, arguments));
    }

    Face.prototype.render = function render(_ref) {
        var cx = _ref.cx,
            cy = _ref.cy,
            r = _ref.r;

        var indicators = [];
        for (var i = 0; i < 60; i++) {
            if (i % 5) {
                // the little ones
                indicators.push((0, _preact.h)(_indicator2.default, {
                    cx: cx,
                    cy: cy,
                    r: r,
                    length: (0, _util.perc)(r, 12),
                    width: (0, _util.perc)(r, 2.7),
                    rotation: (0, _util.min2deg)(i)
                }));
            } else {
                // the big ones
                indicators.push((0, _preact.h)(_indicator2.default, {
                    cx: cx,
                    cy: cy,
                    r: r,
                    length: (0, _util.perc)(r, 25),
                    width: (0, _util.perc)(r, 6),
                    rotation: (0, _util.min2deg)(i)
                }));
            }
        }
        return (0, _preact.h)(
            'g',
            null,
            (0, _preact.h)('circle', { cx: cx, cy: cy, r: r, fill: _settings.color.face }),
            indicators
        );
    };

    return Face;
}(_preact.Component);

exports.default = Face;

/***/ }),

/***/ "rq4c":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "to4/":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = undefined;

var _preact = __webpack_require__("KM04");

var _util = __webpack_require__("jHzk");

var _settings = __webpack_require__("WH8d");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SecondHand = function (_Component) {
    _inherits(SecondHand, _Component);

    function SecondHand() {
        _classCallCheck(this, SecondHand);

        return _possibleConstructorReturn(this, _Component.apply(this, arguments));
    }

    SecondHand.prototype.render = function render(_ref) {
        var cx = _ref.cx,
            cy = _ref.cy,
            rotation = _ref.rotation,
            r = _ref.r,
            width = _ref.width,
            length = _ref.length;

        var start = (0, _util.computeXY)(cx, cy, r - length, rotation);
        var end = (0, _util.computeXY)(cx, cy, (0, _util.perc)(r, 95), rotation);
        return (0, _preact.h)('line', {
            x1: start.x,
            y1: start.y,
            x2: end.x,
            y2: end.y,
            style: { stroke: _settings.color.indicator, 'stroke-width': width }
        });
    };

    return SecondHand;
}(_preact.Component);

exports.default = SecondHand;

/***/ }),

/***/ "woU2":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = undefined;

var _preact = __webpack_require__("KM04");

var _util = __webpack_require__("jHzk");

var _settings = __webpack_require__("WH8d");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MinuteHand = function (_Component) {
    _inherits(MinuteHand, _Component);

    function MinuteHand() {
        _classCallCheck(this, MinuteHand);

        return _possibleConstructorReturn(this, _Component.apply(this, arguments));
    }

    MinuteHand.prototype.render = function render(_ref) {
        var minute = _ref.minute,
            cx = _ref.cx,
            cy = _ref.cy,
            r = _ref.r,
            filter = _ref.filter;

        var rotation = (0, _util.min2deg)(minute);
        var start = (0, _util.computeXY)(cx, cy, (0, _util.perc)(r, -20), rotation);
        var end = (0, _util.computeXY)(cx, cy, (0, _util.perc)(r, 95), rotation);
        return (0, _preact.h)('line', {
            x1: start.x,
            y1: start.y,
            x2: end.x,
            y2: end.y,
            filter: filter,
            style: { stroke: _settings.color.minute, 'stroke-width': r / 16 }
        });
    };

    return MinuteHand;
}(_preact.Component);

exports.default = MinuteHand;

/***/ })

/******/ });
//# sourceMappingURL=ssr-bundle.js.map