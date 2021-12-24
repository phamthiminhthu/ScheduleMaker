import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import './MyListAssignmentsDemo.scss';

export default function MyListAssignmentsDemo() {
    return (
        <List sx={{ width: '100%', bgcolor: 'background.paper' } } className="list-schedule-subject">
            <ListItem alignItems="flex-start" className="list-schedule-items">
                <ListItemAvatar>
                    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                </ListItemAvatar>
                <ListItemText
                    secondary={
                        <React.Fragment>
                            <Typography
                                sx={{ display: 'inline' }}
                                component="span"
                                variant="body2"
                                color="text.primary"
                            >
                                <div className="subject">
                                    <div className="time-learn">
                                        <span>
                                            09:00 <span className="morning-evening">AM </span>
                                            - 10:30 <span className="morning-evening">AM</span>
                                        </span>
                                    </div>
                                    <h3 className="name-subject">
                                        Hệ thống máy tính
                                    </h3>
                                    <div className="date-learn">
                                        <p>Tuesday, November 30, 2021</p>
                                    </div>
                                </div>
                            </Typography>
                            
                        </React.Fragment>
                    }
                />
            </ListItem>
            <Divider variant="inset" component="li" />
           
            <ListItem alignItems="flex-start" className="list-schedule-items">
                <ListItemAvatar>
                    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                </ListItemAvatar>
                <ListItemText
                    secondary={
                        <React.Fragment>
                            <Typography
                                sx={{ display: 'inline' }}
                                component="span"
                                variant="body2"
                                color="text.primary"
                            >
                                <div className="subject">
                                    <div className="time-learn">
                                        <span>
                                            09:00 <span className="morning-evening">AM </span>
                                            - 10:30 <span className="morning-evening">AM</span>
                                        </span>
                                    </div>
                                    <h3 className="name-subject">
                                        Hệ thống máy tính
                                    </h3>
                                    <div className="date-learn">
                                        <p>Tuesday, November 30, 2021</p>
                                    </div>
                                </div>
                            </Typography>
                           
                        </React.Fragment>
                    }
                />
            </ListItem>
           
        </List>
    );
}