import { Injectable } from '@nestjs/common';
import { CreateDocumentDto } from './dto/create-document.dto';
import { UpdateDocumentDto } from './dto/update-document.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Documents, DocumentsDocument } from './schema/documents';
import { Model } from 'mongoose';

@Injectable()
export class DocumentsService {
  constructor(@InjectModel(Documents.name) private readonly documentsModel:Model<DocumentsDocument>){}
  findAll() {
    return `This action returns all documents`;
  }

  async findOne(year: number) {
    const res = await this.documentsModel.findOne({year});
    return res?.seq || 1;
  }

  async update() {
    const year = new Date().getFullYear();
    return await this.documentsModel.findOneAndUpdate({
      year
    },
    { $inc: { seq: 1 } },
    { new: true, upsert: true }
  )
  }

  remove(id: number) {
    return `This action removes a #${id} document`;
  }
}
