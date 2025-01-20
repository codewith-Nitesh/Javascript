function one(){
    const name1 = 'Nitesh'
    
    function Two(){
        const website = 'Love Babbar'
        console.log(name1)
    }
    // console.log(website)

    //Two()
    console.log(name1)
}
// child function can acess the parent function (nested function)

one()

if(true){
    const userName = 'Nitesh'
    if(userName === 'Nitesh'){
        const website = ' Education hub'
        console.log(userName + ' watch' + website )
        //console.log(...userName, 'watches', ...website)
    }
    // console.log(website)

}
// console.log(userName)

// ++++++++++++++++++++++++++++++ interesting +++++++++++++++++++++++++
console.log(addone(5))

function addone(num){
    return num+1
}


let funexp = function fun(num)
{
    return num+1
}
console.log(funexp(9))

