class ShoppingList {
    constructor(listitem){
    this.listitem =listitem;
    this.ShoppingListLog =[];
     //this.SArr = []; 
    }
  
addListItem(LItem){
this.ShoppingListLog.push(LItem);

  }
  clearList(){
      const newArr = []; 
      this.ShoppingListLog = newArr; 
  }
}