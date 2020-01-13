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
var numero = parseInt(prompt('scegli un numero tra 1 e 5'));
console.log(numero);

//Genero un numero random per il computer
var numRandom = Math.round(Math.random() * 5);
console.log(numRandom);

// Effettuo la somma dei numeri ottenuti
var somma = numero + numRandom;
console.log(somma);
