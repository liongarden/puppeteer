"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[24076],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>f});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=n.createContext({}),l=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},u=function(e){var r=l(e.components);return n.createElement(p.Provider,{value:r},e.children)},c={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=l(t),f=o,b=m["".concat(p,".").concat(f)]||m[f]||c[f]||i;return t?n.createElement(b,a(a({ref:r},u),{},{components:t})):n.createElement(b,a({ref:r},u))}));function f(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=m;var s={};for(var p in r)hasOwnProperty.call(r,p)&&(s[p]=r[p]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=t[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},10143:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>a,metadata:()=>p,toc:()=>u});t(67294);var n=t(3905);function o(){return o=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},o.apply(this,arguments)}function i(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}const a={sidebar_label:"Browser.version"},s="Browser.version() method",p={unversionedId:"api/puppeteer.browser.version",id:"version-17.1.3/api/puppeteer.browser.version",title:"Browser.version() method",description:"A string representing the browser name and version.",source:"@site/versioned_docs/version-17.1.3/api/puppeteer.browser.version.md",sourceDirName:"api",slug:"/api/puppeteer.browser.version",permalink:"/api/puppeteer.browser.version",draft:!1,tags:[],version:"17.1.3",frontMatter:{sidebar_label:"Browser.version"},sidebar:"sidebar",previous:{title:"Browser.userAgent",permalink:"/api/puppeteer.browser.useragent"},next:{title:"Browser.waitForTarget",permalink:"/api/puppeteer.browser.waitfortarget"}},l={},u=[{value:"Remarks",id:"remarks",level:2}],c={toc:u};function m(e){var{components:r}=e,t=i(e,["components"]);return(0,n.kt)("wrapper",o({},c,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",o({},{id:"browserversion-method"}),"Browser.version() method"),(0,n.kt)("p",null,"A string representing the browser name and version."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Signature:")),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{className:"language-typescript"}),"class Browser {\n  version(): Promise<string>;\n}\n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Returns:")),(0,n.kt)("p",null,"Promise","<","string",">"),(0,n.kt)("h2",o({},{id:"remarks"}),"Remarks"),(0,n.kt)("p",null,"For headless Chromium, this is similar to ",(0,n.kt)("inlineCode",{parentName:"p"},"HeadlessChrome/61.0.3153.0"),". For non-headless, this is similar to ",(0,n.kt)("inlineCode",{parentName:"p"},"Chrome/61.0.3153.0"),"."),(0,n.kt)("p",null,"The format of browser.version() might change with future releases of Chromium."))}m.isMDXComponent=!0}}]);