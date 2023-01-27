-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_pedido" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "status" TEXT NOT NULL,
    "loja_fk" TEXT NOT NULL,
    "cliente_fk" TEXT NOT NULL,
    CONSTRAINT "pedido_cliente_fk_fkey" FOREIGN KEY ("cliente_fk") REFERENCES "cliente" ("email") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "pedido_loja_fk_fkey" FOREIGN KEY ("loja_fk") REFERENCES "loja" ("nome") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_pedido" ("cliente_fk", "id", "loja_fk", "status") SELECT "cliente_fk", "id", "loja_fk", "status" FROM "pedido";
DROP TABLE "pedido";
ALTER TABLE "new_pedido" RENAME TO "pedido";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
