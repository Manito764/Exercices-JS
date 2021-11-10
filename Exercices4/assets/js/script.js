var submit=document.getElementById('submit');
submit.addEventListener('click',function submit(){

    var nom=document.getElementById('nom').value;
    var prenom=document.getElementById('prenom').value;
    var age=document.getElementById('age').value;
    alert('Votre Nom : '+nom+'\nVotre Prénom : '+prenom+'\nVotre Age : '+age);
    })

