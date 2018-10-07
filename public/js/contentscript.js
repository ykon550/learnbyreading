chrome.runtime.onMessage.addListener((req, sender, sendResponse) => {
    console.log("asdf");
    if (req.messageType == 'registerWord') {
        const selected = window.getSelection();
        let target = {};
        target['sentence'] = selected.anchorNode.data;
        target['posStart'] = selected.anchorOffset;
        target['posEnd'] = selected.focusOffset;
        sendResponse({ reply: "reply", target: target });
    }
})

console.log('content script loaded.');