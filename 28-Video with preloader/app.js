const btn = document.querySelector(".switch-btn");
const video = document.querySelector(".video-container");

// The toggle was not used instead of add and remove because we need to add pause and play methods for the video
btn.addEventListener("click", function () {
  if (!btn.classList.contains("slide")) {
    btn.classList.add("slide");
    video.pause();
  } else {
    btn.classList.remove("slide");
    video.play();
  }
});

// Why do we use load event instead of DOMContentLoaded in this project?

/* The DOMContentLoaded event fires when the initial HTML document has been completely loaded and parsed, 
without waiting for stylesheets, images, and subframes to finish loading. */

/* The load event is fired when the whole page has loaded, 
including all dependent resources such as stylesheets and images. */

// preloader
const preloader = document.querySelector(".preloader");
window.addEventListener("load", function () {
  preloader.classList.add("hide-preloader");
});
