/*eslint-disable no-unused-vars*/
import React, { PropTypes, Component } from 'react';
/*eslint-disable no-unused-vars*/
import vjs from 'video.js';
import classnames from 'classnames';

import addEvent from './utils/add-event-listener';
import removeEvent from './utils/remove-event-listener';

import ZvuiBigPlayButton from './components/zvuiBigPlayButton';
import ZvuiHDButton from './components/zvuiHDButton';

const BASE_CLASS = 'zvui-product-video';
const VJS_BASE_CLASS= 'video-js';
const VJS_DEFAULT_SKIN_CLASS = 'vjs-default-skin';
const VJS_CENTER_PLAY_CLASS = 'vjs-big-play-centered';

const VJS_FRAMEWORK_DEFAULT = {
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
                seekHandle: false,
            },
        },
        volumeMenuButton: false,
        playbackRateMenuButton: false,
        audioTrackButton: false,
        captionsButton: false,
        chaptersButton: false,
        descriptionsButton: false,
        subtitlesButton: false,
    },
};

const NOOP = () => {};


class ProductVideo extends Component {
    state = {
        showingHD: false,
        events: {},
        aspectRatio: (VJS_FRAMEWORK_DEFAULT.width)/(VJS_FRAMEWORK_DEFAULT.height),
    };

    static defaultProps = {
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
        height: 0,
    };

    componentWillMount = () => {
        const {
            width,
            height,
        } = this.props;

        this.setState({
            uid: this._getRandomID(),
        });
    };

    componentDidMount = () => {
        const {
            resize,
        } = this.props;

        this.setUpPlayer();

        if (resize) {
            this.setState({
                events: {
                    resize: addEvent(window, 'resize', this._handleResize, this),
                },
            });
        }
    };

    componentWillReceiveProps = (nextProps) => {
        const {
            source: oldSource = '',
            width: oldWidth,
            height: oldHeight,
        } = this.props;

        const {
            source: newSource = '',
            width: newWidth,
            height: newHeight,
        } = nextProps;

        if ((newSource !== oldSource) && (newSource !== '')) {
            this._updatePlayerSrc(newSource);
        }

        if ((oldWidth !== newWidth) || (oldHeight !== newHeight)) {
            this.setState({
                aspectRatio: newWidth / newHeight,
            });
        }
    };

    shouldComponentUpdate = () => {

    };

    componentWillUnMount = () => {
        const {
            resize,
        } = this.state.events;

        this.unloadPlayer();

        removeEvent(resize);

    };

    _getRandomID = () => Math.floor((Math.random() * 16749) + 1);

    _buildPlayerOptions = () => {
        const {
            options,
            resize,
            height,
            width,
        } = this.props;

        const {
            width: defaultWidth,
            height: defaultHeight,
        } = VJS_FRAMEWORK_DEFAULT;

        const result = Object.assign({}, VJS_FRAMEWORK_DEFAULT, options, {
            height: (height || defaultHeight),
            width: (width || defaultWidth),
        });

        this.setState({
            aspectRatio: (result.width) / (result.height),
        });

        return result;
    };

    _updateToHD = () => {
        const {
            showingHD,
        } = this.state;

        const {
            source,
            sourceHD,
        } = this.props;

        if (sourceHD && !showingHD) {
            this._updatePlayerSrc(sourceHD);
            this.setState({
                showingHD: true,
            });
        } else {
            this._updatePlayerSrc(source);
            this.setState({
                showingHD: false,
            });
        }
    };

    _updatePlayerSrc = (source) => {
        const player = this._getProductPlayer();
        player.src(source);
    };

    _handleResize = () => {
        const {
            debounce,
        } = this.props;

        const player = this._getProductPlayer();

        clearTimeout(this.handleResizeTimer);
        this.handleResizeTimer = setTimeout(() => {
            const {
                width,
                height,
            } = this._getPlayerDimensions();

            player.dimensions(width, height);

        }, debounce);
    };

    _playerReady = () => {
        const {
            onEnded,
            onPlay,
            onPause,
            loop,
            onReady,
        } = this.props;

        const player = this._getProductPlayer();

        this._handleResize();

        player.on('play', () => {
            player.posterImage.hide();
            player.controlBar.show();
            this._elToggle('bigPlayButton', false);
            this._elToggle('_zvuiBigPauseButton', true);

            if (onPlay && typeof onPlay === 'function') {
                onPlay.call(this, player);
            }
        });

        player.on('pause', () => {
            player.controlBar.hide();
            this._elToggle('bigPlayButton', true);
            this._elToggle('_zvuiBigPauseButton', false);

            if (onPause && typeof onPause === 'function') {
                onPause.call(this, player);
            }
        });

        player.on('ended', () => {
            player.posterImage.show();
            player.controlBar.hide();
            this._elToggle('bigPlayButton', true);

            if (!loop && onEnded && typeof onEnded === 'function') {
                onEnded.call(this, player);
            }
        });

        if (onReady && typeof onReady === 'function') {
            onReady.call(this, player);
        }
    };

    _getResizeOption = () => {
        const {
            aspectRatio,
        } = this.state;

        return Object.assign({}, {
            aspectRatio,
        });
    };

    _getPlayerDimensions = () => {
        const {
            aspectRatio,
        } = this._getResizeOption();

        const player = this._getProductPlayer();

        let {
            width,
            height,
        } = this.props;

        const containerWidth = player.el_.parentElement.offsetWidth;

        if (containerWidth < width) {
            width = containerWidth;
            height = containerWidth / aspectRatio;
        }

        return {
            width,
            height,
        };
    };

    _elToggle = (obj, flag) => {
        const {
            [obj]: {
                el_: targetEl = null,
            } = {},
        } = this._player;

        const {
            [obj]: {
                el_: targetParentEl = null,
            } = {},
        } = this;

        if (targetEl) {
            targetEl.style.display = (flag ? 'block' : 'none');
        }

        if (targetParentEl) {
            targetParentEl.style.display = (flag ? 'block' : 'none');
        }
    };

    insertComponents = () => {
        const player = this._getProductPlayer();

        const {
            sourceHD,
        } = this.props;

        this._zvuiBigPauseButton = new ZvuiBigPlayButton(player);
        player.addChild(this._zvuiBigPauseButton);

        if (sourceHD) {
            this._zvuiHDButton = new ZvuiHDButton(this);
            player.addChild(this._zvuiHDButton);
        }
    };

    setUpPlayer = () => {
        const {
            source,
            onEnded,
            onPlay,
            onPause,
            loop,
        } = this.props;

        const options = this._buildPlayerOptions();

        this._player = vjs(this.refs[BASE_CLASS], options);

        this.insertComponents();

        this._player.ready(this._playerReady);

        setTimeout(() => {
            this._updatePlayerSrc(source);
        }, 50);
    };

    unloadPlayer = () => {
        const player = this._getProductPlayer();

        const {
            dispose,
        } = this.props;

        if (dispose) {
            player.dispose();
        }
    };

    _getProductPlayer = () => {
        return this._player;
    };

    render = () => {
        const {
            skin,
            customSkinClass,
            bigPlayButton,
            poster = null,
        } = this.props;

        const {
            uid,
        } = this.state;

        return (
            <video
                ref={BASE_CLASS}
                id={`${BASE_CLASS}-${uid}`}
                className={classnames(BASE_CLASS, VJS_BASE_CLASS, {
                    [VJS_DEFAULT_SKIN_CLASS]: (skin === 'default'),
                    [customSkinClass]: (skin !== 'default'),
                    [VJS_CENTER_PLAY_CLASS]: bigPlayButton,
                })}
                poster={poster}
                playsinline={true}
                />
        );
    };
}

ProductVideo.propTypes = {
    source: PropTypes.string.string,
    sourceHD: PropTypes.string,
    poster: PropTypes.string,
    skin: PropTypes.string,
    bigPlayButton: PropTypes.bool,
    customSkinClass: PropTypes.string,
    height: PropTypes.number,
    width: PropTypes.number,
    loop: PropTypes.bool,
    onReady: PropTypes.func,
    resize: PropTypes.bool,
    eventListeners: PropTypes.object,
    options: PropTypes.object,
    onEnded: PropTypes.func,
    onPlay: PropTypes.func,
    onPause: PropTypes.func,
    debounce: PropTypes.number,
};

export default ProductVideo;
