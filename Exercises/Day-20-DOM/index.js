// Exercise: Level 1

// Create an index.html file and put four p elements as above: Get the first paragraph by using document.querySelector(tagname) and tag name
const firstParagraph = document.querySelector('p');
console.log(firstParagraph);
// Get each of the the paragraph using document.querySelector('#id') and by their id
const secondParagraph = document.querySelector('#second');
// Get all the p as nodeList using document.querySelectorAll(tagname) and by their tag name
const paragraphs = document.querySelectorAll('p');
// Loop through the nodeList and get the text content of each paragraph
paragraphs.forEach(paragraph => {
    console.log(paragraph.textContent);
});
// Set a text content to paragraph the fourth paragraph,Fourth Paragraph
const fourthParagraph = document.querySelector('#fourth');
fourthParagraph.textContent = 'Fourth Paragraph';

// Set id and class attribute for all the paragraphs using different attribute setting methods
firstParagraph.id = 'first';
firstParagraph.className = 'paragraph';
secondParagraph.id = 'second';

// Exercise: Level 2
// Change stye of each paragraph using JavaScript(eg. color, background, border, font-size, font-family)
firstParagraph.style.color = 'red';
// Select all paragraphs and loop through each elements and give the first and third paragraph a color of green, and the second and the fourth paragraph a red color
paragraphs.forEach((paragraph, index) => {
    if (index % 2 == 0) {
        paragraph.style.color = 'green';
    } else {
        paragraph.style.color = 'red';
    }
});
// Set text content, id and class to each paragraph
paragraphs.forEach((paragraph, index) => {
    paragraph.textContent = `Paragraph ${index + 1}`;
    paragraph.id = `paragraph-${index + 1}`;
    paragraph.className = 'paragraph';
});

// Exercise: Level 3
// DOM: Mini project 1
// Develop the following application, use the following HTML elements to get started with. You will get the same code on starter folder. Apply all the styles and functionality using JavaScript only.
// The year color is changing every 1 second
const date = document.querySelector('h1');
setInterval(() => {
    date.style.color = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;

}, 1000);
// The date and time background color is changing every on seconds
setInterval(() => {
    date.style.backgroundColor = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;

}, 1000);

// Completed challenge has background green
const challenge = document.querySelector('ul');
challenge.style.backgroundColor = 'green';
// Ongoing challenge has background yellow
const ongoing = document.getElementById('1')
ongoing.style.backgroundColor = 'yellow';
// Coming challenges have background red
const coming = document.getElementById('2')
coming.style.backgroundColor = 'red';