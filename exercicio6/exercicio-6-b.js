// Dados de alunos
const students = [
    { name: "João", age: 20, grades: [85, 90, 78] },
    { name: "Maria", age: 19, grades: [92, 95, 89] },
    { name: "Pedro", age: 21, grades: [70, 65, 80] },
    { name: "Ana", age: 18, grades: [60, 75, 68] },
    { name: "Carlos", age: 22, grades: [90, 88, 92] }
];

const studentsWithAverage = students.map(student => {
    const sumOfGrades = student.grades.reduce((accumulator, currentGrade) => accumulator + currentGrade, 0);

    const average = sumOfGrades / student.grades.length;

    // Determinar o status de aprovação
    const status = average >= 70 ? "Aprovado" : "Reprovado";

    return {
        ...student, 
        average: parseFloat(average.toFixed(2)), 
        
        status: status
    };
});

// Exibe o resultado final no console
console.log(studentsWithAverage);