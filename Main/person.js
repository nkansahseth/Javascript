class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    sayHello() {
        console.log(`Hello, my name is ${this.name} I am ${this.age} years old`)
    }
}
module.exports = Person;

function Person(name, age) {
    this.name = name;
    this.age = age;
}

