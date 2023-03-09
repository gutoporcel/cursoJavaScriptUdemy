let novoElemento = document.createElement("p");
let texto = document.createTextNode("algum texto");

novoElemento.appendChild(texto)

let p = document.querySelector("#paragrafo-principal");
let pai  = p.parentNode;

pai.appendChild(novoElemento);
