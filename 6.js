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

function Foo(){}
console.log(Foo.prototype); 


let student = {
    name:"Nitesh",
    age:22,
    uid:"22BCT10006"
}

console.log(student.hasOwnProperty("name"))


let myFriendName = function (name) {
    this.name = name
    console.log(`hi my friend name is ${name}`)
}

let friendName = new myFriendName("Lakshay")

console.log(friendName)

let myName = function (name){
    this.name = name
    // let obj
    // return obj ={name:"Vikas"}
    console.log(`Hy this is me ${this.name}`)
}

let finalReturn = new myName ("Nitesh")
console.log(finalReturn)

// prototype
function createUser(userName, score){
    this.userName = userName
    this.score = score
}

// creating your own function methods

createUser.prototype.increment = function (){
    return (`increment ${this.score++}`)
}
createUser.prototype.printMe = function (){
    console.log(`score is ${this.score}`)
}

const user = new createUser("chai", 25)
const tea = new createUser ("tea", 250)

user.printMe()
tea.increment()

let myNam = "hitesh   "
let myChannel = "chai    "

// our motive is to create a method 
// console.log(myNam.truelength)


let myHero = ["thor", "spiderMan"]

let heroPower = {
    thor:"Hammer",
    spiderMan : "sling",

    getSpiderPower : function (){
        console.log(`spidy power is ${this.spiderMan}`)
    }
}

Object.prototype.hitesh = function(){
    console.log("hitesh is present in all object")
}

heroPower.hitesh()

myHero.hitesh()
Array.prototype.heyNitesh = function(){
    console.log(`hitesh says hello`)
}
myHero.heyNitesh()
// heroPower.heyNitesh()


// inheritance 
const userName = {
    login : "Nitesh",
    email : "nitesh123@gmail.com"
}

const teacher = {
    makeVideo : true
}

const teachingAssitance = {
    isAvaialable : false
}

const TASupport = {
    makeAssignment : "js Assignment",
    fullTime : true,
    __proto__ : teachingAssitance
}

teacher.__proto__ = userName

console.log(teacher.__proto__)
console.log(TASupport.__proto__)
console.log(userName.__proto__)

// modern Syntax

Object.setPrototypeOf(teachingAssitance, teacher)

console.log(teachingAssitance.__proto__)

let anotherName = "Nitesh choudhary"

String.prototype.trueLength = function (){
    console.log(`${this.anotherName}`)
    console.log(`true lenght is : ${this.trim().length}`)
}

anotherName.trueLength()
"hitesh".trueLength()
"iceTea".trueLength()

// protoType me hm khud ke modified function method vgera kese bna skte he 

let myArray = [10, 20 , 30 , 40 , 50]
let myNewArr = [100, 200, 300, 400, 500]
Array.prototype.mapping = function (){
    myArray.map((items, index) => {
        console.log(items + 5)
    })
}

myArray.mapping()
myNewArr.mapping()


let myString = "i can do it as always"

Object.prototype.myOwnString = function () {
    console.log(`${this.toUpperCase()}`)
}

myString.myOwnString()


// call this

let myPlace = function () {
    console.log(`Hi my name is ${this.name} and i am ${this.age} old`)
}

let myDetail = {name : "Nitesh", age:22}

myPlace.call(myDetail)

let myQualification = function (company){
    console.log(`hi am ${this.age} years old and i am working as ${this.role} at ${company}`)
}
let myqualiDetail = {
    age:22,
    role:"frontend Developer"

}
myQualification.call(myqualiDetail, "meta")


let result = Math.max.call(null, 5, 10, 2);
console.log(result)

let mySisterName = function () {
    console.log(`hi my sister name is ${this.name} and she is an ${this.proffesion}`)
}

let sisObj = {
    name:"Bharti",
    proffesion:"influencer"
}

mySisterName.call(sisObj)

// class constructor

