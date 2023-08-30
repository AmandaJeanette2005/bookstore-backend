const {category} = require('../models')

const CategoryController = {

    async index(req,res){
        try {
            const dataCtg = await category.findAll()
            return res.send(dataCtg)
        } catch (error) {
            return res.send(error.message)
        }
    },

    async addCtg(req, res){
        try {
            const {CategoryName} = req.body
            const addCy = await category.create({
                CategoryName:CategoryName
            })
            console.log(addCy)
            return res.send('category added!')
        } catch (error) {
            return res.send(error.message)
        }
    },

    async updateCtg(req, res){
        try {
            const {id} = req.params
            const {CategoryName} = req.body
            const edit = await category.update({
                CategoryName:CategoryName
            }, {
                where:{id:id}
            })
            return res.send('has updated!')
        } catch (error) {
            return res.send(error.message)
        }
    },

    async delCtg(req, res){
        try {
            const {id} = req.params
            const destroy = await category.delete({
                where:{id:id}
            })
            return res.send('has deleted!')
        } catch (error) {
            return res.send(error.message)
        }
    }
}
module.exports = CategoryController