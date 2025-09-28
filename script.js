// Placeholder for AI features like chatbot, personalization, etc.

// console.log("AI Landing Page Loaded");

// document.addEventListener("DOMContentLoaded", function () {
//   const scrollTitles = document.querySelectorAll(".scroll-to-top");
//   scrollTitles.forEach((title) => {
//     title.addEventListener("click", function () {
//       document.getElementById("top-section").scrollIntoView({
//         behavior: "smooth"
//       });
//     });
//   });
// });



// Mobile menu toggle
    const menuToggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector("nav");

  menuToggle.addEventListener("click", () => {
    nav.classList.toggle("active");
  });



   // Scroll to top button
  const scrollTopBtn = document.getElementById('scrollTopBtn');
  if (scrollTopBtn) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
        scrollTopBtn.classList.add('show');
      } else {
        scrollTopBtn.classList.remove('show');
      }
    });

    scrollTopBtn.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }