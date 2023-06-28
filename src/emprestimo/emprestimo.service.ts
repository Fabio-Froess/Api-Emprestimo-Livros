import { Injectable } from '@nestjs/common';
import { CreateEmprestimoDto } from './dto/create-emprestimo.dto';
import { UpdateEmprestimoDto } from './dto/update-emprestimo.dto';
import { EmprestimoRepository } from './repositories/emprestimo.repository';

@Injectable()
export class EmprestimoService {
  constructor(private readonly repository: EmprestimoRepository) {}

  create(createEmprestimoDto: CreateEmprestimoDto) {
    return this.repository.create(createEmprestimoDto);
  }

  findAll() {
    return this.repository.findAll();
  }

  findOne(id: number) {
    return this.repository.findOne(id);
  }

  update(id: number, updateEmprestimoDto: UpdateEmprestimoDto) {
    return `This action updates a #${id} emprestimo`;
  }

  remove(id: number) {
    return this.repository.remove(id);
  }
}
