//step-1 : add click button
document.getElementById('btn-submit').addEventListener('click', function(){
   //step-2: get the email address inside  the email input field
   // always remember to use value get text from an input field
   const emailField = document.getElementById('user-email');
   const email = emailField.value;
   
   //step-3: get password
   //    3.a :set id on the html element 
   //    3.b : get the element
   //    3.c: get the value form the element
   const passwordField = document.getElementById('user-password');
   const password = passwordField.value;
   
   
   //don't verify email password on the client side
   //strep-4: verify email and password  and check valid
   
   if(email === '' && password === '') {
       window.location.href = 'bank.html'
   }else{
    alert('incorrect password')
   }
   
})