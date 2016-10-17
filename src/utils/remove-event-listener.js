const removeEvent = (token) => {
    if (token.elem.removeEventListener) {
        token.elem.removeEventListener(token.event, token.handler);
    } else {
        token.elem.detachEvent('on' + token.event, token.handler);
    }
};

export { removeEvent as default };
