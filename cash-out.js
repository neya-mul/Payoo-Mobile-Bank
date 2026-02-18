document.getElementById('widthdraw-button').addEventListener('click', function () {
    let money = document.getElementById('money');
    let currentAmmount = money.innerText;
    let agentNumber = document.getElementById('agent-number').value;
    let amount = document.getElementById('amount').value;

    let pin = document.getElementById('pin').value;
    let newAmount = Number(currentAmmount) - Number(amount);


    if (agentNumber === '01234567890' && pin === '1234') {
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