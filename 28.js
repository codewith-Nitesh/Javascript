// call,Bind and apply

//call
// functionName.call(thisArg, arg1, arg2, ...);

//thisArg: The value to be used as this inside the function.
// arg1, arg2, ...: Arguments to pass to the function.

function setUserName(username){
    this.username = username
}

function createUser(username,email,password){
    setUserName.call(this, username)

    this.email = email,
    this.password = password
}

const chai = new createUser('chai', 'nitesh@fb.com','123')
console.log(chai)




const person1 = {
  firstName :'Nitesh',
  lastName:'choudhary',

   greet : function (greeting){
    return (`${greeting} ${this.firstName} ${this.lastName}`)
   }
   
   // Arrow functions do not have their own this. Instead, they inherit this from their lexical scope (the surrounding code where the arrow function is defined).
}


const person2 = {
    firstName:'Hitesh',
    lastName:'Kumar'
}

console.log(person1.greet.call(person2, 'hello'));





// const person1 = {
//     firstName: "Nitesh",
//     lastName: "Sharma",
//     fullName: function() {
//         return `${this.firstName} ${this.lastName}`;
//     }
// };

// const person2 = {
//     firstName: "Jitesh",
//     lastName: "Verma"
// };

// // Borrow the fullName method from person1
// console.log(person1.fullName.call(person2)); 