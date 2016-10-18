# React Video JS

Simple react video container with videojs libaray for displaying apparel videos.

Features
* Mobile friendly
* Native video
* HD switch support

## Getting started
```
npm install react-video-js
```

### Example
[`example/src/app.jsx`](https://github.com/sylvesteraswin/react-video-js/tree/master/example/src)
```js
import ProductVideo from 'react-video-js';

class App extends React.Component {
    render = () => {
        <ProductVideo
            ref={i => this.pv = i}
            source="https://dl.dropboxusercontent.com/u/8725581/99B170E9-5D1C-49C5-A87F-1123679F3618.MOV"
            />
    }
}
```

# Props
* `source`: (required) String.
* `sourceHD`: String, default `''`.
* `poster`: String, default `null`.
* `skin`: String, default `default`.
* `bigPlayButton`: Boolean, default `true`.
* `customSkinClass`: String, default `''`.
* `height`: Number, default `null`.
* `width`: Number, default `null`.
* `loop`: Boolean, default `false`.
* `onReady`: Functon, `callback(videoJsPlayer)`.
* `resize`: Boolean, default `true`.
* `options`: Boolean, default
* `onEnded`: Function, `callback(videoJsPlayer)`.
* `onPlay`: Function, `callback(videoJsPlayer)`.
* `onPause`: Function, `callback(videoJsPlayer)`.
* `debounce`: Number, default `300`.

# Build the example locally
```
git clone https://github.com/sylvesteraswin/react-video-js
npm install
npm start
```

# License

MIT

# Collaboration
Feel free to contribute and or provide feedback.
