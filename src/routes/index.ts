import * as LibroController from '../controllers/libroController';
import { Router } from 'express';

const router = Router();

router.get('/libros', LibroController.obtener);
router.post('/libros', LibroController.crear);

export default router;
