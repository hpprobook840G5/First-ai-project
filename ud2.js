const cards=document.querySelectorAll(".card");
window.addEventListener("load",()=>
{
    cards.forEach(card=>
        {card.classList.add("visible");
        card.classList.remove("hidden");
        }
    );
});





const form=document.querySelector("form");
form.addEventListener("submit",()=>{
       const main_details = {
        experience: document.querySelector('input[name="experience"]:checked').value,
        activity: document.querySelector('input[name="activity"]:checked').value,
        goal: document.querySelector('input[name="goal"]:checked').value,
        days: document.getElementById("days").value
    };
    localStorage.setItem("main_details",JSON.stringify(main_details));
})

console.log("suriya");




