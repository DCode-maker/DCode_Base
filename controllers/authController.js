import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

const userData ={
    name:"Dharmender",
    email:"d@gmail.com"
}

export const loginController = async(req,res)=>{

    // const userData  = req.body;

    const token =  jwt.sign({userData} ,'qwertyuiopasdfghjklzxcvbnm0987654321',{
        expiresIn: "7d",
      });

    res.status(200).send({
        userData,
        token
    })
    console.log("token sent")

}