var c = document.getElementById("canvas");
var ctx = c.getContext("2d");
var canvas = document.getElementsByTagName("canvas")[0];

// adapter le canvas à la fenêtre
c.width = window.innerWidth;
c.height = window.innerHeight;

// afficher l'image
var i = 1;

function draw(event) {
  var mousex = event.clientX;
  var mousey = event.clientY;
  var img = document.getElementById("image_0" + i);
  ctx.drawImage(img, mousex - img.width / 4 / 2, mousey - img.height / 4 / 2, img.width / 4, img.height / 4);
  if (i < 4) {
    i++;
  } else {
    i = 1;
  }
}
