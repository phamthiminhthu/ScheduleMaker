import * as React from 'react';
import { Box, Tab } from '@mui/material';
import { Container, Row, Col } from 'react-bootstrap';
import { TabContext, TabList, TabPanel } from '@material-ui/lab';
import './MyAssignmentsDemo.scss';
import axios from 'axios';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import moment from 'moment';
import MyListAssignmentsDemo from '../myListAssignmentsDemo/MyListAssignmentsDemo';

function MyAssignmentsDemo() {
    const [value, setValue] = React.useState('2');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const [schedule, setSchedule] = React.useState({
        '2': [],
        '3': [],
        '4': [],
        '5': [],
        '6': [],
        '7': [],
        '8': []
    });

    React.useEffect(() => {
        let load = true;
        if (load) {
            axios.get(`api/schedule/my-schedule-class-register`).then((res) => {
                let data = {
                    '2': [],
                    '3': [],
                    '4': [],
                    '5': [],
                    '6': [],
                    '7': [],
                    '8': []

                }

                Object.entries(res.data).map(([key, value]) => (
                    data[key] = value
                ))
                setSchedule(data);

            })
        }
        return (() => {
            load = false;
        })


    }, []);

    const covertime = (time) => {
        return moment(time, "hh:mm a").format("hh:mm a");
    }

    const eachTab = (schedule) => {

        return (
            <div>
                {
                    Object.entries(schedule).map(([item, index]) => {
                        return (
                            <TabPanel key={item + 'schedule'} value={item}>
                                <List sx={{ width: '100%', bgcolor: 'background.paper' }} className="list-schedule-subject" >
                                    {
                                        index.map((value) => {
                                            return (
                                                <>
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
                                                                                    {covertime(value.startime)}
                                                                                    - {covertime(value.endtime)}
                                                                                </span>
                                                                            </div>
                                                                            <h3 className="name-subject">
                                                                                {value.name_subject}
                                                                            </h3>
                                                                            <div className="date-learn">
                                                                                <p>{value.clazz_code} {value.name_clazz}</p>
                                                                            </div>
                                                                        </div>
                                                                    </Typography>

                                                                </React.Fragment>
                                                            }
                                                        />
                                                    </ListItem>
                                                    <Divider variant="inset" component="li" />
                                                </>
                                            )
                                        })
                                    }


                                </List>
                            </TabPanel>
                        )
                    })
                }
            </div>

        )

    }

    return (
        <div id="my-assignments-demo">
            <div className="list-assignments pt-5">
                <Container>
                    <Row>
                        <Col xs="12">
                            <Box sx={{ width: '100%', typography: 'body1' }}>
                                <TabContext value={value}>
                                    <Box sx={{ borderBottom: 1, borderColor: '#fff' }}>
                                        <TabList onChange={handleChange} aria-label="lab API tabs example" className="day-in-week">
                                            <Tab label="Monday" value="2" />
                                            <Tab label="Tuesday" value="3" />
                                            <Tab label="Wednesday" value="4" />
                                            <Tab label="Thirsday" value="5" />
                                            <Tab label="Friday" value="6" />
                                            <Tab label="Saturday" value="7" />
                                            <Tab label="Sunday" value="8" />
                                        </TabList>
                                    </Box>

                                    {localStorage.getItem('auth_token') ?  eachTab(schedule)  : <div><MyListAssignmentsDemo /></div>}






                                </TabContext>
                            </Box>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default MyAssignmentsDemo
    ;