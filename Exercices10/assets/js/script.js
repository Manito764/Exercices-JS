var username=document.getElementById('username');
var correct="ariettelapute64";
var alerte=document.getElementById('alerte')

username.addEventListener('keyup', myFunction);

function myFunction() {
    if(username.value === correct){
  username.style.backgroundColor = "green";
  alerte.innerHTML='<div class="alert alert-success"><p>Ok Lets goooo!!!!!</p></div>';
} else {
    username.style.backgroundColor = "red";
    alerte.innerHTML='<div class="alert alert-danger"><p>Oh noooo :(</p></div>';
}
};

