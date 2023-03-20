var person = {
    name: "Anton",
    age: 23,
    place: "Krakow"
};

console.log(person.age);

var salaries = {
    "Вася": 100,
    "Петя": 300,
    "Даша": 250
    };
    var sum = 0;
    for (var name in salaries) {
        console.log(salaries[name]);
}


function makeCounter() {
    var currentCount = 1;
    return function() {
        return currentCount++;
    };
} 
var counter = makeCounter();
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
