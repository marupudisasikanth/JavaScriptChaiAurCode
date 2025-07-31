//https://www.youtube.com/watch?v=9ksqBa8_txM&list=PLu71SKxNbfoBuX3f4EOACle2y-tRC5Q37&index=23
// [00:00](https://youtube.com/9ksqBa8_txM?t=0s) Welcome arrow functions  
// [00:13](https://youtube.com/9ksqBa8_txM?t=13s) Introduced in 2015  
// [00:26](https://youtube.com/9ksqBa8_txM?t=26s) Understanding 'this' keyword  
// [00:41](https://youtube.com/9ksqBa8_txM?t=41s) Context for 'this'  
// [00:53](https://youtube.com/9ksqBa8_txM?t=53s) Basics of arrow functions  
// [01:07](https://youtube.com/9ksqBa8_txM?t=67s) Creating new object  
// [01:21](https://youtube.com/9ksqBa8_txM?t=81s) User registration example  
// [02:05](https://youtube.com/9ksqBa8_txM?t=125s) Dynamic welcome message  
// [02:18](https://youtube.com/9ksqBa8_txM?t=138s) Referencing current context  
// [03:03](https://youtube.com/9ksqBa8_txM?t=183s) Accessing current variables  
// [03:31](https://youtube.com/9ksqBa8_txM?t=211s) Misconceptions about 'this'  
// [03:59](https://youtube.com/9ksqBa8_txM?t=239s) Running welcome message  
// [04:27](https://youtube.com/9ksqBa8_txM?t=267s) Output user welcome  
// [04:54](https://youtube.com/9ksqBa8_txM?t=294s) Changeable username functionality

// [05:21](https://youtube.com/9ksqBa8_txM?t=321s) Change contact context  
// [05:34](https://youtube.com/9ksqBa8_txM?t=334s) Print current context  
// [06:43](https://youtube.com/9ksqBa8_txM?t=403s) Context related variables  
// [07:11](https://youtube.com/9ksqBa8_txM?t=431s) Empty object reference  
// [08:07](https://youtube.com/9ksqBa8_txM?t=487s) Global object window  
// [09:03](https://youtube.com/9ksqBa8_txM?t=543s) Function context values  
// [10:02](https://youtube.com/9ksqBa8_txM?t=602s) Undefined in function  

// [10:16](https://youtube.com/9ksqBa8_txM?t=616s) Future manipulation tips  
// [10:29](https://youtube.com/9ksqBa8_txM?t=629s) Discuss function declaration  
// [10:56](https://youtube.com/9ksqBa8_txM?t=656s) Print results examples  
// [11:25](https://youtube.com/9ksqBa8_txM?t=685s) Remove function keyword  
// [12:09](https://youtube.com/9ksqBa8_txM?t=729s) Interview differences noted  
// [12:50](https://youtube.com/9ksqBa8_txM?t=770s) Understanding 'this' values  
// [13:04](https://youtube.com/9ksqBa8_txM?t=784s) Basic arrow function  
// [13:41](https://youtube.com/9ksqBa8_txM?t=821s) Implicit return explained  
// [14:27](https://youtube.com/9ksqBa8_txM?t=867s) Simplifying return statements  
// [15:08](https://youtube.com/9ksqBa8_txM?t=908s) React return techniques

// [15:36](https://youtube.com/9ksqBa8_txM?t=936s) Explicit return explained  
// [15:50](https://youtube.com/9ksqBa8_txM?t=950s) Returning objects syntax  
// [16:02](https://youtube.com/9ksqBa8_txM?t=962s) Parentheses usage importance  
// [16:44](https://youtube.com/9ksqBa8_txM?t=1004s) Common coding issues  
// [17:09](https://youtube.com/9ksqBa8_txM?t=1029s) Array functions introduced  
// [17:37](https://youtube.com/9ksqBa8_txM?t=1057s) Syntax knowledge essential  
// [18:05](https://youtube.com/9ksqBa8_txM?t=1085s) Global object clarification  
const user= {
    userName: 'sas',
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.userName}, welcome to website`); 
    }
    
}
let a = user.welcomeMessage
// a()
// console.log(this);

chai()
function chai() {
let username = "hitesh"
// console.log(this);
}
// chai2()
const chai2 = function() {
let username = "hitesh"
console.log(this);
console.log(this.username);
}
// chai2()
// chai3()
const chai3 = () => {
let username = "hitesh"
console.log(this);
console.log(this.username)
}
// chai3()

const addTwo = (num1, num2) => {
    return num1+num2
}
const addThree = (num1, num2, num3) => num1+num2+num3 //or (num1+num2+num3)

const returnPerson = (name) =>  {return {name:'sas'}};

const returnPerson1 = (name) =>  ({name:'sas'}); //if we do not use return keyword then we should use ()-paranthesis
console.log(returnPerson());
console.log(returnPerson1());

console.log(addTwo(4,5));

const myarray = [2,5,3,4]
console.log(myarray);

myarray.forEach(w => console.log(w))
