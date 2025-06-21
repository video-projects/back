import { Body, Controller, Post } from '@nestjs/common';
import { DisplayService } from './display.service';
import { CreateDisplayDto } from './dto/create-display.dto';

@Controller('display')
export class DisplayController {
  constructor(private readonly service: DisplayService) {}

  @Post()
  create(@Body() dto: CreateDisplayDto) {
    return this.service.create(dto);
  }
}
