Object.defineProperty(exports, "__esModule", {
    value: true
});
var removeEvent = function removeEvent(token) {
    if (token.elem.removeEventListener) {
        token.elem.removeEventListener(token.event, token.handler);
    } else {
        token.elem.detachEvent('on' + token.event, token.handler);
    }
};

exports.default = removeEvent;