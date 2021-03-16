initGame();

function initGame() {
    shuffleCards()
    // Your game can start here, but define separate functions, don't write everything in here :)

}


function shuffleCards() {
    let board = document.querySelector(".main-board");
    for (let i = board.children.length; i >= 0; i--) {
        board.appendChild(board.children[Math.random() * i | 0]);}
}