/**
 * by @xennia316
 */

const range = 1000;

//prompt the number and use subsequently
const number = prompt('Enter a positive integer.');

//Official function
function fib(number) {
    if (range === 0 || range === 1)
        return true;

    let prev = 0;
    let cur = 1;
    let next;

    //Looping through the fibonacci sequence a thousand times
    for (let i = 1; i <= range; i++) {
        next = prev + cur;
        prev = cur;
        cur = next;
        //if the next number meets the entered number then return true else return false
        if (next === number)
            return true;
    }
    return false;
}
console.log(fib(number));
