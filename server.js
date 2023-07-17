require('dotenv').config()
const mongoose = require('mongoose')
const express = require("express")
const app = express();
app.use(express.json())

const router  = require('./routers/product')
app.use('/api',router)


mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    app.listen(process.env.PORT,()=>{
        console.log('connected to db $ listening on port',process.env.PORT)
    })
})
.catch((error)=>{
    console.log(error)
})
