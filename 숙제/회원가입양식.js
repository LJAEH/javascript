var count = 0;


const regId = /^([a-z0-9]){5,}$/;
document.getElementById("id").addEventListener("keyup",function(){

    const idResult = document.getElementById("idResult");

    if(regId.test(this.value)){
        idResult.innerText = "아이디 사용 가능";
        idResult.style.color = "green";
        count++;
    } else {
        idResult.innerText = "아이디 사용 불가능";
        idResult.style.color = "red";
    }
})

document.getElementById("pw1").addEventListener("keyup",function(){

    const regPw = /^(?=.*?[a-zA-Z])(?=.*?[0-9])(?=.*?[!@#$%^&*()_+]).{8,}$/;
    // const pw2 = document.getElementById("pw2").addEventListener("keyup");
    const pwResult = document.getElementById("pwResult");

    if(regPw.test(this.value)){
        pwResult.innerText = "사용가능";
        pwResult.style.color = "green";
        count++;
    } else {
        pwResult.innerText = "잘못된 입력입니다.";
        pwResult.style.color = "red";
    }
})

document.getElementById("name").addEventListener("keyup",function(){
    
    const regName = /^[가-힣]{2,}$/;
    const nameResult = document.getElementById("nameResult");

    if(regName.test(this.value)){
        count++;
    } else {
        nameResult.innerText = "잘못된 입력입니다.";
        nameResult.style.color = "red";
    }
})

const regPhone = /^\010([0-9]){8}$/;
document.getElementById("phone").addEventListener("keyup",function(){
    
    const phoneResult = document.getElementById("phoneResult");

    if(regPhone.test(this.value)){
        count++;
    } else {
        phoneResult.innerText = "잘못된 입력입니다.";
        phoneResult.style.color = "red";
    }
})

document.getElementById("pN1").addEventListener("keyup",function(){

    const regPn1 = /^[0-9]{6}$/;
    if(regPn1.test(this.value)){
        count++;
    }

})


document.getElementById("pN2").addEventListener("keyup",function(){

    const regPn2 = /^[1234]{1}[0-9]{6}$/;

    if(regPn2.test(this.value)){
        count++;
    } else {
        pnResult.innerText = "잘못된 입력입니다.";
        pnResult.style.color = "red";
    }
})

document.getElementById("email").addEventListener("keyup",function(){
    const regEmail =/^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-])$/;

    if(regEmail.test(this.value)){
        emailResult.innerText = "사용가능";
        emailResult.style.color = "green";
        count++;
    } else {
        emailResult.innerText = "잘못된 입력입니다.";
        emailResult.style.color = "red";
    }

})