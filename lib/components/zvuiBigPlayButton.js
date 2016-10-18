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

var ZvUiBigPlayButton = function (_Button) {
    _inherits(ZvUiBigPlayButton, _Button);

    function ZvUiBigPlayButton(player, options) {
        _classCallCheck(this, ZvUiBigPlayButton);

        return _possibleConstructorReturn(this, (ZvUiBigPlayButton.__proto__ || Object.getPrototypeOf(ZvUiBigPlayButton)).call(this, player, options));
    }

    _createClass(ZvUiBigPlayButton, [{
        key: 'createEl',
        value: function createEl() {

            return _get(ZvUiBigPlayButton.prototype.__proto__ || Object.getPrototypeOf(ZvUiBigPlayButton.prototype), 'createEl', this).call(this, 'button', {
                name: 'ZvUiBigPlayButton',
                id: 'zvui-video-button',
                className: 'zvui-video-button',
                title: 'Play Toggle',
                role: 'button',
                controlText_: 'Hello'
            });
        }
    }, {
        key: 'handleClick',
        value: function handleClick() {
            var player = this.player();
            player.pause();
        }
    }]);

    return ZvUiBigPlayButton;
}(Button);

// ZvUiBigPlayButton.prototype.controlText_ = 'Play Toggle';

_video2.default.registerComponent('ZvUiBigPlayButton', ZvUiBigPlayButton);
exports.default = ZvUiBigPlayButton;