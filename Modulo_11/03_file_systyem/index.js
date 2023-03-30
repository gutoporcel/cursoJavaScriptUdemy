
let {readFile, writeFile  } = require('fs');

readFile("arquivo.txt","utf8", (error, texto)=>{
    if(error){
        throw error;
    }else{
        console.log(texto);
    }
});


writeFile("arquivo.txt","escrevendo no aquivo Hello Wolrd",(error)=>{

    if (error) {
        throw error;
    } else {
        console.log("escreveu com sucesso");
    }


});