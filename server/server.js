const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { getGifLink } = require('./weatherUtils');

const app = express();
const port = 4000;

app.use(bodyParser.json());
app.use(cors());

var accu_api_key = 'eneXpyzXpVGWTAOO19zH7fvY9quPjFPn';
var accuweather = require('node-accuweather')()(accu_api_key);


app.post('/get-weather', (req, res) => {

    const city = req.body.city;
    const response = {
      accuWeather: null,
      gifLink: null
    };

    const gifLink = getGifLink('sunny');
console.log(gifLink)

    if (!city) {
        return res.status(400).json({ error: 'City parameter is missing in the request body' });
    }
    accuweather.getCurrentConditions(city, { unit: "Celsius" })
        .then(function (result) {
            console.log(result);
            response.accuWeather = result;
            response.gifLink = getGifLink(result.Summary);
            res.status(200).json(response);
        })
        .catch(function (error) {
            console.error('Error fetching weather data:', error);
            res.status(500).json({ error: 'Failed to fetch weather data' });
        });
});


  app.get('/weather', (req, res) => {
    return accuweather.getCurrentConditions("Brisbane")
  .then(function(result) {
    console.log(result);
  });
  });



// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });