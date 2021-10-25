"use strict";
var person1 = { name: 'mark', age: 39 };
var person2 = Object.create({ name: 'mark', age: 39 });
console.log(person2);
console.log(person1);
