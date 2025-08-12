const play = document.querySelector(".play");
const pause = document.querySelector(".pause");

const time = document.querySelector(".time");

const reset = document.querySelector(".reset");
const store = document.querySelector(".store");

const btn = document.querySelectorAll(".btn");

let startTime = 0;
let elapsedTime = 0;
let timeInterval;

btn.forEach(element => {
    if(element === play){
        element.addEventListener("click",()=>{
            console.log("play");
            startTime = Date.now();
            timerInterval = setInterval(startDisplayTime, 10);
            play.style.display = "none";
            pause.style.display = "flex";
    });
    }else if (element === pause){
        element.addEventListener("click",()=>{
            console.log("pause");
            pause.style.display = "none";
            play.style.display = "flex";
        });
    }else if(element === reset){
        element.addEventListener("click",()=>{
            console.log("reset");
        });
    }else if(element === store){
        element.addEventListener("click",()=>{
            console.log("store");
        });
    }

});


function startDisplayTime(){
    let totalTime = Date.now() - startTime +  elapsedTime;

    let minutes = Math.floor( (totalTime % 1000*60*60) / (1000*60));
    let second =  Math.floor( (totalTime % 1000*60)/1000 );
    let milliseconds = time % 1000;

    time.innerText = {hello};
}