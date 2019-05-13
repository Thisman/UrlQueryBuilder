"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports["default"]=void 0;function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function _defineProperties(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}function _createClass(a,b,c){return b&&_defineProperties(a.prototype,b),c&&_defineProperties(a,c),a}function _typeof(a){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},_typeof(a)}function _slicedToArray(a,b){return _arrayWithHoles(a)||_iterableToArrayLimit(a,b)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function _iterableToArrayLimit(a,b){var c=[],d=!0,e=!1,f=void 0;try{for(var g,h=a[Symbol.iterator]();!(d=(g=h.next()).done)&&(c.push(g.value),!(b&&c.length===b));d=!0);}catch(a){e=!0,f=a}finally{try{d||null==h["return"]||h["return"]()}finally{if(e)throw f}}return c}function _arrayWithHoles(a){if(Array.isArray(a))return a}var clearUrl=function(a){var b="";if("string"==typeof a){var c=a.split("?"),d=_slicedToArray(c,1);b=d[0]}else throw new Error("Param 'url' in method 'clearUrl' must be a string got ".concat(a));return b},parseQueries=function(){var a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{},b={},c=_typeof(a);if("string"===c)for(var d=a.split("&"),e=0;e<d.length;e++){var f=d[e].split("="),g=_slicedToArray(f,2),h=g[0],j=g[1];b[h]=j}else"object"===c&&null!==a&&(b=a);return b},parseQueriesFromUrl=function(a){var b={};if("string"==typeof a){var c=a.split("?"),d=_slicedToArray(c,2);b=d[1],b=parseQueries(b)}else throw new Error("Param 'url' in method 'parseQueriesFromUrl' must be a string got ".concat(a));return b},URLQueryBuilder=function(){function a(){var b=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"",c=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};_classCallCheck(this,a),this.url=clearUrl(b),this.queries=Object.assign(parseQueriesFromUrl(b),parseQueries(c))}return _createClass(a,[{key:"get",value:function get(){var a=this.url,b=this.queries,c="";for(var d in b){var e=b[d];void 0!==e&&null!==e&&(c+="".concat(d,"=").concat(e,"&"))}return c=c.slice(0,-1),"".concat(a,"?").concat(c)}},{key:"getClearUrl",value:function getClearUrl(){return this.url}},{key:"delete",value:function _delete(a){return delete this.queries[a],this}},{key:"set",value:function set(a,b){if("string"==typeof a)this.queries[a]=b;else if("object"===_typeof(a)&&null!==a){var c=a;for(var d in c)this.set(d,c[d])}else throw new Error("Param 'name' must be a string or an object, got ".concat(a));return this}},{key:"reset",value:function reset(){var a=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"";return this.queries=parseQueries(a),this}},{key:"has",value:function has(a){return this.queries.hasOwnProperty(a)}}]),a}();exports["default"]=URLQueryBuilder;
