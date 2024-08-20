const slides = document.querySelectorAll(".slides img");
const dots = document.querySelectorAll(".dot");
console.log(dots);
console.log(slides);
let currentDot = dots[0];
currentDot.classList.add("fill");
let currentSlide = slides[0];
currentSlide.classList.add("display");
let index = 0;


//function for back and forth
function displayNext() {
  currentSlide.classList.remove("display");
  currentDot.classList.remove("fill");
  index += 1;
  if (index >= 3) {
    index = 0;
  }
  currentSlide = slides[index];
  currentDot = dots[index];
  currentSlide.classList.add("display");
  currentDot.classList.add("fill");
}

document.querySelector(".right").addEventListener("click", displayNext);

function displayPrev() {
  currentSlide.classList.remove("display");
  currentDot.classList.remove("fill");
  index -= 1;
  if (index <= -1) {
    index = 2;
  }
  currentSlide = slides[index];
  currentDot = dots[index];
  currentSlide.classList.add("display");
  currentDot.classList.add("fill");
}
document.querySelector(".left").addEventListener("click", displayPrev);
setInterval(displayNext, 5000);