import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http'

import { WeatherTabModule } from './weather-tab/weather-tab.module';
import { MapTabModule } from './map-tab/map-tab.module';
import { MapTabComponent } from './map-tab/map-tab.component';
import { WeatherTabComponent } from './weather-tab/weather-tab.component';

const appRoutes: Routes = [
  {path: '', component:WeatherTabComponent},
  {path: 'map', component:MapTabComponent}
]

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    WeatherTabModule,
    MapTabModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  
}
