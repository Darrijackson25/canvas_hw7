var c = document.getElementById("canvas");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.moveTo(10, 300);
ctx.lineTo(300, 300);
ctx.lineTo(-30, -50);
ctx.lineTo(10, 300);
ctx.stroke();