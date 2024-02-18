window.onload = () => {
  function handleScroll() {
    if (window.scrollY > underHeader.offsetTop - header.offsetHeight) {
      header.classList.add("sticky");
      navBtn.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
      navBtn.classList.remove("sticky");
    }
  }
  //funzione per transizione header bg-color
  const header = document.querySelector("header");
  const underHeader = document.querySelector(".div-trending");
  const navBtn = document.querySelector(".nav-btn");
  window.addEventListener("scroll", handleScroll);

  // funzione per SVG

  function animateSvg() {
    let casualElement = svgElements[Math.floor(Math.random() * svgElements.length)];
    casualElement.setAttribute("opacity", Math.floor(Math.random() * 2));
  }
  const svgElements = document.querySelectorAll(".SVG svg g[stroke-linecap]");

  setInterval(animateSvg, 10);
};
