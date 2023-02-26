
import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';
import axios, { all } from 'axios';
import { Button } from '@material-ui/core';



const useStyles = makeStyles((theme) => ({


    root: {

        display: "flex",
        flexDirection: "column",
        margin: "20px",


    }




}))


const Mulform = () => {


    const classes = useStyles();


     
    const [Questiondata, setQuestiondata] = useState([])


    const [answer, setanswer] = useState({})


    const [show, setshow] = useState(false)


    const [helptext, sethelptext] = useState("")



     const [  selected  ,  setselected ]=useState({})




    //  const [selectedValues, setSelectedValues] = useState({});

    //  const handleCheckboxChange = (qid,option) => {
    //    const id =qid;
    //    const checkedValue = option
    //    setSelectedValues(prevSelectedValues => {
    //      const values = prevSelectedValues[id] || [];
    //      if (values.includes(checkedValue)) {
    //        return {
    //          ...prevSelectedValues,
    //          [id]: values.filter(value => value !== checkedValue),
    //        };
    //      } else {
    //        return {
    //          ...prevSelectedValues,
    //          [id]: [...values, checkedValue],
    //        };
    //      }
    //    });
    //  };

    //  console.log(selectedValues)


    //const [alldata, setalldata]=useState({})
   



    const handleChange = (qid, option) => {


          let newselectedoptions = {...selected};
          
           newselectedoptions[qid]=newselectedoptions[qid]||[]

         
       
            if(newselectedoptions[qid].includes(option)){

                  newselectedoptions[qid]=newselectedoptions[qid].filter((o)=>o!== option)
            
            }else{
                newselectedoptions[qid].push(option)
            }

         console.log(newselectedoptions )
          setselected(newselectedoptions)
            
        
         
    
    }

    console.log(selected)



    



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


                                <FormGroup >


                                    {

                                        data.options?.map((option, index) => {

                                            return (
                                                <>

                                                    <FormControlLabel  control={<Checkbox  value={option.id}  checked={selected[data.id] && selected[data.id].includes(option.id)} onChange={(e)=>handleChange(data.id, e.target.value)} />} label={option.values} />

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

export default Mulform
