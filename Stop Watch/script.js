const time = document.querySelector(".time");

const resetBtn = document.querySelector(".reset");
const playBtn = document.querySelector(".play");
const pauseBtn = document.querySelector(".pause");
const storeBtn = document.querySelector(".store");

const allBtn = document.querySelectorAll(".btn");

allBtn.forEach(element => {
    element.addEventListener("click",()=>{
        if(element === resetBtn){
            stopWatch(element) //function calling
        }else if(element === playBtn){
            stopWatch(element);// function calling
        }else if(element === pauseBtn){
            stopWatch(element) //function calling
        }else if(element === storeBtn){
            stopWatch(element) //function calling
        }

        
    })
});

let globalCounter = 1;

let startTime = 0;
let intervalPlay;
let totalTime=0;

function stopWatch(element){
    if(element === resetBtn){
        playBtn.style.display = "flex";
        pauseBtn.style.display = "none";
        clearInterval(intervalPlay);
        totalTime = 0
        console.log("timer reset",totalTime);
        localStorage.clear();
        time.innerText=`00:00:00`;
    }
    
    else if(element === playBtn){
        playBtn.style.display = "none";
        pauseBtn.style.display = "flex";

        startTime = Date.now() - totalTime;

        intervalPlay = setInterval(()=>{

            totalTime = Date.now() - startTime;
            let min = Math.floor(totalTime / (1000 * 60));
            let sec = Math.floor((totalTime % (1000 * 60)) / 1000);
            let ms  = totalTime % 1000;
            time.innerText=`${min}:${sec}:${ms}`;

            localStorage.setItem("currentTime",`${min}:${sec}:${ms}`);
        },16);
    }
    
    else if(element === pauseBtn){
        playBtn.style.display = "flex";
        pauseBtn.style.display = "none";
        clearInterval(intervalPlay);
        console.log("paused at", totalTime);
    }
    
    else if(element === storeBtn){
        // let min = totalTime/(1000*60);
        // let sec = (min-floor(min)) * 60;
        // let ms = (sec-floor(sec)) *1000 ;
        // min = floor(min);
        // sec = floor(sec);

        let min = Math.floor(totalTime / (1000 * 60));
        let sec = Math.floor((totalTime % (1000 * 60)) / 1000);
        let ms  = totalTime % 1000;

        let data = localStorage.getItem("currentTime");
        // document.querySelector(".flagList").innerText += `${globalCounter}  ${data}\n`;
        globalCounter ++;
        localStorage.setItem("counter", globalCounter);
    }

}
    
