// Strings
let nome = "Maria"
let sobrenome = "Duarte"
let idade = 29
let profissao = "mecanico"
let nascismento = 2005
let saudacao = "A " + nome + " é " + profissao
let nomecompleto = nome + " " + sobrenome

    console.log(nome)
    console.log(idade)
    console.log(profissao)
    console.log(nascismento)
    console.log("A " + nome + " é " + profissao)
    console.log(saudacao)
    console.log(`Bem vinda, ${nome} ${sobrenome}`)
    console.log(nomecompleto)

//Number
let aniversario = "8"
console.log(aniversario)

let temperatura = 36.5
console.log(temperatura)


let soma = 29 + 1 
console.log(soma)

let subtracao = 2 - 1
console.log(subtracao)

let mutiplicacao = 2*2
console.log(mutiplicacao)

let divisao = 10/2
console.log(divisao)

// Boolean
let estachovendo= false
let estasol = true

console.log(estachovendo)
console.log(estasol)

//Array

let frutas = ["Abacaxi", "Laranja", "Melancia", "Maçã"]
let numeros = [1 ,2 ,3 ,4 ,5]

//Adcionar no final da array
frutas.push("Uva")
    console.log(frutas)

//Remover o primeiro elemento 
frutas.shift()
    console.log(frutas)
    
//Remover o ultimo
frutas.pop()
    

    console.log(frutas.length);
    
//Objeto
let pessoa = {
    nome: "João",
    sobrenome: "Duarte",
    idade: 28, 
    estrageiro: false, 
    linguagens: ["Java", "GO", "Python", "Cobol","C#"]
}
    console.log(`Nome: ${pessoa.nome}`)

    //Adicionando uma nova prorpriedade 
    pessoa.profissao = "Desenvolvedor"
    
    //Alterar a propriedade
    pessoa. idade = 27

    //Deleta propriedade
    delete pessoa.linguagens
    
    console.log(pessoa)

    let carros = [
        {marca:"Toyota", modelo: "Corrola" }, //0
        {marca:"Honda", modelo:"Civic"}, //1
        {marca: "Fiat", modelo:"Uno"}   //2
     ]
    
     console.log(carros[2].modelo)
     

