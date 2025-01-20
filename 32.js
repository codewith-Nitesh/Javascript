// lexical scoping

function access(){
    let userName  ='jhala'

    function childAccess(){
        let anotherUser = 'PadiAlu'
        console.log(userName)
    }

    function macho(){
            let age = 21;
            let Religion = 'Hindu'

            function acquire(){
                console.log(anotherUser)
            }
    }

    childAccess()
    macho()

}

access()

// closure
// isme pura ka pura lexical scope return hota he
//A closure is a function that retains access to its lexical scope even when the function is executed outside that scope.

function makeFun(){
    const name = 'mozilla'
    function displayName(){
        console.log(name);
    }
    return displayName;
}

const myFunc = makeFun();
myFunc();

function add(){
    let count = 0;

    return function myFunc(){
        count++;
        return count
    };
}

let answer = new add()
console.log(answer())


let fun = function nitesh(){
    return ('Hello')
}

console.log(fun())

// welldone javascript series finished

