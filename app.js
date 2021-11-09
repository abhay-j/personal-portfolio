const switchElement = document.querySelector(".switch");
switchElement.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});
console.log("helo");
//////////////////////////////////////////////
//smooth scrolling
const contactMe = document.querySelector(".contact-me");
const footer = document.querySelector("#footer");

contactMe.addEventListener("click", (e) => {
  e.preventDefault();
  footer.scrollIntoView({
    behavior: "smooth",
    block: "end",
    inline: "nearest",
  });
});
