let maximum = parseInt(prompt("Enter a maximum number: "))

while (!maximum){
    maximum = parseInt(prompt("Enter a valid number: "))
}
let res = parseInt(Math.floor(((Math.random()) * maximum)))
console.log(res)
let counter = 1
let guess = parseInt(prompt("Enter your guess: "))

while (parseInt(guess) !== res && guess !== "q"){
    if (guess > res){
        guess = prompt("Too high, guess again: ")
        counter++
    } else if (guess < res){
        guess = prompt("Too low, guess again: ")
        counter++
    }
    
}

if (parseInt(guess) === res){
    alert(`You win!!!! It took you ${counter} guesses.`)

} 
else {
    alert(`You have exited the game successfully. You took ${counter} guesses.`)

}