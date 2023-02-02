let carro = {
portas:2,
portasMalas:"2.0",
motor:"2.0"
}

let adicionais ={
tetosolar: true,
arcondicionado: true,
}

console.log (carro);

Object.assign(carro,adicionais);

console.log (carro);