// Access elements by ID

const heading = document.getElementById('heading');
console.log(heading);

// access elements by class

const text = document.getElementsByClassName('text');
console.log(text)

//access elements by tag  name

const paragraphs =document.getElementsByTagName('p');
console.log(paragraphs);

//access elements by query selector

const heading2=document.querySelector('#heading');

console.log(heading2);

//access elements by query selector
const listItems = document.querySelectorAll('#list li');
console.log(listItems)

//modifying element content using textContent
const firstParagraph=text[0];
firstParagraph.textContent='This is an updated paragraph';

//modifying element using setAttribute
const listItem=listItems[0];
listItem.setAttribute('class', 'highlight');

//modiying element styles using style property

const button=document.querySelector('#btn');
button.style.backgroundColor='blue';
button.style.color='white';

//creating new elements dynamically
const newParagraph= document.createElement('p');
newParagraph.textContent='This is the new paragraph dynamically';
const container =document.querySelector('.container');
container.appendChild(newParagraph);

//removing elements dynamically

const secondListItem = listItems[1];
secondListItem.remove();