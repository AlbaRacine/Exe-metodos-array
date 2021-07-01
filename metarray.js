

/*1. Crie um array de números pares, e utilizando a função .map() nesse array, crie
um novo array com apenas números ímpares*/

let numerosPares = [2,4,6,8,10];

let impares = numerosPares.map(function(num){
    return num+1;
})
console.log(impares);
/*2. Crie um array de nomes, que possua dois índices com o nome Maria. Utilize o
.filter() para obter apenas esses dois índices com o nome Maria.*/

let nomes = ['Maria', 'Ana', 'Ines', 'Maria', 'Any'];
let Marias = nomes.filter(function(nomes){
    return nomes == 'Maria';
});
console.log(Marias);

/* 3. Crie um array de números e utilize a função .reduce() para devolver uma string
com os números formatados.
Exemplo [1,5,9,3,7] => “1 – 5 – 9 – 3 – 7”*/

let numeros = [50, 100, 150, 200, 250];
let string = numeros.reduce(function(acumulador, numero){
    return  acumulador + "-"+ numero

});
    console.log(string);

/*4. Crie um array de animais, após isso passe por cada índice utilizando o
.forEach() e imprima a frase “O animal é NOME_DO_ANIMAL”.*/

let animais = ['Cavalo', 'Bisonte', 'Zebra', 'Chacal', 'Camelo'];

animais.forEach(function(animai){

    console.log("O animal é : "+ animai);
});
    
    
