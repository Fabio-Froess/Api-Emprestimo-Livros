import { IsDate, IsNumber } from 'class-validator';

export class CreateEmprestimoDto {
  @IsDate()
  data_devolucao: Date;

  @IsNumber()
  livroId: number;

  @IsNumber()
  pessoaId: number;
}
