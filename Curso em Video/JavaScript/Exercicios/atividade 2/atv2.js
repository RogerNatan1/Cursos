var input = addEventListener('keypress', function(event){
    if(event.key === 'Enter'){
        verificaIdade()
    }
})

function verificaIdade(){
    //Idade e ano atual
    var anoInput = document.querySelector('#idade')
    var anoDigitado = Number(anoInput.value)
    var data = new Date()
    var anoAtual = data.getFullYear()

    //Gênero
    var genero = document.querySelector('input[name="gender"]:checked').value
    
    //Validação para não conter nenhuma informação vazia ou uma data futura
    if(anoInput.value.length == 0 || genero == null || anoDigitado > anoAtual){
    window.alert("[ERROR] Preencha todas as informações corretamente")
    }
    else{
        //calculo da idade
        var idade = anoAtual - anoDigitado

        //Fazendo a div de resposta aparecer
        document.querySelector('.result').style.display = 'flex'
        document.querySelector('.msgPreencher').innerHTML = ''
        anoInput.value = '' // limpa a caixa de seleção para a próxima tentativa
        anoInput.focus() // deixa o cursos na caixa de idade para não precisar clicar com o mouse

        //Texto e Imagem
        var text = document.querySelector('.result p');
        var imagem = document.querySelector('.result img');

        text.innerHTML = `Detectamos ${genero} de ${idade} anos!`

        //Condições
        if(genero == 'Mulher'){

            if(idade < 10){
                imagem.src = 'fotos/menina.jpeg'
            }
            else if(idade < 18){
                imagem.src = 'fotos/joveM.jpeg'
            }
            else if(idade < 50){
                imagem.src = 'fotos/mulher.jpeg'
            }
            else{
                imagem.src = 'fotos/idosa.jpeg'
            }
        }
        else{
            if(idade < 10){
                imagem.src = 'fotos/menino.jpeg'
            }

            else if(idade < 18){
                imagem.src = 'fotos/jovem.jpeg'
            }
            else if(idade < 50){
                imagem.src = 'fotos/homem.jpeg'
            }
            else{
                imagem.src = 'fotos/idoso.jpeg'
            }
        }

    }
}
