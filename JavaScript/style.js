// Typing Animation
var typed = new Typed(".domain",{
    strings:["","Web Developer...","Programmer...","Designer..","Learner..."],
    typeSpeed:100,
    BackSpeed:60,
    loop:true
})








//  ----------  Styling ---------


const styletoggle = document.querySelector(".style-switcher-toggle");
styletoggle.addEventListener("click",() => {
    document.querySelector(".style-switcher").classList.toggle("open");
})

window.addEventListener("scroll",() => {
    if(document.querySelector(".style-switcher").classList.contains("open")){
        document.querySelector(".style-switcher").classList.remove("open");
    }
})

const alternateStyles = document.querySelectorAll(".alternate");
function setActiveStyle(color){
    alternateStyles.forEach((style) => {
        if(color === style.getAttribute("title")){
            style.removeAttribute("disabled");
        }
        else{
            style.setAttribute("disabled","true");
        }
    })
}

const theme = document.querySelector(".day-night");
theme.addEventListener("click", () => {
    theme.querySelector("i").classList.toggle("fa-moon");
    theme.querySelector("i").classList.toggle("fa-sun");
    // theme.querySelector("my_logo").classList.("dark");
    document.body.classList.toggle("dark");
})
window.addEventListener("load",()=>{
    if(document.body.classList.contains("dark")){
        theme.querySelector("i").classList.add("fa-sun");
    }
    else{
        theme.querySelector("i").classList.add("fa-moon")
    }
})

// const profile_image = document.querySelector("img");
// profile_image.addEventListener


