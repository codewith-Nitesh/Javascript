// for loop
 
let arr = ['nitesh','vikas']
let arr2 = arr.splice(0,0,'vishal')
console.log(arr)

for(let i=1; i<=10; i++){
    console.log('hello everyone',i)
}

for(let i=0 ; i<=10 ; i++){
    let element = i;
    if(element == 5){
        console.log('5 is the best number')
    }
    console.log(element)
}

for(let i=0; i<=10; i++){
       for(let j = 0; j<=10 ; j++){
        console.log(i,j)
       }
}
for(let i=0; i<=10; i++){
       for(let j = 0; j<=10 ; j++){
        console.log(`outer loop value ${i}, and ineer loop value ${j}`)
       }
}

// print the table

for (let i = 0; i <= 10; i++) {
    for(let j = 0; j<=10; j++){
        console.log(`${i} * ${j} = ${i*j}`)
    }
    
}

let arr1 = ['Nitesh','Vishal','Rohit','Mohit']
for(let i=0 ; i<arr1.length; i++){
    console.log(arr1[i])
}

// break and continue

for(let i=0 ; i<=10; i++){
    if(i == 5){
        console.log(`${i} is detected`)
        break;
    }
    console.log(i)
}
for(let i=0 ; i<=10; i++){
    if(i == 5){
        console.log(`${i} is detected`)
        continue;
    }
    console.log(i)
}

// while and Do-while loop

let ii=0           //intitialize
while(ii<=10){            // condition
    console.log('Nitesh');    
    ii++;                  // incrementation
   
}

// Array
let arr3 = ['Nitesh', 'Mohit', 'jatin', 'Rohit']
let i=0
while(i<arr3.length){
    console.log(`value is ${arr3[i]}`)
    i++
}

//Do-while loop
let score = 1
do{
console.log(`score is ${score}`)
score++
}while(score<=10)

    
let score1 = 11
do{
console.log(`score is ${score1}`)
score++
}while(score1<=10)