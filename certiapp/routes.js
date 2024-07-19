const Router=require('express')
const router=Router()
const demo=require("./model/certidetails.js")
router.post("/issue",async(req,res)=>{
    const data=req.body
    const result=await demo.create(data)
    res.send(result);

})
router.get("/view/:id",async(req,res)=>{
    const id=req.params.id
    const result=await demo.findOne({certid:id})
    res.json(result)
})
module.exports=router