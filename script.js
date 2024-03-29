let a = 0;
let o = null;
let b = null;
let result = document.querySelector("#result");
result.onclick(() => {
    result.innerHTML = "hllo"
})
function appendNumber(number) {
    if (typeof o == 'string') {
        b = b * 10 + number;
        result.innerHTML = a + o + b;
    } else {
        a = a * 10 + number;
        result.innerHTML = a;
    }
}

function appendOperator(op) {
    if (typeof o == 'string') {
        a = calculateResult();
        b = null
    }
    o = op;
    result.innerHTML = a + o;
}

function calculateResult() {
    if (o == null) return;

    switch (o) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '/':
            return a / b;

    }
}

function reset() {
    result.innerHTML = 0;
    a = 0;
    o = null;
    b = 0;
}

function backspace() {
    if (typeof a == 'number' && a !== 0) {
        a = a.toString().slice(0, -1);
        if (a.length === 0) {
            a = 0;
        }
        a = parseFloat(a);
        result.innerHTML = a;
    } else if (typeof b == 'number' && b !== 0) {
        b = b.toString().slice(0, -1);
        if (b.length === 0) {
            b = 0;
        }
        b = parseFloat(b);
        result.innerHTML = a + o;
    } else if (typeof o == 'string') {
        a = a.toString().slice(0, -1);
        if (a.length === 0) {
            a = 0;
        }
        a = parseFloat(a);
        result.innerHTML = a;
    }
}
