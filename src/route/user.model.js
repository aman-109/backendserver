const mongoose =require("mongoose")

const userDetailsSchema=new mongoose.Schema({
    height:{type:number},
    weight:{type:number},
    dob:{type:String}
})
const reportSchema=new mongoose.Schema({
    height:{type:number},
    weight:{type:number},
    dob:{type:String}
})

const userSchema=new mongoose.Schema({
    email:{type:String,require:true,unique:true},
    password:{type:String},
    userDetail:{type:Object},
    message:{type:Array},
    photos:{type:Array},
    

})

const User=mongoose.model("user",userSchema)

module.exports=User

