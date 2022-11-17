/*
    Exercício 02

    Parte 01
    Criar uma lista de estudantes.
    Cada estudante dentro dessa lista, deverá conter os seguintes dados:

    * nome;
    * nota da primeira prova;
    * nota da segunda prova;
    
    Parte 02
    Depois de criada a lista:
    [] Crie uma função que irá calcular a média das notas de cada aluno;
    [] Supondo que a média, para esse concurso é 7,
    verifique se cada aluno obteve sucesso ou não
    e mostre uma mensagem na tela
*/

const students = [
    {
        name: 'Gabriel',
        testScoreOne: 7,
        testScoreTwo: 4
    },
    {
        name: 'Letícia',
        testScoreOne: 8.5,
        testScoreTwo: 10
    },
    {
        name: 'Pedro',
        testScoreOne: 10,
        testScoreTwo: 9
    },
    {
        name: 'Marisa',
        testScoreOne: 5.5,
        testScoreTwo: 7.5
    },
]

function average(ts1, ts2) {
    return (ts1 + ts2) / 2
}

for(let student of students) {
    let name = student.name
    let ts1 = student.testScoreOne
    let ts2 = student.testScoreTwo

    let avg = average(ts1, ts2)

    if (avg > 7) {
        alert(`
            Parabéns, ${name}!
            Sua média final foi de ${avg}
            Você foi aprovado(a) no concurso!
        `)
    } else {
        alert(`
            Não foi dessa vez, ${name}!
            Sua média final foi de ${avg}
            Tente novamente!
        `)
    }
}