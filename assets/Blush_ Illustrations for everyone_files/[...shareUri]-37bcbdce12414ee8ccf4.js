(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9855],{77947:function(e,t,n){"use strict";n.d(t,{K:function(){return J}});var i=n(81976),r=n(64790),a=n(96451),l=n(7002),o=n.n(l),s=n(34885),c=n(94745),d=n(10426),u=n(4778),h=n(25712),v=n(21134),f=n(93192),x=n(92255),m=n(70293),p=n(53588),j=n(40238),b=n(72694),g=n(47808),y=x.ZP.table.withConfig({displayName:"Table",componentId:"sc-1belwv0-0"})(["width:100%;margin:16px 0;thead tr td{padding-bottom:12px;}}tr{width:100%;border-bottom:",";}td{text-align:left;vertical-align:middle;padding:",";&:last-child{text-align:right;}a{color:",";}}"],(function(e){return e.border?g.rS.border.default:"none"}),(function(e){return e.compact?e.border?"8px 0":"4px 0":e.border?"24px 0":"16px 0"}),g.rS.colors.active),w=n(98266),k=n(32887),O=n(24382),D=n(88349),C=function(e){var t,n=e.collectionEditingState,i=e.style,a=e.teamId,l=(0,s.useState)(!1),c=l[0],d=l[1],u=n.data,h=(0,w.nh)(null!==(t=null===u||void 0===u?void 0:u.id)&&void 0!==t?t:null),v=h.data,f=h.loading,x=h.refresh;return u?!v&&f?(0,D.jsx)("div",{style:{padding:24},children:(0,D.jsx)(b.T,{})}):(0,D.jsxs)(P,{border:!0,style:i,children:[(0,D.jsx)("thead",{children:(0,D.jsxs)("tr",{children:[(0,D.jsx)("td",{}),(0,D.jsx)("td",{children:(0,D.jsx)("small",{children:"Name"})}),(0,D.jsx)("td",{children:(0,D.jsx)("small",{children:"Created"})}),(0,D.jsx)("td",{children:(0,D.jsx)("small",{children:"Published"})}),(0,D.jsx)("td",{children:(0,D.jsx)("small",{children:"Actions"})})]})}),(0,D.jsx)("tbody",{children:null===v||void 0===v?void 0:v.versions.map((function(e){var t=v.publishedVersion===e.version;return(0,D.jsxs)(I,{onClick:function(){(0,k.ZJ)(a,v.id,e.version)},$active:e.version===u.version,children:[(0,D.jsx)("td",{style:{padding:8},children:(0,D.jsxs)("small",{children:["v",e.version]})}),(0,D.jsx)("td",{children:(0,D.jsx)("div",{children:(0,D.jsxs)("small",{children:[e.numberOfMasters," Masters,"," ",e.numberOfComponents," Components"]})})}),(0,D.jsx)("td",{children:(0,D.jsx)("small",{children:(0,O.HW)(e.createdAt)})}),(0,D.jsx)("td",{children:(0,D.jsx)(j.du,{style:{justifyContent:"center"},children:(0,D.jsx)("small",{children:t?(0,D.jsx)(j.du,{$gap:"8px",style:{justifyContent:"start"},children:(0,D.jsx)(m.J,{type:"check",color:"success"})}):e.wasPublished?(0,D.jsx)(j.du,{$gap:"8px",style:{justifyContent:"start"},children:(0,D.jsx)(m.J,{type:"check",color:"ink-100"})}):"No"})})}),(0,D.jsx)("td",{children:(0,D.jsx)(j.du,{style:{justifyContent:"center"},children:(0,D.jsx)(p.z,{variant:t?"danger":"secondary",size:"sm",disabled:c,onClick:(0,r.Z)(o().mark((function t(){return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return d(!0),t.next=3,n.handlePublish(e.version);case 3:x(),d(!1);case 5:case"end":return t.stop()}}),t)}))),children:t?"Unpublish":"Publish"})})})]},e.version)}))})]}):null},P=(0,x.ZP)(y).withConfig({displayName:"History__StyledTable",componentId:"sc-wyzejm-0"})(["width:100%;max-width:100%;margin-top:0;"]),I=x.ZP.tr.withConfig({displayName:"History__Tr",componentId:"sc-wyzejm-1"})([":hover td{background:",";cursor:pointer;}td{background:",";padding:12px 8px;}"],(function(e){return e.$active?g.rS.colors.active:g.rS.colors.lightest}),(function(e){return e.$active?g.rS.colors.active:g.rS.colors.white})),S=n(50790),N=n(78566),_=n(34531),Z=n(36809),E=n(61542),z=n(77701),T=n(39589),A=n(36592),B=n(80562);function M(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function U(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?M(Object(n),!0).forEach((function(t){(0,i.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):M(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var J=function(e){var t,n,l=e.collectionId,x=e.initialCollectionData,j=e.teamId,b=(0,c.useRouter)(),g=(0,_.p)(),y=(0,s.useState)(!1),O=y[0],P=y[1],I=(0,w.Kx)(l,x),M=I.data,J=(0,w.nh)(null!==(t=null===M||void 0===M?void 0:M.id)&&void 0!==t?t:null).data,K=b.route.startsWith("/collections/"),V=(null===J||void 0===J?void 0:J.publishedVersion)===(null===M||void 0===M?void 0:M.version),$=Math.max.apply(Math,(0,a.Z)(null!==(n=null===J||void 0===J?void 0:J.versions.map((function(e){return e.version})))&&void 0!==n?n:[]))===(null===M||void 0===M?void 0:M.version),H=!(null!==M&&void 0!==M&&M.archived)&&!V&&$,R=!V&&!$,W=(0,N.bu)(N.s);return M?(0,D.jsx)(u.g,{className:"dark",children:(0,D.jsxs)("div",{className:"flex w-full items-center justify-between",children:[(0,D.jsxs)(T.K,{gap:2,className:"items-center",children:[(0,D.jsx)(h.O,{darkMode:!0}),(0,D.jsx)(p.z,{variant:"naked",iconLeft:"close",onClick:k.SD,children:"Exit Editor Mode"})]}),M&&(0,D.jsxs)(T.K,{gap:4,className:"items-center",children:[M.archived&&(0,D.jsx)(D.Fragment,{children:"This collection has been archived"}),V&&(0,D.jsxs)(T.K,{gap:2,className:"items-center mr-4",children:[(0,D.jsx)("span",{children:"Published"}),(0,D.jsx)(m.J,{type:"check",className:"success"})]}),R&&(0,D.jsxs)(A.x,{color:"current",children:["Viewing an old version (v",null===M||void 0===M?void 0:M.version,")"]}),H&&(0,D.jsx)(p.z,{size:"lg",variant:"active",onClick:function(){I.handlePublish()},children:"Publish"}),K&&(0,D.jsx)(p.z,{size:"xl",variant:"secondary",disabled:O,onClick:(0,r.Z)(o().mark((function e(){var t,n,r;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(W&&I.data){e.next=2;break}return e.abrupt("return");case 2:return e.prev=2,P(!0),e.next=6,(0,E.E)(W);case 6:if(!("error"in(t=e.sent))){e.next=9;break}throw new Error(t.error);case 9:return n="".concat(W.blushData.modificationOptions.id,"/").concat(W.blushData.modificationOptions.value),r=U(U({},I.data.thumbnails),{},(0,i.Z)({},n,t.imageId)),e.next=13,(0,z.ER)(I.data.id,I.data.version,{thumbnails:r});case 13:e.next=19;break;case 15:e.prev=15,e.t0=e.catch(2),g({type:"SHOW_TOAST",payload:{type:"error",message:e.t0.message}}),d.Tb(e.t0);case 19:return e.prev=19,P(!1),e.finish(19);case 22:case"end":return e.stop()}}),e,null,[[2,15,19,22]])}))),children:"Update Thumbnail"}),(0,D.jsx)(f.Y,{menuButton:(0,D.jsx)(p.z,{size:"lg",variant:"secondary",children:"Versions"}),children:(0,D.jsx)(S.xr,{$enabled:!0,style:{padding:8,maxHeight:"80vh",width:"50vw"},children:(0,D.jsx)(C,{collectionEditingState:I,teamId:j})})}),(0,D.jsx)(v.v2,{options:[M.archived?{label:"Restore Collection",value:"restore"}:{label:"Archive Collection",value:"archive"}].filter(Z.Dw),onClick:function(e){switch(e.value){case"archive":I.handleArchive();break;case"restore":I.handleRestore()}},menuButton:function(){return(0,D.jsx)(B.h,{size:"lg",icon:"veganMeatballs"})}})]})]})}):null}},15549:function(e,t,n){"use strict";n.r(t),n.d(t,{PageMetaData:function(){return y},__N_SSP:function(){return g},default:function(){return w}});var i=n(13431),r=n(42643),a=n(34885),l=n(94745);var o=n(50790),s=n(42099),c=n(31934),d=n(98516),u=n(86157),h=n(77947),v=n(78566),f=n(41566),x=n(48770),m=n(32887),p=n(16906),j=n(88349);function b(){var e=(0,f.Z)().lang,t=(0,v.bu)(v.s),n=(0,v.bu)(v.uf),i=(0,x.Z)(d.IQ,250).callback;return(0,a.useEffect)((function(){var n;if(t){var r=(null===(n=l.default.query.shareUri)||void 0===n?void 0:n[0])===t.blushData.shareUri;i(t.blushData,e,r)}}),[t,n,e,i]),null}var g=!0,y=function(e){var t,n,i=e.initialBlushData,r=(0,v.bu)(v.s),a=(null===r||void 0===r?void 0:r.blushData)||i,l=(0,u.A)(a);return(0,j.jsx)(s.U,{title:"".concat(a.collection.name).concat(null!==(t=a.metadata)&&void 0!==t&&t.artistName?" - Illustration by ".concat(null===(n=a.metadata)||void 0===n?void 0:n.artistName):""),description:"Check out this illustration on Blush.",twitterUrl:a.collection.artistTwitter,ogImage:l()})},w=function(e){var t,n=e.initialBlushData,s=e.error,d=(0,l.useRouter)(),u=(0,p.GI)(),x=(0,f.Z)().t,g=(t=d.query.shareUri,(Array.isArray(t)?t.length<=1&&!t[0]:!t)||n?"":"Not Found"),w=g||x("common:error-generating-illustration"),k=(0,a.useState)(null),O=k[0],D=k[1];return(0,a.useEffect)((function(){var e=(0,m.tV)(null===n||void 0===n?void 0:n.collection.id);D(e)}),[null===n||void 0===n?void 0:n.collection.id]),s||g?(0,j.jsx)(r.m,{message:w}):n?(0,j.jsx)(v.ZP,{initialBlushData:n,children:(0,j.jsxs)(c.Z,{flagBag:u,container:o.fC,header:O?(0,j.jsx)(h.K,{collectionId:O.collectionData.id,initialCollectionData:O.collectionData,teamId:O.teamId}):null,children:[(0,j.jsx)(y,{initialBlushData:n}),(0,j.jsx)(i.L,{}),(0,j.jsx)(b,{})]})}):(0,j.jsx)(c.Z,{container:o.fC,flagBag:u,children:(0,j.jsx)(i.I,{})})}},32887:function(e,t,n){"use strict";n.d(t,{tG:function(){return o},ZJ:function(){return s},SD:function(){return c},tV:function(){return d}});var i=n(72041),r=n(94745),a=n(17824),l=n(36809);function o(e){var t=e.collectionData,n=e.teamId;i.ZP.setItem(a.uA,JSON.stringify({collectionData:t,teamId:n}))}function s(e,t,n){r.default.push("/team/".concat(e,"/collections/").concat(t,"/edit/").concat(n))}function c(){var e=d();i.ZP.removeItem(a.uA),r.default.push(e?"/team/".concat(e.teamId,"/collections/").concat(e.collectionData.id):"/collections")}function d(e){try{var t=i.ZP.getItem(a.uA),n=t?JSON.parse(t):null;if(!(0,l.iC)(n.collectionData))return null;var r=e?n.collectionData&&n.collectionData.id===e:null;return!e||r?n:null}catch(o){return null}}},36301:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/collections/[collectionId]/[collectionSlug]/[...shareUri]",function(){return n(15549)}])}},function(e){e.O(0,[4753,2483,182,9774,2888,179],(function(){return t=36301,e(e.s=t);var t}));var t=e.O();_N_E=t}]);