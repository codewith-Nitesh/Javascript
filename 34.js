const user = {
    name:"Nitesh",
    loginCount : 5,
    signedIn : true,

    getUserDetails : () => {
        return ("i got the data from database")
    }
}

console.log(user.name)
console.log(user.getUserDetails())

let myArr = [10,20,30,40,50]
console.log(myArr.length)


const myData = {
    name:"Vikas",
    age:23,
    address : "vill Byas P.O kotri Byas Distt Sirmaur",
    State:"Himachal Pradesh",
    FatherName : "Naranjan Singh",
    course : "CSE",

    fetchUserDetail : function() {
        return (`my name is ${this.name}`)
    }
}

console.log(myData.fetchUserDetail())

// constructor function 

// const promiseOne = new Promise()

function User(userName, isLoggedOut, isLoggedIn){
    this.userName = userName,
    this.isLoggedOut = isLoggedOut,
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log (`Welcome back ${this.userName}`)
    }

    return this  // optional  it is implicitily defined 
}

let newUser = new User("Nitesh", true, false)
console.log(newUser)

const obj = {
  name: "Vikas",
  show() {
    console.log(this);
  }
};

obj.show(); // { name: "Vikas", show: f }


const user1 = {name:"Aman"}
console.log(Object.getPrototypeOf(user1) === Object.prototype)

// static keyword

class User1 {
    // constructor(name,age){
    //     this.name = name
    //     this.age = age
    // }

    static myFun(name,age){
        return (`hy my name is ${this.name} and my age is ${this.age}`)
    }
}

const user2 = new User1("Nitesh",22)
//user2.myFun()
console.log(User1.myFun("Nitesh",22))


class MathUtils {
  static add(a, b) {
    return a + b;
  }

  static multiply(a, b) {
    return a * b;
  }
}

console.log(MathUtils.add(5, 10));      // 15

console.log(MathUtils.multiply(2, 3));  // 6


class Homework {
    constructor(subject, date, chapter){
        this.subject = subject
        this.date = date
        this.chapter = chapter
    }

    myhomework(){
        return (`hy i completed my homework of ${this.subject} and ${this.chapter}rd chapter on date ${this.date}`)
    }
}

const Homework1 = new Homework("physics", new Date.toString() , 3)
console.log(Homework1.myhomework())