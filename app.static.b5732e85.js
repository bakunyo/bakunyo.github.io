(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  media: {
    notPc: "@media screen and (max-width: 800px) ",
    isPc: "@media screen and (min-width: 801px) ",
    pcWidth: "800px"
  },
  color: {
    accent: "#2199e8",
    accentHover: "#008cba"
  },
  border: "1px #aaa solid"
};

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("react-static");

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  title: "BAKUNOTE",
  description: "bakunyoの技術ノート。ruby, javascriptに関することやその他日々の記録です。",
  protocol: "https://",
  domain: "blog.bakunyo.com"
};

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("react-helmet");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("react-icons/lib/fa/calendar");

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.hatebuPath = hatebuPath;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _blog = __webpack_require__(4);

var _blog2 = _interopRequireDefault(_blog);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function hatebuPath(post) {
  return new Date(post.date) > new Date(2016, 6) ? post.path : post.path.slice(0, -1);
}

var Hatebu = function (_React$Component) {
  _inherits(Hatebu, _React$Component);

  function Hatebu() {
    _classCallCheck(this, Hatebu);

    return _possibleConstructorReturn(this, (Hatebu.__proto__ || Object.getPrototypeOf(Hatebu)).apply(this, arguments));
  }

  _createClass(Hatebu, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var button = this.node;
      var script = document.createElement("script");
      script.src = "https://b.st-hatena.com/js/bookmark_button.js";
      script.type = "text/javascript";
      script.charset = "utf-8";

      button.parentNode.appendChild(script);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var post = this.props.post;

      var path = hatebuPath(post);

      return _react2.default.createElement(
        "a",
        {
          ref: function ref(node) {
            return _this2.node = node;
          },
          href: "http://b.hatena.ne.jp/entry/" + _blog2.default.domain + path,
          className: "hatena-bookmark-button",
          "data-hatena-bookmark-layout": "vertical-large",
          "data-hatena-bookmark-lang": "ja",
          title: "\u3053\u306E\u30A8\u30F3\u30C8\u30EA\u30FC\u3092\u306F\u3066\u306A\u30D6\u30C3\u30AF\u30DE\u30FC\u30AF\u306B\u8FFD\u52A0"
        },
        _react2.default.createElement("img", {
          src: "https://b.st-hatena.com/images/entry-button/button-only@2x.png",
          alt: "\u3053\u306E\u30A8\u30F3\u30C8\u30EA\u30FC\u3092\u306F\u3066\u306A\u30D6\u30C3\u30AF\u30DE\u30FC\u30AF\u306B\u8FFD\u52A0",
          width: "20",
          height: "20",
          style: { border: "none" }
        })
      );
    }
  }]);

  return Hatebu;
}(_react2.default.Component);

exports.default = Hatebu;

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("react-icons/lib/fa/twitter");

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(10);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactHotLoader = __webpack_require__(11);

var _App = __webpack_require__(12);

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Export your top level component (for static rendering)
exports.default = _App2.default;

// Render your app


// Your top level component

if (typeof document !== 'undefined') {
  var renderMethod =  false ? _reactDom2.default.render : _reactDom2.default.hydrate;
  var render = function render(Comp) {
    renderMethod(_react2.default.createElement(
      _reactHotLoader.AppContainer,
      null,
      _react2.default.createElement(Comp, null)
    ), document.getElementById('root'));
  };

  // Render!
  render(_App2.default);

  // Hot Module Replacement
  if (false) {
    module.hot.accept('./App', function () {
      render(require('./App').default);
    });
  }
}

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("react-hot-loader");

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(["\n  body {\n    font-family: -apple-system, BlinkMacSystemFont, \"Helvetica Neue\", \"Segoe UI\",\"Noto Sans Japanese\",\"\u30D2\u30E9\u30AE\u30CE\u89D2\u30B4 ProN W3\", Meiryo, sans-serif;\n    font-weight: 400;\n    font-size: 16px;\n    margin: 0;\n    padding: 0;\n  }\n"], ["\n  body {\n    font-family: -apple-system, BlinkMacSystemFont, \"Helvetica Neue\", \"Segoe UI\",\"Noto Sans Japanese\",\"\u30D2\u30E9\u30AE\u30CE\u89D2\u30B4 ProN W3\", Meiryo, sans-serif;\n    font-weight: 400;\n    font-size: 16px;\n    margin: 0;\n    padding: 0;\n  }\n"]);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(3);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _reactStaticRoutes = __webpack_require__(13);

var _reactStaticRoutes2 = _interopRequireDefault(_reactStaticRoutes);

var _reactHelmet = __webpack_require__(5);

var _Header = __webpack_require__(23);

var _Header2 = _interopRequireDefault(_Header);

var _Footer = __webpack_require__(24);

var _Footer2 = _interopRequireDefault(_Footer);

var _styles = __webpack_require__(2);

var _styles2 = _interopRequireDefault(_styles);

var _blog = __webpack_require__(4);

var _blog2 = _interopRequireDefault(_blog);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

(0, _styledComponents.injectGlobal)(_templateObject);

var AppStyles = _styledComponents2.default.div.withConfig({
  displayName: "App__AppStyles"
})(["a{text-decoration:none;}", "{.content,nav{width:", ";margin:0 auto;}}.content{padding:1rem;}img{max-width:100%;}p.date{margin:0;svg{width:1.3rem;height:1.3rem;margin-right:0.5rem;}span{vertical-align:bottom;}}ul.tags{display:flex;list-style:none;padding-left:0;flex-wrap:wrap;li{font-size:0.9rem;background:", ";margin:0.2rem;color:#ffffff;padding:0.2rem 0.5rem;border-radius:0.1rem;cursor:pointer;&:first-child{margin-left:0;}&:hover{background:", ";transition:all 0.2s ease-in-out;}}}"], _styles2.default.media.isPc, _styles2.default.media.pcWidth, _styles2.default.color.accent, _styles2.default.color.accentHover);

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
  }

  _createClass(App, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        _reactStatic.Router,
        null,
        _react2.default.createElement(
          AppStyles,
          null,
          _react2.default.createElement(
            _reactHelmet.Helmet,
            {
              defaultTitle: _blog2.default.title,
              titleTemplate: "%s - " + _blog2.default.title
            },
            _react2.default.createElement("link", { rel: "canonical", href: "" + _blog2.default.protocol + _blog2.default.domain + "/" }),
            _react2.default.createElement("meta", { name: "description", content: _blog2.default.description })
          ),
          _react2.default.createElement(_Header2.default, null),
          _react2.default.createElement(
            "div",
            { className: "content" },
            _react2.default.createElement(_reactStaticRoutes2.default, null)
          ),
          _react2.default.createElement(_Footer2.default, null)
        )
      );
    }
  }]);

  return App;
}(_react2.default.Component);

exports.default = App;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(14);

var _PostList = __webpack_require__(15);

var _PostList2 = _interopRequireDefault(_PostList);

var _Post = __webpack_require__(18);

var _Post2 = _interopRequireDefault(_Post);

var _ = __webpack_require__(22);

var _2 = _interopRequireDefault(_);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Template Imports


// Template Map
var templateMap = {
  t_0: _PostList2.default,
  t_1: _Post2.default,
  t_2: _2.default

  // Template Tree
};var templateTree = { c: { "404": { t: "t_2" }, "2013": { c: { "10": { c: { "23": { c: { "floor_and_truncate": { t: "t_1" } } }, "25": { c: { "return_value_of_method_and_block": { t: "t_1" } } } } }, "11": { c: { "25": { c: { "user_define_method": { t: "t_1" } } } } }, "12": { c: { "18": { c: { "ruby_gold": { t: "t_1" } } } } }, "01": { c: { "16": { c: { "char_code": { t: "t_1" } } }, "18": { c: { "coffee_meeting": { t: "t_1" } } }, "31": { c: { "linefeeds": { t: "t_1" } } }, "06": { c: { "rest_of_pocket": { t: "t_1" } } }, "09": { c: { "learning_java": { t: "t_1" } } } } }, "02": { c: { "21": { c: { "archive_gmail": { t: "t_1" } } }, "24": { c: { "sublime_bracket_highlighter": { t: "t_1" } } } } }, "04": { c: { "15": { c: { "order_of_select_sql": { t: "t_1" } } }, "20": { c: { "css_in_rails": { t: "t_1" } } }, "24": { c: { "action_mailer": { t: "t_1" } } }, "25": { c: { "source_of_image_tag": { t: "t_1" } } }, "03": { c: { "cakephp_charcode": { t: "t_1" } } } } }, "05": { c: { "16": { c: { "css_position": { t: "t_1" } } }, "18": { c: { "one_liners": { t: "t_1" } } }, "23": { c: { "gem_command": { t: "t_1" } } }, "25": { c: { "daily_report_git": { t: "t_1" } } } } }, "06": { c: { "20": { c: { "crontab": { t: "t_1" } } }, "25": { c: { "regex_options": { t: "t_1" } } }, "27": { c: { "minitsuku2": { t: "t_1" } } } } }, "07": { c: { "11": { c: { "ruby_silver": { t: "t_1" } } }, "20": { c: { "install_sublime3": { t: "t_1" } } } } }, "08": { c: { "26": { c: { "undef_class_method": { t: "t_1" } } }, "27": { c: { "uploadify": { t: "t_1" } } } } }, "09": { c: { "04": { c: { "windows_files": { t: "t_1" } } } } } } }, "2014": { c: { "01": { c: { "30": { c: { "sublime_indent": { t: "t_1" } } } } }, "02": { c: { "16": { c: { "windows_alias": { t: "t_1" } } } } } } }, "2015": { c: { "11": { c: { "08": { c: { "ctrlp": { t: "t_1" } } } } }, "12": { c: { "27": { c: { "git-delete-merged": { t: "t_1" } } } } }, "05": { c: { "01": { c: { "ruby-define-const-in-method": { t: "t_1" } } }, "04": { c: { "rubygem_global": { t: "t_1" } } } } } } }, "2016": { c: { "10": { c: { "27": { c: { "rorororor": { t: "t_1" } } } } }, "12": { c: { "30": { c: { "devise-friendly-forwarding": { t: "t_1" } } } } }, "01": { c: { "08": { c: { "vimagit": { t: "t_1" } } } } }, "05": { c: { "06": { c: { "rake_rspec": { t: "t_1" } } } } }, "09": { c: { "20": { c: { "jekyll_to_middleman": { t: "t_1" } } } } } } }, "2017": { c: { "12": { c: { "17": { c: { "amazon-vpc": { t: "t_1" } } } } }, "02": { c: { "14": { c: { "kamakura-kaihatsu-gassyuku": { t: "t_1" } } } } }, "05": { c: { "27": { c: { "elixir-introduction": { t: "t_1" } } } } }, "07": { c: { "06": { c: { "docker-compose-rails": { t: "t_1" } } } } } } }, "/": { t: "t_0" }, "p2": { t: "t_0" }, "p3": { t: "t_0" }, "p4": { t: "t_0" }, "p5": { t: "t_0" }, "tags": { c: { "aws": { t: "t_0" }, "blog": { t: "t_0" }, "css": { t: "t_0" }, "deeplearning": { t: "t_0" }, "devise": { t: "t_0" }, "docker": { t: "t_0" }, "elixir": { t: "t_0" }, "encoding": { t: "t_0" }, "erlang": { t: "t_0" }, "git": { t: "t_0" }, "java": { t: "t_0" }, "jekyll": { t: "t_0" }, "jquery": { t: "t_0" }, "linux": { t: "t_0" }, "middleman": { t: "t_0" }, "php": { t: "t_0" }, "python": { t: "t_0" }, "rails": { t: "t_0" }, "rake": { t: "t_0" }, "react": { t: "t_0" }, "redux": { t: "t_0" }, "regex": { t: "t_0" }, "relay": { t: "t_0" }, "rspec": { t: "t_0" }, "ruby": { t: "t_0", c: { "p2": { t: "t_0" } } }, "security": { t: "t_0" }, "service": { t: "t_0" }, "sql": { t: "t_0" }, "sublime_text": { t: "t_0" }, "tensorflow": { t: "t_0" }, "vim": { t: "t_0" }, "vpc": { t: "t_0" }, "windows": { t: "t_0" } } } }

  // Get template for given path
};var getComponentForPath = function getComponentForPath(path) {
  var parts = path === '/' ? ['/'] : path.split('/').filter(function (d) {
    return d;
  });
  var cursor = templateTree;
  try {
    parts.forEach(function (part) {
      cursor = cursor.c[part];
    });
    return templateMap[cursor.t];
  } catch (e) {
    return false;
  }
};

var Routes = function (_Component) {
  _inherits(Routes, _Component);

  function Routes() {
    _classCallCheck(this, Routes);

    return _possibleConstructorReturn(this, (Routes.__proto__ || Object.getPrototypeOf(Routes)).apply(this, arguments));
  }

  _createClass(Routes, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          Comp = _props.component,
          render = _props.render,
          children = _props.children;

      var renderProps = {
        templateMap: templateMap,
        templateTree: templateTree,
        getComponentForPath: getComponentForPath
      };
      if (Comp) {
        return _react2.default.createElement(Comp, renderProps);
      }
      if (render || children) {
        return (render || children)(renderProps);
      }

      // This is the default auto-routing renderer
      return _react2.default.createElement(_reactRouterDom.Route, { path: '*', render: function render(props) {
          var Comp = getComponentForPath(props.location.pathname);
          if (!Comp) {
            Comp = getComponentForPath('404');
          }
          return Comp && _react2.default.createElement(Comp, props);
        } });
    }
  }]);

  return Routes;
}(_react.Component);

exports.default = Routes;

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(3);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _reactHelmet = __webpack_require__(5);

var _calendar = __webpack_require__(6);

var _calendar2 = _interopRequireDefault(_calendar);

var _styles = __webpack_require__(2);

var _styles2 = _interopRequireDefault(_styles);

var _blog = __webpack_require__(4);

var _blog2 = _interopRequireDefault(_blog);

var _Pagination = __webpack_require__(16);

var _Pagination2 = _interopRequireDefault(_Pagination);

var _hatebu = __webpack_require__(7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Styles = _styledComponents2.default.div.withConfig({
  displayName: "PostList__Styles"
})([".posts{margin-bottom:2rem;a{color:inherit;}a:visited{color:inherit;}article{border:", ";padding:1rem;margin-bottom:1rem;cursor:pointer;h2{margin:0.5rem 0;font-size:1.5rem;font-weight:normal;}&:hover bold{background:#eee;transition:all 0.2s ease-in-out;}ul.tags{margin:0;}img.hatebuImg{vertical-align:middle;margin-left:0.5rem;}}}"], _styles2.default.border);

var PostList = function (_React$Component) {
  _inherits(PostList, _React$Component);

  function PostList(_ref) {
    var props = _ref.props;

    _classCallCheck(this, PostList);

    var _this = _possibleConstructorReturn(this, (PostList.__proto__ || Object.getPrototypeOf(PostList)).call(this, props));

    _this.onClickPage = _this.onClickPage.bind(_this);
    _this.onTagClicked = _this.onTagClicked.bind(_this);
    return _this;
  }

  _createClass(PostList, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      if (typeof window === "undefined") {
        global.window = {};
      }

      window.scrollTo && window.scrollTo(0, 0);
    }
  }, {
    key: "onClickPage",
    value: function onClickPage(data) {
      var newPage = data.selected + 1;
      var path = location.pathname;
      var regex = /\/p\d+\/$/;
      var newPath = void 0;

      if (newPage === 1) {
        newPath = path.replace(regex, "/");
      } else {
        newPath = path.match(regex) ? path.replace(regex, "/p" + newPage + "/") : path + "p" + newPage + "/";
      }

      this.props.history.push(newPath);
      window.scrollTo(0, 0);
    }
  }, {
    key: "onTagClicked",
    value: function onTagClicked(e) {
      e.preventDefault();
      var href = e.target.dataset.href;
      this.props.history.push(href);
      window.scrollTo(0, 0);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          posts = _props.posts,
          title = _props.title,
          page = _props.page,
          path = _props.path;

      var href = "" + _blog2.default.protocol + _blog2.default.domain + path;

      return _react2.default.createElement(
        Styles,
        null,
        _react2.default.createElement(
          _reactHelmet.Helmet,
          null,
          _react2.default.createElement(
            "title",
            null,
            title
          ),
          _react2.default.createElement("link", { rel: "canonical", href: href }),
          _react2.default.createElement("meta", {
            name: "description",
            content: (title || "記事一覧") + " " + page.now + "\u30DA\u30FC\u30B8\u76EE\u3002" + _blog2.default.description
          })
        ),
        title === "" ? "" : _react2.default.createElement(
          "h1",
          null,
          title
        ),
        _react2.default.createElement(
          "div",
          { className: "posts" },
          posts.map(function (post) {
            return _react2.default.createElement(
              _reactStatic.Link,
              { key: "" + post.id, to: post.path },
              _react2.default.createElement(
                "article",
                null,
                _react2.default.createElement(
                  "p",
                  { className: "date" },
                  _react2.default.createElement(_calendar2.default, null),
                  _react2.default.createElement(
                    "span",
                    null,
                    post.date
                  ),
                  _react2.default.createElement("img", {
                    className: "hatebuImg",
                    src: "https://b.hatena.ne.jp/entry/image/http://" + _blog2.default.domain + (0, _hatebu.hatebuPath)(post)
                  })
                ),
                _react2.default.createElement(
                  "h2",
                  null,
                  post.title
                ),
                _react2.default.createElement(
                  "ul",
                  { className: "tags" },
                  post.tags.map(function (tag) {
                    return _react2.default.createElement(
                      "li",
                      {
                        key: post.id + "-" + tag,
                        "data-href": "/tags/" + tag + "/",
                        onClick: _this2.onTagClicked
                      },
                      tag
                    );
                  })
                )
              )
            );
          })
        ),
        parseInt(page.all) <= 1 ? "" : _react2.default.createElement(_Pagination2.default, { page: page, onPageChange: this.onClickPage })
      );
    }
  }]);

  return PostList;
}(_react2.default.Component);

exports.default = (0, _reactStatic.getRouteProps)(PostList);

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactPaginate = __webpack_require__(17);

var _reactPaginate2 = _interopRequireDefault(_reactPaginate);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styles = __webpack_require__(2);

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Styles = _styledComponents2.default.div.withConfig({
  displayName: "Pagination__Styles"
})(["ul{display:flex;list-style:none;justify-content:center;padding:0;margin:3rem 0 2rem 0;li{font-size:1rem;margin-left:0.4rem;cursor:pointer;a{border:1px #ccc solid;margin:0;padding:0.6rem 0.8rem;}&.active > a{background:", ";color:#fff;}}}"], _styles2.default.color.accent);

exports.default = function (_ref) {
  var page = _ref.page,
      onPageChange = _ref.onPageChange;
  return _react2.default.createElement(
    Styles,
    null,
    _react2.default.createElement(_reactPaginate2.default, {
      previousLabel: "<",
      nextLabel: ">",
      pageRangeDisplayed: 2,
      marginPagesDisplayed: 1,
      breakLabel: _react2.default.createElement(
        "a",
        { href: "" },
        "..."
      ),
      pageCount: parseInt(page.all),
      initialPage: parseInt(page.now) - 1,
      forcePage: parseInt(page.now) - 1,
      activeClassName: "active",
      onPageChange: onPageChange,
      disableInitialCallback: true
    })
  );
};

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("react-paginate");

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(3);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _reactHelmet = __webpack_require__(5);

var _calendar = __webpack_require__(6);

var _calendar2 = _interopRequireDefault(_calendar);

var _highlight = __webpack_require__(19);

var _highlight2 = _interopRequireDefault(_highlight);

var _hatebu = __webpack_require__(7);

var _hatebu2 = _interopRequireDefault(_hatebu);

var _twitter = __webpack_require__(20);

var _twitter2 = _interopRequireDefault(_twitter);

var _pocket = __webpack_require__(21);

var _pocket2 = _interopRequireDefault(_pocket);

var _styles = __webpack_require__(2);

var _styles2 = _interopRequireDefault(_styles);

var _blog = __webpack_require__(4);

var _blog2 = _interopRequireDefault(_blog);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Styles = _styledComponents2.default.div.withConfig({
  displayName: "Post__Styles"
})(["h1{font-size:2.5rem;}.postInfo{margin-bottom:3rem;.postMeta{margin-right:3rem;}}.socialButtons{display:flex;div,iframe{margin-right:0.5rem;}}.postContent{margin-bottom:5rem;ul.tags{margin:0.5rem 0;}h2{font-size:1.8rem;padding-bottom:0.5rem;border-bottom:1px #ccc solid;margin-top:4rem;}h3{font-size:1.6rem;margin-top:3rem;}h4{font-size:1.4rem;margin-top:2rem;}h5{font-size:1.3rem;}blockquote{font-size:1.3rem;font-style:italic;color:#aaa;border-top:1px #ccc solid;border-bottom:1px #ccc solid;width:95%;margin:2.5rem 0;}pre > code{padding:1.2rem;}p > code{background:#eaeaea;padding:0 0.4rem;border-radius:0.1rem;}table{border-collapse:collapse;th[style=\"text-align:right\"]{display:none;}td[style=\"text-align:right\"]{text-align:left !important;}width:100%;th{background:#555;color:#fff;border:1px #ccc solid;padding:1rem 0.8rem;}td{border:1px #ccc solid;padding:0.8rem;}}ul,ol{font-size:1.1rem;li{margin-bottom:0.3rem;}}hr{margin:3rem 0;}p{font-size:1.1rem;}img{margin:2rem 0;box-shadow:0px 5px 15px -5px rgba(0,0,0,0.8);}}"]);

var Post = function (_React$Component) {
  _inherits(Post, _React$Component);

  function Post() {
    _classCallCheck(this, Post);

    return _possibleConstructorReturn(this, (Post.__proto__ || Object.getPrototypeOf(Post)).apply(this, arguments));
  }

  _createClass(Post, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      if (typeof window === "undefined") {
        global.window = {};
      }

      window.scrollTo && window.scrollTo(0, 0);
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      [].forEach.call(document.getElementsByClassName("speakerdeck"), function (tag) {
        var script = document.createElement("script");
        script.src = "//speakerdeck.com/assets/embed.js";
        script.className = "speakerdeck-embed";
        script.dataset.id = tag.dataset.id;
        script.dataset.ratio = "1.33333333333333";
        tag.appendChild(script);
      });
    }
  }, {
    key: "render",
    value: function render() {
      var post = this.props.post;

      var tagComment = post.tags.length > 0 ? post.tags.join(",") + "\u306B\u95A2\u3059\u308B\u8A18\u4E8B\u3002" : "";

      return _react2.default.createElement(
        Styles,
        null,
        _react2.default.createElement(
          _reactHelmet.Helmet,
          null,
          _react2.default.createElement(
            "title",
            null,
            post.title
          ),
          _react2.default.createElement("link", {
            rel: "canonical",
            href: "" + _blog2.default.protocol + _blog2.default.domain + post.path
          }),
          _react2.default.createElement("meta", {
            name: "description",
            content: post.title + " " + tagComment + _blog2.default.description
          })
        ),
        _react2.default.createElement(
          "h1",
          null,
          post.title
        ),
        _react2.default.createElement(
          "div",
          { className: "postInfo" },
          _react2.default.createElement(
            "div",
            { className: "postMeta" },
            _react2.default.createElement(
              "p",
              { className: "date" },
              _react2.default.createElement(_calendar2.default, null),
              _react2.default.createElement(
                "span",
                null,
                post.date
              )
            ),
            _react2.default.createElement(
              "ul",
              { className: "tags" },
              post.tags.map(function (tag) {
                return _react2.default.createElement(
                  _reactStatic.Link,
                  { key: post.id + "-" + tag, to: "/tags/" + tag + "/" },
                  _react2.default.createElement(
                    "li",
                    null,
                    tag
                  )
                );
              })
            )
          )
        ),
        _react2.default.createElement("div", {
          className: "postContent",
          dangerouslySetInnerHTML: { __html: post.body }
        }),
        _react2.default.createElement(
          "div",
          { className: "socialButtons" },
          _react2.default.createElement(_twitter2.default, { post: post }),
          _react2.default.createElement(_hatebu2.default, { post: post }),
          _react2.default.createElement(_pocket2.default, null)
        )
      );
    }
  }]);

  return Post;
}(_react2.default.Component);

exports.default = (0, _reactStatic.getRouteProps)(Post);

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("highlight.js");

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _blog = __webpack_require__(4);

var _blog2 = _interopRequireDefault(_blog);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _twitter = __webpack_require__(8);

var _twitter2 = _interopRequireDefault(_twitter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Styles = _styledComponents2.default.div.withConfig({
  displayName: "twitter__Styles"
})(["a.button{display:block;padding:0.5rem 1rem;color:#fefefe;background:#1583cc;width:3rem;text-align:center;border-radius:0.2rem;font-size:0.9rem;svg{font-size:1.5rem;}}"]);

var Twitter = function (_React$Component) {
  _inherits(Twitter, _React$Component);

  function Twitter() {
    _classCallCheck(this, Twitter);

    return _possibleConstructorReturn(this, (Twitter.__proto__ || Object.getPrototypeOf(Twitter)).apply(this, arguments));
  }

  _createClass(Twitter, [{
    key: "render",
    value: function render() {
      var post = this.props.post;

      var url = "" + _blog2.default.protocol + _blog2.default.domain + post.path + "&url=" + url;
      var href = "https://twitter.com/intent/tweet?text=" + post.title + " - " + _blog2.default.title + " " + url;

      return _react2.default.createElement(
        Styles,
        null,
        _react2.default.createElement(
          "a",
          {
            className: "button",
            href: "#",
            onClick: function onClick() {
              window.open(encodeURI(decodeURI(href)), "tweetwindow", "width=650, height=470, personalbar=0, toolbar=0, scrollbars=1, sizable=1");
              return false;
            }
          },
          _react2.default.createElement(_twitter2.default, null),
          "Tweet"
        )
      );
    }
  }]);

  return Twitter;
}(_react2.default.Component);

exports.default = Twitter;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Pocket = function (_React$Component) {
  _inherits(Pocket, _React$Component);

  function Pocket() {
    _classCallCheck(this, Pocket);

    return _possibleConstructorReturn(this, (Pocket.__proto__ || Object.getPrototypeOf(Pocket)).apply(this, arguments));
  }

  _createClass(Pocket, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var button = this.node;
      var script = document.createElement("script");
      script.src = "https://widgets.getpocket.com/v1/j/btn.js?v=1";

      button.parentNode.appendChild(script);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement("a", {
        ref: function ref(node) {
          return _this2.node = node;
        },
        "data-pocket-label": "pocket",
        "data-pocket-count": "vertical",
        className: "pocket-btn",
        "data-lang": "ja"
      });
    }
  }]);

  return Pocket;
}(_react2.default.Component);

exports.default = Pocket;

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//

exports.default = function () {
  return _react2.default.createElement(
    "div",
    null,
    _react2.default.createElement(
      "h1",
      null,
      "404 Page Not Found."
    )
  );
};

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(3);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styles = __webpack_require__(2);

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Styles = _styledComponents2.default.div.withConfig({
  displayName: "Header__Styles"
})(["header{width:100%;border-bottom:", ";margin-bottom:1rem;text-align:center;cursor:pointer;&:hover{color:", ";}a{&:visited{color:inherit;}}h1{font-size:3rem;font-weight:normal;margin-bottom:0.3rem;margin-top:0;padding-top:1.5rem;}p{margin-top:0;margin-bottom:1.5rem;}}"], _styles2.default.border, _styles2.default.color.accent);

exports.default = function () {
  return _react2.default.createElement(
    Styles,
    null,
    _react2.default.createElement(
      "header",
      null,
      _react2.default.createElement(
        _reactStatic.Link,
        { to: "/" },
        _react2.default.createElement(
          "h1",
          null,
          "BAKUNOTE"
        ),
        _react2.default.createElement(
          "p",
          null,
          "bakunyo\u306E\u6280\u8853\u30CE\u30FC\u30C8"
        )
      )
    )
  );
};

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(3);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _twitter = __webpack_require__(8);

var _twitter2 = _interopRequireDefault(_twitter);

var _bakunyo = __webpack_require__(25);

var _bakunyo2 = _interopRequireDefault(_bakunyo);

var _styles = __webpack_require__(2);

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Styles = _styledComponents2.default.div.withConfig({
  displayName: "Footer__Styles"
})(["footer{margin-top:1rem;padding:1rem;background:#eee;text-align:center;nav{display:flex;justify-content:space-evenly;margin-bottom:2rem;", "{flex-direction:column;}section{text-align:left;margin:0 2rem 1rem 0;flex:1;&.profile{div.self{display:flex;margin-bottom:1rem;svg{height:1.5rem;width:1.5rem;}img{width:6rem;height:6rem;border-radius:3rem;}p{margin:0 0 0 1rem;}}}&.links{ul.tags{margin:0.6rem 0;li{margin-left:0.2rem;}}}}}}"], _styles2.default.media.notPc);

var Footer = function (_React$Component) {
  _inherits(Footer, _React$Component);

  function Footer(_ref) {
    var props = _ref.props;

    _classCallCheck(this, Footer);

    var _this = _possibleConstructorReturn(this, (Footer.__proto__ || Object.getPrototypeOf(Footer)).call(this, props));

    _this.onTagClicked = _this.onTagClicked.bind(_this);
    return _this;
  }

  _createClass(Footer, [{
    key: "onTagClicked",
    value: function onTagClicked(e) {
      window.scrollTo(0, 0);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var tagNames = this.props.tagNames;


      return _react2.default.createElement(
        Styles,
        null,
        _react2.default.createElement(
          "footer",
          null,
          _react2.default.createElement(
            "nav",
            null,
            _react2.default.createElement(
              "section",
              { className: "profile" },
              _react2.default.createElement(
                "h3",
                null,
                "Profile"
              ),
              _react2.default.createElement(
                "div",
                { className: "self" },
                _react2.default.createElement("img", { src: _bakunyo2.default, alt: "bakunyo" }),
                _react2.default.createElement(
                  "p",
                  null,
                  _react2.default.createElement(_twitter2.default, null),
                  "\xA0",
                  _react2.default.createElement(
                    "a",
                    { href: "https://twitter.com/bakunyo" },
                    "@bakunyo"
                  ),
                  _react2.default.createElement("br", null),
                  _react2.default.createElement("br", null),
                  _react2.default.createElement(
                    "span",
                    null,
                    "\u30D5\u30EA\u30FC\u30E9\u30F3\u30B9\u306EWEB\u30A8\u30F3\u30B8\u30CB\u30A2\u3067\u3001 \u666E\u6BB5\u306F Ruby, JavaScript \u3042\u305F\u308A\u3092\u66F8\u3044\u3066\u307E\u3059\u3002\u4E80\u6238\u306B\u5728\u4F4F\u3002"
                  )
                )
              ),
              _react2.default.createElement(
                "div",
                { className: "feedly" },
                _react2.default.createElement(
                  "a",
                  {
                    href: "https://cloud.feedly.com/#subscription%2Ffeed%2Fhttp%3A%2F%2Fhttps%3A%2F%2Fblog.bakunyo.com%2F",
                    target: "blank"
                  },
                  _react2.default.createElement("img", {
                    id: "feedlyFollow",
                    src: "https://s3.feedly.com/img/follows/feedly-follow-rectangle-flat-big_2x.png",
                    alt: "follow us in feedly",
                    width: "131",
                    height: "56"
                  })
                )
              )
            ),
            _react2.default.createElement(
              "section",
              { className: "links" },
              _react2.default.createElement(
                "h3",
                null,
                "Tags"
              ),
              _react2.default.createElement(
                "ul",
                { className: "tags" },
                tagNames.map(function (tag) {
                  return _react2.default.createElement(
                    _reactStatic.Link,
                    {
                      key: "footer-" + tag,
                      to: "/tags/" + tag + "/",
                      onClick: _this2.onTagClicked
                    },
                    _react2.default.createElement(
                      "li",
                      null,
                      tag
                    )
                  );
                })
              )
            )
          ),
          _react2.default.createElement(
            "small",
            null,
            "\xA9 2013 - ",
            new Date().getFullYear(),
            "\xA0",
            _react2.default.createElement(
              "a",
              { href: "https://twitter.com/bakunyo" },
              "@bakunyo"
            )
          )
        )
      );
    }
  }]);

  return Footer;
}(_react2.default.Component);

exports.default = (0, _reactStatic.getSiteProps)(Footer);

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/bakunyo.f3080bd9.png";

/***/ })
/******/ ]);
});
//# sourceMappingURL=app.static.b5732e85.js.map