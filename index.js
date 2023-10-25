let first_card = 5
let second_card = 10

let sum = first_card + second_card
let hasBlackjack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById("message-el")

function startGame(){
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

