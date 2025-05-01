async function loadContent() {
  await fetch("components/nav.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("nav").innerHTML = data;
    });

  await fetch("components/hero.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("hero").innerHTML = data;
    });
}

loadContent();
