//    Resuable function   { value int make }

function makeValueInt(id){
    let value=parseInt(document.getElementById(id).value);
    return value;
}
   
//    Resuable function   { only take value from input }

function takeValue(id){
    let inputValue= document.getElementById(id).value.trim();
    return inputValue;
}
//  Resuable function { set innertext }

function innerText(value){
    let valueSet=document.getElementById('available-balance');
    valueSet.innerText=value;
}

   const defaulPin=11111;

 
    //  Add Money  functionality

document.getElementById('btn-addmoney').addEventListener('click', function(e){
    e.preventDefault();
    
    let selectBank=document.getElementById('select-bank').value;

                     let bankAccountNumber= takeValue('bank-account-number')   
                    let ammoutToAdd= makeValueInt('ammout-to-add');

    let availableBalance=parseInt(document.getElementById('available-balance').innerText);

                    let pinNumber= makeValueInt('pin-number');


    if(bankAccountNumber.length !==11){
        alert("Invalid Bank Account");
        return ;
    }

    if(pinNumber !== defaulPin){
        alert('Wrong Pin You have Provided');
        return;
    }


    let total=ammoutToAdd + availableBalance;
                        innerText(total);
    
       document.getElementById('form').reset();
}) 



//  Cash out functionality

document.getElementById('cashout-btn').addEventListener('click', function(e){
    e.preventDefault();

                          let casoutAmout=makeValueInt('cashout-amount');

    let availableBalance=parseInt(document.getElementById('available-balance').innerText);

                // If condition Area

    let defaulPin=11111;
                            let agentNumber= takeValue('agent-number')
                            let pin= makeValueInt('cashout-pin-number')
    if(agentNumber.length !== 11){
        alert('Not a valid Agent Number');
        return;
    }
    if( pin !== defaulPin){
        alert('Not a valid Agent Number');
        return;
    }

    availableBalance=availableBalance-casoutAmout;

        // Insufficient Balance validation
      if(casoutAmout > availableBalance){
        alert("Insufficient Balance");
        document.getElementById('cash-form').reset();
        return;
        
    }

    innerText(availableBalance);

  
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