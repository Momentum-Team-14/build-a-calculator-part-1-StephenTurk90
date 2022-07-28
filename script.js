const calculator = document.querySelector('.calculator')
const keys = calculator.querySelector('.calculator-keys')
const action = keys.dataset.action

keys.addEventListener('click', function(){
    if (keys.matches('button')) {
        // Do something
        if(!action) {
            console.log('number key!')
        }

        if (
            action === "add "||
            action === "substract" ||
            action === "multiply" ||
            action === "divide"
        ) {
            console.log('operator key!')
        }

        if (action === 'decimal') {
            console.log('decimal key!')
        }

        if (action === 'clear') {
            console.log('clear key!')
        }

        if (action === 'calculate') {
            console.log('equal key!')
        }
    }
}
)  