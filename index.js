localStorage;
const LeftButton = document.getElementById('LeftArrowButton');
const UpButton = document.getElementById('UpArrowButton');
const RightButton = document.getElementById('RightArrowButton');
const LogButton = document.getElementById('LogButton');
var lcount =0; 
var rcount=0; 
var fcount=0; 
var torchev = false; 

const GameParagraph = document.getElementById('Game');
const Gamelog = document.getElementById('Game');
let GList = new Game(""); 
GList.addGameItem("You awake in a dark cave. You can see that there are three ways for you to progress dimly as your eyes begin to adjust to the light.");
window.addEventListener('load', (event) => {
    if(window.localStorage.getItem("Game") !==null)  
    {
(GameParagraph.innerText =window.localStorage.getItem("Game"));
var str1 = window.localStorage.getItem("Game");
GameParagraph.innerText= window.localStorage.getItem("Game") + " " + GList.GameItemLog; 
    }
});
//GAME LOGIC 
function checkLocation() 
{ 
    if(fcount == 1 && rcount == 0 && lcount== 0) 
    {
        fcount=0; 
        rcount=0; 
        lcount=0; 
     
    GList.addGameItem("you brush against a cold stone wall and return to where you came from");
    GameParagraph.innerText ="you brush against a cold stone wall and return to where you came from"; 
    fcount ==0; 
    rcount==0; 
    lcount==0; 
 
    } 
    if(fcount == 0 && rcount == 1 && lcount== 0) 
    {
    GList.addGameItem("you push towards your right and feel stone surround you on both of your sides until you reach another opening");
    GameParagraph.innerText ="you push towards your right and feel stone surround you on both of your sides until you reach another opening"
   

    }
    if(fcount == 0 && rcount == 0 && lcount== 1 && !torchev) 
    {
    GList.addGameItem("you feel a cold stone wall with a small metalic object jutting out from it. You run your hand up it and feel a wooden torch. You strike the torch on wall and a small spark jumps from the wall to the torch igniting it. You then return to where you began");
    GameParagraph.innerText ="you feel a cold stone wall with a small metalic object jutting out from it. You run your hand up it and feel a wooden torch. You strike the torch on wall and a small spark jumps from the wall to the torch igniting it. You then return to where you began"
    document.body.style.backgroundColor = "orange";
    torchev = true; 
    fcount=0; 
    rcount=0; 
    lcount=0; 
   
    }
    if(fcount == 0 && rcount == 0 && lcount== 1 && torchev) 
    {
        GList.addGameItem("you have already been this way");
        GameParagraph.innerText ="you have already been this way";
        fcount=0; 
        rcount=0; 
        lcount=0; 

    }




}

UpButton.addEventListener(`click`, function () {
   
  GList.addGameItem("You choose to go forward.");
GameParagraph.innerText = ""; 
GameParagraph.innerText = "You choose to go forward."; 
 
  console.log(GList.GameItemLog);
 

 window.localStorage.setItem("game",JSON.stringify(GList.GameItemLog));
   console.log(window.localStorage.getItem("game"));
   GameParagraph.innerText =window.localStorage.getItem("game");
   fcount++;
   checkLocation();
});
LeftButton.addEventListener(`click`, function () {
   
    GList.addGameItem("You choose to go left.");
  GameParagraph.innerText = ""; 
  GameParagraph.innerText = "You choose to go left."; 
   
    console.log(GList.GameItemLog);
   
  
   window.localStorage.setItem("game",JSON.stringify(GList.GameItemLog));
     console.log(window.localStorage.getItem("game"));
     GameParagraph.innerText =window.localStorage.getItem("game");
     lcount++;
     checkLocation();
  });
  RightButton.addEventListener(`click`, function () {
   
  GList.addGameItem("You choose to go right.");
  GameParagraph.innerText = ""; 
  GameParagraph.innerText = "You choose to go right."; 
   
    console.log(GList.GameItemLog);
   
  
   window.localStorage.setItem("game",JSON.stringify(GList.GameItemLog));
     console.log(window.localStorage.getItem("game"));
     GameParagraph.innerText =window.localStorage.getItem("game");
     rcount++;
     checkLocation();
  });
LogButton.addEventListener(`click`, function () {
GameParagraph.innerText = ""; 
GameParagraph.innerText = GList.displayGameList(); 

  
});
