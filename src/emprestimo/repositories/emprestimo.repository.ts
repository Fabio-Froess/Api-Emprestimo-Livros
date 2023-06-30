import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { EmprestimoEntity } from '../entities/emprestimo.entity';
import { CreateEmprestimoDto } from '../dto/create-emprestimo.dto';

@Injectable()
export class EmprestimoRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(
    createEmprestimoDto: CreateEmprestimoDto,
  ): Promise<EmprestimoEntity> {
    return this.prisma.emprestimo.create({
      data: createEmprestimoDto,
    });
  }

  async findAll(): Promise<EmprestimoEntity[]> {
    return await this.prisma.emprestimo.findMany({
      include: {
        livro: true,
        pessoa: true,
      },
    });
  }

  async findOne(id: number): Promise<EmprestimoEntity> {
    return this.prisma.emprestimo.findUnique({
      where: {
        id,
      },
    });
  }

  async remove(id: number): Promise<EmprestimoEntity> {
    return this.prisma.emprestimo.delete({
      where: {
        id,
      },
    });
  }
}
