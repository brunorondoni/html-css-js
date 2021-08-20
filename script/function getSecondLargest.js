// Esta função getSecondLargest utiliza Math.max.apply para encontrar maiores numeros em uma array
// Esta função retorna sempre o 2º maior numero em uma array de entrada arrayNumeros[].



// Array de entrada
const arrayNumeros = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]


// função que obtem o segundo maior valor em uma array
function getSecondLargest(nums) {
    let arrayNum = [];
    let secondMax;
    
 const maxNum = Math.max.apply(null, nums); // esta função Math.max.appl() retorna o maior valor da array recebida.
 
 // Este for varre toda array e cria uma nova removendo o maior valor encontrado anteriormente
     for(var index = 0; index < nums.length; index ++){
         if (nums[index] < maxNum){
             arrayNum.push(nums[index]);
         }
     }

// utilizando novamente a função Math.max.apply() é encontrado e retornado o maior numero na nova array.    
secondMax = Math.max.apply(null, arrayNum);     
return (secondMax);
          
}

console.log('o segundo maior número nesta array é : ' + getSecondLargest(arrayNumeros));