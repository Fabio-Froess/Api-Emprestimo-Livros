import { Module } from '@nestjs/common';
import { PessoaService } from './pessoa.service';
import { PessoaController } from './pessoa.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { PessoaRepository } from './repositories/pessoa.repository';

@Module({
  controllers: [PessoaController],
  providers: [PessoaService, PrismaService, PessoaRepository],
})
export class PessoaModule {}
