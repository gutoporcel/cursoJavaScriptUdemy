let arr = [1,2,3,4,5];
let arr2 = [1,23];

function iterarArray(arr) {
    if (arr.length == 0) {
        throw new Error("oarray está vazio")
        
    }else{
        for (let i = 0; i < arr.length; i++) {
            console.log(i);
            
        }

    }
    
}

function arrayVazio(arr) {
    if (arr.length > 0) {
        throw Error("o array nao pode ter elemento")
    }else{
        console.log("deu certo")
    }
}

iterarArray(arr);
iterarArray(arr2);