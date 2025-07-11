import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type DocumentsDocument = HydratedDocument<Documents>

@Schema()
export class Documents {
    @Prop()
    year:number
    @Prop({type:Number, default:0})
    seq:number
}

export const DocumentsSchema = SchemaFactory.createForClass(Documents)