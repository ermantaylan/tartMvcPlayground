(function(){function g(a) {
  throw a;
}
var i = void 0, j = true, k = null, n = false, o, r = this;
function s(a) {
  var b = typeof a;
  if(b == "object") {
    if(a) {
      if(a instanceof Array) {
        return"array"
      }else {
        if(a instanceof Object) {
          return b
        }
      }
      var c = Object.prototype.toString.call(a);
      if(c == "[object Window]") {
        return"object"
      }
      if(c == "[object Array]" || typeof a.length == "number" && typeof a.splice != "undefined" && typeof a.propertyIsEnumerable != "undefined" && !a.propertyIsEnumerable("splice")) {
        return"array"
      }
      if(c == "[object Function]" || typeof a.call != "undefined" && typeof a.propertyIsEnumerable != "undefined" && !a.propertyIsEnumerable("call")) {
        return"function"
      }
    }else {
      return"null"
    }
  }else {
    if(b == "function" && typeof a.call == "undefined") {
      return"object"
    }
  }
  return b
}
function t(a) {
  return s(a) == "array"
}
function u(a) {
  var b = s(a);
  return b == "array" || b == "object" && typeof a.length == "number"
}
function v(a) {
  return typeof a == "string"
}
function w(a) {
  return a[aa] || (a[aa] = ++ba)
}
var aa = "closure_uid_" + Math.floor(Math.random() * 2147483648).toString(36), ba = 0;
function ca(a, b, c) {
  return a.call.apply(a.bind, arguments)
}
function da(a, b, c) {
  a || g(Error());
  if(arguments.length > 2) {
    var d = Array.prototype.slice.call(arguments, 2);
    return function() {
      var c = Array.prototype.slice.call(arguments);
      Array.prototype.unshift.apply(c, d);
      return a.apply(b, c)
    }
  }else {
    return function() {
      return a.apply(b, arguments)
    }
  }
}
function ea(a, b, c) {
  ea = Function.prototype.bind && Function.prototype.bind.toString().indexOf("native code") != -1 ? ca : da;
  return ea.apply(k, arguments)
}
var x = Date.now || function() {
  return+new Date
};
function y(a, b) {
  function c() {
  }
  c.prototype = b.prototype;
  a.J = b.prototype;
  a.prototype = new c
}
;function fa() {
  return this.id
}
;var ga;
function ha() {
}
;function ia() {
  return"list"
}
;function ja() {
  return"indexa"
}
;function z() {
}
y(z, ha);
function ka() {
  this.da = ja
}
function la() {
  this.da = ia
}
function ma() {
  this.view.id = 3;
  this.da = fa
}
;function na(a, b, c) {
  this.Q = a;
  this.view = c;
  this.ib = b
}
na.prototype.o = k;
function oa() {
}
oa.prototype.o = k;
function pa(a) {
  this.view = a
}
o = pa.prototype;
o.ra = function(a) {
  if(this.sa == j) {
    $(a).html(this.Ja), this.sa = n, s(this.pa) == "function" && this.pa()
  }else {
    a = $(a);
    if(!this.T && (this.T = a.find("#content"), this.T.length == 0)) {
      this.T = a
    }
    this.T.html(this.ga)
  }
};
o.sa = n;
o.Ja = "";
o.ga = "";
o.o = k;
function qa(a, b) {
  var c = a.length - b.length;
  return c >= 0 && a.indexOf(b, c) == c
}
function ra(a, b) {
  for(var c = 1;c < arguments.length;c++) {
    var d = String(arguments[c]).replace(/\$/g, "$$$$"), a = a.replace(/\%s/, d)
  }
  return a
}
var sa = /^[a-zA-Z0-9\-_.!~*'()]*$/;
function ta(a) {
  a = String(a);
  return!sa.test(a) ? encodeURIComponent(a) : a
}
function ua(a) {
  return decodeURIComponent(a.replace(/\+/g, " "))
}
function va(a) {
  if(!wa.test(a)) {
    return a
  }
  a.indexOf("&") != -1 && (a = a.replace(xa, "&amp;"));
  a.indexOf("<") != -1 && (a = a.replace(ya, "&lt;"));
  a.indexOf(">") != -1 && (a = a.replace(Aa, "&gt;"));
  a.indexOf('"') != -1 && (a = a.replace(Ba, "&quot;"));
  return a
}
var xa = /&/g, ya = /</g, Aa = />/g, Ba = /\"/g, wa = /[&<>\"]/;
function Ca(a, b) {
  if(a < b) {
    return-1
  }else {
    if(a > b) {
      return 1
    }
  }
  return 0
}
;var A, Da, Ea, Fa;
function Ga() {
  return r.navigator ? r.navigator.userAgent : k
}
Fa = Ea = Da = A = n;
var Ha;
if(Ha = Ga()) {
  var Ia = r.navigator;
  A = Ha.indexOf("Opera") == 0;
  Da = !A && Ha.indexOf("MSIE") != -1;
  Ea = !A && Ha.indexOf("WebKit") != -1;
  Fa = !A && !Ea && Ia.product == "Gecko"
}
var Ja = A, C = Da, E = Fa, Ka = Ea, La = r.navigator, Ma = (La && La.platform || "").indexOf("Mac") != -1, Na;
a: {
  var Oa = "", F;
  if(Ja && r.opera) {
    var Pa = r.opera.version, Oa = typeof Pa == "function" ? Pa() : Pa
  }else {
    if(E ? F = /rv\:([^\);]+)(\)|;)/ : C ? F = /MSIE\s+([^\);]+)(\)|;)/ : Ka && (F = /WebKit\/(\S+)/), F) {
      var Qa = F.exec(Ga()), Oa = Qa ? Qa[1] : ""
    }
  }
  if(C) {
    var Ra, Sa = r.document;
    Ra = Sa ? Sa.documentMode : i;
    if(Ra > parseFloat(Oa)) {
      Na = String(Ra);
      break a
    }
  }
  Na = Oa
}
var Ta = {};
function G(a) {
  var b;
  if(!(b = Ta[a])) {
    b = 0;
    for(var c = String(Na).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), d = String(a).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), e = Math.max(c.length, d.length), f = 0;b == 0 && f < e;f++) {
      var h = c[f] || "", l = d[f] || "", m = RegExp("(\\d*)(\\D*)", "g"), p = RegExp("(\\d*)(\\D*)", "g");
      do {
        var D = m.exec(h) || ["", "", ""], q = p.exec(l) || ["", "", ""];
        if(D[0].length == 0 && q[0].length == 0) {
          break
        }
        b = Ca(D[1].length == 0 ? 0 : parseInt(D[1], 10), q[1].length == 0 ? 0 : parseInt(q[1], 10)) || Ca(D[2].length == 0, q[2].length == 0) || Ca(D[2], q[2])
      }while(b == 0)
    }
    b = Ta[a] = b >= 0
  }
  return b
}
var Ua = {};
function Va() {
  return Ua[9] || (Ua[9] = C && document.documentMode && document.documentMode >= 9)
}
;function Wa(a) {
  var b = H, c;
  for(c in b) {
    a.call(i, b[c], c, b)
  }
}
function Xa(a) {
  var b = 0, c;
  for(c in a) {
    b++
  }
  return b
}
function Ya(a) {
  var b = [], c = 0, d;
  for(d in a) {
    b[c++] = a[d]
  }
  return b
}
function Za(a) {
  var b = [], c = 0, d;
  for(d in a) {
    b[c++] = d
  }
  return b
}
var $a = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",");
function ab(a, b) {
  for(var c, d, e = 1;e < arguments.length;e++) {
    d = arguments[e];
    for(c in d) {
      a[c] = d[c]
    }
    for(var f = 0;f < $a.length;f++) {
      c = $a[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
    }
  }
}
function bb(a) {
  var b = arguments.length;
  if(b == 1 && t(arguments[0])) {
    return bb.apply(k, arguments[0])
  }
  b % 2 && g(Error("Uneven number of arguments"));
  for(var c = {}, d = 0;d < b;d += 2) {
    c[arguments[d]] = arguments[d + 1]
  }
  return c
}
;var I = Array.prototype, cb = I.indexOf ? function(a, b, c) {
  return I.indexOf.call(a, b, c)
} : function(a, b, c) {
  c = c == k ? 0 : c < 0 ? Math.max(0, a.length + c) : c;
  if(v(a)) {
    return!v(b) || b.length != 1 ? -1 : a.indexOf(b, c)
  }
  for(;c < a.length;c++) {
    if(c in a && a[c] === b) {
      return c
    }
  }
  return-1
}, db = I.forEach ? function(a, b, c) {
  I.forEach.call(a, b, c)
} : function(a, b, c) {
  for(var d = a.length, e = v(a) ? a.split("") : a, f = 0;f < d;f++) {
    f in e && b.call(c, e[f], f, a)
  }
}, eb = I.filter ? function(a, b, c) {
  return I.filter.call(a, b, c)
} : function(a, b, c) {
  for(var d = a.length, e = [], f = 0, h = v(a) ? a.split("") : a, l = 0;l < d;l++) {
    if(l in h) {
      var m = h[l];
      b.call(c, m, l, a) && (e[f++] = m)
    }
  }
  return e
}, fb = I.every ? function(a, b, c) {
  return I.every.call(a, b, c)
} : function(a, b, c) {
  for(var d = a.length, e = v(a) ? a.split("") : a, f = 0;f < d;f++) {
    if(f in e && !b.call(c, e[f], f, a)) {
      return n
    }
  }
  return j
};
function gb(a, b) {
  var c;
  a: {
    c = a.length;
    for(var d = v(a) ? a.split("") : a, e = 0;e < c;e++) {
      if(e in d && b.call(i, d[e], e, a)) {
        c = e;
        break a
      }
    }
    c = -1
  }
  return c < 0 ? k : v(a) ? a.charAt(c) : a[c]
}
function hb(a, b) {
  for(var c = 1;c < arguments.length;c++) {
    var d = arguments[c], e;
    if(t(d) || (e = u(d)) && d.hasOwnProperty("callee")) {
      a.push.apply(a, d)
    }else {
      if(e) {
        for(var f = a.length, h = d.length, l = 0;l < h;l++) {
          a[f + l] = d[l]
        }
      }else {
        a.push(d)
      }
    }
  }
}
;function ib(a) {
  if(typeof a.w == "function") {
    return a.w()
  }
  if(v(a)) {
    return a.split("")
  }
  if(u(a)) {
    for(var b = [], c = a.length, d = 0;d < c;d++) {
      b.push(a[d])
    }
    return b
  }
  return Ya(a)
}
function jb(a, b, c) {
  if(typeof a.forEach == "function") {
    a.forEach(b, c)
  }else {
    if(u(a) || v(a)) {
      db(a, b, c)
    }else {
      var d;
      if(typeof a.q == "function") {
        d = a.q()
      }else {
        if(typeof a.w != "function") {
          if(u(a) || v(a)) {
            d = [];
            for(var e = a.length, f = 0;f < e;f++) {
              d.push(f)
            }
          }else {
            d = Za(a)
          }
        }else {
          d = i
        }
      }
      for(var e = ib(a), f = e.length, h = 0;h < f;h++) {
        b.call(c, e[h], d && d[h], a)
      }
    }
  }
}
;var kb = "StopIteration" in r ? r.StopIteration : Error("StopIteration");
function lb() {
}
lb.prototype.next = function() {
  g(kb)
};
lb.prototype.ea = function() {
  return this
};
function mb(a) {
  if(a instanceof lb) {
    return a
  }
  if(typeof a.ea == "function") {
    return a.ea(n)
  }
  if(u(a)) {
    var b = 0, c = new lb;
    c.next = function() {
      for(;;) {
        if(b >= a.length && g(kb), b in a) {
          return a[b++]
        }else {
          b++
        }
      }
    };
    return c
  }
  g(Error("Not implemented"))
}
function nb(a, b) {
  if(u(a)) {
    try {
      db(a, b, i)
    }catch(c) {
      c !== kb && g(c)
    }
  }else {
    a = mb(a);
    try {
      for(;;) {
        b.call(i, a.next(), i, a)
      }
    }catch(d) {
      d !== kb && g(d)
    }
  }
}
;function J(a, b) {
  this.i = {};
  this.oa = {};
  var c = arguments.length;
  if(c > 1) {
    c % 2 && g(Error("Uneven number of arguments"));
    for(var d = 0;d < c;d += 2) {
      this.set(arguments[d], arguments[d + 1])
    }
  }else {
    if(a) {
      a instanceof J ? (c = a.q(), d = a.w()) : (c = Za(a), d = Ya(a));
      for(var e = 0;e < c.length;e++) {
        this.set(c[e], d[e])
      }
    }
  }
}
o = J.prototype;
o.a = 0;
o.version_ = 0;
o.Fa = function() {
  return this.a
};
o.w = function() {
  var a = [], b;
  for(b in this.i) {
    b.charAt(0) == ":" && a.push(this.i[b])
  }
  return a
};
o.q = function() {
  var a = [], b;
  for(b in this.i) {
    if(b.charAt(0) == ":") {
      var c = b.substring(1);
      a.push(this.oa[b] ? Number(c) : c)
    }
  }
  return a
};
o.s = function(a) {
  return":" + a in this.i
};
o.remove = function(a) {
  var a = ":" + a, b = this.i, c;
  (c = a in b) && delete b[a];
  return c ? (delete this.oa[a], this.a--, this.version_++, j) : n
};
o.get = function(a, b) {
  var c = ":" + a;
  return c in this.i ? this.i[c] : b
};
o.set = function(a, b) {
  var c = ":" + a;
  c in this.i || (this.version_++, this.a++, typeof a == "number" && (this.oa[c] = j));
  this.i[c] = b
};
o.clone = function() {
  return new J(this)
};
o.ea = function(a) {
  var b = 0, c = this.q(), d = this.i, e = this.version_, f = this, h = new lb;
  h.next = function() {
    for(;;) {
      e != f.version_ && g(Error("The map has changed since the iterator was created"));
      b >= c.length && g(kb);
      var h = c[b++];
      return a ? h : d[":" + h]
    }
  };
  return h
};
function K() {
}
K.prototype.Ba = n;
K.prototype.t = function() {
  if(!this.Ba) {
    this.Ba = j, this.d()
  }
};
K.prototype.d = function() {
  this.bb && ob.apply(k, this.bb)
};
function ob(a) {
  for(var b = 0, c = arguments.length;b < c;++b) {
    var d = arguments[b];
    u(d) ? ob.apply(k, d) : d && typeof d.t == "function" && d.t()
  }
}
;function L(a, b) {
  this.jb = b;
  this.la = [];
  a > this.jb && g(Error("[goog.structs.SimplePool] Initial cannot be greater than max"));
  for(var c = 0;c < a;c++) {
    this.la.push(this.U())
  }
}
y(L, K);
o = L.prototype;
o.wa = k;
o.Aa = k;
o.U = function() {
  return this.wa ? this.wa() : {}
};
o.za = function(a) {
  if(this.Aa) {
    this.Aa(a)
  }else {
    var b = s(a);
    if(b == "object" || b == "array" || b == "function") {
      if(s(a.t) == "function") {
        a.t()
      }else {
        for(var c in a) {
          delete a[c]
        }
      }
    }
  }
};
o.d = function() {
  L.J.d.call(this);
  for(var a = this.la;a.length;) {
    this.za(a.pop())
  }
  delete this.la
};
function pb() {
  this.Da = [];
  this.Ma = new J;
  this.xb = this.yb = this.zb = this.rb = 0;
  this.Ra = new J;
  this.Ya = this.wb = 0;
  this.kb = 1;
  this.fb = new L(0, 4E3);
  this.fb.U = function() {
    return new qb
  };
  this.sb = new L(0, 50);
  this.sb.U = function() {
    return new rb
  };
  var a = this;
  this.Ha = new L(0, 2E3);
  this.Ha.U = function() {
    return String(a.kb++)
  };
  this.Ha.za = function() {
  };
  this.Bb = 3
}
function rb() {
  this.Ta = this.time = this.va = 0
}
rb.prototype.toString = function() {
  var a = [];
  a.push(this.type, " ", this.va, " (", Math.round(this.time * 10) / 10, " ms)");
  this.Ta && a.push(" [VarAlloc = ", this.Ta, "]");
  return a.join("")
};
function qb() {
}
function sb(a, b, c, d) {
  var e = [];
  c == -1 ? e.push("    ") : e.push(tb(a.Ca - c));
  e.push(" ", ub(a.Ca - b));
  a.ja == 0 ? e.push(" Start        ") : a.ja == 1 ? (e.push(" Done "), e.push(tb(a.Db - a.startTime), " ms ")) : e.push(" Comment      ");
  e.push(d, a);
  a.vb > 0 && e.push("[VarAlloc ", a.vb, "] ");
  return e.join("")
}
qb.prototype.toString = function() {
  return this.type == k ? this.Xa : "[" + this.type + "] " + this.Xa
};
pb.prototype.toString = function() {
  for(var a = [], b = -1, c = [], d = 0;d < this.Da.length;d++) {
    var e = this.Da[d];
    e.ja == 1 && c.pop();
    a.push(" ", sb(e, this.rb, b, c.join("")));
    b = e.Ca;
    a.push("\n");
    e.ja == 0 && c.push("|  ")
  }
  if(this.Ma.Fa() != 0) {
    var f = x();
    a.push(" Unstopped timers:\n");
    nb(this.Ma, function(b) {
      a.push("  ", b, " (", f - b.startTime, " ms, started at ", ub(b.startTime), ")\n")
    })
  }
  b = this.Ra.q();
  for(d = 0;d < b.length;d++) {
    c = this.Ra.get(b[d]), c.va > 1 && a.push(" TOTAL ", c, "\n")
  }
  a.push("Total tracers created ", this.wb, "\n", "Total comments created ", this.Ya, "\n", "Overhead start: ", this.zb, " ms\n", "Overhead end: ", this.yb, " ms\n", "Overhead comment: ", this.xb, " ms\n");
  return a.join("")
};
function tb(a) {
  var a = Math.round(a), b = "";
  a < 1E3 && (b = " ");
  a < 100 && (b = "  ");
  a < 10 && (b = "   ");
  return b + a
}
function ub(a) {
  a = Math.round(a);
  return String(100 + a / 1E3 % 60).substring(1, 3) + "." + String(1E3 + a % 1E3).substring(1, 4)
}
new pb;
function vb() {
}
var wb = 0;
o = vb.prototype;
o.key = 0;
o.G = n;
o.ua = n;
o.Z = function(a, b, c, d, e, f) {
  s(a) == "function" ? this.Ia = j : a && a.handleEvent && s(a.handleEvent) == "function" ? this.Ia = n : g(Error("Invalid listener argument"));
  this.O = a;
  this.proxy = b;
  this.src = c;
  this.type = d;
  this.capture = !!e;
  this.ma = f;
  this.ua = n;
  this.key = ++wb;
  this.G = n
};
o.handleEvent = function(a) {
  return this.Ia ? this.O.call(this.ma || this.src, a) : this.O.handleEvent.call(this.O, a)
};
!C || Va();
var xb = !C || Va();
C && G("8");
function M(a, b) {
  this.type = a;
  this.currentTarget = this.target = b
}
y(M, K);
M.prototype.d = function() {
  delete this.type;
  delete this.target;
  delete this.currentTarget
};
M.prototype.F = n;
M.prototype.ca = j;
function yb(a) {
  yb[" "](a);
  return a
}
yb[" "] = function() {
};
function zb(a, b) {
  a && this.Z(a, b)
}
y(zb, M);
o = zb.prototype;
o.target = k;
o.relatedTarget = k;
o.offsetX = 0;
o.offsetY = 0;
o.clientX = 0;
o.clientY = 0;
o.screenX = 0;
o.screenY = 0;
o.button = 0;
o.keyCode = 0;
o.charCode = 0;
o.ctrlKey = n;
o.altKey = n;
o.shiftKey = n;
o.metaKey = n;
o.pb = n;
o.ka = k;
o.Z = function(a, b) {
  var c = this.type = a.type;
  M.call(this, c);
  this.target = a.target || a.srcElement;
  this.currentTarget = b;
  var d = a.relatedTarget;
  if(d) {
    if(E) {
      var e;
      a: {
        try {
          yb(d.nodeName);
          e = j;
          break a
        }catch(f) {
        }
        e = n
      }
      e || (d = k)
    }
  }else {
    if(c == "mouseover") {
      d = a.fromElement
    }else {
      if(c == "mouseout") {
        d = a.toElement
      }
    }
  }
  this.relatedTarget = d;
  this.offsetX = a.offsetX !== i ? a.offsetX : a.layerX;
  this.offsetY = a.offsetY !== i ? a.offsetY : a.layerY;
  this.clientX = a.clientX !== i ? a.clientX : a.pageX;
  this.clientY = a.clientY !== i ? a.clientY : a.pageY;
  this.screenX = a.screenX || 0;
  this.screenY = a.screenY || 0;
  this.button = a.button;
  this.keyCode = a.keyCode || 0;
  this.charCode = a.charCode || (c == "keypress" ? a.keyCode : 0);
  this.ctrlKey = a.ctrlKey;
  this.altKey = a.altKey;
  this.shiftKey = a.shiftKey;
  this.metaKey = a.metaKey;
  this.pb = Ma ? a.metaKey : a.ctrlKey;
  this.state = a.state;
  this.ka = a;
  delete this.ca;
  delete this.F
};
o.d = function() {
  zb.J.d.call(this);
  this.relatedTarget = this.currentTarget = this.target = this.ka = k
};
var N = {}, O = {}, H = {}, P = {};
function Ab(a, b, c, d, e) {
  if(b) {
    if(t(b)) {
      for(var f = 0;f < b.length;f++) {
        Ab(a, b[f], c, d, e)
      }
      return k
    }else {
      var d = !!d, h = O;
      b in h || (h[b] = {a:0, e:0});
      h = h[b];
      d in h || (h[d] = {a:0, e:0}, h.a++);
      var h = h[d], l = w(a), m;
      h.e++;
      if(h[l]) {
        m = h[l];
        for(f = 0;f < m.length;f++) {
          if(h = m[f], h.O == c && h.ma == e) {
            if(h.G) {
              break
            }
            return m[f].key
          }
        }
      }else {
        m = h[l] = [], h.a++
      }
      f = Bb();
      f.src = a;
      h = new vb;
      h.Z(c, f, a, b, d, e);
      c = h.key;
      f.key = c;
      m.push(h);
      N[c] = h;
      H[l] || (H[l] = []);
      H[l].push(h);
      a.addEventListener ? (a == r || !a.ya) && a.addEventListener(b, f, d) : a.attachEvent(b in P ? P[b] : P[b] = "on" + b, f);
      return c
    }
  }else {
    g(Error("Invalid event type"))
  }
}
function Bb() {
  var a = Cb, b = xb ? function(c) {
    return a.call(b.src, b.key, c)
  } : function(c) {
    c = a.call(b.src, b.key, c);
    if(!c) {
      return c
    }
  };
  return b
}
function Db(a, b, c, d, e) {
  if(t(b)) {
    for(var f = 0;f < b.length;f++) {
      Db(a, b[f], c, d, e)
    }
  }else {
    d = !!d;
    a: {
      f = O;
      if(b in f && (f = f[b], d in f && (f = f[d], a = w(a), f[a]))) {
        a = f[a];
        break a
      }
      a = k
    }
    if(a) {
      for(f = 0;f < a.length;f++) {
        if(a[f].O == c && a[f].capture == d && a[f].ma == e) {
          Q(a[f].key);
          break
        }
      }
    }
  }
}
function Q(a) {
  if(!N[a]) {
    return n
  }
  var b = N[a];
  if(b.G) {
    return n
  }
  var c = b.src, d = b.type, e = b.proxy, f = b.capture;
  c.removeEventListener ? (c == r || !c.ya) && c.removeEventListener(d, e, f) : c.detachEvent && c.detachEvent(d in P ? P[d] : P[d] = "on" + d, e);
  c = w(c);
  e = O[d][f][c];
  if(H[c]) {
    var h = H[c], l = cb(h, b);
    l >= 0 && I.splice.call(h, l, 1);
    h.length == 0 && delete H[c]
  }
  b.G = j;
  e.Ka = j;
  Eb(d, f, c, e);
  delete N[a];
  return j
}
function Eb(a, b, c, d) {
  if(!d.$ && d.Ka) {
    for(var e = 0, f = 0;e < d.length;e++) {
      d[e].G ? d[e].proxy.src = k : (e != f && (d[f] = d[e]), f++)
    }
    d.length = f;
    d.Ka = n;
    f == 0 && (delete O[a][b][c], O[a][b].a--, O[a][b].a == 0 && (delete O[a][b], O[a].a--), O[a].a == 0 && delete O[a])
  }
}
function Fb(a) {
  var b, c = 0, d = b == k;
  b = !!b;
  if(a == k) {
    Wa(function(a) {
      for(var e = a.length - 1;e >= 0;e--) {
        var f = a[e];
        if(d || b == f.capture) {
          Q(f.key), c++
        }
      }
    })
  }else {
    if(a = w(a), H[a]) {
      for(var a = H[a], e = a.length - 1;e >= 0;e--) {
        var f = a[e];
        if(d || b == f.capture) {
          Q(f.key), c++
        }
      }
    }
  }
}
function Gb(a, b, c, d, e) {
  var f = 1, b = w(b);
  if(a[b]) {
    a.e--;
    a = a[b];
    a.$ ? a.$++ : a.$ = 1;
    try {
      for(var h = a.length, l = 0;l < h;l++) {
        var m = a[l];
        m && !m.G && (f &= Hb(m, e) !== n)
      }
    }finally {
      a.$--, Eb(c, d, b, a)
    }
  }
  return Boolean(f)
}
function Hb(a, b) {
  var c = a.handleEvent(b);
  a.ua && Q(a.key);
  return c
}
function Cb(a, b) {
  if(!N[a]) {
    return j
  }
  var c = N[a], d = c.type, e = O;
  if(!(d in e)) {
    return j
  }
  var e = e[d], f, h;
  if(!xb) {
    var l;
    if(!(l = b)) {
      a: {
        l = "window.event".split(".");
        for(var m = r;f = l.shift();) {
          if(m[f] != k) {
            m = m[f]
          }else {
            l = k;
            break a
          }
        }
        l = m
      }
    }
    f = l;
    l = j in e;
    m = n in e;
    if(l) {
      if(f.keyCode < 0 || f.returnValue != i) {
        return j
      }
      a: {
        var p = n;
        if(f.keyCode == 0) {
          try {
            f.keyCode = -1;
            break a
          }catch(D) {
            p = j
          }
        }
        if(p || f.returnValue == i) {
          f.returnValue = j
        }
      }
    }
    p = new zb;
    p.Z(f, this);
    f = j;
    try {
      if(l) {
        for(var q = [], za = p.currentTarget;za;za = za.parentNode) {
          q.push(za)
        }
        h = e[j];
        h.e = h.a;
        for(var B = q.length - 1;!p.F && B >= 0 && h.e;B--) {
          p.currentTarget = q[B], f &= Gb(h, q[B], d, j, p)
        }
        if(m) {
          h = e[n];
          h.e = h.a;
          for(B = 0;!p.F && B < q.length && h.e;B++) {
            p.currentTarget = q[B], f &= Gb(h, q[B], d, n, p)
          }
        }
      }else {
        f = Hb(c, p)
      }
    }finally {
      if(q) {
        q.length = 0
      }
      p.t()
    }
    return f
  }
  d = new zb(b, this);
  try {
    f = Hb(c, d)
  }finally {
    d.t()
  }
  return f
}
;function Ib() {
}
y(Ib, K);
o = Ib.prototype;
o.ya = j;
o.qa = k;
o.addEventListener = function(a, b, c, d) {
  Ab(this, a, b, c, d)
};
o.removeEventListener = function(a, b, c, d) {
  Db(this, a, b, c, d)
};
o.dispatchEvent = function(a) {
  var b = a.type || a, c = O;
  if(b in c) {
    if(v(a)) {
      a = new M(a, this)
    }else {
      if(a instanceof M) {
        a.target = a.target || this
      }else {
        var d = a, a = new M(b, this);
        ab(a, d)
      }
    }
    var d = 1, e, c = c[b], b = j in c, f;
    if(b) {
      e = [];
      for(f = this;f;f = f.qa) {
        e.push(f)
      }
      f = c[j];
      f.e = f.a;
      for(var h = e.length - 1;!a.F && h >= 0 && f.e;h--) {
        a.currentTarget = e[h], d &= Gb(f, e[h], a.type, j, a) && a.ca != n
      }
    }
    if(n in c) {
      if(f = c[n], f.e = f.a, b) {
        for(h = 0;!a.F && h < e.length && f.e;h++) {
          a.currentTarget = e[h], d &= Gb(f, e[h], a.type, n, a) && a.ca != n
        }
      }else {
        for(e = this;!a.F && e && f.e;e = e.qa) {
          a.currentTarget = e, d &= Gb(f, e, a.type, n, a) && a.ca != n
        }
      }
    }
    a = Boolean(d)
  }else {
    a = j
  }
  return a
};
o.d = function() {
  Ib.J.d.call(this);
  Fb(this);
  this.qa = k
};
function Jb(a, b) {
  this.L = a || 1;
  this.R = b || Kb;
  this.fa = ea(this.ub, this);
  this.na = x()
}
y(Jb, Ib);
Jb.prototype.enabled = n;
var Kb = r.window;
o = Jb.prototype;
o.c = k;
o.setInterval = function(a) {
  this.L = a;
  this.c && this.enabled ? (this.stop(), this.start()) : this.c && this.stop()
};
o.ub = function() {
  if(this.enabled) {
    var a = x() - this.na;
    if(a > 0 && a < this.L * 0.8) {
      this.c = this.R.setTimeout(this.fa, this.L - a)
    }else {
      if(this.dispatchEvent(Lb), this.enabled) {
        this.c = this.R.setTimeout(this.fa, this.L), this.na = x()
      }
    }
  }
};
o.start = function() {
  this.enabled = j;
  if(!this.c) {
    this.c = this.R.setTimeout(this.fa, this.L), this.na = x()
  }
};
o.stop = function() {
  this.enabled = n;
  if(this.c) {
    this.R.clearTimeout(this.c), this.c = k
  }
};
o.d = function() {
  Jb.J.d.call(this);
  this.stop();
  delete this.R
};
var Lb = "tick";
function Mb(a) {
  this.gb = a;
  this.M = []
}
y(Mb, K);
var Nb = [];
function Ob(a, b, c, d) {
  t(c) || (Nb[0] = c, c = Nb);
  for(var e = 0;e < c.length;e++) {
    a.M.push(Ab(b, c[e], d || a, n, a.gb || a))
  }
}
Mb.prototype.d = function() {
  Mb.J.d.call(this);
  db(this.M, Q);
  this.M.length = 0
};
Mb.prototype.handleEvent = function() {
  g(Error("EventHandler.handleEvent not implemented"))
};
function Pb(a, b) {
  M.call(this, "navigate");
  this.Eb = a;
  this.Cb = b
}
y(Pb, M);
!C || Va();
!E && !C || C && Va() || E && G("1.9.1");
C && G("9");
function R(a, b, c, d) {
  a && !b && g(Error("Can't use invisible history without providing a blank page."));
  var e;
  c ? e = c : (e = "history_state" + Qb, document.write(ra(Rb, e, e)), e = v(e) ? document.getElementById(e) : e);
  this.X = e;
  this.j = c ? (c.nodeType == 9 ? c : c.ownerDocument || c.document) ? (c.nodeType == 9 ? c : c.ownerDocument || c.document).parentWindow || (c.nodeType == 9 ? c : c.ownerDocument || c.document).defaultView : window : window;
  this.Va = this.j.location.href.split("#")[0];
  this.Y = b;
  if(C && !b) {
    this.Y = window.location.protocol == "https" ? "https:///" : 'javascript:""'
  }
  this.c = new Jb(Sb);
  this.K = !a;
  this.v = new Mb(this);
  if(a || C && !S) {
    d ? a = d : (a = "history_iframe" + Qb, b = this.Y ? 'src="' + va(this.Y) + '"' : "", document.write(ra(Tb, a, b)), a = v(a) ? document.getElementById(a) : a), this.B = a, this.Sa = j
  }
  if(C && !S) {
    Ob(this.v, this.j, "load", this.lb), this.Qa = this.ia = n
  }
  this.K ? Ub(this, Vb(this), j) : Wb(this, this.X.value);
  Qb++
}
y(R, Ib);
R.prototype.W = n;
R.prototype.C = n;
R.prototype.N = k;
var S = C && document.documentMode >= 8 || E && G("1.9.2") || Ka && G("532.1");
o = R.prototype;
o.P = k;
o.d = function() {
  R.J.d.call(this);
  this.v.t();
  Xb(this, n)
};
function Xb(a, b) {
  if(b != a.W) {
    if(C && !S && !a.ia) {
      a.Qa = b
    }else {
      if(b) {
        if(Ja ? Ob(a.v, a.j.document, Yb, a.ob) : E && Ob(a.v, a.j, "pageshow", a.nb), S && a.K) {
          Ob(a.v, a.j, "hashchange", a.mb), a.W = j, a.dispatchEvent(new Pb(Vb(a), n))
        }else {
          if(!C || a.ia) {
            Ob(a.v, a.c, Lb, ea(a.Wa, a, j));
            a.W = j;
            if(!C) {
              a.N = Vb(a)
            }
            a.c.start();
            a.dispatchEvent(new Pb(Vb(a), n))
          }
        }
      }else {
        a.W = n;
        var c = a.v;
        db(c.M, Q);
        c.M.length = 0;
        a.c.stop()
      }
    }
  }
}
o.lb = function() {
  this.ia = j;
  this.X.value && Wb(this, this.X.value, j);
  Xb(this, this.Qa)
};
o.nb = function(a) {
  a.ka.persisted && (Xb(this, n), Xb(this, j))
};
o.mb = function() {
  var a = Zb(this.j);
  a != this.N && $b(this, a, j)
};
function Vb(a) {
  return a.P != k ? a.P : a.K ? Zb(a.j) : ac(a) || ""
}
function Zb(a) {
  var a = a.location.href, b = a.indexOf("#");
  return b < 0 ? "" : a.substring(b + 1)
}
function Ub(a, b, c) {
  var d = a.j.location, a = a.Va, e = d.href.indexOf("#") != -1;
  if(C || e || b) {
    a += "#" + b
  }
  if(a != d.href) {
    c ? d.replace(a) : d.href = a
  }
}
function Wb(a, b, c) {
  if(a.Sa || b != ac(a)) {
    if(a.Sa = n, b = ta(b), C) {
      var d = a.B.contentDocument || a.B.contentWindow.document;
      d.open("text/html", c ? "replace" : i);
      d.write(ra(bc, va(a.j.document.title), b));
      d.close()
    }else {
      if(b = a.Y + "#" + b, a = a.B.contentWindow) {
        c ? a.location.replace(b) : a.location.href = b
      }
    }
  }
}
function ac(a) {
  if(C) {
    return a = a.B.contentDocument || a.B.contentWindow.document, a.body ? ua(a.body.innerHTML) : k
  }else {
    var b = a.B.contentWindow;
    if(b) {
      var c;
      try {
        c = ua(Zb(b))
      }catch(d) {
        if(!a.C) {
          a.C != j && a.c.setInterval(cc), a.C = j
        }
        return k
      }
      if(a.C) {
        a.C != n && a.c.setInterval(Sb), a.C = n
      }
      return c || k
    }else {
      return k
    }
  }
}
o.Wa = function(a) {
  if(this.K) {
    var b = Zb(this.j);
    b != this.N && $b(this, b, a)
  }
  if(!this.K || C && !S) {
    if(b = ac(this) || "", this.P == k || b == this.P) {
      this.P = k, b != this.N && $b(this, b, a)
    }
  }
};
function $b(a, b, c) {
  a.N = a.X.value = b;
  a.K ? (C && !S && Wb(a, b), Ub(a, b)) : Wb(a, b);
  a.dispatchEvent(new Pb(Vb(a), c))
}
o.ob = function() {
  this.c.stop();
  this.c.start()
};
var Yb = ["mousedown", "keydown", "mousemove"], bc = "<title>%s</title><body>%s</body>", Tb = '<iframe id="%s" style="display:none" %s></iframe>', Rb = '<input type="text" name="%s" id="%s" style="display:none">', Qb = 0, Sb = 150, cc = 1E4;
function dc() {
}
;function ec(a, b) {
  this.V = a;
  this.eb = b
}
ec.prototype.ra = function(a) {
  var b = this.A, c = this.$a, d = this.ab, e = this.Za, f = this.Za = new na(a.Na, this.V, new oa);
  e && s(e.o) == "function" && e.o();
  if(!(a.Ua.call(f) instanceof dc) && (d && s(d.o) == "function" && d.o(), this.ab = f.view, f.da || g(new T("No view script set for the action", "tartMVC Action Exception")), a = f.da.call(f.view), !(a instanceof dc))) {
    d = new pa(f.view);
    d.ga = a;
    this.A = f.ib;
    if(this.A != b) {
      d.sa = j, c && s(b.o) == "function" && b.o.call(c), this.A.call(d)
    }
    d.ra(this.eb);
    s(f.view.pa) == "function" && f.view.pa();
    this.A.La && s(this.A.La) == "function" && this.A.La.call(d);
    this.$a = d
  }
};
var fc = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^/?#]*)@)?([\\w\\d\\-\\u0100-\\uffff.%]*)(?::([0-9]+))?)?([^?#]+)?(?:\\?([^#]*))?(?:#(.*))?$");
function gc(a, b) {
  var c;
  a instanceof gc ? (this.I(b == k ? a.h : b), hc(this, a.r), ic(this, a.S), jc(this, a.u), kc(this, a.D), lc(this, a.l), mc(this, a.m.clone()), nc(this, a.g)) : a && (c = String(a).match(fc)) ? (this.I(!!b), hc(this, c[1] || "", j), ic(this, c[2] || "", j), jc(this, c[3] || "", j), kc(this, c[4]), lc(this, c[5] || "", j), mc(this, c[6] || "", j), nc(this, c[7] || "", j)) : (this.I(!!b), this.m = new oc(k, this, this.h))
}
o = gc.prototype;
o.r = "";
o.S = "";
o.u = "";
o.D = k;
o.l = "";
o.g = "";
o.hb = n;
o.h = n;
o.toString = function() {
  if(this.f) {
    return this.f
  }
  var a = [];
  this.r && a.push(pc(this.r, qc), ":");
  this.u && (a.push("//"), this.S && a.push(pc(this.S, qc), "@"), a.push(v(this.u) ? encodeURIComponent(this.u) : k), this.D != k && a.push(":", String(this.D)));
  this.l && (this.u && this.l.charAt(0) != "/" && a.push("/"), a.push(pc(this.l, this.l.charAt(0) == "/" ? rc : sc)));
  var b = String(this.m);
  b && a.push("?", b);
  this.g && a.push("#", pc(this.g, tc));
  return this.f = a.join("")
};
o.clone = function() {
  var a = this.r, b = this.S, c = this.u, d = this.D, e = this.l, f = this.m.clone(), h = this.g, l = new gc(k, this.h);
  a && hc(l, a);
  b && ic(l, b);
  c && jc(l, c);
  d && kc(l, d);
  e && lc(l, e);
  f && mc(l, f);
  h && nc(l, h);
  return l
};
function hc(a, b, c) {
  U(a);
  delete a.f;
  a.r = c ? b ? decodeURIComponent(b) : "" : b;
  if(a.r) {
    a.r = a.r.replace(/:$/, "")
  }
}
function ic(a, b, c) {
  U(a);
  delete a.f;
  a.S = c ? b ? decodeURIComponent(b) : "" : b
}
function jc(a, b, c) {
  U(a);
  delete a.f;
  a.u = c ? b ? decodeURIComponent(b) : "" : b
}
function kc(a, b) {
  U(a);
  delete a.f;
  b ? (b = Number(b), (isNaN(b) || b < 0) && g(Error("Bad port number " + b)), a.D = b) : a.D = k
}
function lc(a, b, c) {
  U(a);
  delete a.f;
  a.l = c ? b ? decodeURIComponent(b) : "" : b
}
function mc(a, b, c) {
  U(a);
  delete a.f;
  b instanceof oc ? (a.m = b, a.m.ta = a, a.m.I(a.h)) : (c || (b = pc(b, uc)), a.m = new oc(b, a, a.h))
}
function nc(a, b, c) {
  U(a);
  delete a.f;
  a.g = c ? b ? decodeURIComponent(b) : "" : b
}
function U(a) {
  a.hb && g(Error("Tried to modify a read-only Uri"))
}
o.I = function(a) {
  this.h = a;
  this.m && this.m.I(a);
  return this
};
var vc = /^[a-zA-Z0-9\-_.!~*'():\/;?]*$/;
function pc(a, b) {
  var c = k;
  v(a) && (c = a, vc.test(c) || (c = encodeURI(a)), c.search(b) >= 0 && (c = c.replace(b, wc)));
  return c
}
function wc(a) {
  a = a.charCodeAt(0);
  return"%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16)
}
var qc = /[#\/\?@]/g, sc = /[\#\?:]/g, rc = /[\#\?]/g, uc = /[\#\?@]/g, tc = /#/g;
function oc(a, b, c) {
  this.k = a || k;
  this.ta = b || k;
  this.h = !!c
}
function V(a) {
  if(!a.b && (a.b = new J, a.a = 0, a.k)) {
    for(var b = a.k.split("&"), c = 0;c < b.length;c++) {
      var d = b[c].indexOf("="), e = k, f = k;
      d >= 0 ? (e = b[c].substring(0, d), f = b[c].substring(d + 1)) : e = b[c];
      e = ua(e);
      e = W(a, e);
      a.add(e, f ? ua(f) : "")
    }
  }
}
o = oc.prototype;
o.b = k;
o.a = k;
o.Fa = function() {
  V(this);
  return this.a
};
o.add = function(a, b) {
  V(this);
  xc(this);
  a = W(this, a);
  if(this.s(a)) {
    var c = this.b.get(a);
    t(c) ? c.push(b) : this.b.set(a, [c, b])
  }else {
    this.b.set(a, b)
  }
  this.a++;
  return this
};
o.remove = function(a) {
  V(this);
  a = W(this, a);
  if(this.b.s(a)) {
    xc(this);
    var b = this.b.get(a);
    t(b) ? this.a -= b.length : this.a--;
    return this.b.remove(a)
  }
  return n
};
o.s = function(a) {
  V(this);
  a = W(this, a);
  return this.b.s(a)
};
o.q = function() {
  V(this);
  for(var a = this.b.w(), b = this.b.q(), c = [], d = 0;d < b.length;d++) {
    var e = a[d];
    if(t(e)) {
      for(var f = 0;f < e.length;f++) {
        c.push(b[d])
      }
    }else {
      c.push(b[d])
    }
  }
  return c
};
o.w = function(a) {
  V(this);
  if(a) {
    if(a = W(this, a), this.s(a)) {
      var b = this.b.get(a);
      if(t(b)) {
        return b
      }else {
        a = [], a.push(b)
      }
    }else {
      a = []
    }
  }else {
    for(var b = this.b.w(), a = [], c = 0;c < b.length;c++) {
      var d = b[c];
      t(d) ? hb(a, d) : a.push(d)
    }
  }
  return a
};
o.set = function(a, b) {
  V(this);
  xc(this);
  a = W(this, a);
  if(this.s(a)) {
    var c = this.b.get(a);
    t(c) ? this.a -= c.length : this.a--
  }
  this.b.set(a, b);
  this.a++;
  return this
};
o.get = function(a, b) {
  V(this);
  a = W(this, a);
  if(this.s(a)) {
    var c = this.b.get(a);
    return t(c) ? c[0] : c
  }else {
    return b
  }
};
o.toString = function() {
  if(this.k) {
    return this.k
  }
  if(!this.b) {
    return""
  }
  for(var a = [], b = 0, c = this.b.q(), d = 0;d < c.length;d++) {
    var e = c[d], f = ta(e), e = this.b.get(e);
    if(t(e)) {
      for(var h = 0;h < e.length;h++) {
        b > 0 && a.push("&"), a.push(f), e[h] !== "" && a.push("=", ta(e[h])), b++
      }
    }else {
      b > 0 && a.push("&"), a.push(f), e !== "" && a.push("=", ta(e)), b++
    }
  }
  return this.k = a.join("")
};
function xc(a) {
  delete a.ha;
  delete a.k;
  a.ta && delete a.ta.f
}
o.clone = function() {
  var a = new oc;
  if(this.ha) {
    a.ha = this.ha
  }
  if(this.k) {
    a.k = this.k
  }
  if(this.b) {
    a.b = this.b.clone()
  }
  return a
};
function W(a, b) {
  var c = String(b);
  a.h && (c = c.toLowerCase());
  return c
}
o.I = function(a) {
  a && !this.h && (V(this), xc(this), jb(this.b, function(a, c) {
    var d = c.toLowerCase();
    c != d && (this.remove(c), this.add(d, a))
  }, this));
  this.h = a
};
function yc(a, b) {
  var c = b.n, d = new gc(a);
  d.g && !qa(c, "#!/") && (c += "#!/");
  d = d.l + (d.g ? "#" + d.g : "");
  d.lastIndexOf(c, 0) == 0 ? this.path = d.substr(c.length) : g(new T("Request cannot be handled by application.", "Request Error"));
  qa(this.path, "/") || (this.path += "/");
  this.Ea = this.path.split("/");
  this.Ea = eb(this.Ea, function(a) {
    return a != ""
  })
}
;function zc(a, b, c, d) {
  this.n = a || "/";
  this.H = [];
  this.p = b;
  this.H.push(this.p);
  this.ba = c;
  this.aa = d || Ac
}
var Ac = 0;
function Bc(a, b) {
  var c;
  try {
    a.Oa = new yc(b || window.location, a), c = Cc(a, a.Oa)
  }catch(d) {
    Dc(a, a.p);
    return
  }
  a.xa = c;
  c = a.Oa.Q;
  var e = a.xa;
  a.Ab = e.z;
  a.Ua = e.action;
  e = {};
  a.xa == a.p ? a.Na = {} : (c && c.length > 0 && (c.length % 2 == 1 && c.push(j), e = bb(c)), a.Na = e);
  a.ba.ra(a)
}
function Dc(a, b) {
  var c, d, e = [], f, h = {}, l, m, p = n;
  l = Xa(h);
  if(b instanceof X) {
    b = b.name
  }
  try {
    b = Ec(a, b)
  }catch(D) {
    g(D)
  }
  if(a.aa == 1 || a.aa == 2 && b == a.p) {
    p = j
  }
  c = b.tb;
  f = c.indexOf("*") > -1;
  if(m = c.match(/:\w+/g)) {
    d = fb(m, function(a) {
      return a.substr(1) in h
    });
    if(!f && l != m.length || f && l <= m.length) {
      d = n
    }
    d || g(new T("Given parameters do not match the required parameters of the route", "Routing Error"));
    db(m, function(a) {
      a = a.substr(1);
      c = c.replace(":" + a, h[a]);
      delete h[a]
    });
    if(f) {
      for(var q in h) {
        e.push(q, h[q])
      }
    }
  }
  c = a.n + "#!/" + c.replace("*", e.join("/"));
  p ? Bc(a, c) : window.location = c;
  if(!a.qb) {
    a.qb = new dc
  }
}
function Cc(a, b) {
  var c, d, e, f;
  (d = gb(a.H, function(a) {
    if(c = b.path.match(a.format)) {
      for(var d = [], m = 0;m < c.length - 1;m++) {
        e = c[m + 1], f = e.split("/"), f.length > 1 ? (f.length % 2 == 1 && f.push(j), d = d.concat(f)) : d.push(a.Q[m], e)
      }
      b.Q = d;
      return j
    }
    return n
  })) || g(new T("The request cannot be resolved to a route.", "Routing Error"));
  return d instanceof X ? d : k
}
function Ec(a, b) {
  var c = gb(a.H, function(a) {
    return a.name == b
  });
  c || g(new T('Route name "' + b + '" cannot be found', "Routing Error"));
  return c instanceof X ? c : k
}
;(function() {
  var a = Math.floor(Math.random() * 2147483648);
  ga = function() {
    return(a++).toString(36)
  }
})();
function T(a, b) {
  this.name = b || "Error";
  this.message = a || ""
}
y(T, Error);
function X(a) {
  this.name = a.name;
  this.z = a.z;
  this.action = a.action;
  this.tb = a = a.format;
  var b;
  (b = a.match(/\*/g)) && b.length > 1 && g(new T("Route cannot contain more than one wildchar.", "Routing Error"));
  qa(a, "/") == n && (a += "/");
  a = ("^" + a + "$").replace(/\*/g, "(.*?)");
  if(b = a.match(/((:\w+)|\(\.\*\?\))/g)) {
    this.Q = [];
    for(var a = a.replace(/(:\w+)/g, "([^?#/]+)"), c = 0, d = b.length;c < d;c++) {
      this.Q.push(b[c].substr(1))
    }
  }
  a = a.replace(/\//g, "\\/");
  this.format = RegExp(a)
}
;function Y(a) {
  var b = new gc(window.location), c = b.toString(), d = b.l, e = "";
  this.id = ga();
  this.cb = a || $('<div id="' + this.id + '"></div>').appendTo("body")[0];
  d.lastIndexOf(this.n, 0) == 0 && (e = d.substr(this.n.length - 1), e.length > 1 && !qa(e, "/") && (e += "/"), lc(b, e));
  if(e.length > 1 && (!b.g || c.indexOf(e) < c.indexOf(b.g))) {
    window.location = this.n + "#!" + e
  }else {
    this.p || g(new T("No default route is set.", "tartMVC Application Exception"));
    var f = this;
    this.Ga = new R(n);
    Fc(this);
    Ab(this.Ga, "navigate", function() {
      Bc(Gc(f))
    });
    Xb(this.Ga, j)
  }
}
function Gc(a) {
  if(!a.Pa) {
    var b = a.n, c = a.p;
    if(!a.ba) {
      a.ba = new ec(a.V, a.cb)
    }
    a.Pa = new zc(b, c, a.ba, a.aa)
  }
  return a.Pa
}
Y.prototype.n = "/";
Y.prototype.p = k;
Y.prototype.V = function() {
};
Y.prototype.aa = Ac;
function Hc() {
  this.p = new X({name:"default", format:"", z:z, action:ka});
  Y.call(this)
}
y(Hc, Y);
Hc.prototype.n = "/";
Hc.prototype.V = function() {
  this.Ja = '<div id="header">header</div><div id="content">' + this.ga + '</div><div id="footer">footer</div>'
};
function Fc(a) {
  var a = Gc(a), b = new X({name:"home anything", format:"home/index", z:z, action:ka});
  a.H.push(b);
  b = new X({name:"home anything", format:"home/list/:p1/:p2", z:z, action:la});
  a.H.push(b);
  b = new X({name:"home anything", format:"home/show/:p1", z:z, action:ma});
  a.H.push(b)
}
;function Ic() {
  new Hc
}
var Jc = "tns.Bootstrapper".split("."), Z = r;
!(Jc[0] in Z) && Z.execScript && Z.execScript("var " + Jc[0]);
for(var Kc;Jc.length && (Kc = Jc.shift());) {
  !Jc.length && Ic !== i ? Z[Kc] = Ic : Z = Z[Kc] ? Z[Kc] : Z[Kc] = {}
}
;})()
