let nome = "jose";
for(let i = 0; i < 10 ; i=i+1){
   
   if(i==3){
      nome = "joseAugusto";
   }

   if(i==5 && nome== "joseAugusto"){
      console.log("O nome é joseAugusto,  pode parar")
      break;
   }
   console.log (i);
}