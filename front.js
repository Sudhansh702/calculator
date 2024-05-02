function useOp(x, o, y) {
    let a = x - 0
    let b = y - 0
    switch (o) {
        case '+':
            return a + b
        case '-':
            return a - b
        case '*':
            return a * b
        case '/':
            return a / b
        default:
            break;
    }
}
function calcEquation(arr) {
    for (let i = 0; i < arr.length; i++) {
        if ((arr[i] == '+') || (arr[i] == '-') || (arr[i] == '*') || (arr[i] == '/')) {

            let n = i - 1;
            while (n >= 0 && arr[n] == -1) {
                n--;
            }
            let y = arr[n]
            arr[n] = -1
            while (n >= 0 && arr[n] == -1) {
                n--;
            }
            let x = arr[n]
            arr[n] = -1
            arr[i] = useOp(x, arr[i], y)
        }
    }
    return arr[arr.length - 1]
}
// 08:20 
let yt  = ['', '34', '4', '+', '12', '3', '*', '12', '', '/', '+']
console.log(calcEquation(yt))

function infixToPostfix(infixExpression) {
    // Stack for operators
    const operatorStack = [];
    // Output array to store postfix expression
    const postfixExpression = [];
    // Operator precedence map
    const precedence = {
      '+': 1,
      '-': 1,
      '*': 2,
      '/': 2,
    };
  
    // Split the infix expression by operands (numbers) - Modified regular expression
    const tokens = infixExpression.split(/\d+/);
  
    // Custom peek function to get the top element without removing it
    function peek(stack) {
      return stack[stack.length - 1];
    }
  
    for (const token of tokens) {
      // Handle operands (numbers)
      if (!isNaN(token)) {
        postfixExpression.push(token);
      } else if (token === '(') {
        // Push opening parenthesis to the stack
        operatorStack.push(token);
      } else if (token === ')') {
        // Pop operators from the stack until encountering an opening parenthesis
        while (operatorStack.length > 0 && peek(operatorStack) !== '(') {
          postfixExpression.push(operatorStack.pop());
        }
        // Pop the opening parenthesis (discard)
        operatorStack.pop();
      } else { // Operator token
        // While the stack is not empty and the top operator has higher or equal precedence
        while (operatorStack.length > 0 && precedence[peek(operatorStack)] >= precedence[token]) {
          postfixExpression.push(operatorStack.pop());
        }
        // Push the current operator to the stack
        operatorStack.push(token);
      }
    }
  
    // Pop remaining operators from the stack
    while (operatorStack.length > 0) {
      postfixExpression.push(operatorStack.pop());
    }
  
    return postfixExpression;
  }
  
  // Example usage
  const infixExpression = "34+4+12*3/12";
  const postfixArray = infixToPostfix(infixExpression);
  
  console.log(postfixArray); // Output: ["34", "+", "4", "+", "12", "*", "3", "/"] (no empty strings)
  
  // You can add your calcEquation function here (assuming it takes a postfix array as input)
  
// console.log(`Postfix expression: ${postfixArray.join(' ')}`); // Output: 1 2 3 4 * 5 / +







function calculateResult() {
    exp = calcEquation(infixToPostfix(exp))
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