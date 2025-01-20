// array and its method

let myArr = ['nitesh', 'Nishant', 'Varun' , 'Rohit' , 'Mohit']

const myArrr = [0,1,2,3,4,5,true,'hitesh']

console.log(myArrr)

console.log(myArr[3])  // through index

// pop and push method

console.log(myArr.pop())
console.log(myArr)
//push
console.log(myArr.push('Aditya'))
console.log(myArr)

// Unshift  value is added in the first and index is shifted 
console.log(myArr.unshift('Ninja'))
console.log(myArr)
console.log(myArr.shift())
console.log(myArr)

// includes
console.log(myArr.includes('aditya'))
console.log(myArr.indexOf('Varun'))
console.log(myArr.indexOf('Aditya'))


// converts all the elements of an array into a single string 
let anotherArr = [12,31,42,67,34,'Nitesh','Varun']

let oneArr = anotherArr.join()

console.log(anotherArr)
console.log(oneArr)


// slice and splice method

console.log(myArr.slice(0,4))

let newArr = ["red", "yellow", "green "," Black", "blue", "brown"]

console.log(newArr.length)

console.log(newArr.splice(1,1,'pink'))
console.log(newArr)
console.log(newArr.splice(0,0,'yellow','voilet'))
console.log(newArr)

console.log(newArr.splice(0,newArr.length))
console.log(newArr)



