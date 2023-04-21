// let parolaUser=prompt("inserisci una parola")
// let alorap=""

// function palindromoCheck(parola){
// for (let i = parola.length; i >= 1 ; i--) {
//     alorap=(alorap+parola[i - 1])    
// }
// if (parolaUser==alorap){
//     console.log(`la parola ${parolaUser} è un palindromo`)
// }
// else{
//     console.log(`la parola ${parolaUser} NON è un palindromo`)
// }
// console.log(parola)
// console.log(alorap)
// }
// palindromoCheck(parolaUser)



function getRandomNumber () {
    let numero   
    //Math.floor( Math.random() * (max - min + 1) + min)
    numero = Math.floor( Math.random() * (5 - 1 + 1 ) + 1)
    return numero
}
function isPariOrDispari(numero) {
    let risultato= false
    if(numero % 2 ==1 ) {
        risultato=true
    }
    return risultato
}

const btnPari=document.getElementById("btnPari")

btnPari.addEventListener("click",function(){
    let scelta=prompt("pari o dispari? scrivi la tua scelta")
    while (scelta !==("pari") && scelta !==("dispari")) {
        scelta=prompt("pari o dispari? hai scritto altro")
    }
    let numeroUser=parseInt(prompt("inserisci un numero da 1 a 5"))
    
    while (numeroUser < 1 || numeroUser > 5) {
        numeroUser=parseInt(prompt("da 1 a 5 ho detto"))
    }
    console.log(numeroUser)
    while (isNaN(numeroUser)) {
        numeroUser=parseInt(prompt("un NUMERO da 1 a 5."))
    }

    let numeroPC=parseInt(getRandomNumber())
    let somma=numeroPC+numeroUser
    console.log(somma)

    if (scelta==("pari") && isPariOrDispari(somma)==false){
        alert("hai vinto")
    }
    else if (scelta==("dispari") && isPariOrDispari(somma)==true) {
        alert("hai vinto")
    }
    else {
        alert("hai perso")
    }
    
})

console.log(isPariOrDispari(3))

// let numeroUser=prompt("inserisci numero")
// numeroPC=getRandomNumber()

// if (numeroUser<numeroPC){
//     console.log("cacca")
// }
// else{
//     console.log("pipi")
// }