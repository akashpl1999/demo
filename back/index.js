//  const express = require('express');
//  //const bodyParser =require("bodyParser");
//  //const cookieParser = require('cookieParser')
//  //const cors = require('cors')
//  const mongoose=require("mongoose")

//  const app=express()
//  const Port=7000


// //  app.use(bodyParser.json())
// //  app.use(bodyParser.urlencoded({extended: true}));


// // const connected= () =>{

// //    try{
// //       mongoose.connect( 'http://mongose',{useNewurlParser:true, useUnifiedTopology:true})
// //    }catch{

// //     console.log('error')
// //    }

// // }
// // connected()
// mongoose.connect('mongodb://localhost/myapp', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });



//   app.post('/login', (req, res) => {
//   const { username, password } = req.body;
//   const user = users.find((u) => u.username === username && u.password === password);

//   if (!user) {
//     return res.status(401).json({ message: 'Invalid credentials' });
//   }

//   const token = jwt.sign({ id: user.id, role: user.role }, SECRET);

//   return res.json({ token });
// });

// // Middleware function to verify the token
// function verifyToken(req, res, next) {
//   const token = req.headers['x-access-token'];

//   if (!token) {
//     return res.status(401).json({ message: 'No token provided' });
//   }

//   jwt.verify(token, SECRET, (err, decoded) => {
//     if (err) {
//       return res.status(401).json({ message: 'Invalid token' });
//     }

//     req.user = decoded;
//     next();
//   });
// }

// // Route that requires authentication
// app.get('/secure', verifyToken, (req, res) => {
//   const user = users.find((u) => u.id === req.user.id);

//   return res.json({ message: `Hello, ${user.username}` });
// });



// app.get("/user" ,(res,req)=>{
//     res.send("user")



// })


// app.listen(Port,(req,res)=>{
//      console.log(`console.log${Port}`)
// })



const express = require('express');
const cors = require("cors")
const mongoose = require("mongoose")
const app = express()
const Port = 7000;
const db = 'mongodb://localhost:27017/Interview'
const jwt = require('jsonwebtoken')

const jwtsecretkey = "anmika123"


const jwtrefresskey="abacdef123"


const regmodel = require('./Model/regmodel')


const saltRounds = 10;

const bcrypt = require('bcryptjs')
const { check, validationResult } = require('express-validator');
const speakeasy = require('speakeasy');
const fast2sms = require('fast-two-sms');
const apiKey = 'iTLnjbCyA2D5W7rqBfu9ctPX1kzmH8eoSdIx4EKsFwQRhYgN3ZJA3jHuxiqrPQkSX8apNLWV7mw5gfYD'; 
const Otpmodel =require("./Model/Otp")
var nodemailer = require('nodemailer');

const mailer=require("./Midd/Emailer")



app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }));





const connectDB = async () => {

    try {

        await mongoose.connect(db, { useNewUrlParser: true });

        console.log('connected')

    } catch {

        console.log("error accured")
    }

}
connectDB()




//  export const authMiddleware = async (req, res, next) => {
//     const token = req.header('Authorization').replace('Bearer ', '');
    
//     try {
//       const decoded = jwt.verify(token, process.env.JWT_SECRET);
      
//       const user = await User.findOne({ _id: decoded._id, 'tokens.token': token });
      
//       if (!user) {
//         throw new Error();
//       }
      
//       req.user = user;
//       req.token = token;
//       next();
//     } catch (error) {
//       res.status(401).send({ error: 'Please authenticate.' });
//     }
//   };



  const autenticateToken=async(req, res, next) =>{

     

    const authHeader = await req.headers['authorization']

      const token = authHeader && authHeader.split(' ')[1]
      
         console.log(token+"/////////")

    
    
    
         if (token== null) {

            console.log( "Token not match" );

            return res.status(401).json({ error: 'Access token missing' });

          
         }

        else {

       
        jwt.verify(token, jwtsecretkey, (err, data) => {

            if (err) {

                console.log( "Token incorrect" )
                return res.status(401).json({ error: 'Access token incorrect' });
   
            }

              else {

                console.log("Match")
                  
                next();
            }
        })     
    }
}
  




app.get('/home', autenticateToken ,(req,res)=>{

    
    res.json({err:0, msg:"token matched"})
    console.log("matched token")
})


app.post('/register', [

    check('fname').isLength({ min: 5 }),
    check('lname').isLength({ min: 5 }),  
    check('email').isEmail(),
    check('password').isLength({ min: 8 })

], (req, res) => {

    const error=validationResult(req);

    if(!error.isEmpty){


        return res.status(400).json(error);


    }else{


    let data = new regmodel ({

        fname: req.body.fname,
        lname: req.body.lname,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, saltRounds)

    });


    data.save((err, data) => {

        if (err) { res.json({ err: 1, msg: 'err' }) }

        else {

            res.json({ err: 0, msg: 'done', data })
        }
    
    })
  } 

})



app.post('/email' ,mailer)

app.post('/api/refresh', (req, res) => {



    const { refreshToken } = req.body;
  


    jwt.verify(refreshToken, 'jwtrefresskey', (err, payload) => {

      if (err) {
        res.status(403).send('Invalid refresh token');
        return;
      }
      const accessToken = jwt.sign(payload, 'jwtsecretkey', { expiresIn: '15m' });
  
      res.send({ accessToken });
    });
  });



app.post('/login', (req, res) => {

    console.log(req.body)

    regmodel.findOne({ email: req.body.email }, (err, data) => {
        if (err) {
            res.status(500).send({ err: 1, msg: "err1" })


        } else if (data == null) {
            
            res.status(500).send({ err: 1, msg: "err2" })

        } else if ((bcrypt.compareSync(req.body.password, data.password))) {

            let token = jwt.sign(req.body, jwtsecretkey, { expiresIn: '20m' })

            let reftoken = jwt.sign(req.body, jwtrefresskey, { expiresIn: '7d' })
            
            res.status(200).send({ msg: 'done', data, token ,reftoken})


         } else if ((!bcrypt.compareSync(req.body.password, data.password))) {

            console.log(data)
            res.status(500).send({ err: 1, msg: "err3" })

        }


    })
})


   

     //app.post("/otpsend" ,(req,res)=>{

        // console.log(req.body)

        // const phoneNumber = req.body;

        // const secret = speakeasy.generateSecret({ length: 20 });
       
        // const otp = speakeasy.totp({
        //   secret: secret.base32,
        //   encoding: 'base32'
        // });

        // const expirationTime = new Date().getTime() + 600000; // 10 minutes from now
        

        // const message = `Your OTP is`;

        //  fast2sms.sendMessage({authorization:apiKey, message, numbers:8310524078  })
       
        //  .then(response =>{
        //        res.json(response)
        //     })
        // .catch(error =>{

        

        //     res.json(error)
             
        //     });
      
        
          
        //  const newotp= new Otpmodel({

        //     phoneNumber,
        //     secret:secret.base32,
        //     otp,
        //      expirationTime

        //  })

        //  newotp.save((err,data)=>{


        //     console.log(err)

        //     if (err) { res.json({ err: 1, msg: 'err' }) }


        //     else {
    
        //         res.json({ err: 0, msg: 'done', data })


        //        }
        //         })


    // })


     app.post("/otpmatch1", (req,res)=>{
      
          console.log(req.body)

          const enteredOtp = req.body.otp;

        
          Otpmodel.findOne({phone:req.body.phone},(err,data)=>{
 


             if(err) {

                 res.json({err:1, msg:'err accured'});
             }


            if(data){
      
            const isValid = speakeasy.totp.verify({
                
                secret: data.secret,
                encoding: 'base32',
                token: enteredOtp,
                window: 1
              });

              if(isValid){
                res.json({err:0, msg :"otp matched"})
                
              }else{
                res.json({err:1, msg:"err accured"})
              }

              

            }

         })
         

     })


 


     app.post('/sendmail', async(req,res)=>{

          console.log(req.body)

         const otp = Math.floor(Math.random()*10000)

            try{

               const data = await regmodel.updateOne({email:req.body.email},{$set:{otp:otp}})

                if(data){
                    const transporter = nodemailer.createTransport({

                        host: 'smtp.ethereal.email',
                        port: 587,
                        auth: {
                            user: 'rahul.schmeler44@ethereal.email',
                            pass: 'rcj4A7MCa4gHepRnXp'
                        }
                    });
                     let info =  await transporter.sendMail({

                      from: '<rahul.schmeler44@ethereal.email>',
                      to: req.body.email,                     
                      subject: `Hello ✔ ${otp}`,
                      text: "Hello world?", 
                      html: "<b>Hello world?</b>", 

                         });
                         
                         
                         res.json({msg:"ok", info, err:0})
                        
                  }  
                        } catch(err){
                          console.log("update error",err);
                          res.json({msg:"not ok",  err:1})
                       

                         }

        
                  
            })
                     
             
        
            app.post('/changepass', (req,res)=>{



                   console.log(req.body)


                   regmodel.updateOne({email:req.body.email } ,{$set:{password:bcrypt.hashSync(req.body.password, saltRounds)}},(err,data)=>{

                         if (err) throw  err;


                         if(data){
                            res.json({msg:"ok", err:0, data})
                         }


            })
        })


            app.post('/otpmatch', (req,res)=>{

                console.log(req.body)

                 regmodel.findOne({email:req.body.email},(err,data)=>{

                  if(err){

                    console.log("find error",err);

                    res.json({err:1, msg:"err accured"})

                 }

                  
                 else if(data){

                    if(data.otp == req.body.otp){

                        res.json({err:0 , msg:"done"  })



                    }else{

                        
                        res.json({err:1 , msg:"err accured "  })

                    }
                 }
                })



            })

        
    

    


app.get('/getuser', (req, res) => {

    regmodel.find({}, (err, data) => {
        if (err) {
            res.send('err')
        } else {
            res.send(data);
        }

    })
})


app.post('/updatedata', (req, res) => {
    console.log(req.body)


    regmodel.updateOne({ id: req.body.id }, { $set: { name: req.body.name } }, (err, data) => {
        if (err) {
            res.send("err")

        } else {
            res.send(data)
        }
    })


})


app.listen(Port, (err) => {
    if (err) throw err;
    console.log(`port is runing on ${Port}`)

});



// db.posts.insertMany([

//     {
//         "_id": 1,
//         "name": "John Doe",
//         "age": 35,
//         "gender": "Male",
//         "city": "New York",
//         "state": "NY"
//     },
//     {
//         "_id": 2,
//         "name": "Jane Doe",
//         "age": 30,
//         "gender": "Female",
//         "city": "Los Angeles",
//         "state": "CA"
//     },
//     {
//         "_id": 3,
//         "name": "Jim Smith",
//         "age": 40,
//         "gender": "Male",
//         "city": "New York",
//         "state": "NY"
//     },
//     {
//         "_id": 4,
//         "name": "Sarah Johnson",
//         "age": 25,
//         "gender": "Female",
//         "city": "Los Angeles",
//         "state": "CA"
//     },
//     {
//         "_id": 5,
//         "name": "Mike Brown",
//         "age": 28,
//         "gender": "Male",
//         "city": "New York",
//         "state": "NY"
//     }
    

// ])