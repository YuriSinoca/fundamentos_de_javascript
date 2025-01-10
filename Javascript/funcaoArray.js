
let numeros = [1, 2, 3, 4]


//Map() cria uma nova array transformando os elementos

let numerosDobros = numeros.map(num => num * 2);

console.log(numerosDobros);

//Find() Retorna o primeiro que satisfaz a condição  / ele realiza "buscas"
let primeiro = numeros.find(n => n > 2)

let nomes = ["Andre", "Angelica","Natalia","Matheus"]

let primeiroComT = nomes.find(nome => nome.includes("t"))

console.log(primeiroComT)

//Filter() Cria um novo array com elementos que satisfazem a condição
let maioresQue3 = numeros.filter(n => n > 3)
    console.log(maioresQue3);

//Includes() Verifica se o numero pertence em uma Array
let existeONumero5 = numeros.includes(5)
    console.log(existeONumero5);

//Some() Verifica se um elemento satisfas a condição
let existeAlgumPar = numeros.some(n => n % 2 === 0)
    console.log(existeAlgumPar);

//ForEach() Igual o for normal
let listarNomes = nomes.forEach((nome, index) => console.log(nome, index));
