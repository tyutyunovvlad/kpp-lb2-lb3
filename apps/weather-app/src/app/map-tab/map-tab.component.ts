import { Component, OnInit } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { ICity } from '@pract/data'
import { fromEvent } from 'rxjs'



@Component({
  selector: 'pract-map-tab',
  templateUrl: './map-tab.component.html',
  styleUrls: ['./map-tab.component.css']
})
export class MapTabComponent implements OnInit {

  cities:any[]
  isLoading: boolean

  constructor(private http: HttpClient) {
    this.isLoading = true
    this.fetch()

  }

  async fetch() {
    await this.http.get<any[]>('/api/cities').subscribe(c => {
      this.cities = c
      console.log(c)
      this.isLoading = false
    })
    
  }

  addCity() {
    this.http.post('/api/addCity', {}).subscribe(() => {
      this.fetch()
    })
  }

  showInfo(e) {
    const info = e.target
    if (info.classList.contains('showingInfo')) {
      info.classList.remove('showingInfo')
    } else {
      info.classList.add('showingInfo')
    }
  }



  ngOnInit(): void {
    fromEvent(document.querySelector('body'), 'click')
      .subscribe(c => {

        if (!(c.target as HTMLElement).classList.contains('img')) {
          document.querySelectorAll('.showingInfo').forEach(e => {
            e.classList.remove('showingInfo')
          }) 
        }
      })
  }

}
