function fact(n) {
    var k = 1, i = n;
    do {
        k *= i--;
    } while( i>0 );
    return k;
}

console.log(fact(5));
