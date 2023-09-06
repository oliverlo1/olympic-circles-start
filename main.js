// Olympic Rings Start Code

// Canvas Setup
let cnv = document.getElementById("my-canvas");
let ctx = cnv.getContext("2d");
cnv.width = 440;
cnv.height = 250;

// Call draw function once all page resources have loaded
window.addEventListener("load", draw);

function draw() {
  // Background
  ctx.fillStyle = "#eee";
  ctx.fillRect(0, 0, cnv.width, cnv.height);

  // Circle Line Width
  ctx.lineWidth = 8;
  strokeCircle(100, 100, 50, "blue");
  strokeCircle(160, 150, 50, "yellow");
  strokeCircle(220, 100, 50, "black");
  strokeCircle(280, 150, 50, "green");
  strokeCircle(340, 100, 50, "red");
}

// Draw a stroke circle at center (x, y) with a radius of r
function strokeCircle(x, y, r, color) {
  ctx.strokeStyle = color;
  ctx.beginPath();
  ctx.arc(x, y, r, 0, 2 * Math.PI);
  ctx.stroke();
}