var photos = [
  "images/photo1.jpg",
  "images/photo2.jpg",
  "images/photo3.jpg",
  "images/photo4.jpg"
];
var i = 0;

setInterval(function () {
  i = i + 1;
  if (i >= photos.length) {
    i = 0;
  }
  document.getElementById("slide").src = photos[i];
}, 2000);
