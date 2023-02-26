const express=require("express")
const sql =require("mssql")
const cors =require("cors")
const app=express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:false}))





const configure={

    user:"",
    password:"",
    server:"",  ///host in mysql
    database:""

}



app.get("/getdata", async(req,res)=>{


    try{


        let base=await sql.connect(configure);
        let result=await base.request().query('SELECT * FROM TABLENAME')
        res.send(result.recordset)

    }catch(err){

        console.log(err)

    }

})




app.post('/postdata', async(req,res)=>{


    try{


        let base=await sql.connect(configure);
        let result=await base.request()

            .input("name", sql.VarChar, req.bady.name )
            .input("email", sql.VarChar, req.bady.email )
            .input("age", sql.Int, req.bady.age )
             .query('INSERT INTO TABLENAME (name, email,age) VALUES (@name, @email,@age) ') 

             res.json({data:result.recordset, msg:'add to table'})

      }catch(err){

        console.log(err)

       }


})



app.post('/postdata', (req,res)=>{


    try{


         sql.connect(configure ,(err)=>{


            if(err){

                console.log(err)
                  return;


            }



            var result=new sql.Request();

               

            result.input('name', sql.VarChar, req.body.name)   
                    
            result.input('email', sql.VarChar, req.body.email) 


            result.query("INSERT INTO Tablename (name, email)  VALUES (@name , @email)", (err, result)=>{

                if(err){
                    console.log(err)
                    return;

                }


                res.send(result.recordset)










                app.post("/postdata", async(req,res)=>{
                  
                  
                  
                    try{
    
                        let base= await sql.connect(configure)

                           let result=await base.request()
    
                             result.input('name', sql.VarChar, req.body.name)

                             .query("INSET INTO TABLENAME (NAME) VALUES (@NAME)")
                             
                             res.send(result.recordset)
 

                    }catch(err){
                        

                               console.log(err)
                    }
                })
                    
                    
                    
                    
                    
                    
                    
                    
                app.post('/pastdata', (req,res)=>{


                    sql.connect(configure ,(err)=>{


                        let data=new sql.request()
                        data.input('name', sql.VarChar, req.body.name)
                        data.query("INSET INTO TABLENAME (NAME) VALUES (@NAME)",(err, result)=>{
                            res.send(result.recordset) 
                        })





                    })
                })
                    
                    
                    
                    
                    
                    
                    
                    
          
                function(arr){
                    for(let i=0; i<arr.length; i++){
                        for(let j=0; j<arr.length-1-i; j++){
                            if(arr[i]>arr[j+1]){
                                let temp=arr[i]
                                arr[i]=arr[j+1]
                                arr[j+1]=temp
                            }
                        }
                    }
                    return arr
                }
                    
                    

                for(let i=0; i< n-1; i++){

                    let mimindex=i

                    for(let j=i+1; i<n; j++){

                        if(arr[j]<arr[mimindex]){
                            mimindex=j
                        }


                        if(mimindex!==i){
                            let temp=arr[j]

                            arr[j]=arr[mimindex]

                            arr[mimindex]=temp


                        }

                        return temp
                  
                         
                    
                    
           
                        
                        function (arr, target){


                            let low=0;

                            let high=arr.length-1;

                            while(low<=high){

                                const mid =math.floor(low+high/2)

                                if(arr[mid]== target){

                                    return mid
                                }else if(arr[mid]<low){

                                    low=mid+1
                                }else{
                                     low=mid-1
                                }
                            }
                            return -1   no matched found
                        }

                    
                    


                        const Authontication =(req,res, next)=>{

                            const authheader = req.headers("Authorization")
                            
                            const token = authheader   &&   authheader.spilte("")[1] 


                             if(!token){
                                do
                             }


                             JsonWebTokenError.verifly(token, keys , (err, data)=>{

                             })

                             next()

                            if()

                        }


                    


                        const authheader =req.headers("authontication")
                        const token = authheader && authheader.spilt('')[1]


                        let password= bcrypt.hash(passwordtext, 10(saltrounds))
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    )


            })      


           

    }catch(err){

        console.log(err)


    }
})



