const express = require('express')
const HomeController = require('../controller/HomeController')
const BooksController = require('../controller/BooksController')
const CategoryController = require('../controller/CategoryCotroller')
const UserController = require('../controller/UserController')
const OrdersController = require('../controller/OrdersController')
const InvoiceController = require('../controller/InvoiceController')
const router = express.Router()

router.get('/', HomeController.index)

//user
router.get('/users', UserController.index)
router.post('/add-user', UserController.addUser)
router.put('/users/:id', UserController.UpdateUser)
router.delete('/users/:id', UserController.delUser)

//category
router.get('/category', CategoryController.index)
router.post('/add-ctg', CategoryController.addCtg)
router.put('/category/:id', CategoryController.updateCtg)
router.delete('/category/:id', CategoryController.delCtg)

//books
router.get('/books', BooksController.index)
router.get('/books/:category', BooksController.getByCategory)
router.post('/add-book', BooksController.addBook)
router.put('/books/:id', BooksController.updateBook)
router.delete('/books/:id', BooksController.delBook)

//orders
router.get('/cart', OrdersController.index)
router.post('/add-to-cart', OrdersController.addToCart)
router.put('/cart/:id', OrdersController.editCart)
router.delete('/cart/:id', OrdersController.delCart)
router.post('/checkout', OrdersController.checkout)

//inv
router.get('/invoice', InvoiceController.index)



module.exports = router
