const loads=document.getElementsByClassName("load");

Array.from(loads).forEach(element=>{element.classList.add("show")});


const counters=document.querySelectorAll(".counter");

counters.forEach(counter=>{
    const target=Number(counter.dataset.target);
    let num=0;
    const interval=setInterval(()=>
    {num++;
        counter.textContent=num;
        if(num>=target){
            counter.textContent+="+";
            clearInterval(interval);
        }
    },20)
    

}
);

const special=document.getElementById("counter");
let num=0;
 const interval=setInterval(()=>{
    const target=special.dataset.target;
    
    num+=10;
    special.textContent=num;
    if(num>=target){
        special.textContent+="+";
        clearInterval(interval);
    }
},20);


const hidden_elements=document.querySelectorAll(".hidden");
const observer=new IntersectionObserver((entries=>
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.classList.remove("hidden",);
            entry.target.classList.add("visible");
        }
        else{
            entry.target.classList.remove("visible");
            entry.target.classList.add("hidden");

        }
        
    }
       
    )
),{});

hidden_elements.forEach(element=>{
    observer.observe(element);
})

// const elements_hiddden1=document.querySelectorAll(".slide-left");
// const observer1=new IntersectionObserver(entries=>
//     entries.forEach(entry=>{
//         if(entry.isIntersecting){
//             entry.target.replace("slide-left","slide-show");
//         }
//         else{
//             entry.target.replace("slide-show","slide-left");
//         }
//     }

//     ),{})
// elements_hiddden1.forEach(element=>{
//     observer1.observe(element);
// })

// const elements_hiddden2=document.querySelectorAll(".slide-right");
// const observer2=new IntersectionObserver(entries=>
//     entries.forEach(entry=>{
//         if(entry.isIntersecting){
//             entry.target.replace("slide-right","slide-show");
//         }
//         else{
//             entry.target.replace("slide-show","slide-right");
//         }
//     }

//     ),{})
// elements_hiddden2.forEach(element=>{
//     observer2.observe(element);
// })

const elements = document.querySelectorAll(".slide-left, .slide-right");

const observer1 = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
        entry.target.classList.toggle("slide-show", entry.isIntersecting);
    });
});

elements.forEach(element=>{
    observer1.observe(element);
});


let slide_num=0;
const slides=document.querySelectorAll(".testimonial");
function changeslide(){
    
    slides[slide_num].classList.remove("active");
    slide_num++;
    if(slide_num>=2){
        slide_num=0;
    }
    slides[slide_num].classList.add("active");
    
}
setInterval(changeslide,3000);



