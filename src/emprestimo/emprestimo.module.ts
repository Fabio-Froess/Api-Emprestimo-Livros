import { Module } from '@nestjs/common';
import { EmprestimoService } from './emprestimo.service';
import { EmprestimoController } from './emprestimo.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { EmprestimoRepository } from './repositories/emprestimo.repository';

@Module({
  controllers: [EmprestimoController],
  providers: [EmprestimoService, PrismaService, EmprestimoRepository],
})
export class EmprestimoModule {}
