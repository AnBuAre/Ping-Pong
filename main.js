const divfirst = document.createElement("div");
document.body.appendChild(divfirst);
divfirst.id = "divFirst"
console.log(divfirst);

const container = document.createElement("div");
container.className = "container"
document.body.appendChild(container);

const imgPingPong = document.createElement("img");
imgPingPong.src = "https://www.ebonefit.com/blog/50-single-default/ping-pong.jpg";
imgPingPong.id= "imagePingPong"
document.body.appendChild(imgPingPong);

const score = document.createElement('div');
score.className = 'score';
score.innerHTML = '<span id="player1Score">0</span> to <span id="player2Score">0</span>';
document.body.appendChild(score)


const textSelect = document.createElement("p");
textSelect.textContent = "Max Points";
document.body.appendChild(textSelect);

const maxPointsSelect = document.createElement('select');
maxPointsSelect.id = 'maxPointsSelect';
maxPointsSelect.textContent ="puntos";
[3, 5, 7, 10, 15].forEach(points => {
    const option = document.createElement('option');
    option.value = points;
    option.textContent = points;
    maxPointsSelect.appendChild(option);
});
document.body.appendChild(maxPointsSelect)

const player1Button = document.createElement('button');
player1Button.id = 'player1Button';
player1Button.textContent = '+1 Player 1';
document.body.appendChild(player1Button);

const player2Button = document.createElement('button');
player2Button.id = 'player2Button';
player2Button.textContent = '+1 Player 2';
document.body.appendChild(player2Button);

const resetButton = document.createElement("button");
resetButton.id = "resetButton";
resetButton.textContent = "Reset";
document.body.appendChild(resetButton);