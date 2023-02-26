// //  import React from 'react'
// //  import './Form.css'

// //  import TextField from '@material-ui/core/TextField';
// //  import LockOutlinedIcon from  '@material-ui/icons/LockOutlined';
// //  import Avatar from '@material-ui/core/Avatar';

// // import Button from '@material-ui/core/Button'


// // import { useFormik } from 'formik';
// // import * as yup from  'yup'



// // const schme= yup.object().shape({
// //     name:yup.string().required(),
// //     email:yup.string().email().required(),
// //     password:yup.string().matches(/^[a-zA-Z]{5,}$/, "not matced").required()

// // })

// //  const Form = () => {




// //       const formik=useFormik({

// //         initialValues:{

// //             name: '',
// //             email: '',
// //             password: '',
// //         },
// //         validationSchema :schme,


// //         onSubmit:(values)=>{

// //             console.log(values)

// //         }
// //       })



// //     return (


// //          <div className='main-container'>

// //          <div className='main'>

// //              <Avatar className="avatar" style={{backgroundColor:"red"}}>

// //                 <LockOutlinedIcon style={{backgroundColor:"red"}}/>

// //              </Avatar>


// //         <TextField  className='sub' variant='outlined'  name="name" lable="name" placeholder='name' value={formik.values.name} onChange={formik.handleChange} helperText={formik.errors.name} />

// //         <TextField className='sub' variant='outlined'  name="email" lable="email" placeholder='email'  value={formik.values.email} onChange={formik.handleChange} helperText={formik.errors.email} />

// //         <TextField className='sub' variant='outlined'  name="password" lable="password" placeholder='password' value={formik.values.password} onChange={formik.handleChange} helperText={formik.errors.password}/>


// //         <Button onClick={formik.handleSubmit} className='btn' color="pink" variant="outlined" style={{backgroundColor:"blue", color:"white"}}> submit </Button>

// //       </div>

// //       <div style={{  margin: "10px"}}>

// //         <img src="https://media.istockphoto.com/id/1448628255/photo/presentation-business-people-and-meeting-with-woman-speaker-screen-with-ppt-of-revenue-stats.jpg?s=1024x1024&w=is&k=20&c=j303PsXKGUwHnyTYAMCFVx32tvex-L-tWVt9HqMe-zk=" style={{width:"100%"}}/>
// //       </div>


// //       </div>



// //    )
// //  }

// //  export default Form





// import React from 'react'
// import './Form.css'

// import TextField from '@material-ui/core/TextField';
// import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
// import Avatar from '@material-ui/core/Avatar';

// import Button from '@material-ui/core/Button'

// // import { useFormik } from 'formik';
// // import * as yup from  'yup'

// import { withFormik, Form, Field } from 'formik';
// import * as  yup from 'yup'




// const initialValues = {
//     name: "",
//     email: "",
//     password: "",
// };



// const schme = yup.object().shape({
//     name: yup.string().required(),
//     email: yup.string().email().required(),
//     password: yup.string().matches(/^[a-zA-Z]{5,}$/, "not matced").required()

// })



// const Form1 = ({ errors, handleChange, handleSubmit, values, touched ,handleBlur}) => {













//     return (


//         <div className='main-container'>

//             <div className='main'>

//                 <Avatar className="avatar" style={{ backgroundColor: "red" }}>

//                     <LockOutlinedIcon style={{ backgroundColor: "red" }} />

//                 </Avatar>

//                 <Form>
//                     <TextField className='sub' variant='outlined' name="name" lable="name" placeholder='name' value={values.name} onChange={handleChange} 
                       
//                         helperText={touched.name && errors.name}
//                         error={touched.name && Boolean(errors.name)}


//                     />

//                     <TextField className='sub' variant='outlined' name="email" lable="email" placeholder='email' value={values.email} onChange={handleChange}  
//                         helperText={touched.email && errors.email}
//                         error={touched.email && Boolean(errors.email)}

//                     />

//                     <TextField className='sub' variant='outlined' name="password" lable="password" placeholder='password' value={values.password} onChange={handleChange}  
//                         helperText={touched.paswword && errors.paswword}
//                         error={touched.password && Boolean(errors.password)}

//                     />


//                     <Button onClick={handleSubmit} className='btn' color="pink" variant="outlined" style={{ backgroundColor: "blue", color: "white" }}> submit </Button>



//                 </Form>

//             </div>

//             <div style={{ margin: "10px" }}>

//                 <img src="https://media.istockphoto.com/id/1448628255/photo/presentation-business-people-and-meeting-with-woman-speaker-screen-with-ppt-of-revenue-stats.jpg?s=1024x1024&w=is&k=20&c=j303PsXKGUwHnyTYAMCFVx32tvex-L-tWVt9HqMe-zk=" style={{ width: "100%" }} />
//             </div>


//         </div>



//     )
// }

// export default withFormik({

//     mapPropsToValues: () => initialValues,

//     schme,

//     handleSubmit: (values, { setSubmiting }) => {


//         console.log(values)

//         setSubmiting(false)
//     }




// })(Form1)


