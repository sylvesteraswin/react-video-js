import vjs from 'video.js';
const Button = vjs.getComponent('Button');

class ZvUiBigPlayButton extends Button {
    constructor(player, options) {
        super(player, options);
    }

    createEl() {

        return super.createEl('button', {
            name: 'ZvUiBigPlayButton',
            id: 'zvui-video-button',
            className: 'zvui-video-button',
            title: 'Play Toggle',
            role: 'button',
            controlText_: 'Hello',
        });
    }

    handleClick() {
        const player = this.player();
        player.pause();
    }
}

// ZvUiBigPlayButton.prototype.controlText_ = 'Play Toggle';

vjs.registerComponent('ZvUiBigPlayButton', ZvUiBigPlayButton);
export default ZvUiBigPlayButton;
