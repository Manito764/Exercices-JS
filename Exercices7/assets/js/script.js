var submit=document.getElementById('submit');
submit.addEventListener('click',function submit(){
    var age=document.getElementById('age').value;
    if (age<18){
        result = 'Vous êtes Mineur'
    } else {
        result= 'Vous etes Majeur'
    }
    alert(result);
    })