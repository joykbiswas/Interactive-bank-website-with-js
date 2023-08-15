//step-1: add event listener in deposit button
document.getElementById('deposit-btn').addEventListener('click',function(){
    //step-2: get the deposit amount from deposit input field
    // for input field use the .value inside the input field
   const depositField = document.getElementById('deposit-field');
   const newDepositAmountString = depositField.value;
   const newDepositAmount = parseFloat(newDepositAmountString)
   
   //step-3: get the current deposit total
   // non-input (element other than input, text area) use innerText to get the text
   const depositTotalElement = document.getElementById('deposit-total');
   const previousDepositTotalString = depositTotalElement.innerText;
   const previousDepositTotal = parseFloat(previousDepositTotalString)
   
   //step-4: add number to set total deposit
   const currentDepositTotal =  previousDepositTotal + newDepositAmount;
    // set the deposit total
   depositTotalElement.innerText = currentDepositTotal;

   //step-5 : get ballance current total
   const balanceTotalElement = document.getElementById('balance-total');
   const previousBalanceTotalString = balanceTotalElement.innerText;
   const previousBalanceTotal = parseFloat(previousBalanceTotalString);
    // step-6:calculate current total balance
   const currentBalanceTotal = previousBalanceTotal + newDepositAmount ;
    //set the balance total
   balanceTotalElement.innerText = currentBalanceTotal;


   // step-7: current deposit field clear
   depositField.value ='';
})