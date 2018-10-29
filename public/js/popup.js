const openIndex = () => {
    chrome.tabs.create({ "url": "index.html" });
}

const json2csv = (json) => {
    const keys = Object.keys(json[0]);
    const header = keys.map((key) => '"' + key + '"').join(', ') + '\n';
    const body =  json.map(record => {
        return keys.map((key) => {
            const escaped = record[key].replace(/"/gi, '""');
            return '"' + escaped + '"';
        }).join(', ');
    }).join('\n');
    return header + body;
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
            const blob = new Blob([json2csv(res.words)], { type: "text/csv" });
        //     const blob = new Blob([JSON.stringify(res.words)], { type: "application/json" });
            const url = URL.createObjectURL(blob);
            chrome.downloads.download({
                url: url
            });
        });
    });
});