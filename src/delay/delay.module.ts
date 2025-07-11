import { Module } from '@nestjs/common';
import { DelayService } from './delay.service';
import { DelayController } from './delay.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Delay, DelaySchema } from './schema/delay.schema';
import { DocumentsService } from 'src/documents/documents.service';
import { Documents, DocumentsSchema } from 'src/documents/schema/documents';

@Module({
  imports:[MongooseModule.forFeature([{
    name:Delay.name,
    schema:DelaySchema
  },
  {
    name:Documents.name,
    schema:DocumentsSchema
  }
])],
  controllers: [DelayController],
  providers: [DelayService, DocumentsService],
})
export class DelayModule {}
