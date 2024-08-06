const express=require("express")
const mongoose=require("mongoose")
const cors=require("cors")
const PortfolioData=require("./models/portfoliodata")
const app=express()
app.use(express.json())
app.useO(cors())

mongoose.connect("mongodb://127.0.0.1:27017/portfoliodata");

app.post('/submit', (req,res)=>{
PortfolioData.create(req.body)
.then(portfoliodata=>res.json(portfoliodata)
.catch(err=>res.json(err))

)
})


app.listen(3001,()=>{
  console.log("Server is Running")
})
