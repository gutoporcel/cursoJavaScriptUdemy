

let num=3;
let divisores=0;

for(let i=1; i<=num; i++ ){
    if(num%i==0){
        divisores++;
    }
}

if (divisores==2) {

    console.log(`O numero ${num} é primo`);
    
}else{
    console.log(`O numero ${num} nao  é primo`);
}