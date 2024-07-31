
const controls = {
    gamesSelect : document.querySelector('#games'),
    p1Button : document.querySelector('#p1-button'),
    p2Button : document.querySelector('#p2-button'),
    resetButton : document.querySelector('#reset-button')
}

const score = {
    p1: document.querySelector('#p1-score'),
    p2: document.querySelector('#p2-score')
}

controls.p1Button.addEventListener('click', () => {
    if (score.p1.innerText == 0 & score.p2.innerText == 0 ) {
        controls.gamesSelect.disabled = true;
    }

    score.p1.innerText++;

    if (score.p1.innerText == controls.gamesSelect.value) {
        score.p1.classList.add('won');
        score.p2.classList.add('lost');
        controls.p1Button.disabled = true;
        controls.p2Button.disabled = true;
    }

})

controls.p2Button.addEventListener('click', () => {
    if (score.p1.innerText == 0 & score.p2.innerText == 0) {
        controls.gamesSelect.disabled = true;
    }

    score.p2.innerText++;

    if (score.p2.innerText == controls.gamesSelect.value) {
        score.p1.classList.add('lost');
        score.p2.classList.add('won');
        controls.p1Button.disabled = true;
        controls.p2Button.disabled = true;
    }

})

controls.resetButton.addEventListener('click', () => {
    score.p1.classList.remove('lost', 'won');
    score.p2.classList.remove('won', 'lost');
    score.p1.innerText = '0';
    score.p2.innerText = '0';
    controls.p1Button.disabled = false;
    controls.p2Button.disabled = false;
    controls.gamesSelect.disabled = false;

})