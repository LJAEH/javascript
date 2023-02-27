const num1 = document.getElementById('first');
const num2 = document.getElementById('second');
const result = document.getElementById('result');

function calc(btn) {

    console.log(btn);

    const n1 = Number(num1.value);
    const n2 = Number(num2.value);

    const op = btn.innerText; // 클릭된 버튼에 작성된 내용을 얻어옴

    switch(op){
        case '+' : result.innerText = n1 + n2; break;
        case '-' : result.innerText = n1 - n2; break;
        case '*' : result.innerText = n1 * n2; break;
        case '/' : result.innerText = n1 / n2; break;
        case '%' : result.innerText = n1 % n2; break;

    }
}