import vjs from 'video.js';
const Button = vjs.getComponent('Button');

class ZvuiHDButton extends Button {
    constructor(player, options) {
        super(player, options);
    }

    createEl() {

        return super.createEl('button', {
            name: 'ZvuiHDButton',
            id: 'zvui-video-hd-button',
            className: 'zvui-video-hd-button',
            title: 'Show HD',
            role: 'button',
        });
    }

    handleClick() {
        const container = this.player();
        const {
            className,
        } = this.el_;

        if (!className.includes('active')) {
            this.addClass('active');
        } else {
            this.removeClass('active');
        }
        container._updateToHD();
        container._player.play();

    }
}

vjs.registerComponent('ZvuiHDButton', ZvuiHDButton);
export default ZvuiHDButton;
