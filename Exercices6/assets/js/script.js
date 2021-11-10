var submit=document.getElementById('submit');
submit.addEventListener('click',function submit(){

    var number1=document.getElementById('shoesize').value;
    var number2=document.getElementById('birthdate').value;
    var resultat=(((((number1*2)+5)*50)-number2)+1769)
    alert(resultat);
    })