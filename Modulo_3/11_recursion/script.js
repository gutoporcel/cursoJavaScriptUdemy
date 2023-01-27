function recursao(n) {

  if(n-1<2){
    console.log("recursao parou");
  } else if (n % 2 != 0){
    console.log("O numero é impar" + n);
    recursao(n-1);
  }else{
    console.log("Numero par" + n);
    recursao(n-2);

  }
  
}

recursao(39);
recursao(10);
recursao(55);