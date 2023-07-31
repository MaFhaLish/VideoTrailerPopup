let btn = document.querySelector(".btn");
let showTrailer = document.querySelector(".active");
let hideTrailer = document.querySelector(".close-icon");
let video = document.querySelector("video");
let trailerContainer = document.querySelector(".trailer-container");

btn.onclick = function () {
  showTrailer.style.visibility = "visible";
};

hideTrailer.onclick = function () {
  showTrailer.style.visibility = "hidden";
  video.pause();
  video.currentTime = 0;
};
