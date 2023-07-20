const express = require("express")
const router = express.Router()
const Product = require('../model/product')
const { InsertProduct, ViewProduct, DeleteProduct, UpdateProduct } = require('../controller/product')
const {InsertParty,ViewParty,UpdateParty} = require('../controller/party')
// router.get("/get",(req,res)=>{
//     res.json({message:"hello"})
    
// })

router.post('/insert', InsertProduct )

router.get('/view', ViewProduct )

router.get('/view/:id', ViewProduct )

router.delete('/delete/:id', DeleteProduct )

router.put('/update/:id', UpdateProduct )

// //party
router.post('/party_insert',InsertParty)

router.get('/view_party',ViewParty)

router.get('/view_party/:id',ViewParty)

router.put('/party_update/:id',UpdateParty)

module.exports = router