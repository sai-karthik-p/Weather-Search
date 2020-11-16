import React from 'react';
import './App.css';
import Forecast from './components/Forecast/Forecast';
import Logo from './components/Logo/Logo';

const App = () => {

  return (
        <>
        <header className="App-header">
            <Logo />
            <h1>Weather Search</h1>
          </header>
          <main>

                <Forecast />

          </main>
          <footer>
            <p>
              <a href="https://github.com/sai-karthik-p/Weather-Search" target="_blank" class="btn">View Project on GitHub</a>
            </p>

          </footer>
        </>
      
  );
}

export default App;
