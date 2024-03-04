const Product=require('../models/product')

const getAllProducts=async (req,res)=>{   
    const {featured,company,name,sort,fields,numericFilters}=req.query
    const queryObj={}
    featured ? queryObj.featured=true:null
    company? queryObj.company="Company"+company:null
    name? queryObj.name={$regex:name,$options:"i"}:null


    const operatorMap={
        ">":"$gt",
        ">=":"$gte",
        "<":"$lt",
        "<=":"$lte",
        "=":"$eq",
        ">=":"$gte",

    }
    const regEx=/\b(<|>|>=|=|<=|<)\b/g
    let filters=numericFilters.replace(regEx,(match)=>{
       return  `-${operatorMap[match]}-`
    })
    const options=["price","rating"]
    filters=filters.split(",").forEach((item)=>{
        const [field,operator,value]=item.split('-')
        if(options.includes(field))
        {
            queryObj[field]={[operator]:Number(value)}
        }
    })
    console.log(queryObj)
    let result =Product.find(queryObj)
    if (sort)
    {   
        const sortList=sort.split(",").join(" ")
        result=result.sort(sortList)
    }
    else{
        result=result.sort("createdAt")
    }
    if(fields)
    {
        const fieldsList=fields.split(",").join(" ")
        result=result.select(fieldsList)

    }
    const page=Number(req.query.page) || 1
    const limit=Number(req.query.limit) || 10

    const skip=(page-1)*limit
    result=result.skip(skip).limit(limit)
 
    const products=await result

    res.status(200).json({sucess:1,nbHits:products.length,message:"get  route",data:products})
}  
const getAllProductsStatic=async (req,res)=>{
    res.status(200).json({sucess:1,message:"get testing products route"})
}

module.exports={getAllProductsStatic,getAllProducts}  