initGame();
let moves = 0;

function initGame() {
    getRandomPictures()
    shuffleCards()
    initLeftClick()
}


function startTimer(){
    let sec = 0, min = 0;
    setInterval(function(){
        let timer = document.querySelector(".timer");
        timer.innerHTML = "Timer:" +min+ " Minutes " +sec+ " Seconds";
        sec++;

        if(sec == 60){
            min++;
            sec=0;
        }
    },1000);
}

function moveCounter() {
    let move_count = document.querySelector(".move_count")
    moves++;
    move_count.innerHTML = moves + " Moves";
}


function getRandomPictures() {
    let randomNumbers = []
    for (let i = 0; randomNumbers.length < 8; i++) {
        let randomNumber = Math.floor((Math.random() * 40) + 1)
        if (randomNumbers.includes(randomNumber)) {
        } else {
            randomNumbers.push(randomNumber)
        }
    }
    let cards = document.querySelectorAll(".card");
    let counter = 1;
    for (let card of cards) {
        if (counter % 2 == 1) {
            window.randomNumber = randomNumbers.pop()
        }
        card.children[0].setAttribute("src", "static/images/" + randomNumber + ".png")
        counter++;
    }
}


function moveCounter() {
    let move_count = document.querySelector(".move_count")
    moves++;
    move_count.innerHTML = moves + " Moves";
}


function shuffleCards() {
    let board = document.querySelector(".main-board");
    for (let i = board.children.length; i >= 0; i--) {
        board.appendChild(board.children[Math.random() * i | 0]);};
}


function initLeftClick() {
    let cards = document.querySelectorAll(".card");
    let counter = 0;
    for (let card of cards) {
        card.onclick = function(event) {
            moveCounter()
            event.currentTarget.children[0].classList.remove('hidden');
            counter++;
            if (counter === 1) {startTimer()}
            if (counter % 2 === 1) {
                window.firstPick = event.currentTarget.children[0];
            }
            if (counter % 2 === 0) {
                window.secondPick = event.currentTarget.children[0]

                if (firstPick.attributes[1].value === secondPick.attributes[1].value) {
                    firstPick.classList.add('matched')
                    secondPick.classList.add('matched')
                }
                else {
                    setTimeout(function() {
                        secondPick.classList.add('hidden')
                        firstPick.classList.add('hidden')
                    }, 3000)
                }
            }
        }
    }
}
