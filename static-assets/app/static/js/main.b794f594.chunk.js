(this["webpackJsonpwordify-craftercms-react-app"]=this["webpackJsonpwordify-craftercms-react-app"]||[]).push([[0],{100:function(e){e.exports=JSON.parse("{}")},101:function(e){e.exports=JSON.parse("{}")},107:function(e,n,t){e.exports=t(153)},153:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),l=t(96),c=t.n(l),o=t(5),s=t(24),i=t(13);function m(e){var n=e.message;return r.a.createElement("div",{className:"circular-progress-spinner circular-progress-spinner__screen-height"},r.a.createElement("div",{className:"circular-progress-spinner--graphic-container"},r.a.createElement("svg",{className:"circular-progress-spinner--graphic"},r.a.createElement("circle",{className:"circular-progress-spinner--path",cx:"50",cy:"50",r:"20",fill:"none",strokeWidth:"2",strokeMiterlimit:"10"}))),n&&r.a.createElement("p",{className:"circular-progress-spinner--message"},n))}var u=t(53),p=t(75),d=t(69),b=t(34);function f(e){var n=e.match.url,t=Object(a.useState)(null),l=Object(i.a)(t,2),c=l[0],o=l[1];return Object(a.useEffect)((function(){var e=!1;return Object(b.reportNavigation)(n),Object(u.a)({text:'\n\n  fragment byUrlQueryHomepage on page_entry  {\n    pageTitle_s\n    pageDescription_s\n    bios_o {\n      item {\n        key\n        component {\n          ...byUrlQueryBioFragment\n        }\n      }\n    }\n    slider_o {\n      item {\n        key\n        component {\n          ...byUrlQueryContentItemFields\n          ...on component_slider {\n            ...byUrlQuerySlider\n          }\n        }\n      }\n    }\n  }\n  \n  fragment byUrlQueryAboutPage on page_about {\n    pageTitle_s\n    pageDescription_s\n    headline_s\n    bios_o {\n      item {\n        key\n        component {\n          ...byUrlQueryBioFragment\n        }\n      }\n    }\n    content_o {\n      item {\n        key\n        component {\n          ...on component_rich_text {\n            ...byUrlQueryRichText\n          }\n          ...on component_image {\n            ...byUrlQueryImage\n          }\n          ...on component_responsive_columns {\n            ...byUrlQueryResponsiveColumns\n          }\n        }\n      }\n    }\n  }\n\n  fragment byUrlQueryContactPage on page_contact {\n    pageTitle_s\n    pageDescription_s\n\n  }\n\n  fragment byUrlQueryCategoryPage on page_category {\n    pageTitle_s\n    pageDescription_s\n\n  }\n\n  fragment byUrlQueryPostPage on page_post {\n    ...byUrlQueryContentItemFields\n    slug: localId(transform: "storeUrlToRenderUrl")\n    pageTitle_s\n    pageDescription_s\n    blurb_t\n    headline_s\n    mainImage_s\n    content_o {\n      item {\n        key\n        component {\n          ...on component_rich_text {\n            ...byUrlQueryRichText\n          }\n          ...on component_image {\n            ...byUrlQueryImage\n          }\n          ...on component_responsive_columns {\n            ...byUrlQueryResponsiveColumns\n          }\n        }\n      }\n    }\n    authorBio_o {\n      item {\n        key\n        component {\n          ...byUrlQueryBioFragment\n        }\n      }\n    }\n  }\n\n  fragment byUrlQueryContentItemFields on ContentItem {\n    guid: objectId\n    path: localId\n    contentTypeId: content__type\n    dateCreated: createdDate_dt\n    dateModified: lastModifiedDate_dt\n    label: internal__name\n  }\n\n  fragment byUrlQueryBioFragment on component_bio {\n    guid: objectId\n    contentTypeId: content__type\n    label: internal__name\n    path: localId\n    bio_t\n    name_s\n    profilePic_s\n    linkButtonText_s\n    linkButtonUrl_s\n    showLinkButton_b\n  }\n\n  fragment byUrlQueryRichText on component_rich_text {\n    ...byUrlQueryContentItemFields\n    content_html_raw\n  }\n\n  fragment byUrlQueryImage on component_image {\n    ...byUrlQueryContentItemFields\n    image_s\n    alternativeText_s\n  }\n\n  fragment byUrlQueryResponsiveColumns on component_responsive_columns {\n    ...byUrlQueryContentItemFields\n    columns_o {\n      item {\n        columnSize_s\n        content_o {\n          item {\n            key\n            component {\n              ...on component_rich_text {\n                ...byUrlQueryRichText\n              }\n              ...on component_image {\n                ...byUrlQueryImage\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n\n  fragment byUrlQuerySlider on component_slider {\n    ...byUrlQueryContentItemFields\n    posts_o {\n      item {\n        key\n        component {\n          ...byUrlQueryContentItemFields\n          slug: localId(transform: "storeUrlToRenderUrl")\n          pageTitle_s\n          pageDescription_s\n          blurb_t\n          headline_s\n          mainImage_s\n        }\n      }\n    }\n  }\n\n  query byUrlQuery(\n    $url: String, $skipContentType: Boolean = true\n    $includePosts: Boolean = true\n    $postsLimit: Int = 8\n    $postsOffset: Int = 0\n  ) {\n    content: contentItems {\n      total\n      items {\n        ...byUrlQueryContentItemFields\n        url: localId(\n          transform: "storeUrlToRenderUrl",\n          filter:{ regex: $url }\n        )\n        content__type(\n          filter:{\n            regex: ".*(bio|post|entry|category|contact|about).*"\n          }\n        ) @skip (if: $skipContentType)\n        ...on page_entry {\n          ...byUrlQueryHomepage\n        }\n        ...on page_about {\n          ...byUrlQueryAboutPage\n        }\n        ...on page_contact {\n          ...byUrlQueryContactPage\n        }\n        ...on page_category {\n          ...byUrlQueryCategoryPage\n        }\n        ...on page_post {\n          ...byUrlQueryPostPage\n        }\n      }\n    }\n    posts: page_post(limit: $postsLimit, offset: $postsOffset) @include(if: $includePosts) {\n      total\n      items {\n        ...byUrlQueryPostPage\n      }\n    }\n  }\n  \n'},{url:".*".concat("/"===n?"website/index":n,".*"),includePosts:!0}).then((function(n){var t=n.data;if(!e){var a,r,l=Object(d.a)(null===(a=t.content.items)||void 0===a?void 0:a[0]),c=Object(d.a)(t.posts.items);if(o({model:l,posts:c}),l)if(window.scroll(0,0),document.title=null!==(r=l.pageTitle_s)&&void 0!==r?r:"Wordify Crafter CMS",l.pageDescription_s){var s,i=document.head.querySelector('meta[name="description"]');i&&i.setAttribute("content",null!==(s=l.pageDescription_s)&&void 0!==s?s:"")}}})),function(){e=!0}}),[n]),null===c?r.a.createElement(m,null):r.a.createElement(p.b,Object.assign({},c,e))}function g(){return r.a.createElement(o.a,null,r.a.createElement(s.c,null,r.a.createElement(s.a,{path:"/*",component:f})))}var E=t(17),y=t(155),v={en:t(100),es:t(101)},h=function(e){var n=Object(E.b)(),t=Object(i.a)(n,1)[0].locale;return r.a.createElement(y.a,Object.assign({},e,{locale:t,messages:v[t]}))},_=t(55),N=t(102);function j(){return Object(a.useEffect)((function(){Object(_.a)()&&Object(N.a)()}),[]),r.a.createElement(E.a,null,r.a.createElement(h,null,r.a.createElement(a.Suspense,{fallback:r.a.createElement(m,null)},r.a.createElement(g,null))))}c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(j,null)),document.getElementById("root"))},17:function(e,n,t){"use strict";t.d(n,"a",(function(){return m})),t.d(n,"b",(function(){return i}));var a=t(13),r=t(0),l=t.n(r),c=t(55),o=t(25),s=Object(r.createContext)();function i(){var e=Object(r.useContext)(s);if(!e)throw new Error("useGlobalContext must be used within a GlobalContextProvider");return e}function m(e){var n=Object(o.d)({isAuthoring:Object(c.a)(),locale:"en",pages:null,pagesLoading:!1,theme:"light"}),t=Object(a.a)(n,2),i=t[0],m=t[1],u=Object(r.useMemo)((function(){return[i,m]}),[i,m]);return l.a.createElement(s.Provider,Object.assign({value:u},e))}},25:function(e,n,t){"use strict";t.d(n,"d",(function(){return m})),t.d(n,"b",(function(){return u})),t.d(n,"c",(function(){return p})),t.d(n,"a",(function(){return d}));var a=t(13),r=t(35),l=t(0),c=t(53),o=t(17),s=t(58);function i(e,n){return Object(r.a)({},e,{},n)}function m(e,n){return Object(l.useReducer)(i,e,n)}function u(){var e=Object(o.b)(),n=Object(a.a)(e,2),t=n[0],r=t.pages,s=t.pagesLoading,i=n[1],m=Object(l.useRef)(!1);return Object(l.useEffect)((function(){return function(){m.current=!0}}),[]),Object(l.useEffect)((function(){r||s||(i({pagesLoading:!0}),Object(c.a)({text:'\n          query Nav {\n            pages {\n              total\n              items {\n                navLabel\n                contentTypeId: content__type\n                url: localId(transform: "storeUrlToRenderUrl")\n                placeInNav(filter: { equals: true }) @skip(if: true)\n                orderDefault_f\n              }\n            }\n          }\n        '}).then((function(e){var n=e.data;!m.current&&i({pages:n.pages.items})})))}),[i,r,s]),r}function p(e){var n=e.model,t=e.parentModelId,r=Object(o.b)(),l=Object(a.a)(r,1)[0].isAuthoring;return Object(s.b)({model:n,parentModelId:t,isAuthoring:l}).props}function d(e){var n=e.model,t=e.fieldId,r=Object(o.b)(),l=Object(a.a)(r,1)[0].isAuthoring;return Object(s.a)({model:n,zoneName:t,isAuthoring:l}).props}},53:function(e,n,t){"use strict";t.d(n,"a",(function(){return r}));var a=t(42);function r(e,n){return fetch("/api/1/site/graphql?crafterSite=wordify",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:e.text,variables:n})}).then((function(e){return e.json()}))}new a.Environment({network:a.Network.create(r),store:new a.Store(new a.RecordSource)})},55:function(e,n,t){"use strict";function a(){var e=document.documentElement.getAttribute("data-craftercms-preview");return"${modePreview?c}"===e||"true"===e}t.d(n,"a",(function(){return a}))},71:function(e,n,t){"use strict";t.d(n,"a",(function(){return i}));var a=t(13),r=t(97),l=t(99),c=t(0),o=t.n(c),s=t(17);function i(e){var n=e.children,t=Object(s.b)(),c=Object(a.a)(t,1)[0].theme;return o.a.createElement("div",{className:"wrap theme-".concat(c)},o.a.createElement(r.default,null),o.a.createElement("div",{className:"wrap"},n),o.a.createElement(l.default,null))}},75:function(e,n,t){"use strict";t.d(n,"a",(function(){return p}));var a=t(35),r=t(0),l=t.n(r),c=t(71);function o(){return l.a.createElement(c.a,null,l.a.createElement("section",{style:{textAlign:"center",padding:"50px 0"}},l.a.createElement("h1",null,"Not Found"),l.a.createElement("p",null,"The page you're looking for does not exist.")))}function s(){return l.a.createElement("section",null,"The page you've selected needs to be created by the site developers.")}var i={"/page/entry":Object(r.lazy)((function(){return t.e(3).then(t.bind(null,170))})),"/page/about":Object(r.lazy)((function(){return t.e(4).then(t.bind(null,171))})),"/page/contact":Object(r.lazy)((function(){return t.e(7).then(t.bind(null,172))})),"/page/category":Object(r.lazy)((function(){return t.e(6).then(t.bind(null,173))})),"/page/post":Object(r.lazy)((function(){return t.e(5).then(t.bind(null,174))})),"/component/header":Object(r.lazy)((function(){return Promise.resolve().then(t.bind(null,97))})),"/component/footer":Object(r.lazy)((function(){return Promise.resolve().then(t.bind(null,99))})),"/component/bio":Object(r.lazy)((function(){return t.e(10).then(t.bind(null,160))})),"/component/image":Object(r.lazy)((function(){return t.e(11).then(t.bind(null,175))})),"/component/responsive_columns":Object(r.lazy)((function(){return t.e(9).then(t.bind(null,176))})),"/component/rich_text":Object(r.lazy)((function(){return t.e(12).then(t.bind(null,177))})),"/component/slider":Object(r.lazy)((function(){return t.e(8).then(t.bind(null,169))}))},m=t(25);n.b=function(e){var n=Object(m.c)(e);return l.a.createElement(u,Object.assign({ice:n},e))};function u(e){var n=e.model,t=null===n?o:i[n.craftercms.contentTypeId]||s;return l.a.createElement(t,e)}function p(e){var n=e.wrapper,t=e.wrapper,r=(t=void 0===t?{component:"div"}:t).component,c=void 0===r?"div":r,o=Object(m.c)(e),s=Object(a.a)({},n);delete s.component;var i=Object(a.a)({},e);return delete i.wrapper,l.a.createElement(c,Object.assign({},o,s),l.a.createElement(u,i))}},97:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return o}));var a=t(0),r=t.n(a),l=t(5),c=t(25);function o(){var e=Object(c.b)();return r.a.createElement("header",{role:"banner"},r.a.createElement("div",{className:"top-bar"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-9 social"},r.a.createElement("a",{href:"/"},r.a.createElement("span",{className:"fa fa-twitter"})),r.a.createElement("a",{href:"/"},r.a.createElement("span",{className:"fa fa-facebook"})),r.a.createElement("a",{href:"/"},r.a.createElement("span",{className:"fa fa-instagram"})),r.a.createElement("a",{href:"/"},r.a.createElement("span",{className:"fa fa-youtube-play"}))),r.a.createElement("div",{className:"col-3 search-top"},r.a.createElement("form",{action:"#",className:"search-top-form"},r.a.createElement("span",{className:"icon fa fa-search"}),r.a.createElement("input",{type:"text",id:"s",placeholder:"Type keyword to search..."})))))),r.a.createElement("div",{className:"container logo-wrap"},r.a.createElement("div",{className:"row pt-5"},r.a.createElement("div",{className:"col-12 text-center"},r.a.createElement("a",{className:"absolute-toggle d-block d-md-none","data-toggle":"collapse",href:"#navbarMenu",role:"button","aria-expanded":"false","aria-controls":"navbarMenu"},r.a.createElement("span",{className:"burger-lines"})),r.a.createElement("h1",{className:"site-logo"},r.a.createElement(l.b,{to:"/"},"Wordify"))))),r.a.createElement("nav",{className:"navbar navbar-expand-md navbar-light bg-light"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarMenu"},r.a.createElement("ul",{className:"navbar-nav mx-auto"},null===e||void 0===e?void 0:e.sort((function(e,n){var t=e.orderDefault_f,a=n.orderDefault_f;return t<a?-1:t>a?1:0})).map((function(e){return r.a.createElement("li",{className:"nav-item",key:e.url},r.a.createElement(l.c,{exact:!0,className:"nav-link",activeClassName:"active",to:e.url},e.navLabel))})))))))}},99:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return c}));var a=t(0),r=t.n(a),l=t(5);function c(){return r.a.createElement("footer",{className:"site-footer"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row mb-5"},r.a.createElement("div",{className:"col-md-4"},r.a.createElement("h3",null,"About Us"),r.a.createElement("p",{className:"mb-4"},r.a.createElement("img",{src:"/static-assets/images/img_1.jpg",alt:"",className:"img-fluid"})),r.a.createElement("p",null,"Lorem ipsum dolor sit amet sa ksal sk sa, consectetur adipisicing elit. Ipsa harum inventore reiciendis. ",r.a.createElement(l.b,{to:"/"},"Read More"))),r.a.createElement("div",{className:"col-md-6 ml-auto"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-7"},r.a.createElement("h3",null,"Latest Post"),r.a.createElement("div",{className:"post-entry-sidebar"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(l.b,{to:"/"},r.a.createElement("img",{src:"/static-assets/images/img_6.jpg",alt:"",className:"mr-4"}),r.a.createElement("div",{className:"text"},r.a.createElement("h4",null,"How to Find the Video Games of Your Youth"),r.a.createElement("div",{className:"post-meta"},r.a.createElement("span",{className:"mr-2"},"March 15, 2018 ")," &bullet;",r.a.createElement("span",{className:"ml-2"},r.a.createElement("span",{className:"fa fa-comments"})," 3"))))),r.a.createElement("li",null,r.a.createElement(l.b,{to:"/"},r.a.createElement("img",{src:"/static-assets/images/img_3.jpg",alt:"",className:"mr-4"}),r.a.createElement("div",{className:"text"},r.a.createElement("h4",null,"How to Find the Video Games of Your Youth"),r.a.createElement("div",{className:"post-meta"},r.a.createElement("span",{className:"mr-2"},"March 15, 2018 ")," &bullet;",r.a.createElement("span",{className:"ml-2"},r.a.createElement("span",{className:"fa fa-comments"})," 3"))))),r.a.createElement("li",null,r.a.createElement(l.b,{to:"/"},r.a.createElement("img",{src:"/static-assets/images/img_4.jpg",alt:"",className:"mr-4"}),r.a.createElement("div",{className:"text"},r.a.createElement("h4",null,"How to Find the Video Games of Your Youth"),r.a.createElement("div",{className:"post-meta"},r.a.createElement("span",{className:"mr-2"},"March 15, 2018 ")," &bullet;",r.a.createElement("span",{className:"ml-2"},r.a.createElement("span",{className:"fa fa-comments"})," 3")))))))),r.a.createElement("div",{className:"col-md-1"}),r.a.createElement("div",{className:"col-md-4"},r.a.createElement("div",{className:"mb-5"},r.a.createElement("h3",null,"Quick Links"),r.a.createElement("ul",{className:"list-unstyled"},r.a.createElement("li",null,r.a.createElement(l.b,{to:"/"},"About Us")),r.a.createElement("li",null,r.a.createElement(l.b,{to:"/"},"Travel")),r.a.createElement("li",null,r.a.createElement(l.b,{to:"/"},"Adventure")),r.a.createElement("li",null,r.a.createElement(l.b,{to:"/"},"Courses")),r.a.createElement("li",null,r.a.createElement(l.b,{to:"/"},"Categories")))),r.a.createElement("div",{className:"mb-5"},r.a.createElement("h3",null,"Social"),r.a.createElement("ul",{className:"list-unstyled footer-social"},r.a.createElement("li",null,r.a.createElement(l.b,{to:"/"},r.a.createElement("span",{className:"fa fa-twitter"})," Twitter")),r.a.createElement("li",null,r.a.createElement(l.b,{to:"/"},r.a.createElement("span",{className:"fa fa-facebook"})," Facebook")),r.a.createElement("li",null,r.a.createElement(l.b,{to:"/"},r.a.createElement("span",{className:"fa fa-instagram"})," Instagram")),r.a.createElement("li",null,r.a.createElement(l.b,{to:"/"},r.a.createElement("span",{className:"fa fa-vimeo"})," Vimeo")),r.a.createElement("li",null,r.a.createElement(l.b,{to:"/"},r.a.createElement("span",{className:"fa fa-youtube-play"})," Youtube")),r.a.createElement("li",null,r.a.createElement(l.b,{to:"/"},r.a.createElement("span",{className:"fa fa-snapchat"})," Snapshot")))))))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-12 text-center"},r.a.createElement("p",{className:"small"},"Copyright \xa9 ",(new Date).getFullYear()," All Rights Reserved | This template is made with ",r.a.createElement("i",{className:"fa fa-heart text-danger","aria-hidden":"true"})," by",r.a.createElement("a",{href:"https://colorlib.com",target:"_blank",rel:"noopener noreferrer"},"Colorlib"))))))}}},[[107,1,2]]]);
//# sourceMappingURL=main.b794f594.chunk.js.map