
let start = false;
let level = 0;
let gameSeq = [];
let userSeq = [];
let colors = ["red","yellow","green","blue"];
let max=0;
let current=0;

let text = document.querySelector(".start");
let maxScore = document.querySelector(".maxscore");
let currScore = document.querySelector(".currscore");


function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function (){
        btn.classList.remove("flash");
    },150);
};

function levelUp(){
    userSeq=[];
    level++;
    text.innerText=`Level ${level}`;
    let randInx=Math.floor(Math.random()*4);
    let randColor=colors[randInx];
    let randButton=document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    btnFlash(randButton);
    console.log(gameSeq);    
    currScore.innerText=`Current Score : ${level-1}`;
    checkHighest();
    maxScore.innerText=`High Score : ${max}`;
}

function btnPress(){
    if(start==true){
        btnFlash(this);
        userSeq.push(this.getAttribute('id'));
        console.log(this.getAttribute('id'));
        checkBtn(userSeq.length-1);
    }    
}

let allBtn = document.querySelectorAll(".color");
for (btn of allBtn){
    btn.addEventListener('click',btnPress);
}

function checkBtn(idx){
    if(gameSeq[idx]===userSeq[idx]){
        if(userSeq.length==gameSeq.length){            
        setTimeout(levelUp,500);
        }
    }else{
        
        text.innerHTML=`Oops Wrong! Previous Score : ${level-1}  <br> Press <b>Start</b> button to restart again`;
        console.clear();
        console.log("Game Over *_* ");
        document.querySelector(".submit").classList.remove("invisible");
        level=0;
        start=false;
        userSeq=[];
        gameSeq=[];
    }
}
function checkHighest(){
    if(max<level-1){
        max=level-1;
    }
}
let startBtn = document.querySelector(".mobile");
startBtn.addEventListener("click",function (event){
        if(start==false){
        console.clear();
        start=true;
        console.log("Game Started ^_^ ")
        document.querySelector(".submit").classList.add("invisible");
        levelUp();
    }    
})
