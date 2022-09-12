"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[21613],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),m=l(r),d=o,c=m["".concat(s,".").concat(d)]||m[d]||h[d]||a;return r?n.createElement(c,i(i({ref:t},u),{},{components:r})):n.createElement(c,i({ref:t},u))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},58045:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>u});r(67294);var n=r(3905);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o.apply(this,arguments)}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const i={sidebar_position:2},p="FAQ",s={unversionedId:"faq",id:"version-17.1.3/faq",title:"FAQ",description:"Q: Who maintains Puppeteer?",source:"@site/versioned_docs/version-17.1.3/faq.md",sourceDirName:".",slug:"/faq",permalink:"/faq",draft:!1,tags:[],version:"17.1.3",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"sidebar",previous:{title:"Puppeteer",permalink:"/"},next:{title:"Troubleshooting",permalink:"/troubleshooting"}},l={},u=[{value:"Q: Who maintains Puppeteer?",id:"q-who-maintains-puppeteer",level:2},{value:"Q: What is the status of cross-browser support?",id:"q-what-is-the-status-of-cross-browser-support",level:2},{value:"Q: What are Puppeteer\u2019s goals and principles?",id:"q-what-are-puppeteers-goals-and-principles",level:2},{value:"Q: Is Puppeteer replacing Selenium/WebDriver?",id:"q-is-puppeteer-replacing-seleniumwebdriver",level:2},{value:"Q: Why doesn\u2019t Puppeteer v.XXX work with Chromium v.YYY?",id:"q-why-doesnt-puppeteer-vxxx-work-with-chromium-vyyy",level:2},{value:"Q: Which Chromium version does Puppeteer use?",id:"q-which-chromium-version-does-puppeteer-use",level:2},{value:"Q: Which Firefox version does Puppeteer use?",id:"q-which-firefox-version-does-puppeteer-use",level:2},{value:"Q: What\u2019s considered a \u201cNavigation\u201d?",id:"q-whats-considered-a-navigation",level:4},{value:"Q: What\u2019s the difference between a \u201ctrusted&quot; and &quot;untrusted&quot; input event?",id:"q-whats-the-difference-between-a-trusted-and-untrusted-input-event",level:4},{value:"Q: What features does Puppeteer not support?",id:"q-what-features-does-puppeteer-not-support",level:4},{value:"Q: I am having trouble installing / running Puppeteer in my test environment. Where should I look for help?",id:"q-i-am-having-trouble-installing--running-puppeteer-in-my-test-environment-where-should-i-look-for-help",level:4},{value:"Q: Chromium gets downloaded on every <code>npm ci</code> run. How can I cache the download?",id:"q-chromium-gets-downloaded-on-every-npm-ci-run-how-can-i-cache-the-download",level:4},{value:"Q: I have more questions! Where do I ask?",id:"q-i-have-more-questions-where-do-i-ask",level:4}],h={toc:u};function m(e){var{components:t}=e,r=a(e,["components"]);return(0,n.kt)("wrapper",o({},h,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",o({},{id:"faq"}),"FAQ"),(0,n.kt)("h2",o({},{id:"q-who-maintains-puppeteer"}),"Q: Who maintains Puppeteer?"),(0,n.kt)("p",null,"The Chrome DevTools team maintains the library, but we'd love your help and expertise on the project!\nSee our ",(0,n.kt)("a",o({parentName:"p"},{href:"https://pptr.dev/contributing"}),"contributing guide"),"."),(0,n.kt)("h2",o({},{id:"q-what-is-the-status-of-cross-browser-support"}),"Q: What is the status of cross-browser support?"),(0,n.kt)("p",null,"Official Firefox support is currently experimental. The ongoing collaboration with Mozilla aims to support common end-to-end testing use cases, for which developers expect cross-browser coverage. The Puppeteer team needs input from users to stabilize Firefox support and to bring missing APIs to our attention."),(0,n.kt)("p",null,"From Puppeteer v2.1.0 onwards you can specify ",(0,n.kt)("a",o({parentName:"p"},{href:"https://pptr.dev/api/puppeteer.puppeteernode.launch"}),(0,n.kt)("inlineCode",{parentName:"a"},"puppeteer.launch({product: 'firefox'})"))," to run your Puppeteer scripts in Firefox Nightly, without any additional custom patches. While ",(0,n.kt)("a",o({parentName:"p"},{href:"https://www.npmjs.com/package/puppeteer-firefox"}),"an older experiment")," required a patched version of Firefox, ",(0,n.kt)("a",o({parentName:"p"},{href:"https://wiki.mozilla.org/Remote"}),"the current approach")," works with \u201cstock\u201d Firefox."),(0,n.kt)("p",null,"We will continue to collaborate with other browser vendors to bring Puppeteer support to browsers such as Safari.\nThis effort includes exploration of a standard for executing cross-browser commands (instead of relying on the non-standard DevTools Protocol used by Chrome)."),(0,n.kt)("h2",o({},{id:"q-what-are-puppeteers-goals-and-principles"}),"Q: What are Puppeteer\u2019s goals and principles?"),(0,n.kt)("p",null,"The goals of the project are:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Provide a slim, canonical library that highlights the capabilities of the ",(0,n.kt)("a",o({parentName:"li"},{href:"https://chromedevtools.github.io/devtools-protocol/"}),"DevTools Protocol"),"."),(0,n.kt)("li",{parentName:"ul"},"Provide a reference implementation for similar testing libraries. Eventually, these other frameworks could adopt Puppeteer as their foundational layer."),(0,n.kt)("li",{parentName:"ul"},"Grow the adoption of headless/automated browser testing."),(0,n.kt)("li",{parentName:"ul"},"Help dogfood new DevTools Protocol features...and catch bugs!"),(0,n.kt)("li",{parentName:"ul"},"Learn more about the pain points of automated browser testing and help fill those gaps.")),(0,n.kt)("p",null,"We adapt ",(0,n.kt)("a",o({parentName:"p"},{href:"https://www.chromium.org/developers/core-principles"}),"Chromium principles")," to help us drive product decisions:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Speed"),": Puppeteer has almost zero performance overhead over an automated page."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Security"),": Puppeteer operates off-process with respect to Chromium, making it safe to automate potentially malicious pages."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Stability"),": Puppeteer should not be flaky and should not leak memory."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Simplicity"),": Puppeteer provides a high-level API that\u2019s easy to use, understand, and debug.")),(0,n.kt)("h2",o({},{id:"q-is-puppeteer-replacing-seleniumwebdriver"}),"Q: Is Puppeteer replacing Selenium/WebDriver?"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"No"),". Both projects are valuable for very different reasons:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Selenium/WebDriver focuses on cross-browser automation; its value proposition is a single standard API that works across all major browsers."),(0,n.kt)("li",{parentName:"ul"},"Puppeteer focuses on Chromium; its value proposition is richer functionality and higher reliability.")),(0,n.kt)("p",null,"That said, you ",(0,n.kt)("strong",{parentName:"p"},"can")," use Puppeteer to run tests against Chromium, e.g. using the community-driven ",(0,n.kt)("a",o({parentName:"p"},{href:"https://github.com/smooth-code/jest-puppeteer"}),"jest-puppeteer"),". While this probably shouldn\u2019t be your only testing solution, it does have a few good points compared to WebDriver:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Puppeteer requires zero setup and comes bundled with the Chromium version it works best with, making it ",(0,n.kt)("a",o({parentName:"li"},{href:"https://github.com/puppeteer/puppeteer/#getting-started"}),"very easy to start with"),". At the end of the day, it\u2019s better to have a few tests running chromium-only, than no tests at all."),(0,n.kt)("li",{parentName:"ul"},"Puppeteer has event-driven architecture, which removes a lot of potential flakiness. There\u2019s no need for evil \u201csleep(1000)\u201d calls in puppeteer scripts."),(0,n.kt)("li",{parentName:"ul"},"Puppeteer runs headless by default, which makes it fast to run. Puppeteer v1.5.0 also exposes browser contexts, making it possible to efficiently parallelize test execution."),(0,n.kt)("li",{parentName:"ul"},"Puppeteer shines when it comes to debugging: flip the \u201cheadless\u201d bit to false, add \u201cslowMo\u201d, and you\u2019ll see what the browser is doing. You can even open Chrome DevTools to inspect the test environment.")),(0,n.kt)("h2",o({},{id:"q-why-doesnt-puppeteer-vxxx-work-with-chromium-vyyy"}),"Q: Why doesn\u2019t Puppeteer v.XXX work with Chromium v.YYY?"),(0,n.kt)("p",null,"We see Puppeteer as an ",(0,n.kt)("strong",{parentName:"p"},"indivisible entity")," with Chromium. Each version of Puppeteer bundles a specific version of Chromium \u2013 ",(0,n.kt)("strong",{parentName:"p"},"the only")," version it is guaranteed to work with."),(0,n.kt)("p",null,"This is not an artificial constraint: A lot of work on Puppeteer is actually taking place in the Chromium repository. Here\u2019s a typical story:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"A Puppeteer bug is reported: ",(0,n.kt)("a",o({parentName:"li"},{href:"https://github.com/puppeteer/puppeteer/issues/2709"}),"https://github.com/puppeteer/puppeteer/issues/2709")),(0,n.kt)("li",{parentName:"ul"},"It turned out this is an issue with the DevTools protocol, so we\u2019re fixing it in Chromium: ",(0,n.kt)("a",o({parentName:"li"},{href:"https://chromium-review.googlesource.com/c/chromium/src/+/1102154"}),"https://chromium-review.googlesource.com/c/chromium/src/+/1102154")),(0,n.kt)("li",{parentName:"ul"},"Once the upstream fix is landed, we roll updated Chromium into Puppeteer: ",(0,n.kt)("a",o({parentName:"li"},{href:"https://github.com/puppeteer/puppeteer/pull/2769"}),"https://github.com/puppeteer/puppeteer/pull/2769"))),(0,n.kt)("p",null,"However, oftentimes it is desirable to use Puppeteer with the official Google Chrome rather than Chromium. For this to work, you should install a ",(0,n.kt)("inlineCode",{parentName:"p"},"puppeteer-core")," version that corresponds to the Chrome version."),(0,n.kt)("p",null,"For example, in order to drive Chrome 71 with puppeteer-core, use ",(0,n.kt)("inlineCode",{parentName:"p"},"chrome-71")," npm tag:"),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{className:"language-bash"}),"npm install puppeteer-core@chrome-71\n")),(0,n.kt)("h2",o({},{id:"q-which-chromium-version-does-puppeteer-use"}),"Q: Which Chromium version does Puppeteer use?"),(0,n.kt)("p",null,"Find the version using one of the following ways:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Look for the ",(0,n.kt)("inlineCode",{parentName:"li"},"chromium")," entry in ",(0,n.kt)("a",o({parentName:"li"},{href:"https://github.com/puppeteer/puppeteer/blob/main/src/revisions.ts"}),"revisions.ts"),". To find the corresponding Chromium commit and version number, search for the revision prefixed by an ",(0,n.kt)("inlineCode",{parentName:"li"},"r")," in ",(0,n.kt)("a",o({parentName:"li"},{href:"https://omahaproxy.appspot.com/"}),"OmahaProxy"),'\'s "Find Releases" section.'),(0,n.kt)("li",{parentName:"ul"},"Look for the ",(0,n.kt)("inlineCode",{parentName:"li"},"versionsPerRelease")," map in ",(0,n.kt)("a",o({parentName:"li"},{href:"https://github.com/puppeteer/puppeteer/blob/main/versions.js"}),"versions.js")," which contains mapping between Chromium and the smallest Puppeteer version that supports it.")),(0,n.kt)("h2",o({},{id:"q-which-firefox-version-does-puppeteer-use"}),"Q: Which Firefox version does Puppeteer use?"),(0,n.kt)("p",null,"Since Firefox support is experimental, Puppeteer downloads the latest ",(0,n.kt)("a",o({parentName:"p"},{href:"https://wiki.mozilla.org/Nightly"}),"Firefox Nightly")," when the ",(0,n.kt)("inlineCode",{parentName:"p"},"PUPPETEER_PRODUCT")," environment variable is set to ",(0,n.kt)("inlineCode",{parentName:"p"},"firefox"),". That's also why the value of ",(0,n.kt)("inlineCode",{parentName:"p"},"firefox")," in ",(0,n.kt)("a",o({parentName:"p"},{href:"https://github.com/puppeteer/puppeteer/blob/main/src/revisions.ts"}),"revisions.ts")," is ",(0,n.kt)("inlineCode",{parentName:"p"},"latest")," -- Puppeteer isn't tied to a particular Firefox version."),(0,n.kt)("p",null,"To fetch Firefox Nightly as part of Puppeteer installation:"),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{className:"language-bash"}),'PUPPETEER_PRODUCT=firefox npm i puppeteer\n# or "yarn add puppeteer"\n')),(0,n.kt)("h4",o({},{id:"q-whats-considered-a-navigation"}),"Q: What\u2019s considered a \u201cNavigation\u201d?"),(0,n.kt)("p",null,"From Puppeteer\u2019s standpoint, ",(0,n.kt)("strong",{parentName:"p"},"\u201cnavigation\u201d is anything that changes a page\u2019s URL"),".\nAside from regular navigation where the browser hits the network to fetch a new document from the web server, this includes ",(0,n.kt)("a",o({parentName:"p"},{href:"https://www.w3.org/TR/html5/single-page.html#scroll-to-fragid"}),"anchor navigations")," and ",(0,n.kt)("a",o({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/History_API"}),"History API")," usage."),(0,n.kt)("p",null,"With this definition of \u201cnavigation,\u201d ",(0,n.kt)("strong",{parentName:"p"},"Puppeteer works seamlessly with single-page applications.")),(0,n.kt)("h4",o({},{id:"q-whats-the-difference-between-a-trusted-and-untrusted-input-event"}),'Q: What\u2019s the difference between a \u201ctrusted" and "untrusted" input event?'),(0,n.kt)("p",null,"In browsers, input events could be divided into two big groups: trusted vs. untrusted."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Trusted events"),": events generated by users interacting with the page, e.g. using a mouse or keyboard."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Untrusted event"),": events generated by Web APIs, e.g. ",(0,n.kt)("inlineCode",{parentName:"li"},"document.createEvent")," or ",(0,n.kt)("inlineCode",{parentName:"li"},"element.click()")," methods.")),(0,n.kt)("p",null,"Websites can distinguish between these two groups:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"using an ",(0,n.kt)("a",o({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/Event/isTrusted"}),(0,n.kt)("inlineCode",{parentName:"a"},"Event.isTrusted"))," event flag"),(0,n.kt)("li",{parentName:"ul"},"sniffing for accompanying events. For example, every trusted ",(0,n.kt)("inlineCode",{parentName:"li"},"'click'")," event is preceded by ",(0,n.kt)("inlineCode",{parentName:"li"},"'mousedown'")," and ",(0,n.kt)("inlineCode",{parentName:"li"},"'mouseup'")," events.")),(0,n.kt)("p",null,"For automation purposes it\u2019s important to generate trusted events. ",(0,n.kt)("strong",{parentName:"p"},"All input events generated with Puppeteer are trusted and fire proper accompanying events.")," If, for some reason, one needs an untrusted event, it\u2019s always possible to hop into a page context with ",(0,n.kt)("inlineCode",{parentName:"p"},"page.evaluate")," and generate a fake event:"),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{className:"language-ts"}),"await page.evaluate(() => {\n  document.querySelector('button[type=submit]').click();\n});\n")),(0,n.kt)("h4",o({},{id:"q-what-features-does-puppeteer-not-support"}),"Q: What features does Puppeteer not support?"),(0,n.kt)("p",null,"You may find that Puppeteer does not behave as expected when controlling pages that incorporate audio and video. (For example, ",(0,n.kt)("a",o({parentName:"p"},{href:"https://github.com/puppeteer/puppeteer/issues/291"}),"video playback/screenshots is likely to fail"),".) There are two reasons for this:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Puppeteer is bundled with Chromium \u2014 not Chrome \u2014 and so by default, it inherits all of ",(0,n.kt)("a",o({parentName:"li"},{href:"https://www.chromium.org/audio-video"}),"Chromium's media-related limitations"),". This means that Puppeteer does not support licensed formats such as AAC or H.264. (However, it is possible to force Puppeteer to use a separately-installed version Chrome instead of Chromium via the ",(0,n.kt)("a",o({parentName:"li"},{href:"https://pptr.dev/api/puppeteer.launchoptions.executablepath"}),(0,n.kt)("inlineCode",{parentName:"a"},"executablePath")," option to ",(0,n.kt)("inlineCode",{parentName:"a"},"puppeteer.launch")),". You should only use this configuration if you need an official release of Chrome that supports these media formats.)"),(0,n.kt)("li",{parentName:"ul"},"Since Puppeteer (in all configurations) controls a desktop version of Chromium/Chrome, features that are only supported by the mobile version of Chrome are not supported. This means that Puppeteer ",(0,n.kt)("a",o({parentName:"li"},{href:"https://caniuse.com/#feat=http-live-streaming"}),"does not support HTTP Live Streaming (HLS)"),".")),(0,n.kt)("h4",o({},{id:"q-i-am-having-trouble-installing--running-puppeteer-in-my-test-environment-where-should-i-look-for-help"}),"Q: I am having trouble installing / running Puppeteer in my test environment. Where should I look for help?"),(0,n.kt)("p",null,"We have a ",(0,n.kt)("a",o({parentName:"p"},{href:"https://github.com/puppeteer/puppeteer/blob/main/docs/troubleshooting.md"}),"troubleshooting")," guide for various operating systems that lists the required dependencies."),(0,n.kt)("h4",o({},{id:"q-chromium-gets-downloaded-on-every-npm-ci-run-how-can-i-cache-the-download"}),"Q: Chromium gets downloaded on every ",(0,n.kt)("inlineCode",{parentName:"h4"},"npm ci")," run. How can I cache the download?"),(0,n.kt)("p",null,"The default download path is ",(0,n.kt)("inlineCode",{parentName:"p"},"node_modules/puppeteer/.local-chromium"),". However, you can change that path with the ",(0,n.kt)("inlineCode",{parentName:"p"},"PUPPETEER_DOWNLOAD_PATH")," environment variable."),(0,n.kt)("p",null,"Puppeteer uses that variable to resolve the Chromium executable location during launch, so you don\u2019t need to specify ",(0,n.kt)("inlineCode",{parentName:"p"},"PUPPETEER_EXECUTABLE_PATH")," as well."),(0,n.kt)("p",null,"For example, if you wish to keep the Chromium download in ",(0,n.kt)("inlineCode",{parentName:"p"},"~/.npm/chromium"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{className:"language-sh"}),"export PUPPETEER_DOWNLOAD_PATH=~/.npm/chromium\nnpm ci\n\n# by default the Chromium executable path is inferred\n# from the download path\nnpm test\n\n# a new run of npm ci will check for the existence of\n# Chromium in ~/.npm/chromium\nnpm ci\n")),(0,n.kt)("h4",o({},{id:"q-i-have-more-questions-where-do-i-ask"}),"Q: I have more questions! Where do I ask?"),(0,n.kt)("p",null,"There are many ways to get help on Puppeteer:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",o({parentName:"li"},{href:"https://github.com/puppeteer/puppeteer/issues"}),"bugtracker")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",o({parentName:"li"},{href:"https://stackoverflow.com/questions/tagged/puppeteer"}),"Stack Overflow"))),(0,n.kt)("p",null,"Make sure to search these channels before posting your question."))}m.isMDXComponent=!0}}]);