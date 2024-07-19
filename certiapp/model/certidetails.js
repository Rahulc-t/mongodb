const {Schema}=require('mongoose')
const {model}=require('mongoose')

const sample=({
    certid:{type:Number,required:true,unique:true},
    course:{type:String,required:true},
    name:{type:String,required:true},
    grade:{type:String,required:true},
    date:{type:String,required:true}
})
const demo=model("details",sample)
module.exports=demo