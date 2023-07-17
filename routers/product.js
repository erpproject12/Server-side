const express = require("express")
const router = express.Router()
const Product = require('../model/product')


router.get("/get",(req,res)=>{
    res.json({message:"hello"})
    
})

module.exports = router