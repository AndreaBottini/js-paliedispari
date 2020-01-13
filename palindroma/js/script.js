// alert('sta funzionando?')

// 1. Scrivi una funzione per capire se la parola è palindroma
// 2. Gioco Pari e dispari:
// L’utente sceglie pari o dispari e un numero da 1 a 5.
// Generiamo un numero random (sempre da 1
// a 5) per il computer.
// Sommiamo i due numeri e dichiariamo chi ha
// vinto (controlliamo se la somma da pari o dispari).

// Scrivi una funzione per capire se la parola è palindroma
// Creo un prompt per chiedere all'utente di inserire una parola
var parolaUtente = prompt('Scrivi una parola');
console.log(parolaUtente);
// Creo una var per il controllo della parola palindroma
var palindroma = controlloPalindroma(parolaUtente);
console.log(palindroma);

function controlloPalindroma(parola) {
  var parolaInversa = '';
  // voglio controllare lettera per lettera, creo un ciclo for.
  for (var i = parola.length - 1; i >= 0; i--) {
    console.log(parola[i]);
    parolaInversa = parolaInversa + parola[i];
  }
  console.log(parolaInversa);
  // creo un if per definire se la parola inserita dall'utente è palindroma o meno
  if (parolaInversa == parola) {
    console.log('la parola inserita è palindroma');
    return true;
  }
  else {
    console.log('la parola inserita non è palindroma');
    return false;
  }
}



// for (var i = 10; i >= 1; i--) {
//   console.log(i);
// }
