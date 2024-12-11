let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-images img');
slides[currentSlide].classList.add('active');

function changeSlide(direction) {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + direction + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
}
