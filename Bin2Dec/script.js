function converter() {
    var txtentrada = document.getElementById("entrada")

    entrada = txtentrada.value
    if (entrada.length > 8) {
        window.alert("Please, enter 8 or less digits")
    }
    else if (bincheck(entrada) == false) {
        window.alert("Please, Enter only 0 or 1")
    }
    else {
        var res = document.getElementById("res")
        var total = 0
        var x = 0

        for (var i = entrada.length - 1; i >= 0; i--) {
            total = total + (entrada[i] * Math.pow(2, x))
            x++
        }
        res.innerText=total
    }
}

function bincheck(entrada) {
    for (var i = entrada.length - 1; i >= 0; i--) {
        if (entrada[i] != 0 && entrada[i] != 1) {
            return false
        }
    }
    return true
}