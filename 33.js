// setinterval and setTimeout 

let count = setInterval(()=>{
    console.log('nitesh')
},2000)

console.log(count)

// let time = setTimeout(() => {
//     console.log('me pagal hu')
// },4000)

// console.log(time)

let time = setTimeout(()=>{
    clearInterval(count)
},5000)
