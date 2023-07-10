const router = require('express').Router()
const tacPhamController = require('../controller/tacPhamController')

router.post('/', tacPhamController.themTacPham)

router.get('/', tacPhamController.layTatCaSach)

router.get('/:id', tacPhamController.layMotSach)

router.put('/:id', tacPhamController.suaTacPham)

router.delete('/:id', tacPhamController.xoaTacPham)


module.exports = router