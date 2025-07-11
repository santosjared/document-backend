import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type DelayDocument = HydratedDocument<Delay>

@Schema()
export class Delay {
    @Prop()
    status: string
    @Prop()
    date: Date 
    @Prop()
    place: string
    @Prop()
    representantes: Array<Representantes>[]
    @Prop()
    reception: Array<Reception>[]
    @Prop()
    cuce: string
    @Prop()
    organismo: number
    @Prop()
    fuente: number
    @Prop()
    empresa: string
    @Prop()
    retraso: string
    @Prop()
    number_doc:number
    @Prop()
    noun: string
    @Prop()
    documento: 'delayed' | 'hiring'
    @Prop()
    metod:'create'|'edit'
}

class Representantes {
    @Prop()
    cargo:string
    @Prop()
    representante:string
}
class Reception {
    @Prop()
    cantidad:number
    @Prop()
    unidad:string
    @Prop()
    description:string
    @Prop()
    price_uni:number
}

export const DelaySchema = SchemaFactory.createForClass(Delay)