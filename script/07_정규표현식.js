// 정규표현식 객체 생성 및 확인하기

document.getElementById("check1").addEventListener("click",function(){
    //정규표현식 객체 생성
    const regEx1 = new RegExp("script");
    // "script" 와 일치하는 문자열이 있는지 검사하는 정규식 객체

    const regEx2 = /java/;
    // "java"와 일치하는 문자열이 있는지 검사하는 정규식 객체

    const str1 = "저희는 지금 javascript를 공부하고 있습니다.";

    const str2 = "java, db, html, css, js를 사용 중 입니다."

    const str3 = "aaaaajava, java, java";

    // 확인하기
    console.log("regEx1.test(str1) : " + regEx1.test(str1));
    console.log("regEx1.exec(str1) : " + regEx1.exec(str1));
    console.log("regEx1.test(str2) : " + regEx1.test(str2));
    console.log("regEx1.exec(str2) : " + regEx1.exec(str2));
    console.log("regEx1.test(str3) : " + regEx1.test(str3));
    console.log("regEx1.exec(str3) : " + regEx1.exec(str3));

    console.log("regEx2.test(str1) : " + regEx2.test(str1));
    console.log("regEx2.exec(str1) : " + regEx2.exec(str1));
    console.log("regEx2.test(str2) : " + regEx2.test(str2));
    console.log("regEx2.exec(str2) : " + regEx2.exec(str2));
    console.log("regEx2.test(str3) : " + regEx2.test(str3));
    console.log("regEx2.exec(str3) : " + regEx2.exec(str3));


})

// 메타문자 확인하기

document.getElementById("check2").addEventListener("click",function(){

    const div1 = document.getElementById("div1");

    div1.innerHTML = "";

    const regEx1 = a
})

// 이름 유효성 검사
document.getElementById("inputName").addEventListener("keyup",function(){

    // 한글 2글자 이상 6글자 이하 문자열
    const regEx =/^[가-힣]{2,6}$/;
    
    const result1 = document.getElementById("result1");


    // 요소.classlist : 요소가 가지고 있는 클래스를 배열로 반환
    // 요소.classlist.remove("클래스명") : 요소의 특정 클래스 제거
    // 요소.classlist.add("클래스명") : 요소의 특정 클래스 추가
    // 요소.classlist.toggle("클래스명") : 클래스가 있으면 제거 없으면 추가

    if(regEx.test(this.value)) {
        result1.innerText = "유효한 형식입니다."

        result1.classList.add("confirm");
        result1.classList.remove("error");
        
    } else {
        result1.innerText = "잘못된 형식 입니다."

        result1.classList.add("error");
        result1.classList.remove("confirm");
    }
})