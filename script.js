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
let divideKey = document.querySelector('.divide');
let multiplyKey = document.querySelector('.multiply');
let minusKey = document.querySelector('.minus');
let addKey = document.querySelector('.addition');
let decimalButton = document.querySelector('.decimal');
let equalKey = document.querySelector('.key-equal');
let decimalKey = document.querySelector('.decimal');
let clearKey = document.querySelector('.clearKey');

// 

let display = document.querySelector(".calculator-display");
let buttons = document.querySelectorAll(".button");
let answerCompute = document.querySelectorAll(".key-equal");

// number buttons 0-9, operator keys

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

equalKey.addEventListener('click', function(){
    console.log('=');
    answerCompute()
})
// equal key console log

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

answerCompute.addEventListener ('click', function() {
    display.innerText = eval(display.innerText)
  })
