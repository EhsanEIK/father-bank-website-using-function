document.getElementById('btn-deposit').addEventListener('click', function () {
    const depositAmount = getElementValueById('deposit-field');
    const previousDepositBalance = getInnerTextById('deposit-balance');
    const totalBalance = getInnerTextById('total-balance');

    const newDepositBalance = add(previousDepositBalance, depositAmount);
    setInnerTextById('deposit-balance', newDepositBalance);

    const currentTotalBalance = totalBalance + depositAmount;
    setInnerTextById('total-balance', currentTotalBalance);
})