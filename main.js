// Assign "Hello World" to a variable message
var message = "Hello World";
console.log(message);

// Assign a different string to a different variable
var question = "Hello World?";
console.log(question);

// Assign a number to a variable
var age = 26;
console.log(age);

// Use string concatenation to display the number in a string.
var myAge = "My age is " + age;
console.log(myAge);

// Make an array of your favorite movies or books or bands. Have at least 4 values.
var movies = ["The Fellowship of the Ring", "The Two Towers", "The Return of the King", "The Hobbit"];
console.log(movies);

//Turn a sentence into an Array, and select the words that are six characters long.
var sentence = "Schlitz four dollar toast godard truffaut bespoke neutra artisan pop-up. Chia keytar single-origin coffee sustainable disrupt.";
var newSentence = sentence.replace(/\./g, "").split(" ");
console.log(newSentence);

function lengthCheck (word) {
  if ( word.length == 6 ) {
    console.log(word);
  }
}

newSentence.forEach(lengthCheck);
