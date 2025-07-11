import { Injectable } from '@nestjs/common';
import { CreateDelayDto } from './dto/create-delay.dto';
import { UpdateDelayDto } from './dto/update-delay.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Delay, DelayDocument } from './schema/delay.schema';
import { Model } from 'mongoose';
import { DocumentsService } from 'src/documents/documents.service';

@Injectable()
export class DelayService {
  constructor(@InjectModel(Delay.name) private readonly delayModel: Model<DelayDocument>,
    private docmuentsService: DocumentsService
  ) { }
  async create(createDelayDto: CreateDelayDto) {
    try {
      await this.docmuentsService.update()
      return await this.delayModel.create(createDelayDto);
    } catch (e) {
      console.error(e)
      return null
    }

  }

  async findAll() {
    return await this.delayModel.find();
  }

  async findOne(id: string) {
    return await this.delayModel.findById(id);
  }

   async update(id: string, updateDelayDto: UpdateDelayDto) {
    return await this.delayModel.findByIdAndUpdate(id,updateDelayDto);
  }

  remove(id: number) {
    return `This action removes a #${id} delay`;
  }
}
