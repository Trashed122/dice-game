var activePlayer = 1;
var activePlayer = 0;
var score = [ 0,0];
var roundScore= 0;
var dice = Math.floor(Math.random()*6) +1 ;
window.document.querySelector("#score-0").textContent = dice;

window.document.querySelector("#score-1").textContent = dice;
console.log(' Шоо : ' + dice); 
/* <div class="player-0-panel active">
                <div class="player-name" id="name-0">Player 1</div>
                <div class="player-score" id="score-0">43</div>
                <div class="player-current-box">
                    <div class="player-current-label">Current</div>
                    <div class="player-current-score" id="current-0">11</div>
                </div>
            </div>
            
            <div class="player-1-panel">
                <div class="player-name" id="name-1">Player 2</div>
                <div class="player-score" id="score-1">72</div>
                <div class="player-current-box">
                    <div class="player-current-label">Current</div>
                    <div class="player-current-score" id="current-1">0</div> */
document.querySelector("#current-0").textContent=0;
document.querySelector("#current-1").textContent=0;
document.querySelector("#score-0").textContent=0;
document.querySelector("#score-1").textContent=0;
document.querySelector(".dice")