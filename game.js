initGame();
let moves = 0;

function initGame() {
    shuffleCards()
    initLeftClick()
    startTimer();
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
            if (counter === 1) {
                window.firstPick = event.currentTarget.children[0];
            }

            if (counter === 2) {
                window.secondPick = event.currentTarget.children[0]
                if (event.currentTarget === firstPick) {}
                else {
                    setTimeout(function() {
                        secondPick.classList.add('hidden')
                        firstPick.classList.add('hidden')
                    }, 3000)

                }
                counter = 0
            }
        }
    }

}
