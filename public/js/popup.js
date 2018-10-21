const openIndex = () => {
    chrome.tabs.create({ "url": "index.html" });
}

document.addEventListener('DOMContentLoaded', function () {
    const link = document.getElementById('wordList');
    link.addEventListener('click', function () {
        openIndex();
    });

    const toggle = document.getElementById('stateOnOff');
    chrome.runtime.sendMessage({ messageType: "getState" }, function (res) {
        toggle.checked = res.state;
    });
    toggle.addEventListener('change', function () {
        const hasSetEnabled = this.checked;
        chrome.runtime.sendMessage({ messageType: "setState", hasSetEnabled: hasSetEnabled }, function (res) {
            console.log(res.reply);
        });
    });

    const exportButton = document.getElementById('exportButton');
    exportButton.addEventListener('click', function () {
        chrome.runtime.sendMessage({ messageType: "getWords" }, function (res) {
            const blob = new Blob([JSON.stringify(res.words)], { type: "application/json" });
            const url = URL.createObjectURL(blob);
            chrome.downloads.download({
                url: url
            });
        });
    });
});