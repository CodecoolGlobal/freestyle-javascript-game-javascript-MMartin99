initGame();
let moves = 0;


function initGame() {
    getRandomPictures()
    shuffleCards()
    initLeftClick()
}


function startTimer(){
    let sec = 0, min = 0;
    window.interval = setInterval(function(){
        let timer = document.querySelector(".timer");
        timer.innerHTML = min + " Minutes " + sec + " Seconds";
        sec++;

        if(sec == 60){
            min++;
            sec=0;
        }
    },1000);
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
            let openCards = 0
            let matchedCards = 0
            for (let card of cards) {
                if ((card.children[0].classList.contains('matched'))) {matchedCards++}
                if (!(card.children[0].classList.contains('hidden'))) {openCards++}
            }
            if (openCards - matchedCards !== 2 && !(event.currentTarget.children[0].classList.contains('matched'))) {
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
                        matchedCards += 2
                    }
                    else {
                        setTimeout(function() {
                            secondPick.classList.add('hidden')
                            firstPick.classList.add('hidden')
                        }, 2000)
                    }
                    openCards = 0
                }
            }
            if (matchedCards === 16) {gameWin()}
        }
    }
}


function gameWin() {
    window.popup = document.getElementById("popup1")
    let finalTime = document.querySelector('.timer').innerHTML
    let finalMoves = document.querySelector('.move_count').innerHTML
    popup.classList.add('show')
    document.getElementById("finalMove").innerHTML = finalMoves;
    document.getElementById("totalTime").innerHTML = finalTime;
    closePopup()
}


function closePopup() {
    let closeIcon = document.querySelector(".close");
    closeIcon.addEventListener("click", function(e){
    popup.classList.remove("show");
    restartGame();
    });
}


function playAgain() {
    popup.classList.remove("show");
    restartGame();

}


function restartGame() {
    let cards = document.querySelectorAll(".card");
    for (let card of cards) {
    card.children[0].classList.add('hidden')
    card.children[0].classList.remove('matched')
    }
    let timer = document.querySelector(".timer");
    timer.innerHTML = 0 + " Minutes " + 0 + " Seconds";
    let move_count = document.querySelector(".move_count")
    move_count.innerHTML = 0 + " Moves";
    clearInterval(interval)
    initGame();
}