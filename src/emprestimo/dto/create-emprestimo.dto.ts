import { IsDate, IsDateString, IsNumber } from 'class-validator';

export class CreateEmprestimoDto {
  @IsDateString()
  data_devolucao: Date;

  @IsNumber()
  livroId: number;

  @IsNumber()
  pessoaId: number;
}
