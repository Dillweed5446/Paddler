const express = require('express');
const app = express();
const axios = require('axios');
const port = 3001;
const initialEndPoint = require('./initial_get_call');

const waitForForecastEndpoint = async () => {
    try {
        let finalEndpoint = await initialEndPoint;
        return finalEndpoint;
    }
    catch (e) {
        console.log(e);
        throw e;
    }
}

waitForForecastEndpoint().then(result => {return result})
                        .then(result => {
                            axios.get(result)
                            .then(response => console.log(response.data.properties.windSpeed))
                            .catch(error => console.log(error))
                        })
                        .catch(error => console.log(error))


app.listen(port, () => console.log(`App listening on port ${port}!`))
