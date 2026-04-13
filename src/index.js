import "./styles.css";
import { menu } from "./menu";
import { home } from "./home";
import { about } from "./about";

(() => {
  const nav = document.querySelector("nav");

  const navClick = (e) => {
    const content = document.querySelector("#content");
    content.innerHTML = "";
    if (e.target.textContent === "Menu") {
      menu();
    } else if (e.target.textContent === "Home") {
      home();
    } else if (e.target.textContent === "About") {
      about();
    }
  };
  nav.addEventListener("click", navClick);
})();
