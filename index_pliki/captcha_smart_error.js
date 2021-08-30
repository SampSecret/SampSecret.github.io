!function(e){var r={};function t(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:n})},t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,r){if(1&r&&(e=t(e)),8&r)return e;if(4&r&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(t.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var o in e)t.d(n,o,function(r){return e[r]}.bind(null,o));return n},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},t.p="/",t(t.s="HL0t")}({"/3UW":function(e,r){!function(){"use strict";var e;(e=Ya.Rum).logAjaxError=function(r,t,n,o){r.type="network",r.additional=r.additional||{},"timeout"===n?r.additional.timeout=1:t.status&&(r.additional.status=t.status),e.logError(r,o)}}()},"4bU/":function(e,r){!function(){"use strict";var e;(e=Ya.Rum).logError=function(r,t){r=r||{},"string"!==typeof t&&"undefined"!==typeof t||((t=new Error(t)).justCreated=!0);var n=r.message||"",o=e._baseNormalizeError(t);o.message&&(n&&(n+="; "),n+=o.message),o.message=n||"Empty error";for(var i=["service","source","type","block","additional","level","page","method","sourceMethod","coordinates_gp"],a=0;a<i.length;a++){var s=i[a];r[s]?o[s]=r[s]:t&&t[s]&&(o[s]=t[s])}e._handleError(o,!0)}}()},AtJA:function(e,r){!function(e){if(e.Ya=e.Ya||{},Ya.Rum)throw new Error("Rum: interface is already defined");Ya.Rum={};var r=Ya.Rum;r.getSetting=function(e){var t=r._errorSettings[e];return null===t?null:t||""}}("undefined"!==typeof self?self:window)},HL0t:function(e,r,t){"use strict";t.r(r);t("AtJA"),t("zeYS"),t("Z6ua"),t("QtLF"),t("4bU/"),t("/3UW");window.Ya.Rum.initErrors({reqid:window.__SSR_DATA__.reqId,project:"captcha",page:"new_design",platform:"desktop",version:"1.0.0",preventError:!1,unhandledRejection:!0,debug:!1})},QtLF:function(e,r){!function(){"use strict";!function(e){function r(){var r=e.getSetting("clck"),t=e.countersBatchData.join("\r\n");if((e.countersBatchData=[],e.counterTimerId=null,r)&&!(navigator.sendBeacon&&e.getSetting("beacon")&&navigator.sendBeacon(r,t)))if("undefined"!==typeof self&&self.fetch)fetch(r,{method:"POST",body:t});else{var n=new XMLHttpRequest;n.open("POST",r),n.send(t)}}e.countersBatchData=[],e.counterTimerId,e.send=function(t,n,o,i,a,s,c){clearTimeout(e.counterTimerId);var u=function(r,t,n,o,i,a){var s=e.getSetting("slots");return[a?"/"+a.join("/"):"","/path="+t,s?"/slots="+s.join(";"):"",n?"/vars="+n:"","/cts="+(new Date).getTime(),"/*"]}(0,n,o,0,0,c);e.countersBatchData.push("/reqid="+e.getSetting("reqid")+u.join("")),e.countersBatchData.length<42?e.counterTimerId=setTimeout(r,15):r()}}(Ya.Rum)}()},Z6ua:function(e,r){!function(e){var r={url:{0:/(miscellaneous|extension)_bindings/,1:/^chrome:/,2:/kaspersky-labs\.com\//,3:/^(?:moz|chrome)-extension:\/\//,4:/^file:/,5:/^resource:\/\//,6:/webnetc\.top/,7:/local\.adguard\.com/},message:{0:/__adgRemoveDirect/,1:/Content Security Policy/,2:/vid_mate_check/,3:/ucapi/,4:/Access is denied/i,5:/^Uncaught SecurityError/i,6:/__ybro/,7:/__show__deepen/,8:/ntp is not defined/,9:/Cannot set property 'install' of undefined/,10:/NS_ERROR/,11:/Error loading script/,12:/^TypeError: undefined is not a function$/,13:/__firefox__\.(?:favicons|metadata|reader|searchQueryForField|searchLoginField)/},stack:{0:/(?:moz|chrome)-extension:\/\//,1:/adguard.*\.user\.js/i}};function t(e,r){if(e&&r){var t=[];for(var n in r)if(r.hasOwnProperty(n)){var o=r[n];"string"===typeof o&&(o=new RegExp(o)),o instanceof RegExp&&o.test(e)&&t.push(n)}return t.join("_")}}function n(e,n){var o,i=[];for(var a in r)r.hasOwnProperty(a)&&(o=t(e[a],n[a]))&&i.push(a+"~"+o);return i.join(";")}e._isExternalError=function(t,o,i){var a=e._errorSettings.filters||{},s={url:(t||"")+"",message:(o||"")+"",stack:(i||"")+""},c=n(s,r),u=n(s,a);return{common:c,custom:u,hasExternal:!(!c&&!u)}}}(Ya.Rum)},zeYS:function(e,r){!function(e,r){var t={client:["690.2354",1e3,100,0],uncaught:["690.2361",100,10,0],external:["690.2854",100,10,0],script:["690.2609",100,10,0]},n={};r.ERROR_LEVEL={INFO:"info",DEBUG:"debug",WARN:"warn",ERROR:"error",FATAL:"fatal"},r._errorSettings={clck:"https://yandex.ru/clck/click",beacon:!0,project:"unknown",page:"",env:"",experiments:[],additional:{},platform:"",region:"",dc:"",host:"",service:"",level:"",version:"",yandexuid:"",coordinates_gp:"",referrer:!0,preventError:!1,unhandledRejection:!1,uncaughtException:!0,debug:!1,limits:{},silent:{},filters:{},pageMaxAge:864e6,initTimestamp:+new Date};var o=!1;function i(e,r){for(var t in r)r.hasOwnProperty(t)&&(e[t]=r[t]);return e}function a(e){return"boolean"===typeof e&&(e=+e),"number"===typeof e?e+"":null}r.initErrors=function(t){i(r._errorSettings,t),!o&&r._errorSettings.uncaughtException&&(!function(){var t=r._errorSettings;if(e.addEventListener)e.addEventListener("error",s),t.resourceFails&&e.addEventListener("error",c,!0),"Promise"in e&&t.unhandledRejection&&e.addEventListener("unhandledrejection",(function(e){var r,t=e.reason,n={};t&&(t.stack&&t.message?r=t.message:"[object Event]"===(r=String(t))?r="event.type: "+t.type:"[object Object]"===r&&(n.unhandledObject=t),t.target&&t.target.src&&(n.src=t.target.src),s({message:"Unhandled rejection: "+r,stack:t.stack,additional:n}))}));else{var n=e.onerror;e.onerror=function(e,r,t,o,i){s({error:i||new Error(e||"Empty error"),message:e,lineno:t,colno:o,filename:r}),n&&n.apply(this,arguments)}}}(),o=!0)},r.updateErrors=function(e){i(r._errorSettings,e)},r.updateAdditional=function(e){r._errorSettings.additional=i(r._errorSettings.additional||{},e)},r._handleError=function(e,o){var i,a,s=r._errorSettings;if(s.preventError&&e.preventDefault&&e.preventDefault(),o)i=e,a="client";else{i=r._normalizeError(e),a=i.type;var c=s.onError;"function"===typeof c&&c(i);var u=s.transform;"function"===typeof u&&(i=u(i))}var l=+new Date,d=s.initTimestamp,f=s.pageMaxAge;if(!(-1!==f&&d&&d+f<l)){var p=t[a][1];"number"===typeof s.limits[a]&&(p=s.limits[a]);var g=t[a][2];"number"===typeof s.silent[a]&&(g=s.silent[a]);var m=t[a][3];if(m<p||-1===p){i.path=t[a][0];var v=r._getErrorData(i,{silent:m<g||-1===g?"no":"yes",isCustom:Boolean(o)},s),h=function(e){n[i.message]=!1,r._sendError(e.path,e.vars),t[a][3]++}.bind(this,v);if("undefined"===typeof s.throttleSend)h();else{if(n[i.message])return;n[i.message]=!0,setTimeout(h,s.throttleSend)}}}},r._getReferrer=function(r){var t=r.referrer,n=typeof t;return"function"===n?t():"string"===n&&t?t:!1!==t&&e.location?e.location.href:void 0},r._buildExperiments=function(e){return e instanceof Array?e.join(";"):""},r._buildAdditional=function(e,r){var t="";try{var n=i(i({},e),r);0!==Object.keys(n).length&&(t=JSON.stringify(n))}catch(o){}return t},r._getErrorData=function(t,n,o){n=n||{};var i=r._buildExperiments(o.experiments),s=r._buildAdditional(o.additional,t.additional),c={"-stack":t.stack,"-url":t.file,"-line":t.line,"-col":t.col,"-block":t.block,"-method":t.method,"-msg":t.message,"-env":o.env,"-external":t.external,"-externalCustom":t.externalCustom,"-project":o.project,"-service":t.service||o.service,"-page":t.page||o.page,"-platform":o.platform,"-level":t.level,"-experiments":i,"-version":o.version,"-region":o.region,"-dc":o.dc,"-host":o.host,"-yandexuid":o.yandexuid,"-coordinates_gp":t.coordinates_gp||o.coordinates_gp,"-referrer":r._getReferrer(o),"-source":t.source,"-sourceMethod":t.sourceMethod,"-type":n.isCustom?t.type:"","-additional":s,"-adb":a(Ya.blocker)||a(o.blocker),"-cdn":e.YaStaticRegion,"-ua":navigator.userAgent,"-silent":n.silent,"-ts":+new Date,"-init-ts":o.initTimestamp};return o.debug&&e.console&&console[console[t.level]?t.level:"error"]("[error-counter] "+t.message,c,t.stack),{path:t.path,vars:c}},r._baseNormalizeError=function(e){var r=(e=e||{}).error,t=e.filename||e.fileName||"",n=r&&r.stack||e.stack||"",o=e.message||"",i=r&&r.additional||e.additional;return{file:t,line:e.lineno||e.lineNumber,col:e.colno||e.colNumber,stack:n,message:o,additional:i}},r._normalizeError=function(e){var t=r._baseNormalizeError(e),n="uncaught",o=r._isExternalError(t.file,t.message,t.stack),i="",a="";return o.hasExternal?(n="external",i=o.common,a=o.custom):/^Script error\.?$/.test(t.message)&&(n="script"),t.external=i,t.externalCustom=a,t.type=n,t},r._createVarsString=function(e){var r=[];for(var t in e)e.hasOwnProperty(t)&&(e[t]||0===e[t])&&r.push(t+"="+encodeURIComponent(e[t]).replace(/\*/g,"%2A"));return r.join(",")},r._sendError=function(e,t){r.send(null,e,r._createVarsString(t),null,null,null,null)};var s=function(e){r._handleError(e,!1)},c=function(e){var t=e.target;if(t){var n=t.srcset||t.src;if(n||(n=t.href),n){var o=t.tagName||"UNKNOWN";r.logError({message:o+" load error",additional:{src:n}})}}}}("undefined"!==typeof self?self:window,Ya.Rum)}});