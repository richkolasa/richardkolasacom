((window["webpackJsonp"] = window["webpackJsonp"] || []).push([["static/development/pages/reading-list.js"],{

/***/ "./components/book.js":
/*!****************************!*\
  !*** ./components/book.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Book; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var radium__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! radium */ "./node_modules/radium/es/index.js");
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
Book = Object(radium__WEBPACK_IMPORTED_MODULE_1__["default"])(Book);

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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var radium__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! radium */ "./node_modules/radium/es/index.js");
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
Header = Object(radium__WEBPACK_IMPORTED_MODULE_1__["default"])(Header);

/***/ }),

/***/ "./node_modules/bowser/src/bowser.js":
/*!*******************************************!*\
  !*** ./node_modules/bowser/src/bowser.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*!
 * Bowser - a browser detector
 * https://github.com/ded/bowser
 * MIT License | (c) Dustin Diaz 2015
 */

!function (root, name, definition) {
  if ( true && module.exports) module.exports = definition()
  else if (true) __webpack_require__(/*! !webpack amd define */ "./node_modules/webpack/buildin/amd-define.js")(name, definition)
  else {}
}(this, 'bowser', function () {
  /**
    * See useragents.js for examples of navigator.userAgent
    */

  var t = true

  function detect(ua) {

    function getFirstMatch(regex) {
      var match = ua.match(regex);
      return (match && match.length > 1 && match[1]) || '';
    }

    function getSecondMatch(regex) {
      var match = ua.match(regex);
      return (match && match.length > 1 && match[2]) || '';
    }

    var iosdevice = getFirstMatch(/(ipod|iphone|ipad)/i).toLowerCase()
      , likeAndroid = /like android/i.test(ua)
      , android = !likeAndroid && /android/i.test(ua)
      , nexusMobile = /nexus\s*[0-6]\s*/i.test(ua)
      , nexusTablet = !nexusMobile && /nexus\s*[0-9]+/i.test(ua)
      , chromeos = /CrOS/.test(ua)
      , silk = /silk/i.test(ua)
      , sailfish = /sailfish/i.test(ua)
      , tizen = /tizen/i.test(ua)
      , webos = /(web|hpw)(o|0)s/i.test(ua)
      , windowsphone = /windows phone/i.test(ua)
      , samsungBrowser = /SamsungBrowser/i.test(ua)
      , windows = !windowsphone && /windows/i.test(ua)
      , mac = !iosdevice && !silk && /macintosh/i.test(ua)
      , linux = !android && !sailfish && !tizen && !webos && /linux/i.test(ua)
      , edgeVersion = getSecondMatch(/edg([ea]|ios)\/(\d+(\.\d+)?)/i)
      , versionIdentifier = getFirstMatch(/version\/(\d+(\.\d+)?)/i)
      , tablet = /tablet/i.test(ua) && !/tablet pc/i.test(ua)
      , mobile = !tablet && /[^-]mobi/i.test(ua)
      , xbox = /xbox/i.test(ua)
      , result

    if (/opera/i.test(ua)) {
      //  an old Opera
      result = {
        name: 'Opera'
      , opera: t
      , version: versionIdentifier || getFirstMatch(/(?:opera|opr|opios)[\s\/](\d+(\.\d+)?)/i)
      }
    } else if (/opr\/|opios/i.test(ua)) {
      // a new Opera
      result = {
        name: 'Opera'
        , opera: t
        , version: getFirstMatch(/(?:opr|opios)[\s\/](\d+(\.\d+)?)/i) || versionIdentifier
      }
    }
    else if (/SamsungBrowser/i.test(ua)) {
      result = {
        name: 'Samsung Internet for Android'
        , samsungBrowser: t
        , version: versionIdentifier || getFirstMatch(/(?:SamsungBrowser)[\s\/](\d+(\.\d+)?)/i)
      }
    }
    else if (/Whale/i.test(ua)) {
      result = {
        name: 'NAVER Whale browser'
        , whale: t
        , version: getFirstMatch(/(?:whale)[\s\/](\d+(?:\.\d+)+)/i)
      }
    }
    else if (/MZBrowser/i.test(ua)) {
      result = {
        name: 'MZ Browser'
        , mzbrowser: t
        , version: getFirstMatch(/(?:MZBrowser)[\s\/](\d+(?:\.\d+)+)/i)
      }
    }
    else if (/coast/i.test(ua)) {
      result = {
        name: 'Opera Coast'
        , coast: t
        , version: versionIdentifier || getFirstMatch(/(?:coast)[\s\/](\d+(\.\d+)?)/i)
      }
    }
    else if (/focus/i.test(ua)) {
      result = {
        name: 'Focus'
        , focus: t
        , version: getFirstMatch(/(?:focus)[\s\/](\d+(?:\.\d+)+)/i)
      }
    }
    else if (/yabrowser/i.test(ua)) {
      result = {
        name: 'Yandex Browser'
      , yandexbrowser: t
      , version: versionIdentifier || getFirstMatch(/(?:yabrowser)[\s\/](\d+(\.\d+)?)/i)
      }
    }
    else if (/ucbrowser/i.test(ua)) {
      result = {
          name: 'UC Browser'
        , ucbrowser: t
        , version: getFirstMatch(/(?:ucbrowser)[\s\/](\d+(?:\.\d+)+)/i)
      }
    }
    else if (/mxios/i.test(ua)) {
      result = {
        name: 'Maxthon'
        , maxthon: t
        , version: getFirstMatch(/(?:mxios)[\s\/](\d+(?:\.\d+)+)/i)
      }
    }
    else if (/epiphany/i.test(ua)) {
      result = {
        name: 'Epiphany'
        , epiphany: t
        , version: getFirstMatch(/(?:epiphany)[\s\/](\d+(?:\.\d+)+)/i)
      }
    }
    else if (/puffin/i.test(ua)) {
      result = {
        name: 'Puffin'
        , puffin: t
        , version: getFirstMatch(/(?:puffin)[\s\/](\d+(?:\.\d+)?)/i)
      }
    }
    else if (/sleipnir/i.test(ua)) {
      result = {
        name: 'Sleipnir'
        , sleipnir: t
        , version: getFirstMatch(/(?:sleipnir)[\s\/](\d+(?:\.\d+)+)/i)
      }
    }
    else if (/k-meleon/i.test(ua)) {
      result = {
        name: 'K-Meleon'
        , kMeleon: t
        , version: getFirstMatch(/(?:k-meleon)[\s\/](\d+(?:\.\d+)+)/i)
      }
    }
    else if (windowsphone) {
      result = {
        name: 'Windows Phone'
      , osname: 'Windows Phone'
      , windowsphone: t
      }
      if (edgeVersion) {
        result.msedge = t
        result.version = edgeVersion
      }
      else {
        result.msie = t
        result.version = getFirstMatch(/iemobile\/(\d+(\.\d+)?)/i)
      }
    }
    else if (/msie|trident/i.test(ua)) {
      result = {
        name: 'Internet Explorer'
      , msie: t
      , version: getFirstMatch(/(?:msie |rv:)(\d+(\.\d+)?)/i)
      }
    } else if (chromeos) {
      result = {
        name: 'Chrome'
      , osname: 'Chrome OS'
      , chromeos: t
      , chromeBook: t
      , chrome: t
      , version: getFirstMatch(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
      }
    } else if (/edg([ea]|ios)/i.test(ua)) {
      result = {
        name: 'Microsoft Edge'
      , msedge: t
      , version: edgeVersion
      }
    }
    else if (/vivaldi/i.test(ua)) {
      result = {
        name: 'Vivaldi'
        , vivaldi: t
        , version: getFirstMatch(/vivaldi\/(\d+(\.\d+)?)/i) || versionIdentifier
      }
    }
    else if (sailfish) {
      result = {
        name: 'Sailfish'
      , osname: 'Sailfish OS'
      , sailfish: t
      , version: getFirstMatch(/sailfish\s?browser\/(\d+(\.\d+)?)/i)
      }
    }
    else if (/seamonkey\//i.test(ua)) {
      result = {
        name: 'SeaMonkey'
      , seamonkey: t
      , version: getFirstMatch(/seamonkey\/(\d+(\.\d+)?)/i)
      }
    }
    else if (/firefox|iceweasel|fxios/i.test(ua)) {
      result = {
        name: 'Firefox'
      , firefox: t
      , version: getFirstMatch(/(?:firefox|iceweasel|fxios)[ \/](\d+(\.\d+)?)/i)
      }
      if (/\((mobile|tablet);[^\)]*rv:[\d\.]+\)/i.test(ua)) {
        result.firefoxos = t
        result.osname = 'Firefox OS'
      }
    }
    else if (silk) {
      result =  {
        name: 'Amazon Silk'
      , silk: t
      , version : getFirstMatch(/silk\/(\d+(\.\d+)?)/i)
      }
    }
    else if (/phantom/i.test(ua)) {
      result = {
        name: 'PhantomJS'
      , phantom: t
      , version: getFirstMatch(/phantomjs\/(\d+(\.\d+)?)/i)
      }
    }
    else if (/slimerjs/i.test(ua)) {
      result = {
        name: 'SlimerJS'
        , slimer: t
        , version: getFirstMatch(/slimerjs\/(\d+(\.\d+)?)/i)
      }
    }
    else if (/blackberry|\bbb\d+/i.test(ua) || /rim\stablet/i.test(ua)) {
      result = {
        name: 'BlackBerry'
      , osname: 'BlackBerry OS'
      , blackberry: t
      , version: versionIdentifier || getFirstMatch(/blackberry[\d]+\/(\d+(\.\d+)?)/i)
      }
    }
    else if (webos) {
      result = {
        name: 'WebOS'
      , osname: 'WebOS'
      , webos: t
      , version: versionIdentifier || getFirstMatch(/w(?:eb)?osbrowser\/(\d+(\.\d+)?)/i)
      };
      /touchpad\//i.test(ua) && (result.touchpad = t)
    }
    else if (/bada/i.test(ua)) {
      result = {
        name: 'Bada'
      , osname: 'Bada'
      , bada: t
      , version: getFirstMatch(/dolfin\/(\d+(\.\d+)?)/i)
      };
    }
    else if (tizen) {
      result = {
        name: 'Tizen'
      , osname: 'Tizen'
      , tizen: t
      , version: getFirstMatch(/(?:tizen\s?)?browser\/(\d+(\.\d+)?)/i) || versionIdentifier
      };
    }
    else if (/qupzilla/i.test(ua)) {
      result = {
        name: 'QupZilla'
        , qupzilla: t
        , version: getFirstMatch(/(?:qupzilla)[\s\/](\d+(?:\.\d+)+)/i) || versionIdentifier
      }
    }
    else if (/chromium/i.test(ua)) {
      result = {
        name: 'Chromium'
        , chromium: t
        , version: getFirstMatch(/(?:chromium)[\s\/](\d+(?:\.\d+)?)/i) || versionIdentifier
      }
    }
    else if (/chrome|crios|crmo/i.test(ua)) {
      result = {
        name: 'Chrome'
        , chrome: t
        , version: getFirstMatch(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
      }
    }
    else if (android) {
      result = {
        name: 'Android'
        , version: versionIdentifier
      }
    }
    else if (/safari|applewebkit/i.test(ua)) {
      result = {
        name: 'Safari'
      , safari: t
      }
      if (versionIdentifier) {
        result.version = versionIdentifier
      }
    }
    else if (iosdevice) {
      result = {
        name : iosdevice == 'iphone' ? 'iPhone' : iosdevice == 'ipad' ? 'iPad' : 'iPod'
      }
      // WTF: version is not part of user agent in web apps
      if (versionIdentifier) {
        result.version = versionIdentifier
      }
    }
    else if(/googlebot/i.test(ua)) {
      result = {
        name: 'Googlebot'
      , googlebot: t
      , version: getFirstMatch(/googlebot\/(\d+(\.\d+))/i) || versionIdentifier
      }
    }
    else {
      result = {
        name: getFirstMatch(/^(.*)\/(.*) /),
        version: getSecondMatch(/^(.*)\/(.*) /)
     };
   }

    // set webkit or gecko flag for browsers based on these engines
    if (!result.msedge && /(apple)?webkit/i.test(ua)) {
      if (/(apple)?webkit\/537\.36/i.test(ua)) {
        result.name = result.name || "Blink"
        result.blink = t
      } else {
        result.name = result.name || "Webkit"
        result.webkit = t
      }
      if (!result.version && versionIdentifier) {
        result.version = versionIdentifier
      }
    } else if (!result.opera && /gecko\//i.test(ua)) {
      result.name = result.name || "Gecko"
      result.gecko = t
      result.version = result.version || getFirstMatch(/gecko\/(\d+(\.\d+)?)/i)
    }

    // set OS flags for platforms that have multiple browsers
    if (!result.windowsphone && (android || result.silk)) {
      result.android = t
      result.osname = 'Android'
    } else if (!result.windowsphone && iosdevice) {
      result[iosdevice] = t
      result.ios = t
      result.osname = 'iOS'
    } else if (mac) {
      result.mac = t
      result.osname = 'macOS'
    } else if (xbox) {
      result.xbox = t
      result.osname = 'Xbox'
    } else if (windows) {
      result.windows = t
      result.osname = 'Windows'
    } else if (linux) {
      result.linux = t
      result.osname = 'Linux'
    }

    function getWindowsVersion (s) {
      switch (s) {
        case 'NT': return 'NT'
        case 'XP': return 'XP'
        case 'NT 5.0': return '2000'
        case 'NT 5.1': return 'XP'
        case 'NT 5.2': return '2003'
        case 'NT 6.0': return 'Vista'
        case 'NT 6.1': return '7'
        case 'NT 6.2': return '8'
        case 'NT 6.3': return '8.1'
        case 'NT 10.0': return '10'
        default: return undefined
      }
    }

    // OS version extraction
    var osVersion = '';
    if (result.windows) {
      osVersion = getWindowsVersion(getFirstMatch(/Windows ((NT|XP)( \d\d?.\d)?)/i))
    } else if (result.windowsphone) {
      osVersion = getFirstMatch(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i);
    } else if (result.mac) {
      osVersion = getFirstMatch(/Mac OS X (\d+([_\.\s]\d+)*)/i);
      osVersion = osVersion.replace(/[_\s]/g, '.');
    } else if (iosdevice) {
      osVersion = getFirstMatch(/os (\d+([_\s]\d+)*) like mac os x/i);
      osVersion = osVersion.replace(/[_\s]/g, '.');
    } else if (android) {
      osVersion = getFirstMatch(/android[ \/-](\d+(\.\d+)*)/i);
    } else if (result.webos) {
      osVersion = getFirstMatch(/(?:web|hpw)os\/(\d+(\.\d+)*)/i);
    } else if (result.blackberry) {
      osVersion = getFirstMatch(/rim\stablet\sos\s(\d+(\.\d+)*)/i);
    } else if (result.bada) {
      osVersion = getFirstMatch(/bada\/(\d+(\.\d+)*)/i);
    } else if (result.tizen) {
      osVersion = getFirstMatch(/tizen[\/\s](\d+(\.\d+)*)/i);
    }
    if (osVersion) {
      result.osversion = osVersion;
    }

    // device type extraction
    var osMajorVersion = !result.windows && osVersion.split('.')[0];
    if (
         tablet
      || nexusTablet
      || iosdevice == 'ipad'
      || (android && (osMajorVersion == 3 || (osMajorVersion >= 4 && !mobile)))
      || result.silk
    ) {
      result.tablet = t
    } else if (
         mobile
      || iosdevice == 'iphone'
      || iosdevice == 'ipod'
      || android
      || nexusMobile
      || result.blackberry
      || result.webos
      || result.bada
    ) {
      result.mobile = t
    }

    // Graded Browser Support
    // http://developer.yahoo.com/yui/articles/gbs
    if (result.msedge ||
        (result.msie && result.version >= 10) ||
        (result.yandexbrowser && result.version >= 15) ||
		    (result.vivaldi && result.version >= 1.0) ||
        (result.chrome && result.version >= 20) ||
        (result.samsungBrowser && result.version >= 4) ||
        (result.whale && compareVersions([result.version, '1.0']) === 1) ||
        (result.mzbrowser && compareVersions([result.version, '6.0']) === 1) ||
        (result.focus && compareVersions([result.version, '1.0']) === 1) ||
        (result.firefox && result.version >= 20.0) ||
        (result.safari && result.version >= 6) ||
        (result.opera && result.version >= 10.0) ||
        (result.ios && result.osversion && result.osversion.split(".")[0] >= 6) ||
        (result.blackberry && result.version >= 10.1)
        || (result.chromium && result.version >= 20)
        ) {
      result.a = t;
    }
    else if ((result.msie && result.version < 10) ||
        (result.chrome && result.version < 20) ||
        (result.firefox && result.version < 20.0) ||
        (result.safari && result.version < 6) ||
        (result.opera && result.version < 10.0) ||
        (result.ios && result.osversion && result.osversion.split(".")[0] < 6)
        || (result.chromium && result.version < 20)
        ) {
      result.c = t
    } else result.x = t

    return result
  }

  var bowser = detect(typeof navigator !== 'undefined' ? navigator.userAgent || '' : '')

  bowser.test = function (browserList) {
    for (var i = 0; i < browserList.length; ++i) {
      var browserItem = browserList[i];
      if (typeof browserItem=== 'string') {
        if (browserItem in bowser) {
          return true;
        }
      }
    }
    return false;
  }

  /**
   * Get version precisions count
   *
   * @example
   *   getVersionPrecision("1.10.3") // 3
   *
   * @param  {string} version
   * @return {number}
   */
  function getVersionPrecision(version) {
    return version.split(".").length;
  }

  /**
   * Array::map polyfill
   *
   * @param  {Array} arr
   * @param  {Function} iterator
   * @return {Array}
   */
  function map(arr, iterator) {
    var result = [], i;
    if (Array.prototype.map) {
      return Array.prototype.map.call(arr, iterator);
    }
    for (i = 0; i < arr.length; i++) {
      result.push(iterator(arr[i]));
    }
    return result;
  }

  /**
   * Calculate browser version weight
   *
   * @example
   *   compareVersions(['1.10.2.1',  '1.8.2.1.90'])    // 1
   *   compareVersions(['1.010.2.1', '1.09.2.1.90']);  // 1
   *   compareVersions(['1.10.2.1',  '1.10.2.1']);     // 0
   *   compareVersions(['1.10.2.1',  '1.0800.2']);     // -1
   *
   * @param  {Array<String>} versions versions to compare
   * @return {Number} comparison result
   */
  function compareVersions(versions) {
    // 1) get common precision for both versions, for example for "10.0" and "9" it should be 2
    var precision = Math.max(getVersionPrecision(versions[0]), getVersionPrecision(versions[1]));
    var chunks = map(versions, function (version) {
      var delta = precision - getVersionPrecision(version);

      // 2) "9" -> "9.0" (for precision = 2)
      version = version + new Array(delta + 1).join(".0");

      // 3) "9.0" -> ["000000000"", "000000009"]
      return map(version.split("."), function (chunk) {
        return new Array(20 - chunk.length).join("0") + chunk;
      }).reverse();
    });

    // iterate in reverse order by reversed chunks array
    while (--precision >= 0) {
      // 4) compare: "000000009" > "000000010" = false (but "9" > "10" = true)
      if (chunks[0][precision] > chunks[1][precision]) {
        return 1;
      }
      else if (chunks[0][precision] === chunks[1][precision]) {
        if (precision === 0) {
          // all version chunks are same
          return 0;
        }
      }
      else {
        return -1;
      }
    }
  }

  /**
   * Check if browser is unsupported
   *
   * @example
   *   bowser.isUnsupportedBrowser({
   *     msie: "10",
   *     firefox: "23",
   *     chrome: "29",
   *     safari: "5.1",
   *     opera: "16",
   *     phantom: "534"
   *   });
   *
   * @param  {Object}  minVersions map of minimal version to browser
   * @param  {Boolean} [strictMode = false] flag to return false if browser wasn't found in map
   * @param  {String}  [ua] user agent string
   * @return {Boolean}
   */
  function isUnsupportedBrowser(minVersions, strictMode, ua) {
    var _bowser = bowser;

    // make strictMode param optional with ua param usage
    if (typeof strictMode === 'string') {
      ua = strictMode;
      strictMode = void(0);
    }

    if (strictMode === void(0)) {
      strictMode = false;
    }
    if (ua) {
      _bowser = detect(ua);
    }

    var version = "" + _bowser.version;
    for (var browser in minVersions) {
      if (minVersions.hasOwnProperty(browser)) {
        if (_bowser[browser]) {
          if (typeof minVersions[browser] !== 'string') {
            throw new Error('Browser version in the minVersion map should be a string: ' + browser + ': ' + String(minVersions));
          }

          // browser version and min supported version.
          return compareVersions([version, minVersions[browser]]) < 0;
        }
      }
    }

    return strictMode; // not found
  }

  /**
   * Check if browser is supported
   *
   * @param  {Object} minVersions map of minimal version to browser
   * @param  {Boolean} [strictMode = false] flag to return false if browser wasn't found in map
   * @param  {String}  [ua] user agent string
   * @return {Boolean}
   */
  function check(minVersions, strictMode, ua) {
    return !isUnsupportedBrowser(minVersions, strictMode, ua);
  }

  bowser.isUnsupportedBrowser = isUnsupportedBrowser;
  bowser.compareVersions = compareVersions;
  bowser.check = check;

  /*
   * Set our detect method to the main bowser object so we can
   * reuse it to test other user agents.
   * This is needed to implement future tests.
   */
  bowser._detect = detect;

  /*
   * Set our detect public method to the main bowser object
   * This is needed to implement bowser in server side
   */
  bowser.detect = detect;
  return bowser
});


/***/ }),

/***/ "./node_modules/css-in-js-utils/lib/hyphenateProperty.js":
/*!***************************************************************!*\
  !*** ./node_modules/css-in-js-utils/lib/hyphenateProperty.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = hyphenateProperty;

var _hyphenateStyleName = __webpack_require__(/*! hyphenate-style-name */ "./node_modules/hyphenate-style-name/index.js");

var _hyphenateStyleName2 = _interopRequireDefault(_hyphenateStyleName);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function hyphenateProperty(property) {
  return (0, _hyphenateStyleName2.default)(property);
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/css-in-js-utils/lib/isPrefixedValue.js":
/*!*************************************************************!*\
  !*** ./node_modules/css-in-js-utils/lib/isPrefixedValue.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isPrefixedValue;
var regex = /-webkit-|-moz-|-ms-/;

function isPrefixedValue(value) {
  return typeof value === 'string' && regex.test(value);
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/exenv/index.js":
/*!*************************************!*\
  !*** ./node_modules/exenv/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2015 Jed Watson.
  Based on code that is Copyright 2013-2015, Facebook, Inc.
  All rights reserved.
*/
/* global define */

(function () {
	'use strict';

	var canUseDOM = !!(
		typeof window !== 'undefined' &&
		window.document &&
		window.document.createElement
	);

	var ExecutionEnvironment = {

		canUseDOM: canUseDOM,

		canUseWorkers: typeof Worker !== 'undefined',

		canUseEventListeners:
			canUseDOM && !!(window.addEventListener || window.attachEvent),

		canUseViewport: canUseDOM && !!window.screen

	};

	if (true) {
		!(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return ExecutionEnvironment;
		}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}

}());


/***/ }),

/***/ "./node_modules/hyphenate-style-name/index.js":
/*!****************************************************!*\
  !*** ./node_modules/hyphenate-style-name/index.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* eslint-disable no-var, prefer-template */
var uppercasePattern = /[A-Z]/g
var msPattern = /^ms-/
var cache = {}

function toHyphenLower(match) {
  return '-' + match.toLowerCase()
}

function hyphenateStyleName(name) {
  if (cache.hasOwnProperty(name)) {
    return cache[name]
  }

  var hName = name.replace(uppercasePattern, toHyphenLower)
  return (cache[name] = msPattern.test(hName) ? '-' + hName : hName)
}

/* harmony default export */ __webpack_exports__["default"] = (hyphenateStyleName);


/***/ }),

/***/ "./node_modules/inline-style-prefixer/dynamic/createPrefixer.js":
/*!**********************************************************************!*\
  !*** ./node_modules/inline-style-prefixer/dynamic/createPrefixer.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.default = createPrefixer;

var _getBrowserInformation = __webpack_require__(/*! ../utils/getBrowserInformation */ "./node_modules/inline-style-prefixer/utils/getBrowserInformation.js");

var _getBrowserInformation2 = _interopRequireDefault(_getBrowserInformation);

var _getPrefixedKeyframes = __webpack_require__(/*! ../utils/getPrefixedKeyframes */ "./node_modules/inline-style-prefixer/utils/getPrefixedKeyframes.js");

var _getPrefixedKeyframes2 = _interopRequireDefault(_getPrefixedKeyframes);

var _capitalizeString = __webpack_require__(/*! ../utils/capitalizeString */ "./node_modules/inline-style-prefixer/utils/capitalizeString.js");

var _capitalizeString2 = _interopRequireDefault(_capitalizeString);

var _addNewValuesOnly = __webpack_require__(/*! ../utils/addNewValuesOnly */ "./node_modules/inline-style-prefixer/utils/addNewValuesOnly.js");

var _addNewValuesOnly2 = _interopRequireDefault(_addNewValuesOnly);

var _isObject = __webpack_require__(/*! ../utils/isObject */ "./node_modules/inline-style-prefixer/utils/isObject.js");

var _isObject2 = _interopRequireDefault(_isObject);

var _prefixValue = __webpack_require__(/*! ../utils/prefixValue */ "./node_modules/inline-style-prefixer/utils/prefixValue.js");

var _prefixValue2 = _interopRequireDefault(_prefixValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function createPrefixer(_ref) {
  var prefixMap = _ref.prefixMap,
      plugins = _ref.plugins;
  var fallback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function (style) {
    return style;
  };

  return function () {
    /**
     * Instantiante a new prefixer
     * @param {string} userAgent - userAgent to gather prefix information according to caniuse.com
     * @param {string} keepUnprefixed - keeps unprefixed properties and values
     */
    function Prefixer() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      _classCallCheck(this, Prefixer);

      var defaultUserAgent = typeof navigator !== 'undefined' ? navigator.userAgent : undefined;

      this._userAgent = options.userAgent || defaultUserAgent;
      this._keepUnprefixed = options.keepUnprefixed || false;

      if (this._userAgent) {
        this._browserInfo = (0, _getBrowserInformation2.default)(this._userAgent);
      }

      // Checks if the userAgent was resolved correctly
      if (this._browserInfo && this._browserInfo.cssPrefix) {
        this.prefixedKeyframes = (0, _getPrefixedKeyframes2.default)(this._browserInfo.browserName, this._browserInfo.browserVersion, this._browserInfo.cssPrefix);
      } else {
        this._useFallback = true;
        return false;
      }

      var prefixData = this._browserInfo.browserName && prefixMap[this._browserInfo.browserName];
      if (prefixData) {
        this._requiresPrefix = {};

        for (var property in prefixData) {
          if (prefixData[property] >= this._browserInfo.browserVersion) {
            this._requiresPrefix[property] = true;
          }
        }

        this._hasPropsRequiringPrefix = Object.keys(this._requiresPrefix).length > 0;
      } else {
        this._useFallback = true;
      }

      this._metaData = {
        browserVersion: this._browserInfo.browserVersion,
        browserName: this._browserInfo.browserName,
        cssPrefix: this._browserInfo.cssPrefix,
        jsPrefix: this._browserInfo.jsPrefix,
        keepUnprefixed: this._keepUnprefixed,
        requiresPrefix: this._requiresPrefix
      };
    }

    _createClass(Prefixer, [{
      key: 'prefix',
      value: function prefix(style) {
        // use static prefixer as fallback if userAgent can not be resolved
        if (this._useFallback) {
          return fallback(style);
        }

        // only add prefixes if needed
        if (!this._hasPropsRequiringPrefix) {
          return style;
        }

        return this._prefixStyle(style);
      }
    }, {
      key: '_prefixStyle',
      value: function _prefixStyle(style) {
        for (var property in style) {
          var value = style[property];

          // handle nested objects
          if ((0, _isObject2.default)(value)) {
            style[property] = this.prefix(value);
            // handle array values
          } else if (Array.isArray(value)) {
            var combinedValue = [];

            for (var i = 0, len = value.length; i < len; ++i) {
              var processedValue = (0, _prefixValue2.default)(plugins, property, value[i], style, this._metaData);
              (0, _addNewValuesOnly2.default)(combinedValue, processedValue || value[i]);
            }

            // only modify the value if it was touched
            // by any plugin to prevent unnecessary mutations
            if (combinedValue.length > 0) {
              style[property] = combinedValue;
            }
          } else {
            var _processedValue = (0, _prefixValue2.default)(plugins, property, value, style, this._metaData);

            // only modify the value if it was touched
            // by any plugin to prevent unnecessary mutations
            if (_processedValue) {
              style[property] = _processedValue;
            }

            // add prefixes to properties
            if (this._requiresPrefix.hasOwnProperty(property)) {
              style[this._browserInfo.jsPrefix + (0, _capitalizeString2.default)(property)] = value;
              if (!this._keepUnprefixed) {
                delete style[property];
              }
            }
          }
        }

        return style;
      }

      /**
       * Returns a prefixed version of the style object using all vendor prefixes
       * @param {Object} styles - Style object that gets prefixed properties added
       * @returns {Object} - Style object with prefixed properties and values
       */

    }], [{
      key: 'prefixAll',
      value: function prefixAll(styles) {
        return fallback(styles);
      }
    }]);

    return Prefixer;
  }();
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/inline-style-prefixer/dynamic/plugins/calc.js":
/*!********************************************************************!*\
  !*** ./node_modules/inline-style-prefixer/dynamic/plugins/calc.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = calc;

var _getPrefixedValue = __webpack_require__(/*! ../../utils/getPrefixedValue */ "./node_modules/inline-style-prefixer/utils/getPrefixedValue.js");

var _getPrefixedValue2 = _interopRequireDefault(_getPrefixedValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function calc(property, value, style, _ref) {
  var browserName = _ref.browserName,
      browserVersion = _ref.browserVersion,
      cssPrefix = _ref.cssPrefix,
      keepUnprefixed = _ref.keepUnprefixed;

  if (typeof value === 'string' && value.indexOf('calc(') > -1 && (browserName === 'firefox' && browserVersion < 15 || browserName === 'chrome' && browserVersion < 25 || browserName === 'safari' && browserVersion < 6.1 || browserName === 'ios_saf' && browserVersion < 7)) {
    return (0, _getPrefixedValue2.default)(value.replace(/calc\(/g, cssPrefix + 'calc('), value, keepUnprefixed);
  }
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/inline-style-prefixer/dynamic/plugins/crossFade.js":
/*!*************************************************************************!*\
  !*** ./node_modules/inline-style-prefixer/dynamic/plugins/crossFade.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = crossFade;

var _getPrefixedValue = __webpack_require__(/*! ../../utils/getPrefixedValue */ "./node_modules/inline-style-prefixer/utils/getPrefixedValue.js");

var _getPrefixedValue2 = _interopRequireDefault(_getPrefixedValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function crossFade(property, value, style, _ref) {
  var browserName = _ref.browserName,
      browserVersion = _ref.browserVersion,
      cssPrefix = _ref.cssPrefix,
      keepUnprefixed = _ref.keepUnprefixed;

  if (typeof value === 'string' && value.indexOf('cross-fade(') > -1 && (browserName === 'chrome' || browserName === 'opera' || browserName === 'and_chr' || (browserName === 'ios_saf' || browserName === 'safari') && browserVersion < 10)) {
    return (0, _getPrefixedValue2.default)(value.replace(/cross-fade\(/g, cssPrefix + 'cross-fade('), value, keepUnprefixed);
  }
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/inline-style-prefixer/dynamic/plugins/cursor.js":
/*!**********************************************************************!*\
  !*** ./node_modules/inline-style-prefixer/dynamic/plugins/cursor.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = cursor;

var _getPrefixedValue = __webpack_require__(/*! ../../utils/getPrefixedValue */ "./node_modules/inline-style-prefixer/utils/getPrefixedValue.js");

var _getPrefixedValue2 = _interopRequireDefault(_getPrefixedValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var grabValues = {
  grab: true,
  grabbing: true
};


var zoomValues = {
  'zoom-in': true,
  'zoom-out': true
};

function cursor(property, value, style, _ref) {
  var browserName = _ref.browserName,
      browserVersion = _ref.browserVersion,
      cssPrefix = _ref.cssPrefix,
      keepUnprefixed = _ref.keepUnprefixed;

  // adds prefixes for firefox, chrome, safari, and opera regardless of
  // version until a reliable browser support info can be found
  // see: https://github.com/rofrischmann/inline-style-prefixer/issues/79
  if (property === 'cursor' && grabValues[value] && (browserName === 'firefox' || browserName === 'chrome' || browserName === 'safari' || browserName === 'opera')) {
    return (0, _getPrefixedValue2.default)(cssPrefix + value, value, keepUnprefixed);
  }

  if (property === 'cursor' && zoomValues[value] && (browserName === 'firefox' && browserVersion < 24 || browserName === 'chrome' && browserVersion < 37 || browserName === 'safari' && browserVersion < 9 || browserName === 'opera' && browserVersion < 24)) {
    return (0, _getPrefixedValue2.default)(cssPrefix + value, value, keepUnprefixed);
  }
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/inline-style-prefixer/dynamic/plugins/filter.js":
/*!**********************************************************************!*\
  !*** ./node_modules/inline-style-prefixer/dynamic/plugins/filter.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = filter;

var _getPrefixedValue = __webpack_require__(/*! ../../utils/getPrefixedValue */ "./node_modules/inline-style-prefixer/utils/getPrefixedValue.js");

var _getPrefixedValue2 = _interopRequireDefault(_getPrefixedValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function filter(property, value, style, _ref) {
  var browserName = _ref.browserName,
      browserVersion = _ref.browserVersion,
      cssPrefix = _ref.cssPrefix,
      keepUnprefixed = _ref.keepUnprefixed;

  if (typeof value === 'string' && value.indexOf('filter(') > -1 && (browserName === 'ios_saf' || browserName === 'safari' && browserVersion < 9.1)) {
    return (0, _getPrefixedValue2.default)(value.replace(/filter\(/g, cssPrefix + 'filter('), value, keepUnprefixed);
  }
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/inline-style-prefixer/dynamic/plugins/flex.js":
/*!********************************************************************!*\
  !*** ./node_modules/inline-style-prefixer/dynamic/plugins/flex.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = flex;

var _getPrefixedValue = __webpack_require__(/*! ../../utils/getPrefixedValue */ "./node_modules/inline-style-prefixer/utils/getPrefixedValue.js");

var _getPrefixedValue2 = _interopRequireDefault(_getPrefixedValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var values = {
  flex: true,
  'inline-flex': true
};
function flex(property, value, style, _ref) {
  var browserName = _ref.browserName,
      browserVersion = _ref.browserVersion,
      cssPrefix = _ref.cssPrefix,
      keepUnprefixed = _ref.keepUnprefixed;

  if (property === 'display' && values[value] && (browserName === 'chrome' && browserVersion < 29 && browserVersion > 20 || (browserName === 'safari' || browserName === 'ios_saf') && browserVersion < 9 && browserVersion > 6 || browserName === 'opera' && (browserVersion === 15 || browserVersion === 16))) {
    return (0, _getPrefixedValue2.default)(cssPrefix + value, value, keepUnprefixed);
  }
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/inline-style-prefixer/dynamic/plugins/flexboxIE.js":
/*!*************************************************************************!*\
  !*** ./node_modules/inline-style-prefixer/dynamic/plugins/flexboxIE.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = flexboxIE;

var _getPrefixedValue = __webpack_require__(/*! ../../utils/getPrefixedValue */ "./node_modules/inline-style-prefixer/utils/getPrefixedValue.js");

var _getPrefixedValue2 = _interopRequireDefault(_getPrefixedValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var alternativeValues = {
  'space-around': 'distribute',
  'space-between': 'justify',
  'flex-start': 'start',
  'flex-end': 'end',
  flex: 'flexbox',
  'inline-flex': 'inline-flexbox'
};

var alternativeProps = {
  alignContent: 'msFlexLinePack',
  alignSelf: 'msFlexItemAlign',
  alignItems: 'msFlexAlign',
  justifyContent: 'msFlexPack',
  order: 'msFlexOrder',
  flexGrow: 'msFlexPositive',
  flexShrink: 'msFlexNegative',
  flexBasis: 'msFlexPreferredSize'
};

function flexboxIE(property, value, style, _ref) {
  var browserName = _ref.browserName,
      browserVersion = _ref.browserVersion,
      cssPrefix = _ref.cssPrefix,
      keepUnprefixed = _ref.keepUnprefixed,
      requiresPrefix = _ref.requiresPrefix;

  if ((alternativeProps.hasOwnProperty(property) || property === 'display' && typeof value === 'string' && value.indexOf('flex') > -1) && (browserName === 'ie_mob' || browserName === 'ie') && browserVersion === 10) {
    delete requiresPrefix[property];

    if (!keepUnprefixed && !Array.isArray(style[property])) {
      delete style[property];
    }
    if (property === 'display' && alternativeValues.hasOwnProperty(value)) {
      return (0, _getPrefixedValue2.default)(cssPrefix + alternativeValues[value], value, keepUnprefixed);
    }
    if (alternativeProps.hasOwnProperty(property)) {
      style[alternativeProps[property]] = alternativeValues[value] || value;
    }
  }
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/inline-style-prefixer/dynamic/plugins/flexboxOld.js":
/*!**************************************************************************!*\
  !*** ./node_modules/inline-style-prefixer/dynamic/plugins/flexboxOld.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = flexboxOld;

var _getPrefixedValue = __webpack_require__(/*! ../../utils/getPrefixedValue */ "./node_modules/inline-style-prefixer/utils/getPrefixedValue.js");

var _getPrefixedValue2 = _interopRequireDefault(_getPrefixedValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var alternativeValues = {
  'space-around': 'justify',
  'space-between': 'justify',
  'flex-start': 'start',
  'flex-end': 'end',
  'wrap-reverse': 'multiple',
  wrap: 'multiple',
  flex: 'box',
  'inline-flex': 'inline-box'
};


var alternativeProps = {
  alignItems: 'WebkitBoxAlign',
  justifyContent: 'WebkitBoxPack',
  flexWrap: 'WebkitBoxLines',
  flexGrow: 'WebkitBoxFlex'
};

var otherProps = ['alignContent', 'alignSelf', 'order', 'flexGrow', 'flexShrink', 'flexBasis', 'flexDirection'];
var properties = Object.keys(alternativeProps).concat(otherProps);

function flexboxOld(property, value, style, _ref) {
  var browserName = _ref.browserName,
      browserVersion = _ref.browserVersion,
      cssPrefix = _ref.cssPrefix,
      keepUnprefixed = _ref.keepUnprefixed,
      requiresPrefix = _ref.requiresPrefix;

  if ((properties.indexOf(property) > -1 || property === 'display' && typeof value === 'string' && value.indexOf('flex') > -1) && (browserName === 'firefox' && browserVersion < 22 || browserName === 'chrome' && browserVersion < 21 || (browserName === 'safari' || browserName === 'ios_saf') && browserVersion <= 6.1 || browserName === 'android' && browserVersion < 4.4 || browserName === 'and_uc')) {
    delete requiresPrefix[property];

    if (!keepUnprefixed && !Array.isArray(style[property])) {
      delete style[property];
    }
    if (property === 'flexDirection' && typeof value === 'string') {
      if (value.indexOf('column') > -1) {
        style.WebkitBoxOrient = 'vertical';
      } else {
        style.WebkitBoxOrient = 'horizontal';
      }
      if (value.indexOf('reverse') > -1) {
        style.WebkitBoxDirection = 'reverse';
      } else {
        style.WebkitBoxDirection = 'normal';
      }
    }
    if (property === 'display' && alternativeValues.hasOwnProperty(value)) {
      return (0, _getPrefixedValue2.default)(cssPrefix + alternativeValues[value], value, keepUnprefixed);
    }
    if (alternativeProps.hasOwnProperty(property)) {
      style[alternativeProps[property]] = alternativeValues[value] || value;
    }
  }
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/inline-style-prefixer/dynamic/plugins/gradient.js":
/*!************************************************************************!*\
  !*** ./node_modules/inline-style-prefixer/dynamic/plugins/gradient.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = gradient;

var _getPrefixedValue = __webpack_require__(/*! ../../utils/getPrefixedValue */ "./node_modules/inline-style-prefixer/utils/getPrefixedValue.js");

var _getPrefixedValue2 = _interopRequireDefault(_getPrefixedValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var values = /linear-gradient|radial-gradient|repeating-linear-gradient|repeating-radial-gradient/gi;
function gradient(property, value, style, _ref) {
  var browserName = _ref.browserName,
      browserVersion = _ref.browserVersion,
      cssPrefix = _ref.cssPrefix,
      keepUnprefixed = _ref.keepUnprefixed;

  if (typeof value === 'string' && values.test(value) && (browserName === 'firefox' && browserVersion < 16 || browserName === 'chrome' && browserVersion < 26 || (browserName === 'safari' || browserName === 'ios_saf') && browserVersion < 7 || (browserName === 'opera' || browserName === 'op_mini') && browserVersion < 12.1 || browserName === 'android' && browserVersion < 4.4 || browserName === 'and_uc')) {
    return (0, _getPrefixedValue2.default)(value.replace(values, function (grad) {
      return cssPrefix + grad;
    }), value, keepUnprefixed);
  }
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/inline-style-prefixer/dynamic/plugins/imageSet.js":
/*!************************************************************************!*\
  !*** ./node_modules/inline-style-prefixer/dynamic/plugins/imageSet.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = imageSet;

var _getPrefixedValue = __webpack_require__(/*! ../../utils/getPrefixedValue */ "./node_modules/inline-style-prefixer/utils/getPrefixedValue.js");

var _getPrefixedValue2 = _interopRequireDefault(_getPrefixedValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function imageSet(property, value, style, _ref) {
  var browserName = _ref.browserName,
      cssPrefix = _ref.cssPrefix,
      keepUnprefixed = _ref.keepUnprefixed;

  if (typeof value === 'string' && value.indexOf('image-set(') > -1 && (browserName === 'chrome' || browserName === 'opera' || browserName === 'and_chr' || browserName === 'and_uc' || browserName === 'ios_saf' || browserName === 'safari')) {
    return (0, _getPrefixedValue2.default)(value.replace(/image-set\(/g, cssPrefix + 'image-set('), value, keepUnprefixed);
  }
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/inline-style-prefixer/dynamic/plugins/position.js":
/*!************************************************************************!*\
  !*** ./node_modules/inline-style-prefixer/dynamic/plugins/position.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = position;

var _getPrefixedValue = __webpack_require__(/*! ../../utils/getPrefixedValue */ "./node_modules/inline-style-prefixer/utils/getPrefixedValue.js");

var _getPrefixedValue2 = _interopRequireDefault(_getPrefixedValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function position(property, value, style, _ref) {
  var browserName = _ref.browserName,
      cssPrefix = _ref.cssPrefix,
      keepUnprefixed = _ref.keepUnprefixed;

  if (property === 'position' && value === 'sticky' && (browserName === 'safari' || browserName === 'ios_saf')) {
    return (0, _getPrefixedValue2.default)(cssPrefix + value, value, keepUnprefixed);
  }
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/inline-style-prefixer/dynamic/plugins/sizing.js":
/*!**********************************************************************!*\
  !*** ./node_modules/inline-style-prefixer/dynamic/plugins/sizing.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = sizing;

var _getPrefixedValue = __webpack_require__(/*! ../../utils/getPrefixedValue */ "./node_modules/inline-style-prefixer/utils/getPrefixedValue.js");

var _getPrefixedValue2 = _interopRequireDefault(_getPrefixedValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var properties = {
  maxHeight: true,
  maxWidth: true,
  width: true,
  height: true,
  columnWidth: true,
  minWidth: true,
  minHeight: true
};

var values = {
  'min-content': true,
  'max-content': true,
  'fill-available': true,
  'fit-content': true,
  'contain-floats': true

  // TODO: chrome & opera support it
};function sizing(property, value, style, _ref) {
  var cssPrefix = _ref.cssPrefix,
      keepUnprefixed = _ref.keepUnprefixed;

  // This might change in the future
  // Keep an eye on it
  if (properties.hasOwnProperty(property) && values.hasOwnProperty(value)) {
    return (0, _getPrefixedValue2.default)(cssPrefix + value, value, keepUnprefixed);
  }
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/inline-style-prefixer/dynamic/plugins/transition.js":
/*!**************************************************************************!*\
  !*** ./node_modules/inline-style-prefixer/dynamic/plugins/transition.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = transition;

var _hyphenateProperty = __webpack_require__(/*! css-in-js-utils/lib/hyphenateProperty */ "./node_modules/css-in-js-utils/lib/hyphenateProperty.js");

var _hyphenateProperty2 = _interopRequireDefault(_hyphenateProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var properties = {
  transition: true,
  transitionProperty: true,
  WebkitTransition: true,
  WebkitTransitionProperty: true,
  MozTransition: true,
  MozTransitionProperty: true
};


var requiresPrefixDashCased = void 0;

function transition(property, value, style, _ref) {
  var cssPrefix = _ref.cssPrefix,
      keepUnprefixed = _ref.keepUnprefixed,
      requiresPrefix = _ref.requiresPrefix;

  if (typeof value === 'string' && properties.hasOwnProperty(property)) {
    // memoize the prefix array for later use
    if (!requiresPrefixDashCased) {
      requiresPrefixDashCased = Object.keys(requiresPrefix).map(function (prop) {
        return (0, _hyphenateProperty2.default)(prop);
      });
    }

    // only split multi values, not cubic beziers
    var multipleValues = value.split(/,(?![^()]*(?:\([^()]*\))?\))/g);

    requiresPrefixDashCased.forEach(function (prop) {
      multipleValues.forEach(function (val, index) {
        if (val.indexOf(prop) > -1 && prop !== 'order') {
          multipleValues[index] = val.replace(prop, cssPrefix + prop) + (keepUnprefixed ? ',' + val : '');
        }
      });
    });

    return multipleValues.join(',');
  }
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/inline-style-prefixer/static/createPrefixer.js":
/*!*********************************************************************!*\
  !*** ./node_modules/inline-style-prefixer/static/createPrefixer.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createPrefixer;

var _prefixProperty = __webpack_require__(/*! ../utils/prefixProperty */ "./node_modules/inline-style-prefixer/utils/prefixProperty.js");

var _prefixProperty2 = _interopRequireDefault(_prefixProperty);

var _prefixValue = __webpack_require__(/*! ../utils/prefixValue */ "./node_modules/inline-style-prefixer/utils/prefixValue.js");

var _prefixValue2 = _interopRequireDefault(_prefixValue);

var _addNewValuesOnly = __webpack_require__(/*! ../utils/addNewValuesOnly */ "./node_modules/inline-style-prefixer/utils/addNewValuesOnly.js");

var _addNewValuesOnly2 = _interopRequireDefault(_addNewValuesOnly);

var _isObject = __webpack_require__(/*! ../utils/isObject */ "./node_modules/inline-style-prefixer/utils/isObject.js");

var _isObject2 = _interopRequireDefault(_isObject);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function createPrefixer(_ref) {
  var prefixMap = _ref.prefixMap,
      plugins = _ref.plugins;

  function prefixAll(style) {
    for (var property in style) {
      var value = style[property];

      // handle nested objects
      if ((0, _isObject2.default)(value)) {
        style[property] = prefixAll(value);
        // handle array values
      } else if (Array.isArray(value)) {
        var combinedValue = [];

        for (var i = 0, len = value.length; i < len; ++i) {
          var processedValue = (0, _prefixValue2.default)(plugins, property, value[i], style, prefixMap);
          (0, _addNewValuesOnly2.default)(combinedValue, processedValue || value[i]);
        }

        // only modify the value if it was touched
        // by any plugin to prevent unnecessary mutations
        if (combinedValue.length > 0) {
          style[property] = combinedValue;
        }
      } else {
        var _processedValue = (0, _prefixValue2.default)(plugins, property, value, style, prefixMap);

        // only modify the value if it was touched
        // by any plugin to prevent unnecessary mutations
        if (_processedValue) {
          style[property] = _processedValue;
        }

        style = (0, _prefixProperty2.default)(prefixMap, property, style);
      }
    }

    return style;
  }

  return prefixAll;
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/inline-style-prefixer/static/plugins/calc.js":
/*!*******************************************************************!*\
  !*** ./node_modules/inline-style-prefixer/static/plugins/calc.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = calc;

var _isPrefixedValue = __webpack_require__(/*! css-in-js-utils/lib/isPrefixedValue */ "./node_modules/css-in-js-utils/lib/isPrefixedValue.js");

var _isPrefixedValue2 = _interopRequireDefault(_isPrefixedValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var prefixes = ['-webkit-', '-moz-', ''];
function calc(property, value) {
  if (typeof value === 'string' && !(0, _isPrefixedValue2.default)(value) && value.indexOf('calc(') > -1) {
    return prefixes.map(function (prefix) {
      return value.replace(/calc\(/g, prefix + 'calc(');
    });
  }
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/inline-style-prefixer/static/plugins/crossFade.js":
/*!************************************************************************!*\
  !*** ./node_modules/inline-style-prefixer/static/plugins/crossFade.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = crossFade;

var _isPrefixedValue = __webpack_require__(/*! css-in-js-utils/lib/isPrefixedValue */ "./node_modules/css-in-js-utils/lib/isPrefixedValue.js");

var _isPrefixedValue2 = _interopRequireDefault(_isPrefixedValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// http://caniuse.com/#search=cross-fade
var prefixes = ['-webkit-', ''];
function crossFade(property, value) {
  if (typeof value === 'string' && !(0, _isPrefixedValue2.default)(value) && value.indexOf('cross-fade(') > -1) {
    return prefixes.map(function (prefix) {
      return value.replace(/cross-fade\(/g, prefix + 'cross-fade(');
    });
  }
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/inline-style-prefixer/static/plugins/cursor.js":
/*!*********************************************************************!*\
  !*** ./node_modules/inline-style-prefixer/static/plugins/cursor.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = cursor;
var prefixes = ['-webkit-', '-moz-', ''];

var values = {
  'zoom-in': true,
  'zoom-out': true,
  grab: true,
  grabbing: true
};

function cursor(property, value) {
  if (property === 'cursor' && values.hasOwnProperty(value)) {
    return prefixes.map(function (prefix) {
      return prefix + value;
    });
  }
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/inline-style-prefixer/static/plugins/filter.js":
/*!*********************************************************************!*\
  !*** ./node_modules/inline-style-prefixer/static/plugins/filter.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = filter;

var _isPrefixedValue = __webpack_require__(/*! css-in-js-utils/lib/isPrefixedValue */ "./node_modules/css-in-js-utils/lib/isPrefixedValue.js");

var _isPrefixedValue2 = _interopRequireDefault(_isPrefixedValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// http://caniuse.com/#feat=css-filter-function
var prefixes = ['-webkit-', ''];
function filter(property, value) {
  if (typeof value === 'string' && !(0, _isPrefixedValue2.default)(value) && value.indexOf('filter(') > -1) {
    return prefixes.map(function (prefix) {
      return value.replace(/filter\(/g, prefix + 'filter(');
    });
  }
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/inline-style-prefixer/static/plugins/flex.js":
/*!*******************************************************************!*\
  !*** ./node_modules/inline-style-prefixer/static/plugins/flex.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = flex;
var values = {
  flex: ['-webkit-box', '-moz-box', '-ms-flexbox', '-webkit-flex', 'flex'],
  'inline-flex': ['-webkit-inline-box', '-moz-inline-box', '-ms-inline-flexbox', '-webkit-inline-flex', 'inline-flex']
};

function flex(property, value) {
  if (property === 'display' && values.hasOwnProperty(value)) {
    return values[value];
  }
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/inline-style-prefixer/static/plugins/flexboxIE.js":
/*!************************************************************************!*\
  !*** ./node_modules/inline-style-prefixer/static/plugins/flexboxIE.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = flexboxIE;
var alternativeValues = {
  'space-around': 'distribute',
  'space-between': 'justify',
  'flex-start': 'start',
  'flex-end': 'end'
};
var alternativeProps = {
  alignContent: 'msFlexLinePack',
  alignSelf: 'msFlexItemAlign',
  alignItems: 'msFlexAlign',
  justifyContent: 'msFlexPack',
  order: 'msFlexOrder',
  flexGrow: 'msFlexPositive',
  flexShrink: 'msFlexNegative',
  flexBasis: 'msFlexPreferredSize'
};

function flexboxIE(property, value, style) {
  if (alternativeProps.hasOwnProperty(property)) {
    style[alternativeProps[property]] = alternativeValues[value] || value;
  }
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/inline-style-prefixer/static/plugins/flexboxOld.js":
/*!*************************************************************************!*\
  !*** ./node_modules/inline-style-prefixer/static/plugins/flexboxOld.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = flexboxOld;
var alternativeValues = {
  'space-around': 'justify',
  'space-between': 'justify',
  'flex-start': 'start',
  'flex-end': 'end',
  'wrap-reverse': 'multiple',
  wrap: 'multiple',
  flex: 'box',
  'inline-flex': 'inline-box'
};

var alternativeProps = {
  alignItems: 'WebkitBoxAlign',
  justifyContent: 'WebkitBoxPack',
  flexWrap: 'WebkitBoxLines',
  flexGrow: 'WebkitBoxFlex'
};

function flexboxOld(property, value, style) {
  if (property === 'flexDirection' && typeof value === 'string') {
    if (value.indexOf('column') > -1) {
      style.WebkitBoxOrient = 'vertical';
    } else {
      style.WebkitBoxOrient = 'horizontal';
    }
    if (value.indexOf('reverse') > -1) {
      style.WebkitBoxDirection = 'reverse';
    } else {
      style.WebkitBoxDirection = 'normal';
    }
  }
  if (alternativeProps.hasOwnProperty(property)) {
    style[alternativeProps[property]] = alternativeValues[value] || value;
  }
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/inline-style-prefixer/static/plugins/gradient.js":
/*!***********************************************************************!*\
  !*** ./node_modules/inline-style-prefixer/static/plugins/gradient.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = gradient;

var _isPrefixedValue = __webpack_require__(/*! css-in-js-utils/lib/isPrefixedValue */ "./node_modules/css-in-js-utils/lib/isPrefixedValue.js");

var _isPrefixedValue2 = _interopRequireDefault(_isPrefixedValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var prefixes = ['-webkit-', '-moz-', ''];

var values = /linear-gradient|radial-gradient|repeating-linear-gradient|repeating-radial-gradient/gi;

function gradient(property, value) {
  if (typeof value === 'string' && !(0, _isPrefixedValue2.default)(value) && values.test(value)) {
    return prefixes.map(function (prefix) {
      return value.replace(values, function (grad) {
        return prefix + grad;
      });
    });
  }
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/inline-style-prefixer/static/plugins/imageSet.js":
/*!***********************************************************************!*\
  !*** ./node_modules/inline-style-prefixer/static/plugins/imageSet.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = imageSet;

var _isPrefixedValue = __webpack_require__(/*! css-in-js-utils/lib/isPrefixedValue */ "./node_modules/css-in-js-utils/lib/isPrefixedValue.js");

var _isPrefixedValue2 = _interopRequireDefault(_isPrefixedValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// http://caniuse.com/#feat=css-image-set
var prefixes = ['-webkit-', ''];
function imageSet(property, value) {
  if (typeof value === 'string' && !(0, _isPrefixedValue2.default)(value) && value.indexOf('image-set(') > -1) {
    return prefixes.map(function (prefix) {
      return value.replace(/image-set\(/g, prefix + 'image-set(');
    });
  }
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/inline-style-prefixer/static/plugins/position.js":
/*!***********************************************************************!*\
  !*** ./node_modules/inline-style-prefixer/static/plugins/position.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = position;
function position(property, value) {
  if (property === 'position' && value === 'sticky') {
    return ['-webkit-sticky', 'sticky'];
  }
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/inline-style-prefixer/static/plugins/sizing.js":
/*!*********************************************************************!*\
  !*** ./node_modules/inline-style-prefixer/static/plugins/sizing.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = sizing;
var prefixes = ['-webkit-', '-moz-', ''];

var properties = {
  maxHeight: true,
  maxWidth: true,
  width: true,
  height: true,
  columnWidth: true,
  minWidth: true,
  minHeight: true
};
var values = {
  'min-content': true,
  'max-content': true,
  'fill-available': true,
  'fit-content': true,
  'contain-floats': true
};

function sizing(property, value) {
  if (properties.hasOwnProperty(property) && values.hasOwnProperty(value)) {
    return prefixes.map(function (prefix) {
      return prefix + value;
    });
  }
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/inline-style-prefixer/static/plugins/transition.js":
/*!*************************************************************************!*\
  !*** ./node_modules/inline-style-prefixer/static/plugins/transition.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = transition;

var _hyphenateProperty = __webpack_require__(/*! css-in-js-utils/lib/hyphenateProperty */ "./node_modules/css-in-js-utils/lib/hyphenateProperty.js");

var _hyphenateProperty2 = _interopRequireDefault(_hyphenateProperty);

var _isPrefixedValue = __webpack_require__(/*! css-in-js-utils/lib/isPrefixedValue */ "./node_modules/css-in-js-utils/lib/isPrefixedValue.js");

var _isPrefixedValue2 = _interopRequireDefault(_isPrefixedValue);

var _capitalizeString = __webpack_require__(/*! ../../utils/capitalizeString */ "./node_modules/inline-style-prefixer/utils/capitalizeString.js");

var _capitalizeString2 = _interopRequireDefault(_capitalizeString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var properties = {
  transition: true,
  transitionProperty: true,
  WebkitTransition: true,
  WebkitTransitionProperty: true,
  MozTransition: true,
  MozTransitionProperty: true
};


var prefixMapping = {
  Webkit: '-webkit-',
  Moz: '-moz-',
  ms: '-ms-'
};

function prefixValue(value, propertyPrefixMap) {
  if ((0, _isPrefixedValue2.default)(value)) {
    return value;
  }

  // only split multi values, not cubic beziers
  var multipleValues = value.split(/,(?![^()]*(?:\([^()]*\))?\))/g);

  for (var i = 0, len = multipleValues.length; i < len; ++i) {
    var singleValue = multipleValues[i];
    var values = [singleValue];
    for (var property in propertyPrefixMap) {
      var dashCaseProperty = (0, _hyphenateProperty2.default)(property);

      if (singleValue.indexOf(dashCaseProperty) > -1 && dashCaseProperty !== 'order') {
        var prefixes = propertyPrefixMap[property];
        for (var j = 0, pLen = prefixes.length; j < pLen; ++j) {
          // join all prefixes and create a new value
          values.unshift(singleValue.replace(dashCaseProperty, prefixMapping[prefixes[j]] + dashCaseProperty));
        }
      }
    }

    multipleValues[i] = values.join(',');
  }

  return multipleValues.join(',');
}

function transition(property, value, style, propertyPrefixMap) {
  // also check for already prefixed transitions
  if (typeof value === 'string' && properties.hasOwnProperty(property)) {
    var outputValue = prefixValue(value, propertyPrefixMap);
    // if the property is already prefixed
    var webkitOutput = outputValue.split(/,(?![^()]*(?:\([^()]*\))?\))/g).filter(function (val) {
      return !/-moz-|-ms-/.test(val);
    }).join(',');

    if (property.indexOf('Webkit') > -1) {
      return webkitOutput;
    }

    var mozOutput = outputValue.split(/,(?![^()]*(?:\([^()]*\))?\))/g).filter(function (val) {
      return !/-webkit-|-ms-/.test(val);
    }).join(',');

    if (property.indexOf('Moz') > -1) {
      return mozOutput;
    }

    style['Webkit' + (0, _capitalizeString2.default)(property)] = webkitOutput;
    style['Moz' + (0, _capitalizeString2.default)(property)] = mozOutput;
    return outputValue;
  }
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/inline-style-prefixer/utils/addNewValuesOnly.js":
/*!**********************************************************************!*\
  !*** ./node_modules/inline-style-prefixer/utils/addNewValuesOnly.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = addNewValuesOnly;
function addIfNew(list, value) {
  if (list.indexOf(value) === -1) {
    list.push(value);
  }
}

function addNewValuesOnly(list, values) {
  if (Array.isArray(values)) {
    for (var i = 0, len = values.length; i < len; ++i) {
      addIfNew(list, values[i]);
    }
  } else {
    addIfNew(list, values);
  }
}
module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/inline-style-prefixer/utils/capitalizeString.js":
/*!**********************************************************************!*\
  !*** ./node_modules/inline-style-prefixer/utils/capitalizeString.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = capitalizeString;
function capitalizeString(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/inline-style-prefixer/utils/getBrowserInformation.js":
/*!***************************************************************************!*\
  !*** ./node_modules/inline-style-prefixer/utils/getBrowserInformation.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getBrowserInformation;

var _bowser = __webpack_require__(/*! bowser */ "./node_modules/bowser/src/bowser.js");

var _bowser2 = _interopRequireDefault(_bowser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var prefixByBrowser = {
  chrome: 'Webkit',
  safari: 'Webkit',
  ios: 'Webkit',
  android: 'Webkit',
  phantom: 'Webkit',
  opera: 'Webkit',
  webos: 'Webkit',
  blackberry: 'Webkit',
  bada: 'Webkit',
  tizen: 'Webkit',
  chromium: 'Webkit',
  vivaldi: 'Webkit',
  firefox: 'Moz',
  seamoney: 'Moz',
  sailfish: 'Moz',
  msie: 'ms',
  msedge: 'ms'
};


var browserByCanIuseAlias = {
  chrome: 'chrome',
  chromium: 'chrome',
  safari: 'safari',
  firfox: 'firefox',
  msedge: 'edge',
  opera: 'opera',
  vivaldi: 'opera',
  msie: 'ie'
};

function getBrowserName(browserInfo) {
  if (browserInfo.firefox) {
    return 'firefox';
  }

  if (browserInfo.mobile || browserInfo.tablet) {
    if (browserInfo.ios) {
      return 'ios_saf';
    } else if (browserInfo.android) {
      return 'android';
    } else if (browserInfo.opera) {
      return 'op_mini';
    }
  }

  for (var browser in browserByCanIuseAlias) {
    if (browserInfo.hasOwnProperty(browser)) {
      return browserByCanIuseAlias[browser];
    }
  }
}

/**
 * Uses bowser to get default browser browserInformation such as version and name
 * Evaluates bowser browserInfo and adds vendorPrefix browserInformation
 * @param {string} userAgent - userAgent that gets evaluated
 */
function getBrowserInformation(userAgent) {
  var browserInfo = _bowser2.default._detect(userAgent);

  if (browserInfo.yandexbrowser) {
    browserInfo = _bowser2.default._detect(userAgent.replace(/YaBrowser\/[0-9.]*/, ''));
  }

  for (var browser in prefixByBrowser) {
    if (browserInfo.hasOwnProperty(browser)) {
      var prefix = prefixByBrowser[browser];

      browserInfo.jsPrefix = prefix;
      browserInfo.cssPrefix = '-' + prefix.toLowerCase() + '-';
      break;
    }
  }

  browserInfo.browserName = getBrowserName(browserInfo);

  // For cordova IOS 8 the version is missing, set truncated osversion to prevent NaN
  if (browserInfo.version) {
    browserInfo.browserVersion = parseFloat(browserInfo.version);
  } else {
    browserInfo.browserVersion = parseInt(parseFloat(browserInfo.osversion), 10);
  }

  browserInfo.osVersion = parseFloat(browserInfo.osversion);

  // iOS forces all browsers to use Safari under the hood
  // as the Safari version seems to match the iOS version
  // we just explicitely use the osversion instead
  // https://github.com/rofrischmann/inline-style-prefixer/issues/72
  if (browserInfo.browserName === 'ios_saf' && browserInfo.browserVersion > browserInfo.osVersion) {
    browserInfo.browserVersion = browserInfo.osVersion;
  }

  // seperate native android chrome
  // https://github.com/rofrischmann/inline-style-prefixer/issues/45
  if (browserInfo.browserName === 'android' && browserInfo.chrome && browserInfo.browserVersion > 37) {
    browserInfo.browserName = 'and_chr';
  }

  // For android < 4.4 we want to check the osversion
  // not the chrome version, see issue #26
  // https://github.com/rofrischmann/inline-style-prefixer/issues/26
  if (browserInfo.browserName === 'android' && browserInfo.osVersion < 5) {
    browserInfo.browserVersion = browserInfo.osVersion;
  }

  // Samsung browser are basically build on Chrome > 44
  // https://github.com/rofrischmann/inline-style-prefixer/issues/102
  if (browserInfo.browserName === 'android' && browserInfo.samsungBrowser) {
    browserInfo.browserName = 'and_chr';
    browserInfo.browserVersion = 44;
  }

  return browserInfo;
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/inline-style-prefixer/utils/getPrefixedKeyframes.js":
/*!**************************************************************************!*\
  !*** ./node_modules/inline-style-prefixer/utils/getPrefixedKeyframes.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getPrefixedKeyframes;
function getPrefixedKeyframes(browserName, browserVersion, cssPrefix) {
  var prefixedKeyframes = 'keyframes';

  if (browserName === 'chrome' && browserVersion < 43 || (browserName === 'safari' || browserName === 'ios_saf') && browserVersion < 9 || browserName === 'opera' && browserVersion < 30 || browserName === 'android' && browserVersion <= 4.4 || browserName === 'and_uc') {
    return cssPrefix + prefixedKeyframes;
  }
  return prefixedKeyframes;
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/inline-style-prefixer/utils/getPrefixedValue.js":
/*!**********************************************************************!*\
  !*** ./node_modules/inline-style-prefixer/utils/getPrefixedValue.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getPrefixedValue;
function getPrefixedValue(prefixedValue, value, keepUnprefixed) {
  if (keepUnprefixed) {
    return [prefixedValue, value];
  }
  return prefixedValue;
}
module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/inline-style-prefixer/utils/isObject.js":
/*!**************************************************************!*\
  !*** ./node_modules/inline-style-prefixer/utils/isObject.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isObject;
function isObject(value) {
  return value instanceof Object && !Array.isArray(value);
}
module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/inline-style-prefixer/utils/prefixProperty.js":
/*!********************************************************************!*\
  !*** ./node_modules/inline-style-prefixer/utils/prefixProperty.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = prefixProperty;

var _capitalizeString = __webpack_require__(/*! ./capitalizeString */ "./node_modules/inline-style-prefixer/utils/capitalizeString.js");

var _capitalizeString2 = _interopRequireDefault(_capitalizeString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function prefixProperty(prefixProperties, property, style) {
  if (prefixProperties.hasOwnProperty(property)) {
    var newStyle = {};
    var requiredPrefixes = prefixProperties[property];
    var capitalizedProperty = (0, _capitalizeString2.default)(property);
    var keys = Object.keys(style);
    for (var i = 0; i < keys.length; i++) {
      var styleProperty = keys[i];
      if (styleProperty === property) {
        for (var j = 0; j < requiredPrefixes.length; j++) {
          newStyle[requiredPrefixes[j] + capitalizedProperty] = style[property];
        }
      }
      newStyle[styleProperty] = style[styleProperty];
    }
    return newStyle;
  }
  return style;
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/inline-style-prefixer/utils/prefixValue.js":
/*!*****************************************************************!*\
  !*** ./node_modules/inline-style-prefixer/utils/prefixValue.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = prefixValue;
function prefixValue(plugins, property, value, style, metaData) {
  for (var i = 0, len = plugins.length; i < len; ++i) {
    var processedValue = plugins[i](property, value, style, metaData);

    // we can stop processing if a value is returned
    // as all plugin criteria are unique
    if (processedValue) {
      return processedValue;
    }
  }
}
module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Freading-list&absolutePagePath=%2FUsers%2Frichkolasa%2FDocuments%2FDev%2Frichardkolasacom%2Fpages%2Freading-list.js!./":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Freading-list&absolutePagePath=%2FUsers%2Frichkolasa%2FDocuments%2FDev%2Frichardkolasacom%2Fpages%2Freading-list.js ***!
  \*************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    (window.__NEXT_P=window.__NEXT_P||[]).push(["/reading-list", function() {
      var page = __webpack_require__(/*! ./pages/reading-list.js */ "./pages/reading-list.js")
      if(true) {
        module.hot.accept(/*! ./pages/reading-list.js */ "./pages/reading-list.js", function() {
          if(!next.router.components["/reading-list"]) return
          var updatedPage = __webpack_require__(/*! ./pages/reading-list.js */ "./pages/reading-list.js")
          next.router.update("/reading-list", updatedPage.default || updatedPage)
        })
      }
      return { page: page.default || page }
    }]);
  

/***/ }),

/***/ "./node_modules/object-assign/index.js":
/*!***************************************************************************************************!*\
  !*** delegated ./node_modules/object-assign/index.js from dll-reference dll_3681e7fd756237ce51c6 ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_3681e7fd756237ce51c6 */ "dll-reference dll_3681e7fd756237ce51c6"))("./node_modules/object-assign/index.js");

/***/ }),

/***/ "./node_modules/prop-types/checkPropTypes.js":
/*!*********************************************************************************************************!*\
  !*** delegated ./node_modules/prop-types/checkPropTypes.js from dll-reference dll_3681e7fd756237ce51c6 ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_3681e7fd756237ce51c6 */ "dll-reference dll_3681e7fd756237ce51c6"))("./node_modules/prop-types/checkPropTypes.js");

/***/ }),

/***/ "./node_modules/prop-types/factoryWithTypeCheckers.js":
/*!************************************************************!*\
  !*** ./node_modules/prop-types/factoryWithTypeCheckers.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var assign = __webpack_require__(/*! object-assign */ "./node_modules/object-assign/index.js");

var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
var checkPropTypes = __webpack_require__(/*! ./checkPropTypes */ "./node_modules/prop-types/checkPropTypes.js");

var printWarning = function() {};

if (true) {
  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (true) {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if ( true && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
       true ? printWarning('Invalid argument supplied to oneOf, expected an instance of array.') : undefined;
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues);
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (propValue.hasOwnProperty(key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
       true ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : undefined;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ "./node_modules/prop-types/index.js":
/*!******************************************!*\
  !*** ./node_modules/prop-types/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (true) {
  var REACT_ELEMENT_TYPE = (typeof Symbol === 'function' &&
    Symbol.for &&
    Symbol.for('react.element')) ||
    0xeac7;

  var isValidElement = function(object) {
    return typeof object === 'object' &&
      object !== null &&
      object.$$typeof === REACT_ELEMENT_TYPE;
  };

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(/*! ./factoryWithTypeCheckers */ "./node_modules/prop-types/factoryWithTypeCheckers.js")(isValidElement, throwOnDirectAccess);
} else {}


/***/ }),

/***/ "./node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!*******************************************************************************************************************!*\
  !*** delegated ./node_modules/prop-types/lib/ReactPropTypesSecret.js from dll-reference dll_3681e7fd756237ce51c6 ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_3681e7fd756237ce51c6 */ "dll-reference dll_3681e7fd756237ce51c6"))("./node_modules/prop-types/lib/ReactPropTypesSecret.js");

/***/ }),

/***/ "./node_modules/radium/es/append-important-to-each-value.js":
/*!******************************************************************!*\
  !*** ./node_modules/radium/es/append-important-to-each-value.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return appendImportantToEachValue; });
/* harmony import */ var _append_px_if_needed__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./append-px-if-needed */ "./node_modules/radium/es/append-px-if-needed.js");
/* harmony import */ var _map_object__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./map-object */ "./node_modules/radium/es/map-object.js");



function appendImportantToEachValue(style) {
  return Object(_map_object__WEBPACK_IMPORTED_MODULE_1__["default"])(style, function (result, key) {
    return Object(_append_px_if_needed__WEBPACK_IMPORTED_MODULE_0__["default"])(key, style[key]) + ' !important';
  });
}

/***/ }),

/***/ "./node_modules/radium/es/append-px-if-needed.js":
/*!*******************************************************!*\
  !*** ./node_modules/radium/es/append-px-if-needed.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return appendPxIfNeeded; });


// Copied from https://github.com/facebook/react/blob/
// 102cd291899f9942a76c40a0e78920a6fe544dc1/
// src/renderers/dom/shared/CSSProperty.js
var isUnitlessNumber = {
  animationIterationCount: true,
  boxFlex: true,
  boxFlexGroup: true,
  boxOrdinalGroup: true,
  columnCount: true,
  flex: true,
  flexGrow: true,
  flexPositive: true,
  flexShrink: true,
  flexNegative: true,
  flexOrder: true,
  gridRow: true,
  gridColumn: true,
  fontWeight: true,
  lineClamp: true,
  lineHeight: true,
  opacity: true,
  order: true,
  orphans: true,
  tabSize: true,
  widows: true,
  zIndex: true,
  zoom: true,

  // SVG-related properties
  fillOpacity: true,
  stopOpacity: true,
  strokeDashoffset: true,
  strokeOpacity: true,
  strokeWidth: true
};

function appendPxIfNeeded(propertyName, value) {
  var needsPxSuffix = !isUnitlessNumber[propertyName] && typeof value === 'number' && value !== 0;
  return needsPxSuffix ? value + 'px' : value;
}

/***/ }),

/***/ "./node_modules/radium/es/camel-case-props-to-dash-case.js":
/*!*****************************************************************!*\
  !*** ./node_modules/radium/es/camel-case-props-to-dash-case.js ***!
  \*****************************************************************/
/*! exports provided: camelCaseToDashCase, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "camelCaseToDashCase", function() { return camelCaseToDashCase; });
var _camelCaseRegex = /([a-z])?([A-Z])/g;

var _camelCaseReplacer = function _camelCaseReplacer(match, p1, p2) {
  return (p1 || '') + '-' + p2.toLowerCase();
};

var camelCaseToDashCase = function camelCaseToDashCase(s) {
  return s.replace(_camelCaseRegex, _camelCaseReplacer);
};

var camelCasePropsToDashCase = function camelCasePropsToDashCase(prefixedStyle) {
  // Since prefix is expected to work on inline style objects, we must
  // translate the keys to dash case for rendering to CSS.
  return Object.keys(prefixedStyle).reduce(function (result, key) {
    var dashCaseKey = camelCaseToDashCase(key);

    // Fix IE vendor prefix
    if (/^ms-/.test(dashCaseKey)) {
      dashCaseKey = '-' + dashCaseKey;
    }

    result[dashCaseKey] = prefixedStyle[key];
    return result;
  }, {});
};

/* harmony default export */ __webpack_exports__["default"] = (camelCasePropsToDashCase);

/***/ }),

/***/ "./node_modules/radium/es/clean-state-key.js":
/*!***************************************************!*\
  !*** ./node_modules/radium/es/clean-state-key.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* flow */

var cleanStateKey = function cleanStateKey(key) {
  return key === null || typeof key === 'undefined' ? 'main' : key.toString();
};

/* harmony default export */ __webpack_exports__["default"] = (cleanStateKey);

/***/ }),

/***/ "./node_modules/radium/es/components/style-root.js":
/*!*********************************************************!*\
  !*** ./node_modules/radium/es/components/style-root.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _enhancer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../enhancer */ "./node_modules/radium/es/enhancer.js");
/* harmony import */ var _style_keeper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../style-keeper */ "./node_modules/radium/es/style-keeper.js");
/* harmony import */ var _style_sheet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style-sheet */ "./node_modules/radium/es/components/style-sheet.js");
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }










function _getStyleKeeper(instance) {
  if (!instance._radiumStyleKeeper) {
    var userAgent = instance.props.radiumConfig && instance.props.radiumConfig.userAgent || instance.context._radiumConfig && instance.context._radiumConfig.userAgent;
    instance._radiumStyleKeeper = new _style_keeper__WEBPACK_IMPORTED_MODULE_3__["default"](userAgent);
  }

  return instance._radiumStyleKeeper;
}

var StyleRoot = function (_PureComponent) {
  _inherits(StyleRoot, _PureComponent);

  function StyleRoot() {
    _classCallCheck(this, StyleRoot);

    var _this = _possibleConstructorReturn(this, (StyleRoot.__proto__ || Object.getPrototypeOf(StyleRoot)).apply(this, arguments));

    _getStyleKeeper(_this);
    return _this;
  }

  _createClass(StyleRoot, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return { _radiumStyleKeeper: _getStyleKeeper(this) };
    }
  }, {
    key: 'render',
    value: function render() {
      /* eslint-disable no-unused-vars */
      // Pass down all props except config to the rendered div.
      var _props = this.props,
          radiumConfig = _props.radiumConfig,
          otherProps = _objectWithoutProperties(_props, ['radiumConfig']);
      /* eslint-enable no-unused-vars */

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        'div',
        otherProps,
        this.props.children,
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_style_sheet__WEBPACK_IMPORTED_MODULE_4__["default"], null)
      );
    }
  }]);

  return StyleRoot;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]);

StyleRoot.contextTypes = {
  _radiumConfig: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  _radiumStyleKeeper: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.instanceOf(_style_keeper__WEBPACK_IMPORTED_MODULE_3__["default"])
};

StyleRoot.childContextTypes = {
  _radiumStyleKeeper: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.instanceOf(_style_keeper__WEBPACK_IMPORTED_MODULE_3__["default"])
};

StyleRoot = Object(_enhancer__WEBPACK_IMPORTED_MODULE_2__["default"])(StyleRoot);

/* harmony default export */ __webpack_exports__["default"] = (StyleRoot);

/***/ }),

/***/ "./node_modules/radium/es/components/style-sheet.js":
/*!**********************************************************!*\
  !*** ./node_modules/radium/es/components/style-sheet.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return StyleSheet; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_keeper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../style-keeper */ "./node_modules/radium/es/style-keeper.js");
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var StyleSheet = (_temp = _class = function (_Component) {
  _inherits(StyleSheet, _Component);

  function StyleSheet() {
    _classCallCheck(this, StyleSheet);

    var _this = _possibleConstructorReturn(this, (StyleSheet.__proto__ || Object.getPrototypeOf(StyleSheet)).apply(this, arguments));

    _this._onChange = function () {
      var nextCSS = _this.context._radiumStyleKeeper.getCSS();

      if (nextCSS !== _this._css) {
        if (_this._root) {
          _this._root.innerHTML = nextCSS;
        } else {
          throw new Error('No root style object found, even after StyleSheet mount.');
        }
        _this._css = nextCSS;
      }
    };

    _this._css = _this.context._radiumStyleKeeper.getCSS();
    return _this;
  }

  _createClass(StyleSheet, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this._subscription = this.context._radiumStyleKeeper.subscribe(this._onChange);
      this._onChange();
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate() {
      return false;
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (this._subscription) {
        this._subscription.remove();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('style', {
        dangerouslySetInnerHTML: { __html: this._css },
        ref: function ref(c) {
          _this2._root = c;
        }
      });
    }
  }]);

  return StyleSheet;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]), _class.contextTypes = {
  _radiumStyleKeeper: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.instanceOf(_style_keeper__WEBPACK_IMPORTED_MODULE_2__["default"])
}, _temp);


/***/ }),

/***/ "./node_modules/radium/es/components/style.js":
/*!****************************************************!*\
  !*** ./node_modules/radium/es/components/style.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_rule_set_to_string__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css-rule-set-to-string */ "./node_modules/radium/es/css-rule-set-to-string.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var Style = (_temp = _class = function (_PureComponent) {
  _inherits(Style, _PureComponent);

  function Style() {
    _classCallCheck(this, Style);

    return _possibleConstructorReturn(this, (Style.__proto__ || Object.getPrototypeOf(Style)).apply(this, arguments));
  }

  _createClass(Style, [{
    key: '_buildStyles',
    value: function _buildStyles(styles) {
      var _this2 = this;

      var userAgent = this.props.radiumConfig && this.props.radiumConfig.userAgent || this.context && this.context._radiumConfig && this.context._radiumConfig.userAgent;

      var scopeSelector = this.props.scopeSelector;

      var rootRules = Object.keys(styles).reduce(function (accumulator, selector) {
        if (_typeof(styles[selector]) !== 'object') {
          accumulator[selector] = styles[selector];
        }

        return accumulator;
      }, {});
      var rootStyles = Object.keys(rootRules).length ? Object(_css_rule_set_to_string__WEBPACK_IMPORTED_MODULE_0__["default"])(scopeSelector || '', rootRules, userAgent) : '';

      return rootStyles + Object.keys(styles).reduce(function (accumulator, selector) {
        var rules = styles[selector];

        if (selector === 'mediaQueries') {
          accumulator += _this2._buildMediaQueryString(rules);
        } else if (_typeof(styles[selector]) === 'object') {
          var completeSelector = scopeSelector ? selector.split(',').map(function (part) {
            return scopeSelector + ' ' + part.trim();
          }).join(',') : selector;

          accumulator += Object(_css_rule_set_to_string__WEBPACK_IMPORTED_MODULE_0__["default"])(completeSelector, rules, userAgent);
        }

        return accumulator;
      }, '');
    }
  }, {
    key: '_buildMediaQueryString',
    value: function _buildMediaQueryString(stylesByMediaQuery) {
      var _this3 = this;

      var mediaQueryString = '';

      Object.keys(stylesByMediaQuery).forEach(function (query) {
        mediaQueryString += '@media ' + query + '{' + _this3._buildStyles(stylesByMediaQuery[query]) + '}';
      });

      return mediaQueryString;
    }
  }, {
    key: 'render',
    value: function render() {
      if (!this.props.rules) {
        return null;
      }

      var styles = this._buildStyles(this.props.rules);

      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement('style', { dangerouslySetInnerHTML: { __html: styles } });
    }
  }]);

  return Style;
}(react__WEBPACK_IMPORTED_MODULE_1__["PureComponent"]), _class.propTypes = {
  radiumConfig: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  rules: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  scopeSelector: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string
}, _class.contextTypes = {
  _radiumConfig: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object
}, _class.defaultProps = {
  scopeSelector: ''
}, _temp);


/* harmony default export */ __webpack_exports__["default"] = (Style);

/***/ }),

/***/ "./node_modules/radium/es/css-rule-set-to-string.js":
/*!**********************************************************!*\
  !*** ./node_modules/radium/es/css-rule-set-to-string.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return cssRuleSetToString; });
/* harmony import */ var _append_px_if_needed__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./append-px-if-needed */ "./node_modules/radium/es/append-px-if-needed.js");
/* harmony import */ var _camel_case_props_to_dash_case__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./camel-case-props-to-dash-case */ "./node_modules/radium/es/camel-case-props-to-dash-case.js");
/* harmony import */ var _map_object__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./map-object */ "./node_modules/radium/es/map-object.js");
/* harmony import */ var _prefixer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./prefixer */ "./node_modules/radium/es/prefixer.js");





function createMarkupForStyles(style) {
  return Object.keys(style).map(function (property) {
    return property + ': ' + style[property] + ';';
  }).join('\n');
}

function cssRuleSetToString(selector, rules, userAgent) {
  if (!rules) {
    return '';
  }

  var rulesWithPx = Object(_map_object__WEBPACK_IMPORTED_MODULE_2__["default"])(rules, function (value, key) {
    return Object(_append_px_if_needed__WEBPACK_IMPORTED_MODULE_0__["default"])(key, value);
  });
  var prefixedRules = Object(_prefixer__WEBPACK_IMPORTED_MODULE_3__["getPrefixedStyle"])(rulesWithPx, userAgent);
  var cssPrefixedRules = Object(_camel_case_props_to_dash_case__WEBPACK_IMPORTED_MODULE_1__["default"])(prefixedRules);
  var serializedRules = createMarkupForStyles(cssPrefixedRules);
  return selector + '{' + serializedRules + '}';
}

/***/ }),

/***/ "./node_modules/radium/es/enhancer.js":
/*!********************************************!*\
  !*** ./node_modules/radium/es/enhancer.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return enhanceWithRadium; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_keeper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style-keeper */ "./node_modules/radium/es/style-keeper.js");
/* harmony import */ var _resolve_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./resolve-styles */ "./node_modules/radium/es/resolve-styles.js");
/* harmony import */ var _get_radium_style_state__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./get-radium-style-state */ "./node_modules/radium/es/get-radium-style-state.js");
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








var KEYS_TO_IGNORE_WHEN_COPYING_PROPERTIES = ['arguments', 'callee', 'caller', 'length', 'name', 'prototype', 'type'];

var RADIUM_PROTO = void 0;
var RADIUM_METHODS = void 0;

function copyProperties(source, target) {
  Object.getOwnPropertyNames(source).forEach(function (key) {
    if (KEYS_TO_IGNORE_WHEN_COPYING_PROPERTIES.indexOf(key) < 0 && !target.hasOwnProperty(key)) {
      var descriptor = Object.getOwnPropertyDescriptor(source, key);
      Object.defineProperty(target, key, descriptor);
    }
  });
}

// Handle scenarios of:
// - Inherit from `React.Component` in any fashion
//   See: https://github.com/FormidableLabs/radium/issues/738
// - There's an explicit `render` field defined
function isStateless(component) {
  var proto = component.prototype || {};

  return !component.isReactComponent && !proto.isReactComponent && !component.render && !proto.render;
}

// Check if value is a real ES class in Native / Node code.
// See: https://stackoverflow.com/a/30760236
function isNativeClass(component) {
  return typeof component === 'function' && /^\s*class\s+/.test(component.toString());
}

// Handle es7 arrow functions on React class method names by detecting
// and transfering the instance method to original class prototype.
// (Using a copy of the class).
// See: https://github.com/FormidableLabs/radium/issues/738
function copyArrowFuncs(enhancedSelf, ComposedComponent) {
  RADIUM_METHODS.forEach(function (name) {
    var thisDesc = Object.getOwnPropertyDescriptor(enhancedSelf, name);
    var thisMethod = (thisDesc || {}).value;
    // Only care if have instance method.
    if (!thisMethod) {
      return;
    }
    var radiumDesc = Object.getOwnPropertyDescriptor(RADIUM_PROTO, name);
    var radiumProtoMethod = (radiumDesc || {}).value;
    var superProtoMethod = ComposedComponent.prototype[name];
    // Allow transfer when:
    // 1. have an instance method
    // 2. the super class prototype doesn't have any method
    // 3. it is not already the radium prototype's
    if (!superProtoMethod && thisMethod !== radiumProtoMethod) {
      // Transfer dynamic render component to Component prototype (copy).
      Object.defineProperty(ComposedComponent.prototype, name, thisDesc);
      // Remove instance property, leaving us to have a contrived
      // inheritance chain of (1) radium, (2) superclass.
      delete enhancedSelf[name];
    }
  });
}

function createEnhancedComponent(origComponent, ComposedComponent, config) {
  var _class, _temp;

  var RadiumEnhancer = (_temp = _class = function (_ComposedComponent) {
    _inherits(RadiumEnhancer, _ComposedComponent);

    function RadiumEnhancer() {
      _classCallCheck(this, RadiumEnhancer);

      var _this = _possibleConstructorReturn(this, (RadiumEnhancer.__proto__ || Object.getPrototypeOf(RadiumEnhancer)).apply(this, arguments));

      _this.state = _this.state || {};
      _this.state._radiumStyleState = {};
      _this._radiumIsMounted = true;

      var self = _this;

      // Handle es7 arrow functions on React class method
      copyArrowFuncs(self, ComposedComponent);
      return _this;
    }

    _createClass(RadiumEnhancer, [{
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        if (_get(RadiumEnhancer.prototype.__proto__ || Object.getPrototypeOf(RadiumEnhancer.prototype), 'componentWillUnmount', this)) {
          _get(RadiumEnhancer.prototype.__proto__ || Object.getPrototypeOf(RadiumEnhancer.prototype), 'componentWillUnmount', this).call(this);
        }

        this._radiumIsMounted = false;

        if (this._radiumMouseUpListener) {
          this._radiumMouseUpListener.remove();
        }

        if (this._radiumMediaQueryListenersByQuery) {
          Object.keys(this._radiumMediaQueryListenersByQuery).forEach(function (query) {
            this._radiumMediaQueryListenersByQuery[query].remove();
          }, this);
        }
      }
    }, {
      key: 'getChildContext',
      value: function getChildContext() {
        var superChildContext = _get(RadiumEnhancer.prototype.__proto__ || Object.getPrototypeOf(RadiumEnhancer.prototype), 'getChildContext', this) ? _get(RadiumEnhancer.prototype.__proto__ || Object.getPrototypeOf(RadiumEnhancer.prototype), 'getChildContext', this).call(this) : {};

        if (!this.props.radiumConfig) {
          return superChildContext;
        }

        var newContext = _extends({}, superChildContext);

        if (this.props.radiumConfig) {
          newContext._radiumConfig = this.props.radiumConfig;
        }

        return newContext;
      }
    }, {
      key: 'render',
      value: function render() {
        var renderedElement = _get(RadiumEnhancer.prototype.__proto__ || Object.getPrototypeOf(RadiumEnhancer.prototype), 'render', this).call(this);
        var currentConfig = this.props.radiumConfig || this.context._radiumConfig || config;

        if (config && currentConfig !== config) {
          currentConfig = _extends({}, config, currentConfig);
        }

        // do the style and interaction work

        var _resolveStyles = Object(_resolve_styles__WEBPACK_IMPORTED_MODULE_3__["default"])(this, renderedElement, currentConfig),
            extraStateKeyMap = _resolveStyles.extraStateKeyMap,
            element = _resolveStyles.element;

        this._extraRadiumStateKeys = Object.keys(extraStateKeyMap);

        return element;
      }

      /* eslint-disable react/no-did-update-set-state, no-unused-vars */

    }, {
      key: 'componentDidUpdate',
      value: function componentDidUpdate(prevProps, prevState, snapshot) {
        if (_get(RadiumEnhancer.prototype.__proto__ || Object.getPrototypeOf(RadiumEnhancer.prototype), 'componentDidUpdate', this)) {
          _get(RadiumEnhancer.prototype.__proto__ || Object.getPrototypeOf(RadiumEnhancer.prototype), 'componentDidUpdate', this).call(this, prevProps, prevState, snapshot);
        }

        if (this._extraRadiumStateKeys.length > 0) {
          var trimmedRadiumState = this._extraRadiumStateKeys.reduce(function (state, key) {
            var extraStateKey = state[key],
                remainingState = _objectWithoutProperties(state, [key]);

            return remainingState;
          }, Object(_get_radium_style_state__WEBPACK_IMPORTED_MODULE_4__["default"])(this));

          this._lastRadiumState = trimmedRadiumState;
          this.setState({ _radiumStyleState: trimmedRadiumState });
        }
      }
      /* eslint-enable react/no-did-update-set-state, no-unused-vars */

    }]);

    return RadiumEnhancer;
  }(ComposedComponent), _class._isRadiumEnhanced = true, _temp);

  // Lazy infer the method names of the Enhancer.

  RADIUM_PROTO = RadiumEnhancer.prototype;
  RADIUM_METHODS = Object.getOwnPropertyNames(RADIUM_PROTO).filter(function (n) {
    return n !== 'constructor' && typeof RADIUM_PROTO[n] === 'function';
  });

  // Class inheritance uses Object.create and because of __proto__ issues
  // with IE <10 any static properties of the superclass aren't inherited and
  // so need to be manually populated.
  // See http://babeljs.io/docs/advanced/caveats/#classes-10-and-below-
  copyProperties(origComponent, RadiumEnhancer);

  if (true) {
    // This also fixes React Hot Loader by exposing the original components top
    // level prototype methods on the Radium enhanced prototype as discussed in
    // https://github.com/FormidableLabs/radium/issues/219.
    copyProperties(ComposedComponent.prototype, RadiumEnhancer.prototype);
  }

  // add Radium propTypes to enhanced component's propTypes
  if (RadiumEnhancer.propTypes && RadiumEnhancer.propTypes.style) {
    RadiumEnhancer.propTypes = _extends({}, RadiumEnhancer.propTypes, {
      style: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object])
    });
  }

  // copy display name to enhanced component
  RadiumEnhancer.displayName = origComponent.displayName || origComponent.name || 'Component';

  // handle context
  RadiumEnhancer.contextTypes = _extends({}, RadiumEnhancer.contextTypes, {
    _radiumConfig: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
    _radiumStyleKeeper: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.instanceOf(_style_keeper__WEBPACK_IMPORTED_MODULE_2__["default"])
  });

  RadiumEnhancer.childContextTypes = _extends({}, RadiumEnhancer.childContextTypes, {
    _radiumConfig: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
    _radiumStyleKeeper: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.instanceOf(_style_keeper__WEBPACK_IMPORTED_MODULE_2__["default"])
  });

  return RadiumEnhancer;
}

function createComposedFromStatelessFunc(ComposedComponent, component) {
  ComposedComponent = function (_Component) {
    _inherits(ComposedComponent, _Component);

    function ComposedComponent() {
      _classCallCheck(this, ComposedComponent);

      return _possibleConstructorReturn(this, (ComposedComponent.__proto__ || Object.getPrototypeOf(ComposedComponent)).apply(this, arguments));
    }

    _createClass(ComposedComponent, [{
      key: 'render',
      value: function render() {
        return component(this.props, this.context);
      }
    }]);

    return ComposedComponent;
  }(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);
  ComposedComponent.displayName = component.displayName || component.name;
  return ComposedComponent;
}

function createComposedFromNativeClass(ComposedComponent) {
  ComposedComponent = function (OrigComponent) {
    function NewComponent() {
      // Use Reflect.construct to simulate 'new'
      var obj = Reflect.construct(OrigComponent, arguments, this.constructor);
      return obj;
    }
    // $FlowFixMe
    Reflect.setPrototypeOf(NewComponent.prototype, OrigComponent.prototype);
    // $FlowFixMe
    Reflect.setPrototypeOf(NewComponent, OrigComponent);
    return NewComponent;
  }(ComposedComponent);
  return ComposedComponent;
}

function enhanceWithRadium(configOrComposedComponent) {
  var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  if (typeof configOrComposedComponent !== 'function') {
    return createFactoryFromConfig(config, configOrComposedComponent);
  }

  var origComponent = configOrComposedComponent;
  var _ComposedComponent2 = origComponent;

  // Radium is transpiled in npm, so it isn't really using es6 classes at
  // runtime.  However, the user of Radium might be.  In this case we have
  // to maintain forward compatibility with native es classes.
  if (isNativeClass(_ComposedComponent2)) {
    _ComposedComponent2 = createComposedFromNativeClass(_ComposedComponent2);
  }

  // Handle stateless components
  if (isStateless(_ComposedComponent2)) {
    _ComposedComponent2 = createComposedFromStatelessFunc(_ComposedComponent2, origComponent);
  }

  // Shallow copy composed if still original (we may mutate later).
  if (_ComposedComponent2 === origComponent) {
    _ComposedComponent2 = function (_ComposedComponent3) {
      _inherits(ComposedComponent, _ComposedComponent3);

      function ComposedComponent() {
        _classCallCheck(this, ComposedComponent);

        return _possibleConstructorReturn(this, (ComposedComponent.__proto__ || Object.getPrototypeOf(ComposedComponent)).apply(this, arguments));
      }

      return ComposedComponent;
    }(_ComposedComponent2);
  }

  return createEnhancedComponent(origComponent, _ComposedComponent2, config);
}

function createFactoryFromConfig(config, configOrComposedComponent) {
  var newConfig = _extends({}, config, configOrComposedComponent);
  return function (configOrComponent) {
    return enhanceWithRadium(configOrComponent, newConfig);
  };
}

/***/ }),

/***/ "./node_modules/radium/es/get-radium-style-state.js":
/*!**********************************************************!*\
  !*** ./node_modules/radium/es/get-radium-style-state.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var getRadiumStyleState = function getRadiumStyleState(component) {
  return component._lastRadiumState || component.state && component.state._radiumStyleState || {};
};

/* harmony default export */ __webpack_exports__["default"] = (getRadiumStyleState);

/***/ }),

/***/ "./node_modules/radium/es/get-state-key.js":
/*!*************************************************!*\
  !*** ./node_modules/radium/es/get-state-key.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var getStateKey = function getStateKey(renderedElement) {
  return typeof renderedElement.ref === 'string' ? renderedElement.ref : renderedElement.key;
};

/* harmony default export */ __webpack_exports__["default"] = (getStateKey);

/***/ }),

/***/ "./node_modules/radium/es/get-state.js":
/*!*********************************************!*\
  !*** ./node_modules/radium/es/get-state.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _clean_state_key__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clean-state-key */ "./node_modules/radium/es/clean-state-key.js");


var getState = function getState(state, elementKey, value) {
  var key = Object(_clean_state_key__WEBPACK_IMPORTED_MODULE_0__["default"])(elementKey);

  return !!state && !!state._radiumStyleState && !!state._radiumStyleState[key] && state._radiumStyleState[key][value];
};

/* harmony default export */ __webpack_exports__["default"] = (getState);

/***/ }),

/***/ "./node_modules/radium/es/hash.js":
/*!****************************************!*\
  !*** ./node_modules/radium/es/hash.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return hash; });


// a simple djb2 hash based on hash-string:
// https://github.com/MatthewBarker/hash-string/blob/master/source/hash-string.js
// returns a hex-encoded hash
function hash(text) {
  if (!text) {
    return '';
  }

  var hashValue = 5381;
  var index = text.length - 1;

  while (index) {
    hashValue = hashValue * 33 ^ text.charCodeAt(index);
    index -= 1;
  }

  return (hashValue >>> 0).toString(16);
}

/***/ }),

/***/ "./node_modules/radium/es/index.js":
/*!*****************************************!*\
  !*** ./node_modules/radium/es/index.js ***!
  \*****************************************/
/*! exports provided: default, Plugins, Style, StyleRoot, getState, keyframes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _enhancer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./enhancer */ "./node_modules/radium/es/enhancer.js");
/* harmony import */ var _plugins__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./plugins */ "./node_modules/radium/es/plugins/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Plugins", function() { return _plugins__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _components_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/style */ "./node_modules/radium/es/components/style.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Style", function() { return _components_style__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _components_style_root__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/style-root */ "./node_modules/radium/es/components/style-root.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StyleRoot", function() { return _components_style_root__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _get_state__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./get-state */ "./node_modules/radium/es/get-state.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getState", function() { return _get_state__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _keyframes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./keyframes */ "./node_modules/radium/es/keyframes.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "keyframes", function() { return _keyframes__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _resolve_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./resolve-styles */ "./node_modules/radium/es/resolve-styles.js");








function Radium(ComposedComponent) {
  return Object(_enhancer__WEBPACK_IMPORTED_MODULE_0__["default"])(ComposedComponent);
}

// Legacy object support.
//
// Normally it would be disfavored to attach these to the `Radium` object
// because it defeats tree-shaking, using instead the ESM exports. But,
// the `Radium` `Enhancer` uses **all** of these, so there's no extra "cost"
// to them being explicitly on the `Radium` object.
Radium.Plugins = _plugins__WEBPACK_IMPORTED_MODULE_1__["default"];
Radium.Style = _components_style__WEBPACK_IMPORTED_MODULE_2__["default"];
Radium.StyleRoot = _components_style_root__WEBPACK_IMPORTED_MODULE_3__["default"];
Radium.getState = _get_state__WEBPACK_IMPORTED_MODULE_4__["default"];
Radium.keyframes = _keyframes__WEBPACK_IMPORTED_MODULE_5__["default"];

if (true) {
  Radium.TestMode = {
    clearState: _resolve_styles__WEBPACK_IMPORTED_MODULE_6__["default"].__clearStateForTests,
    disable: _resolve_styles__WEBPACK_IMPORTED_MODULE_6__["default"].__setTestMode.bind(null, false),
    enable: _resolve_styles__WEBPACK_IMPORTED_MODULE_6__["default"].__setTestMode.bind(null, true)
  };
}

/* harmony default export */ __webpack_exports__["default"] = (Radium);

// ESM re-exports


/***/ }),

/***/ "./node_modules/radium/es/keyframes.js":
/*!*********************************************!*\
  !*** ./node_modules/radium/es/keyframes.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return keyframes; });
/* harmony import */ var _css_rule_set_to_string__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css-rule-set-to-string */ "./node_modules/radium/es/css-rule-set-to-string.js");
/* harmony import */ var _hash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hash */ "./node_modules/radium/es/hash.js");
/* harmony import */ var _prefixer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./prefixer */ "./node_modules/radium/es/prefixer.js");




function keyframes(keyframeRules, name) {
  return {
    __radiumKeyframes: true,
    __process: function __process(userAgent) {
      var keyframesPrefixed = Object(_prefixer__WEBPACK_IMPORTED_MODULE_2__["getPrefixedKeyframes"])(userAgent);
      var rules = Object.keys(keyframeRules).map(function (percentage) {
        return Object(_css_rule_set_to_string__WEBPACK_IMPORTED_MODULE_0__["default"])(percentage, keyframeRules[percentage], userAgent);
      }).join('\n');
      var animationName = (name ? name + '-' : '') + 'radium-animation-' + Object(_hash__WEBPACK_IMPORTED_MODULE_1__["default"])(rules);
      var css = '@' + keyframesPrefixed + ' ' + animationName + ' {\n' + rules + '\n}\n';
      return { css: css, animationName: animationName };
    }
  };
}

/***/ }),

/***/ "./node_modules/radium/es/map-object.js":
/*!**********************************************!*\
  !*** ./node_modules/radium/es/map-object.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return mapObject; });
function mapObject(object, mapper) {
  return Object.keys(object).reduce(function (result, key) {
    result[key] = mapper(object[key], key);
    return result;
  }, {});
}

/***/ }),

/***/ "./node_modules/radium/es/merge-styles.js":
/*!************************************************!*\
  !*** ./node_modules/radium/es/merge-styles.js ***!
  \************************************************/
/*! exports provided: isNestedStyle, mergeStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNestedStyle", function() { return isNestedStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeStyles", function() { return mergeStyles; });
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function isNestedStyle(value) {
  // Don't merge objects overriding toString, since they should be converted
  // to string values.
  return value && value.constructor === Object && value.toString === Object.prototype.toString;
}

// Merge style objects. Deep merge plain object values.
function mergeStyles(styles) {
  var result = {};

  styles.forEach(function (style) {
    if (!style || (typeof style === 'undefined' ? 'undefined' : _typeof(style)) !== 'object') {
      return;
    }

    if (Array.isArray(style)) {
      style = mergeStyles(style);
    }

    Object.keys(style).forEach(function (key) {
      // Simple case, nothing nested
      if (!isNestedStyle(style[key]) || !isNestedStyle(result[key])) {
        result[key] = style[key];
        return;
      }

      // If nested media, don't merge the nested styles, append a space to the
      // end (benign when converted to CSS). This way we don't end up merging
      // media queries that appear later in the chain with those that appear
      // earlier.
      if (key.indexOf('@media') === 0) {
        var newKey = key;
        // eslint-disable-next-line no-constant-condition
        while (true) {
          newKey += ' ';
          if (!result[newKey]) {
            result[newKey] = style[key];
            return;
          }
        }
      }

      // Merge all other nested styles recursively
      result[key] = mergeStyles([result[key], style[key]]);
    });
  });

  return result;
}

/***/ }),

/***/ "./node_modules/radium/es/plugins/check-props-plugin.js":
/*!**************************************************************!*\
  !*** ./node_modules/radium/es/plugins/check-props-plugin.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _checkProps = function checkProps() {};

if (true) {
  // Warn if you use longhand and shorthand properties in the same style
  // object.
  // https://developer.mozilla.org/en-US/docs/Web/CSS/Shorthand_properties

  var shorthandPropertyExpansions = {
    background: ['backgroundAttachment', 'backgroundBlendMode', 'backgroundClip', 'backgroundColor', 'backgroundImage', 'backgroundOrigin', 'backgroundPosition', 'backgroundPositionX', 'backgroundPositionY', 'backgroundRepeat', 'backgroundRepeatX', 'backgroundRepeatY', 'backgroundSize'],
    border: ['borderBottom', 'borderBottomColor', 'borderBottomStyle', 'borderBottomWidth', 'borderColor', 'borderLeft', 'borderLeftColor', 'borderLeftStyle', 'borderLeftWidth', 'borderRight', 'borderRightColor', 'borderRightStyle', 'borderRightWidth', 'borderStyle', 'borderTop', 'borderTopColor', 'borderTopStyle', 'borderTopWidth', 'borderWidth'],
    borderImage: ['borderImageOutset', 'borderImageRepeat', 'borderImageSlice', 'borderImageSource', 'borderImageWidth'],
    borderRadius: ['borderBottomLeftRadius', 'borderBottomRightRadius', 'borderTopLeftRadius', 'borderTopRightRadius'],
    font: ['fontFamily', 'fontKerning', 'fontSize', 'fontStretch', 'fontStyle', 'fontVariant', 'fontVariantLigatures', 'fontWeight', 'lineHeight'],
    listStyle: ['listStyleImage', 'listStylePosition', 'listStyleType'],
    margin: ['marginBottom', 'marginLeft', 'marginRight', 'marginTop'],
    padding: ['paddingBottom', 'paddingLeft', 'paddingRight', 'paddingTop'],
    transition: ['transitionDelay', 'transitionDuration', 'transitionProperty', 'transitionTimingFunction']
  };

  _checkProps = function checkProps(config) {
    var componentName = config.componentName,
        style = config.style;

    if ((typeof style === 'undefined' ? 'undefined' : _typeof(style)) !== 'object' || !style) {
      return;
    }

    var styleKeys = Object.keys(style);
    styleKeys.forEach(function (styleKey) {
      if (Array.isArray(shorthandPropertyExpansions[styleKey]) && shorthandPropertyExpansions[styleKey].some(function (sp) {
        return styleKeys.indexOf(sp) !== -1;
      })) {
        if (true) {
          /* eslint-disable no-console */
          console.warn('Radium: property "' + styleKey + '" in style object', style, ': do not mix longhand and ' + 'shorthand properties in the same style object. Check the render ' + 'method of ' + componentName + '.', 'See https://github.com/FormidableLabs/radium/issues/95 for more ' + 'information.');
          /* eslint-enable no-console */
        }
      }
    });

    styleKeys.forEach(function (k) {
      return _checkProps(_extends({}, config, { style: style[k] }));
    });
    return;
  };
}

/* harmony default export */ __webpack_exports__["default"] = (_checkProps);

/***/ }),

/***/ "./node_modules/radium/es/plugins/index.js":
/*!*************************************************!*\
  !*** ./node_modules/radium/es/plugins/index.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _check_props_plugin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./check-props-plugin */ "./node_modules/radium/es/plugins/check-props-plugin.js");
/* harmony import */ var _keyframes_plugin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./keyframes-plugin */ "./node_modules/radium/es/plugins/keyframes-plugin.js");
/* harmony import */ var _merge_style_array_plugin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./merge-style-array-plugin */ "./node_modules/radium/es/plugins/merge-style-array-plugin.js");
/* harmony import */ var _prefix_plugin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./prefix-plugin */ "./node_modules/radium/es/plugins/prefix-plugin.js");
/* harmony import */ var _remove_nested_styles_plugin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./remove-nested-styles-plugin */ "./node_modules/radium/es/plugins/remove-nested-styles-plugin.js");
/* harmony import */ var _resolve_interaction_styles_plugin__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./resolve-interaction-styles-plugin */ "./node_modules/radium/es/plugins/resolve-interaction-styles-plugin.js");
/* harmony import */ var _resolve_media_queries_plugin__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./resolve-media-queries-plugin */ "./node_modules/radium/es/plugins/resolve-media-queries-plugin.js");
/* harmony import */ var _visited_plugin__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./visited-plugin */ "./node_modules/radium/es/plugins/visited-plugin.js");



/* eslint-disable block-scoped-const */









/* harmony default export */ __webpack_exports__["default"] = ({
  checkProps: _check_props_plugin__WEBPACK_IMPORTED_MODULE_0__["default"],
  keyframes: _keyframes_plugin__WEBPACK_IMPORTED_MODULE_1__["default"],
  mergeStyleArray: _merge_style_array_plugin__WEBPACK_IMPORTED_MODULE_2__["default"],
  prefix: _prefix_plugin__WEBPACK_IMPORTED_MODULE_3__["default"],
  removeNestedStyles: _remove_nested_styles_plugin__WEBPACK_IMPORTED_MODULE_4__["default"],
  resolveInteractionStyles: _resolve_interaction_styles_plugin__WEBPACK_IMPORTED_MODULE_5__["default"],
  resolveMediaQueries: _resolve_media_queries_plugin__WEBPACK_IMPORTED_MODULE_6__["default"],
  visited: _visited_plugin__WEBPACK_IMPORTED_MODULE_7__["default"]
});

/***/ }),

/***/ "./node_modules/radium/es/plugins/keyframes-plugin.js":
/*!************************************************************!*\
  !*** ./node_modules/radium/es/plugins/keyframes-plugin.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return keyframesPlugin; });
function keyframesPlugin(_ref // eslint-disable-line no-shadow
) {
  var addCSS = _ref.addCSS,
      config = _ref.config,
      style = _ref.style;

  var processKeyframeStyle = function processKeyframeStyle(value) {
    var keyframesValue = value;

    var _keyframesValue$__pro = keyframesValue.__process(config.userAgent),
        animationName = _keyframesValue$__pro.animationName,
        css = _keyframesValue$__pro.css;

    addCSS(css);
    return animationName;
  };

  var newStyle = Object.keys(style).reduce(function (newStyleInProgress, key) {
    var value = style[key];
    var isKeyframeArray = Array.isArray(value);

    if (key === 'animationName' && value && (value.__radiumKeyframes || isKeyframeArray)) {
      if (isKeyframeArray) {
        value = value.map(processKeyframeStyle).join(', ');
      } else {
        value = processKeyframeStyle(value);
      }
    }

    newStyleInProgress[key] = value;
    return newStyleInProgress;
  }, {});
  return { style: newStyle };
}

/***/ }),

/***/ "./node_modules/radium/es/plugins/merge-style-array-plugin.js":
/*!********************************************************************!*\
  !*** ./node_modules/radium/es/plugins/merge-style-array-plugin.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);


// Convenient syntax for multiple styles: `style={[style1, style2, etc]}`
// Ignores non-objects, so you can do `this.state.isCool && styles.cool`.
var mergeStyleArrayPlugin = function mergeStyleArrayPlugin(_ref) {
  var style = _ref.style,
      mergeStyles = _ref.mergeStyles;

  // eslint-disable-line no-shadow
  var newStyle = Array.isArray(style) ? mergeStyles(style) : style;
  return { style: newStyle };
};

/* harmony default export */ __webpack_exports__["default"] = (mergeStyleArrayPlugin);

/***/ }),

/***/ "./node_modules/radium/es/plugins/mouse-up-listener.js":
/*!*************************************************************!*\
  !*** ./node_modules/radium/es/plugins/mouse-up-listener.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var _callbacks = [];
var _mouseUpListenerIsActive = false;

function _handleMouseUp() {
  _callbacks.forEach(function (callback) {
    callback();
  });
}

var subscribe = function subscribe(callback) {
  if (_callbacks.indexOf(callback) === -1) {
    _callbacks.push(callback);
  }

  if (!_mouseUpListenerIsActive) {
    window.addEventListener('mouseup', _handleMouseUp);
    _mouseUpListenerIsActive = true;
  }

  return {
    remove: function remove() {
      var index = _callbacks.indexOf(callback);
      _callbacks.splice(index, 1);

      if (_callbacks.length === 0 && _mouseUpListenerIsActive) {
        window.removeEventListener('mouseup', _handleMouseUp);
        _mouseUpListenerIsActive = false;
      }
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = ({
  subscribe: subscribe,
  __triggerForTests: _handleMouseUp
});

/***/ }),

/***/ "./node_modules/radium/es/plugins/prefix-plugin.js":
/*!*********************************************************!*\
  !*** ./node_modules/radium/es/plugins/prefix-plugin.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return prefixPlugin; });
/* harmony import */ var _prefixer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../prefixer */ "./node_modules/radium/es/prefixer.js");




function prefixPlugin(_ref // eslint-disable-line no-shadow
) {
  var config = _ref.config,
      style = _ref.style;

  var newStyle = Object(_prefixer__WEBPACK_IMPORTED_MODULE_0__["getPrefixedStyle"])(style, config.userAgent);
  return { style: newStyle };
}

/***/ }),

/***/ "./node_modules/radium/es/plugins/remove-nested-styles-plugin.js":
/*!***********************************************************************!*\
  !*** ./node_modules/radium/es/plugins/remove-nested-styles-plugin.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return removeNestedStyles; });


function removeNestedStyles(_ref) {
  var isNestedStyle = _ref.isNestedStyle,
      style = _ref.style;

  // eslint-disable-line no-shadow
  var newStyle = Object.keys(style).reduce(function (newStyleInProgress, key) {
    var value = style[key];
    if (!isNestedStyle(value)) {
      newStyleInProgress[key] = value;
    }
    return newStyleInProgress;
  }, {});

  return {
    style: newStyle
  };
}

/***/ }),

/***/ "./node_modules/radium/es/plugins/resolve-interaction-styles-plugin.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/radium/es/plugins/resolve-interaction-styles-plugin.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mouse_up_listener__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mouse-up-listener */ "./node_modules/radium/es/plugins/mouse-up-listener.js");




var _isInteractiveStyleField = function _isInteractiveStyleField(styleFieldName) {
  return styleFieldName === ':hover' || styleFieldName === ':active' || styleFieldName === ':focus';
};

var resolveInteractionStyles = function resolveInteractionStyles(config) {
  var ExecutionEnvironment = config.ExecutionEnvironment,
      getComponentField = config.getComponentField,
      getState = config.getState,
      mergeStyles = config.mergeStyles,
      props = config.props,
      setState = config.setState,
      style = config.style;


  var newComponentFields = {};
  var newProps = {};

  // Only add handlers if necessary
  if (style[':hover']) {
    // Always call the existing handler if one is already defined.
    // This code, and the very similar ones below, could be abstracted a bit
    // more, but it hurts readability IMO.
    var existingOnMouseEnter = props.onMouseEnter;
    newProps.onMouseEnter = function (e) {
      existingOnMouseEnter && existingOnMouseEnter(e);
      setState(':hover', true);
    };

    var existingOnMouseLeave = props.onMouseLeave;
    newProps.onMouseLeave = function (e) {
      existingOnMouseLeave && existingOnMouseLeave(e);
      setState(':hover', false);
    };
  }

  if (style[':active']) {
    var existingOnMouseDown = props.onMouseDown;
    newProps.onMouseDown = function (e) {
      existingOnMouseDown && existingOnMouseDown(e);
      newComponentFields._lastMouseDown = Date.now();
      setState(':active', 'viamousedown');
    };

    var existingOnKeyDown = props.onKeyDown;
    newProps.onKeyDown = function (e) {
      existingOnKeyDown && existingOnKeyDown(e);
      if (e.key === ' ' || e.key === 'Enter') {
        setState(':active', 'viakeydown');
      }
    };

    var existingOnKeyUp = props.onKeyUp;
    newProps.onKeyUp = function (e) {
      existingOnKeyUp && existingOnKeyUp(e);
      if (e.key === ' ' || e.key === 'Enter') {
        setState(':active', false);
      }
    };
  }

  if (style[':focus']) {
    var existingOnFocus = props.onFocus;
    newProps.onFocus = function (e) {
      existingOnFocus && existingOnFocus(e);
      setState(':focus', true);
    };

    var existingOnBlur = props.onBlur;
    newProps.onBlur = function (e) {
      existingOnBlur && existingOnBlur(e);
      setState(':focus', false);
    };
  }

  if (style[':active'] && !getComponentField('_radiumMouseUpListener') && ExecutionEnvironment.canUseEventListeners) {
    newComponentFields._radiumMouseUpListener = _mouse_up_listener__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe(function () {
      Object.keys(getComponentField('state')._radiumStyleState).forEach(function (key) {
        if (getState(':active', key) === 'viamousedown') {
          setState(':active', false, key);
        }
      });
    });
  }

  // Merge the styles in the order they were defined
  var interactionStyles = props.disabled ? [style[':disabled']] : Object.keys(style).filter(function (name) {
    return _isInteractiveStyleField(name) && getState(name);
  }).map(function (name) {
    return style[name];
  });

  var newStyle = mergeStyles([style].concat(interactionStyles));

  // Remove interactive styles
  newStyle = Object.keys(newStyle).reduce(function (styleWithoutInteractions, name) {
    if (!_isInteractiveStyleField(name) && name !== ':disabled') {
      styleWithoutInteractions[name] = newStyle[name];
    }
    return styleWithoutInteractions;
  }, {});

  return {
    componentFields: newComponentFields,
    props: newProps,
    style: newStyle
  };
};

/* harmony default export */ __webpack_exports__["default"] = (resolveInteractionStyles);

/***/ }),

/***/ "./node_modules/radium/es/plugins/resolve-media-queries-plugin.js":
/*!************************************************************************!*\
  !*** ./node_modules/radium/es/plugins/resolve-media-queries-plugin.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return resolveMediaQueries; });
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _windowMatchMedia = void 0;
function _getWindowMatchMedia(ExecutionEnvironment) {
  if (_windowMatchMedia === undefined) {
    _windowMatchMedia = !!ExecutionEnvironment.canUseDOM && !!window && !!window.matchMedia && function (mediaQueryString) {
      return window.matchMedia(mediaQueryString);
    } || null;
  }
  return _windowMatchMedia;
}

function _filterObject(obj, predicate) {
  return Object.keys(obj).filter(function (key) {
    return predicate(obj[key], key);
  }).reduce(function (result, key) {
    result[key] = obj[key];
    return result;
  }, {});
}

function _removeMediaQueries(style) {
  return Object.keys(style).reduce(function (styleWithoutMedia, key) {
    if (key.indexOf('@media') !== 0) {
      styleWithoutMedia[key] = style[key];
    }
    return styleWithoutMedia;
  }, {});
}

function _topLevelRulesToCSS(_ref) {
  var addCSS = _ref.addCSS,
      appendImportantToEachValue = _ref.appendImportantToEachValue,
      cssRuleSetToString = _ref.cssRuleSetToString,
      hash = _ref.hash,
      isNestedStyle = _ref.isNestedStyle,
      style = _ref.style,
      userAgent = _ref.userAgent;

  var className = '';
  Object.keys(style).filter(function (name) {
    return name.indexOf('@media') === 0;
  }).map(function (query) {
    var topLevelRules = appendImportantToEachValue(_filterObject(style[query], function (value) {
      return !isNestedStyle(value);
    }));

    if (!Object.keys(topLevelRules).length) {
      return;
    }

    var ruleCSS = cssRuleSetToString('', topLevelRules, userAgent);

    // CSS classes cannot start with a number
    var mediaQueryClassName = 'rmq-' + hash(query + ruleCSS);
    var css = query + '{ .' + mediaQueryClassName + ruleCSS + '}';

    addCSS(css);

    className += (className ? ' ' : '') + mediaQueryClassName;
  });
  return className;
}

function _subscribeToMediaQuery(_ref2) {
  var listener = _ref2.listener,
      listenersByQuery = _ref2.listenersByQuery,
      matchMedia = _ref2.matchMedia,
      mediaQueryListsByQuery = _ref2.mediaQueryListsByQuery,
      query = _ref2.query;

  query = query.replace('@media ', '');

  var mql = mediaQueryListsByQuery[query];
  if (!mql && matchMedia) {
    mediaQueryListsByQuery[query] = mql = matchMedia(query);
  }

  if (!listenersByQuery || !listenersByQuery[query]) {
    mql.addListener(listener);

    listenersByQuery[query] = {
      remove: function remove() {
        mql.removeListener(listener);
      }
    };
  }
  return mql;
}

function resolveMediaQueries(_ref3) {
  var ExecutionEnvironment = _ref3.ExecutionEnvironment,
      addCSS = _ref3.addCSS,
      appendImportantToEachValue = _ref3.appendImportantToEachValue,
      config = _ref3.config,
      cssRuleSetToString = _ref3.cssRuleSetToString,
      getComponentField = _ref3.getComponentField,
      getGlobalState = _ref3.getGlobalState,
      hash = _ref3.hash,
      isNestedStyle = _ref3.isNestedStyle,
      mergeStyles = _ref3.mergeStyles,
      props = _ref3.props,
      setState = _ref3.setState,
      style = _ref3.style;

  // eslint-disable-line no-shadow
  var newStyle = _removeMediaQueries(style);
  var mediaQueryClassNames = _topLevelRulesToCSS({
    addCSS: addCSS,
    appendImportantToEachValue: appendImportantToEachValue,
    cssRuleSetToString: cssRuleSetToString,
    hash: hash,
    isNestedStyle: isNestedStyle,
    style: style,
    userAgent: config.userAgent
  });

  var newProps = mediaQueryClassNames ? {
    className: mediaQueryClassNames + (props.className ? ' ' + props.className : '')
  } : null;

  var matchMedia = config.matchMedia || _getWindowMatchMedia(ExecutionEnvironment);

  if (!matchMedia) {
    return {
      props: newProps,
      style: newStyle
    };
  }

  var listenersByQuery = _extends({}, getComponentField('_radiumMediaQueryListenersByQuery'));
  var mediaQueryListsByQuery = getGlobalState('mediaQueryListsByQuery') || {};

  Object.keys(style).filter(function (name) {
    return name.indexOf('@media') === 0;
  }).map(function (query) {
    var nestedRules = _filterObject(style[query], isNestedStyle);

    if (!Object.keys(nestedRules).length) {
      return;
    }

    var mql = _subscribeToMediaQuery({
      listener: function listener() {
        return setState(query, mql.matches, '_all');
      },
      listenersByQuery: listenersByQuery,
      matchMedia: matchMedia,
      mediaQueryListsByQuery: mediaQueryListsByQuery,
      query: query
    });

    // Apply media query states
    if (mql.matches) {
      newStyle = mergeStyles([newStyle, nestedRules]);
    }
  });

  return {
    componentFields: {
      _radiumMediaQueryListenersByQuery: listenersByQuery
    },
    globalState: { mediaQueryListsByQuery: mediaQueryListsByQuery },
    props: newProps,
    style: newStyle
  };
}

/***/ }),

/***/ "./node_modules/radium/es/plugins/visited-plugin.js":
/*!**********************************************************!*\
  !*** ./node_modules/radium/es/plugins/visited-plugin.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return visited; });


function visited(_ref) {
  var addCSS = _ref.addCSS,
      appendImportantToEachValue = _ref.appendImportantToEachValue,
      config = _ref.config,
      cssRuleSetToString = _ref.cssRuleSetToString,
      hash = _ref.hash,
      props = _ref.props,
      style = _ref.style;

  // eslint-disable-line no-shadow
  var className = props.className;

  var newStyle = Object.keys(style).reduce(function (newStyleInProgress, key) {
    var value = style[key];
    if (key === ':visited') {
      value = appendImportantToEachValue(value);
      var ruleCSS = cssRuleSetToString('', value, config.userAgent);
      var visitedClassName = 'rad-' + hash(ruleCSS);
      var css = '.' + visitedClassName + ':visited' + ruleCSS;

      addCSS(css);
      className = (className ? className + ' ' : '') + visitedClassName;
    } else {
      newStyleInProgress[key] = value;
    }

    return newStyleInProgress;
  }, {});

  return {
    props: className === props.className ? null : { className: className },
    style: newStyle
  };
}

/***/ }),

/***/ "./node_modules/radium/es/prefix-data/dynamic.js":
/*!*******************************************************!*\
  !*** ./node_modules/radium/es/prefix-data/dynamic.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var inline_style_prefixer_dynamic_plugins_calc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! inline-style-prefixer/dynamic/plugins/calc */ "./node_modules/inline-style-prefixer/dynamic/plugins/calc.js");
/* harmony import */ var inline_style_prefixer_dynamic_plugins_calc__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(inline_style_prefixer_dynamic_plugins_calc__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var inline_style_prefixer_dynamic_plugins_crossFade__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! inline-style-prefixer/dynamic/plugins/crossFade */ "./node_modules/inline-style-prefixer/dynamic/plugins/crossFade.js");
/* harmony import */ var inline_style_prefixer_dynamic_plugins_crossFade__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(inline_style_prefixer_dynamic_plugins_crossFade__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var inline_style_prefixer_dynamic_plugins_cursor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! inline-style-prefixer/dynamic/plugins/cursor */ "./node_modules/inline-style-prefixer/dynamic/plugins/cursor.js");
/* harmony import */ var inline_style_prefixer_dynamic_plugins_cursor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(inline_style_prefixer_dynamic_plugins_cursor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var inline_style_prefixer_dynamic_plugins_filter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! inline-style-prefixer/dynamic/plugins/filter */ "./node_modules/inline-style-prefixer/dynamic/plugins/filter.js");
/* harmony import */ var inline_style_prefixer_dynamic_plugins_filter__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(inline_style_prefixer_dynamic_plugins_filter__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var inline_style_prefixer_dynamic_plugins_flex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! inline-style-prefixer/dynamic/plugins/flex */ "./node_modules/inline-style-prefixer/dynamic/plugins/flex.js");
/* harmony import */ var inline_style_prefixer_dynamic_plugins_flex__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(inline_style_prefixer_dynamic_plugins_flex__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var inline_style_prefixer_dynamic_plugins_flexboxIE__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! inline-style-prefixer/dynamic/plugins/flexboxIE */ "./node_modules/inline-style-prefixer/dynamic/plugins/flexboxIE.js");
/* harmony import */ var inline_style_prefixer_dynamic_plugins_flexboxIE__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(inline_style_prefixer_dynamic_plugins_flexboxIE__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var inline_style_prefixer_dynamic_plugins_flexboxOld__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! inline-style-prefixer/dynamic/plugins/flexboxOld */ "./node_modules/inline-style-prefixer/dynamic/plugins/flexboxOld.js");
/* harmony import */ var inline_style_prefixer_dynamic_plugins_flexboxOld__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(inline_style_prefixer_dynamic_plugins_flexboxOld__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var inline_style_prefixer_dynamic_plugins_gradient__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! inline-style-prefixer/dynamic/plugins/gradient */ "./node_modules/inline-style-prefixer/dynamic/plugins/gradient.js");
/* harmony import */ var inline_style_prefixer_dynamic_plugins_gradient__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(inline_style_prefixer_dynamic_plugins_gradient__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var inline_style_prefixer_dynamic_plugins_imageSet__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! inline-style-prefixer/dynamic/plugins/imageSet */ "./node_modules/inline-style-prefixer/dynamic/plugins/imageSet.js");
/* harmony import */ var inline_style_prefixer_dynamic_plugins_imageSet__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(inline_style_prefixer_dynamic_plugins_imageSet__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var inline_style_prefixer_dynamic_plugins_position__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! inline-style-prefixer/dynamic/plugins/position */ "./node_modules/inline-style-prefixer/dynamic/plugins/position.js");
/* harmony import */ var inline_style_prefixer_dynamic_plugins_position__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(inline_style_prefixer_dynamic_plugins_position__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var inline_style_prefixer_dynamic_plugins_sizing__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! inline-style-prefixer/dynamic/plugins/sizing */ "./node_modules/inline-style-prefixer/dynamic/plugins/sizing.js");
/* harmony import */ var inline_style_prefixer_dynamic_plugins_sizing__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(inline_style_prefixer_dynamic_plugins_sizing__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var inline_style_prefixer_dynamic_plugins_transition__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! inline-style-prefixer/dynamic/plugins/transition */ "./node_modules/inline-style-prefixer/dynamic/plugins/transition.js");
/* harmony import */ var inline_style_prefixer_dynamic_plugins_transition__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(inline_style_prefixer_dynamic_plugins_transition__WEBPACK_IMPORTED_MODULE_11__);













/* harmony default export */ __webpack_exports__["default"] = ({
  plugins: [inline_style_prefixer_dynamic_plugins_calc__WEBPACK_IMPORTED_MODULE_0___default.a, inline_style_prefixer_dynamic_plugins_crossFade__WEBPACK_IMPORTED_MODULE_1___default.a, inline_style_prefixer_dynamic_plugins_cursor__WEBPACK_IMPORTED_MODULE_2___default.a, inline_style_prefixer_dynamic_plugins_filter__WEBPACK_IMPORTED_MODULE_3___default.a, inline_style_prefixer_dynamic_plugins_flex__WEBPACK_IMPORTED_MODULE_4___default.a, inline_style_prefixer_dynamic_plugins_flexboxIE__WEBPACK_IMPORTED_MODULE_5___default.a, inline_style_prefixer_dynamic_plugins_flexboxOld__WEBPACK_IMPORTED_MODULE_6___default.a, inline_style_prefixer_dynamic_plugins_gradient__WEBPACK_IMPORTED_MODULE_7___default.a, inline_style_prefixer_dynamic_plugins_imageSet__WEBPACK_IMPORTED_MODULE_8___default.a, inline_style_prefixer_dynamic_plugins_position__WEBPACK_IMPORTED_MODULE_9___default.a, inline_style_prefixer_dynamic_plugins_sizing__WEBPACK_IMPORTED_MODULE_10___default.a, inline_style_prefixer_dynamic_plugins_transition__WEBPACK_IMPORTED_MODULE_11___default.a],
  prefixMap: {
    chrome: {
      transform: 35,
      transformOrigin: 35,
      transformOriginX: 35,
      transformOriginY: 35,
      backfaceVisibility: 35,
      perspective: 35,
      perspectiveOrigin: 35,
      transformStyle: 35,
      transformOriginZ: 35,
      animation: 42,
      animationDelay: 42,
      animationDirection: 42,
      animationFillMode: 42,
      animationDuration: 42,
      animationIterationCount: 42,
      animationName: 42,
      animationPlayState: 42,
      animationTimingFunction: 42,
      appearance: 66,
      userSelect: 53,
      fontKerning: 32,
      textEmphasisPosition: 66,
      textEmphasis: 66,
      textEmphasisStyle: 66,
      textEmphasisColor: 66,
      boxDecorationBreak: 66,
      clipPath: 54,
      maskImage: 66,
      maskMode: 66,
      maskRepeat: 66,
      maskPosition: 66,
      maskClip: 66,
      maskOrigin: 66,
      maskSize: 66,
      maskComposite: 66,
      mask: 66,
      maskBorderSource: 66,
      maskBorderMode: 66,
      maskBorderSlice: 66,
      maskBorderWidth: 66,
      maskBorderOutset: 66,
      maskBorderRepeat: 66,
      maskBorder: 66,
      maskType: 66,
      textDecorationStyle: 56,
      textDecorationSkip: 56,
      textDecorationLine: 56,
      textDecorationColor: 56,
      filter: 52,
      fontFeatureSettings: 47,
      breakAfter: 49,
      breakBefore: 49,
      breakInside: 49,
      columnCount: 49,
      columnFill: 49,
      columnGap: 49,
      columnRule: 49,
      columnRuleColor: 49,
      columnRuleStyle: 49,
      columnRuleWidth: 49,
      columns: 49,
      columnSpan: 49,
      columnWidth: 49,
      writingMode: 47
    },
    safari: {
      flex: 8,
      flexBasis: 8,
      flexDirection: 8,
      flexGrow: 8,
      flexFlow: 8,
      flexShrink: 8,
      flexWrap: 8,
      alignContent: 8,
      alignItems: 8,
      alignSelf: 8,
      justifyContent: 8,
      order: 8,
      transition: 6,
      transitionDelay: 6,
      transitionDuration: 6,
      transitionProperty: 6,
      transitionTimingFunction: 6,
      transform: 8,
      transformOrigin: 8,
      transformOriginX: 8,
      transformOriginY: 8,
      backfaceVisibility: 8,
      perspective: 8,
      perspectiveOrigin: 8,
      transformStyle: 8,
      transformOriginZ: 8,
      animation: 8,
      animationDelay: 8,
      animationDirection: 8,
      animationFillMode: 8,
      animationDuration: 8,
      animationIterationCount: 8,
      animationName: 8,
      animationPlayState: 8,
      animationTimingFunction: 8,
      appearance: 11,
      userSelect: 11,
      backdropFilter: 11,
      fontKerning: 9,
      scrollSnapType: 10.1,
      scrollSnapPointsX: 10.1,
      scrollSnapPointsY: 10.1,
      scrollSnapDestination: 10.1,
      scrollSnapCoordinate: 10.1,
      textEmphasisPosition: 7,
      textEmphasis: 7,
      textEmphasisStyle: 7,
      textEmphasisColor: 7,
      boxDecorationBreak: 11,
      clipPath: 11,
      maskImage: 11,
      maskMode: 11,
      maskRepeat: 11,
      maskPosition: 11,
      maskClip: 11,
      maskOrigin: 11,
      maskSize: 11,
      maskComposite: 11,
      mask: 11,
      maskBorderSource: 11,
      maskBorderMode: 11,
      maskBorderSlice: 11,
      maskBorderWidth: 11,
      maskBorderOutset: 11,
      maskBorderRepeat: 11,
      maskBorder: 11,
      maskType: 11,
      textDecorationStyle: 11,
      textDecorationSkip: 11,
      textDecorationLine: 11,
      textDecorationColor: 11,
      shapeImageThreshold: 10,
      shapeImageMargin: 10,
      shapeImageOutside: 10,
      filter: 9,
      hyphens: 11,
      flowInto: 11,
      flowFrom: 11,
      breakBefore: 8,
      breakAfter: 8,
      breakInside: 8,
      regionFragment: 11,
      columnCount: 8,
      columnFill: 8,
      columnGap: 8,
      columnRule: 8,
      columnRuleColor: 8,
      columnRuleStyle: 8,
      columnRuleWidth: 8,
      columns: 8,
      columnSpan: 8,
      columnWidth: 8,
      writingMode: 10.1
    },
    firefox: {
      appearance: 60,
      userSelect: 60,
      boxSizing: 28,
      textAlignLast: 48,
      textDecorationStyle: 35,
      textDecorationSkip: 35,
      textDecorationLine: 35,
      textDecorationColor: 35,
      tabSize: 60,
      hyphens: 42,
      fontFeatureSettings: 33,
      breakAfter: 51,
      breakBefore: 51,
      breakInside: 51,
      columnCount: 51,
      columnFill: 51,
      columnGap: 51,
      columnRule: 51,
      columnRuleColor: 51,
      columnRuleStyle: 51,
      columnRuleWidth: 51,
      columns: 51,
      columnSpan: 51,
      columnWidth: 51
    },
    opera: {
      flex: 16,
      flexBasis: 16,
      flexDirection: 16,
      flexGrow: 16,
      flexFlow: 16,
      flexShrink: 16,
      flexWrap: 16,
      alignContent: 16,
      alignItems: 16,
      alignSelf: 16,
      justifyContent: 16,
      order: 16,
      transform: 22,
      transformOrigin: 22,
      transformOriginX: 22,
      transformOriginY: 22,
      backfaceVisibility: 22,
      perspective: 22,
      perspectiveOrigin: 22,
      transformStyle: 22,
      transformOriginZ: 22,
      animation: 29,
      animationDelay: 29,
      animationDirection: 29,
      animationFillMode: 29,
      animationDuration: 29,
      animationIterationCount: 29,
      animationName: 29,
      animationPlayState: 29,
      animationTimingFunction: 29,
      appearance: 50,
      userSelect: 40,
      fontKerning: 19,
      textEmphasisPosition: 50,
      textEmphasis: 50,
      textEmphasisStyle: 50,
      textEmphasisColor: 50,
      boxDecorationBreak: 50,
      clipPath: 41,
      maskImage: 50,
      maskMode: 50,
      maskRepeat: 50,
      maskPosition: 50,
      maskClip: 50,
      maskOrigin: 50,
      maskSize: 50,
      maskComposite: 50,
      mask: 50,
      maskBorderSource: 50,
      maskBorderMode: 50,
      maskBorderSlice: 50,
      maskBorderWidth: 50,
      maskBorderOutset: 50,
      maskBorderRepeat: 50,
      maskBorder: 50,
      maskType: 50,
      textDecorationStyle: 43,
      textDecorationSkip: 43,
      textDecorationLine: 43,
      textDecorationColor: 43,
      filter: 39,
      fontFeatureSettings: 34,
      breakAfter: 36,
      breakBefore: 36,
      breakInside: 36,
      columnCount: 36,
      columnFill: 36,
      columnGap: 36,
      columnRule: 36,
      columnRuleColor: 36,
      columnRuleStyle: 36,
      columnRuleWidth: 36,
      columns: 36,
      columnSpan: 36,
      columnWidth: 36,
      writingMode: 34
    },
    ie: {
      flex: 10,
      flexDirection: 10,
      flexFlow: 10,
      flexWrap: 10,
      transform: 9,
      transformOrigin: 9,
      transformOriginX: 9,
      transformOriginY: 9,
      userSelect: 11,
      wrapFlow: 11,
      wrapThrough: 11,
      wrapMargin: 11,
      scrollSnapType: 11,
      scrollSnapPointsX: 11,
      scrollSnapPointsY: 11,
      scrollSnapDestination: 11,
      scrollSnapCoordinate: 11,
      touchAction: 10,
      hyphens: 11,
      flowInto: 11,
      flowFrom: 11,
      breakBefore: 11,
      breakAfter: 11,
      breakInside: 11,
      regionFragment: 11,
      gridTemplateColumns: 11,
      gridTemplateRows: 11,
      gridTemplateAreas: 11,
      gridTemplate: 11,
      gridAutoColumns: 11,
      gridAutoRows: 11,
      gridAutoFlow: 11,
      grid: 11,
      gridRowStart: 11,
      gridColumnStart: 11,
      gridRowEnd: 11,
      gridRow: 11,
      gridColumn: 11,
      gridColumnEnd: 11,
      gridColumnGap: 11,
      gridRowGap: 11,
      gridArea: 11,
      gridGap: 11,
      textSizeAdjust: 11,
      writingMode: 11
    },
    edge: {
      userSelect: 17,
      wrapFlow: 17,
      wrapThrough: 17,
      wrapMargin: 17,
      scrollSnapType: 17,
      scrollSnapPointsX: 17,
      scrollSnapPointsY: 17,
      scrollSnapDestination: 17,
      scrollSnapCoordinate: 17,
      hyphens: 17,
      flowInto: 17,
      flowFrom: 17,
      breakBefore: 17,
      breakAfter: 17,
      breakInside: 17,
      regionFragment: 17,
      gridTemplateColumns: 15,
      gridTemplateRows: 15,
      gridTemplateAreas: 15,
      gridTemplate: 15,
      gridAutoColumns: 15,
      gridAutoRows: 15,
      gridAutoFlow: 15,
      grid: 15,
      gridRowStart: 15,
      gridColumnStart: 15,
      gridRowEnd: 15,
      gridRow: 15,
      gridColumn: 15,
      gridColumnEnd: 15,
      gridColumnGap: 15,
      gridRowGap: 15,
      gridArea: 15,
      gridGap: 15
    },
    ios_saf: {
      flex: 8.1,
      flexBasis: 8.1,
      flexDirection: 8.1,
      flexGrow: 8.1,
      flexFlow: 8.1,
      flexShrink: 8.1,
      flexWrap: 8.1,
      alignContent: 8.1,
      alignItems: 8.1,
      alignSelf: 8.1,
      justifyContent: 8.1,
      order: 8.1,
      transition: 6,
      transitionDelay: 6,
      transitionDuration: 6,
      transitionProperty: 6,
      transitionTimingFunction: 6,
      transform: 8.1,
      transformOrigin: 8.1,
      transformOriginX: 8.1,
      transformOriginY: 8.1,
      backfaceVisibility: 8.1,
      perspective: 8.1,
      perspectiveOrigin: 8.1,
      transformStyle: 8.1,
      transformOriginZ: 8.1,
      animation: 8.1,
      animationDelay: 8.1,
      animationDirection: 8.1,
      animationFillMode: 8.1,
      animationDuration: 8.1,
      animationIterationCount: 8.1,
      animationName: 8.1,
      animationPlayState: 8.1,
      animationTimingFunction: 8.1,
      appearance: 11,
      userSelect: 11,
      backdropFilter: 11,
      fontKerning: 11,
      scrollSnapType: 10.3,
      scrollSnapPointsX: 10.3,
      scrollSnapPointsY: 10.3,
      scrollSnapDestination: 10.3,
      scrollSnapCoordinate: 10.3,
      boxDecorationBreak: 11,
      clipPath: 11,
      maskImage: 11,
      maskMode: 11,
      maskRepeat: 11,
      maskPosition: 11,
      maskClip: 11,
      maskOrigin: 11,
      maskSize: 11,
      maskComposite: 11,
      mask: 11,
      maskBorderSource: 11,
      maskBorderMode: 11,
      maskBorderSlice: 11,
      maskBorderWidth: 11,
      maskBorderOutset: 11,
      maskBorderRepeat: 11,
      maskBorder: 11,
      maskType: 11,
      textSizeAdjust: 11,
      textDecorationStyle: 11,
      textDecorationSkip: 11,
      textDecorationLine: 11,
      textDecorationColor: 11,
      shapeImageThreshold: 10,
      shapeImageMargin: 10,
      shapeImageOutside: 10,
      filter: 9,
      hyphens: 11,
      flowInto: 11,
      flowFrom: 11,
      breakBefore: 8.1,
      breakAfter: 8.1,
      breakInside: 8.1,
      regionFragment: 11,
      columnCount: 8.1,
      columnFill: 8.1,
      columnGap: 8.1,
      columnRule: 8.1,
      columnRuleColor: 8.1,
      columnRuleStyle: 8.1,
      columnRuleWidth: 8.1,
      columns: 8.1,
      columnSpan: 8.1,
      columnWidth: 8.1,
      writingMode: 10.3
    },
    android: {
      borderImage: 4.2,
      borderImageOutset: 4.2,
      borderImageRepeat: 4.2,
      borderImageSlice: 4.2,
      borderImageSource: 4.2,
      borderImageWidth: 4.2,
      flex: 4.2,
      flexBasis: 4.2,
      flexDirection: 4.2,
      flexGrow: 4.2,
      flexFlow: 4.2,
      flexShrink: 4.2,
      flexWrap: 4.2,
      alignContent: 4.2,
      alignItems: 4.2,
      alignSelf: 4.2,
      justifyContent: 4.2,
      order: 4.2,
      transition: 4.2,
      transitionDelay: 4.2,
      transitionDuration: 4.2,
      transitionProperty: 4.2,
      transitionTimingFunction: 4.2,
      transform: 4.4,
      transformOrigin: 4.4,
      transformOriginX: 4.4,
      transformOriginY: 4.4,
      backfaceVisibility: 4.4,
      perspective: 4.4,
      perspectiveOrigin: 4.4,
      transformStyle: 4.4,
      transformOriginZ: 4.4,
      animation: 4.4,
      animationDelay: 4.4,
      animationDirection: 4.4,
      animationFillMode: 4.4,
      animationDuration: 4.4,
      animationIterationCount: 4.4,
      animationName: 4.4,
      animationPlayState: 4.4,
      animationTimingFunction: 4.4,
      appearance: 62,
      userSelect: 4.4,
      fontKerning: 4.4,
      textEmphasisPosition: 62,
      textEmphasis: 62,
      textEmphasisStyle: 62,
      textEmphasisColor: 62,
      boxDecorationBreak: 62,
      clipPath: 4.4,
      maskImage: 62,
      maskMode: 62,
      maskRepeat: 62,
      maskPosition: 62,
      maskClip: 62,
      maskOrigin: 62,
      maskSize: 62,
      maskComposite: 62,
      mask: 62,
      maskBorderSource: 62,
      maskBorderMode: 62,
      maskBorderSlice: 62,
      maskBorderWidth: 62,
      maskBorderOutset: 62,
      maskBorderRepeat: 62,
      maskBorder: 62,
      maskType: 62,
      filter: 4.4,
      fontFeatureSettings: 4.4,
      breakAfter: 4.4,
      breakBefore: 4.4,
      breakInside: 4.4,
      columnCount: 4.4,
      columnFill: 4.4,
      columnGap: 4.4,
      columnRule: 4.4,
      columnRuleColor: 4.4,
      columnRuleStyle: 4.4,
      columnRuleWidth: 4.4,
      columns: 4.4,
      columnSpan: 4.4,
      columnWidth: 4.4,
      writingMode: 4.4
    },
    and_chr: {
      appearance: 62,
      textEmphasisPosition: 62,
      textEmphasis: 62,
      textEmphasisStyle: 62,
      textEmphasisColor: 62,
      boxDecorationBreak: 62,
      maskImage: 62,
      maskMode: 62,
      maskRepeat: 62,
      maskPosition: 62,
      maskClip: 62,
      maskOrigin: 62,
      maskSize: 62,
      maskComposite: 62,
      mask: 62,
      maskBorderSource: 62,
      maskBorderMode: 62,
      maskBorderSlice: 62,
      maskBorderWidth: 62,
      maskBorderOutset: 62,
      maskBorderRepeat: 62,
      maskBorder: 62,
      maskType: 62
    },
    and_uc: {
      flex: 11.4,
      flexBasis: 11.4,
      flexDirection: 11.4,
      flexGrow: 11.4,
      flexFlow: 11.4,
      flexShrink: 11.4,
      flexWrap: 11.4,
      alignContent: 11.4,
      alignItems: 11.4,
      alignSelf: 11.4,
      justifyContent: 11.4,
      order: 11.4,
      transform: 11.4,
      transformOrigin: 11.4,
      transformOriginX: 11.4,
      transformOriginY: 11.4,
      backfaceVisibility: 11.4,
      perspective: 11.4,
      perspectiveOrigin: 11.4,
      transformStyle: 11.4,
      transformOriginZ: 11.4,
      animation: 11.4,
      animationDelay: 11.4,
      animationDirection: 11.4,
      animationFillMode: 11.4,
      animationDuration: 11.4,
      animationIterationCount: 11.4,
      animationName: 11.4,
      animationPlayState: 11.4,
      animationTimingFunction: 11.4,
      appearance: 11.4,
      userSelect: 11.4,
      textEmphasisPosition: 11.4,
      textEmphasis: 11.4,
      textEmphasisStyle: 11.4,
      textEmphasisColor: 11.4,
      clipPath: 11.4,
      maskImage: 11.4,
      maskMode: 11.4,
      maskRepeat: 11.4,
      maskPosition: 11.4,
      maskClip: 11.4,
      maskOrigin: 11.4,
      maskSize: 11.4,
      maskComposite: 11.4,
      mask: 11.4,
      maskBorderSource: 11.4,
      maskBorderMode: 11.4,
      maskBorderSlice: 11.4,
      maskBorderWidth: 11.4,
      maskBorderOutset: 11.4,
      maskBorderRepeat: 11.4,
      maskBorder: 11.4,
      maskType: 11.4,
      textSizeAdjust: 11.4,
      filter: 11.4,
      hyphens: 11.4,
      fontFeatureSettings: 11.4,
      breakAfter: 11.4,
      breakBefore: 11.4,
      breakInside: 11.4,
      columnCount: 11.4,
      columnFill: 11.4,
      columnGap: 11.4,
      columnRule: 11.4,
      columnRuleColor: 11.4,
      columnRuleStyle: 11.4,
      columnRuleWidth: 11.4,
      columns: 11.4,
      columnSpan: 11.4,
      columnWidth: 11.4,
      writingMode: 11.4
    },
    op_mini: {}
  }
});

/***/ }),

/***/ "./node_modules/radium/es/prefix-data/static.js":
/*!******************************************************!*\
  !*** ./node_modules/radium/es/prefix-data/static.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var inline_style_prefixer_static_plugins_calc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! inline-style-prefixer/static/plugins/calc */ "./node_modules/inline-style-prefixer/static/plugins/calc.js");
/* harmony import */ var inline_style_prefixer_static_plugins_calc__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(inline_style_prefixer_static_plugins_calc__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var inline_style_prefixer_static_plugins_crossFade__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! inline-style-prefixer/static/plugins/crossFade */ "./node_modules/inline-style-prefixer/static/plugins/crossFade.js");
/* harmony import */ var inline_style_prefixer_static_plugins_crossFade__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(inline_style_prefixer_static_plugins_crossFade__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var inline_style_prefixer_static_plugins_cursor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! inline-style-prefixer/static/plugins/cursor */ "./node_modules/inline-style-prefixer/static/plugins/cursor.js");
/* harmony import */ var inline_style_prefixer_static_plugins_cursor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(inline_style_prefixer_static_plugins_cursor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var inline_style_prefixer_static_plugins_filter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! inline-style-prefixer/static/plugins/filter */ "./node_modules/inline-style-prefixer/static/plugins/filter.js");
/* harmony import */ var inline_style_prefixer_static_plugins_filter__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(inline_style_prefixer_static_plugins_filter__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var inline_style_prefixer_static_plugins_flex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! inline-style-prefixer/static/plugins/flex */ "./node_modules/inline-style-prefixer/static/plugins/flex.js");
/* harmony import */ var inline_style_prefixer_static_plugins_flex__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(inline_style_prefixer_static_plugins_flex__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var inline_style_prefixer_static_plugins_flexboxIE__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! inline-style-prefixer/static/plugins/flexboxIE */ "./node_modules/inline-style-prefixer/static/plugins/flexboxIE.js");
/* harmony import */ var inline_style_prefixer_static_plugins_flexboxIE__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(inline_style_prefixer_static_plugins_flexboxIE__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var inline_style_prefixer_static_plugins_flexboxOld__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! inline-style-prefixer/static/plugins/flexboxOld */ "./node_modules/inline-style-prefixer/static/plugins/flexboxOld.js");
/* harmony import */ var inline_style_prefixer_static_plugins_flexboxOld__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(inline_style_prefixer_static_plugins_flexboxOld__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var inline_style_prefixer_static_plugins_gradient__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! inline-style-prefixer/static/plugins/gradient */ "./node_modules/inline-style-prefixer/static/plugins/gradient.js");
/* harmony import */ var inline_style_prefixer_static_plugins_gradient__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(inline_style_prefixer_static_plugins_gradient__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var inline_style_prefixer_static_plugins_imageSet__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! inline-style-prefixer/static/plugins/imageSet */ "./node_modules/inline-style-prefixer/static/plugins/imageSet.js");
/* harmony import */ var inline_style_prefixer_static_plugins_imageSet__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(inline_style_prefixer_static_plugins_imageSet__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var inline_style_prefixer_static_plugins_position__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! inline-style-prefixer/static/plugins/position */ "./node_modules/inline-style-prefixer/static/plugins/position.js");
/* harmony import */ var inline_style_prefixer_static_plugins_position__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(inline_style_prefixer_static_plugins_position__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var inline_style_prefixer_static_plugins_sizing__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! inline-style-prefixer/static/plugins/sizing */ "./node_modules/inline-style-prefixer/static/plugins/sizing.js");
/* harmony import */ var inline_style_prefixer_static_plugins_sizing__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(inline_style_prefixer_static_plugins_sizing__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var inline_style_prefixer_static_plugins_transition__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! inline-style-prefixer/static/plugins/transition */ "./node_modules/inline-style-prefixer/static/plugins/transition.js");
/* harmony import */ var inline_style_prefixer_static_plugins_transition__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(inline_style_prefixer_static_plugins_transition__WEBPACK_IMPORTED_MODULE_11__);












var w = ['Webkit'];
var m = ['Moz'];
var ms = ['ms'];
var wm = ['Webkit', 'Moz'];
var wms = ['Webkit', 'ms'];
var wmms = ['Webkit', 'Moz', 'ms'];

/* harmony default export */ __webpack_exports__["default"] = ({
  plugins: [inline_style_prefixer_static_plugins_calc__WEBPACK_IMPORTED_MODULE_0___default.a, inline_style_prefixer_static_plugins_crossFade__WEBPACK_IMPORTED_MODULE_1___default.a, inline_style_prefixer_static_plugins_cursor__WEBPACK_IMPORTED_MODULE_2___default.a, inline_style_prefixer_static_plugins_filter__WEBPACK_IMPORTED_MODULE_3___default.a, inline_style_prefixer_static_plugins_flex__WEBPACK_IMPORTED_MODULE_4___default.a, inline_style_prefixer_static_plugins_flexboxIE__WEBPACK_IMPORTED_MODULE_5___default.a, inline_style_prefixer_static_plugins_flexboxOld__WEBPACK_IMPORTED_MODULE_6___default.a, inline_style_prefixer_static_plugins_gradient__WEBPACK_IMPORTED_MODULE_7___default.a, inline_style_prefixer_static_plugins_imageSet__WEBPACK_IMPORTED_MODULE_8___default.a, inline_style_prefixer_static_plugins_position__WEBPACK_IMPORTED_MODULE_9___default.a, inline_style_prefixer_static_plugins_sizing__WEBPACK_IMPORTED_MODULE_10___default.a, inline_style_prefixer_static_plugins_transition__WEBPACK_IMPORTED_MODULE_11___default.a],
  prefixMap: {
    transform: wms,
    transformOrigin: wms,
    transformOriginX: wms,
    transformOriginY: wms,
    backfaceVisibility: w,
    perspective: w,
    perspectiveOrigin: w,
    transformStyle: w,
    transformOriginZ: w,
    animation: w,
    animationDelay: w,
    animationDirection: w,
    animationFillMode: w,
    animationDuration: w,
    animationIterationCount: w,
    animationName: w,
    animationPlayState: w,
    animationTimingFunction: w,
    appearance: wm,
    userSelect: wmms,
    fontKerning: w,
    textEmphasisPosition: w,
    textEmphasis: w,
    textEmphasisStyle: w,
    textEmphasisColor: w,
    boxDecorationBreak: w,
    clipPath: w,
    maskImage: w,
    maskMode: w,
    maskRepeat: w,
    maskPosition: w,
    maskClip: w,
    maskOrigin: w,
    maskSize: w,
    maskComposite: w,
    mask: w,
    maskBorderSource: w,
    maskBorderMode: w,
    maskBorderSlice: w,
    maskBorderWidth: w,
    maskBorderOutset: w,
    maskBorderRepeat: w,
    maskBorder: w,
    maskType: w,
    textDecorationStyle: wm,
    textDecorationSkip: wm,
    textDecorationLine: wm,
    textDecorationColor: wm,
    filter: w,
    fontFeatureSettings: wm,
    breakAfter: wmms,
    breakBefore: wmms,
    breakInside: wmms,
    columnCount: wm,
    columnFill: wm,
    columnGap: wm,
    columnRule: wm,
    columnRuleColor: wm,
    columnRuleStyle: wm,
    columnRuleWidth: wm,
    columns: wm,
    columnSpan: wm,
    columnWidth: wm,
    writingMode: wms,
    flex: wms,
    flexBasis: w,
    flexDirection: wms,
    flexGrow: w,
    flexFlow: wms,
    flexShrink: w,
    flexWrap: wms,
    alignContent: w,
    alignItems: w,
    alignSelf: w,
    justifyContent: w,
    order: w,
    transitionDelay: w,
    transitionDuration: w,
    transitionProperty: w,
    transitionTimingFunction: w,
    backdropFilter: w,
    scrollSnapType: wms,
    scrollSnapPointsX: wms,
    scrollSnapPointsY: wms,
    scrollSnapDestination: wms,
    scrollSnapCoordinate: wms,
    shapeImageThreshold: w,
    shapeImageMargin: w,
    shapeImageOutside: w,
    hyphens: wmms,
    flowInto: wms,
    flowFrom: wms,
    regionFragment: wms,
    boxSizing: m,
    textAlignLast: m,
    tabSize: m,
    wrapFlow: ms,
    wrapThrough: ms,
    wrapMargin: ms,
    touchAction: ms,
    gridTemplateColumns: ms,
    gridTemplateRows: ms,
    gridTemplateAreas: ms,
    gridTemplate: ms,
    gridAutoColumns: ms,
    gridAutoRows: ms,
    gridAutoFlow: ms,
    grid: ms,
    gridRowStart: ms,
    gridColumnStart: ms,
    gridRowEnd: ms,
    gridRow: ms,
    gridColumn: ms,
    gridColumnEnd: ms,
    gridColumnGap: ms,
    gridRowGap: ms,
    gridArea: ms,
    gridGap: ms,
    textSizeAdjust: wms,
    borderImage: w,
    borderImageOutset: w,
    borderImageRepeat: w,
    borderImageSlice: w,
    borderImageSource: w,
    borderImageWidth: w
  }
});

/***/ }),

/***/ "./node_modules/radium/es/prefixer.js":
/*!********************************************!*\
  !*** ./node_modules/radium/es/prefixer.js ***!
  \********************************************/
/*! exports provided: getPrefixedKeyframes, getPrefixedStyle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPrefixedKeyframes", function() { return getPrefixedKeyframes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPrefixedStyle", function() { return getPrefixedStyle; });
/* harmony import */ var inline_style_prefixer_static_createPrefixer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! inline-style-prefixer/static/createPrefixer */ "./node_modules/inline-style-prefixer/static/createPrefixer.js");
/* harmony import */ var inline_style_prefixer_static_createPrefixer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(inline_style_prefixer_static_createPrefixer__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var inline_style_prefixer_dynamic_createPrefixer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! inline-style-prefixer/dynamic/createPrefixer */ "./node_modules/inline-style-prefixer/dynamic/createPrefixer.js");
/* harmony import */ var inline_style_prefixer_dynamic_createPrefixer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(inline_style_prefixer_dynamic_createPrefixer__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var exenv__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! exenv */ "./node_modules/exenv/index.js");
/* harmony import */ var exenv__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(exenv__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _prefix_data_static__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./prefix-data/static */ "./node_modules/radium/es/prefix-data/static.js");
/* harmony import */ var _prefix_data_dynamic__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./prefix-data/dynamic */ "./node_modules/radium/es/prefix-data/dynamic.js");
/* harmony import */ var _camel_case_props_to_dash_case__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./camel-case-props-to-dash-case */ "./node_modules/radium/es/camel-case-props-to-dash-case.js");
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * Based on https://github.com/jsstyles/css-vendor, but without having to
 * convert between different cases all the time.
 *
 * 
 */










var prefixAll = inline_style_prefixer_static_createPrefixer__WEBPACK_IMPORTED_MODULE_0___default()(_prefix_data_static__WEBPACK_IMPORTED_MODULE_3__["default"]);
var InlineStylePrefixer = inline_style_prefixer_dynamic_createPrefixer__WEBPACK_IMPORTED_MODULE_1___default()(_prefix_data_dynamic__WEBPACK_IMPORTED_MODULE_4__["default"], prefixAll);

function transformValues(style) {
  return Object.keys(style).reduce(function (newStyle, key) {
    var value = style[key];
    if (Array.isArray(value)) {
      value = value.join(';' + key + ':');
    } else if (value && (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object' && typeof value.toString === 'function') {
      value = value.toString();
    }

    newStyle[key] = value;
    return newStyle;
  }, {});
}

// Flatten prefixed values that are arrays to strings.
//
// We get prefixed styles back in the form of:
// - `display: "flex"` OR
// - `display: "-webkit-flex"` OR
// - `display: [/* ... */, "-webkit-flex", "flex"]
//
// The last form is problematic for eventual use in the browser and server
// render. More confusingly, we have to do **different** things on the
// browser and server (noted inline below).
//
// https://github.com/FormidableLabs/radium/issues/958
function flattenStyleValues(style) {
  return Object.keys(style).reduce(function (newStyle, key) {
    var val = style[key];
    if (Array.isArray(val)) {
      if (exenv__WEBPACK_IMPORTED_MODULE_2___default.a.canUseDOM) {
        // For the **browser**, when faced with multiple values, we just take
        // the **last** one, which is the original passed in value before
        // prefixing. This _should_ work, because `inline-style-prefixer`
        // we're just passing through what would happen without ISP.

        val = val[val.length - 1].toString();
      } else {
        // For the **server**, we just concatenate things together and convert
        // the style object values into a hacked-up string of like `display:
        // "-webkit-flex;display:flex"` that will SSR render correctly to like
        // `"display:-webkit-flex;display:flex"` but would otherwise be
        // totally invalid values.

        // We convert keys to dash-case only for the serialize values and
        // leave the real key camel-cased so it's as expected to React and
        // other parts of the processing chain.
        val = val.join(';' + Object(_camel_case_props_to_dash_case__WEBPACK_IMPORTED_MODULE_5__["camelCaseToDashCase"])(key) + ':');
      }
    }

    newStyle[key] = val;
    return newStyle;
  }, {});
}

var _hasWarnedAboutUserAgent = false;
var _lastUserAgent = void 0;
var _cachedPrefixer = void 0;

function getPrefixer(userAgent) {
  var actualUserAgent = userAgent || global && global.navigator && global.navigator.userAgent;

  if (true) {
    if (!actualUserAgent && !_hasWarnedAboutUserAgent) {
      /* eslint-disable no-console */
      console.warn('Radium: userAgent should be supplied for server-side rendering. See ' + 'https://github.com/FormidableLabs/radium/tree/master/docs/api#radium ' + 'for more information.');
      /* eslint-enable no-console */
      _hasWarnedAboutUserAgent = true;
    }
  }

  if ( false || !_cachedPrefixer || actualUserAgent !== _lastUserAgent) {
    if (actualUserAgent === 'all') {
      _cachedPrefixer = {
        prefix: prefixAll,
        prefixedKeyframes: 'keyframes'
      };
    } else {
      _cachedPrefixer = new InlineStylePrefixer({ userAgent: actualUserAgent });
    }
    _lastUserAgent = actualUserAgent;
  }

  return _cachedPrefixer;
}

function getPrefixedKeyframes(userAgent) {
  return getPrefixer(userAgent).prefixedKeyframes || 'keyframes';
}

// Returns a new style object with vendor prefixes added to property names and
// values.
function getPrefixedStyle(style, userAgent) {
  var styleWithFallbacks = transformValues(style);
  var prefixer = getPrefixer(userAgent);
  var prefixedStyle = prefixer.prefix(styleWithFallbacks);
  var flattenedStyle = flattenStyleValues(prefixedStyle);
  return flattenedStyle;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/radium/es/resolve-styles.js":
/*!**************************************************!*\
  !*** ./node_modules/radium/es/resolve-styles.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _append_important_to_each_value__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./append-important-to-each-value */ "./node_modules/radium/es/append-important-to-each-value.js");
/* harmony import */ var _css_rule_set_to_string__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./css-rule-set-to-string */ "./node_modules/radium/es/css-rule-set-to-string.js");
/* harmony import */ var _get_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./get-state */ "./node_modules/radium/es/get-state.js");
/* harmony import */ var _get_state_key__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./get-state-key */ "./node_modules/radium/es/get-state-key.js");
/* harmony import */ var _clean_state_key__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./clean-state-key */ "./node_modules/radium/es/clean-state-key.js");
/* harmony import */ var _get_radium_style_state__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./get-radium-style-state */ "./node_modules/radium/es/get-radium-style-state.js");
/* harmony import */ var _hash__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./hash */ "./node_modules/radium/es/hash.js");
/* harmony import */ var _merge_styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./merge-styles */ "./node_modules/radium/es/merge-styles.js");
/* harmony import */ var _plugins___WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./plugins/ */ "./node_modules/radium/es/plugins/index.js");
/* harmony import */ var exenv__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! exenv */ "./node_modules/exenv/index.js");
/* harmony import */ var exenv__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(exenv__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };















var DEFAULT_CONFIG = {
  plugins: [_plugins___WEBPACK_IMPORTED_MODULE_8__["default"].mergeStyleArray, _plugins___WEBPACK_IMPORTED_MODULE_8__["default"].checkProps, _plugins___WEBPACK_IMPORTED_MODULE_8__["default"].resolveMediaQueries, _plugins___WEBPACK_IMPORTED_MODULE_8__["default"].resolveInteractionStyles, _plugins___WEBPACK_IMPORTED_MODULE_8__["default"].keyframes, _plugins___WEBPACK_IMPORTED_MODULE_8__["default"].visited, _plugins___WEBPACK_IMPORTED_MODULE_8__["default"].removeNestedStyles, _plugins___WEBPACK_IMPORTED_MODULE_8__["default"].prefix, _plugins___WEBPACK_IMPORTED_MODULE_8__["default"].checkProps]
};

// Gross
var globalState = {};

// Declare early for recursive helpers.
var _resolveStyles5 = null;

var _shouldResolveStyles = function _shouldResolveStyles(component) {
  return component.type && !component.type._isRadiumEnhanced;
};

var _resolveChildren = function _resolveChildren(_ref) {
  var children = _ref.children,
      component = _ref.component,
      config = _ref.config,
      existingKeyMap = _ref.existingKeyMap,
      extraStateKeyMap = _ref.extraStateKeyMap;

  if (!children) {
    return children;
  }

  var childrenType = typeof children === 'undefined' ? 'undefined' : _typeof(children);

  if (childrenType === 'string' || childrenType === 'number') {
    // Don't do anything with a single primitive child
    return children;
  }

  if (childrenType === 'function') {
    // Wrap the function, resolving styles on the result
    return function () {
      var result = children.apply(this, arguments);

      if (react__WEBPACK_IMPORTED_MODULE_10___default.a.isValidElement(result)) {
        var _key = Object(_get_state_key__WEBPACK_IMPORTED_MODULE_3__["default"])(result);
        delete extraStateKeyMap[_key];

        var _resolveStyles = _resolveStyles5(component, result, config, existingKeyMap, true, extraStateKeyMap),
            _element = _resolveStyles.element;

        return _element;
      }

      return result;
    };
  }

  if (react__WEBPACK_IMPORTED_MODULE_10___default.a.Children.count(children) === 1 && children.type) {
    // If a React Element is an only child, don't wrap it in an array for
    // React.Children.map() for React.Children.only() compatibility.
    var onlyChild = react__WEBPACK_IMPORTED_MODULE_10___default.a.Children.only(children);
    var _key2 = Object(_get_state_key__WEBPACK_IMPORTED_MODULE_3__["default"])(onlyChild);
    delete extraStateKeyMap[_key2];

    var _resolveStyles2 = _resolveStyles5(component, onlyChild, config, existingKeyMap, true, extraStateKeyMap),
        _element2 = _resolveStyles2.element;

    return _element2;
  }

  return react__WEBPACK_IMPORTED_MODULE_10___default.a.Children.map(children, function (child) {
    if (react__WEBPACK_IMPORTED_MODULE_10___default.a.isValidElement(child)) {
      var _key3 = Object(_get_state_key__WEBPACK_IMPORTED_MODULE_3__["default"])(child);
      delete extraStateKeyMap[_key3];

      var _resolveStyles3 = _resolveStyles5(component, child, config, existingKeyMap, true, extraStateKeyMap),
          _element3 = _resolveStyles3.element;

      return _element3;
    }

    return child;
  });
};

// Recurse over props, just like children
var _resolveProps = function _resolveProps(_ref2) {
  var component = _ref2.component,
      config = _ref2.config,
      existingKeyMap = _ref2.existingKeyMap,
      props = _ref2.props,
      extraStateKeyMap = _ref2.extraStateKeyMap;

  var newProps = props;

  Object.keys(props).forEach(function (prop) {
    // We already recurse over children above
    if (prop === 'children') {
      return;
    }

    var propValue = props[prop];
    if (react__WEBPACK_IMPORTED_MODULE_10___default.a.isValidElement(propValue)) {
      var _key4 = Object(_get_state_key__WEBPACK_IMPORTED_MODULE_3__["default"])(propValue);
      delete extraStateKeyMap[_key4];
      newProps = _extends({}, newProps);

      var _resolveStyles4 = _resolveStyles5(component, propValue, config, existingKeyMap, true, extraStateKeyMap),
          _element4 = _resolveStyles4.element;

      newProps[prop] = _element4;
    }
  });

  return newProps;
};

var _buildGetKey = function _buildGetKey(_ref3) {
  var componentName = _ref3.componentName,
      existingKeyMap = _ref3.existingKeyMap,
      renderedElement = _ref3.renderedElement;

  // We need a unique key to correlate state changes due to user interaction
  // with the rendered element, so we know to apply the proper interactive
  // styles.
  var originalKey = Object(_get_state_key__WEBPACK_IMPORTED_MODULE_3__["default"])(renderedElement);
  var key = Object(_clean_state_key__WEBPACK_IMPORTED_MODULE_4__["default"])(originalKey);

  var alreadyGotKey = false;
  var getKey = function getKey() {
    if (alreadyGotKey) {
      return key;
    }

    alreadyGotKey = true;

    if (existingKeyMap[key]) {
      var elementName = void 0;
      if (typeof renderedElement.type === 'string') {
        elementName = renderedElement.type;
      } else if (renderedElement.type.constructor) {
        elementName = renderedElement.type.constructor.displayName || renderedElement.type.constructor.name;
      }

      throw new Error('Radium requires each element with interactive styles to have a unique ' + 'key, set using either the ref or key prop. ' + (originalKey ? 'Key "' + originalKey + '" is a duplicate.' : 'Multiple elements have no key specified.') + ' ' + 'Component: "' + componentName + '". ' + (elementName ? 'Element: "' + elementName + '".' : ''));
    }

    existingKeyMap[key] = true;

    return key;
  };

  return getKey;
};

var _setStyleState = function _setStyleState(component, key, stateKey, value) {
  if (!component._radiumIsMounted) {
    return;
  }

  var existing = Object(_get_radium_style_state__WEBPACK_IMPORTED_MODULE_5__["default"])(component);
  var state = { _radiumStyleState: _extends({}, existing) };

  state._radiumStyleState[key] = _extends({}, state._radiumStyleState[key]);
  state._radiumStyleState[key][stateKey] = value;

  component._lastRadiumState = state._radiumStyleState;
  component.setState(state);
};

var _runPlugins = function _runPlugins(_ref4) {
  var component = _ref4.component,
      config = _ref4.config,
      existingKeyMap = _ref4.existingKeyMap,
      props = _ref4.props,
      renderedElement = _ref4.renderedElement;

  // Don't run plugins if renderedElement is not a simple ReactDOMElement or has
  // no style.
  if (!react__WEBPACK_IMPORTED_MODULE_10___default.a.isValidElement(renderedElement) || typeof renderedElement.type !== 'string' || !props.style) {
    return props;
  }

  var newProps = props;

  var plugins = config.plugins || DEFAULT_CONFIG.plugins;

  var componentName = component.constructor.displayName || component.constructor.name;
  var getKey = _buildGetKey({
    renderedElement: renderedElement,
    existingKeyMap: existingKeyMap,
    componentName: componentName
  });
  var getComponentField = function getComponentField(key) {
    return component[key];
  };
  var getGlobalState = function getGlobalState(key) {
    return globalState[key];
  };
  var componentGetState = function componentGetState(stateKey, elementKey) {
    return Object(_get_state__WEBPACK_IMPORTED_MODULE_2__["default"])(component.state, elementKey || getKey(), stateKey);
  };
  var setState = function setState(stateKey, value, elementKey) {
    return _setStyleState(component, elementKey || getKey(), stateKey, value);
  };

  var addCSS = function addCSS(css) {
    var styleKeeper = component._radiumStyleKeeper || component.context._radiumStyleKeeper;
    if (!styleKeeper) {
      if (__isTestModeEnabled) {
        return {
          remove: function remove() {}
        };
      }

      throw new Error('To use plugins requiring `addCSS` (e.g. keyframes, media queries), ' + 'please wrap your application in the StyleRoot component. Component ' + 'name: `' + componentName + '`.');
    }

    return styleKeeper.addCSS(css);
  };

  var newStyle = props.style;

  plugins.forEach(function (plugin) {
    var result = plugin({
      ExecutionEnvironment: exenv__WEBPACK_IMPORTED_MODULE_9___default.a,
      addCSS: addCSS,
      appendImportantToEachValue: _append_important_to_each_value__WEBPACK_IMPORTED_MODULE_0__["default"],
      componentName: componentName,
      config: config,
      cssRuleSetToString: _css_rule_set_to_string__WEBPACK_IMPORTED_MODULE_1__["default"],
      getComponentField: getComponentField,
      getGlobalState: getGlobalState,
      getState: componentGetState,
      hash: _hash__WEBPACK_IMPORTED_MODULE_6__["default"],
      mergeStyles: _merge_styles__WEBPACK_IMPORTED_MODULE_7__["mergeStyles"],
      props: newProps,
      setState: setState,
      isNestedStyle: _merge_styles__WEBPACK_IMPORTED_MODULE_7__["isNestedStyle"],
      style: newStyle
    }) || {};

    newStyle = result.style || newStyle;

    newProps = result.props && Object.keys(result.props).length ? _extends({}, newProps, result.props) : newProps;

    var newComponentFields = result.componentFields || {};
    Object.keys(newComponentFields).forEach(function (fieldName) {
      component[fieldName] = newComponentFields[fieldName];
    });

    var newGlobalState = result.globalState || {};
    Object.keys(newGlobalState).forEach(function (key) {
      globalState[key] = newGlobalState[key];
    });
  });

  if (newStyle !== props.style) {
    newProps = _extends({}, newProps, { style: newStyle });
  }

  return newProps;
};

// Wrapper around React.cloneElement. To avoid processing the same element
// twice, whenever we clone an element add a special prop to make sure we don't
// process this element again.
var _cloneElement = function _cloneElement(renderedElement, newProps, newChildren) {
  // Only add flag if this is a normal DOM element
  if (typeof renderedElement.type === 'string') {
    newProps = _extends({}, newProps, { 'data-radium': true });
  }

  return react__WEBPACK_IMPORTED_MODULE_10___default.a.cloneElement(renderedElement, newProps, newChildren);
};

//
// The nucleus of Radium. resolveStyles is called on the rendered elements
// before they are returned in render. It iterates over the elements and
// children, rewriting props to add event handlers required to capture user
// interactions (e.g. mouse over). It also replaces the style prop because it
// adds in the various interaction styles (e.g. :hover).
//
/* eslint-disable max-params */
_resolveStyles5 = function resolveStyles(component, // ReactComponent, flow+eslint complaining
renderedElement) {
  var config = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : DEFAULT_CONFIG;
  var existingKeyMap = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  var shouldCheckBeforeResolve = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
  var extraStateKeyMap = arguments[5];

  // The extraStateKeyMap is for determining which keys should be erased from
  // the state (i.e. which child components are unmounted and should no longer
  // have a style state).
  if (!extraStateKeyMap) {
    var state = Object(_get_radium_style_state__WEBPACK_IMPORTED_MODULE_5__["default"])(component);
    extraStateKeyMap = Object.keys(state).reduce(function (acc, key) {
      // 'main' is the auto-generated key when there is only one element with
      // interactive styles and if a custom key is not assigned. Because of
      // this, it is impossible to know which child is 'main', so we won't
      // count this key when generating our extraStateKeyMap.
      if (key !== 'main') {
        acc[key] = true;
      }
      return acc;
    }, {});
  }

  if (Array.isArray(renderedElement) && !renderedElement.props) {
    var elements = renderedElement.map(function (element) {
      // element is in-use, so remove from the extraStateKeyMap
      if (extraStateKeyMap) {
        var _key5 = Object(_get_state_key__WEBPACK_IMPORTED_MODULE_3__["default"])(element);
        delete extraStateKeyMap[_key5];
      }

      // this element is an array of elements,
      // so return an array of elements with resolved styles
      return _resolveStyles5(component, element, config, existingKeyMap, shouldCheckBeforeResolve, extraStateKeyMap).element;
    });
    return {
      extraStateKeyMap: extraStateKeyMap,
      element: elements
    };
  }

  // ReactElement
  if (!renderedElement ||
  // Bail if we've already processed this element. This ensures that only the
  // owner of an element processes that element, since the owner's render
  // function will be called first (which will always be the case, since you
  // can't know what else to render until you render the parent component).
  renderedElement.props && renderedElement.props['data-radium'] ||
  // Bail if this element is a radium enhanced element, because if it is,
  // then it will take care of resolving its own styles.
  shouldCheckBeforeResolve && !_shouldResolveStyles(renderedElement)) {
    return { extraStateKeyMap: extraStateKeyMap, element: renderedElement };
  }

  var children = renderedElement.props.children;

  var newChildren = _resolveChildren({
    children: children,
    component: component,
    config: config,
    existingKeyMap: existingKeyMap,
    extraStateKeyMap: extraStateKeyMap
  });

  var newProps = _resolveProps({
    component: component,
    config: config,
    existingKeyMap: existingKeyMap,
    extraStateKeyMap: extraStateKeyMap,
    props: renderedElement.props
  });

  newProps = _runPlugins({
    component: component,
    config: config,
    existingKeyMap: existingKeyMap,
    props: newProps,
    renderedElement: renderedElement
  });

  // If nothing changed, don't bother cloning the element. Might be a bit
  // wasteful, as we add the sentinel to stop double-processing when we clone.
  // Assume benign double-processing is better than unneeded cloning.
  if (newChildren === children && newProps === renderedElement.props) {
    return { extraStateKeyMap: extraStateKeyMap, element: renderedElement };
  }

  var element = _cloneElement(renderedElement, newProps !== renderedElement.props ? newProps : {}, newChildren);

  return { extraStateKeyMap: extraStateKeyMap, element: element };
};
/* eslint-enable max-params */

// Only for use by tests
var __isTestModeEnabled = false;
if (true) {
  _resolveStyles5.__clearStateForTests = function () {
    globalState = {};
  };
  _resolveStyles5.__setTestMode = function (isEnabled) {
    __isTestModeEnabled = isEnabled;
  };
}

/* harmony default export */ __webpack_exports__["default"] = (_resolveStyles5);

/***/ }),

/***/ "./node_modules/radium/es/style-keeper.js":
/*!************************************************!*\
  !*** ./node_modules/radium/es/style-keeper.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return StyleKeeper; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StyleKeeper = function () {
  function StyleKeeper(userAgent) {
    _classCallCheck(this, StyleKeeper);

    this._userAgent = userAgent;
    this._listeners = [];
    this._cssSet = {};
  }

  _createClass(StyleKeeper, [{
    key: 'subscribe',
    value: function subscribe(listener) {
      var _this = this;

      if (this._listeners.indexOf(listener) === -1) {
        this._listeners.push(listener);
      }

      return {
        // Must be fat arrow to capture `this`
        remove: function remove() {
          var listenerIndex = _this._listeners.indexOf(listener);
          if (listenerIndex > -1) {
            _this._listeners.splice(listenerIndex, 1);
          }
        }
      };
    }
  }, {
    key: 'addCSS',
    value: function addCSS(css) {
      var _this2 = this;

      if (!this._cssSet[css]) {
        this._cssSet[css] = true;
        this._emitChange();
      }

      return {
        // Must be fat arrow to capture `this`
        remove: function remove() {
          delete _this2._cssSet[css];
          _this2._emitChange();
        }
      };
    }
  }, {
    key: 'getCSS',
    value: function getCSS() {
      return Object.keys(this._cssSet).join('\n');
    }
  }, {
    key: '_emitChange',
    value: function _emitChange() {
      this._listeners.forEach(function (listener) {
        return listener();
      });
    }
  }]);

  return StyleKeeper;
}();



/***/ }),

/***/ "./node_modules/react/index.js":
/*!*******************************************************************************************!*\
  !*** delegated ./node_modules/react/index.js from dll-reference dll_3681e7fd756237ce51c6 ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_3681e7fd756237ce51c6 */ "dll-reference dll_3681e7fd756237ce51c6"))("./node_modules/react/index.js");

/***/ }),

/***/ "./node_modules/webpack/buildin/amd-define.js":
/*!***************************************!*\
  !*** (webpack)/buildin/amd-define.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function() {
	throw new Error("define cannot be used indirect");
};


/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!******************************************************************************************************!*\
  !*** delegated ./node_modules/webpack/buildin/global.js from dll-reference dll_3681e7fd756237ce51c6 ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_3681e7fd756237ce51c6 */ "dll-reference dll_3681e7fd756237ce51c6"))("./node_modules/webpack/buildin/global.js");

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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var radium__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! radium */ "./node_modules/radium/es/index.js");
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

/***/ 1:
/*!*****************************************************************************************************************************************************************!*\
  !*** multi next-client-pages-loader?page=%2Freading-list&absolutePagePath=%2FUsers%2Frichkolasa%2FDocuments%2FDev%2Frichardkolasacom%2Fpages%2Freading-list.js ***!
  \*****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! next-client-pages-loader?page=%2Freading-list&absolutePagePath=%2FUsers%2Frichkolasa%2FDocuments%2FDev%2Frichardkolasacom%2Fpages%2Freading-list.js! */"./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Freading-list&absolutePagePath=%2FUsers%2Frichkolasa%2FDocuments%2FDev%2Frichardkolasacom%2Fpages%2Freading-list.js!./");


/***/ }),

/***/ "dll-reference dll_3681e7fd756237ce51c6":
/*!*******************************************!*\
  !*** external "dll_3681e7fd756237ce51c6" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = dll_3681e7fd756237ce51c6;

/***/ })

},[[1,"static/runtime/webpack.js"]]]));;
//# sourceMappingURL=reading-list.js.map