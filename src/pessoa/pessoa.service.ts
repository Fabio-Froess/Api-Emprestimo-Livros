import { Injectable } from '@nestjs/common';
import { CreatePessoaDto } from './dto/create-pessoa.dto';
import { UpdatePessoaDto } from './dto/update-pessoa.dto';
import { PessoaRepository } from './repositories/pessoa.repository';

@Injectable()
export class PessoaService {
  constructor(private readonly repository: PessoaRepository) {}

  create(createPessoaDto: CreatePessoaDto) {
    return this.repository.create(createPessoaDto);
  }

  findAll() {
    return this.repository.findAll();
  }

  findOne(id: number) {
    return this.repository.findOne(id);
  }

  update(id: number, updatePessoaDto: UpdatePessoaDto) {
    return this.repository.update(id, updatePessoaDto);
  }

  remove(id: number) {
    return this.repository.remove(id);
  }
}
