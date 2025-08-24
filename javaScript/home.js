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
