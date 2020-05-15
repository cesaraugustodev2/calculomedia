/*
@author: César Augusto
@description: Algoritmo simples para calcular a média de notas da uninove
@status: Alpha
@version 0.3
*/

//Preparando os dados:

var notas = []; // cria um array vazio
var qtdProvas = prompt('Quantas provas você fez?'); // define a quantidade de provas
isnum(qtdProvas);
var media = document.getElementById = 'mediafacul'; // Define a média da faculdade
console.log(media);
isnum(media);
const reducer = (accumulator, currentValue) => accumulator + currentValue; // essa constante irá somar o valor das provas para a média depois peguei no site da MDN procure por método reducer


function isnum(v) {
    if (isNaN(v)) { // verifica se o que foi digitado é um numero se não for executa o erro
        document.write('Achou que eu não ia perceber né? isso não é um numero, recarregue a pagina e tente novamente!');
        throw new Error('Achou que eu não ia perceber né? isso não é um numero, recarregue a pagina e tente novamente!');
    }
};

function adicionarNotaDinamico(n) { //função pede para o usuario digitas as notas dinamicamente, sendo n a quantidade de provas
    var i = 1; // essa variável controla o numero de notas no texto
    var p = 0; // essa variavelc ontrola a quantidade de interações
    var k; // essa variavel guarda os valores que o usuáriom digitar a cada interação
    do {
        var k = prompt("Digite a nota: " + i)
        notas.push(k);
        i++;
        p++;
    }
    while (p < n);
};
adicionarNotaDinamico(qtdProvas); // Executa a função
notas = notas.map(Number); // faz o "cast" para o tipo number pois o array está em string e vamos precisar fazer o calculo da media
function respostaMedia(m) {
    var m = (notas.reduce(reducer) / notas.length); // Finalmente vamos fazer a média essa variavél m guarda o valor da média em decimal
    if (m > 10) { // verifica se a média é maior que 10 e informa o usário.
        document.write("Deu ruim!, sua média está acima de 10, será que você não digitou os números errados, tente novamente!")
        throw new Error("Deu ruim!, sua média está acima de 10, será que você não digitou os números errados, tente novamente!")
    }
    if (m >= media) { //verifica se a média é acima ou igual a  7  e informa o usuário
        document.write(" a média das suas notas é: " + Math.trunc(m) + " Parabéns você passou nessa matéria"); //apresenta a média arredonada     
    } else if (m < media) { //verifica se a média é abaixo de   7  e informa o usuário
        document.write("a média das suas notas é : " + Math.trunc(m) + " Não foi dessa vez, saia agora do PC e vá estudar!")
    }
}

respostaMedia();
