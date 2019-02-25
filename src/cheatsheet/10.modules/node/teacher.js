const Person = require('./person');

// METHOD 1
module.exports = class Teacher extends Person {
    constructor(name, degree) {
        super(name);
        this.degree = degree;
    }
    teach() {
        console.log('teaching');
    }
}

// METHOD 2
// module.exports = Teacher;