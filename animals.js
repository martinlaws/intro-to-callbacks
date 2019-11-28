// Simplest callback of all:
setTimeout(() => {
  console.log(1+1)
}, 1200)

const animalsArray = ['Maya', 'Mai', 'Obie', 'Spotty', 'Curly']
// const callback = console.log

// function forEach(array, callback) {
//   for (let animal of array) {
//     callback(animal)
//   }
// }

// forEach(animalsArray, callback)

// animalsArray.forEach(animal => console.log(animal))
// const angryAnimalsArray = animalsArray.map(animal => animal.toUpperCase())

// console.log(angryAnimalsArray)
// console.log(animalsArray)


// const findYourPet = petName => {
//   for (let animal of animalsArray.entries()) {
//     let animalPosition = animal[0]
//     let animalName = animal[1]
  
//     if (animalName === petName) {
//       console.log(`${animalName} found at position ${animalPosition}`) 
//     }
//   }
// }

const findYourPet2 = petName => {
  for (let animal of animalsArray.entries()) {
    [ position, name ] = animal
  
    const text = name === petName ? `${name} found at position ${position}` : ''

    console.log(text)
  }
}

findYourPet2('Maya')
findYourPet2('Mai')
findYourPet2('Curly')