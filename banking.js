
// handle deposit button event
document.getElementById('deposit-button').addEventListener('click', function (){
    // get the amount deposited
    const depositInput = document.getElementById('deposit-input');
    const newDepositText = depositInput.value;
    const newDepositAmount = parseFloat(newDepositText);
    // console.log(newDepositAmount);

    
    // update deposit total
    const totalDeposit = document.getElementById('total-deposit');
    const previousDepositText = totalDeposit.innerText;
    const previousDepositAmount = parseFloat(previousDepositText);
    const newDepositTotal = previousDepositAmount + newDepositAmount;
    totalDeposit.innerText = newDepositTotal;

    
    // update account balance
    const totalBalance = document.getElementById('total-balance');
    const totalBalanceText = totalBalance.innerText;
    const previousTotalBalance = parseFloat(totalBalanceText);
    const newTotalBalance = previousTotalBalance + newDepositAmount;
    
    totalBalance.innerText = newTotalBalance;

    // clear the deposit input field
    depositInput.value = '';
})




// withdraw event handler
document.getElementById('withdraw-button').addEventListener('click', function (){
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmountText = withdrawInput.value;
    const newWithdrawAmount = parseFloat(withdrawAmountText);
    console.log(newWithdrawAmount);

    // set total withdraw
    const totalWithdraw = document.getElementById('total-withdraw');
    const previousWithdrawText = totalWithdraw.innerText;
    const previousTotalWithdraw = parseFloat(previousWithdrawText);

    const newTotalWithdraw = previousTotalWithdraw + newWithdrawAmount;
    totalWithdraw.innerText = newTotalWithdraw;

    // update total balance
    const totalBalance = document.getElementById('total-balance');
    const previousBalanceText = totalBalance.innerText;
    const previousTotalBalance = parseFloat(previousBalanceText);
    const newTotalBalance = previousTotalBalance - newWithdrawAmount;

    totalBalance.innerText = newTotalBalance;

    // clear withdraw input
    withdrawInput.value = '';
})