var num = document.getElementById("txtn")
var table = document.getElementById("seltable")
var numbersArray = []
var res = document.getElementById("res")

function add() {
    if (num.value.length == 0) {
        window.alert("Value not informed!")
    }
    else {
        let n = Number(num.value)
        let item = document.createElement("option")
        item.text = n
        numbersArray.push(Number(n))
        table.appendChild(item)
        num.value = ""
    }
}
function calculate() {
    if (numbersArray.length == 0) {
        window.alert("Value not informed!")
    }
    let smallest = numbersArray[0]
    let biggest = numbersArray[0]
    let soma = 0

    for (i = 0; i < numbersArray.length; i++) {
        if (numbersArray[i] < smallest) { smallest = numbersArray[i] }
        if (numbersArray[i] > biggest) { biggest = numbersArray[i] }
        soma = soma + numbersArray[i]
    }
    res.innerHTML = (`
        <p>${numbersArray.length} entered in total</p>
        <p>${smallest} is the smallest value</p>
        <p>${biggest} is the biggest value</p>
        <p>${soma} is the sum of all values</p>
        <p>${soma / numbersArray.length} is the average</p>
        `)
}

num.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("button").click();
    }
})