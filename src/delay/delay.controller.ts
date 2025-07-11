import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { DelayService } from './delay.service';
import { CreateDelayDto } from './dto/create-delay.dto';
import { UpdateDelayDto } from './dto/update-delay.dto';

@Controller('delay')
export class DelayController {
  constructor(private readonly delayService: DelayService) {}

  @Post()
  async create(@Body() createDelayDto: CreateDelayDto) {
    return await this.delayService.create(createDelayDto);
  }

  @Get()
  async findAll() {
    return await this.delayService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.delayService.findOne(id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateDelayDto: UpdateDelayDto) {
    return  await this.delayService.update(id, updateDelayDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.delayService.remove(+id);
  }
}
