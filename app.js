(function(t){function e(e){for(var a,n,c=e[0],i=e[1],o=e[2],d=0,b=[];d<c.length;d++)n=c[d],Object.prototype.hasOwnProperty.call(r,n)&&r[n]&&b.push(r[n][0]),r[n]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(t[a]=i[a]);u&&u(e);while(b.length)b.shift()();return l.push.apply(l,o||[]),s()}function s(){for(var t,e=0;e<l.length;e++){for(var s=l[e],a=!0,c=1;c<s.length;c++){var i=s[c];0!==r[i]&&(a=!1)}a&&(l.splice(e--,1),t=n(n.s=s[0]))}return t}var a={},r={coindcxvue:0},l=[];function n(e){if(a[e])return a[e].exports;var s=a[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.m=t,n.c=a,n.d=function(t,e,s){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)n.d(s,a,function(e){return t[e]}.bind(null,a));return s},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],i=c.push.bind(c);c.push=e,c=c.slice();for(var o=0;o<c.length;o++)e(c[o]);var u=i;l.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"034f":function(t,e,s){"use strict";s("85ec")},1:function(t,e){},10:function(t,e){},11:function(t,e){},12:function(t,e){},13:function(t,e){},14:function(t,e){},15:function(t,e){},"17e3":function(t,e,s){},2:function(t,e){},3:function(t,e){},4:function(t,e){},5:function(t,e){},"56d7":function(t,e,s){"use strict";s.r(e);s("e260"),s("e6cf"),s("cca6"),s("a79d");var a=s("a026"),r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("demo-grid")],1)},l=[],n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"hello"},[s("b-table",{attrs:{small:"",striped:"",hover:"",items:t.items,fields:t.fields,selectable:"","select-mode":"single",stacked:"sm","selected-variant":"active"},on:{"row-selected":t.onRowSelected},scopedSlots:t._u([{key:"cell(symbol)",fn:function(e){return[t._v(" "+t._s(e.item.symbol)+" "),s("i",{class:[{"far fa-thumbs-up text-success":e.item.efective_rate<0}]})]}},{key:"cell(efective_rate)",fn:function(e){return[s("span",{class:{"fw-bold text-success":e.item.efective_rate<0,"text-danger":e.item.efective_rate>e.item.buy_rate,"fw-bold":e.item.sell_rate>0&&e.item.ticker.last_price<e.item.sell_rate}},[t._v(" "+t._s(t._f("round5")(e.item.efective_rate))+" ")])]}},{key:"cell(profit)",fn:function(e){return[e.item.stock?s("span",{class:{"fw-bold text-success":e.item.efective_rate<0}},[t._v(" "+t._s(t._f("round2")(e.item.stock*e.item.ticker.last_price+e.item.earning))+" ")]):t._e()]}},{key:"cell(now_rate)",fn:function(e){return[e.item.ticker?s("span",{class:{"fw-bold text-success":e.item.ticker.last_price>e.item.buy_rate,"text-danger":e.item.ticker.last_price<e.item.buy_rate}},[t._v(" "+t._s(t._f("round5")(e.item.ticker.last_price))+" ")]):t._e()]}}])}),t.selected?s("b-card",[s("b-row",{staticClass:"pb-2 pb-2 bg-dark text-light"},[s("b-col",{staticClass:"fw-bold text-end",attrs:{sm:"2",lg:"2"}},[t._v("currency")]),s("b-col",{staticClass:"text-start fw-bold",attrs:{sm:"2",lg:"2"}},[t._v(t._s(t.selected.symbol))]),s("b-col",{staticClass:"fw-bold text-end",attrs:{sm:"2",lg:"2"}},[t._v("My INR Balalnce")]),t.summary.INR&&t.summary.INR.balance?s("b-col",{staticClass:"text-start",attrs:{sm:"2",lg:"2"}},[s("small",[t._v("₹ ")]),t._v(t._s(t._f("round2")(t.summary.INR.balance.balance)))]):t._e()],1),s("b-row",{staticClass:"pb-2 bg-dark text-light"},[s("b-col",{staticClass:"fw-bold text-end",attrs:{sm:"2",lg:"2"}},[t._v("Market Rate")]),s("b-col",{staticClass:"text-start",attrs:{sm:"2",lg:"2"}},[t._v(t._s(t.selected.ticker.last_price))]),s("b-col",{staticClass:"fw-bold text-end",attrs:{sm:"2",lg:"2"}},[t._v(" NetWorth "),s("small",[t._v("(Earning+Stok) ")])]),s("b-col",{staticClass:"text-start",attrs:{sm:"2",lg:"2"}},[t._v(t._s(t._f("round2")(t.selected.earning+t.selected.stock*t.selected.ticker.last_price)))])],1),s("b-row",{staticClass:"pb-2 pb-2 bg-warning"},[s("b-col",{staticClass:"fw-bold text-end",attrs:{sm:"2",lg:"2"}},[t._v("Starting Coins")]),t.selected.balance?s("b-col",{staticClass:"text-start",attrs:{sm:"2",lg:"2"}},[t._v(" "+t._s(t._f("round5")(t.selected.buy_quantity-t.selected.sell_quantity-t.selected.balance.locked_balance-t.selected.balance.balance)))]):t._e(),s("b-col",{staticClass:"fw-bold text-end",attrs:{sm:"2",lg:"2"}},[t._v("Starting Coins Worth")]),s("b-col",{staticClass:"text-start",attrs:{sm:"2",lg:"2"}},[s("small",[t._v("₹ ")]),t._v(t._s(t._f("round2")(t.selected.starting_coins*t.selected.ticker.last_price)))])],1),s("b-row",{staticClass:"pb-2 bg-warning"},[s("b-col",{staticClass:"fw-bold text-end ",attrs:{sm:"2",lg:"2"}},[t._v("Purchased Coins")]),s("b-col",{staticClass:"text-start",attrs:{sm:"2",lg:"2"}},[t._v(t._s(t._f("round5")(t.selected.buy_quantity)))]),s("b-col",{staticClass:"fw-bold text-end",attrs:{sm:"2",lg:"2"}},[t._v("INR Debit")]),s("b-col",{staticClass:"text-start",attrs:{sm:"2",lg:"2"}},[s("small",[t._v("₹ ")]),t._v(t._s(t._f("round2")(t.selected.buy_amount)))])],1),s("b-row",{staticClass:"pb-2 bg-info bg-gradient"},[s("b-col",{staticClass:"fw-bold text-end",attrs:{sm:"2",lg:"2"}},[t._v("Sold Coins")]),s("b-col",{staticClass:"text-start",attrs:{sm:"2",lg:"2"}},[t._v(t._s(t._f("round5")(t.selected.sell_quantity)))]),s("b-col",{staticClass:"fw-bold text-end",attrs:{sm:"2",lg:"2"}},[t._v("INR Credit")]),s("b-col",{staticClass:"text-start",attrs:{sm:"2",lg:"2"}},[s("small",[t._v("₹ ")]),t._v(t._s(t._f("round2")(t.selected.sell_amount)))])],1),t.selected.balance?s("b-row",{staticClass:"pb-2 bg-info bg-gradient text-dark"},[s("b-col",{staticClass:"fw-bold text-end",attrs:{sm:"2",lg:"2"}},[t._v("onSale Coins")]),s("b-col",{staticClass:"text-start",attrs:{sm:"2",lg:"2"}},[t._v(t._s(t.selected.balance.locked_balance))]),s("b-col",{staticClass:"fw-bold text-end",attrs:{sm:"2",lg:"2"}},[t._v("onSale Worth")]),s("b-col",{staticClass:"text-start",attrs:{sm:"2",lg:"2"}},[s("small",[t._v("₹ ")]),t._v(t._s(t._f("round2")(t.selected.balance.locked_balance*t.selected.ticker.last_price)))])],1):t._e(),t.selected.balance?s("b-row",{staticClass:"pb-2 bg-secondary text-light"},[s("b-col",{staticClass:"fw-bold text-end",attrs:{sm:"2",lg:"2"}},[t._v("inStock Coins")]),s("b-col",{staticClass:"text-start",attrs:{sm:"2",lg:"2"}},[t._v(t._s(t._f("round5")(t.selected.balance.balance)))]),s("b-col",{staticClass:"fw-bold text-end",attrs:{sm:"2",lg:"2"}},[t._v("inStock Worth")]),s("b-col",{staticClass:"text-start",attrs:{sm:"2",lg:"2"}},[s("small",[t._v("₹ ")]),t._v(t._s(t._f("round2")(t.selected.balance.balance*t.selected.ticker.last_price)))])],1):t._e(),s("b-row",{staticClass:"pb-2 bg-secondary  text-light"},[s("b-col",{staticClass:"fw-bold text-end",attrs:{sm:"2",lg:"2"}},[t._v("My Total Coins")]),s("b-col",{staticClass:"text-start",attrs:{sm:"2",lg:"2"}},[t._v(t._s(t._f("round5")(t.selected.stock)))]),s("b-col",{staticClass:"fw-bold text-end",attrs:{sm:"2",lg:"2"}},[t._v("My Total Coins Worth")]),s("b-col",{staticClass:"text-start",attrs:{sm:"2",lg:"2"}},[s("small",[t._v("₹ ")]),t._v(t._s(t._f("round2")(t.selected.stock*t.selected.ticker.last_price)))])],1),s("b-row",{staticClass:"pb-2 bg-success text-light"},[s("b-col",{staticClass:"fw-bold text-end",attrs:{sm:"2",lg:"2"}}),s("b-col",{staticClass:"text-start",attrs:{sm:"2",lg:"2"}}),s("b-col",{staticClass:"fw-bold text-end",attrs:{sm:"2",lg:"2"}},[t._v("My Earnings")]),s("b-col",{staticClass:"text-start",attrs:{sm:"2",lg:"2"}},[s("small",[t._v("₹ ")]),t._v(" "+t._s(t._f("round2")(t.selected.earning)))])],1),s("b-row",{staticClass:"pb-2 bg-success text-light"},[s("b-col",{staticClass:"fw-bold text-end",attrs:{sm:"2",lg:"2"}},[t._v("Net BuyRate")]),s("b-col",{staticClass:"text-start",attrs:{sm:"2",lg:"2"}},[t._v(t._s(t._f("round2")(t.selected.efective_rate)))]),s("b-col",{staticClass:"fw-bold text-end",attrs:{sm:"2",lg:"2"}},[t._v("My Profit")]),s("b-col",{staticClass:"text-start",attrs:{sm:"2",lg:"2"}},[s("small",[t._v("₹ ")]),t._v(t._s(t._f("round2")(t.selected.stock*t.selected.ticker.last_price+t.selected.earning)))])],1)],1):t._e(),s("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-prevent-closing",modifiers:{"modal-prevent-closing":!0}}]},[t._v("Update Keys")]),s("b-modal",{ref:"modal",attrs:{id:"modal-prevent-closing",title:"Submit Your Name"},on:{show:t.resetModal,hidden:t.resetModal,ok:t.handleOk}},[s("form",{ref:"form",on:{submit:function(e){return e.stopPropagation(),e.preventDefault(),t.handleSubmit.apply(null,arguments)}}},[s("b-form-group",{attrs:{label:"Api Key","label-for":"api-key-input","invalid-feedback":"ApiKey is required",state:t.apiKeyState}},[s("b-form-input",{attrs:{id:"api-key-input",state:t.apiKeyState,required:""},model:{value:t.apiKey,callback:function(e){t.apiKey=e},expression:"apiKey"}})],1),s("b-form-group",{attrs:{label:"Api Secret","label-for":"api-secret-input","invalid-feedback":"ApiSecret is required",state:t.apiSecretState}},[s("b-form-input",{attrs:{id:"api-secret-input",state:t.apiSecretState,required:""},model:{value:t.apiSecret,callback:function(e){t.apiSecret=e},expression:"apiSecret"}})],1)],1)])],1)},c=[],i=s("7fa5"),o=i["a"],u=(s("8173"),s("2877")),d=Object(u["a"])(o,n,c,!1,null,"2a58e573",null),b=d.exports,f=s("5f5b"),_=s("b1e0");s("f9e3"),s("2dd8"),s("7d05");a["default"].use(f["a"]),a["default"].use(_["a"]);var m={name:"App",components:{DemoGrid:b},mounted:function(){var t=document.createElement("script");t.setAttribute("src","https://kit.fontawesome.com/1153462312.js"),document.head.appendChild(t)}},p=m,v=(s("034f"),Object(u["a"])(p,r,l,!1,null,null,null)),y=v.exports;a["default"].config.productionTip=!1,new a["default"]({render:function(t){return t(y)}}).$mount("#app")},6:function(t,e){},7:function(t,e){},"7d05":function(t,e,s){},"7fa5":function(t,e,s){"use strict";(function(t){s("fb6a"),s("d3b7"),s("25f0");var a=s("30dc"),r=s.n(a),l=s("1c46"),n=s.n(l),c=s("6612"),i=s.n(c),o="https://pure-citadel-90943.herokuapp.com/https://api.coindcx.com",u=localStorage.getItem("api_key"),d=localStorage.getItem("api_secret"),b=function(t,e){var s=e||"0,0000";return i()(t).format(s).toUpperCase()},f=0,_=0,m=function(t,e){return{key:t,ticker:{},symbol:e,buy_quantity:0,buy_amount:0,sell_quantity:0,sell_amount:0,fee_amount:0,starting_coins:0,efective_rate:0,now_rate:0}};e["a"]={name:"HelloWorld",props:{msg:String},data:function(){return{fields:[{key:"symbol",label:"Symbol",sortable:!1,variant:"dark"},{key:"now_rate",label:"Now Rate",sortable:!1,variant:"dark"},{key:"buy_rate",label:"Avg Buy Rate",sortable:!1,variant:"warning"},{key:"sell_rate",label:"Avg Sell Rate",sortable:!1,variant:"info"},{key:"efective_rate",label:"Effective Rate",variant:"success"},{key:"profit",label:"Profit",variant:"secondary"}],items:[],selected:null,ticker:null,summary:{},apiKey:u,apiKeyState:null,apiSecret:d,apiSecretState:null}},computed:{},filters:{capitalize:function(t){return t.charAt(0).toUpperCase()+t.slice(1)},round5:function(t,e){var s=e||5,a=Math.pow(10,s);return Math.round(t*a)/a},round2:function(t,e){var s=e||2,a=Math.pow(10,s);return b(Math.round(t*a)/a)}},created:function(){var t=this;t.sync_ticker(),t.sync_history(),setInterval((function(){t.sync_ticker(),t.sync_history()}),2e4)},methods:{onRowSelected:function(t){this.selected=t?t[0]:null},sortBy:function(t){this.sortKey=t,this.sortOrders[t]=-1*this.sortOrders[t]},sync_ticker:function(){var t=this,e=this.summary;r.a.get(o+"/exchange/ticker",(function(s,a,r){var l=JSON.parse(r);for(var n in l){var c=l[n];e[c.market]&&(e[c.market].ticker=c)}clearTimeout(_),_=setTimeout((function(){return t.sync_ticker()}),2e3)}))},sync_balance:function(){var e=this.summary,s=Math.floor(Date.now());console.log(s);var a={timestamp:s},l=new t(JSON.stringify(a)).toString(),c=n.a.createHmac("sha256",d).update(l).digest("hex"),i={url:o+"/exchange/v1/users/balances",headers:{"X-AUTH-APIKEY":u,"X-AUTH-SIGNATURE":c},json:!0,body:a};r.a.post(i,(function(t,s,a){var r=a;for(var l in r){var n=r[l],c=n.currency+"INR";e[c]?e[c].balance=n:"INR"==n.currency&&(e.INR={balance:n})}}))},sync_history:function(){var e=Math.floor(Date.now());console.log(e);var s={limit:5e3,timestamp:e},a=new t(JSON.stringify(s)).toString(),l=n.a.createHmac("sha256",d).update(a).digest("hex"),c={url:o+"/exchange/v1/orders/trade_history",headers:{"X-AUTH-APIKEY":u,"X-AUTH-SIGNATURE":l},json:!0,body:s},i=this;console.log("Here:Request:",c),r.a.post(c,(function(t,e,s){for(var a in i.summary)i.summary[a]=m(a,a);var r=i.summary;for(var l in s){var n=s[l],c=n.symbol;r[c]=r[c]||m(c,n.symbol),"sell"==n.side?(r[c].sell_quantity+=n.quantity-0,r[c].sell_amount+=n.price*(n.quantity-0)):(r[c].buy_quantity+=n.quantity-0,r[c].buy_amount+=n.price*(n.quantity-0)),r[c].fee_amount+=n.fee_amount-0,r[c].stock=r[c].buy_quantity-r[c].sell_quantity,r[c].net_debit=r[c].buy_amount+r[c].fee_amount,r[c].net_credit=r[c].sell_amount,r[c].earning=r[c].net_credit-r[c].net_debit,r[c].buy_rate=r[c].buy_amount/r[c].buy_quantity,r[c].sell_rate=r[c].sell_amount>0?r[c].sell_amount/r[c].sell_quantity:0,r[c].net_debit>r[c].net_credit?r[c].efective_rate=(r[c].net_debit-r[c].net_credit)/r[c].stock:r[c].efective_rate=-1*r[c].earning/r[c].stock}if(0==i.items.length)for(var o in i.summary)console.log("summary===",i.summary[o]),i.items.push(i.summary[o]);i.sync_balance(),clearTimeout(f),f=setTimeout((function(){return i.sync_history()}),5e3)}))},checkFormValidity:function(){var t=this.$refs.form.checkValidity();return this.apiKeyState=t,this.apiSecretState=t,t},resetModal:function(){},handleOk:function(t){t.preventDefault(),this.handleSubmit()},handleSubmit:function(){var t=this;this.checkFormValidity()&&(u=this.apiKey,d=this.apiSecret,localStorage.setItem("api_key",u),localStorage.setItem("api_secret",d),this.$nextTick((function(){t.$bvModal.hide("modal-prevent-closing")})))}}}}).call(this,s("b639").Buffer)},8:function(t,e){},8173:function(t,e,s){"use strict";s("17e3")},"85ec":function(t,e,s){},9:function(t,e){}});