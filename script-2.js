const names = ['Valeriia', 'David', 'Max', 'Dariia', 'Grigoriy', 'Victor', 'Evheniy'];

const foods = ['apples', 'candys', 'cherrys', 'mangoes', 'potatoes', 'crisps', 'oranges'];

const people = names[Math.floor(Math.random() * 7)];
const food = foods[Math.floor(Math.random() * 7)];

const message = `${people} ate all the ${food}!!!`;
console.log(message);