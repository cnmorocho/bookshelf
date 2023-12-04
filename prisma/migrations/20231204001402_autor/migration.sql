/*
  Warnings:

  - You are about to drop the column `autor` on the `Libro` table. All the data in the column will be lost.
  - Added the required column `idAutor` to the `Libro` table without a default value. This is not possible if the table is not empty.

*/
-- CreateTable
CREATE TABLE "Autor" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nombre" TEXT NOT NULL,
    "apellido" TEXT NOT NULL,
    "biografia" TEXT
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Libro" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "titulo" TEXT NOT NULL,
    "idAutor" INTEGER NOT NULL,
    "ISBN" TEXT,
    "descripcion" TEXT,
    "genero" TEXT,
    CONSTRAINT "Libro_idAutor_fkey" FOREIGN KEY ("idAutor") REFERENCES "Autor" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Libro" ("ISBN", "descripcion", "genero", "id", "titulo") SELECT "ISBN", "descripcion", "genero", "id", "titulo" FROM "Libro";
DROP TABLE "Libro";
ALTER TABLE "new_Libro" RENAME TO "Libro";
CREATE UNIQUE INDEX "Libro_titulo_key" ON "Libro"("titulo");
CREATE UNIQUE INDEX "Libro_ISBN_key" ON "Libro"("ISBN");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
