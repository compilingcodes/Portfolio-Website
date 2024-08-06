const mongoose=require('mongoose')

const PortfolioDataSchema=new mongoose.Schema({
  name:String
})

const PortfolioData=mongoose.model("portfoliodata",PortfolioDataSchema)

module.exports= PortfolioData;