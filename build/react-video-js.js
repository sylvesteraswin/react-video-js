(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("video.js"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "video.js"], factory);
	else if(typeof exports === 'object')
		exports["ProductVideo"] = factory(require("react"), require("video.js"));
	else
		root["ProductVideo"] = factory(root["React"], root["vjs"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1).default;

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _video = __webpack_require__(3);

	var _video2 = _interopRequireDefault(_video);

	var _classnames2 = __webpack_require__(4);

	var _classnames3 = _interopRequireDefault(_classnames2);

	var _addEventListener = __webpack_require__(5);

	var _addEventListener2 = _interopRequireDefault(_addEventListener);

	var _removeEventListener = __webpack_require__(6);

	var _removeEventListener2 = _interopRequireDefault(_removeEventListener);

	var _zvuiBigPlayButton = __webpack_require__(7);

	var _zvuiBigPlayButton2 = _interopRequireDefault(_zvuiBigPlayButton);

	var _zvuiHDButton = __webpack_require__(8);

	var _zvuiHDButton2 = _interopRequireDefault(_zvuiHDButton);

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}

	function _defineProperty(obj, key, value) {
	    if (key in obj) {
	        Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
	    } else {
	        obj[key] = value;
	    }return obj;
	}

	function _classCallCheck(instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	        throw new TypeError("Cannot call a class as a function");
	    }
	}

	function _possibleConstructorReturn(self, call) {
	    if (!self) {
	        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	    }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}

	function _inherits(subClass, superClass) {
	    if (typeof superClass !== "function" && superClass !== null) {
	        throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
	    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	} /*eslint-disable no-unused-vars*/

	/*eslint-disable no-unused-vars*/

	var BASE_CLASS = 'zvui-product-video';
	var VJS_BASE_CLASS = 'video-js';
	var VJS_DEFAULT_SKIN_CLASS = 'vjs-default-skin';
	var VJS_CENTER_PLAY_CLASS = 'vjs-big-play-centered';

	var VJS_FRAMEWORK_DEFAULT = {
	    width: 480,
	    height: 693,
	    preload: 'auto',
	    autoplay: false,
	    controls: true,
	    muted: true,
	    controlBar: {
	        playToggle: false,
	        fullscreenToggle: false,
	        currentTimeDisplay: false,
	        timeDivider: false,
	        durationDisplay: false,
	        remainingTimeDisplay: false,
	        progressControl: {
	            seekBar: {
	                seekHandle: false
	            }
	        },
	        volumeMenuButton: false,
	        playbackRateMenuButton: false,
	        audioTrackButton: false,
	        captionsButton: false,
	        chaptersButton: false,
	        descriptionsButton: false,
	        subtitlesButton: false
	    }
	};

	var NOOP = function NOOP() {};

	var ProductVideo = function (_Component) {
	    _inherits(ProductVideo, _Component);

	    function ProductVideo() {
	        var _ref;

	        var _temp, _this, _ret;

	        _classCallCheck(this, ProductVideo);

	        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	            args[_key] = arguments[_key];
	        }

	        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ProductVideo.__proto__ || Object.getPrototypeOf(ProductVideo)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
	            showingHD: false,
	            events: {},
	            aspectRatio: VJS_FRAMEWORK_DEFAULT.width / VJS_FRAMEWORK_DEFAULT.height
	        }, _this.componentWillMount = function () {
	            var _this$props = _this.props;
	            var width = _this$props.width;
	            var height = _this$props.height;

	            _this.setState({
	                uid: _this._getRandomID()
	            });
	        }, _this.componentDidMount = function () {
	            var resize = _this.props.resize;

	            _this.setUpPlayer();

	            if (resize) {
	                _this.setState({
	                    events: {
	                        resize: (0, _addEventListener2.default)(window, 'resize', _this._handleResize, _this)
	                    }
	                });
	            }
	        }, _this.componentWillReceiveProps = function (nextProps) {
	            var _this$props2 = _this.props;
	            var _this$props2$source = _this$props2.source;
	            var oldSource = _this$props2$source === undefined ? '' : _this$props2$source;
	            var oldWidth = _this$props2.width;
	            var oldHeight = _this$props2.height;
	            var _nextProps$source = nextProps.source;
	            var newSource = _nextProps$source === undefined ? '' : _nextProps$source;
	            var newWidth = nextProps.width;
	            var newHeight = nextProps.height;

	            if (newSource !== oldSource && newSource !== '') {
	                _this._updatePlayerSrc(newSource);
	            }

	            if (oldWidth !== newWidth || oldHeight !== newHeight) {
	                _this.setState({
	                    aspectRatio: newWidth / newHeight
	                });
	            }
	        }, _this.shouldComponentUpdate = function () {}, _this.componentWillUnMount = function () {
	            var resize = _this.state.events.resize;

	            _this.unloadPlayer();

	            (0, _removeEventListener2.default)(resize);
	        }, _this._getRandomID = function () {
	            return Math.floor(Math.random() * 16749 + 1);
	        }, _this._buildPlayerOptions = function () {
	            var _this$props3 = _this.props;
	            var options = _this$props3.options;
	            var resize = _this$props3.resize;
	            var height = _this$props3.height;
	            var width = _this$props3.width;
	            var defaultWidth = VJS_FRAMEWORK_DEFAULT.width;
	            var defaultHeight = VJS_FRAMEWORK_DEFAULT.height;

	            var result = Object.assign({}, VJS_FRAMEWORK_DEFAULT, options, {
	                height: height || defaultHeight,
	                width: width || defaultWidth
	            });

	            _this.setState({
	                aspectRatio: result.width / result.height
	            });

	            return result;
	        }, _this._updateToHD = function () {
	            var showingHD = _this.state.showingHD;
	            var _this$props4 = _this.props;
	            var source = _this$props4.source;
	            var sourceHD = _this$props4.sourceHD;

	            if (sourceHD && !showingHD) {
	                _this._updatePlayerSrc(sourceHD);
	                _this.setState({
	                    showingHD: true
	                });
	            } else {
	                _this._updatePlayerSrc(source);
	                _this.setState({
	                    showingHD: false
	                });
	            }
	        }, _this._updatePlayerSrc = function (source) {
	            var player = _this._getProductPlayer();
	            player.src(source);
	        }, _this._handleResize = function () {
	            var debounce = _this.props.debounce;

	            var player = _this._getProductPlayer();

	            clearTimeout(_this.handleResizeTimer);
	            _this.handleResizeTimer = setTimeout(function () {
	                var _this$_getPlayerDimen = _this._getPlayerDimensions();

	                var width = _this$_getPlayerDimen.width;
	                var height = _this$_getPlayerDimen.height;

	                player.dimensions(width, height);
	            }, debounce);
	        }, _this._playerReady = function () {
	            var _this$props5 = _this.props;
	            var onEnded = _this$props5.onEnded;
	            var onPlay = _this$props5.onPlay;
	            var onPause = _this$props5.onPause;
	            var loop = _this$props5.loop;
	            var onReady = _this$props5.onReady;

	            var player = _this._getProductPlayer();

	            _this._handleResize();

	            player.on('play', function () {
	                player.posterImage.hide();
	                player.controlBar.show();
	                _this._elToggle('bigPlayButton', false);
	                _this._elToggle('_zvuiBigPauseButton', true);

	                if (onPlay && typeof onPlay === 'function') {
	                    onPlay.call(_this, player);
	                }
	            });

	            player.on('pause', function () {
	                player.controlBar.hide();
	                _this._elToggle('bigPlayButton', true);
	                _this._elToggle('_zvuiBigPauseButton', false);

	                if (onPause && typeof onPause === 'function') {
	                    onPause.call(_this, player);
	                }
	            });

	            player.on('ended', function () {
	                player.posterImage.show();
	                player.controlBar.hide();
	                _this._elToggle('bigPlayButton', true);

	                if (!loop && onEnded && typeof onEnded === 'function') {
	                    onEnded.call(_this, player);
	                }
	            });

	            if (onReady && typeof onReady === 'function') {
	                onReady.call(_this, player);
	            }
	        }, _this._getResizeOption = function () {
	            var aspectRatio = _this.state.aspectRatio;

	            return Object.assign({}, {
	                aspectRatio: aspectRatio
	            });
	        }, _this._getPlayerDimensions = function () {
	            var _this$_getResizeOptio = _this._getResizeOption();

	            var aspectRatio = _this$_getResizeOptio.aspectRatio;

	            var player = _this._getProductPlayer();

	            var _this$props6 = _this.props;
	            var width = _this$props6.width;
	            var height = _this$props6.height;

	            var containerWidth = player.el_.parentElement.offsetWidth;

	            if (containerWidth < width) {
	                width = containerWidth;
	                height = containerWidth / aspectRatio;
	            }

	            return {
	                width: width,
	                height: height
	            };
	        }, _this._elToggle = function (obj, flag) {
	            var _this$_player$obj = _this._player[obj];
	            _this$_player$obj = _this$_player$obj === undefined ? {} : _this$_player$obj;
	            var _this$_player$obj$el_ = _this$_player$obj.el_;
	            var targetEl = _this$_player$obj$el_ === undefined ? null : _this$_player$obj$el_;
	            var _this2 = _this;
	            var _this2$obj = _this2[obj];
	            _this2$obj = _this2$obj === undefined ? {} : _this2$obj;
	            var _this2$obj$el_ = _this2$obj.el_;
	            var targetParentEl = _this2$obj$el_ === undefined ? null : _this2$obj$el_;

	            if (targetEl) {
	                targetEl.style.display = flag ? 'block' : 'none';
	            }

	            if (targetParentEl) {
	                targetParentEl.style.display = flag ? 'block' : 'none';
	            }
	        }, _this.insertComponents = function () {
	            var player = _this._getProductPlayer();

	            var sourceHD = _this.props.sourceHD;

	            _this._zvuiBigPauseButton = new _zvuiBigPlayButton2.default(player);
	            player.addChild(_this._zvuiBigPauseButton);

	            if (sourceHD) {
	                _this._zvuiHDButton = new _zvuiHDButton2.default(_this);
	                player.addChild(_this._zvuiHDButton);
	            }
	        }, _this.setUpPlayer = function () {
	            var _this$props7 = _this.props;
	            var source = _this$props7.source;
	            var onEnded = _this$props7.onEnded;
	            var onPlay = _this$props7.onPlay;
	            var onPause = _this$props7.onPause;
	            var loop = _this$props7.loop;

	            var options = _this._buildPlayerOptions();

	            _this._player = (0, _video2.default)(_this.refs[BASE_CLASS], options);

	            _this.insertComponents();

	            _this._player.ready(_this._playerReady);

	            setTimeout(function () {
	                _this._updatePlayerSrc(source);
	            }, 50);
	        }, _this.unloadPlayer = function () {
	            var player = _this._getProductPlayer();

	            var dispose = _this.props.dispose;

	            if (dispose) {
	                player.dispose();
	            }
	        }, _this._getProductPlayer = function () {
	            return _this._player;
	        }, _this.render = function () {
	            var _classnames;

	            var _this$props8 = _this.props;
	            var skin = _this$props8.skin;
	            var customSkinClass = _this$props8.customSkinClass;
	            var bigPlayButton = _this$props8.bigPlayButton;
	            var _this$props8$poster = _this$props8.poster;
	            var poster = _this$props8$poster === undefined ? null : _this$props8$poster;
	            var uid = _this.state.uid;

	            return _react2.default.createElement('video', {
	                ref: BASE_CLASS,
	                id: BASE_CLASS + '-' + uid,
	                className: (0, _classnames3.default)(BASE_CLASS, VJS_BASE_CLASS, (_classnames = {}, _defineProperty(_classnames, VJS_DEFAULT_SKIN_CLASS, skin === 'default'), _defineProperty(_classnames, customSkinClass, skin !== 'default'), _defineProperty(_classnames, VJS_CENTER_PLAY_CLASS, bigPlayButton), _classnames)),
	                poster: poster,
	                playsinline: true
	            });
	        }, _temp), _possibleConstructorReturn(_this, _ret);
	    }

	    return ProductVideo;
	}(_react.Component);

	ProductVideo.defaultProps = {
	    uid: '',
	    source: '',
	    poster: '',
	    skin: 'default',
	    bigPlayButton: true,
	    customSkinClass: '',
	    loop: false,
	    options: VJS_FRAMEWORK_DEFAULT,
	    resize: true,
	    dispose: true,
	    debounce: 300,
	    width: 0,
	    height: 0
	};

	ProductVideo.propTypes = {
	    source: _react.PropTypes.string.string,
	    sourceHD: _react.PropTypes.string,
	    poster: _react.PropTypes.string,
	    skin: _react.PropTypes.string,
	    bigPlayButton: _react.PropTypes.bool,
	    customSkinClass: _react.PropTypes.string,
	    height: _react.PropTypes.number,
	    width: _react.PropTypes.number,
	    loop: _react.PropTypes.bool,
	    onReady: _react.PropTypes.func,
	    resize: _react.PropTypes.bool,
	    eventListeners: _react.PropTypes.object,
	    options: _react.PropTypes.object,
	    onEnded: _react.PropTypes.func,
	    onPlay: _react.PropTypes.func,
	    onPause: _react.PropTypes.func,
	    debounce: _react.PropTypes.number
	};

	exports.default = ProductVideo;

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	  Copyright (c) 2016 Jed Watson.
	  Licensed under the MIT License (MIT), see
	  http://jedwatson.github.io/classnames
	*/
	/* global define */

	(function () {
		'use strict';

		var hasOwn = {}.hasOwnProperty;

		function classNames () {
			var classes = [];

			for (var i = 0; i < arguments.length; i++) {
				var arg = arguments[i];
				if (!arg) continue;

				var argType = typeof arg;

				if (argType === 'string' || argType === 'number') {
					classes.push(arg);
				} else if (Array.isArray(arg)) {
					classes.push(classNames.apply(null, arg));
				} else if (argType === 'object') {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				}
			}

			return classes.join(' ');
		}

		if (typeof module !== 'undefined' && module.exports) {
			module.exports = classNames;
		} else if (true) {
			// register as 'classnames', consistent with npm package name
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
				return classNames;
			}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else {
			window.classNames = classNames;
		}
	}());


/***/ },
/* 5 */
/***/ function(module, exports) {

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var addEvent = function addEvent(elem, event, fn, binder) {
	    // avoid memory overhead of new anonymous functions for every event handler that's installed
	    // by using local functions
	    function listenHandler(e) {
	        var ret = fn.apply(binder || this, arguments);
	        if (ret === false) {
	            e.stopPropagation();
	            e.preventDefault();
	        }
	        return ret;
	    }

	    function attachHandler() {
	        // set the this pointer same as addEventListener when fn is called
	        // and make sure the event is passed to the fn also so that works the same too
	        var ret = fn.call(elem, window.event);
	        if (ret === false) {
	            window.event.returnValue = false;
	            window.event.cancelBubble = true;
	        }
	        return ret;
	    }

	    if (elem.addEventListener) {
	        elem.addEventListener(event, listenHandler, false);
	        return {
	            elem: elem,
	            handler: listenHandler,
	            event: event
	        };
	    } else {
	        elem.attachEvent('on' + event, attachHandler);
	        return {
	            elem: elem,
	            handler: attachHander,
	            event: event
	        };
	    }
	};

	exports.default = addEvent;

/***/ },
/* 6 */
/***/ function(module, exports) {

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var removeEvent = function removeEvent(token) {
	    if (token.elem.removeEventListener) {
	        token.elem.removeEventListener(token.event, token.handler);
	    } else {
	        token.elem.detachEvent('on' + token.event, token.handler);
	    }
	};

	exports.default = removeEvent;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () {
	    function defineProperties(target, props) {
	        for (var i = 0; i < props.length; i++) {
	            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	        }
	    }return function (Constructor, protoProps, staticProps) {
	        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	    };
	}();

	var _get = function get(object, property, receiver) {
	    if (object === null) object = Function.prototype;var desc = Object.getOwnPropertyDescriptor(object, property);if (desc === undefined) {
	        var parent = Object.getPrototypeOf(object);if (parent === null) {
	            return undefined;
	        } else {
	            return get(parent, property, receiver);
	        }
	    } else if ("value" in desc) {
	        return desc.value;
	    } else {
	        var getter = desc.get;if (getter === undefined) {
	            return undefined;
	        }return getter.call(receiver);
	    }
	};

	var _video = __webpack_require__(3);

	var _video2 = _interopRequireDefault(_video);

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}

	function _classCallCheck(instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	        throw new TypeError("Cannot call a class as a function");
	    }
	}

	function _possibleConstructorReturn(self, call) {
	    if (!self) {
	        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	    }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}

	function _inherits(subClass, superClass) {
	    if (typeof superClass !== "function" && superClass !== null) {
	        throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
	    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}

	var Button = _video2.default.getComponent('Button');

	var ZvuiBigPlayButton = function (_Button) {
	    _inherits(ZvuiBigPlayButton, _Button);

	    function ZvuiBigPlayButton(player, options) {
	        _classCallCheck(this, ZvuiBigPlayButton);

	        return _possibleConstructorReturn(this, (ZvuiBigPlayButton.__proto__ || Object.getPrototypeOf(ZvuiBigPlayButton)).call(this, player, options));
	    }

	    _createClass(ZvuiBigPlayButton, [{
	        key: 'createEl',
	        value: function createEl() {

	            return _get(ZvuiBigPlayButton.prototype.__proto__ || Object.getPrototypeOf(ZvuiBigPlayButton.prototype), 'createEl', this).call(this, 'button', {
	                name: 'ZvuiBigPlayButton',
	                id: 'zvui-video-pause-button',
	                className: 'zvui-video-pause-button',
	                title: 'Play Toggle',
	                role: 'button'
	            });
	        }
	    }, {
	        key: 'handleClick',
	        value: function handleClick() {
	            var player = this.player();
	            player.pause();
	        }
	    }]);

	    return ZvuiBigPlayButton;
	}(Button);

	// ZvuiBigPlayButton.prototype.controlText_ = 'Play Toggle';

	_video2.default.registerComponent('ZvuiBigPlayButton', ZvuiBigPlayButton);
	exports.default = ZvuiBigPlayButton;

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () {
	    function defineProperties(target, props) {
	        for (var i = 0; i < props.length; i++) {
	            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	        }
	    }return function (Constructor, protoProps, staticProps) {
	        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	    };
	}();

	var _get = function get(object, property, receiver) {
	    if (object === null) object = Function.prototype;var desc = Object.getOwnPropertyDescriptor(object, property);if (desc === undefined) {
	        var parent = Object.getPrototypeOf(object);if (parent === null) {
	            return undefined;
	        } else {
	            return get(parent, property, receiver);
	        }
	    } else if ("value" in desc) {
	        return desc.value;
	    } else {
	        var getter = desc.get;if (getter === undefined) {
	            return undefined;
	        }return getter.call(receiver);
	    }
	};

	var _video = __webpack_require__(3);

	var _video2 = _interopRequireDefault(_video);

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}

	function _classCallCheck(instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	        throw new TypeError("Cannot call a class as a function");
	    }
	}

	function _possibleConstructorReturn(self, call) {
	    if (!self) {
	        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	    }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}

	function _inherits(subClass, superClass) {
	    if (typeof superClass !== "function" && superClass !== null) {
	        throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
	    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}

	var Button = _video2.default.getComponent('Button');

	var ZvuiHDButton = function (_Button) {
	    _inherits(ZvuiHDButton, _Button);

	    function ZvuiHDButton(player, options) {
	        _classCallCheck(this, ZvuiHDButton);

	        return _possibleConstructorReturn(this, (ZvuiHDButton.__proto__ || Object.getPrototypeOf(ZvuiHDButton)).call(this, player, options));
	    }

	    _createClass(ZvuiHDButton, [{
	        key: 'createEl',
	        value: function createEl() {

	            return _get(ZvuiHDButton.prototype.__proto__ || Object.getPrototypeOf(ZvuiHDButton.prototype), 'createEl', this).call(this, 'button', {
	                name: 'ZvuiHDButton',
	                id: 'zvui-video-hd-button',
	                className: 'zvui-video-hd-button',
	                title: 'Show HD',
	                role: 'button'
	            });
	        }
	    }, {
	        key: 'handleClick',
	        value: function handleClick() {
	            var container = this.player();
	            var className = this.el_.className;

	            if (!className.includes('active')) {
	                this.addClass('active');
	            } else {
	                this.removeClass('active');
	            }
	            container._updateToHD();
	            container._player.play();
	        }
	    }]);

	    return ZvuiHDButton;
	}(Button);

	_video2.default.registerComponent('ZvuiHDButton', ZvuiHDButton);
	exports.default = ZvuiHDButton;

/***/ }
/******/ ])
});
;