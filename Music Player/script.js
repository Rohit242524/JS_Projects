const audio = document.querySelector('.audio');

const prevBtn = document.querySelector('.previous');
const playBtn = document.querySelector('.play');
const pauseBtn = document.querySelector('.pause');
const nextBtn = document.querySelector('.next');

audio.src="./songs/lonely.mp3";

audio.controls = true;
playBtn.addEventListener('click',()=>{
    audio.play();
    playBtn.style.display="none";
    pauseBtn.style.display="flex";
    audio.play();
});

pauseBtn.addEventListener("click",()=>{
    audio.pause();
    pauseBtn.style.display = "none";
    playBtn.style.display = "flex";
});