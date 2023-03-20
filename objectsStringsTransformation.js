
const user = {
    firstName: 'Василий',
    toString: function() {
        return 'Пользователь ' + this.firstName;
    }
};
console.log( ['x'] == 'x' );


var foo = {
    toString: function() {
        return 'foo';
    },
    valueOf: function() {
        return 2;
    }
};
console.log( foo );
console.log( foo - 1 );
console.log( foo + "3" );