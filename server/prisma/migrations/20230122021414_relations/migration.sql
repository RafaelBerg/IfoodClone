-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_cardapio" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "preco" REAL NOT NULL,
    "loja_fk" TEXT NOT NULL,
    CONSTRAINT "cardapio_loja_fk_fkey" FOREIGN KEY ("loja_fk") REFERENCES "loja" ("nome") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_cardapio" ("id", "loja_fk", "nome", "preco") SELECT "id", "loja_fk", "nome", "preco" FROM "cardapio";
DROP TABLE "cardapio";
ALTER TABLE "new_cardapio" RENAME TO "cardapio";
CREATE TABLE "new_pedido" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "concluido" BOOLEAN NOT NULL,
    "loja_fk" TEXT NOT NULL,
    "cliente_fk" TEXT NOT NULL,
    CONSTRAINT "pedido_cliente_fk_fkey" FOREIGN KEY ("cliente_fk") REFERENCES "cliente" ("email") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "pedido_loja_fk_fkey" FOREIGN KEY ("loja_fk") REFERENCES "loja" ("nome") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_pedido" ("cliente_fk", "concluido", "id", "loja_fk") SELECT "cliente_fk", "concluido", "id", "loja_fk" FROM "pedido";
DROP TABLE "pedido";
ALTER TABLE "new_pedido" RENAME TO "pedido";
CREATE TABLE "new_item" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "qntd" INTEGER NOT NULL,
    "pedido_fk" INTEGER NOT NULL,
    "loja_fk" TEXT NOT NULL,
    CONSTRAINT "item_pedido_fk_fkey" FOREIGN KEY ("pedido_fk") REFERENCES "pedido" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "item_loja_fk_fkey" FOREIGN KEY ("loja_fk") REFERENCES "loja" ("nome") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_item" ("id", "loja_fk", "nome", "pedido_fk", "qntd") SELECT "id", "loja_fk", "nome", "pedido_fk", "qntd" FROM "item";
DROP TABLE "item";
ALTER TABLE "new_item" RENAME TO "item";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
