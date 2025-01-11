!function(){let e;function t(e){"complete"===document.readyState||"interactive"===document.readyState?setTimeout(e,1):document.addEventListener("DOMContentLoaded",e)}var n,o,i,r=[],s="ResizeObserver loop completed with undelivered notifications.",c=function(){var e;"function"==typeof ErrorEvent?e=new ErrorEvent("error",{message:s}):((e=document.createEvent("Event")).initEvent("error",!1,!1),e.message=s),window.dispatchEvent(e)};(n=o={}).BORDER_BOX="border-box",n.CONTENT_BOX="content-box",n.DEVICE_PIXEL_CONTENT_BOX="device-pixel-content-box";var a=function(e){return Object.freeze(e)},u=function(e,t){this.inlineSize=e,this.blockSize=t,a(this)},l=function(){function e(e,t,n,o){return this.x=e,this.y=t,this.width=n,this.height=o,this.top=this.y,this.left=this.x,this.bottom=this.top+this.height,this.right=this.left+this.width,a(this)}return e.prototype.toJSON=function(){return{x:this.x,y:this.y,top:this.top,right:this.right,bottom:this.bottom,left:this.left,width:this.width,height:this.height}},e.fromRect=function(t){return new e(t.x,t.y,t.width,t.height)},e}(),d=function(e){return e instanceof SVGElement&&"getBBox"in e},h=function(e){if(d(e)){var t=e.getBBox(),n=t.width,o=t.height;return!n&&!o}var i=e.offsetWidth,r=e.offsetHeight;return!(i||r||e.getClientRects().length)},f=function(e){if(e instanceof Element)return!0;var t,n=null===(t=null==e?void 0:e.ownerDocument)||void 0===t?void 0:t.defaultView;return!!(n&&e instanceof n.Element)},v=function(e){switch(e.tagName){case"INPUT":if("image"!==e.type)break;case"VIDEO":case"AUDIO":case"EMBED":case"OBJECT":case"CANVAS":case"IFRAME":case"IMG":return!0}return!1},p="undefined"!=typeof window?window:{},g=new WeakMap,b=/auto|scroll/,m=/^tb|vertical/,y=/msie|trident/i.test(p.navigator&&p.navigator.userAgent),w=function(e){return parseFloat(e||"0")},E=function(e,t,n){return void 0===e&&(e=0),void 0===t&&(t=0),void 0===n&&(n=!1),new u((n?t:e)||0,(n?e:t)||0)},x=a({devicePixelContentBoxSize:E(),borderBoxSize:E(),contentBoxSize:E(),contentRect:new l(0,0,0,0)}),T=function(e,t){if(void 0===t&&(t=!1),g.has(e)&&!t)return g.get(e);if(h(e))return g.set(e,x),x;var n=getComputedStyle(e),o=d(e)&&e.ownerSVGElement&&e.getBBox(),i=!y&&"border-box"===n.boxSizing,r=m.test(n.writingMode||""),s=!o&&b.test(n.overflowY||""),c=!o&&b.test(n.overflowX||""),u=o?0:w(n.paddingTop),f=o?0:w(n.paddingRight),v=o?0:w(n.paddingBottom),p=o?0:w(n.paddingLeft),T=o?0:w(n.borderTopWidth),S=o?0:w(n.borderRightWidth),z=o?0:w(n.borderBottomWidth),B=o?0:w(n.borderLeftWidth),O=p+f,R=u+v,C=B+S,k=T+z,L=c?e.offsetHeight-k-e.clientHeight:0,N=s?e.offsetWidth-C-e.clientWidth:0,A=o?o.width:w(n.width)-(i?O+C:0)-N,M=o?o.height:w(n.height)-(i?R+k:0)-L,D=A+O+N+C,q=M+R+L+k,I=a({devicePixelContentBoxSize:E(Math.round(A*devicePixelRatio),Math.round(M*devicePixelRatio),r),borderBoxSize:E(D,q,r),contentBoxSize:E(A,M,r),contentRect:new l(p,u,A,M)});return g.set(e,I),I},S=function(e,t,n){var i=T(e,n),r=i.borderBoxSize,s=i.contentBoxSize,c=i.devicePixelContentBoxSize;switch(t){case o.DEVICE_PIXEL_CONTENT_BOX:return c;case o.BORDER_BOX:return r;default:return s}},z=function(e){var t=T(e);this.target=e,this.contentRect=t.contentRect,this.borderBoxSize=a([t.borderBoxSize]),this.contentBoxSize=a([t.contentBoxSize]),this.devicePixelContentBoxSize=a([t.devicePixelContentBoxSize])},B=function(e){if(h(e))return 1/0;for(var t=0,n=e.parentNode;n;)t+=1,n=n.parentNode;return t},O=function(){var e=1/0,t=[];r.forEach(function(n){if(0!==n.activeTargets.length){var o=[];n.activeTargets.forEach(function(t){var n=new z(t.target),i=B(t.target);o.push(n),t.lastReportedSize=S(t.target,t.observedBox),i<e&&(e=i)}),t.push(function(){n.callback.call(n.observer,o,n.observer)}),n.activeTargets.splice(0,n.activeTargets.length)}});for(var n=0;n<t.length;n++)(0,t[n])();return e},R=function(e){r.forEach(function(t){t.activeTargets.splice(0,t.activeTargets.length),t.skippedTargets.splice(0,t.skippedTargets.length),t.observationTargets.forEach(function(n){n.isActive()&&(B(n.target)>e?t.activeTargets.push(n):t.skippedTargets.push(n))})})},C=function(){var e=0;for(R(0);r.some(function(e){return e.activeTargets.length>0});)R(e=O());return r.some(function(e){return e.skippedTargets.length>0})&&c(),e>0},k=[],L=function(e){if(!i){var t=0,n=document.createTextNode("");new MutationObserver(function(){return k.splice(0).forEach(function(e){return e()})}).observe(n,{characterData:!0}),i=function(){n.textContent="".concat(t?t--:t++)}}k.push(e),i()},N=function(e){L(function(){requestAnimationFrame(e)})},A=0,M={attributes:!0,characterData:!0,childList:!0,subtree:!0},D=["resize","load","transitionend","animationend","animationstart","animationiteration","keyup","keydown","mouseup","mousedown","mouseover","mouseout","blur","focus"],q=function(e){return void 0===e&&(e=0),Date.now()+e},I=!1,P=new(function(){function e(){var e=this;this.stopped=!0,this.listener=function(){return e.schedule()}}return e.prototype.run=function(e){var t=this;if(void 0===e&&(e=250),!I){I=!0;var n=q(e);N(function(){var o=!1;try{o=C()}finally{if(I=!1,e=n-q(),!A)return;o?t.run(1e3):e>0?t.run(e):t.start()}})}},e.prototype.schedule=function(){this.stop(),this.run()},e.prototype.observe=function(){var e=this,t=function(){return e.observer&&e.observer.observe(document.body,M)};document.body?t():p.addEventListener("DOMContentLoaded",t)},e.prototype.start=function(){var e=this;this.stopped&&(this.stopped=!1,this.observer=new MutationObserver(this.listener),this.observe(),D.forEach(function(t){return p.addEventListener(t,e.listener,!0)}))},e.prototype.stop=function(){var e=this;this.stopped||(this.observer&&this.observer.disconnect(),D.forEach(function(t){return p.removeEventListener(t,e.listener,!0)}),this.stopped=!0)},e}()),W=function(e){!A&&e>0&&P.start(),(A+=e)||P.stop()},_=function(){function e(e,t){this.target=e,this.observedBox=t||o.CONTENT_BOX,this.lastReportedSize={inlineSize:0,blockSize:0}}return e.prototype.isActive=function(){var e,t=S(this.target,this.observedBox,!0);return d(e=this.target)||v(e)||"inline"!==getComputedStyle(e).display||(this.lastReportedSize=t),this.lastReportedSize.inlineSize!==t.inlineSize||this.lastReportedSize.blockSize!==t.blockSize},e}(),F=function(e,t){this.activeTargets=[],this.skippedTargets=[],this.observationTargets=[],this.observer=e,this.callback=t},X=new WeakMap,V=function(e,t){for(var n=0;n<e.length;n+=1)if(e[n].target===t)return n;return -1},H=function(){function e(){}return e.connect=function(e,t){var n=new F(e,t);X.set(e,n)},e.observe=function(e,t,n){var o=X.get(e),i=0===o.observationTargets.length;0>V(o.observationTargets,t)&&(i&&r.push(o),o.observationTargets.push(new _(t,n&&n.box)),W(1),P.schedule())},e.unobserve=function(e,t){var n=X.get(e),o=V(n.observationTargets,t),i=1===n.observationTargets.length;o>=0&&(i&&r.splice(r.indexOf(n),1),n.observationTargets.splice(o,1),W(-1))},e.disconnect=function(e){var t=this,n=X.get(e);n.observationTargets.slice().forEach(function(n){return t.unobserve(e,n.target)}),n.activeTargets.splice(0,n.activeTargets.length)},e}(),G=function(){function e(e){if(0==arguments.length)throw TypeError("Failed to construct 'ResizeObserver': 1 argument required, but only 0 present.");if("function"!=typeof e)throw TypeError("Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function.");H.connect(this,e)}return e.prototype.observe=function(e,t){if(0==arguments.length)throw TypeError("Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present.");if(!f(e))throw TypeError("Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element");H.observe(this,e,t)},e.prototype.unobserve=function(e){if(0==arguments.length)throw TypeError("Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present.");if(!f(e))throw TypeError("Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element");H.unobserve(this,e)},e.prototype.disconnect=function(){H.disconnect(this)},e.toString=function(){return"function ResizeObserver () { [polyfill code] }"},e}();let J="article#main",U="div.footnotes[role=doc-endnotes]";function j(e){let t=document.querySelector(U),n=t.querySelectorAll("li[id^='fn:']");if(e){let e;t.classList.add("floating-footnotes"),e=0,Array.prototype.forEach.call(n,function(t,n){let o=document.querySelector("a.footnote-ref[href='#"+t.id+"']"),i=function(e,t){let n=e.offsetParent.getBoundingClientRect().top;return t.getBoundingClientRect().top-n}(t,o.closest("p,li")||o);i<e&&(i=e),e=i+t.offsetHeight+parseInt(window.getComputedStyle(t).marginBottom)+parseInt(window.getComputedStyle(t).marginTop),t.style.top=i+"px",t.style.position="absolute"}),function(){let e=document.querySelector(J);K.observe(e)}()}else K.disconnect(),Array.prototype.forEach.call(n,function(e,t){e.style.top=null,e.style.position=null}),t.classList.remove("floating-footnotes")}let Y=(e=!1,function(){let t=window.innerWidth>=1260;t!==e&&(j(t),e=t)}),K=new G((e,t)=>{j(!0)});t(()=>{let e=document.querySelector(U),t=document.querySelector(J),n=t&&!t.classList.contains("no-floating-footnotes");if(e&&n){var o;o=function(){window.addEventListener("resize",Y),setTimeout(Y,1)},"complete"===document.readyState?setTimeout(o,1):window.addEventListener("load",o)}}),t(function(){let e=document.querySelectorAll("article#main");if(1!=e.length)return;let t=e[0].querySelectorAll("h2, h3, h4");Array.prototype.forEach.call(t,function(e,t){var n=function(e){let t=document.createElement("a");return t.className="header-link",t.title="Link to this section",t.href="#"+e,t.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 8"><path d="M5.88.03c-.18.01-.36.03-.53.09-.27.1-.53.25-.75.47a.5.5 0 1 0 .69.69c.11-.11.24-.17.38-.22.35-.12.78-.07 1.06.22.39.39.39 1.04 0 1.44l-1.5 1.5c-.44.44-.8.48-1.06.47-.26-.01-.41-.13-.41-.13a.5.5 0 1 0-.5.88s.34.22.84.25c.5.03 1.2-.16 1.81-.78l1.5-1.5c.78-.78.78-2.04 0-2.81-.28-.28-.61-.45-.97-.53-.18-.04-.38-.04-.56-.03zm-2 2.31c-.5-.02-1.19.15-1.78.75l-1.5 1.5c-.78.78-.78 2.04 0 2.81.56.56 1.36.72 2.06.47.27-.1.53-.25.75-.47a.5.5 0 1 0-.69-.69c-.11.11-.24.17-.38.22-.35.12-.78.07-1.06-.22-.39-.39-.39-1.04 0-1.44l1.5-1.5c.4-.4.75-.45 1.03-.44.28.01.47.09.47.09a.5.5 0 1 0 .44-.88s-.34-.2-.84-.22z" /></svg>',t}(e.id);e.appendChild(n)})})}();