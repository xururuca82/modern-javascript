// var a = [2, 5, -1, 7, -3, 6, 9];
// for(var i=0, sum=0; i<a.length; i++) {
//     if(a[i]<0) continue;
//     sum += a[i];
// }
// console.log(sum);

var a = [[2, 4, 6, 8], [1, 5, 12, 3], [7, 6, 8, 5], [5, 15, 3, 4], [3, 2, 9, 4]];
var max = Number.NEGATIVE_INFINITY;
console.log(max);
mainloop: for(var i=0; i<a.length; i++) {
    var average = 0;
    for(var j=0; j<a[i].length; j++) {
        if(a[i][j]>10) continue mainloop;
        average += a[i][j];
    }
    average /= a[i].length;
    console.log("i = " + i + ": 평균값 = " + average);
    if(max<average) max = average;    
}
console.log("최대 평균값 = " + max);

