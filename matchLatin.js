const cards = document.querySelectorAll('.memory-card');

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;
let matchCounter = 0;
let clickCounter = 0;


function flipCard() {
  clickCounter ++;
  if (lockBoard) return;
  if (this === firstCard) return;

  this.classList.add('flip');

  if (!hasFlippedCard) {
    hasFlippedCard = true;
    firstCard = this;

    return;
  }

  secondCard = this;
  checkForMatch();
}

function checkForMatch() {
  let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;
  if(firstCard.dataset.framework === secondCard.dataset.framework) 
  if(firstCard.dataset.framework === secondCard.dataset.framework) matchCounter++;
  if (matchCounter == 9) {
    
  document.getElementById("clickCount").innerHTML = clickCounter;
  
  gsap.to("#win", {display:'flex'});
  gsap.from("#win", {delay: 0.5, duration: 1, alpha: 0, x: -500, ease: "power4.out"});
}

  isMatch ? disableCards() : unflipCards(); 
}

function disableCards() {
  firstCard.removeEventListener('click', flipCard);
  secondCard.removeEventListener('click', flipCard);
  
  let frontOneA = document.getElementById("front1a").classList;
  let frontOneB = document.getElementById("front1b").classList;
  let frontTwoA = document.getElementById("front2a").classList;
  let frontTwoB = document.getElementById("front2b").classList;
  let frontThreeA = document.getElementById("front3a").classList;
  let frontThreeB = document.getElementById("front3b").classList;  
  let frontFourA = document.getElementById("front4a").classList;
  let frontFourB = document.getElementById("front4b").classList;
  let frontFiveA = document.getElementById("front5a").classList;
  let frontFiveB = document.getElementById("front5b").classList;
  let frontSevenA = document.getElementById("front7a").classList;
  let frontSevenB = document.getElementById("front7b").classList;
  let frontSixA = document.getElementById("front6a").classList;
  let frontSixB = document.getElementById("front6b").classList;
  let frontEightA = document.getElementById("front8a").classList;
  let frontEightB = document.getElementById("front8b").classList;
  let frontNineA = document.getElementById("front9a").classList;
  let frontNineB = document.getElementById("front9b").classList;
  
  
  if(firstCard.dataset.framework == "one") frontOneA.add("newStyleOne");
  if(secondCard.dataset.framework == "one") frontOneB.add("newStyleOne");

  if(firstCard.dataset.framework == "two") frontTwoA.add("newStyleTwo");
  if(secondCard.dataset.framework == "two") frontTwoB.add("newStyleTwo");
  
  if(firstCard.dataset.framework == "three") frontThreeA.add("newStyleThree");
  if(secondCard.dataset.framework == "three") frontThreeB.add("newStyleThree");

  if(firstCard.dataset.framework == "four") frontFourA.add("newStyleFour");
  if(secondCard.dataset.framework == "four") frontFourB.add("newStyleFour");
  
  if(firstCard.dataset.framework == "five") frontFiveA.add("newStyleFive");
  if(secondCard.dataset.framework == "five") frontFiveB.add("newStyleFive");
  
  if(firstCard.dataset.framework == "six") frontSixA.add("newStyleSix");
  if(secondCard.dataset.framework == "six") frontSixB.add("newStyleSix");
  
  if(firstCard.dataset.framework == "seven") frontSevenA.add("newStyleSeven");
  if(secondCard.dataset.framework == "seven") frontSevenB.add("newStyleSeven");
  
  if(firstCard.dataset.framework == "eight") frontEightA.add("newStyleEight");
  if(secondCard.dataset.framework == "eight") frontEightB.add("newStyleEight");
  
  if(firstCard.dataset.framework == "nine") frontNineA.add("newStyleNine");
  if(secondCard.dataset.framework == "nine") frontNineB.add("newStyleNine");
  
  resetBoard();
}

function unflipCards() {
  lockBoard = true;

  setTimeout(() => {
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');
 
    resetBoard();
  }, 1500);
}

function resetBoard() {
  [hasFlippedCard, lockBoard] = [false, false];
  [firstCard, secondCard] = [null, null];
}

(function shuffle() {
  cards.forEach(card => {
    let randomPos = Math.floor(Math.random() * 12);
    card.style.order = randomPos;
  });
})();

cards.forEach(card => card.addEventListener('click', flipCard));


/* intro shuffle tween in all cards */

document.addEventListener("DOMContentLoaded", function(event) {
  
  // wait until images, links, fonts, stylesheets, scripts, and other media assets are loaded
  
  window.addEventListener("load", function() {
    
//Start of tweening Code
gsap.set(".memory-game", {visibility:"visible"});
gsap.from(".back-face", {scale: 0, alpha: 0, duration: 1.5, ease: "power4.out"});
 
//End of tweening Code
    
  }, false);
  
});

