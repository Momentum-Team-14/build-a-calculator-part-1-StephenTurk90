console.log("hello")

let zeroButton = document.querySelector('.number0');
let oneButton = document.querySelector('.number1');
let twoButton = document.querySelector('.number2');
let threeButton = document.querySelector('.number3');
let fourButton = document.querySelector('.number4');
let fiveButton = document.querySelector('.number5');
let sixButton = document.querySelector('.number6');
let sevenButton = document.querySelector('.number7');
let eightButton = document.querySelector('.number8');
let nineButton = document.querySelector('.number9');
let divideKey = document.querySelector('.divi');
let multiplyKey = document.querySelector('.multi');
let minusKey = document.querySelector('.minus');
let addKey = document.querySelector('.addition');
let decimalButton = document.querySelector('.decimal');
let equalKey = document.querySelector('.key-equal');
let clearKey = document.querySelector('.clearKey');

// number buttons 0-9, operator keys

let display = document.querySelector(".calculator-display");
let buttons = document.querySelectorAll(".button");
let answerCompute = document.querySelector(".key-equal");

// this code allows me to add or substract

zeroButton.addEventListener('click', function() {
    console.log('0')
})
// 0 button console log

oneButton.addEventListener('click', function() {
    console.log('1')
})
// 1 button console log

twoButton.addEventListener('click', function() {
    console.log('2')
})
// 2 button console log

threeButton.addEventListener('click', function() {
    console.log('3')
})
// 3 button console log

fourButton.addEventListener('click', function() {
    console.log('4')
})
// 4 button console log

fiveButton.addEventListener('click', function() {
    console.log('5')
})
// 5 button console log

sixButton.addEventListener('click', function() {
    console.log('6')
})
// 6 button console log

sevenButton.addEventListener('click', function() {
    console.log('7')
})
// 7 button console log

eightButton.addEventListener('click', function() {
    console.log('8')
})
// 8 button console log

nineButton.addEventListener('click', function(){
    console.log('9')
})
// 9 button console log

divideKey.addEventListener('click', function(){
    console.log('/')
})
// division key console log

multiplyKey.addEventListener('click', function(){
    console.log('*')
})
// multiplay key console log

minusKey.addEventListener('click', function(){
    console.log('-')
})
// subtraction key console log

addKey.addEventListener('click', function(){
    console.log('+')
})
// addition key console log

// not there is no equal key console log, having it as console log this makes the calculator stop working

clearKey.addEventListener('click', function(){
    console.log('clear')
})
// clear key console log

for (let button of buttons) {
    button.addEventListener ("click", () => {
        display.innerText += button.innerText
    })
}

clearKey.addEventListener ('click',  () => {
    display.innerText = ""
})

// this makes the calculator clear button work

answerCompute.addEventListener ('click', function() {
    console.log(display.innerText)
    display.innerText = eval[display.innerText]
  })

// this makes the calculator work for adding and subtracting numbers