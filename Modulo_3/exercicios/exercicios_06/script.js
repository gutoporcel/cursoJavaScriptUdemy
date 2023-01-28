function verificaDados(tipo) {
 if (tipo == Number) {

    console.log(`O dado inderido é: ${typeof(tipo) }`);

 }else if(tipo == Boolean){

    console.log(`O dado inderido é: ${typeof(tipo) }`);

 }else if (tipo == String){

    console.log(`O dado inderido é: ${typeof(tipo) }`);
 }else{

    console.log(`O dado inderido é: ${typeof(tipo) }`);
 }

    
}
// fucnçao refatorada
function verificaDados2(tipo) {

    console.log(`O dado inderido é: ${typeof(tipo) }`);
   
}

verificaDados("ola mundo");
verificaDados(10);
verificaDados(true);

verificaDados2("ola mundo");
verificaDados2(10);
verificaDados2(true);

