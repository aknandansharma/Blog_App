import React from 'react'
import { Box, AppBar, Toolbar, Button, Typography } from '@mui/material'

const NavBar = () => {
  return (
    <>
        <AppBar position='sticky' style={{background:'#bf80ff'}} >
            <Toolbar >
                <Typography variant='h4'>
                    Blog App
                </Typography>
                <Box display={'flex'} marginLeft={'auto'}>
                    <Button style={{margin:1, color:'green'}} >Login</Button>
                    <Button style={{margin:1, color:'blue'}} >Register</Button>
                    <Button style={{margin:1, color:'red'}} >Logout</Button>
                </Box>
            </Toolbar>
        </AppBar>    
    </>
  )
}

export default NavBar