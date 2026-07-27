const username=document.getElementById("username");
const pass1=document.getElementById("pass1");
const pass2=document.getElementById("pass2");
const strength=document.getElementById("strength");

pass1.addEventListener("input",verify);

function verify(event){
    const password=pass1.value;
    if(password.length<=8){
        strength.textContent="weak";
        strength.style.color="red";
    }
    else if(password.length<=12){
        strength.textContent="Moderate";
        strength.style.color="orange";
    }
    else{
        strength.textContent="Strong";
        strength.style.color="green";
    }
}

const error=document.getElementById("error");
const form=document.getElementById("form");

form.addEventListener("submit",prevent);
function prevent(event){
    if(pass1.value!==pass2.value){
        event.preventDefault();
        error.textContent="Passwords should match!";
        error.style.color='red';
    }
    else{
        error.textContent="";
    }
}
pass2.addEventListener("input",(event)=>{  if(pass1.value!=pass2.value){
        error.textContent="Passwords should match!";
        error.style.color='red';

    }
else{
    error.textContent="";
}});

const eye1=document.getElementById("eye1");
const eye2=document.getElementById("eye2");

eye1.addEventListener("click",hide_show1);
eye2.addEventListener("click",hide_show2);

function hide_show1(event) {
    if (pass1.type === "password") {
        eye1.innerHTML = "&#128065;"; // 👁️
        pass1.type = "text";
    } else {
        eye1.innerHTML = "&#128584;"; // 🙈
        pass1.type = "password";
    }
}

function hide_show2(event) {
    if (pass2.type === "password") {
        eye2.innerHTML = "&#128065;"; // 👁️
        pass2.type = "text";
    } else {
        eye2.innerHTML = "&#128584;"; // 🙈
        pass2.type = "password";
    }
}


  







