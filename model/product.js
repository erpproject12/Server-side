const express = require('express')
const mongoose = require('mongoose')
const {Schema} = mongoose


const ProductSchema = new Schema ({
    product_name:{
        type:String,
        required:true
    },
    product_code:{
        type:String,
        required:true
    },
    tax_code:{
        type:String,
        required:true
    },
    product_description:{
        type:String,
        required:true,
    },
    rack_no:{
        type:Number,
        required:true
    },
    HSN:{
        type:String,
        required:true
    },
    product_barcode:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    manufactures:{
        type:String,
        required:true
    },
    unit_of_masure:{
        type:String,
        required:true
    },
    active_status:{
        type:String,
        required:true
    },
    weight_dimension:{
        type:String,
        required:true
    },
    variants:{
        type:String,
        required:true
    },
    reorder_point:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    },
    updated_date:{
        type:Date,
        default:Date.now
    }
})

module.exports=mongoose.model("product", ProductSchema)