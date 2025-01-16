// primitive and non-primitive datatypes

// primitive datatypes
// 7 types of datatypes 
// string
// boolean
// bigInt
// number
// null
// undefined
// symbol

// non-Primitive Datatypes  // Reference Type

// functions
// objects
// Array


// primitive

const id = 123

let uniqueId = Symbol(121)

console.log(id == uniqueId)

let score = 100.4
console.log(score)

let bigNumber = 894349492343243n

console.log(typeof bigNumber)

// Non-primitive

//array

let heroes = ['Shaktiman', 'IronMan', 'Thor', 'Superman']
console.log(heroes)
console.log(typeof heroes)

// object

let Obj = {
    name:'Nitesh',
    Age:19,
    Place:'PaontaSahib',
    occupation:'SoftwareDeveloper'
}

console.log(Obj)
console.log(typeof Obj)


const function1  = function hello(){
    console.log('Nitesh')
}

console.log(function1)
function1()
console.log(typeof function1)

// ************************************************************

// stackmemory(Primitive) ,  Heapmemory(Non-Primitive) 


// primitive
let name1 = 'NiteshChoudhary'
let name2 = name1

name2 = 'HiteshChoudhary'

console.log(name1)
console.log(name2)

//Non-Primitive  we make changes in main one or refferal is passed 

let myObj = {
    name:'Nitesh',
    Age:21,
    Place:'PaontaSahib',
    education:'Bachelors in engineering'
}

let anotherObj = myObj

anotherObj.Age = 31

console.log(myObj)