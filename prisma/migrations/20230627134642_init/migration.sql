-- CreateTable
CREATE TABLE "livro" (
    "id" SERIAL NOT NULL,
    "titulo" TEXT NOT NULL,
    "autor" TEXT NOT NULL,
    "emprestado" BOOLEAN NOT NULL,

    CONSTRAINT "livro_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "pessoa" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,

    CONSTRAINT "pessoa_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "emprestimo" (
    "id" SERIAL NOT NULL,
    "data_emprestimo" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "data_devolucao" TIMESTAMP(3) NOT NULL,
    "livroId" INTEGER NOT NULL,
    "pessoaId" INTEGER NOT NULL,

    CONSTRAINT "emprestimo_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "emprestimo" ADD CONSTRAINT "emprestimo_livroId_fkey" FOREIGN KEY ("livroId") REFERENCES "livro"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "emprestimo" ADD CONSTRAINT "emprestimo_pessoaId_fkey" FOREIGN KEY ("pessoaId") REFERENCES "pessoa"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
