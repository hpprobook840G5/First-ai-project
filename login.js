const eye=document.getElementById("eye");
const password=document.getElementById("password");
eye.addEventListener("click",eyetoggle);
function eyetoggle(event){
    if(password.type==="password"){
        password.type="text";
        eye.textContent="🫣";
    }
    else{
        password.type="password";
        eye.textContent="👀";
    }
}
