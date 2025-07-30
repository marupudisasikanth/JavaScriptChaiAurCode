// Key takeaways:
// 1. Use of functions and also difference b/w parameter and arguments  7:32
// 2. Concept of returning a function, which can accessed while declaring the function call as a variable outside of the function
// 3. If a function having parameters and in the function call we don't pass any arguments then it's says undefined and Not NULL since, its not defined yet.
// 4. To avoid the above situation we also can pass a default value in the parameter itself.

function myName(){
    console.log('s');
    console.log('a');
    console.log('s');
    console.log('i');
}
// myName()
const newMyName=myName
// newMyName()

function addTwoNumbers(num1, num2){
    console.log(num1+num2);
}
addTwoNumbers(4,5)
addTwoNumbers(4,'5')
addTwoNumbers(4,null)
console.log(3*undefined);

// video 20
function calculateCartPrice(...num1){
    return num1
}


console.log(calculateCartPrice(200,300,400));

function calculateCartPrice2(val1,val2,...num1){
    return num1
}

console.log(calculateCartPrice(200,300,400,500,600));

const user = {
username: "hitesh",
price: 199
}

function handleObject(anyobject) {
console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}
handleObject(user)


