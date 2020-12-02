!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.SwupScriptsPlugin=t():e.SwupScriptsPlugin=t()}(window,function(){return r={},o.m=n=[function(e,t,n){"use strict";var r,o=n(1),n=(r=o)&&r.__esModule?r:{default:r};e.exports=n.default},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n,r=arguments[t];for(n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o=function(e,t,n){return t&&i(e.prototype,t),n&&i(e,n),e};function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var a,u=n(2),n=(a=u)&&a.__esModule?a:{default:a};var s=function(e){return Array.prototype.slice.call(e)},o=(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(l,n.default),o(l,[{key:"mount",value:function(){this.swup.on("contentReplaced",this.runScripts)}},{key:"unmount",value:function(){this.swup.off("contentReplaced",this.runScripts)}}]),l);function l(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,l);var t=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(l.__proto__||Object.getPrototypeOf(l)).call(this));t.name="ScriptsPlugin",t.runScripts=function(){var e=t.options.head&&t.options.body?document:t.options.head?document.head:document.body,e=s(e.querySelectorAll("script:not([data-swup-ignore-script])"));e.forEach(function(e){return t.runScript(e)}),t.swup.log("Executed "+e.length+" scripts.")},t.runScript=function(e){var t=document.createElement("script"),n=!0,r=!1,o=void 0;try{for(var i=s(e.attributes)[Symbol.iterator]();!(n=(u=i.next()).done);n=!0){var a=u.value,u=a.name,a=a.value;t.setAttribute(u,a)}}catch(e){r=!0,o=e}finally{try{!n&&i.return&&i.return()}finally{if(r)throw o}}return t.textContent=e.textContent,t.setAttribute("async","false"),e.replaceWith(t),t};return t.options=r({},{head:!0,body:!0},e),t}t.default=o},function(e,t,n){"use strict";function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}Object.defineProperty(t,"__esModule",{value:!0});var o=(function(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}(i,[{key:"mount",value:function(){}},{key:"unmount",value:function(){}},{key:"_beforeMount",value:function(){}},{key:"_afterUnmount",value:function(){}}]),i);function i(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),this.isSwupPlugin=!0}t.default=o}],o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=0);function o(e){if(r[e])return r[e].exports;var t=r[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,o),t.l=!0,t.exports}var n,r}),function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.SwupHeadPlugin=t():e.SwupHeadPlugin=t()}(window,function(){return r={},o.m=n=[function(e,t,n){"use strict";var r,o=n(1),n=(r=o)&&r.__esModule?r:{default:r};e.exports=n.default},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(e,t,n){return t&&o(e.prototype,t),n&&o(e,n),e};function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var i,a=n(2);function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)})(l,((i=a)&&i.__esModule?i:{default:i}).default),r(l,[{key:"mount",value:function(){this.swup.on("contentReplaced",this.getHeadAndReplace)}},{key:"unmount",value:function(){this.swup.off("contentReplaced",this.getHeadAndReplace)}}]),r=l;function l(){var e,u;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,l);for(var t=arguments.length,n=Array(t),r=0;r<t;r++)n[r]=arguments[r];return(e=u=s(this,(e=l.__proto__||Object.getPrototypeOf(l)).call.apply(e,[this].concat(n)))).name="HeadPlugin",u.getHeadAndReplace=function(){var e=u.getHeadChildren(),t=u.getNextHeadChildren();u.replaceTags(e,t)},u.getHeadChildren=function(){return document.head.children},u.getNextHeadChildren=function(){var e=u.swup.cache.getCurrentPage().originalContent.replace("<head",'<div id="swupHead"').replace("</head>","</div>"),t=document.createElement("div");t.innerHTML=e;e=t.querySelector("#swupHead").children;return t.innerHTML="",t=null,e},u.replaceTags=function(e,t){var n=document.head,r=Boolean(document.querySelector("[data-swup-theme]")),o=u.getTagsToAdd(e,t,r),r=u.getTagsToRemove(e,t,r);r.reverse().forEach(function(e){n.removeChild(e.tag)}),o.forEach(function(e){n.insertBefore(e.tag,n.children[e.index])}),u.swup.log("Removed "+r.length+" / added "+o.length+" tags in head")},u.compareTags=function(e,t){return e.outerHTML===t.outerHTML},u.getTagsToRemove=function(e,t){for(var n=[],r=0;r<e.length;r++){for(var o=null,i=0;i<t.length;i++)if(u.compareTags(e[r],t[i])){o=i;break}null==o&&null===e[r].getAttribute("data-swup-theme")&&n.push({tag:e[r]})}return n},u.getTagsToAdd=function(e,t,n){for(var r=[],o=0;o<t.length;o++){for(var i=null,a=0;a<e.length;a++)if(u.compareTags(e[a],t[o])){i=a;break}null==i&&r.push({index:n?o+1:o,tag:t[o]})}return r},s(u,e)}t.default=r},function(e,t,n){"use strict";function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}Object.defineProperty(t,"__esModule",{value:!0});var o=(function(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}(i,[{key:"mount",value:function(){}},{key:"unmount",value:function(){}},{key:"_beforeMount",value:function(){}},{key:"_afterUnmount",value:function(){}}]),i);function i(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),this.isSwupPlugin=!0}t.default=o}],o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=0);function o(e){if(r[e])return r[e].exports;var t=r[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,o),t.l=!0,t.exports}var n,r}),function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.Swup=t():e.Swup=t()}(window,function(){return r={},o.m=n=[function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Link=t.markSwupElements=t.getCurrentUrl=t.transitionEnd=t.fetch=t.getDataFromHtml=t.createHistoryRecord=t.classify=void 0;var r=c(n(8)),o=c(n(9)),i=c(n(10)),a=c(n(11)),u=c(n(12)),s=c(n(13)),l=c(n(14)),n=c(n(15));function c(e){return e&&e.__esModule?e:{default:e}}t.classify=r.default,t.createHistoryRecord=o.default,t.getDataFromHtml=i.default,t.fetch=a.default,t.transitionEnd=u.default,t.getCurrentUrl=s.default,t.markSwupElements=l.default,t.Link=n.default},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.query=function(e,t){t=1<arguments.length&&void 0!==t?t:document;return"string"!=typeof e?e:t.querySelector(e)},t.queryAll=function(e,t){t=1<arguments.length&&void 0!==t?t:document;return"string"!=typeof e?e:Array.prototype.slice.call(t.querySelectorAll(e))}},function(e,t,n){"use strict";var r,o=n(3),n=(r=o)&&r.__esModule?r:{default:r};e.exports=n.default},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n,r=arguments[t];for(n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o=function(e,t,n){return t&&i(e.prototype,t),n&&i(e,n),e};function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var a=b(n(4)),u=b(n(6)),s=b(n(7)),l=b(n(16)),c=b(n(17)),f=b(n(18)),d=b(n(19)),p=b(n(20)),h=b(n(21)),g=b(n(22)),m=n(23),y=n(1),v=n(0);function b(e){return e&&e.__esModule?e:{default:e}}o(w,[{key:"enable",value:function(){var e,t=this;"undefined"!=typeof Promise?(this.delegatedListeners.click=(0,a.default)(document,this.options.linkSelector,"click",this.linkClickHandler.bind(this)),window.addEventListener("popstate",this.popStateHandler.bind(this)),(e=(0,v.getDataFromHtml)(document.documentElement.outerHTML,this.options.containers)).url=e.responseURL=(0,v.getCurrentUrl)(),this.options.cache&&this.cache.cacheUrl(e),(0,v.markSwupElements)(document.documentElement,this.options.containers),this.options.plugins.forEach(function(e){t.use(e)}),window.history.replaceState(Object.assign({},window.history.state,{url:window.location.href,random:Math.random(),source:"swup"}),document.title,window.location.href),this.triggerEvent("enabled"),document.documentElement.classList.add("swup-enabled"),this.triggerEvent("pageView")):console.warn("Promise is not supported")}},{key:"destroy",value:function(){var t=this;this.delegatedListeners.click.destroy(),this.delegatedListeners.mouseover.destroy(),window.removeEventListener("popstate",this.popStateHandler.bind(this)),this.cache.empty(),this.options.plugins.forEach(function(e){t.unuse(e)}),(0,y.queryAll)("[data-swup]").forEach(function(e){e.removeAttribute("data-swup")}),this.off(),this.triggerEvent("disabled"),document.documentElement.classList.remove("swup-enabled")}},{key:"linkClickHandler",value:function(e){var t;e.metaKey||e.ctrlKey||e.shiftKey||e.altKey?this.triggerEvent("openPageInNewTab",e):0===e.button&&(this.triggerEvent("clickLink",e),e.preventDefault(),(t=new v.Link(e.delegateTarget)).getAddress()==(0,v.getCurrentUrl)()||""==t.getAddress()?""!=t.getHash()?(this.triggerEvent("samePageWithHash",e),null!=document.querySelector(t.getHash())?history.replaceState({url:t.getAddress()+t.getHash(),random:Math.random(),source:"swup"},document.title,t.getAddress()+t.getHash()):console.warn("Element for offset not found ("+t.getHash()+")")):this.triggerEvent("samePage",e):(""!=t.getHash()&&(this.scrollToElement=t.getHash()),e=e.delegateTarget.getAttribute("data-swup-transition"),this.loadPage({url:t.getAddress(),customTransition:e},!1)))}},{key:"popStateHandler",value:function(e){var t;this.options.skipPopStateHandling(e)||(""!==(t=new v.Link(e.state?e.state.url:window.location.pathname)).getHash()?this.scrollToElement=t.getHash():e.preventDefault(),this.triggerEvent("popState",e),this.loadPage({url:t.getAddress()},e))}}]),o=w;function w(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,w);var t={animateHistoryBrowsing:!1,animationSelector:'[class*="transition-"]',linkSelector:'a[href^="'+window.location.origin+'"]:not([data-no-swup]), a[href^="/"]:not([data-no-swup]), a[href^="#"]:not([data-no-swup])',cache:!0,containers:["#swup"],requestHeaders:{"X-Requested-With":"swup",Accept:"text/html, application/xhtml+xml"},plugins:[],skipPopStateHandling:function(e){return!(e.state&&"swup"===e.state.source)}},e=r({},t,e);this._handlers={animationInDone:[],animationInStart:[],animationOutDone:[],animationOutStart:[],animationSkipped:[],clickLink:[],contentReplaced:[],disabled:[],enabled:[],openPageInNewTab:[],pageLoaded:[],pageRetrievedFromCache:[],pageView:[],popState:[],samePage:[],samePageWithHash:[],serverError:[],transitionStart:[],transitionEnd:[],willReplaceContent:[]},this.scrollToElement=null,this.preloadPromise=null,this.options=e,this.plugins=[],this.transition={},this.delegatedListeners={},this.cache=new u.default,(this.cache.swup=this).loadPage=s.default,this.renderPage=l.default,this.triggerEvent=c.default,this.on=f.default,this.off=d.default,this.updateTransition=p.default,this.getAnimationPromises=h.default,this.getPageData=g.default,this.log=function(){},this.use=m.use,this.unuse=m.unuse,this.findPlugin=m.findPlugin,this.enable()}t.default=o},function(e,t,n){var a=n(5);e.exports=function(e,t,n,r,o){var i=function(t,n,e,r){return function(e){e.delegateTarget=a(e.target,n),e.delegateTarget&&r.call(t,e)}}.apply(this,arguments);return e.addEventListener(n,i,o),{destroy:function(){e.removeEventListener(n,i,o)}}}},function(e,t){var n;"undefined"==typeof Element||Element.prototype.matches||((n=Element.prototype).matches=n.matchesSelector||n.mozMatchesSelector||n.msMatchesSelector||n.oMatchesSelector||n.webkitMatchesSelector),e.exports=function(e,t){for(;e&&9!==e.nodeType;){if("function"==typeof e.matches&&e.matches(t))return e;e=e.parentNode}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(e,t,n){return t&&o(e.prototype,t),n&&o(e,n),e};function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}r=t.Cache=(r(i,[{key:"cacheUrl",value:function(e){e.url in this.pages==!1&&(this.pages[e.url]=e),this.last=this.pages[e.url],this.swup.log("Cache ("+Object.keys(this.pages).length+")",this.pages)}},{key:"getPage",value:function(e){return this.pages[e]}},{key:"getCurrentPage",value:function(){return this.getPage(window.location.pathname+window.location.search)}},{key:"exists",value:function(e){return e in this.pages}},{key:"empty",value:function(){this.pages={},this.last=null,this.swup.log("Cache cleared")}},{key:"remove",value:function(e){delete this.pages[e]}}]),i);function i(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),this.pages={},this.last=null}t.default=r},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n,r=arguments[t];for(n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},u=n(0);t.default=function(r,e){var t,o=this,n=[],i=void 0;this.triggerEvent("transitionStart",e),null!=r.customTransition?(this.updateTransition(window.location.pathname,r.url,r.customTransition),document.documentElement.classList.add("to-"+(0,u.classify)(r.customTransition))):this.updateTransition(window.location.pathname,r.url),!e||this.options.animateHistoryBrowsing?(o.triggerEvent("animationOutStart"),document.documentElement.classList.add("is-changing"),document.documentElement.classList.add("is-leaving"),document.documentElement.classList.add("is-animating"),e&&document.documentElement.classList.add("is-popstate"),document.documentElement.classList.add("to-"+(0,u.classify)(r.url)),n=o.getAnimationPromises("out"),Promise.all(n).then(function(){o.triggerEvent("animationOutDone")}),e||(t=void 0,t=null!=o.scrollToElement?r.url+o.scrollToElement:r.url,(0,u.createHistoryRecord)(t))):this.triggerEvent("animationSkipped"),this.cache.exists(r.url)?(i=new Promise(function(e){e()}),this.triggerEvent("pageRetrievedFromCache")):i=this.preloadPromise&&this.preloadPromise.route==r.url?this.preloadPromise:new Promise(function(t,n){(0,u.fetch)(a({},r,{headers:o.options.requestHeaders}),function(e){if(500===e.status)return o.triggerEvent("serverError"),void n(r.url);e=o.getPageData(e);null!=e?(e.url=r.url,o.cache.cacheUrl(e),o.triggerEvent("pageLoaded"),t()):n(r.url)})}),Promise.all(n.concat([i])).then(function(){o.renderPage(o.cache.getPage(r.url),e),o.preloadPromise=null}).catch(function(e){o.options.skipPopStateHandling=function(){return window.location=e,!0},window.history.go(-1)})}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=function(e){e=e.toString().toLowerCase().replace(/\s+/g,"-").replace(/\//g,"-").replace(/[^\w\-]+/g,"").replace(/\-\-+/g,"-").replace(/^-+/,"").replace(/-+$/,"");return"/"===e[0]&&(e=e.splice(1)),""===e&&(e="homepage"),e}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=function(e){window.history.pushState({url:e||window.location.href.split(window.location.hostname)[1],random:Math.random(),source:"swup"},document.getElementsByTagName("title")[0].innerText,e||window.location.href.split(window.location.hostname)[1])}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s=n(1);t.default=function(e,r){var t=e.replace("<body",'<div id="swupBody"').replace("</body>","</div>"),o=document.createElement("div");o.innerHTML=t;for(var i=[],n=0;n<r.length;n++){var a=function(n){if(null==o.querySelector(r[n]))return{v:null};(0,s.queryAll)(r[n]).forEach(function(e,t){(0,s.queryAll)(r[n],o)[t].setAttribute("data-swup",i.length),i.push((0,s.queryAll)(r[n],o)[t].outerHTML)})}(n);if("object"===(void 0===a?"undefined":u(a)))return a.v}e={title:o.querySelector("title").innerText,pageClass:o.querySelector("#swupBody").className,originalContent:e,blocks:i};return o.innerHTML="",o=null,e}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n,r=arguments[t];for(n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e};t.default=function(e,t){var n=1<arguments.length&&void 0!==t&&t,t={url:window.location.pathname+window.location.search,method:"GET",data:null,headers:{}},r=i({},t,e),o=new XMLHttpRequest;return o.onreadystatechange=function(){4===o.readyState&&(o.status,n(o))},o.open(r.method,r.url,!0),Object.keys(r.headers).forEach(function(e){o.setRequestHeader(e,r.headers[e])}),o.send(r.data),o}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=function(){var e,t=document.createElement("div"),n={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(e in n)if(void 0!==t.style[e])return n[e];return!1}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=function(){return window.location.pathname+window.location.search}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(1);t.default=function(r,o){for(var i=0,e=0;e<o.length;e++)!function(n){null==r.querySelector(o[n])?console.warn("Element "+o[n]+" is not in current page."):(0,a.queryAll)(o[n]).forEach(function(e,t){(0,a.queryAll)(o[n],r)[t].setAttribute("data-swup",i),i++})}(e)}},function(e,t,n){"use strict";function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}Object.defineProperty(t,"__esModule",{value:!0});var o=(function(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}(i,[{key:"getPath",value:function(){var e=this.link.pathname;return"/"!==e[0]&&(e="/"+e),e}},{key:"getAddress",value:function(){var e=this.link.pathname+this.link.search;return this.link.getAttribute("xlink:href")&&(e=this.link.getAttribute("xlink:href")),"/"!==e[0]&&(e="/"+e),e}},{key:"getHash",value:function(){return this.link.hash}}]),i);function i(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),e instanceof Element||e instanceof SVGElement?this.link=e:(this.link=document.createElement("a"),this.link.href=e)}t.default=o},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n,r=arguments[t];for(n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a=(n(1),n(0));t.default=function(e,t){var n=this;document.documentElement.classList.remove("is-leaving");var r=new a.Link(e.responseURL);window.location.pathname!==r.getPath()&&(window.history.replaceState({url:r.getPath(),random:Math.random(),source:"swup"},document.title,r.getPath()),this.cache.cacheUrl(i({},e,{url:r.getPath()}))),t&&!this.options.animateHistoryBrowsing||document.documentElement.classList.add("is-rendering"),this.triggerEvent("willReplaceContent",t);for(var o=0;o<e.blocks.length;o++)document.body.querySelector('[data-swup="'+o+'"]').outerHTML=e.blocks[o];document.title=e.title,this.triggerEvent("contentReplaced",t),this.triggerEvent("pageView",t),this.options.cache||this.cache.empty(),setTimeout(function(){t&&!n.options.animateHistoryBrowsing||(n.triggerEvent("animationInStart"),document.documentElement.classList.remove("is-animating"))},10);r=this.getAnimationPromises("in");!t||this.options.animateHistoryBrowsing?Promise.all(r).then(function(){n.triggerEvent("animationInDone"),n.triggerEvent("transitionEnd",t),document.documentElement.className.split(" ").forEach(function(e){!new RegExp("^to-").test(e)&&"is-changing"!==e&&"is-rendering"!==e&&"is-popstate"!==e||document.documentElement.classList.remove(e)})}):this.triggerEvent("transitionEnd",t),this.scrollToElement=null}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=function(e,t){this._handlers[e].forEach(function(e){try{e(t)}catch(e){console.error(e)}});e=new CustomEvent("swup:"+e,{detail:e});document.dispatchEvent(e)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=function(e,t){this._handlers[e]?this._handlers[e].push(t):console.warn("Unsupported event "+e+".")}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=function(e,t){var n,r=this;null!=e?null!=t?this._handlers[e]&&this._handlers[e].filter(function(e){return e===t}).length?(n=this._handlers[e].filter(function(e){return e===t})[0],-1<(n=this._handlers[e].indexOf(n))&&this._handlers[e].splice(n,1)):console.warn("Handler for event '"+e+"' no found."):this._handlers[e]=[]:Object.keys(this._handlers).forEach(function(e){r._handlers[e]=[]})}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=function(e,t,n){this.transition={from:e,to:t,custom:n}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),o=n(0);t.default=function(){var t=[];return(0,r.queryAll)(this.options.animationSelector).forEach(function(n){var e=new Promise(function(t){n.addEventListener((0,o.transitionEnd)(),function(e){n==e.target&&t()})});t.push(e)}),t}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0);t.default=function(e){var t=e.responseText,t=(0,r.getDataFromHtml)(t,this.options.containers);return t?(t.responseURL=e.responseURL||window.location.href,t):(console.warn("Received page is invalid."),null)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.use=function(e){if(e.isSwupPlugin)return this.plugins.push(e),e.swup=this,"function"==typeof e._beforeMount&&e._beforeMount(),e.mount(),this.plugins;console.warn("Not swup plugin instance "+e+".")},t.unuse=function(t){var e=void 0;if(e="string"==typeof t?this.plugins.find(function(e){return t===e.name}):t){e.unmount(),"function"==typeof e._afterUnmount&&e._afterUnmount();e=this.plugins.indexOf(e);return this.plugins.splice(e,1),this.plugins}console.warn("No such plugin.")},t.findPlugin=function(t){return this.plugins.find(function(e){return t===e.name})}}],o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=2);function o(e){if(r[e])return r[e].exports;var t=r[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,o),t.l=!0,t.exports}var n,r});
//# sourceMappingURL=swup.js.map