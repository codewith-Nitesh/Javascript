// Objects and Events

// singleton

//object literals
Object.create   // constructor method ke through

// declaration of symbol in objects
const mySymb = Symbol('key1')

let obj = {
    name:'Nitesh',                // keys and values
    Age:'21',                     // behind the scene the keys are treated like string
    class:"12th",
    email:'choudharynitesh692@gmail.com',
//  declaration in object
    [mySymb]:'key1',   // symbol is declared like this in object with []
    isLoggedIn:false,
    lasstLoginDays:['Monday','Saturday'],
    'location':'Paonta Sahib'
}

console.log(obj.name)  // bad practice
console.log(obj['email'])     // access using the square notation
console.log(obj['location'])
console.log(obj[mySymb])   // also used with the square bracket

// freezing the object

// Object.freeze(obj)
// console.log(obj)

obj.name = 'Nitesh Choudhary'
console.log(obj)

obj.greeting = function(){
    console.log('hello everyone')
}

console.log(obj.greeting())

obj.greetingTwo = function (){
    console.log(`hlo my name is Nitesh, ${this.Age}`
    )
}

console.log(obj.greetingTwo())

