const students = [
    { name: "João", age: 20, grades: [85, 90, 78] },
    { name: "Maria", age: 19, grades: [92, 95, 89] },
    { name: "Pedro", age: 21, grades: [70, 65, 80] },
    { name: "Ana", age: 18, grades: [60, 75, 68] },
    { name: "Carlos", age: 22, grades: [90, 88, 92] }
];


let totalSum = 0;
let totalGradesCount = 0;

for (const student of students) {
    const sumGrades = student.grades.reduce((acc, grade) => acc + grade, 0);
    

    totalSum += sumGrades;
    totalGradesCount += student.grades.length;
}


const averageGeneral = totalSum / totalGradesCount;

console.log(`Média geral da turma: ${averageGeneral.toFixed(2)}`);
