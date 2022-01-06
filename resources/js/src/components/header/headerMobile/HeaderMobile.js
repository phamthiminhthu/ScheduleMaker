import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import DrawerButtonMobile from './DrawerMobile';
import ImageLogo from '../../../assets/logo.png';

export default function HeaderMobile() {

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" style={{ 'backgroundColor': '#554bb9' }}>
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        <img src={ImageLogo}></img>
                    </Typography>
                    <DrawerButtonMobile />
                    <Button color="inherit">Sign In</Button>
                    <Button color="inherit">Sign Up</Button>
                </Toolbar>
            </AppBar>
        </Box>
    );


}
