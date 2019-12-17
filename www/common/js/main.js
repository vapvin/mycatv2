//Slides

const carouselSlide = document.querySelector(".slide_container");
const carouselItems = document.querySelectorAll(".slide_items");

//Btn

const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

// Counter

let count = 1;

const size = carouselItems[0].clientWidth;

carouselSlide.style.transform = `translateX(${-size * count}px)`;

const nextFunc = () => {
  if (count >= carouselItems.length - 1) return;
  carouselSlide.style.transition = "transform 0.5s ease-in-out";
  count++;
  carouselSlide.style.transform = `translateX(${-size * count}px)`;
};

const prevFunc = () => {
  if (count <= 0) return;
  carouselSlide.style.transition = "transform 0.5s ease-in-out";
  count--;
  carouselSlide.style.transform = `translateX(${-size * count}px)`;
};

next.addEventListener("click", nextFunc);
prev.addEventListener("click", prevFunc);

carouselSlide.addEventListener("transitionend", () => {
  if (carouselItems[count].id === "lastClone") {
    carouselSlide.style.transition = "none";
    count = carouselItems.length - 2;
    carouselSlide.style.transform = `translateX(${-size * count}px)`;
  }

  if (carouselItems[count].id === "firstClone") {
    carouselSlide.style.transition = "none";
    count = carouselItems.length - count;
    carouselSlide.style.transform = `translateX(${-size * count}px)`;
  }
});
