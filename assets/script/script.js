function menuShow() {
  var menu = document.getElementById("nav-bar-mobile");
  if (menu.style.opacity !== "1") {
    menu.style.visibility = "visible";
    setTimeout(function () {
      menu.style.opacity = "1";
    }, 50); // Espera o navegador renderizar o visibility: visible;
  } else {
    menu.style.opacity = "0";
    setTimeout(function () {
      if (menu.style.opacity !== "1") menu.style.visibility = "hidden";
    }, 500); // Espera a transição terminar para esconder o elemento
  }
}

function checkScreenSize() {
  var menu = document.getElementById("nav-bar-mobile");
  if (window.innerWidth >= 650) {
    menu.style.opacity = "0";
    setTimeout(function () {
      if (menu.style.opacity !== "1") menu.style.visibility = "hidden";
    }, 500); // Espera a transição terminar para esconder o elemento
  }
}

var links = document.querySelectorAll("#nav-bar-mobile a");
for (var i = 0; i < links.length; i++) {
  links[i].addEventListener("click", menuShow);
}

window.addEventListener("resize", checkScreenSize);
