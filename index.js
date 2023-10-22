let first_card = 5
let second_card = 10

let sum = first_card + second_card + 7
let hasBlackjack = false
let isAlive = true
if(sum < 21){
    console.log("Do you want to draw another card?")
}else if(sum === 21){
    console.log("Wooho!, you've got Blackjack!")
    hasBlackjack = true
}else{
    console.log("You're out of the game")
    isAlive = false
}

console.log(hasBlackjack)
console.log(isAlive)