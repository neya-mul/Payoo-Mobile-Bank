document.getElementById('login-button').addEventListener('click', function () {

   let mobileNumber = document.getElementById('mobile-number').value;
   let pinNumber = document.getElementById('pin').value;
   if (mobileNumber.length === 11 && pinNumber.length === 4) {
      alert('login successfull');
      window.location.assign('./home.html')
   }
   else {
      alert('login failed')
      return;
   }
}) 