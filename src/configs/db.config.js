const mongoose = require('mongoose')

mongoose.connect(process.env.URL_MONGODB)
.then( () =>{
    console.log("conectado a la base de datos")
})
.catch(console.log)