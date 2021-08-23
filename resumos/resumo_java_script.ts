/// Java Script    Comandos e sintaxes.

// Tipagem dinâmica não é necessário definir o tipo de dado o JS define pelo tipo de dano armazenado.

// Declaraçãoes de variáveis e constantes.
var variavelGlobal = 30;   // Variável de escopo global (escopo global).
let variavelLocal = 20;   // Variável de escopo local (escopo de bloco).
const constante = 30;    // Constante sempre deve ser iniciada (Escopo de bloco).
const number = 666; // Número inteiro (Number).
const float = 6.66; // Número de ponto flutuante (Number).
const string = "Bruno Rondoni" // (String)
const boolean = true // Booleano.  // 0 => false  1 => true (Boolean) 
const semValor = null // Null sem valor definido (Null).
let indefinida; // variavel declarada e não iniciada (indefinined).
let a = 456; let b = Number("456a"); console.log (a + b); // NaN - ao tentar somar string contendo letras (NaN).


// 0 = false, null == false, undefined == false, NaN == false. "" == false
//console.log(0 == false);   // 0 entendido como falsy (falsy)
//console.log("" == false); // "" entendido como falsy (falsy)
//console.log(1 == true);  // 1 entendido como truthy   (truthy)




// Conversões de numeros e strings.

// conversão implicita   - JavaScript converte number em String ao tentar somar e concatena como 2 strings. 
const numero = 456;
const numeroString = "456"
//console.log(numero === numeroString) //  retorna false  pois === compara mesmo tipo e valor
//console.log(numero == numeroString) //  retorna True pois == compara valor

// conversão explicita  - Utiliza Number e String para converter tipos.
Number(numeroString); // converte um tipo de dado em numero
String(numero); // converte um tipo de dado em String.  outra opção é usar o comando toString()


//console.log(numero === Number(numeroString)); //  retorna true  pois a string foi convertida em number
//console.log(String(numero) == numeroString); //  retorna true  pois number foi convertido em string



// Declaração de Array
const array = [10,20,30,40,50]; // Array do tipo numbers (Array)



// declarando funções
function funcao0(){}; // declaração de função sem valor de entrada (function) .
function funcao(number){return (number * 2)};// função com entrada e saída dobrada(function).



//Console.log() envia dados ao console   //typeof() mostra o tipo de dado // String.length() conta tamanho da string.
console.log("Var: " + variavelGlobal + " Do tipo: " + typeof(variavelGlobal));
console.log("Let: " + variavelLocal + " Do tipo: " + typeof(variavelLocal));
console.log("Const: " + constante + " Do tipo: " + typeof(constante));
console.log("Número inteiro: " + number + " Do tipo: " + typeof(number));
console.log("Número decimal: " + float + " Do tipo: " + typeof(float));
console.log("Valor boleano: " + boolean + " Do tipo: " + typeof(boolean));
console.log("String: " + string + " Do tipo: " + typeof(string));
console.log("String: " + string + " Tem : " + string.length + " letras") 
console.log("Sem valor: " + semValor + " Do tipo: " + typeof(semValor));
console.log("Indefinida: " + indefinida  + " Do tipo " + typeof(indefinida));
console.log("Vetor: " + array[0], array[1], array[2],array[3], array[4] + " com tamanho: " + array.length);
console.log("função: " + typeof(funcao));
console.log("função: " + typeof(funcao) + " retorna valor dobrado : " + funcao(constante));



// Template literal

const nome = "Bruno";
const sobrenome = "Rondoni";
const idade = 2021 - 1988;
const cidadeDeNascimento = "São Paulo";

// ao invez de usar dessa forma:
//const apresentacao = "Meu nome é " + nome + ", minha idade é " + idade + " eu nasci em " + cidadeDeNascimento;

// Usando Template String
//                   ` Texto     ${const}   Texto       ${const}        Texto         ${const}  
const apresentacao = `Meu nome é ${nome}, minha idade é ${idade} e nasci na cidade de ${cidadeDeNascimento}`;
console.log (apresentacao);



// Sintaxe IF / ELSE.
if (variavelGlobal < variavelLocal){
    console.log ("Var é menor que Let ");

} else if (variavelGlobal > variavelLocal){
    console.log ("Var é maior que Let ");

} else console.log("Var é igual a Let");



// IF ternário
const idadeMinima = 18;
const idadeCliente = 18;

// if ternário
//          (          Condição          ?        True      :     False        )   
 console.log(idadeCliente >= idadeMinima ? "Maior de idade" : "Menor de idade" )

 // If normal
if (idadeCliente >= idadeMinima){
    console.log("Maior de idade")
} else {
    console.log ("Menor de idade")
}



// Sintaxe Switch.
const animal = "Leão"

switch(animal){

  case "Leão" :
      console.log("É um Leão");
      break;

default: console.log("Tente outro animal! ")
}


// Sintaxe for.
for(var index = 0; index < 10; index ++){
    console.log("contador for : " + index);
}



//Sintaxe While
var n = 0;

while (n<10){
    console.log("contador while : " + n)
    n++;
}


//Sintaxe Do while
var x = 0;

do {
    console.log("contado Do while : " + x);
    x++;
} while(x<10);



// Function  usando funções

// Declaração de função sem retorno
function imprimeTexto (texto){ 
    console.log(texto);
}

imprimeTexto("Olá! ")
imprimeTexto(soma());

//  Funções Math.
imprimeTexto(Math.random()); // Gera um numero random de 0 - 1 .
imprimeTexto(Math.PI);// Retorna o valor de PI.
imprimeTexto(Math.round(4.7));// Arredonda um número.
imprimeTexto(Math.ceil(4.3));// Arredonda um número para cima.
imprimeTexto(Math.floor(4.9));// Arredonda um número para baixo.
imprimeTexto(Math.trunc(4.9));// Remove os numeros depois da virgula.
imprimeTexto(Math.pow(2,2));// Gera a exponenciação entre 2 valores.
imprimeTexto(Math.sqrt(9));// Retorna a rais quadrada de um numero.
imprimeTexto(Math.min(1,2,3,4,5,6,7,8,9,10));// encontra o menor valor.
imprimeTexto(Math.max(1,2,3,4,5,6,7,8,9,10));// encontra o maior valor.


// Declaração de função com retorno.
function soma(){
    return  2 + 2;
}


// Declaração de função com retorno e parametros.

function somaN(num1, num2){
    return  num1 + num2;
}
console.log (somaN(100,150));


function nomeIdade(nome, idade){
    return `Meu nome é ${nome} e minha idade é ${idade} `;
}
console.log(nomeIdade("Bruno",33));


// caso não receba parametro pode ser definido valor padrão do parametro
//           valor padrão   = 1          = 1
function multiplica(numero1 = 1, numero2 = 1){
    return numero1 * numero2;
}

console.log(multiplica(somaN(2,2),somaN(2,2)));


// Declarando função de expressão
const funcaoSoma = function(num1, num2) { return num1 + num2 };
console.log(funcaoSoma(1,2));


apresentar("Bruno");

function apresentar(nome){
    return ' Meu nome é ${nome}';
}

// Arrow function
const apresentarArrow = nome => `meu nome é ${nome}`;
const somar = (num1, num2) => num1 + num2;


console.log(apresentarArrow("Bruno"))



