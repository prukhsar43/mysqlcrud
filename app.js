
const express=require("express")

const port=process.env.PORT||5001

const app=express()

app.use(express.json())


const User=require("./models/User")


  app.get("/",async(req,res)=>{

    const data=await User.findAll()
    try{

        res.json({
            message:"success",
            data:data
    
        })
    }catch(error){

        res.json({
            message:error
            
    
        })

    }
  
  })


  app.put("/:id",async(req,res)=>{

    const id=req.params.id

    const firstName=req.body.firstName
    const lastName=req.body.lastName

    await User.update({ firstName:firstName,lastName:lastName}, {
        where: {
          id:id
        }
      });
     
    try{

        res.json({
            message:"success",
            
    
        })
    }catch(error){

        res.json({
            message:error
            
    
        })

    }
  
  })

  app.delete("/:id",async(req,res)=>{

    const id=req.params.id

    

    await User.destroy({
        where: {
          id:id
        }
      });
     
    try{

        res.json({
            message:"success",
            
    
        })
    }catch(error){

        res.json({
            message:error
            
    
        })

    }
  
  })



  app.post("/",async(req,res)=>{

    const firstName=req.body.firstName
    const lastName=req.body.lastName

    try{

        if(User){

            const jane = await User.create({ firstName:firstName, lastName: lastName });
            console.log("Jane's auto-generated ID:", jane.id);
          
              res.json({
                message:"success",
                id:jane.id
              })


        }

        else{
            res.send("Problem in connecting db")

        }

       

    }catch(error){

         console.log(error)
    }

   

  })

  

app.listen(port,async()=>{

   

    console.log("server is running at"+port)
})