import { Pessoa } from '@prisma/client';

export class PessoaEntity implements Pessoa {
  id: number;
  nome: string;
}
