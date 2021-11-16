//Création de la variable image
var pika=document.getElementById('pika');
var initwitdhpika = pika.clientWidth

// création de la fonction click pour intéragir au click

pika.addEventListener('click', function toto (){
// création d'une variable pour récuperer la largeur de l'image
var witdhpika = pika.clientWidth;
// Création d'une condition. Si la largeur de l'image est supérieure a 1500px
if (witdhpika>1500) {
// Alors elle reviens à sa taille d'origine
    pika.style.width = (initwitdhpika+'px')
    //sinon, elle agrandie sa taille de 10%
} else {
    pika.style.width = (witdhpika*1.1+'px')
}
});

console.log(initwitdhpika);
//Merci et a bientot :)

