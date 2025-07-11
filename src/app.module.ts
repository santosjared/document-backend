import { Module } from '@nestjs/common'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { MongooseModule } from '@nestjs/mongoose'
import { DelayModule } from './delay/delay.module'
import { DocumentsModule } from './documents/documents.module'
import environment from './config/environment'

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [environment], // 👍 sigue usando tu archivo environment.ts
    }),
    MongooseModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        uri: config.get<string>('MONGO_URI'), // 🔥 ahora se lee desde lo que devuelve environment.ts
      }),
    }),
    DelayModule,
    DocumentsModule,
  ],
})
export class AppModule {}
