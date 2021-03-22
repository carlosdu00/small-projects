function verificar() {
    var agora = new Date()
    var ano = agora.getFullYear()
    var fano = document.getElementById("txtano")
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert("Erro! Ano não informado ou errado")
    }
    else {
        var idade = ano - fano.value
        var fsex = document.getElementsByName("radsex")
        var foto = document.getElementById("foto")
        var genero = ""
        if (fsex[0].checked) {
            genero = "Homem"
            if (idade >= 0 && idade <= 5) {
                foto.src = "midia/05m.png"
            }
            else if (idade <= 12) {
                foto.src = "midia/612m.png"
            }
            else if (idade <= 17) {
                foto.src = "midia/1317m.png"
            }
            else if (idade <= 27) {
                foto.src = "midia/1827m.png"
            }
            else if (idade <= 50) {
                foto.src = "midia/2850m.png"
            }
            else {
                foto.src = "midia/50m.png"
            }
        }
        else {
            genero = "Mulher"
            if (idade >= 0 && idade <= 5) {
                foto.src = "midia/05f.png"
            }
            else if (idade <= 12) {
                foto.src = "midia/612f.png"
            }
            else if (idade <= 17) {
                foto.src = "midia/1317f.png"
            }
            else if (idade <= 27) {
                foto.src = "midia/1827f.png"
            }
            else if (idade <= 50) {
                foto.src = "midia/2850f.png"
            }
            else {
                foto.src = "midia/50f.png"
            }
        }
        var res = document.getElementById("res")
        if (idade < 2) {
            res.innerText = `${genero} de 1 ano`
        }
        else {
            res.innerText = `${genero} de ${idade} anos`
        }

    }
}
