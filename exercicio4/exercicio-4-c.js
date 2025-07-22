// Desafio 4-c – Verificação de permissão para dirigir

const idade = 17;
const temHabilitacao = false;

if (idade >= 18 && temHabilitacao) {
  console.log("Pode dirigir.");
} else if (idade < 18 && !temHabilitacao) {
  console.log("Não pode dirigir: precisa ser maior de idade e ter habilitação.");
} else if (idade < 18) {
  console.log("Não pode dirigir: ainda não tem 18 anos.");
} else {
  console.log("Não pode dirigir: é maior de idade, mas não possui habilitação.");
}