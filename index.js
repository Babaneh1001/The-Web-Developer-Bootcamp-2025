

// try {
//   hello.toUpperCase()
// } catch {
//   console.log('Error occured')
// }

// hello.toUpperCase()

// console.log('After')

function shout(msg) {
  try {
    console.log(msg.toUpperCase().repeat(3))
  } catch(e) {
    console.log(e);
    console.log('please pass a string next time')
  }
}