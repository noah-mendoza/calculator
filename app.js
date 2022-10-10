const buttonNum = document.querySelectorAll('.n')
const display = document.querySelector('.display')
const buttonOperator = document.querySelectorAll('.o')
const clear = document.querySelector('.clear')

display.textContent = "0";

let operator = ""
let first = ""
let next = ""
let firstTime = true;
let arr = []
let isNumNew = false

clear.addEventListener('click', () => {
    display.textContent = "0"
    first = ""
    next = ""
})

buttonNum.forEach((div) => {
    div.addEventListener('click', () => {
        arr.push(div.textContent)
        console.log(arr)
        let holder = arr.join("")
        display.textContent = holder;
        isNumNew = true
    }
    )
})

buttonOperator.forEach((divs) => {
    divs.addEventListener('click', () => {
        arr = []
        if (divs.textContent === "+" & firstTime) {
            first = display.textContent;
            operator = "plus"
            firstTime = false
            isNumNew = false
        }
        else if (divs.textContent === "-" & firstTime) {
            first = display.textContent;
            operator = "minus"
            firstTime = false
            isNumNew = false
        } 
        else if (divs.textContent === "/" & firstTime) {
            first = display.textContent;
            operator = "divide"
            firstTime = false
            isNumNew = false
        }
        else if (divs.textContent === "X" & firstTime) {
            first = display.textContent;
            operator = "multiply"
            firstTime = false
            isNumNew = false
        }
        else if (divs.textContent === "+" & firstTime === false & 
        isNumNew) {
            if (operator === "plus") {
                next = display.textContent
                display.textContent = (parseFloat(first) + parseFloat(next))
                first = display.textContent
            }
            else if (operator === "minus") {
                next = display.textContent
                display.textContent = (parseFloat(first) - parseFloat(next))
                first = display.textContent
            }
            else if (operator === "divide") {
                next = display.textContent
                display.textContent = (parseFloat(first) / parseFloat(next))
                first = display.textContent
            }
            else if (operator === "multiply") {
                next = display.textContent
                display.textContent = (parseFloat(first) * parseFloat(next))
                first = display.textContent
            }
            operator = "plus"
        }
        else if (divs.textContent === "-" & firstTime === false & 
        isNumNew) {
            if (operator === "plus") {
                next = display.textContent
                display.textContent = (parseFloat(first) + parseFloat(next))
                first = display.textContent
            }
            else if (operator === "minus") {
                next = display.textContent
                display.textContent = (parseFloat(first) - parseFloat(next))
                first = display.textContent
            }
            else if (operator === "divide") {
                next = display.textContent
                display.textContent = (parseFloat(first) / parseFloat(next))
                first = display.textContent
            }
            else if (operator === "multiply") {
                next = display.textContent
                display.textContent = (parseFloat(first) * parseFloat(next))
                first = display.textContent
            }
            operator = "minus"
        }
        else if (divs.textContent === "/" & firstTime === false & 
        isNumNew) {
            if (operator === "plus") {
                next = display.textContent
                display.textContent = (parseFloat(first) + parseFloat(next))
                first = display.textContent
            }
            else if (operator === "minus") {
                next = display.textContent
                display.textContent = (parseFloat(first) - parseFloat(next))
                first = display.textContent
            }
            else if (operator === "divide") {
                next = display.textContent
                display.textContent = (parseFloat(first) / parseFloat(next))
                first = display.textContent
            }
            else if (operator === "multiply") {
                next = display.textContent
                display.textContent = (parseFloat(first) * parseFloat(next))
                first = display.textContent
            }
            operator = "divide"
        }
        else if (divs.textContent === "X" & firstTime === false & 
        isNumNew) {
            if (operator === "plus") {
                next = display.textContent
                display.textContent = (parseFloat(first) + parseFloat(next))
                first = display.textContent
            }
            else if (operator === "minus") {
                next = display.textContent
                display.textContent = (parseFloat(first) - parseFloat(next))
                first = display.textContent
            }
            else if (operator === "divide") {
                next = display.textContent
                display.textContent = (parseFloat(first) / parseFloat(next))
                first = display.textContent
            }
            else if (operator === "multiply") {
                next = display.textContent
                display.textContent = (parseFloat(first) * parseFloat(next))
                first = display.textContent
            }
            operator = "multiply"
        }
        else if (divs.textContent === "=" & isNumNew) {
            if (operator === "plus") {
                next = display.textContent;
                display.textContent = (parseFloat(first) + parseFloat(next))
                first = display.textContent
            }
            else if (operator === "minus") {
                next = display.textContent;
                display.textContent = (parseFloat(first) - parseFloat(next))
                first = display.textContent
            }
            else if (operator === "divide") {
                next = display.textContent;
                display.textContent = (parseFloat(first) / parseFloat(next))
                first = display.textContent
            }
            else if (operator === "multiply") {
                next = display.textContent;
                display.textContent = (parseFloat(first) * parseFloat(next))
                first = display.textContent
            }
            firstTime = true;
        }
    })
})

