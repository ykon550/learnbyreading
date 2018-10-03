chrome.runtime.onMessage.addListener((req, sender, sendResponse) => {
    if (req.messageType == 'registerWord') {
        console.dir(req);
        console.log('receive tryadd message 3');
        const selected = window.getSelection();
        console.dir(selected);
        let target = {};
        target['sentence'] = selected.anchorNode.data;
        target['posStart'] = selected.anchorOffset;
        target['posEnd'] = selected.focusOffset;
        // const copied = selected.anchorNode.cloneNode();
        sendResponse({ reply: "reply", target: target });
    }
})

console.log('content script loaded.');