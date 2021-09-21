/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];
  let extention = [".com", ".net", ".us", ".io", ".tk", ".cn", ".org"];

  for (let index = 0; index < pronoun.length; index++) {
    let pronombre = pronoun[index];
    for (let i = 0; i < adj.length; i++) {
      let adjetivo = adj[i];
      for (let j = 0; j < noun.length; j++) {
        let sustantivo = noun[j];
        for (let z = 0; z < extention.length; z++) {
          let extension = extention[z];

          console.log(pronombre, adjetivo, sustantivo, extension);

          let add = document.createElement("p");
          const node = document.createTextNode(
            pronombre + adjetivo + sustantivo + extension
          );
          add.appendChild(node);

          let listado = document.getElementById("list");
          listado.appendChild(add);
        }
      }
    }
  }
};
