localStorage;
localStorage.clear();
const LeftButton = document.getElementById('LeftArrowButton');
const UpButton = document.getElementById('UpArrowButton');
const RightButton = document.getElementById('RightArrowButton');
const LogButton = document.getElementById('LogButton');
const PunchButton = document.getElementById('PunchButton');
const DodgeButton = document.getElementById('DodgeButton');
const KickButton = document.getElementById('KickButton');

var lcount =0; 
var rcount=0; 
var fcount=0; 
var dcount =0; 
var pcount =0;
var kcount =0;
var edcount =0; 
var epcount =0;
var ekcount =0; 
var userh =10; 
var enemyh =10; 
var torchev = false; 
var action = false; 
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
if (KickButton.style.display === "none") {
  KickButton.style.display = "block";
} else {
  KickButton.style.display = "none";
}


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
function battlelogic()
{
  var ran = Math.floor(Math.random() * 10);
if(ran > 0 &&  ran <= 3) 
epcount++; 
if(ran > 3 && ran <= 6)
edcount++; 
if (ran >6 && ran <= 9)
ekcount++;
if(userh==0)
{
GList.addGameItem("you have died. Thank you for playing");
  GameParagraph.innerText ="you have died. Thank you for playing";
  localStorage.clear();
}
  
  if(enemyh==0 )
  {
GList.addGameItem("you have triumphed. Thank you for playing");
  GameParagraph.innerText ="you have triumphed. Thank you for playing";
  localStorage.clear();
  }

  if(edcount ==1 && dcount ==1) 
  {
  GList.addGameItem("you both dodge");
    GameParagraph.innerText ="you both dodge";
    dcount =0; 
    pcount =0; 
    edcount =0; 
    epcount =0; 
    ekcount =0;
  }
if(epcount ==1 && dcount ==1) 
{
GList.addGameItem("They throw a punch but you narrowly dodge");
  GameParagraph.innerText ="They throw a punch but you narrowly dodge";
  dcount =0; 
  pcount =0; 
  edcount =0; 
  epcount =0; 
  ekcount =0;
}
if(epcount ==1 && pcount ==1) 
{

  userh = userh-1; 
  enemyh = enemyh-1; 
  dcount =0; 
  pcount =0; 
  edcount =0; 
  epcount =0; 
  ekcount =0; 
  GList.addGameItem("you both throw a punch, hitting eachothers faces and then both recoil, Your Health: " + userh + " Enemy Health: " + enemyh);
  GameParagraph.innerText =" you both throw a punch, hitting eachothers faces and then both recoil ,Your Health: " + userh + " Enemy Health: " + enemyh;
}
if(ekcount ==1 && dcount ==1) 
{
  
  userh = userh-2; 
  dcount =0; 
  pcount =0; 
  edcount =0; 
  epcount =0; 
  ekcount =0;
  GList.addGameItem("They kick you and it hits you in your chest, Your Health: " + userh + " Enemy Health: " + enemyh);
  GameParagraph.innerText ="They kick you and it hits you in your chest, Your Health: " + userh + " Enemy Health: " + enemyh;
 
}
if(ekcount ==1 && kcount ==1) 
{

  userh=userh-1; 
  enemyh=enemyh-1; 
  dcount =0; 
  pcount =0; 
  edcount =0; 
  epcount =0; 
  ekcount =0;
  GList.addGameItem("They kick you and you kick them and you both hit each others shins, Your Health: " + userh + " Enemy Health: " + enemyh);
  GameParagraph.innerText ="They kick you and you kick them and you both hit each others shins, Your Health: " + userh + " Enemy Health: " + enemyh;
 
}
if(edcount ==1 && kcount ==1) 
{

  enemyh==enemyh-2; 
  dcount =0; 
  pcount =0; 
  edcount =0; 
  epcount =0; 
  ekcount =0;
  GList.addGameItem("They Dodge and you kick them squarely in the chest, Your Health: " + userh + " Enemy Health: " + enemyh);
  GameParagraph.innerText ="They Dodge and you kick them squarely in the chest, Your Health: " + userh + " Enemy Health: " + enemyh;
}
if(edcount ==1 && pcount ==1) 
{

  dcount =0; 
  pcount =0; 
  edcount =0; 
  epcount =0; 
  ekcount =0;
  GList.addGameItem("They Dodge and you punch above them,Your Health: " + userh + " Enemy Health: " + enemyh);
  GameParagraph.innerText ="They Dodge and you punch above them, Your Health: " + userh + " Enemy Health: " + enemyh;
 
}
if(epcount ==1 && kcount ==1) 
{

  dcount =0; 
  pcount =0; 
  edcount =0; 
  epcount =0; 
  ekcount =0;
  enemyh=enemyh-2;
  userh=userh-2;
  GList.addGameItem("they punch you and you kick them, Your Health: " + userh + " Enemy Health: " + enemyh);
  GameParagraph.innerText ="they punch you and you kick them Your Health: " + userh + " Enemy Health: " + enemyh;
 
}
if(ekcount ==1 && pcount ==1) 
{

  dcount =0; 
  pcount =0; 
  edcount =0; 
  epcount =0; 
  ekcount =0;
  enemyh=enemyh-2;
  userh=userh-2;
  GList.addGameItem("they kick you and you punch them, Your Health: " + userh + " Enemy Health: " + enemyh);
  GameParagraph.innerText ="they kick you and you punch them Your Health: " + userh + " Enemy Health: " + enemyh;
 
}
 

}
function battlesetup()
{
  GList.addGameItem("You are ambushed by a humanoid wearing a bandana over half of their face. They throw a punch at you and you narrowly dodge");
    GameParagraph.innerText ="You are ambushed by a humanoid wearing a bandana over half of their face. They throw a punch at you and you narrowly dodge"; 

    battlelogic();
}
function hidelogic()
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
    if (KickButton.style.display === "none") {
      KickButton.style.display = "block";
    } else {
      KickButton.style.display = "none";
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
   hidelogic(); 
   battlesetup();
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
  PunchButton.addEventListener(`click`, function () {
   
   // GList.addGameItem("You throw a punch.");
    //GameParagraph.innerText = ""; 
    //GameParagraph.innerText = "You throw a punch."; 
     
     // console.log(GList.GameItemLog);
     
    
     window.localStorage.setItem("game",JSON.stringify(GList.GameItemLog));
       console.log(window.localStorage.getItem("game"));
       GameParagraph.innerText =window.localStorage.getItem("game");
       pcount++; 
       battlelogic();
    });
    DodgeButton.addEventListener(`click`, function () {
   
      // GList.addGameItem("You throw a punch.");
       //GameParagraph.innerText = ""; 
       //GameParagraph.innerText = "You throw a punch."; 
        
        // console.log(GList.GameItemLog);
        
       
        window.localStorage.setItem("game",JSON.stringify(GList.GameItemLog));
          console.log(window.localStorage.getItem("game"));
          GameParagraph.innerText =window.localStorage.getItem("game");
          dcount++; 
          battlelogic();
       });
       KickButton.addEventListener(`click`, function () {
   
        // GList.addGameItem("You throw a punch.");
         //GameParagraph.innerText = ""; 
         //GameParagraph.innerText = "You throw a punch."; 
          
          // console.log(GList.GameItemLog);
          
         
          window.localStorage.setItem("game",JSON.stringify(GList.GameItemLog));
            console.log(window.localStorage.getItem("game"));
            GameParagraph.innerText =window.localStorage.getItem("game");
            kcount++; 
            battlelogic();
         });
LogButton.addEventListener(`click`, function () {
GameParagraph.innerText = ""; 
GameParagraph.innerText = GList.displayGameList(); 

  
});
