let cards = []
let sum = 0
let hasBlackjack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

function startGame(){
    isAlive = true
    firstCard = randomCard()
    secondCard = randomCard()
    cards= [firstCard,secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function renderGame(){
    cardsEl.textContent = "Cards: "
    for(let i=0; i<cards.length; i++){
    cardsEl.textContent += cards[i] +" "
    }
    sumEl.textContent = "Sum: "+sum
    if(sum < 21){
        // console.log("Do you want to draw another card?")
        message = "Do you want to draw another card?"
    }else if(sum === 21){
        // console.log("Wooho!, you've got Blackjack!")
        hasBlackjack = true
        message = "Wooho!, you've got Blackjack!"
    }else{
        // console.log("You're out of the game")
        isAlive = false
        message = "You're out of the game"
    }

    messageEl.textContent = message
}

function newCard(){
   if(isAlive === true && hasBlackjack ===false){
    let card = randomCard()
    sum += card
    cards.push(card)
    renderGame()
    }
}

function randomCard(){
    let number = Math.floor( Math.random()*13 ) + 1
    if (number === 1)
        return 11
    else if(number > 10)
        return 10
    else
        return number 
}

