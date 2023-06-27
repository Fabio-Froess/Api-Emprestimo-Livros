import { IsBoolean, IsNotEmpty, IsString } from 'class-validator';

export class CreateLivroDto {
  @IsString()
  @IsNotEmpty()
  titulo: string;

  @IsString()
  @IsNotEmpty()
  autor: string;

  @IsBoolean()
  emprestado: boolean;
}
