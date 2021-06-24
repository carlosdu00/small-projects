var num = document.getElementById("txtn")
var table = document.getElementById("seltable")
var numbersArray = []
var res = document.getElementById("res")
var calculatebtn = document.getElementById("calculatebtn")

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
    showBarAndButton();
}

function showBarAndButton() {
    table.className=("visible")
    calculatebtn.className=("visible")
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
        <p><strong>${numbersArray.length}</strong> values in total</p>
        <p><strong>${smallest}</strong> is the lowest value</p>
        <p><strong>${biggest}</strong> is the highest value</p>
        <p><strong>${soma}</strong> is the sum of all values</p>
        <p><strong>${soma / numbersArray.length}</strong> is the average</p>
        `)
}

num.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("button").click();
    }
})