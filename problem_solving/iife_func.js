(function(){
    var a = b = 3;
})();

console.log("a defined " + (typeof a !== "undefined")) // false
console.log("b defined " + (typeof b !== "undefined")) // true
// b is a global variable shorthand for above statement is b = 3; var a = b;


(function(x) {
    return (function(y) {
        console.log(x);
    })(2)
})(1);