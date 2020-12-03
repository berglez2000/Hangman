const keys = document.querySelectorAll("button[data-key]");
const guess = document.querySelector(".guess p");
const image = document.querySelector(".picture img");
let words = [
    
    "CHICKEN", "BROCCOLI", "TOMATO", "POTATO", "TURKEY", "HAMBURGER",

];
let images = [];
let random = Math.floor(Math.random() * words.length);
let randomWord = words[random];
let array = [];
let wrongGuesses = 0;


//Load all images
for (let i = 0; i <= 6; i++){
    images.push(`images/hangman${i}.png`);
}


//Unpacking keys
keys.forEach(function(key) {
    key.addEventListener("click", function(){
        let letter = key.textContent;        
        let index = randomWord.indexOf(letter);
        if (randomWord.includes(letter) === true){
            if (index === randomWord.lastIndexOf(letter)){
                array[index] = letter;
                guess.textContent = array.join(" ");
            } else{
                array[index] = letter;
                array[randomWord.lastIndexOf(letter)] = letter;
                guess.textContent = array.join(" ");
            }
            //You Won!
            if (array.includes("_") === false){
                winOrLose("YOU WON!")
            }
        } else{
            image.src = images[wrongGuesses];
            if (wrongGuesses >= images.length - 1){
                winOrLose("YOU LOST!");
            } else{
                wrongGuesses++;
            }
        }
        //Animation
        key.classList.add("clicked");
    })
})

//Functions
function chooseRandomWord(){
    for (let i = 0; i < randomWord.length; i++){
        array.push("_");
    }
    guess.textContent = array.join(" ");
}

function winOrLose(msg){
    const body = document.querySelector("body");
    const newElement = document.createElement("section");
    const newParagraph = document.createElement("p");
    newParagraph.textContent = msg;
    const btn = document.createElement("button");
    btn.textContent = "PLAY AGAIN";
    btn.classList.add("play-again");
    newElement.appendChild(newParagraph);
    newElement.appendChild(btn);
    //Append to body element
    body.appendChild(newElement);

    btn.addEventListener("click", function(){
        location.reload();
    })
}


//Calling the functions
chooseRandomWord();