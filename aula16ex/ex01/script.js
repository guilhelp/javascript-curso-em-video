let num = document.querySelector('input#numero');
let lista = document.querySelector('select#flista');
let res = document.querySelector('div#res');
let vetor = []

function isNumber(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, list) {
    let pos = list.indexOf(Number(n));
    if (pos != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if (isNumber(num.value) && !inLista(num.value, vetor)) {
        vetor.push(Number(num.value));
        let item = document.createElement('option')
        item.text = `Número ${num.value} adicionado ao vetor`
        lista.appendChild(item)
        res.innerHTML = ''
    } else {
        window.alert('Digite corretamente ou número já foi colocado!')
    }
    num.value = ''
    num.focus();
}

function finalizar() {
    if(vetor.length == 0) {
        window.alert('Adicione valores antes de finalizar')
    } else {
        let totalElementos = vetor.length
        let maior = vetor[0];
        let menor = vetor[0];
        let soma = 0;
        let media = 0;
        for(let m in vetor ) {
            soma += vetor[m];
            media = (soma)/vetor.length
            if(vetor[m] > maior) {
                maior = vetor[m]
            }
            if(vetor[m] < menor) {
                menor = vetor[m]
            }
        }
        let palavraNumeros = vetor.length > 1 ? 'números' : 'número';
        res.innerHTML = '';
        res.innerHTML += `<p> Ao todo temos temos ${totalElementos} ${palavraNumeros} no vetor </p>`
        res.innerHTML += `<p> O maior informado foi ${maior}</p>`
        res.innerHTML += `<p> O menor informado foi ${menor}</p>`
        res.innerHTML += `<p> A soma dos valores é ${soma}</p>`
        res.innerHTML += `<p> A média dos valores é ${media}</p>`
    }
}