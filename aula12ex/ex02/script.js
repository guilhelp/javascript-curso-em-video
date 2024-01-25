function verificar() {

var data = new Date()
var anoAtual = data.getFullYear()
var anoNasc = window.document.getElementById('anoNasc')
var res = window.document.querySelector('div#resp')
var img = window.document.getElementsByTagName('img')[0];

if (anoNasc.value.length == 0 || Number(anoNasc.value) > anoAtual) {
    window.alert('Erro no ano de nascimento!')
} else {
    var sexo = window.document.getElementsByName('sexo');
    var idade = anoAtual - Number(anoNasc.value)
    var genero = ''
    if (sexo[0].checked) {
        genero = 'Homem'
        if (idade >= 0 && idade < 10) {
            res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
            img.src = './img/crianca_homem.jpg'
        } else if (idade < 21) {
            res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
            img.src = './img/jovem_homem.jpg'
        } else if (idade < 50) {
            res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
            img.src = './img/homem.jpg'
        } else {
            res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
            img.src = './img/velho_homem.jpg'
        }
    } else if (sexo[1].checked) { 
        genero = 'Mulher'
        if (idade >= 0 && idade < 10) {
            res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
            img.src = './img/crianca_mulher.jpg'
        } else if (idade < 21) {
            res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
            img.src = './img/jovem_mulher.jpg'
        } else if (idade < 50) {
            res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
            img.src = './img/mulher.jpg'
        } else {
            res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
            img.src = './img/velha_mulher.jpg'
        }
    } else {
        window.alert('Erro no sexo')
    }

    
   

}



}