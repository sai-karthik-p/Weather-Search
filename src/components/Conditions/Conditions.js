import React from 'react';
import classes from './Conditions.module.css';

const Conditions = (props) => {
   return (
        <div className={classes.Wrapper}>

            {props.error && <small>Please enter a valid city.</small>}
            {props.loading && <div>Loading...</div>}

            {props.responseObj.cod === 200 ?
                <>
                <div>
                    <p><strong>{props.responseObj.name + ", " + props.responseObj.sys.country}</strong></p>
                    <p>It is currently {Math.round(props.responseObj.main.temp)} degrees out with {props.responseObj.weather[0].description}.</p>
                </div>

                <div className={classes.textCard}>
                    <div className={classes.cardHeading}>
                        <h6 className={classes.city}>{props.responseObj.name + ", " + props.responseObj.sys.country}</h6>
                        <img className={classes.weatherImg} src={`http://openweathermap.org/img/wn/${props.responseObj.weather[0].icon}@4x.png`} alt="weather-img"/>
                        <h6 className={classes.temp}>{props.responseObj.weather[0].description.split(' ').map(w => w[0].toUpperCase() + w.substr(1).toLowerCase()).join(' ')}</h6>
                    </div>

                    <div className={classes.textBox}>
                        <p><strong>Temperature:</strong> {Math.round(props.responseObj.main.temp)}</p>
                        <p><strong>Feels Like:</strong> {Math.round(props.responseObj.main.feels_like)}</p>
                        <p><strong>Minimum Temperature:</strong> {Math.round(props.responseObj.main.temp_min)}</p>
                        <p><strong>Maximum Temperature:</strong> {Math.round(props.responseObj.main.temp_max)}</p>
                        <p><strong>Visibility:</strong> {props.responseObj.visibility}</p>
                    </div>
                </div>

                </>
            : null
            }
        </div>
   );
}

export default Conditions;