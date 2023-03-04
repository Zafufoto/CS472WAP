function calculTip(){
    "use strict"
let subtotal = parseInt(document.getElementById("subtotal").value);
let rate = parseInt(document.getElementById("tip").value);
let totalAmount = subtotal + (rate/100) * subtotal;
document.getElementById("total").innerHTML="$"+totalAmount;
}
