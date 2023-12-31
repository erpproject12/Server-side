const express = require("express")
const router = express.Router()
const Product = require('../model/product')
const { InsertProduct, ViewProduct, DeleteProduct, UpdateProduct } = require('../controller/product')
const { InsertParty,  ViewParty , DeleteParty,UpdateParty } = require ('../controller/party_controller')



//product


router.get('/view/:id', ViewProduct )

router.delete('/delete/:id', DeleteProduct )

router.put('/update/:id', UpdateProduct )

router.post('/insert', InsertProduct )


//Party
router.post('/party_insert', InsertParty)
router.get('/party_view',  ViewParty)
router.delete('/party_delete/:id', DeleteParty)
router.put('/party_update/:id', UpdateParty)


module.exports = router