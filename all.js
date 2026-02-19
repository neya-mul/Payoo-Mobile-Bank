document.getElementById('widthdraw-button').addEventListener('click', function () {
    let money = document.getElementById('money');
    let currentAmmount = money.innerText;
    let agentNumber = document.getElementById('agent-number').value;
    let amount = document.getElementById('amount').value;

    let pin = document.getElementById('pin').value;
    let newAmount = Number(currentAmmount) - Number(amount);


    if (agentNumber.length === 11 && pin.length === 4) {
        if (Number(currentAmmount) < Number(amount)) {
            alert('Unsufficient Amount');
            return;
        }

        else {
            alert('Withdraw successful');
            money.innerText = newAmount;
        }
    }
    else {
        alert('Invalid Information');
    }

})


document.getElementById('add-money-button').addEventListener('click', function () {
    let money = document.getElementById('money');
    let currentAmmount = money.innerText;
    let agentMobileNumber = document.getElementById('agent-mobile-number').value;
    let addMoneyAmount = document.getElementById('add-money-amount').value;
    let addMoneyPin = document.getElementById('add-money-pin').value;
    let newAmount = Number(currentAmmount) + Number(addMoneyAmount);
    if (agentMobileNumber.length === 11 && addMoneyPin.length === 4) {
        alert('Money Added')
        money.innerText = newAmount;
    }
    else {
        alert('Invalid Information')
    }

})

document.getElementById('cash-out').addEventListener('click', function () {
    let cashOut = document.querySelector('.cash-out-form')
    cashOut.style.display = 'block'
    let cashIn = document.querySelector('.cash-in-form');
    cashIn.style.display = 'none'
})

document.getElementById('add-money').addEventListener('click', function () {
    let cashOut = document.querySelector('.cash-out-form')
    cashOut.style.display = 'none'
    let cashIn = document.querySelector('.cash-in-form');
    cashIn.style.display = 'block'
})

document.getElementById('history').addEventListener('click', function () {
    let body = document.getElementById('main');
    let notification = document.createElement('p');
    notification.innerText = 'Your Money Amount has changed.';
    notification.style.padding = '15px'
    notification.style.backgroundColor = 'white'
    notification.style.marginTop = '20px'
    notification.style.borderRadius = '20px'
    notification.style.textAlign = 'center'

    body.appendChild(notification)
    let cashOut = document.querySelector('.cash-out-form')
    cashOut.style.display = 'none'
    let cashIn = document.querySelector('.cash-in-form');
    cashIn.style.display = 'none'

})