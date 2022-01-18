let cards = [];
let sum = 0;
let hasBlackjack = false;
let isAlive = false;
let message = "";
let messageEl = document.querySelector("#message-el");
let sumEl = document.querySelector("#sum-el");
let cardsEl = document.querySelector("#cards-el");

// creating player object
let player = {
    name: "Jugador",
    chips: 200
}

let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips

function startGame() {
    isAlive = true;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;
    renderGame()
}

function renderGame() {
    cardsEl.textContent = "Cards: "

    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }

    if  (sum <= 20) {
        messageEl.textContent = "Draw new card?";
    } else if (sum === 21) {
        hasBlackjack = true;
        messageEl.textContent = "Blackjack!";
    } else {
        isAlive = false;
        messageEl.textContent = "You are out!";
    }
    sumEl.textContent = "Sum: " + sum
}

function newCard() {
    if(isAlive && hasBlackjack === false) {
    let newCard = getRandomCard();
    sum += newCard;
    cards.push(newCard)
    renderGame();
    }
}

function getRandomCard() {
    let randomCard = Math.floor(Math.random() * 13) + 1;
    if (randomCard > 10) {
        return 10
    }
    if (randomCard === 1) {
        return 11;
    }

    return randomCard
}