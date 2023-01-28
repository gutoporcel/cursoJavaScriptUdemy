/*
Escreva uma função que receba um numero  e o decremete  de  1 em 1 com loop 
alem disso imprima somente  os  numeros pares  mo console;
*/ 
console
function decremetaNumero(num){

   for (let i = num ; i >= 0; i--) {

      if(i%2 ==0){

         console.log( `Numero: ${i}`);

      }
   
   }

}

decremetaNumero(20);
decremetaNumero(50);
decremetaNumero(200);

