function verificar() {
    var data = new Date()
    var ano = data.getFullYear() //é para pegar o ano atual com 4 digitos EX. 2023.
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
       var fsex = document.getElementsByName('radsex')
       var idade = ano - Number(fano.value)
       var gênero = ''

       var img = document.createElement('img') //Como se estivesse criando uma tag img
       img.setAttribute('id', 'foto') //atributo id para foto, ou seja criamos uma tag img com o id=foto

       if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >=0 && idade < 10) {
                // Criança
                img.setAttribute('src' , 'menino.png')
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'adolecenteM.png')
            } else if (idade < 40) {
                // Adulto
                img.setAttribute('src', 'adulto.png')
            } else if (idade < 60) {
                // Meia idade
                img.setAttribute('src', 'meia_idadeM.png')
            } else {
                //idoso
                img.setAttribute('src', 'idoso.png')
            }
       } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >=0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'menina.png')
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'adolecenteF.png')
            } else if (idade < 40) {
                // Adulto
                img.setAttribute('src', 'adulta.png')
            } else if (idade < 60) {
                // Meia idade
                img.setAttribute('src', 'meia_idadeF.png')
            } else {
                //Idosa
                img.setAttribute('src', 'idosa.png')
            }
       }
       res.style.textAlign = 'center'
       res.innerHTML = `Detectamos ${gênero} com ${idade} anos`
       res.appendChild(img) //Estamos adicionando o elemento foto logo abaixo do conteúdo
    }
}