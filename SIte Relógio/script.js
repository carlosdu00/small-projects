function verificar(){
    let fotohora = document.getElementById("fotohora")

    let agora = new Date()
    let hora = agora.getHours()
    let frase = document.getElementById("frase")
    if(hora==1){
        frase.innerText = (`Agora é 1 hora`)
    }
    else{
        frase.innerText = (`Agora são ${hora} horas`)
    }
    
    if (hora <= 5 || hora >= 20) {
        fotohora.src = "imagens/noite.png"
        document.body.style.background = '#042244'
    }   
    else if (hora <= 7) {
        fotohora.src = "imagens/nascersol.png"
        document.body.style.background = '#d2a155'
    }
    else if (hora <= 17) {
        fotohora.src = "imagens/dia.png"
        document.body.style.background = '#7ea5d4'
    }
    else {
        fotohora.src = "imagens/porsol.png"
        document.body.style.background = '#f8a12e'
    }
    
}
