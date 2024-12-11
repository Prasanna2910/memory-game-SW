const cardArray = [
  {
    name: 'fries',
    img: 'images/fries.jpg',
  },
  {
    name: 'cheeseburger',
    img: 'images/cheeseburger.webp',
  },
  {
    name: 'hotdog',
    img: 'images/hotdog.jpg',
  },
  {
    name: 'ice-cream',
    img: 'images/ice-cream.jpg',
  },
  {
    name: 'milkshake',
    img: 'images/milkshake.jpg',
  },
  {
    name: 'fries',
    img: 'images/fries.jpg',
  },
  {
    name: 'cheeseburger',
    img: 'images/cheeseburger.webp',
  },
  {
    name: 'hotdog',
    img: 'images/hotdog.jpg',
  },
  {
    name: 'ice-cream',
    img: 'images/ice-cream.jpg',
  },
  {
    name: 'milkshake',
    img: 'images/milkshake.jpg',
  },
];

cardArray.sort(() => 0.5 - Math.random());
// console.log(cardArray);

const gridDisplay = document.querySelector('#grid');

// console.log(gridDisplay);

function createBoard() {
  for (let i = 0; i < cardArray.length; i++) {
    const card = document.createElement('img');
    card.setAttribute('src', 'images/blank.jpeg');
    card.setAttribute('data-id', i);
    // console.log(card, i);
    gridDisplay.appendChild(card);
  }
}
createBoard();
