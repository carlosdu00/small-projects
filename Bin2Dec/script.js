function converter1() {
    var txtbinary = document.getElementById("binary")

    binary = txtbinary.value
    if (binary.length > 16) {
        window.alert("Please, enter 16 or less digits")
    }
    else if (bincheck(binary) == false) {
        window.alert("Please, Enter only 0 or 1")
    }
    else {
        let res = document.getElementById("decimal")
        let total = 0
        let x = 0
        for (let i = binary.length - 1; i >= 0; i--) {
            total = total + (binary[i] * Math.pow(2, x))
            x++
        }
        res.value = total
    }
}

function converter2() {
    var txtdecimal = document.getElementById("decimal")

    decimal = txtdecimal.value
    if (decimal.length > 8) {
        window.alert("Please, enter 8 or less digits")
    }
    else {
        let res = document.getElementById("binary")
        let total = ""

        for (let i = 7; decimal != 0; i--) {

            if (decimal % 2 != 0) {
                total = "1" + total
            }
            else {
                total = "0" + total
            }
            decimal = decimal / 2
            decimal = parseInt(decimal)

        }
        res.value = total
    }
}




function bincheck(entrada) {
    for (let i = entrada.length - 1; i >= 0; i--) {
        if (entrada[i] != 0 && entrada[i] != 1) {
            return false
        }
    }
    return true
}