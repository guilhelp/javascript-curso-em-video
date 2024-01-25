function gerar() {
    let num = window.document.querySelector('input#numero')
    let tab = window.document.getElementById('seltab')

    if (num.value.length == 0) {
        window.alert('Digite o número corretamente')
    } else {
        let n = Number(num.value)
        tab.innerHTML = ''
       
            for (let c = 1; c <= 10; c++) {
                let item = document.createElement('option')
                let resultado = n * c;
                item.text = `${n} * ${c} = ${resultado}`;
                item.value = `tab${c}`
                tab.appendChild(item)
            }
        
    }

}