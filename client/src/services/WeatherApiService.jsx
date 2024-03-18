export const WeatherApiService = {

    async _handleHttpCall(method, api, body) {
        try {
            const url = 'http://localhost:4000' + api;
            const response = await fetch(url, {
                method: method,
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(body)
            });
            if (!response.ok) {
                throw new Error('Failed to perform HTTP call');
            }
            return response.json();
        } catch (error) {
            console.error('Error in HTTP call:', error);
            throw error;
        }
    },

    async getWeather(cityName){
        try {
            const body = { city: cityName };
            const weatherData = await this._handleHttpCall('POST', '/get-weather', body);
            return weatherData;
        } catch (error) {
            console.error('Error fetching weather data:', error);
            throw error;
        }
    }

};