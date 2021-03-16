initGame();
let moves = 0;

function initGame() {

    // Your game can start here, but define separate functions, don't write everything in here :)

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

function moveCounter(){
    let move_count = document.querySelector(".move_count")
    moves++;
    move_count.innerHTML = moves+ " Moves";
}