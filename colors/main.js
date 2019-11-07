var parent = document.querySelector("body");

/* function createDiv(color, number) {
  div = document.createElement("div");
  div.setAttribute("class", "card");
  div.textContent = number;
  div.style.backgroundColor = color;
  console.log(color);
  return div;
}

for (var i = 0; i <= 255; i += 2) {
  parent.appendChild(createDiv(generateRGB(i), i));
}

function generateRGB(n) {
  var rgb = "rgb(" + n + ",0,0)";
  return rgb;
}
var changingColor = document.createElement("div");
changingColor.setAttribute("class", "changer");
parent.appendChild(changingColor);
var shade = 0;
var down = true;
setInterval(function() {
  if (shade < 256 && down) {
    changingColor.style.backgroundColor = generateRGB(shade);
    shade++;
  } else {
    down = false;
    changingColor.style.backgroundColor = generateRGB(shade);
    shade--;
    if (shade === 0) {
      down = true;
    }
  }
}, 10);

var mouseChangesColor = document.createElement("div");
mouseChangesColor.setAttribute("class", "changer");
 */
function createDiv(color) {
  div = document.createElement("div");
  div.setAttribute("class", "card");
  div.style.backgroundColor = color;
  return div;
}

function generateRGB(r, g, b) {
  var rgb = "rgb(" + r + "," + g + "," + b + ")";
  return rgb;
}

for (var i = 0; i < 256; i += 5) {
  for (var j = 0; j < 256; j += 5) {
    for (var k = 0; k < 256; k += 5) {
      parent.appendChild(createDiv(generateRGB(i, j, k)));
    }
  }
}
