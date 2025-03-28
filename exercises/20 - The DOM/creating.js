


const pic = document.querySelector('.nice');

pic.classList.add('open');
pic.classList.remove('open');
pic.classList.toggle('round');
console.log(pic.classList);

pic.alt = 'Cute Pup'; // setter 🐕
pic.setAttribute('alt', 'Cute Pup');
pic.width = 200;
console.log(pic.alt);  // getter 😸

// window.addEventListener('load', function() {
//     console.log(pic.naturalWidth);  
// } );

pic.width = 200;

console.log(pic.getAttribute('alt'));  // getter 😸

// William Woolf

// const p = document.querySelector('p');
// const d =document.querySelectorAll('d')
// const divs = document.querySelectorAll('div');
// const item2 = document.querySelector('.item2');
// const item2image = item2.querySelector('img');
// // console.log(p);


// // NodeList a list of things, no methods buuilt into it, so not an array

// const heading = document.querySelector('h2');

// console.log(heading.textContent);

// heading.textContent = 'wes is cool'

// console.log(heading.textContent);


// The DOM - build in and custom 
// attributes anything provided to an elementn as additional info
// Classes source alt-attribute 
// work exacley like properties
// custom and data attributes






// const pizzaList = document.querySelector('.pizza');

// pizzaList.textContent = `${pizzaList.textContent} 🍕`;

// pizzaList.insertAdjacentText('afterbegin', '🍕');

// // pizzaList.insertAdjacentText('bedoreend', '🍕');






























