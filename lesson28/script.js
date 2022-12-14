const myHeaders = new Headers();
myHeaders.append("apikey", "CZH8qJealtsViSl2N9NicLvlEKNRirA7");
const inputAmount = document.getElementById('input');
const form = document.getElementById('form');
const spinner = document.getElementById('spinner');

const requestOptions = {
    method: 'GET',
    redirect: 'follow',
    headers: myHeaders
};

const getResult = () => {
    const amount = inputAmount.value;
    const fromValue = document.getElementById('from').value;
    const toValue = document.getElementById('to').value;
    const resultInput = document.getElementById('result');
    if (!amount) {
        spinner.style.display = "none";
        return;
    }

    fetch(`https://api.apilayer.com/exchangerates_data/convert?to=${toValue}&from=${fromValue}&amount=${amount}`,
        requestOptions)
        .then(response => response.json())
        .then(result => {
            spinner.style.display = "none";
            resultInput.value = (result.result).toFixed(2);
        })
        .catch(error => console.log('error', error));
};

inputAmount.addEventListener('input', (e) => {
    e.target.value = e.target.value.replace(/\D+/g, '');
});

form.addEventListener('submit', (e) => {
    e.preventDefault();
    try {
        spinner.style.display = "inline-block";
        getResult();
    } catch (error) {
        console.log(error.message);
    }

});


