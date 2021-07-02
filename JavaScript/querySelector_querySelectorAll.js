/*
querySelector
- a newer, all-in-one method to select a single element
- pass in a css selector
- swiss army knife of dom selectors
- it replicates all the other selectors just pass in css style selectors
*/

//exercises
//selects a single item.
document.querySelector("h1") //<= finds first h1 element
const myH1 = document.querySelector("h1")
console.dir(myH1)

document.querySelector("li.special")
console.dir(document.querySelector("li.special")) //<=first li with class of special

document.querySelector("section ul li .special")
console.dir(document.querySelector("section ul li.special")) //<=specific here using css

document.querySelector("#red") //<= finds first element with id of red

document.querySelector(".big") //<= finds first element with class of big

//querySelectorAll is the exact same thing it just returns a collection of all the elements

//we get a node list which is another array like object very much like an HTML collection.
//its just another type of collection.

//Note querySelector is a little slower than the older more specific variants but its still the recommended method for the most part.
