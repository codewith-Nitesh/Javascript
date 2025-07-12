// (() =>{
//     console.log('Nitesh')
// })();

// promise using then() and catch()  method

let promise1 = new Promise(function(resolve, reject){
    setTimeout(function(){
        let status = false;
        if(!status){
            resolve('Data is processing')
        } else{
            reject("Data doesn't fetched successfully")
        }
    },2000)
});

promise1
.then(function(data){
  console.log(data)
  return ('Data fetched successfully')
})
.then(function(data1){
  console.log('data fetched successfully')
})
.catch(function(error){
  console.log('ERROR:', error)
})
.finally(function(){
    console.log('everything is over now')
})

let promise2 = new Promise(function(resolve, reject){
    setTimeout(function(){
        let item = false;
        if(item){
            resolve('item is delivered')
        } else{
            reject('item is not delivered')
        }
    },1000)
});

async function handlePromise() {
    try {
        let response = await promise2
        console.log(response)
    } catch (error) {
        console.log(error)
    }
}

handlePromise()


let fetch1 = fetch('https://api.github.com/users/codewith-Nitesh')

async function fetching(){
    try {
        let response  = await fetch1
        let data = await response.json()
        console.log('username:',data.login)
        console.log('id:',data.id)
        console.log('type:',data.type)
    } catch (error) {
        console.log(error)
    }
}

fetching()

