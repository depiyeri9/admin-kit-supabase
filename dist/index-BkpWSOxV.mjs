var mn = (r) => {
  throw TypeError(r);
};
var Vr = (r, e, t) => e.has(r) || mn("Cannot " + t);
var b = (r, e, t) => (Vr(r, e, "read from private field"), t ? t.call(r) : e.get(r)), V = (r, e, t) => e.has(r) ? mn("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(r) : e.set(r, t), I = (r, e, t, s) => (Vr(r, e, "write to private field"), s ? s.call(r, t) : e.set(r, t), t), Q = (r, e, t) => (Vr(r, e, "access private method"), t);
import * as v from "react";
import di, { useState as re, createContext as Aa, useContext as La, useEffect as $s, forwardRef as hi, createElement as ns } from "react";
import "react-dom";
function $a(r) {
  return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r;
}
function Ia(r) {
  if (Object.prototype.hasOwnProperty.call(r, "__esModule")) return r;
  var e = r.default;
  if (typeof e == "function") {
    var t = function s() {
      return this instanceof s ? Reflect.construct(e, arguments, this.constructor) : e.apply(this, arguments);
    };
    t.prototype = e.prototype;
  } else t = {};
  return Object.defineProperty(t, "__esModule", { value: !0 }), Object.keys(r).forEach(function(s) {
    var n = Object.getOwnPropertyDescriptor(r, s);
    Object.defineProperty(t, s, n.get ? n : {
      enumerable: !0,
      get: function() {
        return r[s];
      }
    });
  }), t;
}
var dr = { exports: {} }, Ft = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var pn;
function Fa() {
  if (pn) return Ft;
  pn = 1;
  var r = di, e = Symbol.for("react.element"), t = Symbol.for("react.fragment"), s = Object.prototype.hasOwnProperty, n = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, i = { key: !0, ref: !0, __self: !0, __source: !0 };
  function a(o, l, u) {
    var c, h = {}, m = null, p = null;
    u !== void 0 && (m = "" + u), l.key !== void 0 && (m = "" + l.key), l.ref !== void 0 && (p = l.ref);
    for (c in l) s.call(l, c) && !i.hasOwnProperty(c) && (h[c] = l[c]);
    if (o && o.defaultProps) for (c in l = o.defaultProps, l) h[c] === void 0 && (h[c] = l[c]);
    return { $$typeof: e, type: o, key: m, ref: p, props: h, _owner: n.current };
  }
  return Ft.Fragment = t, Ft.jsx = a, Ft.jsxs = a, Ft;
}
var Dt = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var gn;
function Da() {
  return gn || (gn = 1, process.env.NODE_ENV !== "production" && function() {
    var r = di, e = Symbol.for("react.element"), t = Symbol.for("react.portal"), s = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), a = Symbol.for("react.provider"), o = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), c = Symbol.for("react.suspense_list"), h = Symbol.for("react.memo"), m = Symbol.for("react.lazy"), p = Symbol.for("react.offscreen"), y = Symbol.iterator, x = "@@iterator";
    function g(f) {
      if (f === null || typeof f != "object")
        return null;
      var w = y && f[y] || f[x];
      return typeof w == "function" ? w : null;
    }
    var k = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function C(f) {
      {
        for (var w = arguments.length, S = new Array(w > 1 ? w - 1 : 0), P = 1; P < w; P++)
          S[P - 1] = arguments[P];
        j("error", f, S);
      }
    }
    function j(f, w, S) {
      {
        var P = k.ReactDebugCurrentFrame, B = P.getStackAddendum();
        B !== "" && (w += "%s", S = S.concat([B]));
        var G = S.map(function(M) {
          return String(M);
        });
        G.unshift("Warning: " + w), Function.prototype.apply.call(console[f], console, G);
      }
    }
    var R = !1, L = !1, X = !1, se = !1, T = !1, _;
    _ = Symbol.for("react.module.reference");
    function N(f) {
      return !!(typeof f == "string" || typeof f == "function" || f === s || f === i || T || f === n || f === u || f === c || se || f === p || R || L || X || typeof f == "object" && f !== null && (f.$$typeof === m || f.$$typeof === h || f.$$typeof === a || f.$$typeof === o || f.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      f.$$typeof === _ || f.getModuleId !== void 0));
    }
    function W(f, w, S) {
      var P = f.displayName;
      if (P)
        return P;
      var B = w.displayName || w.name || "";
      return B !== "" ? S + "(" + B + ")" : S;
    }
    function E(f) {
      return f.displayName || "Context";
    }
    function K(f) {
      if (f == null)
        return null;
      if (typeof f.tag == "number" && C("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof f == "function")
        return f.displayName || f.name || null;
      if (typeof f == "string")
        return f;
      switch (f) {
        case s:
          return "Fragment";
        case t:
          return "Portal";
        case i:
          return "Profiler";
        case n:
          return "StrictMode";
        case u:
          return "Suspense";
        case c:
          return "SuspenseList";
      }
      if (typeof f == "object")
        switch (f.$$typeof) {
          case o:
            var w = f;
            return E(w) + ".Consumer";
          case a:
            var S = f;
            return E(S._context) + ".Provider";
          case l:
            return W(f, f.render, "ForwardRef");
          case h:
            var P = f.displayName || null;
            return P !== null ? P : K(f.type) || "Memo";
          case m: {
            var B = f, G = B._payload, M = B._init;
            try {
              return K(M(G));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var de = Object.assign, Pe = 0, Je, Lt, lt, Oe, $t, ye, Qs;
    function Ys() {
    }
    Ys.__reactDisabledLog = !0;
    function aa() {
      {
        if (Pe === 0) {
          Je = console.log, Lt = console.info, lt = console.warn, Oe = console.error, $t = console.group, ye = console.groupCollapsed, Qs = console.groupEnd;
          var f = {
            configurable: !0,
            enumerable: !0,
            value: Ys,
            writable: !0
          };
          Object.defineProperties(console, {
            info: f,
            log: f,
            warn: f,
            error: f,
            group: f,
            groupCollapsed: f,
            groupEnd: f
          });
        }
        Pe++;
      }
    }
    function oa() {
      {
        if (Pe--, Pe === 0) {
          var f = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: de({}, f, {
              value: Je
            }),
            info: de({}, f, {
              value: Lt
            }),
            warn: de({}, f, {
              value: lt
            }),
            error: de({}, f, {
              value: Oe
            }),
            group: de({}, f, {
              value: $t
            }),
            groupCollapsed: de({}, f, {
              value: ye
            }),
            groupEnd: de({}, f, {
              value: Qs
            })
          });
        }
        Pe < 0 && C("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Ir = k.ReactCurrentDispatcher, Fr;
    function or(f, w, S) {
      {
        if (Fr === void 0)
          try {
            throw Error();
          } catch (B) {
            var P = B.stack.trim().match(/\n( *(at )?)/);
            Fr = P && P[1] || "";
          }
        return `
` + Fr + f;
      }
    }
    var Dr = !1, lr;
    {
      var la = typeof WeakMap == "function" ? WeakMap : Map;
      lr = new la();
    }
    function Xs(f, w) {
      if (!f || Dr)
        return "";
      {
        var S = lr.get(f);
        if (S !== void 0)
          return S;
      }
      var P;
      Dr = !0;
      var B = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var G;
      G = Ir.current, Ir.current = null, aa();
      try {
        if (w) {
          var M = function() {
            throw Error();
          };
          if (Object.defineProperty(M.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(M, []);
            } catch (he) {
              P = he;
            }
            Reflect.construct(f, [], M);
          } else {
            try {
              M.call();
            } catch (he) {
              P = he;
            }
            f.call(M.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (he) {
            P = he;
          }
          f();
        }
      } catch (he) {
        if (he && P && typeof he.stack == "string") {
          for (var F = he.stack.split(`
`), le = P.stack.split(`
`), Z = F.length - 1, ee = le.length - 1; Z >= 1 && ee >= 0 && F[Z] !== le[ee]; )
            ee--;
          for (; Z >= 1 && ee >= 0; Z--, ee--)
            if (F[Z] !== le[ee]) {
              if (Z !== 1 || ee !== 1)
                do
                  if (Z--, ee--, ee < 0 || F[Z] !== le[ee]) {
                    var be = `
` + F[Z].replace(" at new ", " at ");
                    return f.displayName && be.includes("<anonymous>") && (be = be.replace("<anonymous>", f.displayName)), typeof f == "function" && lr.set(f, be), be;
                  }
                while (Z >= 1 && ee >= 0);
              break;
            }
        }
      } finally {
        Dr = !1, Ir.current = G, oa(), Error.prepareStackTrace = B;
      }
      var ut = f ? f.displayName || f.name : "", Qe = ut ? or(ut) : "";
      return typeof f == "function" && lr.set(f, Qe), Qe;
    }
    function ca(f, w, S) {
      return Xs(f, !1);
    }
    function ua(f) {
      var w = f.prototype;
      return !!(w && w.isReactComponent);
    }
    function cr(f, w, S) {
      if (f == null)
        return "";
      if (typeof f == "function")
        return Xs(f, ua(f));
      if (typeof f == "string")
        return or(f);
      switch (f) {
        case u:
          return or("Suspense");
        case c:
          return or("SuspenseList");
      }
      if (typeof f == "object")
        switch (f.$$typeof) {
          case l:
            return ca(f.render);
          case h:
            return cr(f.type, w, S);
          case m: {
            var P = f, B = P._payload, G = P._init;
            try {
              return cr(G(B), w, S);
            } catch {
            }
          }
        }
      return "";
    }
    var It = Object.prototype.hasOwnProperty, Zs = {}, en = k.ReactDebugCurrentFrame;
    function ur(f) {
      if (f) {
        var w = f._owner, S = cr(f.type, f._source, w ? w.type : null);
        en.setExtraStackFrame(S);
      } else
        en.setExtraStackFrame(null);
    }
    function da(f, w, S, P, B) {
      {
        var G = Function.call.bind(It);
        for (var M in f)
          if (G(f, M)) {
            var F = void 0;
            try {
              if (typeof f[M] != "function") {
                var le = Error((P || "React class") + ": " + S + " type `" + M + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof f[M] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw le.name = "Invariant Violation", le;
              }
              F = f[M](w, M, P, S, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (Z) {
              F = Z;
            }
            F && !(F instanceof Error) && (ur(B), C("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", P || "React class", S, M, typeof F), ur(null)), F instanceof Error && !(F.message in Zs) && (Zs[F.message] = !0, ur(B), C("Failed %s type: %s", S, F.message), ur(null));
          }
      }
    }
    var ha = Array.isArray;
    function Ur(f) {
      return ha(f);
    }
    function fa(f) {
      {
        var w = typeof Symbol == "function" && Symbol.toStringTag, S = w && f[Symbol.toStringTag] || f.constructor.name || "Object";
        return S;
      }
    }
    function ma(f) {
      try {
        return tn(f), !1;
      } catch {
        return !0;
      }
    }
    function tn(f) {
      return "" + f;
    }
    function rn(f) {
      if (ma(f))
        return C("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", fa(f)), tn(f);
    }
    var sn = k.ReactCurrentOwner, pa = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, nn, an;
    function ga(f) {
      if (It.call(f, "ref")) {
        var w = Object.getOwnPropertyDescriptor(f, "ref").get;
        if (w && w.isReactWarning)
          return !1;
      }
      return f.ref !== void 0;
    }
    function va(f) {
      if (It.call(f, "key")) {
        var w = Object.getOwnPropertyDescriptor(f, "key").get;
        if (w && w.isReactWarning)
          return !1;
      }
      return f.key !== void 0;
    }
    function ya(f, w) {
      typeof f.ref == "string" && sn.current;
    }
    function ba(f, w) {
      {
        var S = function() {
          nn || (nn = !0, C("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", w));
        };
        S.isReactWarning = !0, Object.defineProperty(f, "key", {
          get: S,
          configurable: !0
        });
      }
    }
    function wa(f, w) {
      {
        var S = function() {
          an || (an = !0, C("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", w));
        };
        S.isReactWarning = !0, Object.defineProperty(f, "ref", {
          get: S,
          configurable: !0
        });
      }
    }
    var xa = function(f, w, S, P, B, G, M) {
      var F = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: e,
        // Built-in properties that belong on the element
        type: f,
        key: w,
        ref: S,
        props: M,
        // Record the component responsible for creating this element.
        _owner: G
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
        value: B
      }), Object.freeze && (Object.freeze(F.props), Object.freeze(F)), F;
    };
    function _a(f, w, S, P, B) {
      {
        var G, M = {}, F = null, le = null;
        S !== void 0 && (rn(S), F = "" + S), va(w) && (rn(w.key), F = "" + w.key), ga(w) && (le = w.ref, ya(w, B));
        for (G in w)
          It.call(w, G) && !pa.hasOwnProperty(G) && (M[G] = w[G]);
        if (f && f.defaultProps) {
          var Z = f.defaultProps;
          for (G in Z)
            M[G] === void 0 && (M[G] = Z[G]);
        }
        if (F || le) {
          var ee = typeof f == "function" ? f.displayName || f.name || "Unknown" : f;
          F && ba(M, ee), le && wa(M, ee);
        }
        return xa(f, F, le, B, P, sn.current, M);
      }
    }
    var Mr = k.ReactCurrentOwner, on = k.ReactDebugCurrentFrame;
    function ct(f) {
      if (f) {
        var w = f._owner, S = cr(f.type, f._source, w ? w.type : null);
        on.setExtraStackFrame(S);
      } else
        on.setExtraStackFrame(null);
    }
    var qr;
    qr = !1;
    function Br(f) {
      return typeof f == "object" && f !== null && f.$$typeof === e;
    }
    function ln() {
      {
        if (Mr.current) {
          var f = K(Mr.current.type);
          if (f)
            return `

Check the render method of \`` + f + "`.";
        }
        return "";
      }
    }
    function ja(f) {
      return "";
    }
    var cn = {};
    function ka(f) {
      {
        var w = ln();
        if (!w) {
          var S = typeof f == "string" ? f : f.displayName || f.name;
          S && (w = `

Check the top-level render call using <` + S + ">.");
        }
        return w;
      }
    }
    function un(f, w) {
      {
        if (!f._store || f._store.validated || f.key != null)
          return;
        f._store.validated = !0;
        var S = ka(w);
        if (cn[S])
          return;
        cn[S] = !0;
        var P = "";
        f && f._owner && f._owner !== Mr.current && (P = " It was passed a child from " + K(f._owner.type) + "."), ct(f), C('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', S, P), ct(null);
      }
    }
    function dn(f, w) {
      {
        if (typeof f != "object")
          return;
        if (Ur(f))
          for (var S = 0; S < f.length; S++) {
            var P = f[S];
            Br(P) && un(P, w);
          }
        else if (Br(f))
          f._store && (f._store.validated = !0);
        else if (f) {
          var B = g(f);
          if (typeof B == "function" && B !== f.entries)
            for (var G = B.call(f), M; !(M = G.next()).done; )
              Br(M.value) && un(M.value, w);
        }
      }
    }
    function Ea(f) {
      {
        var w = f.type;
        if (w == null || typeof w == "string")
          return;
        var S;
        if (typeof w == "function")
          S = w.propTypes;
        else if (typeof w == "object" && (w.$$typeof === l || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        w.$$typeof === h))
          S = w.propTypes;
        else
          return;
        if (S) {
          var P = K(w);
          da(S, f.props, "prop", P, f);
        } else if (w.PropTypes !== void 0 && !qr) {
          qr = !0;
          var B = K(w);
          C("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", B || "Unknown");
        }
        typeof w.getDefaultProps == "function" && !w.getDefaultProps.isReactClassApproved && C("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Ca(f) {
      {
        for (var w = Object.keys(f.props), S = 0; S < w.length; S++) {
          var P = w[S];
          if (P !== "children" && P !== "key") {
            ct(f), C("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", P), ct(null);
            break;
          }
        }
        f.ref !== null && (ct(f), C("Invalid attribute `ref` supplied to `React.Fragment`."), ct(null));
      }
    }
    var hn = {};
    function fn(f, w, S, P, B, G) {
      {
        var M = N(f);
        if (!M) {
          var F = "";
          (f === void 0 || typeof f == "object" && f !== null && Object.keys(f).length === 0) && (F += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var le = ja();
          le ? F += le : F += ln();
          var Z;
          f === null ? Z = "null" : Ur(f) ? Z = "array" : f !== void 0 && f.$$typeof === e ? (Z = "<" + (K(f.type) || "Unknown") + " />", F = " Did you accidentally export a JSX literal instead of a component?") : Z = typeof f, C("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Z, F);
        }
        var ee = _a(f, w, S, B, G);
        if (ee == null)
          return ee;
        if (M) {
          var be = w.children;
          if (be !== void 0)
            if (P)
              if (Ur(be)) {
                for (var ut = 0; ut < be.length; ut++)
                  dn(be[ut], f);
                Object.freeze && Object.freeze(be);
              } else
                C("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              dn(be, f);
        }
        if (It.call(w, "key")) {
          var Qe = K(f), he = Object.keys(w).filter(function(Oa) {
            return Oa !== "key";
          }), zr = he.length > 0 ? "{key: someKey, " + he.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!hn[Qe + zr]) {
            var Pa = he.length > 0 ? "{" + he.join(": ..., ") + ": ...}" : "{}";
            C(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, zr, Qe, Pa, Qe), hn[Qe + zr] = !0;
          }
        }
        return f === s ? Ca(ee) : Ea(ee), ee;
      }
    }
    function Sa(f, w, S) {
      return fn(f, w, S, !0);
    }
    function Ra(f, w, S) {
      return fn(f, w, S, !1);
    }
    var Ta = Ra, Na = Sa;
    Dt.Fragment = s, Dt.jsx = Ta, Dt.jsxs = Na;
  }()), Dt;
}
var vn;
function Ua() {
  return vn || (vn = 1, process.env.NODE_ENV === "production" ? dr.exports = Fa() : dr.exports = Da()), dr.exports;
}
var d = Ua();
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
function is() {
  return is = Object.assign ? Object.assign.bind() : function(r) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var s in t)
        Object.prototype.hasOwnProperty.call(t, s) && (r[s] = t[s]);
    }
    return r;
  }, is.apply(this, arguments);
}
var as;
(function(r) {
  r.Pop = "POP", r.Push = "PUSH", r.Replace = "REPLACE";
})(as || (as = {}));
function $(r, e) {
  if (r === !1 || r === null || typeof r > "u")
    throw new Error(e);
}
function ke(r, e) {
  if (!r) {
    typeof console < "u" && console.warn(e);
    try {
      throw new Error(e);
    } catch {
    }
  }
}
function os(r) {
  let {
    pathname: e = "/",
    search: t = "",
    hash: s = ""
  } = r;
  return t && t !== "?" && (e += t.charAt(0) === "?" ? t : "?" + t), s && s !== "#" && (e += s.charAt(0) === "#" ? s : "#" + s), e;
}
function Rr(r) {
  let e = {};
  if (r) {
    let t = r.indexOf("#");
    t >= 0 && (e.hash = r.substr(t), r = r.substr(0, t));
    let s = r.indexOf("?");
    s >= 0 && (e.search = r.substr(s), r = r.substr(0, s)), r && (e.pathname = r);
  }
  return e;
}
var yn;
(function(r) {
  r.data = "data", r.deferred = "deferred", r.redirect = "redirect", r.error = "error";
})(yn || (yn = {}));
function Ma(r, e, t) {
  return t === void 0 && (t = "/"), qa(r, e, t);
}
function qa(r, e, t, s) {
  let n = typeof e == "string" ? Rr(e) : e, i = at(n.pathname || "/", t);
  if (i == null)
    return null;
  let a = fi(r);
  Ba(a);
  let o = null;
  for (let l = 0; o == null && l < a.length; ++l) {
    let u = Za(i);
    o = Ya(a[l], u);
  }
  return o;
}
function fi(r, e, t, s) {
  e === void 0 && (e = []), t === void 0 && (t = []), s === void 0 && (s = "");
  let n = (i, a, o) => {
    let l = {
      relativePath: o === void 0 ? i.path || "" : o,
      caseSensitive: i.caseSensitive === !0,
      childrenIndex: a,
      route: i
    };
    l.relativePath.startsWith("/") && ($(l.relativePath.startsWith(s), 'Absolute route path "' + l.relativePath + '" nested under path ' + ('"' + s + '" is not valid. An absolute child route path ') + "must start with the combined path of all its parent routes."), l.relativePath = l.relativePath.slice(s.length));
    let u = Te([s, l.relativePath]), c = t.concat(l);
    i.children && i.children.length > 0 && ($(
      // Our types know better, but runtime JS may not!
      // @ts-expect-error
      i.index !== !0,
      "Index routes must not have child routes. Please remove " + ('all child routes from route path "' + u + '".')
    ), fi(i.children, e, c, u)), !(i.path == null && !i.index) && e.push({
      path: u,
      score: Ja(u, i.index),
      routesMeta: c
    });
  };
  return r.forEach((i, a) => {
    var o;
    if (i.path === "" || !((o = i.path) != null && o.includes("?")))
      n(i, a);
    else
      for (let l of mi(i.path))
        n(i, a, l);
  }), e;
}
function mi(r) {
  let e = r.split("/");
  if (e.length === 0) return [];
  let [t, ...s] = e, n = t.endsWith("?"), i = t.replace(/\?$/, "");
  if (s.length === 0)
    return n ? [i, ""] : [i];
  let a = mi(s.join("/")), o = [];
  return o.push(...a.map((l) => l === "" ? i : [i, l].join("/"))), n && o.push(...a), o.map((l) => r.startsWith("/") && l === "" ? "/" : l);
}
function Ba(r) {
  r.sort((e, t) => e.score !== t.score ? t.score - e.score : Qa(e.routesMeta.map((s) => s.childrenIndex), t.routesMeta.map((s) => s.childrenIndex)));
}
const za = /^:[\w-]+$/, Va = 3, Wa = 2, Ga = 1, Ha = 10, Ka = -2, bn = (r) => r === "*";
function Ja(r, e) {
  let t = r.split("/"), s = t.length;
  return t.some(bn) && (s += Ka), e && (s += Wa), t.filter((n) => !bn(n)).reduce((n, i) => n + (za.test(i) ? Va : i === "" ? Ga : Ha), s);
}
function Qa(r, e) {
  return r.length === e.length && r.slice(0, -1).every((s, n) => s === e[n]) ? (
    // If two routes are siblings, we should try to match the earlier sibling
    // first. This allows people to have fine-grained control over the matching
    // behavior by simply putting routes with identical paths in the order they
    // want them tried.
    r[r.length - 1] - e[e.length - 1]
  ) : (
    // Otherwise, it doesn't really make sense to rank non-siblings by index,
    // so they sort equally.
    0
  );
}
function Ya(r, e, t) {
  let {
    routesMeta: s
  } = r, n = {}, i = "/", a = [];
  for (let o = 0; o < s.length; ++o) {
    let l = s[o], u = o === s.length - 1, c = i === "/" ? e : e.slice(i.length) || "/", h = ls({
      path: l.relativePath,
      caseSensitive: l.caseSensitive,
      end: u
    }, c), m = l.route;
    if (!h)
      return null;
    Object.assign(n, h.params), a.push({
      // TODO: Can this as be avoided?
      params: n,
      pathname: Te([i, h.pathname]),
      pathnameBase: so(Te([i, h.pathnameBase])),
      route: m
    }), h.pathnameBase !== "/" && (i = Te([i, h.pathnameBase]));
  }
  return a;
}
function ls(r, e) {
  typeof r == "string" && (r = {
    path: r,
    caseSensitive: !1,
    end: !0
  });
  let [t, s] = Xa(r.path, r.caseSensitive, r.end), n = e.match(t);
  if (!n) return null;
  let i = n[0], a = i.replace(/(.)\/+$/, "$1"), o = n.slice(1);
  return {
    params: s.reduce((u, c, h) => {
      let {
        paramName: m,
        isOptional: p
      } = c;
      if (m === "*") {
        let x = o[h] || "";
        a = i.slice(0, i.length - x.length).replace(/(.)\/+$/, "$1");
      }
      const y = o[h];
      return p && !y ? u[m] = void 0 : u[m] = (y || "").replace(/%2F/g, "/"), u;
    }, {}),
    pathname: i,
    pathnameBase: a,
    pattern: r
  };
}
function Xa(r, e, t) {
  e === void 0 && (e = !1), t === void 0 && (t = !0), ke(r === "*" || !r.endsWith("*") || r.endsWith("/*"), 'Route path "' + r + '" will be treated as if it were ' + ('"' + r.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + r.replace(/\*$/, "/*") + '".'));
  let s = [], n = "^" + r.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (a, o, l) => (s.push({
    paramName: o,
    isOptional: l != null
  }), l ? "/?([^\\/]+)?" : "/([^\\/]+)"));
  return r.endsWith("*") ? (s.push({
    paramName: "*"
  }), n += r === "*" || r === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : t ? n += "\\/*$" : r !== "" && r !== "/" && (n += "(?:(?=\\/|$))"), [new RegExp(n, e ? void 0 : "i"), s];
}
function Za(r) {
  try {
    return r.split("/").map((e) => decodeURIComponent(e).replace(/\//g, "%2F")).join("/");
  } catch (e) {
    return ke(!1, 'The URL path "' + r + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' + ("encoding (" + e + ").")), r;
  }
}
function at(r, e) {
  if (e === "/") return r;
  if (!r.toLowerCase().startsWith(e.toLowerCase()))
    return null;
  let t = e.endsWith("/") ? e.length - 1 : e.length, s = r.charAt(t);
  return s && s !== "/" ? null : r.slice(t) || "/";
}
function eo(r, e) {
  e === void 0 && (e = "/");
  let {
    pathname: t,
    search: s = "",
    hash: n = ""
  } = typeof r == "string" ? Rr(r) : r;
  return {
    pathname: t ? t.startsWith("/") ? t : to(t, e) : e,
    search: no(s),
    hash: io(n)
  };
}
function to(r, e) {
  let t = e.replace(/\/+$/, "").split("/");
  return r.split("/").forEach((n) => {
    n === ".." ? t.length > 1 && t.pop() : n !== "." && t.push(n);
  }), t.length > 1 ? t.join("/") : "/";
}
function Wr(r, e, t, s) {
  return "Cannot include a '" + r + "' character in a manually specified " + ("`to." + e + "` field [" + JSON.stringify(s) + "].  Please separate it out to the ") + ("`to." + t + "` field. Alternatively you may provide the full path as ") + 'a string in <Link to="..."> and the router will parse it for you.';
}
function ro(r) {
  return r.filter((e, t) => t === 0 || e.route.path && e.route.path.length > 0);
}
function Is(r, e) {
  let t = ro(r);
  return e ? t.map((s, n) => n === t.length - 1 ? s.pathname : s.pathnameBase) : t.map((s) => s.pathnameBase);
}
function Fs(r, e, t, s) {
  s === void 0 && (s = !1);
  let n;
  typeof r == "string" ? n = Rr(r) : (n = is({}, r), $(!n.pathname || !n.pathname.includes("?"), Wr("?", "pathname", "search", n)), $(!n.pathname || !n.pathname.includes("#"), Wr("#", "pathname", "hash", n)), $(!n.search || !n.search.includes("#"), Wr("#", "search", "hash", n)));
  let i = r === "" || n.pathname === "", a = i ? "/" : n.pathname, o;
  if (a == null)
    o = t;
  else {
    let h = e.length - 1;
    if (!s && a.startsWith("..")) {
      let m = a.split("/");
      for (; m[0] === ".."; )
        m.shift(), h -= 1;
      n.pathname = m.join("/");
    }
    o = h >= 0 ? e[h] : "/";
  }
  let l = eo(n, o), u = a && a !== "/" && a.endsWith("/"), c = (i || a === ".") && t.endsWith("/");
  return !l.pathname.endsWith("/") && (u || c) && (l.pathname += "/"), l;
}
const Te = (r) => r.join("/").replace(/\/\/+/g, "/"), so = (r) => r.replace(/\/+$/, "").replace(/^\/*/, "/"), no = (r) => !r || r === "?" ? "" : r.startsWith("?") ? r : "?" + r, io = (r) => !r || r === "#" ? "" : r.startsWith("#") ? r : "#" + r;
function ao(r) {
  return r != null && typeof r.status == "number" && typeof r.statusText == "string" && typeof r.internal == "boolean" && "data" in r;
}
const pi = ["post", "put", "patch", "delete"];
new Set(pi);
const oo = ["get", ...pi];
new Set(oo);
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
function jr() {
  return jr = Object.assign ? Object.assign.bind() : function(r) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var s in t)
        Object.prototype.hasOwnProperty.call(t, s) && (r[s] = t[s]);
    }
    return r;
  }, jr.apply(this, arguments);
}
const rr = /* @__PURE__ */ v.createContext(null);
process.env.NODE_ENV !== "production" && (rr.displayName = "DataRouter");
const Ds = /* @__PURE__ */ v.createContext(null);
process.env.NODE_ENV !== "production" && (Ds.displayName = "DataRouterState");
const lo = /* @__PURE__ */ v.createContext(null);
process.env.NODE_ENV !== "production" && (lo.displayName = "Await");
const xe = /* @__PURE__ */ v.createContext(null);
process.env.NODE_ENV !== "production" && (xe.displayName = "Navigation");
const Tr = /* @__PURE__ */ v.createContext(null);
process.env.NODE_ENV !== "production" && (Tr.displayName = "Location");
const Ee = /* @__PURE__ */ v.createContext({
  outlet: null,
  matches: [],
  isDataRoute: !1
});
process.env.NODE_ENV !== "production" && (Ee.displayName = "Route");
const Us = /* @__PURE__ */ v.createContext(null);
process.env.NODE_ENV !== "production" && (Us.displayName = "RouteError");
function co(r, e) {
  let {
    relative: t
  } = e === void 0 ? {} : e;
  sr() || (process.env.NODE_ENV !== "production" ? $(
    !1,
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useHref() may be used only in the context of a <Router> component."
  ) : $(!1));
  let {
    basename: s,
    navigator: n
  } = v.useContext(xe), {
    hash: i,
    pathname: a,
    search: o
  } = nr(r, {
    relative: t
  }), l = a;
  return s !== "/" && (l = a === "/" ? s : Te([s, a])), n.createHref({
    pathname: l,
    search: o,
    hash: i
  });
}
function sr() {
  return v.useContext(Tr) != null;
}
function He() {
  return sr() || (process.env.NODE_ENV !== "production" ? $(
    !1,
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useLocation() may be used only in the context of a <Router> component."
  ) : $(!1)), v.useContext(Tr).location;
}
const gi = "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
function vi(r) {
  v.useContext(xe).static || v.useLayoutEffect(r);
}
function Nr() {
  let {
    isDataRoute: r
  } = v.useContext(Ee);
  return r ? ko() : uo();
}
function uo() {
  sr() || (process.env.NODE_ENV !== "production" ? $(
    !1,
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useNavigate() may be used only in the context of a <Router> component."
  ) : $(!1));
  let r = v.useContext(rr), {
    basename: e,
    future: t,
    navigator: s
  } = v.useContext(xe), {
    matches: n
  } = v.useContext(Ee), {
    pathname: i
  } = He(), a = JSON.stringify(Is(n, t.v7_relativeSplatPath)), o = v.useRef(!1);
  return vi(() => {
    o.current = !0;
  }), v.useCallback(function(u, c) {
    if (c === void 0 && (c = {}), process.env.NODE_ENV !== "production" && ke(o.current, gi), !o.current) return;
    if (typeof u == "number") {
      s.go(u);
      return;
    }
    let h = Fs(u, JSON.parse(a), i, c.relative === "path");
    r == null && e !== "/" && (h.pathname = h.pathname === "/" ? e : Te([e, h.pathname])), (c.replace ? s.replace : s.push)(h, c.state, c);
  }, [e, s, a, i, r]);
}
function nr(r, e) {
  let {
    relative: t
  } = e === void 0 ? {} : e, {
    future: s
  } = v.useContext(xe), {
    matches: n
  } = v.useContext(Ee), {
    pathname: i
  } = He(), a = JSON.stringify(Is(n, s.v7_relativeSplatPath));
  return v.useMemo(() => Fs(r, JSON.parse(a), i, t === "path"), [r, a, i, t]);
}
function ho(r, e) {
  return fo(r, e);
}
function fo(r, e, t, s) {
  sr() || (process.env.NODE_ENV !== "production" ? $(
    !1,
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useRoutes() may be used only in the context of a <Router> component."
  ) : $(!1));
  let {
    navigator: n,
    static: i
  } = v.useContext(xe), {
    matches: a
  } = v.useContext(Ee), o = a[a.length - 1], l = o ? o.params : {}, u = o ? o.pathname : "/", c = o ? o.pathnameBase : "/", h = o && o.route;
  if (process.env.NODE_ENV !== "production") {
    let j = h && h.path || "";
    bi(u, !h || j.endsWith("*"), "You rendered descendant <Routes> (or called `useRoutes()`) at " + ('"' + u + '" (under <Route path="' + j + '">) but the ') + `parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

` + ('Please change the parent <Route path="' + j + '"> to <Route ') + ('path="' + (j === "/" ? "*" : j + "/*") + '">.'));
  }
  let m = He(), p;
  if (e) {
    var y;
    let j = typeof e == "string" ? Rr(e) : e;
    c === "/" || (y = j.pathname) != null && y.startsWith(c) || (process.env.NODE_ENV !== "production" ? $(!1, "When overriding the location using `<Routes location>` or `useRoutes(routes, location)`, the location pathname must begin with the portion of the URL pathname that was " + ('matched by all parent routes. The current pathname base is "' + c + '" ') + ('but pathname "' + j.pathname + '" was given in the `location` prop.')) : $(!1)), p = j;
  } else
    p = m;
  let x = p.pathname || "/", g = x;
  if (c !== "/") {
    let j = c.replace(/^\//, "").split("/");
    g = "/" + x.replace(/^\//, "").split("/").slice(j.length).join("/");
  }
  let k = Ma(r, {
    pathname: g
  });
  process.env.NODE_ENV !== "production" && (process.env.NODE_ENV !== "production" && ke(h || k != null, 'No routes matched location "' + p.pathname + p.search + p.hash + '" '), process.env.NODE_ENV !== "production" && ke(k == null || k[k.length - 1].route.element !== void 0 || k[k.length - 1].route.Component !== void 0 || k[k.length - 1].route.lazy !== void 0, 'Matched leaf route at location "' + p.pathname + p.search + p.hash + '" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.'));
  let C = yo(k && k.map((j) => Object.assign({}, j, {
    params: Object.assign({}, l, j.params),
    pathname: Te([
      c,
      // Re-encode pathnames that were decoded inside matchRoutes
      n.encodeLocation ? n.encodeLocation(j.pathname).pathname : j.pathname
    ]),
    pathnameBase: j.pathnameBase === "/" ? c : Te([
      c,
      // Re-encode pathnames that were decoded inside matchRoutes
      n.encodeLocation ? n.encodeLocation(j.pathnameBase).pathname : j.pathnameBase
    ])
  })), a, t, s);
  return e && C ? /* @__PURE__ */ v.createElement(Tr.Provider, {
    value: {
      location: jr({
        pathname: "/",
        search: "",
        hash: "",
        state: null,
        key: "default"
      }, p),
      navigationType: as.Pop
    }
  }, C) : C;
}
function mo() {
  let r = jo(), e = ao(r) ? r.status + " " + r.statusText : r instanceof Error ? r.message : JSON.stringify(r), t = r instanceof Error ? r.stack : null, s = "rgba(200,200,200, 0.5)", n = {
    padding: "0.5rem",
    backgroundColor: s
  }, i = {
    padding: "2px 4px",
    backgroundColor: s
  }, a = null;
  return process.env.NODE_ENV !== "production" && (console.error("Error handled by React Router default ErrorBoundary:", r), a = /* @__PURE__ */ v.createElement(v.Fragment, null, /* @__PURE__ */ v.createElement("p", null, "💿 Hey developer 👋"), /* @__PURE__ */ v.createElement("p", null, "You can provide a way better UX than this when your app throws errors by providing your own ", /* @__PURE__ */ v.createElement("code", {
    style: i
  }, "ErrorBoundary"), " or", " ", /* @__PURE__ */ v.createElement("code", {
    style: i
  }, "errorElement"), " prop on your route."))), /* @__PURE__ */ v.createElement(v.Fragment, null, /* @__PURE__ */ v.createElement("h2", null, "Unexpected Application Error!"), /* @__PURE__ */ v.createElement("h3", {
    style: {
      fontStyle: "italic"
    }
  }, e), t ? /* @__PURE__ */ v.createElement("pre", {
    style: n
  }, t) : null, a);
}
const po = /* @__PURE__ */ v.createElement(mo, null);
class go extends v.Component {
  constructor(e) {
    super(e), this.state = {
      location: e.location,
      revalidation: e.revalidation,
      error: e.error
    };
  }
  static getDerivedStateFromError(e) {
    return {
      error: e
    };
  }
  static getDerivedStateFromProps(e, t) {
    return t.location !== e.location || t.revalidation !== "idle" && e.revalidation === "idle" ? {
      error: e.error,
      location: e.location,
      revalidation: e.revalidation
    } : {
      error: e.error !== void 0 ? e.error : t.error,
      location: t.location,
      revalidation: e.revalidation || t.revalidation
    };
  }
  componentDidCatch(e, t) {
    console.error("React Router caught the following error during render", e, t);
  }
  render() {
    return this.state.error !== void 0 ? /* @__PURE__ */ v.createElement(Ee.Provider, {
      value: this.props.routeContext
    }, /* @__PURE__ */ v.createElement(Us.Provider, {
      value: this.state.error,
      children: this.props.component
    })) : this.props.children;
  }
}
function vo(r) {
  let {
    routeContext: e,
    match: t,
    children: s
  } = r, n = v.useContext(rr);
  return n && n.static && n.staticContext && (t.route.errorElement || t.route.ErrorBoundary) && (n.staticContext._deepestRenderedBoundaryId = t.route.id), /* @__PURE__ */ v.createElement(Ee.Provider, {
    value: e
  }, s);
}
function yo(r, e, t, s) {
  var n;
  if (e === void 0 && (e = []), t === void 0 && (t = null), s === void 0 && (s = null), r == null) {
    var i;
    if (!t)
      return null;
    if (t.errors)
      r = t.matches;
    else if ((i = s) != null && i.v7_partialHydration && e.length === 0 && !t.initialized && t.matches.length > 0)
      r = t.matches;
    else
      return null;
  }
  let a = r, o = (n = t) == null ? void 0 : n.errors;
  if (o != null) {
    let c = a.findIndex((h) => h.route.id && (o == null ? void 0 : o[h.route.id]) !== void 0);
    c >= 0 || (process.env.NODE_ENV !== "production" ? $(!1, "Could not find a matching route for errors on route IDs: " + Object.keys(o).join(",")) : $(!1)), a = a.slice(0, Math.min(a.length, c + 1));
  }
  let l = !1, u = -1;
  if (t && s && s.v7_partialHydration)
    for (let c = 0; c < a.length; c++) {
      let h = a[c];
      if ((h.route.HydrateFallback || h.route.hydrateFallbackElement) && (u = c), h.route.id) {
        let {
          loaderData: m,
          errors: p
        } = t, y = h.route.loader && m[h.route.id] === void 0 && (!p || p[h.route.id] === void 0);
        if (h.route.lazy || y) {
          l = !0, u >= 0 ? a = a.slice(0, u + 1) : a = [a[0]];
          break;
        }
      }
    }
  return a.reduceRight((c, h, m) => {
    let p, y = !1, x = null, g = null;
    t && (p = o && h.route.id ? o[h.route.id] : void 0, x = h.route.errorElement || po, l && (u < 0 && m === 0 ? (bi("route-fallback", !1, "No `HydrateFallback` element provided to render during initial hydration"), y = !0, g = null) : u === m && (y = !0, g = h.route.hydrateFallbackElement || null)));
    let k = e.concat(a.slice(0, m + 1)), C = () => {
      let j;
      return p ? j = x : y ? j = g : h.route.Component ? j = /* @__PURE__ */ v.createElement(h.route.Component, null) : h.route.element ? j = h.route.element : j = c, /* @__PURE__ */ v.createElement(vo, {
        match: h,
        routeContext: {
          outlet: c,
          matches: k,
          isDataRoute: t != null
        },
        children: j
      });
    };
    return t && (h.route.ErrorBoundary || h.route.errorElement || m === 0) ? /* @__PURE__ */ v.createElement(go, {
      location: t.location,
      revalidation: t.revalidation,
      component: x,
      error: p,
      children: C(),
      routeContext: {
        outlet: null,
        matches: k,
        isDataRoute: !0
      }
    }) : C();
  }, null);
}
var yi = /* @__PURE__ */ function(r) {
  return r.UseBlocker = "useBlocker", r.UseRevalidator = "useRevalidator", r.UseNavigateStable = "useNavigate", r;
}(yi || {}), Yt = /* @__PURE__ */ function(r) {
  return r.UseBlocker = "useBlocker", r.UseLoaderData = "useLoaderData", r.UseActionData = "useActionData", r.UseRouteError = "useRouteError", r.UseNavigation = "useNavigation", r.UseRouteLoaderData = "useRouteLoaderData", r.UseMatches = "useMatches", r.UseRevalidator = "useRevalidator", r.UseNavigateStable = "useNavigate", r.UseRouteId = "useRouteId", r;
}(Yt || {});
function Ms(r) {
  return r + " must be used within a data router.  See https://reactrouter.com/v6/routers/picking-a-router.";
}
function bo(r) {
  let e = v.useContext(rr);
  return e || (process.env.NODE_ENV !== "production" ? $(!1, Ms(r)) : $(!1)), e;
}
function wo(r) {
  let e = v.useContext(Ds);
  return e || (process.env.NODE_ENV !== "production" ? $(!1, Ms(r)) : $(!1)), e;
}
function xo(r) {
  let e = v.useContext(Ee);
  return e || (process.env.NODE_ENV !== "production" ? $(!1, Ms(r)) : $(!1)), e;
}
function qs(r) {
  let e = xo(r), t = e.matches[e.matches.length - 1];
  return t.route.id || (process.env.NODE_ENV !== "production" ? $(!1, r + ' can only be used on routes that contain a unique "id"') : $(!1)), t.route.id;
}
function _o() {
  return qs(Yt.UseRouteId);
}
function jo() {
  var r;
  let e = v.useContext(Us), t = wo(Yt.UseRouteError), s = qs(Yt.UseRouteError);
  return e !== void 0 ? e : (r = t.errors) == null ? void 0 : r[s];
}
function ko() {
  let {
    router: r
  } = bo(yi.UseNavigateStable), e = qs(Yt.UseNavigateStable), t = v.useRef(!1);
  return vi(() => {
    t.current = !0;
  }), v.useCallback(function(n, i) {
    i === void 0 && (i = {}), process.env.NODE_ENV !== "production" && ke(t.current, gi), t.current && (typeof n == "number" ? r.navigate(n) : r.navigate(n, jr({
      fromRouteId: e
    }, i)));
  }, [r, e]);
}
const wn = {};
function bi(r, e, t) {
  !e && !wn[r] && (wn[r] = !0, process.env.NODE_ENV !== "production" && ke(!1, t));
}
function Eo(r) {
  let {
    to: e,
    replace: t,
    state: s,
    relative: n
  } = r;
  sr() || (process.env.NODE_ENV !== "production" ? $(
    !1,
    // TODO: This error is probably because they somehow have 2 versions of
    // the router loaded. We can help them understand how to avoid that.
    "<Navigate> may be used only in the context of a <Router> component."
  ) : $(!1));
  let {
    future: i,
    static: a
  } = v.useContext(xe);
  process.env.NODE_ENV !== "production" && ke(!a, "<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");
  let {
    matches: o
  } = v.useContext(Ee), {
    pathname: l
  } = He(), u = Nr(), c = Fs(e, Is(o, i.v7_relativeSplatPath), l, n === "path"), h = JSON.stringify(c);
  return v.useEffect(() => u(JSON.parse(h), {
    replace: t,
    state: s,
    relative: n
  }), [u, h, n, t, s]), null;
}
function Xe(r) {
  process.env.NODE_ENV !== "production" ? $(!1, "A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.") : $(!1);
}
function Co(r) {
  let {
    children: e,
    location: t
  } = r;
  return ho(cs(e), t);
}
new Promise(() => {
});
function cs(r, e) {
  e === void 0 && (e = []);
  let t = [];
  return v.Children.forEach(r, (s, n) => {
    if (!/* @__PURE__ */ v.isValidElement(s))
      return;
    let i = [...e, n];
    if (s.type === v.Fragment) {
      t.push.apply(t, cs(s.props.children, i));
      return;
    }
    s.type !== Xe && (process.env.NODE_ENV !== "production" ? $(!1, "[" + (typeof s.type == "string" ? s.type : s.type.name) + "] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>") : $(!1)), !s.props.index || !s.props.children || (process.env.NODE_ENV !== "production" ? $(!1, "An index route cannot have child routes.") : $(!1));
    let a = {
      id: s.props.id || i.join("-"),
      caseSensitive: s.props.caseSensitive,
      element: s.props.element,
      Component: s.props.Component,
      index: s.props.index,
      path: s.props.path,
      loader: s.props.loader,
      action: s.props.action,
      errorElement: s.props.errorElement,
      ErrorBoundary: s.props.ErrorBoundary,
      hasErrorBoundary: s.props.ErrorBoundary != null || s.props.errorElement != null,
      shouldRevalidate: s.props.shouldRevalidate,
      handle: s.props.handle,
      lazy: s.props.lazy
    };
    s.props.children && (a.children = cs(s.props.children, i)), t.push(a);
  }), t;
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
function Tt() {
  return Tt = Object.assign ? Object.assign.bind() : function(r) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var s in t)
        Object.prototype.hasOwnProperty.call(t, s) && (r[s] = t[s]);
    }
    return r;
  }, Tt.apply(this, arguments);
}
function Bs(r, e) {
  if (r == null) return {};
  var t = {}, s = Object.keys(r), n, i;
  for (i = 0; i < s.length; i++)
    n = s[i], !(e.indexOf(n) >= 0) && (t[n] = r[n]);
  return t;
}
const yr = "get", br = "application/x-www-form-urlencoded";
function Pr(r) {
  return r != null && typeof r.tagName == "string";
}
function So(r) {
  return Pr(r) && r.tagName.toLowerCase() === "button";
}
function Ro(r) {
  return Pr(r) && r.tagName.toLowerCase() === "form";
}
function To(r) {
  return Pr(r) && r.tagName.toLowerCase() === "input";
}
function No(r) {
  return !!(r.metaKey || r.altKey || r.ctrlKey || r.shiftKey);
}
function Po(r, e) {
  return r.button === 0 && // Ignore everything but left clicks
  (!e || e === "_self") && // Let browser handle "target=_blank" etc.
  !No(r);
}
let hr = null;
function Oo() {
  if (hr === null)
    try {
      new FormData(
        document.createElement("form"),
        // @ts-expect-error if FormData supports the submitter parameter, this will throw
        0
      ), hr = !1;
    } catch {
      hr = !0;
    }
  return hr;
}
const Ao = /* @__PURE__ */ new Set(["application/x-www-form-urlencoded", "multipart/form-data", "text/plain"]);
function Gr(r) {
  return r != null && !Ao.has(r) ? (process.env.NODE_ENV !== "production" && ke(!1, '"' + r + '" is not a valid `encType` for `<Form>`/`<fetcher.Form>` ' + ('and will default to "' + br + '"')), null) : r;
}
function Lo(r, e) {
  let t, s, n, i, a;
  if (Ro(r)) {
    let o = r.getAttribute("action");
    s = o ? at(o, e) : null, t = r.getAttribute("method") || yr, n = Gr(r.getAttribute("enctype")) || br, i = new FormData(r);
  } else if (So(r) || To(r) && (r.type === "submit" || r.type === "image")) {
    let o = r.form;
    if (o == null)
      throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');
    let l = r.getAttribute("formaction") || o.getAttribute("action");
    if (s = l ? at(l, e) : null, t = r.getAttribute("formmethod") || o.getAttribute("method") || yr, n = Gr(r.getAttribute("formenctype")) || Gr(o.getAttribute("enctype")) || br, i = new FormData(o, r), !Oo()) {
      let {
        name: u,
        type: c,
        value: h
      } = r;
      if (c === "image") {
        let m = u ? u + "." : "";
        i.append(m + "x", "0"), i.append(m + "y", "0");
      } else u && i.append(u, h);
    }
  } else {
    if (Pr(r))
      throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');
    t = yr, s = null, n = br, a = r;
  }
  return i && n === "text/plain" && (a = i, i = void 0), {
    action: s,
    method: t.toLowerCase(),
    encType: n,
    formData: i,
    body: a
  };
}
const $o = ["onClick", "relative", "reloadDocument", "replace", "state", "target", "to", "preventScrollReset", "viewTransition"], Io = ["aria-current", "caseSensitive", "className", "end", "style", "to", "viewTransition", "children"], Fo = ["fetcherKey", "navigate", "reloadDocument", "replace", "state", "method", "action", "onSubmit", "relative", "preventScrollReset", "viewTransition"], Do = "6";
try {
  window.__reactRouterVersion = Do;
} catch {
}
const wi = /* @__PURE__ */ v.createContext({
  isTransitioning: !1
});
process.env.NODE_ENV !== "production" && (wi.displayName = "ViewTransition");
const Uo = /* @__PURE__ */ v.createContext(/* @__PURE__ */ new Map());
process.env.NODE_ENV !== "production" && (Uo.displayName = "Fetchers");
process.env.NODE_ENV;
const Mo = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", qo = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i, it = /* @__PURE__ */ v.forwardRef(function(e, t) {
  let {
    onClick: s,
    relative: n,
    reloadDocument: i,
    replace: a,
    state: o,
    target: l,
    to: u,
    preventScrollReset: c,
    viewTransition: h
  } = e, m = Bs(e, $o), {
    basename: p
  } = v.useContext(xe), y, x = !1;
  if (typeof u == "string" && qo.test(u) && (y = u, Mo))
    try {
      let j = new URL(window.location.href), R = u.startsWith("//") ? new URL(j.protocol + u) : new URL(u), L = at(R.pathname, p);
      R.origin === j.origin && L != null ? u = L + R.search + R.hash : x = !0;
    } catch {
      process.env.NODE_ENV !== "production" && ke(!1, '<Link to="' + u + '"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.');
    }
  let g = co(u, {
    relative: n
  }), k = Wo(u, {
    replace: a,
    state: o,
    target: l,
    preventScrollReset: c,
    relative: n,
    viewTransition: h
  });
  function C(j) {
    s && s(j), j.defaultPrevented || k(j);
  }
  return (
    // eslint-disable-next-line jsx-a11y/anchor-has-content
    /* @__PURE__ */ v.createElement("a", Tt({}, m, {
      href: y || g,
      onClick: x || i ? s : C,
      ref: t,
      target: l
    }))
  );
});
process.env.NODE_ENV !== "production" && (it.displayName = "Link");
const Bo = /* @__PURE__ */ v.forwardRef(function(e, t) {
  let {
    "aria-current": s = "page",
    caseSensitive: n = !1,
    className: i = "",
    end: a = !1,
    style: o,
    to: l,
    viewTransition: u,
    children: c
  } = e, h = Bs(e, Io), m = nr(l, {
    relative: h.relative
  }), p = He(), y = v.useContext(Ds), {
    navigator: x,
    basename: g
  } = v.useContext(xe), k = y != null && // Conditional usage is OK here because the usage of a data router is static
  // eslint-disable-next-line react-hooks/rules-of-hooks
  Yo(m) && u === !0, C = x.encodeLocation ? x.encodeLocation(m).pathname : m.pathname, j = p.pathname, R = y && y.navigation && y.navigation.location ? y.navigation.location.pathname : null;
  n || (j = j.toLowerCase(), R = R ? R.toLowerCase() : null, C = C.toLowerCase()), R && g && (R = at(R, g) || R);
  const L = C !== "/" && C.endsWith("/") ? C.length - 1 : C.length;
  let X = j === C || !a && j.startsWith(C) && j.charAt(L) === "/", se = R != null && (R === C || !a && R.startsWith(C) && R.charAt(C.length) === "/"), T = {
    isActive: X,
    isPending: se,
    isTransitioning: k
  }, _ = X ? s : void 0, N;
  typeof i == "function" ? N = i(T) : N = [i, X ? "active" : null, se ? "pending" : null, k ? "transitioning" : null].filter(Boolean).join(" ");
  let W = typeof o == "function" ? o(T) : o;
  return /* @__PURE__ */ v.createElement(it, Tt({}, h, {
    "aria-current": _,
    className: N,
    ref: t,
    style: W,
    to: l,
    viewTransition: u
  }), typeof c == "function" ? c(T) : c);
});
process.env.NODE_ENV !== "production" && (Bo.displayName = "NavLink");
const zo = /* @__PURE__ */ v.forwardRef((r, e) => {
  let {
    fetcherKey: t,
    navigate: s,
    reloadDocument: n,
    replace: i,
    state: a,
    method: o = yr,
    action: l,
    onSubmit: u,
    relative: c,
    preventScrollReset: h,
    viewTransition: m
  } = r, p = Bs(r, Fo), y = Jo(), x = Qo(l, {
    relative: c
  }), g = o.toLowerCase() === "get" ? "get" : "post", k = (C) => {
    if (u && u(C), C.defaultPrevented) return;
    C.preventDefault();
    let j = C.nativeEvent.submitter, R = (j == null ? void 0 : j.getAttribute("formmethod")) || o;
    y(j || C.currentTarget, {
      fetcherKey: t,
      method: R,
      navigate: s,
      replace: i,
      state: a,
      relative: c,
      preventScrollReset: h,
      viewTransition: m
    });
  };
  return /* @__PURE__ */ v.createElement("form", Tt({
    ref: e,
    method: g,
    action: x,
    onSubmit: n ? u : k
  }, p));
});
process.env.NODE_ENV !== "production" && (zo.displayName = "Form");
process.env.NODE_ENV;
var kr;
(function(r) {
  r.UseScrollRestoration = "useScrollRestoration", r.UseSubmit = "useSubmit", r.UseSubmitFetcher = "useSubmitFetcher", r.UseFetcher = "useFetcher", r.useViewTransitionState = "useViewTransitionState";
})(kr || (kr = {}));
var xn;
(function(r) {
  r.UseFetcher = "useFetcher", r.UseFetchers = "useFetchers", r.UseScrollRestoration = "useScrollRestoration";
})(xn || (xn = {}));
function Vo(r) {
  return r + " must be used within a data router.  See https://reactrouter.com/v6/routers/picking-a-router.";
}
function xi(r) {
  let e = v.useContext(rr);
  return e || (process.env.NODE_ENV !== "production" ? $(!1, Vo(r)) : $(!1)), e;
}
function Wo(r, e) {
  let {
    target: t,
    replace: s,
    state: n,
    preventScrollReset: i,
    relative: a,
    viewTransition: o
  } = e === void 0 ? {} : e, l = Nr(), u = He(), c = nr(r, {
    relative: a
  });
  return v.useCallback((h) => {
    if (Po(h, t)) {
      h.preventDefault();
      let m = s !== void 0 ? s : os(u) === os(c);
      l(r, {
        replace: m,
        state: n,
        preventScrollReset: i,
        relative: a,
        viewTransition: o
      });
    }
  }, [u, l, c, s, n, t, r, i, a, o]);
}
function Go() {
  if (typeof document > "u")
    throw new Error("You are calling submit during the server render. Try calling submit within a `useEffect` or callback instead.");
}
let Ho = 0, Ko = () => "__" + String(++Ho) + "__";
function Jo() {
  let {
    router: r
  } = xi(kr.UseSubmit), {
    basename: e
  } = v.useContext(xe), t = _o();
  return v.useCallback(function(s, n) {
    n === void 0 && (n = {}), Go();
    let {
      action: i,
      method: a,
      encType: o,
      formData: l,
      body: u
    } = Lo(s, e);
    if (n.navigate === !1) {
      let c = n.fetcherKey || Ko();
      r.fetch(c, t, n.action || i, {
        preventScrollReset: n.preventScrollReset,
        formData: l,
        body: u,
        formMethod: n.method || a,
        formEncType: n.encType || o,
        flushSync: n.flushSync
      });
    } else
      r.navigate(n.action || i, {
        preventScrollReset: n.preventScrollReset,
        formData: l,
        body: u,
        formMethod: n.method || a,
        formEncType: n.encType || o,
        replace: n.replace,
        state: n.state,
        fromRouteId: t,
        flushSync: n.flushSync,
        viewTransition: n.viewTransition
      });
  }, [r, e, t]);
}
function Qo(r, e) {
  let {
    relative: t
  } = e === void 0 ? {} : e, {
    basename: s
  } = v.useContext(xe), n = v.useContext(Ee);
  n || (process.env.NODE_ENV !== "production" ? $(!1, "useFormAction must be used inside a RouteContext") : $(!1));
  let [i] = n.matches.slice(-1), a = Tt({}, nr(r || ".", {
    relative: t
  })), o = He();
  if (r == null) {
    a.search = o.search;
    let l = new URLSearchParams(a.search), u = l.getAll("index");
    if (u.some((h) => h === "")) {
      l.delete("index"), u.filter((m) => m).forEach((m) => l.append("index", m));
      let h = l.toString();
      a.search = h ? "?" + h : "";
    }
  }
  return (!r || r === ".") && i.route.index && (a.search = a.search ? a.search.replace(/^\?/, "?index&") : "?index"), s !== "/" && (a.pathname = a.pathname === "/" ? s : Te([s, a.pathname])), os(a);
}
function Yo(r, e) {
  e === void 0 && (e = {});
  let t = v.useContext(wi);
  t == null && (process.env.NODE_ENV !== "production" ? $(!1, "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?") : $(!1));
  let {
    basename: s
  } = xi(kr.useViewTransitionState), n = nr(r, {
    relative: e.relative
  });
  if (!t.isTransitioning)
    return !1;
  let i = at(t.currentLocation.pathname, s) || t.currentLocation.pathname, a = at(t.nextLocation.pathname, s) || t.nextLocation.pathname;
  return ls(n.pathname, a) != null || ls(n.pathname, i) != null;
}
const ue = async (r, e) => {
  try {
    const { data: { user: t } } = await r.auth.getUser();
    if (!t)
      return { isAuthorized: !1, error: "Not authenticated" };
    const { data: s, error: n } = await r.from("projects").select("user_id").eq("id", e).single();
    if (n)
      return { isAuthorized: !1, error: "Project not found" };
    const i = s.user_id === t.id;
    return {
      isAuthorized: i,
      userId: t.id,
      error: i ? void 0 : "Not authorized for this project"
    };
  } catch {
    return { isAuthorized: !1, error: "Authorization check failed" };
  }
}, Xo = (r, e) => ({
  getArticles: async () => {
    try {
      const { data: c, error: h } = await r.from("articles").select("*").eq("project_id", e).eq("status", "published").order("created_at", { ascending: !1 });
      if (h)
        throw h;
      return { data: c, error: null };
    } catch (c) {
      return { data: null, error: c };
    }
  },
  getArticleBySlug: async (c) => {
    try {
      const { data: h, error: m } = await r.from("articles").select("*").eq("project_id", e).eq("slug", c).eq("status", "published").single();
      if (m)
        throw m;
      return { data: h, error: null };
    } catch (h) {
      return { data: null, error: h };
    }
  },
  getArticlesByCategory: async (c) => {
    try {
      const { data: h, error: m } = await r.from("articles").select("*").eq("project_id", e).eq("category", c).eq("status", "published").order("created_at", { ascending: !1 });
      if (m)
        throw m;
      return { data: h, error: null };
    } catch (h) {
      return { data: null, error: h };
    }
  },
  getAllArticles: async () => {
    try {
      const c = await ue(r, e);
      if (!c.isAuthorized)
        return { data: null, error: c.error };
      const { data: h, error: m } = await r.from("articles").select("*").eq("project_id", e).order("created_at", { ascending: !1 });
      if (m)
        throw m;
      return { data: h, error: null };
    } catch (c) {
      return { data: null, error: c };
    }
  },
  createArticle: async (c) => {
    try {
      const h = await ue(r, e);
      if (!h.isAuthorized)
        return { data: null, error: h.error };
      const { data: m, error: p } = await r.from("articles").insert({ ...c, project_id: e }).select().single();
      if (p)
        throw p;
      return { data: m, error: null };
    } catch (h) {
      return { data: null, error: h };
    }
  },
  updateArticle: async (c, h) => {
    try {
      const m = await ue(r, e);
      if (!m.isAuthorized)
        return { data: null, error: m.error };
      const { data: p, error: y } = await r.from("articles").update(h).eq("id", c).eq("project_id", e).select().single();
      if (y)
        throw y;
      return { data: p, error: null };
    } catch (m) {
      return { data: null, error: m };
    }
  },
  updateArticleStatus: async (c, h) => {
    try {
      const m = await ue(r, e);
      if (!m.isAuthorized)
        return { data: null, error: m.error };
      const { data: p, error: y } = await r.from("articles").update({ status: h }).eq("id", c).eq("project_id", e).select().single();
      if (y)
        throw y;
      return { data: p, error: null };
    } catch (m) {
      return { data: null, error: m };
    }
  },
  deleteArticle: async (c) => {
    try {
      const h = await ue(r, e);
      if (!h.isAuthorized)
        return { data: null, error: h.error };
      const { data: m, error: p } = await r.from("articles").delete().eq("id", c).eq("project_id", e).select().single();
      if (p)
        throw p;
      return { data: m, error: null };
    } catch (h) {
      return { data: null, error: h };
    }
  }
}), Zo = (r, e) => ({
  loginWithEmailPassword: async (a, o) => {
    var l;
    try {
      const { data: u, error: c } = await r.auth.signInWithPassword({
        email: a,
        password: o
      });
      if (c)
        throw c;
      const { data: h, error: m } = await r.from("projects").select("user_id").eq("id", e).single();
      return m ? (await r.auth.signOut(), {
        data: null,
        error: "Project not found"
      }) : h.user_id !== ((l = u.user) == null ? void 0 : l.id) ? (await r.auth.signOut(), {
        data: null,
        error: "You are not authorized for this project"
      }) : { data: u, error: null };
    } catch (u) {
      return { data: null, error: u };
    }
  },
  logout: async () => {
    try {
      const { error: a } = await r.auth.signOut();
      if (a)
        throw a;
      return { error: null };
    } catch (a) {
      return { error: a };
    }
  },
  getCurrentSession: async () => {
    try {
      const { data: a, error: o } = await r.auth.getSession();
      if (o)
        throw o;
      return { data: a, error: null };
    } catch (a) {
      return { data: null, error: a };
    }
  },
  getCurrentUser: async () => {
    try {
      const { data: a, error: o } = await r.auth.getUser();
      if (o)
        throw o;
      return { data: a.user, error: null };
    } catch (a) {
      return { data: null, error: a };
    }
  }
}), el = (r, e) => ({
  getGalleryItems: async () => {
    try {
      const { data: l, error: u } = await r.from("gallery_items").select("*").eq("project_id", e).order("created_at", { ascending: !1 });
      if (u)
        throw u;
      return { data: l, error: null };
    } catch (l) {
      return { data: null, error: l };
    }
  },
  getFeaturedGalleryItems: async () => {
    try {
      const { data: l, error: u } = await r.from("gallery_items").select("*").eq("project_id", e).eq("is_featured", !0).order("created_at", { ascending: !1 });
      if (u)
        throw u;
      return { data: l, error: null };
    } catch (l) {
      return { data: null, error: l };
    }
  },
  getGalleryItemsByCategory: async (l) => {
    try {
      const { data: u, error: c } = await r.from("gallery_items").select("*").eq("project_id", e).eq("category", l).order("created_at", { ascending: !1 });
      if (c)
        throw c;
      return { data: u, error: null };
    } catch (u) {
      return { data: null, error: u };
    }
  },
  createGalleryItem: async (l) => {
    try {
      const u = await ue(r, e);
      if (!u.isAuthorized)
        return { data: null, error: u.error };
      const { data: c, error: h } = await r.from("gallery_items").insert({ ...l, project_id: e }).select().single();
      if (h)
        throw h;
      return { data: c, error: null };
    } catch (u) {
      return { data: null, error: u };
    }
  },
  updateGalleryItem: async (l, u) => {
    try {
      const c = await ue(r, e);
      if (!c.isAuthorized)
        return { data: null, error: c.error };
      const { data: h, error: m } = await r.from("gallery_items").select("project_id").eq("id", l).eq("project_id", e).single();
      if (m || !h)
        return { data: null, error: "Item not found or not authorized to modify" };
      const { data: p, error: y } = await r.from("gallery_items").update(u).eq("id", l).eq("project_id", e).select().single();
      if (y)
        throw y;
      return { data: p, error: null };
    } catch (c) {
      return { data: null, error: c };
    }
  },
  deleteGalleryItem: async (l) => {
    try {
      const u = await ue(r, e);
      if (!u.isAuthorized)
        return { data: null, error: u.error };
      const { data: c, error: h } = await r.from("gallery_items").delete().eq("id", l).eq("project_id", e).select().single();
      if (h)
        throw h;
      return { data: c, error: null };
    } catch (u) {
      return { data: null, error: u };
    }
  }
}), tl = (r, e) => ({
  getProducts: async () => {
    try {
      const { data: l, error: u } = await r.from("products").select("*").eq("project_id", e).eq("is_active", !0).order("name", { ascending: !0 });
      if (u)
        throw u;
      return { data: l, error: null };
    } catch (l) {
      return { data: null, error: l };
    }
  },
  getProductById: async (l) => {
    try {
      const { data: u, error: c } = await r.from("products").select("*").eq("project_id", e).eq("id", l).eq("is_active", !0).single();
      if (c)
        throw c;
      return { data: u, error: null };
    } catch (u) {
      return { data: null, error: u };
    }
  },
  getAllProducts: async () => {
    try {
      const l = await ue(r, e);
      if (!l.isAuthorized)
        return { data: null, error: l.error };
      const { data: u, error: c } = await r.from("products").select("*").eq("project_id", e).order("name", { ascending: !0 });
      if (c)
        throw c;
      return { data: u, error: null };
    } catch (l) {
      return { data: null, error: l };
    }
  },
  createProduct: async (l) => {
    try {
      const u = await ue(r, e);
      if (!u.isAuthorized)
        return { data: null, error: u.error };
      const { data: c, error: h } = await r.from("products").insert({ ...l, project_id: e }).select().single();
      if (h)
        throw h;
      return { data: c, error: null };
    } catch (u) {
      return { data: null, error: u };
    }
  },
  updateProduct: async (l, u) => {
    try {
      const c = await ue(r, e);
      if (!c.isAuthorized)
        return { data: null, error: c.error };
      const { data: h, error: m } = await r.from("products").update(u).eq("id", l).eq("project_id", e).select().single();
      if (m)
        throw m;
      return { data: h, error: null };
    } catch (c) {
      return { data: null, error: c };
    }
  },
  deleteProduct: async (l) => {
    try {
      const u = await ue(r, e);
      if (!u.isAuthorized)
        return { data: null, error: u.error };
      const { data: c, error: h } = await r.from("products").delete().eq("id", l).eq("project_id", e).select().single();
      if (h)
        throw h;
      return { data: c, error: null };
    } catch (u) {
      return { data: null, error: u };
    }
  }
}), rl = (r, e) => ({
  getTestimonials: async () => {
    try {
      const { data: o, error: l } = await r.from("testimonials").select("*").eq("project_id", e).order("created_at", { ascending: !1 });
      if (l)
        throw l;
      return { data: o, error: null };
    } catch (o) {
      return { data: null, error: o };
    }
  },
  getFeaturedTestimonials: async () => {
    try {
      const { data: o, error: l } = await r.from("testimonials").select("*").eq("project_id", e).eq("is_featured", !0).order("rating", { ascending: !1 });
      if (l)
        throw l;
      return { data: o, error: null };
    } catch (o) {
      return { data: null, error: o };
    }
  },
  createTestimonial: async (o) => {
    try {
      const l = await ue(r, e);
      if (!l.isAuthorized)
        return { data: null, error: l.error };
      const { data: u, error: c } = await r.from("testimonials").insert({ ...o, project_id: e }).select().single();
      if (c)
        throw c;
      return { data: u, error: null };
    } catch (l) {
      return { data: null, error: l };
    }
  },
  updateTestimonial: async (o, l) => {
    try {
      const u = await ue(r, e);
      if (!u.isAuthorized)
        return { data: null, error: u.error };
      const { data: c, error: h } = await r.from("testimonials").update(l).eq("id", o).eq("project_id", e).select().single();
      if (h)
        throw h;
      return { data: c, error: null };
    } catch (u) {
      return { data: null, error: u };
    }
  },
  deleteTestimonial: async (o) => {
    try {
      const l = await ue(r, e);
      if (!l.isAuthorized)
        return { data: null, error: l.error };
      const { data: u, error: c } = await r.from("testimonials").delete().eq("id", o).eq("project_id", e).select().single();
      if (c)
        throw c;
      return { data: u, error: null };
    } catch (l) {
      return { data: null, error: l };
    }
  }
}), sl = (r) => {
  let e;
  return r ? e = r : typeof fetch > "u" ? e = (...t) => Promise.resolve().then(() => Pt).then(({ default: s }) => s(...t)) : e = fetch, (...t) => e(...t);
};
class zs extends Error {
  constructor(e, t = "FunctionsError", s) {
    super(e), this.name = t, this.context = s;
  }
}
class nl extends zs {
  constructor(e) {
    super("Failed to send a request to the Edge Function", "FunctionsFetchError", e);
  }
}
class il extends zs {
  constructor(e) {
    super("Relay Error invoking the Edge Function", "FunctionsRelayError", e);
  }
}
class al extends zs {
  constructor(e) {
    super("Edge Function returned a non-2xx status code", "FunctionsHttpError", e);
  }
}
var us;
(function(r) {
  r.Any = "any", r.ApNortheast1 = "ap-northeast-1", r.ApNortheast2 = "ap-northeast-2", r.ApSouth1 = "ap-south-1", r.ApSoutheast1 = "ap-southeast-1", r.ApSoutheast2 = "ap-southeast-2", r.CaCentral1 = "ca-central-1", r.EuCentral1 = "eu-central-1", r.EuWest1 = "eu-west-1", r.EuWest2 = "eu-west-2", r.EuWest3 = "eu-west-3", r.SaEast1 = "sa-east-1", r.UsEast1 = "us-east-1", r.UsWest1 = "us-west-1", r.UsWest2 = "us-west-2";
})(us || (us = {}));
var ol = function(r, e, t, s) {
  function n(i) {
    return i instanceof t ? i : new t(function(a) {
      a(i);
    });
  }
  return new (t || (t = Promise))(function(i, a) {
    function o(c) {
      try {
        u(s.next(c));
      } catch (h) {
        a(h);
      }
    }
    function l(c) {
      try {
        u(s.throw(c));
      } catch (h) {
        a(h);
      }
    }
    function u(c) {
      c.done ? i(c.value) : n(c.value).then(o, l);
    }
    u((s = s.apply(r, e || [])).next());
  });
};
class ll {
  constructor(e, { headers: t = {}, customFetch: s, region: n = us.Any } = {}) {
    this.url = e, this.headers = t, this.region = n, this.fetch = sl(s);
  }
  /**
   * Updates the authorization header
   * @param token - the new jwt token sent in the authorisation header
   */
  setAuth(e) {
    this.headers.Authorization = `Bearer ${e}`;
  }
  /**
   * Invokes a function
   * @param functionName - The name of the Function to invoke.
   * @param options - Options for invoking the Function.
   */
  invoke(e, t = {}) {
    var s;
    return ol(this, void 0, void 0, function* () {
      try {
        const { headers: n, method: i, body: a } = t;
        let o = {}, { region: l } = t;
        l || (l = this.region), l && l !== "any" && (o["x-region"] = l);
        let u;
        a && (n && !Object.prototype.hasOwnProperty.call(n, "Content-Type") || !n) && (typeof Blob < "u" && a instanceof Blob || a instanceof ArrayBuffer ? (o["Content-Type"] = "application/octet-stream", u = a) : typeof a == "string" ? (o["Content-Type"] = "text/plain", u = a) : typeof FormData < "u" && a instanceof FormData ? u = a : (o["Content-Type"] = "application/json", u = JSON.stringify(a)));
        const c = yield this.fetch(`${this.url}/${e}`, {
          method: i || "POST",
          // headers priority is (high to low):
          // 1. invoke-level headers
          // 2. client-level headers
          // 3. default Content-Type header
          headers: Object.assign(Object.assign(Object.assign({}, o), this.headers), n),
          body: u
        }).catch((y) => {
          throw new nl(y);
        }), h = c.headers.get("x-relay-error");
        if (h && h === "true")
          throw new il(c);
        if (!c.ok)
          throw new al(c);
        let m = ((s = c.headers.get("Content-Type")) !== null && s !== void 0 ? s : "text/plain").split(";")[0].trim(), p;
        return m === "application/json" ? p = yield c.json() : m === "application/octet-stream" ? p = yield c.blob() : m === "text/event-stream" ? p = c : m === "multipart/form-data" ? p = yield c.formData() : p = yield c.text(), { data: p, error: null };
      } catch (n) {
        return { data: null, error: n };
      }
    });
  }
}
var ne = {}, dt = {}, ht = {}, ft = {}, mt = {}, pt = {}, cl = function() {
  if (typeof self < "u")
    return self;
  if (typeof window < "u")
    return window;
  if (typeof global < "u")
    return global;
  throw new Error("unable to locate global object");
}, Nt = cl();
const ul = Nt.fetch, _i = Nt.fetch.bind(Nt), ji = Nt.Headers, dl = Nt.Request, hl = Nt.Response, Pt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Headers: ji,
  Request: dl,
  Response: hl,
  default: _i,
  fetch: ul
}, Symbol.toStringTag, { value: "Module" })), fl = /* @__PURE__ */ Ia(Pt);
var fr = {}, _n;
function ki() {
  if (_n) return fr;
  _n = 1, Object.defineProperty(fr, "__esModule", { value: !0 });
  class r extends Error {
    constructor(t) {
      super(t.message), this.name = "PostgrestError", this.details = t.details, this.hint = t.hint, this.code = t.code;
    }
  }
  return fr.default = r, fr;
}
var jn;
function Ei() {
  if (jn) return pt;
  jn = 1;
  var r = pt && pt.__importDefault || function(n) {
    return n && n.__esModule ? n : { default: n };
  };
  Object.defineProperty(pt, "__esModule", { value: !0 });
  const e = r(fl), t = r(ki());
  class s {
    constructor(i) {
      this.shouldThrowOnError = !1, this.method = i.method, this.url = i.url, this.headers = i.headers, this.schema = i.schema, this.body = i.body, this.shouldThrowOnError = i.shouldThrowOnError, this.signal = i.signal, this.isMaybeSingle = i.isMaybeSingle, i.fetch ? this.fetch = i.fetch : typeof fetch > "u" ? this.fetch = e.default : this.fetch = fetch;
    }
    /**
     * If there's an error with the query, throwOnError will reject the promise by
     * throwing the error instead of returning it as part of a successful response.
     *
     * {@link https://github.com/supabase/supabase-js/issues/92}
     */
    throwOnError() {
      return this.shouldThrowOnError = !0, this;
    }
    /**
     * Set an HTTP header for the request.
     */
    setHeader(i, a) {
      return this.headers = Object.assign({}, this.headers), this.headers[i] = a, this;
    }
    then(i, a) {
      this.schema === void 0 || (["GET", "HEAD"].includes(this.method) ? this.headers["Accept-Profile"] = this.schema : this.headers["Content-Profile"] = this.schema), this.method !== "GET" && this.method !== "HEAD" && (this.headers["Content-Type"] = "application/json");
      const o = this.fetch;
      let l = o(this.url.toString(), {
        method: this.method,
        headers: this.headers,
        body: JSON.stringify(this.body),
        signal: this.signal
      }).then(async (u) => {
        var c, h, m;
        let p = null, y = null, x = null, g = u.status, k = u.statusText;
        if (u.ok) {
          if (this.method !== "HEAD") {
            const L = await u.text();
            L === "" || (this.headers.Accept === "text/csv" || this.headers.Accept && this.headers.Accept.includes("application/vnd.pgrst.plan+text") ? y = L : y = JSON.parse(L));
          }
          const j = (c = this.headers.Prefer) === null || c === void 0 ? void 0 : c.match(/count=(exact|planned|estimated)/), R = (h = u.headers.get("content-range")) === null || h === void 0 ? void 0 : h.split("/");
          j && R && R.length > 1 && (x = parseInt(R[1])), this.isMaybeSingle && this.method === "GET" && Array.isArray(y) && (y.length > 1 ? (p = {
            // https://github.com/PostgREST/postgrest/blob/a867d79c42419af16c18c3fb019eba8df992626f/src/PostgREST/Error.hs#L553
            code: "PGRST116",
            details: `Results contain ${y.length} rows, application/vnd.pgrst.object+json requires 1 row`,
            hint: null,
            message: "JSON object requested, multiple (or no) rows returned"
          }, y = null, x = null, g = 406, k = "Not Acceptable") : y.length === 1 ? y = y[0] : y = null);
        } else {
          const j = await u.text();
          try {
            p = JSON.parse(j), Array.isArray(p) && u.status === 404 && (y = [], p = null, g = 200, k = "OK");
          } catch {
            u.status === 404 && j === "" ? (g = 204, k = "No Content") : p = {
              message: j
            };
          }
          if (p && this.isMaybeSingle && (!((m = p == null ? void 0 : p.details) === null || m === void 0) && m.includes("0 rows")) && (p = null, g = 200, k = "OK"), p && this.shouldThrowOnError)
            throw new t.default(p);
        }
        return {
          error: p,
          data: y,
          count: x,
          status: g,
          statusText: k
        };
      });
      return this.shouldThrowOnError || (l = l.catch((u) => {
        var c, h, m;
        return {
          error: {
            message: `${(c = u == null ? void 0 : u.name) !== null && c !== void 0 ? c : "FetchError"}: ${u == null ? void 0 : u.message}`,
            details: `${(h = u == null ? void 0 : u.stack) !== null && h !== void 0 ? h : ""}`,
            hint: "",
            code: `${(m = u == null ? void 0 : u.code) !== null && m !== void 0 ? m : ""}`
          },
          data: null,
          count: null,
          status: 0,
          statusText: ""
        };
      })), l.then(i, a);
    }
    /**
     * Override the type of the returned `data`.
     *
     * @typeParam NewResult - The new result type to override with
     * @deprecated Use overrideTypes<yourType, { merge: false }>() method at the end of your call chain instead
     */
    returns() {
      return this;
    }
    /**
     * Override the type of the returned `data` field in the response.
     *
     * @typeParam NewResult - The new type to cast the response data to
     * @typeParam Options - Optional type configuration (defaults to { merge: true })
     * @typeParam Options.merge - When true, merges the new type with existing return type. When false, replaces the existing types entirely (defaults to true)
     * @example
     * ```typescript
     * // Merge with existing types (default behavior)
     * const query = supabase
     *   .from('users')
     *   .select()
     *   .overrideTypes<{ custom_field: string }>()
     *
     * // Replace existing types completely
     * const replaceQuery = supabase
     *   .from('users')
     *   .select()
     *   .overrideTypes<{ id: number; name: string }, { merge: false }>()
     * ```
     * @returns A PostgrestBuilder instance with the new type
     */
    overrideTypes() {
      return this;
    }
  }
  return pt.default = s, pt;
}
var kn;
function Ci() {
  if (kn) return mt;
  kn = 1;
  var r = mt && mt.__importDefault || function(s) {
    return s && s.__esModule ? s : { default: s };
  };
  Object.defineProperty(mt, "__esModule", { value: !0 });
  const e = r(Ei());
  class t extends e.default {
    /**
     * Perform a SELECT on the query result.
     *
     * By default, `.insert()`, `.update()`, `.upsert()`, and `.delete()` do not
     * return modified rows. By calling this method, modified rows are returned in
     * `data`.
     *
     * @param columns - The columns to retrieve, separated by commas
     */
    select(n) {
      let i = !1;
      const a = (n ?? "*").split("").map((o) => /\s/.test(o) && !i ? "" : (o === '"' && (i = !i), o)).join("");
      return this.url.searchParams.set("select", a), this.headers.Prefer && (this.headers.Prefer += ","), this.headers.Prefer += "return=representation", this;
    }
    /**
     * Order the query result by `column`.
     *
     * You can call this method multiple times to order by multiple columns.
     *
     * You can order referenced tables, but it only affects the ordering of the
     * parent table if you use `!inner` in the query.
     *
     * @param column - The column to order by
     * @param options - Named parameters
     * @param options.ascending - If `true`, the result will be in ascending order
     * @param options.nullsFirst - If `true`, `null`s appear first. If `false`,
     * `null`s appear last.
     * @param options.referencedTable - Set this to order a referenced table by
     * its columns
     * @param options.foreignTable - Deprecated, use `options.referencedTable`
     * instead
     */
    order(n, { ascending: i = !0, nullsFirst: a, foreignTable: o, referencedTable: l = o } = {}) {
      const u = l ? `${l}.order` : "order", c = this.url.searchParams.get(u);
      return this.url.searchParams.set(u, `${c ? `${c},` : ""}${n}.${i ? "asc" : "desc"}${a === void 0 ? "" : a ? ".nullsfirst" : ".nullslast"}`), this;
    }
    /**
     * Limit the query result by `count`.
     *
     * @param count - The maximum number of rows to return
     * @param options - Named parameters
     * @param options.referencedTable - Set this to limit rows of referenced
     * tables instead of the parent table
     * @param options.foreignTable - Deprecated, use `options.referencedTable`
     * instead
     */
    limit(n, { foreignTable: i, referencedTable: a = i } = {}) {
      const o = typeof a > "u" ? "limit" : `${a}.limit`;
      return this.url.searchParams.set(o, `${n}`), this;
    }
    /**
     * Limit the query result by starting at an offset `from` and ending at the offset `to`.
     * Only records within this range are returned.
     * This respects the query order and if there is no order clause the range could behave unexpectedly.
     * The `from` and `to` values are 0-based and inclusive: `range(1, 3)` will include the second, third
     * and fourth rows of the query.
     *
     * @param from - The starting index from which to limit the result
     * @param to - The last index to which to limit the result
     * @param options - Named parameters
     * @param options.referencedTable - Set this to limit rows of referenced
     * tables instead of the parent table
     * @param options.foreignTable - Deprecated, use `options.referencedTable`
     * instead
     */
    range(n, i, { foreignTable: a, referencedTable: o = a } = {}) {
      const l = typeof o > "u" ? "offset" : `${o}.offset`, u = typeof o > "u" ? "limit" : `${o}.limit`;
      return this.url.searchParams.set(l, `${n}`), this.url.searchParams.set(u, `${i - n + 1}`), this;
    }
    /**
     * Set the AbortSignal for the fetch request.
     *
     * @param signal - The AbortSignal to use for the fetch request
     */
    abortSignal(n) {
      return this.signal = n, this;
    }
    /**
     * Return `data` as a single object instead of an array of objects.
     *
     * Query result must be one row (e.g. using `.limit(1)`), otherwise this
     * returns an error.
     */
    single() {
      return this.headers.Accept = "application/vnd.pgrst.object+json", this;
    }
    /**
     * Return `data` as a single object instead of an array of objects.
     *
     * Query result must be zero or one row (e.g. using `.limit(1)`), otherwise
     * this returns an error.
     */
    maybeSingle() {
      return this.method === "GET" ? this.headers.Accept = "application/json" : this.headers.Accept = "application/vnd.pgrst.object+json", this.isMaybeSingle = !0, this;
    }
    /**
     * Return `data` as a string in CSV format.
     */
    csv() {
      return this.headers.Accept = "text/csv", this;
    }
    /**
     * Return `data` as an object in [GeoJSON](https://geojson.org) format.
     */
    geojson() {
      return this.headers.Accept = "application/geo+json", this;
    }
    /**
     * Return `data` as the EXPLAIN plan for the query.
     *
     * You need to enable the
     * [db_plan_enabled](https://supabase.com/docs/guides/database/debugging-performance#enabling-explain)
     * setting before using this method.
     *
     * @param options - Named parameters
     *
     * @param options.analyze - If `true`, the query will be executed and the
     * actual run time will be returned
     *
     * @param options.verbose - If `true`, the query identifier will be returned
     * and `data` will include the output columns of the query
     *
     * @param options.settings - If `true`, include information on configuration
     * parameters that affect query planning
     *
     * @param options.buffers - If `true`, include information on buffer usage
     *
     * @param options.wal - If `true`, include information on WAL record generation
     *
     * @param options.format - The format of the output, can be `"text"` (default)
     * or `"json"`
     */
    explain({ analyze: n = !1, verbose: i = !1, settings: a = !1, buffers: o = !1, wal: l = !1, format: u = "text" } = {}) {
      var c;
      const h = [
        n ? "analyze" : null,
        i ? "verbose" : null,
        a ? "settings" : null,
        o ? "buffers" : null,
        l ? "wal" : null
      ].filter(Boolean).join("|"), m = (c = this.headers.Accept) !== null && c !== void 0 ? c : "application/json";
      return this.headers.Accept = `application/vnd.pgrst.plan+${u}; for="${m}"; options=${h};`, u === "json" ? this : this;
    }
    /**
     * Rollback the query.
     *
     * `data` will still be returned, but the query is not committed.
     */
    rollback() {
      var n;
      return ((n = this.headers.Prefer) !== null && n !== void 0 ? n : "").trim().length > 0 ? this.headers.Prefer += ",tx=rollback" : this.headers.Prefer = "tx=rollback", this;
    }
    /**
     * Override the type of the returned `data`.
     *
     * @typeParam NewResult - The new result type to override with
     * @deprecated Use overrideTypes<yourType, { merge: false }>() method at the end of your call chain instead
     */
    returns() {
      return this;
    }
  }
  return mt.default = t, mt;
}
var En;
function Vs() {
  if (En) return ft;
  En = 1;
  var r = ft && ft.__importDefault || function(s) {
    return s && s.__esModule ? s : { default: s };
  };
  Object.defineProperty(ft, "__esModule", { value: !0 });
  const e = r(Ci());
  class t extends e.default {
    /**
     * Match only rows where `column` is equal to `value`.
     *
     * To check if the value of `column` is NULL, you should use `.is()` instead.
     *
     * @param column - The column to filter on
     * @param value - The value to filter with
     */
    eq(n, i) {
      return this.url.searchParams.append(n, `eq.${i}`), this;
    }
    /**
     * Match only rows where `column` is not equal to `value`.
     *
     * @param column - The column to filter on
     * @param value - The value to filter with
     */
    neq(n, i) {
      return this.url.searchParams.append(n, `neq.${i}`), this;
    }
    /**
     * Match only rows where `column` is greater than `value`.
     *
     * @param column - The column to filter on
     * @param value - The value to filter with
     */
    gt(n, i) {
      return this.url.searchParams.append(n, `gt.${i}`), this;
    }
    /**
     * Match only rows where `column` is greater than or equal to `value`.
     *
     * @param column - The column to filter on
     * @param value - The value to filter with
     */
    gte(n, i) {
      return this.url.searchParams.append(n, `gte.${i}`), this;
    }
    /**
     * Match only rows where `column` is less than `value`.
     *
     * @param column - The column to filter on
     * @param value - The value to filter with
     */
    lt(n, i) {
      return this.url.searchParams.append(n, `lt.${i}`), this;
    }
    /**
     * Match only rows where `column` is less than or equal to `value`.
     *
     * @param column - The column to filter on
     * @param value - The value to filter with
     */
    lte(n, i) {
      return this.url.searchParams.append(n, `lte.${i}`), this;
    }
    /**
     * Match only rows where `column` matches `pattern` case-sensitively.
     *
     * @param column - The column to filter on
     * @param pattern - The pattern to match with
     */
    like(n, i) {
      return this.url.searchParams.append(n, `like.${i}`), this;
    }
    /**
     * Match only rows where `column` matches all of `patterns` case-sensitively.
     *
     * @param column - The column to filter on
     * @param patterns - The patterns to match with
     */
    likeAllOf(n, i) {
      return this.url.searchParams.append(n, `like(all).{${i.join(",")}}`), this;
    }
    /**
     * Match only rows where `column` matches any of `patterns` case-sensitively.
     *
     * @param column - The column to filter on
     * @param patterns - The patterns to match with
     */
    likeAnyOf(n, i) {
      return this.url.searchParams.append(n, `like(any).{${i.join(",")}}`), this;
    }
    /**
     * Match only rows where `column` matches `pattern` case-insensitively.
     *
     * @param column - The column to filter on
     * @param pattern - The pattern to match with
     */
    ilike(n, i) {
      return this.url.searchParams.append(n, `ilike.${i}`), this;
    }
    /**
     * Match only rows where `column` matches all of `patterns` case-insensitively.
     *
     * @param column - The column to filter on
     * @param patterns - The patterns to match with
     */
    ilikeAllOf(n, i) {
      return this.url.searchParams.append(n, `ilike(all).{${i.join(",")}}`), this;
    }
    /**
     * Match only rows where `column` matches any of `patterns` case-insensitively.
     *
     * @param column - The column to filter on
     * @param patterns - The patterns to match with
     */
    ilikeAnyOf(n, i) {
      return this.url.searchParams.append(n, `ilike(any).{${i.join(",")}}`), this;
    }
    /**
     * Match only rows where `column` IS `value`.
     *
     * For non-boolean columns, this is only relevant for checking if the value of
     * `column` is NULL by setting `value` to `null`.
     *
     * For boolean columns, you can also set `value` to `true` or `false` and it
     * will behave the same way as `.eq()`.
     *
     * @param column - The column to filter on
     * @param value - The value to filter with
     */
    is(n, i) {
      return this.url.searchParams.append(n, `is.${i}`), this;
    }
    /**
     * Match only rows where `column` is included in the `values` array.
     *
     * @param column - The column to filter on
     * @param values - The values array to filter with
     */
    in(n, i) {
      const a = Array.from(new Set(i)).map((o) => typeof o == "string" && new RegExp("[,()]").test(o) ? `"${o}"` : `${o}`).join(",");
      return this.url.searchParams.append(n, `in.(${a})`), this;
    }
    /**
     * Only relevant for jsonb, array, and range columns. Match only rows where
     * `column` contains every element appearing in `value`.
     *
     * @param column - The jsonb, array, or range column to filter on
     * @param value - The jsonb, array, or range value to filter with
     */
    contains(n, i) {
      return typeof i == "string" ? this.url.searchParams.append(n, `cs.${i}`) : Array.isArray(i) ? this.url.searchParams.append(n, `cs.{${i.join(",")}}`) : this.url.searchParams.append(n, `cs.${JSON.stringify(i)}`), this;
    }
    /**
     * Only relevant for jsonb, array, and range columns. Match only rows where
     * every element appearing in `column` is contained by `value`.
     *
     * @param column - The jsonb, array, or range column to filter on
     * @param value - The jsonb, array, or range value to filter with
     */
    containedBy(n, i) {
      return typeof i == "string" ? this.url.searchParams.append(n, `cd.${i}`) : Array.isArray(i) ? this.url.searchParams.append(n, `cd.{${i.join(",")}}`) : this.url.searchParams.append(n, `cd.${JSON.stringify(i)}`), this;
    }
    /**
     * Only relevant for range columns. Match only rows where every element in
     * `column` is greater than any element in `range`.
     *
     * @param column - The range column to filter on
     * @param range - The range to filter with
     */
    rangeGt(n, i) {
      return this.url.searchParams.append(n, `sr.${i}`), this;
    }
    /**
     * Only relevant for range columns. Match only rows where every element in
     * `column` is either contained in `range` or greater than any element in
     * `range`.
     *
     * @param column - The range column to filter on
     * @param range - The range to filter with
     */
    rangeGte(n, i) {
      return this.url.searchParams.append(n, `nxl.${i}`), this;
    }
    /**
     * Only relevant for range columns. Match only rows where every element in
     * `column` is less than any element in `range`.
     *
     * @param column - The range column to filter on
     * @param range - The range to filter with
     */
    rangeLt(n, i) {
      return this.url.searchParams.append(n, `sl.${i}`), this;
    }
    /**
     * Only relevant for range columns. Match only rows where every element in
     * `column` is either contained in `range` or less than any element in
     * `range`.
     *
     * @param column - The range column to filter on
     * @param range - The range to filter with
     */
    rangeLte(n, i) {
      return this.url.searchParams.append(n, `nxr.${i}`), this;
    }
    /**
     * Only relevant for range columns. Match only rows where `column` is
     * mutually exclusive to `range` and there can be no element between the two
     * ranges.
     *
     * @param column - The range column to filter on
     * @param range - The range to filter with
     */
    rangeAdjacent(n, i) {
      return this.url.searchParams.append(n, `adj.${i}`), this;
    }
    /**
     * Only relevant for array and range columns. Match only rows where
     * `column` and `value` have an element in common.
     *
     * @param column - The array or range column to filter on
     * @param value - The array or range value to filter with
     */
    overlaps(n, i) {
      return typeof i == "string" ? this.url.searchParams.append(n, `ov.${i}`) : this.url.searchParams.append(n, `ov.{${i.join(",")}}`), this;
    }
    /**
     * Only relevant for text and tsvector columns. Match only rows where
     * `column` matches the query string in `query`.
     *
     * @param column - The text or tsvector column to filter on
     * @param query - The query text to match with
     * @param options - Named parameters
     * @param options.config - The text search configuration to use
     * @param options.type - Change how the `query` text is interpreted
     */
    textSearch(n, i, { config: a, type: o } = {}) {
      let l = "";
      o === "plain" ? l = "pl" : o === "phrase" ? l = "ph" : o === "websearch" && (l = "w");
      const u = a === void 0 ? "" : `(${a})`;
      return this.url.searchParams.append(n, `${l}fts${u}.${i}`), this;
    }
    /**
     * Match only rows where each column in `query` keys is equal to its
     * associated value. Shorthand for multiple `.eq()`s.
     *
     * @param query - The object to filter with, with column names as keys mapped
     * to their filter values
     */
    match(n) {
      return Object.entries(n).forEach(([i, a]) => {
        this.url.searchParams.append(i, `eq.${a}`);
      }), this;
    }
    /**
     * Match only rows which doesn't satisfy the filter.
     *
     * Unlike most filters, `opearator` and `value` are used as-is and need to
     * follow [PostgREST
     * syntax](https://postgrest.org/en/stable/api.html#operators). You also need
     * to make sure they are properly sanitized.
     *
     * @param column - The column to filter on
     * @param operator - The operator to be negated to filter with, following
     * PostgREST syntax
     * @param value - The value to filter with, following PostgREST syntax
     */
    not(n, i, a) {
      return this.url.searchParams.append(n, `not.${i}.${a}`), this;
    }
    /**
     * Match only rows which satisfy at least one of the filters.
     *
     * Unlike most filters, `filters` is used as-is and needs to follow [PostgREST
     * syntax](https://postgrest.org/en/stable/api.html#operators). You also need
     * to make sure it's properly sanitized.
     *
     * It's currently not possible to do an `.or()` filter across multiple tables.
     *
     * @param filters - The filters to use, following PostgREST syntax
     * @param options - Named parameters
     * @param options.referencedTable - Set this to filter on referenced tables
     * instead of the parent table
     * @param options.foreignTable - Deprecated, use `referencedTable` instead
     */
    or(n, { foreignTable: i, referencedTable: a = i } = {}) {
      const o = a ? `${a}.or` : "or";
      return this.url.searchParams.append(o, `(${n})`), this;
    }
    /**
     * Match only rows which satisfy the filter. This is an escape hatch - you
     * should use the specific filter methods wherever possible.
     *
     * Unlike most filters, `opearator` and `value` are used as-is and need to
     * follow [PostgREST
     * syntax](https://postgrest.org/en/stable/api.html#operators). You also need
     * to make sure they are properly sanitized.
     *
     * @param column - The column to filter on
     * @param operator - The operator to filter with, following PostgREST syntax
     * @param value - The value to filter with, following PostgREST syntax
     */
    filter(n, i, a) {
      return this.url.searchParams.append(n, `${i}.${a}`), this;
    }
  }
  return ft.default = t, ft;
}
var Cn;
function Si() {
  if (Cn) return ht;
  Cn = 1;
  var r = ht && ht.__importDefault || function(s) {
    return s && s.__esModule ? s : { default: s };
  };
  Object.defineProperty(ht, "__esModule", { value: !0 });
  const e = r(Vs());
  class t {
    constructor(n, { headers: i = {}, schema: a, fetch: o }) {
      this.url = n, this.headers = i, this.schema = a, this.fetch = o;
    }
    /**
     * Perform a SELECT query on the table or view.
     *
     * @param columns - The columns to retrieve, separated by commas. Columns can be renamed when returned with `customName:columnName`
     *
     * @param options - Named parameters
     *
     * @param options.head - When set to `true`, `data` will not be returned.
     * Useful if you only need the count.
     *
     * @param options.count - Count algorithm to use to count rows in the table or view.
     *
     * `"exact"`: Exact but slow count algorithm. Performs a `COUNT(*)` under the
     * hood.
     *
     * `"planned"`: Approximated but fast count algorithm. Uses the Postgres
     * statistics under the hood.
     *
     * `"estimated"`: Uses exact count for low numbers and planned count for high
     * numbers.
     */
    select(n, { head: i = !1, count: a } = {}) {
      const o = i ? "HEAD" : "GET";
      let l = !1;
      const u = (n ?? "*").split("").map((c) => /\s/.test(c) && !l ? "" : (c === '"' && (l = !l), c)).join("");
      return this.url.searchParams.set("select", u), a && (this.headers.Prefer = `count=${a}`), new e.default({
        method: o,
        url: this.url,
        headers: this.headers,
        schema: this.schema,
        fetch: this.fetch,
        allowEmpty: !1
      });
    }
    /**
     * Perform an INSERT into the table or view.
     *
     * By default, inserted rows are not returned. To return it, chain the call
     * with `.select()`.
     *
     * @param values - The values to insert. Pass an object to insert a single row
     * or an array to insert multiple rows.
     *
     * @param options - Named parameters
     *
     * @param options.count - Count algorithm to use to count inserted rows.
     *
     * `"exact"`: Exact but slow count algorithm. Performs a `COUNT(*)` under the
     * hood.
     *
     * `"planned"`: Approximated but fast count algorithm. Uses the Postgres
     * statistics under the hood.
     *
     * `"estimated"`: Uses exact count for low numbers and planned count for high
     * numbers.
     *
     * @param options.defaultToNull - Make missing fields default to `null`.
     * Otherwise, use the default value for the column. Only applies for bulk
     * inserts.
     */
    insert(n, { count: i, defaultToNull: a = !0 } = {}) {
      const o = "POST", l = [];
      if (this.headers.Prefer && l.push(this.headers.Prefer), i && l.push(`count=${i}`), a || l.push("missing=default"), this.headers.Prefer = l.join(","), Array.isArray(n)) {
        const u = n.reduce((c, h) => c.concat(Object.keys(h)), []);
        if (u.length > 0) {
          const c = [...new Set(u)].map((h) => `"${h}"`);
          this.url.searchParams.set("columns", c.join(","));
        }
      }
      return new e.default({
        method: o,
        url: this.url,
        headers: this.headers,
        schema: this.schema,
        body: n,
        fetch: this.fetch,
        allowEmpty: !1
      });
    }
    /**
     * Perform an UPSERT on the table or view. Depending on the column(s) passed
     * to `onConflict`, `.upsert()` allows you to perform the equivalent of
     * `.insert()` if a row with the corresponding `onConflict` columns doesn't
     * exist, or if it does exist, perform an alternative action depending on
     * `ignoreDuplicates`.
     *
     * By default, upserted rows are not returned. To return it, chain the call
     * with `.select()`.
     *
     * @param values - The values to upsert with. Pass an object to upsert a
     * single row or an array to upsert multiple rows.
     *
     * @param options - Named parameters
     *
     * @param options.onConflict - Comma-separated UNIQUE column(s) to specify how
     * duplicate rows are determined. Two rows are duplicates if all the
     * `onConflict` columns are equal.
     *
     * @param options.ignoreDuplicates - If `true`, duplicate rows are ignored. If
     * `false`, duplicate rows are merged with existing rows.
     *
     * @param options.count - Count algorithm to use to count upserted rows.
     *
     * `"exact"`: Exact but slow count algorithm. Performs a `COUNT(*)` under the
     * hood.
     *
     * `"planned"`: Approximated but fast count algorithm. Uses the Postgres
     * statistics under the hood.
     *
     * `"estimated"`: Uses exact count for low numbers and planned count for high
     * numbers.
     *
     * @param options.defaultToNull - Make missing fields default to `null`.
     * Otherwise, use the default value for the column. This only applies when
     * inserting new rows, not when merging with existing rows under
     * `ignoreDuplicates: false`. This also only applies when doing bulk upserts.
     */
    upsert(n, { onConflict: i, ignoreDuplicates: a = !1, count: o, defaultToNull: l = !0 } = {}) {
      const u = "POST", c = [`resolution=${a ? "ignore" : "merge"}-duplicates`];
      if (i !== void 0 && this.url.searchParams.set("on_conflict", i), this.headers.Prefer && c.push(this.headers.Prefer), o && c.push(`count=${o}`), l || c.push("missing=default"), this.headers.Prefer = c.join(","), Array.isArray(n)) {
        const h = n.reduce((m, p) => m.concat(Object.keys(p)), []);
        if (h.length > 0) {
          const m = [...new Set(h)].map((p) => `"${p}"`);
          this.url.searchParams.set("columns", m.join(","));
        }
      }
      return new e.default({
        method: u,
        url: this.url,
        headers: this.headers,
        schema: this.schema,
        body: n,
        fetch: this.fetch,
        allowEmpty: !1
      });
    }
    /**
     * Perform an UPDATE on the table or view.
     *
     * By default, updated rows are not returned. To return it, chain the call
     * with `.select()` after filters.
     *
     * @param values - The values to update with
     *
     * @param options - Named parameters
     *
     * @param options.count - Count algorithm to use to count updated rows.
     *
     * `"exact"`: Exact but slow count algorithm. Performs a `COUNT(*)` under the
     * hood.
     *
     * `"planned"`: Approximated but fast count algorithm. Uses the Postgres
     * statistics under the hood.
     *
     * `"estimated"`: Uses exact count for low numbers and planned count for high
     * numbers.
     */
    update(n, { count: i } = {}) {
      const a = "PATCH", o = [];
      return this.headers.Prefer && o.push(this.headers.Prefer), i && o.push(`count=${i}`), this.headers.Prefer = o.join(","), new e.default({
        method: a,
        url: this.url,
        headers: this.headers,
        schema: this.schema,
        body: n,
        fetch: this.fetch,
        allowEmpty: !1
      });
    }
    /**
     * Perform a DELETE on the table or view.
     *
     * By default, deleted rows are not returned. To return it, chain the call
     * with `.select()` after filters.
     *
     * @param options - Named parameters
     *
     * @param options.count - Count algorithm to use to count deleted rows.
     *
     * `"exact"`: Exact but slow count algorithm. Performs a `COUNT(*)` under the
     * hood.
     *
     * `"planned"`: Approximated but fast count algorithm. Uses the Postgres
     * statistics under the hood.
     *
     * `"estimated"`: Uses exact count for low numbers and planned count for high
     * numbers.
     */
    delete({ count: n } = {}) {
      const i = "DELETE", a = [];
      return n && a.push(`count=${n}`), this.headers.Prefer && a.unshift(this.headers.Prefer), this.headers.Prefer = a.join(","), new e.default({
        method: i,
        url: this.url,
        headers: this.headers,
        schema: this.schema,
        fetch: this.fetch,
        allowEmpty: !1
      });
    }
  }
  return ht.default = t, ht;
}
var Ut = {}, Mt = {}, Sn;
function ml() {
  return Sn || (Sn = 1, Object.defineProperty(Mt, "__esModule", { value: !0 }), Mt.version = void 0, Mt.version = "0.0.0-automated"), Mt;
}
var Rn;
function pl() {
  if (Rn) return Ut;
  Rn = 1, Object.defineProperty(Ut, "__esModule", { value: !0 }), Ut.DEFAULT_HEADERS = void 0;
  const r = ml();
  return Ut.DEFAULT_HEADERS = { "X-Client-Info": `postgrest-js/${r.version}` }, Ut;
}
var Tn;
function gl() {
  if (Tn) return dt;
  Tn = 1;
  var r = dt && dt.__importDefault || function(i) {
    return i && i.__esModule ? i : { default: i };
  };
  Object.defineProperty(dt, "__esModule", { value: !0 });
  const e = r(Si()), t = r(Vs()), s = pl();
  class n {
    // TODO: Add back shouldThrowOnError once we figure out the typings
    /**
     * Creates a PostgREST client.
     *
     * @param url - URL of the PostgREST endpoint
     * @param options - Named parameters
     * @param options.headers - Custom headers
     * @param options.schema - Postgres schema to switch to
     * @param options.fetch - Custom fetch
     */
    constructor(a, { headers: o = {}, schema: l, fetch: u } = {}) {
      this.url = a, this.headers = Object.assign(Object.assign({}, s.DEFAULT_HEADERS), o), this.schemaName = l, this.fetch = u;
    }
    /**
     * Perform a query on a table or a view.
     *
     * @param relation - The table or view name to query
     */
    from(a) {
      const o = new URL(`${this.url}/${a}`);
      return new e.default(o, {
        headers: Object.assign({}, this.headers),
        schema: this.schemaName,
        fetch: this.fetch
      });
    }
    /**
     * Select a schema to query or perform an function (rpc) call.
     *
     * The schema needs to be on the list of exposed schemas inside Supabase.
     *
     * @param schema - The schema to query
     */
    schema(a) {
      return new n(this.url, {
        headers: this.headers,
        schema: a,
        fetch: this.fetch
      });
    }
    /**
     * Perform a function call.
     *
     * @param fn - The function name to call
     * @param args - The arguments to pass to the function call
     * @param options - Named parameters
     * @param options.head - When set to `true`, `data` will not be returned.
     * Useful if you only need the count.
     * @param options.get - When set to `true`, the function will be called with
     * read-only access mode.
     * @param options.count - Count algorithm to use to count rows returned by the
     * function. Only applicable for [set-returning
     * functions](https://www.postgresql.org/docs/current/functions-srf.html).
     *
     * `"exact"`: Exact but slow count algorithm. Performs a `COUNT(*)` under the
     * hood.
     *
     * `"planned"`: Approximated but fast count algorithm. Uses the Postgres
     * statistics under the hood.
     *
     * `"estimated"`: Uses exact count for low numbers and planned count for high
     * numbers.
     */
    rpc(a, o = {}, { head: l = !1, get: u = !1, count: c } = {}) {
      let h;
      const m = new URL(`${this.url}/rpc/${a}`);
      let p;
      l || u ? (h = l ? "HEAD" : "GET", Object.entries(o).filter(([x, g]) => g !== void 0).map(([x, g]) => [x, Array.isArray(g) ? `{${g.join(",")}}` : `${g}`]).forEach(([x, g]) => {
        m.searchParams.append(x, g);
      })) : (h = "POST", p = o);
      const y = Object.assign({}, this.headers);
      return c && (y.Prefer = `count=${c}`), new t.default({
        method: h,
        url: m,
        headers: y,
        schema: this.schemaName,
        body: p,
        fetch: this.fetch,
        allowEmpty: !1
      });
    }
  }
  return dt.default = n, dt;
}
var Nn;
function vl() {
  if (Nn) return ne;
  Nn = 1;
  var r = ne && ne.__importDefault || function(o) {
    return o && o.__esModule ? o : { default: o };
  };
  Object.defineProperty(ne, "__esModule", { value: !0 }), ne.PostgrestError = ne.PostgrestBuilder = ne.PostgrestTransformBuilder = ne.PostgrestFilterBuilder = ne.PostgrestQueryBuilder = ne.PostgrestClient = void 0;
  const e = r(gl());
  ne.PostgrestClient = e.default;
  const t = r(Si());
  ne.PostgrestQueryBuilder = t.default;
  const s = r(Vs());
  ne.PostgrestFilterBuilder = s.default;
  const n = r(Ci());
  ne.PostgrestTransformBuilder = n.default;
  const i = r(Ei());
  ne.PostgrestBuilder = i.default;
  const a = r(ki());
  return ne.PostgrestError = a.default, ne.default = {
    PostgrestClient: e.default,
    PostgrestQueryBuilder: t.default,
    PostgrestFilterBuilder: s.default,
    PostgrestTransformBuilder: n.default,
    PostgrestBuilder: i.default,
    PostgrestError: a.default
  }, ne;
}
var yl = vl();
const bl = /* @__PURE__ */ $a(yl), {
  PostgrestClient: wl,
  PostgrestQueryBuilder: Kd,
  PostgrestFilterBuilder: Jd,
  PostgrestTransformBuilder: Qd,
  PostgrestBuilder: Yd,
  PostgrestError: Xd
} = bl, xl = "2.11.2", _l = { "X-Client-Info": `realtime-js/${xl}` }, jl = "1.0.0", Ri = 1e4, kl = 1e3;
var wt;
(function(r) {
  r[r.connecting = 0] = "connecting", r[r.open = 1] = "open", r[r.closing = 2] = "closing", r[r.closed = 3] = "closed";
})(wt || (wt = {}));
var ge;
(function(r) {
  r.closed = "closed", r.errored = "errored", r.joined = "joined", r.joining = "joining", r.leaving = "leaving";
})(ge || (ge = {}));
var we;
(function(r) {
  r.close = "phx_close", r.error = "phx_error", r.join = "phx_join", r.reply = "phx_reply", r.leave = "phx_leave", r.access_token = "access_token";
})(we || (we = {}));
var ds;
(function(r) {
  r.websocket = "websocket";
})(ds || (ds = {}));
var et;
(function(r) {
  r.Connecting = "connecting", r.Open = "open", r.Closing = "closing", r.Closed = "closed";
})(et || (et = {}));
class El {
  constructor() {
    this.HEADER_LENGTH = 1;
  }
  decode(e, t) {
    return e.constructor === ArrayBuffer ? t(this._binaryDecode(e)) : t(typeof e == "string" ? JSON.parse(e) : {});
  }
  _binaryDecode(e) {
    const t = new DataView(e), s = new TextDecoder();
    return this._decodeBroadcast(e, t, s);
  }
  _decodeBroadcast(e, t, s) {
    const n = t.getUint8(1), i = t.getUint8(2);
    let a = this.HEADER_LENGTH + 2;
    const o = s.decode(e.slice(a, a + n));
    a = a + n;
    const l = s.decode(e.slice(a, a + i));
    a = a + i;
    const u = JSON.parse(s.decode(e.slice(a, e.byteLength)));
    return { ref: null, topic: o, event: l, payload: u };
  }
}
class Ti {
  constructor(e, t) {
    this.callback = e, this.timerCalc = t, this.timer = void 0, this.tries = 0, this.callback = e, this.timerCalc = t;
  }
  reset() {
    this.tries = 0, clearTimeout(this.timer);
  }
  // Cancels any previous scheduleTimeout and schedules callback
  scheduleTimeout() {
    clearTimeout(this.timer), this.timer = setTimeout(() => {
      this.tries = this.tries + 1, this.callback();
    }, this.timerCalc(this.tries + 1));
  }
}
var J;
(function(r) {
  r.abstime = "abstime", r.bool = "bool", r.date = "date", r.daterange = "daterange", r.float4 = "float4", r.float8 = "float8", r.int2 = "int2", r.int4 = "int4", r.int4range = "int4range", r.int8 = "int8", r.int8range = "int8range", r.json = "json", r.jsonb = "jsonb", r.money = "money", r.numeric = "numeric", r.oid = "oid", r.reltime = "reltime", r.text = "text", r.time = "time", r.timestamp = "timestamp", r.timestamptz = "timestamptz", r.timetz = "timetz", r.tsrange = "tsrange", r.tstzrange = "tstzrange";
})(J || (J = {}));
const Pn = (r, e, t = {}) => {
  var s;
  const n = (s = t.skipTypes) !== null && s !== void 0 ? s : [];
  return Object.keys(e).reduce((i, a) => (i[a] = Cl(a, r, e, n), i), {});
}, Cl = (r, e, t, s) => {
  const n = e.find((o) => o.name === r), i = n == null ? void 0 : n.type, a = t[r];
  return i && !s.includes(i) ? Ni(i, a) : hs(a);
}, Ni = (r, e) => {
  if (r.charAt(0) === "_") {
    const t = r.slice(1, r.length);
    return Nl(e, t);
  }
  switch (r) {
    case J.bool:
      return Sl(e);
    case J.float4:
    case J.float8:
    case J.int2:
    case J.int4:
    case J.int8:
    case J.numeric:
    case J.oid:
      return Rl(e);
    case J.json:
    case J.jsonb:
      return Tl(e);
    case J.timestamp:
      return Pl(e);
    // Format to be consistent with PostgREST
    case J.abstime:
    // To allow users to cast it based on Timezone
    case J.date:
    // To allow users to cast it based on Timezone
    case J.daterange:
    case J.int4range:
    case J.int8range:
    case J.money:
    case J.reltime:
    // To allow users to cast it based on Timezone
    case J.text:
    case J.time:
    // To allow users to cast it based on Timezone
    case J.timestamptz:
    // To allow users to cast it based on Timezone
    case J.timetz:
    // To allow users to cast it based on Timezone
    case J.tsrange:
    case J.tstzrange:
      return hs(e);
    default:
      return hs(e);
  }
}, hs = (r) => r, Sl = (r) => {
  switch (r) {
    case "t":
      return !0;
    case "f":
      return !1;
    default:
      return r;
  }
}, Rl = (r) => {
  if (typeof r == "string") {
    const e = parseFloat(r);
    if (!Number.isNaN(e))
      return e;
  }
  return r;
}, Tl = (r) => {
  if (typeof r == "string")
    try {
      return JSON.parse(r);
    } catch (e) {
      return console.log(`JSON parse error: ${e}`), r;
    }
  return r;
}, Nl = (r, e) => {
  if (typeof r != "string")
    return r;
  const t = r.length - 1, s = r[t];
  if (r[0] === "{" && s === "}") {
    let i;
    const a = r.slice(1, t);
    try {
      i = JSON.parse("[" + a + "]");
    } catch {
      i = a ? a.split(",") : [];
    }
    return i.map((o) => Ni(e, o));
  }
  return r;
}, Pl = (r) => typeof r == "string" ? r.replace(" ", "T") : r, Pi = (r) => {
  let e = r;
  return e = e.replace(/^ws/i, "http"), e = e.replace(/(\/socket\/websocket|\/socket|\/websocket)\/?$/i, ""), e.replace(/\/+$/, "");
};
class Hr {
  /**
   * Initializes the Push
   *
   * @param channel The Channel
   * @param event The event, for example `"phx_join"`
   * @param payload The payload, for example `{user_id: 123}`
   * @param timeout The push timeout in milliseconds
   */
  constructor(e, t, s = {}, n = Ri) {
    this.channel = e, this.event = t, this.payload = s, this.timeout = n, this.sent = !1, this.timeoutTimer = void 0, this.ref = "", this.receivedResp = null, this.recHooks = [], this.refEvent = null;
  }
  resend(e) {
    this.timeout = e, this._cancelRefEvent(), this.ref = "", this.refEvent = null, this.receivedResp = null, this.sent = !1, this.send();
  }
  send() {
    this._hasReceived("timeout") || (this.startTimeout(), this.sent = !0, this.channel.socket.push({
      topic: this.channel.topic,
      event: this.event,
      payload: this.payload,
      ref: this.ref,
      join_ref: this.channel._joinRef()
    }));
  }
  updatePayload(e) {
    this.payload = Object.assign(Object.assign({}, this.payload), e);
  }
  receive(e, t) {
    var s;
    return this._hasReceived(e) && t((s = this.receivedResp) === null || s === void 0 ? void 0 : s.response), this.recHooks.push({ status: e, callback: t }), this;
  }
  startTimeout() {
    if (this.timeoutTimer)
      return;
    this.ref = this.channel.socket._makeRef(), this.refEvent = this.channel._replyEventName(this.ref);
    const e = (t) => {
      this._cancelRefEvent(), this._cancelTimeout(), this.receivedResp = t, this._matchReceive(t);
    };
    this.channel._on(this.refEvent, {}, e), this.timeoutTimer = setTimeout(() => {
      this.trigger("timeout", {});
    }, this.timeout);
  }
  trigger(e, t) {
    this.refEvent && this.channel._trigger(this.refEvent, { status: e, response: t });
  }
  destroy() {
    this._cancelRefEvent(), this._cancelTimeout();
  }
  _cancelRefEvent() {
    this.refEvent && this.channel._off(this.refEvent, {});
  }
  _cancelTimeout() {
    clearTimeout(this.timeoutTimer), this.timeoutTimer = void 0;
  }
  _matchReceive({ status: e, response: t }) {
    this.recHooks.filter((s) => s.status === e).forEach((s) => s.callback(t));
  }
  _hasReceived(e) {
    return this.receivedResp && this.receivedResp.status === e;
  }
}
var On;
(function(r) {
  r.SYNC = "sync", r.JOIN = "join", r.LEAVE = "leave";
})(On || (On = {}));
class Kt {
  /**
   * Initializes the Presence.
   *
   * @param channel - The RealtimeChannel
   * @param opts - The options,
   *        for example `{events: {state: 'state', diff: 'diff'}}`
   */
  constructor(e, t) {
    this.channel = e, this.state = {}, this.pendingDiffs = [], this.joinRef = null, this.caller = {
      onJoin: () => {
      },
      onLeave: () => {
      },
      onSync: () => {
      }
    };
    const s = (t == null ? void 0 : t.events) || {
      state: "presence_state",
      diff: "presence_diff"
    };
    this.channel._on(s.state, {}, (n) => {
      const { onJoin: i, onLeave: a, onSync: o } = this.caller;
      this.joinRef = this.channel._joinRef(), this.state = Kt.syncState(this.state, n, i, a), this.pendingDiffs.forEach((l) => {
        this.state = Kt.syncDiff(this.state, l, i, a);
      }), this.pendingDiffs = [], o();
    }), this.channel._on(s.diff, {}, (n) => {
      const { onJoin: i, onLeave: a, onSync: o } = this.caller;
      this.inPendingSyncState() ? this.pendingDiffs.push(n) : (this.state = Kt.syncDiff(this.state, n, i, a), o());
    }), this.onJoin((n, i, a) => {
      this.channel._trigger("presence", {
        event: "join",
        key: n,
        currentPresences: i,
        newPresences: a
      });
    }), this.onLeave((n, i, a) => {
      this.channel._trigger("presence", {
        event: "leave",
        key: n,
        currentPresences: i,
        leftPresences: a
      });
    }), this.onSync(() => {
      this.channel._trigger("presence", { event: "sync" });
    });
  }
  /**
   * Used to sync the list of presences on the server with the
   * client's state.
   *
   * An optional `onJoin` and `onLeave` callback can be provided to
   * react to changes in the client's local presences across
   * disconnects and reconnects with the server.
   *
   * @internal
   */
  static syncState(e, t, s, n) {
    const i = this.cloneDeep(e), a = this.transformState(t), o = {}, l = {};
    return this.map(i, (u, c) => {
      a[u] || (l[u] = c);
    }), this.map(a, (u, c) => {
      const h = i[u];
      if (h) {
        const m = c.map((g) => g.presence_ref), p = h.map((g) => g.presence_ref), y = c.filter((g) => p.indexOf(g.presence_ref) < 0), x = h.filter((g) => m.indexOf(g.presence_ref) < 0);
        y.length > 0 && (o[u] = y), x.length > 0 && (l[u] = x);
      } else
        o[u] = c;
    }), this.syncDiff(i, { joins: o, leaves: l }, s, n);
  }
  /**
   * Used to sync a diff of presence join and leave events from the
   * server, as they happen.
   *
   * Like `syncState`, `syncDiff` accepts optional `onJoin` and
   * `onLeave` callbacks to react to a user joining or leaving from a
   * device.
   *
   * @internal
   */
  static syncDiff(e, t, s, n) {
    const { joins: i, leaves: a } = {
      joins: this.transformState(t.joins),
      leaves: this.transformState(t.leaves)
    };
    return s || (s = () => {
    }), n || (n = () => {
    }), this.map(i, (o, l) => {
      var u;
      const c = (u = e[o]) !== null && u !== void 0 ? u : [];
      if (e[o] = this.cloneDeep(l), c.length > 0) {
        const h = e[o].map((p) => p.presence_ref), m = c.filter((p) => h.indexOf(p.presence_ref) < 0);
        e[o].unshift(...m);
      }
      s(o, c, l);
    }), this.map(a, (o, l) => {
      let u = e[o];
      if (!u)
        return;
      const c = l.map((h) => h.presence_ref);
      u = u.filter((h) => c.indexOf(h.presence_ref) < 0), e[o] = u, n(o, u, l), u.length === 0 && delete e[o];
    }), e;
  }
  /** @internal */
  static map(e, t) {
    return Object.getOwnPropertyNames(e).map((s) => t(s, e[s]));
  }
  /**
   * Remove 'metas' key
   * Change 'phx_ref' to 'presence_ref'
   * Remove 'phx_ref' and 'phx_ref_prev'
   *
   * @example
   * // returns {
   *  abc123: [
   *    { presence_ref: '2', user_id: 1 },
   *    { presence_ref: '3', user_id: 2 }
   *  ]
   * }
   * RealtimePresence.transformState({
   *  abc123: {
   *    metas: [
   *      { phx_ref: '2', phx_ref_prev: '1' user_id: 1 },
   *      { phx_ref: '3', user_id: 2 }
   *    ]
   *  }
   * })
   *
   * @internal
   */
  static transformState(e) {
    return e = this.cloneDeep(e), Object.getOwnPropertyNames(e).reduce((t, s) => {
      const n = e[s];
      return "metas" in n ? t[s] = n.metas.map((i) => (i.presence_ref = i.phx_ref, delete i.phx_ref, delete i.phx_ref_prev, i)) : t[s] = n, t;
    }, {});
  }
  /** @internal */
  static cloneDeep(e) {
    return JSON.parse(JSON.stringify(e));
  }
  /** @internal */
  onJoin(e) {
    this.caller.onJoin = e;
  }
  /** @internal */
  onLeave(e) {
    this.caller.onLeave = e;
  }
  /** @internal */
  onSync(e) {
    this.caller.onSync = e;
  }
  /** @internal */
  inPendingSyncState() {
    return !this.joinRef || this.joinRef !== this.channel._joinRef();
  }
}
var An;
(function(r) {
  r.ALL = "*", r.INSERT = "INSERT", r.UPDATE = "UPDATE", r.DELETE = "DELETE";
})(An || (An = {}));
var Ln;
(function(r) {
  r.BROADCAST = "broadcast", r.PRESENCE = "presence", r.POSTGRES_CHANGES = "postgres_changes", r.SYSTEM = "system";
})(Ln || (Ln = {}));
var Se;
(function(r) {
  r.SUBSCRIBED = "SUBSCRIBED", r.TIMED_OUT = "TIMED_OUT", r.CLOSED = "CLOSED", r.CHANNEL_ERROR = "CHANNEL_ERROR";
})(Se || (Se = {}));
class Ws {
  constructor(e, t = { config: {} }, s) {
    this.topic = e, this.params = t, this.socket = s, this.bindings = {}, this.state = ge.closed, this.joinedOnce = !1, this.pushBuffer = [], this.subTopic = e.replace(/^realtime:/i, ""), this.params.config = Object.assign({
      broadcast: { ack: !1, self: !1 },
      presence: { key: "" },
      private: !1
    }, t.config), this.timeout = this.socket.timeout, this.joinPush = new Hr(this, we.join, this.params, this.timeout), this.rejoinTimer = new Ti(() => this._rejoinUntilConnected(), this.socket.reconnectAfterMs), this.joinPush.receive("ok", () => {
      this.state = ge.joined, this.rejoinTimer.reset(), this.pushBuffer.forEach((n) => n.send()), this.pushBuffer = [];
    }), this._onClose(() => {
      this.rejoinTimer.reset(), this.socket.log("channel", `close ${this.topic} ${this._joinRef()}`), this.state = ge.closed, this.socket._remove(this);
    }), this._onError((n) => {
      this._isLeaving() || this._isClosed() || (this.socket.log("channel", `error ${this.topic}`, n), this.state = ge.errored, this.rejoinTimer.scheduleTimeout());
    }), this.joinPush.receive("timeout", () => {
      this._isJoining() && (this.socket.log("channel", `timeout ${this.topic}`, this.joinPush.timeout), this.state = ge.errored, this.rejoinTimer.scheduleTimeout());
    }), this._on(we.reply, {}, (n, i) => {
      this._trigger(this._replyEventName(i), n);
    }), this.presence = new Kt(this), this.broadcastEndpointURL = Pi(this.socket.endPoint) + "/api/broadcast", this.private = this.params.config.private || !1;
  }
  /** Subscribe registers your client with the server */
  subscribe(e, t = this.timeout) {
    var s, n;
    if (this.socket.isConnected() || this.socket.connect(), this.joinedOnce)
      throw "tried to subscribe multiple times. 'subscribe' can only be called a single time per channel instance";
    {
      const { config: { broadcast: i, presence: a, private: o } } = this.params;
      this._onError((c) => e == null ? void 0 : e(Se.CHANNEL_ERROR, c)), this._onClose(() => e == null ? void 0 : e(Se.CLOSED));
      const l = {}, u = {
        broadcast: i,
        presence: a,
        postgres_changes: (n = (s = this.bindings.postgres_changes) === null || s === void 0 ? void 0 : s.map((c) => c.filter)) !== null && n !== void 0 ? n : [],
        private: o
      };
      this.socket.accessTokenValue && (l.access_token = this.socket.accessTokenValue), this.updateJoinPayload(Object.assign({ config: u }, l)), this.joinedOnce = !0, this._rejoin(t), this.joinPush.receive("ok", async ({ postgres_changes: c }) => {
        var h;
        if (this.socket.setAuth(), c === void 0) {
          e == null || e(Se.SUBSCRIBED);
          return;
        } else {
          const m = this.bindings.postgres_changes, p = (h = m == null ? void 0 : m.length) !== null && h !== void 0 ? h : 0, y = [];
          for (let x = 0; x < p; x++) {
            const g = m[x], { filter: { event: k, schema: C, table: j, filter: R } } = g, L = c && c[x];
            if (L && L.event === k && L.schema === C && L.table === j && L.filter === R)
              y.push(Object.assign(Object.assign({}, g), { id: L.id }));
            else {
              this.unsubscribe(), e == null || e(Se.CHANNEL_ERROR, new Error("mismatch between server and client bindings for postgres changes"));
              return;
            }
          }
          this.bindings.postgres_changes = y, e && e(Se.SUBSCRIBED);
          return;
        }
      }).receive("error", (c) => {
        e == null || e(Se.CHANNEL_ERROR, new Error(JSON.stringify(Object.values(c).join(", ") || "error")));
      }).receive("timeout", () => {
        e == null || e(Se.TIMED_OUT);
      });
    }
    return this;
  }
  presenceState() {
    return this.presence.state;
  }
  async track(e, t = {}) {
    return await this.send({
      type: "presence",
      event: "track",
      payload: e
    }, t.timeout || this.timeout);
  }
  async untrack(e = {}) {
    return await this.send({
      type: "presence",
      event: "untrack"
    }, e);
  }
  on(e, t, s) {
    return this._on(e, t, s);
  }
  /**
   * Sends a message into the channel.
   *
   * @param args Arguments to send to channel
   * @param args.type The type of event to send
   * @param args.event The name of the event being sent
   * @param args.payload Payload to be sent
   * @param opts Options to be used during the send process
   */
  async send(e, t = {}) {
    var s, n;
    if (!this._canPush() && e.type === "broadcast") {
      const { event: i, payload: a } = e, l = {
        method: "POST",
        headers: {
          Authorization: this.socket.accessTokenValue ? `Bearer ${this.socket.accessTokenValue}` : "",
          apikey: this.socket.apiKey ? this.socket.apiKey : "",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          messages: [
            {
              topic: this.subTopic,
              event: i,
              payload: a,
              private: this.private
            }
          ]
        })
      };
      try {
        const u = await this._fetchWithTimeout(this.broadcastEndpointURL, l, (s = t.timeout) !== null && s !== void 0 ? s : this.timeout);
        return await ((n = u.body) === null || n === void 0 ? void 0 : n.cancel()), u.ok ? "ok" : "error";
      } catch (u) {
        return u.name === "AbortError" ? "timed out" : "error";
      }
    } else
      return new Promise((i) => {
        var a, o, l;
        const u = this._push(e.type, e, t.timeout || this.timeout);
        e.type === "broadcast" && !(!((l = (o = (a = this.params) === null || a === void 0 ? void 0 : a.config) === null || o === void 0 ? void 0 : o.broadcast) === null || l === void 0) && l.ack) && i("ok"), u.receive("ok", () => i("ok")), u.receive("error", () => i("error")), u.receive("timeout", () => i("timed out"));
      });
  }
  updateJoinPayload(e) {
    this.joinPush.updatePayload(e);
  }
  /**
   * Leaves the channel.
   *
   * Unsubscribes from server events, and instructs channel to terminate on server.
   * Triggers onClose() hooks.
   *
   * To receive leave acknowledgements, use the a `receive` hook to bind to the server ack, ie:
   * channel.unsubscribe().receive("ok", () => alert("left!") )
   */
  unsubscribe(e = this.timeout) {
    this.state = ge.leaving;
    const t = () => {
      this.socket.log("channel", `leave ${this.topic}`), this._trigger(we.close, "leave", this._joinRef());
    };
    return this.rejoinTimer.reset(), this.joinPush.destroy(), new Promise((s) => {
      const n = new Hr(this, we.leave, {}, e);
      n.receive("ok", () => {
        t(), s("ok");
      }).receive("timeout", () => {
        t(), s("timed out");
      }).receive("error", () => {
        s("error");
      }), n.send(), this._canPush() || n.trigger("ok", {});
    });
  }
  /** @internal */
  async _fetchWithTimeout(e, t, s) {
    const n = new AbortController(), i = setTimeout(() => n.abort(), s), a = await this.socket.fetch(e, Object.assign(Object.assign({}, t), { signal: n.signal }));
    return clearTimeout(i), a;
  }
  /** @internal */
  _push(e, t, s = this.timeout) {
    if (!this.joinedOnce)
      throw `tried to push '${e}' to '${this.topic}' before joining. Use channel.subscribe() before pushing events`;
    let n = new Hr(this, e, t, s);
    return this._canPush() ? n.send() : (n.startTimeout(), this.pushBuffer.push(n)), n;
  }
  /**
   * Overridable message hook
   *
   * Receives all events for specialized message handling before dispatching to the channel callbacks.
   * Must return the payload, modified or unmodified.
   *
   * @internal
   */
  _onMessage(e, t, s) {
    return t;
  }
  /** @internal */
  _isMember(e) {
    return this.topic === e;
  }
  /** @internal */
  _joinRef() {
    return this.joinPush.ref;
  }
  /** @internal */
  _trigger(e, t, s) {
    var n, i;
    const a = e.toLocaleLowerCase(), { close: o, error: l, leave: u, join: c } = we;
    if (s && [o, l, u, c].indexOf(a) >= 0 && s !== this._joinRef())
      return;
    let m = this._onMessage(a, t, s);
    if (t && !m)
      throw "channel onMessage callbacks must return the payload, modified or unmodified";
    ["insert", "update", "delete"].includes(a) ? (n = this.bindings.postgres_changes) === null || n === void 0 || n.filter((p) => {
      var y, x, g;
      return ((y = p.filter) === null || y === void 0 ? void 0 : y.event) === "*" || ((g = (x = p.filter) === null || x === void 0 ? void 0 : x.event) === null || g === void 0 ? void 0 : g.toLocaleLowerCase()) === a;
    }).map((p) => p.callback(m, s)) : (i = this.bindings[a]) === null || i === void 0 || i.filter((p) => {
      var y, x, g, k, C, j;
      if (["broadcast", "presence", "postgres_changes"].includes(a))
        if ("id" in p) {
          const R = p.id, L = (y = p.filter) === null || y === void 0 ? void 0 : y.event;
          return R && ((x = t.ids) === null || x === void 0 ? void 0 : x.includes(R)) && (L === "*" || (L == null ? void 0 : L.toLocaleLowerCase()) === ((g = t.data) === null || g === void 0 ? void 0 : g.type.toLocaleLowerCase()));
        } else {
          const R = (C = (k = p == null ? void 0 : p.filter) === null || k === void 0 ? void 0 : k.event) === null || C === void 0 ? void 0 : C.toLocaleLowerCase();
          return R === "*" || R === ((j = t == null ? void 0 : t.event) === null || j === void 0 ? void 0 : j.toLocaleLowerCase());
        }
      else
        return p.type.toLocaleLowerCase() === a;
    }).map((p) => {
      if (typeof m == "object" && "ids" in m) {
        const y = m.data, { schema: x, table: g, commit_timestamp: k, type: C, errors: j } = y;
        m = Object.assign(Object.assign({}, {
          schema: x,
          table: g,
          commit_timestamp: k,
          eventType: C,
          new: {},
          old: {},
          errors: j
        }), this._getPayloadRecords(y));
      }
      p.callback(m, s);
    });
  }
  /** @internal */
  _isClosed() {
    return this.state === ge.closed;
  }
  /** @internal */
  _isJoined() {
    return this.state === ge.joined;
  }
  /** @internal */
  _isJoining() {
    return this.state === ge.joining;
  }
  /** @internal */
  _isLeaving() {
    return this.state === ge.leaving;
  }
  /** @internal */
  _replyEventName(e) {
    return `chan_reply_${e}`;
  }
  /** @internal */
  _on(e, t, s) {
    const n = e.toLocaleLowerCase(), i = {
      type: n,
      filter: t,
      callback: s
    };
    return this.bindings[n] ? this.bindings[n].push(i) : this.bindings[n] = [i], this;
  }
  /** @internal */
  _off(e, t) {
    const s = e.toLocaleLowerCase();
    return this.bindings[s] = this.bindings[s].filter((n) => {
      var i;
      return !(((i = n.type) === null || i === void 0 ? void 0 : i.toLocaleLowerCase()) === s && Ws.isEqual(n.filter, t));
    }), this;
  }
  /** @internal */
  static isEqual(e, t) {
    if (Object.keys(e).length !== Object.keys(t).length)
      return !1;
    for (const s in e)
      if (e[s] !== t[s])
        return !1;
    return !0;
  }
  /** @internal */
  _rejoinUntilConnected() {
    this.rejoinTimer.scheduleTimeout(), this.socket.isConnected() && this._rejoin();
  }
  /**
   * Registers a callback that will be executed when the channel closes.
   *
   * @internal
   */
  _onClose(e) {
    this._on(we.close, {}, e);
  }
  /**
   * Registers a callback that will be executed when the channel encounteres an error.
   *
   * @internal
   */
  _onError(e) {
    this._on(we.error, {}, (t) => e(t));
  }
  /**
   * Returns `true` if the socket is connected and the channel has been joined.
   *
   * @internal
   */
  _canPush() {
    return this.socket.isConnected() && this._isJoined();
  }
  /** @internal */
  _rejoin(e = this.timeout) {
    this._isLeaving() || (this.socket._leaveOpenTopic(this.topic), this.state = ge.joining, this.joinPush.resend(e));
  }
  /** @internal */
  _getPayloadRecords(e) {
    const t = {
      new: {},
      old: {}
    };
    return (e.type === "INSERT" || e.type === "UPDATE") && (t.new = Pn(e.columns, e.record)), (e.type === "UPDATE" || e.type === "DELETE") && (t.old = Pn(e.columns, e.old_record)), t;
  }
}
const Ol = () => {
}, Al = typeof WebSocket < "u", Ll = `
  addEventListener("message", (e) => {
    if (e.data.event === "start") {
      setInterval(() => postMessage({ event: "keepAlive" }), e.data.interval);
    }
  });`;
class $l {
  /**
   * Initializes the Socket.
   *
   * @param endPoint The string WebSocket endpoint, ie, "ws://example.com/socket", "wss://example.com", "/socket" (inherited host & protocol)
   * @param httpEndpoint The string HTTP endpoint, ie, "https://example.com", "/" (inherited host & protocol)
   * @param options.transport The Websocket Transport, for example WebSocket.
   * @param options.timeout The default timeout in milliseconds to trigger push timeouts.
   * @param options.params The optional params to pass when connecting.
   * @param options.headers The optional headers to pass when connecting.
   * @param options.heartbeatIntervalMs The millisec interval to send a heartbeat message.
   * @param options.logger The optional function for specialized logging, ie: logger: (kind, msg, data) => { console.log(`${kind}: ${msg}`, data) }
   * @param options.encode The function to encode outgoing messages. Defaults to JSON: (payload, callback) => callback(JSON.stringify(payload))
   * @param options.decode The function to decode incoming messages. Defaults to Serializer's decode.
   * @param options.reconnectAfterMs he optional function that returns the millsec reconnect interval. Defaults to stepped backoff off.
   * @param options.worker Use Web Worker to set a side flow. Defaults to false.
   * @param options.workerUrl The URL of the worker script. Defaults to https://realtime.supabase.com/worker.js that includes a heartbeat event call to keep the connection alive.
   */
  constructor(e, t) {
    var s;
    this.accessTokenValue = null, this.apiKey = null, this.channels = [], this.endPoint = "", this.httpEndpoint = "", this.headers = _l, this.params = {}, this.timeout = Ri, this.heartbeatIntervalMs = 3e4, this.heartbeatTimer = void 0, this.pendingHeartbeatRef = null, this.ref = 0, this.logger = Ol, this.conn = null, this.sendBuffer = [], this.serializer = new El(), this.stateChangeCallbacks = {
      open: [],
      close: [],
      error: [],
      message: []
    }, this.accessToken = null, this._resolveFetch = (i) => {
      let a;
      return i ? a = i : typeof fetch > "u" ? a = (...o) => Promise.resolve().then(() => Pt).then(({ default: l }) => l(...o)) : a = fetch, (...o) => a(...o);
    }, this.endPoint = `${e}/${ds.websocket}`, this.httpEndpoint = Pi(e), t != null && t.transport ? this.transport = t.transport : this.transport = null, t != null && t.params && (this.params = t.params), t != null && t.headers && (this.headers = Object.assign(Object.assign({}, this.headers), t.headers)), t != null && t.timeout && (this.timeout = t.timeout), t != null && t.logger && (this.logger = t.logger), t != null && t.heartbeatIntervalMs && (this.heartbeatIntervalMs = t.heartbeatIntervalMs);
    const n = (s = t == null ? void 0 : t.params) === null || s === void 0 ? void 0 : s.apikey;
    if (n && (this.accessTokenValue = n, this.apiKey = n), this.reconnectAfterMs = t != null && t.reconnectAfterMs ? t.reconnectAfterMs : (i) => [1e3, 2e3, 5e3, 1e4][i - 1] || 1e4, this.encode = t != null && t.encode ? t.encode : (i, a) => a(JSON.stringify(i)), this.decode = t != null && t.decode ? t.decode : this.serializer.decode.bind(this.serializer), this.reconnectTimer = new Ti(async () => {
      this.disconnect(), this.connect();
    }, this.reconnectAfterMs), this.fetch = this._resolveFetch(t == null ? void 0 : t.fetch), t != null && t.worker) {
      if (typeof window < "u" && !window.Worker)
        throw new Error("Web Worker is not supported");
      this.worker = (t == null ? void 0 : t.worker) || !1, this.workerUrl = t == null ? void 0 : t.workerUrl;
    }
    this.accessToken = (t == null ? void 0 : t.accessToken) || null;
  }
  /**
   * Connects the socket, unless already connected.
   */
  connect() {
    if (!this.conn) {
      if (this.transport) {
        this.conn = new this.transport(this.endpointURL(), void 0, {
          headers: this.headers
        });
        return;
      }
      if (Al) {
        this.conn = new WebSocket(this.endpointURL()), this.setupConnection();
        return;
      }
      this.conn = new Il(this.endpointURL(), void 0, {
        close: () => {
          this.conn = null;
        }
      }), import("./browser-DjOK7rsL.mjs").then((e) => e.b).then(({ default: e }) => {
        this.conn = new e(this.endpointURL(), void 0, {
          headers: this.headers
        }), this.setupConnection();
      });
    }
  }
  /**
   * Returns the URL of the websocket.
   * @returns string The URL of the websocket.
   */
  endpointURL() {
    return this._appendParams(this.endPoint, Object.assign({}, this.params, { vsn: jl }));
  }
  /**
   * Disconnects the socket.
   *
   * @param code A numeric status code to send on disconnect.
   * @param reason A custom reason for the disconnect.
   */
  disconnect(e, t) {
    this.conn && (this.conn.onclose = function() {
    }, e ? this.conn.close(e, t ?? "") : this.conn.close(), this.conn = null, this.heartbeatTimer && clearInterval(this.heartbeatTimer), this.reconnectTimer.reset());
  }
  /**
   * Returns all created channels
   */
  getChannels() {
    return this.channels;
  }
  /**
   * Unsubscribes and removes a single channel
   * @param channel A RealtimeChannel instance
   */
  async removeChannel(e) {
    const t = await e.unsubscribe();
    return this.channels.length === 0 && this.disconnect(), t;
  }
  /**
   * Unsubscribes and removes all channels
   */
  async removeAllChannels() {
    const e = await Promise.all(this.channels.map((t) => t.unsubscribe()));
    return this.disconnect(), e;
  }
  /**
   * Logs the message.
   *
   * For customized logging, `this.logger` can be overridden.
   */
  log(e, t, s) {
    this.logger(e, t, s);
  }
  /**
   * Returns the current state of the socket.
   */
  connectionState() {
    switch (this.conn && this.conn.readyState) {
      case wt.connecting:
        return et.Connecting;
      case wt.open:
        return et.Open;
      case wt.closing:
        return et.Closing;
      default:
        return et.Closed;
    }
  }
  /**
   * Returns `true` is the connection is open.
   */
  isConnected() {
    return this.connectionState() === et.Open;
  }
  channel(e, t = { config: {} }) {
    const s = new Ws(`realtime:${e}`, t, this);
    return this.channels.push(s), s;
  }
  /**
   * Push out a message if the socket is connected.
   *
   * If the socket is not connected, the message gets enqueued within a local buffer, and sent out when a connection is next established.
   */
  push(e) {
    const { topic: t, event: s, payload: n, ref: i } = e, a = () => {
      this.encode(e, (o) => {
        var l;
        (l = this.conn) === null || l === void 0 || l.send(o);
      });
    };
    this.log("push", `${t} ${s} (${i})`, n), this.isConnected() ? a() : this.sendBuffer.push(a);
  }
  /**
   * Sets the JWT access token used for channel subscription authorization and Realtime RLS.
   *
   * If param is null it will use the `accessToken` callback function or the token set on the client.
   *
   * On callback used, it will set the value of the token internal to the client.
   *
   * @param token A JWT string to override the token set on the client.
   */
  async setAuth(e = null) {
    let t = e || this.accessToken && await this.accessToken() || this.accessTokenValue;
    if (t) {
      let s = null;
      try {
        s = JSON.parse(atob(t.split(".")[1]));
      } catch {
      }
      if (s && s.exp && !(Math.floor(Date.now() / 1e3) - s.exp < 0))
        return this.log("auth", `InvalidJWTToken: Invalid value for JWT claim "exp" with value ${s.exp}`), Promise.reject(`InvalidJWTToken: Invalid value for JWT claim "exp" with value ${s.exp}`);
      this.accessTokenValue = t, this.channels.forEach((n) => {
        t && n.updateJoinPayload({ access_token: t }), n.joinedOnce && n._isJoined() && n._push(we.access_token, {
          access_token: t
        });
      });
    }
  }
  /**
   * Sends a heartbeat message if the socket is connected.
   */
  async sendHeartbeat() {
    var e;
    if (this.isConnected()) {
      if (this.pendingHeartbeatRef) {
        this.pendingHeartbeatRef = null, this.log("transport", "heartbeat timeout. Attempting to re-establish connection"), (e = this.conn) === null || e === void 0 || e.close(kl, "hearbeat timeout");
        return;
      }
      this.pendingHeartbeatRef = this._makeRef(), this.push({
        topic: "phoenix",
        event: "heartbeat",
        payload: {},
        ref: this.pendingHeartbeatRef
      }), this.setAuth();
    }
  }
  /**
   * Flushes send buffer
   */
  flushSendBuffer() {
    this.isConnected() && this.sendBuffer.length > 0 && (this.sendBuffer.forEach((e) => e()), this.sendBuffer = []);
  }
  /**
   * Return the next message ref, accounting for overflows
   *
   * @internal
   */
  _makeRef() {
    let e = this.ref + 1;
    return e === this.ref ? this.ref = 0 : this.ref = e, this.ref.toString();
  }
  /**
   * Unsubscribe from channels with the specified topic.
   *
   * @internal
   */
  _leaveOpenTopic(e) {
    let t = this.channels.find((s) => s.topic === e && (s._isJoined() || s._isJoining()));
    t && (this.log("transport", `leaving duplicate topic "${e}"`), t.unsubscribe());
  }
  /**
   * Removes a subscription from the socket.
   *
   * @param channel An open subscription.
   *
   * @internal
   */
  _remove(e) {
    this.channels = this.channels.filter((t) => t._joinRef() !== e._joinRef());
  }
  /**
   * Sets up connection handlers.
   *
   * @internal
   */
  setupConnection() {
    this.conn && (this.conn.binaryType = "arraybuffer", this.conn.onopen = () => this._onConnOpen(), this.conn.onerror = (e) => this._onConnError(e), this.conn.onmessage = (e) => this._onConnMessage(e), this.conn.onclose = (e) => this._onConnClose(e));
  }
  /** @internal */
  _onConnMessage(e) {
    this.decode(e.data, (t) => {
      let { topic: s, event: n, payload: i, ref: a } = t;
      a && a === this.pendingHeartbeatRef && (this.pendingHeartbeatRef = null), this.log("receive", `${i.status || ""} ${s} ${n} ${a && "(" + a + ")" || ""}`, i), this.channels.filter((o) => o._isMember(s)).forEach((o) => o._trigger(n, i, a)), this.stateChangeCallbacks.message.forEach((o) => o(t));
    });
  }
  /** @internal */
  async _onConnOpen() {
    if (this.log("transport", `connected to ${this.endpointURL()}`), this.flushSendBuffer(), this.reconnectTimer.reset(), !this.worker)
      this.heartbeatTimer && clearInterval(this.heartbeatTimer), this.heartbeatTimer = setInterval(() => this.sendHeartbeat(), this.heartbeatIntervalMs);
    else {
      this.workerUrl ? this.log("worker", `starting worker for from ${this.workerUrl}`) : this.log("worker", "starting default worker");
      const e = this._workerObjectUrl(this.workerUrl);
      this.workerRef = new Worker(e), this.workerRef.onerror = (t) => {
        this.log("worker", "worker error", t.message), this.workerRef.terminate();
      }, this.workerRef.onmessage = (t) => {
        t.data.event === "keepAlive" && this.sendHeartbeat();
      }, this.workerRef.postMessage({
        event: "start",
        interval: this.heartbeatIntervalMs
      });
    }
    this.stateChangeCallbacks.open.forEach((e) => e());
  }
  /** @internal */
  _onConnClose(e) {
    this.log("transport", "close", e), this._triggerChanError(), this.heartbeatTimer && clearInterval(this.heartbeatTimer), this.reconnectTimer.scheduleTimeout(), this.stateChangeCallbacks.close.forEach((t) => t(e));
  }
  /** @internal */
  _onConnError(e) {
    this.log("transport", e.message), this._triggerChanError(), this.stateChangeCallbacks.error.forEach((t) => t(e));
  }
  /** @internal */
  _triggerChanError() {
    this.channels.forEach((e) => e._trigger(we.error));
  }
  /** @internal */
  _appendParams(e, t) {
    if (Object.keys(t).length === 0)
      return e;
    const s = e.match(/\?/) ? "&" : "?", n = new URLSearchParams(t);
    return `${e}${s}${n}`;
  }
  _workerObjectUrl(e) {
    let t;
    if (e)
      t = e;
    else {
      const s = new Blob([Ll], { type: "application/javascript" });
      t = URL.createObjectURL(s);
    }
    return t;
  }
}
class Il {
  constructor(e, t, s) {
    this.binaryType = "arraybuffer", this.onclose = () => {
    }, this.onerror = () => {
    }, this.onmessage = () => {
    }, this.onopen = () => {
    }, this.readyState = wt.connecting, this.send = () => {
    }, this.url = null, this.url = e, this.close = s.close;
  }
}
class Gs extends Error {
  constructor(e) {
    super(e), this.__isStorageError = !0, this.name = "StorageError";
  }
}
function ie(r) {
  return typeof r == "object" && r !== null && "__isStorageError" in r;
}
class Fl extends Gs {
  constructor(e, t) {
    super(e), this.name = "StorageApiError", this.status = t;
  }
  toJSON() {
    return {
      name: this.name,
      message: this.message,
      status: this.status
    };
  }
}
class fs extends Gs {
  constructor(e, t) {
    super(e), this.name = "StorageUnknownError", this.originalError = t;
  }
}
var Dl = function(r, e, t, s) {
  function n(i) {
    return i instanceof t ? i : new t(function(a) {
      a(i);
    });
  }
  return new (t || (t = Promise))(function(i, a) {
    function o(c) {
      try {
        u(s.next(c));
      } catch (h) {
        a(h);
      }
    }
    function l(c) {
      try {
        u(s.throw(c));
      } catch (h) {
        a(h);
      }
    }
    function u(c) {
      c.done ? i(c.value) : n(c.value).then(o, l);
    }
    u((s = s.apply(r, e || [])).next());
  });
};
const Oi = (r) => {
  let e;
  return r ? e = r : typeof fetch > "u" ? e = (...t) => Promise.resolve().then(() => Pt).then(({ default: s }) => s(...t)) : e = fetch, (...t) => e(...t);
}, Ul = () => Dl(void 0, void 0, void 0, function* () {
  return typeof Response > "u" ? (yield Promise.resolve().then(() => Pt)).Response : Response;
}), ms = (r) => {
  if (Array.isArray(r))
    return r.map((t) => ms(t));
  if (typeof r == "function" || r !== Object(r))
    return r;
  const e = {};
  return Object.entries(r).forEach(([t, s]) => {
    const n = t.replace(/([-_][a-z])/gi, (i) => i.toUpperCase().replace(/[-_]/g, ""));
    e[n] = ms(s);
  }), e;
};
var ot = function(r, e, t, s) {
  function n(i) {
    return i instanceof t ? i : new t(function(a) {
      a(i);
    });
  }
  return new (t || (t = Promise))(function(i, a) {
    function o(c) {
      try {
        u(s.next(c));
      } catch (h) {
        a(h);
      }
    }
    function l(c) {
      try {
        u(s.throw(c));
      } catch (h) {
        a(h);
      }
    }
    function u(c) {
      c.done ? i(c.value) : n(c.value).then(o, l);
    }
    u((s = s.apply(r, e || [])).next());
  });
};
const Kr = (r) => r.msg || r.message || r.error_description || r.error || JSON.stringify(r), Ml = (r, e, t) => ot(void 0, void 0, void 0, function* () {
  const s = yield Ul();
  r instanceof s && !(t != null && t.noResolveJson) ? r.json().then((n) => {
    e(new Fl(Kr(n), r.status || 500));
  }).catch((n) => {
    e(new fs(Kr(n), n));
  }) : e(new fs(Kr(r), r));
}), ql = (r, e, t, s) => {
  const n = { method: r, headers: (e == null ? void 0 : e.headers) || {} };
  return r === "GET" ? n : (n.headers = Object.assign({ "Content-Type": "application/json" }, e == null ? void 0 : e.headers), s && (n.body = JSON.stringify(s)), Object.assign(Object.assign({}, n), t));
};
function ir(r, e, t, s, n, i) {
  return ot(this, void 0, void 0, function* () {
    return new Promise((a, o) => {
      r(t, ql(e, s, n, i)).then((l) => {
        if (!l.ok)
          throw l;
        return s != null && s.noResolveJson ? l : l.json();
      }).then((l) => a(l)).catch((l) => Ml(l, o, s));
    });
  });
}
function Er(r, e, t, s) {
  return ot(this, void 0, void 0, function* () {
    return ir(r, "GET", e, t, s);
  });
}
function Fe(r, e, t, s, n) {
  return ot(this, void 0, void 0, function* () {
    return ir(r, "POST", e, s, n, t);
  });
}
function Bl(r, e, t, s, n) {
  return ot(this, void 0, void 0, function* () {
    return ir(r, "PUT", e, s, n, t);
  });
}
function zl(r, e, t, s) {
  return ot(this, void 0, void 0, function* () {
    return ir(r, "HEAD", e, Object.assign(Object.assign({}, t), { noResolveJson: !0 }), s);
  });
}
function Ai(r, e, t, s, n) {
  return ot(this, void 0, void 0, function* () {
    return ir(r, "DELETE", e, s, n, t);
  });
}
var fe = function(r, e, t, s) {
  function n(i) {
    return i instanceof t ? i : new t(function(a) {
      a(i);
    });
  }
  return new (t || (t = Promise))(function(i, a) {
    function o(c) {
      try {
        u(s.next(c));
      } catch (h) {
        a(h);
      }
    }
    function l(c) {
      try {
        u(s.throw(c));
      } catch (h) {
        a(h);
      }
    }
    function u(c) {
      c.done ? i(c.value) : n(c.value).then(o, l);
    }
    u((s = s.apply(r, e || [])).next());
  });
};
const Vl = {
  limit: 100,
  offset: 0,
  sortBy: {
    column: "name",
    order: "asc"
  }
}, $n = {
  cacheControl: "3600",
  contentType: "text/plain;charset=UTF-8",
  upsert: !1
};
class Wl {
  constructor(e, t = {}, s, n) {
    this.url = e, this.headers = t, this.bucketId = s, this.fetch = Oi(n);
  }
  /**
   * Uploads a file to an existing bucket or replaces an existing file at the specified path with a new one.
   *
   * @param method HTTP method.
   * @param path The relative file path. Should be of the format `folder/subfolder/filename.png`. The bucket must already exist before attempting to upload.
   * @param fileBody The body of the file to be stored in the bucket.
   */
  uploadOrUpdate(e, t, s, n) {
    return fe(this, void 0, void 0, function* () {
      try {
        let i;
        const a = Object.assign(Object.assign({}, $n), n);
        let o = Object.assign(Object.assign({}, this.headers), e === "POST" && { "x-upsert": String(a.upsert) });
        const l = a.metadata;
        typeof Blob < "u" && s instanceof Blob ? (i = new FormData(), i.append("cacheControl", a.cacheControl), l && i.append("metadata", this.encodeMetadata(l)), i.append("", s)) : typeof FormData < "u" && s instanceof FormData ? (i = s, i.append("cacheControl", a.cacheControl), l && i.append("metadata", this.encodeMetadata(l))) : (i = s, o["cache-control"] = `max-age=${a.cacheControl}`, o["content-type"] = a.contentType, l && (o["x-metadata"] = this.toBase64(this.encodeMetadata(l)))), n != null && n.headers && (o = Object.assign(Object.assign({}, o), n.headers));
        const u = this._removeEmptyFolders(t), c = this._getFinalPath(u), h = yield this.fetch(`${this.url}/object/${c}`, Object.assign({ method: e, body: i, headers: o }, a != null && a.duplex ? { duplex: a.duplex } : {})), m = yield h.json();
        return h.ok ? {
          data: { path: u, id: m.Id, fullPath: m.Key },
          error: null
        } : { data: null, error: m };
      } catch (i) {
        if (ie(i))
          return { data: null, error: i };
        throw i;
      }
    });
  }
  /**
   * Uploads a file to an existing bucket.
   *
   * @param path The file path, including the file name. Should be of the format `folder/subfolder/filename.png`. The bucket must already exist before attempting to upload.
   * @param fileBody The body of the file to be stored in the bucket.
   */
  upload(e, t, s) {
    return fe(this, void 0, void 0, function* () {
      return this.uploadOrUpdate("POST", e, t, s);
    });
  }
  /**
   * Upload a file with a token generated from `createSignedUploadUrl`.
   * @param path The file path, including the file name. Should be of the format `folder/subfolder/filename.png`. The bucket must already exist before attempting to upload.
   * @param token The token generated from `createSignedUploadUrl`
   * @param fileBody The body of the file to be stored in the bucket.
   */
  uploadToSignedUrl(e, t, s, n) {
    return fe(this, void 0, void 0, function* () {
      const i = this._removeEmptyFolders(e), a = this._getFinalPath(i), o = new URL(this.url + `/object/upload/sign/${a}`);
      o.searchParams.set("token", t);
      try {
        let l;
        const u = Object.assign({ upsert: $n.upsert }, n), c = Object.assign(Object.assign({}, this.headers), { "x-upsert": String(u.upsert) });
        typeof Blob < "u" && s instanceof Blob ? (l = new FormData(), l.append("cacheControl", u.cacheControl), l.append("", s)) : typeof FormData < "u" && s instanceof FormData ? (l = s, l.append("cacheControl", u.cacheControl)) : (l = s, c["cache-control"] = `max-age=${u.cacheControl}`, c["content-type"] = u.contentType);
        const h = yield this.fetch(o.toString(), {
          method: "PUT",
          body: l,
          headers: c
        }), m = yield h.json();
        return h.ok ? {
          data: { path: i, fullPath: m.Key },
          error: null
        } : { data: null, error: m };
      } catch (l) {
        if (ie(l))
          return { data: null, error: l };
        throw l;
      }
    });
  }
  /**
   * Creates a signed upload URL.
   * Signed upload URLs can be used to upload files to the bucket without further authentication.
   * They are valid for 2 hours.
   * @param path The file path, including the current file name. For example `folder/image.png`.
   * @param options.upsert If set to true, allows the file to be overwritten if it already exists.
   */
  createSignedUploadUrl(e, t) {
    return fe(this, void 0, void 0, function* () {
      try {
        let s = this._getFinalPath(e);
        const n = Object.assign({}, this.headers);
        t != null && t.upsert && (n["x-upsert"] = "true");
        const i = yield Fe(this.fetch, `${this.url}/object/upload/sign/${s}`, {}, { headers: n }), a = new URL(this.url + i.url), o = a.searchParams.get("token");
        if (!o)
          throw new Gs("No token returned by API");
        return { data: { signedUrl: a.toString(), path: e, token: o }, error: null };
      } catch (s) {
        if (ie(s))
          return { data: null, error: s };
        throw s;
      }
    });
  }
  /**
   * Replaces an existing file at the specified path with a new one.
   *
   * @param path The relative file path. Should be of the format `folder/subfolder/filename.png`. The bucket must already exist before attempting to update.
   * @param fileBody The body of the file to be stored in the bucket.
   */
  update(e, t, s) {
    return fe(this, void 0, void 0, function* () {
      return this.uploadOrUpdate("PUT", e, t, s);
    });
  }
  /**
   * Moves an existing file to a new path in the same bucket.
   *
   * @param fromPath The original file path, including the current file name. For example `folder/image.png`.
   * @param toPath The new file path, including the new file name. For example `folder/image-new.png`.
   * @param options The destination options.
   */
  move(e, t, s) {
    return fe(this, void 0, void 0, function* () {
      try {
        return { data: yield Fe(this.fetch, `${this.url}/object/move`, {
          bucketId: this.bucketId,
          sourceKey: e,
          destinationKey: t,
          destinationBucket: s == null ? void 0 : s.destinationBucket
        }, { headers: this.headers }), error: null };
      } catch (n) {
        if (ie(n))
          return { data: null, error: n };
        throw n;
      }
    });
  }
  /**
   * Copies an existing file to a new path in the same bucket.
   *
   * @param fromPath The original file path, including the current file name. For example `folder/image.png`.
   * @param toPath The new file path, including the new file name. For example `folder/image-copy.png`.
   * @param options The destination options.
   */
  copy(e, t, s) {
    return fe(this, void 0, void 0, function* () {
      try {
        return { data: { path: (yield Fe(this.fetch, `${this.url}/object/copy`, {
          bucketId: this.bucketId,
          sourceKey: e,
          destinationKey: t,
          destinationBucket: s == null ? void 0 : s.destinationBucket
        }, { headers: this.headers })).Key }, error: null };
      } catch (n) {
        if (ie(n))
          return { data: null, error: n };
        throw n;
      }
    });
  }
  /**
   * Creates a signed URL. Use a signed URL to share a file for a fixed amount of time.
   *
   * @param path The file path, including the current file name. For example `folder/image.png`.
   * @param expiresIn The number of seconds until the signed URL expires. For example, `60` for a URL which is valid for one minute.
   * @param options.download triggers the file as a download if set to true. Set this parameter as the name of the file if you want to trigger the download with a different filename.
   * @param options.transform Transform the asset before serving it to the client.
   */
  createSignedUrl(e, t, s) {
    return fe(this, void 0, void 0, function* () {
      try {
        let n = this._getFinalPath(e), i = yield Fe(this.fetch, `${this.url}/object/sign/${n}`, Object.assign({ expiresIn: t }, s != null && s.transform ? { transform: s.transform } : {}), { headers: this.headers });
        const a = s != null && s.download ? `&download=${s.download === !0 ? "" : s.download}` : "";
        return i = { signedUrl: encodeURI(`${this.url}${i.signedURL}${a}`) }, { data: i, error: null };
      } catch (n) {
        if (ie(n))
          return { data: null, error: n };
        throw n;
      }
    });
  }
  /**
   * Creates multiple signed URLs. Use a signed URL to share a file for a fixed amount of time.
   *
   * @param paths The file paths to be downloaded, including the current file names. For example `['folder/image.png', 'folder2/image2.png']`.
   * @param expiresIn The number of seconds until the signed URLs expire. For example, `60` for URLs which are valid for one minute.
   * @param options.download triggers the file as a download if set to true. Set this parameter as the name of the file if you want to trigger the download with a different filename.
   */
  createSignedUrls(e, t, s) {
    return fe(this, void 0, void 0, function* () {
      try {
        const n = yield Fe(this.fetch, `${this.url}/object/sign/${this.bucketId}`, { expiresIn: t, paths: e }, { headers: this.headers }), i = s != null && s.download ? `&download=${s.download === !0 ? "" : s.download}` : "";
        return {
          data: n.map((a) => Object.assign(Object.assign({}, a), { signedUrl: a.signedURL ? encodeURI(`${this.url}${a.signedURL}${i}`) : null })),
          error: null
        };
      } catch (n) {
        if (ie(n))
          return { data: null, error: n };
        throw n;
      }
    });
  }
  /**
   * Downloads a file from a private bucket. For public buckets, make a request to the URL returned from `getPublicUrl` instead.
   *
   * @param path The full path and file name of the file to be downloaded. For example `folder/image.png`.
   * @param options.transform Transform the asset before serving it to the client.
   */
  download(e, t) {
    return fe(this, void 0, void 0, function* () {
      const n = typeof (t == null ? void 0 : t.transform) < "u" ? "render/image/authenticated" : "object", i = this.transformOptsToQueryString((t == null ? void 0 : t.transform) || {}), a = i ? `?${i}` : "";
      try {
        const o = this._getFinalPath(e);
        return { data: yield (yield Er(this.fetch, `${this.url}/${n}/${o}${a}`, {
          headers: this.headers,
          noResolveJson: !0
        })).blob(), error: null };
      } catch (o) {
        if (ie(o))
          return { data: null, error: o };
        throw o;
      }
    });
  }
  /**
   * Retrieves the details of an existing file.
   * @param path
   */
  info(e) {
    return fe(this, void 0, void 0, function* () {
      const t = this._getFinalPath(e);
      try {
        const s = yield Er(this.fetch, `${this.url}/object/info/${t}`, {
          headers: this.headers
        });
        return { data: ms(s), error: null };
      } catch (s) {
        if (ie(s))
          return { data: null, error: s };
        throw s;
      }
    });
  }
  /**
   * Checks the existence of a file.
   * @param path
   */
  exists(e) {
    return fe(this, void 0, void 0, function* () {
      const t = this._getFinalPath(e);
      try {
        return yield zl(this.fetch, `${this.url}/object/${t}`, {
          headers: this.headers
        }), { data: !0, error: null };
      } catch (s) {
        if (ie(s) && s instanceof fs) {
          const n = s.originalError;
          if ([400, 404].includes(n == null ? void 0 : n.status))
            return { data: !1, error: s };
        }
        throw s;
      }
    });
  }
  /**
   * A simple convenience function to get the URL for an asset in a public bucket. If you do not want to use this function, you can construct the public URL by concatenating the bucket URL with the path to the asset.
   * This function does not verify if the bucket is public. If a public URL is created for a bucket which is not public, you will not be able to download the asset.
   *
   * @param path The path and name of the file to generate the public URL for. For example `folder/image.png`.
   * @param options.download Triggers the file as a download if set to true. Set this parameter as the name of the file if you want to trigger the download with a different filename.
   * @param options.transform Transform the asset before serving it to the client.
   */
  getPublicUrl(e, t) {
    const s = this._getFinalPath(e), n = [], i = t != null && t.download ? `download=${t.download === !0 ? "" : t.download}` : "";
    i !== "" && n.push(i);
    const o = typeof (t == null ? void 0 : t.transform) < "u" ? "render/image" : "object", l = this.transformOptsToQueryString((t == null ? void 0 : t.transform) || {});
    l !== "" && n.push(l);
    let u = n.join("&");
    return u !== "" && (u = `?${u}`), {
      data: { publicUrl: encodeURI(`${this.url}/${o}/public/${s}${u}`) }
    };
  }
  /**
   * Deletes files within the same bucket
   *
   * @param paths An array of files to delete, including the path and file name. For example [`'folder/image.png'`].
   */
  remove(e) {
    return fe(this, void 0, void 0, function* () {
      try {
        return { data: yield Ai(this.fetch, `${this.url}/object/${this.bucketId}`, { prefixes: e }, { headers: this.headers }), error: null };
      } catch (t) {
        if (ie(t))
          return { data: null, error: t };
        throw t;
      }
    });
  }
  /**
   * Get file metadata
   * @param id the file id to retrieve metadata
   */
  // async getMetadata(
  //   id: string
  // ): Promise<
  //   | {
  //       data: Metadata
  //       error: null
  //     }
  //   | {
  //       data: null
  //       error: StorageError
  //     }
  // > {
  //   try {
  //     const data = await get(this.fetch, `${this.url}/metadata/${id}`, { headers: this.headers })
  //     return { data, error: null }
  //   } catch (error) {
  //     if (isStorageError(error)) {
  //       return { data: null, error }
  //     }
  //     throw error
  //   }
  // }
  /**
   * Update file metadata
   * @param id the file id to update metadata
   * @param meta the new file metadata
   */
  // async updateMetadata(
  //   id: string,
  //   meta: Metadata
  // ): Promise<
  //   | {
  //       data: Metadata
  //       error: null
  //     }
  //   | {
  //       data: null
  //       error: StorageError
  //     }
  // > {
  //   try {
  //     const data = await post(
  //       this.fetch,
  //       `${this.url}/metadata/${id}`,
  //       { ...meta },
  //       { headers: this.headers }
  //     )
  //     return { data, error: null }
  //   } catch (error) {
  //     if (isStorageError(error)) {
  //       return { data: null, error }
  //     }
  //     throw error
  //   }
  // }
  /**
   * Lists all the files within a bucket.
   * @param path The folder path.
   */
  list(e, t, s) {
    return fe(this, void 0, void 0, function* () {
      try {
        const n = Object.assign(Object.assign(Object.assign({}, Vl), t), { prefix: e || "" });
        return { data: yield Fe(this.fetch, `${this.url}/object/list/${this.bucketId}`, n, { headers: this.headers }, s), error: null };
      } catch (n) {
        if (ie(n))
          return { data: null, error: n };
        throw n;
      }
    });
  }
  encodeMetadata(e) {
    return JSON.stringify(e);
  }
  toBase64(e) {
    return typeof Buffer < "u" ? Buffer.from(e).toString("base64") : btoa(e);
  }
  _getFinalPath(e) {
    return `${this.bucketId}/${e}`;
  }
  _removeEmptyFolders(e) {
    return e.replace(/^\/|\/$/g, "").replace(/\/+/g, "/");
  }
  transformOptsToQueryString(e) {
    const t = [];
    return e.width && t.push(`width=${e.width}`), e.height && t.push(`height=${e.height}`), e.resize && t.push(`resize=${e.resize}`), e.format && t.push(`format=${e.format}`), e.quality && t.push(`quality=${e.quality}`), t.join("&");
  }
}
const Gl = "2.7.1", Hl = { "X-Client-Info": `storage-js/${Gl}` };
var gt = function(r, e, t, s) {
  function n(i) {
    return i instanceof t ? i : new t(function(a) {
      a(i);
    });
  }
  return new (t || (t = Promise))(function(i, a) {
    function o(c) {
      try {
        u(s.next(c));
      } catch (h) {
        a(h);
      }
    }
    function l(c) {
      try {
        u(s.throw(c));
      } catch (h) {
        a(h);
      }
    }
    function u(c) {
      c.done ? i(c.value) : n(c.value).then(o, l);
    }
    u((s = s.apply(r, e || [])).next());
  });
};
class Kl {
  constructor(e, t = {}, s) {
    this.url = e, this.headers = Object.assign(Object.assign({}, Hl), t), this.fetch = Oi(s);
  }
  /**
   * Retrieves the details of all Storage buckets within an existing project.
   */
  listBuckets() {
    return gt(this, void 0, void 0, function* () {
      try {
        return { data: yield Er(this.fetch, `${this.url}/bucket`, { headers: this.headers }), error: null };
      } catch (e) {
        if (ie(e))
          return { data: null, error: e };
        throw e;
      }
    });
  }
  /**
   * Retrieves the details of an existing Storage bucket.
   *
   * @param id The unique identifier of the bucket you would like to retrieve.
   */
  getBucket(e) {
    return gt(this, void 0, void 0, function* () {
      try {
        return { data: yield Er(this.fetch, `${this.url}/bucket/${e}`, { headers: this.headers }), error: null };
      } catch (t) {
        if (ie(t))
          return { data: null, error: t };
        throw t;
      }
    });
  }
  /**
   * Creates a new Storage bucket
   *
   * @param id A unique identifier for the bucket you are creating.
   * @param options.public The visibility of the bucket. Public buckets don't require an authorization token to download objects, but still require a valid token for all other operations. By default, buckets are private.
   * @param options.fileSizeLimit specifies the max file size in bytes that can be uploaded to this bucket.
   * The global file size limit takes precedence over this value.
   * The default value is null, which doesn't set a per bucket file size limit.
   * @param options.allowedMimeTypes specifies the allowed mime types that this bucket can accept during upload.
   * The default value is null, which allows files with all mime types to be uploaded.
   * Each mime type specified can be a wildcard, e.g. image/*, or a specific mime type, e.g. image/png.
   * @returns newly created bucket id
   */
  createBucket(e, t = {
    public: !1
  }) {
    return gt(this, void 0, void 0, function* () {
      try {
        return { data: yield Fe(this.fetch, `${this.url}/bucket`, {
          id: e,
          name: e,
          public: t.public,
          file_size_limit: t.fileSizeLimit,
          allowed_mime_types: t.allowedMimeTypes
        }, { headers: this.headers }), error: null };
      } catch (s) {
        if (ie(s))
          return { data: null, error: s };
        throw s;
      }
    });
  }
  /**
   * Updates a Storage bucket
   *
   * @param id A unique identifier for the bucket you are updating.
   * @param options.public The visibility of the bucket. Public buckets don't require an authorization token to download objects, but still require a valid token for all other operations.
   * @param options.fileSizeLimit specifies the max file size in bytes that can be uploaded to this bucket.
   * The global file size limit takes precedence over this value.
   * The default value is null, which doesn't set a per bucket file size limit.
   * @param options.allowedMimeTypes specifies the allowed mime types that this bucket can accept during upload.
   * The default value is null, which allows files with all mime types to be uploaded.
   * Each mime type specified can be a wildcard, e.g. image/*, or a specific mime type, e.g. image/png.
   */
  updateBucket(e, t) {
    return gt(this, void 0, void 0, function* () {
      try {
        return { data: yield Bl(this.fetch, `${this.url}/bucket/${e}`, {
          id: e,
          name: e,
          public: t.public,
          file_size_limit: t.fileSizeLimit,
          allowed_mime_types: t.allowedMimeTypes
        }, { headers: this.headers }), error: null };
      } catch (s) {
        if (ie(s))
          return { data: null, error: s };
        throw s;
      }
    });
  }
  /**
   * Removes all objects inside a single bucket.
   *
   * @param id The unique identifier of the bucket you would like to empty.
   */
  emptyBucket(e) {
    return gt(this, void 0, void 0, function* () {
      try {
        return { data: yield Fe(this.fetch, `${this.url}/bucket/${e}/empty`, {}, { headers: this.headers }), error: null };
      } catch (t) {
        if (ie(t))
          return { data: null, error: t };
        throw t;
      }
    });
  }
  /**
   * Deletes an existing bucket. A bucket can't be deleted with existing objects inside it.
   * You must first `empty()` the bucket.
   *
   * @param id The unique identifier of the bucket you would like to delete.
   */
  deleteBucket(e) {
    return gt(this, void 0, void 0, function* () {
      try {
        return { data: yield Ai(this.fetch, `${this.url}/bucket/${e}`, {}, { headers: this.headers }), error: null };
      } catch (t) {
        if (ie(t))
          return { data: null, error: t };
        throw t;
      }
    });
  }
}
class Jl extends Kl {
  constructor(e, t = {}, s) {
    super(e, t, s);
  }
  /**
   * Perform file operation in a bucket.
   *
   * @param id The bucket id to operate on.
   */
  from(e) {
    return new Wl(this.url, this.headers, e, this.fetch);
  }
}
const Ql = "2.49.4";
let Vt = "";
typeof Deno < "u" ? Vt = "deno" : typeof document < "u" ? Vt = "web" : typeof navigator < "u" && navigator.product === "ReactNative" ? Vt = "react-native" : Vt = "node";
const Yl = { "X-Client-Info": `supabase-js-${Vt}/${Ql}` }, Xl = {
  headers: Yl
}, Zl = {
  schema: "public"
}, ec = {
  autoRefreshToken: !0,
  persistSession: !0,
  detectSessionInUrl: !0,
  flowType: "implicit"
}, tc = {};
var rc = function(r, e, t, s) {
  function n(i) {
    return i instanceof t ? i : new t(function(a) {
      a(i);
    });
  }
  return new (t || (t = Promise))(function(i, a) {
    function o(c) {
      try {
        u(s.next(c));
      } catch (h) {
        a(h);
      }
    }
    function l(c) {
      try {
        u(s.throw(c));
      } catch (h) {
        a(h);
      }
    }
    function u(c) {
      c.done ? i(c.value) : n(c.value).then(o, l);
    }
    u((s = s.apply(r, e || [])).next());
  });
};
const sc = (r) => {
  let e;
  return r ? e = r : typeof fetch > "u" ? e = _i : e = fetch, (...t) => e(...t);
}, nc = () => typeof Headers > "u" ? ji : Headers, ic = (r, e, t) => {
  const s = sc(t), n = nc();
  return (i, a) => rc(void 0, void 0, void 0, function* () {
    var o;
    const l = (o = yield e()) !== null && o !== void 0 ? o : r;
    let u = new n(a == null ? void 0 : a.headers);
    return u.has("apikey") || u.set("apikey", r), u.has("Authorization") || u.set("Authorization", `Bearer ${l}`), s(i, Object.assign(Object.assign({}, a), { headers: u }));
  });
};
var ac = function(r, e, t, s) {
  function n(i) {
    return i instanceof t ? i : new t(function(a) {
      a(i);
    });
  }
  return new (t || (t = Promise))(function(i, a) {
    function o(c) {
      try {
        u(s.next(c));
      } catch (h) {
        a(h);
      }
    }
    function l(c) {
      try {
        u(s.throw(c));
      } catch (h) {
        a(h);
      }
    }
    function u(c) {
      c.done ? i(c.value) : n(c.value).then(o, l);
    }
    u((s = s.apply(r, e || [])).next());
  });
};
function oc(r) {
  return r.replace(/\/$/, "");
}
function lc(r, e) {
  const { db: t, auth: s, realtime: n, global: i } = r, { db: a, auth: o, realtime: l, global: u } = e, c = {
    db: Object.assign(Object.assign({}, a), t),
    auth: Object.assign(Object.assign({}, o), s),
    realtime: Object.assign(Object.assign({}, l), n),
    global: Object.assign(Object.assign({}, u), i),
    accessToken: () => ac(this, void 0, void 0, function* () {
      return "";
    })
  };
  return r.accessToken ? c.accessToken = r.accessToken : delete c.accessToken, c;
}
const Li = "2.69.1", bt = 30 * 1e3, ps = 3, Jr = ps * bt, cc = "http://localhost:9999", uc = "supabase.auth.token", dc = { "X-Client-Info": `gotrue-js/${Li}` }, gs = "X-Supabase-Api-Version", $i = {
  "2024-01-01": {
    timestamp: Date.parse("2024-01-01T00:00:00.0Z"),
    name: "2024-01-01"
  }
}, hc = /^([a-z0-9_-]{4})*($|[a-z0-9_-]{3}$|[a-z0-9_-]{2}$)$/i, fc = 6e5;
class Hs extends Error {
  constructor(e, t, s) {
    super(e), this.__isAuthError = !0, this.name = "AuthError", this.status = t, this.code = s;
  }
}
function A(r) {
  return typeof r == "object" && r !== null && "__isAuthError" in r;
}
class mc extends Hs {
  constructor(e, t, s) {
    super(e, t, s), this.name = "AuthApiError", this.status = t, this.code = s;
  }
}
function pc(r) {
  return A(r) && r.name === "AuthApiError";
}
class Ii extends Hs {
  constructor(e, t) {
    super(e), this.name = "AuthUnknownError", this.originalError = t;
  }
}
class Ke extends Hs {
  constructor(e, t, s, n) {
    super(e, s, n), this.name = t, this.status = s;
  }
}
class $e extends Ke {
  constructor() {
    super("Auth session missing!", "AuthSessionMissingError", 400, void 0);
  }
}
function gc(r) {
  return A(r) && r.name === "AuthSessionMissingError";
}
class Qr extends Ke {
  constructor() {
    super("Auth session or user missing", "AuthInvalidTokenResponseError", 500, void 0);
  }
}
class mr extends Ke {
  constructor(e) {
    super(e, "AuthInvalidCredentialsError", 400, void 0);
  }
}
class pr extends Ke {
  constructor(e, t = null) {
    super(e, "AuthImplicitGrantRedirectError", 500, void 0), this.details = null, this.details = t;
  }
  toJSON() {
    return {
      name: this.name,
      message: this.message,
      status: this.status,
      details: this.details
    };
  }
}
function vc(r) {
  return A(r) && r.name === "AuthImplicitGrantRedirectError";
}
class In extends Ke {
  constructor(e, t = null) {
    super(e, "AuthPKCEGrantCodeExchangeError", 500, void 0), this.details = null, this.details = t;
  }
  toJSON() {
    return {
      name: this.name,
      message: this.message,
      status: this.status,
      details: this.details
    };
  }
}
class vs extends Ke {
  constructor(e, t) {
    super(e, "AuthRetryableFetchError", t, void 0);
  }
}
function Yr(r) {
  return A(r) && r.name === "AuthRetryableFetchError";
}
class Fn extends Ke {
  constructor(e, t, s) {
    super(e, "AuthWeakPasswordError", t, "weak_password"), this.reasons = s;
  }
}
class Jt extends Ke {
  constructor(e) {
    super(e, "AuthInvalidJwtError", 400, "invalid_jwt");
  }
}
const Dn = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".split(""), Un = ` 	
\r=`.split(""), yc = (() => {
  const r = new Array(128);
  for (let e = 0; e < r.length; e += 1)
    r[e] = -1;
  for (let e = 0; e < Un.length; e += 1)
    r[Un[e].charCodeAt(0)] = -2;
  for (let e = 0; e < Dn.length; e += 1)
    r[Dn[e].charCodeAt(0)] = e;
  return r;
})();
function Fi(r, e, t) {
  const s = yc[r];
  if (s > -1)
    for (e.queue = e.queue << 6 | s, e.queuedBits += 6; e.queuedBits >= 8; )
      t(e.queue >> e.queuedBits - 8 & 255), e.queuedBits -= 8;
  else {
    if (s === -2)
      return;
    throw new Error(`Invalid Base64-URL character "${String.fromCharCode(r)}"`);
  }
}
function Mn(r) {
  const e = [], t = (a) => {
    e.push(String.fromCodePoint(a));
  }, s = {
    utf8seq: 0,
    codepoint: 0
  }, n = { queue: 0, queuedBits: 0 }, i = (a) => {
    xc(a, s, t);
  };
  for (let a = 0; a < r.length; a += 1)
    Fi(r.charCodeAt(a), n, i);
  return e.join("");
}
function bc(r, e) {
  if (r <= 127) {
    e(r);
    return;
  } else if (r <= 2047) {
    e(192 | r >> 6), e(128 | r & 63);
    return;
  } else if (r <= 65535) {
    e(224 | r >> 12), e(128 | r >> 6 & 63), e(128 | r & 63);
    return;
  } else if (r <= 1114111) {
    e(240 | r >> 18), e(128 | r >> 12 & 63), e(128 | r >> 6 & 63), e(128 | r & 63);
    return;
  }
  throw new Error(`Unrecognized Unicode codepoint: ${r.toString(16)}`);
}
function wc(r, e) {
  for (let t = 0; t < r.length; t += 1) {
    let s = r.charCodeAt(t);
    if (s > 55295 && s <= 56319) {
      const n = (s - 55296) * 1024 & 65535;
      s = (r.charCodeAt(t + 1) - 56320 & 65535 | n) + 65536, t += 1;
    }
    bc(s, e);
  }
}
function xc(r, e, t) {
  if (e.utf8seq === 0) {
    if (r <= 127) {
      t(r);
      return;
    }
    for (let s = 1; s < 6; s += 1)
      if ((r >> 7 - s & 1) === 0) {
        e.utf8seq = s;
        break;
      }
    if (e.utf8seq === 2)
      e.codepoint = r & 31;
    else if (e.utf8seq === 3)
      e.codepoint = r & 15;
    else if (e.utf8seq === 4)
      e.codepoint = r & 7;
    else
      throw new Error("Invalid UTF-8 sequence");
    e.utf8seq -= 1;
  } else if (e.utf8seq > 0) {
    if (r <= 127)
      throw new Error("Invalid UTF-8 sequence");
    e.codepoint = e.codepoint << 6 | r & 63, e.utf8seq -= 1, e.utf8seq === 0 && t(e.codepoint);
  }
}
function _c(r) {
  const e = [], t = { queue: 0, queuedBits: 0 }, s = (n) => {
    e.push(n);
  };
  for (let n = 0; n < r.length; n += 1)
    Fi(r.charCodeAt(n), t, s);
  return new Uint8Array(e);
}
function jc(r) {
  const e = [];
  return wc(r, (t) => e.push(t)), new Uint8Array(e);
}
function kc(r) {
  return Math.round(Date.now() / 1e3) + r;
}
function Ec() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(r) {
    const e = Math.random() * 16 | 0;
    return (r == "x" ? e : e & 3 | 8).toString(16);
  });
}
const _e = () => typeof window < "u" && typeof document < "u", Ye = {
  tested: !1,
  writable: !1
}, Qt = () => {
  if (!_e())
    return !1;
  try {
    if (typeof globalThis.localStorage != "object")
      return !1;
  } catch {
    return !1;
  }
  if (Ye.tested)
    return Ye.writable;
  const r = `lswt-${Math.random()}${Math.random()}`;
  try {
    globalThis.localStorage.setItem(r, r), globalThis.localStorage.removeItem(r), Ye.tested = !0, Ye.writable = !0;
  } catch {
    Ye.tested = !0, Ye.writable = !1;
  }
  return Ye.writable;
};
function Cc(r) {
  const e = {}, t = new URL(r);
  if (t.hash && t.hash[0] === "#")
    try {
      new URLSearchParams(t.hash.substring(1)).forEach((n, i) => {
        e[i] = n;
      });
    } catch {
    }
  return t.searchParams.forEach((s, n) => {
    e[n] = s;
  }), e;
}
const Di = (r) => {
  let e;
  return r ? e = r : typeof fetch > "u" ? e = (...t) => Promise.resolve().then(() => Pt).then(({ default: s }) => s(...t)) : e = fetch, (...t) => e(...t);
}, Sc = (r) => typeof r == "object" && r !== null && "status" in r && "ok" in r && "json" in r && typeof r.json == "function", Ui = async (r, e, t) => {
  await r.setItem(e, JSON.stringify(t));
}, gr = async (r, e) => {
  const t = await r.getItem(e);
  if (!t)
    return null;
  try {
    return JSON.parse(t);
  } catch {
    return t;
  }
}, vr = async (r, e) => {
  await r.removeItem(e);
};
class Or {
  constructor() {
    this.promise = new Or.promiseConstructor((e, t) => {
      this.resolve = e, this.reject = t;
    });
  }
}
Or.promiseConstructor = Promise;
function Xr(r) {
  const e = r.split(".");
  if (e.length !== 3)
    throw new Jt("Invalid JWT structure");
  for (let s = 0; s < e.length; s++)
    if (!hc.test(e[s]))
      throw new Jt("JWT not in base64url format");
  return {
    // using base64url lib
    header: JSON.parse(Mn(e[0])),
    payload: JSON.parse(Mn(e[1])),
    signature: _c(e[2]),
    raw: {
      header: e[0],
      payload: e[1]
    }
  };
}
async function Rc(r) {
  return await new Promise((e) => {
    setTimeout(() => e(null), r);
  });
}
function Tc(r, e) {
  return new Promise((s, n) => {
    (async () => {
      for (let i = 0; i < 1 / 0; i++)
        try {
          const a = await r(i);
          if (!e(i, null, a)) {
            s(a);
            return;
          }
        } catch (a) {
          if (!e(i, a)) {
            n(a);
            return;
          }
        }
    })();
  });
}
function Nc(r) {
  return ("0" + r.toString(16)).substr(-2);
}
function Pc() {
  const e = new Uint32Array(56);
  if (typeof crypto > "u") {
    const t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~", s = t.length;
    let n = "";
    for (let i = 0; i < 56; i++)
      n += t.charAt(Math.floor(Math.random() * s));
    return n;
  }
  return crypto.getRandomValues(e), Array.from(e, Nc).join("");
}
async function Oc(r) {
  const t = new TextEncoder().encode(r), s = await crypto.subtle.digest("SHA-256", t), n = new Uint8Array(s);
  return Array.from(n).map((i) => String.fromCharCode(i)).join("");
}
async function Ac(r) {
  if (!(typeof crypto < "u" && typeof crypto.subtle < "u" && typeof TextEncoder < "u"))
    return console.warn("WebCrypto API is not supported. Code challenge method will default to use plain instead of sha256."), r;
  const t = await Oc(r);
  return btoa(t).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}
async function vt(r, e, t = !1) {
  const s = Pc();
  let n = s;
  t && (n += "/PASSWORD_RECOVERY"), await Ui(r, `${e}-code-verifier`, n);
  const i = await Ac(s);
  return [i, s === i ? "plain" : "s256"];
}
const Lc = /^2[0-9]{3}-(0[1-9]|1[0-2])-(0[1-9]|1[0-9]|2[0-9]|3[0-1])$/i;
function $c(r) {
  const e = r.headers.get(gs);
  if (!e || !e.match(Lc))
    return null;
  try {
    return /* @__PURE__ */ new Date(`${e}T00:00:00.0Z`);
  } catch {
    return null;
  }
}
function Ic(r) {
  if (!r)
    throw new Error("Missing exp claim");
  const e = Math.floor(Date.now() / 1e3);
  if (r <= e)
    throw new Error("JWT has expired");
}
function Fc(r) {
  switch (r) {
    case "RS256":
      return {
        name: "RSASSA-PKCS1-v1_5",
        hash: { name: "SHA-256" }
      };
    case "ES256":
      return {
        name: "ECDSA",
        namedCurve: "P-256",
        hash: { name: "SHA-256" }
      };
    default:
      throw new Error("Invalid alg claim");
  }
}
var Dc = function(r, e) {
  var t = {};
  for (var s in r) Object.prototype.hasOwnProperty.call(r, s) && e.indexOf(s) < 0 && (t[s] = r[s]);
  if (r != null && typeof Object.getOwnPropertySymbols == "function")
    for (var n = 0, s = Object.getOwnPropertySymbols(r); n < s.length; n++)
      e.indexOf(s[n]) < 0 && Object.prototype.propertyIsEnumerable.call(r, s[n]) && (t[s[n]] = r[s[n]]);
  return t;
};
const Ze = (r) => r.msg || r.message || r.error_description || r.error || JSON.stringify(r), Uc = [502, 503, 504];
async function qn(r) {
  var e;
  if (!Sc(r))
    throw new vs(Ze(r), 0);
  if (Uc.includes(r.status))
    throw new vs(Ze(r), r.status);
  let t;
  try {
    t = await r.json();
  } catch (i) {
    throw new Ii(Ze(i), i);
  }
  let s;
  const n = $c(r);
  if (n && n.getTime() >= $i["2024-01-01"].timestamp && typeof t == "object" && t && typeof t.code == "string" ? s = t.code : typeof t == "object" && t && typeof t.error_code == "string" && (s = t.error_code), s) {
    if (s === "weak_password")
      throw new Fn(Ze(t), r.status, ((e = t.weak_password) === null || e === void 0 ? void 0 : e.reasons) || []);
    if (s === "session_not_found")
      throw new $e();
  } else if (typeof t == "object" && t && typeof t.weak_password == "object" && t.weak_password && Array.isArray(t.weak_password.reasons) && t.weak_password.reasons.length && t.weak_password.reasons.reduce((i, a) => i && typeof a == "string", !0))
    throw new Fn(Ze(t), r.status, t.weak_password.reasons);
  throw new mc(Ze(t), r.status || 500, s);
}
const Mc = (r, e, t, s) => {
  const n = { method: r, headers: (e == null ? void 0 : e.headers) || {} };
  return r === "GET" ? n : (n.headers = Object.assign({ "Content-Type": "application/json;charset=UTF-8" }, e == null ? void 0 : e.headers), n.body = JSON.stringify(s), Object.assign(Object.assign({}, n), t));
};
async function D(r, e, t, s) {
  var n;
  const i = Object.assign({}, s == null ? void 0 : s.headers);
  i[gs] || (i[gs] = $i["2024-01-01"].name), s != null && s.jwt && (i.Authorization = `Bearer ${s.jwt}`);
  const a = (n = s == null ? void 0 : s.query) !== null && n !== void 0 ? n : {};
  s != null && s.redirectTo && (a.redirect_to = s.redirectTo);
  const o = Object.keys(a).length ? "?" + new URLSearchParams(a).toString() : "", l = await qc(r, e, t + o, {
    headers: i,
    noResolveJson: s == null ? void 0 : s.noResolveJson
  }, {}, s == null ? void 0 : s.body);
  return s != null && s.xform ? s == null ? void 0 : s.xform(l) : { data: Object.assign({}, l), error: null };
}
async function qc(r, e, t, s, n, i) {
  const a = Mc(e, s, n, i);
  let o;
  try {
    o = await r(t, Object.assign({}, a));
  } catch (l) {
    throw console.error(l), new vs(Ze(l), 0);
  }
  if (o.ok || await qn(o), s != null && s.noResolveJson)
    return o;
  try {
    return await o.json();
  } catch (l) {
    await qn(l);
  }
}
function Ie(r) {
  var e;
  let t = null;
  Wc(r) && (t = Object.assign({}, r), r.expires_at || (t.expires_at = kc(r.expires_in)));
  const s = (e = r.user) !== null && e !== void 0 ? e : r;
  return { data: { session: t, user: s }, error: null };
}
function Bn(r) {
  const e = Ie(r);
  return !e.error && r.weak_password && typeof r.weak_password == "object" && Array.isArray(r.weak_password.reasons) && r.weak_password.reasons.length && r.weak_password.message && typeof r.weak_password.message == "string" && r.weak_password.reasons.reduce((t, s) => t && typeof s == "string", !0) && (e.data.weak_password = r.weak_password), e;
}
function De(r) {
  var e;
  return { data: { user: (e = r.user) !== null && e !== void 0 ? e : r }, error: null };
}
function Bc(r) {
  return { data: r, error: null };
}
function zc(r) {
  const { action_link: e, email_otp: t, hashed_token: s, redirect_to: n, verification_type: i } = r, a = Dc(r, ["action_link", "email_otp", "hashed_token", "redirect_to", "verification_type"]), o = {
    action_link: e,
    email_otp: t,
    hashed_token: s,
    redirect_to: n,
    verification_type: i
  }, l = Object.assign({}, a);
  return {
    data: {
      properties: o,
      user: l
    },
    error: null
  };
}
function Vc(r) {
  return r;
}
function Wc(r) {
  return r.access_token && r.refresh_token && r.expires_in;
}
var Gc = function(r, e) {
  var t = {};
  for (var s in r) Object.prototype.hasOwnProperty.call(r, s) && e.indexOf(s) < 0 && (t[s] = r[s]);
  if (r != null && typeof Object.getOwnPropertySymbols == "function")
    for (var n = 0, s = Object.getOwnPropertySymbols(r); n < s.length; n++)
      e.indexOf(s[n]) < 0 && Object.prototype.propertyIsEnumerable.call(r, s[n]) && (t[s[n]] = r[s[n]]);
  return t;
};
class Hc {
  constructor({ url: e = "", headers: t = {}, fetch: s }) {
    this.url = e, this.headers = t, this.fetch = Di(s), this.mfa = {
      listFactors: this._listFactors.bind(this),
      deleteFactor: this._deleteFactor.bind(this)
    };
  }
  /**
   * Removes a logged-in session.
   * @param jwt A valid, logged-in JWT.
   * @param scope The logout sope.
   */
  async signOut(e, t = "global") {
    try {
      return await D(this.fetch, "POST", `${this.url}/logout?scope=${t}`, {
        headers: this.headers,
        jwt: e,
        noResolveJson: !0
      }), { data: null, error: null };
    } catch (s) {
      if (A(s))
        return { data: null, error: s };
      throw s;
    }
  }
  /**
   * Sends an invite link to an email address.
   * @param email The email address of the user.
   * @param options Additional options to be included when inviting.
   */
  async inviteUserByEmail(e, t = {}) {
    try {
      return await D(this.fetch, "POST", `${this.url}/invite`, {
        body: { email: e, data: t.data },
        headers: this.headers,
        redirectTo: t.redirectTo,
        xform: De
      });
    } catch (s) {
      if (A(s))
        return { data: { user: null }, error: s };
      throw s;
    }
  }
  /**
   * Generates email links and OTPs to be sent via a custom email provider.
   * @param email The user's email.
   * @param options.password User password. For signup only.
   * @param options.data Optional user metadata. For signup only.
   * @param options.redirectTo The redirect url which should be appended to the generated link
   */
  async generateLink(e) {
    try {
      const { options: t } = e, s = Gc(e, ["options"]), n = Object.assign(Object.assign({}, s), t);
      return "newEmail" in s && (n.new_email = s == null ? void 0 : s.newEmail, delete n.newEmail), await D(this.fetch, "POST", `${this.url}/admin/generate_link`, {
        body: n,
        headers: this.headers,
        xform: zc,
        redirectTo: t == null ? void 0 : t.redirectTo
      });
    } catch (t) {
      if (A(t))
        return {
          data: {
            properties: null,
            user: null
          },
          error: t
        };
      throw t;
    }
  }
  // User Admin API
  /**
   * Creates a new user.
   * This function should only be called on a server. Never expose your `service_role` key in the browser.
   */
  async createUser(e) {
    try {
      return await D(this.fetch, "POST", `${this.url}/admin/users`, {
        body: e,
        headers: this.headers,
        xform: De
      });
    } catch (t) {
      if (A(t))
        return { data: { user: null }, error: t };
      throw t;
    }
  }
  /**
   * Get a list of users.
   *
   * This function should only be called on a server. Never expose your `service_role` key in the browser.
   * @param params An object which supports `page` and `perPage` as numbers, to alter the paginated results.
   */
  async listUsers(e) {
    var t, s, n, i, a, o, l;
    try {
      const u = { nextPage: null, lastPage: 0, total: 0 }, c = await D(this.fetch, "GET", `${this.url}/admin/users`, {
        headers: this.headers,
        noResolveJson: !0,
        query: {
          page: (s = (t = e == null ? void 0 : e.page) === null || t === void 0 ? void 0 : t.toString()) !== null && s !== void 0 ? s : "",
          per_page: (i = (n = e == null ? void 0 : e.perPage) === null || n === void 0 ? void 0 : n.toString()) !== null && i !== void 0 ? i : ""
        },
        xform: Vc
      });
      if (c.error)
        throw c.error;
      const h = await c.json(), m = (a = c.headers.get("x-total-count")) !== null && a !== void 0 ? a : 0, p = (l = (o = c.headers.get("link")) === null || o === void 0 ? void 0 : o.split(",")) !== null && l !== void 0 ? l : [];
      return p.length > 0 && (p.forEach((y) => {
        const x = parseInt(y.split(";")[0].split("=")[1].substring(0, 1)), g = JSON.parse(y.split(";")[1].split("=")[1]);
        u[`${g}Page`] = x;
      }), u.total = parseInt(m)), { data: Object.assign(Object.assign({}, h), u), error: null };
    } catch (u) {
      if (A(u))
        return { data: { users: [] }, error: u };
      throw u;
    }
  }
  /**
   * Get user by id.
   *
   * @param uid The user's unique identifier
   *
   * This function should only be called on a server. Never expose your `service_role` key in the browser.
   */
  async getUserById(e) {
    try {
      return await D(this.fetch, "GET", `${this.url}/admin/users/${e}`, {
        headers: this.headers,
        xform: De
      });
    } catch (t) {
      if (A(t))
        return { data: { user: null }, error: t };
      throw t;
    }
  }
  /**
   * Updates the user data.
   *
   * @param attributes The data you want to update.
   *
   * This function should only be called on a server. Never expose your `service_role` key in the browser.
   */
  async updateUserById(e, t) {
    try {
      return await D(this.fetch, "PUT", `${this.url}/admin/users/${e}`, {
        body: t,
        headers: this.headers,
        xform: De
      });
    } catch (s) {
      if (A(s))
        return { data: { user: null }, error: s };
      throw s;
    }
  }
  /**
   * Delete a user. Requires a `service_role` key.
   *
   * @param id The user id you want to remove.
   * @param shouldSoftDelete If true, then the user will be soft-deleted from the auth schema. Soft deletion allows user identification from the hashed user ID but is not reversible.
   * Defaults to false for backward compatibility.
   *
   * This function should only be called on a server. Never expose your `service_role` key in the browser.
   */
  async deleteUser(e, t = !1) {
    try {
      return await D(this.fetch, "DELETE", `${this.url}/admin/users/${e}`, {
        headers: this.headers,
        body: {
          should_soft_delete: t
        },
        xform: De
      });
    } catch (s) {
      if (A(s))
        return { data: { user: null }, error: s };
      throw s;
    }
  }
  async _listFactors(e) {
    try {
      const { data: t, error: s } = await D(this.fetch, "GET", `${this.url}/admin/users/${e.userId}/factors`, {
        headers: this.headers,
        xform: (n) => ({ data: { factors: n }, error: null })
      });
      return { data: t, error: s };
    } catch (t) {
      if (A(t))
        return { data: null, error: t };
      throw t;
    }
  }
  async _deleteFactor(e) {
    try {
      return { data: await D(this.fetch, "DELETE", `${this.url}/admin/users/${e.userId}/factors/${e.id}`, {
        headers: this.headers
      }), error: null };
    } catch (t) {
      if (A(t))
        return { data: null, error: t };
      throw t;
    }
  }
}
const Kc = {
  getItem: (r) => Qt() ? globalThis.localStorage.getItem(r) : null,
  setItem: (r, e) => {
    Qt() && globalThis.localStorage.setItem(r, e);
  },
  removeItem: (r) => {
    Qt() && globalThis.localStorage.removeItem(r);
  }
};
function zn(r = {}) {
  return {
    getItem: (e) => r[e] || null,
    setItem: (e, t) => {
      r[e] = t;
    },
    removeItem: (e) => {
      delete r[e];
    }
  };
}
function Jc() {
  if (typeof globalThis != "object")
    try {
      Object.defineProperty(Object.prototype, "__magic__", {
        get: function() {
          return this;
        },
        configurable: !0
      }), __magic__.globalThis = __magic__, delete Object.prototype.__magic__;
    } catch {
      typeof self < "u" && (self.globalThis = self);
    }
}
const yt = {
  /**
   * @experimental
   */
  debug: !!(globalThis && Qt() && globalThis.localStorage && globalThis.localStorage.getItem("supabase.gotrue-js.locks.debug") === "true")
};
class Mi extends Error {
  constructor(e) {
    super(e), this.isAcquireTimeout = !0;
  }
}
class Qc extends Mi {
}
async function Yc(r, e, t) {
  yt.debug && console.log("@supabase/gotrue-js: navigatorLock: acquire lock", r, e);
  const s = new globalThis.AbortController();
  return e > 0 && setTimeout(() => {
    s.abort(), yt.debug && console.log("@supabase/gotrue-js: navigatorLock acquire timed out", r);
  }, e), await Promise.resolve().then(() => globalThis.navigator.locks.request(r, e === 0 ? {
    mode: "exclusive",
    ifAvailable: !0
  } : {
    mode: "exclusive",
    signal: s.signal
  }, async (n) => {
    if (n) {
      yt.debug && console.log("@supabase/gotrue-js: navigatorLock: acquired", r, n.name);
      try {
        return await t();
      } finally {
        yt.debug && console.log("@supabase/gotrue-js: navigatorLock: released", r, n.name);
      }
    } else {
      if (e === 0)
        throw yt.debug && console.log("@supabase/gotrue-js: navigatorLock: not immediately available", r), new Qc(`Acquiring an exclusive Navigator LockManager lock "${r}" immediately failed`);
      if (yt.debug)
        try {
          const i = await globalThis.navigator.locks.query();
          console.log("@supabase/gotrue-js: Navigator LockManager state", JSON.stringify(i, null, "  "));
        } catch (i) {
          console.warn("@supabase/gotrue-js: Error when querying Navigator LockManager state", i);
        }
      return console.warn("@supabase/gotrue-js: Navigator LockManager returned a null lock when using #request without ifAvailable set to true, it appears this browser is not following the LockManager spec https://developer.mozilla.org/en-US/docs/Web/API/LockManager/request"), await t();
    }
  }));
}
Jc();
const Xc = {
  url: cc,
  storageKey: uc,
  autoRefreshToken: !0,
  persistSession: !0,
  detectSessionInUrl: !0,
  headers: dc,
  flowType: "implicit",
  debug: !1,
  hasCustomAuthorizationHeader: !1
};
async function Vn(r, e, t) {
  return await t();
}
class Xt {
  /**
   * Create a new client for use in the browser.
   */
  constructor(e) {
    var t, s;
    this.memoryStorage = null, this.stateChangeEmitters = /* @__PURE__ */ new Map(), this.autoRefreshTicker = null, this.visibilityChangedCallback = null, this.refreshingDeferred = null, this.initializePromise = null, this.detectSessionInUrl = !0, this.hasCustomAuthorizationHeader = !1, this.suppressGetSessionWarning = !1, this.lockAcquired = !1, this.pendingInLock = [], this.broadcastChannel = null, this.logger = console.log, this.instanceID = Xt.nextInstanceID, Xt.nextInstanceID += 1, this.instanceID > 0 && _e() && console.warn("Multiple GoTrueClient instances detected in the same browser context. It is not an error, but this should be avoided as it may produce undefined behavior when used concurrently under the same storage key.");
    const n = Object.assign(Object.assign({}, Xc), e);
    if (this.logDebugMessages = !!n.debug, typeof n.debug == "function" && (this.logger = n.debug), this.persistSession = n.persistSession, this.storageKey = n.storageKey, this.autoRefreshToken = n.autoRefreshToken, this.admin = new Hc({
      url: n.url,
      headers: n.headers,
      fetch: n.fetch
    }), this.url = n.url, this.headers = n.headers, this.fetch = Di(n.fetch), this.lock = n.lock || Vn, this.detectSessionInUrl = n.detectSessionInUrl, this.flowType = n.flowType, this.hasCustomAuthorizationHeader = n.hasCustomAuthorizationHeader, n.lock ? this.lock = n.lock : _e() && (!((t = globalThis == null ? void 0 : globalThis.navigator) === null || t === void 0) && t.locks) ? this.lock = Yc : this.lock = Vn, this.jwks = { keys: [] }, this.jwks_cached_at = Number.MIN_SAFE_INTEGER, this.mfa = {
      verify: this._verify.bind(this),
      enroll: this._enroll.bind(this),
      unenroll: this._unenroll.bind(this),
      challenge: this._challenge.bind(this),
      listFactors: this._listFactors.bind(this),
      challengeAndVerify: this._challengeAndVerify.bind(this),
      getAuthenticatorAssuranceLevel: this._getAuthenticatorAssuranceLevel.bind(this)
    }, this.persistSession ? n.storage ? this.storage = n.storage : Qt() ? this.storage = Kc : (this.memoryStorage = {}, this.storage = zn(this.memoryStorage)) : (this.memoryStorage = {}, this.storage = zn(this.memoryStorage)), _e() && globalThis.BroadcastChannel && this.persistSession && this.storageKey) {
      try {
        this.broadcastChannel = new globalThis.BroadcastChannel(this.storageKey);
      } catch (i) {
        console.error("Failed to create a new BroadcastChannel, multi-tab state changes will not be available", i);
      }
      (s = this.broadcastChannel) === null || s === void 0 || s.addEventListener("message", async (i) => {
        this._debug("received broadcast notification from other tab or client", i), await this._notifyAllSubscribers(i.data.event, i.data.session, !1);
      });
    }
    this.initialize();
  }
  _debug(...e) {
    return this.logDebugMessages && this.logger(`GoTrueClient@${this.instanceID} (${Li}) ${(/* @__PURE__ */ new Date()).toISOString()}`, ...e), this;
  }
  /**
   * Initializes the client session either from the url or from storage.
   * This method is automatically called when instantiating the client, but should also be called
   * manually when checking for an error from an auth redirect (oauth, magiclink, password recovery, etc).
   */
  async initialize() {
    return this.initializePromise ? await this.initializePromise : (this.initializePromise = (async () => await this._acquireLock(-1, async () => await this._initialize()))(), await this.initializePromise);
  }
  /**
   * IMPORTANT:
   * 1. Never throw in this method, as it is called from the constructor
   * 2. Never return a session from this method as it would be cached over
   *    the whole lifetime of the client
   */
  async _initialize() {
    var e;
    try {
      const t = Cc(window.location.href);
      let s = "none";
      if (this._isImplicitGrantCallback(t) ? s = "implicit" : await this._isPKCECallback(t) && (s = "pkce"), _e() && this.detectSessionInUrl && s !== "none") {
        const { data: n, error: i } = await this._getSessionFromURL(t, s);
        if (i) {
          if (this._debug("#_initialize()", "error detecting session from URL", i), vc(i)) {
            const l = (e = i.details) === null || e === void 0 ? void 0 : e.code;
            if (l === "identity_already_exists" || l === "identity_not_found" || l === "single_identity_not_deletable")
              return { error: i };
          }
          return await this._removeSession(), { error: i };
        }
        const { session: a, redirectType: o } = n;
        return this._debug("#_initialize()", "detected session in URL", a, "redirect type", o), await this._saveSession(a), setTimeout(async () => {
          o === "recovery" ? await this._notifyAllSubscribers("PASSWORD_RECOVERY", a) : await this._notifyAllSubscribers("SIGNED_IN", a);
        }, 0), { error: null };
      }
      return await this._recoverAndRefresh(), { error: null };
    } catch (t) {
      return A(t) ? { error: t } : {
        error: new Ii("Unexpected error during initialization", t)
      };
    } finally {
      await this._handleVisibilityChange(), this._debug("#_initialize()", "end");
    }
  }
  /**
   * Creates a new anonymous user.
   *
   * @returns A session where the is_anonymous claim in the access token JWT set to true
   */
  async signInAnonymously(e) {
    var t, s, n;
    try {
      const i = await D(this.fetch, "POST", `${this.url}/signup`, {
        headers: this.headers,
        body: {
          data: (s = (t = e == null ? void 0 : e.options) === null || t === void 0 ? void 0 : t.data) !== null && s !== void 0 ? s : {},
          gotrue_meta_security: { captcha_token: (n = e == null ? void 0 : e.options) === null || n === void 0 ? void 0 : n.captchaToken }
        },
        xform: Ie
      }), { data: a, error: o } = i;
      if (o || !a)
        return { data: { user: null, session: null }, error: o };
      const l = a.session, u = a.user;
      return a.session && (await this._saveSession(a.session), await this._notifyAllSubscribers("SIGNED_IN", l)), { data: { user: u, session: l }, error: null };
    } catch (i) {
      if (A(i))
        return { data: { user: null, session: null }, error: i };
      throw i;
    }
  }
  /**
   * Creates a new user.
   *
   * Be aware that if a user account exists in the system you may get back an
   * error message that attempts to hide this information from the user.
   * This method has support for PKCE via email signups. The PKCE flow cannot be used when autoconfirm is enabled.
   *
   * @returns A logged-in session if the server has "autoconfirm" ON
   * @returns A user if the server has "autoconfirm" OFF
   */
  async signUp(e) {
    var t, s, n;
    try {
      let i;
      if ("email" in e) {
        const { email: c, password: h, options: m } = e;
        let p = null, y = null;
        this.flowType === "pkce" && ([p, y] = await vt(this.storage, this.storageKey)), i = await D(this.fetch, "POST", `${this.url}/signup`, {
          headers: this.headers,
          redirectTo: m == null ? void 0 : m.emailRedirectTo,
          body: {
            email: c,
            password: h,
            data: (t = m == null ? void 0 : m.data) !== null && t !== void 0 ? t : {},
            gotrue_meta_security: { captcha_token: m == null ? void 0 : m.captchaToken },
            code_challenge: p,
            code_challenge_method: y
          },
          xform: Ie
        });
      } else if ("phone" in e) {
        const { phone: c, password: h, options: m } = e;
        i = await D(this.fetch, "POST", `${this.url}/signup`, {
          headers: this.headers,
          body: {
            phone: c,
            password: h,
            data: (s = m == null ? void 0 : m.data) !== null && s !== void 0 ? s : {},
            channel: (n = m == null ? void 0 : m.channel) !== null && n !== void 0 ? n : "sms",
            gotrue_meta_security: { captcha_token: m == null ? void 0 : m.captchaToken }
          },
          xform: Ie
        });
      } else
        throw new mr("You must provide either an email or phone number and a password");
      const { data: a, error: o } = i;
      if (o || !a)
        return { data: { user: null, session: null }, error: o };
      const l = a.session, u = a.user;
      return a.session && (await this._saveSession(a.session), await this._notifyAllSubscribers("SIGNED_IN", l)), { data: { user: u, session: l }, error: null };
    } catch (i) {
      if (A(i))
        return { data: { user: null, session: null }, error: i };
      throw i;
    }
  }
  /**
   * Log in an existing user with an email and password or phone and password.
   *
   * Be aware that you may get back an error message that will not distinguish
   * between the cases where the account does not exist or that the
   * email/phone and password combination is wrong or that the account can only
   * be accessed via social login.
   */
  async signInWithPassword(e) {
    try {
      let t;
      if ("email" in e) {
        const { email: i, password: a, options: o } = e;
        t = await D(this.fetch, "POST", `${this.url}/token?grant_type=password`, {
          headers: this.headers,
          body: {
            email: i,
            password: a,
            gotrue_meta_security: { captcha_token: o == null ? void 0 : o.captchaToken }
          },
          xform: Bn
        });
      } else if ("phone" in e) {
        const { phone: i, password: a, options: o } = e;
        t = await D(this.fetch, "POST", `${this.url}/token?grant_type=password`, {
          headers: this.headers,
          body: {
            phone: i,
            password: a,
            gotrue_meta_security: { captcha_token: o == null ? void 0 : o.captchaToken }
          },
          xform: Bn
        });
      } else
        throw new mr("You must provide either an email or phone number and a password");
      const { data: s, error: n } = t;
      return n ? { data: { user: null, session: null }, error: n } : !s || !s.session || !s.user ? { data: { user: null, session: null }, error: new Qr() } : (s.session && (await this._saveSession(s.session), await this._notifyAllSubscribers("SIGNED_IN", s.session)), {
        data: Object.assign({ user: s.user, session: s.session }, s.weak_password ? { weakPassword: s.weak_password } : null),
        error: n
      });
    } catch (t) {
      if (A(t))
        return { data: { user: null, session: null }, error: t };
      throw t;
    }
  }
  /**
   * Log in an existing user via a third-party provider.
   * This method supports the PKCE flow.
   */
  async signInWithOAuth(e) {
    var t, s, n, i;
    return await this._handleProviderSignIn(e.provider, {
      redirectTo: (t = e.options) === null || t === void 0 ? void 0 : t.redirectTo,
      scopes: (s = e.options) === null || s === void 0 ? void 0 : s.scopes,
      queryParams: (n = e.options) === null || n === void 0 ? void 0 : n.queryParams,
      skipBrowserRedirect: (i = e.options) === null || i === void 0 ? void 0 : i.skipBrowserRedirect
    });
  }
  /**
   * Log in an existing user by exchanging an Auth Code issued during the PKCE flow.
   */
  async exchangeCodeForSession(e) {
    return await this.initializePromise, this._acquireLock(-1, async () => this._exchangeCodeForSession(e));
  }
  async _exchangeCodeForSession(e) {
    const t = await gr(this.storage, `${this.storageKey}-code-verifier`), [s, n] = (t ?? "").split("/");
    try {
      const { data: i, error: a } = await D(this.fetch, "POST", `${this.url}/token?grant_type=pkce`, {
        headers: this.headers,
        body: {
          auth_code: e,
          code_verifier: s
        },
        xform: Ie
      });
      if (await vr(this.storage, `${this.storageKey}-code-verifier`), a)
        throw a;
      return !i || !i.session || !i.user ? {
        data: { user: null, session: null, redirectType: null },
        error: new Qr()
      } : (i.session && (await this._saveSession(i.session), await this._notifyAllSubscribers("SIGNED_IN", i.session)), { data: Object.assign(Object.assign({}, i), { redirectType: n ?? null }), error: a });
    } catch (i) {
      if (A(i))
        return { data: { user: null, session: null, redirectType: null }, error: i };
      throw i;
    }
  }
  /**
   * Allows signing in with an OIDC ID token. The authentication provider used
   * should be enabled and configured.
   */
  async signInWithIdToken(e) {
    try {
      const { options: t, provider: s, token: n, access_token: i, nonce: a } = e, o = await D(this.fetch, "POST", `${this.url}/token?grant_type=id_token`, {
        headers: this.headers,
        body: {
          provider: s,
          id_token: n,
          access_token: i,
          nonce: a,
          gotrue_meta_security: { captcha_token: t == null ? void 0 : t.captchaToken }
        },
        xform: Ie
      }), { data: l, error: u } = o;
      return u ? { data: { user: null, session: null }, error: u } : !l || !l.session || !l.user ? {
        data: { user: null, session: null },
        error: new Qr()
      } : (l.session && (await this._saveSession(l.session), await this._notifyAllSubscribers("SIGNED_IN", l.session)), { data: l, error: u });
    } catch (t) {
      if (A(t))
        return { data: { user: null, session: null }, error: t };
      throw t;
    }
  }
  /**
   * Log in a user using magiclink or a one-time password (OTP).
   *
   * If the `{{ .ConfirmationURL }}` variable is specified in the email template, a magiclink will be sent.
   * If the `{{ .Token }}` variable is specified in the email template, an OTP will be sent.
   * If you're using phone sign-ins, only an OTP will be sent. You won't be able to send a magiclink for phone sign-ins.
   *
   * Be aware that you may get back an error message that will not distinguish
   * between the cases where the account does not exist or, that the account
   * can only be accessed via social login.
   *
   * Do note that you will need to configure a Whatsapp sender on Twilio
   * if you are using phone sign in with the 'whatsapp' channel. The whatsapp
   * channel is not supported on other providers
   * at this time.
   * This method supports PKCE when an email is passed.
   */
  async signInWithOtp(e) {
    var t, s, n, i, a;
    try {
      if ("email" in e) {
        const { email: o, options: l } = e;
        let u = null, c = null;
        this.flowType === "pkce" && ([u, c] = await vt(this.storage, this.storageKey));
        const { error: h } = await D(this.fetch, "POST", `${this.url}/otp`, {
          headers: this.headers,
          body: {
            email: o,
            data: (t = l == null ? void 0 : l.data) !== null && t !== void 0 ? t : {},
            create_user: (s = l == null ? void 0 : l.shouldCreateUser) !== null && s !== void 0 ? s : !0,
            gotrue_meta_security: { captcha_token: l == null ? void 0 : l.captchaToken },
            code_challenge: u,
            code_challenge_method: c
          },
          redirectTo: l == null ? void 0 : l.emailRedirectTo
        });
        return { data: { user: null, session: null }, error: h };
      }
      if ("phone" in e) {
        const { phone: o, options: l } = e, { data: u, error: c } = await D(this.fetch, "POST", `${this.url}/otp`, {
          headers: this.headers,
          body: {
            phone: o,
            data: (n = l == null ? void 0 : l.data) !== null && n !== void 0 ? n : {},
            create_user: (i = l == null ? void 0 : l.shouldCreateUser) !== null && i !== void 0 ? i : !0,
            gotrue_meta_security: { captcha_token: l == null ? void 0 : l.captchaToken },
            channel: (a = l == null ? void 0 : l.channel) !== null && a !== void 0 ? a : "sms"
          }
        });
        return { data: { user: null, session: null, messageId: u == null ? void 0 : u.message_id }, error: c };
      }
      throw new mr("You must provide either an email or phone number.");
    } catch (o) {
      if (A(o))
        return { data: { user: null, session: null }, error: o };
      throw o;
    }
  }
  /**
   * Log in a user given a User supplied OTP or TokenHash received through mobile or email.
   */
  async verifyOtp(e) {
    var t, s;
    try {
      let n, i;
      "options" in e && (n = (t = e.options) === null || t === void 0 ? void 0 : t.redirectTo, i = (s = e.options) === null || s === void 0 ? void 0 : s.captchaToken);
      const { data: a, error: o } = await D(this.fetch, "POST", `${this.url}/verify`, {
        headers: this.headers,
        body: Object.assign(Object.assign({}, e), { gotrue_meta_security: { captcha_token: i } }),
        redirectTo: n,
        xform: Ie
      });
      if (o)
        throw o;
      if (!a)
        throw new Error("An error occurred on token verification.");
      const l = a.session, u = a.user;
      return l != null && l.access_token && (await this._saveSession(l), await this._notifyAllSubscribers(e.type == "recovery" ? "PASSWORD_RECOVERY" : "SIGNED_IN", l)), { data: { user: u, session: l }, error: null };
    } catch (n) {
      if (A(n))
        return { data: { user: null, session: null }, error: n };
      throw n;
    }
  }
  /**
   * Attempts a single-sign on using an enterprise Identity Provider. A
   * successful SSO attempt will redirect the current page to the identity
   * provider authorization page. The redirect URL is implementation and SSO
   * protocol specific.
   *
   * You can use it by providing a SSO domain. Typically you can extract this
   * domain by asking users for their email address. If this domain is
   * registered on the Auth instance the redirect will use that organization's
   * currently active SSO Identity Provider for the login.
   *
   * If you have built an organization-specific login page, you can use the
   * organization's SSO Identity Provider UUID directly instead.
   */
  async signInWithSSO(e) {
    var t, s, n;
    try {
      let i = null, a = null;
      return this.flowType === "pkce" && ([i, a] = await vt(this.storage, this.storageKey)), await D(this.fetch, "POST", `${this.url}/sso`, {
        body: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, "providerId" in e ? { provider_id: e.providerId } : null), "domain" in e ? { domain: e.domain } : null), { redirect_to: (s = (t = e.options) === null || t === void 0 ? void 0 : t.redirectTo) !== null && s !== void 0 ? s : void 0 }), !((n = e == null ? void 0 : e.options) === null || n === void 0) && n.captchaToken ? { gotrue_meta_security: { captcha_token: e.options.captchaToken } } : null), { skip_http_redirect: !0, code_challenge: i, code_challenge_method: a }),
        headers: this.headers,
        xform: Bc
      });
    } catch (i) {
      if (A(i))
        return { data: null, error: i };
      throw i;
    }
  }
  /**
   * Sends a reauthentication OTP to the user's email or phone number.
   * Requires the user to be signed-in.
   */
  async reauthenticate() {
    return await this.initializePromise, await this._acquireLock(-1, async () => await this._reauthenticate());
  }
  async _reauthenticate() {
    try {
      return await this._useSession(async (e) => {
        const { data: { session: t }, error: s } = e;
        if (s)
          throw s;
        if (!t)
          throw new $e();
        const { error: n } = await D(this.fetch, "GET", `${this.url}/reauthenticate`, {
          headers: this.headers,
          jwt: t.access_token
        });
        return { data: { user: null, session: null }, error: n };
      });
    } catch (e) {
      if (A(e))
        return { data: { user: null, session: null }, error: e };
      throw e;
    }
  }
  /**
   * Resends an existing signup confirmation email, email change email, SMS OTP or phone change OTP.
   */
  async resend(e) {
    try {
      const t = `${this.url}/resend`;
      if ("email" in e) {
        const { email: s, type: n, options: i } = e, { error: a } = await D(this.fetch, "POST", t, {
          headers: this.headers,
          body: {
            email: s,
            type: n,
            gotrue_meta_security: { captcha_token: i == null ? void 0 : i.captchaToken }
          },
          redirectTo: i == null ? void 0 : i.emailRedirectTo
        });
        return { data: { user: null, session: null }, error: a };
      } else if ("phone" in e) {
        const { phone: s, type: n, options: i } = e, { data: a, error: o } = await D(this.fetch, "POST", t, {
          headers: this.headers,
          body: {
            phone: s,
            type: n,
            gotrue_meta_security: { captcha_token: i == null ? void 0 : i.captchaToken }
          }
        });
        return { data: { user: null, session: null, messageId: a == null ? void 0 : a.message_id }, error: o };
      }
      throw new mr("You must provide either an email or phone number and a type");
    } catch (t) {
      if (A(t))
        return { data: { user: null, session: null }, error: t };
      throw t;
    }
  }
  /**
   * Returns the session, refreshing it if necessary.
   *
   * The session returned can be null if the session is not detected which can happen in the event a user is not signed-in or has logged out.
   *
   * **IMPORTANT:** This method loads values directly from the storage attached
   * to the client. If that storage is based on request cookies for example,
   * the values in it may not be authentic and therefore it's strongly advised
   * against using this method and its results in such circumstances. A warning
   * will be emitted if this is detected. Use {@link #getUser()} instead.
   */
  async getSession() {
    return await this.initializePromise, await this._acquireLock(-1, async () => this._useSession(async (t) => t));
  }
  /**
   * Acquires a global lock based on the storage key.
   */
  async _acquireLock(e, t) {
    this._debug("#_acquireLock", "begin", e);
    try {
      if (this.lockAcquired) {
        const s = this.pendingInLock.length ? this.pendingInLock[this.pendingInLock.length - 1] : Promise.resolve(), n = (async () => (await s, await t()))();
        return this.pendingInLock.push((async () => {
          try {
            await n;
          } catch {
          }
        })()), n;
      }
      return await this.lock(`lock:${this.storageKey}`, e, async () => {
        this._debug("#_acquireLock", "lock acquired for storage key", this.storageKey);
        try {
          this.lockAcquired = !0;
          const s = t();
          for (this.pendingInLock.push((async () => {
            try {
              await s;
            } catch {
            }
          })()), await s; this.pendingInLock.length; ) {
            const n = [...this.pendingInLock];
            await Promise.all(n), this.pendingInLock.splice(0, n.length);
          }
          return await s;
        } finally {
          this._debug("#_acquireLock", "lock released for storage key", this.storageKey), this.lockAcquired = !1;
        }
      });
    } finally {
      this._debug("#_acquireLock", "end");
    }
  }
  /**
   * Use instead of {@link #getSession} inside the library. It is
   * semantically usually what you want, as getting a session involves some
   * processing afterwards that requires only one client operating on the
   * session at once across multiple tabs or processes.
   */
  async _useSession(e) {
    this._debug("#_useSession", "begin");
    try {
      const t = await this.__loadSession();
      return await e(t);
    } finally {
      this._debug("#_useSession", "end");
    }
  }
  /**
   * NEVER USE DIRECTLY!
   *
   * Always use {@link #_useSession}.
   */
  async __loadSession() {
    this._debug("#__loadSession()", "begin"), this.lockAcquired || this._debug("#__loadSession()", "used outside of an acquired lock!", new Error().stack);
    try {
      let e = null;
      const t = await gr(this.storage, this.storageKey);
      if (this._debug("#getSession()", "session from storage", t), t !== null && (this._isValidSession(t) ? e = t : (this._debug("#getSession()", "session from storage is not valid"), await this._removeSession())), !e)
        return { data: { session: null }, error: null };
      const s = e.expires_at ? e.expires_at * 1e3 - Date.now() < Jr : !1;
      if (this._debug("#__loadSession()", `session has${s ? "" : " not"} expired`, "expires_at", e.expires_at), !s) {
        if (this.storage.isServer) {
          let a = this.suppressGetSessionWarning;
          e = new Proxy(e, {
            get: (l, u, c) => (!a && u === "user" && (console.warn("Using the user object as returned from supabase.auth.getSession() or from some supabase.auth.onAuthStateChange() events could be insecure! This value comes directly from the storage medium (usually cookies on the server) and may not be authentic. Use supabase.auth.getUser() instead which authenticates the data by contacting the Supabase Auth server."), a = !0, this.suppressGetSessionWarning = !0), Reflect.get(l, u, c))
          });
        }
        return { data: { session: e }, error: null };
      }
      const { session: n, error: i } = await this._callRefreshToken(e.refresh_token);
      return i ? { data: { session: null }, error: i } : { data: { session: n }, error: null };
    } finally {
      this._debug("#__loadSession()", "end");
    }
  }
  /**
   * Gets the current user details if there is an existing session. This method
   * performs a network request to the Supabase Auth server, so the returned
   * value is authentic and can be used to base authorization rules on.
   *
   * @param jwt Takes in an optional access token JWT. If no JWT is provided, the JWT from the current session is used.
   */
  async getUser(e) {
    return e ? await this._getUser(e) : (await this.initializePromise, await this._acquireLock(-1, async () => await this._getUser()));
  }
  async _getUser(e) {
    try {
      return e ? await D(this.fetch, "GET", `${this.url}/user`, {
        headers: this.headers,
        jwt: e,
        xform: De
      }) : await this._useSession(async (t) => {
        var s, n, i;
        const { data: a, error: o } = t;
        if (o)
          throw o;
        return !(!((s = a.session) === null || s === void 0) && s.access_token) && !this.hasCustomAuthorizationHeader ? { data: { user: null }, error: new $e() } : await D(this.fetch, "GET", `${this.url}/user`, {
          headers: this.headers,
          jwt: (i = (n = a.session) === null || n === void 0 ? void 0 : n.access_token) !== null && i !== void 0 ? i : void 0,
          xform: De
        });
      });
    } catch (t) {
      if (A(t))
        return gc(t) && (await this._removeSession(), await vr(this.storage, `${this.storageKey}-code-verifier`)), { data: { user: null }, error: t };
      throw t;
    }
  }
  /**
   * Updates user data for a logged in user.
   */
  async updateUser(e, t = {}) {
    return await this.initializePromise, await this._acquireLock(-1, async () => await this._updateUser(e, t));
  }
  async _updateUser(e, t = {}) {
    try {
      return await this._useSession(async (s) => {
        const { data: n, error: i } = s;
        if (i)
          throw i;
        if (!n.session)
          throw new $e();
        const a = n.session;
        let o = null, l = null;
        this.flowType === "pkce" && e.email != null && ([o, l] = await vt(this.storage, this.storageKey));
        const { data: u, error: c } = await D(this.fetch, "PUT", `${this.url}/user`, {
          headers: this.headers,
          redirectTo: t == null ? void 0 : t.emailRedirectTo,
          body: Object.assign(Object.assign({}, e), { code_challenge: o, code_challenge_method: l }),
          jwt: a.access_token,
          xform: De
        });
        if (c)
          throw c;
        return a.user = u.user, await this._saveSession(a), await this._notifyAllSubscribers("USER_UPDATED", a), { data: { user: a.user }, error: null };
      });
    } catch (s) {
      if (A(s))
        return { data: { user: null }, error: s };
      throw s;
    }
  }
  /**
   * Sets the session data from the current session. If the current session is expired, setSession will take care of refreshing it to obtain a new session.
   * If the refresh token or access token in the current session is invalid, an error will be thrown.
   * @param currentSession The current session that minimally contains an access token and refresh token.
   */
  async setSession(e) {
    return await this.initializePromise, await this._acquireLock(-1, async () => await this._setSession(e));
  }
  async _setSession(e) {
    try {
      if (!e.access_token || !e.refresh_token)
        throw new $e();
      const t = Date.now() / 1e3;
      let s = t, n = !0, i = null;
      const { payload: a } = Xr(e.access_token);
      if (a.exp && (s = a.exp, n = s <= t), n) {
        const { session: o, error: l } = await this._callRefreshToken(e.refresh_token);
        if (l)
          return { data: { user: null, session: null }, error: l };
        if (!o)
          return { data: { user: null, session: null }, error: null };
        i = o;
      } else {
        const { data: o, error: l } = await this._getUser(e.access_token);
        if (l)
          throw l;
        i = {
          access_token: e.access_token,
          refresh_token: e.refresh_token,
          user: o.user,
          token_type: "bearer",
          expires_in: s - t,
          expires_at: s
        }, await this._saveSession(i), await this._notifyAllSubscribers("SIGNED_IN", i);
      }
      return { data: { user: i.user, session: i }, error: null };
    } catch (t) {
      if (A(t))
        return { data: { session: null, user: null }, error: t };
      throw t;
    }
  }
  /**
   * Returns a new session, regardless of expiry status.
   * Takes in an optional current session. If not passed in, then refreshSession() will attempt to retrieve it from getSession().
   * If the current session's refresh token is invalid, an error will be thrown.
   * @param currentSession The current session. If passed in, it must contain a refresh token.
   */
  async refreshSession(e) {
    return await this.initializePromise, await this._acquireLock(-1, async () => await this._refreshSession(e));
  }
  async _refreshSession(e) {
    try {
      return await this._useSession(async (t) => {
        var s;
        if (!e) {
          const { data: a, error: o } = t;
          if (o)
            throw o;
          e = (s = a.session) !== null && s !== void 0 ? s : void 0;
        }
        if (!(e != null && e.refresh_token))
          throw new $e();
        const { session: n, error: i } = await this._callRefreshToken(e.refresh_token);
        return i ? { data: { user: null, session: null }, error: i } : n ? { data: { user: n.user, session: n }, error: null } : { data: { user: null, session: null }, error: null };
      });
    } catch (t) {
      if (A(t))
        return { data: { user: null, session: null }, error: t };
      throw t;
    }
  }
  /**
   * Gets the session data from a URL string
   */
  async _getSessionFromURL(e, t) {
    try {
      if (!_e())
        throw new pr("No browser detected.");
      if (e.error || e.error_description || e.error_code)
        throw new pr(e.error_description || "Error in URL with unspecified error_description", {
          error: e.error || "unspecified_error",
          code: e.error_code || "unspecified_code"
        });
      switch (t) {
        case "implicit":
          if (this.flowType === "pkce")
            throw new In("Not a valid PKCE flow url.");
          break;
        case "pkce":
          if (this.flowType === "implicit")
            throw new pr("Not a valid implicit grant flow url.");
          break;
        default:
      }
      if (t === "pkce") {
        if (this._debug("#_initialize()", "begin", "is PKCE flow", !0), !e.code)
          throw new In("No code detected.");
        const { data: C, error: j } = await this._exchangeCodeForSession(e.code);
        if (j)
          throw j;
        const R = new URL(window.location.href);
        return R.searchParams.delete("code"), window.history.replaceState(window.history.state, "", R.toString()), { data: { session: C.session, redirectType: null }, error: null };
      }
      const { provider_token: s, provider_refresh_token: n, access_token: i, refresh_token: a, expires_in: o, expires_at: l, token_type: u } = e;
      if (!i || !o || !a || !u)
        throw new pr("No session defined in URL");
      const c = Math.round(Date.now() / 1e3), h = parseInt(o);
      let m = c + h;
      l && (m = parseInt(l));
      const p = m - c;
      p * 1e3 <= bt && console.warn(`@supabase/gotrue-js: Session as retrieved from URL expires in ${p}s, should have been closer to ${h}s`);
      const y = m - h;
      c - y >= 120 ? console.warn("@supabase/gotrue-js: Session as retrieved from URL was issued over 120s ago, URL could be stale", y, m, c) : c - y < 0 && console.warn("@supabase/gotrue-js: Session as retrieved from URL was issued in the future? Check the device clock for skew", y, m, c);
      const { data: x, error: g } = await this._getUser(i);
      if (g)
        throw g;
      const k = {
        provider_token: s,
        provider_refresh_token: n,
        access_token: i,
        expires_in: h,
        expires_at: m,
        refresh_token: a,
        token_type: u,
        user: x.user
      };
      return window.location.hash = "", this._debug("#_getSessionFromURL()", "clearing window.location.hash"), { data: { session: k, redirectType: e.type }, error: null };
    } catch (s) {
      if (A(s))
        return { data: { session: null, redirectType: null }, error: s };
      throw s;
    }
  }
  /**
   * Checks if the current URL contains parameters given by an implicit oauth grant flow (https://www.rfc-editor.org/rfc/rfc6749.html#section-4.2)
   */
  _isImplicitGrantCallback(e) {
    return !!(e.access_token || e.error_description);
  }
  /**
   * Checks if the current URL and backing storage contain parameters given by a PKCE flow
   */
  async _isPKCECallback(e) {
    const t = await gr(this.storage, `${this.storageKey}-code-verifier`);
    return !!(e.code && t);
  }
  /**
   * Inside a browser context, `signOut()` will remove the logged in user from the browser session and log them out - removing all items from localstorage and then trigger a `"SIGNED_OUT"` event.
   *
   * For server-side management, you can revoke all refresh tokens for a user by passing a user's JWT through to `auth.api.signOut(JWT: string)`.
   * There is no way to revoke a user's access token jwt until it expires. It is recommended to set a shorter expiry on the jwt for this reason.
   *
   * If using `others` scope, no `SIGNED_OUT` event is fired!
   */
  async signOut(e = { scope: "global" }) {
    return await this.initializePromise, await this._acquireLock(-1, async () => await this._signOut(e));
  }
  async _signOut({ scope: e } = { scope: "global" }) {
    return await this._useSession(async (t) => {
      var s;
      const { data: n, error: i } = t;
      if (i)
        return { error: i };
      const a = (s = n.session) === null || s === void 0 ? void 0 : s.access_token;
      if (a) {
        const { error: o } = await this.admin.signOut(a, e);
        if (o && !(pc(o) && (o.status === 404 || o.status === 401 || o.status === 403)))
          return { error: o };
      }
      return e !== "others" && (await this._removeSession(), await vr(this.storage, `${this.storageKey}-code-verifier`)), { error: null };
    });
  }
  /**
   * Receive a notification every time an auth event happens.
   * @param callback A callback function to be invoked when an auth event happens.
   */
  onAuthStateChange(e) {
    const t = Ec(), s = {
      id: t,
      callback: e,
      unsubscribe: () => {
        this._debug("#unsubscribe()", "state change callback with id removed", t), this.stateChangeEmitters.delete(t);
      }
    };
    return this._debug("#onAuthStateChange()", "registered callback with id", t), this.stateChangeEmitters.set(t, s), (async () => (await this.initializePromise, await this._acquireLock(-1, async () => {
      this._emitInitialSession(t);
    })))(), { data: { subscription: s } };
  }
  async _emitInitialSession(e) {
    return await this._useSession(async (t) => {
      var s, n;
      try {
        const { data: { session: i }, error: a } = t;
        if (a)
          throw a;
        await ((s = this.stateChangeEmitters.get(e)) === null || s === void 0 ? void 0 : s.callback("INITIAL_SESSION", i)), this._debug("INITIAL_SESSION", "callback id", e, "session", i);
      } catch (i) {
        await ((n = this.stateChangeEmitters.get(e)) === null || n === void 0 ? void 0 : n.callback("INITIAL_SESSION", null)), this._debug("INITIAL_SESSION", "callback id", e, "error", i), console.error(i);
      }
    });
  }
  /**
   * Sends a password reset request to an email address. This method supports the PKCE flow.
   *
   * @param email The email address of the user.
   * @param options.redirectTo The URL to send the user to after they click the password reset link.
   * @param options.captchaToken Verification token received when the user completes the captcha on the site.
   */
  async resetPasswordForEmail(e, t = {}) {
    let s = null, n = null;
    this.flowType === "pkce" && ([s, n] = await vt(
      this.storage,
      this.storageKey,
      !0
      // isPasswordRecovery
    ));
    try {
      return await D(this.fetch, "POST", `${this.url}/recover`, {
        body: {
          email: e,
          code_challenge: s,
          code_challenge_method: n,
          gotrue_meta_security: { captcha_token: t.captchaToken }
        },
        headers: this.headers,
        redirectTo: t.redirectTo
      });
    } catch (i) {
      if (A(i))
        return { data: null, error: i };
      throw i;
    }
  }
  /**
   * Gets all the identities linked to a user.
   */
  async getUserIdentities() {
    var e;
    try {
      const { data: t, error: s } = await this.getUser();
      if (s)
        throw s;
      return { data: { identities: (e = t.user.identities) !== null && e !== void 0 ? e : [] }, error: null };
    } catch (t) {
      if (A(t))
        return { data: null, error: t };
      throw t;
    }
  }
  /**
   * Links an oauth identity to an existing user.
   * This method supports the PKCE flow.
   */
  async linkIdentity(e) {
    var t;
    try {
      const { data: s, error: n } = await this._useSession(async (i) => {
        var a, o, l, u, c;
        const { data: h, error: m } = i;
        if (m)
          throw m;
        const p = await this._getUrlForProvider(`${this.url}/user/identities/authorize`, e.provider, {
          redirectTo: (a = e.options) === null || a === void 0 ? void 0 : a.redirectTo,
          scopes: (o = e.options) === null || o === void 0 ? void 0 : o.scopes,
          queryParams: (l = e.options) === null || l === void 0 ? void 0 : l.queryParams,
          skipBrowserRedirect: !0
        });
        return await D(this.fetch, "GET", p, {
          headers: this.headers,
          jwt: (c = (u = h.session) === null || u === void 0 ? void 0 : u.access_token) !== null && c !== void 0 ? c : void 0
        });
      });
      if (n)
        throw n;
      return _e() && !(!((t = e.options) === null || t === void 0) && t.skipBrowserRedirect) && window.location.assign(s == null ? void 0 : s.url), { data: { provider: e.provider, url: s == null ? void 0 : s.url }, error: null };
    } catch (s) {
      if (A(s))
        return { data: { provider: e.provider, url: null }, error: s };
      throw s;
    }
  }
  /**
   * Unlinks an identity from a user by deleting it. The user will no longer be able to sign in with that identity once it's unlinked.
   */
  async unlinkIdentity(e) {
    try {
      return await this._useSession(async (t) => {
        var s, n;
        const { data: i, error: a } = t;
        if (a)
          throw a;
        return await D(this.fetch, "DELETE", `${this.url}/user/identities/${e.identity_id}`, {
          headers: this.headers,
          jwt: (n = (s = i.session) === null || s === void 0 ? void 0 : s.access_token) !== null && n !== void 0 ? n : void 0
        });
      });
    } catch (t) {
      if (A(t))
        return { data: null, error: t };
      throw t;
    }
  }
  /**
   * Generates a new JWT.
   * @param refreshToken A valid refresh token that was returned on login.
   */
  async _refreshAccessToken(e) {
    const t = `#_refreshAccessToken(${e.substring(0, 5)}...)`;
    this._debug(t, "begin");
    try {
      const s = Date.now();
      return await Tc(async (n) => (n > 0 && await Rc(200 * Math.pow(2, n - 1)), this._debug(t, "refreshing attempt", n), await D(this.fetch, "POST", `${this.url}/token?grant_type=refresh_token`, {
        body: { refresh_token: e },
        headers: this.headers,
        xform: Ie
      })), (n, i) => {
        const a = 200 * Math.pow(2, n);
        return i && Yr(i) && // retryable only if the request can be sent before the backoff overflows the tick duration
        Date.now() + a - s < bt;
      });
    } catch (s) {
      if (this._debug(t, "error", s), A(s))
        return { data: { session: null, user: null }, error: s };
      throw s;
    } finally {
      this._debug(t, "end");
    }
  }
  _isValidSession(e) {
    return typeof e == "object" && e !== null && "access_token" in e && "refresh_token" in e && "expires_at" in e;
  }
  async _handleProviderSignIn(e, t) {
    const s = await this._getUrlForProvider(`${this.url}/authorize`, e, {
      redirectTo: t.redirectTo,
      scopes: t.scopes,
      queryParams: t.queryParams
    });
    return this._debug("#_handleProviderSignIn()", "provider", e, "options", t, "url", s), _e() && !t.skipBrowserRedirect && window.location.assign(s), { data: { provider: e, url: s }, error: null };
  }
  /**
   * Recovers the session from LocalStorage and refreshes the token
   * Note: this method is async to accommodate for AsyncStorage e.g. in React native.
   */
  async _recoverAndRefresh() {
    var e;
    const t = "#_recoverAndRefresh()";
    this._debug(t, "begin");
    try {
      const s = await gr(this.storage, this.storageKey);
      if (this._debug(t, "session from storage", s), !this._isValidSession(s)) {
        this._debug(t, "session is not valid"), s !== null && await this._removeSession();
        return;
      }
      const n = ((e = s.expires_at) !== null && e !== void 0 ? e : 1 / 0) * 1e3 - Date.now() < Jr;
      if (this._debug(t, `session has${n ? "" : " not"} expired with margin of ${Jr}s`), n) {
        if (this.autoRefreshToken && s.refresh_token) {
          const { error: i } = await this._callRefreshToken(s.refresh_token);
          i && (console.error(i), Yr(i) || (this._debug(t, "refresh failed with a non-retryable error, removing the session", i), await this._removeSession()));
        }
      } else
        await this._notifyAllSubscribers("SIGNED_IN", s);
    } catch (s) {
      this._debug(t, "error", s), console.error(s);
      return;
    } finally {
      this._debug(t, "end");
    }
  }
  async _callRefreshToken(e) {
    var t, s;
    if (!e)
      throw new $e();
    if (this.refreshingDeferred)
      return this.refreshingDeferred.promise;
    const n = `#_callRefreshToken(${e.substring(0, 5)}...)`;
    this._debug(n, "begin");
    try {
      this.refreshingDeferred = new Or();
      const { data: i, error: a } = await this._refreshAccessToken(e);
      if (a)
        throw a;
      if (!i.session)
        throw new $e();
      await this._saveSession(i.session), await this._notifyAllSubscribers("TOKEN_REFRESHED", i.session);
      const o = { session: i.session, error: null };
      return this.refreshingDeferred.resolve(o), o;
    } catch (i) {
      if (this._debug(n, "error", i), A(i)) {
        const a = { session: null, error: i };
        return Yr(i) || await this._removeSession(), (t = this.refreshingDeferred) === null || t === void 0 || t.resolve(a), a;
      }
      throw (s = this.refreshingDeferred) === null || s === void 0 || s.reject(i), i;
    } finally {
      this.refreshingDeferred = null, this._debug(n, "end");
    }
  }
  async _notifyAllSubscribers(e, t, s = !0) {
    const n = `#_notifyAllSubscribers(${e})`;
    this._debug(n, "begin", t, `broadcast = ${s}`);
    try {
      this.broadcastChannel && s && this.broadcastChannel.postMessage({ event: e, session: t });
      const i = [], a = Array.from(this.stateChangeEmitters.values()).map(async (o) => {
        try {
          await o.callback(e, t);
        } catch (l) {
          i.push(l);
        }
      });
      if (await Promise.all(a), i.length > 0) {
        for (let o = 0; o < i.length; o += 1)
          console.error(i[o]);
        throw i[0];
      }
    } finally {
      this._debug(n, "end");
    }
  }
  /**
   * set currentSession and currentUser
   * process to _startAutoRefreshToken if possible
   */
  async _saveSession(e) {
    this._debug("#_saveSession()", e), this.suppressGetSessionWarning = !0, await Ui(this.storage, this.storageKey, e);
  }
  async _removeSession() {
    this._debug("#_removeSession()"), await vr(this.storage, this.storageKey), await this._notifyAllSubscribers("SIGNED_OUT", null);
  }
  /**
   * Removes any registered visibilitychange callback.
   *
   * {@see #startAutoRefresh}
   * {@see #stopAutoRefresh}
   */
  _removeVisibilityChangedCallback() {
    this._debug("#_removeVisibilityChangedCallback()");
    const e = this.visibilityChangedCallback;
    this.visibilityChangedCallback = null;
    try {
      e && _e() && (window != null && window.removeEventListener) && window.removeEventListener("visibilitychange", e);
    } catch (t) {
      console.error("removing visibilitychange callback failed", t);
    }
  }
  /**
   * This is the private implementation of {@link #startAutoRefresh}. Use this
   * within the library.
   */
  async _startAutoRefresh() {
    await this._stopAutoRefresh(), this._debug("#_startAutoRefresh()");
    const e = setInterval(() => this._autoRefreshTokenTick(), bt);
    this.autoRefreshTicker = e, e && typeof e == "object" && typeof e.unref == "function" ? e.unref() : typeof Deno < "u" && typeof Deno.unrefTimer == "function" && Deno.unrefTimer(e), setTimeout(async () => {
      await this.initializePromise, await this._autoRefreshTokenTick();
    }, 0);
  }
  /**
   * This is the private implementation of {@link #stopAutoRefresh}. Use this
   * within the library.
   */
  async _stopAutoRefresh() {
    this._debug("#_stopAutoRefresh()");
    const e = this.autoRefreshTicker;
    this.autoRefreshTicker = null, e && clearInterval(e);
  }
  /**
   * Starts an auto-refresh process in the background. The session is checked
   * every few seconds. Close to the time of expiration a process is started to
   * refresh the session. If refreshing fails it will be retried for as long as
   * necessary.
   *
   * If you set the {@link GoTrueClientOptions#autoRefreshToken} you don't need
   * to call this function, it will be called for you.
   *
   * On browsers the refresh process works only when the tab/window is in the
   * foreground to conserve resources as well as prevent race conditions and
   * flooding auth with requests. If you call this method any managed
   * visibility change callback will be removed and you must manage visibility
   * changes on your own.
   *
   * On non-browser platforms the refresh process works *continuously* in the
   * background, which may not be desirable. You should hook into your
   * platform's foreground indication mechanism and call these methods
   * appropriately to conserve resources.
   *
   * {@see #stopAutoRefresh}
   */
  async startAutoRefresh() {
    this._removeVisibilityChangedCallback(), await this._startAutoRefresh();
  }
  /**
   * Stops an active auto refresh process running in the background (if any).
   *
   * If you call this method any managed visibility change callback will be
   * removed and you must manage visibility changes on your own.
   *
   * See {@link #startAutoRefresh} for more details.
   */
  async stopAutoRefresh() {
    this._removeVisibilityChangedCallback(), await this._stopAutoRefresh();
  }
  /**
   * Runs the auto refresh token tick.
   */
  async _autoRefreshTokenTick() {
    this._debug("#_autoRefreshTokenTick()", "begin");
    try {
      await this._acquireLock(0, async () => {
        try {
          const e = Date.now();
          try {
            return await this._useSession(async (t) => {
              const { data: { session: s } } = t;
              if (!s || !s.refresh_token || !s.expires_at) {
                this._debug("#_autoRefreshTokenTick()", "no session");
                return;
              }
              const n = Math.floor((s.expires_at * 1e3 - e) / bt);
              this._debug("#_autoRefreshTokenTick()", `access token expires in ${n} ticks, a tick lasts ${bt}ms, refresh threshold is ${ps} ticks`), n <= ps && await this._callRefreshToken(s.refresh_token);
            });
          } catch (t) {
            console.error("Auto refresh tick failed with error. This is likely a transient error.", t);
          }
        } finally {
          this._debug("#_autoRefreshTokenTick()", "end");
        }
      });
    } catch (e) {
      if (e.isAcquireTimeout || e instanceof Mi)
        this._debug("auto refresh token tick lock not available");
      else
        throw e;
    }
  }
  /**
   * Registers callbacks on the browser / platform, which in-turn run
   * algorithms when the browser window/tab are in foreground. On non-browser
   * platforms it assumes always foreground.
   */
  async _handleVisibilityChange() {
    if (this._debug("#_handleVisibilityChange()"), !_e() || !(window != null && window.addEventListener))
      return this.autoRefreshToken && this.startAutoRefresh(), !1;
    try {
      this.visibilityChangedCallback = async () => await this._onVisibilityChanged(!1), window == null || window.addEventListener("visibilitychange", this.visibilityChangedCallback), await this._onVisibilityChanged(!0);
    } catch (e) {
      console.error("_handleVisibilityChange", e);
    }
  }
  /**
   * Callback registered with `window.addEventListener('visibilitychange')`.
   */
  async _onVisibilityChanged(e) {
    const t = `#_onVisibilityChanged(${e})`;
    this._debug(t, "visibilityState", document.visibilityState), document.visibilityState === "visible" ? (this.autoRefreshToken && this._startAutoRefresh(), e || (await this.initializePromise, await this._acquireLock(-1, async () => {
      if (document.visibilityState !== "visible") {
        this._debug(t, "acquired the lock to recover the session, but the browser visibilityState is no longer visible, aborting");
        return;
      }
      await this._recoverAndRefresh();
    }))) : document.visibilityState === "hidden" && this.autoRefreshToken && this._stopAutoRefresh();
  }
  /**
   * Generates the relevant login URL for a third-party provider.
   * @param options.redirectTo A URL or mobile address to send the user to after they are confirmed.
   * @param options.scopes A space-separated list of scopes granted to the OAuth application.
   * @param options.queryParams An object of key-value pairs containing query parameters granted to the OAuth application.
   */
  async _getUrlForProvider(e, t, s) {
    const n = [`provider=${encodeURIComponent(t)}`];
    if (s != null && s.redirectTo && n.push(`redirect_to=${encodeURIComponent(s.redirectTo)}`), s != null && s.scopes && n.push(`scopes=${encodeURIComponent(s.scopes)}`), this.flowType === "pkce") {
      const [i, a] = await vt(this.storage, this.storageKey), o = new URLSearchParams({
        code_challenge: `${encodeURIComponent(i)}`,
        code_challenge_method: `${encodeURIComponent(a)}`
      });
      n.push(o.toString());
    }
    if (s != null && s.queryParams) {
      const i = new URLSearchParams(s.queryParams);
      n.push(i.toString());
    }
    return s != null && s.skipBrowserRedirect && n.push(`skip_http_redirect=${s.skipBrowserRedirect}`), `${e}?${n.join("&")}`;
  }
  async _unenroll(e) {
    try {
      return await this._useSession(async (t) => {
        var s;
        const { data: n, error: i } = t;
        return i ? { data: null, error: i } : await D(this.fetch, "DELETE", `${this.url}/factors/${e.factorId}`, {
          headers: this.headers,
          jwt: (s = n == null ? void 0 : n.session) === null || s === void 0 ? void 0 : s.access_token
        });
      });
    } catch (t) {
      if (A(t))
        return { data: null, error: t };
      throw t;
    }
  }
  async _enroll(e) {
    try {
      return await this._useSession(async (t) => {
        var s, n;
        const { data: i, error: a } = t;
        if (a)
          return { data: null, error: a };
        const o = Object.assign({ friendly_name: e.friendlyName, factor_type: e.factorType }, e.factorType === "phone" ? { phone: e.phone } : { issuer: e.issuer }), { data: l, error: u } = await D(this.fetch, "POST", `${this.url}/factors`, {
          body: o,
          headers: this.headers,
          jwt: (s = i == null ? void 0 : i.session) === null || s === void 0 ? void 0 : s.access_token
        });
        return u ? { data: null, error: u } : (e.factorType === "totp" && (!((n = l == null ? void 0 : l.totp) === null || n === void 0) && n.qr_code) && (l.totp.qr_code = `data:image/svg+xml;utf-8,${l.totp.qr_code}`), { data: l, error: null });
      });
    } catch (t) {
      if (A(t))
        return { data: null, error: t };
      throw t;
    }
  }
  /**
   * {@see GoTrueMFAApi#verify}
   */
  async _verify(e) {
    return this._acquireLock(-1, async () => {
      try {
        return await this._useSession(async (t) => {
          var s;
          const { data: n, error: i } = t;
          if (i)
            return { data: null, error: i };
          const { data: a, error: o } = await D(this.fetch, "POST", `${this.url}/factors/${e.factorId}/verify`, {
            body: { code: e.code, challenge_id: e.challengeId },
            headers: this.headers,
            jwt: (s = n == null ? void 0 : n.session) === null || s === void 0 ? void 0 : s.access_token
          });
          return o ? { data: null, error: o } : (await this._saveSession(Object.assign({ expires_at: Math.round(Date.now() / 1e3) + a.expires_in }, a)), await this._notifyAllSubscribers("MFA_CHALLENGE_VERIFIED", a), { data: a, error: o });
        });
      } catch (t) {
        if (A(t))
          return { data: null, error: t };
        throw t;
      }
    });
  }
  /**
   * {@see GoTrueMFAApi#challenge}
   */
  async _challenge(e) {
    return this._acquireLock(-1, async () => {
      try {
        return await this._useSession(async (t) => {
          var s;
          const { data: n, error: i } = t;
          return i ? { data: null, error: i } : await D(this.fetch, "POST", `${this.url}/factors/${e.factorId}/challenge`, {
            body: { channel: e.channel },
            headers: this.headers,
            jwt: (s = n == null ? void 0 : n.session) === null || s === void 0 ? void 0 : s.access_token
          });
        });
      } catch (t) {
        if (A(t))
          return { data: null, error: t };
        throw t;
      }
    });
  }
  /**
   * {@see GoTrueMFAApi#challengeAndVerify}
   */
  async _challengeAndVerify(e) {
    const { data: t, error: s } = await this._challenge({
      factorId: e.factorId
    });
    return s ? { data: null, error: s } : await this._verify({
      factorId: e.factorId,
      challengeId: t.id,
      code: e.code
    });
  }
  /**
   * {@see GoTrueMFAApi#listFactors}
   */
  async _listFactors() {
    const { data: { user: e }, error: t } = await this.getUser();
    if (t)
      return { data: null, error: t };
    const s = (e == null ? void 0 : e.factors) || [], n = s.filter((a) => a.factor_type === "totp" && a.status === "verified"), i = s.filter((a) => a.factor_type === "phone" && a.status === "verified");
    return {
      data: {
        all: s,
        totp: n,
        phone: i
      },
      error: null
    };
  }
  /**
   * {@see GoTrueMFAApi#getAuthenticatorAssuranceLevel}
   */
  async _getAuthenticatorAssuranceLevel() {
    return this._acquireLock(-1, async () => await this._useSession(async (e) => {
      var t, s;
      const { data: { session: n }, error: i } = e;
      if (i)
        return { data: null, error: i };
      if (!n)
        return {
          data: { currentLevel: null, nextLevel: null, currentAuthenticationMethods: [] },
          error: null
        };
      const { payload: a } = Xr(n.access_token);
      let o = null;
      a.aal && (o = a.aal);
      let l = o;
      ((s = (t = n.user.factors) === null || t === void 0 ? void 0 : t.filter((h) => h.status === "verified")) !== null && s !== void 0 ? s : []).length > 0 && (l = "aal2");
      const c = a.amr || [];
      return { data: { currentLevel: o, nextLevel: l, currentAuthenticationMethods: c }, error: null };
    }));
  }
  async fetchJwk(e, t = { keys: [] }) {
    let s = t.keys.find((a) => a.kid === e);
    if (s || (s = this.jwks.keys.find((a) => a.kid === e), s && this.jwks_cached_at + fc > Date.now()))
      return s;
    const { data: n, error: i } = await D(this.fetch, "GET", `${this.url}/.well-known/jwks.json`, {
      headers: this.headers
    });
    if (i)
      throw i;
    if (!n.keys || n.keys.length === 0)
      throw new Jt("JWKS is empty");
    if (this.jwks = n, this.jwks_cached_at = Date.now(), s = n.keys.find((a) => a.kid === e), !s)
      throw new Jt("No matching signing key found in JWKS");
    return s;
  }
  /**
   * @experimental This method may change in future versions.
   * @description Gets the claims from a JWT. If the JWT is symmetric JWTs, it will call getUser() to verify against the server. If the JWT is asymmetric, it will be verified against the JWKS using the WebCrypto API.
   */
  async getClaims(e, t = { keys: [] }) {
    try {
      let s = e;
      if (!s) {
        const { data: p, error: y } = await this.getSession();
        if (y || !p.session)
          return { data: null, error: y };
        s = p.session.access_token;
      }
      const { header: n, payload: i, signature: a, raw: { header: o, payload: l } } = Xr(s);
      if (Ic(i.exp), !n.kid || n.alg === "HS256" || !("crypto" in globalThis && "subtle" in globalThis.crypto)) {
        const { error: p } = await this.getUser(s);
        if (p)
          throw p;
        return {
          data: {
            claims: i,
            header: n,
            signature: a
          },
          error: null
        };
      }
      const u = Fc(n.alg), c = await this.fetchJwk(n.kid, t), h = await crypto.subtle.importKey("jwk", c, u, !0, [
        "verify"
      ]);
      if (!await crypto.subtle.verify(u, h, a, jc(`${o}.${l}`)))
        throw new Jt("Invalid JWT signature");
      return {
        data: {
          claims: i,
          header: n,
          signature: a
        },
        error: null
      };
    } catch (s) {
      if (A(s))
        return { data: null, error: s };
      throw s;
    }
  }
}
Xt.nextInstanceID = 0;
const Zc = Xt;
class eu extends Zc {
  constructor(e) {
    super(e);
  }
}
var tu = function(r, e, t, s) {
  function n(i) {
    return i instanceof t ? i : new t(function(a) {
      a(i);
    });
  }
  return new (t || (t = Promise))(function(i, a) {
    function o(c) {
      try {
        u(s.next(c));
      } catch (h) {
        a(h);
      }
    }
    function l(c) {
      try {
        u(s.throw(c));
      } catch (h) {
        a(h);
      }
    }
    function u(c) {
      c.done ? i(c.value) : n(c.value).then(o, l);
    }
    u((s = s.apply(r, e || [])).next());
  });
};
class ru {
  /**
   * Create a new client for use in the browser.
   * @param supabaseUrl The unique Supabase URL which is supplied when you create a new project in your project dashboard.
   * @param supabaseKey The unique Supabase Key which is supplied when you create a new project in your project dashboard.
   * @param options.db.schema You can switch in between schemas. The schema needs to be on the list of exposed schemas inside Supabase.
   * @param options.auth.autoRefreshToken Set to "true" if you want to automatically refresh the token before expiring.
   * @param options.auth.persistSession Set to "true" if you want to automatically save the user session into local storage.
   * @param options.auth.detectSessionInUrl Set to "true" if you want to automatically detects OAuth grants in the URL and signs in the user.
   * @param options.realtime Options passed along to realtime-js constructor.
   * @param options.global.fetch A custom fetch implementation.
   * @param options.global.headers Any additional headers to send with each network request.
   */
  constructor(e, t, s) {
    var n, i, a;
    if (this.supabaseUrl = e, this.supabaseKey = t, !e)
      throw new Error("supabaseUrl is required.");
    if (!t)
      throw new Error("supabaseKey is required.");
    const o = oc(e);
    this.realtimeUrl = `${o}/realtime/v1`.replace(/^http/i, "ws"), this.authUrl = `${o}/auth/v1`, this.storageUrl = `${o}/storage/v1`, this.functionsUrl = `${o}/functions/v1`;
    const l = `sb-${new URL(this.authUrl).hostname.split(".")[0]}-auth-token`, u = {
      db: Zl,
      realtime: tc,
      auth: Object.assign(Object.assign({}, ec), { storageKey: l }),
      global: Xl
    }, c = lc(s ?? {}, u);
    this.storageKey = (n = c.auth.storageKey) !== null && n !== void 0 ? n : "", this.headers = (i = c.global.headers) !== null && i !== void 0 ? i : {}, c.accessToken ? (this.accessToken = c.accessToken, this.auth = new Proxy({}, {
      get: (h, m) => {
        throw new Error(`@supabase/supabase-js: Supabase Client is configured with the accessToken option, accessing supabase.auth.${String(m)} is not possible`);
      }
    })) : this.auth = this._initSupabaseAuthClient((a = c.auth) !== null && a !== void 0 ? a : {}, this.headers, c.global.fetch), this.fetch = ic(t, this._getAccessToken.bind(this), c.global.fetch), this.realtime = this._initRealtimeClient(Object.assign({ headers: this.headers, accessToken: this._getAccessToken.bind(this) }, c.realtime)), this.rest = new wl(`${o}/rest/v1`, {
      headers: this.headers,
      schema: c.db.schema,
      fetch: this.fetch
    }), c.accessToken || this._listenForAuthEvents();
  }
  /**
   * Supabase Functions allows you to deploy and invoke edge functions.
   */
  get functions() {
    return new ll(this.functionsUrl, {
      headers: this.headers,
      customFetch: this.fetch
    });
  }
  /**
   * Supabase Storage allows you to manage user-generated content, such as photos or videos.
   */
  get storage() {
    return new Jl(this.storageUrl, this.headers, this.fetch);
  }
  /**
   * Perform a query on a table or a view.
   *
   * @param relation - The table or view name to query
   */
  from(e) {
    return this.rest.from(e);
  }
  // NOTE: signatures must be kept in sync with PostgrestClient.schema
  /**
   * Select a schema to query or perform an function (rpc) call.
   *
   * The schema needs to be on the list of exposed schemas inside Supabase.
   *
   * @param schema - The schema to query
   */
  schema(e) {
    return this.rest.schema(e);
  }
  // NOTE: signatures must be kept in sync with PostgrestClient.rpc
  /**
   * Perform a function call.
   *
   * @param fn - The function name to call
   * @param args - The arguments to pass to the function call
   * @param options - Named parameters
   * @param options.head - When set to `true`, `data` will not be returned.
   * Useful if you only need the count.
   * @param options.get - When set to `true`, the function will be called with
   * read-only access mode.
   * @param options.count - Count algorithm to use to count rows returned by the
   * function. Only applicable for [set-returning
   * functions](https://www.postgresql.org/docs/current/functions-srf.html).
   *
   * `"exact"`: Exact but slow count algorithm. Performs a `COUNT(*)` under the
   * hood.
   *
   * `"planned"`: Approximated but fast count algorithm. Uses the Postgres
   * statistics under the hood.
   *
   * `"estimated"`: Uses exact count for low numbers and planned count for high
   * numbers.
   */
  rpc(e, t = {}, s = {}) {
    return this.rest.rpc(e, t, s);
  }
  /**
   * Creates a Realtime channel with Broadcast, Presence, and Postgres Changes.
   *
   * @param {string} name - The name of the Realtime channel.
   * @param {Object} opts - The options to pass to the Realtime channel.
   *
   */
  channel(e, t = { config: {} }) {
    return this.realtime.channel(e, t);
  }
  /**
   * Returns all Realtime channels.
   */
  getChannels() {
    return this.realtime.getChannels();
  }
  /**
   * Unsubscribes and removes Realtime channel from Realtime client.
   *
   * @param {RealtimeChannel} channel - The name of the Realtime channel.
   *
   */
  removeChannel(e) {
    return this.realtime.removeChannel(e);
  }
  /**
   * Unsubscribes and removes all Realtime channels from Realtime client.
   */
  removeAllChannels() {
    return this.realtime.removeAllChannels();
  }
  _getAccessToken() {
    var e, t;
    return tu(this, void 0, void 0, function* () {
      if (this.accessToken)
        return yield this.accessToken();
      const { data: s } = yield this.auth.getSession();
      return (t = (e = s.session) === null || e === void 0 ? void 0 : e.access_token) !== null && t !== void 0 ? t : null;
    });
  }
  _initSupabaseAuthClient({ autoRefreshToken: e, persistSession: t, detectSessionInUrl: s, storage: n, storageKey: i, flowType: a, lock: o, debug: l }, u, c) {
    const h = {
      Authorization: `Bearer ${this.supabaseKey}`,
      apikey: `${this.supabaseKey}`
    };
    return new eu({
      url: this.authUrl,
      headers: Object.assign(Object.assign({}, h), u),
      storageKey: i,
      autoRefreshToken: e,
      persistSession: t,
      detectSessionInUrl: s,
      storage: n,
      flowType: a,
      lock: o,
      debug: l,
      fetch: c,
      // auth checks if there is a custom authorizaiton header using this flag
      // so it knows whether to return an error when getUser is called with no session
      hasCustomAuthorizationHeader: "Authorization" in this.headers
    });
  }
  _initRealtimeClient(e) {
    return new $l(this.realtimeUrl, Object.assign(Object.assign({}, e), { params: Object.assign({ apikey: this.supabaseKey }, e == null ? void 0 : e.params) }));
  }
  _listenForAuthEvents() {
    return this.auth.onAuthStateChange((t, s) => {
      this._handleTokenChanged(t, "CLIENT", s == null ? void 0 : s.access_token);
    });
  }
  _handleTokenChanged(e, t, s) {
    (e === "TOKEN_REFRESHED" || e === "SIGNED_IN") && this.changedAccessToken !== s ? this.changedAccessToken = s : e === "SIGNED_OUT" && (this.realtime.setAuth(), t == "STORAGE" && this.auth.signOut(), this.changedAccessToken = void 0);
  }
}
const su = (r, e, t) => new ru(r, e, t), nu = (r, e) => su(r, e);
function iu(r, e = "", t = "") {
  if (!r)
    throw new Error("projectId is required");
  const s = nu(e, t);
  return {
    articles: Xo(s, r),
    gallery: el(s, r),
    products: tl(s, r),
    testimonials: rl(s, r),
    auth: Zo(s, r)
  };
}
function Wn(r, e) {
  if (typeof r == "function")
    return r(e);
  r != null && (r.current = e);
}
function au(...r) {
  return (e) => {
    let t = !1;
    const s = r.map((n) => {
      const i = Wn(n, e);
      return !t && typeof i == "function" && (t = !0), i;
    });
    if (t)
      return () => {
        for (let n = 0; n < s.length; n++) {
          const i = s[n];
          typeof i == "function" ? i() : Wn(r[n], null);
        }
      };
  };
}
function ou(...r) {
  return v.useCallback(au(...r), r);
}
// @__NO_SIDE_EFFECTS__
function qi(r) {
  const e = /* @__PURE__ */ cu(r), t = v.forwardRef((s, n) => {
    const { children: i, ...a } = s, o = v.Children.toArray(i), l = o.find(du);
    if (l) {
      const u = l.props.children, c = o.map((h) => h === l ? v.Children.count(u) > 1 ? v.Children.only(null) : v.isValidElement(u) ? u.props.children : null : h);
      return /* @__PURE__ */ d.jsx(e, { ...a, ref: n, children: v.isValidElement(u) ? v.cloneElement(u, void 0, c) : null });
    }
    return /* @__PURE__ */ d.jsx(e, { ...a, ref: n, children: i });
  });
  return t.displayName = `${r}.Slot`, t;
}
var lu = /* @__PURE__ */ qi("Slot");
// @__NO_SIDE_EFFECTS__
function cu(r) {
  const e = v.forwardRef((t, s) => {
    const { children: n, ...i } = t, a = v.isValidElement(n) ? fu(n) : void 0, o = ou(a, s);
    if (v.isValidElement(n)) {
      const l = hu(i, n.props);
      return n.type !== v.Fragment && (l.ref = o), v.cloneElement(n, l);
    }
    return v.Children.count(n) > 1 ? v.Children.only(null) : null;
  });
  return e.displayName = `${r}.SlotClone`, e;
}
var uu = Symbol("radix.slottable");
function du(r) {
  return v.isValidElement(r) && typeof r.type == "function" && "__radixId" in r.type && r.type.__radixId === uu;
}
function hu(r, e) {
  const t = { ...e };
  for (const s in e) {
    const n = r[s], i = e[s];
    /^on[A-Z]/.test(s) ? n && i ? t[s] = (...o) => {
      const l = i(...o);
      return n(...o), l;
    } : n && (t[s] = n) : s === "style" ? t[s] = { ...n, ...i } : s === "className" && (t[s] = [n, i].filter(Boolean).join(" "));
  }
  return { ...r, ...t };
}
function fu(r) {
  var s, n;
  let e = (s = Object.getOwnPropertyDescriptor(r.props, "ref")) == null ? void 0 : s.get, t = e && "isReactWarning" in e && e.isReactWarning;
  return t ? r.ref : (e = (n = Object.getOwnPropertyDescriptor(r, "ref")) == null ? void 0 : n.get, t = e && "isReactWarning" in e && e.isReactWarning, t ? r.props.ref : r.props.ref || r.ref);
}
function Bi(r) {
  var e, t, s = "";
  if (typeof r == "string" || typeof r == "number") s += r;
  else if (typeof r == "object") if (Array.isArray(r)) {
    var n = r.length;
    for (e = 0; e < n; e++) r[e] && (t = Bi(r[e])) && (s && (s += " "), s += t);
  } else for (t in r) r[t] && (s && (s += " "), s += t);
  return s;
}
function zi() {
  for (var r, e, t = 0, s = "", n = arguments.length; t < n; t++) (r = arguments[t]) && (e = Bi(r)) && (s && (s += " "), s += e);
  return s;
}
const Gn = (r) => typeof r == "boolean" ? `${r}` : r === 0 ? "0" : r, Hn = zi, Vi = (r, e) => (t) => {
  var s;
  if ((e == null ? void 0 : e.variants) == null) return Hn(r, t == null ? void 0 : t.class, t == null ? void 0 : t.className);
  const { variants: n, defaultVariants: i } = e, a = Object.keys(n).map((u) => {
    const c = t == null ? void 0 : t[u], h = i == null ? void 0 : i[u];
    if (c === null) return null;
    const m = Gn(c) || Gn(h);
    return n[u][m];
  }), o = t && Object.entries(t).reduce((u, c) => {
    let [h, m] = c;
    return m === void 0 || (u[h] = m), u;
  }, {}), l = e == null || (s = e.compoundVariants) === null || s === void 0 ? void 0 : s.reduce((u, c) => {
    let { class: h, className: m, ...p } = c;
    return Object.entries(p).every((y) => {
      let [x, g] = y;
      return Array.isArray(g) ? g.includes({
        ...i,
        ...o
      }[x]) : {
        ...i,
        ...o
      }[x] === g;
    }) ? [
      ...u,
      h,
      m
    ] : u;
  }, []);
  return Hn(r, a, l, t == null ? void 0 : t.class, t == null ? void 0 : t.className);
}, Ks = "-", mu = (r) => {
  const e = gu(r), {
    conflictingClassGroups: t,
    conflictingClassGroupModifiers: s
  } = r;
  return {
    getClassGroupId: (a) => {
      const o = a.split(Ks);
      return o[0] === "" && o.length !== 1 && o.shift(), Wi(o, e) || pu(a);
    },
    getConflictingClassGroupIds: (a, o) => {
      const l = t[a] || [];
      return o && s[a] ? [...l, ...s[a]] : l;
    }
  };
}, Wi = (r, e) => {
  var a;
  if (r.length === 0)
    return e.classGroupId;
  const t = r[0], s = e.nextPart.get(t), n = s ? Wi(r.slice(1), s) : void 0;
  if (n)
    return n;
  if (e.validators.length === 0)
    return;
  const i = r.join(Ks);
  return (a = e.validators.find(({
    validator: o
  }) => o(i))) == null ? void 0 : a.classGroupId;
}, Kn = /^\[(.+)\]$/, pu = (r) => {
  if (Kn.test(r)) {
    const e = Kn.exec(r)[1], t = e == null ? void 0 : e.substring(0, e.indexOf(":"));
    if (t)
      return "arbitrary.." + t;
  }
}, gu = (r) => {
  const {
    theme: e,
    prefix: t
  } = r, s = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  return yu(Object.entries(r.classGroups), t).forEach(([i, a]) => {
    ys(a, s, i, e);
  }), s;
}, ys = (r, e, t, s) => {
  r.forEach((n) => {
    if (typeof n == "string") {
      const i = n === "" ? e : Jn(e, n);
      i.classGroupId = t;
      return;
    }
    if (typeof n == "function") {
      if (vu(n)) {
        ys(n(s), e, t, s);
        return;
      }
      e.validators.push({
        validator: n,
        classGroupId: t
      });
      return;
    }
    Object.entries(n).forEach(([i, a]) => {
      ys(a, Jn(e, i), t, s);
    });
  });
}, Jn = (r, e) => {
  let t = r;
  return e.split(Ks).forEach((s) => {
    t.nextPart.has(s) || t.nextPart.set(s, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), t = t.nextPart.get(s);
  }), t;
}, vu = (r) => r.isThemeGetter, yu = (r, e) => e ? r.map(([t, s]) => {
  const n = s.map((i) => typeof i == "string" ? e + i : typeof i == "object" ? Object.fromEntries(Object.entries(i).map(([a, o]) => [e + a, o])) : i);
  return [t, n];
}) : r, bu = (r) => {
  if (r < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let e = 0, t = /* @__PURE__ */ new Map(), s = /* @__PURE__ */ new Map();
  const n = (i, a) => {
    t.set(i, a), e++, e > r && (e = 0, s = t, t = /* @__PURE__ */ new Map());
  };
  return {
    get(i) {
      let a = t.get(i);
      if (a !== void 0)
        return a;
      if ((a = s.get(i)) !== void 0)
        return n(i, a), a;
    },
    set(i, a) {
      t.has(i) ? t.set(i, a) : n(i, a);
    }
  };
}, Gi = "!", wu = (r) => {
  const {
    separator: e,
    experimentalParseClassName: t
  } = r, s = e.length === 1, n = e[0], i = e.length, a = (o) => {
    const l = [];
    let u = 0, c = 0, h;
    for (let g = 0; g < o.length; g++) {
      let k = o[g];
      if (u === 0) {
        if (k === n && (s || o.slice(g, g + i) === e)) {
          l.push(o.slice(c, g)), c = g + i;
          continue;
        }
        if (k === "/") {
          h = g;
          continue;
        }
      }
      k === "[" ? u++ : k === "]" && u--;
    }
    const m = l.length === 0 ? o : o.substring(c), p = m.startsWith(Gi), y = p ? m.substring(1) : m, x = h && h > c ? h - c : void 0;
    return {
      modifiers: l,
      hasImportantModifier: p,
      baseClassName: y,
      maybePostfixModifierPosition: x
    };
  };
  return t ? (o) => t({
    className: o,
    parseClassName: a
  }) : a;
}, xu = (r) => {
  if (r.length <= 1)
    return r;
  const e = [];
  let t = [];
  return r.forEach((s) => {
    s[0] === "[" ? (e.push(...t.sort(), s), t = []) : t.push(s);
  }), e.push(...t.sort()), e;
}, _u = (r) => ({
  cache: bu(r.cacheSize),
  parseClassName: wu(r),
  ...mu(r)
}), ju = /\s+/, ku = (r, e) => {
  const {
    parseClassName: t,
    getClassGroupId: s,
    getConflictingClassGroupIds: n
  } = e, i = [], a = r.trim().split(ju);
  let o = "";
  for (let l = a.length - 1; l >= 0; l -= 1) {
    const u = a[l], {
      modifiers: c,
      hasImportantModifier: h,
      baseClassName: m,
      maybePostfixModifierPosition: p
    } = t(u);
    let y = !!p, x = s(y ? m.substring(0, p) : m);
    if (!x) {
      if (!y) {
        o = u + (o.length > 0 ? " " + o : o);
        continue;
      }
      if (x = s(m), !x) {
        o = u + (o.length > 0 ? " " + o : o);
        continue;
      }
      y = !1;
    }
    const g = xu(c).join(":"), k = h ? g + Gi : g, C = k + x;
    if (i.includes(C))
      continue;
    i.push(C);
    const j = n(x, y);
    for (let R = 0; R < j.length; ++R) {
      const L = j[R];
      i.push(k + L);
    }
    o = u + (o.length > 0 ? " " + o : o);
  }
  return o;
};
function Eu() {
  let r = 0, e, t, s = "";
  for (; r < arguments.length; )
    (e = arguments[r++]) && (t = Hi(e)) && (s && (s += " "), s += t);
  return s;
}
const Hi = (r) => {
  if (typeof r == "string")
    return r;
  let e, t = "";
  for (let s = 0; s < r.length; s++)
    r[s] && (e = Hi(r[s])) && (t && (t += " "), t += e);
  return t;
};
function Cu(r, ...e) {
  let t, s, n, i = a;
  function a(l) {
    const u = e.reduce((c, h) => h(c), r());
    return t = _u(u), s = t.cache.get, n = t.cache.set, i = o, o(l);
  }
  function o(l) {
    const u = s(l);
    if (u)
      return u;
    const c = ku(l, t);
    return n(l, c), c;
  }
  return function() {
    return i(Eu.apply(null, arguments));
  };
}
const Y = (r) => {
  const e = (t) => t[r] || [];
  return e.isThemeGetter = !0, e;
}, Ki = /^\[(?:([a-z-]+):)?(.+)\]$/i, Su = /^\d+\/\d+$/, Ru = /* @__PURE__ */ new Set(["px", "full", "screen"]), Tu = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, Nu = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, Pu = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, Ou = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, Au = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, Ce = (r) => xt(r) || Ru.has(r) || Su.test(r), Ae = (r) => Ot(r, "length", qu), xt = (r) => !!r && !Number.isNaN(Number(r)), Zr = (r) => Ot(r, "number", xt), qt = (r) => !!r && Number.isInteger(Number(r)), Lu = (r) => r.endsWith("%") && xt(r.slice(0, -1)), O = (r) => Ki.test(r), Le = (r) => Tu.test(r), $u = /* @__PURE__ */ new Set(["length", "size", "percentage"]), Iu = (r) => Ot(r, $u, Ji), Fu = (r) => Ot(r, "position", Ji), Du = /* @__PURE__ */ new Set(["image", "url"]), Uu = (r) => Ot(r, Du, zu), Mu = (r) => Ot(r, "", Bu), Bt = () => !0, Ot = (r, e, t) => {
  const s = Ki.exec(r);
  return s ? s[1] ? typeof e == "string" ? s[1] === e : e.has(s[1]) : t(s[2]) : !1;
}, qu = (r) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  Nu.test(r) && !Pu.test(r)
), Ji = () => !1, Bu = (r) => Ou.test(r), zu = (r) => Au.test(r), Vu = () => {
  const r = Y("colors"), e = Y("spacing"), t = Y("blur"), s = Y("brightness"), n = Y("borderColor"), i = Y("borderRadius"), a = Y("borderSpacing"), o = Y("borderWidth"), l = Y("contrast"), u = Y("grayscale"), c = Y("hueRotate"), h = Y("invert"), m = Y("gap"), p = Y("gradientColorStops"), y = Y("gradientColorStopPositions"), x = Y("inset"), g = Y("margin"), k = Y("opacity"), C = Y("padding"), j = Y("saturate"), R = Y("scale"), L = Y("sepia"), X = Y("skew"), se = Y("space"), T = Y("translate"), _ = () => ["auto", "contain", "none"], N = () => ["auto", "hidden", "clip", "visible", "scroll"], W = () => ["auto", O, e], E = () => [O, e], K = () => ["", Ce, Ae], de = () => ["auto", xt, O], Pe = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], Je = () => ["solid", "dashed", "dotted", "double", "none"], Lt = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], lt = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], Oe = () => ["", "0", O], $t = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], ye = () => [xt, O];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [Bt],
      spacing: [Ce, Ae],
      blur: ["none", "", Le, O],
      brightness: ye(),
      borderColor: [r],
      borderRadius: ["none", "", "full", Le, O],
      borderSpacing: E(),
      borderWidth: K(),
      contrast: ye(),
      grayscale: Oe(),
      hueRotate: ye(),
      invert: Oe(),
      gap: E(),
      gradientColorStops: [r],
      gradientColorStopPositions: [Lu, Ae],
      inset: W(),
      margin: W(),
      opacity: ye(),
      padding: E(),
      saturate: ye(),
      scale: ye(),
      sepia: Oe(),
      skew: ye(),
      space: E(),
      translate: E()
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
        columns: [Le]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": $t()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": $t()
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
        object: [...Pe(), O]
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: N()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": N()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": N()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: _()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": _()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": _()
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
        inset: [x]
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": [x]
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": [x]
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: [x]
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: [x]
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: [x]
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: [x]
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: [x]
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: [x]
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
        z: ["auto", qt, O]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: W()
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
        grow: Oe()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: Oe()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ["first", "last", "none", qt, O]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [Bt]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", qt, O]
        }, O]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": de()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": de()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": [Bt]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [qt, O]
        }, O]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": de()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": de()
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
        justify: ["normal", ...lt()]
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
        content: ["normal", ...lt(), "baseline"]
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
        "place-content": [...lt(), "baseline"]
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
        p: [C]
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: [C]
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: [C]
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: [C]
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: [C]
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: [C]
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: [C]
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: [C]
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: [C]
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: [g]
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: [g]
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: [g]
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: [g]
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: [g]
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: [g]
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: [g]
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: [g]
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: [g]
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/space
       */
      "space-x": [{
        "space-x": [se]
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
        "space-y": [se]
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
        w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", O, e]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [O, e, "min", "max", "fit"]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [O, e, "none", "full", "min", "max", "fit", "prose", {
          screen: [Le]
        }, Le]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [O, e, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": [O, e, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [O, e, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Size
       * @see https://tailwindcss.com/docs/size
       */
      size: [{
        size: [O, e, "auto", "min", "max", "fit"]
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", Le, Ae]
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
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", Zr]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [Bt]
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
        "line-clamp": ["none", xt, Zr]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", Ce, O]
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
        placeholder: [r]
      }],
      /**
       * Placeholder Opacity
       * @see https://tailwindcss.com/docs/placeholder-opacity
       */
      "placeholder-opacity": [{
        "placeholder-opacity": [k]
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
        text: [r]
      }],
      /**
       * Text Opacity
       * @see https://tailwindcss.com/docs/text-opacity
       */
      "text-opacity": [{
        "text-opacity": [k]
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
        decoration: [...Je(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", Ce, Ae]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", Ce, O]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: [r]
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
        indent: E()
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
        "bg-opacity": [k]
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
        bg: [...Pe(), Fu]
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
        bg: ["auto", "cover", "contain", Iu]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, Uu]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: [r]
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: [y]
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: [y]
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: [y]
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: [p]
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: [p]
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: [p]
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
        "border-opacity": [k]
      }],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [...Je(), "hidden"]
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
        "divide-opacity": [k]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/divide-style
       */
      "divide-style": [{
        divide: Je()
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: [n]
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": [n]
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": [n]
      }],
      /**
       * Border Color S
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": [n]
      }],
      /**
       * Border Color E
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": [n]
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": [n]
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": [n]
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": [n]
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": [n]
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: [n]
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: ["", ...Je()]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [Ce, O]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [Ce, Ae]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: [r]
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/ring-width
       */
      "ring-w": [{
        ring: K()
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
        ring: [r]
      }],
      /**
       * Ring Opacity
       * @see https://tailwindcss.com/docs/ring-opacity
       */
      "ring-opacity": [{
        "ring-opacity": [k]
      }],
      /**
       * Ring Offset Width
       * @see https://tailwindcss.com/docs/ring-offset-width
       */
      "ring-offset-w": [{
        "ring-offset": [Ce, Ae]
      }],
      /**
       * Ring Offset Color
       * @see https://tailwindcss.com/docs/ring-offset-color
       */
      "ring-offset-color": [{
        "ring-offset": [r]
      }],
      // Effects
      /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */
      shadow: [{
        shadow: ["", "inner", "none", Le, Mu]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [Bt]
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [k]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...Lt(), "plus-lighter", "plus-darker"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": Lt()
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
        blur: [t]
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [s]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [l]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": ["", "none", Le, O]
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: [u]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [c]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: [h]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [j]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: [L]
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
        "backdrop-blur": [t]
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [s]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [l]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": [u]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [c]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": [h]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [k]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [j]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": [L]
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
        "border-spacing": [a]
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": [a]
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": [a]
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
        duration: ye()
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
        delay: ye()
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
        scale: [R]
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": [R]
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": [R]
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: [qt, O]
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": [T]
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": [T]
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": [X]
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": [X]
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
        accent: ["auto", r]
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
        caret: [r]
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
        "scroll-m": E()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": E()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": E()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": E()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": E()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": E()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": E()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": E()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": E()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": E()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": E()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": E()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": E()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": E()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": E()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": E()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": E()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": E()
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
        fill: [r, "none"]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [Ce, Ae, Zr]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: [r, "none"]
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
}, Wu = /* @__PURE__ */ Cu(Vu);
function oe(...r) {
  return Wu(zi(r));
}
const Gu = Vi(
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
), te = v.forwardRef(
  ({ className: r, variant: e, size: t, asChild: s = !1, ...n }, i) => {
    const a = s ? lu : "button";
    return /* @__PURE__ */ d.jsx(
      a,
      {
        className: oe(Gu({ variant: e, size: t, className: r })),
        ref: i,
        ...n
      }
    );
  }
);
te.displayName = "Button";
const ae = v.forwardRef(
  ({ className: r, type: e, ...t }, s) => /* @__PURE__ */ d.jsx(
    "input",
    {
      type: e,
      className: oe(
        "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        r
      ),
      ref: s,
      ...t
    }
  )
);
ae.displayName = "Input";
var Hu = [
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
], Ku = Hu.reduce((r, e) => {
  const t = /* @__PURE__ */ qi(`Primitive.${e}`), s = v.forwardRef((n, i) => {
    const { asChild: a, ...o } = n, l = a ? t : e;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ d.jsx(l, { ...o, ref: i });
  });
  return s.displayName = `Primitive.${e}`, { ...r, [e]: s };
}, {}), Ju = "Label", Qi = v.forwardRef((r, e) => /* @__PURE__ */ d.jsx(
  Ku.label,
  {
    ...r,
    ref: e,
    onMouseDown: (t) => {
      var n;
      t.target.closest("button, input, select, textarea") || ((n = r.onMouseDown) == null || n.call(r, t), !t.defaultPrevented && t.detail > 1 && t.preventDefault());
    }
  }
));
Qi.displayName = Ju;
var Yi = Qi;
const Qu = Vi(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
), H = v.forwardRef(({ className: r, ...e }, t) => /* @__PURE__ */ d.jsx(
  Yi,
  {
    ref: t,
    className: oe(Qu(), r),
    ...e
  }
));
H.displayName = Yi.displayName;
const Yu = 1, Xu = 1e6;
let es = 0;
function Zu() {
  return es = (es + 1) % Number.MAX_SAFE_INTEGER, es.toString();
}
const ts = /* @__PURE__ */ new Map(), Qn = (r) => {
  if (ts.has(r))
    return;
  const e = setTimeout(() => {
    ts.delete(r), wr({
      type: "REMOVE_TOAST",
      toastId: r
    });
  }, Xu);
  ts.set(r, e);
}, ed = (r, e) => {
  switch (e.type) {
    case "ADD_TOAST":
      return {
        ...r,
        toasts: [e.toast, ...r.toasts].slice(0, Yu)
      };
    case "UPDATE_TOAST":
      return {
        ...r,
        toasts: r.toasts.map(
          (t) => t.id === e.toast.id ? { ...t, ...e.toast } : t
        )
      };
    case "DISMISS_TOAST": {
      const { toastId: t } = e;
      return t ? Qn(t) : r.toasts.forEach((s) => {
        Qn(s.id);
      }), {
        ...r,
        toasts: r.toasts.map(
          (s) => s.id === t || t === void 0 ? {
            ...s,
            open: !1
          } : s
        )
      };
    }
    case "REMOVE_TOAST":
      return e.toastId === void 0 ? {
        ...r,
        toasts: []
      } : {
        ...r,
        toasts: r.toasts.filter((t) => t.id !== e.toastId)
      };
  }
}, td = [];
let rs = { toasts: [] };
function wr(r) {
  rs = ed(rs, r), td.forEach((e) => {
    e(rs);
  });
}
function q({ ...r }) {
  const e = Zu(), t = (n) => wr({
    type: "UPDATE_TOAST",
    toast: { ...n, id: e }
  }), s = () => wr({ type: "DISMISS_TOAST", toastId: e });
  return wr({
    type: "ADD_TOAST",
    toast: {
      ...r,
      id: e,
      open: !0,
      onOpenChange: (n) => {
        n || s();
      }
    }
  }), {
    id: e,
    dismiss: s,
    update: t
  };
}
const rd = ({ loginWithEmailPassword: r }) => {
  const [e, t] = re(""), [s, n] = re(""), [i, a] = re(!1), o = Nr(), l = async (u) => {
    u.preventDefault(), a(!0);
    try {
      const { data: c, error: h } = await r(e, s);
      if (h) {
        console.error("Login error:", h), q({
          title: "Login Failed",
          description: typeof h == "string" ? h : "Invalid credentials or you don't have access to this project.",
          variant: "destructive"
        });
        return;
      }
      c && (q({
        title: "Login Successful",
        description: "Welcome back!"
      }), o("/admin"));
    } catch (c) {
      console.error("Unexpected error:", c), q({
        title: "Error",
        description: "An unexpected error occurred. Please try again.",
        variant: "destructive"
      });
    } finally {
      a(!1);
    }
  };
  return /* @__PURE__ */ d.jsx("div", { className: "min-h-screen flex items-center justify-center bg-background", children: /* @__PURE__ */ d.jsxs("div", { className: "w-full max-w-md", children: [
    /* @__PURE__ */ d.jsxs("div", { className: "text-center mb-8", children: [
      /* @__PURE__ */ d.jsx("h1", { className: "font-serif text-6xl text-gold", children: "Velour Essence" }),
      /* @__PURE__ */ d.jsx("p", { className: "text-black/60 mt-2", children: "Admin Dashboard" })
    ] }),
    /* @__PURE__ */ d.jsxs("div", { className: "bg-emerald-light border border-gold/20 rounded-lg shadow-lg p-8", children: [
      /* @__PURE__ */ d.jsx("h2", { className: "font-serif text-2xl text-gold mb-6 text-center", children: "Login" }),
      /* @__PURE__ */ d.jsxs("form", { onSubmit: l, className: "space-y-6", children: [
        /* @__PURE__ */ d.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ d.jsx(H, { htmlFor: "email", className: "text-white", children: "Email" }),
          /* @__PURE__ */ d.jsx(
            ae,
            {
              id: "email",
              type: "email",
              value: e,
              onChange: (u) => t(u.target.value),
              className: "bg-emerald-light/20 border-gold/30 text-white placeholder-white/50",
              placeholder: "admin@example.com",
              required: !0,
              disabled: i
            }
          )
        ] }),
        /* @__PURE__ */ d.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ d.jsx("div", { className: "flex justify-between items-center", children: /* @__PURE__ */ d.jsx(H, { htmlFor: "password", className: "text-white", children: "Password" }) }),
          /* @__PURE__ */ d.jsx(
            ae,
            {
              id: "password",
              type: "password",
              value: s,
              onChange: (u) => n(u.target.value),
              className: "bg-emerald-light/20 border-gold/30 text-white placeholder-white/50",
              required: !0,
              disabled: i
            }
          )
        ] }),
        /* @__PURE__ */ d.jsx(
          te,
          {
            type: "submit",
            className: "w-full bg-gold text-black hover:bg-gold/90",
            disabled: i,
            children: i ? /* @__PURE__ */ d.jsxs("span", { className: "flex items-center", children: [
              /* @__PURE__ */ d.jsxs(
                "svg",
                {
                  className: "animate-spin -ml-1 mr-2 h-4 w-4 text-black",
                  xmlns: "http://www.w3.org/2000/svg",
                  fill: "none",
                  viewBox: "0 0 24 24",
                  children: [
                    /* @__PURE__ */ d.jsx(
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
                    /* @__PURE__ */ d.jsx(
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
      /* @__PURE__ */ d.jsx("div", { className: "mt-6 text-center text-white/50 text-sm", children: /* @__PURE__ */ d.jsx("p", { children: "For testing purposes, please contact the administrator for login credentials." }) })
    ] })
  ] }) });
};
var Ar = class {
  constructor() {
    this.listeners = /* @__PURE__ */ new Set(), this.subscribe = this.subscribe.bind(this);
  }
  subscribe(r) {
    return this.listeners.add(r), this.onSubscribe(), () => {
      this.listeners.delete(r), this.onUnsubscribe();
    };
  }
  hasListeners() {
    return this.listeners.size > 0;
  }
  onSubscribe() {
  }
  onUnsubscribe() {
  }
}, Zt = typeof window > "u" || "Deno" in globalThis;
function Cr() {
}
function Yn(r) {
  return typeof r == "number" && r >= 0 && r !== 1 / 0;
}
function sd(r, e) {
  return Math.max(r + (e || 0) - Date.now(), 0);
}
function xr(r, e) {
  return typeof r == "function" ? r(e) : r;
}
function je(r, e) {
  return typeof r == "function" ? r(e) : r;
}
function Xn(r) {
  return JSON.stringify(
    r,
    (e, t) => ws(t) ? Object.keys(t).sort().reduce((s, n) => (s[n] = t[n], s), {}) : t
  );
}
function bs(r, e) {
  if (r === e)
    return r;
  const t = Zn(r) && Zn(e);
  if (t || ws(r) && ws(e)) {
    const s = t ? r : Object.keys(r), n = s.length, i = t ? e : Object.keys(e), a = i.length, o = t ? [] : {};
    let l = 0;
    for (let u = 0; u < a; u++) {
      const c = t ? u : i[u];
      (!t && s.includes(c) || t) && r[c] === void 0 && e[c] === void 0 ? (o[c] = void 0, l++) : (o[c] = bs(r[c], e[c]), o[c] === r[c] && r[c] !== void 0 && l++);
    }
    return n === a && l === n ? r : o;
  }
  return e;
}
function Sr(r, e) {
  if (!e || Object.keys(r).length !== Object.keys(e).length)
    return !1;
  for (const t in r)
    if (r[t] !== e[t])
      return !1;
  return !0;
}
function Zn(r) {
  return Array.isArray(r) && r.length === Object.keys(r).length;
}
function ws(r) {
  if (!ei(r))
    return !1;
  const e = r.constructor;
  if (e === void 0)
    return !0;
  const t = e.prototype;
  return !(!ei(t) || !t.hasOwnProperty("isPrototypeOf") || Object.getPrototypeOf(r) !== Object.prototype);
}
function ei(r) {
  return Object.prototype.toString.call(r) === "[object Object]";
}
function ti(r, e, t) {
  if (typeof t.structuralSharing == "function")
    return t.structuralSharing(r, e);
  if (t.structuralSharing !== !1) {
    if (process.env.NODE_ENV !== "production")
      try {
        return bs(r, e);
      } catch (s) {
        throw console.error(
          `Structural sharing requires data to be JSON serializable. To fix this, turn off structuralSharing or return JSON-serializable data from your queryFn. [${t.queryHash}]: ${s}`
        ), s;
      }
    return bs(r, e);
  }
  return e;
}
function Xi(r, e) {
  return typeof r == "function" ? r(...e) : !!r;
}
var tt, Ue, _t, oi, nd = (oi = class extends Ar {
  constructor() {
    super();
    V(this, tt);
    V(this, Ue);
    V(this, _t);
    I(this, _t, (e) => {
      if (!Zt && window.addEventListener) {
        const t = () => e();
        return window.addEventListener("visibilitychange", t, !1), () => {
          window.removeEventListener("visibilitychange", t);
        };
      }
    });
  }
  onSubscribe() {
    b(this, Ue) || this.setEventListener(b(this, _t));
  }
  onUnsubscribe() {
    var e;
    this.hasListeners() || ((e = b(this, Ue)) == null || e.call(this), I(this, Ue, void 0));
  }
  setEventListener(e) {
    var t;
    I(this, _t, e), (t = b(this, Ue)) == null || t.call(this), I(this, Ue, e((s) => {
      typeof s == "boolean" ? this.setFocused(s) : this.onFocus();
    }));
  }
  setFocused(e) {
    b(this, tt) !== e && (I(this, tt, e), this.onFocus());
  }
  onFocus() {
    const e = this.isFocused();
    this.listeners.forEach((t) => {
      t(e);
    });
  }
  isFocused() {
    var e;
    return typeof b(this, tt) == "boolean" ? b(this, tt) : ((e = globalThis.document) == null ? void 0 : e.visibilityState) !== "hidden";
  }
}, tt = new WeakMap(), Ue = new WeakMap(), _t = new WeakMap(), oi), id = new nd(), jt, Me, kt, li, ad = (li = class extends Ar {
  constructor() {
    super();
    V(this, jt, !0);
    V(this, Me);
    V(this, kt);
    I(this, kt, (e) => {
      if (!Zt && window.addEventListener) {
        const t = () => e(!0), s = () => e(!1);
        return window.addEventListener("online", t, !1), window.addEventListener("offline", s, !1), () => {
          window.removeEventListener("online", t), window.removeEventListener("offline", s);
        };
      }
    });
  }
  onSubscribe() {
    b(this, Me) || this.setEventListener(b(this, kt));
  }
  onUnsubscribe() {
    var e;
    this.hasListeners() || ((e = b(this, Me)) == null || e.call(this), I(this, Me, void 0));
  }
  setEventListener(e) {
    var t;
    I(this, kt, e), (t = b(this, Me)) == null || t.call(this), I(this, Me, e(this.setOnline.bind(this)));
  }
  setOnline(e) {
    b(this, jt) !== e && (I(this, jt, e), this.listeners.forEach((s) => {
      s(e);
    }));
  }
  isOnline() {
    return b(this, jt);
  }
}, jt = new WeakMap(), Me = new WeakMap(), kt = new WeakMap(), li), od = new ad();
function ri() {
  let r, e;
  const t = new Promise((n, i) => {
    r = n, e = i;
  });
  t.status = "pending", t.catch(() => {
  });
  function s(n) {
    Object.assign(t, n), delete t.resolve, delete t.reject;
  }
  return t.resolve = (n) => {
    s({
      status: "fulfilled",
      value: n
    }), r(n);
  }, t.reject = (n) => {
    s({
      status: "rejected",
      reason: n
    }), e(n);
  }, t;
}
function ld(r) {
  return (r ?? "online") === "online" ? od.isOnline() : !0;
}
var cd = (r) => setTimeout(r, 0);
function ud() {
  let r = [], e = 0, t = (o) => {
    o();
  }, s = (o) => {
    o();
  }, n = cd;
  const i = (o) => {
    e ? r.push(o) : n(() => {
      t(o);
    });
  }, a = () => {
    const o = r;
    r = [], o.length && n(() => {
      s(() => {
        o.forEach((l) => {
          t(l);
        });
      });
    });
  };
  return {
    batch: (o) => {
      let l;
      e++;
      try {
        l = o();
      } finally {
        e--, e || a();
      }
      return l;
    },
    /**
     * All calls to the wrapped function will be batched.
     */
    batchCalls: (o) => (...l) => {
      i(() => {
        o(...l);
      });
    },
    schedule: i,
    /**
     * Use this method to set a custom notify function.
     * This can be used to for example wrap notifications with `React.act` while running tests.
     */
    setNotifyFunction: (o) => {
      t = o;
    },
    /**
     * Use this method to set a custom function to batch notifications together into a single tick.
     * By default React Query will use the batch function provided by ReactDOM or React Native.
     */
    setBatchNotifyFunction: (o) => {
      s = o;
    },
    setScheduler: (o) => {
      n = o;
    }
  };
}
var Lr = ud();
function dd(r, e) {
  return {
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchStatus: ld(e.networkMode) ? "fetching" : "paused",
    ...r === void 0 && {
      error: null,
      status: "pending"
    }
  };
}
function hd() {
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
var me, U, er, ce, rt, Et, qe, Be, tr, Ct, St, st, nt, ze, Rt, z, Wt, xs, _s, js, ks, Es, Cs, Ss, Zi, ci, fd = (ci = class extends Ar {
  constructor(e, t) {
    super();
    V(this, z);
    V(this, me);
    V(this, U);
    V(this, er);
    V(this, ce);
    V(this, rt);
    V(this, Et);
    V(this, qe);
    V(this, Be);
    V(this, tr);
    V(this, Ct);
    // This property keeps track of the last query with defined data.
    // It will be used to pass the previous data and query to the placeholder function between renders.
    V(this, St);
    V(this, st);
    V(this, nt);
    V(this, ze);
    V(this, Rt, /* @__PURE__ */ new Set());
    this.options = t, I(this, me, e), I(this, Be, null), I(this, qe, ri()), this.options.experimental_prefetchInRender || b(this, qe).reject(
      new Error("experimental_prefetchInRender feature flag is not enabled")
    ), this.bindMethods(), this.setOptions(t);
  }
  bindMethods() {
    this.refetch = this.refetch.bind(this);
  }
  onSubscribe() {
    this.listeners.size === 1 && (b(this, U).addObserver(this), si(b(this, U), this.options) ? Q(this, z, Wt).call(this) : this.updateResult(), Q(this, z, ks).call(this));
  }
  onUnsubscribe() {
    this.hasListeners() || this.destroy();
  }
  shouldFetchOnReconnect() {
    return Rs(
      b(this, U),
      this.options,
      this.options.refetchOnReconnect
    );
  }
  shouldFetchOnWindowFocus() {
    return Rs(
      b(this, U),
      this.options,
      this.options.refetchOnWindowFocus
    );
  }
  destroy() {
    this.listeners = /* @__PURE__ */ new Set(), Q(this, z, Es).call(this), Q(this, z, Cs).call(this), b(this, U).removeObserver(this);
  }
  setOptions(e) {
    const t = this.options, s = b(this, U);
    if (this.options = b(this, me).defaultQueryOptions(e), this.options.enabled !== void 0 && typeof this.options.enabled != "boolean" && typeof this.options.enabled != "function" && typeof je(this.options.enabled, b(this, U)) != "boolean")
      throw new Error(
        "Expected enabled to be a boolean or a callback that returns a boolean"
      );
    Q(this, z, Ss).call(this), b(this, U).setOptions(this.options), t._defaulted && !Sr(this.options, t) && b(this, me).getQueryCache().notify({
      type: "observerOptionsUpdated",
      query: b(this, U),
      observer: this
    });
    const n = this.hasListeners();
    n && ni(
      b(this, U),
      s,
      this.options,
      t
    ) && Q(this, z, Wt).call(this), this.updateResult(), n && (b(this, U) !== s || je(this.options.enabled, b(this, U)) !== je(t.enabled, b(this, U)) || xr(this.options.staleTime, b(this, U)) !== xr(t.staleTime, b(this, U))) && Q(this, z, xs).call(this);
    const i = Q(this, z, _s).call(this);
    n && (b(this, U) !== s || je(this.options.enabled, b(this, U)) !== je(t.enabled, b(this, U)) || i !== b(this, ze)) && Q(this, z, js).call(this, i);
  }
  getOptimisticResult(e) {
    const t = b(this, me).getQueryCache().build(b(this, me), e), s = this.createResult(t, e);
    return pd(this, s) && (I(this, ce, s), I(this, Et, this.options), I(this, rt, b(this, U).state)), s;
  }
  getCurrentResult() {
    return b(this, ce);
  }
  trackResult(e, t) {
    return new Proxy(e, {
      get: (s, n) => (this.trackProp(n), t == null || t(n), Reflect.get(s, n))
    });
  }
  trackProp(e) {
    b(this, Rt).add(e);
  }
  getCurrentQuery() {
    return b(this, U);
  }
  refetch({ ...e } = {}) {
    return this.fetch({
      ...e
    });
  }
  fetchOptimistic(e) {
    const t = b(this, me).defaultQueryOptions(e), s = b(this, me).getQueryCache().build(b(this, me), t);
    return s.fetch().then(() => this.createResult(s, t));
  }
  fetch(e) {
    return Q(this, z, Wt).call(this, {
      ...e,
      cancelRefetch: e.cancelRefetch ?? !0
    }).then(() => (this.updateResult(), b(this, ce)));
  }
  createResult(e, t) {
    var _;
    const s = b(this, U), n = this.options, i = b(this, ce), a = b(this, rt), o = b(this, Et), u = e !== s ? e.state : b(this, er), { state: c } = e;
    let h = { ...c }, m = !1, p;
    if (t._optimisticResults) {
      const N = this.hasListeners(), W = !N && si(e, t), E = N && ni(e, s, t, n);
      (W || E) && (h = {
        ...h,
        ...dd(c.data, e.options)
      }), t._optimisticResults === "isRestoring" && (h.fetchStatus = "idle");
    }
    let { error: y, errorUpdatedAt: x, status: g } = h;
    p = h.data;
    let k = !1;
    if (t.placeholderData !== void 0 && p === void 0 && g === "pending") {
      let N;
      i != null && i.isPlaceholderData && t.placeholderData === (o == null ? void 0 : o.placeholderData) ? (N = i.data, k = !0) : N = typeof t.placeholderData == "function" ? t.placeholderData(
        (_ = b(this, St)) == null ? void 0 : _.state.data,
        b(this, St)
      ) : t.placeholderData, N !== void 0 && (g = "success", p = ti(
        i == null ? void 0 : i.data,
        N,
        t
      ), m = !0);
    }
    if (t.select && p !== void 0 && !k)
      if (i && p === (a == null ? void 0 : a.data) && t.select === b(this, tr))
        p = b(this, Ct);
      else
        try {
          I(this, tr, t.select), p = t.select(p), p = ti(i == null ? void 0 : i.data, p, t), I(this, Ct, p), I(this, Be, null);
        } catch (N) {
          I(this, Be, N);
        }
    b(this, Be) && (y = b(this, Be), p = b(this, Ct), x = Date.now(), g = "error");
    const C = h.fetchStatus === "fetching", j = g === "pending", R = g === "error", L = j && C, X = p !== void 0, T = {
      status: g,
      fetchStatus: h.fetchStatus,
      isPending: j,
      isSuccess: g === "success",
      isError: R,
      isInitialLoading: L,
      isLoading: L,
      data: p,
      dataUpdatedAt: h.dataUpdatedAt,
      error: y,
      errorUpdatedAt: x,
      failureCount: h.fetchFailureCount,
      failureReason: h.fetchFailureReason,
      errorUpdateCount: h.errorUpdateCount,
      isFetched: h.dataUpdateCount > 0 || h.errorUpdateCount > 0,
      isFetchedAfterMount: h.dataUpdateCount > u.dataUpdateCount || h.errorUpdateCount > u.errorUpdateCount,
      isFetching: C,
      isRefetching: C && !j,
      isLoadingError: R && !X,
      isPaused: h.fetchStatus === "paused",
      isPlaceholderData: m,
      isRefetchError: R && X,
      isStale: Js(e, t),
      refetch: this.refetch,
      promise: b(this, qe)
    };
    if (this.options.experimental_prefetchInRender) {
      const N = (K) => {
        T.status === "error" ? K.reject(T.error) : T.data !== void 0 && K.resolve(T.data);
      }, W = () => {
        const K = I(this, qe, T.promise = ri());
        N(K);
      }, E = b(this, qe);
      switch (E.status) {
        case "pending":
          e.queryHash === s.queryHash && N(E);
          break;
        case "fulfilled":
          (T.status === "error" || T.data !== E.value) && W();
          break;
        case "rejected":
          (T.status !== "error" || T.error !== E.reason) && W();
          break;
      }
    }
    return T;
  }
  updateResult() {
    const e = b(this, ce), t = this.createResult(b(this, U), this.options);
    if (I(this, rt, b(this, U).state), I(this, Et, this.options), b(this, rt).data !== void 0 && I(this, St, b(this, U)), Sr(t, e))
      return;
    I(this, ce, t);
    const s = () => {
      if (!e)
        return !0;
      const { notifyOnChangeProps: n } = this.options, i = typeof n == "function" ? n() : n;
      if (i === "all" || !i && !b(this, Rt).size)
        return !0;
      const a = new Set(
        i ?? b(this, Rt)
      );
      return this.options.throwOnError && a.add("error"), Object.keys(b(this, ce)).some((o) => {
        const l = o;
        return b(this, ce)[l] !== e[l] && a.has(l);
      });
    };
    Q(this, z, Zi).call(this, { listeners: s() });
  }
  onQueryUpdate() {
    this.updateResult(), this.hasListeners() && Q(this, z, ks).call(this);
  }
}, me = new WeakMap(), U = new WeakMap(), er = new WeakMap(), ce = new WeakMap(), rt = new WeakMap(), Et = new WeakMap(), qe = new WeakMap(), Be = new WeakMap(), tr = new WeakMap(), Ct = new WeakMap(), St = new WeakMap(), st = new WeakMap(), nt = new WeakMap(), ze = new WeakMap(), Rt = new WeakMap(), z = new WeakSet(), Wt = function(e) {
  Q(this, z, Ss).call(this);
  let t = b(this, U).fetch(
    this.options,
    e
  );
  return e != null && e.throwOnError || (t = t.catch(Cr)), t;
}, xs = function() {
  Q(this, z, Es).call(this);
  const e = xr(
    this.options.staleTime,
    b(this, U)
  );
  if (Zt || b(this, ce).isStale || !Yn(e))
    return;
  const s = sd(b(this, ce).dataUpdatedAt, e) + 1;
  I(this, st, setTimeout(() => {
    b(this, ce).isStale || this.updateResult();
  }, s));
}, _s = function() {
  return (typeof this.options.refetchInterval == "function" ? this.options.refetchInterval(b(this, U)) : this.options.refetchInterval) ?? !1;
}, js = function(e) {
  Q(this, z, Cs).call(this), I(this, ze, e), !(Zt || je(this.options.enabled, b(this, U)) === !1 || !Yn(b(this, ze)) || b(this, ze) === 0) && I(this, nt, setInterval(() => {
    (this.options.refetchIntervalInBackground || id.isFocused()) && Q(this, z, Wt).call(this);
  }, b(this, ze)));
}, ks = function() {
  Q(this, z, xs).call(this), Q(this, z, js).call(this, Q(this, z, _s).call(this));
}, Es = function() {
  b(this, st) && (clearTimeout(b(this, st)), I(this, st, void 0));
}, Cs = function() {
  b(this, nt) && (clearInterval(b(this, nt)), I(this, nt, void 0));
}, Ss = function() {
  const e = b(this, me).getQueryCache().build(b(this, me), this.options);
  if (e === b(this, U))
    return;
  const t = b(this, U);
  I(this, U, e), I(this, er, e.state), this.hasListeners() && (t == null || t.removeObserver(this), e.addObserver(this));
}, Zi = function(e) {
  Lr.batch(() => {
    e.listeners && this.listeners.forEach((t) => {
      t(b(this, ce));
    }), b(this, me).getQueryCache().notify({
      query: b(this, U),
      type: "observerResultsUpdated"
    });
  });
}, ci);
function md(r, e) {
  return je(e.enabled, r) !== !1 && r.state.data === void 0 && !(r.state.status === "error" && e.retryOnMount === !1);
}
function si(r, e) {
  return md(r, e) || r.state.data !== void 0 && Rs(r, e, e.refetchOnMount);
}
function Rs(r, e, t) {
  if (je(e.enabled, r) !== !1) {
    const s = typeof t == "function" ? t(r) : t;
    return s === "always" || s !== !1 && Js(r, e);
  }
  return !1;
}
function ni(r, e, t, s) {
  return (r !== e || je(s.enabled, r) === !1) && (!t.suspense || r.state.status !== "error") && Js(r, t);
}
function Js(r, e) {
  return je(e.enabled, r) !== !1 && r.isStaleByTime(xr(e.staleTime, r));
}
function pd(r, e) {
  return !Sr(r.getCurrentResult(), e);
}
var Ve, We, pe, Re, Ne, _r, Ts, ui, gd = (ui = class extends Ar {
  constructor(e, t) {
    super();
    V(this, Ne);
    V(this, Ve);
    V(this, We);
    V(this, pe);
    V(this, Re);
    I(this, Ve, e), this.setOptions(t), this.bindMethods(), Q(this, Ne, _r).call(this);
  }
  bindMethods() {
    this.mutate = this.mutate.bind(this), this.reset = this.reset.bind(this);
  }
  setOptions(e) {
    var s;
    const t = this.options;
    this.options = b(this, Ve).defaultMutationOptions(e), Sr(this.options, t) || b(this, Ve).getMutationCache().notify({
      type: "observerOptionsUpdated",
      mutation: b(this, pe),
      observer: this
    }), t != null && t.mutationKey && this.options.mutationKey && Xn(t.mutationKey) !== Xn(this.options.mutationKey) ? this.reset() : ((s = b(this, pe)) == null ? void 0 : s.state.status) === "pending" && b(this, pe).setOptions(this.options);
  }
  onUnsubscribe() {
    var e;
    this.hasListeners() || (e = b(this, pe)) == null || e.removeObserver(this);
  }
  onMutationUpdate(e) {
    Q(this, Ne, _r).call(this), Q(this, Ne, Ts).call(this, e);
  }
  getCurrentResult() {
    return b(this, We);
  }
  reset() {
    var e;
    (e = b(this, pe)) == null || e.removeObserver(this), I(this, pe, void 0), Q(this, Ne, _r).call(this), Q(this, Ne, Ts).call(this);
  }
  mutate(e, t) {
    var s;
    return I(this, Re, t), (s = b(this, pe)) == null || s.removeObserver(this), I(this, pe, b(this, Ve).getMutationCache().build(b(this, Ve), this.options)), b(this, pe).addObserver(this), b(this, pe).execute(e);
  }
}, Ve = new WeakMap(), We = new WeakMap(), pe = new WeakMap(), Re = new WeakMap(), Ne = new WeakSet(), _r = function() {
  var t;
  const e = ((t = b(this, pe)) == null ? void 0 : t.state) ?? hd();
  I(this, We, {
    ...e,
    isPending: e.status === "pending",
    isSuccess: e.status === "success",
    isError: e.status === "error",
    isIdle: e.status === "idle",
    mutate: this.mutate,
    reset: this.reset
  });
}, Ts = function(e) {
  Lr.batch(() => {
    var t, s, n, i, a, o, l, u;
    if (b(this, Re) && this.hasListeners()) {
      const c = b(this, We).variables, h = b(this, We).context;
      (e == null ? void 0 : e.type) === "success" ? ((s = (t = b(this, Re)).onSuccess) == null || s.call(t, e.data, c, h), (i = (n = b(this, Re)).onSettled) == null || i.call(n, e.data, null, c, h)) : (e == null ? void 0 : e.type) === "error" && ((o = (a = b(this, Re)).onError) == null || o.call(a, e.error, c, h), (u = (l = b(this, Re)).onSettled) == null || u.call(
        l,
        void 0,
        e.error,
        c,
        h
      ));
    }
    this.listeners.forEach((c) => {
      c(b(this, We));
    });
  });
}, ui), vd = v.createContext(
  void 0
), At = (r) => {
  const e = v.useContext(vd);
  if (!e)
    throw new Error("No QueryClient set, use QueryClientProvider to set one");
  return e;
}, ea = v.createContext(!1), yd = () => v.useContext(ea);
ea.Provider;
function bd() {
  let r = !1;
  return {
    clearReset: () => {
      r = !1;
    },
    reset: () => {
      r = !0;
    },
    isReset: () => r
  };
}
var wd = v.createContext(bd()), xd = () => v.useContext(wd), _d = (r, e) => {
  (r.suspense || r.throwOnError || r.experimental_prefetchInRender) && (e.isReset() || (r.retryOnMount = !1));
}, jd = (r) => {
  v.useEffect(() => {
    r.clearReset();
  }, [r]);
}, kd = ({
  result: r,
  errorResetBoundary: e,
  throwOnError: t,
  query: s,
  suspense: n
}) => r.isError && !e.isReset() && !r.isFetching && s && (n && r.data === void 0 || Xi(t, [r.error, s])), Ed = (r) => {
  const e = r.staleTime;
  r.suspense && (r.staleTime = typeof e == "function" ? (...t) => Math.max(e(...t), 1e3) : Math.max(e ?? 1e3, 1e3), typeof r.gcTime == "number" && (r.gcTime = Math.max(r.gcTime, 1e3)));
}, Cd = (r, e) => r.isLoading && r.isFetching && !e, Sd = (r, e) => (r == null ? void 0 : r.suspense) && e.isPending, ii = (r, e, t) => e.fetchOptimistic(r).catch(() => {
  t.clearReset();
});
function Rd(r, e, t) {
  var h, m, p, y, x;
  if (process.env.NODE_ENV !== "production" && (typeof r != "object" || Array.isArray(r)))
    throw new Error(
      'Bad argument type. Starting with v5, only the "Object" form is allowed when calling query related functions. Please use the error stack to find the culprit call. More info here: https://tanstack.com/query/latest/docs/react/guides/migrating-to-v5#supports-a-single-signature-one-object'
    );
  const s = At(), n = yd(), i = xd(), a = s.defaultQueryOptions(r);
  (m = (h = s.getDefaultOptions().queries) == null ? void 0 : h._experimental_beforeQuery) == null || m.call(
    h,
    a
  ), process.env.NODE_ENV !== "production" && (a.queryFn || console.error(
    `[${a.queryHash}]: No queryFn was passed as an option, and no default queryFn was found. The queryFn parameter is only optional when using a default queryFn. More info here: https://tanstack.com/query/latest/docs/framework/react/guides/default-query-function`
  )), a._optimisticResults = n ? "isRestoring" : "optimistic", Ed(a), _d(a, i), jd(i);
  const o = !s.getQueryCache().get(a.queryHash), [l] = v.useState(
    () => new e(
      s,
      a
    )
  ), u = l.getOptimisticResult(a), c = !n && r.subscribed !== !1;
  if (v.useSyncExternalStore(
    v.useCallback(
      (g) => {
        const k = c ? l.subscribe(Lr.batchCalls(g)) : Cr;
        return l.updateResult(), k;
      },
      [l, c]
    ),
    () => l.getCurrentResult(),
    () => l.getCurrentResult()
  ), v.useEffect(() => {
    l.setOptions(a);
  }, [a, l]), Sd(a, u))
    throw ii(a, l, i);
  if (kd({
    result: u,
    errorResetBoundary: i,
    throwOnError: a.throwOnError,
    query: s.getQueryCache().get(a.queryHash),
    suspense: a.suspense
  }))
    throw u.error;
  if ((y = (p = s.getDefaultOptions().queries) == null ? void 0 : p._experimental_afterQuery) == null || y.call(
    p,
    a,
    u
  ), a.experimental_prefetchInRender && !Zt && Cd(u, n)) {
    const g = o ? (
      // Fetch immediately on render in order to ensure `.promise` is resolved even if the component is unmounted
      ii(a, l, i)
    ) : (
      // subscribe to the "cache promise" so that we can finalize the currentThenable once data comes in
      (x = s.getQueryCache().get(a.queryHash)) == null ? void 0 : x.promise
    );
    g == null || g.catch(Cr).finally(() => {
      l.updateResult();
    });
  }
  return a.notifyOnChangeProps ? u : l.trackResult(u);
}
function Ge(r, e) {
  return Rd(r, fd);
}
function ve(r, e) {
  const t = At(), [s] = v.useState(
    () => new gd(
      t,
      r
    )
  );
  v.useEffect(() => {
    s.setOptions(r);
  }, [s, r]);
  const n = v.useSyncExternalStore(
    v.useCallback(
      (a) => s.subscribe(Lr.batchCalls(a)),
      [s]
    ),
    () => s.getCurrentResult(),
    () => s.getCurrentResult()
  ), i = v.useCallback(
    (a, o) => {
      s.mutate(a, o).catch(Cr);
    },
    [s]
  );
  if (n.error && Xi(s.options.throwOnError, [n.error]))
    throw n.error;
  return { ...n, mutate: i, mutateAsync: n.mutate };
}
const ss = 768;
function Td() {
  const [r, e] = v.useState(void 0);
  return v.useEffect(() => {
    const t = window.matchMedia(`(max-width: ${ss - 1}px)`), s = () => {
      e(window.innerWidth < ss);
    };
    return t.addEventListener("change", s), e(window.innerWidth < ss), () => t.removeEventListener("change", s);
  }, []), !!r;
}
const ta = Aa(void 0), Nd = ({ children: r, logout: e, config: t }) => /* @__PURE__ */ d.jsx(ta.Provider, { value: { logout: e, config: t }, children: r }), Pd = () => {
  const r = La(ta);
  if (!r)
    throw new Error("useAdminContext must be used within an AdminProvider");
  return r;
}, ar = ({
  children: r,
  title: e
}) => {
  const [t, s] = re(!1), n = Nr(), i = He(), a = Td(), { logout: o } = Pd();
  $s(() => {
    a && s(!1);
  }, [i.pathname, a]);
  const l = async () => {
    try {
      const { error: c } = await o();
      if (c) throw c;
      q({
        title: "Logged out successfully"
      }), n("/auth/login");
    } catch (c) {
      console.error("Logout failed:", c), q({
        title: "Error",
        description: "Failed to log out. Please try again.",
        variant: "destructive"
      });
    }
  }, u = [
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
  return /* @__PURE__ */ d.jsxs("div", { className: "min-h-screen bg-background text-white flex flex-col md:flex-row", children: [
    /* @__PURE__ */ d.jsxs("header", { className: "bg-emerald-light border-b border-white/10 p-4 flex justify-between items-center md:hidden", children: [
      /* @__PURE__ */ d.jsx("div", { className: "font-serif text-gold text-xl", children: "Velour Admin" }),
      /* @__PURE__ */ d.jsx(
        te,
        {
          variant: "ghost",
          size: "icon",
          className: "text-white",
          onClick: () => s(!t),
          children: /* @__PURE__ */ d.jsx(
            "svg",
            {
              className: "w-6 h-6",
              fill: "none",
              stroke: "currentColor",
              viewBox: "0 0 24 24",
              children: t ? /* @__PURE__ */ d.jsx(
                "path",
                {
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: "2",
                  d: "M6 18L18 6M6 6l12 12"
                }
              ) : /* @__PURE__ */ d.jsx(
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
    /* @__PURE__ */ d.jsxs(
      "aside",
      {
        className: `bg-emerald-light w-full md:w-64 flex-shrink-0 border-r border-white/10 md:flex flex-col 
                    ${a ? t ? "fixed inset-0 z-50 block" : "hidden" : "flex"}`,
        children: [
          /* @__PURE__ */ d.jsx("div", { className: "p-6 border-b border-white/10", children: /* @__PURE__ */ d.jsx(
            it,
            {
              to: "/admin",
              className: "font-serif text-gold text-xl flex items-center",
              children: "Velour Essence"
            }
          ) }),
          /* @__PURE__ */ d.jsx("nav", { className: "flex-1 p-4 space-y-1", children: u.map((c) => /* @__PURE__ */ d.jsxs(
            it,
            {
              to: c.path,
              className: `flex items-center px-4 py-3 rounded-lg transition-colors ${i.pathname === c.path ? "bg-emerald text-gold" : "text-white/70 hover:bg-emerald/50"}`,
              children: [
                /* @__PURE__ */ d.jsxs(
                  "svg",
                  {
                    className: "w-5 h-5 mr-3",
                    fill: "none",
                    stroke: "currentColor",
                    viewBox: "0 0 24 24",
                    children: [
                      c.icon === "home" && /* @__PURE__ */ d.jsx(
                        "path",
                        {
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          strokeWidth: "2",
                          d: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                        }
                      ),
                      c.icon === "box" && /* @__PURE__ */ d.jsx(
                        "path",
                        {
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          strokeWidth: "2",
                          d: "M20 7l-8-4-8 4m16 0v10a2 2 0 01-2 2H6a2 2 0 01-2-2V7m16 0l-8 4m-8-4l8 4"
                        }
                      ),
                      c.icon === "file-text" && /* @__PURE__ */ d.jsx(
                        "path",
                        {
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          strokeWidth: "2",
                          d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        }
                      ),
                      c.icon === "image" && /* @__PURE__ */ d.jsx(
                        "path",
                        {
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          strokeWidth: "2",
                          d: "M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                        }
                      ),
                      c.icon === "message-square" && /* @__PURE__ */ d.jsx(
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
                /* @__PURE__ */ d.jsx("span", { children: c.name })
              ]
            },
            c.path
          )) }),
          /* @__PURE__ */ d.jsx("div", { className: "p-4 border-t border-white/10", children: /* @__PURE__ */ d.jsxs(
            te,
            {
              variant: "ghost",
              className: "w-full justify-start text-white/70 hover:text-white hover:bg-emerald/50",
              onClick: l,
              children: [
                /* @__PURE__ */ d.jsx(
                  "svg",
                  {
                    className: "w-5 h-5 mr-3",
                    fill: "none",
                    stroke: "currentColor",
                    viewBox: "0 0 24 24",
                    children: /* @__PURE__ */ d.jsx(
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
                /* @__PURE__ */ d.jsx("span", { children: "Sign Out" })
              ]
            }
          ) })
        ]
      }
    ),
    /* @__PURE__ */ d.jsx("main", { className: "flex-1 overflow-y-auto bg-background", children: /* @__PURE__ */ d.jsxs("div", { className: "p-6", children: [
      /* @__PURE__ */ d.jsxs("div", { className: "mb-8", children: [
        /* @__PURE__ */ d.jsx("h1", { className: "font-serif text-2xl md:text-3xl text-gold", children: e }),
        /* @__PURE__ */ d.jsx("div", { className: "w-16 h-1 bg-gold/30 mt-3" })
      ] }),
      r
    ] }) })
  ] });
}, ra = v.forwardRef(({ className: r, ...e }, t) => /* @__PURE__ */ d.jsx("div", { className: "relative w-full overflow-auto", children: /* @__PURE__ */ d.jsx(
  "table",
  {
    ref: t,
    className: oe("w-full caption-bottom text-sm", r),
    ...e
  }
) }));
ra.displayName = "Table";
const sa = v.forwardRef(({ className: r, ...e }, t) => /* @__PURE__ */ d.jsx("thead", { ref: t, className: oe("[&_tr]:border-b", r), ...e }));
sa.displayName = "TableHeader";
const na = v.forwardRef(({ className: r, ...e }, t) => /* @__PURE__ */ d.jsx(
  "tbody",
  {
    ref: t,
    className: oe("[&_tr:last-child]:border-0", r),
    ...e
  }
));
na.displayName = "TableBody";
const Od = v.forwardRef(({ className: r, ...e }, t) => /* @__PURE__ */ d.jsx(
  "tfoot",
  {
    ref: t,
    className: oe(
      "border-t bg-muted/50 font-medium [&>tr]:last:border-b-0",
      r
    ),
    ...e
  }
));
Od.displayName = "TableFooter";
const Gt = v.forwardRef(({ className: r, ...e }, t) => /* @__PURE__ */ d.jsx(
  "tr",
  {
    ref: t,
    className: oe(
      "border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",
      r
    ),
    ...e
  }
));
Gt.displayName = "TableRow";
const Ns = v.forwardRef(({ className: r, ...e }, t) => /* @__PURE__ */ d.jsx(
  "th",
  {
    ref: t,
    className: oe(
      "h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0",
      r
    ),
    ...e
  }
));
Ns.displayName = "TableHead";
const Ht = v.forwardRef(({ className: r, ...e }, t) => /* @__PURE__ */ d.jsx(
  "td",
  {
    ref: t,
    className: oe("p-4 align-middle [&:has([role=checkbox])]:pr-0", r),
    ...e
  }
));
Ht.displayName = "TableCell";
const Ad = v.forwardRef(({ className: r, ...e }, t) => /* @__PURE__ */ d.jsx(
  "caption",
  {
    ref: t,
    className: oe("mt-4 text-sm text-muted-foreground", r),
    ...e
  }
));
Ad.displayName = "TableCaption";
function $r({
  columns: r,
  data: e,
  onEdit: t,
  onDelete: s,
  isLoading: n = !1
}) {
  return /* @__PURE__ */ d.jsx("div", { className: "w-full overflow-x-auto rounded-lg border border-emerald/50", children: /* @__PURE__ */ d.jsxs(ra, { children: [
    /* @__PURE__ */ d.jsx(sa, { children: /* @__PURE__ */ d.jsxs(Gt, { className: "bg-emerald-light hover:bg-emerald-light", children: [
      r.map((i) => /* @__PURE__ */ d.jsx(
        Ns,
        {
          className: "text-gold font-serif",
          style: i.width ? { width: i.width } : {},
          children: i.header
        },
        i.key
      )),
      /* @__PURE__ */ d.jsx(Ns, { className: "text-gold font-serif text-right", children: "Actions" })
    ] }) }),
    /* @__PURE__ */ d.jsx(na, { children: n ? /* @__PURE__ */ d.jsx(Gt, { children: /* @__PURE__ */ d.jsx(Ht, { colSpan: r.length + 1, className: "text-center py-10", children: /* @__PURE__ */ d.jsx("div", { className: "flex justify-center", children: /* @__PURE__ */ d.jsx("div", { className: "w-8 h-8 border-2 border-gold border-t-transparent rounded-full animate-spin" }) }) }) }) : e.length === 0 ? /* @__PURE__ */ d.jsx(Gt, { children: /* @__PURE__ */ d.jsx(Ht, { colSpan: r.length + 1, className: "text-center py-10 text-black", children: "No items found" }) }) : e.map((i) => /* @__PURE__ */ d.jsxs(Gt, { className: "border-b border-emerald/30 hover:bg-emerald-light/20 text-black/60", children: [
      r.map((a) => /* @__PURE__ */ d.jsx(Ht, { children: a.render ? a.render(i[a.key], i) : i[a.key] }, `${i.id}-${a.key}`)),
      /* @__PURE__ */ d.jsx(Ht, { className: "text-right", children: /* @__PURE__ */ d.jsxs("div", { className: "flex justify-end gap-2", children: [
        /* @__PURE__ */ d.jsxs(
          te,
          {
            variant: "ghost",
            size: "sm",
            className: "h-8 w-8 p-0 text-gold",
            onClick: () => t(i),
            children: [
              /* @__PURE__ */ d.jsx("svg", { className: "h-4 w-4", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ d.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" }) }),
              /* @__PURE__ */ d.jsx("span", { className: "sr-only", children: "Edit" })
            ]
          }
        ),
        /* @__PURE__ */ d.jsxs(
          te,
          {
            variant: "ghost",
            size: "sm",
            className: "h-8 w-8 p-0 text-burgundy",
            onClick: () => s(i),
            children: [
              /* @__PURE__ */ d.jsx("svg", { className: "h-4 w-4", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ d.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" }) }),
              /* @__PURE__ */ d.jsx("span", { className: "sr-only", children: "Delete" })
            ]
          }
        )
      ] }) })
    ] }, i.id)) })
  ] }) });
}
const Ld = ({ query: r }) => {
  const {
    getGalleryItems: e,
    createGalleryItem: t,
    deleteGalleryItem: s,
    updateGalleryItem: n
  } = r, [i, a] = re(!1), [o, l] = re(null), [u, c] = re({
    title: "",
    image_url: "",
    category: "",
    is_featured: !1
  }), h = At(), { data: m, isLoading: p } = Ge({
    queryKey: ["admin-gallery"],
    queryFn: e
  }), y = ve({
    mutationFn: t,
    onSuccess: () => {
      h.invalidateQueries({ queryKey: ["admin-gallery"] }), q({
        title: "Gallery item created successfully"
      }), X();
    },
    onError: (T) => {
      console.error("Failed to create gallery item:", T), q({
        title: "Error",
        description: "Failed to create gallery item. Please try again.",
        variant: "destructive"
      });
    }
  }), x = ve({
    mutationFn: ({ id: T, updates: _ }) => n(T, _),
    onSuccess: () => {
      h.invalidateQueries({ queryKey: ["admin-gallery"] }), q({
        title: "Gallery item updated successfully"
      }), X();
    },
    onError: (T) => {
      console.error("Failed to update gallery item:", T), q({
        title: "Error",
        description: "Failed to update gallery item. Please try again.",
        variant: "destructive"
      });
    }
  }), g = ve({
    mutationFn: s,
    onSuccess: () => {
      h.invalidateQueries({ queryKey: ["admin-gallery"] }), q({
        title: "Gallery item deleted successfully"
      });
    },
    onError: (T) => {
      console.error("Failed to delete gallery item:", T), q({
        title: "Error",
        description: "Failed to delete gallery item. Please try again.",
        variant: "destructive"
      });
    }
  }), k = (T) => {
    const { name: _, value: N, type: W, checked: E } = T.target;
    c(W === "checkbox" ? {
      ...u,
      [_]: E
    } : {
      ...u,
      [_]: N
    });
  }, C = (T) => {
    T.preventDefault(), y.mutate(u);
  }, j = (T) => {
    T.preventDefault(), o && x.mutate({
      id: o.id,
      updates: u
    });
  }, R = (T) => {
    l(T), c({
      title: T.title,
      image_url: T.image_url,
      category: T.category,
      is_featured: T.is_featured || !1
    }), a(!0), window.scrollTo({ top: 0, behavior: "smooth" });
  }, L = (T) => {
    confirm("Are you sure you want to delete this gallery item?") && g.mutate(T.id);
  }, X = () => {
    l(null), c({
      title: "",
      image_url: "",
      category: "",
      is_featured: !1
    }), a(!1);
  }, se = [
    {
      key: "image_url",
      header: "Image",
      width: "80px",
      render: (T) => /* @__PURE__ */ d.jsx("div", { className: "w-12 h-12 rounded overflow-hidden", children: /* @__PURE__ */ d.jsx(
        "img",
        {
          src: T,
          alt: "Preview",
          className: "w-full h-full object-cover",
          onError: (_) => {
            _.target.src = "https://via.placeholder.com/48?text=Error";
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
      render: (T) => /* @__PURE__ */ d.jsx("div", { className: "px-2 py-1 rounded-full bg-emerald/20 text-xs inline-block", children: T })
    },
    {
      key: "is_featured",
      header: "Featured",
      render: (T) => /* @__PURE__ */ d.jsx("div", { className: T ? "text-gold" : "text-emerald/40", children: T ? /* @__PURE__ */ d.jsx("svg", { className: "w-5 h-5 fill-current", viewBox: "0 0 24 24", children: /* @__PURE__ */ d.jsx("path", { d: "M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" }) }) : "—" })
    }
  ];
  return /* @__PURE__ */ d.jsx(ar, { title: "Manage Gallery", children: /* @__PURE__ */ d.jsxs("div", { className: "space-y-8", children: [
    /* @__PURE__ */ d.jsx("div", { className: "mb-8", children: i ? /* @__PURE__ */ d.jsxs("div", { className: "bg-emerald-light rounded-lg border border-gold/20 p-6", children: [
      /* @__PURE__ */ d.jsxs("div", { className: "flex justify-between items-center mb-6", children: [
        /* @__PURE__ */ d.jsx("h2", { className: "font-serif text-xl text-gold", children: o ? "Edit Gallery Item" : "Add New Gallery Item" }),
        /* @__PURE__ */ d.jsx(
          te,
          {
            variant: "ghost",
            size: "sm",
            onClick: X,
            className: "text-white/70 hover:text-white",
            children: "Cancel"
          }
        )
      ] }),
      /* @__PURE__ */ d.jsx(
        "form",
        {
          onSubmit: o ? j : C,
          children: /* @__PURE__ */ d.jsxs("div", { className: "grid grid-cols-1 gap-6 md:grid-cols-2", children: [
            /* @__PURE__ */ d.jsxs("div", { className: "space-y-4", children: [
              /* @__PURE__ */ d.jsxs("div", { children: [
                /* @__PURE__ */ d.jsx(H, { htmlFor: "title", className: "text-white", children: "Title" }),
                /* @__PURE__ */ d.jsx(
                  ae,
                  {
                    id: "title",
                    name: "title",
                    value: u.title,
                    onChange: k,
                    className: "bg-emerald-gold/20 border-gold/30 text-black",
                    required: !0
                  }
                )
              ] }),
              /* @__PURE__ */ d.jsxs("div", { children: [
                /* @__PURE__ */ d.jsx(H, { htmlFor: "image_url", className: "text-white", children: "Image URL" }),
                /* @__PURE__ */ d.jsx(
                  ae,
                  {
                    id: "image_url",
                    name: "image_url",
                    value: u.image_url,
                    onChange: k,
                    className: "bg-emerald-gold/20 border-gold/30 text-black",
                    placeholder: "https://example.com/image.jpg",
                    required: !0
                  }
                )
              ] }),
              /* @__PURE__ */ d.jsxs("div", { children: [
                /* @__PURE__ */ d.jsx(H, { htmlFor: "category", className: "text-white", children: "Category" }),
                /* @__PURE__ */ d.jsx(
                  ae,
                  {
                    id: "category",
                    name: "category",
                    value: u.category,
                    onChange: k,
                    className: "bg-emerald-gold/20 border-gold/30 text-black",
                    required: !0
                  }
                )
              ] }),
              /* @__PURE__ */ d.jsxs("div", { className: "flex items-center mt-4", children: [
                /* @__PURE__ */ d.jsx(
                  "input",
                  {
                    type: "checkbox",
                    id: "is_featured",
                    name: "is_featured",
                    checked: u.is_featured,
                    onChange: k,
                    className: "w-4 h-4 mr-2"
                  }
                ),
                /* @__PURE__ */ d.jsx(H, { htmlFor: "is_featured", className: "text-white", children: "Featured item" })
              ] }),
              /* @__PURE__ */ d.jsx("div", { className: "flex gap-4 pt-4", children: /* @__PURE__ */ d.jsx(
                te,
                {
                  type: "submit",
                  className: "bg-gold text-black hover:bg-gold/90",
                  disabled: y.isPending || x.isPending,
                  children: y.isPending || x.isPending ? /* @__PURE__ */ d.jsxs("div", { className: "flex items-center", children: [
                    /* @__PURE__ */ d.jsxs(
                      "svg",
                      {
                        className: "animate-spin -ml-1 mr-2 h-4 w-4",
                        xmlns: "http://www.w3.org/2000/svg",
                        fill: "none",
                        viewBox: "0 0 24 24",
                        children: [
                          /* @__PURE__ */ d.jsx(
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
                          /* @__PURE__ */ d.jsx(
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
            /* @__PURE__ */ d.jsx("div", { className: "flex flex-col items-center justify-center bg-emerald-light/5 rounded-lg p-4", children: u.image_url ? /* @__PURE__ */ d.jsxs("div", { className: "max-w-full", children: [
              /* @__PURE__ */ d.jsx(
                "img",
                {
                  src: u.image_url,
                  alt: "Image Preview",
                  className: "max-h-64 rounded-lg object-contain mx-auto",
                  onError: (T) => {
                    T.target.src = "https://via.placeholder.com/400x300?text=Image+Error";
                  }
                }
              ),
              /* @__PURE__ */ d.jsx("p", { className: "text-sm text-white/50 text-center mt-2", children: "Image Preview" })
            ] }) : /* @__PURE__ */ d.jsxs("div", { className: "text-center text-white/50", children: [
              /* @__PURE__ */ d.jsx(
                "svg",
                {
                  className: "w-12 h-12 mx-auto opacity-50",
                  fill: "none",
                  stroke: "currentColor",
                  viewBox: "0 0 24 24",
                  children: /* @__PURE__ */ d.jsx(
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
              /* @__PURE__ */ d.jsx("p", { className: "mt-2", children: "Enter an image URL to see preview" })
            ] }) })
          ] })
        }
      )
    ] }) : /* @__PURE__ */ d.jsxs(
      te,
      {
        onClick: () => a(!0),
        className: "bg-gold text-black hover:bg-gold/90",
        children: [
          /* @__PURE__ */ d.jsx(
            "svg",
            {
              className: "w-4 h-4 mr-2",
              fill: "none",
              stroke: "currentColor",
              viewBox: "0 0 24 24",
              children: /* @__PURE__ */ d.jsx(
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
    /* @__PURE__ */ d.jsxs("div", { children: [
      /* @__PURE__ */ d.jsx("h2", { className: "font-serif text-xl text-gold mb-4", children: "All Gallery Items" }),
      /* @__PURE__ */ d.jsx(
        $r,
        {
          columns: se,
          data: (m == null ? void 0 : m.data) || [],
          onEdit: R,
          onDelete: L,
          isLoading: p
        }
      )
    ] })
  ] }) });
}, $d = ({ query: r }) => {
  var T;
  const { getAllProducts: e, createProduct: t, deleteProduct: s, updateProduct: n } = r, [i, a] = re(!1), [o, l] = re(null), [u, c] = re({
    name: "",
    description: "",
    price: 0,
    images: [""],
    is_active: !0
  }), h = At(), { data: m, isLoading: p } = Ge({
    queryKey: ["admin-products"],
    queryFn: e
  }), y = ve({
    mutationFn: t,
    onSuccess: () => {
      h.invalidateQueries({ queryKey: ["admin-products"] }), q({
        title: "Product created successfully"
      }), X();
    },
    onError: (_) => {
      console.error("Failed to create product:", _), q({
        title: "Error",
        description: "Failed to create product. Please try again.",
        variant: "destructive"
      });
    }
  }), x = ve({
    mutationFn: ({ id: _, updates: N }) => n(_, N),
    onSuccess: () => {
      h.invalidateQueries({ queryKey: ["admin-products"] }), q({
        title: "Product updated successfully"
      }), X();
    },
    onError: (_) => {
      console.error("Failed to update product:", _), q({
        title: "Error",
        description: "Failed to update product. Please try again.",
        variant: "destructive"
      });
    }
  }), g = ve({
    mutationFn: s,
    onSuccess: () => {
      h.invalidateQueries({ queryKey: ["admin-products"] }), q({
        title: "Product deleted successfully"
      });
    },
    onError: (_) => {
      console.error("Failed to delete product:", _), q({
        title: "Error",
        description: "Failed to delete product. Please try again.",
        variant: "destructive"
      });
    }
  }), k = (_) => {
    const { name: N, value: W, type: E } = _.target;
    c(N === "price" ? {
      ...u,
      [N]: Number(W)
    } : N === "is_active" ? {
      ...u,
      [N]: _.target.checked
    } : N === "images[0]" ? {
      ...u,
      images: [W]
    } : {
      ...u,
      [N]: W
    });
  }, C = (_) => {
    _.preventDefault(), y.mutate(u);
  }, j = (_) => {
    _.preventDefault(), o && x.mutate({
      id: o.id,
      updates: u
    });
  }, R = (_) => {
    l(_), c({
      name: _.name,
      description: _.description || "",
      price: _.price,
      images: _.images || [""],
      is_active: _.is_active !== null ? _.is_active : !0
    }), a(!0), window.scrollTo({ top: 0, behavior: "smooth" });
  }, L = (_) => {
    confirm("Are you sure you want to delete this product?") && g.mutate(_.id);
  }, X = () => {
    l(null), c({
      name: "",
      description: "",
      price: 0,
      images: [""],
      is_active: !0
    }), a(!1);
  }, se = [
    {
      key: "name",
      header: "Name"
    },
    {
      key: "description",
      header: "Description",
      render: (_) => /* @__PURE__ */ d.jsx("div", { className: "max-w-xs truncate ", children: _ || "—" })
    },
    {
      key: "price",
      header: "Price",
      render: (_) => /* @__PURE__ */ d.jsx("div", { children: new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
        minimumFractionDigits: 0
      }).format(_) })
    },
    {
      key: "is_active",
      header: "Status",
      render: (_) => /* @__PURE__ */ d.jsxs(
        "div",
        {
          className: `px-2 py-1 rounded-full text-xs inline-flex items-center ${_ ? "bg-emerald/20 text-emerald" : "bg-red-500/20 text-red-500"}`,
          children: [
            /* @__PURE__ */ d.jsx(
              "span",
              {
                className: `w-2 h-2 rounded-full mr-1 ${_ ? "bg-emerald" : "bg-red-500"}`
              }
            ),
            _ ? "Active" : "Inactive"
          ]
        }
      )
    }
  ];
  return /* @__PURE__ */ d.jsx(ar, { title: "Manage Products", children: /* @__PURE__ */ d.jsxs("div", { className: "space-y-8", children: [
    /* @__PURE__ */ d.jsx("div", { className: "mb-8", children: i ? /* @__PURE__ */ d.jsxs("div", { className: "bg-emerald-light rounded-lg border border-gold/20 p-6", children: [
      /* @__PURE__ */ d.jsxs("div", { className: "flex justify-between items-center mb-6", children: [
        /* @__PURE__ */ d.jsx("h2", { className: "font-serif text-xl text-gold", children: o ? "Edit Product" : "Add New Product" }),
        /* @__PURE__ */ d.jsx(
          te,
          {
            variant: "ghost",
            size: "sm",
            onClick: X,
            className: "text-white/70 hover:text-white",
            children: "Cancel"
          }
        )
      ] }),
      /* @__PURE__ */ d.jsx(
        "form",
        {
          onSubmit: o ? j : C,
          children: /* @__PURE__ */ d.jsxs("div", { className: "space-y-4", children: [
            /* @__PURE__ */ d.jsxs("div", { children: [
              /* @__PURE__ */ d.jsx(H, { htmlFor: "name", className: "text-white", children: "Product Name" }),
              /* @__PURE__ */ d.jsx(
                ae,
                {
                  id: "name",
                  name: "name",
                  value: u.name,
                  onChange: k,
                  className: "bg-emerald-gold/20 border-gold/30 text-black",
                  required: !0
                }
              )
            ] }),
            /* @__PURE__ */ d.jsxs("div", { children: [
              /* @__PURE__ */ d.jsx(H, { htmlFor: "description", className: "text-white", children: "Description" }),
              /* @__PURE__ */ d.jsx(
                "textarea",
                {
                  id: "description",
                  name: "description",
                  value: u.description,
                  onChange: k,
                  className: "w-full rounded-md bg-emerald-gold/20 border-gold/30 text-black h-24 px-3 py-2"
                }
              )
            ] }),
            /* @__PURE__ */ d.jsxs("div", { children: [
              /* @__PURE__ */ d.jsx(H, { htmlFor: "price", className: "text-white", children: "Price (IDR)" }),
              /* @__PURE__ */ d.jsx(
                ae,
                {
                  id: "price",
                  name: "price",
                  type: "number",
                  min: "0",
                  value: u.price,
                  onChange: k,
                  className: "bg-emerald-gold/20 border-gold/30 text-black",
                  required: !0
                }
              )
            ] }),
            /* @__PURE__ */ d.jsxs("div", { children: [
              /* @__PURE__ */ d.jsx(H, { htmlFor: "image", className: "text-white", children: "Image URL" }),
              /* @__PURE__ */ d.jsx(
                ae,
                {
                  id: "image",
                  name: "images[0]",
                  value: ((T = u.images) == null ? void 0 : T[0]) || "",
                  onChange: k,
                  className: "bg-emerald-gold/20 border-gold/30 text-black",
                  placeholder: "https://example.com/image.jpg"
                }
              )
            ] }),
            /* @__PURE__ */ d.jsxs("div", { className: "flex items-center", children: [
              /* @__PURE__ */ d.jsx(
                "input",
                {
                  type: "checkbox",
                  id: "is_active",
                  name: "is_active",
                  checked: u.is_active,
                  onChange: (_) => c({ ...u, is_active: _.target.checked }),
                  className: "w-4 h-4 mr-2"
                }
              ),
              /* @__PURE__ */ d.jsx(H, { htmlFor: "is_active", className: "text-white", children: "Active product" })
            ] }),
            /* @__PURE__ */ d.jsx("div", { className: "flex gap-4 pt-2", children: /* @__PURE__ */ d.jsx(
              te,
              {
                type: "submit",
                className: "bg-gold text-black hover:bg-gold/90",
                disabled: y.isPending || x.isPending,
                children: y.isPending || x.isPending ? /* @__PURE__ */ d.jsxs("div", { className: "flex items-center", children: [
                  /* @__PURE__ */ d.jsxs(
                    "svg",
                    {
                      className: "animate-spin -ml-1 mr-2 h-4 w-4",
                      xmlns: "http://www.w3.org/2000/svg",
                      fill: "none",
                      viewBox: "0 0 24 24",
                      children: [
                        /* @__PURE__ */ d.jsx(
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
                        /* @__PURE__ */ d.jsx(
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
    ] }) : /* @__PURE__ */ d.jsxs(
      te,
      {
        onClick: () => a(!0),
        className: "bg-gold text-black hover:bg-gold/90",
        children: [
          /* @__PURE__ */ d.jsx(
            "svg",
            {
              className: "w-4 h-4 mr-2",
              fill: "none",
              stroke: "currentColor",
              viewBox: "0 0 24 24",
              children: /* @__PURE__ */ d.jsx(
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
    /* @__PURE__ */ d.jsxs("div", { children: [
      /* @__PURE__ */ d.jsx("h2", { className: "font-serif text-xl text-gold mb-4", children: "All Products" }),
      /* @__PURE__ */ d.jsx(
        $r,
        {
          columns: se,
          data: (m == null ? void 0 : m.data) || [],
          onEdit: R,
          onDelete: L,
          isLoading: p
        }
      )
    ] })
  ] }) });
}, Id = ({ query: r }) => {
  const {
    createArticle: e,
    getAllArticles: t,
    deleteArticle: s,
    updateArticle: n,
    updateArticleStatus: i
  } = r, [a, o] = re(!1), [l, u] = re(null), [c, h] = re({
    title: "",
    slug: "",
    excerpt: "",
    content: "",
    cover_image: "",
    author_name: "",
    status: "draft",
    category: ""
  }), m = At(), { data: p, isLoading: y } = Ge({
    queryKey: ["admin-articles"],
    queryFn: t
  }), x = ve({
    mutationFn: e,
    onSuccess: () => {
      m.invalidateQueries({ queryKey: ["admin-articles"] }), q({
        title: "Article created successfully"
      }), N();
    },
    onError: (E) => {
      console.error("Failed to create article:", E), q({
        title: "Error",
        description: "Failed to create article. Please try again.",
        variant: "destructive"
      });
    }
  }), g = ve({
    mutationFn: ({ id: E, updates: K }) => n(E, K),
    onSuccess: () => {
      m.invalidateQueries({ queryKey: ["admin-articles"] }), q({
        title: "Article updated successfully"
      }), N();
    },
    onError: (E) => {
      console.error("Failed to update article:", E), q({
        title: "Error",
        description: "Failed to update article. Please try again.",
        variant: "destructive"
      });
    }
  }), k = ve({
    mutationFn: s,
    onSuccess: () => {
      m.invalidateQueries({ queryKey: ["admin-articles"] }), q({
        title: "Article deleted successfully"
      });
    },
    onError: (E) => {
      console.error("Failed to delete article:", E), q({
        title: "Error",
        description: "Failed to delete article. Please try again.",
        variant: "destructive"
      });
    }
  }), C = ve({
    mutationFn: ({
      id: E,
      status: K
    }) => i(E, K),
    onSuccess: () => {
      m.invalidateQueries({ queryKey: ["admin-articles"] }), q({
        title: "Article status updated"
      });
    },
    onError: (E) => {
      console.error("Failed to update article status:", E), q({
        title: "Error",
        description: "Failed to update article status. Please try again.",
        variant: "destructive"
      });
    }
  }), j = (E) => {
    const { name: K, value: de } = E.target;
    h({
      ...c,
      [K]: de
    });
  }, R = () => {
    if (c.title) {
      const E = c.title.toLowerCase().replace(/[^\w\s]/gi, "").replace(/\s+/g, "-");
      h({
        ...c,
        slug: E
      });
    }
  }, L = (E) => {
    E.preventDefault(), x.mutate(c);
  }, X = (E) => {
    E.preventDefault(), l && g.mutate({
      id: l.id,
      updates: c
    });
  }, se = (E) => {
    u(E), h({
      title: E.title,
      slug: E.slug,
      excerpt: E.excerpt,
      content: E.content,
      cover_image: E.cover_image,
      author_name: E.author_name,
      status: E.status,
      category: E.category || ""
    }), o(!0), window.scrollTo({ top: 0, behavior: "smooth" });
  }, T = (E) => {
    confirm("Are you sure you want to delete this article?") && k.mutate(E.id);
  }, _ = (E, K) => {
    C.mutate({ id: E, status: K });
  }, N = () => {
    u(null), h({
      title: "",
      slug: "",
      excerpt: "",
      content: "",
      cover_image: "",
      author_name: "",
      status: "draft",
      category: ""
    }), o(!1);
  }, W = [
    {
      key: "title",
      header: "Title",
      render: (E) => /* @__PURE__ */ d.jsx("div", { className: "font-medium", children: E })
    },
    {
      key: "slug",
      header: "Slug",
      render: (E) => /* @__PURE__ */ d.jsx("div", { className: "max-w-xs truncate font-mono text-xs text-emerald/70", children: E })
    },
    {
      key: "status",
      header: "Status",
      render: (E, K) => /* @__PURE__ */ d.jsxs("div", { className: "flex items-center space-x-2", children: [
        /* @__PURE__ */ d.jsx(
          "div",
          {
            className: `px-2 py-1 rounded-full text-xs ${E === "published" ? "bg-emerald/20 text-emerald" : "bg-gold/20 text-gold"}`,
            children: E === "published" ? "Published" : "Draft"
          }
        ),
        /* @__PURE__ */ d.jsxs(
          te,
          {
            variant: "ghost",
            size: "sm",
            className: "h-6 w-6 p-0 text-emerald/70",
            onClick: () => _(
              K.id,
              E === "published" ? "draft" : "published"
            ),
            children: [
              /* @__PURE__ */ d.jsx(
                "svg",
                {
                  className: "h-3 w-3",
                  fill: "none",
                  stroke: "currentColor",
                  viewBox: "0 0 24 24",
                  children: /* @__PURE__ */ d.jsx(
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
              /* @__PURE__ */ d.jsx("span", { className: "sr-only", children: "Toggle Status" })
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
  return /* @__PURE__ */ d.jsx(ar, { title: "Manage Articles", children: /* @__PURE__ */ d.jsxs("div", { className: "space-y-8", children: [
    /* @__PURE__ */ d.jsx("div", { className: "mb-8", children: a ? /* @__PURE__ */ d.jsxs("div", { className: "bg-emerald-light rounded-lg border border-gold/20 p-6", children: [
      /* @__PURE__ */ d.jsxs("div", { className: "flex justify-between items-center mb-6", children: [
        /* @__PURE__ */ d.jsx("h2", { className: "font-serif text-xl text-gold", children: l ? "Edit Article" : "Create New Article" }),
        /* @__PURE__ */ d.jsx(
          te,
          {
            variant: "ghost",
            size: "sm",
            onClick: N,
            className: "text-white/70 hover:text-white",
            children: "Cancel"
          }
        )
      ] }),
      /* @__PURE__ */ d.jsx(
        "form",
        {
          onSubmit: l ? X : L,
          children: /* @__PURE__ */ d.jsxs("div", { className: "space-y-4", children: [
            /* @__PURE__ */ d.jsxs("div", { children: [
              /* @__PURE__ */ d.jsx(H, { htmlFor: "title", className: "text-white", children: "Article Title" }),
              /* @__PURE__ */ d.jsxs("div", { className: "flex gap-2", children: [
                /* @__PURE__ */ d.jsx(
                  ae,
                  {
                    id: "title",
                    name: "title",
                    value: c.title,
                    onChange: j,
                    className: "flex-1 bg-emerald-gold/20 border-gold/30 text-black",
                    required: !0
                  }
                ),
                /* @__PURE__ */ d.jsx(
                  te,
                  {
                    type: "button",
                    variant: "outline",
                    className: "border-gold/30 text-gold",
                    onClick: R,
                    children: "Generate Slug"
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ d.jsxs("div", { children: [
              /* @__PURE__ */ d.jsx(H, { htmlFor: "slug", className: "text-white", children: "Slug" }),
              /* @__PURE__ */ d.jsx(
                ae,
                {
                  id: "slug",
                  name: "slug",
                  value: c.slug,
                  onChange: j,
                  className: "bg-emerald-gold/20 border-gold/30 text-black font-mono",
                  required: !0
                }
              )
            ] }),
            /* @__PURE__ */ d.jsxs("div", { children: [
              /* @__PURE__ */ d.jsx(H, { htmlFor: "author_name", className: "text-white", children: "Author" }),
              /* @__PURE__ */ d.jsx(
                ae,
                {
                  id: "author_name",
                  name: "author_name",
                  value: c.author_name,
                  onChange: j,
                  className: "bg-emerald-gold/20 border-gold/30 text-black",
                  required: !0
                }
              )
            ] }),
            /* @__PURE__ */ d.jsxs("div", { children: [
              /* @__PURE__ */ d.jsx(H, { htmlFor: "category", className: "text-white", children: "Category" }),
              /* @__PURE__ */ d.jsx(
                ae,
                {
                  id: "category",
                  name: "category",
                  value: c.category,
                  onChange: j,
                  className: "bg-emerald-gold/20 border-gold/30 text-black"
                }
              )
            ] }),
            /* @__PURE__ */ d.jsxs("div", { children: [
              /* @__PURE__ */ d.jsx(H, { htmlFor: "cover_image", className: "text-white", children: "Cover Image URL" }),
              /* @__PURE__ */ d.jsx(
                ae,
                {
                  id: "cover_image",
                  name: "cover_image",
                  value: c.cover_image,
                  onChange: j,
                  className: "bg-emerald-gold/20 border-gold/30 text-black",
                  placeholder: "https://example.com/image.jpg",
                  required: !0
                }
              )
            ] }),
            /* @__PURE__ */ d.jsxs("div", { children: [
              /* @__PURE__ */ d.jsx(H, { htmlFor: "excerpt", className: "text-white", children: "Excerpt" }),
              /* @__PURE__ */ d.jsx(
                "textarea",
                {
                  id: "excerpt",
                  name: "excerpt",
                  value: c.excerpt,
                  onChange: j,
                  className: "w-full rounded-md bg-emerald-gold/20 border-gold/30 text-black h-20 px-3 py-2",
                  required: !0
                }
              )
            ] }),
            /* @__PURE__ */ d.jsxs("div", { children: [
              /* @__PURE__ */ d.jsx(H, { htmlFor: "content", className: "text-white", children: "Content" }),
              /* @__PURE__ */ d.jsx(
                "textarea",
                {
                  id: "content",
                  name: "content",
                  value: c.content,
                  onChange: j,
                  className: "w-full rounded-md bg-emerald-gold/20 border-gold/30 text-black h-72 px-3 py-2 font-mono text-sm",
                  required: !0
                }
              )
            ] }),
            /* @__PURE__ */ d.jsxs("div", { children: [
              /* @__PURE__ */ d.jsx(H, { htmlFor: "status", className: "text-white", children: "Status" }),
              /* @__PURE__ */ d.jsxs("div", { className: "flex gap-4 mt-2", children: [
                /* @__PURE__ */ d.jsxs("label", { className: "flex items-center", children: [
                  /* @__PURE__ */ d.jsx(
                    "input",
                    {
                      type: "radio",
                      name: "status",
                      value: "draft",
                      checked: c.status === "draft",
                      onChange: j,
                      className: "mr-2"
                    }
                  ),
                  /* @__PURE__ */ d.jsx("span", { className: "text-white/80", children: "Draft" })
                ] }),
                /* @__PURE__ */ d.jsxs("label", { className: "flex items-center", children: [
                  /* @__PURE__ */ d.jsx(
                    "input",
                    {
                      type: "radio",
                      name: "status",
                      value: "published",
                      checked: c.status === "published",
                      onChange: j,
                      className: "mr-2"
                    }
                  ),
                  /* @__PURE__ */ d.jsx("span", { className: "text-white/80", children: "Published" })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ d.jsx("div", { className: "flex gap-4 pt-2", children: /* @__PURE__ */ d.jsx(
              te,
              {
                type: "submit",
                className: "bg-gold text-black hover:bg-gold/90",
                disabled: x.isPending || g.isPending,
                children: x.isPending || g.isPending ? /* @__PURE__ */ d.jsxs("div", { className: "flex items-center", children: [
                  /* @__PURE__ */ d.jsxs(
                    "svg",
                    {
                      className: "animate-spin -ml-1 mr-2 h-4 w-4",
                      xmlns: "http://www.w3.org/2000/svg",
                      fill: "none",
                      viewBox: "0 0 24 24",
                      children: [
                        /* @__PURE__ */ d.jsx(
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
                        /* @__PURE__ */ d.jsx(
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
                ] }) : l ? "Update Article" : "Create Article"
              }
            ) })
          ] })
        }
      )
    ] }) : /* @__PURE__ */ d.jsxs(
      te,
      {
        onClick: () => o(!0),
        className: "bg-gold text-black hover:bg-gold/90",
        children: [
          /* @__PURE__ */ d.jsx(
            "svg",
            {
              className: "w-4 h-4 mr-2",
              fill: "none",
              stroke: "currentColor",
              viewBox: "0 0 24 24",
              children: /* @__PURE__ */ d.jsx(
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
    /* @__PURE__ */ d.jsxs("div", { children: [
      /* @__PURE__ */ d.jsx("h2", { className: "font-serif text-xl text-gold mb-4", children: "All Articles" }),
      /* @__PURE__ */ d.jsx(
        $r,
        {
          columns: W,
          data: (p == null ? void 0 : p.data) || [],
          onEdit: se,
          onDelete: T,
          isLoading: y
        }
      )
    ] })
  ] }) });
}, Ps = v.forwardRef(({ className: r, ...e }, t) => /* @__PURE__ */ d.jsx(
  "div",
  {
    ref: t,
    className: oe(
      "rounded-lg border bg-card text-card-foreground shadow-sm",
      r
    ),
    ...e
  }
));
Ps.displayName = "Card";
const Os = v.forwardRef(({ className: r, ...e }, t) => /* @__PURE__ */ d.jsx(
  "div",
  {
    ref: t,
    className: oe("flex flex-col space-y-1.5 p-6", r),
    ...e
  }
));
Os.displayName = "CardHeader";
const As = v.forwardRef(({ className: r, ...e }, t) => /* @__PURE__ */ d.jsx(
  "h3",
  {
    ref: t,
    className: oe(
      "text-2xl font-semibold leading-none tracking-tight",
      r
    ),
    ...e
  }
));
As.displayName = "CardTitle";
const Fd = v.forwardRef(({ className: r, ...e }, t) => /* @__PURE__ */ d.jsx(
  "p",
  {
    ref: t,
    className: oe("text-sm text-muted-foreground", r),
    ...e
  }
));
Fd.displayName = "CardDescription";
const Ls = v.forwardRef(({ className: r, ...e }, t) => /* @__PURE__ */ d.jsx("div", { ref: t, className: oe("p-6 pt-0", r), ...e }));
Ls.displayName = "CardContent";
const Dd = v.forwardRef(({ className: r, ...e }, t) => /* @__PURE__ */ d.jsx(
  "div",
  {
    ref: t,
    className: oe("flex items-center p-6 pt-0", r),
    ...e
  }
));
Dd.displayName = "CardFooter";
const Ud = ({
  getAllProducts: r,
  getAllArticles: e,
  getGalleryItems: t,
  getTestimonials: s
}) => {
  const [n, i] = re({
    products: 0,
    articles: 0,
    gallery: 0,
    testimonials: 0
  }), { data: a, isSuccess: o } = Ge({
    queryKey: ["admin-products"],
    queryFn: r
  }), { data: l, isSuccess: u } = Ge({
    queryKey: ["admin-articles"],
    queryFn: e
  }), { data: c, isSuccess: h } = Ge({
    queryKey: ["admin-gallery"],
    queryFn: t
  }), { data: m, isSuccess: p } = Ge({
    queryKey: ["admin-testimonials"],
    queryFn: s
  });
  $s(() => {
    const g = { ...n };
    o && a.data && (g.products = a.data.length), u && l.data && (g.articles = l.data.length), h && c.data && (g.gallery = c.data.length), p && m.data && (g.testimonials = m.data.length), i(g);
  }, [
    o,
    u,
    h,
    p,
    a,
    l,
    c,
    m
  ]);
  const y = [
    {
      title: "Products",
      value: n.products,
      icon: "box",
      link: "/admin/products",
      color: "bg-gradient-to-br from-emerald to-emerald-light"
    },
    {
      title: "Articles",
      value: n.articles,
      icon: "file-text",
      link: "/admin/articles",
      color: "bg-gradient-to-br from-burgundy to-burgundy-light"
    },
    {
      title: "Gallery Items",
      value: n.gallery,
      icon: "image",
      link: "/admin/gallery",
      color: "bg-gradient-to-br from-emerald-light to-emerald"
    },
    {
      title: "Testimonials",
      value: n.testimonials,
      icon: "message-square",
      link: "/admin/testimonials",
      color: "bg-gradient-to-br from-gold to-gold-light"
    }
  ], x = [
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
  return /* @__PURE__ */ d.jsx(ar, { title: "Admin Dashboard", children: /* @__PURE__ */ d.jsxs("div", { className: "space-y-8", children: [
    /* @__PURE__ */ d.jsxs("div", { className: "bg-emerald p-6 rounded-lg shadow-lg border border-white/10 mb-8", children: [
      /* @__PURE__ */ d.jsx("h2", { className: "font-serif text-2xl text-gold mb-2", children: "Welcome to Velour Essence Admin" }),
      /* @__PURE__ */ d.jsx("p", { className: "text-white/80", children: "Manage your luxury fragrance brand content from this central dashboard. Select a section below to begin editing your site's content." })
    ] }),
    /* @__PURE__ */ d.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5", children: y.map((g, k) => /* @__PURE__ */ d.jsx(
      it,
      {
        to: g.link,
        className: "transition-transform hover:scale-105",
        children: /* @__PURE__ */ d.jsxs(Ps, { className: `border-0 shadow-lg ${g.color} text-white`, children: [
          /* @__PURE__ */ d.jsx(Os, { className: "pb-2", children: /* @__PURE__ */ d.jsxs("div", { className: "flex justify-between items-center", children: [
            /* @__PURE__ */ d.jsx(As, { className: "text-lg font-serif", children: g.title }),
            /* @__PURE__ */ d.jsx("div", { className: "bg-white/20 p-2 rounded-full", children: /* @__PURE__ */ d.jsxs(
              "svg",
              {
                className: "w-5 h-5",
                fill: "none",
                stroke: "currentColor",
                viewBox: "0 0 24 24",
                children: [
                  g.icon === "box" && /* @__PURE__ */ d.jsx(
                    "path",
                    {
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      strokeWidth: "2",
                      d: "M20 7l-8-4-8 4m16 0v10a2 2 0 01-2 2H6a2 2 0 01-2-2V7m16 0l-8 4m-8-4l8 4"
                    }
                  ),
                  g.icon === "file-text" && /* @__PURE__ */ d.jsx(
                    "path",
                    {
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      strokeWidth: "2",
                      d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    }
                  ),
                  g.icon === "image" && /* @__PURE__ */ d.jsx(
                    "path",
                    {
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      strokeWidth: "2",
                      d: "M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    }
                  ),
                  g.icon === "message-square" && /* @__PURE__ */ d.jsx(
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
          /* @__PURE__ */ d.jsxs(Ls, { children: [
            /* @__PURE__ */ d.jsx("div", { className: "text-3xl font-bold", children: g.value }),
            /* @__PURE__ */ d.jsxs("p", { className: "text-sm text-white/70 mt-1", children: [
              "Total ",
              g.title.toLowerCase()
            ] })
          ] })
        ] })
      },
      k
    )) }),
    /* @__PURE__ */ d.jsxs("div", { className: "mt-12 space-y-4", children: [
      /* @__PURE__ */ d.jsx("h2", { className: "font-serif text-xl text-gold mb-4", children: "Quick Actions" }),
      /* @__PURE__ */ d.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5", children: x.map((g, k) => /* @__PURE__ */ d.jsx(
        it,
        {
          to: g.link,
          className: "transition-transform hover:scale-105",
          children: /* @__PURE__ */ d.jsxs(Ps, { className: "bg-emerald-light border border-gold/10 shadow-lg", children: [
            /* @__PURE__ */ d.jsx(Os, { className: "pb-2", children: /* @__PURE__ */ d.jsxs("div", { className: "flex justify-between items-center", children: [
              /* @__PURE__ */ d.jsx(As, { className: "text-md font-serif text-gold", children: g.title }),
              /* @__PURE__ */ d.jsx("div", { className: "bg-gold/20 text-gold p-2 rounded-full", children: /* @__PURE__ */ d.jsxs(
                "svg",
                {
                  className: "w-5 h-5",
                  fill: "none",
                  stroke: "currentColor",
                  viewBox: "0 0 24 24",
                  children: [
                    g.icon === "plus-circle" && /* @__PURE__ */ d.jsx(
                      "path",
                      {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: "2",
                        d: "M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                      }
                    ),
                    g.icon === "edit" && /* @__PURE__ */ d.jsx(
                      "path",
                      {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: "2",
                        d: "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                      }
                    ),
                    g.icon === "upload" && /* @__PURE__ */ d.jsx(
                      "path",
                      {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: "2",
                        d: "M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
                      }
                    ),
                    g.icon === "star" && /* @__PURE__ */ d.jsx(
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
            /* @__PURE__ */ d.jsx(Ls, { children: /* @__PURE__ */ d.jsx("p", { className: "text-sm text-white/70", children: g.description }) })
          ] })
        },
        k
      )) })
    ] }),
    /* @__PURE__ */ d.jsx("div", { className: "py-6 text-center", children: /* @__PURE__ */ d.jsxs(
      it,
      {
        to: "/",
        className: "text-gold hover:text-gold-light flex items-center justify-center",
        children: [
          /* @__PURE__ */ d.jsx("span", { children: "View your website" }),
          /* @__PURE__ */ d.jsx(
            "svg",
            {
              className: "ml-2 w-4 h-4",
              fill: "none",
              stroke: "currentColor",
              viewBox: "0 0 24 24",
              children: /* @__PURE__ */ d.jsx(
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
const Md = (r) => r.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), ia = (...r) => r.filter((e, t, s) => !!e && e.trim() !== "" && s.indexOf(e) === t).join(" ").trim();
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var qd = {
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
const Bd = hi(
  ({
    color: r = "currentColor",
    size: e = 24,
    strokeWidth: t = 2,
    absoluteStrokeWidth: s,
    className: n = "",
    children: i,
    iconNode: a,
    ...o
  }, l) => ns(
    "svg",
    {
      ref: l,
      ...qd,
      width: e,
      height: e,
      stroke: r,
      strokeWidth: s ? Number(t) * 24 / Number(e) : t,
      className: ia("lucide", n),
      ...o
    },
    [
      ...a.map(([u, c]) => ns(u, c)),
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
const zd = (r, e) => {
  const t = hi(
    ({ className: s, ...n }, i) => ns(Bd, {
      ref: i,
      iconNode: e,
      className: ia(`lucide-${Md(r)}`, s),
      ...n
    })
  );
  return t.displayName = `${r}`, t;
};
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ai = zd("Star", [
  [
    "path",
    {
      d: "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",
      key: "r04s7s"
    }
  ]
]), Vd = ({ query: r }) => {
  const {
    getTestimonials: e,
    createTestimonial: t,
    updateTestimonial: s,
    deleteTestimonial: n
  } = r, [i, a] = re(!1), [o, l] = re(null), [u, c] = re({
    parent_name: "",
    testimonial: "",
    rating: 5,
    avatar_url: "",
    is_featured: !1,
    child_name: null,
    child_age: null
  }), h = At(), { data: m, isLoading: p } = Ge({
    queryKey: ["admin-testimonials"],
    queryFn: e
  }), y = ve({
    mutationFn: t,
    onSuccess: () => {
      h.invalidateQueries({ queryKey: ["admin-testimonials"] }), q({
        title: "Testimonial created successfully"
      }), se();
    },
    onError: (_) => {
      console.error("Failed to create testimonial:", _), q({
        title: "Error",
        description: "Failed to create testimonial. Please try again.",
        variant: "destructive"
      });
    }
  }), x = ve({
    mutationFn: ({ id: _, updates: N }) => s(_, N),
    onSuccess: () => {
      h.invalidateQueries({ queryKey: ["admin-testimonials"] }), q({
        title: "Testimonial updated successfully"
      }), se();
    },
    onError: (_) => {
      console.error("Failed to update testimonial:", _), q({
        title: "Error",
        description: "Failed to update testimonial. Please try again.",
        variant: "destructive"
      });
    }
  }), g = ve({
    mutationFn: n,
    onSuccess: () => {
      h.invalidateQueries({ queryKey: ["admin-testimonials"] }), q({
        title: "Testimonial deleted successfully"
      });
    },
    onError: (_) => {
      console.error("Failed to delete testimonial:", _), q({
        title: "Error",
        description: "Failed to delete testimonial. Please try again.",
        variant: "destructive"
      });
    }
  }), k = (_) => {
    const { name: N, value: W, type: E } = _.target;
    c(E === "checkbox" ? {
      ...u,
      [N]: _.target.checked
    } : E === "number" ? {
      ...u,
      [N]: W === "" ? null : Number(W)
    } : {
      ...u,
      [N]: W
    });
  }, C = (_) => {
    c({
      ...u,
      rating: _
    });
  }, j = (_) => {
    _.preventDefault(), y.mutate(u);
  }, R = (_) => {
    _.preventDefault(), o && x.mutate({
      id: o.id,
      updates: u
    });
  }, L = (_) => {
    l(_), c({
      parent_name: _.parent_name,
      testimonial: _.testimonial,
      rating: _.rating,
      avatar_url: _.avatar_url || "",
      is_featured: _.is_featured || !1,
      child_name: _.child_name,
      child_age: _.child_age
    }), a(!0), window.scrollTo({ top: 0, behavior: "smooth" });
  }, X = (_) => {
    confirm("Are you sure you want to delete this testimonial?") && g.mutate(_.id);
  }, se = () => {
    l(null), c({
      parent_name: "",
      testimonial: "",
      rating: 5,
      avatar_url: "",
      is_featured: !1,
      child_name: null,
      child_age: null
    }), a(!1);
  }, T = [
    {
      key: "parent_name",
      header: "Name",
      render: (_, N) => /* @__PURE__ */ d.jsxs("div", { children: [
        /* @__PURE__ */ d.jsx("div", { className: "font-medium", children: _ }),
        N.child_name && /* @__PURE__ */ d.jsxs("div", { className: "text-xs text-white/60", children: [
          "Child: ",
          N.child_name,
          ", ",
          N.child_age,
          " y.o."
        ] })
      ] })
    },
    {
      key: "testimonial",
      header: "Testimonial",
      render: (_) => /* @__PURE__ */ d.jsx("div", { className: "max-w-xs truncate", children: _ })
    },
    {
      key: "rating",
      header: "Rating",
      render: (_) => /* @__PURE__ */ d.jsx("div", { className: "flex", children: [...Array(5)].map((N, W) => /* @__PURE__ */ d.jsx(
        ai,
        {
          className: `h-4 w-4 ${W < _ ? "text-gold fill-gold" : "text-gray-300"}`
        },
        W
      )) })
    },
    {
      key: "is_featured",
      header: "Featured",
      render: (_) => /* @__PURE__ */ d.jsx("div", { className: _ ? "text-gold" : "text-white/40", children: _ ? /* @__PURE__ */ d.jsx("svg", { className: "w-5 h-5 fill-current", viewBox: "0 0 24 24", children: /* @__PURE__ */ d.jsx("path", { d: "M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" }) }) : "—" })
    }
  ];
  return /* @__PURE__ */ d.jsx(ar, { title: "Manage Testimonials", children: /* @__PURE__ */ d.jsxs("div", { className: "space-y-8", children: [
    /* @__PURE__ */ d.jsx("div", { className: "mb-8", children: i ? /* @__PURE__ */ d.jsxs("div", { className: "bg-emerald-light rounded-lg border border-gold/20 p-6", children: [
      /* @__PURE__ */ d.jsxs("div", { className: "flex justify-between items-center mb-6", children: [
        /* @__PURE__ */ d.jsx("h2", { className: "font-serif text-xl text-gold", children: o ? "Edit Testimonial" : "Add New Testimonial" }),
        /* @__PURE__ */ d.jsx(
          te,
          {
            variant: "ghost",
            size: "sm",
            onClick: se,
            className: "text-white/70 hover:text-white",
            children: "Cancel"
          }
        )
      ] }),
      /* @__PURE__ */ d.jsx(
        "form",
        {
          onSubmit: o ? R : j,
          children: /* @__PURE__ */ d.jsxs("div", { className: "space-y-4", children: [
            /* @__PURE__ */ d.jsxs("div", { children: [
              /* @__PURE__ */ d.jsx(H, { htmlFor: "parent_name", className: "text-white", children: "Name" }),
              /* @__PURE__ */ d.jsx(
                ae,
                {
                  id: "parent_name",
                  name: "parent_name",
                  value: u.parent_name,
                  onChange: k,
                  className: "bg-emerald-gold/20 border-gold/30 text-black",
                  required: !0
                }
              )
            ] }),
            /* @__PURE__ */ d.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
              /* @__PURE__ */ d.jsxs("div", { children: [
                /* @__PURE__ */ d.jsx(H, { htmlFor: "child_name", className: "text-white", children: "Child's Name (Optional)" }),
                /* @__PURE__ */ d.jsx(
                  ae,
                  {
                    id: "child_name",
                    name: "child_name",
                    value: u.child_name || "",
                    onChange: k,
                    className: "bg-emerald-gold/20 border-gold/30 text-black"
                  }
                )
              ] }),
              /* @__PURE__ */ d.jsxs("div", { children: [
                /* @__PURE__ */ d.jsx(H, { htmlFor: "child_age", className: "text-white", children: "Child's Age (Optional)" }),
                /* @__PURE__ */ d.jsx(
                  ae,
                  {
                    id: "child_age",
                    name: "child_age",
                    type: "number",
                    value: u.child_age !== null ? u.child_age : "",
                    onChange: k,
                    className: "bg-emerald-gold/20 border-gold/30 text-black",
                    min: "0",
                    max: "100"
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ d.jsxs("div", { children: [
              /* @__PURE__ */ d.jsx(H, { htmlFor: "testimonial", className: "text-white", children: "Testimonial" }),
              /* @__PURE__ */ d.jsx(
                "textarea",
                {
                  id: "testimonial",
                  name: "testimonial",
                  value: u.testimonial,
                  onChange: k,
                  className: "w-full rounded-md bg-emerald-gold/20 border-gold/30 text-black h-24 px-3 py-2",
                  required: !0
                }
              )
            ] }),
            /* @__PURE__ */ d.jsxs("div", { children: [
              /* @__PURE__ */ d.jsx(H, { htmlFor: "rating", className: "text-white", children: "Rating" }),
              /* @__PURE__ */ d.jsx("div", { className: "flex mt-2", children: [...Array(5)].map((_, N) => /* @__PURE__ */ d.jsx(
                ai,
                {
                  className: `h-6 w-6 cursor-pointer ${N < u.rating ? "text-gold fill-gold" : "text-white-500"}`,
                  onClick: () => C(N + 1)
                },
                N
              )) })
            ] }),
            /* @__PURE__ */ d.jsxs("div", { children: [
              /* @__PURE__ */ d.jsx(H, { htmlFor: "avatar_url", className: "text-white", children: "Avatar URL (Optional)" }),
              /* @__PURE__ */ d.jsx(
                ae,
                {
                  id: "avatar_url",
                  name: "avatar_url",
                  value: u.avatar_url || "",
                  onChange: k,
                  className: "bg-emerald-gold/20 border-gold/30 text-black",
                  placeholder: "https://example.com/avatar.jpg"
                }
              )
            ] }),
            /* @__PURE__ */ d.jsxs("div", { className: "flex items-center", children: [
              /* @__PURE__ */ d.jsx(
                "input",
                {
                  type: "checkbox",
                  id: "is_featured",
                  name: "is_featured",
                  checked: u.is_featured || !1,
                  onChange: k,
                  className: "w-4 h-4 mr-2"
                }
              ),
              /* @__PURE__ */ d.jsx(H, { htmlFor: "is_featured", className: "text-white", children: "Featured testimonial" })
            ] }),
            /* @__PURE__ */ d.jsx("div", { className: "flex gap-4 pt-2", children: /* @__PURE__ */ d.jsx(
              te,
              {
                type: "submit",
                className: "bg-gold text-black hover:bg-gold/90",
                disabled: y.isPending || x.isPending,
                children: y.isPending || x.isPending ? /* @__PURE__ */ d.jsxs("div", { className: "flex items-center", children: [
                  /* @__PURE__ */ d.jsxs(
                    "svg",
                    {
                      className: "animate-spin -ml-1 mr-2 h-4 w-4",
                      xmlns: "http://www.w3.org/2000/svg",
                      fill: "none",
                      viewBox: "0 0 24 24",
                      children: [
                        /* @__PURE__ */ d.jsx(
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
                        /* @__PURE__ */ d.jsx(
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
    ] }) : /* @__PURE__ */ d.jsxs(
      te,
      {
        onClick: () => a(!0),
        className: "bg-gold text-black hover:bg-gold/90",
        children: [
          /* @__PURE__ */ d.jsx(
            "svg",
            {
              className: "w-4 h-4 mr-2",
              fill: "none",
              stroke: "currentColor",
              viewBox: "0 0 24 24",
              children: /* @__PURE__ */ d.jsx(
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
    /* @__PURE__ */ d.jsxs("div", { children: [
      /* @__PURE__ */ d.jsx("h2", { className: "font-serif text-xl text-gold mb-4", children: "All Testimonials" }),
      /* @__PURE__ */ d.jsx(
        $r,
        {
          columns: T,
          data: (m == null ? void 0 : m.data) || [],
          onEdit: L,
          onDelete: X,
          isLoading: p
        }
      )
    ] })
  ] }) });
}, zt = ({
  children: r,
  getCurrentSession: e
}) => {
  const [t, s] = re(null), [n, i] = re(!0);
  return $s(() => {
    (async () => {
      const { data: o } = await e();
      o && o.session && s(o.session), i(!1);
    })();
  }, []), n ? /* @__PURE__ */ d.jsx("div", { className: "flex items-center justify-center min-h-screen bg-background", children: /* @__PURE__ */ d.jsx("div", { className: "w-16 h-16 border-4 border-gold border-t-transparent rounded-full animate-spin" }) }) : t ? /* @__PURE__ */ d.jsx(d.Fragment, { children: r }) : /* @__PURE__ */ d.jsx(Eo, { to: "/auth/login", replace: !0 });
}, Zd = ({ config: r, children: e }) => {
  const t = iu(r.projectId, r.supabaseUrl, r.supabaseKey);
  return /* @__PURE__ */ d.jsx(Nd, { config: r, logout: t.auth.logout, children: /* @__PURE__ */ d.jsxs(Co, { children: [
    e,
    /* @__PURE__ */ d.jsx(
      Xe,
      {
        path: "/auth/login",
        element: /* @__PURE__ */ d.jsx(
          rd,
          {
            loginWithEmailPassword: t.auth.loginWithEmailPassword
          }
        )
      }
    ),
    /* @__PURE__ */ d.jsx(
      Xe,
      {
        path: "/admin",
        element: /* @__PURE__ */ d.jsx(zt, { getCurrentSession: t.auth.getCurrentSession, children: /* @__PURE__ */ d.jsx(
          Ud,
          {
            getAllArticles: t.articles.getAllArticles,
            getAllProducts: t.products.getAllProducts,
            getGalleryItems: t.gallery.getGalleryItems,
            getTestimonials: t.testimonials.getTestimonials
          }
        ) })
      }
    ),
    /* @__PURE__ */ d.jsx(
      Xe,
      {
        path: "/admin/products",
        element: /* @__PURE__ */ d.jsx(zt, { getCurrentSession: t.auth.getCurrentSession, children: /* @__PURE__ */ d.jsx($d, { query: t.products }) })
      }
    ),
    /* @__PURE__ */ d.jsx(
      Xe,
      {
        path: "/admin/articles",
        element: /* @__PURE__ */ d.jsx(zt, { getCurrentSession: t.auth.getCurrentSession, children: /* @__PURE__ */ d.jsx(Id, { query: t.articles }) })
      }
    ),
    /* @__PURE__ */ d.jsx(
      Xe,
      {
        path: "/admin/gallery",
        element: /* @__PURE__ */ d.jsx(zt, { getCurrentSession: t.auth.getCurrentSession, children: /* @__PURE__ */ d.jsx(Ld, { query: t.gallery }) })
      }
    ),
    /* @__PURE__ */ d.jsx(
      Xe,
      {
        path: "/admin/testimonials",
        element: /* @__PURE__ */ d.jsx(zt, { getCurrentSession: t.auth.getCurrentSession, children: /* @__PURE__ */ d.jsx(Vd, { query: t.testimonials }) })
      }
    )
  ] }) });
};
export {
  Zd as A,
  $a as g
};
