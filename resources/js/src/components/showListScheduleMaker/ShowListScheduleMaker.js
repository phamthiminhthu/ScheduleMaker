import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import moment from 'moment';
import { Container, Row, Col } from 'react-bootstrap';
import { Table } from 'react-bootstrap';
import { instance } from '../../App';
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';
import './showListScheduleMaker.scss';



export default function ShowListScheduleMaker() {
    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    }

    const [loading, setLoading] = React.useState(false);

    const [schedule, setSchedule] = React.useState([]);
    React.useEffect(() => {
        let load = true;
        if (load) {
            instance.get(`api/schedule/all-auto-schedule`).then(res => {
                setSchedule(res.data);
                setLoading(true);
            }).catch(() => {

            });

        }
        return (() => {
            load = false;
        })
    }, []);

    const covertime = (time) => {
        return moment(time, "HH:mm").format("HH:mm");
    }
    const itemSchedule = (schedule) => {
        return (
            <>
                {
                    Object.keys(schedule).length > 0 ? (
                        <TabContext value={value}>
                            <Box sx={{ borderBottom: 1, borderColor: 'divider' }} className="text-center w-100 m-auto">
                                <TabList onChange={handleChange} aria-label="lab API tabs example" variant="scrollable"
                                    scrollButtons="auto">
                                    {Object.keys(schedule).length > 0 && Object.entries(schedule).map(([key, value]) => {
                                        return (
                                            <Tab label={"Schedule " + key} value={key} key={"sche" + key} />
                                        )
                                    })}
                                </TabList>
                            </Box>

                            {Object.keys(schedule).length > 0 &&
                                Object.entries(schedule).map(([key, value]) => {
                                    return (
                                        <TabPanel value={key} key={"schedule" + key}>
                                            <Table striped bordered hover>
                                                <thead>
                                                    <tr>
                                                        <th>Thứ</th>
                                                        <th>Mã lớp</th>
                                                        <th>Tên học phần</th>
                                                        <th>Mã học phần</th>
                                                        <th>Thời gian</th>

                                                    </tr>
                                                </thead>
                                                <tbody>

                                                    {

                                                        value.map((it, index) => {
                                                            return (
                                                                <tr key={"schedule_detail" + index}>
                                                                    <td>{it.week_day}</td>
                                                                    <td>{it.list_clazz_code}</td>
                                                                    <td>{it.name_subject}</td>
                                                                    <td>{it.subject_code}</td>
                                                                    <td>{covertime(it.startime)} - {covertime(it.endtime)}</td>
                                                                </tr>

                                                            )
                                                        })

                                                    }

                                                </tbody>
                                            </Table>
                                        </TabPanel>
                                    )
                                })
                            }

                        </TabContext>
                    ) : (
                        <div> 
                            <h3 className="text-center">
                            Không tồn tại thời khoá biểu nào phù hợp 
                            </h3>
                        </div>
                    )
                }
            </>
        )
    }

    return (
        <Container>
            <Row>
                <Col xs="12">
                    <div className="show-list-schedule-maker">
                        <h3 className="text-center mt-4 mb-4 title">All Schedule Maker Auto </h3>
                        <div className="show-list-schedule">
                            <div className="text-center w-100 m-auto">
                                {
                                    loading ? itemSchedule(schedule) : (
                                        <Stack sx={{ color: 'grey.500' }} spacing={2} direction="row">
                                            <CircularProgress color="secondary" />
                                        </Stack>
                                    )
                                }


                            </div>


                        </div>


                    </div>
                </Col>
            </Row>
        </Container>
    )

}