function t(t){return t&&t.__esModule?t.default:t}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},i={},o=e.parcelRequired7c6;null==o&&((o=function(t){if(t in n)return n[t].exports;if(t in i){var e=i[t];delete i[t];var o={id:t,exports:{}};return n[t]=o,e.call(o.exports,o,o.exports),o.exports}var s=new Error("Cannot find module '"+t+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(t,e){i[t]=e},e.parcelRequired7c6=o);var s=o("7rYDH"),a=o("04jNI"),r={};window,r=function(){return function(t){var e={};function n(i){if(e[i])return e[i].exports;var o=e[i]={i:i,l:!1,exports:{}};return t[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(i,o,function(e){return t[e]}.bind(null,o));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="dist",n(n.s=10)}([function(t,e,n){t.exports=function(t,e){var n,i,o,s,a=Object.prototype.hasOwnProperty;for(o=1,s=arguments.length;o<s;o+=1)for(i in n=arguments[o])a.call(n,i)&&(t[i]=n[i]);return t}},function(t,e,n){t.exports=function(t){return void 0===t}},function(t,e,n){t.exports=function(t){return t instanceof Array}},function(t,e,n){var i=n(2),o=n(17),s=n(6);t.exports=function(t,e,n){i(t)?o(t,e,n):s(t,e,n)}},function(t,e,n){t.exports=function(t){return"string"==typeof t||t instanceof String}},function(t,e,n){t.exports=function(t){return t instanceof Function}},function(t,e,n){t.exports=function(t,e,n){var i;for(i in n=n||null,t)if(t.hasOwnProperty(i)&&!1===e.call(n,t[i],i,t))break}},function(t,e,n){var i=n(18),o=n(0);t.exports=function(t,e){var n;return e||(e=t,t=null),n=e.init||function(){},t&&i(n,t),e.hasOwnProperty("static")&&(o(n,e.static),delete e.static),o(n.prototype,e),n}},function(t,e,n){var i=n(2);t.exports=function(t,e,n){var o,s;if(n=n||0,!i(e))return-1;if(Array.prototype.indexOf)return Array.prototype.indexOf.call(e,t,n);for(s=e.length,o=n;n>=0&&o<s;o+=1)if(e[o]===t)return o;return-1}},function(t,e,n){var i=n(29),o=n(30),s=n(5),a={capitalizeFirstLetter:function(t){return t.substring(0,1).toUpperCase()+t.substring(1,t.length)},isContained:function(t,e){return!!e&&(t===e||e.contains(t))},createElementByTemplate:function(t,e){var n=document.createElement("div"),o=s(t)?t(e):i(t,e);return n.innerHTML=o,n.firstChild},bind:function(t,e){var n,i=Array.prototype.slice;return t.bind?t.bind.apply(t,i.call(arguments,1)):(n=i.call(arguments,2),function(){return t.apply(e,n.length?n.concat(i.call(arguments)):arguments)})},sendHostName:function(){o("pagination","UA-129987462-1")}};t.exports=a},function(t,e,n){n(11),t.exports=n(12)},function(t,e,n){},function(t,e,n){var i=n(13),o=n(7),s=n(0),a=n(1),r=n(20),c=n(9),l={totalItems:10,itemsPerPage:10,visiblePages:10,page:1,centerAlign:!1,firstItemClassName:"tui-first-child",lastItemClassName:"tui-last-child",usageStatistics:!0},u=o({init:function(t,e){this._options=s({},l,e),this._currentPage=0,this._view=new r(t,this._options,c.bind(this._onClickHandler,this)),this._paginate(),this._options.usageStatistics&&c.sendHostName()},_setCurrentPage:function(t){this._currentPage=t||this._options.page},_getLastPage:function(){var t=Math.ceil(this._options.totalItems/this._options.itemsPerPage);return t||1},_getPageIndex:function(t){var e;return this._options.centerAlign?(e=t-Math.floor(this._options.visiblePages/2),e=Math.max(e,1),e=Math.min(e,this._getLastPage()-this._options.visiblePages+1)):Math.ceil(t/this._options.visiblePages)},_getRelativePage:function(t){var e="prev"===t,n=this.getCurrentPage();return e?n-1:n+1},_getMorePageIndex:function(t){var e=this._getPageIndex(this.getCurrentPage()),n=this._options.visiblePages,i="prev"===t;return this._options.centerAlign?i?e-1:e+n:i?(e-1)*n:e*n+1},_convertToValidPage:function(t){var e=this._getLastPage();return t=Math.max(t,1),t=Math.min(t,e)},_paginate:function(t){var e=this._makeViewData(t||this._options.page);this._setCurrentPage(t),this._view.update(e)},_makeViewData:function(t){var e={},n=this._getLastPage(),i=this._getPageIndex(t),o=this._getPageIndex(n),s=this._getEdge(t);return e.leftPageNumber=s.left,e.rightPageNumber=s.right,e.prevMore=i>1,e.nextMore=i<o,e.page=t,e.currentPageIndex=t,e.lastPage=n,e.lastPageListIndex=n,e},_getEdge:function(t){var e,n,i,o=this._getLastPage(),s=this._options.visiblePages,a=this._getPageIndex(t);return this._options.centerAlign?(i=Math.floor(s/2),(n=(e=Math.max(t-i,1))+s-1)>o&&(e=Math.max(o-s+1,1),n=o)):(e=(a-1)*s+1,n=a*s,n=Math.min(n,o)),{left:e,right:n}},_onClickHandler:function(t,e){switch(t){case"first":e=1;break;case"prev":e=this._getRelativePage("prev");break;case"next":e=this._getRelativePage("next");break;case"prevMore":e=this._getMorePageIndex("prev");break;case"nextMore":e=this._getMorePageIndex("next");break;case"last":e=this._getLastPage();break;default:if(!e)return}this.movePageTo(e)},reset:function(t){a(t)&&(t=this._options.totalItems),this._options.totalItems=t,this._paginate(1)},movePageTo:function(t){t=this._convertToValidPage(t),this.invoke("beforeMove",{page:t})&&(this._paginate(t),this.fire("afterMove",{page:t}))},setTotalItems:function(t){this._options.totalItems=t},setItemsPerPage:function(t){this._options.itemsPerPage=t},getCurrentPage:function(){return this._currentPage||this._options.page}});i.mixin(u),t.exports=u},function(t,e,n){var i=n(0),o=n(14),s=n(4),a=n(16),r=n(2),c=n(5),l=n(3),u=/\s+/g;function p(){this.events=null,this.contexts=null}p.mixin=function(t){i(t.prototype,p.prototype)},p.prototype._getHandlerItem=function(t,e){var n={handler:t};return e&&(n.context=e),n},p.prototype._safeEvent=function(t){var e,n=this.events;return n||(n=this.events={}),t&&((e=n[t])||(e=[],n[t]=e),n=e),n},p.prototype._safeContext=function(){var t=this.contexts;return t||(t=this.contexts=[]),t},p.prototype._indexOfContext=function(t){for(var e=this._safeContext(),n=0;e[n];){if(t===e[n][0])return n;n+=1}return-1},p.prototype._memorizeContext=function(t){var e,n;o(t)&&(e=this._safeContext(),(n=this._indexOfContext(t))>-1?e[n][1]+=1:e.push([t,1]))},p.prototype._forgetContext=function(t){var e,n;o(t)&&(e=this._safeContext(),(n=this._indexOfContext(t))>-1&&(e[n][1]-=1,e[n][1]<=0&&e.splice(n,1)))},p.prototype._bindEvent=function(t,e,n){var i=this._safeEvent(t);this._memorizeContext(n),i.push(this._getHandlerItem(e,n))},p.prototype.on=function(t,e,n){var i=this;s(t)?(t=t.split(u),l(t,(function(t){i._bindEvent(t,e,n)}))):a(t)&&(n=e,l(t,(function(t,e){i.on(e,t,n)})))},p.prototype.once=function(t,e,n){var i=this;if(a(t))return n=e,void l(t,(function(t,e){i.once(e,t,n)}));this.on(t,(function o(){e.apply(n,arguments),i.off(t,o,n)}),n)},p.prototype._spliceMatches=function(t,e){var n,i=0;if(r(t))for(n=t.length;i<n;i+=1)!0===e(t[i])&&(t.splice(i,1),n-=1,i-=1)},p.prototype._matchHandler=function(t){var e=this;return function(n){var i=t===n.handler;return i&&e._forgetContext(n.context),i}},p.prototype._matchContext=function(t){var e=this;return function(n){var i=t===n.context;return i&&e._forgetContext(n.context),i}},p.prototype._matchHandlerAndContext=function(t,e){var n=this;return function(i){var o=t===i.handler,s=e===i.context,a=o&&s;return a&&n._forgetContext(i.context),a}},p.prototype._offByEventName=function(t,e){var n=this,i=c(e),o=n._matchHandler(e);t=t.split(u),l(t,(function(t){var e=n._safeEvent(t);i?n._spliceMatches(e,o):(l(e,(function(t){n._forgetContext(t.context)})),n.events[t]=[])}))},p.prototype._offByHandler=function(t){var e=this,n=this._matchHandler(t);l(this._safeEvent(),(function(t){e._spliceMatches(t,n)}))},p.prototype._offByObject=function(t,e){var n,i=this;this._indexOfContext(t)<0?l(t,(function(t,e){i.off(e,t)})):s(e)?(n=this._matchContext(t),i._spliceMatches(this._safeEvent(e),n)):c(e)?(n=this._matchHandlerAndContext(e,t),l(this._safeEvent(),(function(t){i._spliceMatches(t,n)}))):(n=this._matchContext(t),l(this._safeEvent(),(function(t){i._spliceMatches(t,n)})))},p.prototype.off=function(t,e){s(t)?this._offByEventName(t,e):arguments.length?c(t)?this._offByHandler(t):a(t)&&this._offByObject(t,e):(this.events={},this.contexts=[])},p.prototype.fire=function(t){this.invoke.apply(this,arguments)},p.prototype.invoke=function(t){var e,n,i,o;if(!this.hasListener(t))return!0;for(e=this._safeEvent(t),n=Array.prototype.slice.call(arguments,1),i=0;e[i];){if(!1===(o=e[i]).handler.apply(o.context,n))return!1;i+=1}return!0},p.prototype.hasListener=function(t){return this.getListenerLength(t)>0},p.prototype.getListenerLength=function(t){return this._safeEvent(t).length},t.exports=p},function(t,e,n){var i=n(1),o=n(15);t.exports=function(t){return!i(t)&&!o(t)}},function(t,e,n){t.exports=function(t){return null===t}},function(t,e,n){t.exports=function(t){return t===Object(t)}},function(t,e,n){t.exports=function(t,e,n){var i=0,o=t.length;for(n=n||null;i<o&&!1!==e.call(n,t[i],i,t);i+=1);}},function(t,e,n){var i=n(19);t.exports=function(t,e){var n=i(e.prototype);n.constructor=t,t.prototype=n}},function(t,e,n){t.exports=function(t){function e(){}return e.prototype=t,new e}},function(t,e,n){var i=n(3),o=n(7),s=n(21),a=n(22),r=n(24),c=n(25),l=n(0),u=n(4),p=n(28),f=n(9),d={page:'<a href="#" class="tui-page-btn">{{page}}</a>',currentPage:'<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',moveButton:'<a href="#" class="tui-page-btn tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></a>',disabledMoveButton:'<span class="tui-page-btn tui-is-disabled tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></span>',moreButton:'<a href="#" class="tui-page-btn tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></a>'},m=["first","prev","next","last"],h=["prev","next"],_=o({init:function(t,e,n){this._containerElement=null,this._firstItemClassName=e.firstItemClassName,this._lastItemClassName=e.lastItemClassName,this._template=l({},d,e.template),this._buttons={},this._enabledPageElements=[],this._setRootElement(t),this._setMoveButtons(),this._setDisabledMoveButtons(),this._setMoreButtons(),this._attachClickEvent(n)},_setRootElement:function(t){if(u(t)?t=document.getElementById(t)||document.querySelector(t):t.jquery&&(t=t[0]),!p(t))throw new Error("The container element is invalid.");this._containerElement=t},_setMoveButtons:function(){i(m,(function(t){this._buttons[t]=f.createElementByTemplate(this._template.moveButton,{type:t})}),this)},_setDisabledMoveButtons:function(){i(m,(function(t){var e="disabled"+f.capitalizeFirstLetter(t);this._buttons[e]=f.createElementByTemplate(this._template.disabledMoveButton,{type:t})}),this)},_setMoreButtons:function(){i(h,(function(t){var e=t+"More";this._buttons[e]=f.createElementByTemplate(this._template.moreButton,{type:t})}),this)},_getContainerElement:function(){return this._containerElement},_appendFirstButton:function(t){var e;e=t.page>1?this._buttons.first:this._buttons.disabledFirst,this._getContainerElement().appendChild(e)},_appendPrevButton:function(t){var e;e=t.currentPageIndex>1?this._buttons.prev:this._buttons.disabledPrev,this._getContainerElement().appendChild(e)},_appendNextButton:function(t){var e;e=t.currentPageIndex<t.lastPageListIndex?this._buttons.next:this._buttons.disabledNext,this._getContainerElement().appendChild(e)},_appendLastButton:function(t){var e;e=t.page<t.lastPage?this._buttons.last:this._buttons.disabledLast,this._getContainerElement().appendChild(e)},_appendPrevMoreButton:function(t){var e;t.prevMore&&(e=this._buttons.prevMore,c(e,this._firstItemClassName),this._getContainerElement().appendChild(e))},_appendNextMoreButton:function(t){var e;t.nextMore&&(e=this._buttons.nextMore,c(e,this._lastItemClassName),this._getContainerElement().appendChild(e))},_appendPages:function(t){var e,n,i=t.leftPageNumber,o=t.rightPageNumber;for(n=i;n<=o;n+=1)n===t.page?e=f.createElementByTemplate(this._template.currentPage,{page:n}):(e=f.createElementByTemplate(this._template.page,{page:n}),this._enabledPageElements.push(e)),n!==i||t.prevMore||c(e,this._firstItemClassName),n!==o||t.nextMore||c(e,this._lastItemClassName),this._getContainerElement().appendChild(e)},_attachClickEvent:function(t){var e=this._getContainerElement();a(e,"click",(function(e){var n,i,o=s(e);r(e),(i=this._getButtonType(o))||(n=this._getPageNumber(o)),t(i,n)}),this)},_getButtonType:function(t){var e,n=this._buttons;return i(n,(function(n,i){return!f.isContained(t,n)||(e=i,!1)}),this),e},_getPageNumber:function(t){var e,n=this._findPageElement(t);return n&&(e=parseInt(n.innerText,10)),e},_findPageElement:function(t){for(var e,n=0,i=this._enabledPageElements.length;n<i;n+=1)if(e=this._enabledPageElements[n],f.isContained(t,e))return e;return null},_empty:function(){this._enabledPageElements=[],i(this._buttons,(function(t,e){this._buttons[e]=t.cloneNode(!0)}),this),this._getContainerElement().innerHTML=""},update:function(t){this._empty(),this._appendFirstButton(t),this._appendPrevButton(t),this._appendPrevMoreButton(t),this._appendPages(t),this._appendNextMoreButton(t),this._appendNextButton(t),this._appendLastButton(t)}});t.exports=_},function(t,e,n){t.exports=function(t){return t.target||t.srcElement}},function(t,e,n){var i=n(4),o=n(3),s=n(23);function a(t,e,n,i){function a(e){n.call(i||t,e||window.event)}"addEventListener"in t?t.addEventListener(e,a):"attachEvent"in t&&t.attachEvent("on"+e,a),function(t,e,n,i){var a=s(t,e),r=!1;o(a,(function(t){return t.handler!==n||(r=!0,!1)})),r||a.push({handler:n,wrappedHandler:i})}(t,e,n,a)}t.exports=function(t,e,n,s){i(e)?o(e.split(/\s+/g),(function(e){a(t,e,n,s)})):o(e,(function(e,i){a(t,i,e,n)}))}},function(t,e,n){var i="_feEventKey";t.exports=function(t,e){var n,o=t[i];return o||(o=t[i]={}),(n=o[e])||(n=o[e]=[]),n}},function(t,e,n){t.exports=function(t){t.preventDefault?t.preventDefault():t.returnValue=!1}},function(t,e,n){var i=n(3),o=n(8),s=n(26),a=n(27);t.exports=function(t){var e,n=Array.prototype.slice.call(arguments,1),r=t.classList,c=[];r?i(n,(function(e){t.classList.add(e)})):((e=s(t))&&(n=[].concat(e.split(/\s+/),n)),i(n,(function(t){o(t,c)<0&&c.push(t)})),a(t,c))}},function(t,e,n){var i=n(1);t.exports=function(t){return t&&t.className?i(t.className.baseVal)?t.className:t.className.baseVal:""}},function(t,e,n){var i=n(2),o=n(1);t.exports=function(t,e){e=(e=i(e)?e.join(" "):e).replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),o(t.className.baseVal)?t.className=e:t.className.baseVal=e}},function(t,e,n){t.exports=function(t){return"object"==typeof HTMLElement?t&&(t instanceof HTMLElement||!!t.nodeType):!(!t||!t.nodeType)}},function(t,e,n){var i=n(8),o=n(3),s=n(2),a=n(4),r=n(0),c=/{{\s?|\s?}}/g,l=/^[a-zA-Z0-9_@]+\[[a-zA-Z0-9_@"']+\]$/,u=/\[\s?|\s?\]/,p=/^[a-zA-Z_]+\.[a-zA-Z_]+$/,f=/\./,d=/^["']\w+["']$/,m=/"|'/g,h=/^-?\d+\.?\d*$/,_={if:function(t,e,n){var i=function(t,e){var n=[t],i=[],s=0,a=0;return o(e,(function(t,o){0===t.indexOf("if")?s+=1:"/if"===t?s-=1:s||0!==t.indexOf("elseif")&&"else"!==t||(n.push("else"===t?["true"]:t.split(" ").slice(1)),i.push(e.slice(a,o)),a=o+1)})),i.push(e.slice(a)),{exps:n,sourcesInsideIf:i}}(t,e),s=!1,a="";return o(i.exps,(function(t,e){return(s=b(t,n))&&(a=x(i.sourcesInsideIf[e],n)),!s})),a},each:function(t,e,n){var i=b(t,n),a=s(i)?"@index":"@key",c={},l="";return o(i,(function(t,i){c[a]=i,c["@this"]=t,r(n,c),l+=x(e.slice(),n)})),l},with:function(t,e,n){var o=i("as",t),s=t[o+1],a=b(t.slice(0,o),n),c={};return c[s]=a,x(e,r(n,c))||""}},g=3==="a".split(/a/).length?function(t,e){return t.split(e)}:function(t,e){var n,i,o=[],s=0;for(e.global||(e=new RegExp(e,"g")),n=e.exec(t);null!==n;)i=n.index,o.push(t.slice(s,i)),s=i+n[0].length,n=e.exec(t);return o.push(t.slice(s)),o};function v(t,e){var n,i=e[t];return"true"===t?i=!0:"false"===t?i=!1:d.test(t)?i=t.replace(m,""):l.test(t)?i=v((n=t.split(u))[0],e)[v(n[1],e)]:p.test(t)?i=v((n=t.split(f))[0],e)[n[1]]:h.test(t)&&(i=parseFloat(t)),i}function y(t,e,n){for(var i,o,s,r,c=_[t],l=1,u=2,p=e[u];l&&a(p);)0===p.indexOf(t)?l+=1:0===p.indexOf("/"+t)&&(l-=1,i=u),p=e[u+=2];if(l)throw Error(t+" needs {{/"+t+"}} expression.");return e[0]=c(e[0].split(" ").slice(1),(o=0,s=i,(r=e.splice(o+1,s-o)).pop(),r),n),e}function b(t,e){var n=v(t[0],e);return n instanceof Function?function(t,e,n){var i=[];return o(e,(function(t){i.push(v(t,n))})),t.apply(null,i)}(n,t.slice(1),e):n}function x(t,e){for(var n,i,o,s=1,r=t[s];a(r);)i=(n=r.split(" "))[0],_[i]?(o=y(i,t.splice(s,t.length-s),e),t=t.concat(o)):t[s]=b(n,e),r=t[s+=2];return t.join("")}t.exports=function(t,e){return x(g(t,c),e)}},function(t,e,n){var i=n(1),o=n(31);t.exports=function(t,e){var n=location.hostname,s="TOAST UI "+t+" for "+n+": Statistics",a=window.localStorage.getItem(s);(i(window.tui)||!1!==window.tui.usageStatistics)&&(a&&!function(t){return(new Date).getTime()-t>6048e5}(a)||(window.localStorage.setItem(s,(new Date).getTime()),setTimeout((function(){"interactive"!==document.readyState&&"complete"!==document.readyState||o("https://www.google-analytics.com/collect",{v:1,t:"event",tid:e,cid:n,dp:n,dh:t,el:t,ec:"use"})}),1e3)))}},function(t,e,n){var i=n(6);t.exports=function(t,e){var n=document.createElement("img"),o="";return i(e,(function(t,e){o+="&"+e+"="+t})),o=o.substring(1),n.src=t+"?"+o,n.style.display="none",document.body.appendChild(n),document.body.removeChild(n),n}}])}();var c=o("5sxXJ");function l(t){p.cardList.insertAdjacentHTML("beforeend",function(t=[]){return async function(){if(localStorage.key===f);}(),t.map((t=>{const{id:e,title:n,original_name:i,poster_path:o,genre_ids:s,release_date:a,first_air_date:r}=t;return`<li class="home-card__link" id=${e}>\n\t\t\t\t<div class = "home-card__thumb">\n\t\t\t\t<picture class="home-card__poster">\n\t\t\t\t\t\t  <source media="(min-width:1280px)"  srcset="https://image.tmdb.org/t/p/w500${o}">\n\t\t\t\t\t\t  <source media="(min-width:768px)"  srcset="https://image.tmdb.org/t/p/w400${o}">\n\t\t\t\t\t\t  <img class="home-card__img" src="https://image.tmdb.org/t/p/w300${o}" alt="${n}" loading="lazy">\n\t\t\t\t\t  </picture>\n\t\t\t\t  </div>\n\t\t\t\t  <div class="card__content">\n\t\t\t\t  <h2 class="card__title">${n||i}</h2>\n\t\t\t\t  <p class="card__text">${function(t){const e=d.filter((e=>t.includes(e.id))).map((t=>t.name));return e.length>2?`${e[0]}, ${e[1]}, Others`:e.join(", ")}(s)} | ${a?a.slice(0,4):r.slice(0,4)}</p>\n\t\t\t</div>\n\t\t\t\t  </li>`})).join("")}(t))}function u(){p.cardList.innerHTML=""}const p={cardList:document.querySelector(".cards__list")},f="genres";let d=c.genres;const m={totalItems:10,itemsPerPage:10,visiblePages:10,page:1,totalItems:500,itemsPerPage:20,visiblePages:5,centerAlign:!0,usageStatistics:!1,template:{page:'<a href="#" class="tui-page-btn">{{page}}</a>',currentPage:'<strong class="tui-page-btn tui-is-selected">{{page}}p</strong>',currentPage:'<a href="#" class="tui-page-btn tui-is-selected">{{page}}</a>'}},h=document.getElementById("foo"),_=new(0,s.default),g={pagination:document.querySelector(".tui-pagination"),cardList:document.querySelector(".cards__list")},v=new(t(r))(g.pagination,m);async function y(t){try{_.setPage(t.page),currentPage=t.page,a.spinner.spin(h),u();const e=await _.fetchPopularMovies();l(e.results)}catch(t){console.log(t)}a.spinner.stop()}m.pagination=v,console.log(m),async function(){try{a.spinner.spin(h);const t=await _.fetchPopularMovies();console.log(t);l(t.results)}catch(t){console.log(t)}a.spinner.stop(),v.on("afterMove",y)}(),o("biHlP");var b=o("2shzp"),x=o("iQIUW"),E=(a=o("04jNI"),o("b5rV1")),P=(s=o("7rYDH"),o("4WdgQ"));const w=document.getElementById("foo"),M={modalFilmBackdrop:document.querySelector("[data-modal-film]"),modalFilm:document.querySelector(".modal-film"),cardFilm:document.querySelector(".cards__list"),cardFilmLibrary:document.querySelector(".container-library")};function C(t){const e=t.target,n=Number(t.target.dataset.id);t.target.classList.contains("js-add-watched")?(0,E.checkLocalStorageMovies)(e,n,E.WATCHED_FILM):t.target.classList.contains("js-add-queue")&&(0,E.checkLocalStorageMovies)(e,n,E.QUEUED_FILM)}function L(){window.removeEventListener("keydown",B),document.removeEventListener("click",I),M.modalFilmBackdrop.classList.add("is-hidden"),M.modalFilm.classList.add("is-hidden"),document.body.classList.remove("no-scroll")}function I(t){(t.target.classList.contains("close-modal__btn-text")||t.target.classList.contains("close-modal__btn-inner")||t.target.classList.contains("close-modal__btn-text"))&&L()}function B(t){"Escape"===t.code&&L()}async function T(t){try{a.spinner.spin(w);const e=await b.default.get(`https://api.themoviedb.org/3/movie/${t}?api_key=9fae0fdf266213c68361ca578a95b948&language=en-US`);return await e.data}catch(t){console.log(t.message)}finally{a.spinner.stop()}}function N(t){const e=S(t);return M.modalFilm.insertAdjacentHTML("beforeend",e),t}M.cardFilm.addEventListener("click",(function(t){M.modalFilmBackdrop.classList.remove("is-hidden"),M.modalFilm.classList.remove("is-hidden"),document.body.classList.add("no-scroll"),document.addEventListener("click",I),window.addEventListener("keydown",B);const e=t.target.closest(".home-card__link").id;T(e).then((t=>(M.modalFilm.innerHTML="",N(t)))),M.modalFilmBackdrop.classList.contains("is-hidden")||M.modalFilm.addEventListener("click",C);(new(0,s.default)).fetchMoviesTrailers(e).then((t=>{if(console.log(t),0===t.results.length)return;document.querySelector(".modal-film-card-wrapper").remove();const e=(0,P.markupMovieTrailer)(t.results[0].key);M.modalFilm.insertAdjacentHTML("afterbegin",e)})).catch((t=>console.log(t)))})),M.modalFilmBackdrop.addEventListener("click",(function(t){t.currentTarget===t.target&&L()}));const S=({id:t,title:e,original_title:n,overview:i,poster_path:o,vote_average:s,vote_count:a,popularity:r,genres:c})=>{const l=c.map((t=>t.name)).join(", "),u=(0,E.loadFromLocalStorage)(E.WATCHED_FILM),p=(0,E.loadFromLocalStorage)(E.QUEUED_FILM);let f="ADD TO WATCHED",d="ADD TO QUEUE",m="modal-active",h="modal-active";return u.includes(t)&&(f="REMOVE FROM WATCHED",m=""),p.includes(t)&&(d="REMOVE FROM QUEUE",h=""),`\n  <button\n      type="button"\n      class="modal-film__close-button close-modal__btn"\n    >\n    <div class="close-modal__btn-inner">\n    <span class="close-modal__btn-text">Back\n    </span> </div>\n    </button>\n  <div class="modal-film__card"  id="${t}">\n  <div class="modal-film-card-wrapper">\n  <picture class="modal-film__img>\n  <source media="(min-width:1024px)" srcset="https://image.tmdb.org/t/p/w500${o}">\n  <source media="(min-width:768px)"  srcset="https://image.tmdb.org/t/p/w400${o}">\n  <img class="img-film__poster" src="https://image.tmdb.org/t/p/w300${o}"  "alt="${e}" loading="lazy"  >\n</picture>\n</div>\n<div class="movie-info">\n  <h2 class="film-title">${e}</h2>\n  <ul class="film-title__list-film">\n  <li class="film-title__item-film"><p class="film-title__value" >Vote / Votes </p><p class="film-title__desc-film"><span class="film-title__vote_average">${s}</span><span class="film-title__slash">/</span><span class="film-title__vote_count">${a}</span> </p> </li>\n  <li class="film-title__item-film"><p class="film-title__value">Popularity</p><p class="film-title__desc-film">${r}</p></li>\n  <li class="film-title__item-film"><p class="film-title__value">Original Title</p><p class="film-title__desc-film">${n}</p></li>\n  <li class="film-title__item-film"><p class="film-title__value">Genre</p><p class="film-title__desc-film">${l}</p></li>\n \n  </ul>\n  <h3 class="about-title">About</h3>\n  <p class="text-about-movie">${i}</p>\n\n  <ul class="modal-window_list-btn">\n      <li class="modal-window_list-item-btn "><button aria-label="add or remove from watched" class="${m} modal-window__watched-btn js-add-watched" type="button" data-id=${t}>${f}</button></li>\n      <li class="modal-window_list-item-btn "><button aria-label="add or remove from queue" class="${h} modal-window__queued-btn js-add-queue" type="button" data-id=${t}>${d}</button></li>\n    </ul>\n  </div>\n`};o("7rYDH"),o("04jNI"),o("gyeM6");s=o("7rYDH"),a=o("04jNI"),x=o("iQIUW");const k={cardList:document.querySelector(".gallery__list"),formSearch:document.querySelector(".header__form"),notification:document.querySelector(".header__notification")},F=document.getElementById("foo"),O=new(0,s.default);k.formSearch.addEventListener("submit",(function(t){if(t.preventDefault(),k.notification.textContent="",O.query=t.currentTarget.elements.searchQuery.value.trim().toLowerCase(),""===O.query)return void x.Notify.info("Search result not successful. Enter the correct movie name and try again.");!async function(){try{a.spinner.spin(F);const t=await O.fetchSearchMovies(),e=t.results;if(console.log(e),l(e),console.log(t),u(),l(e),0===t.total_results)x.Notify.info("Search result not successful. Enter the correct movie name and try again.")}catch(t){x.Notify.info("Search result not successful. Enter the correct movie name and try again.")}finally{a.spinner.stop()}}()})),o("h53OD").btnUp.addEventListener();
//# sourceMappingURL=index.25b7c7bf.js.map
