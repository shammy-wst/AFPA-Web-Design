const counter = document.getElementById('counter') //Récupération de l'élément qui à l'Id "counter"
console.log(1)

function getChrono(){ //création d'une fonction
    const now = new Date().getTime(); //récupération de la date d'ajourd'hui
    const countdownDate = new Date('March 5, 2023') //La date de fin du compteur
    const distanceBase = countdownDate - now //Date de fin moin la date d'aujourd'hui

    //convertir la somme de distanceBase en jours, heures et secondes

    const days = Math.floor(distanceBase / (1000 * 60 * 60 * 24))
    const hours  = Math.floor((distanceBase % (1000 * 60 * 60 * 24)) /
    (1000 * 60 * 60))
    const seconds = Math.floor((distanceBase % (1000 * 60)) / 1000)

    counter.innerText = `${days}j ${hours}h ${seconds}s` //Ecrire dans l"élément counter
    
}

getChrono() //Appel de la fonction


//Utilisation de setInterval qui va nous permettre de rejouer la fonction toutes les secondes
const countDownInterval = setInterval(() => {
    getChrono()
}, 1000)

