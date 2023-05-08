import React from 'react'
import { Box, Typography, TextField, Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'

const Register = () => {
  const navigate = useNavigate()
  return (
    <>
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
          <TextField
            placeholder='name'
            name='name'
            margin='normal'
            type='text'
            required
           />
          <TextField
            placeholder='email'
            name='email'
            margin='normal'
            type='email'
            required
           />
          <TextField
            placeholder='password'
            name='password'
            margin='normal'
            type='password'
            required
           />
          
          <Button
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
    </>
  )
}

export default Register