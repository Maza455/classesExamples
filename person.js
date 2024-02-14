// class Person {
//     constructor(name, age) {
//       this.name = name;
//       this.age = age;
//     }
  
//     sayHello() {
//       console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
//     }
// }

// const person = new Person('Zukisa', +20);
// person.sayHello();

class Person {
    static count = 0
    constructor() {
        this.firstName = 'Please provide with your first name'
        this.lastName = 'Please provide with your last name'
        this.age = 0
        Person.count += 1
    }
    set FirstName(value) {
        this.firstName = value
    }
    get FirstName() {
        return this.firstName
    }
    set LastName(value) {
        this.lastName = value
    }
    get LastName() {
        return this.lastName
    }
    set Age(value) {
        this.age = value
    }
    get Age() {
        return this.age
    }

    // Display method
    display() {
        console.log(`
        =========Person ID: ${Person.count}=============
        First name ${this.FirstName}
        Last name: ${this.LastName}
        Your age: ${this.Age}
        ==============================================
        `);
    }
}

export {
    Person
}