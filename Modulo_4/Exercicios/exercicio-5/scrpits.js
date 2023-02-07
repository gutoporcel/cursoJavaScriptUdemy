let nomes =["jose","joao","cris","lucas"];

for (let i = 0; i < nomes.length; i++) {
    if ("joao" == nomes[i]) {
        console.log("Seu nome é "+nomes[i]);
        
    }
    
}

if(nomes.includes("jose")){
    console.log("O nome foi encontrado");
}