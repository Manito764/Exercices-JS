// Création de la variable de l'input du formulaire
var username=document.getElementById('username');
// Création de la variable qui donne le nom d'utilisateur attendu
var correct="ariettelapute64";
// Création de la variable qui cible la div ou viendra s'implementer' l'alerte
var alerte=document.getElementById('alerte')

// Création de la fonction avec l'evenement keyup ( Lorsque la touche est relachée 
username.addEventListener('keyup', myFunction);

function myFunction() {
  // Si la valeur saisie dans l'input du formulaire est égale à la valeur attendue, alors le fond passe en vert et ...
    if(username.value === correct){
  username.style.backgroundColor = "green";

  // On implemente ce HTML dans la div Alerte
  alerte.innerHTML='<div class="alert alert-success"><p>Ok Lets goooo!!!!!</p></div>';

  //Si la valeur saisie n'est pas celle attendue alors 
} else {
  // Fond rouge
    username.style.backgroundColor = "red";
  // On implemente ce HTML dans la div Alerte 
    alerte.innerHTML='<div class="alert alert-danger"><p>Oh noooo :(</p></div>';
}
};

