

function f() {
    var b = "local";
    console.log(a);
    return b;    
}
var a = "global";
// f();
// console.log(b);

function f() {
    var a = "local";
    console.log(a);
    return a;    
}
// f();
// console.log(a);

function f() {
    console.log(a);
    var a = "local";
    console.log(a);
    return a;   
}
// f();

function f() {
    a = "local";
    console.log(a);
    return a;    
}
// f();
// console.log(a);

const origin = {x: 1, y: 2}
origin.x = 3;
console.log(origin);
