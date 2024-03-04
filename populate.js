require('dotenv').config()

const connectDB=require("./db/connectDB")
const Product=require('./models/product')

const jsonProduct=require("./data.json")

const start=async()=>{
    try{
        await connectDB(process.env.MONGO_URI)
        await Product.deleteMany()
        await Product.create(jsonProduct)
        console.log("done")
        process.exit(0)
    }
    catch(err){
        
    }
}
start()