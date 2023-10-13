function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date() //função do proprio javascript
    var hora = data.getHours() //depois de acordo com a data pegar a hora
    msg.innerHTML = `<p>Agora são ${hora} horas.</p>`
//condicoes para a troca de imagens usando variavel.src = 'nome do arquivo'
    if(hora >= 0 && hora <= 12){
        img.src = 'imagens/manha1.png'
        document.body.style.background = '#d2a157'
    }else if(hora >= 13 && hora <= 18){
        img.src = 'imagens/tarde1.png'
        document.body.style.background = '#843012'
    }else{
        img.src = 'imagens/noite1.png'
        document.body.style.background = '#2b528d'
    }
}