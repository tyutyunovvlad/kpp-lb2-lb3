import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'pract-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  constructor() { }
  city:string

  // tslint:disable-next-line: no-output-on-prefix
  @Output() onGetWeather = new EventEmitter<string>()

  ngOnInit(): void {
    this.city = ''
  }
  getWeather() {
    this.onGetWeather.emit(this.city)
  }
}
