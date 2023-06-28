import { Emprestimo } from '@prisma/client';

export class EmprestimoEntity implements Emprestimo {
  id: number;
  data_emprestimo: Date;
  data_devolucao: Date;
  livroId: number;
  pessoaId: number;
}
