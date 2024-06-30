//btn
const btn = document.querySelector(".btn");
//close-icon
const closeIcon = document.querySelector(".close-icon");
//trailer container
const trailerContainer = document.querySelector(".trailer-container");
//Video
const Video = document.querySelector("video");

btn.addEventListener("click", () => {
  trailerContainer.classList.remove("active");
});

closeIcon.addEventListener("click", () => {
  trailerContainer.classList.add("active");
  Video.pause();
  Video.currentTime = 0;
});

console.log(closeIcon);
