localStorage;
const LeftButton = document.getElementById('LeftArrowButton');
const UpButton = document.getElementById('UpArrowButton');
const RightButton = document.getElementById('RightArrowButton');
const LogButton = document.getElementById('LogButton');
const PunchButton = document.getElementById('PunchButton');
const DodgeButton = document.getElementById('DodgeButton');

//const Resetbutton = document.getElementById('Resetbutton');
var lcount =0; 
var rcount=0; 
var fcount=0; 
var torchev = false; 
var action = false; 

const GameParagraph = document.getElementById('Game');
const Gamelog = document.getElementById('Game');
let GList = new Game(""); 
GList.addEventListener("load", function() {
  if (PunchButton.style.display === "none") {
    PunchButton.style.display = "block";
  } else {
    PunchButton.style.display = "none";
  }
  if (DodgeButton.style.display === "none") {
    DodgeButton.style.display = "block";
  } else {
    DodgeButton.style.display = "none";
  }

});
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


function battlelogic()
{
  //HIDE and Show buttons 
    if (LeftButton.style.display === "none") {
      LeftButton.style.display = "block";
    } else {
      LeftButton.style.display = "none";
    }
    if (UpButton.style.display === "none") {
      UpButton.style.display = "block";
    } else {
      UpButton.style.display = "none";
    }
    if (RightButton.style.display === "none") {
      RightButton.style.display = "block";
    } else {
      RightButton.style.display = "none";
    }
  

}
function checkLocation() 
{ 
    if(fcount == 1 && rcount == 0 && lcount== 0 && !torchev) 
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
    if(fcount == 1 && rcount == 0 && lcount== 0 && torchev) 
    {
      GList.addGameItem("With the torch you now see a an opening in the rock that is easily reachable. you climb through and are presented with another 3 choices");
    GameParagraph.innerText ="With the torch you now see a an opening in the rock that is easily reachable. you climb through and can only continue forward"; 
    document.body.style.backgroundColor = "red";
    document.body.style.backgroundColor = "white";
    action =true; 

    }
    if(fcount == 0 && rcount == 1 && lcount== 0) 
    {
    GList.addGameItem("you push towards your right and feel stone surround you on both of your sides until you reach another opening");
    GameParagraph.innerText ="you push towards your right and feel stone surround you on both of your sides until you reach another dead end. you return to where you came from"
    fcount=0; 
    rcount=0; 
    lcount=0; 
   

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
   if (action)
   battlelogic(); 
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
