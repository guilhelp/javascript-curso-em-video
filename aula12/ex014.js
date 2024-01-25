var agora = new Date()
var diaSemana = agora.getDay()

switch (diaSemana) {
    case 0: 
        console.log('O dia da semana é Domingo!')
        break;
    case 1: 
        console.log('O dia da semana é Segunda!')
        break;
    case 2: 
        console.log('O dia da semana é Terça!')
        break;
    case 3: 
        console.log('O dia da semana é Quarta!')
        break;
    case 4: 
        console.log('O dia da semana é Quinta!')
        break;
    case 5: 
        console.log('O dia da semana é Sexta!')
        break;
    case 6: 
        console.log('O dia da semana é Sábado!')
        break;
    default:
        console.log('O dia da semana é inválido');
        break;
}