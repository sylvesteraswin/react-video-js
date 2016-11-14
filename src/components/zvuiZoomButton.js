import vjs from 'video.js';
const Button = vjs.getComponent('Button');

class ZvuiZoomButton extends Button {
    constructor(player, options) {
        super(player, options);
    }

    createEl() {

        return super.createEl('button', {
            name: 'ZvuiZoomButton',
            id: 'zvui-video-zoom-button',
            className: 'zvui-video-zoom-button',
            title: 'Zoom',
            role: 'button',
        });
    }

    handleClick() {
        const container = this.player();
        const {
            zoomIn,
        } = container.props;

        if (typeof zoomIn === 'function') {
            zoomIn.call(this);
        }

    }
}

vjs.registerComponent('ZvuiZoomButton', ZvuiZoomButton);
export default ZvuiZoomButton;
