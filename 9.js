// Date and Time

let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString())
console.log(myDate.toLocaleString())
console.log(myDate.toLocaleDateString())
console.log(myDate.toLocaleTimeString())
console.log(typeof myDate)

console.log(myDate.toDateString())

let newCreatedDate = new Date('11-12-2024')
console.log(newCreatedDate.toLocaleString())


// let myTimeStamp = Date.now()
// console.log(myTimeStamp)

// console.log(newCreatedDate.getTime())

// let oneDate = new Date("12-11-2023")
// console.log(oneDate.getTime())

console.log(Math.floor(Date.now()/1000))


let date1 = new Date()
console.log(date1.getFullYear())
console.log(date1.getMonth() +1)
console.log(date1.getMinutes())
console.log(date1.getUTCMonth())

console.log(newCreatedDate.toLocaleString('default', {
         weekday: "long",
         month: "long",
         day:"numeric"
}))




 