import { Module } from '@nestjs/common';
import { DelayModule } from './delay/delay.module';
import { DocumentsModule } from './documents/documents.module';
import { ConfigModule } from '@nestjs/config';
import environment from './config/environment';
import getConfig from './config/environment'
import { MongooseModule } from '@nestjs/mongoose';


@Module({
  imports: [ConfigModule.forRoot({
    isGlobal:true,
    load:[environment]
    
  }),
  MongooseModule.forRoot(getConfig().MONGO_URI), 
    DelayModule, DocumentsModule],
})
export class AppModule {}
