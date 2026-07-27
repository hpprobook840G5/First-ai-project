const final_details={
    basic_details:JSON.parse(localStorage.getItem("basic_details")),
    main_details:JSON.parse(localStorage.getItem("main_details")),
    diet:JSON.parse(localStorage.getItem("foods"))
}
localStorage.setItem("final_details",JSON)


document.getElementById("name").textContent=final_details.basic_details.name;
document.getElementById("age").textContent=final_details.basic_details.age;
document.getElementById("gender").textContent=final_details.basic_details.gender;
document.getElementById("height").textContent=final_details.basic_details.height;
document.getElementById("weight").textContent=final_details.basic_details.weight;
document.getElementById("experience").textContent=final_details.main_details.experience;
document.getElementById("activity").textContent=final_details.main_details.activity;
document.getElementById("goal").textContent=final_details.main_details.goal;
document.getElementById("days").textContent=final_details.main_details.days;
document.getElementById("diet").textContent=final_details.diet;