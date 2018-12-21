var empty = [];
// console.log(empty);

var a = [2, , ,4];
// console.log(a);

var evens = [2, 4, 6, 8];
// console.log(evens.length);

var a = ["A", "B", "C", "D"];
// a.length = 2;
a.length = 7;
// console.log(a);

var x = new Array(3);
// console.log(x.length);
// console.log(x);

var evens = new Array(2, 4, 6, 8);
var empty = new Array();
var a = new Array(2, 4);
var various = new Array(3.14, "pi", true, {x: 1, y: 2}, [2, 4, 6, 8]);
// console.log(evens[2]);

var a = ["A", "B", "C", "D"];
// console.log(a["2"]);
// console.log(a[4]);

var a = ["A", "B", "C"];
// console.log(a);
a[3] = "D";
// console.log(a);

var a = ["A", "B", "C"];
a.push("D");
// console.log(a);

delete a[1];
// console.log(a);

var a = ["A", "B", "C"];
a[4] = "E";
console.log(a);
console.log(a.length);

for (var i in a) console.log(i);
console.log(a.hasOwnProperty("3"));
console.log(a.hasOwnProperty("4"));

 




 
 