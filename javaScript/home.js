    const defaulPin=11111;

 

document.getElementById('btn-addmoney').addEventListener('click', function(e){
    e.preventDefault();
    
    let selectBank=document.getElementById('select-bank').value;

    let bankAccountNumber=document.getElementById('bank-account-number').value;
    
    let ammoutToAdd=parseInt(document.getElementById('ammout-to-add').value);

    let availableBalance=parseInt(document.getElementById('available-balance').innerText);

    let pinNumber=parseInt(document.getElementById('pin-number').value)


    if(bankAccountNumber.length !==11){
        alert("Invalid Bank Account");
        return ;
    }

    if(pinNumber !== defaulPin){
        alert('Wrong Pin You have Provided');
        return;
    }


    let total=ammoutToAdd + availableBalance;
    document.getElementById('available-balance').innerText=total
    
       document.getElementById('form').reset();
}) 



//  Cash out functionality

document.getElementById('cashout-btn').addEventListener('click', function(e){
    e.preventDefault();

    let casoutAmout=parseInt(document.getElementById('cashout-amount').value);

    let availableBalance=parseInt(document.getElementById('available-balance').innerText);

                // If condition Area

    let defaulPin=11111;
    let agentNumber=document.getElementById('agent-number').value.trim();
    let pin=parseInt(document.getElementById('cashout-pin-number').value);
    if(agentNumber.length !== 11){
        alert('Not a valid Agent Number');
        return;
    }
    if( pin !== defaulPin){
        alert('Not a valid Agent Number');
        return;
    }

    availableBalance=availableBalance-casoutAmout;

    document.getElementById('available-balance').innerText=availableBalance;

    document.getElementById('cash-form').reset();
})
// Transaction area Toogle

// add money

document.getElementById('add-money').addEventListener('click', function(){
    document.getElementById('cash-out-toogle').style.display='none';
    document.getElementById('add-money-toogle').style.display='block';
})

// CashOut 

document.getElementById('cash-out').addEventListener('click', function(){
    document.getElementById('add-money-toogle').style.display='none';
    document.getElementById('cash-out-toogle').style.display='block'
})