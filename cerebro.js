const botao =
document.getElementById("meuBotao");
botao.addEventListener("click", function () {
    alert("Botão clicado!");
});

function somar() {
    const num1 = parseFloat(document.getElementById("num1-somar").value);
    const num2 = parseFloat(document.getElementById("num2-somar").value);
    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById("resultado-somar").innerHTML = "Por favor, insira números válidos.";
        return;
    }
    const resultado = num1 + num2;
    document.getElementById("resultado-somar").innerHTML = `Resultado: ${resultado}`;
}

function subtrair() {
    const num1 = parseFloat(document.getElementById("num1-subtrair").value);
    const num2 = parseFloat(document.getElementById("num2-subtrair").value);
    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById("resultado-subtrair").innerHTML = "Por favor, insira números válidos.";
        return;
    }
    const resultado = num1 - num2;
    document.getElementById("resultado-subtrair").innerHTML = `Resultado: ${resultado}`;
}

document.getElementById("titulo").innerHTML = "Novo Titulo!";

function converter() {
    const celsius = document.getElementById("celsius").value;
    if (celsius === "") {
        document.getElementById("resultado").innerText = "Por favor, insira um valor.";
        return;
    }
    const fahrenheit = (celsius * 9/5) + 32;
    document.getElementById("resultado").innerText = `${celsius}°C é igual a ${fahrenheit.toFixed(2)}°F.`;
}
