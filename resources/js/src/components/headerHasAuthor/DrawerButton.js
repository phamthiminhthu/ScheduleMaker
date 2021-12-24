import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import { Nav } from 'react-bootstrap';
import ImageLogo from '../../assets/logo.png';
import './DrawerButton.scss'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import ScheduleIcon from '@mui/icons-material/Schedule';
import SpeakerNotesIcon from '@mui/icons-material/SpeakerNotes';
import HomeIcon from '@mui/icons-material/Home';
import LogoutIcon from '@mui/icons-material/Logout';
import SubjectIcon from '@mui/icons-material/Subject';
import ClassIcon from '@mui/icons-material/Class';

export default function SwipeableTemporaryDrawer() {

    const listMenu = [{ iconItem: <HomeIcon/>, content: 'Home', state: true },
    { iconItem: <PersonOutlineIcon/>, content: 'Tài khoản', state: true },
    { iconItem: <ScheduleIcon/>, content: 'My Schedule', state: true },
    { iconItem: <SpeakerNotesIcon/>, content: 'My notes', state: true },
    { iconItem: <EventAvailableIcon/>, content: 'Schedule Maker', state: true },
    { iconItem: <SubjectIcon/>, content: 'List Subject', state: true },
    { iconItem: <ClassIcon/>, content: 'Create Subject', state: false },
    { iconItem: <LogoutIcon/>, content: 'Logout', state: true },
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
                    <ListItem button key={item}>
                        <ListItemIcon>
                            {item.iconItem}
                        </ListItemIcon>
                        <ListItemText primary={item.content} />
                    </ListItem>
                ))}
            </List>
            {/* <Divider /> */}
        </Box>
    );

    return (
        <div>
            {['left'].map((anchor) => (
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