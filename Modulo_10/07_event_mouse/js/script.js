let btn1 =document.querySelector("#btn1");
let btn2 =document.querySelector("#btn2");

btn1.addEventListener("mousedown", function(){

console.log("apertou o Mouse");
});

btn1.addEventListener("mouseup", function(){

    console.log("soltou o Mouse");
});

btn2.addEventListener("dblclick", function(){

    console.log("duplo clik o Mouse");
});

btn2.addEventListener("contextmenu", function(e){

    e.preventDefault();
    console.log("botao direito");
});