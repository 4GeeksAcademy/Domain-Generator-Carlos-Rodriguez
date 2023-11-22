/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let pronoun = ["the", "our", "mine"];
  let adj = ["great", "big", "small"];
  let noun = ["jogger", "racoon", "orange"];
  let domain = [".com", ".net", ".es"];
  let domains = "";

  pronoun.forEach(i => {
    adj.forEach(b => {
      noun.forEach(c => {
        domain.forEach(d => {
          domains += "<li class='text-danger'>" + i + b + c + d + "</li>";
        });
      });
    });
  });

  document.querySelector("#listaDominios").innerHTML = domains;
};
