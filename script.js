pass = document.querySelector('#password');
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
}