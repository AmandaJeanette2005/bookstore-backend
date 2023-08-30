const {orders, books, invoice} = require('../models')

const OrdersController = {

    async index(req, res){
        try {
            const data = await orders.findAll()
            return res.send(data)
        } catch (error) {
            return res.send(error.message)
        }
    },

    async addToCart(req, res){
        try {
            const {userLogin, book_id, quantity} = req.body
            const book = await books.findOne({
                where:{id:book_id}
            })

            const totalPrice = book.price * quantity

            const addToOrd = await orders.create({
                user_id:userLogin,
                book_id:book_id,
                invoice_id:null,
                quantity:quantity,
                product_price:book.price,
                total_price:totalPrice
            })
            return res.send('succes add to cart!')
        } catch (error) {
            return res.send(error.message)
        }
    },

    async editCart(req, res){
        try {
            const {id} = req.params
            const {userLogin, book_id, quantity} = req.body
            const edit = await orders.update({
                user_id:userLogin,
                book_id:book_id,
                quantity:quantity
            }, {
                where:{id:id}
            })
            return res.send('has updated!')
        } catch (error) {
            return res.send(error.message)
        }
    },

    async delCart(req, res){
        try {
            const {id} = req.params
            const destroy = await orders.delete({
                where:{id:id}
            })
            return res.send('has deleted!')
        } catch (error) {
            return res.send(error.message)
        }
    },

    async checkout(req, res){
        try {
            const {userLogin} = req.body
            const ord = await orders.findAll({
                where:{
                    user_id:userLogin,
                    invoice_id:null
                }
            })

            const totalPrice = await ord.map(x => x.total_price).reduce((a,b) => a + b, 0 )


            const addInv = {
                user_id: userLogin,
                invoice_no: `INV${userLogin}`,
                total_price: totalPrice
            }

            console.log(addInv)
            const CreateInv = await invoice.create(addInv)
            console.log(CreateInv)
            
            const updateord = await orders.update({
                invoice_id:CreateInv.id 
            }, {
                where:{
                    invoice_id:null,
                    user_id:userLogin
                }
            })
            console.log(updateord)
            return res.send('checkout!')
        } catch (error) {
            return res.send(error.message)
        }
    }
    
}
module.exports = OrdersController