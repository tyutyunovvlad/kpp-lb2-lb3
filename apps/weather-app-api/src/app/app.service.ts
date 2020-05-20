import { Injectable } from '@nestjs/common';
import { IWeather, ICity } from '@pract/data'
// import {mongodb} from 'mongodb'

@Injectable()
export class AppService {

  mongodb
  MongoClient
  mongoUrl = 'mongodb+srv://vlad:3Pm2rkCHIT0T2e9k@cluster0-64hz2.mongodb.net/todos?retryWrites=true&w=majority';

  cities: ICity[] = []

  constructor() {
    this.mongodb = require('mongodb');
    this.MongoClient = this.mongodb.MongoClient;

    let mongo;
    this.MongoClient
      .connect(this.mongoUrl, { useNewUrlParser: true })
      .then(function(client) {
        mongo = client.db();
        mongo
            .collection('todos')
            .find().toArray()
            .then(function(todos) {
            });
        
      });

  
  }

  

  // async getData() {
  //   let gotCities 
  //   let mongo;
  //   await this.MongoClient
  //     .connect(this.mongoUrl, { useNewUrlParser: true })
  //     .then(function(client) {
  //       mongo = client.db();
  //       mongo
  //           .collection('todos')
  //           .find().toArray()
  //           .then(function(todos) {
  //               gotCities = todos
  //               console.log(gotCities)
                
                
  //           });
            
  //     });
      

  //     return gotCities

  // }

  async getData() {
    const client = await this.MongoClient.connect(this.mongoUrl, { useNewUrlParser: true });
    const db = client.db();
    const cities = await db.collection('todos').find().toArray();
    return cities;
  }

  addData(city) {
    let mongo;
    this.MongoClient
      .connect(this.mongoUrl, { useNewUrlParser: true })
      .then(function(client) {
        mongo = client.db();
        mongo
          .collection('todos')
          .insertOne({ 
            city: city.city,
            coordLat: city.coords.lat,
            coordLog: city.coords.lon,
            flag: city.flag
          })
          .then(function() {
            // Виконується після створення
          });
          console.log(city)
        
      });

  }
}

