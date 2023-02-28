// 객체 생성1

document.getElementById("btn1").addEventListener("click",function(){
    // {}객체 생성 밒 다루기

    // ** 중요 **
    // JS 객체의 key는 무조건 string (묵시적으로 string )
    // => key 작성시 , "" , '' , (따옴표x)는 모두 string 인식

    const brand = "투썸플레이스";
    
    const product = {
        'pName': "텀블러",
        "brand": "starbucks",
        color : ["red", "orange", "yellow"],
        price : 30000,
        'information' : function(){ // 객체의 기능
            const brand = "메가커피";
            console.log(brand);

            // 객체 내부 함수에서 변수명을 작성하면 
            // 해당 객체의 변수(key)가 아닌
            // 전역 변수가 선택됨
            // 왜? 같은 객체의변수 (key)를 선택하는 방법이 별도 존재해서

            // ** 객체 내부에서 this == 현재 객체 **
            console.log(this.pName);
            console.log(this.brand);
            console.log(this.color);
            console.log(this.price);

        }
    }

    console.log(product);
    
    product.information();

    const div1 = document.getElementById("div1");

    div1.innerHTML = "";

    // 객체의 값을 얻어오고/대입하기
    // 1) 얻어오기 : 객체명.key
    //               객체명{'key'}

    // 2) 대입하기 : 객체명.key = 값;
    //               객체명{'key'} = 값;

    div1.innerHTML += "product.pName : " + product.pName + "<br>";
    div1.innerHTML += "product.brand : " + product.brand + "<br>";
    div1.innerHTML += "product.color : " + product.color + "<br>";
    div1.innerHTML += "product.price : " + product.price + "<br>";
    div1.innerHTML += "<hr>";

    //product.price 값 변경

    product.price = 25000;
    div1.innerHTML += "product.price : " + product.price + "<br>";
    div1.innerHTML += "<hr>";

    // JS객체에 없는 key에 값 대입하기
    // => 객체에 추가한다.
    product.capacity = "550ml";
    console.log(product);

    div1.innerHTML += "product.capacity : " + product.capacity + "<br>";
    div1.innerHTML += "<hr>";

    // 객체의 key 제거 방법
    // => delete 객체 변수명.key

    // delete product.capacity;
    // console.log(product)

    // 객체명('key') 방법으로 
    // 객체가 가지고있는 모든 값 출력하기
    // => for in 구문 (객체전용 for문)

    // for(let key in 객체명) : 매 바퀴마다 객체의 k를 하나씩 얻어와 key변수에 저장

    for(let key in product) {
        div1.innerHTML += product[key] + "<br>";
    }
})

// 생성자 함수

document.getElementById("btn2").addEventListener("click", function(){

    const div2 = document.getElementById("div2");

    const stdList = []; // 비어있는 배열 

    // 2. 생성자 함수 호출 : new 생성자함수명 (매개변수)
    stdList.push( new Student(1,2,"홍길동"));
    stdList.push( new Student(3,6,"개길동"));
    stdList.push( new Student(2,7,"동"));
    stdList.push( new Student(4,9,"길동"));

    div2.innerHTML = "";

    // for of : 배열/컬렉션 요소 반복 접근용 for문
    for(let std of stdList){
        // for in : 객체의 키 반복 접근용 for문
        for(let key in std) {
            // std[key]의 자료형이 function 이면 실행 후 출력
            if(typeof std(key) == 'function'){
                div2.innerHTML += key + ':' + std[key]() + "<br>"
            } else {
                div2.innerHTML += key + ':' + std[key] + "<br>"
            }
        } 
        div2.innerHTML += "<hr>"
    }
})

// 1. 생성자 함수 정의 : 생성자 함수의 시작은 반드시 대문자 ...

function Student(grade, ban, name){
    // 생성자 함수에서의 this
    // == new 연산자를 통해 만들어지는 객체(앞으로 만들어질 객체)

    // 속성
    this.grade = grade;
    // 매개변수 grade값을 생성하는 객체의 grade에 대입
    this.ban = ban;
    this.name = name;

    this.introduce = function(){
        return this.grade +"학년" +this.ban +"반" + this.name;
    }
}


// JSON
document.getElementById("btn3").addEventListener("click",function(){
    const std = new Student(5,6,"오칠이");

    console.log(std); // JS 객체
    console.log(JSON.stringify(std)); // 객체 => JSON 변환
    // **JSON 변환 시 객체의 기능은 포함하지 않는다!!! **
    // => JSON 은 데이터 전달에 특화된 형태

    const member = '{"memberId" : "user01" , "memberPw" : "pass01" , "age" : "30"}'

    console.log(member);
    console.log(JSON.parse(member));
})