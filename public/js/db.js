//const Dexie = require('./dexie.min');
const db = new Dexie('lbr');

db.version(1).stores({
    words: `++timestamp, word, sentence, pageurl`
});
// db.open();