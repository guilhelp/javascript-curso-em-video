let a = [3, 2, 1, 6, 8, 2, 4, 5]

// for(let c = 0; c < a.length; c++) {
//     console.log(`A posição ${c} tem o valor ${a[c]}`);
// }

// for (let c in a) {
//     console.log(`A posição ${c} tem o valor ${a[c]}`);
// }

let pos = a.indexOf(5);

if (pos == -1){
    console.log('O valor não foi encontrado')
} else {
    console.log(`O valor está na posição ${pos}`)
}
