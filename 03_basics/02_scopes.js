// 🎯 Key Takeaways for quick navigation:

// 00:00 🌐 The video discusses the concept of scope in programming, a crucial topic for understanding what's happening in a program.
// 00:42 📁 Scope determines where variables are accessible and how long they exist in a program.
// 01:35 🔄 Variables declared inside different scopes can have the same name without conflict.
// 02:02 🚧 Understanding scope helps avoid issues like variable shadowing and improves code clarity.
// 02:45 🎯 The "let" keyword in JavaScript helps control variable scope, preventing unintended consequences in code.
// 03:24 🌐 Global scope in JavaScript is where a variable is available throughout the entire program.
// 03:39 🔄 Local scope refers to the limited range where a variable is accessible, such as within a function.
// 03:52 🐍 Issues can arise when variables are declared multiple times with the same name in different scopes.
// 04:07 🚧 Undefined variable errors can occur if a variable is used before being defined in the code.
// 05:16 🌐 Global variables can lead to unintended conflicts and errors when different parts of the program use the same variable names.
// 06:26 🌐 Global and local scopes in JavaScript are explained in Hindi, highlighting the impact on variable values.
// 06:52 🔄 Variables declared inside a function have local scope, affecting only that function, while global scope variables persist.
// 07:21 🧩 Nested functions create a block scope, and understanding scope is crucial to avoid programming bugs.
// 07:49 🔍 Careful naming of variables is essential to prevent unintended global scope pollution.
// 08:17 🚀 The next video will delve into practical examples, inspecting scope in browsers, and explaining the 'this' keyword.

//https://www.youtube.com/watch?v=cHHU0jXfjKY&list=PLu71SKxNbfoBuX3f4EOACle2y-tRC5Q37&index=22
if(true){
    let a = 10
    const b = 20
    var c= 30
}
function create(){
    var d = 90
}
create()
console.log(a);
// console.log(b);
console.log(c);
console.log(d);



