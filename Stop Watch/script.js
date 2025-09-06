const time = document.querySelector(".time");

const resetBtn = document.querySelector(".reset");
const playBtn = document.querySelector(".play");
const pauseBtn = document.querySelector(".pause");
const storeBtn = document.querySelector(".store");

const allBtn = document.querySelectorAll(".btn");

const storeFlag = document.querySelector(".flag-list");

allBtn.forEach((element) => {
  element.addEventListener("click", () => {
    if (element === resetBtn) {
      stopWatch(element); //function calling
      storeFlag.innerHTML = "";
    } else if (element === playBtn) {
      stopWatch(element); // function calling
    } else if (element === pauseBtn) {
      stopWatch(element); //function calling
    } else if (element === storeBtn) {
      stopWatch(element); //function calling
    }
  });
});

let globalCounter = 1;

let startTime = 0;
let intervalPlay;
let totalTime = 0;

let storageTime = localStorage.getItem("currentTime");

if (storageTime !== 0) {
  startTime = storageTime;
  time.innerText = startTime;
  let [min, sec, ms] = startTime.split(":").map(Number);

  totalTime = min * 60 * 1000 + sec * 1000 + ms;
  startTime = Date.now() - totalTime;
  console.log(startTime);
  console.log(totalTime);

  playBtn.style.display = "none";
  pauseBtn.style.display = "flex";

  intervalPlay = setInterval(() => {
    totalTime = Date.now() - startTime;
    let min = Math.floor(totalTime / (1000 * 60));
    let sec = Math.floor((totalTime % (1000 * 60)) / 1000);
    let ms = totalTime % 1000;
    console.log(min);
    time.innerText = `${min}:${sec}:${ms}`;
    localStorage.setItem("currentTime", `${min}:${sec}:${ms}`);
  }, 10);
} else {
  startTime = 0;
}

function stopWatch(element) {
  if (element === resetBtn) {
    playBtn.style.display = "flex";
    pauseBtn.style.display = "none";
    clearInterval(intervalPlay);
    totalTime = 0;
    console.log("timer reset", totalTime);
    localStorage.clear();
    time.innerText = `00:00:00`;
    document.querySelector(".container").style.justifyContent = "center";
  } else if (element === playBtn) {
    playBtn.style.display = "none";
    pauseBtn.style.display = "flex";

    startTime = Date.now() - totalTime;
    intervalPlay = setInterval(() => {
      totalTime = Date.now() - startTime;
      let min = Math.floor(totalTime / (1000 * 60));
      let sec = Math.floor((totalTime % (1000 * 60)) / 1000);
      let ms = totalTime % 1000;
      time.innerText = `${min}:${sec}:${ms}`;
      localStorage.setItem("currentTime", `${min}:${sec}:${ms}`);
    }, 10);
  } else if (element === pauseBtn) {
    playBtn.style.display = "flex";
    pauseBtn.style.display = "none";
    clearInterval(intervalPlay);
    console.log("paused at", totalTime);
  } else if (element === storeBtn) {
    let min = Math.floor(totalTime / 60);
    let sec = Math.floor(totalTime % 60);
    let ms = Math.floor((totalTime % 1) * 1000);

    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;
    ms = ms < 100 ? (ms < 10 ? "00" + ms : "0" + ms) : ms;

    const list = document.createElement("li");
    list.innerText = `${globalCounter} - ${min}:${sec}:${ms}`;
    globalCounter++;
    document.querySelector(".container").style.justifyContent = "start";
    storeFlag.prepend(list);
  }
}
