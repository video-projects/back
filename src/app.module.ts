import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DisplayModule } from './display/display.module';
import { SectionService } from './section/section.service';
import { SectionController } from './section/section.controller';
import { SectionModule } from './section/section.module';
import { ChatGateway } from './chat/chat.gateway';

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
      autoLoadEntities: true,
      synchronize: false,
    }),
    DisplayModule,
    SectionModule,
  ],
  controllers: [AppController, SectionController],
  providers: [AppService, SectionService, ChatGateway, ChatGateway],
})
export class AppModule {}
