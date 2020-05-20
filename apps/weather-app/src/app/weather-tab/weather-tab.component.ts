import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { IWeather, ICity } from '@pract/data'

@Component({
  selector: 'pract-weather-tab',
  templateUrl: './weather-tab.component.html',
  styleUrls: ['./weather-tab.component.scss']
})
export class WeatherTabComponent implements OnInit {

  API_KEY = "31a2757d4c859a83cf2899d9a295dcb5"
  state: IWeather
  error: boolean
  coord: object

  constructor(private http: HttpClient) { }


  ngOnInit(): void {
  }

  getWeather = async (city) => {
    if(city) {
      const api_url = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${this.API_KEY}&units=metric`);
      const data = await api_url.json();

      if(+data.cod === 200) {
        const sunset = data.sys.sunset
        const date = new Date()
        date.setTime(sunset)
        const sunsetTime = date.getHours() + ':' + (date.getMinutes() < 10 ? '0' : '') + date.getMinutes();


        this.state = {
          city: data.name,
          temp: data.main.temp,
          country: data.sys.country,
          pressure: data.main.pressure,
          sunset: sunsetTime,
          error: undefined
        }

        this.coord = {
          lon:data.coord.lon,
          lat:data.coord.lat
        }

        this.addCity(data.name, this.coord, data.sys.country)

      } else if (+data.cod === 404 && data.message === "city not found") {
        this.state = {
          city: undefined,
          temp: undefined,
          country: undefined,
          pressure: undefined,
          sunset: undefined,
          error: 'City not found'
        }
        this.error = true
      } else {
        this.state = {
          city: undefined,
          temp: undefined,
          country: undefined,
          pressure: undefined,
          sunset: undefined,
          error: 'Something went wrong..'
        }
        this.error = true
      }
    }
  }


  addCity(city, coords, flag) {
    this.http.post('/api/addCity', {city, coords, flag}).subscribe(() => {})
  }

}
