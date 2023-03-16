let index = 0;

// This function invoked to be able to see an image when the app runs for the first time
showImage(index);

function showImage(i) {
  index += i;

  const images = document.getElementsByClassName("image");
  const dots = document.getElementsByClassName("dot");

  /* Every time the user click next or prev button, all the images are going to reappear in the page
  To prevent it , we blocked them all one by one */
  for (let i = 0; i < images.length; i++) {
    images[i].style.display = "none";
  }

  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  if (index > images.length - 1) index = 0;
  if (index < 0) index = images.length - 1;

  images[index].style.display = "block";
  dots[index].className += " active";
}
