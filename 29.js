// ES6

// class User {
//     constructor (username, email, password){
//         this.username = username;
//         this.email = email;
//         this.password = password
//     }

//     encryptPassword(){
//         return `${this.password}abc`
//     }
//     changeUserName(){
//         return `${this.username.toUpperCase()}`
//     }

// }

// const chai = new User('chai',"chai@gmail.com",'123')
// console.log(chai.encryptPassword())
// console.log(chai.changeUserName())

// inheritance

// class user {
//     constructor (username){
//         this.username = username
//     }

//     LogMe(){
//         console.log(`USERNAME IS ${this.username} `)
//     }
// }

// class Teacher extends user{
//     constructor(username, email, password){
//         super(username)
//         this.email = email,
//         this.password = password
//     }
    
//     addCourse(){
//         console.log(`new course was added by ${this.username}`);
        
//     }
// }

// const chai = new Teacher('chai','chai@teacher.com','123')
// chai.addCourse()

// chai.LogMe()

// const masalaChai = new user ('masalaChai')
// masalaChai.LogMe()

// console.log(chai === masalaChai)
// console.log(chai instanceof Teacher)
// console.log(Teacher instanceof user)
// console.log(masalaChai instanceof user)


// static prop

class user {
    constructor (username){
        this.username = username
    }

    logMe(){
        return `username:${this.username}`
    }

// static keyword helps in stopping the access of the method or property

    static createId(){
        return `123`
    }
}

const hitesh = new user('Hitesh')
// console.log(hitesh.createId())

class Teacher extends user{
    constructor (username, email){
        super(username)
        // super keyword is used to inherit the property of the parent class y child class
        this.email = email
    }
}

const iphone = new Teacher('Iphone', 'apple@apple.com')
console.log(iphone.logMe())