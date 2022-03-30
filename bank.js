// get function
function getInput(inputId) {
    const inputAmmount = document.getElementById(inputId);

    const inputAmmountText = inputAmmount.value;
    const newInputAmmount = parseFloat(inputAmmountText);
    inputAmmount.value = '';
    return newInputAmmount;

}
// update function
function updateField(inputId, ammount) {
    const updateAmmount = document.getElementById(inputId);
    const updateAmmountText = updateAmmount.innerText;
    const newUpdateAmmount = parseFloat(updateAmmountText);
    const finalAmmount = newUpdateAmmount + ammount;
    updateAmmount.innerText = finalAmmount;
}
// currenrbalance
function getCurrentBallance(inputId){
    const updateBalance = document.getElementById(inputId);
    const updateBalanceText = updateBalance.innerText;
    const newUpdateBalance = parseFloat(updateBalanceText);
    return newUpdateBalance;
}

// update blance
function balance(inputId, balanceAmmount, isAdd) {
    const updateBalance = document.getElementById(inputId);
    const updateBalanceText = updateBalance.innerText;
    const newUpdateBalance = parseFloat(updateBalanceText);
    // const newUpdateBalance = getCurrentBallance();

    if (isAdd == true) {
        updateBalance.innerText = newUpdateBalance + balanceAmmount;
    } else {
        updateBalance.innerText = newUpdateBalance - balanceAmmount;
    }

}

// deposite 
document.getElementById('deposite-button').addEventListener('click', function () {
    const depositeInput = getInput('deposite-input');
    if (depositeInput > 0) {
        updateField('deposite-total', depositeInput);
        balance('balance-total', depositeInput, true);
    }

});

// witdraw
document.getElementById('witdraw-button').addEventListener('click', function () {
    const witdrawInput = getInput('witdraw-input');
    const currentBalance = getCurrentBallance('balance-total');
    if (witdrawInput > 0 && witdrawInput < currentBalance) {
        updateField('witdraw-total', witdrawInput);
        balance('balance-total', witdrawInput, false);
    }
    if(witdrawInput >= currentBalance){
        alert('Add Some Cash To Make The Transaction')
    }

});