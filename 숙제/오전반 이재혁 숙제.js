var count = 0; 
const btn = document.getElementById("btn"); 
const span = document.getElementById("span");

// span.addEventListener("mouseover", function() {

//         span.textContent = "";
// })

btn.addEventListener("mouseover", function() {
    
    
    if (count <= 10) {
        btn.innerText += "사랑해";
        btn.style.backgroundColor ='red';
        btn.style.fontFamily = '궁서' ;
        btn.style.fontWeight = 'bold';
        btn.style.color = 'white';
        count++; 
    } else { 
        btn.innerText = "그마내!!!!!!!!!!!!!!!!!!!!!!!!";
        btn.style.backgroundColor ='black';
        btn.style.fontFamily = '궁서' ;
        btn.style.fontWeight = 'bold';
        btn.style.color = 'white';
        btn.style.fontSize = '20px';
    }
});