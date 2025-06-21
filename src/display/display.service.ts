import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Display } from './entities/display.entity';
import { Repository } from 'typeorm';
import { CreateDisplayDto } from './dto/create-display.dto';

@Injectable()
export class DisplayService {
  constructor(
    @InjectRepository(Display)
    private readonly repository: Repository<Display>,
  ) {}

  async create(dto: CreateDisplayDto) {
    const display = this.repository.create(dto);
    return await this.repository.save(display);
  }
}
