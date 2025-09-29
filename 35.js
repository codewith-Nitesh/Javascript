// class in javascript 

class user {
    constructor(username, id, age, password){
        this.username = username,
        this.id = id,
        this.age = age,
        this.password = password
    }

    myresult (){
        return (`${this.age}`)
    }

}

const userInfo = new user("Nitesh", "vfd944n4", 22, 97473184)

console.log(userInfo.myresult())



let myInfo = function (){
    console.log(`this statement is in uppercase`)
}

String.prototype.upperCase = function (){
    return this.toUpperCase();
}

let capitalWord = "hi this is me Nitesh"

console.log(capitalWord.upperCase())


let myMethod = function (statement){
    this.statement = statement
}

myMethod.prototype.statementLength = function (){
    return this.statement.length
}

let method = new myMethod ("this is me nitesh")
console.log(method.statementLength())


class myDetail {
    constructor (name, age , uid){
        this.name = name,
        this.age = age,
        this.uid = uid
    }
    otherInfo (){
        return(`${this.name} and his age is ${this.age}`)
    }
}

let newInfo = new myDetail("Nitesh", 22, "22BCT10006")

console.log(newInfo.otherInfo())

function User(username, age) {
  this.username = username;
  this.age = age;
}

User.prototype.sayHi = function () {
  return `Hi, I am ${this.username}, ${this.age} years old.`;
};

User.prototype.isAdult = function () {
  return this.age >= 18;
};

User.greet = function () { // static method
  return "Hello from the User class itself!";
};

const myWay = new User("nitesh", 17)
console.log(myWay.isAdult())


class MyStyle {
    constructor(username, uid){
        this.username = username,
        this.uid = uid
    }

    mymethod (){
        return (`my name is ${this.username} and and my uid is ${this.uid} `)
    }

}

const newStyle = new MyStyle("nitesh", "22BCT10006")
console.log(newStyle.mymethod())

class MyClass {
    constructor(username, address, gender){
        this.username = username,
        this.address = address,
        this.gender = gender
    }
    
    myMethod(){
        console.log(`hi my name is ${this.username} and i live in ${this.address} and my i am ${this.gender}`)
    }
}

    class AnotherClass extends MyClass{
       constructor(username, address, gender){
        super(username)
       }
        userMethod(){
            console.log(`hi this me ${this.username}`)
        }
    }


const userDetail = new MyClass("Nitesh", "paonta Sahib, HImachal Pradesh", "Male")
const moreDetail = new AnotherClass("Vikas")
userDetail.myMethod()
moreDetail.userMethod()


console.log(userDetail instanceof MyClass)
console.log(moreDetail instanceof AnotherClass)



class User1 {
    constructor(username){
        this.username = username
    }
    
    logMe(){
        console.log(`username is ${this.username}`)
    }

    static createId(){  // static keyword basically helps in blocking the access of that method or property
        return `123`
    }
}

class Inherit extends User1 {
    constructor(username){
        super(username)
        console.log(`this is me ${this.username}`)
    }
}

const hitesh = new User1("hitesh")
// console.log(hitesh.createId())

const myInherit = new Inherit("mayammi")

// console.log(myInherit.createId())

const Nayuser = {
    name : "Nitesh",
    greet : function(){
        console.log("hello" + this.name)
    }
}

const greetFn = Nayuser.greet.bind(Nayuser)
greetFn()


class User3 {
    constructor(username){
        this.username = username
    }

    myName(){
        console.log(`my name is ${this.username}`)
    }
}

const user2 = new User3("Nitesh")
setTimeout(user2.myName.bind(user2), 1000)

class Birthday {
    constructor(name, age, mood){
        this.name = name,
        this.age = age,
        this.mood = mood
    }

    myBirthday(){
        console.log(`hlo my name is ${this.name}, and today i am ${this.age} and my mood is ${this.mood}`)

    }
}

class Cake extends Birthday{
    constructor(name, flavour){
        super(name),
        this.flavour = flavour
    }

    myCake(){
        console.log(`today i have ordered ${this.flavour} flavour and it taste so much good`)
    }

}

const myBirthday = new Birthday("Nitesh", 22, "Happy")
const myCake = new Cake("alibano", "vanilla")

myCake.myBirthday()
// myBirthday.myCake()
myCake.myCake()


const myFunction = function (name,age) {
    this.name = name
    this.age = age


   this.myFun = () =>{
        console.log(`hy my name is ${this.name} and my address is ${this.address}`)
    }
}

const ltFun = new myFunction("Nitesh", 22, "PaontaSahib")
ltFun.myFun()


class Use {
  constructor(username) {
    this.username = username;
  }

  // Arrow function method
  sayHi = () => {
    console.log("Arrow Method →", this.username);
  }
}

const u2 = new Use("Vikas");
u2.sayHi();  

const greet2 = u2.sayHi;
greet2();

class StudentUser{
    constructor(name,age){
        this.name = name
        this.age = age
    }

    // instance method (normal method)
    myMethod(){
        return (`hi my name is ${this.name} and i am ${this.age} year old`)
    }
}

const myuser = new StudentUser("Nitesh", 22)
const anotherUser = new StudentUser("Vishal",26)
// here myuser is basically storing and refering to an object(instance) 

console.log(myuser.myMethod())
console.log(anotherUser.myMethod())



class Animal {
    constructor(animalName, animalAge, animalHeight){
        this.name = animalName,
        this.age = animalAge,
        this.height = animalHeight
    }

    myAnimal(){
        console.log(`my pet name is ${this.name} he is ${this.age} years old and his height is ${this.height}`)
    }

    myAnotherAnimal(){
        return (`my pet name is ${this.name} he is ${this.age} years old and his height is ${this.height}`)
    }

   static myAnotherAnimal2(){
        console.log(`hlo G my name is Nitesh`)  // only accessible by the class itself
    }

    topAnimal(){
        console.log(`i will learn web development fully one day this is my promise and this is parent class`)
    }

}

const myAnimal = new Animal("fantm",12,"5.95")
const otherAnimal = new Animal("sheru",22,"5.11")


myAnimal.myAnimal()
console.log(otherAnimal.myAnotherAnimal())
Animal.myAnotherAnimal2()

class Janvar extends Animal{
    constructor(animalName){
        super(animalName)
    }

    mygreet(){
        return super.topAnimal() + " this is child class"
    }


}

const myJanvar = new Janvar("muku")
console.log(myJanvar.mygreet())

Janvar.myAnotherAnimal2()

const mahaJanvar = Janvar.myAnotherAnimal2()
console.log(mahaJanvar)