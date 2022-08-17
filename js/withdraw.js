document.getElementById('btn-withdraw').addEventListener('click', function () {
    const withdrawAmount = getElementValueById('withdraw-field');
    const previousWithdarwBalance = getInnerTextById('withdraw-balance');
    const totalBalance = getInnerTextById('total-balance');

    const newWithdrawBalance = add(previousWithdarwBalance, withdrawAmount);
    setInnerTextById('withdraw-balance', newWithdrawBalance);

    const currentTotalBalance = totalBalance - withdrawAmount;
    setInnerTextById('total-balance', currentTotalBalance);
})