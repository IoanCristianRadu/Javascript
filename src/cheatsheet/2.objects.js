const oldPerson = {
    name: 'Cristian',
    walk: function () {
        console.log("Old walk");
    }
}

oldPerson.walk();

const modernPerson = {
    name: 'Cristian',
    walk() { console.log('Modern walk') },
    talk() { console.log('Modern talk') }
};

modernPerson.talk();