document.addEventListener("DOMContentLoaded", function() {
    const slides = document.querySelector(".slides");
    const slideWidth = slides.querySelector(".slide").offsetWidth;
    let currentIndex = 0; 
  
    function nextSlide() {
      currentIndex = (currentIndex + 1) % slides.children.length;
      slides.scrollTo({
        left: currentIndex * slideWidth,
        behavior: "smooth"
      });
    }
  
    setInterval(nextSlide, 3000); 
  });
  