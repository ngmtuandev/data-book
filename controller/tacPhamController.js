const {TacGia, TacPham} = require('../model/model')

const tacgiaController = {
    themTacPham: async (req, res) => {
        try {
            const tacPhamMoi = new TacPham(req.body)
            if (req.body.tacgia) {
                const timTacGia = await TacGia.findById(req.body.tacgia)
                await timTacGia.updateOne({sach: tacPhamMoi._id})
            }
            const luuTacPham = await tacPhamMoi.save()
            res.status(200).json(luuTacPham)
        } catch (error) {
            res.status(500).json(error)
        }
    },
    layTatCaSach: async (req, res) => {
        try {
            const layTatCaTacPham = await TacPham.find()
            res.status(200).json(layTatCaTacPham)
        } catch (error) {
            res.status(500).json(error)
        }
    },
    layMotSach: async(req, res) => {
        try {
            const sach = await TacPham.findById(req.params.id).populate('tacgia')
            res.status(200).json(sach)
        } catch (error) {
            res.status(500).json(error)
        }
    },
    suaTacPham: async(req, res) => {
        try {
            const timTacPham = await TacPham.findById(req.params.id) 
            await timTacPham.updateOne({$set: req.body})
            res.status(200).json('Cập nhập thành công')
        } catch (error) {
            res.status(500).json(error)
        }
    },
    xoaTacPham: async(req, res) => {
        try {
            await 
                TacGia.updateMany({sach : req.params.id}, {$pull : {sach : req.params.id}}) 
                
            await 
                TacPham.findByIdAndDelete(req.params.id)
            req.status(200).json('Đã xóa')
        } catch (error) {
            res.status(500).json(error)
        }
    }
}

 module.exports = tacgiaController