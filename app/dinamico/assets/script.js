//Funções:
var arrayNotas=new Array;
var arrayPesos=new Array;

function addNotas() { //prepara um array com as notas
    var nota = document.querySelectorAll('[data-js="nota"]');
    nota.forEach(function (nota) {
        arrayNotas.push(nota.value);  
       
    })
    console.log(arrayNotas);} 
    
    function addPesos() { //prepara um array com os pesos
        var peso = document.querySelectorAll('[data-js="peso"]');
        peso.forEach(function (peso) {
            arrayPesos.push(peso.value);  
            
        })
    console.log(arrayPesos)  } 
function mostrarArray() { // mostra os dados no console
    addNotas();
    addPesos();
}
function calcularNotas() { //Função principal que irá calcular de verdade
let notas = document.querySelectorAll('[data-js="nota"]');
let pesos = document.querySelectorAll('[data-js="peso"]');
notas.forEach(function(item,index){
    console.log("Nota "+(index+1)+" é igual a : "+item.value);
});
pesos.forEach(function(item,index){
    console.log("peso "+(index+1)+" é igual a : "+item.value);
})
};

btnCalcular = document.querySelector('#btnCalcular'); // Botão calcular
btnCalcular.addEventListener("click",calcularNotas);
