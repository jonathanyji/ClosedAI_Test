import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import WeatherApp from './components/WeatherApp';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        My Weather App
      </header>
      <WeatherApp />
    </div>
  );
}

export default App;
