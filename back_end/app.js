const express = require('express');
const app = express();
const axios = require('axios');
const fs = require('fs');

// gives access to localhost:3000 to access the api
const cors = require('cors');
const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true,           
    optionSuccessStatus:200
}
app.use(cors(corsOptions));

// Saves data into muscles.json
let saveData = (data) => {
    fs.writeFileSync('../muscles.json', data, (err) => {
        if(err)
            console.log(err);
    });
}

// Reads data from file
let readData = () => {
    const data = fs.readFileSync('../muscles.json', {encoding:'utf8', flag:'r'});
    return JSON.parse(data);
}

//TODO: create json with id(matches the medical muscle group in the api) and non-medical names for muscle group
app.get('/', async (req, res) => {
    fs.exists('../muscles.json', (exists) => {
        if(!exists){
            axios({
                method:'GET',
                url: 'https://wger.de/api/v2/muscle/',
                headers:{
                    Accept: 'application/json',
                    Authorization: `Token`
                }
            }).then(response => {
                saveData(JSON.stringify(response.data));
                res.send(response.results);
            }).catch(err => {
                if(err)
                    console.log(err);
            });
        }
        else {
            console.log("here");

            res.send(readData().results);
        }
    });
});

module.exports = app;