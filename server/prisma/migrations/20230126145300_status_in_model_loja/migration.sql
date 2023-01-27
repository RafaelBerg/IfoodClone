/*
  Warnings:

  - Added the required column `horario_fim` to the `loja` table without a default value. This is not possible if the table is not empty.
  - Added the required column `horario_inicio` to the `loja` table without a default value. This is not possible if the table is not empty.
  - Added the required column `status` to the `loja` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_loja" (
    "nome" TEXT NOT NULL PRIMARY KEY,
    "email" TEXT NOT NULL,
    "senha" TEXT NOT NULL,
    "status" BOOLEAN NOT NULL,
    "horario_inicio" DATETIME NOT NULL,
    "horario_fim" DATETIME NOT NULL
);
INSERT INTO "new_loja" ("email", "nome", "senha") SELECT "email", "nome", "senha" FROM "loja";
DROP TABLE "loja";
ALTER TABLE "new_loja" RENAME TO "loja";
CREATE UNIQUE INDEX "loja_email_key" ON "loja"("email");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
