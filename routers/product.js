const express = require("express")
const router = express.Router()
const Product = require('../model/product')
const { InsertProduct, ViewProduct, DeleteProduct, UpdateProduct } = require('../controller/product')

// router.get("/get",(req,res)=>{
//     res.json({message:"hello"})
    
// })

router.post('/insert', InsertProduct )

router.get('/view', ViewProduct )

router.delete('/delete', DeleteProduct )

router.put('/update', UpdateProduct )

module.exports = router