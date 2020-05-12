//  Card-Grid JS File

// Automated Bootstrap Card Format Grid Creation for Project Items
// Automated Insertion of Card Animation CSS Class for Project Items

//GLOBAL Variables
const GRID_CONTAINER = document.body.querySelector(".project-list .container"); //Grid Container Element
const GRID_ITEMS = document.body.querySelectorAll("section .project-item"); // List of Project Items
var ANIMATION_DELAY = 0; //Initalize animation delay counter

GRID_ITEMS.forEach(subCardClasses); //Adds Card subclasses for each child element in each Project Item

// DOM ELEMENT CREATION
var rowNode = document.createElement("DIV"); // Create Grid Row Div Element Node
var rowAtt = document.createAttribute("class");
rowAtt.value = "row";
rowNode.setAttributeNode(rowAtt);

var colNode = document.createElement("DIV"); // Create Grid Column Div Element Node
var colAtt = document.createAttribute("class");
colAtt.value = "col-lg";
colNode.setAttributeNode(colAtt);

var cardNode = document.createElement("DIV"); // Create Card Div Element Node
var cardAtt = document.createAttribute("class");
cardAtt.value = "card text-center text-white bg-success border-dark shadow-lg startup-ani";
cardNode.setAttributeNode(cardAtt);

var cardBodyNode = document.createElement("DIV"); // Create Card-Body Div Element Node
var cardBodyAtt = document.createAttribute("class");
cardBodyAtt.value = "card-body";
cardBodyNode.setAttributeNode(cardBodyAtt);

tempItemNode = colNode.cloneNode(true); //Combine all elements that go on each Project Item into one ItemNode
tempItemNode.appendChild(cardNode);
tempItemNode.childNodes[0].appendChild(cardBodyNode);

var tempElementList = []; // Used to organize the Rows of Project Items.

// MAIN
for (let i = 0; i < GRID_ITEMS.length; i++) {
  var tempCol = tempItemNode.cloneNode(true); //Create a new Column element from copying the ItemNode template
  addAnimation(tempCol.childNodes[0]);
  tempCol.childNodes[0].childNodes[0].appendChild(GRID_ITEMS[i]); // Append a Project Item as child to tempCol element. [ColNode -> CardNode (child 0 of ColNode) -> CardBody (child 0 of Card Node) -> Project Item]
  tempElementList.push(tempCol); // Store the updated Column element.

  if (i % 2 == 1 || ((i == GRID_ITEMS.length-1) && (GRID_ITEMS.length % 2 == 1))) { // Setting number of columns per row. [2 Columns of 1 Project Item per Row.]
    var tempRow = rowNode.cloneNode(true); //Create a new Row from copying the template Row Element Node
    tempElementList.reverse(); // Flip Array because the array pushed the Column elements onto list in reverse order.
    while (tempElementList.length != 0) { //Append Column Elements from List to Row element. Remove the appended Column elements from list.
      tempRow.appendChild(tempElementList[tempElementList.length-1]);
      tempElementList.pop();
    }
    GRID_CONTAINER.appendChild(tempRow); //Append Row element to the Grid Container Element.
  }

}

// AUXILLARY FUNCTIONS
function addAnimation(item) { // Adds Cascading Animation Delay by changing ANI-DELAY CSS Property on item
  ANIMATION_DELAY += 0.25;
  item.style.setProperty("animation-delay",  ANIMATION_DELAY + "s")
}

function subCardClasses (element, index, array) { //Adds Card-Title & Card-Text subclasses to child elements in Project Item
  element.childNodes.forEach(function(item){
    if (item.nodeName == "P") {
      item.classList.add("card-text");
    }
    else if (item.nodeName == "H3") {
      item.classList.add("card-title");
    }
  });

}
