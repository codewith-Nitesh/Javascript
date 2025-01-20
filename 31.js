class user {
    constructor(email,password){
        this.email = email,
        this.password = password
    }


    get email(){
   return this._email.toUpperCase()
    }

    set email(value){
        this._email = value
    }

    get password(){
     return this._password.toUpperCase()
    }

    set password(value){
        this._password = value.toUpperCase()
    }
}

const hitesh = new user('hitesh@nitesh.ai','125abc')
console.log(hitesh.password)

// getter and setter

function user1(email,username){
    this.email = email,
    this.username = username

// defineproperty is the property of the getter and setter

    Object.defineProperty(this, 'email',{
        get: function(){
            return this._email.toUpperCase()
        },
        set:function(value){
            this._email =value
        }
    })
}

const chai = new user('chai@123.com','chai')
console.log(chai.email)

const user2 = {
    _email:'hitesh@nitesh.com',
    _password:'112xhams',
// _ undserscore defines that private property ko define kr rha hu
    get email(){
    return this._email.toUpperCase()
    },
    
    set email(value){
       this._email = value
    }
}

// factory function       
const tea = Object.create(user2)
console.log(tea.email)

// factory function
// getter and setter 

let name = 'Nitesh choudhary'
console.log(name.split(" "))

class Person{
    constructor(firstName, lastName){
        this._firstName = firstName;
        this._lastName = lastName
    }

    // getter 
    get fullName(){
        return (`${this._firstName} ${this._lastName}`)
    }

    //setter
    set fullName(value){
const parts = value.split(" ")
if(parts.length === 2){
    this._firstName = parts[0];
    this.lastName = parts[1]
}else{
    console.error('invalid full name, must include first and last name')
}
    }
}

const person = new Person('john','doe')

console.log(person.fullName)

person.fullName = 'jane smith';
console.log(person.fullName)

person.fullName = 'onlyFirstName'


// factory function is used to create and return an object

function user1 (username,id){
    return{
        username,
        id,

        login(){
            return (`${this.username} has logged in, ${this.id}`)
        },

        logOut(){
            return (`${this.username} has logged out, ${this.id}`)
        }

    };
}

const usercall = new user1('Nitesh','120GH62J30kl3')
const usercall1 = new user1('Sravjot','120Gk424J30kl3')

console.log(usercall)

console.log(usercall.login())
console.log(usercall1.logOut())

