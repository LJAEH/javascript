const num1 = document.getElementById('first');
const num2 = document.getElementById('second');
const result = document.getElementById('result');

function calc(btn) {

    console.log(btn);

    const n1 = Number(num1.value);
    const n2 = Number(num2.value);

    const op = btn.innerText; // 클릭된 버튼에 작성된 내용을 얻어옴

    // eval("코드 형식의 문자열")
    // => 매개변수의 문자열을 JS 코드로 해석/수행하는 함수
    // => 속도 느림 + 보안 이슈로 인해 사용 지양(XXXXXXXXXXXXXXXXXX)

    // result.innerText = eval(n1 + op +n2);

    // new function() 사용

    result.innerText = new Function("return " + n1 + op + n2)();
}