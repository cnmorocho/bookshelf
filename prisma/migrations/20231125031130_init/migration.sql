-- CreateTable
CREATE TABLE "Libro" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "titulo" TEXT NOT NULL,
    "autor" TEXT NOT NULL,
    "ISBN" TEXT NOT NULL,
    "descripcion" TEXT NOT NULL,
    "genero" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Libro_ISBN_key" ON "Libro"("ISBN");
