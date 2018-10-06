const extractSentence = (str, posStart, posEnd) => {
    const END_CHARACTERS = '.!?';

    let sentenceStart = 0;
    let sentenceEnd = 0;

    for (let i = posStart; i < str.length; i++) {
        if (END_CHARACTERS.includes(str[i])) {
            sentenceEnd = i + 1;
            break;
        }
        sentenceEnd = i;
    }

    for (let i = posEnd - 1; i >= 0; i--) {
        if (END_CHARACTERS.includes(str[i])) {
            sentenceStart = i + 2;
            break;
        }
        sentenceStart = 0;
    }
    return str.slice(sentenceStart, sentenceEnd);
}

const menuId = chrome.contextMenus.create({
    title: "save '%s' to LearnByReading",
    type: "normal",
    contexts: ["selection"],
    id: "Learn-By-Reading",
});

chrome.browserAction.onClicked.addListener(()=>{
    chrome.tabs.create({"url": chrome.extension.getURL("index.html"), "selected": true}, (tab) => {
        this.tab = tab;        
    });

    chrome.tabs.onRemoved.addListener(function(tabId,removeInfo){
        if(this.tab && this.tab.id == tabId){
            this.tab = null;
        }
    });
});

chrome.runtime.onMessage.addListener( async (req, sender, sendResponse) => {
    if (req.messageType == 'getStorage') {
        //TODO
        console.log('message received getStorage 49');
        const memos = await db.words.toArray();
        const reply = {'words':memos};
        sendResponse(reply);
    }
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
    if (info.menuItemId == "Learn-By-Reading") {
        chrome.tabs.sendMessage(tab.id, { messageType: "registerWord" }, function (response) {
            const _word = info.selectionText.toLowerCase();
            const s = response.target;
            const _sentence = extractSentence(s.sentence, s.posStart, s.posEnd);
            let _obj = {};
            _obj.word = _word;
            _obj.timestamp = new Date().toISOString();
            _obj.pageurl = info.pageUrl;
            _obj.sentence = _sentence;
            db.words.add(_obj);
        });
    }
});