let gameseq=[];
let userseq=[];
let started=false;
let level=0;
let highestScore = 0;


let h2=document.querySelector("h2");
let btns=["red","yellow","green","blue"];

document.addEventListener("keypress",function(){
  if(started==false){
    console.log("game started");
   started=true;
   levelup()
  }
});
 
function gameflash(btn){
 btn.classList.add("flash");
 setTimeout(function (){
   btn.classList.remove("flash");
 },500);
}
function userflash(btn){
  btn.classList.add("flashrto");
  setTimeout(function (){
    btn.classList.remove("flashrto");
  },500);
 }


function levelup(){
  userseq=[];
  level++;
 h2.innerText=`level ${level}`;

 let rainind=Math.floor(Math.random()*4);
 let random=btns[rainind];
 let ranbtn=document.querySelector(`.${random}`);
 gameseq.push(random);
 console.log(gameseq);
 gameflash(ranbtn);
}
function checksum(idx){
    
    if (userseq[idx]===gameseq[idx]){
     if(userseq.length==gameseq.length){
      setTimeout(levelup,500);
     }
    }else{
  
      h2.innerText = `Game over! Your score is ${level}. Highest score: ${highestScore}. Press any key to start.`;
      
      document.querySelector("body").style.backgroundColor="red";
      setTimeout(function(){
          document.querySelector("body").style.backgroundColor="white";
      },200);
       reset();
    }
}
function btnpress(){
   let btn=this;
   userflash(btn);
   usercolor=btn.getAttribute("id");
   userseq.push(usercolor);
   checksum(userseq.length-1);
}
let allBtns=document.querySelectorAll(".btn");
for(btn of allBtns){
  btn.addEventListener("click",btnpress);
}
function updateHighestScore(score) {
  if (score > highestScore) {
      highestScore = score;
  }

}
updateHighestScore(level);
function reset(){
 started=false;
 userseq=[];
 gameseq=[];
 level=0;
}
