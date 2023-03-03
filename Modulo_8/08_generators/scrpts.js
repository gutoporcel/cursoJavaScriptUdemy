function* criadorId(){
    let id =1;
    while(true){
        yield id++

    }
}

let criaId = criadorId();

console.log(criaId.next().value);
console.log(criaId.next().value);
console.log(criaId.next().value);