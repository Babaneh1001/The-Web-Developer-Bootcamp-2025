const people = ["Scooby", "Velma", "Daphne", "Shaggy", "Fred"]; 

const person = {
  name: "Scooby",
  age: 7,
  breed: "Great Dane",
  favoriteFood: "Scooby Snacks",
  color: "Brown",
  bestFriend: "Shaggy",
  hobby: "Solving mysteries",
  likesRunning: true,
  heightInFeet: 3,
  weightInKg: 60
};

const testScores = {
  math: 95,
  english: 88,
  science: 92,
  history: 76,
  geography: 84,
  computer: 100,
  art: 67,
  music: 73,
  physicalEducation: 89,
  economics: 91
};

// alert('connection secure')


// 📋 for looping forward
for(let i=0; i < people.length; i++) {
  console.log(people[i].toUpperCase())
}

// 📋 for looping backwards 
for (let i = people.length -1; i > 0; i--){
  console.log(people[i].toUpperCase())
}

// 📋 for of is used for arrays
for of loop (when you do not care about the index)
for (let peeps of people) {
  console.log(peeps.toUpperCase())
}

// 📋 for in is used in objects
for (p in person) {
  // console.log(p);
  // (.) notation to get the key is for when the value is known 
  // Bracket notation ([]) → use when the key name is stored in a variable or is dynamic.
  console.log(`Information about ${p} is ${person[p]}`)
}

// 📌 will always return in an array format 
console.log(Object.keys(person));
console.log(Object.values(person));
console.log(Object.entries(person));

// 🚨 of Array 
// 🚨 in object

📋 
for (let arr1 of Object.entries(person)) {
  for (let arr2 of arr1) {
    console.log(`This is the key: ${arr2} and this is the value: ${arr1[arr2]}`)
  }
}

// 📋 get avergae score using for of and Object.values()
let sum = 0;
let scoresArr = Object.values(testScores);
for (let avgScore of scoresArr) {
  // sum = avgScore + sum;
  sum += avgScore;
}

console.log(sum/scoresArr.length + "%")

// Lesson 222: Defining methods (known as functions saved as properties)
const myMath = {
  PI: 3.14159,
  square: (num) => num * num,
  cube: (num) => num **3,
  // or this way
  length(num) => { return `this is the length ${num}` },
  breadth(num) => { return `this is the length ${num}` },
}

// ✍️ when using arrow functions 
// ✍️ If you use curly braces { } in an arrow function, you must use return.
// ✍️If you don’t use curly braces, the value is automatically returned.