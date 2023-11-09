// Exercicio 1
let numeros = [1, 2, 3, 6, 7, 8];

function encontrarFaltantes(numeros) {
  let numerosFaltantes = [];
  for (let i = numeros[0]; i < numeros[numeros.length - 1]; i++) {
      if (!numeros.includes(i)) {
          numerosFaltantes.push(i);
      }
  }
  return numerosFaltantes;
}
let faltantes = encontrarFaltantes(numeros);

function mostraExec1(){
  alert('Números faltantes: '+ faltantes)
}

// Exercicio 1


// Exercicio 2
var exec2 = [-1, 0, 1, 2, -1, -4];

function Zero(exec2) {
  for (let i = 0; i < exec2.length - 2; i++) {
      if (exec2[i] + exec2[i + 1] + exec2[i + 2] === 0) {
          return [exec2[i], exec2[i + 1], exec2[i + 2]];
      }
  }
  return null;
}

var result = Zero(exec2);

if (result) {
  function mostraExec2(){
    alert('Números que somado são igual a 0 : '+ result +'= 0')
  }
 } else {
  function mostraExec2(){
    alert('Não foram encontrados três números consecutivos cuja soma seja igual a zero.')
  }
}

// Exercicio 2

// Exercicio 3

const exec3 = [2, 7, 7, 1, 8, 2, 7, 8, 7];
const alvo = 16;

function SomaAlvo(exe3, alvo) {
  const resultado = [];

  for (let i = 0; i < exe3.length - 2; i++) {
    const soma = exe3[i] + exe3[i + 1] + exe3[i + 2];
    if (soma === alvo) {
      resultado.push([exe3[i], exe3[i + 1], exe3[i + 2]]);
    }
  }
  return resultado;
}

const output = SomaAlvo(exec3, alvo);

function mostraExec3(){
  alert('Números que somado são igual a 0 : '+ output)
}
// Exercicio 3


// Exercicio 4
const exec4 = [5, 3, 4, 3, 4];
function unqNumNrpt(exec4) {
  let result = 0;
  for (let num of exec4) {
      result ^= num;
  }
  return result;
}
const unqNumNRpt = unqNumNrpt(exec4);

function mostraExec4(){
  alert('O único número que não repete na Array '+ exec4 + ' é o '+ unqNumNRpt)
}


// Exercicio 4


//Exercicio 5
const exec5 = [5, 3, 4, 3, 5, 5, 3];

function unqNumNrpt3x(exec5) {
  let ones = 0;
  let twos = 0;

  for (let num of exec5) {
      ones = (ones ^ num) & ~twos;
      twos = (twos ^ num) & ~ones;
  }

  return ones;
}
const unqNumNRpt3x = unqNumNrpt3x(exec5);

function mostraExec5(){
  alert('O único número que não repete 3 vezes na Array '+ exec5 + ' é o '+ unqNumNRpt3x)
}


//Exercicio 5

//Exercicio 6
const n = 6;

function SequenciaFibonacci(n) {
  if (n <= 0) {
      return [];
  }

  const fibonacciSequencia = [1, 1];

  while (fibonacciSequencia .length < n) {
      const nextNumber = fibonacciSequencia [fibonacciSequencia .length - 1] + fibonacciSequencia [fibonacciSequencia .length - 2];
      fibonacciSequencia .push(nextNumber);
  }

  return fibonacciSequencia ;
}
const fibonacciArray = SequenciaFibonacci(n);

function mostraExec6(){
  alert(fibonacciArray)
}

//Exercicio 6



