const mongoose=require('mongoose')


const templateSchema= new mongoose.Schema({
name:{
    type:String,
    required:true
},
color:{
    type:String,
    default:null
},
font:{
    type:String,
    default:null
},
layout:{
    type:String,
    default:null
}
})

module.exports=templateSchema