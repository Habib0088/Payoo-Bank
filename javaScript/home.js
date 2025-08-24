document.getElementById('btn-addmoney').addEventListener('click', function(e){
    e.preventDefault();
    
    let selectBank=document.getElementById('select-bank').value;

    let bankAccountNumber=document.getElementById('bank-account-number').value;
    
    let ammoutToAdd=parseInt(document.getElementById('ammout-to-add').value);

    let availableBalance=parseInt(document.getElementById('available-balance').innerText);

    let total=ammoutToAdd + availableBalance;
    console.log(total);
    

    document.getElementById('available-balance').innerText=total
    
}) 