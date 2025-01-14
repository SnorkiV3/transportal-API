const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const BrandSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
})

const Brand = mongoose.model('Brand', BrandSchema)
module.exports = Brand;