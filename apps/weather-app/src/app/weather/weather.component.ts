import { Component, OnInit, Input } from '@angular/core';
import { IWeather } from '@pract/data';

@Component({
  selector: 'pract-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {

  constructor() { }

  @Input() state:IWeather
  @Input() error:boolean

  ngOnInit(): void {
    this.error = false
    this.state = {
      city: undefined,
      temp: undefined,
      country: undefined,
      pressure: undefined,
      sunset: undefined,
      error: undefined
    }
  }

}
