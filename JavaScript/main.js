// More About Me
const more_about_btn = document.querySelector(".hi");
// console.log(more_about_btn);
more_about_btn.addEventListener("click",function(){
  // console.log("More about me is clicked")
  onclick=document.getElementById("about_me").click();
})


// Navbar
const nav = document.querySelector(".nav"),
navList = nav.querySelectorAll("li"),
totalNavList = navList.length;
var funrunning = false;
allsec = document.querySelectorAll("section");
section_size = allsec.length;
for (let i = 0; i < totalNavList; i++) {
  //   console.log(navList[i]); 
  const a = navList[i].querySelector("a");
  // console.log(a);
  a.addEventListener("click", function () {
    if(!a.classList.contains("resume")){
    if(funrunning===false){
      funrunning = true;
      document.querySelector(".nav_toggle").click();
      for (let j = 0; j < totalNavList; j++) {
        navList[j].querySelector("a").classList.remove("active");
        navList[j].querySelector("a").classList.add("unhover");
      }
      a.removeEventListener("click",function(){});
      this.classList.add("active");
      openSection(this);
      setTimeout(function(){
        funrunning=false;
        for (let j = 0; j < totalNavList; j++) {
          navList[j].querySelector("a").classList.remove("unhover");
        }
        // console.log("Done");
      },1500);
    }
  }
  })
}
function openSection(elem) {
  // const main_content = document.querySelectorAll("main_content");
  // console.log(main_content);
  // document.querySelector("main_content").classList.add("animate_content");
  // $('.main_content').addClass('animate_content');
  for (let x = 0; x < section_size; x++) {
    // console.log(allsec[x].classList);
    if (allsec[x].classList.contains("active")) {
      allsec[x].classList.add("animate_content_out");
      // allsec[x].classList.add("fadeIn");
      setTimeout(function () { allsec[x].classList.remove("animate_content_out"); }, 1000);
      // setTimeout(function() {allsec[x].classList.remove("fadeIn");}, 1500);
      setTimeout(function () { allsec[x].classList.remove("active"); }, 1000);
      setTimeout(function () { allsec[x].classList.add("hidden"); }, 800);
      
    }
    else {
      allsec[x].classList.remove("active");
      allsec[x].classList.add("hidden");
    }
  }
  // console.log(elem.getAttribute("href").split("#"));
  const temp = elem.getAttribute("href").split("#")[1];
  // attr = temp[1];
  // console.log(attr)
  // setTimeout(function() {document.querySelector("#" + temp).classList.add("fadeIn");}, 1500);
  setTimeout(function () { 
    document.querySelector("#" + temp).classList.add("active"); 
    document.querySelector("#" + temp).classList.remove("hidden"); 
  }, 500);
  setTimeout(anim_in, 500);
  
  // document.querySelector("#" + temp).classList.add("active");
}
function anim_in() {
  // console.log("Hey");
  for (let x = 0; x < section_size; x++) {
    // console.log(allsec[x].classList);
    // console.log(allsec[x].length);
    if (allsec[x].classList.contains("active")) {
      // console.log(allsec[x].classList.length);
      allsec[x].classList.add("animate_content_in");
      // allsec[x].classList.add("fadeIn");
      setTimeout(function () { allsec[x].classList.remove("animate_content_in"); }, 1200);
      // setTimeout(function() {allsec[x].classList.r
    }
  }
}


// Toggle menu bar
const nav_toggle = document.querySelector(".nav_toggle");
navbar = document.querySelector(".navbar");
nav_toggle.addEventListener("click",() => {
  navbartogglerfunc();
})
function navbartogglerfunc(){
  navbar.classList.toggle("open_toggle");
  nav_toggle.classList.toggle("open_toggle");
  for (let i=0;i<section_size;i++){
    allsec[i].classList.toggle("open_toggle");
  }
}

