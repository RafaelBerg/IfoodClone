-- CreateTable
CREATE TABLE "loja" (
    "nome" TEXT NOT NULL PRIMARY KEY,
    "email" TEXT NOT NULL,
    "senha" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "cliente" (
    "email" TEXT NOT NULL PRIMARY KEY,
    "nome" TEXT NOT NULL,
    "senha" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "pedido" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "status" BOOLEAN NOT NULL,
    "loja_fk" TEXT NOT NULL,
    "cliente_fk" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "cardapio" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "preco" REAL NOT NULL,
    "loja_fk" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "item" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "qntd" INTEGER NOT NULL,
    "pedido_fk" INTEGER NOT NULL,
    "loja_fk" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "loja_email_key" ON "loja"("email");
