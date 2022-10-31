const desk = document.querySelector('.square-body');
const resetBtn = document.querySelector('.btn-reset');

const render = (arr) => {
    desk.innerHTML = "";
    arr.forEach(num => {
        desk.insertAdjacentHTML('beforeend', `
            <div class="block">
                <div class="block-number">${num}</div>
                <div class="block-btn">
                    <div class="arrow left"><img src="img/arrow-left.svg" alt=""></div>
                    <div class="arrow right"><img src="img/arrow-right.svg" alt=""></div>
                    <div class="arrow top"><img src="img/arrow-up.svg" alt=""></div>
                    <div class="arrow bottom"><img src="img/arrow-down.svg" alt=""></div>
                </div>
            </div>
        `);

    });
};


desk.addEventListener('click', (e) => {
    const arrayNumbers = [...desk.querySelectorAll('.block-number')].map(block => block.textContent);
    const block = e.target.closest('.block');
    const arrow = e.target.closest('.arrow');
    if (!(block && arrow)) {
        return;
    }
    const action = arrow.className.replace('arrow ', '');
    let currentNum = block.querySelector('.block-number').textContent;
    let currentPosition = arrayNumbers.indexOf(currentNum);

    switch (action) {
        case 'right':
            if ((currentPosition + 1) <= 24) {
                const nextNum = arrayNumbers[currentPosition + 1];
                arrayNumbers[currentPosition + 1] = currentNum;
                arrayNumbers[currentPosition] = nextNum;
            }
            break;

        case 'left':
            if ((currentPosition - 1) >= 0) {
                const nextNum = arrayNumbers[currentPosition - 1];
                arrayNumbers[currentPosition - 1] = currentNum;
                arrayNumbers[currentPosition] = nextNum;
            }
            break;
        case 'top':
            if ((currentPosition - 5) >= 0) {
                const nextNum = arrayNumbers[currentPosition - 5];
                arrayNumbers[currentPosition - 5] = currentNum;
                arrayNumbers[currentPosition] = nextNum;
            }
            break;
        case 'bottom':
            if ((currentPosition + 5) <= 24) {
                const nextNum = arrayNumbers[currentPosition + 5];
                arrayNumbers[currentPosition + 5] = currentNum;
                arrayNumbers[currentPosition] = nextNum;
            }
            break;
    }
    render(arrayNumbers);


});

resetBtn.addEventListener('click', () => {
    desk.innerHTML = '';
    render(Array.from({ length: 25 }, (_, i) => i + 1));
});