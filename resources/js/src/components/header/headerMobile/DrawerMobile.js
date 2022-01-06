import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import { Nav } from 'react-bootstrap';
import ImageLogo from '../../../assets/logo.png';
import './../../headerHasAuthor/DrawerButton.scss'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import ScheduleIcon from '@mui/icons-material/Schedule';
import SpeakerNotesIcon from '@mui/icons-material/SpeakerNotes';
import HomeIcon from '@mui/icons-material/Home';
import LogoutIcon from '@mui/icons-material/Logout';
import SubjectIcon from '@mui/icons-material/Subject';
import ClassIcon from '@mui/icons-material/Class';
import {Link} from 'react-router-dom';

export default function DrawerButtonMobile() {

    const listMenu = [{ iconItem: <HomeIcon/>, content: 'Home', state: true, urlR : '/home' },
    { iconItem: <PersonOutlineIcon/>, content: 'Schedule', state: true, urlR : '/schedule' },
    { iconItem: <SpeakerNotesIcon/>, content: 'News', state: true, urlR :'/news' },
    { iconItem: <EventAvailableIcon/>, content: 'Speaker', state: true, urlR:'/speaker-page' },
    { iconItem: <SubjectIcon/>, content: 'Contact', state: true, urlR:'/contact' },
    { iconItem: <ClassIcon/>, content: 'Sign In', state: false, urlR:'/login' },
    { iconItem: <LogoutIcon/>, content: 'Sign Up', state: true, urlR:'/register' },
    ];

    const [state, setState] = React.useState({

        left: false
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (
            event &&
            event.type === 'keydown' &&
            (event.key === 'Tab' || event.key === 'Shift')
        ) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <Box
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}

        >
            <div className="header-avatar">
                <Nav className="header-menu-toggle">
                    <Nav.Item>
                        <FormatListBulletedIcon onclick={toggleDrawer(anchor, false)} className='btn-icon-menu'></FormatListBulletedIcon>
                    </Nav.Item>
                    <Nav.Item>
                        <img src={ImageLogo} className="image-menu-logo"></img>
                    </Nav.Item>

                </Nav>

            </div>
            <List>
                {listMenu.map((item, index) => (
                    <ListItem button key={item.content}>
                        <ListItemIcon>
                            {item.iconItem}
                        </ListItemIcon>
                        <Link to={item.urlR} className="nav text-dark"> <ListItemText primary={item.content} /></Link>
                    </ListItem>
                ))}
            </List>
            {/* <Divider /> */}
        </Box>
    );

    return (
        <div>
            {['right'].map((anchor) => (
                <React.Fragment key={anchor}>
                    <Button onClick={toggleDrawer(anchor, true)} className="text-white"><FormatListBulletedIcon></FormatListBulletedIcon></Button>
                    <SwipeableDrawer
                        anchor={anchor}
                        open={state[anchor]}
                        onClose={toggleDrawer(anchor, false)}
                        onOpen={toggleDrawer(anchor, true)}
                    >
                        {list(anchor)}
                    </SwipeableDrawer>
                </React.Fragment>
            ))}
        </div>
    );
}