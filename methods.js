var user = { firstName: "Вася" };
var admin = { firstName: "Админ" };
function func() {
    console.log( this.firstName );
}
user.f = func;
admin.g = func;

user.f(); // Вася
admin.g(); // Админ

