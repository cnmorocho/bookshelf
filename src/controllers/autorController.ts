import { Request, Response } from "express";
import * as AutorRepository from '../repositories/autorRepository'

export async function crear(req: Request, res: Response) {
    try {
        const { autorNuevo } = req.body;
        const autorCreado = await AutorRepository.crear(autorNuevo);
        res.status(201).json(autorCreado);
    } catch (error) {
        throw new Error(error);
    }    
}
