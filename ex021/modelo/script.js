function tabuada () {
    let numero = document.getElementById('num')
    let tab = document.getElementById('seltab')

    let n = Number(numero.value)

    tab.innerHTML = ''
    for (let i = 0; i <= 10; i++) {
        let item = document.createElement('option')
        item.text = `${n} x ${i} = ${n*i}`
       // item.value = `tab${i}`
        tab.appendChild(item)
    }
}