class Game {
    constructor(gameitem){
    this.gameitem =gameitem;
    this.GameItemLog =[];
     //this.SArr = []; 
    }
  
addGameItem(GItem){
this.GameItemLog.push(GItem);

  }
  displayGameList(){
     var x =""; 
     for (let i = 0; i < this.GameItemLog.length; i++)
      {
          x = x + this.GameItemLog[i] + "/n";
      }
      return x; 
  }
}