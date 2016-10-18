import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';

import ProductVideo from '../../lib/ProductVideo';

class App extends Component {

    _handleOnEnded = (player) => {
        console.log('PAUSED/PLAYED/ENDED');
    };

    render = () => {
        return (
            <section
                className="app">
                <ProductVideo
                    ref={i => this.pv = i}
                    source="https://s3-eu-central-1.amazonaws.com/zalando-vegas-static/media/4054789152470_LQ.mp4"
                    sourceHD="https://s3-eu-central-1.amazonaws.com/zalando-vegas-static/media/4054789152470_HQ.mp4"
                    poster="https://s3-eu-central-1.amazonaws.com/zalando-vegas-static/media/4054789152470.jpg"
                    onEnded={this._handleOnEnded}
                    onPlay={this._handleOnEnded}
                    onPause={this._handleOnEnded} />
            </section>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('container'));
