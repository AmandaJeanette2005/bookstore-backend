const {invoice} = require("../models")

const InvoiceController = {

    async index(req, res){
        try {
            const dataInv = await invoice.findAll()
            return res.send(dataInv)
        } catch (error) {
            return res.send(error.message)
        }
    },

    async bestSeller(req,res){
        try {
            
        } catch (error) {
            return res.send(error.message)
        }
    }

}
module.exports = InvoiceController