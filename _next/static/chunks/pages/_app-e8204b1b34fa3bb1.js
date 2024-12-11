(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [888],
  {
    4098: function (e, t, r) {
      var n =
          ("undefined" != typeof globalThis && globalThis) ||
          ("undefined" != typeof self && self) ||
          (void 0 !== r.g && r.g),
        i = (function () {
          function e() {
            (this.fetch = !1), (this.DOMException = n.DOMException);
          }
          return (e.prototype = n), new e();
        })();
      (function (e) {
        var t =
            (void 0 !== i && i) ||
            ("undefined" != typeof self && self) ||
            (void 0 !== t && t),
          r = {
            searchParams: "URLSearchParams" in t,
            iterable: "Symbol" in t && "iterator" in Symbol,
            blob:
              "FileReader" in t &&
              "Blob" in t &&
              (function () {
                try {
                  return new Blob(), !0;
                } catch (e) {
                  return !1;
                }
              })(),
            formData: "FormData" in t,
            arrayBuffer: "ArrayBuffer" in t,
          };
        if (r.arrayBuffer)
          var n = [
              "[object Int8Array]",
              "[object Uint8Array]",
              "[object Uint8ClampedArray]",
              "[object Int16Array]",
              "[object Uint16Array]",
              "[object Int32Array]",
              "[object Uint32Array]",
              "[object Float32Array]",
              "[object Float64Array]",
            ],
            o =
              ArrayBuffer.isView ||
              function (e) {
                return e && n.indexOf(Object.prototype.toString.call(e)) > -1;
              };
        function a(e) {
          if (
            ("string" != typeof e && (e = String(e)),
            /[^a-z0-9\-#$%&'*+.^_`|~!]/i.test(e) || "" === e)
          )
            throw TypeError(
              'Invalid character in header field name: "' + e + '"'
            );
          return e.toLowerCase();
        }
        function s(e) {
          return "string" != typeof e && (e = String(e)), e;
        }
        function u(e) {
          var t = {
            next: function () {
              var t = e.shift();
              return { done: void 0 === t, value: t };
            },
          };
          return (
            r.iterable &&
              (t[Symbol.iterator] = function () {
                return t;
              }),
            t
          );
        }
        function c(e) {
          (this.map = {}),
            e instanceof c
              ? e.forEach(function (e, t) {
                  this.append(t, e);
                }, this)
              : Array.isArray(e)
              ? e.forEach(function (e) {
                  this.append(e[0], e[1]);
                }, this)
              : e &&
                Object.getOwnPropertyNames(e).forEach(function (t) {
                  this.append(t, e[t]);
                }, this);
        }
        function l(e) {
          if (e.bodyUsed) return Promise.reject(TypeError("Already read"));
          e.bodyUsed = !0;
        }
        function f(e) {
          return new Promise(function (t, r) {
            (e.onload = function () {
              t(e.result);
            }),
              (e.onerror = function () {
                r(e.error);
              });
          });
        }
        function h(e) {
          var t = new FileReader(),
            r = f(t);
          return t.readAsArrayBuffer(e), r;
        }
        function d(e) {
          if (e.slice) return e.slice(0);
          var t = new Uint8Array(e.byteLength);
          return t.set(new Uint8Array(e)), t.buffer;
        }
        function p() {
          return (
            (this.bodyUsed = !1),
            (this._initBody = function (e) {
              if (((this.bodyUsed = this.bodyUsed), (this._bodyInit = e), e)) {
                if ("string" == typeof e) this._bodyText = e;
                else if (r.blob && Blob.prototype.isPrototypeOf(e))
                  this._bodyBlob = e;
                else if (r.formData && FormData.prototype.isPrototypeOf(e))
                  this._bodyFormData = e;
                else if (
                  r.searchParams &&
                  URLSearchParams.prototype.isPrototypeOf(e)
                )
                  this._bodyText = e.toString();
                else {
                  var t;
                  r.arrayBuffer &&
                  r.blob &&
                  (t = e) &&
                  DataView.prototype.isPrototypeOf(t)
                    ? ((this._bodyArrayBuffer = d(e.buffer)),
                      (this._bodyInit = new Blob([this._bodyArrayBuffer])))
                    : r.arrayBuffer &&
                      (ArrayBuffer.prototype.isPrototypeOf(e) || o(e))
                    ? (this._bodyArrayBuffer = d(e))
                    : (this._bodyText = e = Object.prototype.toString.call(e));
                }
              } else this._bodyText = "";
              !this.headers.get("content-type") &&
                ("string" == typeof e
                  ? this.headers.set("content-type", "text/plain;charset=UTF-8")
                  : this._bodyBlob && this._bodyBlob.type
                  ? this.headers.set("content-type", this._bodyBlob.type)
                  : r.searchParams &&
                    URLSearchParams.prototype.isPrototypeOf(e) &&
                    this.headers.set(
                      "content-type",
                      "application/x-www-form-urlencoded;charset=UTF-8"
                    ));
            }),
            r.blob &&
              ((this.blob = function () {
                var e = l(this);
                if (e) return e;
                if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
                if (this._bodyArrayBuffer)
                  return Promise.resolve(new Blob([this._bodyArrayBuffer]));
                if (!this._bodyFormData)
                  return Promise.resolve(new Blob([this._bodyText]));
                throw Error("could not read FormData body as blob");
              }),
              (this.arrayBuffer = function () {
                return this._bodyArrayBuffer
                  ? l(this) ||
                      (ArrayBuffer.isView(this._bodyArrayBuffer)
                        ? Promise.resolve(
                            this._bodyArrayBuffer.buffer.slice(
                              this._bodyArrayBuffer.byteOffset,
                              this._bodyArrayBuffer.byteOffset +
                                this._bodyArrayBuffer.byteLength
                            )
                          )
                        : Promise.resolve(this._bodyArrayBuffer))
                  : this.blob().then(h);
              })),
            (this.text = function () {
              var e,
                t,
                r,
                n = l(this);
              if (n) return n;
              if (this._bodyBlob)
                return (
                  (e = this._bodyBlob),
                  (r = f((t = new FileReader()))),
                  t.readAsText(e),
                  r
                );
              if (this._bodyArrayBuffer)
                return Promise.resolve(
                  (function (e) {
                    for (
                      var t = new Uint8Array(e), r = Array(t.length), n = 0;
                      n < t.length;
                      n++
                    )
                      r[n] = String.fromCharCode(t[n]);
                    return r.join("");
                  })(this._bodyArrayBuffer)
                );
              if (!this._bodyFormData) return Promise.resolve(this._bodyText);
              throw Error("could not read FormData body as text");
            }),
            r.formData &&
              (this.formData = function () {
                return this.text().then(m);
              }),
            (this.json = function () {
              return this.text().then(JSON.parse);
            }),
            this
          );
        }
        (c.prototype.append = function (e, t) {
          (e = a(e)), (t = s(t));
          var r = this.map[e];
          this.map[e] = r ? r + ", " + t : t;
        }),
          (c.prototype.delete = function (e) {
            delete this.map[a(e)];
          }),
          (c.prototype.get = function (e) {
            return (e = a(e)), this.has(e) ? this.map[e] : null;
          }),
          (c.prototype.has = function (e) {
            return this.map.hasOwnProperty(a(e));
          }),
          (c.prototype.set = function (e, t) {
            this.map[a(e)] = s(t);
          }),
          (c.prototype.forEach = function (e, t) {
            for (var r in this.map)
              this.map.hasOwnProperty(r) && e.call(t, this.map[r], r, this);
          }),
          (c.prototype.keys = function () {
            var e = [];
            return (
              this.forEach(function (t, r) {
                e.push(r);
              }),
              u(e)
            );
          }),
          (c.prototype.values = function () {
            var e = [];
            return (
              this.forEach(function (t) {
                e.push(t);
              }),
              u(e)
            );
          }),
          (c.prototype.entries = function () {
            var e = [];
            return (
              this.forEach(function (t, r) {
                e.push([r, t]);
              }),
              u(e)
            );
          }),
          r.iterable && (c.prototype[Symbol.iterator] = c.prototype.entries);
        var y = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];
        function v(e, t) {
          if (!(this instanceof v))
            throw TypeError(
              'Please use the "new" operator, this DOM object constructor cannot be called as a function.'
            );
          var r,
            n,
            i = (t = t || {}).body;
          if (e instanceof v) {
            if (e.bodyUsed) throw TypeError("Already read");
            (this.url = e.url),
              (this.credentials = e.credentials),
              t.headers || (this.headers = new c(e.headers)),
              (this.method = e.method),
              (this.mode = e.mode),
              (this.signal = e.signal),
              i ||
                null == e._bodyInit ||
                ((i = e._bodyInit), (e.bodyUsed = !0));
          } else this.url = String(e);
          if (
            ((this.credentials =
              t.credentials || this.credentials || "same-origin"),
            (t.headers || !this.headers) && (this.headers = new c(t.headers)),
            (this.method =
              ((n = (r = t.method || this.method || "GET").toUpperCase()),
              y.indexOf(n) > -1 ? n : r)),
            (this.mode = t.mode || this.mode || null),
            (this.signal = t.signal || this.signal),
            (this.referrer = null),
            ("GET" === this.method || "HEAD" === this.method) && i)
          )
            throw TypeError("Body not allowed for GET or HEAD requests");
          if (
            (this._initBody(i),
            ("GET" === this.method || "HEAD" === this.method) &&
              ("no-store" === t.cache || "no-cache" === t.cache))
          ) {
            var o = /([?&])_=[^&]*/;
            o.test(this.url)
              ? (this.url = this.url.replace(o, "$1_=" + new Date().getTime()))
              : (this.url +=
                  (/\?/.test(this.url) ? "&" : "?") +
                  "_=" +
                  new Date().getTime());
          }
        }
        function m(e) {
          var t = new FormData();
          return (
            e
              .trim()
              .split("&")
              .forEach(function (e) {
                if (e) {
                  var r = e.split("="),
                    n = r.shift().replace(/\+/g, " "),
                    i = r.join("=").replace(/\+/g, " ");
                  t.append(decodeURIComponent(n), decodeURIComponent(i));
                }
              }),
            t
          );
        }
        function g(e, t) {
          if (!(this instanceof g))
            throw TypeError(
              'Please use the "new" operator, this DOM object constructor cannot be called as a function.'
            );
          t || (t = {}),
            (this.type = "default"),
            (this.status = void 0 === t.status ? 200 : t.status),
            (this.ok = this.status >= 200 && this.status < 300),
            (this.statusText =
              void 0 === t.statusText ? "" : "" + t.statusText),
            (this.headers = new c(t.headers)),
            (this.url = t.url || ""),
            this._initBody(e);
        }
        (v.prototype.clone = function () {
          return new v(this, { body: this._bodyInit });
        }),
          p.call(v.prototype),
          p.call(g.prototype),
          (g.prototype.clone = function () {
            return new g(this._bodyInit, {
              status: this.status,
              statusText: this.statusText,
              headers: new c(this.headers),
              url: this.url,
            });
          }),
          (g.error = function () {
            var e = new g(null, { status: 0, statusText: "" });
            return (e.type = "error"), e;
          });
        var b = [301, 302, 303, 307, 308];
        (g.redirect = function (e, t) {
          if (-1 === b.indexOf(t)) throw RangeError("Invalid status code");
          return new g(null, { status: t, headers: { location: e } });
        }),
          (e.DOMException = t.DOMException);
        try {
          new e.DOMException();
        } catch (t) {
          (e.DOMException = function (e, t) {
            (this.message = e), (this.name = t);
            var r = Error(e);
            this.stack = r.stack;
          }),
            (e.DOMException.prototype = Object.create(Error.prototype)),
            (e.DOMException.prototype.constructor = e.DOMException);
        }
        function w(n, i) {
          return new Promise(function (o, a) {
            var u = new v(n, i);
            if (u.signal && u.signal.aborted)
              return a(new e.DOMException("Aborted", "AbortError"));
            var l = new XMLHttpRequest();
            function f() {
              l.abort();
            }
            (l.onload = function () {
              var e,
                t,
                r = {
                  status: l.status,
                  statusText: l.statusText,
                  headers:
                    ((e = l.getAllResponseHeaders() || ""),
                    (t = new c()),
                    e
                      .replace(/\r?\n[\t ]+/g, " ")
                      .split("\r")
                      .map(function (e) {
                        return 0 === e.indexOf("\n")
                          ? e.substr(1, e.length)
                          : e;
                      })
                      .forEach(function (e) {
                        var r = e.split(":"),
                          n = r.shift().trim();
                        if (n) {
                          var i = r.join(":").trim();
                          t.append(n, i);
                        }
                      }),
                    t),
                };
              r.url =
                "responseURL" in l
                  ? l.responseURL
                  : r.headers.get("X-Request-URL");
              var n = "response" in l ? l.response : l.responseText;
              setTimeout(function () {
                o(new g(n, r));
              }, 0);
            }),
              (l.onerror = function () {
                setTimeout(function () {
                  a(TypeError("Network request failed"));
                }, 0);
              }),
              (l.ontimeout = function () {
                setTimeout(function () {
                  a(TypeError("Network request failed"));
                }, 0);
              }),
              (l.onabort = function () {
                setTimeout(function () {
                  a(new e.DOMException("Aborted", "AbortError"));
                }, 0);
              }),
              l.open(
                u.method,
                (function (e) {
                  try {
                    return "" === e && t.location.href ? t.location.href : e;
                  } catch (t) {
                    return e;
                  }
                })(u.url),
                !0
              ),
              "include" === u.credentials
                ? (l.withCredentials = !0)
                : "omit" === u.credentials && (l.withCredentials = !1),
              "responseType" in l &&
                (r.blob
                  ? (l.responseType = "blob")
                  : r.arrayBuffer &&
                    u.headers.get("Content-Type") &&
                    -1 !==
                      u.headers
                        .get("Content-Type")
                        .indexOf("application/octet-stream") &&
                    (l.responseType = "arraybuffer")),
              !i || "object" != typeof i.headers || i.headers instanceof c
                ? u.headers.forEach(function (e, t) {
                    l.setRequestHeader(t, e);
                  })
                : Object.getOwnPropertyNames(i.headers).forEach(function (e) {
                    l.setRequestHeader(e, s(i.headers[e]));
                  }),
              u.signal &&
                (u.signal.addEventListener("abort", f),
                (l.onreadystatechange = function () {
                  4 === l.readyState &&
                    u.signal.removeEventListener("abort", f);
                })),
              l.send(void 0 === u._bodyInit ? null : u._bodyInit);
          });
        }
        (w.polyfill = !0),
          t.fetch ||
            ((t.fetch = w), (t.Headers = c), (t.Request = v), (t.Response = g)),
          (e.Headers = c),
          (e.Request = v),
          (e.Response = g),
          (e.fetch = w);
      })({}),
        (i.fetch.ponyfill = !0),
        delete i.fetch.polyfill;
      var o = n.fetch ? n : i;
      ((t = o.fetch).default = o.fetch),
        (t.fetch = o.fetch),
        (t.Headers = o.Headers),
        (t.Request = o.Request),
        (t.Response = o.Response),
        (e.exports = t);
    },
    3454: function (e, t, r) {
      "use strict";
      var n, i;
      e.exports =
        (null == (n = r.g.process) ? void 0 : n.env) &&
        "object" == typeof (null == (i = r.g.process) ? void 0 : i.env)
          ? r.g.process
          : r(7663);
    },
    6840: function (e, t, r) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/_app",
        function () {
          return r(8430);
        },
      ]);
    },
    7410: function (e, t, r) {
      "use strict";
      var n = r(2729),
        i = r(1686),
        o = r(4608);
      function a() {
        let e = (0, n._)([
          "\n  width: ",
          ";\n  display: flex;\n  flex-direction: column;\n  justify-items: ",
          ";\n  align-items: ",
          ";\n  flex-grow: ",
          ";\n  flex-basis: ",
          ";\n\n  @media (max-width: ",
          "px) {\n    width: ",
          ";\n    justify-items: ",
          ";\n    align-items: ",
          ";\n  }\n",
        ]);
        return (
          (a = function () {
            return e;
          }),
          e
        );
      }
      function s() {
        let e = (0, n._)(["\n  width: 100%;\n  align-items: center;\n"]);
        return (
          (s = function () {
            return e;
          }),
          e
        );
      }
      function u() {
        let e = (0, n._)([
          "\n  display: grid;\n  grid-auto-rows: auto;\n  grid-row-gap: ",
          ";\n  justify-items: ",
          ";\n",
        ]);
        return (
          (u = function () {
            return e;
          }),
          e
        );
      }
      let c = i.ZP.div(
        a(),
        (e) => {
          let { width: t } = e;
          return t || "initial";
        },
        (e) => {
          let { $justify: t } = e;
          return t && t;
        },
        (e) => {
          let { $align: t } = e;
          return t && t;
        },
        (e) => {
          let { $grow: t } = e;
          return "grow" === t ? 1 : 0;
        },
        (e) => {
          let { $grow: t } = e;
          return "grow" === t ? 0 : 1;
        },
        o.e.upToMedium,
        (e) => {
          let { $widthMobile: t } = e;
          return t || "100%";
        },
        (e) => {
          let { $justifyMobile: t } = e;
          return t && t;
        },
        (e) => {
          let { $alignMobile: t } = e;
          return t && t;
        }
      );
      (0, i.ZP)(c)(s()),
        i.ZP.div(
          u(),
          (e) => {
            let { $gap: t } = e;
            return (
              ("sm" === t && "8px") ||
              ("md" === t && "12px") ||
              ("lg" === t && "24px") ||
              t
            );
          },
          (e) => {
            let { $justify: t } = e;
            return t && t;
          }
        ),
        (t.ZP = c);
    },
    5215: function (e, t, r) {
      "use strict";
      var n = r(2729);
      function i() {
        let e = (0, n._)(["\n        max-width: 85%;\n    "]);
        return (
          (i = function () {
            return e;
          }),
          e
        );
      }
      function o() {
        let e = (0, n._)([
          "\n    max-width: 1140px;\n    z-index: 1;\n    margin: 0 auto;\n\n    ",
          ";\n",
        ]);
        return (
          (o = function () {
            return e;
          }),
          e
        );
      }
      let a = r(1686).ZP.div(o(), (e) => {
        let { theme: t } = e;
        return t.mediaWidth.upToLarge(i());
      });
      t.Z = a;
    },
    9594: function (e, t, r) {
      "use strict";
      r.d(t, {
        Y0: function () {
          return v;
        },
      });
      var n = r(2729),
        i = r(1686),
        o = r(4608);
      function a() {
        let e = (0, n._)([
          "\n  width: ",
          ";\n  display: flex;\n  padding: 0;\n  align-items: ",
          ";\n  justify-content: ",
          ";\n  padding: ",
          ";\n  border: ",
          ";\n  border-radius: ",
          ";\n",
        ]);
        return (
          (a = function () {
            return e;
          }),
          e
        );
      }
      function s() {
        let e = (0, n._)(["\n  justify-content: space-between;\n"]);
        return (
          (s = function () {
            return e;
          }),
          e
        );
      }
      function u() {
        let e = (0, n._)(["\n  display: flex;\n  align-items: flex-end;\n"]);
        return (
          (u = function () {
            return e;
          }),
          e
        );
      }
      function c() {
        let e = (0, n._)([
          "\n  flex-wrap: wrap;\n  margin: ",
          ";\n  justify-content: ",
          ";\n\n  & > * {\n    margin: ",
          " !important;\n  }\n",
        ]);
        return (
          (c = function () {
            return e;
          }),
          e
        );
      }
      function l() {
        let e = (0, n._)(["\n  width: fit-content;\n  margin: ", ";\n"]);
        return (
          (l = function () {
            return e;
          }),
          e
        );
      }
      function f() {
        let e = (0, n._)([
          "\n    flex-direction: column;\n    row-gap: 1rem;\n  ",
        ]);
        return (
          (f = function () {
            return e;
          }),
          e
        );
      }
      function h() {
        let e = (0, n._)(["\n  ", ";\n"]);
        return (
          (h = function () {
            return e;
          }),
          e
        );
      }
      function d() {
        let e = (0, n._)([
          "\n  width: ",
          ";\n  display: flex;\n  padding: 0;\n  align-items: ",
          ";\n  justify-content: ",
          ";\n  padding: ",
          ";\n  border: ",
          ";\n  border-radius: ",
          ";\n  flex-wrap: ",
          ";\n  flex-direction: ",
          ";\n  position: relative;\n\n  > *:first-child {\n    padding-left: 0px;\n  }\n  > *:last-child {\n    padding-right: 0px;\n  }\n  > * {\n    padding: ",
          "px;\n  }\n\n  @media (max-width: ",
          "px) {\n    width: 100%;\n    justify-content: ",
          ";\n    align-items: ",
          ";\n    flex-direction: ",
          ";\n\n    ",
          "\n  }\n",
        ]);
        return (
          (d = function () {
            return e;
          }),
          e
        );
      }
      let p = i.ZP.div(
          a(),
          (e) => {
            let { width: t } = e;
            return null != t ? t : "100%";
          },
          (e) => {
            let { $align: t } = e;
            return null != t ? t : "center";
          },
          (e) => {
            let { $justify: t } = e;
            return null != t ? t : "flex-start";
          },
          (e) => {
            let { padding: t } = e;
            return t;
          },
          (e) => {
            let { border: t } = e;
            return t;
          },
          (e) => {
            let { borderRadius: t } = e;
            return t;
          }
        ),
        y = (0, i.ZP)(p)(s());
      i.ZP.div(u()),
        (0, i.ZP)(p)(
          c(),
          (e) => {
            let { $gap: t } = e;
            return t && "-".concat(t);
          },
          (e) => {
            let { $justify: t } = e;
            return t && t;
          },
          (e) => {
            let { $gap: t } = e;
            return t;
          }
        ),
        (0, i.ZP)(p)(l(), (e) => {
          let { $gap: t } = e;
          return t && "-".concat(t);
        }),
        (0, i.ZP)(y)(h(), (e) => {
          let { theme: t } = e;
          return t.mediaWidth.upToSmall(f());
        });
      let v = i.ZP.div(
        d(),
        (e) => {
          let { width: t } = e;
          return null != t ? t : "100%";
        },
        (e) => {
          let { $align: t } = e;
          return null != t ? t : "center";
        },
        (e) => {
          let { $justify: t } = e;
          return null != t ? t : "flex-start";
        },
        (e) => {
          let { padding: t } = e;
          return t;
        },
        (e) => {
          let { border: t } = e;
          return t;
        },
        (e) => {
          let { borderRadius: t } = e;
          return t;
        },
        (e) => {
          let { wrap: t } = e;
          return t || "nowrap";
        },
        (e) => {
          let { $direction: t } = e;
          return t || "row";
        },
        (e) => {
          let { $gap: t } = e;
          return t ? t / 2 : 0;
        },
        o.e.upToMedium,
        (e) => {
          let { $justifyMobile: t } = e;
          return null != t ? t : "center";
        },
        (e) => {
          let { $alignMobile: t } = e;
          return null != t ? t : "center";
        },
        (e) => {
          let { $directionMobile: t } = e;
          return t || "column";
        },
        (e) => {
          let { $directionMobile: t } = e;
          return "row" === t
            ? "> * {\n            }"
            : "> * {\n                padding-left: 0;\n                padding-right: 0;\n            }";
        }
      );
      t.ZP = p;
    },
    6691: function (e, t) {
      "use strict";
      var r, n, i, o;
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var r in t)
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        })(t, {
          ACTION_FAST_REFRESH: function () {
            return f;
          },
          ACTION_NAVIGATE: function () {
            return s;
          },
          ACTION_PREFETCH: function () {
            return l;
          },
          ACTION_REFRESH: function () {
            return a;
          },
          ACTION_RESTORE: function () {
            return u;
          },
          ACTION_SERVER_ACTION: function () {
            return h;
          },
          ACTION_SERVER_PATCH: function () {
            return c;
          },
          PrefetchCacheEntryStatus: function () {
            return n;
          },
          PrefetchKind: function () {
            return r;
          },
          isThenable: function () {
            return d;
          },
        });
      let a = "refresh",
        s = "navigate",
        u = "restore",
        c = "server-patch",
        l = "prefetch",
        f = "fast-refresh",
        h = "server-action";
      function d(e) {
        return (
          e &&
          ("object" == typeof e || "function" == typeof e) &&
          "function" == typeof e.then
        );
      }
      ((i = r || (r = {})).AUTO = "auto"),
        (i.FULL = "full"),
        (i.TEMPORARY = "temporary"),
        ((o = n || (n = {})).fresh = "fresh"),
        (o.reusable = "reusable"),
        (o.expired = "expired"),
        (o.stale = "stale"),
        ("function" == typeof t.default ||
          ("object" == typeof t.default && null !== t.default)) &&
          void 0 === t.default.__esModule &&
          (Object.defineProperty(t.default, "__esModule", { value: !0 }),
          Object.assign(t.default, t),
          (e.exports = t.default));
    },
    4318: function (e, t, r) {
      "use strict";
      function n(e, t, r, n) {
        return !1;
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "getDomainLocale", {
          enumerable: !0,
          get: function () {
            return n;
          },
        }),
        r(8364),
        ("function" == typeof t.default ||
          ("object" == typeof t.default && null !== t.default)) &&
          void 0 === t.default.__esModule &&
          (Object.defineProperty(t.default, "__esModule", { value: !0 }),
          Object.assign(t.default, t),
          (e.exports = t.default));
    },
    9577: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return w;
          },
        });
      let n = r(8754),
        i = r(5893),
        o = n._(r(7294)),
        a = r(1401),
        s = r(2045),
        u = r(7420),
        c = r(7201),
        l = r(1443),
        f = r(9953),
        h = r(5320),
        d = r(2905),
        p = r(4318),
        y = r(953),
        v = r(6691),
        m = new Set();
      function g(e, t, r, n, i, o) {
        if (o || (0, s.isLocalURL)(t)) {
          if (!n.bypassPrefetchedCheck) {
            let i =
              t +
              "%" +
              r +
              "%" +
              (void 0 !== n.locale
                ? n.locale
                : "locale" in e
                ? e.locale
                : void 0);
            if (m.has(i)) return;
            m.add(i);
          }
          (async () => (o ? e.prefetch(t, i) : e.prefetch(t, r, n)))().catch(
            (e) => {}
          );
        }
      }
      function b(e) {
        return "string" == typeof e ? e : (0, u.formatUrl)(e);
      }
      let w = o.default.forwardRef(function (e, t) {
        let r, n;
        let {
          href: u,
          as: m,
          children: w,
          prefetch: _ = null,
          passHref: x,
          replace: S,
          shallow: O,
          scroll: E,
          locale: k,
          onClick: T,
          onMouseEnter: j,
          onTouchStart: I,
          legacyBehavior: D = !1,
          ...P
        } = e;
        (r = w),
          D &&
            ("string" == typeof r || "number" == typeof r) &&
            (r = (0, i.jsx)("a", { children: r }));
        let R = o.default.useContext(f.RouterContext),
          A = o.default.useContext(h.AppRouterContext),
          C = null != R ? R : A,
          N = !R,
          F = !1 !== _,
          M = null === _ ? v.PrefetchKind.AUTO : v.PrefetchKind.FULL,
          { href: q, as: L } = o.default.useMemo(() => {
            if (!R) {
              let e = b(u);
              return { href: e, as: m ? b(m) : e };
            }
            let [e, t] = (0, a.resolveHref)(R, u, !0);
            return { href: e, as: m ? (0, a.resolveHref)(R, m) : t || e };
          }, [R, u, m]),
          V = o.default.useRef(q),
          Q = o.default.useRef(L);
        D && (n = o.default.Children.only(r));
        let z = D ? n && "object" == typeof n && n.ref : t,
          [B, U, W] = (0, d.useIntersection)({ rootMargin: "200px" }),
          $ = o.default.useCallback(
            (e) => {
              (Q.current !== L || V.current !== q) &&
                (W(), (Q.current = L), (V.current = q)),
                B(e),
                z &&
                  ("function" == typeof z
                    ? z(e)
                    : "object" == typeof z && (z.current = e));
            },
            [L, z, q, W, B]
          );
        o.default.useEffect(() => {
          C && U && F && g(C, q, L, { locale: k }, { kind: M }, N);
        }, [L, q, U, k, F, null == R ? void 0 : R.locale, C, N, M]);
        let G = {
          ref: $,
          onClick(e) {
            D || "function" != typeof T || T(e),
              D &&
                n.props &&
                "function" == typeof n.props.onClick &&
                n.props.onClick(e),
              C &&
                !e.defaultPrevented &&
                (function (e, t, r, n, i, a, u, c, l) {
                  let { nodeName: f } = e.currentTarget;
                  if (
                    "A" === f.toUpperCase() &&
                    ((function (e) {
                      let t = e.currentTarget.getAttribute("target");
                      return (
                        (t && "_self" !== t) ||
                        e.metaKey ||
                        e.ctrlKey ||
                        e.shiftKey ||
                        e.altKey ||
                        (e.nativeEvent && 2 === e.nativeEvent.which)
                      );
                    })(e) ||
                      (!l && !(0, s.isLocalURL)(r)))
                  )
                    return;
                  e.preventDefault();
                  let h = () => {
                    let e = null == u || u;
                    "beforePopState" in t
                      ? t[i ? "replace" : "push"](r, n, {
                          shallow: a,
                          locale: c,
                          scroll: e,
                        })
                      : t[i ? "replace" : "push"](n || r, { scroll: e });
                  };
                  l ? o.default.startTransition(h) : h();
                })(e, C, q, L, S, O, E, k, N);
          },
          onMouseEnter(e) {
            D || "function" != typeof j || j(e),
              D &&
                n.props &&
                "function" == typeof n.props.onMouseEnter &&
                n.props.onMouseEnter(e),
              C &&
                (F || !N) &&
                g(
                  C,
                  q,
                  L,
                  { locale: k, priority: !0, bypassPrefetchedCheck: !0 },
                  { kind: M },
                  N
                );
          },
          onTouchStart: function (e) {
            D || "function" != typeof I || I(e),
              D &&
                n.props &&
                "function" == typeof n.props.onTouchStart &&
                n.props.onTouchStart(e),
              C &&
                (F || !N) &&
                g(
                  C,
                  q,
                  L,
                  { locale: k, priority: !0, bypassPrefetchedCheck: !0 },
                  { kind: M },
                  N
                );
          },
        };
        if ((0, c.isAbsoluteUrl)(L)) G.href = L;
        else if (!D || x || ("a" === n.type && !("href" in n.props))) {
          let e = void 0 !== k ? k : null == R ? void 0 : R.locale,
            t =
              (null == R ? void 0 : R.isLocaleDomain) &&
              (0, p.getDomainLocale)(
                L,
                e,
                null == R ? void 0 : R.locales,
                null == R ? void 0 : R.domainLocales
              );
          G.href =
            t ||
            (0, y.addBasePath)(
              (0, l.addLocale)(L, e, null == R ? void 0 : R.defaultLocale)
            );
        }
        return D
          ? o.default.cloneElement(n, G)
          : (0, i.jsx)("a", { ...P, ...G, children: r });
      });
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    2905: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "useIntersection", {
          enumerable: !0,
          get: function () {
            return u;
          },
        });
      let n = r(7294),
        i = r(3815),
        o = "function" == typeof IntersectionObserver,
        a = new Map(),
        s = [];
      function u(e) {
        let { rootRef: t, rootMargin: r, disabled: u } = e,
          c = u || !o,
          [l, f] = (0, n.useState)(!1),
          h = (0, n.useRef)(null),
          d = (0, n.useCallback)((e) => {
            h.current = e;
          }, []);
        return (
          (0, n.useEffect)(() => {
            if (o) {
              if (c || l) return;
              let e = h.current;
              if (e && e.tagName)
                return (function (e, t, r) {
                  let {
                    id: n,
                    observer: i,
                    elements: o,
                  } = (function (e) {
                    let t;
                    let r = {
                        root: e.root || null,
                        margin: e.rootMargin || "",
                      },
                      n = s.find(
                        (e) => e.root === r.root && e.margin === r.margin
                      );
                    if (n && (t = a.get(n))) return t;
                    let i = new Map();
                    return (
                      (t = {
                        id: r,
                        observer: new IntersectionObserver((e) => {
                          e.forEach((e) => {
                            let t = i.get(e.target),
                              r = e.isIntersecting || e.intersectionRatio > 0;
                            t && r && t(r);
                          });
                        }, e),
                        elements: i,
                      }),
                      s.push(r),
                      a.set(r, t),
                      t
                    );
                  })(r);
                  return (
                    o.set(e, t),
                    i.observe(e),
                    function () {
                      if ((o.delete(e), i.unobserve(e), 0 === o.size)) {
                        i.disconnect(), a.delete(n);
                        let e = s.findIndex(
                          (e) => e.root === n.root && e.margin === n.margin
                        );
                        e > -1 && s.splice(e, 1);
                      }
                    }
                  );
                })(e, (e) => e && f(e), {
                  root: null == t ? void 0 : t.current,
                  rootMargin: r,
                });
            } else if (!l) {
              let e = (0, i.requestIdleCallback)(() => f(!0));
              return () => (0, i.cancelIdleCallback)(e);
            }
          }, [c, r, t, l, h.current]),
          [
            d,
            l,
            (0, n.useCallback)(() => {
              f(!1);
            }, []),
          ]
        );
      }
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    8430: function (e, t, r) {
      "use strict";
      let n;
      r.r(t),
        r.d(t, {
          default: function () {
            return i3;
          },
        });
      var i,
        o,
        a,
        s,
        u,
        c,
        l,
        f,
        h,
        d,
        p,
        y,
        v,
        m = r(5893),
        g = r(7294),
        b = r(9008),
        w = r.n(b),
        _ = r(1686),
        x = r(2729),
        S = r(1664),
        O = r.n(S),
        E = r(9594),
        k = r(7410);
      let T = [
        {
          label: "Swap",
          path: "https://app.evileye.io",
          class: "",
          type: "external",
        },
        {
          label: "Apps",
          path: "https://app.evileye.io/apps",
          class: "",
          type: "external",
        },
        { label: "About", path: "/about", class: "", type: "internal" },
      ];
      function j() {
        let e = (0, x._)(["\n        display: none;\n    "]);
        return (
          (j = function () {
            return e;
          }),
          e
        );
      }
      function I() {
        let e = (0, x._)([
          "\n  ",
          ";\n\n  nav {\n    width: 100%;\n    padding-top: 12px;\n  }\n  nav a {\n    color: ",
          ";\n    padding: 0.6rem 1rem;\n    font-size: 1.8em;\n    font-weight: 600;\n    display: inline-block;\n    -webkit-transition: ",
          ";\n    -moz-transition: ",
          ";\n    -o-transition: ",
          ";\n    transition: ",
          ";\n  }\n  nav a:hover {\n    color: ",
          ";\n  }\n  nav a.menu_outline {\n    margin-left: 15px;\n    padding: 0.6rem 2rem;\n    border: 1px solid ",
          ";\n    border-radius: ",
          ";\n    background: transparent;\n    -webkit-transition: ",
          ";\n    -moz-transition: ",
          ";\n    -o-transition: ",
          ";\n    transition: ",
          ";\n  }\n  nav a.menu_outline:hover {\n    color: ",
          ";\n    background: ",
          ";\n  }\n",
        ]);
        return (
          (I = function () {
            return e;
          }),
          e
        );
      }
      let D = _.ZP.div(
        I(),
        (e) => {
          let { theme: t } = e;
          return t.mediaWidth.upToSmall(j());
        },
        (e) => {
          let { theme: t } = e;
          return t.white;
        },
        (e) => {
          let { theme: t } = e;
          return t.transition;
        },
        (e) => {
          let { theme: t } = e;
          return t.transition;
        },
        (e) => {
          let { theme: t } = e;
          return t.transition;
        },
        (e) => {
          let { theme: t } = e;
          return t.transition;
        },
        (e) => {
          let { theme: t } = e;
          return t.linkColor;
        },
        (e) => {
          let { theme: t } = e;
          return t.buttonBorderColor;
        },
        (e) => {
          let { theme: t } = e;
          return t.buttonBorderRadius;
        },
        (e) => {
          let { theme: t } = e;
          return t.transition;
        },
        (e) => {
          let { theme: t } = e;
          return t.transition;
        },
        (e) => {
          let { theme: t } = e;
          return t.transition;
        },
        (e) => {
          let { theme: t } = e;
          return t.transition;
        },
        (e) => {
          let { theme: t } = e;
          return t.white;
        },
        (e) => {
          let { theme: t } = e;
          return t.linkColor;
        }
      );
      var P = (e) => {
        let { items: t } = e;
        return (0, m.jsx)(D, {
          children: (0, m.jsx)("nav", {
            className: "mainMenu",
            children: t.map((e) =>
              "internal" === e.type
                ? (0, m.jsx)(
                    O(),
                    { href: e.path, className: e.class, children: e.label },
                    e.path
                  )
                : (0, m.jsx)(
                    "a",
                    {
                      href: e.path,
                      className: e.class,
                      target: "_blank",
                      children: e.label,
                    },
                    e.path
                  )
            ),
          }),
        });
      };
      function R() {
        let e = (0, x._)(["\n      display: none;\n    "]);
        return (
          (R = function () {
            return e;
          }),
          e
        );
      }
      function A() {
        let e = (0, x._)([
          "\n    position: absolute;\n    top: 40px;\n    right: 10px;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-around;\n    align-items: center;\n    width: 40px;\n    height: 20px;\n    padding: 10px 0;\n    background: transparent;\n    border: none;\n    cursor: pointer;\n    box-sizing: initial;\n    z-index: 10;\n    border: 1px solid ",
          ";\n    border-radius: 100%;\n    transform: translate(0, -74%);\n\n    ",
          ";\n\n    &:focus {\n      outline: none;\n    }\n\n    span {\n      width: 60%;\n      height: 2px;\n      background: ",
          ";\n      border-radius: 10px;\n      transition: all 0.3s linear;\n      position: relative;\n      transform-origin: 1px;\n  \n      :first-child {\n        width: ",
          ";\n        transform: ",
          ";\n      }\n  \n      :nth-child(2) {\n        width: 60%;\n        opacity: ",
          ";\n        transform: ",
          ";\n      }\n  \n      :nth-child(3) {\n        width: ",
          ";\n        transform: ",
          ";\n      }\n    }\n",
        ]);
        return (
          (A = function () {
            return e;
          }),
          e
        );
      }
      let C = _.ZP.div(
        A(),
        (e) => {
          let { theme: t } = e;
          return t.accent;
        },
        (e) => {
          let { theme: t } = e;
          return t.mediaMinWidth.upToSmall(R());
        },
        (e) => {
          let { theme: t } = e;
          return t.white;
        },
        (e) => {
          let { open: t } = e;
          return t ? "70%" : "32%";
        },
        (e) => {
          let { open: t } = e;
          return t ? "rotate(45deg) translate(1px, -5px)" : "rotate(0)";
        },
        (e) => {
          let { open: t } = e;
          return t ? "0" : "1";
        },
        (e) => {
          let { open: t } = e;
          return t ? "translateX(20px)" : "translateX(0)";
        },
        (e) => {
          let { open: t } = e;
          return t ? "70%" : "32%";
        },
        (e) => {
          let { open: t } = e;
          return t ? "rotate(-45deg) translate(2px, 4px)" : "rotate(0)";
        }
      );
      var N = (e) => {
        let { open: t, setOpen: r, ...n } = e;
        return (0, m.jsxs)(C, {
          "aria-label": "Toggle menu",
          "aria-expanded": !!t,
          open: t,
          onClick: () => r(!t),
          ...n,
          children: [
            (0, m.jsx)("span", {}),
            (0, m.jsx)("span", {}),
            (0, m.jsx)("span", {}),
          ],
        });
      };
      function F() {
        let e = (0, x._)([
          "\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  background: ",
          ";\n  transform: ",
          ";\n  height: 100vh;\n  width: 100%;\n  text-align: left;\n  padding: 2rem;\n  position: fixed;\n  z-index: 90;\n  top: 0;\n  right: 0;\n  transition: ",
          ";\n\n  ul {\n    padding: 0;\n    margin: 0;\n    list-style: none;\n  }\n\n  a {\n    font-size: 2rem;\n    padding: 2rem 0;\n    font-weight: bold;\n    letter-spacing: 0.2rem;\n    color: ",
          ";\n    text-decoration: none;\n    transition: color 0.3s linear;\n    line-height: 1.4;\n    display: block;\n    text-align: center;\n\n    @media (max-width: 767px) {\n      font-size: 1.5rem;\n    }\n\n    &:hover {\n      color: ",
          ";\n    }\n  }\n",
        ]);
        return (
          (F = function () {
            return e;
          }),
          e
        );
      }
      let M = _.ZP.div(
        F(),
        (e) => {
          let { theme: t } = e;
          return t.background;
        },
        (e) => {
          let { open: t } = e;
          return t ? "translateX(0)" : "translateX(100%)";
        },
        (e) => {
          let { theme: t } = e;
          return t.transition;
        },
        (e) => {
          let { theme: t } = e;
          return t.white;
        },
        (e) => {
          let { theme: t } = e;
          return t.accent;
        }
      );
      var q = (e) => {
        let { items: t, open: r, setOpen: n } = e,
          i = !!r;
        return (0, m.jsx)(M, {
          open: r,
          "aria-label": "Mobile menu",
          "aria-hidden": !i,
          children: (0, m.jsx)("nav", {
            className: "mobileMenu",
            children: (0, m.jsx)("ul", {
              children: t.map((e, t) =>
                "internal" === e.type
                  ? (0, m.jsx)(
                      "li",
                      {
                        children: (0, m.jsx)(O(), {
                          href: e.path,
                          className: e.class,
                          onClick: () => n(!r),
                          children: e.label,
                        }),
                      },
                      t
                    )
                  : (0, m.jsx)(
                      "li",
                      {
                        children: (0, m.jsx)("a", {
                          href: e.path,
                          className: e.class,
                          target: "_blank",
                          children: e.label,
                        }),
                      },
                      t
                    )
              ),
            }),
          }),
        });
      };
      function L() {
        let e = (0, x._)(["\n        display: none;\n    "]);
        return (
          (L = function () {
            return e;
          }),
          e
        );
      }
      function V() {
        let e = (0, x._)(["\n  width: 180px;\n\n  ", ";\n"]);
        return (
          (V = function () {
            return e;
          }),
          e
        );
      }
      function Q() {
        let e = (0, x._)(["\n        display: block;\n    "]);
        return (
          (Q = function () {
            return e;
          }),
          e
        );
      }
      function z() {
        let e = (0, x._)([
          "\n  display: none;\n  width: 120px;\n  margin-top: 20px;\n\n  ",
          ";\n",
        ]);
        return (
          (z = function () {
            return e;
          }),
          e
        );
      }
      function B() {
        let e = (0, x._)([
          "\n  max-width: 100%;\n  padding: 15px 2.5%;\n  margin: 0 auto;\n  position: ",
          ";\n  width: 100%;\n  top: 0;\n  z-index: 99;\n  position: fixed;\n  transition: all 300ms ease-in-out;\n\n  &.sticky {\n    background-color: ",
          ";\n\n    & nav {\n      padding-top: 0 !important;\n    }\n\n    ",
          " {\n      top: 21px;\n    }\n\n    ",
          " {\n      width: 120px;\n    }\n    ",
          " {\n      width: 94px;\n      margin-top: 5px;\n    }\n  }\n",
        ]);
        return (
          (B = function () {
            return e;
          }),
          e
        );
      }
      let U = _.ZP.div(V(), (e) => {
          let { theme: t } = e;
          return t.mediaWidth.upToSmall(L());
        }),
        W = _.ZP.div(z(), (e) => {
          let { theme: t } = e;
          return t.mediaWidth.upToSmall(Q());
        }),
        $ = _.ZP.div(
          B(),
          (e) => {
            let { open: t } = e;
            return t ? "sticky" : "relative";
          },
          (e) => {
            let { theme: t } = e;
            return t.background_over;
          },
          C,
          U,
          W
        );
      var G = (e) => {
          let { open: t, setOpen: r } = e,
            [n, i] = (0, g.useState)(!1);
          return (
            (0, g.useEffect)(() => {
              let e = () => i(window.scrollY > 50);
              return (
                window.addEventListener("scroll", e),
                () => window.removeEventListener("scroll", e)
              );
            }, []),
            (0, m.jsx)($, {
              open: t,
              className: n ? "sticky" : "",
              children: (0, m.jsxs)(E.Y0, {
                $justify: "space-between",
                $justifyMobile: "center",
                $alignMobile: "center",
                $directionMobile: "column",
                children: [
                  (0, m.jsxs)(k.ZP, {
                    $justifyMobile: "center",
                    $alignMobile: "center",
                    children: [
                      (0, m.jsx)(U, {
                        children: (0, m.jsx)(O(), {
                          href: "/",
                          children: (0, m.jsx)("img", {
                            src: "/img/evileye-logo.svg",
                            alt: "EvilEye",
                          }),
                        }),
                      }),
                      (0, m.jsx)(W, {
                        children: (0, m.jsx)(O(), {
                          href: "/",
                          children: (0, m.jsx)("img", {
                            src: "/img/evileye-logo-txt.svg",
                            alt: "EvilEye",
                          }),
                        }),
                      }),
                    ],
                  }),
                  (0, m.jsxs)(k.ZP, {
                    $justifyMobile: "center",
                    $alignMobile: "center",
                    children: [
                      (0, m.jsx)(P, { items: T }),
                      (0, m.jsx)(N, { open: t, setOpen: r }),
                    ],
                  }),
                ],
              }),
            })
          );
        },
        H = r(5215),
        Y = (e) => {
          let { props: t } = e;
          return (0, m.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 48 48",
            ...t,
            children: (0, m.jsx)("path", {
              d: "M46.8 22.2c-.1-1.3-.7-2.5-1.5-3.4-.8-.9-1.9-1.6-3.1-1.9-.5-.1-1-.2-1.5-.2-1.2 0-2.3.3-3.3 1-.3.2-.5.3-.7.5-.1-.1-.2-.1-.3-.2-3.3-1.9-7-2.8-10.7-3 0-1.5.2-3 .8-4.3.4-.9 1.3-1.5 2.3-1.6h.6c1.3 0 2.6.5 3.8 1v.2c0 1.4.6 2.6 1.5 3.5.9.9 2.1 1.6 3.4 1.7h.6c1.3 0 2.6-.5 3.6-1.4 1-.9 1.7-2.1 1.8-3.4v-.6c0-1.1-.3-2.1-.9-3-.6-.9-1.4-1.5-2.4-1.9-.8-.2-1.6-.4-2.3-.4-.7 0-1.4.1-2 .3-1.1.4-2 1.2-2.7 2.2-1.5-.6-3-1-4.6-1-.6 0-1.2.1-1.8.2-1.6.4-2.9 1.5-3.6 2.9-.9 1.7-1.1 3.7-1.2 5.5-3.8.2-7.6 1-10.9 2.9l-.6.3c-.5-.4-1.2-.7-1.8-1-.7-.3-1.5-.4-2.2-.4h-.5-.1c-1.5 0-2.9.7-4 1.8-1 1.1-1.7 2.5-1.7 4.1 0 1.1.4 2.1 1 3 .6.8 1.3 1.5 2.2 2-.1.4-.1.9-.1 1.3 0 2 .6 4 1.6 5.6 1.9 3.1 5 5.3 8.3 6.6 3.2 1.3 6.6 1.9 9.9 1.9 2.3 0 4.6-.3 6.8-.8 4.1-1.1 8.2-3.2 10.9-6.7 1.4-1.9 2.3-4.3 2.3-6.7 0-.4 0-.9-.1-1.3.9-.5 1.7-1.2 2.2-2.1.6-.9 1-2 1-3.1v-.1zM36.5 8.5c.4-.4.9-.8 1.4-.9.2-.1.4-.1.6-.1.6 0 1.3.3 1.8.8s.8 1.1.8 1.8v.1c0 .6-.3 1.3-.8 1.7-.5.4-1.1.7-1.7.7h-.1c-.6 0-1.2-.3-1.7-.7-.5-.4-.8-1-.8-1.7V10c-.1-.5.1-1 .5-1.5zM4.8 24.7c-.3-.2-.5-.5-.7-.8-.2-.4-.4-.9-.4-1.3v-.2c0-.8.4-1.4.9-1.9s1.3-.8 2-.8h.3c.5 0 1 .2 1.5.4-1.4 1.2-2.7 2.8-3.6 4.6zm9.5 3.7c-.4-.5-.6-1.1-.6-1.7 0-.3 0-.6.1-.8.3-1 1.2-1.7 2.2-2 .2 0 .4-.1.6-.1.7 0 1.5.3 2 .8s.9 1.2.9 2v.2c0 .8-.4 1.5-.9 2s-1.3.8-2 .8c-.3 0-.6-.1-.9-.2-.5-.2-1-.6-1.4-1zm18.2 6.2c-.1.2-.2.5-.3.6-.2.2-.3.3-.5.4-.4.2-.7.4-1 .5-2.2 1-4.6 1.6-7.1 1.6-2.7 0-5.4-.7-7.7-2.2-.2-.1-.4-.3-.5-.5-.1-.2-.2-.5-.2-.7 0-.3.1-.6.2-.8.1-.2.4-.4.6-.5.2-.1.4-.1.5-.1.2 0 .4.1.6.1.2.1.3.2.5.3.3.2.6.4.8.5 1.6.8 3.4 1.2 5.2 1.2 2.4 0 4.8-.7 6.8-1.9.2-.1.5-.2.7-.2.3 0 .6.1.8.2l.6.6c.1.2.1.4.1.6-.1.1-.1.2-.1.3zm.8-6.2c-.4.5-.9.9-1.5 1-.3.1-.6.1-.9.1-.7 0-1.3-.2-1.9-.7-.5-.4-.9-1-1-1.7 0-.2-.1-.4-.1-.5 0-.6.2-1.2.5-1.7s.8-.9 1.4-1c.3-.1.7-.2 1-.2.6 0 1.2.2 1.7.5s.9.8 1.1 1.4c.1.3.2.6.2.9.1.8-.2 1.4-.5 1.9zm10.2-4.5c-.2.3-.4.6-.7.9-.9-1.9-2.2-3.5-3.7-4.8.5-.2 1-.4 1.6-.4.6 0 1.2.1 1.7.4.5.3.9.7 1.2 1.3.2.4.3.8.3 1.2-.1.5-.2.9-.4 1.4z",
            }),
          });
        },
        Z = (e) => {
          let { props: t } = e;
          return (0, m.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 48 48",
            ...t,
            children: (0, m.jsx)("path", {
              d: "M46.9 9L40 41.5c-.5 2.3-1.9 2.9-3.8 1.8l-10.5-7.7-5.1 4.9c-.6.6-1 1-2.1 1l.8-10.7 19.5-17.6c.8-.8-.2-1.2-1.3-.4l-24 15.1L3 24.6c-2.3-.7-2.3-2.3.5-3.3L44 5.7c1.8-.7 3.5.4 2.9 3.3z",
            }),
          });
        },
        K = (e) => {
          let { props: t } = e;
          return (0, m.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 48 48",
            ...t,
            children: (0, m.jsx)("path", {
              d: "M46.8 11.5H45c-.7 0-1.6 1-1.6 1.6v23.2c0 .6 1 1.5 1.6 1.5h1.8v5.5H30.4v-5.5h3.4V13.5h-.2l-8 29.9h-6.2l-7.9-29.9h-.2v24.4h3.4v5.5H.9v-5.5h1.8c.7 0 1.7-.9 1.7-1.5V13.1c0-.6-1-1.6-1.7-1.6H.9V6h17.2l5.7 21.6h.2L29.6 6h17.2v5.5z",
            }),
          });
        },
        J = (e) => {
          let { props: t } = e;
          return (0, m.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 48 48",
            ...t,
            children: (0, m.jsx)("path", {
              d: "M38.4 3.4c2.5 0 4.5 2 4.6 4.4v38.1l-4.7-4-2.6-2.4-2.9-2.5 1.2 3.9H9.2c-2.5 0-4.5-1.9-4.5-4.4V7.8c0-2.4 2-4.4 4.5-4.4h29.2zM27.6 13.5l-.4.4c3.7 1.1 5.4 2.7 5.4 2.7-2.4-1.2-4.5-1.8-6.6-2-1.5-.2-3.1-.1-4.4 0h-.4c-.8 0-2.6.4-5 1.3-.8.4-1.3.6-1.3.6s1.8-1.8 5.7-2.7l-.2-.2s-3-.1-6.1 2.2c0 0-3.2 5.6-3.2 12.4 0 0 1.8 3.1 6.6 3.2l1.4-1.8c-2.7-.8-3.8-2.5-3.8-2.5s.2.1.6.4h.1c.1 0 .1 0 .1.1l.1.1c.6.2 1.2.5 1.6.7.8.4 1.9.7 3.2.9 1.6.2 3.5.4 5.7 0 1.1-.2 2.1-.5 3.2-.9.7-.4 1.5-.7 2.5-1.3 0 0-1.1 1.7-3.9 2.5.6.8 1.4 1.8 1.4 1.8 4.9-.1 6.7-3.2 6.8-3.1 0-6.8-3.2-12.4-3.2-12.4-2.9-2.1-5.6-2.2-6.1-2.2l.2-.2zm.3 7.8c1.2 0 2.2 1.1 2.2 2.4 0 1.3-1 2.4-2.2 2.4-1.2 0-2.2-1.1-2.2-2.4-.1-1.3.9-2.4 2.2-2.4zm-8.1 0c1.2 0 2.2 1.1 2.2 2.4 0 1.3-1 2.4-2.2 2.4-1.2 0-2.2-1.1-2.2-2.4 0-1.3 1-2.4 2.2-2.4z",
            }),
          });
        },
        X = (e) => {
          let { props: t } = e;
          return (0, m.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 48 48",
            ...t,
            children: (0, m.jsx)("path", {
              d: "M25.1 45.4c-6.6 0-6.6-1.6-6.6-2.3v-4.6c-7.4 1.6-8.9-3.6-8.9-3.6-1.2-3.1-2.9-4-2.9-4-2.4-1.7.2-1.7.2-1.7C9.6 29.4 11 32 11 32c2.4 4.2 6.2 3 7.7 2.3.2-1.8.9-3 1.7-3.6-5.9-.7-12.1-3-12.1-13.4 0-3 1-5.4 2.7-7.3-.3-.7-1.2-3.5.3-7.2 0 0 2.2-.7 7.3 2.8 2.1-.6 4.4-.9 6.6-.9 2.2 0 4.5.3 6.6.9C36.8 2 39 2.7 39 2.7c1.4 3.7.5 6.5.3 7.2 1.7 1.9 2.7 4.3 2.7 7.3 0 10.4-6.2 12.7-12.1 13.4.9.8 1.8 2.5 1.8 5v7.5c0 .7 0 2.3-6.6 2.3z",
              fillRule: "evenodd",
              clipRule: "evenodd",
            }),
          });
        };
      function ee() {
        let e = (0, x._)([
          "\n        .row:not(.row_persist) {\n            display: block;\n        }\n        .col:not(.col_persist) {\n            display: block;\n        }\n        .footer_logo {\n            margin: 0 auto 20px;\n        }\n        .footer_title {\n            text-align: center;\n            margin: 20px auto 10px;\n        }\n        ul li {\n            text-align: center;\n        }\n    ",
        ]);
        return (
          (ee = function () {
            return e;
          }),
          e
        );
      }
      function et() {
        let e = (0, x._)([
          "\n  background: ",
          ";\n  /* border-top: 1px solid ",
          "; */\n  padding: 70px 0 55px;\n  margin: 80px auto 0;\n\n  .footer_logo {\n    width: 160px;\n  }\n  .footer_title {\n    margin: 20px 0;\n    font-size: 2em;\n    font-weight: 500;\n    line-height: 1.3;\n    color: ",
          ";\n  }\n  ul {\n    list-style: none;\n    margin: 0;\n    padding: 0;\n  }\n  ul li {\n    margin-bottom: 10px;\n  }\n  ul li a {\n    font-size: 1.2em;\n    font-weight: 500;\n    line-height: 1.3;\n    color: ",
          ";\n  }\n  ul li a:hover {\n    color: ",
          ";\n  }\n\n  ",
          ";\n",
        ]);
        return (
          (et = function () {
            return e;
          }),
          e
        );
      }
      function er() {
        let e = (0, x._)(["\n        text-align: center;\n    "]);
        return (
          (er = function () {
            return e;
          }),
          e
        );
      }
      function en() {
        let e = (0, x._)([
          "\n  margin-top: 20px;\n  color: #fff;\n  font-size: 1.4em;\n  text-align: center;\n  width: 100%;\n\n  a {\n    color: #fff;\n    font-weight: 300;\n    margin-left: 2px;\n  }\n  a:hover {\n    color: ",
          ";\n  }\n  ",
          ";\n",
        ]);
        return (
          (en = function () {
            return e;
          }),
          e
        );
      }
      function ei() {
        let e = (0, x._)([
          "\n        text-align: center;\n        \n        li {\n            display: inline-block !important;\n            vertical-align: middle;\n        }\n    ",
        ]);
        return (
          (ei = function () {
            return e;
          }),
          e
        );
      }
      function eo() {
        let e = (0, x._)([
          "\n  a {\n    display: block;\n    width: 25px;\n  }\n  li {\n    margin-right: 10px;\n  }\n  li:last-child {\n    margin-right: 0;\n  }\n  .social_link svg path {\n    fill: ",
          ";\n    transition: all 300ms ease-in-out;\n  }\n  .social_link:hover svg path {\n    fill: ",
          ";\n  }\n\n  ",
          ";\n",
        ]);
        return (
          (eo = function () {
            return e;
          }),
          e
        );
      }
      let ea = _.ZP.div(
          et(),
          (e) => {
            let { theme: t } = e;
            return t.footerBg;
          },
          (e) => {
            let { theme: t } = e;
            return t.accent;
          },
          (e) => {
            let { theme: t } = e;
            return t.white;
          },
          (e) => {
            let { theme: t } = e;
            return t.textGrey;
          },
          (e) => {
            let { theme: t } = e;
            return t.accent;
          },
          (e) => {
            let { theme: t } = e;
            return t.mediaWidth.upToMedium(ee());
          }
        ),
        es = _.ZP.div(
          en(),
          (e) => {
            let { theme: t } = e;
            return t.linkColor;
          },
          (e) => {
            let { theme: t } = e;
            return t.mediaWidth.upToMedium(er());
          }
        ),
        eu = _.ZP.div(
          eo(),
          (e) => {
            let { theme: t } = e;
            return t.white;
          },
          (e) => {
            let { theme: t } = e;
            return t.accent;
          },
          (e) => {
            let { theme: t } = e;
            return t.mediaWidth.upToMedium(ei());
          }
        );
      var ec = () =>
        (0, m.jsx)(ea, {
          children: (0, m.jsx)(H.Z, {
            children: (0, m.jsxs)(E.Y0, {
              $justify: "space-between",
              $align: "flex-start",
              children: [
                (0, m.jsxs)(k.ZP, {
                  $justify: "flex-start",
                  children: [
                    (0, m.jsx)("div", {
                      className: "footer_logo",
                      children: (0, m.jsx)(O(), {
                        href: "/",
                        children: (0, m.jsx)("img", {
                          src: "/img/evileye-logo-footer.svg",
                          alt: "EvilEye Logo",
                        }),
                      }),
                    }),
                    (0, m.jsxs)(es, {
                      children: [
                        "\xa9 ",
                        new Date().getFullYear(),
                        " ",
                        (0, m.jsx)(O(), { href: "/", children: "EvilEye" }),
                      ],
                    }),
                  ],
                }),
                (0, m.jsxs)(k.ZP, {
                  $justify: "flex-start",
                  children: [
                    (0, m.jsx)("div", {
                      className: "footer_title",
                      children: "dApps",
                    }),
                    (0, m.jsx)("div", {
                      children: (0, m.jsxs)("ul", {
                        children: [
                          (0, m.jsx)("li", {
                            children: (0, m.jsx)("a", {
                              href: "/",
                              children: "EvilEye AMM",
                            }),
                          }),
                          (0, m.jsx)("li", {
                            children: (0, m.jsx)("a", {
                              href: "/",
                              children: "Morgoth DAO",
                            }),
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
                (0, m.jsxs)(k.ZP, {
                  $justify: "flex-start",
                  children: [
                    (0, m.jsx)("div", {
                      className: "footer_title",
                      children: "About EvilEye",
                    }),
                    (0, m.jsx)("div", {
                      children: (0, m.jsxs)("ul", {
                        children: [
                          (0, m.jsx)("li", {
                            children: (0, m.jsx)("a", {
                              href: "/",
                              children: "Gitbook",
                            }),
                          }),
                          (0, m.jsx)("li", {
                            children: (0, m.jsx)("a", {
                              href: "https://github.com/EvilEye",
                              target: "_blank",
                              rel: "noopener noreferrer",
                              children: "Github",
                            }),
                          }),
                          (0, m.jsx)("li", {
                            children: (0, m.jsx)("a", {
                              href: "https://medium.com/evileye",
                              target: "_blank",
                              rel: "noopener noreferrer",
                              children: "Medium",
                            }),
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
                (0, m.jsxs)(k.ZP, {
                  $justify: "flex-start",
                  children: [
                    (0, m.jsx)("div", {
                      className: "footer_title",
                      children: "Stay Connected",
                    }),
                    (0, m.jsx)(eu, {
                      children: (0, m.jsxs)(E.Y0, {
                        $gap: 10,
                        $directionMobile: "row",
                        children: [
                          (0, m.jsx)(k.ZP, {
                            $justify: "flex-start",
                            $widthMobile: "auto",
                            children: (0, m.jsx)("a", {
                              className: "social_link telegram",
                              href: "https://t.me/BehodlerOfficial",
                              target: "_blank",
                              rel: "noopener noreferrer",
                              children: (0, m.jsx)(Z, {}),
                            }),
                          }),
                          (0, m.jsx)(k.ZP, {
                            $justify: "flex-start",
                            $widthMobile: "auto",
                            children: (0, m.jsx)("a", {
                              className: "social_link discord",
                              href: "https://discord.com/invite/FHhsqmryZK",
                              target: "_blank",
                              rel: "noopener noreferrer",
                              children: (0, m.jsx)(J, {}),
                            }),
                          }),
                          (0, m.jsx)(k.ZP, {
                            $justify: "flex-start",
                            $widthMobile: "auto",
                            children: (0, m.jsx)("a", {
                              className: "social_link github",
                              href: "https://github.com/EvilEye",
                              target: "_blank",
                              rel: "noopener noreferrer",
                              children: (0, m.jsx)(X, {}),
                            }),
                          }),
                          (0, m.jsx)(k.ZP, {
                            $justify: "flex-start",
                            $widthMobile: "auto",
                            children: (0, m.jsx)("a", {
                              className: "social_link medium",
                              href: "https://medium.com/evileye",
                              target: "_blank",
                              rel: "noopener noreferrer",
                              children: (0, m.jsx)(K, {}),
                            }),
                          }),
                          (0, m.jsx)(k.ZP, {
                            $justify: "flex-start",
                            $widthMobile: "auto",
                            children: (0, m.jsx)("a", {
                              className: "social_link reddit",
                              href: "https://www.reddit.com/r/BehodlerAMM/",
                              target: "_blank",
                              rel: "noopener noreferrer",
                              children: (0, m.jsx)(Y, {}),
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
        });
      function el() {
        let e = (0, x._)([
          "\n    h1 {\n      font-size: 4.2em;\n    }\n    h2 {\n      font-size: 3em;\n    }\n    .hidemobile {\n      display: none;\n    }\n  ",
        ]);
        return (
          (el = function () {
            return e;
          }),
          e
        );
      }
      function ef() {
        let e = (0, x._)([
          "\n  \n  /* === FONTS === */\n  @font-face {\n    font-family: 'Gilroy';\n    src: url(",
          ") format('woff2');\n    font-weight: 300;\n    font-style: normal;\n    font-display: swap;\n  }\n\n  @font-face {\n    font-family: 'Gilroy';\n    src: url(",
          ") format('woff2');\n    font-weight: 400;\n    font-style: normal;\n    font-display: swap;\n  }\n\n  @font-face {\n    font-family: 'Gilroy';\n    src: url(",
          ") format('woff2');\n    font-weight: normal;\n    font-style: normal;\n    font-display: swap;\n  }\n\n  @font-face {\n    font-family: 'Gilroy';\n    src: url(",
          ") format('woff2');\n    font-weight: bold;\n    font-style: normal;\n    font-display: swap;\n  }\n\n  /* === GENERAL === */\n  html, body {\n    margin: 0;\n    padding: 0;\n  }\n  *, *::after, *::before {\n    box-sizing: border-box;\n  }\n  * {\n    scroll-behavior: smooth;\n  }\n  body {\n    font-family: 'Gilroy', Arial, sans-serif;\n    font-weight: 300;\n    font-size: 10px;\n    line-height: 1;\n    margin: 0;\n    padding: 0;\n    background: ",
          ";\n    overflow-x: hidden;\n  }\n  h1 {\n    font-size: 5.2em;\n    font-weight: 700;\n  }\n  h2 {\n    font-size: 3.8em;\n    font-weight: 500;\n    line-height: 1.3;\n  }\n  p, li, blockquote {\n    font-size: 1.4em;\n  }\n  li {\n    line-height: 1.4;\n  }\n  a {\n    text-decoration: none;\n    color: ",
          ";\n    font-weight: bold;\n  }\n  img {\n    max-width: 100%;\n  }\n\n\n  /* === TEXT === */\n\n  .center {\n    text-align:center;\n  }\n  .white_text {\n    color: ",
          ";\n  }\n  .blue_text {\n    color: ",
          ";\n  }\n  .light_text {\n    color: ",
          ";\n  }\n  .light_text_2 {\n    color: ",
          ";\n  }\n\n  /* === BODY === */\n\n  .content {\n    min-height: calc(100vh - 436px);\n  }\n\n  /* === ANIMATIONS === */\n\n  @keyframes fadeIn {\n    from {opacity: 0;}\n    to {opacity: 1;}\n  }\n\n  /* === RESPONSIVE === */\n\n  ",
          ";\n\n",
        ]);
        return (
          (ef = function () {
            return e;
          }),
          e
        );
      }
      let eh = (0, _.vJ)(
        ef(),
        "/_next/static/fonts/Gilroy-Light.woff2",
        "/_next/static/fonts/Gilroy-Regular.woff2",
        "/_next/static/fonts/Gilroy-Medium.woff2",
        "/_next/static/fonts/Gilroy-Bold.woff2",
        (e) => {
          let { theme: t } = e;
          return t.background;
        },
        (e) => {
          let { theme: t } = e;
          return t.linkColor;
        },
        (e) => {
          let { theme: t } = e;
          return t.white;
        },
        (e) => {
          let { theme: t } = e;
          return t.blue;
        },
        (e) => {
          let { theme: t } = e;
          return t.textColorBox;
        },
        (e) => {
          let { theme: t } = e;
          return t.textColorSub;
        },
        (e) => {
          let { theme: t } = e;
          return t.mediaWidth.upToSmall(el());
        }
      );
      var ed = r(4608),
        ep = function (e, t) {
          return (ep =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (e, t) {
                e.__proto__ = t;
              }) ||
            function (e, t) {
              for (var r in t)
                Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
            })(e, t);
        };
      function ey(e, t) {
        if ("function" != typeof t && null !== t)
          throw TypeError(
            "Class extends value " + String(t) + " is not a constructor or null"
          );
        function r() {
          this.constructor = e;
        }
        ep(e, t),
          (e.prototype =
            null === t
              ? Object.create(t)
              : ((r.prototype = t.prototype), new r()));
      }
      var ev = function () {
        return (ev =
          Object.assign ||
          function (e) {
            for (var t, r = 1, n = arguments.length; r < n; r++)
              for (var i in (t = arguments[r]))
                Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
            return e;
          }).apply(this, arguments);
      };
      function em(e, t) {
        var r = {};
        for (var n in e)
          Object.prototype.hasOwnProperty.call(e, n) &&
            0 > t.indexOf(n) &&
            (r[n] = e[n]);
        if (null != e && "function" == typeof Object.getOwnPropertySymbols)
          for (
            var i = 0, n = Object.getOwnPropertySymbols(e);
            i < n.length;
            i++
          )
            0 > t.indexOf(n[i]) &&
              Object.prototype.propertyIsEnumerable.call(e, n[i]) &&
              (r[n[i]] = e[n[i]]);
        return r;
      }
      function eg(e, t, r, n) {
        return new (r || (r = Promise))(function (i, o) {
          function a(e) {
            try {
              u(n.next(e));
            } catch (e) {
              o(e);
            }
          }
          function s(e) {
            try {
              u(n.throw(e));
            } catch (e) {
              o(e);
            }
          }
          function u(e) {
            var t;
            e.done
              ? i(e.value)
              : ((t = e.value) instanceof r
                  ? t
                  : new r(function (e) {
                      e(t);
                    })
                ).then(a, s);
          }
          u((n = n.apply(e, t || [])).next());
        });
      }
      function eb(e, t) {
        var r,
          n,
          i,
          o,
          a = {
            label: 0,
            sent: function () {
              if (1 & i[0]) throw i[1];
              return i[1];
            },
            trys: [],
            ops: [],
          };
        return (
          (o = { next: s(0), throw: s(1), return: s(2) }),
          "function" == typeof Symbol &&
            (o[Symbol.iterator] = function () {
              return this;
            }),
          o
        );
        function s(s) {
          return function (u) {
            return (function (s) {
              if (r) throw TypeError("Generator is already executing.");
              for (; o && ((o = 0), s[0] && (a = 0)), a; )
                try {
                  if (
                    ((r = 1),
                    n &&
                      (i =
                        2 & s[0]
                          ? n.return
                          : s[0]
                          ? n.throw || ((i = n.return) && i.call(n), 0)
                          : n.next) &&
                      !(i = i.call(n, s[1])).done)
                  )
                    return i;
                  switch (((n = 0), i && (s = [2 & s[0], i.value]), s[0])) {
                    case 0:
                    case 1:
                      i = s;
                      break;
                    case 4:
                      return a.label++, { value: s[1], done: !1 };
                    case 5:
                      a.label++, (n = s[1]), (s = [0]);
                      continue;
                    case 7:
                      (s = a.ops.pop()), a.trys.pop();
                      continue;
                    default:
                      if (
                        !(i = (i = a.trys).length > 0 && i[i.length - 1]) &&
                        (6 === s[0] || 2 === s[0])
                      ) {
                        a = 0;
                        continue;
                      }
                      if (3 === s[0] && (!i || (s[1] > i[0] && s[1] < i[3]))) {
                        a.label = s[1];
                        break;
                      }
                      if (6 === s[0] && a.label < i[1]) {
                        (a.label = i[1]), (i = s);
                        break;
                      }
                      if (i && a.label < i[2]) {
                        (a.label = i[2]), a.ops.push(s);
                        break;
                      }
                      i[2] && a.ops.pop(), a.trys.pop();
                      continue;
                  }
                  s = t.call(e, a);
                } catch (e) {
                  (s = [6, e]), (n = 0);
                } finally {
                  r = i = 0;
                }
              if (5 & s[0]) throw s[1];
              return { value: s[0] ? s[1] : void 0, done: !0 };
            })([s, u]);
          };
        }
      }
      function ew(e, t, r) {
        if (r || 2 == arguments.length)
          for (var n, i = 0, o = t.length; i < o; i++)
            (!n && i in t) ||
              (n || (n = Array.prototype.slice.call(t, 0, i)), (n[i] = t[i]));
        return e.concat(n || Array.prototype.slice.call(t));
      }
      "function" == typeof SuppressedError && SuppressedError;
      var e_ = "Invariant Violation",
        ex = Object.setPrototypeOf,
        eS =
          void 0 === ex
            ? function (e, t) {
                return (e.__proto__ = t), e;
              }
            : ex,
        eO = (function (e) {
          function t(r) {
            void 0 === r && (r = e_);
            var n =
              e.call(
                this,
                "number" == typeof r
                  ? e_ +
                      ": " +
                      r +
                      " (see https://github.com/apollographql/invariant-packages)"
                  : r
              ) || this;
            return (n.framesToPop = 1), (n.name = e_), eS(n, t.prototype), n;
          }
          return ey(t, e), t;
        })(Error);
      function eE(e, t) {
        if (!e) throw new eO(t);
      }
      var ek = ["debug", "log", "warn", "error", "silent"],
        eT = ek.indexOf("log");
      function ej(e) {
        return function () {
          if (ek.indexOf(e) >= eT)
            return (console[e] || console.log).apply(console, arguments);
        };
      }
      ((i = eE || (eE = {})).debug = ej("debug")),
        (i.log = ej("log")),
        (i.warn = ej("warn")),
        (i.error = ej("error"));
      var eI = "3.11.0";
      function eD(e) {
        try {
          return e();
        } catch (e) {}
      }
      var eP =
          eD(function () {
            return globalThis;
          }) ||
          eD(function () {
            return window;
          }) ||
          eD(function () {
            return self;
          }) ||
          eD(function () {
            return global;
          }) ||
          eD(function () {
            return eD.constructor("return this")();
          }),
        eR = new Map();
      function eA(e) {
        var t = eR.get(e) || 1;
        return (
          eR.set(e, t + 1),
          ""
            .concat(e, ":")
            .concat(t, ":")
            .concat(Math.random().toString(36).slice(2))
        );
      }
      function eC(e, t) {
        void 0 === t && (t = 0);
        var r = eA("stringifyForDisplay");
        return JSON.stringify(
          e,
          function (e, t) {
            return void 0 === t ? r : t;
          },
          t
        )
          .split(JSON.stringify(r))
          .join("<undefined>");
      }
      function eN(e) {
        return function (t) {
          for (var r = [], n = 1; n < arguments.length; n++)
            r[n - 1] = arguments[n];
          if ("number" == typeof t) {
            var i = t;
            (t = eV(i)) || ((t = eQ(i, r)), (r = []));
          }
          e.apply(void 0, [t].concat(r));
        };
      }
      var eF = Object.assign(
        function (e, t) {
          for (var r = [], n = 2; n < arguments.length; n++)
            r[n - 2] = arguments[n];
          e || eE(e, eV(t, r) || eQ(t, r));
        },
        {
          debug: eN(eE.debug),
          log: eN(eE.log),
          warn: eN(eE.warn),
          error: eN(eE.error),
        }
      );
      function eM(e) {
        for (var t = [], r = 1; r < arguments.length; r++)
          t[r - 1] = arguments[r];
        return new eO(eV(e, t) || eQ(e, t));
      }
      var eq = Symbol.for("ApolloErrorMessageHandler_" + eI);
      function eL(e) {
        if ("string" == typeof e) return e;
        try {
          return eC(e, 2).slice(0, 1e3);
        } catch (e) {
          return "<non-serializable>";
        }
      }
      function eV(e, t) {
        if ((void 0 === t && (t = []), e))
          return eP[eq] && eP[eq](e, t.map(eL));
      }
      function eQ(e, t) {
        if ((void 0 === t && (t = []), e))
          return "An error occurred! For more details, see the full error text at https://go.apollo.dev/c/err#".concat(
            encodeURIComponent(
              JSON.stringify({ version: eI, message: e, args: t.map(eL) })
            )
          );
      }
      var ez = r(3914),
        eB = r.t(ez, 2),
        eU =
          "ReactNative" ==
          eD(function () {
            return navigator.product;
          }),
        eW = "function" == typeof WeakMap && !(eU && !global.HermesInternal),
        e$ = "function" == typeof WeakSet,
        eG = "function" == typeof Symbol && "function" == typeof Symbol.for,
        eH = eG && Symbol.asyncIterator;
      eD(function () {
        return window.document.createElement;
      }),
        eD(function () {
          return navigator.userAgent.indexOf("jsdom") >= 0;
        });
      var eY = eG ? Symbol.for("__APOLLO_CONTEXT__") : "__APOLLO_CONTEXT__",
        eZ = function (e) {
          var t,
            r = e.client,
            n = e.children,
            i =
              (eF("createContext" in eB, 45),
              (t = ez.createContext[eY]) ||
                (Object.defineProperty(ez.createContext, eY, {
                  value: (t = ez.createContext({})),
                  enumerable: !1,
                  writable: !1,
                  configurable: !0,
                }),
                (t.displayName = "ApolloContext")),
              t),
            o = ez.useContext(i),
            a = ez.useMemo(
              function () {
                return ev(ev({}, o), { client: r || o.client });
              },
              [o, r]
            );
          return (
            eF(a.client, 46), ez.createElement(i.Provider, { value: a }, n)
          );
        };
      function eK(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
        return n;
      }
      function eJ(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n);
        }
      }
      function eX(e, t, r) {
        return (
          t && eJ(e.prototype, t),
          r && eJ(e, r),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          e
        );
      }
      var e0 = function () {
          return "function" == typeof Symbol;
        },
        e1 = function (e) {
          return e0() && !!Symbol[e];
        },
        e2 = function (e) {
          return e1(e) ? Symbol[e] : "@@" + e;
        };
      e0() && !e1("observable") && (Symbol.observable = Symbol("observable"));
      var e3 = e2("iterator"),
        e4 = e2("observable"),
        e5 = e2("species");
      function e6(e, t) {
        var r = e[t];
        if (null != r) {
          if ("function" != typeof r) throw TypeError(r + " is not a function");
          return r;
        }
      }
      function e9(e) {
        var t = e.constructor;
        return (
          void 0 !== t && null === (t = t[e5]) && (t = void 0),
          void 0 !== t ? t : ta
        );
      }
      function e8(e) {
        e8.log
          ? e8.log(e)
          : setTimeout(function () {
              throw e;
            });
      }
      function e7(e) {
        Promise.resolve().then(function () {
          try {
            e();
          } catch (e) {
            e8(e);
          }
        });
      }
      function te(e) {
        var t = e._cleanup;
        if (void 0 !== t) {
          if (((e._cleanup = void 0), !t)) return;
          try {
            if ("function" == typeof t) t();
            else {
              var r = e6(t, "unsubscribe");
              r && r.call(t);
            }
          } catch (e) {
            e8(e);
          }
        }
      }
      function tt(e) {
        (e._observer = void 0), (e._queue = void 0), (e._state = "closed");
      }
      function tr(e, t, r) {
        e._state = "running";
        var n = e._observer;
        try {
          var i = e6(n, t);
          switch (t) {
            case "next":
              i && i.call(n, r);
              break;
            case "error":
              if ((tt(e), i)) i.call(n, r);
              else throw r;
              break;
            case "complete":
              tt(e), i && i.call(n);
          }
        } catch (e) {
          e8(e);
        }
        "closed" === e._state
          ? te(e)
          : "running" === e._state && (e._state = "ready");
      }
      function tn(e, t, r) {
        if ("closed" !== e._state) {
          if ("buffering" === e._state) {
            e._queue.push({ type: t, value: r });
            return;
          }
          if ("ready" !== e._state) {
            (e._state = "buffering"),
              (e._queue = [{ type: t, value: r }]),
              e7(function () {
                return (function (e) {
                  var t = e._queue;
                  if (t) {
                    (e._queue = void 0), (e._state = "ready");
                    for (
                      var r = 0;
                      r < t.length &&
                      (tr(e, t[r].type, t[r].value), "closed" !== e._state);
                      ++r
                    );
                  }
                })(e);
              });
            return;
          }
          tr(e, t, r);
        }
      }
      var ti = (function () {
          function e(e, t) {
            (this._cleanup = void 0),
              (this._observer = e),
              (this._queue = void 0),
              (this._state = "initializing");
            var r = new to(this);
            try {
              this._cleanup = t.call(void 0, r);
            } catch (e) {
              r.error(e);
            }
            "initializing" === this._state && (this._state = "ready");
          }
          return (
            (e.prototype.unsubscribe = function () {
              "closed" !== this._state && (tt(this), te(this));
            }),
            eX(e, [
              {
                key: "closed",
                get: function () {
                  return "closed" === this._state;
                },
              },
            ]),
            e
          );
        })(),
        to = (function () {
          function e(e) {
            this._subscription = e;
          }
          var t = e.prototype;
          return (
            (t.next = function (e) {
              tn(this._subscription, "next", e);
            }),
            (t.error = function (e) {
              tn(this._subscription, "error", e);
            }),
            (t.complete = function () {
              tn(this._subscription, "complete");
            }),
            eX(e, [
              {
                key: "closed",
                get: function () {
                  return "closed" === this._subscription._state;
                },
              },
            ]),
            e
          );
        })(),
        ta = (function () {
          function e(t) {
            if (!(this instanceof e))
              throw TypeError("Observable cannot be called as a function");
            if ("function" != typeof t)
              throw TypeError("Observable initializer must be a function");
            this._subscriber = t;
          }
          var t = e.prototype;
          return (
            (t.subscribe = function (e) {
              return (
                ("object" != typeof e || null === e) &&
                  (e = {
                    next: e,
                    error: arguments[1],
                    complete: arguments[2],
                  }),
                new ti(e, this._subscriber)
              );
            }),
            (t.forEach = function (e) {
              var t = this;
              return new Promise(function (r, n) {
                if ("function" != typeof e) {
                  n(TypeError(e + " is not a function"));
                  return;
                }
                function i() {
                  o.unsubscribe(), r();
                }
                var o = t.subscribe({
                  next: function (t) {
                    try {
                      e(t, i);
                    } catch (e) {
                      n(e), o.unsubscribe();
                    }
                  },
                  error: n,
                  complete: r,
                });
              });
            }),
            (t.map = function (e) {
              var t = this;
              if ("function" != typeof e)
                throw TypeError(e + " is not a function");
              return new (e9(this))(function (r) {
                return t.subscribe({
                  next: function (t) {
                    try {
                      t = e(t);
                    } catch (e) {
                      return r.error(e);
                    }
                    r.next(t);
                  },
                  error: function (e) {
                    r.error(e);
                  },
                  complete: function () {
                    r.complete();
                  },
                });
              });
            }),
            (t.filter = function (e) {
              var t = this;
              if ("function" != typeof e)
                throw TypeError(e + " is not a function");
              return new (e9(this))(function (r) {
                return t.subscribe({
                  next: function (t) {
                    try {
                      if (!e(t)) return;
                    } catch (e) {
                      return r.error(e);
                    }
                    r.next(t);
                  },
                  error: function (e) {
                    r.error(e);
                  },
                  complete: function () {
                    r.complete();
                  },
                });
              });
            }),
            (t.reduce = function (e) {
              var t = this;
              if ("function" != typeof e)
                throw TypeError(e + " is not a function");
              var r = e9(this),
                n = arguments.length > 1,
                i = !1,
                o = arguments[1],
                a = o;
              return new r(function (r) {
                return t.subscribe({
                  next: function (t) {
                    var o = !i;
                    if (((i = !0), !o || n))
                      try {
                        a = e(a, t);
                      } catch (e) {
                        return r.error(e);
                      }
                    else a = t;
                  },
                  error: function (e) {
                    r.error(e);
                  },
                  complete: function () {
                    if (!i && !n)
                      return r.error(
                        TypeError("Cannot reduce an empty sequence")
                      );
                    r.next(a), r.complete();
                  },
                });
              });
            }),
            (t.concat = function () {
              for (
                var e = this, t = arguments.length, r = Array(t), n = 0;
                n < t;
                n++
              )
                r[n] = arguments[n];
              var i = e9(this);
              return new i(function (t) {
                var n,
                  o = 0;
                return (
                  (function e(a) {
                    n = a.subscribe({
                      next: function (e) {
                        t.next(e);
                      },
                      error: function (e) {
                        t.error(e);
                      },
                      complete: function () {
                        o === r.length
                          ? ((n = void 0), t.complete())
                          : e(i.from(r[o++]));
                      },
                    });
                  })(e),
                  function () {
                    n && (n.unsubscribe(), (n = void 0));
                  }
                );
              });
            }),
            (t.flatMap = function (e) {
              var t = this;
              if ("function" != typeof e)
                throw TypeError(e + " is not a function");
              var r = e9(this);
              return new r(function (n) {
                var i = [],
                  o = t.subscribe({
                    next: function (t) {
                      if (e)
                        try {
                          t = e(t);
                        } catch (e) {
                          return n.error(e);
                        }
                      var o = r.from(t).subscribe({
                        next: function (e) {
                          n.next(e);
                        },
                        error: function (e) {
                          n.error(e);
                        },
                        complete: function () {
                          var e = i.indexOf(o);
                          e >= 0 && i.splice(e, 1), a();
                        },
                      });
                      i.push(o);
                    },
                    error: function (e) {
                      n.error(e);
                    },
                    complete: function () {
                      a();
                    },
                  });
                function a() {
                  o.closed && 0 === i.length && n.complete();
                }
                return function () {
                  i.forEach(function (e) {
                    return e.unsubscribe();
                  }),
                    o.unsubscribe();
                };
              });
            }),
            (t[e4] = function () {
              return this;
            }),
            (e.from = function (t) {
              var r = "function" == typeof this ? this : e;
              if (null == t) throw TypeError(t + " is not an object");
              var n = e6(t, e4);
              if (n) {
                var i = n.call(t);
                if (Object(i) !== i) throw TypeError(i + " is not an object");
                return i instanceof ta && i.constructor === r
                  ? i
                  : new r(function (e) {
                      return i.subscribe(e);
                    });
              }
              if (e1("iterator") && (n = e6(t, e3)))
                return new r(function (e) {
                  e7(function () {
                    if (!e.closed) {
                      for (
                        var r,
                          i = (function (e, t) {
                            var r =
                              ("undefined" != typeof Symbol &&
                                e[Symbol.iterator]) ||
                              e["@@iterator"];
                            if (r) return (r = r.call(e)).next.bind(r);
                            if (
                              Array.isArray(e) ||
                              (r = (function (e, t) {
                                if (e) {
                                  if ("string" == typeof e)
                                    return eK(e, void 0);
                                  var r = Object.prototype.toString
                                    .call(e)
                                    .slice(8, -1);
                                  if (
                                    ("Object" === r &&
                                      e.constructor &&
                                      (r = e.constructor.name),
                                    "Map" === r || "Set" === r)
                                  )
                                    return Array.from(e);
                                  if (
                                    "Arguments" === r ||
                                    /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(
                                      r
                                    )
                                  )
                                    return eK(e, void 0);
                                }
                              })(e))
                            ) {
                              r && (e = r);
                              var n = 0;
                              return function () {
                                return n >= e.length
                                  ? { done: !0 }
                                  : { done: !1, value: e[n++] };
                              };
                            }
                            throw TypeError(
                              "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                            );
                          })(n.call(t));
                        !(r = i()).done;

                      ) {
                        var o = r.value;
                        if ((e.next(o), e.closed)) return;
                      }
                      e.complete();
                    }
                  });
                });
              if (Array.isArray(t))
                return new r(function (e) {
                  e7(function () {
                    if (!e.closed) {
                      for (var r = 0; r < t.length; ++r)
                        if ((e.next(t[r]), e.closed)) return;
                      e.complete();
                    }
                  });
                });
              throw TypeError(t + " is not observable");
            }),
            (e.of = function () {
              for (var t = arguments.length, r = Array(t), n = 0; n < t; n++)
                r[n] = arguments[n];
              return new ("function" == typeof this ? this : e)(function (e) {
                e7(function () {
                  if (!e.closed) {
                    for (var t = 0; t < r.length; ++t)
                      if ((e.next(r[t]), e.closed)) return;
                    e.complete();
                  }
                });
              });
            }),
            eX(e, null, [
              {
                key: e5,
                get: function () {
                  return this;
                },
              },
            ]),
            e
          );
        })();
      function ts(e) {
        return null !== e && "object" == typeof e;
      }
      function tu(e, t) {
        var r = t,
          n = [];
        return (
          e.definitions.forEach(function (e) {
            if ("OperationDefinition" === e.kind)
              throw eM(
                73,
                e.operation,
                e.name ? " named '".concat(e.name.value, "'") : ""
              );
            "FragmentDefinition" === e.kind && n.push(e);
          }),
          void 0 === r &&
            (eF(1 === n.length, 74, n.length), (r = n[0].name.value)),
          ev(ev({}, e), {
            definitions: ew(
              [
                {
                  kind: "OperationDefinition",
                  operation: "query",
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "FragmentSpread",
                        name: { kind: "Name", value: r },
                      },
                    ],
                  },
                },
              ],
              e.definitions,
              !0
            ),
          })
        );
      }
      function tc(e) {
        void 0 === e && (e = []);
        var t = {};
        return (
          e.forEach(function (e) {
            t[e.name.value] = e;
          }),
          t
        );
      }
      function tl(e, t) {
        switch (e.kind) {
          case "InlineFragment":
            return e;
          case "FragmentSpread":
            var r = e.name.value;
            if ("function" == typeof t) return t(r);
            var n = t && t[r];
            return eF(n, 75, r), n || null;
          default:
            return null;
        }
      }
      function tf() {}
      e0() &&
        Object.defineProperty(ta, Symbol("extensions"), {
          value: { symbol: e4, hostReportError: e8 },
          configurable: !0,
        });
      let th =
          "undefined" != typeof WeakRef
            ? WeakRef
            : function (e) {
                return { deref: () => e };
              },
        td = "undefined" != typeof WeakMap ? WeakMap : Map,
        tp =
          "undefined" != typeof FinalizationRegistry
            ? FinalizationRegistry
            : function () {
                return { register: tf, unregister: tf };
              };
      class ty {
        constructor(e = 1 / 0, t = tf) {
          (this.max = e),
            (this.dispose = t),
            (this.map = new td()),
            (this.newest = null),
            (this.oldest = null),
            (this.unfinalizedNodes = new Set()),
            (this.finalizationScheduled = !1),
            (this.size = 0),
            (this.finalize = () => {
              let e = this.unfinalizedNodes.values();
              for (let t = 0; t < 10024; t++) {
                let t = e.next().value;
                if (!t) break;
                this.unfinalizedNodes.delete(t);
                let r = t.key;
                delete t.key,
                  (t.keyRef = new th(r)),
                  this.registry.register(r, t, t);
              }
              this.unfinalizedNodes.size > 0
                ? queueMicrotask(this.finalize)
                : (this.finalizationScheduled = !1);
            }),
            (this.registry = new tp(this.deleteNode.bind(this)));
        }
        has(e) {
          return this.map.has(e);
        }
        get(e) {
          let t = this.getNode(e);
          return t && t.value;
        }
        getNode(e) {
          let t = this.map.get(e);
          if (t && t !== this.newest) {
            let { older: e, newer: r } = t;
            r && (r.older = e),
              e && (e.newer = r),
              (t.older = this.newest),
              (t.older.newer = t),
              (t.newer = null),
              (this.newest = t),
              t === this.oldest && (this.oldest = r);
          }
          return t;
        }
        set(e, t) {
          let r = this.getNode(e);
          return r
            ? (r.value = t)
            : ((r = { key: e, value: t, newer: null, older: this.newest }),
              this.newest && (this.newest.newer = r),
              (this.newest = r),
              (this.oldest = this.oldest || r),
              this.scheduleFinalization(r),
              this.map.set(e, r),
              this.size++,
              r.value);
        }
        clean() {
          for (; this.oldest && this.size > this.max; )
            this.deleteNode(this.oldest);
        }
        deleteNode(e) {
          e === this.newest && (this.newest = e.older),
            e === this.oldest && (this.oldest = e.newer),
            e.newer && (e.newer.older = e.older),
            e.older && (e.older.newer = e.newer),
            this.size--;
          let t = e.key || (e.keyRef && e.keyRef.deref());
          this.dispose(e.value, t),
            e.keyRef
              ? this.registry.unregister(e)
              : this.unfinalizedNodes.delete(e),
            t && this.map.delete(t);
        }
        delete(e) {
          let t = this.map.get(e);
          return !!t && (this.deleteNode(t), !0);
        }
        scheduleFinalization(e) {
          this.unfinalizedNodes.add(e),
            this.finalizationScheduled ||
              ((this.finalizationScheduled = !0),
              queueMicrotask(this.finalize));
        }
      }
      function tv() {}
      class tm {
        constructor(e = 1 / 0, t = tv) {
          (this.max = e),
            (this.dispose = t),
            (this.map = new Map()),
            (this.newest = null),
            (this.oldest = null);
        }
        has(e) {
          return this.map.has(e);
        }
        get(e) {
          let t = this.getNode(e);
          return t && t.value;
        }
        get size() {
          return this.map.size;
        }
        getNode(e) {
          let t = this.map.get(e);
          if (t && t !== this.newest) {
            let { older: e, newer: r } = t;
            r && (r.older = e),
              e && (e.newer = r),
              (t.older = this.newest),
              (t.older.newer = t),
              (t.newer = null),
              (this.newest = t),
              t === this.oldest && (this.oldest = r);
          }
          return t;
        }
        set(e, t) {
          let r = this.getNode(e);
          return r
            ? (r.value = t)
            : ((r = { key: e, value: t, newer: null, older: this.newest }),
              this.newest && (this.newest.newer = r),
              (this.newest = r),
              (this.oldest = this.oldest || r),
              this.map.set(e, r),
              r.value);
        }
        clean() {
          for (; this.oldest && this.map.size > this.max; )
            this.delete(this.oldest.key);
        }
        delete(e) {
          let t = this.map.get(e);
          return (
            !!t &&
            (t === this.newest && (this.newest = t.older),
            t === this.oldest && (this.oldest = t.newer),
            t.newer && (t.newer.older = t.older),
            t.older && (t.older.newer = t.newer),
            this.map.delete(e),
            this.dispose(t.value, e),
            !0)
          );
        }
      }
      var tg = new WeakSet();
      function tb(e) {
        !(e.size <= (e.max || -1)) &&
          (tg.has(e) ||
            (tg.add(e),
            setTimeout(function () {
              e.clean(), tg.delete(e);
            }, 100)));
      }
      var tw = function (e, t) {
          var r = new ty(e, t);
          return (
            (r.set = function (e, t) {
              var r = ty.prototype.set.call(this, e, t);
              return tb(this), r;
            }),
            r
          );
        },
        t_ = function (e, t) {
          var r = new tm(e, t);
          return (
            (r.set = function (e, t) {
              var r = tm.prototype.set.call(this, e, t);
              return tb(this), r;
            }),
            r
          );
        },
        tx = Symbol.for("apollo.cacheSize"),
        tS = ev({}, eP[tx]),
        tO = {},
        tE =
          !1 !== globalThis.__DEV__
            ? function () {
                var e, t, r, n, i;
                if (!(!1 !== globalThis.__DEV__))
                  throw Error("only supported in development mode");
                return {
                  limits: Object.fromEntries(
                    Object.entries({
                      parser: 1e3,
                      canonicalStringify: 1e3,
                      print: 2e3,
                      "documentTransform.cache": 2e3,
                      "queryManager.getDocumentInfo": 2e3,
                      "PersistedQueryLink.persistedQueryHashes": 2e3,
                      "fragmentRegistry.transform": 2e3,
                      "fragmentRegistry.lookup": 1e3,
                      "fragmentRegistry.findFragmentSpreads": 4e3,
                      "cache.fragmentQueryDocuments": 1e3,
                      "removeTypenameFromVariables.getVariableDefinitions": 2e3,
                      "inMemoryCache.maybeBroadcastWatch": 5e3,
                      "inMemoryCache.executeSelectionSet": 5e4,
                      "inMemoryCache.executeSubSelectedArray": 1e4,
                    }).map(function (e) {
                      var t = e[0],
                        r = e[1];
                      return [t, tS[t] || r];
                    })
                  ),
                  sizes: ev(
                    {
                      print:
                        null === (e = tO.print) || void 0 === e
                          ? void 0
                          : e.call(tO),
                      parser:
                        null === (t = tO.parser) || void 0 === t
                          ? void 0
                          : t.call(tO),
                      canonicalStringify:
                        null === (r = tO.canonicalStringify) || void 0 === r
                          ? void 0
                          : r.call(tO),
                      links: (function e(t) {
                        var r;
                        return t
                          ? ew(
                              ew(
                                [
                                  null ===
                                    (r =
                                      null == t
                                        ? void 0
                                        : t.getMemoryInternals) || void 0 === r
                                    ? void 0
                                    : r.call(t),
                                ],
                                e(null == t ? void 0 : t.left),
                                !0
                              ),
                              e(null == t ? void 0 : t.right),
                              !0
                            ).filter(tD)
                          : [];
                      })(this.link),
                      queryManager: {
                        getDocumentInfo: this.queryManager.transformCache.size,
                        documentTransforms: tP(
                          this.queryManager.documentTransform
                        ),
                      },
                    },
                    null === (i = (n = this.cache).getMemoryInternals) ||
                      void 0 === i
                      ? void 0
                      : i.call(n)
                  ),
                };
              }
            : void 0,
        tk =
          !1 !== globalThis.__DEV__
            ? function () {
                var e = this.config.fragments;
                return ev(ev({}, tj.apply(this)), {
                  addTypenameDocumentTransform: tP(this.addTypenameTransform),
                  inMemoryCache: {
                    executeSelectionSet: tI(
                      this.storeReader.executeSelectionSet
                    ),
                    executeSubSelectedArray: tI(
                      this.storeReader.executeSubSelectedArray
                    ),
                    maybeBroadcastWatch: tI(this.maybeBroadcastWatch),
                  },
                  fragmentRegistry: {
                    findFragmentSpreads: tI(
                      null == e ? void 0 : e.findFragmentSpreads
                    ),
                    lookup: tI(null == e ? void 0 : e.lookup),
                    transform: tI(null == e ? void 0 : e.transform),
                  },
                });
              }
            : void 0,
        tT = !1 !== globalThis.__DEV__ ? tj : void 0;
      function tj() {
        return { cache: { fragmentQueryDocuments: tI(this.getFragmentDoc) } };
      }
      function tI(e) {
        return e && "dirtyKey" in e ? e.size : void 0;
      }
      function tD(e) {
        return null != e;
      }
      function tP(e) {
        return (function e(t) {
          return t
            ? ew(
                ew(
                  [tI(null == t ? void 0 : t.performWork)],
                  e(null == t ? void 0 : t.left),
                  !0
                ),
                e(null == t ? void 0 : t.right),
                !0
              ).filter(tD)
            : [];
        })(e).map(function (e) {
          return { cache: e };
        });
      }
      var tR = Object.assign(
        function (e) {
          return JSON.stringify(e, tA);
        },
        {
          reset: function () {
            h = new t_(tS.canonicalStringify || 1e3);
          },
        }
      );
      function tA(e, t) {
        if (t && "object" == typeof t) {
          var r = Object.getPrototypeOf(t);
          if (r === Object.prototype || null === r) {
            var n = Object.keys(t);
            if (n.every(tC)) return t;
            var i = JSON.stringify(n),
              o = h.get(i);
            if (!o) {
              n.sort();
              var a = JSON.stringify(n);
              (o = h.get(a) || n), h.set(i, o), h.set(a, o);
            }
            var s = Object.create(r);
            return (
              o.forEach(function (e) {
                s[e] = t[e];
              }),
              s
            );
          }
        }
        return t;
      }
      function tC(e, t, r) {
        return 0 === t || r[t - 1] <= e;
      }
      function tN(e) {
        return { __ref: String(e) };
      }
      function tF(e) {
        return !!(e && "object" == typeof e && "string" == typeof e.__ref);
      }
      function tM(e, t, r, n) {
        if ("IntValue" === r.kind || "FloatValue" === r.kind)
          e[t.value] = Number(r.value);
        else if ("BooleanValue" === r.kind || "StringValue" === r.kind)
          e[t.value] = r.value;
        else if ("ObjectValue" === r.kind) {
          var i = {};
          r.fields.map(function (e) {
            return tM(i, e.name, e.value, n);
          }),
            (e[t.value] = i);
        } else if ("Variable" === r.kind) {
          var o = (n || {})[r.name.value];
          e[t.value] = o;
        } else if ("ListValue" === r.kind)
          e[t.value] = r.values.map(function (e) {
            var r = {};
            return tM(r, t, e, n), r[t.value];
          });
        else if ("EnumValue" === r.kind) e[t.value] = r.value;
        else if ("NullValue" === r.kind) e[t.value] = null;
        else throw eM(84, t.value, r.kind);
      }
      !1 !== globalThis.__DEV__ &&
        ((o = function () {
          return h.size;
        }),
        (tO.canonicalStringify = o)),
        tR.reset();
      var tq = [
          "connection",
          "include",
          "skip",
          "client",
          "rest",
          "export",
          "nonreactive",
        ],
        tL = tR,
        tV = Object.assign(
          function (e, t, r) {
            if (t && r && r.connection && r.connection.key) {
              if (!r.connection.filter || !(r.connection.filter.length > 0))
                return r.connection.key;
              var n = r.connection.filter ? r.connection.filter : [];
              n.sort();
              var i = {};
              return (
                n.forEach(function (e) {
                  i[e] = t[e];
                }),
                "".concat(r.connection.key, "(").concat(tL(i), ")")
              );
            }
            var o = e;
            if (t) {
              var a = tL(t);
              o += "(".concat(a, ")");
            }
            return (
              r &&
                Object.keys(r).forEach(function (e) {
                  -1 === tq.indexOf(e) &&
                    (r[e] && Object.keys(r[e]).length
                      ? (o += "@".concat(e, "(").concat(tL(r[e]), ")"))
                      : (o += "@".concat(e)));
                }),
              o
            );
          },
          {
            setStringify: function (e) {
              var t = tL;
              return (tL = e), t;
            },
          }
        );
      function tQ(e, t) {
        if (e.arguments && e.arguments.length) {
          var r = {};
          return (
            e.arguments.forEach(function (e) {
              return tM(r, e.name, e.value, t);
            }),
            r
          );
        }
        return null;
      }
      function tz(e) {
        return e.alias ? e.alias.value : e.name.value;
      }
      function tB(e, t, r) {
        for (var n, i = 0, o = t.selections; i < o.length; i++) {
          var a = o[i];
          if (tU(a)) {
            if ("__typename" === a.name.value) return e[tz(a)];
          } else n ? n.push(a) : (n = [a]);
        }
        if ("string" == typeof e.__typename) return e.__typename;
        if (n)
          for (var s = 0, u = n; s < u.length; s++) {
            var a = u[s],
              c = tB(e, tl(a, r).selectionSet, r);
            if ("string" == typeof c) return c;
          }
      }
      function tU(e) {
        return "Field" === e.kind;
      }
      function tW(e) {
        eF(e && "Document" === e.kind, 76);
        var t = e.definitions
          .filter(function (e) {
            return "FragmentDefinition" !== e.kind;
          })
          .map(function (e) {
            if ("OperationDefinition" !== e.kind) throw eM(77, e.kind);
            return e;
          });
        return eF(t.length <= 1, 78, t.length), e;
      }
      function t$(e) {
        return (
          tW(e),
          e.definitions.filter(function (e) {
            return "OperationDefinition" === e.kind;
          })[0]
        );
      }
      function tG(e) {
        return (
          e.definitions
            .filter(function (e) {
              return "OperationDefinition" === e.kind && !!e.name;
            })
            .map(function (e) {
              return e.name.value;
            })[0] || null
        );
      }
      function tH(e) {
        return e.definitions.filter(function (e) {
          return "FragmentDefinition" === e.kind;
        });
      }
      function tY(e) {
        var t = t$(e);
        return eF(t && "query" === t.operation, 79), t;
      }
      function tZ(e) {
        tW(e);
        for (var t, r = 0, n = e.definitions; r < n.length; r++) {
          var i = n[r];
          if ("OperationDefinition" === i.kind) {
            var o = i.operation;
            if ("query" === o || "mutation" === o || "subscription" === o)
              return i;
          }
          "FragmentDefinition" !== i.kind || t || (t = i);
        }
        if (t) return t;
        throw eM(83);
      }
      function tK(e) {
        var t = Object.create(null),
          r = e && e.variableDefinitions;
        return (
          r &&
            r.length &&
            r.forEach(function (e) {
              e.defaultValue && tM(t, e.variable.name, e.defaultValue);
            }),
          t
        );
      }
      function tJ(e, t) {
        return t ? t(e) : ta.of();
      }
      function tX(e) {
        return "function" == typeof e ? new t1(e) : e;
      }
      function t0(e) {
        return e.request.length <= 1;
      }
      var t1 = (function () {
          function e(e) {
            e && (this.request = e);
          }
          return (
            (e.empty = function () {
              return new e(function () {
                return ta.of();
              });
            }),
            (e.from = function (t) {
              return 0 === t.length
                ? e.empty()
                : t.map(tX).reduce(function (e, t) {
                    return e.concat(t);
                  });
            }),
            (e.split = function (t, r, n) {
              var i = tX(r),
                o = tX(n || new e(tJ));
              return Object.assign(
                new e(
                  t0(i) && t0(o)
                    ? function (e) {
                        return t(e)
                          ? i.request(e) || ta.of()
                          : o.request(e) || ta.of();
                      }
                    : function (e, r) {
                        return t(e)
                          ? i.request(e, r) || ta.of()
                          : o.request(e, r) || ta.of();
                      }
                ),
                { left: i, right: o }
              );
            }),
            (e.execute = function (e, t) {
              var r, n, i, o;
              return (
                e.request(
                  ((i = t.context),
                  (n = {
                    variables:
                      (r = (function (e) {
                        for (
                          var t = [
                              "query",
                              "operationName",
                              "variables",
                              "extensions",
                              "context",
                            ],
                            r = 0,
                            n = Object.keys(e);
                          r < n.length;
                          r++
                        ) {
                          var i = n[r];
                          if (0 > t.indexOf(i)) throw eM(43, i);
                        }
                        return e;
                      })(t)).variables || {},
                    extensions: r.extensions || {},
                    operationName: r.operationName,
                    query: r.query,
                  }).operationName ||
                    (n.operationName =
                      "string" != typeof n.query ? tG(n.query) || void 0 : ""),
                  (o = ev({}, i)),
                  Object.defineProperty(n, "setContext", {
                    enumerable: !1,
                    value: function (e) {
                      o =
                        "function" == typeof e
                          ? ev(ev({}, o), e(o))
                          : ev(ev({}, o), e);
                    },
                  }),
                  Object.defineProperty(n, "getContext", {
                    enumerable: !1,
                    value: function () {
                      return ev({}, o);
                    },
                  }),
                  n)
                ) || ta.of()
              );
            }),
            (e.concat = function (t, r) {
              var n = tX(t);
              if (t0(n)) return !1 !== globalThis.__DEV__ && eF.warn(35, n), n;
              var i = tX(r);
              return Object.assign(
                new e(
                  t0(i)
                    ? function (e) {
                        return (
                          n.request(e, function (e) {
                            return i.request(e) || ta.of();
                          }) || ta.of()
                        );
                      }
                    : function (e, t) {
                        return (
                          n.request(e, function (e) {
                            return i.request(e, t) || ta.of();
                          }) || ta.of()
                        );
                      }
                ),
                { left: n, right: i }
              );
            }),
            (e.prototype.split = function (t, r, n) {
              return this.concat(e.split(t, r, n || new e(tJ)));
            }),
            (e.prototype.concat = function (t) {
              return e.concat(this, t);
            }),
            (e.prototype.request = function (e, t) {
              throw eM(36);
            }),
            (e.prototype.onError = function (e, t) {
              if (t && t.error) return t.error(e), !1;
              throw e;
            }),
            (e.prototype.setOnError = function (e) {
              return (this.onError = e), this;
            }),
            e
          );
        })(),
        t2 = t1.execute;
      let t3 = {
          Name: [],
          Document: ["definitions"],
          OperationDefinition: [
            "name",
            "variableDefinitions",
            "directives",
            "selectionSet",
          ],
          VariableDefinition: [
            "variable",
            "type",
            "defaultValue",
            "directives",
          ],
          Variable: ["name"],
          SelectionSet: ["selections"],
          Field: ["alias", "name", "arguments", "directives", "selectionSet"],
          Argument: ["name", "value"],
          FragmentSpread: ["name", "directives"],
          InlineFragment: ["typeCondition", "directives", "selectionSet"],
          FragmentDefinition: [
            "name",
            "variableDefinitions",
            "typeCondition",
            "directives",
            "selectionSet",
          ],
          IntValue: [],
          FloatValue: [],
          StringValue: [],
          BooleanValue: [],
          NullValue: [],
          EnumValue: [],
          ListValue: ["values"],
          ObjectValue: ["fields"],
          ObjectField: ["name", "value"],
          Directive: ["name", "arguments"],
          NamedType: ["name"],
          ListType: ["type"],
          NonNullType: ["type"],
          SchemaDefinition: ["description", "directives", "operationTypes"],
          OperationTypeDefinition: ["type"],
          ScalarTypeDefinition: ["description", "name", "directives"],
          ObjectTypeDefinition: [
            "description",
            "name",
            "interfaces",
            "directives",
            "fields",
          ],
          FieldDefinition: [
            "description",
            "name",
            "arguments",
            "type",
            "directives",
          ],
          InputValueDefinition: [
            "description",
            "name",
            "type",
            "defaultValue",
            "directives",
          ],
          InterfaceTypeDefinition: [
            "description",
            "name",
            "interfaces",
            "directives",
            "fields",
          ],
          UnionTypeDefinition: ["description", "name", "directives", "types"],
          EnumTypeDefinition: ["description", "name", "directives", "values"],
          EnumValueDefinition: ["description", "name", "directives"],
          InputObjectTypeDefinition: [
            "description",
            "name",
            "directives",
            "fields",
          ],
          DirectiveDefinition: [
            "description",
            "name",
            "arguments",
            "locations",
          ],
          SchemaExtension: ["directives", "operationTypes"],
          ScalarTypeExtension: ["name", "directives"],
          ObjectTypeExtension: ["name", "interfaces", "directives", "fields"],
          InterfaceTypeExtension: [
            "name",
            "interfaces",
            "directives",
            "fields",
          ],
          UnionTypeExtension: ["name", "directives", "types"],
          EnumTypeExtension: ["name", "directives", "values"],
          InputObjectTypeExtension: ["name", "directives", "fields"],
        },
        t4 = new Set(Object.keys(t3));
      function t5(e) {
        let t = null == e ? void 0 : e.kind;
        return "string" == typeof t && t4.has(t);
      }
      ((a = d || (d = {})).QUERY = "query"),
        (a.MUTATION = "mutation"),
        (a.SUBSCRIPTION = "subscription"),
        ((s = p || (p = {})).NAME = "Name"),
        (s.DOCUMENT = "Document"),
        (s.OPERATION_DEFINITION = "OperationDefinition"),
        (s.VARIABLE_DEFINITION = "VariableDefinition"),
        (s.SELECTION_SET = "SelectionSet"),
        (s.FIELD = "Field"),
        (s.ARGUMENT = "Argument"),
        (s.FRAGMENT_SPREAD = "FragmentSpread"),
        (s.INLINE_FRAGMENT = "InlineFragment"),
        (s.FRAGMENT_DEFINITION = "FragmentDefinition"),
        (s.VARIABLE = "Variable"),
        (s.INT = "IntValue"),
        (s.FLOAT = "FloatValue"),
        (s.STRING = "StringValue"),
        (s.BOOLEAN = "BooleanValue"),
        (s.NULL = "NullValue"),
        (s.ENUM = "EnumValue"),
        (s.LIST = "ListValue"),
        (s.OBJECT = "ObjectValue"),
        (s.OBJECT_FIELD = "ObjectField"),
        (s.DIRECTIVE = "Directive"),
        (s.NAMED_TYPE = "NamedType"),
        (s.LIST_TYPE = "ListType"),
        (s.NON_NULL_TYPE = "NonNullType"),
        (s.SCHEMA_DEFINITION = "SchemaDefinition"),
        (s.OPERATION_TYPE_DEFINITION = "OperationTypeDefinition"),
        (s.SCALAR_TYPE_DEFINITION = "ScalarTypeDefinition"),
        (s.OBJECT_TYPE_DEFINITION = "ObjectTypeDefinition"),
        (s.FIELD_DEFINITION = "FieldDefinition"),
        (s.INPUT_VALUE_DEFINITION = "InputValueDefinition"),
        (s.INTERFACE_TYPE_DEFINITION = "InterfaceTypeDefinition"),
        (s.UNION_TYPE_DEFINITION = "UnionTypeDefinition"),
        (s.ENUM_TYPE_DEFINITION = "EnumTypeDefinition"),
        (s.ENUM_VALUE_DEFINITION = "EnumValueDefinition"),
        (s.INPUT_OBJECT_TYPE_DEFINITION = "InputObjectTypeDefinition"),
        (s.DIRECTIVE_DEFINITION = "DirectiveDefinition"),
        (s.SCHEMA_EXTENSION = "SchemaExtension"),
        (s.SCALAR_TYPE_EXTENSION = "ScalarTypeExtension"),
        (s.OBJECT_TYPE_EXTENSION = "ObjectTypeExtension"),
        (s.INTERFACE_TYPE_EXTENSION = "InterfaceTypeExtension"),
        (s.UNION_TYPE_EXTENSION = "UnionTypeExtension"),
        (s.ENUM_TYPE_EXTENSION = "EnumTypeExtension"),
        (s.INPUT_OBJECT_TYPE_EXTENSION = "InputObjectTypeExtension");
      let t6 = Object.freeze({});
      function t9(e, t, r = t3) {
        let n, i, o;
        let a = new Map();
        for (let e of Object.values(p))
          a.set(
            e,
            (function (e, t) {
              let r = e[t];
              return "object" == typeof r
                ? r
                : "function" == typeof r
                ? { enter: r, leave: void 0 }
                : { enter: e.enter, leave: e.leave };
            })(t, e)
          );
        let s = Array.isArray(e),
          u = [e],
          c = -1,
          l = [],
          f = e,
          h = [],
          d = [];
        do {
          var y, v, m;
          let e;
          let p = ++c === u.length,
            g = p && 0 !== l.length;
          if (p) {
            if (
              ((i = 0 === d.length ? void 0 : h[h.length - 1]),
              (f = o),
              (o = d.pop()),
              g)
            ) {
              if (s) {
                f = f.slice();
                let e = 0;
                for (let [t, r] of l) {
                  let n = t - e;
                  null === r ? (f.splice(n, 1), e++) : (f[n] = r);
                }
              } else
                for (let [e, t] of ((f = Object.defineProperties(
                  {},
                  Object.getOwnPropertyDescriptors(f)
                )),
                l))
                  f[e] = t;
            }
            (c = n.index),
              (u = n.keys),
              (l = n.edits),
              (s = n.inArray),
              (n = n.prev);
          } else if (o) {
            if (null == (f = o[(i = s ? c : u[c])])) continue;
            h.push(i);
          }
          if (!Array.isArray(f)) {
            t5(f) ||
              (function (e, t) {
                if (!e) throw Error(t);
              })(
                !1,
                `Invalid AST Node: ${(function e(t, r) {
                  switch (typeof t) {
                    case "string":
                      return JSON.stringify(t);
                    case "function":
                      return t.name ? `[function ${t.name}]` : "[function]";
                    case "object":
                      return (function (t, r) {
                        if (null === t) return "null";
                        if (r.includes(t)) return "[Circular]";
                        let n = [...r, t];
                        if ("function" == typeof t.toJSON) {
                          let r = t.toJSON();
                          if (r !== t)
                            return "string" == typeof r ? r : e(r, n);
                        } else if (Array.isArray(t))
                          return (function (t, r) {
                            if (0 === t.length) return "[]";
                            if (r.length > 2) return "[Array]";
                            let n = Math.min(10, t.length),
                              i = t.length - n,
                              o = [];
                            for (let i = 0; i < n; ++i) o.push(e(t[i], r));
                            return (
                              1 === i
                                ? o.push("... 1 more item")
                                : i > 1 && o.push(`... ${i} more items`),
                              "[" + o.join(", ") + "]"
                            );
                          })(t, n);
                        return (function (t, r) {
                          let n = Object.entries(t);
                          return 0 === n.length
                            ? "{}"
                            : r.length > 2
                            ? "[" +
                              (function (e) {
                                let t = Object.prototype.toString
                                  .call(e)
                                  .replace(/^\[object /, "")
                                  .replace(/]$/, "");
                                if (
                                  "Object" === t &&
                                  "function" == typeof e.constructor
                                ) {
                                  let t = e.constructor.name;
                                  if ("string" == typeof t && "" !== t)
                                    return t;
                                }
                                return t;
                              })(t) +
                              "]"
                            : "{ " +
                              n.map(([t, n]) => t + ": " + e(n, r)).join(", ") +
                              " }";
                        })(t, n);
                      })(t, r);
                    default:
                      return String(t);
                  }
                })(f, [])}.`
              );
            let r = p
              ? null === (y = a.get(f.kind)) || void 0 === y
                ? void 0
                : y.leave
              : null === (v = a.get(f.kind)) || void 0 === v
              ? void 0
              : v.enter;
            if ((e = null == r ? void 0 : r.call(t, f, i, o, h, d)) === t6)
              break;
            if (!1 === e) {
              if (!p) {
                h.pop();
                continue;
              }
            } else if (void 0 !== e && (l.push([i, e]), !p)) {
              if (t5(e)) f = e;
              else {
                h.pop();
                continue;
              }
            }
          }
          void 0 === e && g && l.push([i, f]),
            p
              ? h.pop()
              : ((n = { inArray: s, index: c, keys: u, edits: l, prev: n }),
                (u = (s = Array.isArray(f))
                  ? f
                  : null !== (m = r[f.kind]) && void 0 !== m
                  ? m
                  : []),
                (c = -1),
                (l = []),
                o && d.push(o),
                (o = f));
        } while (void 0 !== n);
        return 0 !== l.length ? l[l.length - 1][1] : e;
      }
      function t8(e, t) {
        var r,
          n = e.directives;
        return (
          !n ||
          !n.length ||
          ((r = []),
          n &&
            n.length &&
            n.forEach(function (e) {
              var t;
              if (!("skip" !== (t = e.name.value) && "include" !== t)) {
                var n = e.arguments,
                  i = e.name.value;
                eF(n && 1 === n.length, 70, i);
                var o = n[0];
                eF(o.name && "if" === o.name.value, 71, i);
                var a = o.value;
                eF(
                  a && ("Variable" === a.kind || "BooleanValue" === a.kind),
                  72,
                  i
                ),
                  r.push({ directive: e, ifArgument: o });
              }
            }),
          r).every(function (e) {
            var r = e.directive,
              n = e.ifArgument,
              i = !1;
            return (
              "Variable" === n.value.kind
                ? eF(
                    void 0 !== (i = t && t[n.value.name.value]),
                    69,
                    r.name.value
                  )
                : (i = n.value.value),
              "skip" === r.name.value ? !i : i
            );
          })
        );
      }
      function t7(e, t, r) {
        var n = new Set(e),
          i = n.size;
        return (
          t9(t, {
            Directive: function (e) {
              if (n.delete(e.name.value) && (!r || !n.size)) return t6;
            },
          }),
          r ? !n.size : n.size < i
        );
      }
      var re = function (e, t) {
        var r;
        try {
          r = JSON.stringify(e);
        } catch (e) {
          var n = eM(39, t, e.message);
          throw ((n.parseError = e), n);
        }
        return r;
      };
      function rt(e) {
        var t = {
          next: function () {
            return e.read();
          },
        };
        return (
          eH &&
            (t[Symbol.asyncIterator] = function () {
              return this;
            }),
          t
        );
      }
      var rr = function (e, t, r) {
          var n = Error(r);
          throw (
            ((n.name = "ServerError"),
            (n.response = e),
            (n.statusCode = e.status),
            (n.result = t),
            n)
          );
        },
        rn = Symbol(),
        ri = function (e) {
          var t = ew(
            ew(ew([], e.graphQLErrors, !0), e.clientErrors, !0),
            e.protocolErrors,
            !0
          );
          return (
            e.networkError && t.push(e.networkError),
            t
              .map(function (e) {
                return (ts(e) && e.message) || "Error message not found.";
              })
              .join("\n")
          );
        },
        ro = (function (e) {
          function t(r) {
            var n = r.graphQLErrors,
              i = r.protocolErrors,
              o = r.clientErrors,
              a = r.networkError,
              s = r.errorMessage,
              u = r.extraInfo,
              c = e.call(this, s) || this;
            return (
              (c.name = "ApolloError"),
              (c.graphQLErrors = n || []),
              (c.protocolErrors = i || []),
              (c.clientErrors = o || []),
              (c.networkError = a || null),
              (c.message = s || ri(c)),
              (c.extraInfo = u),
              (c.cause =
                ew(ew(ew([a], n || [], !0), i || [], !0), o || [], !0).find(
                  function (e) {
                    return !!e;
                  }
                ) || null),
              (c.__proto__ = t.prototype),
              c
            );
          }
          return ey(t, e), t;
        })(Error),
        ra = Array.isArray;
      function rs(e) {
        return Array.isArray(e) && e.length > 0;
      }
      var ru = Object.prototype.hasOwnProperty;
      function rc() {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        return rl(e);
      }
      function rl(e) {
        var t = e[0] || {},
          r = e.length;
        if (r > 1)
          for (var n = new rh(), i = 1; i < r; ++i) t = n.merge(t, e[i]);
        return t;
      }
      var rf = function (e, t, r) {
          return this.merge(e[r], t[r]);
        },
        rh = (function () {
          function e(e) {
            void 0 === e && (e = rf),
              (this.reconciler = e),
              (this.isObject = ts),
              (this.pastCopies = new Set());
          }
          return (
            (e.prototype.merge = function (e, t) {
              for (var r = this, n = [], i = 2; i < arguments.length; i++)
                n[i - 2] = arguments[i];
              return ts(t) && ts(e)
                ? (Object.keys(t).forEach(function (i) {
                    if (ru.call(e, i)) {
                      var o = e[i];
                      if (t[i] !== o) {
                        var a = r.reconciler.apply(r, ew([e, t, i], n, !1));
                        a !== o && ((e = r.shallowCopyForMerge(e))[i] = a);
                      }
                    } else (e = r.shallowCopyForMerge(e))[i] = t[i];
                  }),
                  e)
                : t;
            }),
            (e.prototype.shallowCopyForMerge = function (e) {
              return (
                ts(e) &&
                  !this.pastCopies.has(e) &&
                  ((e = Array.isArray(e)
                    ? e.slice(0)
                    : ev({ __proto__: Object.getPrototypeOf(e) }, e)),
                  this.pastCopies.add(e)),
                e
              );
            }),
            e
          );
        })();
      function rd(e) {
        return "incremental" in e;
      }
      function rp(e, t) {
        var r = e,
          n = new rh();
        return (
          rd(t) &&
            rs(t.incremental) &&
            t.incremental.forEach(function (e) {
              for (var t = e.data, i = e.path, o = i.length - 1; o >= 0; --o) {
                var a = i[o],
                  s = isNaN(+a) ? {} : [];
                (s[a] = t), (t = s);
              }
              r = n.merge(r, t);
            }),
          r
        );
      }
      var ry = Object.prototype.hasOwnProperty;
      function rv(e, t) {
        e.status >= 300 &&
          rr(
            e,
            (function () {
              try {
                return JSON.parse(t);
              } catch (e) {
                return t;
              }
            })(),
            "Response not successful: Received status code ".concat(e.status)
          );
        try {
          return JSON.parse(t);
        } catch (r) {
          throw (
            ((r.name = "ServerParseError"),
            (r.response = e),
            (r.statusCode = e.status),
            (r.bodyText = t),
            r)
          );
        }
      }
      var rm = function (e) {
        if (!e && "undefined" == typeof fetch) throw eM(37);
      };
      function rg(e) {
        return 9 === e || 32 === e;
      }
      let rb = /[\x00-\x1f\x22\x5c\x7f-\x9f]/g;
      function rw(e) {
        return r_[e.charCodeAt(0)];
      }
      let r_ = [
          "\\u0000",
          "\\u0001",
          "\\u0002",
          "\\u0003",
          "\\u0004",
          "\\u0005",
          "\\u0006",
          "\\u0007",
          "\\b",
          "\\t",
          "\\n",
          "\\u000B",
          "\\f",
          "\\r",
          "\\u000E",
          "\\u000F",
          "\\u0010",
          "\\u0011",
          "\\u0012",
          "\\u0013",
          "\\u0014",
          "\\u0015",
          "\\u0016",
          "\\u0017",
          "\\u0018",
          "\\u0019",
          "\\u001A",
          "\\u001B",
          "\\u001C",
          "\\u001D",
          "\\u001E",
          "\\u001F",
          "",
          "",
          '\\"',
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "\\\\",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "\\u007F",
          "\\u0080",
          "\\u0081",
          "\\u0082",
          "\\u0083",
          "\\u0084",
          "\\u0085",
          "\\u0086",
          "\\u0087",
          "\\u0088",
          "\\u0089",
          "\\u008A",
          "\\u008B",
          "\\u008C",
          "\\u008D",
          "\\u008E",
          "\\u008F",
          "\\u0090",
          "\\u0091",
          "\\u0092",
          "\\u0093",
          "\\u0094",
          "\\u0095",
          "\\u0096",
          "\\u0097",
          "\\u0098",
          "\\u0099",
          "\\u009A",
          "\\u009B",
          "\\u009C",
          "\\u009D",
          "\\u009E",
          "\\u009F",
        ],
        rx = {
          Name: { leave: (e) => e.value },
          Variable: { leave: (e) => "$" + e.name },
          Document: { leave: (e) => rS(e.definitions, "\n\n") },
          OperationDefinition: {
            leave(e) {
              let t = rE("(", rS(e.variableDefinitions, ", "), ")"),
                r = rS(
                  [e.operation, rS([e.name, t]), rS(e.directives, " ")],
                  " "
                );
              return ("query" === r ? "" : r + " ") + e.selectionSet;
            },
          },
          VariableDefinition: {
            leave: ({ variable: e, type: t, defaultValue: r, directives: n }) =>
              e + ": " + t + rE(" = ", r) + rE(" ", rS(n, " ")),
          },
          SelectionSet: { leave: ({ selections: e }) => rO(e) },
          Field: {
            leave({
              alias: e,
              name: t,
              arguments: r,
              directives: n,
              selectionSet: i,
            }) {
              let o = rE("", e, ": ") + t,
                a = o + rE("(", rS(r, ", "), ")");
              return (
                a.length > 80 && (a = o + rE("(\n", rk(rS(r, "\n")), "\n)")),
                rS([a, rS(n, " "), i], " ")
              );
            },
          },
          Argument: { leave: ({ name: e, value: t }) => e + ": " + t },
          FragmentSpread: {
            leave: ({ name: e, directives: t }) =>
              "..." + e + rE(" ", rS(t, " ")),
          },
          InlineFragment: {
            leave: ({ typeCondition: e, directives: t, selectionSet: r }) =>
              rS(["...", rE("on ", e), rS(t, " "), r], " "),
          },
          FragmentDefinition: {
            leave: ({
              name: e,
              typeCondition: t,
              variableDefinitions: r,
              directives: n,
              selectionSet: i,
            }) =>
              `fragment ${e}${rE("(", rS(r, ", "), ")")} on ${t} ${rE(
                "",
                rS(n, " "),
                " "
              )}` + i,
          },
          IntValue: { leave: ({ value: e }) => e },
          FloatValue: { leave: ({ value: e }) => e },
          StringValue: {
            leave: ({ value: e, block: t }) =>
              t
                ? (function (e, t) {
                    let r = e.replace(/"""/g, '\\"""'),
                      n = r.split(/\r\n|[\n\r]/g),
                      i = 1 === n.length,
                      o =
                        n.length > 1 &&
                        n
                          .slice(1)
                          .every((e) => 0 === e.length || rg(e.charCodeAt(0))),
                      a = r.endsWith('\\"""'),
                      s = e.endsWith('"') && !a,
                      u = e.endsWith("\\"),
                      c = s || u,
                      l = !i || e.length > 70 || c || o || a,
                      f = "",
                      h = i && rg(e.charCodeAt(0));
                    return (
                      ((l && !h) || o) && (f += "\n"),
                      (f += r),
                      (l || c) && (f += "\n"),
                      '"""' + f + '"""'
                    );
                  })(e)
                : `"${e.replace(rb, rw)}"`,
          },
          BooleanValue: { leave: ({ value: e }) => (e ? "true" : "false") },
          NullValue: { leave: () => "null" },
          EnumValue: { leave: ({ value: e }) => e },
          ListValue: { leave: ({ values: e }) => "[" + rS(e, ", ") + "]" },
          ObjectValue: { leave: ({ fields: e }) => "{" + rS(e, ", ") + "}" },
          ObjectField: { leave: ({ name: e, value: t }) => e + ": " + t },
          Directive: {
            leave: ({ name: e, arguments: t }) =>
              "@" + e + rE("(", rS(t, ", "), ")"),
          },
          NamedType: { leave: ({ name: e }) => e },
          ListType: { leave: ({ type: e }) => "[" + e + "]" },
          NonNullType: { leave: ({ type: e }) => e + "!" },
          SchemaDefinition: {
            leave: ({ description: e, directives: t, operationTypes: r }) =>
              rE("", e, "\n") + rS(["schema", rS(t, " "), rO(r)], " "),
          },
          OperationTypeDefinition: {
            leave: ({ operation: e, type: t }) => e + ": " + t,
          },
          ScalarTypeDefinition: {
            leave: ({ description: e, name: t, directives: r }) =>
              rE("", e, "\n") + rS(["scalar", t, rS(r, " ")], " "),
          },
          ObjectTypeDefinition: {
            leave: ({
              description: e,
              name: t,
              interfaces: r,
              directives: n,
              fields: i,
            }) =>
              rE("", e, "\n") +
              rS(
                ["type", t, rE("implements ", rS(r, " & ")), rS(n, " "), rO(i)],
                " "
              ),
          },
          FieldDefinition: {
            leave: ({
              description: e,
              name: t,
              arguments: r,
              type: n,
              directives: i,
            }) =>
              rE("", e, "\n") +
              t +
              (rT(r)
                ? rE("(\n", rk(rS(r, "\n")), "\n)")
                : rE("(", rS(r, ", "), ")")) +
              ": " +
              n +
              rE(" ", rS(i, " ")),
          },
          InputValueDefinition: {
            leave: ({
              description: e,
              name: t,
              type: r,
              defaultValue: n,
              directives: i,
            }) =>
              rE("", e, "\n") +
              rS([t + ": " + r, rE("= ", n), rS(i, " ")], " "),
          },
          InterfaceTypeDefinition: {
            leave: ({
              description: e,
              name: t,
              interfaces: r,
              directives: n,
              fields: i,
            }) =>
              rE("", e, "\n") +
              rS(
                [
                  "interface",
                  t,
                  rE("implements ", rS(r, " & ")),
                  rS(n, " "),
                  rO(i),
                ],
                " "
              ),
          },
          UnionTypeDefinition: {
            leave: ({ description: e, name: t, directives: r, types: n }) =>
              rE("", e, "\n") +
              rS(["union", t, rS(r, " "), rE("= ", rS(n, " | "))], " "),
          },
          EnumTypeDefinition: {
            leave: ({ description: e, name: t, directives: r, values: n }) =>
              rE("", e, "\n") + rS(["enum", t, rS(r, " "), rO(n)], " "),
          },
          EnumValueDefinition: {
            leave: ({ description: e, name: t, directives: r }) =>
              rE("", e, "\n") + rS([t, rS(r, " ")], " "),
          },
          InputObjectTypeDefinition: {
            leave: ({ description: e, name: t, directives: r, fields: n }) =>
              rE("", e, "\n") + rS(["input", t, rS(r, " "), rO(n)], " "),
          },
          DirectiveDefinition: {
            leave: ({
              description: e,
              name: t,
              arguments: r,
              repeatable: n,
              locations: i,
            }) =>
              rE("", e, "\n") +
              "directive @" +
              t +
              (rT(r)
                ? rE("(\n", rk(rS(r, "\n")), "\n)")
                : rE("(", rS(r, ", "), ")")) +
              (n ? " repeatable" : "") +
              " on " +
              rS(i, " | "),
          },
          SchemaExtension: {
            leave: ({ directives: e, operationTypes: t }) =>
              rS(["extend schema", rS(e, " "), rO(t)], " "),
          },
          ScalarTypeExtension: {
            leave: ({ name: e, directives: t }) =>
              rS(["extend scalar", e, rS(t, " ")], " "),
          },
          ObjectTypeExtension: {
            leave: ({ name: e, interfaces: t, directives: r, fields: n }) =>
              rS(
                [
                  "extend type",
                  e,
                  rE("implements ", rS(t, " & ")),
                  rS(r, " "),
                  rO(n),
                ],
                " "
              ),
          },
          InterfaceTypeExtension: {
            leave: ({ name: e, interfaces: t, directives: r, fields: n }) =>
              rS(
                [
                  "extend interface",
                  e,
                  rE("implements ", rS(t, " & ")),
                  rS(r, " "),
                  rO(n),
                ],
                " "
              ),
          },
          UnionTypeExtension: {
            leave: ({ name: e, directives: t, types: r }) =>
              rS(["extend union", e, rS(t, " "), rE("= ", rS(r, " | "))], " "),
          },
          EnumTypeExtension: {
            leave: ({ name: e, directives: t, values: r }) =>
              rS(["extend enum", e, rS(t, " "), rO(r)], " "),
          },
          InputObjectTypeExtension: {
            leave: ({ name: e, directives: t, fields: r }) =>
              rS(["extend input", e, rS(t, " "), rO(r)], " "),
          },
        };
      function rS(e, t = "") {
        var r;
        return null !== (r = null == e ? void 0 : e.filter((e) => e).join(t)) &&
          void 0 !== r
          ? r
          : "";
      }
      function rO(e) {
        return rE("{\n", rk(rS(e, "\n")), "\n}");
      }
      function rE(e, t, r = "") {
        return null != t && "" !== t ? e + t + r : "";
      }
      function rk(e) {
        return rE("  ", e.replace(/\n/g, "\n  "));
      }
      function rT(e) {
        var t;
        return (
          null !== (t = null == e ? void 0 : e.some((e) => e.includes("\n"))) &&
          void 0 !== t &&
          t
        );
      }
      var rj = Object.assign(
        function (e) {
          var t = y.get(e);
          return t || ((t = t9(e, rx)), y.set(e, t)), t;
        },
        {
          reset: function () {
            y = new tw(tS.print || 2e3);
          },
        }
      );
      rj.reset(),
        !1 !== globalThis.__DEV__ &&
          ((u = function () {
            return y ? y.size : 0;
          }),
          (tO.print = u));
      var rI = {
          http: {
            includeQuery: !0,
            includeExtensions: !1,
            preserveHeaderCase: !1,
          },
          headers: { accept: "*/*", "content-type": "application/json" },
          options: { method: "POST" },
        },
        rD = function (e, t) {
          return t(e);
        };
      function rP(e) {
        return new ta(function (t) {
          t.error(e);
        });
      }
      var rR = { kind: p.FIELD, name: { kind: p.NAME, value: "__typename" } };
      function rA(e) {
        var t = new Map();
        return function (r) {
          void 0 === r && (r = e);
          var n = t.get(r);
          return (
            n ||
              t.set(
                r,
                (n = { variables: new Set(), fragmentSpreads: new Set() })
              ),
            n
          );
        };
      }
      function rC(e, t) {
        tW(t);
        for (
          var r,
            n,
            i,
            o,
            a = rA(""),
            s = rA(""),
            u = function (e) {
              for (var t = 0, r = void 0; t < e.length && (r = e[t]); ++t)
                if (!ra(r)) {
                  if (r.kind === p.OPERATION_DEFINITION)
                    return a(r.name && r.name.value);
                  if (r.kind === p.FRAGMENT_DEFINITION) return s(r.name.value);
                }
              return !1 !== globalThis.__DEV__ && eF.error(85), null;
            },
            c = 0,
            l = t.definitions.length - 1;
          l >= 0;
          --l
        )
          t.definitions[l].kind === p.OPERATION_DEFINITION && ++c;
        var f =
            ((r = new Map()),
            (n = new Map()),
            e.forEach(function (e) {
              e && (e.name ? r.set(e.name, e) : e.test && n.set(e.test, e));
            }),
            function (e) {
              var t = r.get(e.name.value);
              return (
                !t &&
                  n.size &&
                  n.forEach(function (r, n) {
                    n(e) && (t = r);
                  }),
                t
              );
            }),
          h = function (e) {
            return (
              rs(e) &&
              e.map(f).some(function (e) {
                return e && e.remove;
              })
            );
          },
          d = new Map(),
          y = !1,
          v = {
            enter: function (e) {
              if (h(e.directives)) return (y = !0), null;
            },
          },
          m = t9(t, {
            Field: v,
            InlineFragment: v,
            VariableDefinition: {
              enter: function () {
                return !1;
              },
            },
            Variable: {
              enter: function (e, t, r, n, i) {
                var o = u(i);
                o && o.variables.add(e.name.value);
              },
            },
            FragmentSpread: {
              enter: function (e, t, r, n, i) {
                if (h(e.directives)) return (y = !0), null;
                var o = u(i);
                o && o.fragmentSpreads.add(e.name.value);
              },
            },
            FragmentDefinition: {
              enter: function (e, t, r, n) {
                d.set(JSON.stringify(n), e);
              },
              leave: function (e, t, r, n) {
                return e === d.get(JSON.stringify(n))
                  ? e
                  : c > 0 &&
                    e.selectionSet.selections.every(function (e) {
                      return (
                        e.kind === p.FIELD && "__typename" === e.name.value
                      );
                    })
                  ? ((s(e.name.value).removed = !0), (y = !0), null)
                  : void 0;
              },
            },
            Directive: {
              leave: function (e) {
                if (f(e)) return (y = !0), null;
              },
            },
          });
        if (!y) return t;
        var g = function (e) {
            return (
              e.transitiveVars ||
                ((e.transitiveVars = new Set(e.variables)),
                e.removed ||
                  e.fragmentSpreads.forEach(function (t) {
                    g(s(t)).transitiveVars.forEach(function (t) {
                      e.transitiveVars.add(t);
                    });
                  })),
              e
            );
          },
          b = new Set();
        m.definitions.forEach(function (e) {
          e.kind === p.OPERATION_DEFINITION
            ? g(a(e.name && e.name.value)).fragmentSpreads.forEach(function (
                e
              ) {
                b.add(e);
              })
            : e.kind !== p.FRAGMENT_DEFINITION ||
              0 !== c ||
              s(e.name.value).removed ||
              b.add(e.name.value);
        }),
          b.forEach(function (e) {
            g(s(e)).fragmentSpreads.forEach(function (e) {
              b.add(e);
            });
          });
        var w = {
          enter: function (e) {
            var t;
            if (((t = e.name.value), !b.has(t) || s(t).removed)) return null;
          },
        };
        return !(function e(t, r) {
          return (
            !t ||
            t.selectionSet.selections.every(function (t) {
              return t.kind === p.FRAGMENT_SPREAD && e(r[t.name.value], r);
            })
          );
        })(
          t$(
            (i = t9(m, {
              FragmentSpread: w,
              FragmentDefinition: w,
              OperationDefinition: {
                leave: function (e) {
                  if (e.variableDefinitions) {
                    var t = g(a(e.name && e.name.value)).transitiveVars;
                    if (t.size < e.variableDefinitions.length)
                      return ev(ev({}, e), {
                        variableDefinitions: e.variableDefinitions.filter(
                          function (e) {
                            return t.has(e.variable.name.value);
                          }
                        ),
                      });
                  }
                },
              },
            }))
          ) ||
            (eF("Document" === i.kind, 80),
            eF(i.definitions.length <= 1, 81),
            eF("FragmentDefinition" === (o = i.definitions[0]).kind, 82),
            o),
          tc(tH(i))
        )
          ? i
          : null;
      }
      var rN = Object.assign(
        function (e) {
          return t9(e, {
            SelectionSet: {
              enter: function (e, t, r) {
                if (!r || r.kind !== p.OPERATION_DEFINITION) {
                  var n = e.selections;
                  if (
                    !(
                      !n ||
                      n.some(function (e) {
                        return (
                          tU(e) &&
                          ("__typename" === e.name.value ||
                            0 === e.name.value.lastIndexOf("__", 0))
                        );
                      })
                    ) &&
                    !(
                      tU(r) &&
                      r.directives &&
                      r.directives.some(function (e) {
                        return "export" === e.name.value;
                      })
                    )
                  )
                    return ev(ev({}, e), {
                      selections: ew(ew([], n, !0), [rR], !1),
                    });
                }
              },
            },
          });
        },
        {
          added: function (e) {
            return e === rR;
          },
        }
      );
      function rF(e) {
        return (
          tW(e),
          rC(
            [
              {
                test: function (e) {
                  return "client" === e.name.value;
                },
                remove: !0,
              },
            ],
            e
          )
        );
      }
      var rM = eD(function () {
          return fetch;
        }),
        rq = function (e) {
          void 0 === e && (e = {});
          var t = e.uri,
            r = void 0 === t ? "/graphql" : t,
            n = e.fetch,
            i = e.print,
            o = void 0 === i ? rD : i,
            a = e.includeExtensions,
            s = e.preserveHeaderCase,
            u = e.useGETForQueries,
            c = e.includeUnusedVariables,
            l = void 0 !== c && c,
            f = em(e, [
              "uri",
              "fetch",
              "print",
              "includeExtensions",
              "preserveHeaderCase",
              "useGETForQueries",
              "includeUnusedVariables",
            ]);
          !1 !== globalThis.__DEV__ && rm(n || rM);
          var h = {
            http: { includeExtensions: a, preserveHeaderCase: s },
            options: f.fetchOptions,
            credentials: f.credentials,
            headers: f.headers,
          };
          return new t1(function (e) {
            var t,
              i,
              a,
              s,
              c,
              f,
              d,
              p,
              y =
                ((t = e),
                (i = r),
                t.getContext().uri ||
                  ("function" == typeof i ? i(t) : i || "/graphql")),
              v = e.getContext(),
              m = {};
            if (v.clientAwareness) {
              var g = v.clientAwareness,
                b = g.name,
                w = g.version;
              b && (m["apollographql-client-name"] = b),
                w && (m["apollographql-client-version"] = w);
            }
            var _ = ev(ev({}, m), v.headers),
              x = {
                http: v.http,
                options: v.fetchOptions,
                credentials: v.credentials,
                headers: _,
              };
            if (t7(["client"], e.query)) {
              var S = rF(e.query);
              if (!S)
                return rP(
                  Error(
                    "HttpLink: Trying to send a client-only query to the server. To send to the server, ensure a non-client field is added to the query or set the `transformOptions.removeClientFields` option to `true`."
                  )
                );
              e.query = S;
            }
            var O = (function (e, t) {
                for (var r = [], n = 2; n < arguments.length; n++)
                  r[n - 2] = arguments[n];
                var i = {},
                  o = {};
                r.forEach(function (e) {
                  (i = ev(ev(ev({}, i), e.options), {
                    headers: ev(ev({}, i.headers), e.headers),
                  })),
                    e.credentials && (i.credentials = e.credentials),
                    (o = ev(ev({}, o), e.http));
                }),
                  i.headers &&
                    (i.headers = (function (e, t) {
                      if (!t) {
                        var r = Object.create(null);
                        return (
                          Object.keys(Object(e)).forEach(function (t) {
                            r[t.toLowerCase()] = e[t];
                          }),
                          r
                        );
                      }
                      var n = Object.create(null);
                      Object.keys(Object(e)).forEach(function (t) {
                        n[t.toLowerCase()] = { originalName: t, value: e[t] };
                      });
                      var i = Object.create(null);
                      return (
                        Object.keys(n).forEach(function (e) {
                          i[n[e].originalName] = n[e].value;
                        }),
                        i
                      );
                    })(i.headers, o.preserveHeaderCase));
                var a = e.operationName,
                  s = e.extensions,
                  u = e.variables,
                  c = e.query,
                  l = { operationName: a, variables: u };
                return (
                  o.includeExtensions && (l.extensions = s),
                  o.includeQuery && (l.query = t(c, rj)),
                  { options: i, body: l }
                );
              })(e, o, rI, h, x),
              E = O.options,
              k = O.body;
            k.variables &&
              !l &&
              (k.variables =
                ((a = k.variables),
                (s = e.query),
                (c = ev({}, a)),
                (f = new Set(Object.keys(a))),
                t9(s, {
                  Variable: function (e, t, r) {
                    r &&
                      "VariableDefinition" !== r.kind &&
                      f.delete(e.name.value);
                  },
                }),
                f.forEach(function (e) {
                  delete c[e];
                }),
                c)),
              E.signal ||
                "undefined" == typeof AbortController ||
                ((p = new AbortController()), (E.signal = p.signal));
            var T =
                "OperationDefinition" === (d = tZ(e.query)).kind &&
                "subscription" === d.operation,
              j = t7(["defer"], e.query);
            if (
              (u &&
                !e.query.definitions.some(function (e) {
                  return (
                    "OperationDefinition" === e.kind &&
                    "mutation" === e.operation
                  );
                }) &&
                (E.method = "GET"),
              j || T)
            ) {
              E.headers = E.headers || {};
              var I = "multipart/mixed;";
              T && j && !1 !== globalThis.__DEV__ && eF.warn(38),
                T
                  ? (I +=
                      "boundary=graphql;subscriptionSpec=1.0,application/json")
                  : j && (I += "deferSpec=20220824,application/json"),
                (E.headers.accept = I);
            }
            if ("GET" === E.method) {
              var D = (function (e, t) {
                  var r = [],
                    n = function (e, t) {
                      r.push("".concat(e, "=").concat(encodeURIComponent(t)));
                    };
                  if (
                    ("query" in t && n("query", t.query),
                    t.operationName && n("operationName", t.operationName),
                    t.variables)
                  ) {
                    var i = void 0;
                    try {
                      i = re(t.variables, "Variables map");
                    } catch (e) {
                      return { parseError: e };
                    }
                    n("variables", i);
                  }
                  if (t.extensions) {
                    var o = void 0;
                    try {
                      o = re(t.extensions, "Extensions map");
                    } catch (e) {
                      return { parseError: e };
                    }
                    n("extensions", o);
                  }
                  var a = "",
                    s = e,
                    u = e.indexOf("#");
                  -1 !== u && ((a = e.substr(u)), (s = e.substr(0, u)));
                  var c = -1 === s.indexOf("?") ? "?" : "&";
                  return { newURI: s + c + r.join("&") + a };
                })(y, k),
                P = D.newURI,
                R = D.parseError;
              if (R) return rP(R);
              y = P;
            } else
              try {
                E.body = re(k, "Payload");
              } catch (e) {
                return rP(e);
              }
            return new ta(function (t) {
              var r =
                  n ||
                  eD(function () {
                    return fetch;
                  }) ||
                  rM,
                i = t.next.bind(t);
              return (
                r(y, E)
                  .then(function (t) {
                    e.setContext({ response: t });
                    var r,
                      n =
                        null === (r = t.headers) || void 0 === r
                          ? void 0
                          : r.get("content-type");
                    return null !== n && /^multipart\/mixed/i.test(n)
                      ? (function (e, t) {
                          return eg(this, void 0, void 0, function () {
                            var r,
                              n,
                              i,
                              o,
                              a,
                              s,
                              u,
                              c,
                              l,
                              f,
                              h,
                              d,
                              p,
                              y,
                              v,
                              m,
                              g,
                              b,
                              w,
                              _,
                              x,
                              S,
                              O;
                            return eb(this, function (E) {
                              switch (E.label) {
                                case 0:
                                  if (void 0 === TextDecoder)
                                    throw Error(
                                      "TextDecoder must be defined in the environment: please import a polyfill."
                                    );
                                  (r = new TextDecoder("utf-8")),
                                    (n =
                                      null === (O = e.headers) || void 0 === O
                                        ? void 0
                                        : O.get("content-type")),
                                    (i = "boundary="),
                                    (o = (null == n ? void 0 : n.includes(i))
                                      ? null == n
                                        ? void 0
                                        : n
                                            .substring(
                                              (null == n
                                                ? void 0
                                                : n.indexOf(i)) + i.length
                                            )
                                            .replace(/['"]/g, "")
                                            .replace(/\;(.*)/gm, "")
                                            .trim()
                                      : "-"),
                                    (a = "\r\n--".concat(o)),
                                    (s = ""),
                                    (u = (function (e) {
                                      var t,
                                        r,
                                        n,
                                        i,
                                        o,
                                        a,
                                        s = e;
                                      if (
                                        (e.body && (s = e.body),
                                        (t = s),
                                        eH && t[Symbol.asyncIterator])
                                      )
                                        return (
                                          (n = s[Symbol.asyncIterator]()),
                                          ((r = {
                                            next: function () {
                                              return n.next();
                                            },
                                          })[Symbol.asyncIterator] =
                                            function () {
                                              return this;
                                            }),
                                          r
                                        );
                                      if (s.getReader) return rt(s.getReader());
                                      if (s.stream)
                                        return rt(s.stream().getReader());
                                      if (s.arrayBuffer)
                                        return (
                                          (i = s.arrayBuffer()),
                                          (o = !1),
                                          (a = {
                                            next: function () {
                                              return o
                                                ? Promise.resolve({
                                                    value: void 0,
                                                    done: !0,
                                                  })
                                                : ((o = !0),
                                                  new Promise(function (e, t) {
                                                    i.then(function (t) {
                                                      e({ value: t, done: !1 });
                                                    }).catch(t);
                                                  }));
                                            },
                                          }),
                                          eH &&
                                            (a[Symbol.asyncIterator] =
                                              function () {
                                                return this;
                                              }),
                                          a
                                        );
                                      if (s.pipe)
                                        return (function (e) {
                                          var t = null,
                                            r = null,
                                            n = !1,
                                            i = [],
                                            o = [];
                                          function a(e) {
                                            if (!r) {
                                              if (o.length) {
                                                var t = o.shift();
                                                if (Array.isArray(t) && t[0])
                                                  return t[0]({
                                                    value: e,
                                                    done: !1,
                                                  });
                                              }
                                              i.push(e);
                                            }
                                          }
                                          function s(e) {
                                            (r = e),
                                              o.slice().forEach(function (t) {
                                                t[1](e);
                                              }),
                                              t && t();
                                          }
                                          function u() {
                                            (n = !0),
                                              o.slice().forEach(function (e) {
                                                e[0]({
                                                  value: void 0,
                                                  done: !0,
                                                });
                                              }),
                                              t && t();
                                          }
                                          (t = function () {
                                            (t = null),
                                              e.removeListener("data", a),
                                              e.removeListener("error", s),
                                              e.removeListener("end", u),
                                              e.removeListener("finish", u),
                                              e.removeListener("close", u);
                                          }),
                                            e.on("data", a),
                                            e.on("error", s),
                                            e.on("end", u),
                                            e.on("finish", u),
                                            e.on("close", u);
                                          var c = {
                                            next: function () {
                                              return new Promise(function (
                                                e,
                                                t
                                              ) {
                                                return r
                                                  ? t(r)
                                                  : i.length
                                                  ? e({
                                                      value: i.shift(),
                                                      done: !1,
                                                    })
                                                  : n
                                                  ? e({
                                                      value: void 0,
                                                      done: !0,
                                                    })
                                                  : void o.push([e, t]);
                                              });
                                            },
                                          };
                                          return (
                                            eH &&
                                              (c[Symbol.asyncIterator] =
                                                function () {
                                                  return this;
                                                }),
                                            c
                                          );
                                        })(s);
                                      throw Error(
                                        "Unknown body type for responseIterator. Please pass a streamable response."
                                      );
                                    })(e)),
                                    (c = !0),
                                    (E.label = 1);
                                case 1:
                                  if (!c) return [3, 3];
                                  return [4, u.next()];
                                case 2:
                                  for (
                                    f = (l = E.sent()).value,
                                      h = l.done,
                                      d =
                                        "string" == typeof f ? f : r.decode(f),
                                      p = s.length - a.length + 1,
                                      c = !h,
                                      s += d,
                                      y = s.indexOf(a, p);
                                    y > -1;

                                  ) {
                                    if (
                                      ((v = void 0),
                                      (v = (x = [
                                        s.slice(0, y),
                                        s.slice(y + a.length),
                                      ])[0]),
                                      (s = x[1]),
                                      (m = v.indexOf("\r\n\r\n")),
                                      (g = (function (e) {
                                        var t = {};
                                        return (
                                          e.split("\n").forEach(function (e) {
                                            var r = e.indexOf(":");
                                            if (r > -1) {
                                              var n = e
                                                  .slice(0, r)
                                                  .trim()
                                                  .toLowerCase(),
                                                i = e.slice(r + 1).trim();
                                              t[n] = i;
                                            }
                                          }),
                                          t
                                        );
                                      })(v.slice(0, m))["content-type"]) &&
                                        -1 ===
                                          g
                                            .toLowerCase()
                                            .indexOf("application/json"))
                                    )
                                      throw Error(
                                        "Unsupported patch content type: application/json is required."
                                      );
                                    if ((b = v.slice(m))) {
                                      if (
                                        Object.keys((w = rv(e, b))).length >
                                          1 ||
                                        "data" in w ||
                                        "incremental" in w ||
                                        "errors" in w ||
                                        "payload" in w
                                      ) {
                                        if (ts(w) && "payload" in w) {
                                          if (((_ = {}), "payload" in w)) {
                                            if (
                                              1 === Object.keys(w).length &&
                                              null === w.payload
                                            )
                                              return [2];
                                            _ = ev({}, w.payload);
                                          }
                                          "errors" in w &&
                                            (_ = ev(ev({}, _), {
                                              extensions: ev(
                                                ev(
                                                  {},
                                                  "extensions" in _
                                                    ? _.extensions
                                                    : null
                                                ),
                                                (((S = {})[rn] = w.errors), S)
                                              ),
                                            })),
                                            t(_);
                                        } else t(w);
                                      } else if (
                                        1 === Object.keys(w).length &&
                                        "hasNext" in w &&
                                        !w.hasNext
                                      )
                                        return [2];
                                    }
                                    y = s.indexOf(a);
                                  }
                                  return [3, 1];
                                case 3:
                                  return [2];
                              }
                            });
                          });
                        })(t, i)
                      : t
                          .text()
                          .then(function (e) {
                            return rv(t, e);
                          })
                          .then(function (r) {
                            return (
                              Array.isArray(r) ||
                                ry.call(r, "data") ||
                                ry.call(r, "errors") ||
                                rr(
                                  t,
                                  r,
                                  "Server response was missing for query '".concat(
                                    Array.isArray(e)
                                      ? e.map(function (e) {
                                          return e.operationName;
                                        })
                                      : e.operationName,
                                    "'."
                                  )
                                ),
                              r
                            );
                          })
                          .then(i);
                  })
                  .then(function () {
                    (p = void 0), t.complete();
                  })
                  .catch(function (e) {
                    (p = void 0),
                      e.result &&
                        e.result.errors &&
                        e.result.data &&
                        t.next(e.result),
                      t.error(e);
                  }),
                function () {
                  p && p.abort();
                }
              );
            });
          });
        },
        rL = (function (e) {
          function t(t) {
            void 0 === t && (t = {});
            var r = e.call(this, rq(t).request) || this;
            return (r.options = t), r;
          }
          return ey(t, e), t;
        })(t1);
      let { toString: rV, hasOwnProperty: rQ } = Object.prototype,
        rz = Function.prototype.toString,
        rB = new Map();
      function rU(e, t) {
        try {
          return (function e(t, r) {
            if (t === r) return !0;
            let n = rV.call(t);
            if (n !== rV.call(r)) return !1;
            switch (n) {
              case "[object Array]":
                if (t.length !== r.length) break;
              case "[object Object]": {
                if (rH(t, r)) return !0;
                let n = rW(t),
                  i = rW(r),
                  o = n.length;
                if (o !== i.length) return !1;
                for (let e = 0; e < o; ++e) if (!rQ.call(r, n[e])) return !1;
                for (let i = 0; i < o; ++i) {
                  let o = n[i];
                  if (!e(t[o], r[o])) return !1;
                }
                return !0;
              }
              case "[object Error]":
                return t.name === r.name && t.message === r.message;
              case "[object Number]":
                if (t != t) return r != r;
              case "[object Boolean]":
              case "[object Date]":
                return +t == +r;
              case "[object RegExp]":
              case "[object String]":
                return t == `${r}`;
              case "[object Map]":
              case "[object Set]": {
                if (t.size !== r.size) return !1;
                if (rH(t, r)) return !0;
                let i = t.entries(),
                  o = "[object Map]" === n;
                for (;;) {
                  let t = i.next();
                  if (t.done) break;
                  let [n, a] = t.value;
                  if (!r.has(n) || (o && !e(a, r.get(n)))) return !1;
                }
                return !0;
              }
              case "[object Uint16Array]":
              case "[object Uint8Array]":
              case "[object Uint32Array]":
              case "[object Int32Array]":
              case "[object Int8Array]":
              case "[object Int16Array]":
              case "[object ArrayBuffer]":
                (t = new Uint8Array(t)), (r = new Uint8Array(r));
              case "[object DataView]": {
                let e = t.byteLength;
                if (e === r.byteLength) for (; e-- && t[e] === r[e]; );
                return -1 === e;
              }
              case "[object AsyncFunction]":
              case "[object GeneratorFunction]":
              case "[object AsyncGeneratorFunction]":
              case "[object Function]": {
                let e = rz.call(t);
                if (e !== rz.call(r)) return !1;
                return !(function (e, t) {
                  let r = e.length - t.length;
                  return r >= 0 && e.indexOf(t, r) === r;
                })(e, rG);
              }
            }
            return !1;
          })(e, t);
        } finally {
          rB.clear();
        }
      }
      function rW(e) {
        return Object.keys(e).filter(r$, e);
      }
      function r$(e) {
        return void 0 !== this[e];
      }
      let rG = "{ [native code] }";
      function rH(e, t) {
        let r = rB.get(e);
        if (r) {
          if (r.has(t)) return !0;
        } else rB.set(e, (r = new Set()));
        return r.add(t), !1;
      }
      let rY = () => Object.create(null),
        { forEach: rZ, slice: rK } = Array.prototype,
        { hasOwnProperty: rJ } = Object.prototype;
      class rX {
        constructor(e = !0, t = rY) {
          (this.weakness = e), (this.makeData = t);
        }
        lookup() {
          return this.lookupArray(arguments);
        }
        lookupArray(e) {
          let t = this;
          return (
            rZ.call(e, (e) => (t = t.getChildTrie(e))),
            rJ.call(t, "data") ? t.data : (t.data = this.makeData(rK.call(e)))
          );
        }
        peek() {
          return this.peekArray(arguments);
        }
        peekArray(e) {
          let t = this;
          for (let r = 0, n = e.length; t && r < n; ++r) {
            let n = t.mapFor(e[r], !1);
            t = n && n.get(e[r]);
          }
          return t && t.data;
        }
        remove() {
          return this.removeArray(arguments);
        }
        removeArray(e) {
          let t;
          if (e.length) {
            let r = e[0],
              n = this.mapFor(r, !1),
              i = n && n.get(r);
            !i ||
              ((t = i.removeArray(rK.call(e, 1))),
              i.data || i.weak || (i.strong && i.strong.size) || n.delete(r));
          } else (t = this.data), delete this.data;
          return t;
        }
        getChildTrie(e) {
          let t = this.mapFor(e, !0),
            r = t.get(e);
          return r || t.set(e, (r = new rX(this.weakness, this.makeData))), r;
        }
        mapFor(e, t) {
          return this.weakness &&
            (function (e) {
              switch (typeof e) {
                case "object":
                  if (null === e) break;
                case "function":
                  return !0;
              }
              return !1;
            })(e)
            ? this.weak || (t ? (this.weak = new WeakMap()) : void 0)
            : this.strong || (t ? (this.strong = new Map()) : void 0);
        }
      }
      let r0 = () => Object.create(null),
        { forEach: r1, slice: r2 } = Array.prototype,
        { hasOwnProperty: r3 } = Object.prototype;
      class r4 {
        constructor(e = !0, t = r0) {
          (this.weakness = e), (this.makeData = t);
        }
        lookup(...e) {
          return this.lookupArray(e);
        }
        lookupArray(e) {
          let t = this;
          return (
            r1.call(e, (e) => (t = t.getChildTrie(e))),
            r3.call(t, "data") ? t.data : (t.data = this.makeData(r2.call(e)))
          );
        }
        peek(...e) {
          return this.peekArray(e);
        }
        peekArray(e) {
          let t = this;
          for (let r = 0, n = e.length; t && r < n; ++r) {
            let n = this.weakness && r5(e[r]) ? t.weak : t.strong;
            t = n && n.get(e[r]);
          }
          return t && t.data;
        }
        getChildTrie(e) {
          let t =
              this.weakness && r5(e)
                ? this.weak || (this.weak = new WeakMap())
                : this.strong || (this.strong = new Map()),
            r = t.get(e);
          return r || t.set(e, (r = new r4(this.weakness, this.makeData))), r;
        }
      }
      function r5(e) {
        switch (typeof e) {
          case "object":
            if (null === e) break;
          case "function":
            return !0;
        }
        return !1;
      }
      let r6 = null,
        r9 = {},
        r8 = 1;
      function r7(e) {
        try {
          return e();
        } catch (e) {}
      }
      let ne = "@wry/context:Slot",
        nt = r7(() => globalThis) || r7(() => global) || Object.create(null),
        nr =
          nt[ne] ||
          Array[ne] ||
          (function (e) {
            try {
              Object.defineProperty(nt, ne, {
                value: e,
                enumerable: !1,
                writable: !1,
                configurable: !0,
              });
            } finally {
              return e;
            }
          })(
            class {
              constructor() {
                this.id = [
                  "slot",
                  r8++,
                  Date.now(),
                  Math.random().toString(36).slice(2),
                ].join(":");
              }
              hasValue() {
                for (let e = r6; e; e = e.parent)
                  if (this.id in e.slots) {
                    let t = e.slots[this.id];
                    if (t === r9) break;
                    return e !== r6 && (r6.slots[this.id] = t), !0;
                  }
                return r6 && (r6.slots[this.id] = r9), !1;
              }
              getValue() {
                if (this.hasValue()) return r6.slots[this.id];
              }
              withValue(e, t, r, n) {
                let i = { __proto__: null, [this.id]: e },
                  o = r6;
                r6 = { parent: o, slots: i };
                try {
                  return t.apply(n, r);
                } finally {
                  r6 = o;
                }
              }
              static bind(e) {
                let t = r6;
                return function () {
                  let r = r6;
                  try {
                    return (r6 = t), e.apply(this, arguments);
                  } finally {
                    r6 = r;
                  }
                };
              }
              static noContext(e, t, r) {
                if (!r6) return e.apply(r, t);
                {
                  let n = r6;
                  try {
                    return (r6 = null), e.apply(r, t);
                  } finally {
                    r6 = n;
                  }
                }
              }
            }
          ),
        { bind: nn, noContext: ni } = nr,
        no = new nr(),
        { hasOwnProperty: na } = Object.prototype,
        ns =
          Array.from ||
          function (e) {
            let t = [];
            return e.forEach((e) => t.push(e)), t;
          };
      function nu(e) {
        let { unsubscribe: t } = e;
        "function" == typeof t && ((e.unsubscribe = void 0), t());
      }
      let nc = [];
      function nl(e, t) {
        if (!e) throw Error(t || "assertion failure");
      }
      function nf(e, t) {
        let r = e.length;
        return r > 0 && r === t.length && e[r - 1] === t[r - 1];
      }
      function nh(e) {
        switch (e.length) {
          case 0:
            throw Error("unknown value");
          case 1:
            return e[0];
          case 2:
            throw e[1];
        }
      }
      class nd {
        constructor(e) {
          (this.fn = e),
            (this.parents = new Set()),
            (this.childValues = new Map()),
            (this.dirtyChildren = null),
            (this.dirty = !0),
            (this.recomputing = !1),
            (this.value = []),
            (this.deps = null),
            ++nd.count;
        }
        peek() {
          if (1 === this.value.length && !nv(this))
            return np(this), this.value[0];
        }
        recompute(e) {
          var t;
          return (
            nl(!this.recomputing, "already recomputing"),
            np(this),
            nv(this) &&
              (n_(this),
              no.withValue(this, ny, [this, e]),
              (function (e, t) {
                if ("function" == typeof e.subscribe)
                  try {
                    nu(e), (e.unsubscribe = e.subscribe.apply(null, t));
                  } catch (t) {
                    return e.setDirty(), !1;
                  }
                return !0;
              })(this, e) &&
                ((this.dirty = !1), nv(this) || ((t = this), nm(t, nb)))),
            nh(this.value)
          );
        }
        setDirty() {
          this.dirty || ((this.dirty = !0), nm(this, ng), nu(this));
        }
        dispose() {
          this.setDirty(),
            n_(this),
            nm(this, (e, t) => {
              e.setDirty(), nx(e, this);
            });
        }
        forget() {
          this.dispose();
        }
        dependOn(e) {
          e.add(this),
            this.deps || (this.deps = nc.pop() || new Set()),
            this.deps.add(e);
        }
        forgetDeps() {
          this.deps &&
            (ns(this.deps).forEach((e) => e.delete(this)),
            this.deps.clear(),
            nc.push(this.deps),
            (this.deps = null));
        }
      }
      function np(e) {
        let t = no.getValue();
        if (t)
          return (
            e.parents.add(t),
            t.childValues.has(e) || t.childValues.set(e, []),
            nv(e) ? ng(t, e) : nb(t, e),
            t
          );
      }
      function ny(e, t) {
        let r;
        e.recomputing = !0;
        let { normalizeResult: n } = e;
        n && 1 === e.value.length && (r = e.value.slice(0)),
          (e.value.length = 0);
        try {
          if (((e.value[0] = e.fn.apply(null, t)), n && r && !nf(r, e.value)))
            try {
              e.value[0] = n(e.value[0], r[0]);
            } catch (e) {}
        } catch (t) {
          e.value[1] = t;
        }
        e.recomputing = !1;
      }
      function nv(e) {
        return e.dirty || !!(e.dirtyChildren && e.dirtyChildren.size);
      }
      function nm(e, t) {
        let r = e.parents.size;
        if (r) {
          let n = ns(e.parents);
          for (let i = 0; i < r; ++i) t(n[i], e);
        }
      }
      function ng(e, t) {
        nl(e.childValues.has(t)), nl(nv(t));
        let r = !nv(e);
        if (e.dirtyChildren) {
          if (e.dirtyChildren.has(t)) return;
        } else e.dirtyChildren = nc.pop() || new Set();
        e.dirtyChildren.add(t), r && nm(e, ng);
      }
      function nb(e, t) {
        nl(e.childValues.has(t)), nl(!nv(t));
        let r = e.childValues.get(t);
        0 === r.length
          ? e.childValues.set(t, t.value.slice(0))
          : nf(r, t.value) || e.setDirty(),
          nw(e, t),
          nv(e) || nm(e, nb);
      }
      function nw(e, t) {
        let r = e.dirtyChildren;
        r &&
          (r.delete(t),
          0 === r.size &&
            (nc.length < 100 && nc.push(r), (e.dirtyChildren = null)));
      }
      function n_(e) {
        e.childValues.size > 0 &&
          e.childValues.forEach((t, r) => {
            nx(e, r);
          }),
          e.forgetDeps(),
          nl(null === e.dirtyChildren);
      }
      function nx(e, t) {
        t.parents.delete(e), e.childValues.delete(t), nw(e, t);
      }
      nd.count = 0;
      let nS = { setDirty: !0, dispose: !0, forget: !0 };
      function nO(e) {
        let t = new Map(),
          r = e && e.subscribe;
        function n(e) {
          let n = no.getValue();
          if (n) {
            let i = t.get(e);
            i || t.set(e, (i = new Set())),
              n.dependOn(i),
              "function" == typeof r && (nu(i), (i.unsubscribe = r(e)));
          }
        }
        return (
          (n.dirty = function (e, r) {
            let n = t.get(e);
            if (n) {
              let i = r && na.call(nS, r) ? r : "setDirty";
              ns(n).forEach((e) => e[i]()), t.delete(e), nu(n);
            }
          }),
          n
        );
      }
      function nE(...e) {
        return (n || (n = new r4("function" == typeof WeakMap))).lookupArray(e);
      }
      let nk = new Set();
      function nT(
        e,
        {
          max: t = 65536,
          keyArgs: r,
          makeCacheKey: n = nE,
          normalizeResult: i,
          subscribe: o,
          cache: a = tm,
        } = Object.create(null)
      ) {
        let s = "function" == typeof a ? new a(t, (e) => e.dispose()) : a,
          u = function () {
            let t = n.apply(null, r ? r.apply(null, arguments) : arguments);
            if (void 0 === t) return e.apply(null, arguments);
            let a = s.get(t);
            a ||
              (s.set(t, (a = new nd(e))),
              (a.normalizeResult = i),
              (a.subscribe = o),
              (a.forget = () => s.delete(t)));
            let u = a.recompute(Array.prototype.slice.call(arguments));
            return (
              s.set(t, a),
              nk.add(s),
              no.hasValue() || (nk.forEach((e) => e.clean()), nk.clear()),
              u
            );
          };
        function c(e) {
          let t = e && s.get(e);
          t && t.setDirty();
        }
        function l(e) {
          let t = e && s.get(e);
          if (t) return t.peek();
        }
        function f(e) {
          return !!e && s.delete(e);
        }
        return (
          Object.defineProperty(u, "size", {
            get: () => s.size,
            configurable: !1,
            enumerable: !1,
          }),
          Object.freeze(
            (u.options = {
              max: t,
              keyArgs: r,
              makeCacheKey: n,
              normalizeResult: i,
              subscribe: o,
              cache: s,
            })
          ),
          (u.dirtyKey = c),
          (u.dirty = function () {
            c(n.apply(null, arguments));
          }),
          (u.peekKey = l),
          (u.peek = function () {
            return l(n.apply(null, arguments));
          }),
          (u.forgetKey = f),
          (u.forget = function () {
            return f(n.apply(null, arguments));
          }),
          (u.makeCacheKey = n),
          (u.getKey = r
            ? function () {
                return n.apply(null, r.apply(null, arguments));
              }
            : n),
          Object.freeze(u)
        );
      }
      function nj(e) {
        return e;
      }
      var nI = (function () {
        function e(e, t) {
          void 0 === t && (t = Object.create(null)),
            (this.resultCache = e$ ? new WeakSet() : new Set()),
            (this.transform = e),
            t.getCacheKey && (this.getCacheKey = t.getCacheKey),
            (this.cached = !1 !== t.cache),
            this.resetCache();
        }
        return (
          (e.prototype.getCacheKey = function (e) {
            return [e];
          }),
          (e.identity = function () {
            return new e(nj, { cache: !1 });
          }),
          (e.split = function (t, r, n) {
            return (
              void 0 === n && (n = e.identity()),
              Object.assign(
                new e(
                  function (e) {
                    return (t(e) ? r : n).transformDocument(e);
                  },
                  { cache: !1 }
                ),
                { left: r, right: n }
              )
            );
          }),
          (e.prototype.resetCache = function () {
            var t = this;
            if (this.cached) {
              var r = new rX(eW);
              this.performWork = nT(e.prototype.performWork.bind(this), {
                makeCacheKey: function (e) {
                  var n = t.getCacheKey(e);
                  if (n) return eF(Array.isArray(n), 68), r.lookupArray(n);
                },
                max: tS["documentTransform.cache"],
                cache: ty,
              });
            }
          }),
          (e.prototype.performWork = function (e) {
            return tW(e), this.transform(e);
          }),
          (e.prototype.transformDocument = function (e) {
            if (this.resultCache.has(e)) return e;
            var t = this.performWork(e);
            return this.resultCache.add(t), t;
          }),
          (e.prototype.concat = function (t) {
            var r = this;
            return Object.assign(
              new e(
                function (e) {
                  return t.transformDocument(r.transformDocument(e));
                },
                { cache: !1 }
              ),
              { left: this, right: t }
            );
          }),
          e
        );
      })();
      function nD(e, t, r) {
        return new ta(function (n) {
          var i = {
            then: function (e) {
              return new Promise(function (t) {
                return t(e());
              });
            },
          };
          function o(e, t) {
            return function (r) {
              if (e) {
                var o = function () {
                  return n.closed ? 0 : e(r);
                };
                i = i.then(o, o).then(
                  function (e) {
                    return n.next(e);
                  },
                  function (e) {
                    return n.error(e);
                  }
                );
              } else n[t](r);
            };
          }
          var a = {
              next: o(t, "next"),
              error: o(r, "error"),
              complete: function () {
                i.then(function () {
                  return n.complete();
                });
              },
            },
            s = e.subscribe(a);
          return function () {
            return s.unsubscribe();
          };
        });
      }
      function nP(e) {
        var t = rs(e.errors) ? e.errors.slice(0) : [];
        return (
          rd(e) &&
            rs(e.incremental) &&
            e.incremental.forEach(function (e) {
              e.errors && t.push.apply(t, e.errors);
            }),
          t
        );
      }
      function nR(e, t, r) {
        var n = [];
        e.forEach(function (e) {
          return e[t] && n.push(e);
        }),
          n.forEach(function (e) {
            return e[t](r);
          });
      }
      function nA(e) {
        function t(t) {
          Object.defineProperty(e, t, { value: ta });
        }
        return eG && Symbol.species && t(Symbol.species), t("@@species"), e;
      }
      function nC(e) {
        return e && "function" == typeof e.then;
      }
      var nN = (function (e) {
        function t(t) {
          var r =
            e.call(this, function (e) {
              return (
                r.addObserver(e),
                function () {
                  return r.removeObserver(e);
                }
              );
            }) || this;
          return (
            (r.observers = new Set()),
            (r.promise = new Promise(function (e, t) {
              (r.resolve = e), (r.reject = t);
            })),
            (r.handlers = {
              next: function (e) {
                null !== r.sub &&
                  ((r.latest = ["next", e]),
                  r.notify("next", e),
                  nR(r.observers, "next", e));
              },
              error: function (e) {
                var t = r.sub;
                null !== t &&
                  (t &&
                    setTimeout(function () {
                      return t.unsubscribe();
                    }),
                  (r.sub = null),
                  (r.latest = ["error", e]),
                  r.reject(e),
                  r.notify("error", e),
                  nR(r.observers, "error", e));
              },
              complete: function () {
                var e = r.sub,
                  t = r.sources;
                if (null !== e) {
                  var n = (void 0 === t ? [] : t).shift();
                  n
                    ? nC(n)
                      ? n.then(function (e) {
                          return (r.sub = e.subscribe(r.handlers));
                        }, r.handlers.error)
                      : (r.sub = n.subscribe(r.handlers))
                    : (e &&
                        setTimeout(function () {
                          return e.unsubscribe();
                        }),
                      (r.sub = null),
                      r.latest && "next" === r.latest[0]
                        ? r.resolve(r.latest[1])
                        : r.resolve(),
                      r.notify("complete"),
                      nR(r.observers, "complete"));
                }
              },
            }),
            (r.nextResultListeners = new Set()),
            (r.cancel = function (e) {
              r.reject(e), (r.sources = []), r.handlers.complete();
            }),
            r.promise.catch(function (e) {}),
            "function" == typeof t && (t = [new ta(t)]),
            nC(t)
              ? t.then(function (e) {
                  return r.start(e);
                }, r.handlers.error)
              : r.start(t),
            r
          );
        }
        return (
          ey(t, e),
          (t.prototype.start = function (e) {
            void 0 === this.sub &&
              ((this.sources = Array.from(e)), this.handlers.complete());
          }),
          (t.prototype.deliverLastMessage = function (e) {
            if (this.latest) {
              var t = this.latest[0],
                r = e[t];
              r && r.call(e, this.latest[1]),
                null === this.sub && "next" === t && e.complete && e.complete();
            }
          }),
          (t.prototype.addObserver = function (e) {
            this.observers.has(e) ||
              (this.deliverLastMessage(e), this.observers.add(e));
          }),
          (t.prototype.removeObserver = function (e) {
            this.observers.delete(e) &&
              this.observers.size < 1 &&
              this.handlers.complete();
          }),
          (t.prototype.notify = function (e, t) {
            var r = this.nextResultListeners;
            r.size &&
              ((this.nextResultListeners = new Set()),
              r.forEach(function (r) {
                return r(e, t);
              }));
          }),
          (t.prototype.beforeNext = function (e) {
            var t = !1;
            this.nextResultListeners.add(function (r, n) {
              t || ((t = !0), e(r, n));
            });
          }),
          t
        );
      })(ta);
      function nF(e) {
        return !!e && e < 7;
      }
      function nM() {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        var r = Object.create(null);
        return (
          e.forEach(function (e) {
            e &&
              Object.keys(e).forEach(function (t) {
                var n = e[t];
                void 0 !== n && (r[t] = n);
              });
          }),
          r
        );
      }
      nA(nN),
        ((c = v || (v = {}))[(c.loading = 1)] = "loading"),
        (c[(c.setVariables = 2)] = "setVariables"),
        (c[(c.fetchMore = 3)] = "fetchMore"),
        (c[(c.refetch = 4)] = "refetch"),
        (c[(c.poll = 6)] = "poll"),
        (c[(c.ready = 7)] = "ready"),
        (c[(c.error = 8)] = "error");
      var nq = Object.prototype.toString;
      function nL(e, t) {
        switch (nq.call(e)) {
          case "[object Array]":
            if ((t = t || new Map()).has(e)) return t.get(e);
            var r = e.slice(0);
            return (
              t.set(e, r),
              r.forEach(function (e, n) {
                r[n] = nL(e, t);
              }),
              r
            );
          case "[object Object]":
            if ((t = t || new Map()).has(e)) return t.get(e);
            var n = Object.create(Object.getPrototypeOf(e));
            return (
              t.set(e, n),
              Object.keys(e).forEach(function (r) {
                n[r] = nL(e[r], t);
              }),
              n
            );
          default:
            return e;
        }
      }
      function nV(e, t, r, n) {
        var i = t.data,
          o = em(t, ["data"]),
          a = r.data;
        return (
          rU(o, em(r, ["data"])) &&
          (function e(t, r, n, i) {
            if (r === n) return !0;
            var o = new Set();
            return t.selections.every(function (t) {
              if (o.has(t) || (o.add(t), !t8(t, i.variables) || nQ(t)))
                return !0;
              if (tU(t)) {
                var a = tz(t),
                  s = r && r[a],
                  u = n && n[a],
                  c = t.selectionSet;
                if (!c) return rU(s, u);
                var l = Array.isArray(s),
                  f = Array.isArray(u);
                if (l !== f) return !1;
                if (l && f) {
                  var h = s.length;
                  if (u.length !== h) return !1;
                  for (var d = 0; d < h; ++d)
                    if (!e(c, s[d], u[d], i)) return !1;
                  return !0;
                }
                return e(c, s, u, i);
              }
              var p = tl(t, i.fragmentMap);
              if (p) return !!nQ(p) || e(p.selectionSet, r, n, i);
            });
          })(tZ(e).selectionSet, i, a, { fragmentMap: tc(tH(e)), variables: n })
        );
      }
      function nQ(e) {
        return !!e.directives && e.directives.some(nz);
      }
      function nz(e) {
        return "nonreactive" === e.name.value;
      }
      var nB = Object.assign,
        nU = Object.hasOwnProperty,
        nW = (function (e) {
          function t(t) {
            var r = t.queryManager,
              n = t.queryInfo,
              i = t.options,
              o =
                e.call(this, function (e) {
                  try {
                    var t = e._subscription._observer;
                    t && !t.error && (t.error = nG);
                  } catch (e) {}
                  var r = !o.observers.size;
                  o.observers.add(e);
                  var n = o.last;
                  return (
                    n && n.error
                      ? e.error && e.error(n.error)
                      : n && n.result && e.next && e.next(n.result),
                    r && o.reobserve().catch(function () {}),
                    function () {
                      o.observers.delete(e) &&
                        !o.observers.size &&
                        o.tearDownQuery();
                    }
                  );
                }) || this;
            (o.observers = new Set()),
              (o.subscriptions = new Set()),
              (o.queryInfo = n),
              (o.queryManager = r),
              (o.waitForOwnResult = nY(i.fetchPolicy)),
              (o.isTornDown = !1),
              (o.subscribeToMore = o.subscribeToMore.bind(o));
            var a = r.defaultOptions.watchQuery,
              s = (void 0 === a ? {} : a).fetchPolicy,
              u = void 0 === s ? "cache-first" : s,
              c = i.fetchPolicy,
              l = void 0 === c ? u : c,
              f = i.initialFetchPolicy,
              h = void 0 === f ? ("standby" === l ? u : l) : f;
            (o.options = ev(ev({}, i), {
              initialFetchPolicy: h,
              fetchPolicy: l,
            })),
              (o.queryId = n.queryId || r.generateQueryId());
            var d = t$(o.query);
            return (o.queryName = d && d.name && d.name.value), o;
          }
          return (
            ey(t, e),
            Object.defineProperty(t.prototype, "query", {
              get: function () {
                return this.lastQuery || this.options.query;
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, "variables", {
              get: function () {
                return this.options.variables;
              },
              enumerable: !1,
              configurable: !0,
            }),
            (t.prototype.result = function () {
              var e = this;
              return new Promise(function (t, r) {
                var n = {
                    next: function (r) {
                      t(r),
                        e.observers.delete(n),
                        e.observers.size ||
                          e.queryManager.removeQuery(e.queryId),
                        setTimeout(function () {
                          i.unsubscribe();
                        }, 0);
                    },
                    error: r,
                  },
                  i = e.subscribe(n);
              });
            }),
            (t.prototype.resetDiff = function () {
              this.queryInfo.resetDiff();
            }),
            (t.prototype.getCurrentResult = function (e) {
              void 0 === e && (e = !0);
              var t = this.getLastResult(!0),
                r =
                  this.queryInfo.networkStatus ||
                  (t && t.networkStatus) ||
                  v.ready,
                n = ev(ev({}, t), { loading: nF(r), networkStatus: r }),
                i = this.options.fetchPolicy,
                o = void 0 === i ? "cache-first" : i;
              if (
                nY(o) ||
                this.queryManager.getDocumentInfo(this.query).hasForcedResolvers
              );
              else if (this.waitForOwnResult) this.queryInfo.updateWatch();
              else {
                var a = this.queryInfo.getDiff();
                (a.complete || this.options.returnPartialData) &&
                  (n.data = a.result),
                  rU(n.data, {}) && (n.data = void 0),
                  a.complete
                    ? (delete n.partial,
                      a.complete &&
                        n.networkStatus === v.loading &&
                        ("cache-first" === o || "cache-only" === o) &&
                        ((n.networkStatus = v.ready), (n.loading = !1)))
                    : (n.partial = !0),
                  !1 === globalThis.__DEV__ ||
                    a.complete ||
                    this.options.partialRefetch ||
                    n.loading ||
                    n.data ||
                    n.error ||
                    nH(a.missing);
              }
              return e && this.updateLastResult(n), n;
            }),
            (t.prototype.isDifferentFromLastResult = function (e, t) {
              return (
                !this.last ||
                (this.queryManager.getDocumentInfo(this.query)
                  .hasNonreactiveDirective
                  ? !nV(this.query, this.last.result, e, this.variables)
                  : !rU(this.last.result, e)) ||
                (t && !rU(this.last.variables, t))
              );
            }),
            (t.prototype.getLast = function (e, t) {
              var r = this.last;
              if (r && r[e] && (!t || rU(r.variables, this.variables)))
                return r[e];
            }),
            (t.prototype.getLastResult = function (e) {
              return this.getLast("result", e);
            }),
            (t.prototype.getLastError = function (e) {
              return this.getLast("error", e);
            }),
            (t.prototype.resetLastResults = function () {
              delete this.last, (this.isTornDown = !1);
            }),
            (t.prototype.resetQueryStoreErrors = function () {
              this.queryManager.resetErrors(this.queryId);
            }),
            (t.prototype.refetch = function (e) {
              var t,
                r = { pollInterval: 0 },
                n = this.options.fetchPolicy;
              if (
                ("cache-and-network" === n
                  ? (r.fetchPolicy = n)
                  : "no-cache" === n
                  ? (r.fetchPolicy = "no-cache")
                  : (r.fetchPolicy = "network-only"),
                !1 !== globalThis.__DEV__ && e && nU.call(e, "variables"))
              ) {
                var i = tY(this.query),
                  o = i.variableDefinitions;
                (o &&
                  o.some(function (e) {
                    return "variables" === e.variable.name.value;
                  })) ||
                  !1 === globalThis.__DEV__ ||
                  eF.warn(
                    20,
                    e,
                    (null === (t = i.name) || void 0 === t
                      ? void 0
                      : t.value) || i
                  );
              }
              return (
                e &&
                  !rU(this.options.variables, e) &&
                  (r.variables = this.options.variables =
                    ev(ev({}, this.options.variables), e)),
                this.queryInfo.resetLastWrite(),
                this.reobserve(r, v.refetch)
              );
            }),
            (t.prototype.fetchMore = function (e) {
              var t = this,
                r = ev(
                  ev(
                    {},
                    e.query
                      ? e
                      : ev(
                          ev(
                            ev(ev({}, this.options), {
                              query: this.options.query,
                            }),
                            e
                          ),
                          {
                            variables: ev(
                              ev({}, this.options.variables),
                              e.variables
                            ),
                          }
                        )
                  ),
                  { fetchPolicy: "no-cache" }
                );
              r.query = this.transformDocument(r.query);
              var n = this.queryManager.generateQueryId();
              this.lastQuery = e.query
                ? this.transformDocument(this.options.query)
                : r.query;
              var i = this.queryInfo,
                o = i.networkStatus;
              (i.networkStatus = v.fetchMore),
                r.notifyOnNetworkStatusChange && this.observe();
              var a = new Set();
              return this.queryManager
                .fetchQuery(n, r, v.fetchMore)
                .then(function (s) {
                  return (
                    t.queryManager.removeQuery(n),
                    i.networkStatus === v.fetchMore && (i.networkStatus = o),
                    t.queryManager.cache.batch({
                      update: function (n) {
                        var i = e.updateQuery;
                        i
                          ? n.updateQuery(
                              {
                                query: t.query,
                                variables: t.variables,
                                returnPartialData: !0,
                                optimistic: !1,
                              },
                              function (e) {
                                return i(e, {
                                  fetchMoreResult: s.data,
                                  variables: r.variables,
                                });
                              }
                            )
                          : n.writeQuery({
                              query: r.query,
                              variables: r.variables,
                              data: s.data,
                            });
                      },
                      onWatchUpdated: function (e) {
                        a.add(e.query);
                      },
                    }),
                    s
                  );
                })
                .finally(function () {
                  a.has(t.query) || n$(t);
                });
            }),
            (t.prototype.subscribeToMore = function (e) {
              var t = this,
                r = this.queryManager
                  .startGraphQLSubscription({
                    query: e.document,
                    variables: e.variables,
                    context: e.context,
                  })
                  .subscribe({
                    next: function (r) {
                      var n = e.updateQuery;
                      n &&
                        t.updateQuery(function (e, t) {
                          return n(e, {
                            subscriptionData: r,
                            variables: t.variables,
                          });
                        });
                    },
                    error: function (t) {
                      if (e.onError) {
                        e.onError(t);
                        return;
                      }
                      !1 !== globalThis.__DEV__ && eF.error(21, t);
                    },
                  });
              return (
                this.subscriptions.add(r),
                function () {
                  t.subscriptions.delete(r) && r.unsubscribe();
                }
              );
            }),
            (t.prototype.setOptions = function (e) {
              return this.reobserve(e);
            }),
            (t.prototype.silentSetOptions = function (e) {
              var t = nM(this.options, e || {});
              nB(this.options, t);
            }),
            (t.prototype.setVariables = function (e) {
              return rU(this.variables, e)
                ? this.observers.size
                  ? this.result()
                  : Promise.resolve()
                : ((this.options.variables = e), this.observers.size)
                ? this.reobserve(
                    {
                      fetchPolicy: this.options.initialFetchPolicy,
                      variables: e,
                    },
                    v.setVariables
                  )
                : Promise.resolve();
            }),
            (t.prototype.updateQuery = function (e) {
              var t = this.queryManager,
                r = e(
                  t.cache.diff({
                    query: this.options.query,
                    variables: this.variables,
                    returnPartialData: !0,
                    optimistic: !1,
                  }).result,
                  { variables: this.variables }
                );
              r &&
                (t.cache.writeQuery({
                  query: this.options.query,
                  data: r,
                  variables: this.variables,
                }),
                t.broadcastQueries());
            }),
            (t.prototype.startPolling = function (e) {
              (this.options.pollInterval = e), this.updatePolling();
            }),
            (t.prototype.stopPolling = function () {
              (this.options.pollInterval = 0), this.updatePolling();
            }),
            (t.prototype.applyNextFetchPolicy = function (e, t) {
              if (t.nextFetchPolicy) {
                var r = t.fetchPolicy,
                  n = void 0 === r ? "cache-first" : r,
                  i = t.initialFetchPolicy,
                  o = void 0 === i ? n : i;
                "standby" === n ||
                  ("function" == typeof t.nextFetchPolicy
                    ? (t.fetchPolicy = t.nextFetchPolicy(n, {
                        reason: e,
                        options: t,
                        observable: this,
                        initialFetchPolicy: o,
                      }))
                    : "variables-changed" === e
                    ? (t.fetchPolicy = o)
                    : (t.fetchPolicy = t.nextFetchPolicy));
              }
              return t.fetchPolicy;
            }),
            (t.prototype.fetch = function (e, t, r) {
              return (
                this.queryManager.setObservableQuery(this),
                this.queryManager.fetchConcastWithInfo(this.queryId, e, t, r)
              );
            }),
            (t.prototype.updatePolling = function () {
              var e = this;
              if (!this.queryManager.ssrMode) {
                var t = this.pollingInfo,
                  r = this.options.pollInterval;
                if (!r || !this.hasObservers()) {
                  t && (clearTimeout(t.timeout), delete this.pollingInfo);
                  return;
                }
                if (!t || t.interval !== r) {
                  eF(r, 22), ((t || (this.pollingInfo = {})).interval = r);
                  var n = function () {
                      var t, r;
                      e.pollingInfo &&
                        (nF(e.queryInfo.networkStatus) ||
                        (null === (r = (t = e.options).skipPollAttempt) ||
                        void 0 === r
                          ? void 0
                          : r.call(t))
                          ? i()
                          : e
                              .reobserve(
                                {
                                  fetchPolicy:
                                    "no-cache" === e.options.initialFetchPolicy
                                      ? "no-cache"
                                      : "network-only",
                                },
                                v.poll
                              )
                              .then(i, i));
                    },
                    i = function () {
                      var t = e.pollingInfo;
                      t &&
                        (clearTimeout(t.timeout),
                        (t.timeout = setTimeout(n, t.interval)));
                    };
                  i();
                }
              }
            }),
            (t.prototype.updateLastResult = function (e, t) {
              void 0 === t && (t = this.variables);
              var r = this.getLastError();
              return (
                r && this.last && !rU(t, this.last.variables) && (r = void 0),
                (this.last = ev(
                  {
                    result: this.queryManager.assumeImmutableResults
                      ? e
                      : nL(e),
                    variables: t,
                  },
                  r ? { error: r } : null
                ))
              );
            }),
            (t.prototype.reobserveAsConcast = function (e, t) {
              var r = this;
              this.isTornDown = !1;
              var n = t === v.refetch || t === v.fetchMore || t === v.poll,
                i = this.options.variables,
                o = this.options.fetchPolicy,
                a = nM(this.options, e || {}),
                s = n ? a : nB(this.options, a),
                u = this.transformDocument(s.query);
              (this.lastQuery = u),
                !n &&
                  (this.updatePolling(),
                  e &&
                    e.variables &&
                    !rU(e.variables, i) &&
                    "standby" !== s.fetchPolicy &&
                    (s.fetchPolicy === o ||
                      "function" == typeof s.nextFetchPolicy) &&
                    (this.applyNextFetchPolicy("variables-changed", s),
                    void 0 === t && (t = v.setVariables))),
                this.waitForOwnResult &&
                  (this.waitForOwnResult = nY(s.fetchPolicy));
              var c = function () {
                  r.concast === h && (r.waitForOwnResult = !1);
                },
                l = s.variables && ev({}, s.variables),
                f = this.fetch(s, t, u),
                h = f.concast,
                d = f.fromLink,
                p = {
                  next: function (e) {
                    rU(r.variables, l) && (c(), r.reportResult(e, l));
                  },
                  error: function (e) {
                    rU(r.variables, l) && (c(), r.reportError(e, l));
                  },
                };
              return (
                n ||
                  (!d && this.concast) ||
                  (this.concast &&
                    this.observer &&
                    this.concast.removeObserver(this.observer),
                  (this.concast = h),
                  (this.observer = p)),
                h.addObserver(p),
                h
              );
            }),
            (t.prototype.reobserve = function (e, t) {
              return this.reobserveAsConcast(e, t).promise;
            }),
            (t.prototype.resubscribeAfterError = function () {
              for (var e = [], t = 0; t < arguments.length; t++)
                e[t] = arguments[t];
              var r = this.last;
              this.resetLastResults();
              var n = this.subscribe.apply(this, e);
              return (this.last = r), n;
            }),
            (t.prototype.observe = function () {
              this.reportResult(this.getCurrentResult(!1), this.variables);
            }),
            (t.prototype.reportResult = function (e, t) {
              var r = this.getLastError(),
                n = this.isDifferentFromLastResult(e, t);
              (r || !e.partial || this.options.returnPartialData) &&
                this.updateLastResult(e, t),
                (r || n) && nR(this.observers, "next", e);
            }),
            (t.prototype.reportError = function (e, t) {
              var r = ev(ev({}, this.getLastResult()), {
                error: e,
                errors: e.graphQLErrors,
                networkStatus: v.error,
                loading: !1,
              });
              this.updateLastResult(r, t),
                nR(this.observers, "error", (this.last.error = e));
            }),
            (t.prototype.hasObservers = function () {
              return this.observers.size > 0;
            }),
            (t.prototype.tearDownQuery = function () {
              this.isTornDown ||
                (this.concast &&
                  this.observer &&
                  (this.concast.removeObserver(this.observer),
                  delete this.concast,
                  delete this.observer),
                this.stopPolling(),
                this.subscriptions.forEach(function (e) {
                  return e.unsubscribe();
                }),
                this.subscriptions.clear(),
                this.queryManager.stopQuery(this.queryId),
                this.observers.clear(),
                (this.isTornDown = !0));
            }),
            (t.prototype.transformDocument = function (e) {
              return this.queryManager.transform(e);
            }),
            t
          );
        })(ta);
      function n$(e) {
        var t = e.options,
          r = t.fetchPolicy,
          n = t.nextFetchPolicy;
        return "cache-and-network" === r || "network-only" === r
          ? e.reobserve({
              fetchPolicy: "cache-first",
              nextFetchPolicy: function (e, t) {
                return ((this.nextFetchPolicy = n),
                "function" == typeof this.nextFetchPolicy)
                  ? this.nextFetchPolicy(e, t)
                  : r;
              },
            })
          : e.reobserve();
      }
      function nG(e) {
        !1 !== globalThis.__DEV__ && eF.error(23, e.message, e.stack);
      }
      function nH(e) {
        !1 !== globalThis.__DEV__ &&
          e &&
          !1 !== globalThis.__DEV__ &&
          eF.debug(24, e);
      }
      function nY(e) {
        return "network-only" === e || "no-cache" === e || "standby" === e;
      }
      nA(nW);
      var nZ = new (eW ? WeakMap : Map)();
      function nK(e, t) {
        var r = e[t];
        "function" == typeof r &&
          (e[t] = function () {
            return nZ.set(e, (nZ.get(e) + 1) % 1e15), r.apply(this, arguments);
          });
      }
      function nJ(e) {
        e.notifyTimeout &&
          (clearTimeout(e.notifyTimeout), (e.notifyTimeout = void 0));
      }
      var nX = (function () {
        function e(e, t) {
          void 0 === t && (t = e.generateQueryId()),
            (this.queryId = t),
            (this.listeners = new Set()),
            (this.document = null),
            (this.lastRequestId = 1),
            (this.stopped = !1),
            (this.dirty = !1),
            (this.observableQuery = null);
          var r = (this.cache = e.cache);
          nZ.has(r) ||
            (nZ.set(r, 0), nK(r, "evict"), nK(r, "modify"), nK(r, "reset"));
        }
        return (
          (e.prototype.init = function (e) {
            var t = e.networkStatus || v.loading;
            return (
              this.variables &&
                this.networkStatus !== v.loading &&
                !rU(this.variables, e.variables) &&
                (t = v.setVariables),
              rU(e.variables, this.variables) || (this.lastDiff = void 0),
              Object.assign(this, {
                document: e.document,
                variables: e.variables,
                networkError: null,
                graphQLErrors: this.graphQLErrors || [],
                networkStatus: t,
              }),
              e.observableQuery && this.setObservableQuery(e.observableQuery),
              e.lastRequestId && (this.lastRequestId = e.lastRequestId),
              this
            );
          }),
          (e.prototype.reset = function () {
            nJ(this), (this.dirty = !1);
          }),
          (e.prototype.resetDiff = function () {
            this.lastDiff = void 0;
          }),
          (e.prototype.getDiff = function () {
            var e = this.getDiffOptions();
            if (this.lastDiff && rU(e, this.lastDiff.options))
              return this.lastDiff.diff;
            this.updateWatch(this.variables);
            var t = this.observableQuery;
            if (t && "no-cache" === t.options.fetchPolicy)
              return { complete: !1 };
            var r = this.cache.diff(e);
            return this.updateLastDiff(r, e), r;
          }),
          (e.prototype.updateLastDiff = function (e, t) {
            this.lastDiff = e
              ? { diff: e, options: t || this.getDiffOptions() }
              : void 0;
          }),
          (e.prototype.getDiffOptions = function (e) {
            var t;
            return (
              void 0 === e && (e = this.variables),
              {
                query: this.document,
                variables: e,
                returnPartialData: !0,
                optimistic: !0,
                canonizeResults:
                  null === (t = this.observableQuery) || void 0 === t
                    ? void 0
                    : t.options.canonizeResults,
              }
            );
          }),
          (e.prototype.setDiff = function (e) {
            var t,
              r = this,
              n = this.lastDiff && this.lastDiff.diff;
            !(
              e &&
              !e.complete &&
              (null === (t = this.observableQuery) || void 0 === t
                ? void 0
                : t.getLastError())
            ) &&
              (this.updateLastDiff(e),
              this.dirty ||
                rU(n && n.result, e && e.result) ||
                ((this.dirty = !0),
                this.notifyTimeout ||
                  (this.notifyTimeout = setTimeout(function () {
                    return r.notify();
                  }, 0))));
          }),
          (e.prototype.setObservableQuery = function (e) {
            var t = this;
            e !== this.observableQuery &&
              (this.oqListener && this.listeners.delete(this.oqListener),
              (this.observableQuery = e),
              e
                ? ((e.queryInfo = this),
                  this.listeners.add(
                    (this.oqListener = function () {
                      t.getDiff().fromOptimisticTransaction
                        ? e.observe()
                        : n$(e);
                    })
                  ))
                : delete this.oqListener);
          }),
          (e.prototype.notify = function () {
            var e = this;
            nJ(this),
              this.shouldNotify() &&
                this.listeners.forEach(function (t) {
                  return t(e);
                }),
              (this.dirty = !1);
          }),
          (e.prototype.shouldNotify = function () {
            if (!this.dirty || !this.listeners.size) return !1;
            if (nF(this.networkStatus) && this.observableQuery) {
              var e = this.observableQuery.options.fetchPolicy;
              if ("cache-only" !== e && "cache-and-network" !== e) return !1;
            }
            return !0;
          }),
          (e.prototype.stop = function () {
            if (!this.stopped) {
              (this.stopped = !0),
                this.reset(),
                this.cancel(),
                (this.cancel = e.prototype.cancel);
              var t = this.observableQuery;
              t && t.stopPolling();
            }
          }),
          (e.prototype.cancel = function () {}),
          (e.prototype.updateWatch = function (e) {
            var t = this;
            void 0 === e && (e = this.variables);
            var r = this.observableQuery;
            if (!r || "no-cache" !== r.options.fetchPolicy) {
              var n = ev(ev({}, this.getDiffOptions(e)), {
                watcher: this,
                callback: function (e) {
                  return t.setDiff(e);
                },
              });
              (this.lastWatch && rU(n, this.lastWatch)) ||
                (this.cancel(),
                (this.cancel = this.cache.watch((this.lastWatch = n))));
            }
          }),
          (e.prototype.resetLastWrite = function () {
            this.lastWrite = void 0;
          }),
          (e.prototype.shouldWrite = function (e, t) {
            var r = this.lastWrite;
            return !(
              r &&
              r.dmCount === nZ.get(this.cache) &&
              rU(t, r.variables) &&
              rU(e.data, r.result.data)
            );
          }),
          (e.prototype.markResult = function (e, t, r, n) {
            var i = this,
              o = new rh(),
              a = rs(e.errors) ? e.errors.slice(0) : [];
            if ((this.reset(), "incremental" in e && rs(e.incremental))) {
              var s = rp(this.getDiff().result, e);
              e.data = s;
            } else if ("hasNext" in e && e.hasNext) {
              var u = this.getDiff();
              e.data = o.merge(u.result, e.data);
            }
            (this.graphQLErrors = a),
              "no-cache" === r.fetchPolicy
                ? this.updateLastDiff(
                    { result: e.data, complete: !0 },
                    this.getDiffOptions(r.variables)
                  )
                : 0 !== n &&
                  (n0(e, r.errorPolicy)
                    ? this.cache.performTransaction(function (o) {
                        if (i.shouldWrite(e, r.variables))
                          o.writeQuery({
                            query: t,
                            data: e.data,
                            variables: r.variables,
                            overwrite: 1 === n,
                          }),
                            (i.lastWrite = {
                              result: e,
                              variables: r.variables,
                              dmCount: nZ.get(i.cache),
                            });
                        else if (i.lastDiff && i.lastDiff.diff.complete) {
                          e.data = i.lastDiff.diff.result;
                          return;
                        }
                        var a = i.getDiffOptions(r.variables),
                          s = o.diff(a);
                        !i.stopped &&
                          rU(i.variables, r.variables) &&
                          i.updateWatch(r.variables),
                          i.updateLastDiff(s, a),
                          s.complete && (e.data = s.result);
                      })
                    : (this.lastWrite = void 0));
          }),
          (e.prototype.markReady = function () {
            return (this.networkError = null), (this.networkStatus = v.ready);
          }),
          (e.prototype.markError = function (e) {
            return (
              (this.networkStatus = v.error),
              (this.lastWrite = void 0),
              this.reset(),
              e.graphQLErrors && (this.graphQLErrors = e.graphQLErrors),
              e.networkError && (this.networkError = e.networkError),
              e
            );
          }),
          e
        );
      })();
      function n0(e, t) {
        void 0 === t && (t = "none");
        var r = "ignore" === t || "all" === t,
          n = !rs(nP(e));
        return !n && r && e.data && (n = !0), n;
      }
      var n1 = Object.prototype.hasOwnProperty,
        n2 = Object.create(null),
        n3 = (function () {
          function e(e) {
            var t = this;
            (this.clientAwareness = {}),
              (this.queries = new Map()),
              (this.fetchCancelFns = new Map()),
              (this.transformCache = new tw(
                tS["queryManager.getDocumentInfo"] || 2e3
              )),
              (this.queryIdCounter = 1),
              (this.requestIdCounter = 1),
              (this.mutationIdCounter = 1),
              (this.inFlightLinkObservables = new rX(!1));
            var r = new nI(
              function (e) {
                return t.cache.transformDocument(e);
              },
              { cache: !1 }
            );
            (this.cache = e.cache),
              (this.link = e.link),
              (this.defaultOptions = e.defaultOptions),
              (this.queryDeduplication = e.queryDeduplication),
              (this.clientAwareness = e.clientAwareness),
              (this.localState = e.localState),
              (this.ssrMode = e.ssrMode),
              (this.assumeImmutableResults = e.assumeImmutableResults);
            var n = e.documentTransform;
            (this.documentTransform = n ? r.concat(n).concat(r) : r),
              (this.defaultContext = e.defaultContext || Object.create(null)),
              (this.onBroadcast = e.onBroadcast) &&
                (this.mutationStore = Object.create(null));
          }
          return (
            (e.prototype.stop = function () {
              var e = this;
              this.queries.forEach(function (t, r) {
                e.stopQueryNoBroadcast(r);
              }),
                this.cancelPendingFetches(eM(25));
            }),
            (e.prototype.cancelPendingFetches = function (e) {
              this.fetchCancelFns.forEach(function (t) {
                return t(e);
              }),
                this.fetchCancelFns.clear();
            }),
            (e.prototype.mutate = function (e) {
              return eg(this, arguments, void 0, function (e) {
                var t,
                  r,
                  n,
                  i,
                  o,
                  a,
                  s,
                  u = e.mutation,
                  c = e.variables,
                  l = e.optimisticResponse,
                  f = e.updateQueries,
                  h = e.refetchQueries,
                  d = void 0 === h ? [] : h,
                  p = e.awaitRefetchQueries,
                  y = void 0 !== p && p,
                  v = e.update,
                  m = e.onQueryUpdated,
                  g = e.fetchPolicy,
                  b =
                    void 0 === g
                      ? (null === (a = this.defaultOptions.mutate) ||
                        void 0 === a
                          ? void 0
                          : a.fetchPolicy) || "network-only"
                      : g,
                  w = e.errorPolicy,
                  _ =
                    void 0 === w
                      ? (null === (s = this.defaultOptions.mutate) ||
                        void 0 === s
                          ? void 0
                          : s.errorPolicy) || "none"
                      : w,
                  x = e.keepRootFields,
                  S = e.context;
                return eb(this, function (e) {
                  switch (e.label) {
                    case 0:
                      if (
                        (eF(u, 26),
                        eF("network-only" === b || "no-cache" === b, 27),
                        (t = this.generateMutationId()),
                        (u = this.cache.transformForLink(this.transform(u))),
                        (r = this.getDocumentInfo(u).hasClientExports),
                        (c = this.getVariables(u, c)),
                        !r)
                      )
                        return [3, 2];
                      return [4, this.localState.addExportedVariables(u, c, S)];
                    case 1:
                      (c = e.sent()), (e.label = 2);
                    case 2:
                      return (
                        (n =
                          this.mutationStore &&
                          (this.mutationStore[t] = {
                            mutation: u,
                            variables: c,
                            loading: !0,
                            error: null,
                          })),
                        (i =
                          l &&
                          this.markMutationOptimistic(l, {
                            mutationId: t,
                            document: u,
                            variables: c,
                            fetchPolicy: b,
                            errorPolicy: _,
                            context: S,
                            updateQueries: f,
                            update: v,
                            keepRootFields: x,
                          })),
                        this.broadcastQueries(),
                        (o = this),
                        [
                          2,
                          new Promise(function (e, r) {
                            return nD(
                              o.getObservableFromLink(
                                u,
                                ev(ev({}, S), {
                                  optimisticResponse: i ? l : void 0,
                                }),
                                c,
                                {},
                                !1
                              ),
                              function (e) {
                                if (rs(nP(e)) && "none" === _)
                                  throw new ro({ graphQLErrors: nP(e) });
                                n && ((n.loading = !1), (n.error = null));
                                var r = ev({}, e);
                                return (
                                  "function" == typeof d && (d = d(r)),
                                  "ignore" === _ &&
                                    rs(nP(r)) &&
                                    delete r.errors,
                                  o.markMutationResult({
                                    mutationId: t,
                                    result: r,
                                    document: u,
                                    variables: c,
                                    fetchPolicy: b,
                                    errorPolicy: _,
                                    context: S,
                                    update: v,
                                    updateQueries: f,
                                    awaitRefetchQueries: y,
                                    refetchQueries: d,
                                    removeOptimistic: i ? t : void 0,
                                    onQueryUpdated: m,
                                    keepRootFields: x,
                                  })
                                );
                              }
                            ).subscribe({
                              next: function (t) {
                                o.broadcastQueries(),
                                  ("hasNext" in t && !1 !== t.hasNext) || e(t);
                              },
                              error: function (e) {
                                n && ((n.loading = !1), (n.error = e)),
                                  i && o.cache.removeOptimistic(t),
                                  o.broadcastQueries(),
                                  r(
                                    e instanceof ro
                                      ? e
                                      : new ro({ networkError: e })
                                  );
                              },
                            });
                          }),
                        ]
                      );
                  }
                });
              });
            }),
            (e.prototype.markMutationResult = function (e, t) {
              var r = this;
              void 0 === t && (t = this.cache);
              var n = e.result,
                i = [],
                o = "no-cache" === e.fetchPolicy;
              if (!o && n0(n, e.errorPolicy)) {
                if (
                  (rd(n) ||
                    i.push({
                      result: n.data,
                      dataId: "ROOT_MUTATION",
                      query: e.document,
                      variables: e.variables,
                    }),
                  rd(n) && rs(n.incremental))
                ) {
                  var a = t.diff({
                      id: "ROOT_MUTATION",
                      query: this.getDocumentInfo(e.document).asQuery,
                      variables: e.variables,
                      optimistic: !1,
                      returnPartialData: !0,
                    }),
                    s = void 0;
                  a.result && (s = rp(a.result, n)),
                    void 0 !== s &&
                      ((n.data = s),
                      i.push({
                        result: s,
                        dataId: "ROOT_MUTATION",
                        query: e.document,
                        variables: e.variables,
                      }));
                }
                var u = e.updateQueries;
                u &&
                  this.queries.forEach(function (e, o) {
                    var a = e.observableQuery,
                      s = a && a.queryName;
                    if (s && n1.call(u, s)) {
                      var c = u[s],
                        l = r.queries.get(o),
                        f = l.document,
                        h = l.variables,
                        d = t.diff({
                          query: f,
                          variables: h,
                          returnPartialData: !0,
                          optimistic: !1,
                        }),
                        p = d.result;
                      if (d.complete && p) {
                        var y = c(p, {
                          mutationResult: n,
                          queryName: (f && tG(f)) || void 0,
                          queryVariables: h,
                        });
                        y &&
                          i.push({
                            result: y,
                            dataId: "ROOT_QUERY",
                            query: f,
                            variables: h,
                          });
                      }
                    }
                  });
              }
              if (
                i.length > 0 ||
                (e.refetchQueries || "").length > 0 ||
                e.update ||
                e.onQueryUpdated ||
                e.removeOptimistic
              ) {
                var c = [];
                if (
                  (this.refetchQueries({
                    updateCache: function (t) {
                      o ||
                        i.forEach(function (e) {
                          return t.write(e);
                        });
                      var a,
                        s = e.update,
                        u =
                          !(rd((a = n)) || ("hasNext" in a && "data" in a)) ||
                          (rd(n) && !n.hasNext);
                      if (s) {
                        if (!o) {
                          var c = t.diff({
                            id: "ROOT_MUTATION",
                            query: r.getDocumentInfo(e.document).asQuery,
                            variables: e.variables,
                            optimistic: !1,
                            returnPartialData: !0,
                          });
                          c.complete &&
                            ("incremental" in
                              (n = ev(ev({}, n), { data: c.result })) &&
                              delete n.incremental,
                            "hasNext" in n && delete n.hasNext);
                        }
                        u &&
                          s(t, n, {
                            context: e.context,
                            variables: e.variables,
                          });
                      }
                      o ||
                        e.keepRootFields ||
                        !u ||
                        t.modify({
                          id: "ROOT_MUTATION",
                          fields: function (e, t) {
                            var r = t.fieldName,
                              n = t.DELETE;
                            return "__typename" === r ? e : n;
                          },
                        });
                    },
                    include: e.refetchQueries,
                    optimistic: !1,
                    removeOptimistic: e.removeOptimistic,
                    onQueryUpdated: e.onQueryUpdated || null,
                  }).forEach(function (e) {
                    return c.push(e);
                  }),
                  e.awaitRefetchQueries || e.onQueryUpdated)
                )
                  return Promise.all(c).then(function () {
                    return n;
                  });
              }
              return Promise.resolve(n);
            }),
            (e.prototype.markMutationOptimistic = function (e, t) {
              var r = this,
                n = "function" == typeof e ? e(t.variables, { IGNORE: n2 }) : e;
              return (
                n !== n2 &&
                (this.cache.recordOptimisticTransaction(function (e) {
                  try {
                    r.markMutationResult(
                      ev(ev({}, t), { result: { data: n } }),
                      e
                    );
                  } catch (e) {
                    !1 !== globalThis.__DEV__ && eF.error(e);
                  }
                }, t.mutationId),
                !0)
              );
            }),
            (e.prototype.fetchQuery = function (e, t, r) {
              return this.fetchConcastWithInfo(e, t, r).concast.promise;
            }),
            (e.prototype.getQueryStore = function () {
              var e = Object.create(null);
              return (
                this.queries.forEach(function (t, r) {
                  e[r] = {
                    variables: t.variables,
                    networkStatus: t.networkStatus,
                    networkError: t.networkError,
                    graphQLErrors: t.graphQLErrors,
                  };
                }),
                e
              );
            }),
            (e.prototype.resetErrors = function (e) {
              var t = this.queries.get(e);
              t && ((t.networkError = void 0), (t.graphQLErrors = []));
            }),
            (e.prototype.transform = function (e) {
              return this.documentTransform.transformDocument(e);
            }),
            (e.prototype.getDocumentInfo = function (e) {
              var t = this.transformCache;
              if (!t.has(e)) {
                var r = {
                  hasClientExports: e && t7(["client", "export"], e, !0),
                  hasForcedResolvers: this.localState.shouldForceResolvers(e),
                  hasNonreactiveDirective: t7(["nonreactive"], e),
                  clientQuery: this.localState.clientQuery(e),
                  serverQuery: rC(
                    [
                      { name: "client", remove: !0 },
                      { name: "connection" },
                      { name: "nonreactive" },
                    ],
                    e
                  ),
                  defaultVars: tK(t$(e)),
                  asQuery: ev(ev({}, e), {
                    definitions: e.definitions.map(function (e) {
                      return "OperationDefinition" === e.kind &&
                        "query" !== e.operation
                        ? ev(ev({}, e), { operation: "query" })
                        : e;
                    }),
                  }),
                };
                t.set(e, r);
              }
              return t.get(e);
            }),
            (e.prototype.getVariables = function (e, t) {
              return ev(ev({}, this.getDocumentInfo(e).defaultVars), t);
            }),
            (e.prototype.watchQuery = function (e) {
              var t = this.transform(e.query);
              void 0 ===
                (e = ev(ev({}, e), {
                  variables: this.getVariables(t, e.variables),
                })).notifyOnNetworkStatusChange &&
                (e.notifyOnNetworkStatusChange = !1);
              var r = new nX(this),
                n = new nW({ queryManager: this, queryInfo: r, options: e });
              return (
                (n.lastQuery = t),
                this.queries.set(n.queryId, r),
                r.init({
                  document: t,
                  observableQuery: n,
                  variables: n.variables,
                }),
                n
              );
            }),
            (e.prototype.query = function (e, t) {
              var r = this;
              return (
                void 0 === t && (t = this.generateQueryId()),
                eF(e.query, 28),
                eF("Document" === e.query.kind, 29),
                eF(!e.returnPartialData, 30),
                eF(!e.pollInterval, 31),
                this.fetchQuery(
                  t,
                  ev(ev({}, e), { query: this.transform(e.query) })
                ).finally(function () {
                  return r.stopQuery(t);
                })
              );
            }),
            (e.prototype.generateQueryId = function () {
              return String(this.queryIdCounter++);
            }),
            (e.prototype.generateRequestId = function () {
              return this.requestIdCounter++;
            }),
            (e.prototype.generateMutationId = function () {
              return String(this.mutationIdCounter++);
            }),
            (e.prototype.stopQueryInStore = function (e) {
              this.stopQueryInStoreNoBroadcast(e), this.broadcastQueries();
            }),
            (e.prototype.stopQueryInStoreNoBroadcast = function (e) {
              var t = this.queries.get(e);
              t && t.stop();
            }),
            (e.prototype.clearStore = function (e) {
              return (
                void 0 === e && (e = { discardWatches: !0 }),
                this.cancelPendingFetches(eM(32)),
                this.queries.forEach(function (e) {
                  e.observableQuery ? (e.networkStatus = v.loading) : e.stop();
                }),
                this.mutationStore &&
                  (this.mutationStore = Object.create(null)),
                this.cache.reset(e)
              );
            }),
            (e.prototype.getObservableQueries = function (e) {
              var t = this;
              void 0 === e && (e = "active");
              var r = new Map(),
                n = new Map(),
                i = new Set();
              return (
                Array.isArray(e) &&
                  e.forEach(function (e) {
                    "string" == typeof e
                      ? n.set(e, !1)
                      : ts(e) &&
                        "Document" === e.kind &&
                        Array.isArray(e.definitions)
                      ? n.set(t.transform(e), !1)
                      : ts(e) && e.query && i.add(e);
                  }),
                this.queries.forEach(function (t, i) {
                  var o = t.observableQuery,
                    a = t.document;
                  if (o) {
                    if ("all" === e) {
                      r.set(i, o);
                      return;
                    }
                    var s = o.queryName;
                    if (
                      "standby" === o.options.fetchPolicy ||
                      ("active" === e && !o.hasObservers())
                    )
                      return;
                    ("active" === e || (s && n.has(s)) || (a && n.has(a))) &&
                      (r.set(i, o), s && n.set(s, !0), a && n.set(a, !0));
                  }
                }),
                i.size &&
                  i.forEach(function (e) {
                    var n = eA("legacyOneTimeQuery"),
                      i = t
                        .getQuery(n)
                        .init({ document: e.query, variables: e.variables }),
                      o = new nW({
                        queryManager: t,
                        queryInfo: i,
                        options: ev(ev({}, e), { fetchPolicy: "network-only" }),
                      });
                    eF(o.queryId === n), i.setObservableQuery(o), r.set(n, o);
                  }),
                !1 !== globalThis.__DEV__ &&
                  n.size &&
                  n.forEach(function (e, t) {
                    e ||
                      !1 === globalThis.__DEV__ ||
                      eF.warn("string" == typeof t ? 33 : 34, t);
                  }),
                r
              );
            }),
            (e.prototype.reFetchObservableQueries = function (e) {
              var t = this;
              void 0 === e && (e = !1);
              var r = [];
              return (
                this.getObservableQueries(e ? "all" : "active").forEach(
                  function (n, i) {
                    var o = n.options.fetchPolicy;
                    n.resetLastResults(),
                      (e || ("standby" !== o && "cache-only" !== o)) &&
                        r.push(n.refetch()),
                      t.getQuery(i).setDiff(null);
                  }
                ),
                this.broadcastQueries(),
                Promise.all(r)
              );
            }),
            (e.prototype.setObservableQuery = function (e) {
              this.getQuery(e.queryId).setObservableQuery(e);
            }),
            (e.prototype.startGraphQLSubscription = function (e) {
              var t = this,
                r = e.query,
                n = e.fetchPolicy,
                i = e.errorPolicy,
                o = void 0 === i ? "none" : i,
                a = e.variables,
                s = e.context,
                u = void 0 === s ? {} : s,
                c = e.extensions,
                l = void 0 === c ? {} : c;
              (r = this.transform(r)), (a = this.getVariables(r, a));
              var f = function (e) {
                return t.getObservableFromLink(r, u, e, l).map(function (i) {
                  "no-cache" !== n &&
                    (n0(i, o) &&
                      t.cache.write({
                        query: r,
                        result: i.data,
                        dataId: "ROOT_SUBSCRIPTION",
                        variables: e,
                      }),
                    t.broadcastQueries());
                  var a = rs(nP(i)),
                    s = !!i.extensions && Array.isArray(i.extensions[rn]);
                  if (a || s) {
                    var u = {};
                    if (
                      (a && (u.graphQLErrors = i.errors),
                      s && (u.protocolErrors = i.extensions[rn]),
                      "none" === o || s)
                    )
                      throw new ro(u);
                  }
                  return "ignore" === o && delete i.errors, i;
                });
              };
              if (this.getDocumentInfo(r).hasClientExports) {
                var h = this.localState.addExportedVariables(r, a, u).then(f);
                return new ta(function (e) {
                  var t = null;
                  return (
                    h.then(function (r) {
                      return (t = r.subscribe(e));
                    }, e.error),
                    function () {
                      return t && t.unsubscribe();
                    }
                  );
                });
              }
              return f(a);
            }),
            (e.prototype.stopQuery = function (e) {
              this.stopQueryNoBroadcast(e), this.broadcastQueries();
            }),
            (e.prototype.stopQueryNoBroadcast = function (e) {
              this.stopQueryInStoreNoBroadcast(e), this.removeQuery(e);
            }),
            (e.prototype.removeQuery = function (e) {
              this.fetchCancelFns.delete(e),
                this.queries.has(e) &&
                  (this.getQuery(e).stop(), this.queries.delete(e));
            }),
            (e.prototype.broadcastQueries = function () {
              this.onBroadcast && this.onBroadcast(),
                this.queries.forEach(function (e) {
                  return e.notify();
                });
            }),
            (e.prototype.getLocalState = function () {
              return this.localState;
            }),
            (e.prototype.getObservableFromLink = function (e, t, r, n, i) {
              var o,
                a,
                s = this;
              void 0 === i &&
                (i =
                  null !== (o = null == t ? void 0 : t.queryDeduplication) &&
                  void 0 !== o
                    ? o
                    : this.queryDeduplication);
              var u = this.getDocumentInfo(e),
                c = u.serverQuery,
                l = u.clientQuery;
              if (c) {
                var f = this.inFlightLinkObservables,
                  h = this.link,
                  d = {
                    query: c,
                    variables: r,
                    operationName: tG(c) || void 0,
                    context: this.prepareContext(
                      ev(ev({}, t), { forceFetch: !i })
                    ),
                    extensions: n,
                  };
                if (((t = d.context), i)) {
                  var p = rj(c),
                    y = tR(r),
                    v = f.lookup(p, y);
                  if (!(a = v.observable)) {
                    var m = new nN([t2(h, d)]);
                    (a = v.observable = m),
                      m.beforeNext(function () {
                        f.remove(p, y);
                      });
                  }
                } else a = new nN([t2(h, d)]);
              } else
                (a = new nN([ta.of({ data: {} })])),
                  (t = this.prepareContext(t));
              return (
                l &&
                  (a = nD(a, function (e) {
                    return s.localState.runResolvers({
                      document: l,
                      remoteResult: e,
                      context: t,
                      variables: r,
                    });
                  })),
                a
              );
            }),
            (e.prototype.getResultsFromLink = function (e, t, r) {
              var n = (e.lastRequestId = this.generateRequestId()),
                i = this.cache.transformForLink(r.query);
              return nD(
                this.getObservableFromLink(i, r.context, r.variables),
                function (o) {
                  var a = nP(o),
                    s = a.length > 0;
                  if (n >= e.lastRequestId) {
                    if (s && "none" === r.errorPolicy)
                      throw e.markError(new ro({ graphQLErrors: a }));
                    e.markResult(o, i, r, t), e.markReady();
                  }
                  var u = { data: o.data, loading: !1, networkStatus: v.ready };
                  return (
                    s &&
                      "ignore" !== r.errorPolicy &&
                      ((u.errors = a), (u.networkStatus = v.error)),
                    u
                  );
                },
                function (t) {
                  var r = t.hasOwnProperty("graphQLErrors")
                    ? t
                    : new ro({ networkError: t });
                  throw (n >= e.lastRequestId && e.markError(r), r);
                }
              );
            }),
            (e.prototype.fetchConcastWithInfo = function (e, t, r, n) {
              var i,
                o,
                a = this;
              void 0 === r && (r = v.loading), void 0 === n && (n = t.query);
              var s = this.getVariables(n, t.variables),
                u = this.getQuery(e),
                c = this.defaultOptions.watchQuery,
                l = t.fetchPolicy,
                f = void 0 === l ? (c && c.fetchPolicy) || "cache-first" : l,
                h = t.errorPolicy,
                d = void 0 === h ? (c && c.errorPolicy) || "none" : h,
                p = t.returnPartialData,
                y = t.notifyOnNetworkStatusChange,
                m = t.context,
                g = Object.assign({}, t, {
                  query: n,
                  variables: s,
                  fetchPolicy: f,
                  errorPolicy: d,
                  returnPartialData: void 0 !== p && p,
                  notifyOnNetworkStatusChange: void 0 !== y && y,
                  context: void 0 === m ? {} : m,
                }),
                b = function (e) {
                  g.variables = e;
                  var n = a.fetchQueryByPolicy(u, g, r);
                  return (
                    "standby" !== g.fetchPolicy &&
                      n.sources.length > 0 &&
                      u.observableQuery &&
                      u.observableQuery.applyNextFetchPolicy("after-fetch", t),
                    n
                  );
                },
                w = function () {
                  return a.fetchCancelFns.delete(e);
                };
              if (
                (this.fetchCancelFns.set(e, function (e) {
                  w(),
                    setTimeout(function () {
                      return i.cancel(e);
                    });
                }),
                this.getDocumentInfo(g.query).hasClientExports)
              )
                (i = new nN(
                  this.localState
                    .addExportedVariables(g.query, g.variables, g.context)
                    .then(b)
                    .then(function (e) {
                      return e.sources;
                    })
                )),
                  (o = !0);
              else {
                var _ = b(g.variables);
                (o = _.fromLink), (i = new nN(_.sources));
              }
              return i.promise.then(w, w), { concast: i, fromLink: o };
            }),
            (e.prototype.refetchQueries = function (e) {
              var t = this,
                r = e.updateCache,
                n = e.include,
                i = e.optimistic,
                o = void 0 !== i && i,
                a = e.removeOptimistic,
                s = void 0 === a ? (o ? eA("refetchQueries") : void 0) : a,
                u = e.onQueryUpdated,
                c = new Map();
              n &&
                this.getObservableQueries(n).forEach(function (e, r) {
                  c.set(r, { oq: e, lastDiff: t.getQuery(r).getDiff() });
                });
              var l = new Map();
              return (
                r &&
                  this.cache.batch({
                    update: r,
                    optimistic: (o && s) || !1,
                    removeOptimistic: s,
                    onWatchUpdated: function (e, t, r) {
                      var n =
                        e.watcher instanceof nX && e.watcher.observableQuery;
                      if (n) {
                        if (u) {
                          c.delete(n.queryId);
                          var i = u(n, t, r);
                          return (
                            !0 === i && (i = n.refetch()),
                            !1 !== i && l.set(n, i),
                            i
                          );
                        }
                        null !== u &&
                          c.set(n.queryId, { oq: n, lastDiff: r, diff: t });
                      }
                    },
                  }),
                c.size &&
                  c.forEach(function (e, r) {
                    var n,
                      i = e.oq,
                      o = e.lastDiff,
                      a = e.diff;
                    if (u) {
                      if (!a) {
                        var s = i.queryInfo;
                        s.reset(), (a = s.getDiff());
                      }
                      n = u(i, a, o);
                    }
                    (u && !0 !== n) || (n = i.refetch()),
                      !1 !== n && l.set(i, n),
                      r.indexOf("legacyOneTimeQuery") >= 0 &&
                        t.stopQueryNoBroadcast(r);
                  }),
                s && this.cache.removeOptimistic(s),
                l
              );
            }),
            (e.prototype.fetchQueryByPolicy = function (e, t, r) {
              var n = this,
                i = t.query,
                o = t.variables,
                a = t.fetchPolicy,
                s = t.refetchWritePolicy,
                u = t.errorPolicy,
                c = t.returnPartialData,
                l = t.context,
                f = t.notifyOnNetworkStatusChange,
                h = e.networkStatus;
              e.init({ document: i, variables: o, networkStatus: r });
              var d = function () {
                  return e.getDiff();
                },
                p = function (t, r) {
                  void 0 === r && (r = e.networkStatus || v.loading);
                  var a = t.result;
                  !1 === globalThis.__DEV__ || c || rU(a, {}) || nH(t.missing);
                  var s = function (e) {
                    return ta.of(
                      ev(
                        { data: e, loading: nF(r), networkStatus: r },
                        t.complete ? null : { partial: !0 }
                      )
                    );
                  };
                  return a && n.getDocumentInfo(i).hasForcedResolvers
                    ? n.localState
                        .runResolvers({
                          document: i,
                          remoteResult: { data: a },
                          context: l,
                          variables: o,
                          onlyRunForcedResolvers: !0,
                        })
                        .then(function (e) {
                          return s(e.data || void 0);
                        })
                    : "none" === u &&
                      r === v.refetch &&
                      Array.isArray(t.missing)
                    ? s(void 0)
                    : s(a);
                },
                y =
                  "no-cache" === a
                    ? 0
                    : r === v.refetch && "merge" !== s
                    ? 1
                    : 2,
                m = function () {
                  return n.getResultsFromLink(e, y, {
                    query: i,
                    variables: o,
                    context: l,
                    fetchPolicy: a,
                    errorPolicy: u,
                  });
                },
                g = f && "number" == typeof h && h !== r && nF(r);
              switch (a) {
                default:
                case "cache-first":
                  var b = d();
                  if (b.complete)
                    return { fromLink: !1, sources: [p(b, e.markReady())] };
                  if (c || g) return { fromLink: !0, sources: [p(b), m()] };
                  return { fromLink: !0, sources: [m()] };
                case "cache-and-network":
                  var b = d();
                  if (b.complete || c || g)
                    return { fromLink: !0, sources: [p(b), m()] };
                  return { fromLink: !0, sources: [m()] };
                case "cache-only":
                  return { fromLink: !1, sources: [p(d(), e.markReady())] };
                case "network-only":
                  if (g) return { fromLink: !0, sources: [p(d()), m()] };
                  return { fromLink: !0, sources: [m()] };
                case "no-cache":
                  if (g)
                    return { fromLink: !0, sources: [p(e.getDiff()), m()] };
                  return { fromLink: !0, sources: [m()] };
                case "standby":
                  return { fromLink: !1, sources: [] };
              }
            }),
            (e.prototype.getQuery = function (e) {
              return (
                e &&
                  !this.queries.has(e) &&
                  this.queries.set(e, new nX(this, e)),
                this.queries.get(e)
              );
            }),
            (e.prototype.prepareContext = function (e) {
              void 0 === e && (e = {});
              var t = this.localState.prepareContext(e);
              return ev(ev(ev({}, this.defaultContext), t), {
                clientAwareness: this.clientAwareness,
              });
            }),
            e
          );
        })();
      function n4(e) {
        return (
          e.kind === p.FIELD ||
          e.kind === p.FRAGMENT_SPREAD ||
          e.kind === p.INLINE_FRAGMENT
        );
      }
      var n5 = new nr(),
        n6 = new WeakMap();
      function n9(e) {
        var t = n6.get(e);
        return t || n6.set(e, (t = { vars: new Set(), dep: nO() })), t;
      }
      function n8(e) {
        n9(e).vars.forEach(function (t) {
          return t.forgetCache(e);
        });
      }
      function n7(e) {
        var t = new Set(),
          r = new Set(),
          n = function (o) {
            if (arguments.length > 0) {
              if (e !== o) {
                (e = o),
                  t.forEach(function (e) {
                    n9(e).dep.dirty(n),
                      e.broadcastWatches && e.broadcastWatches();
                  });
                var a = Array.from(r);
                r.clear(),
                  a.forEach(function (t) {
                    return t(e);
                  });
              }
            } else {
              var s = n5.getValue();
              s && (i(s), n9(s).dep(n));
            }
            return e;
          };
        n.onNextChange = function (e) {
          return (
            r.add(e),
            function () {
              r.delete(e);
            }
          );
        };
        var i = (n.attachCache = function (e) {
          return t.add(e), n9(e).vars.add(n), n;
        });
        return (
          (n.forgetCache = function (e) {
            return t.delete(e);
          }),
          n
        );
      }
      var ie = (function () {
        function e(e) {
          var t = e.cache,
            r = e.client,
            n = e.resolvers,
            i = e.fragmentMatcher;
          (this.selectionsToResolveCache = new WeakMap()),
            (this.cache = t),
            r && (this.client = r),
            n && this.addResolvers(n),
            i && this.setFragmentMatcher(i);
        }
        return (
          (e.prototype.addResolvers = function (e) {
            var t = this;
            (this.resolvers = this.resolvers || {}),
              Array.isArray(e)
                ? e.forEach(function (e) {
                    t.resolvers = rc(t.resolvers, e);
                  })
                : (this.resolvers = rc(this.resolvers, e));
          }),
          (e.prototype.setResolvers = function (e) {
            (this.resolvers = {}), this.addResolvers(e);
          }),
          (e.prototype.getResolvers = function () {
            return this.resolvers || {};
          }),
          (e.prototype.runResolvers = function (e) {
            return eg(this, arguments, void 0, function (e) {
              var t = e.document,
                r = e.remoteResult,
                n = e.context,
                i = e.variables,
                o = e.onlyRunForcedResolvers,
                a = void 0 !== o && o;
              return eb(this, function (e) {
                return t
                  ? [
                      2,
                      this.resolveDocument(
                        t,
                        r.data,
                        n,
                        i,
                        this.fragmentMatcher,
                        a
                      ).then(function (e) {
                        return ev(ev({}, r), { data: e.result });
                      }),
                    ]
                  : [2, r];
              });
            });
          }),
          (e.prototype.setFragmentMatcher = function (e) {
            this.fragmentMatcher = e;
          }),
          (e.prototype.getFragmentMatcher = function () {
            return this.fragmentMatcher;
          }),
          (e.prototype.clientQuery = function (e) {
            return t7(["client"], e) && this.resolvers ? e : null;
          }),
          (e.prototype.serverQuery = function (e) {
            return rF(e);
          }),
          (e.prototype.prepareContext = function (e) {
            var t = this.cache;
            return ev(ev({}, e), {
              cache: t,
              getCacheKey: function (e) {
                return t.identify(e);
              },
            });
          }),
          (e.prototype.addExportedVariables = function (e) {
            return eg(this, arguments, void 0, function (e, t, r) {
              return (
                void 0 === t && (t = {}),
                void 0 === r && (r = {}),
                eb(this, function (n) {
                  return e
                    ? [
                        2,
                        this.resolveDocument(
                          e,
                          this.buildRootValueFromCache(e, t) || {},
                          this.prepareContext(r),
                          t
                        ).then(function (e) {
                          return ev(ev({}, t), e.exportedVariables);
                        }),
                      ]
                    : [2, ev({}, t)];
                })
              );
            });
          }),
          (e.prototype.shouldForceResolvers = function (e) {
            var t = !1;
            return (
              t9(e, {
                Directive: {
                  enter: function (e) {
                    if (
                      "client" === e.name.value &&
                      e.arguments &&
                      (t = e.arguments.some(function (e) {
                        return (
                          "always" === e.name.value &&
                          "BooleanValue" === e.value.kind &&
                          !0 === e.value.value
                        );
                      }))
                    )
                      return t6;
                  },
                },
              }),
              t
            );
          }),
          (e.prototype.buildRootValueFromCache = function (e, t) {
            return this.cache.diff({
              query:
                "query" === tZ(e).operation
                  ? e
                  : t9(e, {
                      OperationDefinition: {
                        enter: function (e) {
                          return ev(ev({}, e), { operation: "query" });
                        },
                      },
                    }),
              variables: t,
              returnPartialData: !0,
              optimistic: !1,
            }).result;
          }),
          (e.prototype.resolveDocument = function (e, t) {
            return eg(this, arguments, void 0, function (e, t, r, n, i, o) {
              var a, s, u, c, l, f, h, d, p;
              return (
                void 0 === r && (r = {}),
                void 0 === n && (n = {}),
                void 0 === i &&
                  (i = function () {
                    return !0;
                  }),
                void 0 === o && (o = !1),
                eb(this, function (y) {
                  return (
                    (a = tZ(e)),
                    (s = tc(tH(e))),
                    (u = this.collectSelectionsToResolve(a, s)),
                    (l = (c = a.operation)
                      ? c.charAt(0).toUpperCase() + c.slice(1)
                      : "Query"),
                    (f = this),
                    (h = f.cache),
                    (d = f.client),
                    (p = {
                      fragmentMap: s,
                      context: ev(ev({}, r), { cache: h, client: d }),
                      variables: n,
                      fragmentMatcher: i,
                      defaultOperationType: l,
                      exportedVariables: {},
                      selectionsToResolve: u,
                      onlyRunForcedResolvers: o,
                    }),
                    [
                      2,
                      this.resolveSelectionSet(a.selectionSet, !1, t, p).then(
                        function (e) {
                          return {
                            result: e,
                            exportedVariables: p.exportedVariables,
                          };
                        }
                      ),
                    ]
                  );
                })
              );
            });
          }),
          (e.prototype.resolveSelectionSet = function (e, t, r, n) {
            return eg(this, void 0, void 0, function () {
              var i,
                o,
                a,
                s,
                u,
                c = this;
              return eb(this, function (l) {
                return (
                  (i = n.fragmentMap),
                  (o = n.context),
                  (a = n.variables),
                  (s = [r]),
                  (u = function (e) {
                    return eg(c, void 0, void 0, function () {
                      var u, c;
                      return eb(this, function (l) {
                        return (t || n.selectionsToResolve.has(e)) && t8(e, a)
                          ? tU(e)
                            ? [
                                2,
                                this.resolveField(e, t, r, n).then(function (
                                  t
                                ) {
                                  var r;
                                  void 0 !== t &&
                                    s.push((((r = {})[tz(e)] = t), r));
                                }),
                              ]
                            : ("InlineFragment" === e.kind
                                ? (u = e)
                                : eF((u = i[e.name.value]), 18, e.name.value),
                              u &&
                              u.typeCondition &&
                              ((c = u.typeCondition.name.value),
                              n.fragmentMatcher(r, c, o))
                                ? [
                                    2,
                                    this.resolveSelectionSet(
                                      u.selectionSet,
                                      t,
                                      r,
                                      n
                                    ).then(function (e) {
                                      s.push(e);
                                    }),
                                  ]
                                : [2])
                          : [2];
                      });
                    });
                  }),
                  [
                    2,
                    Promise.all(e.selections.map(u)).then(function () {
                      return rl(s);
                    }),
                  ]
                );
              });
            });
          }),
          (e.prototype.resolveField = function (e, t, r, n) {
            return eg(this, void 0, void 0, function () {
              var i,
                o,
                a,
                s,
                u,
                c,
                l,
                f,
                h,
                d = this;
              return eb(this, function (p) {
                return r
                  ? ((i = n.variables),
                    (s = (o = e.name.value) !== (a = tz(e))),
                    (c = Promise.resolve((u = r[a] || r[o]))),
                    (!n.onlyRunForcedResolvers ||
                      this.shouldForceResolvers(e)) &&
                      ((l = r.__typename || n.defaultOperationType),
                      (f = this.resolvers && this.resolvers[l]) &&
                        (h = f[s ? o : a]) &&
                        (c = Promise.resolve(
                          n5.withValue(this.cache, h, [
                            r,
                            tQ(e, i),
                            n.context,
                            { field: e, fragmentMap: n.fragmentMap },
                          ])
                        ))),
                    [
                      2,
                      c.then(function (r) {
                        if (
                          (void 0 === r && (r = u),
                          e.directives &&
                            e.directives.forEach(function (e) {
                              "export" === e.name.value &&
                                e.arguments &&
                                e.arguments.forEach(function (e) {
                                  "as" === e.name.value &&
                                    "StringValue" === e.value.kind &&
                                    (n.exportedVariables[e.value.value] = r);
                                });
                            }),
                          !e.selectionSet || null == r)
                        )
                          return r;
                        var i,
                          o,
                          a =
                            null !==
                              (o =
                                null === (i = e.directives) || void 0 === i
                                  ? void 0
                                  : i.some(function (e) {
                                      return "client" === e.name.value;
                                    })) &&
                            void 0 !== o &&
                            o;
                        return Array.isArray(r)
                          ? d.resolveSubSelectedArray(e, t || a, r, n)
                          : e.selectionSet
                          ? d.resolveSelectionSet(e.selectionSet, t || a, r, n)
                          : void 0;
                      }),
                    ])
                  : [2, null];
              });
            });
          }),
          (e.prototype.resolveSubSelectedArray = function (e, t, r, n) {
            var i = this;
            return Promise.all(
              r.map(function (r) {
                return null === r
                  ? null
                  : Array.isArray(r)
                  ? i.resolveSubSelectedArray(e, t, r, n)
                  : e.selectionSet
                  ? i.resolveSelectionSet(e.selectionSet, t, r, n)
                  : void 0;
              })
            );
          }),
          (e.prototype.collectSelectionsToResolve = function (e, t) {
            var r = function (e) {
                return !Array.isArray(e);
              },
              n = this.selectionsToResolveCache;
            return (function e(i) {
              if (!n.has(i)) {
                var o = new Set();
                n.set(i, o),
                  t9(i, {
                    Directive: function (e, t, n, i, a) {
                      "client" === e.name.value &&
                        a.forEach(function (e) {
                          r(e) && n4(e) && o.add(e);
                        });
                    },
                    FragmentSpread: function (n, i, a, s, u) {
                      var c = t[n.name.value];
                      eF(c, 19, n.name.value);
                      var l = e(c);
                      l.size > 0 &&
                        (u.forEach(function (e) {
                          r(e) && n4(e) && o.add(e);
                        }),
                        o.add(n),
                        l.forEach(function (e) {
                          o.add(e);
                        }));
                    },
                  });
              }
              return n.get(i);
            })(e);
          }),
          e
        );
      })();
      function it(e, t) {
        return nM(
          e,
          t,
          t.variables && {
            variables: nM(ev(ev({}, e && e.variables), t.variables)),
          }
        );
      }
      var ir = !1,
        ii = (function () {
          function e(e) {
            var t = this;
            if (
              ((this.resetStoreCallbacks = []),
              (this.clearStoreCallbacks = []),
              !e.cache)
            )
              throw eM(15);
            var r = e.uri,
              n = e.credentials,
              i = e.headers,
              o = e.cache,
              a = e.documentTransform,
              s = e.ssrMode,
              u = void 0 !== s && s,
              c = e.ssrForceFetchDelay,
              l = void 0 === c ? 0 : c,
              f = e.connectToDevTools,
              h = e.queryDeduplication,
              d = void 0 === h || h,
              p = e.defaultOptions,
              y = e.defaultContext,
              v = e.assumeImmutableResults,
              m = void 0 === v ? o.assumeImmutableResults : v,
              g = e.resolvers,
              b = e.typeDefs,
              w = e.fragmentMatcher,
              _ = e.name,
              x = e.version,
              S = e.devtools,
              O = e.link;
            O ||
              (O = r
                ? new rL({ uri: r, credentials: n, headers: i })
                : t1.empty()),
              (this.link = O),
              (this.cache = o),
              (this.disableNetworkFetches = u || l > 0),
              (this.queryDeduplication = d),
              (this.defaultOptions = p || Object.create(null)),
              (this.typeDefs = b),
              (this.devtoolsConfig = ev(ev({}, S), {
                enabled: (null == S ? void 0 : S.enabled) || f,
              })),
              void 0 === this.devtoolsConfig.enabled &&
                (this.devtoolsConfig.enabled =
                  "object" == typeof window &&
                  window.__APOLLO_CLIENT__ &&
                  !1 !== globalThis.__DEV__),
              l &&
                setTimeout(function () {
                  return (t.disableNetworkFetches = !1);
                }, l),
              (this.watchQuery = this.watchQuery.bind(this)),
              (this.query = this.query.bind(this)),
              (this.mutate = this.mutate.bind(this)),
              (this.watchFragment = this.watchFragment.bind(this)),
              (this.resetStore = this.resetStore.bind(this)),
              (this.reFetchObservableQueries =
                this.reFetchObservableQueries.bind(this)),
              (this.version = eI),
              (this.localState = new ie({
                cache: o,
                client: this,
                resolvers: g,
                fragmentMatcher: w,
              })),
              (this.queryManager = new n3({
                cache: this.cache,
                link: this.link,
                defaultOptions: this.defaultOptions,
                defaultContext: y,
                documentTransform: a,
                queryDeduplication: d,
                ssrMode: u,
                clientAwareness: { name: _, version: x },
                localState: this.localState,
                assumeImmutableResults: m,
                onBroadcast: this.devtoolsConfig.enabled
                  ? function () {
                      t.devToolsHookCb &&
                        t.devToolsHookCb({
                          action: {},
                          state: {
                            queries: t.queryManager.getQueryStore(),
                            mutations: t.queryManager.mutationStore || {},
                          },
                          dataWithOptimisticResults: t.cache.extract(!0),
                        });
                    }
                  : void 0,
              })),
              this.devtoolsConfig.enabled && this.connectToDevTools();
          }
          return (
            (e.prototype.connectToDevTools = function () {
              if ("object" == typeof window) {
                var e = window,
                  t = Symbol.for("apollo.devtools");
                (e[t] = e[t] || []).push(this), (e.__APOLLO_CLIENT__ = this);
              }
              ir ||
                !1 === globalThis.__DEV__ ||
                ((ir = !0),
                setTimeout(function () {
                  if (
                    "undefined" != typeof window &&
                    window.document &&
                    window.top === window.self &&
                    !window.__APOLLO_DEVTOOLS_GLOBAL_HOOK__ &&
                    /^(https?|file):$/.test(window.location.protocol)
                  ) {
                    var e = window.navigator,
                      t = e && e.userAgent,
                      r = void 0;
                    "string" == typeof t &&
                      (t.indexOf("Chrome/") > -1
                        ? (r =
                            "https://chrome.google.com/webstore/detail/apollo-client-developer-t/jdkknkkbebbapilgoeccciglkfbmbnfm")
                        : t.indexOf("Firefox/") > -1 &&
                          (r =
                            "https://addons.mozilla.org/en-US/firefox/addon/apollo-developer-tools/")),
                      r &&
                        !1 !== globalThis.__DEV__ &&
                        eF.log(
                          "Download the Apollo DevTools for a better development experience: %s",
                          r
                        );
                  }
                }, 1e4));
            }),
            Object.defineProperty(e.prototype, "documentTransform", {
              get: function () {
                return this.queryManager.documentTransform;
              },
              enumerable: !1,
              configurable: !0,
            }),
            (e.prototype.stop = function () {
              this.queryManager.stop();
            }),
            (e.prototype.watchQuery = function (e) {
              return (
                this.defaultOptions.watchQuery &&
                  (e = it(this.defaultOptions.watchQuery, e)),
                this.disableNetworkFetches &&
                  ("network-only" === e.fetchPolicy ||
                    "cache-and-network" === e.fetchPolicy) &&
                  (e = ev(ev({}, e), { fetchPolicy: "cache-first" })),
                this.queryManager.watchQuery(e)
              );
            }),
            (e.prototype.query = function (e) {
              return (
                this.defaultOptions.query &&
                  (e = it(this.defaultOptions.query, e)),
                eF("cache-and-network" !== e.fetchPolicy, 16),
                this.disableNetworkFetches &&
                  "network-only" === e.fetchPolicy &&
                  (e = ev(ev({}, e), { fetchPolicy: "cache-first" })),
                this.queryManager.query(e)
              );
            }),
            (e.prototype.mutate = function (e) {
              return (
                this.defaultOptions.mutate &&
                  (e = it(this.defaultOptions.mutate, e)),
                this.queryManager.mutate(e)
              );
            }),
            (e.prototype.subscribe = function (e) {
              return this.queryManager.startGraphQLSubscription(e);
            }),
            (e.prototype.readQuery = function (e, t) {
              return void 0 === t && (t = !1), this.cache.readQuery(e, t);
            }),
            (e.prototype.watchFragment = function (e) {
              return this.cache.watchFragment(e);
            }),
            (e.prototype.readFragment = function (e, t) {
              return void 0 === t && (t = !1), this.cache.readFragment(e, t);
            }),
            (e.prototype.writeQuery = function (e) {
              var t = this.cache.writeQuery(e);
              return (
                !1 !== e.broadcast && this.queryManager.broadcastQueries(), t
              );
            }),
            (e.prototype.writeFragment = function (e) {
              var t = this.cache.writeFragment(e);
              return (
                !1 !== e.broadcast && this.queryManager.broadcastQueries(), t
              );
            }),
            (e.prototype.__actionHookForDevTools = function (e) {
              this.devToolsHookCb = e;
            }),
            (e.prototype.__requestRaw = function (e) {
              return t2(this.link, e);
            }),
            (e.prototype.resetStore = function () {
              var e = this;
              return Promise.resolve()
                .then(function () {
                  return e.queryManager.clearStore({ discardWatches: !1 });
                })
                .then(function () {
                  return Promise.all(
                    e.resetStoreCallbacks.map(function (e) {
                      return e();
                    })
                  );
                })
                .then(function () {
                  return e.reFetchObservableQueries();
                });
            }),
            (e.prototype.clearStore = function () {
              var e = this;
              return Promise.resolve()
                .then(function () {
                  return e.queryManager.clearStore({ discardWatches: !0 });
                })
                .then(function () {
                  return Promise.all(
                    e.clearStoreCallbacks.map(function (e) {
                      return e();
                    })
                  );
                });
            }),
            (e.prototype.onResetStore = function (e) {
              var t = this;
              return (
                this.resetStoreCallbacks.push(e),
                function () {
                  t.resetStoreCallbacks = t.resetStoreCallbacks.filter(
                    function (t) {
                      return t !== e;
                    }
                  );
                }
              );
            }),
            (e.prototype.onClearStore = function (e) {
              var t = this;
              return (
                this.clearStoreCallbacks.push(e),
                function () {
                  t.clearStoreCallbacks = t.clearStoreCallbacks.filter(
                    function (t) {
                      return t !== e;
                    }
                  );
                }
              );
            }),
            (e.prototype.reFetchObservableQueries = function (e) {
              return this.queryManager.reFetchObservableQueries(e);
            }),
            (e.prototype.refetchQueries = function (e) {
              var t = this.queryManager.refetchQueries(e),
                r = [],
                n = [];
              t.forEach(function (e, t) {
                r.push(t), n.push(e);
              });
              var i = Promise.all(n);
              return (
                (i.queries = r),
                (i.results = n),
                i.catch(function (e) {
                  !1 !== globalThis.__DEV__ && eF.debug(17, e);
                }),
                i
              );
            }),
            (e.prototype.getObservableQueries = function (e) {
              return (
                void 0 === e && (e = "active"),
                this.queryManager.getObservableQueries(e)
              );
            }),
            (e.prototype.extract = function (e) {
              return this.cache.extract(e);
            }),
            (e.prototype.restore = function (e) {
              return this.cache.restore(e);
            }),
            (e.prototype.addResolvers = function (e) {
              this.localState.addResolvers(e);
            }),
            (e.prototype.setResolvers = function (e) {
              this.localState.setResolvers(e);
            }),
            (e.prototype.getResolvers = function () {
              return this.localState.getResolvers();
            }),
            (e.prototype.setLocalStateFragmentMatcher = function (e) {
              this.localState.setFragmentMatcher(e);
            }),
            (e.prototype.setLink = function (e) {
              this.link = this.queryManager.link = e;
            }),
            Object.defineProperty(e.prototype, "defaultContext", {
              get: function () {
                return this.queryManager.defaultContext;
              },
              enumerable: !1,
              configurable: !0,
            }),
            e
          );
        })();
      !1 !== globalThis.__DEV__ && (ii.prototype.getMemoryInternals = tE);
      var io = (function () {
        function e() {
          (this.assumeImmutableResults = !1),
            (this.getFragmentDoc = nT(tu, {
              max: tS["cache.fragmentQueryDocuments"] || 1e3,
              cache: ty,
            }));
        }
        return (
          (e.prototype.batch = function (e) {
            var t,
              r = this,
              n =
                "string" == typeof e.optimistic
                  ? e.optimistic
                  : !1 === e.optimistic
                  ? null
                  : void 0;
            return (
              this.performTransaction(function () {
                return (t = e.update(r));
              }, n),
              t
            );
          }),
          (e.prototype.recordOptimisticTransaction = function (e, t) {
            this.performTransaction(e, t);
          }),
          (e.prototype.transformDocument = function (e) {
            return e;
          }),
          (e.prototype.transformForLink = function (e) {
            return e;
          }),
          (e.prototype.identify = function (e) {}),
          (e.prototype.gc = function () {
            return [];
          }),
          (e.prototype.modify = function (e) {
            return !1;
          }),
          (e.prototype.readQuery = function (e, t) {
            return (
              void 0 === t && (t = !!e.optimistic),
              this.read(
                ev(ev({}, e), { rootId: e.id || "ROOT_QUERY", optimistic: t })
              )
            );
          }),
          (e.prototype.watchFragment = function (e) {
            var t,
              r = this,
              n = e.fragment,
              i = e.fragmentName,
              o = e.from,
              a = e.optimistic,
              s = em(e, ["fragment", "fragmentName", "from", "optimistic"]),
              u = this.getFragmentDoc(n, i),
              c = ev(ev({}, s), {
                returnPartialData: !0,
                id: "string" == typeof o ? o : this.identify(o),
                query: u,
                optimistic: void 0 === a || a,
              });
            return new ta(function (e) {
              return r.watch(
                ev(ev({}, c), {
                  immediate: !0,
                  callback: function (r) {
                    if (
                      !(
                        t &&
                        nV(
                          u,
                          { data: null == t ? void 0 : t.result },
                          { data: r.result }
                        )
                      )
                    ) {
                      var n = { data: r.result, complete: !!r.complete };
                      r.missing &&
                        (n.missing = rl(
                          r.missing.map(function (e) {
                            return e.missing;
                          })
                        )),
                        (t = r),
                        e.next(n);
                    }
                  },
                })
              );
            });
          }),
          (e.prototype.readFragment = function (e, t) {
            return (
              void 0 === t && (t = !!e.optimistic),
              this.read(
                ev(ev({}, e), {
                  query: this.getFragmentDoc(e.fragment, e.fragmentName),
                  rootId: e.id,
                  optimistic: t,
                })
              )
            );
          }),
          (e.prototype.writeQuery = function (e) {
            var t = e.id,
              r = e.data,
              n = em(e, ["id", "data"]);
            return this.write(
              Object.assign(n, { dataId: t || "ROOT_QUERY", result: r })
            );
          }),
          (e.prototype.writeFragment = function (e) {
            var t = e.id,
              r = e.data,
              n = e.fragment,
              i = e.fragmentName,
              o = em(e, ["id", "data", "fragment", "fragmentName"]);
            return this.write(
              Object.assign(o, {
                query: this.getFragmentDoc(n, i),
                dataId: t,
                result: r,
              })
            );
          }),
          (e.prototype.updateQuery = function (e, t) {
            return this.batch({
              update: function (r) {
                var n = r.readQuery(e),
                  i = t(n);
                return null == i
                  ? n
                  : (r.writeQuery(ev(ev({}, e), { data: i })), i);
              },
            });
          }),
          (e.prototype.updateFragment = function (e, t) {
            return this.batch({
              update: function (r) {
                var n = r.readFragment(e),
                  i = t(n);
                return null == i
                  ? n
                  : (r.writeFragment(ev(ev({}, e), { data: i })), i);
              },
            });
          }),
          e
        );
      })();
      !1 !== globalThis.__DEV__ && (io.prototype.getMemoryInternals = tT);
      var ia = (function (e) {
        function t(r, n, i, o) {
          var a,
            s = e.call(this, r) || this;
          if (
            ((s.message = r),
            (s.path = n),
            (s.query = i),
            (s.variables = o),
            Array.isArray(s.path))
          ) {
            s.missing = s.message;
            for (var u = s.path.length - 1; u >= 0; --u)
              s.missing = (((a = {})[s.path[u]] = s.missing), a);
          } else s.missing = s.path;
          return (s.__proto__ = t.prototype), s;
        }
        return ey(t, e), t;
      })(Error);
      function is(e) {
        if (!1 !== globalThis.__DEV__) {
          var t;
          (t = new Set([e])).forEach(function (e) {
            ts(e) &&
              (function (e) {
                if (!1 !== globalThis.__DEV__ && !Object.isFrozen(e))
                  try {
                    Object.freeze(e);
                  } catch (e) {
                    if (e instanceof TypeError) return null;
                    throw e;
                  }
                return e;
              })(e) === e &&
              Object.getOwnPropertyNames(e).forEach(function (r) {
                ts(e[r]) && t.add(e[r]);
              });
          });
        }
        return e;
      }
      var iu = Object.prototype.hasOwnProperty;
      function ic(e) {
        return null == e;
      }
      function il(e, t) {
        var r = e.__typename,
          n = e.id,
          i = e._id;
        if (
          "string" == typeof r &&
          (t &&
            (t.keyObject = ic(n) ? (ic(i) ? void 0 : { _id: i }) : { id: n }),
          ic(n) && !ic(i) && (n = i),
          !ic(n))
        )
          return ""
            .concat(r, ":")
            .concat(
              "number" == typeof n || "string" == typeof n
                ? n
                : JSON.stringify(n)
            );
      }
      var ih = {
        dataIdFromObject: il,
        addTypename: !0,
        resultCaching: !0,
        canonizeResults: !1,
      };
      function id(e) {
        var t = e.canonizeResults;
        return void 0 === t ? ih.canonizeResults : t;
      }
      var ip = /^[_a-z][_0-9a-z]*/i;
      function iy(e) {
        var t = e.match(ip);
        return t ? t[0] : e;
      }
      function iv(e) {
        return ts(e) && !tF(e) && !ra(e);
      }
      function im(e, t) {
        var r = tc(tH(e));
        return {
          fragmentMap: r,
          lookupFragment: function (e) {
            var n = r[e];
            return !n && t && (n = t.lookup(e)), n || null;
          },
        };
      }
      var ig = Object.create(null),
        ib = function () {
          return ig;
        },
        iw = Object.create(null),
        i_ = (function () {
          function e(e, t) {
            var r = this;
            (this.policies = e),
              (this.group = t),
              (this.data = Object.create(null)),
              (this.rootIds = Object.create(null)),
              (this.refs = Object.create(null)),
              (this.getFieldValue = function (e, t) {
                return is(tF(e) ? r.get(e.__ref, t) : e && e[t]);
              }),
              (this.canRead = function (e) {
                return tF(e) ? r.has(e.__ref) : "object" == typeof e;
              }),
              (this.toReference = function (e, t) {
                if ("string" == typeof e) return tN(e);
                if (tF(e)) return e;
                var n = r.policies.identify(e)[0];
                if (n) {
                  var i = tN(n);
                  return t && r.merge(n, e), i;
                }
              });
          }
          return (
            (e.prototype.toObject = function () {
              return ev({}, this.data);
            }),
            (e.prototype.has = function (e) {
              return void 0 !== this.lookup(e, !0);
            }),
            (e.prototype.get = function (e, t) {
              if ((this.group.depend(e, t), iu.call(this.data, e))) {
                var r = this.data[e];
                if (r && iu.call(r, t)) return r[t];
              }
              return "__typename" === t &&
                iu.call(this.policies.rootTypenamesById, e)
                ? this.policies.rootTypenamesById[e]
                : this instanceof iO
                ? this.parent.get(e, t)
                : void 0;
            }),
            (e.prototype.lookup = function (e, t) {
              return (t && this.group.depend(e, "__exists"),
              iu.call(this.data, e))
                ? this.data[e]
                : this instanceof iO
                ? this.parent.lookup(e, t)
                : this.policies.rootTypenamesById[e]
                ? Object.create(null)
                : void 0;
            }),
            (e.prototype.merge = function (e, t) {
              var r,
                n = this;
              tF(e) && (e = e.__ref), tF(t) && (t = t.__ref);
              var i = "string" == typeof e ? this.lookup((r = e)) : e,
                o = "string" == typeof t ? this.lookup((r = t)) : t;
              if (o) {
                eF("string" == typeof r, 1);
                var a = new rh(ik).merge(i, o);
                if (
                  ((this.data[r] = a),
                  a !== i && (delete this.refs[r], this.group.caching))
                ) {
                  var s = Object.create(null);
                  i || (s.__exists = 1),
                    Object.keys(o).forEach(function (e) {
                      if (!i || i[e] !== a[e]) {
                        s[e] = 1;
                        var t = iy(e);
                        t === e ||
                          n.policies.hasKeyArgs(a.__typename, t) ||
                          (s[t] = 1),
                          void 0 !== a[e] || n instanceof iO || delete a[e];
                      }
                    }),
                    s.__typename &&
                      !(i && i.__typename) &&
                      this.policies.rootTypenamesById[r] === a.__typename &&
                      delete s.__typename,
                    Object.keys(s).forEach(function (e) {
                      return n.group.dirty(r, e);
                    });
                }
              }
            }),
            (e.prototype.modify = function (e, t) {
              var r = this,
                n = this.lookup(e);
              if (n) {
                var i = Object.create(null),
                  o = !1,
                  a = !0,
                  s = {
                    DELETE: ig,
                    INVALIDATE: iw,
                    isReference: tF,
                    toReference: this.toReference,
                    canRead: this.canRead,
                    readField: function (t, n) {
                      return r.policies.readField(
                        "string" == typeof t
                          ? { fieldName: t, from: n || tN(e) }
                          : t,
                        { store: r }
                      );
                    },
                  };
                if (
                  (Object.keys(n).forEach(function (u) {
                    var c = iy(u),
                      l = n[u];
                    if (void 0 !== l) {
                      var f = "function" == typeof t ? t : t[u] || t[c];
                      if (f) {
                        var h =
                          f === ib
                            ? ig
                            : f(
                                is(l),
                                ev(ev({}, s), {
                                  fieldName: c,
                                  storeFieldName: u,
                                  storage: r.getStorage(e, u),
                                })
                              );
                        if (h === iw) r.group.dirty(e, u);
                        else if (
                          (h === ig && (h = void 0),
                          h !== l &&
                            ((i[u] = h),
                            (o = !0),
                            (l = h),
                            !1 !== globalThis.__DEV__))
                        ) {
                          var d = function (e) {
                            if (void 0 === r.lookup(e.__ref))
                              return (
                                !1 !== globalThis.__DEV__ && eF.warn(2, e), !0
                              );
                          };
                          if (tF(h)) d(h);
                          else if (Array.isArray(h))
                            for (
                              var p = !1, y = void 0, v = 0, m = h;
                              v < m.length;
                              v++
                            ) {
                              var g = m[v];
                              if (tF(g)) {
                                if (((p = !0), d(g))) break;
                              } else
                                "object" == typeof g &&
                                  g &&
                                  r.policies.identify(g)[0] &&
                                  (y = g);
                              if (p && void 0 !== y) {
                                !1 !== globalThis.__DEV__ && eF.warn(3, y);
                                break;
                              }
                            }
                        }
                      }
                      void 0 !== l && (a = !1);
                    }
                  }),
                  o)
                )
                  return (
                    this.merge(e, i),
                    a &&
                      (this instanceof iO
                        ? (this.data[e] = void 0)
                        : delete this.data[e],
                      this.group.dirty(e, "__exists")),
                    !0
                  );
              }
              return !1;
            }),
            (e.prototype.delete = function (e, t, r) {
              var n,
                i = this.lookup(e);
              if (i) {
                var o = this.getFieldValue(i, "__typename"),
                  a =
                    t && r
                      ? this.policies.getStoreFieldName({
                          typename: o,
                          fieldName: t,
                          args: r,
                        })
                      : t;
                return this.modify(e, a ? (((n = {})[a] = ib), n) : ib);
              }
              return !1;
            }),
            (e.prototype.evict = function (e, t) {
              var r = !1;
              return (
                e.id &&
                  (iu.call(this.data, e.id) &&
                    (r = this.delete(e.id, e.fieldName, e.args)),
                  this instanceof iO &&
                    this !== t &&
                    (r = this.parent.evict(e, t) || r),
                  (e.fieldName || r) &&
                    this.group.dirty(e.id, e.fieldName || "__exists")),
                r
              );
            }),
            (e.prototype.clear = function () {
              this.replace(null);
            }),
            (e.prototype.extract = function () {
              var e = this,
                t = this.toObject(),
                r = [];
              return (
                this.getRootIdSet().forEach(function (t) {
                  iu.call(e.policies.rootTypenamesById, t) || r.push(t);
                }),
                r.length && (t.__META = { extraRootIds: r.sort() }),
                t
              );
            }),
            (e.prototype.replace = function (e) {
              var t = this;
              if (
                (Object.keys(this.data).forEach(function (r) {
                  (e && iu.call(e, r)) || t.delete(r);
                }),
                e)
              ) {
                var r = e.__META,
                  n = em(e, ["__META"]);
                Object.keys(n).forEach(function (e) {
                  t.merge(e, n[e]);
                }),
                  r && r.extraRootIds.forEach(this.retain, this);
              }
            }),
            (e.prototype.retain = function (e) {
              return (this.rootIds[e] = (this.rootIds[e] || 0) + 1);
            }),
            (e.prototype.release = function (e) {
              if (this.rootIds[e] > 0) {
                var t = --this.rootIds[e];
                return t || delete this.rootIds[e], t;
              }
              return 0;
            }),
            (e.prototype.getRootIdSet = function (e) {
              return (
                void 0 === e && (e = new Set()),
                Object.keys(this.rootIds).forEach(e.add, e),
                this instanceof iO
                  ? this.parent.getRootIdSet(e)
                  : Object.keys(this.policies.rootTypenamesById).forEach(
                      e.add,
                      e
                    ),
                e
              );
            }),
            (e.prototype.gc = function () {
              var e = this,
                t = this.getRootIdSet(),
                r = this.toObject();
              t.forEach(function (n) {
                iu.call(r, n) &&
                  (Object.keys(e.findChildRefIds(n)).forEach(t.add, t),
                  delete r[n]);
              });
              var n = Object.keys(r);
              if (n.length) {
                for (var i = this; i instanceof iO; ) i = i.parent;
                n.forEach(function (e) {
                  return i.delete(e);
                });
              }
              return n;
            }),
            (e.prototype.findChildRefIds = function (e) {
              if (!iu.call(this.refs, e)) {
                var t = (this.refs[e] = Object.create(null)),
                  r = this.data[e];
                if (!r) return t;
                var n = new Set([r]);
                n.forEach(function (e) {
                  tF(e) && (t[e.__ref] = !0),
                    ts(e) &&
                      Object.keys(e).forEach(function (t) {
                        var r = e[t];
                        ts(r) && n.add(r);
                      });
                });
              }
              return this.refs[e];
            }),
            (e.prototype.makeCacheKey = function () {
              return this.group.keyMaker.lookupArray(arguments);
            }),
            e
          );
        })(),
        ix = (function () {
          function e(e, t) {
            void 0 === t && (t = null),
              (this.caching = e),
              (this.parent = t),
              (this.d = null),
              this.resetCaching();
          }
          return (
            (e.prototype.resetCaching = function () {
              (this.d = this.caching ? nO() : null),
                (this.keyMaker = new rX(eW));
            }),
            (e.prototype.depend = function (e, t) {
              if (this.d) {
                this.d(t + "#" + e);
                var r = iy(t);
                r !== t && this.d(r + "#" + e),
                  this.parent && this.parent.depend(e, t);
              }
            }),
            (e.prototype.dirty = function (e, t) {
              this.d &&
                this.d.dirty(
                  t + "#" + e,
                  "__exists" === t ? "forget" : "setDirty"
                );
            }),
            e
          );
        })();
      function iS(e, t) {
        iT(e) && e.group.depend(t, "__exists");
      }
      (f = (function (e) {
        function t(t) {
          var r = t.policies,
            n = t.resultCaching,
            i = t.seed,
            o = e.call(this, r, new ix(void 0 === n || n)) || this;
          return (
            (o.stump = new iE(o)),
            (o.storageTrie = new rX(eW)),
            i && o.replace(i),
            o
          );
        }
        return (
          ey(t, e),
          (t.prototype.addLayer = function (e, t) {
            return this.stump.addLayer(e, t);
          }),
          (t.prototype.removeLayer = function () {
            return this;
          }),
          (t.prototype.getStorage = function () {
            return this.storageTrie.lookupArray(arguments);
          }),
          t
        );
      })((l = i_ || (i_ = {})))),
        (l.Root = f);
      var iO = (function (e) {
          function t(t, r, n, i) {
            var o = e.call(this, r.policies, i) || this;
            return (
              (o.id = t), (o.parent = r), (o.replay = n), (o.group = i), n(o), o
            );
          }
          return (
            ey(t, e),
            (t.prototype.addLayer = function (e, r) {
              return new t(e, this, r, this.group);
            }),
            (t.prototype.removeLayer = function (e) {
              var t = this,
                r = this.parent.removeLayer(e);
              return e === this.id
                ? (this.group.caching &&
                    Object.keys(this.data).forEach(function (e) {
                      var n = t.data[e],
                        i = r.lookup(e);
                      i
                        ? n
                          ? n !== i &&
                            Object.keys(n).forEach(function (r) {
                              rU(n[r], i[r]) || t.group.dirty(e, r);
                            })
                          : (t.group.dirty(e, "__exists"),
                            Object.keys(i).forEach(function (r) {
                              t.group.dirty(e, r);
                            }))
                        : t.delete(e);
                    }),
                  r)
                : r === this.parent
                ? this
                : r.addLayer(this.id, this.replay);
            }),
            (t.prototype.toObject = function () {
              return ev(ev({}, this.parent.toObject()), this.data);
            }),
            (t.prototype.findChildRefIds = function (t) {
              var r = this.parent.findChildRefIds(t);
              return iu.call(this.data, t)
                ? ev(ev({}, r), e.prototype.findChildRefIds.call(this, t))
                : r;
            }),
            (t.prototype.getStorage = function () {
              for (var e = this.parent; e.parent; ) e = e.parent;
              return e.getStorage.apply(e, arguments);
            }),
            t
          );
        })(i_),
        iE = (function (e) {
          function t(t) {
            return (
              e.call(
                this,
                "EntityStore.Stump",
                t,
                function () {},
                new ix(t.group.caching, t.group)
              ) || this
            );
          }
          return (
            ey(t, e),
            (t.prototype.removeLayer = function () {
              return this;
            }),
            (t.prototype.merge = function (e, t) {
              return this.parent.merge(e, t);
            }),
            t
          );
        })(iO);
      function ik(e, t, r) {
        var n = e[r],
          i = t[r];
        return rU(n, i) ? n : i;
      }
      function iT(e) {
        return !!(e instanceof i_ && e.group.caching);
      }
      var ij = (function () {
        function e() {
          (this.known = new (e$ ? WeakSet : Set)()),
            (this.pool = new rX(eW)),
            (this.passes = new WeakMap()),
            (this.keysByJSON = new Map()),
            (this.empty = this.admit({}));
        }
        return (
          (e.prototype.isKnown = function (e) {
            return ts(e) && this.known.has(e);
          }),
          (e.prototype.pass = function (e) {
            if (ts(e)) {
              var t = ts(e)
                ? ra(e)
                  ? e.slice(0)
                  : ev({ __proto__: Object.getPrototypeOf(e) }, e)
                : e;
              return this.passes.set(t, e), t;
            }
            return e;
          }),
          (e.prototype.admit = function (e) {
            var t = this;
            if (ts(e)) {
              var r = this.passes.get(e);
              if (r) return r;
              switch (Object.getPrototypeOf(e)) {
                case Array.prototype:
                  if (this.known.has(e)) break;
                  var n = e.map(this.admit, this),
                    i = this.pool.lookupArray(n);
                  return (
                    i.array ||
                      (this.known.add((i.array = n)),
                      !1 !== globalThis.__DEV__ && Object.freeze(n)),
                    i.array
                  );
                case null:
                case Object.prototype:
                  if (this.known.has(e)) break;
                  var o = Object.getPrototypeOf(e),
                    a = [o],
                    s = this.sortedKeys(e);
                  a.push(s.json);
                  var u = a.length;
                  s.sorted.forEach(function (r) {
                    a.push(t.admit(e[r]));
                  });
                  var i = this.pool.lookupArray(a);
                  if (!i.object) {
                    var c = (i.object = Object.create(o));
                    this.known.add(c),
                      s.sorted.forEach(function (e, t) {
                        c[e] = a[u + t];
                      }),
                      !1 !== globalThis.__DEV__ && Object.freeze(c);
                  }
                  return i.object;
              }
            }
            return e;
          }),
          (e.prototype.sortedKeys = function (e) {
            var t = Object.keys(e),
              r = this.pool.lookupArray(t);
            if (!r.keys) {
              t.sort();
              var n = JSON.stringify(t);
              (r.keys = this.keysByJSON.get(n)) ||
                this.keysByJSON.set(n, (r.keys = { sorted: t, json: n }));
            }
            return r.keys;
          }),
          e
        );
      })();
      function iI(e) {
        return [
          e.selectionSet,
          e.objectOrReference,
          e.context,
          e.context.canonizeResults,
        ];
      }
      var iD = (function () {
          function e(e) {
            var t = this;
            (this.knownResults = new (eW ? WeakMap : Map)()),
              (this.config = nM(e, {
                addTypename: !1 !== e.addTypename,
                canonizeResults: id(e),
              })),
              (this.canon = e.canon || new ij()),
              (this.executeSelectionSet = nT(
                function (e) {
                  var r,
                    n = e.context.canonizeResults,
                    i = iI(e);
                  i[3] = !n;
                  var o = (r = t.executeSelectionSet).peek.apply(r, i);
                  return o
                    ? n
                      ? ev(ev({}, o), { result: t.canon.admit(o.result) })
                      : o
                    : (iS(e.context.store, e.enclosingRef.__ref),
                      t.execSelectionSetImpl(e));
                },
                {
                  max:
                    this.config.resultCacheMaxSize ||
                    tS["inMemoryCache.executeSelectionSet"] ||
                    5e4,
                  keyArgs: iI,
                  makeCacheKey: function (e, t, r, n) {
                    if (iT(r.store))
                      return r.store.makeCacheKey(
                        e,
                        tF(t) ? t.__ref : t,
                        r.varString,
                        n
                      );
                  },
                }
              )),
              (this.executeSubSelectedArray = nT(
                function (e) {
                  return (
                    iS(e.context.store, e.enclosingRef.__ref),
                    t.execSubSelectedArrayImpl(e)
                  );
                },
                {
                  max:
                    this.config.resultCacheMaxSize ||
                    tS["inMemoryCache.executeSubSelectedArray"] ||
                    1e4,
                  makeCacheKey: function (e) {
                    var t = e.field,
                      r = e.array,
                      n = e.context;
                    if (iT(n.store))
                      return n.store.makeCacheKey(t, r, n.varString);
                  },
                }
              ));
          }
          return (
            (e.prototype.resetCanon = function () {
              this.canon = new ij();
            }),
            (e.prototype.diffQueryAgainstStore = function (e) {
              var t,
                r = e.store,
                n = e.query,
                i = e.rootId,
                o = e.variables,
                a = e.returnPartialData,
                s = e.canonizeResults,
                u = void 0 === s ? this.config.canonizeResults : s,
                c = this.config.cache.policies;
              o = ev(ev({}, tK(tY(n))), o);
              var l = tN(void 0 === i ? "ROOT_QUERY" : i),
                f = this.executeSelectionSet({
                  selectionSet: tZ(n).selectionSet,
                  objectOrReference: l,
                  enclosingRef: l,
                  context: ev(
                    {
                      store: r,
                      query: n,
                      policies: c,
                      variables: o,
                      varString: tR(o),
                      canonizeResults: u,
                    },
                    im(n, this.config.fragments)
                  ),
                });
              if (
                f.missing &&
                ((t = [
                  new ia(
                    (function (e) {
                      try {
                        JSON.stringify(e, function (e, t) {
                          if ("string" == typeof t) throw t;
                          return t;
                        });
                      } catch (e) {
                        return e;
                      }
                    })(f.missing),
                    f.missing,
                    n,
                    o
                  ),
                ]),
                !(void 0 === a || a))
              )
                throw t[0];
              return { result: f.result, complete: !t, missing: t };
            }),
            (e.prototype.isFresh = function (e, t, r, n) {
              if (iT(n.store) && this.knownResults.get(e) === r) {
                var i = this.executeSelectionSet.peek(
                  r,
                  t,
                  n,
                  this.canon.isKnown(e)
                );
                if (i && e === i.result) return !0;
              }
              return !1;
            }),
            (e.prototype.execSelectionSetImpl = function (e) {
              var t,
                r = this,
                n = e.selectionSet,
                i = e.objectOrReference,
                o = e.enclosingRef,
                a = e.context;
              if (
                tF(i) &&
                !a.policies.rootTypenamesById[i.__ref] &&
                !a.store.has(i.__ref)
              )
                return {
                  result: this.canon.empty,
                  missing: "Dangling reference to missing ".concat(
                    i.__ref,
                    " object"
                  ),
                };
              var s = a.variables,
                u = a.policies,
                c = a.store.getFieldValue(i, "__typename"),
                l = [],
                f = new rh();
              function h(e, r) {
                var n;
                return (
                  e.missing && (t = f.merge(t, (((n = {})[r] = e.missing), n))),
                  e.result
                );
              }
              this.config.addTypename &&
                "string" == typeof c &&
                !u.rootIdsByTypename[c] &&
                l.push({ __typename: c });
              var d = new Set(n.selections);
              d.forEach(function (e) {
                var n, y;
                if (t8(e, s)) {
                  if (tU(e)) {
                    var v = u.readField(
                        {
                          fieldName: e.name.value,
                          field: e,
                          variables: a.variables,
                          from: i,
                        },
                        a
                      ),
                      m = tz(e);
                    void 0 === v
                      ? rN.added(e) ||
                        (t = f.merge(
                          t,
                          (((n = {})[m] = "Can't find field '"
                            .concat(e.name.value, "' on ")
                            .concat(
                              tF(i)
                                ? i.__ref + " object"
                                : "object " + JSON.stringify(i, null, 2)
                            )),
                          n)
                        ))
                      : ra(v)
                      ? v.length > 0 &&
                        (v = h(
                          r.executeSubSelectedArray({
                            field: e,
                            array: v,
                            enclosingRef: o,
                            context: a,
                          }),
                          m
                        ))
                      : e.selectionSet
                      ? null != v &&
                        (v = h(
                          r.executeSelectionSet({
                            selectionSet: e.selectionSet,
                            objectOrReference: v,
                            enclosingRef: tF(v) ? v : o,
                            context: a,
                          }),
                          m
                        ))
                      : a.canonizeResults && (v = r.canon.pass(v)),
                      void 0 !== v && l.push((((y = {})[m] = v), y));
                  } else {
                    var g = tl(e, a.lookupFragment);
                    if (!g && e.kind === p.FRAGMENT_SPREAD)
                      throw eM(9, e.name.value);
                    g &&
                      u.fragmentMatches(g, c) &&
                      g.selectionSet.selections.forEach(d.add, d);
                  }
                }
              });
              var y = { result: rl(l), missing: t },
                v = a.canonizeResults ? this.canon.admit(y) : is(y);
              return v.result && this.knownResults.set(v.result, n), v;
            }),
            (e.prototype.execSubSelectedArrayImpl = function (e) {
              var t,
                r = this,
                n = e.field,
                i = e.array,
                o = e.enclosingRef,
                a = e.context,
                s = new rh();
              function u(e, r) {
                var n;
                return (
                  e.missing && (t = s.merge(t, (((n = {})[r] = e.missing), n))),
                  e.result
                );
              }
              return (
                n.selectionSet && (i = i.filter(a.store.canRead)),
                (i = i.map(function (e, t) {
                  return null === e
                    ? null
                    : ra(e)
                    ? u(
                        r.executeSubSelectedArray({
                          field: n,
                          array: e,
                          enclosingRef: o,
                          context: a,
                        }),
                        t
                      )
                    : n.selectionSet
                    ? u(
                        r.executeSelectionSet({
                          selectionSet: n.selectionSet,
                          objectOrReference: e,
                          enclosingRef: tF(e) ? e : o,
                          context: a,
                        }),
                        t
                      )
                    : (!1 !== globalThis.__DEV__ &&
                        (function (e, t, r) {
                          if (!t.selectionSet) {
                            var n = new Set([r]);
                            n.forEach(function (r) {
                              ts(r) &&
                                (eF(
                                  !tF(r),
                                  10,
                                  tF(r)
                                    ? e.get(r.__ref, "__typename")
                                    : r && r.__typename,
                                  t.name.value
                                ),
                                Object.values(r).forEach(n.add, n));
                            });
                          }
                        })(a.store, n, e),
                      e);
                })),
                {
                  result: a.canonizeResults ? this.canon.admit(i) : i,
                  missing: t,
                }
              );
            }),
            e
          );
        })(),
        iP = Object.create(null);
      function iR(e) {
        var t = JSON.stringify(e);
        return iP[t] || (iP[t] = Object.create(null));
      }
      function iA(e) {
        var t = iR(e);
        return (
          t.keyFieldsFn ||
          (t.keyFieldsFn = function (t, r) {
            var n = function (e, t) {
                return r.readField(t, e);
              },
              i = (r.keyObject = iN(e, function (e) {
                var i = iM(r.storeObject, e, n);
                return (
                  void 0 === i &&
                    t !== r.storeObject &&
                    iu.call(t, e[0]) &&
                    (i = iM(t, e, iF)),
                  eF(void 0 !== i, 4, e.join("."), t),
                  i
                );
              }));
            return "".concat(r.typename, ":").concat(JSON.stringify(i));
          })
        );
      }
      function iC(e) {
        var t = iR(e);
        return (
          t.keyArgsFn ||
          (t.keyArgsFn = function (t, r) {
            var n = r.field,
              i = r.variables,
              o = r.fieldName,
              a = JSON.stringify(
                iN(e, function (e) {
                  var r = e[0],
                    o = r.charAt(0);
                  if ("@" === o) {
                    if (n && rs(n.directives)) {
                      var a = r.slice(1),
                        s = n.directives.find(function (e) {
                          return e.name.value === a;
                        }),
                        u = s && tQ(s, i);
                      return u && iM(u, e.slice(1));
                    }
                    return;
                  }
                  if ("$" === o) {
                    var c = r.slice(1);
                    if (i && iu.call(i, c)) {
                      var l = e.slice(0);
                      return (l[0] = c), iM(i, l);
                    }
                    return;
                  }
                  if (t) return iM(t, e);
                })
              );
            return (t || "{}" !== a) && (o += ":" + a), o;
          })
        );
      }
      function iN(e, t) {
        var r = new rh();
        return (function e(t) {
          var r = iR(t);
          if (!r.paths) {
            var n = (r.paths = []),
              i = [];
            t.forEach(function (r, o) {
              ra(r)
                ? (e(r).forEach(function (e) {
                    return n.push(i.concat(e));
                  }),
                  (i.length = 0))
                : (i.push(r),
                  ra(t[o + 1]) || (n.push(i.slice(0)), (i.length = 0)));
            });
          }
          return r.paths;
        })(e).reduce(function (e, n) {
          var i,
            o = t(n);
          if (void 0 !== o) {
            for (var a = n.length - 1; a >= 0; --a)
              ((i = {})[n[a]] = o), (o = i);
            e = r.merge(e, o);
          }
          return e;
        }, Object.create(null));
      }
      function iF(e, t) {
        return e[t];
      }
      function iM(e, t, r) {
        return (
          (r = r || iF),
          (function e(t) {
            return ts(t)
              ? ra(t)
                ? t.map(e)
                : iN(Object.keys(t).sort(), function (e) {
                    return iM(t, e);
                  })
              : t;
          })(
            t.reduce(function e(t, n) {
              return ra(t)
                ? t.map(function (t) {
                    return e(t, n);
                  })
                : t && r(t, n);
            }, e)
          )
        );
      }
      function iq(e) {
        return void 0 !== e.args
          ? e.args
          : e.field
          ? tQ(e.field, e.variables)
          : null;
      }
      var iL = function () {},
        iV = function (e, t) {
          return t.fieldName;
        },
        iQ = function (e, t, r) {
          return (0, r.mergeObjects)(e, t);
        },
        iz = function (e, t) {
          return t;
        },
        iB = (function () {
          function e(e) {
            (this.config = e),
              (this.typePolicies = Object.create(null)),
              (this.toBeAdded = Object.create(null)),
              (this.supertypeMap = new Map()),
              (this.fuzzySubtypes = new Map()),
              (this.rootIdsByTypename = Object.create(null)),
              (this.rootTypenamesById = Object.create(null)),
              (this.usingPossibleTypes = !1),
              (this.config = ev({ dataIdFromObject: il }, e)),
              (this.cache = this.config.cache),
              this.setRootTypename("Query"),
              this.setRootTypename("Mutation"),
              this.setRootTypename("Subscription"),
              e.possibleTypes && this.addPossibleTypes(e.possibleTypes),
              e.typePolicies && this.addTypePolicies(e.typePolicies);
          }
          return (
            (e.prototype.identify = function (e, t) {
              var r,
                n,
                i = this,
                o =
                  (t &&
                    (t.typename ||
                      (null === (r = t.storeObject) || void 0 === r
                        ? void 0
                        : r.__typename))) ||
                  e.__typename;
              if (o === this.rootTypenamesById.ROOT_QUERY)
                return ["ROOT_QUERY"];
              for (
                var a = (t && t.storeObject) || e,
                  s = ev(ev({}, t), {
                    typename: o,
                    storeObject: a,
                    readField:
                      (t && t.readField) ||
                      function () {
                        var e = iW(arguments, a);
                        return i.readField(e, {
                          store: i.cache.data,
                          variables: e.variables,
                        });
                      },
                  }),
                  u = o && this.getTypePolicy(o),
                  c = (u && u.keyFn) || this.config.dataIdFromObject;
                c;

              ) {
                var l = c(ev(ev({}, e), a), s);
                if (ra(l)) c = iA(l);
                else {
                  n = l;
                  break;
                }
              }
              return (
                (n = n ? String(n) : void 0),
                s.keyObject ? [n, s.keyObject] : [n]
              );
            }),
            (e.prototype.addTypePolicies = function (e) {
              var t = this;
              Object.keys(e).forEach(function (r) {
                var n = e[r],
                  i = n.queryType,
                  o = n.mutationType,
                  a = n.subscriptionType,
                  s = em(n, ["queryType", "mutationType", "subscriptionType"]);
                i && t.setRootTypename("Query", r),
                  o && t.setRootTypename("Mutation", r),
                  a && t.setRootTypename("Subscription", r),
                  iu.call(t.toBeAdded, r)
                    ? t.toBeAdded[r].push(s)
                    : (t.toBeAdded[r] = [s]);
              });
            }),
            (e.prototype.updateTypePolicy = function (e, t) {
              var r = this,
                n = this.getTypePolicy(e),
                i = t.keyFields,
                o = t.fields;
              function a(e, t) {
                e.merge =
                  "function" == typeof t
                    ? t
                    : !0 === t
                    ? iQ
                    : !1 === t
                    ? iz
                    : e.merge;
              }
              a(n, t.merge),
                (n.keyFn =
                  !1 === i
                    ? iL
                    : ra(i)
                    ? iA(i)
                    : "function" == typeof i
                    ? i
                    : n.keyFn),
                o &&
                  Object.keys(o).forEach(function (t) {
                    var n = r.getFieldPolicy(e, t, !0),
                      i = o[t];
                    if ("function" == typeof i) n.read = i;
                    else {
                      var s = i.keyArgs,
                        u = i.read,
                        c = i.merge;
                      (n.keyFn =
                        !1 === s
                          ? iV
                          : ra(s)
                          ? iC(s)
                          : "function" == typeof s
                          ? s
                          : n.keyFn),
                        "function" == typeof u && (n.read = u),
                        a(n, c);
                    }
                    n.read && n.merge && (n.keyFn = n.keyFn || iV);
                  });
            }),
            (e.prototype.setRootTypename = function (e, t) {
              void 0 === t && (t = e);
              var r = "ROOT_" + e.toUpperCase(),
                n = this.rootTypenamesById[r];
              t !== n &&
                (eF(!n || n === e, 5, e),
                n && delete this.rootIdsByTypename[n],
                (this.rootIdsByTypename[t] = r),
                (this.rootTypenamesById[r] = t));
            }),
            (e.prototype.addPossibleTypes = function (e) {
              var t = this;
              (this.usingPossibleTypes = !0),
                Object.keys(e).forEach(function (r) {
                  t.getSupertypeSet(r, !0),
                    e[r].forEach(function (e) {
                      t.getSupertypeSet(e, !0).add(r);
                      var n = e.match(ip);
                      (n && n[0] === e) ||
                        t.fuzzySubtypes.set(e, new RegExp(e));
                    });
                });
            }),
            (e.prototype.getTypePolicy = function (e) {
              var t = this;
              if (!iu.call(this.typePolicies, e)) {
                var r = (this.typePolicies[e] = Object.create(null));
                r.fields = Object.create(null);
                var n = this.supertypeMap.get(e);
                !n &&
                  this.fuzzySubtypes.size &&
                  ((n = this.getSupertypeSet(e, !0)),
                  this.fuzzySubtypes.forEach(function (r, i) {
                    if (r.test(e)) {
                      var o = t.supertypeMap.get(i);
                      o &&
                        o.forEach(function (e) {
                          return n.add(e);
                        });
                    }
                  })),
                  n &&
                    n.size &&
                    n.forEach(function (e) {
                      var n = t.getTypePolicy(e),
                        i = n.fields;
                      Object.assign(r, em(n, ["fields"])),
                        Object.assign(r.fields, i);
                    });
              }
              var i = this.toBeAdded[e];
              return (
                i &&
                  i.length &&
                  i.splice(0).forEach(function (r) {
                    t.updateTypePolicy(e, r);
                  }),
                this.typePolicies[e]
              );
            }),
            (e.prototype.getFieldPolicy = function (e, t, r) {
              if (e) {
                var n = this.getTypePolicy(e).fields;
                return n[t] || (r && (n[t] = Object.create(null)));
              }
            }),
            (e.prototype.getSupertypeSet = function (e, t) {
              var r = this.supertypeMap.get(e);
              return !r && t && this.supertypeMap.set(e, (r = new Set())), r;
            }),
            (e.prototype.fragmentMatches = function (e, t, r, n) {
              var i = this;
              if (!e.typeCondition) return !0;
              if (!t) return !1;
              var o = e.typeCondition.name.value;
              if (t === o) return !0;
              if (this.usingPossibleTypes && this.supertypeMap.has(o))
                for (
                  var a = this.getSupertypeSet(t, !0),
                    s = [a],
                    u = function (e) {
                      var t = i.getSupertypeSet(e, !1);
                      t && t.size && 0 > s.indexOf(t) && s.push(t);
                    },
                    c = !!(r && this.fuzzySubtypes.size),
                    l = !1,
                    f = 0;
                  f < s.length;
                  ++f
                ) {
                  var h = s[f];
                  if (h.has(o))
                    return (
                      a.has(o) ||
                        (l && !1 !== globalThis.__DEV__ && eF.warn(6, t, o),
                        a.add(o)),
                      !0
                    );
                  h.forEach(u),
                    c &&
                      f === s.length - 1 &&
                      (function e(t, r, n) {
                        return (
                          !!ts(r) &&
                          (ra(r)
                            ? r.every(function (r) {
                                return e(t, r, n);
                              })
                            : t.selections.every(function (t) {
                                if (tU(t) && t8(t, n)) {
                                  var i = tz(t);
                                  return (
                                    iu.call(r, i) &&
                                    (!t.selectionSet ||
                                      e(t.selectionSet, r[i], n))
                                  );
                                }
                                return !0;
                              }))
                        );
                      })(e.selectionSet, r, n) &&
                      ((c = !1),
                      (l = !0),
                      this.fuzzySubtypes.forEach(function (e, r) {
                        var n = t.match(e);
                        n && n[0] === t && u(r);
                      }));
                }
              return !1;
            }),
            (e.prototype.hasKeyArgs = function (e, t) {
              var r = this.getFieldPolicy(e, t, !1);
              return !!(r && r.keyFn);
            }),
            (e.prototype.getStoreFieldName = function (e) {
              var t,
                r,
                n,
                i,
                o,
                a = e.typename,
                s = e.fieldName,
                u = this.getFieldPolicy(a, s, !1),
                c = u && u.keyFn;
              if (c && a)
                for (
                  var l = {
                      typename: a,
                      fieldName: s,
                      field: e.field || null,
                      variables: e.variables,
                    },
                    f = iq(e);
                  c;

                ) {
                  var h = c(f, l);
                  if (ra(h)) c = iC(h);
                  else {
                    o = h || s;
                    break;
                  }
                }
              return (
                void 0 === o &&
                  (o = e.field
                    ? ((t = e.field),
                      (r = e.variables),
                      (n = null),
                      t.directives &&
                        ((n = {}),
                        t.directives.forEach(function (e) {
                          (n[e.name.value] = {}),
                            e.arguments &&
                              e.arguments.forEach(function (t) {
                                var i = t.name,
                                  o = t.value;
                                return tM(n[e.name.value], i, o, r);
                              });
                        })),
                      (i = null),
                      t.arguments &&
                        t.arguments.length &&
                        ((i = {}),
                        t.arguments.forEach(function (e) {
                          var t = e.name,
                            n = e.value;
                          return tM(i, t, n, r);
                        })),
                      tV(t.name.value, i, n))
                    : tV(s, iq(e))),
                !1 === o ? s : s === iy(o) ? o : s + ":" + o
              );
            }),
            (e.prototype.readField = function (e, t) {
              var r = e.from;
              if (r && (e.field || e.fieldName)) {
                if (void 0 === e.typename) {
                  var n = t.store.getFieldValue(r, "__typename");
                  n && (e.typename = n);
                }
                var i = this.getStoreFieldName(e),
                  o = iy(i),
                  a = t.store.getFieldValue(r, i),
                  s = this.getFieldPolicy(e.typename, o, !1),
                  u = s && s.read;
                if (u) {
                  var c = iU(
                    this,
                    r,
                    e,
                    t,
                    t.store.getStorage(tF(r) ? r.__ref : r, i)
                  );
                  return n5.withValue(this.cache, u, [a, c]);
                }
                return a;
              }
            }),
            (e.prototype.getReadFunction = function (e, t) {
              var r = this.getFieldPolicy(e, t, !1);
              return r && r.read;
            }),
            (e.prototype.getMergeFunction = function (e, t, r) {
              var n = this.getFieldPolicy(e, t, !1),
                i = n && n.merge;
              return !i && r && (i = (n = this.getTypePolicy(r)) && n.merge), i;
            }),
            (e.prototype.runMergeFunction = function (e, t, r, n, i) {
              var o = r.field,
                a = r.typename,
                s = r.merge;
              return s === iQ
                ? i$(n.store)(e, t)
                : s === iz
                ? t
                : (n.overwrite && (e = void 0),
                  s(
                    e,
                    t,
                    iU(
                      this,
                      void 0,
                      {
                        typename: a,
                        fieldName: o.name.value,
                        field: o,
                        variables: n.variables,
                      },
                      n,
                      i || Object.create(null)
                    )
                  ));
            }),
            e
          );
        })();
      function iU(e, t, r, n, i) {
        var o = e.getStoreFieldName(r),
          a = iy(o),
          s = r.variables || n.variables,
          u = n.store,
          c = u.toReference,
          l = u.canRead;
        return {
          args: iq(r),
          field: r.field || null,
          fieldName: a,
          storeFieldName: o,
          variables: s,
          isReference: tF,
          toReference: c,
          storage: i,
          cache: e.cache,
          canRead: l,
          readField: function () {
            return e.readField(iW(arguments, t, s), n);
          },
          mergeObjects: i$(n.store),
        };
      }
      function iW(e, t, r) {
        var n,
          i = e[0],
          o = e[1],
          a = e.length;
        return (
          "string" == typeof i
            ? (n = { fieldName: i, from: a > 1 ? o : t })
            : ((n = ev({}, i)), iu.call(n, "from") || (n.from = t)),
          !1 !== globalThis.__DEV__ &&
            void 0 === n.from &&
            !1 !== globalThis.__DEV__ &&
            eF.warn(7, eC(Array.from(e))),
          void 0 === n.variables && (n.variables = r),
          n
        );
      }
      function i$(e) {
        return function (t, r) {
          if (ra(t) || ra(r)) throw eM(8);
          if (ts(t) && ts(r)) {
            var n = e.getFieldValue(t, "__typename"),
              i = e.getFieldValue(r, "__typename");
            if (n && i && n !== i) return r;
            if (tF(t) && iv(r)) return e.merge(t.__ref, r), t;
            if (iv(t) && tF(r)) return e.merge(t, r.__ref), r;
            if (iv(t) && iv(r)) return ev(ev({}, t), r);
          }
          return r;
        };
      }
      function iG(e, t, r) {
        var n = "".concat(t).concat(r),
          i = e.flavors.get(n);
        return (
          i ||
            e.flavors.set(
              n,
              (i =
                e.clientOnly === t && e.deferred === r
                  ? e
                  : ev(ev({}, e), { clientOnly: t, deferred: r }))
            ),
          i
        );
      }
      var iH = (function () {
          function e(e, t, r) {
            (this.cache = e), (this.reader = t), (this.fragments = r);
          }
          return (
            (e.prototype.writeToStore = function (e, t) {
              var r = this,
                n = t.query,
                i = t.result,
                o = t.dataId,
                a = t.variables,
                s = t.overwrite,
                u = t$(n),
                c = new rh();
              a = ev(ev({}, tK(u)), a);
              var l = ev(
                  ev(
                    {
                      store: e,
                      written: Object.create(null),
                      merge: function (e, t) {
                        return c.merge(e, t);
                      },
                      variables: a,
                      varString: tR(a),
                    },
                    im(n, this.fragments)
                  ),
                  {
                    overwrite: !!s,
                    incomingById: new Map(),
                    clientOnly: !1,
                    deferred: !1,
                    flavors: new Map(),
                  }
                ),
                f = this.processSelectionSet({
                  result: i || Object.create(null),
                  dataId: o,
                  selectionSet: u.selectionSet,
                  mergeTree: { map: new Map() },
                  context: l,
                });
              if (!tF(f)) throw eM(11, i);
              return (
                l.incomingById.forEach(function (t, n) {
                  var i = t.storeObject,
                    o = t.mergeTree,
                    a = t.fieldNodeSet,
                    s = tN(n);
                  if (o && o.map.size) {
                    var u = r.applyMerges(o, s, i, l);
                    if (tF(u)) return;
                    i = u;
                  }
                  if (!1 !== globalThis.__DEV__ && !l.overwrite) {
                    var c = Object.create(null);
                    a.forEach(function (e) {
                      e.selectionSet && (c[e.name.value] = !0);
                    });
                    var f = function (e) {
                      var t = o && o.map.get(e);
                      return !!(t && t.info && t.info.merge);
                    };
                    Object.keys(i).forEach(function (e) {
                      !0 !== c[iy(e)] ||
                        f(e) ||
                        (function (e, t, r, n) {
                          var i = function (e) {
                              var t = n.getFieldValue(e, r);
                              return "object" == typeof t && t;
                            },
                            o = i(e);
                          if (o) {
                            var a = i(t);
                            if (
                              !(
                                !a ||
                                tF(o) ||
                                rU(o, a) ||
                                Object.keys(o).every(function (e) {
                                  return void 0 !== n.getFieldValue(a, e);
                                })
                              )
                            ) {
                              var s =
                                  n.getFieldValue(e, "__typename") ||
                                  n.getFieldValue(t, "__typename"),
                                u = iy(r),
                                c = "".concat(s, ".").concat(u);
                              if (!iX.has(c)) {
                                iX.add(c);
                                var l = [];
                                ra(o) ||
                                  ra(a) ||
                                  [o, a].forEach(function (e) {
                                    var t = n.getFieldValue(e, "__typename");
                                    "string" != typeof t ||
                                      l.includes(t) ||
                                      l.push(t);
                                  }),
                                  !1 !== globalThis.__DEV__ &&
                                    eF.warn(
                                      14,
                                      u,
                                      s,
                                      l.length
                                        ? "either ensure all objects of type " +
                                            l.join(" and ") +
                                            " have an ID or a custom merge function, or "
                                        : "",
                                      c,
                                      ev({}, o),
                                      ev({}, a)
                                    );
                              }
                            }
                          }
                        })(s, i, e, l.store);
                    });
                  }
                  e.merge(n, i);
                }),
                e.retain(f.__ref),
                f
              );
            }),
            (e.prototype.processSelectionSet = function (e) {
              var t = this,
                r = e.dataId,
                n = e.result,
                i = e.selectionSet,
                o = e.context,
                a = e.mergeTree,
                s = this.cache.policies,
                u = Object.create(null),
                c =
                  (r && s.rootTypenamesById[r]) ||
                  tB(n, i, o.fragmentMap) ||
                  (r && o.store.get(r, "__typename"));
              "string" == typeof c && (u.__typename = c);
              var l = function () {
                  var e = iW(arguments, u, o.variables);
                  if (tF(e.from)) {
                    var t = o.incomingById.get(e.from.__ref);
                    if (t) {
                      var r = s.readField(
                        ev(ev({}, e), { from: t.storeObject }),
                        o
                      );
                      if (void 0 !== r) return r;
                    }
                  }
                  return s.readField(e, o);
                },
                f = new Set();
              this.flattenFields(i, n, o, c).forEach(function (e, r) {
                var i,
                  o = n[tz(r)];
                if ((f.add(r), void 0 !== o)) {
                  var h = s.getStoreFieldName({
                      typename: c,
                      fieldName: r.name.value,
                      field: r,
                      variables: e.variables,
                    }),
                    d = iZ(a, h),
                    p = t.processFieldValue(
                      o,
                      r,
                      r.selectionSet ? iG(e, !1, !1) : e,
                      d
                    ),
                    y = void 0;
                  r.selectionSet &&
                    (tF(p) || iv(p)) &&
                    (y = l("__typename", p));
                  var v = s.getMergeFunction(c, r.name.value, y);
                  v ? (d.info = { field: r, typename: c, merge: v }) : iJ(a, h),
                    (u = e.merge(u, (((i = {})[h] = p), i)));
                } else !1 === globalThis.__DEV__ || e.clientOnly || e.deferred || rN.added(r) || s.getReadFunction(c, r.name.value) || !1 === globalThis.__DEV__ || eF.error(12, tz(r), n);
              });
              try {
                var h = s.identify(n, {
                    typename: c,
                    selectionSet: i,
                    fragmentMap: o.fragmentMap,
                    storeObject: u,
                    readField: l,
                  }),
                  d = h[0],
                  p = h[1];
                (r = r || d), p && (u = o.merge(u, p));
              } catch (e) {
                if (!r) throw e;
              }
              if ("string" == typeof r) {
                var y = tN(r),
                  v = o.written[r] || (o.written[r] = []);
                if (
                  v.indexOf(i) >= 0 ||
                  (v.push(i), this.reader && this.reader.isFresh(n, y, i, o))
                )
                  return y;
                var m = o.incomingById.get(r);
                return (
                  m
                    ? ((m.storeObject = o.merge(m.storeObject, u)),
                      (m.mergeTree = (function e(t, r) {
                        if (t === r || !r || iK(r)) return t;
                        if (!t || iK(t)) return r;
                        var n =
                            t.info && r.info
                              ? ev(ev({}, t.info), r.info)
                              : t.info || r.info,
                          i = t.map.size && r.map.size,
                          o = {
                            info: n,
                            map: i ? new Map() : t.map.size ? t.map : r.map,
                          };
                        if (i) {
                          var a = new Set(r.map.keys());
                          t.map.forEach(function (t, n) {
                            o.map.set(n, e(t, r.map.get(n))), a.delete(n);
                          }),
                            a.forEach(function (n) {
                              o.map.set(n, e(r.map.get(n), t.map.get(n)));
                            });
                        }
                        return o;
                      })(m.mergeTree, a)),
                      f.forEach(function (e) {
                        return m.fieldNodeSet.add(e);
                      }))
                    : o.incomingById.set(r, {
                        storeObject: u,
                        mergeTree: iK(a) ? void 0 : a,
                        fieldNodeSet: f,
                      }),
                  y
                );
              }
              return u;
            }),
            (e.prototype.processFieldValue = function (e, t, r, n) {
              var i = this;
              return t.selectionSet && null !== e
                ? ra(e)
                  ? e.map(function (e, o) {
                      var a = i.processFieldValue(e, t, r, iZ(n, o));
                      return iJ(n, o), a;
                    })
                  : this.processSelectionSet({
                      result: e,
                      selectionSet: t.selectionSet,
                      context: r,
                      mergeTree: n,
                    })
                : !1 !== globalThis.__DEV__
                ? nL(e)
                : e;
            }),
            (e.prototype.flattenFields = function (e, t, r, n) {
              void 0 === n && (n = tB(t, e, r.fragmentMap));
              var i = new Map(),
                o = this.cache.policies,
                a = new rX(!1);
              return (
                (function e(s, u) {
                  var c = a.lookup(s, u.clientOnly, u.deferred);
                  c.visited ||
                    ((c.visited = !0),
                    s.selections.forEach(function (a) {
                      if (t8(a, r.variables)) {
                        var s = u.clientOnly,
                          c = u.deferred;
                        if (
                          (!(s && c) &&
                            rs(a.directives) &&
                            a.directives.forEach(function (e) {
                              var t = e.name.value;
                              if (("client" === t && (s = !0), "defer" === t)) {
                                var n = tQ(e, r.variables);
                                (n && !1 === n.if) || (c = !0);
                              }
                            }),
                          tU(a))
                        ) {
                          var l = i.get(a);
                          l && ((s = s && l.clientOnly), (c = c && l.deferred)),
                            i.set(a, iG(r, s, c));
                        } else {
                          var f = tl(a, r.lookupFragment);
                          if (!f && a.kind === p.FRAGMENT_SPREAD)
                            throw eM(13, a.name.value);
                          f &&
                            o.fragmentMatches(f, n, t, r.variables) &&
                            e(f.selectionSet, iG(r, s, c));
                        }
                      }
                    }));
                })(e, r),
                i
              );
            }),
            (e.prototype.applyMerges = function (e, t, r, n, i) {
              var o = this;
              if (e.map.size && !tF(r)) {
                var a,
                  s,
                  u = !ra(r) && (tF(t) || iv(t)) ? t : void 0,
                  c = r;
                u && !i && (i = [tF(u) ? u.__ref : u]);
                var l = function (e, t) {
                  return ra(e)
                    ? "number" == typeof t
                      ? e[t]
                      : void 0
                    : n.store.getFieldValue(e, String(t));
                };
                e.map.forEach(function (e, t) {
                  var r = l(u, t),
                    a = l(c, t);
                  if (void 0 !== a) {
                    i && i.push(t);
                    var f = o.applyMerges(e, r, a, n, i);
                    f !== a && (s = s || new Map()).set(t, f),
                      i && eF(i.pop() === t);
                  }
                }),
                  s &&
                    ((r = ra(c) ? c.slice(0) : ev({}, c)),
                    s.forEach(function (e, t) {
                      r[t] = e;
                    }));
              }
              return e.info
                ? this.cache.policies.runMergeFunction(
                    t,
                    r,
                    e.info,
                    n,
                    i && (a = n.store).getStorage.apply(a, i)
                  )
                : r;
            }),
            e
          );
        })(),
        iY = [];
      function iZ(e, t) {
        var r = e.map;
        return r.has(t) || r.set(t, iY.pop() || { map: new Map() }), r.get(t);
      }
      function iK(e) {
        return !e || !(e.info || e.map.size);
      }
      function iJ(e, t) {
        var r = e.map,
          n = r.get(t);
        n && iK(n) && (iY.push(n), r.delete(t));
      }
      var iX = new Set(),
        i0 = (function (e) {
          function t(t) {
            void 0 === t && (t = {});
            var r = e.call(this) || this;
            return (
              (r.watches = new Set()),
              (r.addTypenameTransform = new nI(rN)),
              (r.assumeImmutableResults = !0),
              (r.makeVar = n7),
              (r.txCount = 0),
              (r.config = nM(ih, t)),
              (r.addTypename = !!r.config.addTypename),
              (r.policies = new iB({
                cache: r,
                dataIdFromObject: r.config.dataIdFromObject,
                possibleTypes: r.config.possibleTypes,
                typePolicies: r.config.typePolicies,
              })),
              r.init(),
              r
            );
          }
          return (
            ey(t, e),
            (t.prototype.init = function () {
              var e = (this.data = new i_.Root({
                policies: this.policies,
                resultCaching: this.config.resultCaching,
              }));
              (this.optimisticData = e.stump), this.resetResultCache();
            }),
            (t.prototype.resetResultCache = function (e) {
              var t = this,
                r = this.storeReader,
                n = this.config.fragments;
              (this.storeWriter = new iH(
                this,
                (this.storeReader = new iD({
                  cache: this,
                  addTypename: this.addTypename,
                  resultCacheMaxSize: this.config.resultCacheMaxSize,
                  canonizeResults: id(this.config),
                  canon: e ? void 0 : r && r.canon,
                  fragments: n,
                })),
                n
              )),
                (this.maybeBroadcastWatch = nT(
                  function (e, r) {
                    return t.broadcastWatch(e, r);
                  },
                  {
                    max:
                      this.config.resultCacheMaxSize ||
                      tS["inMemoryCache.maybeBroadcastWatch"] ||
                      5e3,
                    makeCacheKey: function (e) {
                      var r = e.optimistic ? t.optimisticData : t.data;
                      if (iT(r)) {
                        var n = e.optimistic,
                          i = e.id,
                          o = e.variables;
                        return r.makeCacheKey(
                          e.query,
                          e.callback,
                          tR({ optimistic: n, id: i, variables: o })
                        );
                      }
                    },
                  }
                )),
                new Set([this.data.group, this.optimisticData.group]).forEach(
                  function (e) {
                    return e.resetCaching();
                  }
                );
            }),
            (t.prototype.restore = function (e) {
              return this.init(), e && this.data.replace(e), this;
            }),
            (t.prototype.extract = function (e) {
              return (
                void 0 === e && (e = !1),
                (e ? this.optimisticData : this.data).extract()
              );
            }),
            (t.prototype.read = function (e) {
              var t = e.returnPartialData;
              try {
                return (
                  this.storeReader.diffQueryAgainstStore(
                    ev(ev({}, e), {
                      store: e.optimistic ? this.optimisticData : this.data,
                      config: this.config,
                      returnPartialData: void 0 !== t && t,
                    })
                  ).result || null
                );
              } catch (e) {
                if (e instanceof ia) return null;
                throw e;
              }
            }),
            (t.prototype.write = function (e) {
              try {
                return (
                  ++this.txCount, this.storeWriter.writeToStore(this.data, e)
                );
              } finally {
                --this.txCount || !1 === e.broadcast || this.broadcastWatches();
              }
            }),
            (t.prototype.modify = function (e) {
              if (iu.call(e, "id") && !e.id) return !1;
              var t = e.optimistic ? this.optimisticData : this.data;
              try {
                return ++this.txCount, t.modify(e.id || "ROOT_QUERY", e.fields);
              } finally {
                --this.txCount || !1 === e.broadcast || this.broadcastWatches();
              }
            }),
            (t.prototype.diff = function (e) {
              return this.storeReader.diffQueryAgainstStore(
                ev(ev({}, e), {
                  store: e.optimistic ? this.optimisticData : this.data,
                  rootId: e.id || "ROOT_QUERY",
                  config: this.config,
                })
              );
            }),
            (t.prototype.watch = function (e) {
              var t = this;
              return (
                this.watches.size ||
                  (function (e) {
                    n9(e).vars.forEach(function (t) {
                      return t.attachCache(e);
                    });
                  })(this),
                this.watches.add(e),
                e.immediate && this.maybeBroadcastWatch(e),
                function () {
                  t.watches.delete(e) && !t.watches.size && n8(t),
                    t.maybeBroadcastWatch.forget(e);
                }
              );
            }),
            (t.prototype.gc = function (e) {
              tR.reset(),
                rj.reset(),
                this.addTypenameTransform.resetCache(),
                null === (t = this.config.fragments) ||
                  void 0 === t ||
                  t.resetCaches();
              var t,
                r = this.optimisticData.gc();
              return (
                e &&
                  !this.txCount &&
                  (e.resetResultCache
                    ? this.resetResultCache(e.resetResultIdentities)
                    : e.resetResultIdentities && this.storeReader.resetCanon()),
                r
              );
            }),
            (t.prototype.retain = function (e, t) {
              return (t ? this.optimisticData : this.data).retain(e);
            }),
            (t.prototype.release = function (e, t) {
              return (t ? this.optimisticData : this.data).release(e);
            }),
            (t.prototype.identify = function (e) {
              if (tF(e)) return e.__ref;
              try {
                return this.policies.identify(e)[0];
              } catch (e) {
                !1 !== globalThis.__DEV__ && eF.warn(e);
              }
            }),
            (t.prototype.evict = function (e) {
              if (!e.id) {
                if (iu.call(e, "id")) return !1;
                e = ev(ev({}, e), { id: "ROOT_QUERY" });
              }
              try {
                return ++this.txCount, this.optimisticData.evict(e, this.data);
              } finally {
                --this.txCount || !1 === e.broadcast || this.broadcastWatches();
              }
            }),
            (t.prototype.reset = function (e) {
              var t = this;
              return (
                this.init(),
                tR.reset(),
                e && e.discardWatches
                  ? (this.watches.forEach(function (e) {
                      return t.maybeBroadcastWatch.forget(e);
                    }),
                    this.watches.clear(),
                    n8(this))
                  : this.broadcastWatches(),
                Promise.resolve()
              );
            }),
            (t.prototype.removeOptimistic = function (e) {
              var t = this.optimisticData.removeLayer(e);
              t !== this.optimisticData &&
                ((this.optimisticData = t), this.broadcastWatches());
            }),
            (t.prototype.batch = function (e) {
              var t,
                r = this,
                n = e.update,
                i = e.optimistic,
                o = void 0 === i || i,
                a = e.removeOptimistic,
                s = e.onWatchUpdated,
                u = function (e) {
                  var i = r.data,
                    o = r.optimisticData;
                  ++r.txCount, e && (r.data = r.optimisticData = e);
                  try {
                    return (t = n(r));
                  } finally {
                    --r.txCount, (r.data = i), (r.optimisticData = o);
                  }
                },
                c = new Set();
              return (
                s &&
                  !this.txCount &&
                  this.broadcastWatches(
                    ev(ev({}, e), {
                      onWatchUpdated: function (e) {
                        return c.add(e), !1;
                      },
                    })
                  ),
                "string" == typeof o
                  ? (this.optimisticData = this.optimisticData.addLayer(o, u))
                  : !1 === o
                  ? u(this.data)
                  : u(),
                "string" == typeof a &&
                  (this.optimisticData = this.optimisticData.removeLayer(a)),
                s && c.size
                  ? (this.broadcastWatches(
                      ev(ev({}, e), {
                        onWatchUpdated: function (e, t) {
                          var r = s.call(this, e, t);
                          return !1 !== r && c.delete(e), r;
                        },
                      })
                    ),
                    c.size &&
                      c.forEach(function (e) {
                        return r.maybeBroadcastWatch.dirty(e);
                      }))
                  : this.broadcastWatches(e),
                t
              );
            }),
            (t.prototype.performTransaction = function (e, t) {
              return this.batch({ update: e, optimistic: t || null !== t });
            }),
            (t.prototype.transformDocument = function (e) {
              return this.addTypenameToDocument(this.addFragmentsToDocument(e));
            }),
            (t.prototype.broadcastWatches = function (e) {
              var t = this;
              this.txCount ||
                this.watches.forEach(function (r) {
                  return t.maybeBroadcastWatch(r, e);
                });
            }),
            (t.prototype.addFragmentsToDocument = function (e) {
              var t = this.config.fragments;
              return t ? t.transform(e) : e;
            }),
            (t.prototype.addTypenameToDocument = function (e) {
              return this.addTypename
                ? this.addTypenameTransform.transformDocument(e)
                : e;
            }),
            (t.prototype.broadcastWatch = function (e, t) {
              var r = e.lastDiff,
                n = this.diff(e);
              (!t ||
                (e.optimistic &&
                  "string" == typeof t.optimistic &&
                  (n.fromOptimisticTransaction = !0),
                !t.onWatchUpdated ||
                  !1 !== t.onWatchUpdated.call(this, e, n, r))) &&
                ((r && rU(r.result, n.result)) ||
                  e.callback((e.lastDiff = n), r));
            }),
            t
          );
        })(io);
      !1 !== globalThis.__DEV__ && (i0.prototype.getMemoryInternals = tk);
      var i1 = r(4098);
      let i2 = new ii({
        link: new rL({
          uri: "https://6rvsembg2htpykxway6sknmvva0aqshl.lambda-url.eu-west-1.on.aws/",
          fetch: r.n(i1)(),
        }),
        cache: new i0(),
      });
      var i3 = (e) => {
        let { Component: t, pageProps: r } = e,
          [n, i] = (0, g.useState)(!1);
        return (0, m.jsx)(_.f6, {
          theme: ed.r,
          children: (0, m.jsxs)(eZ, {
            client: i2,
            children: [
              (0, m.jsx)(eh, { theme: ed.r }),
              (0, m.jsxs)(w(), {
                children: [
                  (0, m.jsx)("meta", {
                    name: "viewport",
                    content: "width=device-width, initial-scale=1",
                  }),
                  (0, m.jsx)("title", {
                    children:
                      "EvilEye | Efficient, low cost, single sided Automated Market Maker",
                  }),
                  (0, m.jsx)("meta", {
                    name: "description",
                    content:
                      "Efficient, low cost, single sided Automated Market Maker (AMM) with a universal liquidity token powered by Miner Extracted Value (MEV) capturing tokenomics.",
                  }),
                ],
              }),
              (0, m.jsxs)("div", {
                children: [
                  (0, m.jsx)(G, { open: n, setOpen: i }),
                  (0, m.jsx)("div", {
                    className: "content",
                    children: (0, m.jsx)(t, { ...r }),
                  }),
                  (0, m.jsx)(q, {
                    items: T,
                    open: n,
                    setOpen: i,
                    "aria-controls": "main-menu",
                  }),
                  (0, m.jsx)(ec, {}),
                ],
              }),
            ],
          }),
        });
      };
    },
    4608: function (e, t, r) {
      "use strict";
      r.d(t, {
        e: function () {
          return s;
        },
        r: function () {
          return u;
        },
      });
      var n = r(2729),
        i = r(1686);
      function o() {
        let e = (0, n._)([
          "\n    @media (max-width: ",
          "px) {\n      ",
          "\n    }\n  ",
        ]);
        return (
          (o = function () {
            return e;
          }),
          e
        );
      }
      function a() {
        let e = (0, n._)([
          "\n    @media (min-width: ",
          "px) {\n      ",
          "\n    }\n  ",
        ]);
        return (
          (a = function () {
            return e;
          }),
          e
        );
      }
      let s = {
          upToExtraSmall: 500,
          upToSmall: 720,
          upToMedium: 960,
          upToLarge: 1280,
          upToExtraLarge: 1600,
        },
        u = {
          background: "#18152a",
          background_over: "rgba(25,21,43,0.9)",
          background_info: "rgba(32,23,84,0.34)",
          fadeBgGradientColor:
            "linear-gradient(0deg, rgba(25,21,43,0.9) 0%, rgba(36,31,59,0.9) 100%)",
          footerBg: "#161325",
          white: "#ffffff",
          blue: "#54B8FF",
          accent: "#9A76FF",
          linkColor: "#9A76FF",
          bodyText: "#cccccc",
          textColorBox: "#EEE9FD",
          textColorSub: "#817998",
          textGrey: "#777495",
          textDark: "#04004D",
          elementBg: "#030303",
          buttonBorderColor: "#9A76FF",
          buttonBorderRadius: "4px",
          buttonBorderRadiusBig: "20px",
          buttonBackgroundColor: "#241634",
          buttonBackgroundColorGradient:
            "linear-gradient(120deg, #120f27 0%, #241634 100%)",
          buttonBackgroundColorHover: "#9A76FF",
          statsBgGradientColor:
            "linear-gradient(0deg, rgba(39,25,55,1) 0%, rgba(32,24,50,1) 100%)",
          statsBorderGradientColor:
            "linear-gradient(0deg, rgba(84,70,124,1) 10%, rgba(42,29,62,1) 100%)",
          appsboxBgGradientColor:
            "linear-gradient(90deg, rgba(50,29,74,1) 0%, rgba(36,31,59,1) 100%)",
          tokenboxBgGradientColor:
            "linear-gradient(180deg,rgba(256,256,256,1) 59%,rgb(229 232 236) 80%)",
          transition: "all 300ms ease-in-out",
          mediaWidth: Object.keys(s).reduce(
            (e, t) => (
              (e[t] = (e, r, n) => (0, i.iv)(o(), s[t], (0, i.iv)(e, r, n))), e
            ),
            {}
          ),
          mediaMinWidth: Object.keys(s).reduce(
            (e, t) => (
              (e[t] = (e, r, n) => (0, i.iv)(a(), s[t], (0, i.iv)(e, r, n))), e
            ),
            {}
          ),
        };
    },
    7663: function (e) {
      !(function () {
        var t = {
            229: function (e) {
              var t,
                r,
                n,
                i = (e.exports = {});
              function o() {
                throw Error("setTimeout has not been defined");
              }
              function a() {
                throw Error("clearTimeout has not been defined");
              }
              function s(e) {
                if (t === setTimeout) return setTimeout(e, 0);
                if ((t === o || !t) && setTimeout)
                  return (t = setTimeout), setTimeout(e, 0);
                try {
                  return t(e, 0);
                } catch (r) {
                  try {
                    return t.call(null, e, 0);
                  } catch (r) {
                    return t.call(this, e, 0);
                  }
                }
              }
              !(function () {
                try {
                  t = "function" == typeof setTimeout ? setTimeout : o;
                } catch (e) {
                  t = o;
                }
                try {
                  r = "function" == typeof clearTimeout ? clearTimeout : a;
                } catch (e) {
                  r = a;
                }
              })();
              var u = [],
                c = !1,
                l = -1;
              function f() {
                c &&
                  n &&
                  ((c = !1),
                  n.length ? (u = n.concat(u)) : (l = -1),
                  u.length && h());
              }
              function h() {
                if (!c) {
                  var e = s(f);
                  c = !0;
                  for (var t = u.length; t; ) {
                    for (n = u, u = []; ++l < t; ) n && n[l].run();
                    (l = -1), (t = u.length);
                  }
                  (n = null),
                    (c = !1),
                    (function (e) {
                      if (r === clearTimeout) return clearTimeout(e);
                      if ((r === a || !r) && clearTimeout)
                        return (r = clearTimeout), clearTimeout(e);
                      try {
                        r(e);
                      } catch (t) {
                        try {
                          return r.call(null, e);
                        } catch (t) {
                          return r.call(this, e);
                        }
                      }
                    })(e);
                }
              }
              function d(e, t) {
                (this.fun = e), (this.array = t);
              }
              function p() {}
              (i.nextTick = function (e) {
                var t = Array(arguments.length - 1);
                if (arguments.length > 1)
                  for (var r = 1; r < arguments.length; r++)
                    t[r - 1] = arguments[r];
                u.push(new d(e, t)), 1 !== u.length || c || s(h);
              }),
                (d.prototype.run = function () {
                  this.fun.apply(null, this.array);
                }),
                (i.title = "browser"),
                (i.browser = !0),
                (i.env = {}),
                (i.argv = []),
                (i.version = ""),
                (i.versions = {}),
                (i.on = p),
                (i.addListener = p),
                (i.once = p),
                (i.off = p),
                (i.removeListener = p),
                (i.removeAllListeners = p),
                (i.emit = p),
                (i.prependListener = p),
                (i.prependOnceListener = p),
                (i.listeners = function (e) {
                  return [];
                }),
                (i.binding = function (e) {
                  throw Error("process.binding is not supported");
                }),
                (i.cwd = function () {
                  return "/";
                }),
                (i.chdir = function (e) {
                  throw Error("process.chdir is not supported");
                }),
                (i.umask = function () {
                  return 0;
                });
            },
          },
          r = {};
        function n(e) {
          var i = r[e];
          if (void 0 !== i) return i.exports;
          var o = (r[e] = { exports: {} }),
            a = !0;
          try {
            t[e](o, o.exports, n), (a = !1);
          } finally {
            a && delete r[e];
          }
          return o.exports;
        }
        n.ab = "//";
        var i = n(229);
        e.exports = i;
      })();
    },
    9008: function (e, t, r) {
      e.exports = r(7828);
    },
    1664: function (e, t, r) {
      e.exports = r(9577);
    },
    3914: function (e, t, r) {
      "use strict";
      (e.exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = void 0),
        (e.exports.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE =
          void 0),
        (e.exports.__SERVER_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE =
          void 0),
        Object.assign(e.exports, r(7294));
    },
    6774: function (e) {
      e.exports = function (e, t, r, n) {
        var i = r ? r.call(n, e, t) : void 0;
        if (void 0 !== i) return !!i;
        if (e === t) return !0;
        if ("object" != typeof e || !e || "object" != typeof t || !t) return !1;
        var o = Object.keys(e),
          a = Object.keys(t);
        if (o.length !== a.length) return !1;
        for (
          var s = Object.prototype.hasOwnProperty.bind(t), u = 0;
          u < o.length;
          u++
        ) {
          var c = o[u];
          if (!s(c)) return !1;
          var l = e[c],
            f = t[c];
          if (
            !1 === (i = r ? r.call(n, l, f, c) : void 0) ||
            (void 0 === i && l !== f)
          )
            return !1;
        }
        return !0;
      };
    },
    1686: function (e, t, r) {
      "use strict";
      r.d(t, {
        f6: function () {
          return tu;
        },
        vJ: function () {
          return tm;
        },
        iv: function () {
          return td;
        },
        ZP: function () {
          return ty;
        },
        F4: function () {
          return tg;
        },
      });
      var n = function () {
        return (n =
          Object.assign ||
          function (e) {
            for (var t, r = 1, n = arguments.length; r < n; r++)
              for (var i in (t = arguments[r]))
                Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
            return e;
          }).apply(this, arguments);
      };
      function i(e, t, r) {
        if (r || 2 == arguments.length)
          for (var n, i = 0, o = t.length; i < o; i++)
            (!n && i in t) ||
              (n || (n = Array.prototype.slice.call(t, 0, i)), (n[i] = t[i]));
        return e.concat(n || Array.prototype.slice.call(t));
      }
      "function" == typeof SuppressedError && SuppressedError;
      var o = r(7294),
        a = r(6774),
        s = r.n(a),
        u = "-ms-",
        c = "-moz-",
        l = "-webkit-",
        f = "comm",
        h = "rule",
        d = "decl",
        p = "@keyframes",
        y = Math.abs,
        v = String.fromCharCode,
        m = Object.assign;
      function g(e, t) {
        return (e = t.exec(e)) ? e[0] : e;
      }
      function b(e, t, r) {
        return e.replace(t, r);
      }
      function w(e, t, r) {
        return e.indexOf(t, r);
      }
      function _(e, t) {
        return 0 | e.charCodeAt(t);
      }
      function x(e, t, r) {
        return e.slice(t, r);
      }
      function S(e) {
        return e.length;
      }
      function O(e, t) {
        return t.push(e), e;
      }
      function E(e, t) {
        return e.filter(function (e) {
          return !g(e, t);
        });
      }
      var k = 1,
        T = 1,
        j = 0,
        I = 0,
        D = 0,
        P = "";
      function R(e, t, r, n, i, o, a, s) {
        return {
          value: e,
          root: t,
          parent: r,
          type: n,
          props: i,
          children: o,
          line: k,
          column: T,
          length: a,
          return: "",
          siblings: s,
        };
      }
      function A(e, t) {
        return m(
          R("", null, null, "", null, null, 0, e.siblings),
          e,
          { length: -e.length },
          t
        );
      }
      function C(e) {
        for (; e.root; ) e = A(e.root, { children: [e] });
        O(e, e.siblings);
      }
      function N() {
        return (D = I < j ? _(P, I++) : 0), T++, 10 === D && ((T = 1), k++), D;
      }
      function F() {
        return _(P, I);
      }
      function M(e) {
        switch (e) {
          case 0:
          case 9:
          case 10:
          case 13:
          case 32:
            return 5;
          case 33:
          case 43:
          case 44:
          case 47:
          case 62:
          case 64:
          case 126:
          case 59:
          case 123:
          case 125:
            return 4;
          case 58:
            return 3;
          case 34:
          case 39:
          case 40:
          case 91:
            return 2;
          case 41:
          case 93:
            return 1;
        }
        return 0;
      }
      function q(e) {
        var t, r;
        return ((t = I - 1),
        (r = (function e(t) {
          for (; N(); )
            switch (D) {
              case t:
                return I;
              case 34:
              case 39:
                34 !== t && 39 !== t && e(D);
                break;
              case 40:
                41 === t && e(t);
                break;
              case 92:
                N();
            }
          return I;
        })(91 === e ? e + 2 : 40 === e ? e + 1 : e)),
        x(P, t, r)).trim();
      }
      function L(e, t) {
        for (var r = "", n = 0; n < e.length; n++) r += t(e[n], n, e, t) || "";
        return r;
      }
      function V(e, t, r, n) {
        switch (e.type) {
          case "@layer":
            if (e.children.length) break;
          case "@import":
          case d:
            return (e.return = e.return || e.value);
          case f:
            return "";
          case p:
            return (e.return = e.value + "{" + L(e.children, n) + "}");
          case h:
            if (!S((e.value = e.props.join(",")))) return "";
        }
        return S((r = L(e.children, n)))
          ? (e.return = e.value + "{" + r + "}")
          : "";
      }
      function Q(e, t, r, n) {
        if (e.length > -1 && !e.return)
          switch (e.type) {
            case d:
              e.return = (function e(t, r, n) {
                var i;
                switch (
                  ((i = r),
                  45 ^ _(t, 0)
                    ? (((((((i << 2) ^ _(t, 0)) << 2) ^ _(t, 1)) << 2) ^
                        _(t, 2)) <<
                        2) ^
                      _(t, 3)
                    : 0)
                ) {
                  case 5103:
                    return l + "print-" + t + t;
                  case 5737:
                  case 4201:
                  case 3177:
                  case 3433:
                  case 1641:
                  case 4457:
                  case 2921:
                  case 5572:
                  case 6356:
                  case 5844:
                  case 3191:
                  case 6645:
                  case 3005:
                  case 6391:
                  case 5879:
                  case 5623:
                  case 6135:
                  case 4599:
                  case 4855:
                  case 4215:
                  case 6389:
                  case 5109:
                  case 5365:
                  case 5621:
                  case 3829:
                    return l + t + t;
                  case 4789:
                    return c + t + t;
                  case 5349:
                  case 4246:
                  case 4810:
                  case 6968:
                  case 2756:
                    return l + t + c + t + u + t + t;
                  case 5936:
                    switch (_(t, r + 11)) {
                      case 114:
                        return l + t + u + b(t, /[svh]\w+-[tblr]{2}/, "tb") + t;
                      case 108:
                        return (
                          l + t + u + b(t, /[svh]\w+-[tblr]{2}/, "tb-rl") + t
                        );
                      case 45:
                        return l + t + u + b(t, /[svh]\w+-[tblr]{2}/, "lr") + t;
                    }
                  case 6828:
                  case 4268:
                  case 2903:
                    return l + t + u + t + t;
                  case 6165:
                    return l + t + u + "flex-" + t + t;
                  case 5187:
                    return (
                      l +
                      t +
                      b(t, /(\w+).+(:[^]+)/, l + "box-$1$2" + u + "flex-$1$2") +
                      t
                    );
                  case 5443:
                    return (
                      l +
                      t +
                      u +
                      "flex-item-" +
                      b(t, /flex-|-self/g, "") +
                      (g(t, /flex-|baseline/)
                        ? ""
                        : u + "grid-row-" + b(t, /flex-|-self/g, "")) +
                      t
                    );
                  case 4675:
                    return (
                      l +
                      t +
                      u +
                      "flex-line-pack" +
                      b(t, /align-content|flex-|-self/g, "") +
                      t
                    );
                  case 5548:
                    return l + t + u + b(t, "shrink", "negative") + t;
                  case 5292:
                    return l + t + u + b(t, "basis", "preferred-size") + t;
                  case 6060:
                    return (
                      l +
                      "box-" +
                      b(t, "-grow", "") +
                      l +
                      t +
                      u +
                      b(t, "grow", "positive") +
                      t
                    );
                  case 4554:
                    return l + b(t, /([^-])(transform)/g, "$1" + l + "$2") + t;
                  case 6187:
                    return (
                      b(
                        b(
                          b(t, /(zoom-|grab)/, l + "$1"),
                          /(image-set)/,
                          l + "$1"
                        ),
                        t,
                        ""
                      ) + t
                    );
                  case 5495:
                  case 3959:
                    return b(t, /(image-set\([^]*)/, l + "$1$`$1");
                  case 4968:
                    return (
                      b(
                        b(
                          t,
                          /(.+:)(flex-)?(.*)/,
                          l + "box-pack:$3" + u + "flex-pack:$3"
                        ),
                        /s.+-b[^;]+/,
                        "justify"
                      ) +
                      l +
                      t +
                      t
                    );
                  case 4200:
                    if (!g(t, /flex-|baseline/))
                      return u + "grid-column-align" + x(t, r) + t;
                    break;
                  case 2592:
                  case 3360:
                    return u + b(t, "template-", "") + t;
                  case 4384:
                  case 3616:
                    if (
                      n &&
                      n.some(function (e, t) {
                        return (r = t), g(e.props, /grid-\w+-end/);
                      })
                    )
                      return ~w(t + (n = n[r].value), "span", 0)
                        ? t
                        : u +
                            b(t, "-start", "") +
                            t +
                            u +
                            "grid-row-span:" +
                            (~w(n, "span", 0)
                              ? g(n, /\d+/)
                              : +g(n, /\d+/) - +g(t, /\d+/)) +
                            ";";
                    return u + b(t, "-start", "") + t;
                  case 4896:
                  case 4128:
                    return n &&
                      n.some(function (e) {
                        return g(e.props, /grid-\w+-start/);
                      })
                      ? t
                      : u + b(b(t, "-end", "-span"), "span ", "") + t;
                  case 4095:
                  case 3583:
                  case 4068:
                  case 2532:
                    return b(t, /(.+)-inline(.+)/, l + "$1$2") + t;
                  case 8116:
                  case 7059:
                  case 5753:
                  case 5535:
                  case 5445:
                  case 5701:
                  case 4933:
                  case 4677:
                  case 5533:
                  case 5789:
                  case 5021:
                  case 4765:
                    if (S(t) - 1 - r > 6)
                      switch (_(t, r + 1)) {
                        case 109:
                          if (45 !== _(t, r + 4)) break;
                        case 102:
                          return (
                            b(
                              t,
                              /(.+:)(.+)-([^]+)/,
                              "$1" +
                                l +
                                "$2-$3$1" +
                                c +
                                (108 == _(t, r + 3) ? "$3" : "$2-$3")
                            ) + t
                          );
                        case 115:
                          return ~w(t, "stretch", 0)
                            ? e(b(t, "stretch", "fill-available"), r, n) + t
                            : t;
                      }
                    break;
                  case 5152:
                  case 5920:
                    return b(
                      t,
                      /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,
                      function (e, r, n, i, o, a, s) {
                        return (
                          u +
                          r +
                          ":" +
                          n +
                          s +
                          (i ? u + r + "-span:" + (o ? a : +a - +n) + s : "") +
                          t
                        );
                      }
                    );
                  case 4949:
                    if (121 === _(t, r + 6)) return b(t, ":", ":" + l) + t;
                    break;
                  case 6444:
                    switch (_(t, 45 === _(t, 14) ? 18 : 11)) {
                      case 120:
                        return (
                          b(
                            t,
                            /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,
                            "$1" +
                              l +
                              (45 === _(t, 14) ? "inline-" : "") +
                              "box$3$1" +
                              l +
                              "$2$3$1" +
                              u +
                              "$2box$3"
                          ) + t
                        );
                      case 100:
                        return b(t, ":", ":" + u) + t;
                    }
                    break;
                  case 5719:
                  case 2647:
                  case 2135:
                  case 3927:
                  case 2391:
                    return b(t, "scroll-", "scroll-snap-") + t;
                }
                return t;
              })(e.value, e.length, r);
              return;
            case p:
              return L([A(e, { value: b(e.value, "@", "@" + l) })], n);
            case h:
              if (e.length) {
                var i, o;
                return (
                  (i = r = e.props),
                  (o = function (t) {
                    switch (g(t, (n = /(::plac\w+|:read-\w+)/))) {
                      case ":read-only":
                      case ":read-write":
                        C(
                          A(e, { props: [b(t, /:(read-\w+)/, ":" + c + "$1")] })
                        ),
                          C(A(e, { props: [t] })),
                          m(e, { props: E(r, n) });
                        break;
                      case "::placeholder":
                        C(
                          A(e, {
                            props: [b(t, /:(plac\w+)/, ":" + l + "input-$1")],
                          })
                        ),
                          C(
                            A(e, {
                              props: [b(t, /:(plac\w+)/, ":" + c + "$1")],
                            })
                          ),
                          C(
                            A(e, {
                              props: [b(t, /:(plac\w+)/, u + "input-$1")],
                            })
                          ),
                          C(A(e, { props: [t] })),
                          m(e, { props: E(r, n) });
                    }
                    return "";
                  }),
                  i.map(o).join("")
                );
              }
          }
      }
      function z(e, t, r, n, i, o, a, s, u, c, l, f) {
        for (
          var d = i - 1,
            p = 0 === i ? o : [""],
            v = p.length,
            m = 0,
            g = 0,
            w = 0;
          m < n;
          ++m
        )
          for (
            var _ = 0, S = x(e, d + 1, (d = y((g = a[m])))), O = e;
            _ < v;
            ++_
          )
            (O = (g > 0 ? p[_] + " " + S : b(S, /&\f/g, p[_])).trim()) &&
              (u[w++] = O);
        return R(e, t, r, 0 === i ? h : s, u, c, l, f);
      }
      function B(e, t, r, n, i) {
        return R(e, t, r, d, x(e, 0, n), x(e, n + 1, -1), n, i);
      }
      var U = {
          animationIterationCount: 1,
          aspectRatio: 1,
          borderImageOutset: 1,
          borderImageSlice: 1,
          borderImageWidth: 1,
          boxFlex: 1,
          boxFlexGroup: 1,
          boxOrdinalGroup: 1,
          columnCount: 1,
          columns: 1,
          flex: 1,
          flexGrow: 1,
          flexPositive: 1,
          flexShrink: 1,
          flexNegative: 1,
          flexOrder: 1,
          gridRow: 1,
          gridRowEnd: 1,
          gridRowSpan: 1,
          gridRowStart: 1,
          gridColumn: 1,
          gridColumnEnd: 1,
          gridColumnSpan: 1,
          gridColumnStart: 1,
          msGridRow: 1,
          msGridRowSpan: 1,
          msGridColumn: 1,
          msGridColumnSpan: 1,
          fontWeight: 1,
          lineHeight: 1,
          opacity: 1,
          order: 1,
          orphans: 1,
          tabSize: 1,
          widows: 1,
          zIndex: 1,
          zoom: 1,
          WebkitLineClamp: 1,
          fillOpacity: 1,
          floodOpacity: 1,
          stopOpacity: 1,
          strokeDasharray: 1,
          strokeDashoffset: 1,
          strokeMiterlimit: 1,
          strokeOpacity: 1,
          strokeWidth: 1,
        },
        W = r(3454),
        $ =
          (void 0 !== W &&
            void 0 !== W.env &&
            (W.env.REACT_APP_SC_ATTR || W.env.SC_ATTR)) ||
          "data-styled",
        G = "active",
        H = "data-styled-version",
        Y = "6.1.12",
        Z = "/*!sc*/\n",
        K = "undefined" != typeof window && "HTMLElement" in window,
        J = !!("boolean" == typeof SC_DISABLE_SPEEDY
          ? SC_DISABLE_SPEEDY
          : void 0 !== W &&
            void 0 !== W.env &&
            void 0 !== W.env.REACT_APP_SC_DISABLE_SPEEDY &&
            "" !== W.env.REACT_APP_SC_DISABLE_SPEEDY
          ? "false" !== W.env.REACT_APP_SC_DISABLE_SPEEDY &&
            W.env.REACT_APP_SC_DISABLE_SPEEDY
          : void 0 !== W &&
            void 0 !== W.env &&
            void 0 !== W.env.SC_DISABLE_SPEEDY &&
            "" !== W.env.SC_DISABLE_SPEEDY &&
            "false" !== W.env.SC_DISABLE_SPEEDY &&
            W.env.SC_DISABLE_SPEEDY),
        X = {},
        ee = Object.freeze([]),
        et = Object.freeze({});
      function er(e, t, r) {
        return (
          void 0 === r && (r = et),
          (e.theme !== r.theme && e.theme) || t || r.theme
        );
      }
      var en = new Set([
          "a",
          "abbr",
          "address",
          "area",
          "article",
          "aside",
          "audio",
          "b",
          "base",
          "bdi",
          "bdo",
          "big",
          "blockquote",
          "body",
          "br",
          "button",
          "canvas",
          "caption",
          "cite",
          "code",
          "col",
          "colgroup",
          "data",
          "datalist",
          "dd",
          "del",
          "details",
          "dfn",
          "dialog",
          "div",
          "dl",
          "dt",
          "em",
          "embed",
          "fieldset",
          "figcaption",
          "figure",
          "footer",
          "form",
          "h1",
          "h2",
          "h3",
          "h4",
          "h5",
          "h6",
          "header",
          "hgroup",
          "hr",
          "html",
          "i",
          "iframe",
          "img",
          "input",
          "ins",
          "kbd",
          "keygen",
          "label",
          "legend",
          "li",
          "link",
          "main",
          "map",
          "mark",
          "menu",
          "menuitem",
          "meta",
          "meter",
          "nav",
          "noscript",
          "object",
          "ol",
          "optgroup",
          "option",
          "output",
          "p",
          "param",
          "picture",
          "pre",
          "progress",
          "q",
          "rp",
          "rt",
          "ruby",
          "s",
          "samp",
          "script",
          "section",
          "select",
          "small",
          "source",
          "span",
          "strong",
          "style",
          "sub",
          "summary",
          "sup",
          "table",
          "tbody",
          "td",
          "textarea",
          "tfoot",
          "th",
          "thead",
          "time",
          "tr",
          "track",
          "u",
          "ul",
          "use",
          "var",
          "video",
          "wbr",
          "circle",
          "clipPath",
          "defs",
          "ellipse",
          "foreignObject",
          "g",
          "image",
          "line",
          "linearGradient",
          "marker",
          "mask",
          "path",
          "pattern",
          "polygon",
          "polyline",
          "radialGradient",
          "rect",
          "stop",
          "svg",
          "text",
          "tspan",
        ]),
        ei = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,
        eo = /(^-|-$)/g;
      function ea(e) {
        return e.replace(ei, "-").replace(eo, "");
      }
      var es = /(a)(d)/gi,
        eu = function (e) {
          return String.fromCharCode(e + (e > 25 ? 39 : 97));
        };
      function ec(e) {
        var t,
          r = "";
        for (t = Math.abs(e); t > 52; t = (t / 52) | 0) r = eu(t % 52) + r;
        return (eu(t % 52) + r).replace(es, "$1-$2");
      }
      var el,
        ef = function (e, t) {
          for (var r = t.length; r; ) e = (33 * e) ^ t.charCodeAt(--r);
          return e;
        },
        eh = function (e) {
          return ef(5381, e);
        };
      function ed(e) {
        return ec(eh(e) >>> 0);
      }
      function ep(e) {
        return "string" == typeof e;
      }
      var ey = "function" == typeof Symbol && Symbol.for,
        ev = ey ? Symbol.for("react.memo") : 60115,
        em = ey ? Symbol.for("react.forward_ref") : 60112,
        eg = {
          childContextTypes: !0,
          contextType: !0,
          contextTypes: !0,
          defaultProps: !0,
          displayName: !0,
          getDefaultProps: !0,
          getDerivedStateFromError: !0,
          getDerivedStateFromProps: !0,
          mixins: !0,
          propTypes: !0,
          type: !0,
        },
        eb = {
          name: !0,
          length: !0,
          prototype: !0,
          caller: !0,
          callee: !0,
          arguments: !0,
          arity: !0,
        },
        ew = {
          $$typeof: !0,
          compare: !0,
          defaultProps: !0,
          displayName: !0,
          propTypes: !0,
          type: !0,
        },
        e_ =
          (((el = {})[em] = {
            $$typeof: !0,
            render: !0,
            defaultProps: !0,
            displayName: !0,
            propTypes: !0,
          }),
          (el[ev] = ew),
          el);
      function ex(e) {
        return ("type" in e && e.type.$$typeof) === ev
          ? ew
          : "$$typeof" in e
          ? e_[e.$$typeof]
          : eg;
      }
      var eS = Object.defineProperty,
        eO = Object.getOwnPropertyNames,
        eE = Object.getOwnPropertySymbols,
        ek = Object.getOwnPropertyDescriptor,
        eT = Object.getPrototypeOf,
        ej = Object.prototype;
      function eI(e) {
        return "function" == typeof e;
      }
      function eD(e) {
        return "object" == typeof e && "styledComponentId" in e;
      }
      function eP(e, t) {
        return e && t ? "".concat(e, " ").concat(t) : e || t || "";
      }
      function eR(e, t) {
        if (0 === e.length) return "";
        for (var r = e[0], n = 1; n < e.length; n++) r += t ? t + e[n] : e[n];
        return r;
      }
      function eA(e) {
        return (
          null !== e &&
          "object" == typeof e &&
          e.constructor.name === Object.name &&
          !("props" in e && e.$$typeof)
        );
      }
      function eC(e, t) {
        Object.defineProperty(e, "toString", { value: t });
      }
      function eN(e) {
        for (var t = [], r = 1; r < arguments.length; r++)
          t[r - 1] = arguments[r];
        return Error(
          "An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#"
            .concat(e, " for more information.")
            .concat(t.length > 0 ? " Args: ".concat(t.join(", ")) : "")
        );
      }
      var eF = (function () {
          function e(e) {
            (this.groupSizes = new Uint32Array(512)),
              (this.length = 512),
              (this.tag = e);
          }
          return (
            (e.prototype.indexOfGroup = function (e) {
              for (var t = 0, r = 0; r < e; r++) t += this.groupSizes[r];
              return t;
            }),
            (e.prototype.insertRules = function (e, t) {
              if (e >= this.groupSizes.length) {
                for (var r = this.groupSizes, n = r.length, i = n; e >= i; )
                  if ((i <<= 1) < 0) throw eN(16, "".concat(e));
                (this.groupSizes = new Uint32Array(i)),
                  this.groupSizes.set(r),
                  (this.length = i);
                for (var o = n; o < i; o++) this.groupSizes[o] = 0;
              }
              for (
                var a = this.indexOfGroup(e + 1), s = ((o = 0), t.length);
                o < s;
                o++
              )
                this.tag.insertRule(a, t[o]) && (this.groupSizes[e]++, a++);
            }),
            (e.prototype.clearGroup = function (e) {
              if (e < this.length) {
                var t = this.groupSizes[e],
                  r = this.indexOfGroup(e),
                  n = r + t;
                this.groupSizes[e] = 0;
                for (var i = r; i < n; i++) this.tag.deleteRule(r);
              }
            }),
            (e.prototype.getGroup = function (e) {
              var t = "";
              if (e >= this.length || 0 === this.groupSizes[e]) return t;
              for (
                var r = this.groupSizes[e],
                  n = this.indexOfGroup(e),
                  i = n + r,
                  o = n;
                o < i;
                o++
              )
                t += "".concat(this.tag.getRule(o)).concat(Z);
              return t;
            }),
            e
          );
        })(),
        eM = new Map(),
        eq = new Map(),
        eL = 1,
        eV = function (e) {
          if (eM.has(e)) return eM.get(e);
          for (; eq.has(eL); ) eL++;
          var t = eL++;
          return eM.set(e, t), eq.set(t, e), t;
        },
        eQ = function (e, t) {
          (eL = t + 1), eM.set(e, t), eq.set(t, e);
        },
        ez = "style[".concat($, "][").concat(H, '="').concat(Y, '"]'),
        eB = new RegExp(
          "^".concat($, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')
        ),
        eU = function (e, t, r) {
          for (var n, i = r.split(","), o = 0, a = i.length; o < a; o++)
            (n = i[o]) && e.registerName(t, n);
        },
        eW = function (e, t) {
          for (
            var r,
              n = (null !== (r = t.textContent) && void 0 !== r ? r : "").split(
                Z
              ),
              i = [],
              o = 0,
              a = n.length;
            o < a;
            o++
          ) {
            var s = n[o].trim();
            if (s) {
              var u = s.match(eB);
              if (u) {
                var c = 0 | parseInt(u[1], 10),
                  l = u[2];
                0 !== c &&
                  (eQ(l, c), eU(e, l, u[3]), e.getTag().insertRules(c, i)),
                  (i.length = 0);
              } else i.push(s);
            }
          }
        },
        e$ = function (e) {
          for (
            var t = document.querySelectorAll(ez), r = 0, n = t.length;
            r < n;
            r++
          ) {
            var i = t[r];
            i &&
              i.getAttribute($) !== G &&
              (eW(e, i), i.parentNode && i.parentNode.removeChild(i));
          }
        },
        eG = function (e) {
          var t,
            n = document.head,
            i = e || n,
            o = document.createElement("style"),
            a = (t = Array.from(i.querySelectorAll("style[".concat($, "]"))))[
              t.length - 1
            ],
            s = void 0 !== a ? a.nextSibling : null;
          o.setAttribute($, G), o.setAttribute(H, Y);
          var u = r.nc;
          return u && o.setAttribute("nonce", u), i.insertBefore(o, s), o;
        },
        eH = (function () {
          function e(e) {
            (this.element = eG(e)),
              this.element.appendChild(document.createTextNode("")),
              (this.sheet = (function (e) {
                if (e.sheet) return e.sheet;
                for (
                  var t = document.styleSheets, r = 0, n = t.length;
                  r < n;
                  r++
                ) {
                  var i = t[r];
                  if (i.ownerNode === e) return i;
                }
                throw eN(17);
              })(this.element)),
              (this.length = 0);
          }
          return (
            (e.prototype.insertRule = function (e, t) {
              try {
                return this.sheet.insertRule(t, e), this.length++, !0;
              } catch (e) {
                return !1;
              }
            }),
            (e.prototype.deleteRule = function (e) {
              this.sheet.deleteRule(e), this.length--;
            }),
            (e.prototype.getRule = function (e) {
              var t = this.sheet.cssRules[e];
              return t && t.cssText ? t.cssText : "";
            }),
            e
          );
        })(),
        eY = (function () {
          function e(e) {
            (this.element = eG(e)),
              (this.nodes = this.element.childNodes),
              (this.length = 0);
          }
          return (
            (e.prototype.insertRule = function (e, t) {
              if (e <= this.length && e >= 0) {
                var r = document.createTextNode(t);
                return (
                  this.element.insertBefore(r, this.nodes[e] || null),
                  this.length++,
                  !0
                );
              }
              return !1;
            }),
            (e.prototype.deleteRule = function (e) {
              this.element.removeChild(this.nodes[e]), this.length--;
            }),
            (e.prototype.getRule = function (e) {
              return e < this.length ? this.nodes[e].textContent : "";
            }),
            e
          );
        })(),
        eZ = (function () {
          function e(e) {
            (this.rules = []), (this.length = 0);
          }
          return (
            (e.prototype.insertRule = function (e, t) {
              return (
                e <= this.length &&
                (this.rules.splice(e, 0, t), this.length++, !0)
              );
            }),
            (e.prototype.deleteRule = function (e) {
              this.rules.splice(e, 1), this.length--;
            }),
            (e.prototype.getRule = function (e) {
              return e < this.length ? this.rules[e] : "";
            }),
            e
          );
        })(),
        eK = K,
        eJ = { isServer: !K, useCSSOMInjection: !J },
        eX = (function () {
          function e(e, t, r) {
            void 0 === e && (e = et), void 0 === t && (t = {});
            var i = this;
            (this.options = n(n({}, eJ), e)),
              (this.gs = t),
              (this.names = new Map(r)),
              (this.server = !!e.isServer),
              !this.server && K && eK && ((eK = !1), e$(this)),
              eC(this, function () {
                return (function (e) {
                  for (
                    var t = e.getTag(), r = t.length, n = "", i = 0;
                    i < r;
                    i++
                  )
                    (function (r) {
                      var i = eq.get(r);
                      if (void 0 !== i) {
                        var o = e.names.get(i),
                          a = t.getGroup(r);
                        if (void 0 !== o && o.size && 0 !== a.length) {
                          var s = ""
                              .concat($, ".g")
                              .concat(r, '[id="')
                              .concat(i, '"]'),
                            u = "";
                          void 0 !== o &&
                            o.forEach(function (e) {
                              e.length > 0 && (u += "".concat(e, ","));
                            }),
                            (n += ""
                              .concat(a)
                              .concat(s, '{content:"')
                              .concat(u, '"}')
                              .concat(Z));
                        }
                      }
                    })(i);
                  return n;
                })(i);
              });
          }
          return (
            (e.registerId = function (e) {
              return eV(e);
            }),
            (e.prototype.rehydrate = function () {
              !this.server && K && e$(this);
            }),
            (e.prototype.reconstructWithOptions = function (t, r) {
              return (
                void 0 === r && (r = !0),
                new e(
                  n(n({}, this.options), t),
                  this.gs,
                  (r && this.names) || void 0
                )
              );
            }),
            (e.prototype.allocateGSInstance = function (e) {
              return (this.gs[e] = (this.gs[e] || 0) + 1);
            }),
            (e.prototype.getTag = function () {
              var e, t, r;
              return (
                this.tag ||
                (this.tag =
                  ((t = (e = this.options).useCSSOMInjection),
                  (r = e.target),
                  new eF(e.isServer ? new eZ(r) : t ? new eH(r) : new eY(r))))
              );
            }),
            (e.prototype.hasNameForId = function (e, t) {
              return this.names.has(e) && this.names.get(e).has(t);
            }),
            (e.prototype.registerName = function (e, t) {
              if ((eV(e), this.names.has(e))) this.names.get(e).add(t);
              else {
                var r = new Set();
                r.add(t), this.names.set(e, r);
              }
            }),
            (e.prototype.insertRules = function (e, t, r) {
              this.registerName(e, t), this.getTag().insertRules(eV(e), r);
            }),
            (e.prototype.clearNames = function (e) {
              this.names.has(e) && this.names.get(e).clear();
            }),
            (e.prototype.clearRules = function (e) {
              this.getTag().clearGroup(eV(e)), this.clearNames(e);
            }),
            (e.prototype.clearTag = function () {
              this.tag = void 0;
            }),
            e
          );
        })(),
        e0 = /&/g,
        e1 = /^\s*\/\/.*$/gm;
      function e2(e) {
        var t,
          r,
          n,
          i = void 0 === e ? et : e,
          o = i.options,
          a = void 0 === o ? et : o,
          s = i.plugins,
          u = void 0 === s ? ee : s,
          c = function (e, n, i) {
            return i.startsWith(r) &&
              i.endsWith(r) &&
              i.replaceAll(r, "").length > 0
              ? ".".concat(t)
              : e;
          },
          l = u.slice();
        l.push(function (e) {
          e.type === h &&
            e.value.includes("&") &&
            (e.props[0] = e.props[0].replace(e0, r).replace(n, c));
        }),
          a.prefix && l.push(Q),
          l.push(V);
        var d = function (e, i, o, s) {
          void 0 === i && (i = ""),
            void 0 === o && (o = ""),
            void 0 === s && (s = "&"),
            (t = s),
            (r = i),
            (n = RegExp("\\".concat(r, "\\b"), "g"));
          var u,
            c,
            h,
            d,
            p,
            m,
            g = e.replace(e1, ""),
            E =
              ((p = (function e(t, r, n, i, o, a, s, u, c) {
                for (
                  var l,
                    h = 0,
                    d = 0,
                    p = s,
                    m = 0,
                    g = 0,
                    E = 0,
                    j = 1,
                    A = 1,
                    C = 1,
                    L = 0,
                    V = "",
                    Q = o,
                    U = a,
                    W = i,
                    $ = V;
                  A;

                )
                  switch (((E = L), (L = N()))) {
                    case 40:
                      if (108 != E && 58 == _($, p - 1)) {
                        -1 !=
                          w(
                            ($ += b(q(L), "&", "&\f")),
                            "&\f",
                            y(h ? u[h - 1] : 0)
                          ) && (C = -1);
                        break;
                      }
                    case 34:
                    case 39:
                    case 91:
                      $ += q(L);
                      break;
                    case 9:
                    case 10:
                    case 13:
                    case 32:
                      $ += (function (e) {
                        for (; (D = F()); )
                          if (D < 33) N();
                          else break;
                        return M(e) > 2 || M(D) > 3 ? "" : " ";
                      })(E);
                      break;
                    case 92:
                      $ += (function (e, t) {
                        for (
                          var r;
                          --t &&
                          N() &&
                          !(D < 48) &&
                          !(D > 102) &&
                          (!(D > 57) || !(D < 65)) &&
                          (!(D > 70) || !(D < 97));

                        );
                        return (
                          (r = I + (t < 6 && 32 == F() && 32 == N())),
                          x(P, e, r)
                        );
                      })(I - 1, 7);
                      continue;
                    case 47:
                      switch (F()) {
                        case 42:
                        case 47:
                          O(
                            R(
                              (l = (function (e, t) {
                                for (; N(); )
                                  if (e + D === 57) break;
                                  else if (e + D === 84 && 47 === F()) break;
                                return (
                                  "/*" +
                                  x(P, t, I - 1) +
                                  "*" +
                                  v(47 === e ? e : N())
                                );
                              })(N(), I)),
                              r,
                              n,
                              f,
                              v(D),
                              x(l, 2, -2),
                              0,
                              c
                            ),
                            c
                          );
                          break;
                        default:
                          $ += "/";
                      }
                      break;
                    case 123 * j:
                      u[h++] = S($) * C;
                    case 125 * j:
                    case 59:
                    case 0:
                      switch (L) {
                        case 0:
                        case 125:
                          A = 0;
                        case 59 + d:
                          -1 == C && ($ = b($, /\f/g, "")),
                            g > 0 &&
                              S($) - p &&
                              O(
                                g > 32
                                  ? B($ + ";", i, n, p - 1, c)
                                  : B(b($, " ", "") + ";", i, n, p - 2, c),
                                c
                              );
                          break;
                        case 59:
                          $ += ";";
                        default:
                          if (
                            (O(
                              (W = z(
                                $,
                                r,
                                n,
                                h,
                                d,
                                o,
                                u,
                                V,
                                (Q = []),
                                (U = []),
                                p,
                                a
                              )),
                              a
                            ),
                            123 === L)
                          ) {
                            if (0 === d) e($, r, W, W, Q, a, p, u, U);
                            else
                              switch (99 === m && 110 === _($, 3) ? 100 : m) {
                                case 100:
                                case 108:
                                case 109:
                                case 115:
                                  e(
                                    t,
                                    W,
                                    W,
                                    i &&
                                      O(
                                        z(
                                          t,
                                          W,
                                          W,
                                          0,
                                          0,
                                          o,
                                          u,
                                          V,
                                          o,
                                          (Q = []),
                                          p,
                                          U
                                        ),
                                        U
                                      ),
                                    o,
                                    U,
                                    p,
                                    u,
                                    i ? Q : U
                                  );
                                  break;
                                default:
                                  e($, W, W, W, [""], U, 0, u, U);
                              }
                          }
                      }
                      (h = d = g = 0), (j = C = 1), (V = $ = ""), (p = s);
                      break;
                    case 58:
                      (p = 1 + S($)), (g = E);
                    default:
                      if (j < 1) {
                        if (123 == L) --j;
                        else if (
                          125 == L &&
                          0 == j++ &&
                          125 ==
                            ((D = I > 0 ? _(P, --I) : 0),
                            T--,
                            10 === D && ((T = 1), k--),
                            D)
                        )
                          continue;
                      }
                      switch ((($ += v(L)), L * j)) {
                        case 38:
                          C = d > 0 ? 1 : (($ += "\f"), -1);
                          break;
                        case 44:
                          (u[h++] = (S($) - 1) * C), (C = 1);
                          break;
                        case 64:
                          45 === F() && ($ += q(N())),
                            (m = F()),
                            (d = p =
                              S(
                                (V = $ +=
                                  (function (e) {
                                    for (; !M(F()); ) N();
                                    return x(P, e, I);
                                  })(I))
                              )),
                            L++;
                          break;
                        case 45:
                          45 === E && 2 == S($) && (j = 0);
                      }
                  }
                return a;
              })(
                "",
                null,
                null,
                null,
                [""],
                ((d = h =
                  o || i
                    ? "".concat(o, " ").concat(i, " { ").concat(g, " }")
                    : g),
                (k = T = 1),
                (j = S((P = d))),
                (I = 0),
                (h = [])),
                0,
                [0],
                h
              )),
              (P = ""),
              p);
          a.namespace &&
            (E = (function e(t, r) {
              return t.map(function (t) {
                return (
                  "rule" === t.type &&
                    ((t.value = "".concat(r, " ").concat(t.value)),
                    (t.value = t.value.replaceAll(",", ",".concat(r, " "))),
                    (t.props = t.props.map(function (e) {
                      return "".concat(r, " ").concat(e);
                    }))),
                  Array.isArray(t.children) &&
                    "@keyframes" !== t.type &&
                    (t.children = e(t.children, r)),
                  t
                );
              });
            })(E, a.namespace));
          var A = [];
          return (
            L(
              E,
              ((c = (u = l.concat(
                ((m = function (e) {
                  return A.push(e);
                }),
                function (e) {
                  !e.root && (e = e.return) && m(e);
                })
              )).length),
              function (e, t, r, n) {
                for (var i = "", o = 0; o < c; o++) i += u[o](e, t, r, n) || "";
                return i;
              })
            ),
            A
          );
        };
        return (
          (d.hash = u.length
            ? u
                .reduce(function (e, t) {
                  return t.name || eN(15), ef(e, t.name);
                }, 5381)
                .toString()
            : ""),
          d
        );
      }
      var e3 = new eX(),
        e4 = e2(),
        e5 = o.createContext({
          shouldForwardProp: void 0,
          styleSheet: e3,
          stylis: e4,
        }),
        e6 = (e5.Consumer, o.createContext(void 0));
      function e9() {
        return (0, o.useContext)(e5);
      }
      function e8(e) {
        var t = (0, o.useState)(e.stylisPlugins),
          r = t[0],
          n = t[1],
          i = e9().styleSheet,
          a = (0, o.useMemo)(
            function () {
              var t = i;
              return (
                e.sheet
                  ? (t = e.sheet)
                  : e.target &&
                    (t = t.reconstructWithOptions({ target: e.target }, !1)),
                e.disableCSSOMInjection &&
                  (t = t.reconstructWithOptions({ useCSSOMInjection: !1 })),
                t
              );
            },
            [e.disableCSSOMInjection, e.sheet, e.target, i]
          ),
          u = (0, o.useMemo)(
            function () {
              return e2({
                options: {
                  namespace: e.namespace,
                  prefix: e.enableVendorPrefixes,
                },
                plugins: r,
              });
            },
            [e.enableVendorPrefixes, e.namespace, r]
          );
        (0, o.useEffect)(
          function () {
            s()(r, e.stylisPlugins) || n(e.stylisPlugins);
          },
          [e.stylisPlugins]
        );
        var c = (0, o.useMemo)(
          function () {
            return {
              shouldForwardProp: e.shouldForwardProp,
              styleSheet: a,
              stylis: u,
            };
          },
          [e.shouldForwardProp, a, u]
        );
        return o.createElement(
          e5.Provider,
          { value: c },
          o.createElement(e6.Provider, { value: u }, e.children)
        );
      }
      var e7 = (function () {
        function e(e, t) {
          var r = this;
          (this.inject = function (e, t) {
            void 0 === t && (t = e4);
            var n = r.name + t.hash;
            e.hasNameForId(r.id, n) ||
              e.insertRules(r.id, n, t(r.rules, n, "@keyframes"));
          }),
            (this.name = e),
            (this.id = "sc-keyframes-".concat(e)),
            (this.rules = t),
            eC(this, function () {
              throw eN(12, String(r.name));
            });
        }
        return (
          (e.prototype.getName = function (e) {
            return void 0 === e && (e = e4), this.name + e.hash;
          }),
          e
        );
      })();
      function te(e) {
        for (var t = "", r = 0; r < e.length; r++) {
          var n = e[r];
          if (1 === r && "-" === n && "-" === e[0]) return e;
          n >= "A" && n <= "Z" ? (t += "-" + n.toLowerCase()) : (t += n);
        }
        return t.startsWith("ms-") ? "-" + t : t;
      }
      var tt = function (e) {
          return null == e || !1 === e || "" === e;
        },
        tr = function (e) {
          var t = [];
          for (var r in e) {
            var n = e[r];
            e.hasOwnProperty(r) &&
              !tt(n) &&
              ((Array.isArray(n) && n.isCss) || eI(n)
                ? t.push("".concat(te(r), ":"), n, ";")
                : eA(n)
                ? t.push.apply(
                    t,
                    i(i(["".concat(r, " {")], tr(n), !1), ["}"], !1)
                  )
                : t.push(
                    ""
                      .concat(te(r), ": ")
                      .concat(
                        null == n || "boolean" == typeof n || "" === n
                          ? ""
                          : "number" != typeof n ||
                            0 === n ||
                            r in U ||
                            r.startsWith("--")
                          ? String(n).trim()
                          : "".concat(n, "px"),
                        ";"
                      )
                  ));
          }
          return t;
        };
      function tn(e, t, r, n) {
        return tt(e)
          ? []
          : eD(e)
          ? [".".concat(e.styledComponentId)]
          : eI(e)
          ? !eI(e) || (e.prototype && e.prototype.isReactComponent) || !t
            ? [e]
            : tn(e(t), t, r, n)
          : e instanceof e7
          ? r
            ? (e.inject(r, n), [e.getName(n)])
            : [e]
          : eA(e)
          ? tr(e)
          : Array.isArray(e)
          ? Array.prototype.concat.apply(
              ee,
              e.map(function (e) {
                return tn(e, t, r, n);
              })
            )
          : [e.toString()];
      }
      function ti(e) {
        for (var t = 0; t < e.length; t += 1) {
          var r = e[t];
          if (eI(r) && !eD(r)) return !1;
        }
        return !0;
      }
      var to = eh(Y),
        ta = (function () {
          function e(e, t, r) {
            (this.rules = e),
              (this.staticRulesId = ""),
              (this.isStatic = (void 0 === r || r.isStatic) && ti(e)),
              (this.componentId = t),
              (this.baseHash = ef(to, t)),
              (this.baseStyle = r),
              eX.registerId(t);
          }
          return (
            (e.prototype.generateAndInjectStyles = function (e, t, r) {
              var n = this.baseStyle
                ? this.baseStyle.generateAndInjectStyles(e, t, r)
                : "";
              if (this.isStatic && !r.hash) {
                if (
                  this.staticRulesId &&
                  t.hasNameForId(this.componentId, this.staticRulesId)
                )
                  n = eP(n, this.staticRulesId);
                else {
                  var i = eR(tn(this.rules, e, t, r)),
                    o = ec(ef(this.baseHash, i) >>> 0);
                  if (!t.hasNameForId(this.componentId, o)) {
                    var a = r(i, ".".concat(o), void 0, this.componentId);
                    t.insertRules(this.componentId, o, a);
                  }
                  (n = eP(n, o)), (this.staticRulesId = o);
                }
              } else {
                for (
                  var s = ef(this.baseHash, r.hash), u = "", c = 0;
                  c < this.rules.length;
                  c++
                ) {
                  var l = this.rules[c];
                  if ("string" == typeof l) u += l;
                  else if (l) {
                    var f = eR(tn(l, e, t, r));
                    (s = ef(s, f + c)), (u += f);
                  }
                }
                if (u) {
                  var h = ec(s >>> 0);
                  t.hasNameForId(this.componentId, h) ||
                    t.insertRules(
                      this.componentId,
                      h,
                      r(u, ".".concat(h), void 0, this.componentId)
                    ),
                    (n = eP(n, h));
                }
              }
              return n;
            }),
            e
          );
        })(),
        ts = o.createContext(void 0);
      function tu(e) {
        var t = o.useContext(ts),
          r = (0, o.useMemo)(
            function () {
              return (function (e, t) {
                if (!e) throw eN(14);
                if (eI(e)) return e(t);
                if (Array.isArray(e) || "object" != typeof e) throw eN(8);
                return t ? n(n({}, t), e) : e;
              })(e.theme, t);
            },
            [e.theme, t]
          );
        return e.children
          ? o.createElement(ts.Provider, { value: r }, e.children)
          : null;
      }
      ts.Consumer;
      var tc = {};
      function tl(e, t, r) {
        var i,
          a,
          s,
          u,
          c = eD(e),
          l = !ep(e),
          f = t.attrs,
          h = void 0 === f ? ee : f,
          d = t.componentId,
          p =
            void 0 === d
              ? ((i = t.displayName),
                (a = t.parentComponentId),
                (tc[(s = "string" != typeof i ? "sc" : ea(i))] =
                  (tc[s] || 0) + 1),
                (u = "".concat(s, "-").concat(ed(Y + s + tc[s]))),
                a ? "".concat(a, "-").concat(u) : u)
              : d,
          y = t.displayName,
          v =
            void 0 === y
              ? ep(e)
                ? "styled.".concat(e)
                : "Styled(".concat(e.displayName || e.name || "Component", ")")
              : y,
          m =
            t.displayName && t.componentId
              ? "".concat(ea(t.displayName), "-").concat(t.componentId)
              : t.componentId || p,
          g = c && e.attrs ? e.attrs.concat(h).filter(Boolean) : h,
          b = t.shouldForwardProp;
        if (c && e.shouldForwardProp) {
          var w = e.shouldForwardProp;
          if (t.shouldForwardProp) {
            var _ = t.shouldForwardProp;
            b = function (e, t) {
              return w(e, t) && _(e, t);
            };
          } else b = w;
        }
        var x = new ta(r, m, c ? e.componentStyle : void 0);
        function S(e, t) {
          return (function (e, t, r) {
            var i,
              a = e.attrs,
              s = e.componentStyle,
              u = e.defaultProps,
              c = e.foldedComponentIds,
              l = e.styledComponentId,
              f = e.target,
              h = o.useContext(ts),
              d = e9(),
              p = e.shouldForwardProp || d.shouldForwardProp,
              y = er(t, h, u) || et,
              v = (function (e, t, r) {
                for (
                  var i,
                    o = n(n({}, t), { className: void 0, theme: r }),
                    a = 0;
                  a < e.length;
                  a += 1
                ) {
                  var s = eI((i = e[a])) ? i(o) : i;
                  for (var u in s)
                    o[u] =
                      "className" === u
                        ? eP(o[u], s[u])
                        : "style" === u
                        ? n(n({}, o[u]), s[u])
                        : s[u];
                }
                return (
                  t.className && (o.className = eP(o.className, t.className)), o
                );
              })(a, t, y),
              m = v.as || f,
              g = {};
            for (var b in v)
              void 0 === v[b] ||
                "$" === b[0] ||
                "as" === b ||
                ("theme" === b && v.theme === y) ||
                ("forwardedAs" === b
                  ? (g.as = v.forwardedAs)
                  : (p && !p(b, m)) || (g[b] = v[b]));
            var w =
                ((i = e9()),
                s.generateAndInjectStyles(v, i.styleSheet, i.stylis)),
              _ = eP(c, l);
            return (
              w && (_ += " " + w),
              v.className && (_ += " " + v.className),
              (g[ep(m) && !en.has(m) ? "class" : "className"] = _),
              (g.ref = r),
              (0, o.createElement)(m, g)
            );
          })(O, e, t);
        }
        S.displayName = v;
        var O = o.forwardRef(S);
        return (
          (O.attrs = g),
          (O.componentStyle = x),
          (O.displayName = v),
          (O.shouldForwardProp = b),
          (O.foldedComponentIds = c
            ? eP(e.foldedComponentIds, e.styledComponentId)
            : ""),
          (O.styledComponentId = m),
          (O.target = c ? e.target : e),
          Object.defineProperty(O, "defaultProps", {
            get: function () {
              return this._foldedDefaultProps;
            },
            set: function (t) {
              this._foldedDefaultProps = c
                ? (function (e) {
                    for (var t = [], r = 1; r < arguments.length; r++)
                      t[r - 1] = arguments[r];
                    for (var n = 0; n < t.length; n++)
                      (function e(t, r, n) {
                        if (
                          (void 0 === n && (n = !1),
                          !n && !eA(t) && !Array.isArray(t))
                        )
                          return r;
                        if (Array.isArray(r))
                          for (var i = 0; i < r.length; i++)
                            t[i] = e(t[i], r[i]);
                        else if (eA(r)) for (var i in r) t[i] = e(t[i], r[i]);
                        return t;
                      })(e, t[n], !0);
                    return e;
                  })({}, e.defaultProps, t)
                : t;
            },
          }),
          eC(O, function () {
            return ".".concat(O.styledComponentId);
          }),
          l &&
            (function e(t, r, n) {
              if ("string" != typeof r) {
                if (ej) {
                  var i = eT(r);
                  i && i !== ej && e(t, i, n);
                }
                var o = eO(r);
                eE && (o = o.concat(eE(r)));
                for (var a = ex(t), s = ex(r), u = 0; u < o.length; ++u) {
                  var c = o[u];
                  if (
                    !(c in eb || (n && n[c]) || (s && c in s) || (a && c in a))
                  ) {
                    var l = ek(r, c);
                    try {
                      eS(t, c, l);
                    } catch (e) {}
                  }
                }
              }
              return t;
            })(O, e, {
              attrs: !0,
              componentStyle: !0,
              displayName: !0,
              foldedComponentIds: !0,
              shouldForwardProp: !0,
              styledComponentId: !0,
              target: !0,
            }),
          O
        );
      }
      function tf(e, t) {
        for (var r = [e[0]], n = 0, i = t.length; n < i; n += 1)
          r.push(t[n], e[n + 1]);
        return r;
      }
      var th = function (e) {
        return Object.assign(e, { isCss: !0 });
      };
      function td(e) {
        for (var t = [], r = 1; r < arguments.length; r++)
          t[r - 1] = arguments[r];
        return eI(e) || eA(e)
          ? th(tn(tf(ee, i([e], t, !0))))
          : 0 === t.length && 1 === e.length && "string" == typeof e[0]
          ? tn(e)
          : th(tn(tf(e, t)));
      }
      var tp = function (e) {
          return (function e(t, r, o) {
            if ((void 0 === o && (o = et), !r)) throw eN(1, r);
            var a = function (e) {
              for (var n = [], a = 1; a < arguments.length; a++)
                n[a - 1] = arguments[a];
              return t(r, o, td.apply(void 0, i([e], n, !1)));
            };
            return (
              (a.attrs = function (i) {
                return e(
                  t,
                  r,
                  n(n({}, o), {
                    attrs: Array.prototype.concat(o.attrs, i).filter(Boolean),
                  })
                );
              }),
              (a.withConfig = function (i) {
                return e(t, r, n(n({}, o), i));
              }),
              a
            );
          })(tl, e);
        },
        ty = tp;
      en.forEach(function (e) {
        ty[e] = tp(e);
      });
      var tv = (function () {
        function e(e, t) {
          (this.rules = e),
            (this.componentId = t),
            (this.isStatic = ti(e)),
            eX.registerId(this.componentId + 1);
        }
        return (
          (e.prototype.createStyles = function (e, t, r, n) {
            var i = n(eR(tn(this.rules, t, r, n)), ""),
              o = this.componentId + e;
            r.insertRules(o, o, i);
          }),
          (e.prototype.removeStyles = function (e, t) {
            t.clearRules(this.componentId + e);
          }),
          (e.prototype.renderStyles = function (e, t, r, n) {
            e > 2 && eX.registerId(this.componentId + e),
              this.removeStyles(e, r),
              this.createStyles(e, t, r, n);
          }),
          e
        );
      })();
      function tm(e) {
        for (var t = [], r = 1; r < arguments.length; r++)
          t[r - 1] = arguments[r];
        var a = td.apply(void 0, i([e], t, !1)),
          s = "sc-global-".concat(ed(JSON.stringify(a))),
          u = new tv(a, s),
          c = function (e) {
            var t = e9(),
              r = o.useContext(ts),
              n = o.useRef(t.styleSheet.allocateGSInstance(s)).current;
            return (
              t.styleSheet.server && l(n, e, t.styleSheet, r, t.stylis),
              o.useLayoutEffect(
                function () {
                  if (!t.styleSheet.server)
                    return (
                      l(n, e, t.styleSheet, r, t.stylis),
                      function () {
                        return u.removeStyles(n, t.styleSheet);
                      }
                    );
                },
                [n, e, t.styleSheet, r, t.stylis]
              ),
              null
            );
          };
        function l(e, t, r, i, o) {
          if (u.isStatic) u.renderStyles(e, X, r, o);
          else {
            var a = n(n({}, t), { theme: er(t, i, c.defaultProps) });
            u.renderStyles(e, a, r, o);
          }
        }
        return o.memo(c);
      }
      function tg(e) {
        for (var t = [], r = 1; r < arguments.length; r++)
          t[r - 1] = arguments[r];
        var n = eR(td.apply(void 0, i([e], t, !1)));
        return new e7(ed(n), n);
      }
      !(function () {
        function e() {
          var e = this;
          (this._emitSheetCSS = function () {
            var t = e.instance.toString();
            if (!t) return "";
            var n = r.nc,
              i = eR(
                [
                  n && 'nonce="'.concat(n, '"'),
                  "".concat($, '="true"'),
                  "".concat(H, '="').concat(Y, '"'),
                ].filter(Boolean),
                " "
              );
            return "<style ".concat(i, ">").concat(t, "</style>");
          }),
            (this.getStyleTags = function () {
              if (e.sealed) throw eN(2);
              return e._emitSheetCSS();
            }),
            (this.getStyleElement = function () {
              if (e.sealed) throw eN(2);
              var t,
                i = e.instance.toString();
              if (!i) return [];
              var a =
                  (((t = {})[$] = ""),
                  (t[H] = Y),
                  (t.dangerouslySetInnerHTML = { __html: i }),
                  t),
                s = r.nc;
              return (
                s && (a.nonce = s),
                [o.createElement("style", n({}, a, { key: "sc-0-0" }))]
              );
            }),
            (this.seal = function () {
              e.sealed = !0;
            }),
            (this.instance = new eX({ isServer: !0 })),
            (this.sealed = !1);
        }
        (e.prototype.collectStyles = function (e) {
          if (this.sealed) throw eN(2);
          return o.createElement(e8, { sheet: this.instance }, e);
        }),
          (e.prototype.interleaveWithNodeStream = function (e) {
            throw eN(3);
          });
      })();
    },
    2729: function (e, t, r) {
      "use strict";
      function n(e, t) {
        return (
          t || (t = e.slice(0)),
          Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
          )
        );
      }
      r.d(t, {
        _: function () {
          return n;
        },
      });
    },
  },
  function (e) {
    var t = function (t) {
      return e((e.s = t));
    };
    e.O(0, [774, 179], function () {
      return t(6840), t(9090);
    }),
      (_N_E = e.O());
  },
]);
