const cardArray = [
  {
    name: 'fries',
    img: 'images/fries.jpg',
  },
  {
    name: 'cheeseburger',
    img: 'images/cheeseburger.jpg',
  },
  {
    name: 'hotdog',
    img: 'images/hotdog.jpg',
  },
  {
    name: 'ice-cream',
    img: 'images/icecream.jpg',
  },
  {
    name: 'milkshake',
    img: 'images/milkshake.jpg',
  },
  {
    name: 'pizza',
    img: 'images/pizza.jpg',
  },
  {
    name: 'fries',
    img: 'images/fries.jpg',
  },
  {
    name: 'cheeseburger',
    img: 'images/cheeseburger.jpg',
  },
  {
    name: 'hotdog',
    img: 'images/hotdog.jpg',
  },
  {
    name: 'ice-cream',
    img: 'images/icecream.jpg',
  },
  {
    name: 'milkshake',
    img: 'images/milkshake.jpg',
  },
  {
    name: 'pizza',
    img: 'images/pizza.jpg',
  },
];

cardArray.sort(() => 0.5 - Math.random());
// console.log(cardArray);

const gridDisplay = document.querySelector('#grid');
const resultDisplay = document.querySelector('#result');
let cardChosen = [];
let cardsChosenIds = [];
const cardsWon = [];

function createBoard() {
  for (let i = 0; i < cardArray.length; i++) {
    const card = document.createElement('img');
    card.setAttribute('src', 'images/blank.jpeg');
    card.setAttribute('data-id', i);
    card.addEventListener('click', flipcard);
    gridDisplay.appendChild(card);
  }
}
createBoard();

function checkMatch() {
  const cards = document.querySelectorAll('img');
  const optionOneId = cardsChosenIds[0];
  const optionTwoId = cardsChosenIds[1];
  console.log(cards);
  console.log('Check for match!');
  if (optionOneId == optionTwoId) {
    cards[optionOneId].setAttribute('src', 'images/blank.jpg');
    cards[optionOneId].setAttribute('src', 'images/blank.jpg');

    alert('You have clikced the same image');
  }
  if (cardChosen[0] == cardChosen[1]) {
    alert('You found a match!');
    cards[optionOneId].setAttribute('src', 'images/white.jpg');
    cards[optionTwoId].setAttribute('src', 'images/white.jpg');
    cards[optionOneId].removeEventListener('click', flipcard);
    cards[optionTwoId].removeEventListener('click', flipcard);
    cardsWon.push(cardChosen);
  } else {
    cards[optionOneId].setAttribute('src', 'images/blank.jpg');
    cards[optionTwoId].setAttribute('src', 'images/white.jpg');
    alert('Sorry try again');
  }
  resultDisplay.textContent = cardsWon.length;
  cardChosen = [];
  cardsChosenIds = [];

  if (cardsWon.length == cardArray.length / 2) {
    resultDisplay.textContent = 'Congrats, You found them all';
  }
}

function flipcard() {
  const cardID = this.getAttribute('data-id');
  cardChosen.push(cardArray[cardID].name);
  cardsChosenIds.push(cardID);
  console.log(cardChosen);
  console.log(cardsChosenIds);
  this.setAttribute('src', cardArray[cardID].img);
  if (cardChosen.length === 2) {
    setTimeout(checkMatch, 500);
  }
}
