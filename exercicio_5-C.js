let numbers = [53, 12, 45, 78, 23, 89, 34, 67, 90, 11];

console.log("Números:", numbers);

menorNumero = 2132156449;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] < menorNumero) {
    menorNumero = numbers[i];
  }
}

console.log("Número menor:", menorNumero);
