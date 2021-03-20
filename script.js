const btnNext = document.querySelector('.next');
const btnPrev = document.querySelector('.prev');
const slides = document.querySelectorAll('.testimonial');

let currentSlide = 0;

btnNext.addEventListener('click', function () {
  if (currentSlide >= slides.length - 1) {
    currentSlide = 0;
  } else {
    currentSlide++;
  }
  showSlide();
});

btnPrev.addEventListener('click', function () {
  if (currentSlide <= 0) {
    currentSlide = slides.length - 1;
  } else {
    currentSlide--;
  }
  showSlide();
});

function showSlide() {
  slides.forEach((slide) => {
    slide.classList.remove('active');
  });
  slides[currentSlide].classList.add('active');
}
