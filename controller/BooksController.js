const {books} = require("../models")

const BooksController = {

    async index(req, res){
        try {
            const dataBuku = await books.findAll()
            return res.send(dataBuku)
        } catch (error) {
            return res.send(error.message)
        }
    },

    async getByCategory (req, res) {
        try {
            const dataBuku = await books.findAll()
            const dataPerCategory = dataBuku.filter((item) => item.category_id === parseInt(req.params.category))
            return res.send(dataPerCategory)
        } catch (error) {
            return res.send(error.message)
        }
    },

    async addBook(req, res){
        try {
            const {category_id, title, image, author, thn_terbit, description, stock, price } = req.body
            const addbook = await books.create(
                {
                    category_id:category_id,
                    title:title,
                    image:image,
                    author:author,
                    thn_terbit:thn_terbit,
                    description:description,
                    stock:stock,
                    price:price
                }
            )
            return res.status(201).json({
                message : "row created",
                data : addbook
            })
        } catch (error) {
            return res.send(error.message)
        }
    },

    async updateBook(req, res){
        try {
            const {id} = req.params;
            const { category_id, title, image, author, thn_terbit, description, stock, price } = req.body;
            const bookData = await books.findByPk(id);

            if (!bookData) {
                return res.status(401).json({
                    status: 401,
                    message: "book not exist"
                });
            }
            bookData.update(
                {
                    category_id:category_id,
                    title:title,
                    image:image,
                    author:author,
                    thn_terbit:thn_terbit,
                    description:description,
                    stock:stock,
                    price:price
                })
            return res.status(200).json(bookData)
        } catch (error) {   
            return res.send(error.message)
        }
    },

    async delBook(req, res){
        try {
            const {id} = req.params
            const destroy =  await books.destroy({
                where:{id:id}
            })
            return res.send('has deleted!')
        } catch (error) {
            return res.send(error.message)
        }
    }

}
module.exports = BooksController