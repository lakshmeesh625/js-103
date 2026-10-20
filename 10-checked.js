let subscribe = document.getElementById("subscribe")
let visa = document.getElementById("visa")
let mastercard = document.getElementById("mastercard")
let rupay = document.getElementById("rupay")
let submit = document.getElementById("submit")
let result = document.getElementById("result")

submit.onclick = function () {
    if (subscribe.checked) {
        console.log("You have subscribed")
    }
    else {
        console.log("You havent subscribed")
    }

    if (visa.checked) {
        console.log("You have chosesn visa as your payment method")
    }
    else if (rupay.checked) {
        console.log("You have chosen rupay as your payment method")
    }
    else if (mastercard.checked) {
        console.log("You have chosen mastercard as your payment method")
    }
    else {
        console.log("You havent chosen any card please select a card for your payment")
    }
}



