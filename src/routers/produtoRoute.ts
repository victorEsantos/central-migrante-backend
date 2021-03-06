import exp from 'express';
const router = exp.Router();

import produtoController from '../controllers/produtoController';


router.get("/", produtoController.get)
router.get("/:id", produtoController.getById)
router.post("/", produtoController.post)
router.put("/", produtoController.put)

export default router