const mongoose=require("mongoose")
const productSchema=new mongoose.Schema({
    name:{
        type:String,
        required:[true,'Product name must be provided']
    },
    price:{
        type:Number,
        required:[true,'Product price must be provided']
    },
    featured:{
        type:Boolean,
        default:true
    },
    rating:{
        type:Number,
        default:4
    },
    createdAt:{
        type:Date,
        default:Date.now()
    },
    company:{
        type:String,
        enum:{
            values:['CompanyA','CompanyB','CompanyC','CompanyD'],
            message:'{VALUE} is not supported'
        }
        // enum:['CompanyA','CompanyB','CompanyC','CompanyD']
    }

})


module.exports=mongoose.model("Product",productSchema)