var menuItems = ["Home", "About", "Contact", "Location", "TEST"];
var subMenuItems = [
  "Sub Item 1",
  "Sub Item 2",
  "Sub Item 3",
  "Sub Item 4",
  "BLA"
];

/* function crateMenu(menuItems) {
  var menuHTML = "<ul class='drop-down'>";
  for (var i = 0; i < menuItems.length; i++) {
    menuHTML += "<li class='menu-item'>" + menuItems[i] + "</li>";
  }
  menuHTML += "</ul>";
  return menuHTML;
} */

function createMenuElement(menuItems, menu_item_class, menu_class) {
  var menu = document.createElement("ul");
  menu.setAttribute("class", menu_class);
  for (var i = 0; i < menuItems.length; i++) {
    var menu_item = document.createElement("li");
    var text = document.createTextNode(menuItems[i]);
    menu_item.setAttribute("class", menu_item_class);
    menu_item.appendChild(text);
    menu.appendChild(menu_item);
  }
  return menu;
}
/* function crateSubMenu(menuItems) {
  var menuHTML = "<ul class='sub-menu'>";
  for (var i = 0; i < menuItems.length; i++) {
    menuHTML += "<li class='sub-menu-item'>" + menuItems[i] + "</li>";
  }
  menuHTML += "</ul>";
  return menuHTML;
}
 */
function addMenu(parent, menuItems, menu_item_class, menu_class) {
  parent.appendChild(createMenuElement(menuItems, menu_item_class, menu_class));
}

/* function addSubMenu(menuItems, place) {
  var parent = document.querySelectorAll(".menu-item")[place];
  var menu = document.createElement("DIV");
  menu.innerHTML = crateSubMenu(menuItems);
  parent.appendChild(menu);
} */

var mainMenuParent = document.querySelector("#menu");
addMenu(mainMenuParent, menuItems, "menu-item");

var subMenuParent2 = document.querySelectorAll(".menu-item")[0];
addMenu(subMenuParent2, subMenuItems, "sub-menu-item", "sub-menu");

var subMenuParent1 = document.querySelectorAll(".menu-item")[1];
addMenu(subMenuParent1, subMenuItems, "sub-menu-item", "sub-menu");

var subMenuParent3 = document.querySelectorAll(".menu-item")[2];
addMenu(subMenuParent3, subMenuItems, "sub-menu-item", "sub-menu");

/* function buildSelect(options, parent) {
  var select = document.createElement("select");

  for (var i = 0; i < options.length; i++) {
    var option = document.createElement("option");
    var text = document.createTextNode(options[i]);

    option.appendChild(text);

    select.appendChild(option);
  }

  parent.appendChild(select);
}
 */
var testDiv = document.createElement("div");
testDiv.setAttribute("class", "testing");
document.querySelector("body").appendChild(testDiv);

function addText(sampleText) {
  changingColor.textContent = sampleText;
}

var changingColor = document.querySelector(
  ".testing"
); /*  changingColor.addEventListener(
  "mouseover",
  function() {
    changingColor.textContent = "ON";
  }
);
changingColor.addEventListener("mouseout", function() {
  changingColor.textContent = "OFF";
}); */ //MALI LEPO REKO

/* changingColor.addEventListener("click",function() {addText("12")}); */
/* swapped = true;
setInterval(function() {
  if (swapped) {
    changingColor.style.visibility = "hidden";
    swapped = false;
  } else {
    changingColor.style.visibility = "visible";
    swapped = true;
  }
}, 100); */

setInterval(function() {
  var red = Math.floor(Math.random() * 255);
  var green = Math.floor(Math.random() * 255);
  var blue = Math.floor(Math.random() * 255);
  var color = "rgb(" + red + "," + green + "," + blue + ")";
  console.log(color);
  changingColor.style.backgroundColor = color;
  changingColor.textContent = color;
}, 1000);
