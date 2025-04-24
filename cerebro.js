const botao =
document.getElementById("meuBotao");
botao.addEventListener("click",function(){
    alert("Botão clicado!");
}); 

function somar(){
 const num1 = 
parseFloat(document.getElementById("num1").value);
 const num2 = 
parseFloat(document.getElementById("num2").value);
 const resultado = num1 + num2; 
 document.getElementById("resultado").innerHTML = `resultado:${resultado}`; 
}

document.getElementById("titulo").innerHTML="Novo Titulo!";

