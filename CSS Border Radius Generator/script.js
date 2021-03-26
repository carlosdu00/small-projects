function makeborder() {
    inputbordertxt = document.getElementById("inputborder")
    res = document.getElementById("res")
    if (inputbordertxt.value.length == 0) {
        inputborder = 0
    }
    else {
        inputborder = inputbordertxt.value
    }
    document.getElementById("painel").style.borderRadius = inputborder + "px";
    res.innerText = `border-radius: ${inputborder}px;`
    return
}