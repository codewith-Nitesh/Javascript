// let num = Math.ceil(3.14)
// console.log(num)

const descrip =  Object.getOwnPropertyDescriptor(Math, 'PI')

console.log(descrip)


const chai ={
    name:'ginger chai',
    price:250,
    isAvailable:true,

    orderchai: function(){
         console.log('chai bangyi')
    }
}

console.log(Object.getOwnPropertyDescriptor(chai, 'name'))

Object.defineProperty(chai, 'name', {
    // writable:false,
    enumerable:false
})

console.log(Object.getOwnPropertyDescriptor(chai, 'name'))

for (const [key,value] of Object.entries(chai)) {
    if(typeof value !== 'function'){
        console.log(`${key} : ${value}`)
    }
}

class user {
    constructor(username,email,age){
        this.username = username,
        this.email = email,
        this.age = age
    }

    logme(){
        console.log(`my name is ${this.username}`)
    }
}

let value = new user('Nitesh','nitu333@gmail.com','21')
console.log(value)
value.logme()


function user1(username,clas){
    this.username = username,
    this.clas = clas

    this.hello = function(){
        console.log(`hello my name is ${username}`)
    }
}

let userdetail = new user1('Sunidhi','12th')
console.log(userdetail)
userdetail.hello()


// const person = {
//     firstName: "Nitesh",
//     lastName: "Choudhary",
//     fullName: function() {
//         return `${this.firstName} ${this.lastName}`;
//     }
// };

// const anotherPerson = {
//     firstName: "Hitesh",
//     lastName: "Kumar"
// };

// // Bind the fullName method to anotherPerson
// const getFullName = person.fullName.bind(anotherPerson);

// // Call the new function
// console.log(getFullName()); 
// // Output: Hitesh Kumar


const person = {
    firstName: "Nitesh",
    lastName: "Choudhary",
    fullName: function() {
        return `${this.firstName} ${this.lastName}`;
    }
};

const anotherPerson = {
    firstName: "Hitesh",
    lastName: "Kumar"
};

// Bind the fullName method to anotherPerson
const getFullName = person.fullName.bind(anotherPerson);

// Call the new function
console.log(getFullName()); 

let obj = {
    name:'Nitesh',
    surname:'Choudhary',

    fullname : function () {
         return(`hello my name is ${this.name} and my surname is ${this.surname}`)
    }
}

console.log(obj.fullname())


let globalVar = "I'm global";

let outer = function() {
    let outerVar = "I'm from outer";

    function inner() {
        let innerVar = "I'm from inner";

        console.log(globalVar);  // Accessible
        console.log(outerVar);   // Accessible
        console.log(innerVar);   // Accessible
    }

    // console.log(outerVar);
}

outer();

console.error('me hu dalal')
console.table([{ name: "Nitesh", age: 25 }, { name: "John", age: 30, size:'32' }]);
console.warn("This is a warning!");
console.info("This is some info.");

