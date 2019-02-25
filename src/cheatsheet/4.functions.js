const classicFunction = function (number) {
    return number * number;
}

const singleLine = () => console.log('Single line');
singleLine();

const multiLine = () => {
    console.log();
    console.log('Multiple lines');
}
multiLine();

const square = number => number * number;
console.log(square(5));

// Using return
const power = (a, b) => {
    return Math.pow(a, b);
}
console.log(power(2, 3));

// Array of objects
const jobs = [
    { id: 1, isActive: true },
    { id: 2, isActive: false },
    { id: 3, isActive: true }
];

const activeJobs = jobs.filter(function (job) { return job.isActive });
const activeJobs2 = jobs.filter(job => job.isActive);
console.log(activeJobs2);


//This and arrow functions

const person = {
    talk() {
        /* RETURNS THIS OF TIMEOUT
        setTimeout(function() {
            console.log("this",this);
        }, 1000)
        */

        //Arrow functions don't rebind the this keyword
        setTimeout(() => console.log(this), 1000)
    }
};

person.talk();