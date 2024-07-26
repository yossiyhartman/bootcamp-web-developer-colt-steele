
let guesses = 0;
const range = parseInt(prompt('What range would you like to set?: 10, 100, 1000 ...'))
const target = Math.floor(Math.random() * (range + 1));


while(true){
    let user_input = prompt('Make a guess ..').toLocaleLowerCase();

    if (user_input == 'q') {
        console.log('Too bad!')
        break;
    }

    guesses++;

    if (user_input == target) {
        console.log('Got it!')
        break;
    } else if (user_input < target) {
        console.log('Too low!')
    } else if (user_input > target) {
        console.log('Too High!')
    }

    
}

console.log(`You have done ${guesses} guesses!`)