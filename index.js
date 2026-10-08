const btn = document.querySelector("#light-mode");
const theme = document.querySelector("#theme-link");

btn.addEventListener("change", function () {
  if (theme.getAttribute("href") == "index.css") {
    theme.href = "light-theme.css";
  } else {
    theme.href = "index.css";
  }
});
