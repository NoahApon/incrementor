
// INCREMENTING VARIABLES & RANDOM VALUES
let counter = 0;

// 1. Saving elements as variables cleans up your code.
//Number Counter Variables
var minus50Btn = document.getElementById("minus50");
var minus10Btn = document.getElementById("minus10");
var minus1Btn = document.getElementById("minus1");
var plus1Btn = document.getElementById("plus1");
var plus10Btn = document.getElementById("plus10");
var plus50Btn = document.getElementById("plus50");


var displayEl = document.getElementById("display");
var stringInEl = document.getElementById("strIn");
var stringOutEl = document.getElementById("strOut");

// 2. Incrementing. The ++, --, +=, and -= operators are used to update variables without losing what was there before
//Number Counter Incrementing 
minus50Btn.addEventListener("click", sub50);
minus10Btn.addEventListener("click", sub10);
minus1Btn.addEventListener("click", sub1);
plus1Btn.addEventListener("click", add1);
plus10Btn.addEventListener("click", add10);
plus50Btn.addEventListener("click", add50);

function sub50() {
    counter -= 50;
    displayEl.innerHTML = counter;
  }

  function sub10() {
    counter -= 10;
    displayEl.innerHTML = counter;
  }
  
  function sub1() {
    counter--;
    displayEl.innerHTML = counter;
  }
  

  function add1() {
  counter++;
  displayEl.innerHTML = counter;
}

 function add10() {
    counter += 10;
    displayEl.innerHTML = counter;
  }
  
  function add50() {
    counter += 50;
    displayEl.innerHTML = counter;
  }


   
// 3. The += operator also works to update strings. Also, the "change" event can remove the need for buttons!
stringInEl.addEventListener("change", updateStory);
var story = "Once upon a time, ";

function updateStory() {
  var newWord = stringInEl.value;

  stringInEl.value = ""; // clears the input

  story += newWord + " ";

  stringOutEl.innerHTML = story;
}

// 4. Math.random() is used to bring RNG (random number generator) to your applications.

//Id of Button
var rand1Btn = document.getElementById("rand1");
var rand2Btn = document.getElementById("rand2");
var rand3Btn = document.getElementById("rand3");
var rand4Btn = document.getElementById("rand4");
var randSizeBtn = document.getElementById("randomSize");
var randColorBtn = document.getElementById("random-rgb");
var clearBtn = document.getElementById("reset");

//Id of span
var rand1OutEl = document.getElementById("rand1-out");
var rand2OutEl = document.getElementById("rand2-out");
var rand3OutEl = document.getElementById("rand3-out");
var rand4OutEl = document.getElementById("rand4-out");
var randSizeOutEl = document.getElementById("HTML");
var randRGBOutEl = document.getElementById("HTML");
var resetOutEl = document.getElementById("HTML");

//Event listener of button
rand1Btn.addEventListener("click", showRand1);
rand2Btn.addEventListener("click", showRand2);
rand3Btn.addEventListener("click", showRand3);
rand4Btn.addEventListener("click", showRand4);
randSizeBtn.addEventListener("click", showRandSize)
randColorBtn.addEventListener("click", showRandColor)
clearBtn.addEventListener("click", fullReset)

//Functions
function showRand1() {
  var rand = Math.random();
  rand = rand.toFixed(3);
  rand1OutEl.innerHTML = rand;
}

function showRand2() {
    var randTwo = Math.floor(Math.random() * 100);
    randTwo = randTwo.toFixed(0);
    rand2OutEl.innerHTML = randTwo;
  }

  function showRand3() {
    var randThree = Math.floor(Math.random() * 10) -5;
    randThree = randThree.toFixed(0);
    rand3OutEl.innerHTML = randThree;
  }

  function showRand4() {
  var smallNum = +document.getElementById("rand-in1").value;
  var largeNum = +document.getElementById("rand-in2").value;
  let randFour = Math.random() * (largeNum - smallNum + 1) + smallNum;
  randFour = Math.floor(randFour);
  rand4OutEl.innerHTML = randFour
}

  function showRandSize() {
    var randomSizes = Math.floor(Math.random() * 20) + 5;
    randomSizeText = `${randomSizes}px`
    randSizeOutEl.style.fontSize = randomSizeText
  }

  function showRandColor() {
    var R = Math.floor(Math.random() * 255);
    var G = Math.floor(Math.random() * 255);
    var B = Math.floor(Math.random() * 255);
    randomColorFinal = `rgb(${R},${G},${B})`;
    randRGBOutEl.style.backgroundColor = randomColorFinal
  }

  function fullReset() {
    localStorage.clear()
  }

