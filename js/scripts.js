// 1: Set the text of the <h1> element

var h1 = document.querySelector('h1').innerHTML = "This is h1 exercicse";




// 2: Set the color of the <h1> to a different color

h1 = document.querySelector('h1').style.color = "blue";

// 3: Set the content of the '.desc' paragraph
// The content should include at least one HTML tag
const paragraph = document.querySelector('.desc');
paragraph.innerHTML = "My Paragraph in <strong>JavaScript</strong> exercise for fun";

// 4: Set the class of the <ul> to 'list'
const ul = document.querySelector('ul');
ul.className = "list";

// 5: Create a new list item and add it to the <ul>
var myList = document.querySelector('ul.list');
let newListIthem = document.createElement('li');

newListIthem.textContent = "Vladimir Putin";

myList.appendChild(newListIthem);

 

// 6: Change all <input> elements from text fields to checkboxn//
var six = document.querySelector('input')




// 7: Create a <button> element, and set its text to 'Delete'
// Add the <button> inside the '.extra' <div>


// 8: Remove the '.extra' <div> element from the DOM when a user clicks the 'Delete' button
