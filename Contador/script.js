function calcular() {
    var iminicio = document.getElementById("iminicio")
    var imfim = document.getElementById("imfim")
    var imsalto = document.getElementById("imsalto")
    if (iminicio.value.length == 0 || imfim.value.length == 0 || imsalto.value.length == 0) {
        window.alert("alguma caixa não foi preenchida")
    }
    else {
        var inicio = Number(iminicio.value)
        var fim = Number(imfim.value)
        var salto = Number(imsalto.value)
        res = document.getElementById("res")
        if (salto < 0) {
            erro()
            return
        }
        var sequencia = ("")

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
        function erro(params) {
            sequencia = "Valores inválidos"
            res.innerText = sequencia
        }
        sequencia=sequencia+"🏁"
        res.innerText = sequencia
    }
}