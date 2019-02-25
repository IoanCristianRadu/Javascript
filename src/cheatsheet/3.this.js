const person = {
    name: 'Cristian',
    logThis() {
        console.log(this);
    }
};

person.logThis();

const logThis = person.logThis;
logThis(); //Returns Node: global / DOM: window/undefined

// In logThis the value of this is now set to person
const logThis = person.logThis.bind(person);
logThis();