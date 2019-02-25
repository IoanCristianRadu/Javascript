const address = {
    street: 's',
    city: 'c',
    country: 'co'
};

//Classic
const _street = address.street;
const _city = address.city;
const _country = address.country;

//Destructuring
const {street, city, country} = address;

// myCity = address.city
const {city: myCity} = address;

console.log(_street + " " + _city + " " + _country);
console.log(street + " " + city + " " + country);
console.log(myCity);