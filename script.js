'use strics'

const message = 'heLlo THERE, hOW ARE yOu doINg?'
const lower = message.toLowerCase();
console.log(lower);

const firstWord = message[0];
const upper = firstWord.toUpperCase();
console.log(upper)

const withoutFirst = lower.slice(1);

const addWord = upper + withoutFirst;
console.log(addWord);








