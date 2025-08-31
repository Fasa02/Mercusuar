// Galeri Slider
const slides = document.querySelectorAll(".slides img");
let slideIndex = 0;
let intervalId = null;

document.addEventListener("DOMContentLoaded", () => {
    if (slides.length > 0) {
        slides[slideIndex].classList.add("displaySlide");
        intervalId = setInterval(nextSlide, 5000);
    }
});

function showSlide(index) {
    slideIndex = (index + slides.length) % slides.length;
    slides.forEach(slide => slide.classList.remove("displaySlide"));
    slides[slideIndex].classList.add("displaySlide");
}

function nextSlide() {
    showSlide(++slideIndex);
}

function prevSlide() {
    clearInterval(intervalId);
    showSlide(--slideIndex);
}

// Menu Toggle
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    header.classList.toggle("sticky", window.scrollY > 0);
});

function toggleMenu() {
    const menuToggle = document.querySelector('.menuToggle');
    const navigation = document.querySelector('.navigation');
    menuToggle.classList.toggle('active');
    navigation.classList.toggle('active');
}

// Link Hover Effects
const links = document.querySelectorAll('.links a');

links.forEach(link => {
    link.addEventListener('mouseenter', () => link.classList.add('active'));
    link.addEventListener('mouseleave', () => link.classList.remove('active'));
});

// Slideshow
let slideIndex2 = 1;
showSlides(slideIndex2);

function plusSlides(n) {
    showSlides(slideIndex2 += n);
}

function currentSlide(n) {
    showSlides(slideIndex2 = n);
}

function showSlides(n) {
    const slides = document.getElementsByClassName("slides");
    Array.from(slides).forEach(slide => slide.style.display = "none");
    slideIndex2 = (n - 1 + slides.length) % slides.length + 1;
    slides[slideIndex2 - 1].style.display = "block";
    setTimeout(() => showSlides(slideIndex2 + 1), 4000);
}
