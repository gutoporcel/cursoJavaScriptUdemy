function soma(a,b){

     if (a== undefined || b== undefined) {
          console.log(" a  função esta faltando argumentos");
          
     }else{

          return a+b;

     }

}


console.log(soma(1));
console.log(soma(1,5));

function saudacao(nome,idade){
     if (idade ===  undefined) {
          console.log("Ola "+ nome);
     }else{

          console.log("Ola "+ nome + " voce tem " + idade + " anos");

     }

}

saudacao("jose");
saudacao("jose",29);
