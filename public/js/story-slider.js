const carousel = document.querySelector(".slide");

const dragging = (e) => {
  carousel.scrollLeft = e.pageX;
}

carousel.addEventListener("mousemove", dragging);