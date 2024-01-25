var agora = new Date()
var hora = agora.getHours()

var img = window.document.getElementsByTagName('img')[0];
var textoRes = window.document.querySelector('div#textoRes')
textoRes.innerHTML = `<p>Agora são ${hora} horas.</p>` 

if (hora >= 6 && hora < 12) {
    window.document.body.style.background = 'rgb(227, 235, 126)'
    img.src = './img/manha.jpg'
} else if (hora >= 12 && hora <= 18) {
    window.document.body.style.background = 'orange'
    img.src = './img/tarde.jpg'
} else if (hora > 18 && hora < 23) {
    window.document.body.style.background = 'rgb(9, 9, 75)'
    img.src = './img/noite.jpg'
} else {
    window.document.body.style.background = 'black'
    img.src = './img/madrugada.jpg'
}