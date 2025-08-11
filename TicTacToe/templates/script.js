let boxes = document.querySelectorAll('.box');
let resetBtn = document.querySelector('.reset-button');
let newGameBtn = document.querySelector(".new-game-btn");

let result = document.querySelector(".win-msg-container");
let winMsg = document.querySelector(".win-msg");


let turnO = true;
let count = 0;
const winPattern = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];


boxes.forEach((box)=>{
    box.addEventListener("click",(e)=>{
        if(turnO){
            box.innerText="O";
            turnO=false;
        }else{
            box.innerText="X";
            turnO=true;
        }
        count+=1;
        box.disabled=true;
        checkWinner();

    });
});


const checkWinner=()=>{
    for(let pattern of winPattern){
        let pos1Val=boxes[pattern[0]].innerText;
        let pos2Val=boxes[pattern[1]].innerText;
        let pos3Val=boxes[pattern[2]].innerText;

        if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
            if(count==9){
                winMsg.innerText="No one Wins";
                result.classList.remove("hide");
            }
            if(pos1Val===pos2Val && pos2Val===pos3Val){
                showWinner(pos1Val);

            }
        }
    }
};

const showWinner=(winner)=>{
    winMsg.innerText = `Congrats ${winner} wins`;
    result.classList.remove("hide");
    disableBoxes();
}

const disableBoxes=()=>{
    boxes.forEach((box)=>{
        box.disabled = true;
    });
};

const enableBoxes=()=>{
    boxes.forEach((box)=>{
        box.disabled = false;
        box.innerText="";
        count=0;
    });
};

const resetGame = () => {
    turnO = true;
    enableBoxes();
    result.classList.add("hide");
    count=0;
};



resetBtn.addEventListener('click', resetGame);
newGameBtn.addEventListener('click', resetGame);




