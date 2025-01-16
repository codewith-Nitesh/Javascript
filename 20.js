// for of loop

const arr = [10,20,30,40,50]
for (const element of arr) {
    console.log(element)
}

const arr1 = [
    {
        name1:'Nitesh'
    },
    {
        name2:'Choudhary'
    },
    {
        name3:'Nishant'
    },
    {
        name4:'choudhary'
    }
]

for (const obj of arr1) {
    console.log(obj)
}

const greeting = 'Hello world'
for(const greet of greeting){
    if( greet == 'o'){
        break;
    }
    console.log(`${greet}`)
}

let arrr3 = ['nitesh']
let arrr = arrr3.includes('nitesh')
console.log(arrr)

// maps

let map = new Map()
// set() method 
map.set('name', 'Alice');
map.set('age',25)
map.set('course', 'BE CSE')


console.log(map)
//get() method
let var1 = map.get('age')
console.log(var1)

//has() method in map

console.log(map.has('course'))

// delete()

console.log(map.delete('age'))

console.log(map)

// clear()
console.log(map.clear())

console.log(map)

// size()

console.log(map.size)


let map1 = new Map([
    ['name' ,'Nitesh'],
    ['course', 'Web Development'],
    ['location', 'chandigarh,India'],
    ['age', '21'],
    ['gender', 'Male'],
    ['marital status', 'Single'],
    ['graduation','B.E (CSE) Blockchain'],
    ['skin','light brown'],
    ['weight','70'],
    ['nature',,'interative']
])

console.log(map1)
// set()
console.log(map1.set('siter name', 'Mau'))
// get()
console.log(map1.get('marital status'))
//has()
console.log(map1.has('gender'))
// delete()
console.log(map1.delete('nature'))
// clear()
//console.log(map1.clear())
// size
console.log(map1.size)

 for(const key of map1){
    console.log(key)
 }

 // array destructing
 for(const [key, value] of map1){
    console.log(key, '=>', value)
 }

 // for of loop on object 

 let myObj = {
    name:'Nitesh',
    age:'21',
    location:'Chandigarh,India'
 }

//  for(const [key,value] of myObj){
//     console.log(key,value)
//  }

// note =>  for of loop is not iterable on object




//try for in loop

for(const key in myObj){
    console.log(key)
}
// object destructing
for(const key in myObj){
    console.log(`${key} shortcut is for ${myObj[key]}`)
}

// for in loop for array

let ar = ['Nitesh','Ashyam','Nitin','Mridul','Keshav','Milind']
console.log(ar)

for(let item in ar){
    console.log(ar[item])
}

for(const key in map1){
    console.log(key)
}

let obj1 = {
    name:'Nitesh',
    age:21
}
console.log(obj1.hasOwnProperty('age'))

// object.values return only the values not keys 

let obj = {
    state:'Himachal Pradesh',
    tehsil : 'Paonta Sahib',
    District : 'Sirmaur'
}

console.log(Object.values(obj))
for(const value of Object.values(obj)){
    console.log(value)
}


// forEach loop

// array.forEach(callback(currentValue, index, array), thisArg);

let entry = [10,20,30,40,50,60,'Nitesh','Nishant']
console.log(entry[2])
// note => there is no function name in call back function

entry.forEach( (item) =>{
   console.log(item)
})

function name1 (item){
    console.log(item)
}
entry.forEach(name1)

let ar1 = ['Nitesh','Varun','Nishant','Vasu','MohanPal']
console.log(ar1)

ar1.forEach( function (item1) {
   console.log(item1)
})


let aray1 = ['Nitesh','Nishant','Hitesh','Hritik']

aray1.forEach( (item,index,aray1) =>{
     console.log(`${index +1} and the name is ${item} and followed by the array list  ${aray1} `)
})

let courseInfo = [
    {
        coursename:'Javascript',
        courseFileName:'Js'
    },
    {
        coursename:'c plus plus',
        courseFileName:'c++'
    },
    {
        coursename:'Tailwind Css',
        courseFileName:'Tailwind'
    },
]

courseInfo.forEach((item)=>{
console.log(item.courseFileName)
})

