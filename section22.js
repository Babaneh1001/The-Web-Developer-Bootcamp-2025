const movies = [
  { title: "Inception", score: 85 },
  { title: "The Dark Knight", score: 95 },
  { title: "Interstellar", score: 90 },
  { title: "Tenet", score: 75 },
  { title: "Dunkirk", score: 80 }
];

const fullNames = [
  {first: 'Albus', last: 'Dumbledore'}, 
  {first: 'Harry', last: 'Potter'}, 
  {first: 'Hermione', last: 'Granger'}, 
  {first: 'Ron', last: 'Weasley'}, 
  {first: 'Rubeus', last: 'Hagrid'}, 
  {first: 'Minerva', last: 'McGonagall'}, 
  {first: 'Severus', last: 'Snape'}
];


const numbers = [1, 2, 3, 4];

const scores = [
  85.23, 92.75, 74.50, 88.10, 95.99,
  67.45, 79.80, 90.66, 83.33, 72.14,
  99.01, 64.70, 81.56, 76.88, 89.45
];

// try {
//   hello.toUpperCase()
// } catch {
//   console.log('Error occured')
// }

// hello.toUpperCase()

// console.log('After')

// function shout(msg) {
//   try {
//     console.log(msg.toUpperCase().repeat(3))
//   } catch(e) {
//     console.log(e);
//     console.log('please pass a string next time')
//   }
// }

// using for each to loop through an aray of objects 
// forEach 
// movies.forEach(movie => {
//   console.log(`${movie.title} - ${movie.score/10}`)
// });

// map (will always return a new array)
// newNumbersArr = numbers.map(number => number * 2);

// console.log(newNumbersArr);

// const titles = movies.map(movie => movie.title.toUpperCase());

// console.log(titles)

// const firstNames = fullNames.map(firstName => firstName.first);

// console.log(firstNames)

// const goodMovies = movies.filter(movie => movie.score > 80);
// console.log(goodMovies)

// newNumbers = numbers.filter(evenNum => evenNum % 2 === 0 )

// console.log(newNumbers)

// a function to get names depending on the length 
// function validUserNames(usernames) {
//   const result = usernames.filter(name => name.length < 10);
//   return result;
// }

// reduce methood 
// const total = numbers.reduce((accumulator, currentValue) => {
//   return accumulator + currentValue
// });

// I could have also done it using the for of loop 
// let total = 0;
// for (let number of numbers) {
//   total += number;
// }

// console.log(total);

// using the reduce to get the min value in the array 
// I am trying to remember the actual arguement names 
// but I could have used (min, score) where min = accumulator & score = currentValue
const minValue = scores.reduce((accumulator, currentValue) => {
  if(accumulator < currentValue) {
    return accumulator
  }
  return currentValue
});

const maxValue = scores.reduce((maxVal, currentVal) => {
  if (maxVal > currentVal) {
    return maxVal
  }
  else {
    return currentVal 
  }
})

// also can be used on objects
const movieRating = movies.reduce((bestMovie, currentMovie) => {
  if(bestMovie.score > currentMovie.score) {
    return bestMovie
  }
  return currentMovie
})