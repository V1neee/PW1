function calcularSoma(){
    num1 = parseInt(document.getElementById('num1').value);
    num2 = parseInt(document.getElementById('num2').value);
    soma = num1+num2;

    document.getElementById('resultado').textContent = soma;
}