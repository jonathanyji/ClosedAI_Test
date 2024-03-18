import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, Card } from 'react-bootstrap';
import { WeatherApiService } from '../services/WeatherApiService';

const WeatherApp = () => {
    const [city, setCity] = useState('');
    const [weatherData, setWeatherData] = useState(null);

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        try {
            const response =  await WeatherApiService.getWeather(city);
            console.log("Res: ", response)
            setWeatherData(response);
        } catch (error) {
            console.error('Error fetching weather data:', error);
        }
    };

    return (
        <Container>
    <Row className="justify-content-center mt-5">
        <Col md={6}>
            <Card>
                <Card.Body>
                    <Form onSubmit={handleFormSubmit}>
                        <Form.Group controlId="city">
                            <Form.Label>Enter City Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter city name"
                                value={city}
                                onChange={(e) => setCity(e.target.value)}
                            />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Get Weather
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
        </Col>
    </Row>
    {weatherData && (
        <Row className="justify-content-center mt-3">
            <Col md={6}>
                <Card>
                    <Card.Body>
                        <Card.Title>Weather Information for {city}</Card.Title>
                        <Card.Text>
                            <div className="weather-info">
                                <span className="weather-icon">
                                    {/* Use weather icons here */}
                                </span>
                                <span className="weather-detail">
                                    Temperature: {weatherData.accuWeather.Temperature}°C<br />
                                    Weather Condition: {weatherData.accuWeather.Summary}<br />
                                </span>
                            </div>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            
<Col md={6}>
<iframe
                    src={weatherData.gifLink}
                    width="100%"
                    height="auto"
                    frameBorder="0"
                    className="giphy-embed"
                    allowFullScreen
                ></iframe>
</Col>
            </Row>
            
            


    )}
</Container>

    );
};

export default WeatherApp;
