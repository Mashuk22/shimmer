!(function (e) {
  function t(t) {
    for (
      var a, r, o = t[0], s = t[1], l = t[2], u = 0, f = [];
      u < o.length;
      u++
    )
      (r = o[u]),
        Object.prototype.hasOwnProperty.call(i, r) && i[r] && f.push(i[r][0]),
        (i[r] = 0);
    for (a in s) Object.prototype.hasOwnProperty.call(s, a) && (e[a] = s[a]);
    for (d && d(t); f.length; ) f.shift()();
    return c.push.apply(c, l || []), n();
  }
  function n() {
    for (var e, t = 0; t < c.length; t++) {
      for (var n = c[t], a = !0, r = 1; r < n.length; r++) {
        var s = n[r];
        0 !== i[s] && (a = !1);
      }
      a && (c.splice(t--, 1), (e = o((o.s = n[0]))));
    }
    return e;
  }
  var a = {},
    r = { 192: 0 },
    i = { 192: 0 },
    c = [];
  function o(t) {
    if (a[t]) return a[t].exports;
    var n = (a[t] = { i: t, l: !1, exports: {} });
    return e[t].call(n.exports, n, n.exports, o), (n.l = !0), n.exports;
  }
  (o.e = function (e) {
    var t = [];
    r[e]
      ? t.push(r[e])
      : 0 !== r[e] &&
        { 63: 1, 197: 1, 198: 1, 200: 1, 201: 1, 202: 1 }[e] &&
        t.push(
          (r[e] = new Promise(function (t, n) {
            for (
              var a =
                  e +
                  "." +
                  {
                    1: "31d6cfe0d16ae931b73c",
                    2: "31d6cfe0d16ae931b73c",
                    3: "31d6cfe0d16ae931b73c",
                    63: "85fed62f69feec56e675",
                    64: "31d6cfe0d16ae931b73c",
                    65: "31d6cfe0d16ae931b73c",
                    66: "31d6cfe0d16ae931b73c",
                    67: "31d6cfe0d16ae931b73c",
                    68: "31d6cfe0d16ae931b73c",
                    69: "31d6cfe0d16ae931b73c",
                    70: "31d6cfe0d16ae931b73c",
                    71: "31d6cfe0d16ae931b73c",
                    72: "31d6cfe0d16ae931b73c",
                    73: "31d6cfe0d16ae931b73c",
                    74: "31d6cfe0d16ae931b73c",
                    75: "31d6cfe0d16ae931b73c",
                    197: "a1dbe4b1b20a99f958fb",
                    198: "aff0a362a37e7efe0329",
                    200: "29a80ff761bc1b9947b8",
                    201: "4ce472ae437bf4c5152b",
                    202: "6b8250d8c2e9a5fbb4ce",
                    203: "31d6cfe0d16ae931b73c",
                    204: "31d6cfe0d16ae931b73c",
                    205: "31d6cfe0d16ae931b73c",
                    206: "31d6cfe0d16ae931b73c",
                    207: "31d6cfe0d16ae931b73c",
                  }[e] +
                  ".css",
                i = o.p + a,
                c = document.getElementsByTagName("link"),
                s = 0;
              s < c.length;
              s++
            ) {
              var l =
                (d = c[s]).getAttribute("data-href") || d.getAttribute("href");
              if ("stylesheet" === d.rel && (l === a || l === i)) return t();
            }
            var u = document.getElementsByTagName("style");
            for (s = 0; s < u.length; s++) {
              var d;
              if ((l = (d = u[s]).getAttribute("data-href")) === a || l === i)
                return t();
            }
            var f = document.createElement("link");
            (f.rel = "stylesheet"),
              (f.type = "text/css"),
              (f.onload = t),
              (f.onerror = function (t) {
                var a = (t && t.target && t.target.src) || i,
                  c = new Error(
                    "Loading CSS chunk " + e + " failed.\n(" + a + ")"
                  );
                (c.code = "CSS_CHUNK_LOAD_FAILED"),
                  (c.request = a),
                  delete r[e],
                  f.parentNode.removeChild(f),
                  n(c);
              }),
              (f.href = i),
              document.getElementsByTagName("head")[0].appendChild(f);
          }).then(function () {
            r[e] = 0;
          }))
        );
    var n = i[e];
    if (0 !== n)
      if (n) t.push(n[2]);
      else {
        var a = new Promise(function (t, a) {
          n = i[e] = [t, a];
        });
        t.push((n[2] = a));
        var c,
          s = document.createElement("script");
        (s.charset = "utf-8"),
          (s.timeout = 120),
          o.nc && s.setAttribute("nonce", o.nc),
          (s.src = (function (e) {
            return (
              o.p +
              "" +
              ({ 1: "node_modules_for_quiz" }[e] || e) +
              "." +
              {
                1: "617544ad8bf8c690d638",
                2: "2d000d6a77e96bf7fa28",
                3: "25c2dd5c92fb0fd3608a",
                63: "83d07dbb6d9d0e3e9e18",
                64: "02904adb5a6040c38e3b",
                65: "7989c0d46ed4781ac15a",
                66: "6fd3e4dd75127b97b583",
                67: "ef34e5b300699a30cf5d",
                68: "f4da68b37b8bb472d7ca",
                69: "63c4b1f2013b05644bf3",
                70: "1902b2ecfd4fb93eda45",
                71: "5595eb2e3be6c594a3cf",
                72: "77a4549326d9a3415e9c",
                73: "227f537c6b7286181100",
                74: "5744dbbcfe40a43d3b3f",
                75: "523f8ab59d91de1191af",
                197: "4bc9a434a8d5dad07352",
                198: "0c500abeb4f471b980bc",
                200: "be4bc1d90f392128f513",
                201: "f3b93ce2f2d9d6647358",
                202: "e84166eac03b752a02aa",
                203: "e644bf31b5fd4cdbf2b8",
                204: "6e0fe2fa764364a40dfd",
                205: "25424ae374a6c64419bc",
                206: "7f826838195e044302bf",
                207: "a14f4e4354066f18c0d7",
              }[e] +
              ".js"
            );
          })(e));
        var l = new Error();
        c = function (t) {
          (s.onerror = s.onload = null), clearTimeout(u);
          var n = i[e];
          if (0 !== n) {
            if (n) {
              var a = t && ("load" === t.type ? "missing" : t.type),
                r = t && t.target && t.target.src;
              (l.message =
                "Loading chunk " + e + " failed.\n(" + a + ": " + r + ")"),
                (l.name = "ChunkLoadError"),
                (l.type = a),
                (l.request = r),
                n[1](l);
            }
            i[e] = void 0;
          }
        };
        var u = setTimeout(function () {
          c({ type: "timeout", target: s });
        }, 12e4);
        (s.onerror = s.onload = c), document.head.appendChild(s);
      }
    return Promise.all(t);
  }),
    (o.m = e),
    (o.c = a),
    (o.d = function (e, t, n) {
      o.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
    }),
    (o.r = function (e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (o.t = function (e, t) {
      if ((1 & t && (e = o(e)), 8 & t)) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var n = Object.create(null);
      if (
        (o.r(n),
        Object.defineProperty(n, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var a in e)
          o.d(
            n,
            a,
            function (t) {
              return e[t];
            }.bind(null, a)
          );
      return n;
    }),
    (o.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return o.d(t, "a", t), t;
    }),
    (o.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (o.p = "https://frontier-assets.toptal.com/"),
    (o.oe = function (e) {
      throw (console.error(e), e);
    });
  var s = (window.webpackJsonp = window.webpackJsonp || []),
    l = s.push.bind(s);
  (s.push = t), (s = s.slice());
  for (var u = 0; u < s.length; u++) t(s[u]);
  var d = l;
  c.push([1665, 0, 59]), n();
})({
  10: function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
      return a.a;
    }),
      n.d(t, "d", function () {
        return a.b;
      }),
      n.d(t, "e", function () {
        return s;
      }),
      n.d(t, "f", function () {
        return l;
      }),
      n.d(t, "g", function () {
        return u.a;
      }),
      n.d(t, "i", function () {
        return b;
      }),
      n.d(t, "h", function () {
        return x;
      }),
      n.d(t, "j", function () {
        return T;
      }),
      n.d(t, "k", function () {
        return R;
      }),
      n.d(t, "l", function () {
        return A;
      }),
      n.d(t, "m", function () {
        return U.b;
      }),
      n.d(t, "n", function () {
        return B;
      }),
      n.d(t, "o", function () {
        return G.a;
      }),
      n.d(t, "p", function () {
        return F.a;
      }),
      n.d(t, "q", function () {
        return K;
      }),
      n.d(t, "r", function () {
        return Y;
      }),
      n.d(t, "s", function () {
        return Q.b;
      }),
      n.d(t, "t", function () {
        return J;
      }),
      n.d(t, "u", function () {
        return X;
      }),
      n.d(t, "v", function () {
        return te;
      }),
      n.d(t, "w", function () {
        return ie;
      }),
      n.d(t, "x", function () {
        return ce;
      }),
      n.d(t, "y", function () {
        return ue;
      }),
      n.d(t, "z", function () {
        return de;
      }),
      n.d(t, "B", function () {
        return me;
      }),
      n.d(t, "c", function () {
        return W.a;
      }),
      n.d(t, "C", function () {
        return W.b;
      }),
      n.d(t, "D", function () {
        return pe;
      }),
      n.d(t, "E", function () {
        return be;
      }),
      n.d(t, "F", function () {
        return ge;
      }),
      n.d(t, "b", function () {
        return ye;
      }),
      n.d(t, "A", function () {
        return Ee;
      });
    var a = n(122),
      r = n(1),
      i = n.n(r),
      c = n(0),
      o = n.n(c);
    function s(e, t) {
      var n = Object(c.useState)(e),
        a = i()(n, 2),
        r = a[0],
        o = a[1];
      return (
        Object(c.useEffect)(
          function () {
            var n = setTimeout(function () {
              o(e);
            }, t);
            return function () {
              clearTimeout(n);
            };
          },
          [e, t]
        ),
        r
      );
    }
    function l() {
      var e = Object(c.useState)(!1),
        t = i()(e, 2),
        n = t[0],
        a = t[1];
      return (
        Object(c.useEffect)(function () {
          a(window.location.href.includes("debug=true"));
        }, []),
        [n, a]
      );
    }
    n(44), n(73);
    var u = n(126),
      d = (n(23), n(17), n(51), n(30)),
      f = n.n(d),
      m = n(197),
      p = n.n(m);
    function b(e, t, n) {
      return Object(c.useMemo)(
        function () {
          var a = e.filter(function (e) {
            var a = e.href;
            return t.href !== a && a !== p()(n, "href");
          });
          return [n || t].concat(f()(a)).slice(0, 13);
        },
        [t, n, e]
      );
    }
    n(19),
      n(14),
      n(56),
      n(62),
      n(25),
      n(26),
      n(20),
      n(27),
      n(33),
      n(106),
      n(64),
      n(15),
      n(68),
      n(75);
    var g = n(18),
      v = n.n(g),
      h = (n(67), n(35)),
      y = n.n(h),
      E = n(4),
      _ = n.n(E),
      O = n(192),
      j = n.n(O),
      w = n(38),
      S = n.n(w),
      k = n(13);
    function N(e, t) {
      var n,
        a = Object.keys(e);
      return (
        Object.getOwnPropertySymbols &&
          ((n = Object.getOwnPropertySymbols(e)),
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
          a.push.apply(a, n)),
        a
      );
    }
    function C(e) {
      var t, n;
      for (t = 1; t < arguments.length; t++)
        (n = null != arguments[t] ? arguments[t] : {}),
          t % 2
            ? N(Object(n), !0).forEach(function (t) {
                _()(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : N(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
      return e;
    }
    var P,
      x = function () {
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t = Object(c.useState)(
            C({ status: k.a.INITIAL, error: !1, data: {} }, e)
          ),
          n = i()(t, 2),
          a = n[0],
          r = n[1],
          o = Object(c.useCallback)(function (e) {
            r(function (t) {
              return C(C({}, t), e);
            });
          }, []),
          s = Object(c.useCallback)(
            (function () {
              var e = y()(
                v.a.mark(function e(t) {
                  var n,
                    a,
                    r,
                    i,
                    c,
                    s,
                    l,
                    u,
                    d,
                    f,
                    m,
                    p = arguments;
                  return v.a.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (
                              ((n =
                                p.length > 1 && void 0 !== p[1] ? p[1] : {}),
                              (a = p.length > 2 && void 0 !== p[2] ? p[2] : {}),
                              (r = p.length > 3 && void 0 !== p[3] ? p[3] : {}),
                              (i = r.onBeforeSend),
                              (c = void 0 === i ? S.a : i),
                              (s = r.transformData),
                              (l = void 0 === s ? j.a : s),
                              (u = r.onSuccess),
                              (d = void 0 === u ? S.a : u),
                              !1 !== c())
                            ) {
                              e.next = 6;
                              break;
                            }
                            return e.abrupt("return");
                          case 6:
                            return (
                              (e.prev = 6),
                              (f = new URLSearchParams(n).toString()) &&
                                (t += "?".concat(f)),
                              (e.next = 11),
                              fetch(
                                t,
                                C(
                                  C({}, a),
                                  {},
                                  {
                                    headers: {
                                      "Content-Type": "application/json",
                                    },
                                  }
                                )
                              ).then(function (e) {
                                return e.json();
                              })
                            );
                          case 11:
                            (m = e.sent),
                              o({ status: k.a.SUCCESS, data: l(m) }),
                              d(m),
                              (e.next = 19);
                            break;
                          case 16:
                            (e.prev = 16),
                              (e.t0 = e.catch(6)),
                              "AbortError" !==
                                (null === e.t0 || void 0 === e.t0
                                  ? void 0
                                  : e.t0.name) &&
                                o({ error: e.t0, status: k.a.ERROR });
                          case 19:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[6, 16]]
                  );
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })(),
            [o]
          );
        return { state: a, fetchJSON: s, updateState: o };
      },
      L = n(59);
    function T(e) {
      var t = Object(c.useState)(null),
        n = i()(t, 2),
        a = n[0],
        r = n[1],
        o = Object(c.useState)(k.a.INITIAL),
        s = i()(o, 2),
        l = s[0],
        u = s[1];
      return (
        Object(c.useEffect)(
          function () {
            P || (P = new L.a()).fetch(e),
              P.subscribe(function (e, t) {
                t === k.a.SUCCESS && r(e), u(t);
              });
          },
          [e]
        ),
        [a, l]
      );
    }
    n(189);
    var I = [
      {
        region: "africa",
        countries: [
          "Angola",
          "Benin",
          "Botswana",
          "Burkina Faso",
          "Burundi",
          "Cameroon",
          "Cape Verde",
          "Central African Republic",
          "Chad",
          "Congo",
          "Congo, The Democratic Republic of the",
          "CГґte D'Ivoire",
          "Equatorial Guinea",
          "Eritrea",
          "Ethiopia",
          "Gabon",
          "Gambia",
          "Ghana",
          "Guinea",
          "Guinea-Bissau",
          "Kenya",
          "Lesotho",
          "Liberia",
          "Madagascar",
          "Malawi",
          "Mali",
          "Mauritius",
          "Mayotte",
          "Mozambique",
          "Namibia",
          "Niger",
          "Nigeria",
          "Rwanda",
          "Saint Helena",
          "Sao Tome and Principe",
          "Senegal",
          "Seychelles",
          "Sierra Leone",
          "South Africa",
          "South Sudan",
          "Swaziland",
          "Tanzania, United Republic of",
          "Togo",
          "Uganda",
          "Western Sahara",
          "Zambia",
          "Zimbabwe",
          "RГ©union",
          "Democratic Republic of the Congo",
          "Republic of the Congo",
          "Libyan Arab Jamahiriya",
          "Tanzania",
        ],
      },
      {
        region: "asia_and_pacific",
        countries: [
          "Afghanistan",
          "American Samoa",
          "Antarctica",
          "Asia/Pacific Region",
          "Azerbaijan",
          "Bangladesh",
          "Bhutan",
          "British Indian Ocean Territory",
          "Brunei Darussalam",
          "Cambodia",
          "China",
          "Christmas Island",
          "Cocos (Keeling) Islands",
          "Cook Islands",
          "Fiji",
          "French Polynesia",
          "French Southern Territories",
          "Guam",
          "Heard Island and McDonald Islands",
          "Hong Kong",
          "India",
          "Indonesia",
          "Japan",
          "Kazakhstan",
          "Kiribati",
          "Kyrgyzstan",
          "Lao People's Democratic Republic",
          "Macau",
          "Malaysia",
          "Maldives",
          "Marshall Islands",
          "Micronesia, Federated States of",
          "Mongolia",
          "Myanmar",
          "Nauru",
          "Nepal",
          "New Caledonia",
          "Niue",
          "Norfolk Island",
          "North Korea",
          "Northern Mariana Islands",
          "Pakistan",
          "Palau",
          "Papua New Guinea",
          "Philippines",
          "Pitcairn Islands",
          "Reunion",
          "Samoa",
          "Singapore",
          "Solomon Islands",
          "South Korea",
          "Sri Lanka",
          "Syrian Arab Republic",
          "Taiwan",
          "Tajikistan",
          "Thailand",
          "Timor-Leste",
          "Tokelau",
          "Tonga",
          "Turkmenistan",
          "Tuvalu",
          "United States Minor Outlying Islands",
          "Uzbekistan",
          "Vanuatu",
          "Vietnam",
          "Wallis and Futuna",
          "Macao",
          "Brunei",
          "Laos",
          "Pitcairn",
        ],
      },
      {
        region: "australia_and_new_zealand",
        countries: ["Australia", "New Zealand"],
      },
      {
        region: "british_isles",
        countries: ["Ireland", "Isle of Man", "United Kingdom"],
      },
      {
        region: "eastern_europe",
        countries: [
          "Albania",
          "Belarus",
          "Bosnia and Herzegovina",
          "Bulgaria",
          "Croatia",
          "Czech Republic",
          "Estonia",
          "Georgia",
          "Hungary",
          "Latvia",
          "Lithuania",
          "Macedonia",
          "Moldova, Republic of",
          "Montenegro",
          "Poland",
          "Romania",
          "Serbia",
          "Slovakia",
          "Slovenia",
          "Ukraine",
          "Moldova",
          "Kosovo",
          "Russian Federation",
          "Russia",
        ],
      },
      {
        region: "latin_america",
        countries: [
          "Anguilla",
          "Antigua and Barbuda",
          "Argentina",
          "Aruba",
          "Bahamas",
          "Barbados",
          "Belize",
          "Bolivia",
          "Bouvet Island",
          "Brazil",
          "Cayman Islands",
          "Chile",
          "Colombia",
          "Costa Rica",
          "Cuba",
          "Dominica",
          "Dominican Republic",
          "Ecuador",
          "El Salvador",
          "Falkland Islands (Malvinas)",
          "French Guiana",
          "Grenada",
          "Guadeloupe",
          "Guatemala",
          "Guyana",
          "Haiti",
          "Honduras",
          "Jamaica",
          "Martinique",
          "Mexico",
          "Montserrat",
          "Netherlands Antilles",
          "Nicaragua",
          "Panama",
          "Paraguay",
          "Peru",
          "Puerto Rico",
          "Saint Barthelemy",
          "Saint Kitts and Nevis",
          "Saint Lucia",
          "Saint Martin",
          "Saint Vincent and the Grenadines",
          "South Georgia and the South Sandwich Islands",
          "Suriname",
          "Trinidad and Tobago",
          "Turks and Caicos Islands",
          "Uruguay",
          "Venezuela",
          "Virgin Islands, British",
          "Virgin Islands, U.S.",
          "Saint Martin (French Part)",
          "Saint BarthГ©lemy",
          "Bonaire, Sint Eustatius and Saba",
          "CuraГ§ao",
          "Sint Maarten (Dutch Part)",
        ],
      },
      {
        region: "middle_east",
        countries: [
          "Algeria",
          "Bahrain",
          "Comoros",
          "Djibouti",
          "Mauritania",
          "Morocco",
          "Palestinian Territory",
          "Somalia",
          "Sudan",
          "Tunisia",
          "Palestine",
          "Israel",
          "Egypt",
          "Iran, Islamic Republic of",
          "Iraq",
          "Jordan",
          "Kuwait",
          "Lebanon",
          "Libya",
          "Oman",
          "Qatar",
          "Saudi Arabia",
          "United Arab Emirates",
          "Yemen",
          "Iran",
          "Syria",
        ],
      },
      {
        region: "north_america",
        countries: [
          "Bermuda",
          "Canada",
          "Saint Pierre and Miquelon",
          "United States",
        ],
      },
      {
        region: "northern_europe",
        countries: [
          "Aland Islands",
          "Denmark",
          "Faroe Islands",
          "Finland",
          "Greenland",
          "Iceland",
          "Norway",
          "Svalbard and Jan Mayen",
          "Sweden",
          "Г…land Islands",
        ],
      },
      {
        region: "southern_europe",
        countries: [
          "Armenia",
          "Cyprus",
          "Gibraltar",
          "Greece",
          "Holy See (Vatican City State)",
          "Italy",
          "Malta",
          "Monaco",
          "Portugal",
          "San Marino",
          "Spain",
          "Turkey",
        ],
      },
      {
        region: "western_europe",
        countries: [
          "Andorra",
          "Austria",
          "Belgium",
          "France",
          "France, Metropolitan",
          "Germany",
          "Guernsey",
          "Jersey",
          "Liechtenstein",
          "Luxembourg",
          "Netherlands",
          "Switzerland",
        ],
      },
    ];
    function R(e) {
      var t = Object(c.useState)(null),
        n = i()(t, 2),
        a = n[0],
        r = n[1],
        o = T(e),
        s = i()(o, 2),
        l = s[0],
        u = s[1];
      return (
        Object(c.useEffect)(
          function () {
            if (Object(k.c)(u)) {
              var e = "global";
              (null == l ? void 0 : l.country) &&
                I.some(function (t) {
                  if (t.countries.includes(l.country))
                    return (e = t.region), !0;
                }),
                r(e);
            }
          },
          [r, l, u]
        ),
        [a, u]
      );
    }
    var M = n(39),
      D = n(55),
      A = function (e, t) {
        return Object(c.useCallback)(
          y()(
            v.a.mark(function a() {
              var r;
              return v.a.wrap(function (a) {
                for (;;)
                  switch ((a.prev = a.next)) {
                    case 0:
                      return (
                        (r = {}),
                        (a.next = 3),
                        Promise.all([n.e(1), n.e(203)])
                          .then(n.bind(null, 1745))
                          .then(
                            (function () {
                              var a = y()(
                                v.a.mark(function a(i) {
                                  var c, s, l, u, d, f, m;
                                  return v.a.wrap(
                                    function (a) {
                                      for (;;)
                                        switch ((a.prev = a.next)) {
                                          case 0:
                                            (c = null),
                                              (a.t0 = e),
                                              (a.next =
                                                a.t0 ===
                                                D.a.MaturityAssessmentReport
                                                  ? 4
                                                  : a.t0 ===
                                                    D.a.RemoteReadinessResult
                                                  ? 10
                                                  : a.t0 ===
                                                    D.a.EngineeringManagerReport
                                                  ? 16
                                                  : 22);
                                            break;
                                          case 4:
                                            return (
                                              (a.next = 6),
                                              Promise.all([
                                                n.e(0),
                                                n.e(1),
                                                n.e(2),
                                                n.e(63),
                                                n.e(205),
                                              ]).then(n.bind(null, 2283))
                                            );
                                          case 6:
                                            return (
                                              (s = a.sent),
                                              (l = s.default),
                                              (c = l),
                                              a.abrupt("break", 22)
                                            );
                                          case 10:
                                            return (
                                              (a.next = 12),
                                              Promise.all([
                                                n.e(0),
                                                n.e(1),
                                                n.e(2),
                                                n.e(206),
                                              ]).then(n.bind(null, 2280))
                                            );
                                          case 12:
                                            return (
                                              (u = a.sent),
                                              (d = u.default),
                                              (c = d),
                                              a.abrupt("break", 22)
                                            );
                                          case 16:
                                            return (
                                              (a.next = 18),
                                              Promise.all([
                                                n.e(0),
                                                n.e(1),
                                                n.e(2),
                                                n.e(63),
                                                n.e(204),
                                              ]).then(n.bind(null, 2279))
                                            );
                                          case 18:
                                            return (
                                              (f = a.sent),
                                              (m = f.default),
                                              (c = m),
                                              a.abrupt("break", 22)
                                            );
                                          case 22:
                                            return (
                                              (a.prev = 22),
                                              (a.next = 25),
                                              i
                                                .pdf({
                                                  initialValue:
                                                    o.a.createElement(c, t),
                                                })
                                                .toBlob()
                                            );
                                          case 25:
                                            (r = a.sent), (a.next = 32);
                                            break;
                                          case 28:
                                            throw (
                                              ((a.prev = 28),
                                              (a.t1 = a.catch(22)),
                                              M.a.error(
                                                "Error creating a PDF",
                                                { error: a.t1 }
                                              ),
                                              a.t1)
                                            );
                                          case 32:
                                            return a.abrupt("return", r);
                                          case 33:
                                          case "end":
                                            return a.stop();
                                        }
                                    },
                                    a,
                                    null,
                                    [[22, 28]]
                                  );
                                })
                              );
                              return function () {
                                return a.apply(this, arguments);
                              };
                            })()
                          )
                      );
                    case 3:
                      return a.abrupt("return", r);
                    case 4:
                    case "end":
                      return a.stop();
                  }
              }, a);
            })
          ),
          [e, t]
        );
      },
      U = n(115),
      z = n(40),
      q = n.n(z),
      V = [
        "click",
        "keypress",
        "keydown",
        "load",
        "mousemove",
        "scroll",
        "touchmove",
        "touchstart",
      ];
    function B(e) {
      var t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : V,
        n = Object(c.useState)(!1),
        a = i()(n, 2),
        r = a[0],
        o = a[1],
        s = Object(c.useRef)(null);
      Object(c.useEffect)(
        function () {
          return (
            (s.current = setTimeout(function () {
              return o(!0);
            }, e)),
            function () {
              return clearTimeout(s.current);
            }
          );
        },
        [e, s]
      );
      var l = Object(c.useCallback)(
        q()(function () {
          o(!1),
            clearTimeout(s.current),
            (s.current = setTimeout(function () {
              return o(!0);
            }, e));
        }, 300),
        [o, s]
      );
      return (
        Object(c.useEffect)(
          function () {
            return (
              t.forEach(function (e) {
                document.addEventListener(e, l);
              }),
              function () {
                return t.forEach(function (e) {
                  document.removeEventListener(e, l);
                });
              }
            );
          },
          [t, l]
        ),
        [r]
      );
    }
    var G = n(124),
      F = n(88),
      H = (n(24), n(12)),
      W = n(79);
    function K(e, t) {
      var n =
          arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        a = n.preventSurpass,
        r = void 0 !== a && a,
        o = n.defaultDisplay,
        s = void 0 === o ? "block" : o,
        l = Object(c.useRef)(
          f()(Array(e.length)).map(function () {
            return Object(c.createRef)();
          })
        ),
        u = Object(W.b)(
          _()({}, "(min-width: ".concat(H.b.DESKTOP, ")"), !0),
          !1
        ),
        d = Object(c.useState)(0),
        m = i()(d, 2),
        p = m[0],
        b = m[1];
      return (
        Object(c.useEffect)(
          function () {
            var n,
              a,
              c,
              o = function (e) {
                return l.current[e];
              },
              d = function (e) {
                return e.current ? e.current.getBoundingClientRect().height : 0;
              };
            if (
              (l.current.map(function (e) {
                return (e.current.style.display = s);
              }),
              b(0),
              u)
            ) {
              (a = (n = i()(t, 2))[0]), (c = n[1]);
              for (
                var f = e.length - 1;
                f >= 0 && d(c) - d(a) > (r ? d(o(f)) : 0);

              )
                (o(f).current.style.display = "none"),
                  b(function (e) {
                    return e + 1;
                  }),
                  f--;
            }
          },
          [s, u, e.length, r, t]
        ),
        [l, p]
      );
    }
    function Y(e, t) {
      var n = Object(c.useRef)(null),
        a = Object(c.useCallback)(
          function (t) {
            var a;
            (null !== (a = n.current) &&
              void 0 !== a &&
              a.contains(t.target)) ||
              (e && e());
          },
          [e, n]
        );
      return (
        Object(c.useEffect)(
          function () {
            var e = (null == t ? void 0 : t.current) || document.body;
            return (
              e.addEventListener("mousedown", a),
              function () {
                return e.removeEventListener("mousedown", a);
              }
            );
          },
          [a, t]
        ),
        n
      );
    }
    var Q = n(108);
    function J(e, t) {
      var n = Object(c.useState)(t),
        a = i()(n, 2),
        r = a[0],
        o = a[1];
      return (
        Object(c.useEffect)(
          function () {
            var t = new URLSearchParams(location.search).get(e);
            t && o(t);
          },
          [e]
        ),
        r
      );
    }
    function X(e, t) {
      var n = Object(c.useState)(""),
        a = i()(n, 2),
        r = a[0],
        o = a[1],
        s = Object(c.useState)(!1),
        l = i()(s, 2),
        u = l[0],
        d = l[1],
        f = Object(c.useState)(k.a.INITIAL),
        m = i()(f, 2),
        p = m[0],
        b = m[1];
      return (
        Object(c.useEffect)(
          function () {
            if (t) {
              var n = new URLSearchParams(window.location.search).get("qid");
              o(
                "https://"
                  .concat(e, "/export/quiz-report-json?answers_list_key=")
                  .concat(n)
              );
            }
          },
          [e, t]
        ),
        Object(c.useEffect)(
          function () {
            if (r) {
              var e = Object(L.b)(r);
              b(k.a.LOADING),
                e.subscribe(function (e, t) {
                  b(t), t === k.a.SUCCESS && d(e);
                });
            }
          },
          [r]
        ),
        [u, p]
      );
    }
    n(121), n(36), n(92);
    var Z = n(200),
      $ = n.n(Z),
      ee = function () {
        var e = function () {},
          t = 0,
          n = function () {
            var n,
              a,
              r,
              i,
              c,
              o,
              s,
              l,
              u =
                ((o =
                  (null === (n = document.documentElement) || void 0 === n
                    ? void 0
                    : n.scrollTop) ||
                  (null === (a = document.body) || void 0 === a
                    ? void 0
                    : a.scrollTop)),
                (s =
                  (null === (r = document.documentElement) || void 0 === r
                    ? void 0
                    : r.scrollHeight) ||
                  (null === (i = document.body) || void 0 === i
                    ? void 0
                    : i.scrollHeight)) <=
                (l =
                  null === (c = document.documentElement) || void 0 === c
                    ? void 0
                    : c.clientHeight)
                  ? 100
                  : Math.round((o / (s - l)) * 100));
            e(u, t), (t = u);
          };
        return (
          document.addEventListener("scroll", n),
          {
            onChange: function (t) {
              e = t;
            },
            clean: function () {
              document.removeEventListener("scroll", n);
            },
          }
        );
      },
      te = function (e, t) {
        var n = o.a.useRef({
            onFinalLevelReached: e,
            levels: t,
            currentLevel: 0,
          }),
          a = function () {
            n.current.currentLevel > 0 &&
              n.current.onFinalLevelReached(n.current.currentLevel);
          };
        o.a.useEffect(function () {
          var e = (function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : [10, 25, 50, 75, 90, 100],
              t = ee(),
              n = e,
              a = function (e) {
                return function (t) {
                  var a = n.filter(function (e) {
                    return t >= e - 1;
                  });
                  a.length &&
                    (a.forEach(function (t) {
                      return e(t);
                    }),
                    (n = $.a.apply(void 0, [n].concat(f()(a)))));
                };
              };
            return {
              onLevelReached: function (e) {
                t.onChange(a(e));
              },
              clean: function () {
                t.clean();
              },
            };
          })(n.current.levels);
          return (
            window.addEventListener("beforeunload", a, !1),
            e.onLevelReached(function (e) {
              n.current.currentLevel = e;
            }),
            function () {
              e.clean(), window.removeEventListener("beforeunload", a);
            }
          );
        }, []);
      };
    function ne(e, t) {
      var n,
        a = Object.keys(e);
      return (
        Object.getOwnPropertySymbols &&
          ((n = Object.getOwnPropertySymbols(e)),
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
          a.push.apply(a, n)),
        a
      );
    }
    function ae(e) {
      var t, n;
      for (t = 1; t < arguments.length; t++)
        (n = null != arguments[t] ? arguments[t] : {}),
          t % 2
            ? ne(Object(n), !0).forEach(function (t) {
                _()(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : ne(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
      return e;
    }
    var re = function (e, t) {
      return ae(ae({}, e), t);
    };
    function ie() {
      var e =
        arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return Object(c.useReducer)(re, e);
    }
    function ce(e) {
      var t = Object(c.useRef)(null),
        n = Object(c.useState)(0),
        a = i()(n, 2),
        r = a[0],
        o = a[1],
        s = Object(c.useState)(!0),
        l = i()(s, 2),
        u = l[0],
        d = l[1],
        f = Object(c.useCallback)(
          function () {
            var n = t.current,
              a = n.firstChild,
              r = n.scrollHeight,
              i = getComputedStyle(a),
              c = i.marginTop,
              o = i.marginBottom,
              s = a.offsetHeight + parseInt(c) + parseInt(o);
            return Math.ceil(r / s) >= e + 1;
          },
          [e]
        );
      return (
        Object(c.useEffect)(
          function () {
            var e,
              n = t.current.lastChild;
            if (n) {
              if (((n.style.display = ""), !f()))
                return (n.style.display = "none"), void d(!1);
              for (var a = 0; f() && a < 50; ) {
                if ((e = t.current.childNodes).length > 2) {
                  var r = e[e.length - 2];
                  t.current.removeChild(r);
                }
                a++, o(a);
              }
              d(!1);
            }
          },
          [f, e]
        ),
        { containerRef: t, loading: u, removedCount: r }
      );
    }
    var oe = n(187),
      se = n.n(oe);
    function le(e, t, n) {
      var a;
      return (
        window.pageYOffset >
        (null === (a = e || t) || void 0 === a ? void 0 : a.offsetTop) - n
      );
    }
    function ue(e, t) {
      var n = t || {},
        a = n.activationOffset,
        r = void 0 === a ? 0 : a,
        o = n.throttleInterval,
        s = void 0 === o ? 300 : o,
        l = n.controlRef,
        u = void 0 === l ? null : l,
        d = n.probeFn,
        f = void 0 === d ? le : d,
        m = Object(c.useState)(!1),
        p = i()(m, 2),
        b = p[0],
        g = p[1],
        v = Object(c.useCallback)(
          se()(function () {
            var t = f(
              null == u ? void 0 : u.current,
              null == e ? void 0 : e.current,
              r
            );
            g(t);
          }, s),
          [e, u, r, f]
        );
      return (
        Object(c.useEffect)(
          function () {
            var e;
            v();
            var t =
              null !== (e = null == u ? void 0 : u.current) && void 0 !== e
                ? e
                : window;
            return (
              t.addEventListener("scroll", v),
              function () {
                return t.removeEventListener("scroll", v);
              }
            );
          },
          [v, u]
        ),
        b
      );
    }
    function de(e) {
      var t = Object(c.useState)(e),
        n = i()(t, 2),
        a = n[0],
        r = n[1],
        o = Object(c.useCallback)(
          function (e) {
            r("boolean" == typeof e ? e : !a);
          },
          [a]
        );
      return [a, o];
    }
    var fe = n(28);
    function me() {
      var e =
          arguments.length > 0 && void 0 !== arguments[0]
            ? arguments[0]
            : "scroll_depth",
        t =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : "scroll_distance_percentage",
        n = Object(c.useRef)(0);
      Object(c.useEffect)(
        function () {
          var e = function () {
            var e = document.documentElement,
              t = document.body,
              a = e.scrollTop || t.scrollTop,
              r = e.scrollHeight || t.scrollHeight,
              i = e.clientHeight,
              c = Math.floor((a / (r - i)) * 100);
            c > n.current && (n.current = c);
          };
          return (
            window.addEventListener("scroll", e, !1),
            function () {
              return window.removeEventListener("scroll", e);
            }
          );
        },
        [n, e]
      ),
        Object(c.useEffect)(
          function () {
            var a = function () {
              Object(fe.d)(e, t, void 0, {
                value: n.current,
                transport: "beacon",
              });
            };
            return (
              window.addEventListener("beforeunload", a, !1),
              function () {
                return window.removeEventListener("beforeunload", a);
              }
            );
          },
          [e, t, n]
        );
    }
    function pe() {
      var e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
        t = arguments.length > 1 ? arguments[1] : void 0,
        n = e.filter(function (e) {
          return e.name === t;
        }),
        a = i()(n, 1),
        r = a[0];
      return r ? r.variant : null;
    }
    function be() {
      var e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 100,
        t = "object" == typeof window,
        n = Object(c.useCallback)(
          function () {
            return {
              width: t ? window.innerWidth : void 0,
              height: t ? window.innerHeight : void 0,
            };
          },
          [t]
        ),
        a = Object(c.useState)(n),
        r = i()(a, 2),
        o = r[0],
        s = r[1];
      return (
        Object(c.useEffect)(
          function () {
            if (!t) return !1;
            var a = q()(function () {
              return s(n());
            }, e);
            return (
              window.addEventListener("resize", a),
              function () {
                window.removeEventListener("resize", a);
              }
            );
          },
          [e, t, n]
        ),
        o
      );
    }
    function ge() {
      var e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 100,
        t = "object" == typeof window,
        n = Object(c.useCallback)(
          function () {
            return t ? window.innerWidth : void 0;
          },
          [t]
        ),
        a = Object(c.useState)(n),
        r = i()(a, 2),
        o = r[0],
        s = r[1];
      return (
        Object(c.useEffect)(
          function () {
            if (!t) return !1;
            var a = q()(function () {
              return s(n());
            }, e);
            return (
              window.addEventListener("resize", a),
              function () {
                window.removeEventListener("resize", a);
              }
            );
          },
          [e, t, n]
        ),
        o
      );
    }
    var ve = n(95),
      he = n.n(ve),
      ye = function (e, t) {
        return function (n) {
          var a = "toggle";
          he()(n) || (a = n ? "add" : "remove"), e.classList[a](t);
        };
      };
    function Ee(e, t) {
      return (
        Object(c.useEffect)(
          function () {
            ye(document.body, t)(e);
          },
          [e, t]
        ),
        function () {
          return document.body.classList.remove(t);
        }
      );
    }
  },
  100: function (e, t, n) {
    "use strict";
    n(27), n(33);
    var a = n(0),
      r = n.n(a),
      i = n(11),
      c = n(61);
    t.a = function () {
      if (!Object(i.a)()) return r.a.createElement(c.a, null);
      var e = r.a.lazy(function () {
          return n.e(202).then(n.bind(null, 246));
        }),
        t = r.a.lazy(function () {
          return n.e(201).then(n.bind(null, 247));
        });
      return r.a.createElement(
        r.a.Fragment,
        null,
        r.a.createElement(
          r.a.Suspense,
          { fallback: r.a.createElement(c.a, null) },
          r.a.createElement(e, null)
        ),
        r.a.createElement(
          r.a.Suspense,
          { fallback: r.a.createElement(c.a, null) },
          r.a.createElement(t, null)
        )
      );
    };
  },
  101: function (e, t, n) {
    "use strict";
    n(44), n(73);
    var a = n(2),
      r = n.n(a),
      i = n(1),
      c = n.n(i),
      o = n(0),
      s = n.n(o),
      l = n(12),
      u = n(21),
      d = n(53),
      f = n(113),
      m = n(127),
      p = n(10),
      b = n(86),
      g = (n(19), n(17), n(14), n(25), n(26), n(20), n(15), n(4)),
      v = n.n(g),
      h = (n(9), n(7)),
      y = n.n(h),
      E = function (e) {
        var t = e.body,
          n = e.delay,
          a = void 0 === n ? 0 : n,
          r = y()(e, ["body", "delay"]),
          i = function () {
            var e = document.createElement("script");
            for (var n in ((e.text = t), r)) e[n] = r[n];
            document.body.appendChild(e);
          };
        return (
          Object(o.useEffect)(function () {
            return a ? setTimeout(i, a) : i();
          }, []),
          null
        );
      },
      _ =
        (n(23),
        function (e) {
          var t = e.baseUrl,
            n = e.withCredentials,
            a = e.jsClientUrl,
            r = e.data,
            i = void 0 !== r && r;
          return "\n  window.onAppinfoLoad = function () {\n    window.appinfo.grab('"
            .concat(t, "', {\n      data: ")
            .concat(
              JSON.stringify(
                i
                  ? (function (e) {
                      return {
                        lp_skill: e.lpSkill,
                        lp_skill_title: e.lpSkillTitle,
                        lp_skill_role: e.lpSkillRole,
                      };
                    })(i)
                  : {}
              ),
              ",\n      withCredentials: "
            )
            .concat(
              n,
              "\n    });\n  };\n  (function() {\n    var d = document, s = d.createElement('script');\n    s.src = '"
            )
            .concat(
              a,
              "';\n    s.setAttribute('data-timestamp', +new Date());\n    (d.head || d.body).appendChild(s);\n  })();\n"
            );
        }),
      O = n(37),
      j = n.n(O),
      w = '\nSentry.onLoad(function() {\n  Sentry.init({\n    release: "'
        .concat(m.codeVersion, '",\n    environment: "')
        .concat(u.appEnv, '",\n    attachStacktrace: true\n  });\n});\n'),
      S = function () {
        return s.a.createElement(
          j.a,
          null,
          s.a.createElement("script", {
            src: "https://js.sentry-cdn.com/".concat(
              u.sentryPublicKey,
              ".min.js"
            ),
            crossOrigin: "anonymous",
            "data-lazy": "no",
            onLoad: w,
          })
        );
      },
      k = function (e) {
        var t = e.portalId,
          n = e.delay;
        return s.a.createElement(
          s.a.Fragment,
          null,
          s.a.createElement(E, {
            src: "//js.hs-scripts.com/".concat(t, ".js"),
            delay: n,
          }),
          s.a.createElement(E, {
            body: "var _hsq = window._hsq = window._hsq || [];",
          })
        );
      },
      N = function (e) {
        var t,
          n,
          a = e.delay,
          r = y()(e, ["delay"]);
        return s.a.createElement(E, {
          body:
            ((t = r),
            (n = t.pixelId),
            "\n  !function(f,b,e,v,n,t,s)\n  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?\n  n.callMethod.apply(n,arguments):n.queue.push(arguments)};\n  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';\n  n.queue=[];t=b.createElement(e);t.async=!0;\n  t.src=v;s=b.getElementsByTagName(e)[0];\n  s.parentNode.insertBefore(t,s)}(window,document,'script',\n  'https://connect.facebook.net/en_US/fbevents.js');\n\n  fbq('init', '".concat(
              n,
              "');\n  fbq('track', 'ViewContent');\n"
            )),
          delay: a,
        });
      },
      C = function (e) {
        var t,
          n,
          a,
          r = e.delay,
          i = y()(e, ["delay"]);
        return s.a.createElement(E, {
          body:
            ((t = i),
            (n = t.id),
            (a = t.envGetParams),
            "\n  (function(w,d,s,l,i,k){\n    w[l]=w[l]||[];\n    w[l].push({\n      'gtm.start': new Date().getTime(),\n      event:'gtm.js'\n    });\n    var f=d.getElementsByTagName(s)[0],\n        j=d.createElement(s),\n        dl=l!='dataLayer'?'&l='+l:'';\n    j.async=true;\n    j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl+k;\n    f.parentNode.insertBefore(j,f);\n  })(window,document,'script','dataLayer','"
              .concat(n, "','")
              .concat(a, "');\n")),
          delay: r,
        });
      },
      P = (n(62), n(27), n(36), n(106), n(70), n(65)),
      x = n(85);
    function L(e, t) {
      var n,
        a = Object.keys(e);
      return (
        Object.getOwnPropertySymbols &&
          ((n = Object.getOwnPropertySymbols(e)),
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
          a.push.apply(a, n)),
        a
      );
    }
    n(94), n(51);
    var T = function (e) {
        var t,
          n,
          a,
          r,
          i,
          c,
          o,
          s,
          l = e.orgKey,
          u = e.platformSessionUrl,
          d = e.chameleonExperiments;
        (t = l),
          (window._fs_debug = !1),
          (window._fs_host = "www.fullstory.com"),
          (window._fs_org = t),
          (n = window),
          (a = document),
          (r = "script"),
          (i = "user"),
          ((o = n.FS =
            function (e, t) {
              o.q ? o.q.push([e, t]) : o._api(e, t);
            }).q = []),
          ((c = a.createElement(r)).async = 1),
          (c.src = "https://" + _fs_host + "/s/fs.js"),
          (s = a.getElementsByTagName(r)[0]).parentNode.insertBefore(c, s),
          (o.identify = function (e, t) {
            o(i, { uid: e }), t && o(i, t);
          }),
          (o.setUserVars = function (e) {
            FS(i, e);
          }),
          (o.identifyAccount = function (e, t) {
            (c = "account"), ((t = t || {}).acctId = e), FS(c, t);
          }),
          (o.clearUserCookie = function (e, t) {
            for (
              e = a.domain;
              (a.cookie =
                "fs_uid=;domain=" + e + ";path=/;expires=" + new Date(0)),
                !((t = e.indexOf(".")) < 0);

            )
              e = e.slice(t + 1);
          }),
          Object(x.a)(u, function (e) {
            var t = (function (e) {
              for (
                var t,
                  n,
                  a,
                  r,
                  i = { chameleonUuid_str: Object(P.a)("chameleon_identity") },
                  c = 0;
                c < e.length;
                c++
              )
                (n = (t = e[c]).name),
                  (a = t.variant),
                  (i[
                    ((r = n),
                    r.replace(/(_[a-z])/gi, function (e) {
                      return e.replace("_", "").toUpperCase();
                    }) + "_str")
                  ] = a);
              return i;
            })(d);
            e
              ? window.FS.identify(
                  e.role_id,
                  (function (e) {
                    var t, n;
                    for (t = 1; t < arguments.length; t++)
                      (n = null != arguments[t] ? arguments[t] : {}),
                        t % 2
                          ? L(Object(n), !0).forEach(function (t) {
                              v()(e, t, n[t]);
                            })
                          : Object.getOwnPropertyDescriptors
                          ? Object.defineProperties(
                              e,
                              Object.getOwnPropertyDescriptors(n)
                            )
                          : L(Object(n)).forEach(function (t) {
                              Object.defineProperty(
                                e,
                                t,
                                Object.getOwnPropertyDescriptor(n, t)
                              );
                            });
                    return e;
                  })(
                    {
                      displayName: e.full_name,
                      email: e.email,
                      role: e.role_type,
                    },
                    t
                  )
                )
              : window.FS.setUserVars(t);
          });
      },
      I = function () {
        return JSON.parse(localStorage.getItem("toptal_fullstory_enabled"));
      },
      R = n(28),
      M = ["Home", "SEO Skill Pages", "Vertical Landing Page", "Enterprise"],
      D = function (e) {
        var t = e.delay,
          n = e.group;
        return M.includes(n)
          ? s.a.createElement(E, {
              body: "\n(function (c, p, d, u, id, i) {\n  id = ''; // Optional Custom ID for user in your system\n  u = 'https://tracking.g2crowd.com/attribution_tracking/conversions/' + c + '.js?p=' + encodeURI(p) + '&e=' + id;\n  i = document.createElement('script');\n  i.type = 'application/javascript';\n  i.async = true;\n  i.src = u;\n  d.getElementsByTagName('head')[0].appendChild(i);\n  }(\"4822\", document.location.href, document));\n",
              delay: t,
            })
          : null;
      },
      A = n(82),
      U = ["Skill pages", "SEO Skill Pages", "City skill"],
      z = ["/django", "/designers/sketch"];
    function q(e, t) {
      var n,
        a = Object.keys(e);
      return (
        Object.getOwnPropertySymbols &&
          ((n = Object.getOwnPropertySymbols(e)),
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
          a.push.apply(a, n)),
        a
      );
    }
    var V = function (e) {
        var t = e.appinfoSettings,
          n = e.hubspotSettings,
          a = e.facebookSettings,
          i = e.fullstorySettings,
          l = e.googleAnalyticsSettings,
          u = e.googleTagManagerSettings,
          d = e.trackingAllowed,
          f = e.renderProductionOnlyScripts,
          m = e.chameleonExperiments,
          p = e.platformSessionUrl,
          b = e.platformReferrersUrl,
          g = e.publicUrl,
          h = e.codeVersions,
          y = e.track15SecondsRead,
          O = void 0 === y || y,
          j = l.group,
          w = (function (e) {
            if (!e || "object" != typeof e) return 0;
            var t = e.publicUrl,
              n = e.group;
            if (!t || !n) return 0;
            if (!U.includes(n)) return 0;
            var a = Object(A.a)(t);
            return z.includes(a) ? 0 : 15e3;
          })({ publicUrl: g, group: j });
        return (
          Object(o.useEffect)(
            function () {
              var e = l.applicationId,
                t = l.group;
              Object(R.a)({
                applicationId: e,
                group: t,
                chameleonExperiments: m,
                platformSessionUrl: p,
                platformReferrersUrl: b,
                codeVersions: h,
                track15SecondsRead: O,
              });
            },
            [m, l, b, p, h, O]
          ),
          Object(o.useEffect)(
            function () {
              d &&
                i &&
                f &&
                (function (e) {
                  var t = e.orgKey,
                    n = e.rate,
                    a = e.platformSessionUrl,
                    r = e.chameleonExperiments,
                    i = r.filter(function (e) {
                      return "phoenix_fullstory_override" === e.name;
                    }),
                    o = c()(i, 1)[0];
                  if (
                    (o &&
                      "enabled" === o.variant &&
                      T({
                        orgKey: t,
                        platformSessionUrl: a,
                        chameleonExperiments: r,
                      }),
                    null == I())
                  ) {
                    var s = Math.random() <= n;
                    localStorage.setItem(
                      "toptal_fullstory_enabled",
                      s.toString()
                    );
                  }
                  I() &&
                    T({
                      orgKey: t,
                      platformSessionUrl: a,
                      chameleonExperiments: r,
                    });
                })(
                  (function (e) {
                    var t, n;
                    for (t = 1; t < arguments.length; t++)
                      (n = null != arguments[t] ? arguments[t] : {}),
                        t % 2
                          ? q(Object(n), !0).forEach(function (t) {
                              v()(e, t, n[t]);
                            })
                          : Object.getOwnPropertyDescriptors
                          ? Object.defineProperties(
                              e,
                              Object.getOwnPropertyDescriptors(n)
                            )
                          : q(Object(n)).forEach(function (t) {
                              Object.defineProperty(
                                e,
                                t,
                                Object.getOwnPropertyDescriptor(n, t)
                              );
                            });
                    return e;
                  })({ platformSessionUrl: p, chameleonExperiments: m }, i)
                );
            },
            [p, m, i, d, f]
          ),
          s.a.createElement(
            s.a.Fragment,
            null,
            s.a.createElement(E, { body: _(t) }),
            d &&
              s.a.createElement(
                s.a.Fragment,
                null,
                s.a.createElement(S, null),
                s.a.createElement(k, r()({ delay: w }, n)),
                s.a.createElement(N, r()({ delay: w }, a)),
                s.a.createElement(C, r()({ delay: w }, u)),
                s.a.createElement(D, { group: j })
              )
          )
        );
      },
      B = (n(74), n(33), n(13)),
      G = n(69),
      F = n(11);
    var H = function (e) {
        var t = e.fullscreen,
          a = e.join,
          i = e.isWhiteListed,
          l = e.companyEmailValidationsUrl,
          u = e.chameleonExperiments,
          d = e.slug,
          f = t ? "fullscreen" : "join",
          m = (function (e) {
            var t = Object(o.useState)(!0),
              n = c()(t, 2),
              a = n[0],
              r = n[1],
              i = Object(p.n)(6e4),
              s = c()(i, 1)[0],
              l = Object(p.f)(),
              u = c()(l, 2),
              d = u[0],
              f = u[1],
              m = Object(o.useState)(!1),
              b = c()(m, 2),
              g = b[0],
              v = b[1];
            Object(o.useEffect)(function () {
              setTimeout(function () {
                return r(!!Object(P.a)("viewedBounceModal"));
              }, 3e3);
            }, []);
            var h,
              y,
              E = Object(o.useCallback)(
                function () {
                  return function () {
                    a ||
                      (r(!0),
                      v(!0),
                      Object(P.c)("viewedBounceModal", !0, { maxAge: 7776e3 }),
                      Object(R.b)() && Object(R.b)().trackBounceModalView(e));
                  };
                },
                [a, e]
              ),
              _ = Object(o.useCallback)(
                function () {
                  v(!1), f(!1);
                },
                [f]
              );
            return (
              (h = E("time_on_site")),
              (y = Object(o.useCallback)(
                function (e) {
                  e.clientY <= 20 && null === e.relatedTarget && h();
                },
                [h]
              )),
              Object(o.useEffect)(
                function () {
                  if (Object(F.a)())
                    return (
                      document.addEventListener("mouseout", y),
                      function () {
                        return document.removeEventListener("mouseout", y);
                      }
                    );
                },
                [y]
              ),
              Object(o.useEffect)(
                function () {
                  s && E("inactivity")();
                },
                [a, s, E]
              ),
              { visible: g, handleClose: _, isDebug: d }
            );
          })(f),
          b = m.visible,
          g = m.handleClose,
          v = m.isDebug,
          h = Object(o.useMemo)(
            function () {
              return s.a.lazy(function () {
                return "fullscreen" === f
                  ? Promise.all([n.e(0), n.e(198)]).then(n.bind(null, 2281))
                  : n.e(200).then(n.bind(null, 2277));
              });
            },
            [f]
          );
        if (!((i && b) || v)) return null;
        var y = "fullscreen" === f ? t : a;
        return s.a.createElement(
          o.Suspense,
          { fallback: null },
          s.a.createElement(
            h,
            r()(
              {
                open: b || v,
                onClose: g,
                companyEmailValidationsUrl: l,
                chameleonExperiments: u,
                slug: d,
              },
              y
            )
          )
        );
      },
      W = function (e) {
        var t = e.geoTargetUrl,
          n = e.platformSessionUrl,
          a = y()(e, ["geoTargetUrl", "platformSessionUrl"]),
          i = Object(p.j)(t),
          o = c()(i, 2),
          u = o[0],
          d = o[1],
          f = Object(p.d)(n),
          m = c()(f, 1)[0];
        return m !== p.a.LoggedIn && m !== p.a.Loading && Object(B.c)(d)
          ? s.a.createElement(
              G.a,
              { query: "(min-width: ".concat(l.b.DESKTOP, ")") },
              s.a.createElement(
                H,
                r()({}, a, { isWhiteListed: !!u && u.white_listed })
              )
            )
          : null;
      };
    t.a = function (e) {
      var t = e.requestMetadata,
        n = t.vendorScriptsSettings,
        a = t.chameleonExperiments,
        i = t.platformSessionUrl,
        g = t.platformReferrersUrl,
        v = t.geoTargetUrl,
        h = t.companyEmailValidationsUrl,
        y = t.codeVersions.blackfishCodeVersion,
        E = e.bounceModals,
        _ = e.vertical,
        O = e.slug,
        j = e.publicUrl,
        w = e.trackScrollDepth,
        S = e.showCookieBanner,
        k = e.track15SecondsRead,
        N = Object(p.s)(),
        C = Object(o.useState)(null),
        P = c()(C, 2),
        x = P[0],
        L = P[1],
        T = Object(o.useState)(!1),
        I = c()(T, 2),
        M = I[0],
        D = I[1];
      return (
        Object(p.B)(),
        Object(o.useEffect)(
          function () {
            N && (L(N.fullstorySettings), D(Object(d.a)(N.cookiePolicyType)));
          },
          [N]
        ),
        Object(p.g)("click", function (e) {
          if (!e.stopGAPropagation) {
            var t,
              n = (function (e, t) {
                var n =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : 5;
                if (e.closest) return e.closest(t);
                if (e.msMatchesSelector)
                  for (var a = 0, r = e; a < n && r; a++) {
                    if (r.msMatchesSelector(t)) return r;
                    r = r.parentElement;
                  }
                return null;
              })(e.target, "[data-ga-category]");
            if (n) {
              var a = n.dataset,
                r = a.gaCategory,
                i = a.gaEvent,
                c = a.gaLabel;
              if (r && Object(R.b)()) {
                var o =
                  !!(t = n.href) &&
                  !["_blank", "_parent"].includes(n.getAttribute("target"));
                Object(R.d)(r, i, c, {
                  transport: "beacon",
                  event_callback:
                    o &&
                    Object(f.a)(function () {
                      return (window.location = t);
                    }),
                }),
                  o && e.preventDefault(),
                  e.shouldStopGAPropagation && (e.stopGAPropagation = !0);
              }
            }
          }
        }),
        Object(p.v)(function (e) {
          (null == w ? void 0 : w.gaCategory) &&
            Object(R.d)(w.gaCategory, w.gaEvent || "scroll_depth", e, {
              non_interaction: !0,
              transport: "beacon",
            });
        }),
        s.a.createElement(
          s.a.Fragment,
          null,
          N &&
            S &&
            s.a.createElement(
              b.a.Container,
              r()(
                { pageInfo: N },
                {
                  onAccept: function () {
                    return D(!0);
                  },
                }
              )
            ),
          s.a.createElement(
            V,
            r()(
              {
                renderProductionOnlyScripts: [
                  l.a.Production,
                  l.a.Staging,
                ].includes(u.appEnv),
              },
              n,
              {
                fullstorySettings: x,
                trackingAllowed: M,
                publicUrl: j,
                chameleonExperiments: a,
                platformSessionUrl: i,
                platformReferrersUrl: g,
              },
              {
                codeVersions: { blackfish: y, frontier: m.commit },
                track15SecondsRead: k,
              }
            )
          ),
          E &&
            s.a.createElement(
              W,
              r()({}, E, {
                geoTargetUrl: v,
                companyEmailValidationsUrl: h,
                chameleonExperiments: a,
                platformSessionUrl: i,
                vertical: _,
                slug: O,
              })
            )
        )
      );
    };
  },
  102: function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
      return o;
    });
    var a = n(0),
      r = n.n(a),
      i = n(9),
      c = n(42),
      o = (Object(i.j)(c.b), Object(a.createContext)({}));
    t.b = function (e) {
      var t = e.children,
        n = e.sidebarSkillsUrl,
        i = e.kind,
        c = e.topSearch,
        s = Object(a.useMemo)(
          function () {
            return { kind: i, sidebarSkillsUrl: n, topSearch: c };
          },
          [i, n, c]
        );
      return r.a.createElement(o.Provider, { children: t, value: s });
    };
  },
  104: function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
      return s;
    });
    var a = n(2),
      r = n.n(a),
      i = n(0),
      c = n.n(i),
      o = n(80),
      s = function (e) {
        return c.a.createElement("div", r()({}, e, { id: o.a }));
      };
  },
  105: function (e, t, n) {
    "use strict";
    var a = n(2),
      r = n.n(a),
      i = n(7),
      c = n.n(i),
      o = n(0),
      s = n.n(o),
      l = n(3),
      u = n.n(l),
      d =
        (n(209),
        Object(o.forwardRef)(function (e, t) {
          var n = e.children,
            a = e.className,
            i = e.onClick,
            o = e.as,
            l = void 0 === o ? "div" : o,
            u = c()(e, ["children", "className", "onClick", "as"]);
          return s.a.createElement(
            l,
            r()(
              {
                className:
                  (a ? a + " " : "") +
                  "_1QwxFsxm " +
                  ((u && u.className) || ""),
                onClick: i,
                ref: t,
              },
              u
            ),
            n
          );
        }));
    (d.displayName = "Card"),
      (d.propTypes = {
        className: u.a.string,
        onClick: u.a.func,
        as: u.a.string,
        children: u.a.oneOfType([u.a.arrayOf(u.a.node), u.a.node]).isRequired,
      }),
      (t.a = d);
  },
  107: function (e, t, n) {
    "use strict";
    var a = n(6),
      r = n.n(a),
      i = n(0),
      c = n.n(i),
      o = n(5),
      s = n.n(o),
      l =
        (n(161),
        {
          "./burger-menu-button.scss": {
            toggle: "GSsufXWr",
            open: "_2K4zc3od",
          },
        });
    t.a = function (e) {
      var t = e.onToggle,
        n = e.open,
        a = e.className,
        o = Object(i.useCallback)(
          function () {
            return t(!n);
          },
          [t, n]
        );
      return c.a.createElement(
        "button",
        {
          type: "button",
          onClick: o,
          "aria-label": "menu",
          className:
            (a ? a + " " : "") +
            r()(s()("toggle", { open: n }), l, {
              handleMissingStyleName: "warn",
            }),
        },
        c.a.createElement("span", null),
        c.a.createElement("span", null),
        c.a.createElement("span", null)
      );
    };
  },
  108: function (e, t, n) {
    "use strict";
    n.d(t, "b", function () {
      return o;
    });
    var a = n(1),
      r = n.n(a),
      i = n(0),
      c = n(84);
    function o() {
      var e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        t = e.shareUrl,
        n = Object(i.useState)(),
        a = r()(n, 2),
        o = a[0],
        s = a[1];
      return (
        Object(i.useEffect)(
          function () {
            Object(c.a)({ shareUrl: t })
              .then(s)
              .catch(function () {});
          },
          [t]
        ),
        o
      );
    }
    t.a = o;
  },
  11: function (e, t, n) {
    "use strict";
    t.a = function () {
      return !0;
    };
  },
  111: function (e, t, n) {
    "use strict";
    n(24);
    var a = n(2),
      r = n.n(a),
      i = n(6),
      c = n.n(i),
      o = n(0),
      s = n.n(o),
      l = n(5),
      u = n.n(l),
      d = (n(9), n(8)),
      f = n(148),
      m = n(157),
      p =
        (n(210),
        {
          "./social-link-list.scss": {
            list: "_2KkykVzB",
            item: "_1ffC2emj",
            link: "yzdVnirF",
            "is-theme-grey": "_1UQKDH6z",
            "is-theme-blue": "_3NypLa63",
            "is-theme-light": "_26W7MbnX",
          },
        }),
      b = { Theme: { Light: "light", Grey: "grey", Blue: "blue" } },
      g = function (e) {
        var t = e.links,
          n = e.theme,
          a = void 0 === n ? b.Theme.Light : n,
          i = e.gaCategory,
          o = e.gaAction;
        return s.a.createElement(
          "ul",
          {
            className: c()(u()("list", Object(d.a)({ theme: a })), p, {
              handleMissingStyleName: "warn",
            }),
          },
          t.map(function (e) {
            var t = e.href,
              n = e.label;
            return s.a.createElement(
              "li",
              { key: t + n, className: "_1ffC2emj" },
              s.a.createElement(
                f.a,
                r()(
                  {
                    className:
                      "yzdVnirF " +
                      ({ href: t, gaCategory: i }.className || ""),
                    "aria-label": n,
                    title: n,
                    target: "_blank",
                    rel: "noreferrer noopener",
                  },
                  { href: t, gaCategory: i },
                  { gaEvent: o, gaLabel: "social_".concat(n, "_button_click") }
                ),
                s.a.createElement(m.a, { type: n, size: "18" })
              )
            );
          })
        );
      };
    (g.Variant = b), (t.a = g);
  },
  1119: function (e, t, n) {
    e.exports = {
      container: "_1WahsURY",
      description: "_1_M0NXug",
      "skill-cards": "_3JEfiilm",
      "skill-list": "_3rvCNUFV",
    };
  },
  112: function (e, t, n) {
    "use strict";
    n(23), n(17), n(269), n(24), n(150);
    var a,
      r = n(7),
      i = n.n(r),
      c = n(30),
      o = n.n(c),
      s = n(1),
      l = n.n(s),
      u = n(2),
      d = n.n(u),
      f = n(4),
      m = n.n(f),
      p = n(6),
      b = n.n(p),
      g = n(0),
      v = n.n(g),
      h = n(5),
      y = n.n(h),
      E = (n(158), n(9), n(22)),
      _ = n(8),
      O = n(12),
      j = n(10),
      w = n(173),
      S = n(32),
      k = n(11),
      N = n(87),
      C = n(69),
      P = n(125),
      x = n(162),
      L = n(107),
      T = n(49),
      I = n(178),
      R = n(29),
      M = (n(205), n(120)),
      D = n.n(M),
      A = Object.freeze({ DESKTOP_XLARGE: D.a.desktopXLarge || 0 }),
      U =
        (n(180),
        {
          "./navbar.scss": {
            navbar: "CwHwCIsY",
            "has-persistent-cta": "_1eu1-118",
            "is-spacious": "_2AUNzqse",
            "logo-container": "_2WQ1bk3l",
            navigation: "_2hn_0aiE",
            "is-persistent": "_2j8Bi4Lq",
            item: "_3Tzn-Ksn",
            "actions-container": "_3JWeZNpb",
            "links-container": "_2V8cVnTd",
            "is-open": "_3xz6sTpw",
            "nav-link": "_3WOR0P94",
            selected: "_3MIBGvCT",
            "action-link": "_2716rq5F",
            "is-text": "OPGINcUC",
            toggle: "_2zORpOH1",
            "sidebar-toggle": "_1g37weM4",
            "navbar-content-open": "irsyFUit",
            container: "pVDj25o4",
            "is-dark": "_3rx4E4Wz",
            "is-sticky": "_2CLR06xf",
            logo: "_3l7e8OkS",
            "logo-title": "_3wva0pDs",
            bar: "_1TkDKt3Q",
          },
        }),
      z = { White: "white", Highlight: "highlight", Blue: "blue" },
      q =
        ((a = {}),
        m()(a, z.White, R.b.Variant.Theme.SecondaryFlat),
        m()(a, z.Highlight, R.b.Variant.Theme.PrimaryGreen),
        m()(a, z.Blue, R.b.Variant.Theme.PrimaryBlue),
        a),
      V = {
        Dark: "dark",
        Logo: { Layout: T.a.Variant.Layout, Type: T.a.Variant.Type },
      },
      B = function (e) {
        var t = e.open,
          n = e.onToggle;
        return Object(j.p)()
          ? null
          : v.a.createElement(
              L.a,
              d()(
                { open: t, onToggle: n },
                {
                  className:
                    "_1g37weM4 " + ({ open: t, onToggle: n }.className || ""),
                }
              )
            );
      },
      G = function (e) {
        var t = e.href,
          n = e.label,
          a = e.style,
          r = e.gaCategory,
          i = e.gaEvent,
          c = e.gaLabel,
          o = e.inlineStyles,
          s = e.open,
          l = !a || a === z.White,
          u =
            l && s
              ? R.b.Variant.Theme.SecondaryGrey
              : q[a] || R.b.Variant.Theme.SecondaryFlat;
        return v.a.createElement(
          R.b,
          d()(
            { size: R.b.Variant.Size.Medium, style: o },
            {
              href: t,
              label: n,
              theme: u,
              gaCategory: r,
              gaEvent: i,
              gaLabel: c,
            },
            "Log In" === n && { rel: "nofollow" },
            {
              className:
                b()(y()("action-link", { "is-text": l && !s }), U, {
                  handleMissingStyleName: "warn",
                }) +
                " " +
                ({
                  href: t,
                  label: n,
                  theme: u,
                  gaCategory: r,
                  gaEvent: i,
                  gaLabel: c,
                }.className || "") +
                ("Log In" === n
                  ? " " +
                    (("Log In" === n && { rel: "nofollow" }).className || "")
                  : ""),
            }
          )
        );
      },
      F = function (e) {
        var t = e.links,
          n = e.className,
          a = e.type,
          r = void 0 === a ? "" : a,
          i = e.isLoggedIn,
          c = e.isLoggedOut,
          o = e.open,
          s =
            "login-cta" === r
              ? t.filter(function (e) {
                  var t = e.isAuthAgnostic,
                    n = e.forLoggedIn;
                  return t || (i && n) || (c && !n);
                })
              : t;
        return s.length
          ? v.a.createElement(
              "ul",
              { className: (n ? n + " " : "") + "_2hn_0aiE" },
              s.map(function (e) {
                return v.a.createElement(
                  "li",
                  { key: e.href, className: "_3Tzn-Ksn" },
                  v.a.createElement(G, d()({}, e, { open: o }))
                );
              })
            )
          : null;
      },
      H = function (e) {
        var t = e.links,
          n = e.selected,
          a = void 0 === n ? "" : n,
          r = e.onClick;
        return v.a.createElement(
          "div",
          { className: "_2V8cVnTd" },
          t.map(function (e) {
            var t = e.label,
              n = e.href,
              i = e.gaCategory,
              c = e.gaEvent,
              o = e.gaLabel;
            return v.a.createElement(
              "a",
              d()(
                {
                  key: n,
                  onClick: function (e) {
                    n.startsWith("#") && r && r(e);
                  },
                },
                Object(S.b)(i, c, o),
                { href: n },
                {
                  className:
                    b()(
                      y()("nav-link", {
                        selected: n.substring(n.lastIndexOf("/") + 1) === a,
                      }),
                      U,
                      { handleMissingStyleName: "warn" }
                    ) +
                    " " +
                    ((Object(S.b)(i, c, o) && Object(S.b)(i, c, o).className) ||
                      "") +
                    " " +
                    ({ href: n }.className || ""),
                }
              ),
              t
            );
          })
        );
      },
      W = function (e) {
        var t = e.navigationLinks,
          n = e.ctaPersistentLinks,
          a = e.ctaLinks,
          r = e.selected,
          i = e.open,
          c = e.isLoggedIn,
          o = e.isLoggedOut,
          s = e.onItemClick,
          l = e.upperBreakpoint,
          u = Object(g.useMemo)(
            function () {
              return function (e) {
                return v.a.createElement(
                  F,
                  d()(
                    { isLoggedIn: c, isLoggedOut: o },
                    {
                      links: e || a,
                      type: "login-cta",
                      className:
                        "_3JWeZNpb " +
                        ({ isLoggedIn: c, isLoggedOut: o }.className || "") +
                        " " +
                        ({ open: i }.className || ""),
                    },
                    { open: i }
                  )
                );
              };
            },
            [a, c, o, i]
          ),
          f = Object(g.useMemo)(
            function () {
              return u();
            },
            [u]
          ),
          m = Object(g.useMemo)(
            function () {
              return u(
                a.filter(function (e) {
                  return !e.preserveWhenCollapsed;
                })
              );
            },
            [u, a]
          ),
          p = i || !n.length;
        return v.a.createElement(
          v.a.Fragment,
          null,
          v.a.createElement(H, { links: t, selected: r, onClick: s }),
          p
            ? f
            : v.a.createElement(
                v.a.Fragment,
                null,
                v.a.createElement(
                  C.a,
                  { defaultMatch: !0, query: Object(j.c)(O.b.TABLET, l) },
                  v.a.createElement(F, { links: n, className: "_2j8Bi4Lq" }),
                  m
                ),
                v.a.createElement(C.a, { query: Object(j.c)(l) }, f)
              )
        );
      },
      K = function (e) {
        var t = e.logo,
          n = e.onItemClick,
          a = e.navbarData,
          r = e.className,
          c = e.sticky,
          s = e.variant,
          u = e.selected,
          f = void 0 === u ? "" : u,
          m = e.platformSessionUrl,
          p = e.sidebar,
          h = e.forcedOpen,
          S = e.height,
          C = void 0 === S ? 64 : S,
          R = e.children,
          M = e.upperBreakpoint,
          D = void 0 === M ? O.b.DESKTOP_LARGE : M,
          z = Object(g.useState)(!1),
          q = l()(z, 2),
          G = q[0],
          F = q[1],
          H = a.navigationLinks,
          K = a.ctaLinks,
          Y = a.logoLink,
          Q = a.title,
          J = K.filter(function (e) {
            return e.preserveWhenCollapsed;
          }),
          X = Object(j.d)(m),
          Z = l()(X, 1)[0],
          $ = Object(j.z)(!1),
          ee = l()($, 2),
          te = ee[0],
          ne = ee[1],
          ae = Object(w.a)(-C),
          re = l()(ae, 1)[0],
          ie = Object(g.useCallback)(
            function (e) {
              re(e), F(!1), n && n(e);
            },
            [n, re, F]
          ),
          ce = Object(g.useCallback)(
            function () {
              Object(k.a)() && !Object(N.a)() && ne();
            },
            [ne]
          ),
          oe = Boolean(G || h),
          se = Object(g.useMemo)(
            function () {
              return function (e) {
                return v.a.createElement(
                  W,
                  d()(
                    {
                      upperBreakpoint: D,
                      navigationLinks: H,
                      ctaPersistentLinks: J,
                      ctaLinks: K,
                      selected: e,
                    },
                    {
                      open: oe,
                      isLoggedIn: Z === j.a.LoggedIn,
                      isLoggedOut: Z === j.a.LoggedOut,
                      onItemClick: ie,
                    }
                  )
                );
              };
            },
            [D, Z, oe, H, J, K, ie]
          ),
          le = Object(g.useMemo)(
            function () {
              return function (e, t) {
                return v.a.createElement(
                  v.a.Fragment,
                  null,
                  se(t),
                  R && R({ isOnTop: e, isOpen: G })
                );
              };
            },
            [G, R, se]
          ),
          ue = !![].concat(o()(K), o()(H)).length || !!R,
          de = p || {},
          fe = de.enabled,
          me = i()(de, ["enabled"]);
        return v.a.createElement(
          x.a,
          {
            isSticky: !E.a && c,
            className:
              (r ? r + " " : "") +
              b()(y()("container", Object(_.a)(s)), U, {
                handleMissingStyleName: "warn",
              }),
          },
          function (e) {
            var n = e.isOnTop;
            return v.a.createElement(
              "div",
              {
                className: b()(
                  y()("navbar", {
                    "has-persistent-cta": !!J.length,
                    "is-open": oe,
                    "is-sticky": n && c,
                    "is-spacious": D === A.DESKTOP_XLARGE,
                  }),
                  U,
                  { handleMissingStyleName: "warn" }
                ),
              },
              !!fe &&
                v.a.createElement(
                  v.a.Fragment,
                  null,
                  v.a.createElement(B, { open: te, onToggle: ce }),
                  v.a.createElement(I.a, d()({ isOpen: te, onDismiss: ce }, me))
                ),
              v.a.createElement(
                "div",
                { className: "_2WQ1bk3l" },
                v.a.createElement(
                  T.a,
                  d()(
                    {
                      href: Y.href,
                      title: Y.label,
                      isMonotone: s === V.Dark && !n && !G,
                    },
                    { headline: Q },
                    t
                  )
                )
              ),
              ue &&
                v.a.createElement(L.a, {
                  open: oe,
                  onToggle: F,
                  className: "_2zORpOH1",
                }),
              G
                ? v.a.createElement(
                    P.a,
                    { opacity: 0, className: "irsyFUit" },
                    le(n)
                  )
                : le(n, f)
            );
          }
        );
      };
    (K.hydrationOptions = { defer: !1 }),
      (K.LinkVariant = z),
      (K.Variant = V),
      (K.Breakpoints = A),
      (t.a = K);
  },
  113: function (e, t, n) {
    "use strict";
    t.a = function (e) {
      var t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1e3,
        n = !1,
        a = function () {
          n || ((n = !0), e());
        };
      return setTimeout(a, t), a;
    };
  },
  115: function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
      return d;
    }),
      n.d(t, "b", function () {
        return f;
      }),
      n(24);
    var a = n(30),
      r = n.n(a),
      i = n(1),
      c = n.n(i),
      o = n(40),
      s = n.n(o),
      l = n(0),
      u = n(77),
      d = { Start: 0, Full: 1, NoScroll: null },
      f = function (e) {
        var t = Object(l.useState)(d.NoScroll),
          n = c()(t, 2),
          a = n[0],
          i = n[1],
          o = Object(l.useState)(0),
          f = c()(o, 2),
          m = f[0],
          p = f[1],
          b = Object(l.useRef)(null),
          g = Object(l.useRef)(
            r()(new Array(e)).map(function () {
              return Object(l.createRef)();
            })
          ),
          v = Object(l.useCallback)(
            function (e) {
              if (0 !== m) {
                var t = e / m;
                t <= 0 ? (t = d.Start) : t >= 1 && (t = d.Full), i(t);
              }
            },
            [m, i]
          );
        Object(l.useEffect)(
          function () {
            var e = b.current,
              t = e.scrollWidth,
              n = e.clientWidth;
            p(t - n), v(0);
            var a = s()(function () {
              v(e.scrollLeft);
            }, 50);
            return (
              e.addEventListener("scroll", a),
              function () {
                return e.removeEventListener("scroll", a);
              }
            );
          },
          [p, v]
        );
        var h = Object(l.useCallback)(function (e) {
            !(function (e, t) {
              var n =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : 0;
              Object(u.a)(e, { top: n, left: t });
            })(b.current, e);
          }, []),
          y = Object(l.useCallback)(
            function (e) {
              var t = b.current.scrollLeft;
              return h(t + e);
            },
            [h]
          ),
          E = Object(l.useCallback)(
            function (e) {
              y(-e);
            },
            [y]
          ),
          _ = Object(l.useCallback)(
            function (e) {
              y(e);
            },
            [y]
          ),
          O = Object(l.useCallback)(
            function (e) {
              var t = e.current,
                n = t.clientWidth,
                a = t.offsetLeft,
                r = b.current.offsetWidth - n;
              h(a - r / 2);
            },
            [h]
          );
        return {
          scrollPosition: a,
          containerRef: b,
          itemsRefs: g,
          scrollToXCenter: O,
          scrollToLeft: E,
          scrollToRight: _,
        };
      };
  },
  116: function (e, t, n) {
    "use strict";
    var a = n(2),
      r = n.n(a),
      i = n(7),
      c = n.n(i),
      o = n(6),
      s = n.n(o),
      l = n(0),
      u = n.n(l),
      d = n(3),
      f = n.n(d),
      m = n(5),
      p = n.n(m),
      b = n(9),
      g = n(8),
      v =
        (n(114),
        {
          "./page-section.scss": {
            "is-space-large": "_3LOPUP7d",
            "is-space-medium": "_3DOEOvRI",
            "is-space-none": "_11ZqUWmz",
            section: "_1YibmBYc",
            "force-space": "_1_bvS4sL",
            "is-width-fixed": "_2_32njdU",
          },
        }),
      h = {
        Space: { Large: "large", Medium: "medium", None: "none" },
        Width: { Fixed: "fixed" },
      },
      y = u.a.forwardRef(function (e, t) {
        var n = e.children,
          a = e.className,
          i = e.id,
          o = e.width,
          l = e.space,
          d = void 0 === l ? y.Variant.Space.Large : l,
          f = e.forceSpace,
          m = e.semantic,
          b = e.as,
          h = void 0 === b ? (m ? "section" : "div") : b,
          E = e.style,
          _ =
            (e.role,
            c()(e, [
              "children",
              "className",
              "id",
              "width",
              "space",
              "forceSpace",
              "semantic",
              "as",
              "style",
              "role",
            ]));
        return u.a.createElement(
          h,
          r()({ id: i, style: E, ref: t }, _, {
            className:
              (a ? a + " " : "") +
              s()(
                p()(
                  "section",
                  { "force-space": f },
                  Object(g.a)({ space: d, width: o })
                ),
                v,
                { handleMissingStyleName: "warn" }
              ) +
              " " +
              ((_ && _.className) || ""),
          }),
          n
        );
      });
    (y.displayName = "PageSection"),
      (y.Variant = h),
      (y.propTypes = {
        children: f.a.node.isRequired,
        className: f.a.string,
        id: f.a.string,
        space: Object(b.j)(h.Space),
        width: Object(b.j)(h.Width),
        forceSpace: f.a.bool,
        semantic: f.a.bool,
        as: f.a.oneOf(["div", "section", "footer"]),
        style: f.a.object,
        role: f.a.string,
      }),
      (t.a = y);
  },
  117: function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
      return s;
    }),
      n.d(t, "c", function () {
        return l;
      }),
      n.d(t, "f", function () {
        return u;
      }),
      n.d(t, "d", function () {
        return d;
      }),
      n.d(t, "h", function () {
        return f;
      }),
      n.d(t, "e", function () {
        return m;
      }),
      n.d(t, "j", function () {
        return p;
      }),
      n.d(t, "g", function () {
        return b;
      }),
      n.d(t, "i", function () {
        return g;
      }),
      n.d(t, "b", function () {
        return v;
      }),
      n(23);
    var a = n(54),
      r = n.n(a),
      i = n(32),
      c = n(28),
      o = function (e, t) {
        Object(c.d)(s, l(t), e);
      },
      s = "nav",
      l = function (e) {
        return "hamburger_menu_".concat(e);
      },
      u = function (e, t) {
        o(
          (function (e) {
            return "clicks_".concat(e);
          })(e),
          t
        );
      },
      d = function (e, t) {
        o(
          (function (e) {
            return "clicks_case_study_".concat(e + 1);
          })(e),
          t
        );
      },
      f = function (e, t, n) {
        o(
          (function (e, t) {
            return "trending_".concat(e + 1, "_skill_").concat(r()(t));
          })(e, t),
          n
        );
      },
      m = function (e, t, n, a) {
        o(
          (function (e, t, n) {
            return "in_demand_"
              .concat(e + 1, "_")
              .concat(t, "_")
              .concat(r()(n));
          })(e, t, n),
          a
        );
      },
      p = function (e) {
        o("clicks_talent_video", e);
      },
      b = function (e, t) {
        o(
          (function (e) {
            return "skill_search_".concat(e);
          })(e),
          t
        );
      },
      g = function (e, t) {
        o("skill_picker_".concat(e, "_click"), t);
      },
      v = function (e, t, n) {
        return Object(i.b)(
          s,
          l(n),
          (function (e, t) {
            return "skill_picker_".concat(e, "_").concat(r()(t), "_click");
          })(e, t)
        );
      };
  },
  118: function (e, t, n) {
    e.exports = {
      container: "_3O25N8Wt",
      "is-visual-regression-test": "_2oqWtl8O",
      "sidebar-is-open": "_3qlrr8Ue",
      collapsed: "_2uOUGZ8s",
      collapsing: "_1fjhlsRh",
      expanded: "_3HVRGLKB",
      expanding: "rAcwt06K",
      "fade-in": "_1aay_bin",
    };
  },
  119: function (e, t, n) {
    "use strict";
    var a = n(2),
      r = n.n(a),
      i = n(7),
      c = n.n(i),
      o = n(0),
      s = n.n(o),
      l = n(32),
      u = (n(9), n(43)),
      d = u.a.Variant,
      f = u.a.HtmlElement,
      m = function (e) {
        var t = e.href,
          n = e.label,
          a = e.gaCategory,
          i = e.gaEvent,
          o = e.gaLabel,
          d = e.children,
          m = c()(e, [
            "href",
            "label",
            "gaCategory",
            "gaEvent",
            "gaLabel",
            "children",
          ]);
        return s.a.createElement(
          u.a,
          r()({ as: f.Link }, { href: t }, Object(l.b)(a, i, o), m),
          d || n
        );
      };
    (m.Variant = d), (t.a = m);
  },
  12: function (e, t, n) {
    "use strict";
    n.d(t, "b", function () {
      return u;
    }),
      n.d(t, "g", function () {
        return d;
      }),
      n.d(t, "f", function () {
        return f;
      }),
      n.d(t, "e", function () {
        return m;
      }),
      n.d(t, "c", function () {
        return p;
      }),
      n(205),
      n(72);
    var a = n(4),
      r = n.n(a),
      i = n(50),
      c = n.n(i),
      o = n(41);
    n.d(t, "a", function () {
      return o.a;
    });
    var s,
      l = n(55);
    n.d(t, "d", function () {
      return l.a;
    });
    var u = Object.freeze({
        DESKTOP_LARGE: c.a.desktopLarge || 0,
        DESKTOP: c.a.desktop || 0,
        TABLET: c.a.tablet || 0,
        MOBILE_LARGE: c.a.mobileLarge || 0,
        MOBILE_XLARGE: c.a.mobileXLarge || 0,
        MOBILE: c.a.mobile || 0,
      }),
      d = {
        Designers: "designers",
        Developers: "developers",
        FinanceExperts: "finance_experts",
        ProjectManagers: "project_managers",
        ProductManagers: "product_managers",
        Projects: "projects",
      },
      f =
        ((s = {}),
        r()(s, d.Designers, "Designer"),
        r()(s, d.Developers, "Developer"),
        r()(s, d.FinanceExperts, "Finance Expert"),
        r()(s, d.ProductManagers, "Product Manager"),
        r()(s, d.ProjectManagers, "Project Manager"),
        s),
      m = Object.values(d),
      p = "hiring-guide";
  },
  121: function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
      return u;
    }),
      n(51);
    var a = n(1),
      r = n.n(a),
      i = n(196),
      c = n.n(i),
      o = n(0),
      s = n(22),
      l = n(41),
      u = function (e, t) {
        var n = Object(o.useState)([]),
          a = r()(n, 2),
          i = a[0],
          u = a[1];
        return (
          Object(o.useEffect)(
            function () {
              u(c()(e, t));
            },
            [e, t]
          ),
          l.d || s.a ? e.slice(0, t) : i
        );
      };
  },
  122: function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
      return s;
    }),
      n.d(t, "b", function () {
        return l;
      });
    var a = n(1),
      r = n.n(a),
      i = n(0),
      c = n(83),
      o = n(13),
      s = { Loading: "loading", LoggedIn: "loggedin", LoggedOut: "loggedout" };
    function l(e) {
      var t = Object(i.useState)(s.Loading),
        n = r()(t, 2),
        a = n[0],
        l = n[1];
      return (
        Object(i.useEffect)(
          function () {
            var t = !0;
            return (
              Object(c.a)(e).subscribe(function (e, n) {
                t &&
                  (Object(o.f)(n) && (null == e ? void 0 : e.success)
                    ? l(s.LoggedIn)
                    : Object(o.c)(n) && l(s.LoggedOut));
              }),
              function () {
                return (t = !1);
              }
            );
          },
          [e]
        ),
        [a]
      );
    }
  },
  123: function (e, t, n) {
    var a = n(0);
    function r(e) {
      return a.createElement(
        "svg",
        e,
        a.createElement("path", {
          d: "m.707.707 13.678 13.678-13.678 13.677",
          fill: "none",
          stroke: "#204ecf",
        })
      );
    }
    (r.defaultProps = { viewBox: "0 0 15 29" }),
      (e.exports = r),
      (r.default = r);
  },
  124: function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
      return c;
    });
    var a = n(1),
      r = n.n(a),
      i = n(0);
    function c() {
      var e = Object(i.useState)(!1),
        t = r()(e, 2),
        n = t[0],
        a = t[1];
      return (
        Object(i.useEffect)(function () {
          return a(!0);
        }, []),
        [n]
      );
    }
  },
  125: function (e, t, n) {
    "use strict";
    n(23), n(27), n(33);
    var a = n(1),
      r = n.n(a),
      i = n(0),
      c = n.n(i),
      o = n(22);
    t.a = function (e) {
      var t = e.shiftX,
        n = void 0 === t ? "0" : t,
        a = e.shiftY,
        s = void 0 === a ? "0" : a,
        l = e.shiftDuration,
        u = void 0 === l ? 0.4 : l,
        d = e.scale,
        f = void 0 === d ? 1 : d,
        m = e.scaleDuration,
        p = void 0 === m ? 1 : m,
        b = e.opacity,
        g = void 0 === b ? 1 : b,
        v = e.opacityDuration,
        h = void 0 === v ? 0.4 : v,
        y = e.postponeTransition,
        E = void 0 === y ? Promise.resolve() : y,
        _ = e.className,
        O = void 0 === _ ? "" : _,
        j = e.as,
        w = void 0 === j ? "div" : j,
        S = e.animated,
        k = void 0 === S || S,
        N = e.children,
        C = Object(i.useState)(g),
        P = r()(C, 2),
        x = P[0],
        L = P[1],
        T = Object(i.useState)(n),
        I = r()(T, 2),
        R = I[0],
        M = I[1],
        D = Object(i.useState)(s),
        A = r()(D, 2),
        U = A[0],
        z = A[1],
        q = Object(i.useState)(f),
        V = r()(q, 2),
        B = V[0],
        G = V[1],
        F = k && !o.a;
      return (
        Object(i.useEffect)(
          function () {
            var e = (function (e) {
              var t = !1,
                n = new Promise(function (n, a) {
                  return e.then(function (e) {
                    t ? a("Cancelled") : n(e);
                  });
                });
              return (
                (n.cancel = function () {
                  return (t = !0);
                }),
                n
              );
            })(F ? E : Promise.resolve());
            return (
              e
                .then(function () {
                  L(1), M(0), z(0), G(1);
                })
                .catch(function () {}),
              function () {
                return e.cancel();
              }
            );
          },
          [E, F]
        ),
        c.a.createElement(
          w,
          {
            style: {
              opacity: x,
              transform: "translate("
                .concat(R, ", ")
                .concat(U, ") scale(")
                .concat(B, ")"),
              transition: F
                ? "opacity "
                    .concat(h, "s, transform ")
                    .concat(u, "s, scale ")
                    .concat(p, "s")
                : "none",
            },
            className: O,
          },
          N
        )
      );
    };
  },
  126: function (e, t, n) {
    "use strict";
    (function (e) {
      n.d(t, "a", function () {
        return r;
      });
      var a = n(0);
      function r(t, n) {
        var r =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : e,
          i = Object(a.useRef)();
        Object(a.useEffect)(
          function () {
            i.current = n;
          },
          [n]
        ),
          Object(a.useEffect)(
            function () {
              if (r && r.addEventListener) {
                var e = function (e) {
                  return i.current(e);
                };
                return (
                  r.addEventListener(t, e),
                  function () {
                    r.removeEventListener(t, e);
                  }
                );
              }
            },
            [t, r]
          );
      }
    }.call(this, n(236)));
  },
  127: function (e) {
    e.exports = JSON.parse(
      '{"author":"Gabriel Nechita <gabriel.nechita@toptal.com>","commit":"edbd72cbcdf29e0a6bd51853856e5ef77da3d563","tag":"","date":"Fri May 14 11:20:53 2021 +0300","codeVersion":"edbd72cbcdf29e0a6bd51853856e5ef77da3d563"}'
    );
  },
  129: function (e, t, n) {
    "use strict";
    (function (e) {
      var a = n(0),
        r = n.n(a),
        i = n(37),
        c = n(89),
        o = n(100),
        s = n(11),
        l = n(130),
        u = (n(9), n(131)),
        d = n(145),
        f = n(138),
        m = n(104),
        p = n(139),
        b = n(86),
        g = n(141),
        v = n(101),
        h = (n(128), Object(c.a)("template")),
        y = h(v.a, { defer: !1, atIdle: !0 }),
        E = h(o.a, { atIdle: !0 });
      t.a = function (t) {
        var n = t.children,
          a = t.requestMetadata,
          c = t.page,
          h = c.publicUrl,
          _ = c.bounceModals,
          O = c.vertical,
          j = c.seo,
          w = c.slug,
          S = t.isPartiallyHydrated,
          k = t.isSidebarEnabled,
          N = t.showCookieBanner,
          C = void 0 === N || N,
          P = t.toptalizeTitles,
          x = t.trackScrollDepth,
          L = t.className,
          T = t.track15SecondsRead,
          I = S ? y : v.a,
          R = S ? E : o.a,
          M = function (e) {
            return P ? Object(l.a)(e) : e;
          };
        return r.a.createElement(
          r.a.Fragment,
          null,
          !Object(s.a)() && r.a.createElement(g.a, null),
          !Object(s.a)() &&
            r.a.createElement(
              i.Helmet,
              null,
              r.a.createElement("title", null, M(j.htmlTitle)),
              r.a.createElement("meta", {
                name: "viewport",
                content: "width=device-width, initial-scale=1",
              }),
              r.a.createElement("meta", {
                name: "theme-color",
                content: "#204ECF",
              }),
              j.noIndex &&
                r.a.createElement("meta", {
                  name: "robots",
                  content: "noindex",
                }),
              r.a.createElement("meta", {
                name: "description",
                content: j.htmlDescription,
              }),
              r.a.createElement("meta", {
                property: "og:title",
                content: M(j.ogTitle),
              }),
              r.a.createElement("meta", {
                property: "og:description",
                content: j.ogDescription,
              }),
              j.ogType &&
                r.a.createElement("meta", {
                  property: "og:type",
                  content: j.ogType,
                }),
              j.ogImageUrl &&
                r.a.createElement("meta", {
                  property: "og:image",
                  content: j.ogImageUrl,
                }),
              h &&
                r.a.createElement("meta", { property: "og:url", content: h }),
              r.a.createElement("meta", {
                name: "twitter:site",
                content: "@toptal",
              }),
              r.a.createElement("meta", {
                name: "twitter:card",
                content: "summary_large_image",
              }),
              h && r.a.createElement("link", { rel: "canonical", href: h }),
              L && r.a.createElement("body", { className: L })
            ),
          r.a.createElement(f.a, a.vendorScriptsSettings.optimizelySettings),
          r.a.createElement(u.a, null),
          r.a.createElement(d.a, a.vendorScriptsSettings),
          e.env.hasOwnProperty("frontier_dev-utils") &&
            r.a.createElement(R, { key: "devutils" }),
          r.a.createElement(b.a.Host, null),
          n,
          r.a.createElement(m.a, null),
          !!k && r.a.createElement(p.a, null),
          r.a.createElement(I, {
            requestMetadata: a,
            bounceModals: _,
            vertical: O,
            slug: w,
            publicUrl: h,
            trackScrollDepth: x,
            showCookieBanner: C,
            track15SecondsRead: T,
          })
        );
      };
    }.call(this, n(241)));
  },
  13: function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
      return a;
    }),
      n.d(t, "c", function () {
        return r;
      }),
      n.d(t, "d", function () {
        return i;
      }),
      n.d(t, "e", function () {
        return c;
      }),
      n.d(t, "f", function () {
        return o;
      }),
      n.d(t, "b", function () {
        return s;
      }),
      n(44),
      n(73);
    var a = {
      INITIAL: "initial",
      LOADING: "loading",
      SUCCESS: "success",
      ERROR: "error",
    };
    function r(e) {
      return [a.SUCCESS, a.ERROR].includes(e);
    }
    function i(e) {
      return e === a.INITIAL;
    }
    function c(e) {
      return e === a.LOADING;
    }
    function o(e) {
      return e === a.SUCCESS;
    }
    function s(e) {
      return e === a.ERROR;
    }
  },
  130: function (e, t, n) {
    "use strict";
    n(23),
      n(44),
      n(73),
      (t.a = function (e) {
        return e.includes("| ToptalВ®")
          ? e
          : "".concat(e, " ").concat("| ToptalВ®");
      });
  },
  131: function (e, t, n) {
    "use strict";
    var a = n(0),
      r = n.n(a),
      i = n(37),
      c = n(11),
      o = n(12),
      s = n(21),
      l = n(132),
      u = n.n(l),
      d = n(133),
      f = n.n(d),
      m = n(134),
      p = n.n(m),
      b = n(135),
      g = n.n(b),
      v = n(136),
      h = n.n(v),
      y = n(137),
      E = n.n(y);
    t.a = function () {
      var e = h.a;
      switch (s.appEnv) {
        case o.a.Staging:
          e = E.a;
          break;
        case o.a.Production:
          e = u.a;
      }
      return (
        !Object(c.a)() &&
        r.a.createElement(
          i.Helmet,
          null,
          r.a.createElement("link", { rel: "icon", href: e }),
          r.a.createElement("link", {
            rel: "apple-touch-icon-precomposed",
            sizes: "57x57",
            href: f.a,
          }),
          r.a.createElement("link", {
            rel: "apple-touch-icon-precomposed",
            sizes: "72x72",
            href: p.a,
          }),
          r.a.createElement("link", {
            rel: "apple-touch-icon-precomposed",
            sizes: "114x114",
            href: g.a,
          })
        )
      );
    };
  },
  132: function (e, t, n) {
    e.exports = n.p + "83b2f6e0d02cdb3d951a75bd07ee4058.png";
  },
  133: function (e, t, n) {
    e.exports = n.p + "66953fea6d309fccce15bde2a03358ea.png";
  },
  134: function (e, t, n) {
    e.exports = n.p + "686b47667da72620ad6f4ad7ff314764.png";
  },
  135: function (e, t, n) {
    e.exports = n.p + "d840cec40f6fb7d087fe162a45edbaba.png";
  },
  136: function (e, t, n) {
    e.exports = n.p + "40f4a4cb86951e30427e30a50c4cc3cf.png";
  },
  137: function (e, t, n) {
    e.exports = n.p + "e1b13fd4e3b0c41494cd3821a6a36696.png";
  },
  138: function (e, t, n) {
    "use strict";
    n(23);
    var a = n(0),
      r = n.n(a),
      i = n(37),
      c = n.n(i),
      o = n(11);
    t.a = function (e) {
      var t = e.projectId,
        n = e.enabled,
        a = e.pageGroups,
        i = e.pushkaApiUrl,
        s = e.pushkaScriptUrl;
      if (!n || !t) return null;
      var l = "/optimizely-edge/".concat(t, ".js"),
        u = "\n(function () {\n  window.optimizelyGroups = "
          .concat(JSON.stringify(a), ';\n  window._pushkaConfig = {apiUrl: "')
          .concat(i, '"};\n})();\n  ');
      return (
        !Object(o.a)() &&
        r.a.createElement(
          c.a,
          null,
          r.a.createElement("link", { rel: "preload", href: l, as: "script" }),
          r.a.createElement("link", {
            rel: "preconnect",
            href: "//logx.optimizely.com",
          }),
          r.a.createElement("script", { type: "text/javascript" }, u),
          r.a.createElement("script", { src: l }),
          r.a.createElement("script", { src: s })
        )
      );
    };
  },
  139: function (e, t, n) {
    "use strict";
    var a = n(2),
      r = n.n(a),
      i = n(0),
      c = n.n(i),
      o = n(42);
    t.a = function (e) {
      return c.a.createElement("div", r()({}, e, { id: o.a }));
    };
  },
  140: function (e, t, n) {
    e.exports = { transitionDuration: "500" };
  },
  141: function (e, t, n) {
    "use strict";
    var a = n(0),
      r = n.n(a),
      i = n(37),
      c = n(142),
      o = n.n(c),
      s = n(143),
      l = n.n(s),
      u = n(144),
      d = n.n(u);
    t.a = function () {
      return r.a.createElement(
        i.Helmet,
        null,
        r.a.createElement("link", {
          rel: "preload",
          href: o.a,
          as: "font",
          type: "font/woff2",
          crossOrigin: !0,
        }),
        r.a.createElement("link", {
          rel: "preload",
          href: l.a,
          as: "font",
          type: "font/woff2",
          crossOrigin: !0,
        }),
        r.a.createElement("link", {
          rel: "preload",
          href: d.a,
          as: "font",
          type: "font/woff2",
          crossOrigin: !0,
        })
      );
    };
  },
  142: function (e, t, n) {
    e.exports = n.p + "427e348e30259e82835b923a946530a1.woff2";
  },
  143: function (e, t, n) {
    e.exports = n.p + "40a6e2b8c2bc99f6d71b9f93dbf695fe.woff2";
  },
  144: function (e, t, n) {
    e.exports = n.p + "cf9a74845c1e3f6d0b7f8b4e351b3971.woff2";
  },
  145: function (e, t, n) {
    "use strict";
    n(194), n(14), n(24), n(195), n(20), n(15);
    var a = n(0),
      r = n.n(a),
      i = n(37),
      c = n(11),
      o = n(21),
      s = {
        appinfoSettings: "https://appinfo.toptal.com",
        facebookSettings: [
          "https://connect.facebook.net",
          "https://www.facebook.com",
        ],
        googleAnalyticsSettings: [
          "https://www.google-analytics.com",
          "https://stats.g.doubleclick.net",
        ],
        googleTagManagerSettings: [
          "https://www.googletagmanager.com",
          "https://www.googleadservices.com",
          "https://bat.bing.com",
          "https://www.redditstatic.com",
        ],
        hubspotSettings: [
          "https://track.hubspot.com",
          "https://js.hs-analytics.net",
        ],
        linkedinInsightsSettings: [
          "https://www.linkedin.com",
          "https://px.ads.linkedin.com",
          "https://sjs.bizographics.com",
        ],
        trustpilotSettings: "https://widget.trustpilot.com",
        sentrySettings: "https://js.sentry-cdn.com",
      };
    t.a = function (e) {
      var t = [];
      return (
        Object.keys(s).forEach(function (n) {
          e[n] && t.push(s[n]);
        }),
        !Object(c.a)() &&
          r.a.createElement(
            i.Helmet,
            null,
            r.a.createElement("link", {
              rel: "dns-prefetch",
              href: o.publicPath,
            }),
            r.a.createElement("link", {
              rel: "preconnect",
              href: o.publicPath,
            }),
            r.a.createElement("link", {
              rel: "preconnect",
              href: o.publicPath,
              crossOrigin: "",
            }),
            r.a.createElement("link", {
              rel: "dns-prefetch",
              href: o.uploadsUri,
            }),
            r.a.createElement("link", {
              rel: "preconnect",
              href: o.uploadsUri,
            }),
            r.a.createElement("link", {
              rel: "dns-prefetch",
              href: s.sentrySettings,
            }),
            t.flat().map(function (e) {
              return r.a.createElement("link", {
                key: e,
                rel: "dns-prefetch",
                href: e,
              });
            })
          )
      );
    };
  },
  148: function (e, t, n) {
    "use strict";
    n(19), n(17), n(14), n(25), n(26), n(20), n(15);
    var a = n(4),
      r = n.n(a),
      i = n(2),
      c = n.n(i),
      o = n(7),
      s = n.n(o),
      l = n(0),
      u = n.n(l),
      d = n(3),
      f = n.n(d),
      m = n(9),
      p = n(32);
    function b(e, t) {
      var n,
        a = Object.keys(e);
      return (
        Object.getOwnPropertySymbols &&
          ((n = Object.getOwnPropertySymbols(e)),
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
          a.push.apply(a, n)),
        a
      );
    }
    function g(e) {
      var t, n;
      for (t = 1; t < arguments.length; t++)
        (n = null != arguments[t] ? arguments[t] : {}),
          t % 2
            ? b(Object(n), !0).forEach(function (t) {
                r()(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : b(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
      return e;
    }
    var v = Object(l.forwardRef)(function (e, t) {
      var n = e.label,
        a = e.gaCategory,
        r = e.gaEvent,
        i = e.gaLabel,
        o = e.children,
        l = e.a11yHidden,
        d = void 0 !== l && l,
        f = s()(e, [
          "label",
          "gaCategory",
          "gaEvent",
          "gaLabel",
          "children",
          "a11yHidden",
        ]);
      return u.a.createElement(
        "a",
        c()(
          {},
          Object(p.b)(a, r, i),
          f,
          d && { "aria-hidden": !0, tabIndex: "-1" },
          { ref: t }
        ),
        o || n
      );
    });
    (v.propTypes = g(
      g({}, m.h),
      {},
      { label: f.a.string, children: f.a.node, a11yHidden: f.a.bool }
    )),
      (t.a = v);
  },
  149: function (e, t, n) {
    "use strict";
    var a = n(0),
      r = n.n(a),
      i = n(3),
      c = n.n(i),
      o =
        (n(202),
        Object(a.forwardRef)(function (e, t) {
          var n = e.children,
            a = e.className,
            i = e.innerClass,
            c = e.id,
            o = e.tag,
            s = void 0 === o ? "section" : o;
          return r.a.createElement(
            s,
            { ref: t, className: (a ? a + " " : "") + "_13AzE63U", id: c },
            r.a.createElement(
              "div",
              { className: (i ? i + " " : "") + "_2E9Ot9TG" },
              n
            )
          );
        }));
    (o.propTypes = {
      tag: c.a.string,
      className: c.a.string,
      id: c.a.string,
      children: c.a.oneOfType([c.a.arrayOf(c.a.node), c.a.node]).isRequired,
    }),
      (o.displayName = "SectionContainer"),
      (t.a = o);
  },
  152: function (e, t, n) {
    var a = n(0);
    function r(e) {
      return a.createElement(
        "svg",
        e,
        a.createElement("path", {
          d: "m1323.82532 2153 7.29254 7.29278c.05306.04705.10612.09998.16507.15879l6.36107 6.36354-10.34632 10.29222 4.73985 4.74031-3.17169 3.15236-7.24537-7.24573c-.08254-.07645-.17097-.16467-.2594-.25289l-6.36107-6.35766 10.31095-10.25105-4.69859-4.69914zm4.61606 11.42731c-.09433-.02941-.18865-.02941-.28298 0-.09433.02353-.17686.07058-.34193.23525l-5.88945 5.86363c-.17096.17056-.21223.24701-.2417.34111-.02948.0941-.02948.1882 0 .2823.02947.09411.07664.17644.2417.34112l1.86883 1.87024c.17096.17056.2476.21173.34193.24114.09432.0294.18865.0294.28297 0 .09433-.02941.17686-.07058.33604-.23526l5.88944-5.86362c.17097-.17056.21224-.24702.24171-.34112.02948-.0941.02948-.1882 0-.2823-.02358-.0941-.07074-.17644-.23581-.34111l-1.86882-1.87025c-.17097-.17055-.24761-.21172-.34193-.24113z",
          fill: "#204ecf",
          fillRule: "evenodd",
          transform: "translate(-1315 -2153)",
        })
      );
    }
    (r.defaultProps = { height: "32", viewBox: "0 0 23 32", width: "23" }),
      (e.exports = r),
      (r.default = r);
  },
  153: function (e, t, n) {
    var a = n(0);
    function r(e) {
      return a.createElement(
        "svg",
        e,
        a.createElement("path", {
          d: "m940.151241 2159.9452c2.29703 0 4.252834.88546 5.817478 2.60625 1.581288 1.67068 2.380255 3.9595 2.371997 6.808-.008387 2.79003-.823999 5.22086-2.438578 6.94166-1.597934 1.71244-3.636964 2.58119-6.067155 2.58119-2.105232-.00797-4.005718-.76184-5.267151-2.05819l-.17581-.18886-.016645 7.35097-4.152963-.00836v-.30907l.049935-23.51476 4.127995.00836-.008322 2.8652c1.356579-1.52866 3.545415-3.08239 5.759219-3.08239zm26.598938.05847c2.371933 0 4.01148.53462 5.268188 1.57044 1.204791 1.0024 1.85097 2.78521 1.902658 4.66292l.00329.28228-.025047 12.1291h-4.202898l-.00013-.50982c-.000391-.51765-.001951-1.05644-.008193-1.59523-1.215095 1.68738-2.9129 2.50601-5.176639 2.50601-1.797676 0-3.312384-.54297-4.427608-1.55373-1.123547-1.02746-1.722773-2.43083-1.714536-4.06809.016313-3.07864 2.192423-5.20436 6.003868-5.87392l.296405-.04863 5.043478-.79357v-.40096c0-.85204-.249677-1.87951-.749032-2.29718-.515999-.43437-1.131869-.80192-2.213804-.80192-2.969539 0-3.571224 2.19502-3.60236 3.29187l-.001313.09125-3.728512.05012c0-1.62056.749031-3.71726 2.272062-5.03709 1.214116-1.05351 2.988523-1.54465 4.705687-1.59879l.321146-.00506zm-16.287272-4.74472 4.136318.00836-.008322 4.95355 3.845028.00835-.008323 3.44995-3.845028-.00836-.016645 9.29731c0 1.01912.216387 1.68739.657483 2.00481.466064.33414 1.414837.02506 1.414837.02506l.374516 3.61702s-1.306644.33413-2.138901.33413c-1.081934 0-1.997417-.27566-2.713158-.81863-1.148515-.86875-1.739418-2.39742-1.731095-4.53588l.016645-9.92382-3.470512-3.46665 3.478835.00836zm-24.435069 7.4011c1.190127 1.2363 2.613287 3.41653 2.605001 6.808-.008359 3.39147-1.431519 5.56335-2.621647 6.79129-1.631224 1.67068-3.845028 2.63132-6.075477 2.63132-.091548 0-.183096 0-.274645-.00836-2.388578-.00835-4.494188-.86039-6.258573-2.53107-1.772708-1.68738-2.671546-4.00962-2.671546-6.92495s.907161-5.23757 2.688191-6.91659c1.756062-1.66233 3.861673-2.50602 6.250251-2.50602 2.36361-.06682 4.668963.90217 6.358445 2.65638zm-9.587603-7.66005v4.10151l-8.006313.00835.016645 19.55526-4.319415-.00836v-.3759l.033291-19.17935h-8.164443l.008323-4.10151zm59.481418.27566 3.728512.00835v.10025l-.041613 23.2558-3.720189-.00836v-.10859zm-6.208638 14.76877-4.144641.70168c-2.022385.34249-2.962835 1.13606-2.971211 2.49766-.007925 1.25684.886031 2.09173 2.271715 2.16647l.183497.00541h.016645c2.649863 0 4.534366-2.07491 4.639398-5.08349l.004597-.24596zm-50.06859-6.34856c-1.389869 0-2.596642.53461-3.570383 1.59549-.957096 1.04417-1.448127 2.43919-1.448127 4.15163s.491031 3.10745 1.439805 4.15163c.97374 1.06923 2.180513 1.60384 3.570383 1.6122 1.414837 0 2.629932-.53462 3.603673-1.5955.982064-1.06923 1.473095-2.46424 1.481418-4.15163.008322-1.69573-.491032-3.09074-1.473095-4.15162-.973741-1.06924-2.188837-1.6122-3.603674-1.6122zm19.51643.1253h-.016645c-1.389869 0-2.546707.50955-3.52877 1.56208-.973741 1.01911-1.464773 2.3473-1.473095 3.95114 0 1.62056.482709 3.07405 1.464772 4.13493.998709 1.02746 2.155546 1.53702 3.537093 1.53702 1.406515 0 2.58832-.51791 3.537093-1.52867.990386-1.05253 1.464772-2.50601 1.473095-4.12657.008323-1.6122-.491032-2.94039-1.45645-3.95115-.940451-1.04417-2.130578-1.57878-3.537093-1.57878z",
          fill: "#262d3d",
          fillRule: "evenodd",
          transform: "translate(-896 -2155)",
        })
      );
    }
    (r.defaultProps = { height: "29", viewBox: "0 0 84 29", width: "84" }),
      (e.exports = r),
      (r.default = r);
  },
  154: function (e, t, n) {
    var a = n(0);
    function r(e) {
      return a.createElement("svg", e, [
        a.createElement("defs", { key: 0 }, [
          a.createElement(
            "filter",
            {
              id: "a",
              height: "114.8%",
              width: "120.1%",
              x: "-10.1%",
              y: "-3.7%",
              key: 0,
            },
            [
              a.createElement("feOffset", {
                dy: "1",
                in: "SourceAlpha",
                result: "shadowOffsetOuter1",
                key: 0,
              }),
              a.createElement("feGaussianBlur", {
                in: "shadowOffsetOuter1",
                result: "shadowBlurOuter1",
                stdDeviation: ".5",
                key: 1,
              }),
              a.createElement("feColorMatrix", {
                in: "shadowBlurOuter1",
                values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0",
                key: 2,
              }),
            ]
          ),
          a.createElement("path", {
            id: "b",
            d: "m19.94 11.657-5.59-5.355a3.564 3.564 0 0 0 -.144-.134l-6.409-6.143-2.823 2.685 4.129 3.953-9.062 8.64 5.59 5.356c.078.074.156.148.228.213l6.368 6.103 2.787-2.655-4.165-3.993 9.092-8.67zm-11.613 5.717a.425.425 0 0 1 -.25 0c-.082-.025-.15-.06-.294-.203l-1.643-1.575c-.145-.14-.186-.208-.207-.288a.374.374 0 0 1 0-.238c.026-.079.062-.143.212-.282l5.176-4.94c.145-.138.218-.178.3-.197a.425.425 0 0 1 .25 0c.082.024.15.06.294.203l1.643 1.575c.145.139.186.208.207.288a.374.374 0 0 1 0 .237c-.026.08-.062.144-.212.283l-5.176 4.939c-.15.139-.223.178-.3.198z",
            key: 1,
          }),
        ]),
        a.createElement("g", { fill: "none", key: 1 }, [
          a.createElement("g", { transform: "translate(1)", key: 0 }, [
            a.createElement("use", {
              fill: "#000",
              filter: "url(#a)",
              xlinkHref: "#b",
              key: 0,
            }),
            a.createElement("use", { fill: "#fff", xlinkHref: "#b", key: 1 }),
          ]),
          a.createElement("path", {
            d: "m18.128 1.303c0-.347.124-.644.383-.892.26-.248.57-.371.927-.371.363 0 .674.123.933.371s.389.545.389.892c0 .352-.13.644-.389.887-.26.247-.57.366-.933.366a1.28 1.28 0 0 1 -.927-.366 1.16 1.16 0 0 1 -.383-.887zm.217 0c0 .292.104.545.316.748.213.203.472.307.783.307.305 0 .564-.104.777-.307a1.01 1.01 0 0 0 .32-.748c0-.292-.108-.545-.32-.748a1.069 1.069 0 0 0 -.777-.312c-.306 0-.565.104-.778.312a.995.995 0 0 0 -.32.748zm1.41.689-.353-.6h-.238v.6h-.218v-1.378h.586c.29 0 .46.164.46.392 0 .193-.15.337-.352.376l.358.61h-.244zm-.592-1.194v.416h.337c.186 0 .28-.07.28-.208 0-.144-.094-.213-.28-.213z",
            fill: "#fff",
            key: 1,
          }),
        ]),
      ]);
    }
    (r.defaultProps = { viewBox: "0 0 22 29" }),
      (e.exports = r),
      (r.default = r);
  },
  155: function (e, t, n) {
    var a = n(0);
    function r(e) {
      return a.createElement("svg", e, [
        a.createElement(
          "defs",
          { key: 0 },
          a.createElement("path", {
            d: "M13.631 13.635h-2.369V9.922c0-.885-.018-2.025-1.235-2.025-1.235 0-1.424.964-1.424 1.96v3.778H6.234V6H8.51v1.04h.03c.319-.6 1.092-1.233 2.247-1.233 2.401 0 2.845 1.58 2.845 3.637v4.19zM3.558 4.955A1.375 1.375 0 012.183 3.58a1.376 1.376 0 111.375 1.377zm1.188 8.68H2.37V6h2.376v7.635zM14.816 0H1.182C.528 0 0 .516 0 1.153v13.694C0 15.485.528 16 1.18 16h13.635c.652 0 1.185-.515 1.185-1.153V1.153C16 .516 15.467 0 14.815 0h.002z",
            id: "path-1",
          })
        ),
        a.createElement("g", { fill: "none", fillRule: "evenodd", key: 1 }, [
          a.createElement(
            "mask",
            { id: "mask-2", fill: "#fff", key: 0 },
            a.createElement("use", { xlinkHref: "#path-1" })
          ),
          a.createElement("use", {
            fill: "#000",
            fillRule: "nonzero",
            xlinkHref: "#path-1",
            key: 1,
          }),
          a.createElement(
            "g",
            { mask: "url(#mask-2)", fill: "#858a92", key: 2 },
            a.createElement("path", { d: "M0 0h16v16H0z" })
          ),
        ]),
      ]);
    }
    (r.defaultProps = { viewBox: "0 0 16 16" }),
      (e.exports = r),
      (r.default = r);
  },
  156: function (e, t, n) {
    e.exports = {
      container: "_1mAa9DKX",
      headline: "_3bBZjbAE",
      "headline-container": "_2RVERByf",
    };
  },
  157: function (e, t, n) {
    "use strict";
    var a = n(0),
      r = n.n(a),
      i = {
        linkedin: function (e) {
          var t = e.size,
            n = void 0 === t ? "100%" : t;
          return r.a.createElement(
            "svg",
            {
              width: n,
              height: n,
              viewBox: "0 0 17 16",
              xmlns: "http://www.w3.org/2000/svg",
            },
            r.a.createElement("path", {
              d: "M.215 16h3.643V5.204H.215V16zM2.06 0C.814 0 0 .806 0 1.865 0 2.903.792 3.73 2.013 3.73h.025c1.27 0 2.06-.827 2.06-1.865C4.075.805 3.308 0 2.06 0zM17 9.808V16h-3.645v-5.777c0-1.45-.526-2.44-1.847-2.44-1.007 0-1.603.667-1.87 1.313-.095.23-.12.553-.12.874V16H5.875s.05-9.782 0-10.796h3.645v1.53c-.007.012-.018.023-.025.036h.025v-.037c.485-.734 1.348-1.782 3.284-1.782C15.2 4.951 17 6.493 17 9.808z",
              fill: "currentColor",
              fillRule: "evenodd",
            })
          );
        },
        twitter: function (e) {
          var t = e.size,
            n = void 0 === t ? "100%" : t;
          return r.a.createElement(
            "svg",
            {
              width: n,
              height: n,
              viewBox: "0 0 21 17",
              xmlns: "http://www.w3.org/2000/svg",
            },
            r.a.createElement("path", {
              d: "M18.862 4.84c0-.19-.01-.369-.018-.557A8.445 8.445 0 0 0 21 2.1a8.609 8.609 0 0 1-2.475.638A4.188 4.188 0 0 0 20.419.41a8.522 8.522 0 0 1-2.734.988A4.39 4.39 0 0 0 14.543 0a4.236 4.236 0 0 0-4.312 4.243c0 .335.035.661.113.979C6.76 5.002 3.584 3.245 1.462.59a4.295 4.295 0 0 0-.587 2.174c0 1.51.763 2.851 1.921 3.636A4.313 4.313 0 0 1 .84 5.835v.059a4.379 4.379 0 0 0 3.463 4.282 4.34 4.34 0 0 1-1.134.146 4.405 4.405 0 0 1-.814-.09 4.324 4.324 0 0 0 4.025 3.032A8.619 8.619 0 0 1 0 15.038 12.048 12.048 0 0 0 6.606 17c7.92 0 12.256-6.514 12.256-12.16",
              fill: "currentColor",
              fillRule: "evenodd",
            })
          );
        },
        facebook: function (e) {
          var t = e.size,
            n = void 0 === t ? "100%" : t;
          return r.a.createElement(
            "svg",
            {
              width: n,
              height: n,
              viewBox: "0 0 11 23",
              xmlns: "http://www.w3.org/2000/svg",
            },
            r.a.createElement("path", {
              d: "M6.271 23V11.488h3.892l.619-3.818h-4.51V5.756c0-1 .334-1.947 1.796-1.947H11V0H6.843C3.348 0 2.396 2.251 2.396 5.36v2.31H0v3.818h2.396V23H6.27z",
              fill: "currentColor",
              fillRule: "evenodd",
            })
          );
        },
        instagram: function (e) {
          var t = e.size,
            n = void 0 === t ? "100%" : t;
          return r.a.createElement(
            "svg",
            {
              width: n,
              height: n,
              viewBox: "0 0 20 21",
              xmlns: "http://www.w3.org/2000/svg",
            },
            r.a.createElement(
              "g",
              { fill: "currentColor", fillRule: "evenodd" },
              r.a.createElement("path", {
                d: "M18.225 15.204c0 2.17-1.68 3.932-3.744 3.932H5.519c-2.064 0-3.744-1.762-3.744-3.932v-9.41c0-2.168 1.68-3.93 3.744-3.93h8.962c2.064 0 3.744 1.762 3.744 3.93v9.41zM14.481 0H5.519C2.475 0 0 2.599 0 5.794v9.41C0 18.401 2.475 21 5.52 21h8.96c3.045 0 5.52-2.599 5.52-5.796v-9.41C20 2.599 17.525 0 14.48 0z",
              }),
              r.a.createElement("path", {
                d: "M10 14.931a3.936 3.936 0 0 1-3.933-3.932A3.938 3.938 0 0 1 10 7.064a3.937 3.937 0 0 1 3.933 3.935A3.936 3.936 0 0 1 10 14.93M10 5c-3.308 0-6 2.69-6 5.999A6.008 6.008 0 0 0 10 17c3.308 0 6-2.694 6-6.001A6.006 6.006 0 0 0 10 5M14.501 3c-.394 0-.783.158-1.06.438-.278.28-.441.666-.441 1.06 0 .395.163.782.44 1.062.278.277.667.44 1.061.44.395 0 .781-.163 1.059-.44.28-.28.44-.667.44-1.061A1.498 1.498 0 0 0 14.501 3",
              })
            )
          );
        },
      };
    t.a = function (e) {
      var t = e.type,
        n = e.size,
        a = void 0 === n ? "100%" : n,
        c = i[t.toLowerCase()];
      return c ? r.a.createElement(c, { size: a }) : null;
    };
  },
  16: function (e, t, n) {
    "use strict";
    var a = n(116);
    n.d(t, "a", function () {
      return a.a;
    });
  },
  160: function (e, t, n) {
    "use strict";
    var a = n(2),
      r = n.n(a),
      i = n(7),
      c = n.n(i),
      o = n(182),
      s = n.n(o),
      l = n(0),
      u = n.n(l),
      d = n(49),
      f = n(156),
      m = n.n(f),
      p = s()(m.a, ["container", "headline", "headline-container"]);
    t.a = function (e) {
      var t = e.href,
        n = e.suffix,
        a = e.headline,
        i = e.title,
        o = c()(e, ["href", "suffix", "headline", "title"]);
      return u.a.createElement(
        d.a,
        r()(
          { isMonotone: !0, layout: {} },
          { href: t, suffix: n, headline: a, title: i, styles: p },
          o
        )
      );
    };
  },
  162: function (e, t, n) {
    "use strict";
    var a = n(6),
      r = n.n(a),
      i = n(0),
      c = n.n(i),
      o = n(5),
      s = n.n(o),
      l = (n(158), n(10)),
      u =
        (n(163),
        {
          "./sticky-container.scss": {
            "sticky-container": "ap5SohHH",
            "is-sticky": "_2ExEwWJ-",
          },
        });
    t.a = function (e) {
      var t = e.children,
        n = e.className,
        a = e.styleName,
        o = e.isSticky,
        d = Object(i.useRef)(null),
        f = Object(l.y)(d);
      return c.a.createElement(
        "nav",
        {
          id: "nav",
          ref: d,
          className:
            (n ? n + " " : "") +
            r()(s()("sticky-container", { "is-sticky": f && o }, a), u, {
              handleMissingStyleName: "warn",
            }),
        },
        "function" == typeof t ? t({ isOnTop: f }) : t
      );
    };
  },
  164: function (e, t, n) {
    "use strict";
    n.d(t, "b", function () {
      return r;
    });
    var a = n(77),
      r = function (e) {
        var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          n =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : "smooth",
          r = document.getElementById(e);
        if (r) {
          var i = window.scrollY + r.getBoundingClientRect().top + t;
          Object(a.a)(window, { top: i, behaviour: n });
        }
      };
    t.a = r;
  },
  165: function (e, t, n) {
    var a = n(0);
    function r(e) {
      return a.createElement(
        "svg",
        e,
        a.createElement("path", {
          d: "M0 13.6C0 17.7 2.47 20 5.247 20c2.469 0 4.32-2 4.32-4.3 0-2.4-1.748-4.2-4.114-4.2-.309 0-1.03.1-1.132.2.206-3.2 2.778-7.1 6.07-9.3L7.305 0C3.395 2.8 0 8 0 13.6zm14.61 0c0 4.1 2.365 6.4 5.143 6.4 2.572 0 4.424-2 4.424-4.3 0-2.4-1.749-4.2-4.115-4.2-.412 0-1.03.1-1.132.2.206-3.2 2.778-7.1 6.07-9.3L21.914 0c-4.013 2.8-7.305 8-7.305 13.6z",
          fill: "currentColor",
        })
      );
    }
    (r.defaultProps = { viewBox: "0 0 24 24" }),
      (e.exports = r),
      (r.default = r);
  },
  166: function (e, t, n) {
    var a = n(0);
    function r(e) {
      return a.createElement(
        "svg",
        e,
        a.createElement("g", { fill: "#FFF", fillRule: "evenodd" }, [
          a.createElement("path", { d: "M0 1l11 11 1-1L1 0z", key: 0 }),
          a.createElement("path", { d: "M12 1L1 12l-1-1L11 0z", key: 1 }),
        ])
      );
    }
    (r.defaultProps = { viewBox: "0 0 12 12" }),
      (e.exports = r),
      (r.default = r);
  },
  1665: function (e, t, n) {
    n(239), (e.exports = n(1710));
  },
  1666: function (e, t, n) {
    e.exports = {
      "skill-card": "_1CcIs6rb",
      label: "_1B5hZCzU",
      description: "_2dnbOkNI",
      "arrow-icon": "_1yXEpCGe",
      title: "_1krgXfdD",
    };
  },
  1667: function (e, t, n) {
    e.exports = { container: "_2peSdwbc", "card-item": "_1aqspQax" };
  },
  1668: function (e, t, n) {
    e.exports = {
      "outer-container": "_3_EO8Mkn",
      wrapper: "_39Lzds-I",
      "description-container": "_1WZ5Xwjp",
      title: "_311yePWs",
      description: "u1iedYYg",
      "cta-container": "GIOjmfqs",
    };
  },
  167: function (e, t, n) {
    var a = n(0);
    function r(e) {
      return a.createElement(
        "svg",
        e,
        a.createElement(
          "g",
          { transform: "translate(0 .5)", fill: "none", fillRule: "evenodd" },
          [
            a.createElement("rect", {
              fill: "#00CC83",
              width: "20",
              height: "20",
              rx: "10",
              key: 0,
            }),
            a.createElement("path", {
              fill: "#FFF",
              d: "M13.034 6.667l-3.895 3.91-1.933-1.942-1.373 1.379 1.934 1.942 1.372 1.377 5.267-5.289z",
              key: 1,
            }),
          ]
        )
      );
    }
    (r.defaultProps = { width: "20", height: "21", viewBox: "0 0 20 21" }),
      (e.exports = r),
      (r.default = r);
  },
  168: function (e, t, n) {
    var a = n(0);
    function r(e) {
      return a.createElement(
        "svg",
        e,
        a.createElement("g", { fill: "none", fillRule: "evenodd" }, [
          a.createElement("rect", {
            fill: "#D42551",
            width: "20",
            height: "20",
            rx: "10",
            key: 0,
          }),
          a.createElement("path", {
            stroke: "#FFF",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M10 11.671V5.838M9.992 14.17a.204.204 0 00-.2.213.212.212 0 00.21.205h0a.205.205 0 00.201-.213.21.21 0 00-.203-.204h-.004",
            key: 1,
          }),
        ])
      );
    }
    (r.defaultProps = { viewBox: "0 0 20 20" }),
      (e.exports = r),
      (r.default = r);
  },
  169: function (e, t, n) {
    var a = n(0);
    function r(e) {
      return a.createElement(
        "svg",
        e,
        a.createElement("path", {
          d: "M1 8l4.5 4.5L15 0",
          stroke: "currentColor",
          fill: "none",
        })
      );
    }
    (r.defaultProps = { viewBox: "0 0 16 13" }),
      (e.exports = r),
      (r.default = r);
  },
  170: function (e, t, n) {
    var a = n(0);
    function r(e) {
      return a.createElement(
        "svg",
        e,
        a.createElement("path", {
          d: "M7.944 1l3.27 3.27-3.27 3.272M0 4.353h10.552",
          stroke: "#fff",
          fill: "none",
        })
      );
    }
    (r.defaultProps = { width: "12", height: "8" }),
      (e.exports = r),
      (r.default = r);
  },
  171: function (e, t, n) {
    var a = n(0);
    function r(e) {
      return a.createElement(
        "svg",
        e,
        a.createElement("path", {
          d: "M0 4h11.253M8 .5L11.5 4 8 7.5",
          fill: "transparent",
          stroke: "#204ecf",
        })
      );
    }
    (r.defaultProps = { height: "8", width: "12" }),
      (e.exports = r),
      (r.default = r);
  },
  1710: function (e, t, n) {
    "use strict";
    n.r(t), n(19), n(17), n(14), n(62), n(25), n(26), n(20), n(15);
    var a = n(2),
      r = n.n(a),
      i = n(4),
      c = n.n(i),
      o = n(6),
      s = n.n(o),
      l = n(0),
      u = n.n(l),
      d = n(5),
      f = n.n(d),
      m = n(89),
      p = n(277),
      b = n(12),
      g = n(129),
      v = n(372),
      h = n(231),
      y = n(425),
      E = n(174),
      _ = n(348),
      O = n(279),
      j = n(238),
      w = n(16),
      S = n(76),
      k = n(702),
      N = (n(176), n(9), n(71)),
      C = n(262),
      P = n(263),
      x = (n(24), n(346)),
      L =
        (n(1666),
        function (e) {
          var t = e.title,
            n = e.description,
            a = e.href,
            r = e.linkLabel,
            i = e.className;
          return u.a.createElement(
            "a",
            { className: (i ? i + " " : "") + "_1CcIs6rb", href: a },
            u.a.createElement("p", { className: "_1krgXfdD" }, t),
            u.a.createElement("p", { className: "_2dnbOkNI" }, n),
            u.a.createElement(
              "p",
              { className: "_1B5hZCzU" },
              r,
              "В ",
              u.a.createElement(x.a, { className: "_1yXEpCGe" })
            )
          );
        }),
      T =
        (n(1667),
        function (e) {
          var t = e.cards,
            n = e.className;
          return u.a.createElement(
            "div",
            { className: (n ? n + " " : "") + "_2peSdwbc" },
            t.map(function (e) {
              return u.a.createElement(
                L,
                r()(
                  {
                    key: e.title,
                    className: "_1aqspQax " + ((e && e.className) || ""),
                  },
                  e
                )
              );
            })
          );
        }),
      I = n(1119),
      R = n.n(I),
      M = function (e) {
        var t = e.navigation,
          n = e.skills,
          a = e.vertical,
          r = t.title,
          i = t.description,
          c = t.items;
        return u.a.createElement(
          u.a.Fragment,
          null,
          a !== b.g.Developers &&
            !!c.length &&
            u.a.createElement(
              w.a,
              { semantic: !0, width: w.a.Variant.Width.Fixed },
              u.a.createElement(N.a, { dataId: "skills-title" }, r),
              u.a.createElement(C.a, { className: "_1_M0NXug", copy: i }),
              u.a.createElement(T, { className: "_3JEfiilm", cards: c })
            ),
          u.a.createElement(
            w.a,
            { semantic: !0, width: w.a.Variant.Width.Fixed },
            u.a.createElement(N.a, { dataId: "skills-title" }, n.title),
            u.a.createElement(C.a, {
              className: "_1_M0NXug",
              copy: n.description,
            }),
            u.a.createElement(P.a, {
              skillPages: n.skillPages,
              cta: n.cta,
              className: R.a["skill-list"],
            })
          )
        );
      },
      D = n(703),
      A = n(7),
      U = n.n(A),
      z = n(149),
      q = n(31),
      V =
        (n(1668),
        function (e) {
          var t = e.title,
            n = e.description,
            a = e.cta,
            i = a.href,
            c = a.label,
            o = a.inlineStyles,
            s = U()(a, ["href", "label", "inlineStyles"]);
          return u.a.createElement(
            w.a,
            null,
            u.a.createElement(
              z.a,
              { className: "_3_EO8Mkn", tag: "div" },
              u.a.createElement(
                "div",
                { className: "_39Lzds-I" },
                u.a.createElement(
                  "div",
                  { className: "_1WZ5Xwjp" },
                  u.a.createElement("p", { className: "_311yePWs" }, t),
                  u.a.createElement("p", { className: "u1iedYYg" }, n)
                ),
                u.a.createElement(
                  "div",
                  { className: "GIOjmfqs" },
                  u.a.createElement(
                    q.a,
                    r()(
                      {
                        type: q.a.Variant.Theme.CTA,
                        url: i,
                        style: o,
                        dataId: "schedule-call-cta",
                      },
                      s
                    ),
                    c
                  )
                )
              )
            )
          );
        }),
      B = n(704),
      G = n(659),
      F = n(229),
      H = n(396),
      W =
        (n(529),
        n(1083),
        function (e) {
          var t = e.imageUrl,
            n = e.fullName,
            a = e.jobTitle,
            r = e.previousCompanyName,
            i = e.className;
          return u.a.createElement(
            "div",
            { className: (i ? i + " " : "") + "_3q-q3fMO" },
            u.a.createElement("img", { src: t, alt: n, role: "presentation" }),
            u.a.createElement(
              "div",
              { className: "_2J7BEx94" },
              u.a.createElement("p", { className: "uHKVNGgM" }, n),
              u.a.createElement(
                "p",
                { className: "_1jFs5KiU" },
                u.a.createElement("span", { className: "_2uTCLxwa" }, a),
                "Previously at",
                " ",
                r
              )
            )
          );
        }),
      K = n(878),
      Y =
        (n(1084),
        function (e) {
          var t = e.title,
            n = e.showcaseTalent,
            a = e.backgroundImageUrl,
            r = e.topSearch,
            i = r.autocompleteUrl,
            c = r.resultsPageUrl,
            o = e.searchWidgetSection;
          return u.a.createElement(
            F.a,
            { className: "_1YL-b3De", url: a, as: "section" },
            u.a.createElement(
              w.a,
              { width: w.a.Variant.Width.Fixed, className: "T44QPik2" },
              u.a.createElement(W, n)
            ),
            u.a.createElement(
              H.b.ContextProvider,
              { autocompleteUrl: i },
              u.a.createElement(K.a, {
                title: t,
                searchWidgetSection: o,
                resultsPageUrl: c,
              })
            )
          );
        }),
      Q = n(705),
      J = n(706),
      X = n(547),
      Z = n(861),
      $ = n.n(Z),
      ee = {
        styles: {
          "hire-cta-container": "WuilS12d",
          "hire-cta": "_2YX6JCrU",
          "grid-title": "_16uPIJtp",
          "cross-links-section": "_3-fdWyAD",
          "top-three-percent": "_2lTrYQlj",
          "navbar-with-search": "_3CDv-3am",
        },
      };
    function te(e, t) {
      var n,
        a = Object.keys(e);
      return (
        Object.getOwnPropertySymbols &&
          ((n = Object.getOwnPropertySymbols(e)),
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
          a.push.apply(a, n)),
        a
      );
    }
    function ne(e) {
      var t, n;
      for (t = 1; t < arguments.length; t++)
        (n = null != arguments[t] ? arguments[t] : {}),
          t % 2
            ? te(Object(n), !0).forEach(function (t) {
                c()(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : te(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
      return e;
    }
    var ae = Object(m.b)(
      b.d.VerticalLanding,
      {
        NavbarVertical: v.a,
        Hero: G.a,
        HeroWithSearch: Y,
        FeatureStepper: O.a,
        ClientsGrid: _.a,
        Trustbar: j.a,
        TrustPilotWidget: k.a,
        MeetTalent: J.a,
        FAQ: y.a,
      },
      {
        Hero: { defer: !1 },
        NavbarVertical: { defer: !1 },
        HeroWithSearch: { defer: !1 },
      }
    );
    t.default = function (e) {
      var t = e.data,
        n = t.page,
        a = t.requestMetadata,
        i = n.crossVerticalSection,
        c = n.ctaSection,
        o = n.dynamicBlogPostsSection,
        l = n.dynamicSkillJobsPagesSection,
        d = n.featuredBlogPostsSection,
        m = n.dynamicSkillPagesSection,
        b = n.footerSection,
        y = n.heroSection,
        _ = n.searchableHeroSection,
        O = n.navbarSection,
        j = n.sidebar,
        k = n.navigationSection,
        N = n.scheduleACallSection,
        C = n.talentListSection,
        P = n.trustpilotSection,
        x = n.testimonialsGridSection,
        L = n.timelineSection,
        T = n.trustbar,
        I = n.faqSection,
        R = n.vertical,
        A = n.publicUrl,
        U = n.bounceModals,
        z = n.seo,
        q = n.slug,
        G = ne(
          ne({}, Object(p.c)(a, { templateId: p.a.VERTICAL_LANDING_PAGE })),
          P
        ),
        F = a.platformSessionUrl,
        H = a.sidebarSkillsUrl,
        W = a.topSearch,
        K = null == _ ? void 0 : _.enabled;
      return u.a.createElement(
        g.a,
        r()(
          {
            isPartiallyHydrated: !0,
            isSidebarEnabled: !!(null == j ? void 0 : j.enabled),
            page: {
              publicUrl: A,
              bounceModals: U,
              vertical: R,
              seo: z,
              slug: q,
            },
          },
          { requestMetadata: a }
        ),
        u.a.createElement(
          ae.NavbarVertical,
          r()(
            { vertical: R, platformSessionUrl: F, sidebarSkillsUrl: H },
            {
              navbarData: O,
              variant: K && v.a.Variant.Dark,
              sidebar: Object(S.b)(
                { sidebar: j, topSearch: W, sidebarSkillsUrl: H },
                b
              ),
              className:
                s()(f()({ "navbar-with-search": K }), ee, {
                  handleMissingStyleName: "warn",
                }) +
                " " +
                ({ vertical: R, platformSessionUrl: F, sidebarSkillsUrl: H }
                  .className || ""),
            }
          )
        ),
        K
          ? u.a.createElement(
              u.a.Fragment,
              null,
              u.a.createElement(
                ae.HeroWithSearch,
                r()({}, _, { topSearch: W })
              ),
              u.a.createElement(
                w.a,
                { forceSpace: !0, space: w.a.Variant.Space.Medium },
                T && u.a.createElement(ae.Trustbar, T)
              )
            )
          : u.a.createElement(ae.Hero, r()({}, y, { trustbar: T })),
        u.a.createElement(
          w.a,
          { space: K ? w.a.Variant.Space.None : w.a.Variant.Space.Large },
          u.a.createElement(ae.TrustPilotWidget, G)
        ),
        K &&
          u.a.createElement(
            w.a,
            { space: w.a.Variant.Space.None },
            u.a.createElement(
              ae.Hero,
              r()(
                {
                  animated: !1,
                  className: "_2lTrYQlj " + ((y && y.className) || ""),
                },
                y
              )
            )
          ),
        u.a.createElement(w.a, null, u.a.createElement(ae.FeatureStepper, L)),
        u.a.createElement(M, { navigation: k, skills: m, vertical: R.name }),
        u.a.createElement(V, N),
        u.a.createElement(ae.MeetTalent, C),
        u.a.createElement(
          w.a,
          null,
          u.a.createElement(
            ae.ClientsGrid,
            r()({}, x, { styles: { title: $.a["grid-title"] } })
          )
        ),
        I && u.a.createElement(w.a, null, u.a.createElement(ae.FAQ, I)),
        i && u.a.createElement(X.a, i),
        u.a.createElement(Q.a, d),
        u.a.createElement(D.a, o),
        l && u.a.createElement(B.a, l),
        u.a.createElement(
          "div",
          { className: "WuilS12d" },
          u.a.createElement(
            h.a,
            r()({}, c, {
              cta: c.ctas[0],
              className: "_2YX6JCrU " + ((c && c.className) || ""),
            })
          )
        ),
        u.a.createElement(E.a, b)
      );
    };
  },
  172: function (e, t, n) {
    var a = n(0);
    function r(e) {
      return a.createElement(
        "svg",
        e,
        a.createElement("path", {
          d: "m.707.707 13.678 13.678-13.678 13.677",
          fill: "none",
          stroke: "currentColor",
        })
      );
    }
    (r.defaultProps = { viewBox: "0 0 15 29" }),
      (e.exports = r),
      (r.default = r);
  },
  173: function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
      return c;
    }),
      n(36),
      n(70);
    var a = n(0),
      r = n(164),
      i = n(88),
      c = function (e) {
        var t = Object(i.a)(),
          n = Object(a.useCallback)(
            function () {
              t || Object(r.a)(location.hash.replace("#", ""), e, "auto");
            },
            [e, t]
          );
        return (
          Object(a.useEffect)(
            function () {
              return (
                window.addEventListener("hashchange", n),
                document.addEventListener("DOMContentLoaded", n),
                function () {
                  window.removeEventListener("hashchange", n);
                }
              );
            },
            [n]
          ),
          [
            function (e) {
              e.target.getAttribute("href") === window.location.hash &&
                e.preventDefault();
            },
            Object(a.useCallback)(function (e) {
              window.location.hash &&
                e &&
                e.id &&
                window.history.replaceState(
                  null,
                  null,
                  document.location.pathname + "#" + e.id
                );
            }, []),
          ]
        );
      };
  },
  174: function (e, t, n) {
    "use strict";
    n(24);
    var a = n(2),
      r = n.n(a),
      i = n(6),
      c = n.n(i),
      o = n(0),
      s = n.n(o),
      l = n(5),
      u = n.n(l),
      d = (n(9), n(8)),
      f = n(160),
      m = n(149),
      p = n(111),
      b =
        (n(208),
        {
          "./footer.scss": {
            container: "_1cXxqsT8",
            "is-padding-top": "_1XY5XaF6",
            "links-container": "_2M_Xuie5",
            "legal-container": "_1Y3-upIm",
            column: "_1IGYFQew",
            "column-title": "uBxyYiCQ",
            "column-list": "GA1bS17F",
            "legal-list-item": "VsStGjXj",
            "is-title": "_2lf3U9la",
            "list-item": "_3ATfuKuZ",
            "is-text": "gtF3g8Jg",
            "legal-divider": "_39YHlWta",
            "legal-logo": "-mMkSI_A",
            "legal-links": "_9fVOHv9t",
            "is-theme-light": "_3xicDpfG",
            "sr-only": "eFMCsx1V",
          },
        }),
      g = { Theme: { Light: "light" }, Padding: { Top: "top" } },
      v = function (e) {
        var t = e.title,
          n = e.links,
          a = e.theme,
          i = p.a.Variant.Theme;
        return s.a.createElement(
          "div",
          { className: "_1IGYFQew" },
          s.a.createElement("h3", { className: "uBxyYiCQ" }, t),
          s.a.createElement(
            p.a,
            r()({ links: n }, { theme: a === g.Theme.Light ? i.Grey : i.Light })
          )
        );
      },
      h = function (e) {
        var t = e.columns,
          n = e.socialMedia,
          a = e.theme;
        return s.a.createElement(
          "div",
          { className: "_2M_Xuie5" },
          null == t
            ? void 0
            : t.map(function (e) {
                var t = e.links,
                  n = e.title;
                return s.a.createElement(
                  "div",
                  { key: n, className: "_1IGYFQew" },
                  s.a.createElement(
                    "h3",
                    { className: "uBxyYiCQ", "data-id": "footer-column-title" },
                    n
                  ),
                  s.a.createElement(
                    "ul",
                    null,
                    t.map(function (e) {
                      var t = e.href,
                        n = e.label;
                      return s.a.createElement(
                        "li",
                        { key: t + n, className: "_3ATfuKuZ gtF3g8Jg" },
                        s.a.createElement("a", { href: t }, n)
                      );
                    })
                  )
                );
              }),
          n && s.a.createElement(v, r()({}, n, { theme: a }))
        );
      },
      y = function (e) {
        var t = e.legal,
          n = e.logoLink,
          a = n.href,
          i = n.label;
        return s.a.createElement(
          "div",
          { className: "_1Y3-upIm" },
          s.a.createElement("div", { className: "_39YHlWta" }),
          s.a.createElement(
            "div",
            { className: "-mMkSI_A" },
            s.a.createElement(
              f.a,
              r()({ headline: i, title: "Toptal Home Page" }, { href: a })
            )
          ),
          s.a.createElement(
            "ul",
            { className: "_9fVOHv9t" },
            s.a.createElement(
              "li",
              { className: "VsStGjXj _2lf3U9la" },
              t.title
            ),
            t.links.map(function (e) {
              var t = e.href,
                n = e.label;
              return s.a.createElement(
                "li",
                { key: n + t, className: "VsStGjXj" },
                s.a.createElement("a", r()({ rel: "nofollow" }, { href: t }), n)
              );
            })
          )
        );
      },
      E = function (e) {
        var t = e.id,
          n = e.columns,
          a = e.socialMedia,
          r = e.legal,
          i = e.logoLink,
          o = e.theme,
          l = e.padding;
        return s.a.createElement(
          m.a,
          {
            id: t,
            tag: "footer",
            className: c()(
              u()("container", Object(d.a)({ theme: o, padding: l })),
              b,
              { handleMissingStyleName: "warn" }
            ),
          },
          s.a.createElement("h2", { className: "eFMCsx1V" }, "Footer"),
          (a || !!(null == n ? void 0 : n.length)) &&
            s.a.createElement(h, { socialMedia: a, columns: n, theme: o }),
          s.a.createElement(y, { legal: r, logoLink: i })
        );
      };
    (E.Variant = g), (t.a = E);
  },
  175: function (e, t, n) {
    "use strict";
    n.d(t, "b", function () {
      return l;
    }),
      n(23);
    var a = n(2),
      r = n.n(a),
      i = n(7),
      c = n.n(i),
      o = n(0),
      s = n.n(o),
      l = function (e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        return "https://player.vimeo.com/video/"
          .concat(e, "?autoplay=")
          .concat(t, "&playsinline=")
          .concat(n);
      };
    t.a = function (e) {
      var t = e.videoId,
        n = e.width,
        a = void 0 === n ? "100%" : n,
        i = e.height,
        o = void 0 === i ? "100%" : i,
        u = e.autoplay,
        d = void 0 !== u && u,
        f = e.playsinline,
        m = void 0 !== f && f,
        p = c()(e, ["videoId", "width", "height", "autoplay", "playsinline"]);
      return s.a.createElement(
        "iframe",
        r()(
          {
            allowFullScreen: !0,
            webkitallowfullscreen: "true",
            mozallowfullscreen: "true",
            width: a,
            height: o,
            frameBorder: "0",
            autoPlay: d,
            allow: "autoplay",
            src: l(t, d, m),
          },
          p
        )
      );
    };
  },
  178: function (e, t, n) {
    "use strict";
    n(27), n(33);
    var a = n(2),
      r = n.n(a),
      i = n(18),
      c = n.n(i),
      o = (n(67), n(35)),
      s = n.n(o),
      l = n(1),
      u = n.n(l),
      d = n(7),
      f = n.n(d),
      m = n(38),
      p = n.n(m),
      b = n(0),
      g = n.n(b),
      v = n(60),
      h = n(61),
      y = n(117),
      E = n(6),
      _ = n.n(E),
      O = n(867),
      j = n(57),
      w = n.n(j),
      S = n(5),
      k = n.n(S),
      N = n(11),
      C = n(22),
      P = n(8),
      x = n(10),
      L = n(42),
      T = n(76),
      I = n(181),
      R = n.n(I),
      M = {
        styles: {
          container: "_1wvUW4LL",
          "is-visual-regression-test": "_3TXj8xmH",
          content: "W-nBtyo7",
          collapsed: "_1vlGCd1r",
          collapsing: "_3EuRC3QB",
          expanded: "_1x_tGecH",
          expanding: "_2GpEtntl",
        },
      },
      D = Object(T.a)(R.a),
      A = function (e) {
        var t = e.children,
          n = e.parentRef,
          a = e.isOpen,
          i = e.onDismiss,
          c = Object(x.r)(i, n);
        return g.a.createElement(
          O.a,
          r()({ in: a, appear: !0, timeout: L.d }, !C.a && { classNames: D }),
          g.a.createElement(
            "div",
            r()(
              { ref: c },
              {
                className:
                  _()(
                    k()(
                      "container",
                      Object(P.b)({ isVisualRegressionTest: C.a })
                    ),
                    M,
                    { handleMissingStyleName: "warn" }
                  ) +
                  " " +
                  ({ ref: c }.className || ""),
              }
            ),
            g.a.createElement("div", { className: "W-nBtyo7" }, t)
          )
        );
      },
      U =
        (n(215),
        function (e) {
          return !!(null == e ? void 0 : e.scrollTop);
        }),
      z = function (e) {
        var t = e.children,
          n = e.className,
          a = e.onScrollToggle,
          i = void 0 === a ? p.a : a,
          c = Object(b.useRef)(null),
          o = Object(x.y)(null, { controlRef: c, probeFn: U });
        return (
          Object(b.useEffect)(
            function () {
              i(o);
            },
            [i, o]
          ),
          g.a.createElement(
            "div",
            r()(
              {
                className:
                  (n ? n + " " : "") +
                  "_3ey0le1s " +
                  ({ ref: c }.className || ""),
              },
              { ref: c }
            ),
            t
          )
        );
      },
      q = n(49),
      V = n(93),
      B =
        (n(216),
        {
          "./header.scss": {
            container: "_3n2OQqU6",
            "is-sticky": "_3L4Q6K18",
            header: "_3OCaO4Sm",
            "button-close": "_2dbM_zjP",
          },
        }),
      G = function (e) {
        var t = e.isSticky,
          n = e.onDismiss;
        return g.a.createElement(
          "div",
          {
            className: _()(k()("container", Object(P.b)({ isSticky: t })), B, {
              handleMissingStyleName: "warn",
            }),
          },
          g.a.createElement(
            "div",
            { className: "_3OCaO4Sm" },
            g.a.createElement(q.a, null),
            g.a.createElement(
              "div",
              { className: "_2dbM_zjP", onClick: n },
              g.a.createElement(V.d, null)
            )
          )
        );
      },
      F = n(118),
      H = n.n(F),
      W = {
        styles: {
          container: "_3O25N8Wt",
          "is-visual-regression-test": "_2oqWtl8O",
          "sidebar-is-open": "_3qlrr8Ue",
          collapsed: "_2uOUGZ8s",
          collapsing: "_1fjhlsRh",
          expanded: "_3HVRGLKB",
          expanding: "rAcwt06K",
        },
      },
      K = Object(T.a)(H.a),
      Y = function (e) {
        var t = e.isOpen,
          n = e.onDismiss,
          a = e.children,
          i = Object(b.useRef)(null);
        Object(x.A)(t, !C.a && H.a["sidebar-is-open"]);
        var c = Object(b.useCallback)(
          function (e) {
            "Escape" === e.key && n();
          },
          [n]
        );
        Object(b.useEffect)(
          function () {
            t && i.current.focus();
          },
          [t]
        );
        var o = Object(x.z)(!1),
          s = u()(o, 2),
          l = s[0],
          d = s[1];
        if (!Object(N.a)()) return null;
        var f = document.getElementById(L.a),
          m = g.a.createElement(
            O.a,
            r()(
              { in: t, timeout: L.d, mountOnEnter: !0, unmountOnExit: !0 },
              !C.a && { classNames: K }
            ),
            g.a.createElement(
              "div",
              r()(
                { tabIndex: "-1", onKeyDown: c },
                { ref: i },
                {
                  className:
                    _()(
                      k()(
                        "container",
                        Object(P.b)({ isVisualRegressionTest: C.a })
                      ),
                      W,
                      { handleMissingStyleName: "warn" }
                    ) +
                    " " +
                    ({ ref: i }.className || ""),
                }
              ),
              g.a.createElement(
                A,
                r()({ onDismiss: n, isOpen: t }, { parentRef: i }),
                g.a.createElement(G, { onDismiss: n, isSticky: l }),
                g.a.createElement(z, { onScrollToggle: d }, a)
              )
            )
          );
        return f && Object(N.a)()
          ? w.a.createPortal(m, f)
          : (console.warn(
              "Could not find #".concat(
                L.a,
                " node.\n Switched to inline rendering mode."
              )
            ),
            m);
      },
      Q = n(102),
      J =
        (n(217),
        function () {
          return g.a.createElement(
            "div",
            { className: "_2DsED4qK" },
            g.a.createElement(v.a, null)
          );
        }),
      X = function (e) {
        var t = e.isOpen,
          a = e.onDismiss,
          i = void 0 === a ? p.a : a,
          o = e.onLoad,
          l = void 0 === o ? p.a : o,
          d = e.kind,
          m = e.sidebarSkillsUrl,
          v = e.topSearch,
          E = f()(e, [
            "isOpen",
            "onDismiss",
            "onLoad",
            "kind",
            "sidebarSkillsUrl",
            "topSearch",
          ]),
          _ = Object(b.useState)(!1),
          O = u()(_, 2),
          j = O[0],
          w = O[1];
        Object(b.useEffect)(
          function () {
            t && (w(!0), Object(y.f)("open", d));
          },
          [t, d]
        );
        var S = Object(b.useMemo)(
            function () {
              return j
                ? g.a.lazy(
                    s()(
                      c.a.mark(function e() {
                        var t;
                        return c.a.wrap(function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (t = Promise.all([n.e(0), n.e(197)]).then(
                                    n.bind(null, 2278)
                                  )),
                                  l(),
                                  e.abrupt("return", t)
                                );
                              case 3:
                              case "end":
                                return e.stop();
                            }
                        }, e);
                      })
                    )
                  )
                : h.a;
            },
            [l, j]
          ),
          k = Object(b.useCallback)(
            function () {
              i(), Object(y.f)("close", d);
            },
            [i, d]
          );
        return g.a.createElement(
          Y,
          r()({ isOpen: t }, { onDismiss: k }),
          g.a.createElement(
            b.Suspense,
            { fallback: g.a.createElement(J, null) },
            g.a.createElement(
              Q.b,
              { sidebarSkillsUrl: m, kind: d, topSearch: v },
              g.a.createElement(S, { sections: E })
            )
          )
        );
      };
    (X.dataPropTypes = Q.b.propTypes),
      (X.ContextProvider = Q.b),
      (X.Kind = { Client: "client", Talent: "talent" }),
      (t.a = X);
  },
  179: function (e, t, n) {
    "use strict";
    n.d(t, "i", function () {
      return a;
    }),
      n.d(t, "h", function () {
        return r;
      }),
      n.d(t, "e", function () {
        return i;
      }),
      n.d(t, "c", function () {
        return c;
      }),
      n.d(t, "j", function () {
        return o;
      }),
      n.d(t, "b", function () {
        return s;
      }),
      n.d(t, "l", function () {
        return l;
      }),
      n.d(t, "k", function () {
        return u;
      }),
      n.d(t, "f", function () {
        return d;
      }),
      n.d(t, "d", function () {
        return f;
      }),
      n.d(t, "a", function () {
        return m;
      }),
      n.d(t, "g", function () {
        return p;
      });
    var a = "View Full Profile",
      r = "Show More",
      i = "See Post",
      c = "Read More",
      o = "View More",
      s = "Learn More",
      l = "View Project",
      u = "View on LinkedIn",
      d = "See Their Profiles",
      f = "Register to view profile",
      m = "No-Risk Trial, Pay Only If Satisfied.",
      p = "Send Message";
  },
  181: function (e, t, n) {
    e.exports = {
      container: "_1wvUW4LL",
      "is-visual-regression-test": "_3TXj8xmH",
      content: "W-nBtyo7",
      collapsed: "_1vlGCd1r",
      collapsing: "_3EuRC3QB",
      expanded: "_1x_tGecH",
      expanding: "_2GpEtntl",
    };
  },
  186: function (e, t, n) {
    e.exports = { content: "_2iMRJu_T" };
  },
  191: function (e, t, n) {
    e.exports = {
      "is-loading": "_1rwcd8Qg",
      text: "_2NmneBKH",
      spinner: "vus_t9VU",
    };
  },
  193: function (e, t, n) {
    e.exports = {
      container: "_2fCaLc8V",
      scale: "_2MVUZXqY",
      "is-size-tiny": "S9kGp0pM",
      "is-size-small": "_2IO7YLhY",
      "is-size-medium": "_1aXoWsYQ",
      "is-size-large": "_1foXSAlV",
      circular: "_2OnLG4G0",
      rotate: "_2YfUS-rq",
      "is-static": "_3bQ8Np11",
      path: "_1f5mXS6c",
      dash: "ySzGGupe",
    };
  },
  201: function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
      return k;
    }),
      n(19),
      n(23),
      n(17),
      n(14),
      n(62),
      n(25),
      n(26),
      n(20),
      n(15);
    var a = n(4),
      r = n.n(a),
      i = n(2),
      c = n.n(i),
      o = n(7),
      s = n.n(o),
      l = n(6),
      u = n.n(l),
      d = n(0),
      f = n.n(d),
      m = n(3),
      p = n.n(m),
      b = n(5),
      g = n.n(b),
      v = n(8),
      h = n(9),
      y = n(32),
      E = n(31),
      _ = n(45);
    function O(e, t) {
      var n,
        a = Object.keys(e);
      return (
        Object.getOwnPropertySymbols &&
          ((n = Object.getOwnPropertySymbols(e)),
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
          a.push.apply(a, n)),
        a
      );
    }
    n(326);
    var j = {
        "./blog-card.scss": {
          "blog-card": "_2AOdQKTV",
          content: "KxHj95DN",
          "is-size-large": "_3avJuwHw",
          cover: "_3l9VlKPe",
          "avatar-container": "_3xeRr4HI",
          avatar: "_1kyxjycq",
          breadcrumbs: "_27W_cjOv",
          "breadcrumb-item": "_31aQZWyI",
          title: "PnmEEQ_-",
          link: "_35iK7zmm",
          author: "_1mjIKiS3",
          excerpt: "IpHlFM7w",
          "reading-time": "_3XfNRYjc",
          "reading-continue": "IYgLf9Fx",
        },
      },
      w = { Size: { Large: "large" } },
      S = function (e) {
        var t = e.title,
          n = e.excerpt,
          a = e.readingTime,
          r = e.publicUrl,
          i = e.domain,
          o = e.topic,
          l = e.postAuthor,
          d = e.size,
          m = e.biggerRegularCoverImageUrl,
          p = e.biggerRetinaCoverImageUrl,
          b = e.bigRegularCoverImageUrl,
          h = e.bigRetinaCoverImageUrl,
          O = e.gaCategory,
          S = e.gaEvent,
          k = e.gaLabel,
          N = s()(e, [
            "title",
            "excerpt",
            "readingTime",
            "publicUrl",
            "domain",
            "topic",
            "postAuthor",
            "size",
            "biggerRegularCoverImageUrl",
            "biggerRetinaCoverImageUrl",
            "bigRegularCoverImageUrl",
            "bigRetinaCoverImageUrl",
            "gaCategory",
            "gaEvent",
            "gaLabel",
          ]),
          C = d === w.Size.Large,
          P = O ? Object(y.b)(O, S, k) : {};
        return f.a.createElement(
          "div",
          c()({ "data-id": "blog-card" }, N, {
            className:
              u()(g()("blog-card", Object(v.a)({ size: d })), j, {
                handleMissingStyleName: "warn",
              }) +
              " " +
              ((N && N.className) || ""),
          }),
          f.a.createElement(
            "a",
            c()(
              {
                className: "_3l9VlKPe " + ((P && P.className) || ""),
                href: r,
                "data-happo-hide": !0,
              },
              P,
              { "aria-hidden": "true", tabIndex: "-1" }
            ),
            f.a.createElement(
              _.a,
              { src: h, alt: "", height: "100" },
              f.a.createElement(_.a.Source, {
                srcSet: "".concat(b, " 1x, ").concat(h, " 2x"),
                media: "(max-width: 600px)",
              }),
              f.a.createElement(_.a.Source, {
                srcSet: "".concat(m, " 1x, ").concat(p, " 2x"),
                media: "(min-width: 601px) and (max-width: 767px)",
              }),
              C &&
                f.a.createElement(_.a.Source, {
                  srcSet: "".concat(m, " 1x, ").concat(p, " 2x"),
                  media: "(min-width: 768px) and (max-width: 1023px)",
                }),
              C &&
                f.a.createElement(_.a.Source, {
                  srcSet: "".concat(b, " 1x, ").concat(h, " 2x"),
                  media: "(min-width: 1024px)",
                }),
              !C &&
                f.a.createElement(_.a.Source, {
                  srcSet: "".concat(b, " 1x, ").concat(h, " 2x"),
                })
            )
          ),
          f.a.createElement(
            "div",
            { className: "KxHj95DN" },
            f.a.createElement(
              "div",
              { className: "_3xeRr4HI" },
              f.a.createElement(_.a, {
                src: l.imageUrl,
                className: "_1kyxjycq",
                alt: "",
                width: "48",
                height: "48",
                effect: "opacity",
              })
            ),
            f.a.createElement(
              "div",
              { className: "_27W_cjOv" },
              f.a.createElement(
                E.b,
                c()(
                  {
                    className: "_31aQZWyI " + ((P && P.className) || ""),
                    url: i.publicUrl,
                  },
                  P
                ),
                i.title
              ),
              f.a.createElement(
                E.b,
                c()(
                  {
                    className: "_31aQZWyI " + ((P && P.className) || ""),
                    url: o.publicUrl,
                  },
                  P
                ),
                o.name
              )
            ),
            f.a.createElement(
              "h3",
              { className: "PnmEEQ_-" },
              f.a.createElement(
                "a",
                c()(
                  {
                    className: "_35iK7zmm " + ((P && P.className) || ""),
                    href: r,
                  },
                  P
                ),
                t
              )
            ),
            f.a.createElement(
              "div",
              { className: "_1mjIKiS3" },
              "by ",
              f.a.createElement("strong", null, l.fullName)
            ),
            C &&
              f.a.createElement(
                f.a.Fragment,
                null,
                f.a.createElement("p", { className: "IpHlFM7w" }, n),
                f.a.createElement(
                  "div",
                  { className: "_3XfNRYjc" },
                  a > 0 && f.a.createElement("span", null, a, " minute read"),
                  f.a.createElement(
                    "a",
                    c()(
                      {
                        className: "IYgLf9Fx " + ((P && P.className) || ""),
                        href: r,
                      },
                      P
                    ),
                    "Continue Reading"
                  )
                )
              )
          )
        );
      },
      k = (function (e) {
        var t, n;
        for (t = 1; t < arguments.length; t++)
          (n = null != arguments[t] ? arguments[t] : {}),
            t % 2
              ? O(Object(n), !0).forEach(function (t) {
                  r()(e, t, n[t]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : O(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t)
                  );
                });
        return e;
      })(
        {
          title: p.a.string.isRequired,
          excerpt: p.a.string.isRequired,
          readingTime: p.a.number.isRequired,
          publicUrl: p.a.string.isRequired,
          biggerRegularCoverImageUrl: p.a.string.isRequired,
          biggerRetinaCoverImageUrl: p.a.string.isRequired,
          bigRegularCoverImageUrl: p.a.string.isRequired,
          bigRetinaCoverImageUrl: p.a.string.isRequired,
          domain: p.a.shape({
            title: p.a.string.isRequired,
            publicUrl: p.a.string.isRequired,
          }),
          topic: p.a.shape({
            name: p.a.string.isRequired,
            publicUrl: p.a.string.isRequired,
          }),
          postAuthor: p.a.shape({
            fullName: p.a.string.isRequired,
            imageUrl: p.a.string.isRequired,
          }),
          size: Object(h.j)(w.Size),
        },
        h.c
      );
    (S.Variant = w), (t.b = S);
  },
  202: function (e, t, n) {
    e.exports = { outer: "_13AzE63U", inner: "_2E9Ot9TG" };
  },
  204: function (e, t, n) {
    "use strict";
    var a = n(2),
      r = n.n(a),
      i = n(7),
      c = n.n(i),
      o = n(6),
      s = n.n(o),
      l = n(0),
      u = n.n(l),
      d = n(5),
      f = n.n(d),
      m = n(8),
      p = (n(9), n(31)),
      b =
        (n(252),
        {
          "./skill-tag.scss": {
            tag: "_3a3YH6eA",
            "is-theme-caption-bold": "_1-_pAGYo",
          },
        }),
      g = function (e) {
        var t = e.url,
          n = c()(e, ["url"]);
        return t
          ? u.a.createElement(
              p.b,
              r()({ url: t }, n, { "data-id": "skill-tag" })
            )
          : u.a.createElement("span", n);
      },
      v = function (e) {
        var t = e.tag,
          n = e.style,
          a = e.theme,
          r = e.className;
        return u.a.createElement(
          g,
          {
            url: t.href,
            style: n,
            className:
              (r ? r + " " : "") +
              s()(f()("tag", Object(m.a)({ theme: a })), b, {
                handleMissingStyleName: "warn",
              }),
          },
          t.label
        );
      };
    (v.Variant = { Theme: { CaptionBold: "caption-bold" } }), (t.a = v);
  },
  206: function (e, t, n) {},
  208: function (e, t, n) {
    e.exports = {
      "sr-only": "eFMCsx1V",
      "legal-list-item": "VsStGjXj",
      "list-item": "_3ATfuKuZ",
      "is-text": "gtF3g8Jg",
      container: "_1cXxqsT8",
      "is-padding-top": "_1XY5XaF6",
      "links-container": "_2M_Xuie5",
      "legal-container": "_1Y3-upIm",
      column: "_1IGYFQew",
      "column-title": "uBxyYiCQ",
      "column-list": "GA1bS17F",
      "is-title": "_2lf3U9la",
      "legal-divider": "_39YHlWta",
      "legal-logo": "-mMkSI_A",
      "legal-links": "_9fVOHv9t",
      "is-theme-light": "_3xicDpfG",
    };
  },
  21: function (e, t) {
    e.exports = {
      publicPath: "https://frontier-assets.toptal.com/",
      uploadsUri: "https://bs-uploads.toptal.io",
      shortenerUri: "https://www.toptal.com/shorten_url",
      giorgioUri: "https://www.toptal.com/hire",
      pageInfoUri: "https://www.toptal.com/_info.json",
      appEnv: "production",
      sentryDsn:
        "https://j9beeXQfyC8vKs8Gs5luIDDr5SP72a2J@o66666.ingest.sentry.io/6660666",
      sentryPublicKey: "19ed9832c74f4e6a98c87dd03ed06662",
    };
  },
  210: function (e, t, n) {
    e.exports = {
      link: "yzdVnirF",
      list: "_2KkykVzB",
      item: "_1ffC2emj",
      "is-theme-grey": "_1UQKDH6z",
      "is-theme-blue": "_3NypLa63",
      "is-theme-light": "_26W7MbnX",
    };
  },
  212: function (e, t, n) {
    e.exports = {
      container: "_1bOB9L8B",
      "fade-in": "-NIeWj2_",
      modal: "_1jVWti9i",
      "modal-is-opened": "_13Ds6A9F",
    };
  },
  213: function (e, t, n) {
    "use strict";
    var a = n(2),
      r = n.n(a),
      i = n(7),
      c = n.n(i),
      o = n(0),
      s = n.n(o),
      l = n(57),
      u = n.n(l),
      d = n(11),
      f = n(10),
      m = n(80),
      p = n(104),
      b = n(212),
      g = n.n(b),
      v = function (e) {
        var t = e.open,
          n = e.focus,
          a = e.onDismiss,
          i = e.children,
          l = e.className,
          p = c()(e, ["open", "focus", "onDismiss", "children", "className"]),
          b = Object(o.useRef)(null);
        if (
          (Object(f.A)(t, g.a["modal-is-opened"]),
          Object(o.useEffect)(
            function () {
              t && n && b.current.focus();
            },
            [t, n]
          ),
          !t)
        )
          return null;
        var v = document.getElementById(m.a),
          h = s.a.createElement(
            m.b.Provider,
            { value: { onDismiss: a, parentRef: b } },
            s.a.createElement(
              "div",
              r()(
                {
                  className:
                    (l ? l + " " : "") +
                    "_1bOB9L8B " +
                    ((p && p.className) || ""),
                  onKeyDown: function (e) {
                    "Escape" === e.key && a();
                  },
                  ref: b,
                  tabIndex: n && -1,
                },
                p
              ),
              i
            )
          );
        return v && Object(d.a)()
          ? u.a.createPortal(h, v)
          : (console.warn(
              'Could not find "<Modal.Host />" node.\n Switched to inline rendering mode.'
            ),
            h);
      };
    (v.Host = p.a),
      (v.Content = function (e) {
        var t = e.className,
          n = e.children,
          a = c()(e, ["className", "children"]),
          i = Object(m.c)(),
          o = i.onDismiss,
          l = i.parentRef,
          u = Object(f.r)(o, l);
        return s.a.createElement(
          "div",
          r()(
            {
              className:
                (t ? t + " " : "") + "_1jVWti9i " + ((a && a.className) || ""),
              ref: u,
            },
            a
          ),
          n
        );
      }),
      (t.a = v);
  },
  214: function (e, t, n) {
    "use strict";
    var a = n(0),
      r = n.n(a),
      i = n(179);
    n(273),
      (t.a = function (e) {
        var t = e.text,
          n = void 0 === t ? i.i : t,
          a = e.className;
        return r.a.createElement(
          "div",
          { className: (a ? a + " " : "") + "_2Nig7dk2" },
          r.a.createElement("span", null, n)
        );
      });
  },
  215: function (e, t, n) {
    e.exports = { content: "_3ey0le1s" };
  },
  216: function (e, t, n) {
    e.exports = {
      container: "_3n2OQqU6",
      "is-sticky": "_3L4Q6K18",
      header: "_3OCaO4Sm",
      "button-close": "_2dbM_zjP",
    };
  },
  217: function (e, t, n) {
    e.exports = { loader: "_2DsED4qK" };
  },
  218: function (e, t, n) {
    e.exports = {
      root: "GL1BsDfm",
      "is-margin-standard": "Her0Bht-",
      "is-margin-bottom": "K0oC-ssM",
    };
  },
  219: function (e, t, n) {
    "use strict";
    var a = n(1),
      r = n.n(a),
      i = n(2),
      c = n.n(i),
      o = n(7),
      s = n.n(o),
      l = n(0),
      u = n.n(l),
      d = n(5),
      f = n.n(d),
      m = n(22),
      p = (n(9), n(28)),
      b = n(213),
      g = n(175),
      v = n(222),
      h = n.n(v),
      y = Object(l.forwardRef)(function (e, t) {
        var n = e.type,
          a = s()(e, ["type"]);
        return u.a.createElement(
          "button",
          c()(
            {
              type: "button",
              className:
                (f()(h.a["is-".concat(n)])
                  ? f()(h.a["is-".concat(n)]) + " "
                  : "") +
                "FQmfHJcO " +
                ((a && a.className) || ""),
              ref: t,
              "aria-label": "Close popup",
            },
            a
          ),
          "close" === n
            ? u.a.createElement(
                "svg",
                {
                  width: "100%",
                  height: "100%",
                  viewBox: "0 0 18 16",
                  xmlns: "http://www.w3.org/2000/svg",
                },
                u.a.createElement("path", {
                  d: "M1.210526.210526l15.578948 15.578948M16.789474.210526L1.210526 15.789474",
                })
              )
            : u.a.createElement(
                "svg",
                {
                  width: "100%",
                  height: "100%",
                  viewBox: "0 0 8 17",
                  xmlns: "http://www.w3.org/2000/svg",
                },
                u.a.createElement("path", {
                  d: "M.707.707l7.79 7.79m0 0l-7.79 7.79",
                  fill: "currentColor",
                  fillRule: "evenodd",
                })
              )
        );
      }),
      E = function (e) {
        var t = e.open,
          n = e.videos,
          a = e.onClose,
          i = e.onChange,
          c = e.titleComponent,
          o = (function (e) {
            var t = e.open,
              n = e.videos,
              a = e.selected,
              i = e.onChange,
              c = e.onClose,
              o = e.gaCategory,
              s = Object(l.useState)(0),
              u = r()(s, 2),
              d = u[0],
              f = u[1],
              m = Object(l.useRef)(Date.now()),
              b = a ? a.index : d,
              g = n[b];
            Object(l.useEffect)(
              function () {
                v();
              },
              [t]
            );
            var v = function () {
                var e = Date.now(),
                  t = e - m.current;
                return (m.current = e), Math.round(t / 1e3);
              },
              h = function (e) {
                var t = e.trackingLabel,
                  n = e.id;
                return t || n;
              },
              y = Object(l.useCallback)(
                function () {
                  o && Object(p.d)(o, "modal_watch", h(g), { value: v() });
                },
                [o, g]
              ),
              E = Object(l.useCallback)(
                function () {
                  y(), i && i(null), c();
                },
                [i, c, y]
              ),
              _ = Object(l.useCallback)(
                function (e) {
                  return function () {
                    for (
                      var t = b + e;
                      (t = t >= n.length ? 0 : t < 0 ? n.length - 1 : t) !==
                        b && !n[t].id;

                    )
                      t += e;
                    f(t);
                    var a = e > 0 ? "modal_prev" : "modal_next";
                    y(),
                      o && Object(p.d)(o, a, h(n[t])),
                      i && i({ index: t, action: a });
                  };
                },
                [n, b, i, o, y]
              );
            return {
              video: g,
              handleClose: E,
              handlePrev: _(1),
              handleNext: _(-1),
            };
          })({
            open: t,
            videos: n,
            selected: e.selected,
            onChange: i,
            onClose: a,
            gaCategory: e.gaCategory,
          }),
          s = o.handlePrev,
          d = o.handleNext,
          f = o.video,
          v = o.handleClose,
          h = Object(l.useRef)(),
          E = Object(l.useRef)();
        return u.a.createElement(
          b.a,
          { open: t, focus: !0, onDismiss: v, className: "_3XAqPobq" },
          u.a.createElement(
            b.a.Content,
            { className: "_32589ZBq" },
            u.a.createElement(
              "div",
              { className: "_12PhPQ9y" },
              u.a.createElement(y, {
                type: "close",
                "data-id": "video-popup-close",
                onClick: v,
                "aria-label": "close popup",
                ref: h,
                onKeyDown: function (e) {
                  e.shiftKey &&
                    "Tab" === e.key &&
                    ((E.current.dataset.focusPrevious = "true"),
                    E.current.focus());
                },
              }),
              u.a.createElement(
                "p",
                { className: "_5m6ZtOza", "data-id": "video-popup-title" },
                c ? u.a.createElement(c, f) : f.title
              ),
              n.length > 1 &&
                u.a.createElement(
                  "div",
                  { className: "_3w7vfekF" },
                  u.a.createElement(y, {
                    type: "prev",
                    "data-id": "video-popup-prev",
                    onClick: s,
                  }),
                  u.a.createElement(y, {
                    type: "next",
                    "data-id": "video-popup-next",
                    onClick: d,
                  })
                )
            ),
            u.a.createElement(
              "div",
              { className: "_1azDnTt_" },
              !m.a &&
                u.a.createElement(g.a, {
                  videoId: f.id,
                  autoplay: !0,
                  playsinline: !0,
                })
            ),
            u.a.createElement("div", {
              tabIndex: "0",
              ref: E,
              onFocus: function () {
                "true" === E.current.dataset.focusPrevious
                  ? (E.current.dataset.focusPrevious = "false")
                  : h.current.focus();
              },
            })
          )
        );
      },
      _ = (n(23), n(38)),
      O = n.n(_),
      j =
        (n(267),
        function (e) {
          var t = e.children,
            n = e.videos,
            a = e.className,
            i = e.style,
            o = e.onOpen,
            s = void 0 === o ? O.a : o,
            d = e.handleVideoChange,
            f = e.gaCategory,
            m = e.title,
            p = Object(l.useState)(!1),
            b = r()(p, 2),
            g = b[0],
            v = b[1],
            h = Object(l.useRef)();
          return u.a.createElement(
            u.a.Fragment,
            null,
            u.a.createElement(
              "button",
              c()(
                {
                  type: "button",
                  onClick: function (e) {
                    v(!0), s(e);
                  },
                  className:
                    (a ? a + " " : "") +
                    "GD313NS8 " +
                    ({ style: i }.className || ""),
                  "aria-label": m && "".concat(t, " - ").concat(m),
                  "aria-haspopup": "dialog",
                  "aria-controls": "modal-host",
                  ref: h,
                },
                { style: i }
              ),
              t
            ),
            u.a.createElement(
              E,
              c()(
                { open: g },
                { videos: n, gaCategory: f },
                {
                  onClose: function () {
                    v(!1), h.current.focus();
                  },
                  onChange: d,
                }
              )
            )
          );
        }),
      w = { Player: g.a, Popup: E, Button: j };
    t.a = w;
  },
  22: function (e, t, n) {
    "use strict";
    n(189), n(36), n(92), n(150);
    var a =
      "undefined" != typeof window &&
      [
        window.__IS_HAPPO_RUN,
        "loki" === window.navigator.userAgent,
        window.location.search.startsWith("?id=loki-"),
      ].some(Boolean);
    t.a = a;
  },
  222: function (e, t, n) {
    e.exports = {
      "toolbar-button": "FQmfHJcO",
      modal: "_3XAqPobq",
      "modal-content": "_32589ZBq",
      title: "_5m6ZtOza",
      player: "_1azDnTt_",
      toolbar: "_12PhPQ9y",
      "toolbar-nav": "_3w7vfekF",
      "is-prev": "_3ziMYWU6",
    };
  },
  224: function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
      return u;
    });
    var a = n(1),
      r = n.n(a),
      i = n(6),
      c = n.n(i),
      o = n(0),
      s = n.n(o),
      l =
        (n(285),
        {
          "./carousel.scss": {
            root: "_1YVFS3k_",
            slide: "RnscLuxI",
            active: "_1zefWubJ",
          },
        }),
      u = function (e) {
        var t = e.active,
          n = void 0 !== t && t,
          a = e.style,
          r = e.className,
          i = e.children;
        return s.a.createElement(
          "div",
          {
            style: a,
            className:
              (r ? r + " " : "") +
              c()("slide ".concat(n ? "active" : ""), l, {
                handleMissingStyleName: "warn",
              }),
          },
          i
        );
      };
    t.b = function (e) {
      var t = e.numberOfSlides,
        n = e.defaultActiveItemIndex,
        a = void 0 === n ? 0 : n,
        i = e.changeInterval,
        c = void 0 === i ? 5e3 : i,
        l = e.children,
        u = e.style,
        d = e.className,
        f = Object(o.useState)(a),
        m = r()(f, 2),
        p = m[0],
        b = m[1];
      return (
        Object(o.useEffect)(
          function () {
            var e = setTimeout(function () {
              return b((p + 1) % t);
            }, c);
            return function () {
              return clearTimeout(e);
            };
          },
          [p, c, t]
        ),
        s.a.createElement(
          "div",
          { className: (d ? d + " " : "") + "_1YVFS3k_", style: u },
          l(p)
        )
      );
    };
  },
  229: function (e, t, n) {
    "use strict";
    var a = n(2),
      r = n.n(a),
      i = n(7),
      c = n.n(i),
      o = n(0),
      s = n.n(o);
    t.a = function (e) {
      var t = e.url,
        n = e.className,
        a = e.as,
        i = void 0 === a ? "div" : a,
        o = e.children,
        l = c()(e, ["url", "className", "as", "children"]);
      return s.a.createElement(
        i,
        r()(
          {
            style: { backgroundImage: t ? "url(".concat(t, ")") : null },
            className: n,
          },
          l
        ),
        o
      );
    };
  },
  231: function (e, t, n) {
    "use strict";
    var a = n(2),
      r = n.n(a),
      i = n(7),
      c = n.n(i),
      o = n(6),
      s = n.n(o),
      l = n(0),
      u = n.n(l),
      d = n(5),
      f = n.n(d),
      m = (n(9), n(47)),
      p = n(8),
      b = n(31),
      g =
        (n(313),
        {
          "./hire-cta.scss": {
            container: "_2-8QnyrN",
            title: "_1wB6xpRs",
            btn: "_2-tX5EK8",
            "is-theme-blue": "b8TCI_zN",
            "is-orientation-vertical": "_67_yUPlK",
            "is-padding-none": "_1Soxeblk",
          },
        }),
      v = function (e) {
        var t = e.title,
          n = e.cta,
          a = n.href,
          i = n.label,
          o = c()(n, ["href", "label"]),
          l = e.className,
          d = e.orientation,
          v = e.theme,
          h = e.buttonVariant,
          y = void 0 === h ? b.b.Variant.Theme.CTA : h,
          E = e.padding,
          _ = e.onClick,
          O = e.inlineStyles,
          j = e.dataId;
        return u.a.createElement(
          "div",
          {
            className:
              (l ? l + " " : "") +
              s()(
                f()(
                  "container",
                  Object(p.a)({ orientation: d, theme: v, padding: E })
                ),
                g,
                { handleMissingStyleName: "warn" }
              ),
          },
          u.a.createElement(
            "p",
            { className: "_1wB6xpRs", "data-id": "hire-cta-title" },
            Object(m.a)(t)
          ),
          u.a.createElement(
            b.a,
            r()(
              {
                className:
                  "_2-tX5EK8 " +
                  ({ onClick: _, dataId: j }.className || "") +
                  (o ? " " + (o.className || "") : ""),
                url: a,
                type: y,
                style: O,
              },
              { onClick: _, dataId: j },
              o
            ),
            i
          )
        );
      };
    (v.Variant = {
      Theme: { Blue: "blue" },
      Orientation: { Vertical: "vertical" },
      Padding: { None: "none" },
    }),
      (t.a = v);
  },
  234: function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
      return r;
    }),
      n(223);
    var a = n(327);
    n.d(t, "b", function () {
      return a.a;
    });
    var r = { delay: 500, triggerOnce: !0 };
  },
  238: function (e, t, n) {
    "use strict";
    n(24);
    var a = n(2),
      r = n.n(a),
      i = n(1),
      c = n.n(i),
      o = n(0),
      s = n.n(o),
      l = n(3),
      u = n.n(l),
      d = n(47),
      f = n(10),
      m = n(9),
      p = n(28),
      b = n(16),
      g = n(219),
      v =
        (n(19),
        n(17),
        n(14),
        n(338),
        n(51),
        n(25),
        n(26),
        n(20),
        n(64),
        n(15),
        n(4)),
      h = n.n(v),
      y = n(7),
      E = n.n(y),
      _ = n(6),
      O = n.n(_),
      j = n(5),
      w = n.n(j),
      S = n(22),
      k = n(224),
      N = (n(27), n(33), n(11)),
      C = function (e) {
        var t = e.identifier,
          a = E()(e, ["identifier"]);
        if (!Object(N.a)()) return null;
        var r = s.a.lazy(function () {
          return n(301)("./".concat(t));
        });
        return s.a.createElement(
          o.Suspense,
          { fallback: null },
          r ? s.a.createElement(r, a) : null
        );
      },
      P = n(175);
    function x(e, t) {
      var n,
        a = Object.keys(e);
      return (
        Object.getOwnPropertySymbols &&
          ((n = Object.getOwnPropertySymbols(e)),
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
          a.push.apply(a, n)),
        a
      );
    }
    function L(e) {
      var t, n;
      for (t = 1; t < arguments.length; t++)
        (n = null != arguments[t] ? arguments[t] : {}),
          t % 2
            ? x(Object(n), !0).forEach(function (t) {
                h()(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : x(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
      return e;
    }
    n(250);
    var T = {
        "./clients-carousel.scss": {
          "clients-carousel": "_1CPABHY2",
          "is-invisible": "_3GX3Lxnr",
          clients: "_1VyYPMhf",
          "logo-container": "_2amITTdw",
          logo: "wOPq9JTO",
          "is-light": "_3OqXGefV",
          label: "_3VvCA52f",
          "is-static": "_29fwj9AM",
          "is-loaded": "_3LF-kzsO",
          "fade-in": "_2JYQswAH",
          "is-clickable": "_38ijoCqA",
        },
      },
      I = function (e) {
        var t = e.children,
          n = e.url,
          a = e.onClick,
          i = E()(e, ["children", "url", "onClick"]);
        return n
          ? s.a.createElement(
              "a",
              r()({}, i, {
                rel: "nofollow",
                href: n,
                onClick: a,
                className: "_38ijoCqA " + ((i && i.className) || ""),
                "aria-label": i.title,
              }),
              t
            )
          : s.a.createElement("span", i, t);
      },
      R = function (e) {
        var t = e.title,
          n = e.identifier,
          a = e.videoIdentifier,
          r = e.originalIndex,
          i = e.onClick,
          c = e.light;
        return s.a.createElement(
          I,
          {
            key: t,
            title: t,
            "aria-label": "Watch the ".concat(t, " case study"),
            url: a && Object(P.b)(a, !0),
            onClick: function (e) {
              e.preventDefault(), a && i && i({ index: r });
            },
            className: O()(w()("logo-container", { "is-light": c }), T, {
              handleMissingStyleName: "warn",
            }),
          },
          s.a.createElement(C, { className: "wOPq9JTO", identifier: n }),
          a &&
            s.a.createElement(
              "p",
              { className: "_3VvCA52f" },
              "Watch the case study"
            )
        );
      },
      M = Object(o.memo)(function (e) {
        var t = e.clients,
          n = e.activeItemIndex,
          a = e.numberOfSlides,
          i = e.chunkSize,
          c = e.light,
          o = e.onClick;
        return Array.from({ length: a }, function (e, a) {
          var l = i * a,
            u = i * (a + 1);
          u > t.length && ((l -= u - t.length), (u = t.length));
          var d = t.slice(l, u);
          return s.a.createElement(
            k.a,
            { className: "_1VyYPMhf", active: n === a, key: a },
            d.map(function (e) {
              return s.a.createElement(
                R,
                r()({ key: e.title }, e, { light: c, onClick: o })
              );
            })
          );
        });
      }),
      D = function (e) {
        var t = e.chunkSize,
          n = e.onClick,
          a = e.className,
          r = e.light,
          i = E()(e, ["chunkSize", "onClick", "className", "light"]),
          l = Object(o.useState)(!1),
          u = c()(l, 2),
          d = u[0],
          f = u[1],
          m = !t;
        m && (t = i.clients.length);
        var p = Math.ceil(i.clients.length / t),
          b = Object(o.useMemo)(
            function () {
              return i.clients.map(function (e, t) {
                return L(L({}, e), {}, { originalIndex: t });
              });
            },
            [i.clients]
          );
        return (
          Object(o.useEffect)(function () {
            var e = setTimeout(function () {
              f(!0);
            }, 1e3);
            return function () {
              clearTimeout(e);
            };
          }, []),
          s.a.createElement(
            k.b,
            {
              numberOfSlides: p,
              changeInterval: S.a ? 144e4 : 5e3,
              className:
                (a ? a + " " : "") +
                O()(
                  w()("clients-carousel", {
                    "is-loaded": d && !S.a,
                    "is-invisible": m,
                    "is-static": S.a,
                  }),
                  T,
                  { handleMissingStyleName: "warn" }
                ),
            },
            function (e) {
              return s.a.createElement(M, {
                clients: b,
                activeItemIndex: e,
                numberOfSlides: p,
                chunkSize: t,
                light: r,
                onClick: n,
              });
            }
          )
        );
      },
      A = (n(251), 6),
      U = function (e) {
        var t = e.title,
          n = e.clients,
          a = e.className,
          i = e.light,
          l = (function (e) {
            var t = Object(o.useState)(null),
              n = c()(t, 2),
              a = n[0],
              r = n[1];
            return {
              chunkSize: Object(f.C)(
                {
                  forMobileOnly: 2,
                  forTabletOnly: 3,
                  forDesktopOnly: 4,
                  forDesktopLarge: A,
                },
                null
              ),
              videos: Object(o.useMemo)(
                function () {
                  return e.map(function (e) {
                    return {
                      id: e.videoIdentifier,
                      title: e.title,
                      trackingLabel: e.identifier,
                    };
                  });
                },
                [e]
              ),
              selected: a,
              setSelected: r,
            };
          })(n),
          u = l.chunkSize,
          m = l.setSelected,
          v = l.videos,
          h = l.selected,
          y = Object(o.useCallback)(
            function (e) {
              var t = e.index;
              Object(p.d)("trustbar_video", "video_open", v[t].trackingLabel),
                m({ index: t });
            },
            [v, m]
          );
        return s.a.createElement(
          "div",
          { className: (a ? a + " " : "") + "U5_JdGVY" },
          s.a.createElement(
            b.a,
            { className: "KN3Bqp5f", width: b.a.Variant.Width.Fixed },
            s.a.createElement("p", { className: "_1eAmcXxe" }, Object(d.a)(t)),
            s.a.createElement(
              D,
              r()(
                {
                  className:
                    "_2zZGXHsn " +
                    ({ clients: n, chunkSize: u, light: i }.className || ""),
                },
                { clients: n, chunkSize: u, light: i },
                { onClick: y }
              )
            ),
            s.a.createElement(
              g.a.Popup,
              r()(
                { videos: v, selected: h },
                {
                  open: !!h,
                  onChange: m,
                  onClose: m,
                  titleComponent: function (e) {
                    var t = e.title;
                    return s.a.createElement(
                      s.a.Fragment,
                      null,
                      s.a.createElement("span", null, t),
                      s.a.createElement(
                        "span",
                        { className: "_10JizEvG" },
                        " Case Study"
                      )
                    );
                  },
                  gaCategory: "trustbar_video",
                }
              )
            )
          )
        );
      };
    (U.dataPropTypes = {
      title: u.a.string,
      clients: Object(m.a)({
        title: u.a.string.isRequired,
        identifier: u.a.string.isRequired,
        videoIdentifier: u.a.oneOfType([u.a.string, u.a.number]),
      }),
    }),
      (t.a = U);
  },
  245: function (e, t, n) {
    e.exports = {
      card: "_2aYXDjr3",
      "is-press-coverage": "_1LwwOY5T",
      "is-article": "k4Kjb1Dh",
      cta: "ZxJ1uE03",
      "card-title": "Qq-iPMxM",
      logo: "_1uIAd9Ad",
      "logo-image": "jeqnJEqF",
      "collaboration-logo": "_1NqI8JmY",
      "icon-quote": "_16aTA28q",
      "quote-text": "_1UhmiUga",
      "card-author-container": "_1liAAfjS",
      "card-author": "_2O26Zuqj",
      "card-author-title": "ivvUQSqp",
      "press-coverage-read-article": "_3p_xLXZw",
      "is-video": "_1doXJJpm",
      "video-cover": "_3-8TMpeS",
      "article-cover": "_2ud0q49P",
      "no-video-preview": "_1fycIOYl",
    };
  },
  248: function (e, t, n) {
    "use strict";
    var a = n(11),
      r = (n(24), n(62), n(0)),
      i = n.n(r),
      c = n(37),
      o = n.n(c),
      s = function (e) {
        var t = e.children;
        return Object(a.a)() ? null : t;
      };
    (s.BreadcrumbList = function (e) {
      var t = e.items;
      return i.a.createElement(
        o.a,
        null,
        i.a.createElement(
          "script",
          { type: "application/ld+json" },
          JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: t.map(function (e, t) {
              return {
                "@type": "ListItem",
                position: t + 1,
                name: e.name,
                item: e.url,
              };
            }),
          })
        )
      );
    }),
      (t.a = s);
  },
  252: function (e, t, n) {
    e.exports = { tag: "_3a3YH6eA", "is-theme-caption-bold": "_1-_pAGYo" };
  },
  257: function (e, t, n) {
    "use strict";
    var a = n(1),
      r = n.n(a),
      i = n(2),
      c = n.n(i),
      o = n(7),
      s = n.n(o),
      l = n(6),
      u = n.n(l),
      d = n(0),
      f = n.n(d),
      m = n(5),
      p = n.n(m),
      b = n(10),
      g = n(105),
      v =
        (n(349),
        {
          "./accordion.scss": {
            container: "_29UvQdrG",
            group: "_1BHWVawP",
            main: "_3crLzOOj",
            "is-expanded": "_30rdsl3I",
          },
        }),
      h = f.a.createContext({}),
      y = function (e) {
        var t = e.expanded,
          n = void 0 !== t && t,
          a = e.as,
          i = void 0 === a ? "div" : a,
          o = e.className,
          l = e.children,
          d = s()(e, ["expanded", "as", "className", "children"]),
          m = Object(b.z)(n),
          g = r()(m, 2),
          y = g[0],
          E = g[1];
        return f.a.createElement(
          h.Provider,
          { value: { expanded: y, toggleExpanded: E } },
          f.a.createElement(
            i,
            c()({}, d, {
              className:
                (o ? o + " " : "") +
                u()(p()("container", { "is-expanded": y }), v, {
                  handleMissingStyleName: "warn",
                }) +
                " " +
                ((d && d.className) || ""),
            }),
            "function" == typeof l ? l({ expanded: y }) : l
          )
        );
      };
    (y.Main = function (e) {
      var t = e.as,
        n = void 0 === t ? "div" : t,
        a = e.className,
        r = e.children,
        i = s()(e, ["as", "className", "children"]),
        o = Object(d.useContext)(h).toggleExpanded;
      return f.a.createElement(
        g.a,
        c()(
          {
            onClick: o,
            className:
              (a ? a + " " : "") + "_3crLzOOj " + ((i && i.className) || ""),
            as: n,
          },
          i
        ),
        r
      );
    }),
      (y.Group = function (e) {
        var t = e.as,
          n = void 0 === t ? "div" : t,
          a = e.className,
          i = e.children,
          o = s()(e, ["as", "className", "children"]),
          l = Object(d.useContext)(h).expanded,
          u = Object(d.useRef)(null),
          m = Object(d.useState)(0),
          p = r()(m, 2),
          g = p[0],
          v = p[1],
          y = Object(b.F)();
        return (
          Object(d.useEffect)(
            function () {
              v(l && u.current ? u.current.scrollHeight : 0);
            },
            [l, y]
          ),
          f.a.createElement(
            n,
            c()(
              {
                ref: u,
                style: { maxHeight: g },
                className:
                  (a ? a + " " : "") +
                  "_1BHWVawP " +
                  ((o && o.className) || ""),
              },
              o
            ),
            i
          )
        );
      }),
      (t.a = y);
  },
  261: function (e, t, n) {
    "use strict";
    n.d(t, "b", function () {
      return r;
    }),
      n(36),
      n(70);
    var a = function (e) {
      var t =
        arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : " ";
      return e.replace(/(?:\r\n|\r|\n)/g, t);
    };
    t.a = a;
    var r = function (e) {
      return a(e, "<br />");
    };
  },
  262: function (e, t, n) {
    "use strict";
    var a = n(2),
      r = n.n(a),
      i = n(7),
      c = n.n(i),
      o = n(0),
      s = n.n(o);
    n(315),
      (t.a = function (e) {
        var t = e.as,
          n = void 0 === t ? "div" : t,
          a = e.copy,
          i = e.className,
          o = c()(e, ["as", "copy", "className"]);
        return s.a.createElement(
          n,
          r()(
            {
              className:
                (i ? i + " " : "") + "_1MmTcDEI " + ((o && o.className) || ""),
            },
            o,
            { dangerouslySetInnerHTML: { __html: a } }
          )
        );
      });
  },
  263: function (e, t, n) {
    "use strict";
    n(24);
    var a = n(6),
      r = n.n(a),
      i = n(0),
      c = n.n(i),
      o = n(5),
      s = n.n(o),
      l = n(47),
      u = n(8),
      d = (n(9), n(31)),
      f =
        (n(306),
        {
          "./skills-list.scss": {
            container: "_1cwKlNuP",
            title: "_8hq62nwZ",
            "skills-list": "zjL-4_Jq",
            "list-item": "rY5wqR2J",
            "arrow-link": "_2ESoqxj-",
            "is-theme-dark": "lLehEWy0",
            link: "_2cc321tl",
          },
        }),
      m = function (e) {
        var t = e.title,
          n = e.skillPages,
          a = e.cta,
          i = e.theme,
          o = e.className;
        return c.a.createElement(
          "div",
          {
            className:
              (o ? o + " " : "") +
              r()(s()("container", Object(u.a)({ theme: i })), f, {
                handleMissingStyleName: "warn",
              }),
          },
          t &&
            c.a.createElement(
              "h2",
              { className: "_8hq62nwZ", "data-id": "skills-list-title" },
              t
            ),
          c.a.createElement(
            "ul",
            { className: "zjL-4_Jq" },
            n.map(function (e) {
              var t = e.label,
                n = e.href;
              return c.a.createElement(
                "li",
                { key: t + n, className: "rY5wqR2J" },
                c.a.createElement(
                  d.b,
                  { url: n, className: "_2cc321tl", "data-id": "skill-link" },
                  t
                )
              );
            }),
            a &&
              c.a.createElement(
                "li",
                { className: "rY5wqR2J" },
                c.a.createElement(
                  d.b,
                  {
                    type: d.b.Variant.Theme.Highlighted,
                    className: "_2ESoqxj-",
                    url: a.href,
                  },
                  Object(l.a)(a.label)
                )
              )
          )
        );
      };
    (m.Variant = { Theme: { Dark: "dark" } }), (t.a = m);
  },
  267: function (e, t, n) {
    e.exports = { "play-btn": "GD313NS8" };
  },
  277: function (e, t, n) {
    "use strict";
    n.d(t, "c", function () {
      return c;
    }),
      n.d(t, "a", function () {
        return s;
      }),
      n(19),
      n(17),
      n(14),
      n(25),
      n(26),
      n(20),
      n(15);
    var a = n(4),
      r = n.n(a);
    function i(e, t) {
      var n,
        a = Object.keys(e);
      return (
        Object.getOwnPropertySymbols &&
          ((n = Object.getOwnPropertySymbols(e)),
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
          a.push.apply(a, n)),
        a
      );
    }
    var c = function (e, t) {
        var n = e.vendorScriptsSettings.trustpilotSettings.businessUnitId;
        return o(
          (function (e) {
            var t, n;
            for (t = 1; t < arguments.length; t++)
              (n = null != arguments[t] ? arguments[t] : {}),
                t % 2
                  ? i(Object(n), !0).forEach(function (t) {
                      r()(e, t, n[t]);
                    })
                  : Object.getOwnPropertyDescriptors
                  ? Object.defineProperties(
                      e,
                      Object.getOwnPropertyDescriptors(n)
                    )
                  : i(Object(n)).forEach(function (t) {
                      Object.defineProperty(
                        e,
                        t,
                        Object.getOwnPropertyDescriptor(n, t)
                      );
                    });
            return e;
          })({ businessUnitId: n }, t)
        );
      },
      o = function (e) {
        return {
          businessUnitId: e.businessUnitId,
          templateId: e.templateId,
          locale: "en-US",
          href: "https://www.trustpilot.com/review/toptal.com",
          disableSEOSnippet: e.disableSEOSnippet,
        };
      },
      s = {
        SKILL_PAGE_SIDEBAR: "53aa8807dec7e10d38f59f32",
        SKILL_PAGE: "53aa8912dec7e10d38f59f36",
        HIRING_GUIDE_PAGE: "5406e65db0d04a09e042d5fc",
        HOME_PAGE: "5406e65db0d04a09e042d5fc",
        VERTICAL_LANDING_PAGE: "5406e65db0d04a09e042d5fc",
      };
    t.b = o;
  },
  279: function (e, t, n) {
    "use strict";
    n(19), n(176), n(24);
    var a = n(1),
      r = n.n(a),
      i = n(6),
      c = n.n(i),
      o = n(0),
      s = n.n(o),
      l = (n(223), n(5)),
      u = n.n(l),
      d = n(234),
      f = n(22),
      m = n(47),
      p = (n(9), n(8)),
      b = n(123),
      g = n.n(b),
      v = n(16),
      h = n(52),
      y = n(58),
      E = n(48),
      _ =
        (n(340),
        {
          "./feature-stepper.scss": {
            container: "_3fZLMPLS",
            "is-theme-dark-blue": "_2dbxKckM",
            title: "_35agMcd-",
            "steps-container": "_1epx56Ug",
            steps: "TTvbhb5G",
            "step-arrow": "p0URF4Wy",
            "is-align-left": "_1BxnkSO_",
            "is-align-center": "_2Rtbw_d5",
            "is-static": "lnGffDGZ",
            "chevron-icon": "_3c1caa7v",
            step: "_2pfxVgGF",
            "step-container": "_1P9Tvb24",
            "steps-animated": "_2qGKqRqZ",
            "steps-counter-enter": "_3OLpik2C",
            "steps-content-enter": "qDI0Ujkt",
            "steps-arrow-enter": "tnt6E2os",
            "step-number": "_2ecxW5_b",
            "step-content": "_1TA7PM5e",
            "is-theme-light-blue": "_2FXfVeAR",
            "step-title": "_2yVHU0Wx",
            "step-description": "_12ydEHM0",
          },
        }),
      O = function (e) {
        var t = e.items,
          n = s.a.createElement(
            "div",
            { className: "p0URF4Wy" },
            s.a.createElement(g.a, { className: "_3c1caa7v" })
          ),
          a = y.d / t.length,
          i = Object(d.b)(d.a),
          o = r()(i, 2),
          l = o[0],
          p = o[1],
          b = s.a.createElement(
            "div",
            { className: "_1epx56Ug" },
            s.a.createElement(
              h.b,
              {
                role: "list",
                className: c()(u()("steps", { "is-static": f.a }), _, {
                  handleMissingStyleName: "warn",
                }),
              },
              t.map(function (e, t) {
                var r = e.title,
                  i = e.description;
                return s.a.createElement(
                  h.a,
                  {
                    key: t,
                    tablet: a,
                    className: "_1P9Tvb24",
                    role: "listitem",
                  },
                  s.a.createElement(
                    "div",
                    { className: "_2pfxVgGF" },
                    0 === t && n,
                    s.a.createElement("div", { className: "_2ecxW5_b" }, t + 1),
                    n,
                    s.a.createElement(
                      "div",
                      { className: "_1TA7PM5e" },
                      s.a.createElement(
                        "h3",
                        { className: "_2yVHU0Wx", "data-id": "step-title" },
                        r
                      ),
                      s.a.createElement(
                        "div",
                        { className: "_12ydEHM0" },
                        Object(m.a)(i)
                      )
                    )
                  )
                );
              })
            )
          );
        return f.a
          ? b
          : s.a.createElement(
              "div",
              {
                ref: l,
                className: c()(u()({ "steps-animated": p }), _, {
                  handleMissingStyleName: "warn",
                }),
              },
              b
            );
      },
      j = {
        Theme: { DarkBlue: "dark-blue", LightBlue: "light-blue" },
        Align: { Center: "center", Left: "left" },
      },
      w = function (e) {
        var t = e.title,
          n = e.items,
          a = e.className,
          r = e.theme,
          i = e.align,
          o = void 0 === i ? j.Align.Center : i;
        return s.a.createElement(
          "div",
          {
            className:
              (a ? a + " " : "") +
              c()(u()("container", Object(p.a)({ theme: r, align: o })), _, {
                handleMissingStyleName: "warn",
              }),
          },
          s.a.createElement(
            v.a,
            {
              semantic: !0,
              width: v.a.Variant.Width.Fixed,
              space: v.a.Variant.Space.None,
            },
            s.a.createElement(E.a, {
              content: Object(m.a)(t),
              as: "h2",
              isUnstyled: !0,
              className: "_35agMcd-",
              dataId: "feature-stepper-title",
            }),
            s.a.createElement(O, { items: n })
          )
        );
      };
    (w.Variant = j), (t.a = w);
  },
  28: function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
      return R;
    }),
      n.d(t, "b", function () {
        return M;
      }),
      n.d(t, "d", function () {
        return D;
      }),
      n.d(t, "c", function () {
        return A;
      }),
      n(19),
      n(23),
      n(17),
      n(14),
      n(56),
      n(110),
      n(62),
      n(185),
      n(25),
      n(26),
      n(20),
      n(27),
      n(33),
      n(36),
      n(64),
      n(92),
      n(233),
      n(15),
      n(68),
      n(75);
    var a = n(7),
      r = n.n(a),
      i = n(18),
      c = n.n(i),
      o = (n(67), n(35)),
      s = n.n(o),
      l = n(1),
      u = n.n(l),
      d = n(66),
      f = n.n(d),
      m = n(63),
      p = n.n(m),
      b = n(4),
      g = n.n(b),
      v = n(99),
      h = n(97),
      y = n(39),
      E = n(84),
      _ = n(30),
      O = n.n(_),
      j = (function () {
        function e() {
          f()(this, e),
            g()(this, "_triggered", !1),
            g()(this, "_triggerArgs", []),
            g()(this, "_callbacks", []);
        }
        return (
          p()(e, [
            {
              key: "push",
              value: function (e) {
                this._triggered
                  ? e.apply(void 0, O()(this._triggerArgs))
                  : (this._callbacks = [].concat(O()(this._callbacks), [e]));
              },
            },
            {
              key: "trigger",
              value: function () {
                var e,
                  t,
                  n,
                  a = this;
                if (this._triggered)
                  throw new Error("Callbacks already triggered");
                for (
                  this._triggered = !0,
                    e = arguments.length,
                    t = new Array(e),
                    n = 0;
                  n < e;
                  n++
                )
                  t[n] = arguments[n];
                (this._triggerArgs = [].concat(t)),
                  this._callbacks.forEach(function (e) {
                    return e.apply(void 0, O()(a._triggerArgs));
                  });
              },
            },
          ]),
          e
        );
      })(),
      w = n(53),
      S = n(46),
      k = (n(94), n(51), n(232), n(70), n(103), n(11)),
      N = {
        location: Object(k.a)() ? window.location : "",
        href: function () {
          return this.location.href;
        },
        hash: function () {
          return this.location.hash;
        },
        setHref: function (e) {
          return (this.location.href = e), this.location.href;
        },
        setHash: function (e) {
          return (this.location.hash = e), this.location.hash;
        },
        reload: function () {
          return this.location.reload();
        },
      };
    var C = n(85);
    function P(e, t) {
      var n,
        a = Object.keys(e);
      return (
        Object.getOwnPropertySymbols &&
          ((n = Object.getOwnPropertySymbols(e)),
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
          a.push.apply(a, n)),
        a
      );
    }
    function x(e) {
      var t, n;
      for (t = 1; t < arguments.length; t++)
        (n = null != arguments[t] ? arguments[t] : {}),
          t % 2
            ? P(Object(n), !0).forEach(function (t) {
                g()(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : P(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
      return e;
    }
    var L,
      T = function (e) {
        return e
          .filter(function (e) {
            return e.googleAnalyticsDimension;
          })
          .reduce(function (e, t) {
            var n = t.googleAnalyticsDimension,
              a = t.variant;
            return Object.assign(e, g()({}, n, a));
          }, {});
      },
      I = (function () {
        function e(t) {
          var n = this,
            a = t.applicationId,
            r = t.group,
            i = t.chameleonExperiments,
            c = void 0 === i ? [] : i,
            o = t.platformSessionUrl,
            s = void 0 === o ? "" : o,
            l = t.platformReferrersUrl,
            d = void 0 === l ? "" : l,
            m = t.codeVersions,
            p = void 0 === m ? {} : m;
          f()(this, e),
            (this.trackingId = a),
            (this.platformSessionUrl = s),
            (this.platformReferrersUrl = d),
            (this.trackingAllowed = !1),
            (this.group = r),
            (this.chameleonExperiments = c),
            (this.codeVersions = p),
            (this.sendToGoogleAnalytics =
              this.sendToGoogleAnalytics.bind(this)),
            this.enabled &&
              (this.bootstrapGtag(),
              (this.scriptPromise = Object(h.a)(
                "https://www.googletagmanager.com/gtag/js?id=".concat(
                  this.trackingId
                )
              )),
              (this.pageInfoPromise = Object(E.a)().catch(function () {})),
              (this.currentRolePromise = new Promise(function (e) {
                return Object(C.a)(n.platformSessionUrl, function (t) {
                  return e(t);
                });
              })),
              this.waitForReadyState()
                .then(function (e) {
                  var t = u()(e, 2)[1];
                  (n.trackingAllowed =
                    !!Object(S.a)() || Object(w.a)(t.cookiePolicyType)),
                    n.configureGtag(),
                    (function (e) {
                      if (window[e])
                        if (Array.isArray(window[e])) {
                          var t = window[e];
                          (window[e] = new j()),
                            t.forEach(function (t) {
                              return window[e].push(t);
                            });
                        } else
                          window[e] instanceof j ||
                            y.a.warning(
                              'Failed to expose callbacks, "'.concat(
                                window[e],
                                '" has unexpected type.'
                              )
                            );
                      else window[e] = new j();
                      return window[e];
                    })("_runWhenGoogleAnalyticsReady").trigger();
                })
                .catch(function (e) {
                  y.a.error("Google Analytics failed to load", { error: e });
                }));
        }
        var t;
        return (
          p()(e, [
            {
              key: "bootstrapGtag",
              value: function () {
                (window.dataLayer = window.dataLayer || []),
                  (window.gtag =
                    window.gtag ||
                    function () {
                      dataLayer.push(arguments);
                    });
              },
            },
            {
              key: "configureGtag",
              value: function () {
                var e,
                  t,
                  n,
                  a,
                  r,
                  i,
                  c =
                    ((e = !this.trackingAllowed),
                    (t = this.group),
                    (n = this.chameleonExperiments),
                    (a = this.codeVersions),
                    Object.assign(
                      (function (e, t) {
                        return {
                          anonymize_ip: e,
                          content_group1: t,
                          site_speed_sample_rate: 25,
                          linker: ["www.toptal.com", "staging.toptal.net"],
                          custom_map: { dimension10: "client_id" },
                        };
                      })(e, t),
                      T(n),
                      x(
                        {},
                        (i = new URLSearchParams(window.location.search).get(
                          "utm_audience"
                        )) && { dimension9: i }
                      ),
                      {
                        dimension22: (r = a).blackfish,
                        dimension23: r.frontier,
                      }
                    ));
                window.gtag("js", new Date()),
                  window.gtag("config", this.trackingId, c);
              },
            },
            {
              key: "waitForReadyState",
              value: function () {
                var e = [this.scriptPromise];
                return (
                  Object(S.a)() ||
                    e.push(this.pageInfoPromise, this.currentRolePromise),
                  Promise.all(e)
                );
              },
            },
            {
              key: "_sendEvent",
              value:
                ((t = s()(
                  c.a.mark(function e() {
                    var t,
                      n,
                      a,
                      r,
                      i = arguments;
                    return c.a.wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              if (this.enabled) {
                                e.next = 2;
                                break;
                              }
                              return e.abrupt("return");
                            case 2:
                              return (e.next = 4), this.waitForReadyState();
                            case 4:
                              for (
                                n = i.length, a = new Array(n), r = 0;
                                r < n;
                                r++
                              )
                                a[r] = i[r];
                              (t = window).gtag.apply(t, ["event"].concat(a));
                            case 6:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                )),
                function () {
                  return t.apply(this, arguments);
                }),
            },
            {
              key: "bucketRole",
              value: function () {
                var e = this;
                return this.waitForReadyState().then(function (t) {
                  var n = u()(t, 3)[2];
                  n &&
                    n.role_type &&
                    n.role_id &&
                    gtag("config", e.trackingId, {
                      send_page_view: !1,
                      dimension11: ""
                        .concat(n.role_type, "-")
                        .concat(n.role_id),
                    });
                });
              },
            },
            {
              key: "track15secondsRead",
              value: function () {
                var t = this;
                return (
                  this.track15secondsReadPromise ||
                    (this.track15secondsReadPromise = new Promise(function (n) {
                      setTimeout(function () {
                        t._sendEvent("read", {
                          event_category: "15_seconds",
                        }).then(n);
                      }, e.readTimeout);
                    })),
                  this.track15secondsReadPromise
                );
              },
            },
            {
              key: "sendToGoogleAnalytics",
              value: function (e) {
                var t = e.name,
                  n = e.delta,
                  a = e.id;
                return this._sendEvent(t, {
                  event_category: "web_vitals",
                  event_label: a,
                  value: Math.round("CLS" === t ? 1e3 * n : n),
                  non_interaction: !0,
                });
              },
            },
            {
              key: "trackCoreWebVitals",
              value: function () {
                Object(v.a)(this.sendToGoogleAnalytics),
                  Object(v.b)(this.sendToGoogleAnalytics),
                  Object(v.c)(this.sendToGoogleAnalytics);
              },
            },
            {
              key: "trackReferrerSlug",
              value: function () {
                var e = this;
                return (function (e) {
                  var t = (function () {
                    if ("string" == typeof N.hash())
                      return decodeURIComponent(N.hash().substring(1));
                  })();
                  if (!t) return Promise.resolve();
                  !(function (e) {
                    var t = e.indexOf("#");
                    t > -1 && N.setHash(e.slice(0, t));
                  })((t = t.replace(/\./g, "#")));
                  var n = {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/x-www-form-urlencoded",
                    },
                    body: "referral_slug=".concat(t),
                  };
                  return window
                    .fetch(e, n)
                    .then(function (e) {
                      return e.json();
                    })
                    .then(function (e) {
                      return e.slug
                        ? ((n = e.slug),
                          N.setHash(N.hash().replace(n, "")),
                          N.href().match(/#$/) &&
                            window.history &&
                            window.history.replaceState(
                              null,
                              window.document.title,
                              N.href().split("#")[0]
                            ),
                          t)
                        : null;
                      var n;
                    })
                    .catch(function (e) {
                      y.a.error("setReferrerCookie Error", { error: e });
                    });
                })(this.platformReferrersUrl).then(function (t) {
                  if (t)
                    return e._sendEvent("landed", {
                      event_category: "referral_slug",
                      event_label: t,
                    });
                });
              },
            },
            {
              key: "trackBounceModalView",
              value: function (e) {
                return this._sendEvent("".concat(e, "_bounce_modal_view"), {
                  event_category: "bounce_modal",
                  non_interaction: !0,
                });
              },
            },
            {
              key: "trackBlogSubscription",
              value: function (e) {
                return this._sendEvent("subscribe", {
                  event_category: "blog",
                  event_label: e,
                });
              },
            },
            {
              key: "trackCoreTeamJobApplicationFormApplied",
              value: function (e) {
                return this._sendEvent("submitted_application", {
                  event_category: "core_team_applications",
                  event_label: e,
                });
              },
            },
            {
              key: "trackDynamicQuiz",
              value: function (e, t, n, a) {
                return this._sendEvent(
                  t,
                  x(
                    x({ event_category: e }, n && { event_label: n }),
                    "number" == typeof a && { value: a }
                  )
                );
              },
            },
            {
              key: "trackHashHiringGuide",
              value: function (e, t) {
                return this._sendEvent(e, {
                  event_category: "hash_hiring_guide",
                  event_label: t,
                });
              },
            },
            {
              key: "trackEvent",
              value: function (e) {
                var t = e.eventCategory,
                  n = e.eventAction,
                  a = e.eventLabel,
                  i = r()(e, ["eventCategory", "eventAction", "eventLabel"]);
                return this._sendEvent(
                  n,
                  x({ event_category: t, event_label: a }, i)
                );
              },
            },
            {
              key: "trackRemoteReadinessResultDownloaded",
              value: function (e) {
                return this._sendEvent(
                  "enterprise_remote_readiness_result_pdf_downloaded",
                  {
                    event_category: "enterprise_remote_readiness_quiz",
                    event_label: e,
                  }
                );
              },
            },
            {
              key: "trackRemoteMaturityAssessment",
              value: function (e, t) {
                return this._sendEvent(e, {
                  event_category: "remote_maturity_assessment",
                  event_label: t,
                });
              },
            },
            {
              key: "trackRemoteReadinessQuizStarted",
              value: function (e) {
                return this.trackRemoteMaturityAssessment(
                  "redirected_to_quiz",
                  e
                );
              },
            },
            {
              key: "trackSocialButtonClicked",
              value: function (e) {
                var t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : "social_networks";
                return this._sendEvent("share", {
                  event_category: t,
                  event_label: e,
                });
              },
            },
            {
              key: "enabled",
              get: function () {
                return null != this.trackingId && this.trackingId.trim();
              },
            },
          ]),
          e
        );
      })();
    function R(e) {
      var t = e.applicationId,
        n = e.group,
        a = e.chameleonExperiments,
        r = e.platformSessionUrl,
        i = e.platformReferrersUrl,
        c = e.codeVersions,
        o = e.track15SecondsRead,
        s = void 0 === o || o;
      return (
        L ||
          ((L = new I({
            applicationId: t,
            group: n,
            chameleonExperiments: a,
            platformSessionUrl: r,
            platformReferrersUrl: i,
            codeVersions: c,
          })).bucketRole(),
          L.trackReferrerSlug(),
          s && L.track15secondsRead(),
          L.trackCoreWebVitals()),
        L
      );
    }
    function M() {
      return L;
    }
    function D(e, t, n) {
      var a =
        arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      M() &&
        M().trackEvent(
          x({ eventCategory: e, eventAction: t, eventLabel: n }, a)
        );
    }
    I.readTimeout = 15e3;
    var A = function (e) {
      e.nativeEvent.shouldStopGAPropagation = !0;
    };
  },
  280: function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
      return m;
    });
    var a = n(2),
      r = n.n(a),
      i = n(18),
      c = n.n(i),
      o = (n(67), n(35)),
      s = n.n(o),
      l = n(0),
      u = n.n(l),
      d = n(97),
      f = n(287),
      m = { Light: "light" },
      p = { Small: 28, Large: 140 },
      b = function (e) {
        var t = e.templateId,
          n = e.businessUnitId,
          a = e.locale,
          i = e.height,
          o = e.width,
          l = e.theme,
          m = e.href,
          p = e.loadOnFirstScroll,
          b = void 0 !== p && p,
          g = e.disableSEOSnippet,
          v = void 0 !== g && g,
          h = u.a.useRef(null),
          y = (function () {
            var e = s()(
              c.a.mark(function e() {
                return c.a.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (e.next = 2),
                          Object(d.a)(
                            "//widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js"
                          )
                        );
                      case 2:
                        h.current &&
                          window.Trustpilot.loadFromElement(h.current, !0);
                      case 3:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            );
            return function () {
              return e.apply(this, arguments);
            };
          })();
        u.a.useEffect(
          function () {
            b ? Object(f.a)(y) : y();
          },
          [t, b]
        );
        var E = {};
        return (
          v || (E["data-schema-type"] = "Organization"),
          u.a.createElement(
            "div",
            r()(
              {
                className: "trustpilot-widget",
                "data-businessunit-id": n,
                "data-locale": a,
                "data-style-width": o,
                "data-style-height": i,
                "data-template-id": t,
                "data-theme": l,
                "data-stars": "5",
              },
              E,
              { ref: h },
              { "data-happo-hide": !0 }
            ),
            u.a.createElement(
              "a",
              r()({ href: m }, { target: "_blank", rel: "noreferrer noopener" })
            )
          )
        );
      };
    (b.Height = p),
      (b.FullWidth = function (e) {
        return u.a.createElement(
          b,
          r()({ width: "100%", height: p.Large, theme: m.Light }, e)
        );
      }),
      (t.b = b);
  },
  285: function (e, t, n) {
    e.exports = { root: "_1YVFS3k_", slide: "RnscLuxI", active: "_1zefWubJ" };
  },
  287: function (e, t, n) {
    "use strict";
    t.a = function (e) {
      window.addEventListener(
        "scroll",
        function t() {
          window.removeEventListener("scroll", t, !1), e();
        },
        !1
      );
    };
  },
  29: function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
      return w;
    }),
      n.d(t, "b", function () {
        return S.a;
      });
    var a = n(2),
      r = n.n(a),
      i = n(7),
      c = n.n(i),
      o = n(4),
      s = n.n(o),
      l = n(6),
      u = n.n(l),
      d = n(0),
      f = n.n(d),
      m = n(5),
      p = n.n(m),
      b = (n(9), n(8)),
      g = n(60),
      v = n(43),
      h =
        (n(191),
        {
          "./button.scss": {
            "is-loading": "_1rwcd8Qg",
            text: "_2NmneBKH",
            spinner: "vus_t9VU",
          },
        }),
      y = v.a.Variant,
      E = v.a.HtmlElement,
      _ = { Button: "button", Submit: "submit" },
      O = s()({}, y.Size.Small, g.a.Variant.Size.Tiny),
      j = function (e) {
        var t = e.as,
          n = void 0 === t ? E.Button : t,
          a = e.type,
          i = void 0 === a ? _.Submit : a,
          o = e.loading,
          s = e.children,
          l = c()(e, ["as", "type", "loading", "children"]);
        return f.a.createElement(
          v.a,
          r()({ as: n, type: i }, l, {
            className:
              u()(p()(Object(b.b)({ loading: o })), h, {
                handleMissingStyleName: "warn",
              }) +
              " " +
              ({ as: n, type: i }.className || "") +
              (l ? " " + (l.className || "") : ""),
          }),
          o &&
            f.a.createElement(g.a, {
              className: "vus_t9VU",
              size: O[l.size] || g.a.Variant.Size.Small,
            }),
          f.a.createElement("span", { className: "_2NmneBKH" }, s)
        );
      };
    (j.Variant = y), (j.Type = _), (j.HtmlElement = E);
    var w = j,
      S = n(119);
  },
  301: function (e, t, n) {
    var a = {
      "./": [249, 3],
      "./airbnb": [289, 64],
      "./airbnb.js": [289, 64],
      "./bridgestone": [290, 65],
      "./bridgestone.js": [290, 65],
      "./cleveland_cavaliers": [291, 66],
      "./cleveland_cavaliers.js": [291, 66],
      "./csr": [292, 67],
      "./csr.js": [292, 67],
      "./duolingo": [293, 68],
      "./duolingo.js": [293, 68],
      "./hewlett_packard": [294, 69],
      "./hewlett_packard.js": [294, 69],
      "./index": [249, 3],
      "./index.js": [249, 3],
      "./kddi": [295, 70],
      "./kddi.js": [295, 70],
      "./motorola": [296, 71],
      "./motorola.js": [296, 71],
      "./priceline": [297, 72],
      "./priceline.js": [297, 72],
      "./shopify": [299, 73],
      "./shopify.js": [299, 73],
      "./thumbtack": [298, 74],
      "./thumbtack.js": [298, 74],
      "./usc": [300, 75],
      "./usc.js": [300, 75],
    };
    function r(e) {
      if (!n.o(a, e))
        return Promise.resolve().then(function () {
          var t = new Error("Cannot find module '" + e + "'");
          throw ((t.code = "MODULE_NOT_FOUND"), t);
        });
      var t = a[e],
        r = t[0];
      return n.e(t[1]).then(function () {
        return n(r);
      });
    }
    (r.keys = function () {
      return Object.keys(a);
    }),
      (r.id = 301),
      (e.exports = r);
  },
  302: function (e, t, n) {
    "use strict";
    n(24), n(51);
    var a = n(2),
      r = n.n(a),
      i = n(0),
      c = n.n(i),
      o = n(3),
      s = n.n(o),
      l = n(9),
      u = n(201),
      d = n(31),
      f = n(71),
      m = n(16),
      p = n(52);
    n(329),
      s.a.string.isRequired,
      Object(l.a)(u.a),
      l.e,
      (t.a = function (e) {
        var t = e.title,
          n = e.blogPosts,
          a = e.ctas,
          i = e.className,
          o = e.gaCategory,
          s = e.gaEvent,
          l = e.gaLabel;
        return (
          (n = n.slice(0, 5)),
          c.a.createElement(
            m.a,
            { semantic: !0, className: i, width: m.a.Variant.Width.Fixed },
            c.a.createElement(
              f.a,
              { className: "_3t7loGZ8", dataId: "blog-section-title" },
              t
            ),
            5 === n.length &&
              c.a.createElement(
                "div",
                { className: "rArfi2Y4", role: "list" },
                n.map(function (e, t) {
                  return c.a.createElement(
                    u.b,
                    r()(
                      {},
                      e,
                      {
                        size: 0 === t ? u.b.Variant.Size.Large : null,
                        key: e.publicUrl,
                        className:
                          "_2JS0AOBT " +
                          ((e && e.className) || "") +
                          " " +
                          ({ gaCategory: o, gaEvent: s, gaLabel: l }
                            .className || ""),
                      },
                      { gaCategory: o, gaEvent: s, gaLabel: l },
                      { role: "listitem" }
                    )
                  );
                })
              ),
            n.length < 5 &&
              c.a.createElement(
                p.b,
                { className: "_2wGkI_Z1", role: "list" },
                n.map(function (e, t) {
                  return c.a.createElement(
                    p.a,
                    {
                      key: t,
                      tablet: 3 === n.length ? 4 : 1 === n.length ? 12 : 6,
                    },
                    c.a.createElement(
                      u.b,
                      r()(
                        {},
                        e,
                        {
                          size: 1 === n.length ? u.b.Variant.Size.Large : null,
                          className:
                            "_2JS0AOBT " +
                            ((e && e.className) || "") +
                            " " +
                            ({ gaCategory: o, gaEvent: s, gaLabel: l }
                              .className || ""),
                        },
                        { gaCategory: o, gaEvent: s, gaLabel: l },
                        { role: "listitem" }
                      )
                    )
                  );
                })
              ),
            a &&
              c.a.createElement(
                "div",
                { className: "_21PbwWbz" },
                a.map(function (e) {
                  var t = e.label,
                    n = e.href;
                  return c.a.createElement(
                    d.b,
                    { type: d.b.Variant.Theme.Secondary, url: n, key: n },
                    t
                  );
                })
              )
          )
        );
      });
  },
  306: function (e, t, n) {
    e.exports = {
      container: "_1cwKlNuP",
      title: "_8hq62nwZ",
      "skills-list": "zjL-4_Jq",
      "list-item": "rY5wqR2J",
      "arrow-link": "_2ESoqxj-",
      "is-theme-dark": "lLehEWy0",
      link: "_2cc321tl",
    };
  },
  31: function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
      return k;
    }),
      n(19),
      n(17),
      n(14),
      n(25),
      n(26),
      n(20),
      n(15);
    var a = n(4),
      r = n.n(a),
      i = n(2),
      c = n.n(i),
      o = n(7),
      s = n.n(o),
      l = n(6),
      u = n.n(l),
      d = n(0),
      f = n.n(d),
      m = n(3),
      p = n.n(m),
      b = n(5),
      g = n.n(b),
      v = n(9),
      h = n(8),
      y = n(32);
    function E(e, t) {
      var n,
        a = Object.keys(e);
      return (
        Object.getOwnPropertySymbols &&
          ((n = Object.getOwnPropertySymbols(e)),
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
          a.push.apply(a, n)),
        a
      );
    }
    function _(e) {
      var t, n;
      for (t = 1; t < arguments.length; t++)
        (n = null != arguments[t] ? arguments[t] : {}),
          t % 2
            ? E(Object(n), !0).forEach(function (t) {
                r()(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : E(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
      return e;
    }
    n(183);
    var O = {
        "./link.scss": {
          "is-default": "_2c9SYlj-",
          "is-highlighted": "_1j539ymL",
          "is-link": "PthuWf2h",
          "is-one-of-many": "_1cbuwrb6",
          "is-full-width": "_8uVE4y50",
          "is-cta": "_2Gqpr7uD",
          "is-secondary": "aqyl0q_p",
          "is-light-bg": "_1qE3XAR2",
          "is-dark-bg": "_2KUnCSOe",
          "is-secondary-white": "_7bt0mHWW",
          "is-secondary-green": "_1Ua9YXW7",
          "is-blue": "_3lwaZMA7",
          "is-size-medium": "_3jIdWyZN",
          "is-white": "KU5YZA1d",
        },
      },
      j = {
        Size: { Medium: "medium" },
        Theme: {
          CTA: "cta",
          Secondary: "secondary",
          SecondaryWhite: "secondary-white",
          SecondaryGreen: "secondary-green",
          Highlighted: "highlighted",
          Link: "link",
          FullWidth: "full-width",
          Blue: "blue",
          White: "white",
        },
      },
      w = Object(d.forwardRef)(function (e, t) {
        var n = e.type,
          a = void 0 === n ? "default" : n,
          r = e.url,
          i = e.variant,
          o = void 0 === i ? "" : i,
          l = e.size,
          d = void 0 === l ? "" : l,
          m = e.dataId,
          p = e.a11yHidden,
          b = void 0 !== p && p,
          v = e.children,
          y = s()(e, [
            "type",
            "url",
            "variant",
            "size",
            "dataId",
            "a11yHidden",
            "children",
          ]);
        return f.a.createElement(
          "a",
          c()(
            { href: r, "data-id": m },
            b && { "aria-hidden": !0, tabIndex: "-1" },
            { ref: t },
            y,
            {
              className:
                u()(
                  g()(Object(h.a)(a), Object(h.a)(o), Object(h.a)({ size: d })),
                  O,
                  { handleMissingStyleName: "warn" }
                ) +
                " " +
                ((b &&
                  (b && { "aria-hidden": !0, tabIndex: "-1" }).className) ||
                  "") +
                " " +
                ({ ref: t }.className || "") +
                (y ? " " + (y.className || "") : ""),
            }
          ),
          v
        );
      }),
      S = Object(v.j)(j.Theme);
    (w.propTypes = {
      type: S,
      url: p.a.string.isRequired,
      variant: p.a.oneOfType([p.a.arrayOf(p.a.string), S]),
      size: Object(v.j)(j.Size),
      children: p.a.any,
      itemProp: p.a.string,
      dataId: p.a.string,
      a11yHidden: p.a.bool,
    }),
      (w.Variant = j),
      (t.b = w);
    var k = Object(d.forwardRef)(function (e, t) {
      var n = e.gaCategory,
        a = e.gaEvent,
        r = e.gaLabel,
        i = s()(e, ["gaCategory", "gaEvent", "gaLabel"]);
      return f.a.createElement(w, c()({}, i, Object(y.b)(n, a, r), { ref: t }));
    });
    (k.Variant = j), (k.propTypes = _(_({}, w.PropTypes), v.c));
  },
  313: function (e, t, n) {
    e.exports = {
      container: "_2-8QnyrN",
      title: "_1wB6xpRs",
      btn: "_2-tX5EK8",
      "is-theme-blue": "b8TCI_zN",
      "is-orientation-vertical": "_67_yUPlK",
      "is-padding-none": "_1Soxeblk",
    };
  },
  315: function (e, t, n) {
    e.exports = { root: "_1MmTcDEI" };
  },
  316: function (e, t, n) {
    "use strict";
    n.d(t, "b", function () {
      return S;
    }),
      n.d(t, "a", function () {
        return C;
      }),
      n(23),
      n(17);
    var a = n(2),
      r = n.n(a),
      i = n(30),
      c = n.n(i),
      o = n(7),
      s = n.n(o),
      l = n(0),
      u = n.n(l),
      d = (n(9), n(219)),
      f = n(28),
      m = n(6),
      p = n.n(m),
      b = n(5),
      g = n.n(b),
      v = n(47),
      h = n(45),
      y = n(91),
      E = n(93),
      _ = n(245),
      O = n.n(_),
      j = {
        "../testimonial-visual-card.scss": {
          "card-title": "Qq-iPMxM",
          logo: "_1uIAd9Ad",
          "logo-image": "jeqnJEqF",
          cta: "ZxJ1uE03",
          "collaboration-logo": "_1NqI8JmY",
          "icon-quote": "_16aTA28q",
          "quote-text": "_1UhmiUga",
          "card-author-container": "_1liAAfjS",
          "card-author": "_2O26Zuqj",
          "card-author-title": "ivvUQSqp",
          "is-press-coverage": "_1LwwOY5T",
          "press-coverage-read-article": "_3p_xLXZw",
          card: "_2aYXDjr3",
          "is-video": "_1doXJJpm",
          "video-cover": "_3-8TMpeS",
          "article-cover": "_2ud0q49P",
          "is-article": "k4Kjb1Dh",
          "no-video-preview": "_1fycIOYl",
        },
      },
      w = function (e) {
        var t = e.previewVideoUrl,
          n = e.previewSquareImageUrl,
          a = e.previewWideImageUrl,
          r = e.authorLogoImageUrl,
          i = e.authorCompany,
          c = e.title,
          o = e.quote,
          s = e.author,
          l = e.authorTitle,
          d = e.className,
          f = e.coverClassName,
          m = e.type,
          b = e.children;
        return u.a.createElement(
          "div",
          {
            className:
              (d ? d + " " : "") +
              p()(g()("card", { "no-video-preview": !t }), j, {
                handleMissingStyleName: "warn",
              }),
          },
          u.a.createElement(
            "div",
            { className: p()(f, j, { handleMissingStyleName: "warn" }) },
            u.a.createElement(h.a, { src: n || a, alt: "", effect: "opacity" })
          ),
          r &&
            u.a.createElement(
              "div",
              { className: "_1uIAd9Ad" },
              "collaboration_article" === m &&
                u.a.createElement(
                  "span",
                  { className: "_1NqI8JmY" },
                  u.a.createElement(y.b, null)
                ),
              u.a.createElement(h.a, { className: "jeqnJEqF", src: r, alt: i })
            ),
          o &&
            u.a.createElement(
              u.a.Fragment,
              null,
              u.a.createElement(E.f, { className: "_16aTA28q" }),
              u.a.createElement("p", { className: "_1UhmiUga" }, o)
            ),
          c &&
            u.a.createElement("p", { className: "Qq-iPMxM" }, Object(v.a)(c)),
          s &&
            u.a.createElement(
              "div",
              { className: "_1liAAfjS" },
              u.a.createElement("p", { className: "_2O26Zuqj" }, s),
              u.a.createElement("p", { className: "ivvUQSqp" }, l)
            ),
          b
        );
      },
      S = function (e) {
        var t = e.gaCategory,
          n = e.gaEvent,
          a = e.gaLabel,
          i = e.videoIdentifier,
          o = e.videos,
          m = void 0 === o ? [] : o,
          p = e.authorCompany,
          b = e.authorWhiteLogoImageUrl,
          g = e.className,
          v = e.previewVideoUrl,
          h = e.title,
          y = e.videoCtaText,
          E = void 0 === y ? "Watch the video" : y,
          _ = s()(e, [
            "gaCategory",
            "gaEvent",
            "gaLabel",
            "videoIdentifier",
            "videos",
            "authorCompany",
            "authorWhiteLogoImageUrl",
            "className",
            "previewVideoUrl",
            "title",
            "videoCtaText",
          ]);
        t = t || "video_card";
        var O = Object(l.useMemo)(
            function () {
              return [{ id: i, title: p }].concat(
                c()(
                  m.filter(function (e) {
                    return e.id !== i;
                  })
                )
              );
            },
            [m, p, i]
          ),
          j = Object(l.useCallback)(
            function () {
              Object(f.d)(t, n || "video_open", a || i);
            },
            [t, n, a, i]
          );
        return u.a.createElement(
          w,
          r()(
            {
              previewVideoUrl: v,
              authorCompany: p,
              authorLogoImageUrl: b,
              title: h,
            },
            _,
            {
              coverClassName: "video-cover",
              className:
                (g ? g + " " : "") +
                "_1doXJJpm " +
                ({
                  previewVideoUrl: v,
                  authorCompany: p,
                  authorLogoImageUrl: b,
                  title: h,
                }.className || "") +
                (_ ? " " + (_.className || "") : ""),
            }
          ),
          u.a.createElement(
            d.a.Button,
            r()(
              { className: "video-cta", videos: O, onOpen: j, title: h },
              { gaCategory: t }
            ),
            E
          ),
          v &&
            u.a.createElement(
              "figure",
              null,
              u.a.createElement("video", {
                src: v,
                autoPlay: !0,
                loop: !0,
                muted: !0,
              })
            )
        );
      },
      k = (n(278), n(8)),
      N = function (e) {
        var t = e.url,
          n = e.title,
          a = e.label,
          r = e.newWindow;
        return u.a.createElement(
          "a",
          {
            className: "ZxJ1uE03",
            href: t,
            "aria-label": n,
            target: Object(k.c)({ _blank: r }),
          },
          a || "Read more"
        );
      },
      C = function (e) {
        var t = e.authorWhiteLogoImageUrl,
          n = e.className,
          a = e.url,
          i = e.title,
          c = e.link;
        return u.a.createElement(
          w,
          r()({}, e, {
            authorLogoImageUrl: t,
            className: g()(n, O.a["is-article"]),
            coverClassName: "article-cover",
          }),
          u.a.createElement(N, r()({ url: a, title: i }, c))
        );
      };
    n(31);
  },
  32: function (e, t, n) {
    "use strict";
    n.d(t, "c", function () {
      return a;
    }),
      n.d(t, "b", function () {
        return r;
      }),
      n.d(t, "a", function () {
        return i;
      });
    var a = function (e, t, n) {
        return {
          "data-ga-category": e,
          "data-ga-event": t,
          "data-ga-label": n,
        };
      },
      r = function (e, t, n) {
        var r;
        return e
          ? (e.gaCategory &&
              ((e = (r = e).gaCategory), (t = r.gaEvent), (n = r.gaLabel)),
            a(e, t, n))
          : {};
      },
      i = function (e, t) {
        return function (n) {
          var a =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : t;
          return r(e, a, n);
        };
      };
  },
  322: function (e, t, n) {
    "use strict";
    var a = n(0),
      r = n.n(a),
      i = n(37),
      c = n.n(i),
      o = n(248);
    t.a = function (e) {
      var t = e.schema;
      return r.a.createElement(
        o.a,
        null,
        r.a.createElement(
          c.a,
          null,
          r.a.createElement(
            "script",
            { type: "application/ld+json" },
            JSON.stringify(t)
          )
        )
      );
    };
  },
  326: function (e, t, n) {
    e.exports = {
      "breadcrumb-item": "_31aQZWyI",
      link: "_35iK7zmm",
      excerpt: "IpHlFM7w",
      breadcrumbs: "_27W_cjOv",
      "blog-card": "_2AOdQKTV",
      content: "KxHj95DN",
      "is-size-large": "_3avJuwHw",
      cover: "_3l9VlKPe",
      "avatar-container": "_3xeRr4HI",
      avatar: "_1kyxjycq",
      title: "PnmEEQ_-",
      author: "_1mjIKiS3",
      "reading-time": "_3XfNRYjc",
      "reading-continue": "IYgLf9Fx",
    };
  },
  329: function (e, t, n) {
    e.exports = {
      title: "_3t7loGZ8",
      items: "rArfi2Y4",
      "grid-items": "_2wGkI_Z1",
      "blog-card": "_2JS0AOBT",
      "cta-holder": "_21PbwWbz",
    };
  },
  331: function (e, t, n) {
    "use strict";
    n(27),
      n(33),
      (t.a = function (e) {
        return new Promise(function (t) {
          return setTimeout(t, e);
        });
      });
  },
  336: function (e, t, n) {
    "use strict";
    n(235), n(14), n(24), n(15);
    var a = n(1),
      r = n.n(a),
      i = n(0);
    t.a = function (e) {
      var t = Object(i.useState)(!1),
        n = r()(t, 2),
        a = n[0],
        c = n[1],
        o = Object(i.useRef)({}),
        s = Object(i.useCallback)(
          function (t) {
            (o.current[t.target.dataset.originalUrl] = !0),
              c(
                e.every(function (e) {
                  return o.current[e];
                })
              );
          },
          [e]
        );
      return (
        Object(i.useEffect)(
          function () {
            var t = e.map(function (e) {
              var t = document.createElement("img");
              return (
                t.addEventListener("load", s),
                t.addEventListener("error", s),
                (t.dataset.originalUrl = e),
                (t.src = e),
                t
              );
            });
            return function () {
              t.forEach(function (e) {
                e.removeEventListener("load", s),
                  e.addEventListener("error", s);
              });
            };
          },
          [e, s]
        ),
        a
      );
    };
  },
  34: function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
      return a;
    }),
      n.d(t, "b", function () {
        return r;
      });
    var a = "cookie-banner-host",
      r = { GDPR: "gdpr", PrivacyShield: "privacy_shield" };
  },
  346: function (e, t, n) {
    "use strict";
    var a = n(0),
      r = n.n(a);
    t.a = function (e) {
      return r.a.createElement(
        "svg",
        { width: "12", height: "8", xmlns: "http://www.w3.org/2000/svg" },
        r.a.createElement(
          "g",
          {
            className: e.className,
            stroke: "#FFF",
            fill: "none",
            fillRule: "evenodd",
          },
          r.a.createElement("path", {
            d: "M0 3.607h11.253M8 .107l3.5 3.5-3.5 3.5",
          })
        )
      );
    };
  },
  348: function (e, t, n) {
    "use strict";
    n(19), n(176), n(17), n(24), n(227);
    var a = n(4),
      r = n.n(a),
      i = n(2),
      c = n.n(i),
      o = n(7),
      s = n.n(o),
      l = n(408),
      u = n.n(l),
      d = n(0),
      f = n.n(d),
      m = n(5),
      p = n.n(m),
      b = (n(9), n(52)),
      g = n(58),
      v = n(16),
      h = n(31),
      y = n(316),
      E = n(71),
      _ =
        (n(405),
        function (e, t, n) {
          switch (n) {
            case g.a.Desktop:
              if (2 === e) return t > 0 ? 8 : 4;
              break;
            case g.a.Tablet:
              switch (e) {
                case 3:
                  return t > 0 ? 6 : 12;
                case 2:
                  return 6;
              }
          }
          return 4;
        }),
      O = function (e) {
        var t = e.testimonials,
          n = e.isTitleCell,
          a = e.gutter,
          r = e.videos,
          i = Number(n),
          o = t.length + i,
          l = t.map(function (e, t) {
            var n = e.type,
              a = s()(e, ["type"]),
              l = t + i;
            return f.a.createElement(
              b.a,
              {
                key: t,
                desktop: _(o, l, g.a.Desktop),
                tablet: _(o, l, g.a.Tablet),
                role: "listitem",
              },
              "video" === n
                ? f.a.createElement(
                    y.b,
                    c()(
                      {},
                      a,
                      { videos: r },
                      {
                        className:
                          "_2vQjp_O2 " +
                          ((a && a.className) || "") +
                          " " +
                          ({ videos: r }.className || ""),
                      }
                    )
                  )
                : f.a.createElement(
                    y.a,
                    c()({}, a, {
                      className: "_2vQjp_O2 " + ((a && a.className) || ""),
                    })
                  )
            );
          });
        return o > 3
          ? f.a.createElement(
              b.a,
              {
                className: "_2vQjp_O2",
                desktop: 8,
                tablet: 12,
                role: "listitem",
              },
              f.a.createElement(b.b, c()({ role: "list" }, { gutter: a }), l)
            )
          : l;
      },
      j = function (e) {
        var t = e.title,
          n = e.ctas;
        return f.a.createElement(
          "div",
          { className: "_7qDyl__j" },
          f.a.createElement("p", { "data-id": "footer-cta-title" }, t),
          f.a.createElement(
            "div",
            { className: "_2pGhqCYE" },
            n.map(function (e) {
              var t = e.label,
                n = e.href,
                a = e.inlineStyles,
                r = e.dataId,
                i = s()(e, ["label", "href", "inlineStyles", "dataId"]);
              return f.a.createElement(
                h.a,
                c()(
                  { type: h.a.Variant.Theme.CTA, url: n, key: n, style: a },
                  { dataId: r },
                  i
                ),
                t
              );
            })
          )
        );
      };
    t.a = function (e) {
      var t,
        n = e.rows,
        a = e.footer,
        i = e.className,
        o = e.gutter,
        s = Object(d.useMemo)(
          function () {
            return u()(
              n.map(function (e) {
                return e.testimonials;
              })
            )
              .filter(function (e) {
                return "video" === e.type;
              })
              .map(function (e) {
                return { id: e.videoIdentifier, title: e.authorCompany };
              });
          },
          [n]
        );
      return f.a.createElement(
        v.a,
        {
          className: i,
          width: v.a.Variant.Width.Fixed,
          space: v.a.Variant.Space.None,
        },
        f.a.createElement(
          v.a,
          {
            space: p()(
              ((t = {}),
              r()(t, v.a.Variant.Space.Medium, a),
              r()(t, v.a.Variant.Space.None, !a),
              t)
            ),
          },
          f.a.createElement(
            b.b,
            c()({ role: "list" }, { gutter: o }),
            n.map(function (e, t) {
              var n = e.title,
                a = e.description,
                r = e.testimonials;
              return f.a.createElement(
                d.Fragment,
                { key: t },
                n &&
                  f.a.createElement(
                    b.a,
                    { desktop: 4, className: "_vWh44cV", role: "listitem" },
                    f.a.createElement(
                      "div",
                      { className: "_64wRZ6xh" },
                      f.a.createElement(
                        E.a,
                        {
                          className: "_1r8wFQ13",
                          dataId: "clients-grid-title",
                        },
                        n
                      ),
                      a && f.a.createElement("p", { className: "_2Fa2w4cD" }, a)
                    )
                  ),
                f.a.createElement(
                  O,
                  c()(
                    { testimonials: r, gutter: o, videos: s },
                    { isTitleCell: !!n }
                  )
                )
              );
            })
          )
        ),
        a && f.a.createElement(j, a)
      );
    };
  },
  349: function (e, t, n) {
    e.exports = {
      container: "_29UvQdrG",
      group: "_1BHWVawP",
      main: "_3crLzOOj",
      "is-expanded": "_30rdsl3I",
    };
  },
  356: function (e, t, n) {
    "use strict";
    n(23), n(24);
    var a = n(2),
      r = n.n(a),
      i = n(30),
      c = n.n(i),
      o = n(7),
      s = n.n(o),
      l = n(6),
      u = n.n(l),
      d = n(0),
      f = n.n(d),
      m = n(5),
      p = n.n(m),
      b = (n(9), n(31)),
      g =
        (n(354),
        {
          "./cta-group.scss": {
            "cta-group": "_3RO_VtGq",
            "has-many": "_11w9_Ic7",
          },
        });
    t.a = function (e) {
      var t = e.ctas,
        n = e.theme,
        a = void 0 === n ? "light-bg" : n,
        i = e.className;
      return f.a.createElement(
        "div",
        {
          className:
            (i ? i + " " : "") +
            u()(p()("cta-group", { "has-many": t.length > 1 }), g, {
              handleMissingStyleName: "warn",
            }),
        },
        t.map(function (e) {
          var n = e.href,
            i = e.label,
            o = e.variant,
            l = void 0 === o ? "" : o,
            u = s()(e, ["href", "label", "variant"]);
          return f.a.createElement(
            b.a,
            r()(
              {
                key: n,
                type: b.a.Variant.Theme.CTA,
                variant: [].concat(c()(t.length > 1 ? ["one-of-many"] : []), [
                  a,
                  l,
                ]),
                url: n,
                dataId: "cta-group",
              },
              u
            ),
            i
          );
        })
      );
    };
  },
  372: function (e, t, n) {
    "use strict";
    n(62);
    var a,
      r = n(2),
      i = n.n(r),
      c = n(4),
      o = n.n(c),
      s = n(0),
      l = n.n(s),
      u = (n(9), n(12)),
      d = n(112),
      f =
        ((a = {}),
        o()(a, u.g.Developers, u.b.DESKTOP_LARGE),
        o()(a, u.g.Designers, u.b.DESKTOP_LARGE),
        o()(a, u.g.FinanceExperts, u.b.DESKTOP_LARGE),
        o()(a, u.g.ProductManagers, d.a.Breakpoints.DESKTOP_XLARGE),
        o()(a, u.g.ProjectManagers, d.a.Breakpoints.DESKTOP_XLARGE),
        a),
      m = function (e) {
        var t = e.vertical,
          n = e.variant,
          a = e.navbarData,
          r = e.sidebar,
          c = e.platformSessionUrl,
          o = e.className;
        return l.a.createElement(
          d.a,
          i()(
            {
              navbarData: a,
              platformSessionUrl: c,
              variant: n,
              sidebar: r,
              className: o,
            },
            {
              sticky: !0,
              upperBreakpoint: f[t.name],
              logo: { suffix: t.title, layout: { default: { wordmark: !1 } } },
            }
          )
        );
      };
    (m.Variant = d.a.Variant), (t.a = m);
  },
  39: function (e, t, n) {
    "use strict";
    var a = n(41),
      r = function (e) {
        return function (t, n) {
          if (!i()) return !1;
          window.Sentry.captureEvent({ message: t, level: e, extra: n });
        };
      },
      i = function () {
        return (
          !!window.Sentry ||
          (a.d || console.warn("Sentry is not initialized"), !1)
        );
      };
    t.a = {
      info: r("info"),
      debug: r("debug"),
      warning: r("warning"),
      critical: r("critical"),
      error: r("error"),
    };
  },
  396: function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
      return ee;
    }),
      n(72);
    var a = n(2),
      r = n.n(a),
      i = n(1),
      c = n.n(i),
      o = n(38),
      s = n.n(o),
      l = n(0),
      u = n.n(l),
      d = n(10),
      f = n(79),
      m = n(13),
      p = n(571),
      b = (n(529), n(6)),
      g = n.n(b),
      v = n(764),
      h = n(5),
      y = n.n(h),
      E = n(8),
      _ = (n(44), n(573)),
      O = n.n(_),
      j = (n(9), n(60)),
      w =
        (n(602),
        {
          "./search-input.scss": {
            container: "_37X7UFmN",
            "input-wrapper": "xTCDIYN8",
            input: "_3K8PNYA9",
            aux: "_3rftV7Nd",
            spinner: "_22-LNnes",
            "is-clear": "I8N09ekG",
            button: "FOdDmYhD",
            "is-search": "-wTcXLPq",
            "is-size-compact": "_3WUPrY6m",
            "search-icon": "_3t_rUPY_",
            "is-size-small": "NbTJOC--",
          },
        }),
      S = { Size: { Small: "small", Compact: "compact" } },
      k = function (e) {
        var t = e.placeholder,
          n = e.value,
          a = e.size,
          i = e.isLoading,
          c = e.onChange,
          o = e.onSearch,
          d = e.onClear,
          f = void 0 === d ? s.a : d,
          m = e.onBlur,
          p = void 0 === m ? s.a : m,
          b = e.onFocus,
          v = void 0 === b ? s.a : b,
          h = e.className,
          _ = Object(l.useRef)(),
          k = Object(l.useCallback)(
            function (e) {
              e && e.preventDefault(), o(!1);
            },
            [o]
          ),
          N = Object(l.useCallback)(
            function (e) {
              e.preventDefault(), o(!0);
            },
            [o]
          ),
          C = Object(l.useCallback)(
            function () {
              _.current.focus(), f();
            },
            [f]
          ),
          P = Object(l.useCallback)(
            function (e) {
              [13, 27].includes(e.keyCode) && (_.current.blur(), p()),
                13 === e.keyCode && k();
            },
            [k, p]
          ),
          x = a === S.Size.Compact;
        return u.a.createElement(
          "form",
          {
            onSubmit: k,
            className:
              (h ? h + " " : "") +
              g()(y()("container", Object(E.a)({ size: a })), w, {
                handleMissingStyleName: "warn",
              }),
          },
          u.a.createElement(
            "div",
            r()(
              { className: "xTCDIYN8 " + ({ onFocus: v }.className || "") },
              { onFocus: v }
            ),
            x && u.a.createElement(O.a, { className: "_3t_rUPY_" }),
            u.a.createElement(
              "input",
              r()(
                { value: n, placeholder: t, ref: _, onChange: c },
                {
                  onKeyDown: P,
                  className:
                    "_3K8PNYA9 " +
                    ({ value: n, placeholder: t, ref: _, onChange: c }
                      .className || ""),
                }
              )
            ),
            u.a.createElement(
              "div",
              { className: "_3rftV7Nd" },
              !!n &&
                u.a.createElement("button", {
                  className: "FOdDmYhD I8N09ekG",
                  type: "button",
                  onClick: C,
                }),
              i &&
                u.a.createElement(j.a, {
                  size: j.a.Variant.Size.Small,
                  className: "_22-LNnes",
                })
            )
          ),
          !x &&
            u.a.createElement(
              "button",
              { className: "FOdDmYhD -wTcXLPq", onClick: N },
              u.a.createElement(O.a, null)
            )
        );
      };
    k.Variant = S;
    var N = k,
      C =
        (n(603),
        {
          "./search-bar.scss": {
            container: "J4tFGnz9",
            "search-input": "_1cVV_096",
            "is-expanded": "sbmkSeYH",
            dropdown: "_17SNG318",
          },
        }),
      P = Object(l.forwardRef)(function (e, t) {
        var n = e.placeholder,
          a = void 0 === n ? "Type to start searching..." : n,
          i = e.className,
          o = e.onSearch,
          s = e.onChange,
          f = e.value,
          m = e.size,
          p = e.isLoading,
          b = e.onExpand,
          h = e.onCollapse,
          _ = e.onClear,
          O = e.children,
          j = (function (e, t, n, a, r) {
            var i = Object(l.useState)(!1),
              o = c()(i, 2),
              s = o[0],
              u = o[1],
              f = Object(l.useCallback)(
                function () {
                  s && (u(!1), r && r());
                },
                [r, s]
              ),
              m = Object(l.useCallback)(
                function () {
                  s || (u(!0), a && a());
                },
                [a, s]
              ),
              p = Object(l.useCallback)(
                function (t) {
                  f(), e && e(t);
                },
                [f, e]
              ),
              b = Object(d.r)(f),
              g = Object(l.useCallback)(
                function (e) {
                  m(), t(e.target.value);
                },
                [m, t]
              ),
              v = Object(l.useCallback)(
                function () {
                  t(""), n && n();
                },
                [t, n]
              );
            return {
              containerRef: b,
              isExpanded: s,
              handleChange: g,
              handleClear: v,
              handleSearch: p,
              handleExpand: m,
              handleCollapse: f,
            };
          })(o, s, _, b, h),
          w = j.containerRef,
          S = j.isExpanded,
          k = j.handleChange,
          P = j.handleClear,
          x = j.handleSearch,
          L = j.handleCollapse,
          T = j.handleExpand,
          I = S && O,
          R = Object(l.useCallback)(
            function () {
              setTimeout(L, 200);
            },
            [L]
          );
        return u.a.createElement(
          "div",
          {
            ref: Object(v.a)([w, t]),
            className: (i ? i + " " : "") + "J4tFGnz9",
          },
          u.a.createElement(
            N,
            r()(
              { value: f, placeholder: a, size: m, isLoading: p },
              {
                onChange: k,
                onClear: P,
                onSearch: x,
                onFocus: T,
                onBlur: R,
                className:
                  g()(y()("search-input", Object(E.b)({ isExpanded: I })), C, {
                    handleMissingStyleName: "warn",
                  }) +
                  " " +
                  ({ value: f, placeholder: a, size: m, isLoading: p }
                    .className || ""),
              }
            )
          ),
          I && u.a.createElement("div", { className: "_17SNG318" }, O)
        );
      });
    (P.Variant = N.Variant), (P.displayName = "SearchBar");
    var x = P,
      L = Object(l.createContext)({}),
      T =
        (n(19), n(17), n(14), n(24), n(110), n(25), n(26), n(20), n(15), n(4)),
      I = n.n(T),
      R = n(7),
      M = n.n(R),
      D = n(47),
      A = n(148),
      U = n(464),
      z =
        (n(779),
        {
          "./dropdown-section.scss": {
            container: "_1-a_9qL8",
            "info-message": "_1Zmsin8p",
            "is-info": "zOls6cTR",
            "is-compact": "_3BTDlKNI",
            "link-list-section": "_6CRLOWhf",
            "link-list-section-title": "_1dhg0W9C",
            "link-list-item": "I0iL1nfG",
            "link-list-group-list": "MgEtwLcx",
            "is-horizontal": "_14GfLqH1",
          },
        });
    function q(e, t) {
      var n,
        a = Object.keys(e);
      return (
        Object.getOwnPropertySymbols &&
          ((n = Object.getOwnPropertySymbols(e)),
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
          a.push.apply(a, n)),
        a
      );
    }
    function V(e) {
      var t, n;
      for (t = 1; t < arguments.length; t++)
        (n = null != arguments[t] ? arguments[t] : {}),
          t % 2
            ? q(Object(n), !0).forEach(function (t) {
                I()(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : q(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
      return e;
    }
    var B = function (e) {
        var t = e.sectionTitle,
          n = e.label,
          a = e.href,
          i = e.position,
          c = e.onClick,
          o = Object(l.useCallback)(
            function () {
              c && c(t, { label: n, position: i });
            },
            [t, n, i, c]
          );
        return u.a.createElement(
          A.a,
          r()(
            {
              className: "I0iL1nfG " + ({ href: a }.className || ""),
              title: n,
              onClick: o,
            },
            { href: a }
          ),
          Object(D.a)(n)
        );
      },
      G = function (e) {
        var t = e.sections,
          n = e.isHorizontal,
          a = e.isCompact,
          i = e.onSelect,
          c = Object(l.useMemo)(
            function () {
              var e = 0;
              return t
                .filter(function (e) {
                  return e.items.length;
                })
                .map(function (t) {
                  var n = t.items;
                  return V(
                    V({}, M()(t, ["items"])),
                    {},
                    {
                      items: n.map(function (t) {
                        return V(V({}, t), {}, { position: e++ });
                      }),
                    }
                  );
                });
            },
            [t]
          );
        return c.length
          ? u.a.createElement(
              "div",
              {
                className: g()(
                  y()(
                    "link-list-group-list",
                    Object(E.b)({ isHorizontal: n, isCompact: a })
                  ),
                  z,
                  { handleMissingStyleName: "warn" }
                ),
              },
              c.map(function (e, t) {
                var n = e.title,
                  a = e.items;
                return u.a.createElement(
                  "div",
                  { key: t, className: "_6CRLOWhf" },
                  u.a.createElement("p", { className: "_1dhg0W9C" }, n),
                  a.map(function (e) {
                    return u.a.createElement(
                      B,
                      r()(
                        {},
                        e,
                        { sectionTitle: n },
                        { key: e.href + e.label, onClick: i }
                      )
                    );
                  })
                );
              })
            )
          : null;
      },
      F = function (e) {
        var t = e.total,
          n = e.status,
          a = e.children,
          r = e.isCompact;
        return Object(m.b)(n)
          ? u.a.createElement(
              U.a,
              { className: "_1Zmsin8p" },
              "Search error. Please try again later."
            )
          : t
          ? a
          : Object(m.c)(n)
          ? u.a.createElement(
              U.b,
              {
                className: g()(
                  y()("info-message is-info", Object(E.b)({ isCompact: r })),
                  z,
                  { handleMissingStyleName: "warn" }
                ),
              },
              "No results were found"
            )
          : null;
      },
      H = "compact",
      W = function (e) {
        var t = e.data,
          n = e.status,
          a = e.size,
          i = e.defaultData,
          c = e.onResultSelect,
          o = e.onDefaultSelect,
          s = t.results,
          d = Object(l.useMemo)(
            function () {
              return s
                ? s.reduce(function (e, t) {
                    return e + t.items.length;
                  }, 0)
                : 0;
            },
            [s]
          ),
          f = a === H;
        return u.a.createElement(
          "div",
          { className: "_1-a_9qL8" },
          u.a.createElement(
            F,
            { total: d, status: n, isCompact: f },
            u.a.createElement(
              G,
              r()({ sections: s }, { isCompact: f }, { onSelect: c })
            )
          ),
          !d &&
            u.a.createElement(
              G,
              r()(
                { isCompact: f },
                { isHorizontal: Object(m.d)(n), sections: i, onSelect: o }
              )
            )
        );
      },
      K = Object(l.memo)(W);
    K.displayName = "DropdownSection";
    var Y = K,
      Q = (n(23), n(227), n(54)),
      J = n.n(Q),
      X = n(765),
      Z = n.n(X),
      $ = n(28),
      ee = {
        TopSearchSticky: "search_test_sticky",
        TopSearchHero: "search_test_hero",
        TopSearchResultsPage: "search_test_results_page",
        TopSearchSidebar: "search_test_sidebar",
      },
      te = function (e) {
        return Number(
          Z()(e.results, function (e) {
            return e.items.length;
          })
        );
      },
      ne = function (e, t) {
        return J()("".concat(e, "_").concat(t));
      },
      ae = Object(l.forwardRef)(function (e, t) {
        var n = e.onSearch,
          a = void 0 === n ? s.a : n,
          i = e.searchWidget.placeholder,
          o = e.popularResourcesSection,
          b = e.className,
          g = e.size,
          v = e.initialValue,
          h = void 0 === v ? "" : v,
          y = e.gaCategory,
          E = Object(l.useContext)(L).autocompleteUrl,
          _ = Object(l.useState)(h),
          O = c()(_, 2),
          j = O[0],
          w = O[1],
          S = (function (e, t) {
            var n = Object(l.useCallback)(
                function () {
                  var t, n, a;
                  if (e) {
                    for (
                      t = arguments.length, n = new Array(t), a = 0;
                      a < t;
                      a++
                    )
                      n[a] = arguments[a];
                    $.d.apply(void 0, [e].concat(n));
                  }
                },
                [e]
              ),
              a = Object(l.useCallback)(
                function () {
                  n("focus_into_search_bar");
                },
                [n]
              ),
              r = Object(l.useCallback)(
                function (e, t) {
                  n("autocomplete_response", e, { value: te(t) });
                },
                [n]
              );
            return {
              trackExpand: a,
              trackResultSelect: Object(l.useCallback)(
                function (e, t) {
                  var a = t.label,
                    r = t.position;
                  n("selects_search_result", ne(e, a), { value: r });
                },
                [n]
              ),
              trackDefaultSelect: Object(l.useCallback)(
                function (e, t) {
                  var a = t.label,
                    r = t.position;
                  n("selects_popular_skill_service", ne(e, a), { value: r });
                },
                [n]
              ),
              trackSearch: Object(l.useCallback)(
                function (e) {
                  n(e ? "clicks_search_button" : "user_hits_enter", t);
                },
                [n, t]
              ),
              trackCollapse: Object(l.useCallback)(
                function () {
                  n("abandon_search", t);
                },
                [n, t]
              ),
              trackClear: Object(l.useCallback)(
                function (e) {
                  n("clears_search_string", t, { value: te(e) });
                },
                [n, t]
              ),
              trackResponse: r,
            };
          })(y, j),
          k = S.trackExpand,
          N = S.trackResultSelect,
          C = S.trackDefaultSelect,
          P = S.trackSearch,
          T = S.trackResponse,
          I = S.trackCollapse,
          R = S.trackClear,
          M = Object(f.b)({ default: !1, forDesktop: !0 }),
          D = Object(d.e)(M && j, 500),
          A = Object(p.a)(E, D, T),
          U = A.data,
          z = A.status,
          q = Object(l.useCallback)(
            function (e) {
              a(j), P(e);
            },
            [a, j, P]
          ),
          V = Object(l.useMemo)(
            function () {
              return Object.values(o);
            },
            [o]
          ),
          B = Object(l.useCallback)(
            function () {
              R(U);
            },
            [U, R]
          );
        return u.a.createElement(
          x,
          r()(
            { value: j, placeholder: i, className: b, size: g, ref: t },
            {
              isLoading: Object(m.e)(z),
              onChange: w,
              onClear: B,
              onExpand: k,
              onCollapse: I,
              onSearch: q,
            }
          ),
          M &&
            u.a.createElement(
              Y,
              r()(
                { data: U, status: z, defaultData: V, size: g },
                { onDefaultSelect: C, onResultSelect: N }
              )
            )
        );
      });
    (ae.ContextProvider = function (e) {
      var t = e.autocompleteUrl,
        n = e.children;
      return u.a.createElement(
        L.Provider,
        { value: { autocompleteUrl: t } },
        n
      );
    }),
      (ae.Variant = x.Variant),
      (ae.displayName = "SearchWidget"),
      (t.b = ae);
  },
  405: function (e, t, n) {
    e.exports = {
      "title-item": "_64wRZ6xh",
      item: "_2vQjp_O2",
      cell: "_vWh44cV",
      title: "_1r8wFQ13",
      description: "_2Fa2w4cD",
      footer: "_7qDyl__j",
      "cta-holder": "_2pGhqCYE",
    };
  },
  41: function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
      return r;
    }),
      n.d(t, "c", function () {
        return i;
      }),
      n.d(t, "d", function () {
        return o;
      }),
      n.d(t, "b", function () {
        return l;
      });
    var a = n(21),
      r = {
        Development: "development",
        SemiProduction: "semi-production",
        Staging: "staging",
        Production: "production",
      },
      i = a.appEnv === r.Production,
      c = a.appEnv === r.Staging,
      o = !1,
      s = a.appEnv === r.SemiProduction,
      l = !(i || c || o || s);
  },
  42: function (e, t, n) {
    "use strict";
    n.d(t, "d", function () {
      return i;
    }),
      n.d(t, "a", function () {
        return c;
      }),
      n.d(t, "c", function () {
        return o;
      }),
      n.d(t, "b", function () {
        return s;
      }),
      n(227),
      n(243);
    var a = n(140),
      r = n.n(a).a.transitionDuration,
      i = Number.parseInt(r, 10) || 500,
      c = "sidebar-host",
      o = {
        CaseStudies: "caseStudiesSection",
        Video: "videoSection",
        TrendingSkills: "trendingSkillsSection",
        InDemandTalentAndServices: "inDemandResourcesSection",
        Social: "socialShareSection",
        SkillSelector: "skillSelector",
        Search: "searchSection",
      },
      s = { Client: "client", Talent: "talent" };
  },
  425: function (e, t, n) {
    "use strict";
    n(24);
    var a = n(7),
      r = n.n(a),
      i = n(0),
      c = n.n(i),
      o = n(257),
      s = n(16),
      l = n(3),
      u = n.n(l),
      d =
        (u.a.string.isRequired,
        u.a.arrayOf(
          u.a.shape({
            title: u.a.string.isRequired,
            body: u.a.string.isRequired,
          })
        ).isRequired,
        n(322)),
      f = function (e) {
        var t = {
          "@context": "http://schema.org",
          "@type": "FAQPage",
          name: e.title,
          mainEntity: e.questions.map(function (e) {
            return {
              "@type": "Question",
              name: e.title,
              acceptedAnswer: { "@type": "Answer", text: e.body },
            };
          }),
        };
        return c.a.createElement(d.a, { schema: t });
      };
    n(477),
      (t.a = function (e) {
        var t = e.className,
          n = r()(e, ["className"]),
          a = n.title,
          i = n.questions;
        return c.a.createElement(
          s.a,
          {
            semantic: !0,
            className: (t ? t + " " : "") + "_1-dB7gGN",
            width: s.a.Variant.Width.Fixed,
          },
          c.a.createElement(
            "h2",
            { className: "_3-FrMagb", "data-id": "faq-title" },
            a
          ),
          c.a.createElement(
            "ul",
            null,
            i.map(function (e, t) {
              var n = e.title,
                a = e.body;
              return c.a.createElement(
                o.a,
                { as: "li", className: "_2-hdF-ol", expanded: 0 === t, key: t },
                c.a.createElement(
                  o.a.Main,
                  { as: "h3", className: "_3iWk1qS2" },
                  n
                ),
                c.a.createElement(
                  o.a.Group,
                  null,
                  c.a.createElement("p", {
                    className: "_1lyKD1TJ",
                    dangerouslySetInnerHTML: { __html: a },
                  })
                )
              );
            })
          ),
          c.a.createElement(f, n)
        );
      });
  },
  43: function (e, t, n) {
    "use strict";
    var a = n(2),
      r = n.n(a),
      i = n(7),
      c = n.n(i),
      o = n(6),
      s = n.n(o),
      l = n(0),
      u = n.n(l),
      d = n(5),
      f = n.n(d),
      m = (n(9), n(8)),
      p =
        (n(146),
        {
          "./button.scss": {
            "is-hover": "mt5Y6x-K",
            "is-disabled": "_3OgVEeN8",
            button: "_1bcYCljm",
            "is-size-large": "_3n8NuEgU",
            "is-size-medium": "_3McSaz1R",
            "is-size-small": "_3qSF9CYT",
            "is-theme-primary-green": "_2u-I7BW0",
            "is-theme-primary-blue": "_1G_ocH1a",
            "is-theme-secondary-green": "_3ZEWDKfF",
            "is-theme-secondary-white": "_2AywhfSi",
            "is-theme-secondary-blue": "_7hPQ_Wwr",
            "is-theme-secondary-grey": "_1Wpamv8F",
            "is-theme-secondary-flat": "Mw_6M_G0",
          },
        }),
      b = {
        Theme: {
          PrimaryGreen: "primary-green",
          PrimaryBlue: "primary-blue",
          SecondaryGreen: "secondary-green",
          SecondaryBlue: "secondary-blue",
          SecondaryWhite: "secondary-white",
          SecondaryGrey: "secondary-grey",
          SecondaryFlat: "secondary-flat",
        },
        Size: { Large: "large", Medium: "medium", Small: "small" },
      },
      g = { Link: "a", Button: "button", Span: "span" },
      v = function (e) {
        var t = e.theme,
          n = void 0 === t ? b.Theme.PrimaryGreen : t,
          a = e.size,
          i = void 0 === a ? b.Size.Medium : a,
          o = e.as,
          l = void 0 === o ? g.Button : o,
          d = e.className,
          v = e.disabled,
          h = e.hover,
          y = c()(e, ["theme", "size", "as", "className", "disabled", "hover"]);
        return u.a.createElement(
          l,
          r()(
            {},
            y,
            { className: d, disabled: v },
            {
              className:
                s()(
                  f()(
                    "button",
                    Object(m.a)({ theme: n, size: i }),
                    Object(m.b)({ disabled: v, hover: h })
                  ),
                  p,
                  { handleMissingStyleName: "warn" }
                ) +
                " " +
                ((y && y.className) || "") +
                " " +
                (d || ""),
            }
          )
        );
      };
    (v.Variant = b), (v.HtmlElement = g), (t.a = v);
  },
  438: function (e, t, n) {
    "use strict";
    n(62);
    var a = n(2),
      r = n.n(a),
      i = n(0),
      c = n.n(i),
      o = n(3),
      s = n.n(o),
      l = n(9),
      u = n(32),
      d = n(31),
      f = n(214),
      m = n(105),
      p =
        (n(535),
        function (e) {
          var t = e.imageUrl,
            n = e.jobTitle,
            a = e.fullName,
            i = e.publicResumeUrl,
            o = e.as,
            s = void 0 === o ? "li" : o,
            l = e.ga,
            p = void 0 === l ? {} : l;
          return c.a.createElement(
            m.a,
            { className: "_3VBLq0Cc", as: s },
            c.a.createElement(
              d.b,
              { className: "_2ZKXqZr2", url: i, a11yHidden: !0 },
              c.a.createElement(
                "div",
                { className: "_19OFE3Ip" },
                c.a.createElement(f.a, { className: "xA1m7OlH" }),
                c.a.createElement(
                  "img",
                  r()(
                    {
                      className:
                        "_3o_U8Bbj " +
                        ((Object(u.b)(p.photo) &&
                          Object(u.b)(p.photo).className) ||
                          ""),
                      src: t,
                      alt: n,
                    },
                    Object(u.b)(p.photo)
                  )
                )
              )
            ),
            c.a.createElement(
              "div",
              { className: "_2aYTOngo" },
              c.a.createElement(
                d.a,
                r()(
                  {
                    url: i,
                    variant: d.b.Variant.Theme.Link,
                    className:
                      "lH2hHdja Eb95r03H " +
                      ((p.name && p.name.className) || ""),
                  },
                  p.name
                ),
                a
              ),
              c.a.createElement("p", { className: "OVM5MvD3 Eb95r03H" }, n)
            )
          );
        }),
      b = {
        imageUrl: s.a.string.isRequired,
        fullName: s.a.string.isRequired,
        publicResumeUrl: s.a.string.isRequired,
        jobTitle: s.a.string.isRequired,
        ga: s.a.shape({ photo: l.d, name: l.d }),
      };
    (p.dataPropTypes = b), (t.a = p);
  },
  45: function (e, t, n) {
    "use strict";
    n(24);
    var a = n(2),
      r = n.n(a),
      i = n(7),
      c = n.n(i),
      o = n(0),
      s = n.n(o),
      l = n(5),
      u = n.n(l),
      d = (n(259), n(260), n(22)),
      f = n(96),
      m = function (e) {
        var t = e.srcSet,
          n = e.type,
          a = e.media,
          r = e.sizes,
          i = e.lazyLoad,
          c = void 0 === i || i;
        return s.a.createElement("source", {
          type: n,
          key: t,
          sizes: r,
          media: a,
          "data-srcset": c ? t : void 0,
          srcSet: c ? f.a : t,
        });
      };
    (m.displayName = "ImageSource"), n(206);
    var p = Object(o.forwardRef)(function (e, t) {
      var n = e.lazyLoad,
        a = void 0 === n || n,
        i = e.src,
        o = e.sources,
        l = void 0 === o ? [] : o,
        p = e.alt,
        b = void 0 === p ? "" : p,
        g = e.a11yHidden,
        v = void 0 !== g && g,
        h = e.className,
        y = e.children,
        E = e.effect,
        _ =
          (e.onError,
          c()(e, [
            "lazyLoad",
            "src",
            "sources",
            "alt",
            "a11yHidden",
            "className",
            "children",
            "effect",
            "onError",
          ])),
        O = d.a,
        j = y || l.length > 0,
        w = a && !O,
        S = s.a.createElement(
          "img",
          r()(
            {
              ref: j ? void 0 : t,
              "data-src": w ? i : void 0,
              src: w ? f.a : i,
              alt: v ? "" : b,
              className: u()(
                "lazyload",
                {
                  "effect-opacity": !O && "opacity" === E,
                  "effect-blur": !O && "blur" === E,
                },
                h
              ),
            },
            _
          )
        );
      return j
        ? s.a.createElement(
            "picture",
            r()({ ref: t }, v && { role: "presentation" }),
            l &&
              l.map(function (e) {
                return s.a.createElement(m, {
                  type: e.type,
                  key: e.srcSet,
                  sizes: e.sizes,
                  media: e.media,
                  lazyLoad: a,
                  srcSet: e.srcSet,
                });
              }),
            y &&
              (function (e, t) {
                return (Array.isArray(e) ? e : [e]).map(function (e, n) {
                  return e && "ImageSource" === e.type.displayName
                    ? s.a.cloneElement(e, { key: e.key || n, lazyLoad: t })
                    : null;
                });
              })(y, a),
            S
          )
        : S;
    });
    (p.Source = m), (p.displayName = "LazyLoadImage"), (t.a = p);
  },
  46: function (e, t, n) {
    "use strict";
    t.a = function () {
      return "undefined" != typeof STORYBOOK_ENV;
    };
  },
  463: function (e, t, n) {
    "use strict";
    n(24);
    var a = n(0),
      r = n.n(a),
      i = (n(9), n(31));
    n(538),
      (t.a = function (e) {
        var t = e.items,
          n = e.className;
        return r.a.createElement(
          "div",
          { className: (n ? n + " " : "") + "_2IFqmtQT" },
          t.map(function (e, t) {
            var n = e.iconUrl,
              a = e.cta;
            return r.a.createElement(
              i.b,
              { url: a.href, className: "_1vA6N8_L", key: t },
              n &&
                r.a.createElement(
                  "div",
                  { className: "_2T3SdvUN" },
                  r.a.createElement("img", { src: n, alt: a.label })
                ),
              r.a.createElement(
                "div",
                { className: "_2sLv6Awn" },
                r.a.createElement("h3", { className: "_2Ffdfbv0" }, a.label),
                r.a.createElement("div", { className: "_1_xtZnpk" })
              )
            );
          })
        );
      });
  },
  464: function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
      return p;
    });
    var a = n(2),
      r = n.n(a),
      i = n(6),
      c = n.n(i),
      o = n(5),
      s = n.n(o),
      l = n(0),
      u = n.n(l),
      d = n(8),
      f =
        (n(778),
        {
          "./info-message.scss": {
            container: "_1S0gsIXK",
            icon: "_2OhygCGb",
            "is-error": "wy7NZIb1",
          },
        }),
      m = function (e) {
        var t = e.children,
          n = e.isError,
          a = e.className;
        return u.a.createElement(
          "div",
          r()(
            { className: a },
            {
              className:
                c()(s()("container", Object(d.b)({ isError: n })), f, {
                  handleMissingStyleName: "warn",
                }) +
                " " +
                (a || ""),
            }
          ),
          u.a.createElement("span", { className: "_2OhygCGb" }),
          t
        );
      },
      p = function (e) {
        return u.a.createElement(m, r()({}, e, { isError: !0 }));
      };
    t.b = m;
  },
  469: function (e, t, n) {
    "use strict";
    n(23), n(56), n(24), n(51), n(27), n(68);
    var a = n(2),
      r = n.n(a),
      i = n(30),
      c = n.n(i),
      o = n(0),
      s = n.n(o),
      l = n(12),
      u = n(331),
      d = n(336),
      f = (n(9), n(125)),
      m = n(69),
      p = n(224),
      b = {
        animationDelay: 1100,
        items: [
          { shift: ["-70px", "-50px"], postponeTime: 150, startScale: 0.45 },
          { shift: ["-80px", "-10px"], postponeTime: 450, startScale: 0.45 },
          { shift: ["20px", "0"], postponeTime: 600, startScale: 0.45 },
          { shift: ["60px", "-60px"], postponeTime: 550, startScale: 0.45 },
          { shift: ["0px", "-100px"], postponeTime: 0, startScale: 0.45 },
          { shift: ["-10px", "40px"], postponeTime: 300, startScale: 0.45 },
          { shift: ["-30px", "-80px"], postponeTime: 450, startScale: 0.45 },
          { shift: ["160px", "-60px"], postponeTime: 600, startScale: 0.45 },
        ],
      },
      g = n(438),
      v =
        (n(536),
        function (e) {
          var t = e.items,
            n = e.chunkSize,
            a = Math.ceil(t.length / n);
          return s.a.createElement(p.b, { numberOfSlides: a }, function (e) {
            return s.a.createElement(
              s.a.Fragment,
              null,
              c()(new Array(a).keys()).map(function (a) {
                return s.a.createElement(
                  p.a,
                  { active: e === a, key: a },
                  s.a.createElement(y, { items: t.slice(n * a, n * (a + 1)) })
                );
              })
            );
          });
        }),
      h = function (e) {
        var t = e.items,
          n = e.animationDelay,
          a = e.animated,
          i = Object(o.useMemo)(
            function () {
              return t.map(function (e) {
                return e.imageUrl;
              });
            },
            [t]
          );
        return (
          Object(d.a)(i) &&
          s.a.createElement(
            "ul",
            { className: "_2FcCzbmX" },
            t.map(function (e, t) {
              var i = b.items[t];
              return s.a.createElement(
                f.a,
                {
                  shiftX: i.shift[0],
                  shiftY: i.shift[1],
                  shiftDuration: 0.8,
                  scale: i.startScale,
                  scaleDuration: 0.4,
                  postponeTransition: Object(u.a)(n),
                  key: e.imageUrl,
                  animated: a,
                  as: "li",
                },
                s.a.createElement(
                  f.a,
                  {
                    opacity: 0,
                    shiftX: "-20px",
                    postponeTransition: Object(u.a)(i.postponeTime),
                    animated: a,
                  },
                  s.a.createElement(g.a, r()({}, e, { as: "div" }))
                )
              );
            })
          )
        );
      },
      y = function (e) {
        var t = e.items;
        return s.a.createElement(
          "ul",
          { className: "_2FcCzbmX" },
          t.map(function (e) {
            return s.a.createElement(g.a, r()({ key: e.imageUrl }, e));
          })
        );
      };
    t.a = function (e) {
      var t = e.items,
        n = e.className,
        a = e.animated,
        r = void 0 === a || a,
        i = e.noMap,
        c = void 0 !== i && i;
      return s.a.createElement(
        "div",
        { className: (n ? n + " " : "") + "_343Vooik" },
        s.a.createElement(
          m.a,
          {
            query: "(min-width: "
              .concat(l.b.MOBILE_XLARGE, ") and (max-width: ")
              .concat(parseInt(l.b.DESKTOP, 10) - 1, "px)"),
          },
          s.a.createElement(v, { items: t, chunkSize: 4 })
        ),
        s.a.createElement(
          m.a,
          {
            query: "(max-width: ".concat(
              parseInt(l.b.MOBILE_XLARGE) - 1,
              "px)"
            ),
          },
          s.a.createElement(v, { items: t, chunkSize: 2 })
        ),
        s.a.createElement(
          m.a,
          { query: "(min-width: ".concat(l.b.DESKTOP, ")"), defaultMatch: !0 },
          !c && s.a.createElement("div", { className: "_3FEzFDtE" }),
          s.a.createElement(h, {
            items: t,
            animationDelay: b.animationDelay,
            animated: r,
          })
        )
      );
    };
  },
  47: function (e, t, n) {
    "use strict";
    n(74),
      n(36),
      n(103),
      (t.a = function () {
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
          t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3,
          n = e.split(" "),
          a = n.length;
        return a > t && (n[a - 2] += "В " + n.pop()), n.join(" ");
      });
  },
  477: function (e, t, n) {
    e.exports = {
      container: "_1-dB7gGN",
      title: "_3-FrMagb",
      accordion: "_2-hdF-ol",
      question: "_3iWk1qS2",
      answer: "_1lyKD1TJ",
    };
  },
  48: function (e, t, n) {
    "use strict";
    var a = n(6),
      r = n.n(a),
      i = n(0),
      c = n.n(i),
      o = n(3),
      s = n.n(o),
      l = n(5),
      u = n.n(l),
      d = (n(186), { "./html-content.scss": { content: "_2iMRJu_T" } }),
      f = Object(i.forwardRef)(function (e, t) {
        var n = e.content,
          a = e.as,
          i = void 0 === a ? "div" : a,
          o = e.className,
          s = e.isUnstyled,
          l = e.id,
          f = e.dataId;
        return c.a.createElement(i, {
          ref: t,
          id: l,
          "data-id": f,
          dangerouslySetInnerHTML: { __html: n },
          className:
            (o ? o + " " : "") +
            r()(u()({ content: !s }), d, { handleMissingStyleName: "warn" }),
        });
      });
    (f.propTypes = {
      content: s.a.string.isRequired,
      className: s.a.string,
      as: s.a.string,
      isUnstyled: s.a.bool,
      id: s.a.string,
      dataId: s.a.string,
    }),
      (f.displayName = "HtmlContent"),
      (t.a = f);
  },
  49: function (e, t, n) {
    "use strict";
    n(19),
      n(235),
      n(17),
      n(14),
      n(24),
      n(51),
      n(25),
      n(26),
      n(20),
      n(72),
      n(203),
      n(254),
      n(15);
    var a = n(4),
      r = n.n(a),
      i = n(2),
      c = n.n(i),
      o = n(6),
      s = n.n(o),
      l = n(0),
      u = n.n(l),
      d = n(5),
      f = n.n(d),
      m = (n(9), n(8)),
      p = n(48),
      b = n(7),
      g = n.n(b),
      v = n(91),
      h =
        (n(159),
        {
          "./logo-icon.scss": { logo: "NtiSrOkt", "is-monotone": "YHup1dJu" },
        }),
      y = {
        emblem: v.b,
        wordmark: v.d,
        wordmarkpng: function () {
          return u.a.createElement("img", {
            width: "116",
            height: "32",
            src: "https://www.toptal.com/toptal-logo.png",
            alt: "Toptal",
          });
        },
      },
      E = {
        Emblem: "emblem",
        Wordmark: "wordmark",
        WordmarkPng: "wordmarkpng",
      },
      _ = function (e) {
        var t = e.type,
          n = void 0 === t ? E.Wordmark : t,
          a = e.isMonotone,
          r = g()(e, ["type", "isMonotone"]),
          i = y[n];
        return u.a.createElement(
          "div",
          c()({}, r, {
            className:
              s()(f()("logo", Object(m.b)({ isMonotone: a })), h, {
                handleMissingStyleName: "warn",
              }) +
              " " +
              ((r && r.className) || ""),
          }),
          u.a.createElement(i, null)
        );
      };
    _.Variant = E;
    var O = _,
      j = (n(110), n(188), n(1)),
      w = n.n(j);
    function S(e, t) {
      var n,
        a = Object.keys(e);
      return (
        Object.getOwnPropertySymbols &&
          ((n = Object.getOwnPropertySymbols(e)),
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
          a.push.apply(a, n)),
        a
      );
    }
    function k(e) {
      var t, n;
      for (t = 1; t < arguments.length; t++)
        (n = null != arguments[t] ? arguments[t] : {}),
          t % 2
            ? S(Object(n), !0).forEach(function (t) {
                r()(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : S(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
      return e;
    }
    var N = ["wordmark", "suffix", "headline"];
    function C(e, t) {
      var n,
        a = Object.keys(e);
      return (
        Object.getOwnPropertySymbols &&
          ((n = Object.getOwnPropertySymbols(e)),
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
          a.push.apply(a, n)),
        a
      );
    }
    function P(e) {
      var t, n;
      for (t = 1; t < arguments.length; t++)
        (n = null != arguments[t] ? arguments[t] : {}),
          t % 2
            ? C(Object(n), !0).forEach(function (t) {
                r()(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : C(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
      return e;
    }
    n(151);
    var x = {
        "./compound-logo.scss": {
          registered: "_2yx3tQoS",
          "composite-logo": "_27w5BS2q",
          headline: "_1lvdjAD0",
          "headline-text": "_3eQ_EZmB",
          container: "_58Zij-Oo",
          logo: "_1YO-qTkC",
          emblem: "JZBjwybU",
          wordmark: "_1SDD_TaP",
          suffix: "_1KvUc_3R",
          "headline-separator": "cpfvvVen",
          "is-monotone": "_2FUhxoSV",
          "is-size-large": "_1ZjdOUzr",
          "is-size-medium": "_3Qr50Vve",
          "is-size-small": "A1tn-zbg",
          "is-default-hidden": "_27Qp7-0j",
          "is-tablet-hidden": "_2bE-MpfW",
          "is-desktop-hidden": "_1qWPArs6",
          "is-desktop-large-hidden": "_3gIwdeKZ",
          "is-tablet-visible": "aSm5Eu45",
          "is-desktop-visible": "sQf4YFbG",
          "is-desktop-large-visible": "Pr_2B7aa",
          "is-default-align-center-enabled": "_1gM6aSr1",
          "is-tablet-align-center-enabled": "_3oXj0__2",
          "is-desktop-align-center-enabled": "N3vjTBqY",
          "is-desktop-large-align-center-enabled": "_3a2ad5pt",
          "is-tablet-align-center-disabled": "_1YE9rzs1",
          "is-desktop-align-center-disabled": "_3ofkGqyM",
          "is-desktop-large-align-center-disabled": "_2IToekk2",
        },
      },
      L = {
        Type: O.Variant,
        Size: { Large: "large", Medium: "medium", Small: "small" },
        Layout: {
          Regular: { default: { headline: !1 }, forTablet: {} },
          Gradual: {
            default: { wordmark: !1, headline: !1 },
            forTablet: { wordmark: !1 },
            forDesktop: {},
          },
          Foldable: { default: { wordmark: !1, suffix: !1 }, forTablet: {} },
          Compact: {
            default: { wordmark: !1, suffix: !1 },
            forTablet: { wordmark: !1 },
            forDesktop: {},
          },
        },
      },
      T = function (e) {
        var t = e.headline,
          n = e.headlineAs,
          a = void 0 === n ? "div" : n,
          r = e.styles,
          i = e.className,
          c = t.endsWith("В®");
        return (
          c &&
            ((t = t.slice(0, -1).trimEnd()), (t += "&nbsp;<span>&reg;</span>")),
          u.a.createElement(
            "div",
            { className: f()(i, r["headline-container"]) },
            u.a.createElement(
              "div",
              { className: "_1lvdjAD0" },
              u.a.createElement("span", { className: "cpfvvVen" }),
              u.a.createElement(
                "div",
                null,
                c
                  ? u.a.createElement(p.a, {
                      isUnstyled: !0,
                      as: a,
                      content: t,
                      className:
                        (r.headline ? r.headline + " " : "") + "_3eQ_EZmB",
                    })
                  : u.a.createElement(
                      a,
                      {
                        className:
                          (r.headline ? r.headline + " " : "") + "_3eQ_EZmB",
                      },
                      t
                    )
              )
            )
          )
        );
      },
      I = function (e) {
        var t = e.layout,
          n = void 0 === t ? L.Layout.Regular : t,
          a = e.type,
          i = e.size,
          o = e.href,
          d = e.title,
          p = e.suffix,
          b = e.headline,
          g = e.headlineAs,
          v = e.styles,
          h = void 0 === v ? {} : v,
          y = e.isMonotone,
          E = Object(l.useMemo)(
            function () {
              return (function (e, t) {
                var n;
                (n = e),
                  (e = Object.entries({
                    default: n.default,
                    tablet: n.forTablet,
                    desktop: n.forDesktop,
                    "desktop-large": n.forDesktopLarge,
                  }).reduce(function (e, t) {
                    var n = w()(t, 2),
                      a = n[0],
                      i = n[1];
                    return k(k({}, e), i && r()({}, a, i));
                  }, {})),
                  Object.keys(e).forEach(function (t) {
                    N.forEach(function (n) {
                      var a, r;
                      (null !== (r = (a = e[t])[n]) && void 0 !== r) ||
                        (a[n] = !0);
                    });
                  });
                var a = Object.entries(e).reduce(function (e, t) {
                    var n = w()(t, 2),
                      a = n[0],
                      i = n[1];
                    return (
                      N.forEach(function (t) {
                        var n,
                          c,
                          o = null === (n = i[t]) || void 0 === n || n,
                          s = !(
                            null ===
                              (c = Object.values(e)
                                .map(function (e) {
                                  return e[t];
                                })
                                .filter(function (e) {
                                  return void 0 !== e;
                                })
                                .pop()) ||
                            void 0 === c ||
                            c
                          ),
                          l = null;
                        o ? s && (l = !0) : s || (l = !1),
                          null !== l &&
                            (e[a] = k(k({}, e[a]), {}, r()({}, t, l)));
                      }),
                      e
                    );
                  }, {}),
                  i = N.reduce(function (e, t) {
                    return k(
                      k({}, e),
                      {},
                      r()(
                        {},
                        t,
                        Object.entries(a).reduce(function (e, n) {
                          var a = w()(n, 2),
                            r = a[0],
                            i = a[1];
                          return (
                            void 0 !== i[t] &&
                              (e[r] = i[t] ? "visible" : "hidden"),
                            e
                          );
                        }, {})
                      )
                    );
                  }, {});
                return (
                  (i.container = Object.entries(e).reduce(function (e, n) {
                    var a,
                      r = w()(n, 2),
                      i = r[0],
                      c = r[1],
                      o = c.wordmark,
                      s = c.suffix,
                      l =
                        null !== (a = Object.values(e).pop()) && void 0 !== a
                          ? a
                          : "disabled";
                    return (
                      o || (t && s)
                        ? l.endsWith("enabled") &&
                          (e[i] = "align-center-disabled")
                        : l.endsWith("disabled") &&
                          (e[i] = "align-center-enabled"),
                      e
                    );
                  }, {})),
                  i
                );
              })(n, p);
            },
            [n, p]
          ),
          _ = { isMonotone: y, className: h.logo },
          j = Object.values(n).map(function (e) {
            return e.wordmark;
          }),
          S = j.every(Boolean) || j.length > 1 || n.default.wordmark,
          C = a
            ? function () {
                return u.a.createElement(
                  O,
                  c()({ type: a }, _, {
                    className:
                      "_1YO-qTkC " +
                      ({ type: a }.className || "") +
                      (_ ? " " + (_.className || "") : ""),
                  })
                );
              }
            : function () {
                return u.a.createElement(
                  u.a.Fragment,
                  null,
                  u.a.createElement(
                    O,
                    c()({}, _, {
                      type: L.Type.Emblem,
                      className: "JZBjwybU " + ((_ && _.className) || ""),
                    })
                  ),
                  S &&
                    u.a.createElement(
                      O,
                      c()({}, _, {
                        type: L.Type.Wordmark,
                        className:
                          s()(f()("wordmark", Object(m.a)(E.wordmark)), x, {
                            handleMissingStyleName: "warn",
                          }) +
                          " " +
                          ((_ && _.className) || ""),
                      })
                    ),
                  u.a.createElement(
                    "div",
                    { className: "_2yx3tQoS" },
                    u.a.createElement("span", null, "В®")
                  )
                );
              },
          I = o ? "a" : "div";
        return u.a.createElement(
          "div",
          {
            className:
              (h.container ? h.container + " " : "") +
              s()(
                f()(
                  "container",
                  P(
                    P({}, Object(m.b)({ isMonotone: y })),
                    Object(m.a)(E.container)
                  )
                ),
                x,
                { handleMissingStyleName: "warn" }
              ),
          },
          u.a.createElement(
            I,
            c()(
              { href: o, title: d },
              {
                "aria-label": d,
                className:
                  s()(f()("composite-logo", Object(m.a)(i, "size")), x, {
                    handleMissingStyleName: "warn",
                  }) +
                  " " +
                  ({ href: o, title: d }.className || ""),
              }
            ),
            u.a.createElement(C, null),
            p &&
              u.a.createElement(
                "div",
                {
                  className:
                    (h.suffix ? h.suffix + " " : "") +
                    s()(f()("suffix", Object(m.a)(E.suffix)), x, {
                      handleMissingStyleName: "warn",
                    }),
                },
                p
              )
          ),
          b &&
            u.a.createElement(
              T,
              c()(
                { headline: b, headlineAs: g, styles: h },
                {
                  className:
                    s()(f()(Object(m.a)(E.headline)), x, {
                      handleMissingStyleName: "warn",
                    }) +
                    " " +
                    ({ headline: b, headlineAs: g, styles: h }.className || ""),
                }
              )
            )
        );
      };
    (I.Variant = L), (t.a = I);
  },
  50: function (e, t, n) {
    e.exports = {
      desktopLarge: "1200px",
      desktop: "1024px",
      tabletLarge: "834px",
      tablet: "768px",
      mobileXLarge: "524px",
      mobileLarge: "425px",
      mobile: "320px",
    };
  },
  52: function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
      return f;
    });
    var a = n(2),
      r = n.n(a),
      i = n(0),
      c = n.n(i),
      o = n(5),
      s = n.n(o),
      l = n(58),
      u = n(78),
      d = n.n(u),
      f = function (e) {
        var t = e.children,
          n = e.className,
          a = e.mobile,
          i = void 0 === a ? l.d : a,
          o = e.tablet,
          u = e.desktop,
          f = e.large,
          m = e.role;
        return c.a.createElement(
          "div",
          r()(
            {
              className:
                (s()(n, Object(l.c)(d.a, [i, o, u, f]))
                  ? s()(n, Object(l.c)(d.a, [i, o, u, f])) + " "
                  : "") +
                "_3jgwFSUz " +
                ({ role: m }.className || ""),
            },
            { role: m }
          ),
          t
        );
      };
    t.b = function (e) {
      var t = e.className,
        n = e.children,
        a = e.gutter,
        i = void 0 === a ? l.b : a,
        o = e.role;
      return c.a.createElement(
        "div",
        r()(
          {
            className:
              (s()(
                t,
                Object(l.c)(
                  d.a,
                  [i.mobile, i.tablet, i.desktop, i.large],
                  "gutter"
                )
              )
                ? s()(
                    t,
                    Object(l.c)(
                      d.a,
                      [i.mobile, i.tablet, i.desktop, i.large],
                      "gutter"
                    )
                  ) + " "
                : "") +
              "VRzpBOaS " +
              ({ role: o }.className || ""),
          },
          { role: o }
        ),
        n
      );
    };
  },
  529: function (e, t, n) {
    "use strict";
    var a = n(3),
      r = n.n(a),
      i = n(9),
      c = { title: r.a.string.isRequired, items: i.e.isRequired },
      o = r.a.exact(c),
      s =
        (Object(i.a)(c),
        {
          popularResourcesSection: r.a.exact({
            skillList: o.isRequired,
            serviceList: o.isRequired,
          }).isRequired,
          searchWidget: r.a.exact({ placeholder: r.a.string.isRequired })
            .isRequired,
        });
    r.a.exact(s);
  },
  53: function (e, t, n) {
    "use strict";
    n.d(t, "c", function () {
      return l;
    }),
      n.d(t, "b", function () {
        return u;
      }),
      n.d(t, "a", function () {
        return d;
      });
    var a = n(98),
      r = n(11),
      i = n(34),
      c = new a.a(),
      o = function (e) {
        return "user_agreed_".concat(e);
      },
      s = function (e) {
        return (Object(r.a)() && c.get(o(e))) || !1;
      },
      l = function (e, t) {
        Object(r.a)() &&
          c.set(o(e), t, {
            path: "/",
            expires: new Date(Date.now() + 31536e6),
          });
      },
      u = function (e) {
        return e === i.b.GDPR
          ? !s(i.b.GDPR)
          : !s(i.b.GDPR) && !s(i.b.PrivacyShield);
      },
      d = function (e) {
        return e !== i.b.GDPR || Boolean(s(i.b.GDPR));
      };
  },
  538: function (e, t, n) {
    e.exports = {
      container: "_2IFqmtQT",
      link: "_1vA6N8_L",
      "link-icon": "_2T3SdvUN",
      "link-text": "_2Ffdfbv0",
      "link-icon-right": "_1_xtZnpk",
      "link-title": "_2sLv6Awn",
    };
  },
  547: function (e, t, n) {
    "use strict";
    var a = n(0),
      r = n.n(a),
      i = n(47),
      c = n(261),
      o = (n(9), n(71)),
      s = n(16),
      l = n(463);
    n(596),
      (t.a = function (e) {
        var t = e.title,
          n = e.items;
        return r.a.createElement(
          s.a,
          { semantic: !0, width: s.a.Variant.Width.Fixed },
          r.a.createElement(
            o.a,
            {
              className: "_3gphASaH",
              margin: [o.a.Variant.Margin.Standard, o.a.Variant.Margin.Bottom],
              dataId: "cross-vertical-title",
            },
            Object(c.b)(Object(i.a)(t))
          ),
          r.a.createElement(l.a, { items: n })
        );
      });
  },
  55: function (e, t, n) {
    "use strict";
    t.a = {
      About: "about",
      AllCities: "all-cities",
      AllServices: "all-services",
      AllLocationSkills: "all-location-skills",
      Branding: "branding",
      Careers: "careers",
      CaseStudyArticle: "case-study-article",
      ClientReviews: "client-reviews",
      Clients: "clients",
      CompanySpotlight: "company-spotlight",
      Contact: "contact",
      CoreTeamJob: "core-team-job",
      DevIndex: "dev-index",
      DynamicQuiz: "dynamic-quiz",
      EmblemChallenge: "emblem-challenge",
      EngineeringManagerReport: "engineering-manager-report",
      EngineeringManagerQuizWelcome: "engineering-manager-quiz-welcome",
      EnterpriseHub: "enterprise-hub",
      EnterpriseHubInformation: "enterprise-hub-information",
      FAQ: "faq",
      Freelance: "freelance",
      FreelanceCalculatorSkill: "freelance-calculator-skill",
      FreelanceCalculatorWidget: "freelance-calculator-widget",
      GatedContent: "gated-content",
      HiringGuide: "hiring-guide",
      Home: "home",
      How: "how",
      Information: "information",
      InternalLinking: "internal-linking",
      InterviewQuestions: "interview-questions",
      JobDescription: "job-description",
      JobPosting: "job-posting",
      LandingTemplate: "landing-template",
      LocationSkill: "location-skill",
      MaturityAssessmentReport: "maturity-assessment-report",
      MediaAssets: "media-assets",
      MediaAssetsHome: "media-assets-home",
      Partnership: "partnership",
      PressCenter: "press-center",
      PressRelease: "press-release",
      Projects: "projects",
      RemoteReadinessQuiz: "remote-readiness-quiz",
      RemoteReadinessQuizWelcome: "remote-readiness-quiz-welcome",
      RemoteReadinessResult: "remote-readiness-result",
      Resources: "resources",
      SearchResults: "search-results",
      ServiceCentric: "service-centric",
      Skill: "skill",
      SkillJobs: "skill-jobs",
      SkillJobsIndex: "skill-jobs-index",
      SkillSem: "skill-sem",
      SkillSemDesigners: "skill-sem-designers",
      TalentAssessmentWelcome: "talent-assessment-welcome",
      TalentAssessmentWelcomeExperiment: "talent-assessment-welcome-experiment",
      TalentAssessmentResults: "talent-assessment-results",
      TalentAssessmentResultsExperiment: "talent-assessment-results-experiment",
      TalentHome: "talent-home",
      TalentFAQ: "talent-faq",
      TalentReviews: "talent-reviews",
      TestPage: "test-page",
      TestPageEtag: "test-page-etag",
      TopThreePercent: "top-three-percent",
      VerticalJobs: "vertical-jobs",
      VerticalLanding: "vertical-landing",
      VerticalLandingExperiment: "vertical-landing-experiment",
      What: "what",
      Why: "why",
    };
  },
  571: function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
      return s;
    });
    var a = n(763),
      r = n.n(a),
      i = n(0),
      c = n(13),
      o = n(10);
    function s(e, t, n) {
      var a =
          arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "",
        s = Object(o.h)(),
        l = s.state,
        u = s.updateState,
        d = s.fetchJSON,
        f = Object(i.useCallback)(
          function () {
            if (!t) return u({ status: c.a.INITIAL, data: {} }), !1;
            u({ error: !1, status: c.a.LOADING });
          },
          [t, u]
        ),
        m = Object(i.useCallback)(
          function (i) {
            var c = r()({ q: t, type: a }, function (e) {
              return !e;
            });
            d(
              e,
              c,
              { signal: i },
              {
                onBeforeSend: f,
                onSuccess: function (e) {
                  n && n(t, e);
                },
              }
            );
          },
          [e, t, a, f, n, d]
        );
      return (
        Object(i.useEffect)(
          function () {
            var e = new AbortController();
            return (
              m(e.signal),
              function () {
                return e.abort();
              }
            );
          },
          [m]
        ),
        l
      );
    }
  },
  573: function (e, t, n) {
    var a = n(0);
    function r(e) {
      return a.createElement("svg", e, [
        a.createElement(
          "defs",
          { key: 0 },
          a.createElement("path", {
            d: "M9.5 0A9.5 9.5 0 0119 9.5a9.464 9.464 0 01-2.367 6.275L24 23.142l-.858.858-7.367-7.367A9.464 9.464 0 019.5 19a9.5 9.5 0 010-19zm0 1.118a8.382 8.382 0 100 16.764 8.382 8.382 0 000-16.764z",
            id: "a",
          })
        ),
        a.createElement("use", {
          fill: "currentColor",
          fillRule: "nonzero",
          xlinkHref: "#a",
          key: 1,
        }),
      ]);
    }
    (r.defaultProps = { viewBox: "0 0 24 24" }),
      (e.exports = r),
      (r.default = r);
  },
  58: function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
      return c;
    }),
      n.d(t, "b", function () {
        return o;
      }),
      n.d(t, "d", function () {
        return s;
      }),
      n.d(t, "c", function () {
        return l;
      }),
      n(17),
      n(74),
      n(24),
      n(72);
    var a = n(109),
      r = n.n(a),
      i = n(8),
      c = {
        Mobile: "mobile",
        Tablet: "tablet",
        Desktop: "desktop",
        Large: "large",
      },
      o = { large: 4, desktop: 3, tablet: 3, mobile: 2 },
      s = 12,
      l = function (e, t) {
        var n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "",
          a = Object(i.a)(t, u(n), !1);
        return r()(a, function (t, n) {
          return e[n];
        });
      },
      u = function () {
        var e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
        return Object.values(c).map(function (t) {
          return [e, t]
            .filter(function (e) {
              return e;
            })
            .join("-");
        });
      };
  },
  59: function (e, t, n) {
    "use strict";
    n.d(t, "b", function () {
      return d;
    }),
      n(14),
      n(27),
      n(33),
      n(106),
      n(15);
    var a = n(66),
      r = n.n(a),
      i = n(63),
      c = n.n(i),
      o = n(198),
      s = n.n(o),
      l = n(13),
      u = n(39),
      d = s()(function (e) {
        var t = new f();
        return t.fetch(e), t;
      }),
      f = (function () {
        function e() {
          r()(this, e),
            (this.status = l.a.INITIAL),
            (this.value = null),
            (this.listeners = []);
        }
        return (
          c()(e, [
            {
              key: "subscribe",
              value: function (e) {
                this.status === l.a.SUCCESS || this.status === l.a.ERROR
                  ? e(this.value, this.status)
                  : this.listeners.push(e);
              },
            },
            {
              key: "fetch",
              value: (function (e) {
                function t() {
                  return e.apply(this, arguments);
                }
                return (
                  (t.toString = function () {
                    return e.toString();
                  }),
                  t
                );
              })(function (e) {
                var t = this,
                  n =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : {};
                this.status === l.a.INITIAL &&
                  ((this.status = l.a.LOADING),
                  fetch(e, n)
                    .then(function (e) {
                      return e.json();
                    })
                    .then(function (e) {
                      (t.value = e), (t.status = l.a.SUCCESS), t._broadcast();
                    })
                    .catch(function (e) {
                      u.a.error("FetchJSONWithCache Error", { error: e }),
                        (t.status = l.a.ERROR),
                        t._broadcast();
                    }));
              }),
            },
            {
              key: "_broadcast",
              value: function () {
                var e = this;
                this.listeners.forEach(function (t) {
                  return t(e.value, e.status);
                }),
                  (this.listeners = []);
              },
            },
          ]),
          e
        );
      })();
    t.a = f;
  },
  596: function (e, t, n) {
    e.exports = { title: "_3gphASaH" };
  },
  60: function (e, t, n) {
    "use strict";
    var a = n(6),
      r = n.n(a),
      i = n(0),
      c = n.n(i),
      o = n(5),
      s = n.n(o),
      l = n(8),
      u = (n(9), n(22)),
      d =
        (n(193),
        {
          "./spinner.scss": {
            scale: "_2MVUZXqY",
            container: "_2fCaLc8V",
            "is-size-tiny": "S9kGp0pM",
            "is-size-small": "_2IO7YLhY",
            "is-size-medium": "_1aXoWsYQ",
            "is-size-large": "_1foXSAlV",
            circular: "_2OnLG4G0",
            rotate: "_2YfUS-rq",
            "is-static": "_3bQ8Np11",
            path: "_1f5mXS6c",
            dash: "ySzGGupe",
          },
        }),
      f = {
        Size: {
          Tiny: "tiny",
          Small: "small",
          Medium: "medium",
          Large: "large",
        },
      },
      m = function (e) {
        var t = e.className,
          n = e.size,
          a = void 0 === n ? f.Size.Medium : n;
        return c.a.createElement(
          "div",
          {
            className:
              (t ? t + " " : "") +
              r()(
                s()(
                  "container",
                  Object(l.a)({ size: a }),
                  Object(l.b)({ isStatic: u.a })
                ),
                d,
                { handleMissingStyleName: "warn" }
              ),
          },
          c.a.createElement(
            "div",
            { className: "_2MVUZXqY" },
            c.a.createElement(
              "svg",
              { className: "_2OnLG4G0" },
              c.a.createElement("circle", {
                className: "_1f5mXS6c",
                cx: "25",
                cy: "25",
                r: "20",
                fill: "none",
                strokeWidth: "3",
              })
            )
          )
        );
      };
    (m.Variant = f), (t.a = m);
  },
  61: function (e, t, n) {
    "use strict";
    t.a = function () {
      return null;
    };
  },
  65: function (e, t, n) {
    "use strict";
    n.d(t, "c", function () {
      return l;
    }),
      n.d(t, "a", function () {
        return u;
      }),
      n.d(t, "b", function () {
        return d;
      }),
      n(19),
      n(17),
      n(14),
      n(25),
      n(26),
      n(20),
      n(15);
    var a = n(4),
      r = n.n(a),
      i = n(98),
      c = n(11);
    function o(e, t) {
      var n,
        a = Object.keys(e);
      return (
        Object.getOwnPropertySymbols &&
          ((n = Object.getOwnPropertySymbols(e)),
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
          a.push.apply(a, n)),
        a
      );
    }
    var s = new i.a();
    function l(e, t, n) {
      Object(c.a)() &&
        s.set(
          e,
          t,
          (function (e) {
            var t, n;
            for (t = 1; t < arguments.length; t++)
              (n = null != arguments[t] ? arguments[t] : {}),
                t % 2
                  ? o(Object(n), !0).forEach(function (t) {
                      r()(e, t, n[t]);
                    })
                  : Object.getOwnPropertyDescriptors
                  ? Object.defineProperties(
                      e,
                      Object.getOwnPropertyDescriptors(n)
                    )
                  : o(Object(n)).forEach(function (t) {
                      Object.defineProperty(
                        e,
                        t,
                        Object.getOwnPropertyDescriptor(n, t)
                      );
                    });
            return e;
          })({ path: "/" }, n)
        );
    }
    function u(e) {
      if (Object(c.a)()) return s.get(e);
    }
    var d = function (e) {
      return 24 * e * 60 * 60;
    };
  },
  659: function (e, t, n) {
    "use strict";
    var a = n(2),
      r = n.n(a),
      i = n(0),
      c = n.n(i),
      o = n(47),
      s = n(12),
      l = (n(9), n(179)),
      u = n(69),
      d = n(356),
      f = n(238),
      m = n(469),
      p = (n(438), n(16));
    n(631),
      (t.a = function (e) {
        var t = e.title,
          n = e.subtitle,
          a = e.ctas,
          i = e.ctaSupportText,
          b = void 0 === i ? l.a : i,
          g = e.trustbar,
          v = e.showcaseTalents,
          h = e.animationDelay,
          y = e.animated,
          E = void 0 === y || y,
          _ = e.noMap,
          O = e.className;
        return c.a.createElement(
          p.a,
          {
            className: (O ? O + " " : "") + "vEXkexC4",
            space: p.a.Variant.Space.Medium,
            forceSpace: !0,
          },
          c.a.createElement(
            p.a,
            {
              width: p.a.Variant.Width.Fixed,
              space: p.a.Variant.Space.None,
              className: "_2ITWOJ8U",
            },
            c.a.createElement(
              "div",
              { className: "_2MN3d_Vf" },
              c.a.createElement(
                u.a,
                {
                  query: "(max-width: ".concat(
                    parseInt(s.b.DESKTOP) - 1,
                    "px)"
                  ),
                },
                c.a.createElement(
                  m.a,
                  r()(
                    {
                      className:
                        "_2m1Be_j0 " +
                        ({ animated: E, noMap: _ }.className || ""),
                      items: v,
                    },
                    { animated: E, noMap: _ }
                  )
                )
              )
            ),
            c.a.createElement(
              "div",
              { className: "_2EOMFsoZ" },
              c.a.createElement(
                "div",
                { className: "_1gNcFfr2" },
                c.a.createElement("h1", {
                  className: "_1PHP5q1Y",
                  "data-id": "hero-title",
                  dangerouslySetInnerHTML: { __html: t },
                }),
                c.a.createElement("p", {
                  className: "PYUx701H",
                  dangerouslySetInnerHTML: { __html: Object(o.a)(n) },
                }),
                c.a.createElement(
                  "div",
                  { className: "_3jjhfxI1" },
                  c.a.createElement(
                    d.a,
                    r()(
                      { ctas: a },
                      {
                        className: "_1F5eFSRy " + ({ ctas: a }.className || ""),
                      }
                    )
                  ),
                  c.a.createElement("p", { className: "_1uVOEIFO" }, b)
                )
              ),
              c.a.createElement(
                u.a,
                {
                  query: "(min-width: ".concat(s.b.DESKTOP, ")"),
                  defaultMatch: !0,
                },
                c.a.createElement(
                  m.a,
                  r()(
                    {
                      className:
                        "_2m1Be_j0 " +
                        ({ animated: E, noMap: _, animationDelay: h }
                          .className || ""),
                      items: v,
                    },
                    { animated: E, noMap: _, animationDelay: h }
                  )
                )
              )
            )
          ),
          g && c.a.createElement(f.a, g)
        );
      });
  },
  69: function (e, t, n) {
    "use strict";
    n(14);
    var a = n(1),
      r = n.n(a),
      i = n(190),
      c = n.n(i),
      o = n(95),
      s = n.n(o),
      l = n(0),
      u = n(3),
      d = n.n(u),
      f = function (e) {
        var t = e.query,
          n = e.callback,
          a = e.children,
          i = e.defaultMatch,
          o = e.queries,
          u = Object(l.useState)(s()(i) ? null : { matches: i }),
          d = r()(u, 2),
          f = d[0],
          m = d[1],
          p = Object(l.useCallback)(
            function (e) {
              m(e), n && n(e);
            },
            [n]
          ),
          b = function (e) {
            if (!c()(e)) {
              var t = { matches: {} };
              for (var n in e) t.matches[n] = e[n].matches;
              p(t);
            }
          };
        return (
          Object(l.useEffect)(
            function () {
              var e;
              if (t || o) {
                if (t) {
                  o &&
                    console.warn(
                      "MatchMedia is being called with single and multiple queries at the same time. You should use either one or the other."
                    );
                  var n = window.matchMedia(t);
                  return (
                    p(n),
                    n.addListener(p),
                    function () {
                      return n.removeListener(p);
                    }
                  );
                }
                return "object" ==
                  typeof (e = (function () {
                    var e = {},
                      t = [];
                    for (var n in o) {
                      var a = window.matchMedia(o[n]);
                      e[n] = a;
                    }
                    b(e);
                    var r = function (n) {
                      var a = e[n],
                        r = function () {
                          return b(e);
                        };
                      a.addListener(r),
                        t.push(function () {
                          return a.removeListener(r);
                        });
                    };
                    for (var i in e) r(i);
                    return {
                      v: function () {
                        t.forEach(function (e) {
                          return e();
                        });
                      },
                    };
                  })())
                  ? e.v
                  : void 0;
              }
            },
            [p, o, t]
          ),
          f
            ? !o || a instanceof Function
              ? a instanceof Function
                ? a(f)
                : f.matches && a
                ? a
                : null
              : (console.error(
                  "MatchMedia is being called with multiple queries but children is not a function. Consider using single query or setting children as a function to render components conditionally."
                ),
                null)
            : null
        );
      };
    (f.propTypes = {
      query: d.a.string,
      queries: d.a.object,
      callback: d.a.func,
      defaultMatch: d.a.bool,
    }),
      (t.a = Object(l.memo)(f));
  },
  702: function (e, t, n) {
    "use strict";
    var a = n(2),
      r = n.n(a),
      i = n(0),
      c = n.n(i),
      o = n(280),
      s = n(116);
    n(647),
      (t.a = function (e) {
        return c.a.createElement(
          s.a,
          { forceSpace: !0, className: "_1AU3micp" },
          c.a.createElement("p", { className: "_3OR3y5Hs" }, e.title),
          c.a.createElement(
            o.b,
            r()({ width: "100%", height: "28px", theme: "light" }, e)
          )
        );
      });
  },
  703: function (e, t, n) {
    "use strict";
    n(24);
    var a = n(1),
      r = n.n(a),
      i = n(0),
      c = n.n(i),
      o = n(31),
      s = n(201),
      l = n(71),
      u = (n(302), n(16));
    n(759),
      (t.a = function (e) {
        var t = e.title,
          n = e.blogPosts,
          a = r()(e.ctas, 1)[0],
          i = a.label,
          d = a.href;
        return c.a.createElement(
          u.a,
          { semantic: !0, width: u.a.Variant.Width.Fixed },
          c.a.createElement(
            l.a,
            { className: "_3464egf9", dataId: "trending-articles-title" },
            t
          ),
          c.a.createElement(
            "div",
            { className: "_1v0q4yLn" },
            n.map(function (e, t) {
              return c.a.createElement(
                "div",
                { key: t, className: "_2ktNOg9M" },
                c.a.createElement(s.b, e)
              );
            })
          ),
          c.a.createElement(
            "div",
            { className: "EYJMZQYK" },
            c.a.createElement(
              o.b,
              { type: o.b.Variant.Theme.Secondary, url: d },
              i
            )
          )
        );
      });
  },
  704: function (e, t, n) {
    "use strict";
    n(19), n(176);
    var a = n(0),
      r = n.n(a),
      i = n(262),
      c = n(263),
      o = n(16);
    n(851),
      (t.a = function (e) {
        var t = e.title,
          n = e.description,
          a = e.skillJobsPages,
          s = e.cta;
        return r.a.createElement(
          o.a,
          {
            semantic: !0,
            width: o.a.Variant.Width.Fixed,
            className: "UjyfWkT0",
          },
          r.a.createElement(
            "div",
            { className: "_1ERCAXNg" },
            r.a.createElement(
              "h2",
              { className: "_3eaUfUxR", "data-id": "job-opportunities-title" },
              t
            ),
            r.a.createElement(i.a, { copy: n, as: "p", className: "_2Vt3M80X" })
          ),
          r.a.createElement(
            "div",
            { className: "_22S28k_M" },
            r.a.createElement(c.a, { skillPages: a, cta: s })
          )
        );
      });
  },
  705: function (e, t, n) {
    "use strict";
    n(19), n(176), n(24);
    var a = n(2),
      r = n.n(a),
      i = n(0),
      c = n.n(i),
      o = n(71),
      s = n(201),
      l = (n(302), n(16));
    n(760),
      (t.a = function (e) {
        var t = e.title,
          n = e.description,
          a = e.blogPosts;
        return c.a.createElement(
          l.a,
          { className: "_2Gg2PJaD" },
          c.a.createElement(
            l.a,
            { semantic: !0, width: l.a.Variant.Width.Fixed },
            c.a.createElement("span", { className: "_32vUdETR" }),
            c.a.createElement(
              "div",
              { className: "_2apRCwP-" },
              c.a.createElement(
                o.a,
                { className: "_2u9IMI_c", dataId: "hiring-remote-title" },
                t
              ),
              c.a.createElement("p", { className: "_1XGKO4db" }, n)
            ),
            c.a.createElement(
              "div",
              { className: "SlY1SJfZ" },
              a.map(function (e, t) {
                return c.a.createElement(
                  "div",
                  { key: t, className: "_2crsyc9a" },
                  c.a.createElement(
                    s.b,
                    r()({ size: s.b.Variant.Size.Large }, e)
                  )
                );
              })
            )
          )
        );
      });
  },
  706: function (e, t, n) {
    "use strict";
    n(24), n(51);
    var a = n(2),
      r = n.n(a),
      i = n(1),
      c = n.n(i),
      o = n(6),
      s = n.n(o),
      l = n(0),
      u = n.n(l),
      d = n(5),
      f = n.n(d),
      m = n(12),
      p = n(10),
      b = (n(9), n(69)),
      g = n(45),
      v = n(31),
      h = n(231),
      y = n(71),
      E = n(214),
      _ = n(204),
      O = n(16),
      j =
        (n(761),
        {
          "./meet-talent.scss": {
            container: "_3EDMpBjA",
            title: "_2OI3ylyG",
            "avatar-container": "_3Sc2ujmg",
            avatar: "_3siSP-LC",
            "is-active": "_3rGuf2PF",
            "avatar-name": "_3ToLUych",
            "avatar-image": "_7ng8qnUa",
            "is-inactive": "_3Ex82UXI",
            "card-container": "Jr_hHigZ",
            "card-background": "_3vJ8jGvh",
            "card-picture": "_1M0xqkxu",
            "card-picture-logo": "_2qLRa5LB",
            "card-info": "hBrS_qrV",
            "card-name": "_2A26aCq6",
            "card-role": "_2LQISjlv",
            "card-description": "_3H1wXsRj",
            "card-footer": "_1FEDQdXj",
            "card-company": "_3oAy5t_D",
            "card-company-prefix": "_2r2kMPP2",
            "card-company-logo": "_1qCTwhyt",
            "card-cta": "_7eQ3Urfn",
            "signup-container": "_3Yv-GRbF",
            "signup-text": "_1I9W3EKS",
            "signup-cta": "_2dCHkw-e",
            "hire-cta": "_3zigH5HU",
            "card-picture-overlay": "_3La4lHyP",
            "tags-container": "_3JQi8uDU",
            "skill-tag": "_27d9RBhI",
          },
        }),
      w = function (e) {
        var t = e.tags,
          n = e.moreHref,
          a = e.noOfRows,
          r = void 0 === a ? 1 : a,
          i = Object(p.x)(r),
          c = i.containerRef,
          o = i.removedCount;
        return u.a.createElement(
          "div",
          { ref: c, className: "_3JQi8uDU" },
          t.map(function (e, t) {
            return u.a.createElement(_.a, {
              key: t,
              tag: e,
              className: "_27d9RBhI",
            });
          }),
          u.a.createElement(_.a, {
            className: "_27d9RBhI",
            tag: { label: "+ ".concat(o || "0", " more"), href: n },
            style: { display: "none" },
          })
        );
      };
    t.a = function (e) {
      var t = e.title,
        n = e.showcaseTalents,
        a = e.footerText,
        i = e.footerCta,
        o = e.hireCtaInlineStyles,
        d = e.hireCtaDataId,
        p = e.gaEvent,
        _ = e.gaCategory,
        S = n.slice(0, 3),
        k = Object(l.useState)(0),
        N = c()(k, 2),
        C = N[0],
        P = N[1],
        x = S[C],
        L = x.publicResumeUrl,
        T = x.bigImageUrl,
        I = x.hireJobTitle,
        R = x.fullName,
        M = x.jobTitle,
        D = x.bio,
        A = x.skills,
        U = x.previousCompanyImageUrl,
        z = x.previousCompanyName,
        q = x.ctaInlineStyles,
        V = x.firstName;
      return u.a.createElement(
        O.a,
        { semantic: !0, width: O.a.Variant.Width.Fixed, forceSpace: !0 },
        u.a.createElement(
          y.a,
          {
            className: "_2OI3ylyG",
            margin: [y.a.Variant.Margin.Standard, y.a.Variant.Margin.Bottom],
            dataId: "meet-talent-title",
          },
          t
        ),
        u.a.createElement(
          "div",
          { className: "_3Sc2ujmg" },
          S.map(function (e, t) {
            var n = C === t;
            return u.a.createElement(
              "div",
              {
                key: e.fullName,
                onClick: function () {
                  return P(t);
                },
                className: s()(
                  f()("avatar", { "is-active": n, "is-inactive": !n }),
                  j,
                  { handleMissingStyleName: "warn" }
                ),
              },
              u.a.createElement(
                "div",
                { className: "_7ng8qnUa" },
                u.a.createElement(g.a, {
                  src: e.imageUrl,
                  alt: e.hireJobTitle,
                  width: "100%",
                })
              ),
              u.a.createElement("p", { className: "_3ToLUych" }, e.fullName)
            );
          })
        ),
        u.a.createElement(
          "div",
          { className: "Jr_hHigZ" },
          u.a.createElement("div", { className: "_3vJ8jGvh" }),
          u.a.createElement(
            v.b,
            { className: "_1M0xqkxu", url: L },
            u.a.createElement(g.a, {
              src: T,
              alt: I,
              width: "100%",
              effect: "opacity",
              key: R,
            }),
            u.a.createElement("span", {
              className: "_2qLRa5LB",
              "data-happo-hide": !0,
            }),
            u.a.createElement(E.a, { className: "_3La4lHyP" })
          ),
          u.a.createElement(
            "div",
            { className: "hBrS_qrV" },
            u.a.createElement(v.b, { className: "_2A26aCq6", url: L }, R),
            u.a.createElement("p", { className: "_2LQISjlv" }, M),
            u.a.createElement("p", { className: "_3H1wXsRj" }, D),
            A &&
              u.a.createElement(
                u.a.Fragment,
                null,
                u.a.createElement(
                  b.a,
                  { query: "(max-width: ".concat(m.b.TABLET, ")") },
                  u.a.createElement(w, {
                    key: R,
                    tags: A,
                    moreHref: L,
                    noOfRows: 2,
                  })
                ),
                u.a.createElement(
                  b.a,
                  {
                    query: "(min-width: ".concat(
                      parseInt(m.b.TABLET, 10) + 1,
                      "px)"
                    ),
                    defaultMatch: !0,
                  },
                  u.a.createElement(w, {
                    key: "large-".concat(R),
                    tags: A,
                    moreHref: L,
                    noOfRows: 1,
                  })
                )
              ),
            u.a.createElement(
              "div",
              { className: "_1FEDQdXj" },
              U &&
                u.a.createElement(
                  "div",
                  { className: "_3oAy5t_D" },
                  u.a.createElement(
                    "p",
                    { className: "_2r2kMPP2" },
                    "Previously at"
                  ),
                  u.a.createElement(g.a, {
                    className: "_1qCTwhyt",
                    src: U,
                    alt: z,
                  })
                ),
              u.a.createElement(
                v.a,
                r()(
                  {
                    type: v.b.Variant.Theme.CTA,
                    url: i.href,
                    className:
                      "_7eQ3Urfn " +
                      ("hire_".concat(V.toLowerCase()),
                      {
                        gaEvent: p,
                        gaCategory: _,
                        gaLabel: "hire_".concat(V.toLowerCase()),
                      }.className || ""),
                    style: q,
                    dataId: i.dataId,
                  },
                  {
                    gaEvent: p,
                    gaCategory: _,
                    gaLabel: "hire_".concat(V.toLowerCase()),
                  }
                ),
                "Hire ",
                V
              )
            )
          )
        ),
        u.a.createElement(h.a, {
          className: "_3zigH5HU",
          buttonVariant: "cta",
          title: a,
          cta: i,
          inlineStyles: o,
          dataId: d,
        })
      );
    };
  },
  71: function (e, t, n) {
    "use strict";
    var a = n(6),
      r = n.n(a),
      i = n(0),
      c = n.n(i),
      o = n(5),
      s = n.n(o),
      l = n(8),
      u =
        (n(9),
        n(218),
        {
          "./section-title.scss": {
            root: "GL1BsDfm",
            "is-margin-standard": "Her0Bht-",
            "is-margin-bottom": "K0oC-ssM",
          },
        }),
      d = function (e) {
        var t = e.children,
          n = e.className,
          a = e.margin,
          i = e.dataId;
        return t
          ? c.a.createElement("h2", {
              "data-id": i,
              dangerouslySetInnerHTML: { __html: t },
              className:
                (n ? n + " " : "") +
                "GL1BsDfm " +
                r()(s()(Object(l.a)({ margin: a })), u, {
                  handleMissingStyleName: "warn",
                }),
            })
          : null;
      };
    (d.Variant = { Margin: { Standard: "standard", Bottom: "bottom" } }),
      (t.a = d);
  },
  759: function (e, t, n) {
    e.exports = {
      title: "_3464egf9",
      "articles-container": "_1v0q4yLn",
      "article-wrapper": "_2ktNOg9M",
      "article-link-container": "EYJMZQYK",
    };
  },
  76: function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
      return l;
    }),
      n.d(t, "b", function () {
        return u;
      }),
      n(19),
      n(17),
      n(14),
      n(25),
      n(26),
      n(20),
      n(15);
    var a = n(4),
      r = n.n(a),
      i = n(7),
      c = n.n(i);
    function o(e, t) {
      var n,
        a = Object.keys(e);
      return (
        Object.getOwnPropertySymbols &&
          ((n = Object.getOwnPropertySymbols(e)),
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
          a.push.apply(a, n)),
        a
      );
    }
    function s(e) {
      var t, n;
      for (t = 1; t < arguments.length; t++)
        (n = null != arguments[t] ? arguments[t] : {}),
          t % 2
            ? o(Object(n), !0).forEach(function (t) {
                r()(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : o(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
      return e;
    }
    function l(e) {
      var t = e.collapsed,
        n = e.expanded,
        a = e.collapsing,
        r = e.expanding;
      return {
        appear: t,
        enter: t,
        enterActive: r,
        appearActive: r,
        enterDone: n,
        exitActive: a,
        exitDone: t,
      };
    }
    var u = function (e, t) {
      var n,
        a,
        r = e.sidebar,
        i = c()(e, ["sidebar"]);
      if (!r) return null;
      var o = r.socialShareSection,
        l = t.socialMedia;
      if (
        !o ||
        (null === (n = o.links) || void 0 === n ? void 0 : n.length) ||
        !(null == l
          ? void 0
          : null === (a = l.links) || void 0 === a
          ? void 0
          : a.length)
      )
        return r;
      var u = l.links;
      return s(
        s(s({}, r), i),
        {},
        { socialShareSection: s(s({}, o), {}, { links: u }) }
      );
    };
  },
  760: function (e, t, n) {
    e.exports = {
      "outer-container": "_2Gg2PJaD",
      background: "_32vUdETR",
      "title-container": "_2apRCwP-",
      title: "_2u9IMI_c",
      description: "_1XGKO4db",
      "blog-posts-container": "SlY1SJfZ",
      "blog-post-wrapper": "_2crsyc9a",
    };
  },
  761: function (e, t, n) {
    e.exports = {
      "card-container": "Jr_hHigZ",
      "card-background": "_3vJ8jGvh",
      "tags-container": "_3JQi8uDU",
      "skill-tag": "_27d9RBhI",
      container: "_3EDMpBjA",
      title: "_2OI3ylyG",
      "avatar-container": "_3Sc2ujmg",
      avatar: "_3siSP-LC",
      "is-active": "_3rGuf2PF",
      "avatar-name": "_3ToLUych",
      "avatar-image": "_7ng8qnUa",
      "is-inactive": "_3Ex82UXI",
      "card-picture": "_1M0xqkxu",
      "card-picture-logo": "_2qLRa5LB",
      "card-info": "hBrS_qrV",
      "card-name": "_2A26aCq6",
      "card-role": "_2LQISjlv",
      "card-description": "_3H1wXsRj",
      "card-footer": "_1FEDQdXj",
      "card-company": "_3oAy5t_D",
      "card-company-prefix": "_2r2kMPP2",
      "card-company-logo": "_1qCTwhyt",
      "card-cta": "_7eQ3Urfn",
      "signup-container": "_3Yv-GRbF",
      "signup-text": "_1I9W3EKS",
      "signup-cta": "_2dCHkw-e",
      "hire-cta": "_3zigH5HU",
      "card-picture-overlay": "_3La4lHyP",
    };
  },
  77: function (e, t, n) {
    "use strict";
    n(19), n(17), n(14), n(25), n(26), n(20), n(27), n(33), n(15);
    var a = n(18),
      r = n.n(a),
      i = n(4),
      c = n.n(i),
      o = (n(67), n(35)),
      s = n.n(o);
    function l(e, t) {
      var n,
        a = Object.keys(e);
      return (
        Object.getOwnPropertySymbols &&
          ((n = Object.getOwnPropertySymbols(e)),
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
          a.push.apply(a, n)),
        a
      );
    }
    function u(e) {
      var t, n;
      for (t = 1; t < arguments.length; t++)
        (n = null != arguments[t] ? arguments[t] : {}),
          t % 2
            ? l(Object(n), !0).forEach(function (t) {
                c()(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : l(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
      return e;
    }
    var d = (function () {
      var e = s()(
        r.a.mark(function e() {
          var t,
            a,
            i = arguments;
          return r.a.wrap(function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  if (
                    ((t = i.length > 0 && void 0 !== i[0] ? i[0] : window),
                    (a = i.length > 1 && void 0 !== i[1] ? i[1] : {}),
                    "scrollBehavior" in document.documentElement.style)
                  ) {
                    e.next = 8;
                    break;
                  }
                  return (e.next = 6), n.e(207).then(n.t.bind(null, 242, 7));
                case 6:
                  e.sent.polyfill();
                case 8:
                  t.scrollTo(u({ behavior: "smooth" }, a));
                case 9:
                case "end":
                  return e.stop();
              }
          }, e);
        })
      );
      return function () {
        return e.apply(this, arguments);
      };
    })();
    t.a = d;
  },
  778: function (e, t, n) {
    e.exports = {
      container: "_1S0gsIXK",
      icon: "_2OhygCGb",
      "is-error": "wy7NZIb1",
    };
  },
  779: function (e, t, n) {
    e.exports = {
      "link-list-section-title": "_1dhg0W9C",
      "link-list-item": "I0iL1nfG",
      container: "_1-a_9qL8",
      "info-message": "_1Zmsin8p",
      "is-info": "zOls6cTR",
      "is-compact": "_3BTDlKNI",
      "link-list-section": "_6CRLOWhf",
      "link-list-group-list": "MgEtwLcx",
      "is-horizontal": "_14GfLqH1",
    };
  },
  78: function (e, t, n) {
    e.exports = {
      container: "VRzpBOaS",
      cell: "_3jgwFSUz",
      "is-gutter-mobile-1": "a5wuXPKO",
      "is-gutter-mobile-2": "xK1Y6wFp",
      "is-gutter-mobile-3": "h7NHpGkN",
      "is-gutter-mobile-4": "_2lPvBDZI",
      "is-mobile-1": "_1GwNtStZ",
      "is-mobile-2": "_2Mx0cghk",
      "is-mobile-3": "_2NAIDFKi",
      "is-mobile-4": "_2UDh_G12",
      "is-mobile-5": "_3v8dne6s",
      "is-mobile-6": "_2N8pXk9N",
      "is-mobile-7": "jgRVL1If",
      "is-mobile-8": "_1mhTHHWq",
      "is-mobile-9": "_3KmeAScq",
      "is-mobile-10": "_3Jnmt4_u",
      "is-mobile-11": "_3EB6kCHm",
      "is-mobile-12": "RqckegCL",
      "is-gutter-tablet-1": "_1CZDjbCH",
      "is-gutter-tablet-2": "SdDoLGVe",
      "is-gutter-tablet-3": "nSXNjloy",
      "is-gutter-tablet-4": "_2d4v8X-a",
      "is-tablet-1": "_1KQ1Gi0G",
      "is-tablet-2": "_37O2S15T",
      "is-tablet-3": "_1HQVvDUb",
      "is-tablet-4": "_2lgV_Xr9",
      "is-tablet-5": "_1rLP5r_m",
      "is-tablet-6": "_26ebzZtt",
      "is-tablet-7": "_2u3R8p7l",
      "is-tablet-8": "_25gHwGaQ",
      "is-tablet-9": "_2iRj5_FL",
      "is-tablet-10": "_2MdNxXb-",
      "is-tablet-11": "_2xplsVD8",
      "is-tablet-12": "_1s3M2fiC",
      "is-gutter-desktop-1": "_1tysoH_D",
      "is-gutter-desktop-2": "_2Gm6BBoN",
      "is-gutter-desktop-3": "_2hTqIJvN",
      "is-gutter-desktop-4": "_30YsJBkA",
      "is-desktop-1": "_37ljHUaw",
      "is-desktop-2": "_2lRwSs8g",
      "is-desktop-3": "_1ESny7XR",
      "is-desktop-4": "_1ArckmJZ",
      "is-desktop-5": "_30GVQs4v",
      "is-desktop-6": "_1mgQSQLr",
      "is-desktop-7": "_2tDzT42o",
      "is-desktop-8": "_9Ikuko4z",
      "is-desktop-9": "_2fKcTUpf",
      "is-desktop-10": "Hzu-2nHX",
      "is-desktop-11": "_292QmiDj",
      "is-desktop-12": "_1zJaTryD",
      "is-gutter-large-1": "_1Dczv3HK",
      "is-gutter-large-2": "_1Q_5EQUW",
      "is-gutter-large-3": "_23TbfZxP",
      "is-gutter-large-4": "bMWr3Lne",
      "is-large-1": "jds3D0B5",
      "is-large-2": "_1e7s_IuL",
      "is-large-3": "_1q-zcMCw",
      "is-large-4": "_3yg5FqML",
      "is-large-5": "_1Hl0Oco6",
      "is-large-6": "NpIB0GaX",
      "is-large-7": "j7_AHzPn",
      "is-large-8": "_1ZZGIcz-",
      "is-large-9": "s20_q1LG",
      "is-large-10": "_3uX6olga",
      "is-large-11": "_2muXPbLl",
      "is-large-12": "_3nmeTH2Y",
    };
  },
  79: function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
      return m;
    }),
      n.d(t, "b", function () {
        return b;
      }),
      n(23),
      n(17),
      n(14),
      n(56),
      n(74),
      n(24),
      n(244),
      n(20),
      n(15);
    var a = n(1),
      r = n.n(a),
      i = n(109),
      c = n.n(i),
      o = n(199),
      s = n.n(o),
      l = n(40),
      u = n.n(l),
      d = n(0),
      f = n(12),
      m = function (e, t) {
        var n = [];
        if (e) {
          var a = "(min-width: ".concat(e, ")");
          if (!t) return a;
          n.push(a);
        }
        if (t) {
          var r = "(max-width: calc(".concat(t, " - 1px))");
          if (!e) return r;
          n.push(r);
        }
        if (e && t) return n.join(" and ");
      },
      p = {
        forMobileOnly: m(null, f.b.TABLET),
        forTablet: m(f.b.TABLET),
        forDesktop: m(f.b.DESKTOP),
        forDesktopLarge: m(f.b.DESKTOP_LARGE),
        forTabletOnly: m(f.b.TABLET, f.b.DESKTOP),
        forDesktopOnly: m(f.b.DESKTOP, f.b.DESKTOP_LARGE),
      };
    function b(e, t) {
      var n = (function (e) {
          return c()(
            s()(e, function (e) {
              return "default" !== e;
            }),
            function (e, t) {
              return p[t] || t;
            }
          );
        })(e),
        a = e.hasOwnProperty("default") ? e.default : t,
        i = Object.keys(n),
        o = Object(d.useState)(a),
        l = r()(o, 2),
        f = l[0],
        m = l[1],
        b = Object(d.useRef)(!0),
        g = Object(d.useRef)(
          Object.fromEntries(
            i.map(function (e) {
              return [e, !1];
            })
          )
        ),
        v = Object(d.useCallback)(u()(m, 50), []),
        h = function (e) {
          g.current[e.id] = e.mql.matches;
          var t = [a].concat(
              i
                .filter(function (e) {
                  return g.current[e];
                })
                .map(function (e) {
                  return n[e];
                })
            ),
            r = t[t.length - 1];
          r !== f && v(r);
        };
      return (
        Object(d.useEffect)(function () {
          var e = [];
          return (
            i.forEach(function (t) {
              var n = { id: t, mql: window.matchMedia(t) },
                a = function () {
                  return h(n);
                };
              n.mql.addListener(a),
                b.current && h(n),
                e.push(function () {
                  return n.mql.removeListener(a);
                });
            }),
            (b.current = !1),
            function () {
              return e.forEach(function (e) {
                return e();
              });
            }
          );
        }),
        f
      );
    }
  },
  8: function (e, t, n) {
    "use strict";
    n.d(t, "b", function () {
      return g;
    }),
      n.d(t, "c", function () {
        return v;
      }),
      n(19),
      n(23),
      n(17),
      n(194),
      n(14),
      n(110),
      n(195),
      n(188),
      n(25),
      n(26),
      n(20),
      n(72),
      n(36),
      n(70),
      n(15);
    var a = n(4),
      r = n.n(a),
      i = n(1),
      c = n.n(i),
      o = n(54),
      s = n.n(o),
      l = n(177),
      u = n.n(l),
      d = n(5),
      f = n.n(d);
    function m(e, t) {
      var n,
        a = Object.keys(e);
      return (
        Object.getOwnPropertySymbols &&
          ((n = Object.getOwnPropertySymbols(e)),
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
          a.push.apply(a, n)),
        a
      );
    }
    function p(e) {
      var t, n;
      for (t = 1; t < arguments.length; t++)
        (n = null != arguments[t] ? arguments[t] : {}),
          t % 2
            ? m(Object(n), !0).forEach(function (t) {
                r()(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : m(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
      return e;
    }
    var b = function (e, t) {
        var n = "is";
        return e && (n += "-".concat(Array.isArray(e) ? e[t] : e)), n;
      },
      g = function (e) {
        return Object.entries(e).reduce(function (e, t) {
          var n = c()(t, 2),
            a = n[0],
            i = n[1];
          return p(
            p({}, e),
            {},
            r()({}, "is-".concat(s()(a.replace(/^is/, ""))), !!i)
          );
        }, {});
      },
      v = function (e) {
        return f()(e) || void 0;
      };
    t.a = function (e) {
      var t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
        n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
      if (!Array.isArray(e))
        if (u()(e)) {
          var a = Object.keys(e),
            r = Object.values(e);
          (t = r.reduce(function (e, t, n) {
            return (
              (Array.isArray(t) ? t : [t]).forEach(function () {
                e.push(a[n]);
              }),
              e
            );
          }, [])),
            (e = r.flat());
        } else e = [e];
      return e.reduce(function (e, a, r) {
        return (n || a) && (e["".concat(b(t, r), "-").concat(a)] = !!a), e;
      }, {});
    };
  },
  80: function (e, t, n) {
    "use strict";
    n.d(t, "b", function () {
      return r;
    }),
      n.d(t, "c", function () {
        return i;
      }),
      n.d(t, "a", function () {
        return c;
      });
    var a = n(0),
      r = Object(a.createContext)({}),
      i = function () {
        return Object(a.useContext)(r);
      },
      c = "modal-host";
  },
  81: function (e, t, n) {
    "use strict";
    function a(e, t) {
      new window.IntersectionObserver(
        function (e, n) {
          e[0].isIntersecting && (n.disconnect(), t());
        },
        { rootMargin: "50px" }
      ).observe(e);
    }
    function r() {
      return "function" == typeof window.IntersectionObserver;
    }
    function i(e) {
      if ("function" == typeof window.requestIdleCallback)
        return window.requestIdleCallback(e, { timeout: 250 });
      e();
    }
    n.d(t, "b", function () {
      return a;
    }),
      n.d(t, "c", function () {
        return r;
      }),
      n.d(t, "a", function () {
        return i;
      }),
      n(223);
  },
  82: function (e, t, n) {
    "use strict";
    n(74),
      n(51),
      n(36),
      n(103),
      (t.a = function (e) {
        if ("string" != typeof e) return "";
        var t = e.split("/").slice(3);
        return "/".concat(t.join("/"));
      });
  },
  83: function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
      return i;
    });
    var a,
      r = n(59),
      i = function (e) {
        return (
          a ||
            (a = new r.a()).fetch(e, {
              credentials: "include",
              headers: { "Content-Type": "application/json" },
            }),
          a
        );
      };
  },
  84: function (e, t, n) {
    "use strict";
    n(19),
      n(23),
      n(17),
      n(14),
      n(56),
      n(25),
      n(26),
      n(20),
      n(27),
      n(33),
      n(36),
      n(64),
      n(103),
      n(150),
      n(15),
      n(68),
      n(75);
    var a = n(4),
      r = n.n(a),
      i = n(21),
      c = n(82),
      o = n(90);
    function s(e, t) {
      var n,
        a = Object.keys(e);
      return (
        Object.getOwnPropertySymbols &&
          ((n = Object.getOwnPropertySymbols(e)),
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
          a.push.apply(a, n)),
        a
      );
    }
    function l(e) {
      var t, n;
      for (t = 1; t < arguments.length; t++)
        (n = null != arguments[t] ? arguments[t] : {}),
          t % 2
            ? s(Object(n), !0).forEach(function (t) {
                r()(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : s(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
      return e;
    }
    var u = {
        credentials: "include",
        headers: { "Content-Type": "application/json" },
      },
      d = {},
      f = function (e) {
        var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          n = new URLSearchParams(t);
        return "".concat(e, "?").concat(n);
      };
    function m(e, t) {
      var n = t;
      return (
        n.startsWith("http") && (n = Object(c.a)(t)),
        (n = n.split("#")[0]),
        l(l({}, e), {}, r()({}, "share_path", n))
      );
    }
    function p(e, t) {
      return l(l({}, e), {}, r()({}, "fullstory_settings_path", t));
    }
    t.a = function () {
      var e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        t = Object(o.b)(o.a.Info, i.pageInfoUri),
        n = p({}, window.location.pathname);
      n = m(n, e.shareUrl || window.location.pathname);
      var a = f(t, n);
      return (
        d[a] ||
          (d[a] = window.fetch(a, u).then(function (e) {
            if (!e.ok) throw new Error("Failed to fetch page info");
            return e.json();
          })),
        d[a]
      );
    };
  },
  85: function (e, t, n) {
    "use strict";
    n(27), n(33), n(158);
    var a = n(83),
      r = n(13);
    t.a = function (e, t) {
      (function (e) {
        return e
          ? new Promise(function (t) {
              Object(a.a)(e).subscribe(function (e, n) {
                Object(r.c)(n) && t((null == e ? void 0 : e.user) || null);
              });
            })
          : Promise.resolve(null);
      })(e).then(t);
    };
  },
  851: function (e, t, n) {
    e.exports = {
      container: "UjyfWkT0",
      "title-container": "_1ERCAXNg",
      title: "_3eaUfUxR",
      description: "_2Vt3M80X",
      "links-container": "_22S28k_M",
    };
  },
  86: function (e, t, n) {
    "use strict";
    var a,
      r = n(1),
      i = n.n(r),
      c = n(0),
      o = n.n(c),
      s = n(57),
      l = n(11),
      u = n(10),
      d = n(53),
      f = (n(9), n(4)),
      m = n.n(f),
      p = n(54),
      b = n.n(p),
      g = n(38),
      v = n.n(g),
      h = n(6),
      y = n.n(h),
      E = n(5),
      _ = n.n(E),
      O = n(8),
      j = n(48),
      w = n(29),
      S = n(34),
      k =
        (n(94),
        n(74),
        n(51),
        function (e) {
          if ("string" != typeof e) return null;
          var t = e.indexOf(">");
          return -1 === t
            ? null
            : [
                e.slice(0, t),
                ' aria-hidden="true" tabindex="-1"',
                e.slice(t),
              ].join("");
        }),
      N =
        (n(147),
        {
          "./cookie-banner.scss": {
            root: "_7QdK4zyR",
            "is-gdpr": "_2_Bs6D8F",
            "is-visible": "_1X5ZYp4i",
            "is-static": "_3jl4op_D",
            text: "_3Wv9utNN",
            "is-privacy-shield": "_1MIke5bW",
            "button-wrapper": "_1WV0LMf5",
            button: "FjKAy-Wz",
          },
        }),
      C =
        ((a = {}),
        m()(a, S.b.GDPR, w.a.Variant.Theme.PrimaryGreen),
        m()(a, S.b.PrivacyShield, w.a.Variant.Theme.SecondaryWhite),
        a),
      P = function (e) {
        var t = e.messageText,
          n = e.buttonText,
          a = e.policyType,
          r = e.isVisible,
          i = e.isStatic,
          c = e.onAccept,
          s = void 0 === c ? v.a : c,
          l = k(t);
        return o.a.createElement(
          "div",
          {
            "data-happo-hide": !0,
            className: y()(
              _()(
                "root",
                Object(O.b)({ isVisible: r, isStatic: i }),
                Object(O.a)(b()(a))
              ),
              N,
              { handleMissingStyleName: "warn" }
            ),
          },
          o.a.createElement(j.a, {
            as: "div",
            className: "_3Wv9utNN",
            content: r ? t : l,
            isUnstyled: !0,
          }),
          o.a.createElement(
            "div",
            { className: "_1WV0LMf5" },
            o.a.createElement(
              w.a,
              {
                type: w.a.Type.Button,
                onClick: s,
                theme: C[a],
                className: "FjKAy-Wz",
              },
              n
            )
          )
        );
      };
    t.a = {
      Container: function (e) {
        var t = e.pageInfo,
          n = e.onAccept,
          a = t.cookiePolicyType,
          r = t.cookiePolicyMessageText,
          f = t.cookiePolicyAllowText,
          m = Object(c.useRef)(Object(d.b)(a)).current,
          p = Object(c.useState)(m),
          b = i()(p, 2),
          g = b[0],
          v = b[1],
          h = Object(u.o)(),
          y = i()(h, 1)[0],
          E = Object(c.useCallback)(
            function () {
              v(!1), Object(d.c)(a, !0), n();
            },
            [a, n]
          ),
          _ = document.getElementById(S.a),
          O = o.a.createElement(P, {
            isVisible: y && g,
            onAccept: E,
            messageText: r,
            buttonText: f,
            policyType: a,
          });
        if (_ && Object(l.a)()) return Object(s.createPortal)(O, _);
      },
      Host: function () {
        return o.a.createElement("div", { id: S.a });
      },
    };
  },
  87: function (e, t, n) {
    "use strict";
    n(94),
      (t.a = function () {
        var e = window.navigator.userAgent,
          t = e.indexOf("MSIE "),
          n = e.indexOf("Trident/");
        return t > 0 || n > 0;
      });
  },
  878: function (e, t, n) {
    "use strict";
    n.d(t, "b", function () {
      return O;
    }),
      n(14),
      n(56),
      n(74),
      n(188),
      n(27),
      n(64),
      n(15),
      n(68),
      n(75);
    var a = n(2),
      r = n.n(a),
      i = n(1),
      c = n.n(i),
      o = n(187),
      s = n.n(o),
      l = n(6),
      u = n.n(l),
      d = n(0),
      f = n.n(d),
      m = n(5),
      p = n.n(m),
      b = n(47),
      g = n(8),
      v = n(22),
      h = n(396),
      y = n(16),
      E = n(48),
      _ =
        (n(529),
        n(875),
        {
          "./search.scss": {
            container: "_12M9rQSD",
            content: "_2JvCq6MR",
            title: "_23-bll2M",
            "search-widget": "_93GgF1wO",
            "is-sticky": "_3TqFNVVh",
          },
        });
    function O(e) {
      return {
        handleSearch: Object(d.useCallback)(
          function (t) {
            if (t) {
              var n = new URLSearchParams({ q: t });
              window.location = [e, n].join("?");
            }
          },
          [e]
        ),
      };
    }
    t.a = function (e) {
      var t = e.searchWidgetSection,
        n = e.title,
        a = e.resultsPageUrl,
        i = (function () {
          var e = Object(d.useRef)(),
            t = Object(d.useState)(),
            n = c()(t, 2),
            a = n[0],
            r = n[1],
            i = Object(d.useState)(!1),
            o = c()(i, 2),
            l = o[0],
            u = o[1],
            f = Object(d.useCallback)(
              function () {
                if (!l) {
                  var t = e.current.getBoundingClientRect().top;
                  r(window.pageYOffset + t);
                }
              },
              [l]
            ),
            m = Object(d.useCallback)(
              s()(function () {
                var e = window.pageYOffset + 64 > a;
                u(e), e || f();
              }, 150),
              [a]
            );
          return (
            Object(d.useEffect)(
              function () {
                f(), m();
                var e = { scroll: m, resize: f };
                return (
                  Object.entries(e).forEach(function (e) {
                    var t = c()(e, 2),
                      n = t[0],
                      a = t[1];
                    window.addEventListener(n, a);
                  }),
                  function () {
                    return Object.entries(e).forEach(function (e) {
                      var t = c()(e, 2),
                        n = t[0],
                        a = t[1];
                      window.removeEventListener(n, a);
                    });
                  }
                );
              },
              [m, f]
            ),
            { isSticky: l && !v.a, ref: e }
          );
        })(),
        o = i.isSticky,
        l = i.ref,
        m = O(a).handleSearch;
      return f.a.createElement(
        y.a,
        {
          space: y.a.Variant.Space.None,
          className: u()(p()("container", Object(g.b)({ isSticky: o })), _, {
            handleMissingStyleName: "warn",
          }),
        },
        f.a.createElement(
          y.a,
          { width: y.a.Variant.Width.Fixed },
          f.a.createElement(
            "div",
            { className: "_2JvCq6MR" },
            !o &&
              f.a.createElement(E.a, {
                as: "h2",
                content: Object(b.a)(n),
                className: "_23-bll2M",
                isUnstyled: !0,
              }),
            f.a.createElement(
              h.b,
              r()(
                {
                  className:
                    "_93GgF1wO " +
                    ((t && t.className) || "") +
                    " " +
                    ({ ref: l }.className || "") +
                    (o && (h.b.Variant.Size.Small, 1)
                      ? " " +
                        ((o && { size: h.b.Variant.Size.Small }).className ||
                          "")
                      : ""),
                  onSearch: m,
                  gaCategory: o ? h.a.TopSearchSticky : h.a.TopSearchHero,
                },
                t,
                { ref: l },
                o && { size: h.b.Variant.Size.Small }
              )
            )
          )
        )
      );
    };
  },
  88: function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
      return o;
    });
    var a = n(1),
      r = n.n(a),
      i = n(0),
      c = n(87);
    function o() {
      var e = Object(i.useState)(!1),
        t = r()(e, 2),
        n = t[0],
        a = t[1];
      return (
        Object(i.useEffect)(function () {
          a(Object(c.a)());
        }, []),
        n
      );
    }
  },
  89: function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
      return _;
    }),
      n.d(t, "b", function () {
        return O;
      }),
      n(23),
      n(185);
    var a = n(184),
      r = n.n(a),
      i = n(11),
      c = n(46),
      o = (n(19), n(17), n(14), n(25), n(26), n(20), n(15), n(4)),
      s = n.n(o),
      l = n(7),
      u = n.n(l),
      d = n(0),
      f = n.n(d),
      m = n(57),
      p = n.n(m);
    n(36), n(70);
    var b = n(81);
    function g(e, t) {
      var n,
        a = Object.keys(e);
      return (
        Object.getOwnPropertySymbols &&
          ((n = Object.getOwnPropertySymbols(e)),
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
          a.push.apply(a, n)),
        a
      );
    }
    var v = function (e) {
      return 'div[data-cid="'.concat(e, '"]');
    };
    function h(e) {
      var t = e.atIdle,
        n = e.markers,
        a = e.Component,
        r = function () {
          var e = n[0].dataset.hid,
            t = document.querySelectorAll(v(e));
          n.forEach(function (e, n) {
            var r,
              i =
                ((r = e.text),
                JSON.parse(r.replace(/<\\\/script/gim, "</script")));
            p.a.hydrate(f.a.createElement(a, i), t[n]);
          });
        };
      if (t) return Object(b.a)(r);
      r();
    }
    var y = f.a.createContext();
    var E = { defer: !0, atIdle: !1 };
    function _(e) {
      var t = 0;
      return function (n, a) {
        return (function (e, t, n, a) {
          var r = t.defer,
            o = t.atIdle,
            l = "".concat(n, "-").concat(a);
          return Object(i.a)() && !Object(c.a)()
            ? (function (e, t) {
                var n = e.defer,
                  a = u()(e, ["defer"]),
                  r = document.querySelectorAll(
                    'script[data-hid="'.concat(t, '"]')
                  ),
                  i = (function (e) {
                    var t, n;
                    for (t = 1; t < arguments.length; t++)
                      (n = null != arguments[t] ? arguments[t] : {}),
                        t % 2
                          ? g(Object(n), !0).forEach(function (t) {
                              s()(e, t, n[t]);
                            })
                          : Object.getOwnPropertyDescriptors
                          ? Object.defineProperties(
                              e,
                              Object.getOwnPropertyDescriptors(n)
                            )
                          : g(Object(n)).forEach(function (t) {
                              Object.defineProperty(
                                e,
                                t,
                                Object.getOwnPropertyDescriptor(n, t)
                              );
                            });
                    return e;
                  })({ markers: r }, a);
                if (r.length) {
                  if (n && Object(b.c)()) {
                    var c = document.querySelector(v(t));
                    return Object(b.b)(c, function () {
                      return h(i);
                    });
                  }
                  return h(i);
                }
              })({ Component: e, defer: r, atIdle: o }, l)
            : (function (e, t) {
                return function (n) {
                  var a,
                    r = Object(d.useContext)(y);
                  return (
                    r &&
                      r(
                        t,
                        ((a = n),
                        JSON.stringify(a).replace(/<\/script/gim, "<\\/script"))
                      ),
                    f.a.createElement(
                      "div",
                      { "data-cid": t },
                      f.a.createElement(e, n)
                    )
                  );
                };
              })(e, l);
        })(n, (a = Object.assign({}, E, a)), e, t++);
      };
    }
    var O = function (e, t) {
      var n =
          arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        a = _(e);
      return r()(t, function (e, t) {
        return a(e, Object.assign(e.hydrationOptions || {}, n[t]));
      });
    };
  },
  9: function (e, t, n) {
    "use strict";
    n.d(t, "f", function () {
      return f;
    }),
      n.d(t, "c", function () {
        return m;
      }),
      n.d(t, "d", function () {
        return p;
      }),
      n.d(t, "g", function () {
        return b;
      }),
      n.d(t, "h", function () {
        return g;
      }),
      n.d(t, "i", function () {
        return v;
      }),
      n.d(t, "e", function () {
        return h;
      }),
      n.d(t, "k", function () {
        return E;
      }),
      n.d(t, "a", function () {
        return _;
      }),
      n.d(t, "j", function () {
        return O;
      }),
      n.d(t, "b", function () {
        return j;
      }),
      n(19),
      n(17),
      n(14),
      n(25),
      n(26),
      n(20),
      n(72),
      n(15);
    var a = n(4),
      r = n.n(a),
      i = n(3),
      c = n.n(i),
      o = n(12),
      s = n(13),
      l = n(32);
    function u(e, t) {
      var n,
        a = Object.keys(e);
      return (
        Object.getOwnPropertySymbols &&
          ((n = Object.getOwnPropertySymbols(e)),
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
          a.push.apply(a, n)),
        a
      );
    }
    function d(e) {
      var t, n;
      for (t = 1; t < arguments.length; t++)
        (n = null != arguments[t] ? arguments[t] : {}),
          t % 2
            ? u(Object(n), !0).forEach(function (t) {
                r()(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : u(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
      return e;
    }
    var f = { href: c.a.string.isRequired, label: c.a.string.isRequired },
      m = { gaCategory: c.a.string, gaEvent: c.a.string, gaLabel: c.a.string },
      p = c.a.shape(m),
      b =
        (c.a.shape(Object(l.c)(c.a.string, c.a.string, c.a.string)),
        c.a.shape(f)),
      g = d(d({}, f), m),
      v = c.a.shape(g),
      h = c.a.arrayOf(b),
      y = c.a.arrayOf(v),
      E = c.a.oneOf(o.e),
      _ =
        (c.a.shape({
          title: c.a.string.isRequired,
          name: E.isRequired,
          publicUrl: c.a.string.isRequired,
        }),
        function (e, t) {
          var n = c.a.arrayOf,
            a = c.a.shape,
            r = c.a.exact;
          return n(t ? r(e) : a(e));
        }),
      O = function (e, t) {
        var n = c.a.oneOf(Object.values(e));
        return t ? c.a.oneOfType([n, c.a.arrayOf(n)]) : n;
      },
      j = _({ name: c.a.string.isRequired, variant: c.a.string.isRequired });
    c.a.string.isRequired, c.a.string, y.isRequired, O(s.a);
  },
  90: function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
      return s;
    }),
      n.d(t, "c", function () {
        return l;
      }),
      n(44);
    var a,
      r = n(4),
      i = n.n(r),
      c = n(41),
      o = n(46),
      s = {
        Sessions: "cms/sessions",
        GeoTarget: "geo_target",
        BlogSubscription: "blog/subscription",
        Info: "_info",
        CoreTeamJobApplication: "careers/front-end-developer",
        GiorgioLeads: "giorgio/leads",
        InterviewQuestion: "interview-question",
        TalentPrioritizer: "talent-prioritizer",
        Search: "search/full",
        SearchAutocomplete: "search/autocomplete",
        SidebarSkills: "sidebar/skills",
      },
      l =
        ((a = {}),
        i()(a, s.Sessions, "logged-out"),
        i()(a, s.BlogSubscription, "success"),
        i()(a, s.CoreTeamJobApplication, "success"),
        i()(a, s.GiorgioLeads, "success"),
        i()(a, s.InterviewQuestion, "success"),
        i()(a, s.TalentPrioritizer, "high"),
        i()(a, s.Search, function (e) {
          var t = e.query.type;
          return ["service_centric", "skill"].includes(t) ? t : "success";
        }),
        i()(a, s.SearchAutocomplete, "success"),
        i()(a, s.SidebarSkills, "success"),
        function (e, t) {
          if (!c.b && t) return t;
          var n = "/api/".concat(e);
          return Object(o.a)() ? n : "http://localhost:3333".concat(n);
        });
    t.b = l;
  },
  91: function (e, t, n) {
    "use strict";
    var a = n(152),
      r = n.n(a);
    n.d(t, "b", function () {
      return r.a;
    });
    var i = n(153),
      c = n.n(i);
    n.d(t, "d", function () {
      return c.a;
    });
    var o = n(154),
      s = n.n(o);
    n.d(t, "c", function () {
      return s.a;
    });
    var l = n(155),
      u = n.n(l);
    n.d(t, "a", function () {
      return u.a;
    });
  },
  93: function (e, t, n) {
    "use strict";
    var a = n(165),
      r = n.n(a);
    n.d(t, "f", function () {
      return r.a;
    });
    var i = n(166),
      c = n.n(i);
    n.d(t, "d", function () {
      return c.a;
    });
    var o = n(167),
      s = n.n(o);
    n.d(t, "g", function () {
      return s.a;
    });
    var l = n(168),
      u = n.n(l);
    n.d(t, "e", function () {
      return u.a;
    });
    var d = n(169),
      f = n.n(d);
    n.d(t, "b", function () {
      return f.a;
    }),
      n(170);
    var m = n(171),
      p = n.n(m);
    n.d(t, "a", function () {
      return p.a;
    }),
      n(123);
    var b = n(172),
      g = n.n(b);
    n.d(t, "c", function () {
      return g.a;
    });
  },
  96: function (e, t, n) {
    "use strict";
    t.a = "data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";
  },
  97: function (e, t, n) {
    "use strict";
    n(27), n(33);
    var a = {};
    t.a = function (e) {
      return (
        a[e]
          ? console.warn("Script is already in loading queue: " + e)
          : (a[e] = new Promise(function (t, n) {
              var a = document.createElement("script");
              (a.type = "text/javascript"),
                (a.src = e),
                (a.async = !0),
                (a.onload = function () {
                  t();
                }),
                (a.onerror = function (e) {
                  n(e);
                }),
                document.body.appendChild(a);
            })),
        a[e]
      );
    };
  },
});
