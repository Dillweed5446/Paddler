const axios = require('axios');
const url = 'https://api.weather.gov/points/19.5429,-155.6658';

 const initialEndPoint = (
       axios.get(url) 
            .then (response => { return response.data.properties.forecastGridData })
            .catch (error => console.log(error))
 )

module.exports = initialEndPoint;