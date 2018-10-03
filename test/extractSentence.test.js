const s = {
    "timestamp": "Sun Sep 30 2018 12:12:02 GMT-0700 (Pacific Daylight Time)",
    "pageurl": "https://www.economist.com/leaders/2018/09/27/how-the-world-should-cope-with-its-growing-piles-of-rubbish",
    "sentence": "! Poorer countries often lack good waste infrastructure!. Rubbish piles up on open dumps, if not in the street.",
    "posStart": 39,
    "posEnd": 53
}

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
console.log(s.posStart, s.posEnd);
console.log(extractSentence(s.sentence, s.posStart, s.posEnd));
// console.log(sentenceStart, sentenceEnd);
// console.log(targetStr.slice(sentenceStart, sentenceEnd));


//console.log(targetStr[3]);
