const openIndex = () => {
    chrome.tabs.create({ "url": "index.html" });
}

document.addEventListener('DOMContentLoaded', function () {
    const link = document.getElementById('wordList');
    link.addEventListener('click', function () {
        openIndex();
    });
    const toggle = document.getElementById('stateOnOff');
    toggle.addEventListener('change', function() {
        //TODO implement send message for on/off
        console.log(this.checked);
    })    
});