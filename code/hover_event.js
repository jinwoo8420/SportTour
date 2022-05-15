window.onload = function () {
  const btn = document.getElementById("football_img");
  const logo = document.getElementById("logo_img");

  btn.onmouseover = function () {
    logo.style.transform =
      "translate(1000px, -1000px) scale(0.6) rotate(200deg)";
  };
};
