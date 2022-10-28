'use strict';

const input = document.getElementById('input');
const text = document.getElementById('text');

function debounce(func, timeout) {
    return function (args) {
        let previousCall = this.lastCall;
        this.lastCall = Date.now();
        if (previousCall && ((this.lastCall - previousCall) <= timeout)) {
            clearTimeout(this.lastCallTimer);
        }
        this.lastCallTimer = setTimeout(() => func(args), timeout);
    };
}

input.addEventListener('input', debounce(() => { text.textContent = input.value; }, 300));