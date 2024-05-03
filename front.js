function calculateResult() {
    exp = eval(exp)
    result.innerHTML = exp
}
let result = document.getElementById("result")
result.innerHTML = "0"
let exp = ""
function append(n) {
    if (exp.length == 0 && /[0-9]/.test(n)) {
        exp += n
    } else {
        if (/[0-9]/.test(n)) {
            exp += n
        } else {
            let temp = exp.charAt(exp.length - 1)
            if (/[0-9]/.test(temp)) {
                exp += n
            } else {
                exp = exp.slice(0, exp.length - 1)
                exp += n
            }
        }
    }
    result.innerText = exp
}
function backspace() {
    if (exp.length <= 1) {
        reset()
        return
    }
    exp = exp.slice(0, -1);
    result.innerText = exp;
}
function reset() {
    result.innerText = "0"
    exp = ""
}
const buttons = document.querySelectorAll('.button');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.innerText;

        if (/\d/.test(value)) {
            append(value);
        } else if (value === 'C') {
            reset();
        } else if (value === '←') {
            backspace();
        } else if (value === '=') {
            calculateResult();
        } else {
            append(value);
        }
    });
});