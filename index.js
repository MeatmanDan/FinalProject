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
(ListParagraph.innerText =window.localStorage.getItem("Game"));
var str1 = window.localStorage.getItem("Game");
ListParagraph.innerText= window.localStorage.getItem("Game") + " " + GList.GameItemLog; 
    }
});

UpButton.addEventListener(`click`, function () {
   
  GList.addGameItem("You choose to go forward.");
GameParagraph.innerText = ""; 
GameParagraph.innerText = "You choose to go forward."; 
 
  console.log(GList.GameItemLog);
 

 window.localStorage.setItem("list",JSON.stringify(SList.ShoppingListLog));
   console.log(window.localStorage.getItem("game"));
   ListParagraph.innerText =window.localStorage.getItem("game");
});
LogButton.addEventListener(`click`, function () {
 ListParagraph.innerText = ""; 
ListParagraph.innerText = this.displayGameList(); 

  
});
