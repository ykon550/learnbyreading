//const Dexie = require('./dexie.min');
const db = new Dexie('lbr');

db.version(1).stores({
    words: `++id, timestamp, word, sentence, pageurl, storedlevel`,
    config: `name, state`
});