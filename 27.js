const newHero = ['hulk','spiderman']
console.log(newHero)


// classes,new and this works only because of the prototype

function multiplyBy5(num){
    return num*5
}

multiplyBy5.power = 2

console.log(multiplyBy5(5))
console.log(multiplyBy5.power)
console.log(multiplyBy5.prototype)

function createUser(username, score){
    this.username = username       // this is used for current context
     this.score = score

}

createUser.prototype.increment = function(){
    this.score++
}
createUser.prototype.printMe = function(){
    console.log(`score is ${this.score}`)
}
const chai = new createUser('chai',25)
const tea = new createUser('tea',250)

chai.printMe()


// prototype in deep concept
// let myName = 'Nitesh     '

// console.log(myName.trim().length);

let heroPower = {
    thor:'Hammer',
    IronMan:'iron suit',

    getIronManPower: function(){
        console.log(`ironMan power is ${this.IronMan}`)
    },


}

// let var1 = heroPower.hasOwnProperty('IronMan')

heroPower.getIronManPower()

Object.prototype.hitesh = function(){
    console.log('Hitesh is present in all Objects')
    console.log(`ironMan power is ${this.IronMan}`)
    console.log(newHero)
}

Array.prototype.heyHitesh = function(){
    console.log('Hitesh says hello')
}

heroPower.hitesh()
newHero.hitesh()
newHero.heyHitesh()
// heroPower.heyhitesh()


//inheritance
// outdated approach
const Teacher = {
    makeVideo: true
}

const user = {
    login:'Nitesh',
    email:'123@gmail.com'
}

const TA = {
    isAvailable: false
}

const TaSupport = {
   makeAssignMent : 'Js assignment',
   fullTime: true,
   __proto__:TA
}

Teacher.__proto__ = user
console.log(Teacher.user)

// modern approach

// Object.setPrototypeOf(child, parent)

Object.setPrototypeOf(TaSupport, Teacher)

console.log(TaSupport.makeVideo)


let teacher = {
    name:'Sunidhi',
    subject:'JavaScript',
    teach: function(){
        console.log(`teacher teach us ${this.subject}`)
    }
}

let student1 = {
    name:'Nitesh',
    RollNo:19,
    learn: function(){
        console.log(`${this.name} learn's from sunidhi ma'am`)
    }
}

Object.setPrototypeOf(student1, teacher)

student1.subject = 'c++'
console.log(student1)
student1.teach()
// console.log(teacher)

// student1.learn()

console.log(student1.hasOwnProperty('subject'))
console.log(student1.hasOwnProperty('RollNo'))

let anotherUserName = 'chaiorcode    '

String.prototype.trueLength = function(){
    console.log(`${this}`);
    //console.log(`${this.name}`);
    console.log(`true length is ${this.trim().length}`)
}

anotherUserName.trueLength()
'Nitesh  '.trueLength()
'choudhary  '.trueLength()

