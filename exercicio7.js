// let numero = 2
// for(let i = 1; i <= 10 ;i++){
//     console.log(`${numero} x ${i} = ${i * numero}`) 
// }

// let numeroProcurado = 56
// for(let i = 0; i <= 100; i++){
//     if(i == numeroProcurado){
//         break;
//     }
//     console.log(i)
// }


let mensagem = "Sua soma utrapassou a "
let soma = 0;

for(let i = 0; i <= 20; i++){
    soma = soma + i

    if (soma>100){
        console.log("Sua soma ultrapassou 100")
        break; 
    }
        
}

console.log(soma)
