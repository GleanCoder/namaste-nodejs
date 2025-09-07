let name = "Namaste NodeJS";
let a = 10;
var b = 20;
// console.log(name);
// console.log(a + b);
// console.log(window); // window is not defined, it's only works on browser
// console.log(this); // empty object {}, similarly this also point to window object on browser only

// for node the global object is global
// console.log(global);

// there is standard way of define global object which applicable across all platforms and all browsers
console.log(globalThis);

// global === globalThis  //OP: (true)
