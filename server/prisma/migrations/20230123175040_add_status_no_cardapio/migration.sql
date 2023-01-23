/*
  Warnings:

  - You are about to drop the column `loja_fk` on the `item` table. All the data in the column will be lost.
  - Added the required column `status` to the `cardapio` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_cardapio" (
    "status" BOOLEAN NOT NULL,
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "preco" REAL NOT NULL,
    "loja_fk" TEXT NOT NULL,
    CONSTRAINT "cardapio_loja_fk_fkey" FOREIGN KEY ("loja_fk") REFERENCES "loja" ("nome") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_cardapio" ("id", "loja_fk", "nome", "preco") SELECT "id", "loja_fk", "nome", "preco" FROM "cardapio";
DROP TABLE "cardapio";
ALTER TABLE "new_cardapio" RENAME TO "cardapio";
CREATE TABLE "new_item" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "qntd" INTEGER NOT NULL,
    "pedido_fk" INTEGER NOT NULL,
    CONSTRAINT "item_pedido_fk_fkey" FOREIGN KEY ("pedido_fk") REFERENCES "pedido" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_item" ("id", "nome", "pedido_fk", "qntd") SELECT "id", "nome", "pedido_fk", "qntd" FROM "item";
DROP TABLE "item";
ALTER TABLE "new_item" RENAME TO "item";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
