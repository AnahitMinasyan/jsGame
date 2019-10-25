const game_cards = document.querySelectorAll('.game-card');
let cardOne, cardTwo ;
let invertedCard = false;
let lockedCard = false;


const invertCard = (e) => {
    if (lockedCard) {
        return;
    }
    const target = e.target.parentElement;

    if (target === cardOne) {
        return;
    }
    target.classList.add("invert");

     if (!invertedCard) {
         invertedCard = true;
         cardOne = target;
     }else {
         invertedCard = false;
         cardTwo = target;

         checkForMatch();
     }
}

const checkForMatch = () => {
    if (cardOne.dataset.id === cardTwo.dataset.id) {
        disableCards();
    }else {
        noRotateCards();
    }
}

const disableCards = () => {
    cardOne.removeEventListener('click', invertCard);
    cardTwo.removeEventListener('click', invertCard);

};

const noRotateCards = () => {
    lockedCard = true;
    setTimeout(() => {
        cardOne.classList.remove('invert');
        cardTwo.classList.remove('invert');

        resetCards();
    }, 500 )
}

const resetCards = () => {
    
    invertedCard = false;
    lockedCard = false;
    cardOne = false;
     cardTwo = false;
}


game_cards.forEach(gCard => {
    gCard.addEventListener('click', invertCard);

    const random  = Math.floor(Math.random() * game_cards.length);
    gCard.style.order = random;
});