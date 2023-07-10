const mongoose = require('mongoose')

const tacgia = new mongoose.Schema({
    ten: {
        type: String,
        require: true
    },
    namsinh: {
        type: String,
        require: true
    },
    sach: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "TacPham"
    }]
})

const sach = new mongoose.Schema({
    tensach: {
        type: String,
        require: true
    },
    namxuatban: {
        type: String,
        require: true
    },
    theloai: [String],
    tacgia: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "TacGia"
    }
})

let TacGia = mongoose.model("TacGia", tacgia)
let TacPham = mongoose.model("TacPham", sach)


module.exports = { TacGia, TacPham }