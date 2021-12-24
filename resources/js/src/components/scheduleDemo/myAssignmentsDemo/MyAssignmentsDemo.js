import * as React from 'react';
import { Box, Tab } from '@mui/material';
import { Container, Row, Col } from 'react-bootstrap';
import { TabContext, TabList, TabPanel } from '@material-ui/lab';
import './MyAssignmentsDemo.scss';
import MyListAssignmentsDemo from '../myListAssignmentsDemo/MyListAssignmentsDemo'

function MyAssignmentsDemo() {
    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

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
                                            <Tab label="Monday" value="1" />
                                            <Tab label="Tuesday" value="2" />
                                            <Tab label="Wednesday" value="3" />
                                            <Tab label="Thirsday" value="4" />
                                            <Tab label="Friday" value="5" />
                                            <Tab label="Saturday" value="6" />
                                            <Tab label="Sunday" value="7" />
                                        </TabList>
                                    </Box>
                                    <TabPanel value="1">
                                        <MyListAssignmentsDemo />
                                    </TabPanel>
                                    <TabPanel value="2">
                                        <MyListAssignmentsDemo />
                                    </TabPanel>
                                    <TabPanel value="3">
                                        <MyListAssignmentsDemo />
                                    </TabPanel>
                                    <TabPanel value="4">
                                        <MyListAssignmentsDemo />
                                    </TabPanel>
                                    <TabPanel value="5">
                                        <MyListAssignmentsDemo />
                                    </TabPanel>
                                    <TabPanel value="6">
                                        <MyListAssignmentsDemo />
                                    </TabPanel>
                                    <TabPanel value="7">
                                        <MyListAssignmentsDemo /></TabPanel>

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