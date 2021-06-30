import React, { Component } from 'react';
import Info from './components/info';
import Form  from './components/form';
import Weather  from './components/weather';

const API_KEY = '37bfe5f476a82410ecec5a2d962a262a';

class App extends Component{

  state = {
    temp: undefined,
    city: undefined,
    country: undefined,
    sunrise: undefined,
    sunset: undefined,
    error: undefined
  }

  gettingWeather = async (event) => {
    event.preventDefault();
    const city = event.target.elements.city.value;
    
    if( city ) {
      const api_url = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
      const data = await api_url.json();

      var sunrise = data.sys.sunrise;
      var sunset = data.sys.sunset;
      var date = new Date();
      date.setTime(sunrise);
      var sunrise_time = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
      date.setTime(sunset);
      var sunset_time = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();

      this.setState({
          temp: data.main.temp,
          city: data.name,
          country: data.sys.country,
          sunrise: sunrise_time,
          sunset: sunset_time,
          error: undefined
      });
    }
      else{
        this.setState ({
          temp: undefined,
          city: undefined,
          country: undefined,
          sunrise: undefined,
          sunset: undefined,
          error: "Введите название города"
        });
      }
  }

  render(){
    return(
      <div className="wrapper">
        <div className="main">
          <div className="container">
            <div className="row">
              <div className="col-sm-5 info">
                <Info/>
              </div>
              <div className="col-sm-7 form">
                <Form weatherMethod={this.gettingWeather}/>
                <Weather
                  temp = {this.state.temp}
                  city = {this.state.city}
                  country = {this.state.country}
                  sunrise = {this.state.sunrise}
                  sunset = {this.state.sunset}
                  error = {this.state.error}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;