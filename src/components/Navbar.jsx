import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';



const Navbar = () => {



    return (
        <>
            <Box sx={{ flexGrow: 1, marginBottom: "30px" }}>
                <AppBar position="static">
                    <Toolbar>
                        <Button color='inherit'>Home</Button>
                        <Button color="inherit">Add</Button>
                    </Toolbar>
                </AppBar>
            </Box>
        </>
    )
}

export default Navbar