"use strict";

function _toConsumableArray(e) {
    return _arrayWithoutHoles(e) || _iterableToArray(e) || _unsupportedIterableToArray(e) || _nonIterableSpread()
}

function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
}

function _unsupportedIterableToArray(e, t) {
    if (e) {
        if ("string" == typeof e) return _arrayLikeToArray(e, t);
        var n = Object.prototype.toString.call(e).slice(8, -1);
        return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? _arrayLikeToArray(e, t) : void 0
    }
}

function _iterableToArray(e) {
    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
}

function _arrayWithoutHoles(e) {
    if (Array.isArray(e)) return _arrayLikeToArray(e)
}

function _arrayLikeToArray(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
    return r
}

var btf = {
    debounce: function (r, o, i) {
        var a;
        return function () {
            var e = this, t = arguments, n = i && !a;
            clearTimeout(a), a = setTimeout(function () {
                a = null, i || r.apply(e, t)
            }, o), n && r.apply(e, t)
        }
    }, throttle: function (n, r, o) {
        var i, a, s, u = 0;
        o = o || {};

        function l() {
            u = !1 === o.leading ? 0 : (new Date).getTime(), i = null, n.apply(a, s), i || (a = s = null)
        }

        return function () {
            var e = (new Date).getTime();
            u || !1 !== o.leading || (u = e);
            var t = r - (e - u);
            a = this, s = arguments, t <= 0 || r < t ? (i && (clearTimeout(i), i = null), u = e, n.apply(a, s), i || (a = s = null)) : i || !1 === o.trailing || (i = setTimeout(l, t))
        }
    }, sidebarPaddingR: function () {
        var e = window.innerWidth, t = document.body.clientWidth, n = e - t;
        e !== t && (document.body.style.paddingRight = n + "px")
    }, snackbarShow: function (e, t, n) {
        var r = void 0 !== t && t, o = void 0 !== n ? n : 5e3, i = GLOBAL_CONFIG.Snackbar.position,
            a = "light" === document.documentElement.getAttribute("data-theme") ? GLOBAL_CONFIG.Snackbar.bgLight : GLOBAL_CONFIG.Snackbar.bgDark;
        document.styleSheets[0].addRule(":root", "--heo-snackbar-time:" + o + "ms!important"), Snackbar.show({
            text: e,
            backgroundColor: a,
            showAction: r,
            duration: o,
            pos: i
        })
    }, initJustifiedGallery: function (e) {
        e instanceof jQuery || (e = $(e)), e.each(function (e, t) {
            $(this).is(":visible") && $(this).justifiedGallery({rowHeight: 220, margins: 4})
        })
    }, diffDate: function (e, t) {
        var n, r, o, i = 1 < arguments.length && void 0 !== t && t, a = new Date, s = new Date(e),
            u = a.getTime() - s.getTime();
        return i ? (n = u / 864e5, r = u / 36e5, o = u / 6e4, 12 < u / 2592e6 ? s.toLocaleDateString() : 7 <= n ? s.toLocaleDateString().substr(5) : 1 <= n ? parseInt(n) + "" + GLOBAL_CONFIG.date_suffix.day : 1 <= r || 1 <= o ? "最近" : GLOBAL_CONFIG.date_suffix.just) : parseInt(u / 864e5)
    }, loadComment: function (e, t) {
        var n;
        "IntersectionObserver" in window ? (n = new IntersectionObserver(function (e) {
            e[0].isIntersecting && (t(), n.disconnect())
        }, {threshold: [0]})).observe(e) : t()
    }, scrollToDest: function (o, i) {
        var a, s;
        o < 0 || i < 0 || (a = window.scrollY || window.screenTop, o -= 70, "CSS" in window && CSS.supports("scroll-behavior", "smooth") ? window.scrollTo({
            top: o,
            behavior: "smooth"
        }) : (s = null, i = i || 500, window.requestAnimationFrame(function e(t) {
            var n, r;
            s = s || t, a < o ? (n = t - s, window.scrollTo(0, (o - a) * n / i + a), n < i ? window.requestAnimationFrame(e) : window.scrollTo(0, o)) : (r = t - s, window.scrollTo(0, a - (a - o) * r / i), r < i ? window.requestAnimationFrame(e) : window.scrollTo(0, o))
        })))
    }, fadeIn: function (e, t) {
        e.style.cssText = "display:block;animation: to_show ".concat(t, "s")
    }, fadeOut: function (t, e) {
        t.addEventListener("animationend", function e() {
            t.style.cssText = "display: none; animation: '' ", t.removeEventListener("animationend", e)
        }), t.style.animation = "to_hide ".concat(e, "s")
    }, getParents: function (e, t) {
        for (; e && e !== document; e = e.parentNode) if (e.matches(t)) return e;
        return null
    }, siblings: function (t, n) {
        return _toConsumableArray(t.parentNode.children).filter(function (e) {
            return n ? e !== t && e.matches(n) : e !== t
        })
    }, wrap: function (e, t, n, r) {
        var o = 2 < arguments.length && void 0 !== n ? n : "", i = 3 < arguments.length && void 0 !== r ? r : "",
            a = document.createElement(t);
        o && (a.id = o), i && (a.className = i), e.parentNode.insertBefore(a, e), a.appendChild(e)
    }, unwrap: function (e) {
        var t = e.parentNode;
        t !== document.body && (t.parentNode.insertBefore(e, t), t.parentNode.removeChild(t))
    }, isJqueryLoad: function (e) {
        "undefined" == typeof jQuery ? getScript(GLOBAL_CONFIG.source.jQuery).then(e) : e()
    }, isHidden: function (e) {
        return 0 === e.offsetHeight && 0 === e.offsetWidth
    }, getEleTop: function (e) {
        for (var t = e.offsetTop, n = e.offsetParent; null !== n;) t += n.offsetTop, n = n.offsetParent;
        return t
    }
};