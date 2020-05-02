function draw() {}
const canvas = document.getElementById("canvas");
if (canvas.getContext) {
  ctx = canvas.getContext("2d");
} else {
  const para = document.querySelector(".unsupported");
  para.textContent = `Your browser does not support HTML5 Canvas`;
}