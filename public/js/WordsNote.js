class WordsNote {
    constructor() {
        this.name = 'words';
        chrome.storage.local.get(this.name, (result) => {
            if (result[this.name] == undefined) {
                let initObj = {};
                initObj[this.name] = {};
                chrome.storage.local.set(initObj);
            }
        });
    }
    _setStorage(key, value) {
        return new Promise(resolve => {
            let _obj = {};
            _obj[key] = value;
            chrome.storage.local.set(_obj, resolve);
        });
    }

    _getStorage(key) {
        return new Promise(resolve => {
            chrome.storage.local.get(key, (result) => resolve(result[key]));
        })
    }

    async get(word) {
        const wordsObj = await this._getStorage(this.name);
        if (wordsObj[word] == undefined) {
            return null;
        } else {
            return wordsObj[word];
        }
    }
    async set(word, log) {
        let wordsObj = await this._getStorage(this.name);
        if (wordsObj[word] == undefined) {
            wordsObj[word] = [];
        }
        wordsObj[word].push(log);
        await this._setStorage(this.name, wordsObj);
    }

    async getAll() {
        return await this._getStorage(this.name);
    }
}