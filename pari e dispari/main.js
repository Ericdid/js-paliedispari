//l'utente sceglie pari o dispari
let userEvenOrOdd = parseInt(
  prompt("seleziona un numero,se è pari sarai pari altrimenti sarai dispari")
);
//L'UTENTE SCEGLIE PARI O DISPARI
while (isNaN(userEvenOrOdd)) {
  userEvenOrOdd = parseInt(
    prompt("seleziona un numero,se è pari sarai pari altrimenti sarai dispari")
  );
}
if (userEvenOrOdd % 2 == 0) {
  userEvenOrOdd = true;
  console.log("sei pari!");
} else {
  userEvenOrOdd = false;
  console.log("sei dispari!");
}

// l utente sceglie un numero da 1 a 5
let userNumber = parseInt(prompt("seleziona un numero da 1 a 5"));

// L UTENTE SCEGLIE UN NUMERO DA 1 A 5
while (userNumber > 5 || userNumber == 0 || isNaN(userNumber)) {
  userNumber = parseInt(prompt("seleziona un numero da 1 a 5"));
}

console.log("il numero del utente è: " + userNumber);

//generiamo un numero random (usando una funzione) per il computer
function computerNumber() {
  const randomNumber = Math.floor(Math.random() * 5) + 1;
  return randomNumber;
}

//mantengo il numero generato dal computer

compNumber = computerNumber(1);

// richiamo la funzione
console.log("il numero del computer è: " + compNumber);

//sommiamo i due numeri
const sum = compNumber + userNumber;

console.log("la somma è: " + sum);

// stabiliamo se la somma dei due numeri è pari o dispari (funzione)
function oddOrEven() {
  if (sum % 2 == 0) {
    console.log("la somma è pari");
    return true;
  } else {
    console.log("la somma è dispari");
    return false;
  }
}
//richiamo la funzione
oddOrEven(1);

//mantengo il pari o dispari
const result = oddOrEven(1);

if (userEvenOrOdd == result) {
  console.log("hai vinto!");
} else {
  console.log("hai perso");
}
