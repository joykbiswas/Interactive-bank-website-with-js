// step-1
document.getElementById('withdraw-btn').addEventListener('click',function(){
    // step-2
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawFieldString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawFieldString);
   
    //step-7
    withdrawField.value = '';
 

    if(isNaN(newWithdrawAmount)){
        alert('please provide a number');
        return
    }
    
    // step-3

    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);
    
    

    // step-5 
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    if(newWithdrawAmount > previousBalanceTotal){
        alert('do not enough balance');
        return;
    }

    //step-4
    const currentWithdrawTotal = newWithdrawAmount + previousWithdrawTotal;
    withdrawTotalElement.innerText = currentWithdrawTotal;
    
    //step-6
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount ;
    balanceTotalElement.innerText = newBalanceTotal;

})