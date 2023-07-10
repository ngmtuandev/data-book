
const tacgiaController = require('../controller/tacgiaController')
const router = require('express').Router();

router.post("/", tacgiaController.themTacGia)

router.get("/", tacgiaController.tatCaTacGia)

router.get("/:id", tacgiaController.getMotTacGia)

router.put("/:id", tacgiaController.capNhapTacGia)

router.delete('/:id', tacgiaController.xoaTacGia)

module.exports = router