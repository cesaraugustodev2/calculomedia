/*
@author: César Augusto
@description: Algoritmo simples para calcular a média de notas da uninove
@status: Alpha
@version 0.2
*/

//Preparando os dados:

var notas = []; // cria um array vazio
const media = prompt('Digite a média da sua faculdade de 0 a 10'); // Define a média da faculdade
isnum(media);
const nomefacul = "Uninove" // define o nome da faculdade
function isnum(v) {
    if (isNaN(v)) { // verifica se o que foi digitado é um numero se não for executa o erro
        document.write('Achou que eu não ia perceber né? isso não é um numero, recarregue a pagina e tente novamente!');
        throw new Error('Achou que eu não ia perceber né? isso não é um numero, recarregue a pagina e tente novamente!');
    }
};

function adicionarNota() { //função pede para u usuário digitar 3 numeros
    var n1 = prompt('Digite a nota 1'); // nota 1
    isnum(n1);
    var n2 = prompt('Digite a nota 2'); // verifica se o que foi digitado é um numero se não for executa o erro
    isnum(n2);
    var n3 = prompt('Digite a nota 3'); // verifica se o que foi digitado é um numero se não for executa o erro
    isnum(n3);
    notas.push(n1, n2, n3); // adiciona as notas no array
}
adicionarNota(); // Executa a função
notas = notas.map(Number);

function calcularmedia() { // Função para calulcar média
    // recupera os numeros do array
    var n1 = notas[0];
    var n2 = notas[1];
    var n3 = notas[2];
    var m = (n1 + n2 + n3) / 3; // soma os elementos e divide por 3
    if (m === 0) { // se o resultado for zer mostra a mensagem 
        document.write("Você tirou Zero em todas as provas? poxa que pena tente estudar mais ano que vem!")
    }
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
calcularmedia();
