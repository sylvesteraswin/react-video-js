import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';

import ProductVideo from '../../lib/ProductVideo';

class App extends Component {

    _handleOnEnded = (player) => {
        console.log('PAUSED/PLAYED/ENDED');
    };

    _zoomIn = () => {
        console.log('I AM ZOOMED IN');
    };

    render = () => {
        return (
            <section
                className="app">
                <ProductVideo
                    ref={i => this.pv = i}
                    source="https://dl.dropboxusercontent.com/u/8725581/99B170E9-5D1C-49C5-A87F-1123679F3618.MOV"
                    width={640}
                    height={360}
                    onEnded={this._handleOnEnded}
                    onPlay={this._handleOnEnded}
                    onPause={this._handleOnEnded}
                    zoomIn={this._zoomIn}
                    />

            </section>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('container'));
