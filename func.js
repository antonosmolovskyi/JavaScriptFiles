function makeCounter() {
    var currentCount = 1;

    function counter() {
        return currentCount++;
    }
    
    counter.set = function(value) {
        currentCount = value;
    };
    counter.reset = function() {
        currentCount = 0;
    };
    return counter;
} 

var counter = makeCounter();
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
