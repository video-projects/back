import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Display } from './entities/display.entity';
import { DisplayController } from './display.controller';
import { DisplayService } from './display.service';

@Module({
  imports: [TypeOrmModule.forFeature([Display])],
  providers: [DisplayService],
  controllers: [DisplayController],
})
export class DisplayModule {}
