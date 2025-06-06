// JavaScript for toggling the mobile menu
document.addEventListener('DOMContentLoaded', function() {
  // Toggle mobile menu
  document.getElementById('mobile-menu').addEventListener('click', function() {
    document.getElementById('nav-list').classList.toggle('active');
  });

  // Close menu when clicking on a link
  const navLinks = document.querySelectorAll('.list ul li a');
  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      if (window.innerWidth <= 700) {
        document.getElementById('nav-list').classList.remove('active');
      }
    });
  });
});


window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  if (window.scrollY > 50) {
    header.classList.add("fixed");
  } else {
    header.classList.remove("fixed");
  }
});

  let currentSlide = 0;
  const slides = document.querySelectorAll(".slide");
  const slidesWrapper = document.querySelector(".slides-wrapper");

  function updateSlide() {
    slidesWrapper.style.transform = `translateX(-${currentSlide * 100}%)`;
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    updateSlide();
  }

  function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    updateSlide();
  }

  // 👇 یہ لائن بہت اہم ہے: pehli image show kare start me hi
  window.addEventListener("load", updateSlide);



