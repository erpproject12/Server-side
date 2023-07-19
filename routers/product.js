const express = require("express")
const router = express.Router()
const Product = require('../model/product')
const { InsertProduct, ViewProduct, DeleteProduct, UpdateProduct } = require('../controller/product')

// router.get("/get",(req,res)=>{
//     res.json({message:"hello"})
    
// })

router.post('/insert', InsertProduct )

router.get('/view', ViewProduct )

router.get('/view/:id', ViewProduct )

router.delete('/delete/:id', DeleteProduct )

router.put('/update/:id', UpdateProduct )

module.exports = router