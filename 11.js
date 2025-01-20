let marvel_hero = ['Iron-man', 'Thor', 'Hulk', 'spider-man', 'captain America']
let indian_hero = ['Krish' , 'shaktiman', 'naagRaj']

// console.log(marvel_hero.push(indian_hero))
// console.log(marvel_hero)

// console.log(marvel_hero[5][1])


// Array concat prperty -> right way to add up two variables

let newAr = marvel_hero.concat(indian_hero)
console.log(newAr)


//spread operator ( ... )

let newContainer = [...marvel_hero, ...indian_hero]
console.log(newContainer)

//flat(no. of depth)
let anotherArr = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
let myReal = anotherArr.flat(Infinity)  
console.log(myReal)


// isArray to verify if its array or not always return boolean value

console.log(Array.isArray('Nitesh'))

let arr = [2,3,4,'Nitesh','Kalesh']
console.log(Array.isArray(arr))

// from 

console.log(Array.from({name:'hitesh'}))  ///interestion
// conversion of string,objects to array
let va = ('Nitesh')
let ar = Array.from(va)
console.log(ar)

// of is used when we need to create or assemble multiple elements in array

let score1 = 100
let score2 = 200
let score3 = 300

let at = Array.of(score1,score2,score3)
console.log(at)

let array = [4,6,9,1,0,3,5,8,2,7]
console.log(array.sort())

let array1 = ['Nitesh', 'Varun', 'Vishal','KashyapAnil' ,'Sunil']
console.log(array1.sort())






