var Kr = (e) => {
  throw TypeError(e);
};
var $t = (e, t, r) => t.has(e) || Kr("Cannot " + r);
var m = (e, t, r) => ($t(e, t, "read from private field"), r ? r.call(e) : t.get(e)), U = (e, t, r) => t.has(e) ? Kr("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), L = (e, t, r, n) => ($t(e, t, "write to private field"), n ? n.call(e, r) : t.set(e, r), r), B = (e, t, r) => ($t(e, t, "access private method"), r);
import * as p from "react";
import ws, { createContext as Rn, useContext as Sn, useState as Z, useEffect as xr, forwardRef as js, createElement as Jt } from "react";
import "react-dom";
var bt = { exports: {} }, st = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Qr;
function _n() {
  if (Qr) return st;
  Qr = 1;
  var e = ws, t = Symbol.for("react.element"), r = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, a = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, i = { key: !0, ref: !0, __self: !0, __source: !0 };
  function c(l, d, u) {
    var h, f = {}, g = null, N = null;
    u !== void 0 && (g = "" + u), d.key !== void 0 && (g = "" + d.key), d.ref !== void 0 && (N = d.ref);
    for (h in d) n.call(d, h) && !i.hasOwnProperty(h) && (f[h] = d[h]);
    if (l && l.defaultProps) for (h in d = l.defaultProps, d) f[h] === void 0 && (f[h] = d[h]);
    return { $$typeof: t, type: l, key: g, ref: N, props: f, _owner: a.current };
  }
  return st.Fragment = r, st.jsx = c, st.jsxs = c, st;
}
var nt = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Hr;
function Pn() {
  return Hr || (Hr = 1, process.env.NODE_ENV !== "production" && function() {
    var e = ws, t = Symbol.for("react.element"), r = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), a = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), c = Symbol.for("react.provider"), l = Symbol.for("react.context"), d = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), h = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), g = Symbol.for("react.lazy"), N = Symbol.for("react.offscreen"), R = Symbol.iterator, k = "@@iterator";
    function C(o) {
      if (o === null || typeof o != "object")
        return null;
      var v = R && o[R] || o[k];
      return typeof v == "function" ? v : null;
    }
    var y = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function j(o) {
      {
        for (var v = arguments.length, w = new Array(v > 1 ? v - 1 : 0), _ = 1; _ < v; _++)
          w[_ - 1] = arguments[_];
        P("error", o, w);
      }
    }
    function P(o, v, w) {
      {
        var _ = y.ReactDebugCurrentFrame, D = _.getStackAddendum();
        D !== "" && (v += "%s", w = w.concat([D]));
        var z = w.map(function(M) {
          return String(M);
        });
        z.unshift("Warning: " + v), Function.prototype.apply.call(console[o], console, z);
      }
    }
    var O = !1, H = !1, K = !1, ee = !1, E = !1, x;
    x = Symbol.for("react.module.reference");
    function S(o) {
      return !!(typeof o == "string" || typeof o == "function" || o === n || o === i || E || o === a || o === u || o === h || ee || o === N || O || H || K || typeof o == "object" && o !== null && (o.$$typeof === g || o.$$typeof === f || o.$$typeof === c || o.$$typeof === l || o.$$typeof === d || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      o.$$typeof === x || o.getModuleId !== void 0));
    }
    function W(o, v, w) {
      var _ = o.displayName;
      if (_)
        return _;
      var D = v.displayName || v.name || "";
      return D !== "" ? w + "(" + D + ")" : w;
    }
    function b(o) {
      return o.displayName || "Context";
    }
    function q(o) {
      if (o == null)
        return null;
      if (typeof o.tag == "number" && j("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof o == "function")
        return o.displayName || o.name || null;
      if (typeof o == "string")
        return o;
      switch (o) {
        case n:
          return "Fragment";
        case r:
          return "Portal";
        case i:
          return "Profiler";
        case a:
          return "StrictMode";
        case u:
          return "Suspense";
        case h:
          return "SuspenseList";
      }
      if (typeof o == "object")
        switch (o.$$typeof) {
          case l:
            var v = o;
            return b(v) + ".Consumer";
          case c:
            var w = o;
            return b(w._context) + ".Provider";
          case d:
            return W(o, o.render, "ForwardRef");
          case f:
            var _ = o.displayName || null;
            return _ !== null ? _ : q(o.type) || "Memo";
          case g: {
            var D = o, z = D._payload, M = D._init;
            try {
              return q(M(z));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var ae = Object.assign, ve = 0, _e, et, De, xe, tt, de, Pr;
    function Tr() {
    }
    Tr.__reactDisabledLog = !0;
    function Zs() {
      {
        if (ve === 0) {
          _e = console.log, et = console.info, De = console.warn, xe = console.error, tt = console.group, de = console.groupCollapsed, Pr = console.groupEnd;
          var o = {
            configurable: !0,
            enumerable: !0,
            value: Tr,
            writable: !0
          };
          Object.defineProperties(console, {
            info: o,
            log: o,
            warn: o,
            error: o,
            group: o,
            groupCollapsed: o,
            groupEnd: o
          });
        }
        ve++;
      }
    }
    function en() {
      {
        if (ve--, ve === 0) {
          var o = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: ae({}, o, {
              value: _e
            }),
            info: ae({}, o, {
              value: et
            }),
            warn: ae({}, o, {
              value: De
            }),
            error: ae({}, o, {
              value: xe
            }),
            group: ae({}, o, {
              value: tt
            }),
            groupCollapsed: ae({}, o, {
              value: de
            }),
            groupEnd: ae({}, o, {
              value: Pr
            })
          });
        }
        ve < 0 && j("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Ft = y.ReactCurrentDispatcher, Mt;
    function pt(o, v, w) {
      {
        if (Mt === void 0)
          try {
            throw Error();
          } catch (D) {
            var _ = D.stack.trim().match(/\n( *(at )?)/);
            Mt = _ && _[1] || "";
          }
        return `
` + Mt + o;
      }
    }
    var It = !1, gt;
    {
      var tn = typeof WeakMap == "function" ? WeakMap : Map;
      gt = new tn();
    }
    function Or(o, v) {
      if (!o || It)
        return "";
      {
        var w = gt.get(o);
        if (w !== void 0)
          return w;
      }
      var _;
      It = !0;
      var D = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var z;
      z = Ft.current, Ft.current = null, Zs();
      try {
        if (v) {
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
            } catch (ie) {
              _ = ie;
            }
            Reflect.construct(o, [], M);
          } else {
            try {
              M.call();
            } catch (ie) {
              _ = ie;
            }
            o.call(M.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (ie) {
            _ = ie;
          }
          o();
        }
      } catch (ie) {
        if (ie && _ && typeof ie.stack == "string") {
          for (var A = ie.stack.split(`
`), se = _.stack.split(`
`), Y = A.length - 1, J = se.length - 1; Y >= 1 && J >= 0 && A[Y] !== se[J]; )
            J--;
          for (; Y >= 1 && J >= 0; Y--, J--)
            if (A[Y] !== se[J]) {
              if (Y !== 1 || J !== 1)
                do
                  if (Y--, J--, J < 0 || A[Y] !== se[J]) {
                    var ue = `
` + A[Y].replace(" at new ", " at ");
                    return o.displayName && ue.includes("<anonymous>") && (ue = ue.replace("<anonymous>", o.displayName)), typeof o == "function" && gt.set(o, ue), ue;
                  }
                while (Y >= 1 && J >= 0);
              break;
            }
        }
      } finally {
        It = !1, Ft.current = z, en(), Error.prepareStackTrace = D;
      }
      var Ue = o ? o.displayName || o.name : "", Pe = Ue ? pt(Ue) : "";
      return typeof o == "function" && gt.set(o, Pe), Pe;
    }
    function rn(o, v, w) {
      return Or(o, !1);
    }
    function sn(o) {
      var v = o.prototype;
      return !!(v && v.isReactComponent);
    }
    function vt(o, v, w) {
      if (o == null)
        return "";
      if (typeof o == "function")
        return Or(o, sn(o));
      if (typeof o == "string")
        return pt(o);
      switch (o) {
        case u:
          return pt("Suspense");
        case h:
          return pt("SuspenseList");
      }
      if (typeof o == "object")
        switch (o.$$typeof) {
          case d:
            return rn(o.render);
          case f:
            return vt(o.type, v, w);
          case g: {
            var _ = o, D = _._payload, z = _._init;
            try {
              return vt(z(D), v, w);
            } catch {
            }
          }
        }
      return "";
    }
    var rt = Object.prototype.hasOwnProperty, Lr = {}, Ar = y.ReactDebugCurrentFrame;
    function xt(o) {
      if (o) {
        var v = o._owner, w = vt(o.type, o._source, v ? v.type : null);
        Ar.setExtraStackFrame(w);
      } else
        Ar.setExtraStackFrame(null);
    }
    function nn(o, v, w, _, D) {
      {
        var z = Function.call.bind(rt);
        for (var M in o)
          if (z(o, M)) {
            var A = void 0;
            try {
              if (typeof o[M] != "function") {
                var se = Error((_ || "React class") + ": " + w + " type `" + M + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof o[M] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw se.name = "Invariant Violation", se;
              }
              A = o[M](v, M, _, w, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (Y) {
              A = Y;
            }
            A && !(A instanceof Error) && (xt(D), j("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", _ || "React class", w, M, typeof A), xt(null)), A instanceof Error && !(A.message in Lr) && (Lr[A.message] = !0, xt(D), j("Failed %s type: %s", w, A.message), xt(null));
          }
      }
    }
    var an = Array.isArray;
    function Dt(o) {
      return an(o);
    }
    function on(o) {
      {
        var v = typeof Symbol == "function" && Symbol.toStringTag, w = v && o[Symbol.toStringTag] || o.constructor.name || "Object";
        return w;
      }
    }
    function ln(o) {
      try {
        return Fr(o), !1;
      } catch {
        return !0;
      }
    }
    function Fr(o) {
      return "" + o;
    }
    function Mr(o) {
      if (ln(o))
        return j("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", on(o)), Fr(o);
    }
    var Ir = y.ReactCurrentOwner, cn = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Dr, Vr;
    function dn(o) {
      if (rt.call(o, "ref")) {
        var v = Object.getOwnPropertyDescriptor(o, "ref").get;
        if (v && v.isReactWarning)
          return !1;
      }
      return o.ref !== void 0;
    }
    function un(o) {
      if (rt.call(o, "key")) {
        var v = Object.getOwnPropertyDescriptor(o, "key").get;
        if (v && v.isReactWarning)
          return !1;
      }
      return o.key !== void 0;
    }
    function hn(o, v) {
      typeof o.ref == "string" && Ir.current;
    }
    function fn(o, v) {
      {
        var w = function() {
          Dr || (Dr = !0, j("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", v));
        };
        w.isReactWarning = !0, Object.defineProperty(o, "key", {
          get: w,
          configurable: !0
        });
      }
    }
    function mn(o, v) {
      {
        var w = function() {
          Vr || (Vr = !0, j("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", v));
        };
        w.isReactWarning = !0, Object.defineProperty(o, "ref", {
          get: w,
          configurable: !0
        });
      }
    }
    var pn = function(o, v, w, _, D, z, M) {
      var A = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: o,
        key: v,
        ref: w,
        props: M,
        // Record the component responsible for creating this element.
        _owner: z
      };
      return A._store = {}, Object.defineProperty(A._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(A, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: _
      }), Object.defineProperty(A, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: D
      }), Object.freeze && (Object.freeze(A.props), Object.freeze(A)), A;
    };
    function gn(o, v, w, _, D) {
      {
        var z, M = {}, A = null, se = null;
        w !== void 0 && (Mr(w), A = "" + w), un(v) && (Mr(v.key), A = "" + v.key), dn(v) && (se = v.ref, hn(v, D));
        for (z in v)
          rt.call(v, z) && !cn.hasOwnProperty(z) && (M[z] = v[z]);
        if (o && o.defaultProps) {
          var Y = o.defaultProps;
          for (z in Y)
            M[z] === void 0 && (M[z] = Y[z]);
        }
        if (A || se) {
          var J = typeof o == "function" ? o.displayName || o.name || "Unknown" : o;
          A && fn(M, J), se && mn(M, J);
        }
        return pn(o, A, se, D, _, Ir.current, M);
      }
    }
    var Vt = y.ReactCurrentOwner, Ur = y.ReactDebugCurrentFrame;
    function Ve(o) {
      if (o) {
        var v = o._owner, w = vt(o.type, o._source, v ? v.type : null);
        Ur.setExtraStackFrame(w);
      } else
        Ur.setExtraStackFrame(null);
    }
    var Ut;
    Ut = !1;
    function Wt(o) {
      return typeof o == "object" && o !== null && o.$$typeof === t;
    }
    function Wr() {
      {
        if (Vt.current) {
          var o = q(Vt.current.type);
          if (o)
            return `

Check the render method of \`` + o + "`.";
        }
        return "";
      }
    }
    function vn(o) {
      return "";
    }
    var zr = {};
    function xn(o) {
      {
        var v = Wr();
        if (!v) {
          var w = typeof o == "string" ? o : o.displayName || o.name;
          w && (v = `

Check the top-level render call using <` + w + ">.");
        }
        return v;
      }
    }
    function $r(o, v) {
      {
        if (!o._store || o._store.validated || o.key != null)
          return;
        o._store.validated = !0;
        var w = xn(v);
        if (zr[w])
          return;
        zr[w] = !0;
        var _ = "";
        o && o._owner && o._owner !== Vt.current && (_ = " It was passed a child from " + q(o._owner.type) + "."), Ve(o), j('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', w, _), Ve(null);
      }
    }
    function qr(o, v) {
      {
        if (typeof o != "object")
          return;
        if (Dt(o))
          for (var w = 0; w < o.length; w++) {
            var _ = o[w];
            Wt(_) && $r(_, v);
          }
        else if (Wt(o))
          o._store && (o._store.validated = !0);
        else if (o) {
          var D = C(o);
          if (typeof D == "function" && D !== o.entries)
            for (var z = D.call(o), M; !(M = z.next()).done; )
              Wt(M.value) && $r(M.value, v);
        }
      }
    }
    function bn(o) {
      {
        var v = o.type;
        if (v == null || typeof v == "string")
          return;
        var w;
        if (typeof v == "function")
          w = v.propTypes;
        else if (typeof v == "object" && (v.$$typeof === d || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        v.$$typeof === f))
          w = v.propTypes;
        else
          return;
        if (w) {
          var _ = q(v);
          nn(w, o.props, "prop", _, o);
        } else if (v.PropTypes !== void 0 && !Ut) {
          Ut = !0;
          var D = q(v);
          j("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", D || "Unknown");
        }
        typeof v.getDefaultProps == "function" && !v.getDefaultProps.isReactClassApproved && j("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function yn(o) {
      {
        for (var v = Object.keys(o.props), w = 0; w < v.length; w++) {
          var _ = v[w];
          if (_ !== "children" && _ !== "key") {
            Ve(o), j("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", _), Ve(null);
            break;
          }
        }
        o.ref !== null && (Ve(o), j("Invalid attribute `ref` supplied to `React.Fragment`."), Ve(null));
      }
    }
    var Br = {};
    function Gr(o, v, w, _, D, z) {
      {
        var M = S(o);
        if (!M) {
          var A = "";
          (o === void 0 || typeof o == "object" && o !== null && Object.keys(o).length === 0) && (A += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var se = vn();
          se ? A += se : A += Wr();
          var Y;
          o === null ? Y = "null" : Dt(o) ? Y = "array" : o !== void 0 && o.$$typeof === t ? (Y = "<" + (q(o.type) || "Unknown") + " />", A = " Did you accidentally export a JSX literal instead of a component?") : Y = typeof o, j("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Y, A);
        }
        var J = gn(o, v, w, D, z);
        if (J == null)
          return J;
        if (M) {
          var ue = v.children;
          if (ue !== void 0)
            if (_)
              if (Dt(ue)) {
                for (var Ue = 0; Ue < ue.length; Ue++)
                  qr(ue[Ue], o);
                Object.freeze && Object.freeze(ue);
              } else
                j("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              qr(ue, o);
        }
        if (rt.call(v, "key")) {
          var Pe = q(o), ie = Object.keys(v).filter(function(kn) {
            return kn !== "key";
          }), zt = ie.length > 0 ? "{key: someKey, " + ie.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Br[Pe + zt]) {
            var En = ie.length > 0 ? "{" + ie.join(": ..., ") + ": ...}" : "{}";
            j(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, zt, Pe, En, Pe), Br[Pe + zt] = !0;
          }
        }
        return o === n ? yn(J) : bn(J), J;
      }
    }
    function wn(o, v, w) {
      return Gr(o, v, w, !0);
    }
    function jn(o, v, w) {
      return Gr(o, v, w, !1);
    }
    var Nn = jn, Cn = wn;
    nt.Fragment = n, nt.jsx = Nn, nt.jsxs = Cn;
  }()), nt;
}
var Yr;
function Tn() {
  return Yr || (Yr = 1, process.env.NODE_ENV === "production" ? bt.exports = _n() : bt.exports = Pn()), bt.exports;
}
var s = Tn();
const Ns = Rn(void 0), Zi = ({ children: e, db: t, config: r }) => /* @__PURE__ */ s.jsx(Ns.Provider, { value: { db: t, config: r }, children: e }), br = () => {
  const e = Sn(Ns);
  if (!e)
    throw new Error("useAdminContext must be used within an AdminProvider");
  return e;
};
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
function Xt() {
  return Xt = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Xt.apply(this, arguments);
}
var Jr;
(function(e) {
  e.Pop = "POP", e.Push = "PUSH", e.Replace = "REPLACE";
})(Jr || (Jr = {}));
function Q(e, t) {
  if (e === !1 || e === null || typeof e > "u")
    throw new Error(t);
}
function Je(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {
    }
  }
}
function Zt(e) {
  let {
    pathname: t = "/",
    search: r = "",
    hash: n = ""
  } = e;
  return r && r !== "?" && (t += r.charAt(0) === "?" ? r : "?" + r), n && n !== "#" && (t += n.charAt(0) === "#" ? n : "#" + n), t;
}
function Cs(e) {
  let t = {};
  if (e) {
    let r = e.indexOf("#");
    r >= 0 && (t.hash = e.substr(r), e = e.substr(0, r));
    let n = e.indexOf("?");
    n >= 0 && (t.search = e.substr(n), e = e.substr(0, n)), e && (t.pathname = e);
  }
  return t;
}
var Xr;
(function(e) {
  e.data = "data", e.deferred = "deferred", e.redirect = "redirect", e.error = "error";
})(Xr || (Xr = {}));
function Zr(e, t) {
  typeof e == "string" && (e = {
    path: e,
    caseSensitive: !1,
    end: !0
  });
  let [r, n] = On(e.path, e.caseSensitive, e.end), a = t.match(r);
  if (!a) return null;
  let i = a[0], c = i.replace(/(.)\/+$/, "$1"), l = a.slice(1);
  return {
    params: n.reduce((u, h, f) => {
      let {
        paramName: g,
        isOptional: N
      } = h;
      if (g === "*") {
        let k = l[f] || "";
        c = i.slice(0, i.length - k.length).replace(/(.)\/+$/, "$1");
      }
      const R = l[f];
      return N && !R ? u[g] = void 0 : u[g] = (R || "").replace(/%2F/g, "/"), u;
    }, {}),
    pathname: i,
    pathnameBase: c,
    pattern: e
  };
}
function On(e, t, r) {
  t === void 0 && (t = !1), r === void 0 && (r = !0), Je(e === "*" || !e.endsWith("*") || e.endsWith("/*"), 'Route path "' + e + '" will be treated as if it were ' + ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + e.replace(/\*$/, "/*") + '".'));
  let n = [], a = "^" + e.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (c, l, d) => (n.push({
    paramName: l,
    isOptional: d != null
  }), d ? "/?([^\\/]+)?" : "/([^\\/]+)"));
  return e.endsWith("*") ? (n.push({
    paramName: "*"
  }), a += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : r ? a += "\\/*$" : e !== "" && e !== "/" && (a += "(?:(?=\\/|$))"), [new RegExp(a, t ? void 0 : "i"), n];
}
function He(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase()))
    return null;
  let r = t.endsWith("/") ? t.length - 1 : t.length, n = e.charAt(r);
  return n && n !== "/" ? null : e.slice(r) || "/";
}
function Ln(e, t) {
  t === void 0 && (t = "/");
  let {
    pathname: r,
    search: n = "",
    hash: a = ""
  } = typeof e == "string" ? Cs(e) : e;
  return {
    pathname: r ? r.startsWith("/") ? r : An(r, t) : t,
    search: Mn(n),
    hash: In(a)
  };
}
function An(e, t) {
  let r = t.replace(/\/+$/, "").split("/");
  return e.split("/").forEach((a) => {
    a === ".." ? r.length > 1 && r.pop() : a !== "." && r.push(a);
  }), r.length > 1 ? r.join("/") : "/";
}
function qt(e, t, r, n) {
  return "Cannot include a '" + e + "' character in a manually specified " + ("`to." + t + "` field [" + JSON.stringify(n) + "].  Please separate it out to the ") + ("`to." + r + "` field. Alternatively you may provide the full path as ") + 'a string in <Link to="..."> and the router will parse it for you.';
}
function Fn(e) {
  return e.filter((t, r) => r === 0 || t.route.path && t.route.path.length > 0);
}
function yr(e, t) {
  let r = Fn(e);
  return t ? r.map((n, a) => a === r.length - 1 ? n.pathname : n.pathnameBase) : r.map((n) => n.pathnameBase);
}
function wr(e, t, r, n) {
  n === void 0 && (n = !1);
  let a;
  typeof e == "string" ? a = Cs(e) : (a = Xt({}, e), Q(!a.pathname || !a.pathname.includes("?"), qt("?", "pathname", "search", a)), Q(!a.pathname || !a.pathname.includes("#"), qt("#", "pathname", "hash", a)), Q(!a.search || !a.search.includes("#"), qt("#", "search", "hash", a)));
  let i = e === "" || a.pathname === "", c = i ? "/" : a.pathname, l;
  if (c == null)
    l = r;
  else {
    let f = t.length - 1;
    if (!n && c.startsWith("..")) {
      let g = c.split("/");
      for (; g[0] === ".."; )
        g.shift(), f -= 1;
      a.pathname = g.join("/");
    }
    l = f >= 0 ? t[f] : "/";
  }
  let d = Ln(a, l), u = c && c !== "/" && c.endsWith("/"), h = (i || c === ".") && r.endsWith("/");
  return !d.pathname.endsWith("/") && (u || h) && (d.pathname += "/"), d;
}
const jr = (e) => e.join("/").replace(/\/\/+/g, "/"), Mn = (e) => !e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e, In = (e) => !e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e, Es = ["post", "put", "patch", "delete"];
new Set(Es);
const Dn = ["get", ...Es];
new Set(Dn);
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
function er() {
  return er = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, er.apply(this, arguments);
}
const _t = /* @__PURE__ */ p.createContext(null);
process.env.NODE_ENV !== "production" && (_t.displayName = "DataRouter");
const ks = /* @__PURE__ */ p.createContext(null);
process.env.NODE_ENV !== "production" && (ks.displayName = "DataRouterState");
const Vn = /* @__PURE__ */ p.createContext(null);
process.env.NODE_ENV !== "production" && (Vn.displayName = "Await");
const fe = /* @__PURE__ */ p.createContext(null);
process.env.NODE_ENV !== "production" && (fe.displayName = "Navigation");
const Nr = /* @__PURE__ */ p.createContext(null);
process.env.NODE_ENV !== "production" && (Nr.displayName = "Location");
const Me = /* @__PURE__ */ p.createContext({
  outlet: null,
  matches: [],
  isDataRoute: !1
});
process.env.NODE_ENV !== "production" && (Me.displayName = "Route");
const Un = /* @__PURE__ */ p.createContext(null);
process.env.NODE_ENV !== "production" && (Un.displayName = "RouteError");
function Wn(e, t) {
  let {
    relative: r
  } = t === void 0 ? {} : t;
  Pt() || (process.env.NODE_ENV !== "production" ? Q(
    !1,
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useHref() may be used only in the context of a <Router> component."
  ) : Q(!1));
  let {
    basename: n,
    navigator: a
  } = p.useContext(fe), {
    hash: i,
    pathname: c,
    search: l
  } = ft(e, {
    relative: r
  }), d = c;
  return n !== "/" && (d = c === "/" ? n : jr([n, c])), a.createHref({
    pathname: d,
    search: l,
    hash: i
  });
}
function Pt() {
  return p.useContext(Nr) != null;
}
function Ie() {
  return Pt() || (process.env.NODE_ENV !== "production" ? Q(
    !1,
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useLocation() may be used only in the context of a <Router> component."
  ) : Q(!1)), p.useContext(Nr).location;
}
const Rs = "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
function Ss(e) {
  p.useContext(fe).static || p.useLayoutEffect(e);
}
function Cr() {
  let {
    isDataRoute: e
  } = p.useContext(Me);
  return e ? Gn() : zn();
}
function zn() {
  Pt() || (process.env.NODE_ENV !== "production" ? Q(
    !1,
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useNavigate() may be used only in the context of a <Router> component."
  ) : Q(!1));
  let e = p.useContext(_t), {
    basename: t,
    future: r,
    navigator: n
  } = p.useContext(fe), {
    matches: a
  } = p.useContext(Me), {
    pathname: i
  } = Ie(), c = JSON.stringify(yr(a, r.v7_relativeSplatPath)), l = p.useRef(!1);
  return Ss(() => {
    l.current = !0;
  }), p.useCallback(function(u, h) {
    if (h === void 0 && (h = {}), process.env.NODE_ENV !== "production" && Je(l.current, Rs), !l.current) return;
    if (typeof u == "number") {
      n.go(u);
      return;
    }
    let f = wr(u, JSON.parse(c), i, h.relative === "path");
    e == null && t !== "/" && (f.pathname = f.pathname === "/" ? t : jr([t, f.pathname])), (h.replace ? n.replace : n.push)(f, h.state, h);
  }, [t, n, c, i, e]);
}
function ft(e, t) {
  let {
    relative: r
  } = t === void 0 ? {} : t, {
    future: n
  } = p.useContext(fe), {
    matches: a
  } = p.useContext(Me), {
    pathname: i
  } = Ie(), c = JSON.stringify(yr(a, n.v7_relativeSplatPath));
  return p.useMemo(() => wr(e, JSON.parse(c), i, r === "path"), [e, c, i, r]);
}
var _s = /* @__PURE__ */ function(e) {
  return e.UseBlocker = "useBlocker", e.UseRevalidator = "useRevalidator", e.UseNavigateStable = "useNavigate", e;
}(_s || {}), Er = /* @__PURE__ */ function(e) {
  return e.UseBlocker = "useBlocker", e.UseLoaderData = "useLoaderData", e.UseActionData = "useActionData", e.UseRouteError = "useRouteError", e.UseNavigation = "useNavigation", e.UseRouteLoaderData = "useRouteLoaderData", e.UseMatches = "useMatches", e.UseRevalidator = "useRevalidator", e.UseNavigateStable = "useNavigate", e.UseRouteId = "useRouteId", e;
}(Er || {});
function Ps(e) {
  return e + " must be used within a data router.  See https://reactrouter.com/v6/routers/picking-a-router.";
}
function $n(e) {
  let t = p.useContext(_t);
  return t || (process.env.NODE_ENV !== "production" ? Q(!1, Ps(e)) : Q(!1)), t;
}
function qn(e) {
  let t = p.useContext(Me);
  return t || (process.env.NODE_ENV !== "production" ? Q(!1, Ps(e)) : Q(!1)), t;
}
function Ts(e) {
  let t = qn(e), r = t.matches[t.matches.length - 1];
  return r.route.id || (process.env.NODE_ENV !== "production" ? Q(!1, e + ' can only be used on routes that contain a unique "id"') : Q(!1)), r.route.id;
}
function Bn() {
  return Ts(Er.UseRouteId);
}
function Gn() {
  let {
    router: e
  } = $n(_s.UseNavigateStable), t = Ts(Er.UseNavigateStable), r = p.useRef(!1);
  return Ss(() => {
    r.current = !0;
  }), p.useCallback(function(a, i) {
    i === void 0 && (i = {}), process.env.NODE_ENV !== "production" && Je(r.current, Rs), r.current && (typeof a == "number" ? e.navigate(a) : e.navigate(a, er({
      fromRouteId: t
    }, i)));
  }, [e, t]);
}
function Kn(e) {
  let {
    to: t,
    replace: r,
    state: n,
    relative: a
  } = e;
  Pt() || (process.env.NODE_ENV !== "production" ? Q(
    !1,
    // TODO: This error is probably because they somehow have 2 versions of
    // the router loaded. We can help them understand how to avoid that.
    "<Navigate> may be used only in the context of a <Router> component."
  ) : Q(!1));
  let {
    future: i,
    static: c
  } = p.useContext(fe);
  process.env.NODE_ENV !== "production" && Je(!c, "<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");
  let {
    matches: l
  } = p.useContext(Me), {
    pathname: d
  } = Ie(), u = Cr(), h = wr(t, yr(l, i.v7_relativeSplatPath), d, a === "path"), f = JSON.stringify(h);
  return p.useEffect(() => u(JSON.parse(f), {
    replace: r,
    state: n,
    relative: a
  }), [u, f, a, r, n]), null;
}
new Promise(() => {
});
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
function Ye() {
  return Ye = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Ye.apply(this, arguments);
}
function kr(e, t) {
  if (e == null) return {};
  var r = {}, n = Object.keys(e), a, i;
  for (i = 0; i < n.length; i++)
    a = n[i], !(t.indexOf(a) >= 0) && (r[a] = e[a]);
  return r;
}
const wt = "get", jt = "application/x-www-form-urlencoded";
function Tt(e) {
  return e != null && typeof e.tagName == "string";
}
function Qn(e) {
  return Tt(e) && e.tagName.toLowerCase() === "button";
}
function Hn(e) {
  return Tt(e) && e.tagName.toLowerCase() === "form";
}
function Yn(e) {
  return Tt(e) && e.tagName.toLowerCase() === "input";
}
function Jn(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function Xn(e, t) {
  return e.button === 0 && // Ignore everything but left clicks
  (!t || t === "_self") && // Let browser handle "target=_blank" etc.
  !Jn(e);
}
let yt = null;
function Zn() {
  if (yt === null)
    try {
      new FormData(
        document.createElement("form"),
        // @ts-expect-error if FormData supports the submitter parameter, this will throw
        0
      ), yt = !1;
    } catch {
      yt = !0;
    }
  return yt;
}
const ea = /* @__PURE__ */ new Set(["application/x-www-form-urlencoded", "multipart/form-data", "text/plain"]);
function Bt(e) {
  return e != null && !ea.has(e) ? (process.env.NODE_ENV !== "production" && Je(!1, '"' + e + '" is not a valid `encType` for `<Form>`/`<fetcher.Form>` ' + ('and will default to "' + jt + '"')), null) : e;
}
function ta(e, t) {
  let r, n, a, i, c;
  if (Hn(e)) {
    let l = e.getAttribute("action");
    n = l ? He(l, t) : null, r = e.getAttribute("method") || wt, a = Bt(e.getAttribute("enctype")) || jt, i = new FormData(e);
  } else if (Qn(e) || Yn(e) && (e.type === "submit" || e.type === "image")) {
    let l = e.form;
    if (l == null)
      throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');
    let d = e.getAttribute("formaction") || l.getAttribute("action");
    if (n = d ? He(d, t) : null, r = e.getAttribute("formmethod") || l.getAttribute("method") || wt, a = Bt(e.getAttribute("formenctype")) || Bt(l.getAttribute("enctype")) || jt, i = new FormData(l, e), !Zn()) {
      let {
        name: u,
        type: h,
        value: f
      } = e;
      if (h === "image") {
        let g = u ? u + "." : "";
        i.append(g + "x", "0"), i.append(g + "y", "0");
      } else u && i.append(u, f);
    }
  } else {
    if (Tt(e))
      throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');
    r = wt, n = null, a = jt, c = e;
  }
  return i && a === "text/plain" && (c = i, i = void 0), {
    action: n,
    method: r.toLowerCase(),
    encType: a,
    formData: i,
    body: c
  };
}
const ra = ["onClick", "relative", "reloadDocument", "replace", "state", "target", "to", "preventScrollReset", "viewTransition"], sa = ["aria-current", "caseSensitive", "className", "end", "style", "to", "viewTransition", "children"], na = ["fetcherKey", "navigate", "reloadDocument", "replace", "state", "method", "action", "onSubmit", "relative", "preventScrollReset", "viewTransition"], aa = "6";
try {
  window.__reactRouterVersion = aa;
} catch {
}
const Os = /* @__PURE__ */ p.createContext({
  isTransitioning: !1
});
process.env.NODE_ENV !== "production" && (Os.displayName = "ViewTransition");
const ia = /* @__PURE__ */ p.createContext(/* @__PURE__ */ new Map());
process.env.NODE_ENV !== "production" && (ia.displayName = "Fetchers");
process.env.NODE_ENV;
const oa = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", la = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i, Fe = /* @__PURE__ */ p.forwardRef(function(t, r) {
  let {
    onClick: n,
    relative: a,
    reloadDocument: i,
    replace: c,
    state: l,
    target: d,
    to: u,
    preventScrollReset: h,
    viewTransition: f
  } = t, g = kr(t, ra), {
    basename: N
  } = p.useContext(fe), R, k = !1;
  if (typeof u == "string" && la.test(u) && (R = u, oa))
    try {
      let P = new URL(window.location.href), O = u.startsWith("//") ? new URL(P.protocol + u) : new URL(u), H = He(O.pathname, N);
      O.origin === P.origin && H != null ? u = H + O.search + O.hash : k = !0;
    } catch {
      process.env.NODE_ENV !== "production" && Je(!1, '<Link to="' + u + '"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.');
    }
  let C = Wn(u, {
    relative: a
  }), y = ha(u, {
    replace: c,
    state: l,
    target: d,
    preventScrollReset: h,
    relative: a,
    viewTransition: f
  });
  function j(P) {
    n && n(P), P.defaultPrevented || y(P);
  }
  return (
    // eslint-disable-next-line jsx-a11y/anchor-has-content
    /* @__PURE__ */ p.createElement("a", Ye({}, g, {
      href: R || C,
      onClick: k || i ? n : j,
      ref: r,
      target: d
    }))
  );
});
process.env.NODE_ENV !== "production" && (Fe.displayName = "Link");
const ca = /* @__PURE__ */ p.forwardRef(function(t, r) {
  let {
    "aria-current": n = "page",
    caseSensitive: a = !1,
    className: i = "",
    end: c = !1,
    style: l,
    to: d,
    viewTransition: u,
    children: h
  } = t, f = kr(t, sa), g = ft(d, {
    relative: f.relative
  }), N = Ie(), R = p.useContext(ks), {
    navigator: k,
    basename: C
  } = p.useContext(fe), y = R != null && // Conditional usage is OK here because the usage of a data router is static
  // eslint-disable-next-line react-hooks/rules-of-hooks
  xa(g) && u === !0, j = k.encodeLocation ? k.encodeLocation(g).pathname : g.pathname, P = N.pathname, O = R && R.navigation && R.navigation.location ? R.navigation.location.pathname : null;
  a || (P = P.toLowerCase(), O = O ? O.toLowerCase() : null, j = j.toLowerCase()), O && C && (O = He(O, C) || O);
  const H = j !== "/" && j.endsWith("/") ? j.length - 1 : j.length;
  let K = P === j || !c && P.startsWith(j) && P.charAt(H) === "/", ee = O != null && (O === j || !c && O.startsWith(j) && O.charAt(j.length) === "/"), E = {
    isActive: K,
    isPending: ee,
    isTransitioning: y
  }, x = K ? n : void 0, S;
  typeof i == "function" ? S = i(E) : S = [i, K ? "active" : null, ee ? "pending" : null, y ? "transitioning" : null].filter(Boolean).join(" ");
  let W = typeof l == "function" ? l(E) : l;
  return /* @__PURE__ */ p.createElement(Fe, Ye({}, f, {
    "aria-current": x,
    className: S,
    ref: r,
    style: W,
    to: d,
    viewTransition: u
  }), typeof h == "function" ? h(E) : h);
});
process.env.NODE_ENV !== "production" && (ca.displayName = "NavLink");
const da = /* @__PURE__ */ p.forwardRef((e, t) => {
  let {
    fetcherKey: r,
    navigate: n,
    reloadDocument: a,
    replace: i,
    state: c,
    method: l = wt,
    action: d,
    onSubmit: u,
    relative: h,
    preventScrollReset: f,
    viewTransition: g
  } = e, N = kr(e, na), R = ga(), k = va(d, {
    relative: h
  }), C = l.toLowerCase() === "get" ? "get" : "post", y = (j) => {
    if (u && u(j), j.defaultPrevented) return;
    j.preventDefault();
    let P = j.nativeEvent.submitter, O = (P == null ? void 0 : P.getAttribute("formmethod")) || l;
    R(P || j.currentTarget, {
      fetcherKey: r,
      method: O,
      navigate: n,
      replace: i,
      state: c,
      relative: h,
      preventScrollReset: f,
      viewTransition: g
    });
  };
  return /* @__PURE__ */ p.createElement("form", Ye({
    ref: t,
    method: C,
    action: k,
    onSubmit: a ? u : y
  }, N));
});
process.env.NODE_ENV !== "production" && (da.displayName = "Form");
process.env.NODE_ENV;
var kt;
(function(e) {
  e.UseScrollRestoration = "useScrollRestoration", e.UseSubmit = "useSubmit", e.UseSubmitFetcher = "useSubmitFetcher", e.UseFetcher = "useFetcher", e.useViewTransitionState = "useViewTransitionState";
})(kt || (kt = {}));
var es;
(function(e) {
  e.UseFetcher = "useFetcher", e.UseFetchers = "useFetchers", e.UseScrollRestoration = "useScrollRestoration";
})(es || (es = {}));
function ua(e) {
  return e + " must be used within a data router.  See https://reactrouter.com/v6/routers/picking-a-router.";
}
function Ls(e) {
  let t = p.useContext(_t);
  return t || (process.env.NODE_ENV !== "production" ? Q(!1, ua(e)) : Q(!1)), t;
}
function ha(e, t) {
  let {
    target: r,
    replace: n,
    state: a,
    preventScrollReset: i,
    relative: c,
    viewTransition: l
  } = t === void 0 ? {} : t, d = Cr(), u = Ie(), h = ft(e, {
    relative: c
  });
  return p.useCallback((f) => {
    if (Xn(f, r)) {
      f.preventDefault();
      let g = n !== void 0 ? n : Zt(u) === Zt(h);
      d(e, {
        replace: g,
        state: a,
        preventScrollReset: i,
        relative: c,
        viewTransition: l
      });
    }
  }, [u, d, h, n, a, r, e, i, c, l]);
}
function fa() {
  if (typeof document > "u")
    throw new Error("You are calling submit during the server render. Try calling submit within a `useEffect` or callback instead.");
}
let ma = 0, pa = () => "__" + String(++ma) + "__";
function ga() {
  let {
    router: e
  } = Ls(kt.UseSubmit), {
    basename: t
  } = p.useContext(fe), r = Bn();
  return p.useCallback(function(n, a) {
    a === void 0 && (a = {}), fa();
    let {
      action: i,
      method: c,
      encType: l,
      formData: d,
      body: u
    } = ta(n, t);
    if (a.navigate === !1) {
      let h = a.fetcherKey || pa();
      e.fetch(h, r, a.action || i, {
        preventScrollReset: a.preventScrollReset,
        formData: d,
        body: u,
        formMethod: a.method || c,
        formEncType: a.encType || l,
        flushSync: a.flushSync
      });
    } else
      e.navigate(a.action || i, {
        preventScrollReset: a.preventScrollReset,
        formData: d,
        body: u,
        formMethod: a.method || c,
        formEncType: a.encType || l,
        replace: a.replace,
        state: a.state,
        fromRouteId: r,
        flushSync: a.flushSync,
        viewTransition: a.viewTransition
      });
  }, [e, t, r]);
}
function va(e, t) {
  let {
    relative: r
  } = t === void 0 ? {} : t, {
    basename: n
  } = p.useContext(fe), a = p.useContext(Me);
  a || (process.env.NODE_ENV !== "production" ? Q(!1, "useFormAction must be used inside a RouteContext") : Q(!1));
  let [i] = a.matches.slice(-1), c = Ye({}, ft(e || ".", {
    relative: r
  })), l = Ie();
  if (e == null) {
    c.search = l.search;
    let d = new URLSearchParams(c.search), u = d.getAll("index");
    if (u.some((f) => f === "")) {
      d.delete("index"), u.filter((g) => g).forEach((g) => d.append("index", g));
      let f = d.toString();
      c.search = f ? "?" + f : "";
    }
  }
  return (!e || e === ".") && i.route.index && (c.search = c.search ? c.search.replace(/^\?/, "?index&") : "?index"), n !== "/" && (c.pathname = c.pathname === "/" ? n : jr([n, c.pathname])), Zt(c);
}
function xa(e, t) {
  t === void 0 && (t = {});
  let r = p.useContext(Os);
  r == null && (process.env.NODE_ENV !== "production" ? Q(!1, "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?") : Q(!1));
  let {
    basename: n
  } = Ls(kt.useViewTransitionState), a = ft(e, {
    relative: t.relative
  });
  if (!r.isTransitioning)
    return !1;
  let i = He(r.currentLocation.pathname, n) || r.currentLocation.pathname, c = He(r.nextLocation.pathname, n) || r.nextLocation.pathname;
  return Zr(a.pathname, c) != null || Zr(a.pathname, i) != null;
}
const eo = ({
  children: e,
  getCurrentSession: t
}) => {
  const [r, n] = Z(null), [a, i] = Z(!0);
  return xr(() => {
    (async () => {
      const { data: l } = await t();
      l && l.session && n(l.session), i(!1);
    })();
  }, []), a ? /* @__PURE__ */ s.jsx("div", { className: "flex items-center justify-center min-h-screen bg-background", children: /* @__PURE__ */ s.jsx("div", { className: "w-16 h-16 border-4 border-secondary border-t-transparent rounded-full animate-spin" }) }) : r ? /* @__PURE__ */ s.jsx(s.Fragment, { children: e }) : /* @__PURE__ */ s.jsx(Kn, { to: "/auth/login", replace: !0 });
};
function ts(e, t) {
  if (typeof e == "function")
    return e(t);
  e != null && (e.current = t);
}
function ba(...e) {
  return (t) => {
    let r = !1;
    const n = e.map((a) => {
      const i = ts(a, t);
      return !r && typeof i == "function" && (r = !0), i;
    });
    if (r)
      return () => {
        for (let a = 0; a < n.length; a++) {
          const i = n[a];
          typeof i == "function" ? i() : ts(e[a], null);
        }
      };
  };
}
function ya(...e) {
  return p.useCallback(ba(...e), e);
}
// @__NO_SIDE_EFFECTS__
function As(e) {
  const t = /* @__PURE__ */ ja(e), r = p.forwardRef((n, a) => {
    const { children: i, ...c } = n, l = p.Children.toArray(i), d = l.find(Ca);
    if (d) {
      const u = d.props.children, h = l.map((f) => f === d ? p.Children.count(u) > 1 ? p.Children.only(null) : p.isValidElement(u) ? u.props.children : null : f);
      return /* @__PURE__ */ s.jsx(t, { ...c, ref: a, children: p.isValidElement(u) ? p.cloneElement(u, void 0, h) : null });
    }
    return /* @__PURE__ */ s.jsx(t, { ...c, ref: a, children: i });
  });
  return r.displayName = `${e}.Slot`, r;
}
var wa = /* @__PURE__ */ As("Slot");
// @__NO_SIDE_EFFECTS__
function ja(e) {
  const t = p.forwardRef((r, n) => {
    const { children: a, ...i } = r, c = p.isValidElement(a) ? ka(a) : void 0, l = ya(c, n);
    if (p.isValidElement(a)) {
      const d = Ea(i, a.props);
      return a.type !== p.Fragment && (d.ref = l), p.cloneElement(a, d);
    }
    return p.Children.count(a) > 1 ? p.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var Na = Symbol("radix.slottable");
function Ca(e) {
  return p.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === Na;
}
function Ea(e, t) {
  const r = { ...t };
  for (const n in t) {
    const a = e[n], i = t[n];
    /^on[A-Z]/.test(n) ? a && i ? r[n] = (...l) => {
      const d = i(...l);
      return a(...l), d;
    } : a && (r[n] = a) : n === "style" ? r[n] = { ...a, ...i } : n === "className" && (r[n] = [a, i].filter(Boolean).join(" "));
  }
  return { ...e, ...r };
}
function ka(e) {
  var n, a;
  let t = (n = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : n.get, r = t && "isReactWarning" in t && t.isReactWarning;
  return r ? e.ref : (t = (a = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : a.get, r = t && "isReactWarning" in t && t.isReactWarning, r ? e.props.ref : e.props.ref || e.ref);
}
function Fs(e) {
  var t, r, n = "";
  if (typeof e == "string" || typeof e == "number") n += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var a = e.length;
    for (t = 0; t < a; t++) e[t] && (r = Fs(e[t])) && (n && (n += " "), n += r);
  } else for (r in e) e[r] && (n && (n += " "), n += r);
  return n;
}
function Ms() {
  for (var e, t, r = 0, n = "", a = arguments.length; r < a; r++) (e = arguments[r]) && (t = Fs(e)) && (n && (n += " "), n += t);
  return n;
}
const rs = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, ss = Ms, Is = (e, t) => (r) => {
  var n;
  if ((t == null ? void 0 : t.variants) == null) return ss(e, r == null ? void 0 : r.class, r == null ? void 0 : r.className);
  const { variants: a, defaultVariants: i } = t, c = Object.keys(a).map((u) => {
    const h = r == null ? void 0 : r[u], f = i == null ? void 0 : i[u];
    if (h === null) return null;
    const g = rs(h) || rs(f);
    return a[u][g];
  }), l = r && Object.entries(r).reduce((u, h) => {
    let [f, g] = h;
    return g === void 0 || (u[f] = g), u;
  }, {}), d = t == null || (n = t.compoundVariants) === null || n === void 0 ? void 0 : n.reduce((u, h) => {
    let { class: f, className: g, ...N } = h;
    return Object.entries(N).every((R) => {
      let [k, C] = R;
      return Array.isArray(C) ? C.includes({
        ...i,
        ...l
      }[k]) : {
        ...i,
        ...l
      }[k] === C;
    }) ? [
      ...u,
      f,
      g
    ] : u;
  }, []);
  return ss(e, c, d, r == null ? void 0 : r.class, r == null ? void 0 : r.className);
}, Rr = "-", Ra = (e) => {
  const t = _a(e), {
    conflictingClassGroups: r,
    conflictingClassGroupModifiers: n
  } = e;
  return {
    getClassGroupId: (c) => {
      const l = c.split(Rr);
      return l[0] === "" && l.length !== 1 && l.shift(), Ds(l, t) || Sa(c);
    },
    getConflictingClassGroupIds: (c, l) => {
      const d = r[c] || [];
      return l && n[c] ? [...d, ...n[c]] : d;
    }
  };
}, Ds = (e, t) => {
  var c;
  if (e.length === 0)
    return t.classGroupId;
  const r = e[0], n = t.nextPart.get(r), a = n ? Ds(e.slice(1), n) : void 0;
  if (a)
    return a;
  if (t.validators.length === 0)
    return;
  const i = e.join(Rr);
  return (c = t.validators.find(({
    validator: l
  }) => l(i))) == null ? void 0 : c.classGroupId;
}, ns = /^\[(.+)\]$/, Sa = (e) => {
  if (ns.test(e)) {
    const t = ns.exec(e)[1], r = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (r)
      return "arbitrary.." + r;
  }
}, _a = (e) => {
  const {
    theme: t,
    prefix: r
  } = e, n = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  return Ta(Object.entries(e.classGroups), r).forEach(([i, c]) => {
    tr(c, n, i, t);
  }), n;
}, tr = (e, t, r, n) => {
  e.forEach((a) => {
    if (typeof a == "string") {
      const i = a === "" ? t : as(t, a);
      i.classGroupId = r;
      return;
    }
    if (typeof a == "function") {
      if (Pa(a)) {
        tr(a(n), t, r, n);
        return;
      }
      t.validators.push({
        validator: a,
        classGroupId: r
      });
      return;
    }
    Object.entries(a).forEach(([i, c]) => {
      tr(c, as(t, i), r, n);
    });
  });
}, as = (e, t) => {
  let r = e;
  return t.split(Rr).forEach((n) => {
    r.nextPart.has(n) || r.nextPart.set(n, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), r = r.nextPart.get(n);
  }), r;
}, Pa = (e) => e.isThemeGetter, Ta = (e, t) => t ? e.map(([r, n]) => {
  const a = n.map((i) => typeof i == "string" ? t + i : typeof i == "object" ? Object.fromEntries(Object.entries(i).map(([c, l]) => [t + c, l])) : i);
  return [r, a];
}) : e, Oa = (e) => {
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
}, Vs = "!", La = (e) => {
  const {
    separator: t,
    experimentalParseClassName: r
  } = e, n = t.length === 1, a = t[0], i = t.length, c = (l) => {
    const d = [];
    let u = 0, h = 0, f;
    for (let C = 0; C < l.length; C++) {
      let y = l[C];
      if (u === 0) {
        if (y === a && (n || l.slice(C, C + i) === t)) {
          d.push(l.slice(h, C)), h = C + i;
          continue;
        }
        if (y === "/") {
          f = C;
          continue;
        }
      }
      y === "[" ? u++ : y === "]" && u--;
    }
    const g = d.length === 0 ? l : l.substring(h), N = g.startsWith(Vs), R = N ? g.substring(1) : g, k = f && f > h ? f - h : void 0;
    return {
      modifiers: d,
      hasImportantModifier: N,
      baseClassName: R,
      maybePostfixModifierPosition: k
    };
  };
  return r ? (l) => r({
    className: l,
    parseClassName: c
  }) : c;
}, Aa = (e) => {
  if (e.length <= 1)
    return e;
  const t = [];
  let r = [];
  return e.forEach((n) => {
    n[0] === "[" ? (t.push(...r.sort(), n), r = []) : r.push(n);
  }), t.push(...r.sort()), t;
}, Fa = (e) => ({
  cache: Oa(e.cacheSize),
  parseClassName: La(e),
  ...Ra(e)
}), Ma = /\s+/, Ia = (e, t) => {
  const {
    parseClassName: r,
    getClassGroupId: n,
    getConflictingClassGroupIds: a
  } = t, i = [], c = e.trim().split(Ma);
  let l = "";
  for (let d = c.length - 1; d >= 0; d -= 1) {
    const u = c[d], {
      modifiers: h,
      hasImportantModifier: f,
      baseClassName: g,
      maybePostfixModifierPosition: N
    } = r(u);
    let R = !!N, k = n(R ? g.substring(0, N) : g);
    if (!k) {
      if (!R) {
        l = u + (l.length > 0 ? " " + l : l);
        continue;
      }
      if (k = n(g), !k) {
        l = u + (l.length > 0 ? " " + l : l);
        continue;
      }
      R = !1;
    }
    const C = Aa(h).join(":"), y = f ? C + Vs : C, j = y + k;
    if (i.includes(j))
      continue;
    i.push(j);
    const P = a(k, R);
    for (let O = 0; O < P.length; ++O) {
      const H = P[O];
      i.push(y + H);
    }
    l = u + (l.length > 0 ? " " + l : l);
  }
  return l;
};
function Da() {
  let e = 0, t, r, n = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (r = Us(t)) && (n && (n += " "), n += r);
  return n;
}
const Us = (e) => {
  if (typeof e == "string")
    return e;
  let t, r = "";
  for (let n = 0; n < e.length; n++)
    e[n] && (t = Us(e[n])) && (r && (r += " "), r += t);
  return r;
};
function Va(e, ...t) {
  let r, n, a, i = c;
  function c(d) {
    const u = t.reduce((h, f) => f(h), e());
    return r = Fa(u), n = r.cache.get, a = r.cache.set, i = l, l(d);
  }
  function l(d) {
    const u = n(d);
    if (u)
      return u;
    const h = Ia(d, r);
    return a(d, h), h;
  }
  return function() {
    return i(Da.apply(null, arguments));
  };
}
const G = (e) => {
  const t = (r) => r[e] || [];
  return t.isThemeGetter = !0, t;
}, Ws = /^\[(?:([a-z-]+):)?(.+)\]$/i, Ua = /^\d+\/\d+$/, Wa = /* @__PURE__ */ new Set(["px", "full", "screen"]), za = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, $a = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, qa = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, Ba = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, Ga = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, me = (e) => We(e) || Wa.has(e) || Ua.test(e), be = (e) => Xe(e, "length", ei), We = (e) => !!e && !Number.isNaN(Number(e)), Gt = (e) => Xe(e, "number", We), at = (e) => !!e && Number.isInteger(Number(e)), Ka = (e) => e.endsWith("%") && We(e.slice(0, -1)), T = (e) => Ws.test(e), ye = (e) => za.test(e), Qa = /* @__PURE__ */ new Set(["length", "size", "percentage"]), Ha = (e) => Xe(e, Qa, zs), Ya = (e) => Xe(e, "position", zs), Ja = /* @__PURE__ */ new Set(["image", "url"]), Xa = (e) => Xe(e, Ja, ri), Za = (e) => Xe(e, "", ti), it = () => !0, Xe = (e, t, r) => {
  const n = Ws.exec(e);
  return n ? n[1] ? typeof t == "string" ? n[1] === t : t.has(n[1]) : r(n[2]) : !1;
}, ei = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  $a.test(e) && !qa.test(e)
), zs = () => !1, ti = (e) => Ba.test(e), ri = (e) => Ga.test(e), si = () => {
  const e = G("colors"), t = G("spacing"), r = G("blur"), n = G("brightness"), a = G("borderColor"), i = G("borderRadius"), c = G("borderSpacing"), l = G("borderWidth"), d = G("contrast"), u = G("grayscale"), h = G("hueRotate"), f = G("invert"), g = G("gap"), N = G("gradientColorStops"), R = G("gradientColorStopPositions"), k = G("inset"), C = G("margin"), y = G("opacity"), j = G("padding"), P = G("saturate"), O = G("scale"), H = G("sepia"), K = G("skew"), ee = G("space"), E = G("translate"), x = () => ["auto", "contain", "none"], S = () => ["auto", "hidden", "clip", "visible", "scroll"], W = () => ["auto", T, t], b = () => [T, t], q = () => ["", me, be], ae = () => ["auto", We, T], ve = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], _e = () => ["solid", "dashed", "dotted", "double", "none"], et = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], De = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], xe = () => ["", "0", T], tt = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], de = () => [We, T];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [it],
      spacing: [me, be],
      blur: ["none", "", ye, T],
      brightness: de(),
      borderColor: [e],
      borderRadius: ["none", "", "full", ye, T],
      borderSpacing: b(),
      borderWidth: q(),
      contrast: de(),
      grayscale: xe(),
      hueRotate: de(),
      invert: xe(),
      gap: b(),
      gradientColorStops: [e],
      gradientColorStopPositions: [Ka, be],
      inset: W(),
      margin: W(),
      opacity: de(),
      padding: b(),
      saturate: de(),
      scale: de(),
      sepia: xe(),
      skew: de(),
      space: b(),
      translate: b()
    },
    classGroups: {
      // Layout
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", "video", T]
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
        columns: [ye]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": tt()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": tt()
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
        object: [...ve(), T]
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
        overscroll: x()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": x()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": x()
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
        inset: [k]
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": [k]
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": [k]
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: [k]
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: [k]
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: [k]
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: [k]
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: [k]
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: [k]
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
        z: ["auto", at, T]
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
        flex: ["1", "auto", "initial", "none", T]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: xe()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: xe()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ["first", "last", "none", at, T]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [it]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", at, T]
        }, T]
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
        "grid-rows": [it]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [at, T]
        }, T]
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
        "auto-cols": ["auto", "min", "max", "fr", T]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", T]
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: [g]
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": [g]
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": [g]
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: ["normal", ...De()]
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
        content: ["normal", ...De(), "baseline"]
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
        "place-content": [...De(), "baseline"]
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
        p: [j]
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: [j]
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: [j]
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: [j]
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: [j]
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: [j]
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: [j]
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: [j]
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: [j]
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: [C]
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: [C]
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: [C]
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: [C]
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: [C]
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: [C]
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: [C]
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: [C]
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: [C]
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
        w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", T, t]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [T, t, "min", "max", "fit"]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [T, t, "none", "full", "min", "max", "fit", "prose", {
          screen: [ye]
        }, ye]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [T, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": [T, t, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [T, t, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Size
       * @see https://tailwindcss.com/docs/size
       */
      size: [{
        size: [T, t, "auto", "min", "max", "fit"]
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", ye, be]
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
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", Gt]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [it]
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
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", T]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", We, Gt]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", me, T]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", T]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", T]
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
        "placeholder-opacity": [y]
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
        "text-opacity": [y]
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
        decoration: [..._e(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", me, be]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", me, T]
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
        indent: b()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", T]
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
        content: ["none", T]
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
        "bg-opacity": [y]
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
        bg: [...ve(), Ya]
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
        bg: ["auto", "cover", "contain", Ha]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, Xa]
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
        from: [R]
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: [R]
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: [R]
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: [N]
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: [N]
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: [N]
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
        border: [l]
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": [l]
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": [l]
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": [l]
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": [l]
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": [l]
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": [l]
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": [l]
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": [l]
      }],
      /**
       * Border Opacity
       * @see https://tailwindcss.com/docs/border-opacity
       */
      "border-opacity": [{
        "border-opacity": [y]
      }],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [..._e(), "hidden"]
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x": [{
        "divide-x": [l]
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
        "divide-y": [l]
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
        "divide-opacity": [y]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/divide-style
       */
      "divide-style": [{
        divide: _e()
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
        outline: ["", ..._e()]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [me, T]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [me, be]
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
        ring: q()
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
        "ring-opacity": [y]
      }],
      /**
       * Ring Offset Width
       * @see https://tailwindcss.com/docs/ring-offset-width
       */
      "ring-offset-w": [{
        "ring-offset": [me, be]
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
        shadow: ["", "inner", "none", ye, Za]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [it]
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [y]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...et(), "plus-lighter", "plus-darker"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": et()
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
        contrast: [d]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": ["", "none", ye, T]
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
        "hue-rotate": [h]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: [f]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [P]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: [H]
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
        "backdrop-contrast": [d]
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
        "backdrop-hue-rotate": [h]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": [f]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [y]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [P]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": [H]
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
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", T]
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
        ease: ["linear", "in", "out", "in-out", T]
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
        animate: ["none", "spin", "ping", "pulse", "bounce", T]
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
        scale: [O]
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": [O]
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": [O]
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: [at, T]
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": [E]
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": [E]
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": [K]
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": [K]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", T]
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
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", T]
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
        "scroll-m": b()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": b()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": b()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": b()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": b()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": b()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": b()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": b()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": b()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": b()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": b()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": b()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": b()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": b()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": b()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": b()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": b()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": b()
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
        "will-change": ["auto", "scroll", "contents", "transform", T]
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
        stroke: [me, be, Gt]
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
}, ni = /* @__PURE__ */ Va(si);
function re(...e) {
  return ni(Ms(e));
}
const ai = Is(
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
    const c = n ? wa : "button";
    return /* @__PURE__ */ s.jsx(
      c,
      {
        className: re(ai({ variant: t, size: r, className: e })),
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
var ii = [
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
], oi = ii.reduce((e, t) => {
  const r = /* @__PURE__ */ As(`Primitive.${t}`), n = p.forwardRef((a, i) => {
    const { asChild: c, ...l } = a, d = c ? r : t;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ s.jsx(d, { ...l, ref: i });
  });
  return n.displayName = `Primitive.${t}`, { ...e, [t]: n };
}, {}), li = "Label", $s = p.forwardRef((e, t) => /* @__PURE__ */ s.jsx(
  oi.label,
  {
    ...e,
    ref: t,
    onMouseDown: (r) => {
      var a;
      r.target.closest("button, input, select, textarea") || ((a = e.onMouseDown) == null || a.call(e, r), !r.defaultPrevented && r.detail > 1 && r.preventDefault());
    }
  }
));
$s.displayName = li;
var qs = $s;
const ci = Is(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
), $ = p.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ s.jsx(
  qs,
  {
    ref: r,
    className: re(ci(), e),
    ...t
  }
));
$.displayName = qs.displayName;
const di = 1, ui = 1e6;
let Kt = 0;
function hi() {
  return Kt = (Kt + 1) % Number.MAX_SAFE_INTEGER, Kt.toString();
}
const Qt = /* @__PURE__ */ new Map(), is = (e) => {
  if (Qt.has(e))
    return;
  const t = setTimeout(() => {
    Qt.delete(e), Nt({
      type: "REMOVE_TOAST",
      toastId: e
    });
  }, ui);
  Qt.set(e, t);
}, fi = (e, t) => {
  switch (t.type) {
    case "ADD_TOAST":
      return {
        ...e,
        toasts: [t.toast, ...e.toasts].slice(0, di)
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
      return r ? is(r) : e.toasts.forEach((n) => {
        is(n.id);
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
}, mi = [];
let Ht = { toasts: [] };
function Nt(e) {
  Ht = fi(Ht, e), mi.forEach((t) => {
    t(Ht);
  });
}
function I({ ...e }) {
  const t = hi(), r = (a) => Nt({
    type: "UPDATE_TOAST",
    toast: { ...a, id: t }
  }), n = () => Nt({ type: "DISMISS_TOAST", toastId: t });
  return Nt({
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
function Bs() {
  var t, r, n, a, i, c, l, d;
  const { config: e } = br();
  return {
    primary: ((r = (t = e.tailwindTheme) == null ? void 0 : t.colors) == null ? void 0 : r.primary) ?? "primary",
    secondary: ((a = (n = e.tailwindTheme) == null ? void 0 : n.colors) == null ? void 0 : a.secondary) ?? "secondary",
    tertiary: ((c = (i = e.tailwindTheme) == null ? void 0 : i.colors) == null ? void 0 : c.tertiary) ?? "tertiary",
    background: ((d = (l = e.tailwindTheme) == null ? void 0 : l.colors) == null ? void 0 : d.background) ?? "background"
  };
}
function Sr() {
  const { config: e } = br();
  return {
    title: e.terminology.title,
    products: e.terminology.products ?? "Products",
    testimonials: e.terminology.testimonials ?? "Testimonials",
    articles: e.terminology.articles ?? "Articles",
    galleries: e.terminology.galleries ?? "Galleries"
  };
}
const to = ({ loginWithEmailPassword: e }) => {
  const [t, r] = Z(""), [n, a] = Z(""), [i, c] = Z(!1), l = (f) => {
  }, d = Bs(), u = Sr(), h = async (f) => {
    f.preventDefault(), c(!0);
    try {
      const { data: g, error: N } = await e(t, n);
      if (N) {
        console.error("Login error:", N), I({
          title: "Login Failed",
          description: typeof N == "string" ? N : "Invalid credentials or you don't have access to this project.",
          variant: "destructive"
        });
        return;
      }
      g && (I({
        title: "Login Successful",
        description: "Welcome back!"
      }), l("/admin"));
    } catch (g) {
      console.error("Unexpected error:", g), I({
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
      /* @__PURE__ */ s.jsx("h1", { className: `font-serif text-6xl text-${d.secondary}`, children: u.title }),
      /* @__PURE__ */ s.jsx("p", { className: "text-black/60 mt-2", children: "Admin Dashboard" })
    ] }),
    /* @__PURE__ */ s.jsxs(
      "div",
      {
        className: `bg-${d.primary}-light border border-${d.secondary}/20 rounded-lg shadow-lg p-8`,
        children: [
          /* @__PURE__ */ s.jsx(
            "h2",
            {
              className: `font-serif text-2xl text-${d.secondary} mb-6 text-center`,
              children: "Login"
            }
          ),
          /* @__PURE__ */ s.jsxs("form", { onSubmit: h, className: "space-y-6", children: [
            /* @__PURE__ */ s.jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ s.jsx($, { htmlFor: "email", className: "text-white", children: "Email" }),
              /* @__PURE__ */ s.jsx(
                te,
                {
                  id: "email",
                  type: "email",
                  value: t,
                  onChange: (f) => r(f.target.value),
                  className: `bg-${d.primary}-light/20 border-${d.secondary}/30 text-white placeholder-white/50`,
                  placeholder: "admin@example.com",
                  required: !0,
                  disabled: i
                }
              )
            ] }),
            /* @__PURE__ */ s.jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ s.jsx("div", { className: "flex justify-between items-center", children: /* @__PURE__ */ s.jsx($, { htmlFor: "password", className: "text-white", children: "Password" }) }),
              /* @__PURE__ */ s.jsx(
                te,
                {
                  id: "password",
                  type: "password",
                  value: n,
                  onChange: (f) => a(f.target.value),
                  className: `bg-${d.primary}-light/20 border-${d.secondary}/30 text-white placeholder-white/50`,
                  required: !0,
                  disabled: i
                }
              )
            ] }),
            /* @__PURE__ */ s.jsx(
              X,
              {
                type: "submit",
                className: `w-full bg-${d.secondary} text-black hover:bg-${d.secondary}/90`,
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
        ]
      }
    )
  ] }) });
};
var Ot = class {
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
}, dt = typeof window > "u" || "Deno" in globalThis;
function Rt() {
}
function os(e) {
  return typeof e == "number" && e >= 0 && e !== 1 / 0;
}
function pi(e, t) {
  return Math.max(e + (t || 0) - Date.now(), 0);
}
function Ct(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function he(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function ls(e) {
  return JSON.stringify(
    e,
    (t, r) => sr(r) ? Object.keys(r).sort().reduce((n, a) => (n[a] = r[a], n), {}) : r
  );
}
function rr(e, t) {
  if (e === t)
    return e;
  const r = cs(e) && cs(t);
  if (r || sr(e) && sr(t)) {
    const n = r ? e : Object.keys(e), a = n.length, i = r ? t : Object.keys(t), c = i.length, l = r ? [] : {};
    let d = 0;
    for (let u = 0; u < c; u++) {
      const h = r ? u : i[u];
      (!r && n.includes(h) || r) && e[h] === void 0 && t[h] === void 0 ? (l[h] = void 0, d++) : (l[h] = rr(e[h], t[h]), l[h] === e[h] && e[h] !== void 0 && d++);
    }
    return a === c && d === a ? e : l;
  }
  return t;
}
function St(e, t) {
  if (!t || Object.keys(e).length !== Object.keys(t).length)
    return !1;
  for (const r in e)
    if (e[r] !== t[r])
      return !1;
  return !0;
}
function cs(e) {
  return Array.isArray(e) && e.length === Object.keys(e).length;
}
function sr(e) {
  if (!ds(e))
    return !1;
  const t = e.constructor;
  if (t === void 0)
    return !0;
  const r = t.prototype;
  return !(!ds(r) || !r.hasOwnProperty("isPrototypeOf") || Object.getPrototypeOf(e) !== Object.prototype);
}
function ds(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function us(e, t, r) {
  if (typeof r.structuralSharing == "function")
    return r.structuralSharing(e, t);
  if (r.structuralSharing !== !1) {
    if (process.env.NODE_ENV !== "production")
      try {
        return rr(e, t);
      } catch (n) {
        throw console.error(
          `Structural sharing requires data to be JSON serializable. To fix this, turn off structuralSharing or return JSON-serializable data from your queryFn. [${r.queryHash}]: ${n}`
        ), n;
      }
    return rr(e, t);
  }
  return t;
}
function Gs(e, t) {
  return typeof e == "function" ? e(...t) : !!e;
}
var Te, we, ze, vs, gi = (vs = class extends Ot {
  constructor() {
    super();
    U(this, Te);
    U(this, we);
    U(this, ze);
    L(this, ze, (t) => {
      if (!dt && window.addEventListener) {
        const r = () => t();
        return window.addEventListener("visibilitychange", r, !1), () => {
          window.removeEventListener("visibilitychange", r);
        };
      }
    });
  }
  onSubscribe() {
    m(this, we) || this.setEventListener(m(this, ze));
  }
  onUnsubscribe() {
    var t;
    this.hasListeners() || ((t = m(this, we)) == null || t.call(this), L(this, we, void 0));
  }
  setEventListener(t) {
    var r;
    L(this, ze, t), (r = m(this, we)) == null || r.call(this), L(this, we, t((n) => {
      typeof n == "boolean" ? this.setFocused(n) : this.onFocus();
    }));
  }
  setFocused(t) {
    m(this, Te) !== t && (L(this, Te, t), this.onFocus());
  }
  onFocus() {
    const t = this.isFocused();
    this.listeners.forEach((r) => {
      r(t);
    });
  }
  isFocused() {
    var t;
    return typeof m(this, Te) == "boolean" ? m(this, Te) : ((t = globalThis.document) == null ? void 0 : t.visibilityState) !== "hidden";
  }
}, Te = new WeakMap(), we = new WeakMap(), ze = new WeakMap(), vs), vi = new gi(), $e, je, qe, xs, xi = (xs = class extends Ot {
  constructor() {
    super();
    U(this, $e, !0);
    U(this, je);
    U(this, qe);
    L(this, qe, (t) => {
      if (!dt && window.addEventListener) {
        const r = () => t(!0), n = () => t(!1);
        return window.addEventListener("online", r, !1), window.addEventListener("offline", n, !1), () => {
          window.removeEventListener("online", r), window.removeEventListener("offline", n);
        };
      }
    });
  }
  onSubscribe() {
    m(this, je) || this.setEventListener(m(this, qe));
  }
  onUnsubscribe() {
    var t;
    this.hasListeners() || ((t = m(this, je)) == null || t.call(this), L(this, je, void 0));
  }
  setEventListener(t) {
    var r;
    L(this, qe, t), (r = m(this, je)) == null || r.call(this), L(this, je, t(this.setOnline.bind(this)));
  }
  setOnline(t) {
    m(this, $e) !== t && (L(this, $e, t), this.listeners.forEach((n) => {
      n(t);
    }));
  }
  isOnline() {
    return m(this, $e);
  }
}, $e = new WeakMap(), je = new WeakMap(), qe = new WeakMap(), xs), bi = new xi();
function hs() {
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
function yi(e) {
  return (e ?? "online") === "online" ? bi.isOnline() : !0;
}
var wi = (e) => setTimeout(e, 0);
function ji() {
  let e = [], t = 0, r = (l) => {
    l();
  }, n = (l) => {
    l();
  }, a = wi;
  const i = (l) => {
    t ? e.push(l) : a(() => {
      r(l);
    });
  }, c = () => {
    const l = e;
    e = [], l.length && a(() => {
      n(() => {
        l.forEach((d) => {
          r(d);
        });
      });
    });
  };
  return {
    batch: (l) => {
      let d;
      t++;
      try {
        d = l();
      } finally {
        t--, t || c();
      }
      return d;
    },
    /**
     * All calls to the wrapped function will be batched.
     */
    batchCalls: (l) => (...d) => {
      i(() => {
        l(...d);
      });
    },
    schedule: i,
    /**
     * Use this method to set a custom notify function.
     * This can be used to for example wrap notifications with `React.act` while running tests.
     */
    setNotifyFunction: (l) => {
      r = l;
    },
    /**
     * Use this method to set a custom function to batch notifications together into a single tick.
     * By default React Query will use the batch function provided by ReactDOM or React Native.
     */
    setBatchNotifyFunction: (l) => {
      n = l;
    },
    setScheduler: (l) => {
      a = l;
    }
  };
}
var Lt = ji();
function Ni(e, t) {
  return {
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchStatus: yi(t.networkMode) ? "fetching" : "paused",
    ...e === void 0 && {
      error: null,
      status: "pending"
    }
  };
}
function Ci() {
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
var oe, F, ut, ne, Oe, Be, Ne, Ce, ht, Ge, Ke, Le, Ae, Ee, Qe, V, ot, nr, ar, ir, or, lr, cr, dr, Ks, bs, Ei = (bs = class extends Ot {
  constructor(t, r) {
    super();
    U(this, V);
    U(this, oe);
    U(this, F);
    U(this, ut);
    U(this, ne);
    U(this, Oe);
    U(this, Be);
    U(this, Ne);
    U(this, Ce);
    U(this, ht);
    U(this, Ge);
    // This property keeps track of the last query with defined data.
    // It will be used to pass the previous data and query to the placeholder function between renders.
    U(this, Ke);
    U(this, Le);
    U(this, Ae);
    U(this, Ee);
    U(this, Qe, /* @__PURE__ */ new Set());
    this.options = r, L(this, oe, t), L(this, Ce, null), L(this, Ne, hs()), this.options.experimental_prefetchInRender || m(this, Ne).reject(
      new Error("experimental_prefetchInRender feature flag is not enabled")
    ), this.bindMethods(), this.setOptions(r);
  }
  bindMethods() {
    this.refetch = this.refetch.bind(this);
  }
  onSubscribe() {
    this.listeners.size === 1 && (m(this, F).addObserver(this), fs(m(this, F), this.options) ? B(this, V, ot).call(this) : this.updateResult(), B(this, V, or).call(this));
  }
  onUnsubscribe() {
    this.hasListeners() || this.destroy();
  }
  shouldFetchOnReconnect() {
    return ur(
      m(this, F),
      this.options,
      this.options.refetchOnReconnect
    );
  }
  shouldFetchOnWindowFocus() {
    return ur(
      m(this, F),
      this.options,
      this.options.refetchOnWindowFocus
    );
  }
  destroy() {
    this.listeners = /* @__PURE__ */ new Set(), B(this, V, lr).call(this), B(this, V, cr).call(this), m(this, F).removeObserver(this);
  }
  setOptions(t) {
    const r = this.options, n = m(this, F);
    if (this.options = m(this, oe).defaultQueryOptions(t), this.options.enabled !== void 0 && typeof this.options.enabled != "boolean" && typeof this.options.enabled != "function" && typeof he(this.options.enabled, m(this, F)) != "boolean")
      throw new Error(
        "Expected enabled to be a boolean or a callback that returns a boolean"
      );
    B(this, V, dr).call(this), m(this, F).setOptions(this.options), r._defaulted && !St(this.options, r) && m(this, oe).getQueryCache().notify({
      type: "observerOptionsUpdated",
      query: m(this, F),
      observer: this
    });
    const a = this.hasListeners();
    a && ms(
      m(this, F),
      n,
      this.options,
      r
    ) && B(this, V, ot).call(this), this.updateResult(), a && (m(this, F) !== n || he(this.options.enabled, m(this, F)) !== he(r.enabled, m(this, F)) || Ct(this.options.staleTime, m(this, F)) !== Ct(r.staleTime, m(this, F))) && B(this, V, nr).call(this);
    const i = B(this, V, ar).call(this);
    a && (m(this, F) !== n || he(this.options.enabled, m(this, F)) !== he(r.enabled, m(this, F)) || i !== m(this, Ee)) && B(this, V, ir).call(this, i);
  }
  getOptimisticResult(t) {
    const r = m(this, oe).getQueryCache().build(m(this, oe), t), n = this.createResult(r, t);
    return Ri(this, n) && (L(this, ne, n), L(this, Be, this.options), L(this, Oe, m(this, F).state)), n;
  }
  getCurrentResult() {
    return m(this, ne);
  }
  trackResult(t, r) {
    return new Proxy(t, {
      get: (n, a) => (this.trackProp(a), r == null || r(a), Reflect.get(n, a))
    });
  }
  trackProp(t) {
    m(this, Qe).add(t);
  }
  getCurrentQuery() {
    return m(this, F);
  }
  refetch({ ...t } = {}) {
    return this.fetch({
      ...t
    });
  }
  fetchOptimistic(t) {
    const r = m(this, oe).defaultQueryOptions(t), n = m(this, oe).getQueryCache().build(m(this, oe), r);
    return n.fetch().then(() => this.createResult(n, r));
  }
  fetch(t) {
    return B(this, V, ot).call(this, {
      ...t,
      cancelRefetch: t.cancelRefetch ?? !0
    }).then(() => (this.updateResult(), m(this, ne)));
  }
  createResult(t, r) {
    var x;
    const n = m(this, F), a = this.options, i = m(this, ne), c = m(this, Oe), l = m(this, Be), u = t !== n ? t.state : m(this, ut), { state: h } = t;
    let f = { ...h }, g = !1, N;
    if (r._optimisticResults) {
      const S = this.hasListeners(), W = !S && fs(t, r), b = S && ms(t, n, r, a);
      (W || b) && (f = {
        ...f,
        ...Ni(h.data, t.options)
      }), r._optimisticResults === "isRestoring" && (f.fetchStatus = "idle");
    }
    let { error: R, errorUpdatedAt: k, status: C } = f;
    N = f.data;
    let y = !1;
    if (r.placeholderData !== void 0 && N === void 0 && C === "pending") {
      let S;
      i != null && i.isPlaceholderData && r.placeholderData === (l == null ? void 0 : l.placeholderData) ? (S = i.data, y = !0) : S = typeof r.placeholderData == "function" ? r.placeholderData(
        (x = m(this, Ke)) == null ? void 0 : x.state.data,
        m(this, Ke)
      ) : r.placeholderData, S !== void 0 && (C = "success", N = us(
        i == null ? void 0 : i.data,
        S,
        r
      ), g = !0);
    }
    if (r.select && N !== void 0 && !y)
      if (i && N === (c == null ? void 0 : c.data) && r.select === m(this, ht))
        N = m(this, Ge);
      else
        try {
          L(this, ht, r.select), N = r.select(N), N = us(i == null ? void 0 : i.data, N, r), L(this, Ge, N), L(this, Ce, null);
        } catch (S) {
          L(this, Ce, S);
        }
    m(this, Ce) && (R = m(this, Ce), N = m(this, Ge), k = Date.now(), C = "error");
    const j = f.fetchStatus === "fetching", P = C === "pending", O = C === "error", H = P && j, K = N !== void 0, E = {
      status: C,
      fetchStatus: f.fetchStatus,
      isPending: P,
      isSuccess: C === "success",
      isError: O,
      isInitialLoading: H,
      isLoading: H,
      data: N,
      dataUpdatedAt: f.dataUpdatedAt,
      error: R,
      errorUpdatedAt: k,
      failureCount: f.fetchFailureCount,
      failureReason: f.fetchFailureReason,
      errorUpdateCount: f.errorUpdateCount,
      isFetched: f.dataUpdateCount > 0 || f.errorUpdateCount > 0,
      isFetchedAfterMount: f.dataUpdateCount > u.dataUpdateCount || f.errorUpdateCount > u.errorUpdateCount,
      isFetching: j,
      isRefetching: j && !P,
      isLoadingError: O && !K,
      isPaused: f.fetchStatus === "paused",
      isPlaceholderData: g,
      isRefetchError: O && K,
      isStale: _r(t, r),
      refetch: this.refetch,
      promise: m(this, Ne)
    };
    if (this.options.experimental_prefetchInRender) {
      const S = (q) => {
        E.status === "error" ? q.reject(E.error) : E.data !== void 0 && q.resolve(E.data);
      }, W = () => {
        const q = L(this, Ne, E.promise = hs());
        S(q);
      }, b = m(this, Ne);
      switch (b.status) {
        case "pending":
          t.queryHash === n.queryHash && S(b);
          break;
        case "fulfilled":
          (E.status === "error" || E.data !== b.value) && W();
          break;
        case "rejected":
          (E.status !== "error" || E.error !== b.reason) && W();
          break;
      }
    }
    return E;
  }
  updateResult() {
    const t = m(this, ne), r = this.createResult(m(this, F), this.options);
    if (L(this, Oe, m(this, F).state), L(this, Be, this.options), m(this, Oe).data !== void 0 && L(this, Ke, m(this, F)), St(r, t))
      return;
    L(this, ne, r);
    const n = () => {
      if (!t)
        return !0;
      const { notifyOnChangeProps: a } = this.options, i = typeof a == "function" ? a() : a;
      if (i === "all" || !i && !m(this, Qe).size)
        return !0;
      const c = new Set(
        i ?? m(this, Qe)
      );
      return this.options.throwOnError && c.add("error"), Object.keys(m(this, ne)).some((l) => {
        const d = l;
        return m(this, ne)[d] !== t[d] && c.has(d);
      });
    };
    B(this, V, Ks).call(this, { listeners: n() });
  }
  onQueryUpdate() {
    this.updateResult(), this.hasListeners() && B(this, V, or).call(this);
  }
}, oe = new WeakMap(), F = new WeakMap(), ut = new WeakMap(), ne = new WeakMap(), Oe = new WeakMap(), Be = new WeakMap(), Ne = new WeakMap(), Ce = new WeakMap(), ht = new WeakMap(), Ge = new WeakMap(), Ke = new WeakMap(), Le = new WeakMap(), Ae = new WeakMap(), Ee = new WeakMap(), Qe = new WeakMap(), V = new WeakSet(), ot = function(t) {
  B(this, V, dr).call(this);
  let r = m(this, F).fetch(
    this.options,
    t
  );
  return t != null && t.throwOnError || (r = r.catch(Rt)), r;
}, nr = function() {
  B(this, V, lr).call(this);
  const t = Ct(
    this.options.staleTime,
    m(this, F)
  );
  if (dt || m(this, ne).isStale || !os(t))
    return;
  const n = pi(m(this, ne).dataUpdatedAt, t) + 1;
  L(this, Le, setTimeout(() => {
    m(this, ne).isStale || this.updateResult();
  }, n));
}, ar = function() {
  return (typeof this.options.refetchInterval == "function" ? this.options.refetchInterval(m(this, F)) : this.options.refetchInterval) ?? !1;
}, ir = function(t) {
  B(this, V, cr).call(this), L(this, Ee, t), !(dt || he(this.options.enabled, m(this, F)) === !1 || !os(m(this, Ee)) || m(this, Ee) === 0) && L(this, Ae, setInterval(() => {
    (this.options.refetchIntervalInBackground || vi.isFocused()) && B(this, V, ot).call(this);
  }, m(this, Ee)));
}, or = function() {
  B(this, V, nr).call(this), B(this, V, ir).call(this, B(this, V, ar).call(this));
}, lr = function() {
  m(this, Le) && (clearTimeout(m(this, Le)), L(this, Le, void 0));
}, cr = function() {
  m(this, Ae) && (clearInterval(m(this, Ae)), L(this, Ae, void 0));
}, dr = function() {
  const t = m(this, oe).getQueryCache().build(m(this, oe), this.options);
  if (t === m(this, F))
    return;
  const r = m(this, F);
  L(this, F, t), L(this, ut, t.state), this.hasListeners() && (r == null || r.removeObserver(this), t.addObserver(this));
}, Ks = function(t) {
  Lt.batch(() => {
    t.listeners && this.listeners.forEach((r) => {
      r(m(this, ne));
    }), m(this, oe).getQueryCache().notify({
      query: m(this, F),
      type: "observerResultsUpdated"
    });
  });
}, bs);
function ki(e, t) {
  return he(t.enabled, e) !== !1 && e.state.data === void 0 && !(e.state.status === "error" && t.retryOnMount === !1);
}
function fs(e, t) {
  return ki(e, t) || e.state.data !== void 0 && ur(e, t, t.refetchOnMount);
}
function ur(e, t, r) {
  if (he(t.enabled, e) !== !1) {
    const n = typeof r == "function" ? r(e) : r;
    return n === "always" || n !== !1 && _r(e, t);
  }
  return !1;
}
function ms(e, t, r, n) {
  return (e !== t || he(n.enabled, e) === !1) && (!r.suspense || e.state.status !== "error") && _r(e, r);
}
function _r(e, t) {
  return he(t.enabled, e) !== !1 && e.isStaleByTime(Ct(t.staleTime, e));
}
function Ri(e, t) {
  return !St(e.getCurrentResult(), t);
}
var ke, Re, le, pe, ge, Et, hr, ys, Si = (ys = class extends Ot {
  constructor(t, r) {
    super();
    U(this, ge);
    U(this, ke);
    U(this, Re);
    U(this, le);
    U(this, pe);
    L(this, ke, t), this.setOptions(r), this.bindMethods(), B(this, ge, Et).call(this);
  }
  bindMethods() {
    this.mutate = this.mutate.bind(this), this.reset = this.reset.bind(this);
  }
  setOptions(t) {
    var n;
    const r = this.options;
    this.options = m(this, ke).defaultMutationOptions(t), St(this.options, r) || m(this, ke).getMutationCache().notify({
      type: "observerOptionsUpdated",
      mutation: m(this, le),
      observer: this
    }), r != null && r.mutationKey && this.options.mutationKey && ls(r.mutationKey) !== ls(this.options.mutationKey) ? this.reset() : ((n = m(this, le)) == null ? void 0 : n.state.status) === "pending" && m(this, le).setOptions(this.options);
  }
  onUnsubscribe() {
    var t;
    this.hasListeners() || (t = m(this, le)) == null || t.removeObserver(this);
  }
  onMutationUpdate(t) {
    B(this, ge, Et).call(this), B(this, ge, hr).call(this, t);
  }
  getCurrentResult() {
    return m(this, Re);
  }
  reset() {
    var t;
    (t = m(this, le)) == null || t.removeObserver(this), L(this, le, void 0), B(this, ge, Et).call(this), B(this, ge, hr).call(this);
  }
  mutate(t, r) {
    var n;
    return L(this, pe, r), (n = m(this, le)) == null || n.removeObserver(this), L(this, le, m(this, ke).getMutationCache().build(m(this, ke), this.options)), m(this, le).addObserver(this), m(this, le).execute(t);
  }
}, ke = new WeakMap(), Re = new WeakMap(), le = new WeakMap(), pe = new WeakMap(), ge = new WeakSet(), Et = function() {
  var r;
  const t = ((r = m(this, le)) == null ? void 0 : r.state) ?? Ci();
  L(this, Re, {
    ...t,
    isPending: t.status === "pending",
    isSuccess: t.status === "success",
    isError: t.status === "error",
    isIdle: t.status === "idle",
    mutate: this.mutate,
    reset: this.reset
  });
}, hr = function(t) {
  Lt.batch(() => {
    var r, n, a, i, c, l, d, u;
    if (m(this, pe) && this.hasListeners()) {
      const h = m(this, Re).variables, f = m(this, Re).context;
      (t == null ? void 0 : t.type) === "success" ? ((n = (r = m(this, pe)).onSuccess) == null || n.call(r, t.data, h, f), (i = (a = m(this, pe)).onSettled) == null || i.call(a, t.data, null, h, f)) : (t == null ? void 0 : t.type) === "error" && ((l = (c = m(this, pe)).onError) == null || l.call(c, t.error, h, f), (u = (d = m(this, pe)).onSettled) == null || u.call(
        d,
        void 0,
        t.error,
        h,
        f
      ));
    }
    this.listeners.forEach((h) => {
      h(m(this, Re));
    });
  });
}, ys), _i = p.createContext(
  void 0
), Ze = (e) => {
  const t = p.useContext(_i);
  if (!t)
    throw new Error("No QueryClient set, use QueryClientProvider to set one");
  return t;
}, Qs = p.createContext(!1), Pi = () => p.useContext(Qs);
Qs.Provider;
function Ti() {
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
var Oi = p.createContext(Ti()), Li = () => p.useContext(Oi), Ai = (e, t) => {
  (e.suspense || e.throwOnError || e.experimental_prefetchInRender) && (t.isReset() || (e.retryOnMount = !1));
}, Fi = (e) => {
  p.useEffect(() => {
    e.clearReset();
  }, [e]);
}, Mi = ({
  result: e,
  errorResetBoundary: t,
  throwOnError: r,
  query: n,
  suspense: a
}) => e.isError && !t.isReset() && !e.isFetching && n && (a && e.data === void 0 || Gs(r, [e.error, n])), Ii = (e) => {
  const t = e.staleTime;
  e.suspense && (e.staleTime = typeof t == "function" ? (...r) => Math.max(t(...r), 1e3) : Math.max(t ?? 1e3, 1e3), typeof e.gcTime == "number" && (e.gcTime = Math.max(e.gcTime, 1e3)));
}, Di = (e, t) => e.isLoading && e.isFetching && !t, Vi = (e, t) => (e == null ? void 0 : e.suspense) && t.isPending, ps = (e, t, r) => t.fetchOptimistic(e).catch(() => {
  r.clearReset();
});
function Ui(e, t, r) {
  var f, g, N, R, k;
  if (process.env.NODE_ENV !== "production" && (typeof e != "object" || Array.isArray(e)))
    throw new Error(
      'Bad argument type. Starting with v5, only the "Object" form is allowed when calling query related functions. Please use the error stack to find the culprit call. More info here: https://tanstack.com/query/latest/docs/react/guides/migrating-to-v5#supports-a-single-signature-one-object'
    );
  const n = Ze(), a = Pi(), i = Li(), c = n.defaultQueryOptions(e);
  (g = (f = n.getDefaultOptions().queries) == null ? void 0 : f._experimental_beforeQuery) == null || g.call(
    f,
    c
  ), process.env.NODE_ENV !== "production" && (c.queryFn || console.error(
    `[${c.queryHash}]: No queryFn was passed as an option, and no default queryFn was found. The queryFn parameter is only optional when using a default queryFn. More info here: https://tanstack.com/query/latest/docs/framework/react/guides/default-query-function`
  )), c._optimisticResults = a ? "isRestoring" : "optimistic", Ii(c), Ai(c, i), Fi(i);
  const l = !n.getQueryCache().get(c.queryHash), [d] = p.useState(
    () => new t(
      n,
      c
    )
  ), u = d.getOptimisticResult(c), h = !a && e.subscribed !== !1;
  if (p.useSyncExternalStore(
    p.useCallback(
      (C) => {
        const y = h ? d.subscribe(Lt.batchCalls(C)) : Rt;
        return d.updateResult(), y;
      },
      [d, h]
    ),
    () => d.getCurrentResult(),
    () => d.getCurrentResult()
  ), p.useEffect(() => {
    d.setOptions(c);
  }, [c, d]), Vi(c, u))
    throw ps(c, d, i);
  if (Mi({
    result: u,
    errorResetBoundary: i,
    throwOnError: c.throwOnError,
    query: n.getQueryCache().get(c.queryHash),
    suspense: c.suspense
  }))
    throw u.error;
  if ((R = (N = n.getDefaultOptions().queries) == null ? void 0 : N._experimental_afterQuery) == null || R.call(
    N,
    c,
    u
  ), c.experimental_prefetchInRender && !dt && Di(u, a)) {
    const C = l ? (
      // Fetch immediately on render in order to ensure `.promise` is resolved even if the component is unmounted
      ps(c, d, i)
    ) : (
      // subscribe to the "cache promise" so that we can finalize the currentThenable once data comes in
      (k = n.getQueryCache().get(c.queryHash)) == null ? void 0 : k.promise
    );
    C == null || C.catch(Rt).finally(() => {
      d.updateResult();
    });
  }
  return c.notifyOnChangeProps ? u : d.trackResult(u);
}
function Se(e, t) {
  return Ui(e, Ei);
}
function ce(e, t) {
  const r = Ze(), [n] = p.useState(
    () => new Si(
      r,
      e
    )
  );
  p.useEffect(() => {
    n.setOptions(e);
  }, [n, e]);
  const a = p.useSyncExternalStore(
    p.useCallback(
      (c) => n.subscribe(Lt.batchCalls(c)),
      [n]
    ),
    () => n.getCurrentResult(),
    () => n.getCurrentResult()
  ), i = p.useCallback(
    (c, l) => {
      n.mutate(c, l).catch(Rt);
    },
    [n]
  );
  if (a.error && Gs(n.options.throwOnError, [a.error]))
    throw a.error;
  return { ...a, mutate: i, mutateAsync: a.mutate };
}
const Yt = 768;
function Wi() {
  const [e, t] = p.useState(
    void 0
  );
  return p.useEffect(() => {
    const r = window.matchMedia(`(max-width: ${Yt - 1}px)`), n = () => {
      t(window.innerWidth < Yt);
    };
    return r.addEventListener("change", n), t(window.innerWidth < Yt), () => r.removeEventListener("change", n);
  }, []), !!e;
}
const mt = ({ children: e, title: t }) => {
  const [r, n] = Z(!1), a = Cr(), i = Ie(), c = Wi(), { logout: l } = br(), d = Bs(), u = Sr();
  xr(() => {
    c && n(!1);
  }, [i.pathname, c]);
  const h = async () => {
    try {
      const { error: g } = await l();
      if (g) throw g;
      I({
        title: "Logged out successfully"
      }), a("/auth/login");
    } catch (g) {
      console.error("Logout failed:", g), I({
        title: "Error",
        description: "Failed to log out. Please try again.",
        variant: "destructive"
      });
    }
  }, f = [
    { name: "Dashboard", path: "/admin", icon: "home" },
    { name: u.products, path: "/admin/products", icon: "box" },
    { name: u.articles, path: "/admin/articles", icon: "file-text" },
    { name: u.galleries, path: "/admin/gallery", icon: "image" },
    {
      name: u.testimonials,
      path: "/admin/testimonials",
      icon: "message-square"
    }
  ];
  return /* @__PURE__ */ s.jsxs("div", { className: `min-h-screen bg-${d.background} text-white flex flex-col md:flex-row`, children: [
    /* @__PURE__ */ s.jsxs("header", { className: `bg-${d.primary}-light border-b border-white/10 p-4 flex justify-between items-center md:hidden`, children: [
      /* @__PURE__ */ s.jsxs("div", { className: `font-serif text-${d.secondary} text-xl`, children: [
        u.title,
        " Admin"
      ] }),
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
        className: `bg-${d.primary}-light w-full md:w-64 flex-shrink-0 border-r border-white/10 md:flex flex-col 
                    ${c ? r ? "fixed inset-0 z-50 block" : "hidden" : "flex"}`,
        children: [
          /* @__PURE__ */ s.jsx("div", { className: "p-6 border-b border-white/10", children: /* @__PURE__ */ s.jsx(
            Fe,
            {
              to: "/admin",
              className: `font-serif text-${d.secondary} text-xl flex items-center`,
              children: u.title
            }
          ) }),
          /* @__PURE__ */ s.jsx("nav", { className: "flex-1 p-4 space-y-1", children: f.map((g) => /* @__PURE__ */ s.jsxs(
            Fe,
            {
              to: g.path,
              className: `flex items-center px-4 py-3 rounded-lg transition-colors ${i.pathname === g.path ? `bg-${d.primary} text-${d.secondary}` : `text-white/70 hover:bg-${d.primary}/50`}`,
              children: [
                /* @__PURE__ */ s.jsxs(
                  "svg",
                  {
                    className: "w-5 h-5 mr-3",
                    fill: "none",
                    stroke: "currentColor",
                    viewBox: "0 0 24 24",
                    children: [
                      g.icon === "home" && /* @__PURE__ */ s.jsx(
                        "path",
                        {
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          strokeWidth: "2",
                          d: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                        }
                      ),
                      g.icon === "box" && /* @__PURE__ */ s.jsx(
                        "path",
                        {
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          strokeWidth: "2",
                          d: "M20 7l-8-4-8 4m16 0v10a2 2 0 01-2 2H6a2 2 0 01-2-2V7m16 0l-8 4m-8-4l8 4"
                        }
                      ),
                      g.icon === "file-text" && /* @__PURE__ */ s.jsx(
                        "path",
                        {
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          strokeWidth: "2",
                          d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        }
                      ),
                      g.icon === "image" && /* @__PURE__ */ s.jsx(
                        "path",
                        {
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          strokeWidth: "2",
                          d: "M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                        }
                      ),
                      g.icon === "message-square" && /* @__PURE__ */ s.jsx(
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
                /* @__PURE__ */ s.jsx("span", { children: g.name })
              ]
            },
            g.path
          )) }),
          /* @__PURE__ */ s.jsx("div", { className: "p-4 border-t border-white/10", children: /* @__PURE__ */ s.jsxs(
            X,
            {
              variant: "ghost",
              className: `w-full justify-start text-white/70 hover:text-white hover:bg-${d.primary}/50`,
              onClick: h,
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
    /* @__PURE__ */ s.jsx("main", { className: `flex-1 overflow-y-auto bg-${d.background}`, children: /* @__PURE__ */ s.jsxs("div", { className: "p-6", children: [
      /* @__PURE__ */ s.jsxs("div", { className: "mb-8", children: [
        /* @__PURE__ */ s.jsx("h1", { className: `font-serif text-2xl md:text-3xl text-${d.secondary}`, children: t }),
        /* @__PURE__ */ s.jsx("div", { className: `w-16 h-1 bg-${d.secondary}/30 mt-3` })
      ] }),
      e
    ] }) })
  ] });
}, fr = p.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ s.jsx(
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
fr.displayName = "Card";
const mr = p.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ s.jsx(
  "div",
  {
    ref: r,
    className: re("flex flex-col space-y-1.5 p-6", e),
    ...t
  }
));
mr.displayName = "CardHeader";
const pr = p.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ s.jsx(
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
pr.displayName = "CardTitle";
const zi = p.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ s.jsx(
  "p",
  {
    ref: r,
    className: re("text-sm text-muted-foreground", e),
    ...t
  }
));
zi.displayName = "CardDescription";
const gr = p.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ s.jsx("div", { ref: r, className: re("p-6 pt-0", e), ...t }));
gr.displayName = "CardContent";
const $i = p.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ s.jsx(
  "div",
  {
    ref: r,
    className: re("flex items-center p-6 pt-0", e),
    ...t
  }
));
$i.displayName = "CardFooter";
const ro = ({
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
  }), c = Sr(), { data: l, isSuccess: d } = Se({
    queryKey: ["admin-products"],
    queryFn: e
  }), { data: u, isSuccess: h } = Se({
    queryKey: ["admin-articles"],
    queryFn: t
  }), { data: f, isSuccess: g } = Se({
    queryKey: ["admin-gallery"],
    queryFn: r
  }), { data: N, isSuccess: R } = Se({
    queryKey: ["admin-testimonials"],
    queryFn: n
  });
  xr(() => {
    const y = { ...a };
    d && l.data && (y.products = l.data.length), h && u.data && (y.articles = u.data.length), g && f.data && (y.gallery = f.data.length), R && N.data && (y.testimonials = N.data.length), i(y);
  }, [
    d,
    h,
    g,
    R,
    l,
    u,
    f,
    N
  ]);
  const k = [
    {
      title: "Products",
      value: a.products,
      icon: "box",
      link: "/admin/products",
      color: "bg-gradient-to-br from-primary to-primary-light"
    },
    {
      title: "Articles",
      value: a.articles,
      icon: "file-text",
      link: "/admin/articles",
      color: "bg-gradient-to-br from-primary to-primary-light"
    },
    {
      title: "Gallery Items",
      value: a.gallery,
      icon: "image",
      link: "/admin/gallery",
      color: "bg-gradient-to-br from-primary-light to-primary"
    },
    {
      title: "Testimonials",
      value: a.testimonials,
      icon: "message-square",
      link: "/admin/testimonials",
      color: "bg-gradient-to-br from-secondary to-secondary-light"
    }
  ], C = [
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
  return /* @__PURE__ */ s.jsx(mt, { title: "Admin Dashboard", children: /* @__PURE__ */ s.jsxs("div", { className: "space-y-8", children: [
    /* @__PURE__ */ s.jsxs("div", { className: "bg-primary p-6 rounded-lg shadow-lg border border-white/10 mb-8", children: [
      /* @__PURE__ */ s.jsxs("h2", { className: "font-serif text-2xl text-secondary mb-2", children: [
        "Welcome to ",
        c.title,
        " Admin"
      ] }),
      /* @__PURE__ */ s.jsx("p", { className: "text-white/80", children: "Manage your brand content from this central dashboard. Select a section below to begin editing your site's content." })
    ] }),
    /* @__PURE__ */ s.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5", children: k.map((y, j) => /* @__PURE__ */ s.jsx(
      Fe,
      {
        to: y.link,
        className: "transition-transform hover:scale-105",
        children: /* @__PURE__ */ s.jsxs(fr, { className: `border-0 shadow-lg ${y.color} text-white`, children: [
          /* @__PURE__ */ s.jsx(mr, { className: "pb-2", children: /* @__PURE__ */ s.jsxs("div", { className: "flex justify-between items-center", children: [
            /* @__PURE__ */ s.jsx(pr, { className: "text-lg font-serif", children: y.title }),
            /* @__PURE__ */ s.jsx("div", { className: "bg-white/20 p-2 rounded-full", children: /* @__PURE__ */ s.jsxs(
              "svg",
              {
                className: "w-5 h-5",
                fill: "none",
                stroke: "currentColor",
                viewBox: "0 0 24 24",
                children: [
                  y.icon === "box" && /* @__PURE__ */ s.jsx(
                    "path",
                    {
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      strokeWidth: "2",
                      d: "M20 7l-8-4-8 4m16 0v10a2 2 0 01-2 2H6a2 2 0 01-2-2V7m16 0l-8 4m-8-4l8 4"
                    }
                  ),
                  y.icon === "file-text" && /* @__PURE__ */ s.jsx(
                    "path",
                    {
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      strokeWidth: "2",
                      d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    }
                  ),
                  y.icon === "image" && /* @__PURE__ */ s.jsx(
                    "path",
                    {
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      strokeWidth: "2",
                      d: "M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    }
                  ),
                  y.icon === "message-square" && /* @__PURE__ */ s.jsx(
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
          /* @__PURE__ */ s.jsxs(gr, { children: [
            /* @__PURE__ */ s.jsx("div", { className: "text-3xl font-bold", children: y.value }),
            /* @__PURE__ */ s.jsxs("p", { className: "text-sm text-white/70 mt-1", children: [
              "Total ",
              y.title.toLowerCase()
            ] })
          ] })
        ] })
      },
      j
    )) }),
    /* @__PURE__ */ s.jsxs("div", { className: "mt-12 space-y-4", children: [
      /* @__PURE__ */ s.jsx("h2", { className: "font-serif text-xl text-secondary mb-4", children: "Quick Actions" }),
      /* @__PURE__ */ s.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5", children: C.map((y, j) => /* @__PURE__ */ s.jsx(
        Fe,
        {
          to: y.link,
          className: "transition-transform hover:scale-105",
          children: /* @__PURE__ */ s.jsxs(fr, { className: "bg-primary-light border border-secondary/10 shadow-lg", children: [
            /* @__PURE__ */ s.jsx(mr, { className: "pb-2", children: /* @__PURE__ */ s.jsxs("div", { className: "flex justify-between items-center", children: [
              /* @__PURE__ */ s.jsx(pr, { className: "text-md font-serif text-secondary", children: y.title }),
              /* @__PURE__ */ s.jsx("div", { className: "bg-secondary/20 text-secondary p-2 rounded-full", children: /* @__PURE__ */ s.jsxs(
                "svg",
                {
                  className: "w-5 h-5",
                  fill: "none",
                  stroke: "currentColor",
                  viewBox: "0 0 24 24",
                  children: [
                    y.icon === "plus-circle" && /* @__PURE__ */ s.jsx(
                      "path",
                      {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: "2",
                        d: "M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                      }
                    ),
                    y.icon === "edit" && /* @__PURE__ */ s.jsx(
                      "path",
                      {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: "2",
                        d: "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                      }
                    ),
                    y.icon === "upload" && /* @__PURE__ */ s.jsx(
                      "path",
                      {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: "2",
                        d: "M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
                      }
                    ),
                    y.icon === "star" && /* @__PURE__ */ s.jsx(
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
            /* @__PURE__ */ s.jsx(gr, { children: /* @__PURE__ */ s.jsx("p", { className: "text-sm text-white/70", children: y.description }) })
          ] })
        },
        j
      )) })
    ] }),
    /* @__PURE__ */ s.jsx("div", { className: "py-6 text-center", children: /* @__PURE__ */ s.jsxs(
      Fe,
      {
        to: "/",
        className: "text-secondary hover:text-secondary-light flex items-center justify-center",
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
}, Hs = p.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ s.jsx("div", { className: "relative w-full overflow-auto", children: /* @__PURE__ */ s.jsx(
  "table",
  {
    ref: r,
    className: re("w-full caption-bottom text-sm", e),
    ...t
  }
) }));
Hs.displayName = "Table";
const Ys = p.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ s.jsx("thead", { ref: r, className: re("[&_tr]:border-b", e), ...t }));
Ys.displayName = "TableHeader";
const Js = p.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ s.jsx(
  "tbody",
  {
    ref: r,
    className: re("[&_tr:last-child]:border-0", e),
    ...t
  }
));
Js.displayName = "TableBody";
const qi = p.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ s.jsx(
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
qi.displayName = "TableFooter";
const lt = p.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ s.jsx(
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
lt.displayName = "TableRow";
const vr = p.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ s.jsx(
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
vr.displayName = "TableHead";
const ct = p.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ s.jsx(
  "td",
  {
    ref: r,
    className: re("p-4 align-middle [&:has([role=checkbox])]:pr-0", e),
    ...t
  }
));
ct.displayName = "TableCell";
const Bi = p.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ s.jsx(
  "caption",
  {
    ref: r,
    className: re("mt-4 text-sm text-muted-foreground", e),
    ...t
  }
));
Bi.displayName = "TableCaption";
function At({
  columns: e,
  data: t,
  onEdit: r,
  onDelete: n,
  isLoading: a = !1
}) {
  return /* @__PURE__ */ s.jsx("div", { className: "w-full overflow-x-auto rounded-lg border border-primary/50", children: /* @__PURE__ */ s.jsxs(Hs, { children: [
    /* @__PURE__ */ s.jsx(Ys, { children: /* @__PURE__ */ s.jsxs(lt, { className: "bg-primary-light hover:bg-primary-light", children: [
      e.map((i) => /* @__PURE__ */ s.jsx(
        vr,
        {
          className: "text-secondary font-serif",
          style: i.width ? { width: i.width } : {},
          children: i.header
        },
        i.key
      )),
      /* @__PURE__ */ s.jsx(vr, { className: "text-secondary font-serif text-right", children: "Actions" })
    ] }) }),
    /* @__PURE__ */ s.jsx(Js, { children: a ? /* @__PURE__ */ s.jsx(lt, { children: /* @__PURE__ */ s.jsx(ct, { colSpan: e.length + 1, className: "text-center py-10", children: /* @__PURE__ */ s.jsx("div", { className: "flex justify-center", children: /* @__PURE__ */ s.jsx("div", { className: "w-8 h-8 border-2 border-secondary border-t-transparent rounded-full animate-spin" }) }) }) }) : t.length === 0 ? /* @__PURE__ */ s.jsx(lt, { children: /* @__PURE__ */ s.jsx(ct, { colSpan: e.length + 1, className: "text-center py-10 text-black", children: "No items found" }) }) : t.map((i) => /* @__PURE__ */ s.jsxs(lt, { className: "border-b border-primary/30 hover:bg-primary-light/20 text-black/60", children: [
      e.map((c) => /* @__PURE__ */ s.jsx(ct, { children: c.render ? c.render(i[c.key], i) : i[c.key] }, `${i.id}-${c.key}`)),
      /* @__PURE__ */ s.jsx(ct, { className: "text-right", children: /* @__PURE__ */ s.jsxs("div", { className: "flex justify-end gap-2", children: [
        /* @__PURE__ */ s.jsxs(
          X,
          {
            variant: "ghost",
            size: "sm",
            className: "h-8 w-8 p-0 text-secondary",
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
            className: "h-8 w-8 p-0 text-primary",
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
const so = ({ query: e }) => {
  const {
    createArticle: t,
    getAllArticles: r,
    deleteArticle: n,
    updateArticle: a,
    updateArticleStatus: i
  } = e, [c, l] = Z(!1), [d, u] = Z(null), [h, f] = Z({
    title: "",
    slug: "",
    excerpt: "",
    content: "",
    cover_image: "",
    author_name: "",
    status: "draft",
    category: ""
  }), g = Ze(), { data: N, isLoading: R } = Se({
    queryKey: ["admin-articles"],
    queryFn: r
  }), k = ce({
    mutationFn: t,
    onSuccess: () => {
      g.invalidateQueries({ queryKey: ["admin-articles"] }), I({
        title: "Article created successfully"
      }), S();
    },
    onError: (b) => {
      console.error("Failed to create article:", b), I({
        title: "Error",
        description: "Failed to create article. Please try again.",
        variant: "destructive"
      });
    }
  }), C = ce({
    mutationFn: ({ id: b, updates: q }) => a(b, q),
    onSuccess: () => {
      g.invalidateQueries({ queryKey: ["admin-articles"] }), I({
        title: "Article updated successfully"
      }), S();
    },
    onError: (b) => {
      console.error("Failed to update article:", b), I({
        title: "Error",
        description: "Failed to update article. Please try again.",
        variant: "destructive"
      });
    }
  }), y = ce({
    mutationFn: n,
    onSuccess: () => {
      g.invalidateQueries({ queryKey: ["admin-articles"] }), I({
        title: "Article deleted successfully"
      });
    },
    onError: (b) => {
      console.error("Failed to delete article:", b), I({
        title: "Error",
        description: "Failed to delete article. Please try again.",
        variant: "destructive"
      });
    }
  }), j = ce({
    mutationFn: ({
      id: b,
      status: q
    }) => i(b, q),
    onSuccess: () => {
      g.invalidateQueries({ queryKey: ["admin-articles"] }), I({
        title: "Article status updated"
      });
    },
    onError: (b) => {
      console.error("Failed to update article status:", b), I({
        title: "Error",
        description: "Failed to update article status. Please try again.",
        variant: "destructive"
      });
    }
  }), P = (b) => {
    const { name: q, value: ae } = b.target;
    f({
      ...h,
      [q]: ae
    });
  }, O = () => {
    if (h.title) {
      const b = h.title.toLowerCase().replace(/[^\w\s]/gi, "").replace(/\s+/g, "-");
      f({
        ...h,
        slug: b
      });
    }
  }, H = (b) => {
    b.preventDefault(), k.mutate(h);
  }, K = (b) => {
    b.preventDefault(), d && C.mutate({
      id: d.id,
      updates: h
    });
  }, ee = (b) => {
    u(b), f({
      title: b.title,
      slug: b.slug,
      excerpt: b.excerpt,
      content: b.content,
      cover_image: b.cover_image,
      author_name: b.author_name,
      status: b.status,
      category: b.category || ""
    }), l(!0), window.scrollTo({ top: 0, behavior: "smooth" });
  }, E = (b) => {
    confirm("Are you sure you want to delete this article?") && y.mutate(b.id);
  }, x = (b, q) => {
    j.mutate({ id: b, status: q });
  }, S = () => {
    u(null), f({
      title: "",
      slug: "",
      excerpt: "",
      content: "",
      cover_image: "",
      author_name: "",
      status: "draft",
      category: ""
    }), l(!1);
  }, W = [
    {
      key: "title",
      header: "Title",
      render: (b) => /* @__PURE__ */ s.jsx("div", { className: "font-medium", children: b })
    },
    {
      key: "slug",
      header: "Slug",
      render: (b) => /* @__PURE__ */ s.jsx("div", { className: "max-w-xs truncate font-mono text-xs text-primary/70", children: b })
    },
    {
      key: "status",
      header: "Status",
      render: (b, q) => /* @__PURE__ */ s.jsxs("div", { className: "flex items-center space-x-2", children: [
        /* @__PURE__ */ s.jsx(
          "div",
          {
            className: `px-2 py-1 rounded-full text-xs ${b === "published" ? "bg-primary/20 text-primary" : "bg-secondary/20 text-secondary"}`,
            children: b === "published" ? "Published" : "Draft"
          }
        ),
        /* @__PURE__ */ s.jsxs(
          X,
          {
            variant: "ghost",
            size: "sm",
            className: "h-6 w-6 p-0 text-primary/70",
            onClick: () => x(
              q.id,
              b === "published" ? "draft" : "published"
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
  return /* @__PURE__ */ s.jsx(mt, { title: "Manage Articles", children: /* @__PURE__ */ s.jsxs("div", { className: "space-y-8", children: [
    /* @__PURE__ */ s.jsx("div", { className: "mb-8", children: c ? /* @__PURE__ */ s.jsxs("div", { className: "bg-primary-light rounded-lg border border-secondary/20 p-6", children: [
      /* @__PURE__ */ s.jsxs("div", { className: "flex justify-between items-center mb-6", children: [
        /* @__PURE__ */ s.jsx("h2", { className: "font-serif text-xl text-secondary", children: d ? "Edit Article" : "Create New Article" }),
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
          onSubmit: d ? K : H,
          children: /* @__PURE__ */ s.jsxs("div", { className: "space-y-4", children: [
            /* @__PURE__ */ s.jsxs("div", { children: [
              /* @__PURE__ */ s.jsx($, { htmlFor: "title", className: "text-white", children: "Article Title" }),
              /* @__PURE__ */ s.jsxs("div", { className: "flex gap-2", children: [
                /* @__PURE__ */ s.jsx(
                  te,
                  {
                    id: "title",
                    name: "title",
                    value: h.title,
                    onChange: P,
                    className: "flex-1 bg-primary-secondary/20 border-secondary/30 text-black",
                    required: !0
                  }
                ),
                /* @__PURE__ */ s.jsx(
                  X,
                  {
                    type: "button",
                    variant: "outline",
                    className: "border-secondary/30 text-secondary",
                    onClick: O,
                    children: "Generate Slug"
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ s.jsxs("div", { children: [
              /* @__PURE__ */ s.jsx($, { htmlFor: "slug", className: "text-white", children: "Slug" }),
              /* @__PURE__ */ s.jsx(
                te,
                {
                  id: "slug",
                  name: "slug",
                  value: h.slug,
                  onChange: P,
                  className: "bg-primary-secondary/20 border-secondary/30 text-black font-mono",
                  required: !0
                }
              )
            ] }),
            /* @__PURE__ */ s.jsxs("div", { children: [
              /* @__PURE__ */ s.jsx($, { htmlFor: "author_name", className: "text-white", children: "Author" }),
              /* @__PURE__ */ s.jsx(
                te,
                {
                  id: "author_name",
                  name: "author_name",
                  value: h.author_name,
                  onChange: P,
                  className: "bg-primary-secondary/20 border-secondary/30 text-black",
                  required: !0
                }
              )
            ] }),
            /* @__PURE__ */ s.jsxs("div", { children: [
              /* @__PURE__ */ s.jsx($, { htmlFor: "category", className: "text-white", children: "Category" }),
              /* @__PURE__ */ s.jsx(
                te,
                {
                  id: "category",
                  name: "category",
                  value: h.category,
                  onChange: P,
                  className: "bg-primary-secondary/20 border-secondary/30 text-black"
                }
              )
            ] }),
            /* @__PURE__ */ s.jsxs("div", { children: [
              /* @__PURE__ */ s.jsx($, { htmlFor: "cover_image", className: "text-white", children: "Cover Image URL" }),
              /* @__PURE__ */ s.jsx(
                te,
                {
                  id: "cover_image",
                  name: "cover_image",
                  value: h.cover_image,
                  onChange: P,
                  className: "bg-primary-secondary/20 border-secondary/30 text-black",
                  placeholder: "https://example.com/image.jpg",
                  required: !0
                }
              )
            ] }),
            /* @__PURE__ */ s.jsxs("div", { children: [
              /* @__PURE__ */ s.jsx($, { htmlFor: "excerpt", className: "text-white", children: "Excerpt" }),
              /* @__PURE__ */ s.jsx(
                "textarea",
                {
                  id: "excerpt",
                  name: "excerpt",
                  value: h.excerpt,
                  onChange: P,
                  className: "w-full rounded-md bg-primary-secondary/20 border-secondary/30 text-black h-20 px-3 py-2",
                  required: !0
                }
              )
            ] }),
            /* @__PURE__ */ s.jsxs("div", { children: [
              /* @__PURE__ */ s.jsx($, { htmlFor: "content", className: "text-white", children: "Content" }),
              /* @__PURE__ */ s.jsx(
                "textarea",
                {
                  id: "content",
                  name: "content",
                  value: h.content,
                  onChange: P,
                  className: "w-full rounded-md bg-primary-secondary/20 border-secondary/30 text-black h-72 px-3 py-2 font-mono text-sm",
                  required: !0
                }
              )
            ] }),
            /* @__PURE__ */ s.jsxs("div", { children: [
              /* @__PURE__ */ s.jsx($, { htmlFor: "status", className: "text-white", children: "Status" }),
              /* @__PURE__ */ s.jsxs("div", { className: "flex gap-4 mt-2", children: [
                /* @__PURE__ */ s.jsxs("label", { className: "flex items-center", children: [
                  /* @__PURE__ */ s.jsx(
                    "input",
                    {
                      type: "radio",
                      name: "status",
                      value: "draft",
                      checked: h.status === "draft",
                      onChange: P,
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
                      checked: h.status === "published",
                      onChange: P,
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
                className: "bg-secondary text-black hover:bg-secondary/90",
                disabled: k.isPending || C.isPending,
                children: k.isPending || C.isPending ? /* @__PURE__ */ s.jsxs("div", { className: "flex items-center", children: [
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
                ] }) : d ? "Update Article" : "Create Article"
              }
            ) })
          ] })
        }
      )
    ] }) : /* @__PURE__ */ s.jsxs(
      X,
      {
        onClick: () => l(!0),
        className: "bg-secondary text-black hover:bg-secondary/90",
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
      /* @__PURE__ */ s.jsx("h2", { className: "font-serif text-xl text-secondary mb-4", children: "All Articles" }),
      /* @__PURE__ */ s.jsx(
        At,
        {
          columns: W,
          data: (N == null ? void 0 : N.data) || [],
          onEdit: ee,
          onDelete: E,
          isLoading: R
        }
      )
    ] })
  ] }) });
}, no = ({ query: e }) => {
  const {
    getGalleryItems: t,
    createGalleryItem: r,
    deleteGalleryItem: n,
    updateGalleryItem: a
  } = e, [i, c] = Z(!1), [l, d] = Z(null), [u, h] = Z({
    title: "",
    image_url: "",
    category: "",
    is_featured: !1
  }), f = Ze(), { data: g, isLoading: N } = Se({
    queryKey: ["admin-gallery"],
    queryFn: t
  }), R = ce({
    mutationFn: r,
    onSuccess: () => {
      f.invalidateQueries({ queryKey: ["admin-gallery"] }), I({
        title: "Gallery item created successfully"
      }), K();
    },
    onError: (E) => {
      console.error("Failed to create gallery item:", E), I({
        title: "Error",
        description: "Failed to create gallery item. Please try again.",
        variant: "destructive"
      });
    }
  }), k = ce({
    mutationFn: ({ id: E, updates: x }) => a(E, x),
    onSuccess: () => {
      f.invalidateQueries({ queryKey: ["admin-gallery"] }), I({
        title: "Gallery item updated successfully"
      }), K();
    },
    onError: (E) => {
      console.error("Failed to update gallery item:", E), I({
        title: "Error",
        description: "Failed to update gallery item. Please try again.",
        variant: "destructive"
      });
    }
  }), C = ce({
    mutationFn: n,
    onSuccess: () => {
      f.invalidateQueries({ queryKey: ["admin-gallery"] }), I({
        title: "Gallery item deleted successfully"
      });
    },
    onError: (E) => {
      console.error("Failed to delete gallery item:", E), I({
        title: "Error",
        description: "Failed to delete gallery item. Please try again.",
        variant: "destructive"
      });
    }
  }), y = (E) => {
    const { name: x, value: S, type: W, checked: b } = E.target;
    h(W === "checkbox" ? {
      ...u,
      [x]: b
    } : {
      ...u,
      [x]: S
    });
  }, j = (E) => {
    E.preventDefault(), R.mutate(u);
  }, P = (E) => {
    E.preventDefault(), l && k.mutate({
      id: l.id,
      updates: u
    });
  }, O = (E) => {
    d(E), h({
      title: E.title,
      image_url: E.image_url,
      category: E.category,
      is_featured: E.is_featured || !1
    }), c(!0), window.scrollTo({ top: 0, behavior: "smooth" });
  }, H = (E) => {
    confirm("Are you sure you want to delete this gallery item?") && C.mutate(E.id);
  }, K = () => {
    d(null), h({
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
      render: (E) => /* @__PURE__ */ s.jsx("div", { className: "w-12 h-12 rounded overflow-hidden", children: /* @__PURE__ */ s.jsx(
        "img",
        {
          src: E,
          alt: "Preview",
          className: "w-full h-full object-cover",
          onError: (x) => {
            x.target.src = "https://via.placeholder.com/48?text=Error";
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
      render: (E) => /* @__PURE__ */ s.jsx("div", { className: "px-2 py-1 rounded-full bg-primary/20 text-xs inline-block", children: E })
    },
    {
      key: "is_featured",
      header: "Featured",
      render: (E) => /* @__PURE__ */ s.jsx("div", { className: E ? "text-secondary" : "text-primary/40", children: E ? /* @__PURE__ */ s.jsx("svg", { className: "w-5 h-5 fill-current", viewBox: "0 0 24 24", children: /* @__PURE__ */ s.jsx("path", { d: "M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" }) }) : "—" })
    }
  ];
  return /* @__PURE__ */ s.jsx(mt, { title: "Manage Gallery", children: /* @__PURE__ */ s.jsxs("div", { className: "space-y-8", children: [
    /* @__PURE__ */ s.jsx("div", { className: "mb-8", children: i ? /* @__PURE__ */ s.jsxs("div", { className: "bg-primary-light rounded-lg border border-secondary/20 p-6", children: [
      /* @__PURE__ */ s.jsxs("div", { className: "flex justify-between items-center mb-6", children: [
        /* @__PURE__ */ s.jsx("h2", { className: "font-serif text-xl text-secondary", children: l ? "Edit Gallery Item" : "Add New Gallery Item" }),
        /* @__PURE__ */ s.jsx(
          X,
          {
            variant: "ghost",
            size: "sm",
            onClick: K,
            className: "text-white/70 hover:text-white",
            children: "Cancel"
          }
        )
      ] }),
      /* @__PURE__ */ s.jsx(
        "form",
        {
          onSubmit: l ? P : j,
          children: /* @__PURE__ */ s.jsxs("div", { className: "grid grid-cols-1 gap-6 md:grid-cols-2", children: [
            /* @__PURE__ */ s.jsxs("div", { className: "space-y-4", children: [
              /* @__PURE__ */ s.jsxs("div", { children: [
                /* @__PURE__ */ s.jsx($, { htmlFor: "title", className: "text-white", children: "Title" }),
                /* @__PURE__ */ s.jsx(
                  te,
                  {
                    id: "title",
                    name: "title",
                    value: u.title,
                    onChange: y,
                    className: "bg-primary-secondary/20 border-secondary/30 text-black",
                    required: !0
                  }
                )
              ] }),
              /* @__PURE__ */ s.jsxs("div", { children: [
                /* @__PURE__ */ s.jsx($, { htmlFor: "image_url", className: "text-white", children: "Image URL" }),
                /* @__PURE__ */ s.jsx(
                  te,
                  {
                    id: "image_url",
                    name: "image_url",
                    value: u.image_url,
                    onChange: y,
                    className: "bg-primary-secondary/20 border-secondary/30 text-black",
                    placeholder: "https://example.com/image.jpg",
                    required: !0
                  }
                )
              ] }),
              /* @__PURE__ */ s.jsxs("div", { children: [
                /* @__PURE__ */ s.jsx($, { htmlFor: "category", className: "text-white", children: "Category" }),
                /* @__PURE__ */ s.jsx(
                  te,
                  {
                    id: "category",
                    name: "category",
                    value: u.category,
                    onChange: y,
                    className: "bg-primary-secondary/20 border-secondary/30 text-black",
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
                    checked: u.is_featured,
                    onChange: y,
                    className: "w-4 h-4 mr-2"
                  }
                ),
                /* @__PURE__ */ s.jsx($, { htmlFor: "is_featured", className: "text-white", children: "Featured item" })
              ] }),
              /* @__PURE__ */ s.jsx("div", { className: "flex gap-4 pt-4", children: /* @__PURE__ */ s.jsx(
                X,
                {
                  type: "submit",
                  className: "bg-secondary text-black hover:bg-secondary/90",
                  disabled: R.isPending || k.isPending,
                  children: R.isPending || k.isPending ? /* @__PURE__ */ s.jsxs("div", { className: "flex items-center", children: [
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
                  ] }) : l ? "Update Item" : "Create Item"
                }
              ) })
            ] }),
            /* @__PURE__ */ s.jsx("div", { className: "flex flex-col items-center justify-center bg-primary-light/5 rounded-lg p-4", children: u.image_url ? /* @__PURE__ */ s.jsxs("div", { className: "max-w-full", children: [
              /* @__PURE__ */ s.jsx(
                "img",
                {
                  src: u.image_url,
                  alt: "Image Preview",
                  className: "max-h-64 rounded-lg object-contain mx-auto",
                  onError: (E) => {
                    E.target.src = "https://via.placeholder.com/400x300?text=Image+Error";
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
        className: "bg-secondary text-black hover:bg-secondary/90",
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
      /* @__PURE__ */ s.jsx("h2", { className: "font-serif text-xl text-secondary mb-4", children: "All Gallery Items" }),
      /* @__PURE__ */ s.jsx(
        At,
        {
          columns: ee,
          data: (g == null ? void 0 : g.data) || [],
          onEdit: O,
          onDelete: H,
          isLoading: N
        }
      )
    ] })
  ] }) });
}, ao = ({ query: e }) => {
  var E;
  const { getAllProducts: t, createProduct: r, deleteProduct: n, updateProduct: a } = e, [i, c] = Z(!1), [l, d] = Z(null), [u, h] = Z({
    name: "",
    description: "",
    price: 0,
    images: [""],
    is_active: !0
  }), f = Ze(), { data: g, isLoading: N } = Se({
    queryKey: ["admin-products"],
    queryFn: t
  }), R = ce({
    mutationFn: r,
    onSuccess: () => {
      f.invalidateQueries({ queryKey: ["admin-products"] }), I({
        title: "Product created successfully"
      }), K();
    },
    onError: (x) => {
      console.error("Failed to create product:", x), I({
        title: "Error",
        description: "Failed to create product. Please try again.",
        variant: "destructive"
      });
    }
  }), k = ce({
    mutationFn: ({ id: x, updates: S }) => a(x, S),
    onSuccess: () => {
      f.invalidateQueries({ queryKey: ["admin-products"] }), I({
        title: "Product updated successfully"
      }), K();
    },
    onError: (x) => {
      console.error("Failed to update product:", x), I({
        title: "Error",
        description: "Failed to update product. Please try again.",
        variant: "destructive"
      });
    }
  }), C = ce({
    mutationFn: n,
    onSuccess: () => {
      f.invalidateQueries({ queryKey: ["admin-products"] }), I({
        title: "Product deleted successfully"
      });
    },
    onError: (x) => {
      console.error("Failed to delete product:", x), I({
        title: "Error",
        description: "Failed to delete product. Please try again.",
        variant: "destructive"
      });
    }
  }), y = (x) => {
    const { name: S, value: W, type: b } = x.target;
    h(S === "price" ? {
      ...u,
      [S]: Number(W)
    } : S === "is_active" ? {
      ...u,
      [S]: x.target.checked
    } : S === "images[0]" ? {
      ...u,
      images: [W]
    } : {
      ...u,
      [S]: W
    });
  }, j = (x) => {
    x.preventDefault(), R.mutate(u);
  }, P = (x) => {
    x.preventDefault(), l && k.mutate({
      id: l.id,
      updates: u
    });
  }, O = (x) => {
    d(x), h({
      name: x.name,
      description: x.description || "",
      price: x.price,
      images: x.images || [""],
      is_active: x.is_active !== null ? x.is_active : !0
    }), c(!0), window.scrollTo({ top: 0, behavior: "smooth" });
  }, H = (x) => {
    confirm("Are you sure you want to delete this product?") && C.mutate(x.id);
  }, K = () => {
    d(null), h({
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
      render: (x) => /* @__PURE__ */ s.jsx("div", { className: "max-w-xs truncate ", children: x || "—" })
    },
    {
      key: "price",
      header: "Price",
      render: (x) => /* @__PURE__ */ s.jsx("div", { children: new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
        minimumFractionDigits: 0
      }).format(x) })
    },
    {
      key: "is_active",
      header: "Status",
      render: (x) => /* @__PURE__ */ s.jsxs(
        "div",
        {
          className: `px-2 py-1 rounded-full text-xs inline-flex items-center ${x ? "bg-primary/20 text-primary" : "bg-red-500/20 text-red-500"}`,
          children: [
            /* @__PURE__ */ s.jsx(
              "span",
              {
                className: `w-2 h-2 rounded-full mr-1 ${x ? "bg-primary" : "bg-red-500"}`
              }
            ),
            x ? "Active" : "Inactive"
          ]
        }
      )
    }
  ];
  return /* @__PURE__ */ s.jsx(mt, { title: "Manage Products", children: /* @__PURE__ */ s.jsxs("div", { className: "space-y-8", children: [
    /* @__PURE__ */ s.jsx("div", { className: "mb-8", children: i ? /* @__PURE__ */ s.jsxs("div", { className: "bg-primary-light rounded-lg border border-secondary/20 p-6", children: [
      /* @__PURE__ */ s.jsxs("div", { className: "flex justify-between items-center mb-6", children: [
        /* @__PURE__ */ s.jsx("h2", { className: "font-serif text-xl text-secondary", children: l ? "Edit Product" : "Add New Product" }),
        /* @__PURE__ */ s.jsx(
          X,
          {
            variant: "ghost",
            size: "sm",
            onClick: K,
            className: "text-white/70 hover:text-white",
            children: "Cancel"
          }
        )
      ] }),
      /* @__PURE__ */ s.jsx(
        "form",
        {
          onSubmit: l ? P : j,
          children: /* @__PURE__ */ s.jsxs("div", { className: "space-y-4", children: [
            /* @__PURE__ */ s.jsxs("div", { children: [
              /* @__PURE__ */ s.jsx($, { htmlFor: "name", className: "text-white", children: "Product Name" }),
              /* @__PURE__ */ s.jsx(
                te,
                {
                  id: "name",
                  name: "name",
                  value: u.name,
                  onChange: y,
                  className: "bg-primary-secondary/20 border-secondary/30 text-black",
                  required: !0
                }
              )
            ] }),
            /* @__PURE__ */ s.jsxs("div", { children: [
              /* @__PURE__ */ s.jsx($, { htmlFor: "description", className: "text-white", children: "Description" }),
              /* @__PURE__ */ s.jsx(
                "textarea",
                {
                  id: "description",
                  name: "description",
                  value: u.description,
                  onChange: y,
                  className: "w-full rounded-md bg-primary-secondary/20 border-secondary/30 text-black h-24 px-3 py-2"
                }
              )
            ] }),
            /* @__PURE__ */ s.jsxs("div", { children: [
              /* @__PURE__ */ s.jsx($, { htmlFor: "price", className: "text-white", children: "Price (IDR)" }),
              /* @__PURE__ */ s.jsx(
                te,
                {
                  id: "price",
                  name: "price",
                  type: "number",
                  min: "0",
                  value: u.price,
                  onChange: y,
                  className: "bg-primary-secondary/20 border-secondary/30 text-black",
                  required: !0
                }
              )
            ] }),
            /* @__PURE__ */ s.jsxs("div", { children: [
              /* @__PURE__ */ s.jsx($, { htmlFor: "image", className: "text-white", children: "Image URL" }),
              /* @__PURE__ */ s.jsx(
                te,
                {
                  id: "image",
                  name: "images[0]",
                  value: ((E = u.images) == null ? void 0 : E[0]) || "",
                  onChange: y,
                  className: "bg-primary-secondary/20 border-secondary/30 text-black",
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
                  checked: u.is_active,
                  onChange: (x) => h({ ...u, is_active: x.target.checked }),
                  className: "w-4 h-4 mr-2"
                }
              ),
              /* @__PURE__ */ s.jsx($, { htmlFor: "is_active", className: "text-white", children: "Active product" })
            ] }),
            /* @__PURE__ */ s.jsx("div", { className: "flex gap-4 pt-2", children: /* @__PURE__ */ s.jsx(
              X,
              {
                type: "submit",
                className: "bg-secondary text-black hover:bg-secondary/90",
                disabled: R.isPending || k.isPending,
                children: R.isPending || k.isPending ? /* @__PURE__ */ s.jsxs("div", { className: "flex items-center", children: [
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
                ] }) : l ? "Update Product" : "Create Product"
              }
            ) })
          ] })
        }
      )
    ] }) : /* @__PURE__ */ s.jsxs(
      X,
      {
        onClick: () => c(!0),
        className: "bg-secondary text-black hover:bg-secondary/90",
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
      /* @__PURE__ */ s.jsx("h2", { className: "font-serif text-xl text-secondary mb-4", children: "All Products" }),
      /* @__PURE__ */ s.jsx(
        At,
        {
          columns: ee,
          data: (g == null ? void 0 : g.data) || [],
          onEdit: O,
          onDelete: H,
          isLoading: N
        }
      )
    ] })
  ] }) });
};
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Gi = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), Xs = (...e) => e.filter((t, r, n) => !!t && t.trim() !== "" && n.indexOf(t) === r).join(" ").trim();
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Ki = {
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
const Qi = js(
  ({
    color: e = "currentColor",
    size: t = 24,
    strokeWidth: r = 2,
    absoluteStrokeWidth: n,
    className: a = "",
    children: i,
    iconNode: c,
    ...l
  }, d) => Jt(
    "svg",
    {
      ref: d,
      ...Ki,
      width: t,
      height: t,
      stroke: e,
      strokeWidth: n ? Number(r) * 24 / Number(t) : r,
      className: Xs("lucide", a),
      ...l
    },
    [
      ...c.map(([u, h]) => Jt(u, h)),
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
const Hi = (e, t) => {
  const r = js(
    ({ className: n, ...a }, i) => Jt(Qi, {
      ref: i,
      iconNode: t,
      className: Xs(`lucide-${Gi(e)}`, n),
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
const gs = Hi("Star", [
  [
    "path",
    {
      d: "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",
      key: "r04s7s"
    }
  ]
]), io = ({ query: e }) => {
  const {
    getTestimonials: t,
    createTestimonial: r,
    updateTestimonial: n,
    deleteTestimonial: a
  } = e, [i, c] = Z(!1), [l, d] = Z(null), [u, h] = Z({
    parent_name: "",
    testimonial: "",
    rating: 5,
    avatar_url: "",
    is_featured: !1,
    child_name: null,
    child_age: null
  }), f = Ze(), { data: g, isLoading: N } = Se({
    queryKey: ["admin-testimonials"],
    queryFn: t
  }), R = ce({
    mutationFn: r,
    onSuccess: () => {
      f.invalidateQueries({ queryKey: ["admin-testimonials"] }), I({
        title: "Testimonial created successfully"
      }), ee();
    },
    onError: (x) => {
      console.error("Failed to create testimonial:", x), I({
        title: "Error",
        description: "Failed to create testimonial. Please try again.",
        variant: "destructive"
      });
    }
  }), k = ce({
    mutationFn: ({ id: x, updates: S }) => n(x, S),
    onSuccess: () => {
      f.invalidateQueries({ queryKey: ["admin-testimonials"] }), I({
        title: "Testimonial updated successfully"
      }), ee();
    },
    onError: (x) => {
      console.error("Failed to update testimonial:", x), I({
        title: "Error",
        description: "Failed to update testimonial. Please try again.",
        variant: "destructive"
      });
    }
  }), C = ce({
    mutationFn: a,
    onSuccess: () => {
      f.invalidateQueries({ queryKey: ["admin-testimonials"] }), I({
        title: "Testimonial deleted successfully"
      });
    },
    onError: (x) => {
      console.error("Failed to delete testimonial:", x), I({
        title: "Error",
        description: "Failed to delete testimonial. Please try again.",
        variant: "destructive"
      });
    }
  }), y = (x) => {
    const { name: S, value: W, type: b } = x.target;
    h(b === "checkbox" ? {
      ...u,
      [S]: x.target.checked
    } : b === "number" ? {
      ...u,
      [S]: W === "" ? null : Number(W)
    } : {
      ...u,
      [S]: W
    });
  }, j = (x) => {
    h({
      ...u,
      rating: x
    });
  }, P = (x) => {
    x.preventDefault(), R.mutate(u);
  }, O = (x) => {
    x.preventDefault(), l && k.mutate({
      id: l.id,
      updates: u
    });
  }, H = (x) => {
    d(x), h({
      parent_name: x.parent_name,
      testimonial: x.testimonial,
      rating: x.rating,
      avatar_url: x.avatar_url || "",
      is_featured: x.is_featured || !1,
      child_name: x.child_name,
      child_age: x.child_age
    }), c(!0), window.scrollTo({ top: 0, behavior: "smooth" });
  }, K = (x) => {
    confirm("Are you sure you want to delete this testimonial?") && C.mutate(x.id);
  }, ee = () => {
    d(null), h({
      parent_name: "",
      testimonial: "",
      rating: 5,
      avatar_url: "",
      is_featured: !1,
      child_name: null,
      child_age: null
    }), c(!1);
  }, E = [
    {
      key: "parent_name",
      header: "Name",
      render: (x, S) => /* @__PURE__ */ s.jsxs("div", { children: [
        /* @__PURE__ */ s.jsx("div", { className: "font-medium", children: x }),
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
      render: (x) => /* @__PURE__ */ s.jsx("div", { className: "max-w-xs truncate", children: x })
    },
    {
      key: "rating",
      header: "Rating",
      render: (x) => /* @__PURE__ */ s.jsx("div", { className: "flex", children: [...Array(5)].map((S, W) => /* @__PURE__ */ s.jsx(
        gs,
        {
          className: `h-4 w-4 ${W < x ? "text-secondary fill-secondary" : "text-gray-300"}`
        },
        W
      )) })
    },
    {
      key: "is_featured",
      header: "Featured",
      render: (x) => /* @__PURE__ */ s.jsx("div", { className: x ? "text-secondary" : "text-white/40", children: x ? /* @__PURE__ */ s.jsx("svg", { className: "w-5 h-5 fill-current", viewBox: "0 0 24 24", children: /* @__PURE__ */ s.jsx("path", { d: "M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" }) }) : "—" })
    }
  ];
  return /* @__PURE__ */ s.jsx(mt, { title: "Manage Testimonials", children: /* @__PURE__ */ s.jsxs("div", { className: "space-y-8", children: [
    /* @__PURE__ */ s.jsx("div", { className: "mb-8", children: i ? /* @__PURE__ */ s.jsxs("div", { className: "bg-primary-light rounded-lg border border-secondary/20 p-6", children: [
      /* @__PURE__ */ s.jsxs("div", { className: "flex justify-between items-center mb-6", children: [
        /* @__PURE__ */ s.jsx("h2", { className: "font-serif text-xl text-secondary", children: l ? "Edit Testimonial" : "Add New Testimonial" }),
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
          onSubmit: l ? O : P,
          children: /* @__PURE__ */ s.jsxs("div", { className: "space-y-4", children: [
            /* @__PURE__ */ s.jsxs("div", { children: [
              /* @__PURE__ */ s.jsx($, { htmlFor: "parent_name", className: "text-white", children: "Name" }),
              /* @__PURE__ */ s.jsx(
                te,
                {
                  id: "parent_name",
                  name: "parent_name",
                  value: u.parent_name,
                  onChange: y,
                  className: "bg-primary-secondary/20 border-secondary/30 text-black",
                  required: !0
                }
              )
            ] }),
            /* @__PURE__ */ s.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
              /* @__PURE__ */ s.jsxs("div", { children: [
                /* @__PURE__ */ s.jsx($, { htmlFor: "child_name", className: "text-white", children: "Child's Name (Optional)" }),
                /* @__PURE__ */ s.jsx(
                  te,
                  {
                    id: "child_name",
                    name: "child_name",
                    value: u.child_name || "",
                    onChange: y,
                    className: "bg-primary-secondary/20 border-secondary/30 text-black"
                  }
                )
              ] }),
              /* @__PURE__ */ s.jsxs("div", { children: [
                /* @__PURE__ */ s.jsx($, { htmlFor: "child_age", className: "text-white", children: "Child's Age (Optional)" }),
                /* @__PURE__ */ s.jsx(
                  te,
                  {
                    id: "child_age",
                    name: "child_age",
                    type: "number",
                    value: u.child_age !== null ? u.child_age : "",
                    onChange: y,
                    className: "bg-primary-secondary/20 border-secondary/30 text-black",
                    min: "0",
                    max: "100"
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ s.jsxs("div", { children: [
              /* @__PURE__ */ s.jsx($, { htmlFor: "testimonial", className: "text-white", children: "Testimonial" }),
              /* @__PURE__ */ s.jsx(
                "textarea",
                {
                  id: "testimonial",
                  name: "testimonial",
                  value: u.testimonial,
                  onChange: y,
                  className: "w-full rounded-md bg-primary-secondary/20 border-secondary/30 text-black h-24 px-3 py-2",
                  required: !0
                }
              )
            ] }),
            /* @__PURE__ */ s.jsxs("div", { children: [
              /* @__PURE__ */ s.jsx($, { htmlFor: "rating", className: "text-white", children: "Rating" }),
              /* @__PURE__ */ s.jsx("div", { className: "flex mt-2", children: [...Array(5)].map((x, S) => /* @__PURE__ */ s.jsx(
                gs,
                {
                  className: `h-6 w-6 cursor-pointer ${S < u.rating ? "text-secondary fill-secondary" : "text-white-500"}`,
                  onClick: () => j(S + 1)
                },
                S
              )) })
            ] }),
            /* @__PURE__ */ s.jsxs("div", { children: [
              /* @__PURE__ */ s.jsx($, { htmlFor: "avatar_url", className: "text-white", children: "Avatar URL (Optional)" }),
              /* @__PURE__ */ s.jsx(
                te,
                {
                  id: "avatar_url",
                  name: "avatar_url",
                  value: u.avatar_url || "",
                  onChange: y,
                  className: "bg-primary-secondary/20 border-secondary/30 text-black",
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
                  checked: u.is_featured || !1,
                  onChange: y,
                  className: "w-4 h-4 mr-2"
                }
              ),
              /* @__PURE__ */ s.jsx($, { htmlFor: "is_featured", className: "text-white", children: "Featured testimonial" })
            ] }),
            /* @__PURE__ */ s.jsx("div", { className: "flex gap-4 pt-2", children: /* @__PURE__ */ s.jsx(
              X,
              {
                type: "submit",
                className: "bg-secondary text-black hover:bg-secondary/90",
                disabled: R.isPending || k.isPending,
                children: R.isPending || k.isPending ? /* @__PURE__ */ s.jsxs("div", { className: "flex items-center", children: [
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
                ] }) : l ? "Update Testimonial" : "Create Testimonial"
              }
            ) })
          ] })
        }
      )
    ] }) : /* @__PURE__ */ s.jsxs(
      X,
      {
        onClick: () => c(!0),
        className: "bg-secondary text-black hover:bg-secondary/90",
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
      /* @__PURE__ */ s.jsx("h2", { className: "font-serif text-xl text-secondary mb-4", children: "All Testimonials" }),
      /* @__PURE__ */ s.jsx(
        At,
        {
          columns: E,
          data: (g == null ? void 0 : g.data) || [],
          onEdit: H,
          onDelete: K,
          isLoading: N
        }
      )
    ] })
  ] }) });
};
export {
  so as AdminArticles,
  ro as AdminDashboard,
  no as AdminGallery,
  ao as AdminProducts,
  Zi as AdminProvider,
  io as AdminTestimonials,
  to as LoginPage,
  eo as ProtectedRoute
};
