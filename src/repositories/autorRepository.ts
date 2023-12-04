import { Autor, PrismaClient } from "@prisma/client"

const prisma = new PrismaClient();

export async function crear(autorNuevo: Autor) {
    return prisma.autor.create({
        data: autorNuevo
    });
}
