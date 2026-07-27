function home(){
    window.location.href="hero.html";
}
function plan(){
    window.location.href="ud1.html";
}

const load=document.getElementById("loader");
let num=0;
const interval=setInterval(()=>
{
    const target=load.dataset.target;
    num+=8;
    load.textContent=`Loading ${num}%`;
    if(num>=target){
        clearInterval(interval);
        load.textContent="Plan Generated";
    }
},500)

const final_details={
    basic_details:JSON.parse(localStorage.getItem("basic_details")),
    main_details:JSON.parse(localStorage.getItem("main_details")),
    diet:JSON.parse(localStorage.getItem("foods"))
}

const prompt=`
Create a personalised Fitness Plan

Basic Details:
Name=${final_details.basic_details.name}
Age=${final_details.basic_details.age}
Gender=${final_details.basic_details.gender}
Height=${final_details.basic_details.height}
weight=${final_details.basic_details.weight}

Fitness Details:
Experience=${final_details.main_details.experience}
Activity Level=${final_details.main_details.activity}
Goal=${final_details.main_details.goal}
Workout Days=${final_details.main_details.days}
Diet Foods=${final_details.main_details.diet}

Generate:
1. Workout split
2. Exercises
3. Sets and reps
4. Daily diet
5. Tips

`;




const API_KEY = "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";

async  function generate_plan(){
const response = await fetch(
  "https://api.groq.com/openai/v1/chat/completions",
  {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${API_KEY}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      model: "llama-3.3-70b-versatile",
      messages: [
        {
          role: "user",
          content: prompt
        }
      ]
    })
  }
);

const data= await response.json();
console.log(response.status);
console.log(data);
}
generate_plan();
document.getElementById("home").hidden=false;
document.getElementById("again").hidden=false;
document.getElementById("download").hidden=false;

const downloadbtn=document.getElementById("download");
downloadbtn.addEventListener("click",(event)=>{
    const { jsPDF } = window.jspdf;

    const pdf = new jsPDF();

    pdf.setFontSize(18);
    pdf.text("B18 AI Fitness Plan", 20, 20);

    pdf.setFontSize(12);

    const lines = pdf.splitTextToSize(plan, 170);

    pdf.text(lines, 20, 35);

    pdf.save("B18_Fitness_Plan.pdf");
})





