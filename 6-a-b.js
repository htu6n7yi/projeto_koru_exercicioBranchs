// Dados de alunos
const students = [
    { name: "João", age: 20, grades: [85, 90, 78] },
    { name: "Maria", age: 19, grades: [92, 95, 89] },
    { name: "Pedro", age: 21, grades: [70, 65, 80] },
    { name: "Ana", age: 18, grades: [60, 75, 68] },
    { name: "Carlos", age: 22, grades: [90, 88, 92] }
];

// a) Para cada aluno, calcule a média das notas
// b) Determine se cada aluno foi aprovado ou reprovado (média >= 70 para aprovar)

const studentsWithResults = students.map(student => {
    // 1. Calcular a soma das notas com o método reduce()
    const sumOfGrades = student.grades.reduce((accumulator, currentGrade) => accumulator + currentGrade, 0);

    // 2. Calcular a média
    const average = sumOfGrades / student.grades.length;

    // 3. Determinar o status de aprovação
    const status = average >= 70 ? "Aprovado" : "Reprovado";

    // 4. Retornar um NOVO objeto com os dados originais do aluno e os novos campos
    return {
        ...student, // Copia todas as propriedades do objeto original 'student'
        average: parseFloat(average.toFixed(2)), // Adiciona a média, formatada com 2 casas decimais
        status: status // Adiciona o status
    };
});

// Exibe o resultado final no console
console.log(studentsWithResults);