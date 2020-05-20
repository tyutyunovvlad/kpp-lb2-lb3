import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  // imports: [MongooseModule.forRoot('mongodb+srv://vlad:1GDbEr94cgXpWpFs@cluster0-64hz2.mongodb.net/nestjs-weather?retryWrites=true&w=majority')],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
