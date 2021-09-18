const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkButton = document.querySelector("#check");
const errorMessage = document.querySelector("#error-message");

checkButton.addEventListener("click", function validBillAmount() {
    errorMessage.style.display = "none";
    if (billAmount.value > 0 && cashGiven > 0) {
        if (billAmount.value >= cashGiven.value) {
           const amountToBeReturn=cashGiven.value-billAmount.value;
        } else {
            showMessage("cash value should be atleast bill value");
        }
    } else {
        showMessage("cash value should be grater than 0");
    }
});

function showMessage(message) {
    errorMessage.style.display = "block";
    errorMessage.innerText = message;
}


function calculateChange(){
    
}