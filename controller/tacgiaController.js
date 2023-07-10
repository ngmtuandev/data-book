const {TacGia, TacPham} = require('../model/model')

const tacgiaController = {
    themTacGia: async (req, res) => {
        try {
            const tacGiaMoi = new TacGia(req.body)
            const saveTacGia = await tacGiaMoi.save()
            res.status(200).json(saveTacGia)
        } catch (error) {
            res.status(500).json(error)
        }
    },

    tatCaTacGia: async (req, res) => {
        try {
            const tacgiaAll = await TacGia.find()
            res.status(200).json(tacgiaAll)
        } catch (error) {
            res.status(500).json(error) 
        }
    },
    getMotTacGia: async (req, res) => {
        try {
            const timTacGia = await TacGia.findById(req.params.id).populate('sach')
            res.status(200).json(timTacGia)
        } catch (error) {
            res.status(500).json(error)
        }
    },
    capNhapTacGia: async (req, res) => {
        try {
            const timTacGiaSua = await TacGia.findById(req.params.id)
            await timTacGiaSua.updateOne({$set: req.body})
            res.status(200).json('Sửa thành công')
        } catch (error) {
            res.status(500).json(error)
        }
    },
    xoaTacGia: async (req, res) => {
        try {
            await TacGia.findByIdAndDelete(req.params.id)
            await TacPham.updateMany({sach: req.params.id}, {sach: null})
            res.status(200).json('Đã xóa')
        } catch (error) {
            res.status(500).json(error)
        }
    }
}

module.exports = tacgiaController