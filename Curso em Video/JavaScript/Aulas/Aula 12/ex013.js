/*
    Dia da semana usando switch case
*/
let agora = new Date()
let diaSem = agora.getDay()
let data = agora.getDate()
let mes = agora.getMonth() + 1
let ano = agora.getFullYear()

switch(diaSem){
    case 0:
        console.log(`Hoje é Domingo. ${data}/${mes}/${ano}`)
        break
    case 1:
        console.log(`Hoje é Segunda-Feira. ${data}/${mes}/${ano}`)
        break
    case 2:
        console.log(`Hoje é Terça-Feira. ${data}/${mes}/${ano}`)
        break
    case 3:
        console.log(`Hoje é Quarta-Feira. ${data}/${mes}/${ano}`)
        break
    case 4:
        console.log(`Hoje é Quinta-Feira. ${data}/${mes}/${ano}`)
        break
    case 5:
        console.log(`Hoje é Sexta-Feira. ${data}/${mes}/${ano}`)
        break
    case 6:
        console.log(`Hoje é Sábado. ${data}/${mes}/${ano}`)
        break
}