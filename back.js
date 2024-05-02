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



function precedence(ch) {
    switch (ch) {
      case '+':
      case '-':
        return 1;
      case '*':
      case '/':
        return 2;
      case '^':
        return 3;
    }
    return -1;
  }
  
  function infixToPostfix(exp) {
    let result = "";
    const stack = [];
  
    for (let i = 0; i < exp.length; i++) {
      const c = exp.charAt(i);
  
      if (/[a-zA-Z0-9]/.test(c)) {
        // Operand
        result += c;
      } else if (c === '(') {
        stack.push(c);
      } else if (c === ')') {
        while (stack.length > 0 && stack[stack.length - 1] !== '(') {
          result += stack.pop();
        }
        stack.pop(); // Remove the '('
      } else {
        while (stack.length > 0 && precedence(c) <= precedence(stack[stack.length - 1])) {
          result += stack.pop();
        }
        stack.push(c);
      }
    }
  
    while (stack.length > 0) {
      result += stack.pop();
    }
  
    return result;
  }
  
  // Example usage
  const expression = "a+b*(c^d-e)";
  const postfix = infixToPostfix(expression);
  console.log("Infix:", expression);
  console.log("Postfix:", postfix);
  