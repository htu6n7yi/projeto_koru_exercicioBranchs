const students = [
  { name: "João", age: 20, grades: [85, 90, 78] },
  { name: "Maria", age: 19, grades: [92, 95, 89] },
  { name: "Pedro", age: 21, grades: [70, 65, 80] },
  { name: "Ana", age: 18, grades: [60, 75, 68] },
  { name: "Carlos", age: 22, grades: [90, 88, 92] },
];

let aprovados = 0;
let reprovados = 0;

students.forEach((student) => {
  let sum = 0;
  student.grades.forEach((grade) => (sum += grade));
  const media = sum / student.grades.length;
  if (media >= 70) {
    aprovados++;
  } else {
    reprovados++;
  }
});

console.log(`Total de aprovados: ${aprovados}`);
console.log(`Total de reprovados: ${reprovados}`);
