(this["webpackJsonpdingonft-frontend"]=this["webpackJsonpdingonft-frontend"]||[]).push([[0],{166:function(e,t,n){"use strict";(function(e){var a=n(14),r=n(4),c=n(8),s=n.n(c),i=n(123),l=n(175),o=n(122),u=n(10),d=n(106),j=n(299),b=n(1),x=n.n(b),h=n(30),O=n(167),f=n(121),p=n.n(f),m=n(59),v=n.n(m),g=n(60),N=n.n(g),w=n(168),y=n.n(w),T=n(61),k=n(36),S=n(20),C=n(0),F=function(e){return new Promise((function(t,n){var a=new FileReader;a.readAsDataURL(e),a.onload=function(){return t(a.result.split(",")[1])},a.onerror=function(e){return n(e)}}))};t.a=function(){var t=x.a.useState(null),n=Object(r.a)(t,2),c=n[0],b=n[1],f=x.a.useState(""),m=Object(r.a)(f,2),g=m[0],w=m[1],I=x.a.useState("1000"),B=Object(r.a)(I,2),E=B[0],P=B[1],A=x.a.useState(0),L=Object(r.a)(A,2),D=L[0],G=L[1],H=x.a.useState(""),R=Object(r.a)(H,2),q=R[0],z=R[1],V=x.a.useState(""),M=Object(r.a)(V,2),Y=M[0],K=M[1],U=x.a.useState(null),J=Object(r.a)(U,2),W=J[0],_=J[1],$=x.a.useState(""),Q=Object(r.a)($,2),X=Q[0],Z=Q[1],ee=x.a.useState(""),te=Object(r.a)(ee,2),ne=te[0],ae=te[1],re=x.a.useState(!1),ce=Object(r.a)(re,2),se=ce[0],ie=ce[1],le=x.a.useState(null),oe=Object(r.a)(le,2),ue=oe[0],de=oe[1],je=x.a.useState(null),be=Object(r.a)(je,2),xe=be[0],he=be[1],Oe=x.a.useState(!1),fe=Object(r.a)(Oe,2),pe=fe[0],me=fe[1];x.a.useEffect((function(){null!==c?c.size>1e7?w("NFT content size limit exceeded (max 10 MB)"):w(""):w("NFT content required")}),[c]),x.a.useEffect((function(){document.title="Create NFT",Object(a.a)(s.a.mark((function t(){var n;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(null===W){t.next=9;break}return t.t0=e,t.next=4,F(W);case 4:t.t1=t.sent,n=t.t0.from.call(t.t0,t.t1,"base64"),Object(O.a)(n)?W.size>1e7?Z("Cover file size limit exceeded (max 100 KB)"):256!==p()(n).width||256!==p()(n).height?Z("Cover image must have dimension 256x256"):Z(""):Z("Cover image must be a PNG"),t.next=10;break;case 9:Z("Cover image required");case 10:case"end":return t.stop()}}),t)})))()}),[W]);var ve=function(){var e=Object(a.a)(s.a.mark((function e(t){var n,a,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),t.stopPropagation(),t.nativeEvent.stopImmediatePropagation(),void 0!==window.dingo){e.next=6;break}return me(!0),e.abrupt("return");case 6:return e.t0=k.d,e.t1=N.a,e.t2=v.a,e.t3=y.a,e.next=12,F(c);case 12:return e.t4=e.sent,e.t5=e.t3.parse.call(e.t3,e.t4),e.t6=(0,e.t2)(e.t5),e.t7=e.t1.stringify.call(e.t1,e.t6),e.t8=Object(S.c)(E),e.t9=25+Math.floor(75*D/100),e.t10={contentHash:e.t7,price:e.t8,royalty:e.t9},e.next=21,(0,e.t0)(e.t10);case 21:if(null!==(n=e.sent)&&!("error"in n)){e.next=24;break}return e.abrupt("return");case 24:return e.next=26,window.dingo.requestSignTransaction([],n.vouts);case 26:if(null!==(a=e.sent.result)&&void 0!==a){e.next=29;break}return e.abrupt("return");case 29:return ie(!0),e.t11=k.f,e.next=33,F(c);case 33:if(e.t12=e.sent,null!==W){e.next=38;break}e.t13=null,e.next=41;break;case 38:return e.next=40,F(W);case 40:e.t13=e.sent;case 41:return e.t14=e.t13,e.t15=q,e.t16=Y,e.t17=ne,e.t18=a,e.t19={content:e.t12,preview:e.t14,name:e.t15,description:e.t16,tags:e.t17,transaction:e.t18},e.next=49,(0,e.t11)(e.t19);case 49:if(r=e.sent,console.log(r),null!==r&&void 0===r.error){e.next=54;break}return de(!1),e.abrupt("return");case 54:ie(!1),de(!0),he(r.address);case 57:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(C.jsxs)("div",{children:[Object(C.jsx)(i.a,{className:"App-header",children:Object(C.jsxs)(l.a,{children:[Object(C.jsx)("h1",{className:"mt-4",children:"Create NFT"}),Object(C.jsx)(h.a,{})]})}),Object(C.jsx)(i.a,{style:{maxWidth:"900px"},children:Object(C.jsx)(l.a,{children:Object(C.jsxs)(o.a,{children:[(null===ue||!1===ue)&&Object(C.jsxs)(u.a,{onSubmit:ve,children:[Object(C.jsxs)(u.a.Group,{className:"mb-3 mt-4",children:[Object(C.jsx)(u.a.Label,{children:Object(C.jsx)("b",{children:"Cover image (*required)"})}),Object(C.jsx)(u.a.Control,{type:"file",onChange:function(e){return _(e.target.files[0])},isInvalid:null!==X&&""!==X,isValid:""===X}),X&&Object(C.jsx)("div",{children:Object(C.jsx)(u.a.Text,{className:"input-error",children:X})}),Object(C.jsx)(u.a.Text,{className:"text-muted",children:"A 256x256 PNG cover image for your NFT (max 100 KB). You can't change this after creating the NFT."})]}),Object(C.jsxs)(u.a.Group,{className:"mb-3",children:[Object(C.jsx)(u.a.Label,{children:Object(C.jsx)("b",{children:"Content (*required)"})}),Object(C.jsx)(u.a.Control,{type:"file",onChange:function(e){return b(e.target.files[0])},isInvalid:null!==g&&""!==g,isValid:""===g}),g&&Object(C.jsx)("div",{children:Object(C.jsx)(u.a.Text,{className:"input-error",children:g})}),Object(C.jsx)(u.a.Text,{className:"text-muted",children:"The NFT will be locked uniquely to this file (max 10 MB). You can only use it once. Only the current owner of the NFT can download this file. It does not have to be the same as the cover. You can use any file you want, of any type."})]}),Object(C.jsxs)(u.a.Group,{className:"mb-3",children:[Object(C.jsx)(u.a.Label,{children:"NFT Name (optional)"}),Object(C.jsx)(u.a.Control,{type:"text",value:q,placeholder:"Max 40 characters",onChange:function(e){return z(e.target.value)},isValid:""!==q&&q.length<=40,isInvalid:""!==q&&q.length>40}),q.length>40&&Object(C.jsx)("div",{children:Object(C.jsx)(u.a.Text,{className:"input-error",children:"Name too long"})}),Object(C.jsx)(u.a.Text,{className:"text-muted",children:"You can't change this after creating the NFT."})]}),Object(C.jsxs)(u.a.Group,{className:"mb-3",children:[Object(C.jsx)(u.a.Label,{children:"NFT Description (optional)"}),Object(C.jsx)(u.a.Control,{type:"text",value:Y,placeholder:"Max 500 characters",onChange:function(e){return K(e.target.value)},isValid:""!==Y&&Y.length<=500,isInvalid:""!==Y&&Y.length>500}),Y.length>500&&Object(C.jsx)("div",{children:Object(C.jsx)(u.a.Text,{className:"input-error",children:"Description long"})}),Object(C.jsx)(u.a.Text,{className:"text-muted",children:"You can't change this after creating the NFT."})]}),Object(C.jsxs)(u.a.Group,{className:"mb-3",children:[Object(C.jsx)(u.a.Label,{children:"NFT Tags (optional)"}),Object(C.jsx)(u.a.Control,{type:"text",value:ne,placeholder:"Max 100 characters; space separated",onChange:function(e){return ae(e.target.value)},isValid:""!==ne&&ne.length<=100,isInvalid:""!==ne&&ne.length>100}),ne.length>100&&Object(C.jsx)("div",{children:Object(C.jsx)(u.a.Text,{className:"input-error",children:"Tags long"})}),Object(C.jsx)(u.a.Text,{className:"text-muted",children:"You can't change this after creating the NFT."})]}),Object(C.jsxs)(u.a.Group,{className:"mb-3 mt-2",children:[Object(C.jsx)(u.a.Label,{children:Object(C.jsx)("b",{children:"Listing price (*required)"})}),Object(C.jsx)(u.a.Control,{type:"text",value:E,onChange:function(e){e.target.value.match(/^[0-9]+$/)&&parseInt(e.target.value)>=1?P(e.target.value):P("1000")}}),Object(C.jsx)(u.a.Text,{className:"text-muted",children:"Initial selling price for your NFT in DINGO (min. 1 DINGO)."})]}),Object(C.jsxs)(u.a.Group,{className:"mb-3",children:[Object(C.jsxs)(u.a.Label,{children:[Object(C.jsx)("b",{children:"Creator royalty (*required): "}),(2.5+Math.floor(75*D/100)/10).toFixed(1)+"%"]}),Object(C.jsx)(u.a.Range,{value:D,onChange:function(e){return G(e.target.value)}}),Object(C.jsx)(u.a.Text,{className:"text-muted",children:"Royalty paid to you for every transaction of this NFT."})]}),Object(C.jsxs)("div",{style:{textAlign:"center"},children:[null===ue&&!1===se&&Object(C.jsx)(d.a,{className:"popup-button mt-4 px-4",variant:"primary",type:"submit",disabled:null===c||""!==g||null!==W&&""!==X,children:"Create NFT"}),null===ue&&!0===se&&Object(C.jsxs)("div",{children:[Object(C.jsx)(j.a,{animation:"border"}),Object(C.jsxs)("p",{children:["Transaction pending...",Object(C.jsx)("br",{}),"(DO NOT CLOSE THIS PAGE)"]})]}),!1===ue&&Object(C.jsx)("div",{children:Object(C.jsxs)("p",{children:["Transaction failed!",Object(C.jsx)("br",{}),"Please reload this page and try again"]})})]})]}),!0===ue&&Object(C.jsxs)("div",{style:{textAlign:"center"},children:[" ",Object(C.jsx)("h3",{children:"NFT Created!"}),Object(C.jsxs)("p",{children:["NFT Address: ",Object(C.jsx)("b",{children:xe})]}),Object(C.jsx)("div",{style:{textAlign:"center"},children:Object(C.jsx)("a",{href:"/nft?address="+xe,children:Object(C.jsx)(d.a,{className:"popup-button px-4",variant:"primary",children:"View NFT \u25ba"})})})]})]})})}),Object(C.jsx)(T.a,{show:pe,onHide:function(){return me(!1)}})]})}}).call(this,n(12).Buffer)},181:function(e,t,n){},198:function(e,t){},20:function(e,t,n){"use strict";n.d(t,"c",(function(){return l})),n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return u}));var a=n(14),r=n(8),c=n.n(r),s=n(169),i=n.n(s),l=function(e){if(null===e||void 0===e||"string"!==typeof e||""===e)throw new Error("Expected string input");return(BigInt(i.a.toWei(e,"gwei"))/10n).toString()},o=function(e){var t=BigInt(e)<0n;t&&(e=-e);var n=(BigInt(e)/100000000n).toString();return(t?"-":"")+"".concat(n.replace(/\B(?=(\d{3})+(?!\d))/g,","))},u=function(){var e=Object(a.a)(c.a.mark((function e(t,n){var a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=new AbortController,setTimeout((function(){return a.abort()}),3e4),e.next=4,fetch(t,{withCredentials:!0,method:"POST",signal:a.signal,headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(n)});case 4:return e.abrupt("return",e.sent.json());case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()},204:function(e,t){},208:function(e,t){},211:function(e,t){},222:function(e,t){},252:function(e,t){},254:function(e,t){},265:function(e,t){},267:function(e,t){},280:function(e,t){},282:function(e,t){},298:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(35),s=n.n(c),i=n(14),l=n(4),o=n(8),u=n.n(o),d=(n(181),n(166)),j=function(e){var t=new AbortController;return setTimeout((function(){return t.abort()}),5e3),fetch(e,{withCredentials:!0,method:"GET",signal:t.signal})},b=function(){var e=Object(i.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j("".concat("https://ewr1.vultrobjects.com/dingo-nftc-0-meta","/").concat(t));case 2:if(200!==(n=e.sent).status){e.next=7;break}return e.abrupt("return",n.json());case 7:return e.abrupt("return",null);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),x=function(){var e=Object(i.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return","".concat("https://ewr1.vultrobjects.com/dingo-nftc-0-preview","/").concat(t,".png"));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h=function(){var e=Object(i.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j("".concat("https://ewr1.vultrobjects.com/dingo-nftc-0-state","/").concat(t));case 2:if(200!==(n=e.sent).status){e.next=7;break}return e.abrupt("return",n.json());case 7:return e.abrupt("return",null);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),O=function(){var e=Object(i.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j("".concat("https://ewr1.vultrobjects.com/dingo-nftc-0-profile","/").concat(t));case 2:if(200!==(n=e.sent).status){e.next=7;break}return e.abrupt("return",n.json());case 7:return e.abrupt("return",null);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=Object(i.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j("".concat("https://ewr1.vultrobjects.com/dingo-nftc-0-profilelists","/").concat(t));case 2:if(200!==(n=e.sent).status){e.next=7;break}return e.abrupt("return",n.json());case 7:return e.abrupt("return",null);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=Object(i.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j("".concat("https://ewr1.vultrobjects.com/dingo-nftc-0-explore","/").concat(t));case 2:if(200!==(n=e.sent).status){e.next=7;break}return e.abrupt("return",n.json());case 7:return e.abrupt("return",null);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),m=n(304),v=n(20),g=n(31),N=n(32),w=n(0);var y=function(e){var t=r.a.useRef(),n=r.a.useState(!1),a=Object(l.a)(n,2),c=a[0],s=a[1],o=r.a.useState(null),d=Object(l.a)(o,2),j=d[0],O=d[1],f=r.a.useState(null),p=Object(l.a)(f,2),y=p[0],T=p[1],k=r.a.useState(null),S=Object(l.a)(k,2),C=S[0],F=S[1],I=r.a.useState(null),B=Object(l.a)(I,2),E=B[0],P=B[1];return r.a.useEffect((function(){var e=new IntersectionObserver((function(e){e.forEach((function(e){e.isIntersecting&&s(!0)}))}));return e.observe(t.current),function(){try{e.unobserve(t.current)}catch(n){}}}),[]),r.a.useEffect((function(){Object(i.a)(u.a.mark((function t(){var n,a,r;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!c){t.next=14;break}return t.next=3,b(e.address);case 3:return n=t.sent,t.next=6,x(e.address);case 6:return a=t.sent,t.next=9,h(e.address);case 9:r=t.sent,O(a),T(null===n?null:n.name),F(null===r?null:r.price),P(null===r?null:r.stats);case 14:case"end":return t.stop()}}),t)})))()}),[e.address,c]),Object(w.jsxs)(m.a,{className:"nft-card floating-borders floating-borders-press",ref:t,children:[Object(w.jsxs)("div",{className:"header-box",children:[Object(w.jsx)("div",{className:"spinner",children:Object(w.jsx)("div",{className:"spinner-border text-primary",role:"status",children:Object(w.jsx)("span",{className:"sr-only",children:"Loading..."})})}),Object(w.jsx)(m.a.Img,{variant:"top",src:j,loading:"lazy"})]}),Object(w.jsx)("hr",{}),Object(w.jsxs)(m.a.Body,{children:[Object(w.jsx)(m.a.Title,{children:null===y?"-":""===y?"Unnamed NFT":y}),Object(w.jsx)(m.a.Subtitle,{children:e.address}),Object(w.jsxs)(m.a.Text,{children:[Object(w.jsx)("span",{className:"card-price",children:null===C?"-":Object(v.b)(C)}),Object(w.jsx)("br",{}),Object(w.jsx)("span",{className:"card-price-subtitle",children:"DINGO"})]})]}),Object(w.jsx)("hr",{}),Object(w.jsxs)("div",{className:"card-sub-body",children:[Object(w.jsxs)("span",{className:"align-middle",children:[Object(w.jsx)(g.a,{icon:N.d})," ",null===E?"-":Object(v.b)(E.volume)]}),"\xa0\xa0\xa0",Object(w.jsxs)("span",{className:"align-middle",children:[Object(w.jsx)(g.a,{icon:N.c})," ",null===E?"-":E.nonce]})]})]})},T=n(123),k=n(175),S=n(10),C=n(106),F=n(30),I=n(59),B=n.n(I),E=n(60),P=n.n(E),A=n(36),L=n(61);var D=function(){var e=r.a.useState(null),t=Object(l.a)(e,2),n=t[0],a=t[1],c=r.a.useState(null),s=Object(l.a)(c,2),o=s[0],d=s[1],j=r.a.useState(null),x=Object(l.a)(j,2),f=x[0],p=x[1],m=r.a.useState(null),g=Object(l.a)(m,2),N=g[0],I=g[1],E=r.a.useState(null),D=Object(l.a)(E,2),G=D[0],H=D[1],R=r.a.useState(void 0),q=Object(l.a)(R,2),z=q[0],V=q[1],M=r.a.useState(""),Y=Object(l.a)(M,2),K=Y[0],U=Y[1],J=r.a.useState(""),W=Object(l.a)(J,2),_=W[0],$=W[1],Q=r.a.useState(null),X=Object(l.a)(Q,2),Z=X[0],ee=X[1],te=r.a.useState(!1),ne=Object(l.a)(te,2),ae=ne[0],re=ne[1];r.a.useEffect((function(){a(new URLSearchParams(window.location.search).get("address"))}),[]),r.a.useEffect((function(){""===K?$("Resell price required"):null!==f&&BigInt(Object(v.c)(K))>BigInt(10)*BigInt(f.price)?$("Resell price must be at most 10x the current price"):$("")}),[K,f]),r.a.useEffect((function(){document.title="NFT | ".concat(n),null!==n&&Object(i.a)(u.a.mark((function e(){var t,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b(n);case 2:return t=e.sent,d(t),e.next=6,h(n);case 6:if(a=e.sent,p(a),null===a){e.next=20;break}return document.title="NFT | ".concat(t.name),e.t0=I,e.next=13,O(a.owner);case 13:return e.t1=e.sent,(0,e.t0)(e.t1),e.t2=H,e.next=18,O(a.creator);case 18:e.t3=e.sent,(0,e.t2)(e.t3);case 20:return e.t4=V,e.next=23,Object(A.a)({address:n});case 23:e.t5=e.sent,(0,e.t4)(e.t5);case 25:case"end":return e.stop()}}),e)})))()}),[n]);var ce=function(){var e=Object(i.a)(u.a.mark((function e(t){var a,r,c,s;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),t.stopPropagation(),void 0!==window.dingo){e.next=5;break}return re(!0),e.abrupt("return");case 5:return a=Date.now(),r="".concat(n,"|").concat(a),e.next=9,window.dingo.requestSign(P.a.stringify(B()(r)));case 9:if(void 0===(c=e.sent).error){e.next=12;break}return e.abrupt("return");case 12:return e.next=14,Object(A.c)({address:n,timestamp:a,signature:c.result});case 14:if(null!==(s=e.sent)&&void 0===s.error){e.next=17;break}return e.abrupt("return");case 17:void 0!==s.content&&window.open(s.content);case 18:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),se=function(){var e=Object(i.a)(u.a.mark((function e(t){var a,r,c,s,i;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),t.stopPropagation(),void 0!==window.dingo){e.next=5;break}return re(!0),e.abrupt("return");case 5:return e.next=7,Object(A.b)({address:n,price:Object(v.c)(K)});case 7:return a=e.sent,r=a.vins,c=a.vouts,e.next=12,window.dingo.requestSignTransaction(r,c);case 12:if(null!==(s=e.sent.result)&&void 0!==s){e.next=15;break}return e.abrupt("return");case 15:return e.next=17,Object(A.e)({transaction:s});case 17:i=e.sent,ee(i);case 19:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(w.jsxs)("div",{children:[Object(w.jsxs)(T.a,{className:"justify-content-md-center",children:[Object(w.jsxs)(k.a,{children:[Object(w.jsx)("div",{className:"cards-container",children:Object(w.jsx)(y,{address:n})}),null!==o&&null!==o.description&&""!==o.description&&Object(w.jsx)("p",{className:"text-center mt-4",children:Object(w.jsx)("i",{children:o.description})})]}),Object(w.jsx)(F.a,{}),Object(w.jsxs)(k.a,{className:"text-center",children:[Object(w.jsx)("h3",{children:"Owner"}),Object(w.jsx)("p",{children:Object(w.jsx)("a",{className:"simple-link",href:null===f?"":"/profile?address=".concat(f.owner),style:{fontSize:"0.9rem"},children:null===N||null===N.name||""===N.name?null===f?"-":f.owner:N.name})}),Object(w.jsx)("h3",{className:"mt-2",children:"Creator"}),Object(w.jsx)("a",{className:"simple-link",href:null===f?"":"/profile?address=".concat(f.creator),style:{fontSize:"0.9rem"},children:null===G||null===G.name||""===G.name?null===f?"-":f.creator:G.name}),void 0!==f&&null!==f&&Object(w.jsxs)("div",{children:[Object(w.jsx)("h3",{className:"mt-4",children:"Hidden Content"}),Object(w.jsx)("div",{className:"clickable mb-2",onClick:ce,style:{display:"inline"},children:"(Verify and view)"})]}),void 0!==f&&null!==f&&Object(w.jsxs)("div",{children:[Object(w.jsx)("h3",{className:"mt-4",children:"Trade Volume"}),Object(w.jsx)("p",{children:null===f?"-":Object(v.b)(f.stats.volume)})]})]}),Object(w.jsx)(F.a,{}),void 0!==z&&null!==z&&Object(w.jsxs)(k.a,{className:"justify-content-md-center mt-2 text-center",children:[Object(w.jsx)("h2",{children:"Buy NFT"}),Object(w.jsxs)("div",{style:{textAlign:"center"},className:"mt-4",children:[" ",Object(w.jsx)("h5",{children:"NFT busy"}),Object(w.jsxs)("p",{children:[Object(w.jsx)("a",{className:"simple-link",href:"https://openchains.info/coin/dingocoin/tx/"+z.txid,rel:"noreferrer",target:"_blank",children:"A transaction"})," ","is currenly being confirmed for this NFT. ",Object(w.jsx)("br",{}),"Please try again in a few minutes."]})]})]}),void 0!==z&&null===z&&Object(w.jsxs)(k.a,{className:"justify-content-md-center mt-2 text-center",children:[Object(w.jsx)("h2",{children:"Buy NFT"}),null==Z&&Object(w.jsxs)(T.a,{className:"justify-content-md-center",children:[Object(w.jsx)(k.a,{className:"mx-auto",style:{maxWidth:"35rem"},children:Object(w.jsxs)(S.a.Group,{className:"mb-3 mt-3",children:[Object(w.jsx)(S.a.Label,{children:Object(w.jsx)("b",{children:"Resell at (*required)"})}),Object(w.jsx)(S.a.Control,{type:"text",value:K,onChange:function(e){e.target.value.match(/^[0-9]*$/)&&U(e.target.value)},style:{textAlign:"center"},isInvalid:""!==_}),_&&Object(w.jsx)("div",{children:Object(w.jsx)(S.a.Text,{className:"input-error",children:_})}),Object(w.jsx)(S.a.Text,{className:"text-muted",children:"New price you want to sell this NFT for (min. 1 Dingocoin)."})]})}),Object(w.jsx)(k.a,{children:Object(w.jsx)(C.a,{className:"popup-button mb-4 mx-auto px-4",style:{width:"auto"},onClick:se,disabled:""!==_,children:"Buy and resell NFT"})})]}),null!==Z&&void 0===Z.error&&Object(w.jsx)(T.a,{children:Object(w.jsxs)("div",{style:{textAlign:"center"},className:"mt-4",children:[" ",Object(w.jsx)("h4",{children:"Transaction submitted!"}),Object(w.jsxs)("p",{children:["Transaction ID:"," ",Object(w.jsx)("a",{className:"simple-link",href:"https://openchains.info/coin/dingocoin/tx/"+Z.txid,rel:"noreferrer",target:"_blank",children:Z.txid}),Object(w.jsx)("br",{}),"It may take a few minutes for your transaction to be confirmed."]})]})}),null!==Z&&void 0!==Z.error&&Object(w.jsx)(T.a,{children:Object(w.jsxs)("div",{style:{textAlign:"center"},className:"mt-4",children:[" ",Object(w.jsx)("h4",{children:"Transaction failed!"}),Object(w.jsxs)("p",{children:["- Make sure that your wallet has no pending transaction.",Object(w.jsx)("br",{}),"- You can't buy this NFT as its owner/creator."]})]})})]})]}),Object(w.jsx)(L.a,{show:ae,onHide:function(){return re(!1)}})]})},G=n(302),H=n(305),R=n(107);var q=function(){var e=r.a.useState(null),t=Object(l.a)(e,2),n=t[0],a=t[1],c=r.a.useState(null),s=Object(l.a)(c,2),o=s[0],d=s[1],j=r.a.useState(""),b=Object(l.a)(j,2),x=b[0],h=b[1],p=r.a.createRef(),m=r.a.useState(null),v=Object(l.a)(m,2),g=v[0],N=v[1],I=r.a.useState(null),E=Object(l.a)(I,2),D=E[0],q=E[1],z=r.a.useState(!1),V=Object(l.a)(z,2),M=V[0],Y=V[1];r.a.useEffect((function(){a(new URLSearchParams(window.location.search).get("address"))}),[]),r.a.useEffect((function(){null!==n&&(document.title="Profile | ".concat(n),Object(i.a)(u.a.mark((function e(){var t,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O(n);case 2:return t=e.sent,e.next=5,f(n);case 5:a=e.sent,N(t),q({createdNfts:a.createdNfts.reverse(),ownedNfts:a.ownedNfts.reverse()}),null!==t&&(null===t.name?h(""):(h(t.name),document.title="Profile | ".concat(t.name)));case 9:case"end":return e.stop()}}),e)})))())}),[n]);var K=function(){var e=Object(i.a)(u.a.mark((function e(t){var a,r,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),t.stopPropagation(),t.nativeEvent.stopImmediatePropagation(),void 0!==window.dingo){e.next=6;break}return Y(!0),e.abrupt("return");case 6:return a={timestamp:Date.now(),owner:n,name:null===x||""===x?null:x},r=JSON.stringify(a),console.log(r),e.next=11,window.dingo.requestSign(P.a.stringify(B()(r)));case 11:if(void 0===(c=e.sent).error){e.next=14;break}return e.abrupt("return");case 14:return a.signature=c.result,e.next=17,Object(A.g)(a);case 17:if(!("error"in e.sent)){e.next=20;break}return e.abrupt("return");case 20:window.location.reload(!1);case 21:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(w.jsxs)("div",{children:[Object(w.jsx)(T.a,{className:"App-header",children:Object(w.jsxs)(k.a,{children:[Object(w.jsx)("h1",{className:"mt-4",children:null===g?"-":""===g.name||null===g.name?"Unnamed Profile":g.name}),Object(w.jsx)("h6",{children:n}),Object(w.jsx)("p",{children:Object(w.jsx)("span",{children:Object(w.jsx)("div",{className:"clickable",style:{display:"inline"},onClick:function(){return d(!0)},children:"(Edit)"})})}),Object(w.jsx)(F.a,{})]})}),Object(w.jsxs)(G.a,{defaultActiveKey:null===D||0===D.createdNfts.length?"owned":"created",className:"justify-content-center",variant:"pills",children:[Object(w.jsx)(H.a,{eventKey:"created",title:"NFT Creations",children:null!==D&&Object(w.jsx)("ul",{className:"cards-container",children:D.createdNfts.map((function(e){return Object(w.jsx)("a",{href:"/nft?address=".concat(e),children:Object(w.jsx)(y,{address:e},e)})}))})}),Object(w.jsx)(H.a,{eventKey:"owned",title:"Owned NFTs",children:null!==D&&Object(w.jsx)("ul",{className:"cards-container",children:D.ownedNfts.map((function(e){return Object(w.jsx)("a",{href:"/nft?address=".concat(e),children:Object(w.jsx)(y,{address:e},e)})}))})})]}),Object(w.jsxs)(R.a,{size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0,show:o,onHide:function(){return d(!1)},onEntered:function(){return p.current.focus()},children:[Object(w.jsx)(R.a.Header,{closeButton:!0,children:Object(w.jsx)(R.a.Title,{id:"contained-modal-title-vcenter",children:"Edit profile"})}),Object(w.jsx)(R.a.Body,{children:Object(w.jsxs)(S.a,{onSubmit:K,children:[Object(w.jsxs)(S.a.Group,{className:"mb-3",children:[Object(w.jsx)(S.a.Label,{children:"Profile name (leave blank if no change)"}),Object(w.jsx)(S.a.Control,{type:"text",value:x,placeholder:"Max 40 characters",onChange:function(e){return h(e.target.value)},isValid:""!==x&&x.length<=40,isInvalid:""!==x&&x.length>40,ref:p}),x.length>40&&Object(w.jsx)("div",{children:Object(w.jsx)(S.a.Text,{className:"input-error",children:"Name too long"})})]}),Object(w.jsx)("div",{style:{textAlign:"center"},children:Object(w.jsx)(C.a,{className:"popup-button mb-3 mt-3 px-4",variant:"primary",type:"submit",children:"Verify and update profile"})})]})})]}),Object(w.jsx)(L.a,{show:M,onHide:function(){return Y(!1)}})]})};var z=function(){var e=r.a.useState(null),t=Object(l.a)(e,2),n=t[0],a=t[1],c=r.a.useState(null),s=Object(l.a)(c,2),o=s[0],d=s[1];return r.a.useEffect((function(){document.title="Explore NFTs",Object(i.a)(u.a.mark((function e(){var t,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p("new");case 2:return t=e.sent,e.next=5,p("volume");case 5:n=e.sent,a(t),d(n);case 8:case"end":return e.stop()}}),e)})))()}),[]),Object(w.jsxs)("div",{children:[Object(w.jsx)(T.a,{className:"App-header",children:Object(w.jsxs)(k.a,{children:[Object(w.jsx)("h1",{className:"mt-4",children:"Explore NFTs"}),Object(w.jsx)(F.a,{})]})}),Object(w.jsxs)(G.a,{defaultActiveKey:"new",className:"justify-content-center",variant:"pills",children:[Object(w.jsx)(H.a,{eventKey:"volume",title:"Hot NFTS",children:null!==o&&Object(w.jsx)("ul",{className:"cards-container",children:o.map((function(e){return Object(w.jsx)("a",{href:"/nft?address=".concat(e),children:Object(w.jsx)(y,{address:e},e)})}))})}),Object(w.jsx)(H.a,{eventKey:"new",title:"New listings",children:null!==n&&Object(w.jsx)("ul",{className:"cards-container",children:n.map((function(e){return Object(w.jsx)("a",{href:"/nft?address=".concat(e),children:Object(w.jsx)(y,{address:e},e)})}))})})]})]})},V=n(303),M=n(174),Y=n(170),K=n.p+"static/media/dingocoin.15331900.png",U=n(172),J=n(9),W=n(122);var _=function(){return Object(w.jsx)("div",{children:Object(w.jsx)("header",{className:"section-a",id:"home",children:Object(w.jsx)("div",{className:"particles-container",children:Object(w.jsxs)(T.a,{className:"masthead text-center",children:[Object(w.jsx)(k.a,{children:Object(w.jsx)(W.a,{children:Object(w.jsx)("div",{className:"isometric-holder",children:Object(w.jsx)("div",{className:"isometric"})})})}),Object(w.jsxs)(k.a,{children:[Object(w.jsx)("p",{className:"masthead-title mt-4 mb-2",children:"Dingocoin NFT Platform"}),Object(w.jsx)("p",{className:"mb-4",children:"The next generation of NFTs"})]}),Object(w.jsxs)(k.a,{className:"pt-3 pb-2",children:[Object(w.jsx)(W.a,{children:Object(w.jsxs)("div",{className:"project-card mx-auto",children:[Object(w.jsx)("div",{className:"logo-holder",children:Object(w.jsx)(g.a,{className:"faicon",icon:N.e})}),Object(w.jsx)("h5",{children:"On-chain Trading"}),Object(w.jsx)("p",{children:"You receive earnings and royalties immediately"})]})}),Object(w.jsx)(W.a,{children:Object(w.jsxs)("div",{className:"project-card mx-auto",children:[Object(w.jsx)("div",{className:"logo-holder",children:Object(w.jsx)(g.a,{className:"faicon",icon:N.g})}),Object(w.jsx)("h5",{children:"Ultra-low Costs"}),Object(w.jsxs)("p",{children:["Create and trade NFTs with ","<$0.001"," gas fees"]})]})}),Object(w.jsx)(W.a,{children:Object(w.jsxs)("div",{className:"project-card mx-auto",children:[Object(w.jsx)("div",{className:"logo-holder",children:Object(w.jsx)(g.a,{className:"faicon",icon:N.f})}),Object(w.jsx)("h5",{children:"Cryptographically Unique"}),Object(w.jsx)("p",{children:"The same content can never be reused in another NFT"})]})})]}),Object(w.jsx)(F.a,{}),Object(w.jsx)(k.a,{children:Object(w.jsx)("h1",{className:"mt-4",children:"Get started now!"})}),Object(w.jsxs)(k.a,{className:"quick-actions flex-wrap justify-content-md-center mt-4",children:[Object(w.jsx)("a",{href:"/explore",children:Object(w.jsx)(C.a,{className:"popup-button px-4 py-2 mb-4",variant:"primary",children:"Explore NFTs"})}),Object(w.jsx)("a",{href:"/create",children:Object(w.jsx)(C.a,{className:"popup-button px-4 py-2 mb-4",variant:"primary",children:"Create an NFT"})}),Object(w.jsx)("a",{children:Object(w.jsx)(C.a,{className:"popup-button px-4 py-2 mb-4",variant:"primary",disabled:!0,children:"How does this work?"})})]})]})})})})};var $=function(){var e=r.a.useState(null),t=Object(l.a)(e,2),n=t[0],a=t[1];r.a.useEffect((function(){a(window.location.pathname)}),[]),r.a.useEffect((function(){}),[n]);var c=r.a.useState(""),s=Object(l.a)(c,2),o=s[0],j=s[1],x=r.a.useState(null),h=Object(l.a)(x,2),f=h[0],p=h[1],m=function(){var e=Object(i.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),t.stopPropagation(),t.nativeEvent.stopImmediatePropagation(),j(o.trim()),""===o.trim()){e.next=16;break}return e.next=7,b(o.trim());case 7:if(null===e.sent){e.next=12;break}window.location.assign("/nft?address=".concat(o.trim())),e.next=16;break;case 12:return e.next=14,O(o.trim());case 14:null!==e.sent?window.location.assign("/profile?address=".concat(o.trim())):p(!0);case 16:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(w.jsxs)(U.a,{children:[Object(w.jsxs)("div",{className:"App",children:[Object(w.jsx)(V.a,{className:"navbar",bg:"dark",expand:"lg",sticky:"top",children:Object(w.jsxs)(T.a,{children:[Object(w.jsxs)(V.a.Brand,{href:"/",className:"navbar-brand align-items-center",children:[Object(w.jsx)("img",{alt:"",src:K}),Object(w.jsx)("span",{children:"DINGOCOIN"}),Object(w.jsx)("span",{className:"navbar-brand-subtitle",children:" NFT Platform"})]}),Object(w.jsx)(V.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(w.jsxs)(V.a.Collapse,{children:[Object(w.jsxs)(M.a,{className:"ms-auto",style:{paddingRight:"1.5rem",textAlign:"center"},children:[Object(w.jsx)(M.a.Link,{href:"/",children:"Home"}),Object(w.jsx)(M.a.Link,{href:"/explore",children:"Explore NFTs"}),Object(w.jsx)(M.a.Link,{href:"/create",children:"Create"})]}),Object(w.jsxs)(S.a,{className:"d-flex",onSubmit:m,children:[Object(w.jsx)(Y.a,{type:"search",placeholder:"Jump to NFT/profile address...","aria-label":"Search",style:{borderTopRightRadius:"0",borderBottomRightRadius:"0",minWidth:"20rem"},value:o,onChange:function(e){return j(e.target.value)}}),Object(w.jsx)(C.a,{variant:"secondary mx-0",style:{borderTopLeftRadius:"0",borderBottomLeftRadius:"0"},type:"submit",children:Object(w.jsx)(g.a,{icon:N.b})})]})]})]})}),Object(w.jsx)("section",{className:"section-content",children:Object(w.jsxs)(J.c,{children:[Object(w.jsx)(J.a,{path:"/create",element:Object(w.jsx)(d.a,{})}),Object(w.jsx)(J.a,{path:"/profile",element:Object(w.jsx)(q,{})}),Object(w.jsx)(J.a,{path:"/nft",element:Object(w.jsx)(D,{})}),Object(w.jsx)(J.a,{path:"/explore",element:Object(w.jsx)(z,{})}),Object(w.jsx)(J.a,{path:"/",element:Object(w.jsx)(_,{})}),Object(w.jsx)(J.a,{path:"*",element:Object(w.jsx)(_,{})})]})}),Object(w.jsx)("section",{children:Object(w.jsx)("div",{className:"justify-content-center section-footer align-items-center",children:Object(w.jsx)("h6",{children:"Copyright \xa9 The Dingocoin Project 2021-2022"})})})]}),Object(w.jsxs)(R.a,{size:"md","aria-labelledby":"contained-modal-title-vcenter",centered:!0,show:f,onHide:function(){return p(!1)},children:[Object(w.jsx)(R.a.Header,{closeButton:!0,children:Object(w.jsx)(R.a.Title,{id:"contained-modal-title-vcenter",children:"NFT/profile not found"})}),Object(w.jsx)(R.a.Body,{children:Object(w.jsxs)(T.a,{className:"text-center my-2",children:[Object(w.jsx)("p",{children:"No results found."}),Object(w.jsx)(C.a,{className:"mx-2",onClick:function(){return p(!1)},children:"Close"})]})})]})]})};s.a.render(Object(w.jsx)($,{}),document.getElementById("root"))},30:function(e,t,n){"use strict";var a=n(31),r=n(32),c=n(0);t.a=function(){return Object(c.jsxs)("div",{className:"divider-custom",children:[Object(c.jsx)("div",{className:"divider-custom-line mt-2 mb-2"}),Object(c.jsx)("div",{className:"divider-custom-icon mt-2 mb-2",children:Object(c.jsx)(a.a,{icon:r.a})}),Object(c.jsx)("div",{className:"divider-custom-line mt-2 mb-2"})]})}},36:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"c",(function(){return o})),n.d(t,"b",(function(){return u})),n.d(t,"e",(function(){return d})),n.d(t,"d",(function(){return j})),n.d(t,"f",(function(){return b})),n.d(t,"g",(function(){return x}));var a=n(14),r=n(8),c=n.n(r),s=n(20),i="https://nftp0.dingocoin.io",l=function(){var e=Object(a.a)(c.a.mark((function e(t){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(s.a)("".concat(i,"/nft/getBusy"),{address:t.address});case 2:if(null!==(n=e.sent)){e.next=7;break}return e.abrupt("return",null);case 7:return e.abrupt("return",n.busy);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),o=function(e){return Object(s.a)("".concat(i,"/nft/getContent"),{address:e.address,timestamp:e.timestamp,signature:e.signature})},u=function(e){return Object(s.a)("".concat(i,"/nft/getBuyTransaction"),{address:e.address,price:e.price})},d=function(e){return Object(s.a)("".concat(i,"/nft/sendBuyTransaction"),{transaction:e.transaction})},j=function(e){return Object(s.a)("".concat(i,"/nft/getListTransaction"),{contentHash:e.contentHash,price:e.price,royalty:e.royalty})},b=function(e){return Object(s.a)("".concat(i,"/nft/sendListTransaction"),{content:e.content,preview:e.preview,name:e.name,description:e.description,tags:e.tags,transaction:e.transaction})},x=function(e){return Object(s.a)("".concat(i,"/profile/update"),{timestamp:e.timestamp,owner:e.owner,name:e.name,signature:e.signature})}},61:function(e,t,n){"use strict";var a=n(107),r=n(123),c=n(106),s=(n(1),n(0));t.a=function(e){return Object(s.jsxs)(a.a,{size:"md","aria-labelledby":"contained-modal-title-vcenter",centered:!0,show:e.show,onHide:e.onHide,children:[Object(s.jsx)(a.a.Header,{closeButton:!0,children:Object(s.jsx)(a.a.Title,{id:"contained-modal-title-vcenter",children:"Browser Wallet required"})}),Object(s.jsx)(a.a.Body,{children:Object(s.jsxs)(r.a,{className:"text-center my-2",children:[Object(s.jsxs)("p",{children:["You need a Dingocoin browser wallet for this.",Object(s.jsx)("br",{}),"Set it up in less than a minute."]}),Object(s.jsx)("a",{href:"https://dingocoin.org/wallets",target:"_blank",rel:"noreferrer",children:Object(s.jsx)(c.a,{className:"mx-2",children:"Get Chrome wallet"})}),Object(s.jsx)("a",{href:"https://dingocoin.org/wallets",target:"_blank",rel:"noreferrer",children:Object(s.jsx)(c.a,{className:"mx-2",children:"Get Firefox wallet"})})]})})]})}}},[[298,1,2]]]);
//# sourceMappingURL=main.a89ad0d7.chunk.js.map