let sas='1';
if(sas){
    console.log('kan');
    
}
const sym = Symbol('Rpog#@1')
const JsUser = {
name: "Hitesh",
age: 18,
[sym]:'jxcyf',
location: "Jaipur",
email: "hitesh@google.com",
isLoggedIn: false,
lastLoginDays: ["Monday", "Saturday"]}
console.log(JsUser.email)
console.log(JsUser[sym])
// console.log(JsUser.sym);

// console.log(sym);
JsUser.email='hitesh@micro.com'

// Object.freeze(JsUser)
// JsUser.email='hitesh@free.com'

JsUser.greeting = function(){
    console.log("Hello");
}
JsUser.greeting2 = function(){
    console.log(`Hello ${this.name}`);
}
console.log(JsUser);
JsUser.greeting2();

