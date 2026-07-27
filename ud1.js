
const form=document.querySelector("form");
form.addEventListener("submit",()=>{
    const basic_details={
    name:document.getElementById("app-name").value,
    age:document.getElementById("age").value,
    height:document.getElementById("height").value,
    weight:document.getElementById("weight").value,
    gender:document.querySelector('input[name="gender"]:checked').value
};
localStorage.setItem("basic_details",JSON.stringify(basic_details));
console.log(basic_details);
});
console.log("check");

