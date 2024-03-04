const getName=()=>{
    const s="abcdefghijklmnopqrstuuvwxyzABCDEFGHIJKLMOPQRSTUVWXYZ"
    let answer=""
    for(let i=0;i<=10;i++)
    {
        answer+=s[Number(Math.floor(Math.random()*s.length))]
    }
    return answer;

}
const getPrice=()=>{
    return Number(Math.floor(Math.random()*100)+10)
}

const getRating=()=>{
    return (Math.random()*5).toFixed(1)
}
const getcompany=()=>{
    const arr=["A","B","C","D"]
    return 'Company'+arr[(Math.floor(Math.random()*4))]

}
obj=[]
for(let i=0;i<50;i++)
{
    obj.push(
        {
            name:getName(),
            price:getPrice(),
            company:getcompany(),
            rating:getRating()
        }
    )
}

const f=require("fs")
const data=JSON.stringify(obj,null,space=4)
try{
    f.writeFileSync("data.json",data)
}
catch(e)
{
    console.log(e)
}