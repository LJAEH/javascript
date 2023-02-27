

let num1 = 0;
let num2 = 0;
const result = document.getElementById("result");

// 더하기


function fn1(num1, num2) {

        
    const input1 = document.getElementById("first");
    num1 = Number(input1.value);

    const input2 = document.getElementById("second");
    num2 = Number(input2.value);

    result.innerHTML = "계산결과 : "+ (num1+num2);
}
function fn2(num1, num2) {

        
    const input1 = document.getElementById("first");
    num1 = Number(input1.value);

    const input2 = document.getElementById("second");
    num2 = Number(input2.value);

    result.innerHTML = "계산결과 : "+ (num1-num2);
}
function fn3(num1, num2) {

        
    const input1 = document.getElementById("first");
    num1 = Number(input1.value);

    const input2 = document.getElementById("second");
    num2 = Number(input2.value);

    result.innerText = "계산결과 : "+ (num1+num2);
}
function fn3(num1, num2) {

        
    const input1 = document.getElementById("first");
    num1 = Number(input1.value);

    const input2 = document.getElementById("second");
    num2 = Number(input2.value);

    result.innerHTML = "계산결과 : "+ (num1*num2);
}
function fn4(num1, num2) {

        
    const input1 = document.getElementById("first");
    num1 = Number(input1.value);

    const input2 = document.getElementById("second");
    num2 = Number(input2.value);

    result.innerHTML = "계산결과 : " + (num1/num2);
}
function fn5(num1, num2) {

        
    const input1 = document.getElementById("first");
    num1 = Number(input1.value);

    const input2 = document.getElementById("second");
    num2 = Number(input2.value);

    result.innerHTML = "계산결과 : " + (num1%num2);
}


