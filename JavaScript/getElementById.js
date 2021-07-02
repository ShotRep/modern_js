/*
1.) Select methods
a.) getElementById
b.) getElementsByTagName
c.) getElementsByClassName
*/

// To select the element with id of bear-photo:
document.getElementById("bear-photo")

const img = document.getElementById("bear-photo")
console.dir(img) //<=gives true object form

//To select the element with id of main:
document.getElementById("main")

const para = document.getElementById("main")
console.dir(para)

/*
we are returned HTML elements of different prototypes, there are different catagories for each type object, so we will get different sets of properties for each.
__proto__: HTMLImageElement
__proto__: HTMLParagraphElement
*/
