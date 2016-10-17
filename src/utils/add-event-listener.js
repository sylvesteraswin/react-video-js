const addEvent = (elem, event, fn, binder) => {
    // avoid memory overhead of new anonymous functions for every event handler that's installed
    // by using local functions
    function listenHandler(e) {
        const ret = fn.apply(binder || this, arguments);
        if (ret === false) {
            e.stopPropagation();
            e.preventDefault();
        }
        return (ret);
    }

    function attachHandler() {
        // set the this pointer same as addEventListener when fn is called
        // and make sure the event is passed to the fn also so that works the same too
        const ret = fn.call(elem, window.event);
        if (ret === false) {
            window.event.returnValue = false;
            window.event.cancelBubble = true;
        }
        return (ret);
    }

    if (elem.addEventListener) {
        elem.addEventListener(event, listenHandler, false);
        return {
            elem,
            handler: listenHandler,
            event,
        };
    } else {
        elem.attachEvent('on' + event, attachHandler);
        return {
            elem,
            handler: attachHander,
            event,
        };
    }
};

export { addEvent as default };
