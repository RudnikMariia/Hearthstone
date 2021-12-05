fetch('http://localhost:3001/participants') // респонс
    .then(res => res.json()) // обещаю массив с обьетами
    .then((users) => render(users))

function render(arr) {
    for (let obj of arr) {
        createPlayer(obj)
    }
}

function createPlayer(obj) {
    let tablet = document.querySelector(".tablet");
    let newPlayer = document.createElement('div');
    tablet.append(newPlayer);
    let lastPlayer = tablet.lastElementChild;
    let playerAboutFirst = document.createElement('div');
    let playerAboutLast = document.createElement('div');
    let numberPlayer = document.createElement('p');
    numberPlayer.innerText = obj.id;
    let namePlayer = document.createElement('p');
    namePlayer.innerText = obj.nick;
    let playerTourney = document.createElement('p');
    playerTourney.innerText = obj.sumOfTournaments;
    let playerTop8 = document.createElement('p');
    playerTop8.innerText = obj.sumOfTop8;
    let playerTop1 = document.createElement('p');
    playerTop1.innerText = obj.win;
    let playerBalls = document.createElement('p');
    playerBalls.innerText = obj.points;
    lastPlayer.append(playerAboutFirst);
    lastPlayer.append(playerAboutLast);
    playerAboutFirst.append(numberPlayer);
    playerAboutFirst.append(namePlayer)
    playerAboutLast.append(playerTourney)
    playerAboutLast.append(playerTop8)
    playerAboutLast.append(playerTop1)
    playerAboutLast.append(playerBalls)
    newPlayer.classList.add('player')
    playerAboutFirst.classList.add('player__about')
    playerAboutLast.classList.add('player__about')
    numberPlayer.classList.add('player__number')
    numberPlayer.classList.add('player__about--name-margin')
    namePlayer.classList.add('player__name')
    namePlayer.classList.add('player__about--name-margin')
    playerTourney.classList.add('player__tourney')
    playerTourney.classList.add('player__about--text-margin')
    playerTop8.classList.add('player__top8')
    playerTop8.classList.add('player__about--text-margin')
    playerTop1.classList.add('player__top1')
    playerTop1.classList.add('player__about--text-margin')
    playerBalls.classList.add('player__balls')
    playerBalls.classList.add('player__about--text-margin')
}