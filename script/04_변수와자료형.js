
var str = "JS 코드는 함수가 아닌" 
        + "JS 파일 또는 script 태그 내부에 바로 작성하면"
        + "HTML 랜더링 시 바로 수행된다.";

console.log(str);

var num1 = 100; // 전역변수
num2 = 200; // 전역변수

console.log("num1 : " + num1);

console.log("num2 : " + num2);


function test() {
    var num3 = 300; // 지역변수
    num4 = 400; // 전역변수 
    console.log("함수 내부 num3 : " + num3);
    console.log("함수 내부 num4 : " + num4);

    if(true) {
        var num5 = 500;
        num6 = 600;


    }

    console.log("if 문 종료후 num5 : " + num5);
    console.log("if 문 종료후 num6 : " + num6);

}

test(); // 함수 호출

// console.log("함수 외부 num3 : " + num3);
// 함수 종료 후에는 사용불가 

// 스크립트 언어는 에러발생시 캄픔


// 
console.log("함수 외부 num4 : " + num4);
// 함수 종료 후에도 사용가능

console.log("함수 와부 num5 : " + num6);

// var 변수명 중복 확인

var num1 = 900;
console.log("var num1 중복 확인 : " + num1);

//자료형 확인(+변수선언방법)
function typeTest() {
    let temp1 =300;

    //let 이므로 변수명 중복 x

    if(true) {
        let temp2 = 200;
        const temp3 = 300;

    }
}

// console.log(temp1);

// console.log(temp2);

// console.log(temp3);


// 자료형 확인

const typeBox = document.getElementById("typeBox");
typeBox.innerHTML = "";

// typeBox.innerHTML = ""; 

// const name2; 상수는 초기화 필수

let name; // undefine

typeBox.innerHTML += "name : " + name + "/" + typeof name;
                    // name : undefined / undefiend

name = "홀길동";


typeBox.innerHTML += "name : " + name + "/" + typeof name;


// number
const age = 20;
const height = 178.9;

typeBox.innerHTML += "name : " + age + "/" + typeof age;

typeBox.innerHTML += "name : " + height + "/" + typeof height;

// boolean
const isTrue = true;
typeBox.innerHTML += "<br><br>istrue : " + height + "/" + typeof height;

//object


const fnsum =  function (n1, n2){
 return n1= n2;

}