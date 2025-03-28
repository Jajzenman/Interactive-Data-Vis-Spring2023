! function (e, t) {
    "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define("wafer-rapid", [], t) : "object" == typeof exports ? exports["wafer-rapid"] = t() : (e.wafer = e.wafer || {}, e.wafer.wafers = e.wafer.wafers || {}, e.wafer.wafers["wafer-rapid"] = t())
}("undefined" != typeof self ? self : this, function () {
    return function (e) {
        function t(n) {
            if (r[n]) return r[n].exports;
            var i = r[n] = {
                i: n,
                l: !1,
                exports: {}
            };
            return e[n].call(i.exports, i, i.exports, t), i.l = !0, i.exports
        }
        var r = {};
        return t.m = e, t.c = r, t.d = function (e, r, n) {
            t.o(e, r) || Object.defineProperty(e, r, {
                configurable: !1,
                enumerable: !0,
                get: n
            })
        }, t.n = function (e) {
            var r = e && e.__esModule ? function () {
                return e.default
            } : function () {
                return e
            };
            return t.d(r, "a", r), r
        }, t.o = function (e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }, t.p = "https://s.yimg.com/aaq/wf/", t(t.s = "./src/entry.js")
    }({
        "./src/entry.js": function (e, t, r) {
            "use strict";

            function n(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function i(e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t
            }

            function a(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }

            function o(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function s(e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t
            }

            function l(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }

            function c(e, t, r) {
                return t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r, e
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var u = window.wafer.utils.get,
                f = null,
                d = null,
                p = function (e) {
                    return e && (d = e), !f && d && (f = u(window, d)) && "function" != typeof f.refreshModule && (d = null, f = null), f
                },
                h = function () {
                    var e = void 0;
                    return function (t) {
                        if (!(e = e || window.rapidPageConfig)) return !1;
                        var r = e,
                            n = r.rapidConfig,
                            i = void 0 === n ? {} : n,
                            a = i.tracked_mods_viewability;
                        return !!a && !!a[t]
                    }
                }(),
                v = Object.assign || function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                    }
                    return e
                },
                g = function () {
                    function e(e, t) {
                        var r = [],
                            n = !0,
                            i = !1,
                            a = void 0;
                        try {
                            for (var o, s = e[Symbol.iterator](); !(n = (o = s.next()).done) && (r.push(o.value), !t || r.length !== t); n = !0);
                        } catch (e) {
                            i = !0, a = e
                        } finally {
                            try {
                                !n && s.return && s.return()
                            } finally {
                                if (i) throw a
                            }
                        }
                        return r
                    }
                    return function (t, r) {
                        if (Array.isArray(t)) return t;
                        if (Symbol.iterator in Object(t)) return e(t, r);
                        throw new TypeError("Invalid attempt to destructure non-iterable instance")
                    }
                }(),
                y = function () {
                    function e(e, t) {
                        for (var r = 0; r < t.length; r++) {
                            var n = t[r];
                            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                        }
                    }
                    return function (t, r, n) {
                        return r && e(t.prototype, r), n && e(t, n), t
                    }
                }(),
                w = window.wafer,
                _ = w.base,
                b = w.constants,
                m = w.utils,
                k = w.WaferBaseClass,
                O = m.getDataYlk,
                T = m.getYlkMapForNode,
                j = m.setTimeout,
                V = m.clearTimeout,
                I = b.ATTR_PREFIX,
                E = [],
                P = ["handleClick", "handleRapidMouseEnter", "handleRapidMouseLeave"],
                C = function (e) {
                    function t(e) {
                        var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            a = r.selector;
                        n(this, t);
                        var o = i(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, {
                                selector: a
                            }, {
                                STATE_ATTRS: E
                            })),
                            s = e.getAttribute(I + "rapid-trigger");
                        if (!s) return i(o);
                        var l = (e.getAttribute(I + "rapid-trigger-offset") || "").split(" "),
                            c = g(l, 2),
                            u = c[0],
                            f = c[1],
                            d = e.getAttribute(I + "rapid-trigger-interval");
                        "click" !== s && "eachClick" !== s || e.classList.add("has-rapid-click", "has-wafer-click");
                        var p = e.getAttribute(I + "rapid-method"),
                            h = (e.getAttribute(I + "rapid-name") || "").split("|"),
                            y = e.getAttribute("data-rapid_p") || "1",
                            w = (e.getAttribute(I + "rapid-trigger-percentage") || "").split(" "),
                            _ = g(w, 2),
                            b = _[0],
                            m = _[1],
                            k = b ? Math.max(Math.min(100, parseInt(b, 10)), 0) : 50,
                            O = m ? Math.max(Math.min(100, parseInt(m, 10)), 0) : 50;
                        return o._util = v({}, o._util, {
                            elem: e,
                            name: h,
                            offsetX: Number(f) || 0,
                            offsetY: Number(u) || 0,
                            pos: y,
                            trigger: s,
                            triggerInterval: Number(d) || 1e3,
                            triggerMethod: p,
                            triggerPercentX: isNaN(O) ? 50 : O,
                            triggerPercentY: isNaN(k) ? 50 : k
                        }), o._state = o._state || {}, "intentionalView" === s && (o._state.inViewCount = 0, o._state.didLock = !1, o._state.inViewTimeoutInstance = null, o._util.triggerCount = h.length - 1), P.forEach(function (e) {
                            o[e] = o[e].bind(o)
                        }), "onLoad" === s ? (o._beaconTrigger(), o.destroy()) : "mouseenter" === s && (o._state.mouseEnterTimeout = null, o.addEventListeners()), o
                    }
                    return a(t, e), y(t, [{
                        key: "_beaconTrigger",
                        value: function () {
                            var e = p();
                            if (e) {
                                var t = this._util,
                                    r = t.elem,
                                    n = t.name,
                                    i = t.trigger,
                                    a = t.triggerMethod,
                                    o = t.pos,
                                    s = n[this._state.inViewCount || 0],
                                    l = O(r);
                                if ("beaconClick" === a) e.beaconClick(l.sec, l.slk, o, l);
                                else if ("beaconEvent" === a) {
                                    var c = this._util.elem;
                                    _.emitLog({
                                        name: "WaferRapid",
                                        elem: c,
                                        meta: {
                                            i13n: l,
                                            name: s,
                                            type: "beaconEvent"
                                        }
                                    }), "intentionalView" === i ? e.beaconEvent("intentional view", Object.assign({}, l, {
                                        ll3: s
                                    })) : e.beaconEvent(s, l)
                                } else if ("beaconLinkViews" === a) e.beaconLinkViews([v({}, l, {
                                    _links: [l]
                                })]);
                                else if ("pageView" === a) {
                                    var u = T(r, "data-page-i13n"),
                                        f = l.spaceid,
                                        d = e.getRapidAttribute("keys");
                                    e.clearRapidAttribute(["keys"]), e.setRapidAttribute({
                                        keys: Object.assign({}, d, u),
                                        spaceid: f || e.getRapidAttribute("spaceid")
                                    }), e.beaconPageview(u), "click" === i && this.destroy()
                                }
                            }
                        }
                    }, {
                        key: "didLock",
                        value: function () {
                            this.nodeOutOfView(), this._state.didLock = !0
                        }
                    }, {
                        key: "didUnLock",
                        value: function () {
                            this._state.didLock = !1
                        }
                    }, {
                        key: "nodeInView",
                        value: function () {
                            var e = this,
                                t = this._state,
                                r = t.didLock,
                                n = t.inViewTimeoutInstance;
                            r || n || (this._state.inViewTimeoutInstance = j(function () {
                                if (e._state.inViewTimeoutInstance = null, e._state.inViewCount > e._util.triggerCount - 1) return e._beaconTrigger(), void(e._state.inViewCount = 0);
                                e._beaconTrigger(), ++e._state.inViewCount, e.nodeInView()
                            }, this._util.triggerInterval))
                        }
                    }, {
                        key: "nodeOutOfView",
                        value: function () {
                            var e = this._state,
                                t = e.didLock,
                                r = e.inViewTimeoutInstance;
                            !t && r && (V(r), this._state.inViewTimeoutInstance = null, this._state.inViewCount = 0)
                        }
                    }, {
                        key: "handleClick",
                        value: function () {
                            this._util.elem.classList.contains("has-rapid-click") && this._beaconTrigger()
                        }
                    }, {
                        key: "handleRapidMouseEnter",
                        value: function () {
                            var e = this;
                            this._destroyed || (V(this._state.mouseEnterTimeout, this), this._state.mouseEnterTimeout = j(function () {
                                e._beaconTrigger()
                            }, 100, this))
                        }
                    }, {
                        key: "handleRapidMouseLeave",
                        value: function () {
                            this._destroyed || V(this._state.mouseEnterTimeout, this)
                        }
                    }, {
                        key: "config",
                        get: function () {
                            return {
                                trigger: this._util.trigger
                            }
                        }
                    }]), t
                }(k);
            C.events = {
                click: [
                    ["has-rapid-click", "handleClick"]
                ],
                mouseenter: [
                    ["_self", "handleRapidMouseEnter"]
                ],
                mouseleave: [
                    ["_self", "handleRapidMouseLeave"]
                ]
            };
            var A = C,
                L = function () {
                    function e(e, t) {
                        var r = [],
                            n = !0,
                            i = !1,
                            a = void 0;
                        try {
                            for (var o, s = e[Symbol.iterator](); !(n = (o = s.next()).done) && (r.push(o.value), !t || r.length !== t); n = !0);
                        } catch (e) {
                            i = !0, a = e
                        } finally {
                            try {
                                !n && s.return && s.return()
                            } finally {
                                if (i) throw a
                            }
                        }
                        return r
                    }
                    return function (t, r) {
                        if (Array.isArray(t)) return t;
                        if (Symbol.iterator in Object(t)) return e(t, r);
                        throw new TypeError("Invalid attempt to destructure non-iterable instance")
                    }
                }(),
                M = Object.assign || function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                    }
                    return e
                },
                x = function () {
                    function e(e, t) {
                        for (var r = 0; r < t.length; r++) {
                            var n = t[r];
                            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                        }
                    }
                    return function (t, r, n) {
                        return r && e(t.prototype, r), n && e(t, n), t
                    }
                }(),
                R = function e(t, r, n) {
                    null === t && (t = Function.prototype);
                    var i = Object.getOwnPropertyDescriptor(t, r);
                    if (void 0 === i) {
                        var a = Object.getPrototypeOf(t);
                        return null === a ? void 0 : e(a, r, n)
                    }
                    if ("value" in i) return i.value;
                    var o = i.get;
                    if (void 0 !== o) return o.call(n)
                },
                S = window.wafer.base,
                W = window.wafer.controllers.WaferBaseController,
                N = window.wafer.utils,
                Y = N.convertNodeListToArray,
                D = N.elementInView,
                X = N.getDataYlk,
                B = N.throttle,
                F = function (e) {
                    for (var t = e, r = void 0; t;) t.classList.contains("wafer-rapid-module") && (r = t), t = t.parentElement;
                    return r
                },
                q = function (e, t) {
                    var r = t.get(e);
                    if (!r) return !1;
                    var n = r.instance,
                        i = n._util.trigger;
                    if (!e.id && i) return !1;
                    if (!e.id) return !1;
                    var a = p();
                    if (!a) return !1;
                    var o = X(e),
                        s = o.id,
                        l = !1;
                    if (a.isModuleTracked(s) ? h(s) || e.classList.contains("wafer-rapid-tracked") ? a.refreshModule(s) : (a.removeModule(s), l = !0) : l = !0, l) {
                        var u = o.sec ? c({}, s, o.sec) : [s];
                        a.addModulesWithViewability(u)
                    }
                    return e.classList.add("wafer-rapid-tracked"), !0
                },
                z = function (e, t, r) {
                    var n = t.get(e);
                    if (!n) return !1;
                    var i = n.instance,
                        a = i._util.trigger;
                    if (r.delete(i), !e.id && a) return !1;
                    if (!e.id && !a) return !1;
                    var o = p();
                    if (!o) return !1;
                    var s = X(e),
                        l = s.id;
                    return o.isModuleTracked(l) && o.removeModule(l), e.classList.remove("wafer-rapid-tracked"), !0
                },
                H = function (e) {
                    function t() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            r = e.root,
                            n = void 0 === r ? document : r,
                            i = e.selector,
                            a = void 0 === i ? ".wafer-rapid-module" : i,
                            l = e.validateDelay,
                            c = void 0 === l ? 25 : l;
                        o(this, t);
                        var u = s(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, {
                            root: n,
                            selector: a,
                            props: {
                                selector: a
                            },
                            WaferClass: A
                        }));
                        return p((document.body.getAttribute("data-wf-rapid") || "rapidInstance").split(".")), u._state = M({}, u._state, {
                            didScroll: !1,
                            elementWithIntentionalViewedInstances: new Map,
                            lastScrollTop: 0,
                            scrollDirection: null
                        }), u._validateWithThrottle = B(function () {
                            for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                            u.validate.apply(u, t)
                        }, c, u), u.sync(), u
                    }
                    return l(t, e), x(t, [{
                        key: "trigger",
                        value: function (e) {
                            var t = this._state.elementInstances,
                                r = t.get(e),
                                n = r.instance;
                            if (n) {
                                "scrollChange" === n._util.trigger && (n._beaconTrigger(), n.destroy())
                            }
                        }
                    }, {
                        key: "handleScroll",
                        value: function () {
                            this._state.didScroll = !0;
                            var e = window.pageYOffset || document.documentElement.scrollTop,
                                t = 1;
                            t = e > this._state.lastScrollTop ? 1 : 0, this._state.lastScrollTop = e <= 0 ? 0 : e, this._validateWithThrottle({
                                scrollDirection: t
                            })
                        }
                    }, {
                        key: "handleResize",
                        value: function () {
                            this._mapOffset(), this._validateWithThrottle()
                        }
                    }, {
                        key: "sync",
                        value: function (e) {
                            if (R(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "sync", this).call(this, e), e) {
                                var r = this._state.elementInstances,
                                    n = F(e);
                                if (n) return void q(n, r);
                                var i = Y(e.getElementsByClassName("wafer-rapid-module"));
                                i.length > 0 && Array.prototype.forEach.call(i, function (e) {
                                    q(e, r)
                                })
                            }
                        }
                    }, {
                        key: "handleVisibilityChange",
                        value: function () {
                            var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
                                t = this._state.elementInstances,
                                r = !0,
                                n = !1,
                                i = void 0;
                            try {
                                for (var a, o = t.entries()[Symbol.iterator](); !(r = (a = o.next()).done); r = !0) {
                                    var s = a.value,
                                        l = L(s, 2),
                                        c = l[1],
                                        u = c.instance;
                                    switch (u.config.trigger) {
                                        case "intentionalView":
                                            e || u.nodeOutOfView()
                                    }
                                }
                            } catch (e) {
                                n = !0, i = e
                            } finally {
                                try {
                                    !r && o.return && o.return()
                                } finally {
                                    if (n) throw i
                                }
                            }
                        }
                    }, {
                        key: "willValidate",
                        value: function (e, t) {
                            var r = t.scrollDirection;
                            if (this._state.didScroll) {
                                var n = this._state,
                                    i = n.elementInstances,
                                    a = n.elementWithIntentionalViewedInstances,
                                    o = r === this._state.scrollDirection;
                                this._state.scrollDirection = r, o || a.clear(), this._mapOffset(), e.forEach(function (e) {
                                    var t = i.get(e),
                                        r = t.instance,
                                        n = r.config,
                                        o = r.offsetX,
                                        s = r.offsetY;
                                    switch (n.trigger) {
                                        case "intentionalView":
                                            if (D(e, {
                                                    offsetX: o,
                                                    offsetY: s
                                                }, S.viewport)) {
                                                if (a.has(r)) return;
                                                a.set(r, e), r.nodeInView()
                                            } else r.nodeOutOfView()
                                    }
                                })
                            }
                        }
                    }, {
                        key: "destroy",
                        value: function (e) {
                            if (!e) return void R(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "destroy", this).call(this);
                            var r = this._state,
                                n = r.elementInstances,
                                i = r.elementWithIntentionalViewedInstances;
                            e.classList.contains("wafer-rapid-module") && z(e, n, i);
                            var a = Y(e.getElementsByClassName("wafer-rapid-module", n));
                            a.length > 0 && Array.prototype.forEach.call(a, function (e) {
                                z(e, n)
                            }), R(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "destroy", this).call(this, e)
                        }
                    }, {
                        key: "_mapOffset",
                        value: function () {
                            var e = this._state.elementInstances,
                                t = !0,
                                r = !1,
                                n = void 0;
                            try {
                                for (var i, a = e.entries()[Symbol.iterator](); !(t = (i = a.next()).done); t = !0) {
                                    var o = i.value,
                                        s = L(o, 2),
                                        l = s[0],
                                        c = s[1],
                                        u = c.instance;
                                    if ("intentionalView" === u._util.trigger) {
                                        var f = u._util,
                                            d = f.hasOffsetX,
                                            p = f.hasOffsetY,
                                            h = f.triggerPercentX,
                                            v = f.triggerPercentY;
                                        !p && (c.instance.offsetY = -parseInt(l.clientHeight * v / 100, 10)), !d && (c.instance.offsetX = -parseInt(l.clientWidth * h / 100, 10))
                                    }
                                }
                            } catch (e) {
                                r = !0, n = e
                            } finally {
                                try {
                                    !t && a.return && a.return()
                                } finally {
                                    if (r) throw n
                                }
                            }
                        }
                    }]), t
                }(W),
                U = H;
            t.default = new U
        }
    })
});