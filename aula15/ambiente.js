let num = [5, 6, 8, 1]
num[4] = 9 //Aqui está adicionando o número 10 na posição 3 do vetor

num.push(3) // Aqui simplesmente está adicionando o número 15 no vetor

// num.length é pra saber quantos elementos tem no vetor

// num.sort() ordena todos os elementos em ordem crescente

console.log(`Nosso vetor é o ${num}`)
console.log(`Vetor ordenado ${num.sort()}`)
console.log(`O vetor tem ${num.length} elementos`)
console.log(`Mostre o que tem no elemento na posição 4 do vetor: Tem o valor ${num[4]}`)

let pos = num.indexOf(6) //lembrando que estamos procurando o valor 6 dentro do array e não a posição 6
if (pos == -1) { //É -1 aqui porquê o JS se não encontra um valor ele nos retorna esse -1
    console.log('O valor não foi encontrado!')
}else {
    console.log(`O valor 6 está na posição ${pos}`)
}
