const express = require('express')
const router = express.Router()
const usuarioController = require('../controllers/usuario.controller')
const authMiddleware = require('../middlewares/auth.middleware')

router.get('/',authMiddleware.verificarJWT, usuarioController.index)
router.post('/',authMiddleware.verificarJWT, usuarioController.create)
router.delete('/:id',authMiddleware.verificarJWT, usuarioController.delete)
router.patch('/:id',authMiddleware.verificarJWT, usuarioController.updateParcial)
router.put('/:id',authMiddleware.verificarJWT, usuarioController.updateCompleto)

module.exports = router