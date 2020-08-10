"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Human = /** @class */ (function () {
    function Human(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
    return Human;
}());
var jihoon = new Human("jihoon", 25, "male");
var sayHi = function (person) {
    return "Hello " + person.name + ", you are " + person.age + ", you are a " + person.gender;
};
console.log(sayHi(jihoon));
//# sourceMappingURL=index.js.map