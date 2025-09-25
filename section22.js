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

const goodMovies = movies.filter(movie => movie.score > 80);
console.log(goodMovies)

newNumbers = numbers.filter(evenNum => evenNum % 2 === 0 )

console.log(newNumbers)