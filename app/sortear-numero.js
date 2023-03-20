const menor_valor = 1;
const maior_valor = 1000; 

const numero_secreto = gera_numero_random();

 function gera_numero_random(){return parseInt(Math.random() *maior_valor + 1)}

console.log(numero_secreto);

const elemento_menor_valor = document.getElementById('menor-valor');
elemento_menor_valor.innerHTML = menor_valor;
const elemento_maior_valor = document.getElementById('maior-valor');
elemento_maior_valor.innerHTML = maior_valor;
