import {
    j as e,
    m as t
} from "./animation-vendor.js";
import {
    r as n,
    L as r,
    R as a,
    B as l,
    a as o,
    b as i
} from "./router-vendor.js";
import {
    r as s,
    a as u
} from "./react-vendor.js";
import {
    S as c,
    P as d,
    W as f,
    a as p,
    A as h,
    B as m,
    C as g,
    F as b,
    b as y,
    c as v
} from "./three-vendor.js";
! function() {
    const e = document.createElement("link").relList;
    if (!(e && e.supports && e.supports("modulepreload"))) {
        for (const e of document.querySelectorAll('link[rel="modulepreload"]')) t(e);
        new MutationObserver((e => {
            for (const n of e)
                if ("childList" === n.type)
                    for (const e of n.addedNodes) "LINK" === e.tagName && "modulepreload" === e.rel && t(e)
        })).observe(document, {
            childList: !0,
            subtree: !0
        })
    }

    function t(e) {
        if (e.ep) return;
        e.ep = !0;
        const t = function(e) {
            const t = {};
            return e.integrity && (t.integrity = e.integrity), e.referrerPolicy && (t.referrerPolicy = e.referrerPolicy), "use-credentials" === e.crossOrigin ? t.credentials = "include" : "anonymous" === e.crossOrigin ? t.credentials = "omit" : t.credentials = "same-origin", t
        }(e);
        fetch(e.href, t)
    }
}();
var x, w, k, S, N = {
        exports: {}
    },
    E = {},
    C = {
        exports: {}
    },
    j = {};

function z() {
    return w || (w = 1, C.exports = (x || (x = 1, function(e) {
        function t(e, t) {
            var n = e.length;
            e.push(t);
            e: for (; 0 < n;) {
                var r = n - 1 >>> 1,
                    l = e[r];
                if (!(0 < a(l, t))) break e;
                e[r] = t, e[n] = l, n = r
            }
        }

        function n(e) {
            return 0 === e.length ? null : e[0]
        }

        function r(e) {
            if (0 === e.length) return null;
            var t = e[0],
                n = e.pop();
            if (n !== t) {
                e[0] = n;
                e: for (var r = 0, l = e.length, o = l >>> 1; r < o;) {
                    var i = 2 * (r + 1) - 1,
                        s = e[i],
                        u = i + 1,
                        c = e[u];
                    if (0 > a(s, n)) u < l && 0 > a(c, s) ? (e[r] = c, e[u] = n, r = u) : (e[r] = s, e[i] = n, r = i);
                    else {
                        if (!(u < l && 0 > a(c, n))) break e;
                        e[r] = c, e[u] = n, r = u
                    }
                }
            }
            return t
        }

        function a(e, t) {
            var n = e.sortIndex - t.sortIndex;
            return 0 !== n ? n : e.id - t.id
        }
        if (e.unstable_now = void 0, "object" == typeof performance && "function" == typeof performance.now) {
            var l = performance;
            e.unstable_now = function() {
                return l.now()
            }
        } else {
            var o = Date,
                i = o.now();
            e.unstable_now = function() {
                return o.now() - i
            }
        }
        var s = [],
            u = [],
            c = 1,
            d = null,
            f = 3,
            p = !1,
            h = !1,
            m = !1,
            g = !1,
            b = "function" == typeof setTimeout ? setTimeout : null,
            y = "function" == typeof clearTimeout ? clearTimeout : null,
            v = "undefined" != typeof setImmediate ? setImmediate : null;

        function x(e) {
            for (var a = n(u); null !== a;) {
                if (null === a.callback) r(u);
                else {
                    if (!(a.startTime <= e)) break;
                    r(u), a.sortIndex = a.expirationTime, t(s, a)
                }
                a = n(u)
            }
        }

        function w(e) {
            if (m = !1, x(e), !h)
                if (null !== n(s)) h = !0, S || (S = !0, k());
                else {
                    var t = n(u);
                    null !== t && T(w, t.startTime - e)
                }
        }
        var k, S = !1,
            N = -1,
            E = 5,
            C = -1;

        function j() {
            return !(!g && e.unstable_now() - C < E)
        }

        function z() {
            if (g = !1, S) {
                var t = e.unstable_now();
                C = t;
                var a = !0;
                try {
                    e: {
                        h = !1,
                        m && (m = !1, y(N), N = -1),
                        p = !0;
                        var l = f;
                        try {
                            t: {
                                for (x(t), d = n(s); null !== d && !(d.expirationTime > t && j());) {
                                    var o = d.callback;
                                    if ("function" == typeof o) {
                                        d.callback = null, f = d.priorityLevel;
                                        var i = o(d.expirationTime <= t);
                                        if (t = e.unstable_now(), "function" == typeof i) {
                                            d.callback = i, x(t), a = !0;
                                            break t
                                        }
                                        d === n(s) && r(s), x(t)
                                    } else r(s);
                                    d = n(s)
                                }
                                if (null !== d) a = !0;
                                else {
                                    var c = n(u);
                                    null !== c && T(w, c.startTime - t), a = !1
                                }
                            }
                            break e
                        }
                        finally {
                            d = null, f = l, p = !1
                        }
                        a = void 0
                    }
                }
                finally {
                    a ? k() : S = !1
                }
            }
        }
        if ("function" == typeof v) k = function() {
            v(z)
        };
        else if ("undefined" != typeof MessageChannel) {
            var P = new MessageChannel,
                _ = P.port2;
            P.port1.onmessage = z, k = function() {
                _.postMessage(null)
            }
        } else k = function() {
            b(z, 0)
        };

        function T(t, n) {
            N = b((function() {
                t(e.unstable_now())
            }), n)
        }
        e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(e) {
            e.callback = null
        }, e.unstable_forceFrameRate = function(e) {
            0 > e || 125 < e ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : E = 0 < e ? Math.floor(1e3 / e) : 5
        }, e.unstable_getCurrentPriorityLevel = function() {
            return f
        }, e.unstable_next = function(e) {
            switch (f) {
                case 1:
                case 2:
                case 3:
                    var t = 3;
                    break;
                default:
                    t = f
            }
            var n = f;
            f = t;
            try {
                return e()
            } finally {
                f = n
            }
        }, e.unstable_requestPaint = function() {
            g = !0
        }, e.unstable_runWithPriority = function(e, t) {
            switch (e) {
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                    break;
                default:
                    e = 3
            }
            var n = f;
            f = e;
            try {
                return t()
            } finally {
                f = n
            }
        }, e.unstable_scheduleCallback = function(r, a, l) {
            var o = e.unstable_now();
            switch (l = "object" == typeof l && null !== l && "number" == typeof(l = l.delay) && 0 < l ? o + l : o, r) {
                case 1:
                    var i = -1;
                    break;
                case 2:
                    i = 250;
                    break;
                case 5:
                    i = 1073741823;
                    break;
                case 4:
                    i = 1e4;
                    break;
                default:
                    i = 5e3
            }
            return r = {
                id: c++,
                callback: a,
                priorityLevel: r,
                startTime: l,
                expirationTime: i = l + i,
                sortIndex: -1
            }, l > o ? (r.sortIndex = l, t(u, r), null === n(s) && r === n(u) && (m ? (y(N), N = -1) : m = !0, T(w, l - o))) : (r.sortIndex = i, t(s, r), h || p || (h = !0, S || (S = !0, k()))), r
        }, e.unstable_shouldYield = j, e.unstable_wrapCallback = function(e) {
            var t = f;
            return function() {
                var n = f;
                f = t;
                try {
                    return e.apply(this, arguments)
                } finally {
                    f = n
                }
            }
        }
    }(j)), j)), C.exports
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
function P() {
    if (k) return E;
    k = 1;
    var e = z(),
        t = s(),
        n = u();

    function r(e) {
        var t = "https://react.dev/errors/" + e;
        if (1 < arguments.length) {
            t += "?args[]=" + encodeURIComponent(arguments[1]);
            for (var n = 2; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n])
        }
        return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    }

    function a(e) {
        return !(!e || 1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType)
    }

    function l(e) {
        var t = e,
            n = e;
        if (e.alternate)
            for (; t.return;) t = t.return;
        else {
            e = t;
            do {
                !!(4098 & (t = e).flags) && (n = t.return), e = t.return
            } while (e)
        }
        return 3 === t.tag ? n : null
    }

    function o(e) {
        if (13 === e.tag) {
            var t = e.memoizedState;
            if (null === t && (null !== (e = e.alternate) && (t = e.memoizedState)), null !== t) return t.dehydrated
        }
        return null
    }

    function i(e) {
        if (l(e) !== e) throw Error(r(188))
    }

    function c(e) {
        var t = e.tag;
        if (5 === t || 26 === t || 27 === t || 6 === t) return e;
        for (e = e.child; null !== e;) {
            if (null !== (t = c(e))) return t;
            e = e.sibling
        }
        return null
    }
    var d = Object.assign,
        f = Symbol.for("react.element"),
        p = Symbol.for("react.transitional.element"),
        h = Symbol.for("react.portal"),
        m = Symbol.for("react.fragment"),
        g = Symbol.for("react.strict_mode"),
        b = Symbol.for("react.profiler"),
        y = Symbol.for("react.provider"),
        v = Symbol.for("react.consumer"),
        x = Symbol.for("react.context"),
        w = Symbol.for("react.forward_ref"),
        S = Symbol.for("react.suspense"),
        N = Symbol.for("react.suspense_list"),
        C = Symbol.for("react.memo"),
        j = Symbol.for("react.lazy"),
        P = Symbol.for("react.activity"),
        _ = Symbol.for("react.memo_cache_sentinel"),
        T = Symbol.iterator;

    function L(e) {
        return null === e || "object" != typeof e ? null : "function" == typeof(e = T && e[T] || e["@@iterator"]) ? e : null
    }
    var M = Symbol.for("react.client.reference");

    function A(e) {
        if (null == e) return null;
        if ("function" == typeof e) return e.$$typeof === M ? null : e.displayName || e.name || null;
        if ("string" == typeof e) return e;
        switch (e) {
            case m:
                return "Fragment";
            case b:
                return "Profiler";
            case g:
                return "StrictMode";
            case S:
                return "Suspense";
            case N:
                return "SuspenseList";
            case P:
                return "Activity"
        }
        if ("object" == typeof e) switch (e.$$typeof) {
            case h:
                return "Portal";
            case x:
                return (e.displayName || "Context") + ".Provider";
            case v:
                return (e._context.displayName || "Context") + ".Consumer";
            case w:
                var t = e.render;
                return (e = e.displayName) || (e = "" !== (e = t.displayName || t.name || "") ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
            case C:
                return null !== (t = e.displayName || null) ? t : A(e.type) || "Memo";
            case j:
                t = e._payload, e = e._init;
                try {
                    return A(e(t))
                } catch (n) {}
        }
        return null
    }
    var O = Array.isArray,
        D = t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
        F = n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
        R = {
            pending: !1,
            data: null,
            method: null,
            action: null
        },
        H = [],
        I = -1;

    function U(e) {
        return {
            current: e
        }
    }

    function W(e) {
        0 > I || (e.current = H[I], H[I] = null, I--)
    }

    function $(e, t) {
        I++, H[I] = e.current, e.current = t
    }
    var B = U(null),
        q = U(null),
        V = U(null),
        K = U(null);

    function Q(e, t) {
        switch ($(V, t), $(q, e), $(B, null), t.nodeType) {
            case 9:
            case 11:
                e = (e = t.documentElement) && (e = e.namespaceURI) ? od(e) : 0;
                break;
            default:
                if (e = t.tagName, t = t.namespaceURI) e = id(t = od(t), e);
                else switch (e) {
                    case "svg":
                        e = 1;
                        break;
                    case "math":
                        e = 2;
                        break;
                    default:
                        e = 0
                }
        }
        W(B), $(B, e)
    }

    function Y() {
        W(B), W(q), W(V)
    }

    function G(e) {
        null !== e.memoizedState && $(K, e);
        var t = B.current,
            n = id(t, e.type);
        t !== n && ($(q, e), $(B, n))
    }

    function X(e) {
        q.current === e && (W(B), W(q)), K.current === e && (W(K), Gd._currentValue = R)
    }
    var J = Object.prototype.hasOwnProperty,
        Z = e.unstable_scheduleCallback,
        ee = e.unstable_cancelCallback,
        te = e.unstable_shouldYield,
        ne = e.unstable_requestPaint,
        re = e.unstable_now,
        ae = e.unstable_getCurrentPriorityLevel,
        le = e.unstable_ImmediatePriority,
        oe = e.unstable_UserBlockingPriority,
        ie = e.unstable_NormalPriority,
        se = e.unstable_LowPriority,
        ue = e.unstable_IdlePriority,
        ce = e.log,
        de = e.unstable_setDisableYieldValue,
        fe = null,
        pe = null;

    function he(e) {
        if ("function" == typeof ce && de(e), pe && "function" == typeof pe.setStrictMode) try {
            pe.setStrictMode(fe, e)
        } catch (t) {}
    }
    var me = Math.clz32 ? Math.clz32 : function(e) {
            return 0 === (e >>>= 0) ? 32 : 31 - (ge(e) / be | 0) | 0
        },
        ge = Math.log,
        be = Math.LN2;
    var ye = 256,
        ve = 4194304;

    function xe(e) {
        var t = 42 & e;
        if (0 !== t) return t;
        switch (e & -e) {
            case 1:
                return 1;
            case 2:
                return 2;
            case 4:
                return 4;
            case 8:
                return 8;
            case 16:
                return 16;
            case 32:
                return 32;
            case 64:
                return 64;
            case 128:
                return 128;
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
                return 4194048 & e;
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
                return 62914560 & e;
            case 67108864:
                return 67108864;
            case 134217728:
                return 134217728;
            case 268435456:
                return 268435456;
            case 536870912:
                return 536870912;
            case 1073741824:
                return 0;
            default:
                return e
        }
    }

    function we(e, t, n) {
        var r = e.pendingLanes;
        if (0 === r) return 0;
        var a = 0,
            l = e.suspendedLanes,
            o = e.pingedLanes;
        e = e.warmLanes;
        var i = 134217727 & r;
        return 0 !== i ? 0 !== (r = i & ~l) ? a = xe(r) : 0 !== (o &= i) ? a = xe(o) : n || 0 !== (n = i & ~e) && (a = xe(n)) : 0 !== (i = r & ~l) ? a = xe(i) : 0 !== o ? a = xe(o) : n || 0 !== (n = r & ~e) && (a = xe(n)), 0 === a ? 0 : 0 !== t && t !== a && 0 === (t & l) && ((l = a & -a) >= (n = t & -t) || 32 === l && 4194048 & n) ? t : a
    }

    function ke(e, t) {
        return 0 === (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t)
    }

    function Se(e, t) {
        switch (e) {
            case 1:
            case 2:
            case 4:
            case 8:
            case 64:
                return t + 250;
            case 16:
            case 32:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
                return t + 5e3;
            default:
                return -1
        }
    }

    function Ne() {
        var e = ye;
        return !(4194048 & (ye <<= 1)) && (ye = 256), e
    }

    function Ee() {
        var e = ve;
        return !(62914560 & (ve <<= 1)) && (ve = 4194304), e
    }

    function Ce(e) {
        for (var t = [], n = 0; 31 > n; n++) t.push(e);
        return t
    }

    function je(e, t) {
        e.pendingLanes |= t, 268435456 !== t && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0)
    }

    function ze(e, t, n) {
        e.pendingLanes |= t, e.suspendedLanes &= ~t;
        var r = 31 - me(t);
        e.entangledLanes |= t, e.entanglements[r] = 1073741824 | e.entanglements[r] | 4194090 & n
    }

    function Pe(e, t) {
        var n = e.entangledLanes |= t;
        for (e = e.entanglements; n;) {
            var r = 31 - me(n),
                a = 1 << r;
            a & t | e[r] & t && (e[r] |= t), n &= ~a
        }
    }

    function _e(e) {
        switch (e) {
            case 2:
                e = 1;
                break;
            case 8:
                e = 4;
                break;
            case 32:
                e = 16;
                break;
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
                e = 128;
                break;
            case 268435456:
                e = 134217728;
                break;
            default:
                e = 0
        }
        return e
    }

    function Te(e) {
        return 2 < (e &= -e) ? 8 < e ? 134217727 & e ? 32 : 268435456 : 8 : 2
    }

    function Le() {
        var e = F.p;
        return 0 !== e ? e : void 0 === (e = window.event) ? 32 : ff(e.type)
    }
    var Me = Math.random().toString(36).slice(2),
        Ae = "__reactFiber$" + Me,
        Oe = "__reactProps$" + Me,
        De = "__reactContainer$" + Me,
        Fe = "__reactEvents$" + Me,
        Re = "__reactListeners$" + Me,
        He = "__reactHandles$" + Me,
        Ie = "__reactResources$" + Me,
        Ue = "__reactMarker$" + Me;

    function We(e) {
        delete e[Ae], delete e[Oe], delete e[Fe], delete e[Re], delete e[He]
    }

    function $e(e) {
        var t = e[Ae];
        if (t) return t;
        for (var n = e.parentNode; n;) {
            if (t = n[De] || n[Ae]) {
                if (n = t.alternate, null !== t.child || null !== n && null !== n.child)
                    for (e = wd(e); null !== e;) {
                        if (n = e[Ae]) return n;
                        e = wd(e)
                    }
                return t
            }
            n = (e = n).parentNode
        }
        return null
    }

    function Be(e) {
        if (e = e[Ae] || e[De]) {
            var t = e.tag;
            if (5 === t || 6 === t || 13 === t || 26 === t || 27 === t || 3 === t) return e
        }
        return null
    }

    function qe(e) {
        var t = e.tag;
        if (5 === t || 26 === t || 27 === t || 6 === t) return e.stateNode;
        throw Error(r(33))
    }

    function Ve(e) {
        var t = e[Ie];
        return t || (t = e[Ie] = {
            hoistableStyles: new Map,
            hoistableScripts: new Map
        }), t
    }

    function Ke(e) {
        e[Ue] = !0
    }
    var Qe = new Set,
        Ye = {};

    function Ge(e, t) {
        Xe(e, t), Xe(e + "Capture", t)
    }

    function Xe(e, t) {
        for (Ye[e] = t, e = 0; e < t.length; e++) Qe.add(t[e])
    }
    var Je, Ze, et = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),
        tt = {},
        nt = {};

    function rt(e, t, n) {
        if (a = t, J.call(nt, a) || !J.call(tt, a) && (et.test(a) ? nt[a] = !0 : (tt[a] = !0, 0)))
            if (null === n) e.removeAttribute(t);
            else {
                switch (typeof n) {
                    case "undefined":
                    case "function":
                    case "symbol":
                        return void e.removeAttribute(t);
                    case "boolean":
                        var r = t.toLowerCase().slice(0, 5);
                        if ("data-" !== r && "aria-" !== r) return void e.removeAttribute(t)
                }
                e.setAttribute(t, "" + n)
            } var a
    }

    function at(e, t, n) {
        if (null === n) e.removeAttribute(t);
        else {
            switch (typeof n) {
                case "undefined":
                case "function":
                case "symbol":
                case "boolean":
                    return void e.removeAttribute(t)
            }
            e.setAttribute(t, "" + n)
        }
    }

    function lt(e, t, n, r) {
        if (null === r) e.removeAttribute(n);
        else {
            switch (typeof r) {
                case "undefined":
                case "function":
                case "symbol":
                case "boolean":
                    return void e.removeAttribute(n)
            }
            e.setAttributeNS(t, n, "" + r)
        }
    }

    function ot(e) {
        if (void 0 === Je) try {
            throw Error()
        } catch (n) {
            var t = n.stack.trim().match(/\n( *(at )?)/);
            Je = t && t[1] || "", Ze = -1 < n.stack.indexOf("\n    at") ? " (<anonymous>)" : -1 < n.stack.indexOf("@") ? "@unknown:0:0" : ""
        }
        return "\n" + Je + e + Ze
    }
    var it = !1;

    function st(e, t) {
        if (!e || it) return "";
        it = !0;
        var n = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        try {
            var r = {
                DetermineComponentFrameRoot: function() {
                    try {
                        if (t) {
                            var n = function() {
                                throw Error()
                            };
                            if (Object.defineProperty(n.prototype, "props", {
                                    set: function() {
                                        throw Error()
                                    }
                                }), "object" == typeof Reflect && Reflect.construct) {
                                try {
                                    Reflect.construct(n, [])
                                } catch (a) {
                                    var r = a
                                }
                                Reflect.construct(e, [], n)
                            } else {
                                try {
                                    n.call()
                                } catch (l) {
                                    r = l
                                }
                                e.call(n.prototype)
                            }
                        } else {
                            try {
                                throw Error()
                            } catch (o) {
                                r = o
                            }(n = e()) && "function" == typeof n.catch && n.catch((function() {}))
                        }
                    } catch (i) {
                        if (i && r && "string" == typeof i.stack) return [i.stack, r.stack]
                    }
                    return [null, null]
                }
            };
            r.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
            var a = Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot, "name");
            a && a.configurable && Object.defineProperty(r.DetermineComponentFrameRoot, "name", {
                value: "DetermineComponentFrameRoot"
            });
            var l = r.DetermineComponentFrameRoot(),
                o = l[0],
                i = l[1];
            if (o && i) {
                var s = o.split("\n"),
                    u = i.split("\n");
                for (a = r = 0; r < s.length && !s[r].includes("DetermineComponentFrameRoot");) r++;
                for (; a < u.length && !u[a].includes("DetermineComponentFrameRoot");) a++;
                if (r === s.length || a === u.length)
                    for (r = s.length - 1, a = u.length - 1; 1 <= r && 0 <= a && s[r] !== u[a];) a--;
                for (; 1 <= r && 0 <= a; r--, a--)
                    if (s[r] !== u[a]) {
                        if (1 !== r || 1 !== a)
                            do {
                                if (r--, 0 > --a || s[r] !== u[a]) {
                                    var c = "\n" + s[r].replace(" at new ", " at ");
                                    return e.displayName && c.includes("<anonymous>") && (c = c.replace("<anonymous>", e.displayName)), c
                                }
                            } while (1 <= r && 0 <= a);
                        break
                    }
            }
        } finally {
            it = !1, Error.prepareStackTrace = n
        }
        return (n = e ? e.displayName || e.name : "") ? ot(n) : ""
    }

    function ut(e) {
        switch (e.tag) {
            case 26:
            case 27:
            case 5:
                return ot(e.type);
            case 16:
                return ot("Lazy");
            case 13:
                return ot("Suspense");
            case 19:
                return ot("SuspenseList");
            case 0:
            case 15:
                return st(e.type, !1);
            case 11:
                return st(e.type.render, !1);
            case 1:
                return st(e.type, !0);
            case 31:
                return ot("Activity");
            default:
                return ""
        }
    }

    function ct(e) {
        try {
            var t = "";
            do {
                t += ut(e), e = e.return
            } while (e);
            return t
        } catch (n) {
            return "\nError generating stack: " + n.message + "\n" + n.stack
        }
    }

    function dt(e) {
        switch (typeof e) {
            case "bigint":
            case "boolean":
            case "number":
            case "string":
            case "undefined":
            case "object":
                return e;
            default:
                return ""
        }
    }

    function ft(e) {
        var t = e.type;
        return (e = e.nodeName) && "input" === e.toLowerCase() && ("checkbox" === t || "radio" === t)
    }

    function pt(e) {
        e._valueTracker || (e._valueTracker = function(e) {
            var t = ft(e) ? "checked" : "value",
                n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
                r = "" + e[t];
            if (!e.hasOwnProperty(t) && void 0 !== n && "function" == typeof n.get && "function" == typeof n.set) {
                var a = n.get,
                    l = n.set;
                return Object.defineProperty(e, t, {
                    configurable: !0,
                    get: function() {
                        return a.call(this)
                    },
                    set: function(e) {
                        r = "" + e, l.call(this, e)
                    }
                }), Object.defineProperty(e, t, {
                    enumerable: n.enumerable
                }), {
                    getValue: function() {
                        return r
                    },
                    setValue: function(e) {
                        r = "" + e
                    },
                    stopTracking: function() {
                        e._valueTracker = null, delete e[t]
                    }
                }
            }
        }(e))
    }

    function ht(e) {
        if (!e) return !1;
        var t = e._valueTracker;
        if (!t) return !0;
        var n = t.getValue(),
            r = "";
        return e && (r = ft(e) ? e.checked ? "true" : "false" : e.value), (e = r) !== n && (t.setValue(e), !0)
    }

    function mt(e) {
        if (void 0 === (e = e || ("undefined" != typeof document ? document : void 0))) return null;
        try {
            return e.activeElement || e.body
        } catch (t) {
            return e.body
        }
    }
    var gt = /[\n"\\]/g;

    function bt(e) {
        return e.replace(gt, (function(e) {
            return "\\" + e.charCodeAt(0).toString(16) + " "
        }))
    }

    function yt(e, t, n, r, a, l, o, i) {
        e.name = "", null != o && "function" != typeof o && "symbol" != typeof o && "boolean" != typeof o ? e.type = o : e.removeAttribute("type"), null != t ? "number" === o ? (0 === t && "" === e.value || e.value != t) && (e.value = "" + dt(t)) : e.value !== "" + dt(t) && (e.value = "" + dt(t)) : "submit" !== o && "reset" !== o || e.removeAttribute("value"), null != t ? xt(e, o, dt(t)) : null != n ? xt(e, o, dt(n)) : null != r && e.removeAttribute("value"), null == a && null != l && (e.defaultChecked = !!l), null != a && (e.checked = a && "function" != typeof a && "symbol" != typeof a), null != i && "function" != typeof i && "symbol" != typeof i && "boolean" != typeof i ? e.name = "" + dt(i) : e.removeAttribute("name")
    }

    function vt(e, t, n, r, a, l, o, i) {
        if (null != l && "function" != typeof l && "symbol" != typeof l && "boolean" != typeof l && (e.type = l), null != t || null != n) {
            if (("submit" === l || "reset" === l) && null == t) return;
            n = null != n ? "" + dt(n) : "", t = null != t ? "" + dt(t) : n, i || t === e.value || (e.value = t), e.defaultValue = t
        }
        r = "function" != typeof(r = null != r ? r : a) && "symbol" != typeof r && !!r, e.checked = i ? e.checked : !!r, e.defaultChecked = !!r, null != o && "function" != typeof o && "symbol" != typeof o && "boolean" != typeof o && (e.name = o)
    }

    function xt(e, t, n) {
        "number" === t && mt(e.ownerDocument) === e || e.defaultValue === "" + n || (e.defaultValue = "" + n)
    }

    function wt(e, t, n, r) {
        if (e = e.options, t) {
            t = {};
            for (var a = 0; a < n.length; a++) t["$" + n[a]] = !0;
            for (n = 0; n < e.length; n++) a = t.hasOwnProperty("$" + e[n].value), e[n].selected !== a && (e[n].selected = a), a && r && (e[n].defaultSelected = !0)
        } else {
            for (n = "" + dt(n), t = null, a = 0; a < e.length; a++) {
                if (e[a].value === n) return e[a].selected = !0, void(r && (e[a].defaultSelected = !0));
                null !== t || e[a].disabled || (t = e[a])
            }
            null !== t && (t.selected = !0)
        }
    }

    function kt(e, t, n) {
        null == t || ((t = "" + dt(t)) !== e.value && (e.value = t), null != n) ? e.defaultValue = null != n ? "" + dt(n) : "" : e.defaultValue !== t && (e.defaultValue = t)
    }

    function St(e, t, n, a) {
        if (null == t) {
            if (null != a) {
                if (null != n) throw Error(r(92));
                if (O(a)) {
                    if (1 < a.length) throw Error(r(93));
                    a = a[0]
                }
                n = a
            }
            null == n && (n = ""), t = n
        }
        n = dt(t), e.defaultValue = n, (a = e.textContent) === n && "" !== a && null !== a && (e.value = a)
    }

    function Nt(e, t) {
        if (t) {
            var n = e.firstChild;
            if (n && n === e.lastChild && 3 === n.nodeType) return void(n.nodeValue = t)
        }
        e.textContent = t
    }
    var Et = new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));

    function Ct(e, t, n) {
        var r = 0 === t.indexOf("--");
        null == n || "boolean" == typeof n || "" === n ? r ? e.setProperty(t, "") : "float" === t ? e.cssFloat = "" : e[t] = "" : r ? e.setProperty(t, n) : "number" != typeof n || 0 === n || Et.has(t) ? "float" === t ? e.cssFloat = n : e[t] = ("" + n).trim() : e[t] = n + "px"
    }

    function jt(e, t, n) {
        if (null != t && "object" != typeof t) throw Error(r(62));
        if (e = e.style, null != n) {
            for (var a in n) !n.hasOwnProperty(a) || null != t && t.hasOwnProperty(a) || (0 === a.indexOf("--") ? e.setProperty(a, "") : "float" === a ? e.cssFloat = "" : e[a] = "");
            for (var l in t) a = t[l], t.hasOwnProperty(l) && n[l] !== a && Ct(e, l, a)
        } else
            for (var o in t) t.hasOwnProperty(o) && Ct(e, o, t[o])
    }

    function zt(e) {
        if (-1 === e.indexOf("-")) return !1;
        switch (e) {
            case "annotation-xml":
            case "color-profile":
            case "font-face":
            case "font-face-src":
            case "font-face-uri":
            case "font-face-format":
            case "font-face-name":
            case "missing-glyph":
                return !1;
            default:
                return !0
        }
    }
    var Pt = new Map([
            ["acceptCharset", "accept-charset"],
            ["htmlFor", "for"],
            ["httpEquiv", "http-equiv"],
            ["crossOrigin", "crossorigin"],
            ["accentHeight", "accent-height"],
            ["alignmentBaseline", "alignment-baseline"],
            ["arabicForm", "arabic-form"],
            ["baselineShift", "baseline-shift"],
            ["capHeight", "cap-height"],
            ["clipPath", "clip-path"],
            ["clipRule", "clip-rule"],
            ["colorInterpolation", "color-interpolation"],
            ["colorInterpolationFilters", "color-interpolation-filters"],
            ["colorProfile", "color-profile"],
            ["colorRendering", "color-rendering"],
            ["dominantBaseline", "dominant-baseline"],
            ["enableBackground", "enable-background"],
            ["fillOpacity", "fill-opacity"],
            ["fillRule", "fill-rule"],
            ["floodColor", "flood-color"],
            ["floodOpacity", "flood-opacity"],
            ["fontFamily", "font-family"],
            ["fontSize", "font-size"],
            ["fontSizeAdjust", "font-size-adjust"],
            ["fontStretch", "font-stretch"],
            ["fontStyle", "font-style"],
            ["fontVariant", "font-variant"],
            ["fontWeight", "font-weight"],
            ["glyphName", "glyph-name"],
            ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
            ["glyphOrientationVertical", "glyph-orientation-vertical"],
            ["horizAdvX", "horiz-adv-x"],
            ["horizOriginX", "horiz-origin-x"],
            ["imageRendering", "image-rendering"],
            ["letterSpacing", "letter-spacing"],
            ["lightingColor", "lighting-color"],
            ["markerEnd", "marker-end"],
            ["markerMid", "marker-mid"],
            ["markerStart", "marker-start"],
            ["overlinePosition", "overline-position"],
            ["overlineThickness", "overline-thickness"],
            ["paintOrder", "paint-order"],
            ["panose-1", "panose-1"],
            ["pointerEvents", "pointer-events"],
            ["renderingIntent", "rendering-intent"],
            ["shapeRendering", "shape-rendering"],
            ["stopColor", "stop-color"],
            ["stopOpacity", "stop-opacity"],
            ["strikethroughPosition", "strikethrough-position"],
            ["strikethroughThickness", "strikethrough-thickness"],
            ["strokeDasharray", "stroke-dasharray"],
            ["strokeDashoffset", "stroke-dashoffset"],
            ["strokeLinecap", "stroke-linecap"],
            ["strokeLinejoin", "stroke-linejoin"],
            ["strokeMiterlimit", "stroke-miterlimit"],
            ["strokeOpacity", "stroke-opacity"],
            ["strokeWidth", "stroke-width"],
            ["textAnchor", "text-anchor"],
            ["textDecoration", "text-decoration"],
            ["textRendering", "text-rendering"],
            ["transformOrigin", "transform-origin"],
            ["underlinePosition", "underline-position"],
            ["underlineThickness", "underline-thickness"],
            ["unicodeBidi", "unicode-bidi"],
            ["unicodeRange", "unicode-range"],
            ["unitsPerEm", "units-per-em"],
            ["vAlphabetic", "v-alphabetic"],
            ["vHanging", "v-hanging"],
            ["vIdeographic", "v-ideographic"],
            ["vMathematical", "v-mathematical"],
            ["vectorEffect", "vector-effect"],
            ["vertAdvY", "vert-adv-y"],
            ["vertOriginX", "vert-origin-x"],
            ["vertOriginY", "vert-origin-y"],
            ["wordSpacing", "word-spacing"],
            ["writingMode", "writing-mode"],
            ["xmlnsXlink", "xmlns:xlink"],
            ["xHeight", "x-height"]
        ]),
        _t = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;

    function Tt(e) {
        return _t.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e
    }
    var Lt = null;

    function Mt(e) {
        return (e = e.target || e.srcElement || window).correspondingUseElement && (e = e.correspondingUseElement), 3 === e.nodeType ? e.parentNode : e
    }
    var At = null,
        Ot = null;

    function Dt(e) {
        var t = Be(e);
        if (t && (e = t.stateNode)) {
            var n = e[Oe] || null;
            e: switch (e = t.stateNode, t.type) {
                case "input":
                    if (yt(e, n.value, n.defaultValue, n.defaultValue, n.checked, n.defaultChecked, n.type, n.name), t = n.name, "radio" === n.type && null != t) {
                        for (n = e; n.parentNode;) n = n.parentNode;
                        for (n = n.querySelectorAll('input[name="' + bt("" + t) + '"][type="radio"]'), t = 0; t < n.length; t++) {
                            var a = n[t];
                            if (a !== e && a.form === e.form) {
                                var l = a[Oe] || null;
                                if (!l) throw Error(r(90));
                                yt(a, l.value, l.defaultValue, l.defaultValue, l.checked, l.defaultChecked, l.type, l.name)
                            }
                        }
                        for (t = 0; t < n.length; t++)(a = n[t]).form === e.form && ht(a)
                    }
                    break e;
                case "textarea":
                    kt(e, n.value, n.defaultValue);
                    break e;
                case "select":
                    null != (t = n.value) && wt(e, !!n.multiple, t, !1)
            }
        }
    }
    var Ft = !1;

    function Rt(e, t, n) {
        if (Ft) return e(t, n);
        Ft = !0;
        try {
            return e(t)
        } finally {
            if (Ft = !1, (null !== At || null !== Ot) && ($u(), At && (t = At, e = Ot, Ot = At = null, Dt(t), e)))
                for (t = 0; t < e.length; t++) Dt(e[t])
        }
    }

    function Ht(e, t) {
        var n = e.stateNode;
        if (null === n) return null;
        var a = n[Oe] || null;
        if (null === a) return null;
        n = a[t];
        e: switch (t) {
            case "onClick":
            case "onClickCapture":
            case "onDoubleClick":
            case "onDoubleClickCapture":
            case "onMouseDown":
            case "onMouseDownCapture":
            case "onMouseMove":
            case "onMouseMoveCapture":
            case "onMouseUp":
            case "onMouseUpCapture":
            case "onMouseEnter":
                (a = !a.disabled) || (a = !("button" === (e = e.type) || "input" === e || "select" === e || "textarea" === e)), e = !a;
                break e;
            default:
                e = !1
        }
        if (e) return null;
        if (n && "function" != typeof n) throw Error(r(231, t, typeof n));
        return n
    }
    var It = !("undefined" == typeof window || void 0 === window.document || void 0 === window.document.createElement),
        Ut = !1;
    if (It) try {
        var Wt = {};
        Object.defineProperty(Wt, "passive", {
            get: function() {
                Ut = !0
            }
        }), window.addEventListener("test", Wt, Wt), window.removeEventListener("test", Wt, Wt)
    } catch (Df) {
        Ut = !1
    }
    var $t = null,
        Bt = null,
        qt = null;

    function Vt() {
        if (qt) return qt;
        var e, t, n = Bt,
            r = n.length,
            a = "value" in $t ? $t.value : $t.textContent,
            l = a.length;
        for (e = 0; e < r && n[e] === a[e]; e++);
        var o = r - e;
        for (t = 1; t <= o && n[r - t] === a[l - t]; t++);
        return qt = a.slice(e, 1 < t ? 1 - t : void 0)
    }

    function Kt(e) {
        var t = e.keyCode;
        return "charCode" in e ? 0 === (e = e.charCode) && 13 === t && (e = 13) : e = t, 10 === e && (e = 13), 32 <= e || 13 === e ? e : 0
    }

    function Qt() {
        return !0
    }

    function Yt() {
        return !1
    }

    function Gt(e) {
        function t(t, n, r, a, l) {
            for (var o in this._reactName = t, this._targetInst = r, this.type = n, this.nativeEvent = a, this.target = l, this.currentTarget = null, e) e.hasOwnProperty(o) && (t = e[o], this[o] = t ? t(a) : a[o]);
            return this.isDefaultPrevented = (null != a.defaultPrevented ? a.defaultPrevented : !1 === a.returnValue) ? Qt : Yt, this.isPropagationStopped = Yt, this
        }
        return d(t.prototype, {
            preventDefault: function() {
                this.defaultPrevented = !0;
                var e = this.nativeEvent;
                e && (e.preventDefault ? e.preventDefault() : "unknown" != typeof e.returnValue && (e.returnValue = !1), this.isDefaultPrevented = Qt)
            },
            stopPropagation: function() {
                var e = this.nativeEvent;
                e && (e.stopPropagation ? e.stopPropagation() : "unknown" != typeof e.cancelBubble && (e.cancelBubble = !0), this.isPropagationStopped = Qt)
            },
            persist: function() {},
            isPersistent: Qt
        }), t
    }
    var Xt, Jt, Zt, en = {
            eventPhase: 0,
            bubbles: 0,
            cancelable: 0,
            timeStamp: function(e) {
                return e.timeStamp || Date.now()
            },
            defaultPrevented: 0,
            isTrusted: 0
        },
        tn = Gt(en),
        nn = d({}, en, {
            view: 0,
            detail: 0
        }),
        rn = Gt(nn),
        an = d({}, nn, {
            screenX: 0,
            screenY: 0,
            clientX: 0,
            clientY: 0,
            pageX: 0,
            pageY: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            getModifierState: gn,
            button: 0,
            buttons: 0,
            relatedTarget: function(e) {
                return void 0 === e.relatedTarget ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
            },
            movementX: function(e) {
                return "movementX" in e ? e.movementX : (e !== Zt && (Zt && "mousemove" === e.type ? (Xt = e.screenX - Zt.screenX, Jt = e.screenY - Zt.screenY) : Jt = Xt = 0, Zt = e), Xt)
            },
            movementY: function(e) {
                return "movementY" in e ? e.movementY : Jt
            }
        }),
        ln = Gt(an),
        on = Gt(d({}, an, {
            dataTransfer: 0
        })),
        sn = Gt(d({}, nn, {
            relatedTarget: 0
        })),
        un = Gt(d({}, en, {
            animationName: 0,
            elapsedTime: 0,
            pseudoElement: 0
        })),
        cn = Gt(d({}, en, {
            clipboardData: function(e) {
                return "clipboardData" in e ? e.clipboardData : window.clipboardData
            }
        })),
        dn = Gt(d({}, en, {
            data: 0
        })),
        fn = {
            Esc: "Escape",
            Spacebar: " ",
            Left: "ArrowLeft",
            Up: "ArrowUp",
            Right: "ArrowRight",
            Down: "ArrowDown",
            Del: "Delete",
            Win: "OS",
            Menu: "ContextMenu",
            Apps: "ContextMenu",
            Scroll: "ScrollLock",
            MozPrintableKey: "Unidentified"
        },
        pn = {
            8: "Backspace",
            9: "Tab",
            12: "Clear",
            13: "Enter",
            16: "Shift",
            17: "Control",
            18: "Alt",
            19: "Pause",
            20: "CapsLock",
            27: "Escape",
            32: " ",
            33: "PageUp",
            34: "PageDown",
            35: "End",
            36: "Home",
            37: "ArrowLeft",
            38: "ArrowUp",
            39: "ArrowRight",
            40: "ArrowDown",
            45: "Insert",
            46: "Delete",
            112: "F1",
            113: "F2",
            114: "F3",
            115: "F4",
            116: "F5",
            117: "F6",
            118: "F7",
            119: "F8",
            120: "F9",
            121: "F10",
            122: "F11",
            123: "F12",
            144: "NumLock",
            145: "ScrollLock",
            224: "Meta"
        },
        hn = {
            Alt: "altKey",
            Control: "ctrlKey",
            Meta: "metaKey",
            Shift: "shiftKey"
        };

    function mn(e) {
        var t = this.nativeEvent;
        return t.getModifierState ? t.getModifierState(e) : !!(e = hn[e]) && !!t[e]
    }

    function gn() {
        return mn
    }
    var bn = Gt(d({}, nn, {
            key: function(e) {
                if (e.key) {
                    var t = fn[e.key] || e.key;
                    if ("Unidentified" !== t) return t
                }
                return "keypress" === e.type ? 13 === (e = Kt(e)) ? "Enter" : String.fromCharCode(e) : "keydown" === e.type || "keyup" === e.type ? pn[e.keyCode] || "Unidentified" : ""
            },
            code: 0,
            location: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            repeat: 0,
            locale: 0,
            getModifierState: gn,
            charCode: function(e) {
                return "keypress" === e.type ? Kt(e) : 0
            },
            keyCode: function(e) {
                return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0
            },
            which: function(e) {
                return "keypress" === e.type ? Kt(e) : "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0
            }
        })),
        yn = Gt(d({}, an, {
            pointerId: 0,
            width: 0,
            height: 0,
            pressure: 0,
            tangentialPressure: 0,
            tiltX: 0,
            tiltY: 0,
            twist: 0,
            pointerType: 0,
            isPrimary: 0
        })),
        vn = Gt(d({}, nn, {
            touches: 0,
            targetTouches: 0,
            changedTouches: 0,
            altKey: 0,
            metaKey: 0,
            ctrlKey: 0,
            shiftKey: 0,
            getModifierState: gn
        })),
        xn = Gt(d({}, en, {
            propertyName: 0,
            elapsedTime: 0,
            pseudoElement: 0
        })),
        wn = Gt(d({}, an, {
            deltaX: function(e) {
                return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0
            },
            deltaY: function(e) {
                return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0
            },
            deltaZ: 0,
            deltaMode: 0
        })),
        kn = Gt(d({}, en, {
            newState: 0,
            oldState: 0
        })),
        Sn = [9, 13, 27, 32],
        Nn = It && "CompositionEvent" in window,
        En = null;
    It && "documentMode" in document && (En = document.documentMode);
    var Cn = It && "TextEvent" in window && !En,
        jn = It && (!Nn || En && 8 < En && 11 >= En),
        zn = String.fromCharCode(32),
        Pn = !1;

    function _n(e, t) {
        switch (e) {
            case "keyup":
                return -1 !== Sn.indexOf(t.keyCode);
            case "keydown":
                return 229 !== t.keyCode;
            case "keypress":
            case "mousedown":
            case "focusout":
                return !0;
            default:
                return !1
        }
    }

    function Tn(e) {
        return "object" == typeof(e = e.detail) && "data" in e ? e.data : null
    }
    var Ln = !1;
    var Mn = {
        color: !0,
        date: !0,
        datetime: !0,
        "datetime-local": !0,
        email: !0,
        month: !0,
        number: !0,
        password: !0,
        range: !0,
        search: !0,
        tel: !0,
        text: !0,
        time: !0,
        url: !0,
        week: !0
    };

    function An(e) {
        var t = e && e.nodeName && e.nodeName.toLowerCase();
        return "input" === t ? !!Mn[e.type] : "textarea" === t
    }

    function On(e, t, n, r) {
        At ? Ot ? Ot.push(r) : Ot = [r] : At = r, 0 < (t = Vc(t, "onChange")).length && (n = new tn("onChange", "change", null, n, r), e.push({
            event: n,
            listeners: t
        }))
    }
    var Dn = null,
        Fn = null;

    function Rn(e) {
        Rc(e, 0)
    }

    function Hn(e) {
        if (ht(qe(e))) return e
    }

    function In(e, t) {
        if ("change" === e) return t
    }
    var Un = !1;
    if (It) {
        var Wn;
        if (It) {
            var $n = "oninput" in document;
            if (!$n) {
                var Bn = document.createElement("div");
                Bn.setAttribute("oninput", "return;"), $n = "function" == typeof Bn.oninput
            }
            Wn = $n
        } else Wn = !1;
        Un = Wn && (!document.documentMode || 9 < document.documentMode)
    }

    function qn() {
        Dn && (Dn.detachEvent("onpropertychange", Vn), Fn = Dn = null)
    }

    function Vn(e) {
        if ("value" === e.propertyName && Hn(Fn)) {
            var t = [];
            On(t, Fn, e, Mt(e)), Rt(Rn, t)
        }
    }

    function Kn(e, t, n) {
        "focusin" === e ? (qn(), Fn = n, (Dn = t).attachEvent("onpropertychange", Vn)) : "focusout" === e && qn()
    }

    function Qn(e) {
        if ("selectionchange" === e || "keyup" === e || "keydown" === e) return Hn(Fn)
    }

    function Yn(e, t) {
        if ("click" === e) return Hn(t)
    }

    function Gn(e, t) {
        if ("input" === e || "change" === e) return Hn(t)
    }
    var Xn = "function" == typeof Object.is ? Object.is : function(e, t) {
        return e === t && (0 !== e || 1 / e == 1 / t) || e != e && t != t
    };

    function Jn(e, t) {
        if (Xn(e, t)) return !0;
        if ("object" != typeof e || null === e || "object" != typeof t || null === t) return !1;
        var n = Object.keys(e),
            r = Object.keys(t);
        if (n.length !== r.length) return !1;
        for (r = 0; r < n.length; r++) {
            var a = n[r];
            if (!J.call(t, a) || !Xn(e[a], t[a])) return !1
        }
        return !0
    }

    function Zn(e) {
        for (; e && e.firstChild;) e = e.firstChild;
        return e
    }

    function er(e, t) {
        var n, r = Zn(e);
        for (e = 0; r;) {
            if (3 === r.nodeType) {
                if (n = e + r.textContent.length, e <= t && n >= t) return {
                    node: r,
                    offset: t - e
                };
                e = n
            }
            e: {
                for (; r;) {
                    if (r.nextSibling) {
                        r = r.nextSibling;
                        break e
                    }
                    r = r.parentNode
                }
                r = void 0
            }
            r = Zn(r)
        }
    }

    function tr(e, t) {
        return !(!e || !t) && (e === t || (!e || 3 !== e.nodeType) && (t && 3 === t.nodeType ? tr(e, t.parentNode) : "contains" in e ? e.contains(t) : !!e.compareDocumentPosition && !!(16 & e.compareDocumentPosition(t))))
    }

    function nr(e) {
        for (var t = mt((e = null != e && null != e.ownerDocument && null != e.ownerDocument.defaultView ? e.ownerDocument.defaultView : window).document); t instanceof e.HTMLIFrameElement;) {
            try {
                var n = "string" == typeof t.contentWindow.location.href
            } catch (r) {
                n = !1
            }
            if (!n) break;
            t = mt((e = t.contentWindow).document)
        }
        return t
    }

    function rr(e) {
        var t = e && e.nodeName && e.nodeName.toLowerCase();
        return t && ("input" === t && ("text" === e.type || "search" === e.type || "tel" === e.type || "url" === e.type || "password" === e.type) || "textarea" === t || "true" === e.contentEditable)
    }
    var ar = It && "documentMode" in document && 11 >= document.documentMode,
        lr = null,
        or = null,
        ir = null,
        sr = !1;

    function ur(e, t, n) {
        var r = n.window === n ? n.document : 9 === n.nodeType ? n : n.ownerDocument;
        sr || null == lr || lr !== mt(r) || ("selectionStart" in (r = lr) && rr(r) ? r = {
            start: r.selectionStart,
            end: r.selectionEnd
        } : r = {
            anchorNode: (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection()).anchorNode,
            anchorOffset: r.anchorOffset,
            focusNode: r.focusNode,
            focusOffset: r.focusOffset
        }, ir && Jn(ir, r) || (ir = r, 0 < (r = Vc(or, "onSelect")).length && (t = new tn("onSelect", "select", null, t, n), e.push({
            event: t,
            listeners: r
        }), t.target = lr)))
    }

    function cr(e, t) {
        var n = {};
        return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n
    }
    var dr = {
            animationend: cr("Animation", "AnimationEnd"),
            animationiteration: cr("Animation", "AnimationIteration"),
            animationstart: cr("Animation", "AnimationStart"),
            transitionrun: cr("Transition", "TransitionRun"),
            transitionstart: cr("Transition", "TransitionStart"),
            transitioncancel: cr("Transition", "TransitionCancel"),
            transitionend: cr("Transition", "TransitionEnd")
        },
        fr = {},
        pr = {};

    function hr(e) {
        if (fr[e]) return fr[e];
        if (!dr[e]) return e;
        var t, n = dr[e];
        for (t in n)
            if (n.hasOwnProperty(t) && t in pr) return fr[e] = n[t];
        return e
    }
    It && (pr = document.createElement("div").style, "AnimationEvent" in window || (delete dr.animationend.animation, delete dr.animationiteration.animation, delete dr.animationstart.animation), "TransitionEvent" in window || delete dr.transitionend.transition);
    var mr = hr("animationend"),
        gr = hr("animationiteration"),
        br = hr("animationstart"),
        yr = hr("transitionrun"),
        vr = hr("transitionstart"),
        xr = hr("transitioncancel"),
        wr = hr("transitionend"),
        kr = new Map,
        Sr = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");

    function Nr(e, t) {
        kr.set(e, t), Ge(t, [e])
    }
    Sr.push("scrollEnd");
    var Er = new WeakMap;

    function Cr(e, t) {
        if ("object" == typeof e && null !== e) {
            var n = Er.get(e);
            return void 0 !== n ? n : (t = {
                value: e,
                source: t,
                stack: ct(t)
            }, Er.set(e, t), t)
        }
        return {
            value: e,
            source: t,
            stack: ct(t)
        }
    }
    var jr = [],
        zr = 0,
        Pr = 0;

    function _r() {
        for (var e = zr, t = Pr = zr = 0; t < e;) {
            var n = jr[t];
            jr[t++] = null;
            var r = jr[t];
            jr[t++] = null;
            var a = jr[t];
            jr[t++] = null;
            var l = jr[t];
            if (jr[t++] = null, null !== r && null !== a) {
                var o = r.pending;
                null === o ? a.next = a : (a.next = o.next, o.next = a), r.pending = a
            }
            0 !== l && Ar(n, a, l)
        }
    }

    function Tr(e, t, n, r) {
        jr[zr++] = e, jr[zr++] = t, jr[zr++] = n, jr[zr++] = r, Pr |= r, e.lanes |= r, null !== (e = e.alternate) && (e.lanes |= r)
    }

    function Lr(e, t, n, r) {
        return Tr(e, t, n, r), Or(e)
    }

    function Mr(e, t) {
        return Tr(e, null, null, t), Or(e)
    }

    function Ar(e, t, n) {
        e.lanes |= n;
        var r = e.alternate;
        null !== r && (r.lanes |= n);
        for (var a = !1, l = e.return; null !== l;) l.childLanes |= n, null !== (r = l.alternate) && (r.childLanes |= n), 22 === l.tag && (null === (e = l.stateNode) || 1 & e._visibility || (a = !0)), e = l, l = l.return;
        return 3 === e.tag ? (l = e.stateNode, a && null !== t && (a = 31 - me(n), null === (r = (e = l.hiddenUpdates)[a]) ? e[a] = [t] : r.push(t), t.lane = 536870912 | n), l) : null
    }

    function Or(e) {
        if (50 < Au) throw Au = 0, Ou = null, Error(r(185));
        for (var t = e.return; null !== t;) t = (e = t).return;
        return 3 === e.tag ? e.stateNode : null
    }
    var Dr = {};

    function Fr(e, t, n, r) {
        this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null
    }

    function Rr(e, t, n, r) {
        return new Fr(e, t, n, r)
    }

    function Hr(e) {
        return !(!(e = e.prototype) || !e.isReactComponent)
    }

    function Ir(e, t) {
        var n = e.alternate;
        return null === n ? ((n = Rr(e.tag, t, e.key, e.mode)).elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = 65011712 & e.flags, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = null === t ? null : {
            lanes: t.lanes,
            firstContext: t.firstContext
        }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n.refCleanup = e.refCleanup, n
    }

    function Ur(e, t) {
        e.flags &= 65011714;
        var n = e.alternate;
        return null === n ? (e.childLanes = 0, e.lanes = t, e.child = null, e.subtreeFlags = 0, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null) : (e.childLanes = n.childLanes, e.lanes = n.lanes, e.child = n.child, e.subtreeFlags = 0, e.deletions = null, e.memoizedProps = n.memoizedProps, e.memoizedState = n.memoizedState, e.updateQueue = n.updateQueue, e.type = n.type, t = n.dependencies, e.dependencies = null === t ? null : {
            lanes: t.lanes,
            firstContext: t.firstContext
        }), e
    }

    function Wr(e, t, n, a, l, o) {
        var i = 0;
        if (a = e, "function" == typeof e) Hr(e) && (i = 1);
        else if ("string" == typeof e) i = function(e, t, n) {
            if (1 === n || null != t.itemProp) return !1;
            switch (e) {
                case "meta":
                case "title":
                    return !0;
                case "style":
                    if ("string" != typeof t.precedence || "string" != typeof t.href || "" === t.href) break;
                    return !0;
                case "link":
                    if ("string" != typeof t.rel || "string" != typeof t.href || "" === t.href || t.onLoad || t.onError) break;
                    return "stylesheet" !== t.rel || (e = t.disabled, "string" == typeof t.precedence && null == e);
                case "script":
                    if (t.async && "function" != typeof t.async && "symbol" != typeof t.async && !t.onLoad && !t.onError && t.src && "string" == typeof t.src) return !0
            }
            return !1
        }(e, n, B.current) ? 26 : "html" === e || "head" === e || "body" === e ? 27 : 5;
        else e: switch (e) {
            case P:
                return (e = Rr(31, n, t, l)).elementType = P, e.lanes = o, e;
            case m:
                return $r(n.children, l, o, t);
            case g:
                i = 8, l |= 24;
                break;
            case b:
                return (e = Rr(12, n, t, 2 | l)).elementType = b, e.lanes = o, e;
            case S:
                return (e = Rr(13, n, t, l)).elementType = S, e.lanes = o, e;
            case N:
                return (e = Rr(19, n, t, l)).elementType = N, e.lanes = o, e;
            default:
                if ("object" == typeof e && null !== e) switch (e.$$typeof) {
                    case y:
                    case x:
                        i = 10;
                        break e;
                    case v:
                        i = 9;
                        break e;
                    case w:
                        i = 11;
                        break e;
                    case C:
                        i = 14;
                        break e;
                    case j:
                        i = 16, a = null;
                        break e
                }
                i = 29, n = Error(r(130, null === e ? "null" : typeof e, "")), a = null
        }
        return (t = Rr(i, n, t, l)).elementType = e, t.type = a, t.lanes = o, t
    }

    function $r(e, t, n, r) {
        return (e = Rr(7, e, r, t)).lanes = n, e
    }

    function Br(e, t, n) {
        return (e = Rr(6, e, null, t)).lanes = n, e
    }

    function qr(e, t, n) {
        return (t = Rr(4, null !== e.children ? e.children : [], e.key, t)).lanes = n, t.stateNode = {
            containerInfo: e.containerInfo,
            pendingChildren: null,
            implementation: e.implementation
        }, t
    }
    var Vr = [],
        Kr = 0,
        Qr = null,
        Yr = 0,
        Gr = [],
        Xr = 0,
        Jr = null,
        Zr = 1,
        ea = "";

    function ta(e, t) {
        Vr[Kr++] = Yr, Vr[Kr++] = Qr, Qr = e, Yr = t
    }

    function na(e, t, n) {
        Gr[Xr++] = Zr, Gr[Xr++] = ea, Gr[Xr++] = Jr, Jr = e;
        var r = Zr;
        e = ea;
        var a = 32 - me(r) - 1;
        r &= ~(1 << a), n += 1;
        var l = 32 - me(t) + a;
        if (30 < l) {
            var o = a - a % 5;
            l = (r & (1 << o) - 1).toString(32), r >>= o, a -= o, Zr = 1 << 32 - me(t) + a | n << a | r, ea = l + e
        } else Zr = 1 << l | n << a | r, ea = e
    }

    function ra(e) {
        null !== e.return && (ta(e, 1), na(e, 1, 0))
    }

    function aa(e) {
        for (; e === Qr;) Qr = Vr[--Kr], Vr[Kr] = null, Yr = Vr[--Kr], Vr[Kr] = null;
        for (; e === Jr;) Jr = Gr[--Xr], Gr[Xr] = null, ea = Gr[--Xr], Gr[Xr] = null, Zr = Gr[--Xr], Gr[Xr] = null
    }
    var la = null,
        oa = null,
        ia = !1,
        sa = null,
        ua = !1,
        ca = Error(r(519));

    function da(e) {
        throw ba(Cr(Error(r(418, "")), e)), ca
    }

    function fa(e) {
        var t = e.stateNode,
            n = e.type,
            r = e.memoizedProps;
        switch (t[Ae] = e, t[Oe] = r, n) {
            case "dialog":
                Hc("cancel", t), Hc("close", t);
                break;
            case "iframe":
            case "object":
            case "embed":
                Hc("load", t);
                break;
            case "video":
            case "audio":
                for (n = 0; n < Dc.length; n++) Hc(Dc[n], t);
                break;
            case "source":
                Hc("error", t);
                break;
            case "img":
            case "image":
            case "link":
                Hc("error", t), Hc("load", t);
                break;
            case "details":
                Hc("toggle", t);
                break;
            case "input":
                Hc("invalid", t), vt(t, r.value, r.defaultValue, r.checked, r.defaultChecked, r.type, r.name, !0), pt(t);
                break;
            case "select":
                Hc("invalid", t);
                break;
            case "textarea":
                Hc("invalid", t), St(t, r.value, r.defaultValue, r.children), pt(t)
        }
        "string" != typeof(n = r.children) && "number" != typeof n && "bigint" != typeof n || t.textContent === "" + n || !0 === r.suppressHydrationWarning || Jc(t.textContent, n) ? (null != r.popover && (Hc("beforetoggle", t), Hc("toggle", t)), null != r.onScroll && Hc("scroll", t), null != r.onScrollEnd && Hc("scrollend", t), null != r.onClick && (t.onclick = Zc), t = !0) : t = !1, t || da(e)
    }

    function pa(e) {
        for (la = e.return; la;) switch (la.tag) {
            case 5:
            case 13:
                return void(ua = !1);
            case 27:
            case 3:
                return void(ua = !0);
            default:
                la = la.return
        }
    }

    function ha(e) {
        if (e !== la) return !1;
        if (!ia) return pa(e), ia = !0, !1;
        var t, n = e.tag;
        if ((t = 3 !== n && 27 !== n) && ((t = 5 === n) && (t = !("form" !== (t = e.type) && "button" !== t) || sd(e.type, e.memoizedProps)), t = !t), t && oa && da(e), pa(e), 13 === n) {
            if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null)) throw Error(r(317));
            e: {
                for (e = e.nextSibling, n = 0; e;) {
                    if (8 === e.nodeType)
                        if ("/$" === (t = e.data)) {
                            if (0 === n) {
                                oa = vd(e.nextSibling);
                                break e
                            }
                            n--
                        } else "$" !== t && "$!" !== t && "$?" !== t || n++;
                    e = e.nextSibling
                }
                oa = null
            }
        } else 27 === n ? (n = oa, md(e.type) ? (e = xd, xd = null, oa = e) : oa = n) : oa = la ? vd(e.stateNode.nextSibling) : null;
        return !0
    }

    function ma() {
        oa = la = null, ia = !1
    }

    function ga() {
        var e = sa;
        return null !== e && (null === wu ? wu = e : wu.push.apply(wu, e), sa = null), e
    }

    function ba(e) {
        null === sa ? sa = [e] : sa.push(e)
    }
    var ya = U(null),
        va = null,
        xa = null;

    function wa(e, t, n) {
        $(ya, t._currentValue), t._currentValue = n
    }

    function ka(e) {
        e._currentValue = ya.current, W(ya)
    }

    function Sa(e, t, n) {
        for (; null !== e;) {
            var r = e.alternate;
            if ((e.childLanes & t) !== t ? (e.childLanes |= t, null !== r && (r.childLanes |= t)) : null !== r && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
            e = e.return
        }
    }

    function Na(e, t, n, a) {
        var l = e.child;
        for (null !== l && (l.return = e); null !== l;) {
            var o = l.dependencies;
            if (null !== o) {
                var i = l.child;
                o = o.firstContext;
                e: for (; null !== o;) {
                    var s = o;
                    o = l;
                    for (var u = 0; u < t.length; u++)
                        if (s.context === t[u]) {
                            o.lanes |= n, null !== (s = o.alternate) && (s.lanes |= n), Sa(o.return, n, e), a || (i = null);
                            break e
                        } o = s.next
                }
            } else if (18 === l.tag) {
                if (null === (i = l.return)) throw Error(r(341));
                i.lanes |= n, null !== (o = i.alternate) && (o.lanes |= n), Sa(i, n, e), i = null
            } else i = l.child;
            if (null !== i) i.return = l;
            else
                for (i = l; null !== i;) {
                    if (i === e) {
                        i = null;
                        break
                    }
                    if (null !== (l = i.sibling)) {
                        l.return = i.return, i = l;
                        break
                    }
                    i = i.return
                }
            l = i
        }
    }

    function Ea(e, t, n, a) {
        e = null;
        for (var l = t, o = !1; null !== l;) {
            if (!o)
                if (524288 & l.flags) o = !0;
                else if (262144 & l.flags) break;
            if (10 === l.tag) {
                var i = l.alternate;
                if (null === i) throw Error(r(387));
                if (null !== (i = i.memoizedProps)) {
                    var s = l.type;
                    Xn(l.pendingProps.value, i.value) || (null !== e ? e.push(s) : e = [s])
                }
            } else if (l === K.current) {
                if (null === (i = l.alternate)) throw Error(r(387));
                i.memoizedState.memoizedState !== l.memoizedState.memoizedState && (null !== e ? e.push(Gd) : e = [Gd])
            }
            l = l.return
        }
        null !== e && Na(t, e, n, a), t.flags |= 262144
    }

    function Ca(e) {
        for (e = e.firstContext; null !== e;) {
            if (!Xn(e.context._currentValue, e.memoizedValue)) return !0;
            e = e.next
        }
        return !1
    }

    function ja(e) {
        va = e, xa = null, null !== (e = e.dependencies) && (e.firstContext = null)
    }

    function za(e) {
        return _a(va, e)
    }

    function Pa(e, t) {
        return null === va && ja(e), _a(e, t)
    }

    function _a(e, t) {
        var n = t._currentValue;
        if (t = {
                context: t,
                memoizedValue: n,
                next: null
            }, null === xa) {
            if (null === e) throw Error(r(308));
            xa = t, e.dependencies = {
                lanes: 0,
                firstContext: t
            }, e.flags |= 524288
        } else xa = xa.next = t;
        return n
    }
    var Ta = "undefined" != typeof AbortController ? AbortController : function() {
            var e = [],
                t = this.signal = {
                    aborted: !1,
                    addEventListener: function(t, n) {
                        e.push(n)
                    }
                };
            this.abort = function() {
                t.aborted = !0, e.forEach((function(e) {
                    return e()
                }))
            }
        },
        La = e.unstable_scheduleCallback,
        Ma = e.unstable_NormalPriority,
        Aa = {
            $$typeof: x,
            Consumer: null,
            Provider: null,
            _currentValue: null,
            _currentValue2: null,
            _threadCount: 0
        };

    function Oa() {
        return {
            controller: new Ta,
            data: new Map,
            refCount: 0
        }
    }

    function Da(e) {
        e.refCount--, 0 === e.refCount && La(Ma, (function() {
            e.controller.abort()
        }))
    }
    var Fa = null,
        Ra = 0,
        Ha = 0,
        Ia = null;

    function Ua() {
        if (0 === --Ra && null !== Fa) {
            null !== Ia && (Ia.status = "fulfilled");
            var e = Fa;
            Fa = null, Ha = 0, Ia = null;
            for (var t = 0; t < e.length; t++)(0, e[t])()
        }
    }
    var Wa = D.S;
    D.S = function(e, t) {
        "object" == typeof t && null !== t && "function" == typeof t.then && function(e, t) {
            if (null === Fa) {
                var n = Fa = [];
                Ra = 0, Ha = Tc(), Ia = {
                    status: "pending",
                    value: void 0,
                    then: function(e) {
                        n.push(e)
                    }
                }
            }
            Ra++, t.then(Ua, Ua)
        }(0, t), null !== Wa && Wa(e, t)
    };
    var $a = U(null);

    function Ba() {
        var e = $a.current;
        return null !== e ? e : lu.pooledCache
    }

    function qa(e, t) {
        $($a, null === t ? $a.current : t.pool)
    }

    function Va() {
        var e = Ba();
        return null === e ? null : {
            parent: Aa._currentValue,
            pool: e
        }
    }
    var Ka = Error(r(460)),
        Qa = Error(r(474)),
        Ya = Error(r(542)),
        Ga = {
            then: function() {}
        };

    function Xa(e) {
        return "fulfilled" === (e = e.status) || "rejected" === e
    }

    function Ja() {}

    function Za(e, t, n) {
        switch (void 0 === (n = e[n]) ? e.push(t) : n !== t && (t.then(Ja, Ja), t = n), t.status) {
            case "fulfilled":
                return t.value;
            case "rejected":
                throw nl(e = t.reason), e;
            default:
                if ("string" == typeof t.status) t.then(Ja, Ja);
                else {
                    if (null !== (e = lu) && 100 < e.shellSuspendCounter) throw Error(r(482));
                    (e = t).status = "pending", e.then((function(e) {
                        if ("pending" === t.status) {
                            var n = t;
                            n.status = "fulfilled", n.value = e
                        }
                    }), (function(e) {
                        if ("pending" === t.status) {
                            var n = t;
                            n.status = "rejected", n.reason = e
                        }
                    }))
                }
                switch (t.status) {
                    case "fulfilled":
                        return t.value;
                    case "rejected":
                        throw nl(e = t.reason), e
                }
                throw el = t, Ka
        }
    }
    var el = null;

    function tl() {
        if (null === el) throw Error(r(459));
        var e = el;
        return el = null, e
    }

    function nl(e) {
        if (e === Ka || e === Ya) throw Error(r(483))
    }
    var rl = !1;

    function al(e) {
        e.updateQueue = {
            baseState: e.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: {
                pending: null,
                lanes: 0,
                hiddenCallbacks: null
            },
            callbacks: null
        }
    }

    function ll(e, t) {
        e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
            baseState: e.baseState,
            firstBaseUpdate: e.firstBaseUpdate,
            lastBaseUpdate: e.lastBaseUpdate,
            shared: e.shared,
            callbacks: null
        })
    }

    function ol(e) {
        return {
            lane: e,
            tag: 0,
            payload: null,
            callback: null,
            next: null
        }
    }

    function il(e, t, n) {
        var r = e.updateQueue;
        if (null === r) return null;
        if (r = r.shared, 2 & au) {
            var a = r.pending;
            return null === a ? t.next = t : (t.next = a.next, a.next = t), r.pending = t, t = Or(e), Ar(e, null, n), t
        }
        return Tr(e, r, t, n), Or(e)
    }

    function sl(e, t, n) {
        if (null !== (t = t.updateQueue) && (t = t.shared, 4194048 & n)) {
            var r = t.lanes;
            n |= r &= e.pendingLanes, t.lanes = n, Pe(e, n)
        }
    }

    function ul(e, t) {
        var n = e.updateQueue,
            r = e.alternate;
        if (null !== r && n === (r = r.updateQueue)) {
            var a = null,
                l = null;
            if (null !== (n = n.firstBaseUpdate)) {
                do {
                    var o = {
                        lane: n.lane,
                        tag: n.tag,
                        payload: n.payload,
                        callback: null,
                        next: null
                    };
                    null === l ? a = l = o : l = l.next = o, n = n.next
                } while (null !== n);
                null === l ? a = l = t : l = l.next = t
            } else a = l = t;
            return n = {
                baseState: r.baseState,
                firstBaseUpdate: a,
                lastBaseUpdate: l,
                shared: r.shared,
                callbacks: r.callbacks
            }, void(e.updateQueue = n)
        }
        null === (e = n.lastBaseUpdate) ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t
    }
    var cl = !1;

    function dl() {
        if (cl) {
            if (null !== Ia) throw Ia
        }
    }

    function fl(e, t, n, r) {
        cl = !1;
        var a = e.updateQueue;
        rl = !1;
        var l = a.firstBaseUpdate,
            o = a.lastBaseUpdate,
            i = a.shared.pending;
        if (null !== i) {
            a.shared.pending = null;
            var s = i,
                u = s.next;
            s.next = null, null === o ? l = u : o.next = u, o = s;
            var c = e.alternate;
            null !== c && ((i = (c = c.updateQueue).lastBaseUpdate) !== o && (null === i ? c.firstBaseUpdate = u : i.next = u, c.lastBaseUpdate = s))
        }
        if (null !== l) {
            var f = a.baseState;
            for (o = 0, c = u = s = null, i = l;;) {
                var p = -536870913 & i.lane,
                    h = p !== i.lane;
                if (h ? (iu & p) === p : (r & p) === p) {
                    0 !== p && p === Ha && (cl = !0), null !== c && (c = c.next = {
                        lane: 0,
                        tag: i.tag,
                        payload: i.payload,
                        callback: null,
                        next: null
                    });
                    e: {
                        var m = e,
                            g = i;p = t;
                        var b = n;
                        switch (g.tag) {
                            case 1:
                                if ("function" == typeof(m = g.payload)) {
                                    f = m.call(b, f, p);
                                    break e
                                }
                                f = m;
                                break e;
                            case 3:
                                m.flags = -65537 & m.flags | 128;
                            case 0:
                                if (null == (p = "function" == typeof(m = g.payload) ? m.call(b, f, p) : m)) break e;
                                f = d({}, f, p);
                                break e;
                            case 2:
                                rl = !0
                        }
                    }
                    null !== (p = i.callback) && (e.flags |= 64, h && (e.flags |= 8192), null === (h = a.callbacks) ? a.callbacks = [p] : h.push(p))
                } else h = {
                    lane: p,
                    tag: i.tag,
                    payload: i.payload,
                    callback: i.callback,
                    next: null
                }, null === c ? (u = c = h, s = f) : c = c.next = h, o |= p;
                if (null === (i = i.next)) {
                    if (null === (i = a.shared.pending)) break;
                    i = (h = i).next, h.next = null, a.lastBaseUpdate = h, a.shared.pending = null
                }
            }
            null === c && (s = f), a.baseState = s, a.firstBaseUpdate = u, a.lastBaseUpdate = c, null === l && (a.shared.lanes = 0), mu |= o, e.lanes = o, e.memoizedState = f
        }
    }

    function pl(e, t) {
        if ("function" != typeof e) throw Error(r(191, e));
        e.call(t)
    }

    function hl(e, t) {
        var n = e.callbacks;
        if (null !== n)
            for (e.callbacks = null, e = 0; e < n.length; e++) pl(n[e], t)
    }
    var ml = U(null),
        gl = U(0);

    function bl(e, t) {
        $(gl, e = pu), $(ml, t), pu = e | t.baseLanes
    }

    function yl() {
        $(gl, pu), $(ml, ml.current)
    }

    function vl() {
        pu = gl.current, W(ml), W(gl)
    }
    var xl = 0,
        wl = null,
        kl = null,
        Sl = null,
        Nl = !1,
        El = !1,
        Cl = !1,
        jl = 0,
        zl = 0,
        Pl = null,
        _l = 0;

    function Tl() {
        throw Error(r(321))
    }

    function Ll(e, t) {
        if (null === t) return !1;
        for (var n = 0; n < t.length && n < e.length; n++)
            if (!Xn(e[n], t[n])) return !1;
        return !0
    }

    function Ml(e, t, n, r, a, l) {
        return xl = l, wl = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, D.H = null === e || null === e.memoizedState ? Qo : Yo, Cl = !1, l = n(r, a), Cl = !1, El && (l = Ol(t, n, r, a)), Al(e), l
    }

    function Al(e) {
        D.H = Ko;
        var t = null !== kl && null !== kl.next;
        if (xl = 0, Sl = kl = wl = null, Nl = !1, zl = 0, Pl = null, t) throw Error(r(300));
        null === e || Pi || null !== (e = e.dependencies) && Ca(e) && (Pi = !0)
    }

    function Ol(e, t, n, a) {
        wl = e;
        var l = 0;
        do {
            if (El && (Pl = null), zl = 0, El = !1, 25 <= l) throw Error(r(301));
            if (l += 1, Sl = kl = null, null != e.updateQueue) {
                var o = e.updateQueue;
                o.lastEffect = null, o.events = null, o.stores = null, null != o.memoCache && (o.memoCache.index = 0)
            }
            D.H = Go, o = t(n, a)
        } while (El);
        return o
    }

    function Dl() {
        var e = D.H,
            t = e.useState()[0];
        return t = "function" == typeof t.then ? Wl(t) : t, e = e.useState()[0], (null !== kl ? kl.memoizedState : null) !== e && (wl.flags |= 1024), t
    }

    function Fl() {
        var e = 0 !== jl;
        return jl = 0, e
    }

    function Rl(e, t, n) {
        t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~n
    }

    function Hl(e) {
        if (Nl) {
            for (e = e.memoizedState; null !== e;) {
                var t = e.queue;
                null !== t && (t.pending = null), e = e.next
            }
            Nl = !1
        }
        xl = 0, Sl = kl = wl = null, El = !1, zl = jl = 0, Pl = null
    }

    function Il() {
        var e = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null
        };
        return null === Sl ? wl.memoizedState = Sl = e : Sl = Sl.next = e, Sl
    }

    function Ul() {
        if (null === kl) {
            var e = wl.alternate;
            e = null !== e ? e.memoizedState : null
        } else e = kl.next;
        var t = null === Sl ? wl.memoizedState : Sl.next;
        if (null !== t) Sl = t, kl = e;
        else {
            if (null === e) {
                if (null === wl.alternate) throw Error(r(467));
                throw Error(r(310))
            }
            e = {
                memoizedState: (kl = e).memoizedState,
                baseState: kl.baseState,
                baseQueue: kl.baseQueue,
                queue: kl.queue,
                next: null
            }, null === Sl ? wl.memoizedState = Sl = e : Sl = Sl.next = e
        }
        return Sl
    }

    function Wl(e) {
        var t = zl;
        return zl += 1, null === Pl && (Pl = []), e = Za(Pl, e, t), t = wl, null === (null === Sl ? t.memoizedState : Sl.next) && (t = t.alternate, D.H = null === t || null === t.memoizedState ? Qo : Yo), e
    }

    function $l(e) {
        if (null !== e && "object" == typeof e) {
            if ("function" == typeof e.then) return Wl(e);
            if (e.$$typeof === x) return za(e)
        }
        throw Error(r(438, String(e)))
    }

    function Bl(e) {
        var t = null,
            n = wl.updateQueue;
        if (null !== n && (t = n.memoCache), null == t) {
            var r = wl.alternate;
            null !== r && (null !== (r = r.updateQueue) && (null != (r = r.memoCache) && (t = {
                data: r.data.map((function(e) {
                    return e.slice()
                })),
                index: 0
            })))
        }
        if (null == t && (t = {
                data: [],
                index: 0
            }), null === n && (n = {
                lastEffect: null,
                events: null,
                stores: null,
                memoCache: null
            }, wl.updateQueue = n), n.memoCache = t, void 0 === (n = t.data[t.index]))
            for (n = t.data[t.index] = Array(e), r = 0; r < e; r++) n[r] = _;
        return t.index++, n
    }

    function ql(e, t) {
        return "function" == typeof t ? t(e) : t
    }

    function Vl(e) {
        return Kl(Ul(), kl, e)
    }

    function Kl(e, t, n) {
        var a = e.queue;
        if (null === a) throw Error(r(311));
        a.lastRenderedReducer = n;
        var l = e.baseQueue,
            o = a.pending;
        if (null !== o) {
            if (null !== l) {
                var i = l.next;
                l.next = o.next, o.next = i
            }
            t.baseQueue = l = o, a.pending = null
        }
        if (o = e.baseState, null === l) e.memoizedState = o;
        else {
            var s = i = null,
                u = null,
                c = t = l.next,
                d = !1;
            do {
                var f = -536870913 & c.lane;
                if (f !== c.lane ? (iu & f) === f : (xl & f) === f) {
                    var p = c.revertLane;
                    if (0 === p) null !== u && (u = u.next = {
                        lane: 0,
                        revertLane: 0,
                        action: c.action,
                        hasEagerState: c.hasEagerState,
                        eagerState: c.eagerState,
                        next: null
                    }), f === Ha && (d = !0);
                    else {
                        if ((xl & p) === p) {
                            c = c.next, p === Ha && (d = !0);
                            continue
                        }
                        f = {
                            lane: 0,
                            revertLane: c.revertLane,
                            action: c.action,
                            hasEagerState: c.hasEagerState,
                            eagerState: c.eagerState,
                            next: null
                        }, null === u ? (s = u = f, i = o) : u = u.next = f, wl.lanes |= p, mu |= p
                    }
                    f = c.action, Cl && n(o, f), o = c.hasEagerState ? c.eagerState : n(o, f)
                } else p = {
                    lane: f,
                    revertLane: c.revertLane,
                    action: c.action,
                    hasEagerState: c.hasEagerState,
                    eagerState: c.eagerState,
                    next: null
                }, null === u ? (s = u = p, i = o) : u = u.next = p, wl.lanes |= f, mu |= f;
                c = c.next
            } while (null !== c && c !== t);
            if (null === u ? i = o : u.next = s, !Xn(o, e.memoizedState) && (Pi = !0, d && null !== (n = Ia))) throw n;
            e.memoizedState = o, e.baseState = i, e.baseQueue = u, a.lastRenderedState = o
        }
        return null === l && (a.lanes = 0), [e.memoizedState, a.dispatch]
    }

    function Ql(e) {
        var t = Ul(),
            n = t.queue;
        if (null === n) throw Error(r(311));
        n.lastRenderedReducer = e;
        var a = n.dispatch,
            l = n.pending,
            o = t.memoizedState;
        if (null !== l) {
            n.pending = null;
            var i = l = l.next;
            do {
                o = e(o, i.action), i = i.next
            } while (i !== l);
            Xn(o, t.memoizedState) || (Pi = !0), t.memoizedState = o, null === t.baseQueue && (t.baseState = o), n.lastRenderedState = o
        }
        return [o, a]
    }

    function Yl(e, t, n) {
        var a = wl,
            l = Ul(),
            o = ia;
        if (o) {
            if (void 0 === n) throw Error(r(407));
            n = n()
        } else n = t();
        var i = !Xn((kl || l).memoizedState, n);
        if (i && (l.memoizedState = n, Pi = !0), l = l.queue, vo(2048, 8, Jl.bind(null, a, l, e), [e]), l.getSnapshot !== t || i || null !== Sl && 1 & Sl.memoizedState.tag) {
            if (a.flags |= 2048, go(9, {
                    destroy: void 0,
                    resource: void 0
                }, Xl.bind(null, a, l, n, t), null), null === lu) throw Error(r(349));
            o || 124 & xl || Gl(a, t, n)
        }
        return n
    }

    function Gl(e, t, n) {
        e.flags |= 16384, e = {
            getSnapshot: t,
            value: n
        }, null === (t = wl.updateQueue) ? (t = {
            lastEffect: null,
            events: null,
            stores: null,
            memoCache: null
        }, wl.updateQueue = t, t.stores = [e]) : null === (n = t.stores) ? t.stores = [e] : n.push(e)
    }

    function Xl(e, t, n, r) {
        t.value = n, t.getSnapshot = r, Zl(t) && eo(e)
    }

    function Jl(e, t, n) {
        return n((function() {
            Zl(t) && eo(e)
        }))
    }

    function Zl(e) {
        var t = e.getSnapshot;
        e = e.value;
        try {
            var n = t();
            return !Xn(e, n)
        } catch (r) {
            return !0
        }
    }

    function eo(e) {
        var t = Mr(e, 2);
        null !== t && Ru(t, e, 2)
    }

    function to(e) {
        var t = Il();
        if ("function" == typeof e) {
            var n = e;
            if (e = n(), Cl) {
                he(!0);
                try {
                    n()
                } finally {
                    he(!1)
                }
            }
        }
        return t.memoizedState = t.baseState = e, t.queue = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: ql,
            lastRenderedState: e
        }, t
    }

    function no(e, t, n, r) {
        return e.baseState = n, Kl(e, kl, "function" == typeof r ? r : ql)
    }

    function ro(e, t, n, a, l) {
        if (Bo(e)) throw Error(r(485));
        if (null !== (e = t.action)) {
            var o = {
                payload: l,
                action: e,
                next: null,
                isTransition: !0,
                status: "pending",
                value: null,
                reason: null,
                listeners: [],
                then: function(e) {
                    o.listeners.push(e)
                }
            };
            null !== D.T ? n(!0) : o.isTransition = !1, a(o), null === (n = t.pending) ? (o.next = t.pending = o, ao(t, o)) : (o.next = n.next, t.pending = n.next = o)
        }
    }

    function ao(e, t) {
        var n = t.action,
            r = t.payload,
            a = e.state;
        if (t.isTransition) {
            var l = D.T,
                o = {};
            D.T = o;
            try {
                var i = n(a, r),
                    s = D.S;
                null !== s && s(o, i), lo(e, t, i)
            } catch (u) {
                io(e, t, u)
            } finally {
                D.T = l
            }
        } else try {
            lo(e, t, l = n(a, r))
        } catch (c) {
            io(e, t, c)
        }
    }

    function lo(e, t, n) {
        null !== n && "object" == typeof n && "function" == typeof n.then ? n.then((function(n) {
            oo(e, t, n)
        }), (function(n) {
            return io(e, t, n)
        })) : oo(e, t, n)
    }

    function oo(e, t, n) {
        t.status = "fulfilled", t.value = n, so(t), e.state = n, null !== (t = e.pending) && ((n = t.next) === t ? e.pending = null : (n = n.next, t.next = n, ao(e, n)))
    }

    function io(e, t, n) {
        var r = e.pending;
        if (e.pending = null, null !== r) {
            r = r.next;
            do {
                t.status = "rejected", t.reason = n, so(t), t = t.next
            } while (t !== r)
        }
        e.action = null
    }

    function so(e) {
        e = e.listeners;
        for (var t = 0; t < e.length; t++)(0, e[t])()
    }

    function uo(e, t) {
        return t
    }

    function co(e, t) {
        if (ia) {
            var n = lu.formState;
            if (null !== n) {
                e: {
                    var r = wl;
                    if (ia) {
                        if (oa) {
                            t: {
                                for (var a = oa, l = ua; 8 !== a.nodeType;) {
                                    if (!l) {
                                        a = null;
                                        break t
                                    }
                                    if (null === (a = vd(a.nextSibling))) {
                                        a = null;
                                        break t
                                    }
                                }
                                a = "F!" === (l = a.data) || "F" === l ? a : null
                            }
                            if (a) {
                                oa = vd(a.nextSibling), r = "F!" === a.data;
                                break e
                            }
                        }
                        da(r)
                    }
                    r = !1
                }
                r && (t = n[0])
            }
        }
        return (n = Il()).memoizedState = n.baseState = t, r = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: uo,
            lastRenderedState: t
        }, n.queue = r, n = Uo.bind(null, wl, r), r.dispatch = n, r = to(!1), l = $o.bind(null, wl, !1, r.queue), a = {
            state: t,
            dispatch: null,
            action: e,
            pending: null
        }, (r = Il()).queue = a, n = ro.bind(null, wl, a, l, n), a.dispatch = n, r.memoizedState = e, [t, n, !1]
    }

    function fo(e) {
        return po(Ul(), kl, e)
    }

    function po(e, t, n) {
        if (t = Kl(e, t, uo)[0], e = Vl(ql)[0], "object" == typeof t && null !== t && "function" == typeof t.then) try {
            var r = Wl(t)
        } catch (o) {
            if (o === Ka) throw Ya;
            throw o
        } else r = t;
        var a = (t = Ul()).queue,
            l = a.dispatch;
        return n !== t.memoizedState && (wl.flags |= 2048, go(9, {
            destroy: void 0,
            resource: void 0
        }, ho.bind(null, a, n), null)), [r, l, e]
    }

    function ho(e, t) {
        e.action = t
    }

    function mo(e) {
        var t = Ul(),
            n = kl;
        if (null !== n) return po(t, n, e);
        Ul(), t = t.memoizedState;
        var r = (n = Ul()).queue.dispatch;
        return n.memoizedState = e, [t, r, !1]
    }

    function go(e, t, n, r) {
        return e = {
            tag: e,
            create: n,
            deps: r,
            inst: t,
            next: null
        }, null === (t = wl.updateQueue) && (t = {
            lastEffect: null,
            events: null,
            stores: null,
            memoCache: null
        }, wl.updateQueue = t), null === (n = t.lastEffect) ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e), e
    }

    function bo() {
        return Ul().memoizedState
    }

    function yo(e, t, n, r) {
        var a = Il();
        r = void 0 === r ? null : r, wl.flags |= e, a.memoizedState = go(1 | t, {
            destroy: void 0,
            resource: void 0
        }, n, r)
    }

    function vo(e, t, n, r) {
        var a = Ul();
        r = void 0 === r ? null : r;
        var l = a.memoizedState.inst;
        null !== kl && null !== r && Ll(r, kl.memoizedState.deps) ? a.memoizedState = go(t, l, n, r) : (wl.flags |= e, a.memoizedState = go(1 | t, l, n, r))
    }

    function xo(e, t) {
        yo(8390656, 8, e, t)
    }

    function wo(e, t) {
        vo(2048, 8, e, t)
    }

    function ko(e, t) {
        return vo(4, 2, e, t)
    }

    function So(e, t) {
        return vo(4, 4, e, t)
    }

    function No(e, t) {
        if ("function" == typeof t) {
            e = e();
            var n = t(e);
            return function() {
                "function" == typeof n ? n() : t(null)
            }
        }
        if (null != t) return e = e(), t.current = e,
            function() {
                t.current = null
            }
    }

    function Eo(e, t, n) {
        n = null != n ? n.concat([e]) : null, vo(4, 4, No.bind(null, t, e), n)
    }

    function Co() {}

    function jo(e, t) {
        var n = Ul();
        t = void 0 === t ? null : t;
        var r = n.memoizedState;
        return null !== t && Ll(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e)
    }

    function zo(e, t) {
        var n = Ul();
        t = void 0 === t ? null : t;
        var r = n.memoizedState;
        if (null !== t && Ll(t, r[1])) return r[0];
        if (r = e(), Cl) {
            he(!0);
            try {
                e()
            } finally {
                he(!1)
            }
        }
        return n.memoizedState = [r, t], r
    }

    function Po(e, t, n) {
        return void 0 === n || 1073741824 & xl ? e.memoizedState = t : (e.memoizedState = n, e = Fu(), wl.lanes |= e, mu |= e, n)
    }

    function _o(e, t, n, r) {
        return Xn(n, t) ? n : null !== ml.current ? (e = Po(e, n, r), Xn(e, t) || (Pi = !0), e) : 42 & xl ? (e = Fu(), wl.lanes |= e, mu |= e, t) : (Pi = !0, e.memoizedState = n)
    }

    function To(e, t, n, r, a) {
        var l = F.p;
        F.p = 0 !== l && 8 > l ? l : 8;
        var o, i, s, u = D.T,
            c = {};
        D.T = c, $o(e, !1, t, n);
        try {
            var d = a(),
                f = D.S;
            if (null !== f && f(c, d), null !== d && "object" == typeof d && "function" == typeof d.then) Wo(e, t, (o = r, i = [], s = {
                status: "pending",
                value: null,
                reason: null,
                then: function(e) {
                    i.push(e)
                }
            }, d.then((function() {
                s.status = "fulfilled", s.value = o;
                for (var e = 0; e < i.length; e++)(0, i[e])(o)
            }), (function(e) {
                for (s.status = "rejected", s.reason = e, e = 0; e < i.length; e++)(0, i[e])(void 0)
            })), s), Du());
            else Wo(e, t, r, Du())
        } catch (p) {
            Wo(e, t, {
                then: function() {},
                status: "rejected",
                reason: p
            }, Du())
        } finally {
            F.p = l, D.T = u
        }
    }

    function Lo() {}

    function Mo(e, t, n, a) {
        if (5 !== e.tag) throw Error(r(476));
        var l = Ao(e).queue;
        To(e, l, t, R, null === n ? Lo : function() {
            return Oo(e), n(a)
        })
    }

    function Ao(e) {
        var t = e.memoizedState;
        if (null !== t) return t;
        var n = {};
        return (t = {
            memoizedState: R,
            baseState: R,
            baseQueue: null,
            queue: {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: ql,
                lastRenderedState: R
            },
            next: null
        }).next = {
            memoizedState: n,
            baseState: n,
            baseQueue: null,
            queue: {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: ql,
                lastRenderedState: n
            },
            next: null
        }, e.memoizedState = t, null !== (e = e.alternate) && (e.memoizedState = t), t
    }

    function Oo(e) {
        Wo(e, Ao(e).next.queue, {}, Du())
    }

    function Do() {
        return za(Gd)
    }

    function Fo() {
        return Ul().memoizedState
    }

    function Ro() {
        return Ul().memoizedState
    }

    function Ho(e) {
        for (var t = e.return; null !== t;) {
            switch (t.tag) {
                case 24:
                case 3:
                    var n = Du(),
                        r = il(t, e = ol(n), n);
                    return null !== r && (Ru(r, t, n), sl(r, t, n)), t = {
                        cache: Oa()
                    }, void(e.payload = t)
            }
            t = t.return
        }
    }

    function Io(e, t, n) {
        var r = Du();
        n = {
            lane: r,
            revertLane: 0,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null
        }, Bo(e) ? qo(t, n) : null !== (n = Lr(e, t, n, r)) && (Ru(n, e, r), Vo(n, t, r))
    }

    function Uo(e, t, n) {
        Wo(e, t, n, Du())
    }

    function Wo(e, t, n, r) {
        var a = {
            lane: r,
            revertLane: 0,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null
        };
        if (Bo(e)) qo(t, a);
        else {
            var l = e.alternate;
            if (0 === e.lanes && (null === l || 0 === l.lanes) && null !== (l = t.lastRenderedReducer)) try {
                var o = t.lastRenderedState,
                    i = l(o, n);
                if (a.hasEagerState = !0, a.eagerState = i, Xn(i, o)) return Tr(e, t, a, 0), null === lu && _r(), !1
            } catch (s) {}
            if (null !== (n = Lr(e, t, a, r))) return Ru(n, e, r), Vo(n, t, r), !0
        }
        return !1
    }

    function $o(e, t, n, a) {
        if (a = {
                lane: 2,
                revertLane: Tc(),
                action: a,
                hasEagerState: !1,
                eagerState: null,
                next: null
            }, Bo(e)) {
            if (t) throw Error(r(479))
        } else null !== (t = Lr(e, n, a, 2)) && Ru(t, e, 2)
    }

    function Bo(e) {
        var t = e.alternate;
        return e === wl || null !== t && t === wl
    }

    function qo(e, t) {
        El = Nl = !0;
        var n = e.pending;
        null === n ? t.next = t : (t.next = n.next, n.next = t), e.pending = t
    }

    function Vo(e, t, n) {
        if (4194048 & n) {
            var r = t.lanes;
            n |= r &= e.pendingLanes, t.lanes = n, Pe(e, n)
        }
    }
    var Ko = {
            readContext: za,
            use: $l,
            useCallback: Tl,
            useContext: Tl,
            useEffect: Tl,
            useImperativeHandle: Tl,
            useLayoutEffect: Tl,
            useInsertionEffect: Tl,
            useMemo: Tl,
            useReducer: Tl,
            useRef: Tl,
            useState: Tl,
            useDebugValue: Tl,
            useDeferredValue: Tl,
            useTransition: Tl,
            useSyncExternalStore: Tl,
            useId: Tl,
            useHostTransitionStatus: Tl,
            useFormState: Tl,
            useActionState: Tl,
            useOptimistic: Tl,
            useMemoCache: Tl,
            useCacheRefresh: Tl
        },
        Qo = {
            readContext: za,
            use: $l,
            useCallback: function(e, t) {
                return Il().memoizedState = [e, void 0 === t ? null : t], e
            },
            useContext: za,
            useEffect: xo,
            useImperativeHandle: function(e, t, n) {
                n = null != n ? n.concat([e]) : null, yo(4194308, 4, No.bind(null, t, e), n)
            },
            useLayoutEffect: function(e, t) {
                return yo(4194308, 4, e, t)
            },
            useInsertionEffect: function(e, t) {
                yo(4, 2, e, t)
            },
            useMemo: function(e, t) {
                var n = Il();
                t = void 0 === t ? null : t;
                var r = e();
                if (Cl) {
                    he(!0);
                    try {
                        e()
                    } finally {
                        he(!1)
                    }
                }
                return n.memoizedState = [r, t], r
            },
            useReducer: function(e, t, n) {
                var r = Il();
                if (void 0 !== n) {
                    var a = n(t);
                    if (Cl) {
                        he(!0);
                        try {
                            n(t)
                        } finally {
                            he(!1)
                        }
                    }
                } else a = t;
                return r.memoizedState = r.baseState = a, e = {
                    pending: null,
                    lanes: 0,
                    dispatch: null,
                    lastRenderedReducer: e,
                    lastRenderedState: a
                }, r.queue = e, e = e.dispatch = Io.bind(null, wl, e), [r.memoizedState, e]
            },
            useRef: function(e) {
                return e = {
                    current: e
                }, Il().memoizedState = e
            },
            useState: function(e) {
                var t = (e = to(e)).queue,
                    n = Uo.bind(null, wl, t);
                return t.dispatch = n, [e.memoizedState, n]
            },
            useDebugValue: Co,
            useDeferredValue: function(e, t) {
                return Po(Il(), e, t)
            },
            useTransition: function() {
                var e = to(!1);
                return e = To.bind(null, wl, e.queue, !0, !1), Il().memoizedState = e, [!1, e]
            },
            useSyncExternalStore: function(e, t, n) {
                var a = wl,
                    l = Il();
                if (ia) {
                    if (void 0 === n) throw Error(r(407));
                    n = n()
                } else {
                    if (n = t(), null === lu) throw Error(r(349));
                    124 & iu || Gl(a, t, n)
                }
                l.memoizedState = n;
                var o = {
                    value: n,
                    getSnapshot: t
                };
                return l.queue = o, xo(Jl.bind(null, a, o, e), [e]), a.flags |= 2048, go(9, {
                    destroy: void 0,
                    resource: void 0
                }, Xl.bind(null, a, o, n, t), null), n
            },
            useId: function() {
                var e = Il(),
                    t = lu.identifierPrefix;
                if (ia) {
                    var n = ea;
                    t = "«" + t + "R" + (n = (Zr & ~(1 << 32 - me(Zr) - 1)).toString(32) + n), 0 < (n = jl++) && (t += "H" + n.toString(32)), t += "»"
                } else t = "«" + t + "r" + (n = _l++).toString(32) + "»";
                return e.memoizedState = t
            },
            useHostTransitionStatus: Do,
            useFormState: co,
            useActionState: co,
            useOptimistic: function(e) {
                var t = Il();
                t.memoizedState = t.baseState = e;
                var n = {
                    pending: null,
                    lanes: 0,
                    dispatch: null,
                    lastRenderedReducer: null,
                    lastRenderedState: null
                };
                return t.queue = n, t = $o.bind(null, wl, !0, n), n.dispatch = t, [e, t]
            },
            useMemoCache: Bl,
            useCacheRefresh: function() {
                return Il().memoizedState = Ho.bind(null, wl)
            }
        },
        Yo = {
            readContext: za,
            use: $l,
            useCallback: jo,
            useContext: za,
            useEffect: wo,
            useImperativeHandle: Eo,
            useInsertionEffect: ko,
            useLayoutEffect: So,
            useMemo: zo,
            useReducer: Vl,
            useRef: bo,
            useState: function() {
                return Vl(ql)
            },
            useDebugValue: Co,
            useDeferredValue: function(e, t) {
                return _o(Ul(), kl.memoizedState, e, t)
            },
            useTransition: function() {
                var e = Vl(ql)[0],
                    t = Ul().memoizedState;
                return ["boolean" == typeof e ? e : Wl(e), t]
            },
            useSyncExternalStore: Yl,
            useId: Fo,
            useHostTransitionStatus: Do,
            useFormState: fo,
            useActionState: fo,
            useOptimistic: function(e, t) {
                return no(Ul(), 0, e, t)
            },
            useMemoCache: Bl,
            useCacheRefresh: Ro
        },
        Go = {
            readContext: za,
            use: $l,
            useCallback: jo,
            useContext: za,
            useEffect: wo,
            useImperativeHandle: Eo,
            useInsertionEffect: ko,
            useLayoutEffect: So,
            useMemo: zo,
            useReducer: Ql,
            useRef: bo,
            useState: function() {
                return Ql(ql)
            },
            useDebugValue: Co,
            useDeferredValue: function(e, t) {
                var n = Ul();
                return null === kl ? Po(n, e, t) : _o(n, kl.memoizedState, e, t)
            },
            useTransition: function() {
                var e = Ql(ql)[0],
                    t = Ul().memoizedState;
                return ["boolean" == typeof e ? e : Wl(e), t]
            },
            useSyncExternalStore: Yl,
            useId: Fo,
            useHostTransitionStatus: Do,
            useFormState: mo,
            useActionState: mo,
            useOptimistic: function(e, t) {
                var n = Ul();
                return null !== kl ? no(n, 0, e, t) : (n.baseState = e, [e, n.queue.dispatch])
            },
            useMemoCache: Bl,
            useCacheRefresh: Ro
        },
        Xo = null,
        Jo = 0;

    function Zo(e) {
        var t = Jo;
        return Jo += 1, null === Xo && (Xo = []), Za(Xo, e, t)
    }

    function ei(e, t) {
        t = t.props.ref, e.ref = void 0 !== t ? t : null
    }

    function ti(e, t) {
        if (t.$$typeof === f) throw Error(r(525));
        throw e = Object.prototype.toString.call(t), Error(r(31, "[object Object]" === e ? "object with keys {" + Object.keys(t).join(", ") + "}" : e))
    }

    function ni(e) {
        return (0, e._init)(e._payload)
    }

    function ri(e) {
        function t(t, n) {
            if (e) {
                var r = t.deletions;
                null === r ? (t.deletions = [n], t.flags |= 16) : r.push(n)
            }
        }

        function n(n, r) {
            if (!e) return null;
            for (; null !== r;) t(n, r), r = r.sibling;
            return null
        }

        function a(e) {
            for (var t = new Map; null !== e;) null !== e.key ? t.set(e.key, e) : t.set(e.index, e), e = e.sibling;
            return t
        }

        function l(e, t) {
            return (e = Ir(e, t)).index = 0, e.sibling = null, e
        }

        function o(t, n, r) {
            return t.index = r, e ? null !== (r = t.alternate) ? (r = r.index) < n ? (t.flags |= 67108866, n) : r : (t.flags |= 67108866, n) : (t.flags |= 1048576, n)
        }

        function i(t) {
            return e && null === t.alternate && (t.flags |= 67108866), t
        }

        function s(e, t, n, r) {
            return null === t || 6 !== t.tag ? ((t = Br(n, e.mode, r)).return = e, t) : ((t = l(t, n)).return = e, t)
        }

        function u(e, t, n, r) {
            var a = n.type;
            return a === m ? d(e, t, n.props.children, r, n.key) : null !== t && (t.elementType === a || "object" == typeof a && null !== a && a.$$typeof === j && ni(a) === t.type) ? (ei(t = l(t, n.props), n), t.return = e, t) : (ei(t = Wr(n.type, n.key, n.props, null, e.mode, r), n), t.return = e, t)
        }

        function c(e, t, n, r) {
            return null === t || 4 !== t.tag || t.stateNode.containerInfo !== n.containerInfo || t.stateNode.implementation !== n.implementation ? ((t = qr(n, e.mode, r)).return = e, t) : ((t = l(t, n.children || [])).return = e, t)
        }

        function d(e, t, n, r, a) {
            return null === t || 7 !== t.tag ? ((t = $r(n, e.mode, r, a)).return = e, t) : ((t = l(t, n)).return = e, t)
        }

        function f(e, t, n) {
            if ("string" == typeof t && "" !== t || "number" == typeof t || "bigint" == typeof t) return (t = Br("" + t, e.mode, n)).return = e, t;
            if ("object" == typeof t && null !== t) {
                switch (t.$$typeof) {
                    case p:
                        return ei(n = Wr(t.type, t.key, t.props, null, e.mode, n), t), n.return = e, n;
                    case h:
                        return (t = qr(t, e.mode, n)).return = e, t;
                    case j:
                        return f(e, t = (0, t._init)(t._payload), n)
                }
                if (O(t) || L(t)) return (t = $r(t, e.mode, n, null)).return = e, t;
                if ("function" == typeof t.then) return f(e, Zo(t), n);
                if (t.$$typeof === x) return f(e, Pa(e, t), n);
                ti(e, t)
            }
            return null
        }

        function g(e, t, n, r) {
            var a = null !== t ? t.key : null;
            if ("string" == typeof n && "" !== n || "number" == typeof n || "bigint" == typeof n) return null !== a ? null : s(e, t, "" + n, r);
            if ("object" == typeof n && null !== n) {
                switch (n.$$typeof) {
                    case p:
                        return n.key === a ? u(e, t, n, r) : null;
                    case h:
                        return n.key === a ? c(e, t, n, r) : null;
                    case j:
                        return g(e, t, n = (a = n._init)(n._payload), r)
                }
                if (O(n) || L(n)) return null !== a ? null : d(e, t, n, r, null);
                if ("function" == typeof n.then) return g(e, t, Zo(n), r);
                if (n.$$typeof === x) return g(e, t, Pa(e, n), r);
                ti(e, n)
            }
            return null
        }

        function b(e, t, n, r, a) {
            if ("string" == typeof r && "" !== r || "number" == typeof r || "bigint" == typeof r) return s(t, e = e.get(n) || null, "" + r, a);
            if ("object" == typeof r && null !== r) {
                switch (r.$$typeof) {
                    case p:
                        return u(t, e = e.get(null === r.key ? n : r.key) || null, r, a);
                    case h:
                        return c(t, e = e.get(null === r.key ? n : r.key) || null, r, a);
                    case j:
                        return b(e, t, n, r = (0, r._init)(r._payload), a)
                }
                if (O(r) || L(r)) return d(t, e = e.get(n) || null, r, a, null);
                if ("function" == typeof r.then) return b(e, t, n, Zo(r), a);
                if (r.$$typeof === x) return b(e, t, n, Pa(t, r), a);
                ti(t, r)
            }
            return null
        }

        function y(s, u, c, d) {
            if ("object" == typeof c && null !== c && c.type === m && null === c.key && (c = c.props.children), "object" == typeof c && null !== c) {
                switch (c.$$typeof) {
                    case p:
                        e: {
                            for (var v = c.key; null !== u;) {
                                if (u.key === v) {
                                    if ((v = c.type) === m) {
                                        if (7 === u.tag) {
                                            n(s, u.sibling), (d = l(u, c.props.children)).return = s, s = d;
                                            break e
                                        }
                                    } else if (u.elementType === v || "object" == typeof v && null !== v && v.$$typeof === j && ni(v) === u.type) {
                                        n(s, u.sibling), ei(d = l(u, c.props), c), d.return = s, s = d;
                                        break e
                                    }
                                    n(s, u);
                                    break
                                }
                                t(s, u), u = u.sibling
                            }
                            c.type === m ? ((d = $r(c.props.children, s.mode, d, c.key)).return = s, s = d) : (ei(d = Wr(c.type, c.key, c.props, null, s.mode, d), c), d.return = s, s = d)
                        }
                        return i(s);
                    case h:
                        e: {
                            for (v = c.key; null !== u;) {
                                if (u.key === v) {
                                    if (4 === u.tag && u.stateNode.containerInfo === c.containerInfo && u.stateNode.implementation === c.implementation) {
                                        n(s, u.sibling), (d = l(u, c.children || [])).return = s, s = d;
                                        break e
                                    }
                                    n(s, u);
                                    break
                                }
                                t(s, u), u = u.sibling
                            }(d = qr(c, s.mode, d)).return = s,
                            s = d
                        }
                        return i(s);
                    case j:
                        return y(s, u, c = (v = c._init)(c._payload), d)
                }
                if (O(c)) return function(r, l, i, s) {
                    for (var u = null, c = null, d = l, p = l = 0, h = null; null !== d && p < i.length; p++) {
                        d.index > p ? (h = d, d = null) : h = d.sibling;
                        var m = g(r, d, i[p], s);
                        if (null === m) {
                            null === d && (d = h);
                            break
                        }
                        e && d && null === m.alternate && t(r, d), l = o(m, l, p), null === c ? u = m : c.sibling = m, c = m, d = h
                    }
                    if (p === i.length) return n(r, d), ia && ta(r, p), u;
                    if (null === d) {
                        for (; p < i.length; p++) null !== (d = f(r, i[p], s)) && (l = o(d, l, p), null === c ? u = d : c.sibling = d, c = d);
                        return ia && ta(r, p), u
                    }
                    for (d = a(d); p < i.length; p++) null !== (h = b(d, r, p, i[p], s)) && (e && null !== h.alternate && d.delete(null === h.key ? p : h.key), l = o(h, l, p), null === c ? u = h : c.sibling = h, c = h);
                    return e && d.forEach((function(e) {
                        return t(r, e)
                    })), ia && ta(r, p), u
                }(s, u, c, d);
                if (L(c)) {
                    if ("function" != typeof(v = L(c))) throw Error(r(150));
                    return function(l, i, s, u) {
                        if (null == s) throw Error(r(151));
                        for (var c = null, d = null, p = i, h = i = 0, m = null, y = s.next(); null !== p && !y.done; h++, y = s.next()) {
                            p.index > h ? (m = p, p = null) : m = p.sibling;
                            var v = g(l, p, y.value, u);
                            if (null === v) {
                                null === p && (p = m);
                                break
                            }
                            e && p && null === v.alternate && t(l, p), i = o(v, i, h), null === d ? c = v : d.sibling = v, d = v, p = m
                        }
                        if (y.done) return n(l, p), ia && ta(l, h), c;
                        if (null === p) {
                            for (; !y.done; h++, y = s.next()) null !== (y = f(l, y.value, u)) && (i = o(y, i, h), null === d ? c = y : d.sibling = y, d = y);
                            return ia && ta(l, h), c
                        }
                        for (p = a(p); !y.done; h++, y = s.next()) null !== (y = b(p, l, h, y.value, u)) && (e && null !== y.alternate && p.delete(null === y.key ? h : y.key), i = o(y, i, h), null === d ? c = y : d.sibling = y, d = y);
                        return e && p.forEach((function(e) {
                            return t(l, e)
                        })), ia && ta(l, h), c
                    }(s, u, c = v.call(c), d)
                }
                if ("function" == typeof c.then) return y(s, u, Zo(c), d);
                if (c.$$typeof === x) return y(s, u, Pa(s, c), d);
                ti(s, c)
            }
            return "string" == typeof c && "" !== c || "number" == typeof c || "bigint" == typeof c ? (c = "" + c, null !== u && 6 === u.tag ? (n(s, u.sibling), (d = l(u, c)).return = s, s = d) : (n(s, u), (d = Br(c, s.mode, d)).return = s, s = d), i(s)) : n(s, u)
        }
        return function(e, t, n, r) {
            try {
                Jo = 0;
                var a = y(e, t, n, r);
                return Xo = null, a
            } catch (o) {
                if (o === Ka || o === Ya) throw o;
                var l = Rr(29, o, null, e.mode);
                return l.lanes = r, l.return = e, l
            }
        }
    }
    var ai = ri(!0),
        li = ri(!1),
        oi = U(null),
        ii = null;

    function si(e) {
        var t = e.alternate;
        $(fi, 1 & fi.current), $(oi, e), null === ii && (null === t || null !== ml.current || null !== t.memoizedState) && (ii = e)
    }

    function ui(e) {
        if (22 === e.tag) {
            if ($(fi, fi.current), $(oi, e), null === ii) {
                var t = e.alternate;
                null !== t && null !== t.memoizedState && (ii = e)
            }
        } else ci()
    }

    function ci() {
        $(fi, fi.current), $(oi, oi.current)
    }

    function di(e) {
        W(oi), ii === e && (ii = null), W(fi)
    }
    var fi = U(0);

    function pi(e) {
        for (var t = e; null !== t;) {
            if (13 === t.tag) {
                var n = t.memoizedState;
                if (null !== n && (null === (n = n.dehydrated) || "$?" === n.data || yd(n))) return t
            } else if (19 === t.tag && void 0 !== t.memoizedProps.revealOrder) {
                if (128 & t.flags) return t
            } else if (null !== t.child) {
                t.child.return = t, t = t.child;
                continue
            }
            if (t === e) break;
            for (; null === t.sibling;) {
                if (null === t.return || t.return === e) return null;
                t = t.return
            }
            t.sibling.return = t.return, t = t.sibling
        }
        return null
    }

    function hi(e, t, n, r) {
        n = null == (n = n(r, t = e.memoizedState)) ? t : d({}, t, n), e.memoizedState = n, 0 === e.lanes && (e.updateQueue.baseState = n)
    }
    var mi = {
        enqueueSetState: function(e, t, n) {
            e = e._reactInternals;
            var r = Du(),
                a = ol(r);
            a.payload = t, null != n && (a.callback = n), null !== (t = il(e, a, r)) && (Ru(t, e, r), sl(t, e, r))
        },
        enqueueReplaceState: function(e, t, n) {
            e = e._reactInternals;
            var r = Du(),
                a = ol(r);
            a.tag = 1, a.payload = t, null != n && (a.callback = n), null !== (t = il(e, a, r)) && (Ru(t, e, r), sl(t, e, r))
        },
        enqueueForceUpdate: function(e, t) {
            e = e._reactInternals;
            var n = Du(),
                r = ol(n);
            r.tag = 2, null != t && (r.callback = t), null !== (t = il(e, r, n)) && (Ru(t, e, n), sl(t, e, n))
        }
    };

    function gi(e, t, n, r, a, l, o) {
        return "function" == typeof(e = e.stateNode).shouldComponentUpdate ? e.shouldComponentUpdate(r, l, o) : !t.prototype || !t.prototype.isPureReactComponent || (!Jn(n, r) || !Jn(a, l))
    }

    function bi(e, t, n, r) {
        e = t.state, "function" == typeof t.componentWillReceiveProps && t.componentWillReceiveProps(n, r), "function" == typeof t.UNSAFE_componentWillReceiveProps && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && mi.enqueueReplaceState(t, t.state, null)
    }

    function yi(e, t) {
        var n = t;
        if ("ref" in t)
            for (var r in n = {}, t) "ref" !== r && (n[r] = t[r]);
        if (e = e.defaultProps)
            for (var a in n === t && (n = d({}, n)), e) void 0 === n[a] && (n[a] = e[a]);
        return n
    }
    var vi = "function" == typeof reportError ? reportError : function(e) {
        if ("object" == typeof window && "function" == typeof window.ErrorEvent) {
            var t = new window.ErrorEvent("error", {
                bubbles: !0,
                cancelable: !0,
                message: "object" == typeof e && null !== e && "string" == typeof e.message ? String(e.message) : String(e),
                error: e
            });
            if (!window.dispatchEvent(t)) return
        } else if ("object" == typeof process && "function" == typeof process.emit) return void process.emit("uncaughtException", e);
        console.error(e)
    };

    function xi(e) {
        vi(e)
    }

    function wi(e) {
        console.error(e)
    }

    function ki(e) {
        vi(e)
    }

    function Si(e, t) {
        try {
            (0, e.onUncaughtError)(t.value, {
                componentStack: t.stack
            })
        } catch (n) {
            setTimeout((function() {
                throw n
            }))
        }
    }

    function Ni(e, t, n) {
        try {
            (0, e.onCaughtError)(n.value, {
                componentStack: n.stack,
                errorBoundary: 1 === t.tag ? t.stateNode : null
            })
        } catch (r) {
            setTimeout((function() {
                throw r
            }))
        }
    }

    function Ei(e, t, n) {
        return (n = ol(n)).tag = 3, n.payload = {
            element: null
        }, n.callback = function() {
            Si(e, t)
        }, n
    }

    function Ci(e) {
        return (e = ol(e)).tag = 3, e
    }

    function ji(e, t, n, r) {
        var a = n.type.getDerivedStateFromError;
        if ("function" == typeof a) {
            var l = r.value;
            e.payload = function() {
                return a(l)
            }, e.callback = function() {
                Ni(t, n, r)
            }
        }
        var o = n.stateNode;
        null !== o && "function" == typeof o.componentDidCatch && (e.callback = function() {
            Ni(t, n, r), "function" != typeof a && (null === Cu ? Cu = new Set([this]) : Cu.add(this));
            var e = r.stack;
            this.componentDidCatch(r.value, {
                componentStack: null !== e ? e : ""
            })
        })
    }
    var zi = Error(r(461)),
        Pi = !1;

    function _i(e, t, n, r) {
        t.child = null === e ? li(t, null, n, r) : ai(t, e.child, n, r)
    }

    function Ti(e, t, n, r, a) {
        n = n.render;
        var l = t.ref;
        if ("ref" in r) {
            var o = {};
            for (var i in r) "ref" !== i && (o[i] = r[i])
        } else o = r;
        return ja(t), r = Ml(e, t, n, o, l, a), i = Fl(), null === e || Pi ? (ia && i && ra(t), t.flags |= 1, _i(e, t, r, a), t.child) : (Rl(e, t, a), Xi(e, t, a))
    }

    function Li(e, t, n, r, a) {
        if (null === e) {
            var l = n.type;
            return "function" != typeof l || Hr(l) || void 0 !== l.defaultProps || null !== n.compare ? ((e = Wr(n.type, null, r, t, t.mode, a)).ref = t.ref, e.return = t, t.child = e) : (t.tag = 15, t.type = l, Mi(e, t, l, r, a))
        }
        if (l = e.child, !Ji(e, a)) {
            var o = l.memoizedProps;
            if ((n = null !== (n = n.compare) ? n : Jn)(o, r) && e.ref === t.ref) return Xi(e, t, a)
        }
        return t.flags |= 1, (e = Ir(l, r)).ref = t.ref, e.return = t, t.child = e
    }

    function Mi(e, t, n, r, a) {
        if (null !== e) {
            var l = e.memoizedProps;
            if (Jn(l, r) && e.ref === t.ref) {
                if (Pi = !1, t.pendingProps = r = l, !Ji(e, a)) return t.lanes = e.lanes, Xi(e, t, a);
                131072 & e.flags && (Pi = !0)
            }
        }
        return Fi(e, t, n, r, a)
    }

    function Ai(e, t, n) {
        var r = t.pendingProps,
            a = r.children,
            l = null !== e ? e.memoizedState : null;
        if ("hidden" === r.mode) {
            if (128 & t.flags) {
                if (r = null !== l ? l.baseLanes | n : n, null !== e) {
                    for (a = t.child = e.child, l = 0; null !== a;) l = l | a.lanes | a.childLanes, a = a.sibling;
                    t.childLanes = l & ~r
                } else t.childLanes = 0, t.child = null;
                return Oi(e, t, r, n)
            }
            if (!(536870912 & n)) return t.lanes = t.childLanes = 536870912, Oi(e, t, null !== l ? l.baseLanes | n : n, n);
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null
            }, null !== e && qa(0, null !== l ? l.cachePool : null), null !== l ? bl(t, l) : yl(), ui(t)
        } else null !== l ? (qa(0, l.cachePool), bl(t, l), ci(), t.memoizedState = null) : (null !== e && qa(0, null), yl(), ci());
        return _i(e, t, a, n), t.child
    }

    function Oi(e, t, n, r) {
        var a = Ba();
        return a = null === a ? null : {
            parent: Aa._currentValue,
            pool: a
        }, t.memoizedState = {
            baseLanes: n,
            cachePool: a
        }, null !== e && qa(0, null), yl(), ui(t), null !== e && Ea(e, t, r, !0), null
    }

    function Di(e, t) {
        var n = t.ref;
        if (null === n) null !== e && null !== e.ref && (t.flags |= 4194816);
        else {
            if ("function" != typeof n && "object" != typeof n) throw Error(r(284));
            null !== e && e.ref === n || (t.flags |= 4194816)
        }
    }

    function Fi(e, t, n, r, a) {
        return ja(t), n = Ml(e, t, n, r, void 0, a), r = Fl(), null === e || Pi ? (ia && r && ra(t), t.flags |= 1, _i(e, t, n, a), t.child) : (Rl(e, t, a), Xi(e, t, a))
    }

    function Ri(e, t, n, r, a, l) {
        return ja(t), t.updateQueue = null, n = Ol(t, r, n, a), Al(e), r = Fl(), null === e || Pi ? (ia && r && ra(t), t.flags |= 1, _i(e, t, n, l), t.child) : (Rl(e, t, l), Xi(e, t, l))
    }

    function Hi(e, t, n, r, a) {
        if (ja(t), null === t.stateNode) {
            var l = Dr,
                o = n.contextType;
            "object" == typeof o && null !== o && (l = za(o)), l = new n(r, l), t.memoizedState = null !== l.state && void 0 !== l.state ? l.state : null, l.updater = mi, t.stateNode = l, l._reactInternals = t, (l = t.stateNode).props = r, l.state = t.memoizedState, l.refs = {}, al(t), o = n.contextType, l.context = "object" == typeof o && null !== o ? za(o) : Dr, l.state = t.memoizedState, "function" == typeof(o = n.getDerivedStateFromProps) && (hi(t, n, o, r), l.state = t.memoizedState), "function" == typeof n.getDerivedStateFromProps || "function" == typeof l.getSnapshotBeforeUpdate || "function" != typeof l.UNSAFE_componentWillMount && "function" != typeof l.componentWillMount || (o = l.state, "function" == typeof l.componentWillMount && l.componentWillMount(), "function" == typeof l.UNSAFE_componentWillMount && l.UNSAFE_componentWillMount(), o !== l.state && mi.enqueueReplaceState(l, l.state, null), fl(t, r, l, a), dl(), l.state = t.memoizedState), "function" == typeof l.componentDidMount && (t.flags |= 4194308), r = !0
        } else if (null === e) {
            l = t.stateNode;
            var i = t.memoizedProps,
                s = yi(n, i);
            l.props = s;
            var u = l.context,
                c = n.contextType;
            o = Dr, "object" == typeof c && null !== c && (o = za(c));
            var d = n.getDerivedStateFromProps;
            c = "function" == typeof d || "function" == typeof l.getSnapshotBeforeUpdate, i = t.pendingProps !== i, c || "function" != typeof l.UNSAFE_componentWillReceiveProps && "function" != typeof l.componentWillReceiveProps || (i || u !== o) && bi(t, l, r, o), rl = !1;
            var f = t.memoizedState;
            l.state = f, fl(t, r, l, a), dl(), u = t.memoizedState, i || f !== u || rl ? ("function" == typeof d && (hi(t, n, d, r), u = t.memoizedState), (s = rl || gi(t, n, s, r, f, u, o)) ? (c || "function" != typeof l.UNSAFE_componentWillMount && "function" != typeof l.componentWillMount || ("function" == typeof l.componentWillMount && l.componentWillMount(), "function" == typeof l.UNSAFE_componentWillMount && l.UNSAFE_componentWillMount()), "function" == typeof l.componentDidMount && (t.flags |= 4194308)) : ("function" == typeof l.componentDidMount && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = u), l.props = r, l.state = u, l.context = o, r = s) : ("function" == typeof l.componentDidMount && (t.flags |= 4194308), r = !1)
        } else {
            l = t.stateNode, ll(e, t), c = yi(n, o = t.memoizedProps), l.props = c, d = t.pendingProps, f = l.context, u = n.contextType, s = Dr, "object" == typeof u && null !== u && (s = za(u)), (u = "function" == typeof(i = n.getDerivedStateFromProps) || "function" == typeof l.getSnapshotBeforeUpdate) || "function" != typeof l.UNSAFE_componentWillReceiveProps && "function" != typeof l.componentWillReceiveProps || (o !== d || f !== s) && bi(t, l, r, s), rl = !1, f = t.memoizedState, l.state = f, fl(t, r, l, a), dl();
            var p = t.memoizedState;
            o !== d || f !== p || rl || null !== e && null !== e.dependencies && Ca(e.dependencies) ? ("function" == typeof i && (hi(t, n, i, r), p = t.memoizedState), (c = rl || gi(t, n, c, r, f, p, s) || null !== e && null !== e.dependencies && Ca(e.dependencies)) ? (u || "function" != typeof l.UNSAFE_componentWillUpdate && "function" != typeof l.componentWillUpdate || ("function" == typeof l.componentWillUpdate && l.componentWillUpdate(r, p, s), "function" == typeof l.UNSAFE_componentWillUpdate && l.UNSAFE_componentWillUpdate(r, p, s)), "function" == typeof l.componentDidUpdate && (t.flags |= 4), "function" == typeof l.getSnapshotBeforeUpdate && (t.flags |= 1024)) : ("function" != typeof l.componentDidUpdate || o === e.memoizedProps && f === e.memoizedState || (t.flags |= 4), "function" != typeof l.getSnapshotBeforeUpdate || o === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = p), l.props = r, l.state = p, l.context = s, r = c) : ("function" != typeof l.componentDidUpdate || o === e.memoizedProps && f === e.memoizedState || (t.flags |= 4), "function" != typeof l.getSnapshotBeforeUpdate || o === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024), r = !1)
        }
        return l = r, Di(e, t), r = !!(128 & t.flags), l || r ? (l = t.stateNode, n = r && "function" != typeof n.getDerivedStateFromError ? null : l.render(), t.flags |= 1, null !== e && r ? (t.child = ai(t, e.child, null, a), t.child = ai(t, null, n, a)) : _i(e, t, n, a), t.memoizedState = l.state, e = t.child) : e = Xi(e, t, a), e
    }

    function Ii(e, t, n, r) {
        return ma(), t.flags |= 256, _i(e, t, n, r), t.child
    }
    var Ui = {
        dehydrated: null,
        treeContext: null,
        retryLane: 0,
        hydrationErrors: null
    };

    function Wi(e) {
        return {
            baseLanes: e,
            cachePool: Va()
        }
    }

    function $i(e, t, n) {
        return e = null !== e ? e.childLanes & ~n : 0, t && (e |= yu), e
    }

    function Bi(e, t, n) {
        var a, l = t.pendingProps,
            o = !1,
            i = !!(128 & t.flags);
        if ((a = i) || (a = (null === e || null !== e.memoizedState) && !!(2 & fi.current)), a && (o = !0, t.flags &= -129), a = !!(32 & t.flags), t.flags &= -33, null === e) {
            if (ia) {
                if (o ? si(t) : ci(), ia) {
                    var s, u = oa;
                    if (s = u) {
                        e: {
                            for (s = u, u = ua; 8 !== s.nodeType;) {
                                if (!u) {
                                    u = null;
                                    break e
                                }
                                if (null === (s = vd(s.nextSibling))) {
                                    u = null;
                                    break e
                                }
                            }
                            u = s
                        }
                        null !== u ? (t.memoizedState = {
                            dehydrated: u,
                            treeContext: null !== Jr ? {
                                id: Zr,
                                overflow: ea
                            } : null,
                            retryLane: 536870912,
                            hydrationErrors: null
                        }, (s = Rr(18, null, null, 0)).stateNode = u, s.return = t, t.child = s, la = t, oa = null, s = !0) : s = !1
                    }
                    s || da(t)
                }
                if (null !== (u = t.memoizedState) && null !== (u = u.dehydrated)) return yd(u) ? t.lanes = 32 : t.lanes = 536870912, null;
                di(t)
            }
            return u = l.children, l = l.fallback, o ? (ci(), u = Vi({
                mode: "hidden",
                children: u
            }, o = t.mode), l = $r(l, o, n, null), u.return = t, l.return = t, u.sibling = l, t.child = u, (o = t.child).memoizedState = Wi(n), o.childLanes = $i(e, a, n), t.memoizedState = Ui, l) : (si(t), qi(t, u))
        }
        if (null !== (s = e.memoizedState) && null !== (u = s.dehydrated)) {
            if (i) 256 & t.flags ? (si(t), t.flags &= -257, t = Ki(e, t, n)) : null !== t.memoizedState ? (ci(), t.child = e.child, t.flags |= 128, t = null) : (ci(), o = l.fallback, u = t.mode, l = Vi({
                mode: "visible",
                children: l.children
            }, u), (o = $r(o, u, n, null)).flags |= 2, l.return = t, o.return = t, l.sibling = o, t.child = l, ai(t, e.child, null, n), (l = t.child).memoizedState = Wi(n), l.childLanes = $i(e, a, n), t.memoizedState = Ui, t = o);
            else if (si(t), yd(u)) {
                if (a = u.nextSibling && u.nextSibling.dataset) var c = a.dgst;
                a = c, (l = Error(r(419))).stack = "", l.digest = a, ba({
                    value: l,
                    source: null,
                    stack: null
                }), t = Ki(e, t, n)
            } else if (Pi || Ea(e, t, n, !1), a = 0 !== (n & e.childLanes), Pi || a) {
                if (null !== (a = lu) && (0 !== (l = 0 !== ((l = 42 & (l = n & -n) ? 1 : _e(l)) & (a.suspendedLanes | n)) ? 0 : l) && l !== s.retryLane)) throw s.retryLane = l, Mr(e, l), Ru(a, e, l), zi;
                "$?" === u.data || Yu(), t = Ki(e, t, n)
            } else "$?" === u.data ? (t.flags |= 192, t.child = e.child, t = null) : (e = s.treeContext, oa = vd(u.nextSibling), la = t, ia = !0, sa = null, ua = !1, null !== e && (Gr[Xr++] = Zr, Gr[Xr++] = ea, Gr[Xr++] = Jr, Zr = e.id, ea = e.overflow, Jr = t), (t = qi(t, l.children)).flags |= 4096);
            return t
        }
        return o ? (ci(), o = l.fallback, u = t.mode, c = (s = e.child).sibling, (l = Ir(s, {
            mode: "hidden",
            children: l.children
        })).subtreeFlags = 65011712 & s.subtreeFlags, null !== c ? o = Ir(c, o) : (o = $r(o, u, n, null)).flags |= 2, o.return = t, l.return = t, l.sibling = o, t.child = l, l = o, o = t.child, null === (u = e.child.memoizedState) ? u = Wi(n) : (null !== (s = u.cachePool) ? (c = Aa._currentValue, s = s.parent !== c ? {
            parent: c,
            pool: c
        } : s) : s = Va(), u = {
            baseLanes: u.baseLanes | n,
            cachePool: s
        }), o.memoizedState = u, o.childLanes = $i(e, a, n), t.memoizedState = Ui, l) : (si(t), e = (n = e.child).sibling, (n = Ir(n, {
            mode: "visible",
            children: l.children
        })).return = t, n.sibling = null, null !== e && (null === (a = t.deletions) ? (t.deletions = [e], t.flags |= 16) : a.push(e)), t.child = n, t.memoizedState = null, n)
    }

    function qi(e, t) {
        return (t = Vi({
            mode: "visible",
            children: t
        }, e.mode)).return = e, e.child = t
    }

    function Vi(e, t) {
        return (e = Rr(22, e, null, t)).lanes = 0, e.stateNode = {
            _visibility: 1,
            _pendingMarkers: null,
            _retryCache: null,
            _transitions: null
        }, e
    }

    function Ki(e, t, n) {
        return ai(t, e.child, null, n), (e = qi(t, t.pendingProps.children)).flags |= 2, t.memoizedState = null, e
    }

    function Qi(e, t, n) {
        e.lanes |= t;
        var r = e.alternate;
        null !== r && (r.lanes |= t), Sa(e.return, t, n)
    }

    function Yi(e, t, n, r, a) {
        var l = e.memoizedState;
        null === l ? e.memoizedState = {
            isBackwards: t,
            rendering: null,
            renderingStartTime: 0,
            last: r,
            tail: n,
            tailMode: a
        } : (l.isBackwards = t, l.rendering = null, l.renderingStartTime = 0, l.last = r, l.tail = n, l.tailMode = a)
    }

    function Gi(e, t, n) {
        var r = t.pendingProps,
            a = r.revealOrder,
            l = r.tail;
        if (_i(e, t, r.children, n), 2 & (r = fi.current)) r = 1 & r | 2, t.flags |= 128;
        else {
            if (null !== e && 128 & e.flags) e: for (e = t.child; null !== e;) {
                if (13 === e.tag) null !== e.memoizedState && Qi(e, n, t);
                else if (19 === e.tag) Qi(e, n, t);
                else if (null !== e.child) {
                    e.child.return = e, e = e.child;
                    continue
                }
                if (e === t) break e;
                for (; null === e.sibling;) {
                    if (null === e.return || e.return === t) break e;
                    e = e.return
                }
                e.sibling.return = e.return, e = e.sibling
            }
            r &= 1
        }
        switch ($(fi, r), a) {
            case "forwards":
                for (n = t.child, a = null; null !== n;) null !== (e = n.alternate) && null === pi(e) && (a = n), n = n.sibling;
                null === (n = a) ? (a = t.child, t.child = null) : (a = n.sibling, n.sibling = null), Yi(t, !1, a, n, l);
                break;
            case "backwards":
                for (n = null, a = t.child, t.child = null; null !== a;) {
                    if (null !== (e = a.alternate) && null === pi(e)) {
                        t.child = a;
                        break
                    }
                    e = a.sibling, a.sibling = n, n = a, a = e
                }
                Yi(t, !0, n, null, l);
                break;
            case "together":
                Yi(t, !1, null, null, void 0);
                break;
            default:
                t.memoizedState = null
        }
        return t.child
    }

    function Xi(e, t, n) {
        if (null !== e && (t.dependencies = e.dependencies), mu |= t.lanes, 0 === (n & t.childLanes)) {
            if (null === e) return null;
            if (Ea(e, t, n, !1), 0 === (n & t.childLanes)) return null
        }
        if (null !== e && t.child !== e.child) throw Error(r(153));
        if (null !== t.child) {
            for (n = Ir(e = t.child, e.pendingProps), t.child = n, n.return = t; null !== e.sibling;) e = e.sibling, (n = n.sibling = Ir(e, e.pendingProps)).return = t;
            n.sibling = null
        }
        return t.child
    }

    function Ji(e, t) {
        return 0 !== (e.lanes & t) || !(null === (e = e.dependencies) || !Ca(e))
    }

    function Zi(e, t, n) {
        if (null !== e)
            if (e.memoizedProps !== t.pendingProps) Pi = !0;
            else {
                if (!(Ji(e, n) || 128 & t.flags)) return Pi = !1,
                    function(e, t, n) {
                        switch (t.tag) {
                            case 3:
                                Q(t, t.stateNode.containerInfo), wa(0, Aa, e.memoizedState.cache), ma();
                                break;
                            case 27:
                            case 5:
                                G(t);
                                break;
                            case 4:
                                Q(t, t.stateNode.containerInfo);
                                break;
                            case 10:
                                wa(0, t.type, t.memoizedProps.value);
                                break;
                            case 13:
                                var r = t.memoizedState;
                                if (null !== r) return null !== r.dehydrated ? (si(t), t.flags |= 128, null) : 0 !== (n & t.child.childLanes) ? Bi(e, t, n) : (si(t), null !== (e = Xi(e, t, n)) ? e.sibling : null);
                                si(t);
                                break;
                            case 19:
                                var a = !!(128 & e.flags);
                                if ((r = 0 !== (n & t.childLanes)) || (Ea(e, t, n, !1), r = 0 !== (n & t.childLanes)), a) {
                                    if (r) return Gi(e, t, n);
                                    t.flags |= 128
                                }
                                if (null !== (a = t.memoizedState) && (a.rendering = null, a.tail = null, a.lastEffect = null), $(fi, fi.current), r) break;
                                return null;
                            case 22:
                            case 23:
                                return t.lanes = 0, Ai(e, t, n);
                            case 24:
                                wa(0, Aa, e.memoizedState.cache)
                        }
                        return Xi(e, t, n)
                    }(e, t, n);
                Pi = !!(131072 & e.flags)
            }
        else Pi = !1, ia && 1048576 & t.flags && na(t, Yr, t.index);
        switch (t.lanes = 0, t.tag) {
            case 16:
                e: {
                    e = t.pendingProps;
                    var a = t.elementType,
                        l = a._init;
                    if (a = l(a._payload), t.type = a, "function" != typeof a) {
                        if (null != a) {
                            if ((l = a.$$typeof) === w) {
                                t.tag = 11, t = Ti(null, t, a, e, n);
                                break e
                            }
                            if (l === C) {
                                t.tag = 14, t = Li(null, t, a, e, n);
                                break e
                            }
                        }
                        throw t = A(a) || a, Error(r(306, t, ""))
                    }
                    Hr(a) ? (e = yi(a, e), t.tag = 1, t = Hi(null, t, a, e, n)) : (t.tag = 0, t = Fi(null, t, a, e, n))
                }
                return t;
            case 0:
                return Fi(e, t, t.type, t.pendingProps, n);
            case 1:
                return Hi(e, t, a = t.type, l = yi(a, t.pendingProps), n);
            case 3:
                e: {
                    if (Q(t, t.stateNode.containerInfo), null === e) throw Error(r(387));a = t.pendingProps;
                    var o = t.memoizedState;l = o.element,
                    ll(e, t),
                    fl(t, a, null, n);
                    var i = t.memoizedState;
                    if (a = i.cache, wa(0, Aa, a), a !== o.cache && Na(t, [Aa], n, !0), dl(), a = i.element, o.isDehydrated) {
                        if (o = {
                                element: a,
                                isDehydrated: !1,
                                cache: i.cache
                            }, t.updateQueue.baseState = o, t.memoizedState = o, 256 & t.flags) {
                            t = Ii(e, t, a, n);
                            break e
                        }
                        if (a !== l) {
                            ba(l = Cr(Error(r(424)), t)), t = Ii(e, t, a, n);
                            break e
                        }
                        if (9 === (e = t.stateNode.containerInfo).nodeType) e = e.body;
                        else e = "HTML" === e.nodeName ? e.ownerDocument.body : e;
                        for (oa = vd(e.firstChild), la = t, ia = !0, sa = null, ua = !0, n = li(t, null, a, n), t.child = n; n;) n.flags = -3 & n.flags | 4096, n = n.sibling
                    } else {
                        if (ma(), a === l) {
                            t = Xi(e, t, n);
                            break e
                        }
                        _i(e, t, a, n)
                    }
                    t = t.child
                }
                return t;
            case 26:
                return Di(e, t), null === e ? (n = _d(t.type, null, t.pendingProps, null)) ? t.memoizedState = n : ia || (n = t.type, e = t.pendingProps, (a = ld(V.current).createElement(n))[Ae] = t, a[Oe] = e, nd(a, n, e), Ke(a), t.stateNode = a) : t.memoizedState = _d(t.type, e.memoizedProps, t.pendingProps, e.memoizedState), null;
            case 27:
                return G(t), null === e && ia && (a = t.stateNode = kd(t.type, t.pendingProps, V.current), la = t, ua = !0, l = oa, md(t.type) ? (xd = l, oa = vd(a.firstChild)) : oa = l), _i(e, t, t.pendingProps.children, n), Di(e, t), null === e && (t.flags |= 4194304), t.child;
            case 5:
                return null === e && ia && ((l = a = oa) && (null !== (a = function(e, t, n, r) {
                    for (; 1 === e.nodeType;) {
                        var a = n;
                        if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
                            if (!r && ("INPUT" !== e.nodeName || "hidden" !== e.type)) break
                        } else if (r) {
                            if (!e[Ue]) switch (t) {
                                case "meta":
                                    if (!e.hasAttribute("itemprop")) break;
                                    return e;
                                case "link":
                                    if ("stylesheet" === (l = e.getAttribute("rel")) && e.hasAttribute("data-precedence")) break;
                                    if (l !== a.rel || e.getAttribute("href") !== (null == a.href || "" === a.href ? null : a.href) || e.getAttribute("crossorigin") !== (null == a.crossOrigin ? null : a.crossOrigin) || e.getAttribute("title") !== (null == a.title ? null : a.title)) break;
                                    return e;
                                case "style":
                                    if (e.hasAttribute("data-precedence")) break;
                                    return e;
                                case "script":
                                    if (((l = e.getAttribute("src")) !== (null == a.src ? null : a.src) || e.getAttribute("type") !== (null == a.type ? null : a.type) || e.getAttribute("crossorigin") !== (null == a.crossOrigin ? null : a.crossOrigin)) && l && e.hasAttribute("async") && !e.hasAttribute("itemprop")) break;
                                    return e;
                                default:
                                    return e
                            }
                        } else {
                            if ("input" !== t || "hidden" !== e.type) return e;
                            var l = null == a.name ? null : "" + a.name;
                            if ("hidden" === a.type && e.getAttribute("name") === l) return e
                        }
                        if (null === (e = vd(e.nextSibling))) break
                    }
                    return null
                }(a, t.type, t.pendingProps, ua)) ? (t.stateNode = a, la = t, oa = vd(a.firstChild), ua = !1, l = !0) : l = !1), l || da(t)), G(t), l = t.type, o = t.pendingProps, i = null !== e ? e.memoizedProps : null, a = o.children, sd(l, o) ? a = null : null !== i && sd(l, i) && (t.flags |= 32), null !== t.memoizedState && (l = Ml(e, t, Dl, null, null, n), Gd._currentValue = l), Di(e, t), _i(e, t, a, n), t.child;
            case 6:
                return null === e && ia && ((e = n = oa) && (null !== (n = function(e, t, n) {
                    if ("" === t) return null;
                    for (; 3 !== e.nodeType;) {
                        if ((1 !== e.nodeType || "INPUT" !== e.nodeName || "hidden" !== e.type) && !n) return null;
                        if (null === (e = vd(e.nextSibling))) return null
                    }
                    return e
                }(n, t.pendingProps, ua)) ? (t.stateNode = n, la = t, oa = null, e = !0) : e = !1), e || da(t)), null;
            case 13:
                return Bi(e, t, n);
            case 4:
                return Q(t, t.stateNode.containerInfo), a = t.pendingProps, null === e ? t.child = ai(t, null, a, n) : _i(e, t, a, n), t.child;
            case 11:
                return Ti(e, t, t.type, t.pendingProps, n);
            case 7:
                return _i(e, t, t.pendingProps, n), t.child;
            case 8:
            case 12:
                return _i(e, t, t.pendingProps.children, n), t.child;
            case 10:
                return a = t.pendingProps, wa(0, t.type, a.value), _i(e, t, a.children, n), t.child;
            case 9:
                return l = t.type._context, a = t.pendingProps.children, ja(t), a = a(l = za(l)), t.flags |= 1, _i(e, t, a, n), t.child;
            case 14:
                return Li(e, t, t.type, t.pendingProps, n);
            case 15:
                return Mi(e, t, t.type, t.pendingProps, n);
            case 19:
                return Gi(e, t, n);
            case 31:
                return a = t.pendingProps, n = t.mode, a = {
                    mode: a.mode,
                    children: a.children
                }, null === e ? ((n = Vi(a, n)).ref = t.ref, t.child = n, n.return = t, t = n) : ((n = Ir(e.child, a)).ref = t.ref, t.child = n, n.return = t, t = n), t;
            case 22:
                return Ai(e, t, n);
            case 24:
                return ja(t), a = za(Aa), null === e ? (null === (l = Ba()) && (l = lu, o = Oa(), l.pooledCache = o, o.refCount++, null !== o && (l.pooledCacheLanes |= n), l = o), t.memoizedState = {
                    parent: a,
                    cache: l
                }, al(t), wa(0, Aa, l)) : (0 !== (e.lanes & n) && (ll(e, t), fl(t, null, null, n), dl()), l = e.memoizedState, o = t.memoizedState, l.parent !== a ? (l = {
                    parent: a,
                    cache: a
                }, t.memoizedState = l, 0 === t.lanes && (t.memoizedState = t.updateQueue.baseState = l), wa(0, Aa, a)) : (a = o.cache, wa(0, Aa, a), a !== l.cache && Na(t, [Aa], n, !0))), _i(e, t, t.pendingProps.children, n), t.child;
            case 29:
                throw t.pendingProps
        }
        throw Error(r(156, t.tag))
    }

    function es(e) {
        e.flags |= 4
    }

    function ts(e, t) {
        if ("stylesheet" !== t.type || 4 & t.state.loading) e.flags &= -16777217;
        else if (e.flags |= 16777216, !$d(t)) {
            if (null !== (t = oi.current) && ((4194048 & iu) === iu ? null !== ii : (62914560 & iu) !== iu && !(536870912 & iu) || t !== ii)) throw el = Ga, Qa;
            e.flags |= 8192
        }
    }

    function ns(e, t) {
        null !== t && (e.flags |= 4), 16384 & e.flags && (t = 22 !== e.tag ? Ee() : 536870912, e.lanes |= t, vu |= t)
    }

    function rs(e, t) {
        if (!ia) switch (e.tailMode) {
            case "hidden":
                t = e.tail;
                for (var n = null; null !== t;) null !== t.alternate && (n = t), t = t.sibling;
                null === n ? e.tail = null : n.sibling = null;
                break;
            case "collapsed":
                n = e.tail;
                for (var r = null; null !== n;) null !== n.alternate && (r = n), n = n.sibling;
                null === r ? t || null === e.tail ? e.tail = null : e.tail.sibling = null : r.sibling = null
        }
    }

    function as(e) {
        var t = null !== e.alternate && e.alternate.child === e.child,
            n = 0,
            r = 0;
        if (t)
            for (var a = e.child; null !== a;) n |= a.lanes | a.childLanes, r |= 65011712 & a.subtreeFlags, r |= 65011712 & a.flags, a.return = e, a = a.sibling;
        else
            for (a = e.child; null !== a;) n |= a.lanes | a.childLanes, r |= a.subtreeFlags, r |= a.flags, a.return = e, a = a.sibling;
        return e.subtreeFlags |= r, e.childLanes = n, t
    }

    function ls(e, t, n) {
        var a = t.pendingProps;
        switch (aa(t), t.tag) {
            case 31:
            case 16:
            case 15:
            case 0:
            case 11:
            case 7:
            case 8:
            case 12:
            case 9:
            case 14:
            case 1:
                return as(t), null;
            case 3:
                return n = t.stateNode, a = null, null !== e && (a = e.memoizedState.cache), t.memoizedState.cache !== a && (t.flags |= 2048), ka(Aa), Y(), n.pendingContext && (n.context = n.pendingContext, n.pendingContext = null), null !== e && null !== e.child || (ha(t) ? es(t) : null === e || e.memoizedState.isDehydrated && !(256 & t.flags) || (t.flags |= 1024, ga())), as(t), null;
            case 26:
                return n = t.memoizedState, null === e ? (es(t), null !== n ? (as(t), ts(t, n)) : (as(t), t.flags &= -16777217)) : n ? n !== e.memoizedState ? (es(t), as(t), ts(t, n)) : (as(t), t.flags &= -16777217) : (e.memoizedProps !== a && es(t), as(t), t.flags &= -16777217), null;
            case 27:
                X(t), n = V.current;
                var l = t.type;
                if (null !== e && null != t.stateNode) e.memoizedProps !== a && es(t);
                else {
                    if (!a) {
                        if (null === t.stateNode) throw Error(r(166));
                        return as(t), null
                    }
                    e = B.current, ha(t) ? fa(t) : (e = kd(l, a, n), t.stateNode = e, es(t))
                }
                return as(t), null;
            case 5:
                if (X(t), n = t.type, null !== e && null != t.stateNode) e.memoizedProps !== a && es(t);
                else {
                    if (!a) {
                        if (null === t.stateNode) throw Error(r(166));
                        return as(t), null
                    }
                    if (e = B.current, ha(t)) fa(t);
                    else {
                        switch (l = ld(V.current), e) {
                            case 1:
                                e = l.createElementNS("http://www.w3.org/2000/svg", n);
                                break;
                            case 2:
                                e = l.createElementNS("http://www.w3.org/1998/Math/MathML", n);
                                break;
                            default:
                                switch (n) {
                                    case "svg":
                                        e = l.createElementNS("http://www.w3.org/2000/svg", n);
                                        break;
                                    case "math":
                                        e = l.createElementNS("http://www.w3.org/1998/Math/MathML", n);
                                        break;
                                    case "script":
                                        (e = l.createElement("div")).innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild);
                                        break;
                                    case "select":
                                        e = "string" == typeof a.is ? l.createElement("select", {
                                            is: a.is
                                        }) : l.createElement("select"), a.multiple ? e.multiple = !0 : a.size && (e.size = a.size);
                                        break;
                                    default:
                                        e = "string" == typeof a.is ? l.createElement(n, {
                                            is: a.is
                                        }) : l.createElement(n)
                                }
                        }
                        e[Ae] = t, e[Oe] = a;
                        e: for (l = t.child; null !== l;) {
                            if (5 === l.tag || 6 === l.tag) e.appendChild(l.stateNode);
                            else if (4 !== l.tag && 27 !== l.tag && null !== l.child) {
                                l.child.return = l, l = l.child;
                                continue
                            }
                            if (l === t) break e;
                            for (; null === l.sibling;) {
                                if (null === l.return || l.return === t) break e;
                                l = l.return
                            }
                            l.sibling.return = l.return, l = l.sibling
                        }
                        t.stateNode = e;
                        e: switch (nd(e, n, a), n) {
                            case "button":
                            case "input":
                            case "select":
                            case "textarea":
                                e = !!a.autoFocus;
                                break e;
                            case "img":
                                e = !0;
                                break e;
                            default:
                                e = !1
                        }
                        e && es(t)
                    }
                }
                return as(t), t.flags &= -16777217, null;
            case 6:
                if (e && null != t.stateNode) e.memoizedProps !== a && es(t);
                else {
                    if ("string" != typeof a && null === t.stateNode) throw Error(r(166));
                    if (e = V.current, ha(t)) {
                        if (e = t.stateNode, n = t.memoizedProps, a = null, null !== (l = la)) switch (l.tag) {
                            case 27:
                            case 5:
                                a = l.memoizedProps
                        }
                        e[Ae] = t, (e = !!(e.nodeValue === n || null !== a && !0 === a.suppressHydrationWarning || Jc(e.nodeValue, n))) || da(t)
                    } else(e = ld(e).createTextNode(a))[Ae] = t, t.stateNode = e
                }
                return as(t), null;
            case 13:
                if (a = t.memoizedState, null === e || null !== e.memoizedState && null !== e.memoizedState.dehydrated) {
                    if (l = ha(t), null !== a && null !== a.dehydrated) {
                        if (null === e) {
                            if (!l) throw Error(r(318));
                            if (!(l = null !== (l = t.memoizedState) ? l.dehydrated : null)) throw Error(r(317));
                            l[Ae] = t
                        } else ma(), !(128 & t.flags) && (t.memoizedState = null), t.flags |= 4;
                        as(t), l = !1
                    } else l = ga(), null !== e && null !== e.memoizedState && (e.memoizedState.hydrationErrors = l), l = !0;
                    if (!l) return 256 & t.flags ? (di(t), t) : (di(t), null)
                }
                if (di(t), 128 & t.flags) return t.lanes = n, t;
                if (n = null !== a, e = null !== e && null !== e.memoizedState, n) {
                    l = null, null !== (a = t.child).alternate && null !== a.alternate.memoizedState && null !== a.alternate.memoizedState.cachePool && (l = a.alternate.memoizedState.cachePool.pool);
                    var o = null;
                    null !== a.memoizedState && null !== a.memoizedState.cachePool && (o = a.memoizedState.cachePool.pool), o !== l && (a.flags |= 2048)
                }
                return n !== e && n && (t.child.flags |= 8192), ns(t, t.updateQueue), as(t), null;
            case 4:
                return Y(), null === e && Wc(t.stateNode.containerInfo), as(t), null;
            case 10:
                return ka(t.type), as(t), null;
            case 19:
                if (W(fi), null === (l = t.memoizedState)) return as(t), null;
                if (a = !!(128 & t.flags), null === (o = l.rendering))
                    if (a) rs(l, !1);
                    else {
                        if (0 !== hu || null !== e && 128 & e.flags)
                            for (e = t.child; null !== e;) {
                                if (null !== (o = pi(e))) {
                                    for (t.flags |= 128, rs(l, !1), e = o.updateQueue, t.updateQueue = e, ns(t, e), t.subtreeFlags = 0, e = n, n = t.child; null !== n;) Ur(n, e), n = n.sibling;
                                    return $(fi, 1 & fi.current | 2), t.child
                                }
                                e = e.sibling
                            }
                        null !== l.tail && re() > Nu && (t.flags |= 128, a = !0, rs(l, !1), t.lanes = 4194304)
                    }
                else {
                    if (!a)
                        if (null !== (e = pi(o))) {
                            if (t.flags |= 128, a = !0, e = e.updateQueue, t.updateQueue = e, ns(t, e), rs(l, !0), null === l.tail && "hidden" === l.tailMode && !o.alternate && !ia) return as(t), null
                        } else 2 * re() - l.renderingStartTime > Nu && 536870912 !== n && (t.flags |= 128, a = !0, rs(l, !1), t.lanes = 4194304);
                    l.isBackwards ? (o.sibling = t.child, t.child = o) : (null !== (e = l.last) ? e.sibling = o : t.child = o, l.last = o)
                }
                return null !== l.tail ? (t = l.tail, l.rendering = t, l.tail = t.sibling, l.renderingStartTime = re(), t.sibling = null, e = fi.current, $(fi, a ? 1 & e | 2 : 1 & e), t) : (as(t), null);
            case 22:
            case 23:
                return di(t), vl(), a = null !== t.memoizedState, null !== e ? null !== e.memoizedState !== a && (t.flags |= 8192) : a && (t.flags |= 8192), a ? !!(536870912 & n) && !(128 & t.flags) && (as(t), 6 & t.subtreeFlags && (t.flags |= 8192)) : as(t), null !== (n = t.updateQueue) && ns(t, n.retryQueue), n = null, null !== e && null !== e.memoizedState && null !== e.memoizedState.cachePool && (n = e.memoizedState.cachePool.pool), a = null, null !== t.memoizedState && null !== t.memoizedState.cachePool && (a = t.memoizedState.cachePool.pool), a !== n && (t.flags |= 2048), null !== e && W($a), null;
            case 24:
                return n = null, null !== e && (n = e.memoizedState.cache), t.memoizedState.cache !== n && (t.flags |= 2048), ka(Aa), as(t), null;
            case 25:
            case 30:
                return null
        }
        throw Error(r(156, t.tag))
    }

    function os(e, t) {
        switch (aa(t), t.tag) {
            case 1:
                return 65536 & (e = t.flags) ? (t.flags = -65537 & e | 128, t) : null;
            case 3:
                return ka(Aa), Y(), 65536 & (e = t.flags) && !(128 & e) ? (t.flags = -65537 & e | 128, t) : null;
            case 26:
            case 27:
            case 5:
                return X(t), null;
            case 13:
                if (di(t), null !== (e = t.memoizedState) && null !== e.dehydrated) {
                    if (null === t.alternate) throw Error(r(340));
                    ma()
                }
                return 65536 & (e = t.flags) ? (t.flags = -65537 & e | 128, t) : null;
            case 19:
                return W(fi), null;
            case 4:
                return Y(), null;
            case 10:
                return ka(t.type), null;
            case 22:
            case 23:
                return di(t), vl(), null !== e && W($a), 65536 & (e = t.flags) ? (t.flags = -65537 & e | 128, t) : null;
            case 24:
                return ka(Aa), null;
            default:
                return null
        }
    }

    function is(e, t) {
        switch (aa(t), t.tag) {
            case 3:
                ka(Aa), Y();
                break;
            case 26:
            case 27:
            case 5:
                X(t);
                break;
            case 4:
                Y();
                break;
            case 13:
                di(t);
                break;
            case 19:
                W(fi);
                break;
            case 10:
                ka(t.type);
                break;
            case 22:
            case 23:
                di(t), vl(), null !== e && W($a);
                break;
            case 24:
                ka(Aa)
        }
    }

    function ss(e, t) {
        try {
            var n = t.updateQueue,
                r = null !== n ? n.lastEffect : null;
            if (null !== r) {
                var a = r.next;
                n = a;
                do {
                    if ((n.tag & e) === e) {
                        r = void 0;
                        var l = n.create,
                            o = n.inst;
                        r = l(), o.destroy = r
                    }
                    n = n.next
                } while (n !== a)
            }
        } catch (i) {
            fc(t, t.return, i)
        }
    }

    function us(e, t, n) {
        try {
            var r = t.updateQueue,
                a = null !== r ? r.lastEffect : null;
            if (null !== a) {
                var l = a.next;
                r = l;
                do {
                    if ((r.tag & e) === e) {
                        var o = r.inst,
                            i = o.destroy;
                        if (void 0 !== i) {
                            o.destroy = void 0, a = t;
                            var s = n,
                                u = i;
                            try {
                                u()
                            } catch (c) {
                                fc(a, s, c)
                            }
                        }
                    }
                    r = r.next
                } while (r !== l)
            }
        } catch (c) {
            fc(t, t.return, c)
        }
    }

    function cs(e) {
        var t = e.updateQueue;
        if (null !== t) {
            var n = e.stateNode;
            try {
                hl(t, n)
            } catch (r) {
                fc(e, e.return, r)
            }
        }
    }

    function ds(e, t, n) {
        n.props = yi(e.type, e.memoizedProps), n.state = e.memoizedState;
        try {
            n.componentWillUnmount()
        } catch (r) {
            fc(e, t, r)
        }
    }

    function fs(e, t) {
        try {
            var n = e.ref;
            if (null !== n) {
                switch (e.tag) {
                    case 26:
                    case 27:
                    case 5:
                        var r = e.stateNode;
                        break;
                    default:
                        r = e.stateNode
                }
                "function" == typeof n ? e.refCleanup = n(r) : n.current = r
            }
        } catch (a) {
            fc(e, t, a)
        }
    }

    function ps(e, t) {
        var n = e.ref,
            r = e.refCleanup;
        if (null !== n)
            if ("function" == typeof r) try {
                r()
            } catch (a) {
                fc(e, t, a)
            } finally {
                e.refCleanup = null, null != (e = e.alternate) && (e.refCleanup = null)
            } else if ("function" == typeof n) try {
                n(null)
            } catch (l) {
                fc(e, t, l)
            } else n.current = null
    }

    function hs(e) {
        var t = e.type,
            n = e.memoizedProps,
            r = e.stateNode;
        try {
            e: switch (t) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                    n.autoFocus && r.focus();
                    break e;
                case "img":
                    n.src ? r.src = n.src : n.srcSet && (r.srcset = n.srcSet)
            }
        }
        catch (a) {
            fc(e, e.return, a)
        }
    }

    function ms(e, t, n) {
        try {
            var a = e.stateNode;
            ! function(e, t, n, a) {
                switch (t) {
                    case "div":
                    case "span":
                    case "svg":
                    case "path":
                    case "a":
                    case "g":
                    case "p":
                    case "li":
                        break;
                    case "input":
                        var l = null,
                            o = null,
                            i = null,
                            s = null,
                            u = null,
                            c = null,
                            d = null;
                        for (h in n) {
                            var f = n[h];
                            if (n.hasOwnProperty(h) && null != f) switch (h) {
                                case "checked":
                                case "value":
                                    break;
                                case "defaultValue":
                                    u = f;
                                default:
                                    a.hasOwnProperty(h) || ed(e, t, h, null, a, f)
                            }
                        }
                        for (var p in a) {
                            var h = a[p];
                            if (f = n[p], a.hasOwnProperty(p) && (null != h || null != f)) switch (p) {
                                case "type":
                                    o = h;
                                    break;
                                case "name":
                                    l = h;
                                    break;
                                case "checked":
                                    c = h;
                                    break;
                                case "defaultChecked":
                                    d = h;
                                    break;
                                case "value":
                                    i = h;
                                    break;
                                case "defaultValue":
                                    s = h;
                                    break;
                                case "children":
                                case "dangerouslySetInnerHTML":
                                    if (null != h) throw Error(r(137, t));
                                    break;
                                default:
                                    h !== f && ed(e, t, p, h, a, f)
                            }
                        }
                        return void yt(e, i, s, u, c, d, o, l);
                    case "select":
                        for (o in h = i = s = p = null, n)
                            if (u = n[o], n.hasOwnProperty(o) && null != u) switch (o) {
                                case "value":
                                    break;
                                case "multiple":
                                    h = u;
                                default:
                                    a.hasOwnProperty(o) || ed(e, t, o, null, a, u)
                            }
                        for (l in a)
                            if (o = a[l], u = n[l], a.hasOwnProperty(l) && (null != o || null != u)) switch (l) {
                                case "value":
                                    p = o;
                                    break;
                                case "defaultValue":
                                    s = o;
                                    break;
                                case "multiple":
                                    i = o;
                                default:
                                    o !== u && ed(e, t, l, o, a, u)
                            }
                        return t = s, n = i, a = h, void(null != p ? wt(e, !!n, p, !1) : !!a != !!n && (null != t ? wt(e, !!n, t, !0) : wt(e, !!n, n ? [] : "", !1)));
                    case "textarea":
                        for (s in h = p = null, n)
                            if (l = n[s], n.hasOwnProperty(s) && null != l && !a.hasOwnProperty(s)) switch (s) {
                                case "value":
                                case "children":
                                    break;
                                default:
                                    ed(e, t, s, null, a, l)
                            }
                        for (i in a)
                            if (l = a[i], o = n[i], a.hasOwnProperty(i) && (null != l || null != o)) switch (i) {
                                case "value":
                                    p = l;
                                    break;
                                case "defaultValue":
                                    h = l;
                                    break;
                                case "children":
                                    break;
                                case "dangerouslySetInnerHTML":
                                    if (null != l) throw Error(r(91));
                                    break;
                                default:
                                    l !== o && ed(e, t, i, l, a, o)
                            }
                        return void kt(e, p, h);
                    case "option":
                        for (var m in n)
                            if (p = n[m], n.hasOwnProperty(m) && null != p && !a.hasOwnProperty(m))
                                if ("selected" === m) e.selected = !1;
                                else ed(e, t, m, null, a, p);
                        for (u in a)
                            if (p = a[u], h = n[u], a.hasOwnProperty(u) && p !== h && (null != p || null != h))
                                if ("selected" === u) e.selected = p && "function" != typeof p && "symbol" != typeof p;
                                else ed(e, t, u, p, a, h);
                        return;
                    case "img":
                    case "link":
                    case "area":
                    case "base":
                    case "br":
                    case "col":
                    case "embed":
                    case "hr":
                    case "keygen":
                    case "meta":
                    case "param":
                    case "source":
                    case "track":
                    case "wbr":
                    case "menuitem":
                        for (var g in n) p = n[g], n.hasOwnProperty(g) && null != p && !a.hasOwnProperty(g) && ed(e, t, g, null, a, p);
                        for (c in a)
                            if (p = a[c], h = n[c], a.hasOwnProperty(c) && p !== h && (null != p || null != h)) switch (c) {
                                case "children":
                                case "dangerouslySetInnerHTML":
                                    if (null != p) throw Error(r(137, t));
                                    break;
                                default:
                                    ed(e, t, c, p, a, h)
                            }
                        return;
                    default:
                        if (zt(t)) {
                            for (var b in n) p = n[b], n.hasOwnProperty(b) && void 0 !== p && !a.hasOwnProperty(b) && td(e, t, b, void 0, a, p);
                            for (d in a) p = a[d], h = n[d], !a.hasOwnProperty(d) || p === h || void 0 === p && void 0 === h || td(e, t, d, p, a, h);
                            return
                        }
                }
                for (var y in n) p = n[y], n.hasOwnProperty(y) && null != p && !a.hasOwnProperty(y) && ed(e, t, y, null, a, p);
                for (f in a) p = a[f], h = n[f], !a.hasOwnProperty(f) || p === h || null == p && null == h || ed(e, t, f, p, a, h)
            }(a, e.type, n, t), a[Oe] = t
        } catch (l) {
            fc(e, e.return, l)
        }
    }

    function gs(e) {
        return 5 === e.tag || 3 === e.tag || 26 === e.tag || 27 === e.tag && md(e.type) || 4 === e.tag
    }

    function bs(e) {
        e: for (;;) {
            for (; null === e.sibling;) {
                if (null === e.return || gs(e.return)) return null;
                e = e.return
            }
            for (e.sibling.return = e.return, e = e.sibling; 5 !== e.tag && 6 !== e.tag && 18 !== e.tag;) {
                if (27 === e.tag && md(e.type)) continue e;
                if (2 & e.flags) continue e;
                if (null === e.child || 4 === e.tag) continue e;
                e.child.return = e, e = e.child
            }
            if (!(2 & e.flags)) return e.stateNode
        }
    }

    function ys(e, t, n) {
        var r = e.tag;
        if (5 === r || 6 === r) e = e.stateNode, t ? (9 === n.nodeType ? n.body : "HTML" === n.nodeName ? n.ownerDocument.body : n).insertBefore(e, t) : ((t = 9 === n.nodeType ? n.body : "HTML" === n.nodeName ? n.ownerDocument.body : n).appendChild(e), null != (n = n._reactRootContainer) || null !== t.onclick || (t.onclick = Zc));
        else if (4 !== r && (27 === r && md(e.type) && (n = e.stateNode, t = null), null !== (e = e.child)))
            for (ys(e, t, n), e = e.sibling; null !== e;) ys(e, t, n), e = e.sibling
    }

    function vs(e, t, n) {
        var r = e.tag;
        if (5 === r || 6 === r) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
        else if (4 !== r && (27 === r && md(e.type) && (n = e.stateNode), null !== (e = e.child)))
            for (vs(e, t, n), e = e.sibling; null !== e;) vs(e, t, n), e = e.sibling
    }

    function xs(e) {
        var t = e.stateNode,
            n = e.memoizedProps;
        try {
            for (var r = e.type, a = t.attributes; a.length;) t.removeAttributeNode(a[0]);
            nd(t, r, n), t[Ae] = e, t[Oe] = n
        } catch (l) {
            fc(e, e.return, l)
        }
    }
    var ws = !1,
        ks = !1,
        Ss = !1,
        Ns = "function" == typeof WeakSet ? WeakSet : Set,
        Es = null;

    function Cs(e, t, n) {
        var r = n.flags;
        switch (n.tag) {
            case 0:
            case 11:
            case 15:
                Hs(e, n), 4 & r && ss(5, n);
                break;
            case 1:
                if (Hs(e, n), 4 & r)
                    if (e = n.stateNode, null === t) try {
                        e.componentDidMount()
                    } catch (o) {
                        fc(n, n.return, o)
                    } else {
                        var a = yi(n.type, t.memoizedProps);
                        t = t.memoizedState;
                        try {
                            e.componentDidUpdate(a, t, e.__reactInternalSnapshotBeforeUpdate)
                        } catch (i) {
                            fc(n, n.return, i)
                        }
                    }
                64 & r && cs(n), 512 & r && fs(n, n.return);
                break;
            case 3:
                if (Hs(e, n), 64 & r && null !== (e = n.updateQueue)) {
                    if (t = null, null !== n.child) switch (n.child.tag) {
                        case 27:
                        case 5:
                        case 1:
                            t = n.child.stateNode
                    }
                    try {
                        hl(e, t)
                    } catch (o) {
                        fc(n, n.return, o)
                    }
                }
                break;
            case 27:
                null === t && 4 & r && xs(n);
            case 26:
            case 5:
                Hs(e, n), null === t && 4 & r && hs(n), 512 & r && fs(n, n.return);
                break;
            case 12:
                Hs(e, n);
                break;
            case 13:
                Hs(e, n), 4 & r && Ls(e, n), 64 & r && (null !== (e = n.memoizedState) && (null !== (e = e.dehydrated) && function(e, t) {
                    var n = e.ownerDocument;
                    if ("$?" !== e.data || "complete" === n.readyState) t();
                    else {
                        var r = function() {
                            t(), n.removeEventListener("DOMContentLoaded", r)
                        };
                        n.addEventListener("DOMContentLoaded", r), e._reactRetry = r
                    }
                }(e, n = gc.bind(null, n))));
                break;
            case 22:
                if (!(r = null !== n.memoizedState || ws)) {
                    t = null !== t && null !== t.memoizedState || ks, a = ws;
                    var l = ks;
                    ws = r, (ks = t) && !l ? Us(e, n, !!(8772 & n.subtreeFlags)) : Hs(e, n), ws = a, ks = l
                }
                break;
            case 30:
                break;
            default:
                Hs(e, n)
        }
    }

    function js(e) {
        var t = e.alternate;
        null !== t && (e.alternate = null, js(t)), e.child = null, e.deletions = null, e.sibling = null, 5 === e.tag && (null !== (t = e.stateNode) && We(t)), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null
    }
    var zs = null,
        Ps = !1;

    function _s(e, t, n) {
        for (n = n.child; null !== n;) Ts(e, t, n), n = n.sibling
    }

    function Ts(e, t, n) {
        if (pe && "function" == typeof pe.onCommitFiberUnmount) try {
            pe.onCommitFiberUnmount(fe, n)
        } catch (l) {}
        switch (n.tag) {
            case 26:
                ks || ps(n, t), _s(e, t, n), n.memoizedState ? n.memoizedState.count-- : n.stateNode && (n = n.stateNode).parentNode.removeChild(n);
                break;
            case 27:
                ks || ps(n, t);
                var r = zs,
                    a = Ps;
                md(n.type) && (zs = n.stateNode, Ps = !1), _s(e, t, n), Sd(n.stateNode), zs = r, Ps = a;
                break;
            case 5:
                ks || ps(n, t);
            case 6:
                if (r = zs, a = Ps, zs = null, _s(e, t, n), Ps = a, null !== (zs = r))
                    if (Ps) try {
                        (9 === zs.nodeType ? zs.body : "HTML" === zs.nodeName ? zs.ownerDocument.body : zs).removeChild(n.stateNode)
                    } catch (o) {
                        fc(n, t, o)
                    } else try {
                        zs.removeChild(n.stateNode)
                    } catch (o) {
                        fc(n, t, o)
                    }
                break;
            case 18:
                null !== zs && (Ps ? (gd(9 === (e = zs).nodeType ? e.body : "HTML" === e.nodeName ? e.ownerDocument.body : e, n.stateNode), _f(e)) : gd(zs, n.stateNode));
                break;
            case 4:
                r = zs, a = Ps, zs = n.stateNode.containerInfo, Ps = !0, _s(e, t, n), zs = r, Ps = a;
                break;
            case 0:
            case 11:
            case 14:
            case 15:
                ks || us(2, n, t), ks || us(4, n, t), _s(e, t, n);
                break;
            case 1:
                ks || (ps(n, t), "function" == typeof(r = n.stateNode).componentWillUnmount && ds(n, t, r)), _s(e, t, n);
                break;
            case 21:
                _s(e, t, n);
                break;
            case 22:
                ks = (r = ks) || null !== n.memoizedState, _s(e, t, n), ks = r;
                break;
            default:
                _s(e, t, n)
        }
    }

    function Ls(e, t) {
        if (null === t.memoizedState && (null !== (e = t.alternate) && (null !== (e = e.memoizedState) && null !== (e = e.dehydrated)))) try {
            _f(e)
        } catch (n) {
            fc(t, t.return, n)
        }
    }

    function Ms(e, t) {
        var n = function(e) {
            switch (e.tag) {
                case 13:
                case 19:
                    var t = e.stateNode;
                    return null === t && (t = e.stateNode = new Ns), t;
                case 22:
                    return null === (t = (e = e.stateNode)._retryCache) && (t = e._retryCache = new Ns), t;
                default:
                    throw Error(r(435, e.tag))
            }
        }(e);
        t.forEach((function(t) {
            var r = bc.bind(null, e, t);
            n.has(t) || (n.add(t), t.then(r, r))
        }))
    }

    function As(e, t) {
        var n = t.deletions;
        if (null !== n)
            for (var a = 0; a < n.length; a++) {
                var l = n[a],
                    o = e,
                    i = t,
                    s = i;
                e: for (; null !== s;) {
                    switch (s.tag) {
                        case 27:
                            if (md(s.type)) {
                                zs = s.stateNode, Ps = !1;
                                break e
                            }
                            break;
                        case 5:
                            zs = s.stateNode, Ps = !1;
                            break e;
                        case 3:
                        case 4:
                            zs = s.stateNode.containerInfo, Ps = !0;
                            break e
                    }
                    s = s.return
                }
                if (null === zs) throw Error(r(160));
                Ts(o, i, l), zs = null, Ps = !1, null !== (o = l.alternate) && (o.return = null), l.return = null
            }
        if (13878 & t.subtreeFlags)
            for (t = t.child; null !== t;) Ds(t, e), t = t.sibling
    }
    var Os = null;

    function Ds(e, t) {
        var n = e.alternate,
            a = e.flags;
        switch (e.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
                As(t, e), Fs(e), 4 & a && (us(3, e, e.return), ss(3, e), us(5, e, e.return));
                break;
            case 1:
                As(t, e), Fs(e), 512 & a && (ks || null === n || ps(n, n.return)), 64 & a && ws && (null !== (e = e.updateQueue) && (null !== (a = e.callbacks) && (n = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = null === n ? a : n.concat(a))));
                break;
            case 26:
                var l = Os;
                if (As(t, e), Fs(e), 512 & a && (ks || null === n || ps(n, n.return)), 4 & a) {
                    var o = null !== n ? n.memoizedState : null;
                    if (a = e.memoizedState, null === n)
                        if (null === a)
                            if (null === e.stateNode) {
                                e: {
                                    a = e.type,
                                    n = e.memoizedProps,
                                    l = l.ownerDocument || l;t: switch (a) {
                                        case "title":
                                            (!(o = l.getElementsByTagName("title")[0]) || o[Ue] || o[Ae] || "http://www.w3.org/2000/svg" === o.namespaceURI || o.hasAttribute("itemprop")) && (o = l.createElement(a), l.head.insertBefore(o, l.querySelector("head > title"))), nd(o, a, n), o[Ae] = e, Ke(o), a = o;
                                            break e;
                                        case "link":
                                            var i = Ud("link", "href", l).get(a + (n.href || ""));
                                            if (i)
                                                for (var s = 0; s < i.length; s++)
                                                    if ((o = i[s]).getAttribute("href") === (null == n.href || "" === n.href ? null : n.href) && o.getAttribute("rel") === (null == n.rel ? null : n.rel) && o.getAttribute("title") === (null == n.title ? null : n.title) && o.getAttribute("crossorigin") === (null == n.crossOrigin ? null : n.crossOrigin)) {
                                                        i.splice(s, 1);
                                                        break t
                                                    } nd(o = l.createElement(a), a, n), l.head.appendChild(o);
                                            break;
                                        case "meta":
                                            if (i = Ud("meta", "content", l).get(a + (n.content || "")))
                                                for (s = 0; s < i.length; s++)
                                                    if ((o = i[s]).getAttribute("content") === (null == n.content ? null : "" + n.content) && o.getAttribute("name") === (null == n.name ? null : n.name) && o.getAttribute("property") === (null == n.property ? null : n.property) && o.getAttribute("http-equiv") === (null == n.httpEquiv ? null : n.httpEquiv) && o.getAttribute("charset") === (null == n.charSet ? null : n.charSet)) {
                                                        i.splice(s, 1);
                                                        break t
                                                    } nd(o = l.createElement(a), a, n), l.head.appendChild(o);
                                            break;
                                        default:
                                            throw Error(r(468, a))
                                    }
                                    o[Ae] = e,
                                    Ke(o),
                                    a = o
                                }
                                e.stateNode = a
                            }
                    else Wd(l, e.type, e.stateNode);
                    else e.stateNode = Dd(l, a, e.memoizedProps);
                    else o !== a ? (null === o ? null !== n.stateNode && (n = n.stateNode).parentNode.removeChild(n) : o.count--, null === a ? Wd(l, e.type, e.stateNode) : Dd(l, a, e.memoizedProps)) : null === a && null !== e.stateNode && ms(e, e.memoizedProps, n.memoizedProps)
                }
                break;
            case 27:
                As(t, e), Fs(e), 512 & a && (ks || null === n || ps(n, n.return)), null !== n && 4 & a && ms(e, e.memoizedProps, n.memoizedProps);
                break;
            case 5:
                if (As(t, e), Fs(e), 512 & a && (ks || null === n || ps(n, n.return)), 32 & e.flags) {
                    l = e.stateNode;
                    try {
                        Nt(l, "")
                    } catch (h) {
                        fc(e, e.return, h)
                    }
                }
                4 & a && null != e.stateNode && ms(e, l = e.memoizedProps, null !== n ? n.memoizedProps : l), 1024 & a && (Ss = !0);
                break;
            case 6:
                if (As(t, e), Fs(e), 4 & a) {
                    if (null === e.stateNode) throw Error(r(162));
                    a = e.memoizedProps, n = e.stateNode;
                    try {
                        n.nodeValue = a
                    } catch (h) {
                        fc(e, e.return, h)
                    }
                }
                break;
            case 3:
                if (Id = null, l = Os, Os = Cd(t.containerInfo), As(t, e), Os = l, Fs(e), 4 & a && null !== n && n.memoizedState.isDehydrated) try {
                    _f(t.containerInfo)
                } catch (h) {
                    fc(e, e.return, h)
                }
                Ss && (Ss = !1, Rs(e));
                break;
            case 4:
                a = Os, Os = Cd(e.stateNode.containerInfo), As(t, e), Fs(e), Os = a;
                break;
            case 12:
            default:
                As(t, e), Fs(e);
                break;
            case 13:
                As(t, e), Fs(e), 8192 & e.child.flags && null !== e.memoizedState != (null !== n && null !== n.memoizedState) && (Su = re()), 4 & a && (null !== (a = e.updateQueue) && (e.updateQueue = null, Ms(e, a)));
                break;
            case 22:
                l = null !== e.memoizedState;
                var u = null !== n && null !== n.memoizedState,
                    c = ws,
                    d = ks;
                if (ws = c || l, ks = d || u, As(t, e), ks = d, ws = c, Fs(e), 8192 & a) e: for (t = e.stateNode, t._visibility = l ? -2 & t._visibility : 1 | t._visibility, l && (null === n || u || ws || ks || Is(e)), n = null, t = e;;) {
                    if (5 === t.tag || 26 === t.tag) {
                        if (null === n) {
                            u = n = t;
                            try {
                                if (o = u.stateNode, l) "function" == typeof(i = o.style).setProperty ? i.setProperty("display", "none", "important") : i.display = "none";
                                else {
                                    s = u.stateNode;
                                    var f = u.memoizedProps.style,
                                        p = null != f && f.hasOwnProperty("display") ? f.display : null;
                                    s.style.display = null == p || "boolean" == typeof p ? "" : ("" + p).trim()
                                }
                            } catch (h) {
                                fc(u, u.return, h)
                            }
                        }
                    } else if (6 === t.tag) {
                        if (null === n) {
                            u = t;
                            try {
                                u.stateNode.nodeValue = l ? "" : u.memoizedProps
                            } catch (h) {
                                fc(u, u.return, h)
                            }
                        }
                    } else if ((22 !== t.tag && 23 !== t.tag || null === t.memoizedState || t === e) && null !== t.child) {
                        t.child.return = t, t = t.child;
                        continue
                    }
                    if (t === e) break e;
                    for (; null === t.sibling;) {
                        if (null === t.return || t.return === e) break e;
                        n === t && (n = null), t = t.return
                    }
                    n === t && (n = null), t.sibling.return = t.return, t = t.sibling
                }
                4 & a && (null !== (a = e.updateQueue) && (null !== (n = a.retryQueue) && (a.retryQueue = null, Ms(e, n))));
                break;
            case 19:
                As(t, e), Fs(e), 4 & a && (null !== (a = e.updateQueue) && (e.updateQueue = null, Ms(e, a)));
            case 30:
            case 21:
        }
    }

    function Fs(e) {
        var t = e.flags;
        if (2 & t) {
            try {
                for (var n, a = e.return; null !== a;) {
                    if (gs(a)) {
                        n = a;
                        break
                    }
                    a = a.return
                }
                if (null == n) throw Error(r(160));
                switch (n.tag) {
                    case 27:
                        var l = n.stateNode;
                        vs(e, bs(e), l);
                        break;
                    case 5:
                        var o = n.stateNode;
                        32 & n.flags && (Nt(o, ""), n.flags &= -33), vs(e, bs(e), o);
                        break;
                    case 3:
                    case 4:
                        var i = n.stateNode.containerInfo;
                        ys(e, bs(e), i);
                        break;
                    default:
                        throw Error(r(161))
                }
            } catch (s) {
                fc(e, e.return, s)
            }
            e.flags &= -3
        }
        4096 & t && (e.flags &= -4097)
    }

    function Rs(e) {
        if (1024 & e.subtreeFlags)
            for (e = e.child; null !== e;) {
                var t = e;
                Rs(t), 5 === t.tag && 1024 & t.flags && t.stateNode.reset(), e = e.sibling
            }
    }

    function Hs(e, t) {
        if (8772 & t.subtreeFlags)
            for (t = t.child; null !== t;) Cs(e, t.alternate, t), t = t.sibling
    }

    function Is(e) {
        for (e = e.child; null !== e;) {
            var t = e;
            switch (t.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                    us(4, t, t.return), Is(t);
                    break;
                case 1:
                    ps(t, t.return);
                    var n = t.stateNode;
                    "function" == typeof n.componentWillUnmount && ds(t, t.return, n), Is(t);
                    break;
                case 27:
                    Sd(t.stateNode);
                case 26:
                case 5:
                    ps(t, t.return), Is(t);
                    break;
                case 22:
                    null === t.memoizedState && Is(t);
                    break;
                default:
                    Is(t)
            }
            e = e.sibling
        }
    }

    function Us(e, t, n) {
        for (n = n && !!(8772 & t.subtreeFlags), t = t.child; null !== t;) {
            var r = t.alternate,
                a = e,
                l = t,
                o = l.flags;
            switch (l.tag) {
                case 0:
                case 11:
                case 15:
                    Us(a, l, n), ss(4, l);
                    break;
                case 1:
                    if (Us(a, l, n), "function" == typeof(a = (r = l).stateNode).componentDidMount) try {
                        a.componentDidMount()
                    } catch (u) {
                        fc(r, r.return, u)
                    }
                    if (null !== (a = (r = l).updateQueue)) {
                        var i = r.stateNode;
                        try {
                            var s = a.shared.hiddenCallbacks;
                            if (null !== s)
                                for (a.shared.hiddenCallbacks = null, a = 0; a < s.length; a++) pl(s[a], i)
                        } catch (u) {
                            fc(r, r.return, u)
                        }
                    }
                    n && 64 & o && cs(l), fs(l, l.return);
                    break;
                case 27:
                    xs(l);
                case 26:
                case 5:
                    Us(a, l, n), n && null === r && 4 & o && hs(l), fs(l, l.return);
                    break;
                case 12:
                    Us(a, l, n);
                    break;
                case 13:
                    Us(a, l, n), n && 4 & o && Ls(a, l);
                    break;
                case 22:
                    null === l.memoizedState && Us(a, l, n), fs(l, l.return);
                    break;
                case 30:
                    break;
                default:
                    Us(a, l, n)
            }
            t = t.sibling
        }
    }

    function Ws(e, t) {
        var n = null;
        null !== e && null !== e.memoizedState && null !== e.memoizedState.cachePool && (n = e.memoizedState.cachePool.pool), e = null, null !== t.memoizedState && null !== t.memoizedState.cachePool && (e = t.memoizedState.cachePool.pool), e !== n && (null != e && e.refCount++, null != n && Da(n))
    }

    function $s(e, t) {
        e = null, null !== t.alternate && (e = t.alternate.memoizedState.cache), (t = t.memoizedState.cache) !== e && (t.refCount++, null != e && Da(e))
    }

    function Bs(e, t, n, r) {
        if (10256 & t.subtreeFlags)
            for (t = t.child; null !== t;) qs(e, t, n, r), t = t.sibling
    }

    function qs(e, t, n, r) {
        var a = t.flags;
        switch (t.tag) {
            case 0:
            case 11:
            case 15:
                Bs(e, t, n, r), 2048 & a && ss(9, t);
                break;
            case 1:
            case 13:
            default:
                Bs(e, t, n, r);
                break;
            case 3:
                Bs(e, t, n, r), 2048 & a && (e = null, null !== t.alternate && (e = t.alternate.memoizedState.cache), (t = t.memoizedState.cache) !== e && (t.refCount++, null != e && Da(e)));
                break;
            case 12:
                if (2048 & a) {
                    Bs(e, t, n, r), e = t.stateNode;
                    try {
                        var l = t.memoizedProps,
                            o = l.id,
                            i = l.onPostCommit;
                        "function" == typeof i && i(o, null === t.alternate ? "mount" : "update", e.passiveEffectDuration, -0)
                    } catch (s) {
                        fc(t, t.return, s)
                    }
                } else Bs(e, t, n, r);
                break;
            case 23:
                break;
            case 22:
                l = t.stateNode, o = t.alternate, null !== t.memoizedState ? 2 & l._visibility ? Bs(e, t, n, r) : Ks(e, t) : 2 & l._visibility ? Bs(e, t, n, r) : (l._visibility |= 2, Vs(e, t, n, r, !!(10256 & t.subtreeFlags))), 2048 & a && Ws(o, t);
                break;
            case 24:
                Bs(e, t, n, r), 2048 & a && $s(t.alternate, t)
        }
    }

    function Vs(e, t, n, r, a) {
        for (a = a && !!(10256 & t.subtreeFlags), t = t.child; null !== t;) {
            var l = e,
                o = t,
                i = n,
                s = r,
                u = o.flags;
            switch (o.tag) {
                case 0:
                case 11:
                case 15:
                    Vs(l, o, i, s, a), ss(8, o);
                    break;
                case 23:
                    break;
                case 22:
                    var c = o.stateNode;
                    null !== o.memoizedState ? 2 & c._visibility ? Vs(l, o, i, s, a) : Ks(l, o) : (c._visibility |= 2, Vs(l, o, i, s, a)), a && 2048 & u && Ws(o.alternate, o);
                    break;
                case 24:
                    Vs(l, o, i, s, a), a && 2048 & u && $s(o.alternate, o);
                    break;
                default:
                    Vs(l, o, i, s, a)
            }
            t = t.sibling
        }
    }

    function Ks(e, t) {
        if (10256 & t.subtreeFlags)
            for (t = t.child; null !== t;) {
                var n = e,
                    r = t,
                    a = r.flags;
                switch (r.tag) {
                    case 22:
                        Ks(n, r), 2048 & a && Ws(r.alternate, r);
                        break;
                    case 24:
                        Ks(n, r), 2048 & a && $s(r.alternate, r);
                        break;
                    default:
                        Ks(n, r)
                }
                t = t.sibling
            }
    }
    var Qs = 8192;

    function Ys(e) {
        if (e.subtreeFlags & Qs)
            for (e = e.child; null !== e;) Gs(e), e = e.sibling
    }

    function Gs(e) {
        switch (e.tag) {
            case 26:
                Ys(e), e.flags & Qs && null !== e.memoizedState && function(e, t, n) {
                    if (null === Bd) throw Error(r(475));
                    var a = Bd;
                    if (!("stylesheet" !== t.type || "string" == typeof n.media && !1 === matchMedia(n.media).matches || 4 & t.state.loading)) {
                        if (null === t.instance) {
                            var l = Td(n.href),
                                o = e.querySelector(Ld(l));
                            if (o) return null !== (e = o._p) && "object" == typeof e && "function" == typeof e.then && (a.count++, a = Vd.bind(a), e.then(a, a)), t.state.loading |= 4, t.instance = o, void Ke(o);
                            o = e.ownerDocument || e, n = Md(n), (l = Nd.get(l)) && Rd(n, l), Ke(o = o.createElement("link"));
                            var i = o;
                            i._p = new Promise((function(e, t) {
                                i.onload = e, i.onerror = t
                            })), nd(o, "link", n), t.instance = o
                        }
                        null === a.stylesheets && (a.stylesheets = new Map), a.stylesheets.set(t, e), (e = t.state.preload) && !(3 & t.state.loading) && (a.count++, t = Vd.bind(a), e.addEventListener("load", t), e.addEventListener("error", t))
                    }
                }(Os, e.memoizedState, e.memoizedProps);
                break;
            case 5:
            default:
                Ys(e);
                break;
            case 3:
            case 4:
                var t = Os;
                Os = Cd(e.stateNode.containerInfo), Ys(e), Os = t;
                break;
            case 22:
                null === e.memoizedState && (null !== (t = e.alternate) && null !== t.memoizedState ? (t = Qs, Qs = 16777216, Ys(e), Qs = t) : Ys(e))
        }
    }

    function Xs(e) {
        var t = e.alternate;
        if (null !== t && null !== (e = t.child)) {
            t.child = null;
            do {
                t = e.sibling, e.sibling = null, e = t
            } while (null !== e)
        }
    }

    function Js(e) {
        var t = e.deletions;
        if (16 & e.flags) {
            if (null !== t)
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    Es = r, tu(r, e)
                }
            Xs(e)
        }
        if (10256 & e.subtreeFlags)
            for (e = e.child; null !== e;) Zs(e), e = e.sibling
    }

    function Zs(e) {
        switch (e.tag) {
            case 0:
            case 11:
            case 15:
                Js(e), 2048 & e.flags && us(9, e, e.return);
                break;
            case 3:
            case 12:
            default:
                Js(e);
                break;
            case 22:
                var t = e.stateNode;
                null !== e.memoizedState && 2 & t._visibility && (null === e.return || 13 !== e.return.tag) ? (t._visibility &= -3, eu(e)) : Js(e)
        }
    }

    function eu(e) {
        var t = e.deletions;
        if (16 & e.flags) {
            if (null !== t)
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    Es = r, tu(r, e)
                }
            Xs(e)
        }
        for (e = e.child; null !== e;) {
            switch ((t = e).tag) {
                case 0:
                case 11:
                case 15:
                    us(8, t, t.return), eu(t);
                    break;
                case 22:
                    2 & (n = t.stateNode)._visibility && (n._visibility &= -3, eu(t));
                    break;
                default:
                    eu(t)
            }
            e = e.sibling
        }
    }

    function tu(e, t) {
        for (; null !== Es;) {
            var n = Es;
            switch (n.tag) {
                case 0:
                case 11:
                case 15:
                    us(8, n, t);
                    break;
                case 23:
                case 22:
                    if (null !== n.memoizedState && null !== n.memoizedState.cachePool) {
                        var r = n.memoizedState.cachePool.pool;
                        null != r && r.refCount++
                    }
                    break;
                case 24:
                    Da(n.memoizedState.cache)
            }
            if (null !== (r = n.child)) r.return = n, Es = r;
            else e: for (n = e; null !== Es;) {
                var a = (r = Es).sibling,
                    l = r.return;
                if (js(r), r === n) {
                    Es = null;
                    break e
                }
                if (null !== a) {
                    a.return = l, Es = a;
                    break e
                }
                Es = l
            }
        }
    }
    var nu = {
            getCacheForType: function(e) {
                var t = za(Aa),
                    n = t.data.get(e);
                return void 0 === n && (n = e(), t.data.set(e, n)), n
            }
        },
        ru = "function" == typeof WeakMap ? WeakMap : Map,
        au = 0,
        lu = null,
        ou = null,
        iu = 0,
        su = 0,
        uu = null,
        cu = !1,
        du = !1,
        fu = !1,
        pu = 0,
        hu = 0,
        mu = 0,
        gu = 0,
        bu = 0,
        yu = 0,
        vu = 0,
        xu = null,
        wu = null,
        ku = !1,
        Su = 0,
        Nu = 1 / 0,
        Eu = null,
        Cu = null,
        ju = 0,
        zu = null,
        Pu = null,
        _u = 0,
        Tu = 0,
        Lu = null,
        Mu = null,
        Au = 0,
        Ou = null;

    function Du() {
        if (2 & au && 0 !== iu) return iu & -iu;
        if (null !== D.T) {
            return 0 !== Ha ? Ha : Tc()
        }
        return Le()
    }

    function Fu() {
        0 === yu && (yu = 536870912 & iu && !ia ? 536870912 : Ne());
        var e = oi.current;
        return null !== e && (e.flags |= 32), yu
    }

    function Ru(e, t, n) {
        (e !== lu || 2 !== su && 9 !== su) && null === e.cancelPendingCommit || (qu(e, 0), Wu(e, iu, yu, !1)), je(e, n), 2 & au && e === lu || (e === lu && (!(2 & au) && (gu |= n), 4 === hu && Wu(e, iu, yu, !1)), Nc(e))
    }

    function Hu(e, t, n) {
        if (6 & au) throw Error(r(327));
        for (var a = !n && !(124 & t) && 0 === (t & e.expiredLanes) || ke(e, t), l = a ? function(e, t) {
                var n = au;
                au |= 2;
                var a = Ku(),
                    l = Qu();
                lu !== e || iu !== t ? (Eu = null, Nu = re() + 500, qu(e, t)) : du = ke(e, t);
                e: for (;;) try {
                    if (0 !== su && null !== ou) {
                        t = ou;
                        var o = uu;
                        t: switch (su) {
                            case 1:
                                su = 0, uu = null, tc(e, t, o, 1);
                                break;
                            case 2:
                            case 9:
                                if (Xa(o)) {
                                    su = 0, uu = null, ec(t);
                                    break
                                }
                                t = function() {
                                    2 !== su && 9 !== su || lu !== e || (su = 7), Nc(e)
                                }, o.then(t, t);
                                break e;
                            case 3:
                                su = 7;
                                break e;
                            case 4:
                                su = 5;
                                break e;
                            case 7:
                                Xa(o) ? (su = 0, uu = null, ec(t)) : (su = 0, uu = null, tc(e, t, o, 7));
                                break;
                            case 5:
                                var i = null;
                                switch (ou.tag) {
                                    case 26:
                                        i = ou.memoizedState;
                                    case 5:
                                    case 27:
                                        var s = ou;
                                        if (!i || $d(i)) {
                                            su = 0, uu = null;
                                            var u = s.sibling;
                                            if (null !== u) ou = u;
                                            else {
                                                var c = s.return;
                                                null !== c ? (ou = c, nc(c)) : ou = null
                                            }
                                            break t
                                        }
                                }
                                su = 0, uu = null, tc(e, t, o, 5);
                                break;
                            case 6:
                                su = 0, uu = null, tc(e, t, o, 6);
                                break;
                            case 8:
                                Bu(), hu = 6;
                                break e;
                            default:
                                throw Error(r(462))
                        }
                    }
                    Ju();
                    break
                } catch (d) {
                    Vu(e, d)
                }
                return xa = va = null, D.H = a, D.A = l, au = n, null !== ou ? 0 : (lu = null, iu = 0, _r(), hu)
            }(e, t) : Gu(e, t, !0), o = a;;) {
            if (0 === l) {
                du && !a && Wu(e, t, 0, !1);
                break
            }
            if (n = e.current.alternate, !o || Uu(n)) {
                if (2 === l) {
                    if (o = t, e.errorRecoveryDisabledLanes & o) var i = 0;
                    else i = 0 !== (i = -536870913 & e.pendingLanes) ? i : 536870912 & i ? 536870912 : 0;
                    if (0 !== i) {
                        t = i;
                        e: {
                            var s = e;l = xu;
                            var u = s.current.memoizedState.isDehydrated;
                            if (u && (qu(s, i).flags |= 256), 2 !== (i = Gu(s, i, !1))) {
                                if (fu && !u) {
                                    s.errorRecoveryDisabledLanes |= o, gu |= o, l = 4;
                                    break e
                                }
                                o = wu, wu = l, null !== o && (null === wu ? wu = o : wu.push.apply(wu, o))
                            }
                            l = i
                        }
                        if (o = !1, 2 !== l) continue
                    }
                }
                if (1 === l) {
                    qu(e, 0), Wu(e, t, 0, !0);
                    break
                }
                e: {
                    switch (a = e, o = l) {
                        case 0:
                        case 1:
                            throw Error(r(345));
                        case 4:
                            if ((4194048 & t) !== t) break;
                        case 6:
                            Wu(a, t, yu, !cu);
                            break e;
                        case 2:
                            wu = null;
                            break;
                        case 3:
                        case 5:
                            break;
                        default:
                            throw Error(r(329))
                    }
                    if ((62914560 & t) === t && 10 < (l = Su + 300 - re())) {
                        if (Wu(a, t, yu, !cu), 0 !== we(a, 0, !0)) break e;
                        a.timeoutHandle = cd(Iu.bind(null, a, n, wu, Eu, ku, t, yu, gu, vu, cu, o, 2, -0, 0), l)
                    } else Iu(a, n, wu, Eu, ku, t, yu, gu, vu, cu, o, 0, -0, 0)
                }
                break
            }
            l = Gu(e, t, !1), o = !1
        }
        Nc(e)
    }

    function Iu(e, t, n, a, l, o, i, s, u, c, d, f, p, h) {
        if (e.timeoutHandle = -1, (8192 & (f = t.subtreeFlags) || !(16785408 & ~f)) && (Bd = {
                stylesheets: null,
                count: 0,
                unsuspend: qd
            }, Gs(t), null !== (f = function() {
                if (null === Bd) throw Error(r(475));
                var e = Bd;
                return e.stylesheets && 0 === e.count && Qd(e, e.stylesheets), 0 < e.count ? function(t) {
                    var n = setTimeout((function() {
                        if (e.stylesheets && Qd(e, e.stylesheets), e.unsuspend) {
                            var t = e.unsuspend;
                            e.unsuspend = null, t()
                        }
                    }), 6e4);
                    return e.unsuspend = t,
                        function() {
                            e.unsuspend = null, clearTimeout(n)
                        }
                } : null
            }()))) return e.cancelPendingCommit = f(ac.bind(null, e, t, o, n, a, l, i, s, u, d, 1, p, h)), void Wu(e, o, i, !c);
        ac(e, t, o, n, a, l, i, s, u)
    }

    function Uu(e) {
        for (var t = e;;) {
            var n = t.tag;
            if ((0 === n || 11 === n || 15 === n) && 16384 & t.flags && (null !== (n = t.updateQueue) && null !== (n = n.stores)))
                for (var r = 0; r < n.length; r++) {
                    var a = n[r],
                        l = a.getSnapshot;
                    a = a.value;
                    try {
                        if (!Xn(l(), a)) return !1
                    } catch (o) {
                        return !1
                    }
                }
            if (n = t.child, 16384 & t.subtreeFlags && null !== n) n.return = t, t = n;
            else {
                if (t === e) break;
                for (; null === t.sibling;) {
                    if (null === t.return || t.return === e) return !0;
                    t = t.return
                }
                t.sibling.return = t.return, t = t.sibling
            }
        }
        return !0
    }

    function Wu(e, t, n, r) {
        t &= ~bu, t &= ~gu, e.suspendedLanes |= t, e.pingedLanes &= ~t, r && (e.warmLanes |= t), r = e.expirationTimes;
        for (var a = t; 0 < a;) {
            var l = 31 - me(a),
                o = 1 << l;
            r[l] = -1, a &= ~o
        }
        0 !== n && ze(e, n, t)
    }

    function $u() {
        return !!(6 & au) || (Ec(0), !1)
    }

    function Bu() {
        if (null !== ou) {
            if (0 === su) var e = ou.return;
            else xa = va = null, Hl(e = ou), Xo = null, Jo = 0, e = ou;
            for (; null !== e;) is(e.alternate, e), e = e.return;
            ou = null
        }
    }

    function qu(e, t) {
        var n = e.timeoutHandle; - 1 !== n && (e.timeoutHandle = -1, dd(n)), null !== (n = e.cancelPendingCommit) && (e.cancelPendingCommit = null, n()), Bu(), lu = e, ou = n = Ir(e.current, null), iu = t, su = 0, uu = null, cu = !1, du = ke(e, t), fu = !1, vu = yu = bu = gu = mu = hu = 0, wu = xu = null, ku = !1, 8 & t && (t |= 32 & t);
        var r = e.entangledLanes;
        if (0 !== r)
            for (e = e.entanglements, r &= t; 0 < r;) {
                var a = 31 - me(r),
                    l = 1 << a;
                t |= e[a], r &= ~l
            }
        return pu = t, _r(), n
    }

    function Vu(e, t) {
        wl = null, D.H = Ko, t === Ka || t === Ya ? (t = tl(), su = 3) : t === Qa ? (t = tl(), su = 4) : su = t === zi ? 8 : null !== t && "object" == typeof t && "function" == typeof t.then ? 6 : 1, uu = t, null === ou && (hu = 1, Si(e, Cr(t, e.current)))
    }

    function Ku() {
        var e = D.H;
        return D.H = Ko, null === e ? Ko : e
    }

    function Qu() {
        var e = D.A;
        return D.A = nu, e
    }

    function Yu() {
        hu = 4, cu || (4194048 & iu) !== iu && null !== oi.current || (du = !0), !(134217727 & mu) && !(134217727 & gu) || null === lu || Wu(lu, iu, yu, !1)
    }

    function Gu(e, t, n) {
        var r = au;
        au |= 2;
        var a = Ku(),
            l = Qu();
        lu === e && iu === t || (Eu = null, qu(e, t)), t = !1;
        var o = hu;
        e: for (;;) try {
            if (0 !== su && null !== ou) {
                var i = ou,
                    s = uu;
                switch (su) {
                    case 8:
                        Bu(), o = 6;
                        break e;
                    case 3:
                    case 2:
                    case 9:
                    case 6:
                        null === oi.current && (t = !0);
                        var u = su;
                        if (su = 0, uu = null, tc(e, i, s, u), n && du) {
                            o = 0;
                            break e
                        }
                        break;
                    default:
                        u = su, su = 0, uu = null, tc(e, i, s, u)
                }
            }
            Xu(), o = hu;
            break
        } catch (c) {
            Vu(e, c)
        }
        return t && e.shellSuspendCounter++, xa = va = null, au = r, D.H = a, D.A = l, null === ou && (lu = null, iu = 0, _r()), o
    }

    function Xu() {
        for (; null !== ou;) Zu(ou)
    }

    function Ju() {
        for (; null !== ou && !te();) Zu(ou)
    }

    function Zu(e) {
        var t = Zi(e.alternate, e, pu);
        e.memoizedProps = e.pendingProps, null === t ? nc(e) : ou = t
    }

    function ec(e) {
        var t = e,
            n = t.alternate;
        switch (t.tag) {
            case 15:
            case 0:
                t = Ri(n, t, t.pendingProps, t.type, void 0, iu);
                break;
            case 11:
                t = Ri(n, t, t.pendingProps, t.type.render, t.ref, iu);
                break;
            case 5:
                Hl(t);
            default:
                is(n, t), t = Zi(n, t = ou = Ur(t, pu), pu)
        }
        e.memoizedProps = e.pendingProps, null === t ? nc(e) : ou = t
    }

    function tc(e, t, n, a) {
        xa = va = null, Hl(t), Xo = null, Jo = 0;
        var l = t.return;
        try {
            if (function(e, t, n, a, l) {
                    if (n.flags |= 32768, null !== a && "object" == typeof a && "function" == typeof a.then) {
                        if (null !== (t = n.alternate) && Ea(t, n, l, !0), null !== (n = oi.current)) {
                            switch (n.tag) {
                                case 13:
                                    return null === ii ? Yu() : null === n.alternate && 0 === hu && (hu = 3), n.flags &= -257, n.flags |= 65536, n.lanes = l, a === Ga ? n.flags |= 16384 : (null === (t = n.updateQueue) ? n.updateQueue = new Set([a]) : t.add(a), pc(e, a, l)), !1;
                                case 22:
                                    return n.flags |= 65536, a === Ga ? n.flags |= 16384 : (null === (t = n.updateQueue) ? (t = {
                                        transitions: null,
                                        markerInstances: null,
                                        retryQueue: new Set([a])
                                    }, n.updateQueue = t) : null === (n = t.retryQueue) ? t.retryQueue = new Set([a]) : n.add(a), pc(e, a, l)), !1
                            }
                            throw Error(r(435, n.tag))
                        }
                        return pc(e, a, l), Yu(), !1
                    }
                    if (ia) return null !== (t = oi.current) ? (!(65536 & t.flags) && (t.flags |= 256), t.flags |= 65536, t.lanes = l, a !== ca && ba(Cr(e = Error(r(422), {
                        cause: a
                    }), n))) : (a !== ca && ba(Cr(t = Error(r(423), {
                        cause: a
                    }), n)), (e = e.current.alternate).flags |= 65536, l &= -l, e.lanes |= l, a = Cr(a, n), ul(e, l = Ei(e.stateNode, a, l)), 4 !== hu && (hu = 2)), !1;
                    var o = Error(r(520), {
                        cause: a
                    });
                    if (o = Cr(o, n), null === xu ? xu = [o] : xu.push(o), 4 !== hu && (hu = 2), null === t) return !0;
                    a = Cr(a, n), n = t;
                    do {
                        switch (n.tag) {
                            case 3:
                                return n.flags |= 65536, e = l & -l, n.lanes |= e, ul(n, e = Ei(n.stateNode, a, e)), !1;
                            case 1:
                                if (t = n.type, o = n.stateNode, !(128 & n.flags || "function" != typeof t.getDerivedStateFromError && (null === o || "function" != typeof o.componentDidCatch || null !== Cu && Cu.has(o)))) return n.flags |= 65536, l &= -l, n.lanes |= l, ji(l = Ci(l), e, n, a), ul(n, l), !1
                        }
                        n = n.return
                    } while (null !== n);
                    return !1
                }(e, l, t, n, iu)) return hu = 1, Si(e, Cr(n, e.current)), void(ou = null)
        } catch (o) {
            if (null !== l) throw ou = l, o;
            return hu = 1, Si(e, Cr(n, e.current)), void(ou = null)
        }
        32768 & t.flags ? (ia || 1 === a ? e = !0 : du || 536870912 & iu ? e = !1 : (cu = e = !0, (2 === a || 9 === a || 3 === a || 6 === a) && (null !== (a = oi.current) && 13 === a.tag && (a.flags |= 16384))), rc(t, e)) : nc(t)
    }

    function nc(e) {
        var t = e;
        do {
            if (32768 & t.flags) return void rc(t, cu);
            e = t.return;
            var n = ls(t.alternate, t, pu);
            if (null !== n) return void(ou = n);
            if (null !== (t = t.sibling)) return void(ou = t);
            ou = t = e
        } while (null !== t);
        0 === hu && (hu = 5)
    }

    function rc(e, t) {
        do {
            var n = os(e.alternate, e);
            if (null !== n) return n.flags &= 32767, void(ou = n);
            if (null !== (n = e.return) && (n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null), !t && null !== (e = e.sibling)) return void(ou = e);
            ou = e = n
        } while (null !== e);
        hu = 6, ou = null
    }

    function ac(e, t, n, a, l, o, i, s, u) {
        e.cancelPendingCommit = null;
        do {
            uc()
        } while (0 !== ju);
        if (6 & au) throw Error(r(327));
        if (null !== t) {
            if (t === e.current) throw Error(r(177));
            if (o = t.lanes | t.childLanes, function(e, t, n, r, a, l) {
                    var o = e.pendingLanes;
                    e.pendingLanes = n, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= n, e.entangledLanes &= n, e.errorRecoveryDisabledLanes &= n, e.shellSuspendCounter = 0;
                    var i = e.entanglements,
                        s = e.expirationTimes,
                        u = e.hiddenUpdates;
                    for (n = o & ~n; 0 < n;) {
                        var c = 31 - me(n),
                            d = 1 << c;
                        i[c] = 0, s[c] = -1;
                        var f = u[c];
                        if (null !== f)
                            for (u[c] = null, c = 0; c < f.length; c++) {
                                var p = f[c];
                                null !== p && (p.lane &= -536870913)
                            }
                        n &= ~d
                    }
                    0 !== r && ze(e, r, 0), 0 !== l && 0 === a && 0 !== e.tag && (e.suspendedLanes |= l & ~(o & ~t))
                }(e, n, o |= Pr, i, s, u), e === lu && (ou = lu = null, iu = 0), Pu = t, zu = e, _u = n, Tu = o, Lu = l, Mu = a, 10256 & t.subtreeFlags || 10256 & t.flags ? (e.callbackNode = null, e.callbackPriority = 0, Z(ie, (function() {
                    return cc(), null
                }))) : (e.callbackNode = null, e.callbackPriority = 0), a = !!(13878 & t.flags), 13878 & t.subtreeFlags || a) {
                a = D.T, D.T = null, l = F.p, F.p = 2, i = au, au |= 4;
                try {
                    ! function(e, t) {
                        if (e = e.containerInfo, rd = af, rr(e = nr(e))) {
                            if ("selectionStart" in e) var n = {
                                start: e.selectionStart,
                                end: e.selectionEnd
                            };
                            else e: {
                                var a = (n = (n = e.ownerDocument) && n.defaultView || window).getSelection && n.getSelection();
                                if (a && 0 !== a.rangeCount) {
                                    n = a.anchorNode;
                                    var l = a.anchorOffset,
                                        o = a.focusNode;
                                    a = a.focusOffset;
                                    try {
                                        n.nodeType, o.nodeType
                                    } catch (g) {
                                        n = null;
                                        break e
                                    }
                                    var i = 0,
                                        s = -1,
                                        u = -1,
                                        c = 0,
                                        d = 0,
                                        f = e,
                                        p = null;
                                    t: for (;;) {
                                        for (var h; f !== n || 0 !== l && 3 !== f.nodeType || (s = i + l), f !== o || 0 !== a && 3 !== f.nodeType || (u = i + a), 3 === f.nodeType && (i += f.nodeValue.length), null !== (h = f.firstChild);) p = f, f = h;
                                        for (;;) {
                                            if (f === e) break t;
                                            if (p === n && ++c === l && (s = i), p === o && ++d === a && (u = i), null !== (h = f.nextSibling)) break;
                                            p = (f = p).parentNode
                                        }
                                        f = h
                                    }
                                    n = -1 === s || -1 === u ? null : {
                                        start: s,
                                        end: u
                                    }
                                } else n = null
                            }
                            n = n || {
                                start: 0,
                                end: 0
                            }
                        } else n = null;
                        for (ad = {
                                focusedElem: e,
                                selectionRange: n
                            }, af = !1, Es = t; null !== Es;)
                            if (e = (t = Es).child, 1024 & t.subtreeFlags && null !== e) e.return = t, Es = e;
                            else
                                for (; null !== Es;) {
                                    switch (o = (t = Es).alternate, e = t.flags, t.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                        case 5:
                                        case 26:
                                        case 27:
                                        case 6:
                                        case 4:
                                        case 17:
                                            break;
                                        case 1:
                                            if (1024 & e && null !== o) {
                                                e = void 0, n = t, l = o.memoizedProps, o = o.memoizedState, a = n.stateNode;
                                                try {
                                                    var m = yi(n.type, l, (n.elementType, n.type));
                                                    e = a.getSnapshotBeforeUpdate(m, o), a.__reactInternalSnapshotBeforeUpdate = e
                                                } catch (b) {
                                                    fc(n, n.return, b)
                                                }
                                            }
                                            break;
                                        case 3:
                                            if (1024 & e)
                                                if (9 === (n = (e = t.stateNode.containerInfo).nodeType)) bd(e);
                                                else if (1 === n) switch (e.nodeName) {
                                                case "HEAD":
                                                case "HTML":
                                                case "BODY":
                                                    bd(e);
                                                    break;
                                                default:
                                                    e.textContent = ""
                                            }
                                            break;
                                        default:
                                            if (1024 & e) throw Error(r(163))
                                    }
                                    if (null !== (e = t.sibling)) {
                                        e.return = t.return, Es = e;
                                        break
                                    }
                                    Es = t.return
                                }
                    }(e, t)
                } finally {
                    au = i, F.p = l, D.T = a
                }
            }
            ju = 1, lc(), oc(), ic()
        }
    }

    function lc() {
        if (1 === ju) {
            ju = 0;
            var e = zu,
                t = Pu,
                n = !!(13878 & t.flags);
            if (13878 & t.subtreeFlags || n) {
                n = D.T, D.T = null;
                var r = F.p;
                F.p = 2;
                var a = au;
                au |= 4;
                try {
                    Ds(t, e);
                    var l = ad,
                        o = nr(e.containerInfo),
                        i = l.focusedElem,
                        s = l.selectionRange;
                    if (o !== i && i && i.ownerDocument && tr(i.ownerDocument.documentElement, i)) {
                        if (null !== s && rr(i)) {
                            var u = s.start,
                                c = s.end;
                            if (void 0 === c && (c = u), "selectionStart" in i) i.selectionStart = u, i.selectionEnd = Math.min(c, i.value.length);
                            else {
                                var d = i.ownerDocument || document,
                                    f = d && d.defaultView || window;
                                if (f.getSelection) {
                                    var p = f.getSelection(),
                                        h = i.textContent.length,
                                        m = Math.min(s.start, h),
                                        g = void 0 === s.end ? m : Math.min(s.end, h);
                                    !p.extend && m > g && (o = g, g = m, m = o);
                                    var b = er(i, m),
                                        y = er(i, g);
                                    if (b && y && (1 !== p.rangeCount || p.anchorNode !== b.node || p.anchorOffset !== b.offset || p.focusNode !== y.node || p.focusOffset !== y.offset)) {
                                        var v = d.createRange();
                                        v.setStart(b.node, b.offset), p.removeAllRanges(), m > g ? (p.addRange(v), p.extend(y.node, y.offset)) : (v.setEnd(y.node, y.offset), p.addRange(v))
                                    }
                                }
                            }
                        }
                        for (d = [], p = i; p = p.parentNode;) 1 === p.nodeType && d.push({
                            element: p,
                            left: p.scrollLeft,
                            top: p.scrollTop
                        });
                        for ("function" == typeof i.focus && i.focus(), i = 0; i < d.length; i++) {
                            var x = d[i];
                            x.element.scrollLeft = x.left, x.element.scrollTop = x.top
                        }
                    }
                    af = !!rd, ad = rd = null
                } finally {
                    au = a, F.p = r, D.T = n
                }
            }
            e.current = t, ju = 2
        }
    }

    function oc() {
        if (2 === ju) {
            ju = 0;
            var e = zu,
                t = Pu,
                n = !!(8772 & t.flags);
            if (8772 & t.subtreeFlags || n) {
                n = D.T, D.T = null;
                var r = F.p;
                F.p = 2;
                var a = au;
                au |= 4;
                try {
                    Cs(e, t.alternate, t)
                } finally {
                    au = a, F.p = r, D.T = n
                }
            }
            ju = 3
        }
    }

    function ic() {
        if (4 === ju || 3 === ju) {
            ju = 0, ne();
            var e = zu,
                t = Pu,
                n = _u,
                r = Mu;
            10256 & t.subtreeFlags || 10256 & t.flags ? ju = 5 : (ju = 0, Pu = zu = null, sc(e, e.pendingLanes));
            var a = e.pendingLanes;
            if (0 === a && (Cu = null), Te(n), t = t.stateNode, pe && "function" == typeof pe.onCommitFiberRoot) try {
                pe.onCommitFiberRoot(fe, t, void 0, !(128 & ~t.current.flags))
            } catch (s) {}
            if (null !== r) {
                t = D.T, a = F.p, F.p = 2, D.T = null;
                try {
                    for (var l = e.onRecoverableError, o = 0; o < r.length; o++) {
                        var i = r[o];
                        l(i.value, {
                            componentStack: i.stack
                        })
                    }
                } finally {
                    D.T = t, F.p = a
                }
            }
            3 & _u && uc(), Nc(e), a = e.pendingLanes, 4194090 & n && 42 & a ? e === Ou ? Au++ : (Au = 0, Ou = e) : Au = 0, Ec(0)
        }
    }

    function sc(e, t) {
        0 === (e.pooledCacheLanes &= t) && (null != (t = e.pooledCache) && (e.pooledCache = null, Da(t)))
    }

    function uc(e) {
        return lc(), oc(), ic(), cc()
    }

    function cc() {
        if (5 !== ju) return !1;
        var e = zu,
            t = Tu;
        Tu = 0;
        var n = Te(_u),
            a = D.T,
            l = F.p;
        try {
            F.p = 32 > n ? 32 : n, D.T = null, n = Lu, Lu = null;
            var o = zu,
                i = _u;
            if (ju = 0, Pu = zu = null, _u = 0, 6 & au) throw Error(r(331));
            var s = au;
            if (au |= 4, Zs(o.current), qs(o, o.current, i, n), au = s, Ec(0, !1), pe && "function" == typeof pe.onPostCommitFiberRoot) try {
                pe.onPostCommitFiberRoot(fe, o)
            } catch (u) {}
            return !0
        } finally {
            F.p = l, D.T = a, sc(e, t)
        }
    }

    function dc(e, t, n) {
        t = Cr(n, t), null !== (e = il(e, t = Ei(e.stateNode, t, 2), 2)) && (je(e, 2), Nc(e))
    }

    function fc(e, t, n) {
        if (3 === e.tag) dc(e, e, n);
        else
            for (; null !== t;) {
                if (3 === t.tag) {
                    dc(t, e, n);
                    break
                }
                if (1 === t.tag) {
                    var r = t.stateNode;
                    if ("function" == typeof t.type.getDerivedStateFromError || "function" == typeof r.componentDidCatch && (null === Cu || !Cu.has(r))) {
                        e = Cr(n, e), null !== (r = il(t, n = Ci(2), 2)) && (ji(n, r, t, e), je(r, 2), Nc(r));
                        break
                    }
                }
                t = t.return
            }
    }

    function pc(e, t, n) {
        var r = e.pingCache;
        if (null === r) {
            r = e.pingCache = new ru;
            var a = new Set;
            r.set(t, a)
        } else void 0 === (a = r.get(t)) && (a = new Set, r.set(t, a));
        a.has(n) || (fu = !0, a.add(n), e = hc.bind(null, e, t, n), t.then(e, e))
    }

    function hc(e, t, n) {
        var r = e.pingCache;
        null !== r && r.delete(t), e.pingedLanes |= e.suspendedLanes & n, e.warmLanes &= ~n, lu === e && (iu & n) === n && (4 === hu || 3 === hu && (62914560 & iu) === iu && 300 > re() - Su ? !(2 & au) && qu(e, 0) : bu |= n, vu === iu && (vu = 0)), Nc(e)
    }

    function mc(e, t) {
        0 === t && (t = Ee()), null !== (e = Mr(e, t)) && (je(e, t), Nc(e))
    }

    function gc(e) {
        var t = e.memoizedState,
            n = 0;
        null !== t && (n = t.retryLane), mc(e, n)
    }

    function bc(e, t) {
        var n = 0;
        switch (e.tag) {
            case 13:
                var a = e.stateNode,
                    l = e.memoizedState;
                null !== l && (n = l.retryLane);
                break;
            case 19:
                a = e.stateNode;
                break;
            case 22:
                a = e.stateNode._retryCache;
                break;
            default:
                throw Error(r(314))
        }
        null !== a && a.delete(t), mc(e, n)
    }
    var yc = null,
        vc = null,
        xc = !1,
        wc = !1,
        kc = !1,
        Sc = 0;

    function Nc(e) {
        e !== vc && null === e.next && (null === vc ? yc = vc = e : vc = vc.next = e), wc = !0, xc || (xc = !0, pd((function() {
            6 & au ? Z(le, Cc) : jc()
        })))
    }

    function Ec(e, t) {
        if (!kc && wc) {
            kc = !0;
            do {
                for (var n = !1, r = yc; null !== r;) {
                    if (0 !== e) {
                        var a = r.pendingLanes;
                        if (0 === a) var l = 0;
                        else {
                            var o = r.suspendedLanes,
                                i = r.pingedLanes;
                            l = (1 << 31 - me(42 | e) + 1) - 1, l = 201326741 & (l &= a & ~(o & ~i)) ? 201326741 & l | 1 : l ? 2 | l : 0
                        }
                        0 !== l && (n = !0, _c(r, l))
                    } else l = iu, !(3 & (l = we(r, r === lu ? l : 0, null !== r.cancelPendingCommit || -1 !== r.timeoutHandle))) || ke(r, l) || (n = !0, _c(r, l));
                    r = r.next
                }
            } while (n);
            kc = !1
        }
    }

    function Cc() {
        jc()
    }

    function jc() {
        wc = xc = !1;
        var e = 0;
        0 !== Sc && (function() {
            var e = window.event;
            if (e && "popstate" === e.type) return e !== ud && (ud = e, !0);
            return ud = null, !1
        }() && (e = Sc), Sc = 0);
        for (var t = re(), n = null, r = yc; null !== r;) {
            var a = r.next,
                l = zc(r, t);
            0 === l ? (r.next = null, null === n ? yc = a : n.next = a, null === a && (vc = n)) : (n = r, (0 !== e || 3 & l) && (wc = !0)), r = a
        }
        Ec(e)
    }

    function zc(e, t) {
        for (var n = e.suspendedLanes, r = e.pingedLanes, a = e.expirationTimes, l = -62914561 & e.pendingLanes; 0 < l;) {
            var o = 31 - me(l),
                i = 1 << o,
                s = a[o]; - 1 === s ? 0 !== (i & n) && 0 === (i & r) || (a[o] = Se(i, t)) : s <= t && (e.expiredLanes |= i), l &= ~i
        }
        if (n = iu, n = we(e, e === (t = lu) ? n : 0, null !== e.cancelPendingCommit || -1 !== e.timeoutHandle), r = e.callbackNode, 0 === n || e === t && (2 === su || 9 === su) || null !== e.cancelPendingCommit) return null !== r && null !== r && ee(r), e.callbackNode = null, e.callbackPriority = 0;
        if (!(3 & n) || ke(e, n)) {
            if ((t = n & -n) === e.callbackPriority) return t;
            switch (null !== r && ee(r), Te(n)) {
                case 2:
                case 8:
                    n = oe;
                    break;
                case 32:
                default:
                    n = ie;
                    break;
                case 268435456:
                    n = ue
            }
            return r = Pc.bind(null, e), n = Z(n, r), e.callbackPriority = t, e.callbackNode = n, t
        }
        return null !== r && null !== r && ee(r), e.callbackPriority = 2, e.callbackNode = null, 2
    }

    function Pc(e, t) {
        if (0 !== ju && 5 !== ju) return e.callbackNode = null, e.callbackPriority = 0, null;
        var n = e.callbackNode;
        if (uc() && e.callbackNode !== n) return null;
        var r = iu;
        return 0 === (r = we(e, e === lu ? r : 0, null !== e.cancelPendingCommit || -1 !== e.timeoutHandle)) ? null : (Hu(e, r, t), zc(e, re()), null != e.callbackNode && e.callbackNode === n ? Pc.bind(null, e) : null)
    }

    function _c(e, t) {
        if (uc()) return null;
        Hu(e, t, !0)
    }

    function Tc() {
        return 0 === Sc && (Sc = Ne()), Sc
    }

    function Lc(e) {
        return null == e || "symbol" == typeof e || "boolean" == typeof e ? null : "function" == typeof e ? e : Tt("" + e)
    }

    function Mc(e, t) {
        var n = t.ownerDocument.createElement("input");
        return n.name = t.name, n.value = t.value, e.id && n.setAttribute("form", e.id), t.parentNode.insertBefore(n, t), e = new FormData(e), n.parentNode.removeChild(n), e
    }
    for (var Ac = 0; Ac < Sr.length; Ac++) {
        var Oc = Sr[Ac];
        Nr(Oc.toLowerCase(), "on" + (Oc[0].toUpperCase() + Oc.slice(1)))
    }
    Nr(mr, "onAnimationEnd"), Nr(gr, "onAnimationIteration"), Nr(br, "onAnimationStart"), Nr("dblclick", "onDoubleClick"), Nr("focusin", "onFocus"), Nr("focusout", "onBlur"), Nr(yr, "onTransitionRun"), Nr(vr, "onTransitionStart"), Nr(xr, "onTransitionCancel"), Nr(wr, "onTransitionEnd"), Xe("onMouseEnter", ["mouseout", "mouseover"]), Xe("onMouseLeave", ["mouseout", "mouseover"]), Xe("onPointerEnter", ["pointerout", "pointerover"]), Xe("onPointerLeave", ["pointerout", "pointerover"]), Ge("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), Ge("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), Ge("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), Ge("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), Ge("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), Ge("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
    var Dc = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
        Fc = new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Dc));

    function Rc(e, t) {
        t = !!(4 & t);
        for (var n = 0; n < e.length; n++) {
            var r = e[n],
                a = r.event;
            r = r.listeners;
            e: {
                var l = void 0;
                if (t)
                    for (var o = r.length - 1; 0 <= o; o--) {
                        var i = r[o],
                            s = i.instance,
                            u = i.currentTarget;
                        if (i = i.listener, s !== l && a.isPropagationStopped()) break e;
                        l = i, a.currentTarget = u;
                        try {
                            l(a)
                        } catch (c) {
                            vi(c)
                        }
                        a.currentTarget = null, l = s
                    } else
                        for (o = 0; o < r.length; o++) {
                            if (s = (i = r[o]).instance, u = i.currentTarget, i = i.listener, s !== l && a.isPropagationStopped()) break e;
                            l = i, a.currentTarget = u;
                            try {
                                l(a)
                            } catch (c) {
                                vi(c)
                            }
                            a.currentTarget = null, l = s
                        }
            }
        }
    }

    function Hc(e, t) {
        var n = t[Fe];
        void 0 === n && (n = t[Fe] = new Set);
        var r = e + "__bubble";
        n.has(r) || ($c(t, e, 2, !1), n.add(r))
    }

    function Ic(e, t, n) {
        var r = 0;
        t && (r |= 4), $c(n, e, r, t)
    }
    var Uc = "_reactListening" + Math.random().toString(36).slice(2);

    function Wc(e) {
        if (!e[Uc]) {
            e[Uc] = !0, Qe.forEach((function(t) {
                "selectionchange" !== t && (Fc.has(t) || Ic(t, !1, e), Ic(t, !0, e))
            }));
            var t = 9 === e.nodeType ? e : e.ownerDocument;
            null === t || t[Uc] || (t[Uc] = !0, Ic("selectionchange", !1, t))
        }
    }

    function $c(e, t, n, r) {
        switch (ff(t)) {
            case 2:
                var a = lf;
                break;
            case 8:
                a = of;
                break;
            default:
                a = sf
        }
        n = a.bind(null, t, n, e), a = void 0, !Ut || "touchstart" !== t && "touchmove" !== t && "wheel" !== t || (a = !0), r ? void 0 !== a ? e.addEventListener(t, n, {
            capture: !0,
            passive: a
        }) : e.addEventListener(t, n, !0) : void 0 !== a ? e.addEventListener(t, n, {
            passive: a
        }) : e.addEventListener(t, n, !1)
    }

    function Bc(e, t, n, r, a) {
        var o = r;
        if (!(1 & t || 2 & t || null === r)) e: for (;;) {
            if (null === r) return;
            var i = r.tag;
            if (3 === i || 4 === i) {
                var s = r.stateNode.containerInfo;
                if (s === a) break;
                if (4 === i)
                    for (i = r.return; null !== i;) {
                        var u = i.tag;
                        if ((3 === u || 4 === u) && i.stateNode.containerInfo === a) return;
                        i = i.return
                    }
                for (; null !== s;) {
                    if (null === (i = $e(s))) return;
                    if (5 === (u = i.tag) || 6 === u || 26 === u || 27 === u) {
                        r = o = i;
                        continue e
                    }
                    s = s.parentNode
                }
            }
            r = r.return
        }
        Rt((function() {
            var r = o,
                a = Mt(n),
                i = [];
            e: {
                var s = kr.get(e);
                if (void 0 !== s) {
                    var u = tn,
                        c = e;
                    switch (e) {
                        case "keypress":
                            if (0 === Kt(n)) break e;
                        case "keydown":
                        case "keyup":
                            u = bn;
                            break;
                        case "focusin":
                            c = "focus", u = sn;
                            break;
                        case "focusout":
                            c = "blur", u = sn;
                            break;
                        case "beforeblur":
                        case "afterblur":
                            u = sn;
                            break;
                        case "click":
                            if (2 === n.button) break e;
                        case "auxclick":
                        case "dblclick":
                        case "mousedown":
                        case "mousemove":
                        case "mouseup":
                        case "mouseout":
                        case "mouseover":
                        case "contextmenu":
                            u = ln;
                            break;
                        case "drag":
                        case "dragend":
                        case "dragenter":
                        case "dragexit":
                        case "dragleave":
                        case "dragover":
                        case "dragstart":
                        case "drop":
                            u = on;
                            break;
                        case "touchcancel":
                        case "touchend":
                        case "touchmove":
                        case "touchstart":
                            u = vn;
                            break;
                        case mr:
                        case gr:
                        case br:
                            u = un;
                            break;
                        case wr:
                            u = xn;
                            break;
                        case "scroll":
                        case "scrollend":
                            u = rn;
                            break;
                        case "wheel":
                            u = wn;
                            break;
                        case "copy":
                        case "cut":
                        case "paste":
                            u = cn;
                            break;
                        case "gotpointercapture":
                        case "lostpointercapture":
                        case "pointercancel":
                        case "pointerdown":
                        case "pointermove":
                        case "pointerout":
                        case "pointerover":
                        case "pointerup":
                            u = yn;
                            break;
                        case "toggle":
                        case "beforetoggle":
                            u = kn
                    }
                    var d = !!(4 & t),
                        f = !d && ("scroll" === e || "scrollend" === e),
                        p = d ? null !== s ? s + "Capture" : null : s;
                    d = [];
                    for (var h, m = r; null !== m;) {
                        var g = m;
                        if (h = g.stateNode, 5 !== (g = g.tag) && 26 !== g && 27 !== g || null === h || null === p || null != (g = Ht(m, p)) && d.push(qc(m, g, h)), f) break;
                        m = m.return
                    }
                    0 < d.length && (s = new u(s, c, null, n, a), i.push({
                        event: s,
                        listeners: d
                    }))
                }
            }
            if (!(7 & t)) {
                if (u = "mouseout" === e || "pointerout" === e, (!(s = "mouseover" === e || "pointerover" === e) || n === Lt || !(c = n.relatedTarget || n.fromElement) || !$e(c) && !c[De]) && (u || s) && (s = a.window === a ? a : (s = a.ownerDocument) ? s.defaultView || s.parentWindow : window, u ? (u = r, null !== (c = (c = n.relatedTarget || n.toElement) ? $e(c) : null) && (f = l(c), d = c.tag, c !== f || 5 !== d && 27 !== d && 6 !== d) && (c = null)) : (u = null, c = r), u !== c)) {
                    if (d = ln, g = "onMouseLeave", p = "onMouseEnter", m = "mouse", "pointerout" !== e && "pointerover" !== e || (d = yn, g = "onPointerLeave", p = "onPointerEnter", m = "pointer"), f = null == u ? s : qe(u), h = null == c ? s : qe(c), (s = new d(g, m + "leave", u, n, a)).target = f, s.relatedTarget = h, g = null, $e(a) === r && ((d = new d(p, m + "enter", c, n, a)).target = h, d.relatedTarget = f, g = d), f = g, u && c) e: {
                        for (p = c, m = 0, h = d = u; h; h = Kc(h)) m++;
                        for (h = 0, g = p; g; g = Kc(g)) h++;
                        for (; 0 < m - h;) d = Kc(d),
                        m--;
                        for (; 0 < h - m;) p = Kc(p),
                        h--;
                        for (; m--;) {
                            if (d === p || null !== p && d === p.alternate) break e;
                            d = Kc(d), p = Kc(p)
                        }
                        d = null
                    }
                    else d = null;
                    null !== u && Qc(i, s, u, d, !1), null !== c && null !== f && Qc(i, f, c, d, !0)
                }
                if ("select" === (u = (s = r ? qe(r) : window).nodeName && s.nodeName.toLowerCase()) || "input" === u && "file" === s.type) var b = In;
                else if (An(s))
                    if (Un) b = Gn;
                    else {
                        b = Qn;
                        var y = Kn
                    }
                else !(u = s.nodeName) || "input" !== u.toLowerCase() || "checkbox" !== s.type && "radio" !== s.type ? r && zt(r.elementType) && (b = In) : b = Yn;
                switch (b && (b = b(e, r)) ? On(i, b, n, a) : (y && y(e, s, r), "focusout" === e && r && "number" === s.type && null != r.memoizedProps.value && xt(s, "number", s.value)), y = r ? qe(r) : window, e) {
                    case "focusin":
                        (An(y) || "true" === y.contentEditable) && (lr = y, or = r, ir = null);
                        break;
                    case "focusout":
                        ir = or = lr = null;
                        break;
                    case "mousedown":
                        sr = !0;
                        break;
                    case "contextmenu":
                    case "mouseup":
                    case "dragend":
                        sr = !1, ur(i, n, a);
                        break;
                    case "selectionchange":
                        if (ar) break;
                    case "keydown":
                    case "keyup":
                        ur(i, n, a)
                }
                var v;
                if (Nn) e: {
                    switch (e) {
                        case "compositionstart":
                            var x = "onCompositionStart";
                            break e;
                        case "compositionend":
                            x = "onCompositionEnd";
                            break e;
                        case "compositionupdate":
                            x = "onCompositionUpdate";
                            break e
                    }
                    x = void 0
                }
                else Ln ? _n(e, n) && (x = "onCompositionEnd") : "keydown" === e && 229 === n.keyCode && (x = "onCompositionStart");
                x && (jn && "ko" !== n.locale && (Ln || "onCompositionStart" !== x ? "onCompositionEnd" === x && Ln && (v = Vt()) : (Bt = "value" in ($t = a) ? $t.value : $t.textContent, Ln = !0)), 0 < (y = Vc(r, x)).length && (x = new dn(x, e, null, n, a), i.push({
                        event: x,
                        listeners: y
                    }), v ? x.data = v : null !== (v = Tn(n)) && (x.data = v))), (v = Cn ? function(e, t) {
                        switch (e) {
                            case "compositionend":
                                return Tn(t);
                            case "keypress":
                                return 32 !== t.which ? null : (Pn = !0, zn);
                            case "textInput":
                                return (e = t.data) === zn && Pn ? null : e;
                            default:
                                return null
                        }
                    }(e, n) : function(e, t) {
                        if (Ln) return "compositionend" === e || !Nn && _n(e, t) ? (e = Vt(), qt = Bt = $t = null, Ln = !1, e) : null;
                        switch (e) {
                            case "paste":
                            default:
                                return null;
                            case "keypress":
                                if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
                                    if (t.char && 1 < t.char.length) return t.char;
                                    if (t.which) return String.fromCharCode(t.which)
                                }
                                return null;
                            case "compositionend":
                                return jn && "ko" !== t.locale ? null : t.data
                        }
                    }(e, n)) && (0 < (x = Vc(r, "onBeforeInput")).length && (y = new dn("onBeforeInput", "beforeinput", null, n, a), i.push({
                        event: y,
                        listeners: x
                    }), y.data = v)),
                    function(e, t, n, r, a) {
                        if ("submit" === t && n && n.stateNode === a) {
                            var l = Lc((a[Oe] || null).action),
                                o = r.submitter;
                            o && null !== (t = (t = o[Oe] || null) ? Lc(t.formAction) : o.getAttribute("formAction")) && (l = t, o = null);
                            var i = new tn("action", "action", null, r, a);
                            e.push({
                                event: i,
                                listeners: [{
                                    instance: null,
                                    listener: function() {
                                        if (r.defaultPrevented) {
                                            if (0 !== Sc) {
                                                var e = o ? Mc(a, o) : new FormData(a);
                                                Mo(n, {
                                                    pending: !0,
                                                    data: e,
                                                    method: a.method,
                                                    action: l
                                                }, null, e)
                                            }
                                        } else "function" == typeof l && (i.preventDefault(), e = o ? Mc(a, o) : new FormData(a), Mo(n, {
                                            pending: !0,
                                            data: e,
                                            method: a.method,
                                            action: l
                                        }, l, e))
                                    },
                                    currentTarget: a
                                }]
                            })
                        }
                    }(i, e, r, n, a)
            }
            Rc(i, t)
        }))
    }

    function qc(e, t, n) {
        return {
            instance: e,
            listener: t,
            currentTarget: n
        }
    }

    function Vc(e, t) {
        for (var n = t + "Capture", r = []; null !== e;) {
            var a = e,
                l = a.stateNode;
            if (5 !== (a = a.tag) && 26 !== a && 27 !== a || null === l || (null != (a = Ht(e, n)) && r.unshift(qc(e, a, l)), null != (a = Ht(e, t)) && r.push(qc(e, a, l))), 3 === e.tag) return r;
            e = e.return
        }
        return []
    }

    function Kc(e) {
        if (null === e) return null;
        do {
            e = e.return
        } while (e && 5 !== e.tag && 27 !== e.tag);
        return e || null
    }

    function Qc(e, t, n, r, a) {
        for (var l = t._reactName, o = []; null !== n && n !== r;) {
            var i = n,
                s = i.alternate,
                u = i.stateNode;
            if (i = i.tag, null !== s && s === r) break;
            5 !== i && 26 !== i && 27 !== i || null === u || (s = u, a ? null != (u = Ht(n, l)) && o.unshift(qc(n, u, s)) : a || null != (u = Ht(n, l)) && o.push(qc(n, u, s))), n = n.return
        }
        0 !== o.length && e.push({
            event: t,
            listeners: o
        })
    }
    var Yc = /\r\n?/g,
        Gc = /\u0000|\uFFFD/g;

    function Xc(e) {
        return ("string" == typeof e ? e : "" + e).replace(Yc, "\n").replace(Gc, "")
    }

    function Jc(e, t) {
        return t = Xc(t), Xc(e) === t
    }

    function Zc() {}

    function ed(e, t, n, a, l, o) {
        switch (n) {
            case "children":
                "string" == typeof a ? "body" === t || "textarea" === t && "" === a || Nt(e, a) : ("number" == typeof a || "bigint" == typeof a) && "body" !== t && Nt(e, "" + a);
                break;
            case "className":
                at(e, "class", a);
                break;
            case "tabIndex":
                at(e, "tabindex", a);
                break;
            case "dir":
            case "role":
            case "viewBox":
            case "width":
            case "height":
                at(e, n, a);
                break;
            case "style":
                jt(e, a, o);
                break;
            case "data":
                if ("object" !== t) {
                    at(e, "data", a);
                    break
                }
            case "src":
            case "href":
                if ("" === a && ("a" !== t || "href" !== n)) {
                    e.removeAttribute(n);
                    break
                }
                if (null == a || "function" == typeof a || "symbol" == typeof a || "boolean" == typeof a) {
                    e.removeAttribute(n);
                    break
                }
                a = Tt("" + a), e.setAttribute(n, a);
                break;
            case "action":
            case "formAction":
                if ("function" == typeof a) {
                    e.setAttribute(n, "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");
                    break
                }
                if ("function" == typeof o && ("formAction" === n ? ("input" !== t && ed(e, t, "name", l.name, l, null), ed(e, t, "formEncType", l.formEncType, l, null), ed(e, t, "formMethod", l.formMethod, l, null), ed(e, t, "formTarget", l.formTarget, l, null)) : (ed(e, t, "encType", l.encType, l, null), ed(e, t, "method", l.method, l, null), ed(e, t, "target", l.target, l, null))), null == a || "symbol" == typeof a || "boolean" == typeof a) {
                    e.removeAttribute(n);
                    break
                }
                a = Tt("" + a), e.setAttribute(n, a);
                break;
            case "onClick":
                null != a && (e.onclick = Zc);
                break;
            case "onScroll":
                null != a && Hc("scroll", e);
                break;
            case "onScrollEnd":
                null != a && Hc("scrollend", e);
                break;
            case "dangerouslySetInnerHTML":
                if (null != a) {
                    if ("object" != typeof a || !("__html" in a)) throw Error(r(61));
                    if (null != (n = a.__html)) {
                        if (null != l.children) throw Error(r(60));
                        e.innerHTML = n
                    }
                }
                break;
            case "multiple":
                e.multiple = a && "function" != typeof a && "symbol" != typeof a;
                break;
            case "muted":
                e.muted = a && "function" != typeof a && "symbol" != typeof a;
                break;
            case "suppressContentEditableWarning":
            case "suppressHydrationWarning":
            case "defaultValue":
            case "defaultChecked":
            case "innerHTML":
            case "ref":
            case "autoFocus":
                break;
            case "xlinkHref":
                if (null == a || "function" == typeof a || "boolean" == typeof a || "symbol" == typeof a) {
                    e.removeAttribute("xlink:href");
                    break
                }
                n = Tt("" + a), e.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", n);
                break;
            case "contentEditable":
            case "spellCheck":
            case "draggable":
            case "value":
            case "autoReverse":
            case "externalResourcesRequired":
            case "focusable":
            case "preserveAlpha":
                null != a && "function" != typeof a && "symbol" != typeof a ? e.setAttribute(n, "" + a) : e.removeAttribute(n);
                break;
            case "inert":
            case "allowFullScreen":
            case "async":
            case "autoPlay":
            case "controls":
            case "default":
            case "defer":
            case "disabled":
            case "disablePictureInPicture":
            case "disableRemotePlayback":
            case "formNoValidate":
            case "hidden":
            case "loop":
            case "noModule":
            case "noValidate":
            case "open":
            case "playsInline":
            case "readOnly":
            case "required":
            case "reversed":
            case "scoped":
            case "seamless":
            case "itemScope":
                a && "function" != typeof a && "symbol" != typeof a ? e.setAttribute(n, "") : e.removeAttribute(n);
                break;
            case "capture":
            case "download":
                !0 === a ? e.setAttribute(n, "") : !1 !== a && null != a && "function" != typeof a && "symbol" != typeof a ? e.setAttribute(n, a) : e.removeAttribute(n);
                break;
            case "cols":
            case "rows":
            case "size":
            case "span":
                null != a && "function" != typeof a && "symbol" != typeof a && !isNaN(a) && 1 <= a ? e.setAttribute(n, a) : e.removeAttribute(n);
                break;
            case "rowSpan":
            case "start":
                null == a || "function" == typeof a || "symbol" == typeof a || isNaN(a) ? e.removeAttribute(n) : e.setAttribute(n, a);
                break;
            case "popover":
                Hc("beforetoggle", e), Hc("toggle", e), rt(e, "popover", a);
                break;
            case "xlinkActuate":
                lt(e, "http://www.w3.org/1999/xlink", "xlink:actuate", a);
                break;
            case "xlinkArcrole":
                lt(e, "http://www.w3.org/1999/xlink", "xlink:arcrole", a);
                break;
            case "xlinkRole":
                lt(e, "http://www.w3.org/1999/xlink", "xlink:role", a);
                break;
            case "xlinkShow":
                lt(e, "http://www.w3.org/1999/xlink", "xlink:show", a);
                break;
            case "xlinkTitle":
                lt(e, "http://www.w3.org/1999/xlink", "xlink:title", a);
                break;
            case "xlinkType":
                lt(e, "http://www.w3.org/1999/xlink", "xlink:type", a);
                break;
            case "xmlBase":
                lt(e, "http://www.w3.org/XML/1998/namespace", "xml:base", a);
                break;
            case "xmlLang":
                lt(e, "http://www.w3.org/XML/1998/namespace", "xml:lang", a);
                break;
            case "xmlSpace":
                lt(e, "http://www.w3.org/XML/1998/namespace", "xml:space", a);
                break;
            case "is":
                rt(e, "is", a);
                break;
            case "innerText":
            case "textContent":
                break;
            default:
                (!(2 < n.length) || "o" !== n[0] && "O" !== n[0] || "n" !== n[1] && "N" !== n[1]) && rt(e, n = Pt.get(n) || n, a)
        }
    }

    function td(e, t, n, a, l, o) {
        switch (n) {
            case "style":
                jt(e, a, o);
                break;
            case "dangerouslySetInnerHTML":
                if (null != a) {
                    if ("object" != typeof a || !("__html" in a)) throw Error(r(61));
                    if (null != (n = a.__html)) {
                        if (null != l.children) throw Error(r(60));
                        e.innerHTML = n
                    }
                }
                break;
            case "children":
                "string" == typeof a ? Nt(e, a) : ("number" == typeof a || "bigint" == typeof a) && Nt(e, "" + a);
                break;
            case "onScroll":
                null != a && Hc("scroll", e);
                break;
            case "onScrollEnd":
                null != a && Hc("scrollend", e);
                break;
            case "onClick":
                null != a && (e.onclick = Zc);
                break;
            case "suppressContentEditableWarning":
            case "suppressHydrationWarning":
            case "innerHTML":
            case "ref":
            case "innerText":
            case "textContent":
                break;
            default:
                Ye.hasOwnProperty(n) || ("o" !== n[0] || "n" !== n[1] || (l = n.endsWith("Capture"), t = n.slice(2, l ? n.length - 7 : void 0), "function" == typeof(o = null != (o = e[Oe] || null) ? o[n] : null) && e.removeEventListener(t, o, l), "function" != typeof a) ? n in e ? e[n] = a : !0 === a ? e.setAttribute(n, "") : rt(e, n, a) : ("function" != typeof o && null !== o && (n in e ? e[n] = null : e.hasAttribute(n) && e.removeAttribute(n)), e.addEventListener(t, a, l)))
        }
    }

    function nd(e, t, n) {
        switch (t) {
            case "div":
            case "span":
            case "svg":
            case "path":
            case "a":
            case "g":
            case "p":
            case "li":
                break;
            case "img":
                Hc("error", e), Hc("load", e);
                var a, l = !1,
                    o = !1;
                for (a in n)
                    if (n.hasOwnProperty(a)) {
                        var i = n[a];
                        if (null != i) switch (a) {
                            case "src":
                                l = !0;
                                break;
                            case "srcSet":
                                o = !0;
                                break;
                            case "children":
                            case "dangerouslySetInnerHTML":
                                throw Error(r(137, t));
                            default:
                                ed(e, t, a, i, n, null)
                        }
                    } return o && ed(e, t, "srcSet", n.srcSet, n, null), void(l && ed(e, t, "src", n.src, n, null));
            case "input":
                Hc("invalid", e);
                var s = a = i = o = null,
                    u = null,
                    c = null;
                for (l in n)
                    if (n.hasOwnProperty(l)) {
                        var d = n[l];
                        if (null != d) switch (l) {
                            case "name":
                                o = d;
                                break;
                            case "type":
                                i = d;
                                break;
                            case "checked":
                                u = d;
                                break;
                            case "defaultChecked":
                                c = d;
                                break;
                            case "value":
                                a = d;
                                break;
                            case "defaultValue":
                                s = d;
                                break;
                            case "children":
                            case "dangerouslySetInnerHTML":
                                if (null != d) throw Error(r(137, t));
                                break;
                            default:
                                ed(e, t, l, d, n, null)
                        }
                    } return vt(e, a, s, u, c, i, o, !1), void pt(e);
            case "select":
                for (o in Hc("invalid", e), l = i = a = null, n)
                    if (n.hasOwnProperty(o) && null != (s = n[o])) switch (o) {
                        case "value":
                            a = s;
                            break;
                        case "defaultValue":
                            i = s;
                            break;
                        case "multiple":
                            l = s;
                        default:
                            ed(e, t, o, s, n, null)
                    }
                return t = a, n = i, e.multiple = !!l, void(null != t ? wt(e, !!l, t, !1) : null != n && wt(e, !!l, n, !0));
            case "textarea":
                for (i in Hc("invalid", e), a = o = l = null, n)
                    if (n.hasOwnProperty(i) && null != (s = n[i])) switch (i) {
                        case "value":
                            l = s;
                            break;
                        case "defaultValue":
                            o = s;
                            break;
                        case "children":
                            a = s;
                            break;
                        case "dangerouslySetInnerHTML":
                            if (null != s) throw Error(r(91));
                            break;
                        default:
                            ed(e, t, i, s, n, null)
                    }
                return St(e, l, o, a), void pt(e);
            case "option":
                for (u in n)
                    if (n.hasOwnProperty(u) && null != (l = n[u]))
                        if ("selected" === u) e.selected = l && "function" != typeof l && "symbol" != typeof l;
                        else ed(e, t, u, l, n, null);
                return;
            case "dialog":
                Hc("beforetoggle", e), Hc("toggle", e), Hc("cancel", e), Hc("close", e);
                break;
            case "iframe":
            case "object":
                Hc("load", e);
                break;
            case "video":
            case "audio":
                for (l = 0; l < Dc.length; l++) Hc(Dc[l], e);
                break;
            case "image":
                Hc("error", e), Hc("load", e);
                break;
            case "details":
                Hc("toggle", e);
                break;
            case "embed":
            case "source":
            case "link":
                Hc("error", e), Hc("load", e);
            case "area":
            case "base":
            case "br":
            case "col":
            case "hr":
            case "keygen":
            case "meta":
            case "param":
            case "track":
            case "wbr":
            case "menuitem":
                for (c in n)
                    if (n.hasOwnProperty(c) && null != (l = n[c])) switch (c) {
                        case "children":
                        case "dangerouslySetInnerHTML":
                            throw Error(r(137, t));
                        default:
                            ed(e, t, c, l, n, null)
                    }
                return;
            default:
                if (zt(t)) {
                    for (d in n) n.hasOwnProperty(d) && (void 0 !== (l = n[d]) && td(e, t, d, l, n, void 0));
                    return
                }
        }
        for (s in n) n.hasOwnProperty(s) && (null != (l = n[s]) && ed(e, t, s, l, n, null))
    }
    var rd = null,
        ad = null;

    function ld(e) {
        return 9 === e.nodeType ? e : e.ownerDocument
    }

    function od(e) {
        switch (e) {
            case "http://www.w3.org/2000/svg":
                return 1;
            case "http://www.w3.org/1998/Math/MathML":
                return 2;
            default:
                return 0
        }
    }

    function id(e, t) {
        if (0 === e) switch (t) {
            case "svg":
                return 1;
            case "math":
                return 2;
            default:
                return 0
        }
        return 1 === e && "foreignObject" === t ? 0 : e
    }

    function sd(e, t) {
        return "textarea" === e || "noscript" === e || "string" == typeof t.children || "number" == typeof t.children || "bigint" == typeof t.children || "object" == typeof t.dangerouslySetInnerHTML && null !== t.dangerouslySetInnerHTML && null != t.dangerouslySetInnerHTML.__html
    }
    var ud = null;
    var cd = "function" == typeof setTimeout ? setTimeout : void 0,
        dd = "function" == typeof clearTimeout ? clearTimeout : void 0,
        fd = "function" == typeof Promise ? Promise : void 0,
        pd = "function" == typeof queueMicrotask ? queueMicrotask : void 0 !== fd ? function(e) {
            return fd.resolve(null).then(e).catch(hd)
        } : cd;

    function hd(e) {
        setTimeout((function() {
            throw e
        }))
    }

    function md(e) {
        return "head" === e
    }

    function gd(e, t) {
        var n = t,
            r = 0,
            a = 0;
        do {
            var l = n.nextSibling;
            if (e.removeChild(n), l && 8 === l.nodeType)
                if ("/$" === (n = l.data)) {
                    if (0 < r && 8 > r) {
                        n = r;
                        var o = e.ownerDocument;
                        if (1 & n && Sd(o.documentElement), 2 & n && Sd(o.body), 4 & n)
                            for (Sd(n = o.head), o = n.firstChild; o;) {
                                var i = o.nextSibling,
                                    s = o.nodeName;
                                o[Ue] || "SCRIPT" === s || "STYLE" === s || "LINK" === s && "stylesheet" === o.rel.toLowerCase() || n.removeChild(o), o = i
                            }
                    }
                    if (0 === a) return e.removeChild(l), void _f(t);
                    a--
                } else "$" === n || "$?" === n || "$!" === n ? a++ : r = n.charCodeAt(0) - 48;
            else r = 0;
            n = l
        } while (n);
        _f(t)
    }

    function bd(e) {
        var t = e.firstChild;
        for (t && 10 === t.nodeType && (t = t.nextSibling); t;) {
            var n = t;
            switch (t = t.nextSibling, n.nodeName) {
                case "HTML":
                case "HEAD":
                case "BODY":
                    bd(n), We(n);
                    continue;
                case "SCRIPT":
                case "STYLE":
                    continue;
                case "LINK":
                    if ("stylesheet" === n.rel.toLowerCase()) continue
            }
            e.removeChild(n)
        }
    }

    function yd(e) {
        return "$!" === e.data || "$?" === e.data && "complete" === e.ownerDocument.readyState
    }

    function vd(e) {
        for (; null != e; e = e.nextSibling) {
            var t = e.nodeType;
            if (1 === t || 3 === t) break;
            if (8 === t) {
                if ("$" === (t = e.data) || "$!" === t || "$?" === t || "F!" === t || "F" === t) break;
                if ("/$" === t) return null
            }
        }
        return e
    }
    var xd = null;

    function wd(e) {
        e = e.previousSibling;
        for (var t = 0; e;) {
            if (8 === e.nodeType) {
                var n = e.data;
                if ("$" === n || "$!" === n || "$?" === n) {
                    if (0 === t) return e;
                    t--
                } else "/$" === n && t++
            }
            e = e.previousSibling
        }
        return null
    }

    function kd(e, t, n) {
        switch (t = ld(n), e) {
            case "html":
                if (!(e = t.documentElement)) throw Error(r(452));
                return e;
            case "head":
                if (!(e = t.head)) throw Error(r(453));
                return e;
            case "body":
                if (!(e = t.body)) throw Error(r(454));
                return e;
            default:
                throw Error(r(451))
        }
    }

    function Sd(e) {
        for (var t = e.attributes; t.length;) e.removeAttributeNode(t[0]);
        We(e)
    }
    var Nd = new Map,
        Ed = new Set;

    function Cd(e) {
        return "function" == typeof e.getRootNode ? e.getRootNode() : 9 === e.nodeType ? e : e.ownerDocument
    }
    var jd = F.d;
    F.d = {
        f: function() {
            var e = jd.f(),
                t = $u();
            return e || t
        },
        r: function(e) {
            var t = Be(e);
            null !== t && 5 === t.tag && "form" === t.type ? Oo(t) : jd.r(e)
        },
        D: function(e) {
            jd.D(e), Pd("dns-prefetch", e, null)
        },
        C: function(e, t) {
            jd.C(e, t), Pd("preconnect", e, t)
        },
        L: function(e, t, n) {
            jd.L(e, t, n);
            var r = zd;
            if (r && e && t) {
                var a = 'link[rel="preload"][as="' + bt(t) + '"]';
                "image" === t && n && n.imageSrcSet ? (a += '[imagesrcset="' + bt(n.imageSrcSet) + '"]', "string" == typeof n.imageSizes && (a += '[imagesizes="' + bt(n.imageSizes) + '"]')) : a += '[href="' + bt(e) + '"]';
                var l = a;
                switch (t) {
                    case "style":
                        l = Td(e);
                        break;
                    case "script":
                        l = Ad(e)
                }
                Nd.has(l) || (e = d({
                    rel: "preload",
                    href: "image" === t && n && n.imageSrcSet ? void 0 : e,
                    as: t
                }, n), Nd.set(l, e), null !== r.querySelector(a) || "style" === t && r.querySelector(Ld(l)) || "script" === t && r.querySelector(Od(l)) || (nd(t = r.createElement("link"), "link", e), Ke(t), r.head.appendChild(t)))
            }
        },
        m: function(e, t) {
            jd.m(e, t);
            var n = zd;
            if (n && e) {
                var r = t && "string" == typeof t.as ? t.as : "script",
                    a = 'link[rel="modulepreload"][as="' + bt(r) + '"][href="' + bt(e) + '"]',
                    l = a;
                switch (r) {
                    case "audioworklet":
                    case "paintworklet":
                    case "serviceworker":
                    case "sharedworker":
                    case "worker":
                    case "script":
                        l = Ad(e)
                }
                if (!Nd.has(l) && (e = d({
                        rel: "modulepreload",
                        href: e
                    }, t), Nd.set(l, e), null === n.querySelector(a))) {
                    switch (r) {
                        case "audioworklet":
                        case "paintworklet":
                        case "serviceworker":
                        case "sharedworker":
                        case "worker":
                        case "script":
                            if (n.querySelector(Od(l))) return
                    }
                    nd(r = n.createElement("link"), "link", e), Ke(r), n.head.appendChild(r)
                }
            }
        },
        X: function(e, t) {
            jd.X(e, t);
            var n = zd;
            if (n && e) {
                var r = Ve(n).hoistableScripts,
                    a = Ad(e),
                    l = r.get(a);
                l || ((l = n.querySelector(Od(a))) || (e = d({
                    src: e,
                    async: !0
                }, t), (t = Nd.get(a)) && Hd(e, t), Ke(l = n.createElement("script")), nd(l, "link", e), n.head.appendChild(l)), l = {
                    type: "script",
                    instance: l,
                    count: 1,
                    state: null
                }, r.set(a, l))
            }
        },
        S: function(e, t, n) {
            jd.S(e, t, n);
            var r = zd;
            if (r && e) {
                var a = Ve(r).hoistableStyles,
                    l = Td(e);
                t = t || "default";
                var o = a.get(l);
                if (!o) {
                    var i = {
                        loading: 0,
                        preload: null
                    };
                    if (o = r.querySelector(Ld(l))) i.loading = 5;
                    else {
                        e = d({
                            rel: "stylesheet",
                            href: e,
                            "data-precedence": t
                        }, n), (n = Nd.get(l)) && Rd(e, n);
                        var s = o = r.createElement("link");
                        Ke(s), nd(s, "link", e), s._p = new Promise((function(e, t) {
                            s.onload = e, s.onerror = t
                        })), s.addEventListener("load", (function() {
                            i.loading |= 1
                        })), s.addEventListener("error", (function() {
                            i.loading |= 2
                        })), i.loading |= 4, Fd(o, t, r)
                    }
                    o = {
                        type: "stylesheet",
                        instance: o,
                        count: 1,
                        state: i
                    }, a.set(l, o)
                }
            }
        },
        M: function(e, t) {
            jd.M(e, t);
            var n = zd;
            if (n && e) {
                var r = Ve(n).hoistableScripts,
                    a = Ad(e),
                    l = r.get(a);
                l || ((l = n.querySelector(Od(a))) || (e = d({
                    src: e,
                    async: !0,
                    type: "module"
                }, t), (t = Nd.get(a)) && Hd(e, t), Ke(l = n.createElement("script")), nd(l, "link", e), n.head.appendChild(l)), l = {
                    type: "script",
                    instance: l,
                    count: 1,
                    state: null
                }, r.set(a, l))
            }
        }
    };
    var zd = "undefined" == typeof document ? null : document;

    function Pd(e, t, n) {
        var r = zd;
        if (r && "string" == typeof t && t) {
            var a = bt(t);
            a = 'link[rel="' + e + '"][href="' + a + '"]', "string" == typeof n && (a += '[crossorigin="' + n + '"]'), Ed.has(a) || (Ed.add(a), e = {
                rel: e,
                crossOrigin: n,
                href: t
            }, null === r.querySelector(a) && (nd(t = r.createElement("link"), "link", e), Ke(t), r.head.appendChild(t)))
        }
    }

    function _d(e, t, n, a) {
        var l, o, i, s, u = (u = V.current) ? Cd(u) : null;
        if (!u) throw Error(r(446));
        switch (e) {
            case "meta":
            case "title":
                return null;
            case "style":
                return "string" == typeof n.precedence && "string" == typeof n.href ? (t = Td(n.href), (a = (n = Ve(u).hoistableStyles).get(t)) || (a = {
                    type: "style",
                    instance: null,
                    count: 0,
                    state: null
                }, n.set(t, a)), a) : {
                    type: "void",
                    instance: null,
                    count: 0,
                    state: null
                };
            case "link":
                if ("stylesheet" === n.rel && "string" == typeof n.href && "string" == typeof n.precedence) {
                    e = Td(n.href);
                    var c = Ve(u).hoistableStyles,
                        d = c.get(e);
                    if (d || (u = u.ownerDocument || u, d = {
                            type: "stylesheet",
                            instance: null,
                            count: 0,
                            state: {
                                loading: 0,
                                preload: null
                            }
                        }, c.set(e, d), (c = u.querySelector(Ld(e))) && !c._p && (d.instance = c, d.state.loading = 5), Nd.has(e) || (n = {
                            rel: "preload",
                            as: "style",
                            href: n.href,
                            crossOrigin: n.crossOrigin,
                            integrity: n.integrity,
                            media: n.media,
                            hrefLang: n.hrefLang,
                            referrerPolicy: n.referrerPolicy
                        }, Nd.set(e, n), c || (l = u, o = e, i = n, s = d.state, l.querySelector('link[rel="preload"][as="style"][' + o + "]") ? s.loading = 1 : (o = l.createElement("link"), s.preload = o, o.addEventListener("load", (function() {
                            return s.loading |= 1
                        })), o.addEventListener("error", (function() {
                            return s.loading |= 2
                        })), nd(o, "link", i), Ke(o), l.head.appendChild(o))))), t && null === a) throw Error(r(528, ""));
                    return d
                }
                if (t && null !== a) throw Error(r(529, ""));
                return null;
            case "script":
                return t = n.async, "string" == typeof(n = n.src) && t && "function" != typeof t && "symbol" != typeof t ? (t = Ad(n), (a = (n = Ve(u).hoistableScripts).get(t)) || (a = {
                    type: "script",
                    instance: null,
                    count: 0,
                    state: null
                }, n.set(t, a)), a) : {
                    type: "void",
                    instance: null,
                    count: 0,
                    state: null
                };
            default:
                throw Error(r(444, e))
        }
    }

    function Td(e) {
        return 'href="' + bt(e) + '"'
    }

    function Ld(e) {
        return 'link[rel="stylesheet"][' + e + "]"
    }

    function Md(e) {
        return d({}, e, {
            "data-precedence": e.precedence,
            precedence: null
        })
    }

    function Ad(e) {
        return '[src="' + bt(e) + '"]'
    }

    function Od(e) {
        return "script[async]" + e
    }

    function Dd(e, t, n) {
        if (t.count++, null === t.instance) switch (t.type) {
            case "style":
                var a = e.querySelector('style[data-href~="' + bt(n.href) + '"]');
                if (a) return t.instance = a, Ke(a), a;
                var l = d({}, n, {
                    "data-href": n.href,
                    "data-precedence": n.precedence,
                    href: null,
                    precedence: null
                });
                return Ke(a = (e.ownerDocument || e).createElement("style")), nd(a, "style", l), Fd(a, n.precedence, e), t.instance = a;
            case "stylesheet":
                l = Td(n.href);
                var o = e.querySelector(Ld(l));
                if (o) return t.state.loading |= 4, t.instance = o, Ke(o), o;
                a = Md(n), (l = Nd.get(l)) && Rd(a, l), Ke(o = (e.ownerDocument || e).createElement("link"));
                var i = o;
                return i._p = new Promise((function(e, t) {
                    i.onload = e, i.onerror = t
                })), nd(o, "link", a), t.state.loading |= 4, Fd(o, n.precedence, e), t.instance = o;
            case "script":
                return o = Ad(n.src), (l = e.querySelector(Od(o))) ? (t.instance = l, Ke(l), l) : (a = n, (l = Nd.get(o)) && Hd(a = d({}, n), l), Ke(l = (e = e.ownerDocument || e).createElement("script")), nd(l, "link", a), e.head.appendChild(l), t.instance = l);
            case "void":
                return null;
            default:
                throw Error(r(443, t.type))
        } else "stylesheet" === t.type && !(4 & t.state.loading) && (a = t.instance, t.state.loading |= 4, Fd(a, n.precedence, e));
        return t.instance
    }

    function Fd(e, t, n) {
        for (var r = n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'), a = r.length ? r[r.length - 1] : null, l = a, o = 0; o < r.length; o++) {
            var i = r[o];
            if (i.dataset.precedence === t) l = i;
            else if (l !== a) break
        }
        l ? l.parentNode.insertBefore(e, l.nextSibling) : (t = 9 === n.nodeType ? n.head : n).insertBefore(e, t.firstChild)
    }

    function Rd(e, t) {
        null == e.crossOrigin && (e.crossOrigin = t.crossOrigin), null == e.referrerPolicy && (e.referrerPolicy = t.referrerPolicy), null == e.title && (e.title = t.title)
    }

    function Hd(e, t) {
        null == e.crossOrigin && (e.crossOrigin = t.crossOrigin), null == e.referrerPolicy && (e.referrerPolicy = t.referrerPolicy), null == e.integrity && (e.integrity = t.integrity)
    }
    var Id = null;

    function Ud(e, t, n) {
        if (null === Id) {
            var r = new Map,
                a = Id = new Map;
            a.set(n, r)
        } else(r = (a = Id).get(n)) || (r = new Map, a.set(n, r));
        if (r.has(e)) return r;
        for (r.set(e, null), n = n.getElementsByTagName(e), a = 0; a < n.length; a++) {
            var l = n[a];
            if (!(l[Ue] || l[Ae] || "link" === e && "stylesheet" === l.getAttribute("rel")) && "http://www.w3.org/2000/svg" !== l.namespaceURI) {
                var o = l.getAttribute(t) || "";
                o = e + o;
                var i = r.get(o);
                i ? i.push(l) : r.set(o, [l])
            }
        }
        return r
    }

    function Wd(e, t, n) {
        (e = e.ownerDocument || e).head.insertBefore(n, "title" === t ? e.querySelector("head > title") : null)
    }

    function $d(e) {
        return !!("stylesheet" !== e.type || 3 & e.state.loading)
    }
    var Bd = null;

    function qd() {}

    function Vd() {
        if (this.count--, 0 === this.count)
            if (this.stylesheets) Qd(this, this.stylesheets);
            else if (this.unsuspend) {
            var e = this.unsuspend;
            this.unsuspend = null, e()
        }
    }
    var Kd = null;

    function Qd(e, t) {
        e.stylesheets = null, null !== e.unsuspend && (e.count++, Kd = new Map, t.forEach(Yd, e), Kd = null, Vd.call(e))
    }

    function Yd(e, t) {
        if (!(4 & t.state.loading)) {
            var n = Kd.get(e);
            if (n) var r = n.get(null);
            else {
                n = new Map, Kd.set(e, n);
                for (var a = e.querySelectorAll("link[data-precedence],style[data-precedence]"), l = 0; l < a.length; l++) {
                    var o = a[l];
                    "LINK" !== o.nodeName && "not all" === o.getAttribute("media") || (n.set(o.dataset.precedence, o), r = o)
                }
                r && n.set(null, r)
            }
            o = (a = t.instance).getAttribute("data-precedence"), (l = n.get(o) || r) === r && n.set(null, a), n.set(o, a), this.count++, r = Vd.bind(this), a.addEventListener("load", r), a.addEventListener("error", r), l ? l.parentNode.insertBefore(a, l.nextSibling) : (e = 9 === e.nodeType ? e.head : e).insertBefore(a, e.firstChild), t.state.loading |= 4
        }
    }
    var Gd = {
        $$typeof: x,
        Provider: null,
        Consumer: null,
        _currentValue: R,
        _currentValue2: R,
        _threadCount: 0
    };

    function Xd(e, t, n, r, a, l, o, i) {
        this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Ce(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Ce(0), this.hiddenUpdates = Ce(null), this.identifierPrefix = r, this.onUncaughtError = a, this.onCaughtError = l, this.onRecoverableError = o, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = i, this.incompleteTransitions = new Map
    }

    function Jd(e, t, n, r, a, l, o, i, s, u, c, d) {
        return e = new Xd(e, t, n, o, i, s, u, d), t = 1, !0 === l && (t |= 24), l = Rr(3, null, null, t), e.current = l, l.stateNode = e, (t = Oa()).refCount++, e.pooledCache = t, t.refCount++, l.memoizedState = {
            element: r,
            isDehydrated: n,
            cache: t
        }, al(l), e
    }

    function Zd(e) {
        return e ? e = Dr : Dr
    }

    function ef(e, t, n, r, a, l) {
        a = Zd(a), null === r.context ? r.context = a : r.pendingContext = a, (r = ol(t)).payload = {
            element: n
        }, null !== (l = void 0 === l ? null : l) && (r.callback = l), null !== (n = il(e, r, t)) && (Ru(n, 0, t), sl(n, e, t))
    }

    function tf(e, t) {
        if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
            var n = e.retryLane;
            e.retryLane = 0 !== n && n < t ? n : t
        }
    }

    function nf(e, t) {
        tf(e, t), (e = e.alternate) && tf(e, t)
    }

    function rf(e) {
        if (13 === e.tag) {
            var t = Mr(e, 67108864);
            null !== t && Ru(t, 0, 67108864), nf(e, 67108864)
        }
    }
    var af = !0;

    function lf(e, t, n, r) {
        var a = D.T;
        D.T = null;
        var l = F.p;
        try {
            F.p = 2, sf(e, t, n, r)
        } finally {
            F.p = l, D.T = a
        }
    }

    function of(e, t, n, r) {
        var a = D.T;
        D.T = null;
        var l = F.p;
        try {
            F.p = 8, sf(e, t, n, r)
        } finally {
            F.p = l, D.T = a
        }
    }

    function sf(e, t, n, r) {
        if (af) {
            var a = uf(r);
            if (null === a) Bc(e, t, r, cf, n), wf(e, r);
            else if (function(e, t, n, r, a) {
                    switch (t) {
                        case "focusin":
                            return hf = kf(hf, e, t, n, r, a), !0;
                        case "dragenter":
                            return mf = kf(mf, e, t, n, r, a), !0;
                        case "mouseover":
                            return gf = kf(gf, e, t, n, r, a), !0;
                        case "pointerover":
                            var l = a.pointerId;
                            return bf.set(l, kf(bf.get(l) || null, e, t, n, r, a)), !0;
                        case "gotpointercapture":
                            return l = a.pointerId, yf.set(l, kf(yf.get(l) || null, e, t, n, r, a)), !0
                    }
                    return !1
                }(a, e, t, n, r)) r.stopPropagation();
            else if (wf(e, r), 4 & t && -1 < xf.indexOf(e)) {
                for (; null !== a;) {
                    var l = Be(a);
                    if (null !== l) switch (l.tag) {
                        case 3:
                            if ((l = l.stateNode).current.memoizedState.isDehydrated) {
                                var o = xe(l.pendingLanes);
                                if (0 !== o) {
                                    var i = l;
                                    for (i.pendingLanes |= 2, i.entangledLanes |= 2; o;) {
                                        var s = 1 << 31 - me(o);
                                        i.entanglements[1] |= s, o &= ~s
                                    }
                                    Nc(l), !(6 & au) && (Nu = re() + 500, Ec(0))
                                }
                            }
                            break;
                        case 13:
                            null !== (i = Mr(l, 2)) && Ru(i, 0, 2), $u(), nf(l, 2)
                    }
                    if (null === (l = uf(r)) && Bc(e, t, r, cf, n), l === a) break;
                    a = l
                }
                null !== a && r.stopPropagation()
            } else Bc(e, t, r, null, n)
        }
    }

    function uf(e) {
        return df(e = Mt(e))
    }
    var cf = null;

    function df(e) {
        if (cf = null, null !== (e = $e(e))) {
            var t = l(e);
            if (null === t) e = null;
            else {
                var n = t.tag;
                if (13 === n) {
                    if (null !== (e = o(t))) return e;
                    e = null
                } else if (3 === n) {
                    if (t.stateNode.current.memoizedState.isDehydrated) return 3 === t.tag ? t.stateNode.containerInfo : null;
                    e = null
                } else t !== e && (e = null)
            }
        }
        return cf = e, null
    }

    function ff(e) {
        switch (e) {
            case "beforetoggle":
            case "cancel":
            case "click":
            case "close":
            case "contextmenu":
            case "copy":
            case "cut":
            case "auxclick":
            case "dblclick":
            case "dragend":
            case "dragstart":
            case "drop":
            case "focusin":
            case "focusout":
            case "input":
            case "invalid":
            case "keydown":
            case "keypress":
            case "keyup":
            case "mousedown":
            case "mouseup":
            case "paste":
            case "pause":
            case "play":
            case "pointercancel":
            case "pointerdown":
            case "pointerup":
            case "ratechange":
            case "reset":
            case "resize":
            case "seeked":
            case "submit":
            case "toggle":
            case "touchcancel":
            case "touchend":
            case "touchstart":
            case "volumechange":
            case "change":
            case "selectionchange":
            case "textInput":
            case "compositionstart":
            case "compositionend":
            case "compositionupdate":
            case "beforeblur":
            case "afterblur":
            case "beforeinput":
            case "blur":
            case "fullscreenchange":
            case "focus":
            case "hashchange":
            case "popstate":
            case "select":
            case "selectstart":
                return 2;
            case "drag":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "mousemove":
            case "mouseout":
            case "mouseover":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "scroll":
            case "touchmove":
            case "wheel":
            case "mouseenter":
            case "mouseleave":
            case "pointerenter":
            case "pointerleave":
                return 8;
            case "message":
                switch (ae()) {
                    case le:
                        return 2;
                    case oe:
                        return 8;
                    case ie:
                    case se:
                        return 32;
                    case ue:
                        return 268435456;
                    default:
                        return 32
                }
            default:
                return 32
        }
    }
    var pf = !1,
        hf = null,
        mf = null,
        gf = null,
        bf = new Map,
        yf = new Map,
        vf = [],
        xf = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");

    function wf(e, t) {
        switch (e) {
            case "focusin":
            case "focusout":
                hf = null;
                break;
            case "dragenter":
            case "dragleave":
                mf = null;
                break;
            case "mouseover":
            case "mouseout":
                gf = null;
                break;
            case "pointerover":
            case "pointerout":
                bf.delete(t.pointerId);
                break;
            case "gotpointercapture":
            case "lostpointercapture":
                yf.delete(t.pointerId)
        }
    }

    function kf(e, t, n, r, a, l) {
        return null === e || e.nativeEvent !== l ? (e = {
            blockedOn: t,
            domEventName: n,
            eventSystemFlags: r,
            nativeEvent: l,
            targetContainers: [a]
        }, null !== t && (null !== (t = Be(t)) && rf(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, null !== a && -1 === t.indexOf(a) && t.push(a), e)
    }

    function Sf(e) {
        var t = $e(e.target);
        if (null !== t) {
            var n = l(t);
            if (null !== n)
                if (13 === (t = n.tag)) {
                    if (null !== (t = o(n))) return e.blockedOn = t, void

                    function(e, t) {
                        var n = F.p;
                        try {
                            return F.p = e, t()
                        } finally {
                            F.p = n
                        }
                    }(e.priority, (function() {
                        if (13 === n.tag) {
                            var e = Du();
                            e = _e(e);
                            var t = Mr(n, e);
                            null !== t && Ru(t, 0, e), nf(n, e)
                        }
                    }))
                } else if (3 === t && n.stateNode.current.memoizedState.isDehydrated) return void(e.blockedOn = 3 === n.tag ? n.stateNode.containerInfo : null)
        }
        e.blockedOn = null
    }

    function Nf(e) {
        if (null !== e.blockedOn) return !1;
        for (var t = e.targetContainers; 0 < t.length;) {
            var n = uf(e.nativeEvent);
            if (null !== n) return null !== (t = Be(n)) && rf(t), e.blockedOn = n, !1;
            var r = new(n = e.nativeEvent).constructor(n.type, n);
            Lt = r, n.target.dispatchEvent(r), Lt = null, t.shift()
        }
        return !0
    }

    function Ef(e, t, n) {
        Nf(e) && n.delete(t)
    }

    function Cf() {
        pf = !1, null !== hf && Nf(hf) && (hf = null), null !== mf && Nf(mf) && (mf = null), null !== gf && Nf(gf) && (gf = null), bf.forEach(Ef), yf.forEach(Ef)
    }

    function jf(t, n) {
        t.blockedOn === n && (t.blockedOn = null, pf || (pf = !0, e.unstable_scheduleCallback(e.unstable_NormalPriority, Cf)))
    }
    var zf = null;

    function Pf(t) {
        zf !== t && (zf = t, e.unstable_scheduleCallback(e.unstable_NormalPriority, (function() {
            zf === t && (zf = null);
            for (var e = 0; e < t.length; e += 3) {
                var n = t[e],
                    r = t[e + 1],
                    a = t[e + 2];
                if ("function" != typeof r) {
                    if (null === df(r || n)) continue;
                    break
                }
                var l = Be(n);
                null !== l && (t.splice(e, 3), e -= 3, Mo(l, {
                    pending: !0,
                    data: a,
                    method: n.method,
                    action: r
                }, r, a))
            }
        })))
    }

    function _f(e) {
        function t(t) {
            return jf(t, e)
        }
        null !== hf && jf(hf, e), null !== mf && jf(mf, e), null !== gf && jf(gf, e), bf.forEach(t), yf.forEach(t);
        for (var n = 0; n < vf.length; n++) {
            var r = vf[n];
            r.blockedOn === e && (r.blockedOn = null)
        }
        for (; 0 < vf.length && null === (n = vf[0]).blockedOn;) Sf(n), null === n.blockedOn && vf.shift();
        if (null != (n = (e.ownerDocument || e).$$reactFormReplay))
            for (r = 0; r < n.length; r += 3) {
                var a = n[r],
                    l = n[r + 1],
                    o = a[Oe] || null;
                if ("function" == typeof l) o || Pf(n);
                else if (o) {
                    var i = null;
                    if (l && l.hasAttribute("formAction")) {
                        if (a = l, o = l[Oe] || null) i = o.formAction;
                        else if (null !== df(a)) continue
                    } else i = o.action;
                    "function" == typeof i ? n[r + 1] = i : (n.splice(r, 3), r -= 3), Pf(n)
                }
            }
    }

    function Tf(e) {
        this._internalRoot = e
    }

    function Lf(e) {
        this._internalRoot = e
    }
    Lf.prototype.render = Tf.prototype.render = function(e) {
        var t = this._internalRoot;
        if (null === t) throw Error(r(409));
        ef(t.current, Du(), e, t, null, null)
    }, Lf.prototype.unmount = Tf.prototype.unmount = function() {
        var e = this._internalRoot;
        if (null !== e) {
            this._internalRoot = null;
            var t = e.containerInfo;
            ef(e.current, 2, null, e, null, null), $u(), t[De] = null
        }
    }, Lf.prototype.unstable_scheduleHydration = function(e) {
        if (e) {
            var t = Le();
            e = {
                blockedOn: null,
                target: e,
                priority: t
            };
            for (var n = 0; n < vf.length && 0 !== t && t < vf[n].priority; n++);
            vf.splice(n, 0, e), 0 === n && Sf(e)
        }
    };
    var Mf = t.version;
    if ("19.1.0" !== Mf) throw Error(r(527, Mf, "19.1.0"));
    F.findDOMNode = function(e) {
        var t = e._reactInternals;
        if (void 0 === t) {
            if ("function" == typeof e.render) throw Error(r(188));
            throw e = Object.keys(e).join(","), Error(r(268, e))
        }
        return e = function(e) {
            var t = e.alternate;
            if (!t) {
                if (null === (t = l(e))) throw Error(r(188));
                return t !== e ? null : e
            }
            for (var n = e, a = t;;) {
                var o = n.return;
                if (null === o) break;
                var s = o.alternate;
                if (null === s) {
                    if (null !== (a = o.return)) {
                        n = a;
                        continue
                    }
                    break
                }
                if (o.child === s.child) {
                    for (s = o.child; s;) {
                        if (s === n) return i(o), e;
                        if (s === a) return i(o), t;
                        s = s.sibling
                    }
                    throw Error(r(188))
                }
                if (n.return !== a.return) n = o, a = s;
                else {
                    for (var u = !1, c = o.child; c;) {
                        if (c === n) {
                            u = !0, n = o, a = s;
                            break
                        }
                        if (c === a) {
                            u = !0, a = o, n = s;
                            break
                        }
                        c = c.sibling
                    }
                    if (!u) {
                        for (c = s.child; c;) {
                            if (c === n) {
                                u = !0, n = s, a = o;
                                break
                            }
                            if (c === a) {
                                u = !0, a = s, n = o;
                                break
                            }
                            c = c.sibling
                        }
                        if (!u) throw Error(r(189))
                    }
                }
                if (n.alternate !== a) throw Error(r(190))
            }
            if (3 !== n.tag) throw Error(r(188));
            return n.stateNode.current === n ? e : t
        }(t), e = null === (e = null !== e ? c(e) : null) ? null : e.stateNode
    };
    var Af = {
        bundleType: 0,
        version: "19.1.0",
        rendererPackageName: "react-dom",
        currentDispatcherRef: D,
        reconcilerVersion: "19.1.0"
    };
    if ("undefined" != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
        var Of = __REACT_DEVTOOLS_GLOBAL_HOOK__;
        if (!Of.isDisabled && Of.supportsFiber) try {
            fe = Of.inject(Af), pe = Of
        } catch (Ff) {}
    }
    return E.createRoot = function(e, t) {
        if (!a(e)) throw Error(r(299));
        var n = !1,
            l = "",
            o = xi,
            i = wi,
            s = ki;
        return null != t && (!0 === t.unstable_strictMode && (n = !0), void 0 !== t.identifierPrefix && (l = t.identifierPrefix), void 0 !== t.onUncaughtError && (o = t.onUncaughtError), void 0 !== t.onCaughtError && (i = t.onCaughtError), void 0 !== t.onRecoverableError && (s = t.onRecoverableError), void 0 !== t.unstable_transitionCallbacks && t.unstable_transitionCallbacks), t = Jd(e, 1, !1, null, 0, n, l, o, i, s, 0, null), e[De] = t.current, Wc(e), new Tf(t)
    }, E.hydrateRoot = function(e, t, n) {
        if (!a(e)) throw Error(r(299));
        var l = !1,
            o = "",
            i = xi,
            s = wi,
            u = ki,
            c = null;
        return null != n && (!0 === n.unstable_strictMode && (l = !0), void 0 !== n.identifierPrefix && (o = n.identifierPrefix), void 0 !== n.onUncaughtError && (i = n.onUncaughtError), void 0 !== n.onCaughtError && (s = n.onCaughtError), void 0 !== n.onRecoverableError && (u = n.onRecoverableError), void 0 !== n.unstable_transitionCallbacks && n.unstable_transitionCallbacks, void 0 !== n.formState && (c = n.formState)), (t = Jd(e, 1, !0, t, 0, l, o, i, s, u, 0, c)).context = Zd(null), n = t.current, (o = ol(l = _e(l = Du()))).callback = null, il(n, o, l), n = l, t.current.lanes = n, je(t, n), Nc(t), e[De] = t.current, Wc(e), new Lf(t)
    }, E.version = "19.1.0", E
}
var _ = (S || (S = 1, function e() {
    if ("undefined" != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE) try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)
    } catch (t) {
        console.error(t)
    }
}(), N.exports = P()), N.exports);

function T(e, t = {}, n) {
    for (const r in e) {
        const a = e[r],
            l = n ? `${n}:${r}` : r;
        "object" == typeof a && null !== a ? T(a, t, l) : "function" == typeof a && (t[l] = a)
    }
    return t
}
const L = {
        run: e => e()
    },
    M = void 0 !== console.createTask ? console.createTask : () => L;

function A(e, t) {
    const n = t.shift(),
        r = M(n);
    return e.reduce(((e, n) => e.then((() => r.run((() => n(...t)))))), Promise.resolve())
}

function O(e, t) {
    const n = t.shift(),
        r = M(n);
    return Promise.all(e.map((e => r.run((() => e(...t))))))
}

function D(e, t) {
    for (const n of [...e]) n(t)
}
class F {
    constructor() {
        this._hooks = {}, this._before = void 0, this._after = void 0, this._deprecatedMessages = void 0, this._deprecatedHooks = {}, this.hook = this.hook.bind(this), this.callHook = this.callHook.bind(this), this.callHookWith = this.callHookWith.bind(this)
    }
    hook(e, t, n = {}) {
        if (!e || "function" != typeof t) return () => {};
        const r = e;
        let a;
        for (; this._deprecatedHooks[e];) a = this._deprecatedHooks[e], e = a.to;
        if (a && !n.allowDeprecated) {
            let e = a.message;
            e || (e = `${r} hook has been deprecated` + (a.to ? `, please use ${a.to}` : "")), this._deprecatedMessages || (this._deprecatedMessages = new Set), this._deprecatedMessages.has(e) || (console.warn(e), this._deprecatedMessages.add(e))
        }
        if (!t.name) try {
            Object.defineProperty(t, "name", {
                get: () => "_" + e.replace(/\W+/g, "_") + "_hook_cb",
                configurable: !0
            })
        } catch {}
        return this._hooks[e] = this._hooks[e] || [], this._hooks[e].push(t), () => {
            t && (this.removeHook(e, t), t = void 0)
        }
    }
    hookOnce(e, t) {
        let n, r = (...e) => ("function" == typeof n && n(), n = void 0, r = void 0, t(...e));
        return n = this.hook(e, r), n
    }
    removeHook(e, t) {
        if (this._hooks[e]) {
            const n = this._hooks[e].indexOf(t); - 1 !== n && this._hooks[e].splice(n, 1), 0 === this._hooks[e].length && delete this._hooks[e]
        }
    }
    deprecateHook(e, t) {
        this._deprecatedHooks[e] = "string" == typeof t ? {
            to: t
        } : t;
        const n = this._hooks[e] || [];
        delete this._hooks[e];
        for (const r of n) this.hook(e, r)
    }
    deprecateHooks(e) {
        Object.assign(this._deprecatedHooks, e);
        for (const t in e) this.deprecateHook(t, e[t])
    }
    addHooks(e) {
        const t = T(e),
            n = Object.keys(t).map((e => this.hook(e, t[e])));
        return () => {
            for (const e of n.splice(0, n.length)) e()
        }
    }
    removeHooks(e) {
        const t = T(e);
        for (const n in t) this.removeHook(n, t[n])
    }
    removeAllHooks() {
        for (const e in this._hooks) delete this._hooks[e]
    }
    callHook(e, ...t) {
        return t.unshift(e), this.callHookWith(A, e, ...t)
    }
    callHookParallel(e, ...t) {
        return t.unshift(e), this.callHookWith(O, e, ...t)
    }
    callHookWith(e, t, ...n) {
        const r = this._before || this._after ? {
            name: t,
            args: n,
            context: {}
        } : void 0;
        this._before && D(this._before, r);
        const a = e(t in this._hooks ? [...this._hooks[t]] : [], n);
        return a instanceof Promise ? a.finally((() => {
            this._after && r && D(this._after, r)
        })) : (this._after && r && D(this._after, r), a)
    }
    beforeEach(e) {
        return this._before = this._before || [], this._before.push(e), () => {
            if (void 0 !== this._before) {
                const t = this._before.indexOf(e); - 1 !== t && this._before.splice(t, 1)
            }
        }
    }
    afterEach(e) {
        return this._after = this._after || [], this._after.push(e), () => {
            if (void 0 !== this._after) {
                const t = this._after.indexOf(e); - 1 !== t && this._after.splice(t, 1)
            }
        }
    }
}
const R = new Set(["link", "style", "script", "noscript"]),
    H = new Set(["title", "titleTemplate", "script", "style", "noscript"]),
    I = new Set(["base", "meta", "link", "style", "script", "noscript"]),
    U = new Set(["title", "base", "htmlAttrs", "bodyAttrs", "meta", "link", "style", "script", "noscript"]),
    W = new Set(["base", "title", "titleTemplate", "bodyAttrs", "htmlAttrs", "templateParams"]),
    $ = new Set(["key", "tagPosition", "tagPriority", "tagDuplicateStrategy", "innerHTML", "textContent", "processTemplateParams"]),
    B = new Set(["templateParams", "htmlAttrs", "bodyAttrs"]),
    q = new Set(["theme-color", "google-site-verification", "og", "article", "book", "profile", "twitter", "author"]),
    V = ["name", "property", "http-equiv"];

function K(e) {
    const t = e.split(":");
    return !!t.length && q.has(t[1])
}

function Q(e) {
    const {
        props: t,
        tag: n
    } = e;
    if (W.has(n)) return n;
    if ("link" === n && "canonical" === t.rel) return "canonical";
    if (t.charset) return "charset";
    if ("meta" === e.tag)
        for (const r of V)
            if (void 0 !== t[r]) return `${n}:${t[r]}`;
    if (e.key) return `${n}:key:${e.key}`;
    if (t.id) return `${n}:id:${t.id}`;
    if (H.has(n)) {
        const t = e.textContent || e.innerHTML;
        if (t) return `${n}:content:${t}`
    }
}

function Y(e) {
    const t = e._h || e._d;
    if (t) return t;
    const n = e.textContent || e.innerHTML;
    return n || `${e.tag}:${Object.entries(e.props).map((([e,t])=>`${e}:${String(t)}`)).join(",")}`
}

function G(e, t, n) {
    let r;
    if ("function" === typeof e && (n && ("titleTemplate" === n || "o" === n[0] && "n" === n[1]) || (e = e())), t && (r = t(n, e)), Array.isArray(r)) return r.map((e => G(e, t)));
    if ((null == r ? void 0 : r.constructor) === Object) {
        const e = {};
        for (const n of Object.keys(r)) e[n] = G(r[n], t, n);
        return e
    }
    return r
}

function X(e, t) {
    return e.props = e.props || {}, t ? (Object.entries(t).forEach((([n, r]) => {
        if (null === r) return void(e.props[n] = null);
        if ("class" === n || "style" === n) return void(e.props[n] = function(e, t) {
            const n = "style" === e ? new Map : new Set;

            function r(t) {
                const r = t.trim();
                if (r)
                    if ("style" === e) {
                        const [e, ...t] = r.split(":").map((e => e.trim()));
                        e && t.length && n.set(e, t.join(":"))
                    } else r.split(" ").filter(Boolean).forEach((e => n.add(e)))
            }
            return "string" == typeof t ? "style" === e ? t.split(";").forEach(r) : r(t) : Array.isArray(t) ? t.forEach((e => r(e))) : t && "object" == typeof t && Object.entries(t).forEach((([t, a]) => {
                a && "false" !== a && ("style" === e ? n.set(t.trim(), a) : r(t))
            })), n
        }(n, r));
        if ($.has(n)) {
            if (["textContent", "innerHTML"].includes(n) && "object" == typeof r) {
                let a = t.type;
                if (t.type || (a = "application/json"), !(null == a ? void 0 : a.endsWith("json")) && "speculationrules" !== a) return;
                t.type = a, e.props.type = a, e[n] = JSON.stringify(r)
            } else e[n] = r;
            return
        }
        const a = String(r),
            l = n.startsWith("data-");
        "true" === a || "" === a ? e.props[n] = !l || a : !r && l && "false" === a ? e.props[n] = "false" : void 0 !== r && (e.props[n] = r)
    })), e) : e
}

function J(e, t) {
    const n = X({
        tag: e,
        props: {}
    }, "object" == typeof t && "function" != typeof t ? t : {
        ["script" === e || "noscript" === e || "style" === e ? "innerHTML" : "textContent"]: t
    });
    return n.key && R.has(n.tag) && (n.props["data-hid"] = n._h = n.key), "script" === n.tag && "object" == typeof n.innerHTML && (n.innerHTML = JSON.stringify(n.innerHTML), n.props.type = n.props.type || "application/json"), Array.isArray(n.props.content) ? n.props.content.map((e => ({
        ...n,
        props: {
            ...n.props,
            content: e
        }
    }))) : n
}

function Z(e, t) {
    if (!e) return [];
    "function" == typeof e && (e = e());
    const n = (e, n) => {
        for (let r = 0; r < t.length; r++) n = t[r](e, n);
        return n
    };
    e = n(void 0, e);
    const r = [];
    return e = G(e, n), Object.entries(e || {}).forEach((([e, t]) => {
        if (void 0 !== t)
            for (const n of Array.isArray(t) ? t : [t]) r.push(J(e, n))
    })), r.flat()
}
const ee = (e, t) => e._w === t._w ? e._p - t._p : e._w - t._w,
    te = {
        base: -10,
        title: 10
    },
    ne = {
        critical: -8,
        high: -1,
        low: 2
    },
    re = {
        meta: {
            "content-security-policy": -30,
            charset: -20,
            viewport: -15
        },
        link: {
            preconnect: 20,
            stylesheet: 60,
            preload: 70,
            modulepreload: 70,
            prefetch: 90,
            "dns-prefetch": 90,
            prerender: 90
        },
        script: {
            async: 30,
            defer: 80,
            sync: 50
        },
        style: {
            imported: 40,
            sync: 60
        }
    },
    ae = /@import/,
    le = e => "" === e || !0 === e;

function oe(e, t) {
    var n;
    if ("number" == typeof t.tagPriority) return t.tagPriority;
    let r = 100;
    const a = ne[t.tagPriority] || 0,
        l = e.resolvedOptions.disableCapoSorting ? {
            link: {},
            script: {},
            style: {}
        } : re;
    if (t.tag in te) r = te[t.tag];
    else if ("meta" === t.tag) {
        const e = "content-security-policy" === t.props["http-equiv"] ? "content-security-policy" : t.props.charset ? "charset" : "viewport" === t.props.name ? "viewport" : null;
        e && (r = re.meta[e])
    } else "link" === t.tag && t.props.rel ? r = l.link[t.props.rel] : "script" === t.tag ? le(t.props.async) ? r = l.script.async : !t.props.src || le(t.props.defer) || le(t.props.async) || "module" === t.props.type || (null == (n = t.props.type) ? void 0 : n.endsWith("json")) ? le(t.props.defer) && t.props.src && !le(t.props.async) && (r = l.script.defer) : r = l.script.sync : "style" === t.tag && (r = t.innerHTML && ae.test(t.innerHTML) ? l.style.imported : l.style.sync);
    return (r || 100) + a
}

function ie(e, t) {
    const n = "function" == typeof t ? t(e) : t,
        r = n.key || String(e.plugins.size + 1);
    e.plugins.get(r) || (e.plugins.set(r, n), e.hooks.addHooks(n.hooks || {}))
}

function se(e = {}) {
    var t;
    const n = new F;
    n.addHooks(e.hooks || {});
    const r = !e.document,
        a = new Map,
        l = [],
        o = {
            _entryCount: 1,
            plugins: new Map,
            dirty: !1,
            resolvedOptions: e,
            hooks: n,
            ssr: r,
            entries: a,
            headEntries: () => [...a.values()],
            use: e => ie(o, e),
            push(e, t) {
                const i = {
                    ...t || {}
                };
                delete i.head;
                const s = i._index ?? o._entryCount++,
                    u = {
                        _i: s,
                        input: e,
                        options: i
                    },
                    c = {
                        _poll(e = !1) {
                            o.dirty = !0, !e && l.push(s), n.callHook("entries:updated", o)
                        },
                        dispose() {
                            a.delete(s) && c._poll(!0)
                        },
                        patch(e) {
                            (!i.mode || "server" === i.mode && r || "client" === i.mode && !r) && (u.input = e, a.set(s, u), c._poll())
                        }
                    };
                return c.patch(e), c
            },
            async resolveTags() {
                var t;
                const r = {
                    tagMap: new Map,
                    tags: [],
                    entries: [...o.entries.values()]
                };
                for (await n.callHook("entries:resolve", r); l.length;) {
                    const t = l.shift(),
                        r = a.get(t);
                    if (r) {
                        const t = {
                            tags: Z(r.input, e.propResolvers || []).map((e => Object.assign(e, r.options))),
                            entry: r
                        };
                        await n.callHook("entries:normalize", t), r._tags = t.tags.map(((e, t) => (e._w = oe(o, e), e._p = (r._i << 10) + t, e._d = Q(e), e)))
                    }
                }
                let i = !1;
                r.entries.flatMap((e => (e._tags || []).map((e => ({
                    ...e,
                    props: {
                        ...e.props
                    }
                }))))).sort(ee).reduce(((e, t) => {
                    const n = String(t._d || t._p);
                    if (!e.has(n)) return e.set(n, t);
                    const r = e.get(n);
                    if ("merge" === ((null == t ? void 0 : t.tagDuplicateStrategy) || (B.has(t.tag) ? "merge" : null) || (t.key && t.key === r.key ? "merge" : null))) {
                        const a = {
                            ...r.props
                        };
                        Object.entries(t.props).forEach((([e, t]) => a[e] = "style" === e ? new Map([...r.props.style || new Map, ...t]) : "class" === e ? new Set([...r.props.class || new Set, ...t]) : t)), e.set(n, {
                            ...t,
                            props: a
                        })
                    } else t._p >> 10 == r._p >> 10 && "meta" === t.tag && K(n) ? (e.set(n, Object.assign([...Array.isArray(r) ? r : [r], t], t)), i = !0) : (t._w === r._w ? t._p > r._p : (null == t ? void 0 : t._w) < (null == r ? void 0 : r._w)) && e.set(n, t);
                    return e
                }), r.tagMap);
                const s = r.tagMap.get("title"),
                    u = r.tagMap.get("titleTemplate");
                if (o._title = null == s ? void 0 : s.textContent, u) {
                    const e = null == u ? void 0 : u.textContent;
                    if (o._titleTemplate = e, e) {
                        let t = "function" == typeof e ? e(null == s ? void 0 : s.textContent) : e;
                        "string" != typeof t || o.plugins.has("template-params") || (t = t.replace("%s", (null == s ? void 0 : s.textContent) || "")), s ? null === t ? r.tagMap.delete("title") : r.tagMap.set("title", {
                            ...s,
                            textContent: t
                        }) : (u.tag = "title", u.textContent = t)
                    }
                }
                r.tags = Array.from(r.tagMap.values()), i && (r.tags = r.tags.flat().sort(ee)), await n.callHook("tags:beforeResolve", r), await n.callHook("tags:resolve", r), await n.callHook("tags:afterResolve", r);
                const c = [];
                for (const e of r.tags) {
                    const {
                        innerHTML: n,
                        tag: r,
                        props: a
                    } = e;
                    if (U.has(r) && ((0 !== Object.keys(a).length || e.innerHTML || e.textContent) && ("meta" !== r || a.content || a["http-equiv"] || a.charset))) {
                        if ("script" === r && n) {
                            if (null == (t = a.type) ? void 0 : t.endsWith("json")) {
                                const t = "string" == typeof n ? n : JSON.stringify(n);
                                e.innerHTML = t.replace(/</g, "\\u003C")
                            } else "string" == typeof n && (e.innerHTML = n.replace(new RegExp(`</${r}`, "g"), `<\\/${r}`));
                            e._d = Q(e)
                        }
                        c.push(e)
                    }
                }
                return c
            }
        };
    return ((null == e ? void 0 : e.plugins) || []).forEach((e => ie(o, e))), o.hooks.callHook("init", o), null == (t = e.init) || t.forEach((e => e && o.push(e))), o
}
async function ue(e, t = {}) {
    const n = t.document || e.resolvedOptions.document;
    if (!n || !e.dirty) return;
    const r = {
        shouldRender: !0,
        tags: []
    };
    return await e.hooks.callHook("dom:beforeRender", r), r.shouldRender ? (e._domUpdatePromise || (e._domUpdatePromise = new Promise((async t => {
        var r;
        const a = new Map,
            l = new Promise((t => {
                e.resolveTags().then((e => {
                    t(e.map((e => {
                        const t = a.get(e._d) || 0,
                            n = {
                                tag: e,
                                id: (t ? `${e._d}:${t}` : e._d) || Y(e),
                                shouldRender: !0
                            };
                        return e._d && K(e._d) && a.set(e._d, t + 1), n
                    })))
                }))
            }));
        let o = e._dom;
        if (!o) {
            o = {
                title: n.title,
                elMap: (new Map).set("htmlAttrs", n.documentElement).set("bodyAttrs", n.body)
            };
            for (const e of ["body", "head"]) {
                const t = null == (r = n[e]) ? void 0 : r.children;
                for (const e of t) {
                    const t = e.tagName.toLowerCase();
                    if (!I.has(t)) continue;
                    const n = X({
                        tag: t,
                        props: {}
                    }, {
                        innerHTML: e.innerHTML,
                        ...e.getAttributeNames().reduce(((t, n) => (t[n] = e.getAttribute(n), t)), {}) || {}
                    });
                    if (n.key = e.getAttribute("data-hid") || void 0, n._d = Q(n) || Y(n), o.elMap.has(n._d)) {
                        let t = 1,
                            r = n._d;
                        for (; o.elMap.has(r);) r = `${n._d}:${t++}`;
                        o.elMap.set(r, e)
                    } else o.elMap.set(n._d, e)
                }
            }
        }

        function i(e, t, n) {
            const r = `${e}:${t}`;
            o.sideEffects[r] = n, delete o.pendingSideEffects[r]
        }

        function s({
            id: e,
            $el: t,
            tag: r
        }) {
            const a = r.tag.endsWith("Attrs");
            o.elMap.set(e, t), a || (r.textContent && r.textContent !== t.textContent && (t.textContent = r.textContent), r.innerHTML && r.innerHTML !== t.innerHTML && (t.innerHTML = r.innerHTML), i(e, "el", (() => {
                null == t || t.remove(), o.elMap.delete(e)
            })));
            for (const l in r.props) {
                if (!Object.prototype.hasOwnProperty.call(r.props, l)) continue;
                const o = r.props[l];
                if (l.startsWith("on") && "function" == typeof o) {
                    const e = null == t ? void 0 : t.dataset;
                    if (e && e[`${l}fired`]) {
                        const e = l.slice(0, -5);
                        o.call(t, new Event(e.substring(2)))
                    }
                    "" !== t.getAttribute(`data-${l}`) && (("bodyAttrs" === r.tag ? n.defaultView : t).addEventListener(l.substring(2), o.bind(t)), t.setAttribute(`data-${l}`, ""));
                    continue
                }
                const s = `attr:${l}`;
                if ("class" === l) {
                    if (!o) continue;
                    for (const n of o) a && i(e, `${s}:${n}`, (() => t.classList.remove(n))), !t.classList.contains(n) && t.classList.add(n)
                } else if ("style" === l) {
                    if (!o) continue;
                    for (const [n, r] of o) i(e, `${s}:${n}`, (() => {
                        t.style.removeProperty(n)
                    })), t.style.setProperty(n, r)
                } else !1 !== o && null !== o && (t.getAttribute(l) !== o && t.setAttribute(l, !0 === o ? "" : String(o)), a && i(e, s, (() => t.removeAttribute(l))))
            }
        }
        o.pendingSideEffects = {
            ...o.sideEffects
        }, o.sideEffects = {};
        const u = [],
            c = {
                bodyClose: void 0,
                bodyOpen: void 0,
                head: void 0
            },
            d = await l;
        for (const e of d) {
            const {
                tag: t,
                shouldRender: r,
                id: a
            } = e;
            r && ("title" !== t.tag ? (e.$el = e.$el || o.elMap.get(a), e.$el ? s(e) : I.has(t.tag) && u.push(e)) : (n.title = t.textContent, i("title", "", (() => n.title = o.title))))
        }
        for (const e of u) {
            const t = e.tag.tagPosition || "head";
            e.$el = n.createElement(e.tag.tag), s(e), c[t] = c[t] || n.createDocumentFragment(), c[t].appendChild(e.$el)
        }
        for (const f of d) await e.hooks.callHook("dom:renderTag", f, n, i);
        c.head && n.head.appendChild(c.head), c.bodyOpen && n.body.insertBefore(c.bodyOpen, n.body.firstChild), c.bodyClose && n.body.appendChild(c.bodyClose);
        for (const e in o.pendingSideEffects) o.pendingSideEffects[e]();
        e._dom = o, await e.hooks.callHook("dom:rendered", {
            renders: d
        }), t()
    })).finally((() => {
        e._domUpdatePromise = void 0, e.dirty = !1
    }))), e._domUpdatePromise) : void 0
}

function ce(e, t) {
    let n = 0;
    return () => {
        const r = ++n;
        t((() => {
            n === r && e()
        }))
    }
}
const de = n.createContext(null);

function fe(e = {}) {
    const t = function(e = {}) {
        var t, n, r;
        const a = (null == (t = e.domOptions) ? void 0 : t.render) || ue;
        e.document = e.document || ("undefined" != typeof window ? document : void 0);
        const l = (null == (r = null == (n = e.document) ? void 0 : n.head.querySelector('script[id="unhead:payload"]')) ? void 0 : r.innerHTML) || !1;
        return se({
            ...e,
            plugins: [...e.plugins || [], {
                key: "client",
                hooks: {
                    "entries:updated": a
                }
            }],
            init: [!!l && JSON.parse(l), ...e.init || []]
        })
    }({
        domOptions: {
            render: ce((() => ue(t)), (e => setTimeout(e, 0)))
        },
        ...e
    });
    return t
}

function pe({
    children: e,
    head: t
}) {
    return n.createElement(de.Provider, {
        value: t || fe()
    }, e)
}
const he = fe(),
    me = e => {
        const t = (e => e.replace(/^([A-Z])|[\s-_]+(\w)/g, ((e, t, n) => n ? n.toUpperCase() : t.toLowerCase())))(e);
        return t.charAt(0).toUpperCase() + t.slice(1)
    },
    ge = (...e) => e.filter(((e, t, n) => Boolean(e) && "" !== e.trim() && n.indexOf(e) === t)).join(" ").trim(),
    be = e => {
        for (const t in e)
            if (t.startsWith("aria-") || "role" === t || "title" === t) return !0
    };
/**
 * @license lucide-react v0.515.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
/**
 * @license lucide-react v0.515.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var ye = {
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
 * @license lucide-react v0.515.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ve = n.forwardRef((({
        color: e = "currentColor",
        size: t = 24,
        strokeWidth: r = 2,
        absoluteStrokeWidth: a,
        className: l = "",
        children: o,
        iconNode: i,
        ...s
    }, u) => n.createElement("svg", {
        ref: u,
        ...ye,
        width: t,
        height: t,
        stroke: e,
        strokeWidth: a ? 24 * Number(r) / Number(t) : r,
        className: ge("lucide", l),
        ...!o && !be(s) && {
            "aria-hidden": "true"
        },
        ...s
    }, [...i.map((([e, t]) => n.createElement(e, t))), ...Array.isArray(o) ? o : [o]]))),
    xe = (e, t) => {
        const r = n.forwardRef((({
            className: r,
            ...a
        }, l) => {
            return n.createElement(ve, {
                ref: l,
                iconNode: t,
                className: ge(`lucide-${o=me(e),o.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}`, `lucide-${e}`, r),
                ...a
            });
            var o
        }));
        return r.displayName = me(e), r
    },
    we = xe("apple", [
        ["path", {
            d: "M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z",
            key: "3s7exb"
        }],
        ["path", {
            d: "M10 2c1 .5 2 2 2 5",
            key: "fcco2y"
        }]
    ]),
    ke = xe("circle-alert", [
        ["circle", {
            cx: "12",
            cy: "12",
            r: "10",
            key: "1mglay"
        }],
        ["line", {
            x1: "12",
            x2: "12",
            y1: "8",
            y2: "12",
            key: "1pkeuh"
        }],
        ["line", {
            x1: "12",
            x2: "12.01",
            y1: "16",
            y2: "16",
            key: "4dfq90"
        }]
    ]),
    Se = xe("clock", [
        ["circle", {
            cx: "12",
            cy: "12",
            r: "10",
            key: "1mglay"
        }],
        ["polyline", {
            points: "12 6 12 12 16 14",
            key: "68esgv"
        }]
    ]),
    Ne = xe("download", [
        ["path", {
            d: "M12 15V3",
            key: "m9g1x1"
        }],
        ["path", {
            d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",
            key: "ih7n3h"
        }],
        ["path", {
            d: "m7 10 5 5 5-5",
            key: "brsn70"
        }]
    ]),
    Ee = xe("file-text", [
        ["path", {
            d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",
            key: "1rqfz7"
        }],
        ["path", {
            d: "M14 2v4a2 2 0 0 0 2 2h4",
            key: "tnqrlb"
        }],
        ["path", {
            d: "M10 9H8",
            key: "b1mrlr"
        }],
        ["path", {
            d: "M16 13H8",
            key: "t4e002"
        }],
        ["path", {
            d: "M16 17H8",
            key: "z1uh3a"
        }]
    ]),
    Ce = xe("menu", [
        ["path", {
            d: "M4 12h16",
            key: "1lakjw"
        }],
        ["path", {
            d: "M4 18h16",
            key: "19g7jn"
        }],
        ["path", {
            d: "M4 6h16",
            key: "1o0s65"
        }]
    ]),
    je = xe("monitor", [
        ["rect", {
            width: "20",
            height: "14",
            x: "2",
            y: "3",
            rx: "2",
            key: "48i651"
        }],
        ["line", {
            x1: "8",
            x2: "16",
            y1: "21",
            y2: "21",
            key: "1svkeh"
        }],
        ["line", {
            x1: "12",
            x2: "12",
            y1: "17",
            y2: "21",
            key: "vw1qmm"
        }]
    ]),
    ze = xe("smartphone", [
        ["rect", {
            width: "14",
            height: "20",
            x: "5",
            y: "2",
            rx: "2",
            ry: "2",
            key: "1yt0o3"
        }],
        ["path", {
            d: "M12 18h.01",
            key: "mhygvu"
        }]
    ]),
    Pe = xe("x", [
        ["path", {
            d: "M18 6 6 18",
            key: "1bl5f8"
        }],
        ["path", {
            d: "m6 6 12 12",
            key: "d8bk6v"
        }]
    ]),
    _e = () => {
        const [a, l] = n.useState(!1), [o, i] = n.useState(!1);
        n.useEffect((() => {
            const e = () => {
                l(window.scrollY > 50)
            };
            return window.addEventListener("scroll", e), () => window.removeEventListener("scroll", e)
        }), []);
        const s = [{
            name: "Contact",
            href: "mailto:krnl.inc@gmail.com",
            internal: !1
        }, {
            name: "Discord",
            href: "https://discord.gg/quSW94vB7q",
            internal: !1
        }, {
            name: "Docs",
            href: "https://github.com/unified-naming-convention/NamingStandard/tree/main/api",
            internal: !1
        }];
        return e.jsx(t.header, {
            initial: {
                y: -100
            },
            animate: {
                y: 0
            },
            transition: {
                duration: .6,
                ease: [.6, .01, -.05, .95]
            },
            className: "fixed top-0 left-0 right-0 z-50 flex justify-center",
            children: e.jsx("div", {
                className: "mt-4 mx-4",
                children: e.jsxs("nav", {
                    className: `\n          relative backdrop-blur-2xl bg-black/20 border border-white/20 rounded-2xl\n          transition-all duration-500 ease-out shadow-2xl\n          ${a?"bg-black/40 border-white/30 shadow-black/20":""}\n        `,
                    children: [e.jsx("div", {
                        className: "absolute inset-0 rounded-2xl bg-gradient-to-r from-white/5 to-white/10 pointer-events-none"
                    }), e.jsxs("div", {
                        className: "relative px-4 lg:px-6",
                        children: [e.jsxs("div", {
                            className: "flex items-center justify-between h-14 gap-8",
                            children: [e.jsx(r, {
                                to: "/",
                                children: e.jsxs(t.div, {
                                    whileHover: {
                                        scale: 1.02
                                    },
                                    transition: {
                                        duration: .15
                                    },
                                    className: "flex items-center space-x-2 cursor-pointer",
                                    children: [e.jsx("img", {
                                        src: "/assets/Krnl_Logo.svg",
                                        alt: "Krnl Logo",
                                        className: "w-6 h-6"
                                    }), e.jsx("span", {
                                        className: "text-white font-medium text-base",
                                        children: "Krnl"
                                    })]
                                })
                            }), e.jsx("div", {
                                className: "hidden lg:flex items-center",
                                children: e.jsx("div", {
                                    className: "flex items-center space-x-6",
                                    children: s.map((n => e.jsx(t.a, {
                                        href: n.href,
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "text-gray-400 hover:text-white transition-colors duration-150 text-sm font-medium",
                                        whileHover: {
                                            y: -1
                                        },
                                        transition: {
                                            duration: .15
                                        },
                                        children: n.name
                                    }, n.name)))
                                })
                            }), e.jsxs("div", {
                                className: "flex items-center",
                                children: [e.jsx(r, {
                                    to: "/downloads",
                                    children: e.jsxs(t.button, {
                                        whileHover: {
                                            scale: 1.02
                                        },
                                        whileTap: {
                                            scale: .98
                                        },
                                        transition: {
                                            duration: .1
                                        },
                                        className: "relative bg-white/90 backdrop-blur-sm text-black px-3 py-1.5 rounded-xl text-sm font-medium flex items-center space-x-2 hover:bg-white border border-black/20 shadow-md hover:shadow-white/10 transition-[background-color,box-shadow] duration-100",
                                        style: {
                                            boxShadow: "0 0 10px rgba(255, 255, 255, 0.05), 0 0 20px rgba(255, 255, 255, 0.02)"
                                        },
                                        children: [e.jsx(Ne, {
                                            size: 14
                                        }), e.jsx("span", {
                                            children: "Download"
                                        }), e.jsx("div", {
                                            className: "absolute inset-0 rounded-xl bg-white/15 blur-lg -z-10 opacity-30"
                                        })]
                                    })
                                }), e.jsx("div", {
                                    className: "lg:hidden ml-3",
                                    children: e.jsx(t.button, {
                                        whileTap: {
                                            scale: .95
                                        },
                                        transition: {
                                            duration: .15
                                        },
                                        onClick: () => i(!o),
                                        className: "text-gray-400 hover:text-white p-1.5 transition-colors duration-150",
                                        children: o ? e.jsx(Pe, {
                                            size: 18
                                        }) : e.jsx(Ce, {
                                            size: 18
                                        })
                                    })
                                })]
                            })]
                        }), e.jsx(t.div, {
                            initial: !1,
                            animate: {
                                height: o ? "auto" : 0,
                                opacity: o ? 1 : 0
                            },
                            transition: {
                                duration: .2,
                                ease: "easeInOut"
                            },
                            className: "lg:hidden overflow-hidden",
                            children: e.jsx("div", {
                                className: "border-t border-white/20 pt-3 pb-4 mt-2",
                                children: e.jsx("div", {
                                    className: "flex flex-col space-y-3",
                                    children: s.map((n => e.jsx(t.a, {
                                        href: n.href,
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "text-gray-400 hover:text-white transition-colors duration-150 text-sm font-medium",
                                        whileTap: {
                                            x: 4
                                        },
                                        transition: {
                                            duration: .15
                                        },
                                        onClick: () => i(!1),
                                        children: n.name
                                    }, n.name)))
                                })
                            })
                        })]
                    })]
                })
            })
        })
    },
    Te = () => {
        const t = a.useRef(null),
            n = a.useRef(null);
        return a.useEffect((() => {
            if (!t.current) return;
            let e, r, a, l;
            try {
                const o = (() => {
                    e = new c, r = new d(90, window.innerWidth / window.innerHeight, .1, 1e4), r.position.z = 500, a = new f({
                        alpha: !0,
                        antialias: !0
                    }), a.setSize(window.innerWidth, window.innerHeight), a.setPixelRatio(Math.min(window.devicePixelRatio, 2)), t.current.appendChild(a.domElement);
                    const o = (() => {
                            const e = document.createElement("canvas");
                            e.width = 64, e.height = 64;
                            const t = e.getContext("2d");
                            if (!t) return null;
                            const n = t.createRadialGradient(e.width / 2, e.height / 2, 0, e.width / 2, e.height / 2, e.width / 2);
                            n.addColorStop(0, "rgba(255, 255, 255, 1)"), n.addColorStop(.1, "rgba(255, 255, 255, 0.9)"), n.addColorStop(.3, "rgba(255, 255, 255, 0.5)"), n.addColorStop(.6, "rgba(255, 255, 255, 0.2)"), n.addColorStop(1, "rgba(255, 255, 255, 0)"), t.fillStyle = n, t.fillRect(0, 0, e.width, e.height);
                            const r = new v(e);
                            return r.needsUpdate = !0, r
                        })(),
                        i = new p({
                            color: 16777215,
                            size: 1.8,
                            transparent: !0,
                            opacity: .9,
                            sizeAttenuation: !0,
                            map: o,
                            blending: h,
                            depthWrite: !1
                        }),
                        s = new m,
                        u = [],
                        x = [],
                        w = [];
                    for (let e = 0; e < 2e3; e++) {
                        const e = 300 + 700 * Math.random(),
                            t = Math.random() * Math.PI * 2,
                            n = Math.acos(2 * Math.random() - 1),
                            r = e * Math.sin(n) * Math.cos(t),
                            a = e * Math.sin(n) * Math.sin(t),
                            l = e * Math.cos(n);
                        u.push(r, a, l);
                        let o;
                        o = Math.random() < .85 ? .8 + .4 * Math.random() : 1 + .3 * Math.random(), x.push(o);
                        const i = new g;
                        i.setHSL(.6, .1, .9 + .1 * Math.random()), w.push(i.r, i.g, i.b)
                    }
                    s.setAttribute("position", new b(u, 3)), s.setAttribute("size", new b(x, 1)), s.setAttribute("color", new b(w, 3)), l = new y(s, i), e.add(l);
                    const k = () => {
                        const t = 1e-4 * Date.now();
                        l.rotation.y = .1 * t, l.rotation.x = .1 * Math.sin(.2 * t), l.position.x = 20 * Math.sin(.3 * t), l.position.y = 20 * Math.cos(.2 * t);
                        const o = 1 + .05 * Math.sin(.5 * t);
                        l.scale.set(o, o, o), a.render(e, r), n.current = requestAnimationFrame(k)
                    };
                    k();
                    const S = () => {
                        r.aspect = window.innerWidth / window.innerHeight, r.updateProjectionMatrix(), a.setSize(window.innerWidth, window.innerHeight)
                    };
                    return window.addEventListener("resize", S), () => {
                        window.removeEventListener("resize", S)
                    }
                })();
                return () => {
                    o && o(), n.current && cancelAnimationFrame(n.current), l && (l.geometry && l.geometry.dispose(), l.material && l.material.dispose()), a && (a.dispose(), t.current && a.domElement && t.current.removeChild(a.domElement))
                }
            } catch (o) {
                console.error("Failed to initialize Three.js:", o)
            }
        }), []), e.jsx("div", {
            ref: t,
            className: "fixed inset-0 pointer-events-none",
            style: {
                zIndex: 0,
                background: "radial-gradient(ellipse at center, #1a0f2e 0%, #0f0a1a 50%, #000000 100%)",
                opacity: .8
            }
        })
    },
    Le = () => e.jsxs("section", {
        className: "relative min-h-screen flex flex-col items-center justify-center bg-black pt-16 sm:pt-20 lg:pt-24 pb-20 sm:pb-32 lg:pb-40",
        children: [e.jsx(Te, {}), e.jsxs("div", {
            className: "relative z-10 w-full max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 text-center",
            children: [e.jsx(t.div, {
                initial: {
                    opacity: 0,
                    y: 20
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                transition: {
                    duration: .6,
                    ease: "easeOut"
                },
                className: "mb-4 sm:mb-6",
                children: e.jsxs("h1", {
                    className: "text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.1] sm:leading-[1.2] tracking-tight font-['Epilogue',sans-serif]",
                    children: ["Krnl's back,", e.jsx("br", {}), e.jsx("span", {
                        className: "bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent",
                        children: "better than ever"
                    })]
                })
            }), e.jsxs(t.p, {
                initial: {
                    opacity: 0,
                    y: 15
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                transition: {
                    duration: .6,
                    delay: .1,
                    ease: "easeOut"
                },
                className: "text-base sm:text-lg lg:text-xl text-gray-400 max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed",
                children: ["A powerful multi-platform Luau scripting engine, complete", e.jsx("br", {
                    className: "hidden sm:block"
                }), "with a text editor and built-in script database."]
            }), e.jsxs(t.div, {
                initial: {
                    opacity: 0,
                    y: 15
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                transition: {
                    duration: .6,
                    delay: .2,
                    ease: "easeOut"
                },
                className: "flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-8 sm:mb-12",
                children: [e.jsxs(t.a, {
                    href: "/downloads",
                    transition: {
                        duration: .05
                    },
                    className: "inline-flex items-center justify-center gap-2 min-h-[2.75rem] sm:min-h-11 px-4 sm:px-5 py-2 sm:py-2.5 text-sm sm:text-base font-medium leading-4 tracking-[0.2px] text-black bg-gray-50 rounded-lg border-none cursor-pointer transition-all duration-200 ease-in-out whitespace-nowrap outline-none w-full sm:w-auto",
                    style: {
                        boxShadow: "0 0 0 2px rgba(0,0,0,.5), 0 0 14px 0 hsla(0,0%,100%,.19), inset 0 -1px .4px 0 rgba(0,0,0,.2), inset 0 1px .4px 0 #fff"
                    },
                    onMouseEnter: e => {
                        e.currentTarget.style.boxShadow = "inset 0 -1px .4px 0 rgba(0,0,0,.2), inset 0 1px .4px 0 #fff, 0 0 0 2px rgba(0,0,0,.5), 0 0 14px 0 hsla(0,0%,100%,.19)", e.currentTarget.style.backgroundColor = "#fff"
                    },
                    onMouseLeave: e => {
                        e.currentTarget.style.boxShadow = "0 0 0 2px rgba(0,0,0,.5), 0 0 14px 0 hsla(0,0%,100%,.19), inset 0 -1px .4px 0 rgba(0,0,0,.2), inset 0 1px .4px 0 #fff", e.currentTarget.style.backgroundColor = "#f9fafb"
                    },
                    onMouseDown: e => {
                        e.currentTarget.style.boxShadow = "inset 0 -1px .4px 0 rgba(0,0,0,.2), inset 0 1px .4px 0 #fff, 0 0 0 2px rgba(0,0,0,.5), 0 0 14px 0 hsla(0,0%,100%,.19)", e.currentTarget.style.backgroundColor = "#f3f4f6"
                    },
                    onMouseUp: e => {
                        e.currentTarget.style.boxShadow = "inset 0 -1px .4px 0 rgba(0,0,0,.2), inset 0 1px .4px 0 #fff, 0 0 0 2px rgba(0,0,0,.5), 0 0 14px 0 hsla(0,0%,100%,.19)", e.currentTarget.style.backgroundColor = "#fff"
                    },
                    onFocus: e => {
                        e.currentTarget.style.boxShadow = "inset 0 -1px .4px 0 rgba(0,0,0,.2), inset 0 1px .4px 0 #fff, 0 0 0 2px rgba(0,0,0,.5), 0 0 14px 0 hsla(0,0%,100%,.19)", e.currentTarget.style.backgroundColor = "#fff"
                    },
                    onBlur: e => {
                        e.currentTarget.style.boxShadow = "0 0 0 2px rgba(0,0,0,.5), 0 0 14px 0 hsla(0,0%,100%,.19), inset 0 -1px .4px 0 rgba(0,0,0,.2), inset 0 1px .4px 0 #fff", e.currentTarget.style.backgroundColor = "#f9fafb"
                    },
                    children: [e.jsx(Ne, {
                        size: 16,
                        className: "sm:w-[18px] sm:h-[18px]"
                    }), e.jsx("span", {
                        children: "Download"
                    })]
                }), e.jsxs(t.a, {
                    href: "https://discord.gg/quSW94vB7q",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    transition: {
                        duration: .05
                    },
                    className: "inline-flex items-center justify-center gap-1 min-h-[2.75rem] sm:min-h-11 px-4 sm:px-5 py-2 sm:py-2.5 text-sm sm:text-base font-medium leading-4 text-white cursor-pointer border-none rounded-lg outline-none whitespace-nowrap w-full sm:w-auto",
                    style: {
                        background: "linear-gradient(180deg, hsla(0,0%,100%,.03), hsla(0,0%,100%,.1))",
                        boxShadow: "inset 0 1px 0 0 hsla(0,0%,100%,.05), 0 0 0 1px hsla(0,0%,100%,.25), inset 0 -1px 0 0 rgba(0,0,0,.2)",
                        transition: "background-image .2s, background-color .2s, box-shadow .2s ease-in-out"
                    },
                    onMouseEnter: e => {
                        e.currentTarget.style.boxShadow = "inset 0 1px 0 0 hsla(0,0%,100%,.05), 0 0 0 1px hsla(0,0%,100%,.5), inset 0 -1px 0 0 rgba(0,0,0,.2)"
                    },
                    onMouseLeave: e => {
                        e.currentTarget.style.boxShadow = "inset 0 1px 0 0 hsla(0,0%,100%,.05), 0 0 0 1px hsla(0,0%,100%,.25), inset 0 -1px 0 0 rgba(0,0,0,.2)"
                    },
                    onMouseDown: e => {
                        e.currentTarget.style.boxShadow = "inset 0 1px 0 0 hsla(0,0%,100%,.05), 0 0 0 1px hsla(0,0%,100%,.15), inset 0 -1px 0 0 rgba(0,0,0,.2)"
                    },
                    onMouseUp: e => {
                        e.currentTarget.style.boxShadow = "inset 0 1px 0 0 hsla(0,0%,100%,.05), 0 0 0 1px hsla(0,0%,100%,.5), inset 0 -1px 0 0 rgba(0,0,0,.2)"
                    },
                    onFocus: e => {
                        e.currentTarget.style.boxShadow = "inset 0 1px 0 0 hsla(0,0%,100%,.05), 0 0 0 1px hsla(0,0%,100%,.5), inset 0 -1px 0 0 rgba(0,0,0,.2)"
                    },
                    onBlur: e => {
                        e.currentTarget.style.boxShadow = "inset 0 1px 0 0 hsla(0,0%,100%,.05), 0 0 0 1px hsla(0,0%,100%,.25), inset 0 -1px 0 0 rgba(0,0,0,.2)"
                    },
                    children: [e.jsx("img", {
                        src: "/assets/discord.svg",
                        alt: "Discord",
                        className: "w-5 h-5 sm:w-6 sm:h-6"
                    }), e.jsx("span", {
                        children: "Join Discord"
                    })]
                })]
            })]
        }), e.jsx(t.div, {
            initial: {
                opacity: 0,
                y: 30
            },
            animate: {
                opacity: 1,
                y: 0
            },
            transition: {
                duration: .8,
                delay: .4,
                ease: "easeOut"
            },
            className: "w-full mt-[-4em] sm:mt-[-5em] lg:mt-[-7em] pt-[4em] sm:pt-[5em] lg:pt-[7em]",
            children: e.jsx("img", {
                src: "/assets/Krnl_Editor_Preview.png",
                alt: "Krnl Editor Preview",
                className: "block w-full max-w-[90rem] mx-auto my-4 sm:my-8",
                style: {
                    filter: "drop-shadow(0 -1.5em 3em #ae51ff59)"
                },
                draggable: "false"
            })
        })]
    });
/**
 * @license lucide-react v0.515.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
function Me(e, t, n = {}) {
    return e.push(t || {}, n)
}

function Ae(e, t, r) {
    const a = t.head || function() {
            const e = n.useContext(de);
            if (!e) throw new Error("useHead() was called without provide context.");
            return e
        }(),
        [l] = n.useState((() => r(a, e, t)));
    return n.useEffect((() => {
        l.patch(e)
    }), [e]), n.useEffect((() => () => {
        l.dispose()
    }), []), l
}
const Oe = () => e.jsx("footer", {
        children: e.jsxs("div", {
            className: "footer",
            children: [e.jsxs("div", {
                className: "footer-copyright",
                children: [e.jsx("img", {
                    src: "/assets/Krnl_Logo.svg",
                    alt: "Krnl Logo"
                }), e.jsx("a", {
                    href: "/",
                    className: "footer-item",
                    children: "Krnl"
                }), e.jsx("p", {
                    children: "© Copyright 2025 Krnl Inc."
                })]
            }), e.jsxs("div", {
                className: "footer-column",
                children: [e.jsx("p", {
                    className: "footer-title",
                    children: "Downloads"
                }), e.jsx("a", {
                    href: "/downloads",
                    className: "footer-item",
                    children: "Android"
                }), e.jsx("a", {
                    href: "/downloads",
                    className: "footer-item",
                    children: "iOS"
                }), e.jsx("a", {
                    href: "/downloads",
                    className: "footer-item",
                    children: "Windows"
                })]
            }), e.jsxs("div", {
                className: "footer-column",
                children: [e.jsx("p", {
                    className: "footer-title",
                    children: "Resources"
                }), e.jsx("a", {
                    className: "footer-item",
                    href: "https://github.com/unified-naming-convention/NamingStandard/tree/main/api",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    children: "API Docs"
                }), e.jsx("a", {
                    className: "footer-item",
                    href: "https://scriptblox.com",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    children: "ScriptBlox"
                })]
            }), e.jsxs("div", {
                className: "footer-column",
                children: [e.jsx("p", {
                    className: "footer-title",
                    children: "Company"
                }), e.jsx("a", {
                    className: "footer-item",
                    href: "mailto:krnl.inc@gmail.com",
                    children: "Contact"
                }), e.jsx("a", {
                    className: "footer-item",
                    href: "/terms-of-service",
                    children: "Terms of Service"
                })]
            }), e.jsxs("div", {
                className: "footer-column",
                children: [e.jsx("p", {
                    className: "footer-title",
                    children: "Social"
                }), e.jsx("a", {
                    className: "footer-item",
                    href: "https://discord.gg/quSW94vB7q",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    children: "Discord"
                }), e.jsx("span", {
                    className: "footer-disabled",
                    children: "Twitter"
                }), e.jsx("span", {
                    className: "footer-disabled",
                    children: "YouTube"
                })]
            })]
        })
    }),
    De = ({
        title: t,
        description: n,
        canonical: r,
        children: a
    }) => (function(e = {}, t = {}) {
        Ae(e, t, Me)
    }({
        title: t,
        meta: [{
            name: "description",
            content: n
        }],
        link: [{
            rel: "canonical",
            href: r
        }],
        script: [{
            type: "application/ld+json",
            innerHTML: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "SoftwareApplication",
                name: "Krnl",
                url: r,
                applicationCategory: "DeveloperTool",
                operatingSystem: ["iOS", "Android", "Windows"]
            })
        }]
    }), e.jsxs("div", {
        className: "min-h-screen bg-black",
        children: [e.jsx(_e, {}), a, e.jsx(Oe, {})]
    }));

function Fe() {
    return e.jsx(De, {
        title: "Krnl — Powerful Multi-Platform Luau Scripting Engine",
        description: "Download Krnl, the ultimate Luau scripting engine for iOS, Android, and Windows.",
        canonical: "https://krnl.lat/",
        children: e.jsx(Le, {})
    })
}
const Re = () => {
        const t = a.useRef(null),
            n = a.useRef(null);
        return a.useEffect((() => {
            if (!t.current) return;
            let e, r, a, l;
            try {
                const o = (() => {
                    e = new c, r = new d(90, window.innerWidth / window.innerHeight, .1, 1e4), r.position.z = 500, a = new f({
                        alpha: !0,
                        antialias: !0
                    }), a.setSize(window.innerWidth, window.innerHeight), a.setPixelRatio(Math.min(window.devicePixelRatio, 2)), t.current.appendChild(a.domElement);
                    const o = (() => {
                            const e = document.createElement("canvas");
                            e.width = 64, e.height = 64;
                            const t = e.getContext("2d");
                            if (!t) return null;
                            const n = t.createRadialGradient(e.width / 2, e.height / 2, 0, e.width / 2, e.height / 2, e.width / 2);
                            n.addColorStop(0, "rgba(255, 255, 255, 1)"), n.addColorStop(.1, "rgba(255, 255, 255, 0.9)"), n.addColorStop(.3, "rgba(255, 255, 255, 0.5)"), n.addColorStop(.6, "rgba(255, 255, 255, 0.2)"), n.addColorStop(1, "rgba(255, 255, 255, 0)"), t.fillStyle = n, t.fillRect(0, 0, e.width, e.height);
                            const r = new v(e);
                            return r.needsUpdate = !0, r
                        })(),
                        i = new p({
                            color: 16777215,
                            size: 1.8,
                            transparent: !0,
                            opacity: .9,
                            sizeAttenuation: !0,
                            map: o,
                            blending: h,
                            depthWrite: !1
                        }),
                        s = new m,
                        u = [],
                        x = [],
                        w = [];
                    for (let e = 0; e < 2e3; e++) {
                        const e = 300 + 700 * Math.random(),
                            t = Math.random() * Math.PI * 2,
                            n = Math.acos(2 * Math.random() - 1),
                            r = e * Math.sin(n) * Math.cos(t),
                            a = e * Math.sin(n) * Math.sin(t),
                            l = e * Math.cos(n);
                        u.push(r, a, l);
                        let o;
                        o = Math.random() < .85 ? .8 + .4 * Math.random() : 1 + .3 * Math.random(), x.push(o);
                        const i = new g;
                        i.setHSL(.6, .1, .9 + .1 * Math.random()), w.push(i.r, i.g, i.b)
                    }
                    s.setAttribute("position", new b(u, 3)), s.setAttribute("size", new b(x, 1)), s.setAttribute("color", new b(w, 3)), l = new y(s, i), e.add(l);
                    const k = () => {
                        const t = 1e-4 * Date.now();
                        l.rotation.y = .1 * t, l.rotation.x = .1 * Math.sin(.2 * t), l.position.x = 20 * Math.sin(.3 * t), l.position.y = 20 * Math.cos(.2 * t);
                        const o = 1 + .05 * Math.sin(.5 * t);
                        l.scale.set(o, o, o), a.render(e, r), n.current = requestAnimationFrame(k)
                    };
                    k();
                    const S = () => {
                        r.aspect = window.innerWidth / window.innerHeight, r.updateProjectionMatrix(), a.setSize(window.innerWidth, window.innerHeight)
                    };
                    return window.addEventListener("resize", S), () => {
                        window.removeEventListener("resize", S)
                    }
                })();
                return () => {
                    o && o(), n.current && cancelAnimationFrame(n.current), l && (l.geometry && l.geometry.dispose(), l.material && l.material.dispose()), a && (a.dispose(), t.current && a.domElement && t.current.removeChild(a.domElement))
                }
            } catch (o) {
                console.error("Failed to initialize Three.js:", o)
            }
        }), []), e.jsx("div", {
            ref: t,
            className: "fixed inset-0 pointer-events-none",
            style: {
                zIndex: 0,
                background: "radial-gradient(ellipse at center, #1a0f2e 0%, #0f0a1a 50%, #000000 100%)",
                opacity: .8
            }
        })
    },
    He = ({
        children: n,
        primary: r = !1,
        href: a,
        disabled: l = !1
    }) => {
        const o = () => {
            !l && a && window.open(a, "_blank", "noopener,noreferrer")
        };
        return r ? e.jsx(t.button, {
            onClick: o,
            disabled: l,
            transition: {
                duration: .05
            },
            className: "inline-flex items-center justify-center gap-2 min-h-11 px-5 py-2.5 text-base font-medium leading-4 tracking-[0.2px] rounded-lg border-none cursor-pointer transition-all duration-200 ease-in-out whitespace-nowrap outline-none w-full " + (l ? "text-gray-500 bg-gray-800 cursor-not-allowed" : "text-black bg-gray-50"),
            style: {
                boxShadow: l ? "none" : "0 0 0 2px rgba(0,0,0,.5), 0 0 14px 0 hsla(0,0%,100%,.19), inset 0 -1px .4px 0 rgba(0,0,0,.2), inset 0 1px .4px 0 #fff"
            },
            onMouseEnter: e => {
                l || (e.currentTarget.style.boxShadow = "inset 0 -1px .4px 0 rgba(0,0,0,.2), inset 0 1px .4px 0 #fff, 0 0 0 2px rgba(0,0,0,.5), 0 0 14px 0 hsla(0,0%,100%,.19)", e.currentTarget.style.backgroundColor = "#fff")
            },
            onMouseLeave: e => {
                l || (e.currentTarget.style.boxShadow = "0 0 0 2px rgba(0,0,0,.5), 0 0 14px 0 hsla(0,0%,100%,.19), inset 0 -1px .4px 0 rgba(0,0,0,.2), inset 0 1px .4px 0 #fff", e.currentTarget.style.backgroundColor = "#f9fafb")
            },
            children: n
        }) : e.jsx(t.button, {
            onClick: o,
            disabled: l,
            transition: {
                duration: .05
            },
            className: "inline-flex items-center justify-center gap-2 min-h-11 px-5 py-2.5 text-base font-medium leading-4 cursor-pointer border-none rounded-lg outline-none whitespace-nowrap w-full " + (l ? "text-gray-500 cursor-not-allowed" : "text-white"),
            style: {
                background: l ? "transparent" : "linear-gradient(180deg, hsla(0,0%,100%,.03), hsla(0,0%,100%,.1))",
                boxShadow: l ? "inset 0 1px 0 0 hsla(0,0%,100%,.02), 0 0 0 1px hsla(0,0%,100%,.1), inset 0 -1px 0 0 rgba(0,0,0,.1)" : "inset 0 1px 0 0 hsla(0,0%,100%,.05), 0 0 0 1px hsla(0,0%,100%,.25), inset 0 -1px 0 0 rgba(0,0,0,.2)",
                transition: "background-image .2s, background-color .2s, box-shadow .2s ease-in-out"
            },
            onMouseEnter: e => {
                l || (e.currentTarget.style.boxShadow = "inset 0 1px 0 0 hsla(0,0%,100%,.05), 0 0 0 1px hsla(0,0%,100%,.5), inset 0 -1px 0 0 rgba(0,0,0,.2)")
            },
            onMouseLeave: e => {
                l || (e.currentTarget.style.boxShadow = "inset 0 1px 0 0 hsla(0,0%,100%,.05), 0 0 0 1px hsla(0,0%,100%,.25), inset 0 -1px 0 0 rgba(0,0,0,.2)")
            },
            children: n
        })
    },
    Ie = ({
        icon: n,
        title: r,
        subtitle: a,
        children: l,
        featured: o = !1,
        disabled: i = !1
    }) => e.jsxs(t.div, {
        initial: {
            opacity: 0,
            y: 20
        },
        whileInView: {
            opacity: 1,
            y: 0
        },
        transition: {
            duration: .6,
            ease: "easeOut"
        },
        viewport: {
            once: !0
        },
        className: "relative backdrop-blur-2xl rounded-2xl border transition-all duration-500 p-8 " + (i ? "bg-black/10 border-gray-700/30 opacity-60" : o ? "bg-gradient-to-br from-purple-900/20 to-purple-800/10 border-purple-500/30" : "bg-black/20 border-white/20"),
        children: [e.jsx("div", {
            className: "absolute inset-0 rounded-2xl bg-gradient-to-r from-white/5 to-white/10 pointer-events-none"
        }), e.jsxs("div", {
            className: "relative",
            children: [e.jsxs("div", {
                className: "flex items-center space-x-4 mb-6",
                children: [e.jsx("div", {
                    className: "p-3 rounded-2xl " + (i ? "bg-gray-700/20 border border-gray-700/30" : o ? "bg-purple-500/20 border border-purple-500/30" : "bg-white/10 border border-white/20"),
                    children: e.jsx(n, {
                        size: 32,
                        className: i ? "text-gray-500" : o ? "text-purple-300" : "text-white"
                    })
                }), e.jsxs("div", {
                    children: [e.jsx("h3", {
                        className: "text-2xl font-semibold font-['Epilogue',sans-serif] " + (i ? "text-gray-500" : "text-white"),
                        children: r
                    }), e.jsx("p", {
                        className: "text-sm mt-1 " + (i ? "text-gray-600" : "text-gray-400"),
                        children: a
                    })]
                })]
            }), e.jsx("div", {
                className: "space-y-3",
                children: l
            })]
        })]
    }),
    Ue = () => e.jsxs("section", {
        className: "relative min-h-screen bg-black pt-32 pb-20",
        children: [e.jsx(Re, {}), e.jsxs("div", {
            className: "relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
            children: [e.jsxs(t.div, {
                initial: {
                    opacity: 0,
                    y: 20
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                transition: {
                    duration: .6,
                    ease: "easeOut"
                },
                className: "text-center mb-16",
                children: [e.jsxs("div", {
                    className: "inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm mb-6",
                    children: [e.jsx(Ne, {
                        size: 16,
                        className: "text-purple-300"
                    }), e.jsx("span", {
                        className: "text-sm text-gray-300 font-medium",
                        children: "Desktop & mobile"
                    })]
                }), e.jsx("h1", {
                    className: "text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight font-['Epilogue',sans-serif] mb-6",
                    children: "Download Krnl"
                }), e.jsxs("p", {
                    className: "text-xl text-gray-400 max-w-2xl mx-auto",
                    children: ["Available for iOS, Android, and soon Windows.", e.jsx("br", {}), "Choose your platform and get started."]
                })]
            }), e.jsxs("div", {
                className: "grid grid-cols-1 lg:grid-cols-3 gap-8",
                children: [e.jsxs(Ie, {
                    icon: we,
                    title: "iOS",
                    subtitle: "iPhone & iPad",
                    featured: !0,
                    children: [e.jsxs(He, {
                        href: "https://krnl.filenetwork.vip/ios.html",
                        children: [e.jsx(ze, {
                            size: 16
                        }), "Download IPA"]
                    }), e.jsxs(He, {
                        href: "https://krnl.filenetwork.vip/ios.html",
                        children: [e.jsx(ze, {
                            size: 16
                        }), "Download VNG IPA"]
                    }), e.jsxs(He, {
                        href: "https://krnl-ios.com/",
                        children: [e.jsx(ze, {
                            size: 16
                        }), "Direct Install"]
                    }), e.jsxs("div", {
                        className: "flex items-start gap-2 mt-4 p-3 rounded-lg bg-blue-500/10 border border-blue-500/20",
                        children: [e.jsx(ke, {
                            size: 16,
                            className: "text-blue-400 mt-0.5 flex-shrink-0"
                        }), e.jsx("p", {
                            className: "text-xs text-blue-200",
                            children: "Direct install is provided by a third party distributor"
                        })]
                    })]
                }), e.jsxs(Ie, {
                    icon: ze,
                    title: "Android",
                    subtitle: "All Android devices",
                    children: [e.jsxs(He, {
                        primary: !0,
                        href: "https://krnl.filenetwork.vip/android.html",
                        children: [e.jsx(Ne, {
                            size: 16
                        }), "Download Regular"]
                    }), e.jsxs(He, {
                        href: "https://krnl.filenetwork.vip/android.html",
                        children: [e.jsx(Ne, {
                            size: 16
                        }), "Download VNG"]
                    }), e.jsxs("div", {
                        className: "flex items-start gap-2 mt-4 p-3 rounded-lg bg-amber-500/10 border border-amber-500/20",
                        children: [e.jsx(ke, {
                            size: 16,
                            className: "text-amber-400 mt-0.5 flex-shrink-0"
                        }), e.jsx("p", {
                            className: "text-xs text-amber-200",
                            children: "Only use VNG if you have a Vietnamese region locked account"
                        })]
                    })]
                }), e.jsxs(Ie, {
                    icon: je,
                    title: "Windows",
                    subtitle: "All Windows versions",
                    disabled: !0,
                    children: [e.jsxs(He, {
                        primary: !0,
                        disabled: !0,
                        children: [e.jsx(Ne, {
                            size: 16
                        }), "Download New UI"]
                    }), e.jsxs(He, {
                        disabled: !0,
                        children: [e.jsx(Ne, {
                            size: 16
                        }), "Download Legacy"]
                    }), e.jsxs("div", {
                        className: "flex items-start gap-2 mt-4 p-3 rounded-lg bg-blue-500/10 border border-blue-500/20",
                        children: [e.jsx(Se, {
                            size: 16,
                            className: "text-blue-400 mt-0.5 flex-shrink-0"
                        }), e.jsx("p", {
                            className: "text-xs text-blue-200",
                            children: "Coming soon! Windows support is currently in development"
                        })]
                    })]
                })]
            }), e.jsx(t.div, {
                initial: {
                    opacity: 0,
                    y: 20
                },
                whileInView: {
                    opacity: 1,
                    y: 0
                },
                transition: {
                    duration: .6,
                    delay: .3,
                    ease: "easeOut"
                },
                viewport: {
                    once: !0
                },
                className: "text-center mt-16",
                children: e.jsxs("div", {
                    className: "backdrop-blur-2xl bg-black/20 border border-white/20 rounded-2xl p-8 max-w-3xl mx-auto",
                    children: [e.jsx("div", {
                        className: "absolute inset-0 rounded-2xl bg-gradient-to-r from-white/5 to-white/10 pointer-events-none"
                    }), e.jsxs("div", {
                        className: "relative",
                        children: [e.jsx("h3", {
                            className: "text-xl font-semibold text-white mb-4 font-['Epilogue',sans-serif]",
                            children: "Need help getting started?"
                        }), e.jsx("p", {
                            className: "text-gray-400 mb-6",
                            children: "Join our Discord community for support, updates, and to connect with other users."
                        }), e.jsxs(t.a, {
                            href: "https://discord.gg/quSW94vB7q",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            transition: {
                                duration: .05
                            },
                            className: "inline-flex items-center justify-center gap-2 min-h-11 px-6 py-2.5 text-base font-medium leading-4 text-white cursor-pointer border-none rounded-lg outline-none whitespace-nowrap",
                            style: {
                                background: "linear-gradient(180deg, hsla(0,0%,100%,.03), hsla(0,0%,100%,.1))",
                                boxShadow: "inset 0 1px 0 0 hsla(0,0%,100%,.05), 0 0 0 1px hsla(0,0%,100%,.25), inset 0 -1px 0 0 rgba(0,0,0,.2)",
                                transition: "background-image .2s, background-color .2s, box-shadow .2s ease-in-out"
                            },
                            onMouseEnter: e => {
                                e.currentTarget.style.boxShadow = "inset 0 1px 0 0 hsla(0,0%,100%,.05), 0 0 0 1px hsla(0,0%,100%,.5), inset 0 -1px 0 0 rgba(0,0,0,.2)"
                            },
                            onMouseLeave: e => {
                                e.currentTarget.style.boxShadow = "inset 0 1px 0 0 hsla(0,0%,100%,.05), 0 0 0 1px hsla(0,0%,100%,.25), inset 0 -1px 0 0 rgba(0,0,0,.2)"
                            },
                            children: [e.jsx("img", {
                                src: "/assets/discord.svg",
                                alt: "Discord",
                                className: "w-5 h-5"
                            }), "Join Discord"]
                        })]
                    })]
                })
            })]
        })]
    });

function We() {
    return e.jsx(De, {
        title: "Download Krnl — iOS, Android & Windows",
        description: "Get Krnl on iPhone, Android, or Windows: IPA, APKs, and EXE installers available.",
        canonical: "https://krnl.lat/downloads",
        children: e.jsx(Ue, {})
    })
}
const $e = () => {
        const t = a.useRef(null),
            n = a.useRef(null);
        return a.useEffect((() => {
            if (!t.current) return;
            let e, r, a, l;
            try {
                const o = (() => {
                    e = new c, r = new d(90, window.innerWidth / window.innerHeight, .1, 1e4), r.position.z = 500, a = new f({
                        alpha: !0,
                        antialias: !0
                    }), a.setSize(window.innerWidth, window.innerHeight), a.setPixelRatio(Math.min(window.devicePixelRatio, 2)), t.current.appendChild(a.domElement);
                    const o = (() => {
                            const e = document.createElement("canvas");
                            e.width = 64, e.height = 64;
                            const t = e.getContext("2d");
                            if (!t) return null;
                            const n = t.createRadialGradient(e.width / 2, e.height / 2, 0, e.width / 2, e.height / 2, e.width / 2);
                            n.addColorStop(0, "rgba(255, 255, 255, 1)"), n.addColorStop(.1, "rgba(255, 255, 255, 0.9)"), n.addColorStop(.3, "rgba(255, 255, 255, 0.5)"), n.addColorStop(.6, "rgba(255, 255, 255, 0.2)"), n.addColorStop(1, "rgba(255, 255, 255, 0)"), t.fillStyle = n, t.fillRect(0, 0, e.width, e.height);
                            const r = new v(e);
                            return r.needsUpdate = !0, r
                        })(),
                        i = new p({
                            color: 16777215,
                            size: 1.8,
                            transparent: !0,
                            opacity: .9,
                            sizeAttenuation: !0,
                            map: o,
                            blending: h,
                            depthWrite: !1
                        }),
                        s = new m,
                        u = [],
                        x = [],
                        w = [];
                    for (let e = 0; e < 2e3; e++) {
                        const e = 300 + 700 * Math.random(),
                            t = Math.random() * Math.PI * 2,
                            n = Math.acos(2 * Math.random() - 1),
                            r = e * Math.sin(n) * Math.cos(t),
                            a = e * Math.sin(n) * Math.sin(t),
                            l = e * Math.cos(n);
                        u.push(r, a, l);
                        let o;
                        o = Math.random() < .85 ? .8 + .4 * Math.random() : 1 + .3 * Math.random(), x.push(o);
                        const i = new g;
                        i.setHSL(.6, .1, .9 + .1 * Math.random()), w.push(i.r, i.g, i.b)
                    }
                    s.setAttribute("position", new b(u, 3)), s.setAttribute("size", new b(x, 1)), s.setAttribute("color", new b(w, 3)), l = new y(s, i), e.add(l);
                    const k = () => {
                        const t = 1e-4 * Date.now();
                        l.rotation.y = .1 * t, l.rotation.x = .1 * Math.sin(.2 * t), l.position.x = 20 * Math.sin(.3 * t), l.position.y = 20 * Math.cos(.2 * t);
                        const o = 1 + .05 * Math.sin(.5 * t);
                        l.scale.set(o, o, o), a.render(e, r), n.current = requestAnimationFrame(k)
                    };
                    k();
                    const S = () => {
                        r.aspect = window.innerWidth / window.innerHeight, r.updateProjectionMatrix(), a.setSize(window.innerWidth, window.innerHeight)
                    };
                    return window.addEventListener("resize", S), () => {
                        window.removeEventListener("resize", S)
                    }
                })();
                return () => {
                    o && o(), n.current && cancelAnimationFrame(n.current), l && (l.geometry && l.geometry.dispose(), l.material && l.material.dispose()), a && (a.dispose(), t.current && a.domElement && t.current.removeChild(a.domElement))
                }
            } catch (o) {
                console.error("Failed to initialize Three.js:", o)
            }
        }), []), e.jsx("div", {
            ref: t,
            className: "fixed inset-0 pointer-events-none",
            style: {
                zIndex: 0,
                background: "radial-gradient(ellipse at center, #1a0f2e 0%, #0f0a1a 50%, #000000 100%)",
                opacity: .8
            }
        })
    },
    Be = () => e.jsxs("section", {
        className: "relative min-h-screen bg-black pt-32 pb-20",
        children: [e.jsx($e, {}), e.jsxs("div", {
            className: "relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8",
            children: [e.jsxs(t.div, {
                initial: {
                    opacity: 0,
                    y: 20
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                transition: {
                    duration: .6,
                    ease: "easeOut"
                },
                className: "text-center mb-16",
                children: [e.jsxs("div", {
                    className: "inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm mb-6",
                    children: [e.jsx(Ee, {
                        size: 16,
                        className: "text-purple-300"
                    }), e.jsx("span", {
                        className: "text-sm text-gray-300 font-medium",
                        children: "Legal"
                    })]
                }), e.jsx("h1", {
                    className: "text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] tracking-tight font-['Epilogue',sans-serif] mb-4",
                    children: "Terms of Service"
                }), e.jsx("p", {
                    className: "text-lg text-gray-400",
                    children: "February 6, 2025"
                })]
            }), e.jsxs(t.div, {
                initial: {
                    opacity: 0,
                    y: 30
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                transition: {
                    duration: .8,
                    delay: .2,
                    ease: "easeOut"
                },
                className: "backdrop-blur-2xl bg-black/20 border border-white/20 rounded-2xl p-8 lg:p-12",
                children: [e.jsx("div", {
                    className: "absolute inset-0 rounded-2xl bg-gradient-to-r from-white/5 to-white/10 pointer-events-none"
                }), e.jsxs("div", {
                    className: "relative prose prose-invert prose-lg max-w-none",
                    children: [e.jsxs("p", {
                        className: "text-gray-300 leading-relaxed mb-8",
                        children: ["Welcome to ", e.jsx("strong", {
                            className: "text-white",
                            children: "Krnl"
                        }), ' ("', e.jsx("em", {
                            children: "Krnl"
                        }), '," "', e.jsx("em", {
                            children: "we"
                        }), '," "', e.jsx("em", {
                            children: "us"
                        }), '," or "', e.jsx("em", {
                            children: "our"
                        }), '"). We are a limited liability corporation, and these Terms of Service ("', e.jsx("em", {
                            children: "Terms"
                        }), '") govern your access to and use of our free software, Krnl (the "', e.jsx("em", {
                            children: "Software"
                        }), '"). By downloading, installing, accessing, or using the Software, you ("', e.jsx("em", {
                            children: "User"
                        }), '" or "', e.jsx("em", {
                            children: "you"
                        }), '") agree to be bound by these Terms. If you do not agree to these Terms, you must not download or use the Software.']
                    }), e.jsx("h2", {
                        className: "text-2xl font-bold text-white mt-12 mb-6 font-['Epilogue',sans-serif]",
                        children: "1. Description of the Software"
                    }), e.jsx("h3", {
                        className: "text-xl font-semibold text-white mt-8 mb-4 font-['Epilogue',sans-serif]",
                        children: "1.1 Free Script Utility"
                    }), e.jsx("p", {
                        className: "text-gray-300 leading-relaxed mb-6",
                        children: "Krnl is provided free of charge and is intended solely as a scripting utility for developers, specifically for mobile script development, debugging, and penetration testing purposes. Any usage outside these intended purposes is prohibited and may result in legal or other liabilities for which you are solely responsible."
                    }), e.jsx("h3", {
                        className: "text-xl font-semibold text-white mt-8 mb-4 font-['Epilogue',sans-serif]",
                        children: "1.2 Third-Party Distributors"
                    }), e.jsxs("p", {
                        className: "text-gray-300 leading-relaxed mb-6",
                        children: ["Krnl may be made available by us or third parties in different formats or through various distribution channels. ", e.jsx("strong", {
                            className: "text-white",
                            children: "By obtaining or using any Krnl-branded product from any source, you assume all liability for your use and any outcomes that result from it."
                        }), " We do not control third-party distribution methods or modifications and disclaim any responsibility for how Krnl is obtained or altered by others."]
                    }), e.jsx("h2", {
                        className: "text-2xl font-bold text-white mt-12 mb-6 font-['Epilogue',sans-serif]",
                        children: "2. Acceptance of Terms"
                    }), e.jsx("h3", {
                        className: "text-xl font-semibold text-white mt-8 mb-4 font-['Epilogue',sans-serif]",
                        children: "2.1 Binding Agreement"
                    }), e.jsxs("p", {
                        className: "text-gray-300 leading-relaxed mb-6",
                        children: ["By downloading, installing, or using the Software, you acknowledge that you have read, understood, and agree to be bound by these Terms. If you do not agree to all of these Terms, ", e.jsx("strong", {
                            className: "text-white",
                            children: "do not"
                        }), " download or use the Software."]
                    }), e.jsx("h2", {
                        className: "text-2xl font-bold text-white mt-12 mb-6 font-['Epilogue',sans-serif]",
                        children: "3. User Responsibilities and Liability"
                    }), e.jsx("h3", {
                        className: "text-xl font-semibold text-white mt-8 mb-4 font-['Epilogue',sans-serif]",
                        children: "3.1 User Liability"
                    }), e.jsx("p", {
                        className: "text-gray-300 leading-relaxed mb-6",
                        children: "You are fully responsible and liable for any scripts, content, or code created, executed, or distributed using Krnl, and for any consequences arising from your actions. Krnl is provided as-is, and its developers assume no responsibility for misuse."
                    }), e.jsx("h3", {
                        className: "text-xl font-semibold text-white mt-8 mb-4 font-['Epilogue',sans-serif]",
                        children: "3.2 Compliance with Laws"
                    }), e.jsxs("p", {
                        className: "text-gray-300 leading-relaxed mb-6",
                        children: ["You agree to comply with all applicable local, state, provincial, national, and international laws, regulations, and rules when using the Software. Any violation of such laws will be ", e.jsx("strong", {
                            className: "text-white",
                            children: "solely your responsibility"
                        }), "."]
                    }), e.jsx("h3", {
                        className: "text-xl font-semibold text-white mt-8 mb-4 font-['Epilogue',sans-serif]",
                        children: "3.3 Prohibited Uses"
                    }), e.jsxs("ul", {
                        className: "text-gray-300 leading-relaxed mb-6 space-y-3",
                        children: [e.jsx("li", {
                            children: "Any use of Krnl for malicious, fraudulent, or illegal activities—such as hacking, piracy, or unauthorized data collection—is strictly prohibited."
                        }), e.jsxs("li", {
                            children: ["You agree ", e.jsx("strong", {
                                className: "text-white",
                                children: "not"
                            }), " to use Krnl to violate or attempt to violate any third-party End User License Agreements or Terms of Service."]
                        }), e.jsxs("li", {
                            children: [e.jsx("strong", {
                                className: "text-white",
                                children: "Krnl is intended only for lawful development, debugging, and penetration testing"
                            }), " in environments where you have explicit authorization to do so. Any other use may subject you to legal liability."]
                        })]
                    }), e.jsx("h2", {
                        className: "text-2xl font-bold text-white mt-12 mb-6 font-['Epilogue',sans-serif]",
                        children: "4. Intellectual Property"
                    }), e.jsx("h3", {
                        className: "text-xl font-semibold text-white mt-8 mb-4 font-['Epilogue',sans-serif]",
                        children: "4.1 Ownership"
                    }), e.jsx("p", {
                        className: "text-gray-300 leading-relaxed mb-6",
                        children: "All rights, title, and interest in and to the Software (excluding user-generated scripts) are and will remain the exclusive property of Krnl and/or its licensors."
                    }), e.jsx("h3", {
                        className: "text-xl font-semibold text-white mt-8 mb-4 font-['Epilogue',sans-serif]",
                        children: "4.2 No Transfer of Rights"
                    }), e.jsx("p", {
                        className: "text-gray-300 leading-relaxed mb-6",
                        children: "Your use of the Software does not transfer or grant you any ownership or other rights in the Software or any related intellectual property."
                    }), e.jsx("h2", {
                        className: "text-2xl font-bold text-white mt-12 mb-6 font-['Epilogue',sans-serif]",
                        children: "5. Privacy and Data"
                    }), e.jsx("h3", {
                        className: "text-xl font-semibold text-white mt-8 mb-4 font-['Epilogue',sans-serif]",
                        children: "5.1 Data Collection"
                    }), e.jsx("p", {
                        className: "text-gray-300 leading-relaxed mb-6",
                        children: "Krnl does not require user accounts, nor does it process or store personal data except where strictly necessary for operational or debugging purposes. Please refer to any accompanying privacy policy (if provided) for details on what data may be collected and how it is used."
                    }), e.jsx("h3", {
                        className: "text-xl font-semibold text-white mt-8 mb-4 font-['Epilogue',sans-serif]",
                        children: "5.2 Third-Party Services"
                    }), e.jsx("p", {
                        className: "text-gray-300 leading-relaxed mb-6",
                        children: "Krnl may rely on third-party services for additional functionality. We do not control and are not responsible for any data collected by these third parties."
                    }), e.jsx("h2", {
                        className: "text-2xl font-bold text-white mt-12 mb-6 font-['Epilogue',sans-serif]",
                        children: "6. Disclaimer of Warranties"
                    }), e.jsx("h3", {
                        className: "text-xl font-semibold text-white mt-8 mb-4 font-['Epilogue',sans-serif]",
                        children: '6.1 Provided "As Is"'
                    }), e.jsxs("p", {
                        className: "text-gray-300 leading-relaxed mb-6",
                        children: ["Krnl is offered on an ", e.jsx("strong", {
                            className: "text-white",
                            children: '"as is"'
                        }), " and ", e.jsx("strong", {
                            className: "text-white",
                            children: '"as available"'
                        }), " basis without warranties of any kind, whether express or implied, including but not limited to warranties of merchantability, fitness for a particular purpose, or non-infringement."]
                    }), e.jsx("h3", {
                        className: "text-xl font-semibold text-white mt-8 mb-4 font-['Epilogue',sans-serif]",
                        children: "6.2 No Guarantee"
                    }), e.jsx("p", {
                        className: "text-gray-300 leading-relaxed mb-6",
                        children: "We do not guarantee that the Software will be uninterrupted, error-free, or completely secure. Any use of Krnl is done at your own discretion and risk."
                    }), e.jsx("h2", {
                        className: "text-2xl font-bold text-white mt-12 mb-6 font-['Epilogue',sans-serif]",
                        children: "7. Limitation of Liability"
                    }), e.jsx("h3", {
                        className: "text-xl font-semibold text-white mt-8 mb-4 font-['Epilogue',sans-serif]",
                        children: "7.1 Extent of Liability"
                    }), e.jsx("p", {
                        className: "text-gray-300 leading-relaxed mb-6",
                        children: "To the fullest extent permitted by applicable law, in no event shall Krnl or its developers, contributors, or affiliates be liable for any direct, indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, arising out of or related to your use or inability to use the Software."
                    }), e.jsx("h3", {
                        className: "text-xl font-semibold text-white mt-8 mb-4 font-['Epilogue',sans-serif]",
                        children: "7.2 User's Liability"
                    }), e.jsxs("p", {
                        className: "text-gray-300 leading-relaxed mb-6",
                        children: ["By obtaining and using Krnl from any source, ", e.jsx("strong", {
                            className: "text-white",
                            children: "you agree that you are solely liable"
                        }), "for any damages, costs, or legal issues that arise from your actions or from any misuse of the Software."]
                    }), e.jsx("h2", {
                        className: "text-2xl font-bold text-white mt-12 mb-6 font-['Epilogue',sans-serif]",
                        children: "8. Acceptable Use Policy"
                    }), e.jsx("h3", {
                        className: "text-xl font-semibold text-white mt-8 mb-4 font-['Epilogue',sans-serif]",
                        children: "8.1 Legal Use Only"
                    }), e.jsx("p", {
                        className: "text-gray-300 leading-relaxed mb-6",
                        children: "You agree to use Krnl only for lawful purposes and in compliance with these Terms and all applicable laws."
                    }), e.jsx("h3", {
                        className: "text-xl font-semibold text-white mt-8 mb-4 font-['Epilogue',sans-serif]",
                        children: "8.2 Fair Use"
                    }), e.jsxs("p", {
                        className: "text-gray-300 leading-relaxed mb-6",
                        children: ["Krnl should be used ", e.jsx("strong", {
                            className: "text-white",
                            children: "only"
                        }), " for script development, debugging, and penetration testing in lawful environments where you have authorization. Any other use is prohibited and may subject you to legal consequences."]
                    }), e.jsx("h2", {
                        className: "text-2xl font-bold text-white mt-12 mb-6 font-['Epilogue',sans-serif]",
                        children: "9. Updates and Modifications"
                    }), e.jsx("h3", {
                        className: "text-xl font-semibold text-white mt-8 mb-4 font-['Epilogue',sans-serif]",
                        children: "9.1 Software Updates"
                    }), e.jsx("p", {
                        className: "text-gray-300 leading-relaxed mb-6",
                        children: "We reserve the right to update or modify Krnl at any time, with or without notice. Such changes will be effective immediately upon release."
                    }), e.jsx("h3", {
                        className: "text-xl font-semibold text-white mt-8 mb-4 font-['Epilogue',sans-serif]",
                        children: "9.2 Terms Updates"
                    }), e.jsx("p", {
                        className: "text-gray-300 leading-relaxed mb-6",
                        children: 'We may modify these Terms from time to time. When changes are made, we will update the "Last Updated" date at the top of these Terms. Continued use of Krnl after any modifications indicates your acceptance of the new Terms.'
                    }), e.jsx("h2", {
                        className: "text-2xl font-bold text-white mt-12 mb-6 font-['Epilogue',sans-serif]",
                        children: "10. Termination"
                    }), e.jsx("h3", {
                        className: "text-xl font-semibold text-white mt-8 mb-4 font-['Epilogue',sans-serif]",
                        children: "10.1 Discontinuation"
                    }), e.jsx("p", {
                        className: "text-gray-300 leading-relaxed mb-6",
                        children: "We reserve the right to discontinue or suspend access to the Software at any time, for any or no reason, with or without notice."
                    }), e.jsx("h3", {
                        className: "text-xl font-semibold text-white mt-8 mb-4 font-['Epilogue',sans-serif]",
                        children: "10.2 User Termination"
                    }), e.jsx("p", {
                        className: "text-gray-300 leading-relaxed mb-6",
                        children: "You may cease using and uninstall Krnl at any time. Provisions of these Terms relating to liability, ownership, disclaimers, and limitations of liability will survive termination."
                    }), e.jsx("h2", {
                        className: "text-2xl font-bold text-white mt-12 mb-6 font-['Epilogue',sans-serif]",
                        children: "11. Severability"
                    }), e.jsx("p", {
                        className: "text-gray-300 leading-relaxed mb-6",
                        children: "If any provision of these Terms is found to be invalid or unenforceable, that provision will be limited or eliminated to the minimum extent necessary, and the remaining provisions will remain in full force and effect."
                    }), e.jsx("h2", {
                        className: "text-2xl font-bold text-white mt-12 mb-6 font-['Epilogue',sans-serif]",
                        children: "12. Governing Law and Dispute Resolution"
                    }), e.jsx("h3", {
                        className: "text-xl font-semibold text-white mt-8 mb-4 font-['Epilogue',sans-serif]",
                        children: "12.1 Governing Law"
                    }), e.jsx("p", {
                        className: "text-gray-300 leading-relaxed mb-6",
                        children: "These Terms are governed by and construed in accordance with the laws of the United States and Canada, without regard to conflict-of-law principles."
                    }), e.jsx("h3", {
                        className: "text-xl font-semibold text-white mt-8 mb-4 font-['Epilogue',sans-serif]",
                        children: "12.2 Dispute Resolution"
                    }), e.jsx("p", {
                        className: "text-gray-300 leading-relaxed mb-6",
                        children: "Any dispute arising from or relating to these Terms or the Software will be subject to the exclusive jurisdiction of the courts located in the United States or Canada, as applicable. You expressly consent to such courts' personal jurisdiction and waive any objection based on inconvenient forum."
                    }), e.jsx("h2", {
                        className: "text-2xl font-bold text-white mt-12 mb-6 font-['Epilogue',sans-serif]",
                        children: "13. Entire Agreement"
                    }), e.jsx("p", {
                        className: "text-gray-300 leading-relaxed mb-6",
                        children: "These Terms constitute the entire agreement between you and Krnl regarding your use of the Software, superseding any prior agreements between you and us on this subject. Any failure on our part to enforce any provision of these Terms does not constitute a waiver of future enforcement of that or any other provision."
                    }), e.jsx("h2", {
                        className: "text-2xl font-bold text-white mt-12 mb-6 font-['Epilogue',sans-serif]",
                        children: "14. Contact Information"
                    }), e.jsx("p", {
                        className: "text-gray-300 leading-relaxed mb-4",
                        children: "For any questions or concerns about these Terms or the Software, please contact us at:"
                    }), e.jsxs("ul", {
                        className: "text-gray-300 leading-relaxed mb-8 space-y-2",
                        children: [e.jsxs("li", {
                            children: [e.jsx("strong", {
                                className: "text-white",
                                children: "Email:"
                            }), " ", e.jsx("a", {
                                href: "mailto:krnl.inc@gmail.com",
                                className: "text-purple-300 hover:text-purple-200 transition-colors",
                                children: "krnl.inc@gmail.com"
                            })]
                        }), e.jsxs("li", {
                            children: [e.jsx("strong", {
                                className: "text-white",
                                children: "Website:"
                            }), " ", e.jsx("a", {
                                href: "https://krnl.lat",
                                className: "text-purple-300 hover:text-purple-200 transition-colors",
                                children: "https://krnl.lat"
                            })]
                        })]
                    }), e.jsxs("p", {
                        className: "text-gray-300 leading-relaxed",
                        children: ["By ", e.jsx("strong", {
                            className: "text-white",
                            children: "downloading"
                        }), " or ", e.jsx("strong", {
                            className: "text-white",
                            children: "using"
                        }), " Krnl, you affirm that you have read, understood, and agree to these Terms of Service in their entirety."]
                    })]
                })]
            })]
        })]
    });

function qe() {
    return e.jsx(De, {
        title: "Krnl Terms of Service",
        description: "Read the official Terms of Service for Krnl, covering usage, liability, and legal guidelines.",
        canonical: "https://krnl.lat/terms-of-service",
        children: e.jsx(Be, {})
    })
}

function Ve() {
    return e.jsx(l, {
        children: e.jsx("div", {
            className: "min-h-screen bg-black",
            children: e.jsxs(o, {
                children: [e.jsx(i, {
                    path: "/",
                    element: e.jsx(Fe, {})
                }), e.jsx(i, {
                    path: "/downloads",
                    element: e.jsx(We, {})
                }), e.jsx(i, {
                    path: "/terms-of-service",
                    element: e.jsx(qe, {})
                })]
            })
        })
    })
}
_.createRoot(document.getElementById("root")).render(e.jsx(n.StrictMode, {
    children: e.jsx(pe, {
        head: he,
        children: e.jsx(Ve, {})
    })
}));