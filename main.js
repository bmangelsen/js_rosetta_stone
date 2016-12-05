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

console.log("SIX CHARACTER WORDS:");
function lengthCheck (word) {
  if ( word.length == 6 ) {
    console.log(word);
  }
}

newSentence.forEach(lengthCheck);

//Create an array of movies with budgets of less than 100 and another array of movies that starred Leonard DiCaprio.


var movies = [];
movies.push({
  title: "Forest Gump",
  budget: 55,
  stars: ["Tom Hanks"]
});
movies.push({
  title: "Star Wars",
  budget: 11,
  stars: ["Mark Hamill", "Harrison Ford"]
});
movies.push({
  title: "Batman Begins",
  budget: 150,
  stars: ["Christian Bale", "Liam Neeson", "Michael Caine"]
});
movies.push({
  title: "Titanic",
  budget: 200,
  stars: ["Kate Winslet", "Leonardo DiCaprio"]
});
movies.push({
  title: "Inception",
  budget: 160,
  stars: ["Leonardo DiCaprio", "JGL"]
});

var lowBudget = [];
var leoMovies = [];

movies.forEach( function cheap (movie) {
  if ( movie.budget < 100 ) {
    lowBudget.push(movie);
  }
});

movies.forEach(function leo (movie) {
  if ( movie.stars.includes("Leonardo DiCaprio")) {
    leoMovies.push(movie);
  }
});

console.log("LOW BUDGET MOVIES:");
for ( x = 0; x < lowBudget.length; x++) {
  console.log(lowBudget[x].title)
}

console.log("LEONARDO MOVIES:");
for ( x = 0; x < leoMovies.length; x++) {
  console.log(leoMovies[x].title)
}

var button = document.getElementById("buttonid");
button.addEventListener("click", function() { alert(document.getElementById("inputid").value);});
button.addEventListener("mouseover", function() { this.style.backgroundColor = "red";});
button.addEventListener("mouseout", function() { this.style.backgroundColor = "white";});
