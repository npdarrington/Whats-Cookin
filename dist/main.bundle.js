/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/scripts.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/css/styles.scss":
/*!************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/css/styles.scss ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Imports
var urlEscape = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/url-escape.js */ "./node_modules/css-loader/dist/runtime/url-escape.js");
var ___CSS_LOADER_URL___0___ = urlEscape(__webpack_require__(/*! ../images/green-apples.jpg */ "./src/images/green-apples.jpg"));

// Module
exports.push([module.i, "body {\n  background-color: #5B7894;\n  display: grid;\n  font-family: \"Quicksand\", sans-serif;\n  grid-template-columns: 1fr 5fr;\n  grid-template-areas: \"header header\" \"image image\" \"aside main\";\n  height: 100vh;\n  margin: 0;\n  padding: 0;\n  -webkit-font-smoothing: auto; }\n\nh1 {\n  align-self: center;\n  color: white;\n  font-family: \"Sulphur Point\", sans-serif;\n  font-size: 50px;\n  margin: 0%;\n  padding: 0.5% 0.7% 0%;\n  width: 70%; }\n\nh2 {\n  color: #84C8A4;\n  margin: 10px 0px 10px 0px; }\n\nh3 {\n  color: #359567;\n  cursor: pointer;\n  height: 17%;\n  margin: 5px 5px 10px 0px;\n  transition: .8s ease; }\n\nh4 {\n  color: #359567;\n  background-color: #C4EB67;\n  border-radius: 3px;\n  margin: 10px 0px 0px 0px;\n  padding: 1px 4px 1px 4px;\n  width: max-content; }\n\n/* HEADER */\nheader {\n  display: flex;\n  flex-direction: row;\n  grid-area: header;\n  padding: 0% 0%;\n  width: 100%; }\n\nspan {\n  color: #C4EB67;\n  font-weight: 400; }\n\n.header-apple-icon {\n  height: 40px;\n  margin-left: 5px;\n  width: 35px; }\n\n#search {\n  border-radius: 15px 15px 15px 15px;\n  border: 3px outset #C4EB67;\n  box-shadow: 0px 0px 7px 0px #475d74;\n  display: flex;\n  flex-direction: row;\n  font-family: \"Quicksand\", sans-serif;\n  justify-content: center;\n  margin: 1.2% 0.5% 1.2% 0%;\n  width: 100%; }\n\n#search-input {\n  background-color: #b6dcca;\n  background: -webkit-gradient(linear, left top, left bottom, color-stop(0, white), color-stop(1, #e1e1e1));\n  border-radius: 10px 0px 0px 10px;\n  border: none;\n  box-shadow: inset -3px -1px 20px 1px #5c7894;\n  color: #5B7894;\n  font-family: \"Quicksand\", sans-serif;\n  font-size: 42px;\n  height: 100%;\n  outline: none;\n  padding: 0% 2% 0% 0%;\n  text-align: right;\n  transition: .8s ease;\n  width: 100%; }\n\n#search-input:hover {\n  box-shadow: inset 0px 0px 0px 0px white;\n  transition: .8s ease; }\n\n#search-input:focus {\n  box-shadow: inset 0px 0px 0px 0px white; }\n\n#search-input::placeholder {\n  color: #5B7894;\n  font-size: 20px;\n  text-align: right;\n  text-shadow: none; }\n\n#search-input:focus::placeholder {\n  font-size: 0px;\n  transition: .8s ease; }\n\n.search-label {\n  display: none; }\n\n.search-btn {\n  border-left: 3px outset #C4EB67;\n  border-radius: 0px 15px 15px 0px;\n  padding: 1%; }\n\n.nav-btn {\n  align-items: center;\n  background: #5B7894 no-repeat;\n  border: none;\n  cursor: pointer;\n  display: flex;\n  flex-direction: column;\n  font-size: 0px;\n  font-weight: 700;\n  justify-content: center;\n  margin: 0%;\n  outline: none;\n  overflow: hidden;\n  text-align: center;\n  transition: .4s ease;\n  width: 15%; }\n\n.nav-btn:hover {\n  color: #C4EB67;\n  font-size: 14px;\n  text-shadow: 0px 2px 4px black;\n  transition: .4s ease; }\n\n.nav-btn img {\n  max-height: 40px;\n  max-width: 40px;\n  padding: 2px 0px; }\n\n.saved-ingredients-btn {\n  border-left: 3px solid #C4EB67; }\n\n.ing-pan-btn {\n  margin: 1% 0%;\n  padding: 1px 6px 5px 0px; }\n\n/* BANNER IMAGE*/\n.banner-image {\n  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(" + ___CSS_LOADER_URL___0___ + ");\n  grid-area: image;\n  height: 150px;\n  overflow: hidden;\n  width: 100%; }\n\n.my-recipes-banner,\n.welcome-msg {\n  text-align: center;\n  width: 95%; }\n\n.my-recipes-banner h1,\n.welcome-msg h1 {\n  color: white;\n  width: 100%; }\n\n.my-recipes-banner {\n  display: none;\n  margin-top: 25px; }\n\n.welcome-msg {\n  margin-top: 50px; }\n\n/* FILTER SIDEBAR */\naside {\n  background-color: white;\n  display: flex;\n  justify-content: center;\n  height: auto;\n  text-align: center; }\n\n.wrap {\n  background-color: white;\n  height: 100vh;\n  padding: 10px;\n  position: relative;\n  width: 200px; }\n\nul {\n  list-style-type: none;\n  text-align: left;\n  padding-left: 35px; }\n\nli {\n  margin: 2px; }\n\n/* RECIPE CARD SECTION */\nmain {\n  grid-area: main;\n  display: flex;\n  justify-content: center;\n  align-content: flex-start;\n  flex-direction: row;\n  flex-wrap: wrap; }\n\n.recipe-card {\n  background-color: white;\n  border: 2px solid #C4EB67;\n  border-radius: 7px;\n  cursor: pointer;\n  height: 270px;\n  margin: 20px;\n  padding: 15px;\n  width: 250px; }\n\n.recipe-card:hover .card-photo-preview {\n  opacity: 50%;\n  transition: .8s ease; }\n\n.recipe-card:hover .text {\n  font-size: 20px;\n  opacity: 100%;\n  transition: .5s ease;\n  width: 100%; }\n\n.recipe-card:hover h3 {\n  text-shadow: 0px 0px 4px #C4EB67;\n  transition: .8s ease; }\n\n.card-apple-icon {\n  cursor: pointer;\n  float: right;\n  height: 50px;\n  padding-bottom: 10px;\n  width: 45px; }\n\n.card-photo-preview {\n  background-position: 50% 50%;\n  background-repeat: no-repeat;\n  background-size: cover;\n  border-radius: 7px;\n  cursor: pointer;\n  height: 130px;\n  transition: .8s ease;\n  width: 100%; }\n\n.card-photo-container {\n  align-items: center;\n  display: flex;\n  height: 130px;\n  justify-content: center;\n  position: relative; }\n\n.text {\n  background: #359567;\n  color: white;\n  font-weight: 700;\n  font-size: 0px;\n  opacity: 0%;\n  padding: 0%;\n  position: absolute;\n  text-align: center;\n  width: 0%;\n  transition: .5s ease; }\n\n/* BUTTONS */\n.show-pantry-recipes-btn,\n.show-all-btn,\n.filter-btn {\n  background-color: #359567;\n  border: 0;\n  border-radius: 3px;\n  color: white;\n  cursor: pointer;\n  font-family: \"Quicksand\", sans-serif;\n  font-size: 12pt;\n  font-weight: bold;\n  padding: 5px 10px 5px 10px; }\n\n.show-pantry-recipes-btn {\n  margin-top: 10px; }\n\n.show-all-btn {\n  height: 40px;\n  margin-top: 20px;\n  width: 200px; }\n\n.filter-btn:hover {\n  background-color: #84C8A4; }\n\n/* PANTRY LIST */\n.drop-menu {\n  align-items: center;\n  background-color: #DAE4EE;\n  display: none;\n  height: 600px;\n  margin-left: 81%;\n  margin-top: 92px;\n  overflow: scroll;\n  padding: 12px;\n  position: absolute;\n  text-align: center;\n  width: 250px;\n  z-index: 3; }\n\n.drop-menu h2 {\n  color: #359567;\n  margin: 0px; }\n\n.pantry-list {\n  color: #000000;\n  padding-left: 15px;\n  text-align: left; }\n\n/* RECIPE INSTRUCTIONS */\n.recipe-instructions {\n  background: white;\n  border: 3px solid #C4EB67;\n  border-radius: 10px;\n  box-shadow: 1px 1px 115px black;\n  display: none;\n  height: 70%;\n  margin: 0;\n  overflow-x: scroll;\n  padding: 1% 1% 1% 1%;\n  position: fixed;\n  right: 15%;\n  top: 15%;\n  width: 70%;\n  z-index: 1000; }\n\n#exit-recipe-btn {\n  background: white;\n  border: 2px double #359567;\n  border-radius: 5px;\n  color: #359567;\n  cursor: pointer;\n  font-size: 20px;\n  font-weight: 700;\n  margin: -4% -3% 2% -1%;\n  position: fixed;\n  transition: .3s ease; }\n\n#exit-recipe-btn:hover {\n  background: #C4EB67;\n  transition: .3s ease; }\n\n#recipe-title {\n  background-repeat: no-repeat;\n  background-size: cover;\n  border-radius: 7px 7px 0px 0px;\n  color: white;\n  font-size: 30px;\n  margin: 0;\n  padding: 5%;\n  text-align: center;\n  text-shadow: 0px 0px 6px black; }\n\n.recipe-instructions h4 {\n  background: white;\n  color: #359567; }\n\n.recipe-instructions p {\n  margin-left: 2%; }\n\n.recipe-instructions ol {\n  margin-right: 2%; }\n\n#overlay {\n  filter: alpha(opacity=50);\n  background-color: #5B7894;\n  height: 100%;\n  left: 0;\n  opacity: 0.5;\n  position: fixed;\n  top: 0;\n  width: 100%;\n  z-index: 100; }\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return '@media ' + item[2] + '{' + content + '}';
      } else {
        return content;
      }
    }).join('');
  }; // import a list of modules into the list


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (i = 0; i < modules.length; i++) {
      var item = modules[i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || '';
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;
  return '/*# ' + data + ' */';
}

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/url-escape.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/url-escape.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function escape(url, needQuotes) {
  if (typeof url !== 'string') {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || needQuotes) {
    return '"' + url.replace(/"/g, '\\"').replace(/\n/g, '\\n') + '"';
  }

  return url;
};

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/Pantry.js":
/*!***********************!*\
  !*** ./src/Pantry.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

class Pantry {
  constructor() {}

  getPantryItems(user) {
    user.consolidatePantry();
    return user.pantry;
  }

  getRecipeIngredientsInStock(user, recipe) {
    return recipe.ingredients.reduce((ingredientsMissing, ingredientForRecipe) => {
      let pantryInventory = this.getPantryItems(user);
      let item = pantryInventory.find(item => {
        return ingredientForRecipe.id === item.ingredient;
      });
      if (!item || ingredientForRecipe.quantity.amount > item.amount) {
        let amountInPantry = (item && item.amount) || 0;
        ingredientsMissing.push({
          id: ingredientForRecipe.id,
          name: ingredientForRecipe.name,
          quantityNeeded: ingredientForRecipe.quantity.amount - amountInPantry
        });
      }
      return ingredientsMissing;
    }, []);
  }

  getMissingIngredientsPrice(missingIngredients, ingredientsData) {
    return missingIngredients.map(missingIngredient => {
      let missingQuantityPrice = ingredientsData.reduce((totalAmount, ingredient) => {
        if (missingIngredient.id === ingredient.id) {
          totalAmount = missingIngredient.quantityNeeded * ingredient.estimatedCostInCents;
        }
        return totalAmount;
      }, 0);
      missingIngredient.missingQuantityPrice = (missingQuantityPrice / 100);
      return missingIngredient;
    });
  }
}

module.exports = Pantry;


/***/ }),

/***/ "./src/css/styles.scss":
/*!*****************************!*\
  !*** ./src/css/styles.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/lib/loader.js!./styles.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/css/styles.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/fetch.js":
/*!**********************!*\
  !*** ./src/fetch.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//fetching 3 times, then promise.all resolves redundancies -- storing fetched data as obj properties(allData)
//return in allData?

// instead: start with Promise.all, two thens, and a catch


function fetchData() {
  let ingredientsData = fetch('https://fe-apps.herokuapp.com/api/v1/whats-cookin/1911/ingredients/ingredientsData')
    .then(response => response.json())
    .then(data => {
      return data.ingredientsData;
    })
    .catch(err => console.log(err.message))

  let recipeData = fetch('https://fe-apps.herokuapp.com/api/v1/whats-cookin/1911/recipes/recipeData')
    .then(response => response.json())
    .then(data => {
      return data.recipeData;
    })
    .catch(err => console.log(err.message))

  let userData = fetch('https://fe-apps.herokuapp.com/api/v1/whats-cookin/1911/users/wcUsersData')
    .then(response => response.json())
    .then(data => {
      return data.wcUsersData
    })
    .catch(err => console.log(err.message))

  return Promise.all([ingredientsData, recipeData, userData])
    .then(data => {
      let allData = {};
      allData.ingredientsData = data[0];
      allData.recipeData = data[1];
      allData.userData = data[2];
      return allData
    });
}
/* harmony default export */ __webpack_exports__["default"] = (fetchData);


/***/ }),

/***/ "./src/images/apple-logo-outline.png":
/*!*******************************************!*\
  !*** ./src/images/apple-logo-outline.png ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "images/apple-logo-outline.png";

/***/ }),

/***/ "./src/images/apple-logo.png":
/*!***********************************!*\
  !*** ./src/images/apple-logo.png ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "images/apple-logo.png";

/***/ }),

/***/ "./src/images/chicken-parm.jpg":
/*!*************************************!*\
  !*** ./src/images/chicken-parm.jpg ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "images/chicken-parm.jpg";

/***/ }),

/***/ "./src/images/cookbook.png":
/*!*********************************!*\
  !*** ./src/images/cookbook.png ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "images/cookbook.png";

/***/ }),

/***/ "./src/images/green-apples.jpg":
/*!*************************************!*\
  !*** ./src/images/green-apples.jpg ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "images/green-apples.jpg";

/***/ }),

/***/ "./src/images/pancakes.jpg":
/*!*********************************!*\
  !*** ./src/images/pancakes.jpg ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "images/pancakes.jpg";

/***/ }),

/***/ "./src/images/search.png":
/*!*******************************!*\
  !*** ./src/images/search.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "images/search.png";

/***/ }),

/***/ "./src/images/seasoning.png":
/*!**********************************!*\
  !*** ./src/images/seasoning.png ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "images/seasoning.png";

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _images_apple_logo_outline_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/apple-logo-outline.png */ "./src/images/apple-logo-outline.png");
/* harmony import */ var _images_apple_logo_outline_png__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_images_apple_logo_outline_png__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _images_apple_logo_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/apple-logo.png */ "./src/images/apple-logo.png");
/* harmony import */ var _images_apple_logo_png__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_images_apple_logo_png__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _images_chicken_parm_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/chicken-parm.jpg */ "./src/images/chicken-parm.jpg");
/* harmony import */ var _images_chicken_parm_jpg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_images_chicken_parm_jpg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _images_cookbook_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/cookbook.png */ "./src/images/cookbook.png");
/* harmony import */ var _images_cookbook_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_images_cookbook_png__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _images_green_apples_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/green-apples.jpg */ "./src/images/green-apples.jpg");
/* harmony import */ var _images_green_apples_jpg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_images_green_apples_jpg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _images_pancakes_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/pancakes.jpg */ "./src/images/pancakes.jpg");
/* harmony import */ var _images_pancakes_jpg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_images_pancakes_jpg__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _images_search_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./images/search.png */ "./src/images/search.png");
/* harmony import */ var _images_search_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_images_search_png__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _images_seasoning_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./images/seasoning.png */ "./src/images/seasoning.png");
/* harmony import */ var _images_seasoning_png__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_images_seasoning_png__WEBPACK_IMPORTED_MODULE_7__);
//Image Import










/***/ }),

/***/ "./src/recipe.js":
/*!***********************!*\
  !*** ./src/recipe.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

class Recipe {
  constructor(recipe) {
    this.id = recipe.id;
    this.name = recipe.name;
    this.image = recipe.image;
    this.tags = recipe.tags;
    this.instructions = recipe.instructions;
    this.ingredients = recipe.ingredients;
  }

  calculateIngredientsCost(ingredientData) {
    let totalIngredientCost = this.ingredients.reduce((totalCost, ingredient) => {
      ingredientData.forEach(data => {
        if (ingredient.id === data.id) {
          totalCost += ingredient.quantity.amount * data.estimatedCostInCents;
        }
      })
      return totalCost;
    }, 0);
    return +(`${totalIngredientCost / 100}`);
  }

  retrieveCookingInstructions() {
    return this.instructions
  }

  findRecipeByTag(recipeData, selectedTag) {
    return recipeData.reduce((foundRecipes, recipe) => {
      if (recipe.tags.includes(selectedTag)) {
        foundRecipes.push(recipe);
      }
      return foundRecipes;
    }, [])
  }

  findRecipeByIngredients(recipeData, selectedIngredient) {
    return recipeData.reduce((foundRecipes, recipe) => {
      recipe.ingredients.forEach(ingredient => {
        if (ingredient.name.includes(selectedIngredient)) {
          foundRecipes.push(recipe);
        }
      })
      return foundRecipes;
    }, [])
  }
}
module.exports = Recipe;


/***/ }),

/***/ "./src/scripts.js":
/*!************************!*\
  !*** ./src/scripts.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/styles.scss */ "./src/css/styles.scss");
/* harmony import */ var _css_styles_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_styles_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.js */ "./src/index.js");
/* harmony import */ var _Pantry__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Pantry */ "./src/Pantry.js");
/* harmony import */ var _Pantry__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Pantry__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user */ "./src/user.js");
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_user__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _recipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./recipe */ "./src/recipe.js");
/* harmony import */ var _recipe__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_recipe__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _fetch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./fetch */ "./src/fetch.js");







let allRecipesBtn = document.querySelector(".show-all-btn");
let filterBtn = document.querySelector(".filter-btn");
let fullRecipeInfo = document.querySelector(".recipe-instructions");
let main = document.querySelector("main");
let menuOpen = false;
let pantryBtn = document.querySelector(".my-pantry-btn");
let savedRecipesBtn = document.querySelector(".saved-recipes-btn");
let searchBtn = document.querySelector(".search-btn");
let searchForm = document.querySelector("#search");
let searchInput = document.querySelector("#search-input");
let showPantryRecipes = document.querySelector(".show-pantry-recipes-btn");
let tagList = document.querySelector(".tag-list");

window.addEventListener('load', getFetchData);
// window.addEventListener("load", createCards);
// window.addEventListener("load", findTags);
// window.addEventListener("load", generateUser);
allRecipesBtn.addEventListener("click", showAllRecipes);
filterBtn.addEventListener("click", findCheckedBoxes);
main.addEventListener("click", addToMyRecipes);
pantryBtn.addEventListener("click", toggleMenu);
savedRecipesBtn.addEventListener("click", showSavedRecipes);
searchBtn.addEventListener("click", searchRecipes);
showPantryRecipes.addEventListener("click", findCheckedPantryBoxes);
searchForm.addEventListener("submit", pressEnterSearch);

let recipes = []
let pantryInfo = []
let recipe;
let user;
let pantry;
let ingredientsData;
let users;

function getFetchData() {
  return Object(_fetch__WEBPACK_IMPORTED_MODULE_5__["default"])()
    .then(data => {
      console.log(data)
      users = data.userData
      user = new _user__WEBPACK_IMPORTED_MODULE_3___default.a(users[Math.floor(Math.random() * users.length)])
      recipes = data.recipeData
      ingredientsData = data.ingredientsData
    })
    .then(() => generateUser())
    .then(() => createCards(recipes))
    .then(() => findTags())
    // need to resolve whole page of data in this method
    .catch(err => console.log(err.message))
}

function displayInitialDom() {
  generateUser()
  createCards()
  findTags()
}
// GENERATE A USER ON LOAD
function generateUser() {
  // user = new User(users[Math.floor(Math.random() * users.length)]);
  let firstName = user.name.split(" ")[0];
  let welcomeMsg = `
    <div class="welcome-msg">
      <h1>Welcome ${firstName}!</h1>
    </div>`;
  document.querySelector(".banner-image").insertAdjacentHTML("afterbegin",
    welcomeMsg);
  findPantryInfo();
}

// CREATE RECIPE CARDS
function createCards(recipeData) {
  recipeData.forEach(recipe => {
    let recipeInfo = new _recipe__WEBPACK_IMPORTED_MODULE_4___default.a(recipe);
    console.log(recipeInfo)
    let shortRecipeName = recipeInfo.name;
    recipes.push(recipeInfo);
    if (recipeInfo.name.length > 40) {
      shortRecipeName = recipeInfo.name.substring(0, 40) + "...";
    }
    displayRecipeDetails(recipeInfo, shortRecipeName)
  });
}

function displayRecipeDetails(recipeInfo, shortRecipeName) {
  let cardHtml = `
    <div class="recipe-card" id=${recipeInfo.id}>
      <h3 maxlength="40">${shortRecipeName}</h3>
      <div class="card-photo-container">
        <img src=${recipeInfo.image} class="card-photo-preview" alt="${recipeInfo.name} recipe" title="${recipeInfo.name} recipe">
        <div class="text">
          <div>Click for Instructions</div>
        </div>
      </div>
      <h4>${recipeInfo.tags[0]}</h4>
      <img src="../images/apple-logo-outline.png" alt="unfilled apple icon" class="card-apple-icon">
    </div>`
  main.insertAdjacentHTML("beforeend", cardHtml);
}

// FILTER BY RECIPE TAGS
function findTags() {
  let tags = [];
  recipes.forEach(recipe => {
    recipe.tags.forEach(tag => {
      if (!tags.includes(tag)) {
        tags.push(tag);
      }
    });
  });
  tags.sort();
  listTags(tags);
}

function listTags(allTags) {
  allTags.forEach(tag => {
    let tagHtml = `<li><input type="checkbox" class="checked-tag" id="${tag}">
      <label for="${tag}">${capitalize(tag)}</label></li>`;
    tagList.insertAdjacentHTML("beforeend", tagHtml);
  });
}

function capitalize(words) {
  return words.split(" ").map(word => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }).join(" ");
}

function findCheckedBoxes() {
  let tagCheckboxes = document.querySelectorAll(".checked-tag");
  let checkboxInfo = Array.from(tagCheckboxes)
  let selectedTags = checkboxInfo.filter(box => {
    return box.checked;
  })
  findTaggedRecipes(selectedTags);
}

function findTaggedRecipes(selected) {
  let filteredResults = [];
  selected.forEach(tag => {
    let allRecipes = recipes.filter(recipe => {
      return recipe.tags.includes(tag.id);
    });
    allRecipes.forEach(recipe => {
      if (!filteredResults.includes(recipe)) {
        filteredResults.push(recipe);
      }
    })
  });
  showAllRecipes();
  if (filteredResults.length > 0) {
    filterRecipes(filteredResults);
  }
}

function filterRecipes(filtered) {
  let foundRecipes = recipes.filter(recipe => {
    return !filtered.includes(recipe);
  });
  hideUnselectedRecipes(foundRecipes)
}

function hideUnselectedRecipes(foundRecipes) {
  foundRecipes.forEach(recipe => {
    let domRecipe = document.getElementById(`${recipe.id}`);
    domRecipe.style.display = "none";
  });
}

// FAVORITE RECIPE FUNCTIONALITY
function addToMyRecipes() {
  if (event.target.className === "card-apple-icon") {
    let cardId = parseInt(event.target.closest(".recipe-card").id)
    if (!user.favoriteRecipes.includes(cardId)) {
      event.target.src = "../images/apple-logo.png";
      user.saveRecipe(cardId);
    } else {
      event.target.src = "../images/apple-logo-outline.png";
      user.removeRecipe(cardId);
    }
  } else if (event.target.id === "exit-recipe-btn") {
    exitRecipe();
  } else if (isDescendant(event.target.closest(".recipe-card"), event.target)) {
    openRecipeInfo(event);
  }
}

function isDescendant(parent, child) {
  let node = child;
  while (node !== null) {
    if (node === parent) {
      return true;
    }
    node = node.parentNode;
  }
  return false;
}

function showSavedRecipes() {
  let unsavedRecipes = recipes.filter(recipe => {
    return !user.favoriteRecipes.includes(recipe.id);
  });
  unsavedRecipes.forEach(recipe => {
    let domRecipe = document.getElementById(`${recipe.id}`);
    domRecipe.style.display = "none";
  });
  showMyRecipesBanner();
}

// CREATE RECIPE INSTRUCTIONS
function openRecipeInfo(event) {
  fullRecipeInfo.style.display = "inline";
  let recipeId = event.path.find(e => e.id).id;
  let recipe = recipes.find(recipe => recipe.id === Number(recipeId));
  console.log('RECIPE', recipe)
  generateRecipeTitle(recipe, generateIngredients(recipe));
  addRecipeImage(recipe);
  generateInstructions(recipe);
  fullRecipeInfo.insertAdjacentHTML("beforebegin", "<section id='overlay'></div>");
}

function generateRecipeTitle(recipe, ingredients) {
  let recipeTitle = `
    <button id="exit-recipe-btn">X</button>
    <h3 id="recipe-title">${recipe.name}</h3>
    <h4>Ingredients</h4>
    <p>${ingredients}</p>`
  fullRecipeInfo.insertAdjacentHTML("beforeend", recipeTitle);
}

function addRecipeImage(recipe) {
  document.getElementById("recipe-title").style.backgroundImage = `url(${recipe.image})`;
}

// ********
function generateIngredients(recipe) {
  const mappedRecipe = recipe.ingredients.map(recipeIngredient => {
    ingredientsData.forEach(ingredient => {
      if (ingredient.id === recipeIngredient.id) {
        recipeIngredient.name = ingredient.name
      }
    })
    return recipeIngredient
  })
  return recipe && mappedRecipe.map(i => {
    return `${capitalize(i.name)} (${i.quantity.amount} ${i.quantity.unit})`
  }).join(", ");
}

function generateInstructions(recipe) {
  let instructionsList = "";
  let instructions = recipe.instructions.map(i => {
    return i.instruction
  });
  instructions.forEach(i => {
    instructionsList += `<li>${i}</li>`
  });
  fullRecipeInfo.insertAdjacentHTML("beforeend", "<h4>Instructions</h4>");
  fullRecipeInfo.insertAdjacentHTML("beforeend", `<ol>${instructionsList}</ol>`);
}

function exitRecipe() {
  while (fullRecipeInfo.firstChild &&
    fullRecipeInfo.removeChild(fullRecipeInfo.firstChild));
  fullRecipeInfo.style.display = "none";
  document.getElementById("overlay").remove();
}

// TOGGLE DISPLAYS
function showMyRecipesBanner() {
  document.querySelector(".welcome-msg").style.display = "none";
  document.querySelector(".my-recipes-banner").style.display = "block";
}

function showWelcomeBanner() {
  document.querySelector(".welcome-msg").style.display = "flex";
  document.querySelector(".my-recipes-banner").style.display = "none";
}

// SEARCH RECIPES
function pressEnterSearch(event) {
  event.preventDefault();
  searchRecipes();
}

function searchRecipes() {
  showAllRecipes();
  let searchedRecipes = recipes.filter(recipe => {
    return recipe.name.toLowerCase().includes(searchInput.value.toLowerCase());
  });
  filterNonSearched(createRecipeObject(searchedRecipes));
}

function filterNonSearched(filtered) {
  let found = recipes.filter(recipe => {
    let ids = filtered.map(f => f.id);
    return !ids.includes(recipe.id)
  })
  hideUnselectedRecipes(found);
}

function createRecipeObject(recipes) {
  recipes = recipes.map(recipe => new _recipe__WEBPACK_IMPORTED_MODULE_4___default.a(recipe));
  return recipes
}

function toggleMenu() {
  var menuDropdown = document.querySelector(".drop-menu");
  menuOpen = !menuOpen;
  if (menuOpen) {
    menuDropdown.style.display = "block";
  } else {
    menuDropdown.style.display = "none";
  }
}

function showAllRecipes() {
  recipes.forEach(recipe => {
    let domRecipe = document.getElementById(`${recipe.id}`);
    domRecipe.style.display = "block";
  });
  showWelcomeBanner();
}

// CREATE AND USE PANTRY -- MAY NEED TO BE REWRITTEN*** display portion -- sort before display, not during
function findPantryInfo() {
  user.pantry.forEach(item => {
    let itemInfo = ingredientsData.find(ingredient => {
      return ingredient.id === item.ingredient;
    });
    let originalIngredient = pantryInfo.find(ingredient => {
      if (itemInfo) {
        return ingredient.name === itemInfo.name;
      }
    });
    if (itemInfo && originalIngredient) {
      originalIngredient.count += item.amount;
    } else if (itemInfo) {
      pantryInfo.push({name: itemInfo.name, count: item.amount, id: itemInfo.id});
    }
  });
  displayPantryInfo(pantryInfo.sort((a, b) => a.name.localeCompare(b.name)));
}

function displayPantryInfo(pantry) {
  //*** pantry = DOM pantry with just name and #
  pantry.forEach(ingredient => {
    let ingredientHtml = `<li><input type="checkbox" class="pantry-checkbox" id="${ingredient.id}">
      <label for="${ingredient.name}">${ingredient.name}, ${ingredient.count}</label></li>`;
    document.querySelector(".pantry-list").insertAdjacentHTML("beforeend",
      ingredientHtml);
  });
}

function findCheckedPantryBoxes() {
  let pantryCheckboxes = document.querySelectorAll(".pantry-checkbox");
  let pantryCheckboxInfo = Array.from(pantryCheckboxes)
  let selectedIngredients = pantryCheckboxInfo.filter(box => {
    return box.checked;
  })
  showAllRecipes();
  if (selectedIngredients.length > 0) {
    findRecipesWithCheckedIngredients(selectedIngredients);
  }
}

function findRecipesWithCheckedIngredients(selected) {

  let recipeChecker = (arr, target) => target.every(v => arr.includes(v));
  let ingredientNames = selected.map(item => {
    return +item.id;
  })
  recipes.forEach(recipe => {
    let allRecipeIngredients = [];
    recipe.ingredients.forEach(ingredient => {
      allRecipeIngredients.push(ingredient.id);
    });
    console.log(ingredientNames)
    if (!recipeChecker(allRecipeIngredients, ingredientNames)) {
      let domRecipe = document.getElementById(`${recipe.id}`);
      domRecipe.style.display = "none";
    }
  })
}

// const mappedRecipe = recipe.ingredients.map(recipeIngredient => {
//   ingredientsData.forEach(ingredient => {
//     if (ingredient.id === recipeIngredient.id) {
//       recipeIngredient.name = ingredient.name
//     }
//   })
//   return recipeIngredient
// })


/***/ }),

/***/ "./src/user.js":
/*!*********************!*\
  !*** ./src/user.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

class User {
  constructor(user) {
    this.id = user.id;
    this.name = user.name;
    this.pantry = user.pantry;
    this.favoriteRecipes = [];
    this.recipesToCook = [];
  }

  saveRecipe(recipe) {
    this.favoriteRecipes.push(recipe);
  }

  removeRecipe(recipeLocation, recipe) {
    let recipeIndex = this[recipeLocation].indexOf(recipe);
    this[recipeLocation].splice(recipeIndex, 1);
  }

  decideToCook(recipe) {
    this.recipesToCook.push(recipe);
  }

  filterRecipes(recipeLocation, type) {
    return this[recipeLocation].filter(recipe => recipe.type.includes(type));
  }

  searchForRecipe(recipeLocation, keyword) {
    return this[recipeLocation].filter(recipe => recipe.name.includes(keyword) || recipe.ingredients.includes(keyword));
  }

  marieKondoMyPantry() {
    const marieKondoPantry = this.pantry.reduce((konmariPantry, item) => {
      if(!konmariPantry[item.ingredient]) {
        konmariPantry[item.ingredient] = item.amount
      } else {
        konmariPantry[item.ingredient] += item.amount
      }
      return konmariPantry
    }, {})
    return marieKondoPantry
  }

  consolidatePantry() {
    const marieKondoPantry = this.marieKondoMyPantry()
    const pantry = Object.entries(marieKondoPantry).map(ingredient => {
      return { ingredient: +ingredient[0], amount: +ingredient[1] }
    })

    // const pantry = Object.keys(marieKondoPantry).map(ingredient => {
    //   return { ingredient: ingredient, amount: marieKondoPantry[ingredient] }
    // })
    this.pantry = pantry
  }

}

module.exports = User;


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nzcy9zdHlsZXMuc2NzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS91cmwtZXNjYXBlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi91cmxzLmpzIiwid2VicGFjazovLy8uL3NyYy9QYW50cnkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nzcy9zdHlsZXMuc2Nzcz8xM2IxIiwid2VicGFjazovLy8uL3NyYy9mZXRjaC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL2FwcGxlLWxvZ28tb3V0bGluZS5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy9hcHBsZS1sb2dvLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL2NoaWNrZW4tcGFybS5qcGciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy9jb29rYm9vay5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy9ncmVlbi1hcHBsZXMuanBnIiwid2VicGFjazovLy8uL3NyYy9pbWFnZXMvcGFuY2FrZXMuanBnIiwid2VicGFjazovLy8uL3NyYy9pbWFnZXMvc2VhcmNoLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL3NlYXNvbmluZy5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9yZWNpcGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VzZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FB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SDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7O0FBRUE7QUFDQSxLQUFLLEtBQXdDLEVBQUUsRUFFN0M7O0FBRUYsUUFBUSxzQkFBaUI7QUFDekI7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FB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QTtBQUNBLGNBQWM7QUFDZCxLQUFLOztBQUVMO0FBQ0EsaUJBQWlCO0FBQ2pCLFFBQVE7QUFDUjtBQUNBOztBQUVBOztBQUVBIiwiZmlsZSI6Im1haW4uYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvc2NyaXB0cy5qc1wiKTtcbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpKGZhbHNlKTtcbi8vIEltcG9ydHNcbnZhciB1cmxFc2NhcGUgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3VybC1lc2NhcGUuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfX18wX19fID0gdXJsRXNjYXBlKHJlcXVpcmUoXCIuLi9pbWFnZXMvZ3JlZW4tYXBwbGVzLmpwZ1wiKSk7XG5cbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNUI3ODk0O1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUXVpY2tzYW5kXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDVmcjtcXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcXCJoZWFkZXIgaGVhZGVyXFxcIiBcXFwiaW1hZ2UgaW1hZ2VcXFwiIFxcXCJhc2lkZSBtYWluXFxcIjtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYXV0bzsgfVxcblxcbmgxIHtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiU3VscGh1ciBQb2ludFxcXCIsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDUwcHg7XFxuICBtYXJnaW46IDAlO1xcbiAgcGFkZGluZzogMC41JSAwLjclIDAlO1xcbiAgd2lkdGg6IDcwJTsgfVxcblxcbmgyIHtcXG4gIGNvbG9yOiAjODRDOEE0O1xcbiAgbWFyZ2luOiAxMHB4IDBweCAxMHB4IDBweDsgfVxcblxcbmgzIHtcXG4gIGNvbG9yOiAjMzU5NTY3O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgaGVpZ2h0OiAxNyU7XFxuICBtYXJnaW46IDVweCA1cHggMTBweCAwcHg7XFxuICB0cmFuc2l0aW9uOiAuOHMgZWFzZTsgfVxcblxcbmg0IHtcXG4gIGNvbG9yOiAjMzU5NTY3O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0M0RUI2NztcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gIG1hcmdpbjogMTBweCAwcHggMHB4IDBweDtcXG4gIHBhZGRpbmc6IDFweCA0cHggMXB4IDRweDtcXG4gIHdpZHRoOiBtYXgtY29udGVudDsgfVxcblxcbi8qIEhFQURFUiAqL1xcbmhlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGdyaWQtYXJlYTogaGVhZGVyO1xcbiAgcGFkZGluZzogMCUgMCU7XFxuICB3aWR0aDogMTAwJTsgfVxcblxcbnNwYW4ge1xcbiAgY29sb3I6ICNDNEVCNjc7XFxuICBmb250LXdlaWdodDogNDAwOyB9XFxuXFxuLmhlYWRlci1hcHBsZS1pY29uIHtcXG4gIGhlaWdodDogNDBweDtcXG4gIG1hcmdpbi1sZWZ0OiA1cHg7XFxuICB3aWR0aDogMzVweDsgfVxcblxcbiNzZWFyY2gge1xcbiAgYm9yZGVyLXJhZGl1czogMTVweCAxNXB4IDE1cHggMTVweDtcXG4gIGJvcmRlcjogM3B4IG91dHNldCAjQzRFQjY3O1xcbiAgYm94LXNoYWRvdzogMHB4IDBweCA3cHggMHB4ICM0NzVkNzQ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUXVpY2tzYW5kXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgbWFyZ2luOiAxLjIlIDAuNSUgMS4yJSAwJTtcXG4gIHdpZHRoOiAxMDAlOyB9XFxuXFxuI3NlYXJjaC1pbnB1dCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjZkY2NhO1xcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIGxlZnQgdG9wLCBsZWZ0IGJvdHRvbSwgY29sb3Itc3RvcCgwLCB3aGl0ZSksIGNvbG9yLXN0b3AoMSwgI2UxZTFlMSkpO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweCAwcHggMHB4IDEwcHg7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3gtc2hhZG93OiBpbnNldCAtM3B4IC0xcHggMjBweCAxcHggIzVjNzg5NDtcXG4gIGNvbG9yOiAjNUI3ODk0O1xcbiAgZm9udC1mYW1pbHk6IFxcXCJRdWlja3NhbmRcXFwiLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiA0MnB4O1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIHBhZGRpbmc6IDAlIDIlIDAlIDAlO1xcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XFxuICB0cmFuc2l0aW9uOiAuOHMgZWFzZTtcXG4gIHdpZHRoOiAxMDAlOyB9XFxuXFxuI3NlYXJjaC1pbnB1dDpob3ZlciB7XFxuICBib3gtc2hhZG93OiBpbnNldCAwcHggMHB4IDBweCAwcHggd2hpdGU7XFxuICB0cmFuc2l0aW9uOiAuOHMgZWFzZTsgfVxcblxcbiNzZWFyY2gtaW5wdXQ6Zm9jdXMge1xcbiAgYm94LXNoYWRvdzogaW5zZXQgMHB4IDBweCAwcHggMHB4IHdoaXRlOyB9XFxuXFxuI3NlYXJjaC1pbnB1dDo6cGxhY2Vob2xkZXIge1xcbiAgY29sb3I6ICM1Qjc4OTQ7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICB0ZXh0LWFsaWduOiByaWdodDtcXG4gIHRleHQtc2hhZG93OiBub25lOyB9XFxuXFxuI3NlYXJjaC1pbnB1dDpmb2N1czo6cGxhY2Vob2xkZXIge1xcbiAgZm9udC1zaXplOiAwcHg7XFxuICB0cmFuc2l0aW9uOiAuOHMgZWFzZTsgfVxcblxcbi5zZWFyY2gtbGFiZWwge1xcbiAgZGlzcGxheTogbm9uZTsgfVxcblxcbi5zZWFyY2gtYnRuIHtcXG4gIGJvcmRlci1sZWZ0OiAzcHggb3V0c2V0ICNDNEVCNjc7XFxuICBib3JkZXItcmFkaXVzOiAwcHggMTVweCAxNXB4IDBweDtcXG4gIHBhZGRpbmc6IDElOyB9XFxuXFxuLm5hdi1idG4ge1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQ6ICM1Qjc4OTQgbm8tcmVwZWF0O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBmb250LXNpemU6IDBweDtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIG1hcmdpbjogMCU7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHRyYW5zaXRpb246IC40cyBlYXNlO1xcbiAgd2lkdGg6IDE1JTsgfVxcblxcbi5uYXYtYnRuOmhvdmVyIHtcXG4gIGNvbG9yOiAjQzRFQjY3O1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgdGV4dC1zaGFkb3c6IDBweCAycHggNHB4IGJsYWNrO1xcbiAgdHJhbnNpdGlvbjogLjRzIGVhc2U7IH1cXG5cXG4ubmF2LWJ0biBpbWcge1xcbiAgbWF4LWhlaWdodDogNDBweDtcXG4gIG1heC13aWR0aDogNDBweDtcXG4gIHBhZGRpbmc6IDJweCAwcHg7IH1cXG5cXG4uc2F2ZWQtaW5ncmVkaWVudHMtYnRuIHtcXG4gIGJvcmRlci1sZWZ0OiAzcHggc29saWQgI0M0RUI2NzsgfVxcblxcbi5pbmctcGFuLWJ0biB7XFxuICBtYXJnaW46IDElIDAlO1xcbiAgcGFkZGluZzogMXB4IDZweCA1cHggMHB4OyB9XFxuXFxuLyogQkFOTkVSIElNQUdFKi9cXG4uYmFubmVyLWltYWdlIHtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChyZ2JhKDAsIDAsIDAsIDAuNSksIHJnYmEoMCwgMCwgMCwgMC41KSksIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX19fMF9fXyArIFwiKTtcXG4gIGdyaWQtYXJlYTogaW1hZ2U7XFxuICBoZWlnaHQ6IDE1MHB4O1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHdpZHRoOiAxMDAlOyB9XFxuXFxuLm15LXJlY2lwZXMtYmFubmVyLFxcbi53ZWxjb21lLW1zZyB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB3aWR0aDogOTUlOyB9XFxuXFxuLm15LXJlY2lwZXMtYmFubmVyIGgxLFxcbi53ZWxjb21lLW1zZyBoMSB7XFxuICBjb2xvcjogd2hpdGU7XFxuICB3aWR0aDogMTAwJTsgfVxcblxcbi5teS1yZWNpcGVzLWJhbm5lciB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgbWFyZ2luLXRvcDogMjVweDsgfVxcblxcbi53ZWxjb21lLW1zZyB7XFxuICBtYXJnaW4tdG9wOiA1MHB4OyB9XFxuXFxuLyogRklMVEVSIFNJREVCQVIgKi9cXG5hc2lkZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGhlaWdodDogYXV0bztcXG4gIHRleHQtYWxpZ246IGNlbnRlcjsgfVxcblxcbi53cmFwIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB3aWR0aDogMjAwcHg7IH1cXG5cXG51bCB7XFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgcGFkZGluZy1sZWZ0OiAzNXB4OyB9XFxuXFxubGkge1xcbiAgbWFyZ2luOiAycHg7IH1cXG5cXG4vKiBSRUNJUEUgQ0FSRCBTRUNUSU9OICovXFxubWFpbiB7XFxuICBncmlkLWFyZWE6IG1haW47XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGZsZXgtd3JhcDogd3JhcDsgfVxcblxcbi5yZWNpcGUtY2FyZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkICNDNEVCNjc7XFxuICBib3JkZXItcmFkaXVzOiA3cHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBoZWlnaHQ6IDI3MHB4O1xcbiAgbWFyZ2luOiAyMHB4O1xcbiAgcGFkZGluZzogMTVweDtcXG4gIHdpZHRoOiAyNTBweDsgfVxcblxcbi5yZWNpcGUtY2FyZDpob3ZlciAuY2FyZC1waG90by1wcmV2aWV3IHtcXG4gIG9wYWNpdHk6IDUwJTtcXG4gIHRyYW5zaXRpb246IC44cyBlYXNlOyB9XFxuXFxuLnJlY2lwZS1jYXJkOmhvdmVyIC50ZXh0IHtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIG9wYWNpdHk6IDEwMCU7XFxuICB0cmFuc2l0aW9uOiAuNXMgZWFzZTtcXG4gIHdpZHRoOiAxMDAlOyB9XFxuXFxuLnJlY2lwZS1jYXJkOmhvdmVyIGgzIHtcXG4gIHRleHQtc2hhZG93OiAwcHggMHB4IDRweCAjQzRFQjY3O1xcbiAgdHJhbnNpdGlvbjogLjhzIGVhc2U7IH1cXG5cXG4uY2FyZC1hcHBsZS1pY29uIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGZsb2F0OiByaWdodDtcXG4gIGhlaWdodDogNTBweDtcXG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xcbiAgd2lkdGg6IDQ1cHg7IH1cXG5cXG4uY2FyZC1waG90by1wcmV2aWV3IHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IDUwJSA1MCU7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIGJvcmRlci1yYWRpdXM6IDdweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGhlaWdodDogMTMwcHg7XFxuICB0cmFuc2l0aW9uOiAuOHMgZWFzZTtcXG4gIHdpZHRoOiAxMDAlOyB9XFxuXFxuLmNhcmQtcGhvdG8tY29udGFpbmVyIHtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgaGVpZ2h0OiAxMzBweDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlOyB9XFxuXFxuLnRleHQge1xcbiAgYmFja2dyb3VuZDogIzM1OTU2NztcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBmb250LXNpemU6IDBweDtcXG4gIG9wYWNpdHk6IDAlO1xcbiAgcGFkZGluZzogMCU7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB3aWR0aDogMCU7XFxuICB0cmFuc2l0aW9uOiAuNXMgZWFzZTsgfVxcblxcbi8qIEJVVFRPTlMgKi9cXG4uc2hvdy1wYW50cnktcmVjaXBlcy1idG4sXFxuLnNob3ctYWxsLWJ0bixcXG4uZmlsdGVyLWJ0biB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzU5NTY3O1xcbiAgYm9yZGVyOiAwO1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJRdWlja3NhbmRcXFwiLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAxMnB0O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBwYWRkaW5nOiA1cHggMTBweCA1cHggMTBweDsgfVxcblxcbi5zaG93LXBhbnRyeS1yZWNpcGVzLWJ0biB7XFxuICBtYXJnaW4tdG9wOiAxMHB4OyB9XFxuXFxuLnNob3ctYWxsLWJ0biB7XFxuICBoZWlnaHQ6IDQwcHg7XFxuICBtYXJnaW4tdG9wOiAyMHB4O1xcbiAgd2lkdGg6IDIwMHB4OyB9XFxuXFxuLmZpbHRlci1idG46aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzg0QzhBNDsgfVxcblxcbi8qIFBBTlRSWSBMSVNUICovXFxuLmRyb3AtbWVudSB7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0RBRTRFRTtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBoZWlnaHQ6IDYwMHB4O1xcbiAgbWFyZ2luLWxlZnQ6IDgxJTtcXG4gIG1hcmdpbi10b3A6IDkycHg7XFxuICBvdmVyZmxvdzogc2Nyb2xsO1xcbiAgcGFkZGluZzogMTJweDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHdpZHRoOiAyNTBweDtcXG4gIHotaW5kZXg6IDM7IH1cXG5cXG4uZHJvcC1tZW51IGgyIHtcXG4gIGNvbG9yOiAjMzU5NTY3O1xcbiAgbWFyZ2luOiAwcHg7IH1cXG5cXG4ucGFudHJ5LWxpc3Qge1xcbiAgY29sb3I6ICMwMDAwMDA7XFxuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XFxuICB0ZXh0LWFsaWduOiBsZWZ0OyB9XFxuXFxuLyogUkVDSVBFIElOU1RSVUNUSU9OUyAqL1xcbi5yZWNpcGUtaW5zdHJ1Y3Rpb25zIHtcXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xcbiAgYm9yZGVyOiAzcHggc29saWQgI0M0RUI2NztcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBib3gtc2hhZG93OiAxcHggMXB4IDExNXB4IGJsYWNrO1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIGhlaWdodDogNzAlO1xcbiAgbWFyZ2luOiAwO1xcbiAgb3ZlcmZsb3cteDogc2Nyb2xsO1xcbiAgcGFkZGluZzogMSUgMSUgMSUgMSU7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICByaWdodDogMTUlO1xcbiAgdG9wOiAxNSU7XFxuICB3aWR0aDogNzAlO1xcbiAgei1pbmRleDogMTAwMDsgfVxcblxcbiNleGl0LXJlY2lwZS1idG4ge1xcbiAgYmFja2dyb3VuZDogd2hpdGU7XFxuICBib3JkZXI6IDJweCBkb3VibGUgIzM1OTU2NztcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGNvbG9yOiAjMzU5NTY3O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIG1hcmdpbjogLTQlIC0zJSAyJSAtMSU7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0cmFuc2l0aW9uOiAuM3MgZWFzZTsgfVxcblxcbiNleGl0LXJlY2lwZS1idG46aG92ZXIge1xcbiAgYmFja2dyb3VuZDogI0M0RUI2NztcXG4gIHRyYW5zaXRpb246IC4zcyBlYXNlOyB9XFxuXFxuI3JlY2lwZS10aXRsZSB7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIGJvcmRlci1yYWRpdXM6IDdweCA3cHggMHB4IDBweDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtc2l6ZTogMzBweDtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDUlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgdGV4dC1zaGFkb3c6IDBweCAwcHggNnB4IGJsYWNrOyB9XFxuXFxuLnJlY2lwZS1pbnN0cnVjdGlvbnMgaDQge1xcbiAgYmFja2dyb3VuZDogd2hpdGU7XFxuICBjb2xvcjogIzM1OTU2NzsgfVxcblxcbi5yZWNpcGUtaW5zdHJ1Y3Rpb25zIHAge1xcbiAgbWFyZ2luLWxlZnQ6IDIlOyB9XFxuXFxuLnJlY2lwZS1pbnN0cnVjdGlvbnMgb2wge1xcbiAgbWFyZ2luLXJpZ2h0OiAyJTsgfVxcblxcbiNvdmVybGF5IHtcXG4gIGZpbHRlcjogYWxwaGEob3BhY2l0eT01MCk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNUI3ODk0O1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgbGVmdDogMDtcXG4gIG9wYWNpdHk6IDAuNTtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgei1pbmRleDogMTAwOyB9XFxuXCIsIFwiXCJdKTtcblxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXNlU291cmNlTWFwKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuICdAbWVkaWEgJyArIGl0ZW1bMl0gKyAneycgKyBjb250ZW50ICsgJ30nO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgICB9XG4gICAgfSkuam9pbignJyk7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsICcnXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAoaSA9IDA7IGkgPCBtb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IG1vZHVsZXNbaV07IC8vIHNraXAgYWxyZWFkeSBpbXBvcnRlZCBtb2R1bGVcbiAgICAgIC8vIHRoaXMgaW1wbGVtZW50YXRpb24gaXMgbm90IDEwMCUgcGVyZmVjdCBmb3Igd2VpcmQgbWVkaWEgcXVlcnkgY29tYmluYXRpb25zXG4gICAgICAvLyB3aGVuIGEgbW9kdWxlIGlzIGltcG9ydGVkIG11bHRpcGxlIHRpbWVzIHdpdGggZGlmZmVyZW50IG1lZGlhIHF1ZXJpZXMuXG4gICAgICAvLyBJIGhvcGUgdGhpcyB3aWxsIG5ldmVyIG9jY3VyIChIZXkgdGhpcyB3YXkgd2UgaGF2ZSBzbWFsbGVyIGJ1bmRsZXMpXG5cbiAgICAgIGlmIChpdGVtWzBdID09IG51bGwgfHwgIWFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgaWYgKG1lZGlhUXVlcnkgJiYgIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgICAgaXRlbVsyXSA9ICcoJyArIGl0ZW1bMl0gKyAnKSBhbmQgKCcgKyBtZWRpYVF1ZXJ5ICsgJyknO1xuICAgICAgICB9XG5cbiAgICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJztcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gJy8qIyBzb3VyY2VVUkw9JyArIGNzc01hcHBpbmcuc291cmNlUm9vdCArIHNvdXJjZSArICcgKi8nO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn0gLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuXG5cbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuICB2YXIgZGF0YSA9ICdzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCwnICsgYmFzZTY0O1xuICByZXR1cm4gJy8qIyAnICsgZGF0YSArICcgKi8nO1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGVzY2FwZSh1cmwsIG5lZWRRdW90ZXMpIHtcbiAgaWYgKHR5cGVvZiB1cmwgIT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfSAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXS8udGVzdCh1cmwpIHx8IG5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gJ1wiJyArIHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csICdcXFxcbicpICsgJ1wiJztcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIi8qXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5cbnZhciBzdHlsZXNJbkRvbSA9IHt9O1xuXG52YXJcdG1lbW9pemUgPSBmdW5jdGlvbiAoZm4pIHtcblx0dmFyIG1lbW87XG5cblx0cmV0dXJuIGZ1bmN0aW9uICgpIHtcblx0XHRpZiAodHlwZW9mIG1lbW8gPT09IFwidW5kZWZpbmVkXCIpIG1lbW8gPSBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuXHRcdHJldHVybiBtZW1vO1xuXHR9O1xufTtcblxudmFyIGlzT2xkSUUgPSBtZW1vaXplKGZ1bmN0aW9uICgpIHtcblx0Ly8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3Ncblx0Ly8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuXHQvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG5cdC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuXHQvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcblx0cmV0dXJuIHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iO1xufSk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiAodGFyZ2V0LCBwYXJlbnQpIHtcbiAgaWYgKHBhcmVudCl7XG4gICAgcmV0dXJuIHBhcmVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG4gIH1cbiAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcbn07XG5cbnZhciBnZXRFbGVtZW50ID0gKGZ1bmN0aW9uIChmbikge1xuXHR2YXIgbWVtbyA9IHt9O1xuXG5cdHJldHVybiBmdW5jdGlvbih0YXJnZXQsIHBhcmVudCkge1xuICAgICAgICAgICAgICAgIC8vIElmIHBhc3NpbmcgZnVuY3Rpb24gaW4gb3B0aW9ucywgdGhlbiB1c2UgaXQgZm9yIHJlc29sdmUgXCJoZWFkXCIgZWxlbWVudC5cbiAgICAgICAgICAgICAgICAvLyBVc2VmdWwgZm9yIFNoYWRvdyBSb290IHN0eWxlIGkuZVxuICAgICAgICAgICAgICAgIC8vIHtcbiAgICAgICAgICAgICAgICAvLyAgIGluc2VydEludG86IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZm9vXCIpLnNoYWRvd1Jvb3QgfVxuICAgICAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHRhcmdldCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRhcmdldCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuXHRcdFx0dmFyIHN0eWxlVGFyZ2V0ID0gZ2V0VGFyZ2V0LmNhbGwodGhpcywgdGFyZ2V0LCBwYXJlbnQpO1xuXHRcdFx0Ly8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblx0XHRcdGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHQvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuXHRcdFx0XHRcdC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG5cdFx0XHRcdFx0c3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcblx0XHRcdFx0fSBjYXRjaChlKSB7XG5cdFx0XHRcdFx0c3R5bGVUYXJnZXQgPSBudWxsO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcblx0XHR9XG5cdFx0cmV0dXJuIG1lbW9bdGFyZ2V0XVxuXHR9O1xufSkoKTtcblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXJcdHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xudmFyXHRzdHlsZXNJbnNlcnRlZEF0VG9wID0gW107XG5cbnZhclx0Zml4VXJscyA9IHJlcXVpcmUoXCIuL3VybHNcIik7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obGlzdCwgb3B0aW9ucykge1xuXHRpZiAodHlwZW9mIERFQlVHICE9PSBcInVuZGVmaW5lZFwiICYmIERFQlVHKSB7XG5cdFx0aWYgKHR5cGVvZiBkb2N1bWVudCAhPT0gXCJvYmplY3RcIikgdGhyb3cgbmV3IEVycm9yKFwiVGhlIHN0eWxlLWxvYWRlciBjYW5ub3QgYmUgdXNlZCBpbiBhIG5vbi1icm93c2VyIGVudmlyb25tZW50XCIpO1xuXHR9XG5cblx0b3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cblx0b3B0aW9ucy5hdHRycyA9IHR5cGVvZiBvcHRpb25zLmF0dHJzID09PSBcIm9iamVjdFwiID8gb3B0aW9ucy5hdHRycyA6IHt9O1xuXG5cdC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuXHQvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cdGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSBcImJvb2xlYW5cIikgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG5cblx0Ly8gQnkgZGVmYXVsdCwgYWRkIDxzdHlsZT4gdGFncyB0byB0aGUgPGhlYWQ+IGVsZW1lbnRcbiAgICAgICAgaWYgKCFvcHRpb25zLmluc2VydEludG8pIG9wdGlvbnMuaW5zZXJ0SW50byA9IFwiaGVhZFwiO1xuXG5cdC8vIEJ5IGRlZmF1bHQsIGFkZCA8c3R5bGU+IHRhZ3MgdG8gdGhlIGJvdHRvbSBvZiB0aGUgdGFyZ2V0XG5cdGlmICghb3B0aW9ucy5pbnNlcnRBdCkgb3B0aW9ucy5pbnNlcnRBdCA9IFwiYm90dG9tXCI7XG5cblx0dmFyIHN0eWxlcyA9IGxpc3RUb1N0eWxlcyhsaXN0LCBvcHRpb25zKTtcblxuXHRhZGRTdHlsZXNUb0RvbShzdHlsZXMsIG9wdGlvbnMpO1xuXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGUgKG5ld0xpc3QpIHtcblx0XHR2YXIgbWF5UmVtb3ZlID0gW107XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcblxuXHRcdFx0ZG9tU3R5bGUucmVmcy0tO1xuXHRcdFx0bWF5UmVtb3ZlLnB1c2goZG9tU3R5bGUpO1xuXHRcdH1cblxuXHRcdGlmKG5ld0xpc3QpIHtcblx0XHRcdHZhciBuZXdTdHlsZXMgPSBsaXN0VG9TdHlsZXMobmV3TGlzdCwgb3B0aW9ucyk7XG5cdFx0XHRhZGRTdHlsZXNUb0RvbShuZXdTdHlsZXMsIG9wdGlvbnMpO1xuXHRcdH1cblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgbWF5UmVtb3ZlLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBtYXlSZW1vdmVbaV07XG5cblx0XHRcdGlmKGRvbVN0eWxlLnJlZnMgPT09IDApIHtcblx0XHRcdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykgZG9tU3R5bGUucGFydHNbal0oKTtcblxuXHRcdFx0XHRkZWxldGUgc3R5bGVzSW5Eb21bZG9tU3R5bGUuaWRdO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcbn07XG5cbmZ1bmN0aW9uIGFkZFN0eWxlc1RvRG9tIChzdHlsZXMsIG9wdGlvbnMpIHtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcblx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcblxuXHRcdGlmKGRvbVN0eWxlKSB7XG5cdFx0XHRkb21TdHlsZS5yZWZzKys7XG5cblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRkb21TdHlsZS5wYXJ0c1tqXShpdGVtLnBhcnRzW2pdKTtcblx0XHRcdH1cblxuXHRcdFx0Zm9yKDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0ZG9tU3R5bGUucGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdHZhciBwYXJ0cyA9IFtdO1xuXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRwYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcblx0XHRcdH1cblxuXHRcdFx0c3R5bGVzSW5Eb21baXRlbS5pZF0gPSB7aWQ6IGl0ZW0uaWQsIHJlZnM6IDEsIHBhcnRzOiBwYXJ0c307XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGxpc3RUb1N0eWxlcyAobGlzdCwgb3B0aW9ucykge1xuXHR2YXIgc3R5bGVzID0gW107XG5cdHZhciBuZXdTdHlsZXMgPSB7fTtcblxuXHRmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgaXRlbSA9IGxpc3RbaV07XG5cdFx0dmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG5cdFx0dmFyIGNzcyA9IGl0ZW1bMV07XG5cdFx0dmFyIG1lZGlhID0gaXRlbVsyXTtcblx0XHR2YXIgc291cmNlTWFwID0gaXRlbVszXTtcblx0XHR2YXIgcGFydCA9IHtjc3M6IGNzcywgbWVkaWE6IG1lZGlhLCBzb3VyY2VNYXA6IHNvdXJjZU1hcH07XG5cblx0XHRpZighbmV3U3R5bGVzW2lkXSkgc3R5bGVzLnB1c2gobmV3U3R5bGVzW2lkXSA9IHtpZDogaWQsIHBhcnRzOiBbcGFydF19KTtcblx0XHRlbHNlIG5ld1N0eWxlc1tpZF0ucGFydHMucHVzaChwYXJ0KTtcblx0fVxuXG5cdHJldHVybiBzdHlsZXM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudCAob3B0aW9ucywgc3R5bGUpIHtcblx0dmFyIHRhcmdldCA9IGdldEVsZW1lbnQob3B0aW9ucy5pbnNlcnRJbnRvKVxuXG5cdGlmICghdGFyZ2V0KSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnRJbnRvJyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG5cdH1cblxuXHR2YXIgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AgPSBzdHlsZXNJbnNlcnRlZEF0VG9wW3N0eWxlc0luc2VydGVkQXRUb3AubGVuZ3RoIC0gMV07XG5cblx0aWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwidG9wXCIpIHtcblx0XHRpZiAoIWxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wKSB7XG5cdFx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCB0YXJnZXQuZmlyc3RDaGlsZCk7XG5cdFx0fSBlbHNlIGlmIChsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZykge1xuXHRcdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuXHRcdH1cblx0XHRzdHlsZXNJbnNlcnRlZEF0VG9wLnB1c2goc3R5bGUpO1xuXHR9IGVsc2UgaWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwiYm90dG9tXCIpIHtcblx0XHR0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuXHR9IGVsc2UgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydEF0ID09PSBcIm9iamVjdFwiICYmIG9wdGlvbnMuaW5zZXJ0QXQuYmVmb3JlKSB7XG5cdFx0dmFyIG5leHRTaWJsaW5nID0gZ2V0RWxlbWVudChvcHRpb25zLmluc2VydEF0LmJlZm9yZSwgdGFyZ2V0KTtcblx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCBuZXh0U2libGluZyk7XG5cdH0gZWxzZSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiW1N0eWxlIExvYWRlcl1cXG5cXG4gSW52YWxpZCB2YWx1ZSBmb3IgcGFyYW1ldGVyICdpbnNlcnRBdCcgKCdvcHRpb25zLmluc2VydEF0JykgZm91bmQuXFxuIE11c3QgYmUgJ3RvcCcsICdib3R0b20nLCBvciBPYmplY3QuXFxuIChodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlciNpbnNlcnRhdClcXG5cIik7XG5cdH1cbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50IChzdHlsZSkge1xuXHRpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkgcmV0dXJuIGZhbHNlO1xuXHRzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcblxuXHR2YXIgaWR4ID0gc3R5bGVzSW5zZXJ0ZWRBdFRvcC5pbmRleE9mKHN0eWxlKTtcblx0aWYoaWR4ID49IDApIHtcblx0XHRzdHlsZXNJbnNlcnRlZEF0VG9wLnNwbGljZShpZHgsIDEpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVN0eWxlRWxlbWVudCAob3B0aW9ucykge1xuXHR2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG5cblx0aWYob3B0aW9ucy5hdHRycy50eXBlID09PSB1bmRlZmluZWQpIHtcblx0XHRvcHRpb25zLmF0dHJzLnR5cGUgPSBcInRleHQvY3NzXCI7XG5cdH1cblxuXHRpZihvcHRpb25zLmF0dHJzLm5vbmNlID09PSB1bmRlZmluZWQpIHtcblx0XHR2YXIgbm9uY2UgPSBnZXROb25jZSgpO1xuXHRcdGlmIChub25jZSkge1xuXHRcdFx0b3B0aW9ucy5hdHRycy5ub25jZSA9IG5vbmNlO1xuXHRcdH1cblx0fVxuXG5cdGFkZEF0dHJzKHN0eWxlLCBvcHRpb25zLmF0dHJzKTtcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIHN0eWxlKTtcblxuXHRyZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUxpbmtFbGVtZW50IChvcHRpb25zKSB7XG5cdHZhciBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpbmtcIik7XG5cblx0aWYob3B0aW9ucy5hdHRycy50eXBlID09PSB1bmRlZmluZWQpIHtcblx0XHRvcHRpb25zLmF0dHJzLnR5cGUgPSBcInRleHQvY3NzXCI7XG5cdH1cblx0b3B0aW9ucy5hdHRycy5yZWwgPSBcInN0eWxlc2hlZXRcIjtcblxuXHRhZGRBdHRycyhsaW5rLCBvcHRpb25zLmF0dHJzKTtcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIGxpbmspO1xuXG5cdHJldHVybiBsaW5rO1xufVxuXG5mdW5jdGlvbiBhZGRBdHRycyAoZWwsIGF0dHJzKSB7XG5cdE9iamVjdC5rZXlzKGF0dHJzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcblx0XHRlbC5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyc1trZXldKTtcblx0fSk7XG59XG5cbmZ1bmN0aW9uIGdldE5vbmNlKCkge1xuXHRpZiAodHlwZW9mIF9fd2VicGFja19ub25jZV9fID09PSAndW5kZWZpbmVkJykge1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0cmV0dXJuIF9fd2VicGFja19ub25jZV9fO1xufVxuXG5mdW5jdGlvbiBhZGRTdHlsZSAob2JqLCBvcHRpb25zKSB7XG5cdHZhciBzdHlsZSwgdXBkYXRlLCByZW1vdmUsIHJlc3VsdDtcblxuXHQvLyBJZiBhIHRyYW5zZm9ybSBmdW5jdGlvbiB3YXMgZGVmaW5lZCwgcnVuIGl0IG9uIHRoZSBjc3Ncblx0aWYgKG9wdGlvbnMudHJhbnNmb3JtICYmIG9iai5jc3MpIHtcblx0ICAgIHJlc3VsdCA9IHR5cGVvZiBvcHRpb25zLnRyYW5zZm9ybSA9PT0gJ2Z1bmN0aW9uJ1xuXHRcdCA/IG9wdGlvbnMudHJhbnNmb3JtKG9iai5jc3MpIFxuXHRcdCA6IG9wdGlvbnMudHJhbnNmb3JtLmRlZmF1bHQob2JqLmNzcyk7XG5cblx0ICAgIGlmIChyZXN1bHQpIHtcblx0ICAgIFx0Ly8gSWYgdHJhbnNmb3JtIHJldHVybnMgYSB2YWx1ZSwgdXNlIHRoYXQgaW5zdGVhZCBvZiB0aGUgb3JpZ2luYWwgY3NzLlxuXHQgICAgXHQvLyBUaGlzIGFsbG93cyBydW5uaW5nIHJ1bnRpbWUgdHJhbnNmb3JtYXRpb25zIG9uIHRoZSBjc3MuXG5cdCAgICBcdG9iai5jc3MgPSByZXN1bHQ7XG5cdCAgICB9IGVsc2Uge1xuXHQgICAgXHQvLyBJZiB0aGUgdHJhbnNmb3JtIGZ1bmN0aW9uIHJldHVybnMgYSBmYWxzeSB2YWx1ZSwgZG9uJ3QgYWRkIHRoaXMgY3NzLlxuXHQgICAgXHQvLyBUaGlzIGFsbG93cyBjb25kaXRpb25hbCBsb2FkaW5nIG9mIGNzc1xuXHQgICAgXHRyZXR1cm4gZnVuY3Rpb24oKSB7XG5cdCAgICBcdFx0Ly8gbm9vcFxuXHQgICAgXHR9O1xuXHQgICAgfVxuXHR9XG5cblx0aWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG5cdFx0dmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG5cblx0XHRzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcblxuXHRcdHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuXHRcdHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG5cblx0fSBlbHNlIGlmIChcblx0XHRvYmouc291cmNlTWFwICYmXG5cdFx0dHlwZW9mIFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIFVSTC5jcmVhdGVPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBVUkwucmV2b2tlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgQmxvYiA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIlxuXHQpIHtcblx0XHRzdHlsZSA9IGNyZWF0ZUxpbmtFbGVtZW50KG9wdGlvbnMpO1xuXHRcdHVwZGF0ZSA9IHVwZGF0ZUxpbmsuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcblxuXHRcdFx0aWYoc3R5bGUuaHJlZikgVVJMLnJldm9rZU9iamVjdFVSTChzdHlsZS5ocmVmKTtcblx0XHR9O1xuXHR9IGVsc2Uge1xuXHRcdHN0eWxlID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuXHRcdHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSk7XG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcblx0XHR9O1xuXHR9XG5cblx0dXBkYXRlKG9iaik7XG5cblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlIChuZXdPYmopIHtcblx0XHRpZiAobmV3T2JqKSB7XG5cdFx0XHRpZiAoXG5cdFx0XHRcdG5ld09iai5jc3MgPT09IG9iai5jc3MgJiZcblx0XHRcdFx0bmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiZcblx0XHRcdFx0bmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcFxuXHRcdFx0KSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0dXBkYXRlKG9iaiA9IG5ld09iaik7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJlbW92ZSgpO1xuXHRcdH1cblx0fTtcbn1cblxudmFyIHJlcGxhY2VUZXh0ID0gKGZ1bmN0aW9uICgpIHtcblx0dmFyIHRleHRTdG9yZSA9IFtdO1xuXG5cdHJldHVybiBmdW5jdGlvbiAoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG5cdFx0dGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuXG5cdFx0cmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG5cdH07XG59KSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnIChzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG5cdHZhciBjc3MgPSByZW1vdmUgPyBcIlwiIDogb2JqLmNzcztcblxuXHRpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuXHRcdHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuXHR9IGVsc2Uge1xuXHRcdHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcblx0XHR2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cblx0XHRpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcblxuXHRcdGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuXHRcdFx0c3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0c3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcgKHN0eWxlLCBvYmopIHtcblx0dmFyIGNzcyA9IG9iai5jc3M7XG5cdHZhciBtZWRpYSA9IG9iai5tZWRpYTtcblxuXHRpZihtZWRpYSkge1xuXHRcdHN0eWxlLnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsIG1lZGlhKVxuXHR9XG5cblx0aWYoc3R5bGUuc3R5bGVTaGVldCkge1xuXHRcdHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcblx0fSBlbHNlIHtcblx0XHR3aGlsZShzdHlsZS5maXJzdENoaWxkKSB7XG5cdFx0XHRzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcblx0XHR9XG5cblx0XHRzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcblx0fVxufVxuXG5mdW5jdGlvbiB1cGRhdGVMaW5rIChsaW5rLCBvcHRpb25zLCBvYmopIHtcblx0dmFyIGNzcyA9IG9iai5jc3M7XG5cdHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG5cdC8qXG5cdFx0SWYgY29udmVydFRvQWJzb2x1dGVVcmxzIGlzbid0IGRlZmluZWQsIGJ1dCBzb3VyY2VtYXBzIGFyZSBlbmFibGVkXG5cdFx0YW5kIHRoZXJlIGlzIG5vIHB1YmxpY1BhdGggZGVmaW5lZCB0aGVuIGxldHMgdHVybiBjb252ZXJ0VG9BYnNvbHV0ZVVybHNcblx0XHRvbiBieSBkZWZhdWx0LiAgT3RoZXJ3aXNlIGRlZmF1bHQgdG8gdGhlIGNvbnZlcnRUb0Fic29sdXRlVXJscyBvcHRpb25cblx0XHRkaXJlY3RseVxuXHQqL1xuXHR2YXIgYXV0b0ZpeFVybHMgPSBvcHRpb25zLmNvbnZlcnRUb0Fic29sdXRlVXJscyA9PT0gdW5kZWZpbmVkICYmIHNvdXJjZU1hcDtcblxuXHRpZiAob3B0aW9ucy5jb252ZXJ0VG9BYnNvbHV0ZVVybHMgfHwgYXV0b0ZpeFVybHMpIHtcblx0XHRjc3MgPSBmaXhVcmxzKGNzcyk7XG5cdH1cblxuXHRpZiAoc291cmNlTWFwKSB7XG5cdFx0Ly8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjY2MDM4NzVcblx0XHRjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiICsgYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSArIFwiICovXCI7XG5cdH1cblxuXHR2YXIgYmxvYiA9IG5ldyBCbG9iKFtjc3NdLCB7IHR5cGU6IFwidGV4dC9jc3NcIiB9KTtcblxuXHR2YXIgb2xkU3JjID0gbGluay5ocmVmO1xuXG5cdGxpbmsuaHJlZiA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XG5cblx0aWYob2xkU3JjKSBVUkwucmV2b2tlT2JqZWN0VVJMKG9sZFNyYyk7XG59XG4iLCJcbi8qKlxuICogV2hlbiBzb3VyY2UgbWFwcyBhcmUgZW5hYmxlZCwgYHN0eWxlLWxvYWRlcmAgdXNlcyBhIGxpbmsgZWxlbWVudCB3aXRoIGEgZGF0YS11cmkgdG9cbiAqIGVtYmVkIHRoZSBjc3Mgb24gdGhlIHBhZ2UuIFRoaXMgYnJlYWtzIGFsbCByZWxhdGl2ZSB1cmxzIGJlY2F1c2Ugbm93IHRoZXkgYXJlIHJlbGF0aXZlIHRvIGFcbiAqIGJ1bmRsZSBpbnN0ZWFkIG9mIHRoZSBjdXJyZW50IHBhZ2UuXG4gKlxuICogT25lIHNvbHV0aW9uIGlzIHRvIG9ubHkgdXNlIGZ1bGwgdXJscywgYnV0IHRoYXQgbWF5IGJlIGltcG9zc2libGUuXG4gKlxuICogSW5zdGVhZCwgdGhpcyBmdW5jdGlvbiBcImZpeGVzXCIgdGhlIHJlbGF0aXZlIHVybHMgdG8gYmUgYWJzb2x1dGUgYWNjb3JkaW5nIHRvIHRoZSBjdXJyZW50IHBhZ2UgbG9jYXRpb24uXG4gKlxuICogQSBydWRpbWVudGFyeSB0ZXN0IHN1aXRlIGlzIGxvY2F0ZWQgYXQgYHRlc3QvZml4VXJscy5qc2AgYW5kIGNhbiBiZSBydW4gdmlhIHRoZSBgbnBtIHRlc3RgIGNvbW1hbmQuXG4gKlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzcykge1xuICAvLyBnZXQgY3VycmVudCBsb2NhdGlvblxuICB2YXIgbG9jYXRpb24gPSB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiICYmIHdpbmRvdy5sb2NhdGlvbjtcblxuICBpZiAoIWxvY2F0aW9uKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiZml4VXJscyByZXF1aXJlcyB3aW5kb3cubG9jYXRpb25cIik7XG4gIH1cblxuXHQvLyBibGFuayBvciBudWxsP1xuXHRpZiAoIWNzcyB8fCB0eXBlb2YgY3NzICE9PSBcInN0cmluZ1wiKSB7XG5cdCAgcmV0dXJuIGNzcztcbiAgfVxuXG4gIHZhciBiYXNlVXJsID0gbG9jYXRpb24ucHJvdG9jb2wgKyBcIi8vXCIgKyBsb2NhdGlvbi5ob3N0O1xuICB2YXIgY3VycmVudERpciA9IGJhc2VVcmwgKyBsb2NhdGlvbi5wYXRobmFtZS5yZXBsYWNlKC9cXC9bXlxcL10qJC8sIFwiL1wiKTtcblxuXHQvLyBjb252ZXJ0IGVhY2ggdXJsKC4uLilcblx0Lypcblx0VGhpcyByZWd1bGFyIGV4cHJlc3Npb24gaXMganVzdCBhIHdheSB0byByZWN1cnNpdmVseSBtYXRjaCBicmFja2V0cyB3aXRoaW5cblx0YSBzdHJpbmcuXG5cblx0IC91cmxcXHMqXFwoICA9IE1hdGNoIG9uIHRoZSB3b3JkIFwidXJsXCIgd2l0aCBhbnkgd2hpdGVzcGFjZSBhZnRlciBpdCBhbmQgdGhlbiBhIHBhcmVuc1xuXHQgICAoICA9IFN0YXJ0IGEgY2FwdHVyaW5nIGdyb3VwXG5cdCAgICAgKD86ICA9IFN0YXJ0IGEgbm9uLWNhcHR1cmluZyBncm91cFxuXHQgICAgICAgICBbXikoXSAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgfCAgPSBPUlxuXHQgICAgICAgICBcXCggID0gTWF0Y2ggYSBzdGFydCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgKD86ICA9IFN0YXJ0IGFub3RoZXIgbm9uLWNhcHR1cmluZyBncm91cHNcblx0ICAgICAgICAgICAgICAgICBbXikoXSsgID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgfCAgPSBPUlxuXHQgICAgICAgICAgICAgICAgIFxcKCAgPSBNYXRjaCBhIHN0YXJ0IHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgICAgIFteKShdKiAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICBcXCkgID0gTWF0Y2ggYSBlbmQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICkgID0gRW5kIEdyb3VwXG4gICAgICAgICAgICAgICpcXCkgPSBNYXRjaCBhbnl0aGluZyBhbmQgdGhlbiBhIGNsb3NlIHBhcmVuc1xuICAgICAgICAgICkgID0gQ2xvc2Ugbm9uLWNhcHR1cmluZyBncm91cFxuICAgICAgICAgICogID0gTWF0Y2ggYW55dGhpbmdcbiAgICAgICApICA9IENsb3NlIGNhcHR1cmluZyBncm91cFxuXHQgXFwpICA9IE1hdGNoIGEgY2xvc2UgcGFyZW5zXG5cblx0IC9naSAgPSBHZXQgYWxsIG1hdGNoZXMsIG5vdCB0aGUgZmlyc3QuICBCZSBjYXNlIGluc2Vuc2l0aXZlLlxuXHQgKi9cblx0dmFyIGZpeGVkQ3NzID0gY3NzLnJlcGxhY2UoL3VybFxccypcXCgoKD86W14pKF18XFwoKD86W14pKF0rfFxcKFteKShdKlxcKSkqXFwpKSopXFwpL2dpLCBmdW5jdGlvbihmdWxsTWF0Y2gsIG9yaWdVcmwpIHtcblx0XHQvLyBzdHJpcCBxdW90ZXMgKGlmIHRoZXkgZXhpc3QpXG5cdFx0dmFyIHVucXVvdGVkT3JpZ1VybCA9IG9yaWdVcmxcblx0XHRcdC50cmltKClcblx0XHRcdC5yZXBsYWNlKC9eXCIoLiopXCIkLywgZnVuY3Rpb24obywgJDEpeyByZXR1cm4gJDE7IH0pXG5cdFx0XHQucmVwbGFjZSgvXicoLiopJyQvLCBmdW5jdGlvbihvLCAkMSl7IHJldHVybiAkMTsgfSk7XG5cblx0XHQvLyBhbHJlYWR5IGEgZnVsbCB1cmw/IG5vIGNoYW5nZVxuXHRcdGlmICgvXigjfGRhdGE6fGh0dHA6XFwvXFwvfGh0dHBzOlxcL1xcL3xmaWxlOlxcL1xcL1xcL3xcXHMqJCkvaS50ZXN0KHVucXVvdGVkT3JpZ1VybCkpIHtcblx0XHQgIHJldHVybiBmdWxsTWF0Y2g7XG5cdFx0fVxuXG5cdFx0Ly8gY29udmVydCB0aGUgdXJsIHRvIGEgZnVsbCB1cmxcblx0XHR2YXIgbmV3VXJsO1xuXG5cdFx0aWYgKHVucXVvdGVkT3JpZ1VybC5pbmRleE9mKFwiLy9cIikgPT09IDApIHtcblx0XHQgIFx0Ly9UT0RPOiBzaG91bGQgd2UgYWRkIHByb3RvY29sP1xuXHRcdFx0bmV3VXJsID0gdW5xdW90ZWRPcmlnVXJsO1xuXHRcdH0gZWxzZSBpZiAodW5xdW90ZWRPcmlnVXJsLmluZGV4T2YoXCIvXCIpID09PSAwKSB7XG5cdFx0XHQvLyBwYXRoIHNob3VsZCBiZSByZWxhdGl2ZSB0byB0aGUgYmFzZSB1cmxcblx0XHRcdG5ld1VybCA9IGJhc2VVcmwgKyB1bnF1b3RlZE9yaWdVcmw7IC8vIGFscmVhZHkgc3RhcnRzIHdpdGggJy8nXG5cdFx0fSBlbHNlIHtcblx0XHRcdC8vIHBhdGggc2hvdWxkIGJlIHJlbGF0aXZlIHRvIGN1cnJlbnQgZGlyZWN0b3J5XG5cdFx0XHRuZXdVcmwgPSBjdXJyZW50RGlyICsgdW5xdW90ZWRPcmlnVXJsLnJlcGxhY2UoL15cXC5cXC8vLCBcIlwiKTsgLy8gU3RyaXAgbGVhZGluZyAnLi8nXG5cdFx0fVxuXG5cdFx0Ly8gc2VuZCBiYWNrIHRoZSBmaXhlZCB1cmwoLi4uKVxuXHRcdHJldHVybiBcInVybChcIiArIEpTT04uc3RyaW5naWZ5KG5ld1VybCkgKyBcIilcIjtcblx0fSk7XG5cblx0Ly8gc2VuZCBiYWNrIHRoZSBmaXhlZCBjc3Ncblx0cmV0dXJuIGZpeGVkQ3NzO1xufTtcbiIsImNsYXNzIFBhbnRyeSB7XG4gIGNvbnN0cnVjdG9yKCkge31cblxuICBnZXRQYW50cnlJdGVtcyh1c2VyKSB7XG4gICAgdXNlci5jb25zb2xpZGF0ZVBhbnRyeSgpO1xuICAgIHJldHVybiB1c2VyLnBhbnRyeTtcbiAgfVxuXG4gIGdldFJlY2lwZUluZ3JlZGllbnRzSW5TdG9jayh1c2VyLCByZWNpcGUpIHtcbiAgICByZXR1cm4gcmVjaXBlLmluZ3JlZGllbnRzLnJlZHVjZSgoaW5ncmVkaWVudHNNaXNzaW5nLCBpbmdyZWRpZW50Rm9yUmVjaXBlKSA9PiB7XG4gICAgICBsZXQgcGFudHJ5SW52ZW50b3J5ID0gdGhpcy5nZXRQYW50cnlJdGVtcyh1c2VyKTtcbiAgICAgIGxldCBpdGVtID0gcGFudHJ5SW52ZW50b3J5LmZpbmQoaXRlbSA9PiB7XG4gICAgICAgIHJldHVybiBpbmdyZWRpZW50Rm9yUmVjaXBlLmlkID09PSBpdGVtLmluZ3JlZGllbnQ7XG4gICAgICB9KTtcbiAgICAgIGlmICghaXRlbSB8fCBpbmdyZWRpZW50Rm9yUmVjaXBlLnF1YW50aXR5LmFtb3VudCA+IGl0ZW0uYW1vdW50KSB7XG4gICAgICAgIGxldCBhbW91bnRJblBhbnRyeSA9IChpdGVtICYmIGl0ZW0uYW1vdW50KSB8fCAwO1xuICAgICAgICBpbmdyZWRpZW50c01pc3NpbmcucHVzaCh7XG4gICAgICAgICAgaWQ6IGluZ3JlZGllbnRGb3JSZWNpcGUuaWQsXG4gICAgICAgICAgbmFtZTogaW5ncmVkaWVudEZvclJlY2lwZS5uYW1lLFxuICAgICAgICAgIHF1YW50aXR5TmVlZGVkOiBpbmdyZWRpZW50Rm9yUmVjaXBlLnF1YW50aXR5LmFtb3VudCAtIGFtb3VudEluUGFudHJ5XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGluZ3JlZGllbnRzTWlzc2luZztcbiAgICB9LCBbXSk7XG4gIH1cblxuICBnZXRNaXNzaW5nSW5ncmVkaWVudHNQcmljZShtaXNzaW5nSW5ncmVkaWVudHMsIGluZ3JlZGllbnRzRGF0YSkge1xuICAgIHJldHVybiBtaXNzaW5nSW5ncmVkaWVudHMubWFwKG1pc3NpbmdJbmdyZWRpZW50ID0+IHtcbiAgICAgIGxldCBtaXNzaW5nUXVhbnRpdHlQcmljZSA9IGluZ3JlZGllbnRzRGF0YS5yZWR1Y2UoKHRvdGFsQW1vdW50LCBpbmdyZWRpZW50KSA9PiB7XG4gICAgICAgIGlmIChtaXNzaW5nSW5ncmVkaWVudC5pZCA9PT0gaW5ncmVkaWVudC5pZCkge1xuICAgICAgICAgIHRvdGFsQW1vdW50ID0gbWlzc2luZ0luZ3JlZGllbnQucXVhbnRpdHlOZWVkZWQgKiBpbmdyZWRpZW50LmVzdGltYXRlZENvc3RJbkNlbnRzO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0b3RhbEFtb3VudDtcbiAgICAgIH0sIDApO1xuICAgICAgbWlzc2luZ0luZ3JlZGllbnQubWlzc2luZ1F1YW50aXR5UHJpY2UgPSAobWlzc2luZ1F1YW50aXR5UHJpY2UgLyAxMDApO1xuICAgICAgcmV0dXJuIG1pc3NpbmdJbmdyZWRpZW50O1xuICAgIH0pO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUGFudHJ5O1xuIiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vc3R5bGVzLnNjc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vc3R5bGVzLnNjc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL3N0eWxlcy5zY3NzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiLy9mZXRjaGluZyAzIHRpbWVzLCB0aGVuIHByb21pc2UuYWxsIHJlc29sdmVzIHJlZHVuZGFuY2llcyAtLSBzdG9yaW5nIGZldGNoZWQgZGF0YSBhcyBvYmogcHJvcGVydGllcyhhbGxEYXRhKVxuLy9yZXR1cm4gaW4gYWxsRGF0YT9cblxuLy8gaW5zdGVhZDogc3RhcnQgd2l0aCBQcm9taXNlLmFsbCwgdHdvIHRoZW5zLCBhbmQgYSBjYXRjaFxuXG5cbmZ1bmN0aW9uIGZldGNoRGF0YSgpIHtcbiAgbGV0IGluZ3JlZGllbnRzRGF0YSA9IGZldGNoKCdodHRwczovL2ZlLWFwcHMuaGVyb2t1YXBwLmNvbS9hcGkvdjEvd2hhdHMtY29va2luLzE5MTEvaW5ncmVkaWVudHMvaW5ncmVkaWVudHNEYXRhJylcbiAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICByZXR1cm4gZGF0YS5pbmdyZWRpZW50c0RhdGE7XG4gICAgfSlcbiAgICAuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKGVyci5tZXNzYWdlKSlcblxuICBsZXQgcmVjaXBlRGF0YSA9IGZldGNoKCdodHRwczovL2ZlLWFwcHMuaGVyb2t1YXBwLmNvbS9hcGkvdjEvd2hhdHMtY29va2luLzE5MTEvcmVjaXBlcy9yZWNpcGVEYXRhJylcbiAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICByZXR1cm4gZGF0YS5yZWNpcGVEYXRhO1xuICAgIH0pXG4gICAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZyhlcnIubWVzc2FnZSkpXG5cbiAgbGV0IHVzZXJEYXRhID0gZmV0Y2goJ2h0dHBzOi8vZmUtYXBwcy5oZXJva3VhcHAuY29tL2FwaS92MS93aGF0cy1jb29raW4vMTkxMS91c2Vycy93Y1VzZXJzRGF0YScpXG4gICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgcmV0dXJuIGRhdGEud2NVc2Vyc0RhdGFcbiAgICB9KVxuICAgIC5jYXRjaChlcnIgPT4gY29uc29sZS5sb2coZXJyLm1lc3NhZ2UpKVxuXG4gIHJldHVybiBQcm9taXNlLmFsbChbaW5ncmVkaWVudHNEYXRhLCByZWNpcGVEYXRhLCB1c2VyRGF0YV0pXG4gICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICBsZXQgYWxsRGF0YSA9IHt9O1xuICAgICAgYWxsRGF0YS5pbmdyZWRpZW50c0RhdGEgPSBkYXRhWzBdO1xuICAgICAgYWxsRGF0YS5yZWNpcGVEYXRhID0gZGF0YVsxXTtcbiAgICAgIGFsbERhdGEudXNlckRhdGEgPSBkYXRhWzJdO1xuICAgICAgcmV0dXJuIGFsbERhdGFcbiAgICB9KTtcbn1cbmV4cG9ydCBkZWZhdWx0IGZldGNoRGF0YTtcbiIsIm1vZHVsZS5leHBvcnRzID0gXCJpbWFnZXMvYXBwbGUtbG9nby1vdXRsaW5lLnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCJpbWFnZXMvYXBwbGUtbG9nby5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiaW1hZ2VzL2NoaWNrZW4tcGFybS5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiaW1hZ2VzL2Nvb2tib29rLnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCJpbWFnZXMvZ3JlZW4tYXBwbGVzLmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCJpbWFnZXMvcGFuY2FrZXMuanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcImltYWdlcy9zZWFyY2gucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcImltYWdlcy9zZWFzb25pbmcucG5nXCI7IiwiLy9JbWFnZSBJbXBvcnRcbmltcG9ydCAnLi9pbWFnZXMvYXBwbGUtbG9nby1vdXRsaW5lLnBuZydcbmltcG9ydCAnLi9pbWFnZXMvYXBwbGUtbG9nby5wbmcnXG5pbXBvcnQgJy4vaW1hZ2VzL2NoaWNrZW4tcGFybS5qcGcnXG5pbXBvcnQgJy4vaW1hZ2VzL2Nvb2tib29rLnBuZydcbmltcG9ydCAnLi9pbWFnZXMvZ3JlZW4tYXBwbGVzLmpwZydcbmltcG9ydCAnLi9pbWFnZXMvcGFuY2FrZXMuanBnJ1xuaW1wb3J0ICcuL2ltYWdlcy9zZWFyY2gucG5nJ1xuaW1wb3J0ICcuL2ltYWdlcy9zZWFzb25pbmcucG5nJ1xuIiwiY2xhc3MgUmVjaXBlIHtcbiAgY29uc3RydWN0b3IocmVjaXBlKSB7XG4gICAgdGhpcy5pZCA9IHJlY2lwZS5pZDtcbiAgICB0aGlzLm5hbWUgPSByZWNpcGUubmFtZTtcbiAgICB0aGlzLmltYWdlID0gcmVjaXBlLmltYWdlO1xuICAgIHRoaXMudGFncyA9IHJlY2lwZS50YWdzO1xuICAgIHRoaXMuaW5zdHJ1Y3Rpb25zID0gcmVjaXBlLmluc3RydWN0aW9ucztcbiAgICB0aGlzLmluZ3JlZGllbnRzID0gcmVjaXBlLmluZ3JlZGllbnRzO1xuICB9XG5cbiAgY2FsY3VsYXRlSW5ncmVkaWVudHNDb3N0KGluZ3JlZGllbnREYXRhKSB7XG4gICAgbGV0IHRvdGFsSW5ncmVkaWVudENvc3QgPSB0aGlzLmluZ3JlZGllbnRzLnJlZHVjZSgodG90YWxDb3N0LCBpbmdyZWRpZW50KSA9PiB7XG4gICAgICBpbmdyZWRpZW50RGF0YS5mb3JFYWNoKGRhdGEgPT4ge1xuICAgICAgICBpZiAoaW5ncmVkaWVudC5pZCA9PT0gZGF0YS5pZCkge1xuICAgICAgICAgIHRvdGFsQ29zdCArPSBpbmdyZWRpZW50LnF1YW50aXR5LmFtb3VudCAqIGRhdGEuZXN0aW1hdGVkQ29zdEluQ2VudHM7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICByZXR1cm4gdG90YWxDb3N0O1xuICAgIH0sIDApO1xuICAgIHJldHVybiArKGAke3RvdGFsSW5ncmVkaWVudENvc3QgLyAxMDB9YCk7XG4gIH1cblxuICByZXRyaWV2ZUNvb2tpbmdJbnN0cnVjdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW5zdHJ1Y3Rpb25zXG4gIH1cblxuICBmaW5kUmVjaXBlQnlUYWcocmVjaXBlRGF0YSwgc2VsZWN0ZWRUYWcpIHtcbiAgICByZXR1cm4gcmVjaXBlRGF0YS5yZWR1Y2UoKGZvdW5kUmVjaXBlcywgcmVjaXBlKSA9PiB7XG4gICAgICBpZiAocmVjaXBlLnRhZ3MuaW5jbHVkZXMoc2VsZWN0ZWRUYWcpKSB7XG4gICAgICAgIGZvdW5kUmVjaXBlcy5wdXNoKHJlY2lwZSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gZm91bmRSZWNpcGVzO1xuICAgIH0sIFtdKVxuICB9XG5cbiAgZmluZFJlY2lwZUJ5SW5ncmVkaWVudHMocmVjaXBlRGF0YSwgc2VsZWN0ZWRJbmdyZWRpZW50KSB7XG4gICAgcmV0dXJuIHJlY2lwZURhdGEucmVkdWNlKChmb3VuZFJlY2lwZXMsIHJlY2lwZSkgPT4ge1xuICAgICAgcmVjaXBlLmluZ3JlZGllbnRzLmZvckVhY2goaW5ncmVkaWVudCA9PiB7XG4gICAgICAgIGlmIChpbmdyZWRpZW50Lm5hbWUuaW5jbHVkZXMoc2VsZWN0ZWRJbmdyZWRpZW50KSkge1xuICAgICAgICAgIGZvdW5kUmVjaXBlcy5wdXNoKHJlY2lwZSk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICByZXR1cm4gZm91bmRSZWNpcGVzO1xuICAgIH0sIFtdKVxuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IFJlY2lwZTtcbiIsImltcG9ydCAnLi9jc3Mvc3R5bGVzLnNjc3MnO1xuaW1wb3J0ICcuL2luZGV4LmpzJztcbmltcG9ydCBQYW50cnkgZnJvbSAnLi9QYW50cnknO1xuaW1wb3J0IFVzZXIgZnJvbSAnLi91c2VyJztcbmltcG9ydCBSZWNpcGUgZnJvbSAnLi9yZWNpcGUnO1xuaW1wb3J0IGZldGNoRGF0YSBmcm9tICcuL2ZldGNoJztcblxubGV0IGFsbFJlY2lwZXNCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNob3ctYWxsLWJ0blwiKTtcbmxldCBmaWx0ZXJCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZpbHRlci1idG5cIik7XG5sZXQgZnVsbFJlY2lwZUluZm8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnJlY2lwZS1pbnN0cnVjdGlvbnNcIik7XG5sZXQgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJtYWluXCIpO1xubGV0IG1lbnVPcGVuID0gZmFsc2U7XG5sZXQgcGFudHJ5QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5teS1wYW50cnktYnRuXCIpO1xubGV0IHNhdmVkUmVjaXBlc0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2F2ZWQtcmVjaXBlcy1idG5cIik7XG5sZXQgc2VhcmNoQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zZWFyY2gtYnRuXCIpO1xubGV0IHNlYXJjaEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NlYXJjaFwiKTtcbmxldCBzZWFyY2hJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2VhcmNoLWlucHV0XCIpO1xubGV0IHNob3dQYW50cnlSZWNpcGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zaG93LXBhbnRyeS1yZWNpcGVzLWJ0blwiKTtcbmxldCB0YWdMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YWctbGlzdFwiKTtcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBnZXRGZXRjaERhdGEpO1xuLy8gd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsIGNyZWF0ZUNhcmRzKTtcbi8vIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCBmaW5kVGFncyk7XG4vLyB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgZ2VuZXJhdGVVc2VyKTtcbmFsbFJlY2lwZXNCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHNob3dBbGxSZWNpcGVzKTtcbmZpbHRlckJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZmluZENoZWNrZWRCb3hlcyk7XG5tYWluLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhZGRUb015UmVjaXBlcyk7XG5wYW50cnlCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRvZ2dsZU1lbnUpO1xuc2F2ZWRSZWNpcGVzQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzaG93U2F2ZWRSZWNpcGVzKTtcbnNlYXJjaEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc2VhcmNoUmVjaXBlcyk7XG5zaG93UGFudHJ5UmVjaXBlcy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZmluZENoZWNrZWRQYW50cnlCb3hlcyk7XG5zZWFyY2hGb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgcHJlc3NFbnRlclNlYXJjaCk7XG5cbmxldCByZWNpcGVzID0gW11cbmxldCBwYW50cnlJbmZvID0gW11cbmxldCByZWNpcGU7XG5sZXQgdXNlcjtcbmxldCBwYW50cnk7XG5sZXQgaW5ncmVkaWVudHNEYXRhO1xubGV0IHVzZXJzO1xuXG5mdW5jdGlvbiBnZXRGZXRjaERhdGEoKSB7XG4gIHJldHVybiBmZXRjaERhdGEoKVxuICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgY29uc29sZS5sb2coZGF0YSlcbiAgICAgIHVzZXJzID0gZGF0YS51c2VyRGF0YVxuICAgICAgdXNlciA9IG5ldyBVc2VyKHVzZXJzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHVzZXJzLmxlbmd0aCldKVxuICAgICAgcmVjaXBlcyA9IGRhdGEucmVjaXBlRGF0YVxuICAgICAgaW5ncmVkaWVudHNEYXRhID0gZGF0YS5pbmdyZWRpZW50c0RhdGFcbiAgICB9KVxuICAgIC50aGVuKCgpID0+IGdlbmVyYXRlVXNlcigpKVxuICAgIC50aGVuKCgpID0+IGNyZWF0ZUNhcmRzKHJlY2lwZXMpKVxuICAgIC50aGVuKCgpID0+IGZpbmRUYWdzKCkpXG4gICAgLy8gbmVlZCB0byByZXNvbHZlIHdob2xlIHBhZ2Ugb2YgZGF0YSBpbiB0aGlzIG1ldGhvZFxuICAgIC5jYXRjaChlcnIgPT4gY29uc29sZS5sb2coZXJyLm1lc3NhZ2UpKVxufVxuXG5mdW5jdGlvbiBkaXNwbGF5SW5pdGlhbERvbSgpIHtcbiAgZ2VuZXJhdGVVc2VyKClcbiAgY3JlYXRlQ2FyZHMoKVxuICBmaW5kVGFncygpXG59XG4vLyBHRU5FUkFURSBBIFVTRVIgT04gTE9BRFxuZnVuY3Rpb24gZ2VuZXJhdGVVc2VyKCkge1xuICAvLyB1c2VyID0gbmV3IFVzZXIodXNlcnNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdXNlcnMubGVuZ3RoKV0pO1xuICBsZXQgZmlyc3ROYW1lID0gdXNlci5uYW1lLnNwbGl0KFwiIFwiKVswXTtcbiAgbGV0IHdlbGNvbWVNc2cgPSBgXG4gICAgPGRpdiBjbGFzcz1cIndlbGNvbWUtbXNnXCI+XG4gICAgICA8aDE+V2VsY29tZSAke2ZpcnN0TmFtZX0hPC9oMT5cbiAgICA8L2Rpdj5gO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJhbm5lci1pbWFnZVwiKS5pbnNlcnRBZGphY2VudEhUTUwoXCJhZnRlcmJlZ2luXCIsXG4gICAgd2VsY29tZU1zZyk7XG4gIGZpbmRQYW50cnlJbmZvKCk7XG59XG5cbi8vIENSRUFURSBSRUNJUEUgQ0FSRFNcbmZ1bmN0aW9uIGNyZWF0ZUNhcmRzKHJlY2lwZURhdGEpIHtcbiAgcmVjaXBlRGF0YS5mb3JFYWNoKHJlY2lwZSA9PiB7XG4gICAgbGV0IHJlY2lwZUluZm8gPSBuZXcgUmVjaXBlKHJlY2lwZSk7XG4gICAgY29uc29sZS5sb2cocmVjaXBlSW5mbylcbiAgICBsZXQgc2hvcnRSZWNpcGVOYW1lID0gcmVjaXBlSW5mby5uYW1lO1xuICAgIHJlY2lwZXMucHVzaChyZWNpcGVJbmZvKTtcbiAgICBpZiAocmVjaXBlSW5mby5uYW1lLmxlbmd0aCA+IDQwKSB7XG4gICAgICBzaG9ydFJlY2lwZU5hbWUgPSByZWNpcGVJbmZvLm5hbWUuc3Vic3RyaW5nKDAsIDQwKSArIFwiLi4uXCI7XG4gICAgfVxuICAgIGRpc3BsYXlSZWNpcGVEZXRhaWxzKHJlY2lwZUluZm8sIHNob3J0UmVjaXBlTmFtZSlcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlSZWNpcGVEZXRhaWxzKHJlY2lwZUluZm8sIHNob3J0UmVjaXBlTmFtZSkge1xuICBsZXQgY2FyZEh0bWwgPSBgXG4gICAgPGRpdiBjbGFzcz1cInJlY2lwZS1jYXJkXCIgaWQ9JHtyZWNpcGVJbmZvLmlkfT5cbiAgICAgIDxoMyBtYXhsZW5ndGg9XCI0MFwiPiR7c2hvcnRSZWNpcGVOYW1lfTwvaDM+XG4gICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1waG90by1jb250YWluZXJcIj5cbiAgICAgICAgPGltZyBzcmM9JHtyZWNpcGVJbmZvLmltYWdlfSBjbGFzcz1cImNhcmQtcGhvdG8tcHJldmlld1wiIGFsdD1cIiR7cmVjaXBlSW5mby5uYW1lfSByZWNpcGVcIiB0aXRsZT1cIiR7cmVjaXBlSW5mby5uYW1lfSByZWNpcGVcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInRleHRcIj5cbiAgICAgICAgICA8ZGl2PkNsaWNrIGZvciBJbnN0cnVjdGlvbnM8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxoND4ke3JlY2lwZUluZm8udGFnc1swXX08L2g0PlxuICAgICAgPGltZyBzcmM9XCIuLi9pbWFnZXMvYXBwbGUtbG9nby1vdXRsaW5lLnBuZ1wiIGFsdD1cInVuZmlsbGVkIGFwcGxlIGljb25cIiBjbGFzcz1cImNhcmQtYXBwbGUtaWNvblwiPlxuICAgIDwvZGl2PmBcbiAgbWFpbi5pbnNlcnRBZGphY2VudEhUTUwoXCJiZWZvcmVlbmRcIiwgY2FyZEh0bWwpO1xufVxuXG4vLyBGSUxURVIgQlkgUkVDSVBFIFRBR1NcbmZ1bmN0aW9uIGZpbmRUYWdzKCkge1xuICBsZXQgdGFncyA9IFtdO1xuICByZWNpcGVzLmZvckVhY2gocmVjaXBlID0+IHtcbiAgICByZWNpcGUudGFncy5mb3JFYWNoKHRhZyA9PiB7XG4gICAgICBpZiAoIXRhZ3MuaW5jbHVkZXModGFnKSkge1xuICAgICAgICB0YWdzLnB1c2godGFnKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG4gIHRhZ3Muc29ydCgpO1xuICBsaXN0VGFncyh0YWdzKTtcbn1cblxuZnVuY3Rpb24gbGlzdFRhZ3MoYWxsVGFncykge1xuICBhbGxUYWdzLmZvckVhY2godGFnID0+IHtcbiAgICBsZXQgdGFnSHRtbCA9IGA8bGk+PGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGNsYXNzPVwiY2hlY2tlZC10YWdcIiBpZD1cIiR7dGFnfVwiPlxuICAgICAgPGxhYmVsIGZvcj1cIiR7dGFnfVwiPiR7Y2FwaXRhbGl6ZSh0YWcpfTwvbGFiZWw+PC9saT5gO1xuICAgIHRhZ0xpc3QuaW5zZXJ0QWRqYWNlbnRIVE1MKFwiYmVmb3JlZW5kXCIsIHRhZ0h0bWwpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gY2FwaXRhbGl6ZSh3b3Jkcykge1xuICByZXR1cm4gd29yZHMuc3BsaXQoXCIgXCIpLm1hcCh3b3JkID0+IHtcbiAgICByZXR1cm4gd29yZC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHdvcmQuc2xpY2UoMSk7XG4gIH0pLmpvaW4oXCIgXCIpO1xufVxuXG5mdW5jdGlvbiBmaW5kQ2hlY2tlZEJveGVzKCkge1xuICBsZXQgdGFnQ2hlY2tib3hlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY2hlY2tlZC10YWdcIik7XG4gIGxldCBjaGVja2JveEluZm8gPSBBcnJheS5mcm9tKHRhZ0NoZWNrYm94ZXMpXG4gIGxldCBzZWxlY3RlZFRhZ3MgPSBjaGVja2JveEluZm8uZmlsdGVyKGJveCA9PiB7XG4gICAgcmV0dXJuIGJveC5jaGVja2VkO1xuICB9KVxuICBmaW5kVGFnZ2VkUmVjaXBlcyhzZWxlY3RlZFRhZ3MpO1xufVxuXG5mdW5jdGlvbiBmaW5kVGFnZ2VkUmVjaXBlcyhzZWxlY3RlZCkge1xuICBsZXQgZmlsdGVyZWRSZXN1bHRzID0gW107XG4gIHNlbGVjdGVkLmZvckVhY2godGFnID0+IHtcbiAgICBsZXQgYWxsUmVjaXBlcyA9IHJlY2lwZXMuZmlsdGVyKHJlY2lwZSA9PiB7XG4gICAgICByZXR1cm4gcmVjaXBlLnRhZ3MuaW5jbHVkZXModGFnLmlkKTtcbiAgICB9KTtcbiAgICBhbGxSZWNpcGVzLmZvckVhY2gocmVjaXBlID0+IHtcbiAgICAgIGlmICghZmlsdGVyZWRSZXN1bHRzLmluY2x1ZGVzKHJlY2lwZSkpIHtcbiAgICAgICAgZmlsdGVyZWRSZXN1bHRzLnB1c2gocmVjaXBlKTtcbiAgICAgIH1cbiAgICB9KVxuICB9KTtcbiAgc2hvd0FsbFJlY2lwZXMoKTtcbiAgaWYgKGZpbHRlcmVkUmVzdWx0cy5sZW5ndGggPiAwKSB7XG4gICAgZmlsdGVyUmVjaXBlcyhmaWx0ZXJlZFJlc3VsdHMpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGZpbHRlclJlY2lwZXMoZmlsdGVyZWQpIHtcbiAgbGV0IGZvdW5kUmVjaXBlcyA9IHJlY2lwZXMuZmlsdGVyKHJlY2lwZSA9PiB7XG4gICAgcmV0dXJuICFmaWx0ZXJlZC5pbmNsdWRlcyhyZWNpcGUpO1xuICB9KTtcbiAgaGlkZVVuc2VsZWN0ZWRSZWNpcGVzKGZvdW5kUmVjaXBlcylcbn1cblxuZnVuY3Rpb24gaGlkZVVuc2VsZWN0ZWRSZWNpcGVzKGZvdW5kUmVjaXBlcykge1xuICBmb3VuZFJlY2lwZXMuZm9yRWFjaChyZWNpcGUgPT4ge1xuICAgIGxldCBkb21SZWNpcGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHtyZWNpcGUuaWR9YCk7XG4gICAgZG9tUmVjaXBlLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgfSk7XG59XG5cbi8vIEZBVk9SSVRFIFJFQ0lQRSBGVU5DVElPTkFMSVRZXG5mdW5jdGlvbiBhZGRUb015UmVjaXBlcygpIHtcbiAgaWYgKGV2ZW50LnRhcmdldC5jbGFzc05hbWUgPT09IFwiY2FyZC1hcHBsZS1pY29uXCIpIHtcbiAgICBsZXQgY2FyZElkID0gcGFyc2VJbnQoZXZlbnQudGFyZ2V0LmNsb3Nlc3QoXCIucmVjaXBlLWNhcmRcIikuaWQpXG4gICAgaWYgKCF1c2VyLmZhdm9yaXRlUmVjaXBlcy5pbmNsdWRlcyhjYXJkSWQpKSB7XG4gICAgICBldmVudC50YXJnZXQuc3JjID0gXCIuLi9pbWFnZXMvYXBwbGUtbG9nby5wbmdcIjtcbiAgICAgIHVzZXIuc2F2ZVJlY2lwZShjYXJkSWQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBldmVudC50YXJnZXQuc3JjID0gXCIuLi9pbWFnZXMvYXBwbGUtbG9nby1vdXRsaW5lLnBuZ1wiO1xuICAgICAgdXNlci5yZW1vdmVSZWNpcGUoY2FyZElkKTtcbiAgICB9XG4gIH0gZWxzZSBpZiAoZXZlbnQudGFyZ2V0LmlkID09PSBcImV4aXQtcmVjaXBlLWJ0blwiKSB7XG4gICAgZXhpdFJlY2lwZSgpO1xuICB9IGVsc2UgaWYgKGlzRGVzY2VuZGFudChldmVudC50YXJnZXQuY2xvc2VzdChcIi5yZWNpcGUtY2FyZFwiKSwgZXZlbnQudGFyZ2V0KSkge1xuICAgIG9wZW5SZWNpcGVJbmZvKGV2ZW50KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBpc0Rlc2NlbmRhbnQocGFyZW50LCBjaGlsZCkge1xuICBsZXQgbm9kZSA9IGNoaWxkO1xuICB3aGlsZSAobm9kZSAhPT0gbnVsbCkge1xuICAgIGlmIChub2RlID09PSBwYXJlbnQpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBub2RlID0gbm9kZS5wYXJlbnROb2RlO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cblxuZnVuY3Rpb24gc2hvd1NhdmVkUmVjaXBlcygpIHtcbiAgbGV0IHVuc2F2ZWRSZWNpcGVzID0gcmVjaXBlcy5maWx0ZXIocmVjaXBlID0+IHtcbiAgICByZXR1cm4gIXVzZXIuZmF2b3JpdGVSZWNpcGVzLmluY2x1ZGVzKHJlY2lwZS5pZCk7XG4gIH0pO1xuICB1bnNhdmVkUmVjaXBlcy5mb3JFYWNoKHJlY2lwZSA9PiB7XG4gICAgbGV0IGRvbVJlY2lwZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke3JlY2lwZS5pZH1gKTtcbiAgICBkb21SZWNpcGUuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICB9KTtcbiAgc2hvd015UmVjaXBlc0Jhbm5lcigpO1xufVxuXG4vLyBDUkVBVEUgUkVDSVBFIElOU1RSVUNUSU9OU1xuZnVuY3Rpb24gb3BlblJlY2lwZUluZm8oZXZlbnQpIHtcbiAgZnVsbFJlY2lwZUluZm8uc3R5bGUuZGlzcGxheSA9IFwiaW5saW5lXCI7XG4gIGxldCByZWNpcGVJZCA9IGV2ZW50LnBhdGguZmluZChlID0+IGUuaWQpLmlkO1xuICBsZXQgcmVjaXBlID0gcmVjaXBlcy5maW5kKHJlY2lwZSA9PiByZWNpcGUuaWQgPT09IE51bWJlcihyZWNpcGVJZCkpO1xuICBjb25zb2xlLmxvZygnUkVDSVBFJywgcmVjaXBlKVxuICBnZW5lcmF0ZVJlY2lwZVRpdGxlKHJlY2lwZSwgZ2VuZXJhdGVJbmdyZWRpZW50cyhyZWNpcGUpKTtcbiAgYWRkUmVjaXBlSW1hZ2UocmVjaXBlKTtcbiAgZ2VuZXJhdGVJbnN0cnVjdGlvbnMocmVjaXBlKTtcbiAgZnVsbFJlY2lwZUluZm8uaW5zZXJ0QWRqYWNlbnRIVE1MKFwiYmVmb3JlYmVnaW5cIiwgXCI8c2VjdGlvbiBpZD0nb3ZlcmxheSc+PC9kaXY+XCIpO1xufVxuXG5mdW5jdGlvbiBnZW5lcmF0ZVJlY2lwZVRpdGxlKHJlY2lwZSwgaW5ncmVkaWVudHMpIHtcbiAgbGV0IHJlY2lwZVRpdGxlID0gYFxuICAgIDxidXR0b24gaWQ9XCJleGl0LXJlY2lwZS1idG5cIj5YPC9idXR0b24+XG4gICAgPGgzIGlkPVwicmVjaXBlLXRpdGxlXCI+JHtyZWNpcGUubmFtZX08L2gzPlxuICAgIDxoND5JbmdyZWRpZW50czwvaDQ+XG4gICAgPHA+JHtpbmdyZWRpZW50c308L3A+YFxuICBmdWxsUmVjaXBlSW5mby5pbnNlcnRBZGphY2VudEhUTUwoXCJiZWZvcmVlbmRcIiwgcmVjaXBlVGl0bGUpO1xufVxuXG5mdW5jdGlvbiBhZGRSZWNpcGVJbWFnZShyZWNpcGUpIHtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyZWNpcGUtdGl0bGVcIikuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgke3JlY2lwZS5pbWFnZX0pYDtcbn1cblxuLy8gKioqKioqKipcbmZ1bmN0aW9uIGdlbmVyYXRlSW5ncmVkaWVudHMocmVjaXBlKSB7XG4gIGNvbnN0IG1hcHBlZFJlY2lwZSA9IHJlY2lwZS5pbmdyZWRpZW50cy5tYXAocmVjaXBlSW5ncmVkaWVudCA9PiB7XG4gICAgaW5ncmVkaWVudHNEYXRhLmZvckVhY2goaW5ncmVkaWVudCA9PiB7XG4gICAgICBpZiAoaW5ncmVkaWVudC5pZCA9PT0gcmVjaXBlSW5ncmVkaWVudC5pZCkge1xuICAgICAgICByZWNpcGVJbmdyZWRpZW50Lm5hbWUgPSBpbmdyZWRpZW50Lm5hbWVcbiAgICAgIH1cbiAgICB9KVxuICAgIHJldHVybiByZWNpcGVJbmdyZWRpZW50XG4gIH0pXG4gIHJldHVybiByZWNpcGUgJiYgbWFwcGVkUmVjaXBlLm1hcChpID0+IHtcbiAgICByZXR1cm4gYCR7Y2FwaXRhbGl6ZShpLm5hbWUpfSAoJHtpLnF1YW50aXR5LmFtb3VudH0gJHtpLnF1YW50aXR5LnVuaXR9KWBcbiAgfSkuam9pbihcIiwgXCIpO1xufVxuXG5mdW5jdGlvbiBnZW5lcmF0ZUluc3RydWN0aW9ucyhyZWNpcGUpIHtcbiAgbGV0IGluc3RydWN0aW9uc0xpc3QgPSBcIlwiO1xuICBsZXQgaW5zdHJ1Y3Rpb25zID0gcmVjaXBlLmluc3RydWN0aW9ucy5tYXAoaSA9PiB7XG4gICAgcmV0dXJuIGkuaW5zdHJ1Y3Rpb25cbiAgfSk7XG4gIGluc3RydWN0aW9ucy5mb3JFYWNoKGkgPT4ge1xuICAgIGluc3RydWN0aW9uc0xpc3QgKz0gYDxsaT4ke2l9PC9saT5gXG4gIH0pO1xuICBmdWxsUmVjaXBlSW5mby5pbnNlcnRBZGphY2VudEhUTUwoXCJiZWZvcmVlbmRcIiwgXCI8aDQ+SW5zdHJ1Y3Rpb25zPC9oND5cIik7XG4gIGZ1bGxSZWNpcGVJbmZvLmluc2VydEFkamFjZW50SFRNTChcImJlZm9yZWVuZFwiLCBgPG9sPiR7aW5zdHJ1Y3Rpb25zTGlzdH08L29sPmApO1xufVxuXG5mdW5jdGlvbiBleGl0UmVjaXBlKCkge1xuICB3aGlsZSAoZnVsbFJlY2lwZUluZm8uZmlyc3RDaGlsZCAmJlxuICAgIGZ1bGxSZWNpcGVJbmZvLnJlbW92ZUNoaWxkKGZ1bGxSZWNpcGVJbmZvLmZpcnN0Q2hpbGQpKTtcbiAgZnVsbFJlY2lwZUluZm8uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm92ZXJsYXlcIikucmVtb3ZlKCk7XG59XG5cbi8vIFRPR0dMRSBESVNQTEFZU1xuZnVuY3Rpb24gc2hvd015UmVjaXBlc0Jhbm5lcigpIHtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi53ZWxjb21lLW1zZ1wiKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubXktcmVjaXBlcy1iYW5uZXJcIikuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbn1cblxuZnVuY3Rpb24gc2hvd1dlbGNvbWVCYW5uZXIoKSB7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIud2VsY29tZS1tc2dcIikuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm15LXJlY2lwZXMtYmFubmVyXCIpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbn1cblxuLy8gU0VBUkNIIFJFQ0lQRVNcbmZ1bmN0aW9uIHByZXNzRW50ZXJTZWFyY2goZXZlbnQpIHtcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgc2VhcmNoUmVjaXBlcygpO1xufVxuXG5mdW5jdGlvbiBzZWFyY2hSZWNpcGVzKCkge1xuICBzaG93QWxsUmVjaXBlcygpO1xuICBsZXQgc2VhcmNoZWRSZWNpcGVzID0gcmVjaXBlcy5maWx0ZXIocmVjaXBlID0+IHtcbiAgICByZXR1cm4gcmVjaXBlLm5hbWUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhzZWFyY2hJbnB1dC52YWx1ZS50b0xvd2VyQ2FzZSgpKTtcbiAgfSk7XG4gIGZpbHRlck5vblNlYXJjaGVkKGNyZWF0ZVJlY2lwZU9iamVjdChzZWFyY2hlZFJlY2lwZXMpKTtcbn1cblxuZnVuY3Rpb24gZmlsdGVyTm9uU2VhcmNoZWQoZmlsdGVyZWQpIHtcbiAgbGV0IGZvdW5kID0gcmVjaXBlcy5maWx0ZXIocmVjaXBlID0+IHtcbiAgICBsZXQgaWRzID0gZmlsdGVyZWQubWFwKGYgPT4gZi5pZCk7XG4gICAgcmV0dXJuICFpZHMuaW5jbHVkZXMocmVjaXBlLmlkKVxuICB9KVxuICBoaWRlVW5zZWxlY3RlZFJlY2lwZXMoZm91bmQpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVSZWNpcGVPYmplY3QocmVjaXBlcykge1xuICByZWNpcGVzID0gcmVjaXBlcy5tYXAocmVjaXBlID0+IG5ldyBSZWNpcGUocmVjaXBlKSk7XG4gIHJldHVybiByZWNpcGVzXG59XG5cbmZ1bmN0aW9uIHRvZ2dsZU1lbnUoKSB7XG4gIHZhciBtZW51RHJvcGRvd24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRyb3AtbWVudVwiKTtcbiAgbWVudU9wZW4gPSAhbWVudU9wZW47XG4gIGlmIChtZW51T3Blbikge1xuICAgIG1lbnVEcm9wZG93bi5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICB9IGVsc2Uge1xuICAgIG1lbnVEcm9wZG93bi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gIH1cbn1cblxuZnVuY3Rpb24gc2hvd0FsbFJlY2lwZXMoKSB7XG4gIHJlY2lwZXMuZm9yRWFjaChyZWNpcGUgPT4ge1xuICAgIGxldCBkb21SZWNpcGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHtyZWNpcGUuaWR9YCk7XG4gICAgZG9tUmVjaXBlLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gIH0pO1xuICBzaG93V2VsY29tZUJhbm5lcigpO1xufVxuXG4vLyBDUkVBVEUgQU5EIFVTRSBQQU5UUlkgLS0gTUFZIE5FRUQgVE8gQkUgUkVXUklUVEVOKioqIGRpc3BsYXkgcG9ydGlvbiAtLSBzb3J0IGJlZm9yZSBkaXNwbGF5LCBub3QgZHVyaW5nXG5mdW5jdGlvbiBmaW5kUGFudHJ5SW5mbygpIHtcbiAgdXNlci5wYW50cnkuZm9yRWFjaChpdGVtID0+IHtcbiAgICBsZXQgaXRlbUluZm8gPSBpbmdyZWRpZW50c0RhdGEuZmluZChpbmdyZWRpZW50ID0+IHtcbiAgICAgIHJldHVybiBpbmdyZWRpZW50LmlkID09PSBpdGVtLmluZ3JlZGllbnQ7XG4gICAgfSk7XG4gICAgbGV0IG9yaWdpbmFsSW5ncmVkaWVudCA9IHBhbnRyeUluZm8uZmluZChpbmdyZWRpZW50ID0+IHtcbiAgICAgIGlmIChpdGVtSW5mbykge1xuICAgICAgICByZXR1cm4gaW5ncmVkaWVudC5uYW1lID09PSBpdGVtSW5mby5uYW1lO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGlmIChpdGVtSW5mbyAmJiBvcmlnaW5hbEluZ3JlZGllbnQpIHtcbiAgICAgIG9yaWdpbmFsSW5ncmVkaWVudC5jb3VudCArPSBpdGVtLmFtb3VudDtcbiAgICB9IGVsc2UgaWYgKGl0ZW1JbmZvKSB7XG4gICAgICBwYW50cnlJbmZvLnB1c2goe25hbWU6IGl0ZW1JbmZvLm5hbWUsIGNvdW50OiBpdGVtLmFtb3VudCwgaWQ6IGl0ZW1JbmZvLmlkfSk7XG4gICAgfVxuICB9KTtcbiAgZGlzcGxheVBhbnRyeUluZm8ocGFudHJ5SW5mby5zb3J0KChhLCBiKSA9PiBhLm5hbWUubG9jYWxlQ29tcGFyZShiLm5hbWUpKSk7XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlQYW50cnlJbmZvKHBhbnRyeSkge1xuICAvLyoqKiBwYW50cnkgPSBET00gcGFudHJ5IHdpdGgganVzdCBuYW1lIGFuZCAjXG4gIHBhbnRyeS5mb3JFYWNoKGluZ3JlZGllbnQgPT4ge1xuICAgIGxldCBpbmdyZWRpZW50SHRtbCA9IGA8bGk+PGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGNsYXNzPVwicGFudHJ5LWNoZWNrYm94XCIgaWQ9XCIke2luZ3JlZGllbnQuaWR9XCI+XG4gICAgICA8bGFiZWwgZm9yPVwiJHtpbmdyZWRpZW50Lm5hbWV9XCI+JHtpbmdyZWRpZW50Lm5hbWV9LCAke2luZ3JlZGllbnQuY291bnR9PC9sYWJlbD48L2xpPmA7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wYW50cnktbGlzdFwiKS5pbnNlcnRBZGphY2VudEhUTUwoXCJiZWZvcmVlbmRcIixcbiAgICAgIGluZ3JlZGllbnRIdG1sKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGZpbmRDaGVja2VkUGFudHJ5Qm94ZXMoKSB7XG4gIGxldCBwYW50cnlDaGVja2JveGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wYW50cnktY2hlY2tib3hcIik7XG4gIGxldCBwYW50cnlDaGVja2JveEluZm8gPSBBcnJheS5mcm9tKHBhbnRyeUNoZWNrYm94ZXMpXG4gIGxldCBzZWxlY3RlZEluZ3JlZGllbnRzID0gcGFudHJ5Q2hlY2tib3hJbmZvLmZpbHRlcihib3ggPT4ge1xuICAgIHJldHVybiBib3guY2hlY2tlZDtcbiAgfSlcbiAgc2hvd0FsbFJlY2lwZXMoKTtcbiAgaWYgKHNlbGVjdGVkSW5ncmVkaWVudHMubGVuZ3RoID4gMCkge1xuICAgIGZpbmRSZWNpcGVzV2l0aENoZWNrZWRJbmdyZWRpZW50cyhzZWxlY3RlZEluZ3JlZGllbnRzKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBmaW5kUmVjaXBlc1dpdGhDaGVja2VkSW5ncmVkaWVudHMoc2VsZWN0ZWQpIHtcblxuICBsZXQgcmVjaXBlQ2hlY2tlciA9IChhcnIsIHRhcmdldCkgPT4gdGFyZ2V0LmV2ZXJ5KHYgPT4gYXJyLmluY2x1ZGVzKHYpKTtcbiAgbGV0IGluZ3JlZGllbnROYW1lcyA9IHNlbGVjdGVkLm1hcChpdGVtID0+IHtcbiAgICByZXR1cm4gK2l0ZW0uaWQ7XG4gIH0pXG4gIHJlY2lwZXMuZm9yRWFjaChyZWNpcGUgPT4ge1xuICAgIGxldCBhbGxSZWNpcGVJbmdyZWRpZW50cyA9IFtdO1xuICAgIHJlY2lwZS5pbmdyZWRpZW50cy5mb3JFYWNoKGluZ3JlZGllbnQgPT4ge1xuICAgICAgYWxsUmVjaXBlSW5ncmVkaWVudHMucHVzaChpbmdyZWRpZW50LmlkKTtcbiAgICB9KTtcbiAgICBjb25zb2xlLmxvZyhpbmdyZWRpZW50TmFtZXMpXG4gICAgaWYgKCFyZWNpcGVDaGVja2VyKGFsbFJlY2lwZUluZ3JlZGllbnRzLCBpbmdyZWRpZW50TmFtZXMpKSB7XG4gICAgICBsZXQgZG9tUmVjaXBlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7cmVjaXBlLmlkfWApO1xuICAgICAgZG9tUmVjaXBlLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICB9XG4gIH0pXG59XG5cbi8vIGNvbnN0IG1hcHBlZFJlY2lwZSA9IHJlY2lwZS5pbmdyZWRpZW50cy5tYXAocmVjaXBlSW5ncmVkaWVudCA9PiB7XG4vLyAgIGluZ3JlZGllbnRzRGF0YS5mb3JFYWNoKGluZ3JlZGllbnQgPT4ge1xuLy8gICAgIGlmIChpbmdyZWRpZW50LmlkID09PSByZWNpcGVJbmdyZWRpZW50LmlkKSB7XG4vLyAgICAgICByZWNpcGVJbmdyZWRpZW50Lm5hbWUgPSBpbmdyZWRpZW50Lm5hbWVcbi8vICAgICB9XG4vLyAgIH0pXG4vLyAgIHJldHVybiByZWNpcGVJbmdyZWRpZW50XG4vLyB9KVxuIiwiY2xhc3MgVXNlciB7XG4gIGNvbnN0cnVjdG9yKHVzZXIpIHtcbiAgICB0aGlzLmlkID0gdXNlci5pZDtcbiAgICB0aGlzLm5hbWUgPSB1c2VyLm5hbWU7XG4gICAgdGhpcy5wYW50cnkgPSB1c2VyLnBhbnRyeTtcbiAgICB0aGlzLmZhdm9yaXRlUmVjaXBlcyA9IFtdO1xuICAgIHRoaXMucmVjaXBlc1RvQ29vayA9IFtdO1xuICB9XG5cbiAgc2F2ZVJlY2lwZShyZWNpcGUpIHtcbiAgICB0aGlzLmZhdm9yaXRlUmVjaXBlcy5wdXNoKHJlY2lwZSk7XG4gIH1cblxuICByZW1vdmVSZWNpcGUocmVjaXBlTG9jYXRpb24sIHJlY2lwZSkge1xuICAgIGxldCByZWNpcGVJbmRleCA9IHRoaXNbcmVjaXBlTG9jYXRpb25dLmluZGV4T2YocmVjaXBlKTtcbiAgICB0aGlzW3JlY2lwZUxvY2F0aW9uXS5zcGxpY2UocmVjaXBlSW5kZXgsIDEpO1xuICB9XG5cbiAgZGVjaWRlVG9Db29rKHJlY2lwZSkge1xuICAgIHRoaXMucmVjaXBlc1RvQ29vay5wdXNoKHJlY2lwZSk7XG4gIH1cblxuICBmaWx0ZXJSZWNpcGVzKHJlY2lwZUxvY2F0aW9uLCB0eXBlKSB7XG4gICAgcmV0dXJuIHRoaXNbcmVjaXBlTG9jYXRpb25dLmZpbHRlcihyZWNpcGUgPT4gcmVjaXBlLnR5cGUuaW5jbHVkZXModHlwZSkpO1xuICB9XG5cbiAgc2VhcmNoRm9yUmVjaXBlKHJlY2lwZUxvY2F0aW9uLCBrZXl3b3JkKSB7XG4gICAgcmV0dXJuIHRoaXNbcmVjaXBlTG9jYXRpb25dLmZpbHRlcihyZWNpcGUgPT4gcmVjaXBlLm5hbWUuaW5jbHVkZXMoa2V5d29yZCkgfHwgcmVjaXBlLmluZ3JlZGllbnRzLmluY2x1ZGVzKGtleXdvcmQpKTtcbiAgfVxuXG4gIG1hcmllS29uZG9NeVBhbnRyeSgpIHtcbiAgICBjb25zdCBtYXJpZUtvbmRvUGFudHJ5ID0gdGhpcy5wYW50cnkucmVkdWNlKChrb25tYXJpUGFudHJ5LCBpdGVtKSA9PiB7XG4gICAgICBpZigha29ubWFyaVBhbnRyeVtpdGVtLmluZ3JlZGllbnRdKSB7XG4gICAgICAgIGtvbm1hcmlQYW50cnlbaXRlbS5pbmdyZWRpZW50XSA9IGl0ZW0uYW1vdW50XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBrb25tYXJpUGFudHJ5W2l0ZW0uaW5ncmVkaWVudF0gKz0gaXRlbS5hbW91bnRcbiAgICAgIH1cbiAgICAgIHJldHVybiBrb25tYXJpUGFudHJ5XG4gICAgfSwge30pXG4gICAgcmV0dXJuIG1hcmllS29uZG9QYW50cnlcbiAgfVxuXG4gIGNvbnNvbGlkYXRlUGFudHJ5KCkge1xuICAgIGNvbnN0IG1hcmllS29uZG9QYW50cnkgPSB0aGlzLm1hcmllS29uZG9NeVBhbnRyeSgpXG4gICAgY29uc3QgcGFudHJ5ID0gT2JqZWN0LmVudHJpZXMobWFyaWVLb25kb1BhbnRyeSkubWFwKGluZ3JlZGllbnQgPT4ge1xuICAgICAgcmV0dXJuIHsgaW5ncmVkaWVudDogK2luZ3JlZGllbnRbMF0sIGFtb3VudDogK2luZ3JlZGllbnRbMV0gfVxuICAgIH0pXG5cbiAgICAvLyBjb25zdCBwYW50cnkgPSBPYmplY3Qua2V5cyhtYXJpZUtvbmRvUGFudHJ5KS5tYXAoaW5ncmVkaWVudCA9PiB7XG4gICAgLy8gICByZXR1cm4geyBpbmdyZWRpZW50OiBpbmdyZWRpZW50LCBhbW91bnQ6IG1hcmllS29uZG9QYW50cnlbaW5ncmVkaWVudF0gfVxuICAgIC8vIH0pXG4gICAgdGhpcy5wYW50cnkgPSBwYW50cnlcbiAgfVxuXG59XG5cbm1vZHVsZS5leHBvcnRzID0gVXNlcjtcbiJdLCJzb3VyY2VSb290IjoiIn0=