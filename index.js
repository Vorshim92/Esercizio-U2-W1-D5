window.onload = () => {
  //funzione per transizione header bg-color
  var header = document.querySelector("header");
  var divSottostante = document.querySelector(".div-trending");

  window.addEventListener("scroll", function () {
    if (window.scrollY > divSottostante.offsetTop - header.offsetHeight) {
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    }
  });

  // funzione per SVG
  let svgTop = document.querySelector(".SVG > svg");
  let nodeOfM = svgTop.querySelectorAll("g[stroke-linecap]");

  const intervalTop = setInterval(changeM, 10);

  function changeM() {
    let casual = nodeOfM[Math.floor(Math.random() * nodeOfM.length)];
    casual.setAttribute("opacity", Math.floor(Math.random() * 2));
  }
};
