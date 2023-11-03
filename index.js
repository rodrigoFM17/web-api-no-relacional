require('dotenv').config()
require('./src/configs/db.config')

const express = require('express')
const app = express()
const usuarioRouter = require('./src/routes/usuarios.route')
const authRouter = require('./src/routes/auth.route')

app.use(express.json())
app.use('/usuarios', usuarioRouter)
app.use('/auth', authRouter)    

const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log("API escuchando en el puerto 3000")
})