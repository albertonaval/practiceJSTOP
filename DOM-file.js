const container = document.querySelector('#container');

const h3 = document.createElement('h3');
h3.classList.add('h3');
h3.style.cssText = 'color: blue;';
h3.textContent = 'Hey I am a blue';
container.appendChild(h3);

const paragraph = document.createElement('p');
paragraph.classList.add('paragraph');
paragraph.style.cssText = 'color: red;';
paragraph.textContent = 'Hey I am red';
container.appendChild(paragraph);

const div = document.createElement('div');
div.style.cssText = 'background-color: pink; border: solid 5px white;';
container.appendChild(div);

const h1Div = document.createElement('h1');
h1Div.style.cssText = 'color: white;';
h1Div.textContent = 'I am a white div';
div.appendChild(h1Div);

const paragraphDiv = document.createElement('p');
paragraphDiv.style.cssText = 'color: black;';
paragraphDiv.textContent = 'Mee too!!';
div.appendChild(paragraphDiv);







