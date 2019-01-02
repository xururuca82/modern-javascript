var s = "ABC";
// console.log(typeof s);

var n = NaN;
// console.log(typeof n);

// var obj = [1,2,3];
// console.log(typeof obj);

// var obj = String("abc");
// console.log(typeof obj);

// var obj = Number(1);
// console.log(typeof obj);

// var f = function(x) {return ++x; }
// console.log(typeof f);

// var a = 3;
// var parity = (a%2 == 0) ? "짝수" : "홀수";
// console.log(parity);

// var a = 4;
// var parity = (a%2 == 0) ? "짝수" : "홀수";
// console.log(parity);

// for(var i=1, sum=0; i<=10; i++) {
//     sum += 1;
//     console.log(sum);    
// }

var x = 1;
eval("x++;")
console.log(x);

var formula = "x*x";
eval("function f(x) {return " + formula + "; }");
console.log(f(4));

