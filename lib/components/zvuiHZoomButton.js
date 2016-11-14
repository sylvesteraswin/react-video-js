Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _video = require('video.js');

var _video2 = _interopRequireDefault(_video);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Button = _video2.default.getComponent('Button');

var ZvuiZoomButton = function (_Button) {
    _inherits(ZvuiZoomButton, _Button);

    function ZvuiZoomButton(player, options) {
        _classCallCheck(this, ZvuiZoomButton);

        return _possibleConstructorReturn(this, (ZvuiZoomButton.__proto__ || Object.getPrototypeOf(ZvuiZoomButton)).call(this, player, options));
    }

    _createClass(ZvuiZoomButton, [{
        key: 'createEl',
        value: function createEl() {

            return _get(ZvuiZoomButton.prototype.__proto__ || Object.getPrototypeOf(ZvuiZoomButton.prototype), 'createEl', this).call(this, 'button', {
                name: 'ZvuiZoomButton',
                id: 'zvui-video-zoom-button',
                className: 'zvui-video-zoom-button',
                title: 'Zoom',
                role: 'button'
            });
        }
    }, {
        key: 'handleClick',
        value: function handleClick() {
            console.log(this);
            // const container = this.player();
            // const {
            //     className,
            // } = this.el_;
            //
            // if (!className.includes('active')) {
            //     this.addClass('active');
            // } else {
            //     this.removeClass('active');
            // }
            // container._updateToHD();
            // container._player.play();
        }
    }]);

    return ZvuiZoomButton;
}(Button);

_video2.default.registerComponent('ZvuiZoomButton', ZvuiZoomButton);
exports.default = ZvuiHDButton;