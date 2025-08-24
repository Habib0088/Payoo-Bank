document.getElementById('btn-login').addEventListener('click', function(e){
    e.preventDefault();
    // Set default value

    let defaultMobile=123456789;
    let defaultPassword=55555;

    let mobileInput=document.getElementById('mobile').value;
    let mobileInputInt=parseInt(mobileInput);

    let passwordInput=document.getElementById('password').value;
    let passwordInputInt=parseInt(passwordInput);

    if(defaultMobile=== mobileInputInt && defaultPassword === passwordInputInt){
       window.location.href='home.html';
       
    }
    else{
        console.log('not matched');
        
    }
    
})