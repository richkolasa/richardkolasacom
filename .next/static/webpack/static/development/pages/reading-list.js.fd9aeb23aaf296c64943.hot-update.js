webpackHotUpdate("static/development/pages/reading-list.js",{

/***/ "./pages/reading-list.js":
/*!*******************************!*\
  !*** ./pages/reading-list.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ReadingList; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var radium__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! radium */ "./node_modules/radium/es/index.js");
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/header */ "./components/header.js");
/* harmony import */ var _components_book__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/book */ "./components/book.js");
var _jsxFileName = "/Users/richkolasa/Documents/Dev/richardkolasacom/pages/reading-list.js";




function ReadingList() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: styles.booksWrapper,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_header__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: styles.booksContainer,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_book__WEBPACK_IMPORTED_MODULE_3__["default"], {
    style: styles.book1,
    imageSource: "../static/cause-of-all-nations.jpg",
    altText: "The Cause of All Nations by Don H. Doyle",
    url: "https://a.co/1XSHWeO",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_book__WEBPACK_IMPORTED_MODULE_3__["default"], {
    style: styles.book2,
    imageSource: "../static/creativity-inc-book-cover.jpg",
    altText: "Creativity, Inc. by Ed Catmull",
    url: "https://a.co/2ApOvK8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_book__WEBPACK_IMPORTED_MODULE_3__["default"], {
    style: styles.book5,
    imageSource: "../static/open-organization.jpg",
    altText: "The Open Organization by Jim Whitehurst",
    url: "http://a.co/jlvfQW4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_book__WEBPACK_IMPORTED_MODULE_3__["default"], {
    style: styles.book3,
    imageSource: "../static/the-news.jpg",
    altText: "The News A User's Manual by Alain de Botton",
    url: "https://a.co/0PMTViW",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_book__WEBPACK_IMPORTED_MODULE_3__["default"], {
    style: styles.book7,
    imageSource: "../static/deadwake.jpg",
    altText: "Dead Wake by Erik Larson",
    url: "https://a.co/5mTrViu",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_book__WEBPACK_IMPORTED_MODULE_3__["default"], {
    style: styles.book6,
    imageSource: "../static/1776.jpg",
    altText: "1776 by David McCullough",
    url: "https://a.co/cw3rE1E",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_book__WEBPACK_IMPORTED_MODULE_3__["default"], {
    style: styles.book4,
    imageSource: "../static/dying-for-a-paycheck.jpg",
    altText: "Dying for a Paycheck by Jeffrey Pfeffer",
    url: "https://a.co/53keY7e",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_book__WEBPACK_IMPORTED_MODULE_3__["default"], {
    style: styles.book8,
    imageSource: "../static/the-subtle-art.jpg",
    altText: "The Subtle Art of Not Giving a F*ck by Mark Manson",
    url: "https://a.co/d/hFeHJjn",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  })));
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
    '@media screen and (max-width: 920px)': {
      gridTemplateColumns: 'repeat(2, 45%)',
      gridTemplateAreas: '"book1 book2" "book3 book4" "book5 book6" "book7 book8"',
      backgroundColor: 'blue'
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
    fontWeight: '100'
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

/***/ })

})
//# sourceMappingURL=reading-list.js.fd9aeb23aaf296c64943.hot-update.js.map