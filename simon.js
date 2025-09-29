let gameSeq=[];
let userSeq=[];
let start=false;
let level = 0;
 let h2=document.querySelector("h2");
let colors=["red","blue","green","yellow"];
document.addEventListener("keypress",function(){
    if(start==false){
      console.log("game started");
      start=true;
      levelUp();
    }
});

function levelUp(){
  level++;
  h2.innerText=`level ${level}`;
  let rndmIndx=Math.floor(Math.random()*4);
  let rndmcolor=colors[rndmIndx];
  gameSeq.push(rndmcolor);
  console.log(gameSeq);
  let rndmbtn=document.querySelector(`.${rndmcolor}`);
   gameFlash(rndmbtn);
}


function checkAns(idx){
  let currindx=idx;
  if(gameSeq[currindx]===userSeq[currindx]){
    if(gameSeq.length==userSeq.length){
     setTimeout(levelUp,1000);
      userSeq=[];
    }
  }else{
    console.log(`your score is ${gameSeq.length-1}`);
   h2.innerText=`Game over!!Your Score is ${gameSeq.length-1}.Press any key to restart`;
   document.querySelector("body").style.backgroundColor="red";
 setTimeout(function(){
document.querySelector("body").style.backgroundColor="white";
 },50);

   document.addEventListener("keypress",restart);
  }
}

function gameFlash(btn){
 btn.classList.add("flash");
 setTimeout(function(){
 btn.classList.remove("flash");
 },150);
}

function userFlash(btn){
 btn.classList.add("userflash");
 setTimeout(function(){
 btn.classList.remove("userflash");
 },150);

}

function btnPress(){
  let btn=this;
  userFlash(btn);
  let usercolor=btn.getAttribute("id");
 userSeq.push(usercolor);
 checkAns(userSeq.length-1);
}

let btn=document.querySelectorAll(".btn");
for(btns of btn){
  btns.addEventListener("click", btnPress);
}


  function restart(){
    userSeq=[];
    gameSeq=[];
    start=true;
    level=0;
    console.log("game started");
    setTimeout(levelUp,1000);
  }