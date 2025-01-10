// 1. Transforme o array abaixo em um novo array contento o dobro de cada número 
//     - Entrada [1, 2, 3, 4, 5]
//     - Resultado [2, 4, 6, 8, 10]

// 2. Filtre apenes os numeros pares do array abaixo
//     - Entrada [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//     - Resultado [2, 4, 6, 8, 10]

// 3. Encontre o primeiro maior numero maior que 50 no array abaixo
//     - Entrada [10, 25, 47, 58, 62, 79]
//     - Resultado: 58

// 4. Verifique se existe pelo menos um número negativo
//     - Entrada [10, -5, 7, 0, -3]
//     - Resultado: true

// 5. Verifique se todos os numeros do array são maiores que 2
//     - Entrada [1, 2, 3, 4, 5]
//     - Resultado: false

// 6. Imprima no terminal a posição (index) de cada elemento no array abaixo
//     - Entrada [10, 20, 30, 40, 50]
//     - Resultado: 
//         O numero: 
//             O numero 10 está na posição 0
//             O numero 20 está na posição 1
//             O numero 30 está na posição 2
//             O numero 40 está na posição 3
//             O numero 50 está na posição 4

// 7. Verifique se o numero 7 esta presente no array
//     - Entrada [1, 3, 5, 7, 9, 10]
//     - Resultado: true

//1.
let numeroEX1 = [1, 2, 3, 4, 5]
let dobro = numeroEX1.map(num => num * 2) 

console.log(dobro);

//2.
let numeroEX2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let par= numeroEX2.filter(n => n % 2 === 0)

console.log(par);

//3.
let numeroEX3 = [10, 25, 47, 58, 62, 79]
let maiorQue50 = numeroEX3.filter(n => n >50 && n < 59)

console.log(maiorQue50)

//4.
let numeroEX4 = [10, -5, 7, 0, -3]
let numeroNegativo = numeroEX4.includes(n=> n <-1)

console.log(numeroNegativo)

//5.
// let numeroEX5 = [1, 2, 3, 4, 5]
// let todosMaioresQue2 = numeroEX5.every()