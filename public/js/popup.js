const openIndex = () => {
    chrome.tabs.create({ "url": "index.html" });
}

document.addEventListener('DOMContentLoaded', function () {
    const link = document.getElementById('wordList');
    link.addEventListener('click', function () {
        openIndex();
    });
    const toggle = document.getElementById('stateOnOff');
    toggle.addEventListener('change', function () {
        const hasSetEnabled = this.checked;
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            chrome.tabs.sendMessage(tabs[0].id, { messageType: "setState", hasSetEnabled: hasSetEnabled }, function (response) {
                console.log(response.reply);
            });
        })
    });
});