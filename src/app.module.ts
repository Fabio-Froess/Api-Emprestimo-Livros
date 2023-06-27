import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { LivrosModule } from './livros/livros.module';

@Module({
  imports: [ConfigModule.forRoot(), LivrosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
