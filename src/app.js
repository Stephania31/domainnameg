/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  console.log("Hello Rigo from the console!");
  console.log("Hello World");
};

let pronouns = ["the", "our"];
let adjectives = ["great", "big"];
let nouns = ["jogger", "racoon"];
let domain = [".com", ".net", ".us", ".uy"];

let addLista = document.querySelector(".cambioDominio");

window.cambioDominio = function() {
  addLista.innerHTML = ""; // Limpiar la lista antes de generar las combinaciones

  for (
    let pronounsIndex = 0;
    pronounsIndex < pronouns.length;
    pronounsIndex++
  ) {
    for (
      let adjectivesIndex = 0;
      adjectivesIndex < adjectives.length;
      adjectivesIndex++
    ) {
      for (let nounsIndex = 0; nounsIndex < nouns.length; nounsIndex++) {
        for (let domainIndex = 0; domainIndex < domain.length; domainIndex++) {
          let dominioGenerado =
            pronouns[pronounsIndex] +
            adjectives[adjectivesIndex] +
            nouns[nounsIndex] +
            domain[domainIndex];

          let lineaFinal = document.createElement("li");
          let texto = document.createTextNode(dominioGenerado);
          lineaFinal.appendChild(texto);
          addLista.appendChild(lineaFinal);
        }
      }
    }
  }
};
