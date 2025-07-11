import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DocumentsService } from './documents.service';
import { CreateDocumentDto } from './dto/create-document.dto';
import { UpdateDocumentDto } from './dto/update-document.dto';

@Controller('documents')
export class DocumentsController {
  constructor(private readonly documentsService: DocumentsService) {}



  @Get()
  findAll() {
    return this.documentsService.findAll();
  }

  @Get(':year')
  findOne(@Param('year') year: string) {
    return this.documentsService.findOne(+year);
  }
}
