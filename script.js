pass = document.querySelector('#password');
let alertBox = document.querySelector('.alertBox');
function getPassword()
{
    let chars = "0123456789qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM!@#$%^&*()_?><.{}:[]";
    let passwordLength = 16;
    let password = "";
    for (var i=0; i<passwordLength; i++)
    {
        var randomChars = Math.floor(Math.random() * chars.length);
        password += chars.substring(randomChars,randomChars+1); 
    }
    pass.value = password;
    alertBox.innerHTML = 'New Password Copied: <br>'+ password;
}
function copyPassword()
{
    let copyPassText = pass;
    copyPassText.select();
    copyPassText.setSelectionRange(0,9999);
    document.execCommand('copy');
    alertBox.classList.toggle('active');
    setTimeout(function(){
        alertBox.classList.toggle('active');
    },1000)
}