// ***********************************
// Two ways NOT to add event handlers
// ***********************************

// **********************************
// Inline - take a look at index.html
// **********************************
// Check out index.html to see an example

// **********************************
// Via JS - setting the onclick property
// **********************************

// Select an element:
const btn = document.querySelector('#clicker');

// Set the onclick property to a function:

// You can use an existing function: (not that common)
// btn.onclick = greet; 

// Or use an anonymous function (more common)
btn.onclick = () => {
  console.log('YOU CLICKED ME UGHHHH!!');
}

function greet() {
  alert('HEY BUDDY!')
}


//  the thing        the event type        what our code does 
//  (button)          (click)               (change color)
//  (input)           (hits return)         (clear input, get search results)
//  (image)           (mouseover)           (display image caption or view in b&w )
