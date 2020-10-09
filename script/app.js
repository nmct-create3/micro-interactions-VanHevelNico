function handleFloatingLabel() {
   
}

function handlePasswordSwitcher() {
    btn = document.getElementsByClassName("js-password-toggle");
    for (var i = 0 ; i < btn.length; i++) {
        btn[i].addEventListener('change' , changePass, btn[i] ) ; 
     }     
}

function changePass () {
    console.log('ik werk');
    input = document.getElementById("password");
    if(this.checked) {
        input.type = 'text';
    } else {
        input.type = 'password';
    }
}

document.addEventListener('DOMContentLoaded', function () {
    console.log('Script loaded!');
    handleFloatingLabel();
    handlePasswordSwitcher();
});