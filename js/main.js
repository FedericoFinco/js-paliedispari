// let parolaUser=prompt("inserisci una parola")
// let alorap=""
const btnPalindromo=document.getElementById("btnPalindromo")

btnPalindromo.addEventListener("click",function(){
    let parolaUser=prompt("inserisci la parola")
    while (parolaUser==("")){
        parolaUser=prompt("inserisci almeno un carattere")
    }
    palindromoCheck(parolaUser)
})

function palindromoCheck(parola){
    let alorap=""
for (let i = parola.length; i >= 1 ; i--) {
    alorap=(alorap+parola[i - 1])    
}
if (parola==alorap){
    console.log(`la parola ${parola} è un palindromo`)
}
else{
    console.log(`la parola ${parola} NON è un palindromo`)
}
console
}




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
    let scelta=prompt("pari o dispari? scrivi la tua scelta")// to lower case
    while (scelta !==("pari") && scelta !==("dispari")) {
        scelta=prompt("pari o dispari? hai scritto altro")
    }
    let numeroUser=parseInt(prompt("inserisci un numero da 1 a 5"))
    
    while (numeroUser < 1 || numeroUser > 5) {   //while 1 || 5 || is nan e dentro if per log viersi
        numeroUser=parseInt(prompt("da 1 a 5 ho detto"))
    }
    console.log("il numero user è "+ numeroUser)
    while (isNaN(numeroUser)) {
        numeroUser=parseInt(prompt("un NUMERO da 1 a 5."))
    }

    let numeroPC=parseInt(getRandomNumber())
    let somma=numeroPC+numeroUser
    console.log("la somma è "+ somma)

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


//queryselect .checked per i radiobutton 