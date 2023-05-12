import React, {useState} from "react";
import { Box, AppBar, Toolbar, Button, Typography, Tabs, Tab } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import { authActions } from "../redux/Store";

const NavBar = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    // Global State
    const isLogin = useSelector(state => state.isLogin)
    // console.log(isLogin)

    // State
    const [value, setValue] = useState()

    // logout button
    const handleLogOut = () => {
        try {
            dispatch(authActions.logout())
            alert('Logout Successfully!')
            navigate('/login')
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <AppBar position='sticky' style={{ background: "#bf80ff" }}>
                <Toolbar>
                    <Typography variant='h4'>Blog App</Typography>
                    
                    {isLogin && (
                        <Box display={'flex'} marginLeft={'auto'} marginRight={'auto'} >
                        <Tabs textColor="inherit" value={value} onChange={(e, val) => setValue(val)} >
                            <Tab label="Blogs" LinkComponent={Link} to="/blogs" />
                            <Tab label="My Blogs" LinkComponent={Link} to="/my-blogs" />
                        </Tabs>
                    </Box>

                    )}

                    <Box display={"flex"} marginLeft={"auto"}>
                        {!isLogin && (<>
                            <Button
                            style={{
                                margin: 1,
                                color: "green",
                            }}
                            LinkComponent={Link}
                            to='/login'>
                            Login
                        </Button>
                        <Button
                            style={{
                                margin: 1,
                                color: "blue",
                            }}
                            LinkComponent={Link}
                            to='/register'>
                            Register
                        </Button>
                        </>)}
                        {isLogin && (
                            <Button
                            onClick={handleLogOut}
                            style={{
                                margin: 1,
                                color: "red",
                            }}
                            >
                            Logout
                        </Button>
                        )}
                    </Box>
                </Toolbar>
            </AppBar>
        </>
    );
};

export default NavBar;
