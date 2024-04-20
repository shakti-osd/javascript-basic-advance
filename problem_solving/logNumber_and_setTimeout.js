// setTimeout 
function logNumbers(){
    console.log(1);
    setTimeout(function() {console.log(2)}, 2000)
    setTimeout(function() {console.log(3)}, 1000)
    setTimeout(function() {console.log(4)}, 0)
    console.log(5)
}

logNumbers() // 1, 5, 4, 3, 2
