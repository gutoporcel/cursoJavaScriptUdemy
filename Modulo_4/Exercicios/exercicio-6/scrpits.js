let nomes =["jose","joao","cris","lucas"];
let nomes2 =[1,2,3,4,5,6,7];

console.log(nomes.length);
console.log(nomes2.length);


function verificaArray(arr){

    if (arr.length >= 5) {
        console.log("esse array tem mais de 5  elementos");
        
    }else {
      console.log(" esse array naO TEM 5 ELEMENTOS");
    }

}
verificaArray(nomes);
verificaArray(nomes2);