(() => {
  "use strict";
  var n,
    e,
    t,
    r,
    o,
    a,
    i,
    d,
    s,
    c,
    l,
    p,
    u,
    f,
    h = {
      426: (n, e, t) => {
        t.d(e, { Z: () => d });
        var r = t(81),
          o = t.n(r),
          a = t(645),
          i = t.n(a)()(o());
        i.push([
          n.id,
          "html:root {\n    height: 100%;\n    width: 100%;\n    background-color: #134b5f;\n}\n\nbody {\n    height: 100%;\n    width: 100%;\n    margin: 0;\n}\n\n.container {\n    height: 100%;\n    width: 100%;\n    background-color: #134b5f;\n    display: flex;\n    flex-direction: column;\n}\n\n.top {\n    flex-basis: 8%;\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;\n    grid-template-rows: 1fr;\n}\n\n.logo {\n    grid-area: 1 / 1 / 2 / 2;\n    text-align: center;\n    color: white;\n}\n\n\n.page {\n    flex-basis: 92%;\n    background-color: white;\n    border-top-left-radius: 40px;\n    display: flex;\n}\n\n.pageLeft {\n    flex-basis: 30%;\n    display: grid;\n    grid-template: 1fr 10fr / 1fr;\n}\n\n.pageRight {\n    flex-basis: 70%;\n}\n\n.pageLeftInputDiv {\n    display: flex;\n    grid-area: 1 / 1 / 2 / 2;\n    justify-content: space-around;\n    align-items: center;\n}\n\n.inputFolder {\n    height: 30%;\n    width: 70%;\n    border-radius: 12px;\n    padding-left: 10px;\n}\n\n\n.inputButton {\n    height: 30%;\n    width: 15%;\n    border-radius: 30px;\n    border: none;\n    background-color: #134b5f;\n    color: white;\n    font-size: 0.7rem;\n}\n\n.inputButton:hover {\n    background-color: #0e3949;\n}\n\n.folderDiv {\n    grid-area: 2 / 1 / 3 / 2 ;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n\n\n}\n\n.folderContainer {\n    display: flex;\n    flex-direction: column;\n    height: 10%;\n    width: 90%;\n    margin-top: 10%;\n    box-shadow: 0px 0px 15px 10px rgba(0,0,0,0.1);\n    border-radius: 12px;\n}   \n\n\n.pageRight {\n    flex-basis: 70%;\n    display: flex;\n    flex-direction: column;\n}\n\n.rightTop {\n    flex-basis: 10%;\n    display: grid;\n    grid-template: 1fr / 10fr 3fr 3fr 1fr;\n    justify-items: center;\n    align-items: center;\n}\n\n.rightBottom {\n    flex-basis: 90%;\n}\n\n.rightTopInput {\n    grid-area: 1 / 1 / 2 / 2;\n    height: 50%;\n    width: 90%;\n}\n\n.rightTopInputDate {\n    grid-area: 1 / 2 / 2 / 3;\n    height: 50%;\n    width: 80%;\n}\n\n.rightTopInputUrgent {\n    grid-area: 1 / 3 / 2 / 4;\n    height: 50%;\n    width: 80%;\n}\n\n.rightTopButton {\n    grid-area: 1 / 4 / 2 / 5;\n    height: 50%;\n    width: 80%;\n}\n\n\n",
          "",
        ]);
        const d = i;
      },
      645: (n) => {
        n.exports = function (n) {
          var e = [];
          return (
            (e.toString = function () {
              return this.map(function (e) {
                var t = "",
                  r = void 0 !== e[5];
                return (
                  e[4] && (t += "@supports (".concat(e[4], ") {")),
                  e[2] && (t += "@media ".concat(e[2], " {")),
                  r &&
                    (t += "@layer".concat(
                      e[5].length > 0 ? " ".concat(e[5]) : "",
                      " {",
                    )),
                  (t += n(e)),
                  r && (t += "}"),
                  e[2] && (t += "}"),
                  e[4] && (t += "}"),
                  t
                );
              }).join("");
            }),
            (e.i = function (n, t, r, o, a) {
              "string" == typeof n && (n = [[null, n, void 0]]);
              var i = {};
              if (r)
                for (var d = 0; d < this.length; d++) {
                  var s = this[d][0];
                  null != s && (i[s] = !0);
                }
              for (var c = 0; c < n.length; c++) {
                var l = [].concat(n[c]);
                (r && i[l[0]]) ||
                  (void 0 !== a &&
                    (void 0 === l[5] ||
                      (l[1] = "@layer"
                        .concat(l[5].length > 0 ? " ".concat(l[5]) : "", " {")
                        .concat(l[1], "}")),
                    (l[5] = a)),
                  t &&
                    (l[2]
                      ? ((l[1] = "@media "
                          .concat(l[2], " {")
                          .concat(l[1], "}")),
                        (l[2] = t))
                      : (l[2] = t)),
                  o &&
                    (l[4]
                      ? ((l[1] = "@supports ("
                          .concat(l[4], ") {")
                          .concat(l[1], "}")),
                        (l[4] = o))
                      : (l[4] = "".concat(o))),
                  e.push(l));
              }
            }),
            e
          );
        };
      },
      81: (n) => {
        n.exports = function (n) {
          return n[1];
        };
      },
      379: (n) => {
        var e = [];
        function t(n) {
          for (var t = -1, r = 0; r < e.length; r++)
            if (e[r].identifier === n) {
              t = r;
              break;
            }
          return t;
        }
        function r(n, r) {
          for (var a = {}, i = [], d = 0; d < n.length; d++) {
            var s = n[d],
              c = r.base ? s[0] + r.base : s[0],
              l = a[c] || 0,
              p = "".concat(c, " ").concat(l);
            a[c] = l + 1;
            var u = t(p),
              f = {
                css: s[1],
                media: s[2],
                sourceMap: s[3],
                supports: s[4],
                layer: s[5],
              };
            if (-1 !== u) e[u].references++, e[u].updater(f);
            else {
              var h = o(f, r);
              (r.byIndex = d),
                e.splice(d, 0, { identifier: p, updater: h, references: 1 });
            }
            i.push(p);
          }
          return i;
        }
        function o(n, e) {
          var t = e.domAPI(e);
          return (
            t.update(n),
            function (e) {
              if (e) {
                if (
                  e.css === n.css &&
                  e.media === n.media &&
                  e.sourceMap === n.sourceMap &&
                  e.supports === n.supports &&
                  e.layer === n.layer
                )
                  return;
                t.update((n = e));
              } else t.remove();
            }
          );
        }
        n.exports = function (n, o) {
          var a = r((n = n || []), (o = o || {}));
          return function (n) {
            n = n || [];
            for (var i = 0; i < a.length; i++) {
              var d = t(a[i]);
              e[d].references--;
            }
            for (var s = r(n, o), c = 0; c < a.length; c++) {
              var l = t(a[c]);
              0 === e[l].references && (e[l].updater(), e.splice(l, 1));
            }
            a = s;
          };
        };
      },
      569: (n) => {
        var e = {};
        n.exports = function (n, t) {
          var r = (function (n) {
            if (void 0 === e[n]) {
              var t = document.querySelector(n);
              if (
                window.HTMLIFrameElement &&
                t instanceof window.HTMLIFrameElement
              )
                try {
                  t = t.contentDocument.head;
                } catch (n) {
                  t = null;
                }
              e[n] = t;
            }
            return e[n];
          })(n);
          if (!r)
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.",
            );
          r.appendChild(t);
        };
      },
      216: (n) => {
        n.exports = function (n) {
          var e = document.createElement("style");
          return n.setAttributes(e, n.attributes), n.insert(e, n.options), e;
        };
      },
      565: (n, e, t) => {
        n.exports = function (n) {
          var e = t.nc;
          e && n.setAttribute("nonce", e);
        };
      },
      795: (n) => {
        n.exports = function (n) {
          if ("undefined" == typeof document)
            return { update: function () {}, remove: function () {} };
          var e = n.insertStyleElement(n);
          return {
            update: function (t) {
              !(function (n, e, t) {
                var r = "";
                t.supports && (r += "@supports (".concat(t.supports, ") {")),
                  t.media && (r += "@media ".concat(t.media, " {"));
                var o = void 0 !== t.layer;
                o &&
                  (r += "@layer".concat(
                    t.layer.length > 0 ? " ".concat(t.layer) : "",
                    " {",
                  )),
                  (r += t.css),
                  o && (r += "}"),
                  t.media && (r += "}"),
                  t.supports && (r += "}");
                var a = t.sourceMap;
                a &&
                  "undefined" != typeof btoa &&
                  (r +=
                    "\n/*# sourceMappingURL=data:application/json;base64,".concat(
                      btoa(unescape(encodeURIComponent(JSON.stringify(a)))),
                      " */",
                    )),
                  e.styleTagTransform(r, n, e.options);
              })(e, n, t);
            },
            remove: function () {
              !(function (n) {
                if (null === n.parentNode) return !1;
                n.parentNode.removeChild(n);
              })(e);
            },
          };
        };
      },
      589: (n) => {
        n.exports = function (n, e) {
          if (e.styleSheet) e.styleSheet.cssText = n;
          else {
            for (; e.firstChild; ) e.removeChild(e.firstChild);
            e.appendChild(document.createTextNode(n));
          }
        };
      },
    },
    m = {};
  function g(n) {
    var e = m[n];
    if (void 0 !== e) return e.exports;
    var t = (m[n] = { id: n, exports: {} });
    return h[n](t, t.exports, g), t.exports;
  }
  (g.n = (n) => {
    var e = n && n.__esModule ? () => n.default : () => n;
    return g.d(e, { a: e }), e;
  }),
    (g.d = (n, e) => {
      for (var t in e)
        g.o(e, t) &&
          !g.o(n, t) &&
          Object.defineProperty(n, t, { enumerable: !0, get: e[t] });
    }),
    (g.o = (n, e) => Object.prototype.hasOwnProperty.call(n, e)),
    (g.nc = void 0),
    (n = g(379)),
    (e = g.n(n)),
    (t = g(795)),
    (r = g.n(t)),
    (o = g(569)),
    (a = g.n(o)),
    (i = g(565)),
    (d = g.n(i)),
    (s = g(216)),
    (c = g.n(s)),
    (l = g(589)),
    (p = g.n(l)),
    (u = g(426)),
    ((f = {}).styleTagTransform = p()),
    (f.setAttributes = d()),
    (f.insert = a().bind(null, "head")),
    (f.domAPI = r()),
    (f.insertStyleElement = c()),
    e()(u.Z, f),
    u.Z && u.Z.locals && u.Z.locals,
    (function () {
      const n = document.querySelector(".container"),
        e = document.createElement("div");
      e.classList.add("top");
      const t = document.createElement("div");
      t.classList.add("page"), n.appendChild(e), n.appendChild(t);
      const r = document.createElement("h2");
      r.classList.add("logo"), (r.textContent = "To do ✅"), e.appendChild(r);
      const o = document.createElement("div");
      o.classList.add("pageLeft");
      const a = document.createElement("div");
      a.classList.add("pageRight"), t.appendChild(o), t.appendChild(a);
      const i = document.createElement("div");
      i.classList.add("pageLeftInputDiv"), o.appendChild(i);
      const d = document.createElement("div");
      d.classList.add("folderDiv"), o.appendChild(d);
      const s = document.createElement("input");
      s.classList.add("inputFolder");
      const c = document.createElement("button");
      c.classList.add("inputButton"),
        (c.textContent = "Ajouter"),
        i.appendChild(s),
        i.appendChild(c);
      const l = document.createElement("div");
      l.classList.add("folderContainer"), d.appendChild(l);
      const p = document.createElement("div");
      p.classList.add("rightTop");
      const u = document.createElement("div");
      u.classList.add("rightBottom"), a.appendChild(p), a.appendChild(u);
      const f = document.createElement("input");
      f.classList.add("rightTopInput");
      const h = document.createElement("input");
      h.classList.add("rightTopInputDate");
      const m = document.createElement("input");
      m.classList.add("rightTopInputUrgent");
      const g = document.createElement("button");
      g.classList.add("rightTopButton"),
        (g.textContent = "Add"),
        p.appendChild(f),
        p.appendChild(h),
        p.appendChild(m),
        p.appendChild(g);
    })(),
    console.log("jesse saint arnault");
})();
