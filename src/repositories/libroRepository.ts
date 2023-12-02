import { Libro, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function obtener(): Promise<Libro[]> {
    return prisma.libro.findMany();
}

export async function crear(libroNuevo: Libro): Promise<Libro> {
    return prisma.libro.create({
        data: libroNuevo
    });
}


