module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/book.js":
/*!****************************!*\
  !*** ./components/book.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Book; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var radium__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! radium */ "radium");
/* harmony import */ var radium__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(radium__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/richkolasa/Documents/Dev/richardkolasacom/components/book.js";


function Book(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: props.style,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: props.url,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    style: styles.images,
    src: props.imageSource,
    alt: props.altText,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  })));
}
var styles = {
  images: {
    boxShadow: '-5px 5px 10px #888888',
    maxWidth: '100%',
    // '@media screen and (max-width: 920px)': {
    //   maxWidth: '200px'
    // },
    '@media screen and (max-width: 580px)': {}
  }
};
Book = radium__WEBPACK_IMPORTED_MODULE_1___default()(Book);

/***/ }),

/***/ "./components/header.js":
/*!******************************!*\
  !*** ./components/header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Header; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var radium__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! radium */ "radium");
/* harmony import */ var radium__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(radium__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/richkolasa/Documents/Dev/richardkolasacom/components/header.js";


function Header() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: styles.base,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: styles.content,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    style: styles.link,
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    style: styles.text,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, "Richard Kolasa")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    style: styles.link,
    href: "mailto:hello@richardkolasa.com",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: styles.email,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, "hello@richardkolasa.com"))));
}
var styles = {
  base: {
    borderBottom: '0.5px solid rgba(0, 0, 0, 0.397)'
  },
  content: {
    maxWidth: '250px',
    margin: '0 auto'
  },
  link: {
    textDecoration: 'none'
  },
  text: {
    textAlign: 'center',
    fontSize: '2em',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif',
    width: '100%',
    color: 'black',
    marginTop: '10px',
    marginBottom: '10px'
  },
  email: {
    marginTop: '0',
    fontSize: '0.9em',
    textAlign: 'center',
    color: 'rgba(2, 170, 179, 0.808)',
    marginBottom: '10px'
  }
};
Header = radium__WEBPACK_IMPORTED_MODULE_1___default()(Header);

/***/ }),

/***/ "./pages/reading-list.js":
/*!*******************************!*\
  !*** ./pages/reading-list.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ReadingList; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var radium__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! radium */ "radium");
/* harmony import */ var radium__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(radium__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/header */ "./components/header.js");
/* harmony import */ var _components_book__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/book */ "./components/book.js");
var _jsxFileName = "/Users/richkolasa/Documents/Dev/richardkolasacom/pages/reading-list.js";




function ReadingList() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(radium__WEBPACK_IMPORTED_MODULE_1__["StyleRoot"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: styles.booksWrapper,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_header__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: styles.booksContainer,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_book__WEBPACK_IMPORTED_MODULE_3__["default"], {
    style: styles.book1,
    imageSource: "../static/cause-of-all-nations.jpg",
    altText: "The Cause of All Nations by Don H. Doyle",
    url: "https://a.co/1XSHWeO",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_book__WEBPACK_IMPORTED_MODULE_3__["default"], {
    style: styles.book2,
    imageSource: "../static/creativity-inc-book-cover.jpg",
    altText: "Creativity, Inc. by Ed Catmull",
    url: "https://a.co/2ApOvK8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_book__WEBPACK_IMPORTED_MODULE_3__["default"], {
    style: styles.book5,
    imageSource: "../static/open-organization.jpg",
    altText: "The Open Organization by Jim Whitehurst",
    url: "http://a.co/jlvfQW4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_book__WEBPACK_IMPORTED_MODULE_3__["default"], {
    style: styles.book3,
    imageSource: "../static/the-news.jpg",
    altText: "The News A User's Manual by Alain de Botton",
    url: "https://a.co/0PMTViW",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_book__WEBPACK_IMPORTED_MODULE_3__["default"], {
    style: styles.book7,
    imageSource: "../static/deadwake.jpg",
    altText: "Dead Wake by Erik Larson",
    url: "https://a.co/5mTrViu",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_book__WEBPACK_IMPORTED_MODULE_3__["default"], {
    style: styles.book6,
    imageSource: "../static/1776.jpg",
    altText: "1776 by David McCullough",
    url: "https://a.co/cw3rE1E",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_book__WEBPACK_IMPORTED_MODULE_3__["default"], {
    style: styles.book4,
    imageSource: "../static/dying-for-a-paycheck.jpg",
    altText: "Dying for a Paycheck by Jeffrey Pfeffer",
    url: "https://a.co/53keY7e",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_book__WEBPACK_IMPORTED_MODULE_3__["default"], {
    style: styles.book8,
    imageSource: "../static/the-subtle-art.jpg",
    altText: "The Subtle Art of Not Giving a F*ck by Mark Manson",
    url: "https://a.co/d/hFeHJjn",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }))));
}
var styles = {
  booksWrapper: {
    width: '100%',
    height: '100%',
    WebkitOverflowScrolling: 'touch',
    position: 'relative'
  },
  booksContainer: {
    display: 'grid',
    gridTemplateColumns: '25% 25% 25%',
    gridTemplateAreas: '"book1 book2 book3" "book4 book5 book6" "book7 book8 book9"',
    gridRowGap: '30px',
    gridColumnGap: '30px',
    color: 'black',
    paddingBottom: '40px',
    marginTop: '15px',
    justifyContent: 'center',
    justifyItems: 'center',
    '@media screen and (min-width: 1300px)': {
      gridTemplateColumns: '20% 20% 20%'
    },
    '@media screen and (max-width: 920px)': {
      gridTemplateColumns: '40% 40%',
      gridTemplateAreas: '"book1 book2" "book3 book4" "book5 book6" "book7 book8"'
    },
    '@media screen and (max-width: 580px)': {
      gridTemplateColumns: '100%',
      gridTemplateAreas: '"book1" "book2" "book3" "book4" "book5" "book6" "book7" "book8"',
      paddingBottom: '0',
      justifyContent: 'normal'
    }
  },
  links: {
    textDecoration: 'none',
    color: 'black'
  },
  paragraphs: {
    fontSize: '1.2em',
    gridArea: 'heading',
    marginTop: '20px',
    marginBottom: '10px',
    maxWidth: '70%',
    lineHeight: '1.2em',
    fontStyle: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif',
    fontWeight: '100',
    '@media screen and (max-width: 920px)': {
      maxWidth: '100%',
      fontSize: '1.1em'
    }
  },
  book1: {
    gridArea: 'book1'
  },
  book2: {
    gridArea: 'book2'
  },
  book3: {
    gridArea: 'book3'
  },
  book4: {
    gridArea: 'book4'
  },
  book5: {
    gridArea: 'book5'
  },
  book6: {
    gridArea: 'book6'
  },
  book7: {
    gridArea: 'book7'
  },
  book8: {
    gridArea: 'book8'
  } // @media screen and (max-width: 920px) {
  //   .books-container {
  //     grid-template-columns: repeat(2, 45%);
  //     grid-template-areas:
  //       "book1 book2" 
  //       "book3 book4"
  //       "book5 book6" 
  //       "book7 book8";
  //   }
  //   .books-container p {
  //     max-width: 100%;
  //     font-size: 1.1em;
  //   }
  // }
  // @media screen and (max-width: 580px) {
  //   .books-container {
  //     grid-template-columns: 100%;
  //     grid-template-areas:
  //       "book1" 
  //       "book2" 
  //       "book3" 
  //       "book4" 
  //       "book5"
  //       "book6" 
  //       "book7"
  //       "book8";
  //     padding-bottom: 0;
  //     justify-content: normal;
  //   }
  //   .books-container p {
  //     font-size: 1em;
  //   }
  // }

};

/***/ }),

/***/ 3:
/*!*************************************!*\
  !*** multi ./pages/reading-list.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/richkolasa/Documents/Dev/richardkolasacom/pages/reading-list.js */"./pages/reading-list.js");


/***/ }),

/***/ "radium":
/*!*************************!*\
  !*** external "radium" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("radium");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=reading-list.js.map