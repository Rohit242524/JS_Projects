const mail = document.querySelector(".gmail-logo");
const github = document.querySelector(".github-logo");
const linkedIn = document.querySelector(".linkedIn-logo");

const icons = document.querySelectorAll(".contact-us-icons");

for (const icon of icons) {
  icon.addEventListener("click", (event) => {
    const clickedIcon = event.currentTarget;
    if(clickedIcon === mail ){
        window.location.href = "mailto:rohit250104joshi@gmail.com";
    }else if(clickedIcon === github ){
        window.location.href = "https://github.com/Rohit242524";
    }else if(clickedIcon === linkedIn  ){
        window.location.href = "https://www.linkedin.com/in/rohit-joshi-682265284/";
    }

  });
}


/*darkmode*/

const switchDark = document.querySelector(".nightMode-container");

  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("night-mode");
    switchDark.classList.add("night-mode"); 
  } else {
    document.body.classList.remove("night-mode");
    switchDark.classList.remove("night-mode");
  }

switchDark.addEventListener("click",()=>{
  switchDark.classList.toggle("night-mode");

  if(switchDark.classList.contains("night-mode")){
    localStorage.setItem("theme","dark");
  }else{
    localStorage.setItem("theme","light");
  }

  if(localStorage.getItem("theme")==="dark"){
    document.body.classList.add("night-mode");
  }else{
    document.body.classList.remove("night-mode");
  }

});

