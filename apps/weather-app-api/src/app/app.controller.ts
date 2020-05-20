import { Controller, Get, Post, Body } from '@nestjs/common';

import { AppService } from './app.service';
import { ICity } from '@pract/data';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}



  @Get('cities')
  async getData() {
    let data = await this.appService.getData()
    console.log(data, "data")
    return this.appService.getData();
  }

  @Post('addCity')
  addData(@Body() city:ICity) {
    return this.appService.addData(city);
  }
}
