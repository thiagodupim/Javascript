let valores = [8, 1, 7, 4, 2, 9]
valores.sort()

//console.log(valores)

/*
console.log(valores[0])
console.log(valores[1])
console.log(valores[2])
console.log(valores[3])
console.log(valores[4])
console.log(valores[5])
*/

/*
for(let pos=0; pos < valores.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
*/

//Esta maneira abaixo faz a mesma coisa que a de cima, porém mais simplificada, e só podemos usar em JS com vetores (array) e objetos
for(let pos in valores) { //Lemos: Para cada posição dentro de valores
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}