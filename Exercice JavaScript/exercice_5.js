//Boite de dialogue pour saisir le premier nombre à virgule
let nombre1 = prompt("Premier nombre à virgule?")

//je garde que la ârtie entieère du premier nombre
let nombre_entier = Math.trunc(nombre1)

//Boite de dialogue pour saisir le deuxième nombre à virgule
let nombre2 = prompt("Deuxième nombre à virgule?")

//je fais mon calcul
let calcul = nombre_entier*nombre2

//affichage dans une boite de dialogue
alert("Resutat : "+calcul)