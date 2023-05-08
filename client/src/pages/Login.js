import React from "react";
import { Box, Typography, TextField, Button } from "@mui/material";
import { useNavigate } from 'react-router-dom'

const Login = () => {
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
          >Login</Typography>
         
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
          >Login</Button>
          <Button
            onClick={() => navigate('/register')}
            sx={{borderReduis: 3, marginTop:3}}
            color={'primary'}
          >Create New Account</Button>
        </Box>
    </>
    );
};

export default Login;
