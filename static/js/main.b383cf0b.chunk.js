(this["webpackJsonpprova-q2-pay"]=this["webpackJsonpprova-q2-pay"]||[]).push([[0],{119:function(e,a,t){},128:function(e,a,t){},130:function(e,a,t){},139:function(e,a,t){"use strict";t.r(a);var n,c,s=t(0),i=t(9),l=t.n(i),r=t(57),o=t(181),d=t(184),j=t(85),b=t.n(j),h={urlBase:"https://api.themoviedb.org/3/movie/upcoming?api_key=fe65f8e840e15d06c5c00bf13084da74&language=pt-BR&page=",urlSearch:"https://api.themoviedb.org/3/search/movie?api_key=fe65f8e840e15d06c5c00bf13084da74&language=pt-BR&query=",apiKey:"?api_key=fe65f8e840e15d06c5c00bf13084da74&language=pt-BR&",urlDetailsMovie:"https://api.themoviedb.org/3/movie/"},u=t(47),p=t.n(u),v=t(58),O=t(28);!function(e){e.ID_STORE="HOME"}(n||(n={})),function(e){e.SET_DATA_HOME="SET_DATA_HOME",e.SET_LOADING="SET_LOADING"}(c||(c={}));var x,_,g={data:{},loading:!1},m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case c.SET_DATA_HOME:return Object(O.a)(Object(O.a)({},e),{},{data:a.data});case c.SET_LOADING:return Object(O.a)(Object(O.a)({},e),{},{loading:a.loading});default:return e}};!function(e){e.ID_STORE="DETAILS"}(x||(x={})),function(e){e.SET_DATA_DETAILS="SET_DATA_DETAILS",e.SET_LOADING="SET_LOADING"}(_||(_={}));var f={data:{adult:!1,backdrop_path:"",belongs_to_collection:"",budget:0,genres:[],homepage:null,id:0,imdb_id:null,original_language:"",original_title:"",overview:null,popularity:0,poster_path:"",production_companies:[],production_countries:[],release_date:"",revenue:0,runtime:null,spoken_languages:[],status:"",tagline:null,title:"",video:!1,vote_average:0,vote_count:0},loading:!1},y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case _.SET_DATA_DETAILS:return Object(O.a)(Object(O.a)({},e),{},{data:a.data});case _.SET_LOADING:return Object(O.a)(Object(O.a)({},e),{},{loading:a.loading});default:return e}},N=Object(v.a)({home:m,details:y}),E=Object(v.b)(N),T=function(e){return E.dispatch({type:c.SET_DATA_HOME,data:e})},A=function(e){return E.dispatch({type:c.SET_LOADING,loading:e})};function D(e){A(!0),p.a.get("".concat(h.urlBase).concat(e)).then((function(e){T(e.data)})).catch((function(e){})).finally((function(){A(!1)}))}function k(e){A(!0),p.a.get("".concat(h.urlSearch).concat(e)).then((function(e){T(e.data)})).catch((function(e){})).finally((function(){A(!1)}))}t(119);var S=t(21),C=Object(S.a)(),w=t(3),I=function(){var e=Object(s.useState)(""),a=Object(r.a)(e,2),t=a[0],n=a[1];return Object(w.jsx)(w.Fragment,{children:Object(w.jsx)("header",{className:"navbar navbar-expand-md navbar-light bd-navbar","aria-label":"Main navigation",children:Object(w.jsxs)("nav",{className:"container-xxl flex-wrap flex-md-nowrap",children:[Object(w.jsx)("a",{className:"navbar-brand p-0 me-2",href:"/prova-q2-pay/","aria-label":"Logo",children:Object(w.jsx)("div",{className:"logo"})}),Object(w.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#textoNavbar","aria-controls":"textoNavbar","aria-expanded":"false","aria-label":"Alterna navega\xe7\xe3o",children:Object(w.jsx)("span",{className:"navbar-toggler-icon"})}),Object(w.jsx)("div",{className:"collapse navbar-collapse",id:"textoNavbar",children:Object(w.jsxs)("ul",{className:"navbar-nav flex-row flex-wrap ms-md-auto",children:[Object(w.jsx)(o.a,{label:"Pesquisa",onKeyPress:function(e){if("Enter"===e.key)return t?k(t):D(1),C.push("/prova-q2-pay/")},onChange:function(e){n(e.target.value)},InputProps:{endAdornment:Object(w.jsx)(d.a,{position:"end",children:Object(w.jsx)(b.a,{style:{cursor:"pointer"},onClick:function(){return t?k(t):D(1),C.push("/prova-q2-pay/")}})})}}),Object(w.jsx)("li",{className:"nav-item col-6 col-md-auto",children:Object(w.jsx)("a",{className:"nav-link p-3",href:"/prova-q2-pay/",children:"Home"})}),Object(w.jsx)("li",{className:"nav-item col-6 col-md-auto",children:Object(w.jsxs)("a",{className:"nav-link p-3",href:"/prova-q2-pay/",children:[Object(w.jsx)("span",{children:Object(w.jsxs)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"pr-2",children:[Object(w.jsx)("path",{d:"M15 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H15",stroke:"#FFC300","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}),Object(w.jsx)("path",{d:"M10 17L15 12L10 7",stroke:"#FFC300","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}),Object(w.jsx)("path",{d:"M15 12H3",stroke:"#FFC300","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})]})}),"LogIn"]})})]})})]})})})},L=t(13),q=(t(128),t(40)),F=t(86),M=t.n(F),B=t(87),P=t.n(B),R=function(){return Object(w.jsx)(w.Fragment,{children:Object(w.jsx)("div",{className:P.a.banner})})},H=t(185),G=t(176),K=t(177),z=t(178),U=t(24),J=t.n(U),V=t(43),W=t.n(V),X=t(183),Q=t(174),Y=t(175);t(130);var Z=function(e){var a=e.data,t=Object(s.useState)(!1),n=Object(r.a)(t,2),c=n[0],i=n[1],l=function(){return i(!c)};return Object(w.jsxs)("div",{children:[Object(w.jsx)("div",{onClick:l,children:e.banner}),Object(w.jsxs)(X.a,{isOpen:c,toggle:l,size:"lg",children:[Object(w.jsx)(Q.a,{toggle:l,children:a.original_title}),Object(w.jsx)(Y.a,{children:e.children})]})]})},$=t(53),ee=function(e){var a,t=e.data,n=e.baseUrl;return Object(w.jsx)(w.Fragment,{children:Object(w.jsx)("div",{className:J.a.container,children:null===t||void 0===t||null===(a=t.results)||void 0===a?void 0:a.map((function(e,a){return Object(w.jsxs)("div",{className:J.a.card,children:[Object(w.jsx)("div",{className:J.a.vote,children:Object(w.jsx)("div",{className:J.a.voteText,children:e.vote_average})}),Object(w.jsx)(Z,{data:e,banner:Object(w.jsx)(H.a,{title:e.title,"aria-label":e.title,placement:"right",children:Object(w.jsx)("img",{alt:e.original_title,className:J.a.poster,src:n+e.poster_path,loading:"lazy"})},a),children:Object(w.jsxs)(G.a,{children:[Object(w.jsx)(K.a,{md:4,children:Object(w.jsxs)("div",{className:J.a.avaliacao,children:[e.adult&&Object(w.jsx)("div",{className:J.a.adult,children:"+18"}),Object(w.jsx)("img",{alt:e.original_title,className:J.a.poster,src:n+e.poster_path,loading:"lazy"}),Object(w.jsxs)(G.a,{children:[Object(w.jsx)(z.a,{children:"Avalia\xe7\xe3o dos usu\xe1rios"}),Object(w.jsx)("span",{children:"".concat(e.vote_average)}),Object(w.jsx)(z.a,{children:"Total de votos"}),Object(w.jsx)("span",{children:"".concat(e.vote_count)})]})]})}),Object(w.jsxs)(K.a,{md:8,children:[Object(w.jsx)(G.a,{children:Object(w.jsx)("h3",{children:"Sinopse"})}),Object(w.jsx)(G.a,{children:Object(w.jsx)("p",{children:e.overview})})]})]})}),Object(w.jsx)($.a,{to:"details/".concat(e.id),className:J.a.title,children:e.original_title}),Object(w.jsx)("div",{className:J.a.date,children:W()(e.release_date).format("ll")})]})}))})})},ae=t(180),te=t(179),ne=Object(te.a)({ul:{listStyle:"none",padding:0,margin:0,display:"flex",justifyContent:"center"},button:{fontWeight:"bold",border:"solid 1px #ccc",borderRadius:"50%",outline:"none",cursor:"pointer",width:"30px",height:"30px",margin:"0px 5px 0px 5px",display:"flex",justifyContent:"center",alignItems:"center",padding:"6px 12px"}});var ce=function(e){var a=e.totalPages,t=e.onPageChange,n=ne(),c=Object(ae.a)({count:a}).items;return Object(w.jsx)(G.a,{children:Object(w.jsx)("nav",{children:Object(w.jsx)("ul",{className:n.ul,children:c.map((function(e,a){var c=e.page,s=e.type,i=e.selected,l=e.disabled,r=e.onClick,o=null;return"start-ellipsis"===s||"end-ellipsis"===s?o="\u2026":"page"===s?o=Object(w.jsx)("div",{className:n.button,style:{backgroundColor:i?"#001D3D":"#E5E4E2",color:i?"#FFF":void 0},onClick:function(){r(),t&&t(c)},children:c}):("next"===s&&(o=Object(w.jsx)("div",{className:n.button,style:{backgroundColor:l?"#808080":"#E5E4E2"},onClick:function(){l||(r(),t&&t(c))},children:">"})),"previous"===s&&(o=Object(w.jsx)("div",{className:n.button,style:{backgroundColor:l?"#808080":"#E5E4E2"},onClick:function(){l||(r(),t&&t(c))},children:"<"}))),Object(w.jsx)("li",{children:o},a)}))})})})},se=function(){var e=Object(q.b)((function(e){return e.home})),a=e.data,t=e.loading;return Object(s.useEffect)((function(){D(1)}),[]),Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(R,{}),t&&Object(w.jsx)("div",{className:"c-loader"}),Object(w.jsxs)("div",{className:M.a.container,children:[Object(w.jsx)(ee,{data:a,baseUrl:"http://image.tmdb.org/t/p/w185"}),Object(w.jsx)(ce,{totalPages:null===a||void 0===a?void 0:a.total_pages,onPageChange:D})]})]})},ie=t(44),le=t.n(ie),re=function(){return Object(w.jsxs)("div",{className:le.a.footer,children:[Object(w.jsx)(K.a,{md:3,children:Object(w.jsx)("div",{className:le.a.logo})}),Object(w.jsx)(K.a,{children:Object(w.jsx)("div",{className:le.a.menu,children:Object(w.jsxs)(G.a,{children:[Object(w.jsx)(z.a,{children:"O B\xc1SICO"}),Object(w.jsx)("a",{href:"/prova-q2-pay/",children:"Contrate-nos"}),Object(w.jsx)("a",{href:"/prova-q2-pay/",children:"Suporte"}),Object(w.jsx)("a",{href:"/prova-q2-pay/",children:"API"})]})})}),Object(w.jsx)(K.a,{children:Object(w.jsx)("div",{className:le.a.menu,children:Object(w.jsxs)(G.a,{children:[Object(w.jsx)(z.a,{children:"COMUNIDADE"}),Object(w.jsx)("a",{href:"/prova-q2-pay/",children:"Diretrizes"}),Object(w.jsx)("a",{href:"/prova-q2-pay/",children:"Discuss\xf5es"}),Object(w.jsx)("a",{href:"/prova-q2-pay/",children:"Twitter"})]})})}),Object(w.jsx)(K.a,{children:Object(w.jsx)("div",{className:le.a.menu,children:Object(w.jsxs)(G.a,{children:[Object(w.jsx)(z.a,{children:"LEGALIDADE"}),Object(w.jsx)("a",{href:"/prova-q2-pay/",children:"Termos de uso"}),Object(w.jsx)("a",{href:"/prova-q2-pay/",children:"Termos de uso da API"}),Object(w.jsx)("a",{href:"/prova-q2-pay/",children:"Pol\xedtica de privacidade"})]})})})]})};function oe(e){p.a.get(h.urlDetailsMovie+e+h.apiKey).then((function(e){var a;a=e.data,E.dispatch({type:_.SET_DATA_DETAILS,data:a})})).catch((function(e){console.log(e.status_code)})).finally((function(){}))}var de=t(30),je=t.n(de),be=function(){var e=Object(q.b)((function(e){return e.details})),a=e.data,t=e.loading,n=Object(L.f)();return Object(s.useEffect)((function(){oe(n.movieId)}),[n.movieId]),W.a.locale("pt-br"),Object(w.jsxs)(w.Fragment,{children:[t&&Object(w.jsx)("div",{className:"c-loader"}),Object(w.jsxs)("div",{className:je.a.content,children:[Object(w.jsx)(K.a,{md:3,children:Object(w.jsxs)("div",{className:je.a.avaliacao,children:[Object(w.jsx)("img",{alt:null===a||void 0===a?void 0:a.original_title,className:je.a.poster,src:"http://image.tmdb.org/t/p/w185"+(null===a||void 0===a?void 0:a.poster_path)+h.apiKey}),Object(w.jsxs)(G.a,{children:[Object(w.jsx)(z.a,{children:"Avalia\xe7\xe3o dos usu\xe1rios"}),Object(w.jsx)("span",{children:"".concat(null===a||void 0===a?void 0:a.vote_average)}),Object(w.jsx)(z.a,{children:"Total de votos"}),Object(w.jsx)("span",{children:"".concat(null===a||void 0===a?void 0:a.vote_count)}),Object(w.jsx)(z.a,{children:"Data de Lan\xe7amento"}),Object(w.jsx)("span",{children:W()(null===a||void 0===a?void 0:a.release_date).format("ll")})]})]})}),Object(w.jsx)(K.a,{md:9,children:Object(w.jsxs)(G.a,{className:je.a.session,children:[Object(w.jsxs)("div",{className:je.a.alignRight,children:[Object(w.jsx)("div",{className:je.a.titleRight,children:"Data de Lan\xe7amento"}),Object(w.jsx)("span",{children:W()(null===a||void 0===a?void 0:a.release_date).format("ll")}),Object(w.jsx)("div",{children:"Status"}),Object(w.jsx)("span",{children:"Released"===(null===a||void 0===a?void 0:a.status)?"Lan\xe7ado":"N\xe3o lan\xe7ado"})]}),Object(w.jsx)(z.a,{className:je.a.title,children:null===a||void 0===a?void 0:a.title}),Object(w.jsx)("span",{className:je.a.tagline,children:null===a||void 0===a?void 0:a.tagline}),Object(w.jsx)("p",{children:null===a||void 0===a?void 0:a.overview})]})})]})]})},he=t(89);var ue=Object(he.hot)((function(){return Object(w.jsx)("div",{className:"App",children:Object(w.jsxs)("div",{id:"wrapper",children:[Object(w.jsxs)("div",{className:"body-content",children:[Object(w.jsx)(I,{}),Object(w.jsx)(L.b,{history:C,children:Object(w.jsxs)(L.c,{children:[Object(w.jsx)(L.a,{path:"/prova-q2-pay/details/:movieId",component:be}),Object(w.jsx)(L.a,{path:"/prova-q2-pay/",component:se})]})})]}),Object(w.jsx)(re,{})]})})}));t(138);l.a.render(Object(w.jsx)(q.a,{store:E,children:Object(w.jsx)(ue,{})}),document.getElementById("root"))},24:function(e,a,t){e.exports={container:"style_container__MzT0D",poster:"style_poster__3je-h",card:"style_card__1UKNV",vote:"style_vote__3avFB",voteText:"style_voteText__39CDB",title:"style_title__1phVc",date:"style_date__1Bnm-",adult:"style_adult__246nd",avaliacao:"style_avaliacao__1CJNE"}},30:function(e,a,t){e.exports={content:"style_content__1nyTJ",title:"style_title__PLaK7",tagline:"style_tagline__DozBw",session:"style_session__3nmVo",alignRight:"style_alignRight__32NKs",poster:"style_poster__2w8lC",avaliacao:"style_avaliacao__1e5pk"}},44:function(e,a,t){e.exports={footer:"style_footer__1s_dH",logo:"style_logo__2kdqW",menu:"style_menu__2TcEU"}},86:function(e,a,t){e.exports={container:"style_container__3bNip"}},87:function(e,a,t){e.exports={banner:"style_banner__2XfCt"}}},[[139,1,2]]]);
//# sourceMappingURL=main.b383cf0b.chunk.js.map