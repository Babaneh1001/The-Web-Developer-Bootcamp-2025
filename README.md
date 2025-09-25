# The Web Developer Bootcamp 2025 (Here we go again!!!--- this time we finish what we started)

Basically, I will catch up on lessons that I am not too good in then
move to where I left off on, so it's not going to be like a serialized
study right now.

------------------------------------------------------------------------

## 💥 Lesson 199: Looping over arrays

------------------------------------------------------------------------

## 💥 Lesson 217: Block scope

🪴 This chapter talks about how variables, properties are accessed
outside and inside functions and blocks.

🪴 Blocks are the braces `{}` in conditionals.

🪴 There are 3 types of scopes: **BLOCK, FUNCTIONAL, and LEXICAL**

-   **Function scope**: if a property is defined inside a function it
    cannot be used outside the scope of the function.
-   **Block scope**: if a variable is defined inside a block (if, while,
    for `{}`) it exists within that block.

### ✍️ What's the difference b/w let and var?

-   **var → Function-scoped**\
    It only cares about the function it is in. If you declare it inside
    a block (if, for, etc.), it can still be accessed outside that
    block.

-   **let → Block-scoped**\
    It only exists inside the `{ }` block where you declare it.

Both `var` and `let` are hoisted, but:

-   `var` is hoisted and initialized with **undefined**.\
-   `let` is hoisted too, but stays in a **temporal dead zone** until
    it's actually defined → using it before declaration gives an error.

------------------------------------------------------------------------

## 💥 Lesson 218: Lexical scope

Lexical scope is the ability for a child function to have access to its
parent function.

``` js
function functionParent() {
    let age = 1;

    function functionChild() {
        console.log(age);
    }
    return functionChild;
}

const child = functionParent();
child(); // ✅ prints 1 → closure keeps "age" alive
```

### 🪴 Closure

Simply put, **a closure is what helps a child function remember the
properties of the parent**.

``` js
function parent() {
  let count = 0;

  function child() {
    count++;
    console.log(count);
  }

  return child;
}

const myChild = parent();  // parent runs once
myChild(); // 1
myChild(); // 2
myChild(); // 3
```

`child()` remembers `count` because of closure.\
Without closure, `count` would be gone after `parent()` finished.

✅ So your definition is spot on:\
**A closure is what helps a child function remember and use the parent's
variables.**

------------------------------------------------------------------------

## 💥 Lesson 219: Function expression

Saving/assigning functions to variables, instead of being declared it's
saved.

``` js
const greet = function() {
  console.log("Hello!");
};

greet(); // Hello!
```

------------------------------------------------------------------------

## 💥 Lesson 220: Higher order functions

🪴 Accepts other functions as arguments and also return a function.

------------------------------------------------------------------------

## 💥 Lesson 222: Defining methods

🪴 A method is a function that has been defined as a property in an
object.

------------------------------------------------------------------------

## 💥 Lesson 229: The forEach method

🪴 Only works with arrays.\
🪴 This loop lets you apply a function to every item in the array.\
🪴 You **cannot** use a break to stop the loop.

``` js
const numbers = [1, 2, 3, 4];

numbers.forEach(num => {
  if (num === 3) break; // ❌ ERROR! break not allowed in forEach
  console.log(num);
});
```

🪴 You cannot use the return keyword properly.

``` js
function findEven(numbers) {
  numbers.forEach(num => {
    if (num % 2 === 0) {
      return num; // ❌ This only returns from the callback, not the whole function
    }
  });
  return null; // function will always reach here
}

console.log(findEven([1, 3, 5, 6])); // null ❌
```

### ❓ Which is better: forEach or for...of?

**forEach is good when:**\
- 🪴 You want to do something with every element.\
- 🪴 You don't need to stop early (break or return).\
- 🪴 You don't care about the result (it always returns undefined).

**for...of is more powerful because:**\
- 🪴 You can break, continue, and return.\
- 🪴 You can use it with async/await properly.\
- 🪴 It works on more than just arrays (also on strings, Maps, Sets,
etc.).\
- 🪴 You still get simple, clean syntax.

👉 **In short:**\
📌 If you just want to loop through all items, forEach is fine.\
📌 If you need control (stop, skip, return), for...of is the better
choice.

------------------------------------------------------------------------

## 💥 Lesson 229 & 231: The map method

🪴 Loops through every item in the array.\
🪴 Applies a function you provide on each item.\
🪴 Creates and returns a **new array** with the results.

------------------------------------------------------------------------

## 💥 Lesson 235: The filter method

🪴 A condition is set (e.g., return all even numbers).\
🪴 Returns every value that meets condition and removes every value that
does not.\
🪴 Creates and returns a **new array** with the results.

------------------------------------------------------------------------

## 💥 Lesson 237: The notorious reduce method

🪴 Comes with two arguments:\
- the **accumulator** (the running total/result so far)\
- the **current value**

🪴 Can be used on objects also.\
🪴 Will always return a **single value**.

``` js
const minValue = scores.reduce((accumulator, currentValue) => {
  if(accumulator < currentValue) {
    return accumulator;
  }
  return currentValue;
});

const maxValue = scores.reduce((maxVal, currentVal) => {
  if (maxVal > currentVal) {
    return maxVal;
  }
  else {
    return currentVal;
  }
});

// also can be used on objects
const movieRating = movies.reduce((bestMovie, currentMovie) => {
  if(bestMovie.score > currentMovie.score) {
    return bestMovie;
  }
  return currentMovie;
});
```

------------------------------------------------------------------------

# ❓ Things that are a bit confusing

-   Lexical scope\
-   Closure\
-   Difference between `forEach` and `for...of` loop
