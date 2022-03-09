// const mongoose=require("mongoose")
const loginScheema=require("../model/login");
const bcrypt=require("bcryptjs");

module.exports={
    createLogindata:async(req,res)=>{
        try{
            console.log(req.body)

            const salt=await bcrypt.genSalt(10);
         const Hashpasword= await bcrypt.hash( req.body.Password,salt) ;
            let data=new loginScheema({
                Email:req.body.Email,
                Password:Hashpasword,

            })
            res.send({
                status: 200,
                sucess: true,
                msg: "login sucses",
            })            // console.log(data)

            await data.save()
        }
        catch(err){
            res.send({
                status: 400,
                sucess: true,
                msg: "server err",
            })            // console.log(data)

            console.log("Err==>",err)

        }
    }
}
