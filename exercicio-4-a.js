// Desafio A – Sistema de classificação de notas

const nota = 83;
let conceito;

if (nota < 0 || nota > 100) {
  conceito = 'Nota inválida';
} else if (nota >= 90) {
  conceito = 'A';
} else if (nota >= 80) {
  conceito = 'B';
} else if (nota >= 70) {
  conceito = 'C';
} else if (nota >= 60) {
  conceito = 'D';
} else {
  conceito = 'F';
}

console.log(`Nota: ${nota} | Conceito: ${conceito}`);