import { Module } from '@nestjs/common';
import { LivrosService } from './livros.service';
import { LivrosController } from './livros.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { LivrosRepository } from './repositories/livros.repository';

@Module({
  controllers: [LivrosController],
  providers: [LivrosService, PrismaService, LivrosRepository],
})
export class LivrosModule {}
