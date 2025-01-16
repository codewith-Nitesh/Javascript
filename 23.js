const promiseOne = new Promise(function(resolve, reject){
// do an async  task
// DB calls, cryptography, networkcalls

setTimeout(function(){
  console.log('nitesh')
},2000)
    
})

promiseOne.then(function(message){ 
    console.log('promise successful',message)
}).catch(function(error){
    console.log('Error : ',error)
})


const otherPromise = new Promise((resolve, reject) =>{
    let success = false;
    if(!success){
        resolve('Operation is successful')
    } else{
        reject('operation failed')
    }
});

otherPromise
.then(function(message){
     console.log('success :', message)
})
.catch(function(error){
    console.log('Error:', error)
})


let otherPromise1 = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve('Data Fetched')
        reject()
    },1000)
});

otherPromise1
.then(function(handle){
    console.log(handle)
    return ('processing Data')
})
.then(function(processed){
    console.log(processed)
    return ('Data Processed')
})

.then(function(finalMessage){
    console.log(finalMessage)
})
.catch(function(error){
    console.log('Error : ', error)
})


let otherPromise2 = new Promise(function(resolve, reject){
        setTimeout(function(){
            resolve({
                userName:'Nitesh',
                Age:21,
                Gender:'Male'
            });
            reject()
        },1000)

})


otherPromise2
.then(function(data){
    console.log(data)
    return ('data Received')
})
.then(function(data1){
    console.log(data1)
})
.catch(function(error){
    console.log('Error:', error)
})
.finally(function(){
    console.log('The promise is resolved')
})

