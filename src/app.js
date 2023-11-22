/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function(domainname) {
  //write your code here
  let pronoun = ["the", "our", "mine"];
  let adj = ["great", "big", "small"];
  let noun = ["jogger", "racoon", "orange"];
  let domain = [".com", ".net", ".es"];

  let domains = "";

  for (let i = 0; i < pronoun.length; i++) {
    for (let b = 0; b < adj.length; b++) {
      for (let c = 0; c < noun.length; c++) {
        for (let d = 0; d < domain.length; d++) {
          domains +=
            "<li>" + pronoun[i] + adj[b] + noun[c] + domain[d] + "</li>";
        }
      }
    }
  }

  document.querySelector("#listaDominios").innerHTML = domains;
};
