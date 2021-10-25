let x : [string ,number];


x = ['hello', 39];

// 오류 발생  = > 순서 , 길이 다 맞아야 오류가 안난다 . x = [10 , 'mark'];

x[0] = "world";

console.log(x[0])

const person : [string ,number] = ["Mark", 39];

const [first , sec ] = person;