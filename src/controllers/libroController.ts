import { Request, Response } from 'express';
import * as LibroRepository from '../repositories/libroRepository'

export async function obtener(req: Request, res: Response): Promise<void> {
	try {
		const libros = await LibroRepository.obtener();
		res.status(200).json(libros);
	} catch (error) {
		throw new Error(error);
	}
}

export async function crear(req: Request, res: Response): Promise<void> {
	try {
		const libroNuevo = await LibroRepository.crear(req.body);
		res.status(201).json(libroNuevo);
	} catch (error) {
		throw new Error();
	}
}
