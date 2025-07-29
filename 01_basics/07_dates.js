let dateNow = new Date();
console.log(dateNow);
console.log(dateNow.toDateString());
console.log(dateNow.toLocaleDateString());
console.log(dateNow.toLocaleString());
console.log(dateNow.toLocaleTimeString("en-IN"));


function date(){
    console.log(new Date().toString());
}
date();
console.log(typeof date);
