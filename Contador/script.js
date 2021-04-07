function calcular() {
    let iminicio = document.getElementById("iminicio")
    let imfim = document.getElementById("imfim")
    let imsalto = document.getElementById("imsalto")
    if (iminicio.value.length == 0 || imfim.value.length == 0 || imsalto.value.length == 0) {
        window.alert("alguma caixa não foi preenchida")
    }
    else {
        let inicio = Number(iminicio.value)
        let fim = Number(imfim.value)
        let salto = Number(imsalto.value)
        res = document.getElementById("res")
        if (salto < 0) {
            erro()
            return
        }
        let sequencia = ("")

        if (inicio < fim) {
            while (inicio <= fim) {
                sequencia = sequencia + "👉" + inicio
                inicio = inicio + 1 + salto
            }
        }
        else if (inicio > fim) {
            while (inicio >= fim) {
                sequencia = sequencia + "👉" + inicio
                inicio = inicio - 1 - salto
            }
        }
        function erro() {
            sequencia = "Valores inválidos"
            res.innerText = sequencia
        }
        sequencia=sequencia+"🏁"
        res.innerText = sequencia
    }
}