const person = {
    name: "Cristian",
    walk() {
        console.log("walking");
    }
};

class Person {
    constructor(name) {
        this.name = name;
    }

    walk() {
        console.log(`${this.name} is walking`);
    }
}

const cristian = new Person("Cristian");
cristian.walk();