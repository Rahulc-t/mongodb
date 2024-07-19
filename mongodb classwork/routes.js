const Router=require('express')
const sample=require('./models/userdetails.js')
var router=Router();
router.post('/create',async(req,res)=>{
try{
    const data=req.body;
    const result=await sample.create(data);
    res.status(201).json(result)
}catch(error){
    console.log(error);
    res.status(500).json()
}
})

router.get('/read/:id',async(req,res)=>{
    const id=req.params.id
    console.log(id)
    const details=await sample.findOne({rollno:id})
    //const details=await sample.find({})
    console.log('details',details)
    res.json(details)
})

router.put('/edit/:id',async(req,res)=>{
    try{
    const id=req.params.id
    const data=req.body
    const details=await sample.updateOne({rollno:id},{$set:data})
    res.json(details)
    }catch(error){
        console.log(error)
    }
})
router.delete('/remove/:id',async(req,res)=>{
    const id= req.params.id
    await sample.deleteOne({rollno:id})
    res.json(`ID:${id}, deleted`)
})
module.exports=router