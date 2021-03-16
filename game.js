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
    for (let card of cards) {
        card.onclick = function(event) {
            event.currentTarget.children[0].classList.remove('hidden')
        }
    }

}
