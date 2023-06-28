import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { LivrosModule } from './livros/livros.module';
import { PessoaModule } from './pessoa/pessoa.module';
import { EmprestimoModule } from './emprestimo/emprestimo.module';

@Module({
  imports: [ConfigModule.forRoot(), LivrosModule, PessoaModule, EmprestimoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
