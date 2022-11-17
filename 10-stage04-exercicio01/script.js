/*
    Exercício 01

    Solicitar ao usuário que ele insira dois números
    e, a partir daí, calcular:

    Parte 1
    [] A soma dos dois números;
    [] A subtração dos dois números;
    [] A multiplicação dos dois números;
    [] A divisão dos dois números;
    [] A resto da divisão dos dois números;

    Parte 2
    [] Verifique se a soma dos dois números é par ou impar
    [] Verifique se os dois números inseridos são iguais ou diferentes
*/

let numberOne = Number(prompt('Digite o primeiro número:'))
let numberTwo = Number(prompt('Digite o segundo número:'))

let sum = numberOne + numberTwo
let sub = numberOne - numberTwo
let mult = numberOne * numberTwo
let div = numberOne / numberTwo
let rest = numberOne % numberTwo

alert(`
    SOMA: ${numberOne} + ${numberTwo} = ${sum}
    SUBTRAÇÃO: ${numberOne} - ${numberTwo} =  ${sub}
    MULTIPLICAÇÃO: ${numberOne} * ${numberTwo} = ${mult}
    DIVISÃO: ${numberOne} / ${numberTwo} = ${div}
    RESTO: ${numberOne} % ${numberTwo} = ${rest}
`)

if (sum % 2 === 0) {
    alert(`
    A soma entre ${numberOne} e ${numberTwo}
    é igual a ${sum} e é um número PAR
    `)
} else {
    alert(`
    A soma entre ${numberOne} e ${numberTwo}
    é igual a ${sum} e é um número ÍMPAR
    `)
}

if (numberOne === numberTwo){
    alert(`
    ${numberOne} é igual a ${numberTwo}
    `)
} else {
    alert(`
    ${numberOne} é diferente de ${numberTwo}
    `)
}