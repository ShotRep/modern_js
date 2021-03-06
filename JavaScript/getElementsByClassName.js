/*
1.) Select methods
a.) getElementById
b.) getElementsByTagName
c.) getElementsByClassName
*/

// To select all elements with the class of 'special':
document.getElementsByClassName("special")

const className = document.getElementsByClassName("special")
console.log(className)

//getElementsByClassName also returns an array-like object.
// We don't have access to array methods, but we can iterate:

const specials = document.getElementsByClassName("special")
for (let el of specials) {
  console.log(el)
}

//We can use spread to make an actual array:
const arr = [...specials]
arr.pop() //this works because it's now an array!
console.log(arr)
