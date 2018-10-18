chrome.runtime.onMessage.addListener((req, sender, sendResponse) => {
    if (req.messageType == 'registerWord') {
        const selected = window.getSelection();
        let target = {};
        target['sentence'] = selected.anchorNode.data;
        target['posStart'] = selected.anchorOffset;
        target['posEnd'] = selected.focusOffset;
        sendResponse({ reply: "reply", target: target });
    }
})

const mark = () => {
    chrome.runtime.sendMessage({ messageType: "getWords" }, function (response) {
        let wordsArr = [];
        response.words.map((elem) => {
            wordsArr.push(elem.word);
        });
        let allCollection = document.getElementsByTagName("*");
        let arr = [].slice.call(allCollection)
        let instance = new Mark(arr);
        instance.mark(wordsArr, { className: "highlight-mark" });
    });
}

// TODO refactoring
const unmark = () => {
    chrome.runtime.sendMessage({ messageType: "getWords" }, function (response) {
        let wordsArr = [];
        response.words.map((elem) => {
            wordsArr.push(elem.word);
        });
        let allCollection = document.getElementsByTagName("*");
        let arr = [].slice.call(allCollection)
        let instance = new Mark(arr);
        instance.unmark(wordsArr, { className: "highlight-mark" });
    });
}


const markOrUnmark = (hasSetEnabled) => {
    if (hasSetEnabled) {
        mark();
    } else {
        unmark();
    }
}

chrome.runtime.onMessage.addListener((req, sender, sendResponse) => {
    if (req.messageType == 'setState') {
        markOrUnmark(req.hasSetEnabled);
        sendResponse({ reply: "state set" })
    }
});

console.log('LearnbyReading loaded.');
mark();