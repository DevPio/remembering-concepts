const main = () => {
  const content = document.getElementById("data");
  const button = document.querySelector("button");

  console.log(JSON.parse(content.text));

  function setColorBody() {
    document.body.style.background = "#00334c";
  }

  button.addEventListener("click", setColorBody);
};

window.addEventListener("DOMContentLoaded", main);
