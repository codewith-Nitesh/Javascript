// NUMBERS and Math

let score = 900;

const balance = new Number(100)
console.log(balance);

console.log(balance.toString().length)
console.log(balance.toFixed(2))

const otherNum = 23.66
console.log(otherNum)

// precision is used to get the precise value

console.log(otherNum.toPrecision(3))
let anotherNum = 312.45
console.log(anotherNum.toPrecision(3))
console.log(anotherNum.toPrecision(4))
console.log(anotherNum.toFixed(3))

const hundred = 1000000
console.log(hundred.toLocaleString('en-IN'))
console.log(hundred.toLocaleString('en-EU'))
console.log(hundred.toLocaleString('en-US'))


// let num = 100
// let num1 = String(num)
// console.log(typeof num1)


// +++++++++++++++++++++ Maths +++++++++++++++++++++++

console.log(Math.round(33.4))
console.log(Math.abs(-4))
console.log(Math.ceil(4.2))
console.log(Math.floor(4.8))
console.log(Math.min(3,6,9,1,0,4))
console.log(Math.max(10,45,20,35,70,94,54,98,103))


console.log(Math.random()*10 +1)
console.log(Math.floor(Math.random()*6 +1))

let min = 10
let max = 30

console.log(Math.floor(Math.random() * (max - min + 1)) + min )






