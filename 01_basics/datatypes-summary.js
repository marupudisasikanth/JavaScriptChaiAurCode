// Primitive

// 7types
// 1 string
// 2 number
// 3 boolean
// 4 null
// 5 undefined
// 6 symbol
// 7 bigint

// Reference types
// 1 Array
// 2 Onjects
// 3 Functions
let bigNumber = 321586947258475225482452n;
console.log(typeof bigNumber);

//https://262.ecma-international.org/5.1/#sec-11.4.3


// Types of memory in js
// Stack (primitive), Heap (Non-primitive)

let myName = "sasikanth"

let otherName = myName
myName='sas'
console.log(otherName)

let user = {
    hName: 'spike'
}

let user2 = user
user.hName='chan'

console.log(user2)