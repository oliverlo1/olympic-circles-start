// Canvas Template

// Canvas Setup
let cnv = document.getElementById("my-canvas");
let ctx = cnv.getContext("2d");
cnv.width = 600;
cnv.height = 400;

// Call draw function once all page resources have loaded
window.addEventListener("load", draw);

function draw() {
  ctx.fillStyle = "green";
  ctx.fillRect(50, 100, 200, 80);

  // Redraw
  requestAnimationFrame(draw);
}
