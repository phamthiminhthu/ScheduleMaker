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
import ImageLogo from '../../assets/logo.png';
import './DrawerButton.scss'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import ScheduleIcon from '@mui/icons-material/Schedule';
import SpeakerNotesIcon from '@mui/icons-material/SpeakerNotes';
import HomeIcon from '@mui/icons-material/Home';
import LogoutIcon from '@mui/icons-material/Logout';
import SubjectIcon from '@mui/icons-material/Subject';
import { Link, useNavigate } from 'react-router-dom';
import { instance } from '../../App';


export default function SwipeableTemporaryDrawer() {

    const listMenu = [{ iconItem: <HomeIcon />, content: 'Home', linkRoute: '/student/home', state: true },
    { iconItem: <PersonOutlineIcon />, content: 'Tài khoản', linkRoute: '/student/account', state: true },
    { iconItem: <ScheduleIcon />, content: 'My Schedule', linkRoute: '/student/my-schedule', state: true },
    { iconItem: <SpeakerNotesIcon />, content: 'My notes', linkRoute: '/student/my-notes', state: true },
    { iconItem: <EventAvailableIcon />, content: 'Schedule Maker', linkRoute: '/student/schedule-maker', state: true },
    { iconItem: <SubjectIcon />, content: 'List Subject', linkRoute: '/student/list-subject', state: true },
    { iconItem: <LogoutIcon />, content: 'Logout', linkRoute: '/student/my-schedule', state: true },
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

    const history = useNavigate();

    const logoutSubmit = (e) => {
        e.preventDefault();
        instance.post(`/api/logout`).then(res => {
            if(res.status === 200){
                console.log(res);
                localStorage.removeItem('auth_token')
                localStorage.removeItem('auth_email')
                history('/')
            }
        })

      

    }

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
                        <FormatListBulletedIcon onClick={toggleDrawer(anchor, false)} className='btn-icon-menu'></FormatListBulletedIcon>
                    </Nav.Item>
                    <Nav.Item>
                        <img src={ImageLogo} className="image-menu-logo"></img>
                    </Nav.Item>

                </Nav>

            </div>
            <List>
                {listMenu.map((item, index) => (
                    <ListItem button key={item.content + item.index}>
                        <ListItemIcon>
                            {item.iconItem}
                        </ListItemIcon>
                        {
                            item.content === 'Logout' ? <button className='btn border-0' onClick={logoutSubmit}> <ListItemText primary={item.content} /></button>
                            : (<Link to={item.linkRoute} className="nav text-dark"> <ListItemText primary={item.content} /></Link>)
                        }
                        
                    </ListItem>
                ))}
            </List>
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