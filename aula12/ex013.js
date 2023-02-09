var agora = new Date() // Instanciando para poder pegar a hora atual do sistema
var hora = agora.getHours() // Pegando a hora atual do sistema e atribuido na váriavel hora
console.log(`Agora são exatamente ${hora} horas.`)
if (hora <= 5) {
    console.log('Boa madrugada!')
} else if (hora < 12) {
    console.log('Bom dia!')
} else if (hora <= 18) {
    console.log('Boa tarde!')
} else {
    console.log('Boa noite!')
}