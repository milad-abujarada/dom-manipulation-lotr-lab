console.log("Linked.");

// Dramatis Personae
var hobbits = [
  'Frodo Baggins',
  'Samwise \'Sam\' Gamgee',
  'Meriadoc \'Merry\' Brandybuck',
  'Peregrin \'Pippin\' Took'
];

var buddies = [
  'Gandalf the Grey',
  'Legolas',
  'Gimli',
  'Strider',
  'Boromir'
];

var lands = ['The Shire', 'Rivendell', 'Mordor'];
var body = document.querySelector('body');


// Part 1


function makeMiddleEarth() {
  // create a section tag with an id of middle-earth
  // inside, add each land as an article tag
  // inside each article tag include an h1 with the name of the land
  // append middle-earth to your document body
  var middleEarth = document.createElement("section");
  var middleEarthId = middleEarth.setAttribute("id", "middle-earth");
  var articleCreation;
  var h1Creation;
  for (var i = 0; i < lands.length; i++) {
    articleCreation = document.createElement("article");
    var text = "<h1 id=\"" + lands[i] + "\">" + lands[i] + "</h1>";
    articleCreation.innerHTML = text;
    middleEarth.appendChild(articleCreation);
  }
  body.appendChild(middleEarth); 
}
makeMiddleEarth();

// Part 2

function makeHobbits() {
  // display an unordered list of hobbits in the shire (which is the first article tag on the page)
  // give each hobbit a class of hobbit
  var ulCreation = document.createElement("ul");
  var liCreation;
  for (var i = 0; i < hobbits.length; i++) {
    liCreation = document.createElement("li");
    liCreation.setAttribute("class", "hobbit");
    liCreation.innerHTML = hobbits[i];
    ulCreation.appendChild(liCreation);
  }
  var theShire = document.querySelector("article");
  theShire.appendChild(ulCreation);
}
makeHobbits();

// Part 3

function keepItSecretKeepItSafe() {
  // create a div with an id of 'the-ring'
  // give the div a class of 'magic-imbued-jewelry'
  // add an event listener so that when a user clicks on the ring, the nazgulScreech function (provided) is invoked
  // add the ring as a child of Frodo
  var divCreation = document.createElement("div");
  divCreation.setAttribute("id", "the-ring");
  divCreation.setAttribute("class", "magic-imbued-jewelry");
  var frodo = document.getElementsByClassName("hobbit")[0];
  frodo.appendChild(divCreation);
  frodo.addEventListener("click", nazgulScreech);
}
keepItSecretKeepItSafe();

// Part 4

function makeBuddies() {
  // create an aside tag
  // attach an unordered list of the 'buddies' in the aside
  // insert your aside as a child element of rivendell
  var asideCreation = document.createElement("aside");
  var ulCreation = document.createElement("ul");
  var ulInnerHTML = "";
  for (var i = 0; i < buddies.length; i++) {
    ulInnerHTML += "<li id=\"" + buddies[i] + "\">" + buddies[i] + " </li>";
  }
  ulCreation.innerHTML = ulInnerHTML;
  asideCreation.setAttribute("id", "theBuddies");
  document.querySelector("#Rivendell").appendChild(asideCreation);
  document.querySelector("#theBuddies").appendChild(ulCreation);
}
makeBuddies();

// Part 5


function beautifulStranger() {
  // change the 'Strider' textnode to 'Aragorn'
  document.getElementById("Strider").innerText = "Aragorn";
}
beautifulStranger();

// Part 6

function leaveTheShire() {
  // assemble the hobbits and move them to Rivendell
  document.getElementById("Rivendell").appendChild(document.getElementsByTagName("ul")[0]); 
}
leaveTheShire();

// Part 7

function forgeTheFellowShip() {
  // create a new div called 'the-fellowship' within rivendell
  // add each hobbit and buddy one at a time to 'the-fellowship'
  // after each character is added make an alert that they have joined your party
var theFellowShip = document.createElement("div");
theFellowShip.setAttribute("id", "the-fellowship");
document.getElementById("Rivendell").appendChild(theFellowShip);
var buddy;
for (var i = 0; i < buddies.length; i++) {
  buddy = document.getElementById(buddies[i]);
  document.getElementById("the-fellowship").appendChild(buddy);
}
var the_hobbits = document.getElementsByClassName("hobbit");
for (var i = 0; i< hobbits.length; i++) {
  document.getElementById("the-fellowship").appendChild(the_hobbits[0]);
}
}
forgeTheFellowShip();


// Part 8


function theBalrog() {
  // change the 'Gandalf' textNode to 'Gandalf the White'
  // apply style to the element
  // make the background 'white', add a grey border
  document.getElementById("Gandalf the Grey").innerText = "Gandalf the White";
  document.getElementById("Gandalf the Grey").style.background = "white";
  document.getElementById("Gandalf the Grey").style.borderColor = "grey";
  document.getElementById("Gandalf the Grey").style.borderWidth = "10px";
}
theBalrog();

// Part 9

function hornOfGondor() {
  // pop up an alert that the horn of gondor has been blown
  // Boromir's been killed by the Uruk-hai!
  // put a linethrough on boromir's name
  // Remove Boromir from the Fellowship
  alert("The horn of Gondor has been blown");
  document.getElementById("Boromir").style.textDecoration = "line-through";
  var removeBoromir = document.getElementById("Boromir");
  removeBoromir.parentNode.removeChild(removeBoromir);
}
hornOfGondor();

// Part 10

function itsDangerousToGoAlone(){
  // take Frodo and Sam out of the fellowship and move them to Mordor
  // add a div with an id of 'mount-doom' to Mordor
var parent = document.getElementById("Mordor").parentNode;
var the_hobbits = document.getElementsByClassName("hobbit");
for (var i = 0; i < 2 ; i++) {
  parent.appendChild(the_hobbits[0]);
}
var Mordor_div = document.createElement("div");
Mordor_div.setAttribute("id", "mount-doom");
document.getElementById("Mordor").appendChild(Mordor_div);
}
itsDangerousToGoAlone();

// Part 11

function weWantsIt() {
  // Create a div with an id of 'gollum' and add it to Mordor
  // Remove the ring from Frodo and give it to Gollum
  // Move Gollum into Mount Doom
var gollum_div = document.createElement("div");
gollum_div.setAttribute("id", "gollum"); 
document.getElementById("Mordor").appendChild(gollum_div);
document.getElementById("gollum").appendChild(document.getElementById("the-ring"));
document.getElementById("mount-doom").appendChild(document.getElementById("gollum"));
}
weWantsIt();

// Part 12

function thereAndBackAgain() {
  // remove Gollum and the Ring from the document
  // remove all the baddies from the document
  // Move all the hobbits back to the shire
  document.getElementById("mount-doom").removeChild(document.getElementById("gollum"));
  for (var i = 0; i < buddies.length - 1; i++) {
    document.getElementById("the-fellowship").removeChild(document.getElementById(buddies[i]));
  }
  var the_hobbits = document.getElementsByClassName("hobbit");
  for (var i = 0; i < hobbits.length; i++) {
    document.getElementById("The Shire").appendChild(the_hobbits[i]);
  }
}
thereAndBackAgain();
