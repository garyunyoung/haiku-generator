function show() {

  document.getElementById("hide").classList.add("show");

  if (document.getElementById("hide").classList.contains("show")) {
    document.getElementById("show-more").classList.add("hide");
    document.getElementById("show-less").classList.remove("hide");
  }
}

function showLess() {
  document.getElementById("hide").classList.remove("show");

  if (document.getElementById("hide").classList.contains("row")) {
    document.getElementById("show-more").classList.remove("hide");
    document.getElementById("show-less").classList.add("hide");
  }
}

function showWhatIs() {
  document.querySelector(".about-des").classList.add("hide");
  document.querySelector(".what-is-haiku").classList.remove("hide");
  document.querySelector(".what-is-haiku").setAttribute("id", "typewriter");
}

function showAbout() {
  document.querySelector(".about-des").classList.remove("hide");
  document.querySelector(".what-is-haiku").classList.add("hide");
}
