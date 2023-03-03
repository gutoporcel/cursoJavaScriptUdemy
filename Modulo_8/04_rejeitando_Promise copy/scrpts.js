function verificaNumero(num){
    return new Promise((resolve,reject)=>{
        if (num==2) {
            resolve(console.log(`o numero é ${num}`))
            
        }else{
            reject( new Error("falhou"))
        }
    
    
    });
    

}

verificaNumero(2);
verificaNumero(5);
verificaNumero(7);

