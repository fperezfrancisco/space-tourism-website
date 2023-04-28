/** mobile menu actions*/

const mobileNav = document.querySelector(".mobileNav");
/*const overlay = document.querySelector(".overlay");*/
const closeBtn = document.querySelector(".mobileCloseBtn");
const openBtn = document.querySelector(".menuOpen");

console.log("entered js");

function toggleMenu() {
  mobileNav.classList.toggle("active");
  //overlay.classList.toggle("active");
  openBtn.classList.toggle("hidden");
}

closeBtn.addEventListener("click", toggleMenu);
openBtn.addEventListener("click", toggleMenu);
