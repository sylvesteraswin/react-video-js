import vjs from 'video.js';
const Button = vjs.getComponent('Button');

class ZvuiBigPlayButton extends Button {
    constructor(player, options) {
        super(player, options);
    }

    createEl() {

        return super.createEl('button', {
            name: 'ZvuiBigPlayButton',
            id: 'zvui-video-pause-button',
            className: 'zvui-video-pause-button',
            title: 'Play Toggle',
            role: 'button',
        });
    }

    handleClick() {
        const player = this.player();
        player.pause();
    }
}

// ZvuiBigPlayButton.prototype.controlText_ = 'Play Toggle';

vjs.registerComponent('ZvuiBigPlayButton', ZvuiBigPlayButton);
export default ZvuiBigPlayButton;
