Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _video = require('video.js');

var _video2 = _interopRequireDefault(_video);

var _classnames2 = require('classnames');

var _classnames3 = _interopRequireDefault(_classnames2);

var _addEventListener = require('./utils/add-event-listener');

var _addEventListener2 = _interopRequireDefault(_addEventListener);

var _removeEventListener = require('./utils/remove-event-listener');

var _removeEventListener2 = _interopRequireDefault(_removeEventListener);

var _zvuiBigPlayButton = require('./components/zvuiBigPlayButton');

var _zvuiBigPlayButton2 = _interopRequireDefault(_zvuiBigPlayButton);

var _zvuiHDButton = require('./components/zvuiHDButton');

var _zvuiHDButton2 = _interopRequireDefault(_zvuiHDButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*eslint-disable no-unused-vars*/

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
            showingHD: false
        }, _this.componentWillMount = function () {
            _this.setState({
                uid: _this.getRandomID()
            });
        }, _this.componentDidMount = function () {
            _this.setUpPlayer();
        }, _this.componentWillReceiveProps = function (nextProps) {
            var _this$props$source = _this.props.source;
            var oldSource = _this$props$source === undefined ? '' : _this$props$source;
            var _nextProps$source = nextProps.source;
            var newSource = _nextProps$source === undefined ? '' : _nextProps$source;


            if (newSource !== oldSource && newSource !== '') {
                _this._updatePlayerSrc(newSource);
            }
        }, _this.shouldComponentUpdate = function () {}, _this.componentWillUnMount = function () {
            _this.unloadPlayer();
        }, _this._buildPlayerOptions = function () {
            var _this$props = _this.props;
            var options = _this$props.options;
            var resize = _this$props.resize;
            var height = _this$props.height;
            var width = _this$props.width;
            var defaultWidth = VJS_FRAMEWORK_DEFAULT.width;
            var defaultHeight = VJS_FRAMEWORK_DEFAULT.height;


            return Object.assign({}, VJS_FRAMEWORK_DEFAULT, options, {
                height: resize ? 'auto' : height || defaultHeight,
                width: resize ? 'auto' : width || defaultWidth
            });
        }, _this._updateToHD = function () {
            var showingHD = _this.state.showingHD;
            var _this$props2 = _this.props;
            var source = _this$props2.source;
            var sourceHD = _this$props2.sourceHD;


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
            var _this2 = _this;
            var _player = _this2._player;


            _player.src(source);
        }, _this._playerReady = function () {
            var _this$props3 = _this.props;
            var onEnded = _this$props3.onEnded;
            var onPlay = _this$props3.onPlay;
            var onPause = _this$props3.onPause;
            var loop = _this$props3.loop;


            _this._player.on('play', function () {
                _this._player.posterImage.hide();
                _this._player.controlBar.show();
                _this._elToggle('bigPlayButton', false);
                _this._elToggle('_zvuiBigPauseButton', true);

                if (onPlay && typeof onPlay === 'function') {
                    onPlay.call(_this, _this._player);
                }
            });

            _this._player.on('pause', function () {
                _this._player.controlBar.hide();
                _this._elToggle('bigPlayButton', true);
                _this._elToggle('_zvuiBigPauseButton', false);

                if (onPause && typeof onPause === 'function') {
                    onPause.call(_this, _this._player);
                }
            });

            _this._player.on('ended', function () {
                _this._player.posterImage.show();
                _this._player.controlBar.hide();
                _this._elToggle('bigPlayButton', true);

                if (!loop && onEnded && typeof onEnded === 'function') {
                    onEnded.call(_this, _this._player);
                }
            });
        }, _this._elToggle = function (obj, flag) {
            var _this$_player$obj = _this._player[obj];
            _this$_player$obj = _this$_player$obj === undefined ? {} : _this$_player$obj;
            var _this$_player$obj$el_ = _this$_player$obj.el_;
            var targetEl = _this$_player$obj$el_ === undefined ? null : _this$_player$obj$el_;
            var _this3 = _this;
            var _this3$obj = _this3[obj];
            _this3$obj = _this3$obj === undefined ? {} : _this3$obj;
            var _this3$obj$el_ = _this3$obj.el_;
            var targetParentEl = _this3$obj$el_ === undefined ? null : _this3$obj$el_;


            if (targetEl) {
                targetEl.style.display = flag ? 'block' : 'none';
            }

            if (targetParentEl) {
                targetParentEl.style.display = flag ? 'block' : 'none';
            }
        }, _this.insertComponents = function () {
            var player = _this.getProductPlayer();

            var sourceHD = _this.props.sourceHD;


            _this._zvuiBigPauseButton = new _zvuiBigPlayButton2.default(player);
            player.addChild(_this._zvuiBigPauseButton);

            if (sourceHD) {
                _this._zvuiHDButton = new _zvuiHDButton2.default(_this);
                player.addChild(_this._zvuiHDButton);
            }
        }, _this.setUpPlayer = function () {
            var _this$props4 = _this.props;
            var source = _this$props4.source;
            var onEnded = _this$props4.onEnded;
            var onPlay = _this$props4.onPlay;
            var onPause = _this$props4.onPause;
            var loop = _this$props4.loop;


            var options = _this._buildPlayerOptions();

            _this._player = (0, _video2.default)(_this.refs[BASE_CLASS], options);

            _this.insertComponents();

            _this._player.ready(_this._playerReady);

            setTimeout(function () {
                _this._updatePlayerSrc(source);
            }, 50);
        }, _this.unloadPlayer = function () {
            _this._player.dispose();
        }, _this.getProductPlayer = function () {
            return _this._player;
        }, _this.getRandomID = function () {
            return Math.floor(Math.random() * 16749 + 1);
        }, _this.render = function () {
            var _classnames;

            var _this$props5 = _this.props;
            var skin = _this$props5.skin;
            var customSkinClass = _this$props5.customSkinClass;
            var bigPlayButton = _this$props5.bigPlayButton;
            var poster = _this$props5.poster;
            var uid = _this.state.uid;


            return _react2.default.createElement('video', {
                ref: BASE_CLASS,
                id: BASE_CLASS + '-' + uid,
                className: (0, _classnames3.default)(BASE_CLASS, VJS_BASE_CLASS, (_classnames = {}, _defineProperty(_classnames, VJS_DEFAULT_SKIN_CLASS, skin === 'default'), _defineProperty(_classnames, customSkinClass, skin !== 'default'), _defineProperty(_classnames, VJS_CENTER_PLAY_CLASS, bigPlayButton), _classnames)),
                poster: poster || null
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
    onReady: NOOP,
    resize: false,
    dispose: false,
    events: {}
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
    onPause: _react.PropTypes.func
};

exports.default = ProductVideo;