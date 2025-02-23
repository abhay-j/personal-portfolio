// const switchElement = document.querySelector(".switch");
// switchElement.addEventListener("click", () => {
//   document.body.classList.toggle("dark");
// });
// console.log("helo");
// //////////////////////////////////////////////
// //smooth scrolling
// const contactMe = document.querySelector(".contact-me");
// const footer = document.querySelector("#footer");

// contactMe.addEventListener("click", (e) => {
//   e.preventDefault();
//   footer.scrollIntoView({
//     behavior: "smooth",
//     block: "end",
//     inline: "nearest",
//   });
// });
 // Add smooth scrolling to all links
 document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});

// Add fade-in animation on scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
      if (entry.isIntersecting) {
          entry.target.style.opacity = 1;
          entry.target.style.transform = 'translateY(0)';
      }
  });
});

document.querySelectorAll('section').forEach((section) => {
  section.style.opacity = 0;
  section.style.transform = 'translateY(20px)';
  section.style.transition = 'all 0.6s ease-out';
  observer.observe(section);
});