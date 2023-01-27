function multiplicarTresNumeros(x,y,z){
return x*y*z;
}

console.log(multiplicarTresNumeros(2,3,4));
const mult =multiplicarTresNumeros(4,5,6);
console.log(`O valor de multa é ${mult}` );

function podeDirigir(idade,cnh) {

    if (idade >= 18 &&  cnh==true) {
         console.log("Você pode dirigir");
    }else if (cnh==false) {
         console.log("Você nao pode dirigir");
    }else{
         console.log("Você nao pode dirigir");

    }

}

console.log(podeDirigir(13,true));
console.log(podeDirigir(19,false));
console.log(podeDirigir(22,1));
console.log(podeDirigir(19,0));