const express=require("express")
const User=require("./user.model")

const app=express.Router()

app.get("/",async(req,res)=>{
    try {
        let users= await User.find()
        if(users){

            res.send(JSON.stringify(users))
        }
        else{
            
            res.send("no users found")
        }
    } catch (error) {
        res.send(error.message)
    }
})

module.exports=app
