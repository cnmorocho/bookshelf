import * as LibroController from '../controllers/libroController';
import * as AutorController from '../controllers/autorController';
import { Router } from 'express';

const router = Router();

router.get('/libros', LibroController.obtener);
router.post('/libros', LibroController.crear);
router.post('/autor', AutorController.crear);

export default router;
