    const audio = document.querySelector('.audio');
    const audioList = ["songs/lonely.mp3", "songs/phonk.mp3", "songs/something.mp3"];
    const songName =["Lonely", "Phonk Music", "Something Just Like This"];
    const singer =["Akon", "Phonk Music", "The Chainsmokers and Coldplay"];
    const images = ["images/lonely.jpg", "images/phonk.jpg", "images/something.png"];

    const songTitle = document.querySelector('.song-name');
    const singerName = document.querySelector('.artist-name');
    const backgroungSongImage = document.querySelector(".song-image");

    const prevBtn = document.querySelector('.previous');
    const playBtn = document.querySelector('.play');
    const pauseBtn = document.querySelector('.pause');
    const nextBtn = document.querySelector('.next');

    const buttons = document.querySelectorAll('.btn');


    let songIndex = 1;

    buttons.forEach(btn=>{
        btn.addEventListener('click',()=>{
            if(btn ===  playBtn){
                playSong();
                updateBackground();
                updateName();
            }else if(btn === pauseBtn){
                audio.pause();
                pauseBtn.style.display="none";
                playBtn.style.display="flex";
            }else if(btn === nextBtn){
                nextSong();
                updateName();
                changePlayPause();
                updateBackground();
            }else if(btn === prevBtn){
                prevSong();
                updateName();
                changePlayPause(); 
                updateBackground();
            }
            
        });
    })

    function playSong(){
        audio.src = audioList[songIndex];
        audio.play();
        playBtn.style.display="none";
        pauseBtn.style.display="flex";
    }
    function nextSong(){
        songIndex++;
        if(songIndex>=audioList.length){
            songIndex=0;
        }
        audio.src = audioList[songIndex];
        audio.play();

    }
    function prevSong(){
        songIndex--;
        if(songIndex<0){
            songIndex = audioList.length-1;
        }
        audio.src = audioList[songIndex];
        audio.play();      
    }
    
    function changePlayPause(){
        pauseBtn.style.display="flex";
        playBtn.style.display="none";
    }
    function updateName(){
        songTitle.innerText = songName[songIndex];
        singerName.innerText = `- ${singer[songIndex]}`;
    }
    function updateBackground(){
        backgroungSongImage.style.backgroundImage = `url(${images[songIndex]})`;
    }