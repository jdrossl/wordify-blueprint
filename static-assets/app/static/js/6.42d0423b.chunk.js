(this["webpackJsonpwordify-craftercms-react-app"]=this["webpackJsonpwordify-craftercms-react-app"]||[]).push([[6,9],{166:function(e,a,t){"use strict";t.d(a,"a",(function(){return u}));var l,r,n=t(0),m=t(4),s=t(70),c=function(e,a){var t={};for(var l in e)Object.prototype.hasOwnProperty.call(e,l)&&a.indexOf(l)<0&&(t[l]=e[l]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(l=Object.getOwnPropertySymbols(e);r<l.length;r++)a.indexOf(l[r])<0&&Object.prototype.propertyIsEnumerable.call(e,l[r])&&(t[l[r]]=e[l[r]])}return t};!function(e){e.formatDate="FormattedDate",e.formatTime="FormattedTime",e.formatNumber="FormattedNumber",e.formatList="FormattedList",e.formatDisplayName="FormattedDisplayName"}(l||(l={})),function(e){e.formatDate="FormattedDateParts",e.formatTime="FormattedTimeParts",e.formatNumber="FormattedNumberParts",e.formatList="FormattedListParts"}(r||(r={}));function i(e){var a=function(a){return n.createElement(s.a.Consumer,null,(function(t){Object(m.f)(t);var l=a.value,r=a.children,n=c(a,["value","children"]),s="string"===typeof l?new Date(l||0):l;return r("formatDate"===e?t.formatDateToParts(s,n):t.formatTimeToParts(s,n))}))};return a.displayName=r[e],a}function o(e){var a=function(a){return n.createElement(s.a.Consumer,null,(function(t){Object(m.f)(t);var l=a.value,r=a.children,s=c(a,["value","children"]),i=t[e](l,s);if("function"===typeof r)return r(i);var o=t.textComponent||n.Fragment;return n.createElement(o,null,i)}))};return a.displayName=l[e],a}function u(e){return e}o("formatDate"),o("formatTime"),o("formatNumber"),o("formatList"),o("formatDisplayName"),i("formatDate"),i("formatTime")},169:function(e,a,t){"use strict";t.d(a,"b",(function(){return o})),t.d(a,"c",(function(){return u})),t.d(a,"a",(function(){return d}));var l=t(13),r=t(0),n=t.n(r),m=t(5),s=t(170),c=t(58),i=t(17),o="landscape",u="landscapeCompressed",d="imageBackground";a.d=function(e){var a,t,r=Object(s.a)().formatDate,p=Object(i.b)(),E=Object(l.a)(p,1)[0].isAuthoring,f=e.classes,v=e.parentModelId,N=e.format,b=void 0===N?"portrait":N,g=e.showBlurb,h=void 0!==g&&g,y=e.tags,O=void 0===y?"":y,j=e.numOfComments,F=void 0===j?3:j,P=e.model,w=e.model,_=w.slug,x=void 0===_?P.craftercms.path.replace(/(\/site\/website)|(index\.xml)/g,"").replace(/(\/\/)/g,"/"):_,T=Object(l.a)(w.authorBio_o,1)[0],D=T.name_s,k=T.profilePic_s,C=w.blurb_t,L=w.headline_s,M=w.mainImage_s,J=w.mainImageAlt_s,B=void 0===J?"":J,I=w.craftercms.dateModified,A=Object(c.b)({model:P,parentModelId:v,isAuthoring:E}).props;switch(b){case"portrait":return n.a.createElement(m.b,Object.assign({to:x,className:"blog-entry ".concat(null!==(a=null===f||void 0===f?void 0:f.root)&&void 0!==a?a:"")},A),n.a.createElement("img",{src:M,alt:B}),n.a.createElement("div",{className:"blog-content-body"},n.a.createElement("div",{className:"post-meta"},n.a.createElement("span",{className:"author mr-2"},n.a.createElement("img",{src:k,alt:""})," ",D)," \u2022 ",n.a.createElement("span",{className:"mr-2"},r(I))," \u2022 ",n.a.createElement("span",{className:"ml-2"},n.a.createElement("span",{className:"fa fa-comments"})," ",F)),n.a.createElement("h2",null,L)));case o:return n.a.createElement("div",Object.assign({className:"post-entry-horizontal"},A),n.a.createElement(m.b,{to:x,className:null===f||void 0===f?void 0:f.root},n.a.createElement("div",{className:"image",style:{backgroundImage:"url(".concat(M,")")}}),n.a.createElement("span",{className:"text"},n.a.createElement("div",{className:"post-meta"},n.a.createElement("span",{className:"author mr-2"},n.a.createElement("img",{src:k,alt:""})," ",D),"\u2022 ",n.a.createElement("span",{className:"mr-2"},r(I)),"\u2022 ",n.a.createElement("span",{className:"ml-2"},n.a.createElement("span",{className:"fa fa-comments"})," $",F)),n.a.createElement("h2",null,L))));case u:return n.a.createElement(m.b,Object.assign({to:x,className:null===f||void 0===f?void 0:f.root},A),n.a.createElement("img",{src:M,alt:B,className:"mr-4"}),n.a.createElement("div",{className:"text"},n.a.createElement("h4",null,L),n.a.createElement("div",{className:"post-meta"},n.a.createElement("span",{className:"mr-2"},r(I)))));case d:return n.a.createElement(m.b,{to:x,className:"a-block d-flex align-items-center ".concat(null!==(t=null===f||void 0===f?void 0:f.root)&&void 0!==t?t:""),style:{backgroundImage:"url(".concat(M,")")}},n.a.createElement("div",Object.assign({className:"text ".concat(null===f||void 0===f?void 0:f.innerWrapper)},A),n.a.createElement("div",{className:"post-meta"},O&&n.a.createElement(n.a.Fragment,null,n.a.createElement("span",{className:"category"},O)," \u2022 "),n.a.createElement("span",{className:"mr-2"},r(I))," \u2022 ",n.a.createElement("span",{className:"ml-2"},n.a.createElement("span",{className:"fa fa-comments"})," ",F)),n.a.createElement("h3",null,L),h&&n.a.createElement("p",null,C)));default:return console.error('Unknown PostCard format "'.concat(b,'" on post "').concat(L,'"')),n.a.createElement(m.b,Object.assign({to:x,className:null===f||void 0===f?void 0:f.root},A),n.a.createElement("h2",null,L))}}},170:function(e,a,t){"use strict";t.d(a,"a",(function(){return m}));var l=t(0),r=t(70),n=t(4);function m(){var e=Object(l.useContext)(r.a);return Object(n.f)(e),e}},171:function(e,a,t){"use strict";var l=t(74),r=t(43),n=t(72),m=t(45),s=t(44),c=t(0),i=t(70),o=t(73),u=t(4),d=t(59),p=function(e,a){var t={};for(var l in e)Object.prototype.hasOwnProperty.call(e,l)&&a.indexOf(l)<0&&(t[l]=e[l]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(l=Object.getOwnPropertySymbols(e);r<l.length;r++)a.indexOf(l[r])<0&&Object.prototype.propertyIsEnumerable.call(e,l[r])&&(t[l[r]]=e[l[r]])}return t},E=t.n(d).a||d;function f(e,a){return Object(o.a)(Object.assign(Object.assign({},u.a),{locale:"en"}),Object(u.b)(),e,a)}var v=function(e){Object(s.a)(t,e);var a=Object(m.a)(t);function t(){return Object(r.a)(this,t),a.apply(this,arguments)}return Object(n.a)(t,[{key:"shouldComponentUpdate",value:function(e){var a=this.props,t=a.values,l=p(a,["values"]),r=e.values,n=p(e,["values"]);return!E(r,t)||!E(l,n)}},{key:"render",value:function(){var e=this;return c.createElement(i.a.Consumer,null,(function(a){e.props.defaultMessage||Object(u.f)(a);var t=a||{},r=t.formatMessage,n=void 0===r?f:r,m=t.textComponent,s=void 0===m?c.Fragment:m,i=e.props,o=i.id,d=i.description,p=i.defaultMessage,E=i.values,v=i.children,N=i.tagName,b=void 0===N?s:N,g=n({id:o,description:d,defaultMessage:p},E);return Array.isArray(g)||(g=[g]),"function"===typeof v?v.apply(void 0,Object(l.a)(g)):b?c.createElement.apply(c,[b,null].concat(Object(l.a)(g))):g}))}}]),t}(c.Component);v.displayName="FormattedMessage",v.defaultProps={values:{}},a.a=v},172:function(e,a,t){"use strict";t.r(a);var l=t(0),r=t.n(l);a.default=function(e){var a=e.ice,t=e.model,l=t.bio_t,n=t.name_s,m=t.profilePic_s,s=t.linkButtonText_s,c=t.linkButtonUrl_s,i=t.showLinkButton_b;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",Object.assign({className:"bio text-center"},a),r.a.createElement("img",{src:m,alt:"",className:"img-fluid"}),r.a.createElement("div",{className:"bio-body"},r.a.createElement("h2",null,n),r.a.createElement("p",null,l),i&&r.a.createElement("p",null,r.a.createElement("a",{href:c,className:"btn btn-primary btn-sm rounded"},s)),r.a.createElement("p",{className:"social"},r.a.createElement("a",{href:"/",className:"p-2"},r.a.createElement("span",{className:"fa fa-facebook"})),r.a.createElement("a",{href:"/",className:"p-2"},r.a.createElement("span",{className:"fa fa-twitter"})),r.a.createElement("a",{href:"/",className:"p-2"},r.a.createElement("span",{className:"fa fa-instagram"})),r.a.createElement("a",{href:"/",className:"p-2"},r.a.createElement("span",{className:"fa fa-youtube-play"}))))))}},173:function(e,a,t){"use strict";var l=t(0),r=t.n(l),n=t(172),m=t(25);function s(e){var a=e.model,t=Object(m.c)(e);return r.a.createElement("div",{className:"sidebar-box"},r.a.createElement(n.default,{ice:t,model:a}))}a.a=function(e){var a=e.bios;return r.a.createElement(r.a.Fragment,null,null===a||void 0===a?void 0:a.map((function(e){return r.a.createElement(s,{key:e.craftercms.id,model:e})})))}},174:function(e,a,t){"use strict";var l=t(0),r=t.n(l),n=t(171),m=t(169);a.a=function(e){var a=e.posts;return r.a.createElement("div",{className:"sidebar-box"},r.a.createElement("h3",{className:"heading"},r.a.createElement(n.a,{id:"common.popularPostsTitle",defaultMessage:"Popular Posts"})),r.a.createElement("div",{className:"post-entry-sidebar"},r.a.createElement("ul",null,null===a||void 0===a?void 0:a.map((function(e){return r.a.createElement("li",{key:e.craftercms.id},r.a.createElement(m.d,{model:e,format:m.c}))})))))}},175:function(e,a,t){"use strict";var l=t(0),r=t.n(l),n=t(171);a.a=function(){return r.a.createElement("div",{className:"sidebar-box"},r.a.createElement("h3",{className:"heading"},r.a.createElement(n.a,{id:"sidebarCategories.categoriesSectionTitle",defaultMessage:"Categories"})),r.a.createElement("ul",{className:"categories"},r.a.createElement("li",null,r.a.createElement("a",{href:"/"},"Food ",r.a.createElement("span",null,"(12)"))),r.a.createElement("li",null,r.a.createElement("a",{href:"/"},"Travel ",r.a.createElement("span",null,"(22)"))),r.a.createElement("li",null,r.a.createElement("a",{href:"/"},"Lifestyle ",r.a.createElement("span",null,"(37)"))),r.a.createElement("li",null,r.a.createElement("a",{href:"/"},"Business ",r.a.createElement("span",null,"(42)"))),r.a.createElement("li",null,r.a.createElement("a",{href:"/"},"Adventure ",r.a.createElement("span",null,"(14)")))))}},176:function(e,a,t){"use strict";var l=t(0),r=t.n(l),n=t(171);a.a=function(){return r.a.createElement("div",{className:"sidebar-box"},r.a.createElement("h3",{className:"heading"},r.a.createElement(n.a,{id:"sidebarTags.tagsSectionTitle",defaultMessage:"Tags"})),r.a.createElement("ul",{className:"tags"},r.a.createElement("li",null,r.a.createElement("a",{href:"/"},"Travel")),r.a.createElement("li",null,r.a.createElement("a",{href:"/"},"Adventure")),r.a.createElement("li",null,r.a.createElement("a",{href:"/"},"Food")),r.a.createElement("li",null,r.a.createElement("a",{href:"/"},"Lifestyle")),r.a.createElement("li",null,r.a.createElement("a",{href:"/"},"Business")),r.a.createElement("li",null,r.a.createElement("a",{href:"/"},"Freelancing")),r.a.createElement("li",null,r.a.createElement("a",{href:"/"},"Travel")),r.a.createElement("li",null,r.a.createElement("a",{href:"/"},"Adventure")),r.a.createElement("li",null,r.a.createElement("a",{href:"/"},"Food")),r.a.createElement("li",null,r.a.createElement("a",{href:"/"},"Lifestyle")),r.a.createElement("li",null,r.a.createElement("a",{href:"/"},"Business")),r.a.createElement("li",null,r.a.createElement("a",{href:"/"},"Freelancing"))))}},179:function(e,a,t){"use strict";var l=t(0),r=t.n(l),n=t(166),m=t(170),s=Object(n.a)({searchFormPlaceholder:{id:"home.searchFormPlaceholder",defaultMessage:"Type a keyword and hit enter"}});a.a=function(){var e=Object(m.a)().formatMessage;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"sidebar-box search-form-wrap"},r.a.createElement("form",{action:"#",className:"search-form"},r.a.createElement("div",{className:"form-group"},r.a.createElement("span",{className:"icon fa fa-search"}),r.a.createElement("input",{id:"s",type:"text",className:"form-control",placeholder:e(s.searchFormPlaceholder)})))))}},184:function(e,a,t){"use strict";t.r(a);var l=t(0),r=t.n(l),n=t(71),m=t(75),s=t(174),c=t(169),i=t(175),o=t(176),u=t(179),d=t(173);a.default=function(e){var a,t=e.model,l=e.posts;return r.a.createElement(n.a,null,r.a.createElement("section",{className:"site-section py-lg"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row blog-entries element-animate-disabled"},r.a.createElement("div",{className:"col-md-12 col-lg-8 main-content"},r.a.createElement("img",{src:t.mainImage_s,alt:"",className:"img-fluid mb-5"}),r.a.createElement("div",{className:"post-meta"},r.a.createElement("span",{className:"author mr-2"},r.a.createElement("img",{src:"/static-assets/images/person_1.jpg",alt:"",className:"mr-2"})," Colorlib")," \u2022 ",r.a.createElement("span",{className:"mr-2"},t.createdDate_dt)," \u2022 ",r.a.createElement("span",{className:"ml-2"},r.a.createElement("span",{className:"fa fa-comments"})," 3")),r.a.createElement("h1",{className:"mb-4"},t.headline_s),r.a.createElement("a",{className:"category mb-5",href:"/"},"Food")," ",r.a.createElement("a",{className:"category mb-5",href:"/"},"Travel"),r.a.createElement("div",{className:"post-content-body"},null===(a=t.content_o)||void 0===a?void 0:a.map((function(e){return r.a.createElement(m.b,{model:e,parentModelId:t.craftercms.path,key:e.craftercms.id})}))),r.a.createElement("div",{className:"pt-5"},r.a.createElement("p",null,"Categories: ",r.a.createElement("a",{href:"/"},"Food"),", ",r.a.createElement("a",{href:"/"},"Travel")," Tags: ",r.a.createElement("a",{href:"/"},"#manila"),", ",r.a.createElement("a",{href:"/"},"#asia"))),r.a.createElement("div",{className:"pt-5"},r.a.createElement("h3",{className:"mb-5"},"6 Comments"),r.a.createElement("ul",{className:"comment-list"},r.a.createElement("li",{className:"comment"},r.a.createElement("div",{className:"vcard"},r.a.createElement("img",{src:"/static-assets/images/person_1.jpg",alt:""})),r.a.createElement("div",{className:"comment-body"},r.a.createElement("h3",null,"Jean Doe"),r.a.createElement("div",{className:"meta"},"January 9, 2018 at 2:21pm"),r.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem laborum necessitatibus, ipsam impedit vitae autem, eum officia, fugiat saepe enim sapiente iste iure! Quam voluptas earum impedit necessitatibus, nihil?"),r.a.createElement("p",null,r.a.createElement("a",{href:"/",className:"reply rounded"},"Reply")))),r.a.createElement("li",{className:"comment"},r.a.createElement("div",{className:"vcard"},r.a.createElement("img",{src:"/static-assets/images/person_1.jpg",alt:""})),r.a.createElement("div",{className:"comment-body"},r.a.createElement("h3",null,"Jean Doe"),r.a.createElement("div",{className:"meta"},"January 9, 2018 at 2:21pm"),r.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem laborum necessitatibus, ipsam impedit vitae autem, eum officia, fugiat saepe enim sapiente iste iure! Quam voluptas earum impedit necessitatibus, nihil?"),r.a.createElement("p",null,r.a.createElement("a",{href:"/",className:"reply rounded"},"Reply"))),r.a.createElement("ul",{className:"children"},r.a.createElement("li",{className:"comment"},r.a.createElement("div",{className:"vcard"},r.a.createElement("img",{src:"/static-assets/images/person_1.jpg",alt:""})),r.a.createElement("div",{className:"comment-body"},r.a.createElement("h3",null,"Jean Doe"),r.a.createElement("div",{className:"meta"},"January 9, 2018 at 2:21pm"),r.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem laborum necessitatibus, ipsam impedit vitae autem, eum officia, fugiat saepe enim sapiente iste iure! Quam voluptas earum impedit necessitatibus, nihil?"),r.a.createElement("p",null,r.a.createElement("a",{href:"/",className:"reply rounded"},"Reply"))),r.a.createElement("ul",{className:"children"},r.a.createElement("li",{className:"comment"},r.a.createElement("div",{className:"vcard"},r.a.createElement("img",{src:"/static-assets/images/person_1.jpg",alt:""})),r.a.createElement("div",{className:"comment-body"},r.a.createElement("h3",null,"Jean Doe"),r.a.createElement("div",{className:"meta"},"January 9, 2018 at 2:21pm"),r.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem laborum necessitatibus, ipsam impedit vitae autem, eum officia, fugiat saepe enim sapiente iste iure! Quam voluptas earum impedit necessitatibus, nihil?"),r.a.createElement("p",null,r.a.createElement("a",{href:"/",className:"reply rounded"},"Reply"))),r.a.createElement("ul",{className:"children"},r.a.createElement("li",{className:"comment"},r.a.createElement("div",{className:"vcard"},r.a.createElement("img",{src:"/static-assets/images/person_1.jpg",alt:""})),r.a.createElement("div",{className:"comment-body"},r.a.createElement("h3",null,"Jean Doe"),r.a.createElement("div",{className:"meta"},"January 9, 2018 at 2:21pm"),r.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem laborum necessitatibus, ipsam impedit vitae autem, eum officia, fugiat saepe enim sapiente iste iure! Quam voluptas earum impedit necessitatibus, nihil?"),r.a.createElement("p",null,r.a.createElement("a",{href:"/",className:"reply rounded"},"Reply")))))))))),r.a.createElement("li",{className:"comment"},r.a.createElement("div",{className:"vcard"},r.a.createElement("img",{src:"/static-assets/images/person_1.jpg",alt:""})),r.a.createElement("div",{className:"comment-body"},r.a.createElement("h3",null,"Jean Doe"),r.a.createElement("div",{className:"meta"},"January 9, 2018 at 2:21pm"),r.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem laborum necessitatibus, ipsam impedit vitae autem, eum officia, fugiat saepe enim sapiente iste iure! Quam voluptas earum impedit necessitatibus, nihil?"),r.a.createElement("p",null,r.a.createElement("a",{href:"/",className:"reply rounded"},"Reply"))))),r.a.createElement("div",{className:"comment-form-wrap pt-5"},r.a.createElement("h3",{className:"mb-5"},"Leave a comment"),r.a.createElement("form",{action:"#",className:"p-5 bg-light"},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"name"},"Name *"),r.a.createElement("input",{type:"text",className:"form-control",id:"name"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"email"},"Email *"),r.a.createElement("input",{type:"email",className:"form-control",id:"email"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"website"},"Website"),r.a.createElement("input",{type:"url",className:"form-control",id:"website"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"message"},"Message"),r.a.createElement("textarea",{name:"",id:"message",cols:"30",rows:"10",className:"form-control"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"submit",value:"Post Comment",className:"btn btn-primary"})))))),r.a.createElement("div",{className:"col-md-12 col-lg-4 sidebar"},r.a.createElement(u.a,null),r.a.createElement(d.a,{bios:t.authorBio_o}),r.a.createElement(s.a,{posts:l}),r.a.createElement(i.a,null),r.a.createElement(o.a,null))))),r.a.createElement("section",{className:"py-5"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-12"},r.a.createElement("h2",{className:"mb-3 "},"Related Post"))),r.a.createElement("div",{className:"row"},null===l||void 0===l?void 0:l.map((function(e){return r.a.createElement("div",{key:e.craftercms.id,className:"col-md-6 col-lg-4"},r.a.createElement(c.d,{model:e,format:c.a,classes:{root:"sm height-md"}}))}))))))}}}]);
//# sourceMappingURL=6.42d0423b.chunk.js.map