module.exports=function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}([function(e,t,n){"use strict";function r(e,t){t.forEach(function(t){var n=e.document.createElement("link");n.setAttribute("rel","stylesheet"),n.setAttribute("type","text/css"),n.setAttribute("href",t),e.document.getElementsByTagName("head")[0].appendChild(n)})}Object.defineProperty(t,"__esModule",{value:!0}),t.default={install:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};e.mixin({methods:{$htmlToPaper:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){return!0},o=t.name,i=void 0===o?"_blank":o,u=t.specs,l=void 0===u?["fullscreen=yes","titlebar=yes","scrollbars=yes"]:u,c=t.replace,s=void 0===c||c,a=t.styles,d=void 0===a?[]:a;l=l.length?l.join(","):"";var f=document.getElementById(e);if(!f)return void alert("Element to print #"+e+" not found!");var m=window.open("",i,l,s);return m.document.write("\n            <html>\n              <head>\n                <title>"+document.title+"</title>\n              </head>\n              <body>\n                "+f.innerHTML+"\n              </body>\n            </html>\n          "),r(m,d),setTimeout(function(){m.document.close(),m.focus(),m.print(),m.close(),n()},1e3),!0}}})}}}]);