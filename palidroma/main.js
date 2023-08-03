//inseriamo una parola

const word = prompt("scrivi una parola e scriverò se è palindroma");

//creiamo una funzione

const Palindrome = isPalindrome(word);

// risoluzioni
if (Palindrome) {
  console.log("la parola è palindroma");
} else {
  console.log("la parola non è palindroma");
}

//funzione
function isPalindrome(word) {
  let reverseWord = "";
  let rightWord = "";

  for (let i = 0; i < word.length; i++) {
    const letter = word[i];
    console.log(letter);

    rightWord = rightWord + letter;
    reverseWord = letter + reverseWord;
    console.log(reverseWord);
  }
  return word == reverseWord;
}
