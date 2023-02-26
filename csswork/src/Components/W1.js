import React, { useState } from 'react'
import { FormControl, InputLabel, MenuItem } from '@material-ui/core'
import Select from '@material-ui/core/Select'
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    root: {
        margin: "20px",
        minwidth: "120",
        width:"30%"
    }

}))


const W1 = () => {

    const classes = useStyles();

    const arr = ["aaa", "bbb", "ccc", "ddd", "eee", "fff", "hhh", "iii", "jjj", "kkk", "lll", "mmm"]


    const [select, setselect] = useState([])




    
     const handleChange = (e) => {

              setselect(e.target.value)

       
            
    }


    console.log(select)

    return (


        <div>



            <FormControl className={classes.root}>




                <InputLabel fullwidth id="demo-select-lable">select option</InputLabel>


                <Select

                    labelId='demo-lableid-select'
                    id='demo-select'
                    multiple
                    value={select}
                    onChange={handleChange}
                    renderValue={(selected)=>selected.join(',')}

                  >

                    <MenuItem id="demo-select-lable">select option</MenuItem>

                    {
                        arr.map((elm) => {

                            return <MenuItem style={{ width: "200px" }} value={elm}>{elm}</MenuItem>
                        })
                    }




                </Select>

            </FormControl>

        </div>
    )
}

export default W1