var cn = (e) => {
  throw TypeError(e);
};
var sr = (e, t, r) => t.has(e) || cn("Cannot " + r);
var v = (e, t, r) => (sr(e, t, "read from private field"), r ? r.call(e) : t.get(e)), V = (e, t, r) => t.has(e) ? cn("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), L = (e, t, r, n) => (sr(e, t, "write to private field"), n ? n.call(e, r) : t.set(e, r), r), G = (e, t, r) => (sr(e, t, "access private method"), r);
import * as p from "react";
import Bn, { useState as Z, createContext as Ks, useContext as Hs, useEffect as Fr, forwardRef as $n, createElement as hr } from "react";
import Qs from "src/client";
import "react-dom";
var Pt = { exports: {} }, at = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var dn;
function Ys() {
  if (dn) return at;
  dn = 1;
  var e = Bn, t = Symbol.for("react.element"), r = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, a = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, i = { key: !0, ref: !0, __self: !0, __source: !0 };
  function c(o, f, h) {
    var l, u = {}, m = null, g = null;
    h !== void 0 && (m = "" + h), f.key !== void 0 && (m = "" + f.key), f.ref !== void 0 && (g = f.ref);
    for (l in f) n.call(f, l) && !i.hasOwnProperty(l) && (u[l] = f[l]);
    if (o && o.defaultProps) for (l in f = o.defaultProps, f) u[l] === void 0 && (u[l] = f[l]);
    return { $$typeof: t, type: o, key: m, ref: g, props: u, _owner: a.current };
  }
  return at.Fragment = r, at.jsx = c, at.jsxs = c, at;
}
var it = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var un;
function Js() {
  return un || (un = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Bn, t = Symbol.for("react.element"), r = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), a = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), c = Symbol.for("react.provider"), o = Symbol.for("react.context"), f = Symbol.for("react.forward_ref"), h = Symbol.for("react.suspense"), l = Symbol.for("react.suspense_list"), u = Symbol.for("react.memo"), m = Symbol.for("react.lazy"), g = Symbol.for("react.offscreen"), w = Symbol.iterator, N = "@@iterator";
    function x(d) {
      if (d === null || typeof d != "object")
        return null;
      var y = w && d[w] || d[N];
      return typeof y == "function" ? y : null;
    }
    var C = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function k(d) {
      {
        for (var y = arguments.length, _ = new Array(y > 1 ? y - 1 : 0), P = 1; P < y; P++)
          _[P - 1] = arguments[P];
        E("error", d, _);
      }
    }
    function E(d, y, _) {
      {
        var P = C.ReactDebugCurrentFrame, q = P.getStackAddendum();
        q !== "" && (y += "%s", _ = _.concat([q]));
        var W = _.map(function(D) {
          return String(D);
        });
        W.unshift("Warning: " + y), Function.prototype.apply.call(console[d], console, W);
      }
    }
    var A = !1, Q = !1, H = !1, ee = !1, R = !1, b;
    b = Symbol.for("react.module.reference");
    function S(d) {
      return !!(typeof d == "string" || typeof d == "function" || d === n || d === i || R || d === a || d === h || d === l || ee || d === g || A || Q || H || typeof d == "object" && d !== null && (d.$$typeof === m || d.$$typeof === u || d.$$typeof === c || d.$$typeof === o || d.$$typeof === f || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      d.$$typeof === b || d.getModuleId !== void 0));
    }
    function U(d, y, _) {
      var P = d.displayName;
      if (P)
        return P;
      var q = y.displayName || y.name || "";
      return q !== "" ? _ + "(" + q + ")" : _;
    }
    function j(d) {
      return d.displayName || "Context";
    }
    function $(d) {
      if (d == null)
        return null;
      if (typeof d.tag == "number" && k("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof d == "function")
        return d.displayName || d.name || null;
      if (typeof d == "string")
        return d;
      switch (d) {
        case n:
          return "Fragment";
        case r:
          return "Portal";
        case i:
          return "Profiler";
        case a:
          return "StrictMode";
        case h:
          return "Suspense";
        case l:
          return "SuspenseList";
      }
      if (typeof d == "object")
        switch (d.$$typeof) {
          case o:
            var y = d;
            return j(y) + ".Consumer";
          case c:
            var _ = d;
            return j(_._context) + ".Provider";
          case f:
            return U(d, d.render, "ForwardRef");
          case u:
            var P = d.displayName || null;
            return P !== null ? P : $(d.type) || "Memo";
          case m: {
            var q = d, W = q._payload, D = q._init;
            try {
              return $(D(W));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var ae = Object.assign, be = 0, Te, rt, Ue, we, nt, de, $r;
    function Gr() {
    }
    Gr.__reactDisabledLog = !0;
    function bs() {
      {
        if (be === 0) {
          Te = console.log, rt = console.info, Ue = console.warn, we = console.error, nt = console.group, de = console.groupCollapsed, $r = console.groupEnd;
          var d = {
            configurable: !0,
            enumerable: !0,
            value: Gr,
            writable: !0
          };
          Object.defineProperties(console, {
            info: d,
            log: d,
            warn: d,
            error: d,
            group: d,
            groupCollapsed: d,
            groupEnd: d
          });
        }
        be++;
      }
    }
    function ws() {
      {
        if (be--, be === 0) {
          var d = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: ae({}, d, {
              value: Te
            }),
            info: ae({}, d, {
              value: rt
            }),
            warn: ae({}, d, {
              value: Ue
            }),
            error: ae({}, d, {
              value: we
            }),
            group: ae({}, d, {
              value: nt
            }),
            groupCollapsed: ae({}, d, {
              value: de
            }),
            groupEnd: ae({}, d, {
              value: $r
            })
          });
        }
        be < 0 && k("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Yt = C.ReactCurrentDispatcher, Jt;
    function _t(d, y, _) {
      {
        if (Jt === void 0)
          try {
            throw Error();
          } catch (q) {
            var P = q.stack.trim().match(/\n( *(at )?)/);
            Jt = P && P[1] || "";
          }
        return `
` + Jt + d;
      }
    }
    var Xt = !1, kt;
    {
      var js = typeof WeakMap == "function" ? WeakMap : Map;
      kt = new js();
    }
    function Kr(d, y) {
      if (!d || Xt)
        return "";
      {
        var _ = kt.get(d);
        if (_ !== void 0)
          return _;
      }
      var P;
      Xt = !0;
      var q = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var W;
      W = Yt.current, Yt.current = null, bs();
      try {
        if (y) {
          var D = function() {
            throw Error();
          };
          if (Object.defineProperty(D.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(D, []);
            } catch (ie) {
              P = ie;
            }
            Reflect.construct(d, [], D);
          } else {
            try {
              D.call();
            } catch (ie) {
              P = ie;
            }
            d.call(D.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (ie) {
            P = ie;
          }
          d();
        }
      } catch (ie) {
        if (ie && P && typeof ie.stack == "string") {
          for (var F = ie.stack.split(`
`), ne = P.stack.split(`
`), Y = F.length - 1, J = ne.length - 1; Y >= 1 && J >= 0 && F[Y] !== ne[J]; )
            J--;
          for (; Y >= 1 && J >= 0; Y--, J--)
            if (F[Y] !== ne[J]) {
              if (Y !== 1 || J !== 1)
                do
                  if (Y--, J--, J < 0 || F[Y] !== ne[J]) {
                    var ue = `
` + F[Y].replace(" at new ", " at ");
                    return d.displayName && ue.includes("<anonymous>") && (ue = ue.replace("<anonymous>", d.displayName)), typeof d == "function" && kt.set(d, ue), ue;
                  }
                while (Y >= 1 && J >= 0);
              break;
            }
        }
      } finally {
        Xt = !1, Yt.current = W, ws(), Error.prepareStackTrace = q;
      }
      var Be = d ? d.displayName || d.name : "", Le = Be ? _t(Be) : "";
      return typeof d == "function" && kt.set(d, Le), Le;
    }
    function Ns(d, y, _) {
      return Kr(d, !1);
    }
    function Cs(d) {
      var y = d.prototype;
      return !!(y && y.isReactComponent);
    }
    function Rt(d, y, _) {
      if (d == null)
        return "";
      if (typeof d == "function")
        return Kr(d, Cs(d));
      if (typeof d == "string")
        return _t(d);
      switch (d) {
        case h:
          return _t("Suspense");
        case l:
          return _t("SuspenseList");
      }
      if (typeof d == "object")
        switch (d.$$typeof) {
          case f:
            return Ns(d.render);
          case u:
            return Rt(d.type, y, _);
          case m: {
            var P = d, q = P._payload, W = P._init;
            try {
              return Rt(W(q), y, _);
            } catch {
            }
          }
        }
      return "";
    }
    var st = Object.prototype.hasOwnProperty, Hr = {}, Qr = C.ReactDebugCurrentFrame;
    function St(d) {
      if (d) {
        var y = d._owner, _ = Rt(d.type, d._source, y ? y.type : null);
        Qr.setExtraStackFrame(_);
      } else
        Qr.setExtraStackFrame(null);
    }
    function Es(d, y, _, P, q) {
      {
        var W = Function.call.bind(st);
        for (var D in d)
          if (W(d, D)) {
            var F = void 0;
            try {
              if (typeof d[D] != "function") {
                var ne = Error((P || "React class") + ": " + _ + " type `" + D + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof d[D] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw ne.name = "Invariant Violation", ne;
              }
              F = d[D](y, D, P, _, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (Y) {
              F = Y;
            }
            F && !(F instanceof Error) && (St(q), k("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", P || "React class", _, D, typeof F), St(null)), F instanceof Error && !(F.message in Hr) && (Hr[F.message] = !0, St(q), k("Failed %s type: %s", _, F.message), St(null));
          }
      }
    }
    var _s = Array.isArray;
    function Zt(d) {
      return _s(d);
    }
    function ks(d) {
      {
        var y = typeof Symbol == "function" && Symbol.toStringTag, _ = y && d[Symbol.toStringTag] || d.constructor.name || "Object";
        return _;
      }
    }
    function Rs(d) {
      try {
        return Yr(d), !1;
      } catch {
        return !0;
      }
    }
    function Yr(d) {
      return "" + d;
    }
    function Jr(d) {
      if (Rs(d))
        return k("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", ks(d)), Yr(d);
    }
    var Xr = C.ReactCurrentOwner, Ss = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Zr, en;
    function Ps(d) {
      if (st.call(d, "ref")) {
        var y = Object.getOwnPropertyDescriptor(d, "ref").get;
        if (y && y.isReactWarning)
          return !1;
      }
      return d.ref !== void 0;
    }
    function As(d) {
      if (st.call(d, "key")) {
        var y = Object.getOwnPropertyDescriptor(d, "key").get;
        if (y && y.isReactWarning)
          return !1;
      }
      return d.key !== void 0;
    }
    function Os(d, y) {
      typeof d.ref == "string" && Xr.current;
    }
    function Ts(d, y) {
      {
        var _ = function() {
          Zr || (Zr = !0, k("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", y));
        };
        _.isReactWarning = !0, Object.defineProperty(d, "key", {
          get: _,
          configurable: !0
        });
      }
    }
    function Ls(d, y) {
      {
        var _ = function() {
          en || (en = !0, k("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", y));
        };
        _.isReactWarning = !0, Object.defineProperty(d, "ref", {
          get: _,
          configurable: !0
        });
      }
    }
    var Fs = function(d, y, _, P, q, W, D) {
      var F = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: d,
        key: y,
        ref: _,
        props: D,
        // Record the component responsible for creating this element.
        _owner: W
      };
      return F._store = {}, Object.defineProperty(F._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(F, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: P
      }), Object.defineProperty(F, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: q
      }), Object.freeze && (Object.freeze(F.props), Object.freeze(F)), F;
    };
    function Ms(d, y, _, P, q) {
      {
        var W, D = {}, F = null, ne = null;
        _ !== void 0 && (Jr(_), F = "" + _), As(y) && (Jr(y.key), F = "" + y.key), Ps(y) && (ne = y.ref, Os(y, q));
        for (W in y)
          st.call(y, W) && !Ss.hasOwnProperty(W) && (D[W] = y[W]);
        if (d && d.defaultProps) {
          var Y = d.defaultProps;
          for (W in Y)
            D[W] === void 0 && (D[W] = Y[W]);
        }
        if (F || ne) {
          var J = typeof d == "function" ? d.displayName || d.name || "Unknown" : d;
          F && Ts(D, J), ne && Ls(D, J);
        }
        return Fs(d, F, ne, q, P, Xr.current, D);
      }
    }
    var er = C.ReactCurrentOwner, tn = C.ReactDebugCurrentFrame;
    function We(d) {
      if (d) {
        var y = d._owner, _ = Rt(d.type, d._source, y ? y.type : null);
        tn.setExtraStackFrame(_);
      } else
        tn.setExtraStackFrame(null);
    }
    var tr;
    tr = !1;
    function rr(d) {
      return typeof d == "object" && d !== null && d.$$typeof === t;
    }
    function rn() {
      {
        if (er.current) {
          var d = $(er.current.type);
          if (d)
            return `

Check the render method of \`` + d + "`.";
        }
        return "";
      }
    }
    function Ds(d) {
      return "";
    }
    var nn = {};
    function Is(d) {
      {
        var y = rn();
        if (!y) {
          var _ = typeof d == "string" ? d : d.displayName || d.name;
          _ && (y = `

Check the top-level render call using <` + _ + ">.");
        }
        return y;
      }
    }
    function sn(d, y) {
      {
        if (!d._store || d._store.validated || d.key != null)
          return;
        d._store.validated = !0;
        var _ = Is(y);
        if (nn[_])
          return;
        nn[_] = !0;
        var P = "";
        d && d._owner && d._owner !== er.current && (P = " It was passed a child from " + $(d._owner.type) + "."), We(d), k('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', _, P), We(null);
      }
    }
    function an(d, y) {
      {
        if (typeof d != "object")
          return;
        if (Zt(d))
          for (var _ = 0; _ < d.length; _++) {
            var P = d[_];
            rr(P) && sn(P, y);
          }
        else if (rr(d))
          d._store && (d._store.validated = !0);
        else if (d) {
          var q = x(d);
          if (typeof q == "function" && q !== d.entries)
            for (var W = q.call(d), D; !(D = W.next()).done; )
              rr(D.value) && sn(D.value, y);
        }
      }
    }
    function qs(d) {
      {
        var y = d.type;
        if (y == null || typeof y == "string")
          return;
        var _;
        if (typeof y == "function")
          _ = y.propTypes;
        else if (typeof y == "object" && (y.$$typeof === f || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        y.$$typeof === u))
          _ = y.propTypes;
        else
          return;
        if (_) {
          var P = $(y);
          Es(_, d.props, "prop", P, d);
        } else if (y.PropTypes !== void 0 && !tr) {
          tr = !0;
          var q = $(y);
          k("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", q || "Unknown");
        }
        typeof y.getDefaultProps == "function" && !y.getDefaultProps.isReactClassApproved && k("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function zs(d) {
      {
        for (var y = Object.keys(d.props), _ = 0; _ < y.length; _++) {
          var P = y[_];
          if (P !== "children" && P !== "key") {
            We(d), k("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", P), We(null);
            break;
          }
        }
        d.ref !== null && (We(d), k("Invalid attribute `ref` supplied to `React.Fragment`."), We(null));
      }
    }
    var on = {};
    function ln(d, y, _, P, q, W) {
      {
        var D = S(d);
        if (!D) {
          var F = "";
          (d === void 0 || typeof d == "object" && d !== null && Object.keys(d).length === 0) && (F += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var ne = Ds();
          ne ? F += ne : F += rn();
          var Y;
          d === null ? Y = "null" : Zt(d) ? Y = "array" : d !== void 0 && d.$$typeof === t ? (Y = "<" + ($(d.type) || "Unknown") + " />", F = " Did you accidentally export a JSX literal instead of a component?") : Y = typeof d, k("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Y, F);
        }
        var J = Ms(d, y, _, q, W);
        if (J == null)
          return J;
        if (D) {
          var ue = y.children;
          if (ue !== void 0)
            if (P)
              if (Zt(ue)) {
                for (var Be = 0; Be < ue.length; Be++)
                  an(ue[Be], d);
                Object.freeze && Object.freeze(ue);
              } else
                k("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              an(ue, d);
        }
        if (st.call(y, "key")) {
          var Le = $(d), ie = Object.keys(y).filter(function(Gs) {
            return Gs !== "key";
          }), nr = ie.length > 0 ? "{key: someKey, " + ie.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!on[Le + nr]) {
            var $s = ie.length > 0 ? "{" + ie.join(": ..., ") + ": ...}" : "{}";
            k(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, nr, Le, $s, Le), on[Le + nr] = !0;
          }
        }
        return d === n ? zs(J) : qs(J), J;
      }
    }
    function Vs(d, y, _) {
      return ln(d, y, _, !0);
    }
    function Us(d, y, _) {
      return ln(d, y, _, !1);
    }
    var Ws = Us, Bs = Vs;
    it.Fragment = n, it.jsx = Ws, it.jsxs = Bs;
  }()), it;
}
var hn;
function Xs() {
  return hn || (hn = 1, process.env.NODE_ENV === "production" ? Pt.exports = Ys() : Pt.exports = Js()), Pt.exports;
}
var s = Xs();
/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function fr() {
  return fr = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, fr.apply(this, arguments);
}
var mr;
(function(e) {
  e.Pop = "POP", e.Push = "PUSH", e.Replace = "REPLACE";
})(mr || (mr = {}));
function T(e, t) {
  if (e === !1 || e === null || typeof e > "u")
    throw new Error(t);
}
function me(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {
    }
  }
}
function pr(e) {
  let {
    pathname: t = "/",
    search: r = "",
    hash: n = ""
  } = e;
  return r && r !== "?" && (t += r.charAt(0) === "?" ? r : "?" + r), n && n !== "#" && (t += n.charAt(0) === "#" ? n : "#" + n), t;
}
function Ut(e) {
  let t = {};
  if (e) {
    let r = e.indexOf("#");
    r >= 0 && (t.hash = e.substr(r), e = e.substr(0, r));
    let n = e.indexOf("?");
    n >= 0 && (t.search = e.substr(n), e = e.substr(0, n)), e && (t.pathname = e);
  }
  return t;
}
var fn;
(function(e) {
  e.data = "data", e.deferred = "deferred", e.redirect = "redirect", e.error = "error";
})(fn || (fn = {}));
function Zs(e, t, r) {
  return r === void 0 && (r = "/"), ea(e, t, r);
}
function ea(e, t, r, n) {
  let a = typeof t == "string" ? Ut(t) : t, i = Ve(a.pathname || "/", r);
  if (i == null)
    return null;
  let c = Gn(e);
  ta(c);
  let o = null;
  for (let f = 0; o == null && f < c.length; ++f) {
    let h = ha(i);
    o = da(c[f], h);
  }
  return o;
}
function Gn(e, t, r, n) {
  t === void 0 && (t = []), r === void 0 && (r = []), n === void 0 && (n = "");
  let a = (i, c, o) => {
    let f = {
      relativePath: o === void 0 ? i.path || "" : o,
      caseSensitive: i.caseSensitive === !0,
      childrenIndex: c,
      route: i
    };
    f.relativePath.startsWith("/") && (T(f.relativePath.startsWith(n), 'Absolute route path "' + f.relativePath + '" nested under path ' + ('"' + n + '" is not valid. An absolute child route path ') + "must start with the combined path of all its parent routes."), f.relativePath = f.relativePath.slice(n.length));
    let h = xe([n, f.relativePath]), l = r.concat(f);
    i.children && i.children.length > 0 && (T(
      // Our types know better, but runtime JS may not!
      // @ts-expect-error
      i.index !== !0,
      "Index routes must not have child routes. Please remove " + ('all child routes from route path "' + h + '".')
    ), Gn(i.children, t, l, h)), !(i.path == null && !i.index) && t.push({
      path: h,
      score: la(h, i.index),
      routesMeta: l
    });
  };
  return e.forEach((i, c) => {
    var o;
    if (i.path === "" || !((o = i.path) != null && o.includes("?")))
      a(i, c);
    else
      for (let f of Kn(i.path))
        a(i, c, f);
  }), t;
}
function Kn(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [r, ...n] = t, a = r.endsWith("?"), i = r.replace(/\?$/, "");
  if (n.length === 0)
    return a ? [i, ""] : [i];
  let c = Kn(n.join("/")), o = [];
  return o.push(...c.map((f) => f === "" ? i : [i, f].join("/"))), a && o.push(...c), o.map((f) => e.startsWith("/") && f === "" ? "/" : f);
}
function ta(e) {
  e.sort((t, r) => t.score !== r.score ? r.score - t.score : ca(t.routesMeta.map((n) => n.childrenIndex), r.routesMeta.map((n) => n.childrenIndex)));
}
const ra = /^:[\w-]+$/, na = 3, sa = 2, aa = 1, ia = 10, oa = -2, mn = (e) => e === "*";
function la(e, t) {
  let r = e.split("/"), n = r.length;
  return r.some(mn) && (n += oa), t && (n += sa), r.filter((a) => !mn(a)).reduce((a, i) => a + (ra.test(i) ? na : i === "" ? aa : ia), n);
}
function ca(e, t) {
  return e.length === t.length && e.slice(0, -1).every((n, a) => n === t[a]) ? (
    // If two routes are siblings, we should try to match the earlier sibling
    // first. This allows people to have fine-grained control over the matching
    // behavior by simply putting routes with identical paths in the order they
    // want them tried.
    e[e.length - 1] - t[t.length - 1]
  ) : (
    // Otherwise, it doesn't really make sense to rank non-siblings by index,
    // so they sort equally.
    0
  );
}
function da(e, t, r) {
  let {
    routesMeta: n
  } = e, a = {}, i = "/", c = [];
  for (let o = 0; o < n.length; ++o) {
    let f = n[o], h = o === n.length - 1, l = i === "/" ? t : t.slice(i.length) || "/", u = gr({
      path: f.relativePath,
      caseSensitive: f.caseSensitive,
      end: h
    }, l), m = f.route;
    if (!u)
      return null;
    Object.assign(a, u.params), c.push({
      // TODO: Can this as be avoided?
      params: a,
      pathname: xe([i, u.pathname]),
      pathnameBase: ga(xe([i, u.pathnameBase])),
      route: m
    }), u.pathnameBase !== "/" && (i = xe([i, u.pathnameBase]));
  }
  return c;
}
function gr(e, t) {
  typeof e == "string" && (e = {
    path: e,
    caseSensitive: !1,
    end: !0
  });
  let [r, n] = ua(e.path, e.caseSensitive, e.end), a = t.match(r);
  if (!a) return null;
  let i = a[0], c = i.replace(/(.)\/+$/, "$1"), o = a.slice(1);
  return {
    params: n.reduce((h, l, u) => {
      let {
        paramName: m,
        isOptional: g
      } = l;
      if (m === "*") {
        let N = o[u] || "";
        c = i.slice(0, i.length - N.length).replace(/(.)\/+$/, "$1");
      }
      const w = o[u];
      return g && !w ? h[m] = void 0 : h[m] = (w || "").replace(/%2F/g, "/"), h;
    }, {}),
    pathname: i,
    pathnameBase: c,
    pattern: e
  };
}
function ua(e, t, r) {
  t === void 0 && (t = !1), r === void 0 && (r = !0), me(e === "*" || !e.endsWith("*") || e.endsWith("/*"), 'Route path "' + e + '" will be treated as if it were ' + ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + e.replace(/\*$/, "/*") + '".'));
  let n = [], a = "^" + e.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (c, o, f) => (n.push({
    paramName: o,
    isOptional: f != null
  }), f ? "/?([^\\/]+)?" : "/([^\\/]+)"));
  return e.endsWith("*") ? (n.push({
    paramName: "*"
  }), a += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : r ? a += "\\/*$" : e !== "" && e !== "/" && (a += "(?:(?=\\/|$))"), [new RegExp(a, t ? void 0 : "i"), n];
}
function ha(e) {
  try {
    return e.split("/").map((t) => decodeURIComponent(t).replace(/\//g, "%2F")).join("/");
  } catch (t) {
    return me(!1, 'The URL path "' + e + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' + ("encoding (" + t + ").")), e;
  }
}
function Ve(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase()))
    return null;
  let r = t.endsWith("/") ? t.length - 1 : t.length, n = e.charAt(r);
  return n && n !== "/" ? null : e.slice(r) || "/";
}
function fa(e, t) {
  t === void 0 && (t = "/");
  let {
    pathname: r,
    search: n = "",
    hash: a = ""
  } = typeof e == "string" ? Ut(e) : e;
  return {
    pathname: r ? r.startsWith("/") ? r : ma(r, t) : t,
    search: va(n),
    hash: xa(a)
  };
}
function ma(e, t) {
  let r = t.replace(/\/+$/, "").split("/");
  return e.split("/").forEach((a) => {
    a === ".." ? r.length > 1 && r.pop() : a !== "." && r.push(a);
  }), r.length > 1 ? r.join("/") : "/";
}
function ar(e, t, r, n) {
  return "Cannot include a '" + e + "' character in a manually specified " + ("`to." + t + "` field [" + JSON.stringify(n) + "].  Please separate it out to the ") + ("`to." + r + "` field. Alternatively you may provide the full path as ") + 'a string in <Link to="..."> and the router will parse it for you.';
}
function pa(e) {
  return e.filter((t, r) => r === 0 || t.route.path && t.route.path.length > 0);
}
function Mr(e, t) {
  let r = pa(e);
  return t ? r.map((n, a) => a === r.length - 1 ? n.pathname : n.pathnameBase) : r.map((n) => n.pathnameBase);
}
function Dr(e, t, r, n) {
  n === void 0 && (n = !1);
  let a;
  typeof e == "string" ? a = Ut(e) : (a = fr({}, e), T(!a.pathname || !a.pathname.includes("?"), ar("?", "pathname", "search", a)), T(!a.pathname || !a.pathname.includes("#"), ar("#", "pathname", "hash", a)), T(!a.search || !a.search.includes("#"), ar("#", "search", "hash", a)));
  let i = e === "" || a.pathname === "", c = i ? "/" : a.pathname, o;
  if (c == null)
    o = r;
  else {
    let u = t.length - 1;
    if (!n && c.startsWith("..")) {
      let m = c.split("/");
      for (; m[0] === ".."; )
        m.shift(), u -= 1;
      a.pathname = m.join("/");
    }
    o = u >= 0 ? t[u] : "/";
  }
  let f = fa(a, o), h = c && c !== "/" && c.endsWith("/"), l = (i || c === ".") && r.endsWith("/");
  return !f.pathname.endsWith("/") && (h || l) && (f.pathname += "/"), f;
}
const xe = (e) => e.join("/").replace(/\/\/+/g, "/"), ga = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"), va = (e) => !e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e, xa = (e) => !e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e;
function ya(e) {
  return e != null && typeof e.status == "number" && typeof e.statusText == "string" && typeof e.internal == "boolean" && "data" in e;
}
const Hn = ["post", "put", "patch", "delete"];
new Set(Hn);
const ba = ["get", ...Hn];
new Set(ba);
/**
 * React Router v6.30.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function It() {
  return It = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, It.apply(this, arguments);
}
const jt = /* @__PURE__ */ p.createContext(null);
process.env.NODE_ENV !== "production" && (jt.displayName = "DataRouter");
const Ir = /* @__PURE__ */ p.createContext(null);
process.env.NODE_ENV !== "production" && (Ir.displayName = "DataRouterState");
const wa = /* @__PURE__ */ p.createContext(null);
process.env.NODE_ENV !== "production" && (wa.displayName = "Await");
const he = /* @__PURE__ */ p.createContext(null);
process.env.NODE_ENV !== "production" && (he.displayName = "Navigation");
const Wt = /* @__PURE__ */ p.createContext(null);
process.env.NODE_ENV !== "production" && (Wt.displayName = "Location");
const pe = /* @__PURE__ */ p.createContext({
  outlet: null,
  matches: [],
  isDataRoute: !1
});
process.env.NODE_ENV !== "production" && (pe.displayName = "Route");
const qr = /* @__PURE__ */ p.createContext(null);
process.env.NODE_ENV !== "production" && (qr.displayName = "RouteError");
function ja(e, t) {
  let {
    relative: r
  } = t === void 0 ? {} : t;
  Nt() || (process.env.NODE_ENV !== "production" ? T(
    !1,
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useHref() may be used only in the context of a <Router> component."
  ) : T(!1));
  let {
    basename: n,
    navigator: a
  } = p.useContext(he), {
    hash: i,
    pathname: c,
    search: o
  } = Ct(e, {
    relative: r
  }), f = c;
  return n !== "/" && (f = c === "/" ? n : xe([n, c])), a.createHref({
    pathname: f,
    search: o,
    hash: i
  });
}
function Nt() {
  return p.useContext(Wt) != null;
}
function Oe() {
  return Nt() || (process.env.NODE_ENV !== "production" ? T(
    !1,
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useLocation() may be used only in the context of a <Router> component."
  ) : T(!1)), p.useContext(Wt).location;
}
const Qn = "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
function Yn(e) {
  p.useContext(he).static || p.useLayoutEffect(e);
}
function Bt() {
  let {
    isDataRoute: e
  } = p.useContext(pe);
  return e ? Ma() : Na();
}
function Na() {
  Nt() || (process.env.NODE_ENV !== "production" ? T(
    !1,
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useNavigate() may be used only in the context of a <Router> component."
  ) : T(!1));
  let e = p.useContext(jt), {
    basename: t,
    future: r,
    navigator: n
  } = p.useContext(he), {
    matches: a
  } = p.useContext(pe), {
    pathname: i
  } = Oe(), c = JSON.stringify(Mr(a, r.v7_relativeSplatPath)), o = p.useRef(!1);
  return Yn(() => {
    o.current = !0;
  }), p.useCallback(function(h, l) {
    if (l === void 0 && (l = {}), process.env.NODE_ENV !== "production" && me(o.current, Qn), !o.current) return;
    if (typeof h == "number") {
      n.go(h);
      return;
    }
    let u = Dr(h, JSON.parse(c), i, l.relative === "path");
    e == null && t !== "/" && (u.pathname = u.pathname === "/" ? t : xe([t, u.pathname])), (l.replace ? n.replace : n.push)(u, l.state, l);
  }, [t, n, c, i, e]);
}
function Ct(e, t) {
  let {
    relative: r
  } = t === void 0 ? {} : t, {
    future: n
  } = p.useContext(he), {
    matches: a
  } = p.useContext(pe), {
    pathname: i
  } = Oe(), c = JSON.stringify(Mr(a, n.v7_relativeSplatPath));
  return p.useMemo(() => Dr(e, JSON.parse(c), i, r === "path"), [e, c, i, r]);
}
function Ca(e, t) {
  return Ea(e, t);
}
function Ea(e, t, r, n) {
  Nt() || (process.env.NODE_ENV !== "production" ? T(
    !1,
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useRoutes() may be used only in the context of a <Router> component."
  ) : T(!1));
  let {
    navigator: a,
    static: i
  } = p.useContext(he), {
    matches: c
  } = p.useContext(pe), o = c[c.length - 1], f = o ? o.params : {}, h = o ? o.pathname : "/", l = o ? o.pathnameBase : "/", u = o && o.route;
  if (process.env.NODE_ENV !== "production") {
    let E = u && u.path || "";
    Xn(h, !u || E.endsWith("*"), "You rendered descendant <Routes> (or called `useRoutes()`) at " + ('"' + h + '" (under <Route path="' + E + '">) but the ') + `parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

` + ('Please change the parent <Route path="' + E + '"> to <Route ') + ('path="' + (E === "/" ? "*" : E + "/*") + '">.'));
  }
  let m = Oe(), g;
  if (t) {
    var w;
    let E = typeof t == "string" ? Ut(t) : t;
    l === "/" || (w = E.pathname) != null && w.startsWith(l) || (process.env.NODE_ENV !== "production" ? T(!1, "When overriding the location using `<Routes location>` or `useRoutes(routes, location)`, the location pathname must begin with the portion of the URL pathname that was " + ('matched by all parent routes. The current pathname base is "' + l + '" ') + ('but pathname "' + E.pathname + '" was given in the `location` prop.')) : T(!1)), g = E;
  } else
    g = m;
  let N = g.pathname || "/", x = N;
  if (l !== "/") {
    let E = l.replace(/^\//, "").split("/");
    x = "/" + N.replace(/^\//, "").split("/").slice(E.length).join("/");
  }
  let C = Zs(e, {
    pathname: x
  });
  process.env.NODE_ENV !== "production" && (process.env.NODE_ENV !== "production" && me(u || C != null, 'No routes matched location "' + g.pathname + g.search + g.hash + '" '), process.env.NODE_ENV !== "production" && me(C == null || C[C.length - 1].route.element !== void 0 || C[C.length - 1].route.Component !== void 0 || C[C.length - 1].route.lazy !== void 0, 'Matched leaf route at location "' + g.pathname + g.search + g.hash + '" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.'));
  let k = Pa(C && C.map((E) => Object.assign({}, E, {
    params: Object.assign({}, f, E.params),
    pathname: xe([
      l,
      // Re-encode pathnames that were decoded inside matchRoutes
      a.encodeLocation ? a.encodeLocation(E.pathname).pathname : E.pathname
    ]),
    pathnameBase: E.pathnameBase === "/" ? l : xe([
      l,
      // Re-encode pathnames that were decoded inside matchRoutes
      a.encodeLocation ? a.encodeLocation(E.pathnameBase).pathname : E.pathnameBase
    ])
  })), c, r, n);
  return t && k ? /* @__PURE__ */ p.createElement(Wt.Provider, {
    value: {
      location: It({
        pathname: "/",
        search: "",
        hash: "",
        state: null,
        key: "default"
      }, g),
      navigationType: mr.Pop
    }
  }, k) : k;
}
function _a() {
  let e = Fa(), t = ya(e) ? e.status + " " + e.statusText : e instanceof Error ? e.message : JSON.stringify(e), r = e instanceof Error ? e.stack : null, n = "rgba(200,200,200, 0.5)", a = {
    padding: "0.5rem",
    backgroundColor: n
  }, i = {
    padding: "2px 4px",
    backgroundColor: n
  }, c = null;
  return process.env.NODE_ENV !== "production" && (console.error("Error handled by React Router default ErrorBoundary:", e), c = /* @__PURE__ */ p.createElement(p.Fragment, null, /* @__PURE__ */ p.createElement("p", null, "💿 Hey developer 👋"), /* @__PURE__ */ p.createElement("p", null, "You can provide a way better UX than this when your app throws errors by providing your own ", /* @__PURE__ */ p.createElement("code", {
    style: i
  }, "ErrorBoundary"), " or", " ", /* @__PURE__ */ p.createElement("code", {
    style: i
  }, "errorElement"), " prop on your route."))), /* @__PURE__ */ p.createElement(p.Fragment, null, /* @__PURE__ */ p.createElement("h2", null, "Unexpected Application Error!"), /* @__PURE__ */ p.createElement("h3", {
    style: {
      fontStyle: "italic"
    }
  }, t), r ? /* @__PURE__ */ p.createElement("pre", {
    style: a
  }, r) : null, c);
}
const ka = /* @__PURE__ */ p.createElement(_a, null);
class Ra extends p.Component {
  constructor(t) {
    super(t), this.state = {
      location: t.location,
      revalidation: t.revalidation,
      error: t.error
    };
  }
  static getDerivedStateFromError(t) {
    return {
      error: t
    };
  }
  static getDerivedStateFromProps(t, r) {
    return r.location !== t.location || r.revalidation !== "idle" && t.revalidation === "idle" ? {
      error: t.error,
      location: t.location,
      revalidation: t.revalidation
    } : {
      error: t.error !== void 0 ? t.error : r.error,
      location: r.location,
      revalidation: t.revalidation || r.revalidation
    };
  }
  componentDidCatch(t, r) {
    console.error("React Router caught the following error during render", t, r);
  }
  render() {
    return this.state.error !== void 0 ? /* @__PURE__ */ p.createElement(pe.Provider, {
      value: this.props.routeContext
    }, /* @__PURE__ */ p.createElement(qr.Provider, {
      value: this.state.error,
      children: this.props.component
    })) : this.props.children;
  }
}
function Sa(e) {
  let {
    routeContext: t,
    match: r,
    children: n
  } = e, a = p.useContext(jt);
  return a && a.static && a.staticContext && (r.route.errorElement || r.route.ErrorBoundary) && (a.staticContext._deepestRenderedBoundaryId = r.route.id), /* @__PURE__ */ p.createElement(pe.Provider, {
    value: t
  }, n);
}
function Pa(e, t, r, n) {
  var a;
  if (t === void 0 && (t = []), r === void 0 && (r = null), n === void 0 && (n = null), e == null) {
    var i;
    if (!r)
      return null;
    if (r.errors)
      e = r.matches;
    else if ((i = n) != null && i.v7_partialHydration && t.length === 0 && !r.initialized && r.matches.length > 0)
      e = r.matches;
    else
      return null;
  }
  let c = e, o = (a = r) == null ? void 0 : a.errors;
  if (o != null) {
    let l = c.findIndex((u) => u.route.id && (o == null ? void 0 : o[u.route.id]) !== void 0);
    l >= 0 || (process.env.NODE_ENV !== "production" ? T(!1, "Could not find a matching route for errors on route IDs: " + Object.keys(o).join(",")) : T(!1)), c = c.slice(0, Math.min(c.length, l + 1));
  }
  let f = !1, h = -1;
  if (r && n && n.v7_partialHydration)
    for (let l = 0; l < c.length; l++) {
      let u = c[l];
      if ((u.route.HydrateFallback || u.route.hydrateFallbackElement) && (h = l), u.route.id) {
        let {
          loaderData: m,
          errors: g
        } = r, w = u.route.loader && m[u.route.id] === void 0 && (!g || g[u.route.id] === void 0);
        if (u.route.lazy || w) {
          f = !0, h >= 0 ? c = c.slice(0, h + 1) : c = [c[0]];
          break;
        }
      }
    }
  return c.reduceRight((l, u, m) => {
    let g, w = !1, N = null, x = null;
    r && (g = o && u.route.id ? o[u.route.id] : void 0, N = u.route.errorElement || ka, f && (h < 0 && m === 0 ? (Xn("route-fallback", !1, "No `HydrateFallback` element provided to render during initial hydration"), w = !0, x = null) : h === m && (w = !0, x = u.route.hydrateFallbackElement || null)));
    let C = t.concat(c.slice(0, m + 1)), k = () => {
      let E;
      return g ? E = N : w ? E = x : u.route.Component ? E = /* @__PURE__ */ p.createElement(u.route.Component, null) : u.route.element ? E = u.route.element : E = l, /* @__PURE__ */ p.createElement(Sa, {
        match: u,
        routeContext: {
          outlet: l,
          matches: C,
          isDataRoute: r != null
        },
        children: E
      });
    };
    return r && (u.route.ErrorBoundary || u.route.errorElement || m === 0) ? /* @__PURE__ */ p.createElement(Ra, {
      location: r.location,
      revalidation: r.revalidation,
      component: N,
      error: g,
      children: k(),
      routeContext: {
        outlet: null,
        matches: C,
        isDataRoute: !0
      }
    }) : k();
  }, null);
}
var Jn = /* @__PURE__ */ function(e) {
  return e.UseBlocker = "useBlocker", e.UseRevalidator = "useRevalidator", e.UseNavigateStable = "useNavigate", e;
}(Jn || {}), xt = /* @__PURE__ */ function(e) {
  return e.UseBlocker = "useBlocker", e.UseLoaderData = "useLoaderData", e.UseActionData = "useActionData", e.UseRouteError = "useRouteError", e.UseNavigation = "useNavigation", e.UseRouteLoaderData = "useRouteLoaderData", e.UseMatches = "useMatches", e.UseRevalidator = "useRevalidator", e.UseNavigateStable = "useNavigate", e.UseRouteId = "useRouteId", e;
}(xt || {});
function zr(e) {
  return e + " must be used within a data router.  See https://reactrouter.com/v6/routers/picking-a-router.";
}
function Aa(e) {
  let t = p.useContext(jt);
  return t || (process.env.NODE_ENV !== "production" ? T(!1, zr(e)) : T(!1)), t;
}
function Oa(e) {
  let t = p.useContext(Ir);
  return t || (process.env.NODE_ENV !== "production" ? T(!1, zr(e)) : T(!1)), t;
}
function Ta(e) {
  let t = p.useContext(pe);
  return t || (process.env.NODE_ENV !== "production" ? T(!1, zr(e)) : T(!1)), t;
}
function Vr(e) {
  let t = Ta(e), r = t.matches[t.matches.length - 1];
  return r.route.id || (process.env.NODE_ENV !== "production" ? T(!1, e + ' can only be used on routes that contain a unique "id"') : T(!1)), r.route.id;
}
function La() {
  return Vr(xt.UseRouteId);
}
function Fa() {
  var e;
  let t = p.useContext(qr), r = Oa(xt.UseRouteError), n = Vr(xt.UseRouteError);
  return t !== void 0 ? t : (e = r.errors) == null ? void 0 : e[n];
}
function Ma() {
  let {
    router: e
  } = Aa(Jn.UseNavigateStable), t = Vr(xt.UseNavigateStable), r = p.useRef(!1);
  return Yn(() => {
    r.current = !0;
  }), p.useCallback(function(a, i) {
    i === void 0 && (i = {}), process.env.NODE_ENV !== "production" && me(r.current, Qn), r.current && (typeof a == "number" ? e.navigate(a) : e.navigate(a, It({
      fromRouteId: t
    }, i)));
  }, [e, t]);
}
const pn = {};
function Xn(e, t, r) {
  !t && !pn[e] && (pn[e] = !0, process.env.NODE_ENV !== "production" && me(!1, r));
}
function Da(e) {
  let {
    to: t,
    replace: r,
    state: n,
    relative: a
  } = e;
  Nt() || (process.env.NODE_ENV !== "production" ? T(
    !1,
    // TODO: This error is probably because they somehow have 2 versions of
    // the router loaded. We can help them understand how to avoid that.
    "<Navigate> may be used only in the context of a <Router> component."
  ) : T(!1));
  let {
    future: i,
    static: c
  } = p.useContext(he);
  process.env.NODE_ENV !== "production" && me(!c, "<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");
  let {
    matches: o
  } = p.useContext(pe), {
    pathname: f
  } = Oe(), h = Bt(), l = Dr(t, Mr(o, i.v7_relativeSplatPath), f, a === "path"), u = JSON.stringify(l);
  return p.useEffect(() => h(JSON.parse(u), {
    replace: r,
    state: n,
    relative: a
  }), [h, u, a, r, n]), null;
}
function Fe(e) {
  process.env.NODE_ENV !== "production" ? T(!1, "A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.") : T(!1);
}
function Ia(e) {
  let {
    children: t,
    location: r
  } = e;
  return Ca(vr(t), r);
}
new Promise(() => {
});
function vr(e, t) {
  t === void 0 && (t = []);
  let r = [];
  return p.Children.forEach(e, (n, a) => {
    if (!/* @__PURE__ */ p.isValidElement(n))
      return;
    let i = [...t, a];
    if (n.type === p.Fragment) {
      r.push.apply(r, vr(n.props.children, i));
      return;
    }
    n.type !== Fe && (process.env.NODE_ENV !== "production" ? T(!1, "[" + (typeof n.type == "string" ? n.type : n.type.name) + "] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>") : T(!1)), !n.props.index || !n.props.children || (process.env.NODE_ENV !== "production" ? T(!1, "An index route cannot have child routes.") : T(!1));
    let c = {
      id: n.props.id || i.join("-"),
      caseSensitive: n.props.caseSensitive,
      element: n.props.element,
      Component: n.props.Component,
      index: n.props.index,
      path: n.props.path,
      loader: n.props.loader,
      action: n.props.action,
      errorElement: n.props.errorElement,
      ErrorBoundary: n.props.ErrorBoundary,
      hasErrorBoundary: n.props.ErrorBoundary != null || n.props.errorElement != null,
      shouldRevalidate: n.props.shouldRevalidate,
      handle: n.props.handle,
      lazy: n.props.lazy
    };
    n.props.children && (c.children = vr(n.props.children, i)), r.push(c);
  }), r;
}
/**
 * React Router DOM v6.30.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function Ze() {
  return Ze = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Ze.apply(this, arguments);
}
function Ur(e, t) {
  if (e == null) return {};
  var r = {}, n = Object.keys(e), a, i;
  for (i = 0; i < n.length; i++)
    a = n[i], !(t.indexOf(a) >= 0) && (r[a] = e[a]);
  return r;
}
const Tt = "get", Lt = "application/x-www-form-urlencoded";
function $t(e) {
  return e != null && typeof e.tagName == "string";
}
function qa(e) {
  return $t(e) && e.tagName.toLowerCase() === "button";
}
function za(e) {
  return $t(e) && e.tagName.toLowerCase() === "form";
}
function Va(e) {
  return $t(e) && e.tagName.toLowerCase() === "input";
}
function Ua(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function Wa(e, t) {
  return e.button === 0 && // Ignore everything but left clicks
  (!t || t === "_self") && // Let browser handle "target=_blank" etc.
  !Ua(e);
}
let At = null;
function Ba() {
  if (At === null)
    try {
      new FormData(
        document.createElement("form"),
        // @ts-expect-error if FormData supports the submitter parameter, this will throw
        0
      ), At = !1;
    } catch {
      At = !0;
    }
  return At;
}
const $a = /* @__PURE__ */ new Set(["application/x-www-form-urlencoded", "multipart/form-data", "text/plain"]);
function ir(e) {
  return e != null && !$a.has(e) ? (process.env.NODE_ENV !== "production" && me(!1, '"' + e + '" is not a valid `encType` for `<Form>`/`<fetcher.Form>` ' + ('and will default to "' + Lt + '"')), null) : e;
}
function Ga(e, t) {
  let r, n, a, i, c;
  if (za(e)) {
    let o = e.getAttribute("action");
    n = o ? Ve(o, t) : null, r = e.getAttribute("method") || Tt, a = ir(e.getAttribute("enctype")) || Lt, i = new FormData(e);
  } else if (qa(e) || Va(e) && (e.type === "submit" || e.type === "image")) {
    let o = e.form;
    if (o == null)
      throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');
    let f = e.getAttribute("formaction") || o.getAttribute("action");
    if (n = f ? Ve(f, t) : null, r = e.getAttribute("formmethod") || o.getAttribute("method") || Tt, a = ir(e.getAttribute("formenctype")) || ir(o.getAttribute("enctype")) || Lt, i = new FormData(o, e), !Ba()) {
      let {
        name: h,
        type: l,
        value: u
      } = e;
      if (l === "image") {
        let m = h ? h + "." : "";
        i.append(m + "x", "0"), i.append(m + "y", "0");
      } else h && i.append(h, u);
    }
  } else {
    if ($t(e))
      throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');
    r = Tt, n = null, a = Lt, c = e;
  }
  return i && a === "text/plain" && (c = i, i = void 0), {
    action: n,
    method: r.toLowerCase(),
    encType: a,
    formData: i,
    body: c
  };
}
const Ka = ["onClick", "relative", "reloadDocument", "replace", "state", "target", "to", "preventScrollReset", "viewTransition"], Ha = ["aria-current", "caseSensitive", "className", "end", "style", "to", "viewTransition", "children"], Qa = ["fetcherKey", "navigate", "reloadDocument", "replace", "state", "method", "action", "onSubmit", "relative", "preventScrollReset", "viewTransition"], Ya = "6";
try {
  window.__reactRouterVersion = Ya;
} catch {
}
const Zn = /* @__PURE__ */ p.createContext({
  isTransitioning: !1
});
process.env.NODE_ENV !== "production" && (Zn.displayName = "ViewTransition");
const Ja = /* @__PURE__ */ p.createContext(/* @__PURE__ */ new Map());
process.env.NODE_ENV !== "production" && (Ja.displayName = "Fetchers");
process.env.NODE_ENV;
const Xa = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", Za = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i, ze = /* @__PURE__ */ p.forwardRef(function(t, r) {
  let {
    onClick: n,
    relative: a,
    reloadDocument: i,
    replace: c,
    state: o,
    target: f,
    to: h,
    preventScrollReset: l,
    viewTransition: u
  } = t, m = Ur(t, Ka), {
    basename: g
  } = p.useContext(he), w, N = !1;
  if (typeof h == "string" && Za.test(h) && (w = h, Xa))
    try {
      let E = new URL(window.location.href), A = h.startsWith("//") ? new URL(E.protocol + h) : new URL(h), Q = Ve(A.pathname, g);
      A.origin === E.origin && Q != null ? h = Q + A.search + A.hash : N = !0;
    } catch {
      process.env.NODE_ENV !== "production" && me(!1, '<Link to="' + h + '"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.');
    }
  let x = ja(h, {
    relative: a
  }), C = ni(h, {
    replace: c,
    state: o,
    target: f,
    preventScrollReset: l,
    relative: a,
    viewTransition: u
  });
  function k(E) {
    n && n(E), E.defaultPrevented || C(E);
  }
  return (
    // eslint-disable-next-line jsx-a11y/anchor-has-content
    /* @__PURE__ */ p.createElement("a", Ze({}, m, {
      href: w || x,
      onClick: N || i ? n : k,
      ref: r,
      target: f
    }))
  );
});
process.env.NODE_ENV !== "production" && (ze.displayName = "Link");
const ei = /* @__PURE__ */ p.forwardRef(function(t, r) {
  let {
    "aria-current": n = "page",
    caseSensitive: a = !1,
    className: i = "",
    end: c = !1,
    style: o,
    to: f,
    viewTransition: h,
    children: l
  } = t, u = Ur(t, Ha), m = Ct(f, {
    relative: u.relative
  }), g = Oe(), w = p.useContext(Ir), {
    navigator: N,
    basename: x
  } = p.useContext(he), C = w != null && // Conditional usage is OK here because the usage of a data router is static
  // eslint-disable-next-line react-hooks/rules-of-hooks
  ci(m) && h === !0, k = N.encodeLocation ? N.encodeLocation(m).pathname : m.pathname, E = g.pathname, A = w && w.navigation && w.navigation.location ? w.navigation.location.pathname : null;
  a || (E = E.toLowerCase(), A = A ? A.toLowerCase() : null, k = k.toLowerCase()), A && x && (A = Ve(A, x) || A);
  const Q = k !== "/" && k.endsWith("/") ? k.length - 1 : k.length;
  let H = E === k || !c && E.startsWith(k) && E.charAt(Q) === "/", ee = A != null && (A === k || !c && A.startsWith(k) && A.charAt(k.length) === "/"), R = {
    isActive: H,
    isPending: ee,
    isTransitioning: C
  }, b = H ? n : void 0, S;
  typeof i == "function" ? S = i(R) : S = [i, H ? "active" : null, ee ? "pending" : null, C ? "transitioning" : null].filter(Boolean).join(" ");
  let U = typeof o == "function" ? o(R) : o;
  return /* @__PURE__ */ p.createElement(ze, Ze({}, u, {
    "aria-current": b,
    className: S,
    ref: r,
    style: U,
    to: f,
    viewTransition: h
  }), typeof l == "function" ? l(R) : l);
});
process.env.NODE_ENV !== "production" && (ei.displayName = "NavLink");
const ti = /* @__PURE__ */ p.forwardRef((e, t) => {
  let {
    fetcherKey: r,
    navigate: n,
    reloadDocument: a,
    replace: i,
    state: c,
    method: o = Tt,
    action: f,
    onSubmit: h,
    relative: l,
    preventScrollReset: u,
    viewTransition: m
  } = e, g = Ur(e, Qa), w = oi(), N = li(f, {
    relative: l
  }), x = o.toLowerCase() === "get" ? "get" : "post", C = (k) => {
    if (h && h(k), k.defaultPrevented) return;
    k.preventDefault();
    let E = k.nativeEvent.submitter, A = (E == null ? void 0 : E.getAttribute("formmethod")) || o;
    w(E || k.currentTarget, {
      fetcherKey: r,
      method: A,
      navigate: n,
      replace: i,
      state: c,
      relative: l,
      preventScrollReset: u,
      viewTransition: m
    });
  };
  return /* @__PURE__ */ p.createElement("form", Ze({
    ref: t,
    method: x,
    action: N,
    onSubmit: a ? h : C
  }, g));
});
process.env.NODE_ENV !== "production" && (ti.displayName = "Form");
process.env.NODE_ENV;
var qt;
(function(e) {
  e.UseScrollRestoration = "useScrollRestoration", e.UseSubmit = "useSubmit", e.UseSubmitFetcher = "useSubmitFetcher", e.UseFetcher = "useFetcher", e.useViewTransitionState = "useViewTransitionState";
})(qt || (qt = {}));
var gn;
(function(e) {
  e.UseFetcher = "useFetcher", e.UseFetchers = "useFetchers", e.UseScrollRestoration = "useScrollRestoration";
})(gn || (gn = {}));
function ri(e) {
  return e + " must be used within a data router.  See https://reactrouter.com/v6/routers/picking-a-router.";
}
function es(e) {
  let t = p.useContext(jt);
  return t || (process.env.NODE_ENV !== "production" ? T(!1, ri(e)) : T(!1)), t;
}
function ni(e, t) {
  let {
    target: r,
    replace: n,
    state: a,
    preventScrollReset: i,
    relative: c,
    viewTransition: o
  } = t === void 0 ? {} : t, f = Bt(), h = Oe(), l = Ct(e, {
    relative: c
  });
  return p.useCallback((u) => {
    if (Wa(u, r)) {
      u.preventDefault();
      let m = n !== void 0 ? n : pr(h) === pr(l);
      f(e, {
        replace: m,
        state: a,
        preventScrollReset: i,
        relative: c,
        viewTransition: o
      });
    }
  }, [h, f, l, n, a, r, e, i, c, o]);
}
function si() {
  if (typeof document > "u")
    throw new Error("You are calling submit during the server render. Try calling submit within a `useEffect` or callback instead.");
}
let ai = 0, ii = () => "__" + String(++ai) + "__";
function oi() {
  let {
    router: e
  } = es(qt.UseSubmit), {
    basename: t
  } = p.useContext(he), r = La();
  return p.useCallback(function(n, a) {
    a === void 0 && (a = {}), si();
    let {
      action: i,
      method: c,
      encType: o,
      formData: f,
      body: h
    } = Ga(n, t);
    if (a.navigate === !1) {
      let l = a.fetcherKey || ii();
      e.fetch(l, r, a.action || i, {
        preventScrollReset: a.preventScrollReset,
        formData: f,
        body: h,
        formMethod: a.method || c,
        formEncType: a.encType || o,
        flushSync: a.flushSync
      });
    } else
      e.navigate(a.action || i, {
        preventScrollReset: a.preventScrollReset,
        formData: f,
        body: h,
        formMethod: a.method || c,
        formEncType: a.encType || o,
        replace: a.replace,
        state: a.state,
        fromRouteId: r,
        flushSync: a.flushSync,
        viewTransition: a.viewTransition
      });
  }, [e, t, r]);
}
function li(e, t) {
  let {
    relative: r
  } = t === void 0 ? {} : t, {
    basename: n
  } = p.useContext(he), a = p.useContext(pe);
  a || (process.env.NODE_ENV !== "production" ? T(!1, "useFormAction must be used inside a RouteContext") : T(!1));
  let [i] = a.matches.slice(-1), c = Ze({}, Ct(e || ".", {
    relative: r
  })), o = Oe();
  if (e == null) {
    c.search = o.search;
    let f = new URLSearchParams(c.search), h = f.getAll("index");
    if (h.some((u) => u === "")) {
      f.delete("index"), h.filter((m) => m).forEach((m) => f.append("index", m));
      let u = f.toString();
      c.search = u ? "?" + u : "";
    }
  }
  return (!e || e === ".") && i.route.index && (c.search = c.search ? c.search.replace(/^\?/, "?index&") : "?index"), n !== "/" && (c.pathname = c.pathname === "/" ? n : xe([n, c.pathname])), pr(c);
}
function ci(e, t) {
  t === void 0 && (t = {});
  let r = p.useContext(Zn);
  r == null && (process.env.NODE_ENV !== "production" ? T(!1, "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?") : T(!1));
  let {
    basename: n
  } = es(qt.useViewTransitionState), a = Ct(e, {
    relative: t.relative
  });
  if (!r.isTransitioning)
    return !1;
  let i = Ve(r.currentLocation.pathname, n) || r.currentLocation.pathname, c = Ve(r.nextLocation.pathname, n) || r.nextLocation.pathname;
  return gr(a.pathname, c) != null || gr(a.pathname, i) != null;
}
var Ot = {}, ot = {}, lt = {}, vn;
function Gt() {
  if (vn) return lt;
  vn = 1, Object.defineProperty(lt, "__esModule", { value: !0 }), lt.checkProjectAuthorization = void 0;
  const e = async (t, r) => {
    try {
      const { data: { user: n } } = await t.auth.getUser();
      if (!n)
        return { isAuthorized: !1, error: "Not authenticated" };
      const { data: a, error: i } = await t.from("projects").select("user_id").eq("id", r).single();
      if (i)
        return { isAuthorized: !1, error: "Project not found" };
      const c = a.user_id === n.id;
      return {
        isAuthorized: c,
        userId: n.id,
        error: c ? void 0 : "Not authorized for this project"
      };
    } catch {
      return { isAuthorized: !1, error: "Authorization check failed" };
    }
  };
  return lt.checkProjectAuthorization = e, lt;
}
var xn;
function di() {
  if (xn) return ot;
  xn = 1, Object.defineProperty(ot, "__esModule", { value: !0 }), ot.initArticles = void 0;
  const e = Gt(), t = (r, n) => ({
    getArticles: async () => {
      try {
        const { data: m, error: g } = await r.from("articles").select("*").eq("project_id", n).eq("status", "published").order("created_at", { ascending: !1 });
        if (g)
          throw g;
        return { data: m, error: null };
      } catch (m) {
        return { data: null, error: m };
      }
    },
    getArticleBySlug: async (m) => {
      try {
        const { data: g, error: w } = await r.from("articles").select("*").eq("project_id", n).eq("slug", m).eq("status", "published").single();
        if (w)
          throw w;
        return { data: g, error: null };
      } catch (g) {
        return { data: null, error: g };
      }
    },
    getArticlesByCategory: async (m) => {
      try {
        const { data: g, error: w } = await r.from("articles").select("*").eq("project_id", n).eq("category", m).eq("status", "published").order("created_at", { ascending: !1 });
        if (w)
          throw w;
        return { data: g, error: null };
      } catch (g) {
        return { data: null, error: g };
      }
    },
    getAllArticles: async () => {
      try {
        const m = await (0, e.checkProjectAuthorization)(r, n);
        if (!m.isAuthorized)
          return { data: null, error: m.error };
        const { data: g, error: w } = await r.from("articles").select("*").eq("project_id", n).order("created_at", { ascending: !1 });
        if (w)
          throw w;
        return { data: g, error: null };
      } catch (m) {
        return { data: null, error: m };
      }
    },
    createArticle: async (m) => {
      try {
        const g = await (0, e.checkProjectAuthorization)(r, n);
        if (!g.isAuthorized)
          return { data: null, error: g.error };
        const { data: w, error: N } = await r.from("articles").insert({ ...m, project_id: n }).select().single();
        if (N)
          throw N;
        return { data: w, error: null };
      } catch (g) {
        return { data: null, error: g };
      }
    },
    updateArticle: async (m, g) => {
      try {
        const w = await (0, e.checkProjectAuthorization)(r, n);
        if (!w.isAuthorized)
          return { data: null, error: w.error };
        const { data: N, error: x } = await r.from("articles").update(g).eq("id", m).eq("project_id", n).select().single();
        if (x)
          throw x;
        return { data: N, error: null };
      } catch (w) {
        return { data: null, error: w };
      }
    },
    updateArticleStatus: async (m, g) => {
      try {
        const w = await (0, e.checkProjectAuthorization)(r, n);
        if (!w.isAuthorized)
          return { data: null, error: w.error };
        const { data: N, error: x } = await r.from("articles").update({ status: g }).eq("id", m).eq("project_id", n).select().single();
        if (x)
          throw x;
        return { data: N, error: null };
      } catch (w) {
        return { data: null, error: w };
      }
    },
    deleteArticle: async (m) => {
      try {
        const g = await (0, e.checkProjectAuthorization)(r, n);
        if (!g.isAuthorized)
          return { data: null, error: g.error };
        const { data: w, error: N } = await r.from("articles").delete().eq("id", m).eq("project_id", n).select().single();
        if (N)
          throw N;
        return { data: w, error: null };
      } catch (g) {
        return { data: null, error: g };
      }
    }
  });
  return ot.initArticles = t, ot;
}
var ct = {}, yn;
function ui() {
  if (yn) return ct;
  yn = 1, Object.defineProperty(ct, "__esModule", { value: !0 }), ct.initAuth = void 0;
  const e = (t, r) => ({
    loginWithEmailPassword: async (o, f) => {
      var h;
      try {
        const { data: l, error: u } = await t.auth.signInWithPassword({
          email: o,
          password: f
        });
        if (u)
          throw u;
        const { data: m, error: g } = await t.from("projects").select("user_id").eq("id", r).single();
        return g ? (await t.auth.signOut(), {
          data: null,
          error: "Project not found"
        }) : m.user_id !== ((h = l.user) == null ? void 0 : h.id) ? (await t.auth.signOut(), {
          data: null,
          error: "You are not authorized for this project"
        }) : { data: l, error: null };
      } catch (l) {
        return { data: null, error: l };
      }
    },
    logout: async () => {
      try {
        const { error: o } = await t.auth.signOut();
        if (o)
          throw o;
        return { error: null };
      } catch (o) {
        return { error: o };
      }
    },
    getCurrentSession: async () => {
      try {
        const { data: o, error: f } = await t.auth.getSession();
        if (f)
          throw f;
        return { data: o, error: null };
      } catch (o) {
        return { data: null, error: o };
      }
    },
    getCurrentUser: async () => {
      try {
        const { data: o, error: f } = await t.auth.getUser();
        if (f)
          throw f;
        return { data: o.user, error: null };
      } catch (o) {
        return { data: null, error: o };
      }
    }
  });
  return ct.initAuth = e, ct;
}
var dt = {}, bn;
function hi() {
  if (bn) return dt;
  bn = 1, Object.defineProperty(dt, "__esModule", { value: !0 }), dt.initGallery = void 0;
  const e = Gt(), t = (r, n) => ({
    getGalleryItems: async () => {
      try {
        const { data: l, error: u } = await r.from("gallery_items").select("*").eq("project_id", n).order("created_at", { ascending: !1 });
        if (u)
          throw u;
        return { data: l, error: null };
      } catch (l) {
        return { data: null, error: l };
      }
    },
    getFeaturedGalleryItems: async () => {
      try {
        const { data: l, error: u } = await r.from("gallery_items").select("*").eq("project_id", n).eq("is_featured", !0).order("created_at", { ascending: !1 });
        if (u)
          throw u;
        return { data: l, error: null };
      } catch (l) {
        return { data: null, error: l };
      }
    },
    getGalleryItemsByCategory: async (l) => {
      try {
        const { data: u, error: m } = await r.from("gallery_items").select("*").eq("project_id", n).eq("category", l).order("created_at", { ascending: !1 });
        if (m)
          throw m;
        return { data: u, error: null };
      } catch (u) {
        return { data: null, error: u };
      }
    },
    createGalleryItem: async (l) => {
      try {
        const u = await (0, e.checkProjectAuthorization)(r, n);
        if (!u.isAuthorized)
          return { data: null, error: u.error };
        const { data: m, error: g } = await r.from("gallery_items").insert({ ...l, project_id: n }).select().single();
        if (g)
          throw g;
        return { data: m, error: null };
      } catch (u) {
        return { data: null, error: u };
      }
    },
    updateGalleryItem: async (l, u) => {
      try {
        const m = await (0, e.checkProjectAuthorization)(r, n);
        if (!m.isAuthorized)
          return { data: null, error: m.error };
        const { data: g, error: w } = await r.from("gallery_items").select("project_id").eq("id", l).eq("project_id", n).single();
        if (w || !g)
          return { data: null, error: "Item not found or not authorized to modify" };
        const { data: N, error: x } = await r.from("gallery_items").update(u).eq("id", l).eq("project_id", n).select().single();
        if (x)
          throw x;
        return { data: N, error: null };
      } catch (m) {
        return { data: null, error: m };
      }
    },
    deleteGalleryItem: async (l) => {
      try {
        const u = await (0, e.checkProjectAuthorization)(r, n);
        if (!u.isAuthorized)
          return { data: null, error: u.error };
        const { data: m, error: g } = await r.from("gallery_items").delete().eq("id", l).eq("project_id", n).select().single();
        if (g)
          throw g;
        return { data: m, error: null };
      } catch (u) {
        return { data: null, error: u };
      }
    }
  });
  return dt.initGallery = t, dt;
}
var ut = {}, wn;
function fi() {
  if (wn) return ut;
  wn = 1, Object.defineProperty(ut, "__esModule", { value: !0 }), ut.initProducts = void 0;
  const e = Gt(), t = (r, n) => ({
    getProducts: async () => {
      try {
        const { data: l, error: u } = await r.from("products").select("*").eq("project_id", n).eq("is_active", !0).order("name", { ascending: !0 });
        if (u)
          throw u;
        return { data: l, error: null };
      } catch (l) {
        return { data: null, error: l };
      }
    },
    getProductById: async (l) => {
      try {
        const { data: u, error: m } = await r.from("products").select("*").eq("project_id", n).eq("id", l).eq("is_active", !0).single();
        if (m)
          throw m;
        return { data: u, error: null };
      } catch (u) {
        return { data: null, error: u };
      }
    },
    getAllProducts: async () => {
      try {
        const l = await (0, e.checkProjectAuthorization)(r, n);
        if (!l.isAuthorized)
          return { data: null, error: l.error };
        const { data: u, error: m } = await r.from("products").select("*").eq("project_id", n).order("name", { ascending: !0 });
        if (m)
          throw m;
        return { data: u, error: null };
      } catch (l) {
        return { data: null, error: l };
      }
    },
    createProduct: async (l) => {
      try {
        const u = await (0, e.checkProjectAuthorization)(r, n);
        if (!u.isAuthorized)
          return { data: null, error: u.error };
        const { data: m, error: g } = await r.from("products").insert({ ...l, project_id: n }).select().single();
        if (g)
          throw g;
        return { data: m, error: null };
      } catch (u) {
        return { data: null, error: u };
      }
    },
    updateProduct: async (l, u) => {
      try {
        const m = await (0, e.checkProjectAuthorization)(r, n);
        if (!m.isAuthorized)
          return { data: null, error: m.error };
        const { data: g, error: w } = await r.from("products").update(u).eq("id", l).eq("project_id", n).select().single();
        if (w)
          throw w;
        return { data: g, error: null };
      } catch (m) {
        return { data: null, error: m };
      }
    },
    deleteProduct: async (l) => {
      try {
        const u = await (0, e.checkProjectAuthorization)(r, n);
        if (!u.isAuthorized)
          return { data: null, error: u.error };
        const { data: m, error: g } = await r.from("products").delete().eq("id", l).eq("project_id", n).select().single();
        if (g)
          throw g;
        return { data: m, error: null };
      } catch (u) {
        return { data: null, error: u };
      }
    }
  });
  return ut.initProducts = t, ut;
}
var ht = {}, jn;
function mi() {
  if (jn) return ht;
  jn = 1, Object.defineProperty(ht, "__esModule", { value: !0 }), ht.initTestimonials = void 0;
  const e = Gt(), t = (r, n) => ({
    getTestimonials: async () => {
      try {
        const { data: h, error: l } = await r.from("testimonials").select("*").eq("project_id", n).order("created_at", { ascending: !1 });
        if (l)
          throw l;
        return { data: h, error: null };
      } catch (h) {
        return { data: null, error: h };
      }
    },
    getFeaturedTestimonials: async () => {
      try {
        const { data: h, error: l } = await r.from("testimonials").select("*").eq("project_id", n).eq("is_featured", !0).order("rating", { ascending: !1 });
        if (l)
          throw l;
        return { data: h, error: null };
      } catch (h) {
        return { data: null, error: h };
      }
    },
    createTestimonial: async (h) => {
      try {
        const l = await (0, e.checkProjectAuthorization)(r, n);
        if (!l.isAuthorized)
          return { data: null, error: l.error };
        const { data: u, error: m } = await r.from("testimonials").insert({ ...h, project_id: n }).select().single();
        if (m)
          throw m;
        return { data: u, error: null };
      } catch (l) {
        return { data: null, error: l };
      }
    },
    updateTestimonial: async (h, l) => {
      try {
        const u = await (0, e.checkProjectAuthorization)(r, n);
        if (!u.isAuthorized)
          return { data: null, error: u.error };
        const { data: m, error: g } = await r.from("testimonials").update(l).eq("id", h).eq("project_id", n).select().single();
        if (g)
          throw g;
        return { data: m, error: null };
      } catch (u) {
        return { data: null, error: u };
      }
    },
    deleteTestimonial: async (h) => {
      try {
        const l = await (0, e.checkProjectAuthorization)(r, n);
        if (!l.isAuthorized)
          return { data: null, error: l.error };
        const { data: u, error: m } = await r.from("testimonials").delete().eq("id", h).eq("project_id", n).select().single();
        if (m)
          throw m;
        return { data: u, error: null };
      } catch (l) {
        return { data: null, error: l };
      }
    }
  });
  return ht.initTestimonials = t, ht;
}
var Nn;
function pi() {
  if (Nn) return Ot;
  Nn = 1, Object.defineProperty(Ot, "__esModule", { value: !0 }), Ot.initDB = c;
  const e = Qs, t = di(), r = ui(), n = hi(), a = fi(), i = mi();
  function c(o, f = process.env.SUPABASE_URL || "", h = process.env.SUPABASE_PUBLISHABLE_KEY || "") {
    if (!o)
      throw new Error("projectId is required");
    const l = (0, e.createSupabaseClient)(f, h);
    return {
      articles: (0, t.initArticles)(l, o),
      gallery: (0, n.initGallery)(l, o),
      products: (0, a.initProducts)(l, o),
      testimonials: (0, i.initTestimonials)(l, o),
      auth: (0, r.initAuth)(l, o)
    };
  }
  return Ot;
}
var gi = pi();
function Cn(e, t) {
  if (typeof e == "function")
    return e(t);
  e != null && (e.current = t);
}
function vi(...e) {
  return (t) => {
    let r = !1;
    const n = e.map((a) => {
      const i = Cn(a, t);
      return !r && typeof i == "function" && (r = !0), i;
    });
    if (r)
      return () => {
        for (let a = 0; a < n.length; a++) {
          const i = n[a];
          typeof i == "function" ? i() : Cn(e[a], null);
        }
      };
  };
}
function xi(...e) {
  return p.useCallback(vi(...e), e);
}
// @__NO_SIDE_EFFECTS__
function ts(e) {
  const t = /* @__PURE__ */ bi(e), r = p.forwardRef((n, a) => {
    const { children: i, ...c } = n, o = p.Children.toArray(i), f = o.find(ji);
    if (f) {
      const h = f.props.children, l = o.map((u) => u === f ? p.Children.count(h) > 1 ? p.Children.only(null) : p.isValidElement(h) ? h.props.children : null : u);
      return /* @__PURE__ */ s.jsx(t, { ...c, ref: a, children: p.isValidElement(h) ? p.cloneElement(h, void 0, l) : null });
    }
    return /* @__PURE__ */ s.jsx(t, { ...c, ref: a, children: i });
  });
  return r.displayName = `${e}.Slot`, r;
}
var yi = /* @__PURE__ */ ts("Slot");
// @__NO_SIDE_EFFECTS__
function bi(e) {
  const t = p.forwardRef((r, n) => {
    const { children: a, ...i } = r, c = p.isValidElement(a) ? Ci(a) : void 0, o = xi(c, n);
    if (p.isValidElement(a)) {
      const f = Ni(i, a.props);
      return a.type !== p.Fragment && (f.ref = o), p.cloneElement(a, f);
    }
    return p.Children.count(a) > 1 ? p.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var wi = Symbol("radix.slottable");
function ji(e) {
  return p.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === wi;
}
function Ni(e, t) {
  const r = { ...t };
  for (const n in t) {
    const a = e[n], i = t[n];
    /^on[A-Z]/.test(n) ? a && i ? r[n] = (...o) => {
      const f = i(...o);
      return a(...o), f;
    } : a && (r[n] = a) : n === "style" ? r[n] = { ...a, ...i } : n === "className" && (r[n] = [a, i].filter(Boolean).join(" "));
  }
  return { ...e, ...r };
}
function Ci(e) {
  var n, a;
  let t = (n = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : n.get, r = t && "isReactWarning" in t && t.isReactWarning;
  return r ? e.ref : (t = (a = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : a.get, r = t && "isReactWarning" in t && t.isReactWarning, r ? e.props.ref : e.props.ref || e.ref);
}
function rs(e) {
  var t, r, n = "";
  if (typeof e == "string" || typeof e == "number") n += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var a = e.length;
    for (t = 0; t < a; t++) e[t] && (r = rs(e[t])) && (n && (n += " "), n += r);
  } else for (r in e) e[r] && (n && (n += " "), n += r);
  return n;
}
function ns() {
  for (var e, t, r = 0, n = "", a = arguments.length; r < a; r++) (e = arguments[r]) && (t = rs(e)) && (n && (n += " "), n += t);
  return n;
}
const En = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, _n = ns, ss = (e, t) => (r) => {
  var n;
  if ((t == null ? void 0 : t.variants) == null) return _n(e, r == null ? void 0 : r.class, r == null ? void 0 : r.className);
  const { variants: a, defaultVariants: i } = t, c = Object.keys(a).map((h) => {
    const l = r == null ? void 0 : r[h], u = i == null ? void 0 : i[h];
    if (l === null) return null;
    const m = En(l) || En(u);
    return a[h][m];
  }), o = r && Object.entries(r).reduce((h, l) => {
    let [u, m] = l;
    return m === void 0 || (h[u] = m), h;
  }, {}), f = t == null || (n = t.compoundVariants) === null || n === void 0 ? void 0 : n.reduce((h, l) => {
    let { class: u, className: m, ...g } = l;
    return Object.entries(g).every((w) => {
      let [N, x] = w;
      return Array.isArray(x) ? x.includes({
        ...i,
        ...o
      }[N]) : {
        ...i,
        ...o
      }[N] === x;
    }) ? [
      ...h,
      u,
      m
    ] : h;
  }, []);
  return _n(e, c, f, r == null ? void 0 : r.class, r == null ? void 0 : r.className);
}, Wr = "-", Ei = (e) => {
  const t = ki(e), {
    conflictingClassGroups: r,
    conflictingClassGroupModifiers: n
  } = e;
  return {
    getClassGroupId: (c) => {
      const o = c.split(Wr);
      return o[0] === "" && o.length !== 1 && o.shift(), as(o, t) || _i(c);
    },
    getConflictingClassGroupIds: (c, o) => {
      const f = r[c] || [];
      return o && n[c] ? [...f, ...n[c]] : f;
    }
  };
}, as = (e, t) => {
  var c;
  if (e.length === 0)
    return t.classGroupId;
  const r = e[0], n = t.nextPart.get(r), a = n ? as(e.slice(1), n) : void 0;
  if (a)
    return a;
  if (t.validators.length === 0)
    return;
  const i = e.join(Wr);
  return (c = t.validators.find(({
    validator: o
  }) => o(i))) == null ? void 0 : c.classGroupId;
}, kn = /^\[(.+)\]$/, _i = (e) => {
  if (kn.test(e)) {
    const t = kn.exec(e)[1], r = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (r)
      return "arbitrary.." + r;
  }
}, ki = (e) => {
  const {
    theme: t,
    prefix: r
  } = e, n = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  return Si(Object.entries(e.classGroups), r).forEach(([i, c]) => {
    xr(c, n, i, t);
  }), n;
}, xr = (e, t, r, n) => {
  e.forEach((a) => {
    if (typeof a == "string") {
      const i = a === "" ? t : Rn(t, a);
      i.classGroupId = r;
      return;
    }
    if (typeof a == "function") {
      if (Ri(a)) {
        xr(a(n), t, r, n);
        return;
      }
      t.validators.push({
        validator: a,
        classGroupId: r
      });
      return;
    }
    Object.entries(a).forEach(([i, c]) => {
      xr(c, Rn(t, i), r, n);
    });
  });
}, Rn = (e, t) => {
  let r = e;
  return t.split(Wr).forEach((n) => {
    r.nextPart.has(n) || r.nextPart.set(n, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), r = r.nextPart.get(n);
  }), r;
}, Ri = (e) => e.isThemeGetter, Si = (e, t) => t ? e.map(([r, n]) => {
  const a = n.map((i) => typeof i == "string" ? t + i : typeof i == "object" ? Object.fromEntries(Object.entries(i).map(([c, o]) => [t + c, o])) : i);
  return [r, a];
}) : e, Pi = (e) => {
  if (e < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let t = 0, r = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map();
  const a = (i, c) => {
    r.set(i, c), t++, t > e && (t = 0, n = r, r = /* @__PURE__ */ new Map());
  };
  return {
    get(i) {
      let c = r.get(i);
      if (c !== void 0)
        return c;
      if ((c = n.get(i)) !== void 0)
        return a(i, c), c;
    },
    set(i, c) {
      r.has(i) ? r.set(i, c) : a(i, c);
    }
  };
}, is = "!", Ai = (e) => {
  const {
    separator: t,
    experimentalParseClassName: r
  } = e, n = t.length === 1, a = t[0], i = t.length, c = (o) => {
    const f = [];
    let h = 0, l = 0, u;
    for (let x = 0; x < o.length; x++) {
      let C = o[x];
      if (h === 0) {
        if (C === a && (n || o.slice(x, x + i) === t)) {
          f.push(o.slice(l, x)), l = x + i;
          continue;
        }
        if (C === "/") {
          u = x;
          continue;
        }
      }
      C === "[" ? h++ : C === "]" && h--;
    }
    const m = f.length === 0 ? o : o.substring(l), g = m.startsWith(is), w = g ? m.substring(1) : m, N = u && u > l ? u - l : void 0;
    return {
      modifiers: f,
      hasImportantModifier: g,
      baseClassName: w,
      maybePostfixModifierPosition: N
    };
  };
  return r ? (o) => r({
    className: o,
    parseClassName: c
  }) : c;
}, Oi = (e) => {
  if (e.length <= 1)
    return e;
  const t = [];
  let r = [];
  return e.forEach((n) => {
    n[0] === "[" ? (t.push(...r.sort(), n), r = []) : r.push(n);
  }), t.push(...r.sort()), t;
}, Ti = (e) => ({
  cache: Pi(e.cacheSize),
  parseClassName: Ai(e),
  ...Ei(e)
}), Li = /\s+/, Fi = (e, t) => {
  const {
    parseClassName: r,
    getClassGroupId: n,
    getConflictingClassGroupIds: a
  } = t, i = [], c = e.trim().split(Li);
  let o = "";
  for (let f = c.length - 1; f >= 0; f -= 1) {
    const h = c[f], {
      modifiers: l,
      hasImportantModifier: u,
      baseClassName: m,
      maybePostfixModifierPosition: g
    } = r(h);
    let w = !!g, N = n(w ? m.substring(0, g) : m);
    if (!N) {
      if (!w) {
        o = h + (o.length > 0 ? " " + o : o);
        continue;
      }
      if (N = n(m), !N) {
        o = h + (o.length > 0 ? " " + o : o);
        continue;
      }
      w = !1;
    }
    const x = Oi(l).join(":"), C = u ? x + is : x, k = C + N;
    if (i.includes(k))
      continue;
    i.push(k);
    const E = a(N, w);
    for (let A = 0; A < E.length; ++A) {
      const Q = E[A];
      i.push(C + Q);
    }
    o = h + (o.length > 0 ? " " + o : o);
  }
  return o;
};
function Mi() {
  let e = 0, t, r, n = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (r = os(t)) && (n && (n += " "), n += r);
  return n;
}
const os = (e) => {
  if (typeof e == "string")
    return e;
  let t, r = "";
  for (let n = 0; n < e.length; n++)
    e[n] && (t = os(e[n])) && (r && (r += " "), r += t);
  return r;
};
function Di(e, ...t) {
  let r, n, a, i = c;
  function c(f) {
    const h = t.reduce((l, u) => u(l), e());
    return r = Ti(h), n = r.cache.get, a = r.cache.set, i = o, o(f);
  }
  function o(f) {
    const h = n(f);
    if (h)
      return h;
    const l = Fi(f, r);
    return a(f, l), l;
  }
  return function() {
    return i(Mi.apply(null, arguments));
  };
}
const K = (e) => {
  const t = (r) => r[e] || [];
  return t.isThemeGetter = !0, t;
}, ls = /^\[(?:([a-z-]+):)?(.+)\]$/i, Ii = /^\d+\/\d+$/, qi = /* @__PURE__ */ new Set(["px", "full", "screen"]), zi = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, Vi = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, Ui = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, Wi = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, Bi = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, ge = (e) => $e(e) || qi.has(e) || Ii.test(e), je = (e) => et(e, "length", Xi), $e = (e) => !!e && !Number.isNaN(Number(e)), or = (e) => et(e, "number", $e), ft = (e) => !!e && Number.isInteger(Number(e)), $i = (e) => e.endsWith("%") && $e(e.slice(0, -1)), O = (e) => ls.test(e), Ne = (e) => zi.test(e), Gi = /* @__PURE__ */ new Set(["length", "size", "percentage"]), Ki = (e) => et(e, Gi, cs), Hi = (e) => et(e, "position", cs), Qi = /* @__PURE__ */ new Set(["image", "url"]), Yi = (e) => et(e, Qi, eo), Ji = (e) => et(e, "", Zi), mt = () => !0, et = (e, t, r) => {
  const n = ls.exec(e);
  return n ? n[1] ? typeof t == "string" ? n[1] === t : t.has(n[1]) : r(n[2]) : !1;
}, Xi = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  Vi.test(e) && !Ui.test(e)
), cs = () => !1, Zi = (e) => Wi.test(e), eo = (e) => Bi.test(e), to = () => {
  const e = K("colors"), t = K("spacing"), r = K("blur"), n = K("brightness"), a = K("borderColor"), i = K("borderRadius"), c = K("borderSpacing"), o = K("borderWidth"), f = K("contrast"), h = K("grayscale"), l = K("hueRotate"), u = K("invert"), m = K("gap"), g = K("gradientColorStops"), w = K("gradientColorStopPositions"), N = K("inset"), x = K("margin"), C = K("opacity"), k = K("padding"), E = K("saturate"), A = K("scale"), Q = K("sepia"), H = K("skew"), ee = K("space"), R = K("translate"), b = () => ["auto", "contain", "none"], S = () => ["auto", "hidden", "clip", "visible", "scroll"], U = () => ["auto", O, t], j = () => [O, t], $ = () => ["", ge, je], ae = () => ["auto", $e, O], be = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], Te = () => ["solid", "dashed", "dotted", "double", "none"], rt = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], Ue = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], we = () => ["", "0", O], nt = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], de = () => [$e, O];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [mt],
      spacing: [ge, je],
      blur: ["none", "", Ne, O],
      brightness: de(),
      borderColor: [e],
      borderRadius: ["none", "", "full", Ne, O],
      borderSpacing: j(),
      borderWidth: $(),
      contrast: de(),
      grayscale: we(),
      hueRotate: de(),
      invert: we(),
      gap: j(),
      gradientColorStops: [e],
      gradientColorStopPositions: [$i, je],
      inset: U(),
      margin: U(),
      opacity: de(),
      padding: j(),
      saturate: de(),
      scale: de(),
      sepia: we(),
      skew: de(),
      space: j(),
      translate: j()
    },
    classGroups: {
      // Layout
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", "video", O]
      }],
      /**
       * Container
       * @see https://tailwindcss.com/docs/container
       */
      container: ["container"],
      /**
       * Columns
       * @see https://tailwindcss.com/docs/columns
       */
      columns: [{
        columns: [Ne]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": nt()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": nt()
      }],
      /**
       * Break Inside
       * @see https://tailwindcss.com/docs/break-inside
       */
      "break-inside": [{
        "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
      }],
      /**
       * Box Decoration Break
       * @see https://tailwindcss.com/docs/box-decoration-break
       */
      "box-decoration": [{
        "box-decoration": ["slice", "clone"]
      }],
      /**
       * Box Sizing
       * @see https://tailwindcss.com/docs/box-sizing
       */
      box: [{
        box: ["border", "content"]
      }],
      /**
       * Display
       * @see https://tailwindcss.com/docs/display
       */
      display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
      /**
       * Floats
       * @see https://tailwindcss.com/docs/float
       */
      float: [{
        float: ["right", "left", "none", "start", "end"]
      }],
      /**
       * Clear
       * @see https://tailwindcss.com/docs/clear
       */
      clear: [{
        clear: ["left", "right", "both", "none", "start", "end"]
      }],
      /**
       * Isolation
       * @see https://tailwindcss.com/docs/isolation
       */
      isolation: ["isolate", "isolation-auto"],
      /**
       * Object Fit
       * @see https://tailwindcss.com/docs/object-fit
       */
      "object-fit": [{
        object: ["contain", "cover", "fill", "none", "scale-down"]
      }],
      /**
       * Object Position
       * @see https://tailwindcss.com/docs/object-position
       */
      "object-position": [{
        object: [...be(), O]
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: S()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": S()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": S()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: b()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": b()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": b()
      }],
      /**
       * Position
       * @see https://tailwindcss.com/docs/position
       */
      position: ["static", "fixed", "absolute", "relative", "sticky"],
      /**
       * Top / Right / Bottom / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      inset: [{
        inset: [N]
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": [N]
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": [N]
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: [N]
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: [N]
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: [N]
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: [N]
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: [N]
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: [N]
      }],
      /**
       * Visibility
       * @see https://tailwindcss.com/docs/visibility
       */
      visibility: ["visible", "invisible", "collapse"],
      /**
       * Z-Index
       * @see https://tailwindcss.com/docs/z-index
       */
      z: [{
        z: ["auto", ft, O]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: U()
      }],
      /**
       * Flex Direction
       * @see https://tailwindcss.com/docs/flex-direction
       */
      "flex-direction": [{
        flex: ["row", "row-reverse", "col", "col-reverse"]
      }],
      /**
       * Flex Wrap
       * @see https://tailwindcss.com/docs/flex-wrap
       */
      "flex-wrap": [{
        flex: ["wrap", "wrap-reverse", "nowrap"]
      }],
      /**
       * Flex
       * @see https://tailwindcss.com/docs/flex
       */
      flex: [{
        flex: ["1", "auto", "initial", "none", O]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: we()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: we()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ["first", "last", "none", ft, O]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [mt]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", ft, O]
        }, O]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": ae()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": ae()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": [mt]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [ft, O]
        }, O]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": ae()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": ae()
      }],
      /**
       * Grid Auto Flow
       * @see https://tailwindcss.com/docs/grid-auto-flow
       */
      "grid-flow": [{
        "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
      }],
      /**
       * Grid Auto Columns
       * @see https://tailwindcss.com/docs/grid-auto-columns
       */
      "auto-cols": [{
        "auto-cols": ["auto", "min", "max", "fr", O]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", O]
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: [m]
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": [m]
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": [m]
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: ["normal", ...Ue()]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": ["start", "end", "center", "stretch"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", "start", "end", "center", "stretch"]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...Ue(), "baseline"]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: ["start", "end", "center", "baseline", "stretch"]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", "start", "end", "center", "stretch", "baseline"]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": [...Ue(), "baseline"]
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": ["start", "end", "center", "baseline", "stretch"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", "start", "end", "center", "stretch"]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: [k]
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: [k]
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: [k]
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: [k]
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: [k]
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: [k]
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: [k]
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: [k]
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: [k]
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: [x]
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: [x]
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: [x]
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: [x]
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: [x]
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: [x]
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: [x]
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: [x]
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: [x]
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/space
       */
      "space-x": [{
        "space-x": [ee]
      }],
      /**
       * Space Between X Reverse
       * @see https://tailwindcss.com/docs/space
       */
      "space-x-reverse": ["space-x-reverse"],
      /**
       * Space Between Y
       * @see https://tailwindcss.com/docs/space
       */
      "space-y": [{
        "space-y": [ee]
      }],
      /**
       * Space Between Y Reverse
       * @see https://tailwindcss.com/docs/space
       */
      "space-y-reverse": ["space-y-reverse"],
      // Sizing
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", O, t]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [O, t, "min", "max", "fit"]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [O, t, "none", "full", "min", "max", "fit", "prose", {
          screen: [Ne]
        }, Ne]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [O, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": [O, t, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [O, t, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Size
       * @see https://tailwindcss.com/docs/size
       */
      size: [{
        size: [O, t, "auto", "min", "max", "fit"]
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", Ne, je]
      }],
      /**
       * Font Smoothing
       * @see https://tailwindcss.com/docs/font-smoothing
       */
      "font-smoothing": ["antialiased", "subpixel-antialiased"],
      /**
       * Font Style
       * @see https://tailwindcss.com/docs/font-style
       */
      "font-style": ["italic", "not-italic"],
      /**
       * Font Weight
       * @see https://tailwindcss.com/docs/font-weight
       */
      "font-weight": [{
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", or]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [mt]
      }],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-normal": ["normal-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-ordinal": ["ordinal"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-slashed-zero": ["slashed-zero"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-figure": ["lining-nums", "oldstyle-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-spacing": ["proportional-nums", "tabular-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
      /**
       * Letter Spacing
       * @see https://tailwindcss.com/docs/letter-spacing
       */
      tracking: [{
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", O]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", $e, or]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", ge, O]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", O]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", O]
      }],
      /**
       * List Style Position
       * @see https://tailwindcss.com/docs/list-style-position
       */
      "list-style-position": [{
        list: ["inside", "outside"]
      }],
      /**
       * Placeholder Color
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/placeholder-color
       */
      "placeholder-color": [{
        placeholder: [e]
      }],
      /**
       * Placeholder Opacity
       * @see https://tailwindcss.com/docs/placeholder-opacity
       */
      "placeholder-opacity": [{
        "placeholder-opacity": [C]
      }],
      /**
       * Text Alignment
       * @see https://tailwindcss.com/docs/text-align
       */
      "text-alignment": [{
        text: ["left", "center", "right", "justify", "start", "end"]
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: [e]
      }],
      /**
       * Text Opacity
       * @see https://tailwindcss.com/docs/text-opacity
       */
      "text-opacity": [{
        "text-opacity": [C]
      }],
      /**
       * Text Decoration
       * @see https://tailwindcss.com/docs/text-decoration
       */
      "text-decoration": ["underline", "overline", "line-through", "no-underline"],
      /**
       * Text Decoration Style
       * @see https://tailwindcss.com/docs/text-decoration-style
       */
      "text-decoration-style": [{
        decoration: [...Te(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", ge, je]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", ge, O]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: [e]
      }],
      /**
       * Text Transform
       * @see https://tailwindcss.com/docs/text-transform
       */
      "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
      /**
       * Text Overflow
       * @see https://tailwindcss.com/docs/text-overflow
       */
      "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
      /**
       * Text Wrap
       * @see https://tailwindcss.com/docs/text-wrap
       */
      "text-wrap": [{
        text: ["wrap", "nowrap", "balance", "pretty"]
      }],
      /**
       * Text Indent
       * @see https://tailwindcss.com/docs/text-indent
       */
      indent: [{
        indent: j()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", O]
      }],
      /**
       * Whitespace
       * @see https://tailwindcss.com/docs/whitespace
       */
      whitespace: [{
        whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
      }],
      /**
       * Word Break
       * @see https://tailwindcss.com/docs/word-break
       */
      break: [{
        break: ["normal", "words", "all", "keep"]
      }],
      /**
       * Hyphens
       * @see https://tailwindcss.com/docs/hyphens
       */
      hyphens: [{
        hyphens: ["none", "manual", "auto"]
      }],
      /**
       * Content
       * @see https://tailwindcss.com/docs/content
       */
      content: [{
        content: ["none", O]
      }],
      // Backgrounds
      /**
       * Background Attachment
       * @see https://tailwindcss.com/docs/background-attachment
       */
      "bg-attachment": [{
        bg: ["fixed", "local", "scroll"]
      }],
      /**
       * Background Clip
       * @see https://tailwindcss.com/docs/background-clip
       */
      "bg-clip": [{
        "bg-clip": ["border", "padding", "content", "text"]
      }],
      /**
       * Background Opacity
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/background-opacity
       */
      "bg-opacity": [{
        "bg-opacity": [C]
      }],
      /**
       * Background Origin
       * @see https://tailwindcss.com/docs/background-origin
       */
      "bg-origin": [{
        "bg-origin": ["border", "padding", "content"]
      }],
      /**
       * Background Position
       * @see https://tailwindcss.com/docs/background-position
       */
      "bg-position": [{
        bg: [...be(), Hi]
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: ["no-repeat", {
          repeat: ["", "x", "y", "round", "space"]
        }]
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: ["auto", "cover", "contain", Ki]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, Yi]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: [e]
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: [w]
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: [w]
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: [w]
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: [g]
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: [g]
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: [g]
      }],
      // Borders
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: [i]
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": [i]
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": [i]
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": [i]
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": [i]
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": [i]
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": [i]
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": [i]
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": [i]
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": [i]
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": [i]
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": [i]
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": [i]
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": [i]
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": [i]
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: [o]
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": [o]
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": [o]
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": [o]
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": [o]
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": [o]
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": [o]
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": [o]
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": [o]
      }],
      /**
       * Border Opacity
       * @see https://tailwindcss.com/docs/border-opacity
       */
      "border-opacity": [{
        "border-opacity": [C]
      }],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [...Te(), "hidden"]
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x": [{
        "divide-x": [o]
      }],
      /**
       * Divide Width X Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x-reverse": ["divide-x-reverse"],
      /**
       * Divide Width Y
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-y": [{
        "divide-y": [o]
      }],
      /**
       * Divide Width Y Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-y-reverse": ["divide-y-reverse"],
      /**
       * Divide Opacity
       * @see https://tailwindcss.com/docs/divide-opacity
       */
      "divide-opacity": [{
        "divide-opacity": [C]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/divide-style
       */
      "divide-style": [{
        divide: Te()
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: [a]
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": [a]
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": [a]
      }],
      /**
       * Border Color S
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": [a]
      }],
      /**
       * Border Color E
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": [a]
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": [a]
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": [a]
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": [a]
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": [a]
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: [a]
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: ["", ...Te()]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [ge, O]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [ge, je]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: [e]
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/ring-width
       */
      "ring-w": [{
        ring: $()
      }],
      /**
       * Ring Width Inset
       * @see https://tailwindcss.com/docs/ring-width
       */
      "ring-w-inset": ["ring-inset"],
      /**
       * Ring Color
       * @see https://tailwindcss.com/docs/ring-color
       */
      "ring-color": [{
        ring: [e]
      }],
      /**
       * Ring Opacity
       * @see https://tailwindcss.com/docs/ring-opacity
       */
      "ring-opacity": [{
        "ring-opacity": [C]
      }],
      /**
       * Ring Offset Width
       * @see https://tailwindcss.com/docs/ring-offset-width
       */
      "ring-offset-w": [{
        "ring-offset": [ge, je]
      }],
      /**
       * Ring Offset Color
       * @see https://tailwindcss.com/docs/ring-offset-color
       */
      "ring-offset-color": [{
        "ring-offset": [e]
      }],
      // Effects
      /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */
      shadow: [{
        shadow: ["", "inner", "none", Ne, Ji]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [mt]
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [C]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...rt(), "plus-lighter", "plus-darker"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": rt()
      }],
      // Filters
      /**
       * Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/filter
       */
      filter: [{
        filter: ["", "none"]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: [r]
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [n]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [f]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": ["", "none", Ne, O]
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: [h]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [l]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: [u]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [E]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: [Q]
      }],
      /**
       * Backdrop Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/backdrop-filter
       */
      "backdrop-filter": [{
        "backdrop-filter": ["", "none"]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": [r]
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [n]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [f]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": [h]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [l]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": [u]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [C]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [E]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": [Q]
      }],
      // Tables
      /**
       * Border Collapse
       * @see https://tailwindcss.com/docs/border-collapse
       */
      "border-collapse": [{
        border: ["collapse", "separate"]
      }],
      /**
       * Border Spacing
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing": [{
        "border-spacing": [c]
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": [c]
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": [c]
      }],
      /**
       * Table Layout
       * @see https://tailwindcss.com/docs/table-layout
       */
      "table-layout": [{
        table: ["auto", "fixed"]
      }],
      /**
       * Caption Side
       * @see https://tailwindcss.com/docs/caption-side
       */
      caption: [{
        caption: ["top", "bottom"]
      }],
      // Transitions and Animation
      /**
       * Tranisition Property
       * @see https://tailwindcss.com/docs/transition-property
       */
      transition: [{
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", O]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: de()
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "in", "out", "in-out", O]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: de()
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", "spin", "ping", "pulse", "bounce", O]
      }],
      // Transforms
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: ["", "gpu", "none"]
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: [A]
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": [A]
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": [A]
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: [ft, O]
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": [R]
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": [R]
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": [H]
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": [H]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", O]
      }],
      // Interactivity
      /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */
      accent: [{
        accent: ["auto", e]
      }],
      /**
       * Appearance
       * @see https://tailwindcss.com/docs/appearance
       */
      appearance: [{
        appearance: ["none", "auto"]
      }],
      /**
       * Cursor
       * @see https://tailwindcss.com/docs/cursor
       */
      cursor: [{
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", O]
      }],
      /**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */
      "caret-color": [{
        caret: [e]
      }],
      /**
       * Pointer Events
       * @see https://tailwindcss.com/docs/pointer-events
       */
      "pointer-events": [{
        "pointer-events": ["none", "auto"]
      }],
      /**
       * Resize
       * @see https://tailwindcss.com/docs/resize
       */
      resize: [{
        resize: ["none", "y", "x", ""]
      }],
      /**
       * Scroll Behavior
       * @see https://tailwindcss.com/docs/scroll-behavior
       */
      "scroll-behavior": [{
        scroll: ["auto", "smooth"]
      }],
      /**
       * Scroll Margin
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-m": [{
        "scroll-m": j()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": j()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": j()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": j()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": j()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": j()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": j()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": j()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": j()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": j()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": j()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": j()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": j()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": j()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": j()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": j()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": j()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": j()
      }],
      /**
       * Scroll Snap Align
       * @see https://tailwindcss.com/docs/scroll-snap-align
       */
      "snap-align": [{
        snap: ["start", "end", "center", "align-none"]
      }],
      /**
       * Scroll Snap Stop
       * @see https://tailwindcss.com/docs/scroll-snap-stop
       */
      "snap-stop": [{
        snap: ["normal", "always"]
      }],
      /**
       * Scroll Snap Type
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-type": [{
        snap: ["none", "x", "y", "both"]
      }],
      /**
       * Scroll Snap Type Strictness
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-strictness": [{
        snap: ["mandatory", "proximity"]
      }],
      /**
       * Touch Action
       * @see https://tailwindcss.com/docs/touch-action
       */
      touch: [{
        touch: ["auto", "none", "manipulation"]
      }],
      /**
       * Touch Action X
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-x": [{
        "touch-pan": ["x", "left", "right"]
      }],
      /**
       * Touch Action Y
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-y": [{
        "touch-pan": ["y", "up", "down"]
      }],
      /**
       * Touch Action Pinch Zoom
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-pz": ["touch-pinch-zoom"],
      /**
       * User Select
       * @see https://tailwindcss.com/docs/user-select
       */
      select: [{
        select: ["none", "text", "all", "auto"]
      }],
      /**
       * Will Change
       * @see https://tailwindcss.com/docs/will-change
       */
      "will-change": [{
        "will-change": ["auto", "scroll", "contents", "transform", O]
      }],
      // SVG
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: [e, "none"]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [ge, je, or]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: [e, "none"]
      }],
      // Accessibility
      /**
       * Screen Readers
       * @see https://tailwindcss.com/docs/screen-readers
       */
      sr: ["sr-only", "not-sr-only"],
      /**
       * Forced Color Adjust
       * @see https://tailwindcss.com/docs/forced-color-adjust
       */
      "forced-color-adjust": [{
        "forced-color-adjust": ["auto", "none"]
      }]
    },
    conflictingClassGroups: {
      overflow: ["overflow-x", "overflow-y"],
      overscroll: ["overscroll-x", "overscroll-y"],
      inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
      "inset-x": ["right", "left"],
      "inset-y": ["top", "bottom"],
      flex: ["basis", "grow", "shrink"],
      gap: ["gap-x", "gap-y"],
      p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
      px: ["pr", "pl"],
      py: ["pt", "pb"],
      m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
      mx: ["mr", "ml"],
      my: ["mt", "mb"],
      size: ["w", "h"],
      "font-size": ["leading"],
      "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
      "fvn-ordinal": ["fvn-normal"],
      "fvn-slashed-zero": ["fvn-normal"],
      "fvn-figure": ["fvn-normal"],
      "fvn-spacing": ["fvn-normal"],
      "fvn-fraction": ["fvn-normal"],
      "line-clamp": ["display", "overflow"],
      rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
      "rounded-s": ["rounded-ss", "rounded-es"],
      "rounded-e": ["rounded-se", "rounded-ee"],
      "rounded-t": ["rounded-tl", "rounded-tr"],
      "rounded-r": ["rounded-tr", "rounded-br"],
      "rounded-b": ["rounded-br", "rounded-bl"],
      "rounded-l": ["rounded-tl", "rounded-bl"],
      "border-spacing": ["border-spacing-x", "border-spacing-y"],
      "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
      "border-w-x": ["border-w-r", "border-w-l"],
      "border-w-y": ["border-w-t", "border-w-b"],
      "border-color": ["border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
      "border-color-x": ["border-color-r", "border-color-l"],
      "border-color-y": ["border-color-t", "border-color-b"],
      "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
      "scroll-mx": ["scroll-mr", "scroll-ml"],
      "scroll-my": ["scroll-mt", "scroll-mb"],
      "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
      "scroll-px": ["scroll-pr", "scroll-pl"],
      "scroll-py": ["scroll-pt", "scroll-pb"],
      touch: ["touch-x", "touch-y", "touch-pz"],
      "touch-x": ["touch"],
      "touch-y": ["touch"],
      "touch-pz": ["touch"]
    },
    conflictingClassGroupModifiers: {
      "font-size": ["leading"]
    }
  };
}, ro = /* @__PURE__ */ Di(to);
function re(...e) {
  return ro(ns(e));
}
const no = ss(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
), X = p.forwardRef(
  ({ className: e, variant: t, size: r, asChild: n = !1, ...a }, i) => {
    const c = n ? yi : "button";
    return /* @__PURE__ */ s.jsx(
      c,
      {
        className: re(no({ variant: t, size: r, className: e })),
        ref: i,
        ...a
      }
    );
  }
);
X.displayName = "Button";
const te = p.forwardRef(
  ({ className: e, type: t, ...r }, n) => /* @__PURE__ */ s.jsx(
    "input",
    {
      type: t,
      className: re(
        "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        e
      ),
      ref: n,
      ...r
    }
  )
);
te.displayName = "Input";
var so = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "select",
  "span",
  "svg",
  "ul"
], ao = so.reduce((e, t) => {
  const r = /* @__PURE__ */ ts(`Primitive.${t}`), n = p.forwardRef((a, i) => {
    const { asChild: c, ...o } = a, f = c ? r : t;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ s.jsx(f, { ...o, ref: i });
  });
  return n.displayName = `Primitive.${t}`, { ...e, [t]: n };
}, {}), io = "Label", ds = p.forwardRef((e, t) => /* @__PURE__ */ s.jsx(
  ao.label,
  {
    ...e,
    ref: t,
    onMouseDown: (r) => {
      var a;
      r.target.closest("button, input, select, textarea") || ((a = e.onMouseDown) == null || a.call(e, r), !r.defaultPrevented && r.detail > 1 && r.preventDefault());
    }
  }
));
ds.displayName = io;
var us = ds;
const oo = ss(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
), B = p.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ s.jsx(
  us,
  {
    ref: r,
    className: re(oo(), e),
    ...t
  }
));
B.displayName = us.displayName;
const lo = 1, co = 1e6;
let lr = 0;
function uo() {
  return lr = (lr + 1) % Number.MAX_SAFE_INTEGER, lr.toString();
}
const cr = /* @__PURE__ */ new Map(), Sn = (e) => {
  if (cr.has(e))
    return;
  const t = setTimeout(() => {
    cr.delete(e), Ft({
      type: "REMOVE_TOAST",
      toastId: e
    });
  }, co);
  cr.set(e, t);
}, ho = (e, t) => {
  switch (t.type) {
    case "ADD_TOAST":
      return {
        ...e,
        toasts: [t.toast, ...e.toasts].slice(0, lo)
      };
    case "UPDATE_TOAST":
      return {
        ...e,
        toasts: e.toasts.map(
          (r) => r.id === t.toast.id ? { ...r, ...t.toast } : r
        )
      };
    case "DISMISS_TOAST": {
      const { toastId: r } = t;
      return r ? Sn(r) : e.toasts.forEach((n) => {
        Sn(n.id);
      }), {
        ...e,
        toasts: e.toasts.map(
          (n) => n.id === r || r === void 0 ? {
            ...n,
            open: !1
          } : n
        )
      };
    }
    case "REMOVE_TOAST":
      return t.toastId === void 0 ? {
        ...e,
        toasts: []
      } : {
        ...e,
        toasts: e.toasts.filter((r) => r.id !== t.toastId)
      };
  }
}, fo = [];
let dr = { toasts: [] };
function Ft(e) {
  dr = ho(dr, e), fo.forEach((t) => {
    t(dr);
  });
}
function I({ ...e }) {
  const t = uo(), r = (a) => Ft({
    type: "UPDATE_TOAST",
    toast: { ...a, id: t }
  }), n = () => Ft({ type: "DISMISS_TOAST", toastId: t });
  return Ft({
    type: "ADD_TOAST",
    toast: {
      ...e,
      id: t,
      open: !0,
      onOpenChange: (a) => {
        a || n();
      }
    }
  }), {
    id: t,
    dismiss: n,
    update: r
  };
}
const mo = ({ loginWithEmailPassword: e }) => {
  const [t, r] = Z(""), [n, a] = Z(""), [i, c] = Z(!1), o = Bt(), f = async (h) => {
    h.preventDefault(), c(!0);
    try {
      const { data: l, error: u } = await e(t, n);
      if (u) {
        console.error("Login error:", u), I({
          title: "Login Failed",
          description: typeof u == "string" ? u : "Invalid credentials or you don't have access to this project.",
          variant: "destructive"
        });
        return;
      }
      l && (I({
        title: "Login Successful",
        description: "Welcome back!"
      }), o("/admin"));
    } catch (l) {
      console.error("Unexpected error:", l), I({
        title: "Error",
        description: "An unexpected error occurred. Please try again.",
        variant: "destructive"
      });
    } finally {
      c(!1);
    }
  };
  return /* @__PURE__ */ s.jsx("div", { className: "min-h-screen flex items-center justify-center bg-background", children: /* @__PURE__ */ s.jsxs("div", { className: "w-full max-w-md", children: [
    /* @__PURE__ */ s.jsxs("div", { className: "text-center mb-8", children: [
      /* @__PURE__ */ s.jsx("h1", { className: "font-serif text-6xl text-gold", children: "Velour Essence" }),
      /* @__PURE__ */ s.jsx("p", { className: "text-black/60 mt-2", children: "Admin Dashboard" })
    ] }),
    /* @__PURE__ */ s.jsxs("div", { className: "bg-emerald-light border border-gold/20 rounded-lg shadow-lg p-8", children: [
      /* @__PURE__ */ s.jsx("h2", { className: "font-serif text-2xl text-gold mb-6 text-center", children: "Login" }),
      /* @__PURE__ */ s.jsxs("form", { onSubmit: f, className: "space-y-6", children: [
        /* @__PURE__ */ s.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ s.jsx(B, { htmlFor: "email", className: "text-white", children: "Email" }),
          /* @__PURE__ */ s.jsx(
            te,
            {
              id: "email",
              type: "email",
              value: t,
              onChange: (h) => r(h.target.value),
              className: "bg-emerald-light/20 border-gold/30 text-white placeholder-white/50",
              placeholder: "admin@example.com",
              required: !0,
              disabled: i
            }
          )
        ] }),
        /* @__PURE__ */ s.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ s.jsx("div", { className: "flex justify-between items-center", children: /* @__PURE__ */ s.jsx(B, { htmlFor: "password", className: "text-white", children: "Password" }) }),
          /* @__PURE__ */ s.jsx(
            te,
            {
              id: "password",
              type: "password",
              value: n,
              onChange: (h) => a(h.target.value),
              className: "bg-emerald-light/20 border-gold/30 text-white placeholder-white/50",
              required: !0,
              disabled: i
            }
          )
        ] }),
        /* @__PURE__ */ s.jsx(
          X,
          {
            type: "submit",
            className: "w-full bg-gold text-black hover:bg-gold/90",
            disabled: i,
            children: i ? /* @__PURE__ */ s.jsxs("span", { className: "flex items-center", children: [
              /* @__PURE__ */ s.jsxs(
                "svg",
                {
                  className: "animate-spin -ml-1 mr-2 h-4 w-4 text-black",
                  xmlns: "http://www.w3.org/2000/svg",
                  fill: "none",
                  viewBox: "0 0 24 24",
                  children: [
                    /* @__PURE__ */ s.jsx(
                      "circle",
                      {
                        className: "opacity-25",
                        cx: "12",
                        cy: "12",
                        r: "10",
                        stroke: "currentColor",
                        strokeWidth: "4"
                      }
                    ),
                    /* @__PURE__ */ s.jsx(
                      "path",
                      {
                        className: "opacity-75",
                        fill: "currentColor",
                        d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      }
                    )
                  ]
                }
              ),
              "Loading..."
            ] }) : "Sign In"
          }
        )
      ] }),
      /* @__PURE__ */ s.jsx("div", { className: "mt-6 text-center text-white/50 text-sm", children: /* @__PURE__ */ s.jsx("p", { children: "For testing purposes, please contact the administrator for login credentials." }) })
    ] })
  ] }) });
};
var Kt = class {
  constructor() {
    this.listeners = /* @__PURE__ */ new Set(), this.subscribe = this.subscribe.bind(this);
  }
  subscribe(e) {
    return this.listeners.add(e), this.onSubscribe(), () => {
      this.listeners.delete(e), this.onUnsubscribe();
    };
  }
  hasListeners() {
    return this.listeners.size > 0;
  }
  onSubscribe() {
  }
  onUnsubscribe() {
  }
}, yt = typeof window > "u" || "Deno" in globalThis;
function zt() {
}
function Pn(e) {
  return typeof e == "number" && e >= 0 && e !== 1 / 0;
}
function po(e, t) {
  return Math.max(e + (t || 0) - Date.now(), 0);
}
function Mt(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function fe(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function An(e) {
  return JSON.stringify(
    e,
    (t, r) => br(r) ? Object.keys(r).sort().reduce((n, a) => (n[a] = r[a], n), {}) : r
  );
}
function yr(e, t) {
  if (e === t)
    return e;
  const r = On(e) && On(t);
  if (r || br(e) && br(t)) {
    const n = r ? e : Object.keys(e), a = n.length, i = r ? t : Object.keys(t), c = i.length, o = r ? [] : {};
    let f = 0;
    for (let h = 0; h < c; h++) {
      const l = r ? h : i[h];
      (!r && n.includes(l) || r) && e[l] === void 0 && t[l] === void 0 ? (o[l] = void 0, f++) : (o[l] = yr(e[l], t[l]), o[l] === e[l] && e[l] !== void 0 && f++);
    }
    return a === c && f === a ? e : o;
  }
  return t;
}
function Vt(e, t) {
  if (!t || Object.keys(e).length !== Object.keys(t).length)
    return !1;
  for (const r in e)
    if (e[r] !== t[r])
      return !1;
  return !0;
}
function On(e) {
  return Array.isArray(e) && e.length === Object.keys(e).length;
}
function br(e) {
  if (!Tn(e))
    return !1;
  const t = e.constructor;
  if (t === void 0)
    return !0;
  const r = t.prototype;
  return !(!Tn(r) || !r.hasOwnProperty("isPrototypeOf") || Object.getPrototypeOf(e) !== Object.prototype);
}
function Tn(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function Ln(e, t, r) {
  if (typeof r.structuralSharing == "function")
    return r.structuralSharing(e, t);
  if (r.structuralSharing !== !1) {
    if (process.env.NODE_ENV !== "production")
      try {
        return yr(e, t);
      } catch (n) {
        throw console.error(
          `Structural sharing requires data to be JSON serializable. To fix this, turn off structuralSharing or return JSON-serializable data from your queryFn. [${r.queryHash}]: ${n}`
        ), n;
      }
    return yr(e, t);
  }
  return t;
}
function hs(e, t) {
  return typeof e == "function" ? e(...t) : !!e;
}
var Me, Ce, Ge, zn, go = (zn = class extends Kt {
  constructor() {
    super();
    V(this, Me);
    V(this, Ce);
    V(this, Ge);
    L(this, Ge, (t) => {
      if (!yt && window.addEventListener) {
        const r = () => t();
        return window.addEventListener("visibilitychange", r, !1), () => {
          window.removeEventListener("visibilitychange", r);
        };
      }
    });
  }
  onSubscribe() {
    v(this, Ce) || this.setEventListener(v(this, Ge));
  }
  onUnsubscribe() {
    var t;
    this.hasListeners() || ((t = v(this, Ce)) == null || t.call(this), L(this, Ce, void 0));
  }
  setEventListener(t) {
    var r;
    L(this, Ge, t), (r = v(this, Ce)) == null || r.call(this), L(this, Ce, t((n) => {
      typeof n == "boolean" ? this.setFocused(n) : this.onFocus();
    }));
  }
  setFocused(t) {
    v(this, Me) !== t && (L(this, Me, t), this.onFocus());
  }
  onFocus() {
    const t = this.isFocused();
    this.listeners.forEach((r) => {
      r(t);
    });
  }
  isFocused() {
    var t;
    return typeof v(this, Me) == "boolean" ? v(this, Me) : ((t = globalThis.document) == null ? void 0 : t.visibilityState) !== "hidden";
  }
}, Me = new WeakMap(), Ce = new WeakMap(), Ge = new WeakMap(), zn), vo = new go(), Ke, Ee, He, Vn, xo = (Vn = class extends Kt {
  constructor() {
    super();
    V(this, Ke, !0);
    V(this, Ee);
    V(this, He);
    L(this, He, (t) => {
      if (!yt && window.addEventListener) {
        const r = () => t(!0), n = () => t(!1);
        return window.addEventListener("online", r, !1), window.addEventListener("offline", n, !1), () => {
          window.removeEventListener("online", r), window.removeEventListener("offline", n);
        };
      }
    });
  }
  onSubscribe() {
    v(this, Ee) || this.setEventListener(v(this, He));
  }
  onUnsubscribe() {
    var t;
    this.hasListeners() || ((t = v(this, Ee)) == null || t.call(this), L(this, Ee, void 0));
  }
  setEventListener(t) {
    var r;
    L(this, He, t), (r = v(this, Ee)) == null || r.call(this), L(this, Ee, t(this.setOnline.bind(this)));
  }
  setOnline(t) {
    v(this, Ke) !== t && (L(this, Ke, t), this.listeners.forEach((n) => {
      n(t);
    }));
  }
  isOnline() {
    return v(this, Ke);
  }
}, Ke = new WeakMap(), Ee = new WeakMap(), He = new WeakMap(), Vn), yo = new xo();
function Fn() {
  let e, t;
  const r = new Promise((a, i) => {
    e = a, t = i;
  });
  r.status = "pending", r.catch(() => {
  });
  function n(a) {
    Object.assign(r, a), delete r.resolve, delete r.reject;
  }
  return r.resolve = (a) => {
    n({
      status: "fulfilled",
      value: a
    }), e(a);
  }, r.reject = (a) => {
    n({
      status: "rejected",
      reason: a
    }), t(a);
  }, r;
}
function bo(e) {
  return (e ?? "online") === "online" ? yo.isOnline() : !0;
}
var wo = (e) => setTimeout(e, 0);
function jo() {
  let e = [], t = 0, r = (o) => {
    o();
  }, n = (o) => {
    o();
  }, a = wo;
  const i = (o) => {
    t ? e.push(o) : a(() => {
      r(o);
    });
  }, c = () => {
    const o = e;
    e = [], o.length && a(() => {
      n(() => {
        o.forEach((f) => {
          r(f);
        });
      });
    });
  };
  return {
    batch: (o) => {
      let f;
      t++;
      try {
        f = o();
      } finally {
        t--, t || c();
      }
      return f;
    },
    /**
     * All calls to the wrapped function will be batched.
     */
    batchCalls: (o) => (...f) => {
      i(() => {
        o(...f);
      });
    },
    schedule: i,
    /**
     * Use this method to set a custom notify function.
     * This can be used to for example wrap notifications with `React.act` while running tests.
     */
    setNotifyFunction: (o) => {
      r = o;
    },
    /**
     * Use this method to set a custom function to batch notifications together into a single tick.
     * By default React Query will use the batch function provided by ReactDOM or React Native.
     */
    setBatchNotifyFunction: (o) => {
      n = o;
    },
    setScheduler: (o) => {
      a = o;
    }
  };
}
var Ht = jo();
function No(e, t) {
  return {
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchStatus: bo(t.networkMode) ? "fetching" : "paused",
    ...e === void 0 && {
      error: null,
      status: "pending"
    }
  };
}
function Co() {
  return {
    context: void 0,
    data: void 0,
    error: null,
    failureCount: 0,
    failureReason: null,
    isPaused: !1,
    status: "idle",
    variables: void 0,
    submittedAt: 0
  };
}
var oe, M, bt, se, De, Qe, _e, ke, wt, Ye, Je, Ie, qe, Re, Xe, z, pt, wr, jr, Nr, Cr, Er, _r, kr, fs, Un, Eo = (Un = class extends Kt {
  constructor(t, r) {
    super();
    V(this, z);
    V(this, oe);
    V(this, M);
    V(this, bt);
    V(this, se);
    V(this, De);
    V(this, Qe);
    V(this, _e);
    V(this, ke);
    V(this, wt);
    V(this, Ye);
    // This property keeps track of the last query with defined data.
    // It will be used to pass the previous data and query to the placeholder function between renders.
    V(this, Je);
    V(this, Ie);
    V(this, qe);
    V(this, Re);
    V(this, Xe, /* @__PURE__ */ new Set());
    this.options = r, L(this, oe, t), L(this, ke, null), L(this, _e, Fn()), this.options.experimental_prefetchInRender || v(this, _e).reject(
      new Error("experimental_prefetchInRender feature flag is not enabled")
    ), this.bindMethods(), this.setOptions(r);
  }
  bindMethods() {
    this.refetch = this.refetch.bind(this);
  }
  onSubscribe() {
    this.listeners.size === 1 && (v(this, M).addObserver(this), Mn(v(this, M), this.options) ? G(this, z, pt).call(this) : this.updateResult(), G(this, z, Cr).call(this));
  }
  onUnsubscribe() {
    this.hasListeners() || this.destroy();
  }
  shouldFetchOnReconnect() {
    return Rr(
      v(this, M),
      this.options,
      this.options.refetchOnReconnect
    );
  }
  shouldFetchOnWindowFocus() {
    return Rr(
      v(this, M),
      this.options,
      this.options.refetchOnWindowFocus
    );
  }
  destroy() {
    this.listeners = /* @__PURE__ */ new Set(), G(this, z, Er).call(this), G(this, z, _r).call(this), v(this, M).removeObserver(this);
  }
  setOptions(t) {
    const r = this.options, n = v(this, M);
    if (this.options = v(this, oe).defaultQueryOptions(t), this.options.enabled !== void 0 && typeof this.options.enabled != "boolean" && typeof this.options.enabled != "function" && typeof fe(this.options.enabled, v(this, M)) != "boolean")
      throw new Error(
        "Expected enabled to be a boolean or a callback that returns a boolean"
      );
    G(this, z, kr).call(this), v(this, M).setOptions(this.options), r._defaulted && !Vt(this.options, r) && v(this, oe).getQueryCache().notify({
      type: "observerOptionsUpdated",
      query: v(this, M),
      observer: this
    });
    const a = this.hasListeners();
    a && Dn(
      v(this, M),
      n,
      this.options,
      r
    ) && G(this, z, pt).call(this), this.updateResult(), a && (v(this, M) !== n || fe(this.options.enabled, v(this, M)) !== fe(r.enabled, v(this, M)) || Mt(this.options.staleTime, v(this, M)) !== Mt(r.staleTime, v(this, M))) && G(this, z, wr).call(this);
    const i = G(this, z, jr).call(this);
    a && (v(this, M) !== n || fe(this.options.enabled, v(this, M)) !== fe(r.enabled, v(this, M)) || i !== v(this, Re)) && G(this, z, Nr).call(this, i);
  }
  getOptimisticResult(t) {
    const r = v(this, oe).getQueryCache().build(v(this, oe), t), n = this.createResult(r, t);
    return ko(this, n) && (L(this, se, n), L(this, Qe, this.options), L(this, De, v(this, M).state)), n;
  }
  getCurrentResult() {
    return v(this, se);
  }
  trackResult(t, r) {
    return new Proxy(t, {
      get: (n, a) => (this.trackProp(a), r == null || r(a), Reflect.get(n, a))
    });
  }
  trackProp(t) {
    v(this, Xe).add(t);
  }
  getCurrentQuery() {
    return v(this, M);
  }
  refetch({ ...t } = {}) {
    return this.fetch({
      ...t
    });
  }
  fetchOptimistic(t) {
    const r = v(this, oe).defaultQueryOptions(t), n = v(this, oe).getQueryCache().build(v(this, oe), r);
    return n.fetch().then(() => this.createResult(n, r));
  }
  fetch(t) {
    return G(this, z, pt).call(this, {
      ...t,
      cancelRefetch: t.cancelRefetch ?? !0
    }).then(() => (this.updateResult(), v(this, se)));
  }
  createResult(t, r) {
    var b;
    const n = v(this, M), a = this.options, i = v(this, se), c = v(this, De), o = v(this, Qe), h = t !== n ? t.state : v(this, bt), { state: l } = t;
    let u = { ...l }, m = !1, g;
    if (r._optimisticResults) {
      const S = this.hasListeners(), U = !S && Mn(t, r), j = S && Dn(t, n, r, a);
      (U || j) && (u = {
        ...u,
        ...No(l.data, t.options)
      }), r._optimisticResults === "isRestoring" && (u.fetchStatus = "idle");
    }
    let { error: w, errorUpdatedAt: N, status: x } = u;
    g = u.data;
    let C = !1;
    if (r.placeholderData !== void 0 && g === void 0 && x === "pending") {
      let S;
      i != null && i.isPlaceholderData && r.placeholderData === (o == null ? void 0 : o.placeholderData) ? (S = i.data, C = !0) : S = typeof r.placeholderData == "function" ? r.placeholderData(
        (b = v(this, Je)) == null ? void 0 : b.state.data,
        v(this, Je)
      ) : r.placeholderData, S !== void 0 && (x = "success", g = Ln(
        i == null ? void 0 : i.data,
        S,
        r
      ), m = !0);
    }
    if (r.select && g !== void 0 && !C)
      if (i && g === (c == null ? void 0 : c.data) && r.select === v(this, wt))
        g = v(this, Ye);
      else
        try {
          L(this, wt, r.select), g = r.select(g), g = Ln(i == null ? void 0 : i.data, g, r), L(this, Ye, g), L(this, ke, null);
        } catch (S) {
          L(this, ke, S);
        }
    v(this, ke) && (w = v(this, ke), g = v(this, Ye), N = Date.now(), x = "error");
    const k = u.fetchStatus === "fetching", E = x === "pending", A = x === "error", Q = E && k, H = g !== void 0, R = {
      status: x,
      fetchStatus: u.fetchStatus,
      isPending: E,
      isSuccess: x === "success",
      isError: A,
      isInitialLoading: Q,
      isLoading: Q,
      data: g,
      dataUpdatedAt: u.dataUpdatedAt,
      error: w,
      errorUpdatedAt: N,
      failureCount: u.fetchFailureCount,
      failureReason: u.fetchFailureReason,
      errorUpdateCount: u.errorUpdateCount,
      isFetched: u.dataUpdateCount > 0 || u.errorUpdateCount > 0,
      isFetchedAfterMount: u.dataUpdateCount > h.dataUpdateCount || u.errorUpdateCount > h.errorUpdateCount,
      isFetching: k,
      isRefetching: k && !E,
      isLoadingError: A && !H,
      isPaused: u.fetchStatus === "paused",
      isPlaceholderData: m,
      isRefetchError: A && H,
      isStale: Br(t, r),
      refetch: this.refetch,
      promise: v(this, _e)
    };
    if (this.options.experimental_prefetchInRender) {
      const S = ($) => {
        R.status === "error" ? $.reject(R.error) : R.data !== void 0 && $.resolve(R.data);
      }, U = () => {
        const $ = L(this, _e, R.promise = Fn());
        S($);
      }, j = v(this, _e);
      switch (j.status) {
        case "pending":
          t.queryHash === n.queryHash && S(j);
          break;
        case "fulfilled":
          (R.status === "error" || R.data !== j.value) && U();
          break;
        case "rejected":
          (R.status !== "error" || R.error !== j.reason) && U();
          break;
      }
    }
    return R;
  }
  updateResult() {
    const t = v(this, se), r = this.createResult(v(this, M), this.options);
    if (L(this, De, v(this, M).state), L(this, Qe, this.options), v(this, De).data !== void 0 && L(this, Je, v(this, M)), Vt(r, t))
      return;
    L(this, se, r);
    const n = () => {
      if (!t)
        return !0;
      const { notifyOnChangeProps: a } = this.options, i = typeof a == "function" ? a() : a;
      if (i === "all" || !i && !v(this, Xe).size)
        return !0;
      const c = new Set(
        i ?? v(this, Xe)
      );
      return this.options.throwOnError && c.add("error"), Object.keys(v(this, se)).some((o) => {
        const f = o;
        return v(this, se)[f] !== t[f] && c.has(f);
      });
    };
    G(this, z, fs).call(this, { listeners: n() });
  }
  onQueryUpdate() {
    this.updateResult(), this.hasListeners() && G(this, z, Cr).call(this);
  }
}, oe = new WeakMap(), M = new WeakMap(), bt = new WeakMap(), se = new WeakMap(), De = new WeakMap(), Qe = new WeakMap(), _e = new WeakMap(), ke = new WeakMap(), wt = new WeakMap(), Ye = new WeakMap(), Je = new WeakMap(), Ie = new WeakMap(), qe = new WeakMap(), Re = new WeakMap(), Xe = new WeakMap(), z = new WeakSet(), pt = function(t) {
  G(this, z, kr).call(this);
  let r = v(this, M).fetch(
    this.options,
    t
  );
  return t != null && t.throwOnError || (r = r.catch(zt)), r;
}, wr = function() {
  G(this, z, Er).call(this);
  const t = Mt(
    this.options.staleTime,
    v(this, M)
  );
  if (yt || v(this, se).isStale || !Pn(t))
    return;
  const n = po(v(this, se).dataUpdatedAt, t) + 1;
  L(this, Ie, setTimeout(() => {
    v(this, se).isStale || this.updateResult();
  }, n));
}, jr = function() {
  return (typeof this.options.refetchInterval == "function" ? this.options.refetchInterval(v(this, M)) : this.options.refetchInterval) ?? !1;
}, Nr = function(t) {
  G(this, z, _r).call(this), L(this, Re, t), !(yt || fe(this.options.enabled, v(this, M)) === !1 || !Pn(v(this, Re)) || v(this, Re) === 0) && L(this, qe, setInterval(() => {
    (this.options.refetchIntervalInBackground || vo.isFocused()) && G(this, z, pt).call(this);
  }, v(this, Re)));
}, Cr = function() {
  G(this, z, wr).call(this), G(this, z, Nr).call(this, G(this, z, jr).call(this));
}, Er = function() {
  v(this, Ie) && (clearTimeout(v(this, Ie)), L(this, Ie, void 0));
}, _r = function() {
  v(this, qe) && (clearInterval(v(this, qe)), L(this, qe, void 0));
}, kr = function() {
  const t = v(this, oe).getQueryCache().build(v(this, oe), this.options);
  if (t === v(this, M))
    return;
  const r = v(this, M);
  L(this, M, t), L(this, bt, t.state), this.hasListeners() && (r == null || r.removeObserver(this), t.addObserver(this));
}, fs = function(t) {
  Ht.batch(() => {
    t.listeners && this.listeners.forEach((r) => {
      r(v(this, se));
    }), v(this, oe).getQueryCache().notify({
      query: v(this, M),
      type: "observerResultsUpdated"
    });
  });
}, Un);
function _o(e, t) {
  return fe(t.enabled, e) !== !1 && e.state.data === void 0 && !(e.state.status === "error" && t.retryOnMount === !1);
}
function Mn(e, t) {
  return _o(e, t) || e.state.data !== void 0 && Rr(e, t, t.refetchOnMount);
}
function Rr(e, t, r) {
  if (fe(t.enabled, e) !== !1) {
    const n = typeof r == "function" ? r(e) : r;
    return n === "always" || n !== !1 && Br(e, t);
  }
  return !1;
}
function Dn(e, t, r, n) {
  return (e !== t || fe(n.enabled, e) === !1) && (!r.suspense || e.state.status !== "error") && Br(e, r);
}
function Br(e, t) {
  return fe(t.enabled, e) !== !1 && e.isStaleByTime(Mt(t.staleTime, e));
}
function ko(e, t) {
  return !Vt(e.getCurrentResult(), t);
}
var Se, Pe, le, ve, ye, Dt, Sr, Wn, Ro = (Wn = class extends Kt {
  constructor(t, r) {
    super();
    V(this, ye);
    V(this, Se);
    V(this, Pe);
    V(this, le);
    V(this, ve);
    L(this, Se, t), this.setOptions(r), this.bindMethods(), G(this, ye, Dt).call(this);
  }
  bindMethods() {
    this.mutate = this.mutate.bind(this), this.reset = this.reset.bind(this);
  }
  setOptions(t) {
    var n;
    const r = this.options;
    this.options = v(this, Se).defaultMutationOptions(t), Vt(this.options, r) || v(this, Se).getMutationCache().notify({
      type: "observerOptionsUpdated",
      mutation: v(this, le),
      observer: this
    }), r != null && r.mutationKey && this.options.mutationKey && An(r.mutationKey) !== An(this.options.mutationKey) ? this.reset() : ((n = v(this, le)) == null ? void 0 : n.state.status) === "pending" && v(this, le).setOptions(this.options);
  }
  onUnsubscribe() {
    var t;
    this.hasListeners() || (t = v(this, le)) == null || t.removeObserver(this);
  }
  onMutationUpdate(t) {
    G(this, ye, Dt).call(this), G(this, ye, Sr).call(this, t);
  }
  getCurrentResult() {
    return v(this, Pe);
  }
  reset() {
    var t;
    (t = v(this, le)) == null || t.removeObserver(this), L(this, le, void 0), G(this, ye, Dt).call(this), G(this, ye, Sr).call(this);
  }
  mutate(t, r) {
    var n;
    return L(this, ve, r), (n = v(this, le)) == null || n.removeObserver(this), L(this, le, v(this, Se).getMutationCache().build(v(this, Se), this.options)), v(this, le).addObserver(this), v(this, le).execute(t);
  }
}, Se = new WeakMap(), Pe = new WeakMap(), le = new WeakMap(), ve = new WeakMap(), ye = new WeakSet(), Dt = function() {
  var r;
  const t = ((r = v(this, le)) == null ? void 0 : r.state) ?? Co();
  L(this, Pe, {
    ...t,
    isPending: t.status === "pending",
    isSuccess: t.status === "success",
    isError: t.status === "error",
    isIdle: t.status === "idle",
    mutate: this.mutate,
    reset: this.reset
  });
}, Sr = function(t) {
  Ht.batch(() => {
    var r, n, a, i, c, o, f, h;
    if (v(this, ve) && this.hasListeners()) {
      const l = v(this, Pe).variables, u = v(this, Pe).context;
      (t == null ? void 0 : t.type) === "success" ? ((n = (r = v(this, ve)).onSuccess) == null || n.call(r, t.data, l, u), (i = (a = v(this, ve)).onSettled) == null || i.call(a, t.data, null, l, u)) : (t == null ? void 0 : t.type) === "error" && ((o = (c = v(this, ve)).onError) == null || o.call(c, t.error, l, u), (h = (f = v(this, ve)).onSettled) == null || h.call(
        f,
        void 0,
        t.error,
        l,
        u
      ));
    }
    this.listeners.forEach((l) => {
      l(v(this, Pe));
    });
  });
}, Wn), So = p.createContext(
  void 0
), tt = (e) => {
  const t = p.useContext(So);
  if (!t)
    throw new Error("No QueryClient set, use QueryClientProvider to set one");
  return t;
}, ms = p.createContext(!1), Po = () => p.useContext(ms);
ms.Provider;
function Ao() {
  let e = !1;
  return {
    clearReset: () => {
      e = !1;
    },
    reset: () => {
      e = !0;
    },
    isReset: () => e
  };
}
var Oo = p.createContext(Ao()), To = () => p.useContext(Oo), Lo = (e, t) => {
  (e.suspense || e.throwOnError || e.experimental_prefetchInRender) && (t.isReset() || (e.retryOnMount = !1));
}, Fo = (e) => {
  p.useEffect(() => {
    e.clearReset();
  }, [e]);
}, Mo = ({
  result: e,
  errorResetBoundary: t,
  throwOnError: r,
  query: n,
  suspense: a
}) => e.isError && !t.isReset() && !e.isFetching && n && (a && e.data === void 0 || hs(r, [e.error, n])), Do = (e) => {
  const t = e.staleTime;
  e.suspense && (e.staleTime = typeof t == "function" ? (...r) => Math.max(t(...r), 1e3) : Math.max(t ?? 1e3, 1e3), typeof e.gcTime == "number" && (e.gcTime = Math.max(e.gcTime, 1e3)));
}, Io = (e, t) => e.isLoading && e.isFetching && !t, qo = (e, t) => (e == null ? void 0 : e.suspense) && t.isPending, In = (e, t, r) => t.fetchOptimistic(e).catch(() => {
  r.clearReset();
});
function zo(e, t, r) {
  var u, m, g, w, N;
  if (process.env.NODE_ENV !== "production" && (typeof e != "object" || Array.isArray(e)))
    throw new Error(
      'Bad argument type. Starting with v5, only the "Object" form is allowed when calling query related functions. Please use the error stack to find the culprit call. More info here: https://tanstack.com/query/latest/docs/react/guides/migrating-to-v5#supports-a-single-signature-one-object'
    );
  const n = tt(), a = Po(), i = To(), c = n.defaultQueryOptions(e);
  (m = (u = n.getDefaultOptions().queries) == null ? void 0 : u._experimental_beforeQuery) == null || m.call(
    u,
    c
  ), process.env.NODE_ENV !== "production" && (c.queryFn || console.error(
    `[${c.queryHash}]: No queryFn was passed as an option, and no default queryFn was found. The queryFn parameter is only optional when using a default queryFn. More info here: https://tanstack.com/query/latest/docs/framework/react/guides/default-query-function`
  )), c._optimisticResults = a ? "isRestoring" : "optimistic", Do(c), Lo(c, i), Fo(i);
  const o = !n.getQueryCache().get(c.queryHash), [f] = p.useState(
    () => new t(
      n,
      c
    )
  ), h = f.getOptimisticResult(c), l = !a && e.subscribed !== !1;
  if (p.useSyncExternalStore(
    p.useCallback(
      (x) => {
        const C = l ? f.subscribe(Ht.batchCalls(x)) : zt;
        return f.updateResult(), C;
      },
      [f, l]
    ),
    () => f.getCurrentResult(),
    () => f.getCurrentResult()
  ), p.useEffect(() => {
    f.setOptions(c);
  }, [c, f]), qo(c, h))
    throw In(c, f, i);
  if (Mo({
    result: h,
    errorResetBoundary: i,
    throwOnError: c.throwOnError,
    query: n.getQueryCache().get(c.queryHash),
    suspense: c.suspense
  }))
    throw h.error;
  if ((w = (g = n.getDefaultOptions().queries) == null ? void 0 : g._experimental_afterQuery) == null || w.call(
    g,
    c,
    h
  ), c.experimental_prefetchInRender && !yt && Io(h, a)) {
    const x = o ? (
      // Fetch immediately on render in order to ensure `.promise` is resolved even if the component is unmounted
      In(c, f, i)
    ) : (
      // subscribe to the "cache promise" so that we can finalize the currentThenable once data comes in
      (N = n.getQueryCache().get(c.queryHash)) == null ? void 0 : N.promise
    );
    x == null || x.catch(zt).finally(() => {
      f.updateResult();
    });
  }
  return c.notifyOnChangeProps ? h : f.trackResult(h);
}
function Ae(e, t) {
  return zo(e, Eo);
}
function ce(e, t) {
  const r = tt(), [n] = p.useState(
    () => new Ro(
      r,
      e
    )
  );
  p.useEffect(() => {
    n.setOptions(e);
  }, [n, e]);
  const a = p.useSyncExternalStore(
    p.useCallback(
      (c) => n.subscribe(Ht.batchCalls(c)),
      [n]
    ),
    () => n.getCurrentResult(),
    () => n.getCurrentResult()
  ), i = p.useCallback(
    (c, o) => {
      n.mutate(c, o).catch(zt);
    },
    [n]
  );
  if (a.error && hs(n.options.throwOnError, [a.error]))
    throw a.error;
  return { ...a, mutate: i, mutateAsync: a.mutate };
}
const ur = 768;
function Vo() {
  const [e, t] = p.useState(void 0);
  return p.useEffect(() => {
    const r = window.matchMedia(`(max-width: ${ur - 1}px)`), n = () => {
      t(window.innerWidth < ur);
    };
    return r.addEventListener("change", n), t(window.innerWidth < ur), () => r.removeEventListener("change", n);
  }, []), !!e;
}
const ps = Ks(void 0), Uo = ({ children: e, logout: t, config: r }) => /* @__PURE__ */ s.jsx(ps.Provider, { value: { logout: t, config: r }, children: e }), Wo = () => {
  const e = Hs(ps);
  if (!e)
    throw new Error("useAdminContext must be used within an AdminProvider");
  return e;
}, Et = ({
  children: e,
  title: t
}) => {
  const [r, n] = Z(!1), a = Bt(), i = Oe(), c = Vo(), { logout: o } = Wo();
  Fr(() => {
    c && n(!1);
  }, [i.pathname, c]);
  const f = async () => {
    try {
      const { error: l } = await o();
      if (l) throw l;
      I({
        title: "Logged out successfully"
      }), a("/auth/login");
    } catch (l) {
      console.error("Logout failed:", l), I({
        title: "Error",
        description: "Failed to log out. Please try again.",
        variant: "destructive"
      });
    }
  }, h = [
    { name: "Dashboard", path: "/admin", icon: "home" },
    { name: "Products", path: "/admin/products", icon: "box" },
    { name: "Articles", path: "/admin/articles", icon: "file-text" },
    { name: "Gallery", path: "/admin/gallery", icon: "image" },
    {
      name: "Testimonials",
      path: "/admin/testimonials",
      icon: "message-square"
    }
  ];
  return /* @__PURE__ */ s.jsxs("div", { className: "min-h-screen bg-background text-white flex flex-col md:flex-row", children: [
    /* @__PURE__ */ s.jsxs("header", { className: "bg-emerald-light border-b border-white/10 p-4 flex justify-between items-center md:hidden", children: [
      /* @__PURE__ */ s.jsx("div", { className: "font-serif text-gold text-xl", children: "Velour Admin" }),
      /* @__PURE__ */ s.jsx(
        X,
        {
          variant: "ghost",
          size: "icon",
          className: "text-white",
          onClick: () => n(!r),
          children: /* @__PURE__ */ s.jsx(
            "svg",
            {
              className: "w-6 h-6",
              fill: "none",
              stroke: "currentColor",
              viewBox: "0 0 24 24",
              children: r ? /* @__PURE__ */ s.jsx(
                "path",
                {
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: "2",
                  d: "M6 18L18 6M6 6l12 12"
                }
              ) : /* @__PURE__ */ s.jsx(
                "path",
                {
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: "2",
                  d: "M4 6h16M4 12h16M4 18h16"
                }
              )
            }
          )
        }
      )
    ] }),
    /* @__PURE__ */ s.jsxs(
      "aside",
      {
        className: `bg-emerald-light w-full md:w-64 flex-shrink-0 border-r border-white/10 md:flex flex-col 
                    ${c ? r ? "fixed inset-0 z-50 block" : "hidden" : "flex"}`,
        children: [
          /* @__PURE__ */ s.jsx("div", { className: "p-6 border-b border-white/10", children: /* @__PURE__ */ s.jsx(
            ze,
            {
              to: "/admin",
              className: "font-serif text-gold text-xl flex items-center",
              children: "Velour Essence"
            }
          ) }),
          /* @__PURE__ */ s.jsx("nav", { className: "flex-1 p-4 space-y-1", children: h.map((l) => /* @__PURE__ */ s.jsxs(
            ze,
            {
              to: l.path,
              className: `flex items-center px-4 py-3 rounded-lg transition-colors ${i.pathname === l.path ? "bg-emerald text-gold" : "text-white/70 hover:bg-emerald/50"}`,
              children: [
                /* @__PURE__ */ s.jsxs(
                  "svg",
                  {
                    className: "w-5 h-5 mr-3",
                    fill: "none",
                    stroke: "currentColor",
                    viewBox: "0 0 24 24",
                    children: [
                      l.icon === "home" && /* @__PURE__ */ s.jsx(
                        "path",
                        {
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          strokeWidth: "2",
                          d: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                        }
                      ),
                      l.icon === "box" && /* @__PURE__ */ s.jsx(
                        "path",
                        {
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          strokeWidth: "2",
                          d: "M20 7l-8-4-8 4m16 0v10a2 2 0 01-2 2H6a2 2 0 01-2-2V7m16 0l-8 4m-8-4l8 4"
                        }
                      ),
                      l.icon === "file-text" && /* @__PURE__ */ s.jsx(
                        "path",
                        {
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          strokeWidth: "2",
                          d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        }
                      ),
                      l.icon === "image" && /* @__PURE__ */ s.jsx(
                        "path",
                        {
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          strokeWidth: "2",
                          d: "M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                        }
                      ),
                      l.icon === "message-square" && /* @__PURE__ */ s.jsx(
                        "path",
                        {
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          strokeWidth: "2",
                          d: "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                        }
                      )
                    ]
                  }
                ),
                /* @__PURE__ */ s.jsx("span", { children: l.name })
              ]
            },
            l.path
          )) }),
          /* @__PURE__ */ s.jsx("div", { className: "p-4 border-t border-white/10", children: /* @__PURE__ */ s.jsxs(
            X,
            {
              variant: "ghost",
              className: "w-full justify-start text-white/70 hover:text-white hover:bg-emerald/50",
              onClick: f,
              children: [
                /* @__PURE__ */ s.jsx(
                  "svg",
                  {
                    className: "w-5 h-5 mr-3",
                    fill: "none",
                    stroke: "currentColor",
                    viewBox: "0 0 24 24",
                    children: /* @__PURE__ */ s.jsx(
                      "path",
                      {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: "2",
                        d: "M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                      }
                    )
                  }
                ),
                /* @__PURE__ */ s.jsx("span", { children: "Sign Out" })
              ]
            }
          ) })
        ]
      }
    ),
    /* @__PURE__ */ s.jsx("main", { className: "flex-1 overflow-y-auto bg-background", children: /* @__PURE__ */ s.jsxs("div", { className: "p-6", children: [
      /* @__PURE__ */ s.jsxs("div", { className: "mb-8", children: [
        /* @__PURE__ */ s.jsx("h1", { className: "font-serif text-2xl md:text-3xl text-gold", children: t }),
        /* @__PURE__ */ s.jsx("div", { className: "w-16 h-1 bg-gold/30 mt-3" })
      ] }),
      e
    ] }) })
  ] });
}, gs = p.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ s.jsx("div", { className: "relative w-full overflow-auto", children: /* @__PURE__ */ s.jsx(
  "table",
  {
    ref: r,
    className: re("w-full caption-bottom text-sm", e),
    ...t
  }
) }));
gs.displayName = "Table";
const vs = p.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ s.jsx("thead", { ref: r, className: re("[&_tr]:border-b", e), ...t }));
vs.displayName = "TableHeader";
const xs = p.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ s.jsx(
  "tbody",
  {
    ref: r,
    className: re("[&_tr:last-child]:border-0", e),
    ...t
  }
));
xs.displayName = "TableBody";
const Bo = p.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ s.jsx(
  "tfoot",
  {
    ref: r,
    className: re(
      "border-t bg-muted/50 font-medium [&>tr]:last:border-b-0",
      e
    ),
    ...t
  }
));
Bo.displayName = "TableFooter";
const gt = p.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ s.jsx(
  "tr",
  {
    ref: r,
    className: re(
      "border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",
      e
    ),
    ...t
  }
));
gt.displayName = "TableRow";
const Pr = p.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ s.jsx(
  "th",
  {
    ref: r,
    className: re(
      "h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0",
      e
    ),
    ...t
  }
));
Pr.displayName = "TableHead";
const vt = p.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ s.jsx(
  "td",
  {
    ref: r,
    className: re("p-4 align-middle [&:has([role=checkbox])]:pr-0", e),
    ...t
  }
));
vt.displayName = "TableCell";
const $o = p.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ s.jsx(
  "caption",
  {
    ref: r,
    className: re("mt-4 text-sm text-muted-foreground", e),
    ...t
  }
));
$o.displayName = "TableCaption";
function Qt({
  columns: e,
  data: t,
  onEdit: r,
  onDelete: n,
  isLoading: a = !1
}) {
  return /* @__PURE__ */ s.jsx("div", { className: "w-full overflow-x-auto rounded-lg border border-emerald/50", children: /* @__PURE__ */ s.jsxs(gs, { children: [
    /* @__PURE__ */ s.jsx(vs, { children: /* @__PURE__ */ s.jsxs(gt, { className: "bg-emerald-light hover:bg-emerald-light", children: [
      e.map((i) => /* @__PURE__ */ s.jsx(
        Pr,
        {
          className: "text-gold font-serif",
          style: i.width ? { width: i.width } : {},
          children: i.header
        },
        i.key
      )),
      /* @__PURE__ */ s.jsx(Pr, { className: "text-gold font-serif text-right", children: "Actions" })
    ] }) }),
    /* @__PURE__ */ s.jsx(xs, { children: a ? /* @__PURE__ */ s.jsx(gt, { children: /* @__PURE__ */ s.jsx(vt, { colSpan: e.length + 1, className: "text-center py-10", children: /* @__PURE__ */ s.jsx("div", { className: "flex justify-center", children: /* @__PURE__ */ s.jsx("div", { className: "w-8 h-8 border-2 border-gold border-t-transparent rounded-full animate-spin" }) }) }) }) : t.length === 0 ? /* @__PURE__ */ s.jsx(gt, { children: /* @__PURE__ */ s.jsx(vt, { colSpan: e.length + 1, className: "text-center py-10 text-black", children: "No items found" }) }) : t.map((i) => /* @__PURE__ */ s.jsxs(gt, { className: "border-b border-emerald/30 hover:bg-emerald-light/20 text-black/60", children: [
      e.map((c) => /* @__PURE__ */ s.jsx(vt, { children: c.render ? c.render(i[c.key], i) : i[c.key] }, `${i.id}-${c.key}`)),
      /* @__PURE__ */ s.jsx(vt, { className: "text-right", children: /* @__PURE__ */ s.jsxs("div", { className: "flex justify-end gap-2", children: [
        /* @__PURE__ */ s.jsxs(
          X,
          {
            variant: "ghost",
            size: "sm",
            className: "h-8 w-8 p-0 text-gold",
            onClick: () => r(i),
            children: [
              /* @__PURE__ */ s.jsx("svg", { className: "h-4 w-4", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ s.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" }) }),
              /* @__PURE__ */ s.jsx("span", { className: "sr-only", children: "Edit" })
            ]
          }
        ),
        /* @__PURE__ */ s.jsxs(
          X,
          {
            variant: "ghost",
            size: "sm",
            className: "h-8 w-8 p-0 text-burgundy",
            onClick: () => n(i),
            children: [
              /* @__PURE__ */ s.jsx("svg", { className: "h-4 w-4", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ s.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" }) }),
              /* @__PURE__ */ s.jsx("span", { className: "sr-only", children: "Delete" })
            ]
          }
        )
      ] }) })
    ] }, i.id)) })
  ] }) });
}
const Go = ({ query: e }) => {
  const {
    getGalleryItems: t,
    createGalleryItem: r,
    deleteGalleryItem: n,
    updateGalleryItem: a
  } = e, [i, c] = Z(!1), [o, f] = Z(null), [h, l] = Z({
    title: "",
    image_url: "",
    category: "",
    is_featured: !1
  }), u = tt(), { data: m, isLoading: g } = Ae({
    queryKey: ["admin-gallery"],
    queryFn: t
  }), w = ce({
    mutationFn: r,
    onSuccess: () => {
      u.invalidateQueries({ queryKey: ["admin-gallery"] }), I({
        title: "Gallery item created successfully"
      }), H();
    },
    onError: (R) => {
      console.error("Failed to create gallery item:", R), I({
        title: "Error",
        description: "Failed to create gallery item. Please try again.",
        variant: "destructive"
      });
    }
  }), N = ce({
    mutationFn: ({ id: R, updates: b }) => a(R, b),
    onSuccess: () => {
      u.invalidateQueries({ queryKey: ["admin-gallery"] }), I({
        title: "Gallery item updated successfully"
      }), H();
    },
    onError: (R) => {
      console.error("Failed to update gallery item:", R), I({
        title: "Error",
        description: "Failed to update gallery item. Please try again.",
        variant: "destructive"
      });
    }
  }), x = ce({
    mutationFn: n,
    onSuccess: () => {
      u.invalidateQueries({ queryKey: ["admin-gallery"] }), I({
        title: "Gallery item deleted successfully"
      });
    },
    onError: (R) => {
      console.error("Failed to delete gallery item:", R), I({
        title: "Error",
        description: "Failed to delete gallery item. Please try again.",
        variant: "destructive"
      });
    }
  }), C = (R) => {
    const { name: b, value: S, type: U, checked: j } = R.target;
    l(U === "checkbox" ? {
      ...h,
      [b]: j
    } : {
      ...h,
      [b]: S
    });
  }, k = (R) => {
    R.preventDefault(), w.mutate(h);
  }, E = (R) => {
    R.preventDefault(), o && N.mutate({
      id: o.id,
      updates: h
    });
  }, A = (R) => {
    f(R), l({
      title: R.title,
      image_url: R.image_url,
      category: R.category,
      is_featured: R.is_featured || !1
    }), c(!0), window.scrollTo({ top: 0, behavior: "smooth" });
  }, Q = (R) => {
    confirm("Are you sure you want to delete this gallery item?") && x.mutate(R.id);
  }, H = () => {
    f(null), l({
      title: "",
      image_url: "",
      category: "",
      is_featured: !1
    }), c(!1);
  }, ee = [
    {
      key: "image_url",
      header: "Image",
      width: "80px",
      render: (R) => /* @__PURE__ */ s.jsx("div", { className: "w-12 h-12 rounded overflow-hidden", children: /* @__PURE__ */ s.jsx(
        "img",
        {
          src: R,
          alt: "Preview",
          className: "w-full h-full object-cover",
          onError: (b) => {
            b.target.src = "https://via.placeholder.com/48?text=Error";
          }
        }
      ) })
    },
    {
      key: "title",
      header: "Title"
    },
    {
      key: "category",
      header: "Category",
      render: (R) => /* @__PURE__ */ s.jsx("div", { className: "px-2 py-1 rounded-full bg-emerald/20 text-xs inline-block", children: R })
    },
    {
      key: "is_featured",
      header: "Featured",
      render: (R) => /* @__PURE__ */ s.jsx("div", { className: R ? "text-gold" : "text-emerald/40", children: R ? /* @__PURE__ */ s.jsx("svg", { className: "w-5 h-5 fill-current", viewBox: "0 0 24 24", children: /* @__PURE__ */ s.jsx("path", { d: "M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" }) }) : "—" })
    }
  ];
  return /* @__PURE__ */ s.jsx(Et, { title: "Manage Gallery", children: /* @__PURE__ */ s.jsxs("div", { className: "space-y-8", children: [
    /* @__PURE__ */ s.jsx("div", { className: "mb-8", children: i ? /* @__PURE__ */ s.jsxs("div", { className: "bg-emerald-light rounded-lg border border-gold/20 p-6", children: [
      /* @__PURE__ */ s.jsxs("div", { className: "flex justify-between items-center mb-6", children: [
        /* @__PURE__ */ s.jsx("h2", { className: "font-serif text-xl text-gold", children: o ? "Edit Gallery Item" : "Add New Gallery Item" }),
        /* @__PURE__ */ s.jsx(
          X,
          {
            variant: "ghost",
            size: "sm",
            onClick: H,
            className: "text-white/70 hover:text-white",
            children: "Cancel"
          }
        )
      ] }),
      /* @__PURE__ */ s.jsx(
        "form",
        {
          onSubmit: o ? E : k,
          children: /* @__PURE__ */ s.jsxs("div", { className: "grid grid-cols-1 gap-6 md:grid-cols-2", children: [
            /* @__PURE__ */ s.jsxs("div", { className: "space-y-4", children: [
              /* @__PURE__ */ s.jsxs("div", { children: [
                /* @__PURE__ */ s.jsx(B, { htmlFor: "title", className: "text-white", children: "Title" }),
                /* @__PURE__ */ s.jsx(
                  te,
                  {
                    id: "title",
                    name: "title",
                    value: h.title,
                    onChange: C,
                    className: "bg-emerald-gold/20 border-gold/30 text-black",
                    required: !0
                  }
                )
              ] }),
              /* @__PURE__ */ s.jsxs("div", { children: [
                /* @__PURE__ */ s.jsx(B, { htmlFor: "image_url", className: "text-white", children: "Image URL" }),
                /* @__PURE__ */ s.jsx(
                  te,
                  {
                    id: "image_url",
                    name: "image_url",
                    value: h.image_url,
                    onChange: C,
                    className: "bg-emerald-gold/20 border-gold/30 text-black",
                    placeholder: "https://example.com/image.jpg",
                    required: !0
                  }
                )
              ] }),
              /* @__PURE__ */ s.jsxs("div", { children: [
                /* @__PURE__ */ s.jsx(B, { htmlFor: "category", className: "text-white", children: "Category" }),
                /* @__PURE__ */ s.jsx(
                  te,
                  {
                    id: "category",
                    name: "category",
                    value: h.category,
                    onChange: C,
                    className: "bg-emerald-gold/20 border-gold/30 text-black",
                    required: !0
                  }
                )
              ] }),
              /* @__PURE__ */ s.jsxs("div", { className: "flex items-center mt-4", children: [
                /* @__PURE__ */ s.jsx(
                  "input",
                  {
                    type: "checkbox",
                    id: "is_featured",
                    name: "is_featured",
                    checked: h.is_featured,
                    onChange: C,
                    className: "w-4 h-4 mr-2"
                  }
                ),
                /* @__PURE__ */ s.jsx(B, { htmlFor: "is_featured", className: "text-white", children: "Featured item" })
              ] }),
              /* @__PURE__ */ s.jsx("div", { className: "flex gap-4 pt-4", children: /* @__PURE__ */ s.jsx(
                X,
                {
                  type: "submit",
                  className: "bg-gold text-black hover:bg-gold/90",
                  disabled: w.isPending || N.isPending,
                  children: w.isPending || N.isPending ? /* @__PURE__ */ s.jsxs("div", { className: "flex items-center", children: [
                    /* @__PURE__ */ s.jsxs(
                      "svg",
                      {
                        className: "animate-spin -ml-1 mr-2 h-4 w-4",
                        xmlns: "http://www.w3.org/2000/svg",
                        fill: "none",
                        viewBox: "0 0 24 24",
                        children: [
                          /* @__PURE__ */ s.jsx(
                            "circle",
                            {
                              className: "opacity-25",
                              cx: "12",
                              cy: "12",
                              r: "10",
                              stroke: "currentColor",
                              strokeWidth: "4"
                            }
                          ),
                          /* @__PURE__ */ s.jsx(
                            "path",
                            {
                              className: "opacity-75",
                              fill: "currentColor",
                              d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            }
                          )
                        ]
                      }
                    ),
                    "Saving..."
                  ] }) : o ? "Update Item" : "Create Item"
                }
              ) })
            ] }),
            /* @__PURE__ */ s.jsx("div", { className: "flex flex-col items-center justify-center bg-emerald-light/5 rounded-lg p-4", children: h.image_url ? /* @__PURE__ */ s.jsxs("div", { className: "max-w-full", children: [
              /* @__PURE__ */ s.jsx(
                "img",
                {
                  src: h.image_url,
                  alt: "Image Preview",
                  className: "max-h-64 rounded-lg object-contain mx-auto",
                  onError: (R) => {
                    R.target.src = "https://via.placeholder.com/400x300?text=Image+Error";
                  }
                }
              ),
              /* @__PURE__ */ s.jsx("p", { className: "text-sm text-white/50 text-center mt-2", children: "Image Preview" })
            ] }) : /* @__PURE__ */ s.jsxs("div", { className: "text-center text-white/50", children: [
              /* @__PURE__ */ s.jsx(
                "svg",
                {
                  className: "w-12 h-12 mx-auto opacity-50",
                  fill: "none",
                  stroke: "currentColor",
                  viewBox: "0 0 24 24",
                  children: /* @__PURE__ */ s.jsx(
                    "path",
                    {
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      strokeWidth: "2",
                      d: "M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    }
                  )
                }
              ),
              /* @__PURE__ */ s.jsx("p", { className: "mt-2", children: "Enter an image URL to see preview" })
            ] }) })
          ] })
        }
      )
    ] }) : /* @__PURE__ */ s.jsxs(
      X,
      {
        onClick: () => c(!0),
        className: "bg-gold text-black hover:bg-gold/90",
        children: [
          /* @__PURE__ */ s.jsx(
            "svg",
            {
              className: "w-4 h-4 mr-2",
              fill: "none",
              stroke: "currentColor",
              viewBox: "0 0 24 24",
              children: /* @__PURE__ */ s.jsx(
                "path",
                {
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: "2",
                  d: "M12 4v16m8-8H4"
                }
              )
            }
          ),
          "Add Gallery Item"
        ]
      }
    ) }),
    /* @__PURE__ */ s.jsxs("div", { children: [
      /* @__PURE__ */ s.jsx("h2", { className: "font-serif text-xl text-gold mb-4", children: "All Gallery Items" }),
      /* @__PURE__ */ s.jsx(
        Qt,
        {
          columns: ee,
          data: (m == null ? void 0 : m.data) || [],
          onEdit: A,
          onDelete: Q,
          isLoading: g
        }
      )
    ] })
  ] }) });
}, Ko = ({ query: e }) => {
  var R;
  const { getAllProducts: t, createProduct: r, deleteProduct: n, updateProduct: a } = e, [i, c] = Z(!1), [o, f] = Z(null), [h, l] = Z({
    name: "",
    description: "",
    price: 0,
    images: [""],
    is_active: !0
  }), u = tt(), { data: m, isLoading: g } = Ae({
    queryKey: ["admin-products"],
    queryFn: t
  }), w = ce({
    mutationFn: r,
    onSuccess: () => {
      u.invalidateQueries({ queryKey: ["admin-products"] }), I({
        title: "Product created successfully"
      }), H();
    },
    onError: (b) => {
      console.error("Failed to create product:", b), I({
        title: "Error",
        description: "Failed to create product. Please try again.",
        variant: "destructive"
      });
    }
  }), N = ce({
    mutationFn: ({ id: b, updates: S }) => a(b, S),
    onSuccess: () => {
      u.invalidateQueries({ queryKey: ["admin-products"] }), I({
        title: "Product updated successfully"
      }), H();
    },
    onError: (b) => {
      console.error("Failed to update product:", b), I({
        title: "Error",
        description: "Failed to update product. Please try again.",
        variant: "destructive"
      });
    }
  }), x = ce({
    mutationFn: n,
    onSuccess: () => {
      u.invalidateQueries({ queryKey: ["admin-products"] }), I({
        title: "Product deleted successfully"
      });
    },
    onError: (b) => {
      console.error("Failed to delete product:", b), I({
        title: "Error",
        description: "Failed to delete product. Please try again.",
        variant: "destructive"
      });
    }
  }), C = (b) => {
    const { name: S, value: U, type: j } = b.target;
    l(S === "price" ? {
      ...h,
      [S]: Number(U)
    } : S === "is_active" ? {
      ...h,
      [S]: b.target.checked
    } : S === "images[0]" ? {
      ...h,
      images: [U]
    } : {
      ...h,
      [S]: U
    });
  }, k = (b) => {
    b.preventDefault(), w.mutate(h);
  }, E = (b) => {
    b.preventDefault(), o && N.mutate({
      id: o.id,
      updates: h
    });
  }, A = (b) => {
    f(b), l({
      name: b.name,
      description: b.description || "",
      price: b.price,
      images: b.images || [""],
      is_active: b.is_active !== null ? b.is_active : !0
    }), c(!0), window.scrollTo({ top: 0, behavior: "smooth" });
  }, Q = (b) => {
    confirm("Are you sure you want to delete this product?") && x.mutate(b.id);
  }, H = () => {
    f(null), l({
      name: "",
      description: "",
      price: 0,
      images: [""],
      is_active: !0
    }), c(!1);
  }, ee = [
    {
      key: "name",
      header: "Name"
    },
    {
      key: "description",
      header: "Description",
      render: (b) => /* @__PURE__ */ s.jsx("div", { className: "max-w-xs truncate ", children: b || "—" })
    },
    {
      key: "price",
      header: "Price",
      render: (b) => /* @__PURE__ */ s.jsx("div", { children: new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
        minimumFractionDigits: 0
      }).format(b) })
    },
    {
      key: "is_active",
      header: "Status",
      render: (b) => /* @__PURE__ */ s.jsxs(
        "div",
        {
          className: `px-2 py-1 rounded-full text-xs inline-flex items-center ${b ? "bg-emerald/20 text-emerald" : "bg-red-500/20 text-red-500"}`,
          children: [
            /* @__PURE__ */ s.jsx(
              "span",
              {
                className: `w-2 h-2 rounded-full mr-1 ${b ? "bg-emerald" : "bg-red-500"}`
              }
            ),
            b ? "Active" : "Inactive"
          ]
        }
      )
    }
  ];
  return /* @__PURE__ */ s.jsx(Et, { title: "Manage Products", children: /* @__PURE__ */ s.jsxs("div", { className: "space-y-8", children: [
    /* @__PURE__ */ s.jsx("div", { className: "mb-8", children: i ? /* @__PURE__ */ s.jsxs("div", { className: "bg-emerald-light rounded-lg border border-gold/20 p-6", children: [
      /* @__PURE__ */ s.jsxs("div", { className: "flex justify-between items-center mb-6", children: [
        /* @__PURE__ */ s.jsx("h2", { className: "font-serif text-xl text-gold", children: o ? "Edit Product" : "Add New Product" }),
        /* @__PURE__ */ s.jsx(
          X,
          {
            variant: "ghost",
            size: "sm",
            onClick: H,
            className: "text-white/70 hover:text-white",
            children: "Cancel"
          }
        )
      ] }),
      /* @__PURE__ */ s.jsx(
        "form",
        {
          onSubmit: o ? E : k,
          children: /* @__PURE__ */ s.jsxs("div", { className: "space-y-4", children: [
            /* @__PURE__ */ s.jsxs("div", { children: [
              /* @__PURE__ */ s.jsx(B, { htmlFor: "name", className: "text-white", children: "Product Name" }),
              /* @__PURE__ */ s.jsx(
                te,
                {
                  id: "name",
                  name: "name",
                  value: h.name,
                  onChange: C,
                  className: "bg-emerald-gold/20 border-gold/30 text-black",
                  required: !0
                }
              )
            ] }),
            /* @__PURE__ */ s.jsxs("div", { children: [
              /* @__PURE__ */ s.jsx(B, { htmlFor: "description", className: "text-white", children: "Description" }),
              /* @__PURE__ */ s.jsx(
                "textarea",
                {
                  id: "description",
                  name: "description",
                  value: h.description,
                  onChange: C,
                  className: "w-full rounded-md bg-emerald-gold/20 border-gold/30 text-black h-24 px-3 py-2"
                }
              )
            ] }),
            /* @__PURE__ */ s.jsxs("div", { children: [
              /* @__PURE__ */ s.jsx(B, { htmlFor: "price", className: "text-white", children: "Price (IDR)" }),
              /* @__PURE__ */ s.jsx(
                te,
                {
                  id: "price",
                  name: "price",
                  type: "number",
                  min: "0",
                  value: h.price,
                  onChange: C,
                  className: "bg-emerald-gold/20 border-gold/30 text-black",
                  required: !0
                }
              )
            ] }),
            /* @__PURE__ */ s.jsxs("div", { children: [
              /* @__PURE__ */ s.jsx(B, { htmlFor: "image", className: "text-white", children: "Image URL" }),
              /* @__PURE__ */ s.jsx(
                te,
                {
                  id: "image",
                  name: "images[0]",
                  value: ((R = h.images) == null ? void 0 : R[0]) || "",
                  onChange: C,
                  className: "bg-emerald-gold/20 border-gold/30 text-black",
                  placeholder: "https://example.com/image.jpg"
                }
              )
            ] }),
            /* @__PURE__ */ s.jsxs("div", { className: "flex items-center", children: [
              /* @__PURE__ */ s.jsx(
                "input",
                {
                  type: "checkbox",
                  id: "is_active",
                  name: "is_active",
                  checked: h.is_active,
                  onChange: (b) => l({ ...h, is_active: b.target.checked }),
                  className: "w-4 h-4 mr-2"
                }
              ),
              /* @__PURE__ */ s.jsx(B, { htmlFor: "is_active", className: "text-white", children: "Active product" })
            ] }),
            /* @__PURE__ */ s.jsx("div", { className: "flex gap-4 pt-2", children: /* @__PURE__ */ s.jsx(
              X,
              {
                type: "submit",
                className: "bg-gold text-black hover:bg-gold/90",
                disabled: w.isPending || N.isPending,
                children: w.isPending || N.isPending ? /* @__PURE__ */ s.jsxs("div", { className: "flex items-center", children: [
                  /* @__PURE__ */ s.jsxs(
                    "svg",
                    {
                      className: "animate-spin -ml-1 mr-2 h-4 w-4",
                      xmlns: "http://www.w3.org/2000/svg",
                      fill: "none",
                      viewBox: "0 0 24 24",
                      children: [
                        /* @__PURE__ */ s.jsx(
                          "circle",
                          {
                            className: "opacity-25",
                            cx: "12",
                            cy: "12",
                            r: "10",
                            stroke: "currentColor",
                            strokeWidth: "4"
                          }
                        ),
                        /* @__PURE__ */ s.jsx(
                          "path",
                          {
                            className: "opacity-75",
                            fill: "currentColor",
                            d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          }
                        )
                      ]
                    }
                  ),
                  "Saving..."
                ] }) : o ? "Update Product" : "Create Product"
              }
            ) })
          ] })
        }
      )
    ] }) : /* @__PURE__ */ s.jsxs(
      X,
      {
        onClick: () => c(!0),
        className: "bg-gold text-black hover:bg-gold/90",
        children: [
          /* @__PURE__ */ s.jsx(
            "svg",
            {
              className: "w-4 h-4 mr-2",
              fill: "none",
              stroke: "currentColor",
              viewBox: "0 0 24 24",
              children: /* @__PURE__ */ s.jsx(
                "path",
                {
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: "2",
                  d: "M12 4v16m8-8H4"
                }
              )
            }
          ),
          "Add New Product"
        ]
      }
    ) }),
    /* @__PURE__ */ s.jsxs("div", { children: [
      /* @__PURE__ */ s.jsx("h2", { className: "font-serif text-xl text-gold mb-4", children: "All Products" }),
      /* @__PURE__ */ s.jsx(
        Qt,
        {
          columns: ee,
          data: (m == null ? void 0 : m.data) || [],
          onEdit: A,
          onDelete: Q,
          isLoading: g
        }
      )
    ] })
  ] }) });
}, Ho = ({ query: e }) => {
  const {
    createArticle: t,
    getAllArticles: r,
    deleteArticle: n,
    updateArticle: a,
    updateArticleStatus: i
  } = e, [c, o] = Z(!1), [f, h] = Z(null), [l, u] = Z({
    title: "",
    slug: "",
    excerpt: "",
    content: "",
    cover_image: "",
    author_name: "",
    status: "draft",
    category: ""
  }), m = tt(), { data: g, isLoading: w } = Ae({
    queryKey: ["admin-articles"],
    queryFn: r
  }), N = ce({
    mutationFn: t,
    onSuccess: () => {
      m.invalidateQueries({ queryKey: ["admin-articles"] }), I({
        title: "Article created successfully"
      }), S();
    },
    onError: (j) => {
      console.error("Failed to create article:", j), I({
        title: "Error",
        description: "Failed to create article. Please try again.",
        variant: "destructive"
      });
    }
  }), x = ce({
    mutationFn: ({ id: j, updates: $ }) => a(j, $),
    onSuccess: () => {
      m.invalidateQueries({ queryKey: ["admin-articles"] }), I({
        title: "Article updated successfully"
      }), S();
    },
    onError: (j) => {
      console.error("Failed to update article:", j), I({
        title: "Error",
        description: "Failed to update article. Please try again.",
        variant: "destructive"
      });
    }
  }), C = ce({
    mutationFn: n,
    onSuccess: () => {
      m.invalidateQueries({ queryKey: ["admin-articles"] }), I({
        title: "Article deleted successfully"
      });
    },
    onError: (j) => {
      console.error("Failed to delete article:", j), I({
        title: "Error",
        description: "Failed to delete article. Please try again.",
        variant: "destructive"
      });
    }
  }), k = ce({
    mutationFn: ({
      id: j,
      status: $
    }) => i(j, $),
    onSuccess: () => {
      m.invalidateQueries({ queryKey: ["admin-articles"] }), I({
        title: "Article status updated"
      });
    },
    onError: (j) => {
      console.error("Failed to update article status:", j), I({
        title: "Error",
        description: "Failed to update article status. Please try again.",
        variant: "destructive"
      });
    }
  }), E = (j) => {
    const { name: $, value: ae } = j.target;
    u({
      ...l,
      [$]: ae
    });
  }, A = () => {
    if (l.title) {
      const j = l.title.toLowerCase().replace(/[^\w\s]/gi, "").replace(/\s+/g, "-");
      u({
        ...l,
        slug: j
      });
    }
  }, Q = (j) => {
    j.preventDefault(), N.mutate(l);
  }, H = (j) => {
    j.preventDefault(), f && x.mutate({
      id: f.id,
      updates: l
    });
  }, ee = (j) => {
    h(j), u({
      title: j.title,
      slug: j.slug,
      excerpt: j.excerpt,
      content: j.content,
      cover_image: j.cover_image,
      author_name: j.author_name,
      status: j.status,
      category: j.category || ""
    }), o(!0), window.scrollTo({ top: 0, behavior: "smooth" });
  }, R = (j) => {
    confirm("Are you sure you want to delete this article?") && C.mutate(j.id);
  }, b = (j, $) => {
    k.mutate({ id: j, status: $ });
  }, S = () => {
    h(null), u({
      title: "",
      slug: "",
      excerpt: "",
      content: "",
      cover_image: "",
      author_name: "",
      status: "draft",
      category: ""
    }), o(!1);
  }, U = [
    {
      key: "title",
      header: "Title",
      render: (j) => /* @__PURE__ */ s.jsx("div", { className: "font-medium", children: j })
    },
    {
      key: "slug",
      header: "Slug",
      render: (j) => /* @__PURE__ */ s.jsx("div", { className: "max-w-xs truncate font-mono text-xs text-emerald/70", children: j })
    },
    {
      key: "status",
      header: "Status",
      render: (j, $) => /* @__PURE__ */ s.jsxs("div", { className: "flex items-center space-x-2", children: [
        /* @__PURE__ */ s.jsx(
          "div",
          {
            className: `px-2 py-1 rounded-full text-xs ${j === "published" ? "bg-emerald/20 text-emerald" : "bg-gold/20 text-gold"}`,
            children: j === "published" ? "Published" : "Draft"
          }
        ),
        /* @__PURE__ */ s.jsxs(
          X,
          {
            variant: "ghost",
            size: "sm",
            className: "h-6 w-6 p-0 text-emerald/70",
            onClick: () => b(
              $.id,
              j === "published" ? "draft" : "published"
            ),
            children: [
              /* @__PURE__ */ s.jsx(
                "svg",
                {
                  className: "h-3 w-3",
                  fill: "none",
                  stroke: "currentColor",
                  viewBox: "0 0 24 24",
                  children: /* @__PURE__ */ s.jsx(
                    "path",
                    {
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      strokeWidth: "2",
                      d: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                    }
                  )
                }
              ),
              /* @__PURE__ */ s.jsx("span", { className: "sr-only", children: "Toggle Status" })
            ]
          }
        )
      ] })
    },
    {
      key: "author_name",
      header: "Author"
    }
  ];
  return /* @__PURE__ */ s.jsx(Et, { title: "Manage Articles", children: /* @__PURE__ */ s.jsxs("div", { className: "space-y-8", children: [
    /* @__PURE__ */ s.jsx("div", { className: "mb-8", children: c ? /* @__PURE__ */ s.jsxs("div", { className: "bg-emerald-light rounded-lg border border-gold/20 p-6", children: [
      /* @__PURE__ */ s.jsxs("div", { className: "flex justify-between items-center mb-6", children: [
        /* @__PURE__ */ s.jsx("h2", { className: "font-serif text-xl text-gold", children: f ? "Edit Article" : "Create New Article" }),
        /* @__PURE__ */ s.jsx(
          X,
          {
            variant: "ghost",
            size: "sm",
            onClick: S,
            className: "text-white/70 hover:text-white",
            children: "Cancel"
          }
        )
      ] }),
      /* @__PURE__ */ s.jsx(
        "form",
        {
          onSubmit: f ? H : Q,
          children: /* @__PURE__ */ s.jsxs("div", { className: "space-y-4", children: [
            /* @__PURE__ */ s.jsxs("div", { children: [
              /* @__PURE__ */ s.jsx(B, { htmlFor: "title", className: "text-white", children: "Article Title" }),
              /* @__PURE__ */ s.jsxs("div", { className: "flex gap-2", children: [
                /* @__PURE__ */ s.jsx(
                  te,
                  {
                    id: "title",
                    name: "title",
                    value: l.title,
                    onChange: E,
                    className: "flex-1 bg-emerald-gold/20 border-gold/30 text-black",
                    required: !0
                  }
                ),
                /* @__PURE__ */ s.jsx(
                  X,
                  {
                    type: "button",
                    variant: "outline",
                    className: "border-gold/30 text-gold",
                    onClick: A,
                    children: "Generate Slug"
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ s.jsxs("div", { children: [
              /* @__PURE__ */ s.jsx(B, { htmlFor: "slug", className: "text-white", children: "Slug" }),
              /* @__PURE__ */ s.jsx(
                te,
                {
                  id: "slug",
                  name: "slug",
                  value: l.slug,
                  onChange: E,
                  className: "bg-emerald-gold/20 border-gold/30 text-black font-mono",
                  required: !0
                }
              )
            ] }),
            /* @__PURE__ */ s.jsxs("div", { children: [
              /* @__PURE__ */ s.jsx(B, { htmlFor: "author_name", className: "text-white", children: "Author" }),
              /* @__PURE__ */ s.jsx(
                te,
                {
                  id: "author_name",
                  name: "author_name",
                  value: l.author_name,
                  onChange: E,
                  className: "bg-emerald-gold/20 border-gold/30 text-black",
                  required: !0
                }
              )
            ] }),
            /* @__PURE__ */ s.jsxs("div", { children: [
              /* @__PURE__ */ s.jsx(B, { htmlFor: "category", className: "text-white", children: "Category" }),
              /* @__PURE__ */ s.jsx(
                te,
                {
                  id: "category",
                  name: "category",
                  value: l.category,
                  onChange: E,
                  className: "bg-emerald-gold/20 border-gold/30 text-black"
                }
              )
            ] }),
            /* @__PURE__ */ s.jsxs("div", { children: [
              /* @__PURE__ */ s.jsx(B, { htmlFor: "cover_image", className: "text-white", children: "Cover Image URL" }),
              /* @__PURE__ */ s.jsx(
                te,
                {
                  id: "cover_image",
                  name: "cover_image",
                  value: l.cover_image,
                  onChange: E,
                  className: "bg-emerald-gold/20 border-gold/30 text-black",
                  placeholder: "https://example.com/image.jpg",
                  required: !0
                }
              )
            ] }),
            /* @__PURE__ */ s.jsxs("div", { children: [
              /* @__PURE__ */ s.jsx(B, { htmlFor: "excerpt", className: "text-white", children: "Excerpt" }),
              /* @__PURE__ */ s.jsx(
                "textarea",
                {
                  id: "excerpt",
                  name: "excerpt",
                  value: l.excerpt,
                  onChange: E,
                  className: "w-full rounded-md bg-emerald-gold/20 border-gold/30 text-black h-20 px-3 py-2",
                  required: !0
                }
              )
            ] }),
            /* @__PURE__ */ s.jsxs("div", { children: [
              /* @__PURE__ */ s.jsx(B, { htmlFor: "content", className: "text-white", children: "Content" }),
              /* @__PURE__ */ s.jsx(
                "textarea",
                {
                  id: "content",
                  name: "content",
                  value: l.content,
                  onChange: E,
                  className: "w-full rounded-md bg-emerald-gold/20 border-gold/30 text-black h-72 px-3 py-2 font-mono text-sm",
                  required: !0
                }
              )
            ] }),
            /* @__PURE__ */ s.jsxs("div", { children: [
              /* @__PURE__ */ s.jsx(B, { htmlFor: "status", className: "text-white", children: "Status" }),
              /* @__PURE__ */ s.jsxs("div", { className: "flex gap-4 mt-2", children: [
                /* @__PURE__ */ s.jsxs("label", { className: "flex items-center", children: [
                  /* @__PURE__ */ s.jsx(
                    "input",
                    {
                      type: "radio",
                      name: "status",
                      value: "draft",
                      checked: l.status === "draft",
                      onChange: E,
                      className: "mr-2"
                    }
                  ),
                  /* @__PURE__ */ s.jsx("span", { className: "text-white/80", children: "Draft" })
                ] }),
                /* @__PURE__ */ s.jsxs("label", { className: "flex items-center", children: [
                  /* @__PURE__ */ s.jsx(
                    "input",
                    {
                      type: "radio",
                      name: "status",
                      value: "published",
                      checked: l.status === "published",
                      onChange: E,
                      className: "mr-2"
                    }
                  ),
                  /* @__PURE__ */ s.jsx("span", { className: "text-white/80", children: "Published" })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ s.jsx("div", { className: "flex gap-4 pt-2", children: /* @__PURE__ */ s.jsx(
              X,
              {
                type: "submit",
                className: "bg-gold text-black hover:bg-gold/90",
                disabled: N.isPending || x.isPending,
                children: N.isPending || x.isPending ? /* @__PURE__ */ s.jsxs("div", { className: "flex items-center", children: [
                  /* @__PURE__ */ s.jsxs(
                    "svg",
                    {
                      className: "animate-spin -ml-1 mr-2 h-4 w-4",
                      xmlns: "http://www.w3.org/2000/svg",
                      fill: "none",
                      viewBox: "0 0 24 24",
                      children: [
                        /* @__PURE__ */ s.jsx(
                          "circle",
                          {
                            className: "opacity-25",
                            cx: "12",
                            cy: "12",
                            r: "10",
                            stroke: "currentColor",
                            strokeWidth: "4"
                          }
                        ),
                        /* @__PURE__ */ s.jsx(
                          "path",
                          {
                            className: "opacity-75",
                            fill: "currentColor",
                            d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          }
                        )
                      ]
                    }
                  ),
                  "Saving..."
                ] }) : f ? "Update Article" : "Create Article"
              }
            ) })
          ] })
        }
      )
    ] }) : /* @__PURE__ */ s.jsxs(
      X,
      {
        onClick: () => o(!0),
        className: "bg-gold text-black hover:bg-gold/90",
        children: [
          /* @__PURE__ */ s.jsx(
            "svg",
            {
              className: "w-4 h-4 mr-2",
              fill: "none",
              stroke: "currentColor",
              viewBox: "0 0 24 24",
              children: /* @__PURE__ */ s.jsx(
                "path",
                {
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: "2",
                  d: "M12 4v16m8-8H4"
                }
              )
            }
          ),
          "Write New Article"
        ]
      }
    ) }),
    /* @__PURE__ */ s.jsxs("div", { children: [
      /* @__PURE__ */ s.jsx("h2", { className: "font-serif text-xl text-gold mb-4", children: "All Articles" }),
      /* @__PURE__ */ s.jsx(
        Qt,
        {
          columns: U,
          data: (g == null ? void 0 : g.data) || [],
          onEdit: ee,
          onDelete: R,
          isLoading: w
        }
      )
    ] })
  ] }) });
}, Ar = p.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ s.jsx(
  "div",
  {
    ref: r,
    className: re(
      "rounded-lg border bg-card text-card-foreground shadow-sm",
      e
    ),
    ...t
  }
));
Ar.displayName = "Card";
const Or = p.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ s.jsx(
  "div",
  {
    ref: r,
    className: re("flex flex-col space-y-1.5 p-6", e),
    ...t
  }
));
Or.displayName = "CardHeader";
const Tr = p.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ s.jsx(
  "h3",
  {
    ref: r,
    className: re(
      "text-2xl font-semibold leading-none tracking-tight",
      e
    ),
    ...t
  }
));
Tr.displayName = "CardTitle";
const Qo = p.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ s.jsx(
  "p",
  {
    ref: r,
    className: re("text-sm text-muted-foreground", e),
    ...t
  }
));
Qo.displayName = "CardDescription";
const Lr = p.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ s.jsx("div", { ref: r, className: re("p-6 pt-0", e), ...t }));
Lr.displayName = "CardContent";
const Yo = p.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ s.jsx(
  "div",
  {
    ref: r,
    className: re("flex items-center p-6 pt-0", e),
    ...t
  }
));
Yo.displayName = "CardFooter";
const Jo = ({
  getAllProducts: e,
  getAllArticles: t,
  getGalleryItems: r,
  getTestimonials: n
}) => {
  const [a, i] = Z({
    products: 0,
    articles: 0,
    gallery: 0,
    testimonials: 0
  }), { data: c, isSuccess: o } = Ae({
    queryKey: ["admin-products"],
    queryFn: e
  }), { data: f, isSuccess: h } = Ae({
    queryKey: ["admin-articles"],
    queryFn: t
  }), { data: l, isSuccess: u } = Ae({
    queryKey: ["admin-gallery"],
    queryFn: r
  }), { data: m, isSuccess: g } = Ae({
    queryKey: ["admin-testimonials"],
    queryFn: n
  });
  Fr(() => {
    const x = { ...a };
    o && c.data && (x.products = c.data.length), h && f.data && (x.articles = f.data.length), u && l.data && (x.gallery = l.data.length), g && m.data && (x.testimonials = m.data.length), i(x);
  }, [
    o,
    h,
    u,
    g,
    c,
    f,
    l,
    m
  ]);
  const w = [
    {
      title: "Products",
      value: a.products,
      icon: "box",
      link: "/admin/products",
      color: "bg-gradient-to-br from-emerald to-emerald-light"
    },
    {
      title: "Articles",
      value: a.articles,
      icon: "file-text",
      link: "/admin/articles",
      color: "bg-gradient-to-br from-burgundy to-burgundy-light"
    },
    {
      title: "Gallery Items",
      value: a.gallery,
      icon: "image",
      link: "/admin/gallery",
      color: "bg-gradient-to-br from-emerald-light to-emerald"
    },
    {
      title: "Testimonials",
      value: a.testimonials,
      icon: "message-square",
      link: "/admin/testimonials",
      color: "bg-gradient-to-br from-gold to-gold-light"
    }
  ], N = [
    {
      title: "Add New Product",
      description: "Create a new product in your catalogue",
      icon: "plus-circle",
      link: "/admin/products"
    },
    {
      title: "Write New Article",
      description: "Share your expertise with a new article",
      icon: "edit",
      link: "/admin/articles"
    },
    {
      title: "Add Gallery Item",
      description: "Upload a new image to your gallery",
      icon: "upload",
      link: "/admin/gallery"
    },
    {
      title: "Record Testimonial",
      description: "Add a new customer testimonial",
      icon: "star",
      link: "/admin/testimonials"
    }
  ];
  return /* @__PURE__ */ s.jsx(Et, { title: "Admin Dashboard", children: /* @__PURE__ */ s.jsxs("div", { className: "space-y-8", children: [
    /* @__PURE__ */ s.jsxs("div", { className: "bg-emerald p-6 rounded-lg shadow-lg border border-white/10 mb-8", children: [
      /* @__PURE__ */ s.jsx("h2", { className: "font-serif text-2xl text-gold mb-2", children: "Welcome to Velour Essence Admin" }),
      /* @__PURE__ */ s.jsx("p", { className: "text-white/80", children: "Manage your luxury fragrance brand content from this central dashboard. Select a section below to begin editing your site's content." })
    ] }),
    /* @__PURE__ */ s.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5", children: w.map((x, C) => /* @__PURE__ */ s.jsx(
      ze,
      {
        to: x.link,
        className: "transition-transform hover:scale-105",
        children: /* @__PURE__ */ s.jsxs(Ar, { className: `border-0 shadow-lg ${x.color} text-white`, children: [
          /* @__PURE__ */ s.jsx(Or, { className: "pb-2", children: /* @__PURE__ */ s.jsxs("div", { className: "flex justify-between items-center", children: [
            /* @__PURE__ */ s.jsx(Tr, { className: "text-lg font-serif", children: x.title }),
            /* @__PURE__ */ s.jsx("div", { className: "bg-white/20 p-2 rounded-full", children: /* @__PURE__ */ s.jsxs(
              "svg",
              {
                className: "w-5 h-5",
                fill: "none",
                stroke: "currentColor",
                viewBox: "0 0 24 24",
                children: [
                  x.icon === "box" && /* @__PURE__ */ s.jsx(
                    "path",
                    {
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      strokeWidth: "2",
                      d: "M20 7l-8-4-8 4m16 0v10a2 2 0 01-2 2H6a2 2 0 01-2-2V7m16 0l-8 4m-8-4l8 4"
                    }
                  ),
                  x.icon === "file-text" && /* @__PURE__ */ s.jsx(
                    "path",
                    {
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      strokeWidth: "2",
                      d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    }
                  ),
                  x.icon === "image" && /* @__PURE__ */ s.jsx(
                    "path",
                    {
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      strokeWidth: "2",
                      d: "M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    }
                  ),
                  x.icon === "message-square" && /* @__PURE__ */ s.jsx(
                    "path",
                    {
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      strokeWidth: "2",
                      d: "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                    }
                  )
                ]
              }
            ) })
          ] }) }),
          /* @__PURE__ */ s.jsxs(Lr, { children: [
            /* @__PURE__ */ s.jsx("div", { className: "text-3xl font-bold", children: x.value }),
            /* @__PURE__ */ s.jsxs("p", { className: "text-sm text-white/70 mt-1", children: [
              "Total ",
              x.title.toLowerCase()
            ] })
          ] })
        ] })
      },
      C
    )) }),
    /* @__PURE__ */ s.jsxs("div", { className: "mt-12 space-y-4", children: [
      /* @__PURE__ */ s.jsx("h2", { className: "font-serif text-xl text-gold mb-4", children: "Quick Actions" }),
      /* @__PURE__ */ s.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5", children: N.map((x, C) => /* @__PURE__ */ s.jsx(
        ze,
        {
          to: x.link,
          className: "transition-transform hover:scale-105",
          children: /* @__PURE__ */ s.jsxs(Ar, { className: "bg-emerald-light border border-gold/10 shadow-lg", children: [
            /* @__PURE__ */ s.jsx(Or, { className: "pb-2", children: /* @__PURE__ */ s.jsxs("div", { className: "flex justify-between items-center", children: [
              /* @__PURE__ */ s.jsx(Tr, { className: "text-md font-serif text-gold", children: x.title }),
              /* @__PURE__ */ s.jsx("div", { className: "bg-gold/20 text-gold p-2 rounded-full", children: /* @__PURE__ */ s.jsxs(
                "svg",
                {
                  className: "w-5 h-5",
                  fill: "none",
                  stroke: "currentColor",
                  viewBox: "0 0 24 24",
                  children: [
                    x.icon === "plus-circle" && /* @__PURE__ */ s.jsx(
                      "path",
                      {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: "2",
                        d: "M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                      }
                    ),
                    x.icon === "edit" && /* @__PURE__ */ s.jsx(
                      "path",
                      {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: "2",
                        d: "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                      }
                    ),
                    x.icon === "upload" && /* @__PURE__ */ s.jsx(
                      "path",
                      {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: "2",
                        d: "M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
                      }
                    ),
                    x.icon === "star" && /* @__PURE__ */ s.jsx(
                      "path",
                      {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: "2",
                        d: "M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                      }
                    )
                  ]
                }
              ) })
            ] }) }),
            /* @__PURE__ */ s.jsx(Lr, { children: /* @__PURE__ */ s.jsx("p", { className: "text-sm text-white/70", children: x.description }) })
          ] })
        },
        C
      )) })
    ] }),
    /* @__PURE__ */ s.jsx("div", { className: "py-6 text-center", children: /* @__PURE__ */ s.jsxs(
      ze,
      {
        to: "/",
        className: "text-gold hover:text-gold-light flex items-center justify-center",
        children: [
          /* @__PURE__ */ s.jsx("span", { children: "View your website" }),
          /* @__PURE__ */ s.jsx(
            "svg",
            {
              className: "ml-2 w-4 h-4",
              fill: "none",
              stroke: "currentColor",
              viewBox: "0 0 24 24",
              children: /* @__PURE__ */ s.jsx(
                "path",
                {
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: "2",
                  d: "M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                }
              )
            }
          )
        ]
      }
    ) })
  ] }) });
};
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Xo = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), ys = (...e) => e.filter((t, r, n) => !!t && t.trim() !== "" && n.indexOf(t) === r).join(" ").trim();
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Zo = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const el = $n(
  ({
    color: e = "currentColor",
    size: t = 24,
    strokeWidth: r = 2,
    absoluteStrokeWidth: n,
    className: a = "",
    children: i,
    iconNode: c,
    ...o
  }, f) => hr(
    "svg",
    {
      ref: f,
      ...Zo,
      width: t,
      height: t,
      stroke: e,
      strokeWidth: n ? Number(r) * 24 / Number(t) : r,
      className: ys("lucide", a),
      ...o
    },
    [
      ...c.map(([h, l]) => hr(h, l)),
      ...Array.isArray(i) ? i : [i]
    ]
  )
);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const tl = (e, t) => {
  const r = $n(
    ({ className: n, ...a }, i) => hr(el, {
      ref: i,
      iconNode: t,
      className: ys(`lucide-${Xo(e)}`, n),
      ...a
    })
  );
  return r.displayName = `${e}`, r;
};
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const qn = tl("Star", [
  [
    "path",
    {
      d: "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",
      key: "r04s7s"
    }
  ]
]), rl = ({ query: e }) => {
  const {
    getTestimonials: t,
    createTestimonial: r,
    updateTestimonial: n,
    deleteTestimonial: a
  } = e, [i, c] = Z(!1), [o, f] = Z(null), [h, l] = Z({
    parent_name: "",
    testimonial: "",
    rating: 5,
    avatar_url: "",
    is_featured: !1,
    child_name: null,
    child_age: null
  }), u = tt(), { data: m, isLoading: g } = Ae({
    queryKey: ["admin-testimonials"],
    queryFn: t
  }), w = ce({
    mutationFn: r,
    onSuccess: () => {
      u.invalidateQueries({ queryKey: ["admin-testimonials"] }), I({
        title: "Testimonial created successfully"
      }), ee();
    },
    onError: (b) => {
      console.error("Failed to create testimonial:", b), I({
        title: "Error",
        description: "Failed to create testimonial. Please try again.",
        variant: "destructive"
      });
    }
  }), N = ce({
    mutationFn: ({ id: b, updates: S }) => n(b, S),
    onSuccess: () => {
      u.invalidateQueries({ queryKey: ["admin-testimonials"] }), I({
        title: "Testimonial updated successfully"
      }), ee();
    },
    onError: (b) => {
      console.error("Failed to update testimonial:", b), I({
        title: "Error",
        description: "Failed to update testimonial. Please try again.",
        variant: "destructive"
      });
    }
  }), x = ce({
    mutationFn: a,
    onSuccess: () => {
      u.invalidateQueries({ queryKey: ["admin-testimonials"] }), I({
        title: "Testimonial deleted successfully"
      });
    },
    onError: (b) => {
      console.error("Failed to delete testimonial:", b), I({
        title: "Error",
        description: "Failed to delete testimonial. Please try again.",
        variant: "destructive"
      });
    }
  }), C = (b) => {
    const { name: S, value: U, type: j } = b.target;
    l(j === "checkbox" ? {
      ...h,
      [S]: b.target.checked
    } : j === "number" ? {
      ...h,
      [S]: U === "" ? null : Number(U)
    } : {
      ...h,
      [S]: U
    });
  }, k = (b) => {
    l({
      ...h,
      rating: b
    });
  }, E = (b) => {
    b.preventDefault(), w.mutate(h);
  }, A = (b) => {
    b.preventDefault(), o && N.mutate({
      id: o.id,
      updates: h
    });
  }, Q = (b) => {
    f(b), l({
      parent_name: b.parent_name,
      testimonial: b.testimonial,
      rating: b.rating,
      avatar_url: b.avatar_url || "",
      is_featured: b.is_featured || !1,
      child_name: b.child_name,
      child_age: b.child_age
    }), c(!0), window.scrollTo({ top: 0, behavior: "smooth" });
  }, H = (b) => {
    confirm("Are you sure you want to delete this testimonial?") && x.mutate(b.id);
  }, ee = () => {
    f(null), l({
      parent_name: "",
      testimonial: "",
      rating: 5,
      avatar_url: "",
      is_featured: !1,
      child_name: null,
      child_age: null
    }), c(!1);
  }, R = [
    {
      key: "parent_name",
      header: "Name",
      render: (b, S) => /* @__PURE__ */ s.jsxs("div", { children: [
        /* @__PURE__ */ s.jsx("div", { className: "font-medium", children: b }),
        S.child_name && /* @__PURE__ */ s.jsxs("div", { className: "text-xs text-white/60", children: [
          "Child: ",
          S.child_name,
          ", ",
          S.child_age,
          " y.o."
        ] })
      ] })
    },
    {
      key: "testimonial",
      header: "Testimonial",
      render: (b) => /* @__PURE__ */ s.jsx("div", { className: "max-w-xs truncate", children: b })
    },
    {
      key: "rating",
      header: "Rating",
      render: (b) => /* @__PURE__ */ s.jsx("div", { className: "flex", children: [...Array(5)].map((S, U) => /* @__PURE__ */ s.jsx(
        qn,
        {
          className: `h-4 w-4 ${U < b ? "text-gold fill-gold" : "text-gray-300"}`
        },
        U
      )) })
    },
    {
      key: "is_featured",
      header: "Featured",
      render: (b) => /* @__PURE__ */ s.jsx("div", { className: b ? "text-gold" : "text-white/40", children: b ? /* @__PURE__ */ s.jsx("svg", { className: "w-5 h-5 fill-current", viewBox: "0 0 24 24", children: /* @__PURE__ */ s.jsx("path", { d: "M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" }) }) : "—" })
    }
  ];
  return /* @__PURE__ */ s.jsx(Et, { title: "Manage Testimonials", children: /* @__PURE__ */ s.jsxs("div", { className: "space-y-8", children: [
    /* @__PURE__ */ s.jsx("div", { className: "mb-8", children: i ? /* @__PURE__ */ s.jsxs("div", { className: "bg-emerald-light rounded-lg border border-gold/20 p-6", children: [
      /* @__PURE__ */ s.jsxs("div", { className: "flex justify-between items-center mb-6", children: [
        /* @__PURE__ */ s.jsx("h2", { className: "font-serif text-xl text-gold", children: o ? "Edit Testimonial" : "Add New Testimonial" }),
        /* @__PURE__ */ s.jsx(
          X,
          {
            variant: "ghost",
            size: "sm",
            onClick: ee,
            className: "text-white/70 hover:text-white",
            children: "Cancel"
          }
        )
      ] }),
      /* @__PURE__ */ s.jsx(
        "form",
        {
          onSubmit: o ? A : E,
          children: /* @__PURE__ */ s.jsxs("div", { className: "space-y-4", children: [
            /* @__PURE__ */ s.jsxs("div", { children: [
              /* @__PURE__ */ s.jsx(B, { htmlFor: "parent_name", className: "text-white", children: "Name" }),
              /* @__PURE__ */ s.jsx(
                te,
                {
                  id: "parent_name",
                  name: "parent_name",
                  value: h.parent_name,
                  onChange: C,
                  className: "bg-emerald-gold/20 border-gold/30 text-black",
                  required: !0
                }
              )
            ] }),
            /* @__PURE__ */ s.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
              /* @__PURE__ */ s.jsxs("div", { children: [
                /* @__PURE__ */ s.jsx(B, { htmlFor: "child_name", className: "text-white", children: "Child's Name (Optional)" }),
                /* @__PURE__ */ s.jsx(
                  te,
                  {
                    id: "child_name",
                    name: "child_name",
                    value: h.child_name || "",
                    onChange: C,
                    className: "bg-emerald-gold/20 border-gold/30 text-black"
                  }
                )
              ] }),
              /* @__PURE__ */ s.jsxs("div", { children: [
                /* @__PURE__ */ s.jsx(B, { htmlFor: "child_age", className: "text-white", children: "Child's Age (Optional)" }),
                /* @__PURE__ */ s.jsx(
                  te,
                  {
                    id: "child_age",
                    name: "child_age",
                    type: "number",
                    value: h.child_age !== null ? h.child_age : "",
                    onChange: C,
                    className: "bg-emerald-gold/20 border-gold/30 text-black",
                    min: "0",
                    max: "100"
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ s.jsxs("div", { children: [
              /* @__PURE__ */ s.jsx(B, { htmlFor: "testimonial", className: "text-white", children: "Testimonial" }),
              /* @__PURE__ */ s.jsx(
                "textarea",
                {
                  id: "testimonial",
                  name: "testimonial",
                  value: h.testimonial,
                  onChange: C,
                  className: "w-full rounded-md bg-emerald-gold/20 border-gold/30 text-black h-24 px-3 py-2",
                  required: !0
                }
              )
            ] }),
            /* @__PURE__ */ s.jsxs("div", { children: [
              /* @__PURE__ */ s.jsx(B, { htmlFor: "rating", className: "text-white", children: "Rating" }),
              /* @__PURE__ */ s.jsx("div", { className: "flex mt-2", children: [...Array(5)].map((b, S) => /* @__PURE__ */ s.jsx(
                qn,
                {
                  className: `h-6 w-6 cursor-pointer ${S < h.rating ? "text-gold fill-gold" : "text-white-500"}`,
                  onClick: () => k(S + 1)
                },
                S
              )) })
            ] }),
            /* @__PURE__ */ s.jsxs("div", { children: [
              /* @__PURE__ */ s.jsx(B, { htmlFor: "avatar_url", className: "text-white", children: "Avatar URL (Optional)" }),
              /* @__PURE__ */ s.jsx(
                te,
                {
                  id: "avatar_url",
                  name: "avatar_url",
                  value: h.avatar_url || "",
                  onChange: C,
                  className: "bg-emerald-gold/20 border-gold/30 text-black",
                  placeholder: "https://example.com/avatar.jpg"
                }
              )
            ] }),
            /* @__PURE__ */ s.jsxs("div", { className: "flex items-center", children: [
              /* @__PURE__ */ s.jsx(
                "input",
                {
                  type: "checkbox",
                  id: "is_featured",
                  name: "is_featured",
                  checked: h.is_featured || !1,
                  onChange: C,
                  className: "w-4 h-4 mr-2"
                }
              ),
              /* @__PURE__ */ s.jsx(B, { htmlFor: "is_featured", className: "text-white", children: "Featured testimonial" })
            ] }),
            /* @__PURE__ */ s.jsx("div", { className: "flex gap-4 pt-2", children: /* @__PURE__ */ s.jsx(
              X,
              {
                type: "submit",
                className: "bg-gold text-black hover:bg-gold/90",
                disabled: w.isPending || N.isPending,
                children: w.isPending || N.isPending ? /* @__PURE__ */ s.jsxs("div", { className: "flex items-center", children: [
                  /* @__PURE__ */ s.jsxs(
                    "svg",
                    {
                      className: "animate-spin -ml-1 mr-2 h-4 w-4",
                      xmlns: "http://www.w3.org/2000/svg",
                      fill: "none",
                      viewBox: "0 0 24 24",
                      children: [
                        /* @__PURE__ */ s.jsx(
                          "circle",
                          {
                            className: "opacity-25",
                            cx: "12",
                            cy: "12",
                            r: "10",
                            stroke: "currentColor",
                            strokeWidth: "4"
                          }
                        ),
                        /* @__PURE__ */ s.jsx(
                          "path",
                          {
                            className: "opacity-75",
                            fill: "currentColor",
                            d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          }
                        )
                      ]
                    }
                  ),
                  "Saving..."
                ] }) : o ? "Update Testimonial" : "Create Testimonial"
              }
            ) })
          ] })
        }
      )
    ] }) : /* @__PURE__ */ s.jsxs(
      X,
      {
        onClick: () => c(!0),
        className: "bg-gold text-black hover:bg-gold/90",
        children: [
          /* @__PURE__ */ s.jsx(
            "svg",
            {
              className: "w-4 h-4 mr-2",
              fill: "none",
              stroke: "currentColor",
              viewBox: "0 0 24 24",
              children: /* @__PURE__ */ s.jsx(
                "path",
                {
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: "2",
                  d: "M12 4v16m8-8H4"
                }
              )
            }
          ),
          "Add New Testimonial"
        ]
      }
    ) }),
    /* @__PURE__ */ s.jsxs("div", { children: [
      /* @__PURE__ */ s.jsx("h2", { className: "font-serif text-xl text-gold mb-4", children: "All Testimonials" }),
      /* @__PURE__ */ s.jsx(
        Qt,
        {
          columns: R,
          data: (m == null ? void 0 : m.data) || [],
          onEdit: Q,
          onDelete: H,
          isLoading: g
        }
      )
    ] })
  ] }) });
}, nl = ({
  children: e,
  getCurrentSession: t
}) => {
  const [r, n] = Z(null), [a, i] = Z(!0);
  return Fr(() => {
    (async () => {
      const { data: o } = await t();
      o && o.session && n(o.session), i(!1);
    })();
  }, []), a ? /* @__PURE__ */ s.jsx("div", { className: "flex items-center justify-center min-h-screen bg-background", children: /* @__PURE__ */ s.jsx("div", { className: "w-16 h-16 border-4 border-gold border-t-transparent rounded-full animate-spin" }) }) : r ? /* @__PURE__ */ s.jsx(s.Fragment, { children: e }) : /* @__PURE__ */ s.jsx(Da, { to: "/auth/login", replace: !0 });
}, ll = ({ config: e, children: t }) => {
  const r = gi.initDB(e.projectId, e.supabaseUrl, e.supabaseKey);
  return /* @__PURE__ */ s.jsxs(Ia, { children: [
    t,
    /* @__PURE__ */ s.jsx(
      Fe,
      {
        path: "/auth/login",
        element: /* @__PURE__ */ s.jsx(mo, { loginWithEmailPassword: r.auth.loginWithEmailPassword })
      }
    ),
    /* @__PURE__ */ s.jsx(Uo, { config: e, logout: r.auth.logout, children: /* @__PURE__ */ s.jsxs(nl, { getCurrentSession: r.auth.getCurrentSession, children: [
      /* @__PURE__ */ s.jsx(
        Fe,
        {
          path: "/admin",
          element: /* @__PURE__ */ s.jsx(
            Jo,
            {
              getAllArticles: r.articles.getAllArticles,
              getAllProducts: r.products.getAllProducts,
              getGalleryItems: r.gallery.getGalleryItems,
              getTestimonials: r.testimonials.getTestimonials
            }
          )
        }
      ),
      /* @__PURE__ */ s.jsx(
        Fe,
        {
          path: "/admin/products",
          element: /* @__PURE__ */ s.jsx(Ko, { query: r.products })
        }
      ),
      /* @__PURE__ */ s.jsx(
        Fe,
        {
          path: "/admin/articles",
          element: /* @__PURE__ */ s.jsx(Ho, { query: r.articles })
        }
      ),
      /* @__PURE__ */ s.jsx(
        Fe,
        {
          path: "/admin/gallery",
          element: /* @__PURE__ */ s.jsx(Go, { query: r.gallery })
        }
      ),
      /* @__PURE__ */ s.jsx(
        Fe,
        {
          path: "/admin/testimonials",
          element: /* @__PURE__ */ s.jsx(rl, { query: r.testimonials })
        }
      )
    ] }) })
  ] });
};
export {
  ll as AdminKit
};
