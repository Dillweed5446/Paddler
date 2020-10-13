const express = require('express');
const app = express();
const fetch   = require('node-fetch');
const port = 3000;

const API = () => {app.get('/', function (req, res) {
        var url = 'https://api.weather.gov/gridpoints/HFO/229,73';
         
        fetch(url)
        .then(res => res.json())
        .then(data => {
            res.send({ data });
        })
        .catch(err => {
            res.send(err);
        });
    });
}

app.listen(port, () => console.log(`App listening on port ${port}!`))

module.exports = API;
