const {Schema}=require('mongoose');
const {model}=require('mongoose');

const demo=new Schema({
    rollno:{type:Number,required:true},
    name:{type:String,required:true},
    age:{type:Number,required:true},
    place:{type:String,required:true}


})

const sample=model('details',demo);
module.exports=sample;