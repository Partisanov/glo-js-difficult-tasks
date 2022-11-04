const getData = (url) => {
    return fetch(url, {
        method: 'GET',
    })
        .then(response => response.json())
        .catch(error => console.log(error));
};


const sendData = (file) => {
    let xhr = new XMLHttpRequest();

    xhr.open('POST', 'https://jsonplaceholder.typicode.com/posts');
    xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
    xhr.send(JSON.stringify(file));
};

getData('./db.json').then((data) => {
    sendData(data);
});
