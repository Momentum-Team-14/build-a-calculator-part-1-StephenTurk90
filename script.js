console.log("hello")

let oneButton = document.querySelector('.number1');

oneButton.addEventListener('click', function() {
    console.log('1')
})



let sevenButton = document.querySelector('.number7');

sevenButton.addEventListener('click', function() {
    console.log('7')
})



// var calculator = document.querySelector('.calculator')
// var keys = calculator.querySelector('.calculator-keys')
// var action = keys.dataset.action

// keys.addEventListener('click', function(){
//     if (keys.matches('button')) {
//         // Do something
//         if(action) {
//             console.log('number key!')
//         }

//         if (
//             action === "add "||
//             action === "substract" ||
//             action === "multiply" ||
//             action === "divide"
//         ) {
//             console.log('operator key!')
//         }

//         if (action === 'decimal') {
//             console.log('decimal key!')
//         }

//         if (action === 'clear') {
//             console.log('clear key!')
//         }

//         if (action === 'calculate') {
//             console.log('equal key!')
//         }
//     }
// }
// )  