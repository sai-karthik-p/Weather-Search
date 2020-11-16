import React, { useState } from 'react';
import Conditions from '../Conditions/Conditions';
import classes from './Forecast.module.css';

const Forecast = () => {

    let [city, setCity] = useState('');
    let [unit, setUnit] = useState('imperial');
    let [error, setError] = useState(false);
    let [loading, setLoading] = useState(false); 
    let [responseObj, setResponseObj] = useState({});
    const uriEncodedCity = encodeURIComponent(city);
    
    function getForecast(e) {

        e.preventDefault();
        
        if (city.length === 0) {
            return setError(true);
        }

        // Clear state in preparation for new data
        setError(false);
        setResponseObj({});
        setLoading(true);
        let uriEncodedCity = encodeURIComponent(city);

        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${uriEncodedCity}&units=${unit}&appid=${process.env.REACT_APP_API_KEY}`)
        .then(response => response.json())
        .then((response) => {
            if (response.cod !== 200) {
                throw new Error();
            }

            setResponseObj(response);
            setLoading(false);
            console.log(response);
        })
        .catch(err => {
            setError(true);
            setLoading(false);
            console.log(err.message);
        });

        setCity('');
    }
  
   return (
       <div>
           <h2>Search Current Weather Conditions</h2>

           
           <form onSubmit={getForecast}>
                <input
                    type="text"
                    placeholder="Enter City"
                    maxLength="50"
                    className={classes.textInput}
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    />
                <label className={classes.Radio}>
                    <input
                        type="radio"
                        name="units"
                        checked={unit === "imperial"}
                        value="imperial"
                        onChange={(e) => setUnit(e.target.value)}
                        />
                    Fahrenheit
                </label>
                <label className={classes.Radio}>
                    <input
                        type="radio"
                        name="units"
                        checked={unit === "metric"}
                        value="metric"
                        onChange={(e) => setUnit(e.target.value)}
                        />
                    Celcius
                </label>

                <button className={classes.Button} type="submit">Get Forecast</button>

            </form>

           <Conditions
               responseObj={responseObj}
               unit={unit}
               error={error}
               loading={loading}
               />
       </div>
   )
}

export default Forecast;