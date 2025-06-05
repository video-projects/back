import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DisplayService } from './display/display.service';
import { DisplayController } from './display/display.controller';
import { DisplayModule } from './display/display.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'mahan',
      password: 'mahan',
      database: 'mydb02',
      entities: ['src/**/*.entity.ts'],
      migrations: ['src/migrations/*.ts'],
      synchronize: false,
    }),
    DisplayModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
