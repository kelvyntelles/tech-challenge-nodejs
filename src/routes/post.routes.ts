import { Router } from 'express';
import { create, getAll, getOne, update, remove, search } from '../controllers/post.controllers'

const router = Router();

router.post('/', create);
router.get('/', getAll);
router.get('/search', search);
router.get('/:id', getOne);
router.put('/:id', update);
router.delete('/:id', remove);

export default router;
