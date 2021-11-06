localStorage;
const AddButton = document.getElementById('addbutton');
const ClearButton = document.getElementById('clearbutton');

const ListParagraph = document.getElementById('shoppinglist');
const itemlist = document.getElementById('itemlist');
let SList = new ShoppingList(""); 
window.addEventListener('load', (event) => {
    if(window.localStorage.getItem("list") !==null)  
    {
(ListParagraph.innerText =window.localStorage.getItem("list"));
var str1 = window.localStorage.getItem("list");
ListParagraph.innerText= window.localStorage.getItem("list") + " " + SList.ShoppingListLog; 
    }
});

AddButton.addEventListener(`click`, function () {
    var str= itemlist.value;

   var val = str;
  SList.addListItem(str);
  //ListParagraph.innerText =window.localStorage.getItem("list"); 
  console.log(SList.ShoppingListLog);
 //ListParagraph.innerText = window.localStorage.getItem("list") + " " + SList.ShoppingListLog;

 window.localStorage.setItem("list",JSON.stringify(SList.ShoppingListLog));
   console.log(window.localStorage.getItem("list"));
   ListParagraph.innerText =window.localStorage.getItem("list");
});
ClearButton.addEventListener(`click`, function () {
    localStorage.clear();
    SList.clearList(); 
    ListParagraph.innerText = ""; 
    count =0;
});
