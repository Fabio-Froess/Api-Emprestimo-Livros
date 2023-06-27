import { Livro } from '@prisma/client';

export class LivroEntity implements Livro {
  id: number;
  titulo: string;
  autor: string;
  emprestado: boolean;
}
