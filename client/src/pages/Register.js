import React, {useState} from 'react'
import { Box, Typography, TextField, Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Register = () => {
  //Navigate to login
  const navigate = useNavigate()

  // State
  const [inputs, setInputs] = useState({
    name:"",
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
    // Register logic here
    try {
      const data = await axios.post(`/api/v1/user/register`, {
        username:inputs.name,
        email:inputs.email,
        password:inputs.password,
      })
      if(data.success){
        alert('User Registerd Successfully!')
        navigate('/login')
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
          >Register</Typography>

          {/* start the inputs text fields */}

          <TextField
            placeholder='name'
            value={inputs.name}
            onChange={handleChange}
            name= "name"
            margin='normal'
            type='text'
            required
           />
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
          >Sign Up</Button>
          <Button
            onClick={() => navigate('/login')}
            sx={{borderReduis: 3, marginTop:3}}
            color={'primary'}
          >Already have an account? Please Login</Button>
        </Box>
      </form>
  )
}

export default Register