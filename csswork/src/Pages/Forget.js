


import React, { useState } from 'react'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

import { makeStyles } from '@material-ui/core/styles';

import './Forget.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';



const useStyles = makeStyles((theme) => ({

    Forget: {


        backgroundColor: "lightblue",
        color: "white",
        width: "100vw",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },


    card: {
        width: "400px",
    },


    TextField: {
        padding: "10px",
        margin: "10px",
        width: "76%",
    },

    title: {


        color: 'black',
        fontWeight: "900",
        margin: "40px"

    }
    ,

    btn: {
        marginLeft: "30px"

    }


}))


const Forget = () => {


    const classes = useStyles();

    const navigate=useNavigate()


    const [email, setemail] = useState("")

    const [otp, setotp] = useState("")



    const [flag, setflag] = useState(false)




    const handleotpdata=()=>{

        if(email && otp){
            const data={email,otp}
            axios.post('http://localhost:7000/otpmatch', data)
            .then(res=>{
                  console.log(res.data)
                  if(res.data.err==0){
                     alert("otp matched set password")
                     navigate('/changepass')
                   
                  }else{

                    alert("err accured")

                  }
            })
        }

    }



    const handleemail = () => {

        const emailregex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;


        if(email && emailregex.test(email)){

        localStorage.setItem("email", JSON.stringify(email))

        axios.post('http://localhost:7000/sendmail', email)
            
             .then(res => {
                console.log(res.data)
                if (res.data.err = 1) {

                    setflag(true)
                   
                }
              

            })
        }
    }


    return (


        <div className={classes.Forget}>





            <Card className={classes.card}>

                <div className={classes.title}>


                    <Typography variant='h5'>Reset Password Form</Typography>


                </div>


                <CardContent>



                    <TextField fullWidth className={classes.TextField} id="filled-basic" label="Email" variant="filled" name="email" onChange={(e) => setemail(e.target.value)} />



                  {

                    !flag &&  

                       <Button className={classes.btn} variant="contained" color="primary" onClick={handleemail}>
                                    go
                                </Button>
                      } 

                    {

                        flag &&
                        (
                            <>


                            
                              <TextField fullWidth className={classes.TextField} id="filled-basic" label="OTP" variant="filled" name='otp'  onChange={(e)=>setotp(e.target.value)} />
                               
                                <Button className={classes.btn} variant="contained" color="primary" onClick={handleotpdata}>
                                    Submit
                                </Button>


                            </>
                        )






                    }




                </CardContent>


                <CardActions>




                </CardActions>



            </Card>










        </div>


    )
}

export default Forget