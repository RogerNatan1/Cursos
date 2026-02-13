var msg = document.querySelector('.Frase p')
var img = document.querySelector('.Fotinho img')

var data = new Date()
var hora = data.getHours()
var minutos = data.getMinutes()
msg.innerHTML = `Agora são <strong>${hora}:${minutos}</strong>h.`

if(hora > 5 && hora < 12){
    //Bom dia
    img.src = 'fotos/nascer1.jpeg'
    document.body.style.background = '#e2cd9f'
}
else if(hora < 19){
    //Boa Tarde
    img.src = 'fotos/tarde.jpeg'
    document.body.style.background = '#b9846f'
}
else{
    //Noite
    img.src = 'fotos/noite.jpeg'
    document.body.style.background = '#515154'
}