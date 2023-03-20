/*
function Animal(name) {
    this.name = name;
    this.canWalk = true;
} 
animal = new Animal("ёжик");


var user = {
    firstName: "Вася",
    surname: "Петров"
} 
Object.defineProperty(user, "fullName", {
    get: function() {
        return this.firstName + ' ' + this.surname;
    },
    set: function(value){
        const split = value.split(" ");
        this.firstName = split[0];
        this.surname = split[1];
    }
});

user.fullName = "Anton Osmolovskyi";

console.log(user.fullName);


*/

const user = {
    firstName: "Oleg",
    sayHi: function(){
        console.log(this.firstName);
    }
}

user.sayHi.bind(user);