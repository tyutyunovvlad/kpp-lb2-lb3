import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapTabComponent } from './map-tab.component';

import { NgxMapboxGLModule } from 'ngx-mapbox-gl';

@NgModule({
  declarations: [MapTabComponent],
  imports: [
    CommonModule,
    NgxMapboxGLModule.withConfig({
      accessToken: 'pk.eyJ1IjoiZmlsZHJhbiIsImEiOiJjazlsbXN4ZXcwMWczM2ZwY3pibndpdDBpIn0.XcorNYJ4dMvV9-FW0-6ewA', // Optional, can also be set per map (accessToken input of mgl-map)
      // geocoderAccessToken: 'TOKEN' // Optional, specify if different from the map access token, can also be set per mgl-geocoder (accessToken input of mgl-geocoder)
    })
  ],
  exports: [
    MapTabComponent
  ]
})
export class MapTabModule { }
