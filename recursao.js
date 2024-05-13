// Soma dos números inteiros de 1 a n
function somaNumeros(n) {
  if (n === 1) {
    return 1;
  }
  else {
    return n + somaNumeros(n - 1);
  }
}
// Verifica se um número é par
function ehPar(number) {
  if (number === 0) {
    return true;
  }
  else if (number === 1) {
    return false;
  }
  else if (number < 0) {
    return ehPar(-number);
  }
  else {
    return ehPar(number - 2);
  }
}

function fibonacci(n) {
  if (n <= 1) {
    return n;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}
module.exports = { somaNumeros, ehPar, fibonacci };