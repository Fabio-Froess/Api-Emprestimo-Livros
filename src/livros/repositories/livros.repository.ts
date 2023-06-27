import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateLivroDto } from '../dto/create-livro.dto';
import { UpdateLivroDto } from '../dto/update-livro.dto';
import { LivroEntity } from '../entities/livro.entity';

@Injectable()
export class LivrosRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(createLivroDto: CreateLivroDto): Promise<LivroEntity> {
    return this.prisma.livro.create({
      data: createLivroDto,
    });
  }

  async findAll(): Promise<LivroEntity[]> {
    return await this.prisma.livro.findMany();
  }

  async findOne(id: number): Promise<LivroEntity> {
    return this.prisma.livro.findUnique({
      where: {
        id,
      },
    });
  }

  async update(
    id: number,
    updateLivroDto: UpdateLivroDto,
  ): Promise<LivroEntity> {
    return this.prisma.livro.update({
      where: {
        id,
      },
      data: updateLivroDto,
    });
  }

  async remove(id: number): Promise<LivroEntity> {
    return this.prisma.livro.delete({
      where: {
        id,
      },
    });
  }
}
