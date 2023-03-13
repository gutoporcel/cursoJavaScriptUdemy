let elemento = document.querySelector("#titulo-principal");

console.log("Largura: " + elemento.offsetWidth);// considera as bordas
console.log("Altura: " +elemento.offsetHeight);

console.log("Largura: " + elemento.clientWidth);//nao considera as bordas
console.log("Altura: " +elemento.clientHeight);