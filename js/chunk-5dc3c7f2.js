(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5dc3c7f2"],{"12b1":function(e,t,r){"use strict";r("a4ff")},"23fb":function(e,t,r){"use strict";var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("a-card",{staticClass:"dashboard-bar-line header-solid",attrs:{bordered:!1}},[r("b-table",{attrs:{small:"",striped:"",items:e.myOrders,id:"myOrders",fixed:"","head-dark":"",light:"",fields:e.fields},scopedSlots:e._u([{key:"cell(side)",fn:function(t){return[r("span",{class:{"text-danger":"sell"==t.value,"text-danger text-bold fw-bold":"24High"==t.value,"text-success text-bold fw-bold":"24Low"==t.value,"text-danger-1 text-bold fw-bold":"wkHigh"==t.value,"text-success-1 text-bold fw-bold":"wkLow"==t.value,"text-danger-2 text-bold fw-bold":"moHigh"==t.value,"text-success-2 text-bold fw-bold":"moLow"==t.value,"text-danger-3 text-bold fw-bold":"yrHigh"==t.value,"text-success-3 text-bold fw-bold":"yrLow"==t.value,"text-success":"buy"==t.value,"text-warning":"Current Rate"==t.value,"text-info":"buyRateStock"==t.value,"text-primary":"buyRate"==t.value},attrs:{"data-value":t.value}},[e._v(e._s(t.value))])]}},{key:"cell(ppu)",fn:function(t){return[r("span",{staticClass:"fw-bold",attrs:{"data-value":t.value}},[e._v(" "+e._s(e._f("round5")(t.item.price_per_unit))+" ")])]}},{key:"cell(price_per_unit)",fn:function(t){return[r("span",{staticClass:"fw-bold",attrs:{"data-value":t.value}},[e._v(" "+e._s(e._f("round5")(t.item.price_per_unit))+" ")])]}},{key:"cell(total_quantity)",fn:function(t){return[r("span",{staticClass:"fw-bold",attrs:{"data-value":t.value}},[e._v(e._s(e._f("round5")(t.value)))])]}},{key:"cell(amount)",fn:function(t){return[r("span",{staticClass:"fw-bold"},[e._v(e._s(e._f("round2")(t.item.price_per_unit*t.item.total_quantity)))])]}}])})],1)},a=[],i={props:{selected:{},summary:{},myOrders:{},ofields:{}},data:function(){return{fields:[{key:"market",label:"Orders"},{key:"side",label:"Side"},{key:"ppu",label:"Price"},{key:"total_quantity",label:"TQty"},{key:"amount",label:"Amount"}]}}},l=i,o=(r("12b1"),r("2877")),u=Object(o["a"])(l,n,a,!1,null,null,null);t["a"]=u.exports},"241b":function(e,t,r){"use strict";r("fb6a"),r("4de4");var n=r("a026"),a=r("6612"),i=r.n(a);function l(e){return isNaN(e)||!e?0:parseFloat(e)}var o=function(e,t){var r=t||"0,0000";return i()(e).format(r).toUpperCase()},u=function(e,t){var r=t||2,n=Math.pow(10,r);return o(Math.round(l(e)*n)/n)},s=function(e,t){var r=t||5,n=Math.pow(10,r);return Math.round(l(e)*n)/n},c=function(e){return e.charAt(0).toUpperCase()+e.slice(1)},f={init:function(){n["default"].filter("capitalize",c),n["default"].filter("round5",s),n["default"].filter("round2",u),n["default"].filter("instock_worth",(function(e){var t=e.balance;return t&&e.ticker?u(l(t.balance)*l(e.ticker.last_price)*.999):0})),n["default"].filter("wallet_pending_purchase",(function(e){var t=e.order?e.order.onbuy_amount:0;return t?u(t):0})),n["default"].filter("wallet_net_worth",(function(e){var t=e.balance;if(!t)return 0;var r=l(t.balance)+l(t.locked_balance);return u(r*e.ticker.last_price*.999)})),n["default"].filter("wallet_balance",(function(e){var t=e.balance;if(!t)return"--";var r=l(t.balance)+l(t.locked_balance);return r}))},number:o,round2:u,round5:s,capitalize:c};f.init(),t["a"]=f},6612:function(e,t,r){var n,a;
/*! @preserve
 * numeral.js
 * version : 2.0.6
 * author : Adam Draper
 * license : MIT
 * http://adamwdraper.github.com/Numeral-js/
 */(function(i,l){n=l,a="function"===typeof n?n.call(t,r,t,e):n,void 0===a||(e.exports=a)})(0,(function(){var e,t,r="2.0.6",n={},a={},i={currentLocale:"en",zeroFormat:null,nullFormat:null,defaultFormat:"0,0",scalePercentBy100:!0},l={currentLocale:i.currentLocale,zeroFormat:i.zeroFormat,nullFormat:i.nullFormat,defaultFormat:i.defaultFormat,scalePercentBy100:i.scalePercentBy100};function o(e,t){this._input=e,this._value=t}return e=function(r){var a,i,u,s;if(e.isNumeral(r))a=r.value();else if(0===r||"undefined"===typeof r)a=0;else if(null===r||t.isNaN(r))a=null;else if("string"===typeof r)if(l.zeroFormat&&r===l.zeroFormat)a=0;else if(l.nullFormat&&r===l.nullFormat||!r.replace(/[^0-9]+/g,"").length)a=null;else{for(i in n)if(s="function"===typeof n[i].regexps.unformat?n[i].regexps.unformat():n[i].regexps.unformat,s&&r.match(s)){u=n[i].unformat;break}u=u||e._.stringToNumber,a=u(r)}else a=Number(r)||null;return new o(r,a)},e.version=r,e.isNumeral=function(e){return e instanceof o},e._=t={numberToFormat:function(t,r,n){var i,l,o,u,s,c,f,d=a[e.options.currentLocale],m=!1,b=!1,p=0,h="",v=1e12,_=1e9,g=1e6,y=1e3,x="",w=!1;if(t=t||0,l=Math.abs(t),e._.includes(r,"(")?(m=!0,r=r.replace(/[\(|\)]/g,"")):(e._.includes(r,"+")||e._.includes(r,"-"))&&(s=e._.includes(r,"+")?r.indexOf("+"):t<0?r.indexOf("-"):-1,r=r.replace(/[\+|\-]/g,"")),e._.includes(r,"a")&&(i=r.match(/a(k|m|b|t)?/),i=!!i&&i[1],e._.includes(r," a")&&(h=" "),r=r.replace(new RegExp(h+"a[kmbt]?"),""),l>=v&&!i||"t"===i?(h+=d.abbreviations.trillion,t/=v):l<v&&l>=_&&!i||"b"===i?(h+=d.abbreviations.billion,t/=_):l<_&&l>=g&&!i||"m"===i?(h+=d.abbreviations.million,t/=g):(l<g&&l>=y&&!i||"k"===i)&&(h+=d.abbreviations.thousand,t/=y)),e._.includes(r,"[.]")&&(b=!0,r=r.replace("[.]",".")),o=t.toString().split(".")[0],u=r.split(".")[1],c=r.indexOf(","),p=(r.split(".")[0].split(",")[0].match(/0/g)||[]).length,u?(e._.includes(u,"[")?(u=u.replace("]",""),u=u.split("["),x=e._.toFixed(t,u[0].length+u[1].length,n,u[1].length)):x=e._.toFixed(t,u.length,n),o=x.split(".")[0],x=e._.includes(x,".")?d.delimiters.decimal+x.split(".")[1]:"",b&&0===Number(x.slice(1))&&(x="")):o=e._.toFixed(t,0,n),h&&!i&&Number(o)>=1e3&&h!==d.abbreviations.trillion)switch(o=String(Number(o)/1e3),h){case d.abbreviations.thousand:h=d.abbreviations.million;break;case d.abbreviations.million:h=d.abbreviations.billion;break;case d.abbreviations.billion:h=d.abbreviations.trillion;break}if(e._.includes(o,"-")&&(o=o.slice(1),w=!0),o.length<p)for(var k=p-o.length;k>0;k--)o="0"+o;return c>-1&&(o=o.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1"+d.delimiters.thousands)),0===r.indexOf(".")&&(o=""),f=o+x+(h||""),m?f=(m&&w?"(":"")+f+(m&&w?")":""):s>=0?f=0===s?(w?"-":"+")+f:f+(w?"-":"+"):w&&(f="-"+f),f},stringToNumber:function(e){var t,r,n,i=a[l.currentLocale],o=e,u={thousand:3,million:6,billion:9,trillion:12};if(l.zeroFormat&&e===l.zeroFormat)r=0;else if(l.nullFormat&&e===l.nullFormat||!e.replace(/[^0-9]+/g,"").length)r=null;else{for(t in r=1,"."!==i.delimiters.decimal&&(e=e.replace(/\./g,"").replace(i.delimiters.decimal,".")),u)if(n=new RegExp("[^a-zA-Z]"+i.abbreviations[t]+"(?:\\)|(\\"+i.currency.symbol+")?(?:\\))?)?$"),o.match(n)){r*=Math.pow(10,u[t]);break}r*=(e.split("-").length+Math.min(e.split("(").length-1,e.split(")").length-1))%2?1:-1,e=e.replace(/[^0-9\.]+/g,""),r*=Number(e)}return r},isNaN:function(e){return"number"===typeof e&&isNaN(e)},includes:function(e,t){return-1!==e.indexOf(t)},insert:function(e,t,r){return e.slice(0,r)+t+e.slice(r)},reduce:function(e,t){if(null===this)throw new TypeError("Array.prototype.reduce called on null or undefined");if("function"!==typeof t)throw new TypeError(t+" is not a function");var r,n=Object(e),a=n.length>>>0,i=0;if(3===arguments.length)r=arguments[2];else{while(i<a&&!(i in n))i++;if(i>=a)throw new TypeError("Reduce of empty array with no initial value");r=n[i++]}for(;i<a;i++)i in n&&(r=t(r,n[i],i,n));return r},multiplier:function(e){var t=e.toString().split(".");return t.length<2?1:Math.pow(10,t[1].length)},correctionFactor:function(){var e=Array.prototype.slice.call(arguments);return e.reduce((function(e,r){var n=t.multiplier(r);return e>n?e:n}),1)},toFixed:function(e,t,r,n){var a,i,l,o,u=e.toString().split("."),s=t-(n||0);return a=2===u.length?Math.min(Math.max(u[1].length,s),t):s,l=Math.pow(10,a),o=(r(e+"e+"+a)/l).toFixed(a),n>t-a&&(i=new RegExp("\\.?0{1,"+(n-(t-a))+"}$"),o=o.replace(i,"")),o}},e.options=l,e.formats=n,e.locales=a,e.locale=function(e){return e&&(l.currentLocale=e.toLowerCase()),l.currentLocale},e.localeData=function(e){if(!e)return a[l.currentLocale];if(e=e.toLowerCase(),!a[e])throw new Error("Unknown locale : "+e);return a[e]},e.reset=function(){for(var e in i)l[e]=i[e]},e.zeroFormat=function(e){l.zeroFormat="string"===typeof e?e:null},e.nullFormat=function(e){l.nullFormat="string"===typeof e?e:null},e.defaultFormat=function(e){l.defaultFormat="string"===typeof e?e:"0.0"},e.register=function(e,t,r){if(t=t.toLowerCase(),this[e+"s"][t])throw new TypeError(t+" "+e+" already registered.");return this[e+"s"][t]=r,r},e.validate=function(t,r){var n,a,i,l,o,u,s,c;if("string"!==typeof t&&(t+="",console.warn&&console.warn("Numeral.js: Value is not string. It has been co-erced to: ",t)),t=t.trim(),t.match(/^\d+$/))return!0;if(""===t)return!1;try{s=e.localeData(r)}catch(f){s=e.localeData(e.locale())}return i=s.currency.symbol,o=s.abbreviations,n=s.delimiters.decimal,a="."===s.delimiters.thousands?"\\.":s.delimiters.thousands,c=t.match(/^[^\d]+/),(null===c||(t=t.substr(1),c[0]===i))&&(c=t.match(/[^\d]+$/),(null===c||(t=t.slice(0,-1),c[0]===o.thousand||c[0]===o.million||c[0]===o.billion||c[0]===o.trillion))&&(u=new RegExp(a+"{2}"),!t.match(/[^\d.,]/g)&&(l=t.split(n),!(l.length>2)&&(l.length<2?!!l[0].match(/^\d+.*\d$/)&&!l[0].match(u):1===l[0].length?!!l[0].match(/^\d+$/)&&!l[0].match(u)&&!!l[1].match(/^\d+$/):!!l[0].match(/^\d+.*\d$/)&&!l[0].match(u)&&!!l[1].match(/^\d+$/)))))},e.fn=o.prototype={clone:function(){return e(this)},format:function(t,r){var a,i,o,u=this._value,s=t||l.defaultFormat;if(r=r||Math.round,0===u&&null!==l.zeroFormat)i=l.zeroFormat;else if(null===u&&null!==l.nullFormat)i=l.nullFormat;else{for(a in n)if(s.match(n[a].regexps.format)){o=n[a].format;break}o=o||e._.numberToFormat,i=o(u,s,r)}return i},value:function(){return this._value},input:function(){return this._input},set:function(e){return this._value=Number(e),this},add:function(e){var r=t.correctionFactor.call(null,this._value,e);function n(e,t,n,a){return e+Math.round(r*t)}return this._value=t.reduce([this._value,e],n,0)/r,this},subtract:function(e){var r=t.correctionFactor.call(null,this._value,e);function n(e,t,n,a){return e-Math.round(r*t)}return this._value=t.reduce([e],n,Math.round(this._value*r))/r,this},multiply:function(e){function r(e,r,n,a){var i=t.correctionFactor(e,r);return Math.round(e*i)*Math.round(r*i)/Math.round(i*i)}return this._value=t.reduce([this._value,e],r,1),this},divide:function(e){function r(e,r,n,a){var i=t.correctionFactor(e,r);return Math.round(e*i)/Math.round(r*i)}return this._value=t.reduce([this._value,e],r),this},difference:function(t){return Math.abs(e(this._value).subtract(t).value())}},e.register("locale","en",{delimiters:{thousands:",",decimal:"."},abbreviations:{thousand:"k",million:"m",billion:"b",trillion:"t"},ordinal:function(e){var t=e%10;return 1===~~(e%100/10)?"th":1===t?"st":2===t?"nd":3===t?"rd":"th"},currency:{symbol:"$"}}),function(){e.register("format","bps",{regexps:{format:/(BPS)/,unformat:/(BPS)/},format:function(t,r,n){var a,i=e._.includes(r," BPS")?" ":"";return t*=1e4,r=r.replace(/\s?BPS/,""),a=e._.numberToFormat(t,r,n),e._.includes(a,")")?(a=a.split(""),a.splice(-1,0,i+"BPS"),a=a.join("")):a=a+i+"BPS",a},unformat:function(t){return+(1e-4*e._.stringToNumber(t)).toFixed(15)}})}(),function(){var t={base:1e3,suffixes:["B","KB","MB","GB","TB","PB","EB","ZB","YB"]},r={base:1024,suffixes:["B","KiB","MiB","GiB","TiB","PiB","EiB","ZiB","YiB"]},n=t.suffixes.concat(r.suffixes.filter((function(e){return t.suffixes.indexOf(e)<0}))),a=n.join("|");a="("+a.replace("B","B(?!PS)")+")",e.register("format","bytes",{regexps:{format:/([0\s]i?b)/,unformat:new RegExp(a)},format:function(n,a,i){var l,o,u,s,c=e._.includes(a,"ib")?r:t,f=e._.includes(a," b")||e._.includes(a," ib")?" ":"";for(a=a.replace(/\s?i?b/,""),o=0;o<=c.suffixes.length;o++)if(u=Math.pow(c.base,o),s=Math.pow(c.base,o+1),null===n||0===n||n>=u&&n<s){f+=c.suffixes[o],u>0&&(n/=u);break}return l=e._.numberToFormat(n,a,i),l+f},unformat:function(n){var a,i,l=e._.stringToNumber(n);if(l){for(a=t.suffixes.length-1;a>=0;a--){if(e._.includes(n,t.suffixes[a])){i=Math.pow(t.base,a);break}if(e._.includes(n,r.suffixes[a])){i=Math.pow(r.base,a);break}}l*=i||1}return l}})}(),function(){e.register("format","currency",{regexps:{format:/(\$)/},format:function(t,r,n){var a,i,l,o=e.locales[e.options.currentLocale],u={before:r.match(/^([\+|\-|\(|\s|\$]*)/)[0],after:r.match(/([\+|\-|\)|\s|\$]*)$/)[0]};for(r=r.replace(/\s?\$\s?/,""),a=e._.numberToFormat(t,r,n),t>=0?(u.before=u.before.replace(/[\-\(]/,""),u.after=u.after.replace(/[\-\)]/,"")):t<0&&!e._.includes(u.before,"-")&&!e._.includes(u.before,"(")&&(u.before="-"+u.before),l=0;l<u.before.length;l++)switch(i=u.before[l],i){case"$":a=e._.insert(a,o.currency.symbol,l);break;case" ":a=e._.insert(a," ",l+o.currency.symbol.length-1);break}for(l=u.after.length-1;l>=0;l--)switch(i=u.after[l],i){case"$":a=l===u.after.length-1?a+o.currency.symbol:e._.insert(a,o.currency.symbol,-(u.after.length-(1+l)));break;case" ":a=l===u.after.length-1?a+" ":e._.insert(a," ",-(u.after.length-(1+l)+o.currency.symbol.length-1));break}return a}})}(),function(){e.register("format","exponential",{regexps:{format:/(e\+|e-)/,unformat:/(e\+|e-)/},format:function(t,r,n){var a,i="number"!==typeof t||e._.isNaN(t)?"0e+0":t.toExponential(),l=i.split("e");return r=r.replace(/e[\+|\-]{1}0/,""),a=e._.numberToFormat(Number(l[0]),r,n),a+"e"+l[1]},unformat:function(t){var r=e._.includes(t,"e+")?t.split("e+"):t.split("e-"),n=Number(r[0]),a=Number(r[1]);function i(t,r,n,a){var i=e._.correctionFactor(t,r),l=t*i*(r*i)/(i*i);return l}return a=e._.includes(t,"e-")?a*=-1:a,e._.reduce([n,Math.pow(10,a)],i,1)}})}(),function(){e.register("format","ordinal",{regexps:{format:/(o)/},format:function(t,r,n){var a,i=e.locales[e.options.currentLocale],l=e._.includes(r," o")?" ":"";return r=r.replace(/\s?o/,""),l+=i.ordinal(t),a=e._.numberToFormat(t,r,n),a+l}})}(),function(){e.register("format","percentage",{regexps:{format:/(%)/,unformat:/(%)/},format:function(t,r,n){var a,i=e._.includes(r," %")?" ":"";return e.options.scalePercentBy100&&(t*=100),r=r.replace(/\s?\%/,""),a=e._.numberToFormat(t,r,n),e._.includes(a,")")?(a=a.split(""),a.splice(-1,0,i+"%"),a=a.join("")):a=a+i+"%",a},unformat:function(t){var r=e._.stringToNumber(t);return e.options.scalePercentBy100?.01*r:r}})}(),function(){e.register("format","time",{regexps:{format:/(:)/,unformat:/(:)/},format:function(e,t,r){var n=Math.floor(e/60/60),a=Math.floor((e-60*n*60)/60),i=Math.round(e-60*n*60-60*a);return n+":"+(a<10?"0"+a:a)+":"+(i<10?"0"+i:i)},unformat:function(e){var t=e.split(":"),r=0;return 3===t.length?(r+=60*Number(t[0])*60,r+=60*Number(t[1]),r+=Number(t[2])):2===t.length&&(r+=60*Number(t[0]),r+=Number(t[1])),Number(r)}})}(),e}))},"9b9b":function(e,t,r){"use strict";var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"hello"},[r("div",[e._v(" Trades History")]),r("b-table",{attrs:{small:"",striped:"",items:e.myTrades,id:"myTrades",fixed:"",fields:e.fields},scopedSlots:e._u([{key:"cell(side)",fn:function(t){return[r("span",{class:{"text-danger":"sell"==t.value,"text-success":"buy"==t.value},attrs:{"data-value":t.value}},[e._v(e._s(t.value))])]}},{key:"cell(price)",fn:function(t){return[r("span",{attrs:{"data-value":t.value}},[e._v(e._s(e._f("round5")(t.value)))])]}},{key:"cell(quantity)",fn:function(t){return[r("span",{attrs:{"data-value":t.value}},[e._v(" "+e._s(e._f("round5")(t.value)))])]}},{key:"cell(amount)",fn:function(t){return[e._v(" "+e._s(e._f("round2")(t.item.quantity*t.item.price))+" ")]}}])})],1)},a=[],i={props:{selected:{},summary:{},myOrders:{},myTrades:{}},data:function(){return{fields:[{key:"symbol",label:"Symbol"},{key:"side",label:"Side"},{key:"price",label:"Price"},{key:"quantity",label:"TQty"},{key:"amount",label:"Amount"}]}}},l=i,o=r("2877"),u=Object(o["a"])(l,n,a,!1,null,"cdaa0c5a",null);t["a"]=u.exports},a4ff:function(e,t,r){}}]);