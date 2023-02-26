
//  import { Button } from '@material-ui/core';
// import { TurnedIn } from '@material-ui/icons';
// import axios from 'axios';
//  import React, { useState } from 'react'
// import { useEffect } from 'react';

//  const Form = () => {


//      const [data,setdata]=useState([])

//      const [flag,setflag]=useState(false)

//     //  useEffect(()=>{


//     //  },[])



//      const handledata=()=>{

//            setflag(false)
//           axios.get('https://jsonplaceholder.typicode.com/posts')
//            .then(response => {

//                if(response){
//                 setflag(true)   
//                 console.log(response.data)
//                 setdata(response.data)

//                }else{
//                 setflag(true)   

//                }


//           })




//      }



//     return (

//                    <div>

//                    <Button variant='outlined' color="secondary" onClick={handledata}    disabled={flag} >GET DATA</Button>

//                {

//                  data.map((elm)=>{
//                     return (
//                         <div key={elm.id}>

//                          {elm.id}


//                         </div>
//                     )

//                  })

//                }


//          </div>


//    )
//  }

//  export default Form;





import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';
import axios from 'axios';
import { Button } from '@material-ui/core';



const useStyles = makeStyles((theme) => ({


    root: {

        display: "flex",
        flexDirection: "column",
        margin: "20px",


    }




}))


const Form = () => {


    const classes = useStyles();

    const [answer, setanswer] = useState({})


    const [show, setshow] = useState(false)


    const [helptext, sethelptext] = useState("")


    const handleChange = (qid, option) => {
        setanswer({ ...answer, [qid]: option })
    };

    console.log(answer)



    //   const { gilad, jason, antoine } = state;


    const [Questiondata, setQuestiondata] = useState([])



    const handlesubmit = (qid) => {

        setshow(qid)

        const correctAnswers = Questiondata.find((data) => data.id == qid).answer

        if (correctAnswers == answer[qid]) {

            sethelptext("correct")

        } else {

            sethelptext("incorrect ")

        }


    }





    useEffect(() => {

        axios.get('http://localhost:4000/data')
            .then(res => {
                console.log(res.data)
                setQuestiondata(res.data)
            })
    }, [])



    return (



        <div className={classes.root}>


            {

                Questiondata.map((data) => {

                    return (

                        <>

                            <FormControl component="fieldset" className={classes.formControl}>


                                <FormLabel component="legend">{data.question}</FormLabel>


                                <FormGroup value={answer[data.id]} onChange={(e) => handleChange(data.id, e.target.value)}>


                                    {

                                        data.options?.map((option, index) => {

                                            return (
                                                <>

                                                    <FormControlLabel value={option.id} control={<Checkbox checked={answer[data.id] === option.id} />} label={option.values} />

                                                </>


                                            )
                                        })}


                                {
                                show==data.id &&   <FormHelperText>{helptext}</FormHelperText>

                                 }
                                 

                                    <Button variant='outlined' style={{ backgroundColor: "blue", color: "white", width: "200px" }} onClick={() => handlesubmit(data.id)} >submit</Button>


                                </FormGroup>







                            </FormControl>

                        </>

                    )
                })}


        </div>
    )
}

export default Form
