import { PrismaService } from 'src/prisma/prisma.service';
import { PessoaEntity } from '../entities/pessoa.entity';
import { CreatePessoaDto } from '../dto/create-pessoa.dto';
import { UpdatePessoaDto } from '../dto/update-pessoa.dto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PessoaRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(createPessoaDto: CreatePessoaDto): Promise<PessoaEntity> {
    return this.prisma.pessoa.create({
      data: createPessoaDto,
    });
  }

  async findAll(): Promise<PessoaEntity[]> {
    return await this.prisma.pessoa.findMany();
  }

  async findOne(id: number): Promise<PessoaEntity> {
    return this.prisma.pessoa.findUnique({
      where: {
        id,
      },
    });
  }

  async update(
    id: number,
    updatePessoaDto: UpdatePessoaDto,
  ): Promise<PessoaEntity> {
    return this.prisma.pessoa.update({
      where: {
        id,
      },
      data: updatePessoaDto,
    });
  }

  async remove(id: number): Promise<PessoaEntity> {
    return this.prisma.pessoa.delete({
      where: {
        id,
      },
    });
  }
}
