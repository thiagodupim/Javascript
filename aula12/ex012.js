var idade = 23
console.log(`Você têm ${idade} anos`)
if (idade < 16) {
    console.log('Não vota!')
} else if (idade < 18 || idade > 65) {
    console.log('O voto é opcional!')
} else if (idade > 18) {
    console.log('Voto obrigatório!')
} 
