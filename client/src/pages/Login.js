import React, {useState} from 'react'
import { Box, Typography, TextField, Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import toast from "react-hot-toast";
import axios from 'axios'

const Login = () => {
  //Navigate to login
  const navigate = useNavigate()

  // State
  const [inputs, setInputs] = useState({
    email:"",
    password:""
  })

  // handleChange input change
  const handleChange = (e) => {
    setInputs(prevState => ({
      ...prevState,
      [e.target.name] : e.target.value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(inputs)
    // Login logic here
    try {
      const data = await axios.post(`/api/v1/user/login`, {
        email:inputs.email,
        password:inputs.password,
      })
      if(data.success){
        toast.success("User Register Successfully");
        navigate('/')
      }


    } catch (error) {
      console.log(error)
    }
    
  }

  return (
    <form onSubmit={handleSubmit} > 
      <Box
        maxWidth={450}
        display={'flex'}
        flexDirection={'column'}
        alignItems={'center'}
        justifyContent={'center'}
        margin={'auto'}
        marginTop={5}
        boxShadow={'10px 10px 20px #ccc'}
        padding={3}
        borderRadius={5}

        >
          <Typography
            variant={'h4'}
            padding= {2}
            textAlign={'center'}
            textTransform={'uppercase'}
          >login</Typography>

          {/* start the inputs text fields */}

          <TextField
            placeholder='email'
            value={inputs.email}
            onChange={handleChange}
            name= "email"
            margin='normal'
            type='email'
            required
           />
          <TextField
            placeholder='password'
            value={inputs.password}
            onChange={handleChange}
            name= "password"
            margin='normal'
            type='password'
            required
           />
          
          <Button
            type="submit"
            sx={{borderReduis: 3, marginTop:3}}
            variant='contained'
            color={'primary'}
          >LogIn</Button>
          <Button
            onClick={() => navigate('/register')}
            sx={{borderReduis: 3, marginTop:3}}
            color={'primary'}
          >You Don't have an account? Please Register</Button>
        </Box>
      </form>
  )
}

export default Login


// Start with 2:34