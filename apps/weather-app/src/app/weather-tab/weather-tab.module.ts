import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherTabComponent } from './weather-tab.component';
import { FormComponent } from '../form/form.component';
import { InfoComponent } from '../info/info.component';
import { WeatherComponent } from '../weather/weather.component';
import { FormsModule } from '@angular/forms'


@NgModule({
  declarations: [WeatherTabComponent, FormComponent, InfoComponent, WeatherComponent],
  imports: [
    CommonModule, 
    FormsModule
  ],
  exports: [WeatherTabComponent]
})
export class WeatherTabModule { }
