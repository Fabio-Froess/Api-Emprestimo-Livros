import { Injectable } from '@nestjs/common';
import { CreateLivroDto } from './dto/create-livro.dto';
import { UpdateLivroDto } from './dto/update-livro.dto';
import { LivrosRepository } from './repositories/livros.repository';

@Injectable()
export class LivrosService {
  constructor(private readonly repository: LivrosRepository) {}

  create(createLivroDto: CreateLivroDto) {
    return this.repository.create(createLivroDto);
  }

  findAll() {
    return this.repository.findAll();
  }

  findOne(id: number) {
    return this.repository.findOne(id);
  }

  update(id: number, updateLivroDto: UpdateLivroDto) {
    return this.repository.update(id, updateLivroDto);
  }

  remove(id: number) {
    return this.repository.remove(id);
  }
}
