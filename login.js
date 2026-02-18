document.getElementById('login-button').addEventListener('click', function () {

    let mobileNumber = document.getElementById('mobile-number').value;
    let pinNumber = document.getElementById('pin').value;
     if(mobileNumber === '01234567890' && pinNumber === '1234'){
        alert('login successfull');
        window.location.assign('./home.html')
     }
     else{alert('login failed')
        return;
     }
})