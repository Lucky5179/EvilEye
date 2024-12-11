(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [405],
  {
    8312: function (n, t, e) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/",
        function () {
          return e(5883);
        },
      ]);
    },
    3096: function (n, t, e) {
      "use strict";
      var r = e(2729),
        i = e(5893);
      e(7294);
      var o = e(1686),
        a = e(6044);
      function l() {
        let n = (0, r._)([
          "\n  padding: 1px;\n  color: ",
          ";\n  border-radius: ",
          ";\n  width: 100%;\n  height: 100%;\n",
        ]);
        return (
          (l = function () {
            return n;
          }),
          n
        );
      }
      function s() {
        let n = (0, r._)(["\n  padding: 25px;\n  text-align: center;\n"]);
        return (
          (s = function () {
            return n;
          }),
          n
        );
      }
      function u() {
        let n = (0, r._)([
          "\n  width: 80px;\n  max-width: 80px;\n  margin: 0 auto 12px;\n",
        ]);
        return (
          (u = function () {
            return n;
          }),
          n
        );
      }
      function d() {
        let n = (0, r._)([
          "\n  display: inline-block;\n  position: relative;\n  color: ",
          ";\n  font-weight: 600;\n  font-size: 2em;\n  line-height: 1.2;\n",
        ]);
        return (
          (d = function () {
            return n;
          }),
          n
        );
      }
      function c() {
        let n = (0, r._)([
          "\n  color: ",
          ";\n  font-weight: 500;\n  font-size: 1.6em;\n  line-height: 1.2;\n  margin: 10px 0 0;\n",
        ]);
        return (
          (c = function () {
            return n;
          }),
          n
        );
      }
      function p() {
        let n = (0, r._)([
          "\n  color: ",
          ";\n  font-weight: 500;\n  font-size: 1.6em;\n  line-height: 1.2;\n  margin: 10px 0 0;\n\n  .app_btn a {\n    padding: 0.7rem 4.5rem;\n    border-radius: ",
          ";\n    background: ",
          ";\n    background: ",
          ";\n    transition: ",
          ";\n    -webkit-transition: ",
          ";\n    -moz-transition: ",
          ";\n    -o-transition: ",
          ";\n    font-size: 1em;\n    text-align: center;\n    display: inline-block;\n    margin: 5px auto 0;\n    border: 1px solid ",
          ";\n    box-sizing: border-box;\n    color: ",
          ";\n    font-weight: 500;\n    position: relative;\n    overflow: hidden;\n    cursor: pointer;\n  }\n\n  .app_btn a:hover {\n    border-color: ",
          ";\n    background: ",
          ";\n    color: ",
          ";\n  }\n\n  .coming_soon {\n    color: ",
          ";\n    font-weight: 500;\n    font-size: 1em;\n    line-height: 1;\n    margin: 28px auto 18px;\n    display: block;\n  }\n",
        ]);
        return (
          (p = function () {
            return n;
          }),
          n
        );
      }
      let h = o.ZP.div(
          l(),
          (n) => {
            let { theme: t } = n;
            return t.white;
          },
          (n) => {
            let { theme: t } = n;
            return t.buttonBorderRadiusBig;
          }
        ),
        x = o.ZP.div(s()),
        g = o.ZP.div(u()),
        f = o.ZP.div(d(), (n) => {
          let { theme: t } = n;
          return t.textColorBox;
        }),
        m = o.ZP.div(c(), (n) => {
          let { theme: t } = n;
          return t.textGrey;
        }),
        b = o.ZP.div(
          p(),
          (n) => {
            let { theme: t } = n;
            return t.textColorBox;
          },
          (n) => {
            let { theme: t } = n;
            return t.buttonBorderRadius;
          },
          (n) => {
            let { theme: t } = n;
            return t.buttonBackgroundColor;
          },
          (n) => {
            let { theme: t } = n;
            return t.buttonBackgroundColorGradient;
          },
          (n) => {
            let { theme: t } = n;
            return t.transition;
          },
          (n) => {
            let { theme: t } = n;
            return t.transition;
          },
          (n) => {
            let { theme: t } = n;
            return t.transition;
          },
          (n) => {
            let { theme: t } = n;
            return t.transition;
          },
          (n) => {
            let { theme: t } = n;
            return t.buttonBorderColor;
          },
          (n) => {
            let { theme: t } = n;
            return t.white;
          },
          (n) => {
            let { theme: t } = n;
            return t.linkColor;
          },
          (n) => {
            let { theme: t } = n;
            return t.linkColor;
          },
          (n) => {
            let { theme: t } = n;
            return t.white;
          },
          (n) => {
            let { theme: t } = n;
            return t.textColorBox;
          }
        );
      t.Z = (n) => {
        let {
          title: t,
          description: e,
          image: r,
          url: o,
          showButton: l = !0,
        } = n;
        return (0, i.jsx)(h, {
          children: (0, i.jsxs)(x, {
            children: [
              (0, i.jsx)(g, {
                children: (0, i.jsx)("img", { src: r, alt: t }),
              }),
              (0, i.jsx)(f, { children: t }),
              (0, i.jsx)(m, { children: e }),
              l &&
                (0, i.jsx)(b, {
                  children:
                    o && /^https?:\/\//.test(o)
                      ? (0, i.jsx)("div", {
                          className: "app_btn",
                          children: (0, i.jsx)("a", {
                            href: o,
                            target: "_blank",
                            rel: "noopener noreferrer",
                            children: "Go to app",
                          }),
                        })
                      : o
                      ? (0, i.jsx)("div", {
                          className: "app_btn",
                          children: (0, i.jsx)(a.Z, {
                            href: o,
                            text: "Go to app",
                          }),
                        })
                      : (0, i.jsx)("span", {
                          className: "coming_soon",
                          children: "COMING SOON",
                        }),
                }),
            ],
          }),
        });
      };
    },
    6044: function (n, t, e) {
      "use strict";
      var r = e(2729),
        i = e(5893);
      e(7294);
      var o = e(1664),
        a = e.n(o);
      function l() {
        let n = (0, r._)([
          "\n  a {\n    padding: 1rem 4.5rem;\n    border-radius: ",
          ";\n    background: ",
          ";\n    transition: ",
          ";\n    -webkit-transition: ",
          ";\n    -moz-transition: ",
          ";\n    -o-transition: ",
          ";\n    font-size: 2em;\n    text-align: center;\n    display: inline-block;\n    margin: 0 auto;\n    border: 1px solid ",
          ";\n    box-sizing: border-box;\n    color: ",
          ";\n    font-weight: 500;\n    position: relative;\n    overflow: hidden;\n    cursor: pointer;\n  }\n\n  a:hover {\n    border-color: ",
          ";\n    background: ",
          ";\n    color: ",
          ";\n  }\n",
        ]);
        return (
          (l = function () {
            return n;
          }),
          n
        );
      }
      let s = e(1686).ZP.div(
        l(),
        (n) => {
          let { theme: t } = n;
          return t.buttonBorderRadius;
        },
        (n) => {
          let { theme: t } = n;
          return t.buttonBackgroundColor;
        },
        (n) => {
          let { theme: t } = n;
          return t.transition;
        },
        (n) => {
          let { theme: t } = n;
          return t.transition;
        },
        (n) => {
          let { theme: t } = n;
          return t.transition;
        },
        (n) => {
          let { theme: t } = n;
          return t.transition;
        },
        (n) => {
          let { theme: t } = n;
          return t.buttonBorderColor;
        },
        (n) => {
          let { theme: t } = n;
          return t.white;
        },
        (n) => {
          let { theme: t } = n;
          return t.linkColor;
        },
        (n) => {
          let { theme: t } = n;
          return t.linkColor;
        },
        (n) => {
          let { theme: t } = n;
          return t.white;
        }
      );
      t.Z = (n) => {
        let { url: t, text: e, className: r } = n;
        return (0, i.jsx)(s, {
          children: /^https?:\/\//.test(t)
            ? (0, i.jsx)("a", {
                href: t,
                className: r,
                target: "_blank",
                children: e,
              })
            : (0, i.jsx)(a(), { href: t, className: r, children: e }),
        });
      };
    },
    5883: function (n, t, e) {
      "use strict";
      e.r(t),
        e.d(t, {
          default: function () {
            return I;
          },
        });
      var r = e(2729),
        i = e(5893),
        o = e(7294),
        a = e(1664),
        l = e.n(a),
        s = e(5215),
        u = e(9594),
        d = e(7410),
        c = e(1686);
      function p() {
        let n = (0, r._)([
          "\n  background: none;\n  padding: 1px;\n  color: ",
          ";\n  border-radius: ",
          ";\n  width: 100%;\n  height: 100%;\n",
        ]);
        return (
          (p = function () {
            return n;
          }),
          n
        );
      }
      function h() {
        let n = (0, r._)([
          "\n  background: ",
          ";\n  padding: 30px;\n  min-height: 130px;\n  border-radius: ",
          ";\n  text-align: center;\n  height: 100%;\n  background: rgb(79 40 190 / 20%);\n  border-radius: 16px;\n  box-shadow: 0 2px 30px rgba(0, 0, 0, 0.01);\n  backdrop-filter: blur(5px);\n  -webkit-backdrop-filter: blur(5px);\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n",
        ]);
        return (
          (h = function () {
            return n;
          }),
          n
        );
      }
      function x() {
        let n = (0, r._)([
          "\n  display: inline-block;\n  text-transform: uppercase;\n  position: relative;\n  color: ",
          ';\n  font-weight: 600;\n  font-size: 1.4em;\n  letter-spacing: 0.045em;\n\n  :before {\n    content: "";\n    position: absolute;\n    left: 0;\n    top: 50%;\n    transform: translate(0, -50%);\n    width: 5px;\n    height: 5px;\n    background: ',
          ";\n    border-radius: 100%;\n  }\n",
        ]);
        return (
          (x = function () {
            return n;
          }),
          n
        );
      }
      function g() {
        let n = (0, r._)([
          "\n  color: ",
          ";\n  font-weight: 400;\n  font-size: 5em;\n  margin: 15px 0 0;\n  letter-spacing: 2px;\n  background: -webkit-linear-gradient(#ffffff, #c4bdca);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n",
        ]);
        return (
          (g = function () {
            return n;
          }),
          n
        );
      }
      function f() {
        let n = (0, r._)([
          "\n  0% {\n    background-position: -468px 0;\n  }\n  100% {\n    background-position: 468px 0;\n  }\n",
        ]);
        return (
          (f = function () {
            return n;
          }),
          n
        );
      }
      function m() {
        let n = (0, r._)([
          "\n  width: 120px;\n  height: 50px;\n  background: #2b2044;\n  background-image: linear-gradient(\n    to right,\n    #2e214b 0%,\n    #2b2044 20%,\n    #2b2044 40%,\n    #372959 100%\n  );\n  background-repeat: no-repeat;\n  background-size: 800px 104px;\n  animation: ",
          " 2s linear infinite;\n  border-radius: ",
          ";\n  margin: 15px auto 0;\n",
        ]);
        return (
          (m = function () {
            return n;
          }),
          n
        );
      }
      function b() {
        let n = (0, r._)([
          "\n  width: 50%;\n  height: 60px;\n  margin: 0 auto;\n",
        ]);
        return (
          (b = function () {
            return n;
          }),
          n
        );
      }
      let w = c.ZP.div(
          p(),
          (n) => {
            let { theme: t } = n;
            return t.white;
          },
          (n) => {
            let { theme: t } = n;
            return t.buttonBorderRadius;
          }
        ),
        k = c.ZP.div(
          h(),
          (n) => {
            let { theme: t } = n;
            return t.statsBgGradientColor;
          },
          (n) => {
            let { theme: t } = n;
            return t.buttonBorderRadius;
          }
        ),
        _ = c.ZP.div(
          x(),
          (n) => {
            let { theme: t } = n;
            return t.textGrey;
          },
          (n) => {
            let { theme: t } = n;
            return t.accent;
          }
        ),
        j = c.ZP.div(g(), (n) => {
          let { theme: t } = n;
          return t.textColorBox;
        }),
        y = (0, c.F4)(f()),
        v = c.ZP.div(m(), y, (n) => {
          let { theme: t } = n;
          return t.buttonBorderRadius;
        }),
        Z = c.ZP.div(b());
      var P = (n) => {
          let t,
            { description: e, value: r, formatType: a, isLoading: l } = n,
            [s, u] = (0, o.useState)(!1);
          return ((0, o.useEffect)(() => {
            u(!0);
          }, []),
          (t =
            "compact" === a
              ? new Intl.NumberFormat("en-US", {
                  style: "currency",
                  currency: "USD",
                  notation: "compact",
                  compactDisplay: "short",
                }).format(r)
              : "standard" === a
              ? new Intl.NumberFormat("en-US", {
                  style: "currency",
                  currency: "USD",
                }).format(r)
              : r),
          s)
            ? l
              ? (0, i.jsx)(w, {
                  children: (0, i.jsxs)(k, {
                    children: [
                      (0, i.jsx)(_, { children: e }),
                      (0, i.jsx)(v, { children: (0, i.jsx)(Z, {}) }),
                    ],
                  }),
                })
              : (0, i.jsx)(w, {
                  children: (0, i.jsxs)(k, {
                    children: [
                      (0, i.jsx)(_, { children: e }),
                      (0, i.jsx)(j, { children: t }),
                    ],
                  }),
                })
            : (0, i.jsx)(w, {
                children: (0, i.jsxs)(k, {
                  children: [(0, i.jsx)(_, { children: e }), (0, i.jsx)(j, {})],
                }),
              });
        },
        z = e(3096),
        B = e(6044),
        N = e(4608);
      function T() {
        let n = (0, r._)([
          "\n    body {\n      background-size: 220% auto !important;\n    }\n  ",
        ]);
        return (
          (T = function () {
            return n;
          }),
          n
        );
      }
      function E() {
        let n = (0, r._)([
          "\n    body {\n      background-size: 265% auto !important;\n    }\n  ",
        ]);
        return (
          (E = function () {
            return n;
          }),
          n
        );
      }
      function C() {
        let n = (0, r._)([
          '\n  body {\n    background: #1a172a url("/img/evileye-bg.jpg") no-repeat !important;\n    background-position: 95% top !important;\n    background-size: cover !important;\n  }\n  body > div {\n    background: url("/img/stars-bg.png") no-repeat !important;\n    background-repeat: no-repeat !important;\n    background-size: 100% auto !important;\n    background-attachment: fixed !important;\n  }\n  ',
          ";\n  ",
          ";\n",
        ]);
        return (
          (C = function () {
            return n;
          }),
          n
        );
      }
      function S() {
        let n = (0, r._)([
          "\n    * {\n      word-break: break-word;\n    }\n    .swap_hld a, .more_info a {\n      display: block;\n      width: 90%;\n    }\n    .more_info {\n      display: block;\n      margin-top: 10px;\n    }\n    .hidemobile {\n      display: none;\n    }\n    .title_desc {\n      font-size: 1.6em;\n      max-width: 85%;\n    }\n    .stats_hld {\n      margin: 50px auto 60px;\n    }\n    .apps_hld {\n      margin: 60px auto 100px;\n    }\n    .title_sub {\n      font-size: 2em;\n      max-width: 85%;\n    }\n  ",
        ]);
        return (
          (S = function () {
            return n;
          }),
          n
        );
      }
      function $() {
        let n = (0, r._)([
          "\n    h1 {\n      font-size: 2.8em;\n    }\n    .title_main {\n      max-width: 72%;\n      margin: 0 auto 20px;\n    }\n  ",
        ]);
        return (
          ($ = function () {
            return n;
          }),
          n
        );
      }
      function M() {
        let n = (0, r._)([
          "\n  .behodler_monster {\n    text-align: center;\n    max-width: 700px;\n    text-align: center;\n    margin: 0 auto;\n    animation: fadeIn 500ms ease-in-out;\n  }\n  .title_main {\n    max-width: 520px;\n    margin: 0 auto 20px;\n  }\n  .title_sub {\n    max-width: 660px;\n    margin: 80px auto 20px;\n    letter-spacing: 0.5px;\n  }\n  .title_desc {\n    max-width: 680px;\n    margin: 0 auto;\n    font-size: 1.8em;\n    font-weight: 500;\n    line-height: 1.3;\n  }\n  .title_desc_wide {\n    max-width: 700px;\n    font-size: 1.6em;\n  }\n  .swap_hld,\n  .more_info {\n    text-align: center;\n    position: relative;\n    margin-top: 25px;\n  }\n  .swap_hld a:hover {\n    background: #9a76ff;\n    background: linear-gradient(90deg, rgb(84 45 129) 0%, rgb(49 27 114) 100%);\n    border-color: rgba(32, 24, 50, 1);\n  }\n  .more_info {\n    display: none;\n  }\n  .stats_hld {\n    margin: 50px auto 100px;\n    max-width: 94%;\n  }\n  .apps_hld {\n    margin: 60px auto 60px;\n    max-width: 90%;\n  }\n  ",
          ";\n  ",
          ";\n",
        ]);
        return (
          (M = function () {
            return n;
          }),
          n
        );
      }
      function X() {
        let n = (0, r._)([
          "\n  padding: 1px;\n  color: ",
          ";\n  border-radius: ",
          ";\n  width: 100%;\n  height: 100%;\n  box-shadow: 0 2px 60px rgba(0, 0, 0, 0.2);\n  backdrop-filter: blur(5px);\n  -webkit-backdrop-filter: blur(5px);\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n",
        ]);
        return (
          (X = function () {
            return n;
          }),
          n
        );
      }
      function L() {
        let n = (0, r._)(["\n    margin: 120px auto 0;\n  "]);
        return (
          (L = function () {
            return n;
          }),
          n
        );
      }
      function q() {
        let n = (0, r._)([
          "\n  text-align: center;\n  max-width: 700px;\n  text-align: center;\n  margin: 0 auto;\n  animation: wobble 30s ease infinite;\n\n  ",
          ";\n\n  @keyframes wobble {\n    0%,\n    100% {\n      -webkit-transform: translateX(0%);\n      transform: translateX(0%);\n      -webkit-transform-origin: 20% 20%;\n      transform-origin: 20% 20%;\n    }\n\n    15% {\n      -webkit-transform: translateX(-6px) rotate(-1deg);\n      transform: translateX(-6px) rotate(-1deg);\n    }\n\n    30% {\n      -webkit-transform: translateX(calc(9px / 2)) rotate(3deg);\n      transform: translateX(calc(9px / 2)) rotate(3deg);\n    }\n\n    45% {\n      -webkit-transform: translateX(calc(-3px / 2)) rotate(calc(-5deg / 1.8));\n      transform: translateX(calc(-3px / 2)) rotate(calc(-5deg / 1.8));\n    }\n\n    60% {\n      -webkit-transform: translateX(calc(11px / 3.3)) rotate(calc(5deg / 3));\n      transform: translateX(calc(11px / 3.3)) rotate(calc(5deg / 3));\n    }\n\n    75% {\n      -webkit-transform: translateX(calc(-3px / 5.5)) rotate(calc(-2deg / 5));\n      transform: translateX(calc(-3px / 5.5)) rotate(calc(-2deg / 5));\n    }\n  }\n",
        ]);
        return (
          (q = function () {
            return n;
          }),
          n
        );
      }
      let G = (0, c.vJ)(
          C(),
          (n) => {
            let { theme: t } = n;
            return t.mediaWidth.upToMedium(T());
          },
          (n) => {
            let { theme: t } = n;
            return t.mediaWidth.upToSmall(E());
          }
        ),
        R = c.ZP.div(
          M(),
          (n) => {
            let { theme: t } = n;
            return t.mediaWidth.upToMedium(S());
          },
          (n) => {
            let { theme: t } = n;
            return t.mediaWidth.upToMedium($());
          }
        ),
        A = c.ZP.div(
          X(),
          (n) => {
            let { theme: t } = n;
            return t.white;
          },
          (n) => {
            let { theme: t } = n;
            return t.buttonBorderRadiusBig;
          }
        ),
        W = c.ZP.div(q(), (n) => {
          let { theme: t } = n;
          return t.mediaWidth.upToMedium(L());
        });
      function I() {
        let [n, t] = (0, o.useState)(0),
          [e, r] = (0, o.useState)(0),
          [a, c] = (0, o.useState)(0),
          [p, h] = (0, o.useState)(0),
          [x, g] = (0, o.useState)(!0);
        return (
          (0, o.useEffect)(() => {
            (async () => {
              g(!0);
              try {
                let n = await fetch(
                  "https://6rvsembg2htpykxway6sknmvva0aqshl.lambda-url.eu-west-1.on.aws/"
                );
                if (!n.ok) throw Error("HTTP error! Status: ".concat(n.status));
                let e = await n.json();
                e &&
                  (e.token1 && "EYE" === e.token1.symbol && t(e.token1.usd),
                  e.tokens && h(e.tokens.length),
                  e.behodlers &&
                    e.behodlers[0] &&
                    (r(e.behodlers[0].usdLiquidity),
                    c(e.behodlers[0].usdVolume)));
              } catch (n) {
                console.error("Error fetching data:", n);
              } finally {
                g(!1);
              }
            })();
          }, []),
          (0, i.jsxs)(i.Fragment, {
            children: [
              (0, i.jsx)(G, { theme: N.r }),
              (0, i.jsx)(R, {
                children: (0, i.jsxs)(s.Z, {
                  children: [
                    (0, i.jsx)(W, {
                      children: (0, i.jsx)("img", {
                        src: "/img/monster-web4.svg",
                        alt: "EvilEye",
                      }),
                    }),
                    (0, i.jsx)("h1", {
                      className: "title_main white_text center",
                      children: "Liquidity is in the Eye of the EvilEye",
                    }),
                    (0, i.jsx)("p", {
                      className: "title_desc light_text center",
                      children:
                        "Efficient, low cost, single sided Automated Market Maker (AMM) with a universal liquidity token powered by Miner Extracted Value (MEV) capturing tokenomics.",
                    }),
                    (0, i.jsx)("div", {
                      className: "swap_hld",
                      children: (0, i.jsx)(B.Z, {
                        url: "https://app-evileye.vercel.app",
                        text: "Swap",
                      }),
                    }),
                    (0, i.jsx)("div", {
                      className: "more_info",
                      children: (0, i.jsx)(B.Z, {
                        url: "/about",
                        text: "Learn More",
                      }),
                    }),
                    (0, i.jsx)("div", {
                      className: "stats_hld ",
                      children: (0, i.jsxs)(u.Y0, {
                        $gap: 20,
                        wrap: "wrap",
                        children: [
                          (0, i.jsx)(d.ZP, {
                            $justify: "center",
                            $grow: "grow",
                            children: (0, i.jsx)(P, {
                              description: "EYE Price",
                              value: n,
                              formatType: "standard",
                              isLoading: x,
                            }),
                          }),
                          (0, i.jsx)(d.ZP, {
                            $justify: "center",
                            $grow: "grow",
                            children: (0, i.jsx)(P, {
                              description: "Total Liquidity",
                              value: e,
                              formatType: "compact",
                              isLoading: x,
                            }),
                          }),
                          (0, i.jsx)(d.ZP, {
                            $justify: "center",
                            $grow: "grow",
                            children: (0, i.jsx)(P, {
                              description: "Total Volume",
                              value: a,
                              formatType: "compact",
                              isLoading: x,
                            }),
                          }),
                          (0, i.jsx)(d.ZP, {
                            $justify: "center",
                            $grow: "grow",
                            children: (0, i.jsx)(P, {
                              description: "Total Tokens",
                              value: p,
                              formatType: "",
                              isLoading: x,
                            }),
                          }),
                        ],
                      }),
                    }),
                    (0, i.jsxs)(A, {
                      children: [
                        (0, i.jsx)("h2", {
                          className: "title_sub white_text center",
                          children:
                            "An Innovative Suite of products for Liquidity Providers and Traders alike",
                        }),
                        (0, i.jsxs)("p", {
                          className:
                            "title_desc title_desc_wide light_text_2 center",
                          children: [
                            "While offering lower impermanent loss than traditional AMMs, EvilEye shines as a wholesaler of yield strategies typically found on layer 2: for half the gas of a trade on alternatives like Uniswap, you can zap into and out of your favourite mainnet yield farms. ",
                            (0, i.jsx)(l(), {
                              href: "/about",
                              children: "Learn more...",
                            }),
                          ],
                        }),
                        (0, i.jsx)("div", {
                          className: "apps_hld",
                          children: (0, i.jsxs)(u.Y0, {
                            $gap: 20,
                            wrap: "wrap",
                            children: [
                              (0, i.jsx)(d.ZP, {
                                $justify: "center",
                                $grow: "grow",
                                children: (0, i.jsx)(z.Z, {
                                  title: "Token Swap",
                                  description:
                                    "Swap tokens cheaply with logarithmic bonding curves.",
                                  image: "/img/ic-swap.svg",
                                  url: "https://app-evileye.vercel.app",
                                }),
                              }),
                              (0, i.jsx)(d.ZP, {
                                $justify: "center",
                                $grow: "grow",
                                children: (0, i.jsx)(z.Z, {
                                  title: "Limbo",
                                  description:
                                    "A farming dApp for token listing migration pools and staking.",
                                  image: "/img/ic-limbo.svg",
                                }),
                              }),
                              (0, i.jsx)(d.ZP, {
                                $justify: "center",
                                $grow: "grow",
                                children: (0, i.jsx)(z.Z, {
                                  title: "Tokenomics",
                                  description:
                                    "Exposure to net liquidity or single token liquidity growth.",
                                  image: "/img/ic-tokenomics.svg",
                                }),
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            ],
          })
        );
      }
    },
  },
  function (n) {
    n.O(0, [888, 774, 179], function () {
      return n((n.s = 8312));
    }),
      (_N_E = n.O());
  },
]);
