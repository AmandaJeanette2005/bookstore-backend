const {Users} = require('../models')

const UserController = {

    async index(req, res){
        try {
            const data = await Users.findAll()
            return res.send(data)
        } catch (error) {
            return res.send(error.message)
        }
    },


    async addUser(req, res){
        try {
            const {name, username, password,role} = req.body
            const add = await Users.create({
                name:name,
                username:username,
                password:password,
                role:role
            })
            return res.send('has created!')
        } catch (error) {
            return res.send(error.message)
        }
    },

    async UpdateUser(req, res){
        try {
            const {id} = req.params
            const {name, username, password, role} = req.body
            const edit = await Users.update({
                name:name,
                username:username,
                password:password,
                role:role
            }, {
                where:{id:id}
            })
            return res.send('has updated!')
        } catch (error) {
            return res.send(error.message)
        }
    },

    async delUser(req, res){
        try {
            const {id} =req.params
            const destroy = await Users.delete({
                where:{id:id}
            })
            return res.send('has delete!')
        } catch (error) {
            return res.send(error.message)
        }
    }
}
module.exports = UserController