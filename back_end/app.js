const express = require('express');
const app = express();
const axios = require('axios');

let call = () => {
    axios({
        method:'GET',
        url: 'https://wger.de/api/v2/exercise/?muscles=1',
        headers:{
            Accept: 'application/json',
            Authorization: `Token `
        }
    }).then(response => {
        console.log(response.data);
    });
}

app.get('/', (req, res) => {
    call();
});

module.exports = app;