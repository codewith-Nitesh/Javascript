// javascript and classes

// OOP 

//object
//-collection of properties and methods
//tolowerCase

// why use oop

const user ={
    userName:'Nitesh',
    age:21,
    signedIn:true,
   
    getUserDetails: function(){
        //console.log(`got user details from database`)
       // console.log(`userName: ${this.userName}`)
        console.log(this)
    }


}
console.log(user.getUserDetails())
console.log(this)


//const promiseOne = new Promise()


// constructor function
function user1(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greeting = function(){
        console.log(`welcome ${this.username}`)
    }
    return this
}

const info = new user1('Nitesh',21,true)
const info1 = new user1('Jitesh',12,false)
console.log(info)
info.greeting()
console.log(info1)