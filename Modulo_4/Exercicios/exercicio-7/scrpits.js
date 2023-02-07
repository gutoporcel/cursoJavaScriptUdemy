let nomes =["jose","joao","cris","lucas"];
let numeros =[5,9,6,10];


for (let i = 0; i < nomes.length; i++) {
  console.log("o nome é " + nomes[i])
  
}


function tabuada(arr){

  for (let i = 0; i < arr.length; i++) {
  
  console.log(`Essa é a tabuada do ${arr[i]}`);
    for (let b = 0; b <= 10; b++) {
     console.log(arr[i] + "x" + b + "="+arr[i]*b);
      
    }
     
  }

}

tabuada(numeros);