const path=require("path")

require("dotenv").config()
console.log(__dirname)
//async errors
require("express-async-errors")
const express=require("express")
const app=express()
const connectDB=require("./db/connectDB")
const ProductsRouter=require("./routes/product")
const notFoundMiddleware=require("./middleware/not-found")
const errorMiddleware=require("./middleware/error-handler")


app.use(express.json())
  
//routes
app.get(("/"),(req,res)=>{
    res.send('<h1>Store API</h1><a href="/api/v1/produtcs">Products<a>')
})
app.use("/api/v1/products",ProductsRouter)


app.use(notFoundMiddleware)
app.use(errorMiddleware)

const PORT=process.env.PORT || 3000
const start= async ()=>{
    try{

        await connectDB(process.env.MONGO_URI)
    console.log("Connected to database....")
        //connectDB
        app.listen(PORT,console.log(`Server is listening at port: ${PORT}`))
    }
    catch(err){
        console.log(err)
    }
} 
start()