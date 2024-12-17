document.querySelectorAll('.links a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(e.target.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth' });
  });
});
const skillsContainer = document.querySelector('.skills_container');
const leftArrow = document.querySelector('.left_arrow');
const rightArrow = document.querySelector('.right_arrow');

let currentPosition = 0;
const slideWidth = 340; // Adjust based on the skill box + gap width
const totalSlides = 20; // Total number of skill boxes

leftArrow.addEventListener('click', () => {
  currentPosition = (currentPosition - 1 + totalSlides) % totalSlides;
  skillsContainer.style.transform = `translateX(-${currentPosition * slideWidth}px)`;
});

rightArrow.addEventListener('click', () => {
  currentPosition = (currentPosition + 1) % totalSlides;
  skillsContainer.style.transform = `translateX(-${currentPosition * slideWidth}px)`;
});

document.addEventListener("DOMContentLoaded", function() {
  // Smooth scroll to Contact Section
  const contactLink = document.querySelector('a[href="#contact"]');

  contactLink.addEventListener("click", function(event) {
      event.preventDefault();
      document.querySelector("#contact").scrollIntoView({
          behavior: "smooth"
      });
  });
});
// Smooth scrolling
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});

