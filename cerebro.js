const botao =
document.getElementById("meuBotao");
botao.addEventListener("click",function(){
    alert("Botão clicado!");
}); 

function somar(){
    const num1 = 
parseFloat(document.getElementById("num1").value);
 const num2 = 
parseFloat(        document.getElementById("num2").value);
 const resultado = num1 + num2; 
    document.getElementById("resultado").innerHTML = `resultado:${resultado}`; 
}

document.getElementById("titulo").innerHTML="Novo Titulo!";

function converter() {
    const celsius = document.getElementById("celsius").value;
    if (celsius === "") {
        document.getElementById("resultado").innerText = "Por favor, insira um valor.";
        return;
    }
    const fahrenheit = (celsius * 9/5) + 32;
    document.getElementById("resultado").innerText = `${celsius}°C é igual a ${fahrenheit.toFixed(2)}°F.`;
}
