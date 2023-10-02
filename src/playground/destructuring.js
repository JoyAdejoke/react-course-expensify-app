//const person = {
  //  name: 'Joy',
    //age: 24,
    //location: {
      //  city: 'Nigeria',
        //temp: 92
   // } 
//};
//const { name:  firstName = 'Anonymous', age } = person;

//console.log(`${firstName} is ${age}.`);

//const {city, temp: temperature} = person.location;
//if (person.location.city && person.location.temp) {
  //  console.log(`it's ${temperature} in ${city}.`)
//}

const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennysylvania', '19147'];

const [, city, state = 'New York'] = address;

console.log(`You are in ${city} ${state}`);


const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];

const [ drink, smallprice, mediumprice, bigprice ] = item;

console.log(`A medium ${drink} costs ${smallprice}`);