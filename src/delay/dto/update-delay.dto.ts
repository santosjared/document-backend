import { PartialType } from '@nestjs/mapped-types';
import { CreateDelayDto } from './create-delay.dto';

export class UpdateDelayDto extends PartialType(CreateDelayDto) {}
