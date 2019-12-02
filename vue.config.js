
let listCart=require("./public/data.json")
module.exports={
  lintOnSave:false,
  devServer:{
  before(app){
    app.get("/data",(req,res)=>{
      res.json(listCart)
    })


    app.get("/details",(req,res)=>{
      let {id}=req.query;
      res.json({
        code:0,
        list:listCart.filter(val=>val.id==id)
      })
    })
  }
  }
}