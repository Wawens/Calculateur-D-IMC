let poids = prompt("Quel est votre poids en (kg) "); //  On souhaite connaître le poids de nos utilisateurs 
let taille = prompt("Quel est votre taille en (cm)"); // On souhaite connaître la taille de nos utilisateurs 
//

function requiredInformation(poids, taill) {
    // 
    let tailleEnMetres = taill / 100;
    let tailleCalculee = Math.pow(tailleEnMetres, 2);
    let calcul = poids / tailleCalculee;
    return calcul;
}
console.log(requiredInformation(poids, taille))
alert(requiredInformation(poids, taille))