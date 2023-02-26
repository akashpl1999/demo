


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


const Change = () => {


    const classes = useStyles();

    const navigate=useNavigate()


   
    const [password,setpassword]=useState("")




     const handlesubmit=()=>{
         let email=JSON.parse(localStorage.getItem("email"))

           let data={email,password}

          axios.post('http://localhost:7000/changepass',  data )

          .then(res=>{

             console.log(res.data)

             if(res.data.err==0){

                alert("done")
                navigate('/login')

             }else{

                alert("some err" )

             }

          })

     }
    

    return (


        <div className={classes.Forget}>





            <Card className={classes.card}>

                <div className={classes.title}>


                    <Typography variant='h5'>Update password</Typography>


                </div>


                <CardContent>



                            
                     <TextField fullWidth className={classes.TextField} id="filled-basic" label="updated password" variant="filled" name='password'  onChange={(e)=>setpassword(e.target.value)} />
                               
                  
                                <Button className={classes.btn} variant="contained" color="primary" onClick={handlesubmit}>
                                    Submit
                                </Button>











                </CardContent>


                <CardActions>




                </CardActions>



            </Card>










        </div>


    )
}

export default Change