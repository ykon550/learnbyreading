const sentenceFormalize = (_word, _text) => {
    const before = _word;
    const after = `<span style={{color:"red"}}>` + _word + `</span>`
    const replaced = _text.replace(new RegExp(_word, 'g'), after);
    return replaced
};

const text = "They included Hollywood moguls, liberal journalists and comedians—plus President Donald Trump, whose self-confessed pussy-grabbing is not something most conservatives admire him for.";
const word = "moguls"

// console.log(sentenceFormalize(word, text));

console.log(text.split(word));
console.log(text.split(word).length);