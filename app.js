// Lição 1 \-------/

// Variáveis ----

/*let altura = Number(prompt('Qual sua altura?').replace(',', '.'));
let peso = Number(prompt('Qual o seu peso?'));
let imc = Number(calculoImc(peso, altura).toFixed(2)); // IMC = Peso / altura²
    
// Funções ----

function calculoImc(p, a) {
    return p / (a * a);
} 

function alterarTexto(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto
}

// Código ----

alterarTexto('h2', `Seu IMC é: ${imc} Kg/m²`)
*/

// Lição 2 \ ------------ /

// Variáveis ----

/*const numero = Number(prompt('Digite um número maior que 0:'));
let numeroFatorial = fatorial(numero);

// Funções ----

function fatorial(n) {
    let fator = n - 1;
    while (fator > 1) {
        n = n * fator;
        fator--;
    }
    return n;
}

function alterarTexto(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

// Código
alterarTexto('h2', `O fatorial (!) de ${numero} é:\n${numeroFatorial}`);
*/

// Lição 3 \--------------/

// Variáveis ----

/*let cotacao = 4.80
let valorDolar = prompt('Digite quanto de dólar deseja converter:').replace(',', '.');
let dolarConvertido = conversao(valorDolar);

// funções ----

function conversao(valorDolar) {
    return (valorDolar * cotacao).toFixed(2);
}

function alterarTexto(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

// Código ----

alterarTexto('h2', `Se convertemos US$${valorDolar} para BRL, na cotação de R$${(cotacao).toFixed(2)}, teremos um total de:\nUS$${dolarConvertido}`);
*/

// Lição 6 \----------------/

// Variáveis ------

let numero = Number(prompt('Selecione um número do qual deseja saber a tabuada'));
let numeroTabuada = tabuada(numero);
let resultadoTexto = numeroTabuada.join('<br>'); // <br> é a quebra de linha no HTML, equivalente ao \n no Java

// Funções -----

// Exemplo usando While
function tabuada(n) {
    let multiplicador = 1;
    let resultados = []; // Create an empty array to store the results
    while (multiplicador < 11) {
        let multiplicacao = n * multiplicador;
        resultados.push(`${n} x ${multiplicador} = ${multiplicacao}`); // Add the result to the end of the array
        multiplicador++;
    }
    return resultados;
}

// Exemplo usando For
// function tabuada(n) {
//     let resultados = [];
//     for (let i = 1; i <= 10; i++) { // (initialization; condition; increment)
//       let resultado = n * i;
//       resultados.push(`${n} x ${i} = ${resultado}`);
//     }
//     return resultados;
//   }

function alterarTexto(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

// Código ------

alterarTexto('h2', `A tabuada de ${numero} é:<br>${resultadoTexto}`);

// Inserção de comentário teste