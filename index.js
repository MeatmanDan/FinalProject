localStorage;
const LeftButton = document.getElementById('LeftArrowButton');
const UpButton = document.getElementById('UpArrowButton');
const RightButton = document.getElementById('RightArrowButton');
const LogButton = document.getElementById('LogButton');

const GameParagraph = document.getElementById('Game');
const Gamelog = document.getElementById('Game');
let GList = new Game(""); 
window.addEventListener('load', (event) => {
    if(window.localStorage.getItem("Game") !==null)  
    {
  GList.addGameItem("You awake in a dark cave. You can see that there are three ways for you to progress dimly as your eyes begin to adjust to the light.")
(GameParagraph.innerText =window.localStorage.getItem("Game"));
var str1 = window.localStorage.getItem("Game");
GameParagraph.innerText= window.localStorage.getItem("Game") + " " + GList.GameItemLog; 
    }
});

UpButton.addEventListener(`click`, function () {
   
  GList.addGameItem("You choose to go forward.");
GameParagraph.innerText = ""; 
GameParagraph.innerText = "You choose to go forward."; 
 
  console.log(GList.GameItemLog);
 

 window.localStorage.setItem("game",JSON.stringify(GList.GameItemLog));
   console.log(window.localStorage.getItem("game"));
   GameParagraph.innerText =window.localStorage.getItem("game");
});
LogButton.addEventListener(`click`, function () {
GameParagraph.innerText = ""; 
GameParagraph.innerText = GList.displayGameList(); 

  
});
