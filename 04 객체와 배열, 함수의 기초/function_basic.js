function dist(p, q) {
    var dx = q.x - p.x;
    var dy = q.y = p.y;
    return Math.sqrt(dx*dx+dy*dy);
}

var p1 = {x: 1, y: 1};
var p2 = {x: 4, y: 5};
var d = dist(p1, p2);
// console.log(d);

var bark = function() { console.log("Bow-wow"); }
// console.log(bark());

function square(x) { return x*x }
var sq = square;
// console.log(sq(5));

function add1(x) { return x = x + 1 }
var a = 3;
var b = add1(a);
// console.log("a = " + a + ", b = " + b);

function add1(p) { p.x = p.x +1; p.y = p.y +1; return p }
var a = {x: 3, y: 4};
var b = add1(a);
console.log(a, b);


 
