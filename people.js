const people = [
  { name: "martin", heightInCm: 188 },
  { name: "scott", heightInCm: 190 },
  { name: "little lucy", heightInCm: 40 }
];

// Three ways of writing the same callback:

// Option 1: fancy free
const peopleWhoCanRideRollerCoasters = people.filter(
  person => person.heightInCm > 100
);

// Option 2: Totally valid
// const peopleWhoCanRideRollerCoasters = people.filter(person => {
//   return person.heightInCm > 100
// })

// Option 3: Old school anonymous functions
// const peopleWhoCanRideRollerCoasters = people.filter(function(person) {
//   return person.heightInCm > 100
// })

// Two ways of chaining callbacks on the examples above:

// Option 1: modern arrow functions
const namesOfPeopleWhoCanRideRollerCoasters = people
  .filter(person => person.heightInCm > 100)
  .map(person => person.name.toUpperCase());

// Option 2: anonymous old functions:
// const namesOfPeopleWhoCanRideRollerCoasters = people
//   .filter(function(person) {
//     return person.heightInCm > 100;
//   })
//   .map(function(person) {
//     return person.name.toUpperCase();
//   });

// console.log(peopleWhoCanRideRollerCoasters);

console.log(namesOfPeopleWhoCanRideRollerCoasters.find(name => name === 'ASDASD'))