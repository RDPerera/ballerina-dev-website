(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7241],{861:function(e,n,t){"use strict";t.d(n,{FT:function(){return s}});var r=t(7294),a=t(5893);const o=["as","disabled"];function s({tagName:e,disabled:n,href:t,target:r,rel:a,onClick:o,tabIndex:s=0,type:i}){e||(e=null!=t||null!=r||null!=a?"a":"button");const l={tagName:e};if("button"===e)return[{type:i||"button",disabled:n},l];const c=r=>{(n||"a"===e&&function(e){return!e||"#"===e.trim()}(t))&&r.preventDefault(),n?r.stopPropagation():null==o||o(r)};return"a"===e&&(t||(t="#"),n&&(t=void 0)),[{role:"button",disabled:void 0,tabIndex:n?void 0:s,href:t,target:"a"===e?r:void 0,"aria-disabled":n||void 0,rel:"a"===e?a:void 0,onClick:c,onKeyDown:e=>{" "===e.key&&(e.preventDefault(),c(e))}},l]}const i=r.forwardRef(((e,n)=>{let{as:t,disabled:r}=e,i=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,o);const[l,{tagName:c}]=s(Object.assign({tagName:t,disabled:r},i));return(0,a.jsx)(c,Object.assign({},i,l,{ref:n}))}));i.displayName="Button",n.ZP=i},7510:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/downloads/1.2.x-release-notes/[...slug]",function(){return t(1205)}])},1205:function(e,n,t){"use strict";t.r(n),t.d(n,{__N_SSG:function(){return L},default:function(){return Z}});var r=t(4051),a=t.n(r),o=t(5893),s=(t(6299),t(7294)),i=t(8999),l=t(1555),c=t(5005),d=t(4077),u=t(682),f=t(3205),h=t(9323),m=t(1058),p=t(9008),g=t(1722),x=t(7908),v=t(6248),b=t(5640),w=t(7287),y=t(1717);function j(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function N(e,n,t,r,a,o,s){try{var i=e[o](s),l=i.value}catch(c){return void t(c)}i.done?n(l):Promise.resolve(l).then(r,a)}function k(e){return function(){var n=this,t=arguments;return new Promise((function(r,a){var o=e.apply(n,t);function s(e){N(o,r,a,s,i,"next",e)}function i(e){N(o,r,a,s,i,"throw",e)}s(void 0)}))}}function C(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function E(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){C(e,n,t[n])}))}return e}function O(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}function A(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,a,o=[],s=!0,i=!1;try{for(t=t.call(e);!(s=(r=t.next()).done)&&(o.push(r.value),!n||o.length!==n);s=!0);}catch(l){i=!0,a=l}finally{try{s||null==t.return||t.return()}finally{if(i)throw a}}return o}}(e,n)||function(e,n){if(!e)return;if("string"===typeof e)return j(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return j(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}(0,g.EG)("https://unpkg.com/shiki/");var L=!0;function Z(e){var n=e.frontmatter,t=e.content,r=e.id,j=function(e,n){var t=A(s.useState([]),2),r=t[0],o=t[1];return s.useEffect((function(){function t(){return(t=k(a().mark((function t(){return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:(0,g.FP)({theme:"github-light",langs:["bash","ballerina","toml","yaml","sh","json","graphql","sql"]}).then((function(t){o(t.codeToHtml(e,n))}));case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[e,n]),[r]},N=A(s.useState(!1),2),C=N[0],L=N[1],Z=function(e){return"string"===typeof e?e:e.props.children},P=function(e){var n=e.map(Z).join("").replace(/[&\/\\#,+()!$~%.'\u2019":*?<>{}]/g,"").toLowerCase();return n=n.replace(/ /g,"-")},B=function(e,n){"path"===e.tagName.toLowerCase()&&(e=e.parentElement);var t=document.querySelectorAll("#".concat(n)),r=Array.prototype.slice.call(t).indexOf(e.parentElement);location.hash=0===r?"#".concat(n):"#".concat(n,"-").concat(r),navigator.clipboard.writeText(window.location.href),e.parentElement.scrollIntoView()},S=A(s.useState(!1),2),M=S[0],$=S[1];return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(p.default,{children:[(0,o.jsx)("meta",{name:"description",content:"A programming language for the cloud that makes it easier to use, combine, and create network services."}),(0,o.jsx)("meta",{name:"keywords",content:"ballerinalang, integration, microservices, programming language, cloud native, ballerina language"}),(0,o.jsx)("title",{children:n.title}),(0,o.jsx)("meta",{property:"og:type",content:"article"}),(0,o.jsx)("meta",{property:"og:title",content:"Ballerina - ".concat(n.title)}),(0,o.jsx)("meta",{property:"og:description",content:"A programming language for the cloud that makes it easier to use, combine, and create network services."}),(0,o.jsx)("meta",{property:"og:title",content:"Ballerina"}),(0,o.jsx)("meta",{property:"twitter:description",content:"A programming language for the cloud that makes it easier to use, combine, and create network services."}),(0,o.jsx)("meta",{property:"twitter:text:description",content:"A programming language for the cloud that makes it easier to use, combine, and create network services."})]}),(0,o.jsxs)(x.Z,{children:[(0,o.jsx)(l.Z,{sm:3,xxl:2,className:"leftNav d-none d-sm-block",children:(0,o.jsx)(v.default,{launcher:"rn",id:r,mainDir:"1.2.x-release-notes",Toc:w})}),(0,o.jsxs)(l.Z,{xs:12,className:"d-block d-sm-none",children:[(0,o.jsx)(c.Z,{className:"learnMob",onClick:function(){return L(!0)},children:"Release notes"}),(0,o.jsxs)(d.Z,{show:C,onHide:function(){return L(!1)},children:[(0,o.jsx)(d.Z.Header,{closeButton:!0}),(0,o.jsx)(d.Z.Body,{children:(0,o.jsx)(v.default,{launcher:"rn",id:r,mainDir:"1.2.x-release-notes",Toc:w})})]})]}),(0,o.jsx)(l.Z,{xs:12,sm:7,xxl:7,className:"mdContent",children:(0,o.jsxs)(u.Z,{children:[(0,o.jsxs)("div",{className:"topRow",children:[(0,o.jsx)(l.Z,{xs:11,children:(0,o.jsx)("h1",{children:n.title})}),(0,o.jsx)(l.Z,{xs:1,className:"gitIcon",children:(0,o.jsx)("a",{href:"".concat("https://github.com/ballerina-platform/ballerina-dev-website/blob/website-revamp/","downloads/1.2.x-release-notes/").concat(r,".md"),children:(0,o.jsx)(m.Z,{src:"".concat(b.O,"/images/github.svg"),height:20,width:20,alt:"Edit in github"})})})]}),(0,o.jsx)(i.D,{components:{h1:function(e){e.node,e.inline,e.className;var n=e.children,t=(O(e,["node","inline","className","children"]),"");return $(!0),t=1===n.length?n[0].toLowerCase().replace(/[&\/\\#,+()!$~%.'\u2019":*?<>{}]/g,"").replace(/ /g,"-"):P(n),(0,o.jsxs)("h1",{id:t,"data-section":t,className:"section",children:[(0,o.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",fill:"currentColor",className:"bi bi-link-45deg mdButton pe-2",viewBox:"0 0 16 16",onClick:function(e){return B(e.target,t)},children:[(0,o.jsx)("path",{d:"M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z"}),(0,o.jsx)("path",{d:"M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z"})]}),n]})},h2:function(e){e.node,e.inline,e.className;var n=e.children,t=(O(e,["node","inline","className","children"]),"");return $(!0),t=1===n.length?n[0].toLowerCase().replace(/[&\/\\#,+()!$~%.'\u2019":*?<>{}]/g,"").replace(/ /g,"-"):P(n),(0,o.jsxs)("h2",{id:t,"data-section":t,className:"section",children:[(0,o.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",fill:"currentColor",className:"bi bi-link-45deg mdButton pe-2",viewBox:"0 0 16 16",onClick:function(e){return B(e.target,t)},children:[(0,o.jsx)("path",{d:"M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z"}),(0,o.jsx)("path",{d:"M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z"})]}),n]})},h3:function(e){e.node,e.inline,e.className;var n=e.children,t=(O(e,["node","inline","className","children"]),"");return $(!0),t=1===n.length?n[0].toLowerCase().replace(/[&\/\\#,+()!$~%.'\u2019":*?<>{}]/g,"").replace(/ /g,"-"):P(n),(0,o.jsxs)("h3",{id:t,"data-section":t,className:"section",children:[(0,o.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",fill:"currentColor",className:"bi bi-link-45deg mdButton pe-2",viewBox:"0 0 16 16",onClick:function(e){return B(e.target,t)},children:[(0,o.jsx)("path",{d:"M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z"}),(0,o.jsx)("path",{d:"M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z"})]}),n]})},h4:function(e){e.node,e.inline,e.className;var n=e.children,t=(O(e,["node","inline","className","children"]),"");return $(!0),t=1===n.length?n[0].toLowerCase().replace(/[&\/\\#,+()!$~%.'\u2019":*?<>{}]/g,"").replace(/ /g,"-"):P(n),(0,o.jsxs)("h4",{id:t,"data-section":t,className:"section",children:[(0,o.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",fill:"currentColor",className:"bi bi-link-45deg mdButton pe-2",viewBox:"0 0 16 16",onClick:function(e){return B(e.target,t)},children:[(0,o.jsx)("path",{d:"M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z"}),(0,o.jsx)("path",{d:"M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z"})]}),n]})},h5:function(e){e.node,e.inline,e.className;var n=e.children,t=(O(e,["node","inline","className","children"]),"");return $(!0),t=1===n.length?n[0].toLowerCase().replace(/[&\/\\#,+()!$~%.'\u2019":*?<>{}]/g,"").replace(/ /g,"-"):P(n),(0,o.jsxs)("h5",{id:t,"data-section":t,className:"section",children:[(0,o.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",fill:"currentColor",className:"bi bi-link-45deg mdButton pe-2",viewBox:"0 0 16 16",onClick:function(e){return B(e.target,t)},children:[(0,o.jsx)("path",{d:"M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z"}),(0,o.jsx)("path",{d:"M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z"})]}),n]})},h6:function(e){e.node,e.inline,e.className;var n=e.children,t=(O(e,["node","inline","className","children"]),"");return $(!0),t=1===n.length?n[0].toLowerCase().replace(/[&\/\\#,+()!$~%.'\u2019":*?<>{}]/g,"").replace(/ /g,"-"):P(n),(0,o.jsxs)("h6",{id:t,"data-section":t,className:"section",children:[(0,o.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",fill:"currentColor",className:"bi bi-link-45deg mdButton pe-2",viewBox:"0 0 16 16",onClick:function(e){return B(e.target,t)},children:[(0,o.jsx)("path",{d:"M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z"}),(0,o.jsx)("path",{d:"M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z"})]}),n]})},code:function(e){e.node;var n=e.inline,t=e.className,r=e.children,a=O(e,["node","inline","className","children"]),s=/language-(\w+)/.exec(t||"");return n?(0,o.jsx)("code",E({className:t},a,{children:r})):s?(0,o.jsx)("div",{dangerouslySetInnerHTML:{__html:j(String(r).replace(/\n$/,""),s[1].toLowerCase())}}):(0,o.jsx)("pre",{className:"default",children:(0,o.jsx)("code",E({className:t},a,{children:r}))})}},remarkPlugins:[f.Z],rehypePlugins:[h.Z],children:t})]})}),(0,o.jsx)(l.Z,{sm:2,xxl:3,className:"pageToc d-none d-sm-block",children:M?(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("h6",{children:"On this page"}),(0,o.jsx)(y.Z,{source:t})]}):null})]})]})}},5607:function(e,n,t){"use strict";t.d(n,{Z:function(){return E}});var r=t(4184),a=t.n(r),o=t(7294),s=t(5446),i=t(6792),l=t(6518);function c(e,n){return Array.isArray(e)?e.includes(n):e===n}const d=o.createContext({});d.displayName="AccordionContext";var u=d,f=t(5893);const h=o.forwardRef((({as:e="div",bsPrefix:n,className:t,children:r,eventKey:s,...d},h)=>{const{activeEventKey:m}=(0,o.useContext)(u);return n=(0,i.vE)(n,"accordion-collapse"),(0,f.jsx)(l.Z,{ref:h,in:c(m,s),...d,className:a()(t,n),children:(0,f.jsx)(e,{children:o.Children.only(r)})})}));h.displayName="AccordionCollapse";var m=h;const p=o.createContext({eventKey:""});p.displayName="AccordionItemContext";var g=p;const x=o.forwardRef((({as:e="div",bsPrefix:n,className:t,...r},s)=>{n=(0,i.vE)(n,"accordion-body");const{eventKey:l}=(0,o.useContext)(g);return(0,f.jsx)(m,{eventKey:l,children:(0,f.jsx)(e,{ref:s,...r,className:a()(t,n)})})}));x.displayName="AccordionBody";var v=x;const b=o.forwardRef((({as:e="button",bsPrefix:n,className:t,onClick:r,...s},l)=>{n=(0,i.vE)(n,"accordion-button");const{eventKey:d}=(0,o.useContext)(g),h=function(e,n){const{activeEventKey:t,onSelect:r,alwaysOpen:a}=(0,o.useContext)(u);return o=>{let s=e===t?null:e;a&&(s=Array.isArray(t)?t.includes(e)?t.filter((n=>n!==e)):[...t,e]:[e]),null==r||r(s,o),null==n||n(o)}}(d,r),{activeEventKey:m}=(0,o.useContext)(u);return"button"===e&&(s.type="button"),(0,f.jsx)(e,{ref:l,onClick:h,...s,"aria-expanded":d===m,className:a()(t,n,!c(m,d)&&"collapsed")})}));b.displayName="AccordionButton";var w=b;const y=o.forwardRef((({as:e="h2",bsPrefix:n,className:t,children:r,onClick:o,...s},l)=>(n=(0,i.vE)(n,"accordion-header"),(0,f.jsx)(e,{ref:l,...s,className:a()(t,n),children:(0,f.jsx)(w,{onClick:o,children:r})}))));y.displayName="AccordionHeader";var j=y;const N=o.forwardRef((({as:e="div",bsPrefix:n,className:t,eventKey:r,...s},l)=>{n=(0,i.vE)(n,"accordion-item");const c=(0,o.useMemo)((()=>({eventKey:r})),[r]);return(0,f.jsx)(g.Provider,{value:c,children:(0,f.jsx)(e,{ref:l,...s,className:a()(t,n)})})}));N.displayName="AccordionItem";var k=N;const C=o.forwardRef(((e,n)=>{const{as:t="div",activeKey:r,bsPrefix:l,className:c,onSelect:d,flush:h,alwaysOpen:m,...p}=(0,s.Ch)(e,{activeKey:"onSelect"}),g=(0,i.vE)(l,"accordion"),x=(0,o.useMemo)((()=>({activeEventKey:r,onSelect:d,alwaysOpen:m})),[r,d,m]);return(0,f.jsx)(u.Provider,{value:x,children:(0,f.jsx)(t,{ref:n,...p,className:a()(c,g,h&&`${g}-flush`)})})}));C.displayName="Accordion";var E=Object.assign(C,{Button:w,Collapse:m,Item:k,Header:j,Body:v})},5005:function(e,n,t){"use strict";var r=t(4184),a=t.n(r),o=t(7294),s=t(861),i=t(6792),l=t(5893);const c=o.forwardRef((({as:e,bsPrefix:n,variant:t,size:r,active:o,className:c,...d},u)=>{const f=(0,i.vE)(n,"btn"),[h,{tagName:m}]=(0,s.FT)({tagName:e,...d}),p=m;return(0,l.jsx)(p,{...h,...d,ref:u,className:a()(c,f,o&&"active",t&&`${f}-${t}`,r&&`${f}-${r}`,d.href&&d.disabled&&"disabled")})}));c.displayName="Button",c.defaultProps={variant:"primary",active:!1,disabled:!1},n.Z=c},4819:function(e,n,t){"use strict";const r=t(7294).createContext(null);r.displayName="NavbarContext",n.Z=r},4077:function(e,n,t){"use strict";t.d(n,{Z:function(){return Z}});var r=t(4184),a=t.n(r),o=t(8146),s=t(7294),i=t(5288),l=t(1068),c=t(6611),d=(0,c.Z)("offcanvas-body"),u=t(5257),f=t(3825),h=t(2785),m=t(6792),p=t(5893);const g={[u.d0]:"show",[u.cn]:"show"},x=s.forwardRef((({bsPrefix:e,className:n,children:t,...r},o)=>(e=(0,m.vE)(e,"offcanvas"),(0,p.jsx)(h.Z,{ref:o,addEndListener:f.Z,...r,childRef:t.ref,children:(r,o)=>s.cloneElement(t,{...o,className:a()(n,t.props.className,(r===u.d0||r===u.Ix)&&`${e}-toggling`,g[r])})}))));x.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1},x.displayName="OffcanvasToggling";var v=x,b=t(6467),w=t(4819),y=t(703);const j=s.forwardRef((({bsPrefix:e,className:n,...t},r)=>(e=(0,m.vE)(e,"offcanvas-header"),(0,p.jsx)(y.Z,{ref:r,...t,className:a()(n,e)}))));j.displayName="OffcanvasHeader",j.defaultProps={closeLabel:"Close",closeButton:!1};var N=j;const k=(0,t(9602).Z)("h5");var C=(0,c.Z)("offcanvas-title",{Component:k}),E=t(9673);function O(e){return(0,p.jsx)(v,{...e})}function A(e){return(0,p.jsx)(l.Z,{...e})}const L=s.forwardRef((({bsPrefix:e,className:n,children:t,"aria-labelledby":r,placement:l,show:c,backdrop:d,keyboard:u,scroll:f,onEscapeKeyDown:h,onShow:g,onHide:x,container:v,autoFocus:y,enforceFocus:j,restoreFocus:N,restoreFocusOptions:k,onEntered:C,onExit:L,onExiting:Z,onEnter:P,onEntering:B,onExited:S,backdropClassName:M,manager:$,..._},F)=>{const K=(0,s.useRef)();e=(0,m.vE)(e,"offcanvas");const{onToggle:R}=(0,s.useContext)(w.Z)||{},T=(0,o.Z)((()=>{null==R||R(),null==x||x()})),z=(0,s.useMemo)((()=>({onHide:T})),[T]);const I=(0,s.useCallback)((n=>(0,p.jsx)("div",{...n,className:a()(`${e}-backdrop`,M)})),[M,e]);return(0,p.jsx)(b.Z.Provider,{value:z,children:(0,p.jsx)(i.Z,{show:c,ref:F,backdrop:d,container:v,keyboard:u,autoFocus:y,enforceFocus:j&&!f,restoreFocus:N,restoreFocusOptions:k,onEscapeKeyDown:h,onShow:g,onHide:T,onEnter:(e,...n)=>{e&&(e.style.visibility="visible"),null==P||P(e,...n)},onEntering:B,onEntered:C,onExit:L,onExiting:Z,onExited:(e,...n)=>{e&&(e.style.visibility=""),null==S||S(...n)},manager:$||(f?(K.current||(K.current=new E.Z({handleContainerOverflow:!1})),K.current):(0,E.t)()),transition:O,backdropTransition:A,renderBackdrop:I,renderDialog:o=>(0,p.jsx)("div",{role:"dialog",...o,..._,className:a()(n,e,`${e}-${l}`),"aria-labelledby":r,children:t})})})}));L.displayName="Offcanvas",L.defaultProps={show:!1,backdrop:!0,keyboard:!0,scroll:!1,autoFocus:!0,enforceFocus:!0,restoreFocus:!0,placement:"start"};var Z=Object.assign(L,{Body:d,Header:N,Title:C})},6299:function(){}},function(e){e.O(0,[9733,4585,6599,2092,8258,6664,1722,3172,5969,9774,2888,179],(function(){return n=7510,e(e.s=n);var n}));var n=e.O();_N_E=n}]);