let game = document.querySelector('.game'),          // htmlCod
    res = document.querySelector('.res'),            // htmlCod
    stepInfo = document.querySelector('.step-info'), // htmlCod
    btnGame = document.querySelector('.new-game'),   // htmlCod
    boxes = document.querySelectorAll('.box'),       // Array
    boxesId0 = document.getElementById('box0'),     // htmlCod
    boxesId1 = document.getElementById('box1'),     // htmlCod
    boxesId2 = document.getElementById('box2'),     // htmlCod
    boxesId3 = document.getElementById('box3'),     // htmlCod
    boxesId4 = document.getElementById('box4'),     // htmlCod
    boxesId5 = document.getElementById('box5'),     // htmlCod
    boxesId6 = document.getElementById('box6'),     // htmlCod
    boxesId7 = document.getElementById('box7'),     // htmlCod
    boxesId8 = document.getElementById('box8'),     // htmlCod
    step = false,
    count = 0,
    circle = `<svg class="circle">
            <circle r="45" cx="58" cy="58" stroke="blue"
                    stroke-width="10" fill="none"
                    stroke-linecap="round"/> </svg>`,                      // htmlCod
    cross = `<svg class="cross">
            <line class="first" x1="15" y1="15" x2="100" y2="100" stroke="red" stroke-width="10" stroke-linecap="round" />
            <line class="second" x1="100" y1="15" x2="15" y2="100" stroke="red" stroke-width="10" stroke-linecap="round" />
            </svg>`                         // htmlCod

function stepCross(target) {
    target.innerHTML = cross
    let crossAudio = new Audio('audio/cross.mp3')
    crossAudio.play()
    target.classList.add('x')
    count++
    res.innerText = ''
    stepInfo.innerText = 'Ваш ход: О'
    stepInfo.classList.add('blue')
    stepInfo.classList.remove('red')
    target.removeEventListener('click', init)
}

function stepCircle(target) {
    target.innerHTML = circle
    let circleAudio = new Audio('audio/circle.mp3')
    circleAudio.play()
    target.classList.add('o')
    count++
    res.innerText = ''
    stepInfo.innerText = 'Ваш ход: Х'
    stepInfo.classList.add('red')
    stepInfo.classList.remove('blue')
    target.removeEventListener('click', init)
}

function firstStart() {
    boxesId0.addEventListener('click', init)
    boxesId1.addEventListener('click', init)
    boxesId2.addEventListener('click', init)
    boxesId3.addEventListener('click', init)
    boxesId4.addEventListener('click', init)
    boxesId5.addEventListener('click', init)
    boxesId6.addEventListener('click', init)
    boxesId7.addEventListener('click', init)
    boxesId8.addEventListener('click', init)
    res.innerText = 'Новая Игра!'
    stepInfo.innerText = 'Ваш ход: Х'
    stepInfo.classList.add('red')
}

function stopClick() {
    boxesId0.removeEventListener('click', init)
    boxesId1.removeEventListener('click', init)
    boxesId2.removeEventListener('click', init)
    boxesId3.removeEventListener('click', init)
    boxesId4.removeEventListener('click', init)
    boxesId5.removeEventListener('click', init)
    boxesId6.removeEventListener('click', init)
    boxesId7.removeEventListener('click', init)
    boxesId8.removeEventListener('click', init)
}

function init(e) {
    if (!step) stepCross(e.target)
    else stepCircle(e.target)
    step = !step
    win()
}

function restart() {
    step = false
    count = 0
    res.innerText = 'Новая Игра!'
    stepInfo.innerText = 'Ваш ход: Х'
    stepInfo.classList.add('red')
    boxes.forEach(item => {
            item.innerHTML = ''
            item.classList.remove('x', 'o', 'active')
        }
    )
    firstStart()
}

function win() {
    let comb = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]
    for (let i = 0; i < boxes.length; i++) {

        if (boxes[comb[i][0]].classList.contains('x') && boxes[comb[i][1]].classList.contains('x') && boxes[comb[i][2]].classList.contains('x')) {
            boxes[comb[i][0]].classList.add('active')
            boxes[comb[i][1]].classList.add('active')
            boxes[comb[i][2]].classList.add('active')
            res.innerText = 'Выиграли Х'
            stepInfo.innerText = ''
            stopClick()

        } else if (boxes[comb[i][0]].classList.contains('o') && boxes[comb[i][1]].classList.contains('o') && boxes[comb[i][2]].classList.contains('o')) {
            boxes[comb[i][0]].classList.add('active')
            boxes[comb[i][1]].classList.add('active')
            boxes[comb[i][2]].classList.add('active')
            res.innerText = 'Выиграли O'
            stepInfo.innerText = ''
            stopClick()
        } else if (count === 9) {
            res.innerText = 'Победила ничья'
            stepInfo.innerText = ''
            stopClick()
        }
    }
}

btnGame.addEventListener('click', restart)
firstStart()
