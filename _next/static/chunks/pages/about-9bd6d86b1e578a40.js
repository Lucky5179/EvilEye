(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [521],
  {
    9212: function (n, e, t) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/about",
        function () {
          return t(7793);
        },
      ]);
    },
    6044: function (n, e, t) {
      "use strict";
      var i = t(2729),
        r = t(5893);
      t(7294);
      var o = t(1664),
        l = t.n(o);
      function s() {
        let n = (0, i._)([
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
          (s = function () {
            return n;
          }),
          n
        );
      }
      let a = t(1686).ZP.div(
        s(),
        (n) => {
          let { theme: e } = n;
          return e.buttonBorderRadius;
        },
        (n) => {
          let { theme: e } = n;
          return e.buttonBackgroundColor;
        },
        (n) => {
          let { theme: e } = n;
          return e.transition;
        },
        (n) => {
          let { theme: e } = n;
          return e.transition;
        },
        (n) => {
          let { theme: e } = n;
          return e.transition;
        },
        (n) => {
          let { theme: e } = n;
          return e.transition;
        },
        (n) => {
          let { theme: e } = n;
          return e.buttonBorderColor;
        },
        (n) => {
          let { theme: e } = n;
          return e.white;
        },
        (n) => {
          let { theme: e } = n;
          return e.linkColor;
        },
        (n) => {
          let { theme: e } = n;
          return e.linkColor;
        },
        (n) => {
          let { theme: e } = n;
          return e.white;
        }
      );
      e.Z = (n) => {
        let { url: e, text: t, className: i } = n;
        return (0, r.jsx)(a, {
          children: /^https?:\/\//.test(e)
            ? (0, r.jsx)("a", {
                href: e,
                className: i,
                target: "_blank",
                children: t,
              })
            : (0, r.jsx)(l(), { href: e, className: i, children: t }),
        });
      };
    },
    4692: function (n, e, t) {
      "use strict";
      var i = t(2729),
        r = t(5893);
      t(7294);
      var o = t(1686),
        l = t(4608);
      function s() {
        let n = (0, i._)([
          "\n  height: ",
          ";\n\n  @media (max-width: ",
          "px) {\n    height: ",
          ";\n  }\n",
        ]);
        return (
          (s = function () {
            return n;
          }),
          n
        );
      }
      let a = o.ZP.div(
        s(),
        (n) => "".concat(n.height, "px"),
        l.e.upToSmall,
        (n) => "".concat(n.$heightMobile, "px")
      );
      e.Z = (n) => {
        let { height: e, $heightMobile: t } = n;
        return (0, r.jsx)(a, { height: e, $heightMobile: t });
      };
    },
    8314: function (n, e, t) {
      "use strict";
      t.d(e, {
        Z: function () {
          return j;
        },
      });
      var i = t(2729),
        r = t(5893);
      t(7294);
      var o = t(1686),
        l = t(1664),
        s = t.n(l),
        a = (n) => {
          let { props: e } = n;
          return (0, r.jsx)("svg", {
            version: "1.1",
            xmlns: "http://www.w3.org/2000/svg",
            x: "0px",
            y: "0px",
            viewBox: "0 0 24 24",
            ...e,
            children: (0, r.jsx)("path", {
              d: "M4.9,1.4v2.1c0,0.4,0.4,0.8,0.8,0.8h11.4L1.2,20.2c-0.3,0.3-0.3,0.8,0,1.1l1.5,1.5c0.3,0.3,0.8,0.3,1.1,0L19.7,6.9v11.4 c0,0.4,0.4,0.8,0.8,0.8h2.1c0.4,0,0.8-0.4,0.8-0.8V1.4c0-0.4-0.4-0.8-0.8-0.8H5.7C5.2,0.6,4.9,1,4.9,1.4z",
            }),
          });
        };
      function h() {
        let n = (0, i._)([
          "\n  width: 100%;\n  height: 100%;\n\n  a {\n    padding: 15px;\n    background: ",
          ";\n    padding: 1px;\n    color: ",
          ";\n    border-radius: ",
          ";\n    display: flex;\n    position: relative;\n    flex-grow: 1;\n    flex-shrink: 1;\n    flex-basis: 0;\n    min-width: 0;\n    min-height: 0;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n    align-content: center;\n    padding: 10px 20px;\n\n    svg {\n      width: 10px;\n      margin-top: 2px;\n    }\n    svg path {\n      fill: ",
          ";\n      transition: all 300ms ease-in-out;\n    }\n    :hover svg path {\n      fill: ",
          ";\n    }\n  }\n",
        ]);
        return (
          (h = function () {
            return n;
          }),
          n
        );
      }
      function d() {
        let n = (0, i._)(["\n  text-align: left;\n"]);
        return (
          (d = function () {
            return n;
          }),
          n
        );
      }
      function c() {
        let n = (0, i._)([
          "\n  width: 50px;\n  max-width: 50px;\n  margin: 0 10px 0 0;\n",
        ]);
        return (
          (c = function () {
            return n;
          }),
          n
        );
      }
      function u() {
        let n = (0, i._)([
          "\n  display: inline-block;\n  position: relative;\n  color: ",
          ";\n  font-weight: 600;\n  font-size: 1.8em;\n  line-height: 1;\n",
        ]);
        return (
          (u = function () {
            return n;
          }),
          n
        );
      }
      function g() {
        let n = (0, i._)([
          "\n  color: ",
          ";\n  font-weight: 500;\n  font-size: 1.6em;\n  line-height: 1.2;\n  margin: 5px 0 0;\n",
        ]);
        return (
          (g = function () {
            return n;
          }),
          n
        );
      }
      let x = o.ZP.div(
          h(),
          (n) => {
            let { theme: e } = n;
            return e.white;
          },
          (n) => {
            let { theme: e } = n;
            return e.textColorBox;
          },
          (n) => {
            let { theme: e } = n;
            return e.buttonBorderRadiusBig;
          },
          (n) => {
            let { theme: e } = n;
            return e.white;
          },
          (n) => {
            let { theme: e } = n;
            return e.textGrey;
          }
        ),
        p = o.ZP.div(d()),
        m = o.ZP.div(c()),
        f = o.ZP.div(u(), (n) => {
          let { theme: e } = n;
          return e.textDark;
        }),
        b = o.ZP.div(g(), (n) => {
          let { theme: e } = n;
          return e.textGrey;
        });
      var j = (n) => {
        let { title: e, description: t, image: i, url: o } = n;
        return (0, r.jsx)(x, {
          children: /^https?:\/\//.test(o)
            ? (0, r.jsxs)("a", {
                href: o,
                target: "_blank",
                children: [
                  (0, r.jsx)(m, {
                    children: (0, r.jsx)("img", { src: i, alt: e }),
                  }),
                  (0, r.jsxs)(p, {
                    children: [
                      (0, r.jsx)(f, { children: e }),
                      (0, r.jsxs)(b, { children: [t, " ", (0, r.jsx)(a, {})] }),
                    ],
                  }),
                ],
              })
            : (0, r.jsxs)(s(), {
                href: o,
                children: [
                  (0, r.jsx)(m, {
                    children: (0, r.jsx)("img", { src: i, alt: e }),
                  }),
                  (0, r.jsxs)(p, {
                    children: [
                      (0, r.jsx)(f, { children: e }),
                      (0, r.jsxs)(b, { children: [t, " ", (0, r.jsx)(a, {})] }),
                    ],
                  }),
                ],
              }),
        });
      };
    },
    7793: function (n, e, t) {
      "use strict";
      t.r(e),
        t.d(e, {
          default: function () {
            return J;
          },
        });
      var i = t(2729),
        r = t(5893);
      t(7294);
      var o = t(1686),
        l = t(5215),
        s = t(9594),
        a = t(7410),
        h = t(8314),
        d = t(1664),
        c = t.n(d);
      function u() {
        let n = (0, i._)([
          "\n  background: ",
          ";\n  padding: 1px;\n  color: ",
          ";\n  border-radius: ",
          ";\n  width: 100%;\n  height: 100%;\n  padding: 20px 30px;\n",
        ]);
        return (
          (u = function () {
            return n;
          }),
          n
        );
      }
      function g() {
        let n = (0, i._)(["\n  width: 80px;\n  max-width: 80px;\n"]);
        return (
          (g = function () {
            return n;
          }),
          n
        );
      }
      function x() {
        let n = (0, i._)([
          "\n  display: inline-block;\n  position: relative;\n  color: ",
          ";\n  font-weight: 600;\n  font-size: 2em;\n  line-height: 1.2;\n",
        ]);
        return (
          (x = function () {
            return n;
          }),
          n
        );
      }
      function p() {
        let n = (0, i._)(["\n    text-align: center;\n  "]);
        return (
          (p = function () {
            return n;
          }),
          n
        );
      }
      function m() {
        let n = (0, i._)([
          "\n  color: ",
          ";\n  font-weight: 500;\n  font-size: 1.6em;\n  line-height: 1.6;\n  margin: 0 0 0;\n\n  ",
          ";\n",
        ]);
        return (
          (m = function () {
            return n;
          }),
          n
        );
      }
      let f = o.ZP.div(
          u(),
          (n) => {
            let { theme: e } = n;
            return e.footerBg;
          },
          (n) => {
            let { theme: e } = n;
            return e.textColorBox;
          },
          (n) => {
            let { theme: e } = n;
            return e.buttonBorderRadiusBig;
          }
        ),
        b = o.ZP.div(g()),
        j = o.ZP.div(x(), (n) => {
          let { theme: e } = n;
          return e.blue;
        }),
        w = o.ZP.div(
          m(),
          (n) => {
            let { theme: e } = n;
            return e.bodyText;
          },
          (n) => {
            let { theme: e } = n;
            return e.mediaWidth.upToSmall(p());
          }
        );
      var Z = (n) => {
          let { title: e, description: t, image: i, url: o, linktext: l } = n;
          return (0, r.jsx)(f, {
            children: (0, r.jsxs)(s.Y0, {
              $gap: 30,
              $directionMobile: "column",
              children: [
                (0, r.jsx)(a.ZP, {
                  $justifyMobile: "center",
                  $alignMobile: "center",
                  children: (0, r.jsx)(b, {
                    children: (0, r.jsx)("img", { src: i, alt: e }),
                  }),
                }),
                (0, r.jsxs)(a.ZP, {
                  $justifyMobile: "center",
                  $alignMobile: "center",
                  children: [
                    (0, r.jsx)(j, { children: e }),
                    (0, r.jsx)(w, { children: t }),
                    o && /^https?:\/\//.test(o)
                      ? (0, r.jsx)("a", {
                          href: o,
                          target: "_blank",
                          rel: "noopener noreferrer",
                          children: l,
                        })
                      : o
                      ? (0, r.jsx)(c(), { href: o, children: l })
                      : null,
                  ],
                }),
              ],
            }),
          });
        },
        _ = t(6044),
        v = t(4692),
        $ = t(4608);
      function k() {
        let n = (0, i._)([
          "\n    body {\n      background-position: 5% -8% !important;\n      background-size: 130% auto !important;\n    }\n  ",
        ]);
        return (
          (k = function () {
            return n;
          }),
          n
        );
      }
      function M() {
        let n = (0, i._)([
          "\n    body {\n      background-size: 160% auto !important;\n    }\n  ",
        ]);
        return (
          (M = function () {
            return n;
          }),
          n
        );
      }
      function y() {
        let n = (0, i._)([
          "\n    body {\n      background-size: 220% auto !important;\n    }\n  ",
        ]);
        return (
          (y = function () {
            return n;
          }),
          n
        );
      }
      function P() {
        let n = (0, i._)([
          "\n    body {\n      background-size: 270% auto !important;\n      background-position: 5% 0% !important;\n    }\n  ",
        ]);
        return (
          (P = function () {
            return n;
          }),
          n
        );
      }
      function N() {
        let n = (0, i._)([
          "\n  body {\n    background: ",
          ' url("/img/evileye-bg.jpg") no-repeat !important;\n    background-position: 4% -8% !important;\n    background-size: 130% auto !important;\n  }\n  ',
          ";\n  ",
          ";\n  ",
          ";\n  ",
          ";\n",
        ]);
        return (
          (N = function () {
            return n;
          }),
          n
        );
      }
      function B() {
        let n = (0, i._)([
          "\n    p {\n      text-align: center;\n      font-size: 1.5em;\n    }\n  ",
        ]);
        return (
          (B = function () {
            return n;
          }),
          n
        );
      }
      function T() {
        let n = (0, i._)([
          "\n      font-size: 5em;\n      text-align: center;\n    ",
        ]);
        return (
          (T = function () {
            return n;
          }),
          n
        );
      }
      function E() {
        let n = (0, i._)(["\n      font-size: 3.5em;\n    "]);
        return (
          (E = function () {
            return n;
          }),
          n
        );
      }
      function z() {
        let n = (0, i._)(["\n      text-align: center;\n    "]);
        return (
          (z = function () {
            return n;
          }),
          n
        );
      }
      function C() {
        let n = (0, i._)(["\n      font-size: 1.4em;\n    "]);
        return (
          (C = function () {
            return n;
          }),
          n
        );
      }
      function S() {
        let n = (0, i._)(["\n      display: none;\n    "]);
        return (
          (S = function () {
            return n;
          }),
          n
        );
      }
      function W() {
        let n = (0, i._)([
          "\n  p,\n  li,\n  blockquote {\n    font-size: 1.6em;\n    line-height: 1.6;\n    color: ",
          ";\n    font-weight: 500;\n  }\n  p {\n    padding: 0;\n    margin: 0 0 10px 0;\n  }\n\n  .col,\n  h3,\n  h4,\n  p {\n    text-align: left;\n    align-content: flex-start;\n    justify-content: flex-start;\n  }\n\n  ",
          ";\n\n  h1 {\n    font-size: 7.5em;\n    line-height: 0.9;\n    margin: 0 0 10px;\n    font-weight: 300;\n\n    strong {\n      font-weight: 700;\n    }\n\n    ",
          ";\n  }\n\n  h2 {\n    font-size: 4em;\n    font-weight: 300;\n    margin: 0 0 20px;\n\n    strong {\n      font-weight: 700;\n    }\n\n    ",
          ";\n  }\n\n  h3 {\n    font-size: 1.8em;\n    font-weight: 700;\n    margin: 0 0 5px;\n\n    &.tagline {\n      text-transform: uppercase;\n      letter-spacing: 3px;\n      font-weight: 500;\n    }\n    ",
          ";\n  }\n\n  h4 {\n    font-size: 1.8em;\n    margin: 0;\n    text-transform: uppercase;\n    letter-spacing: 3px;\n    font-weight: 300;\n\n    ",
          ";\n  }\n\n  blockquote {\n    padding: 5px 0 0 16px;\n    margin: 0px 0 16px 10px;\n    position: relative;\n    @media (max-width: ",
          "px) {\n      margin: 0 10px 10px;\n      padding: 10px;\n      text-align: center;\n      background: ",
          ';\n    }\n  }\n\n  blockquote:before {\n    content: "";\n    width: 2px;\n    height: 94%;\n    background: #54b8ff;\n    position: absolute;\n    left: 0;\n    ',
          ";\n  }\n\n  .behodler_monster {\n    text-align: center;\n    width: 100%;\n    max-width: 700px;\n    text-align: center;\n    margin: 0 auto;\n    animation: fadeIn 500ms ease-in-out;\n    img {\n      width: 200%;\n      max-width: 120%;\n      margin-left: -10%;\n    }\n  }\n",
        ]);
        return (
          (W = function () {
            return n;
          }),
          n
        );
      }
      function L() {
        let n = (0, i._)(["\n    padding: 0;\n  "]);
        return (
          (L = function () {
            return n;
          }),
          n
        );
      }
      function Y() {
        let n = (0, i._)([
          "\n  text-align: left;\n  padding: 40px;\n\n  ",
          ";\n",
        ]);
        return (
          (Y = function () {
            return n;
          }),
          n
        );
      }
      function A() {
        let n = (0, i._)(["\n  width: 100%;\n"]);
        return (
          (A = function () {
            return n;
          }),
          n
        );
      }
      function q() {
        let n = (0, i._)([
          "\n    .applogo {\n      max-width: 100px;\n    }\n  ",
        ]);
        return (
          (q = function () {
            return n;
          }),
          n
        );
      }
      function D() {
        let n = (0, i._)([
          "\n  background: ",
          ";\n  width: 100%;\n  padding: 40px 0;\n\n  ",
          " {\n    background: none;\n  }\n\n  ",
          ";\n",
        ]);
        return (
          (D = function () {
            return n;
          }),
          n
        );
      }
      function F() {
        let n = (0, i._)(["\n      padding: 40px 0 0;\n    "]);
        return (
          (F = function () {
            return n;
          }),
          n
        );
      }
      function O() {
        let n = (0, i._)([
          "\n  width: 100%;\n\n  ",
          " {\n    padding: 70px 40px 0;\n\n    ",
          ";\n  }\n",
        ]);
        return (
          (O = function () {
            return n;
          }),
          n
        );
      }
      let R = (0, o.vJ)(
          N(),
          (n) => {
            let { theme: e } = n;
            return e.background;
          },
          (n) => {
            let { theme: e } = n;
            return e.mediaWidth.upToExtraLarge(k());
          },
          (n) => {
            let { theme: e } = n;
            return e.mediaWidth.upToLarge(M());
          },
          (n) => {
            let { theme: e } = n;
            return e.mediaWidth.upToMedium(y());
          },
          (n) => {
            let { theme: e } = n;
            return e.mediaWidth.upToSmall(P());
          }
        ),
        X = o.ZP.div(
          W(),
          (n) => {
            let { theme: e } = n;
            return e.bodyText;
          },
          (n) => {
            let { theme: e } = n;
            return e.mediaWidth.upToMedium(B());
          },
          (n) => {
            let { theme: e } = n;
            return e.mediaWidth.upToMedium(T());
          },
          (n) => {
            let { theme: e } = n;
            return e.mediaWidth.upToMedium(E());
          },
          (n) => {
            let { theme: e } = n;
            return e.mediaWidth.upToMedium(z());
          },
          (n) => {
            let { theme: e } = n;
            return e.mediaWidth.upToMedium(C());
          },
          $.e.upToSmall,
          (n) => {
            let { theme: e } = n;
            return e.footerBg;
          },
          (n) => {
            let { theme: e } = n;
            return e.mediaWidth.upToMedium(S());
          }
        ),
        G = o.ZP.div(Y(), (n) => {
          let { theme: e } = n;
          return e.mediaWidth.upToMedium(L());
        }),
        H = o.ZP.div(A()),
        I = o.ZP.div(
          D(),
          (n) => {
            let { theme: e } = n;
            return e.background_info;
          },
          G,
          (n) => {
            let { theme: e } = n;
            return e.mediaWidth.upToMedium(q());
          }
        ),
        V = o.ZP.div(O(), G, (n) => {
          let { theme: e } = n;
          return e.mediaWidth.upToMedium(F());
        });
      var J = () =>
        (0, r.jsxs)(r.Fragment, {
          children: [
            (0, r.jsx)(R, { theme: $.r }),
            (0, r.jsxs)(X, {
              children: [
                (0, r.jsx)(l.Z, {
                  children: (0, r.jsxs)(s.ZP, {
                    children: [
                      (0, r.jsxs)(a.ZP, {
                        width: "55%",
                        $widthMobile: "100%",
                        children: [
                          (0, r.jsx)(v.Z, { height: 80, $heightMobile: 80 }),
                          (0, r.jsx)("h3", {
                            className: "tagline blue_text",
                            children: "Automated Market Maker",
                          }),
                          (0, r.jsx)(v.Z, { height: 5, $heightMobile: 5 }),
                          (0, r.jsxs)("h1", {
                            className: "white_text",
                            children: [
                              (0, r.jsx)("strong", { children: "EvilEye" }),
                              " Ecosystem",
                            ],
                          }),
                          (0, r.jsx)(v.Z, { height: 5, $heightMobile: 5 }),
                          (0, r.jsx)("p", {
                            className: "white_text",
                            children:
                              "Efficient, low cost, single sided Automated Market Maker (AMM) with a universal liquidity token, $SCX. Offering lower impermanent loss than traditional AMMs, and shining as a wholesaler of yield strategies, for half the gas of alternative options.",
                          }),
                          (0, r.jsx)(v.Z, { height: 5, $heightMobile: 5 }),
                          (0, r.jsxs)(s.Y0, {
                            $gap: 20,
                            children: [
                              (0, r.jsx)(a.ZP, {
                                $grow: "grow",
                                children: (0, r.jsx)(h.Z, {
                                  title: "Scarcity",
                                  description: "$SCX",
                                  image: "/img/scarcity-logo.png",
                                  url: "https://docs.evileye.io/tokens/scarcity",
                                }),
                              }),
                              (0, r.jsx)(a.ZP, {
                                $grow: "grow",
                                children: (0, r.jsx)(h.Z, {
                                  title: "EYE",
                                  description: "$EYE",
                                  image: "/img/eye_logo.svg",
                                  url: "https://docs.evileye.io/tokens/eye",
                                }),
                              }),
                              (0, r.jsx)(a.ZP, {
                                $grow: "grow",
                                children: (0, r.jsx)(h.Z, {
                                  title: "Flan",
                                  description: "$Flan",
                                  image: "/img/flan-logo.png",
                                  url: "https://docs.evileye.io/tokens/flan",
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, r.jsx)(a.ZP, {
                        width: "45%",
                        className: "hidemobile",
                        children: (0, r.jsx)("div", {
                          className: "behodler_monster",
                          children: (0, r.jsx)("img", {
                            src: "/img/monster-web3.svg",
                            alt: "EvilEye",
                          }),
                        }),
                      }),
                    ],
                  }),
                }),
                (0, r.jsx)(v.Z, { height: 100, $heightMobile: 60 }),
                (0, r.jsx)(H, {
                  children: (0, r.jsx)(l.Z, {
                    children: (0, r.jsx)(G, {
                      children: (0, r.jsxs)(s.Y0, {
                        $gap: 30,
                        children: [
                          (0, r.jsx)(a.ZP, {
                            width: "35%",
                            $widthMobile: "80%",
                            $alignMobile: "center",
                            children: (0, r.jsx)("img", {
                              src: "/img/bonding-curve.svg",
                              alt: "EvilEye Bonding Curve",
                            }),
                          }),
                          (0, r.jsxs)(a.ZP, {
                            width: "65%",
                            $widthMobile: "100%",
                            $alignMobile: "center",
                            children: [
                              (0, r.jsxs)("h2", {
                                className: "white_text",
                                children: [
                                  (0, r.jsx)("strong", { children: "Swap" }),
                                  " & Invest",
                                ],
                              }),
                              (0, r.jsx)("h3", {
                                className: "blue_text",
                                children: "EvilEye AMM",
                              }),
                              (0, r.jsx)("p", {
                                className: "white_text",
                                children:
                                  "The first true market for liquidity. Optimized for lower gas consumption, MEV offsetting, and powered by token bonding curve pricing.",
                              }),
                              (0, r.jsx)(v.Z, {
                                height: 15,
                                $heightMobile: 15,
                              }),
                              (0, r.jsx)(_.Z, {
                                url: "https://app.evileye.io",
                                text: "Swap",
                              }),
                              (0, r.jsx)(v.Z, {
                                height: 40,
                                $heightMobile: 40,
                              }),
                              (0, r.jsx)("h3", {
                                className: "blue_text",
                                children: "Scarcity $SCX",
                              }),
                              (0, r.jsx)("p", {
                                className: "white_text",
                                children:
                                  'Universal liquidity token built on hyper deflationary tokenomics designed to suck liquidity in from the rest of DeFi into the EvilEye "gravity well".',
                              }),
                              (0, r.jsx)(v.Z, {
                                height: 15,
                                $heightMobile: 15,
                              }),
                              (0, r.jsx)(_.Z, {
                                url: "https://app.evileye.io/",
                                text: "Get $SCX",
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                  }),
                }),
                (0, r.jsx)(v.Z, { height: 50, $heightMobile: 40 }),
                (0, r.jsx)(I, {
                  children: (0, r.jsx)(l.Z, {
                    children: (0, r.jsxs)(s.Y0, {
                      $gap: 35,
                      $align: "stretch",
                      children: [
                        (0, r.jsx)(a.ZP, {
                          width: "50%",
                          $align: "flex-start",
                          $alignMobile: "center",
                          children: (0, r.jsxs)(G, {
                            children: [
                              (0, r.jsxs)(s.Y0, {
                                $gap: 10,
                                children: [
                                  (0, r.jsxs)(a.ZP, {
                                    $grow: "grow",
                                    $alignMobile: "center",
                                    children: [
                                      (0, r.jsx)("h4", {
                                        className: "white_text",
                                        children: "Earn & Grow",
                                      }),
                                      (0, r.jsxs)("h2", {
                                        className: "white_text",
                                        children: [
                                          (0, r.jsx)("strong", {
                                            children: "Stake",
                                          }),
                                          " to earn",
                                        ],
                                      }),
                                    ],
                                  }),
                                  (0, r.jsxs)(a.ZP, {
                                    width: "100px",
                                    $alignMobile: "center",
                                    children: [
                                      (0, r.jsx)("img", {
                                        src: "/img/limbo.svg",
                                        className: "applogo",
                                        alt: "Limbo",
                                      }),
                                      (0, r.jsx)(v.Z, {
                                        height: 15,
                                        $heightMobile: 15,
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              (0, r.jsx)(s.ZP, {
                                children: (0, r.jsxs)(a.ZP, {
                                  $grow: "grow",
                                  $alignMobile: "center",
                                  children: [
                                    (0, r.jsx)("h3", {
                                      className: "blue_text",
                                      children: "Limbo",
                                    }),
                                    (0, r.jsx)("p", {
                                      className: "white_text",
                                      children:
                                        "A community configured yield farming dapp for bootstrapping liquidity of new token listings on EvilEye.",
                                    }),
                                    (0, r.jsx)(v.Z, {
                                      height: 15,
                                      $heightMobile: 15,
                                    }),
                                    (0, r.jsx)(_.Z, {
                                      url: "https://app.gitbook.com/@evileye-io/s/test-space/dapps/limbo",
                                      text: "Learn more",
                                    }),
                                    (0, r.jsx)(v.Z, {
                                      height: 30,
                                      $heightMobile: 30,
                                    }),
                                    (0, r.jsxs)(s.Y0, {
                                      $gap: 10,
                                      $align: "flex-start",
                                      children: [
                                        (0, r.jsxs)(a.ZP, {
                                          $grow: "grow",
                                          $alignMobile: "center",
                                          children: [
                                            (0, r.jsx)("h3", {
                                              className: "blue_text",
                                              children: "Flan $FLN",
                                            }),
                                            (0, r.jsx)("p", {
                                              className: "white_text",
                                              children:
                                                "A reward token to incentivize stakers participating to help grow new token liquidity through Limbo.",
                                            }),
                                            (0, r.jsx)(v.Z, {
                                              height: 15,
                                              $heightMobile: 15,
                                            }),
                                            (0, r.jsx)(_.Z, {
                                              url: "https://docs.evileye.io/tokens/flan",
                                              text: "Learn more",
                                            }),
                                          ],
                                        }),
                                        (0, r.jsx)(a.ZP, {
                                          width: "100px",
                                          $alignMobile: "center",
                                          children: (0, r.jsx)("img", {
                                            src: "/img/flan-logo.png",
                                            className: "applogo hidemobile",
                                            alt: "Flan",
                                          }),
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              }),
                            ],
                          }),
                        }),
                        (0, r.jsx)(v.Z, { height: 30, $heightMobile: 30 }),
                        (0, r.jsx)(a.ZP, {
                          width: "50%",
                          $align: "flex-start",
                          children: (0, r.jsxs)(G, {
                            children: [
                              (0, r.jsxs)(s.Y0, {
                                $gap: 10,
                                children: [
                                  (0, r.jsxs)(a.ZP, {
                                    $grow: "grow",
                                    $alignMobile: "center",
                                    children: [
                                      (0, r.jsx)("h4", {
                                        className: "white_text",
                                        children: "Rewards & Incentives",
                                      }),
                                      (0, r.jsxs)("h2", {
                                        className: "white_text",
                                        children: [
                                          (0, r.jsx)("strong", {
                                            children: "Reward",
                                          }),
                                          " holders",
                                        ],
                                      }),
                                    ],
                                  }),
                                  (0, r.jsxs)(a.ZP, {
                                    width: "100px",
                                    $alignMobile: "center",
                                    children: [
                                      (0, r.jsx)("img", {
                                        src: "/img/pyrotokens.svg",
                                        className: "applogo",
                                        alt: "Pyrotokens",
                                      }),
                                      (0, r.jsx)(v.Z, {
                                        height: 15,
                                        $heightMobile: 15,
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              (0, r.jsx)(s.Y0, {
                                children: (0, r.jsxs)(a.ZP, {
                                  $grow: "grow",
                                  $alignMobile: "center",
                                  children: [
                                    (0, r.jsx)("h3", {
                                      className: "blue_text",
                                      children: "Pyrotokens & Bonfire",
                                    }),
                                    (0, r.jsx)("p", {
                                      className: "white_text",
                                      children:
                                        "Deflation as a service. Pyrotokens are an innovative yield aggregating strategy, that rewards holders by taking advantage of the burn of burnable and non-burnable tokens on EvilEye (collected as fees). An automatic incentive for trading on EvilEye.",
                                    }),
                                    (0, r.jsx)("blockquote", {
                                      className: "white_text",
                                      children:
                                        "E.g. WETH becomes burnable as PyroETH when traded on EvilEye. Rewarding both PyroETH and ETH holders.",
                                    }),
                                    (0, r.jsx)("p", {
                                      className: "white_text",
                                      children:
                                        "Bonfire is a dApp powered by Limbo that can bring deflation to your favorite token.",
                                    }),
                                    (0, r.jsx)(v.Z, {
                                      height: 15,
                                      $heightMobile: 15,
                                    }),
                                    (0, r.jsx)(_.Z, {
                                      url: "https://app.evileye.io/pyrotokens",
                                      text: "Swap Pyrotokens",
                                    }),
                                  ],
                                }),
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
                  }),
                }),
                (0, r.jsx)(v.Z, { height: 20, $heightMobile: 10 }),
                (0, r.jsx)(V, {
                  children: (0, r.jsx)(l.Z, {
                    children: (0, r.jsx)(G, {
                      children: (0, r.jsxs)(s.Y0, {
                        $gap: 30,
                        children: [
                          (0, r.jsxs)(a.ZP, {
                            $grow: "grow",
                            $alignMobile: "center",
                            children: [
                              (0, r.jsx)("h4", {
                                className: "white_text",
                                children: "Vote & have your say",
                              }),
                              (0, r.jsxs)("h2", {
                                className: "white_text",
                                children: [
                                  (0, r.jsx)("strong", { children: "Shape" }),
                                  " EvilEye",
                                ],
                              }),
                              (0, r.jsx)("h3", {
                                className: "blue_text",
                                children: "EvilEye $EYE",
                              }),
                              (0, r.jsx)("p", {
                                className: "white_text",
                                children:
                                  "Deflationary utility & governance token for the EvilEye Ecosystem. Capped at 10 million max supply and burned at 0.5% with trades made on EvilEye.",
                              }),
                              (0, r.jsx)(v.Z, {
                                height: 15,
                                $heightMobile: 15,
                              }),
                              (0, r.jsx)(_.Z, {
                                url: "https://app.evileye.io/",
                                text: "Get $EYE",
                              }),
                            ],
                          }),
                          (0, r.jsxs)(a.ZP, {
                            $grow: "grow",
                            children: [
                              (0, r.jsx)(s.ZP, {
                                children: (0, r.jsx)(Z, {
                                  title: "Morgoth DAO",
                                  description:
                                    "The core governance protocol for the EvilEye Ecosystem.",
                                  image: "/img/eye_logo.svg",
                                }),
                              }),
                              (0, r.jsx)(v.Z, {
                                height: 10,
                                $heightMobile: 10,
                              }),
                              (0, r.jsx)(s.ZP, {
                                children: (0, r.jsx)(Z, {
                                  title: "Limbo MicroDAO",
                                  description:
                                    "Directly control the calibration of Limbo staking parameters.",
                                  image: "/img/limboDAO.svg",
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                  }),
                }),
              ],
            }),
          ],
        });
    },
  },
  function (n) {
    n.O(0, [888, 774, 179], function () {
      return n((n.s = 9212));
    }),
      (_N_E = n.O());
  },
]);
