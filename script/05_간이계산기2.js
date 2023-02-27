const num1 = document.getElementById('first');
const num2 = document.getElementById('second');
const result = document.getElementById('result');

function calc(op) {
    switch(op){
        case '+' : result.innerText = n1 + num; break;
        case '-' : result.innerText = n1 - num; break;
        case '*' : result.innerText = n1 * num; break;
        case '/' : result.innerText = n1 / num; break;
        case '%' : result.innerText = n1 % num; break;
    }
}