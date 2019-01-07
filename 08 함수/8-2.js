function myConcat(separator) {
    var s ="";
    for(var i=1; i<arguments.length; i++) {
        s += arguments[i];
        if(i<arguments.length-1) s+= separator;
    }
    console.log(arguments);
    var params = [].slice.call(arguments);
    console.log(params);
      
    return s;
}
console.log(myConcat("/","apple","orange","peach"));


