const openNewPage = () => {
    chrome.tabs.create({"url": "index.html" });
}
document.addEventListener('DOMContentLoaded', function() {
let link = document.getElementById('wordList');
link.addEventListener('click', function() {
    openNewPage();
});
});