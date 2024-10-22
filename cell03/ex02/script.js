document.getElementById('calculateButton').addEventListener('click', () => {
    const leftOperand = parseInt(document.getElementById('leftOperand').value);
    const rightOperand = parseInt(document.getElementById('rightOperand').value);
    const operator = document.getElementById('operator').value;

    // Input validation
    if (isNaN(leftOperand) || isNaN(rightOperand) || leftOperand < 0 || rightOperand < 0) {
        alert('Error :(');
        return;
    }

    let result;
    switch (operator) {
        case '+':
            result = leftOperand + rightOperand;
            break;
        case '-':
            result = leftOperand - rightOperand;
            break;
        case '*':
            result = leftOperand * rightOperand;
            break;
        case '/':
            if (rightOperand === 0) {
                alert("It's over 9000!");
                return;
            }
            result = leftOperand / rightOperand;
            break;
        case '%':
            if (rightOperand === 0) {
                alert("It's over 9000!");
                return;
            }
            result = leftOperand % rightOperand;
            break;
        default:
            alert('Error :(');
            return;
    }

    console.log(result);
    alert(result);
});

// Alert every 30 seconds
setInterval(() => {
    alert('Please, use me...');
}, 30000);

