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

const highlight = () => {
    chrome.runtime.sendMessage({ messageType: "getWords" }, function (response) {
        let wordsArr = [];
        response.words.map((elem) => {
            wordsArr.push(elem.word);
        });
        let allCollection = document.getElementsByTagName("*");
        let arr = [].slice.call(allCollection)
        let instance = new Mark(arr);
        instance.mark(wordsArr, {className:"highlight-mark"});
    });
}

console.log('LearnbyReading loaded.');
highlight();