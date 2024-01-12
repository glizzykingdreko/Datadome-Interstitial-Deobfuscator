function qe(q) {
  var r,
    h,
    g,
    n,
    t,
    i,
    o,
    e = "6riFQf5ENMhXCjsScKgL=U7DBtn+HkzOZbvawo914deWVpTJRm0uxl3P/AGY8qy2I",
    s = "",
    a = 0;
  for (q = q.replace(/[^A-Za-z0-9\+\/\=]/g, ""); a < q.length;) n = e.indexOf(q.charAt(a++)), t = e.indexOf(q.charAt(a++)), i = e.indexOf(q.charAt(a++)), o = e.indexOf(q.charAt(a++)), r = n << 2 | t >> 4, h = (t & 15) << 4 | i >> 2, g = (i & 3) << 6 | o, s += String.fromCharCode(r), i != 64 && (s += String.fromCharCode(h)), o != 64 && (s += String.fromCharCode(g));
  return s;
}
function qg(q, r) {
  var h = qf[q];
  return typeof h === "string" ? qe(h, r) : h;
}
var ddResObj = {};
!function () {
  var q = {
      570: function (q) {
        q.exports = function (q, r, h) {
          if (!q) throw new Error("Error #2, check payload package readme");
          var g = 1789537805,
            n = Date.now() & 255,
            t = Date.now(),
            i = t,
            o = Math.floor(Math.random() * 1000),
            e = Math.floor(Math.random() * 1000);
          function s(q) {
            if (!q) return g;
            for (var r = 0, h = 0; h < q.length; h++) r = (r << 5) - r + q.charCodeAt(h) << 0;
            return r == 0 ? g : r;
          }
          function a(q) {
            return q > 37 ? 59 + q : q > 11 ? 53 + q : q > 1 ? 46 + q : 50 * q + 45;
          }
          function c(q) {
            var r = q ^ i,
              h = -1,
              g = function () {
                r = function (q) {
                  q ^= q << 13;
                  q ^= q >> 17;
                  q ^= q << 5;
                }(r);
              };
            this.getByte = function () {
              var q = 4,
                t = 11;
              if (++h > 2 && 5 * (q | t) - 2 * (q & ~t) - 2 * (~q & t) + 5 * ~(q | t) - ~(q ^ t) - ~t - (q | ~t) - ~q - (~q | t) < 21) {
                g();
                h = 0;
              } else 2, 7;
              var c = 16 - h * 8;
              return function () {
                for (var q = 0, h = 3; h >= 0; h--) q |= n << h * 8;
                return q ^ r;
              }() >> c & 255;
            };
          }
          function l() {
            var g = function (r, h) {
                return s(r) ^ t + o + e * 2 ^ s(h) ^ q;
              }(r, h),
              l = [],
              p = [],
              k = [];
            i += e;
            var m = new c(g),
              j = function (q) {
                for (var r = [], h = 0, g = 0; g < q.length; g++) {
                  var n = q.charCodeAt(g),
                    t = 14,
                    i = 5;
                  if (n < 128 && Math.round((5 * (t & i) + 4 * (t | i) + 5 * ~i - (t | ~i) - ~t - (~t | i) - ~(t & i) + 1) / 6) > 6) r[h++] = n;else if (n < 2048) {
                    r[h++] = n >> 6 | 192;
                    r[h++] = n & 63 | 128;
                  } else (n & 64512) == 55296 && g + 1 < q.length && (q.charCodeAt(g + 1) & 64512) == 56320 ? (n = 65536 + ((n & 1023) << 10) + (q.charCodeAt(++g) & 1023), r[h++] = n >> 18 | 240, r[h++] = n >> 12 & 63 | 128, r[h++] = n >> 6 & 63 | 128, r[h++] = n & 63 | 128) : (r[h++] = n >> 12 | 224, r[h++] = n >> 6 & 63 | 128, r[h++] = n & 63 | 128);
                }
                for (var l = 0; l < r.length; l++) r[l] ^= m.getByte();
                return r;
              },
              f = function (q) {
                try {
                  return JSON.stringify(q);
                } catch (q) {
                  return;
                }
              };
            this.addSignal = function (q, r) {
              var h = 5,
                g = 2;
              if (typeof q == "string" && q.length != 0 || !(2 * (h | g) - (~h & g) + 3 * ~(h | g) - (h | ~g) - ~h - (~h | g) < 11)) {
                4, 5;
                var n = 9,
                  t = 12;
                if (!(r && ["number", "string", "boolean"].indexOf(typeof r) == -1 && Math.round((2 * (n | t) + 2 * (n & ~t) + 2 * ~(n ^ t) - (~n | t) - ~(n & t)) / 3) > -9)) {
                  3, 13;
                  var i = f(q),
                    o = f(r),
                    e = 6,
                    s = 1;
                  (!q || void 0 === o || q === String.fromCharCode(120, 116, 49)) && 5 * (e | s) - 2 * (e & ~s) - 2 * (~e & s) + 5 * ~(e | s) - ~(e ^ s) - ~s - (e | ~s) - ~e - (~e | s) < 8 || (2, 1, k.push(m.getByte()), l.push(j(i)), k.push(m.getByte()), p.push(j(o)));
                }
              }
            }, this.alreadyAdded = new Set(), this.addSignalOnce = function (q, r) {
              if (!this.alreadyAdded.has(q)) {
                this.alreadyAdded.add(q);
                this.addSignal(q, r);
              }
            }, this.buildPayload = function () {
              if (this._pl) return this._pl;
              for (var q, r = [], h = l.length, g = 0; g < h; g++) {
                var t = 0 === g ? 123 : 44;
                r.push(t ^ k[2 * g]), Array.prototype.push.apply(r, l[g]), r.push(58 ^ k[2 * g + 1]), Array.prototype.push.apply(r, p[g]);
              }
              var i = 14,
                o = 8;
              (typeof window._hsv == "string" && window._hsv.length > 0 || typeof window._hsv == "number" && !isNaN(window._hsv)) && 4 * (i | o) - 2 * (i & ~o) - (i ^ o) + 3 * ~(i | o) - ~(i ^ o) - ~i - (~i | o) < 28 ? q = f(window._hsv) : (14, 5);
              var e = [(r.length ? 44 : 123) ^ m.getByte()].concat(j(JSON.stringify(String.fromCharCode(114, 51, 110))), 58 ^ m.getByte(), j(q || "33"));
              return Array.prototype.push.apply(r, e), r.push(125 ^ m.getByte()), l.length = 0, p.length = 0, k.length = 0, this._pl = function (q) {
                for (var r = 0, h = []; r < q.length;) {
                  var g = (q[r++] ^ n) << 16 | (q[r++] ^ n) << 8 | q[r++] ^ n;
                  h.push(String.fromCharCode(a(g >> 18 & 63)), String.fromCharCode(a(g >> 12 & 63)), String.fromCharCode(a(g >> 6 & 63)), String.fromCharCode(a(63 & g)));
                }
                var t = q.length % 3;
                return t && (h.length -= 3 - t), h.join("");
              }(r);
            }, this.set = this.addSignal, this.set1 = this.addSignalOnce, this.bp = this.buildPayload;
          }
          return function () {
            i += o;
            new l(g ^ q ^ 3074654);
          }(), l;
        };
      },
      319: function (q) {
        q.exports = function (q) {
          for (var r = 0, h = 0; h < q.length; ++h) r += q.charCodeAt(h) % 240;
          return r;
        };
      },
      501: function (q, r, h) {
        var g = h(780),
          n = h(19),
          t = g.safeBtoa,
          i = g.sw;
        function o(q) {
          try {
            for (var r = 0, h = 0, g = q.length; h < g;) r = (r << 5) - r + q.charCodeAt(h++) << 0;
            return r + 2147483647 + 1;
          } catch (q) {
            return 0;
          }
        }
        q.exports = function (q, r) {
          function h() {
            var r = 13,
              h = 8;
            if (window.Promise && window.performance && Array.from && Object.keys || !(Math.round((-2 * h + 5 * (r | h) - (r ^ h) + ~(r | h) - (r & ~h) - (~r & h) - ~r) / 3) > 2)) 4, 14;else {
              q.addSignal("wgSup", "oldBrowser");
            }
            if (!navigator.gpu) {
              q.addSignal("wgSup", "noGpu");
            }
            function p(r, h) {
              q.addSignal(r, "Err: " + t(h));
            }
            var k = performance.now(),
              m = "";
            try {
              var j = navigator.gpu.getPreferredCanvasFormat();
              q.addSignal("wgPCM", j);
            } catch (q) {
              p("wgPCM", q.message);
            }
            try {
              var f = navigator.gpu.wgslLanguageFeatures,
                u = 14,
                S = 1;
              f.size > 0 && 4 * (u | S) - 3 * (~u & S) + 6 * ~(u | S) - 2 * ~(u ^ S) - ~S - (u | ~S) - ~u + 1 < 18 ? q.addSignal("wgLF", Array.from(f.values()).join()) : (3, 8);
            } catch (q) {
              p("wgLF", q.message);
            }
            navigator.gpu.requestAdapter().then(function (r) {
              if (m += "getAd: " + (performance.now() - k), !r) {
                q.addSignal("wgSup", "noAd");
              }
              try {
                var e = r.features,
                  s = 10,
                  a = 1;
                if (e.size > 0 && 4 * (s | a) - 3 * (~s & a) + 6 * ~(s | a) - 2 * ~(s ^ a) - ~a - (s | ~a) - ~s + 1 < 14) {
                  var c = Array.from(e.values());
                  q.addSignal("wgAdFt", c.toString());
                } else 8, 12;
                m += ", adFt: " + (performance.now() - k);
              } catch (q) {
                p("wgAdFt", q.message);
              }
              r.requestAdapterInfo().then(function (r) {
                q.addSignal("wgAdNfo", function (q) {
                  try {
                    var r = Object.keys(q),
                      h = Object.keys(Object.getPrototypeOf(q));
                    return JSON.stringify(q, r.concat(h));
                  } catch (q) {
                    return "Err: " + t(q.message);
                  }
                }(r)), m += ", adNfo: " + (performance.now() - k);
              }).catch(function (q) {
                p("wgAdNfo", q.message);
              });
              try {
                var l = "mbs: " + r.limits.maxBufferSize + ", msbbs: " + r.limits.maxStorageBufferBindingSiz;
                q.addSignal("wgAdLim", l);
              } catch (q) {
                p("wgAdLim", q.message);
              }
            }).catch(function (q) {
              p("wgAdLim", "reqAd " + q.message);
            }).then(function () {
              m && q.addSignal("wgTime", m);
            }).catch(function (q) {
              p("wgTime", q.message);
            });
          }
          function g(q) {
            if (q) {
              for (var r = [], h = 0; h < q.length; h++) {
                var g = q[h].getScriptHash(),
                  n = 5,
                  t = 4;
                (h == 0 || r[r.length - 1] != g) && 4 * (n | t) - (n & ~t) + 4 * ~(n | t) - (n | ~t) - ~n - (~n | t) - ~(n & t) < 13 ? r.push(g) : (13, 13);
              }
              var i = "",
                o = 4,
                e = 5;
              if (r.length > 0 && 6 * (o | e) - 2 * (o & ~e) - (~o & e) + 6 * ~(o | e) - ~(o ^ e) - (o | ~e) - ~o - (~o | e) - ~(o & e) + 1 < 10) {
                i = r.join();
                var s = 4,
                  a = 11;
                i.length > 500 && (s | a) - 2 * (~s & a) + ~a - (s | ~a) < 16 ? i = i.slice(0, 500) + "..." : (14, 1);
              } else 3, 7;
              return i;
            }
          }
          function e() {
            var q;
            if (Function.toString().length === 37) {
              var r = Error.stackTraceLimit,
                h = Error.prepareStackTrace;
              Error.stackTraceLimit = 1 / 0, Error.prepareStackTrace = function (g, n) {
                Error.stackTraceLimit = r, Error.prepareStackTrace = h, q = n;
                for (var t = g.toString(), i = 0; i < n.length; ++i) t += "\n", t += "at " + n[i].toString();
                return t;
              };
            }
            return {
              s: new Error().stack,
              v8s: q
            };
          }
          function s(q) {
            return !(!q.callPhantom && !q._phantom);
          }
          function a(q) {
            return !!q.__nightmare;
          }
          function c(q) {
            return !!q.awesomium;
          }
          function l(q) {
            return !!q.geb;
          }
          function p(q) {
            return !(!q.domAutomation && !q.domAutomationController);
          }
          function m(q) {
            var r = 11,
              h = 6;
            if (window.Object && typeof window.Object.getPrototypeOf === "function" && window.chrome && 4 * (r | h) - 2 * (r & ~h) - (r ^ h) + 3 * ~(r | h) - ~(r ^ h) - ~r - (~r | h) < 19) {
              var g = Object.getPrototypeOf(q);
              try {
                Object.setPrototypeOf(q, q).toString();
              } catch (q) {
                return q.name === "RangeError";
              } finally {
                Object.setPrototypeOf(q, g);
              }
            } else 12, 11;
            return false;
          }
          function j(q) {
            var r = 11,
              h = 8;
            if (window.Object && typeof window.Object.getPrototypeOf === "function" && window.chrome && 4 * (r | h) - (r & ~h) + 4 * ~(r | h) - (r | ~h) - ~r - (~r | h) - ~(r & h) < 25) {
              var g = Object.getPrototypeOf(q);
              try {
                Object.setPrototypeOf(q, q).toString();
              } catch (q) {
                var n = 0,
                  t = 11;
                if (typeof q.stack === "string" && Math.round((3 * (n | t) - 2 * (~n & t) + ~t + (~n | t) - 2 * -1) / 2) > -12) {
                  var i = q.stack.split("\n"),
                    o = 4,
                    e = 4;
                  if (i.length > 2 && 2 * (o | e) - 3 * (~o & e) + 3 * ~o - 2 * (~o | e) - ~(o & e) < 13) return i[0].indexOf("TypeError: Cyclic") === 0 && i[1].indexOf("at Object.setPro") > -1;
                  3, 13;
                } else 14, 14;
              } finally {
                Object.setPrototypeOf(q, g);
              }
            } else 10, 2;
            return false;
          }
          function f(q) {
            var r = q.Math.cos;
            q.Math.cos = function (h) {
              var g = 6,
                n = 6;
              if (h === 100 * (6.67 / 180) && Math.round((-2 * n + 5 * (g | n) - (g ^ n) + ~(g | n) - (g & ~n) - (~g & n) - ~g) / 3) > -6) {
                var t = q.Math.atan2;
                q.Math.atan2 = function () {
                  q.Math.atan2 = t;
                  var r,
                    h = t.apply(q.Math, arguments),
                    g = 10,
                    n = 12;
                  if (isNaN(h) && 6 * (g | n) - 2 * (g & ~n) - (~g & n) + 6 * ~(g | n) - ~(g ^ n) - (g | ~n) - ~g - (~g | n) - ~(g & n) + 1 < 25) r = 0.7662468010068256;else {
                    for (var i = h.toString(), o = +i[2], e = (2 * o + 1) % 10, s = (3 * o + 7) % 10, a = (5 * o + 3) % 10, c = []; c.length < 3;) {
                      var l = q.Math.floor(q.Math.random() * 14) + 3,
                        p = 6,
                        k = 1;
                      c.indexOf(l) > -1 && 3 * (p | k) - 2 * (~p & k) + 4 * ~(p | k) - ~(p ^ k) - (p | ~k) - (~p | k) - ~(p & k) < 8 || (4, 14, c.push(l));
                    }
                    c.sort(function (q, r) {
                      return q - r;
                    });
                    var m = i.slice(0, c[0]),
                      j = i.slice(c[0] + 1, c[1]),
                      f = i.slice(c[1] + 1, c[2]),
                      u = i.slice(c[2] + 1);
                    i = m + e + j + s + f + a + u;
                    var S = 17,
                      b = 14,
                      P = 11;
                    i[S] && +i[S] > 5 && Math.round((-P + 4 * (b | P) - 2 * (b ^ P) + ~P - ~b) / 3) > -1 ? i = i.slice(0, S) + Math.floor(Math.random() * 5) : (9, 5), r = +i;
                  }
                  return r;
                }, q.Math.atan2.toString = function () {
                  return t.toString();
                }, q.Math.cos = r;
              } else 13, 8;
              return r.apply(this, arguments);
            }, q.Math.cos.toString = function () {
              return r.toString();
            };
          }
          function u(q) {
            var r = 0,
              h = 8;
            if (q != null && q.toString && !q.toString().match(/\{\s*\[native code\]\s*\}$/m) && !q.toString().includes("(\"debug\",arguments);") && 6 * (r | h) - 2 * (r & ~h) - (~r & h) + 6 * ~(r | h) - ~(r ^ h) - (r | ~h) - ~r - (~r | h) - ~(r & h) + 1 < 9) return true;
            4, 5;
            var g = 1,
              n = 10;
            return (m(q) || j(q)) && Math.round((-2 * n + 5 * (g | n) - (g ^ n) + ~(g | n) - (g & ~n) - (~g & n) - ~g) / 3) > -11 ? true : (7, 2, false);
          }
          function S(r) {
            var h = r.navigator,
              g = function (r) {
                var h = {};
                try {
                  var g,
                    n,
                    t,
                    i = performance.now(),
                    o = r.document.createElement("canvas").getContext("webgl"),
                    e = 3,
                    s = 4;
                  if (r.navigator.buildID && +/Firefox\/(\d+)/.exec(r.navigator.userAgent)[1] > 91 && 2 * (e | s) - (~e & s) + 3 * ~(e | s) - (e | ~s) - ~e - (~e | s) < 11) {
                    g = o.VENDOR;
                    n = o.RENDERER;
                  } else {
                    t = o.getExtension("WEBGL_debug_renderer_info");
                    g = t.UNMASKED_VENDOR_WEBGL;
                    n = t.UNMASKED_RENDERER_WEBGL;
                  }
                  var P = o.getParameter(g),
                    W = o.getParameter(n),
                    U = 1,
                    R = 10;
                  r == window && Math.round((5 * (U & ~R) + 3 * (~U & R) - (U ^ R) + 3 * ~(U ^ R) - ~R - ~U + 1) / 2) > -11 ? q.addSignal("tagpu", performance.now() - i) : (9, 10), h = {
                    vd: P,
                    rd: W
                  };
                } catch (q) {
                  h = {
                    vd: "NA",
                    rd: "NA"
                  };
                }
                return h;
              }(r);
            return {
              glvd: g.vd,
              glrd: g.rd,
              br_oh: r.outerHeight,
              br_ow: r.outerWidth,
              ua: h.userAgent,
              hc: h.hardwareConcurrency,
              wbd: !!h.webdriver,
              pf: h.platform,
              mob: h.userAgentData ? h.userAgentData.mobile : "NA",
              lngs: JSON.stringify(h.languages),
              mtp: h.maxTouchPoints,
              sel: !!r.cdc_adoQpoasnfa76pfcZLmcfl_Array || !(!r.document || !r.document.$cdc_asdjflasutopfhvcZLmcfl_),
              onL: navigator.onLine
            };
          }
          function b(q) {
            return {
              ts: q.toString,
              plu: q.navigator.plugins,
              ce: q.document.createElement
            };
          }
          function P(q, r) {
            var h = [],
              g = [];
            for (var n in q) {
              var t = 1,
                i = 1;
              if (q[n] !== r[n] && 5 * (t | i) - 2 * (t & ~i) - 2 * (~t & i) + 3 * ~(t | i) - (t | ~i) - (~t | i) + 1 < 6) {
                h.push(n);
                g.push(q[n]);
              } else 10, 3;
            }
            return {
              keysDelta: h.join(),
              deltaVals: g.join()
            };
          }
          var W,
            U,
            R,
            O = S(window),
            V = function () {
              try {
                var q = document.createElement("iframe");
                q.srcdoc = "/**/", q.setAttribute("style", "display: none;");
                var r = 5,
                  h = 0;
                if (document && document.head && 4 * (r | h) - 2 * (r & ~h) + 3 * ~(r | h) - ~r - (~r | h) + 1 < 9) {
                  document.head.appendChild(q);
                  g = S(q.contentWindow);
                  n = b(q.contentWindow);
                  f(q.contentWindow);
                } else 2, 4;
                return {
                  iframe: q,
                  spawningIframeVals: g,
                  spawningIframeRefs: n
                };
              } catch (q) {}
            }(),
            Q = V && V.iframe && V.iframe.contentWindow;
          if (!r) {
            Y = n(q);
            Y(window.ddm.seed);
            i(h)();
          }
          (function (r) {
            try {
              var h = 8,
                g = 6;
              if (window.Worker && window.URL && window.Blob && Math.round((5 * (h & ~g) + 3 * (~h & g) - (h ^ g) + 3 * ~(h ^ g) - ~g - ~h + 1) / 2) > -2) {
                var n = "var e={cat:0,c:{}};try{e.c.ua=navigator.userAgent,e.c.hc=navigator.hardwareConcurrency,e.c.pf=navigator.platform,e.c.mob=navigator.userAgentData?navigator.userAgentData.mobile:\"NA\",e.c.lngs=JSON.stringify(navigator.languages),e.c.onL=navigator.onLine;var t,a,n,r=new OffscreenCanvas(1,1).getContext(\"webgl\"),i=/Firefox\\/(\\d+)/.exec(navigator.userAgent);n=i&&91<i[1]?(a=r.VENDOR,r.RENDERER):(a=(t=r.getExtension(\"WEBGL_debug_renderer_info\")).UNMASKED_VENDOR_WEBGL,t.UNMASKED_RENDERER_WEBGL),e.c.glvd=r.getParameter(a),e.c.glrd=r.getParameter(n),self.postMessage(e)}catch(t){e.e=t.message,self.postMessage(e)}function v(t){return crypto.subtle.digest(\"SHA-256\",t).then(function(t){return Array.from(new Uint8Array(t))})}function c(t){return t.map(function(t){return t.toString(16).padStart(2,\"0\")}).join(\"\")}new Promise(function(n,t){var e=[],a=new OffscreenCanvas(1,1),r=a.getContext(\"2d\"),i=(i=r,(h=a).width=380,h.height=55,i.textBaseline=\"alphabetic\",i.fillStyle=\"#F0A\",i.fillRect(49,1,73,25),h=\"Quartz glyph job vexd cwm finks\"+String.fromCharCode(55357,56898),i.fillStyle=\"#3A1\",i.font='13pt \"Times New Roman\"',i.fillText(h,5,17),i.fillStyle=\"rgba(49, 40, 223, 0.33)\",i.font=\"17pt Arial\",i.fillText(h,7,25),r.getImageData(0,0,a.width,a.height)),h=(e.push(v(i.data)),r.getImageData(0,0,a.width,a.height)),i=(e.push(v(h.data)),a),o=r;i.width=131,i.height=115,o.globalCompositeOperation=\"multiply\";for(var g=[[\"#E3E\",55,55],[\"#3EE\",95,55],[\"#EE3\",70,90]],f=0;f<g.length;f++)o.fillStyle=g[f][0],o.beginPath(),o.arc(g[f][1],g[f][2],45,0,2*Math.PI,!0),o.closePath(),o.fill();o.fillStyle=\"#EA3\",o.arc(65,65,65,0,2*Math.PI,!0),o.arc(65,65,30,0,2*Math.PI,!0),o.fill(\"evenodd\");h=r.getImageData(0,0,a.width,a.height);e.push(v(h.data)),Promise.all(e).then(function(a){var t=c(a[0])!=c(a[1]),e=a[0].map(function(t,e){return t^a[2][e]});t&&n(\"UNST\"),n(c(e))}).catch(t)}).catch(function(t){return t.message}).then(function(t){self.postMessage({cat:1,ch:t})});var h={cat:2};function o(w,F,C){return new Promise(function(t){var i=C.area,n=C.offsetParameter,e=C.multiplier,h=C.fontSizeFactor,o=C.maxShadowBlur;function a(t){this.currentNumber=t%n,this.currentNumber<=0&&(this.currentNumber+=n)}function g(t,e,a){return t=(t-1)/n,a?t*e:Math.floor(t*e)}a.prototype.getNext=function(){return this.currentNumber=Math.max(e*this.currentNumber%n,2),this.currentNumber};var f=[\"#FF6633\",\"#FFB399\",\"#FF33FF\",\"#FFFF99\",\"#00B3E6\",\"#E6B333\",\"#3366E6\",\"#999966\",\"#99FF99\",\"#B34D4D\",\"#80B300\",\"#809900\",\"#E6B3B3\",\"#6680B3\",\"#66991A\",\"#FF99E6\",\"#CCFF1A\",\"#FF1A66\",\"#E6331A\",\"#33FFCC\",\"#66994D\",\"#B366CC\",\"#4D8000\",\"#B33300\",\"#CC80CC\",\"#66664D\",\"#991AFF\",\"#E666FF\",\"#4DB3FF\",\"#1AB399\",\"#E666B3\",\"#33991A\",\"#CC9999\",\"#B3B31A\",\"#00E680\",\"#4D8066\",\"#809980\",\"#E6FF80\",\"#1AFF33\",\"#999933\",\"#FF3380\",\"#CCCC00\",\"#66E64D\",\"#4D80CC\",\"#9900B3\",\"#E64D66\",\"#4DB380\",\"#FF4D4D\",\"#99E6E6\",\"#6666FF\"],c=[function(t,e,a){e.beginPath(),e.arc(g(t.getNext(),a.width/2),g(t.getNext(),a.height/2),g(t.getNext(),Math.min(a.width/4,a.height/4)),g(t.getNext(),2*Math.PI,!0),g(t.getNext(),2*Math.PI,!0)),e.stroke()},function(t,e,a){var n=Math.max(1,g(t.getNext(),5)),n=function(t,e){for(var a=[],n=0;n<e;n++){var r=65+t.getNext()%61;a.push(String.fromCharCode(r))}return a.join(\"\")}(t,n);e.font=a.height/h+\"px aafakefontaa\",e.fillText(n,g(t.getNext(),a.width),g(t.getNext(),a.height),g(t.getNext(),a.width))},function(t,e,a){e.beginPath(),e.moveTo(g(t.getNext(),a.width),g(t.getNext(),a.height)),e.bezierCurveTo(g(t.getNext(),a.width),g(t.getNext(),a.height),g(t.getNext(),a.width),g(t.getNext(),a.height),g(t.getNext(),a.width),g(t.getNext(),a.height)),e.stroke()},function(t,e,a){e.beginPath(),e.moveTo(g(t.getNext(),a.width),g(t.getNext(),a.height)),e.quadraticCurveTo(g(t.getNext(),a.width),g(t.getNext(),a.height),g(t.getNext(),a.width),g(t.getNext(),a.height)),e.stroke()}];function l(t,e,a){var n=Math.max(1,g(t.getNext(),5)),r=String.fromCharCode(9654,65039);e.font=a.height/h+\"px aafakefontaa\",e.fillText(r+n,g(t.getNext(),a.width),g(t.getNext(),a.height),g(t.getNext(),a.width))}var u=new a(F),r=new OffscreenCanvas(i.width,i.height),s=r.getContext(\"2d\");function d(t){var e,a,n,r;e=u,n=i,(n=(a=s).createRadialGradient(g(e.getNext(),n.width),g(e.getNext(),n.height),g(e.getNext(),n.width),g(e.getNext(),n.width),g(e.getNext(),n.height),g(e.getNext(),n.width))).addColorStop(0,f[g(e.getNext(),f.length)]),n.addColorStop(1,f[g(e.getNext(),f.length)]),a.fillStyle=n,s.shadowBlur=g(u.getNext(),o),s.shadowColor=f[g(u.getNext(),f.length)],0==t?(r=c[1])(u,s,i):r=1==t?l:c[g(u.getNext(),c.length)],r(u,s,i),s.fill()}for(var x=[],N=0;N<=w;N++){d(w-N);var m=s.getImageData(0,0,r.width,r.height);x.push(v(m.data))}t(Promise.all(x).then(function(t){for(var e=t[0].length,a=e*t.length,n=new Uint8Array(a),r=0;r<t.length;r++)n.set(t[r],r*e);return v(n)}))})}function g(n){var t=performance.now();new Promise(function(t){for(var e=0,a=0;a<n.length;a++)e+=n.charCodeAt(a);0==(e%=10)&&e++,t(o(h.pns=7,h.ps=e,{area:{width:300,height:300},offsetParameter:2001000001,fontSizeFactor:1.5,multiplier:15e3,maxShadowBlur:50}))}).then(function(t){h.ph=c(t)}).catch(function(t){h.e=\"Err:\"+function(t){if(btoa)try{return btoa(t)}catch(t){return\"b_e\"}return\"b_u\"}(t.message.slice(0,150))}).then(function(){h.pt=performance.now()-t,self.postMessage(h)})}self.onmessage=function(t){t.data.is&&g(t.data.is)};",
                  i = new Blob([n], {
                    type: "text/javascript"
                  }),
                  o = URL.createObjectURL(i),
                  e = new Worker(o),
                  s = 0;
                e.onmessage = function (h) {
                  var g = 3,
                    n = 2;
                  if (s++ > 2 && 3 * (g | n) - 2 * (~g & n) + 4 * ~(g | n) - ~(g ^ n) - (g | ~n) - (~g | n) - ~(g & n) < 8) {
                    e.terminate();
                    URL.revokeObjectURL(o);
                  } else 2, 6;
                  try {
                    var j = h.data,
                      f = 13,
                      u = 11;
                    if (j.cat == 0 && Math.round((2 * (f | u) + 2 * (f & ~u) + 2 * ~(f ^ u) - (~f | u) - ~(f & u)) / 3) > -2) {
                      j.e && q.addSignal("log3", t("WorkerCaughtErr: " + j.error));
                      var S = P(j.c, r);
                      S.keysDelta ? (q.addSignal("wwl", S.keysDelta), q.addSignal("wwlrv", t(S.deltaVals.slice(0, 300)))) : q.addSignal("wwl", false);
                    } else if (j.cat == 1) q.addSignal("ch", j.ch);else if (j.cat == 2) {
                      q.addSignal("log1", j.ph || j.e);
                      q.addSignal("log2", j.pt);
                    }
                  } catch (r) {
                    q.addSignal("log3", t("InnerErr: " + r.message));
                  }
                }, e.postMessage({
                  is: window.ddm.seed
                });
              } else q.addSignal("wwl", "NA");
            } catch (r) {
              q.addSignal("log3", t("OuterErr: " + r.message));
            }
          })(O), function () {
            var r = true,
              h = 50,
              n = new RegExp("puppeteer|pptr:|ElementHandle|evaluateHandle"),
              i = new RegExp("eval\\sat\\sevaluate|@chrome|evaluate@"),
              s = new RegExp("eval\\sat\\sexecuteScript");
            function a(q) {
              if (n.test(q)) return "cfpp";
              r = 203;
            }
            function c(n) {
              var i = 3,
                s = 6;
              return typeof n !== "function" && 2 * (i & ~s) - (~i & s) + ~(i | s) - ~s < 13 ? n : (2, 4, n.toString().match(/\{\s*\[native code\]\s*\}$/m) && n.toString.toString().match(/\{\s*\[native code\]\s*\}$/m) ? function () {
                if (h <= 0 || !r) return n.apply(this, arguments);
                h--;
                var i = !1;
                try {
                  if (arguments.callee && arguments.callee.caller && arguments.callee.caller.toString) {
                    var s = arguments.callee.caller.toString();
                    0 != s.indexOf("function (){var _0x") && 0 != s.indexOf("function(){var _0x") || (i = !0), s.indexOf("var contactSupportComment") > -1 && s.indexOf("var humanCommentEl") > -1 && (i = !0), (s.indexOf("showForm(formWrapperId)") > -1 || s.indexOf("submitContactForm(contactFormId") > -1) && (i = !0), (s.indexOf("#iadvize-container") > -1 || s.indexOf("useForcedLinkTracking") > -1 || s.indexOf("dot-optimeeze") > -1) && (i = !0), s.indexOf('"iframe_api"') > -1 && s.indexOf('"player_api"') > -1 && (i = !0), s.indexOf("ga-disable-") > -1 && (i = !0), i || q.addSignalOnce("cfpfe", t(s.substring(0, 150))), s.indexOf("on(selector, wit") > -1 && q.addSignalOnce("cffrb", !0);
                  } else i = !0;
                } catch (r) {
                  r && r.message && ("Cannot read properties of null" == r.message || "arguments[[...]][[...]] is null" == r.message) && (i = !0), !i && r && r.message && q.addSignalOnce("cfpfe", t("Error: " + r.message.substring(0, 150)));
                }
                try {
                  var c = e(),
                    l = c.s,
                    p = o(l);
                  q.addSignalOnce("iccsH", p);
                  var k = g(c.v8s);
                  k && q.addSignalOnce("iccsV", k), i || q.addSignalOnce("stcfp", t(l.substring(l.length - 150)));
                  for (var m = l.split("\n"), j = 0; j < m.length; j++) {
                    var f = a(m[j]);
                    if (f) {
                      q.addSignalOnce(f, !0);
                      break;
                    }
                  }
                } catch (q) {
                  return n.apply(this, arguments);
                }
                return n.apply(this, arguments);
              } : n);
            }
            try {
              document.getElementById = c(document.getElementById), document.getElementsByTagName = c(document.getElementsByTagName), document.querySelector = c(document.querySelector), document.querySelectorAll = c(document.querySelectorAll), document.evaluate = c(document.evaluate);
              var l = 6,
                p = 8;
              XMLSerializer && XMLSerializer.prototype && XMLSerializer.prototype.serializeToString && 3 * (l & p) + 4 * (l ^ p) + 5 * ~(l | p) - ~p - ~l - (~l | p) - ~(l & p) + 1 > -6 ? XMLSerializer.prototype.serializeToString = c(XMLSerializer.prototype.serializeToString) : (14, 12), setTimeout(function () {
                r = false;
              }, 30000);
            } catch (q) {}
          }(), function () {
            var r = ["__driver_evaluate", "__webdriver_evaluate", "__selenium_evaluate", "__fxdriver_evaluate", "__driver_unwrapped", "__webdriver_unwrapped", "__selenium_unwrapped", "__fxdriver_unwrapped", "_Selenium_IDE_Recorder", "_selenium", "calledSelenium", "$cdc_asdjflasutopfhvcZLmcfl_", "$chrome_asyncScriptInfo", "__$webdriverAsyncExecutor", "webdriver", "__webdriverFunc", "domAutomation", "domAutomationController", "__lastWatirAlert", "__lastWatirConfirm", "__lastWatirPrompt", "__webdriver_script_fn", "__webdriver_script_func", "__webdriver_script_function", "_WEBDRIVER_ELEM_CACHE"],
              h = ["driver-evaluate", "webdriver-evaluate", "selenium-evaluate", "webdriverCommand", "webdriver-evaluate-response"];
            function g(r) {
              r && q.addSignalOnce("slat", true);
            }
            var n = 7,
              t = 1;
            if (typeof document.addEventListener === "function" && 4 * (n | t) - 2 * (n & ~t) - (n ^ t) + 3 * ~(n | t) - ~(n ^ t) - ~n - (~n | t) < 14) for (var i = 0; i < h.length; i++) document.addEventListener(h[i], g);else 5, 1;
            function o() {
              for (var h = 0; h < r.length; h++) {
                var g = 1,
                  n = 13;
                if ((r[h] in window || r[h] in document) && (g ^ n) + 2 * n - 2 * (~g & n) < 20) {
                  q.addSignalOnce("slat", true);
                } else 10, 4;
              }
            }
            o();
            var e = setInterval(function () {
              var r = 1,
                h = 11;
              if (!(o() && 4 * (r | h) - 2 * (r & ~h) + 3 * ~(r | h) - ~r - (~r | h) + 1 < 15)) {
                12, 9;
                var g = 6,
                  n = 4;
                if (typeof Object !== "undefined" && typeof Object.keys === "function" && 5 * (g | n) - 2 * (g & ~n) - 2 * (~g & n) + 3 * ~(g | n) - (g | ~n) - (~g | n) + 1 < 11) for (var t = Object.keys(document), i = 0; i < t.length; i++) {
                  var e = t[i],
                    s = 2,
                    a = 0;
                  if (e && typeof e === "string" && e.indexOf("$cdc_") > -1 && Math.round((5 * (s | a) + (s & ~a) - 2 * (~s & a) - 2 * (s ^ a) + 4 * ~(s | a) - ~(s ^ a) - ~a - (s | ~a) - (~s | a)) / 2) > -4) {
                    q.addSignalOnce("slat", true);
                  } else 6, 9;
                  try {
                    var j = 11,
                      f = 1;
                    if (document[e] && typeof document[e].window === "undefined" && typeof document[e].cache_ !== "undefined" && 2 * (j & ~f) - (~j & f) + ~(j | f) - ~f < 16) for (var u in document[e].cache_) {
                      var S = 2,
                        b = 8;
                      if (u && u.match(/[\d\w]{8}-[\d\w]{4}-[\d\w]{4}-[\d\w]{4}-[\d\w]{12}/) && 4 * (S | b) - 2 * (S & ~b) + 3 * ~(S | b) - ~S - (~S | b) + 1 < 11) {
                        q.addSignalOnce("slmk", e.slice(0, 64));
                        q.addSignalOnce("slat", true);
                      } else 5, 11;
                    } else 8, 4;
                  } catch (q) {}
                } else 6, 14;
              }
            }, 500);
            setTimeout(function () {
              var q = 14,
                r = 9;
              if (typeof document.removeEventListener === "function" && Math.round((-r + 4 * (q | r) - 2 * (q ^ r) + ~r - ~q) / 3) > -1) for (var n = 0; n < h.length; n++) document.removeEventListener(h[n], g);else 12, 13;
              clearInterval(e);
            }, 30000);
          }(), function () {
            var r, h, g, n, t, i;
            try {
              r = false, h = navigator.plugins.length, g = n = t = i = "NA", r = !!Object.getOwnPropertyDescriptor(navigator, "plugins");
              var o = 2,
                e = 12;
              if (navigator.plugins && navigator.plugins.length > 0 && typeof navigator.plugins[0].name === "string" && Math.round((-e + 4 * (o | e) - 2 * (o ^ e) + ~e - ~o) / 3) > -13) {
                try {
                  navigator.plugins[0].length;
                } catch (q) {
                  r = true;
                }
                try {
                  g = navigator.plugins[0].name === navigator.plugins[0][0].enabledPlugin.name, n = navigator.plugins[0][0].enabledPlugin === navigator.plugins[0], t = navigator.plugins.item(859523698994125) === navigator.plugins[0], i = Object.getOwnPropertyDescriptor(navigator.__proto__, "plugins").get.toString().indexOf("return") > -1;
                } catch (q) {
                  g = n = t = i = "err";
                }
              } else 9, 3;
            } catch (q) {
              h = 0;
            } finally {
              q.addSignal("plgod", r);
              q.addSignal("plg", h);
              q.addSignal("plgne", g);
              q.addSignal("plgre", n);
              q.addSignal("plgof", t);
              q.addSignal("plggt", i);
            }
          }(), function () {
            q.addSignal("pltod", !!Object.getOwnPropertyDescriptor(navigator, "platform"));
          }(), function () {
            q.addSignal("psn", !!window.PermissionStatus && window.PermissionStatus.prototype.hasOwnProperty("name")), q.addSignal("edp", !!window.EyeDropper), q.addSignal("addt", !!window.AudioData), q.addSignal("wsdc", !!window.WritableStreamDefaultController), q.addSignal("ccsr", !!window.CSSCounterStyleRule), q.addSignal("nuad", !!window.NavigatorUAData), q.addSignal("bcda", !!window.BarcodeDetector), q.addSignal("idn", !(!window.Intl || !Intl.DisplayNames)), q.addSignal("capi", !!(window.navigator && window.navigator.contacts && window.navigator.ContactsManager)), q.addSignal("svde", !!window.SVGDiscardElement), q.addSignal("vpbq", !!(window.HTMLVideoElement && window.HTMLVideoElement.prototype && window.HTMLVideoElement.prototype.getVideoPlaybackQuality));
          }(), function () {
            q.addSignal("dvm", navigator.deviceMemory || -1);
          }(), function () {
            try {
              r = document.createElement("video");
              h = window.MediaSource || window.WebKitMediaSource;
              q.addSignal("vco", r.canPlayType("video/ogg; codecs=\"theora\""));
              q.addSignal("vcots", h.isTypeSupported("video/ogg; codecs=\"theora\""));
              q.addSignal("vch", r.canPlayType("video/mp4; codecs=\"avc1.42E01E\""));
              q.addSignal("vchts", h.isTypeSupported("video/mp4; codecs=\"avc1.42E01E\""));
              q.addSignal("vcw", r.canPlayType("video/webm; codecs=\"vp8, vorbis\""));
              q.addSignal("vcwts", h.isTypeSupported("video/webm; codecs=\"vp8, vorbis\""));
              q.addSignal("vc3", r.canPlayType("video/3gpp;"));
              q.addSignal("vc3ts", h.isTypeSupported("video/3gpp;"));
              q.addSignal("vcmp", r.canPlayType("video/mpeg;"));
              q.addSignal("vcmpts", h.isTypeSupported("video/mpeg"));
              q.addSignal("vcq", r.canPlayType("video/quicktime;"));
              q.addSignal("vcqts", h.isTypeSupported("video/quicktime;"));
              q.addSignal("vc1", r.canPlayType("video/mp4; codecs=\"av01.0.08M.08\""));
              q.addSignal("vc1ts", h.isTypeSupported("video/mp4; codecs=\"av01.0.08M.08\""));
            } catch (r) {
              q.addSignal("vco", "NA");
              q.addSignal("vch", "NA");
              q.addSignal("vcw", "NA");
              q.addSignal("vc3", "NA");
              q.addSignal("vcmp", "NA");
              q.addSignal("vcq", "NA");
              q.addSignal("vc1", "NA");
              q.addSignal("vcots", "NA");
              q.addSignal("vchts", "NA");
              q.addSignal("vcwts", "NA");
              q.addSignal("vc3ts", "NA");
              q.addSignal("vcmpts", "NA");
              q.addSignal("vcqts", "NA");
              q.addSignal("vc1ts", "NA");
            }
          }(), function () {
            try {
              var r = document.createElement("audio"),
                h = window.MediaSource || window.WebKitMediaSource;
              q.addSignal("aco", r.canPlayType("audio/ogg; codecs=\"vorbis\"")), q.addSignal("acots", h.isTypeSupported("audio/ogg; codecs=\"vorbis\"")), q.addSignal("acmp", r.canPlayType("audio/mpeg;")), q.addSignal("acmpts", h.isTypeSupported("audio/mpeg;\"")), q.addSignal("acw", r.canPlayType("audio/wav; codecs=\"1\"")), q.addSignal("acwts", h.isTypeSupported("audio/wav; codecs=\"1\"")), q.addSignal("acma", r.canPlayType("audio/x-m4a;")), q.addSignal("acmats", h.isTypeSupported("audio/x-m4a;")), q.addSignal("acaa", r.canPlayType("audio/aac;")), q.addSignal("acaats", h.isTypeSupported("audio/aac;")), q.addSignal("ac3", r.canPlayType("audio/3gpp;")), q.addSignal("ac3ts", h.isTypeSupported("audio/3gpp;")), q.addSignal("acf", r.canPlayType("audio/flac;")), q.addSignal("acfts", h.isTypeSupported("audio/flac;")), q.addSignal("acmp4", r.canPlayType("audio/mp4;")), q.addSignal("acmp4ts", h.isTypeSupported("audio/mp4;")), q.addSignal("acmp3", r.canPlayType("audio/mp3;")), q.addSignal("acmp3ts", h.isTypeSupported("audio/mp3;")), q.addSignal("acwm", r.canPlayType("audio/webm;")), q.addSignal("acwmts", h.isTypeSupported("audio/webm;")), q.addSignal("ocpt", r.canPlayType.toString().indexOf("canPlayType") === -1);
            } catch (r) {
              q.addSignal("aco", "NA");
              q.addSignal("acmp", "NA");
              q.addSignal("acw", "NA");
              q.addSignal("acma", "NA");
              q.addSignal("acaa", "NA");
              q.addSignal("ac3", "NA");
              q.addSignal("acf", "NA");
              q.addSignal("acmp4", "NA");
              q.addSignal("acmp3", "NA");
              q.addSignal("acwm", "NA");
              q.addSignal("acots", "NA");
              q.addSignal("acmpts", "NA");
              q.addSignal("acwts", "NA");
              q.addSignal("acmats", "NA");
              q.addSignal("acaats", "NA");
              q.addSignal("ac3ts", "NA");
              q.addSignal("acfts", "NA");
              q.addSignal("acmp4ts", "NA");
              q.addSignal("acmp3ts", "NA");
              q.addSignal("acwmts", "NA");
            }
          }(), function () {
            q.addSignal("lg", navigator.language || navigator.userLanguage || navigator.browserLanguage || navigator.systemLanguage || "");
          }(), function () {
            var q = window.ddm.hash.slice(-4),
              r = Math.floor(Math.random() * 9),
              h = Math.random().toString(16).slice(2, 10).toUpperCase();
            window._hsv = h.slice(0, r) + q + h.slice(r);
          }(), function () {
            for (var r = [], h = [[window.Math, "random"], [window.console, "dirxml"], [window.String.prototype, "toString"], [window.Object, "defineProperty"], [window.String.prototype, "indexOf"], [window.String.prototype, "split"]], g = 0; g < h.length; g++) {
              var n = h[g][0],
                t = h[g][1],
                i = 5,
                o = 1;
              u(n[t]) && Math.round((5 * (i & o) + 4 * (i | o) + 5 * ~o - (i | ~o) - ~i - (~i | o) - ~(i & o) + 1) / 6) > 2 ? r.push(t) : (10, 7);
            }
            q.addSignal("orf", r.join());
          }(), function () {
            r = e();
            h = r.s;
            q.addSignal("ccsT", h.slice(0, 150));
            q.addSignal("ccsB", h.slice(-150));
            n = o(h);
            q.addSignal("ccsH", n);
            t = g(r.v8s);
            t && q.addSignal("ccsV", t);
          }(), function () {
            q.addSignalOnce("spwn", !!window.spawn), q.addSignalOnce("emt", !!window.emit), q.addSignalOnce("bfr", !!window.Buffer);
          }(), function () {
            var r = "all:unset;display:block;width:15px;height:15px;overflow:scroll;visibility:hidden; color: rgb(calc(var(--x2) + var(--x5) * var(--x1) / var(--x0) * var(--x4) - var(--x5)), calc(var(--x2) + var(--x3) * var(--x3) / var(--x4) * var(--x0) - var(--x0)), calc(var(--x4) + var(--x0) * var(--x1) / var(--x2) * var(--x3) - var(--x5))); transform: perspective(var(--x6)) rotate3d(var(--x0), var(--x1), var(--x2), var(--x7)) scale3d(var(--x3), var(--x4), var(--x5)) rotateX(var(--x8)) translateZ(var(--x6));",
              h = document.createElement("div");
            h.style = r, document.body.appendChild(h);
            for (var g = "", n = 0; n < 9; ++n) {
              var t = (15 * Math.random()).toFixed(2);
              g += t + (n != 8 ? "," : "");
              var i = 7,
                o = 3;
              n == 6 && o + (i & ~o) + (i & o) < 12 ? t += "px" : (8, 4);
              var e = 10,
                s = 5;
              n == 7 && 2 * (e | s) - 2 * (e & ~s) + (e | ~s) - (~e | s) < 16 ? t += "deg" : (6, 11);
              var a = 1,
                c = 14;
              n == 8 && 2 * (a | c) - (~a & c) + 3 * ~(a | c) - (a | ~c) - ~a - (~a | c) < 20 ? t += "turn" : (5, 5), h.style.setProperty("--x" + n, t);
            }
            var l = getComputedStyle(h),
              p = l.color.slice(4, -1),
              k = l.transform.slice(9, -1),
              m = l.height;
            q.addSignal("cssS", g), q.addSignal("css0", p), q.addSignal("css1", k), q.addSignal("cssH", m);
          }(), function (r) {
            if (!window.chrome) {
              q.addSignal("npmtm", "NA");
            }
            if (r) {
              function o(q, h) {
                if (!q) return null;
                var g;
                try {
                  r.postMessage(q, "*");
                } catch (q) {
                  g = q;
                }
                if (!g) return true;
                var n = "Failed to execute 'postMessage' on 'Window': " + h + " object could not be cloned.";
                return g.message != n;
              }
              q.addSignal("npmtm", !!(o(navigator.plugins, "PluginArray") || o(navigator.plugins[0], "Plugin") || o(navigator.mimeTypes, "MimeTypeArray") || o(navigator.mimeTypes[0], "MimeType")));
            } else q.addSignal("npmtm", "noIframe");
          }(Q), function (r) {
            q.addSignal("iwgl", r.self && r.self.get && r.self.get.toString && r.self.get.toString().length);
          }(Q), function (r, h) {
            q.addSignal("wdifrm", r === h || r.setTimeout === h.setTimeout);
          }(Q, window), q.addSignal("trrd", function (q, r) {
            r || (r = q.Math.SQRT2);
            var h = q.Math.sqrt(q.Math.abs(q.Math.sin(100 * (q.Math.PI / 90) - q.Math.random() * 40 * (q.Math.PI / 180) / 2) + q.Math.cos(r * 100 * (q.Math.PI / 180)) * q.Math.sin(40 * (q.Math.PI / 180) - q.Math.random() * 100 * (q.Math.PI / 75) / 2))),
              g = q.Math.random() * q.Math.sqrt(q.Math.abs(1 - q.Math.sin(q.Math.random() * 40 * (q.Math.PI / 90) - r * 100 * (q.Math.PI / 180) / 2) + q.Math.cos(100 * (6.67 / 180)) * q.Math.random() * q.Math.sin(60 * (q.Math.PI / 180) - 100 * (q.Math.PI / 45) / 2)));
            return q.Math.atan2(h, g);
          }(Q)), q.addSignal("phe", i(s)(window) || i(s)(Q)), q.addSignal("nm", i(a)(window) || i(a)(Q)), q.addSignal("awe", i(c)(window) || i(c)(Q)), q.addSignal("geb", i(l)(window) || i(l)(Q)), q.addSignal("dat", i(p)(window) || i(p)(Q)), q.addSignal("sqt", i(k)(window) || i(k)(Q)), q.addSignal("xt1", navigator.pdfViewerEnabled), q.addSignal("ucdv", function () {
            return typeof objectToInspect !== "undefined" && objectToInspect === null && typeof result !== "undefined" && !!result;
          }()), q.addSignal("tzp", function () {
            var q = 1,
              r = 8;
            return window.Intl && Intl.DateTimeFormat && typeof Intl.DateTimeFormat.prototype.resolvedOptions === "function" && 3 * (q | r) - 2 * (~q & r) + 4 * ~(q | r) - ~(q ^ r) - (q | ~r) - (~q | r) - ~(q & r) < 11 ? Intl.DateTimeFormat().resolvedOptions().timeZone || "NA" : (5, 7, "NA");
          }()), q.addSignal("tz", function () {
            return new Date().getTimezoneOffset();
          }()), q.addSignal("rs_w", function () {
            return window.screen.width;
          }()), q.addSignal("rs_h", function () {
            return window.screen.height;
          }()), q.addSignal("isb", function () {
            return !!navigator.brave;
          }()), q.addSignal("plu", function () {
            var q = "";
            if (window.navigator.plugins) {
              if (window.navigator.plugins.length == 0) q = "empty";else {
                for (var r = [], h = 0; h < window.navigator.plugins.length; h++) r.push(window.navigator.plugins[h].name);
                q = r.join();
              }
            } else q = "NA";
            return q;
          }()), q.addSignal("mmt", function () {
            var q = "";
            if (window.navigator.mimeTypes) {
              if (window.navigator.mimeTypes.length == 0) q = "empty";else {
                for (var r = [], h = 0; h < window.navigator.mimeTypes.length; h++) r.push(window.navigator.mimeTypes[h].type);
                q = r.join();
              }
            } else q = "NA";
            return q;
          }()), q.addSignal("dp0", function () {
            var q = Math.random() * 1000 | 0,
              r = Math.random() * 1000 | 0,
              h = q,
              g = false;
            try {
              var n = new Error();
              window.Object.defineProperty(n, "stack", {
                configurable: false,
                enumerable: false,
                get: function () {
                  h += r;
                }
              }), window.console.dirxml(n);
              var t = n.stack;
              t = 0 + r;
              var i = 6,
                o = 13;
              q + r != h && 3 * (i & o) + 4 * (i ^ o) + 5 * ~(i | o) - ~o - ~i - (~i | o) - ~(i & o) + 1 > -13 ? g = qg(t == r ? 74 : 74) : (13, 9);
            } catch (q) {}
            return g;
          }()), q.addSignal("crt", function () {
            return navigator.connection && navigator.connection.rtt;
          }()), q.addSignal("br_w", function () {
            return Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
          }()), q.addSignal("br_h", function () {
            return Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
          }()), q.addSignal("ars_w", function () {
            return screen.availWidth || 0;
          }()), q.addSignal("ars_h", function () {
            return screen.availHeight || 0;
          }()), q.addSignal("cvs", function () {
            try {
              var q = document.createElement("canvas");
              return !(!q.getContext || !q.getContext("2d"));
            } catch (q) {
              return false;
            }
          }()), q.addSignal("hdn", function () {
            return !!document.hidden;
          }()), q.addSignal("med", function () {
            if (window.navigator.mediaDevices) returnervar = "defined";
            q = 81;
          }()), q.addSignal("so", function () {
            try {
              return window.screen.orientation.type;
            } catch (q) {
              try {
                return window.screen.msOrientation;
              } catch (q) {
                return "NA";
              }
            }
          }()), q.addSignal("pr", function () {
            return window.devicePixelRatio || "unknown";
          }()), q.addSignal("mq", function () {
            function q(q, r) {
              for (var h = 0; h < r.length; h++) {
                var g = "(" + q + ":" + r[h] + ")";
                if (window.matchMedia(g).matches) return r[h];
              }
              return "nomatch";
            }
            var r = q("any-pointer", ["fine", "coarse", "none"]),
              h = q("any-hover", ["hover", "none"]);
            return "aptr:" + r + ", ahvr:" + h;
          }()), q.addSignal("bchk", function () {
            try {
              for (var q = "52738db37a1ea50137e79e8181193ac872cd325ba5cacfbe7aab5b36b9c9879e7c0018dbd31a1832a8dc6528387b67451719dcd8b784a518904e3f07c69b9d30", r = "3829ae9642df0d791e41d2159da28bd18d056afadf1bd70fc9222a473eaf58e860ff950e7bf35b66e4aa90b156c80c96913dbd9c23c7262e4adbc3ddd77ff263", h = ["AppBannerPromptResult", "webkitRTCPeerConnection", "webkitAudioContext", "webkitRequestAnimationFrame", "chrome.runtime", "chrome.webstore", "console.context", "InputMethodContext", "SVGAnimationElement", "SVGPathSegList", "PasswordCredential", "ViewTransition", "VisualViewport.prototype.segments", "DeprecationReportBody", "MathMLElement", "opr", "CSS2Properties.prototype.colorScheme", "WebKitCSSMatrix", "SVGTextPositioningElement", "XMLHttpRequestEventTarget", "TextDecoderStream", "onloadend", "WritableStream", "TransformStream", "TextTrackCue", "WeakRef", "VisualViewport", "StyleSheet", "RTCDtlsTransport", "Atomics", "StaticRange", "UIEvent", "VideoStreamTrack", "OfflineResourceList", "SVGGeometryElement", "RTCDataChannel", "VTTRegion", "AbortController", "Controllers", "onanimationcancel", "SVGDocument", "IIRFilterNode", "RTCStatsReport", "MediaStreamTrack", "CSS2Properties.prototype.MozOsxFontSmoothing", "CropTarget", "BatteryManager", "LaunchQueue", "CSSFontPaletteValuesRule", "PushSubscriptionOptions", "DOMSettableTokenList", "RTCTrackEvent", "MozSmsMessage", "ServiceWorkerContainer", "CanvasCaptureMediaStream", "DeviceStorage", "XPathNSResolver", "SmartCardEvent", "WeakSet", "MozMobileMessageManager", "External.prototype.getHostEnvironmentValue", "WindowUtils", "XPathNamespace", "SVGFEDropShadowElement", "SharedWorker", "WorkerMessageEvent", "CSS2Properties.prototype.MozOSXFontSmoothing", "AudioSinkInfo", "Notification.prototype.image", "ContentVisibilityAutoStateChangeEvent", "PerformanceResourceTiming.prototype.renderBlockingStatus", "console.createTask", "PerformanceServerTiming", "CanvasFilter", "structuredClone", "onslotchange", "EyeDropper", "URLPattern", "VideoFrame", "WritableStreamDefaultController", "SharedArrayBuffer", "CSSCounterStyleRule", "CustomStateSet", "ReadableStreamDefaultController", "XMLDocument.prototype.hasStorageAccess", "CryptoKey", "SubmitEvent", "MediaMetadata", "VideoPlaybackQuality", "ReadableStreamDefaultReader", "UserActivation", "FragmentDirective", "WebKitMediaKeyError", "RTCRtpTransceiver.prototype.stop", "Scheduling", "EventCounts", "VideoTrackList", "SourceBuffer", "RTCError", "FontFaceSet", "CSSCharsetRule", "MediaDeviceInfo", "RTCPeerConnectionIceErrorEvent", "RTCSctpTransport", "MediaSessionCoordinator", "XULPopupElement", "MediaSourceHandle", "RTCEncodedAudioFrame", "__REACT_DEVTOOLS_GLOBAL_HOOK__", "ShadowRealm", "HTMLSlotElement", "DetachedViewControlEvent", "GeolocationPosition", "SiteBoundCredential", "MediaSource", "WebTransport", "GPUSupportedLimits", "ToggleEvent"], g = "", n = 0; n < h.length; n++) {
                for (var i = h[n].split("."), o = window, e = true, s = 0; s < i.length; s++) {
                  var a = i[s];
                  if (!(a in o)) {
                    e = false;
                    break;
                  }
                  var c = 11,
                    l = 2;
                  s < i.length - 1 && Math.round((-l + 4 * (c | l) - 2 * (c ^ l) + ~l - ~c) / 3) > 6 ? o = o[a] : (10, 11);
                }
                g += e ? q[n] : r[n];
              }
              return g;
            } catch (q) {
              return "Err:" + t(q.message.slice(0, 150));
            }
          }());
          try {
            W = Object.getOwnPropertyDescriptor(navigator.__proto__, "hardwareConcurrency").get, U = Object.getOwnPropertyDescriptor(navigator.__proto__, "platform").get, R = Function.prototype.toString;
          } catch (q) {}
          q.addSignal("hcovdr", i(m)(W)), q.addSignal("plovdr", i(m)(U)), q.addSignal("ftsovdr", i(m)(R)), q.addSignal("hcovdr2", i(j)(W)), q.addSignal("plovdr2", i(j)(U)), q.addSignal("ftsovdr2", i(j)(R)), function (r, h) {
            q.addSignal("glvd", r.glvd), q.addSignal("glrd", r.glrd), q.addSignal("hc", r.hc), q.addSignal("br_oh", r.br_oh), q.addSignal("br_ow", r.br_ow), q.addSignal("ua", r.ua), q.addSignal("wbd", r.wbd), q.addSignal("ts_mtp", r.mtp);
            try {
              var g = P(h.spawningIframeVals, r);
              g.keysDelta && (q.addSignal("sivd", g.keysDelta), q.addSignal("sirv", t(g.deltaVals.slice(0, 300))));
              var n = b(h.iframe.contentWindow),
                i = P(h.spawningIframeRefs, n);
              i.keysDelta && q.addSignal("sird", i.keysDelta);
            } catch (q) {}
          }(O, V), function (r) {
            try {
              var h = r.contentWindow.navigator;
              document.head.removeChild(r);
              var g = window.navigator.platform,
                n = h.platform,
                i = 12,
                o = 13;
              n !== g && 3 * (i & ~o) - (i ^ o) + ~(i ^ o) - (i | ~o) < 31 ? q.addSignal("dil", t(n + "__" + g)) : (10, 14);
            } catch (q) {}
          }(V.iframe);
        };
      },
      780: function (q) {
        function r(q) {
          if (window.btoa) try {
            return window.btoa(q);
          } catch (q) {
            return "b_e";
          }
          return "b_u";
        }
        q.exports.safeBtoa = r, q.exports.sw = function (q) {
          return function () {
            try {
              return q.apply(this, arguments);
            } catch (q) {
              return r(q.message.slice(0, 150));
            }
          };
        };
      },
      901: function (q) {
        q.exports = function () {
          var q = Date.now(),
            r = [];
          function h(h, g) {
            var n = h + ":" + (Date.now() - q);
            if (g) {
              var t;
              try {
                var i = 8,
                  o = 3;
                g.length > 400 && 3 * (i & ~o) - (i ^ o) + ~(i ^ o) - (i | ~o) < 14 ? g = g.slice(0, 400) + "..." : (9, 9), t = window.btoa(g);
              } catch (q) {
                t = "e2";
              }
              n += "[" + t + "]";
            }
            r.push(n);
          }
          function g(q) {
            this.disabled = "true";
            try {
              h("cf_" + q.counter, window._ddem);
              var g = new XMLHttpRequest(),
                n = "https://" + window.location.hostname + "/contact-human" + "?hash=" + window.ddm.hash + "&cid=" + window.ddm.cid;
              g.open("POST", n, false), g.setRequestHeader("content-type", "application/x-www-form-urlencoded"), g.send("human-reason=" + r.join() + "&human-comment=INTERSTITIAL_REDIRECT_TIMEOUT");
            } catch (q) {}
            window.location = q.reloadUrl;
          }
          var n,
            t = "<svg width=\"100\" height=\"100\" viewBox=\"0 0 19 15\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M16.875 7.5C16.875 3.36449 13.5105 0 9.37499 0C7.37174 0 5.4881 0.780359 4.07174 2.19712L5.83948 3.96486C6.78412 3.02021 8.0396 2.50012 9.37536 2.50012C12.132 2.50012 14.3752 4.74298 14.3752 7.5H12.4999L15.6251 10.6249L18.75 7.5H16.875Z\" fill=\"#868686\"/><path d=\"M9.375 12.5002C6.61802 12.5002 4.37512 10.257 4.37512 7.49999H6.25012L3.12488 4.37511L0 7.49999H1.875C1.875 11.6355 5.23949 15 9.375 15C11.3786 15 13.2619 14.22 14.6782 12.8032L12.9105 11.0355C11.9662 11.9797 10.7104 12.5002 9.375 12.5002Z\" fill=\"#868686\"/></svg>",
            i = false;
          function o(q) {
            if (!i) {
              i = true;
              var r = document.querySelector(".device-check__header"),
                h = document.querySelector(".device-check__main"),
                n = document.querySelector(".device-check__footer");
              if (r) {
                r.innerHTML = "";
                var o = document.createElement("button");
                o.style.setProperty("margin", "75px"), o.innerHTML = t, o.onclick = function () {
                  g.call(o, q);
                }, r.appendChild(o);
              }
              n && (n.innerHTML = ""), h && (h.innerHTML = "");
            }
          }
          function e() {
            var q = function () {
                var q = "nil",
                  r = window.location.href;
                try {
                  var h = 8,
                    g = 14;
                  if (window.location.href.indexOf("?") > -1 && 3 * (h & g) + 4 * (h ^ g) + 5 * ~(h | g) - ~g - ~h - (~h | g) - ~(h & g) + 1 > -12) {
                    var n = "&cntr=",
                      t = window.location.href.split(n),
                      i = t[0],
                      o = t[1];
                    r = i + n + ((q = o ? +o : 1) + 1);
                  } else q = "noqm";
                } catch (r) {
                  q = "err";
                }
                return {
                  counter: q,
                  reloadUrl: r
                };
              }(),
              r = 9,
              h = 6;
            (q.counter != 1 || window._ddst && window._ddst != 200) && 2 * (r | h) - 3 * (~r & h) + 3 * ~r - 2 * (~r | h) - ~(r & h) < 21 ? o(q) : window.location = q.reloadUrl;
          }
          function s(q, r) {
            var g = 10,
              t = 10;
            typeof r != "number" && t + (g & ~t) + (g & t) < 24 ? r = 3000 : (11, 2), n && clearTimeout(n), n = setTimeout(function () {
              h("to_" + q);
              e();
            }, r);
          }
          var a = window.ddm.displayEnabled ? window.ddm.durationMs + 3000 : 5000;
          return s("js", a), {
            logStep: h,
            resetTimeout: s
          };
        };
      },
      915: function (q) {
        function r(q, r) {
          q = [q[0] >>> 16, 65535 & q[0], q[1] >>> 16, 65535 & q[1]], r = [r[0] >>> 16, 65535 & r[0], r[1] >>> 16, 65535 & r[1]];
          var h = [0, 0, 0, 0];
          return h[3] += q[3] + r[3], h[2] += h[3] >>> 16, h[3] &= 65535, h[2] += q[2] + r[2], h[1] += h[2] >>> 16, h[2] &= 65535, h[1] += q[1] + r[1], h[0] += h[1] >>> 16, h[1] &= 65535, h[0] += q[0] + r[0], h[0] &= 65535, [h[0] << 16 | h[1], h[2] << 16 | h[3]];
        }
        function h(q, r) {
          q = [q[0] >>> 16, 65535 & q[0], q[1] >>> 16, 65535 & q[1]], r = [r[0] >>> 16, 65535 & r[0], r[1] >>> 16, 65535 & r[1]];
          var h = [0, 0, 0, 0];
          return h[3] += q[3] * r[3], h[2] += h[3] >>> 16, h[3] &= 65535, h[2] += q[2] * r[3], h[1] += h[2] >>> 16, h[2] &= 65535, h[2] += q[3] * r[2], h[1] += h[2] >>> 16, h[2] &= 65535, h[1] += q[1] * r[3], h[0] += h[1] >>> 16, h[1] &= 65535, h[1] += q[2] * r[2], h[0] += h[1] >>> 16, h[1] &= 65535, h[1] += q[3] * r[1], h[0] += h[1] >>> 16, h[1] &= 65535, h[0] += q[0] * r[3] + q[1] * r[2] + q[2] * r[1] + q[3] * r[0], h[0] &= 65535, [h[0] << 16 | h[1], h[2] << 16 | h[3]];
        }
        function g(q, r) {
          return 32 === (r %= 64) ? [q[1], q[0]] : r < 32 ? [q[0] << r | q[1] >>> 32 - r, q[1] << r | q[0] >>> 32 - r] : (r -= 32, [q[1] << r | q[0] >>> 32 - r, q[0] << r | q[1] >>> 32 - r]);
        }
        function n(q, r) {
          return 0 === (r %= 64) ? q : r < 32 ? [q[0] << r | q[1] >>> 32 - r, q[1] << r] : [q[1] << r - 32, 0];
        }
        function t(q, r) {
          return [q[0] ^ r[0], q[1] ^ r[1]];
        }
        function i(q) {
          return q = t(q, [0, q[0] >>> 1]), q = t(q = h(q, [4283543511, 3981806797]), [0, q[0] >>> 1]), q = t(q = h(q, [3301882366, 444984403]), [0, q[0] >>> 1]);
        }
        q.exports = function (q, o) {
          o = o || 0;
          for (var e = (q = q || "").length % 16, s = q.length - e, a = [0, o], c = [0, o], l = [0, 0], p = [0, 0], k = [2277735313, 289559509], m = [1291169091, 658871167], j = 0; j < s; j += 16) l = [255 & q.charCodeAt(j + 4) | (255 & q.charCodeAt(j + 5)) << 8 | (255 & q.charCodeAt(j + 6)) << 16 | (255 & q.charCodeAt(j + 7)) << 24, 255 & q.charCodeAt(j) | (255 & q.charCodeAt(j + 1)) << 8 | (255 & q.charCodeAt(j + 2)) << 16 | (255 & q.charCodeAt(j + 3)) << 24], p = [255 & q.charCodeAt(j + 12) | (255 & q.charCodeAt(j + 13)) << 8 | (255 & q.charCodeAt(j + 14)) << 16 | (255 & q.charCodeAt(j + 15)) << 24, 255 & q.charCodeAt(j + 8) | (255 & q.charCodeAt(j + 9)) << 8 | (255 & q.charCodeAt(j + 10)) << 16 | (255 & q.charCodeAt(j + 11)) << 24], l = g(l = h(l, k), 31), a = r(a = g(a = t(a, l = h(l, m)), 27), c), a = r(h(a, [0, 5]), [0, 1390208809]), p = g(p = h(p, m), 33), c = r(c = g(c = t(c, p = h(p, k)), 31), a), c = r(h(c, [0, 5]), [0, 944331445]);
          switch (l = [0, 0], p = [0, 0], e) {
            case 15:
              p = t(p, n([0, q.charCodeAt(j + 14)], 48));
              break;
            case 14:
              p = t(p, n([0, q.charCodeAt(j + 13)], 40));
              break;
            case 13:
              p = t(p, n([0, q.charCodeAt(j + 12)], 32));
              break;
            case 12:
              p = t(p, n([0, q.charCodeAt(j + 11)], 24));
              break;
            case 11:
              p = t(p, n([0, q.charCodeAt(j + 10)], 16));
              break;
            case 10:
              p = t(p, n([0, q.charCodeAt(j + 9)], 8));
              break;
            case 9:
              p = h(p = t(p, [0, q.charCodeAt(j + 8)]), m), c = t(c, p = h(p = g(p, 33), k));
              break;
            case 8:
              l = t(l, n([0, q.charCodeAt(j + 7)], 56));
              break;
            case 7:
              l = t(l, n([0, q.charCodeAt(j + 6)], 48));
              break;
            case 6:
              l = t(l, n([0, q.charCodeAt(j + 5)], 40));
              break;
            case 5:
              l = t(l, n([0, q.charCodeAt(j + 4)], 32));
              break;
            case 4:
              l = t(l, n([0, q.charCodeAt(j + 3)], 24));
              break;
            case 3:
              l = t(l, n([0, q.charCodeAt(j + 2)], 16));
              break;
            case 2:
              l = t(l, n([0, q.charCodeAt(j + 1)], 8));
              break;
            case 1:
              l = h(l = t(l, [0, q.charCodeAt(j)]), k), a = t(a, l = h(l = g(l, 31), m));
          }
          return a = r(a = t(a, [0, q.length]), c = t(c, [0, q.length])), c = r(c, a), a = r(a = i(a), c = i(c)), c = r(c, a), ("00000000" + (a[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (a[1] >>> 0).toString(16)).slice(-8) + ("00000000" + (c[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (c[1] >>> 0).toString(16)).slice(-8);
        };
      },
      19: function (q, r, h) {
        var g = h(780).safeBtoa,
          n = h(915);
        q.exports = function (q) {
          function r(r, h, t) {
            var i = t.area,
              o = t.offsetParameter,
              e = t.multiplier,
              s = t.fontSizeFactor,
              a = t.maxShadowBlur;
            function c(q) {
              this.currentNumber = q % o, this.currentNumber <= 0 && (this.currentNumber += o);
            }
            function l(q, r, h) {
              return q = (q - 1) / o, h ? q * r : Math.floor(q * r);
            }
            if (c.prototype.getNext = function () {
              return this.currentNumber = Math.max(e * this.currentNumber % o, 2), this.currentNumber;
            }, !window.CanvasRenderingContext2D) return "unknown";
            var p = ["#FF6633", "#FFB399", "#FF33FF", "#FFFF99", "#00B3E6", "#E6B333", "#3366E6", "#999966", "#99FF99", "#B34D4D", "#80B300", "#809900", "#E6B3B3", "#6680B3", "#66991A", "#FF99E6", "#CCFF1A", "#FF1A66", "#E6331A", "#33FFCC", "#66994D", "#B366CC", "#4D8000", "#B33300", "#CC80CC", "#66664D", "#991AFF", "#E666FF", "#4DB3FF", "#1AB399", "#E666B3", "#33991A", "#CC9999", "#B3B31A", "#00E680", "#4D8066", "#809980", "#E6FF80", "#1AFF33", "#999933", "#FF3380", "#CCCC00", "#66E64D", "#4D80CC", "#9900B3", "#E64D66", "#4DB380", "#FF4D4D", "#99E6E6", "#6666FF"],
              k = [function (q, r, h) {
                r.beginPath(), r.arc(l(q.getNext(), h.width / 2), l(q.getNext(), h.height / 2), l(q.getNext(), Math.min(h.width / 4, h.height / 4)), l(q.getNext(), 2 * Math.PI, !0), l(q.getNext(), 2 * Math.PI, !0)), r.stroke();
              }, function (q, r, h) {
                var g = Math.max(1, l(q.getNext(), 5)),
                  n = function (q, r) {
                    for (var h = [], g = 0; g < r; g++) {
                      var n = 65 + q.getNext() % 61;
                      h.push(String.fromCharCode(n));
                    }
                    return h.join("");
                  }(q, g);
                r.font = h.height / s + "px aafakefontaa", r.fillText(n, l(q.getNext(), h.width), l(q.getNext(), h.height), l(q.getNext(), h.width));
              }, function (q, r, h) {
                r.beginPath(), r.moveTo(l(q.getNext(), h.width), l(q.getNext(), h.height)), r.bezierCurveTo(l(q.getNext(), h.width), l(q.getNext(), h.height), l(q.getNext(), h.width), l(q.getNext(), h.height), l(q.getNext(), h.width), l(q.getNext(), h.height)), r.stroke();
              }, function (q, r, h) {
                r.beginPath(), r.moveTo(l(q.getNext(), h.width), l(q.getNext(), h.height)), r.quadraticCurveTo(l(q.getNext(), h.width), l(q.getNext(), h.height), l(q.getNext(), h.width), l(q.getNext(), h.height)), r.stroke();
              }];
            function m(q, r, h) {
              var g = Math.max(1, l(q.getNext(), 5));
              r.font = h.height / s + "px aafakefontaa", r.fillText("▶️" + g, l(q.getNext(), h.width), l(q.getNext(), h.height), l(q.getNext(), h.width));
            }
            var j = new c(h),
              f = document.createElement("canvas");
            f.width = i.width, f.height = i.height, f.style.display = "none";
            var u = f.getContext("2d");
            function S(q, r) {
              var h;
              !function (q, r, h) {
                var g = r.createRadialGradient(l(q.getNext(), h.width), l(q.getNext(), h.height), l(q.getNext(), h.width), l(q.getNext(), h.width), l(q.getNext(), h.height), l(q.getNext(), h.width));
                g.addColorStop(0, p[l(q.getNext(), p.length)]), g.addColorStop(1, p[l(q.getNext(), p.length)]), r.fillStyle = g;
              }(j, u, i), u.shadowBlur = l(j.getNext(), a), u.shadowColor = p[l(j.getNext(), p.length)], q ? (h = k[1])(j, u, i) : h = r ? m : k[l(j.getNext(), k.length)], h(j, u, i), u.fill();
            }
            var b,
              P = 0,
              W = 0;
            !function t() {
              window.requestAnimationFrame(function () {
                try {
                  var i = performance.now();
                  S(++P >= r, P + 1 >= r), b = n((b || "") + f.toDataURL(46, 0, 22, 2, 0), h), W += performance.now() - i, P < r ? t() : (q.addSignal("pcso", b), q.addSignal("pcsoTime", W));
                } catch (r) {
                  q.addSignal("pcso", "Err:" + g(r.message.slice(0, 150)));
                }
              });
            }();
          }
          return function (h) {
            try {
              for (var n = 0, t = 0; t < h.length; t++) n += h.charCodeAt(t);
              0 == (n %= 10) && n++, q.addSignal("pcsoNumShapes", 7), q.addSignal("pcsoSeed", n), r(7, n, {
                area: {
                  width: 300,
                  height: 300
                },
                offsetParameter: 2001000001,
                fontSizeFactor: 1.5,
                multiplier: 15e3,
                maxShadowBlur: 50
              });
            } catch (r) {
              q.addSignal("pcso", "Err:" + g(r.message.slice(0, 150)));
            }
          };
        };
      }
    },
    r = {};
  function h(g) {
    var n = r[g],
      t = 0,
      i = 1;
    if (void 0 !== n && Math.round((-(t & i) + 3 * (t | i) - (t & ~i) - (t ^ i) + 2 * ~i - ~t - ~(t & i)) / 2) > -7) return n.exports;
    2, 9;
    var o = r[g] = {
      exports: {}
    };
    return q[g](o, o.exports, h), o.exports;
  }
  !function () {
    try {
      var q,
        r,
        g = Date.now(),
        n = h(901)(),
        t = h(570),
        i = h(319),
        o = h(501),
        e = h(915),
        s = h(780).safeBtoa,
        a = 4046101435,
        c = t(a, window.ddm.cid, window.ddm.hash),
        l = function () {
          var q,
            r = window.ddm.durationMs,
            h = 500,
            g = 4,
            n = 7;
          if (r < h && 3 * (g | n) - 2 * (~g & n) + 4 * ~(g | n) - ~(g ^ n) - (g | ~n) - (~g | n) - ~(g & n) < 17) {
            q = 0;
            h = r;
          } else q = r - h;
          this.fastMode = !window.ddm.displayEnabled, this.checkDuration = h, this.stepCountMax = 5, this.timeoutDelay = Math.floor(q / this.stepCountMax), this.stepIndex = 0;
        };
      l.prototype.sendPayload = function () {
        var h = this,
          g = 2,
          a = 6;
        if (this.stepIndex < this.stepCountMax && 4 * (g | a) - 3 * (~g & a) + 6 * ~(g | a) - 2 * ~(g ^ a) - ~a - (g | ~a) - ~g + 1 < 10) {
          var l = Date.now();
          switch (setTimeout(function () {
            h.sendPayload();
          }, this.timeoutDelay), this.stepIndex) {
            case 0:
              (q = new c()).addSignal("v", "1.6.1"), q.addSignal("fm", this.fastMode);
              break;
            case 1:
              o(q, this.fastMode);
              break;
            case 2:
              q.addSignal("response", i(window.ddm.seed));
              break;
            case 3:
              try {
                var k = t.toString() + i.toString() + o.toString();
                q.addSignal("chksm", e(k));
              } catch (r) {
                q.addSignal("chksm", "Err:" + s(r.message.slice(0, 150)));
              }
              break;
            case 4:
              q.addSignal("ttst", p), r = q.buildPayload();
          }
          p += Date.now() - l, this.stepIndex++;
        } else n.logStep("cb"), window.interstitialCallback(r, function (q, r, g) {
          var t = false,
            i = false;
          function o() {
            n.logStep("rd");
            n.resetTimeout("rd");
            g.apply(q);
          }
          q.onload = function () {
            n.logStep("rp_" + this.status);
            window._ddst = this.status;
            t = true;
            i && o();
          }, q.send(r), n.resetTimeout("rq"), n.logStep("rq"), setTimeout(function () {
            n.logStep("timer");
            t ? o() : i = true;
          }, h.checkDuration);
        });
      }, window.interstitialChallenge = function () {
        return new l();
      };
      var p = Date.now() - g;
    } catch (q) {
      window._ddem = "Err: " + q.message;
    }
  }();
}();