document.getElementById('btn-deposit').addEventListener('click', function () {
    const depositAmount = getElementValueById('deposit-field');
    const previousDepositBalance = getInnerTextById('deposit-balance');
    const totalBalance = getInnerTextById('total-balance');
    if (isNaN(depositAmount)) {
        alert("Please Provide A Number");
        return;
    }

    const newDepositBalance = add(previousDepositBalance, depositAmount);
    setInnerTextById('deposit-balance', newDepositBalance);

    const currentTotalBalance = totalBalance + depositAmount;
    setInnerTextById('total-balance', currentTotalBalance);
})