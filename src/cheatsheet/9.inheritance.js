class Person {
    constructor(name) {
        this.name = name;
    }

    walk() {
        console.log(`${this.name} is walking`);
    }

    eat(){
        console.log("Person eats")
    }

    static teach(){
        console.log('Person teaches')
    }
}

class Teacher extends Person {
    constructor(name, degree) {
        super(name);
        this.degree = degree;
    }

    eat(){
        console.log("Teacher eats")
    }

    parentEat(){
        super.eat();
    }


    static teach() {
        console.log('Teacher teaches');
        //super.teach();
    }
}

const teacher = new Teacher('Cristian', 'MSc');
teacher.eat();
teacher.parentEat();
Teacher.teach();