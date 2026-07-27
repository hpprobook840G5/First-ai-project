const warning=document.getElementById("warning");

const button=document.getElementById("button");
const foods=[];
button.addEventListener("click",addfood);
function addfood(event){
    food=document.getElementById("selected_food").value;
    if(food===""){
        
        warning.textContent="Enter any food";
        warning.style.color="red";
        
        return
    }
   
    else{
        if(foods.includes(food)){
            warning.textContent="Already included";
            warning.style.color="orange";
            return
        }
        const li=document.createElement("li");
        li.textContent=food;
        li.style.color="white";
        document.getElementById("foodlist").appendChild(li);
        foods.push(food);
     
        localStorage.setItem("foods",JSON.stringify(foods));
        document.getElementById("selected_food").value="";
    }
}
const form=document.querySelector("form");
form.addEventListener("submit",(event)=>{
    if(foods.length<5){
        event.preventDefault();
        warning.textContent="Enter atleast 6 foods";
        warning.style.color="red";
    }
})




