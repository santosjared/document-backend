import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsNumber, IsString } from 'class-validator';

export class CreateDelayDto {

    @ApiProperty()
    @IsString()
    status: string
    @ApiProperty()
    @IsString()
    date: Date 
    @ApiProperty()
    @IsString()
    place: string
    @ApiProperty()
    @IsArray()
    representantes: Array<Representantes>[]
    @ApiProperty()
    @IsArray()
    reception: Array<Reception>[]
    @ApiProperty()
    @IsString()
    cuce: string
    @ApiProperty()
    @IsNumber()
    organismo: number
    @ApiProperty()
    @IsNumber()
    fuente: number
    @ApiProperty()
    @IsString()
    empresa: string
    @ApiProperty()
    @IsString()
    retraso: string
    @ApiProperty()
    @IsNumber()
    number_doc:number
    @ApiProperty()
    @IsString()
    noun: string
    @ApiProperty()
    @IsString()
    documento: 'delayed' | 'hiring'
    @ApiProperty()
    @IsString()
    metod:'create'|'edit'

}

class Representantes {
    @ApiProperty()
    @IsString()
    cargo:string
    @ApiProperty()
    @IsString()
    representante:string
}

class Reception {
    @ApiProperty()
    @IsNumber()
    cantidad:number
    @ApiProperty()
    @IsString()
    unidad:string
    @ApiProperty()
    @IsString()
    description:string
    @ApiProperty()
    @IsNumber()
    price_uni:number
}
