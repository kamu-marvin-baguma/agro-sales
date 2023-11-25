const express = require('express')
const userRouter = require('./routes/userRouter')
const categoriesRouter = require('./routes/categoriesRouter')
const productsRouter = require('./routes/productsRouter')
const server = express();


// Middleware
server.use(express.json())
server.use('/api/v1/users', userRouter)
server.use('/api/v1/products', categoriesRouter)
server.use('/api/v1/categories', productsRouter)


server.get('/api/v1/', (req, res) => {
    res.send('Welcome home');
})



server. listen(1339, () => {
    console.log(`Server listening on port http://localhost:1339`)
})