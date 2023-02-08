/* desafio calculadora 
* crie um obje calculadora
* que tem os seguintes metodos :somar, subtrair. multiplicar  e dividir
* os metodos  devem aceitar dois parametros
*ultilize cada um dos metodos e imprima os valores no console 

*/

//let calculadora ={somar,subtrair, multiplicar, dividir};
let calculadora ={

 somar: function (n1,n2){ return (n1+n2)},
 subtrair: function (n1,n2){return (n1-n2)},
 multiplicar: function(n1,n2){return(n1*n2)},
 dividir: function(n1,n2){ return(n1/n2)}
};



 console.log(calculadora.somar(3,4));
 console.log(calculadora.multiplicar(3,4));
 console.log(calculadora.dividir(3,4));
 console.log(calculadora.subtrair(3,4));