(this["webpackJsonpdingonft-frontend"]=this["webpackJsonpdingonft-frontend"]||[]).push([[0],{11:function(n,t,e){"use strict";e.d(t,"d",(function(){return s})),e.d(t,"c",(function(){return u})),e.d(t,"b",(function(){return l})),e.d(t,"a",(function(){return d}));var r=e(10),c=e(8),a=e.n(c),i=e(177),o=e.n(i),s=function(n){if(null===n||void 0===n||"string"!==typeof n||""===n)throw new Error("Expected string input");return(BigInt(o.a.toWei(n,"gwei"))/10n).toString()},u=function(n){var t=BigInt(n)<0n;t&&(n=-n);var e=BigInt(n).toString();return(t?"-":"")+"".concat(e.replace(/\B(?=(\d{3})+(?!\d))/g,","))},l=function(n){var t=BigInt(n)<0n;t&&(n=-n);var e=(BigInt(n)/100000000n).toString();return(t?"-":"")+"".concat(e.replace(/\B(?=(\d{3})+(?!\d))/g,","))},d=function(){var n=Object(r.a)(a.a.mark((function n(t,e){var r;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=new AbortController,setTimeout((function(){return r.abort()}),3e4),n.next=4,fetch(t,{withCredentials:!0,method:"POST",signal:r.signal,headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(e)});case 4:return n.abrupt("return",n.sent.json());case 5:case"end":return n.stop()}}),n)})));return function(t,e){return n.apply(this,arguments)}}()},13:function(n,t,e){"use strict";e.d(t,"b",(function(){return s})),e.d(t,"g",(function(){return u})),e.d(t,"c",(function(){return l})),e.d(t,"r",(function(){return d})),e.d(t,"i",(function(){return f})),e.d(t,"s",(function(){return j})),e.d(t,"v",(function(){return b})),e.d(t,"n",(function(){return h})),e.d(t,"p",(function(){return m})),e.d(t,"o",(function(){return p})),e.d(t,"a",(function(){return w})),e.d(t,"d",(function(){return O})),e.d(t,"u",(function(){return N})),e.d(t,"f",(function(){return g})),e.d(t,"j",(function(){return x})),e.d(t,"k",(function(){return v})),e.d(t,"q",(function(){return y})),e.d(t,"t",(function(){return B})),e.d(t,"e",(function(){return k})),e.d(t,"h",(function(){return T})),e.d(t,"l",(function(){return S})),e.d(t,"m",(function(){return C}));var r=e(10),c=e(8),a=e.n(c),i=e(11),o="https://nftp0.dingocoin.io",s=function(){var n=Object(r.a)(a.a.mark((function n(t){var e;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(i.a)("".concat(o,"/nft/getBusy"),{address:t.address});case 2:if(null!==(e=n.sent)){n.next=7;break}return n.abrupt("return",null);case 7:return n.abrupt("return",e.busy);case 8:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),u=function(n){return Object(i.a)("".concat(o,"/nft/getContent"),{address:n.address,timestamp:n.timestamp,signature:n.signature})},l=function(n){return Object(i.a)("".concat(o,"/nft/getBuyTransaction"),{address:n.address,price:n.price})},d=function(n){return Object(i.a)("".concat(o,"/nft/sendBuyTransaction"),{transaction:n.transaction})},f=function(n){return Object(i.a)("".concat(o,"/nft/getListTransaction"),{contentHash:n.contentHash,price:n.price,royalty:n.royalty})},j=function(n){return Object(i.a)("".concat(o,"/nft/sendListTransaction"),{content:n.content,preview:n.preview,name:n.name,description:n.description,tags:n.tags,transaction:n.transaction})},b=function(n){return Object(i.a)("".concat(o,"/profile/update"),{timestamp:n.timestamp,owner:n.owner,name:n.name,signature:n.signature})},h=function(n){return Object(i.a)("".concat(o,"/nft/query"),{key:n.key,direction:n.direction,offset:n.offset,limit:n.limit})},m=function(n){return Object(i.a)("".concat(o,"/nft/queryBySearch"),{search:n.search})},p=function(n){return Object(i.a)("".concat(o,"/nft/queryByNewest"),{beforeId:n.beforeId})},O=function(n){return Object(i.a)("".concat(o,"/collection/get"),{handle:n.handle})},g=function(n){return Object(i.a)("".concat(o,"/collection/getStats"),{handle:n.handle})},x=function(n){return Object(i.a)("".concat(o,"/collection/queryByOwner"),{owner:n.owner})},v=function(n){return Object(i.a)("".concat(o,"/collection/queryBySearch"),{search:n.search})},y=function(n){return Object(i.a)("".concat(o,"/collection/queryUnassignedNftsByOwner"),{owner:n.owner})},w=function(n){return Object(i.a)("".concat(o,"/collection/create"),{timestamp:n.timestamp,owner:n.owner,handle:n.handle,name:n.name,thumbnail:n.thumbnail,description:n.description,signature:n.signature})},N=function(n){return Object(i.a)("".concat(o,"/collection/update"),{timestamp:n.timestamp,handle:n.handle,name:n.name,thumbnail:n.thumbnail,description:n.description,signature:n.signature})},B=function(n){return Object(i.a)("".concat(o,"/collection/setItem"),{timestamp:n.timestamp,address:n.address,handle:n.handle,signature:n.signature})},k=function(n){return Object(i.a)("".concat(o,"/collection/getItems"),{handle:n.handle})},T=function(n){return Object(i.a)("".concat(o,"/collection/getItemCollection"),{address:n.address})},S=function(){return Object(i.a)("".concat(o,"/collection/queryByTradeCountScaled"),{})},C=function(){return Object(i.a)("".concat(o,"/collection/queryByTradeVolume"),{})}},130:function(n,t,e){"use strict";var r=e(20),c=e(21),a=e(0);t.a=function(){return Object(a.jsxs)("div",{className:"divider-custom",children:[Object(a.jsx)("div",{className:"divider-custom-line mt-2 mb-2"}),Object(a.jsx)("div",{className:"divider-custom-icon mt-2 mb-2",children:Object(a.jsx)(r.a,{icon:c.a})}),Object(a.jsx)("div",{className:"divider-custom-line mt-2 mb-2"})]})}},187:function(n,t,e){},188:function(n,t,e){"use strict";(function(n){e(10),e(3),e(8),e(133),e(180),e(132),e(12),e(77),e(306),e(1),e(130),e(175),e(131),e(49),e(50),e(176),e(98),e(13),e(11),e(0)}).call(this,e(18).Buffer)},205:function(n,t){},211:function(n,t){},215:function(n,t){},218:function(n,t){},229:function(n,t){},259:function(n,t){},261:function(n,t){},272:function(n,t){},274:function(n,t){},287:function(n,t){},289:function(n,t){},305:function(n,t,e){"use strict";e.r(t);var r=e(1),c=e.n(r),a=e(40),i=e.n(a),o=e(10),s=e(3),u=e(8),l=e.n(u),d=(e(187),e(188),e(133)),f=(e(180),e(316)),j=(e(312),e(179),e(12)),b=e(77),h=e(117),m=(e(49),e(50),e(11),e(317),e(20)),p=e(21),O=e(0);e(13),e(98);e(9),e(130);var g=e(313),x=e(178);e(315),e(306);var v=e(314),y=e.p+"static/media/dingocoin.15331900.png",w=e(97);var N=function(){var n=c.a.useState(null),t=Object(s.a)(n,2),e=t[0],r=t[1];c.a.useEffect((function(){r(window.location.pathname)}),[]),c.a.useEffect((function(){}),[e]);var a=c.a.useState(""),i=Object(s.a)(a,2),u=i[0],N=i[1],B=c.a.useState(null),k=Object(s.a)(B,2),T=k[0],S=k[1],C=function(){var n=Object(o.a)(l.a.mark((function n(t){return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:t.preventDefault(),t.stopPropagation(),t.nativeEvent.stopImmediatePropagation(),""!==u.trim()&&window.location.assign("/explore/search?query=".concat(u.trim()));case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}();return Object(O.jsxs)(w.a,{children:[Object(O.jsxs)("div",{className:"App",children:[Object(O.jsx)(v.a,{className:"navbar",bg:"dark",expand:"lg",sticky:"top",children:Object(O.jsxs)(d.a,{children:[Object(O.jsxs)(v.a.Brand,{href:"/",className:"navbar-brand align-items-center",children:[Object(O.jsx)("img",{alt:"",src:y}),Object(O.jsx)("span",{children:"DINGOCOIN"}),Object(O.jsx)("span",{className:"navbar-brand-subtitle",children:" NFT Platform"})]}),Object(O.jsx)(v.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(O.jsxs)(v.a.Collapse,{children:[Object(O.jsxs)(f.a,{className:"ms-auto",style:{paddingRight:"1.5rem",textAlign:"center"},children:[Object(O.jsx)(f.a.Link,{href:"/explore",children:"Explore"}),Object(O.jsx)(f.a.Link,{href:"/create",children:"Create"})]}),Object(O.jsx)(j.a,{className:"d-flex",onSubmit:C,children:Object(O.jsxs)(g.a,{style:{minWidth:"20rem"},children:[Object(O.jsx)(x.a,{className:"search-box",placeholder:"Search collections and NFTs...",value:u,onChange:function(n){n.target.value.length<=50&&N(n.target.value)}}),""!==u&&Object(O.jsx)(b.a,{variant:"secondary",type:"submit",children:Object(O.jsx)(m.a,{icon:p.b})})]})})]})]})}),Object(O.jsx)("section",{className:"section-content",children:Object(O.jsx)("p",{children:"We are undergoing some minor maintenantce and will be back in half an hour."})}),Object(O.jsx)("section",{children:Object(O.jsx)("div",{className:"justify-content-center section-footer align-items-center",children:Object(O.jsx)("h6",{children:"Copyright \xa9 The Dingocoin Project 2021-2022"})})})]}),Object(O.jsxs)(h.a,{size:"md",centered:!0,show:T,onHide:function(){return S(!1)},children:[Object(O.jsx)(h.a.Header,{closeButton:!0,children:Object(O.jsx)(h.a.Title,{children:"NFT/profile not found"})}),Object(O.jsx)(h.a.Body,{children:Object(O.jsxs)(d.a,{className:"text-center my-2",children:[Object(O.jsx)("p",{children:"No results found."}),Object(O.jsx)(b.a,{className:"mx-2",onClick:function(){return S(!1)},children:"Close"})]})})]})]})};i.a.render(Object(O.jsx)(N,{}),document.getElementById("root"))},98:function(n,t,e){"use strict";var r=e(117),c=e(133),a=e(77),i=(e(1),e(0));t.a=function(n){return Object(i.jsxs)(r.a,{size:"md",centered:!0,show:n.show,onHide:n.onHide,children:[Object(i.jsx)(r.a.Header,{closeButton:!0,children:Object(i.jsx)(r.a.Title,{children:"Browser Wallet required"})}),Object(i.jsx)(r.a.Body,{children:Object(i.jsxs)(c.a,{className:"text-center my-2",children:[Object(i.jsxs)("p",{children:["You need a Dingocoin browser wallet for this.",Object(i.jsx)("br",{}),"Set it up in less than a minute."]}),Object(i.jsx)("a",{href:"https://dingocoin.org/wallets",target:"_blank",rel:"noreferrer",children:Object(i.jsx)(a.a,{className:"mx-2",children:"Get Chrome wallet"})}),Object(i.jsx)("a",{href:"https://dingocoin.org/wallets",target:"_blank",rel:"noreferrer",children:Object(i.jsx)(a.a,{className:"mx-2",children:"Get Firefox wallet"})})]})})]})}}},[[305,1,2]]]);
//# sourceMappingURL=main.6525132b.chunk.js.map