! function (e, t) {
    "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define("wafer", [], t) : "object" == typeof exports ? exports.wafer = t() : e.wafer = t()
}("undefined" != typeof self ? self : this, function () {
    return function (e) {
        function t(r) {
            if (n[r]) return n[r].exports;
            var i = n[r] = {
                i: r,
                l: !1,
                exports: {}
            };
            return e[r].call(i.exports, i, i.exports, t), i.l = !0, i.exports
        }
        var n = {};
        return t.m = e, t.c = n, t.d = function (e, n, r) {
            t.o(e, n) || Object.defineProperty(e, n, {
                configurable: !1,
                enumerable: !0,
                get: r
            })
        }, t.n = function (e) {
            var n = e && e.__esModule ? function () {
                return e.default
            } : function () {
                return e
            };
            return t.d(n, "a", n), n
        }, t.o = function (e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }, t.p = "https://s.yimg.com/aaq/wf/", t(t.s = "./src/entry.js")
    }({
        "./src/entry.js": function (e, t, n) {
            "use strict";

            function r(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function i(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function o(e, t) {
                var n = {};
                for (var r in e) t.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
                return n
            }

            function a(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function s(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }

            function c(e) {
                if (Array.isArray(e)) {
                    for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
                    return n
                }
                return Array.from(e)
            }

            function u(e) {
                return Array.isArray(e) ? e : Array.from(e)
            }

            function l(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function d(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function f(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function v(e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t
            }

            function h(e, t) {
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
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var m = {};
            n.d(m, "localStorage", function () {
                return y
            }), n.d(m, "visibilityMeta", function () {
                return p
            }), n.d(m, "transformProperty", function () {
                return g
            }), n.d(m, "mutationObserver", function () {
                return b
            }), n.d(m, "nativeLazyLoadingSupported", function () {
                return _
            }), n.d(m, "isSlowBrowser", function () {
                return E
            }), n.d(m, "performanceMarkSupported", function () {
                return T
            }), n.d(m, "isTouchSafariDevice", function () {
                return k
            }), n.d(m, "smoothScroll", function () {
                return C
            }), n.d(m, "isPWA", function () {
                return S
            });
            var w = {};
            n.d(w, "isVisible", function () {
                return G
            }), n.d(w, "debounce", function () {
                return Q
            }), n.d(w, "elementInView", function () {
                return Z
            }), n.d(w, "throttle", function () {
                return ee
            }), n.d(w, "bindEvent", function () {
                return te
            }), n.d(w, "unbindEvent", function () {
                return ne
            }), n.d(w, "get", function () {
                return re
            }), n.d(w, "loadScriptAsync", function () {
                return ie
            }), n.d(w, "loadCSSSync", function () {
                return oe
            }), n.d(w, "each", function () {
                return ae
            }), n.d(w, "findAncestor", function () {
                return se
            }), n.d(w, "fireBeacon", function () {
                return ce
            }), n.d(w, "isNodeName", function () {
                return ue
            }), n.d(w, "parseUrl", function () {
                return le
            }), n.d(w, "getElementsByAttrValues", function () {
                return de
            }), n.d(w, "convertNodeListToArray", function () {
                return fe
            }), n.d(w, "clearAndSetInnerHTML", function () {
                return ve
            }), n.d(w, "getConfigFromJSONScriptNode", function () {
                return he
            }), n.d(w, "getTemplateContent", function () {
                return me
            }), n.d(w, "getWaferInstanceForElem", function () {
                return we
            }), n.d(w, "getFocusableElems", function () {
                return ye
            }), n.d(w, "getYlkMapForNode", function () {
                return pe
            }), n.d(w, "getDataYlk", function () {
                return ge
            }), n.d(w, "getUrlParameterValueByName", function () {
                return be
            }), n.d(w, "setTransition", function () {
                return _e
            }), n.d(w, "removeTransition", function () {
                return Ee
            }), n.d(w, "urlify", function () {
                return Te
            }), n.d(w, "fetchWithCache", function () {
                return ke
            }), n.d(w, "removeCookie", function () {
                return Ce
            }), n.d(w, "setCookie", function () {
                return Se
            }), n.d(w, "getCookie", function () {
                return Oe
            }), n.d(w, "clearAllTimeout", function () {
                return Ae
            }), n.d(w, "clearTimeout", function () {
                return Le
            }), n.d(w, "clearTimeoutForInstance", function () {
                return xe
            }), n.d(w, "setTimeout", function () {
                return De
            });
            var y = function () {
                    try {
                        return window.localStorage.setItem("test", "test"), window.localStorage.removeItem("test"), !0
                    } catch (e) {
                        return !1
                    }
                }(),
                p = function () {
                    var e = void 0,
                        t = void 0;
                    return void 0 !== document.hidden ? (e = "hidden", t = "visibilitychange") : void 0 !== document.mozHidden ? (e = "mozHidden", t = "mozvisibilitychange") : void 0 !== document.msHidden ? (e = "msHidden", t = "msvisibilitychange") : void 0 !== document.webkitHidden && (e = "webkitHidden", t = "webkitvisibilitychange"), {
                        hidden: e,
                        visibilityChange: t
                    }
                }(),
                g = function () {
                    return "string" == typeof document.documentElement.style.transform ? "transform" : "WebkitTransform"
                }(),
                b = function () {
                    for (var e = ["WebKit", "Moz", "O", "Ms", ""], t = 0; t < e.length; t++)
                        if (e[t] + "MutationObserver" in window) return !0;
                    return !1
                }(),
                _ = function () {
                    return "loading" in HTMLImageElement.prototype
                }(),
                E = function () {
                    var e = void 0;
                    return new Promise(function (t) {
                        if (void 0 !== e) return t(e);
                        var n = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
                        if (n) {
                            var r = n.effectiveType;
                            if ("slow-2g" === r || "2g" === r) return e = !0, t(!0), !0
                        }
                        if (!("storage" in navigator && "estimate" in navigator.storage)) return t(!1);
                        navigator.storage.estimate().then(function () {
                            var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                r = n.usage,
                                i = n.quota;
                            return Math.round(r / i * 100) >= 70 ? (e = !0, t(!0)) : t(!1)
                        }).catch(function () {
                            return t(!1)
                        })
                    })
                }(),
                T = function () {
                    var e = window,
                        t = e.performance;
                    return t && "clearMarks" in t
                }(),
                k = function () {
                    return "ontouchstart" in window && /Safari/i.test(navigator.userAgent) && /Apple Computer/.test(navigator.vendor)
                }(),
                C = function () {
                    var e = !1;
                    try {
                        document.createElement("div").scrollTo({
                            top: 0,
                            get behavior() {
                                return e = !0, "smooth"
                            }
                        })
                    } catch (e) {}
                    return e
                }(),
                S = function () {
                    return !!("standalone" in window.navigator && window.navigator.standalone) || (!(void 0 === window.matchMedia || !window.matchMedia("(display-mode: standalone)").matches) || !(void 0 === window.msMatchMedia || !window.msMatchMedia("(display-mode: standalone)").matches))
                }(),
                O = Object.assign || function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                },
                A = ["rid", "crumb", "subscrumb"],
                L = {
                    omit: 1,
                    "same-origin": 1,
                    include: 1
                },
                x = function () {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                        t = arguments[1];
                    return e.replace(new RegExp("[?&]" + t + "=[^&#]*(#.*)?$"), "$1").replace(new RegExp("([?&])" + t + "=[^&]*&"), "$1")
                },
                D = function (e) {
                    return Object.keys(e).map(function (t) {
                        return encodeURIComponent(t) + "=" + encodeURIComponent(e[t])
                    }).join("&")
                },
                j = function (e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        n = t.body,
                        r = t.cache,
                        i = void 0 === r ? 1 : r,
                        o = t.cacheKey,
                        a = t.cacheStrategy,
                        s = void 0 === a ? "networkFirst" : a,
                        c = t.cacheTtl,
                        u = void 0 === c ? 60 : c,
                        l = t.clientHeaders,
                        d = void 0 === l ? {} : l,
                        f = t.credentials,
                        v = void 0 === f ? "same-origin" : f,
                        h = t.importance,
                        m = t.method,
                        w = void 0 === m ? "GET" : m,
                        y = t.mode,
                        p = t.paramsToNotCache,
                        g = void 0 === p ? {} : p,
                        b = t.retries,
                        _ = t.timeout,
                        E = void 0 === _ ? 6e3 : _,
                        T = t.useRid,
                        k = void 0 === T || T;
                    return new Promise(function (t, r) {
                        var a = Date.now(),
                            c = D(g),
                            l = -1 === e.indexOf("?") ? "?" : "&",
                            f = c ? e + l + c : e;
                        o || (o = e, A.forEach(function (e) {
                            o = x(o, e)
                        })), v || L[v] || (v = "same-origin");
                        var m = i,
                            p = !1,
                            _ = void 0,
                            T = void 0,
                            C = !1;
                        if (n) try {
                            n = JSON.stringify(JSON.parse(n)), w = "GET" === w ? "POST" : w, m = !1
                        } catch (e) {
                            n = {}
                        }
                        var S = setTimeout(function () {
                            var e = Date.now();
                            if (p = !0, _) return void t(Object.assign({}, _, {
                                _fetchMeta: {
                                    duration: e - a,
                                    source: "CACHE_IS_STALE"
                                }
                            }));
                            r(new Error("Request timed out for timeout value " + E + " having startTime " + a + " and endTime " + e))
                        }, E);
                        T = m && window.wafer.db && "cacheFirst" === s ? window.wafer.db.get(o, "fetch", {
                            timeout: 1e3
                        }).then(function (e) {
                            if (e) {
                                var n = e.ttl,
                                    r = e.value,
                                    i = e.cachedTime,
                                    o = (Date.now() - i) / 1e3;
                                try {
                                    _ = JSON.parse(r)
                                } catch (e) {}
                                o < n && (clearTimeout(S), p || (C = !0, t(Object.assign({}, _, {
                                    _fetchMeta: {
                                        duration: Date.now() - a,
                                        source: "CACHE"
                                    }
                                }))))
                            }
                        }).catch(function (e) {}) : Promise.resolve(!1), T.then(function () {
                            if (!C) {
                                var e = new Headers,
                                    i = window.wafer.base,
                                    s = i.adLiteConfig,
                                    c = void 0 === s ? {} : s,
                                    g = i.fetchHeaders,
                                    T = i.rid,
                                    A = c || {},
                                    L = A.adLite,
                                    x = A.subscrumb;
                                if ("cors" !== y) {
                                    for (var D in g) g.hasOwnProperty(D) && e.set(D, g[D]);
                                    L && x && (f += l + "adLite=" + L + l + "subscrumb=" + encodeURIComponent(x))
                                }
                                k && T && -1 === f.indexOf("rid=") && (f += l + "rid=" + T);
                                for (var j in d) d.hasOwnProperty(j) && e.set(j, d[j]);
                                "POST" !== w && "PUT" !== w && "DELETE" !== w || e.has("Content-Type") || e.set("Content-Type", "application/json"), b && "cors" !== y && e.set("x-wf-retry-count", b);
                                var P = {
                                    credentials: v,
                                    headers: e,
                                    method: w
                                };
                                y && (P.mode = y), n && (P.body = n), h && (P.importance = h), fetch(f, P).then(function (e) {
                                    if (clearTimeout(S), !p) {
                                        var n = e.status;
                                        if (n >= 200 && n <= 299 && ("PUT" === w || "DELETE" === w)) {
                                            var r = {
                                                duration: Date.now() - a,
                                                source: "NETWORK_WITHOUT_CACHE"
                                            };
                                            return void e.json().then(function (e) {
                                                t(O({}, e, {
                                                    _fetchMeta: r
                                                }))
                                            }).catch(function () {
                                                t({
                                                    _fetchMeta: r
                                                })
                                            })
                                        }
                                        if (200 === n) {
                                            var i = e.headers.get("Content-Type");
                                            if (m && window.wafer.db && u && i && i.match(/application\/json/i)) {
                                                var s = Date.now();
                                                e.clone().text().then(function (e) {
                                                    return window.wafer.db.set({
                                                        ttl: u,
                                                        key: o,
                                                        value: e,
                                                        cachedTime: s
                                                    }, "fetch", {
                                                        timeout: E
                                                    }).catch(function (e) {}), !0
                                                })
                                            }
                                            return e.json().then(function (e) {
                                                if (Object(e) !== e) throw new Error("Malformed response");
                                                t(Object.assign({}, e, {
                                                    _fetchMeta: {
                                                        duration: Date.now() - a,
                                                        source: m ? _ ? "NETWORK_AS_CACHE_IS_EXPIRED" : "NETWORK" : "NETWORK_WITHOUT_CACHE"
                                                    }
                                                }))
                                            }).catch(function (e) {
                                                throw new Error("Malformed response")
                                            })
                                        }
                                        if (204 === n) throw m = !1, _ = null, new Error("No Content");
                                        if ("no-cors" === y && 0 === n) return t(Object.assign({
                                            html: ""
                                        }, {
                                            _fetchMeta: {
                                                duration: Date.now() - a,
                                                source: m ? _ ? "NETWORK_AS_CACHE_IS_EXPIRED" : "NETWORK" : "NETWORK_WITHOUT_CACHE"
                                            }
                                        })), !0;
                                        throw new Error(404 === n ? "Not found" : "Malformed response")
                                    }
                                }).catch(function (e) {
                                    if (!p)
                                        if (clearTimeout(S), _) t(Object.assign({}, _, {
                                            _fetchMeta: {
                                                duration: Date.now() - a,
                                                source: "CACHE_IS_STALE"
                                            }
                                        }));
                                        else if (m) {
                                        if (!window.wafer.db) return void r(e);
                                        window.wafer.db.get(o, "fetch", {
                                            timeout: E
                                        }).then(function (n) {
                                            if (!n) return void r(e);
                                            var i = n.ttl,
                                                o = n.value,
                                                s = n.cachedTime,
                                                c = (Date.now() - s) / 1e3;
                                            try {
                                                _ = JSON.parse(o)
                                            } catch (e) {}
                                            t(Object.assign({}, _, {
                                                _fetchMeta: {
                                                    duration: Date.now() - a,
                                                    source: c < i ? "CACHE_SECOND_ATTEMPT" : "CACHE_SECOND_ATTEMPT_STALE"
                                                }
                                            }))
                                        }).catch(function (e) {
                                            r(e)
                                        })
                                    } else r(e)
                                })
                            }
                        })
                    }).then(function (e) {
                        var t = e.assets,
                            n = void 0 === t ? {} : t,
                            r = n.css,
                            i = void 0 === r ? [] : r;
                        return i ? Promise.all(i.map(function (e) {
                            var t = e.value;
                            return "" === e.cdnOrigin && (t = location.origin + t), window.wafer.base._loadAsset(t, "css")
                        })).then(function () {
                            return e
                        }) : e
                    })
                },
                P = function (e) {
                    return "string" == typeof e && e
                },
                M = /;\s/g,
                I = /([^=]+)=/i,
                R = function (e) {
                    if (P(e)) {
                        var t = new Date(0).toUTCString();
                        window.document.cookie = e + "=''; expires=" + t
                    }
                },
                N = function (e, t) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                        r = n.expires,
                        i = n.domain,
                        o = n.path;
                    if (P(e)) {
                        var a = e + "=" + t;
                        r && r instanceof Date && (a += "; expires=" + r.toUTCString()), i && P(i) && (a += "; domain=" + i), o && P(o) && (a += "; path=" + o), window.document.cookie = a
                    }
                },
                z = function (e) {
                    if (!P(e)) return null;
                    var t = null;
                    return e = e.trim(), window.document.cookie.split(M).some(function (n) {
                        var r = void 0,
                            i = void 0,
                            o = n.match(I);
                        if (Array.isArray(o)) try {
                            r = decodeURIComponent(o[1]), i = decodeURIComponent(n.substring(r.length + 1))
                        } catch (e) {}
                        return r === e && (t = i.trim(), !0)
                    }), t
                },
                W = this,
                B = function () {
                    var e = new Map;
                    return {
                        setTimeout: function (e) {
                            function t(t, n, r) {
                                return e.apply(this, arguments)
                            }
                            return t.toString = function () {
                                return e.toString()
                            }, t
                        }(function (t, n, r) {
                            var i = r || W;
                            if (!i) return setTimeout(t, n);
                            e.has(i) || e.set(i, new Map);
                            var o = setTimeout(function () {
                                var n = Array.prototype.slice.call(arguments);
                                e.get(i).delete(o), t.apply(this, n)
                            }, n);
                            return e.get(i).set(o, o), o
                        }),
                        clearAllTimeout: function () {
                            if (e && e.size) {
                                var t = !0,
                                    n = !1,
                                    r = void 0;
                                try {
                                    for (var i, o = e.values()[Symbol.iterator](); !(t = (i = o.next()).done); t = !0) {
                                        var a = i.value,
                                            s = !0,
                                            c = !1,
                                            u = void 0;
                                        try {
                                            for (var l, d = a.values()[Symbol.iterator](); !(s = (l = d.next()).done); s = !0) {
                                                var f = l.value;
                                                clearTimeout(f)
                                            }
                                        } catch (e) {
                                            c = !0, u = e
                                        } finally {
                                            try {
                                                !s && d.return && d.return()
                                            } finally {
                                                if (c) throw u
                                            }
                                        }
                                    }
                                } catch (e) {
                                    n = !0, r = e
                                } finally {
                                    try {
                                        !t && o.return && o.return()
                                    } finally {
                                        if (n) throw r
                                    }
                                }
                                e.clear()
                            }
                        },
                        clearTimeoutForInstance: function (t) {
                            var n = e.get(t);
                            if (n && n.size) {
                                var r = !0,
                                    i = !1,
                                    o = void 0;
                                try {
                                    for (var a, s = n[Symbol.iterator](); !(r = (a = s.next()).done); r = !0) {
                                        var c = a.value;
                                        clearTimeout(c)
                                    }
                                } catch (e) {
                                    i = !0, o = e
                                } finally {
                                    try {
                                        !r && s.return && s.return()
                                    } finally {
                                        if (i) throw o
                                    }
                                }
                                e.get(t).clear()
                            }
                        },
                        clearTimeout: function (e) {
                            function t(t, n) {
                                return e.apply(this, arguments)
                            }
                            return t.toString = function () {
                                return e.toString()
                            }, t
                        }(function (t, n) {
                            var r = n || W,
                                i = e.get(r);
                            if (!i) return void clearTimeout(t);
                            var o = i.get(t);
                            clearTimeout(o), e.get(r).delete(t)
                        })
                    }
                }(),
                H = function () {
                    function e(e, t) {
                        var n = [],
                            r = !0,
                            i = !1,
                            o = void 0;
                        try {
                            for (var a, s = e[Symbol.iterator](); !(r = (a = s.next()).done) && (n.push(a.value), !t || n.length !== t); r = !0);
                        } catch (e) {
                            i = !0, o = e
                        } finally {
                            try {
                                !r && s.return && s.return()
                            } finally {
                                if (i) throw o
                            }
                        }
                        return n
                    }
                    return function (t, n) {
                        if (Array.isArray(t)) return t;
                        if (Symbol.iterator in Object(t)) return e(t, n);
                        throw new TypeError("Invalid attempt to destructure non-iterable instance")
                    }
                }(),
                V = B.clearAllTimeout,
                U = B.clearTimeout,
                F = B.clearTimeoutForInstance,
                K = B.setTimeout,
                Y = function (e, t) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                        r = n.offsetX,
                        i = void 0 === r ? 0 : r,
                        o = n.offsetY,
                        a = void 0 === o ? 0 : o;
                    return e.right + i >= t.left && e.bottom + a >= t.top && e.left - i <= t.right && e.top - a <= t.bottom
                },
                X = function (e) {
                    return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
                },
                J = function (e) {
                    for (var t = document, n = t.styleSheets, r = 0; r < n.length; r++) {
                        if (n[r].href === e) return !0
                    }
                    return !1
                },
                q = function e(t, n, r, i) {
                    if (r.hasAttribute(t)) {
                        var o = r.getAttribute(t);
                        i[o] && i[o].push(r)
                    }
                    var a = r.children;
                    if (!a) return i;
                    for (var s = a.length; s--;) e(t, n, a[s], i);
                    return i
                },
                $ = function (e) {
                    if (!e) return e;
                    if ("content" in document.createElement("template")) return e;
                    var t = e.childNodes,
                        n = void 0;
                    if (t.length) {
                        n = document.createElement("div");
                        for (var r = 0; r < t.length; r++) n.appendChild(t[r].cloneNode(!0));
                        window.wafer.base.destroy(e), e.innerHTML = ""
                    } else n = e;
                    return n
                },
                G = X,
                Q = function (e, t, n) {
                    var r = void 0;
                    return function () {
                        for (var i = arguments.length, o = Array(i), a = 0; a < i; a++) o[a] = arguments[a];
                        window.clearTimeout(r), r = window.setTimeout(function () {
                            e.apply(n, o)
                        }, t)
                    }
                },
                Z = function (e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        n = t.containerClass,
                        r = t.offsetX,
                        i = void 0 === r ? 0 : r,
                        o = t.offsetY,
                        a = void 0 === o ? 0 : o,
                        s = arguments[2];
                    if (!X(e)) return !1;
                    if (n && Element.prototype.closest) {
                        var c = e.closest(n);
                        if (c) {
                            var u = c.getBoundingClientRect();
                            if (Y(u, s)) {
                                var l = u.bottom + a,
                                    d = u.left - i,
                                    f = u.right + i,
                                    v = u.top - a,
                                    h = {
                                        top: v > s.top ? v : s.top,
                                        right: f < s.right ? f : s.right,
                                        bottom: l < s.bottom ? l : s.bottom,
                                        left: d > s.left ? d : s.left
                                    },
                                    m = e.getBoundingClientRect();
                                return Y(m, h)
                            }
                            return !1
                        }
                    }
                    var w = e.getBoundingClientRect();
                    return Y(w, s, {
                        offsetX: i,
                        offsetY: a
                    })
                },
                ee = function (e, t, n) {
                    var r = 0;
                    return function () {
                        for (var i = arguments.length, o = Array(i), a = 0; a < i; a++) o[a] = arguments[a];
                        var s = +new Date;
                        s - r < t || (r = s, e.apply(n, o))
                    }
                },
                te = function (e, t, n) {
                    var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
                        i = r.passive,
                        o = void 0 === i || i;
                    k && "click" === t && (e.style.cursor = "pointer"), e.addEventListener(t, n, {
                        capture: !1,
                        passive: o
                    })
                },
                ne = function (e, t, n) {
                    var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
                        i = r.passive,
                        o = void 0 === i || i;
                    e.removeEventListener(t, n, {
                        capture: !1,
                        passive: o
                    })
                },
                re = function (e, t) {
                    return t.reduce(function (e, t) {
                        return e && e[t]
                    }, e)
                },
                ie = function e() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        n = t.checkPageForScript,
                        r = void 0 !== n && n,
                        i = t.src,
                        o = t.type,
                        a = t.text,
                        s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function () {},
                        c = arguments[2],
                        u = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
                    if (c && re(window, c.split("."))) return void s();
                    if ("text/javascript" !== (o = o || "text/javascript")) return void s(new Error("can load only script of type text/javascript"));
                    if (i && r && document.querySelector('script[src*="' + i + '"]')) return void s();
                    var l = document.createElement("script");
                    l.type = o, i ? (l.src = i, l.async = !0, l.defer = !0, l.readyState ? l.onreadystatechange = function () {
                        "loaded" !== l.readyState && "complete" !== l.readyState || (l.onreadystatechange = null, s(null, l))
                    } : l.onload = function () {
                        s(null, l)
                    }, l.onerror = function () {
                        u <= 5 ? e({
                            src: i,
                            type: o,
                            text: a
                        }, s, c, ++u) : s(new Error("could not load script"))
                    }) : (l.textContent = "try{" + a + "}catch(e){window.console && window.console.error(e);}", s(null, l)), document.getElementsByTagName("head")[0].appendChild(l)
                },
                oe = function e() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        n = t.checkPageForLink,
                        r = void 0 !== n && n,
                        i = t.src,
                        o = t.text,
                        a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function () {},
                        s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
                    if (i && r && document.querySelector('link[href*="' + i + '"]')) return void a();
                    var c = document.getElementsByTagName("head")[0];
                    if (o) {
                        var u = document.createElement("style");
                        return u.type = "text/css", u.styleSheet ? u.styleSheet.cssText = o : u.appendChild(document.createTextNode(o)), c.appendChild(u), void a()
                    }
                    var l = document.createElement("link");
                    l.rel = "stylesheet", l.href = i, c.appendChild(l), l.addEventListener("load", function () {
                        if (J(i)) return void a();
                        var e = 0,
                            t = setInterval(function () {
                                (J(i) || e > 2) && (a(), clearInterval(t)), ++e
                            }, 10)
                    }), l.addEventListener("error", function () {
                        s <= 2 ? e({
                            src: i,
                            text: o
                        }, a, ++s) : a()
                    })
                },
                ae = function (e, t) {
                    if (e && t)
                        for (var n = e.length, r = 0; r < n && !1 !== t(e[r], r); r++);
                },
                se = function (e, t) {
                    for (; e && !e.classList.contains(t);) e = e.parentElement;
                    return e
                },
                ce = function (e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        n = t.useNavigator,
                        r = void 0 === n || n,
                        i = t.useTimestamp,
                        o = void 0 === i || i,
                        a = !1;
                    if (r)
                        if (window.navigator && "function" == typeof window.navigator.sendBeacon) try {
                            window.navigator.sendBeacon(e) || (a = !0)
                        } catch (e) {
                            a = !0
                        } else a = !0;
                        else a = !0;
                    if (a) {
                        var s = new Image;
                        te(s, "error", function () {
                            s = null
                        }), te(s, "load", function () {
                            s = null
                        }), te(s, "abort", function () {
                            s = null
                        }), s.src = o ? e + (-1 === e.indexOf("?") ? "?" : "&") + (new Date).getTime() : e
                    }
                },
                ue = function (e, t) {
                    return e.nodeName.toLowerCase() === t
                },
                le = function (e) {
                    if (!(e = e ? e.split("?")[0] : "") || "/" === e.charAt(0)) return {
                        host: "undefined" != typeof window ? window.location.host : "",
                        pathname: e || ""
                    };
                    var t = e.split("/");
                    return {
                        host: t[2],
                        pathname: "/" + t.slice(3).join("/")
                    }
                },
                de = function (e, t) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : document.body;
                    if (!Array.isArray(t)) return {};
                    var r = {};
                    return t.forEach(function (e) {
                        r[e] = []
                    }), q(e, t, n, r), r
                },
                fe = function (e) {
                    for (var t, n = [], r = 0; t = e[r]; ++r) n.push(t);
                    return n
                },
                ve = function (e, t) {
                    e.innerHTML = "", e.innerHTML = t
                },
                he = function (e) {
                    if (!e) return {};
                    var t = {};
                    try {
                        t = JSON.parse(e.textContent)
                    } catch (e) {}
                    return t
                },
                me = function (e) {
                    var t = $(e),
                        n = t.innerHTML;
                    if (n) return n;
                    for (var r = "", i = t.childNodes, o = 0; o < i.length; o++) r += i[o].outerHTML;
                    return r
                },
                we = function (e, t) {
                    var n = window.wafer.wafers[t];
                    if (!n) return null;
                    var r = void 0;
                    return r = !0 === n.__esModule ? n.default._state : n._state, r.elementInstances.get(e)
                },
                ye = function (e) {
                    return e.querySelectorAll('a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="search"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled])')
                },
                pe = function (e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "data-ylk",
                        n = e.getAttribute(t) || e.getAttribute("data-i13n"),
                        r = {};
                    return n && n.split(";").forEach(function (e) {
                        var t = e.split(":"),
                            n = H(t, 2),
                            i = n[0],
                            o = n[1];
                        !r[i] && o && (r[i] = o)
                    }), r
                },
                ge = function (e) {
                    var t = {},
                        n = e,
                        r = n.getAttribute("id");
                    for (r && (t.id = r); n !== document.body;) Object.assign(t, pe(n)), n = n.parentNode;
                    return t
                },
                be = function (e, t) {
                    var n = RegExp("[?&]" + e + "=([^&]*)").exec(t);
                    return n && decodeURIComponent(n[1].replace(/\+/g, " "))
                },
                _e = function (e, t, n, r) {
                    var i = t + " " + n + "ms " + r;
                    Object.assign(e.style, {
                        webkitTransition: i,
                        transition: i
                    })
                },
                Ee = function (e) {
                    Object.assign(e.style, {
                        webkitTransition: "",
                        transition: ""
                    })
                },
                Te = D,
                ke = j,
                Ce = R,
                Se = N,
                Oe = z,
                Ae = V,
                Le = U,
                xe = F,
                De = K,
                je = Object.freeze({
                    ATTR_PREFIX: "data-wf-"
                }),
                Pe = Object.assign || function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                },
                Me = function () {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var r = t[n];
                            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                        }
                    }
                    return function (t, n, r) {
                        return n && e(t.prototype, n), r && e(t, r), t
                    }
                }(),
                Ie = function () {
                    function e() {
                        r(this, e)
                    }
                    return Me(e, [{
                        key: "init",
                        value: function () {
                            this._util = {
                                listeners: {}
                            }
                        }
                    }, {
                        key: "emit",
                        value: function () {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                                t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                                n = this._util.listeners;
                            n && n[e] && setTimeout(function () {
                                n[e].forEach(function (n) {
                                    n.call(void 0, Pe({
                                        type: e
                                    }, t))
                                })
                            }, 0)
                        }
                    }, {
                        key: "on",
                        value: function (e, t) {
                            var n = this._util.listeners;
                            n && t && e && (n[e] || (n[e] = []), n[e].push(t))
                        }
                    }, {
                        key: "removeListener",
                        value: function (e, t) {
                            var n = this._util.listeners;
                            if (n && n[e]) {
                                var r = n[e].indexOf(t);
                                r > -1 && n[e].splice(r, 1)
                            }
                        }
                    }, {
                        key: "destroy",
                        value: function () {
                            this._util.listeners = null
                        }
                    }]), e
                }(),
                Re = Ie,
                Ne = function () {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var r = t[n];
                            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                        }
                    }
                    return function (t, n, r) {
                        return n && e(t.prototype, n), r && e(t, r), t
                    }
                }(),
                ze = function () {
                    function e() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            n = t.name,
                            r = void 0 === n ? "wafer" : n,
                            o = t.version,
                            a = void 0 === o ? 1 : o,
                            s = t.tables,
                            c = void 0 === s ? ["fetch"] : s,
                            u = t.cb,
                            l = void 0 === u ? function () {} : u;
                        i(this, e), this._utils = {
                            cb: l,
                            connection: null,
                            db: null,
                            name: r,
                            startTime: Date.now(),
                            tables: c
                        };
                        var d = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
                        d && r && a && (this._utils.connection = d.open(r, a), this.addEventListener())
                    }
                    return Ne(e, [{
                        key: "addEventListener",
                        value: function () {
                            var e = this,
                                t = this._utils,
                                n = t.cb,
                                r = t.connection,
                                i = t.startTime,
                                o = t.tables;
                            r.onsuccess = function (t) {
                                var r = t.target.result,
                                    a = !0;
                                o.some(function (e) {
                                    return !r.objectStoreNames.contains(e) && (a = !1, !0)
                                }), a && (e._utils.db = r, n("success", {
                                    duration: Date.now() - i
                                }))
                            }, r.onerror = function (t) {
                                e._utils.db = null, n("error", {
                                    duration: Date.now() - i
                                })
                            }, r.onupgradeneeded = function (t) {
                                var r = t.target.result;
                                o.forEach(function (e) {
                                    r.createObjectStore(e, {
                                        keyPath: "key"
                                    }).createIndex("key", ["cachedTime", "key", "ttl"])
                                }), t.target.transaction.oncomplete = function () {
                                    e._utils.db = r, n("success", {
                                        duration: Date.now() - i
                                    })
                                }
                            }
                        }
                    }, {
                        key: "get",
                        value: function (e, t) {
                            var n = this,
                                r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                                i = r.timeout,
                                o = void 0 === i ? 1e3 : i,
                                a = this._utils.db;
                            return new Promise(function (r, i) {
                                if (!a) return void i(new Error("Connection missing"));
                                if (!t) return void i(new Error("Table missing"));
                                var s = !1,
                                    c = setTimeout(function () {
                                        s = !0, i(new Error("Cache lookup timed out"))
                                    }, o);
                                if (!a.objectStoreNames.contains(t)) return clearTimeout(c), void i(new Error("Store does not exist : " + t));
                                var u = void 0;
                                try {
                                    u = n._utils.db.transaction(t, "readonly")
                                } catch (e) {
                                    return clearTimeout(c), void i(e)
                                }
                                u.onerror = function (e) {
                                    clearTimeout(c), s || i(e)
                                }, u.onabort = function (e) {
                                    clearTimeout(c), s || i(e)
                                };
                                var l = u.objectStore(t);
                                if (!l) return clearTimeout(c), void i(new Error("store doesn't exist for table : " + t));
                                var d = l.get(e);
                                d.onsuccess = function (e) {
                                    if (clearTimeout(c), !s) {
                                        var t = e.target.result;
                                        r(t)
                                    }
                                }, d.onerror = function (e) {
                                    clearTimeout(c), s || i(e)
                                }
                            })
                        }
                    }, {
                        key: "set",
                        value: function (e, t) {
                            var n = this,
                                r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                                i = r.timeout,
                                o = void 0 === i ? 1e3 : i,
                                a = this._utils,
                                s = a.cb,
                                c = a.db;
                            return new Promise(function (r, i) {
                                if (!c) return void i(new Error("Connection missing"));
                                if (!t) return void i(new Error("Table missing"));
                                var a = !1,
                                    u = setTimeout(function () {
                                        a = !0, i(new Error("Cache write timed out"))
                                    }, o);
                                if (!c.objectStoreNames.contains(t)) return clearTimeout(u), s("error", {
                                    action: "deleting db",
                                    message: "Store does not exist : " + t
                                }), n.deleteDB().catch(function () {}), void i(new Error("Store does not exist : " + t));
                                var l = void 0;
                                try {
                                    l = n._utils.db.transaction(t, "readwrite")
                                } catch (e) {
                                    return clearTimeout(u), e instanceof DOMException && (s("error", {
                                        action: "deleting db",
                                        message: e.message
                                    }), n.deleteDB().catch(function () {})), void i(e)
                                }
                                l.onerror = function (e) {
                                    clearTimeout(u), a || i(e)
                                }, l.onabort = function (e) {
                                    clearTimeout(u), a || i(e)
                                };
                                var d = l.objectStore(t);
                                if (!d) return clearTimeout(u), void i(new Error("store doesn't exist for table : " + t));
                                var f = d.put(e);
                                f.onsuccess = function (e) {
                                    if (clearTimeout(u), !a) {
                                        var t = e.target.result;
                                        r(t)
                                    }
                                }, f.onerror = function (e) {
                                    clearTimeout(u), a || i(e)
                                }
                            })
                        }
                    }, {
                        key: "delete",
                        value: function (e, t) {
                            var n = this,
                                r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                                i = r.timeout,
                                o = void 0 === i ? 1e3 : i,
                                a = this._utils.db;
                            return new Promise(function (r, i) {
                                if (!a) return void i(new Error("Connection missing"));
                                if (!t) return void i(new Error("Table missing"));
                                var s = !1,
                                    c = setTimeout(function () {
                                        s = !0, i(new Error("Cache delete timed out"))
                                    }, o);
                                if (!a.objectStoreNames.contains(t)) return clearTimeout(c), void i(new Error("Store does not exist : " + t));
                                var u = void 0;
                                try {
                                    u = n._utils.db.transaction(t, "readwrite")
                                } catch (e) {
                                    return clearTimeout(c), void i(e)
                                }
                                u.onerror = function (e) {
                                    clearTimeout(c), s || i(e)
                                }, u.onabort = function (e) {
                                    clearTimeout(c), s || i(e)
                                };
                                var l = u.objectStore(t);
                                if (!l) return clearTimeout(c), void i(new Error("store doesn't exist for table : " + t));
                                var d = l.delete(e);
                                d.onsuccess = function (e) {
                                    if (clearTimeout(c), !s) {
                                        var t = e.target.result;
                                        r(t)
                                    }
                                }, d.onerror = function (e) {
                                    clearTimeout(c), s || i(e)
                                }
                            })
                        }
                    }, {
                        key: "clean",
                        value: function (e) {
                            var t = this,
                                n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                                r = n.timeout,
                                i = void 0 === r ? 1e4 : r,
                                o = n.timeDiffToDelete,
                                a = void 0 === o ? 18e5 : o,
                                s = this._utils.db,
                                c = Date.now();
                            return new Promise(function (n, r) {
                                if (!s) return void r(new Error("Connection missing"));
                                if (!e) return void r(new Error("Table missing"));
                                var o = !1,
                                    u = setTimeout(function () {
                                        o = !0, r(new Error("Cache clean timed out"))
                                    }, i);
                                if (!s.objectStoreNames.contains(e)) return clearTimeout(u), void r(new Error("Store does not exist : " + e));
                                var l = void 0;
                                try {
                                    l = t._utils.db.transaction(e, "readonly")
                                } catch (e) {
                                    return clearTimeout(u), void r(e)
                                }
                                l.onerror = function (e) {
                                    clearTimeout(u), o || r(e)
                                }, l.onabort = function (e) {
                                    clearTimeout(u), o || r(e)
                                };
                                var d = l.objectStore(e);
                                if (!d) return clearTimeout(u), void r(new Error("store doesn't exist for table : " + e));
                                var f = d.openCursor(),
                                    v = [];
                                f.onsuccess = function (i) {
                                    if (clearTimeout(u), !o) {
                                        var s = i.target.result;
                                        if (s) {
                                            var l = s.value.cachedTime;
                                            c - l > a && v.push(t.delete(s.key, e)), s.continue()
                                        } else Promise.all(v).then(function (e) {
                                            n(e)
                                        }).catch(function (e) {
                                            r(e)
                                        })
                                    }
                                }, f.onerror = function (e) {
                                    clearTimeout(u), o || r(e)
                                }
                            })
                        }
                    }, {
                        key: "deleteDB",
                        value: function () {
                            var e = this,
                                t = this._utils.db,
                                n = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
                            return new Promise(function (r, i) {
                                if (!n) return void i(new Error("Connection missing"));
                                t && (t.close(), e._utils.db = null);
                                var o = e._utils.name,
                                    a = !1,
                                    s = setTimeout(function () {
                                        a = !0, i(new Error("Could not delete"))
                                    }, 1e3),
                                    c = n.deleteDatabase(o);
                                c.onerror = function (e) {
                                    clearTimeout(s), a || i(new Error("Could not delete"))
                                }, c.onsuccess = function () {
                                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                                    clearTimeout(s), a || r(e.result)
                                }
                            })
                        }
                    }]), e
                }(),
                We = ze,
                Be = Object.assign || function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                },
                He = function () {
                    function e(e, t) {
                        var n = [],
                            r = !0,
                            i = !1,
                            o = void 0;
                        try {
                            for (var a, s = e[Symbol.iterator](); !(r = (a = s.next()).done) && (n.push(a.value), !t || n.length !== t); r = !0);
                        } catch (e) {
                            i = !0, o = e
                        } finally {
                            try {
                                !r && s.return && s.return()
                            } finally {
                                if (i) throw o
                            }
                        }
                        return n
                    }
                    return function (t, n) {
                        if (Array.isArray(t)) return t;
                        if (Symbol.iterator in Object(t)) return e(t, n);
                        throw new TypeError("Invalid attempt to destructure non-iterable instance")
                    }
                }(),
                Ve = function () {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var r = t[n];
                            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                        }
                    }
                    return function (t, n, r) {
                        return n && e(t.prototype, n), r && e(t, r), t
                    }
                }(),
                Ue = /(wf-[a-z-]+)/,
                Fe = !1,
                Ke = function (e) {
                    if (document.attachEvent && void 0 !== document.attachEvent) {
                        var t = !1;
                        document.attachEvent("onreadystatechange", function () {
                            var n = document,
                                r = n.readyState;
                            "interactive" === r ? (t = !0, setTimeout(e, 0)) : "complete" === r && (!t && setTimeout(e, 0), t = !0)
                        })
                    } else "loading" === document.readyState ? document.addEventListener("DOMContentLoaded", e, {
                        capture: !1,
                        passive: !0
                    }) : setTimeout(e, 0)
                },
                Ye = function () {
                    function e() {
                        var t = this;
                        a(this, e), this._viewport = {
                            top: 0,
                            left: 0
                        }, this._state = {
                            colorSchemaEventAdded: !1
                        }, this._assetLoadedMapping = new Map, this._isPageVisible = !0, this._observerMapping = {}, this._isOldCacheCleared = !1, this._colorSchemaOverrideTheme = null, this._saveViewportOffset(), this._updateState(), this._initHostConfig(), this._props = {
                            darkmodeSupportSystemDefault: "true" === document.documentElement.getAttribute("data-color-theme-enabled"),
                            head: document.getElementsByTagName("head")[0]
                        }, this._handleVisibilityChange = this._handleVisibilityChange.bind(this), Ke(function () {
                            window.wafer && window.wafer.utils && (t._initDB(function () {
                                Fe || (t.__executeAllRegisteredReadyFns(), Fe = !0)
                            }), t._setup(), setTimeout(function () {
                                Fe || (t.__executeAllRegisteredReadyFns(), Fe = !0, t.emitLog({
                                    name: "colorSchema",
                                    meta: {
                                        value: t.colorSchema
                                    }
                                }))
                            }, 20))
                        })
                    }
                    return Ve(e, [{
                        key: "addObserver",
                        value: function (e) {
                            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function () {};
                            this._observerMapping[e] || (this._observerMapping[e] = []), this._observerMapping[e].push(t)
                        }
                    }, {
                        key: "removeObserver",
                        value: function (e) {
                            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function () {};
                            if (this._observerMapping[e]) {
                                var n = this._observerMapping[e].indexOf(t);
                                this._observerMapping[e].splice(n, 1)
                            }
                        }
                    }, {
                        key: "sync",
                        value: function () {
                            var e = this,
                                t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                            if (!this._sync) return void window.wafer.ready(function () {
                                e.sync(t)
                            });
                            this._sync(t)
                        }
                    }, {
                        key: "syncWithStateUpdate",
                        value: function () {
                            var e = this,
                                t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                            if (!this._sync) return void window.wafer.ready(function () {
                                e.syncWithStateUpdate(t)
                            });
                            this._sync(t);
                            for (var n in this._observerMapping) this._observerMapping.hasOwnProperty(n) && this._observerMapping[n].forEach(function (e) {
                                e({
                                    force: !0
                                })
                            })
                        }
                    }, {
                        key: "pauseVideo",
                        value: function (e) {
                            if (!e) return void this._handleVideoPlayPause("pauseAll");
                            this._handleVideoPlayPause("pause", e)
                        }
                    }, {
                        key: "resumeVideo",
                        value: function (e) {
                            this._handleVideoPlayPause("resume", e)
                        }
                    }, {
                        key: "closeLightbox",
                        value: function () {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                t = e.scrollRestore,
                                n = void 0 === t || t,
                                r = this._waferForType("wafer-lightbox");
                            r && r._close({
                                scrollRestore: n
                            })
                        }
                    }, {
                        key: "lock",
                        value: function () {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                            this._wafers.forEach(function (t) {
                                t.lock && t.lock(e)
                            })
                        }
                    }, {
                        key: "unlock",
                        value: function () {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                            this._wafers.forEach(function (t) {
                                t.lock && t.lock(e, !1)
                            })
                        }
                    }, {
                        key: "syncUI",
                        value: function () {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                            this._wafers.forEach(function (t) {
                                t._state && t._state.mounted && t.handleResize && t.handleResize(e)
                            })
                        }
                    }, {
                        key: "syncAssets",
                        value: function () {
                            var e = this,
                                t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                n = t.js,
                                r = void 0 === n ? [] : n,
                                i = t.blob,
                                o = [],
                                a = [],
                                s = window.wafer.wafers,
                                c = [];
                            if (r.forEach(function (e) {
                                    var t = e.value;
                                    if (-1 !== t.indexOf("wf-")) {
                                        var n = t.match(Ue),
                                            r = He(n, 1),
                                            i = r[0];
                                        i = i.slice(0, -1).replace("wf-", "wafer-"), "wafer-core" === i || s[i] || o.push(e)
                                    } else a.push(e)
                                }), Array.isArray(i) && i.length) {
                                var u = document.createElement("div"),
                                    l = window.wafer.utils.convertNodeListToArray,
                                    d = this._props.head;
                                i.forEach(function (e) {
                                    Object(e) === e && (u.innerHTML += e.value || "")
                                }), c = l(u.querySelectorAll("script")), l(u.getElementsByTagName("style")).forEach(function (e) {
                                    d.appendChild(e)
                                })
                            }
                            var f = void 0;
                            f = a.length ? Promise.all(a.map(function (t) {
                                var n = t.value;
                                return "" === t.cdnOrigin && (n = location.origin + n), e._loadAsset(n, "js")
                            })).catch(function () {}) : Promise.resolve(), f.then(function () {
                                var e = window.wafer.utils.loadScriptAsync;
                                c.forEach(function (t) {
                                    var n = t.getAttribute("type") || "text/javascript",
                                        r = t.innerText;
                                    r && "text/javascript" === n && e({
                                        type: n,
                                        text: r
                                    })
                                })
                            }), o.map(function (t) {
                                var n = t.value;
                                return "" === t.cdnOrigin && (n = location.origin + n), e._loadAsset(n, "js")
                            })
                        }
                    }, {
                        key: "trigger",
                        value: function () {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                            e && e.classList.add("wf-trigger-activated"), this._wafers.forEach(function (t) {
                                t._state && t._state.mounted && t.handleTrigger && t.handleTrigger(e)
                            })
                        }
                    }, {
                        key: "prefetch",
                        value: function (e) {
                            var t = window.wafer.base.pageContext;
                            if ("1" !== t.bot || "1" === t.ynet) {
                                this._wafers.forEach(function (t) {
                                    var n = t && t.configs;
                                    if (n) {
                                        var r = n.allowPrefetch,
                                            i = n.selector;
                                        r && i && Array.prototype.slice.call(e.getElementsByClassName(i.replace(".", ""))).forEach(function (e) {
                                            return t.loadElement(e)
                                        })
                                    }
                                });
                                var n = window.wafer,
                                    r = n.features,
                                    i = n.utils,
                                    o = i.getElementsByAttrValues;
                                if (r.nativeLazyLoadingSupported) {
                                    o("loading", ["lazy"], e).lazy.forEach(function (e) {
                                        e.setAttribute("loading", "eager")
                                    })
                                }
                            }
                        }
                    }, {
                        key: "emitError",
                        value: function () {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                t = e.elem,
                                n = e.meta,
                                r = e.name,
                                i = e.stack;
                            this._emit({
                                elem: t,
                                meta: n,
                                name: r,
                                stack: i
                            })
                        }
                    }, {
                        key: "emitLog",
                        value: function () {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                t = e.elem,
                                n = e.meta,
                                r = e.name;
                            this._emit({
                                elem: t,
                                meta: n,
                                name: r
                            }, "log")
                        }
                    }, {
                        key: "emitWaferEvent",
                        value: function (e) {
                            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                                n = t.elem,
                                r = t.meta;
                            this._emit({
                                elem: n,
                                meta: r
                            }, e)
                        }
                    }, {
                        key: "destroy",
                        value: function () {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                                t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                                n = t.destroySelf,
                                r = void 0 === n || n,
                                i = window.wafer.utils,
                                o = i.unbindEvent,
                                a = document,
                                s = a.body;
                            if (e) {
                                var c = e.children;
                                if (c)
                                    for (var u = c.length; u--;) this.destroy(c[u])
                            } else o(document, window.wafer.features.visibilityMeta.visibilityChange, this._handleVisibilityChange), o(window, "resize", this._handleResizeWithThrottle), o(window, "keydown", this._handleKeyDown, {
                                passive: !1
                            }), o(window, "scroll", this._handleScrollWithThrottle), o(s, "click", this._handleDelegatedEvent, {
                                passive: !1
                            }), o(s, "change", this._handleDelegatedEvent, {
                                passive: !1
                            }), this._props.darkmodeSupportSystemDefault && o(window.matchMedia("(prefers-color-scheme: dark)"), "change", this._handleColorSchemaChange, {
                                passive: !1
                            }), i.clearAllTimeout(), this._ee.destroy();
                            r && this._wafers.forEach(function (t) {
                                t.destroy && t.destroy(e)
                            })
                        }
                    }, {
                        key: "clearOldCache",
                        value: function () {
                            var e = this,
                                t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                n = t.timeDiffToDelete,
                                r = void 0 === n ? 18e5 : n;
                            this._isOldCacheCleared || (this._isOldCacheCleared = !0, window.wafer.db && window.wafer.db.clean("fetch", {
                                timeDiffToDelete: r
                            }).catch(function (t) {
                                e._isOldCacheCleared = !1, e.emitError({
                                    meta: {},
                                    name: "clearOldCache",
                                    stack: t.stack || t.message
                                })
                            }))
                        }
                    }, {
                        key: "_waferForType",
                        value: function (e) {
                            var t = window.wafer.wafers[e];
                            return t && !0 === t.__esModule ? t.default : t
                        }
                    }, {
                        key: "_initDB",
                        value: function (e) {
                            var t = this,
                                n = document.getElementById("wafer-db-config"),
                                r = {};
                            if (n) try {
                                Object.assign(r, JSON.parse(n.textContent))
                            } catch (e) {
                                this.emitError({
                                    meta: {},
                                    name: "initDb",
                                    stack: e.stack || e.message
                                })
                            }
                            window.wafer.db = new We(Object.assign({}, r, {
                                cb: function (n) {
                                    var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                                    switch (e(), n) {
                                        case "success":
                                            t.emitLog({
                                                name: "IDB-connection-success",
                                                meta: r
                                            });
                                            break;
                                        case "error":
                                            t.emitError({
                                                name: "IDB",
                                                meta: r
                                            }), t.emitLog({
                                                name: "IDB-connection-error",
                                                meta: r
                                            })
                                    }
                                }
                            }))
                        }
                    }, {
                        key: "_initHostConfig",
                        value: function () {
                            var e = document.getElementById("wafer-config");
                            if (e) try {
                                var t = JSON.parse(e.textContent),
                                    n = t.assetsLoaded,
                                    r = void 0 === n ? {} : n,
                                    i = o(t, ["assetsLoaded"]),
                                    a = window.YAHOO || {},
                                    s = a.context,
                                    c = void 0 === s ? {} : s,
                                    u = a.subscriptions,
                                    l = void 0 === u ? {} : u,
                                    d = c || {},
                                    f = d.rid,
                                    v = l || {},
                                    h = v.adLite,
                                    m = v.crumb;
                                f && (i.rid = f), h && m && (i.adLite = h, i.subscrumb = m);
                                for (var w in r) r.hasOwnProperty(w) && this._assetLoadedMapping.set(w, !0);
                                Object.defineProperty(this, "_hostConfig", {
                                    value: i,
                                    writable: !1
                                })
                            } catch (e) {
                                this.emitError({
                                    meta: {},
                                    name: "initConfig",
                                    stack: e.stack || e.message
                                })
                            }
                        }
                    }, {
                        key: "_emit",
                        value: function (e) {
                            var t = this,
                                n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "error";
                            Fe ? this._ee && this._ee.emit(n, e) : window.wafer.ready(function () {
                                setTimeout(function () {
                                    t._ee && t._ee.emit(n, e)
                                }, 1)
                            })
                        }
                    }, {
                        key: "_bindColorSchemaChangeEvent",
                        value: function () {
                            if (!this._state.colorSchemaEventAdded && this._props.darkmodeSupportSystemDefault) {
                                var e = window.wafer.utils.bindEvent;
                                this._state.colorSchemaEventAdded = !0, e(window.matchMedia("(prefers-color-scheme: dark)"), "change", this._handleColorSchemaChange, {
                                    passive: !1
                                })
                            }
                        }
                    }, {
                        key: "_setup",
                        value: function () {
                            var e = this;
                            if (!this._ee) {
                                var t = window.wafer,
                                    n = t.features,
                                    r = t.utils,
                                    i = r.bindEvent,
                                    o = r.throttle,
                                    a = n.isSlowBrowser,
                                    s = document,
                                    c = s.body,
                                    u = this._hostConfig;
                                this._ee = new Re, this._ee.init(), u && u.nativeLazyDisable && (n.nativeLazyLoadingSupported = !1), window.wafer.on = this._ee.on.bind(this._ee), window.wafer.removeListener = this._ee.removeListener.bind(this._ee), Object.defineProperty(window.wafer, "state", {
                                    configurable: !0,
                                    set: function (t) {
                                        e.state = t
                                    }
                                }), a.then(function (t) {
                                    e.emitLog({
                                        name: "BrowserType",
                                        meta: {
                                            slow: t
                                        }
                                    })
                                }).catch(function () {}), this._handleResizeWithThrottle = o(function () {
                                    return e._handleResize.call(e)
                                }, 10, this), this._handleScrollWithThrottle = o(function () {
                                    return e._handleScroll.call(e)
                                }, 10, this), this._handleDelegatedEvent = this._handleDelegatedEvent.bind(this), this._handleKeyDown = this._handleKeyDown.bind(this), this._handleColorSchemaChange = this._handleColorSchemaChange.bind(this), this._sync = o(function (t) {
                                    e._wafers.forEach(function (e) {
                                        e.sync && e.sync(t)
                                    }), e._updateState(t)
                                }, 0, this), this._saveViewportOffsetWithThrottle = o(function () {
                                    e._saveViewportOffset()
                                }, 50, this), i(document, window.wafer.features.visibilityMeta.visibilityChange, this._handleVisibilityChange), i(window, "keydown", this._handleKeyDown, {
                                    passive: !1
                                }), i(window, "resize", this._handleResizeWithThrottle), i(window, "scroll", this._handleScrollWithThrottle), i(c, "click", this._handleDelegatedEvent, {
                                    passive: !1
                                }), i(c, "change", this._handleDelegatedEvent, {
                                    passive: !1
                                }), this._bindColorSchemaChangeEvent(), window.addEventListener("pageshow", function (t) {
                                    t.persisted ? e.emitLog({
                                        name: "pageshow",
                                        meta: {
                                            source: "bfcache"
                                        }
                                    }) : window.wafer.ready(function () {
                                        setTimeout(function () {
                                            e.clearOldCache()
                                        }, 500)
                                    })
                                }), window.addEventListener("pagehide", function (e) {
                                    !0 !== e.persisted && window.wafer.base.destroy(document.body)
                                })
                            }
                        }
                    }, {
                        key: "_saveViewportOffset",
                        value: function () {
                            this._viewport.bottom = window.innerHeight || document.documentElement.clientHeight, this._viewport.right = window.innerWidth || document.documentElement.clientWidth
                        }
                    }, {
                        key: "_updateState",
                        value: function () {
                            for (var e, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : document, n = t.querySelectorAll("script.wafer-state"), r = 0; e = n[r]; ++r) {
                                if (!e.classList) {
                                    try {
                                        this.state = JSON.parse(e.textContent)
                                    } catch (e) {}
                                    return
                                }
                                if (!e.classList.contains("state-added")) {
                                    try {
                                        this.state = JSON.parse(e.textContent)
                                    } catch (t) {
                                        e.classList.add("state-error")
                                    }
                                    e.classList.add("state-added")
                                }
                            }
                        }
                    }, {
                        key: "_handleColorSchemaChange",
                        value: function () {
                            this._wafers.forEach(function (e) {
                                e.handleColorSchemaChange && e.handleColorSchemaChange()
                            })
                        }
                    }, {
                        key: "_handleResize",
                        value: function () {
                            this._saveViewportOffsetWithThrottle(), this._ee.emit("resize", {}), this._wafers.forEach(function (e) {
                                e._state && e._state.mounted && e.handleResize && e.handleResize()
                            })
                        }
                    }, {
                        key: "_handleVisibilityChange",
                        value: function () {
                            var e = !document[window.wafer.features.visibilityMeta.hidden];
                            this._isPageVisible = e, this._ee.emit("pageVisibilityChange", {
                                isActive: e
                            }), this._wafers.forEach(function (t) {
                                t._state && t._state.mounted && t.handleVisibilityChange && t.handleVisibilityChange(e)
                            })
                        }
                    }, {
                        key: "_handleScroll",
                        value: function () {
                            var e = {
                                scrollX: window.scrollX || window.pageXOffset,
                                scrollY: window.scrollY || window.pageYOffset
                            };
                            this._ee.emit("scroll", e), this._wafers.forEach(function (t) {
                                t._state && t._state.mounted && t.handleScroll && t.handleScroll(e)
                            })
                        }
                    }, {
                        key: "_loadAsset",
                        value: function (e, t) {
                            var n = this,
                                r = this._hostConfig || {},
                                i = r.assetsLoadedHost,
                                o = void 0 === i ? "s.yimg.com" : i,
                                a = r.assetsLoadedProtocol,
                                s = void 0 === a ? "https://" : a;
                            return new Promise(function (r) {
                                if (n._assetLoadedMapping.get(e)) return r();
                                n._assetLoadedMapping.set(e, !0);
                                var i = 0 === e.indexOf("/"),
                                    a = i ? "" + s + o + e : e;
                                if ("css" === t) return void window.wafer.utils.loadCSSSync({
                                    checkPageForLink: !0,
                                    src: a
                                }, function () {
                                    r()
                                });
                                window.wafer.utils.loadScriptAsync({
                                    checkPageForScript: !0,
                                    src: a
                                }, function () {
                                    r()
                                })
                            })
                        }
                    }, {
                        key: "_getElementComposedMap",
                        value: function (e) {
                            for (var t = e, n = new Map; t;) n.set(t, !0), t = t.parentElement;
                            return n
                        }
                    }, {
                        key: "_handleDelegatedEvent",
                        value: function (e) {
                            var t = this,
                                n = e.target;
                            e.waferComposedMap = function () {
                                var e = void 0;
                                return function () {
                                    return e || (e = t._getElementComposedMap(n)), {
                                        get: function (t) {
                                            return !e.get(document.body) || e.get(t)
                                        }
                                    }
                                }
                            }();
                            var r = n;
                            for (this._wafers.forEach(function (t) {
                                    t._state && t._state.mounted && (t.handleEvent("clickOutside", r, e), r.classList.contains(t._options.selector.replace(".", "")) && t.handleEvent(e.type, r, e))
                                }), r = r.parentElement; r;) this._wafers.forEach(function (t) {
                                t._state && t._state.mounted && r.classList.contains(t._options.selector.replace(".", "")) && t.handleEvent(e.type, r, e)
                            }), r = r.parentElement
                        }
                    }, {
                        key: "_handleKeyDown",
                        value: function (e) {
                            var t = e.keyCode;
                            if (this._wafers.forEach(function (t) {
                                    t._state && t._state.mounted && t.handleKeyboardDown && t.handleKeyboardDown(e)
                                }), 13 === t) {
                                var n = e.target,
                                    r = n;
                                for ("button" === n.nodeName.toLowerCase() && (e.preventDefault(), n.click()); r.parentNode;) {
                                    if (r.classList) {
                                        var i = r.classList.contains("has-wafer-click");
                                        if ("a" === r.nodeName.toLowerCase() && !i && r.getAttribute("href")) return;
                                        i && (e.preventDefault(), r.click())
                                    }
                                    r = r.parentNode
                                }
                            }
                        }
                    }, {
                        key: "_handleVideoPlayPause",
                        value: function (e, t) {
                            var n = window.wafer.wafers["wafer-video"];
                            n && (!0 === n.__esModule ? n.default[e].call(n.default, t) : n[e].call(n, t))
                        }
                    }, {
                        key: "viewport",
                        get: function () {
                            return this._viewport
                        }
                    }, {
                        key: "state",
                        get: function () {
                            return this._state
                        },
                        set: function () {
                            var e = this,
                                t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                            for (var n in t) ! function (n) {
                                if (t.hasOwnProperty(n)) {
                                    var r = e._state[n];
                                    if (void 0 === r) {
                                        var i = e._observerMapping || {};
                                        Object.defineProperty(e._state, n, {
                                            configurable: !0,
                                            get: function () {
                                                return r
                                            },
                                            set: function (e) {
                                                var t = i[n] || [];
                                                r = e, setTimeout(function () {
                                                    for (var e = t.length - 1; e >= 0; e--) t[e]()
                                                }, 0)
                                            }
                                        })
                                    }
                                    Object(t[n]) === t[n] ? e._state[n] = Be({}, e._state[n], t[n]) : e._state[n] = t[n]
                                }
                            }(n)
                        }
                    }, {
                        key: "isPageVisible",
                        get: function () {
                            return this._isPageVisible
                        }
                    }, {
                        key: "isIORetrySupported",
                        get: function () {
                            var e = this._hostConfig || {},
                                t = e.retryIODisable;
                            return !(void 0 !== t && t)
                        }
                    }, {
                        key: "fetchHeaders",
                        get: function () {
                            var e = this._hostConfig || {},
                                t = e.fetchHeaders;
                            return void 0 === t ? {} : t
                        }
                    }, {
                        key: "lang",
                        get: function () {
                            return (this._hostConfig || {}).lang
                        }
                    }, {
                        key: "rid",
                        get: function () {
                            return (this._hostConfig || {}).rid
                        }
                    }, {
                        key: "adLiteConfig",
                        get: function () {
                            var e = this._hostConfig || {};
                            return {
                                adLite: e.adLite,
                                subscrumb: e.subscrumb
                            }
                        }
                    }, {
                        key: "liveAriaRegion",
                        get: function () {
                            if (this._state) {
                                var e = this._state.liveRegionElem;
                                if (this._state.liveRegionElem = e || document.querySelector('[aria-live="polite"]'), !this._state.liveRegionElem) {
                                    var t = this._state.liveRegionElem = document.createElement("div");
                                    t.classList.add("Hidden"), t.setAttribute("aria-atomic", "true"), t.setAttribute("aria-live", "polite"), t.setAttribute("role", "alert"), document.body.appendChild(t)
                                }
                                return this._state.liveRegionElem
                            }
                        }
                    }, {
                        key: "colorSchema",
                        get: function () {
                            return this._props && !this._props.darkmodeSupportSystemDefault ? this._colorSchemaOverrideTheme : window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
                        },
                        set: function (e) {
                            var t = "auto" === e;
                            this._colorSchemaOverrideTheme = t ? void 0 : e, this._props.darkmodeSupportSystemDefault = !this._colorSchemaOverrideTheme, t && this._bindColorSchemaChangeEvent(), this._handleColorSchemaChange()
                        }
                    }, {
                        key: "pageContext",
                        get: function () {
                            var e = window,
                                t = e.vzm,
                                n = e.YAHOO;
                            return n && n.context || t && t.getPageContext && t.getPageContext() || {}
                        }
                    }, {
                        key: "isBot",
                        get: function () {
                            var e = window.wafer.base.pageContext,
                                t = e.bot,
                                n = e.ynet;
                            return "1" === t && "1" !== n
                        }
                    }, {
                        key: "_wafers",
                        get: function () {
                            return (window.wafer.wafers && Object.keys(window.wafer.wafers) || []).reduce(function (e, t) {
                                return !0 === window.wafer.wafers[t].__esModule ? (e.push(window.wafer.wafers[t].default), e) : (e.push(window.wafer.wafers[t]), e)
                            }, [])
                        }
                    }]), e
                }(),
                Xe = Ye,
                Je = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                    return typeof e
                } : function (e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                },
                qe = function () {
                    function e(e, t) {
                        var n = [],
                            r = !0,
                            i = !1,
                            o = void 0;
                        try {
                            for (var a, s = e[Symbol.iterator](); !(r = (a = s.next()).done) && (n.push(a.value), !t || n.length !== t); r = !0);
                        } catch (e) {
                            i = !0, o = e
                        } finally {
                            try {
                                !r && s.return && s.return()
                            } finally {
                                if (i) throw o
                            }
                        }
                        return n
                    }
                    return function (t, n) {
                        if (Array.isArray(t)) return t;
                        if (Symbol.iterator in Object(t)) return e(t, n);
                        throw new TypeError("Invalid attempt to destructure non-iterable instance")
                    }
                }(),
                $e = function () {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var r = t[n];
                            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                        }
                    }
                    return function (t, n, r) {
                        return n && e(t.prototype, n), r && e(t, r), t
                    }
                }(),
                Ge = /\[([\w\.-]+)]/g,
                Qe = /\[([\w\.-]+)]/g,
                Ze = "wf-state-undefined",
                et = "wf-state-reset",
                tt = function (e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        n = t.get;
                    return e.replace(Ge, function (e) {
                        e = e.slice(1, -1);
                        var t = e.split("."),
                            r = t.slice(1, t.length),
                            i = n(window.wafer.base.state, r);
                        return i || !1 !== i && Ze
                    })
                },
                nt = new Map([
                    ["focusin", {
                        passive: !1
                    }],
                    ["focusout", {
                        passive: !1
                    }],
                    ["keydown", {
                        passive: !1
                    }],
                    ["keyup", {
                        passive: !1
                    }],
                    ["focusin", {
                        passive: !1
                    }],
                    ["mousedown", {
                        passive: !1
                    }],
                    ["mouseup", {
                        passive: !0
                    }],
                    ["mouseleave", {
                        passive: !1
                    }],
                    ["mouseover", {
                        passive: !1
                    }],
                    ["mousemove", {
                        passive: !0
                    }],
                    ["mouseenter", {
                        passive: !0
                    }],
                    ["touchstart", {
                        passive: !0
                    }],
                    ["touchend", {
                        passive: !0
                    }],
                    ["touchmove", {
                        passive: !1
                    }],
                    ["drag", {
                        passive: !1
                    }],
                    ["dragenter", {
                        passive: !1
                    }],
                    ["dragleave", {
                        passive: !1
                    }],
                    ["dragover", {
                        passive: !1
                    }],
                    ["dragstart", {
                        passive: !1
                    }],
                    ["dragend", {
                        passive: !1
                    }],
                    ["drop", {
                        passive: !1
                    }]
                ]),
                rt = function () {
                    function e(t) {
                        var n = this,
                            r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            i = r.selector,
                            o = arguments[2],
                            a = o.STATE_ATTRS,
                            s = o.DEFAULT_STATE_KEY_TO_UPDATE,
                            c = void 0 === s ? "" : s;
                        l(this, e), this._util = {
                            elem: t,
                            selector: i
                        };
                        var d = window.wafer,
                            f = d.constants,
                            v = d.utils,
                            h = f.ATTR_PREFIX,
                            m = void 0 === h ? "data-wf-" : h,
                            w = window.wafer.base,
                            y = this.stateDidUpdate && this.stateDidUpdate.bind(this),
                            p = (t.getAttribute(m + "on") || "").split(":"),
                            g = qe(p, 3),
                            b = g[0],
                            _ = void 0 === b ? "complete" : b,
                            E = g[1],
                            T = void 0 === E ? "setState" : E,
                            k = g[2],
                            C = void 0 === k ? c : k;
                        _ = _ || "complete", C && "complete" === _ && ("setState" === T ? this._util.shouldUpdateState = !0 : "toggleState" === T && (this._util.shouldToggleState = !0), this._util.stateKeysToUpdate = C.split(".")), y && a.forEach(function (e) {
                            var r = t.getAttribute(m + "[" + e + "]") || t.getAttribute(m + "state-" + e),
                                i = t.getAttribute("" + m + e);
                            if (r)
                                for (var o = void 0; null !== (o = Qe.exec(r));) {
                                    var a = o[1],
                                        s = a.split("."),
                                        c = u(s),
                                        l = c[0],
                                        d = c.slice(1);
                                    "state" === l && function () {
                                        var t = n,
                                            o = qe(d, 1),
                                            a = o[0],
                                            s = tt(r, v);
                                        i || -1 !== s.indexOf(Ze) || (n._util[e] = s);
                                        var c = function n() {
                                            var i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                                o = i.force,
                                                s = void 0 !== o && o;
                                            if (t._destroyed) return void w.removeObserver.call(w, a, n);
                                            var c = t._util[e];
                                            t._util[e] = tt(r, v), -1 !== t._util[e].indexOf(Ze) || !s && c === t._util[e] ? t._util[e] = c : -1 === t._util[e].indexOf(et) && y({
                                                stateAttr: e
                                            })
                                        };
                                        setTimeout(function () {
                                            c()
                                        }, 0), w.addObserver(a, c)
                                    }()
                                }
                        })
                    }
                    return $e(e, [{
                        key: "isReady",
                        value: function () {
                            return !(!this._util || this._destroyed)
                        }
                    }, {
                        key: "addEventListeners",
                        value: function () {
                            this._addEventListenerToEvents(window.wafer.utils.bindEvent, "bindEvent")
                        }
                    }, {
                        key: "removeEventListeners",
                        value: function () {
                            this._addEventListenerToEvents(window.wafer.utils.unbindEvent, "unbindEvent")
                        }
                    }, {
                        key: "_addEventListenerToEvents",
                        value: function (e, t) {
                            var n = this,
                                r = this._util.elem,
                                i = this.constructor.events,
                                o = "bindEvent" === t;
                            if (i) {
                                for (var a in i) {
                                    (function (t) {
                                        if (i.hasOwnProperty(t)) {
                                            var a = function () {
                                                if (!nt.has(t)) return {
                                                    v: "continue"
                                                };
                                                var a = i[t],
                                                    s = nt.get(t),
                                                    u = !0,
                                                    l = !1,
                                                    d = void 0;
                                                try {
                                                    for (var f, v = a[Symbol.iterator](); !(u = (f = v.next()).done); u = !0) {
                                                        var h = f.value,
                                                            m = qe(h, 2),
                                                            w = m[0],
                                                            y = m[1];
                                                        ! function (i, a) {
                                                            var u = void 0;
                                                            (u = "_self" === i ? r : [].concat(c(r.getElementsByClassName(i)))) && n[a] && (o && (n[a] = n[a].bind(n)), Array.isArray(u) ? u.forEach(function (r) {
                                                                e.call(n, r, t, n[a], s)
                                                            }) : e.call(n, u, t, n[a], s))
                                                        }(w, y)
                                                    }
                                                } catch (e) {
                                                    l = !0, d = e
                                                } finally {
                                                    try {
                                                        !u && v.return && v.return()
                                                    } finally {
                                                        if (l) throw d
                                                    }
                                                }
                                            }();
                                            if ("object" === (void 0 === a ? "undefined" : Je(a))) a.v
                                        }
                                    })(a)
                                }
                            }
                        }
                    }, {
                        key: "didComplete",
                        value: function (e, t) {
                            var n = this._util,
                                r = n.shouldToggleState,
                                i = n.shouldUpdateState,
                                o = n.stateKeysToUpdate;
                            if (i) {
                                var a = {};
                                o.reduce(function (e, n, r) {
                                    return e[n] = e[n] || {}, r === o.length - 1 && (e[n] = t), e[n]
                                }, a), window.wafer.base.state = a
                            } else if (r) {
                                var c = u(o),
                                    l = c[0],
                                    d = c.slice(1),
                                    f = d.length;
                                if (f) {
                                    var v = window.wafer.base.state[l] || {};
                                    d.reduce(function (e, t, n) {
                                        return e[t] = n === f - 1 ? !e[t] : e[t] || {}, e[t]
                                    }, v), window.wafer.state = s({}, l, v)
                                } else window.wafer.state = s({}, l, !window.wafer.base.state[l])
                            }
                        }
                    }, {
                        key: "destroy",
                        value: function () {
                            var e = this._util,
                                t = e.elem,
                                n = e.selector;
                            window.wafer.utils.clearTimeoutForInstance(this), t && (n && t.classList.remove(n.replace(".", "")), t.classList.add("wafer-destroyed")), this._util = {}, this._state = {}, this._destroyed = !0
                        }
                    }, {
                        key: "lock",
                        set: function (e) {
                            this._state = this._state || {}, this._state.locked = e, e ? this.didLock && this.didLock() : this.didUnLock && this.didUnLock()
                        }
                    }]), e
                }(),
                it = rt,
                ot = function () {
                    function e(e, t) {
                        var n = [],
                            r = !0,
                            i = !1,
                            o = void 0;
                        try {
                            for (var a, s = e[Symbol.iterator](); !(r = (a = s.next()).done) && (n.push(a.value), !t || n.length !== t); r = !0);
                        } catch (e) {
                            i = !0, o = e
                        } finally {
                            try {
                                !r && s.return && s.return()
                            } finally {
                                if (i) throw o
                            }
                        }
                        return n
                    }
                    return function (t, n) {
                        if (Array.isArray(t)) return t;
                        if (Symbol.iterator in Object(t)) return e(t, n);
                        throw new TypeError("Invalid attempt to destructure non-iterable instance")
                    }
                }(),
                at = Object.assign || function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                },
                st = function () {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var r = t[n];
                            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                        }
                    }
                    return function (t, n, r) {
                        return n && e(t.prototype, n), r && e(t, r), t
                    }
                }(),
                ct = function () {
                    function e() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            n = t.root,
                            r = t.selector,
                            i = t.props,
                            o = void 0 === i ? {} : i,
                            a = t.WaferClass;
                        d(this, e), this._state = {
                            elementInstances: new Map,
                            mounted: !1
                        }, this._options = {
                            props: o,
                            root: n,
                            selector: r,
                            WaferClass: a
                        }, a && a.events && Object.keys(a.events).forEach(function (e) {
                            a.events[e] = new Map(a.events[e])
                        })
                    }
                    return st(e, [{
                        key: "handleResize",
                        value: function () {
                            var e = this._state.elementInstances,
                                t = !0,
                                n = !1,
                                r = void 0;
                            try {
                                for (var i, o = e.values()[Symbol.iterator](); !(t = (i = o.next()).done); t = !0) {
                                    var a = i.value,
                                        s = a.instance,
                                        c = s.handleResize;
                                    !0 !== (s._state || {}).locked && c && c.call(s)
                                }
                            } catch (e) {
                                n = !0, r = e
                            } finally {
                                try {
                                    !t && o.return && o.return()
                                } finally {
                                    if (n) throw r
                                }
                            }
                        }
                    }, {
                        key: "handleEvent",
                        value: function (e, t, n) {
                            var r = this._options.WaferClass,
                                i = this._state.elementInstances;
                            if ("clickOutside" !== e) {
                                if (r && r.events) {
                                    var o = i.get(t);
                                    o && this._handleEvent(e, n, o)
                                }
                            } else {
                                var a = !0,
                                    s = !1,
                                    c = void 0;
                                try {
                                    for (var u, l = i.values()[Symbol.iterator](); !(a = (u = l.next()).done); a = !0) {
                                        var d = u.value,
                                            f = d.instance;
                                        if (f) {
                                            var v = f.handleClickOutside;
                                            v && v.call(f, n)
                                        }
                                    }
                                } catch (e) {
                                    s = !0, c = e
                                } finally {
                                    try {
                                        !a && l.return && l.return()
                                    } finally {
                                        if (s) throw c
                                    }
                                }
                            }
                        }
                    }, {
                        key: "handleKeyboardDown",
                        value: function (e) {
                            var t = this._state.elementInstances,
                                n = !0,
                                r = !1,
                                i = void 0;
                            try {
                                for (var o, a = t.values()[Symbol.iterator](); !(n = (o = a.next()).done); n = !0) {
                                    var s = o.value,
                                        c = s.instance;
                                    if (c) {
                                        var u = c.handleKeyboardDown;
                                        !0 !== (c._state || {}).locked && u && u.call(c, e)
                                    }
                                }
                            } catch (e) {
                                r = !0, i = e
                            } finally {
                                try {
                                    !n && a.return && a.return()
                                } finally {
                                    if (r) throw i
                                }
                            }
                        }
                    }, {
                        key: "lock",
                        value: function (e) {
                            var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                                n = this._state.elementInstances,
                                r = this._options,
                                i = r.root,
                                o = r.selector,
                                a = r.successClass,
                                s = [];
                            o && (s = Array.prototype.slice.call((e || i).getElementsByClassName(o.replace(".", ""))).filter(function (e) {
                                return !e.classList.contains(a)
                            })), s.length && s.forEach(function (e) {
                                if (n.has(e)) {
                                    var r = n.get(e),
                                        i = r.instance;
                                    i ? i.lock = t : e.setAttribute("data-wf-lock", t ? "1" : "0")
                                }
                            })
                        }
                    }, {
                        key: "sync",
                        value: function (e) {
                            var t = this,
                                n = this._state.elementInstances,
                                r = this._options,
                                i = r.props,
                                o = r.root,
                                a = r.selector,
                                s = r.successClass,
                                c = r.WaferClass,
                                u = [];
                            a && (u = Array.prototype.slice.call((e || o).getElementsByClassName(a.replace(".", ""))).filter(function (e) {
                                return !e.classList.contains(s)
                            }));
                            var l = u.length;
                            if (l) {
                                var d = this.willSync;
                                d && d.call(this, e), u.forEach(function (e) {
                                    if (!n.has(e)) {
                                        var r = void 0;
                                        if (c) {
                                            r = new c(e, at({}, i, {
                                                selector: a
                                            }));
                                            var o = r.destroy,
                                                s = t;
                                            r.destroy = function () {
                                                (s._state || {}).activeElem === e && (s._state.activeElem = null), n.delete(e);
                                                for (var t = arguments.length, i = Array(t), a = 0; a < t; a++) i[a] = arguments[a];
                                                o.apply(r, i)
                                            }
                                        }
                                        n.set(e, {
                                            instance: r
                                        })
                                    }
                                })
                            }
                            if (this.validate(), l) {
                                var f = this.didSync;
                                f && f.call(this, e)
                            }
                        }
                    }, {
                        key: "handleTrigger",
                        value: function (e) {
                            var t = this._options,
                                n = t.selector,
                                r = t.successClass;
                            if (e.classList.contains(n.replace(".", "")) && !e.classList.contains(r)) {
                                var i = this.willTrigger,
                                    o = this.trigger,
                                    a = this.didTrigger;
                                i && i.call(this, e), o && this.trigger(e), a && a.call(this, e)
                            }
                        }
                    }, {
                        key: "validate",
                        value: function () {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                t = e.source,
                                n = e.scrollDirection,
                                r = this._state.elementInstances;
                            if (0 === r.size) return void this.destroy();
                            var i = [],
                                o = !0,
                                a = !1,
                                s = void 0;
                            try {
                                for (var c, u = r.entries()[Symbol.iterator](); !(o = (c = u.next()).done); o = !0) {
                                    var l = c.value,
                                        d = ot(l, 2),
                                        f = d[0],
                                        v = d[1],
                                        h = v.instance;
                                    if (h) {
                                        !0 !== (h._state || {}).locked && i.push(f)
                                    } else i.push(f)
                                }
                            } catch (e) {
                                a = !0, s = e
                            } finally {
                                try {
                                    !o && u.return && u.return()
                                } finally {
                                    if (a) throw s
                                }
                            }
                            if (i.length) {
                                var m = this.willValidate;
                                m && m.call(this, i, {
                                    source: t,
                                    scrollDirection: n
                                })
                            }
                            this._state.mounted = !0
                        }
                    }, {
                        key: "destroy",
                        value: function (e) {
                            var t = this.willDestroy,
                                n = this.didDestroy;
                            if (e) {
                                var r = this._state.elementInstances;
                                if (r.has(e)) {
                                    t && t.call(this, e);
                                    var i = r.get(e),
                                        o = i.instance;
                                    o && o.destroy(), r.delete(e), n && n.call(this, e)
                                }
                            } else t && t.call(this), this._destroyAll(), n && n.call(this)
                        }
                    }, {
                        key: "_destroyAll",
                        value: function () {
                            var e = this._state,
                                t = !0,
                                n = !1,
                                r = void 0;
                            try {
                                for (var i, o = e.elementInstances.values()[Symbol.iterator](); !(t = (i = o.next()).done); t = !0) {
                                    var a = i.value,
                                        s = a.instance;
                                    s && s.destroy()
                                }
                            } catch (e) {
                                n = !0, r = e
                            } finally {
                                try {
                                    !t && o.return && o.return()
                                } finally {
                                    if (n) throw r
                                }
                            }
                            e.elementInstances.clear(), e.mounted = !1
                        }
                    }, {
                        key: "_handleEvent",
                        value: function (e, t, n) {
                            var r = this._options.WaferClass,
                                i = r.events[e];
                            if (i)
                                for (var o = t.target; o;)
                                    if (o.className) {
                                        var a = void 0,
                                            s = !0,
                                            c = !1,
                                            u = void 0;
                                        try {
                                            for (var l, d = i.entries()[Symbol.iterator](); !(s = (l = d.next()).done); s = !0) {
                                                var f = l.value,
                                                    v = ot(f, 2),
                                                    h = v[0],
                                                    m = v[1];
                                                if (o.classList.contains(h)) {
                                                    var w = n.instance,
                                                        y = w && w[m];
                                                    t.eventTarget = o, y && y.call(w, t), a = !0;
                                                    break
                                                }
                                            }
                                        } catch (e) {
                                            c = !0, u = e
                                        } finally {
                                            try {
                                                !s && d.return && d.return()
                                            } finally {
                                                if (c) throw u
                                            }
                                        }
                                        o = a ? null : o.parentElement
                                    } else o = o.parentElement
                        }
                    }]), e
                }(),
                ut = ct,
                lt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                    return typeof e
                } : function (e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                },
                dt = function () {
                    function e(e, t) {
                        var n = [],
                            r = !0,
                            i = !1,
                            o = void 0;
                        try {
                            for (var a, s = e[Symbol.iterator](); !(r = (a = s.next()).done) && (n.push(a.value), !t || n.length !== t); r = !0);
                        } catch (e) {
                            i = !0, o = e
                        } finally {
                            try {
                                !r && s.return && s.return()
                            } finally {
                                if (i) throw o
                            }
                        }
                        return n
                    }
                    return function (t, n) {
                        if (Array.isArray(t)) return t;
                        if (Symbol.iterator in Object(t)) return e(t, n);
                        throw new TypeError("Invalid attempt to destructure non-iterable instance")
                    }
                }(),
                ft = Object.assign || function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                },
                vt = function () {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var r = t[n];
                            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                        }
                    }
                    return function (t, n, r) {
                        return n && e(t.prototype, n), r && e(t, r), t
                    }
                }(),
                ht = function (e, t) {
                    e.getAttribute("data-wf-has-darkmode") && (e.parentNode ? t.set(e, !0) : t.delete(e))
                },
                mt = function (e) {
                    function t() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            n = e.containerClass,
                            r = void 0 === n ? null : n,
                            i = e.darkSrc,
                            o = void 0 === i ? "data-wf-darkmode-src" : i,
                            a = e.error,
                            s = void 0 !== a && a,
                            c = e.errorClass,
                            u = void 0 === c ? "wafer-error" : c,
                            l = e.root,
                            d = void 0 === l ? document : l,
                            h = e.selector,
                            m = e.src,
                            w = void 0 === m ? "data-wf-src" : m,
                            y = e.success,
                            p = void 0 !== y && y,
                            g = e.successClass,
                            b = void 0 === g ? "wafer-lazy-loaded" : g,
                            _ = e.validateDelay,
                            E = void 0 === _ ? 25 : _,
                            T = e.WaferClass;
                        f(this, t);
                        var k = v(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, {
                                root: d,
                                selector: h
                            })),
                            C = window.wafer.utils.throttle;
                        return k._options = ft({}, k._options, {
                            container: !!r && d.getElementsByClassName(r),
                            containerClass: r,
                            darkSrc: o,
                            error: s,
                            errorClass: u,
                            isRetina: window.devicePixelRatio > 1,
                            src: w,
                            success: p,
                            successClass: b,
                            WaferClass: T
                        }), k._state = ft({}, k._state, {
                            darkmodeInstances: new Map
                        }), k._validateWithThrottle = C(function () {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                t = e.source;
                            k.validate({
                                source: t
                            })
                        }, E, k), k
                    }
                    return h(t, e), vt(t, [{
                        key: "handleScroll",
                        value: function () {
                            this._validateWithThrottle({
                                source: "scroll"
                            })
                        }
                    }, {
                        key: "handleResize",
                        value: function () {
                            this._validateWithThrottle()
                        }
                    }, {
                        key: "willDestroy",
                        value: function () {
                            var e = this,
                                t = this._options.container;
                            if (t) {
                                var n = window.wafer.utils,
                                    r = n.each,
                                    i = n.unbindEvent;
                                r(t, function (t) {
                                    i(t, "scroll", e._validateWithThrottle)
                                })
                            }
                        }
                    }, {
                        key: "didSync",
                        value: function () {
                            var e = this,
                                t = this._state,
                                n = t.elementInstances,
                                r = t.mounted;
                            if (0 !== n.size) {
                                var i = this._options,
                                    o = i.container,
                                    a = i.defaultOffsetY,
                                    s = void 0 === a ? 100 : a,
                                    c = i.defaultOffsetX,
                                    u = void 0 === c ? 0 : c,
                                    l = !0,
                                    d = !1,
                                    f = void 0;
                                try {
                                    for (var v, h = n.entries()[Symbol.iterator](); !(l = (v = h.next()).done); l = !0) {
                                        var m = v.value,
                                            w = dt(m, 2),
                                            y = w[0],
                                            p = w[1];
                                        p = void 0 === p ? {} : p;
                                        var g = p.offsetX,
                                            b = p.offsetY;
                                        if (void 0 === g || void 0 === b) {
                                            var _ = n.get(y),
                                                E = (y.getAttribute("data-wf-margin") || "").split(" "),
                                                T = dt(E, 2),
                                                k = T[0],
                                                C = T[1];
                                            _.offsetY = Number(k) || s, _.offsetX = Number(C) || u
                                        }
                                    }
                                } catch (e) {
                                    d = !0, f = e
                                } finally {
                                    try {
                                        !l && h.return && h.return()
                                    } finally {
                                        if (d) throw f
                                    }
                                }
                                if (!r && (this._state.mounted = !0, o)) {
                                    var S = window.wafer.utils,
                                        O = S.bindEvent;
                                    (0, S.each)(o, function (t) {
                                        O(t, "scroll", e._validateWithThrottle)
                                    })
                                }
                            }
                        }
                    }, {
                        key: "willValidate",
                        value: function (e) {
                            var t = this,
                                n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                                r = n.source,
                                i = this._state,
                                o = i.elementInstances,
                                a = i.darkmodeInstances,
                                s = window.wafer,
                                c = s.base,
                                u = s.features,
                                l = s.utils,
                                d = l.elementInView,
                                f = this._options,
                                v = u.nativeLazyLoadingSupported,
                                h = !0,
                                m = !1,
                                w = void 0;
                            try {
                                for (var y, p = o.entries()[Symbol.iterator](); !(h = (y = p.next()).done); h = !0) {
                                    var g = y.value,
                                        b = dt(g, 2),
                                        _ = b[0],
                                        E = b[1];
                                    E = void 0 === E ? {} : E;
                                    var T = E.offsetX,
                                        k = E.offsetY,
                                        C = function (e, n, i) {
                                            if (parseInt(e.getAttribute("data-wf-lock"), 10)) return "continue";
                                            var s = e.getAttribute("data-wf-trigger") || "viewport",
                                                u = e.tagName.toLowerCase();
                                            if ("onLoad" === s || "scroll" === r && "onScroll" === s) t._load(e).then(function () {
                                                o.delete(e), ht(e, a)
                                            }).catch(function () {});
                                            else if (v && ("img" === u || "picture" === u) && t.nativeLazyLoadElement) t.nativeLazyLoadElement(e), o.delete(e), ht(e, a);
                                            else if ("viewport" === s && (d(e, ft({}, f, {
                                                    offsetX: n,
                                                    offsetY: i
                                                }), c.viewport) || e.classList.contains(f.successClass))) {
                                                if (e.classList.contains("wafer-lazy-in-progress")) return {
                                                    v: void 0
                                                };
                                                e.classList.add("wafer-lazy-in-progress"), t._load(e).then(function () {
                                                    o.delete(e), ht(e, a), e.classList.remove("wafer-lazy-in-progress")
                                                }).catch(function () {
                                                    e.classList.remove("wafer-lazy-in-progress")
                                                })
                                            }
                                        }(_, T, k);
                                    switch (C) {
                                        case "continue":
                                            continue;
                                        default:
                                            if ("object" === (void 0 === C ? "undefined" : lt(C))) return C.v
                                    }
                                }
                            } catch (e) {
                                m = !0, w = e
                            } finally {
                                try {
                                    !h && p.return && p.return()
                                } finally {
                                    if (m) throw w
                                }
                            }
                        }
                    }, {
                        key: "_shouldLoadElement",
                        value: function (e) {
                            var t = this._options.successClass;
                            return !e.classList.contains(t)
                        }
                    }, {
                        key: "_loadElement",
                        value: function (e) {
                            var t = this;
                            return new Promise(function (n, r) {
                                var i = t._state.elementInstances,
                                    o = i.get(e),
                                    a = parseInt(e.getAttribute("data-wf-timeout"), 10) || 0;
                                !0 !== o.pending ? (a ? setTimeout(function () {
                                    t.loadElement(e).then(function () {
                                        n()
                                    }).catch(function (e) {
                                        o.pending = !1, r(e)
                                    })
                                }, a) : t.loadElement(e).then(function () {
                                    n()
                                }).catch(function (e) {
                                    o.pending = !1, r(e)
                                }), o.pending = !0) : r(new Error("execution is pending"))
                            })
                        }
                    }, {
                        key: "_load",
                        value: function (e) {
                            return this._loadElement(e)
                        }
                    }, {
                        key: "_itemLoaded",
                        value: function (e) {
                            var t = this._options,
                                n = t.selector,
                                r = t.success,
                                i = t.successClass;
                            e.classList.remove(n.replace(".", "")), e.classList.add(i), r && r(e)
                        }
                    }]), t
                }(ut),
                wt = mt,
                yt = function () {
                    var e = [],
                        t = {};
                    return {
                        add: function (n, r, i) {
                            if ("function" == typeof n && (i = r, r = n, n = void 0), "function" == typeof r) {
                                if (n) {
                                    if (t[n]) return;
                                    t[n] = !0
                                }
                                if (window.wafer.on) return void r.call(i);
                                e.push({
                                    scope: i,
                                    fn: r
                                })
                            }
                        },
                        executeAll: function () {
                            e.forEach(function () {
                                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                    t = e.fn,
                                    n = e.scope;
                                t.call(n)
                            }), e = []
                        }
                    }
                }();
            n.d(t, "base", function () {
                return bt
            }), n.d(t, "controllers", function () {
                return _t
            }), n.d(t, "ready", function () {
                return gt
            }), n.d(t, "constants", function () {
                return je
            }), n.d(t, "features", function () {
                return m
            }), n.d(t, "utils", function () {
                return w
            }), n.d(t, "WaferBaseClass", function () {
                return it
            });
            var pt = yt.executeAll,
                gt = yt.add,
                bt = new Xe;
            bt.__executeAllRegisteredReadyFns = function () {
                try {
                    var e = new Event("wafer:ready");
                    document.body.dispatchEvent(e)
                } catch (e) {}
                pt()
            }, bt.supportStateReset = !0;
            var _t = {
                WaferBaseController: ut,
                WaferLazyController: wt
            }
        }
    })
});