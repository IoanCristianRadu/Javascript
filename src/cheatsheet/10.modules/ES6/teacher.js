// ES6 
import { Person } from './person';

// EXPORT keyword
export class Teacher extends Person {
    constructor(name, degree) {
        super(name);
        this.degree = degree;
    }
    teach() {
        console.log('teaching');
    }
}