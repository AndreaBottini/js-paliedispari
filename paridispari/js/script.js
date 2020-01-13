// alert('sta funzionando?')

// 2. Gioco Pari e dispari:
// L’utente sceglie pari o dispari e un numero da 1 a 5.
// Generiamo un numero random (sempre da 1
// a 5) per il computer.
// Sommiamo i due numeri e dichiariamo chi ha
// vinto (controlliamo se la somma da pari o dispari).

// Chiedo all'utente di scegliere tra pari o dispari
var sceltaUtente = prompt('Scegli tra pari o dispari');
console.log(sceltaUtente);

// Chiedo all'utente di scegliere un numero tra 1 e 5
var numero = parseInt(prompt('Scegli un numero tra 1 e 5'));
console.log(numero);

//Utilizzo Math.round e Math.random per generare un numero casuale
var numRandom = Math.round(Math.random() * 5);
console.log(numRandom);

// Effettuo la somma dei numeri ottenuti
var somma = numero + numRandom;
console.log(somma);

// Controllo se il risultato è pari o dispari e la scelta dell'utente effettuata all'inizio. Da qui scrivo un if con le varie possibilità
if (somma % 2 == 0 && sceltaUtente == 'pari'){
  console.log('hai vinto la tua mano!');
}
else if (somma % 2 != 0 && sceltaUtente == 'dispari') {
  console.log('hai vinto la tua mano!');
}
else if (somma % 2 != 0 && sceltaUtente == 'pari') {
  console.log('hai perso la tua mano!')
}
else if (somma % 2 == 0 && sceltaUtente == 'dispari') {
  console.log('hai perso la tua mano!')
}
